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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKN4ZXU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGLXIN4Pg4xZaH56%2Bd6qd503NOjgaQhCcGnUzggOwRFmAiBqsgwB8x9gtfjHBG0T8649QRMyaASb7X9PTxQ6P%2FpOGCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9GjMsp%2B5vs%2FEIeBKtwDqWs%2B1VB9scosFG4URqgRxqLdqwimAR3tE7HfS8PMFMAWLLeckDbTb4xJRRvji1yKsk4bysqmzRPAXNp7lfAxNAc5oOzxY%2BrfXwbjzkqZLF6KrShXsHtOKEMhltAsBIJiGQZyN1%2FDG9qf6KwSsjivZ%2FYKDU5Pk8pApc3C3IrZNjC%2BoxIE4L7yu%2BBTi38TtQngtzdPRB6vtOf6JZijLTGBwVLojezQIPXqlIeUKGEFlaZ9biwA5IK2O4tbnPctQnj4ddQR3f82s0TsDaLzJ3oghJeQoM5PjIDFSsOwnwava%2Fw6AbJ2ler7B5Onq0DM2LyBUAhy0IhbhqdA82c675RirzxgJEYmp%2FMlNQcBPJkagoBRl6yyyeO5hd0%2BvYzF%2FEnKUORgD9dlBL3dx4QH%2FtIjvEL3DhgRRdXE7RIh0Q705Au81rO3pDBJSsyQKv6kJVsNAahXg%2B5UTo7h1pth6%2ByGuT3OjtV8W6O3Kx5vgnT1iFmWpsOIxa0u1sH208MdR8s3ks0B01Z7XAlLtE8WU1I6Iu6qb9SAuzTWjfARv3b3nboFHAP4ZxSxrneUFiXoGXeMSn6oszomSRwdUm3%2BbazMyJ2MVflQQWtLx5N7Jw2%2BPTs0s2RUSL%2BvVTj%2Fz7AwvqbPvQY6pgEHGUWhXRM1yZb9%2BCoZw2GGzEAZRY%2F2wYLCNpkNDi0QfOaCM6IqPrT20nUgRF7dJnZSjRb9K7hjl5xZWaM0aJvgdlNu%2FQxTgTYrGTUciNInOmCgJ2%2FwHwIQVmcNwsOzxpoUiWct7Ocql2qMIyJCL25287Y55ez0DPeqi607EBabiXc3VvEUSOWaMjiOQ4ukaojehdJzKMAy0prhEfcgieDFDpQwSHAa&X-Amz-Signature=7fbf9d01db825f86013e42370b1bb4e3d14f75d89f2b936311a2a5eeb87c2a95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKN4ZXU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGLXIN4Pg4xZaH56%2Bd6qd503NOjgaQhCcGnUzggOwRFmAiBqsgwB8x9gtfjHBG0T8649QRMyaASb7X9PTxQ6P%2FpOGCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9GjMsp%2B5vs%2FEIeBKtwDqWs%2B1VB9scosFG4URqgRxqLdqwimAR3tE7HfS8PMFMAWLLeckDbTb4xJRRvji1yKsk4bysqmzRPAXNp7lfAxNAc5oOzxY%2BrfXwbjzkqZLF6KrShXsHtOKEMhltAsBIJiGQZyN1%2FDG9qf6KwSsjivZ%2FYKDU5Pk8pApc3C3IrZNjC%2BoxIE4L7yu%2BBTi38TtQngtzdPRB6vtOf6JZijLTGBwVLojezQIPXqlIeUKGEFlaZ9biwA5IK2O4tbnPctQnj4ddQR3f82s0TsDaLzJ3oghJeQoM5PjIDFSsOwnwava%2Fw6AbJ2ler7B5Onq0DM2LyBUAhy0IhbhqdA82c675RirzxgJEYmp%2FMlNQcBPJkagoBRl6yyyeO5hd0%2BvYzF%2FEnKUORgD9dlBL3dx4QH%2FtIjvEL3DhgRRdXE7RIh0Q705Au81rO3pDBJSsyQKv6kJVsNAahXg%2B5UTo7h1pth6%2ByGuT3OjtV8W6O3Kx5vgnT1iFmWpsOIxa0u1sH208MdR8s3ks0B01Z7XAlLtE8WU1I6Iu6qb9SAuzTWjfARv3b3nboFHAP4ZxSxrneUFiXoGXeMSn6oszomSRwdUm3%2BbazMyJ2MVflQQWtLx5N7Jw2%2BPTs0s2RUSL%2BvVTj%2Fz7AwvqbPvQY6pgEHGUWhXRM1yZb9%2BCoZw2GGzEAZRY%2F2wYLCNpkNDi0QfOaCM6IqPrT20nUgRF7dJnZSjRb9K7hjl5xZWaM0aJvgdlNu%2FQxTgTYrGTUciNInOmCgJ2%2FwHwIQVmcNwsOzxpoUiWct7Ocql2qMIyJCL25287Y55ez0DPeqi607EBabiXc3VvEUSOWaMjiOQ4ukaojehdJzKMAy0prhEfcgieDFDpQwSHAa&X-Amz-Signature=9211464ba3a1d6f41e026f47e51b874e3957cdc38142d128087628c12252f175&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKN4ZXU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGLXIN4Pg4xZaH56%2Bd6qd503NOjgaQhCcGnUzggOwRFmAiBqsgwB8x9gtfjHBG0T8649QRMyaASb7X9PTxQ6P%2FpOGCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9GjMsp%2B5vs%2FEIeBKtwDqWs%2B1VB9scosFG4URqgRxqLdqwimAR3tE7HfS8PMFMAWLLeckDbTb4xJRRvji1yKsk4bysqmzRPAXNp7lfAxNAc5oOzxY%2BrfXwbjzkqZLF6KrShXsHtOKEMhltAsBIJiGQZyN1%2FDG9qf6KwSsjivZ%2FYKDU5Pk8pApc3C3IrZNjC%2BoxIE4L7yu%2BBTi38TtQngtzdPRB6vtOf6JZijLTGBwVLojezQIPXqlIeUKGEFlaZ9biwA5IK2O4tbnPctQnj4ddQR3f82s0TsDaLzJ3oghJeQoM5PjIDFSsOwnwava%2Fw6AbJ2ler7B5Onq0DM2LyBUAhy0IhbhqdA82c675RirzxgJEYmp%2FMlNQcBPJkagoBRl6yyyeO5hd0%2BvYzF%2FEnKUORgD9dlBL3dx4QH%2FtIjvEL3DhgRRdXE7RIh0Q705Au81rO3pDBJSsyQKv6kJVsNAahXg%2B5UTo7h1pth6%2ByGuT3OjtV8W6O3Kx5vgnT1iFmWpsOIxa0u1sH208MdR8s3ks0B01Z7XAlLtE8WU1I6Iu6qb9SAuzTWjfARv3b3nboFHAP4ZxSxrneUFiXoGXeMSn6oszomSRwdUm3%2BbazMyJ2MVflQQWtLx5N7Jw2%2BPTs0s2RUSL%2BvVTj%2Fz7AwvqbPvQY6pgEHGUWhXRM1yZb9%2BCoZw2GGzEAZRY%2F2wYLCNpkNDi0QfOaCM6IqPrT20nUgRF7dJnZSjRb9K7hjl5xZWaM0aJvgdlNu%2FQxTgTYrGTUciNInOmCgJ2%2FwHwIQVmcNwsOzxpoUiWct7Ocql2qMIyJCL25287Y55ez0DPeqi607EBabiXc3VvEUSOWaMjiOQ4ukaojehdJzKMAy0prhEfcgieDFDpQwSHAa&X-Amz-Signature=63ac8bb97a34bd90b404157505c0d3cbd3d0925f6ecec900d76b225cbaef3e68&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKN4ZXU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGLXIN4Pg4xZaH56%2Bd6qd503NOjgaQhCcGnUzggOwRFmAiBqsgwB8x9gtfjHBG0T8649QRMyaASb7X9PTxQ6P%2FpOGCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9GjMsp%2B5vs%2FEIeBKtwDqWs%2B1VB9scosFG4URqgRxqLdqwimAR3tE7HfS8PMFMAWLLeckDbTb4xJRRvji1yKsk4bysqmzRPAXNp7lfAxNAc5oOzxY%2BrfXwbjzkqZLF6KrShXsHtOKEMhltAsBIJiGQZyN1%2FDG9qf6KwSsjivZ%2FYKDU5Pk8pApc3C3IrZNjC%2BoxIE4L7yu%2BBTi38TtQngtzdPRB6vtOf6JZijLTGBwVLojezQIPXqlIeUKGEFlaZ9biwA5IK2O4tbnPctQnj4ddQR3f82s0TsDaLzJ3oghJeQoM5PjIDFSsOwnwava%2Fw6AbJ2ler7B5Onq0DM2LyBUAhy0IhbhqdA82c675RirzxgJEYmp%2FMlNQcBPJkagoBRl6yyyeO5hd0%2BvYzF%2FEnKUORgD9dlBL3dx4QH%2FtIjvEL3DhgRRdXE7RIh0Q705Au81rO3pDBJSsyQKv6kJVsNAahXg%2B5UTo7h1pth6%2ByGuT3OjtV8W6O3Kx5vgnT1iFmWpsOIxa0u1sH208MdR8s3ks0B01Z7XAlLtE8WU1I6Iu6qb9SAuzTWjfARv3b3nboFHAP4ZxSxrneUFiXoGXeMSn6oszomSRwdUm3%2BbazMyJ2MVflQQWtLx5N7Jw2%2BPTs0s2RUSL%2BvVTj%2Fz7AwvqbPvQY6pgEHGUWhXRM1yZb9%2BCoZw2GGzEAZRY%2F2wYLCNpkNDi0QfOaCM6IqPrT20nUgRF7dJnZSjRb9K7hjl5xZWaM0aJvgdlNu%2FQxTgTYrGTUciNInOmCgJ2%2FwHwIQVmcNwsOzxpoUiWct7Ocql2qMIyJCL25287Y55ez0DPeqi607EBabiXc3VvEUSOWaMjiOQ4ukaojehdJzKMAy0prhEfcgieDFDpQwSHAa&X-Amz-Signature=500c3f86563bd746052ba6edfb1d1a0efc8f7173404262deebb67ed687464870&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKN4ZXU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGLXIN4Pg4xZaH56%2Bd6qd503NOjgaQhCcGnUzggOwRFmAiBqsgwB8x9gtfjHBG0T8649QRMyaASb7X9PTxQ6P%2FpOGCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9GjMsp%2B5vs%2FEIeBKtwDqWs%2B1VB9scosFG4URqgRxqLdqwimAR3tE7HfS8PMFMAWLLeckDbTb4xJRRvji1yKsk4bysqmzRPAXNp7lfAxNAc5oOzxY%2BrfXwbjzkqZLF6KrShXsHtOKEMhltAsBIJiGQZyN1%2FDG9qf6KwSsjivZ%2FYKDU5Pk8pApc3C3IrZNjC%2BoxIE4L7yu%2BBTi38TtQngtzdPRB6vtOf6JZijLTGBwVLojezQIPXqlIeUKGEFlaZ9biwA5IK2O4tbnPctQnj4ddQR3f82s0TsDaLzJ3oghJeQoM5PjIDFSsOwnwava%2Fw6AbJ2ler7B5Onq0DM2LyBUAhy0IhbhqdA82c675RirzxgJEYmp%2FMlNQcBPJkagoBRl6yyyeO5hd0%2BvYzF%2FEnKUORgD9dlBL3dx4QH%2FtIjvEL3DhgRRdXE7RIh0Q705Au81rO3pDBJSsyQKv6kJVsNAahXg%2B5UTo7h1pth6%2ByGuT3OjtV8W6O3Kx5vgnT1iFmWpsOIxa0u1sH208MdR8s3ks0B01Z7XAlLtE8WU1I6Iu6qb9SAuzTWjfARv3b3nboFHAP4ZxSxrneUFiXoGXeMSn6oszomSRwdUm3%2BbazMyJ2MVflQQWtLx5N7Jw2%2BPTs0s2RUSL%2BvVTj%2Fz7AwvqbPvQY6pgEHGUWhXRM1yZb9%2BCoZw2GGzEAZRY%2F2wYLCNpkNDi0QfOaCM6IqPrT20nUgRF7dJnZSjRb9K7hjl5xZWaM0aJvgdlNu%2FQxTgTYrGTUciNInOmCgJ2%2FwHwIQVmcNwsOzxpoUiWct7Ocql2qMIyJCL25287Y55ez0DPeqi607EBabiXc3VvEUSOWaMjiOQ4ukaojehdJzKMAy0prhEfcgieDFDpQwSHAa&X-Amz-Signature=c80b3f3a025eb0548f217a323ae6aafead6a8c94da9a99c44811af149a96ba00&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKN4ZXU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGLXIN4Pg4xZaH56%2Bd6qd503NOjgaQhCcGnUzggOwRFmAiBqsgwB8x9gtfjHBG0T8649QRMyaASb7X9PTxQ6P%2FpOGCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9GjMsp%2B5vs%2FEIeBKtwDqWs%2B1VB9scosFG4URqgRxqLdqwimAR3tE7HfS8PMFMAWLLeckDbTb4xJRRvji1yKsk4bysqmzRPAXNp7lfAxNAc5oOzxY%2BrfXwbjzkqZLF6KrShXsHtOKEMhltAsBIJiGQZyN1%2FDG9qf6KwSsjivZ%2FYKDU5Pk8pApc3C3IrZNjC%2BoxIE4L7yu%2BBTi38TtQngtzdPRB6vtOf6JZijLTGBwVLojezQIPXqlIeUKGEFlaZ9biwA5IK2O4tbnPctQnj4ddQR3f82s0TsDaLzJ3oghJeQoM5PjIDFSsOwnwava%2Fw6AbJ2ler7B5Onq0DM2LyBUAhy0IhbhqdA82c675RirzxgJEYmp%2FMlNQcBPJkagoBRl6yyyeO5hd0%2BvYzF%2FEnKUORgD9dlBL3dx4QH%2FtIjvEL3DhgRRdXE7RIh0Q705Au81rO3pDBJSsyQKv6kJVsNAahXg%2B5UTo7h1pth6%2ByGuT3OjtV8W6O3Kx5vgnT1iFmWpsOIxa0u1sH208MdR8s3ks0B01Z7XAlLtE8WU1I6Iu6qb9SAuzTWjfARv3b3nboFHAP4ZxSxrneUFiXoGXeMSn6oszomSRwdUm3%2BbazMyJ2MVflQQWtLx5N7Jw2%2BPTs0s2RUSL%2BvVTj%2Fz7AwvqbPvQY6pgEHGUWhXRM1yZb9%2BCoZw2GGzEAZRY%2F2wYLCNpkNDi0QfOaCM6IqPrT20nUgRF7dJnZSjRb9K7hjl5xZWaM0aJvgdlNu%2FQxTgTYrGTUciNInOmCgJ2%2FwHwIQVmcNwsOzxpoUiWct7Ocql2qMIyJCL25287Y55ez0DPeqi607EBabiXc3VvEUSOWaMjiOQ4ukaojehdJzKMAy0prhEfcgieDFDpQwSHAa&X-Amz-Signature=981ef842d89f8dc3baaff9354e816fcf6c006c0b7be81f61e94c1f0d4126e340&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKN4ZXU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGLXIN4Pg4xZaH56%2Bd6qd503NOjgaQhCcGnUzggOwRFmAiBqsgwB8x9gtfjHBG0T8649QRMyaASb7X9PTxQ6P%2FpOGCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9GjMsp%2B5vs%2FEIeBKtwDqWs%2B1VB9scosFG4URqgRxqLdqwimAR3tE7HfS8PMFMAWLLeckDbTb4xJRRvji1yKsk4bysqmzRPAXNp7lfAxNAc5oOzxY%2BrfXwbjzkqZLF6KrShXsHtOKEMhltAsBIJiGQZyN1%2FDG9qf6KwSsjivZ%2FYKDU5Pk8pApc3C3IrZNjC%2BoxIE4L7yu%2BBTi38TtQngtzdPRB6vtOf6JZijLTGBwVLojezQIPXqlIeUKGEFlaZ9biwA5IK2O4tbnPctQnj4ddQR3f82s0TsDaLzJ3oghJeQoM5PjIDFSsOwnwava%2Fw6AbJ2ler7B5Onq0DM2LyBUAhy0IhbhqdA82c675RirzxgJEYmp%2FMlNQcBPJkagoBRl6yyyeO5hd0%2BvYzF%2FEnKUORgD9dlBL3dx4QH%2FtIjvEL3DhgRRdXE7RIh0Q705Au81rO3pDBJSsyQKv6kJVsNAahXg%2B5UTo7h1pth6%2ByGuT3OjtV8W6O3Kx5vgnT1iFmWpsOIxa0u1sH208MdR8s3ks0B01Z7XAlLtE8WU1I6Iu6qb9SAuzTWjfARv3b3nboFHAP4ZxSxrneUFiXoGXeMSn6oszomSRwdUm3%2BbazMyJ2MVflQQWtLx5N7Jw2%2BPTs0s2RUSL%2BvVTj%2Fz7AwvqbPvQY6pgEHGUWhXRM1yZb9%2BCoZw2GGzEAZRY%2F2wYLCNpkNDi0QfOaCM6IqPrT20nUgRF7dJnZSjRb9K7hjl5xZWaM0aJvgdlNu%2FQxTgTYrGTUciNInOmCgJ2%2FwHwIQVmcNwsOzxpoUiWct7Ocql2qMIyJCL25287Y55ez0DPeqi607EBabiXc3VvEUSOWaMjiOQ4ukaojehdJzKMAy0prhEfcgieDFDpQwSHAa&X-Amz-Signature=852608bad7b765277baab6fae5b46b9412e59c32b4c289a97fe759e68c08892a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
