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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WJO5IE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAYny9f2sZ5oyV%2FSCL5XMaDas8fRg1eGLpdqVQKQdLByAiEAvM6yyz%2BbID2LeIWnpNGToygXmYtuAQEbLINeF%2FZBhLQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2vMXbAbrfrw3glISrcA%2F%2BOiBBAsGHLrfXdjxJMigzyIvdcKcbAp5kO7clIlW832ZrKQlD0IbCmgzvIwtJJCZ2kEFK5WXCAu%2FRz5aaSrfU7NS5bbe%2FVbgb2muWKTBED3l9tRPbnyvM9Ak5LOiTIlt5ATFS9wPkizQ1iHvTdV%2BfBW5AGO1Bn1gJZnU4TuQp%2B4FKIpb%2BKz9tFQuJ1fXIQB13iAWxhcddK7QBm7r%2Bea1wrPWK74dPrFn%2Bwne5VE9kgQ2IoWvA5MXWRNzp3%2FlUaqU9to8TkKuamHUC%2BZB3oQtwA89Ws0E%2BrAy8kss4HqdcGfJ5%2FQwCxuuhNk%2FuznF6hizkkgrI%2BuoqygAB8fu%2Ftg9eYlj65FuNwu4cjDqTc5hF92xVJWfcYeQ%2F4Bxm5S1%2BE3REEnwdfzoQy1sSGUCK%2FpU8ipvyOz%2By6mliMuDfotbswnnOJqT5T6rEL2ROr%2FrSzbDb2i7MUU8x4TN3QyT7tVZCMzvo1fxMKGFJZT2cD5I2IddezuU5fmQqUtaLDuUrm2oksA7O4yvj2bCUIn%2FE9i9Ag0oDbTNE6mgzFxZAgDuAgrpBMBr5dSUqfp6o%2B8ouR%2BsrYjn3vZaLChFUubLwuWrkLG4rvo7KMDHNWGVW7H5wuAzBER3Qn8QW75BIfMPPczL0GOqUBdRGnjEEYCftsz73uqeWfqLjD6nsyFSiou8NbouU7%2Ba5Ur5RdjXf%2FHFWOVYo22kn5QVXc0FEaDz6FNqMGByJv%2BzQ4k0AAKnHIBaDxqW59z34v3dXcv8XH7jXmPwhd1%2FaIlZ7boc%2FXqxD0W2yEGvTKBqwPESCk8IGWjNoQkTptdiB5Qa91MQEaWKNvMN7cwRJydWxz5heB1pYsh6uQBJ%2BE%2FI59YS30&X-Amz-Signature=9858035ffc4032dc6539019908e98c335272e92099cfebd3a647e1352c458ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WJO5IE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAYny9f2sZ5oyV%2FSCL5XMaDas8fRg1eGLpdqVQKQdLByAiEAvM6yyz%2BbID2LeIWnpNGToygXmYtuAQEbLINeF%2FZBhLQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2vMXbAbrfrw3glISrcA%2F%2BOiBBAsGHLrfXdjxJMigzyIvdcKcbAp5kO7clIlW832ZrKQlD0IbCmgzvIwtJJCZ2kEFK5WXCAu%2FRz5aaSrfU7NS5bbe%2FVbgb2muWKTBED3l9tRPbnyvM9Ak5LOiTIlt5ATFS9wPkizQ1iHvTdV%2BfBW5AGO1Bn1gJZnU4TuQp%2B4FKIpb%2BKz9tFQuJ1fXIQB13iAWxhcddK7QBm7r%2Bea1wrPWK74dPrFn%2Bwne5VE9kgQ2IoWvA5MXWRNzp3%2FlUaqU9to8TkKuamHUC%2BZB3oQtwA89Ws0E%2BrAy8kss4HqdcGfJ5%2FQwCxuuhNk%2FuznF6hizkkgrI%2BuoqygAB8fu%2Ftg9eYlj65FuNwu4cjDqTc5hF92xVJWfcYeQ%2F4Bxm5S1%2BE3REEnwdfzoQy1sSGUCK%2FpU8ipvyOz%2By6mliMuDfotbswnnOJqT5T6rEL2ROr%2FrSzbDb2i7MUU8x4TN3QyT7tVZCMzvo1fxMKGFJZT2cD5I2IddezuU5fmQqUtaLDuUrm2oksA7O4yvj2bCUIn%2FE9i9Ag0oDbTNE6mgzFxZAgDuAgrpBMBr5dSUqfp6o%2B8ouR%2BsrYjn3vZaLChFUubLwuWrkLG4rvo7KMDHNWGVW7H5wuAzBER3Qn8QW75BIfMPPczL0GOqUBdRGnjEEYCftsz73uqeWfqLjD6nsyFSiou8NbouU7%2Ba5Ur5RdjXf%2FHFWOVYo22kn5QVXc0FEaDz6FNqMGByJv%2BzQ4k0AAKnHIBaDxqW59z34v3dXcv8XH7jXmPwhd1%2FaIlZ7boc%2FXqxD0W2yEGvTKBqwPESCk8IGWjNoQkTptdiB5Qa91MQEaWKNvMN7cwRJydWxz5heB1pYsh6uQBJ%2BE%2FI59YS30&X-Amz-Signature=1da6a641f5396e3287c412a76790d65b13ec4326088b8d183a74ee47de4f566c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WJO5IE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAYny9f2sZ5oyV%2FSCL5XMaDas8fRg1eGLpdqVQKQdLByAiEAvM6yyz%2BbID2LeIWnpNGToygXmYtuAQEbLINeF%2FZBhLQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2vMXbAbrfrw3glISrcA%2F%2BOiBBAsGHLrfXdjxJMigzyIvdcKcbAp5kO7clIlW832ZrKQlD0IbCmgzvIwtJJCZ2kEFK5WXCAu%2FRz5aaSrfU7NS5bbe%2FVbgb2muWKTBED3l9tRPbnyvM9Ak5LOiTIlt5ATFS9wPkizQ1iHvTdV%2BfBW5AGO1Bn1gJZnU4TuQp%2B4FKIpb%2BKz9tFQuJ1fXIQB13iAWxhcddK7QBm7r%2Bea1wrPWK74dPrFn%2Bwne5VE9kgQ2IoWvA5MXWRNzp3%2FlUaqU9to8TkKuamHUC%2BZB3oQtwA89Ws0E%2BrAy8kss4HqdcGfJ5%2FQwCxuuhNk%2FuznF6hizkkgrI%2BuoqygAB8fu%2Ftg9eYlj65FuNwu4cjDqTc5hF92xVJWfcYeQ%2F4Bxm5S1%2BE3REEnwdfzoQy1sSGUCK%2FpU8ipvyOz%2By6mliMuDfotbswnnOJqT5T6rEL2ROr%2FrSzbDb2i7MUU8x4TN3QyT7tVZCMzvo1fxMKGFJZT2cD5I2IddezuU5fmQqUtaLDuUrm2oksA7O4yvj2bCUIn%2FE9i9Ag0oDbTNE6mgzFxZAgDuAgrpBMBr5dSUqfp6o%2B8ouR%2BsrYjn3vZaLChFUubLwuWrkLG4rvo7KMDHNWGVW7H5wuAzBER3Qn8QW75BIfMPPczL0GOqUBdRGnjEEYCftsz73uqeWfqLjD6nsyFSiou8NbouU7%2Ba5Ur5RdjXf%2FHFWOVYo22kn5QVXc0FEaDz6FNqMGByJv%2BzQ4k0AAKnHIBaDxqW59z34v3dXcv8XH7jXmPwhd1%2FaIlZ7boc%2FXqxD0W2yEGvTKBqwPESCk8IGWjNoQkTptdiB5Qa91MQEaWKNvMN7cwRJydWxz5heB1pYsh6uQBJ%2BE%2FI59YS30&X-Amz-Signature=32588db7dba40a7873d911f6c0b763a592a60cb9d1310c25c7efa2731e8a8e37&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WJO5IE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAYny9f2sZ5oyV%2FSCL5XMaDas8fRg1eGLpdqVQKQdLByAiEAvM6yyz%2BbID2LeIWnpNGToygXmYtuAQEbLINeF%2FZBhLQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2vMXbAbrfrw3glISrcA%2F%2BOiBBAsGHLrfXdjxJMigzyIvdcKcbAp5kO7clIlW832ZrKQlD0IbCmgzvIwtJJCZ2kEFK5WXCAu%2FRz5aaSrfU7NS5bbe%2FVbgb2muWKTBED3l9tRPbnyvM9Ak5LOiTIlt5ATFS9wPkizQ1iHvTdV%2BfBW5AGO1Bn1gJZnU4TuQp%2B4FKIpb%2BKz9tFQuJ1fXIQB13iAWxhcddK7QBm7r%2Bea1wrPWK74dPrFn%2Bwne5VE9kgQ2IoWvA5MXWRNzp3%2FlUaqU9to8TkKuamHUC%2BZB3oQtwA89Ws0E%2BrAy8kss4HqdcGfJ5%2FQwCxuuhNk%2FuznF6hizkkgrI%2BuoqygAB8fu%2Ftg9eYlj65FuNwu4cjDqTc5hF92xVJWfcYeQ%2F4Bxm5S1%2BE3REEnwdfzoQy1sSGUCK%2FpU8ipvyOz%2By6mliMuDfotbswnnOJqT5T6rEL2ROr%2FrSzbDb2i7MUU8x4TN3QyT7tVZCMzvo1fxMKGFJZT2cD5I2IddezuU5fmQqUtaLDuUrm2oksA7O4yvj2bCUIn%2FE9i9Ag0oDbTNE6mgzFxZAgDuAgrpBMBr5dSUqfp6o%2B8ouR%2BsrYjn3vZaLChFUubLwuWrkLG4rvo7KMDHNWGVW7H5wuAzBER3Qn8QW75BIfMPPczL0GOqUBdRGnjEEYCftsz73uqeWfqLjD6nsyFSiou8NbouU7%2Ba5Ur5RdjXf%2FHFWOVYo22kn5QVXc0FEaDz6FNqMGByJv%2BzQ4k0AAKnHIBaDxqW59z34v3dXcv8XH7jXmPwhd1%2FaIlZ7boc%2FXqxD0W2yEGvTKBqwPESCk8IGWjNoQkTptdiB5Qa91MQEaWKNvMN7cwRJydWxz5heB1pYsh6uQBJ%2BE%2FI59YS30&X-Amz-Signature=dd40f3218caed8af56f581697c154671a5fcaacc367061b4fbc42e8696756962&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WJO5IE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAYny9f2sZ5oyV%2FSCL5XMaDas8fRg1eGLpdqVQKQdLByAiEAvM6yyz%2BbID2LeIWnpNGToygXmYtuAQEbLINeF%2FZBhLQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2vMXbAbrfrw3glISrcA%2F%2BOiBBAsGHLrfXdjxJMigzyIvdcKcbAp5kO7clIlW832ZrKQlD0IbCmgzvIwtJJCZ2kEFK5WXCAu%2FRz5aaSrfU7NS5bbe%2FVbgb2muWKTBED3l9tRPbnyvM9Ak5LOiTIlt5ATFS9wPkizQ1iHvTdV%2BfBW5AGO1Bn1gJZnU4TuQp%2B4FKIpb%2BKz9tFQuJ1fXIQB13iAWxhcddK7QBm7r%2Bea1wrPWK74dPrFn%2Bwne5VE9kgQ2IoWvA5MXWRNzp3%2FlUaqU9to8TkKuamHUC%2BZB3oQtwA89Ws0E%2BrAy8kss4HqdcGfJ5%2FQwCxuuhNk%2FuznF6hizkkgrI%2BuoqygAB8fu%2Ftg9eYlj65FuNwu4cjDqTc5hF92xVJWfcYeQ%2F4Bxm5S1%2BE3REEnwdfzoQy1sSGUCK%2FpU8ipvyOz%2By6mliMuDfotbswnnOJqT5T6rEL2ROr%2FrSzbDb2i7MUU8x4TN3QyT7tVZCMzvo1fxMKGFJZT2cD5I2IddezuU5fmQqUtaLDuUrm2oksA7O4yvj2bCUIn%2FE9i9Ag0oDbTNE6mgzFxZAgDuAgrpBMBr5dSUqfp6o%2B8ouR%2BsrYjn3vZaLChFUubLwuWrkLG4rvo7KMDHNWGVW7H5wuAzBER3Qn8QW75BIfMPPczL0GOqUBdRGnjEEYCftsz73uqeWfqLjD6nsyFSiou8NbouU7%2Ba5Ur5RdjXf%2FHFWOVYo22kn5QVXc0FEaDz6FNqMGByJv%2BzQ4k0AAKnHIBaDxqW59z34v3dXcv8XH7jXmPwhd1%2FaIlZ7boc%2FXqxD0W2yEGvTKBqwPESCk8IGWjNoQkTptdiB5Qa91MQEaWKNvMN7cwRJydWxz5heB1pYsh6uQBJ%2BE%2FI59YS30&X-Amz-Signature=c53ad6bbebd37e6f5e4496472ba37eb91c6aefae6357be2122b5308bf8a197a8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WJO5IE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAYny9f2sZ5oyV%2FSCL5XMaDas8fRg1eGLpdqVQKQdLByAiEAvM6yyz%2BbID2LeIWnpNGToygXmYtuAQEbLINeF%2FZBhLQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2vMXbAbrfrw3glISrcA%2F%2BOiBBAsGHLrfXdjxJMigzyIvdcKcbAp5kO7clIlW832ZrKQlD0IbCmgzvIwtJJCZ2kEFK5WXCAu%2FRz5aaSrfU7NS5bbe%2FVbgb2muWKTBED3l9tRPbnyvM9Ak5LOiTIlt5ATFS9wPkizQ1iHvTdV%2BfBW5AGO1Bn1gJZnU4TuQp%2B4FKIpb%2BKz9tFQuJ1fXIQB13iAWxhcddK7QBm7r%2Bea1wrPWK74dPrFn%2Bwne5VE9kgQ2IoWvA5MXWRNzp3%2FlUaqU9to8TkKuamHUC%2BZB3oQtwA89Ws0E%2BrAy8kss4HqdcGfJ5%2FQwCxuuhNk%2FuznF6hizkkgrI%2BuoqygAB8fu%2Ftg9eYlj65FuNwu4cjDqTc5hF92xVJWfcYeQ%2F4Bxm5S1%2BE3REEnwdfzoQy1sSGUCK%2FpU8ipvyOz%2By6mliMuDfotbswnnOJqT5T6rEL2ROr%2FrSzbDb2i7MUU8x4TN3QyT7tVZCMzvo1fxMKGFJZT2cD5I2IddezuU5fmQqUtaLDuUrm2oksA7O4yvj2bCUIn%2FE9i9Ag0oDbTNE6mgzFxZAgDuAgrpBMBr5dSUqfp6o%2B8ouR%2BsrYjn3vZaLChFUubLwuWrkLG4rvo7KMDHNWGVW7H5wuAzBER3Qn8QW75BIfMPPczL0GOqUBdRGnjEEYCftsz73uqeWfqLjD6nsyFSiou8NbouU7%2Ba5Ur5RdjXf%2FHFWOVYo22kn5QVXc0FEaDz6FNqMGByJv%2BzQ4k0AAKnHIBaDxqW59z34v3dXcv8XH7jXmPwhd1%2FaIlZ7boc%2FXqxD0W2yEGvTKBqwPESCk8IGWjNoQkTptdiB5Qa91MQEaWKNvMN7cwRJydWxz5heB1pYsh6uQBJ%2BE%2FI59YS30&X-Amz-Signature=7c3264a974680f69c752e3ead78dbc65c9cbbe4fb598098745cf55363c369ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WJO5IE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAYny9f2sZ5oyV%2FSCL5XMaDas8fRg1eGLpdqVQKQdLByAiEAvM6yyz%2BbID2LeIWnpNGToygXmYtuAQEbLINeF%2FZBhLQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH2vMXbAbrfrw3glISrcA%2F%2BOiBBAsGHLrfXdjxJMigzyIvdcKcbAp5kO7clIlW832ZrKQlD0IbCmgzvIwtJJCZ2kEFK5WXCAu%2FRz5aaSrfU7NS5bbe%2FVbgb2muWKTBED3l9tRPbnyvM9Ak5LOiTIlt5ATFS9wPkizQ1iHvTdV%2BfBW5AGO1Bn1gJZnU4TuQp%2B4FKIpb%2BKz9tFQuJ1fXIQB13iAWxhcddK7QBm7r%2Bea1wrPWK74dPrFn%2Bwne5VE9kgQ2IoWvA5MXWRNzp3%2FlUaqU9to8TkKuamHUC%2BZB3oQtwA89Ws0E%2BrAy8kss4HqdcGfJ5%2FQwCxuuhNk%2FuznF6hizkkgrI%2BuoqygAB8fu%2Ftg9eYlj65FuNwu4cjDqTc5hF92xVJWfcYeQ%2F4Bxm5S1%2BE3REEnwdfzoQy1sSGUCK%2FpU8ipvyOz%2By6mliMuDfotbswnnOJqT5T6rEL2ROr%2FrSzbDb2i7MUU8x4TN3QyT7tVZCMzvo1fxMKGFJZT2cD5I2IddezuU5fmQqUtaLDuUrm2oksA7O4yvj2bCUIn%2FE9i9Ag0oDbTNE6mgzFxZAgDuAgrpBMBr5dSUqfp6o%2B8ouR%2BsrYjn3vZaLChFUubLwuWrkLG4rvo7KMDHNWGVW7H5wuAzBER3Qn8QW75BIfMPPczL0GOqUBdRGnjEEYCftsz73uqeWfqLjD6nsyFSiou8NbouU7%2Ba5Ur5RdjXf%2FHFWOVYo22kn5QVXc0FEaDz6FNqMGByJv%2BzQ4k0AAKnHIBaDxqW59z34v3dXcv8XH7jXmPwhd1%2FaIlZ7boc%2FXqxD0W2yEGvTKBqwPESCk8IGWjNoQkTptdiB5Qa91MQEaWKNvMN7cwRJydWxz5heB1pYsh6uQBJ%2BE%2FI59YS30&X-Amz-Signature=9eb8597b3e1e143ea2944db4c2e4d6813344ef6d1112973707e86e21ea38fa83&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
