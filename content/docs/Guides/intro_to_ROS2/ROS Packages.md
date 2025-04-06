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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTNRI6D%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFHxLrzYQGIAsaXW1rev2Y3FOukgNhY0yBHUECbcbnhgIgee6B%2FGSC8p53XuyLTx6pSqFN%2B2L3QpJMwTNdtqiStugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBjnYIN%2BvYbn8ZY%2B1SrcA%2B1e8LcsB2ffyWASAwRsugPLwaWiTUyC7RbdNt4tu1XWpRWoae6oaTQTVbwy4wPVqNPuqByV%2Br2Fk1FbkqdyDTYtctAmY%2B5GdsE%2Bck9WjYvb%2FWg8v5nI8frCkvO8%2BMwkrIiQ7XEhq5tz%2FSKDOTVzpDI%2BjoY8V6mooJKFBvnVUuPpNkYf5By7ecEQCSyyYzViR4C9XFNnY4Dj4%2FFyxkdhtQfmKBFOQfyCzvGLbpfkQ9Qo74KMRZNTYDvtVzOLvTbbv3Qa%2F1Vzd3%2F3sLffRXer05BzxE%2B44lU0%2BqB5gUBXylztj5DoUg3IICnX1ywW4oojOp%2BkvZsHyRJJAvu7DaYzM05OU4kKchHapQSjTvb0%2FO56%2BeKbf%2FP%2BrG7ImyIjOoGYam%2FEqADP0Qd34fLWbOKioQqmGzPfDSWKLf%2FLOxWcdSBivM6cbXkJ8B3W86wjkHmgwzt%2FZQXhycRELuRWcB%2FQBhYFc9k4WwielKP95PYNB9DyE276Sa7%2BeKW88HaxAi75LS69Txerv6E5lUfwKJL7BNjXOz0pDnfhRuTsgq%2BhW5wxwB6BhP4yU5wcAxJW9goJDvu1sqhG%2FL2DNOMqNLxaplm7YfSj2IAXx8KyYOBUKM9b39NN3uSpMskMTK3%2BMLLCxr8GOqUBAHoB8YsHlJc68VsPRA3QeKuwlUoJMg%2BRyoq57nI215OYy1Q%2FK7M8sgZajglTsXJDMNU952nfbxiFIoJ3ONoCyAJ5SxDDt4Vbvj69fRuzBtU7ulksgV25m%2FZH4zSLTVicuMq6ijCr7N1rwKbvRuIB804NOrliffDEOPv3ms9ZyHGCwT8WApluymUDYz2XEi0a24Vt8Jb1pvK9NeApI7d9Z6ygVbFp&X-Amz-Signature=5dedda55510f21bb5416c070f89ce0c9c85af8219ae218ea34047e4c036e6099&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTNRI6D%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFHxLrzYQGIAsaXW1rev2Y3FOukgNhY0yBHUECbcbnhgIgee6B%2FGSC8p53XuyLTx6pSqFN%2B2L3QpJMwTNdtqiStugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBjnYIN%2BvYbn8ZY%2B1SrcA%2B1e8LcsB2ffyWASAwRsugPLwaWiTUyC7RbdNt4tu1XWpRWoae6oaTQTVbwy4wPVqNPuqByV%2Br2Fk1FbkqdyDTYtctAmY%2B5GdsE%2Bck9WjYvb%2FWg8v5nI8frCkvO8%2BMwkrIiQ7XEhq5tz%2FSKDOTVzpDI%2BjoY8V6mooJKFBvnVUuPpNkYf5By7ecEQCSyyYzViR4C9XFNnY4Dj4%2FFyxkdhtQfmKBFOQfyCzvGLbpfkQ9Qo74KMRZNTYDvtVzOLvTbbv3Qa%2F1Vzd3%2F3sLffRXer05BzxE%2B44lU0%2BqB5gUBXylztj5DoUg3IICnX1ywW4oojOp%2BkvZsHyRJJAvu7DaYzM05OU4kKchHapQSjTvb0%2FO56%2BeKbf%2FP%2BrG7ImyIjOoGYam%2FEqADP0Qd34fLWbOKioQqmGzPfDSWKLf%2FLOxWcdSBivM6cbXkJ8B3W86wjkHmgwzt%2FZQXhycRELuRWcB%2FQBhYFc9k4WwielKP95PYNB9DyE276Sa7%2BeKW88HaxAi75LS69Txerv6E5lUfwKJL7BNjXOz0pDnfhRuTsgq%2BhW5wxwB6BhP4yU5wcAxJW9goJDvu1sqhG%2FL2DNOMqNLxaplm7YfSj2IAXx8KyYOBUKM9b39NN3uSpMskMTK3%2BMLLCxr8GOqUBAHoB8YsHlJc68VsPRA3QeKuwlUoJMg%2BRyoq57nI215OYy1Q%2FK7M8sgZajglTsXJDMNU952nfbxiFIoJ3ONoCyAJ5SxDDt4Vbvj69fRuzBtU7ulksgV25m%2FZH4zSLTVicuMq6ijCr7N1rwKbvRuIB804NOrliffDEOPv3ms9ZyHGCwT8WApluymUDYz2XEi0a24Vt8Jb1pvK9NeApI7d9Z6ygVbFp&X-Amz-Signature=da1ed516d521a78adf9a279701a0f06b3812fa33886e26e2bb95499bb8836faf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTNRI6D%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFHxLrzYQGIAsaXW1rev2Y3FOukgNhY0yBHUECbcbnhgIgee6B%2FGSC8p53XuyLTx6pSqFN%2B2L3QpJMwTNdtqiStugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBjnYIN%2BvYbn8ZY%2B1SrcA%2B1e8LcsB2ffyWASAwRsugPLwaWiTUyC7RbdNt4tu1XWpRWoae6oaTQTVbwy4wPVqNPuqByV%2Br2Fk1FbkqdyDTYtctAmY%2B5GdsE%2Bck9WjYvb%2FWg8v5nI8frCkvO8%2BMwkrIiQ7XEhq5tz%2FSKDOTVzpDI%2BjoY8V6mooJKFBvnVUuPpNkYf5By7ecEQCSyyYzViR4C9XFNnY4Dj4%2FFyxkdhtQfmKBFOQfyCzvGLbpfkQ9Qo74KMRZNTYDvtVzOLvTbbv3Qa%2F1Vzd3%2F3sLffRXer05BzxE%2B44lU0%2BqB5gUBXylztj5DoUg3IICnX1ywW4oojOp%2BkvZsHyRJJAvu7DaYzM05OU4kKchHapQSjTvb0%2FO56%2BeKbf%2FP%2BrG7ImyIjOoGYam%2FEqADP0Qd34fLWbOKioQqmGzPfDSWKLf%2FLOxWcdSBivM6cbXkJ8B3W86wjkHmgwzt%2FZQXhycRELuRWcB%2FQBhYFc9k4WwielKP95PYNB9DyE276Sa7%2BeKW88HaxAi75LS69Txerv6E5lUfwKJL7BNjXOz0pDnfhRuTsgq%2BhW5wxwB6BhP4yU5wcAxJW9goJDvu1sqhG%2FL2DNOMqNLxaplm7YfSj2IAXx8KyYOBUKM9b39NN3uSpMskMTK3%2BMLLCxr8GOqUBAHoB8YsHlJc68VsPRA3QeKuwlUoJMg%2BRyoq57nI215OYy1Q%2FK7M8sgZajglTsXJDMNU952nfbxiFIoJ3ONoCyAJ5SxDDt4Vbvj69fRuzBtU7ulksgV25m%2FZH4zSLTVicuMq6ijCr7N1rwKbvRuIB804NOrliffDEOPv3ms9ZyHGCwT8WApluymUDYz2XEi0a24Vt8Jb1pvK9NeApI7d9Z6ygVbFp&X-Amz-Signature=be87a8b51513f207ec37678cafd3579a235b38f724c61edbc93229767f602917&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTNRI6D%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFHxLrzYQGIAsaXW1rev2Y3FOukgNhY0yBHUECbcbnhgIgee6B%2FGSC8p53XuyLTx6pSqFN%2B2L3QpJMwTNdtqiStugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBjnYIN%2BvYbn8ZY%2B1SrcA%2B1e8LcsB2ffyWASAwRsugPLwaWiTUyC7RbdNt4tu1XWpRWoae6oaTQTVbwy4wPVqNPuqByV%2Br2Fk1FbkqdyDTYtctAmY%2B5GdsE%2Bck9WjYvb%2FWg8v5nI8frCkvO8%2BMwkrIiQ7XEhq5tz%2FSKDOTVzpDI%2BjoY8V6mooJKFBvnVUuPpNkYf5By7ecEQCSyyYzViR4C9XFNnY4Dj4%2FFyxkdhtQfmKBFOQfyCzvGLbpfkQ9Qo74KMRZNTYDvtVzOLvTbbv3Qa%2F1Vzd3%2F3sLffRXer05BzxE%2B44lU0%2BqB5gUBXylztj5DoUg3IICnX1ywW4oojOp%2BkvZsHyRJJAvu7DaYzM05OU4kKchHapQSjTvb0%2FO56%2BeKbf%2FP%2BrG7ImyIjOoGYam%2FEqADP0Qd34fLWbOKioQqmGzPfDSWKLf%2FLOxWcdSBivM6cbXkJ8B3W86wjkHmgwzt%2FZQXhycRELuRWcB%2FQBhYFc9k4WwielKP95PYNB9DyE276Sa7%2BeKW88HaxAi75LS69Txerv6E5lUfwKJL7BNjXOz0pDnfhRuTsgq%2BhW5wxwB6BhP4yU5wcAxJW9goJDvu1sqhG%2FL2DNOMqNLxaplm7YfSj2IAXx8KyYOBUKM9b39NN3uSpMskMTK3%2BMLLCxr8GOqUBAHoB8YsHlJc68VsPRA3QeKuwlUoJMg%2BRyoq57nI215OYy1Q%2FK7M8sgZajglTsXJDMNU952nfbxiFIoJ3ONoCyAJ5SxDDt4Vbvj69fRuzBtU7ulksgV25m%2FZH4zSLTVicuMq6ijCr7N1rwKbvRuIB804NOrliffDEOPv3ms9ZyHGCwT8WApluymUDYz2XEi0a24Vt8Jb1pvK9NeApI7d9Z6ygVbFp&X-Amz-Signature=784299eb3ac290ad2df03ef0e2d314061697a034e72cd965e74293f17c04616d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTNRI6D%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFHxLrzYQGIAsaXW1rev2Y3FOukgNhY0yBHUECbcbnhgIgee6B%2FGSC8p53XuyLTx6pSqFN%2B2L3QpJMwTNdtqiStugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBjnYIN%2BvYbn8ZY%2B1SrcA%2B1e8LcsB2ffyWASAwRsugPLwaWiTUyC7RbdNt4tu1XWpRWoae6oaTQTVbwy4wPVqNPuqByV%2Br2Fk1FbkqdyDTYtctAmY%2B5GdsE%2Bck9WjYvb%2FWg8v5nI8frCkvO8%2BMwkrIiQ7XEhq5tz%2FSKDOTVzpDI%2BjoY8V6mooJKFBvnVUuPpNkYf5By7ecEQCSyyYzViR4C9XFNnY4Dj4%2FFyxkdhtQfmKBFOQfyCzvGLbpfkQ9Qo74KMRZNTYDvtVzOLvTbbv3Qa%2F1Vzd3%2F3sLffRXer05BzxE%2B44lU0%2BqB5gUBXylztj5DoUg3IICnX1ywW4oojOp%2BkvZsHyRJJAvu7DaYzM05OU4kKchHapQSjTvb0%2FO56%2BeKbf%2FP%2BrG7ImyIjOoGYam%2FEqADP0Qd34fLWbOKioQqmGzPfDSWKLf%2FLOxWcdSBivM6cbXkJ8B3W86wjkHmgwzt%2FZQXhycRELuRWcB%2FQBhYFc9k4WwielKP95PYNB9DyE276Sa7%2BeKW88HaxAi75LS69Txerv6E5lUfwKJL7BNjXOz0pDnfhRuTsgq%2BhW5wxwB6BhP4yU5wcAxJW9goJDvu1sqhG%2FL2DNOMqNLxaplm7YfSj2IAXx8KyYOBUKM9b39NN3uSpMskMTK3%2BMLLCxr8GOqUBAHoB8YsHlJc68VsPRA3QeKuwlUoJMg%2BRyoq57nI215OYy1Q%2FK7M8sgZajglTsXJDMNU952nfbxiFIoJ3ONoCyAJ5SxDDt4Vbvj69fRuzBtU7ulksgV25m%2FZH4zSLTVicuMq6ijCr7N1rwKbvRuIB804NOrliffDEOPv3ms9ZyHGCwT8WApluymUDYz2XEi0a24Vt8Jb1pvK9NeApI7d9Z6ygVbFp&X-Amz-Signature=5cbe2ce27371ce3d4b2f5e1c34d944bb564c7d702f9cc83a68116512b5d9f28d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTNRI6D%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFHxLrzYQGIAsaXW1rev2Y3FOukgNhY0yBHUECbcbnhgIgee6B%2FGSC8p53XuyLTx6pSqFN%2B2L3QpJMwTNdtqiStugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBjnYIN%2BvYbn8ZY%2B1SrcA%2B1e8LcsB2ffyWASAwRsugPLwaWiTUyC7RbdNt4tu1XWpRWoae6oaTQTVbwy4wPVqNPuqByV%2Br2Fk1FbkqdyDTYtctAmY%2B5GdsE%2Bck9WjYvb%2FWg8v5nI8frCkvO8%2BMwkrIiQ7XEhq5tz%2FSKDOTVzpDI%2BjoY8V6mooJKFBvnVUuPpNkYf5By7ecEQCSyyYzViR4C9XFNnY4Dj4%2FFyxkdhtQfmKBFOQfyCzvGLbpfkQ9Qo74KMRZNTYDvtVzOLvTbbv3Qa%2F1Vzd3%2F3sLffRXer05BzxE%2B44lU0%2BqB5gUBXylztj5DoUg3IICnX1ywW4oojOp%2BkvZsHyRJJAvu7DaYzM05OU4kKchHapQSjTvb0%2FO56%2BeKbf%2FP%2BrG7ImyIjOoGYam%2FEqADP0Qd34fLWbOKioQqmGzPfDSWKLf%2FLOxWcdSBivM6cbXkJ8B3W86wjkHmgwzt%2FZQXhycRELuRWcB%2FQBhYFc9k4WwielKP95PYNB9DyE276Sa7%2BeKW88HaxAi75LS69Txerv6E5lUfwKJL7BNjXOz0pDnfhRuTsgq%2BhW5wxwB6BhP4yU5wcAxJW9goJDvu1sqhG%2FL2DNOMqNLxaplm7YfSj2IAXx8KyYOBUKM9b39NN3uSpMskMTK3%2BMLLCxr8GOqUBAHoB8YsHlJc68VsPRA3QeKuwlUoJMg%2BRyoq57nI215OYy1Q%2FK7M8sgZajglTsXJDMNU952nfbxiFIoJ3ONoCyAJ5SxDDt4Vbvj69fRuzBtU7ulksgV25m%2FZH4zSLTVicuMq6ijCr7N1rwKbvRuIB804NOrliffDEOPv3ms9ZyHGCwT8WApluymUDYz2XEi0a24Vt8Jb1pvK9NeApI7d9Z6ygVbFp&X-Amz-Signature=72f34762b6cddf2d5561a046c24e0514152f82203119266bcdb8af69e99ea9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTNRI6D%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFHxLrzYQGIAsaXW1rev2Y3FOukgNhY0yBHUECbcbnhgIgee6B%2FGSC8p53XuyLTx6pSqFN%2B2L3QpJMwTNdtqiStugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBjnYIN%2BvYbn8ZY%2B1SrcA%2B1e8LcsB2ffyWASAwRsugPLwaWiTUyC7RbdNt4tu1XWpRWoae6oaTQTVbwy4wPVqNPuqByV%2Br2Fk1FbkqdyDTYtctAmY%2B5GdsE%2Bck9WjYvb%2FWg8v5nI8frCkvO8%2BMwkrIiQ7XEhq5tz%2FSKDOTVzpDI%2BjoY8V6mooJKFBvnVUuPpNkYf5By7ecEQCSyyYzViR4C9XFNnY4Dj4%2FFyxkdhtQfmKBFOQfyCzvGLbpfkQ9Qo74KMRZNTYDvtVzOLvTbbv3Qa%2F1Vzd3%2F3sLffRXer05BzxE%2B44lU0%2BqB5gUBXylztj5DoUg3IICnX1ywW4oojOp%2BkvZsHyRJJAvu7DaYzM05OU4kKchHapQSjTvb0%2FO56%2BeKbf%2FP%2BrG7ImyIjOoGYam%2FEqADP0Qd34fLWbOKioQqmGzPfDSWKLf%2FLOxWcdSBivM6cbXkJ8B3W86wjkHmgwzt%2FZQXhycRELuRWcB%2FQBhYFc9k4WwielKP95PYNB9DyE276Sa7%2BeKW88HaxAi75LS69Txerv6E5lUfwKJL7BNjXOz0pDnfhRuTsgq%2BhW5wxwB6BhP4yU5wcAxJW9goJDvu1sqhG%2FL2DNOMqNLxaplm7YfSj2IAXx8KyYOBUKM9b39NN3uSpMskMTK3%2BMLLCxr8GOqUBAHoB8YsHlJc68VsPRA3QeKuwlUoJMg%2BRyoq57nI215OYy1Q%2FK7M8sgZajglTsXJDMNU952nfbxiFIoJ3ONoCyAJ5SxDDt4Vbvj69fRuzBtU7ulksgV25m%2FZH4zSLTVicuMq6ijCr7N1rwKbvRuIB804NOrliffDEOPv3ms9ZyHGCwT8WApluymUDYz2XEi0a24Vt8Jb1pvK9NeApI7d9Z6ygVbFp&X-Amz-Signature=c93df4843f9b9a14e2f9f1c25f967215a1e58487e20f6cdbe966feb269a0bc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
