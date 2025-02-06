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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3M4IQK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAzKrKn5f1ntzi6d%2BfSelVbFZzz%2Fx3R%2BS204RZNHDTq5AiEAy%2Bl23XarxFhkzy%2FKgVk1WXbpw3GRqZXHeXy2v7yPW4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLgJLCXczYugIYGAtyrcA68jjdllaq4%2BH%2Bfm2VQAL6IndIV6c7ZOSFSESzW9Ik6tpWFxX19VyMnjk0O1Oa0helsY5hWKBvFST75TxdFxha1BaGnwjxJr%2FxNbjYQdBVqA2VM%2FuQF5tvlQPV0qHSznZCvKKReaiUmWAhOzfUlU7lGFPWN2sMgjttPRYGx0aIcJiDUpBgaZwrwcWJ%2FHTv%2FfSFDhXO45m9vEkalx9Sbxp6sWV5WBLYtVpRb%2FXAVVHLJzAzhFRd07zVV0jb3PpjTsBr1DGUR44bzjq%2FEM5wHHpU2a6wKmodo9aFt3jzY9EvKIbn4036PJXkLaW6NdP56f1KnCvO64%2F%2FgNvFwGKJJm7edpeEEc1HY3rGaU9Q6s%2BvKMf5k59pVZ12C5gb7bEKVpKP%2Bm3fuUQB3%2BfAhH1DryMQhG3xB4L1e0UgK855zht95hd1UUV3E5Eef3mD4rt9iO6pHXRvEr9QLsGTzyikzzAO0deqnl%2Ft%2FrFA2gikyGAdOAHuXgpb48tW9A2aFypf8NWT708kWKqiTZlwHyIag8VY4dvopLlHwmIcQUDrKVoI5tMDZiFQ%2Bmc%2F2e9aqrjUyKWPpibwE8oZWZaIprMyxzIncLDii8eHiQRsEcBTCcgrW8SGhGmCB0POFvPqoMMPa4lL0GOqUB%2BR04aWaaPGJhN4CAGTserLAJGA8MsuP8oTQZLoxKT9hNGgdrgOkKxdXGN8PHqqEV1RjE4ApJEMXLXEp%2Byy64VrcSQ5rRD7nWxwcV%2FTDjLWcjcJu3Nt21RTJg8WGx%2BHm%2FzG8%2BpNZn99a6rbyqeFa%2BD06VTEX5dTo%2F7mZMChsaFZKZzJnU3hxH9Uv%2BlMvsNijth6%2Bz%2FF3Rb6GK1VMKKhTZgB6ZyDsK&X-Amz-Signature=e8082e3746870c96d9db4036a522147362407af58c4676d3e2c20e3372be0a46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3M4IQK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAzKrKn5f1ntzi6d%2BfSelVbFZzz%2Fx3R%2BS204RZNHDTq5AiEAy%2Bl23XarxFhkzy%2FKgVk1WXbpw3GRqZXHeXy2v7yPW4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLgJLCXczYugIYGAtyrcA68jjdllaq4%2BH%2Bfm2VQAL6IndIV6c7ZOSFSESzW9Ik6tpWFxX19VyMnjk0O1Oa0helsY5hWKBvFST75TxdFxha1BaGnwjxJr%2FxNbjYQdBVqA2VM%2FuQF5tvlQPV0qHSznZCvKKReaiUmWAhOzfUlU7lGFPWN2sMgjttPRYGx0aIcJiDUpBgaZwrwcWJ%2FHTv%2FfSFDhXO45m9vEkalx9Sbxp6sWV5WBLYtVpRb%2FXAVVHLJzAzhFRd07zVV0jb3PpjTsBr1DGUR44bzjq%2FEM5wHHpU2a6wKmodo9aFt3jzY9EvKIbn4036PJXkLaW6NdP56f1KnCvO64%2F%2FgNvFwGKJJm7edpeEEc1HY3rGaU9Q6s%2BvKMf5k59pVZ12C5gb7bEKVpKP%2Bm3fuUQB3%2BfAhH1DryMQhG3xB4L1e0UgK855zht95hd1UUV3E5Eef3mD4rt9iO6pHXRvEr9QLsGTzyikzzAO0deqnl%2Ft%2FrFA2gikyGAdOAHuXgpb48tW9A2aFypf8NWT708kWKqiTZlwHyIag8VY4dvopLlHwmIcQUDrKVoI5tMDZiFQ%2Bmc%2F2e9aqrjUyKWPpibwE8oZWZaIprMyxzIncLDii8eHiQRsEcBTCcgrW8SGhGmCB0POFvPqoMMPa4lL0GOqUB%2BR04aWaaPGJhN4CAGTserLAJGA8MsuP8oTQZLoxKT9hNGgdrgOkKxdXGN8PHqqEV1RjE4ApJEMXLXEp%2Byy64VrcSQ5rRD7nWxwcV%2FTDjLWcjcJu3Nt21RTJg8WGx%2BHm%2FzG8%2BpNZn99a6rbyqeFa%2BD06VTEX5dTo%2F7mZMChsaFZKZzJnU3hxH9Uv%2BlMvsNijth6%2Bz%2FF3Rb6GK1VMKKhTZgB6ZyDsK&X-Amz-Signature=98c31e175defa403d0c570b576ad72480729038c58b5ba1ce9ba806dc0bea6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3M4IQK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAzKrKn5f1ntzi6d%2BfSelVbFZzz%2Fx3R%2BS204RZNHDTq5AiEAy%2Bl23XarxFhkzy%2FKgVk1WXbpw3GRqZXHeXy2v7yPW4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLgJLCXczYugIYGAtyrcA68jjdllaq4%2BH%2Bfm2VQAL6IndIV6c7ZOSFSESzW9Ik6tpWFxX19VyMnjk0O1Oa0helsY5hWKBvFST75TxdFxha1BaGnwjxJr%2FxNbjYQdBVqA2VM%2FuQF5tvlQPV0qHSznZCvKKReaiUmWAhOzfUlU7lGFPWN2sMgjttPRYGx0aIcJiDUpBgaZwrwcWJ%2FHTv%2FfSFDhXO45m9vEkalx9Sbxp6sWV5WBLYtVpRb%2FXAVVHLJzAzhFRd07zVV0jb3PpjTsBr1DGUR44bzjq%2FEM5wHHpU2a6wKmodo9aFt3jzY9EvKIbn4036PJXkLaW6NdP56f1KnCvO64%2F%2FgNvFwGKJJm7edpeEEc1HY3rGaU9Q6s%2BvKMf5k59pVZ12C5gb7bEKVpKP%2Bm3fuUQB3%2BfAhH1DryMQhG3xB4L1e0UgK855zht95hd1UUV3E5Eef3mD4rt9iO6pHXRvEr9QLsGTzyikzzAO0deqnl%2Ft%2FrFA2gikyGAdOAHuXgpb48tW9A2aFypf8NWT708kWKqiTZlwHyIag8VY4dvopLlHwmIcQUDrKVoI5tMDZiFQ%2Bmc%2F2e9aqrjUyKWPpibwE8oZWZaIprMyxzIncLDii8eHiQRsEcBTCcgrW8SGhGmCB0POFvPqoMMPa4lL0GOqUB%2BR04aWaaPGJhN4CAGTserLAJGA8MsuP8oTQZLoxKT9hNGgdrgOkKxdXGN8PHqqEV1RjE4ApJEMXLXEp%2Byy64VrcSQ5rRD7nWxwcV%2FTDjLWcjcJu3Nt21RTJg8WGx%2BHm%2FzG8%2BpNZn99a6rbyqeFa%2BD06VTEX5dTo%2F7mZMChsaFZKZzJnU3hxH9Uv%2BlMvsNijth6%2Bz%2FF3Rb6GK1VMKKhTZgB6ZyDsK&X-Amz-Signature=f01523152eea35af57da6351ef10db13fa0a16380b8746dc085cabbc3ffc6443&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3M4IQK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAzKrKn5f1ntzi6d%2BfSelVbFZzz%2Fx3R%2BS204RZNHDTq5AiEAy%2Bl23XarxFhkzy%2FKgVk1WXbpw3GRqZXHeXy2v7yPW4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLgJLCXczYugIYGAtyrcA68jjdllaq4%2BH%2Bfm2VQAL6IndIV6c7ZOSFSESzW9Ik6tpWFxX19VyMnjk0O1Oa0helsY5hWKBvFST75TxdFxha1BaGnwjxJr%2FxNbjYQdBVqA2VM%2FuQF5tvlQPV0qHSznZCvKKReaiUmWAhOzfUlU7lGFPWN2sMgjttPRYGx0aIcJiDUpBgaZwrwcWJ%2FHTv%2FfSFDhXO45m9vEkalx9Sbxp6sWV5WBLYtVpRb%2FXAVVHLJzAzhFRd07zVV0jb3PpjTsBr1DGUR44bzjq%2FEM5wHHpU2a6wKmodo9aFt3jzY9EvKIbn4036PJXkLaW6NdP56f1KnCvO64%2F%2FgNvFwGKJJm7edpeEEc1HY3rGaU9Q6s%2BvKMf5k59pVZ12C5gb7bEKVpKP%2Bm3fuUQB3%2BfAhH1DryMQhG3xB4L1e0UgK855zht95hd1UUV3E5Eef3mD4rt9iO6pHXRvEr9QLsGTzyikzzAO0deqnl%2Ft%2FrFA2gikyGAdOAHuXgpb48tW9A2aFypf8NWT708kWKqiTZlwHyIag8VY4dvopLlHwmIcQUDrKVoI5tMDZiFQ%2Bmc%2F2e9aqrjUyKWPpibwE8oZWZaIprMyxzIncLDii8eHiQRsEcBTCcgrW8SGhGmCB0POFvPqoMMPa4lL0GOqUB%2BR04aWaaPGJhN4CAGTserLAJGA8MsuP8oTQZLoxKT9hNGgdrgOkKxdXGN8PHqqEV1RjE4ApJEMXLXEp%2Byy64VrcSQ5rRD7nWxwcV%2FTDjLWcjcJu3Nt21RTJg8WGx%2BHm%2FzG8%2BpNZn99a6rbyqeFa%2BD06VTEX5dTo%2F7mZMChsaFZKZzJnU3hxH9Uv%2BlMvsNijth6%2Bz%2FF3Rb6GK1VMKKhTZgB6ZyDsK&X-Amz-Signature=2e7f3aa1b9250bf7337bc852206341f3a704bdcc3db6a3516f1606759049e387&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3M4IQK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAzKrKn5f1ntzi6d%2BfSelVbFZzz%2Fx3R%2BS204RZNHDTq5AiEAy%2Bl23XarxFhkzy%2FKgVk1WXbpw3GRqZXHeXy2v7yPW4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLgJLCXczYugIYGAtyrcA68jjdllaq4%2BH%2Bfm2VQAL6IndIV6c7ZOSFSESzW9Ik6tpWFxX19VyMnjk0O1Oa0helsY5hWKBvFST75TxdFxha1BaGnwjxJr%2FxNbjYQdBVqA2VM%2FuQF5tvlQPV0qHSznZCvKKReaiUmWAhOzfUlU7lGFPWN2sMgjttPRYGx0aIcJiDUpBgaZwrwcWJ%2FHTv%2FfSFDhXO45m9vEkalx9Sbxp6sWV5WBLYtVpRb%2FXAVVHLJzAzhFRd07zVV0jb3PpjTsBr1DGUR44bzjq%2FEM5wHHpU2a6wKmodo9aFt3jzY9EvKIbn4036PJXkLaW6NdP56f1KnCvO64%2F%2FgNvFwGKJJm7edpeEEc1HY3rGaU9Q6s%2BvKMf5k59pVZ12C5gb7bEKVpKP%2Bm3fuUQB3%2BfAhH1DryMQhG3xB4L1e0UgK855zht95hd1UUV3E5Eef3mD4rt9iO6pHXRvEr9QLsGTzyikzzAO0deqnl%2Ft%2FrFA2gikyGAdOAHuXgpb48tW9A2aFypf8NWT708kWKqiTZlwHyIag8VY4dvopLlHwmIcQUDrKVoI5tMDZiFQ%2Bmc%2F2e9aqrjUyKWPpibwE8oZWZaIprMyxzIncLDii8eHiQRsEcBTCcgrW8SGhGmCB0POFvPqoMMPa4lL0GOqUB%2BR04aWaaPGJhN4CAGTserLAJGA8MsuP8oTQZLoxKT9hNGgdrgOkKxdXGN8PHqqEV1RjE4ApJEMXLXEp%2Byy64VrcSQ5rRD7nWxwcV%2FTDjLWcjcJu3Nt21RTJg8WGx%2BHm%2FzG8%2BpNZn99a6rbyqeFa%2BD06VTEX5dTo%2F7mZMChsaFZKZzJnU3hxH9Uv%2BlMvsNijth6%2Bz%2FF3Rb6GK1VMKKhTZgB6ZyDsK&X-Amz-Signature=dc72771c6febd1752d297fbee886521e084f5fed0507ecc99ee4a11e35118490&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3M4IQK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAzKrKn5f1ntzi6d%2BfSelVbFZzz%2Fx3R%2BS204RZNHDTq5AiEAy%2Bl23XarxFhkzy%2FKgVk1WXbpw3GRqZXHeXy2v7yPW4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLgJLCXczYugIYGAtyrcA68jjdllaq4%2BH%2Bfm2VQAL6IndIV6c7ZOSFSESzW9Ik6tpWFxX19VyMnjk0O1Oa0helsY5hWKBvFST75TxdFxha1BaGnwjxJr%2FxNbjYQdBVqA2VM%2FuQF5tvlQPV0qHSznZCvKKReaiUmWAhOzfUlU7lGFPWN2sMgjttPRYGx0aIcJiDUpBgaZwrwcWJ%2FHTv%2FfSFDhXO45m9vEkalx9Sbxp6sWV5WBLYtVpRb%2FXAVVHLJzAzhFRd07zVV0jb3PpjTsBr1DGUR44bzjq%2FEM5wHHpU2a6wKmodo9aFt3jzY9EvKIbn4036PJXkLaW6NdP56f1KnCvO64%2F%2FgNvFwGKJJm7edpeEEc1HY3rGaU9Q6s%2BvKMf5k59pVZ12C5gb7bEKVpKP%2Bm3fuUQB3%2BfAhH1DryMQhG3xB4L1e0UgK855zht95hd1UUV3E5Eef3mD4rt9iO6pHXRvEr9QLsGTzyikzzAO0deqnl%2Ft%2FrFA2gikyGAdOAHuXgpb48tW9A2aFypf8NWT708kWKqiTZlwHyIag8VY4dvopLlHwmIcQUDrKVoI5tMDZiFQ%2Bmc%2F2e9aqrjUyKWPpibwE8oZWZaIprMyxzIncLDii8eHiQRsEcBTCcgrW8SGhGmCB0POFvPqoMMPa4lL0GOqUB%2BR04aWaaPGJhN4CAGTserLAJGA8MsuP8oTQZLoxKT9hNGgdrgOkKxdXGN8PHqqEV1RjE4ApJEMXLXEp%2Byy64VrcSQ5rRD7nWxwcV%2FTDjLWcjcJu3Nt21RTJg8WGx%2BHm%2FzG8%2BpNZn99a6rbyqeFa%2BD06VTEX5dTo%2F7mZMChsaFZKZzJnU3hxH9Uv%2BlMvsNijth6%2Bz%2FF3Rb6GK1VMKKhTZgB6ZyDsK&X-Amz-Signature=9efe96c6a1987a2bba43100c0dd27ebf3689e1b98e48eff9750a065fb71d4201&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ3M4IQK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAzKrKn5f1ntzi6d%2BfSelVbFZzz%2Fx3R%2BS204RZNHDTq5AiEAy%2Bl23XarxFhkzy%2FKgVk1WXbpw3GRqZXHeXy2v7yPW4Qq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLgJLCXczYugIYGAtyrcA68jjdllaq4%2BH%2Bfm2VQAL6IndIV6c7ZOSFSESzW9Ik6tpWFxX19VyMnjk0O1Oa0helsY5hWKBvFST75TxdFxha1BaGnwjxJr%2FxNbjYQdBVqA2VM%2FuQF5tvlQPV0qHSznZCvKKReaiUmWAhOzfUlU7lGFPWN2sMgjttPRYGx0aIcJiDUpBgaZwrwcWJ%2FHTv%2FfSFDhXO45m9vEkalx9Sbxp6sWV5WBLYtVpRb%2FXAVVHLJzAzhFRd07zVV0jb3PpjTsBr1DGUR44bzjq%2FEM5wHHpU2a6wKmodo9aFt3jzY9EvKIbn4036PJXkLaW6NdP56f1KnCvO64%2F%2FgNvFwGKJJm7edpeEEc1HY3rGaU9Q6s%2BvKMf5k59pVZ12C5gb7bEKVpKP%2Bm3fuUQB3%2BfAhH1DryMQhG3xB4L1e0UgK855zht95hd1UUV3E5Eef3mD4rt9iO6pHXRvEr9QLsGTzyikzzAO0deqnl%2Ft%2FrFA2gikyGAdOAHuXgpb48tW9A2aFypf8NWT708kWKqiTZlwHyIag8VY4dvopLlHwmIcQUDrKVoI5tMDZiFQ%2Bmc%2F2e9aqrjUyKWPpibwE8oZWZaIprMyxzIncLDii8eHiQRsEcBTCcgrW8SGhGmCB0POFvPqoMMPa4lL0GOqUB%2BR04aWaaPGJhN4CAGTserLAJGA8MsuP8oTQZLoxKT9hNGgdrgOkKxdXGN8PHqqEV1RjE4ApJEMXLXEp%2Byy64VrcSQ5rRD7nWxwcV%2FTDjLWcjcJu3Nt21RTJg8WGx%2BHm%2FzG8%2BpNZn99a6rbyqeFa%2BD06VTEX5dTo%2F7mZMChsaFZKZzJnU3hxH9Uv%2BlMvsNijth6%2Bz%2FF3Rb6GK1VMKKhTZgB6ZyDsK&X-Amz-Signature=3fed3d96b7c0a6dc49143a9d7865343eeaaebe9d633b433f6bdb713d5de2ad21&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
