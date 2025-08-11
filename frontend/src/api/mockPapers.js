export const mockPapers = {
    subjects: [
        {
            subject_name: "Chemistry",
            subject_code: "5070",
            year: 2022,
            sessions: {
                s: {
                    papers: {
                        P1: {
                            variants: {
                                V1: {
                                    doc_types: {
                                        qp: "https://example.com/chemistry/2022/s/p1_v1_qp.pdf",
                                        ms: "https://example.com/chemistry/2022/s/p1_v1_ms.pdf"
                                    }
                                },
                                V2: {
                                    doc_types: {
                                        qp: "https://example.com/chemistry/2022/s/p1_v2_qp.pdf"
                                    }
                                }
                            }
                        },
                        P2: {
                            variants: {
                                V1: {
                                    doc_types: {
                                        qp: "https://example.com/chemistry/2022/s/p2_v1_qp.pdf",
                                        ms: "https://example.com/chemistry/2022/s/p2_v1_ms.pdf"
                                    }
                                }
                            }
                        }
                    }
                },
                w: {
                    papers: {
                        P1: {
                            variants: {
                                V1: {
                                    doc_types: {
                                        qp: "https://example.com/chemistry/2022/w/p1_v1_qp.pdf",
                                        ms: "https://example.com/chemistry/2022/w/p1_v1_ms.pdf"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        {
            subject_name: "Physics",
            subject_code: "5054",
            year: 2024,
            sessions: {
                s: {
                    papers: {
                        P3: {
                            variants: {
                                V1: {
                                    doc_types: {
                                        qp: "https://example.com/physics/2024/s/p3_v1_qp.pdf"
                                    }
                                }
                            }
                        }
                    }
                },
                w: {
                    papers: {
                        P4: {
                            variants: {
                                V2: {
                                    doc_types: {
                                        ms: "https://example.com/physics/2024/w/p4_v2_ms.pdf",
                                        qp: "https://example.com/physics/2024/w/p4_v2_qp.pdf"
                                    }
                                }
                            }
                        },
                        P5: {
                            variants: {
                                V1: {
                                    doc_types: {
                                        qp: "https://example.com/physics/2024/w/p5_v1_qp.pdf"
                                    }
                                },
                                V2: {
                                    doc_types: {
                                        ms: "https://example.com/physics/2024/w/p5_v2_ms.pdf"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    ]
};

// helpers
export function findSubjectYear(subjectName, year) {
    return mockPapers.subjects.find(
        s => s.subject_name === subjectName && String(s.year) === String(year)
    ) || null;
}

export function flattenSession(sessionObj) {
    if (!sessionObj?.papers) return [];
    const out = [];
    Object.entries(sessionObj.papers).forEach(([paper, paperObj]) => {
        Object.entries(paperObj.variants || {}).forEach(([variant, vObj]) => {
            const links = vObj.doc_types || {};
            out.push({
                paper,
                variant,
                types: Object.keys(links),
                links
            });
        });
    });
    return out;
}
