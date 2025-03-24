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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEPC5RS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt0hLJyMkujJcGvtacXANWuQ0IjVRNyXtBcxGYKoTkwIhAJWkoGp1KZmqEIdFiDfV4JmkAKOvxnrwVipgcKcq2Ce3KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEjHYuDI5Q%2BqbeMQq3AO7HYe%2FSGM9bZpXI699rdt8HVk%2F5jqmBSxuhYqfZAqhm3RYQ%2BllMt2ttAYm%2B25eZ2%2B9Qsoy1oXgMprC4ycNH0cBC%2B5yzwj6YeTtJzqEkkdB2j9BD56KpZnLCxLsyfDdl03Dcq240JtdaizjMCafkTMcaba31s3h4uVZPmeGap6U%2F7clbEITP8jfuAT14nto%2B8xO0mLFp19tgogEoSA2qUMgHHI1PlrfSKWR8BBUbrpSaqoD4XgJKBPQexwGXSh%2FkX0bLq%2BaUEbf6GbK5I1%2FjXd0oV%2FpEhyMWNToSvKDhRBSU7Ffz44atDJ%2FB%2BY5JTfprUZ0VO1NBrS6GoiUJyt%2B8a0tZOmLze2x4XuDbd5RApL%2FmfoGCSiN%2BmkK0wRfBHlU%2Fx8GDaLn91xQXa0Q4udv84R4UfwDn8jhfxUIWVNiMRsGgZZpGvQw6oqcFHRm8uLlFiBoqTr2Cmlant8QSpG%2BXABq2XzWwqUMNjTqqylWBjwxSZiZS1aNRMs3YpBZeZDyfL4YAyqiG%2BMInhszF7SI4Jc4qtrEpVc4q5RlyeppgL3%2Bvh17aBCB1Ehb2gCkyQPbt1YngahBNXOS5%2Fia2cv7kIgaJ0ZouSGJibxF3HtKbm%2BgTGePjKy2L8Wy%2FeW9KTCCsIK%2FBjqkAeeHeqLUyQ%2F9%2FMzrqlc5ET22ERwZi1iJ0fEMWipYTa6jk%2FTEBUV331hzHXi1B1fgO0fM3nw0xISOeHpG%2FLVPQdiApZ8sbARV4y8piMB%2BP8zsEQTrIOrL88bJKTCy7WVyW3JvSC6TJ1B0gbLVVGA9GUH6eB2ujIBZxxtAVaNK6Iiif%2FjKiWwHNxSXRzN5AzNU1o%2BKF%2B0LhB3OLdwgEVrJFM46qh71&X-Amz-Signature=439ddb01b1b8a119204378d7480af8999a70f973a83bf915f500ec412e182b53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEPC5RS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt0hLJyMkujJcGvtacXANWuQ0IjVRNyXtBcxGYKoTkwIhAJWkoGp1KZmqEIdFiDfV4JmkAKOvxnrwVipgcKcq2Ce3KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEjHYuDI5Q%2BqbeMQq3AO7HYe%2FSGM9bZpXI699rdt8HVk%2F5jqmBSxuhYqfZAqhm3RYQ%2BllMt2ttAYm%2B25eZ2%2B9Qsoy1oXgMprC4ycNH0cBC%2B5yzwj6YeTtJzqEkkdB2j9BD56KpZnLCxLsyfDdl03Dcq240JtdaizjMCafkTMcaba31s3h4uVZPmeGap6U%2F7clbEITP8jfuAT14nto%2B8xO0mLFp19tgogEoSA2qUMgHHI1PlrfSKWR8BBUbrpSaqoD4XgJKBPQexwGXSh%2FkX0bLq%2BaUEbf6GbK5I1%2FjXd0oV%2FpEhyMWNToSvKDhRBSU7Ffz44atDJ%2FB%2BY5JTfprUZ0VO1NBrS6GoiUJyt%2B8a0tZOmLze2x4XuDbd5RApL%2FmfoGCSiN%2BmkK0wRfBHlU%2Fx8GDaLn91xQXa0Q4udv84R4UfwDn8jhfxUIWVNiMRsGgZZpGvQw6oqcFHRm8uLlFiBoqTr2Cmlant8QSpG%2BXABq2XzWwqUMNjTqqylWBjwxSZiZS1aNRMs3YpBZeZDyfL4YAyqiG%2BMInhszF7SI4Jc4qtrEpVc4q5RlyeppgL3%2Bvh17aBCB1Ehb2gCkyQPbt1YngahBNXOS5%2Fia2cv7kIgaJ0ZouSGJibxF3HtKbm%2BgTGePjKy2L8Wy%2FeW9KTCCsIK%2FBjqkAeeHeqLUyQ%2F9%2FMzrqlc5ET22ERwZi1iJ0fEMWipYTa6jk%2FTEBUV331hzHXi1B1fgO0fM3nw0xISOeHpG%2FLVPQdiApZ8sbARV4y8piMB%2BP8zsEQTrIOrL88bJKTCy7WVyW3JvSC6TJ1B0gbLVVGA9GUH6eB2ujIBZxxtAVaNK6Iiif%2FjKiWwHNxSXRzN5AzNU1o%2BKF%2B0LhB3OLdwgEVrJFM46qh71&X-Amz-Signature=60e63e41e519c26eed2f6ca370e28a1f5abd35bd512f58fba904f9c3d2afd269&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEPC5RS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt0hLJyMkujJcGvtacXANWuQ0IjVRNyXtBcxGYKoTkwIhAJWkoGp1KZmqEIdFiDfV4JmkAKOvxnrwVipgcKcq2Ce3KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEjHYuDI5Q%2BqbeMQq3AO7HYe%2FSGM9bZpXI699rdt8HVk%2F5jqmBSxuhYqfZAqhm3RYQ%2BllMt2ttAYm%2B25eZ2%2B9Qsoy1oXgMprC4ycNH0cBC%2B5yzwj6YeTtJzqEkkdB2j9BD56KpZnLCxLsyfDdl03Dcq240JtdaizjMCafkTMcaba31s3h4uVZPmeGap6U%2F7clbEITP8jfuAT14nto%2B8xO0mLFp19tgogEoSA2qUMgHHI1PlrfSKWR8BBUbrpSaqoD4XgJKBPQexwGXSh%2FkX0bLq%2BaUEbf6GbK5I1%2FjXd0oV%2FpEhyMWNToSvKDhRBSU7Ffz44atDJ%2FB%2BY5JTfprUZ0VO1NBrS6GoiUJyt%2B8a0tZOmLze2x4XuDbd5RApL%2FmfoGCSiN%2BmkK0wRfBHlU%2Fx8GDaLn91xQXa0Q4udv84R4UfwDn8jhfxUIWVNiMRsGgZZpGvQw6oqcFHRm8uLlFiBoqTr2Cmlant8QSpG%2BXABq2XzWwqUMNjTqqylWBjwxSZiZS1aNRMs3YpBZeZDyfL4YAyqiG%2BMInhszF7SI4Jc4qtrEpVc4q5RlyeppgL3%2Bvh17aBCB1Ehb2gCkyQPbt1YngahBNXOS5%2Fia2cv7kIgaJ0ZouSGJibxF3HtKbm%2BgTGePjKy2L8Wy%2FeW9KTCCsIK%2FBjqkAeeHeqLUyQ%2F9%2FMzrqlc5ET22ERwZi1iJ0fEMWipYTa6jk%2FTEBUV331hzHXi1B1fgO0fM3nw0xISOeHpG%2FLVPQdiApZ8sbARV4y8piMB%2BP8zsEQTrIOrL88bJKTCy7WVyW3JvSC6TJ1B0gbLVVGA9GUH6eB2ujIBZxxtAVaNK6Iiif%2FjKiWwHNxSXRzN5AzNU1o%2BKF%2B0LhB3OLdwgEVrJFM46qh71&X-Amz-Signature=5fc87958ab5ee5244405f90119ae52d64fa841dc740b236bf7f5a8b27cef842e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEPC5RS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt0hLJyMkujJcGvtacXANWuQ0IjVRNyXtBcxGYKoTkwIhAJWkoGp1KZmqEIdFiDfV4JmkAKOvxnrwVipgcKcq2Ce3KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEjHYuDI5Q%2BqbeMQq3AO7HYe%2FSGM9bZpXI699rdt8HVk%2F5jqmBSxuhYqfZAqhm3RYQ%2BllMt2ttAYm%2B25eZ2%2B9Qsoy1oXgMprC4ycNH0cBC%2B5yzwj6YeTtJzqEkkdB2j9BD56KpZnLCxLsyfDdl03Dcq240JtdaizjMCafkTMcaba31s3h4uVZPmeGap6U%2F7clbEITP8jfuAT14nto%2B8xO0mLFp19tgogEoSA2qUMgHHI1PlrfSKWR8BBUbrpSaqoD4XgJKBPQexwGXSh%2FkX0bLq%2BaUEbf6GbK5I1%2FjXd0oV%2FpEhyMWNToSvKDhRBSU7Ffz44atDJ%2FB%2BY5JTfprUZ0VO1NBrS6GoiUJyt%2B8a0tZOmLze2x4XuDbd5RApL%2FmfoGCSiN%2BmkK0wRfBHlU%2Fx8GDaLn91xQXa0Q4udv84R4UfwDn8jhfxUIWVNiMRsGgZZpGvQw6oqcFHRm8uLlFiBoqTr2Cmlant8QSpG%2BXABq2XzWwqUMNjTqqylWBjwxSZiZS1aNRMs3YpBZeZDyfL4YAyqiG%2BMInhszF7SI4Jc4qtrEpVc4q5RlyeppgL3%2Bvh17aBCB1Ehb2gCkyQPbt1YngahBNXOS5%2Fia2cv7kIgaJ0ZouSGJibxF3HtKbm%2BgTGePjKy2L8Wy%2FeW9KTCCsIK%2FBjqkAeeHeqLUyQ%2F9%2FMzrqlc5ET22ERwZi1iJ0fEMWipYTa6jk%2FTEBUV331hzHXi1B1fgO0fM3nw0xISOeHpG%2FLVPQdiApZ8sbARV4y8piMB%2BP8zsEQTrIOrL88bJKTCy7WVyW3JvSC6TJ1B0gbLVVGA9GUH6eB2ujIBZxxtAVaNK6Iiif%2FjKiWwHNxSXRzN5AzNU1o%2BKF%2B0LhB3OLdwgEVrJFM46qh71&X-Amz-Signature=ea9d02a4c61bef4920a33256c40c07fbf96b712a50483bea14757c9ed078a73d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEPC5RS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt0hLJyMkujJcGvtacXANWuQ0IjVRNyXtBcxGYKoTkwIhAJWkoGp1KZmqEIdFiDfV4JmkAKOvxnrwVipgcKcq2Ce3KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEjHYuDI5Q%2BqbeMQq3AO7HYe%2FSGM9bZpXI699rdt8HVk%2F5jqmBSxuhYqfZAqhm3RYQ%2BllMt2ttAYm%2B25eZ2%2B9Qsoy1oXgMprC4ycNH0cBC%2B5yzwj6YeTtJzqEkkdB2j9BD56KpZnLCxLsyfDdl03Dcq240JtdaizjMCafkTMcaba31s3h4uVZPmeGap6U%2F7clbEITP8jfuAT14nto%2B8xO0mLFp19tgogEoSA2qUMgHHI1PlrfSKWR8BBUbrpSaqoD4XgJKBPQexwGXSh%2FkX0bLq%2BaUEbf6GbK5I1%2FjXd0oV%2FpEhyMWNToSvKDhRBSU7Ffz44atDJ%2FB%2BY5JTfprUZ0VO1NBrS6GoiUJyt%2B8a0tZOmLze2x4XuDbd5RApL%2FmfoGCSiN%2BmkK0wRfBHlU%2Fx8GDaLn91xQXa0Q4udv84R4UfwDn8jhfxUIWVNiMRsGgZZpGvQw6oqcFHRm8uLlFiBoqTr2Cmlant8QSpG%2BXABq2XzWwqUMNjTqqylWBjwxSZiZS1aNRMs3YpBZeZDyfL4YAyqiG%2BMInhszF7SI4Jc4qtrEpVc4q5RlyeppgL3%2Bvh17aBCB1Ehb2gCkyQPbt1YngahBNXOS5%2Fia2cv7kIgaJ0ZouSGJibxF3HtKbm%2BgTGePjKy2L8Wy%2FeW9KTCCsIK%2FBjqkAeeHeqLUyQ%2F9%2FMzrqlc5ET22ERwZi1iJ0fEMWipYTa6jk%2FTEBUV331hzHXi1B1fgO0fM3nw0xISOeHpG%2FLVPQdiApZ8sbARV4y8piMB%2BP8zsEQTrIOrL88bJKTCy7WVyW3JvSC6TJ1B0gbLVVGA9GUH6eB2ujIBZxxtAVaNK6Iiif%2FjKiWwHNxSXRzN5AzNU1o%2BKF%2B0LhB3OLdwgEVrJFM46qh71&X-Amz-Signature=5650ef41beadf8247c42f9d6407f0576f3d67cf9464f2e4c28c7e26b7e510f05&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEPC5RS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt0hLJyMkujJcGvtacXANWuQ0IjVRNyXtBcxGYKoTkwIhAJWkoGp1KZmqEIdFiDfV4JmkAKOvxnrwVipgcKcq2Ce3KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEjHYuDI5Q%2BqbeMQq3AO7HYe%2FSGM9bZpXI699rdt8HVk%2F5jqmBSxuhYqfZAqhm3RYQ%2BllMt2ttAYm%2B25eZ2%2B9Qsoy1oXgMprC4ycNH0cBC%2B5yzwj6YeTtJzqEkkdB2j9BD56KpZnLCxLsyfDdl03Dcq240JtdaizjMCafkTMcaba31s3h4uVZPmeGap6U%2F7clbEITP8jfuAT14nto%2B8xO0mLFp19tgogEoSA2qUMgHHI1PlrfSKWR8BBUbrpSaqoD4XgJKBPQexwGXSh%2FkX0bLq%2BaUEbf6GbK5I1%2FjXd0oV%2FpEhyMWNToSvKDhRBSU7Ffz44atDJ%2FB%2BY5JTfprUZ0VO1NBrS6GoiUJyt%2B8a0tZOmLze2x4XuDbd5RApL%2FmfoGCSiN%2BmkK0wRfBHlU%2Fx8GDaLn91xQXa0Q4udv84R4UfwDn8jhfxUIWVNiMRsGgZZpGvQw6oqcFHRm8uLlFiBoqTr2Cmlant8QSpG%2BXABq2XzWwqUMNjTqqylWBjwxSZiZS1aNRMs3YpBZeZDyfL4YAyqiG%2BMInhszF7SI4Jc4qtrEpVc4q5RlyeppgL3%2Bvh17aBCB1Ehb2gCkyQPbt1YngahBNXOS5%2Fia2cv7kIgaJ0ZouSGJibxF3HtKbm%2BgTGePjKy2L8Wy%2FeW9KTCCsIK%2FBjqkAeeHeqLUyQ%2F9%2FMzrqlc5ET22ERwZi1iJ0fEMWipYTa6jk%2FTEBUV331hzHXi1B1fgO0fM3nw0xISOeHpG%2FLVPQdiApZ8sbARV4y8piMB%2BP8zsEQTrIOrL88bJKTCy7WVyW3JvSC6TJ1B0gbLVVGA9GUH6eB2ujIBZxxtAVaNK6Iiif%2FjKiWwHNxSXRzN5AzNU1o%2BKF%2B0LhB3OLdwgEVrJFM46qh71&X-Amz-Signature=f4fa06ea3bbe0e94e063bf404fd83be480f19b803ed9c819bdd54a25bec09830&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GEPC5RS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMt0hLJyMkujJcGvtacXANWuQ0IjVRNyXtBcxGYKoTkwIhAJWkoGp1KZmqEIdFiDfV4JmkAKOvxnrwVipgcKcq2Ce3KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygEjHYuDI5Q%2BqbeMQq3AO7HYe%2FSGM9bZpXI699rdt8HVk%2F5jqmBSxuhYqfZAqhm3RYQ%2BllMt2ttAYm%2B25eZ2%2B9Qsoy1oXgMprC4ycNH0cBC%2B5yzwj6YeTtJzqEkkdB2j9BD56KpZnLCxLsyfDdl03Dcq240JtdaizjMCafkTMcaba31s3h4uVZPmeGap6U%2F7clbEITP8jfuAT14nto%2B8xO0mLFp19tgogEoSA2qUMgHHI1PlrfSKWR8BBUbrpSaqoD4XgJKBPQexwGXSh%2FkX0bLq%2BaUEbf6GbK5I1%2FjXd0oV%2FpEhyMWNToSvKDhRBSU7Ffz44atDJ%2FB%2BY5JTfprUZ0VO1NBrS6GoiUJyt%2B8a0tZOmLze2x4XuDbd5RApL%2FmfoGCSiN%2BmkK0wRfBHlU%2Fx8GDaLn91xQXa0Q4udv84R4UfwDn8jhfxUIWVNiMRsGgZZpGvQw6oqcFHRm8uLlFiBoqTr2Cmlant8QSpG%2BXABq2XzWwqUMNjTqqylWBjwxSZiZS1aNRMs3YpBZeZDyfL4YAyqiG%2BMInhszF7SI4Jc4qtrEpVc4q5RlyeppgL3%2Bvh17aBCB1Ehb2gCkyQPbt1YngahBNXOS5%2Fia2cv7kIgaJ0ZouSGJibxF3HtKbm%2BgTGePjKy2L8Wy%2FeW9KTCCsIK%2FBjqkAeeHeqLUyQ%2F9%2FMzrqlc5ET22ERwZi1iJ0fEMWipYTa6jk%2FTEBUV331hzHXi1B1fgO0fM3nw0xISOeHpG%2FLVPQdiApZ8sbARV4y8piMB%2BP8zsEQTrIOrL88bJKTCy7WVyW3JvSC6TJ1B0gbLVVGA9GUH6eB2ujIBZxxtAVaNK6Iiif%2FjKiWwHNxSXRzN5AzNU1o%2BKF%2B0LhB3OLdwgEVrJFM46qh71&X-Amz-Signature=7fcf86a49026f59a9a6c06b2e5f3f3d2289b12fb16d3b22b2e348134c61cc3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
