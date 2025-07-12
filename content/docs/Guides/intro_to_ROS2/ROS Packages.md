---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMJ7WXX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwW11zoNyyHIKIj3KRB%2FySsTngPs6i1ZsSvCCCDWd90AIhAKkKPBQ1VVPJXBp5sJ%2FjamIYg0CQN0PLtRBsySNo5wbOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfb7zMXY0pXVhVfm4q3APGC%2F4uayuQobMygjVWYkPP%2FeIq%2BuW32FoR7dGusLyx5olI2vkDaH%2FzuH%2Ba%2F6WPElA6ht2kRNa6Ho5JNbMxjKIUDntweRbujrIAl5%2BTqr3SSrTdHlEB518LhS5%2FvLRf%2BnD7TjOseX%2BdUmVV57Gca%2B9v3kb9yKazHyCXnXM%2BoequQunOTK0ySMFEX6Lu5A50vewhv840L3tPBYlahugrYQK3q6nezXqBUXpCMe7m7MnagSmGNC%2B48ENZYalqM%2BxDdg%2FS5t%2FW7PkcTRQnfvaGFxR7%2BLnPe0RD2gPHjZRyXLVDv6QsC9%2Fab1oFESRXPUBtCaKf%2BSa7q9x8cCaqTyfbzZUCbZjIYSFx59GQ2ZBS4%2BZsy7N9XG5HOViMJZWDKxESCnB2eVD0DfVXfgVbk%2BqN%2F%2BLw52k6cBD7WPzMOAU884vo%2FYSSNAn%2B%2F1Bjq1RK9sS0LOPaN8cXMGPwVfHS%2FjZErl9tkvf1HWhBUsgY4TcBam5%2BaUMimG%2F9gSEgX3J3Pnq848bfWZftfSnwBa98zaa10TOkD2VMdEmHJxi7JkRbvEnmDUbX3XVpAl01m48ZMJGFS1kFJ6FUQFiNi43H1gZd6P5iohGxkMajlderiEr4sTBlzVSLRsaC01LrKWn6qDDc%2FMjDBjqkAXQzj3oGbR9oFd%2FEIzjz0V1%2BZEUoqZN2FLCWHB4geGEuBlBUbMNAQQkCCQZJtC%2F7v2pX7mYIAUnLJX7MJ2O4m6Tm7VsAdKvGx%2BjXIz29mXSdM%2BNnTwevAHf4sVT%2FXeE5p5O6UXA2tZdBM9m9h2u7T3Fr4NBCL0Y48Jp%2Bnyz2LEZyFgIthIoKwWzyYW85UtmcuEy2yigRvqyLypinN%2BoCSUQxqgB%2F&X-Amz-Signature=f2df331b4d20abd04f8a3414b69e483f257dcb7f4d9d1c6c39ed1bbcf867ef35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMJ7WXX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwW11zoNyyHIKIj3KRB%2FySsTngPs6i1ZsSvCCCDWd90AIhAKkKPBQ1VVPJXBp5sJ%2FjamIYg0CQN0PLtRBsySNo5wbOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfb7zMXY0pXVhVfm4q3APGC%2F4uayuQobMygjVWYkPP%2FeIq%2BuW32FoR7dGusLyx5olI2vkDaH%2FzuH%2Ba%2F6WPElA6ht2kRNa6Ho5JNbMxjKIUDntweRbujrIAl5%2BTqr3SSrTdHlEB518LhS5%2FvLRf%2BnD7TjOseX%2BdUmVV57Gca%2B9v3kb9yKazHyCXnXM%2BoequQunOTK0ySMFEX6Lu5A50vewhv840L3tPBYlahugrYQK3q6nezXqBUXpCMe7m7MnagSmGNC%2B48ENZYalqM%2BxDdg%2FS5t%2FW7PkcTRQnfvaGFxR7%2BLnPe0RD2gPHjZRyXLVDv6QsC9%2Fab1oFESRXPUBtCaKf%2BSa7q9x8cCaqTyfbzZUCbZjIYSFx59GQ2ZBS4%2BZsy7N9XG5HOViMJZWDKxESCnB2eVD0DfVXfgVbk%2BqN%2F%2BLw52k6cBD7WPzMOAU884vo%2FYSSNAn%2B%2F1Bjq1RK9sS0LOPaN8cXMGPwVfHS%2FjZErl9tkvf1HWhBUsgY4TcBam5%2BaUMimG%2F9gSEgX3J3Pnq848bfWZftfSnwBa98zaa10TOkD2VMdEmHJxi7JkRbvEnmDUbX3XVpAl01m48ZMJGFS1kFJ6FUQFiNi43H1gZd6P5iohGxkMajlderiEr4sTBlzVSLRsaC01LrKWn6qDDc%2FMjDBjqkAXQzj3oGbR9oFd%2FEIzjz0V1%2BZEUoqZN2FLCWHB4geGEuBlBUbMNAQQkCCQZJtC%2F7v2pX7mYIAUnLJX7MJ2O4m6Tm7VsAdKvGx%2BjXIz29mXSdM%2BNnTwevAHf4sVT%2FXeE5p5O6UXA2tZdBM9m9h2u7T3Fr4NBCL0Y48Jp%2Bnyz2LEZyFgIthIoKwWzyYW85UtmcuEy2yigRvqyLypinN%2BoCSUQxqgB%2F&X-Amz-Signature=032cdab3d79aac249c2e0040dd2e60218eb13b7423f26b9b3aa5e22b39657ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMJ7WXX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwW11zoNyyHIKIj3KRB%2FySsTngPs6i1ZsSvCCCDWd90AIhAKkKPBQ1VVPJXBp5sJ%2FjamIYg0CQN0PLtRBsySNo5wbOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfb7zMXY0pXVhVfm4q3APGC%2F4uayuQobMygjVWYkPP%2FeIq%2BuW32FoR7dGusLyx5olI2vkDaH%2FzuH%2Ba%2F6WPElA6ht2kRNa6Ho5JNbMxjKIUDntweRbujrIAl5%2BTqr3SSrTdHlEB518LhS5%2FvLRf%2BnD7TjOseX%2BdUmVV57Gca%2B9v3kb9yKazHyCXnXM%2BoequQunOTK0ySMFEX6Lu5A50vewhv840L3tPBYlahugrYQK3q6nezXqBUXpCMe7m7MnagSmGNC%2B48ENZYalqM%2BxDdg%2FS5t%2FW7PkcTRQnfvaGFxR7%2BLnPe0RD2gPHjZRyXLVDv6QsC9%2Fab1oFESRXPUBtCaKf%2BSa7q9x8cCaqTyfbzZUCbZjIYSFx59GQ2ZBS4%2BZsy7N9XG5HOViMJZWDKxESCnB2eVD0DfVXfgVbk%2BqN%2F%2BLw52k6cBD7WPzMOAU884vo%2FYSSNAn%2B%2F1Bjq1RK9sS0LOPaN8cXMGPwVfHS%2FjZErl9tkvf1HWhBUsgY4TcBam5%2BaUMimG%2F9gSEgX3J3Pnq848bfWZftfSnwBa98zaa10TOkD2VMdEmHJxi7JkRbvEnmDUbX3XVpAl01m48ZMJGFS1kFJ6FUQFiNi43H1gZd6P5iohGxkMajlderiEr4sTBlzVSLRsaC01LrKWn6qDDc%2FMjDBjqkAXQzj3oGbR9oFd%2FEIzjz0V1%2BZEUoqZN2FLCWHB4geGEuBlBUbMNAQQkCCQZJtC%2F7v2pX7mYIAUnLJX7MJ2O4m6Tm7VsAdKvGx%2BjXIz29mXSdM%2BNnTwevAHf4sVT%2FXeE5p5O6UXA2tZdBM9m9h2u7T3Fr4NBCL0Y48Jp%2Bnyz2LEZyFgIthIoKwWzyYW85UtmcuEy2yigRvqyLypinN%2BoCSUQxqgB%2F&X-Amz-Signature=f081a5e43447854cc13a47d93e1e672941ff07404ba464b6215defd451ebf3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMJ7WXX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwW11zoNyyHIKIj3KRB%2FySsTngPs6i1ZsSvCCCDWd90AIhAKkKPBQ1VVPJXBp5sJ%2FjamIYg0CQN0PLtRBsySNo5wbOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfb7zMXY0pXVhVfm4q3APGC%2F4uayuQobMygjVWYkPP%2FeIq%2BuW32FoR7dGusLyx5olI2vkDaH%2FzuH%2Ba%2F6WPElA6ht2kRNa6Ho5JNbMxjKIUDntweRbujrIAl5%2BTqr3SSrTdHlEB518LhS5%2FvLRf%2BnD7TjOseX%2BdUmVV57Gca%2B9v3kb9yKazHyCXnXM%2BoequQunOTK0ySMFEX6Lu5A50vewhv840L3tPBYlahugrYQK3q6nezXqBUXpCMe7m7MnagSmGNC%2B48ENZYalqM%2BxDdg%2FS5t%2FW7PkcTRQnfvaGFxR7%2BLnPe0RD2gPHjZRyXLVDv6QsC9%2Fab1oFESRXPUBtCaKf%2BSa7q9x8cCaqTyfbzZUCbZjIYSFx59GQ2ZBS4%2BZsy7N9XG5HOViMJZWDKxESCnB2eVD0DfVXfgVbk%2BqN%2F%2BLw52k6cBD7WPzMOAU884vo%2FYSSNAn%2B%2F1Bjq1RK9sS0LOPaN8cXMGPwVfHS%2FjZErl9tkvf1HWhBUsgY4TcBam5%2BaUMimG%2F9gSEgX3J3Pnq848bfWZftfSnwBa98zaa10TOkD2VMdEmHJxi7JkRbvEnmDUbX3XVpAl01m48ZMJGFS1kFJ6FUQFiNi43H1gZd6P5iohGxkMajlderiEr4sTBlzVSLRsaC01LrKWn6qDDc%2FMjDBjqkAXQzj3oGbR9oFd%2FEIzjz0V1%2BZEUoqZN2FLCWHB4geGEuBlBUbMNAQQkCCQZJtC%2F7v2pX7mYIAUnLJX7MJ2O4m6Tm7VsAdKvGx%2BjXIz29mXSdM%2BNnTwevAHf4sVT%2FXeE5p5O6UXA2tZdBM9m9h2u7T3Fr4NBCL0Y48Jp%2Bnyz2LEZyFgIthIoKwWzyYW85UtmcuEy2yigRvqyLypinN%2BoCSUQxqgB%2F&X-Amz-Signature=b2f263ea6720868ab5749ae2601bd88a79c9e14e8c6c52f5cb22886b8871ab4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMJ7WXX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwW11zoNyyHIKIj3KRB%2FySsTngPs6i1ZsSvCCCDWd90AIhAKkKPBQ1VVPJXBp5sJ%2FjamIYg0CQN0PLtRBsySNo5wbOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfb7zMXY0pXVhVfm4q3APGC%2F4uayuQobMygjVWYkPP%2FeIq%2BuW32FoR7dGusLyx5olI2vkDaH%2FzuH%2Ba%2F6WPElA6ht2kRNa6Ho5JNbMxjKIUDntweRbujrIAl5%2BTqr3SSrTdHlEB518LhS5%2FvLRf%2BnD7TjOseX%2BdUmVV57Gca%2B9v3kb9yKazHyCXnXM%2BoequQunOTK0ySMFEX6Lu5A50vewhv840L3tPBYlahugrYQK3q6nezXqBUXpCMe7m7MnagSmGNC%2B48ENZYalqM%2BxDdg%2FS5t%2FW7PkcTRQnfvaGFxR7%2BLnPe0RD2gPHjZRyXLVDv6QsC9%2Fab1oFESRXPUBtCaKf%2BSa7q9x8cCaqTyfbzZUCbZjIYSFx59GQ2ZBS4%2BZsy7N9XG5HOViMJZWDKxESCnB2eVD0DfVXfgVbk%2BqN%2F%2BLw52k6cBD7WPzMOAU884vo%2FYSSNAn%2B%2F1Bjq1RK9sS0LOPaN8cXMGPwVfHS%2FjZErl9tkvf1HWhBUsgY4TcBam5%2BaUMimG%2F9gSEgX3J3Pnq848bfWZftfSnwBa98zaa10TOkD2VMdEmHJxi7JkRbvEnmDUbX3XVpAl01m48ZMJGFS1kFJ6FUQFiNi43H1gZd6P5iohGxkMajlderiEr4sTBlzVSLRsaC01LrKWn6qDDc%2FMjDBjqkAXQzj3oGbR9oFd%2FEIzjz0V1%2BZEUoqZN2FLCWHB4geGEuBlBUbMNAQQkCCQZJtC%2F7v2pX7mYIAUnLJX7MJ2O4m6Tm7VsAdKvGx%2BjXIz29mXSdM%2BNnTwevAHf4sVT%2FXeE5p5O6UXA2tZdBM9m9h2u7T3Fr4NBCL0Y48Jp%2Bnyz2LEZyFgIthIoKwWzyYW85UtmcuEy2yigRvqyLypinN%2BoCSUQxqgB%2F&X-Amz-Signature=285a684af47e07f9b9835544a4614603da45a8b6f95d98ebd15a0bd29bf3a3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMJ7WXX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwW11zoNyyHIKIj3KRB%2FySsTngPs6i1ZsSvCCCDWd90AIhAKkKPBQ1VVPJXBp5sJ%2FjamIYg0CQN0PLtRBsySNo5wbOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfb7zMXY0pXVhVfm4q3APGC%2F4uayuQobMygjVWYkPP%2FeIq%2BuW32FoR7dGusLyx5olI2vkDaH%2FzuH%2Ba%2F6WPElA6ht2kRNa6Ho5JNbMxjKIUDntweRbujrIAl5%2BTqr3SSrTdHlEB518LhS5%2FvLRf%2BnD7TjOseX%2BdUmVV57Gca%2B9v3kb9yKazHyCXnXM%2BoequQunOTK0ySMFEX6Lu5A50vewhv840L3tPBYlahugrYQK3q6nezXqBUXpCMe7m7MnagSmGNC%2B48ENZYalqM%2BxDdg%2FS5t%2FW7PkcTRQnfvaGFxR7%2BLnPe0RD2gPHjZRyXLVDv6QsC9%2Fab1oFESRXPUBtCaKf%2BSa7q9x8cCaqTyfbzZUCbZjIYSFx59GQ2ZBS4%2BZsy7N9XG5HOViMJZWDKxESCnB2eVD0DfVXfgVbk%2BqN%2F%2BLw52k6cBD7WPzMOAU884vo%2FYSSNAn%2B%2F1Bjq1RK9sS0LOPaN8cXMGPwVfHS%2FjZErl9tkvf1HWhBUsgY4TcBam5%2BaUMimG%2F9gSEgX3J3Pnq848bfWZftfSnwBa98zaa10TOkD2VMdEmHJxi7JkRbvEnmDUbX3XVpAl01m48ZMJGFS1kFJ6FUQFiNi43H1gZd6P5iohGxkMajlderiEr4sTBlzVSLRsaC01LrKWn6qDDc%2FMjDBjqkAXQzj3oGbR9oFd%2FEIzjz0V1%2BZEUoqZN2FLCWHB4geGEuBlBUbMNAQQkCCQZJtC%2F7v2pX7mYIAUnLJX7MJ2O4m6Tm7VsAdKvGx%2BjXIz29mXSdM%2BNnTwevAHf4sVT%2FXeE5p5O6UXA2tZdBM9m9h2u7T3Fr4NBCL0Y48Jp%2Bnyz2LEZyFgIthIoKwWzyYW85UtmcuEy2yigRvqyLypinN%2BoCSUQxqgB%2F&X-Amz-Signature=486fbba8da538b0f3bd90446ee882ff6b892a2ffea7415811f0558362114be74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMJ7WXX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwW11zoNyyHIKIj3KRB%2FySsTngPs6i1ZsSvCCCDWd90AIhAKkKPBQ1VVPJXBp5sJ%2FjamIYg0CQN0PLtRBsySNo5wbOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfb7zMXY0pXVhVfm4q3APGC%2F4uayuQobMygjVWYkPP%2FeIq%2BuW32FoR7dGusLyx5olI2vkDaH%2FzuH%2Ba%2F6WPElA6ht2kRNa6Ho5JNbMxjKIUDntweRbujrIAl5%2BTqr3SSrTdHlEB518LhS5%2FvLRf%2BnD7TjOseX%2BdUmVV57Gca%2B9v3kb9yKazHyCXnXM%2BoequQunOTK0ySMFEX6Lu5A50vewhv840L3tPBYlahugrYQK3q6nezXqBUXpCMe7m7MnagSmGNC%2B48ENZYalqM%2BxDdg%2FS5t%2FW7PkcTRQnfvaGFxR7%2BLnPe0RD2gPHjZRyXLVDv6QsC9%2Fab1oFESRXPUBtCaKf%2BSa7q9x8cCaqTyfbzZUCbZjIYSFx59GQ2ZBS4%2BZsy7N9XG5HOViMJZWDKxESCnB2eVD0DfVXfgVbk%2BqN%2F%2BLw52k6cBD7WPzMOAU884vo%2FYSSNAn%2B%2F1Bjq1RK9sS0LOPaN8cXMGPwVfHS%2FjZErl9tkvf1HWhBUsgY4TcBam5%2BaUMimG%2F9gSEgX3J3Pnq848bfWZftfSnwBa98zaa10TOkD2VMdEmHJxi7JkRbvEnmDUbX3XVpAl01m48ZMJGFS1kFJ6FUQFiNi43H1gZd6P5iohGxkMajlderiEr4sTBlzVSLRsaC01LrKWn6qDDc%2FMjDBjqkAXQzj3oGbR9oFd%2FEIzjz0V1%2BZEUoqZN2FLCWHB4geGEuBlBUbMNAQQkCCQZJtC%2F7v2pX7mYIAUnLJX7MJ2O4m6Tm7VsAdKvGx%2BjXIz29mXSdM%2BNnTwevAHf4sVT%2FXeE5p5O6UXA2tZdBM9m9h2u7T3Fr4NBCL0Y48Jp%2Bnyz2LEZyFgIthIoKwWzyYW85UtmcuEy2yigRvqyLypinN%2BoCSUQxqgB%2F&X-Amz-Signature=3043de00f71a0606c847c7468cabf293c046777d33e39acf0ae7e56e0d79c055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
