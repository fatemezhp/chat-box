
import './App.css'
import ChatBotIcon from './componenets/ChatBotIcon'

function App() {
  

  return (
   <div>
    <div className="container">
      <div className="chatbot-popup w-md overflow-hidden rounded-2xl shadow-md bg-white">
       { /* chatbot header */}
        <div className="chat-header bg-red-950 flex justify-between p-4">
          <div className="header-info text-white flex gap-1 items-center">
                <ChatBotIcon className='fill-red-950 w-10 h-10 mr-2 bg-white rounded-full p-1' /> 
                <h2 className='logo-text font-bold text-xl'>chatbot</h2>
          </div>
          <button className="material-symbols-rounded
           text-blue-50 cursor-pointer border-none outline-0
            text-2xl text-[1.9rem] transition ease-in-out duration-200
             rounded-full bg-none h-10 w-10 hover:bg-red-700">keyboard_arrow_down</button>
        </div>
       { /* chatbot body */}
        <div className="chat-body text-black ">
          <div className="message bot-message">
                <ChatBotIcon className=' fill-black'/> 
                <p className="message-text">
                  Hi there,<br/> how can I help you today?
                </p>
          </div>
          <div className="message user-message">
                <p className="message-text">
                  chert o pert, del ro be daria mizanam, gahi be ghbl gahi be pish gahi sahra mizanam,
                </p>
          </div>
        </div>
       { /* chatbot footer */}
       <div className="chat-footer">
        <form action="#" className="chat-form">
          <input type="text"
          className='message-input' required />
         <button className="material-symbols-rounded">arrow_upward</button>

        </form>

       </div>



        
      </div>
    </div>
   </div>
  )
}

export default App
