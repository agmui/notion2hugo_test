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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST7NPXJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsoOsDp2bhGOUJntaA0qpp1FurClI1oxfSNy6ix%2BUtPAiEAzN0KowQQiCmHLiyf8bMUMTMZ%2BRpiNja9DjjoevObrDQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5hQhF881g%2F1Or0yrcA00SRdG6g6eFFEM7aI8jvgUDp7y1yFE9jMFm5xEB5NagY50GoCuzm%2BCrpyIVdpEYOtkTsTDuK0SJEEpwpq966YQIevG6Fz%2FTmmtJ%2BWMlTECeVE6kgExQLfx6J%2F01Op8qYxXrB1MqKly5CPB74oDkLW2IvgJ8r2KV%2BDQV05CicKk%2FOMFquvmK8J46SMjEcLTjnuY%2FzOp29JCJBBNMRfMIu7nMZIN0CJmH1rLanAFDHA9M%2Bm2CrNCaFTxNNX3PsIfJsq3COVG2%2BAF9p6Nj0GAaS9gpnqxOU1xRmEAZyMwmUxZ6JmXK6l5gdgWQVe03ZSD5gZ2Eo6BusAo7kawnEb0xgkvJyQgnSSKjl2pmKLfP9u0SfaoKEH8x1pq0erU9Kix5WnT3D29vUwBrwFRXuHWP1ctKwkcyHhqMW35EF%2BAO%2FR605QvvFpaCNrkW8wQ3IPvEr1sV26%2Btg%2BMGo1FjUEu05kPUvTnlItNUNqxNYeU1T8d96huVL2OR%2BDDA6YmZSk4lEuD6l%2FykP3o7S4X1z5KZtKbq3T5TsxdBgw13fnMvqQNbfBE8u27pSGkBr%2Bd3pPwZyrlBNLcUDf9Sy79mCd0phbDhkGMnD4fAColiY2uWhZQK9TkMf%2B6PrGQwd3YyMPqlsr0GOqUBGcEp9fuB3HKldnQHu7EatJmpcsSntQKjy9NUXheReXPwerho0rxYj0xSFhcmRGZUUKg8v%2FCOhI0vhmbd0qI6EulWrH529xsEPE2yQuawjDLlY8epXbbFnZ7vK0h9aUxX9ttnpH3%2BmSzCA6aVyomywv8Qxw3TFp9pRqNSb0XjgQEJqLcmhcaYxvmVf6dd47wYxWdVDloCiIjsj%2BDjX%2BQznVtLyvZY&X-Amz-Signature=67dcb6c60bbd3ac31eda075a9bde62fee1ec8af3e90db3550e8743f3ffab1197&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST7NPXJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsoOsDp2bhGOUJntaA0qpp1FurClI1oxfSNy6ix%2BUtPAiEAzN0KowQQiCmHLiyf8bMUMTMZ%2BRpiNja9DjjoevObrDQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5hQhF881g%2F1Or0yrcA00SRdG6g6eFFEM7aI8jvgUDp7y1yFE9jMFm5xEB5NagY50GoCuzm%2BCrpyIVdpEYOtkTsTDuK0SJEEpwpq966YQIevG6Fz%2FTmmtJ%2BWMlTECeVE6kgExQLfx6J%2F01Op8qYxXrB1MqKly5CPB74oDkLW2IvgJ8r2KV%2BDQV05CicKk%2FOMFquvmK8J46SMjEcLTjnuY%2FzOp29JCJBBNMRfMIu7nMZIN0CJmH1rLanAFDHA9M%2Bm2CrNCaFTxNNX3PsIfJsq3COVG2%2BAF9p6Nj0GAaS9gpnqxOU1xRmEAZyMwmUxZ6JmXK6l5gdgWQVe03ZSD5gZ2Eo6BusAo7kawnEb0xgkvJyQgnSSKjl2pmKLfP9u0SfaoKEH8x1pq0erU9Kix5WnT3D29vUwBrwFRXuHWP1ctKwkcyHhqMW35EF%2BAO%2FR605QvvFpaCNrkW8wQ3IPvEr1sV26%2Btg%2BMGo1FjUEu05kPUvTnlItNUNqxNYeU1T8d96huVL2OR%2BDDA6YmZSk4lEuD6l%2FykP3o7S4X1z5KZtKbq3T5TsxdBgw13fnMvqQNbfBE8u27pSGkBr%2Bd3pPwZyrlBNLcUDf9Sy79mCd0phbDhkGMnD4fAColiY2uWhZQK9TkMf%2B6PrGQwd3YyMPqlsr0GOqUBGcEp9fuB3HKldnQHu7EatJmpcsSntQKjy9NUXheReXPwerho0rxYj0xSFhcmRGZUUKg8v%2FCOhI0vhmbd0qI6EulWrH529xsEPE2yQuawjDLlY8epXbbFnZ7vK0h9aUxX9ttnpH3%2BmSzCA6aVyomywv8Qxw3TFp9pRqNSb0XjgQEJqLcmhcaYxvmVf6dd47wYxWdVDloCiIjsj%2BDjX%2BQznVtLyvZY&X-Amz-Signature=8d54ddf73f6324328427d813a18a346813627bc9047a7c62fc3dceb47124dab8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST7NPXJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsoOsDp2bhGOUJntaA0qpp1FurClI1oxfSNy6ix%2BUtPAiEAzN0KowQQiCmHLiyf8bMUMTMZ%2BRpiNja9DjjoevObrDQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5hQhF881g%2F1Or0yrcA00SRdG6g6eFFEM7aI8jvgUDp7y1yFE9jMFm5xEB5NagY50GoCuzm%2BCrpyIVdpEYOtkTsTDuK0SJEEpwpq966YQIevG6Fz%2FTmmtJ%2BWMlTECeVE6kgExQLfx6J%2F01Op8qYxXrB1MqKly5CPB74oDkLW2IvgJ8r2KV%2BDQV05CicKk%2FOMFquvmK8J46SMjEcLTjnuY%2FzOp29JCJBBNMRfMIu7nMZIN0CJmH1rLanAFDHA9M%2Bm2CrNCaFTxNNX3PsIfJsq3COVG2%2BAF9p6Nj0GAaS9gpnqxOU1xRmEAZyMwmUxZ6JmXK6l5gdgWQVe03ZSD5gZ2Eo6BusAo7kawnEb0xgkvJyQgnSSKjl2pmKLfP9u0SfaoKEH8x1pq0erU9Kix5WnT3D29vUwBrwFRXuHWP1ctKwkcyHhqMW35EF%2BAO%2FR605QvvFpaCNrkW8wQ3IPvEr1sV26%2Btg%2BMGo1FjUEu05kPUvTnlItNUNqxNYeU1T8d96huVL2OR%2BDDA6YmZSk4lEuD6l%2FykP3o7S4X1z5KZtKbq3T5TsxdBgw13fnMvqQNbfBE8u27pSGkBr%2Bd3pPwZyrlBNLcUDf9Sy79mCd0phbDhkGMnD4fAColiY2uWhZQK9TkMf%2B6PrGQwd3YyMPqlsr0GOqUBGcEp9fuB3HKldnQHu7EatJmpcsSntQKjy9NUXheReXPwerho0rxYj0xSFhcmRGZUUKg8v%2FCOhI0vhmbd0qI6EulWrH529xsEPE2yQuawjDLlY8epXbbFnZ7vK0h9aUxX9ttnpH3%2BmSzCA6aVyomywv8Qxw3TFp9pRqNSb0XjgQEJqLcmhcaYxvmVf6dd47wYxWdVDloCiIjsj%2BDjX%2BQznVtLyvZY&X-Amz-Signature=66b739139253683f3a7730c571fa089d0b14880fdccffd08664d3e9d6a54aae8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST7NPXJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsoOsDp2bhGOUJntaA0qpp1FurClI1oxfSNy6ix%2BUtPAiEAzN0KowQQiCmHLiyf8bMUMTMZ%2BRpiNja9DjjoevObrDQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5hQhF881g%2F1Or0yrcA00SRdG6g6eFFEM7aI8jvgUDp7y1yFE9jMFm5xEB5NagY50GoCuzm%2BCrpyIVdpEYOtkTsTDuK0SJEEpwpq966YQIevG6Fz%2FTmmtJ%2BWMlTECeVE6kgExQLfx6J%2F01Op8qYxXrB1MqKly5CPB74oDkLW2IvgJ8r2KV%2BDQV05CicKk%2FOMFquvmK8J46SMjEcLTjnuY%2FzOp29JCJBBNMRfMIu7nMZIN0CJmH1rLanAFDHA9M%2Bm2CrNCaFTxNNX3PsIfJsq3COVG2%2BAF9p6Nj0GAaS9gpnqxOU1xRmEAZyMwmUxZ6JmXK6l5gdgWQVe03ZSD5gZ2Eo6BusAo7kawnEb0xgkvJyQgnSSKjl2pmKLfP9u0SfaoKEH8x1pq0erU9Kix5WnT3D29vUwBrwFRXuHWP1ctKwkcyHhqMW35EF%2BAO%2FR605QvvFpaCNrkW8wQ3IPvEr1sV26%2Btg%2BMGo1FjUEu05kPUvTnlItNUNqxNYeU1T8d96huVL2OR%2BDDA6YmZSk4lEuD6l%2FykP3o7S4X1z5KZtKbq3T5TsxdBgw13fnMvqQNbfBE8u27pSGkBr%2Bd3pPwZyrlBNLcUDf9Sy79mCd0phbDhkGMnD4fAColiY2uWhZQK9TkMf%2B6PrGQwd3YyMPqlsr0GOqUBGcEp9fuB3HKldnQHu7EatJmpcsSntQKjy9NUXheReXPwerho0rxYj0xSFhcmRGZUUKg8v%2FCOhI0vhmbd0qI6EulWrH529xsEPE2yQuawjDLlY8epXbbFnZ7vK0h9aUxX9ttnpH3%2BmSzCA6aVyomywv8Qxw3TFp9pRqNSb0XjgQEJqLcmhcaYxvmVf6dd47wYxWdVDloCiIjsj%2BDjX%2BQznVtLyvZY&X-Amz-Signature=dc78a4de393a92fd0400bab1fca3b28cd7e419110aaf9241f68c38ce14954214&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST7NPXJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsoOsDp2bhGOUJntaA0qpp1FurClI1oxfSNy6ix%2BUtPAiEAzN0KowQQiCmHLiyf8bMUMTMZ%2BRpiNja9DjjoevObrDQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5hQhF881g%2F1Or0yrcA00SRdG6g6eFFEM7aI8jvgUDp7y1yFE9jMFm5xEB5NagY50GoCuzm%2BCrpyIVdpEYOtkTsTDuK0SJEEpwpq966YQIevG6Fz%2FTmmtJ%2BWMlTECeVE6kgExQLfx6J%2F01Op8qYxXrB1MqKly5CPB74oDkLW2IvgJ8r2KV%2BDQV05CicKk%2FOMFquvmK8J46SMjEcLTjnuY%2FzOp29JCJBBNMRfMIu7nMZIN0CJmH1rLanAFDHA9M%2Bm2CrNCaFTxNNX3PsIfJsq3COVG2%2BAF9p6Nj0GAaS9gpnqxOU1xRmEAZyMwmUxZ6JmXK6l5gdgWQVe03ZSD5gZ2Eo6BusAo7kawnEb0xgkvJyQgnSSKjl2pmKLfP9u0SfaoKEH8x1pq0erU9Kix5WnT3D29vUwBrwFRXuHWP1ctKwkcyHhqMW35EF%2BAO%2FR605QvvFpaCNrkW8wQ3IPvEr1sV26%2Btg%2BMGo1FjUEu05kPUvTnlItNUNqxNYeU1T8d96huVL2OR%2BDDA6YmZSk4lEuD6l%2FykP3o7S4X1z5KZtKbq3T5TsxdBgw13fnMvqQNbfBE8u27pSGkBr%2Bd3pPwZyrlBNLcUDf9Sy79mCd0phbDhkGMnD4fAColiY2uWhZQK9TkMf%2B6PrGQwd3YyMPqlsr0GOqUBGcEp9fuB3HKldnQHu7EatJmpcsSntQKjy9NUXheReXPwerho0rxYj0xSFhcmRGZUUKg8v%2FCOhI0vhmbd0qI6EulWrH529xsEPE2yQuawjDLlY8epXbbFnZ7vK0h9aUxX9ttnpH3%2BmSzCA6aVyomywv8Qxw3TFp9pRqNSb0XjgQEJqLcmhcaYxvmVf6dd47wYxWdVDloCiIjsj%2BDjX%2BQznVtLyvZY&X-Amz-Signature=5ad8c3f4555cc55fdeb20caa0db3cd58e210afe269e3d3dad4052ca1d3541816&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST7NPXJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsoOsDp2bhGOUJntaA0qpp1FurClI1oxfSNy6ix%2BUtPAiEAzN0KowQQiCmHLiyf8bMUMTMZ%2BRpiNja9DjjoevObrDQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5hQhF881g%2F1Or0yrcA00SRdG6g6eFFEM7aI8jvgUDp7y1yFE9jMFm5xEB5NagY50GoCuzm%2BCrpyIVdpEYOtkTsTDuK0SJEEpwpq966YQIevG6Fz%2FTmmtJ%2BWMlTECeVE6kgExQLfx6J%2F01Op8qYxXrB1MqKly5CPB74oDkLW2IvgJ8r2KV%2BDQV05CicKk%2FOMFquvmK8J46SMjEcLTjnuY%2FzOp29JCJBBNMRfMIu7nMZIN0CJmH1rLanAFDHA9M%2Bm2CrNCaFTxNNX3PsIfJsq3COVG2%2BAF9p6Nj0GAaS9gpnqxOU1xRmEAZyMwmUxZ6JmXK6l5gdgWQVe03ZSD5gZ2Eo6BusAo7kawnEb0xgkvJyQgnSSKjl2pmKLfP9u0SfaoKEH8x1pq0erU9Kix5WnT3D29vUwBrwFRXuHWP1ctKwkcyHhqMW35EF%2BAO%2FR605QvvFpaCNrkW8wQ3IPvEr1sV26%2Btg%2BMGo1FjUEu05kPUvTnlItNUNqxNYeU1T8d96huVL2OR%2BDDA6YmZSk4lEuD6l%2FykP3o7S4X1z5KZtKbq3T5TsxdBgw13fnMvqQNbfBE8u27pSGkBr%2Bd3pPwZyrlBNLcUDf9Sy79mCd0phbDhkGMnD4fAColiY2uWhZQK9TkMf%2B6PrGQwd3YyMPqlsr0GOqUBGcEp9fuB3HKldnQHu7EatJmpcsSntQKjy9NUXheReXPwerho0rxYj0xSFhcmRGZUUKg8v%2FCOhI0vhmbd0qI6EulWrH529xsEPE2yQuawjDLlY8epXbbFnZ7vK0h9aUxX9ttnpH3%2BmSzCA6aVyomywv8Qxw3TFp9pRqNSb0XjgQEJqLcmhcaYxvmVf6dd47wYxWdVDloCiIjsj%2BDjX%2BQznVtLyvZY&X-Amz-Signature=80324bfb9b619740813c547289bd69b2399c4aeed8cb9819bd271a6b5509b7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ST7NPXJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsoOsDp2bhGOUJntaA0qpp1FurClI1oxfSNy6ix%2BUtPAiEAzN0KowQQiCmHLiyf8bMUMTMZ%2BRpiNja9DjjoevObrDQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEy5hQhF881g%2F1Or0yrcA00SRdG6g6eFFEM7aI8jvgUDp7y1yFE9jMFm5xEB5NagY50GoCuzm%2BCrpyIVdpEYOtkTsTDuK0SJEEpwpq966YQIevG6Fz%2FTmmtJ%2BWMlTECeVE6kgExQLfx6J%2F01Op8qYxXrB1MqKly5CPB74oDkLW2IvgJ8r2KV%2BDQV05CicKk%2FOMFquvmK8J46SMjEcLTjnuY%2FzOp29JCJBBNMRfMIu7nMZIN0CJmH1rLanAFDHA9M%2Bm2CrNCaFTxNNX3PsIfJsq3COVG2%2BAF9p6Nj0GAaS9gpnqxOU1xRmEAZyMwmUxZ6JmXK6l5gdgWQVe03ZSD5gZ2Eo6BusAo7kawnEb0xgkvJyQgnSSKjl2pmKLfP9u0SfaoKEH8x1pq0erU9Kix5WnT3D29vUwBrwFRXuHWP1ctKwkcyHhqMW35EF%2BAO%2FR605QvvFpaCNrkW8wQ3IPvEr1sV26%2Btg%2BMGo1FjUEu05kPUvTnlItNUNqxNYeU1T8d96huVL2OR%2BDDA6YmZSk4lEuD6l%2FykP3o7S4X1z5KZtKbq3T5TsxdBgw13fnMvqQNbfBE8u27pSGkBr%2Bd3pPwZyrlBNLcUDf9Sy79mCd0phbDhkGMnD4fAColiY2uWhZQK9TkMf%2B6PrGQwd3YyMPqlsr0GOqUBGcEp9fuB3HKldnQHu7EatJmpcsSntQKjy9NUXheReXPwerho0rxYj0xSFhcmRGZUUKg8v%2FCOhI0vhmbd0qI6EulWrH529xsEPE2yQuawjDLlY8epXbbFnZ7vK0h9aUxX9ttnpH3%2BmSzCA6aVyomywv8Qxw3TFp9pRqNSb0XjgQEJqLcmhcaYxvmVf6dd47wYxWdVDloCiIjsj%2BDjX%2BQznVtLyvZY&X-Amz-Signature=3d160b1e7d54c6fd147049738eff1a6b834607993c5c11ba9484019c78d44922&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
