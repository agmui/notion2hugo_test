---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLT6XNH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIet67sVNCV4TAo070Sb2jTJDMz6fE4%2FsalXaTEHaLuAIgYHwu967HLtjDgpPIDhU49Z9YpgjECMBRQ1JOBTwvkiEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmaMIw7xf8YEs7%2FeCrcA1q%2FIhFnUe%2Bj0olSIU39WltukqIpT%2Bf1gDflqgiP2bf7iVPka9STHOIJE2nW8zkzRVo%2B6vjDlMhU%2FCw0w%2BGylw10HaepsAysc4cISk2z6oqnb6IovqmyzuI5JYqlahF%2BbqCHS%2BKMqZStyKhDUAEHA046Z7W7pCBv6VOGVslQ9Y%2Bn4zOl0YG%2B2mPo%2FgNeAq27phrDAMTbdv2%2FnlcwLV3W%2Bk9NLFqN0s9LuAtHw2kcvVgf9TtE6LkJQ0nUtoqoqohqXWTNd0bBqH6LRIaXGw0kshG4VF4ouZXw9kigdyBc4pjNTFxzewD7ner%2BQXQh9P3OSluOGSSzQRK2oHf7G3na71lasm7%2FX1WBOViefTqaFgbnaB2AnTBbjkS8eXL9bTdLC0qV03ujk6hwUqeuuHO8B8HGLCNzEobE5r0wdRbCOZy1A4Ngdg2ofA3xWIibOyMs0v6ZrZ1fIkyrCuqvuD5cT6RcyD%2F%2B%2FxKKaKV%2Fp5b709iDwBd4YadLUkJQCqSVdUrB1qJPhWl3JLjrvXS7K8vB5Pc6kgX%2BicqIEk1yBHZsc6gWYslZkzsxRQjyDhc4Kp8bR58K7i%2BNEYS5V8ja9p6a1epxJZ0tevN03rACWdKbAKp%2BmZVjQUMus2LSexUVMK%2FrscQGOqUBZxjK7tFzsk2oyC33TUvAHzVIiLuv5nswLghyavcTlEq55S%2FO3%2BKsDgZz5gsU2c4pR46mxMCpQ4COvIGW%2FZe8ridyF25Um1f%2FUKz8gW7%2BfmDGS%2B3k42LmbVlTNbMtx3Hbvs3vP9ksBGVtUk%2FmNsOIhfNvRDBhA2DkydY0zdmcN%2BTNEg%2FdI3q0BDwD3%2BUOvn0gasVMjLpCzZoplJvimQfdVWLPoGx%2F&X-Amz-Signature=1941d24d277aa2ba714be2b14a95d8cb08eb0bc233986365b081b8b698d86f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLT6XNH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIet67sVNCV4TAo070Sb2jTJDMz6fE4%2FsalXaTEHaLuAIgYHwu967HLtjDgpPIDhU49Z9YpgjECMBRQ1JOBTwvkiEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmaMIw7xf8YEs7%2FeCrcA1q%2FIhFnUe%2Bj0olSIU39WltukqIpT%2Bf1gDflqgiP2bf7iVPka9STHOIJE2nW8zkzRVo%2B6vjDlMhU%2FCw0w%2BGylw10HaepsAysc4cISk2z6oqnb6IovqmyzuI5JYqlahF%2BbqCHS%2BKMqZStyKhDUAEHA046Z7W7pCBv6VOGVslQ9Y%2Bn4zOl0YG%2B2mPo%2FgNeAq27phrDAMTbdv2%2FnlcwLV3W%2Bk9NLFqN0s9LuAtHw2kcvVgf9TtE6LkJQ0nUtoqoqohqXWTNd0bBqH6LRIaXGw0kshG4VF4ouZXw9kigdyBc4pjNTFxzewD7ner%2BQXQh9P3OSluOGSSzQRK2oHf7G3na71lasm7%2FX1WBOViefTqaFgbnaB2AnTBbjkS8eXL9bTdLC0qV03ujk6hwUqeuuHO8B8HGLCNzEobE5r0wdRbCOZy1A4Ngdg2ofA3xWIibOyMs0v6ZrZ1fIkyrCuqvuD5cT6RcyD%2F%2B%2FxKKaKV%2Fp5b709iDwBd4YadLUkJQCqSVdUrB1qJPhWl3JLjrvXS7K8vB5Pc6kgX%2BicqIEk1yBHZsc6gWYslZkzsxRQjyDhc4Kp8bR58K7i%2BNEYS5V8ja9p6a1epxJZ0tevN03rACWdKbAKp%2BmZVjQUMus2LSexUVMK%2FrscQGOqUBZxjK7tFzsk2oyC33TUvAHzVIiLuv5nswLghyavcTlEq55S%2FO3%2BKsDgZz5gsU2c4pR46mxMCpQ4COvIGW%2FZe8ridyF25Um1f%2FUKz8gW7%2BfmDGS%2B3k42LmbVlTNbMtx3Hbvs3vP9ksBGVtUk%2FmNsOIhfNvRDBhA2DkydY0zdmcN%2BTNEg%2FdI3q0BDwD3%2BUOvn0gasVMjLpCzZoplJvimQfdVWLPoGx%2F&X-Amz-Signature=8e12b93790fa69b6ad9e2e303318ac0dead9a5e24f62614ae2d819c93ad67c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLT6XNH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIet67sVNCV4TAo070Sb2jTJDMz6fE4%2FsalXaTEHaLuAIgYHwu967HLtjDgpPIDhU49Z9YpgjECMBRQ1JOBTwvkiEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmaMIw7xf8YEs7%2FeCrcA1q%2FIhFnUe%2Bj0olSIU39WltukqIpT%2Bf1gDflqgiP2bf7iVPka9STHOIJE2nW8zkzRVo%2B6vjDlMhU%2FCw0w%2BGylw10HaepsAysc4cISk2z6oqnb6IovqmyzuI5JYqlahF%2BbqCHS%2BKMqZStyKhDUAEHA046Z7W7pCBv6VOGVslQ9Y%2Bn4zOl0YG%2B2mPo%2FgNeAq27phrDAMTbdv2%2FnlcwLV3W%2Bk9NLFqN0s9LuAtHw2kcvVgf9TtE6LkJQ0nUtoqoqohqXWTNd0bBqH6LRIaXGw0kshG4VF4ouZXw9kigdyBc4pjNTFxzewD7ner%2BQXQh9P3OSluOGSSzQRK2oHf7G3na71lasm7%2FX1WBOViefTqaFgbnaB2AnTBbjkS8eXL9bTdLC0qV03ujk6hwUqeuuHO8B8HGLCNzEobE5r0wdRbCOZy1A4Ngdg2ofA3xWIibOyMs0v6ZrZ1fIkyrCuqvuD5cT6RcyD%2F%2B%2FxKKaKV%2Fp5b709iDwBd4YadLUkJQCqSVdUrB1qJPhWl3JLjrvXS7K8vB5Pc6kgX%2BicqIEk1yBHZsc6gWYslZkzsxRQjyDhc4Kp8bR58K7i%2BNEYS5V8ja9p6a1epxJZ0tevN03rACWdKbAKp%2BmZVjQUMus2LSexUVMK%2FrscQGOqUBZxjK7tFzsk2oyC33TUvAHzVIiLuv5nswLghyavcTlEq55S%2FO3%2BKsDgZz5gsU2c4pR46mxMCpQ4COvIGW%2FZe8ridyF25Um1f%2FUKz8gW7%2BfmDGS%2B3k42LmbVlTNbMtx3Hbvs3vP9ksBGVtUk%2FmNsOIhfNvRDBhA2DkydY0zdmcN%2BTNEg%2FdI3q0BDwD3%2BUOvn0gasVMjLpCzZoplJvimQfdVWLPoGx%2F&X-Amz-Signature=1132aa209816eefb7e5896a1e8e876a9bbecb72ebaedb3fe7d546d1c1d91256a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLT6XNH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIet67sVNCV4TAo070Sb2jTJDMz6fE4%2FsalXaTEHaLuAIgYHwu967HLtjDgpPIDhU49Z9YpgjECMBRQ1JOBTwvkiEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmaMIw7xf8YEs7%2FeCrcA1q%2FIhFnUe%2Bj0olSIU39WltukqIpT%2Bf1gDflqgiP2bf7iVPka9STHOIJE2nW8zkzRVo%2B6vjDlMhU%2FCw0w%2BGylw10HaepsAysc4cISk2z6oqnb6IovqmyzuI5JYqlahF%2BbqCHS%2BKMqZStyKhDUAEHA046Z7W7pCBv6VOGVslQ9Y%2Bn4zOl0YG%2B2mPo%2FgNeAq27phrDAMTbdv2%2FnlcwLV3W%2Bk9NLFqN0s9LuAtHw2kcvVgf9TtE6LkJQ0nUtoqoqohqXWTNd0bBqH6LRIaXGw0kshG4VF4ouZXw9kigdyBc4pjNTFxzewD7ner%2BQXQh9P3OSluOGSSzQRK2oHf7G3na71lasm7%2FX1WBOViefTqaFgbnaB2AnTBbjkS8eXL9bTdLC0qV03ujk6hwUqeuuHO8B8HGLCNzEobE5r0wdRbCOZy1A4Ngdg2ofA3xWIibOyMs0v6ZrZ1fIkyrCuqvuD5cT6RcyD%2F%2B%2FxKKaKV%2Fp5b709iDwBd4YadLUkJQCqSVdUrB1qJPhWl3JLjrvXS7K8vB5Pc6kgX%2BicqIEk1yBHZsc6gWYslZkzsxRQjyDhc4Kp8bR58K7i%2BNEYS5V8ja9p6a1epxJZ0tevN03rACWdKbAKp%2BmZVjQUMus2LSexUVMK%2FrscQGOqUBZxjK7tFzsk2oyC33TUvAHzVIiLuv5nswLghyavcTlEq55S%2FO3%2BKsDgZz5gsU2c4pR46mxMCpQ4COvIGW%2FZe8ridyF25Um1f%2FUKz8gW7%2BfmDGS%2B3k42LmbVlTNbMtx3Hbvs3vP9ksBGVtUk%2FmNsOIhfNvRDBhA2DkydY0zdmcN%2BTNEg%2FdI3q0BDwD3%2BUOvn0gasVMjLpCzZoplJvimQfdVWLPoGx%2F&X-Amz-Signature=2ce704ec5fc35560d6a943b575f8226c1608f5c2da5696a19a479989dd824129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLT6XNH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIet67sVNCV4TAo070Sb2jTJDMz6fE4%2FsalXaTEHaLuAIgYHwu967HLtjDgpPIDhU49Z9YpgjECMBRQ1JOBTwvkiEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmaMIw7xf8YEs7%2FeCrcA1q%2FIhFnUe%2Bj0olSIU39WltukqIpT%2Bf1gDflqgiP2bf7iVPka9STHOIJE2nW8zkzRVo%2B6vjDlMhU%2FCw0w%2BGylw10HaepsAysc4cISk2z6oqnb6IovqmyzuI5JYqlahF%2BbqCHS%2BKMqZStyKhDUAEHA046Z7W7pCBv6VOGVslQ9Y%2Bn4zOl0YG%2B2mPo%2FgNeAq27phrDAMTbdv2%2FnlcwLV3W%2Bk9NLFqN0s9LuAtHw2kcvVgf9TtE6LkJQ0nUtoqoqohqXWTNd0bBqH6LRIaXGw0kshG4VF4ouZXw9kigdyBc4pjNTFxzewD7ner%2BQXQh9P3OSluOGSSzQRK2oHf7G3na71lasm7%2FX1WBOViefTqaFgbnaB2AnTBbjkS8eXL9bTdLC0qV03ujk6hwUqeuuHO8B8HGLCNzEobE5r0wdRbCOZy1A4Ngdg2ofA3xWIibOyMs0v6ZrZ1fIkyrCuqvuD5cT6RcyD%2F%2B%2FxKKaKV%2Fp5b709iDwBd4YadLUkJQCqSVdUrB1qJPhWl3JLjrvXS7K8vB5Pc6kgX%2BicqIEk1yBHZsc6gWYslZkzsxRQjyDhc4Kp8bR58K7i%2BNEYS5V8ja9p6a1epxJZ0tevN03rACWdKbAKp%2BmZVjQUMus2LSexUVMK%2FrscQGOqUBZxjK7tFzsk2oyC33TUvAHzVIiLuv5nswLghyavcTlEq55S%2FO3%2BKsDgZz5gsU2c4pR46mxMCpQ4COvIGW%2FZe8ridyF25Um1f%2FUKz8gW7%2BfmDGS%2B3k42LmbVlTNbMtx3Hbvs3vP9ksBGVtUk%2FmNsOIhfNvRDBhA2DkydY0zdmcN%2BTNEg%2FdI3q0BDwD3%2BUOvn0gasVMjLpCzZoplJvimQfdVWLPoGx%2F&X-Amz-Signature=f5dc71e2aee003d2e0d3ec47857f63e014be82abbb6fcb5d139c0c90a3b667fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLT6XNH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIet67sVNCV4TAo070Sb2jTJDMz6fE4%2FsalXaTEHaLuAIgYHwu967HLtjDgpPIDhU49Z9YpgjECMBRQ1JOBTwvkiEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmaMIw7xf8YEs7%2FeCrcA1q%2FIhFnUe%2Bj0olSIU39WltukqIpT%2Bf1gDflqgiP2bf7iVPka9STHOIJE2nW8zkzRVo%2B6vjDlMhU%2FCw0w%2BGylw10HaepsAysc4cISk2z6oqnb6IovqmyzuI5JYqlahF%2BbqCHS%2BKMqZStyKhDUAEHA046Z7W7pCBv6VOGVslQ9Y%2Bn4zOl0YG%2B2mPo%2FgNeAq27phrDAMTbdv2%2FnlcwLV3W%2Bk9NLFqN0s9LuAtHw2kcvVgf9TtE6LkJQ0nUtoqoqohqXWTNd0bBqH6LRIaXGw0kshG4VF4ouZXw9kigdyBc4pjNTFxzewD7ner%2BQXQh9P3OSluOGSSzQRK2oHf7G3na71lasm7%2FX1WBOViefTqaFgbnaB2AnTBbjkS8eXL9bTdLC0qV03ujk6hwUqeuuHO8B8HGLCNzEobE5r0wdRbCOZy1A4Ngdg2ofA3xWIibOyMs0v6ZrZ1fIkyrCuqvuD5cT6RcyD%2F%2B%2FxKKaKV%2Fp5b709iDwBd4YadLUkJQCqSVdUrB1qJPhWl3JLjrvXS7K8vB5Pc6kgX%2BicqIEk1yBHZsc6gWYslZkzsxRQjyDhc4Kp8bR58K7i%2BNEYS5V8ja9p6a1epxJZ0tevN03rACWdKbAKp%2BmZVjQUMus2LSexUVMK%2FrscQGOqUBZxjK7tFzsk2oyC33TUvAHzVIiLuv5nswLghyavcTlEq55S%2FO3%2BKsDgZz5gsU2c4pR46mxMCpQ4COvIGW%2FZe8ridyF25Um1f%2FUKz8gW7%2BfmDGS%2B3k42LmbVlTNbMtx3Hbvs3vP9ksBGVtUk%2FmNsOIhfNvRDBhA2DkydY0zdmcN%2BTNEg%2FdI3q0BDwD3%2BUOvn0gasVMjLpCzZoplJvimQfdVWLPoGx%2F&X-Amz-Signature=63cbd6cf0b622b8803bdf0fa2afd5d7f1440d22bd4d43d7ae0cca452f31b32cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLT6XNH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIet67sVNCV4TAo070Sb2jTJDMz6fE4%2FsalXaTEHaLuAIgYHwu967HLtjDgpPIDhU49Z9YpgjECMBRQ1JOBTwvkiEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmaMIw7xf8YEs7%2FeCrcA1q%2FIhFnUe%2Bj0olSIU39WltukqIpT%2Bf1gDflqgiP2bf7iVPka9STHOIJE2nW8zkzRVo%2B6vjDlMhU%2FCw0w%2BGylw10HaepsAysc4cISk2z6oqnb6IovqmyzuI5JYqlahF%2BbqCHS%2BKMqZStyKhDUAEHA046Z7W7pCBv6VOGVslQ9Y%2Bn4zOl0YG%2B2mPo%2FgNeAq27phrDAMTbdv2%2FnlcwLV3W%2Bk9NLFqN0s9LuAtHw2kcvVgf9TtE6LkJQ0nUtoqoqohqXWTNd0bBqH6LRIaXGw0kshG4VF4ouZXw9kigdyBc4pjNTFxzewD7ner%2BQXQh9P3OSluOGSSzQRK2oHf7G3na71lasm7%2FX1WBOViefTqaFgbnaB2AnTBbjkS8eXL9bTdLC0qV03ujk6hwUqeuuHO8B8HGLCNzEobE5r0wdRbCOZy1A4Ngdg2ofA3xWIibOyMs0v6ZrZ1fIkyrCuqvuD5cT6RcyD%2F%2B%2FxKKaKV%2Fp5b709iDwBd4YadLUkJQCqSVdUrB1qJPhWl3JLjrvXS7K8vB5Pc6kgX%2BicqIEk1yBHZsc6gWYslZkzsxRQjyDhc4Kp8bR58K7i%2BNEYS5V8ja9p6a1epxJZ0tevN03rACWdKbAKp%2BmZVjQUMus2LSexUVMK%2FrscQGOqUBZxjK7tFzsk2oyC33TUvAHzVIiLuv5nswLghyavcTlEq55S%2FO3%2BKsDgZz5gsU2c4pR46mxMCpQ4COvIGW%2FZe8ridyF25Um1f%2FUKz8gW7%2BfmDGS%2B3k42LmbVlTNbMtx3Hbvs3vP9ksBGVtUk%2FmNsOIhfNvRDBhA2DkydY0zdmcN%2BTNEg%2FdI3q0BDwD3%2BUOvn0gasVMjLpCzZoplJvimQfdVWLPoGx%2F&X-Amz-Signature=f8a40b4ef82a7a5e8fb89d1dcf4c63c6a51b492a896ea2b36656ba61336400fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
