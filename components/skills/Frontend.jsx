// eslint-disable-next-line no-unused-vars
import React from 'react'
import boxicons from 'boxicons'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bxl-html5'></i>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-css3' ></i>

                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-javascript' ></i>

                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bxl-bootstrap' ></i>

                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bxl-react' ></i>

                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bxl-redux' ></i>

                    <div>
                        <h3 className="skills__name">Redux</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className='bx bxl-python' ></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend