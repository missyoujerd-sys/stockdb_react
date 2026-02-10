import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../Layout/Navbar';

export default function Dashboard() {

    return (
        <>
            <NavigationBar />
            <Container>

                <h3 className="mb-3">เมนูด่วน</h3>
                <Row>
                    <Col md={4}>
                        <Link to="/stock-receiving" className="text-decoration-none">
                            <div className="d-grid gap-2">
                                <Button variant="outline-primary" size="lg" className="py-4">
                                    <i className="bi bi-box-arrow-in-down mb-2" style={{ fontSize: '2rem' }}></i><br />
                                    รับอุปกรณ์รอจำหน่ายเข้า
                                </Button>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link to="/stock-dispatch" className="text-decoration-none">
                            <div className="d-grid gap-2">
                                <Button variant="outline-warning" size="lg" className="py-4">
                                    <i className="bi bi-box-arrow-up mb-2" style={{ fontSize: '2rem' }}></i><br />
                                    จ่ายอุปกรณ์จำหน่ายออก
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

