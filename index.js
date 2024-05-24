require("./index.css");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$reactdomclient = require("react-dom/client");
var $ltMAx$react = require("react");
var $ltMAx$reactrouterdom = require("react-router-dom");
var $ltMAx$reacticonsio5 = require("react-icons/io5");
var $ltMAx$reacticonsfa6 = require("react-icons/fa6");
var $ltMAx$reacticonsfa = require("react-icons/fa");
var $ltMAx$reacticonsio = require("react-icons/io");
var $ltMAx$firebaseauth = require("firebase/auth");
var $ltMAx$firebaseapp = require("firebase/app");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}








const $c4bd5e6859d40c91$export$4051a07651545597 = [
    {
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
    },
    {
        title: "Black and white Colors",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
    },
    {
        title: "Blue Color",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
    }
];




const $6281c60807d737a5$export$5558332cef65f159 = /*#__PURE__*/ (0, $ltMAx$react.createContext)();
const $6281c60807d737a5$var$initialState = {
    items: [],
    totalAmount: 0
};
const $6281c60807d737a5$var$reducer = (state, action)=>{
    switch(action.type){
        case "ADD_CART_ITEM":
            const existItem = state.items.find((item)=>item.imageUrl == action.payload.imageUrl);
            if (existItem == undefined) return {
                items: [
                    ...state.items,
                    action.payload
                ],
                totalAmount: state.totalAmount + action.payload.price
            };
            alert("Already Added to the Cart..");
            return state;
        case "REMOVE_FROM_CART":
            const removeItem = state.items.find((item)=>item.imageUrl == action.payload);
            return {
                items: state.items.filter((item)=>item.imageUrl != action.payload),
                totalAmount: state.totalAmount - removeItem.price
            };
        case "CLEAR_CART":
            alert("Thanks for purchasing!");
            return {
                items: [],
                totalAmount: 0
            };
        default:
            return state;
    }
};
const $6281c60807d737a5$var$CartContextProvider = ({ children: children })=>{
    const [state, dispatch] = (0, $ltMAx$react.useReducer)($6281c60807d737a5$var$reducer, $6281c60807d737a5$var$initialState);
    const addToCart = (item)=>{
        dispatch({
            type: "ADD_CART_ITEM",
            payload: item
        });
    };
    const removeFromCart = (id)=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        });
    };
    const clearCart = ()=>{
        if (state.items.length) dispatch({
            type: "CLEAR_CART"
        });
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($6281c60807d737a5$export$5558332cef65f159.Provider, {
        value: {
            state: state,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        },
        children: children
    });
};
var $6281c60807d737a5$export$2e2bcd8739ae039 = $6281c60807d737a5$var$CartContextProvider;







const $c935f5d12d4d42b7$var$Footer = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "w-full h-24 mt-10 bg-cyan-400 text-white flex justify-between items-center px-20",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "text-5xl font-semibold",
                children: "The Generics"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                className: "flex justify-center items-center gap-10",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio5.IoLogoYoutube), {
                            size: 40
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsfa6.FaSpotify), {
                            size: 40
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsfa.FaFacebookF), {
                            size: 40
                        })
                    })
                ]
            })
        ]
    });
};
var $c935f5d12d4d42b7$export$2e2bcd8739ae039 = $c935f5d12d4d42b7$var$Footer;










const $d960b45042159df1$var$CartItems = ({ item: item })=>{
    const { removeFromCart: removeFromCart } = (0, $ltMAx$react.useContext)((0, $6281c60807d737a5$export$5558332cef65f159));
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "m-3 flex items-center justify-between gap-2 p-2",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "h-24 flex gap-5 items-center border-b border-b-black",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                        src: item.imageUrl,
                        alt: "",
                        className: "w-16 h-20 rounded-lg"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                        className: "w-16",
                        children: item.title
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "h-24 pt-9 border-b border-b-black py-2",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                    children: item.price
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "h-24 flex gap-2 border-b border-b-black py-2",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                        className: "h-8 mt-5 px-2 border border-cyan-500",
                        children: "1"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                        className: "h-8 mt-5 px-2 bg-red-500 rounded-md hover:bg-red-600 text-white font-semibold",
                        onClick: ()=>removeFromCart(item.imageUrl),
                        children: "REMOVE"
                    })
                ]
            })
        ]
    });
};
var $d960b45042159df1$export$2e2bcd8739ae039 = $d960b45042159df1$var$CartItems;



