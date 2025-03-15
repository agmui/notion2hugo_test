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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGLZXRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPpcyB0wqLUTK6azC4jJvkkBvErkf3t1jEWwQYpY12QIhALU3RDkJwmc4hrKubBgvWfrelpcXg73Sk5RRKSR019VoKv8DCBAQABoMNjM3NDIzMTgzODA1IgxIBQ6F%2Bg9g3cwQyhkq3AOZa4xjU%2Fz0e17dLjyXECxtMD3WHk04TNYbvNlzUV2QQ3VthpiUK%2FXAdNlVsOY%2BYUmqAURE0y%2F0%2BTwKkM5%2FPzGzZMh7FzVVAgAGdpxbVgg37WHOrqWlg%2F5RVVIvI9HO9%2FfzDMFa49Vh7s7FrvA5exl0xeI9PS2klRBFgUhoP5qUStCe7mbj8OjZOX8K2PAK9On1qEZ%2BsQPkCdAxEyi0tULdgiEDGa7e5nHi8JnzSXqvF88I5OkGiAlfNtD2%2FEiHd%2BSkvADmr8h8NAsynQp1pZQW8MmVLNJBfirIUwxLNxpvGm6TtI%2FyABAkgX44sZN%2B1%2B4zJ0xiEtAO2fGKKt9APDMvduxuBXHp0AT8qLMsQWntE%2Bk0gjGci1qJfcdztrgqJJ8PleArD6FZ389KijRr4x6%2F72zFP6oY%2FypQPFlvrmpz1QS0DHr4sfUAI3deiEl0wGnSs2TNizZcUyUJrfos2dB3J8zCIWsnby6bCGtZ75LSLNmnfFuCs%2Bl9t8JuFflH%2BtceJAICdJp1tZH6pLyQ62Yjkby47O2gvLGE241P0x%2Fv%2BoYnyXWbpZuoM5aNzdAVZSduHuccgCx67hsDUt%2BG2wH1mqQSoRXvsEyf7q8RPPGh%2BXxVpUUR4XjwibRbxjCaxNS%2BBjqkAU0bjg3GWaQ%2Fn7s1%2Bqc%2BYY63pAyZ82qJ%2FCiikxk%2BqtpjB0gM%2FZjQFs6lmPQAv2DtAJBcGqM0800q1mXYxz5%2FxsYMdel16K9sW2LSuz1RfLImxSSQD5tvZHzl3Xnc3oJYpZhDplF2TxlHcoVl3x%2BW%2FIebOpqGKwumK92A5MFZeVZ181neWcNAUtEhrCpnwV4JJWqVKIadfHe9m5NEf0rb0kam1xcC&X-Amz-Signature=ec105d80efa28d6b05a1d052627686eb159b71ef186288375454ebb02b7b93be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGLZXRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPpcyB0wqLUTK6azC4jJvkkBvErkf3t1jEWwQYpY12QIhALU3RDkJwmc4hrKubBgvWfrelpcXg73Sk5RRKSR019VoKv8DCBAQABoMNjM3NDIzMTgzODA1IgxIBQ6F%2Bg9g3cwQyhkq3AOZa4xjU%2Fz0e17dLjyXECxtMD3WHk04TNYbvNlzUV2QQ3VthpiUK%2FXAdNlVsOY%2BYUmqAURE0y%2F0%2BTwKkM5%2FPzGzZMh7FzVVAgAGdpxbVgg37WHOrqWlg%2F5RVVIvI9HO9%2FfzDMFa49Vh7s7FrvA5exl0xeI9PS2klRBFgUhoP5qUStCe7mbj8OjZOX8K2PAK9On1qEZ%2BsQPkCdAxEyi0tULdgiEDGa7e5nHi8JnzSXqvF88I5OkGiAlfNtD2%2FEiHd%2BSkvADmr8h8NAsynQp1pZQW8MmVLNJBfirIUwxLNxpvGm6TtI%2FyABAkgX44sZN%2B1%2B4zJ0xiEtAO2fGKKt9APDMvduxuBXHp0AT8qLMsQWntE%2Bk0gjGci1qJfcdztrgqJJ8PleArD6FZ389KijRr4x6%2F72zFP6oY%2FypQPFlvrmpz1QS0DHr4sfUAI3deiEl0wGnSs2TNizZcUyUJrfos2dB3J8zCIWsnby6bCGtZ75LSLNmnfFuCs%2Bl9t8JuFflH%2BtceJAICdJp1tZH6pLyQ62Yjkby47O2gvLGE241P0x%2Fv%2BoYnyXWbpZuoM5aNzdAVZSduHuccgCx67hsDUt%2BG2wH1mqQSoRXvsEyf7q8RPPGh%2BXxVpUUR4XjwibRbxjCaxNS%2BBjqkAU0bjg3GWaQ%2Fn7s1%2Bqc%2BYY63pAyZ82qJ%2FCiikxk%2BqtpjB0gM%2FZjQFs6lmPQAv2DtAJBcGqM0800q1mXYxz5%2FxsYMdel16K9sW2LSuz1RfLImxSSQD5tvZHzl3Xnc3oJYpZhDplF2TxlHcoVl3x%2BW%2FIebOpqGKwumK92A5MFZeVZ181neWcNAUtEhrCpnwV4JJWqVKIadfHe9m5NEf0rb0kam1xcC&X-Amz-Signature=9da0aa7df1fa6d7798e9883eb386c1e82fa79484daa98b1d4f70d28ab684ee7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGLZXRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPpcyB0wqLUTK6azC4jJvkkBvErkf3t1jEWwQYpY12QIhALU3RDkJwmc4hrKubBgvWfrelpcXg73Sk5RRKSR019VoKv8DCBAQABoMNjM3NDIzMTgzODA1IgxIBQ6F%2Bg9g3cwQyhkq3AOZa4xjU%2Fz0e17dLjyXECxtMD3WHk04TNYbvNlzUV2QQ3VthpiUK%2FXAdNlVsOY%2BYUmqAURE0y%2F0%2BTwKkM5%2FPzGzZMh7FzVVAgAGdpxbVgg37WHOrqWlg%2F5RVVIvI9HO9%2FfzDMFa49Vh7s7FrvA5exl0xeI9PS2klRBFgUhoP5qUStCe7mbj8OjZOX8K2PAK9On1qEZ%2BsQPkCdAxEyi0tULdgiEDGa7e5nHi8JnzSXqvF88I5OkGiAlfNtD2%2FEiHd%2BSkvADmr8h8NAsynQp1pZQW8MmVLNJBfirIUwxLNxpvGm6TtI%2FyABAkgX44sZN%2B1%2B4zJ0xiEtAO2fGKKt9APDMvduxuBXHp0AT8qLMsQWntE%2Bk0gjGci1qJfcdztrgqJJ8PleArD6FZ389KijRr4x6%2F72zFP6oY%2FypQPFlvrmpz1QS0DHr4sfUAI3deiEl0wGnSs2TNizZcUyUJrfos2dB3J8zCIWsnby6bCGtZ75LSLNmnfFuCs%2Bl9t8JuFflH%2BtceJAICdJp1tZH6pLyQ62Yjkby47O2gvLGE241P0x%2Fv%2BoYnyXWbpZuoM5aNzdAVZSduHuccgCx67hsDUt%2BG2wH1mqQSoRXvsEyf7q8RPPGh%2BXxVpUUR4XjwibRbxjCaxNS%2BBjqkAU0bjg3GWaQ%2Fn7s1%2Bqc%2BYY63pAyZ82qJ%2FCiikxk%2BqtpjB0gM%2FZjQFs6lmPQAv2DtAJBcGqM0800q1mXYxz5%2FxsYMdel16K9sW2LSuz1RfLImxSSQD5tvZHzl3Xnc3oJYpZhDplF2TxlHcoVl3x%2BW%2FIebOpqGKwumK92A5MFZeVZ181neWcNAUtEhrCpnwV4JJWqVKIadfHe9m5NEf0rb0kam1xcC&X-Amz-Signature=6aa073e78fbe853c72ea60ad140b87c9b8dfb5404e5fa69281275858c4178aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGLZXRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPpcyB0wqLUTK6azC4jJvkkBvErkf3t1jEWwQYpY12QIhALU3RDkJwmc4hrKubBgvWfrelpcXg73Sk5RRKSR019VoKv8DCBAQABoMNjM3NDIzMTgzODA1IgxIBQ6F%2Bg9g3cwQyhkq3AOZa4xjU%2Fz0e17dLjyXECxtMD3WHk04TNYbvNlzUV2QQ3VthpiUK%2FXAdNlVsOY%2BYUmqAURE0y%2F0%2BTwKkM5%2FPzGzZMh7FzVVAgAGdpxbVgg37WHOrqWlg%2F5RVVIvI9HO9%2FfzDMFa49Vh7s7FrvA5exl0xeI9PS2klRBFgUhoP5qUStCe7mbj8OjZOX8K2PAK9On1qEZ%2BsQPkCdAxEyi0tULdgiEDGa7e5nHi8JnzSXqvF88I5OkGiAlfNtD2%2FEiHd%2BSkvADmr8h8NAsynQp1pZQW8MmVLNJBfirIUwxLNxpvGm6TtI%2FyABAkgX44sZN%2B1%2B4zJ0xiEtAO2fGKKt9APDMvduxuBXHp0AT8qLMsQWntE%2Bk0gjGci1qJfcdztrgqJJ8PleArD6FZ389KijRr4x6%2F72zFP6oY%2FypQPFlvrmpz1QS0DHr4sfUAI3deiEl0wGnSs2TNizZcUyUJrfos2dB3J8zCIWsnby6bCGtZ75LSLNmnfFuCs%2Bl9t8JuFflH%2BtceJAICdJp1tZH6pLyQ62Yjkby47O2gvLGE241P0x%2Fv%2BoYnyXWbpZuoM5aNzdAVZSduHuccgCx67hsDUt%2BG2wH1mqQSoRXvsEyf7q8RPPGh%2BXxVpUUR4XjwibRbxjCaxNS%2BBjqkAU0bjg3GWaQ%2Fn7s1%2Bqc%2BYY63pAyZ82qJ%2FCiikxk%2BqtpjB0gM%2FZjQFs6lmPQAv2DtAJBcGqM0800q1mXYxz5%2FxsYMdel16K9sW2LSuz1RfLImxSSQD5tvZHzl3Xnc3oJYpZhDplF2TxlHcoVl3x%2BW%2FIebOpqGKwumK92A5MFZeVZ181neWcNAUtEhrCpnwV4JJWqVKIadfHe9m5NEf0rb0kam1xcC&X-Amz-Signature=7e96e77efeec7f96f028ecd15da1e0fe70170f7de90f62f7d60ddd27733d01b2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGLZXRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPpcyB0wqLUTK6azC4jJvkkBvErkf3t1jEWwQYpY12QIhALU3RDkJwmc4hrKubBgvWfrelpcXg73Sk5RRKSR019VoKv8DCBAQABoMNjM3NDIzMTgzODA1IgxIBQ6F%2Bg9g3cwQyhkq3AOZa4xjU%2Fz0e17dLjyXECxtMD3WHk04TNYbvNlzUV2QQ3VthpiUK%2FXAdNlVsOY%2BYUmqAURE0y%2F0%2BTwKkM5%2FPzGzZMh7FzVVAgAGdpxbVgg37WHOrqWlg%2F5RVVIvI9HO9%2FfzDMFa49Vh7s7FrvA5exl0xeI9PS2klRBFgUhoP5qUStCe7mbj8OjZOX8K2PAK9On1qEZ%2BsQPkCdAxEyi0tULdgiEDGa7e5nHi8JnzSXqvF88I5OkGiAlfNtD2%2FEiHd%2BSkvADmr8h8NAsynQp1pZQW8MmVLNJBfirIUwxLNxpvGm6TtI%2FyABAkgX44sZN%2B1%2B4zJ0xiEtAO2fGKKt9APDMvduxuBXHp0AT8qLMsQWntE%2Bk0gjGci1qJfcdztrgqJJ8PleArD6FZ389KijRr4x6%2F72zFP6oY%2FypQPFlvrmpz1QS0DHr4sfUAI3deiEl0wGnSs2TNizZcUyUJrfos2dB3J8zCIWsnby6bCGtZ75LSLNmnfFuCs%2Bl9t8JuFflH%2BtceJAICdJp1tZH6pLyQ62Yjkby47O2gvLGE241P0x%2Fv%2BoYnyXWbpZuoM5aNzdAVZSduHuccgCx67hsDUt%2BG2wH1mqQSoRXvsEyf7q8RPPGh%2BXxVpUUR4XjwibRbxjCaxNS%2BBjqkAU0bjg3GWaQ%2Fn7s1%2Bqc%2BYY63pAyZ82qJ%2FCiikxk%2BqtpjB0gM%2FZjQFs6lmPQAv2DtAJBcGqM0800q1mXYxz5%2FxsYMdel16K9sW2LSuz1RfLImxSSQD5tvZHzl3Xnc3oJYpZhDplF2TxlHcoVl3x%2BW%2FIebOpqGKwumK92A5MFZeVZ181neWcNAUtEhrCpnwV4JJWqVKIadfHe9m5NEf0rb0kam1xcC&X-Amz-Signature=79061901dce58dd1e983067dcd5f2fcfa746709b245020b825bdb5ecb0428596&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGLZXRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPpcyB0wqLUTK6azC4jJvkkBvErkf3t1jEWwQYpY12QIhALU3RDkJwmc4hrKubBgvWfrelpcXg73Sk5RRKSR019VoKv8DCBAQABoMNjM3NDIzMTgzODA1IgxIBQ6F%2Bg9g3cwQyhkq3AOZa4xjU%2Fz0e17dLjyXECxtMD3WHk04TNYbvNlzUV2QQ3VthpiUK%2FXAdNlVsOY%2BYUmqAURE0y%2F0%2BTwKkM5%2FPzGzZMh7FzVVAgAGdpxbVgg37WHOrqWlg%2F5RVVIvI9HO9%2FfzDMFa49Vh7s7FrvA5exl0xeI9PS2klRBFgUhoP5qUStCe7mbj8OjZOX8K2PAK9On1qEZ%2BsQPkCdAxEyi0tULdgiEDGa7e5nHi8JnzSXqvF88I5OkGiAlfNtD2%2FEiHd%2BSkvADmr8h8NAsynQp1pZQW8MmVLNJBfirIUwxLNxpvGm6TtI%2FyABAkgX44sZN%2B1%2B4zJ0xiEtAO2fGKKt9APDMvduxuBXHp0AT8qLMsQWntE%2Bk0gjGci1qJfcdztrgqJJ8PleArD6FZ389KijRr4x6%2F72zFP6oY%2FypQPFlvrmpz1QS0DHr4sfUAI3deiEl0wGnSs2TNizZcUyUJrfos2dB3J8zCIWsnby6bCGtZ75LSLNmnfFuCs%2Bl9t8JuFflH%2BtceJAICdJp1tZH6pLyQ62Yjkby47O2gvLGE241P0x%2Fv%2BoYnyXWbpZuoM5aNzdAVZSduHuccgCx67hsDUt%2BG2wH1mqQSoRXvsEyf7q8RPPGh%2BXxVpUUR4XjwibRbxjCaxNS%2BBjqkAU0bjg3GWaQ%2Fn7s1%2Bqc%2BYY63pAyZ82qJ%2FCiikxk%2BqtpjB0gM%2FZjQFs6lmPQAv2DtAJBcGqM0800q1mXYxz5%2FxsYMdel16K9sW2LSuz1RfLImxSSQD5tvZHzl3Xnc3oJYpZhDplF2TxlHcoVl3x%2BW%2FIebOpqGKwumK92A5MFZeVZ181neWcNAUtEhrCpnwV4JJWqVKIadfHe9m5NEf0rb0kam1xcC&X-Amz-Signature=e2aa7d031d8ae2d03058b82c95213d1dd3ef930e4b114bd698858b580a412cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGLZXRK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIPpcyB0wqLUTK6azC4jJvkkBvErkf3t1jEWwQYpY12QIhALU3RDkJwmc4hrKubBgvWfrelpcXg73Sk5RRKSR019VoKv8DCBAQABoMNjM3NDIzMTgzODA1IgxIBQ6F%2Bg9g3cwQyhkq3AOZa4xjU%2Fz0e17dLjyXECxtMD3WHk04TNYbvNlzUV2QQ3VthpiUK%2FXAdNlVsOY%2BYUmqAURE0y%2F0%2BTwKkM5%2FPzGzZMh7FzVVAgAGdpxbVgg37WHOrqWlg%2F5RVVIvI9HO9%2FfzDMFa49Vh7s7FrvA5exl0xeI9PS2klRBFgUhoP5qUStCe7mbj8OjZOX8K2PAK9On1qEZ%2BsQPkCdAxEyi0tULdgiEDGa7e5nHi8JnzSXqvF88I5OkGiAlfNtD2%2FEiHd%2BSkvADmr8h8NAsynQp1pZQW8MmVLNJBfirIUwxLNxpvGm6TtI%2FyABAkgX44sZN%2B1%2B4zJ0xiEtAO2fGKKt9APDMvduxuBXHp0AT8qLMsQWntE%2Bk0gjGci1qJfcdztrgqJJ8PleArD6FZ389KijRr4x6%2F72zFP6oY%2FypQPFlvrmpz1QS0DHr4sfUAI3deiEl0wGnSs2TNizZcUyUJrfos2dB3J8zCIWsnby6bCGtZ75LSLNmnfFuCs%2Bl9t8JuFflH%2BtceJAICdJp1tZH6pLyQ62Yjkby47O2gvLGE241P0x%2Fv%2BoYnyXWbpZuoM5aNzdAVZSduHuccgCx67hsDUt%2BG2wH1mqQSoRXvsEyf7q8RPPGh%2BXxVpUUR4XjwibRbxjCaxNS%2BBjqkAU0bjg3GWaQ%2Fn7s1%2Bqc%2BYY63pAyZ82qJ%2FCiikxk%2BqtpjB0gM%2FZjQFs6lmPQAv2DtAJBcGqM0800q1mXYxz5%2FxsYMdel16K9sW2LSuz1RfLImxSSQD5tvZHzl3Xnc3oJYpZhDplF2TxlHcoVl3x%2BW%2FIebOpqGKwumK92A5MFZeVZ181neWcNAUtEhrCpnwV4JJWqVKIadfHe9m5NEf0rb0kam1xcC&X-Amz-Signature=c6ede1f3435892aaa9775e53c053a518731763ddb55562607abbdde4d7cb70d6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
