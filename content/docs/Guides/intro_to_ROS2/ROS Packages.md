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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBVDOHW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDHzBdk4GBtypug9Y%2BWzJMVB2aOLrnqw%2F8EJv1EscysYgIhAM1d4HEdeBKbnIqmZwdPASpwBAJKaNwWLumiVP9%2Fye1oKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3a2JdMutFdEeGKkEq3AOQIAzW%2BYfELYnsGH3RMmXb2BePC82F9oeGDALLI7TPmMkohaqTV1gBMjZlb%2FAjtQ%2FAvd3gBcWHTlk%2F3SEVkhu8VuAG3qgKsoFcGQUV%2BdkckHhHFtxjgtqH3c2r6Qct%2BgFhCyxL%2BNaoJLH4H3WItF96XyVrr6HpJzXOk%2Fev6tCtLWVTfuuzgGthaLHArxk5tN932LWUrAcNWLLeZEIOqBsqzwJmQrkU3S7pRVelK5wboBru%2BXJy8JCKMm5vSzr%2FqAQw7G25mSjS6mSAFu1JU%2FxBjUvdDej0CJXNAcFBy5fKJRACKxih4ceDdm21%2FhWmNLg%2BaN%2FVFzKxjeyYgyaXWfO1zBLRStGz2okPZtG53J4fvVGavLSvnHVGDIIKGUBa5fmONX3o52LKuwdIVHtXOqLFQStrA8IhWvgea5jx5rpGCdeQsu6ahKiKmV4Gtx0BoKqfRUomAR9xLOO4g5cxjb7MED40zKfs4%2F7KdOJ87uRs6cvh5%2BMDQv%2BGfD6WVMkN3n7fJ%2Fxr5Fe9JORkLWbL%2BAyxDAyrFI6y%2BdgmdJURGHkcOfuz265OXP6XqTwmYO0Hk9%2F1H%2B8VKTRODOw4jQp0Yg3nHlcZ6e8NJSRBEs429dTz119LS6XRDBp3bO1axzDU7K%2B%2FBjqkARi9AIxKxL5rEcAcXKrBpo3VoxfzTv2radS5UnOCQnGgvH9Q2TaVyqHW67pQG8YyDDgSM58DR6Zy4XYYmD1x1j1urtIWU%2Fn%2Fmd0v%2FWTptcuegEfo63ImXacPYoPIQHqAvC3q1BBFAOr3AoLv8KtwWev3WGFsCVEGJmEfF9%2F18UQbdb%2FtU%2BVNBPaXOtqo%2B4xb%2B2bJApQ0sDUJumtBpH%2B1hWGe6%2BgZ&X-Amz-Signature=ff37043ba2c5cfdce079fb5fa9d0284c4ff456cad2dab84e421ab4771195c3d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBVDOHW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDHzBdk4GBtypug9Y%2BWzJMVB2aOLrnqw%2F8EJv1EscysYgIhAM1d4HEdeBKbnIqmZwdPASpwBAJKaNwWLumiVP9%2Fye1oKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3a2JdMutFdEeGKkEq3AOQIAzW%2BYfELYnsGH3RMmXb2BePC82F9oeGDALLI7TPmMkohaqTV1gBMjZlb%2FAjtQ%2FAvd3gBcWHTlk%2F3SEVkhu8VuAG3qgKsoFcGQUV%2BdkckHhHFtxjgtqH3c2r6Qct%2BgFhCyxL%2BNaoJLH4H3WItF96XyVrr6HpJzXOk%2Fev6tCtLWVTfuuzgGthaLHArxk5tN932LWUrAcNWLLeZEIOqBsqzwJmQrkU3S7pRVelK5wboBru%2BXJy8JCKMm5vSzr%2FqAQw7G25mSjS6mSAFu1JU%2FxBjUvdDej0CJXNAcFBy5fKJRACKxih4ceDdm21%2FhWmNLg%2BaN%2FVFzKxjeyYgyaXWfO1zBLRStGz2okPZtG53J4fvVGavLSvnHVGDIIKGUBa5fmONX3o52LKuwdIVHtXOqLFQStrA8IhWvgea5jx5rpGCdeQsu6ahKiKmV4Gtx0BoKqfRUomAR9xLOO4g5cxjb7MED40zKfs4%2F7KdOJ87uRs6cvh5%2BMDQv%2BGfD6WVMkN3n7fJ%2Fxr5Fe9JORkLWbL%2BAyxDAyrFI6y%2BdgmdJURGHkcOfuz265OXP6XqTwmYO0Hk9%2F1H%2B8VKTRODOw4jQp0Yg3nHlcZ6e8NJSRBEs429dTz119LS6XRDBp3bO1axzDU7K%2B%2FBjqkARi9AIxKxL5rEcAcXKrBpo3VoxfzTv2radS5UnOCQnGgvH9Q2TaVyqHW67pQG8YyDDgSM58DR6Zy4XYYmD1x1j1urtIWU%2Fn%2Fmd0v%2FWTptcuegEfo63ImXacPYoPIQHqAvC3q1BBFAOr3AoLv8KtwWev3WGFsCVEGJmEfF9%2F18UQbdb%2FtU%2BVNBPaXOtqo%2B4xb%2B2bJApQ0sDUJumtBpH%2B1hWGe6%2BgZ&X-Amz-Signature=6d021d833d3b3402d6475082e8aa9907b488b65b219b4aa978808a843b49e63e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBVDOHW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDHzBdk4GBtypug9Y%2BWzJMVB2aOLrnqw%2F8EJv1EscysYgIhAM1d4HEdeBKbnIqmZwdPASpwBAJKaNwWLumiVP9%2Fye1oKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3a2JdMutFdEeGKkEq3AOQIAzW%2BYfELYnsGH3RMmXb2BePC82F9oeGDALLI7TPmMkohaqTV1gBMjZlb%2FAjtQ%2FAvd3gBcWHTlk%2F3SEVkhu8VuAG3qgKsoFcGQUV%2BdkckHhHFtxjgtqH3c2r6Qct%2BgFhCyxL%2BNaoJLH4H3WItF96XyVrr6HpJzXOk%2Fev6tCtLWVTfuuzgGthaLHArxk5tN932LWUrAcNWLLeZEIOqBsqzwJmQrkU3S7pRVelK5wboBru%2BXJy8JCKMm5vSzr%2FqAQw7G25mSjS6mSAFu1JU%2FxBjUvdDej0CJXNAcFBy5fKJRACKxih4ceDdm21%2FhWmNLg%2BaN%2FVFzKxjeyYgyaXWfO1zBLRStGz2okPZtG53J4fvVGavLSvnHVGDIIKGUBa5fmONX3o52LKuwdIVHtXOqLFQStrA8IhWvgea5jx5rpGCdeQsu6ahKiKmV4Gtx0BoKqfRUomAR9xLOO4g5cxjb7MED40zKfs4%2F7KdOJ87uRs6cvh5%2BMDQv%2BGfD6WVMkN3n7fJ%2Fxr5Fe9JORkLWbL%2BAyxDAyrFI6y%2BdgmdJURGHkcOfuz265OXP6XqTwmYO0Hk9%2F1H%2B8VKTRODOw4jQp0Yg3nHlcZ6e8NJSRBEs429dTz119LS6XRDBp3bO1axzDU7K%2B%2FBjqkARi9AIxKxL5rEcAcXKrBpo3VoxfzTv2radS5UnOCQnGgvH9Q2TaVyqHW67pQG8YyDDgSM58DR6Zy4XYYmD1x1j1urtIWU%2Fn%2Fmd0v%2FWTptcuegEfo63ImXacPYoPIQHqAvC3q1BBFAOr3AoLv8KtwWev3WGFsCVEGJmEfF9%2F18UQbdb%2FtU%2BVNBPaXOtqo%2B4xb%2B2bJApQ0sDUJumtBpH%2B1hWGe6%2BgZ&X-Amz-Signature=aa6c0c9c4bb796bdfdfa70090bf9b06fced3a7361d434d547c37987a18dff2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBVDOHW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDHzBdk4GBtypug9Y%2BWzJMVB2aOLrnqw%2F8EJv1EscysYgIhAM1d4HEdeBKbnIqmZwdPASpwBAJKaNwWLumiVP9%2Fye1oKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3a2JdMutFdEeGKkEq3AOQIAzW%2BYfELYnsGH3RMmXb2BePC82F9oeGDALLI7TPmMkohaqTV1gBMjZlb%2FAjtQ%2FAvd3gBcWHTlk%2F3SEVkhu8VuAG3qgKsoFcGQUV%2BdkckHhHFtxjgtqH3c2r6Qct%2BgFhCyxL%2BNaoJLH4H3WItF96XyVrr6HpJzXOk%2Fev6tCtLWVTfuuzgGthaLHArxk5tN932LWUrAcNWLLeZEIOqBsqzwJmQrkU3S7pRVelK5wboBru%2BXJy8JCKMm5vSzr%2FqAQw7G25mSjS6mSAFu1JU%2FxBjUvdDej0CJXNAcFBy5fKJRACKxih4ceDdm21%2FhWmNLg%2BaN%2FVFzKxjeyYgyaXWfO1zBLRStGz2okPZtG53J4fvVGavLSvnHVGDIIKGUBa5fmONX3o52LKuwdIVHtXOqLFQStrA8IhWvgea5jx5rpGCdeQsu6ahKiKmV4Gtx0BoKqfRUomAR9xLOO4g5cxjb7MED40zKfs4%2F7KdOJ87uRs6cvh5%2BMDQv%2BGfD6WVMkN3n7fJ%2Fxr5Fe9JORkLWbL%2BAyxDAyrFI6y%2BdgmdJURGHkcOfuz265OXP6XqTwmYO0Hk9%2F1H%2B8VKTRODOw4jQp0Yg3nHlcZ6e8NJSRBEs429dTz119LS6XRDBp3bO1axzDU7K%2B%2FBjqkARi9AIxKxL5rEcAcXKrBpo3VoxfzTv2radS5UnOCQnGgvH9Q2TaVyqHW67pQG8YyDDgSM58DR6Zy4XYYmD1x1j1urtIWU%2Fn%2Fmd0v%2FWTptcuegEfo63ImXacPYoPIQHqAvC3q1BBFAOr3AoLv8KtwWev3WGFsCVEGJmEfF9%2F18UQbdb%2FtU%2BVNBPaXOtqo%2B4xb%2B2bJApQ0sDUJumtBpH%2B1hWGe6%2BgZ&X-Amz-Signature=1eb768c7abfff908f6dacbca7da08cb5cd2dcb8389ad1b7d9245b76e368b5253&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBVDOHW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDHzBdk4GBtypug9Y%2BWzJMVB2aOLrnqw%2F8EJv1EscysYgIhAM1d4HEdeBKbnIqmZwdPASpwBAJKaNwWLumiVP9%2Fye1oKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3a2JdMutFdEeGKkEq3AOQIAzW%2BYfELYnsGH3RMmXb2BePC82F9oeGDALLI7TPmMkohaqTV1gBMjZlb%2FAjtQ%2FAvd3gBcWHTlk%2F3SEVkhu8VuAG3qgKsoFcGQUV%2BdkckHhHFtxjgtqH3c2r6Qct%2BgFhCyxL%2BNaoJLH4H3WItF96XyVrr6HpJzXOk%2Fev6tCtLWVTfuuzgGthaLHArxk5tN932LWUrAcNWLLeZEIOqBsqzwJmQrkU3S7pRVelK5wboBru%2BXJy8JCKMm5vSzr%2FqAQw7G25mSjS6mSAFu1JU%2FxBjUvdDej0CJXNAcFBy5fKJRACKxih4ceDdm21%2FhWmNLg%2BaN%2FVFzKxjeyYgyaXWfO1zBLRStGz2okPZtG53J4fvVGavLSvnHVGDIIKGUBa5fmONX3o52LKuwdIVHtXOqLFQStrA8IhWvgea5jx5rpGCdeQsu6ahKiKmV4Gtx0BoKqfRUomAR9xLOO4g5cxjb7MED40zKfs4%2F7KdOJ87uRs6cvh5%2BMDQv%2BGfD6WVMkN3n7fJ%2Fxr5Fe9JORkLWbL%2BAyxDAyrFI6y%2BdgmdJURGHkcOfuz265OXP6XqTwmYO0Hk9%2F1H%2B8VKTRODOw4jQp0Yg3nHlcZ6e8NJSRBEs429dTz119LS6XRDBp3bO1axzDU7K%2B%2FBjqkARi9AIxKxL5rEcAcXKrBpo3VoxfzTv2radS5UnOCQnGgvH9Q2TaVyqHW67pQG8YyDDgSM58DR6Zy4XYYmD1x1j1urtIWU%2Fn%2Fmd0v%2FWTptcuegEfo63ImXacPYoPIQHqAvC3q1BBFAOr3AoLv8KtwWev3WGFsCVEGJmEfF9%2F18UQbdb%2FtU%2BVNBPaXOtqo%2B4xb%2B2bJApQ0sDUJumtBpH%2B1hWGe6%2BgZ&X-Amz-Signature=0b7b0b4d599e1fb71fb0ccf2c0bd920bdedb40b65383d07dd7aab4c117a39d51&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBVDOHW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDHzBdk4GBtypug9Y%2BWzJMVB2aOLrnqw%2F8EJv1EscysYgIhAM1d4HEdeBKbnIqmZwdPASpwBAJKaNwWLumiVP9%2Fye1oKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3a2JdMutFdEeGKkEq3AOQIAzW%2BYfELYnsGH3RMmXb2BePC82F9oeGDALLI7TPmMkohaqTV1gBMjZlb%2FAjtQ%2FAvd3gBcWHTlk%2F3SEVkhu8VuAG3qgKsoFcGQUV%2BdkckHhHFtxjgtqH3c2r6Qct%2BgFhCyxL%2BNaoJLH4H3WItF96XyVrr6HpJzXOk%2Fev6tCtLWVTfuuzgGthaLHArxk5tN932LWUrAcNWLLeZEIOqBsqzwJmQrkU3S7pRVelK5wboBru%2BXJy8JCKMm5vSzr%2FqAQw7G25mSjS6mSAFu1JU%2FxBjUvdDej0CJXNAcFBy5fKJRACKxih4ceDdm21%2FhWmNLg%2BaN%2FVFzKxjeyYgyaXWfO1zBLRStGz2okPZtG53J4fvVGavLSvnHVGDIIKGUBa5fmONX3o52LKuwdIVHtXOqLFQStrA8IhWvgea5jx5rpGCdeQsu6ahKiKmV4Gtx0BoKqfRUomAR9xLOO4g5cxjb7MED40zKfs4%2F7KdOJ87uRs6cvh5%2BMDQv%2BGfD6WVMkN3n7fJ%2Fxr5Fe9JORkLWbL%2BAyxDAyrFI6y%2BdgmdJURGHkcOfuz265OXP6XqTwmYO0Hk9%2F1H%2B8VKTRODOw4jQp0Yg3nHlcZ6e8NJSRBEs429dTz119LS6XRDBp3bO1axzDU7K%2B%2FBjqkARi9AIxKxL5rEcAcXKrBpo3VoxfzTv2radS5UnOCQnGgvH9Q2TaVyqHW67pQG8YyDDgSM58DR6Zy4XYYmD1x1j1urtIWU%2Fn%2Fmd0v%2FWTptcuegEfo63ImXacPYoPIQHqAvC3q1BBFAOr3AoLv8KtwWev3WGFsCVEGJmEfF9%2F18UQbdb%2FtU%2BVNBPaXOtqo%2B4xb%2B2bJApQ0sDUJumtBpH%2B1hWGe6%2BgZ&X-Amz-Signature=a6193f5f4fd68d5f592399d725d0fa6a492b5bd5f356e302a744668965f8a493&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBVDOHW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDHzBdk4GBtypug9Y%2BWzJMVB2aOLrnqw%2F8EJv1EscysYgIhAM1d4HEdeBKbnIqmZwdPASpwBAJKaNwWLumiVP9%2Fye1oKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3a2JdMutFdEeGKkEq3AOQIAzW%2BYfELYnsGH3RMmXb2BePC82F9oeGDALLI7TPmMkohaqTV1gBMjZlb%2FAjtQ%2FAvd3gBcWHTlk%2F3SEVkhu8VuAG3qgKsoFcGQUV%2BdkckHhHFtxjgtqH3c2r6Qct%2BgFhCyxL%2BNaoJLH4H3WItF96XyVrr6HpJzXOk%2Fev6tCtLWVTfuuzgGthaLHArxk5tN932LWUrAcNWLLeZEIOqBsqzwJmQrkU3S7pRVelK5wboBru%2BXJy8JCKMm5vSzr%2FqAQw7G25mSjS6mSAFu1JU%2FxBjUvdDej0CJXNAcFBy5fKJRACKxih4ceDdm21%2FhWmNLg%2BaN%2FVFzKxjeyYgyaXWfO1zBLRStGz2okPZtG53J4fvVGavLSvnHVGDIIKGUBa5fmONX3o52LKuwdIVHtXOqLFQStrA8IhWvgea5jx5rpGCdeQsu6ahKiKmV4Gtx0BoKqfRUomAR9xLOO4g5cxjb7MED40zKfs4%2F7KdOJ87uRs6cvh5%2BMDQv%2BGfD6WVMkN3n7fJ%2Fxr5Fe9JORkLWbL%2BAyxDAyrFI6y%2BdgmdJURGHkcOfuz265OXP6XqTwmYO0Hk9%2F1H%2B8VKTRODOw4jQp0Yg3nHlcZ6e8NJSRBEs429dTz119LS6XRDBp3bO1axzDU7K%2B%2FBjqkARi9AIxKxL5rEcAcXKrBpo3VoxfzTv2radS5UnOCQnGgvH9Q2TaVyqHW67pQG8YyDDgSM58DR6Zy4XYYmD1x1j1urtIWU%2Fn%2Fmd0v%2FWTptcuegEfo63ImXacPYoPIQHqAvC3q1BBFAOr3AoLv8KtwWev3WGFsCVEGJmEfF9%2F18UQbdb%2FtU%2BVNBPaXOtqo%2B4xb%2B2bJApQ0sDUJumtBpH%2B1hWGe6%2BgZ&X-Amz-Signature=c9e7d1f73bd9fc4fd8ebaf1a2d86586aa7b1d97b9e5efa345a9a729d62809979&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
