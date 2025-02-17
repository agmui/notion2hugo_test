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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRX2Z6N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDDJfZt7RBM37x7xDZYYZevwCSbxs88i8WES1rLnTAn3QIga711bAtQ2PYjqTg%2Fn9w5%2Bu407NeepIjGIYQUtaQX0GIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv3L3cl7kWEaplDeircAxRsyKMqDtUs5%2BIKMuZibKwSecd0klRcTlPcuV4kdivUetfUuPjBJlNv6TZja7ZJjrKDxDrqsu6kiVUvOL4PeDnYBkoVzpHWweTOFwfWz8NvO5PrS%2BQsZ3t8zlgCSVp2lZw7YVT9WUj6j6fFue1P6B2JJ9HCX5x4W%2F6sZ1XLJhuWd8z4uRG3gTMja8jWEXxlNNmxUA4TrcVd92eRJ67rFAZxSqzNPG3jdgMiK1FKDA043TyHJmWh8XLp8MOXQTuDv1vBzIv%2B0qD8CtjjJST7tiucnq1o3edbsw7seQ2jCArhQGUKMeZXirMWGyQJP9Hme8a2Yt4VvS%2BQfxLbo6FwOf1UlMtcnye%2BDUAslmUfUdBoCB9%2FiHlHIb2MlfwOp7tfbSahlmqlZOZh9QGcwCT6zZbPvmmrBEMEYkWq6QyncuGoYN%2Fcd5RKE5rVd6zN%2BsjEo3bs1Y01h4S5cCSiBYRXYwWmV%2FWBVYYBm4lTvmT9gguvCIVgEvq7wupAgd7G4J3YsEw%2BVx1xWcBDJgkEj25TcjO3h8gDbYIxp%2BG4bZ0LqXf3NWzXbPqMfFWKVPfhaLO%2FiXHTg9ls5Vjaigcn1TiI4p61eYtcMbm4rnK6SAuK6f4NkbHzc4ddHK4MuCICMK3Dzb0GOqUBVEDZiIvCb7LBm%2FqXkBH17auv8UuMGt1EE2owKCEEUN1JyZQ4ZQr9L6%2FKTsL1sJS76P6NEEyxeftCZbvEfeja1aIiGgVwDMG7cfQsMzY3R2lj3onIeu2WbbY2%2BQrzWMnUNBK4s10cjzTcw7dcSoXV5Fc9zAl3gai6wc6XNy0IvpzQ77T%2B0h8ZEz3O66gFMwsfQ5gDPUK94stQLnnebZyX%2F%2BoWVx30&X-Amz-Signature=21b019a07dcfdae89b543b36c790c2676c57ef8cbb200d9ebbc19c8890fd77ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRX2Z6N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDDJfZt7RBM37x7xDZYYZevwCSbxs88i8WES1rLnTAn3QIga711bAtQ2PYjqTg%2Fn9w5%2Bu407NeepIjGIYQUtaQX0GIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv3L3cl7kWEaplDeircAxRsyKMqDtUs5%2BIKMuZibKwSecd0klRcTlPcuV4kdivUetfUuPjBJlNv6TZja7ZJjrKDxDrqsu6kiVUvOL4PeDnYBkoVzpHWweTOFwfWz8NvO5PrS%2BQsZ3t8zlgCSVp2lZw7YVT9WUj6j6fFue1P6B2JJ9HCX5x4W%2F6sZ1XLJhuWd8z4uRG3gTMja8jWEXxlNNmxUA4TrcVd92eRJ67rFAZxSqzNPG3jdgMiK1FKDA043TyHJmWh8XLp8MOXQTuDv1vBzIv%2B0qD8CtjjJST7tiucnq1o3edbsw7seQ2jCArhQGUKMeZXirMWGyQJP9Hme8a2Yt4VvS%2BQfxLbo6FwOf1UlMtcnye%2BDUAslmUfUdBoCB9%2FiHlHIb2MlfwOp7tfbSahlmqlZOZh9QGcwCT6zZbPvmmrBEMEYkWq6QyncuGoYN%2Fcd5RKE5rVd6zN%2BsjEo3bs1Y01h4S5cCSiBYRXYwWmV%2FWBVYYBm4lTvmT9gguvCIVgEvq7wupAgd7G4J3YsEw%2BVx1xWcBDJgkEj25TcjO3h8gDbYIxp%2BG4bZ0LqXf3NWzXbPqMfFWKVPfhaLO%2FiXHTg9ls5Vjaigcn1TiI4p61eYtcMbm4rnK6SAuK6f4NkbHzc4ddHK4MuCICMK3Dzb0GOqUBVEDZiIvCb7LBm%2FqXkBH17auv8UuMGt1EE2owKCEEUN1JyZQ4ZQr9L6%2FKTsL1sJS76P6NEEyxeftCZbvEfeja1aIiGgVwDMG7cfQsMzY3R2lj3onIeu2WbbY2%2BQrzWMnUNBK4s10cjzTcw7dcSoXV5Fc9zAl3gai6wc6XNy0IvpzQ77T%2B0h8ZEz3O66gFMwsfQ5gDPUK94stQLnnebZyX%2F%2BoWVx30&X-Amz-Signature=090f4e3ab0048313e01f63442b30e24e59b57acf1b15a57bd0c08af9cacea8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRX2Z6N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDDJfZt7RBM37x7xDZYYZevwCSbxs88i8WES1rLnTAn3QIga711bAtQ2PYjqTg%2Fn9w5%2Bu407NeepIjGIYQUtaQX0GIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv3L3cl7kWEaplDeircAxRsyKMqDtUs5%2BIKMuZibKwSecd0klRcTlPcuV4kdivUetfUuPjBJlNv6TZja7ZJjrKDxDrqsu6kiVUvOL4PeDnYBkoVzpHWweTOFwfWz8NvO5PrS%2BQsZ3t8zlgCSVp2lZw7YVT9WUj6j6fFue1P6B2JJ9HCX5x4W%2F6sZ1XLJhuWd8z4uRG3gTMja8jWEXxlNNmxUA4TrcVd92eRJ67rFAZxSqzNPG3jdgMiK1FKDA043TyHJmWh8XLp8MOXQTuDv1vBzIv%2B0qD8CtjjJST7tiucnq1o3edbsw7seQ2jCArhQGUKMeZXirMWGyQJP9Hme8a2Yt4VvS%2BQfxLbo6FwOf1UlMtcnye%2BDUAslmUfUdBoCB9%2FiHlHIb2MlfwOp7tfbSahlmqlZOZh9QGcwCT6zZbPvmmrBEMEYkWq6QyncuGoYN%2Fcd5RKE5rVd6zN%2BsjEo3bs1Y01h4S5cCSiBYRXYwWmV%2FWBVYYBm4lTvmT9gguvCIVgEvq7wupAgd7G4J3YsEw%2BVx1xWcBDJgkEj25TcjO3h8gDbYIxp%2BG4bZ0LqXf3NWzXbPqMfFWKVPfhaLO%2FiXHTg9ls5Vjaigcn1TiI4p61eYtcMbm4rnK6SAuK6f4NkbHzc4ddHK4MuCICMK3Dzb0GOqUBVEDZiIvCb7LBm%2FqXkBH17auv8UuMGt1EE2owKCEEUN1JyZQ4ZQr9L6%2FKTsL1sJS76P6NEEyxeftCZbvEfeja1aIiGgVwDMG7cfQsMzY3R2lj3onIeu2WbbY2%2BQrzWMnUNBK4s10cjzTcw7dcSoXV5Fc9zAl3gai6wc6XNy0IvpzQ77T%2B0h8ZEz3O66gFMwsfQ5gDPUK94stQLnnebZyX%2F%2BoWVx30&X-Amz-Signature=ad3cd533dc796a0f58b49896223136535d6cda7798214140f2904dc544317938&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRX2Z6N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDDJfZt7RBM37x7xDZYYZevwCSbxs88i8WES1rLnTAn3QIga711bAtQ2PYjqTg%2Fn9w5%2Bu407NeepIjGIYQUtaQX0GIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv3L3cl7kWEaplDeircAxRsyKMqDtUs5%2BIKMuZibKwSecd0klRcTlPcuV4kdivUetfUuPjBJlNv6TZja7ZJjrKDxDrqsu6kiVUvOL4PeDnYBkoVzpHWweTOFwfWz8NvO5PrS%2BQsZ3t8zlgCSVp2lZw7YVT9WUj6j6fFue1P6B2JJ9HCX5x4W%2F6sZ1XLJhuWd8z4uRG3gTMja8jWEXxlNNmxUA4TrcVd92eRJ67rFAZxSqzNPG3jdgMiK1FKDA043TyHJmWh8XLp8MOXQTuDv1vBzIv%2B0qD8CtjjJST7tiucnq1o3edbsw7seQ2jCArhQGUKMeZXirMWGyQJP9Hme8a2Yt4VvS%2BQfxLbo6FwOf1UlMtcnye%2BDUAslmUfUdBoCB9%2FiHlHIb2MlfwOp7tfbSahlmqlZOZh9QGcwCT6zZbPvmmrBEMEYkWq6QyncuGoYN%2Fcd5RKE5rVd6zN%2BsjEo3bs1Y01h4S5cCSiBYRXYwWmV%2FWBVYYBm4lTvmT9gguvCIVgEvq7wupAgd7G4J3YsEw%2BVx1xWcBDJgkEj25TcjO3h8gDbYIxp%2BG4bZ0LqXf3NWzXbPqMfFWKVPfhaLO%2FiXHTg9ls5Vjaigcn1TiI4p61eYtcMbm4rnK6SAuK6f4NkbHzc4ddHK4MuCICMK3Dzb0GOqUBVEDZiIvCb7LBm%2FqXkBH17auv8UuMGt1EE2owKCEEUN1JyZQ4ZQr9L6%2FKTsL1sJS76P6NEEyxeftCZbvEfeja1aIiGgVwDMG7cfQsMzY3R2lj3onIeu2WbbY2%2BQrzWMnUNBK4s10cjzTcw7dcSoXV5Fc9zAl3gai6wc6XNy0IvpzQ77T%2B0h8ZEz3O66gFMwsfQ5gDPUK94stQLnnebZyX%2F%2BoWVx30&X-Amz-Signature=4869c9a45201c8cd997afc197364d2a3b44670cdd0a716702f8af1e0446d8134&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRX2Z6N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDDJfZt7RBM37x7xDZYYZevwCSbxs88i8WES1rLnTAn3QIga711bAtQ2PYjqTg%2Fn9w5%2Bu407NeepIjGIYQUtaQX0GIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv3L3cl7kWEaplDeircAxRsyKMqDtUs5%2BIKMuZibKwSecd0klRcTlPcuV4kdivUetfUuPjBJlNv6TZja7ZJjrKDxDrqsu6kiVUvOL4PeDnYBkoVzpHWweTOFwfWz8NvO5PrS%2BQsZ3t8zlgCSVp2lZw7YVT9WUj6j6fFue1P6B2JJ9HCX5x4W%2F6sZ1XLJhuWd8z4uRG3gTMja8jWEXxlNNmxUA4TrcVd92eRJ67rFAZxSqzNPG3jdgMiK1FKDA043TyHJmWh8XLp8MOXQTuDv1vBzIv%2B0qD8CtjjJST7tiucnq1o3edbsw7seQ2jCArhQGUKMeZXirMWGyQJP9Hme8a2Yt4VvS%2BQfxLbo6FwOf1UlMtcnye%2BDUAslmUfUdBoCB9%2FiHlHIb2MlfwOp7tfbSahlmqlZOZh9QGcwCT6zZbPvmmrBEMEYkWq6QyncuGoYN%2Fcd5RKE5rVd6zN%2BsjEo3bs1Y01h4S5cCSiBYRXYwWmV%2FWBVYYBm4lTvmT9gguvCIVgEvq7wupAgd7G4J3YsEw%2BVx1xWcBDJgkEj25TcjO3h8gDbYIxp%2BG4bZ0LqXf3NWzXbPqMfFWKVPfhaLO%2FiXHTg9ls5Vjaigcn1TiI4p61eYtcMbm4rnK6SAuK6f4NkbHzc4ddHK4MuCICMK3Dzb0GOqUBVEDZiIvCb7LBm%2FqXkBH17auv8UuMGt1EE2owKCEEUN1JyZQ4ZQr9L6%2FKTsL1sJS76P6NEEyxeftCZbvEfeja1aIiGgVwDMG7cfQsMzY3R2lj3onIeu2WbbY2%2BQrzWMnUNBK4s10cjzTcw7dcSoXV5Fc9zAl3gai6wc6XNy0IvpzQ77T%2B0h8ZEz3O66gFMwsfQ5gDPUK94stQLnnebZyX%2F%2BoWVx30&X-Amz-Signature=902035939643af245e002fb1f485f6d554ad9e191231491a4c7852eef725b8b6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRX2Z6N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDDJfZt7RBM37x7xDZYYZevwCSbxs88i8WES1rLnTAn3QIga711bAtQ2PYjqTg%2Fn9w5%2Bu407NeepIjGIYQUtaQX0GIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv3L3cl7kWEaplDeircAxRsyKMqDtUs5%2BIKMuZibKwSecd0klRcTlPcuV4kdivUetfUuPjBJlNv6TZja7ZJjrKDxDrqsu6kiVUvOL4PeDnYBkoVzpHWweTOFwfWz8NvO5PrS%2BQsZ3t8zlgCSVp2lZw7YVT9WUj6j6fFue1P6B2JJ9HCX5x4W%2F6sZ1XLJhuWd8z4uRG3gTMja8jWEXxlNNmxUA4TrcVd92eRJ67rFAZxSqzNPG3jdgMiK1FKDA043TyHJmWh8XLp8MOXQTuDv1vBzIv%2B0qD8CtjjJST7tiucnq1o3edbsw7seQ2jCArhQGUKMeZXirMWGyQJP9Hme8a2Yt4VvS%2BQfxLbo6FwOf1UlMtcnye%2BDUAslmUfUdBoCB9%2FiHlHIb2MlfwOp7tfbSahlmqlZOZh9QGcwCT6zZbPvmmrBEMEYkWq6QyncuGoYN%2Fcd5RKE5rVd6zN%2BsjEo3bs1Y01h4S5cCSiBYRXYwWmV%2FWBVYYBm4lTvmT9gguvCIVgEvq7wupAgd7G4J3YsEw%2BVx1xWcBDJgkEj25TcjO3h8gDbYIxp%2BG4bZ0LqXf3NWzXbPqMfFWKVPfhaLO%2FiXHTg9ls5Vjaigcn1TiI4p61eYtcMbm4rnK6SAuK6f4NkbHzc4ddHK4MuCICMK3Dzb0GOqUBVEDZiIvCb7LBm%2FqXkBH17auv8UuMGt1EE2owKCEEUN1JyZQ4ZQr9L6%2FKTsL1sJS76P6NEEyxeftCZbvEfeja1aIiGgVwDMG7cfQsMzY3R2lj3onIeu2WbbY2%2BQrzWMnUNBK4s10cjzTcw7dcSoXV5Fc9zAl3gai6wc6XNy0IvpzQ77T%2B0h8ZEz3O66gFMwsfQ5gDPUK94stQLnnebZyX%2F%2BoWVx30&X-Amz-Signature=c9a84ee59081dd8858d000c52fde419c1831e2fa9552a53c035a2af7896b0ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRX2Z6N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDDJfZt7RBM37x7xDZYYZevwCSbxs88i8WES1rLnTAn3QIga711bAtQ2PYjqTg%2Fn9w5%2Bu407NeepIjGIYQUtaQX0GIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJv3L3cl7kWEaplDeircAxRsyKMqDtUs5%2BIKMuZibKwSecd0klRcTlPcuV4kdivUetfUuPjBJlNv6TZja7ZJjrKDxDrqsu6kiVUvOL4PeDnYBkoVzpHWweTOFwfWz8NvO5PrS%2BQsZ3t8zlgCSVp2lZw7YVT9WUj6j6fFue1P6B2JJ9HCX5x4W%2F6sZ1XLJhuWd8z4uRG3gTMja8jWEXxlNNmxUA4TrcVd92eRJ67rFAZxSqzNPG3jdgMiK1FKDA043TyHJmWh8XLp8MOXQTuDv1vBzIv%2B0qD8CtjjJST7tiucnq1o3edbsw7seQ2jCArhQGUKMeZXirMWGyQJP9Hme8a2Yt4VvS%2BQfxLbo6FwOf1UlMtcnye%2BDUAslmUfUdBoCB9%2FiHlHIb2MlfwOp7tfbSahlmqlZOZh9QGcwCT6zZbPvmmrBEMEYkWq6QyncuGoYN%2Fcd5RKE5rVd6zN%2BsjEo3bs1Y01h4S5cCSiBYRXYwWmV%2FWBVYYBm4lTvmT9gguvCIVgEvq7wupAgd7G4J3YsEw%2BVx1xWcBDJgkEj25TcjO3h8gDbYIxp%2BG4bZ0LqXf3NWzXbPqMfFWKVPfhaLO%2FiXHTg9ls5Vjaigcn1TiI4p61eYtcMbm4rnK6SAuK6f4NkbHzc4ddHK4MuCICMK3Dzb0GOqUBVEDZiIvCb7LBm%2FqXkBH17auv8UuMGt1EE2owKCEEUN1JyZQ4ZQr9L6%2FKTsL1sJS76P6NEEyxeftCZbvEfeja1aIiGgVwDMG7cfQsMzY3R2lj3onIeu2WbbY2%2BQrzWMnUNBK4s10cjzTcw7dcSoXV5Fc9zAl3gai6wc6XNy0IvpzQ77T%2B0h8ZEz3O66gFMwsfQ5gDPUK94stQLnnebZyX%2F%2BoWVx30&X-Amz-Signature=89ec708ee811a994dc305c6b814f34a868f29c6a1ae3b1cd23fd327d46dc44d2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
