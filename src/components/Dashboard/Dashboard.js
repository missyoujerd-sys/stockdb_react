import React, { useState } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../Layout/Navbar';

export default function Dashboard() {
    // Placeholder state for stats - in a real app would fetch from Firebase
    const [stats, setStats] = useState({
        totalStock: 0,
        receivedToday: 0,
        dispatchedTotal: 0
    });

    return (
        <>
            <NavigationBar />
            <Container>
                <h2 className="mb-4">แผงควบคุมหลัก</h2>

                <Row className="mb-4">
                    <Col md={4}>
                        <Card className="text-center shadow-sm mb-3">
                            <Card.Body>
                                <Card.Title>สินค้าคงเหลือทั้งหมด</Card.Title>
                                <h1 className="display-4 text-primary">{stats.totalStock}</h1>
                                <Card.Text>รายการ</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center shadow-sm mb-3">
                            <Card.Body>
                                <Card.Title>รับเข้าวันนี้</Card.Title>
                                <h1 className="display-4 text-success">{stats.receivedToday}</h1>
                                <Card.Text>รายการ</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center shadow-sm mb-3">
                            <Card.Body>
                                <Card.Title>จำหน่ายแล้วทั้งหมด</Card.Title>
                                <h1 className="display-4 text-warning">{stats.dispatchedTotal}</h1>
                                <Card.Text>รายการ</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h3 className="mb-3">เมนูด่วน</h3>
                <Row>
                    <Col md={4}>
                        <Link to="/stock-receiving" className="text-decoration-none">
                            <div className="d-grid gap-2">
                                <Button variant="outline-primary" size="lg" className="py-4">
                                    <i className="bi bi-box-arrow-in-down mb-2" style={{ fontSize: '2rem' }}></i><br />
                                    รับสินค้าเข้า
                                </Button>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to="/stock-dispatch" className="text-decoration-none">
                            <div className="d-grid gap-2">
                                <Button variant="outline-warning" size="lg" className="py-4">
                                    <i className="bi bi-box-arrow-up mb-2" style={{ fontSize: '2rem' }}></i><br />
                                    จำหน่ายสินค้า
                                </Button>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to="/stock-list" className="text-decoration-none">
                            <div className="d-grid gap-2">
                                <Button variant="outline-info" size="lg" className="py-4">
                                    <i className="bi bi-list-check mb-2" style={{ fontSize: '2rem' }}></i><br />
                                    ดูรายการทั้งหมด
                                </Button>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
