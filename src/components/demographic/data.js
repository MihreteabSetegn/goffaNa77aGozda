import React from 'react'

const Data = () => {
    return (
        <div style={{ color: "white"}}>
            <div style={{fontFamily: "fantasy", marginRight: "80px"}}>
                <h1 >
                        Socio-economic Summary
                </h1>
            </div>   
            <div className="dataContianer">
                <table className="sticky-thc container border" style={{fontFamily: "cursive"}}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Woreda/Town/</th>
                            <th>Kebeles</th>
                            <th>Population</th>
                            <th>Hospital</th>
                            <th>Health center </th>
                            <th>Health Posts</th>
                            <th>Private Clinics</th>
                            <th>School Age Pop (7-14)</th>
                            <th>School Age Pop (15-18)</th>
                            <th>Primary schools</th>
                            <th>Secondary Schools</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Uba Debre Tsehay</td>
                            <td>20</td>
                            <td>146953</td>
                            <td>2</td>
                            <td>4</td>
                            <td>19</td>
                            <td>9</td>
                            <td>39141</td>
                            <td>4142</td>
                            <td>37</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Zala Woreda</td>
                            <td>36</td>
                            <td>157153</td>
                            <td>0</td>
                            <td>5</td>
                            <td>35</td>
                            <td>15</td>
                            <td>39229</td>
                            <td>6031</td>
                            <td>43</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Oyda Woreda</td>
                            <td>20</td>
                            <td>70144</td>
                            <td>0</td>
                            <td>2</td>
                            <td>19</td>
                            <td>3</td>
                            <td>17755</td>
                            <td>3086</td>
                            <td>31</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sawla Town</td>
                            <td>10</td>
                            <td>100336</td>
                            <td>1</td>
                            <td>1</td>
                            <td>4</td>
                            <td>8</td>
                            <td>19074</td>
                            <td>10266</td>
                            <td>10</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Demba Gofa Woreda</td>
                            <td>34</td>
                            <td>172820</td>
                            <td>0</td>
                            <td>4</td>
                            <td>34</td>
                            <td>13</td>
                            <td>35805</td>
                            <td>4994</td>
                            <td>57</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Geze Gofa Woreda</td>
                            <td>33</td>
                            <td>106372</td>
                            <td>0</td>
                            <td>4</td>
                            <td>27</td>
                            <td>4</td>
                            <td>27709</td>
                            <td>2732</td>
                            <td>42</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Bulki Town</td>
                            <td>5</td>
                            <td>32012</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>7</td>
                            <td>7890</td>
                            <td>494</td>
                            <td>5</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Melo Koza Woreda</td>
                            <td>29</td>
                            <td>161141</td>
                            <td>1</td>
                            <td>4</td>
                            <td>29</td>
                            <td>23</td>
                            <td>57985</td>
                            <td>8657</td>
                            <td>45</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Melo Gada Woreda</td>
                            <td>14</td>
                            <td>71757</td>
                            <td>0</td>
                            <td>1</td>
                            <td>8</td>
                            <td>4</td>
                            <td>20652</td>
                            <td>2132</td>
                            <td>33</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Total</td>
                            <td>201</td>
                            <td>1018688</td>
                            <td>4</td>
                            <td>26</td>
                            <td>177</td>
                            <td>86</td>
                            <td>265240</td>
                            <td>42534</td>
                            <td>303</td>
                            <td>28</td>
                        </tr>
                    </tbody>
                </table>
            </div>  
        </div>
    )
}

export default Data;
