
import './App.css'
import ChatBotIcon from './componenets/ChatBotIcon'

function App() {
  

  return (
   <div>
    <div className="container">
      <div className="chatbot-popup md:w-md  m-auto overflow-hidden rounded-2xl shadow-md bg-white">
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

        <div className="chat-body h-96 p-5 text-[0.9rem]">
          <div className="message bot-message text-black flex mb-6 ">
                <ChatBotIcon className='flex mr-2 fill-white w-8 h-8 p-1 bg-red-950 rounded-full relative top-7'/> 
                <p className="bot-message-text bg-red-50 rounded-[13px]  rounded-bl-none p-2 ">
                  Hi there,<br/> how can I help you today?
                </p>
          </div>
          
          <div className="message user-message text-white mb-6 ">
                <p className="user-message-text  rounded-[13px] rounded-br-none p-2 bg-red-950 ">
                 Lorem ipusm, something just to full this text box, belive or not.
                 I like the way I styled this chat bot, do u as well?
                </p>
          </div>
        </div>
       { /* chatbot footer */}
       <div className="chat-footer relative">
        <form action="#" className="chat-form  w-full p-1 m-auto">
          <input type="text"
          className='message-input border border-gray-200 w-full 
          rounded-full p-2 ' 
          placeholder='Message...'
          required 
          />
         <button className="material-symbols-rounded 
         absolute right-3 bottom-2  bg-red-950 rounded-full p-1
          text-white">arrow_upward</button>

        </form>

       </div>



        
      </div>
    </div>
   </div>
  )
}

export default App
