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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXEIW44F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCY%2BVczw2vd5IcVdnGzUoqgg5RgPs32MH7sHr49Hy3rbgIgS2uqJJwUsF%2BuxuSSYtnKrOteiYjSDFOMQEUyWN3102Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLFmilyH8Td29SriiSrcA9OhfSWjL6D9nyR3juV5QPM%2F%2F2rz%2F%2BrPUbYT1AAEaZ3pwmlw%2BTUoHplJg1lKGhuaB8mjHDppHm8kFcz%2Fk%2FLjKrDxQ0vt%2FOfU2MvVSrPB3uA2pr6XSQ4DK%2BI8ykIaWi7hR%2Fvgnn3Kvs8PlvgCyu959PjuQQ%2BtmP%2BwAWC%2BiRoh598r1%2B9qAaYzR5ySGz9ZVlTNhEoe7XBOWlpEzKYrRJ5kPiSaftEjMl1JC50ujjAy8QMU4lorKw0Ns6319lLOgCmGjpziLzwUAx0yYDTzyTZjXwB%2FO4zDj1zCK%2BkcwxaVKFj7N%2BZmgo75Vw7f1CZEmA1Fz0rbQyKyqrkIW5ruIQRGXfDstvfmrkfVKpZsZGp0ET0SgT645wWXR0qdijyyK71Sc0Nbz36NJMwkqPBDq7uEaIvfGOHWV0WeygR70JAvc9%2BZuavobvFeThk3WZD9gXUWuXwDRVv%2BbQbEeh%2Fuu5bkDED%2Bu0iIkEjt8HeDDYHkk7jKddUqQRUfwbFFuW0o%2FKfASoxEXtE4T4m%2FeqDs4wrjim9CZFxM5QAWx08g0YhV3D6z6XjMF5cjTzKbpIz%2ByaOWp85woLZudku3wJw3ZeIiWqo60dj%2BfZstXry15dQFrmxIIrJPoivVtNOE8H9EMISLob8GOqUBB9LC4xXzPhtvqqeXsWhwLp62q%2Bq8otGnUcIj2vq%2F21QWfXsa6UwgC7SkHNPBt8MGEUMRC43W%2FyjtlRrcGm7ITBp2PjxyA901%2FZBEkEtkn63KuCmAdv%2FNStmLtG%2BWEExR6Me2rySVdVvCjgGLIsyYpxCf7lemOmoBiHC3QSdJB766DXmA57PPtLSdXRkeAx2FgGCjOR4pvYobxuGea818Bq4tqmWK&X-Amz-Signature=3f0ae3ffef85de40f7b8dc3a2a3587b5e2b97b18692e27a681472fcf7bbb15e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXEIW44F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCY%2BVczw2vd5IcVdnGzUoqgg5RgPs32MH7sHr49Hy3rbgIgS2uqJJwUsF%2BuxuSSYtnKrOteiYjSDFOMQEUyWN3102Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLFmilyH8Td29SriiSrcA9OhfSWjL6D9nyR3juV5QPM%2F%2F2rz%2F%2BrPUbYT1AAEaZ3pwmlw%2BTUoHplJg1lKGhuaB8mjHDppHm8kFcz%2Fk%2FLjKrDxQ0vt%2FOfU2MvVSrPB3uA2pr6XSQ4DK%2BI8ykIaWi7hR%2Fvgnn3Kvs8PlvgCyu959PjuQQ%2BtmP%2BwAWC%2BiRoh598r1%2B9qAaYzR5ySGz9ZVlTNhEoe7XBOWlpEzKYrRJ5kPiSaftEjMl1JC50ujjAy8QMU4lorKw0Ns6319lLOgCmGjpziLzwUAx0yYDTzyTZjXwB%2FO4zDj1zCK%2BkcwxaVKFj7N%2BZmgo75Vw7f1CZEmA1Fz0rbQyKyqrkIW5ruIQRGXfDstvfmrkfVKpZsZGp0ET0SgT645wWXR0qdijyyK71Sc0Nbz36NJMwkqPBDq7uEaIvfGOHWV0WeygR70JAvc9%2BZuavobvFeThk3WZD9gXUWuXwDRVv%2BbQbEeh%2Fuu5bkDED%2Bu0iIkEjt8HeDDYHkk7jKddUqQRUfwbFFuW0o%2FKfASoxEXtE4T4m%2FeqDs4wrjim9CZFxM5QAWx08g0YhV3D6z6XjMF5cjTzKbpIz%2ByaOWp85woLZudku3wJw3ZeIiWqo60dj%2BfZstXry15dQFrmxIIrJPoivVtNOE8H9EMISLob8GOqUBB9LC4xXzPhtvqqeXsWhwLp62q%2Bq8otGnUcIj2vq%2F21QWfXsa6UwgC7SkHNPBt8MGEUMRC43W%2FyjtlRrcGm7ITBp2PjxyA901%2FZBEkEtkn63KuCmAdv%2FNStmLtG%2BWEExR6Me2rySVdVvCjgGLIsyYpxCf7lemOmoBiHC3QSdJB766DXmA57PPtLSdXRkeAx2FgGCjOR4pvYobxuGea818Bq4tqmWK&X-Amz-Signature=661d1b5b4473a42db6fd6f2f6d758dd754a33acbbea8690dfd6fde942dc5c162&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXEIW44F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCY%2BVczw2vd5IcVdnGzUoqgg5RgPs32MH7sHr49Hy3rbgIgS2uqJJwUsF%2BuxuSSYtnKrOteiYjSDFOMQEUyWN3102Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLFmilyH8Td29SriiSrcA9OhfSWjL6D9nyR3juV5QPM%2F%2F2rz%2F%2BrPUbYT1AAEaZ3pwmlw%2BTUoHplJg1lKGhuaB8mjHDppHm8kFcz%2Fk%2FLjKrDxQ0vt%2FOfU2MvVSrPB3uA2pr6XSQ4DK%2BI8ykIaWi7hR%2Fvgnn3Kvs8PlvgCyu959PjuQQ%2BtmP%2BwAWC%2BiRoh598r1%2B9qAaYzR5ySGz9ZVlTNhEoe7XBOWlpEzKYrRJ5kPiSaftEjMl1JC50ujjAy8QMU4lorKw0Ns6319lLOgCmGjpziLzwUAx0yYDTzyTZjXwB%2FO4zDj1zCK%2BkcwxaVKFj7N%2BZmgo75Vw7f1CZEmA1Fz0rbQyKyqrkIW5ruIQRGXfDstvfmrkfVKpZsZGp0ET0SgT645wWXR0qdijyyK71Sc0Nbz36NJMwkqPBDq7uEaIvfGOHWV0WeygR70JAvc9%2BZuavobvFeThk3WZD9gXUWuXwDRVv%2BbQbEeh%2Fuu5bkDED%2Bu0iIkEjt8HeDDYHkk7jKddUqQRUfwbFFuW0o%2FKfASoxEXtE4T4m%2FeqDs4wrjim9CZFxM5QAWx08g0YhV3D6z6XjMF5cjTzKbpIz%2ByaOWp85woLZudku3wJw3ZeIiWqo60dj%2BfZstXry15dQFrmxIIrJPoivVtNOE8H9EMISLob8GOqUBB9LC4xXzPhtvqqeXsWhwLp62q%2Bq8otGnUcIj2vq%2F21QWfXsa6UwgC7SkHNPBt8MGEUMRC43W%2FyjtlRrcGm7ITBp2PjxyA901%2FZBEkEtkn63KuCmAdv%2FNStmLtG%2BWEExR6Me2rySVdVvCjgGLIsyYpxCf7lemOmoBiHC3QSdJB766DXmA57PPtLSdXRkeAx2FgGCjOR4pvYobxuGea818Bq4tqmWK&X-Amz-Signature=0065232de29b2539f83e0aad6788b79910e4fa9e4f6f1a94d442cf1b0d4d2515&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXEIW44F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCY%2BVczw2vd5IcVdnGzUoqgg5RgPs32MH7sHr49Hy3rbgIgS2uqJJwUsF%2BuxuSSYtnKrOteiYjSDFOMQEUyWN3102Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLFmilyH8Td29SriiSrcA9OhfSWjL6D9nyR3juV5QPM%2F%2F2rz%2F%2BrPUbYT1AAEaZ3pwmlw%2BTUoHplJg1lKGhuaB8mjHDppHm8kFcz%2Fk%2FLjKrDxQ0vt%2FOfU2MvVSrPB3uA2pr6XSQ4DK%2BI8ykIaWi7hR%2Fvgnn3Kvs8PlvgCyu959PjuQQ%2BtmP%2BwAWC%2BiRoh598r1%2B9qAaYzR5ySGz9ZVlTNhEoe7XBOWlpEzKYrRJ5kPiSaftEjMl1JC50ujjAy8QMU4lorKw0Ns6319lLOgCmGjpziLzwUAx0yYDTzyTZjXwB%2FO4zDj1zCK%2BkcwxaVKFj7N%2BZmgo75Vw7f1CZEmA1Fz0rbQyKyqrkIW5ruIQRGXfDstvfmrkfVKpZsZGp0ET0SgT645wWXR0qdijyyK71Sc0Nbz36NJMwkqPBDq7uEaIvfGOHWV0WeygR70JAvc9%2BZuavobvFeThk3WZD9gXUWuXwDRVv%2BbQbEeh%2Fuu5bkDED%2Bu0iIkEjt8HeDDYHkk7jKddUqQRUfwbFFuW0o%2FKfASoxEXtE4T4m%2FeqDs4wrjim9CZFxM5QAWx08g0YhV3D6z6XjMF5cjTzKbpIz%2ByaOWp85woLZudku3wJw3ZeIiWqo60dj%2BfZstXry15dQFrmxIIrJPoivVtNOE8H9EMISLob8GOqUBB9LC4xXzPhtvqqeXsWhwLp62q%2Bq8otGnUcIj2vq%2F21QWfXsa6UwgC7SkHNPBt8MGEUMRC43W%2FyjtlRrcGm7ITBp2PjxyA901%2FZBEkEtkn63KuCmAdv%2FNStmLtG%2BWEExR6Me2rySVdVvCjgGLIsyYpxCf7lemOmoBiHC3QSdJB766DXmA57PPtLSdXRkeAx2FgGCjOR4pvYobxuGea818Bq4tqmWK&X-Amz-Signature=5e6aee340c719ac7b605ee805a81b03624f8bfa9501284f748726d7da0eecc16&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXEIW44F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCY%2BVczw2vd5IcVdnGzUoqgg5RgPs32MH7sHr49Hy3rbgIgS2uqJJwUsF%2BuxuSSYtnKrOteiYjSDFOMQEUyWN3102Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLFmilyH8Td29SriiSrcA9OhfSWjL6D9nyR3juV5QPM%2F%2F2rz%2F%2BrPUbYT1AAEaZ3pwmlw%2BTUoHplJg1lKGhuaB8mjHDppHm8kFcz%2Fk%2FLjKrDxQ0vt%2FOfU2MvVSrPB3uA2pr6XSQ4DK%2BI8ykIaWi7hR%2Fvgnn3Kvs8PlvgCyu959PjuQQ%2BtmP%2BwAWC%2BiRoh598r1%2B9qAaYzR5ySGz9ZVlTNhEoe7XBOWlpEzKYrRJ5kPiSaftEjMl1JC50ujjAy8QMU4lorKw0Ns6319lLOgCmGjpziLzwUAx0yYDTzyTZjXwB%2FO4zDj1zCK%2BkcwxaVKFj7N%2BZmgo75Vw7f1CZEmA1Fz0rbQyKyqrkIW5ruIQRGXfDstvfmrkfVKpZsZGp0ET0SgT645wWXR0qdijyyK71Sc0Nbz36NJMwkqPBDq7uEaIvfGOHWV0WeygR70JAvc9%2BZuavobvFeThk3WZD9gXUWuXwDRVv%2BbQbEeh%2Fuu5bkDED%2Bu0iIkEjt8HeDDYHkk7jKddUqQRUfwbFFuW0o%2FKfASoxEXtE4T4m%2FeqDs4wrjim9CZFxM5QAWx08g0YhV3D6z6XjMF5cjTzKbpIz%2ByaOWp85woLZudku3wJw3ZeIiWqo60dj%2BfZstXry15dQFrmxIIrJPoivVtNOE8H9EMISLob8GOqUBB9LC4xXzPhtvqqeXsWhwLp62q%2Bq8otGnUcIj2vq%2F21QWfXsa6UwgC7SkHNPBt8MGEUMRC43W%2FyjtlRrcGm7ITBp2PjxyA901%2FZBEkEtkn63KuCmAdv%2FNStmLtG%2BWEExR6Me2rySVdVvCjgGLIsyYpxCf7lemOmoBiHC3QSdJB766DXmA57PPtLSdXRkeAx2FgGCjOR4pvYobxuGea818Bq4tqmWK&X-Amz-Signature=4591651dd7c17fe798eaeac54f721c82b01d9ed358f50fde9afa8e0d8dce6080&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXEIW44F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCY%2BVczw2vd5IcVdnGzUoqgg5RgPs32MH7sHr49Hy3rbgIgS2uqJJwUsF%2BuxuSSYtnKrOteiYjSDFOMQEUyWN3102Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLFmilyH8Td29SriiSrcA9OhfSWjL6D9nyR3juV5QPM%2F%2F2rz%2F%2BrPUbYT1AAEaZ3pwmlw%2BTUoHplJg1lKGhuaB8mjHDppHm8kFcz%2Fk%2FLjKrDxQ0vt%2FOfU2MvVSrPB3uA2pr6XSQ4DK%2BI8ykIaWi7hR%2Fvgnn3Kvs8PlvgCyu959PjuQQ%2BtmP%2BwAWC%2BiRoh598r1%2B9qAaYzR5ySGz9ZVlTNhEoe7XBOWlpEzKYrRJ5kPiSaftEjMl1JC50ujjAy8QMU4lorKw0Ns6319lLOgCmGjpziLzwUAx0yYDTzyTZjXwB%2FO4zDj1zCK%2BkcwxaVKFj7N%2BZmgo75Vw7f1CZEmA1Fz0rbQyKyqrkIW5ruIQRGXfDstvfmrkfVKpZsZGp0ET0SgT645wWXR0qdijyyK71Sc0Nbz36NJMwkqPBDq7uEaIvfGOHWV0WeygR70JAvc9%2BZuavobvFeThk3WZD9gXUWuXwDRVv%2BbQbEeh%2Fuu5bkDED%2Bu0iIkEjt8HeDDYHkk7jKddUqQRUfwbFFuW0o%2FKfASoxEXtE4T4m%2FeqDs4wrjim9CZFxM5QAWx08g0YhV3D6z6XjMF5cjTzKbpIz%2ByaOWp85woLZudku3wJw3ZeIiWqo60dj%2BfZstXry15dQFrmxIIrJPoivVtNOE8H9EMISLob8GOqUBB9LC4xXzPhtvqqeXsWhwLp62q%2Bq8otGnUcIj2vq%2F21QWfXsa6UwgC7SkHNPBt8MGEUMRC43W%2FyjtlRrcGm7ITBp2PjxyA901%2FZBEkEtkn63KuCmAdv%2FNStmLtG%2BWEExR6Me2rySVdVvCjgGLIsyYpxCf7lemOmoBiHC3QSdJB766DXmA57PPtLSdXRkeAx2FgGCjOR4pvYobxuGea818Bq4tqmWK&X-Amz-Signature=e4d136a130705db76aca9d7bdd519ab9e784f30abea8b90713c620efae953cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXEIW44F%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCY%2BVczw2vd5IcVdnGzUoqgg5RgPs32MH7sHr49Hy3rbgIgS2uqJJwUsF%2BuxuSSYtnKrOteiYjSDFOMQEUyWN3102Eq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLFmilyH8Td29SriiSrcA9OhfSWjL6D9nyR3juV5QPM%2F%2F2rz%2F%2BrPUbYT1AAEaZ3pwmlw%2BTUoHplJg1lKGhuaB8mjHDppHm8kFcz%2Fk%2FLjKrDxQ0vt%2FOfU2MvVSrPB3uA2pr6XSQ4DK%2BI8ykIaWi7hR%2Fvgnn3Kvs8PlvgCyu959PjuQQ%2BtmP%2BwAWC%2BiRoh598r1%2B9qAaYzR5ySGz9ZVlTNhEoe7XBOWlpEzKYrRJ5kPiSaftEjMl1JC50ujjAy8QMU4lorKw0Ns6319lLOgCmGjpziLzwUAx0yYDTzyTZjXwB%2FO4zDj1zCK%2BkcwxaVKFj7N%2BZmgo75Vw7f1CZEmA1Fz0rbQyKyqrkIW5ruIQRGXfDstvfmrkfVKpZsZGp0ET0SgT645wWXR0qdijyyK71Sc0Nbz36NJMwkqPBDq7uEaIvfGOHWV0WeygR70JAvc9%2BZuavobvFeThk3WZD9gXUWuXwDRVv%2BbQbEeh%2Fuu5bkDED%2Bu0iIkEjt8HeDDYHkk7jKddUqQRUfwbFFuW0o%2FKfASoxEXtE4T4m%2FeqDs4wrjim9CZFxM5QAWx08g0YhV3D6z6XjMF5cjTzKbpIz%2ByaOWp85woLZudku3wJw3ZeIiWqo60dj%2BfZstXry15dQFrmxIIrJPoivVtNOE8H9EMISLob8GOqUBB9LC4xXzPhtvqqeXsWhwLp62q%2Bq8otGnUcIj2vq%2F21QWfXsa6UwgC7SkHNPBt8MGEUMRC43W%2FyjtlRrcGm7ITBp2PjxyA901%2FZBEkEtkn63KuCmAdv%2FNStmLtG%2BWEExR6Me2rySVdVvCjgGLIsyYpxCf7lemOmoBiHC3QSdJB766DXmA57PPtLSdXRkeAx2FgGCjOR4pvYobxuGea818Bq4tqmWK&X-Amz-Signature=2c174a75469721403e8190f3c7049e508231b15622ddbaed4da4599b5cc36f4d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