const $e0c6133c200b2797$var$Cart = ({ onClose: onClose, cartItems: cartItems })=>{
    const { state: state, clearCart: clearCart } = (0, $ltMAx$react.useContext)((0, $6281c60807d737a5$export$5558332cef65f159));
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "bg-white border border-red-800 z-10 h-[92vh] w-[70vw] md:w-1/3 lg:w-1/4 fixed right-0",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                className: "text-black border-2 rounded-lg px-2 pb-1 absolute right-3 top-3 font-bold text-2xl hover:bg-slate-700 hover:text-white",
                onClick: onClose,
                children: "x"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "font-mania text-3xl font-bold text-center mt-10 b-5",
                children: "CART"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "flex gap-7 m-4",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "mb-3 font-bold text-xl",
                                children: "ITEM"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "w-28 border border-black"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "mb-3 font-bold text-xl",
                                children: "PRICE"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "w-15 border border-black"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "mb-3 font-bold text-xl",
                                children: "QUANTITY"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "w-24 border border-black"
                            })
                        ]
                    })
                ]
            }),
            cartItems.items.map((item)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $d960b45042159df1$export$2e2bcd8739ae039), {
                    item: item
                }, item.imageUrl)),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "flex gap-4 right-6 absolute",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                        className: "font-semibold text-2xl font-serif",
                        children: "Total"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                        className: "text-xl",
                        children: [
                            "$",
                            state.totalAmount
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                className: "mx-32 my-3 mt-10 p-3 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold text-xl rounded-md",
                onClick: clearCart,
                children: "PURCHASE"
            })
        ]
    });
};
var $e0c6133c200b2797$export$2e2bcd8739ae039 = $e0c6133c200b2797$var$Cart;







const $02364a2da416eb8d$var$firebaseConfig = {
    apiKey: "AIzaSyC6W3_QQN4QROqguikMrPac8y-JOpQqEn8",
    authDomain: "react-48df0.firebaseapp.com",
    projectId: "react-48df0",
    storageBucket: "react-48df0.appspot.com",
    messagingSenderId: "528338704084",
    appId: "1:528338704084:web:1747ba984df4d6a6de4d41"
};
// Initialize Firebase
const $02364a2da416eb8d$var$app = (0, $ltMAx$firebaseapp.initializeApp)($02364a2da416eb8d$var$firebaseConfig);
const $02364a2da416eb8d$export$73693bad9f5880b0 = (0, $ltMAx$firebaseauth.getAuth)($02364a2da416eb8d$var$app);


