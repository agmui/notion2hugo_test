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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPJYXI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTdUzIkLE0q%2BmUJvGHi83OXu9VFcW7nMru8wDcyqfsQIgBYDtY2zgFgIOKFBhxW2TnXQ2JcnzwiuBUzVxd6KVjkgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfaMBKdXduAwbUGeSrcA5kEVIniBOLFKkjuREtqFq0tzGDwCw4FfqvPHaB9%2FEbrknPRa7g8XpSyL1UM6sBzwZJsU%2B4HoSd0EXPOf5fi9Vn5tt%2BFSBMdDK8Se5VU28%2FaKpTZnrba98uecxXWLrSJ61BjB9O2kucH2FEe588oQZ7TXU5kK2a7wh46vTS55lEVs9o1QsBMcGg%2BBxUOTn%2Fi1UlIjX%2FE0ykTDF0LuKL%2F6JnSw1X2yirfOcBRCPnYh%2BSDmRV9op%2Bsh2hMX3c0qenFv4xpW8TuBsfQcjF5%2Fi1RfVYH%2BPoaUiSsHw%2BONxoyN9bS7XO%2BWQMzQlnrph1VVelC6p%2FMxbgMx9nIOfS5Jxwhere%2B0oiBkyqml%2Bd%2BWWWaAnC2efaEstjVzuzT2%2F%2B6AHa8AHjjMUIjjHqzH%2Fm18FfViy6tMKuhkB7tHOb5FTUN9W3DMsDGQoasDki2F0xdxpIdzaPQO2jGmjBlYaig6sC1SvGHF5AafeGwPZNL770dRruJxtX%2FRtZbV6xCIjs%2F9KISqG5420o4vOM%2Fk6CCs4KReqhG%2FHfekrvzkP1f0ccGI4RxFpIQMgNHkzUMyZXqI9FhXyu2TsmSX0wgFB8%2BbnzAP6zvYHFBcOhb3OWFCW%2FeLyn1WRhswJX8Hx4k%2BvXmMI7VzL4GOqUBci%2FyKM9uPvMzHkEdxTsA%2FKPxuU5jDeMrei0jIYF7oI8FURMLjYU6aIy%2Bj3rrhU52vWrVS%2BIn%2F4PeOEdp8BreKYzjcHhG1%2FVq757Sj%2FjrfVVjG9ZttLL29gvH890lx5XtgyC0z79ItUWiYzzgDwfB4Vik7auD7Aq%2BSa7Mf6k1ym6fVfVIqM4PUKAjLX3aXsNVKnjL7ZXeh5LbSNqXT3mHHezpp%2Beq&X-Amz-Signature=0c75997cc3ae0a0c31f8fec910e30ca431efbffcd0774aa6c5be6e67df752d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPJYXI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTdUzIkLE0q%2BmUJvGHi83OXu9VFcW7nMru8wDcyqfsQIgBYDtY2zgFgIOKFBhxW2TnXQ2JcnzwiuBUzVxd6KVjkgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfaMBKdXduAwbUGeSrcA5kEVIniBOLFKkjuREtqFq0tzGDwCw4FfqvPHaB9%2FEbrknPRa7g8XpSyL1UM6sBzwZJsU%2B4HoSd0EXPOf5fi9Vn5tt%2BFSBMdDK8Se5VU28%2FaKpTZnrba98uecxXWLrSJ61BjB9O2kucH2FEe588oQZ7TXU5kK2a7wh46vTS55lEVs9o1QsBMcGg%2BBxUOTn%2Fi1UlIjX%2FE0ykTDF0LuKL%2F6JnSw1X2yirfOcBRCPnYh%2BSDmRV9op%2Bsh2hMX3c0qenFv4xpW8TuBsfQcjF5%2Fi1RfVYH%2BPoaUiSsHw%2BONxoyN9bS7XO%2BWQMzQlnrph1VVelC6p%2FMxbgMx9nIOfS5Jxwhere%2B0oiBkyqml%2Bd%2BWWWaAnC2efaEstjVzuzT2%2F%2B6AHa8AHjjMUIjjHqzH%2Fm18FfViy6tMKuhkB7tHOb5FTUN9W3DMsDGQoasDki2F0xdxpIdzaPQO2jGmjBlYaig6sC1SvGHF5AafeGwPZNL770dRruJxtX%2FRtZbV6xCIjs%2F9KISqG5420o4vOM%2Fk6CCs4KReqhG%2FHfekrvzkP1f0ccGI4RxFpIQMgNHkzUMyZXqI9FhXyu2TsmSX0wgFB8%2BbnzAP6zvYHFBcOhb3OWFCW%2FeLyn1WRhswJX8Hx4k%2BvXmMI7VzL4GOqUBci%2FyKM9uPvMzHkEdxTsA%2FKPxuU5jDeMrei0jIYF7oI8FURMLjYU6aIy%2Bj3rrhU52vWrVS%2BIn%2F4PeOEdp8BreKYzjcHhG1%2FVq757Sj%2FjrfVVjG9ZttLL29gvH890lx5XtgyC0z79ItUWiYzzgDwfB4Vik7auD7Aq%2BSa7Mf6k1ym6fVfVIqM4PUKAjLX3aXsNVKnjL7ZXeh5LbSNqXT3mHHezpp%2Beq&X-Amz-Signature=131ee83dd2170f131964abaa5ae044f1594e83486a3029b8baafc43b307efca9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPJYXI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTdUzIkLE0q%2BmUJvGHi83OXu9VFcW7nMru8wDcyqfsQIgBYDtY2zgFgIOKFBhxW2TnXQ2JcnzwiuBUzVxd6KVjkgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfaMBKdXduAwbUGeSrcA5kEVIniBOLFKkjuREtqFq0tzGDwCw4FfqvPHaB9%2FEbrknPRa7g8XpSyL1UM6sBzwZJsU%2B4HoSd0EXPOf5fi9Vn5tt%2BFSBMdDK8Se5VU28%2FaKpTZnrba98uecxXWLrSJ61BjB9O2kucH2FEe588oQZ7TXU5kK2a7wh46vTS55lEVs9o1QsBMcGg%2BBxUOTn%2Fi1UlIjX%2FE0ykTDF0LuKL%2F6JnSw1X2yirfOcBRCPnYh%2BSDmRV9op%2Bsh2hMX3c0qenFv4xpW8TuBsfQcjF5%2Fi1RfVYH%2BPoaUiSsHw%2BONxoyN9bS7XO%2BWQMzQlnrph1VVelC6p%2FMxbgMx9nIOfS5Jxwhere%2B0oiBkyqml%2Bd%2BWWWaAnC2efaEstjVzuzT2%2F%2B6AHa8AHjjMUIjjHqzH%2Fm18FfViy6tMKuhkB7tHOb5FTUN9W3DMsDGQoasDki2F0xdxpIdzaPQO2jGmjBlYaig6sC1SvGHF5AafeGwPZNL770dRruJxtX%2FRtZbV6xCIjs%2F9KISqG5420o4vOM%2Fk6CCs4KReqhG%2FHfekrvzkP1f0ccGI4RxFpIQMgNHkzUMyZXqI9FhXyu2TsmSX0wgFB8%2BbnzAP6zvYHFBcOhb3OWFCW%2FeLyn1WRhswJX8Hx4k%2BvXmMI7VzL4GOqUBci%2FyKM9uPvMzHkEdxTsA%2FKPxuU5jDeMrei0jIYF7oI8FURMLjYU6aIy%2Bj3rrhU52vWrVS%2BIn%2F4PeOEdp8BreKYzjcHhG1%2FVq757Sj%2FjrfVVjG9ZttLL29gvH890lx5XtgyC0z79ItUWiYzzgDwfB4Vik7auD7Aq%2BSa7Mf6k1ym6fVfVIqM4PUKAjLX3aXsNVKnjL7ZXeh5LbSNqXT3mHHezpp%2Beq&X-Amz-Signature=3a621639f8d9ba57d24f0d68effa99f86f803c3a774656c2fe0736f3d9888ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPJYXI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTdUzIkLE0q%2BmUJvGHi83OXu9VFcW7nMru8wDcyqfsQIgBYDtY2zgFgIOKFBhxW2TnXQ2JcnzwiuBUzVxd6KVjkgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfaMBKdXduAwbUGeSrcA5kEVIniBOLFKkjuREtqFq0tzGDwCw4FfqvPHaB9%2FEbrknPRa7g8XpSyL1UM6sBzwZJsU%2B4HoSd0EXPOf5fi9Vn5tt%2BFSBMdDK8Se5VU28%2FaKpTZnrba98uecxXWLrSJ61BjB9O2kucH2FEe588oQZ7TXU5kK2a7wh46vTS55lEVs9o1QsBMcGg%2BBxUOTn%2Fi1UlIjX%2FE0ykTDF0LuKL%2F6JnSw1X2yirfOcBRCPnYh%2BSDmRV9op%2Bsh2hMX3c0qenFv4xpW8TuBsfQcjF5%2Fi1RfVYH%2BPoaUiSsHw%2BONxoyN9bS7XO%2BWQMzQlnrph1VVelC6p%2FMxbgMx9nIOfS5Jxwhere%2B0oiBkyqml%2Bd%2BWWWaAnC2efaEstjVzuzT2%2F%2B6AHa8AHjjMUIjjHqzH%2Fm18FfViy6tMKuhkB7tHOb5FTUN9W3DMsDGQoasDki2F0xdxpIdzaPQO2jGmjBlYaig6sC1SvGHF5AafeGwPZNL770dRruJxtX%2FRtZbV6xCIjs%2F9KISqG5420o4vOM%2Fk6CCs4KReqhG%2FHfekrvzkP1f0ccGI4RxFpIQMgNHkzUMyZXqI9FhXyu2TsmSX0wgFB8%2BbnzAP6zvYHFBcOhb3OWFCW%2FeLyn1WRhswJX8Hx4k%2BvXmMI7VzL4GOqUBci%2FyKM9uPvMzHkEdxTsA%2FKPxuU5jDeMrei0jIYF7oI8FURMLjYU6aIy%2Bj3rrhU52vWrVS%2BIn%2F4PeOEdp8BreKYzjcHhG1%2FVq757Sj%2FjrfVVjG9ZttLL29gvH890lx5XtgyC0z79ItUWiYzzgDwfB4Vik7auD7Aq%2BSa7Mf6k1ym6fVfVIqM4PUKAjLX3aXsNVKnjL7ZXeh5LbSNqXT3mHHezpp%2Beq&X-Amz-Signature=9204653b160d1466859ca1dc600d953f3a805039686a6b4d9e3c4c2a68e7e3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPJYXI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTdUzIkLE0q%2BmUJvGHi83OXu9VFcW7nMru8wDcyqfsQIgBYDtY2zgFgIOKFBhxW2TnXQ2JcnzwiuBUzVxd6KVjkgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfaMBKdXduAwbUGeSrcA5kEVIniBOLFKkjuREtqFq0tzGDwCw4FfqvPHaB9%2FEbrknPRa7g8XpSyL1UM6sBzwZJsU%2B4HoSd0EXPOf5fi9Vn5tt%2BFSBMdDK8Se5VU28%2FaKpTZnrba98uecxXWLrSJ61BjB9O2kucH2FEe588oQZ7TXU5kK2a7wh46vTS55lEVs9o1QsBMcGg%2BBxUOTn%2Fi1UlIjX%2FE0ykTDF0LuKL%2F6JnSw1X2yirfOcBRCPnYh%2BSDmRV9op%2Bsh2hMX3c0qenFv4xpW8TuBsfQcjF5%2Fi1RfVYH%2BPoaUiSsHw%2BONxoyN9bS7XO%2BWQMzQlnrph1VVelC6p%2FMxbgMx9nIOfS5Jxwhere%2B0oiBkyqml%2Bd%2BWWWaAnC2efaEstjVzuzT2%2F%2B6AHa8AHjjMUIjjHqzH%2Fm18FfViy6tMKuhkB7tHOb5FTUN9W3DMsDGQoasDki2F0xdxpIdzaPQO2jGmjBlYaig6sC1SvGHF5AafeGwPZNL770dRruJxtX%2FRtZbV6xCIjs%2F9KISqG5420o4vOM%2Fk6CCs4KReqhG%2FHfekrvzkP1f0ccGI4RxFpIQMgNHkzUMyZXqI9FhXyu2TsmSX0wgFB8%2BbnzAP6zvYHFBcOhb3OWFCW%2FeLyn1WRhswJX8Hx4k%2BvXmMI7VzL4GOqUBci%2FyKM9uPvMzHkEdxTsA%2FKPxuU5jDeMrei0jIYF7oI8FURMLjYU6aIy%2Bj3rrhU52vWrVS%2BIn%2F4PeOEdp8BreKYzjcHhG1%2FVq757Sj%2FjrfVVjG9ZttLL29gvH890lx5XtgyC0z79ItUWiYzzgDwfB4Vik7auD7Aq%2BSa7Mf6k1ym6fVfVIqM4PUKAjLX3aXsNVKnjL7ZXeh5LbSNqXT3mHHezpp%2Beq&X-Amz-Signature=ca52f52fe44e7f63dde080212373af9bb4476d9d922b2e9f87f012b3465ba3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPJYXI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTdUzIkLE0q%2BmUJvGHi83OXu9VFcW7nMru8wDcyqfsQIgBYDtY2zgFgIOKFBhxW2TnXQ2JcnzwiuBUzVxd6KVjkgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfaMBKdXduAwbUGeSrcA5kEVIniBOLFKkjuREtqFq0tzGDwCw4FfqvPHaB9%2FEbrknPRa7g8XpSyL1UM6sBzwZJsU%2B4HoSd0EXPOf5fi9Vn5tt%2BFSBMdDK8Se5VU28%2FaKpTZnrba98uecxXWLrSJ61BjB9O2kucH2FEe588oQZ7TXU5kK2a7wh46vTS55lEVs9o1QsBMcGg%2BBxUOTn%2Fi1UlIjX%2FE0ykTDF0LuKL%2F6JnSw1X2yirfOcBRCPnYh%2BSDmRV9op%2Bsh2hMX3c0qenFv4xpW8TuBsfQcjF5%2Fi1RfVYH%2BPoaUiSsHw%2BONxoyN9bS7XO%2BWQMzQlnrph1VVelC6p%2FMxbgMx9nIOfS5Jxwhere%2B0oiBkyqml%2Bd%2BWWWaAnC2efaEstjVzuzT2%2F%2B6AHa8AHjjMUIjjHqzH%2Fm18FfViy6tMKuhkB7tHOb5FTUN9W3DMsDGQoasDki2F0xdxpIdzaPQO2jGmjBlYaig6sC1SvGHF5AafeGwPZNL770dRruJxtX%2FRtZbV6xCIjs%2F9KISqG5420o4vOM%2Fk6CCs4KReqhG%2FHfekrvzkP1f0ccGI4RxFpIQMgNHkzUMyZXqI9FhXyu2TsmSX0wgFB8%2BbnzAP6zvYHFBcOhb3OWFCW%2FeLyn1WRhswJX8Hx4k%2BvXmMI7VzL4GOqUBci%2FyKM9uPvMzHkEdxTsA%2FKPxuU5jDeMrei0jIYF7oI8FURMLjYU6aIy%2Bj3rrhU52vWrVS%2BIn%2F4PeOEdp8BreKYzjcHhG1%2FVq757Sj%2FjrfVVjG9ZttLL29gvH890lx5XtgyC0z79ItUWiYzzgDwfB4Vik7auD7Aq%2BSa7Mf6k1ym6fVfVIqM4PUKAjLX3aXsNVKnjL7ZXeh5LbSNqXT3mHHezpp%2Beq&X-Amz-Signature=f0bc724dd0a9388c1a7385c08a7205732abf5d4c95de56a1e7dc09e403806a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXSPJYXI%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqTdUzIkLE0q%2BmUJvGHi83OXu9VFcW7nMru8wDcyqfsQIgBYDtY2zgFgIOKFBhxW2TnXQ2JcnzwiuBUzVxd6KVjkgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfaMBKdXduAwbUGeSrcA5kEVIniBOLFKkjuREtqFq0tzGDwCw4FfqvPHaB9%2FEbrknPRa7g8XpSyL1UM6sBzwZJsU%2B4HoSd0EXPOf5fi9Vn5tt%2BFSBMdDK8Se5VU28%2FaKpTZnrba98uecxXWLrSJ61BjB9O2kucH2FEe588oQZ7TXU5kK2a7wh46vTS55lEVs9o1QsBMcGg%2BBxUOTn%2Fi1UlIjX%2FE0ykTDF0LuKL%2F6JnSw1X2yirfOcBRCPnYh%2BSDmRV9op%2Bsh2hMX3c0qenFv4xpW8TuBsfQcjF5%2Fi1RfVYH%2BPoaUiSsHw%2BONxoyN9bS7XO%2BWQMzQlnrph1VVelC6p%2FMxbgMx9nIOfS5Jxwhere%2B0oiBkyqml%2Bd%2BWWWaAnC2efaEstjVzuzT2%2F%2B6AHa8AHjjMUIjjHqzH%2Fm18FfViy6tMKuhkB7tHOb5FTUN9W3DMsDGQoasDki2F0xdxpIdzaPQO2jGmjBlYaig6sC1SvGHF5AafeGwPZNL770dRruJxtX%2FRtZbV6xCIjs%2F9KISqG5420o4vOM%2Fk6CCs4KReqhG%2FHfekrvzkP1f0ccGI4RxFpIQMgNHkzUMyZXqI9FhXyu2TsmSX0wgFB8%2BbnzAP6zvYHFBcOhb3OWFCW%2FeLyn1WRhswJX8Hx4k%2BvXmMI7VzL4GOqUBci%2FyKM9uPvMzHkEdxTsA%2FKPxuU5jDeMrei0jIYF7oI8FURMLjYU6aIy%2Bj3rrhU52vWrVS%2BIn%2F4PeOEdp8BreKYzjcHhG1%2FVq757Sj%2FjrfVVjG9ZttLL29gvH890lx5XtgyC0z79ItUWiYzzgDwfB4Vik7auD7Aq%2BSa7Mf6k1ym6fVfVIqM4PUKAjLX3aXsNVKnjL7ZXeh5LbSNqXT3mHHezpp%2Beq&X-Amz-Signature=e5c46d03d2cbcd7ec6c05ca7d3d7e61d9cb00d875c1229ee00950acdf472dc71&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
