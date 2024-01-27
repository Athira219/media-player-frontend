import React from 'react'
import { Link } from 'react-router-dom'

function Footer(){
return(
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column '>
        <div className='d-flex justify-content-evenly align-items-center w-100'> 
            <div className='websites' style={{width:'400px'}}>
            <h4 className='mb-3' >
            <i class="fa-solid fa-video text-warning me-3"></i>
            Video Player
            </h4>
            <h6 style={{textAlign:'justify',color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum eum, distinctio nihil consequatur aperiam molestiae velit officiis ducimus assumenda similique. </h6>
                <h6 >Lorem ipsum, dolor sit amet consectetur  </h6>
               
            </div>
            <div className='links d-flex flex-column'>
                <h4 className='mb-3'>Links</h4>

                <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
                <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
                

            </div>
            <div className='guides d-flex flex-column'>
                <h4 className='mb-3'>Guides</h4>

                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>React Watch</Link>
                

            </div>
            <div className='contact d-flex flex-column' >
                <h4 className='mb-3'>Contact Us</h4>
                <div className='d-flex mb-2'>
                    <input type="text" placeholder='Enter Your Email ID' className='form-control' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center'>

                    <Link to={'https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s%7Cc%7C547419127631%7Ce%7Cinstagram%20%27%7C&placement=&creative=547419127631&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9040212%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmLNttBUdhaHcOVSQNlUNCvDvVtdqjIs5wuBh9mf12vgsLyI6b0noAAaAjbWEALw_wcB'}
                     style={{textDecoration:'none',color:'white' , marginTop:'3px'}}><i class="fa-brands fa-instagram  fa-2x  "></i></Link>
                <Link to={'https://twitter.com/i/flow/login'} style={{textDecoration:'none',color:'white', marginTop:'3px'}}><i class="fa-brands fa-twitter fa-2x "></i></Link>
                <Link to={'https://in.linkedin.com/'} style={{textDecoration:'none',color:'white', marginTop:'3px'}}><i class="fa-brands fa-linkedin fa-2x "></i></Link>
                <Link to={'https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Cb%7Cfacebook%7C&placement=&creative=550525804791&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9040212%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmL6cR9nvG9Qawzkmk5PJ_uJ11hrpB9YL9wStSDVick1KApw_cuPEEoaAonREALw_wcB'} 
                style={{textDecoration:'none',color:'white ', marginTop:'3px'}}><i class="fa-brands fa-facebook fa-2x "></i></Link>
                

                   
                </div>


            </div>
              </div>
              <p className='mt-5'>Copyright &#64; 2023 Video Player Built with React.</p>
        
    </div>
)
}

export default Footer