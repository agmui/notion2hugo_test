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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAGOSFD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLGhUm0pt6oZMdC%2B%2FEMyFQIqfwf9PxIooWfd%2BOcVJfgIgRmkyX2RZ7Hj2iNRWnp%2FsquFJQxGr%2Fkk5LC6Oie8ls9Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEmNg95ueDU6YzmkEircAwCQIbqgqepBW7WwuzNF7%2BTGcBA4fbqpZOik%2Bc%2F9Cnpcedoa2KH%2FjJD8aIludaiDJfTILD%2B%2Fdy9enxOz73ozRlDGROWeAU17q0Ui7sae1G%2BVE9GI67WuwP7e9KoCJCFI2qwKes9s7Wk1moLEIAiP2GfH%2FUKMcn3kARHT%2B8lKWhSCRk59QVG3yThra6TG7cWbiP8Wy%2FePdJ8nV%2BvymeKS9Yo9HtVKiEKNDRBnc5CWQ2171llKgOXgj9PW8CKrRNnYgQnDtVu8KedZWKTnWHX3fJW6gKmtNPVtoiidp%2BLY7%2FakErBcwVUgEyOga391kxf3NKrItS9TkLy%2F6GXVRhI6k1oSkiW%2BU7zjRwLQHs9%2Bx0LXkcn2k4QeUewDXexmv%2FNWyrhkCcgVQTxOHB4gn0lnTZbW4oHBVuH%2FqJh3QeVVwa8HlgWO1bu9eQLD54W05WVQyYd0xjFMEEk9L0teaoadhz1YrmjWGtR92VOiQJHUFp%2BlAp6VJVH8JS3p3CMQXybaZ%2B6FBJNbM%2BPRyaECtFHCAP3a%2FqnJAHazxPA4PunXJKLVGWEMIP6Dx3J91wFK21sxG7T33wl8ebk0oPyfPvkjBUlB12sfd1uX9zLTxV2VXqBw89lJQrzoGX8h9u5vMIvQ0sEGOqUBUQTdE%2F%2BBiqoiFGOTwuYsLI25%2FpEYacw7u6KjwY051Ryzimr8ZbtDCWkCTJs30vK7CVJT9u2vES18aNdoFJg5jRQQ%2Bnw78L3hvTpPbahviMVZFPd0T2cnQpIvFL7FPh5a93%2B%2F%2FJwF4Z1WENzjntoGv7eN4vmhRJ9gGoaf%2BAqEXduju48mTp1VvTG4U2jV8A9IzEFHXW%2Br8dVETyS9rLxwqYkrpBnd&X-Amz-Signature=293e356842c9123856bf389c27e17caf81050398b1829900cfec039c39c9cfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAGOSFD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLGhUm0pt6oZMdC%2B%2FEMyFQIqfwf9PxIooWfd%2BOcVJfgIgRmkyX2RZ7Hj2iNRWnp%2FsquFJQxGr%2Fkk5LC6Oie8ls9Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEmNg95ueDU6YzmkEircAwCQIbqgqepBW7WwuzNF7%2BTGcBA4fbqpZOik%2Bc%2F9Cnpcedoa2KH%2FjJD8aIludaiDJfTILD%2B%2Fdy9enxOz73ozRlDGROWeAU17q0Ui7sae1G%2BVE9GI67WuwP7e9KoCJCFI2qwKes9s7Wk1moLEIAiP2GfH%2FUKMcn3kARHT%2B8lKWhSCRk59QVG3yThra6TG7cWbiP8Wy%2FePdJ8nV%2BvymeKS9Yo9HtVKiEKNDRBnc5CWQ2171llKgOXgj9PW8CKrRNnYgQnDtVu8KedZWKTnWHX3fJW6gKmtNPVtoiidp%2BLY7%2FakErBcwVUgEyOga391kxf3NKrItS9TkLy%2F6GXVRhI6k1oSkiW%2BU7zjRwLQHs9%2Bx0LXkcn2k4QeUewDXexmv%2FNWyrhkCcgVQTxOHB4gn0lnTZbW4oHBVuH%2FqJh3QeVVwa8HlgWO1bu9eQLD54W05WVQyYd0xjFMEEk9L0teaoadhz1YrmjWGtR92VOiQJHUFp%2BlAp6VJVH8JS3p3CMQXybaZ%2B6FBJNbM%2BPRyaECtFHCAP3a%2FqnJAHazxPA4PunXJKLVGWEMIP6Dx3J91wFK21sxG7T33wl8ebk0oPyfPvkjBUlB12sfd1uX9zLTxV2VXqBw89lJQrzoGX8h9u5vMIvQ0sEGOqUBUQTdE%2F%2BBiqoiFGOTwuYsLI25%2FpEYacw7u6KjwY051Ryzimr8ZbtDCWkCTJs30vK7CVJT9u2vES18aNdoFJg5jRQQ%2Bnw78L3hvTpPbahviMVZFPd0T2cnQpIvFL7FPh5a93%2B%2F%2FJwF4Z1WENzjntoGv7eN4vmhRJ9gGoaf%2BAqEXduju48mTp1VvTG4U2jV8A9IzEFHXW%2Br8dVETyS9rLxwqYkrpBnd&X-Amz-Signature=46188048ea41806ef22d81cde9008a09e7e60e3b3fef68d0482fe1e308a886ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAGOSFD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLGhUm0pt6oZMdC%2B%2FEMyFQIqfwf9PxIooWfd%2BOcVJfgIgRmkyX2RZ7Hj2iNRWnp%2FsquFJQxGr%2Fkk5LC6Oie8ls9Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEmNg95ueDU6YzmkEircAwCQIbqgqepBW7WwuzNF7%2BTGcBA4fbqpZOik%2Bc%2F9Cnpcedoa2KH%2FjJD8aIludaiDJfTILD%2B%2Fdy9enxOz73ozRlDGROWeAU17q0Ui7sae1G%2BVE9GI67WuwP7e9KoCJCFI2qwKes9s7Wk1moLEIAiP2GfH%2FUKMcn3kARHT%2B8lKWhSCRk59QVG3yThra6TG7cWbiP8Wy%2FePdJ8nV%2BvymeKS9Yo9HtVKiEKNDRBnc5CWQ2171llKgOXgj9PW8CKrRNnYgQnDtVu8KedZWKTnWHX3fJW6gKmtNPVtoiidp%2BLY7%2FakErBcwVUgEyOga391kxf3NKrItS9TkLy%2F6GXVRhI6k1oSkiW%2BU7zjRwLQHs9%2Bx0LXkcn2k4QeUewDXexmv%2FNWyrhkCcgVQTxOHB4gn0lnTZbW4oHBVuH%2FqJh3QeVVwa8HlgWO1bu9eQLD54W05WVQyYd0xjFMEEk9L0teaoadhz1YrmjWGtR92VOiQJHUFp%2BlAp6VJVH8JS3p3CMQXybaZ%2B6FBJNbM%2BPRyaECtFHCAP3a%2FqnJAHazxPA4PunXJKLVGWEMIP6Dx3J91wFK21sxG7T33wl8ebk0oPyfPvkjBUlB12sfd1uX9zLTxV2VXqBw89lJQrzoGX8h9u5vMIvQ0sEGOqUBUQTdE%2F%2BBiqoiFGOTwuYsLI25%2FpEYacw7u6KjwY051Ryzimr8ZbtDCWkCTJs30vK7CVJT9u2vES18aNdoFJg5jRQQ%2Bnw78L3hvTpPbahviMVZFPd0T2cnQpIvFL7FPh5a93%2B%2F%2FJwF4Z1WENzjntoGv7eN4vmhRJ9gGoaf%2BAqEXduju48mTp1VvTG4U2jV8A9IzEFHXW%2Br8dVETyS9rLxwqYkrpBnd&X-Amz-Signature=f2c75b93802d70250252e138e40ae76d5c72fbf5a2281156c067e2fba6d5b563&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAGOSFD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLGhUm0pt6oZMdC%2B%2FEMyFQIqfwf9PxIooWfd%2BOcVJfgIgRmkyX2RZ7Hj2iNRWnp%2FsquFJQxGr%2Fkk5LC6Oie8ls9Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEmNg95ueDU6YzmkEircAwCQIbqgqepBW7WwuzNF7%2BTGcBA4fbqpZOik%2Bc%2F9Cnpcedoa2KH%2FjJD8aIludaiDJfTILD%2B%2Fdy9enxOz73ozRlDGROWeAU17q0Ui7sae1G%2BVE9GI67WuwP7e9KoCJCFI2qwKes9s7Wk1moLEIAiP2GfH%2FUKMcn3kARHT%2B8lKWhSCRk59QVG3yThra6TG7cWbiP8Wy%2FePdJ8nV%2BvymeKS9Yo9HtVKiEKNDRBnc5CWQ2171llKgOXgj9PW8CKrRNnYgQnDtVu8KedZWKTnWHX3fJW6gKmtNPVtoiidp%2BLY7%2FakErBcwVUgEyOga391kxf3NKrItS9TkLy%2F6GXVRhI6k1oSkiW%2BU7zjRwLQHs9%2Bx0LXkcn2k4QeUewDXexmv%2FNWyrhkCcgVQTxOHB4gn0lnTZbW4oHBVuH%2FqJh3QeVVwa8HlgWO1bu9eQLD54W05WVQyYd0xjFMEEk9L0teaoadhz1YrmjWGtR92VOiQJHUFp%2BlAp6VJVH8JS3p3CMQXybaZ%2B6FBJNbM%2BPRyaECtFHCAP3a%2FqnJAHazxPA4PunXJKLVGWEMIP6Dx3J91wFK21sxG7T33wl8ebk0oPyfPvkjBUlB12sfd1uX9zLTxV2VXqBw89lJQrzoGX8h9u5vMIvQ0sEGOqUBUQTdE%2F%2BBiqoiFGOTwuYsLI25%2FpEYacw7u6KjwY051Ryzimr8ZbtDCWkCTJs30vK7CVJT9u2vES18aNdoFJg5jRQQ%2Bnw78L3hvTpPbahviMVZFPd0T2cnQpIvFL7FPh5a93%2B%2F%2FJwF4Z1WENzjntoGv7eN4vmhRJ9gGoaf%2BAqEXduju48mTp1VvTG4U2jV8A9IzEFHXW%2Br8dVETyS9rLxwqYkrpBnd&X-Amz-Signature=bd72a34a34104d05e4712e35981035dc204b0332ae7c4b446f70676c323d374a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAGOSFD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLGhUm0pt6oZMdC%2B%2FEMyFQIqfwf9PxIooWfd%2BOcVJfgIgRmkyX2RZ7Hj2iNRWnp%2FsquFJQxGr%2Fkk5LC6Oie8ls9Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEmNg95ueDU6YzmkEircAwCQIbqgqepBW7WwuzNF7%2BTGcBA4fbqpZOik%2Bc%2F9Cnpcedoa2KH%2FjJD8aIludaiDJfTILD%2B%2Fdy9enxOz73ozRlDGROWeAU17q0Ui7sae1G%2BVE9GI67WuwP7e9KoCJCFI2qwKes9s7Wk1moLEIAiP2GfH%2FUKMcn3kARHT%2B8lKWhSCRk59QVG3yThra6TG7cWbiP8Wy%2FePdJ8nV%2BvymeKS9Yo9HtVKiEKNDRBnc5CWQ2171llKgOXgj9PW8CKrRNnYgQnDtVu8KedZWKTnWHX3fJW6gKmtNPVtoiidp%2BLY7%2FakErBcwVUgEyOga391kxf3NKrItS9TkLy%2F6GXVRhI6k1oSkiW%2BU7zjRwLQHs9%2Bx0LXkcn2k4QeUewDXexmv%2FNWyrhkCcgVQTxOHB4gn0lnTZbW4oHBVuH%2FqJh3QeVVwa8HlgWO1bu9eQLD54W05WVQyYd0xjFMEEk9L0teaoadhz1YrmjWGtR92VOiQJHUFp%2BlAp6VJVH8JS3p3CMQXybaZ%2B6FBJNbM%2BPRyaECtFHCAP3a%2FqnJAHazxPA4PunXJKLVGWEMIP6Dx3J91wFK21sxG7T33wl8ebk0oPyfPvkjBUlB12sfd1uX9zLTxV2VXqBw89lJQrzoGX8h9u5vMIvQ0sEGOqUBUQTdE%2F%2BBiqoiFGOTwuYsLI25%2FpEYacw7u6KjwY051Ryzimr8ZbtDCWkCTJs30vK7CVJT9u2vES18aNdoFJg5jRQQ%2Bnw78L3hvTpPbahviMVZFPd0T2cnQpIvFL7FPh5a93%2B%2F%2FJwF4Z1WENzjntoGv7eN4vmhRJ9gGoaf%2BAqEXduju48mTp1VvTG4U2jV8A9IzEFHXW%2Br8dVETyS9rLxwqYkrpBnd&X-Amz-Signature=d2bc1a8152860b045e8687a9b2f840b63fdc45eaca6547ed275ec72dfe3740bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAGOSFD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLGhUm0pt6oZMdC%2B%2FEMyFQIqfwf9PxIooWfd%2BOcVJfgIgRmkyX2RZ7Hj2iNRWnp%2FsquFJQxGr%2Fkk5LC6Oie8ls9Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEmNg95ueDU6YzmkEircAwCQIbqgqepBW7WwuzNF7%2BTGcBA4fbqpZOik%2Bc%2F9Cnpcedoa2KH%2FjJD8aIludaiDJfTILD%2B%2Fdy9enxOz73ozRlDGROWeAU17q0Ui7sae1G%2BVE9GI67WuwP7e9KoCJCFI2qwKes9s7Wk1moLEIAiP2GfH%2FUKMcn3kARHT%2B8lKWhSCRk59QVG3yThra6TG7cWbiP8Wy%2FePdJ8nV%2BvymeKS9Yo9HtVKiEKNDRBnc5CWQ2171llKgOXgj9PW8CKrRNnYgQnDtVu8KedZWKTnWHX3fJW6gKmtNPVtoiidp%2BLY7%2FakErBcwVUgEyOga391kxf3NKrItS9TkLy%2F6GXVRhI6k1oSkiW%2BU7zjRwLQHs9%2Bx0LXkcn2k4QeUewDXexmv%2FNWyrhkCcgVQTxOHB4gn0lnTZbW4oHBVuH%2FqJh3QeVVwa8HlgWO1bu9eQLD54W05WVQyYd0xjFMEEk9L0teaoadhz1YrmjWGtR92VOiQJHUFp%2BlAp6VJVH8JS3p3CMQXybaZ%2B6FBJNbM%2BPRyaECtFHCAP3a%2FqnJAHazxPA4PunXJKLVGWEMIP6Dx3J91wFK21sxG7T33wl8ebk0oPyfPvkjBUlB12sfd1uX9zLTxV2VXqBw89lJQrzoGX8h9u5vMIvQ0sEGOqUBUQTdE%2F%2BBiqoiFGOTwuYsLI25%2FpEYacw7u6KjwY051Ryzimr8ZbtDCWkCTJs30vK7CVJT9u2vES18aNdoFJg5jRQQ%2Bnw78L3hvTpPbahviMVZFPd0T2cnQpIvFL7FPh5a93%2B%2F%2FJwF4Z1WENzjntoGv7eN4vmhRJ9gGoaf%2BAqEXduju48mTp1VvTG4U2jV8A9IzEFHXW%2Br8dVETyS9rLxwqYkrpBnd&X-Amz-Signature=85df1fb301e5e2104c8b3934f44364cf8e81157460db2ee92a4898f395498060&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SAGOSFD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpLGhUm0pt6oZMdC%2B%2FEMyFQIqfwf9PxIooWfd%2BOcVJfgIgRmkyX2RZ7Hj2iNRWnp%2FsquFJQxGr%2Fkk5LC6Oie8ls9Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEmNg95ueDU6YzmkEircAwCQIbqgqepBW7WwuzNF7%2BTGcBA4fbqpZOik%2Bc%2F9Cnpcedoa2KH%2FjJD8aIludaiDJfTILD%2B%2Fdy9enxOz73ozRlDGROWeAU17q0Ui7sae1G%2BVE9GI67WuwP7e9KoCJCFI2qwKes9s7Wk1moLEIAiP2GfH%2FUKMcn3kARHT%2B8lKWhSCRk59QVG3yThra6TG7cWbiP8Wy%2FePdJ8nV%2BvymeKS9Yo9HtVKiEKNDRBnc5CWQ2171llKgOXgj9PW8CKrRNnYgQnDtVu8KedZWKTnWHX3fJW6gKmtNPVtoiidp%2BLY7%2FakErBcwVUgEyOga391kxf3NKrItS9TkLy%2F6GXVRhI6k1oSkiW%2BU7zjRwLQHs9%2Bx0LXkcn2k4QeUewDXexmv%2FNWyrhkCcgVQTxOHB4gn0lnTZbW4oHBVuH%2FqJh3QeVVwa8HlgWO1bu9eQLD54W05WVQyYd0xjFMEEk9L0teaoadhz1YrmjWGtR92VOiQJHUFp%2BlAp6VJVH8JS3p3CMQXybaZ%2B6FBJNbM%2BPRyaECtFHCAP3a%2FqnJAHazxPA4PunXJKLVGWEMIP6Dx3J91wFK21sxG7T33wl8ebk0oPyfPvkjBUlB12sfd1uX9zLTxV2VXqBw89lJQrzoGX8h9u5vMIvQ0sEGOqUBUQTdE%2F%2BBiqoiFGOTwuYsLI25%2FpEYacw7u6KjwY051Ryzimr8ZbtDCWkCTJs30vK7CVJT9u2vES18aNdoFJg5jRQQ%2Bnw78L3hvTpPbahviMVZFPd0T2cnQpIvFL7FPh5a93%2B%2F%2FJwF4Z1WENzjntoGv7eN4vmhRJ9gGoaf%2BAqEXduju48mTp1VvTG4U2jV8A9IzEFHXW%2Br8dVETyS9rLxwqYkrpBnd&X-Amz-Signature=2d5676e14eeecae3221c347b833e297c2cfcc2752b316264f410a1646c9329ff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
