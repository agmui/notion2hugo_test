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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJURG64B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGClhPIb%2Fn%2BZ3IIy9%2FMSwxffRGaA8Sq33A2wt9zaQWErAiAIKqV4dDmN0np%2BWDb7s2hNDOLB5VCYzRwf1yl5pKU2hyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Sa6gHyWlw1HovwlKtwDvOZ5fHG5x%2FJ%2Frthtpd5qof%2FPeLXb%2BDQO6053elj59Rj7freYJwIvqfRQZ%2FMrNC%2BksvHck1UosErqB1QVoDYpuKEhkgkZX%2BgGNOE3DzyAGzyDIvKwk7uzMUd25ockbyrGE17Hk8U0U5nMM4j8%2Fn8WShyO%2FLY5jnwxZ98sYhzL91TniSp6iQGnEsNlBnZOmupNFrUCXdZ5JaATYcSTLGYi7qTAIG%2F6H76KMXVCEisK1tv6t5Df3blJGSxqFgyB75Y5JVgy%2FDdy0XJWf7R%2FHw9grspbiq9gTS1gVg70j2IcPXlU%2Fb5MoNas%2Fmxr3%2F7TWv9DeQhajN9BPzzx5tSq1s73l3D6vyPBosm8nhJqyR6OjrwmS3DFIBDIWpJTo%2F1Y8nuZlSlv%2BIcPFwrWnXbHqSqQOOvIoMmiYPenl8jHftwiUspPawDj3LBMlbmcLLJ92ccTxZqfRri6C4ZSrLtkNxNqT2xjWEcGpNr9wceL%2Fx2r54Z6iknZ5celEQgKW2JjOSRpH8ewKp75Ljg75p4Akzn7mwYa%2F53ZWB4rURCPzqk2FBKoQhJFOFk6s4sR9D9XmWnSudvNO9gJQ3uBLwpfUDp2zW4BWUGjSXnE1gHjx5PpHBIfA%2BhBQvpc5TKYWkQwo%2B62wQY6pgE84FzfL%2BCBjVMCMzPnYCmN%2BkuFJBSWKJ96fJEoMozROfdQoS0RrJ0uloKZOhpw9t%2FqCQWD1G4W40lNmkUM3syJb%2BsgzeJyNcvybseOJ2a98VvBhUtDdRoewpgjpLp%2FsYy4Eiviv2kQ%2FlG22wJtRzOe0aIoHfBnUBfhy8kEy9hrtXgjHJtr5X3%2B2MLHdUNJZrIx5ZumjefUZsOsv5F5hexRdgL07pDi&X-Amz-Signature=e54b714f860d51850294092733b2513f4322eb172eb49d521abb75f00bb12be1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJURG64B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGClhPIb%2Fn%2BZ3IIy9%2FMSwxffRGaA8Sq33A2wt9zaQWErAiAIKqV4dDmN0np%2BWDb7s2hNDOLB5VCYzRwf1yl5pKU2hyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Sa6gHyWlw1HovwlKtwDvOZ5fHG5x%2FJ%2Frthtpd5qof%2FPeLXb%2BDQO6053elj59Rj7freYJwIvqfRQZ%2FMrNC%2BksvHck1UosErqB1QVoDYpuKEhkgkZX%2BgGNOE3DzyAGzyDIvKwk7uzMUd25ockbyrGE17Hk8U0U5nMM4j8%2Fn8WShyO%2FLY5jnwxZ98sYhzL91TniSp6iQGnEsNlBnZOmupNFrUCXdZ5JaATYcSTLGYi7qTAIG%2F6H76KMXVCEisK1tv6t5Df3blJGSxqFgyB75Y5JVgy%2FDdy0XJWf7R%2FHw9grspbiq9gTS1gVg70j2IcPXlU%2Fb5MoNas%2Fmxr3%2F7TWv9DeQhajN9BPzzx5tSq1s73l3D6vyPBosm8nhJqyR6OjrwmS3DFIBDIWpJTo%2F1Y8nuZlSlv%2BIcPFwrWnXbHqSqQOOvIoMmiYPenl8jHftwiUspPawDj3LBMlbmcLLJ92ccTxZqfRri6C4ZSrLtkNxNqT2xjWEcGpNr9wceL%2Fx2r54Z6iknZ5celEQgKW2JjOSRpH8ewKp75Ljg75p4Akzn7mwYa%2F53ZWB4rURCPzqk2FBKoQhJFOFk6s4sR9D9XmWnSudvNO9gJQ3uBLwpfUDp2zW4BWUGjSXnE1gHjx5PpHBIfA%2BhBQvpc5TKYWkQwo%2B62wQY6pgE84FzfL%2BCBjVMCMzPnYCmN%2BkuFJBSWKJ96fJEoMozROfdQoS0RrJ0uloKZOhpw9t%2FqCQWD1G4W40lNmkUM3syJb%2BsgzeJyNcvybseOJ2a98VvBhUtDdRoewpgjpLp%2FsYy4Eiviv2kQ%2FlG22wJtRzOe0aIoHfBnUBfhy8kEy9hrtXgjHJtr5X3%2B2MLHdUNJZrIx5ZumjefUZsOsv5F5hexRdgL07pDi&X-Amz-Signature=8d972fc21c0d2e0c9025df6da3cfea54f0c0410d19bca84e138e6a452cc0a813&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJURG64B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGClhPIb%2Fn%2BZ3IIy9%2FMSwxffRGaA8Sq33A2wt9zaQWErAiAIKqV4dDmN0np%2BWDb7s2hNDOLB5VCYzRwf1yl5pKU2hyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Sa6gHyWlw1HovwlKtwDvOZ5fHG5x%2FJ%2Frthtpd5qof%2FPeLXb%2BDQO6053elj59Rj7freYJwIvqfRQZ%2FMrNC%2BksvHck1UosErqB1QVoDYpuKEhkgkZX%2BgGNOE3DzyAGzyDIvKwk7uzMUd25ockbyrGE17Hk8U0U5nMM4j8%2Fn8WShyO%2FLY5jnwxZ98sYhzL91TniSp6iQGnEsNlBnZOmupNFrUCXdZ5JaATYcSTLGYi7qTAIG%2F6H76KMXVCEisK1tv6t5Df3blJGSxqFgyB75Y5JVgy%2FDdy0XJWf7R%2FHw9grspbiq9gTS1gVg70j2IcPXlU%2Fb5MoNas%2Fmxr3%2F7TWv9DeQhajN9BPzzx5tSq1s73l3D6vyPBosm8nhJqyR6OjrwmS3DFIBDIWpJTo%2F1Y8nuZlSlv%2BIcPFwrWnXbHqSqQOOvIoMmiYPenl8jHftwiUspPawDj3LBMlbmcLLJ92ccTxZqfRri6C4ZSrLtkNxNqT2xjWEcGpNr9wceL%2Fx2r54Z6iknZ5celEQgKW2JjOSRpH8ewKp75Ljg75p4Akzn7mwYa%2F53ZWB4rURCPzqk2FBKoQhJFOFk6s4sR9D9XmWnSudvNO9gJQ3uBLwpfUDp2zW4BWUGjSXnE1gHjx5PpHBIfA%2BhBQvpc5TKYWkQwo%2B62wQY6pgE84FzfL%2BCBjVMCMzPnYCmN%2BkuFJBSWKJ96fJEoMozROfdQoS0RrJ0uloKZOhpw9t%2FqCQWD1G4W40lNmkUM3syJb%2BsgzeJyNcvybseOJ2a98VvBhUtDdRoewpgjpLp%2FsYy4Eiviv2kQ%2FlG22wJtRzOe0aIoHfBnUBfhy8kEy9hrtXgjHJtr5X3%2B2MLHdUNJZrIx5ZumjefUZsOsv5F5hexRdgL07pDi&X-Amz-Signature=1768319e641ea17428cdd77e7b3993635d342253d1d1dc7fe9f8cc72b0a3c272&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJURG64B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGClhPIb%2Fn%2BZ3IIy9%2FMSwxffRGaA8Sq33A2wt9zaQWErAiAIKqV4dDmN0np%2BWDb7s2hNDOLB5VCYzRwf1yl5pKU2hyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Sa6gHyWlw1HovwlKtwDvOZ5fHG5x%2FJ%2Frthtpd5qof%2FPeLXb%2BDQO6053elj59Rj7freYJwIvqfRQZ%2FMrNC%2BksvHck1UosErqB1QVoDYpuKEhkgkZX%2BgGNOE3DzyAGzyDIvKwk7uzMUd25ockbyrGE17Hk8U0U5nMM4j8%2Fn8WShyO%2FLY5jnwxZ98sYhzL91TniSp6iQGnEsNlBnZOmupNFrUCXdZ5JaATYcSTLGYi7qTAIG%2F6H76KMXVCEisK1tv6t5Df3blJGSxqFgyB75Y5JVgy%2FDdy0XJWf7R%2FHw9grspbiq9gTS1gVg70j2IcPXlU%2Fb5MoNas%2Fmxr3%2F7TWv9DeQhajN9BPzzx5tSq1s73l3D6vyPBosm8nhJqyR6OjrwmS3DFIBDIWpJTo%2F1Y8nuZlSlv%2BIcPFwrWnXbHqSqQOOvIoMmiYPenl8jHftwiUspPawDj3LBMlbmcLLJ92ccTxZqfRri6C4ZSrLtkNxNqT2xjWEcGpNr9wceL%2Fx2r54Z6iknZ5celEQgKW2JjOSRpH8ewKp75Ljg75p4Akzn7mwYa%2F53ZWB4rURCPzqk2FBKoQhJFOFk6s4sR9D9XmWnSudvNO9gJQ3uBLwpfUDp2zW4BWUGjSXnE1gHjx5PpHBIfA%2BhBQvpc5TKYWkQwo%2B62wQY6pgE84FzfL%2BCBjVMCMzPnYCmN%2BkuFJBSWKJ96fJEoMozROfdQoS0RrJ0uloKZOhpw9t%2FqCQWD1G4W40lNmkUM3syJb%2BsgzeJyNcvybseOJ2a98VvBhUtDdRoewpgjpLp%2FsYy4Eiviv2kQ%2FlG22wJtRzOe0aIoHfBnUBfhy8kEy9hrtXgjHJtr5X3%2B2MLHdUNJZrIx5ZumjefUZsOsv5F5hexRdgL07pDi&X-Amz-Signature=e77b8d4900e10b97e39eff35ea472a95044176c242d9115421967f3986bc40ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJURG64B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGClhPIb%2Fn%2BZ3IIy9%2FMSwxffRGaA8Sq33A2wt9zaQWErAiAIKqV4dDmN0np%2BWDb7s2hNDOLB5VCYzRwf1yl5pKU2hyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Sa6gHyWlw1HovwlKtwDvOZ5fHG5x%2FJ%2Frthtpd5qof%2FPeLXb%2BDQO6053elj59Rj7freYJwIvqfRQZ%2FMrNC%2BksvHck1UosErqB1QVoDYpuKEhkgkZX%2BgGNOE3DzyAGzyDIvKwk7uzMUd25ockbyrGE17Hk8U0U5nMM4j8%2Fn8WShyO%2FLY5jnwxZ98sYhzL91TniSp6iQGnEsNlBnZOmupNFrUCXdZ5JaATYcSTLGYi7qTAIG%2F6H76KMXVCEisK1tv6t5Df3blJGSxqFgyB75Y5JVgy%2FDdy0XJWf7R%2FHw9grspbiq9gTS1gVg70j2IcPXlU%2Fb5MoNas%2Fmxr3%2F7TWv9DeQhajN9BPzzx5tSq1s73l3D6vyPBosm8nhJqyR6OjrwmS3DFIBDIWpJTo%2F1Y8nuZlSlv%2BIcPFwrWnXbHqSqQOOvIoMmiYPenl8jHftwiUspPawDj3LBMlbmcLLJ92ccTxZqfRri6C4ZSrLtkNxNqT2xjWEcGpNr9wceL%2Fx2r54Z6iknZ5celEQgKW2JjOSRpH8ewKp75Ljg75p4Akzn7mwYa%2F53ZWB4rURCPzqk2FBKoQhJFOFk6s4sR9D9XmWnSudvNO9gJQ3uBLwpfUDp2zW4BWUGjSXnE1gHjx5PpHBIfA%2BhBQvpc5TKYWkQwo%2B62wQY6pgE84FzfL%2BCBjVMCMzPnYCmN%2BkuFJBSWKJ96fJEoMozROfdQoS0RrJ0uloKZOhpw9t%2FqCQWD1G4W40lNmkUM3syJb%2BsgzeJyNcvybseOJ2a98VvBhUtDdRoewpgjpLp%2FsYy4Eiviv2kQ%2FlG22wJtRzOe0aIoHfBnUBfhy8kEy9hrtXgjHJtr5X3%2B2MLHdUNJZrIx5ZumjefUZsOsv5F5hexRdgL07pDi&X-Amz-Signature=d789d50570bee0724774121d58dd8002d020a4f9a6c00a31d9917868f6c2c488&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJURG64B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGClhPIb%2Fn%2BZ3IIy9%2FMSwxffRGaA8Sq33A2wt9zaQWErAiAIKqV4dDmN0np%2BWDb7s2hNDOLB5VCYzRwf1yl5pKU2hyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Sa6gHyWlw1HovwlKtwDvOZ5fHG5x%2FJ%2Frthtpd5qof%2FPeLXb%2BDQO6053elj59Rj7freYJwIvqfRQZ%2FMrNC%2BksvHck1UosErqB1QVoDYpuKEhkgkZX%2BgGNOE3DzyAGzyDIvKwk7uzMUd25ockbyrGE17Hk8U0U5nMM4j8%2Fn8WShyO%2FLY5jnwxZ98sYhzL91TniSp6iQGnEsNlBnZOmupNFrUCXdZ5JaATYcSTLGYi7qTAIG%2F6H76KMXVCEisK1tv6t5Df3blJGSxqFgyB75Y5JVgy%2FDdy0XJWf7R%2FHw9grspbiq9gTS1gVg70j2IcPXlU%2Fb5MoNas%2Fmxr3%2F7TWv9DeQhajN9BPzzx5tSq1s73l3D6vyPBosm8nhJqyR6OjrwmS3DFIBDIWpJTo%2F1Y8nuZlSlv%2BIcPFwrWnXbHqSqQOOvIoMmiYPenl8jHftwiUspPawDj3LBMlbmcLLJ92ccTxZqfRri6C4ZSrLtkNxNqT2xjWEcGpNr9wceL%2Fx2r54Z6iknZ5celEQgKW2JjOSRpH8ewKp75Ljg75p4Akzn7mwYa%2F53ZWB4rURCPzqk2FBKoQhJFOFk6s4sR9D9XmWnSudvNO9gJQ3uBLwpfUDp2zW4BWUGjSXnE1gHjx5PpHBIfA%2BhBQvpc5TKYWkQwo%2B62wQY6pgE84FzfL%2BCBjVMCMzPnYCmN%2BkuFJBSWKJ96fJEoMozROfdQoS0RrJ0uloKZOhpw9t%2FqCQWD1G4W40lNmkUM3syJb%2BsgzeJyNcvybseOJ2a98VvBhUtDdRoewpgjpLp%2FsYy4Eiviv2kQ%2FlG22wJtRzOe0aIoHfBnUBfhy8kEy9hrtXgjHJtr5X3%2B2MLHdUNJZrIx5ZumjefUZsOsv5F5hexRdgL07pDi&X-Amz-Signature=bd9f50498ac5f294b01682e93363464ea6bda35de3c1dbf5a54b808779edf225&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJURG64B%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGClhPIb%2Fn%2BZ3IIy9%2FMSwxffRGaA8Sq33A2wt9zaQWErAiAIKqV4dDmN0np%2BWDb7s2hNDOLB5VCYzRwf1yl5pKU2hyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Sa6gHyWlw1HovwlKtwDvOZ5fHG5x%2FJ%2Frthtpd5qof%2FPeLXb%2BDQO6053elj59Rj7freYJwIvqfRQZ%2FMrNC%2BksvHck1UosErqB1QVoDYpuKEhkgkZX%2BgGNOE3DzyAGzyDIvKwk7uzMUd25ockbyrGE17Hk8U0U5nMM4j8%2Fn8WShyO%2FLY5jnwxZ98sYhzL91TniSp6iQGnEsNlBnZOmupNFrUCXdZ5JaATYcSTLGYi7qTAIG%2F6H76KMXVCEisK1tv6t5Df3blJGSxqFgyB75Y5JVgy%2FDdy0XJWf7R%2FHw9grspbiq9gTS1gVg70j2IcPXlU%2Fb5MoNas%2Fmxr3%2F7TWv9DeQhajN9BPzzx5tSq1s73l3D6vyPBosm8nhJqyR6OjrwmS3DFIBDIWpJTo%2F1Y8nuZlSlv%2BIcPFwrWnXbHqSqQOOvIoMmiYPenl8jHftwiUspPawDj3LBMlbmcLLJ92ccTxZqfRri6C4ZSrLtkNxNqT2xjWEcGpNr9wceL%2Fx2r54Z6iknZ5celEQgKW2JjOSRpH8ewKp75Ljg75p4Akzn7mwYa%2F53ZWB4rURCPzqk2FBKoQhJFOFk6s4sR9D9XmWnSudvNO9gJQ3uBLwpfUDp2zW4BWUGjSXnE1gHjx5PpHBIfA%2BhBQvpc5TKYWkQwo%2B62wQY6pgE84FzfL%2BCBjVMCMzPnYCmN%2BkuFJBSWKJ96fJEoMozROfdQoS0RrJ0uloKZOhpw9t%2FqCQWD1G4W40lNmkUM3syJb%2BsgzeJyNcvybseOJ2a98VvBhUtDdRoewpgjpLp%2FsYy4Eiviv2kQ%2FlG22wJtRzOe0aIoHfBnUBfhy8kEy9hrtXgjHJtr5X3%2B2MLHdUNJZrIx5ZumjefUZsOsv5F5hexRdgL07pDi&X-Amz-Signature=52e4c5e68637d6cf15fa450fab2473700167af04f28efacb18d0c7a8883a4ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
