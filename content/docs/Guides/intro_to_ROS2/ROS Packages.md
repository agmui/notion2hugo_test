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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSN2ZBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRU0GsYGHZfDQL%2BGsWT%2FMuXDWwD%2FgquDux9m%2FK1nu1EAIgLaltyZutze5l1sl68FhDzZODp1Xay142PI1k01Wm2h8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKK1yLF3xhwvZc2%2F7ircA4KowtedVfO%2BA4656cVPgGlea5YdusrAS%2Bc%2FGAB2MF7473nI4oWsQzkeq7pmWa%2F%2BkwcppstYrg5NdTlVJAMqmySJF6U%2B9GMWQWfJhWiHs3ys4xtV81qxHnutgbiV9xcMn%2FfCP6ar4UjDfHKYOCYbbRWFGw7rzij0rhtVxoEsSdPuaA%2BMQZtzx5DD92JIoTahl4kJgWcK9Wx9iq440IBO%2BobhIqdDiaOCyBVffZiBYg%2B%2BeMWgBj9s%2BRZlRJKOVlKlkfNtfbjNUggGPf%2Fg%2Bk1QI7iipcv8EDjf6qs4q8vBipgWB7nhBBD6KErYRKa8oT%2Fr%2FGX2B5Yd1aY3MOWpT%2Bk0HWNXQDclti7XpSSo1rDLdz02e7FNzVZ3kX3kK6znutzEvp66Pa6%2BPUjQOdziuxpI2%2FbL1jObb%2FWkxJxSujNJ%2B%2FhoS73bIqE4Q9OoU0sttyewFZpjgUYA4tb5BC4KND5VkSs5ShXppeq3XWltH%2BBuBFtF9D00FTQd%2FlUbs5o7fmAeFLdOXqzY%2FyJfT4SLqVLZV9rdgCs8qHTXKw8bT6L8aEfDkM4XKVpreatzrGJ3DFVfBVRYjH3c1PI42%2Fu6H6CFqwnMOUACA40pZ1AgbL1hlhQKVV9Qs6ZNDQlwZfvKMNS%2Fm78GOqUB4BJosd%2B8YoPWmNGosznLEoHhGGochLaRUfACVJHtLXmjv1yE6cWbN%2BOJFOTjRR%2BVRqf6BVFkKj9tkISy0u2DvXX65lRjA%2FtkI1taPcWnJyKfsEkn5IVMwu7LA9fSShkfgyKvLM45eW2QXhz%2FANl7OX43QiYO0d59q1SrwgapfgLS26g0avD79H0%2BAo3CwTaDH2fTSJm%2FggUbR1h26vr5zVVK8o26&X-Amz-Signature=696f7d11f1edcdee0199b0db5babb868e3525837c59580c4c9d535b32f031829&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSN2ZBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRU0GsYGHZfDQL%2BGsWT%2FMuXDWwD%2FgquDux9m%2FK1nu1EAIgLaltyZutze5l1sl68FhDzZODp1Xay142PI1k01Wm2h8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKK1yLF3xhwvZc2%2F7ircA4KowtedVfO%2BA4656cVPgGlea5YdusrAS%2Bc%2FGAB2MF7473nI4oWsQzkeq7pmWa%2F%2BkwcppstYrg5NdTlVJAMqmySJF6U%2B9GMWQWfJhWiHs3ys4xtV81qxHnutgbiV9xcMn%2FfCP6ar4UjDfHKYOCYbbRWFGw7rzij0rhtVxoEsSdPuaA%2BMQZtzx5DD92JIoTahl4kJgWcK9Wx9iq440IBO%2BobhIqdDiaOCyBVffZiBYg%2B%2BeMWgBj9s%2BRZlRJKOVlKlkfNtfbjNUggGPf%2Fg%2Bk1QI7iipcv8EDjf6qs4q8vBipgWB7nhBBD6KErYRKa8oT%2Fr%2FGX2B5Yd1aY3MOWpT%2Bk0HWNXQDclti7XpSSo1rDLdz02e7FNzVZ3kX3kK6znutzEvp66Pa6%2BPUjQOdziuxpI2%2FbL1jObb%2FWkxJxSujNJ%2B%2FhoS73bIqE4Q9OoU0sttyewFZpjgUYA4tb5BC4KND5VkSs5ShXppeq3XWltH%2BBuBFtF9D00FTQd%2FlUbs5o7fmAeFLdOXqzY%2FyJfT4SLqVLZV9rdgCs8qHTXKw8bT6L8aEfDkM4XKVpreatzrGJ3DFVfBVRYjH3c1PI42%2Fu6H6CFqwnMOUACA40pZ1AgbL1hlhQKVV9Qs6ZNDQlwZfvKMNS%2Fm78GOqUB4BJosd%2B8YoPWmNGosznLEoHhGGochLaRUfACVJHtLXmjv1yE6cWbN%2BOJFOTjRR%2BVRqf6BVFkKj9tkISy0u2DvXX65lRjA%2FtkI1taPcWnJyKfsEkn5IVMwu7LA9fSShkfgyKvLM45eW2QXhz%2FANl7OX43QiYO0d59q1SrwgapfgLS26g0avD79H0%2BAo3CwTaDH2fTSJm%2FggUbR1h26vr5zVVK8o26&X-Amz-Signature=0bcd78851901bb73806d09355d61f37e62220a48f853817b070f5157f76f671f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSN2ZBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRU0GsYGHZfDQL%2BGsWT%2FMuXDWwD%2FgquDux9m%2FK1nu1EAIgLaltyZutze5l1sl68FhDzZODp1Xay142PI1k01Wm2h8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKK1yLF3xhwvZc2%2F7ircA4KowtedVfO%2BA4656cVPgGlea5YdusrAS%2Bc%2FGAB2MF7473nI4oWsQzkeq7pmWa%2F%2BkwcppstYrg5NdTlVJAMqmySJF6U%2B9GMWQWfJhWiHs3ys4xtV81qxHnutgbiV9xcMn%2FfCP6ar4UjDfHKYOCYbbRWFGw7rzij0rhtVxoEsSdPuaA%2BMQZtzx5DD92JIoTahl4kJgWcK9Wx9iq440IBO%2BobhIqdDiaOCyBVffZiBYg%2B%2BeMWgBj9s%2BRZlRJKOVlKlkfNtfbjNUggGPf%2Fg%2Bk1QI7iipcv8EDjf6qs4q8vBipgWB7nhBBD6KErYRKa8oT%2Fr%2FGX2B5Yd1aY3MOWpT%2Bk0HWNXQDclti7XpSSo1rDLdz02e7FNzVZ3kX3kK6znutzEvp66Pa6%2BPUjQOdziuxpI2%2FbL1jObb%2FWkxJxSujNJ%2B%2FhoS73bIqE4Q9OoU0sttyewFZpjgUYA4tb5BC4KND5VkSs5ShXppeq3XWltH%2BBuBFtF9D00FTQd%2FlUbs5o7fmAeFLdOXqzY%2FyJfT4SLqVLZV9rdgCs8qHTXKw8bT6L8aEfDkM4XKVpreatzrGJ3DFVfBVRYjH3c1PI42%2Fu6H6CFqwnMOUACA40pZ1AgbL1hlhQKVV9Qs6ZNDQlwZfvKMNS%2Fm78GOqUB4BJosd%2B8YoPWmNGosznLEoHhGGochLaRUfACVJHtLXmjv1yE6cWbN%2BOJFOTjRR%2BVRqf6BVFkKj9tkISy0u2DvXX65lRjA%2FtkI1taPcWnJyKfsEkn5IVMwu7LA9fSShkfgyKvLM45eW2QXhz%2FANl7OX43QiYO0d59q1SrwgapfgLS26g0avD79H0%2BAo3CwTaDH2fTSJm%2FggUbR1h26vr5zVVK8o26&X-Amz-Signature=c38ec4cc0933789be793b1d9b79c29522ee6c389825fd96f881f5aa452c9b922&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSN2ZBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRU0GsYGHZfDQL%2BGsWT%2FMuXDWwD%2FgquDux9m%2FK1nu1EAIgLaltyZutze5l1sl68FhDzZODp1Xay142PI1k01Wm2h8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKK1yLF3xhwvZc2%2F7ircA4KowtedVfO%2BA4656cVPgGlea5YdusrAS%2Bc%2FGAB2MF7473nI4oWsQzkeq7pmWa%2F%2BkwcppstYrg5NdTlVJAMqmySJF6U%2B9GMWQWfJhWiHs3ys4xtV81qxHnutgbiV9xcMn%2FfCP6ar4UjDfHKYOCYbbRWFGw7rzij0rhtVxoEsSdPuaA%2BMQZtzx5DD92JIoTahl4kJgWcK9Wx9iq440IBO%2BobhIqdDiaOCyBVffZiBYg%2B%2BeMWgBj9s%2BRZlRJKOVlKlkfNtfbjNUggGPf%2Fg%2Bk1QI7iipcv8EDjf6qs4q8vBipgWB7nhBBD6KErYRKa8oT%2Fr%2FGX2B5Yd1aY3MOWpT%2Bk0HWNXQDclti7XpSSo1rDLdz02e7FNzVZ3kX3kK6znutzEvp66Pa6%2BPUjQOdziuxpI2%2FbL1jObb%2FWkxJxSujNJ%2B%2FhoS73bIqE4Q9OoU0sttyewFZpjgUYA4tb5BC4KND5VkSs5ShXppeq3XWltH%2BBuBFtF9D00FTQd%2FlUbs5o7fmAeFLdOXqzY%2FyJfT4SLqVLZV9rdgCs8qHTXKw8bT6L8aEfDkM4XKVpreatzrGJ3DFVfBVRYjH3c1PI42%2Fu6H6CFqwnMOUACA40pZ1AgbL1hlhQKVV9Qs6ZNDQlwZfvKMNS%2Fm78GOqUB4BJosd%2B8YoPWmNGosznLEoHhGGochLaRUfACVJHtLXmjv1yE6cWbN%2BOJFOTjRR%2BVRqf6BVFkKj9tkISy0u2DvXX65lRjA%2FtkI1taPcWnJyKfsEkn5IVMwu7LA9fSShkfgyKvLM45eW2QXhz%2FANl7OX43QiYO0d59q1SrwgapfgLS26g0avD79H0%2BAo3CwTaDH2fTSJm%2FggUbR1h26vr5zVVK8o26&X-Amz-Signature=c6fcc3754008890526d48be5ad6980c91889a02b41ddb4117a3ff63374be687e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSN2ZBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRU0GsYGHZfDQL%2BGsWT%2FMuXDWwD%2FgquDux9m%2FK1nu1EAIgLaltyZutze5l1sl68FhDzZODp1Xay142PI1k01Wm2h8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKK1yLF3xhwvZc2%2F7ircA4KowtedVfO%2BA4656cVPgGlea5YdusrAS%2Bc%2FGAB2MF7473nI4oWsQzkeq7pmWa%2F%2BkwcppstYrg5NdTlVJAMqmySJF6U%2B9GMWQWfJhWiHs3ys4xtV81qxHnutgbiV9xcMn%2FfCP6ar4UjDfHKYOCYbbRWFGw7rzij0rhtVxoEsSdPuaA%2BMQZtzx5DD92JIoTahl4kJgWcK9Wx9iq440IBO%2BobhIqdDiaOCyBVffZiBYg%2B%2BeMWgBj9s%2BRZlRJKOVlKlkfNtfbjNUggGPf%2Fg%2Bk1QI7iipcv8EDjf6qs4q8vBipgWB7nhBBD6KErYRKa8oT%2Fr%2FGX2B5Yd1aY3MOWpT%2Bk0HWNXQDclti7XpSSo1rDLdz02e7FNzVZ3kX3kK6znutzEvp66Pa6%2BPUjQOdziuxpI2%2FbL1jObb%2FWkxJxSujNJ%2B%2FhoS73bIqE4Q9OoU0sttyewFZpjgUYA4tb5BC4KND5VkSs5ShXppeq3XWltH%2BBuBFtF9D00FTQd%2FlUbs5o7fmAeFLdOXqzY%2FyJfT4SLqVLZV9rdgCs8qHTXKw8bT6L8aEfDkM4XKVpreatzrGJ3DFVfBVRYjH3c1PI42%2Fu6H6CFqwnMOUACA40pZ1AgbL1hlhQKVV9Qs6ZNDQlwZfvKMNS%2Fm78GOqUB4BJosd%2B8YoPWmNGosznLEoHhGGochLaRUfACVJHtLXmjv1yE6cWbN%2BOJFOTjRR%2BVRqf6BVFkKj9tkISy0u2DvXX65lRjA%2FtkI1taPcWnJyKfsEkn5IVMwu7LA9fSShkfgyKvLM45eW2QXhz%2FANl7OX43QiYO0d59q1SrwgapfgLS26g0avD79H0%2BAo3CwTaDH2fTSJm%2FggUbR1h26vr5zVVK8o26&X-Amz-Signature=3b3814d10a53e0f0df16956b1e24effdd56c0127a92745132dee8c6d56c47223&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSN2ZBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRU0GsYGHZfDQL%2BGsWT%2FMuXDWwD%2FgquDux9m%2FK1nu1EAIgLaltyZutze5l1sl68FhDzZODp1Xay142PI1k01Wm2h8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKK1yLF3xhwvZc2%2F7ircA4KowtedVfO%2BA4656cVPgGlea5YdusrAS%2Bc%2FGAB2MF7473nI4oWsQzkeq7pmWa%2F%2BkwcppstYrg5NdTlVJAMqmySJF6U%2B9GMWQWfJhWiHs3ys4xtV81qxHnutgbiV9xcMn%2FfCP6ar4UjDfHKYOCYbbRWFGw7rzij0rhtVxoEsSdPuaA%2BMQZtzx5DD92JIoTahl4kJgWcK9Wx9iq440IBO%2BobhIqdDiaOCyBVffZiBYg%2B%2BeMWgBj9s%2BRZlRJKOVlKlkfNtfbjNUggGPf%2Fg%2Bk1QI7iipcv8EDjf6qs4q8vBipgWB7nhBBD6KErYRKa8oT%2Fr%2FGX2B5Yd1aY3MOWpT%2Bk0HWNXQDclti7XpSSo1rDLdz02e7FNzVZ3kX3kK6znutzEvp66Pa6%2BPUjQOdziuxpI2%2FbL1jObb%2FWkxJxSujNJ%2B%2FhoS73bIqE4Q9OoU0sttyewFZpjgUYA4tb5BC4KND5VkSs5ShXppeq3XWltH%2BBuBFtF9D00FTQd%2FlUbs5o7fmAeFLdOXqzY%2FyJfT4SLqVLZV9rdgCs8qHTXKw8bT6L8aEfDkM4XKVpreatzrGJ3DFVfBVRYjH3c1PI42%2Fu6H6CFqwnMOUACA40pZ1AgbL1hlhQKVV9Qs6ZNDQlwZfvKMNS%2Fm78GOqUB4BJosd%2B8YoPWmNGosznLEoHhGGochLaRUfACVJHtLXmjv1yE6cWbN%2BOJFOTjRR%2BVRqf6BVFkKj9tkISy0u2DvXX65lRjA%2FtkI1taPcWnJyKfsEkn5IVMwu7LA9fSShkfgyKvLM45eW2QXhz%2FANl7OX43QiYO0d59q1SrwgapfgLS26g0avD79H0%2BAo3CwTaDH2fTSJm%2FggUbR1h26vr5zVVK8o26&X-Amz-Signature=33b9f9155363154395c7acbd5fa463847e366ea20bb199580e70a55e5bdeb6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSN2ZBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRU0GsYGHZfDQL%2BGsWT%2FMuXDWwD%2FgquDux9m%2FK1nu1EAIgLaltyZutze5l1sl68FhDzZODp1Xay142PI1k01Wm2h8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKK1yLF3xhwvZc2%2F7ircA4KowtedVfO%2BA4656cVPgGlea5YdusrAS%2Bc%2FGAB2MF7473nI4oWsQzkeq7pmWa%2F%2BkwcppstYrg5NdTlVJAMqmySJF6U%2B9GMWQWfJhWiHs3ys4xtV81qxHnutgbiV9xcMn%2FfCP6ar4UjDfHKYOCYbbRWFGw7rzij0rhtVxoEsSdPuaA%2BMQZtzx5DD92JIoTahl4kJgWcK9Wx9iq440IBO%2BobhIqdDiaOCyBVffZiBYg%2B%2BeMWgBj9s%2BRZlRJKOVlKlkfNtfbjNUggGPf%2Fg%2Bk1QI7iipcv8EDjf6qs4q8vBipgWB7nhBBD6KErYRKa8oT%2Fr%2FGX2B5Yd1aY3MOWpT%2Bk0HWNXQDclti7XpSSo1rDLdz02e7FNzVZ3kX3kK6znutzEvp66Pa6%2BPUjQOdziuxpI2%2FbL1jObb%2FWkxJxSujNJ%2B%2FhoS73bIqE4Q9OoU0sttyewFZpjgUYA4tb5BC4KND5VkSs5ShXppeq3XWltH%2BBuBFtF9D00FTQd%2FlUbs5o7fmAeFLdOXqzY%2FyJfT4SLqVLZV9rdgCs8qHTXKw8bT6L8aEfDkM4XKVpreatzrGJ3DFVfBVRYjH3c1PI42%2Fu6H6CFqwnMOUACA40pZ1AgbL1hlhQKVV9Qs6ZNDQlwZfvKMNS%2Fm78GOqUB4BJosd%2B8YoPWmNGosznLEoHhGGochLaRUfACVJHtLXmjv1yE6cWbN%2BOJFOTjRR%2BVRqf6BVFkKj9tkISy0u2DvXX65lRjA%2FtkI1taPcWnJyKfsEkn5IVMwu7LA9fSShkfgyKvLM45eW2QXhz%2FANl7OX43QiYO0d59q1SrwgapfgLS26g0avD79H0%2BAo3CwTaDH2fTSJm%2FggUbR1h26vr5zVVK8o26&X-Amz-Signature=3ee42ce2ebfba5c161427c41febe93eb9817504b90955ec78893d2ff6f3e49c9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
