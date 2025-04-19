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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNBTSBT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0EbFMenDjwdLB2Ry9EIr2edk4q4bg%2BA6ux5f2FH4XEgIgFAP5JH6odzbp%2B%2BWIDEBctwU1Om6R7WvC9NPB3E5XvBAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPPcwj2R%2FwOAabsByrcA6gEsW%2BWX5Qu7Fe%2FuHCKN%2F4NA2nkexA%2BD%2FrIuaVkI76Ng4P1yDzXBSsJGXyO5DeaXHE0uPJqVaiWk5PDfDHSp388n%2BTQKPIckmvdyah%2BssMFbkEFFQT4unJG0e77fqYd0kc9YZVYZ0KKkyAzOopcrbtgzW%2F3CCBSP62xFeEOEA03aD5dah9pSqs6aXmojHwDv7sHfC5RsoV3YVu7CEpzr%2F%2FZBXeQ4m79VNyELuqTPmVpLhFY3LXjg%2FHsCJtvy5D11VT%2F7KdwbFQNa55z5DjpKbhsAUTenyxGGsfqnRZnveCORdWx7wcWOTemM0m137aGTx7gU3IshA4EKeSYmog0PE453W1EHTm7KsdNkOEIFafVV2OQW7Q1CbBg1KJ23sU%2B6X2rAh4XOgnFg4UXStMusXcYcWndLfAZZahfxuEU%2BhMewextQhARVBnMTHg8fHcjOyLv%2F3rr%2BxUHOBkKw345iB4A%2BOW%2FOKcJUwsL3QzJnUlSvltXaOiJyLJJ67utD2eZtnj5pqCTlqtPgywxfhiQBLeBMoQeRxo3nT3MdGMaBzboPQT4uS%2FfkdV7FqJymlhNVqyb8zHGU5%2Bwz8DMEVytgwrNsPbexGDwNhu%2BOLSTpNQAGzAcXL7m%2FWB%2FfxopMLv9jMAGOqUBzQOB6VNnTeZt0Wzk8UwIjPFtK4rR34rWQ1IP33TJS2Y%2FJdDGumVpHT4EGjZkxZBGghtBeigj449cOqRsGUnh9LcpiBRkQPD2c%2BzzzgzVHTLVsXyJK3T8I6EwV5fJWysxABpPGe1o1W1jojwWWW%2B8cS7D5NMtVokYqiaJtl0l43ICeIhIzU4SOIrbyz1jVDbDm7kUFMiY5OcRVPs8F4PbhrfEAxtB&X-Amz-Signature=59ecc56e6e6f6e9abb480c9bf0f083af46914125074182b28e9227a3f828fdf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNBTSBT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0EbFMenDjwdLB2Ry9EIr2edk4q4bg%2BA6ux5f2FH4XEgIgFAP5JH6odzbp%2B%2BWIDEBctwU1Om6R7WvC9NPB3E5XvBAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPPcwj2R%2FwOAabsByrcA6gEsW%2BWX5Qu7Fe%2FuHCKN%2F4NA2nkexA%2BD%2FrIuaVkI76Ng4P1yDzXBSsJGXyO5DeaXHE0uPJqVaiWk5PDfDHSp388n%2BTQKPIckmvdyah%2BssMFbkEFFQT4unJG0e77fqYd0kc9YZVYZ0KKkyAzOopcrbtgzW%2F3CCBSP62xFeEOEA03aD5dah9pSqs6aXmojHwDv7sHfC5RsoV3YVu7CEpzr%2F%2FZBXeQ4m79VNyELuqTPmVpLhFY3LXjg%2FHsCJtvy5D11VT%2F7KdwbFQNa55z5DjpKbhsAUTenyxGGsfqnRZnveCORdWx7wcWOTemM0m137aGTx7gU3IshA4EKeSYmog0PE453W1EHTm7KsdNkOEIFafVV2OQW7Q1CbBg1KJ23sU%2B6X2rAh4XOgnFg4UXStMusXcYcWndLfAZZahfxuEU%2BhMewextQhARVBnMTHg8fHcjOyLv%2F3rr%2BxUHOBkKw345iB4A%2BOW%2FOKcJUwsL3QzJnUlSvltXaOiJyLJJ67utD2eZtnj5pqCTlqtPgywxfhiQBLeBMoQeRxo3nT3MdGMaBzboPQT4uS%2FfkdV7FqJymlhNVqyb8zHGU5%2Bwz8DMEVytgwrNsPbexGDwNhu%2BOLSTpNQAGzAcXL7m%2FWB%2FfxopMLv9jMAGOqUBzQOB6VNnTeZt0Wzk8UwIjPFtK4rR34rWQ1IP33TJS2Y%2FJdDGumVpHT4EGjZkxZBGghtBeigj449cOqRsGUnh9LcpiBRkQPD2c%2BzzzgzVHTLVsXyJK3T8I6EwV5fJWysxABpPGe1o1W1jojwWWW%2B8cS7D5NMtVokYqiaJtl0l43ICeIhIzU4SOIrbyz1jVDbDm7kUFMiY5OcRVPs8F4PbhrfEAxtB&X-Amz-Signature=9fef7dcc8e502e1262755961a22dcaa506b502362addc16181e2cecde11deda9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNBTSBT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0EbFMenDjwdLB2Ry9EIr2edk4q4bg%2BA6ux5f2FH4XEgIgFAP5JH6odzbp%2B%2BWIDEBctwU1Om6R7WvC9NPB3E5XvBAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPPcwj2R%2FwOAabsByrcA6gEsW%2BWX5Qu7Fe%2FuHCKN%2F4NA2nkexA%2BD%2FrIuaVkI76Ng4P1yDzXBSsJGXyO5DeaXHE0uPJqVaiWk5PDfDHSp388n%2BTQKPIckmvdyah%2BssMFbkEFFQT4unJG0e77fqYd0kc9YZVYZ0KKkyAzOopcrbtgzW%2F3CCBSP62xFeEOEA03aD5dah9pSqs6aXmojHwDv7sHfC5RsoV3YVu7CEpzr%2F%2FZBXeQ4m79VNyELuqTPmVpLhFY3LXjg%2FHsCJtvy5D11VT%2F7KdwbFQNa55z5DjpKbhsAUTenyxGGsfqnRZnveCORdWx7wcWOTemM0m137aGTx7gU3IshA4EKeSYmog0PE453W1EHTm7KsdNkOEIFafVV2OQW7Q1CbBg1KJ23sU%2B6X2rAh4XOgnFg4UXStMusXcYcWndLfAZZahfxuEU%2BhMewextQhARVBnMTHg8fHcjOyLv%2F3rr%2BxUHOBkKw345iB4A%2BOW%2FOKcJUwsL3QzJnUlSvltXaOiJyLJJ67utD2eZtnj5pqCTlqtPgywxfhiQBLeBMoQeRxo3nT3MdGMaBzboPQT4uS%2FfkdV7FqJymlhNVqyb8zHGU5%2Bwz8DMEVytgwrNsPbexGDwNhu%2BOLSTpNQAGzAcXL7m%2FWB%2FfxopMLv9jMAGOqUBzQOB6VNnTeZt0Wzk8UwIjPFtK4rR34rWQ1IP33TJS2Y%2FJdDGumVpHT4EGjZkxZBGghtBeigj449cOqRsGUnh9LcpiBRkQPD2c%2BzzzgzVHTLVsXyJK3T8I6EwV5fJWysxABpPGe1o1W1jojwWWW%2B8cS7D5NMtVokYqiaJtl0l43ICeIhIzU4SOIrbyz1jVDbDm7kUFMiY5OcRVPs8F4PbhrfEAxtB&X-Amz-Signature=99a98e925575e6ded9daf6339069eb7f9f03ec35cab15595c947a0c60ab22271&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNBTSBT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0EbFMenDjwdLB2Ry9EIr2edk4q4bg%2BA6ux5f2FH4XEgIgFAP5JH6odzbp%2B%2BWIDEBctwU1Om6R7WvC9NPB3E5XvBAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPPcwj2R%2FwOAabsByrcA6gEsW%2BWX5Qu7Fe%2FuHCKN%2F4NA2nkexA%2BD%2FrIuaVkI76Ng4P1yDzXBSsJGXyO5DeaXHE0uPJqVaiWk5PDfDHSp388n%2BTQKPIckmvdyah%2BssMFbkEFFQT4unJG0e77fqYd0kc9YZVYZ0KKkyAzOopcrbtgzW%2F3CCBSP62xFeEOEA03aD5dah9pSqs6aXmojHwDv7sHfC5RsoV3YVu7CEpzr%2F%2FZBXeQ4m79VNyELuqTPmVpLhFY3LXjg%2FHsCJtvy5D11VT%2F7KdwbFQNa55z5DjpKbhsAUTenyxGGsfqnRZnveCORdWx7wcWOTemM0m137aGTx7gU3IshA4EKeSYmog0PE453W1EHTm7KsdNkOEIFafVV2OQW7Q1CbBg1KJ23sU%2B6X2rAh4XOgnFg4UXStMusXcYcWndLfAZZahfxuEU%2BhMewextQhARVBnMTHg8fHcjOyLv%2F3rr%2BxUHOBkKw345iB4A%2BOW%2FOKcJUwsL3QzJnUlSvltXaOiJyLJJ67utD2eZtnj5pqCTlqtPgywxfhiQBLeBMoQeRxo3nT3MdGMaBzboPQT4uS%2FfkdV7FqJymlhNVqyb8zHGU5%2Bwz8DMEVytgwrNsPbexGDwNhu%2BOLSTpNQAGzAcXL7m%2FWB%2FfxopMLv9jMAGOqUBzQOB6VNnTeZt0Wzk8UwIjPFtK4rR34rWQ1IP33TJS2Y%2FJdDGumVpHT4EGjZkxZBGghtBeigj449cOqRsGUnh9LcpiBRkQPD2c%2BzzzgzVHTLVsXyJK3T8I6EwV5fJWysxABpPGe1o1W1jojwWWW%2B8cS7D5NMtVokYqiaJtl0l43ICeIhIzU4SOIrbyz1jVDbDm7kUFMiY5OcRVPs8F4PbhrfEAxtB&X-Amz-Signature=c2986202e9e431a93693dc75f9028faf5bb6f092fbff77cd183cc948173cd5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNBTSBT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0EbFMenDjwdLB2Ry9EIr2edk4q4bg%2BA6ux5f2FH4XEgIgFAP5JH6odzbp%2B%2BWIDEBctwU1Om6R7WvC9NPB3E5XvBAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPPcwj2R%2FwOAabsByrcA6gEsW%2BWX5Qu7Fe%2FuHCKN%2F4NA2nkexA%2BD%2FrIuaVkI76Ng4P1yDzXBSsJGXyO5DeaXHE0uPJqVaiWk5PDfDHSp388n%2BTQKPIckmvdyah%2BssMFbkEFFQT4unJG0e77fqYd0kc9YZVYZ0KKkyAzOopcrbtgzW%2F3CCBSP62xFeEOEA03aD5dah9pSqs6aXmojHwDv7sHfC5RsoV3YVu7CEpzr%2F%2FZBXeQ4m79VNyELuqTPmVpLhFY3LXjg%2FHsCJtvy5D11VT%2F7KdwbFQNa55z5DjpKbhsAUTenyxGGsfqnRZnveCORdWx7wcWOTemM0m137aGTx7gU3IshA4EKeSYmog0PE453W1EHTm7KsdNkOEIFafVV2OQW7Q1CbBg1KJ23sU%2B6X2rAh4XOgnFg4UXStMusXcYcWndLfAZZahfxuEU%2BhMewextQhARVBnMTHg8fHcjOyLv%2F3rr%2BxUHOBkKw345iB4A%2BOW%2FOKcJUwsL3QzJnUlSvltXaOiJyLJJ67utD2eZtnj5pqCTlqtPgywxfhiQBLeBMoQeRxo3nT3MdGMaBzboPQT4uS%2FfkdV7FqJymlhNVqyb8zHGU5%2Bwz8DMEVytgwrNsPbexGDwNhu%2BOLSTpNQAGzAcXL7m%2FWB%2FfxopMLv9jMAGOqUBzQOB6VNnTeZt0Wzk8UwIjPFtK4rR34rWQ1IP33TJS2Y%2FJdDGumVpHT4EGjZkxZBGghtBeigj449cOqRsGUnh9LcpiBRkQPD2c%2BzzzgzVHTLVsXyJK3T8I6EwV5fJWysxABpPGe1o1W1jojwWWW%2B8cS7D5NMtVokYqiaJtl0l43ICeIhIzU4SOIrbyz1jVDbDm7kUFMiY5OcRVPs8F4PbhrfEAxtB&X-Amz-Signature=36d33b2e154f7d2de648ac78d47c0ef049b3cf2ff45def34f74f83e5e65e783c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNBTSBT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0EbFMenDjwdLB2Ry9EIr2edk4q4bg%2BA6ux5f2FH4XEgIgFAP5JH6odzbp%2B%2BWIDEBctwU1Om6R7WvC9NPB3E5XvBAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPPcwj2R%2FwOAabsByrcA6gEsW%2BWX5Qu7Fe%2FuHCKN%2F4NA2nkexA%2BD%2FrIuaVkI76Ng4P1yDzXBSsJGXyO5DeaXHE0uPJqVaiWk5PDfDHSp388n%2BTQKPIckmvdyah%2BssMFbkEFFQT4unJG0e77fqYd0kc9YZVYZ0KKkyAzOopcrbtgzW%2F3CCBSP62xFeEOEA03aD5dah9pSqs6aXmojHwDv7sHfC5RsoV3YVu7CEpzr%2F%2FZBXeQ4m79VNyELuqTPmVpLhFY3LXjg%2FHsCJtvy5D11VT%2F7KdwbFQNa55z5DjpKbhsAUTenyxGGsfqnRZnveCORdWx7wcWOTemM0m137aGTx7gU3IshA4EKeSYmog0PE453W1EHTm7KsdNkOEIFafVV2OQW7Q1CbBg1KJ23sU%2B6X2rAh4XOgnFg4UXStMusXcYcWndLfAZZahfxuEU%2BhMewextQhARVBnMTHg8fHcjOyLv%2F3rr%2BxUHOBkKw345iB4A%2BOW%2FOKcJUwsL3QzJnUlSvltXaOiJyLJJ67utD2eZtnj5pqCTlqtPgywxfhiQBLeBMoQeRxo3nT3MdGMaBzboPQT4uS%2FfkdV7FqJymlhNVqyb8zHGU5%2Bwz8DMEVytgwrNsPbexGDwNhu%2BOLSTpNQAGzAcXL7m%2FWB%2FfxopMLv9jMAGOqUBzQOB6VNnTeZt0Wzk8UwIjPFtK4rR34rWQ1IP33TJS2Y%2FJdDGumVpHT4EGjZkxZBGghtBeigj449cOqRsGUnh9LcpiBRkQPD2c%2BzzzgzVHTLVsXyJK3T8I6EwV5fJWysxABpPGe1o1W1jojwWWW%2B8cS7D5NMtVokYqiaJtl0l43ICeIhIzU4SOIrbyz1jVDbDm7kUFMiY5OcRVPs8F4PbhrfEAxtB&X-Amz-Signature=04c0112d376632b14ecb05cd7ebaf2749eb29906a2d5ff6b09e191119b8b66d0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSNBTSBT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0EbFMenDjwdLB2Ry9EIr2edk4q4bg%2BA6ux5f2FH4XEgIgFAP5JH6odzbp%2B%2BWIDEBctwU1Om6R7WvC9NPB3E5XvBAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPPcwj2R%2FwOAabsByrcA6gEsW%2BWX5Qu7Fe%2FuHCKN%2F4NA2nkexA%2BD%2FrIuaVkI76Ng4P1yDzXBSsJGXyO5DeaXHE0uPJqVaiWk5PDfDHSp388n%2BTQKPIckmvdyah%2BssMFbkEFFQT4unJG0e77fqYd0kc9YZVYZ0KKkyAzOopcrbtgzW%2F3CCBSP62xFeEOEA03aD5dah9pSqs6aXmojHwDv7sHfC5RsoV3YVu7CEpzr%2F%2FZBXeQ4m79VNyELuqTPmVpLhFY3LXjg%2FHsCJtvy5D11VT%2F7KdwbFQNa55z5DjpKbhsAUTenyxGGsfqnRZnveCORdWx7wcWOTemM0m137aGTx7gU3IshA4EKeSYmog0PE453W1EHTm7KsdNkOEIFafVV2OQW7Q1CbBg1KJ23sU%2B6X2rAh4XOgnFg4UXStMusXcYcWndLfAZZahfxuEU%2BhMewextQhARVBnMTHg8fHcjOyLv%2F3rr%2BxUHOBkKw345iB4A%2BOW%2FOKcJUwsL3QzJnUlSvltXaOiJyLJJ67utD2eZtnj5pqCTlqtPgywxfhiQBLeBMoQeRxo3nT3MdGMaBzboPQT4uS%2FfkdV7FqJymlhNVqyb8zHGU5%2Bwz8DMEVytgwrNsPbexGDwNhu%2BOLSTpNQAGzAcXL7m%2FWB%2FfxopMLv9jMAGOqUBzQOB6VNnTeZt0Wzk8UwIjPFtK4rR34rWQ1IP33TJS2Y%2FJdDGumVpHT4EGjZkxZBGghtBeigj449cOqRsGUnh9LcpiBRkQPD2c%2BzzzgzVHTLVsXyJK3T8I6EwV5fJWysxABpPGe1o1W1jojwWWW%2B8cS7D5NMtVokYqiaJtl0l43ICeIhIzU4SOIrbyz1jVDbDm7kUFMiY5OcRVPs8F4PbhrfEAxtB&X-Amz-Signature=169c6bb50b39c591430a27e36917daaa34dc78a6bc8b5ea7175458a9091a745e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
