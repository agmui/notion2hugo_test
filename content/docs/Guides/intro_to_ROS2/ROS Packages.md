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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72SWCN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMQhUXCAaWK86Tl%2FuEDCvfXmH2a7MrSOVWox1xdFxOgIhAJr5fiRGXPF2kXSoOLKcMpoyRockLBWxV%2FSVlMImw5dxKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2jy%2FyrFp0KUo7hSUq3AM68HCqlgED3LEcXbgSFcYNeotCCTZ0Fo14Fa0s%2BRu7yYdqZytISJij5TpyIHzSLHKMxkpJBZH6eFQwFc3lj3l0PakISiP3Ba340kOp2dl%2BjwHVmnWvtjD2QkIwsxkY9C8q6XMlE93FyumDprUb6sJEN6T6NyQKRYj2KKPjVkkEnkoIT%2FgGNvYENcalmEOug1eIAE4Mf2iBt9MrBSuTf%2FMWVmO9AgE6PHVV4HW%2FIaJI2YSpbHPSWQyE0B9F9RzZzKJyy65aiOW4m1mZZ1ljc7mef%2Fci%2F8FNKjIt%2B%2Fo58Jow8BzJvjm%2FRjeAEM%2FeXbUZtqN1%2BhGw%2BwdSE%2B1epCy%2BdLwiUn9RjZFo1NLjzZRfBsNAQxYLLIamM%2BMVUXjP%2BwS6FFmgPIaR5LQubhPlArDcZNo%2BIKhrnpTcq0ZN%2FQcrukJ7nspUcdfI32CvAOjhG%2Bi6HvJwImK%2Fa%2B6Un315a0liM1i72udFTYLVbUtpXcbDZ5IF8zGnmeK9gAcCntln0PSoaUfFsWhWrtIWFhiYzMF1kckOA8KsbdZdi9nLW17T6SI6FlASGKsvJw4%2FG9Q4EAGPJiNXNXeO5ycwiXEBfTqmRnR4v1uDpzfZ8XIGXJUXQ2eTus8jC9wpdI%2Fb9sW6SjC1oYPBBjqkATYB1Rm1YtqYvDfJgcD03NKwh7ccf9sqafvG5wC8YpGwBdeKSxMKGnOYDwdQa4c4E3NKghdqM6F2TRJEX6tXAL2dktIUsqIad33JwkobXoAtZHyYsaxDVWYz45vJr9xRKskTO23O1KjxbmhJhkQegegLRq6yAKl8e02AoZSKufxsGyVpuSmrN3sjScx3Xsc7e7FpFwv0HWXTP4EYBdyYiTj8HgFr&X-Amz-Signature=1fc6fc378b31e1af1bdefd6a9bfd95f88b46798a817ba64f76374ba158455dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72SWCN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMQhUXCAaWK86Tl%2FuEDCvfXmH2a7MrSOVWox1xdFxOgIhAJr5fiRGXPF2kXSoOLKcMpoyRockLBWxV%2FSVlMImw5dxKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2jy%2FyrFp0KUo7hSUq3AM68HCqlgED3LEcXbgSFcYNeotCCTZ0Fo14Fa0s%2BRu7yYdqZytISJij5TpyIHzSLHKMxkpJBZH6eFQwFc3lj3l0PakISiP3Ba340kOp2dl%2BjwHVmnWvtjD2QkIwsxkY9C8q6XMlE93FyumDprUb6sJEN6T6NyQKRYj2KKPjVkkEnkoIT%2FgGNvYENcalmEOug1eIAE4Mf2iBt9MrBSuTf%2FMWVmO9AgE6PHVV4HW%2FIaJI2YSpbHPSWQyE0B9F9RzZzKJyy65aiOW4m1mZZ1ljc7mef%2Fci%2F8FNKjIt%2B%2Fo58Jow8BzJvjm%2FRjeAEM%2FeXbUZtqN1%2BhGw%2BwdSE%2B1epCy%2BdLwiUn9RjZFo1NLjzZRfBsNAQxYLLIamM%2BMVUXjP%2BwS6FFmgPIaR5LQubhPlArDcZNo%2BIKhrnpTcq0ZN%2FQcrukJ7nspUcdfI32CvAOjhG%2Bi6HvJwImK%2Fa%2B6Un315a0liM1i72udFTYLVbUtpXcbDZ5IF8zGnmeK9gAcCntln0PSoaUfFsWhWrtIWFhiYzMF1kckOA8KsbdZdi9nLW17T6SI6FlASGKsvJw4%2FG9Q4EAGPJiNXNXeO5ycwiXEBfTqmRnR4v1uDpzfZ8XIGXJUXQ2eTus8jC9wpdI%2Fb9sW6SjC1oYPBBjqkATYB1Rm1YtqYvDfJgcD03NKwh7ccf9sqafvG5wC8YpGwBdeKSxMKGnOYDwdQa4c4E3NKghdqM6F2TRJEX6tXAL2dktIUsqIad33JwkobXoAtZHyYsaxDVWYz45vJr9xRKskTO23O1KjxbmhJhkQegegLRq6yAKl8e02AoZSKufxsGyVpuSmrN3sjScx3Xsc7e7FpFwv0HWXTP4EYBdyYiTj8HgFr&X-Amz-Signature=093833fa96fb726c69e1faf98832f48b92a997552d00f6e55db1868223d87b86&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72SWCN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMQhUXCAaWK86Tl%2FuEDCvfXmH2a7MrSOVWox1xdFxOgIhAJr5fiRGXPF2kXSoOLKcMpoyRockLBWxV%2FSVlMImw5dxKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2jy%2FyrFp0KUo7hSUq3AM68HCqlgED3LEcXbgSFcYNeotCCTZ0Fo14Fa0s%2BRu7yYdqZytISJij5TpyIHzSLHKMxkpJBZH6eFQwFc3lj3l0PakISiP3Ba340kOp2dl%2BjwHVmnWvtjD2QkIwsxkY9C8q6XMlE93FyumDprUb6sJEN6T6NyQKRYj2KKPjVkkEnkoIT%2FgGNvYENcalmEOug1eIAE4Mf2iBt9MrBSuTf%2FMWVmO9AgE6PHVV4HW%2FIaJI2YSpbHPSWQyE0B9F9RzZzKJyy65aiOW4m1mZZ1ljc7mef%2Fci%2F8FNKjIt%2B%2Fo58Jow8BzJvjm%2FRjeAEM%2FeXbUZtqN1%2BhGw%2BwdSE%2B1epCy%2BdLwiUn9RjZFo1NLjzZRfBsNAQxYLLIamM%2BMVUXjP%2BwS6FFmgPIaR5LQubhPlArDcZNo%2BIKhrnpTcq0ZN%2FQcrukJ7nspUcdfI32CvAOjhG%2Bi6HvJwImK%2Fa%2B6Un315a0liM1i72udFTYLVbUtpXcbDZ5IF8zGnmeK9gAcCntln0PSoaUfFsWhWrtIWFhiYzMF1kckOA8KsbdZdi9nLW17T6SI6FlASGKsvJw4%2FG9Q4EAGPJiNXNXeO5ycwiXEBfTqmRnR4v1uDpzfZ8XIGXJUXQ2eTus8jC9wpdI%2Fb9sW6SjC1oYPBBjqkATYB1Rm1YtqYvDfJgcD03NKwh7ccf9sqafvG5wC8YpGwBdeKSxMKGnOYDwdQa4c4E3NKghdqM6F2TRJEX6tXAL2dktIUsqIad33JwkobXoAtZHyYsaxDVWYz45vJr9xRKskTO23O1KjxbmhJhkQegegLRq6yAKl8e02AoZSKufxsGyVpuSmrN3sjScx3Xsc7e7FpFwv0HWXTP4EYBdyYiTj8HgFr&X-Amz-Signature=4f33fc7a77ecc2032990069e1043cbe77f70e9109358c9ac4f0c8bc72bab36a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72SWCN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMQhUXCAaWK86Tl%2FuEDCvfXmH2a7MrSOVWox1xdFxOgIhAJr5fiRGXPF2kXSoOLKcMpoyRockLBWxV%2FSVlMImw5dxKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2jy%2FyrFp0KUo7hSUq3AM68HCqlgED3LEcXbgSFcYNeotCCTZ0Fo14Fa0s%2BRu7yYdqZytISJij5TpyIHzSLHKMxkpJBZH6eFQwFc3lj3l0PakISiP3Ba340kOp2dl%2BjwHVmnWvtjD2QkIwsxkY9C8q6XMlE93FyumDprUb6sJEN6T6NyQKRYj2KKPjVkkEnkoIT%2FgGNvYENcalmEOug1eIAE4Mf2iBt9MrBSuTf%2FMWVmO9AgE6PHVV4HW%2FIaJI2YSpbHPSWQyE0B9F9RzZzKJyy65aiOW4m1mZZ1ljc7mef%2Fci%2F8FNKjIt%2B%2Fo58Jow8BzJvjm%2FRjeAEM%2FeXbUZtqN1%2BhGw%2BwdSE%2B1epCy%2BdLwiUn9RjZFo1NLjzZRfBsNAQxYLLIamM%2BMVUXjP%2BwS6FFmgPIaR5LQubhPlArDcZNo%2BIKhrnpTcq0ZN%2FQcrukJ7nspUcdfI32CvAOjhG%2Bi6HvJwImK%2Fa%2B6Un315a0liM1i72udFTYLVbUtpXcbDZ5IF8zGnmeK9gAcCntln0PSoaUfFsWhWrtIWFhiYzMF1kckOA8KsbdZdi9nLW17T6SI6FlASGKsvJw4%2FG9Q4EAGPJiNXNXeO5ycwiXEBfTqmRnR4v1uDpzfZ8XIGXJUXQ2eTus8jC9wpdI%2Fb9sW6SjC1oYPBBjqkATYB1Rm1YtqYvDfJgcD03NKwh7ccf9sqafvG5wC8YpGwBdeKSxMKGnOYDwdQa4c4E3NKghdqM6F2TRJEX6tXAL2dktIUsqIad33JwkobXoAtZHyYsaxDVWYz45vJr9xRKskTO23O1KjxbmhJhkQegegLRq6yAKl8e02AoZSKufxsGyVpuSmrN3sjScx3Xsc7e7FpFwv0HWXTP4EYBdyYiTj8HgFr&X-Amz-Signature=a38a7a705cbdbdfef7f82b0839f9e3739f2c1ef987201ec003ae53023b1590e3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72SWCN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMQhUXCAaWK86Tl%2FuEDCvfXmH2a7MrSOVWox1xdFxOgIhAJr5fiRGXPF2kXSoOLKcMpoyRockLBWxV%2FSVlMImw5dxKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2jy%2FyrFp0KUo7hSUq3AM68HCqlgED3LEcXbgSFcYNeotCCTZ0Fo14Fa0s%2BRu7yYdqZytISJij5TpyIHzSLHKMxkpJBZH6eFQwFc3lj3l0PakISiP3Ba340kOp2dl%2BjwHVmnWvtjD2QkIwsxkY9C8q6XMlE93FyumDprUb6sJEN6T6NyQKRYj2KKPjVkkEnkoIT%2FgGNvYENcalmEOug1eIAE4Mf2iBt9MrBSuTf%2FMWVmO9AgE6PHVV4HW%2FIaJI2YSpbHPSWQyE0B9F9RzZzKJyy65aiOW4m1mZZ1ljc7mef%2Fci%2F8FNKjIt%2B%2Fo58Jow8BzJvjm%2FRjeAEM%2FeXbUZtqN1%2BhGw%2BwdSE%2B1epCy%2BdLwiUn9RjZFo1NLjzZRfBsNAQxYLLIamM%2BMVUXjP%2BwS6FFmgPIaR5LQubhPlArDcZNo%2BIKhrnpTcq0ZN%2FQcrukJ7nspUcdfI32CvAOjhG%2Bi6HvJwImK%2Fa%2B6Un315a0liM1i72udFTYLVbUtpXcbDZ5IF8zGnmeK9gAcCntln0PSoaUfFsWhWrtIWFhiYzMF1kckOA8KsbdZdi9nLW17T6SI6FlASGKsvJw4%2FG9Q4EAGPJiNXNXeO5ycwiXEBfTqmRnR4v1uDpzfZ8XIGXJUXQ2eTus8jC9wpdI%2Fb9sW6SjC1oYPBBjqkATYB1Rm1YtqYvDfJgcD03NKwh7ccf9sqafvG5wC8YpGwBdeKSxMKGnOYDwdQa4c4E3NKghdqM6F2TRJEX6tXAL2dktIUsqIad33JwkobXoAtZHyYsaxDVWYz45vJr9xRKskTO23O1KjxbmhJhkQegegLRq6yAKl8e02AoZSKufxsGyVpuSmrN3sjScx3Xsc7e7FpFwv0HWXTP4EYBdyYiTj8HgFr&X-Amz-Signature=3f9cc0fdbdf419156f90b4b15f9c6ea9dd70bbc2ec7843d5b17f8cfabbe59cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72SWCN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMQhUXCAaWK86Tl%2FuEDCvfXmH2a7MrSOVWox1xdFxOgIhAJr5fiRGXPF2kXSoOLKcMpoyRockLBWxV%2FSVlMImw5dxKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2jy%2FyrFp0KUo7hSUq3AM68HCqlgED3LEcXbgSFcYNeotCCTZ0Fo14Fa0s%2BRu7yYdqZytISJij5TpyIHzSLHKMxkpJBZH6eFQwFc3lj3l0PakISiP3Ba340kOp2dl%2BjwHVmnWvtjD2QkIwsxkY9C8q6XMlE93FyumDprUb6sJEN6T6NyQKRYj2KKPjVkkEnkoIT%2FgGNvYENcalmEOug1eIAE4Mf2iBt9MrBSuTf%2FMWVmO9AgE6PHVV4HW%2FIaJI2YSpbHPSWQyE0B9F9RzZzKJyy65aiOW4m1mZZ1ljc7mef%2Fci%2F8FNKjIt%2B%2Fo58Jow8BzJvjm%2FRjeAEM%2FeXbUZtqN1%2BhGw%2BwdSE%2B1epCy%2BdLwiUn9RjZFo1NLjzZRfBsNAQxYLLIamM%2BMVUXjP%2BwS6FFmgPIaR5LQubhPlArDcZNo%2BIKhrnpTcq0ZN%2FQcrukJ7nspUcdfI32CvAOjhG%2Bi6HvJwImK%2Fa%2B6Un315a0liM1i72udFTYLVbUtpXcbDZ5IF8zGnmeK9gAcCntln0PSoaUfFsWhWrtIWFhiYzMF1kckOA8KsbdZdi9nLW17T6SI6FlASGKsvJw4%2FG9Q4EAGPJiNXNXeO5ycwiXEBfTqmRnR4v1uDpzfZ8XIGXJUXQ2eTus8jC9wpdI%2Fb9sW6SjC1oYPBBjqkATYB1Rm1YtqYvDfJgcD03NKwh7ccf9sqafvG5wC8YpGwBdeKSxMKGnOYDwdQa4c4E3NKghdqM6F2TRJEX6tXAL2dktIUsqIad33JwkobXoAtZHyYsaxDVWYz45vJr9xRKskTO23O1KjxbmhJhkQegegLRq6yAKl8e02AoZSKufxsGyVpuSmrN3sjScx3Xsc7e7FpFwv0HWXTP4EYBdyYiTj8HgFr&X-Amz-Signature=98baffd0ff4fc7cb0c4c6083113d8bddd062425802b9d1fbb9f2a361f2e9f8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F72SWCN%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCdMQhUXCAaWK86Tl%2FuEDCvfXmH2a7MrSOVWox1xdFxOgIhAJr5fiRGXPF2kXSoOLKcMpoyRockLBWxV%2FSVlMImw5dxKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2jy%2FyrFp0KUo7hSUq3AM68HCqlgED3LEcXbgSFcYNeotCCTZ0Fo14Fa0s%2BRu7yYdqZytISJij5TpyIHzSLHKMxkpJBZH6eFQwFc3lj3l0PakISiP3Ba340kOp2dl%2BjwHVmnWvtjD2QkIwsxkY9C8q6XMlE93FyumDprUb6sJEN6T6NyQKRYj2KKPjVkkEnkoIT%2FgGNvYENcalmEOug1eIAE4Mf2iBt9MrBSuTf%2FMWVmO9AgE6PHVV4HW%2FIaJI2YSpbHPSWQyE0B9F9RzZzKJyy65aiOW4m1mZZ1ljc7mef%2Fci%2F8FNKjIt%2B%2Fo58Jow8BzJvjm%2FRjeAEM%2FeXbUZtqN1%2BhGw%2BwdSE%2B1epCy%2BdLwiUn9RjZFo1NLjzZRfBsNAQxYLLIamM%2BMVUXjP%2BwS6FFmgPIaR5LQubhPlArDcZNo%2BIKhrnpTcq0ZN%2FQcrukJ7nspUcdfI32CvAOjhG%2Bi6HvJwImK%2Fa%2B6Un315a0liM1i72udFTYLVbUtpXcbDZ5IF8zGnmeK9gAcCntln0PSoaUfFsWhWrtIWFhiYzMF1kckOA8KsbdZdi9nLW17T6SI6FlASGKsvJw4%2FG9Q4EAGPJiNXNXeO5ycwiXEBfTqmRnR4v1uDpzfZ8XIGXJUXQ2eTus8jC9wpdI%2Fb9sW6SjC1oYPBBjqkATYB1Rm1YtqYvDfJgcD03NKwh7ccf9sqafvG5wC8YpGwBdeKSxMKGnOYDwdQa4c4E3NKghdqM6F2TRJEX6tXAL2dktIUsqIad33JwkobXoAtZHyYsaxDVWYz45vJr9xRKskTO23O1KjxbmhJhkQegegLRq6yAKl8e02AoZSKufxsGyVpuSmrN3sjScx3Xsc7e7FpFwv0HWXTP4EYBdyYiTj8HgFr&X-Amz-Signature=849cff8953bbd67cee52361f29a19c08238b55ed643296e89034e942df2e6652&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
