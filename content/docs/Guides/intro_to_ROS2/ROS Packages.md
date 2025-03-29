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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDR6WSX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBlINqV1droj9MuBO4%2BWSemSqnOYYcMdrvxHjbepEAQFAiEA5CKQs3c5UMRpJmaI887MyaMlTpAA4N9cxc4LH2f8iowq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCILeJfs35%2FycSyHOyrcA5FHgyeM6xLZuLuTLFgsJJdJHjfl0oWmoxYUaA9fLeOzwM53HiGapx02SbFYmU8X4Ael1bkds%2FITQSVOvZq%2Fhs3IxtHY825WRb%2Fo%2FdN9jH%2BMEn4H2XheFSwFLZwrLiXQPItUR4zymWtjL2RlS%2F1dCdzAAXUQNoKF57Q0AZRvR3UA2T1fPzHelJxDFDbFs0n9uSTwD4UHA7nCHt2YzIZYokWkGeXP4QFnN5atjYan8VctKQJtQ78CqSAUyox6R7xf7pzSjhsQmI5Z1vO1xm38B4ZI1cALIrjlbl1FGNAWZIL%2B%2Fg%2B9IWqJcpcR95QQk6dXqKbtxeCBWijJUXaijJdWgB0qOXDt7Cwk3613zV%2FmFtl3VnL8aooU5DFNE1aUnujAxaZ4m1y94zqWQvVb0n2fBw6l0nf%2BfLgUKhFJ533N9XGBNIr5swVnXytmYVJdZV3wMaA9st0vcSQXLXmTrH%2BdnARp4LMW%2ByuFKQC2XCPlbu4QPeHg83YZOBABskKs0u14wW%2FAwlfXE4TxUXvnXfhcqrRPMyENbTS3Yv27YfMX64%2FPRsD5GXGCEm%2BY%2F%2BWmIZZI%2FmQ%2BRBTgjIDOaLAJEscOKRUbQObz0d4ejv5%2FBVEaqBHwl6Zr%2BBgM6wcC%2FrvFMLaLn78GOqUBwkhjflMT8FeMZDwbxtSDH0WLL30KAkalHstnZaA25QXPHKZtmeYiIFddryd7NS8J1WvtcEeJBrJZwfDPpaGigZbDiJh0JRw9nFYxPRHzcLVqNIHoirZcQS36cv5%2BTTiCG43C3%2BaFaYSPFKIK69qWAq9I%2FNpisN48%2FHdQi%2FJ6lwvOOt1IWsX0ZAqVuZGe1OBK6UySVi4lNzDroqGZGALdsRYBPXM3&X-Amz-Signature=d3f9b5b04df6642bcc9288ee5b4c84624ecd9431a2a8ceb4735e164166446631&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDR6WSX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBlINqV1droj9MuBO4%2BWSemSqnOYYcMdrvxHjbepEAQFAiEA5CKQs3c5UMRpJmaI887MyaMlTpAA4N9cxc4LH2f8iowq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCILeJfs35%2FycSyHOyrcA5FHgyeM6xLZuLuTLFgsJJdJHjfl0oWmoxYUaA9fLeOzwM53HiGapx02SbFYmU8X4Ael1bkds%2FITQSVOvZq%2Fhs3IxtHY825WRb%2Fo%2FdN9jH%2BMEn4H2XheFSwFLZwrLiXQPItUR4zymWtjL2RlS%2F1dCdzAAXUQNoKF57Q0AZRvR3UA2T1fPzHelJxDFDbFs0n9uSTwD4UHA7nCHt2YzIZYokWkGeXP4QFnN5atjYan8VctKQJtQ78CqSAUyox6R7xf7pzSjhsQmI5Z1vO1xm38B4ZI1cALIrjlbl1FGNAWZIL%2B%2Fg%2B9IWqJcpcR95QQk6dXqKbtxeCBWijJUXaijJdWgB0qOXDt7Cwk3613zV%2FmFtl3VnL8aooU5DFNE1aUnujAxaZ4m1y94zqWQvVb0n2fBw6l0nf%2BfLgUKhFJ533N9XGBNIr5swVnXytmYVJdZV3wMaA9st0vcSQXLXmTrH%2BdnARp4LMW%2ByuFKQC2XCPlbu4QPeHg83YZOBABskKs0u14wW%2FAwlfXE4TxUXvnXfhcqrRPMyENbTS3Yv27YfMX64%2FPRsD5GXGCEm%2BY%2F%2BWmIZZI%2FmQ%2BRBTgjIDOaLAJEscOKRUbQObz0d4ejv5%2FBVEaqBHwl6Zr%2BBgM6wcC%2FrvFMLaLn78GOqUBwkhjflMT8FeMZDwbxtSDH0WLL30KAkalHstnZaA25QXPHKZtmeYiIFddryd7NS8J1WvtcEeJBrJZwfDPpaGigZbDiJh0JRw9nFYxPRHzcLVqNIHoirZcQS36cv5%2BTTiCG43C3%2BaFaYSPFKIK69qWAq9I%2FNpisN48%2FHdQi%2FJ6lwvOOt1IWsX0ZAqVuZGe1OBK6UySVi4lNzDroqGZGALdsRYBPXM3&X-Amz-Signature=5be1b6845b2e60bc1932accb2acfc8db30d9aeb686ff2b57e2f5282dd0a85731&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDR6WSX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBlINqV1droj9MuBO4%2BWSemSqnOYYcMdrvxHjbepEAQFAiEA5CKQs3c5UMRpJmaI887MyaMlTpAA4N9cxc4LH2f8iowq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCILeJfs35%2FycSyHOyrcA5FHgyeM6xLZuLuTLFgsJJdJHjfl0oWmoxYUaA9fLeOzwM53HiGapx02SbFYmU8X4Ael1bkds%2FITQSVOvZq%2Fhs3IxtHY825WRb%2Fo%2FdN9jH%2BMEn4H2XheFSwFLZwrLiXQPItUR4zymWtjL2RlS%2F1dCdzAAXUQNoKF57Q0AZRvR3UA2T1fPzHelJxDFDbFs0n9uSTwD4UHA7nCHt2YzIZYokWkGeXP4QFnN5atjYan8VctKQJtQ78CqSAUyox6R7xf7pzSjhsQmI5Z1vO1xm38B4ZI1cALIrjlbl1FGNAWZIL%2B%2Fg%2B9IWqJcpcR95QQk6dXqKbtxeCBWijJUXaijJdWgB0qOXDt7Cwk3613zV%2FmFtl3VnL8aooU5DFNE1aUnujAxaZ4m1y94zqWQvVb0n2fBw6l0nf%2BfLgUKhFJ533N9XGBNIr5swVnXytmYVJdZV3wMaA9st0vcSQXLXmTrH%2BdnARp4LMW%2ByuFKQC2XCPlbu4QPeHg83YZOBABskKs0u14wW%2FAwlfXE4TxUXvnXfhcqrRPMyENbTS3Yv27YfMX64%2FPRsD5GXGCEm%2BY%2F%2BWmIZZI%2FmQ%2BRBTgjIDOaLAJEscOKRUbQObz0d4ejv5%2FBVEaqBHwl6Zr%2BBgM6wcC%2FrvFMLaLn78GOqUBwkhjflMT8FeMZDwbxtSDH0WLL30KAkalHstnZaA25QXPHKZtmeYiIFddryd7NS8J1WvtcEeJBrJZwfDPpaGigZbDiJh0JRw9nFYxPRHzcLVqNIHoirZcQS36cv5%2BTTiCG43C3%2BaFaYSPFKIK69qWAq9I%2FNpisN48%2FHdQi%2FJ6lwvOOt1IWsX0ZAqVuZGe1OBK6UySVi4lNzDroqGZGALdsRYBPXM3&X-Amz-Signature=d4f876a8b042d925cd2ff8077752045a738bfe7efb01bd4aa4104aa2c7fbbfcf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDR6WSX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBlINqV1droj9MuBO4%2BWSemSqnOYYcMdrvxHjbepEAQFAiEA5CKQs3c5UMRpJmaI887MyaMlTpAA4N9cxc4LH2f8iowq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCILeJfs35%2FycSyHOyrcA5FHgyeM6xLZuLuTLFgsJJdJHjfl0oWmoxYUaA9fLeOzwM53HiGapx02SbFYmU8X4Ael1bkds%2FITQSVOvZq%2Fhs3IxtHY825WRb%2Fo%2FdN9jH%2BMEn4H2XheFSwFLZwrLiXQPItUR4zymWtjL2RlS%2F1dCdzAAXUQNoKF57Q0AZRvR3UA2T1fPzHelJxDFDbFs0n9uSTwD4UHA7nCHt2YzIZYokWkGeXP4QFnN5atjYan8VctKQJtQ78CqSAUyox6R7xf7pzSjhsQmI5Z1vO1xm38B4ZI1cALIrjlbl1FGNAWZIL%2B%2Fg%2B9IWqJcpcR95QQk6dXqKbtxeCBWijJUXaijJdWgB0qOXDt7Cwk3613zV%2FmFtl3VnL8aooU5DFNE1aUnujAxaZ4m1y94zqWQvVb0n2fBw6l0nf%2BfLgUKhFJ533N9XGBNIr5swVnXytmYVJdZV3wMaA9st0vcSQXLXmTrH%2BdnARp4LMW%2ByuFKQC2XCPlbu4QPeHg83YZOBABskKs0u14wW%2FAwlfXE4TxUXvnXfhcqrRPMyENbTS3Yv27YfMX64%2FPRsD5GXGCEm%2BY%2F%2BWmIZZI%2FmQ%2BRBTgjIDOaLAJEscOKRUbQObz0d4ejv5%2FBVEaqBHwl6Zr%2BBgM6wcC%2FrvFMLaLn78GOqUBwkhjflMT8FeMZDwbxtSDH0WLL30KAkalHstnZaA25QXPHKZtmeYiIFddryd7NS8J1WvtcEeJBrJZwfDPpaGigZbDiJh0JRw9nFYxPRHzcLVqNIHoirZcQS36cv5%2BTTiCG43C3%2BaFaYSPFKIK69qWAq9I%2FNpisN48%2FHdQi%2FJ6lwvOOt1IWsX0ZAqVuZGe1OBK6UySVi4lNzDroqGZGALdsRYBPXM3&X-Amz-Signature=2eba1806b4e88783fc0d1ab104e1e576405fa6652ce6108854b8db1c6c28898a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDR6WSX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBlINqV1droj9MuBO4%2BWSemSqnOYYcMdrvxHjbepEAQFAiEA5CKQs3c5UMRpJmaI887MyaMlTpAA4N9cxc4LH2f8iowq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCILeJfs35%2FycSyHOyrcA5FHgyeM6xLZuLuTLFgsJJdJHjfl0oWmoxYUaA9fLeOzwM53HiGapx02SbFYmU8X4Ael1bkds%2FITQSVOvZq%2Fhs3IxtHY825WRb%2Fo%2FdN9jH%2BMEn4H2XheFSwFLZwrLiXQPItUR4zymWtjL2RlS%2F1dCdzAAXUQNoKF57Q0AZRvR3UA2T1fPzHelJxDFDbFs0n9uSTwD4UHA7nCHt2YzIZYokWkGeXP4QFnN5atjYan8VctKQJtQ78CqSAUyox6R7xf7pzSjhsQmI5Z1vO1xm38B4ZI1cALIrjlbl1FGNAWZIL%2B%2Fg%2B9IWqJcpcR95QQk6dXqKbtxeCBWijJUXaijJdWgB0qOXDt7Cwk3613zV%2FmFtl3VnL8aooU5DFNE1aUnujAxaZ4m1y94zqWQvVb0n2fBw6l0nf%2BfLgUKhFJ533N9XGBNIr5swVnXytmYVJdZV3wMaA9st0vcSQXLXmTrH%2BdnARp4LMW%2ByuFKQC2XCPlbu4QPeHg83YZOBABskKs0u14wW%2FAwlfXE4TxUXvnXfhcqrRPMyENbTS3Yv27YfMX64%2FPRsD5GXGCEm%2BY%2F%2BWmIZZI%2FmQ%2BRBTgjIDOaLAJEscOKRUbQObz0d4ejv5%2FBVEaqBHwl6Zr%2BBgM6wcC%2FrvFMLaLn78GOqUBwkhjflMT8FeMZDwbxtSDH0WLL30KAkalHstnZaA25QXPHKZtmeYiIFddryd7NS8J1WvtcEeJBrJZwfDPpaGigZbDiJh0JRw9nFYxPRHzcLVqNIHoirZcQS36cv5%2BTTiCG43C3%2BaFaYSPFKIK69qWAq9I%2FNpisN48%2FHdQi%2FJ6lwvOOt1IWsX0ZAqVuZGe1OBK6UySVi4lNzDroqGZGALdsRYBPXM3&X-Amz-Signature=3ab85ba5e0232caeea89b98328238a725ef089f07b26d1e887915869fb70e79b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDR6WSX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBlINqV1droj9MuBO4%2BWSemSqnOYYcMdrvxHjbepEAQFAiEA5CKQs3c5UMRpJmaI887MyaMlTpAA4N9cxc4LH2f8iowq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCILeJfs35%2FycSyHOyrcA5FHgyeM6xLZuLuTLFgsJJdJHjfl0oWmoxYUaA9fLeOzwM53HiGapx02SbFYmU8X4Ael1bkds%2FITQSVOvZq%2Fhs3IxtHY825WRb%2Fo%2FdN9jH%2BMEn4H2XheFSwFLZwrLiXQPItUR4zymWtjL2RlS%2F1dCdzAAXUQNoKF57Q0AZRvR3UA2T1fPzHelJxDFDbFs0n9uSTwD4UHA7nCHt2YzIZYokWkGeXP4QFnN5atjYan8VctKQJtQ78CqSAUyox6R7xf7pzSjhsQmI5Z1vO1xm38B4ZI1cALIrjlbl1FGNAWZIL%2B%2Fg%2B9IWqJcpcR95QQk6dXqKbtxeCBWijJUXaijJdWgB0qOXDt7Cwk3613zV%2FmFtl3VnL8aooU5DFNE1aUnujAxaZ4m1y94zqWQvVb0n2fBw6l0nf%2BfLgUKhFJ533N9XGBNIr5swVnXytmYVJdZV3wMaA9st0vcSQXLXmTrH%2BdnARp4LMW%2ByuFKQC2XCPlbu4QPeHg83YZOBABskKs0u14wW%2FAwlfXE4TxUXvnXfhcqrRPMyENbTS3Yv27YfMX64%2FPRsD5GXGCEm%2BY%2F%2BWmIZZI%2FmQ%2BRBTgjIDOaLAJEscOKRUbQObz0d4ejv5%2FBVEaqBHwl6Zr%2BBgM6wcC%2FrvFMLaLn78GOqUBwkhjflMT8FeMZDwbxtSDH0WLL30KAkalHstnZaA25QXPHKZtmeYiIFddryd7NS8J1WvtcEeJBrJZwfDPpaGigZbDiJh0JRw9nFYxPRHzcLVqNIHoirZcQS36cv5%2BTTiCG43C3%2BaFaYSPFKIK69qWAq9I%2FNpisN48%2FHdQi%2FJ6lwvOOt1IWsX0ZAqVuZGe1OBK6UySVi4lNzDroqGZGALdsRYBPXM3&X-Amz-Signature=a67efaeae43b677c3e41515722d9200ba0f9ba768ab3d2d199125374a1ee1c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDR6WSX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBlINqV1droj9MuBO4%2BWSemSqnOYYcMdrvxHjbepEAQFAiEA5CKQs3c5UMRpJmaI887MyaMlTpAA4N9cxc4LH2f8iowq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCILeJfs35%2FycSyHOyrcA5FHgyeM6xLZuLuTLFgsJJdJHjfl0oWmoxYUaA9fLeOzwM53HiGapx02SbFYmU8X4Ael1bkds%2FITQSVOvZq%2Fhs3IxtHY825WRb%2Fo%2FdN9jH%2BMEn4H2XheFSwFLZwrLiXQPItUR4zymWtjL2RlS%2F1dCdzAAXUQNoKF57Q0AZRvR3UA2T1fPzHelJxDFDbFs0n9uSTwD4UHA7nCHt2YzIZYokWkGeXP4QFnN5atjYan8VctKQJtQ78CqSAUyox6R7xf7pzSjhsQmI5Z1vO1xm38B4ZI1cALIrjlbl1FGNAWZIL%2B%2Fg%2B9IWqJcpcR95QQk6dXqKbtxeCBWijJUXaijJdWgB0qOXDt7Cwk3613zV%2FmFtl3VnL8aooU5DFNE1aUnujAxaZ4m1y94zqWQvVb0n2fBw6l0nf%2BfLgUKhFJ533N9XGBNIr5swVnXytmYVJdZV3wMaA9st0vcSQXLXmTrH%2BdnARp4LMW%2ByuFKQC2XCPlbu4QPeHg83YZOBABskKs0u14wW%2FAwlfXE4TxUXvnXfhcqrRPMyENbTS3Yv27YfMX64%2FPRsD5GXGCEm%2BY%2F%2BWmIZZI%2FmQ%2BRBTgjIDOaLAJEscOKRUbQObz0d4ejv5%2FBVEaqBHwl6Zr%2BBgM6wcC%2FrvFMLaLn78GOqUBwkhjflMT8FeMZDwbxtSDH0WLL30KAkalHstnZaA25QXPHKZtmeYiIFddryd7NS8J1WvtcEeJBrJZwfDPpaGigZbDiJh0JRw9nFYxPRHzcLVqNIHoirZcQS36cv5%2BTTiCG43C3%2BaFaYSPFKIK69qWAq9I%2FNpisN48%2FHdQi%2FJ6lwvOOt1IWsX0ZAqVuZGe1OBK6UySVi4lNzDroqGZGALdsRYBPXM3&X-Amz-Signature=d4c01e17a8e33d7843152ee6cce15b23e0a67aa7f575559074bf0463c2de4c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
