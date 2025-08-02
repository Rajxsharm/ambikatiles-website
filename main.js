
    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.glass-nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    //Hero tile grid animation

    const tileGrid = document.querySelector('.tile-grid');
    // Array of tile images
    
    const tileImages = [
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/b/r/brickso_brown_plus_1.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/h/o/holz_slate_plus_1.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/n/u/nuluxe_grigio.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/n/u/nuluxe_grigio_decor.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/n/u/nuluxe_gris_decor.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/p/e/pebblon_gris.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/t/i/tijolos_grass.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/t/a/tabula-beige_1.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/a/l/albert_decor_plus_1.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/b/r/brickso_brown_plus_1.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/g/e/geosand_brown_plus.jpg',
        'https://aglasiangranito.com/media/catalog/product/cache/56ca81913d9f6ab36f4b3a2a48362378/n/o/novart_grigio_decor.jpg',
        // '',
        
    ];
    // Clear existing tiles
    tileGrid.innerHTML = '';
    document.querySelectorAll('.tile-item').forEach((tile, index) => {
    tile.style.setProperty('--index', index);
});
    // Populate tile grid with images
    tileImages.forEach((image, index) => {
        const tileItem = document.createElement('div');
        tileItem.className = 'tile-item';
        tileItem.style.backgroundImage = `url(${image})`;
        tileGrid.appendChild(tileItem);
        
        // Animate tiles on load
        gsap.from(tileItem, {
            opacity: 0,
            y: 50,
            duration: 0.3,
            delay: index * 0.05,
            ease: 'power2.out',

        });
    });
// text change interval
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.hero-title span'); // Target the "Premium Tiles" text
    const words = ["Premium Tiles", "Luxury Designs", "Elegant Solutions", "Quality Materials", "Stylish Spaces"];
    let currentIndex = 0;

    function changeText() {
        textElement.style.opacity = '0'; // Fade out
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length; // Cycle through words
            textElement.textContent = words[currentIndex];
            textElement.style.opacity = '1'; // Fade in
        }, 500); // Wait for fade-out to complete
    }

    // Change text every 5 seconds
    setInterval(changeText, 5000);
});
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.hero-title span');
    const words = ["Premium Tiles", "Luxury Designs", "Elegant Solutions", "Quality Materials", "Stylish Spaces"];
    let currentIndex = 0;

    function changeText() {
        gsap.to(textElement, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                currentIndex = (currentIndex + 1) % words.length;
                textElement.textContent = words[currentIndex];
                gsap.to(textElement, { opacity: 1, duration: 0.5 });
            }
        });
    }

    setInterval(changeText, 5000);
});
    // Gallery functionality
    const galleryImages = [
        {
            src: 'https://content.iconworldoftile.com/content/tiles/thumb/glazed-porcelain-tiles-wood-look-porcelain-tiles-amberwood-wenge-grande.jpg',
            name: 'Porcelain Wood Effect',
            desc: 'Premium porcelain tile with realistic wood texture',
            specs: ['60x60 cm', '12 Colors', 'Anti-Slip']
        },
        {
            src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            name: 'Marble Look Tiles',
            desc: 'Elegant marble effect tiles for luxurious spaces',
            specs: ['80x80 cm', '8 Colors', 'High Gloss']
        },
        {
            src: 'https://materialdepot-images-hbh2cjbvbtfmanhx.z02.azurefd.net/application_image/bold-geometric-kitchen-backsplash-with-vibrant-blue-cabinets-52d51ba751.jpg?width=600',
            name: 'Geometric Pattern Tiles',
            desc: 'Modern geometric patterns for contemporary designs',
            specs: ['30x60 cm', '6 Colors', 'Matte Finish']
        },
        {
            src: 'https://ilexceramica.com/uploads/menu_logo/7411_subway.jpg',
            name: 'Subway Tiles',
            desc: 'Classic subway tiles for timeless appeal',
            specs: ['10x20 cm', '15 Colors', 'Glossy Finish']
        },
        {
            src: 'https://media.gettyimages.com/id/811852936/photo/living-room-interior-with-orange-armchair.jpg?s=612x612&w=gi&k=20&c=jtumh_Gm_rIIp746tHQVKmwgyWHvOn62xy9_bQyz-LU=',
            name: 'Hexagon Mosaic',
            desc: 'Unique hexagon mosaic tiles for feature walls',
            specs: ['Various Sizes', '5 Colors', 'Textured']
        },
        {
            src: 'https://www.lavishceramics.com/wp-content/webp-express/webp-images/uploads/2025/04/Oberon-Piombo-60X120_preview-800x400.jpg.webp',
            name: 'Concrete Effect Tiles',
            desc: 'Industrial concrete look for modern spaces',
            specs: ['60x60 cm', '4 Colors', 'Matte Finish']
        }
    ];

    const featuredTile = document.getElementById('featured-tile');
    const tileName = document.getElementById('tile-name');
    const tileDesc = document.getElementById('tile-desc');
    const tileSpecs = document.querySelectorAll('.tile-specs span');
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');

    // Set initial featured tile
    featuredTile.src = galleryImages[0].src;
    tileName.textContent = galleryImages[0].name;
    tileDesc.textContent = galleryImages[0].desc;
    galleryImages[0].specs.forEach((spec, index) => {
        tileSpecs[index].textContent = spec;
    });

    // Create thumbnails
    galleryImages.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        thumbnail.style.backgroundImage = `url(${image.src})`;
        thumbnail.addEventListener('click', function() {
            // Update featured tile
            featuredTile.src = image.src;
            tileName.textContent = image.name;
            tileDesc.textContent = image.desc;
            image.specs.forEach((spec, i) => {
                tileSpecs[i].textContent = spec;
            });
            
            // Animate transition
            gsap.to(featuredTile, {
                opacity: 0,
                duration: 0.3,
                onComplete: function() {
                    gsap.to(featuredTile, {
                        opacity: 1,
                        duration: 0.3
                    });
                }
            });
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            this.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumbnail);
    });

    // Stats counter animation
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(value => {
        const target = parseInt(value.getAttribute('data-count'));
        const duration = 2000;
        const startTime = Date.now();
        
        const animateCounter = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(progress * target);
            
            value.textContent = currentValue.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            }
        };
        
        // Start animation when section is in view
        ScrollTrigger.create({
            trigger: '.about-section',
            start: 'top 80%',
            onEnter: animateCounter,
            once: true
        });
    });

    // Form submission
    const enquiryForm = document.getElementById('enquiry-form');
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your enquiry! We will contact you soon.');
        this.reset();
    });

    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animation
    gsap.from('.hero-title, .hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 0.5
    });
    
    gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1
    });
    
    // Section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Floating tiles animation in about section
    gsap.to('.tile-1', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.tile-2', {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
    });
    
    gsap.to('.tile-3', {
        y: -25,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
    });
    
    // Product category hover animations
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this.querySelector('.category-icon'), {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this.querySelector('.category-icon'), {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navLinks.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });
});
