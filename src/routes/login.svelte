<script context="module">
	export const prerender = true;
</script>

<script>
  let username = "";
  let password = "";
  let server = 0;
async function test() {
  let url = `${import.meta.env.VITE_HOST_API}/login`;
  console.log(url);
  let body = new URLSearchParams({
				'username': username,
        'password': password,
        'server' : ''+server,
			})
    fetch(url, {
      headers: {        
        'Accept': '*/*',
        'Content-Type': 'application/X-www-form-urlencoded'
        },
        mode: "cors",
        cache: 'default',
        method: 'POST',
        body,
      })
      .then(res => {
        const json = res.json()
        let result = JSON.stringify(json)
        console.log(result);
      })
		
		
}
</script>


<section>
	<div class="hold-transition sidebar-mini layout-fixed login">
        <div class="login-form">
            <div class="card card-info">
                <div class="card-header">
                  <h3 class="card-title">Login</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <div class="form-horizontal">
                  <div class="card-body">
                    <div class="form-group row">
                      <label for="inputEmail3" class="col-sm-2 col-form-label">Username</label>
                      <div class="col-sm-10">
                        <input type="text" on:input="{(e)=> {username = e.target.value}}" name="username" class="form-control" id="inputEmail3" placeholder="Username">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
                        <input type="password" on:input="{(e)=> {password = e.target.value}}" name="password" class="form-control" id="inputPassword3" placeholder="Password">
                      </div>
                    </div>
                    <div class="form-group row">
                    <div class="form-check">
                      <input class="form-check-input"  bind:group={server} type="radio" name="server" value="1" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                        Đơn vị 1
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" bind:group={server} type="radio" name="server" value="2" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                        Đơn vị 2
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" bind:group={server} name="server" value="3" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                        Đơn vị 3
                      </label>
                    </div>
                  </div>
                  
                  <!-- /.card-body -->
                  <div class="card-footer">
                    <button type="submit" class="btn btn-info" on:click={test}>Sign in</button>    
                    <button type="submit" class="btn btn-default float-right">Cancel</button>
                  </div>
                  <!-- /.card-footer -->
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.login-form {
    width: 50%;
}
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: unset;
    width: 100%;
    height: 1000px;
    background: #50a3a2;
    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
}
</style>
