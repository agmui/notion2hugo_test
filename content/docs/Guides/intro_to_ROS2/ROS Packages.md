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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NPIEPO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIC%2FFeGihRB2L22rBcw8WFBFecvbyMxl7hXDo01DlaTV5AiAb8RRfSdavss7WIH4Qd4yu2M1fy%2FjSQAAdx53oOZX4Yir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPqdt2m8A9yG%2FuUCJKtwDHbyISd%2B8Ly2r%2Bd%2Bwd%2F7JhAykT59ul9uc3akqks0DitYZX8dmoRmjIXTdJ0tqxX6PEd4tMh2ozmVVy0ML6y18EyyRXhr3E9ktFyX2BzOpNo7hJRsjZ%2Fd8gCAdfJxB%2B6wIvoYJto%2BjNJ14zJfWS6xD6ePm3%2B1z878ir4%2BTd7yKZvz4%2F%2FqcCVUtQ28Cm9bTglEiTWWFEQx9w22FTggdoNHyODPuS0ZVHNZ8CoMx3wlWZDZ%2B1LP564B1K3MDldDw%2BzMcD6zj3BlAqziPUEgFGSYMsWuYsXxEgKf3cMGVCSumAgAmBByObuoc%2FxlI4vLu1%2BwiQAO1WyIKNHqumXr8Y8HJnxH6oDCda14s5igIwzMJaJnKPqnZSouk1cSdwgMzhf8WzBUwppE4AwoFJ%2BMKXvuWUWMlLxUJQCOIBiwB5hsHhbfpIDQOz6mEV27q4Gl5IYpj9bK3BZD8%2FxF4Yltptr%2Fu1HSBdZ8w4Kileo3pl6LhovL22wtIOOTK9c3fjekswvbsbmWyK2cwg3MY%2FxpNVltmaQzgfWHSC8q1QUIh885LSx6AwoNxLa4HJyYMWIq54W8ub3G1i73urV%2FYK%2Fw9EMN0FZOa%2BPFWpAy4z90R6XDw%2BksJkBVllQV8DzZvK5gw09SxvgY6pgE8%2BVhsMNAAQ%2FH0VtIt6ityiKFgLBGazwwvoZOlOUk8LNVLW0FILIy%2BTuUbXWyqkuWkNYfs86twot62eYKmx5fEMSXantmj3G0rPuBOw%2FZjz066J1POWl2%2F1mayv5G0IM1SI5zRXjABfO8EyUg716BEkaWOg05VKmn7ZKfCBwgUUd9LhTRKDxT59mY7VVUbGyooT6cWnE0QpcIjJILwiXDF1nHo2WMX&X-Amz-Signature=33e5f9606c08858d04d704d07702bdeb5d170de27f1fdeabb9d2bd0ee4837b65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NPIEPO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIC%2FFeGihRB2L22rBcw8WFBFecvbyMxl7hXDo01DlaTV5AiAb8RRfSdavss7WIH4Qd4yu2M1fy%2FjSQAAdx53oOZX4Yir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPqdt2m8A9yG%2FuUCJKtwDHbyISd%2B8Ly2r%2Bd%2Bwd%2F7JhAykT59ul9uc3akqks0DitYZX8dmoRmjIXTdJ0tqxX6PEd4tMh2ozmVVy0ML6y18EyyRXhr3E9ktFyX2BzOpNo7hJRsjZ%2Fd8gCAdfJxB%2B6wIvoYJto%2BjNJ14zJfWS6xD6ePm3%2B1z878ir4%2BTd7yKZvz4%2F%2FqcCVUtQ28Cm9bTglEiTWWFEQx9w22FTggdoNHyODPuS0ZVHNZ8CoMx3wlWZDZ%2B1LP564B1K3MDldDw%2BzMcD6zj3BlAqziPUEgFGSYMsWuYsXxEgKf3cMGVCSumAgAmBByObuoc%2FxlI4vLu1%2BwiQAO1WyIKNHqumXr8Y8HJnxH6oDCda14s5igIwzMJaJnKPqnZSouk1cSdwgMzhf8WzBUwppE4AwoFJ%2BMKXvuWUWMlLxUJQCOIBiwB5hsHhbfpIDQOz6mEV27q4Gl5IYpj9bK3BZD8%2FxF4Yltptr%2Fu1HSBdZ8w4Kileo3pl6LhovL22wtIOOTK9c3fjekswvbsbmWyK2cwg3MY%2FxpNVltmaQzgfWHSC8q1QUIh885LSx6AwoNxLa4HJyYMWIq54W8ub3G1i73urV%2FYK%2Fw9EMN0FZOa%2BPFWpAy4z90R6XDw%2BksJkBVllQV8DzZvK5gw09SxvgY6pgE8%2BVhsMNAAQ%2FH0VtIt6ityiKFgLBGazwwvoZOlOUk8LNVLW0FILIy%2BTuUbXWyqkuWkNYfs86twot62eYKmx5fEMSXantmj3G0rPuBOw%2FZjz066J1POWl2%2F1mayv5G0IM1SI5zRXjABfO8EyUg716BEkaWOg05VKmn7ZKfCBwgUUd9LhTRKDxT59mY7VVUbGyooT6cWnE0QpcIjJILwiXDF1nHo2WMX&X-Amz-Signature=19990a095b9e521f66911112daf5c7654a182ac05690f64e22f91c69827f5df1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NPIEPO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIC%2FFeGihRB2L22rBcw8WFBFecvbyMxl7hXDo01DlaTV5AiAb8RRfSdavss7WIH4Qd4yu2M1fy%2FjSQAAdx53oOZX4Yir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPqdt2m8A9yG%2FuUCJKtwDHbyISd%2B8Ly2r%2Bd%2Bwd%2F7JhAykT59ul9uc3akqks0DitYZX8dmoRmjIXTdJ0tqxX6PEd4tMh2ozmVVy0ML6y18EyyRXhr3E9ktFyX2BzOpNo7hJRsjZ%2Fd8gCAdfJxB%2B6wIvoYJto%2BjNJ14zJfWS6xD6ePm3%2B1z878ir4%2BTd7yKZvz4%2F%2FqcCVUtQ28Cm9bTglEiTWWFEQx9w22FTggdoNHyODPuS0ZVHNZ8CoMx3wlWZDZ%2B1LP564B1K3MDldDw%2BzMcD6zj3BlAqziPUEgFGSYMsWuYsXxEgKf3cMGVCSumAgAmBByObuoc%2FxlI4vLu1%2BwiQAO1WyIKNHqumXr8Y8HJnxH6oDCda14s5igIwzMJaJnKPqnZSouk1cSdwgMzhf8WzBUwppE4AwoFJ%2BMKXvuWUWMlLxUJQCOIBiwB5hsHhbfpIDQOz6mEV27q4Gl5IYpj9bK3BZD8%2FxF4Yltptr%2Fu1HSBdZ8w4Kileo3pl6LhovL22wtIOOTK9c3fjekswvbsbmWyK2cwg3MY%2FxpNVltmaQzgfWHSC8q1QUIh885LSx6AwoNxLa4HJyYMWIq54W8ub3G1i73urV%2FYK%2Fw9EMN0FZOa%2BPFWpAy4z90R6XDw%2BksJkBVllQV8DzZvK5gw09SxvgY6pgE8%2BVhsMNAAQ%2FH0VtIt6ityiKFgLBGazwwvoZOlOUk8LNVLW0FILIy%2BTuUbXWyqkuWkNYfs86twot62eYKmx5fEMSXantmj3G0rPuBOw%2FZjz066J1POWl2%2F1mayv5G0IM1SI5zRXjABfO8EyUg716BEkaWOg05VKmn7ZKfCBwgUUd9LhTRKDxT59mY7VVUbGyooT6cWnE0QpcIjJILwiXDF1nHo2WMX&X-Amz-Signature=7e4daab691b0fd6c2aa85b51686919a5c83bbee71194c4deb03463cba236ad1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NPIEPO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIC%2FFeGihRB2L22rBcw8WFBFecvbyMxl7hXDo01DlaTV5AiAb8RRfSdavss7WIH4Qd4yu2M1fy%2FjSQAAdx53oOZX4Yir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPqdt2m8A9yG%2FuUCJKtwDHbyISd%2B8Ly2r%2Bd%2Bwd%2F7JhAykT59ul9uc3akqks0DitYZX8dmoRmjIXTdJ0tqxX6PEd4tMh2ozmVVy0ML6y18EyyRXhr3E9ktFyX2BzOpNo7hJRsjZ%2Fd8gCAdfJxB%2B6wIvoYJto%2BjNJ14zJfWS6xD6ePm3%2B1z878ir4%2BTd7yKZvz4%2F%2FqcCVUtQ28Cm9bTglEiTWWFEQx9w22FTggdoNHyODPuS0ZVHNZ8CoMx3wlWZDZ%2B1LP564B1K3MDldDw%2BzMcD6zj3BlAqziPUEgFGSYMsWuYsXxEgKf3cMGVCSumAgAmBByObuoc%2FxlI4vLu1%2BwiQAO1WyIKNHqumXr8Y8HJnxH6oDCda14s5igIwzMJaJnKPqnZSouk1cSdwgMzhf8WzBUwppE4AwoFJ%2BMKXvuWUWMlLxUJQCOIBiwB5hsHhbfpIDQOz6mEV27q4Gl5IYpj9bK3BZD8%2FxF4Yltptr%2Fu1HSBdZ8w4Kileo3pl6LhovL22wtIOOTK9c3fjekswvbsbmWyK2cwg3MY%2FxpNVltmaQzgfWHSC8q1QUIh885LSx6AwoNxLa4HJyYMWIq54W8ub3G1i73urV%2FYK%2Fw9EMN0FZOa%2BPFWpAy4z90R6XDw%2BksJkBVllQV8DzZvK5gw09SxvgY6pgE8%2BVhsMNAAQ%2FH0VtIt6ityiKFgLBGazwwvoZOlOUk8LNVLW0FILIy%2BTuUbXWyqkuWkNYfs86twot62eYKmx5fEMSXantmj3G0rPuBOw%2FZjz066J1POWl2%2F1mayv5G0IM1SI5zRXjABfO8EyUg716BEkaWOg05VKmn7ZKfCBwgUUd9LhTRKDxT59mY7VVUbGyooT6cWnE0QpcIjJILwiXDF1nHo2WMX&X-Amz-Signature=7209afb7654b879ca240050693fb52736badcafb7adf1c457ccf041a91bf6b70&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NPIEPO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIC%2FFeGihRB2L22rBcw8WFBFecvbyMxl7hXDo01DlaTV5AiAb8RRfSdavss7WIH4Qd4yu2M1fy%2FjSQAAdx53oOZX4Yir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPqdt2m8A9yG%2FuUCJKtwDHbyISd%2B8Ly2r%2Bd%2Bwd%2F7JhAykT59ul9uc3akqks0DitYZX8dmoRmjIXTdJ0tqxX6PEd4tMh2ozmVVy0ML6y18EyyRXhr3E9ktFyX2BzOpNo7hJRsjZ%2Fd8gCAdfJxB%2B6wIvoYJto%2BjNJ14zJfWS6xD6ePm3%2B1z878ir4%2BTd7yKZvz4%2F%2FqcCVUtQ28Cm9bTglEiTWWFEQx9w22FTggdoNHyODPuS0ZVHNZ8CoMx3wlWZDZ%2B1LP564B1K3MDldDw%2BzMcD6zj3BlAqziPUEgFGSYMsWuYsXxEgKf3cMGVCSumAgAmBByObuoc%2FxlI4vLu1%2BwiQAO1WyIKNHqumXr8Y8HJnxH6oDCda14s5igIwzMJaJnKPqnZSouk1cSdwgMzhf8WzBUwppE4AwoFJ%2BMKXvuWUWMlLxUJQCOIBiwB5hsHhbfpIDQOz6mEV27q4Gl5IYpj9bK3BZD8%2FxF4Yltptr%2Fu1HSBdZ8w4Kileo3pl6LhovL22wtIOOTK9c3fjekswvbsbmWyK2cwg3MY%2FxpNVltmaQzgfWHSC8q1QUIh885LSx6AwoNxLa4HJyYMWIq54W8ub3G1i73urV%2FYK%2Fw9EMN0FZOa%2BPFWpAy4z90R6XDw%2BksJkBVllQV8DzZvK5gw09SxvgY6pgE8%2BVhsMNAAQ%2FH0VtIt6ityiKFgLBGazwwvoZOlOUk8LNVLW0FILIy%2BTuUbXWyqkuWkNYfs86twot62eYKmx5fEMSXantmj3G0rPuBOw%2FZjz066J1POWl2%2F1mayv5G0IM1SI5zRXjABfO8EyUg716BEkaWOg05VKmn7ZKfCBwgUUd9LhTRKDxT59mY7VVUbGyooT6cWnE0QpcIjJILwiXDF1nHo2WMX&X-Amz-Signature=476aea18767ceff8c42df58bb575382b0fc3655aa85498451e1ff053dcac0035&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NPIEPO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIC%2FFeGihRB2L22rBcw8WFBFecvbyMxl7hXDo01DlaTV5AiAb8RRfSdavss7WIH4Qd4yu2M1fy%2FjSQAAdx53oOZX4Yir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPqdt2m8A9yG%2FuUCJKtwDHbyISd%2B8Ly2r%2Bd%2Bwd%2F7JhAykT59ul9uc3akqks0DitYZX8dmoRmjIXTdJ0tqxX6PEd4tMh2ozmVVy0ML6y18EyyRXhr3E9ktFyX2BzOpNo7hJRsjZ%2Fd8gCAdfJxB%2B6wIvoYJto%2BjNJ14zJfWS6xD6ePm3%2B1z878ir4%2BTd7yKZvz4%2F%2FqcCVUtQ28Cm9bTglEiTWWFEQx9w22FTggdoNHyODPuS0ZVHNZ8CoMx3wlWZDZ%2B1LP564B1K3MDldDw%2BzMcD6zj3BlAqziPUEgFGSYMsWuYsXxEgKf3cMGVCSumAgAmBByObuoc%2FxlI4vLu1%2BwiQAO1WyIKNHqumXr8Y8HJnxH6oDCda14s5igIwzMJaJnKPqnZSouk1cSdwgMzhf8WzBUwppE4AwoFJ%2BMKXvuWUWMlLxUJQCOIBiwB5hsHhbfpIDQOz6mEV27q4Gl5IYpj9bK3BZD8%2FxF4Yltptr%2Fu1HSBdZ8w4Kileo3pl6LhovL22wtIOOTK9c3fjekswvbsbmWyK2cwg3MY%2FxpNVltmaQzgfWHSC8q1QUIh885LSx6AwoNxLa4HJyYMWIq54W8ub3G1i73urV%2FYK%2Fw9EMN0FZOa%2BPFWpAy4z90R6XDw%2BksJkBVllQV8DzZvK5gw09SxvgY6pgE8%2BVhsMNAAQ%2FH0VtIt6ityiKFgLBGazwwvoZOlOUk8LNVLW0FILIy%2BTuUbXWyqkuWkNYfs86twot62eYKmx5fEMSXantmj3G0rPuBOw%2FZjz066J1POWl2%2F1mayv5G0IM1SI5zRXjABfO8EyUg716BEkaWOg05VKmn7ZKfCBwgUUd9LhTRKDxT59mY7VVUbGyooT6cWnE0QpcIjJILwiXDF1nHo2WMX&X-Amz-Signature=382941a24e67b5f53b1c70351a266c2060993515a15c5dd7cf6dbe6ed6c9e64f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NPIEPO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIC%2FFeGihRB2L22rBcw8WFBFecvbyMxl7hXDo01DlaTV5AiAb8RRfSdavss7WIH4Qd4yu2M1fy%2FjSQAAdx53oOZX4Yir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMPqdt2m8A9yG%2FuUCJKtwDHbyISd%2B8Ly2r%2Bd%2Bwd%2F7JhAykT59ul9uc3akqks0DitYZX8dmoRmjIXTdJ0tqxX6PEd4tMh2ozmVVy0ML6y18EyyRXhr3E9ktFyX2BzOpNo7hJRsjZ%2Fd8gCAdfJxB%2B6wIvoYJto%2BjNJ14zJfWS6xD6ePm3%2B1z878ir4%2BTd7yKZvz4%2F%2FqcCVUtQ28Cm9bTglEiTWWFEQx9w22FTggdoNHyODPuS0ZVHNZ8CoMx3wlWZDZ%2B1LP564B1K3MDldDw%2BzMcD6zj3BlAqziPUEgFGSYMsWuYsXxEgKf3cMGVCSumAgAmBByObuoc%2FxlI4vLu1%2BwiQAO1WyIKNHqumXr8Y8HJnxH6oDCda14s5igIwzMJaJnKPqnZSouk1cSdwgMzhf8WzBUwppE4AwoFJ%2BMKXvuWUWMlLxUJQCOIBiwB5hsHhbfpIDQOz6mEV27q4Gl5IYpj9bK3BZD8%2FxF4Yltptr%2Fu1HSBdZ8w4Kileo3pl6LhovL22wtIOOTK9c3fjekswvbsbmWyK2cwg3MY%2FxpNVltmaQzgfWHSC8q1QUIh885LSx6AwoNxLa4HJyYMWIq54W8ub3G1i73urV%2FYK%2Fw9EMN0FZOa%2BPFWpAy4z90R6XDw%2BksJkBVllQV8DzZvK5gw09SxvgY6pgE8%2BVhsMNAAQ%2FH0VtIt6ityiKFgLBGazwwvoZOlOUk8LNVLW0FILIy%2BTuUbXWyqkuWkNYfs86twot62eYKmx5fEMSXantmj3G0rPuBOw%2FZjz066J1POWl2%2F1mayv5G0IM1SI5zRXjABfO8EyUg716BEkaWOg05VKmn7ZKfCBwgUUd9LhTRKDxT59mY7VVUbGyooT6cWnE0QpcIjJILwiXDF1nHo2WMX&X-Amz-Signature=6c549c31f89243928f95d2970a57aee682e87a5faba248d4bb8f10125ca7822a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
