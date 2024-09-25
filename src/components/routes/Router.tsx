import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
// mfe components / remote modules
// import BottomNavigation from 'app/BottomNavigation';
// import ChatBox from 'app/ChatBox';
// import FormContainer from 'app/FormContainer';
// import Navbar from 'app/Navbar';
// import Tabs from 'app/Tabs';
// import { useConfirm } from 'app/ConfirmProvider';
// import { useUtilityStore } from 'app/utilities/store/utilityStore';
// local modules
import App from '../App';
// import Chat from '../Chat/Chat';
// import { navbarSchema } from '../config/navbarSchema';
import AppWrapper from '../App/AppWrapper';


function AppRouter() {
    // const utilityStore = useUtilityStore();
    // const confirm = useConfirm();

    const appRoutes = [
        {
            path: "/",
            element: (<App />),
        },
        {
            path: "/*",
            element: (<AppWrapper />),
        },
        {
            path: "/test",
            element: (<div style={{ marginTop: "100px" }}>404</div>),
        },
    ]
    // .map((route) => ({ 
    //     ...route, 
    //     id: route.path,
    //     element: (
    //         <>
    //             <Navbar 
    //                 layout={navbarSchema({ utilityStore })} 
    //                 stores={{ utilityStore, confirm }}
    //             />
    //             {route.element}
    //             <BottomNavigation 
    //                 items={["Weight", "Food", "Exercise", "Sleep", "Steps"]} 
    //                 onClick={(item) => utilityStore.setDrawer({ 
    //                     open: true, 
    //                     anchor: "bottom",
    //                     onOpen: () => {},
    //                     boxStyle: { width: "100%" },
    //                     content: ["Food", "Exercise"].includes(item) 
    //                         ? (
    //                             <>
    //                                 <Tabs 
    //                                     tabs={[
    //                                         {
    //                                             value: "recents",
    //                                             label: "Recents"
    //                                         },
    //                                         {
    //                                             value: "favorites",
    //                                             label: "Favorites"
    //                                         },
    //                                         {
    //                                             value: "search",
    //                                             label: "Search"
    //                                         },
    //                                     ]}
    //                                     onChange={(value: string) => console.log("The search tab changed: ", value)}
    //                                     renderContent={(value: string) => (
    //                                         <div>
    //                                             <pre>
    //                                                 {value}
    //                                                 {JSON.stringify(value, null, 2)}
    //                                             </pre>
    //                                         </div>
    //                                     )}
    //                                 />
    //                                 <ChatBox 
    //                                     handleSend={(send: any) => {
    //                                         console.log("send Callback from host app: ", send)
    //                                         utilityStore.setDrawer({ open: false, anchor: "bottom", content: (<></>) });
    //                                         setTimeout(() => utilityStore.setDrawer({ 
    //                                             open: true, 
    //                                             anchor: "right",
    //                                             boxStyle: { width: "40vw" },
    //                                             content: (
    //                                                 <FormContainer
    //                                                     schema={data.find(({ table }) => (table === item.toLowerCase()))}
    //                                                     onSubmit={(submission) => {
    //                                                         console.log(
    //                                                             "BottomNavigation.QueryWrapper.FormContainer.SUBMISSION: ", 
    //                                                             submission
    //                                                         );
    //                                                         utilityStore.setDrawer({ open: false, anchor: "right", content: (<></>) });
    //                                                     }}
    //                                                     onCancelClick={() => utilityStore.setDrawer({ open: false, anchor: "right", content: (<></>) })}
    //                                                 />
    //                                             )
    //                                         }), 500); // wait for the first drawer to close
    //                                     }}
    //                                 />
    //                             </>
    //                         ) : (
    //                             <FormContainer
    //                                 schema={data.find(({ table }) => (table === item.toLowerCase()))}
    //                                 onSubmit={(submission) => {
    //                                     console.log(
    //                                         "BottomNavigation.QueryWrapper.FormContainer.SUBMISSION: ", 
    //                                         submission
    //                                     );
    //                                     utilityStore.setDrawer({ open: false, anchor: "bottom", content: (<></>) });
    //                                 }}
    //                                 onCancelClick={() => utilityStore.setDrawer({ open: false, anchor: "bottom", content: (<></>) })}
    //                             />
    //                         )
    //                 })} 
    //             />
    //         </>
    //     )
    // }));

    const appRouter = createBrowserRouter(appRoutes);

    return <RouterProvider router={appRouter} />;
};

export default AppRouter;
