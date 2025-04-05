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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAI2IYB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtZt38qhDX1vejxPKopKub%2FY%2FBSeZ%2BNVKFIF8bTuY%2FxAiBNaNSF%2BMZrq5xD15a%2FO8OHCxVHkDGubEJaNqmULNS5hir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM9Y8TrgOsLfNyO5bGKtwDZ603i1BNh%2FEeSSeR38ShgQIwxyU4E5bmeoUnId22mU4mXMIwdNlMJwbcnGH25%2F3OHjzW8Pu%2F%2BvBMe2P5csQutxPw6%2BGpZmcNb3HnTGXObym495LsMGhm8O7TzePnq%2FrDIHqoewpgZlDBgnnVhpBcw6O7A3vYd1YqwGYwTTUrDrGODTXHr6i5g0Jl2bAjSUaTVivQTwVCczpbS6IJxnzTBv%2Bih2hfTWKcKpKFvryOdKUmPRxaB%2FhjrGlQhRMPRsQkdFf0CtmxmFJ4puTczSwOxD%2FAO7HTix9EGGjbcWx4fzb8nWzsNQygI2%2BElf1oHpILP%2FsB1I7GJQ2rTh1pffK1ldiODYkEIFIDY51mq833bieLQtvzqo3MLQd27qSrSIrGl8NHlZDQdMaDxe9bShFoiYqiNW1ScxUqFT8Cn3vbq2feTPlcpMvAxOvgH6DL8Z7pRBr%2BJheR0FXXgHV81stpz%2FklV8LScVC6GCLAbktCwCh4FC8MVjJZOrnUg3dEUqgQfJmRUlZaKmrVlnwgDJ8NB9oAopii9faJeXwmbtwT%2BTEHWopUDE0ePg4lVQnhFHtJ%2BhCl7IK4CD3wO3tWjzx5IOJVVtKpVe%2F9U8603dk7pURK2uCEjSgfwmbC60gwv8LGvwY6pgEop%2BQOhyApPZP43VcYcq37v006582R3vEMZLRxPuNEZf0DX%2B0IVNrzq6Bx%2BIXJ28%2FKdMVye1q8XVio87WlDNAQvt6xehA3F%2B4WPfaNE0W3GI%2FO6ACQ7V%2B3tXn7BoRDMqhyiQGdoT738TT3wq%2FBat7wlPVfYHFLIa3Bvv%2FoIX8nBnC283VhxGu%2FBcRFGv2d57nAqySfQAoyenU%2FVuWO53LyDHFHSqK%2F&X-Amz-Signature=16d8996ba6a75e5b62543325f1b307ca2025bfe6347c09b986288eb5d5ab5446&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAI2IYB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtZt38qhDX1vejxPKopKub%2FY%2FBSeZ%2BNVKFIF8bTuY%2FxAiBNaNSF%2BMZrq5xD15a%2FO8OHCxVHkDGubEJaNqmULNS5hir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM9Y8TrgOsLfNyO5bGKtwDZ603i1BNh%2FEeSSeR38ShgQIwxyU4E5bmeoUnId22mU4mXMIwdNlMJwbcnGH25%2F3OHjzW8Pu%2F%2BvBMe2P5csQutxPw6%2BGpZmcNb3HnTGXObym495LsMGhm8O7TzePnq%2FrDIHqoewpgZlDBgnnVhpBcw6O7A3vYd1YqwGYwTTUrDrGODTXHr6i5g0Jl2bAjSUaTVivQTwVCczpbS6IJxnzTBv%2Bih2hfTWKcKpKFvryOdKUmPRxaB%2FhjrGlQhRMPRsQkdFf0CtmxmFJ4puTczSwOxD%2FAO7HTix9EGGjbcWx4fzb8nWzsNQygI2%2BElf1oHpILP%2FsB1I7GJQ2rTh1pffK1ldiODYkEIFIDY51mq833bieLQtvzqo3MLQd27qSrSIrGl8NHlZDQdMaDxe9bShFoiYqiNW1ScxUqFT8Cn3vbq2feTPlcpMvAxOvgH6DL8Z7pRBr%2BJheR0FXXgHV81stpz%2FklV8LScVC6GCLAbktCwCh4FC8MVjJZOrnUg3dEUqgQfJmRUlZaKmrVlnwgDJ8NB9oAopii9faJeXwmbtwT%2BTEHWopUDE0ePg4lVQnhFHtJ%2BhCl7IK4CD3wO3tWjzx5IOJVVtKpVe%2F9U8603dk7pURK2uCEjSgfwmbC60gwv8LGvwY6pgEop%2BQOhyApPZP43VcYcq37v006582R3vEMZLRxPuNEZf0DX%2B0IVNrzq6Bx%2BIXJ28%2FKdMVye1q8XVio87WlDNAQvt6xehA3F%2B4WPfaNE0W3GI%2FO6ACQ7V%2B3tXn7BoRDMqhyiQGdoT738TT3wq%2FBat7wlPVfYHFLIa3Bvv%2FoIX8nBnC283VhxGu%2FBcRFGv2d57nAqySfQAoyenU%2FVuWO53LyDHFHSqK%2F&X-Amz-Signature=0f9ed294ed05f9f6b5cf0eb08055230ac98d8bcb41c74ae1ce0324f11bd366fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAI2IYB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtZt38qhDX1vejxPKopKub%2FY%2FBSeZ%2BNVKFIF8bTuY%2FxAiBNaNSF%2BMZrq5xD15a%2FO8OHCxVHkDGubEJaNqmULNS5hir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM9Y8TrgOsLfNyO5bGKtwDZ603i1BNh%2FEeSSeR38ShgQIwxyU4E5bmeoUnId22mU4mXMIwdNlMJwbcnGH25%2F3OHjzW8Pu%2F%2BvBMe2P5csQutxPw6%2BGpZmcNb3HnTGXObym495LsMGhm8O7TzePnq%2FrDIHqoewpgZlDBgnnVhpBcw6O7A3vYd1YqwGYwTTUrDrGODTXHr6i5g0Jl2bAjSUaTVivQTwVCczpbS6IJxnzTBv%2Bih2hfTWKcKpKFvryOdKUmPRxaB%2FhjrGlQhRMPRsQkdFf0CtmxmFJ4puTczSwOxD%2FAO7HTix9EGGjbcWx4fzb8nWzsNQygI2%2BElf1oHpILP%2FsB1I7GJQ2rTh1pffK1ldiODYkEIFIDY51mq833bieLQtvzqo3MLQd27qSrSIrGl8NHlZDQdMaDxe9bShFoiYqiNW1ScxUqFT8Cn3vbq2feTPlcpMvAxOvgH6DL8Z7pRBr%2BJheR0FXXgHV81stpz%2FklV8LScVC6GCLAbktCwCh4FC8MVjJZOrnUg3dEUqgQfJmRUlZaKmrVlnwgDJ8NB9oAopii9faJeXwmbtwT%2BTEHWopUDE0ePg4lVQnhFHtJ%2BhCl7IK4CD3wO3tWjzx5IOJVVtKpVe%2F9U8603dk7pURK2uCEjSgfwmbC60gwv8LGvwY6pgEop%2BQOhyApPZP43VcYcq37v006582R3vEMZLRxPuNEZf0DX%2B0IVNrzq6Bx%2BIXJ28%2FKdMVye1q8XVio87WlDNAQvt6xehA3F%2B4WPfaNE0W3GI%2FO6ACQ7V%2B3tXn7BoRDMqhyiQGdoT738TT3wq%2FBat7wlPVfYHFLIa3Bvv%2FoIX8nBnC283VhxGu%2FBcRFGv2d57nAqySfQAoyenU%2FVuWO53LyDHFHSqK%2F&X-Amz-Signature=dc6e660f611c5ef8e65ce3a719b8cc31c2a2f3474f3d4d77ddba0287ee078ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAI2IYB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtZt38qhDX1vejxPKopKub%2FY%2FBSeZ%2BNVKFIF8bTuY%2FxAiBNaNSF%2BMZrq5xD15a%2FO8OHCxVHkDGubEJaNqmULNS5hir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM9Y8TrgOsLfNyO5bGKtwDZ603i1BNh%2FEeSSeR38ShgQIwxyU4E5bmeoUnId22mU4mXMIwdNlMJwbcnGH25%2F3OHjzW8Pu%2F%2BvBMe2P5csQutxPw6%2BGpZmcNb3HnTGXObym495LsMGhm8O7TzePnq%2FrDIHqoewpgZlDBgnnVhpBcw6O7A3vYd1YqwGYwTTUrDrGODTXHr6i5g0Jl2bAjSUaTVivQTwVCczpbS6IJxnzTBv%2Bih2hfTWKcKpKFvryOdKUmPRxaB%2FhjrGlQhRMPRsQkdFf0CtmxmFJ4puTczSwOxD%2FAO7HTix9EGGjbcWx4fzb8nWzsNQygI2%2BElf1oHpILP%2FsB1I7GJQ2rTh1pffK1ldiODYkEIFIDY51mq833bieLQtvzqo3MLQd27qSrSIrGl8NHlZDQdMaDxe9bShFoiYqiNW1ScxUqFT8Cn3vbq2feTPlcpMvAxOvgH6DL8Z7pRBr%2BJheR0FXXgHV81stpz%2FklV8LScVC6GCLAbktCwCh4FC8MVjJZOrnUg3dEUqgQfJmRUlZaKmrVlnwgDJ8NB9oAopii9faJeXwmbtwT%2BTEHWopUDE0ePg4lVQnhFHtJ%2BhCl7IK4CD3wO3tWjzx5IOJVVtKpVe%2F9U8603dk7pURK2uCEjSgfwmbC60gwv8LGvwY6pgEop%2BQOhyApPZP43VcYcq37v006582R3vEMZLRxPuNEZf0DX%2B0IVNrzq6Bx%2BIXJ28%2FKdMVye1q8XVio87WlDNAQvt6xehA3F%2B4WPfaNE0W3GI%2FO6ACQ7V%2B3tXn7BoRDMqhyiQGdoT738TT3wq%2FBat7wlPVfYHFLIa3Bvv%2FoIX8nBnC283VhxGu%2FBcRFGv2d57nAqySfQAoyenU%2FVuWO53LyDHFHSqK%2F&X-Amz-Signature=d65fa0b850b0c10a79195ccb176690c9d398d81a21ab3a36befa44f135a849d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAI2IYB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtZt38qhDX1vejxPKopKub%2FY%2FBSeZ%2BNVKFIF8bTuY%2FxAiBNaNSF%2BMZrq5xD15a%2FO8OHCxVHkDGubEJaNqmULNS5hir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM9Y8TrgOsLfNyO5bGKtwDZ603i1BNh%2FEeSSeR38ShgQIwxyU4E5bmeoUnId22mU4mXMIwdNlMJwbcnGH25%2F3OHjzW8Pu%2F%2BvBMe2P5csQutxPw6%2BGpZmcNb3HnTGXObym495LsMGhm8O7TzePnq%2FrDIHqoewpgZlDBgnnVhpBcw6O7A3vYd1YqwGYwTTUrDrGODTXHr6i5g0Jl2bAjSUaTVivQTwVCczpbS6IJxnzTBv%2Bih2hfTWKcKpKFvryOdKUmPRxaB%2FhjrGlQhRMPRsQkdFf0CtmxmFJ4puTczSwOxD%2FAO7HTix9EGGjbcWx4fzb8nWzsNQygI2%2BElf1oHpILP%2FsB1I7GJQ2rTh1pffK1ldiODYkEIFIDY51mq833bieLQtvzqo3MLQd27qSrSIrGl8NHlZDQdMaDxe9bShFoiYqiNW1ScxUqFT8Cn3vbq2feTPlcpMvAxOvgH6DL8Z7pRBr%2BJheR0FXXgHV81stpz%2FklV8LScVC6GCLAbktCwCh4FC8MVjJZOrnUg3dEUqgQfJmRUlZaKmrVlnwgDJ8NB9oAopii9faJeXwmbtwT%2BTEHWopUDE0ePg4lVQnhFHtJ%2BhCl7IK4CD3wO3tWjzx5IOJVVtKpVe%2F9U8603dk7pURK2uCEjSgfwmbC60gwv8LGvwY6pgEop%2BQOhyApPZP43VcYcq37v006582R3vEMZLRxPuNEZf0DX%2B0IVNrzq6Bx%2BIXJ28%2FKdMVye1q8XVio87WlDNAQvt6xehA3F%2B4WPfaNE0W3GI%2FO6ACQ7V%2B3tXn7BoRDMqhyiQGdoT738TT3wq%2FBat7wlPVfYHFLIa3Bvv%2FoIX8nBnC283VhxGu%2FBcRFGv2d57nAqySfQAoyenU%2FVuWO53LyDHFHSqK%2F&X-Amz-Signature=89f18b3be621301440b9c0db25a8e2c1679fee292df526005e9e2419a6dbee74&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAI2IYB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtZt38qhDX1vejxPKopKub%2FY%2FBSeZ%2BNVKFIF8bTuY%2FxAiBNaNSF%2BMZrq5xD15a%2FO8OHCxVHkDGubEJaNqmULNS5hir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM9Y8TrgOsLfNyO5bGKtwDZ603i1BNh%2FEeSSeR38ShgQIwxyU4E5bmeoUnId22mU4mXMIwdNlMJwbcnGH25%2F3OHjzW8Pu%2F%2BvBMe2P5csQutxPw6%2BGpZmcNb3HnTGXObym495LsMGhm8O7TzePnq%2FrDIHqoewpgZlDBgnnVhpBcw6O7A3vYd1YqwGYwTTUrDrGODTXHr6i5g0Jl2bAjSUaTVivQTwVCczpbS6IJxnzTBv%2Bih2hfTWKcKpKFvryOdKUmPRxaB%2FhjrGlQhRMPRsQkdFf0CtmxmFJ4puTczSwOxD%2FAO7HTix9EGGjbcWx4fzb8nWzsNQygI2%2BElf1oHpILP%2FsB1I7GJQ2rTh1pffK1ldiODYkEIFIDY51mq833bieLQtvzqo3MLQd27qSrSIrGl8NHlZDQdMaDxe9bShFoiYqiNW1ScxUqFT8Cn3vbq2feTPlcpMvAxOvgH6DL8Z7pRBr%2BJheR0FXXgHV81stpz%2FklV8LScVC6GCLAbktCwCh4FC8MVjJZOrnUg3dEUqgQfJmRUlZaKmrVlnwgDJ8NB9oAopii9faJeXwmbtwT%2BTEHWopUDE0ePg4lVQnhFHtJ%2BhCl7IK4CD3wO3tWjzx5IOJVVtKpVe%2F9U8603dk7pURK2uCEjSgfwmbC60gwv8LGvwY6pgEop%2BQOhyApPZP43VcYcq37v006582R3vEMZLRxPuNEZf0DX%2B0IVNrzq6Bx%2BIXJ28%2FKdMVye1q8XVio87WlDNAQvt6xehA3F%2B4WPfaNE0W3GI%2FO6ACQ7V%2B3tXn7BoRDMqhyiQGdoT738TT3wq%2FBat7wlPVfYHFLIa3Bvv%2FoIX8nBnC283VhxGu%2FBcRFGv2d57nAqySfQAoyenU%2FVuWO53LyDHFHSqK%2F&X-Amz-Signature=307f611ef16d72105a714fd08011843b4ad60395f8bb5483d6d41c647d4e5811&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAI2IYB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtZt38qhDX1vejxPKopKub%2FY%2FBSeZ%2BNVKFIF8bTuY%2FxAiBNaNSF%2BMZrq5xD15a%2FO8OHCxVHkDGubEJaNqmULNS5hir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM9Y8TrgOsLfNyO5bGKtwDZ603i1BNh%2FEeSSeR38ShgQIwxyU4E5bmeoUnId22mU4mXMIwdNlMJwbcnGH25%2F3OHjzW8Pu%2F%2BvBMe2P5csQutxPw6%2BGpZmcNb3HnTGXObym495LsMGhm8O7TzePnq%2FrDIHqoewpgZlDBgnnVhpBcw6O7A3vYd1YqwGYwTTUrDrGODTXHr6i5g0Jl2bAjSUaTVivQTwVCczpbS6IJxnzTBv%2Bih2hfTWKcKpKFvryOdKUmPRxaB%2FhjrGlQhRMPRsQkdFf0CtmxmFJ4puTczSwOxD%2FAO7HTix9EGGjbcWx4fzb8nWzsNQygI2%2BElf1oHpILP%2FsB1I7GJQ2rTh1pffK1ldiODYkEIFIDY51mq833bieLQtvzqo3MLQd27qSrSIrGl8NHlZDQdMaDxe9bShFoiYqiNW1ScxUqFT8Cn3vbq2feTPlcpMvAxOvgH6DL8Z7pRBr%2BJheR0FXXgHV81stpz%2FklV8LScVC6GCLAbktCwCh4FC8MVjJZOrnUg3dEUqgQfJmRUlZaKmrVlnwgDJ8NB9oAopii9faJeXwmbtwT%2BTEHWopUDE0ePg4lVQnhFHtJ%2BhCl7IK4CD3wO3tWjzx5IOJVVtKpVe%2F9U8603dk7pURK2uCEjSgfwmbC60gwv8LGvwY6pgEop%2BQOhyApPZP43VcYcq37v006582R3vEMZLRxPuNEZf0DX%2B0IVNrzq6Bx%2BIXJ28%2FKdMVye1q8XVio87WlDNAQvt6xehA3F%2B4WPfaNE0W3GI%2FO6ACQ7V%2B3tXn7BoRDMqhyiQGdoT738TT3wq%2FBat7wlPVfYHFLIa3Bvv%2FoIX8nBnC283VhxGu%2FBcRFGv2d57nAqySfQAoyenU%2FVuWO53LyDHFHSqK%2F&X-Amz-Signature=d541b1822f651b38d6342d8b46d0199cc61b657a81b40c2cfa7a036c7b48349d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
