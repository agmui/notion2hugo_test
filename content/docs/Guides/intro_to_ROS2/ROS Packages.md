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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLONWBP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TiJTT406PbC1NcRZk5NCVHwPBS%2BBmK0K5%2FbKqDkcdgIhAPylLkEbbW1DsdVI6uWrPBDYdTE5rBGn1MF5Pcfk911HKv8DCDgQABoMNjM3NDIzMTgzODA1IgzsK%2BTOSKb8BcLTE8cq3AMy7Mic6biLk7TbLdQqCzibeZ3cpqpRLIpyIeojqZaSBvbF0vwIi00S0y7d2SKJd%2Bow3Wupj6JxlGeJOO9965O%2FJuV0%2B7kd6aMYrOgzo7Wd0574Ivoh%2Fg9yOwP9L7PzYv4fgIv2lC%2Bk5bBaMolcIQ4tQekyRSdvIRC8UU0FUK%2F4UNvCj9Cj96rrw4IpUoDvyG0zMEL8aOXxPL57ZaKk4RWk7TbknLCxRpHs5NzsE2LnwTQyQxi722PID0UrWejn5%2BPHO9j1K52v06wGIL2Z2Z%2Bzd%2Bazu0LUV%2FdPPjIw0IB7QwOZDHrv53peFNfhPPkYkAM9oC%2Fko6MBimtkXj8AB5ks%2BnKud1bez9IJZnXtbkLAJdMfp2nN3GhLpu3BBhghakn4HLjz2yVD9th%2BEdhqVRj14OmtxWc%2BDe9fOdJ0TA9BKJdPrcDLje6ZXbpwQwtbSSraV24I7kZqdgUjAO%2F4KC8vqjDvpfnXxAC%2FUuz0tpwRG6zPxiLa1wln5U3AzU8NiC%2FOqWRd0b2HdG1PzvKqYrWpedjbiLg2DYEHK6jNCB5YZhCYcZE0TIivaJQuaguq2WH4gL4XUQvJRtO%2Fh%2BfKjIkZMT%2Byzfu5UjmmdrVZK0WgBS%2FmF8Ikm%2Bb3bWMdPTCIyai%2BBjqkAfpGAPB3kJVY2EuLNFtLu6TzTbTT2A3ejzX7LYpEuw7VKl9PjCkE03TkMGIvcnFnGk7ZtbrIKI6QGv0IUkdrm1pFTb%2BzYYTjSPXIw42Srjp9wZAIUsQGbGzXDDJGH30jZHwuB5xUl%2BycPsgJdNeB4%2B3b9V4XGJ8%2BJMwtHkj7Dda5juaXocPh3neEe1P3MQwCk2SFFC3ouGanHUr59QUPNErjpUG%2F&X-Amz-Signature=4eb74222aa283ad91d0c4692bb777795e0795ce7ea655711aa0ef57b782ae515&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLONWBP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TiJTT406PbC1NcRZk5NCVHwPBS%2BBmK0K5%2FbKqDkcdgIhAPylLkEbbW1DsdVI6uWrPBDYdTE5rBGn1MF5Pcfk911HKv8DCDgQABoMNjM3NDIzMTgzODA1IgzsK%2BTOSKb8BcLTE8cq3AMy7Mic6biLk7TbLdQqCzibeZ3cpqpRLIpyIeojqZaSBvbF0vwIi00S0y7d2SKJd%2Bow3Wupj6JxlGeJOO9965O%2FJuV0%2B7kd6aMYrOgzo7Wd0574Ivoh%2Fg9yOwP9L7PzYv4fgIv2lC%2Bk5bBaMolcIQ4tQekyRSdvIRC8UU0FUK%2F4UNvCj9Cj96rrw4IpUoDvyG0zMEL8aOXxPL57ZaKk4RWk7TbknLCxRpHs5NzsE2LnwTQyQxi722PID0UrWejn5%2BPHO9j1K52v06wGIL2Z2Z%2Bzd%2Bazu0LUV%2FdPPjIw0IB7QwOZDHrv53peFNfhPPkYkAM9oC%2Fko6MBimtkXj8AB5ks%2BnKud1bez9IJZnXtbkLAJdMfp2nN3GhLpu3BBhghakn4HLjz2yVD9th%2BEdhqVRj14OmtxWc%2BDe9fOdJ0TA9BKJdPrcDLje6ZXbpwQwtbSSraV24I7kZqdgUjAO%2F4KC8vqjDvpfnXxAC%2FUuz0tpwRG6zPxiLa1wln5U3AzU8NiC%2FOqWRd0b2HdG1PzvKqYrWpedjbiLg2DYEHK6jNCB5YZhCYcZE0TIivaJQuaguq2WH4gL4XUQvJRtO%2Fh%2BfKjIkZMT%2Byzfu5UjmmdrVZK0WgBS%2FmF8Ikm%2Bb3bWMdPTCIyai%2BBjqkAfpGAPB3kJVY2EuLNFtLu6TzTbTT2A3ejzX7LYpEuw7VKl9PjCkE03TkMGIvcnFnGk7ZtbrIKI6QGv0IUkdrm1pFTb%2BzYYTjSPXIw42Srjp9wZAIUsQGbGzXDDJGH30jZHwuB5xUl%2BycPsgJdNeB4%2B3b9V4XGJ8%2BJMwtHkj7Dda5juaXocPh3neEe1P3MQwCk2SFFC3ouGanHUr59QUPNErjpUG%2F&X-Amz-Signature=62cf7a8f92838842b69527508848de74b7974fac713003bc0f4cac639cd722f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLONWBP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TiJTT406PbC1NcRZk5NCVHwPBS%2BBmK0K5%2FbKqDkcdgIhAPylLkEbbW1DsdVI6uWrPBDYdTE5rBGn1MF5Pcfk911HKv8DCDgQABoMNjM3NDIzMTgzODA1IgzsK%2BTOSKb8BcLTE8cq3AMy7Mic6biLk7TbLdQqCzibeZ3cpqpRLIpyIeojqZaSBvbF0vwIi00S0y7d2SKJd%2Bow3Wupj6JxlGeJOO9965O%2FJuV0%2B7kd6aMYrOgzo7Wd0574Ivoh%2Fg9yOwP9L7PzYv4fgIv2lC%2Bk5bBaMolcIQ4tQekyRSdvIRC8UU0FUK%2F4UNvCj9Cj96rrw4IpUoDvyG0zMEL8aOXxPL57ZaKk4RWk7TbknLCxRpHs5NzsE2LnwTQyQxi722PID0UrWejn5%2BPHO9j1K52v06wGIL2Z2Z%2Bzd%2Bazu0LUV%2FdPPjIw0IB7QwOZDHrv53peFNfhPPkYkAM9oC%2Fko6MBimtkXj8AB5ks%2BnKud1bez9IJZnXtbkLAJdMfp2nN3GhLpu3BBhghakn4HLjz2yVD9th%2BEdhqVRj14OmtxWc%2BDe9fOdJ0TA9BKJdPrcDLje6ZXbpwQwtbSSraV24I7kZqdgUjAO%2F4KC8vqjDvpfnXxAC%2FUuz0tpwRG6zPxiLa1wln5U3AzU8NiC%2FOqWRd0b2HdG1PzvKqYrWpedjbiLg2DYEHK6jNCB5YZhCYcZE0TIivaJQuaguq2WH4gL4XUQvJRtO%2Fh%2BfKjIkZMT%2Byzfu5UjmmdrVZK0WgBS%2FmF8Ikm%2Bb3bWMdPTCIyai%2BBjqkAfpGAPB3kJVY2EuLNFtLu6TzTbTT2A3ejzX7LYpEuw7VKl9PjCkE03TkMGIvcnFnGk7ZtbrIKI6QGv0IUkdrm1pFTb%2BzYYTjSPXIw42Srjp9wZAIUsQGbGzXDDJGH30jZHwuB5xUl%2BycPsgJdNeB4%2B3b9V4XGJ8%2BJMwtHkj7Dda5juaXocPh3neEe1P3MQwCk2SFFC3ouGanHUr59QUPNErjpUG%2F&X-Amz-Signature=23167882f3b7e5abfc589a6260b106fbcb14a418043832f708b9d8b9bf9573d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLONWBP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TiJTT406PbC1NcRZk5NCVHwPBS%2BBmK0K5%2FbKqDkcdgIhAPylLkEbbW1DsdVI6uWrPBDYdTE5rBGn1MF5Pcfk911HKv8DCDgQABoMNjM3NDIzMTgzODA1IgzsK%2BTOSKb8BcLTE8cq3AMy7Mic6biLk7TbLdQqCzibeZ3cpqpRLIpyIeojqZaSBvbF0vwIi00S0y7d2SKJd%2Bow3Wupj6JxlGeJOO9965O%2FJuV0%2B7kd6aMYrOgzo7Wd0574Ivoh%2Fg9yOwP9L7PzYv4fgIv2lC%2Bk5bBaMolcIQ4tQekyRSdvIRC8UU0FUK%2F4UNvCj9Cj96rrw4IpUoDvyG0zMEL8aOXxPL57ZaKk4RWk7TbknLCxRpHs5NzsE2LnwTQyQxi722PID0UrWejn5%2BPHO9j1K52v06wGIL2Z2Z%2Bzd%2Bazu0LUV%2FdPPjIw0IB7QwOZDHrv53peFNfhPPkYkAM9oC%2Fko6MBimtkXj8AB5ks%2BnKud1bez9IJZnXtbkLAJdMfp2nN3GhLpu3BBhghakn4HLjz2yVD9th%2BEdhqVRj14OmtxWc%2BDe9fOdJ0TA9BKJdPrcDLje6ZXbpwQwtbSSraV24I7kZqdgUjAO%2F4KC8vqjDvpfnXxAC%2FUuz0tpwRG6zPxiLa1wln5U3AzU8NiC%2FOqWRd0b2HdG1PzvKqYrWpedjbiLg2DYEHK6jNCB5YZhCYcZE0TIivaJQuaguq2WH4gL4XUQvJRtO%2Fh%2BfKjIkZMT%2Byzfu5UjmmdrVZK0WgBS%2FmF8Ikm%2Bb3bWMdPTCIyai%2BBjqkAfpGAPB3kJVY2EuLNFtLu6TzTbTT2A3ejzX7LYpEuw7VKl9PjCkE03TkMGIvcnFnGk7ZtbrIKI6QGv0IUkdrm1pFTb%2BzYYTjSPXIw42Srjp9wZAIUsQGbGzXDDJGH30jZHwuB5xUl%2BycPsgJdNeB4%2B3b9V4XGJ8%2BJMwtHkj7Dda5juaXocPh3neEe1P3MQwCk2SFFC3ouGanHUr59QUPNErjpUG%2F&X-Amz-Signature=8cd7daf9984d9ac68513ecb745acb6a9da92c3ca84b0998bba77cb63cff38fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLONWBP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TiJTT406PbC1NcRZk5NCVHwPBS%2BBmK0K5%2FbKqDkcdgIhAPylLkEbbW1DsdVI6uWrPBDYdTE5rBGn1MF5Pcfk911HKv8DCDgQABoMNjM3NDIzMTgzODA1IgzsK%2BTOSKb8BcLTE8cq3AMy7Mic6biLk7TbLdQqCzibeZ3cpqpRLIpyIeojqZaSBvbF0vwIi00S0y7d2SKJd%2Bow3Wupj6JxlGeJOO9965O%2FJuV0%2B7kd6aMYrOgzo7Wd0574Ivoh%2Fg9yOwP9L7PzYv4fgIv2lC%2Bk5bBaMolcIQ4tQekyRSdvIRC8UU0FUK%2F4UNvCj9Cj96rrw4IpUoDvyG0zMEL8aOXxPL57ZaKk4RWk7TbknLCxRpHs5NzsE2LnwTQyQxi722PID0UrWejn5%2BPHO9j1K52v06wGIL2Z2Z%2Bzd%2Bazu0LUV%2FdPPjIw0IB7QwOZDHrv53peFNfhPPkYkAM9oC%2Fko6MBimtkXj8AB5ks%2BnKud1bez9IJZnXtbkLAJdMfp2nN3GhLpu3BBhghakn4HLjz2yVD9th%2BEdhqVRj14OmtxWc%2BDe9fOdJ0TA9BKJdPrcDLje6ZXbpwQwtbSSraV24I7kZqdgUjAO%2F4KC8vqjDvpfnXxAC%2FUuz0tpwRG6zPxiLa1wln5U3AzU8NiC%2FOqWRd0b2HdG1PzvKqYrWpedjbiLg2DYEHK6jNCB5YZhCYcZE0TIivaJQuaguq2WH4gL4XUQvJRtO%2Fh%2BfKjIkZMT%2Byzfu5UjmmdrVZK0WgBS%2FmF8Ikm%2Bb3bWMdPTCIyai%2BBjqkAfpGAPB3kJVY2EuLNFtLu6TzTbTT2A3ejzX7LYpEuw7VKl9PjCkE03TkMGIvcnFnGk7ZtbrIKI6QGv0IUkdrm1pFTb%2BzYYTjSPXIw42Srjp9wZAIUsQGbGzXDDJGH30jZHwuB5xUl%2BycPsgJdNeB4%2B3b9V4XGJ8%2BJMwtHkj7Dda5juaXocPh3neEe1P3MQwCk2SFFC3ouGanHUr59QUPNErjpUG%2F&X-Amz-Signature=be887c1234c5643ebf34ca5b7dc5e8abccfc9f79761c9d644eb633d98f9ccaad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLONWBP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TiJTT406PbC1NcRZk5NCVHwPBS%2BBmK0K5%2FbKqDkcdgIhAPylLkEbbW1DsdVI6uWrPBDYdTE5rBGn1MF5Pcfk911HKv8DCDgQABoMNjM3NDIzMTgzODA1IgzsK%2BTOSKb8BcLTE8cq3AMy7Mic6biLk7TbLdQqCzibeZ3cpqpRLIpyIeojqZaSBvbF0vwIi00S0y7d2SKJd%2Bow3Wupj6JxlGeJOO9965O%2FJuV0%2B7kd6aMYrOgzo7Wd0574Ivoh%2Fg9yOwP9L7PzYv4fgIv2lC%2Bk5bBaMolcIQ4tQekyRSdvIRC8UU0FUK%2F4UNvCj9Cj96rrw4IpUoDvyG0zMEL8aOXxPL57ZaKk4RWk7TbknLCxRpHs5NzsE2LnwTQyQxi722PID0UrWejn5%2BPHO9j1K52v06wGIL2Z2Z%2Bzd%2Bazu0LUV%2FdPPjIw0IB7QwOZDHrv53peFNfhPPkYkAM9oC%2Fko6MBimtkXj8AB5ks%2BnKud1bez9IJZnXtbkLAJdMfp2nN3GhLpu3BBhghakn4HLjz2yVD9th%2BEdhqVRj14OmtxWc%2BDe9fOdJ0TA9BKJdPrcDLje6ZXbpwQwtbSSraV24I7kZqdgUjAO%2F4KC8vqjDvpfnXxAC%2FUuz0tpwRG6zPxiLa1wln5U3AzU8NiC%2FOqWRd0b2HdG1PzvKqYrWpedjbiLg2DYEHK6jNCB5YZhCYcZE0TIivaJQuaguq2WH4gL4XUQvJRtO%2Fh%2BfKjIkZMT%2Byzfu5UjmmdrVZK0WgBS%2FmF8Ikm%2Bb3bWMdPTCIyai%2BBjqkAfpGAPB3kJVY2EuLNFtLu6TzTbTT2A3ejzX7LYpEuw7VKl9PjCkE03TkMGIvcnFnGk7ZtbrIKI6QGv0IUkdrm1pFTb%2BzYYTjSPXIw42Srjp9wZAIUsQGbGzXDDJGH30jZHwuB5xUl%2BycPsgJdNeB4%2B3b9V4XGJ8%2BJMwtHkj7Dda5juaXocPh3neEe1P3MQwCk2SFFC3ouGanHUr59QUPNErjpUG%2F&X-Amz-Signature=1c55bc698b9766c6f73df0880f9896ac562d6b0741123cd12168fca152369e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFLONWBP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9TiJTT406PbC1NcRZk5NCVHwPBS%2BBmK0K5%2FbKqDkcdgIhAPylLkEbbW1DsdVI6uWrPBDYdTE5rBGn1MF5Pcfk911HKv8DCDgQABoMNjM3NDIzMTgzODA1IgzsK%2BTOSKb8BcLTE8cq3AMy7Mic6biLk7TbLdQqCzibeZ3cpqpRLIpyIeojqZaSBvbF0vwIi00S0y7d2SKJd%2Bow3Wupj6JxlGeJOO9965O%2FJuV0%2B7kd6aMYrOgzo7Wd0574Ivoh%2Fg9yOwP9L7PzYv4fgIv2lC%2Bk5bBaMolcIQ4tQekyRSdvIRC8UU0FUK%2F4UNvCj9Cj96rrw4IpUoDvyG0zMEL8aOXxPL57ZaKk4RWk7TbknLCxRpHs5NzsE2LnwTQyQxi722PID0UrWejn5%2BPHO9j1K52v06wGIL2Z2Z%2Bzd%2Bazu0LUV%2FdPPjIw0IB7QwOZDHrv53peFNfhPPkYkAM9oC%2Fko6MBimtkXj8AB5ks%2BnKud1bez9IJZnXtbkLAJdMfp2nN3GhLpu3BBhghakn4HLjz2yVD9th%2BEdhqVRj14OmtxWc%2BDe9fOdJ0TA9BKJdPrcDLje6ZXbpwQwtbSSraV24I7kZqdgUjAO%2F4KC8vqjDvpfnXxAC%2FUuz0tpwRG6zPxiLa1wln5U3AzU8NiC%2FOqWRd0b2HdG1PzvKqYrWpedjbiLg2DYEHK6jNCB5YZhCYcZE0TIivaJQuaguq2WH4gL4XUQvJRtO%2Fh%2BfKjIkZMT%2Byzfu5UjmmdrVZK0WgBS%2FmF8Ikm%2Bb3bWMdPTCIyai%2BBjqkAfpGAPB3kJVY2EuLNFtLu6TzTbTT2A3ejzX7LYpEuw7VKl9PjCkE03TkMGIvcnFnGk7ZtbrIKI6QGv0IUkdrm1pFTb%2BzYYTjSPXIw42Srjp9wZAIUsQGbGzXDDJGH30jZHwuB5xUl%2BycPsgJdNeB4%2B3b9V4XGJ8%2BJMwtHkj7Dda5juaXocPh3neEe1P3MQwCk2SFFC3ouGanHUr59QUPNErjpUG%2F&X-Amz-Signature=8f301788d6db7691a2f0ded7167b26f858a8355017d3471598414fd0c6662ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
