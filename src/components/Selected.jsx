import React, { useState } from 'react';
import { CardDeck, Card, Container, Button, Modal } from 'react-bootstrap'

const Selected = () => {
    const [showRonaldo, setShowRonaldo] = useState(false);
    const [showMessi, setShowMessi] = useState(false);
    const [showRobert, setShowRobert] = useState(false);

    const handleCloseRonaldo = () => setShowRonaldo(false);
    const handleShowRonaldo = () => setShowRonaldo(true);

    const handleCloseMessi = () => setShowMessi(false);
    const handleShowMessi = () => setShowMessi(true);

    const handleCloseRobert = () => setShowRobert(false);
    const handleShowRobert = () => setShowRobert(true);

    return (
        <Container className='mx-auto mb-3'>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="./img/man.jpg" />
                    <Card.Body>
                        <Card.Title className='text-right'>کریستانو رونالدو</Card.Title>
                        <Card.Text>
                            <Button variant="light" onClick={handleShowRonaldo} block>
                                درباره او
                            </Button>
                            <Modal show={showRonaldo} onHide={handleCloseRonaldo} className='dir-rtl'>
                                <Modal.Header>
                                    <Modal.Title>کریستیانو رونالدو</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='text-right'>
                                    کریستیانو رونالدو (دوس سانتوس آویرا) متولد پنجم فوریه سال 1985 که بیشتر با نام (کریستیانو رونالدو) معروف می‌باشد، فوتبالیست پرتغالی در رده حرفه‌ای است که در تیم‌های (منچستریونایتد) و (ملی پرتغال) بازی می‌کند. کریستیانو رونالدو یکی از بهترین بازیکنان دنیا و یکی از بهترین استعدادهای امروز فوتبال است.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseRonaldo}>
                                        بستن
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./img/real.jpg" />
                    <Card.Body>
                        <Card.Title className='text-right'>لیونل مسی</Card.Title>
                        <Card.Text>
                            <Button variant="light" onClick={handleShowMessi} block>
                                درباره او
                            </Button>
                            <Modal show={showMessi} onHide={handleCloseMessi} className='dir-rtl'>
                                <Modal.Header>
                                    <Modal.Title>لیونل مسی</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='text-right'>
                                    لیونل آندرس مسی 24 ژوئن 1987 در روزاریو، سانتافه در کشور آرژانتین به دنیا آمد. پدرش خورخه هوراکیو مسی، کارگر کارخانه بود و مادرش سلیا ماریا کوچیتینی٬ یک نظافتچی نیمه وقت بود.اصلیت والدین مسی ایتالیایی است و به شهر آنکونا باز می گردد. جد او، آنجلو مسی در سال 1883 به آرژانتین مهاجرت کرده است. مسی از پنج سالگی فوتبال خودش را در تیم گراندولی آغاز کرد؛ تیمی که پدرش در آن زمان مربیش بود. لیونل مسی در سال 1995 به نیوولز اولد بویز رفت تیمی که در همان شهر روزاریو قرار داشت.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseMessi}>
                                        بستن
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="./img/lewa.jpg" />
                    <Card.Body>
                        <Card.Title className='text-right'>روبرت لواندوفسکی</Card.Title>
                        <Card.Text>
                            <Button variant="light" onClick={handleShowRobert} block>
                                درباره او
                            </Button>
                            <Modal show={showRobert} onHide={handleCloseRobert} className='dir-rtl'>
                                <Modal.Header>
                                    <Modal.Title>روبرت لواندوفسکی</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='text-right'>
                                    روبرت در سال ۱۹۹۷ میلادی در تیم جوانان وارزویا ورشو به عنوان مهاجم مشغول بازی شد و پس از هفت سال بازی در این تیم در سال ۲۰۰۵ راهی تیم بزرگسالان دلتا ورشو شد و موفق به زدن ۴ گل در این تیم شد. در همان سال ۲۰۰۵ لواندوفسکی جوان به تیم لگیا ورشو پیوست و در آن تیم دو گل به ثمر رساند. سرانجام او سال ۲۰۰۶ لگیا را ترک کرد و راهی ژنیچ پراژکوف شد او در فصل اول حضور خود در ژنیچ با زدن ۱۵ گل آقای گل لیگ دو لهستان شد و نقش بسیار مهمی در قهرمانی تیم ژنیچ داشت. همچنین او در فصل بعد یعنی ۰۸–۲۰۰۷ با زدن ۲۱ گل و آقای گلی در لیگ یک فوتبال لهستان به بازی خود در این تیم پایان داد. روبرت فصل بعد را در بروسیا دورتموند بازی کرد روبرت علی‌رغم درخشش خود رد بازی‌ها نتوانست از ناکامی‌های تیمش جلوگیری کند آنها در آلمان هیچ جامی دریافت نکردند و لیگ قهرمانان اروپا را هم با کسب مقام دوم به پایان بردند. پس از موفقیت‌هایی که لواندوفسکی بدست آورد باشگاه بایرن مونیخ خواستار او شد و او قرارداد ۵ ساله‌ای را با این باشگاه امضا کرد. لواندوفسکی در سال ۲۰۱۵ به عنوان ورزشکار سال لهستان انتخاب شد.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseRobert}>
                                        بستن
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    );
}

export default Selected;