const $e93279095014f32c$var$Navbar = ()=>{
    const [isCartOpen, setIsCartOpen] = (0, $ltMAx$react.useState)(false);
    const { state: state } = (0, $ltMAx$react.useContext)((0, $6281c60807d737a5$export$5558332cef65f159));
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const name = localStorage.getItem("user-name");
    const handleLogout = ()=>{
        (0, $ltMAx$firebaseauth.signOut)((0, $02364a2da416eb8d$export$73693bad9f5880b0)).then(()=>{
            alert("Successfully logout");
            localStorage.removeItem("user-name");
            navigate("/");
        }).catch((err)=>{
            console.error(err);
        });
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "w-full h-16 top-0 p-4 lg:px-10 bg-black text-white flex justify-between items-center fixed z-20",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h4", {
                            className: "text-white font-mania text-2xl",
                            children: (0, $02364a2da416eb8d$export$73693bad9f5880b0).currentUser?.email ? name?.toUpperCase() || (0, $02364a2da416eb8d$export$73693bad9f5880b0).currentUser?.email.split("@")[0] : (0, $02364a2da416eb8d$export$73693bad9f5880b0).currentUser?.email.split("@")[0] || "User"
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                            className: "flex justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                    className: "cursor-pointer duration-500 hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/",
                                        children: "HOME"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                    className: "cursor-pointer duration-500 hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/store",
                                        children: "STORE"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                    className: "cursor-pointer duration-500 hover:bg-cyan-400 p-2 rounded-lg text-[18px] font-semibold",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/about",
                                        children: "ABOUT"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            (0, $02364a2da416eb8d$export$73693bad9f5880b0).currentUser?.email ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                        className: "border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300",
                                        onClick: ()=>setIsCartOpen(true),
                                        children: "cart"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("sup", {
                                        className: "text-2xl text-cyan-500 rounded-lg px-1",
                                        children: state.items.length
                                    })
                                ]
                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                to: "/signup",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                    className: "border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300",
                                    children: "Signup"
                                })
                            }),
                            (0, $02364a2da416eb8d$export$73693bad9f5880b0).currentUser?.email ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                className: "border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300",
                                onClick: handleLogout,
                                children: "Logout"
                            }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                to: "/login",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                    className: "border-2 border-cyan-500 px-4 p-1 font-semibold rounded-lg hover:bg-cyan-300",
                                    children: "Login"
                                })
                            })
                        ]
                    })
                ]
            }),
            isCartOpen && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $e0c6133c200b2797$export$2e2bcd8739ae039), {
                onClose: ()=>setIsCartOpen(false),
                cartItems: state
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "bg-[#777777]",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                    className: "text-8xl w-full mt-16 text-white font-serif font-bold p-5 text-wrap text-center",
                    children: "The Generics"
                })
            })
        ]
    });
};
var $e93279095014f32c$export$2e2bcd8739ae039 = $e93279095014f32c$var$Navbar;



const $b5944f8c068bcb5d$var$Products = ()=>{
    const { addToCart: addToCart } = (0, $ltMAx$react.useContext)((0, $6281c60807d737a5$export$5558332cef65f159));
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $e93279095014f32c$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "flex flex-col items-center mx-auto mt-10",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                        className: "font-mania font-bold text-3xl text-center",
                        children: "MUSIC"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "w-2/3 flex flex-wrap mx-auto p-10",
                        children: (0, $c4bd5e6859d40c91$export$4051a07651545597).map((product, index)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                className: "w-1/3 flex flex-col items-center mx-20 my-10",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        className: "m-2",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                            className: "text-center font-bold text-xl",
                                            children: product.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        className: "w-2/3 m-1 overflow-hidden",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                            src: product.imageUrl,
                                            alt: "Product-image",
                                            className: "hover:scale-150 transition-all duration-500"
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "my-3 flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                                                className: "font-medium",
                                                children: [
                                                    "$",
                                                    product.price
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                                className: "w-40 font-light py-1 font-serif rounded bg-cyan-500 hover:bg-cyan-400 text-xl text-white",
                                                onClick: ()=>{
                                                    addToCart(product);
                                                },
                                                children: "ADD TO CART"
                                            })
                                        ]
                                    })
                                ]
                            }, index))
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                        className: "bg-cyan-400 hover:bg-cyan-600 text-white font-semibold text-2xl p-3 mt-10 rounded-md",
                        children: "See the cart"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $c935f5d12d4d42b7$export$2e2bcd8739ae039), {})
        ]
    });
};
var $b5944f8c068bcb5d$export$2e2bcd8739ae039 = $b5944f8c068bcb5d$var$Products;







const $fb36506a31b34341$var$About = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $e93279095014f32c$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "m-5 w-2/3 mx-auto",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                        className: "font-mania font-bold text-3xl text-center m-10",
                        children: "ABOUT"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "flex gap-10 items-center",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                src: "https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png",
                                alt: "Band0image",
                                className: "w-56 h-56 rounded-full"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                children: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow. Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $c935f5d12d4d42b7$export$2e2bcd8739ae039), {})
        ]
    });
};
var $fb36506a31b34341$export$2e2bcd8739ae039 = $fb36506a31b34341$var$About;






