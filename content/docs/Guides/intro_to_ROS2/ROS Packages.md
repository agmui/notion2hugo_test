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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBWYU3R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDm9ivGmNqaC2L1aQ2DQH3cOYjImOGWlJOD0oCOWMYDXQIhALRbXtioPGXTwk3oTupJGJQut8WQ%2FIR%2FyTHya97oafd1KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSaux1nLhwcYm1gaIq3APYrYugUCisCMrJgxLYh%2FK1IlUrKN%2BSenRh2WNkowt9NJWoHDXL2dMCy8ZeazrcioTzJ6QDLkiTiJzIK1s6JzlrIos6HQwEw6SxA5QoLv8EZ2NBywGWe4sd0%2FG%2FcjwG89U3MCHBRY%2Bsj3WhqWJgSOpp4oClY97U92UmKI4lOp6y6RRyYlwPktIeHp4A7IpKHzwrWvkeCb%2FEKQECL0hjvcoo2xanvhA41DfgmeV8TOPm4xDGC%2Fn3VXKoTpV0G%2BFJsnZrbuRilGPVyANcfc7ZCZ1B9ddLr3k5WdbNhKxuYSOHk3wo9fgIDkDiszkOzL3Tj7Y7XG46GvNXNrUlAu5%2BvrI%2BkVV8aPW0raTBla%2BIxQ7yXoBQbEWLzAd%2BN4iLh5TWOAl5y50uDF3FlMIvjf9gwQi%2BmXZPdIwenKe%2FYL037m6BrMZ7cPje8iv7jNNTELHMc47F55JonbPEQ4Tvr5RG8PHdRuIIWrvVWkwdOxmIUqLkTr2Sb%2F8TccXkiJBLlnIvapy8YhkfHrhlruxxk%2B9DqaJjRP9X07rscSNfntzISiV0A4vKXbfTNMAxHKRjZ0dofVgqWsL2vi0xc%2Fd0Wl4flvK4pabRKO9Nf8ZhpBXu0zakUfKGR73Xj8ksxjC6sDCytPbBBjqkAXeeeKDNXCmFxyz6hiwQENTonSIvsW7HfojPcsAz4Qk9sXWfsQXKj1Yc6PUQhxX4ISmYy7qjDZ7skhRjL06pFppTqJCUbTi7TYb5tRjKW4nR17ELoWo8pTse0VV0wBvIyGMK4xV8E5TFW%2BlSB3ghvj0SQgwgRq44rl8QOhG4hxLFYzvUDzMLGt5NlWX6pIjmTGQ39ZZOFdr3DZ%2FGNtkvl4bMTioK&X-Amz-Signature=670bdf49f06ed82ad446f4d53cba04f86b222c644d25e1e0eedbcef0451ba621&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBWYU3R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDm9ivGmNqaC2L1aQ2DQH3cOYjImOGWlJOD0oCOWMYDXQIhALRbXtioPGXTwk3oTupJGJQut8WQ%2FIR%2FyTHya97oafd1KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSaux1nLhwcYm1gaIq3APYrYugUCisCMrJgxLYh%2FK1IlUrKN%2BSenRh2WNkowt9NJWoHDXL2dMCy8ZeazrcioTzJ6QDLkiTiJzIK1s6JzlrIos6HQwEw6SxA5QoLv8EZ2NBywGWe4sd0%2FG%2FcjwG89U3MCHBRY%2Bsj3WhqWJgSOpp4oClY97U92UmKI4lOp6y6RRyYlwPktIeHp4A7IpKHzwrWvkeCb%2FEKQECL0hjvcoo2xanvhA41DfgmeV8TOPm4xDGC%2Fn3VXKoTpV0G%2BFJsnZrbuRilGPVyANcfc7ZCZ1B9ddLr3k5WdbNhKxuYSOHk3wo9fgIDkDiszkOzL3Tj7Y7XG46GvNXNrUlAu5%2BvrI%2BkVV8aPW0raTBla%2BIxQ7yXoBQbEWLzAd%2BN4iLh5TWOAl5y50uDF3FlMIvjf9gwQi%2BmXZPdIwenKe%2FYL037m6BrMZ7cPje8iv7jNNTELHMc47F55JonbPEQ4Tvr5RG8PHdRuIIWrvVWkwdOxmIUqLkTr2Sb%2F8TccXkiJBLlnIvapy8YhkfHrhlruxxk%2B9DqaJjRP9X07rscSNfntzISiV0A4vKXbfTNMAxHKRjZ0dofVgqWsL2vi0xc%2Fd0Wl4flvK4pabRKO9Nf8ZhpBXu0zakUfKGR73Xj8ksxjC6sDCytPbBBjqkAXeeeKDNXCmFxyz6hiwQENTonSIvsW7HfojPcsAz4Qk9sXWfsQXKj1Yc6PUQhxX4ISmYy7qjDZ7skhRjL06pFppTqJCUbTi7TYb5tRjKW4nR17ELoWo8pTse0VV0wBvIyGMK4xV8E5TFW%2BlSB3ghvj0SQgwgRq44rl8QOhG4hxLFYzvUDzMLGt5NlWX6pIjmTGQ39ZZOFdr3DZ%2FGNtkvl4bMTioK&X-Amz-Signature=b97ffb4be028db45d2a6b1b7286f7254123fbe9dedadbd7187126452aca0d267&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBWYU3R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDm9ivGmNqaC2L1aQ2DQH3cOYjImOGWlJOD0oCOWMYDXQIhALRbXtioPGXTwk3oTupJGJQut8WQ%2FIR%2FyTHya97oafd1KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSaux1nLhwcYm1gaIq3APYrYugUCisCMrJgxLYh%2FK1IlUrKN%2BSenRh2WNkowt9NJWoHDXL2dMCy8ZeazrcioTzJ6QDLkiTiJzIK1s6JzlrIos6HQwEw6SxA5QoLv8EZ2NBywGWe4sd0%2FG%2FcjwG89U3MCHBRY%2Bsj3WhqWJgSOpp4oClY97U92UmKI4lOp6y6RRyYlwPktIeHp4A7IpKHzwrWvkeCb%2FEKQECL0hjvcoo2xanvhA41DfgmeV8TOPm4xDGC%2Fn3VXKoTpV0G%2BFJsnZrbuRilGPVyANcfc7ZCZ1B9ddLr3k5WdbNhKxuYSOHk3wo9fgIDkDiszkOzL3Tj7Y7XG46GvNXNrUlAu5%2BvrI%2BkVV8aPW0raTBla%2BIxQ7yXoBQbEWLzAd%2BN4iLh5TWOAl5y50uDF3FlMIvjf9gwQi%2BmXZPdIwenKe%2FYL037m6BrMZ7cPje8iv7jNNTELHMc47F55JonbPEQ4Tvr5RG8PHdRuIIWrvVWkwdOxmIUqLkTr2Sb%2F8TccXkiJBLlnIvapy8YhkfHrhlruxxk%2B9DqaJjRP9X07rscSNfntzISiV0A4vKXbfTNMAxHKRjZ0dofVgqWsL2vi0xc%2Fd0Wl4flvK4pabRKO9Nf8ZhpBXu0zakUfKGR73Xj8ksxjC6sDCytPbBBjqkAXeeeKDNXCmFxyz6hiwQENTonSIvsW7HfojPcsAz4Qk9sXWfsQXKj1Yc6PUQhxX4ISmYy7qjDZ7skhRjL06pFppTqJCUbTi7TYb5tRjKW4nR17ELoWo8pTse0VV0wBvIyGMK4xV8E5TFW%2BlSB3ghvj0SQgwgRq44rl8QOhG4hxLFYzvUDzMLGt5NlWX6pIjmTGQ39ZZOFdr3DZ%2FGNtkvl4bMTioK&X-Amz-Signature=b3968f80e1b7ccb358cfd244b8cefd30ad26fd90f3817ab8fbdb684aacc7a33f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBWYU3R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDm9ivGmNqaC2L1aQ2DQH3cOYjImOGWlJOD0oCOWMYDXQIhALRbXtioPGXTwk3oTupJGJQut8WQ%2FIR%2FyTHya97oafd1KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSaux1nLhwcYm1gaIq3APYrYugUCisCMrJgxLYh%2FK1IlUrKN%2BSenRh2WNkowt9NJWoHDXL2dMCy8ZeazrcioTzJ6QDLkiTiJzIK1s6JzlrIos6HQwEw6SxA5QoLv8EZ2NBywGWe4sd0%2FG%2FcjwG89U3MCHBRY%2Bsj3WhqWJgSOpp4oClY97U92UmKI4lOp6y6RRyYlwPktIeHp4A7IpKHzwrWvkeCb%2FEKQECL0hjvcoo2xanvhA41DfgmeV8TOPm4xDGC%2Fn3VXKoTpV0G%2BFJsnZrbuRilGPVyANcfc7ZCZ1B9ddLr3k5WdbNhKxuYSOHk3wo9fgIDkDiszkOzL3Tj7Y7XG46GvNXNrUlAu5%2BvrI%2BkVV8aPW0raTBla%2BIxQ7yXoBQbEWLzAd%2BN4iLh5TWOAl5y50uDF3FlMIvjf9gwQi%2BmXZPdIwenKe%2FYL037m6BrMZ7cPje8iv7jNNTELHMc47F55JonbPEQ4Tvr5RG8PHdRuIIWrvVWkwdOxmIUqLkTr2Sb%2F8TccXkiJBLlnIvapy8YhkfHrhlruxxk%2B9DqaJjRP9X07rscSNfntzISiV0A4vKXbfTNMAxHKRjZ0dofVgqWsL2vi0xc%2Fd0Wl4flvK4pabRKO9Nf8ZhpBXu0zakUfKGR73Xj8ksxjC6sDCytPbBBjqkAXeeeKDNXCmFxyz6hiwQENTonSIvsW7HfojPcsAz4Qk9sXWfsQXKj1Yc6PUQhxX4ISmYy7qjDZ7skhRjL06pFppTqJCUbTi7TYb5tRjKW4nR17ELoWo8pTse0VV0wBvIyGMK4xV8E5TFW%2BlSB3ghvj0SQgwgRq44rl8QOhG4hxLFYzvUDzMLGt5NlWX6pIjmTGQ39ZZOFdr3DZ%2FGNtkvl4bMTioK&X-Amz-Signature=e16d30fedb4d365fd26c3140afbcae2b062fd96048ad0e585222ec60032892d3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBWYU3R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDm9ivGmNqaC2L1aQ2DQH3cOYjImOGWlJOD0oCOWMYDXQIhALRbXtioPGXTwk3oTupJGJQut8WQ%2FIR%2FyTHya97oafd1KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSaux1nLhwcYm1gaIq3APYrYugUCisCMrJgxLYh%2FK1IlUrKN%2BSenRh2WNkowt9NJWoHDXL2dMCy8ZeazrcioTzJ6QDLkiTiJzIK1s6JzlrIos6HQwEw6SxA5QoLv8EZ2NBywGWe4sd0%2FG%2FcjwG89U3MCHBRY%2Bsj3WhqWJgSOpp4oClY97U92UmKI4lOp6y6RRyYlwPktIeHp4A7IpKHzwrWvkeCb%2FEKQECL0hjvcoo2xanvhA41DfgmeV8TOPm4xDGC%2Fn3VXKoTpV0G%2BFJsnZrbuRilGPVyANcfc7ZCZ1B9ddLr3k5WdbNhKxuYSOHk3wo9fgIDkDiszkOzL3Tj7Y7XG46GvNXNrUlAu5%2BvrI%2BkVV8aPW0raTBla%2BIxQ7yXoBQbEWLzAd%2BN4iLh5TWOAl5y50uDF3FlMIvjf9gwQi%2BmXZPdIwenKe%2FYL037m6BrMZ7cPje8iv7jNNTELHMc47F55JonbPEQ4Tvr5RG8PHdRuIIWrvVWkwdOxmIUqLkTr2Sb%2F8TccXkiJBLlnIvapy8YhkfHrhlruxxk%2B9DqaJjRP9X07rscSNfntzISiV0A4vKXbfTNMAxHKRjZ0dofVgqWsL2vi0xc%2Fd0Wl4flvK4pabRKO9Nf8ZhpBXu0zakUfKGR73Xj8ksxjC6sDCytPbBBjqkAXeeeKDNXCmFxyz6hiwQENTonSIvsW7HfojPcsAz4Qk9sXWfsQXKj1Yc6PUQhxX4ISmYy7qjDZ7skhRjL06pFppTqJCUbTi7TYb5tRjKW4nR17ELoWo8pTse0VV0wBvIyGMK4xV8E5TFW%2BlSB3ghvj0SQgwgRq44rl8QOhG4hxLFYzvUDzMLGt5NlWX6pIjmTGQ39ZZOFdr3DZ%2FGNtkvl4bMTioK&X-Amz-Signature=8f7c8351ec1519a75618b4a34bbfefe3c05e94eb7f9e33eb067a9d7011f3ff28&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBWYU3R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDm9ivGmNqaC2L1aQ2DQH3cOYjImOGWlJOD0oCOWMYDXQIhALRbXtioPGXTwk3oTupJGJQut8WQ%2FIR%2FyTHya97oafd1KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSaux1nLhwcYm1gaIq3APYrYugUCisCMrJgxLYh%2FK1IlUrKN%2BSenRh2WNkowt9NJWoHDXL2dMCy8ZeazrcioTzJ6QDLkiTiJzIK1s6JzlrIos6HQwEw6SxA5QoLv8EZ2NBywGWe4sd0%2FG%2FcjwG89U3MCHBRY%2Bsj3WhqWJgSOpp4oClY97U92UmKI4lOp6y6RRyYlwPktIeHp4A7IpKHzwrWvkeCb%2FEKQECL0hjvcoo2xanvhA41DfgmeV8TOPm4xDGC%2Fn3VXKoTpV0G%2BFJsnZrbuRilGPVyANcfc7ZCZ1B9ddLr3k5WdbNhKxuYSOHk3wo9fgIDkDiszkOzL3Tj7Y7XG46GvNXNrUlAu5%2BvrI%2BkVV8aPW0raTBla%2BIxQ7yXoBQbEWLzAd%2BN4iLh5TWOAl5y50uDF3FlMIvjf9gwQi%2BmXZPdIwenKe%2FYL037m6BrMZ7cPje8iv7jNNTELHMc47F55JonbPEQ4Tvr5RG8PHdRuIIWrvVWkwdOxmIUqLkTr2Sb%2F8TccXkiJBLlnIvapy8YhkfHrhlruxxk%2B9DqaJjRP9X07rscSNfntzISiV0A4vKXbfTNMAxHKRjZ0dofVgqWsL2vi0xc%2Fd0Wl4flvK4pabRKO9Nf8ZhpBXu0zakUfKGR73Xj8ksxjC6sDCytPbBBjqkAXeeeKDNXCmFxyz6hiwQENTonSIvsW7HfojPcsAz4Qk9sXWfsQXKj1Yc6PUQhxX4ISmYy7qjDZ7skhRjL06pFppTqJCUbTi7TYb5tRjKW4nR17ELoWo8pTse0VV0wBvIyGMK4xV8E5TFW%2BlSB3ghvj0SQgwgRq44rl8QOhG4hxLFYzvUDzMLGt5NlWX6pIjmTGQ39ZZOFdr3DZ%2FGNtkvl4bMTioK&X-Amz-Signature=0b979e6c5fcff2026a2a8b0dc7c733d750ced9738c73d574ce5d353ddd0b157d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBWYU3R%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDm9ivGmNqaC2L1aQ2DQH3cOYjImOGWlJOD0oCOWMYDXQIhALRbXtioPGXTwk3oTupJGJQut8WQ%2FIR%2FyTHya97oafd1KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSaux1nLhwcYm1gaIq3APYrYugUCisCMrJgxLYh%2FK1IlUrKN%2BSenRh2WNkowt9NJWoHDXL2dMCy8ZeazrcioTzJ6QDLkiTiJzIK1s6JzlrIos6HQwEw6SxA5QoLv8EZ2NBywGWe4sd0%2FG%2FcjwG89U3MCHBRY%2Bsj3WhqWJgSOpp4oClY97U92UmKI4lOp6y6RRyYlwPktIeHp4A7IpKHzwrWvkeCb%2FEKQECL0hjvcoo2xanvhA41DfgmeV8TOPm4xDGC%2Fn3VXKoTpV0G%2BFJsnZrbuRilGPVyANcfc7ZCZ1B9ddLr3k5WdbNhKxuYSOHk3wo9fgIDkDiszkOzL3Tj7Y7XG46GvNXNrUlAu5%2BvrI%2BkVV8aPW0raTBla%2BIxQ7yXoBQbEWLzAd%2BN4iLh5TWOAl5y50uDF3FlMIvjf9gwQi%2BmXZPdIwenKe%2FYL037m6BrMZ7cPje8iv7jNNTELHMc47F55JonbPEQ4Tvr5RG8PHdRuIIWrvVWkwdOxmIUqLkTr2Sb%2F8TccXkiJBLlnIvapy8YhkfHrhlruxxk%2B9DqaJjRP9X07rscSNfntzISiV0A4vKXbfTNMAxHKRjZ0dofVgqWsL2vi0xc%2Fd0Wl4flvK4pabRKO9Nf8ZhpBXu0zakUfKGR73Xj8ksxjC6sDCytPbBBjqkAXeeeKDNXCmFxyz6hiwQENTonSIvsW7HfojPcsAz4Qk9sXWfsQXKj1Yc6PUQhxX4ISmYy7qjDZ7skhRjL06pFppTqJCUbTi7TYb5tRjKW4nR17ELoWo8pTse0VV0wBvIyGMK4xV8E5TFW%2BlSB3ghvj0SQgwgRq44rl8QOhG4hxLFYzvUDzMLGt5NlWX6pIjmTGQ39ZZOFdr3DZ%2FGNtkvl4bMTioK&X-Amz-Signature=e1bbdbc8074074b2c491c896c5bfd7e389ed4a10fb960d84b2fb41552488908e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
