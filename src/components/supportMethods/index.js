import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link} from "@material-ui/core";

const SupportMethods = () => {
    return (
        <div>
            <h2 style={{
                color: "white",
                fontFamily: "fantasy",
                marginBottom: "10px",
                marginTop: "10px",
                marginLeft: "10px",
                marginRight: "10px",
                }}>
                Want to help us <span style={{fontSize: "30px"}}>help</span> those in need? 
                please find below ways to give back to the community.
            </h2>
            <div>
                <span>
                    <DoubleArrowIcon style={{
                        color: "white",
                        marginBottom: "10px"
                    }}/>
                    <span style={{
                        color: "white",
                        paddingLeft: "5px",
                        fontFamily: "serif"
                    }}>
                        Donate Via GoFundMe Account set and administered by the association
                    </span>
                    <Link href="https://www.gofundme.com/f/gara-members-monthly-contribution?utm_campaign=p_cf+share-flow-1&utm_medium=copy_link&utm_source=customer" target="_blank"
                    style={{color: "#FA8072", paddingLeft: "5px", fontSize: "30px", fontFamily: "fantasy"}}
                    >GoFundMe</Link>
                </span>
            </div>
            <div>
                <span>
                    <DoubleArrowIcon style={{
                        color: "white", 
                        marginBottom: "10px" 
                    }}/>
                    <span style={{
                        color: "white",
                        paddingLeft: "5px",
                        fontFamily: "serif"
                    }}>
                        Donate Via <span style={{color: "#FA8072", fontSize: "50px", fontFamily: "fantasy"}}> Zelle </span> Payment, Account set and administered by the association,
                    </span>
                    <button  onClick={false} target="_blank"
                    style={{color: "#FA8072", paddingLeft: "5px", fontSize: "20px", fontFamily: "fantasy"}}
                    >gofagara@gmail.com and phone number: +1 (507)-476-5974 </button>
                </span>
            </div>
            <div>
                <span>
                    <DoubleArrowIcon style={{
                        color: "white"
                    }}/>
                    <span style={{
                        color: "white",
                        paddingLeft: "5px",
                        fontFamily: "serif"
                    }}>
                        Donate Via <span style={{color: "#FA8072", fontSize: "30px", fontFamily: "fantasy"}}> Check </span>, Account set and administered by the association.
                    </span>
                    <p style={{color: "white"}}>Note: please write "Pay to "GARA" or "Greater Gofa 
                        Relief Association" ".
                    </p>
                    <span style={{color: "white"}}>
                        Mailing information = [
                            Name = Samuel Dossa Morgamo, 
                            Address = 1943 Lexington Avenue, Apt. 12, 
                            Roseville, MN 55113
                        ]
                    </span>
                </span>
            </div>
        </div>
        
    )
}

export default SupportMethods;