const $703b745aceebb239$var$Tour = ()=>{
    const tours = [
        {
            id: 1,
            date: "JUL16",
            place: "DETROIT, MI",
            description: "DTE ENERGY MUSIC THEATRE"
        },
        {
            id: 2,
            date: "JUL19",
            place: "TORONTO",
            description: "ONBUDWEISER STAGE"
        },
        {
            id: 3,
            date: "JUL 29",
            place: "PHOENIX",
            description: "AZAK-CHIN PAVILION"
        },
        {
            id: 4,
            date: "AUG 2",
            place: "LAS VEGAS",
            description: "T-MOBILE ARENA"
        },
        {
            id: 5,
            date: "AUG 7",
            place: "CONCORD, CA",
            description: "CONCORD PAVILION"
        },
        {
            id: 6,
            date: "JUL19",
            place: "TORONTO, CA",
            description: "ONBUDWEISER STAGE"
        }
    ];
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                className: "text-center font-bold text-3xl my-5 font-mania",
                children: "TOURS"
            }),
            tours.map((tour, index)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: "w-1/2 flex justify-center gap-10 mx-auto border-b-2 py-2 border-cyan-500 mb-5",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                            className: "w-20",
                            children: tour.date
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                            className: "w-20",
                            children: tour.place
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                            className: "w-40 h-10",
                            children: tour.description
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                            className: "bg-cyan-500 h-10 px-2 py-1 rounded-lg text-white hover:bg-cyan-600",
                            children: "BUY TICKETS"
                        })
                    ]
                }, index))
        ]
    });
};
var $703b745aceebb239$export$2e2bcd8739ae039 = $703b745aceebb239$var$Tour;





const $49bca6537ece0af9$var$Home = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $e93279095014f32c$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "bg-[#777777] flex flex-col justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                className: "px-5 py-3 border-2 border-cyan-500 text-white text-xl font-bold",
                                children: "Get our latest album"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "w-20 h-20 text-cyan-500 border-2 border-cyan-400 rounded-full m-5",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio.IoMdPlay), {
                                    size: 60,
                                    className: "mx-3 my-2"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $703b745aceebb239$export$2e2bcd8739ae039), {})
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $c935f5d12d4d42b7$export$2e2bcd8739ae039), {})
        ]
    });
};
var $49bca6537ece0af9$export$2e2bcd8739ae039 = $49bca6537ece0af9$var$Home;








