const Signup = {
   render: () => {
      return /*html*/`
         <div class="flex justify-center items-center bg-gray-100 h-[100vh]">
      <div class="w-[800px] bg-white flex justify-around p-8">
        <form class="w-[400px]" id="signup">
          <div class="mb-2">
            <label class="block text-xl font-normal">Email</label>
            <input
              type="text"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="email" id="email"
            />
          </div>
          <div class="mb-2">
            <label class="block text-xl font-normal">Số điện thoại</label>
            <input
              type="text"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="phone" id="phone"
            />
          </div>
          <div class="mb-2">
            <label class="block text-xl font-normal">Mật khẩu</label>
            <input
              type="password"
              class="block border w-[410px] h-[44px] my-2 outline-none rounded-md" name="password" id="password"
            />
          </div>
          <button
            type="submit"
            class="text-center bg-[#FF424E] text-white w-[410px] h-[48px] rounded-md mt-1"
          >
            Đăng Ký
          </button>
          
        </form>
        <div class="flex justify-center items-center ">
          <img src="./public/images/logo.png" alt="" />
        </div>
      </div>
    </div>
      `
   }
}
export default Signup