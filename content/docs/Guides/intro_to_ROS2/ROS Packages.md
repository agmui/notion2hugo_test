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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YSP5YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDMEEnbEYFsrdxTNjB6cZMfDye6LKiH4J1qgreW57tR%2FwIgAMHCjUycm2iBXB%2Fd%2ByuhTZJFQ9usWqJkGNmHfoxqhX8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeNaDIFf0yFKEuzECrcA9EDZXDYbSIUj6Monr%2BEJ7nJNQkmlLPcaBgHDz8PbmOBhsLxK2PnZv4mB1ZACaL9UxW48m3i8hcUhkqO6kZX4Zc0m8BO0PkemmdIjXOCdgirlO1I8x7GkWrIhv2ET39HmBnqnlXSP%2BTsaqO8liayx9L98CS%2FH4Of4zK2j6snDHzkw%2FTk2t07jw8VPF2FRQhb5MqJzYws4J%2BhUUp3NVIxj%2F6z%2FlqGpeJV6MsGLijC3ZDYM03XdkUypapYYzz%2BtXTIVRdKfgh3YuB7eeor9hQejDiGWeSSvQ9hoY3%2B6h6o3SPbfDbZt9E3ytH6lIttvk4iDrDavMs7ncqWofD0Ur1XYDuKUaNm3ZRh1kFtGlSWPZeQkXc%2F5Hu64Cj%2FdSGyFmA0n17trBXnNWHvUTfe0mc6klsgI0mABpHEV7hNW7WLRlch9bt2%2B9%2FvgBsHyWZlF78kCzdeBcGBfGfpWQcvNssILG1%2B7tuAiRzZLMyVk%2BFRWCge8r05NaQSyP%2F2vM7MW1%2F%2Fx2Lb28hFMYxS7Y6%2FTx0kZQcyvGw3kaMZVVelEstOr4sXVchj%2FaW7jpF%2FB6oqrQj2WQMV0pfLnCXi6fm5GHHpRBzpZMrHDstLRFc6GUmAL4g94JVMeN3JPX4kA9umMJno%2BL4GOqUBCEggaDobeH6%2Fo6bTwUe9aowVjGhajcDKDssky3ni4%2Fpaq0Ylr%2FHFkptrt4ntr6KgEKKqmd%2FhoQQzDTVUCO%2BsM7R1Or0z5C94ukvYyQ16XPXz%2FBXc8uAmOGD7mPLDQbfOy45eZ2Q4jifgHm6so5jOSKErOyMmcPSZTIVul878BFXMGCrqP56MAYhhbXwg%2BDrboxULQmIxoNt0cG%2FmkvMqqgui%2Bx%2FX&X-Amz-Signature=0771c4bc48e5bee9da137290df3cf4a855e3e552c3fb866223adc86bf14506a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YSP5YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDMEEnbEYFsrdxTNjB6cZMfDye6LKiH4J1qgreW57tR%2FwIgAMHCjUycm2iBXB%2Fd%2ByuhTZJFQ9usWqJkGNmHfoxqhX8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeNaDIFf0yFKEuzECrcA9EDZXDYbSIUj6Monr%2BEJ7nJNQkmlLPcaBgHDz8PbmOBhsLxK2PnZv4mB1ZACaL9UxW48m3i8hcUhkqO6kZX4Zc0m8BO0PkemmdIjXOCdgirlO1I8x7GkWrIhv2ET39HmBnqnlXSP%2BTsaqO8liayx9L98CS%2FH4Of4zK2j6snDHzkw%2FTk2t07jw8VPF2FRQhb5MqJzYws4J%2BhUUp3NVIxj%2F6z%2FlqGpeJV6MsGLijC3ZDYM03XdkUypapYYzz%2BtXTIVRdKfgh3YuB7eeor9hQejDiGWeSSvQ9hoY3%2B6h6o3SPbfDbZt9E3ytH6lIttvk4iDrDavMs7ncqWofD0Ur1XYDuKUaNm3ZRh1kFtGlSWPZeQkXc%2F5Hu64Cj%2FdSGyFmA0n17trBXnNWHvUTfe0mc6klsgI0mABpHEV7hNW7WLRlch9bt2%2B9%2FvgBsHyWZlF78kCzdeBcGBfGfpWQcvNssILG1%2B7tuAiRzZLMyVk%2BFRWCge8r05NaQSyP%2F2vM7MW1%2F%2Fx2Lb28hFMYxS7Y6%2FTx0kZQcyvGw3kaMZVVelEstOr4sXVchj%2FaW7jpF%2FB6oqrQj2WQMV0pfLnCXi6fm5GHHpRBzpZMrHDstLRFc6GUmAL4g94JVMeN3JPX4kA9umMJno%2BL4GOqUBCEggaDobeH6%2Fo6bTwUe9aowVjGhajcDKDssky3ni4%2Fpaq0Ylr%2FHFkptrt4ntr6KgEKKqmd%2FhoQQzDTVUCO%2BsM7R1Or0z5C94ukvYyQ16XPXz%2FBXc8uAmOGD7mPLDQbfOy45eZ2Q4jifgHm6so5jOSKErOyMmcPSZTIVul878BFXMGCrqP56MAYhhbXwg%2BDrboxULQmIxoNt0cG%2FmkvMqqgui%2Bx%2FX&X-Amz-Signature=afd9ba7ce1a6f51add8c2cfd42bc675a98e5ec2aeee4af9e4580ae4396f134d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YSP5YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDMEEnbEYFsrdxTNjB6cZMfDye6LKiH4J1qgreW57tR%2FwIgAMHCjUycm2iBXB%2Fd%2ByuhTZJFQ9usWqJkGNmHfoxqhX8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeNaDIFf0yFKEuzECrcA9EDZXDYbSIUj6Monr%2BEJ7nJNQkmlLPcaBgHDz8PbmOBhsLxK2PnZv4mB1ZACaL9UxW48m3i8hcUhkqO6kZX4Zc0m8BO0PkemmdIjXOCdgirlO1I8x7GkWrIhv2ET39HmBnqnlXSP%2BTsaqO8liayx9L98CS%2FH4Of4zK2j6snDHzkw%2FTk2t07jw8VPF2FRQhb5MqJzYws4J%2BhUUp3NVIxj%2F6z%2FlqGpeJV6MsGLijC3ZDYM03XdkUypapYYzz%2BtXTIVRdKfgh3YuB7eeor9hQejDiGWeSSvQ9hoY3%2B6h6o3SPbfDbZt9E3ytH6lIttvk4iDrDavMs7ncqWofD0Ur1XYDuKUaNm3ZRh1kFtGlSWPZeQkXc%2F5Hu64Cj%2FdSGyFmA0n17trBXnNWHvUTfe0mc6klsgI0mABpHEV7hNW7WLRlch9bt2%2B9%2FvgBsHyWZlF78kCzdeBcGBfGfpWQcvNssILG1%2B7tuAiRzZLMyVk%2BFRWCge8r05NaQSyP%2F2vM7MW1%2F%2Fx2Lb28hFMYxS7Y6%2FTx0kZQcyvGw3kaMZVVelEstOr4sXVchj%2FaW7jpF%2FB6oqrQj2WQMV0pfLnCXi6fm5GHHpRBzpZMrHDstLRFc6GUmAL4g94JVMeN3JPX4kA9umMJno%2BL4GOqUBCEggaDobeH6%2Fo6bTwUe9aowVjGhajcDKDssky3ni4%2Fpaq0Ylr%2FHFkptrt4ntr6KgEKKqmd%2FhoQQzDTVUCO%2BsM7R1Or0z5C94ukvYyQ16XPXz%2FBXc8uAmOGD7mPLDQbfOy45eZ2Q4jifgHm6so5jOSKErOyMmcPSZTIVul878BFXMGCrqP56MAYhhbXwg%2BDrboxULQmIxoNt0cG%2FmkvMqqgui%2Bx%2FX&X-Amz-Signature=cf50df3ab8ec050bcc3b3818cf4058a0122e7f8a341bd8cdd78d2707674ec9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YSP5YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDMEEnbEYFsrdxTNjB6cZMfDye6LKiH4J1qgreW57tR%2FwIgAMHCjUycm2iBXB%2Fd%2ByuhTZJFQ9usWqJkGNmHfoxqhX8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeNaDIFf0yFKEuzECrcA9EDZXDYbSIUj6Monr%2BEJ7nJNQkmlLPcaBgHDz8PbmOBhsLxK2PnZv4mB1ZACaL9UxW48m3i8hcUhkqO6kZX4Zc0m8BO0PkemmdIjXOCdgirlO1I8x7GkWrIhv2ET39HmBnqnlXSP%2BTsaqO8liayx9L98CS%2FH4Of4zK2j6snDHzkw%2FTk2t07jw8VPF2FRQhb5MqJzYws4J%2BhUUp3NVIxj%2F6z%2FlqGpeJV6MsGLijC3ZDYM03XdkUypapYYzz%2BtXTIVRdKfgh3YuB7eeor9hQejDiGWeSSvQ9hoY3%2B6h6o3SPbfDbZt9E3ytH6lIttvk4iDrDavMs7ncqWofD0Ur1XYDuKUaNm3ZRh1kFtGlSWPZeQkXc%2F5Hu64Cj%2FdSGyFmA0n17trBXnNWHvUTfe0mc6klsgI0mABpHEV7hNW7WLRlch9bt2%2B9%2FvgBsHyWZlF78kCzdeBcGBfGfpWQcvNssILG1%2B7tuAiRzZLMyVk%2BFRWCge8r05NaQSyP%2F2vM7MW1%2F%2Fx2Lb28hFMYxS7Y6%2FTx0kZQcyvGw3kaMZVVelEstOr4sXVchj%2FaW7jpF%2FB6oqrQj2WQMV0pfLnCXi6fm5GHHpRBzpZMrHDstLRFc6GUmAL4g94JVMeN3JPX4kA9umMJno%2BL4GOqUBCEggaDobeH6%2Fo6bTwUe9aowVjGhajcDKDssky3ni4%2Fpaq0Ylr%2FHFkptrt4ntr6KgEKKqmd%2FhoQQzDTVUCO%2BsM7R1Or0z5C94ukvYyQ16XPXz%2FBXc8uAmOGD7mPLDQbfOy45eZ2Q4jifgHm6so5jOSKErOyMmcPSZTIVul878BFXMGCrqP56MAYhhbXwg%2BDrboxULQmIxoNt0cG%2FmkvMqqgui%2Bx%2FX&X-Amz-Signature=c25b1f6fe18a999247ebeec5f23cc442bd8719067684c0ccc1e73f8c4e94741d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YSP5YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDMEEnbEYFsrdxTNjB6cZMfDye6LKiH4J1qgreW57tR%2FwIgAMHCjUycm2iBXB%2Fd%2ByuhTZJFQ9usWqJkGNmHfoxqhX8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeNaDIFf0yFKEuzECrcA9EDZXDYbSIUj6Monr%2BEJ7nJNQkmlLPcaBgHDz8PbmOBhsLxK2PnZv4mB1ZACaL9UxW48m3i8hcUhkqO6kZX4Zc0m8BO0PkemmdIjXOCdgirlO1I8x7GkWrIhv2ET39HmBnqnlXSP%2BTsaqO8liayx9L98CS%2FH4Of4zK2j6snDHzkw%2FTk2t07jw8VPF2FRQhb5MqJzYws4J%2BhUUp3NVIxj%2F6z%2FlqGpeJV6MsGLijC3ZDYM03XdkUypapYYzz%2BtXTIVRdKfgh3YuB7eeor9hQejDiGWeSSvQ9hoY3%2B6h6o3SPbfDbZt9E3ytH6lIttvk4iDrDavMs7ncqWofD0Ur1XYDuKUaNm3ZRh1kFtGlSWPZeQkXc%2F5Hu64Cj%2FdSGyFmA0n17trBXnNWHvUTfe0mc6klsgI0mABpHEV7hNW7WLRlch9bt2%2B9%2FvgBsHyWZlF78kCzdeBcGBfGfpWQcvNssILG1%2B7tuAiRzZLMyVk%2BFRWCge8r05NaQSyP%2F2vM7MW1%2F%2Fx2Lb28hFMYxS7Y6%2FTx0kZQcyvGw3kaMZVVelEstOr4sXVchj%2FaW7jpF%2FB6oqrQj2WQMV0pfLnCXi6fm5GHHpRBzpZMrHDstLRFc6GUmAL4g94JVMeN3JPX4kA9umMJno%2BL4GOqUBCEggaDobeH6%2Fo6bTwUe9aowVjGhajcDKDssky3ni4%2Fpaq0Ylr%2FHFkptrt4ntr6KgEKKqmd%2FhoQQzDTVUCO%2BsM7R1Or0z5C94ukvYyQ16XPXz%2FBXc8uAmOGD7mPLDQbfOy45eZ2Q4jifgHm6so5jOSKErOyMmcPSZTIVul878BFXMGCrqP56MAYhhbXwg%2BDrboxULQmIxoNt0cG%2FmkvMqqgui%2Bx%2FX&X-Amz-Signature=51a5eff4a09d29daa912f169bc36dd6b5eb893b9ff9297744056528cabf1ee17&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YSP5YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDMEEnbEYFsrdxTNjB6cZMfDye6LKiH4J1qgreW57tR%2FwIgAMHCjUycm2iBXB%2Fd%2ByuhTZJFQ9usWqJkGNmHfoxqhX8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeNaDIFf0yFKEuzECrcA9EDZXDYbSIUj6Monr%2BEJ7nJNQkmlLPcaBgHDz8PbmOBhsLxK2PnZv4mB1ZACaL9UxW48m3i8hcUhkqO6kZX4Zc0m8BO0PkemmdIjXOCdgirlO1I8x7GkWrIhv2ET39HmBnqnlXSP%2BTsaqO8liayx9L98CS%2FH4Of4zK2j6snDHzkw%2FTk2t07jw8VPF2FRQhb5MqJzYws4J%2BhUUp3NVIxj%2F6z%2FlqGpeJV6MsGLijC3ZDYM03XdkUypapYYzz%2BtXTIVRdKfgh3YuB7eeor9hQejDiGWeSSvQ9hoY3%2B6h6o3SPbfDbZt9E3ytH6lIttvk4iDrDavMs7ncqWofD0Ur1XYDuKUaNm3ZRh1kFtGlSWPZeQkXc%2F5Hu64Cj%2FdSGyFmA0n17trBXnNWHvUTfe0mc6klsgI0mABpHEV7hNW7WLRlch9bt2%2B9%2FvgBsHyWZlF78kCzdeBcGBfGfpWQcvNssILG1%2B7tuAiRzZLMyVk%2BFRWCge8r05NaQSyP%2F2vM7MW1%2F%2Fx2Lb28hFMYxS7Y6%2FTx0kZQcyvGw3kaMZVVelEstOr4sXVchj%2FaW7jpF%2FB6oqrQj2WQMV0pfLnCXi6fm5GHHpRBzpZMrHDstLRFc6GUmAL4g94JVMeN3JPX4kA9umMJno%2BL4GOqUBCEggaDobeH6%2Fo6bTwUe9aowVjGhajcDKDssky3ni4%2Fpaq0Ylr%2FHFkptrt4ntr6KgEKKqmd%2FhoQQzDTVUCO%2BsM7R1Or0z5C94ukvYyQ16XPXz%2FBXc8uAmOGD7mPLDQbfOy45eZ2Q4jifgHm6so5jOSKErOyMmcPSZTIVul878BFXMGCrqP56MAYhhbXwg%2BDrboxULQmIxoNt0cG%2FmkvMqqgui%2Bx%2FX&X-Amz-Signature=a580b39722d3833aadbc801e58556649938b38481afe27919b5345449acd6494&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YSP5YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDMEEnbEYFsrdxTNjB6cZMfDye6LKiH4J1qgreW57tR%2FwIgAMHCjUycm2iBXB%2Fd%2ByuhTZJFQ9usWqJkGNmHfoxqhX8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeNaDIFf0yFKEuzECrcA9EDZXDYbSIUj6Monr%2BEJ7nJNQkmlLPcaBgHDz8PbmOBhsLxK2PnZv4mB1ZACaL9UxW48m3i8hcUhkqO6kZX4Zc0m8BO0PkemmdIjXOCdgirlO1I8x7GkWrIhv2ET39HmBnqnlXSP%2BTsaqO8liayx9L98CS%2FH4Of4zK2j6snDHzkw%2FTk2t07jw8VPF2FRQhb5MqJzYws4J%2BhUUp3NVIxj%2F6z%2FlqGpeJV6MsGLijC3ZDYM03XdkUypapYYzz%2BtXTIVRdKfgh3YuB7eeor9hQejDiGWeSSvQ9hoY3%2B6h6o3SPbfDbZt9E3ytH6lIttvk4iDrDavMs7ncqWofD0Ur1XYDuKUaNm3ZRh1kFtGlSWPZeQkXc%2F5Hu64Cj%2FdSGyFmA0n17trBXnNWHvUTfe0mc6klsgI0mABpHEV7hNW7WLRlch9bt2%2B9%2FvgBsHyWZlF78kCzdeBcGBfGfpWQcvNssILG1%2B7tuAiRzZLMyVk%2BFRWCge8r05NaQSyP%2F2vM7MW1%2F%2Fx2Lb28hFMYxS7Y6%2FTx0kZQcyvGw3kaMZVVelEstOr4sXVchj%2FaW7jpF%2FB6oqrQj2WQMV0pfLnCXi6fm5GHHpRBzpZMrHDstLRFc6GUmAL4g94JVMeN3JPX4kA9umMJno%2BL4GOqUBCEggaDobeH6%2Fo6bTwUe9aowVjGhajcDKDssky3ni4%2Fpaq0Ylr%2FHFkptrt4ntr6KgEKKqmd%2FhoQQzDTVUCO%2BsM7R1Or0z5C94ukvYyQ16XPXz%2FBXc8uAmOGD7mPLDQbfOy45eZ2Q4jifgHm6so5jOSKErOyMmcPSZTIVul878BFXMGCrqP56MAYhhbXwg%2BDrboxULQmIxoNt0cG%2FmkvMqqgui%2Bx%2FX&X-Amz-Signature=fb0994b0d5163cd663ef377a01c615f4617fe60362564b02705cd93bdf7a981a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