const $97a716b6e8449d46$var$Signup = ()=>{
    const [userName, setUserName] = (0, $ltMAx$react.useState)("");
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [confirmPassword, setConfirmPassword] = (0, $ltMAx$react.useState)("");
    const [showPassword, setShowPassword] = (0, $ltMAx$react.useState)(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, $ltMAx$react.useState)(false);
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const signupHandler = (e)=>{
        e.preventDefault();
        console.log(userName, email, password, confirmPassword);
        if (password !== confirmPassword) {
            alert("Password doesn't match");
            return;
        }
        if (password.length < 6) {
            alert("Password length should be at least 6");
            return;
        }
        if (email === "" || password === "" || userName === "") {
            alert("Fill all the fields");
            return;
        }
        localStorage.setItem("user-name", userName);
        (0, $ltMAx$firebaseauth.createUserWithEmailAndPassword)((0, $02364a2da416eb8d$export$73693bad9f5880b0), email, password).then((userCredential)=>{
            const user = userCredential.user;
            alert("Successfully account created!");
            navigate("/");
            console.log(user);
        }).catch((error)=>{
            console.error(error.code, error.message);
        });
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "text-center text-4xl text-amber-700 font-bold top-40 relative",
                children: "Sign Up"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                className: "flex flex-col justify-center items-center lg:w-1/4 w-full mx-auto my-44 border-2 border-cyan-600 py-10 bg-gray-200 relative",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                        type: "text",
                        placeholder: "Full name..",
                        required: true,
                        className: "p-2 m-2 w-1/2 outline-none border border-slate-800",
                        value: userName,
                        onChange: (e)=>setUserName(e.target.value)
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                        type: "email",
                        placeholder: "Email..",
                        required: true,
                        className: "p-2 m-2 w-1/2 outline-none border border-slate-800",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value)
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "relative w-[54%] flex items-center",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                type: showPassword ? "text" : "password",
                                placeholder: "password..",
                                required: true,
                                className: "p-2 m-2 w-full outline-none border border-slate-800",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value)
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                onMouseDown: ()=>setShowPassword((prev)=>!prev),
                                onMouseUp: ()=>setShowPassword((prev)=>!prev),
                                className: "cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2",
                                children: showPassword ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio5.IoEyeOff), {
                                    size: 25
                                }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio5.IoEye), {
                                    size: 25
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "relative w-[54%] flex items-center",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                type: showConfirmPassword ? "text" : "password",
                                placeholder: "confirm password..",
                                required: true,
                                className: "p-2 m-2 w-full outline-none border border-slate-800",
                                value: confirmPassword,
                                onChange: (e)=>setConfirmPassword(e.target.value)
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                onMouseDown: ()=>setShowConfirmPassword((prev)=>!prev),
                                onMouseUp: ()=>setShowConfirmPassword((prev)=>!prev),
                                className: "cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2",
                                children: showConfirmPassword ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio5.IoEyeOff), {
                                    size: 25
                                }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio5.IoEye), {
                                    size: 25
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                        className: "px-4 py-2 m-2 w-1/2 bg-cyan-400 rounded text-white font-semibold hover:bg-cyan-500",
                        onClick: signupHandler,
                        children: "Sign up"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                        className: "underline text-blue-600 p-2",
                        children: [
                            "Have an account?",
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                className: "text-purple-600 mx-1 font-semibold cursor-pointer",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                    to: "/login",
                                    children: "Login"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $97a716b6e8449d46$export$2e2bcd8739ae039 = $97a716b6e8449d46$var$Signup;








const $41f71f5a6f8b36cf$var$Login = ()=>{
    const [email, setEmail] = (0, $ltMAx$react.useState)("");
    const [password, setPassword] = (0, $ltMAx$react.useState)("");
    const [showPassword, setShowPassword] = (0, $ltMAx$react.useState)(false);
    const [firebaseError, setFirebaseError] = (0, $ltMAx$react.useState)(false);
    const navigate = (0, $ltMAx$reactrouterdom.useNavigate)();
    const emailHandler = (e)=>{
        setEmail(e.target.value);
        setFirebaseError(false);
    };
    const passwordHandler = (e)=>{
        setFirebaseError(false);
        setPassword(e.target.value);
    };
    const loginHandler = (e)=>{
        e.preventDefault();
        if (email === "" || password === "" || password.length < 6) {
            alert("Incorrect details! login failed..");
            return;
        }
        (0, $ltMAx$firebaseauth.signInWithEmailAndPassword)((0, $02364a2da416eb8d$export$73693bad9f5880b0), email, password).then((userCredential)=>{
            const user = userCredential.user;
            alert("Login successful!");
            navigate("/store");
        }).catch((err)=>{
            setFirebaseError(true);
            alert("Please signup! To access..");
            navigate("/signup");
            console.error(err.message);
        });
        setEmail("");
        setPassword("");
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "md:w-1/4 w-full mx-auto my-44 border-2 border-cyan-600 py-5 bg-gray-200 relative",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "text-4xl font-bold text-amber-500 text-center mb-4",
                children: "Login"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                className: "flex flex-col justify-center items-center",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                        type: "email",
                        placeholder: "Email..",
                        required: true,
                        className: "p-2 m-2 w-1/2 outline-none border border-slate-800",
                        value: email,
                        onChange: emailHandler
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "relative w-[55%] flex items-center",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                type: !showPassword ? "password" : "text",
                                placeholder: "Password..",
                                required: true,
                                className: "p-2 m-2 w-full outline-none border border-slate-800",
                                value: password,
                                onChange: passwordHandler
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                className: "absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer",
                                onMouseDown: ()=>password !== "" ? setShowPassword((prev)=>!prev) : null,
                                onMouseUp: ()=>password !== "" ? setShowPassword((prev)=>!prev) : null,
                                children: !showPassword ? /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio5.IoEye), {
                                    size: 20
                                }) : /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio5.IoEyeOff), {
                                    size: 20
                                })
                            })
                        ]
                    }),
                    firebaseError && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                        className: "text-red-700 px-3",
                        children: "Incorrect login details"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                        className: "px-4 py-2 m-2 w-1/2 bg-cyan-400 rounded text-white font-semibold hover:bg-cyan-500",
                        onClick: loginHandler,
                        children: "Login"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                        className: "underline text-blue-600 p-2",
                        children: [
                            "Don't Have an account?",
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                className: "text-purple-600 mx-1 font-semibold cursor-pointer",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                    to: "/signup",
                                    children: "Sign up"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $41f71f5a6f8b36cf$export$2e2bcd8739ae039 = $41f71f5a6f8b36cf$var$Login;





const $7cf09d846b9a3d57$var$Error = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
        className: "h-screen text-center my-52 text-5xl font-bold text-red-500",
        children: [
            "Something went wrong!",
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("span", {
                className: "mx-4 text-3xl",
                children: [
                    "GO back",
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                        to: "/",
                        className: "text-emerald-600 underline block m-5 text-4xl",
                        children: "Home"
                    })
                ]
            })
        ]
    });
};
var $7cf09d846b9a3d57$export$2e2bcd8739ae039 = $7cf09d846b9a3d57$var$Error;





