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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FH3CBLV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC41OIhFK16qqjGRehUfAEdHmB9Np2O2sTZLfwHx2rF9AIhAO5hA8zgY6%2FKUH2%2BwCy4mCVeP7osaq%2FG8mqYAGNfXtR6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvhWqwsWB4f3fL1SYq3APCpMc0YhgK6TisWOlX4vzFkx09JQMz4g6VMTZIDxTAONvtdZKuqRG9jwFYVVRM5IYjwXNaPGSuQgBwIoGvxi%2BFdfO72j3Rm02%2BsG%2BhLUAqeX58R11NczgpmDlhEeB%2BogrcgQnyTJMw6gemrnVQFjys3OaVRsoSqeOQ57nUagDz5T8Jiklab3Syigfvc4ewxXxLYxZOLzCmZhlMd1Dn4Lpd%2F4P6HciZlZQaghhlkeXRUNxoo1VQij2Cj7rE6DntOEbsYT%2Fh%2FaCJYWQiQd7sRHGvoFeYsaqzGbVUunboLcuKRfZblxCScpjEdIyqzzBTlRLyx2xCdJF8Rl88E3cKK9UeRp9sBiiEUOEbicRxa2W2Qd0hjq1TyDuwqlBuqCUVgP%2B0LVOZWvpXSEw38PkM62QmQpZSDYLEbBzvGt0M8LS0ZdY8Ri4n649R5jIJAO3e7Lc3An2K8AazqJPNUvBHJ7zilqJ8md3zxQYrJY21g1ZMC%2F555RHHn5n%2Bbj4qd7EKHpZ0UMoAeEIDnfHw0Cd34oXhkfgitt8Ti6ZWw7Bo7gQ1VdWkwD5GV2x9bMQQFuJFlo8rKsfcuUBqiBlXCKgkCDX5HW9Yw7Yt12Qo6h8XrO7JJr5Zn%2FY3oInxVKFW3zDej6zCBjqkASN5ffkVI3dHt2kAP3LjRb%2Fp5tB5KOIEfzTozuzXhmWRslSghhWQ3hWmMPgyFSLBjaWtxqr%2FwOicYyrQ0bHXzEs5qMRCcg4Z57VAOVPtKdvQkWwSHq6HfAVf2UCZbhC9LFYLGgghcfhywDcAj84DRTq9sOeTZEyuwN%2Bn%2FIduaBtIZwAED1d%2BISTKocvIJZR%2BeZu%2FNHWlmRuiA0IoxgublFQZwLTs&X-Amz-Signature=9f015215fcc0172989cca6e0d3a14536da276b86a0888526e986b8b55e4e95f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FH3CBLV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC41OIhFK16qqjGRehUfAEdHmB9Np2O2sTZLfwHx2rF9AIhAO5hA8zgY6%2FKUH2%2BwCy4mCVeP7osaq%2FG8mqYAGNfXtR6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvhWqwsWB4f3fL1SYq3APCpMc0YhgK6TisWOlX4vzFkx09JQMz4g6VMTZIDxTAONvtdZKuqRG9jwFYVVRM5IYjwXNaPGSuQgBwIoGvxi%2BFdfO72j3Rm02%2BsG%2BhLUAqeX58R11NczgpmDlhEeB%2BogrcgQnyTJMw6gemrnVQFjys3OaVRsoSqeOQ57nUagDz5T8Jiklab3Syigfvc4ewxXxLYxZOLzCmZhlMd1Dn4Lpd%2F4P6HciZlZQaghhlkeXRUNxoo1VQij2Cj7rE6DntOEbsYT%2Fh%2FaCJYWQiQd7sRHGvoFeYsaqzGbVUunboLcuKRfZblxCScpjEdIyqzzBTlRLyx2xCdJF8Rl88E3cKK9UeRp9sBiiEUOEbicRxa2W2Qd0hjq1TyDuwqlBuqCUVgP%2B0LVOZWvpXSEw38PkM62QmQpZSDYLEbBzvGt0M8LS0ZdY8Ri4n649R5jIJAO3e7Lc3An2K8AazqJPNUvBHJ7zilqJ8md3zxQYrJY21g1ZMC%2F555RHHn5n%2Bbj4qd7EKHpZ0UMoAeEIDnfHw0Cd34oXhkfgitt8Ti6ZWw7Bo7gQ1VdWkwD5GV2x9bMQQFuJFlo8rKsfcuUBqiBlXCKgkCDX5HW9Yw7Yt12Qo6h8XrO7JJr5Zn%2FY3oInxVKFW3zDej6zCBjqkASN5ffkVI3dHt2kAP3LjRb%2Fp5tB5KOIEfzTozuzXhmWRslSghhWQ3hWmMPgyFSLBjaWtxqr%2FwOicYyrQ0bHXzEs5qMRCcg4Z57VAOVPtKdvQkWwSHq6HfAVf2UCZbhC9LFYLGgghcfhywDcAj84DRTq9sOeTZEyuwN%2Bn%2FIduaBtIZwAED1d%2BISTKocvIJZR%2BeZu%2FNHWlmRuiA0IoxgublFQZwLTs&X-Amz-Signature=d1111b6680f018e625c6fe41a8da7e0677cf4a078ec8f08d76a31a5ad9cfa5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FH3CBLV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC41OIhFK16qqjGRehUfAEdHmB9Np2O2sTZLfwHx2rF9AIhAO5hA8zgY6%2FKUH2%2BwCy4mCVeP7osaq%2FG8mqYAGNfXtR6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvhWqwsWB4f3fL1SYq3APCpMc0YhgK6TisWOlX4vzFkx09JQMz4g6VMTZIDxTAONvtdZKuqRG9jwFYVVRM5IYjwXNaPGSuQgBwIoGvxi%2BFdfO72j3Rm02%2BsG%2BhLUAqeX58R11NczgpmDlhEeB%2BogrcgQnyTJMw6gemrnVQFjys3OaVRsoSqeOQ57nUagDz5T8Jiklab3Syigfvc4ewxXxLYxZOLzCmZhlMd1Dn4Lpd%2F4P6HciZlZQaghhlkeXRUNxoo1VQij2Cj7rE6DntOEbsYT%2Fh%2FaCJYWQiQd7sRHGvoFeYsaqzGbVUunboLcuKRfZblxCScpjEdIyqzzBTlRLyx2xCdJF8Rl88E3cKK9UeRp9sBiiEUOEbicRxa2W2Qd0hjq1TyDuwqlBuqCUVgP%2B0LVOZWvpXSEw38PkM62QmQpZSDYLEbBzvGt0M8LS0ZdY8Ri4n649R5jIJAO3e7Lc3An2K8AazqJPNUvBHJ7zilqJ8md3zxQYrJY21g1ZMC%2F555RHHn5n%2Bbj4qd7EKHpZ0UMoAeEIDnfHw0Cd34oXhkfgitt8Ti6ZWw7Bo7gQ1VdWkwD5GV2x9bMQQFuJFlo8rKsfcuUBqiBlXCKgkCDX5HW9Yw7Yt12Qo6h8XrO7JJr5Zn%2FY3oInxVKFW3zDej6zCBjqkASN5ffkVI3dHt2kAP3LjRb%2Fp5tB5KOIEfzTozuzXhmWRslSghhWQ3hWmMPgyFSLBjaWtxqr%2FwOicYyrQ0bHXzEs5qMRCcg4Z57VAOVPtKdvQkWwSHq6HfAVf2UCZbhC9LFYLGgghcfhywDcAj84DRTq9sOeTZEyuwN%2Bn%2FIduaBtIZwAED1d%2BISTKocvIJZR%2BeZu%2FNHWlmRuiA0IoxgublFQZwLTs&X-Amz-Signature=a63d44cd595c1a310a2d7ec3315634665f5f620993cb463fb7e4736f6c4551c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FH3CBLV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC41OIhFK16qqjGRehUfAEdHmB9Np2O2sTZLfwHx2rF9AIhAO5hA8zgY6%2FKUH2%2BwCy4mCVeP7osaq%2FG8mqYAGNfXtR6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvhWqwsWB4f3fL1SYq3APCpMc0YhgK6TisWOlX4vzFkx09JQMz4g6VMTZIDxTAONvtdZKuqRG9jwFYVVRM5IYjwXNaPGSuQgBwIoGvxi%2BFdfO72j3Rm02%2BsG%2BhLUAqeX58R11NczgpmDlhEeB%2BogrcgQnyTJMw6gemrnVQFjys3OaVRsoSqeOQ57nUagDz5T8Jiklab3Syigfvc4ewxXxLYxZOLzCmZhlMd1Dn4Lpd%2F4P6HciZlZQaghhlkeXRUNxoo1VQij2Cj7rE6DntOEbsYT%2Fh%2FaCJYWQiQd7sRHGvoFeYsaqzGbVUunboLcuKRfZblxCScpjEdIyqzzBTlRLyx2xCdJF8Rl88E3cKK9UeRp9sBiiEUOEbicRxa2W2Qd0hjq1TyDuwqlBuqCUVgP%2B0LVOZWvpXSEw38PkM62QmQpZSDYLEbBzvGt0M8LS0ZdY8Ri4n649R5jIJAO3e7Lc3An2K8AazqJPNUvBHJ7zilqJ8md3zxQYrJY21g1ZMC%2F555RHHn5n%2Bbj4qd7EKHpZ0UMoAeEIDnfHw0Cd34oXhkfgitt8Ti6ZWw7Bo7gQ1VdWkwD5GV2x9bMQQFuJFlo8rKsfcuUBqiBlXCKgkCDX5HW9Yw7Yt12Qo6h8XrO7JJr5Zn%2FY3oInxVKFW3zDej6zCBjqkASN5ffkVI3dHt2kAP3LjRb%2Fp5tB5KOIEfzTozuzXhmWRslSghhWQ3hWmMPgyFSLBjaWtxqr%2FwOicYyrQ0bHXzEs5qMRCcg4Z57VAOVPtKdvQkWwSHq6HfAVf2UCZbhC9LFYLGgghcfhywDcAj84DRTq9sOeTZEyuwN%2Bn%2FIduaBtIZwAED1d%2BISTKocvIJZR%2BeZu%2FNHWlmRuiA0IoxgublFQZwLTs&X-Amz-Signature=babb5dc943921f91b1fcfde12df903e0e678d44704cb0f357fa7e833a81c40f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FH3CBLV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC41OIhFK16qqjGRehUfAEdHmB9Np2O2sTZLfwHx2rF9AIhAO5hA8zgY6%2FKUH2%2BwCy4mCVeP7osaq%2FG8mqYAGNfXtR6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvhWqwsWB4f3fL1SYq3APCpMc0YhgK6TisWOlX4vzFkx09JQMz4g6VMTZIDxTAONvtdZKuqRG9jwFYVVRM5IYjwXNaPGSuQgBwIoGvxi%2BFdfO72j3Rm02%2BsG%2BhLUAqeX58R11NczgpmDlhEeB%2BogrcgQnyTJMw6gemrnVQFjys3OaVRsoSqeOQ57nUagDz5T8Jiklab3Syigfvc4ewxXxLYxZOLzCmZhlMd1Dn4Lpd%2F4P6HciZlZQaghhlkeXRUNxoo1VQij2Cj7rE6DntOEbsYT%2Fh%2FaCJYWQiQd7sRHGvoFeYsaqzGbVUunboLcuKRfZblxCScpjEdIyqzzBTlRLyx2xCdJF8Rl88E3cKK9UeRp9sBiiEUOEbicRxa2W2Qd0hjq1TyDuwqlBuqCUVgP%2B0LVOZWvpXSEw38PkM62QmQpZSDYLEbBzvGt0M8LS0ZdY8Ri4n649R5jIJAO3e7Lc3An2K8AazqJPNUvBHJ7zilqJ8md3zxQYrJY21g1ZMC%2F555RHHn5n%2Bbj4qd7EKHpZ0UMoAeEIDnfHw0Cd34oXhkfgitt8Ti6ZWw7Bo7gQ1VdWkwD5GV2x9bMQQFuJFlo8rKsfcuUBqiBlXCKgkCDX5HW9Yw7Yt12Qo6h8XrO7JJr5Zn%2FY3oInxVKFW3zDej6zCBjqkASN5ffkVI3dHt2kAP3LjRb%2Fp5tB5KOIEfzTozuzXhmWRslSghhWQ3hWmMPgyFSLBjaWtxqr%2FwOicYyrQ0bHXzEs5qMRCcg4Z57VAOVPtKdvQkWwSHq6HfAVf2UCZbhC9LFYLGgghcfhywDcAj84DRTq9sOeTZEyuwN%2Bn%2FIduaBtIZwAED1d%2BISTKocvIJZR%2BeZu%2FNHWlmRuiA0IoxgublFQZwLTs&X-Amz-Signature=a18d49c1ce5866095e0d3abf58b07179a414da2408a8778bd0e6f21da1fa609c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FH3CBLV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC41OIhFK16qqjGRehUfAEdHmB9Np2O2sTZLfwHx2rF9AIhAO5hA8zgY6%2FKUH2%2BwCy4mCVeP7osaq%2FG8mqYAGNfXtR6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvhWqwsWB4f3fL1SYq3APCpMc0YhgK6TisWOlX4vzFkx09JQMz4g6VMTZIDxTAONvtdZKuqRG9jwFYVVRM5IYjwXNaPGSuQgBwIoGvxi%2BFdfO72j3Rm02%2BsG%2BhLUAqeX58R11NczgpmDlhEeB%2BogrcgQnyTJMw6gemrnVQFjys3OaVRsoSqeOQ57nUagDz5T8Jiklab3Syigfvc4ewxXxLYxZOLzCmZhlMd1Dn4Lpd%2F4P6HciZlZQaghhlkeXRUNxoo1VQij2Cj7rE6DntOEbsYT%2Fh%2FaCJYWQiQd7sRHGvoFeYsaqzGbVUunboLcuKRfZblxCScpjEdIyqzzBTlRLyx2xCdJF8Rl88E3cKK9UeRp9sBiiEUOEbicRxa2W2Qd0hjq1TyDuwqlBuqCUVgP%2B0LVOZWvpXSEw38PkM62QmQpZSDYLEbBzvGt0M8LS0ZdY8Ri4n649R5jIJAO3e7Lc3An2K8AazqJPNUvBHJ7zilqJ8md3zxQYrJY21g1ZMC%2F555RHHn5n%2Bbj4qd7EKHpZ0UMoAeEIDnfHw0Cd34oXhkfgitt8Ti6ZWw7Bo7gQ1VdWkwD5GV2x9bMQQFuJFlo8rKsfcuUBqiBlXCKgkCDX5HW9Yw7Yt12Qo6h8XrO7JJr5Zn%2FY3oInxVKFW3zDej6zCBjqkASN5ffkVI3dHt2kAP3LjRb%2Fp5tB5KOIEfzTozuzXhmWRslSghhWQ3hWmMPgyFSLBjaWtxqr%2FwOicYyrQ0bHXzEs5qMRCcg4Z57VAOVPtKdvQkWwSHq6HfAVf2UCZbhC9LFYLGgghcfhywDcAj84DRTq9sOeTZEyuwN%2Bn%2FIduaBtIZwAED1d%2BISTKocvIJZR%2BeZu%2FNHWlmRuiA0IoxgublFQZwLTs&X-Amz-Signature=3b53262e8393fd38c79f3149377b5d6eea931a90658d9c0b789c50c74ba50d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FH3CBLV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC41OIhFK16qqjGRehUfAEdHmB9Np2O2sTZLfwHx2rF9AIhAO5hA8zgY6%2FKUH2%2BwCy4mCVeP7osaq%2FG8mqYAGNfXtR6KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvhWqwsWB4f3fL1SYq3APCpMc0YhgK6TisWOlX4vzFkx09JQMz4g6VMTZIDxTAONvtdZKuqRG9jwFYVVRM5IYjwXNaPGSuQgBwIoGvxi%2BFdfO72j3Rm02%2BsG%2BhLUAqeX58R11NczgpmDlhEeB%2BogrcgQnyTJMw6gemrnVQFjys3OaVRsoSqeOQ57nUagDz5T8Jiklab3Syigfvc4ewxXxLYxZOLzCmZhlMd1Dn4Lpd%2F4P6HciZlZQaghhlkeXRUNxoo1VQij2Cj7rE6DntOEbsYT%2Fh%2FaCJYWQiQd7sRHGvoFeYsaqzGbVUunboLcuKRfZblxCScpjEdIyqzzBTlRLyx2xCdJF8Rl88E3cKK9UeRp9sBiiEUOEbicRxa2W2Qd0hjq1TyDuwqlBuqCUVgP%2B0LVOZWvpXSEw38PkM62QmQpZSDYLEbBzvGt0M8LS0ZdY8Ri4n649R5jIJAO3e7Lc3An2K8AazqJPNUvBHJ7zilqJ8md3zxQYrJY21g1ZMC%2F555RHHn5n%2Bbj4qd7EKHpZ0UMoAeEIDnfHw0Cd34oXhkfgitt8Ti6ZWw7Bo7gQ1VdWkwD5GV2x9bMQQFuJFlo8rKsfcuUBqiBlXCKgkCDX5HW9Yw7Yt12Qo6h8XrO7JJr5Zn%2FY3oInxVKFW3zDej6zCBjqkASN5ffkVI3dHt2kAP3LjRb%2Fp5tB5KOIEfzTozuzXhmWRslSghhWQ3hWmMPgyFSLBjaWtxqr%2FwOicYyrQ0bHXzEs5qMRCcg4Z57VAOVPtKdvQkWwSHq6HfAVf2UCZbhC9LFYLGgghcfhywDcAj84DRTq9sOeTZEyuwN%2Bn%2FIduaBtIZwAED1d%2BISTKocvIJZR%2BeZu%2FNHWlmRuiA0IoxgublFQZwLTs&X-Amz-Signature=8aded3cbf37e7d9035af3404417970186a6487d42da5ab82260f387557daaaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
