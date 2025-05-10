---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACAGWUQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrnU%2FWz1u2yCz8e5VhcCn2U2aPsLHuLNWFsMzjL2x5wIhAPUTqKDGsvLudgeEqo4wSeLC0%2BEj%2BJdhT0PfwzHvXQhIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwatIilG9atO6QmgxAq3ANijWjZwdJ5J7%2Bpdhgb7Wvo8l8CazrEzMkv0osapg69JwRn9DHQR7%2F%2Fci1807JUtXvjmdrRRotlTiPpiJNOFXZJLP5rRhXaC7H%2FUUKdFQ5Sx1KgM6IwtiDkxZFoCv3vGsjmeX%2BaNbjQddQvBBnrHtklxQW1ufowK2C3WCIZbRMqcuTyy8cOvPIBP%2FPSx7AkQgWxwH037XtcHY8eqODmFLkKoXRBPCofzPfg%2BOtmW%2FAKCzVxObKQ1Ba8uxIIS7%2BTJ913LgXirG59xGlO9innkSkw%2BmGcaTYEnPOaYr225vhWtcoyQ54SajAbQ4In1zIKUOD9zTZ0GmxhNq%2FK9PLgZ6vCe2bpcvNSPCu4moJuX03itPJ%2BSoo8p0IcCTSBU%2BoutConXqE0PM9B2K7UC8bQe%2BueSxcpxSxhrSbPDr2zidHGMvbnhAydOaGDVhOpnH6aMFZisKz1%2BeJBpQXbC36A1onuUocAUUiR7IKhL2P87mGl94bAqPQxeixPh2zRHqOD7jHZ1x5nwKMSXNOAKWI5IYmRmZBQt4vTP1%2B0nCL6hnDczEr6cq8rcUTksUUrZJKoPqJneACBnTf5R%2Bzew6ikSKzebA%2Fv9mztR%2FEk%2BB%2FeG1a96UOVo3QTWu4qfsLa7jCmrv3ABjqkAcKUZ2uj58yyoTe1Vc84Uqzq35DN3KnJ8xYVBdI%2BiFvB%2FJh3X1GwAjZQJ75OAUYL88013ypMGNieu51jB8Up7XtLEHYzoJROZQ0MXE8QUeE5kDNyM3W7hIqPnDiL8bx0%2FPblCoOXls4yZxrSYUmqsy0n7XtKj9cQlJ6gHuy8M7QMUe1TLx1X7lz2KlDkicR%2FFGgPttHcPzLR%2F4mM3uJXH4X1WJOf&X-Amz-Signature=a6ee82807296519631010722c6fbda485bf80acf23d007988553ae72e0c276fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACAGWUQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrnU%2FWz1u2yCz8e5VhcCn2U2aPsLHuLNWFsMzjL2x5wIhAPUTqKDGsvLudgeEqo4wSeLC0%2BEj%2BJdhT0PfwzHvXQhIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwatIilG9atO6QmgxAq3ANijWjZwdJ5J7%2Bpdhgb7Wvo8l8CazrEzMkv0osapg69JwRn9DHQR7%2F%2Fci1807JUtXvjmdrRRotlTiPpiJNOFXZJLP5rRhXaC7H%2FUUKdFQ5Sx1KgM6IwtiDkxZFoCv3vGsjmeX%2BaNbjQddQvBBnrHtklxQW1ufowK2C3WCIZbRMqcuTyy8cOvPIBP%2FPSx7AkQgWxwH037XtcHY8eqODmFLkKoXRBPCofzPfg%2BOtmW%2FAKCzVxObKQ1Ba8uxIIS7%2BTJ913LgXirG59xGlO9innkSkw%2BmGcaTYEnPOaYr225vhWtcoyQ54SajAbQ4In1zIKUOD9zTZ0GmxhNq%2FK9PLgZ6vCe2bpcvNSPCu4moJuX03itPJ%2BSoo8p0IcCTSBU%2BoutConXqE0PM9B2K7UC8bQe%2BueSxcpxSxhrSbPDr2zidHGMvbnhAydOaGDVhOpnH6aMFZisKz1%2BeJBpQXbC36A1onuUocAUUiR7IKhL2P87mGl94bAqPQxeixPh2zRHqOD7jHZ1x5nwKMSXNOAKWI5IYmRmZBQt4vTP1%2B0nCL6hnDczEr6cq8rcUTksUUrZJKoPqJneACBnTf5R%2Bzew6ikSKzebA%2Fv9mztR%2FEk%2BB%2FeG1a96UOVo3QTWu4qfsLa7jCmrv3ABjqkAcKUZ2uj58yyoTe1Vc84Uqzq35DN3KnJ8xYVBdI%2BiFvB%2FJh3X1GwAjZQJ75OAUYL88013ypMGNieu51jB8Up7XtLEHYzoJROZQ0MXE8QUeE5kDNyM3W7hIqPnDiL8bx0%2FPblCoOXls4yZxrSYUmqsy0n7XtKj9cQlJ6gHuy8M7QMUe1TLx1X7lz2KlDkicR%2FFGgPttHcPzLR%2F4mM3uJXH4X1WJOf&X-Amz-Signature=f9bd17bfd86ffff02d982a3303d8af0c954ee3fe24ab357e4d4fa930a789f42f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACAGWUQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrnU%2FWz1u2yCz8e5VhcCn2U2aPsLHuLNWFsMzjL2x5wIhAPUTqKDGsvLudgeEqo4wSeLC0%2BEj%2BJdhT0PfwzHvXQhIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwatIilG9atO6QmgxAq3ANijWjZwdJ5J7%2Bpdhgb7Wvo8l8CazrEzMkv0osapg69JwRn9DHQR7%2F%2Fci1807JUtXvjmdrRRotlTiPpiJNOFXZJLP5rRhXaC7H%2FUUKdFQ5Sx1KgM6IwtiDkxZFoCv3vGsjmeX%2BaNbjQddQvBBnrHtklxQW1ufowK2C3WCIZbRMqcuTyy8cOvPIBP%2FPSx7AkQgWxwH037XtcHY8eqODmFLkKoXRBPCofzPfg%2BOtmW%2FAKCzVxObKQ1Ba8uxIIS7%2BTJ913LgXirG59xGlO9innkSkw%2BmGcaTYEnPOaYr225vhWtcoyQ54SajAbQ4In1zIKUOD9zTZ0GmxhNq%2FK9PLgZ6vCe2bpcvNSPCu4moJuX03itPJ%2BSoo8p0IcCTSBU%2BoutConXqE0PM9B2K7UC8bQe%2BueSxcpxSxhrSbPDr2zidHGMvbnhAydOaGDVhOpnH6aMFZisKz1%2BeJBpQXbC36A1onuUocAUUiR7IKhL2P87mGl94bAqPQxeixPh2zRHqOD7jHZ1x5nwKMSXNOAKWI5IYmRmZBQt4vTP1%2B0nCL6hnDczEr6cq8rcUTksUUrZJKoPqJneACBnTf5R%2Bzew6ikSKzebA%2Fv9mztR%2FEk%2BB%2FeG1a96UOVo3QTWu4qfsLa7jCmrv3ABjqkAcKUZ2uj58yyoTe1Vc84Uqzq35DN3KnJ8xYVBdI%2BiFvB%2FJh3X1GwAjZQJ75OAUYL88013ypMGNieu51jB8Up7XtLEHYzoJROZQ0MXE8QUeE5kDNyM3W7hIqPnDiL8bx0%2FPblCoOXls4yZxrSYUmqsy0n7XtKj9cQlJ6gHuy8M7QMUe1TLx1X7lz2KlDkicR%2FFGgPttHcPzLR%2F4mM3uJXH4X1WJOf&X-Amz-Signature=fe874a7e98bb4862484a9e70e32adddeba33a8eca6bff1b0f20927c515bf228a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACAGWUQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrnU%2FWz1u2yCz8e5VhcCn2U2aPsLHuLNWFsMzjL2x5wIhAPUTqKDGsvLudgeEqo4wSeLC0%2BEj%2BJdhT0PfwzHvXQhIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwatIilG9atO6QmgxAq3ANijWjZwdJ5J7%2Bpdhgb7Wvo8l8CazrEzMkv0osapg69JwRn9DHQR7%2F%2Fci1807JUtXvjmdrRRotlTiPpiJNOFXZJLP5rRhXaC7H%2FUUKdFQ5Sx1KgM6IwtiDkxZFoCv3vGsjmeX%2BaNbjQddQvBBnrHtklxQW1ufowK2C3WCIZbRMqcuTyy8cOvPIBP%2FPSx7AkQgWxwH037XtcHY8eqODmFLkKoXRBPCofzPfg%2BOtmW%2FAKCzVxObKQ1Ba8uxIIS7%2BTJ913LgXirG59xGlO9innkSkw%2BmGcaTYEnPOaYr225vhWtcoyQ54SajAbQ4In1zIKUOD9zTZ0GmxhNq%2FK9PLgZ6vCe2bpcvNSPCu4moJuX03itPJ%2BSoo8p0IcCTSBU%2BoutConXqE0PM9B2K7UC8bQe%2BueSxcpxSxhrSbPDr2zidHGMvbnhAydOaGDVhOpnH6aMFZisKz1%2BeJBpQXbC36A1onuUocAUUiR7IKhL2P87mGl94bAqPQxeixPh2zRHqOD7jHZ1x5nwKMSXNOAKWI5IYmRmZBQt4vTP1%2B0nCL6hnDczEr6cq8rcUTksUUrZJKoPqJneACBnTf5R%2Bzew6ikSKzebA%2Fv9mztR%2FEk%2BB%2FeG1a96UOVo3QTWu4qfsLa7jCmrv3ABjqkAcKUZ2uj58yyoTe1Vc84Uqzq35DN3KnJ8xYVBdI%2BiFvB%2FJh3X1GwAjZQJ75OAUYL88013ypMGNieu51jB8Up7XtLEHYzoJROZQ0MXE8QUeE5kDNyM3W7hIqPnDiL8bx0%2FPblCoOXls4yZxrSYUmqsy0n7XtKj9cQlJ6gHuy8M7QMUe1TLx1X7lz2KlDkicR%2FFGgPttHcPzLR%2F4mM3uJXH4X1WJOf&X-Amz-Signature=ea5b5aab5e5a004cbe5ee6e16fafde7bc9c24dc6493a9ac2fcb9c959a4337cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACAGWUQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrnU%2FWz1u2yCz8e5VhcCn2U2aPsLHuLNWFsMzjL2x5wIhAPUTqKDGsvLudgeEqo4wSeLC0%2BEj%2BJdhT0PfwzHvXQhIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwatIilG9atO6QmgxAq3ANijWjZwdJ5J7%2Bpdhgb7Wvo8l8CazrEzMkv0osapg69JwRn9DHQR7%2F%2Fci1807JUtXvjmdrRRotlTiPpiJNOFXZJLP5rRhXaC7H%2FUUKdFQ5Sx1KgM6IwtiDkxZFoCv3vGsjmeX%2BaNbjQddQvBBnrHtklxQW1ufowK2C3WCIZbRMqcuTyy8cOvPIBP%2FPSx7AkQgWxwH037XtcHY8eqODmFLkKoXRBPCofzPfg%2BOtmW%2FAKCzVxObKQ1Ba8uxIIS7%2BTJ913LgXirG59xGlO9innkSkw%2BmGcaTYEnPOaYr225vhWtcoyQ54SajAbQ4In1zIKUOD9zTZ0GmxhNq%2FK9PLgZ6vCe2bpcvNSPCu4moJuX03itPJ%2BSoo8p0IcCTSBU%2BoutConXqE0PM9B2K7UC8bQe%2BueSxcpxSxhrSbPDr2zidHGMvbnhAydOaGDVhOpnH6aMFZisKz1%2BeJBpQXbC36A1onuUocAUUiR7IKhL2P87mGl94bAqPQxeixPh2zRHqOD7jHZ1x5nwKMSXNOAKWI5IYmRmZBQt4vTP1%2B0nCL6hnDczEr6cq8rcUTksUUrZJKoPqJneACBnTf5R%2Bzew6ikSKzebA%2Fv9mztR%2FEk%2BB%2FeG1a96UOVo3QTWu4qfsLa7jCmrv3ABjqkAcKUZ2uj58yyoTe1Vc84Uqzq35DN3KnJ8xYVBdI%2BiFvB%2FJh3X1GwAjZQJ75OAUYL88013ypMGNieu51jB8Up7XtLEHYzoJROZQ0MXE8QUeE5kDNyM3W7hIqPnDiL8bx0%2FPblCoOXls4yZxrSYUmqsy0n7XtKj9cQlJ6gHuy8M7QMUe1TLx1X7lz2KlDkicR%2FFGgPttHcPzLR%2F4mM3uJXH4X1WJOf&X-Amz-Signature=44323b148b81e9b56df065a68db84505afb2b3e73be92d22c287b6907a990626&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACAGWUQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrnU%2FWz1u2yCz8e5VhcCn2U2aPsLHuLNWFsMzjL2x5wIhAPUTqKDGsvLudgeEqo4wSeLC0%2BEj%2BJdhT0PfwzHvXQhIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwatIilG9atO6QmgxAq3ANijWjZwdJ5J7%2Bpdhgb7Wvo8l8CazrEzMkv0osapg69JwRn9DHQR7%2F%2Fci1807JUtXvjmdrRRotlTiPpiJNOFXZJLP5rRhXaC7H%2FUUKdFQ5Sx1KgM6IwtiDkxZFoCv3vGsjmeX%2BaNbjQddQvBBnrHtklxQW1ufowK2C3WCIZbRMqcuTyy8cOvPIBP%2FPSx7AkQgWxwH037XtcHY8eqODmFLkKoXRBPCofzPfg%2BOtmW%2FAKCzVxObKQ1Ba8uxIIS7%2BTJ913LgXirG59xGlO9innkSkw%2BmGcaTYEnPOaYr225vhWtcoyQ54SajAbQ4In1zIKUOD9zTZ0GmxhNq%2FK9PLgZ6vCe2bpcvNSPCu4moJuX03itPJ%2BSoo8p0IcCTSBU%2BoutConXqE0PM9B2K7UC8bQe%2BueSxcpxSxhrSbPDr2zidHGMvbnhAydOaGDVhOpnH6aMFZisKz1%2BeJBpQXbC36A1onuUocAUUiR7IKhL2P87mGl94bAqPQxeixPh2zRHqOD7jHZ1x5nwKMSXNOAKWI5IYmRmZBQt4vTP1%2B0nCL6hnDczEr6cq8rcUTksUUrZJKoPqJneACBnTf5R%2Bzew6ikSKzebA%2Fv9mztR%2FEk%2BB%2FeG1a96UOVo3QTWu4qfsLa7jCmrv3ABjqkAcKUZ2uj58yyoTe1Vc84Uqzq35DN3KnJ8xYVBdI%2BiFvB%2FJh3X1GwAjZQJ75OAUYL88013ypMGNieu51jB8Up7XtLEHYzoJROZQ0MXE8QUeE5kDNyM3W7hIqPnDiL8bx0%2FPblCoOXls4yZxrSYUmqsy0n7XtKj9cQlJ6gHuy8M7QMUe1TLx1X7lz2KlDkicR%2FFGgPttHcPzLR%2F4mM3uJXH4X1WJOf&X-Amz-Signature=1555e098d46fac81ced82d784a41e72e11e23b133a66c91dca20dffb7847cc81&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACAGWUQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnrnU%2FWz1u2yCz8e5VhcCn2U2aPsLHuLNWFsMzjL2x5wIhAPUTqKDGsvLudgeEqo4wSeLC0%2BEj%2BJdhT0PfwzHvXQhIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwatIilG9atO6QmgxAq3ANijWjZwdJ5J7%2Bpdhgb7Wvo8l8CazrEzMkv0osapg69JwRn9DHQR7%2F%2Fci1807JUtXvjmdrRRotlTiPpiJNOFXZJLP5rRhXaC7H%2FUUKdFQ5Sx1KgM6IwtiDkxZFoCv3vGsjmeX%2BaNbjQddQvBBnrHtklxQW1ufowK2C3WCIZbRMqcuTyy8cOvPIBP%2FPSx7AkQgWxwH037XtcHY8eqODmFLkKoXRBPCofzPfg%2BOtmW%2FAKCzVxObKQ1Ba8uxIIS7%2BTJ913LgXirG59xGlO9innkSkw%2BmGcaTYEnPOaYr225vhWtcoyQ54SajAbQ4In1zIKUOD9zTZ0GmxhNq%2FK9PLgZ6vCe2bpcvNSPCu4moJuX03itPJ%2BSoo8p0IcCTSBU%2BoutConXqE0PM9B2K7UC8bQe%2BueSxcpxSxhrSbPDr2zidHGMvbnhAydOaGDVhOpnH6aMFZisKz1%2BeJBpQXbC36A1onuUocAUUiR7IKhL2P87mGl94bAqPQxeixPh2zRHqOD7jHZ1x5nwKMSXNOAKWI5IYmRmZBQt4vTP1%2B0nCL6hnDczEr6cq8rcUTksUUrZJKoPqJneACBnTf5R%2Bzew6ikSKzebA%2Fv9mztR%2FEk%2BB%2FeG1a96UOVo3QTWu4qfsLa7jCmrv3ABjqkAcKUZ2uj58yyoTe1Vc84Uqzq35DN3KnJ8xYVBdI%2BiFvB%2FJh3X1GwAjZQJ75OAUYL88013ypMGNieu51jB8Up7XtLEHYzoJROZQ0MXE8QUeE5kDNyM3W7hIqPnDiL8bx0%2FPblCoOXls4yZxrSYUmqsy0n7XtKj9cQlJ6gHuy8M7QMUe1TLx1X7lz2KlDkicR%2FFGgPttHcPzLR%2F4mM3uJXH4X1WJOf&X-Amz-Signature=cdc08b5a8d561b8e7d13646b9041e1b17764abeb3c0b6bd4089ad62805037ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