const $24736ce22ce68a85$var$PrivateRouter = ({ user: user, Component: Component, Err: Err })=>{
    if ((0, $02364a2da416eb8d$export$73693bad9f5880b0).currentUser?.email) return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)(Component, {});
    else return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)(Err, {});
};
var $24736ce22ce68a85$export$2e2bcd8739ae039 = $24736ce22ce68a85$var$PrivateRouter;


const $da11a1101b2a894a$var$App = ()=>{
    const user = localStorage.getItem("user-name") || null;
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.BrowserRouter), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $6281c60807d737a5$export$2e2bcd8739ae039), {
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactrouterdom.Routes), {
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "/",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $49bca6537ece0af9$export$2e2bcd8739ae039), {})
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "/store",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $24736ce22ce68a85$export$2e2bcd8739ae039), {
                            user: user,
                            Component: (0, $b5944f8c068bcb5d$export$2e2bcd8739ae039),
                            Err: (0, $41f71f5a6f8b36cf$export$2e2bcd8739ae039)
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "/about",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $24736ce22ce68a85$export$2e2bcd8739ae039), {
                            user: user,
                            Component: (0, $fb36506a31b34341$export$2e2bcd8739ae039),
                            Err: (0, $41f71f5a6f8b36cf$export$2e2bcd8739ae039)
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "/signup",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $97a716b6e8449d46$export$2e2bcd8739ae039), {})
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "/login",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $41f71f5a6f8b36cf$export$2e2bcd8739ae039), {})
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                        path: "*",
                        element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $7cf09d846b9a3d57$export$2e2bcd8739ae039), {})
                    })
                ]
            })
        })
    });
};
var $da11a1101b2a894a$export$2e2bcd8739ae039 = $da11a1101b2a894a$var$App;


const $4fa36e821943b400$var$Main = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $da11a1101b2a894a$export$2e2bcd8739ae039), {})
    });
};
(0, ($parcel$interopDefault($ltMAx$reactdomclient))).createRoot(document.getElementById("root")).render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($4fa36e821943b400$var$Main, {}));


//# sourceMappingURL=index.js.map
