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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSVJWN2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCItCREyh8CApK3yfFqgHp%2FwFr19EKp4USq%2BCxf%2Be%2BoVQIhAKzoS4QHH1ZEV9O9QuIp%2FGGNlO9%2Fuo6RpXiOhy3nKMOZKv8DCG0QABoMNjM3NDIzMTgzODA1IgyAkCODRU8MZ%2BKTDhMq3ANy81s2QGjAFkAiBd8q%2BqHxFFeQbYiJ6d4ODizgNUjb87itivxkZHePin0Q1MfIKX4Imeoy8F9BkLSOueoAXYnmkWGXl58wy%2F1U6M3flbfrKJKdV8XNdpEOZt%2BnwQQg9PrCgrvciM3TrYtZSRagI18J4c7cAgB3hXDh969fG%2FBh4NVKuOUhQRz531c6IfCWfSN%2BDCT5LTtkghqTTc5hI0Nyv1RFuBs87UQiSHcsYQ9uPGObl8EijjRnFL7yqpmOya4Wfz64i%2BnmVNnF%2B7OYYm2RL53X3yc2iRSTrLNATJeCBfDZ%2F0FrxD8OHzWQ7cV5SfZQZ58SDoUU9WKauw5Lsq4TbNIf9QMiHsoZQbYYt4b3uUFNCeHilVnrASqUi%2B%2F%2BkXUz3VNl1sOKWspVzIe2bU2oQHaLvxBhwJsZ%2B64wEbxuTHEOmyWxWIc3U79fBAQhU9J1V%2B0fQUb3Z2Uj5DO%2FDSNcdoEnI3AZgd9wCyELhoun1C9t%2BzxnvjNvYYYVATGh3LRn3pWMnHUg%2FHdvT%2BLDLD%2BMePHAdbkOcFbSt%2BNb3%2B8MOXFzO4PDkyvUw%2FFj6hjX4QVixOxTgXwAev%2FpxR0HyCTB0fnVeomBg%2FJnMdagFeHiuqGU%2Bj3syBocZqqNNTCU%2Fui%2BBjqkAfH6vSHakP0l4WN3idjg3zdQxccQn1PCeUJXR%2FJ%2B3SbQj4SLoKkrKNIMBad%2BaCi4UmsfEtXGkMRmm03GZhNjv5qBMp88HT%2FdbIcztq6hPFRyGOEuQFhVpG2axu2q8AtLsCIPvVf5f99cjVgxYZtRRvLyuk3Lq1wiZWrl7ZdgQ67Z2CSGOpRTQG6mgDPD31%2BMopOfW3M1x9F%2FJRXA%2FJeceMC8NVTA&X-Amz-Signature=b19d30a22e1d2f2738f2a6099a6f6b7e4c970c5531514869dc6ccd6595436f53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSVJWN2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCItCREyh8CApK3yfFqgHp%2FwFr19EKp4USq%2BCxf%2Be%2BoVQIhAKzoS4QHH1ZEV9O9QuIp%2FGGNlO9%2Fuo6RpXiOhy3nKMOZKv8DCG0QABoMNjM3NDIzMTgzODA1IgyAkCODRU8MZ%2BKTDhMq3ANy81s2QGjAFkAiBd8q%2BqHxFFeQbYiJ6d4ODizgNUjb87itivxkZHePin0Q1MfIKX4Imeoy8F9BkLSOueoAXYnmkWGXl58wy%2F1U6M3flbfrKJKdV8XNdpEOZt%2BnwQQg9PrCgrvciM3TrYtZSRagI18J4c7cAgB3hXDh969fG%2FBh4NVKuOUhQRz531c6IfCWfSN%2BDCT5LTtkghqTTc5hI0Nyv1RFuBs87UQiSHcsYQ9uPGObl8EijjRnFL7yqpmOya4Wfz64i%2BnmVNnF%2B7OYYm2RL53X3yc2iRSTrLNATJeCBfDZ%2F0FrxD8OHzWQ7cV5SfZQZ58SDoUU9WKauw5Lsq4TbNIf9QMiHsoZQbYYt4b3uUFNCeHilVnrASqUi%2B%2F%2BkXUz3VNl1sOKWspVzIe2bU2oQHaLvxBhwJsZ%2B64wEbxuTHEOmyWxWIc3U79fBAQhU9J1V%2B0fQUb3Z2Uj5DO%2FDSNcdoEnI3AZgd9wCyELhoun1C9t%2BzxnvjNvYYYVATGh3LRn3pWMnHUg%2FHdvT%2BLDLD%2BMePHAdbkOcFbSt%2BNb3%2B8MOXFzO4PDkyvUw%2FFj6hjX4QVixOxTgXwAev%2FpxR0HyCTB0fnVeomBg%2FJnMdagFeHiuqGU%2Bj3syBocZqqNNTCU%2Fui%2BBjqkAfH6vSHakP0l4WN3idjg3zdQxccQn1PCeUJXR%2FJ%2B3SbQj4SLoKkrKNIMBad%2BaCi4UmsfEtXGkMRmm03GZhNjv5qBMp88HT%2FdbIcztq6hPFRyGOEuQFhVpG2axu2q8AtLsCIPvVf5f99cjVgxYZtRRvLyuk3Lq1wiZWrl7ZdgQ67Z2CSGOpRTQG6mgDPD31%2BMopOfW3M1x9F%2FJRXA%2FJeceMC8NVTA&X-Amz-Signature=516bcf8dab3939c2d481ebaeefa537d0f482c728f3f6dfbd32ead80e908e25d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSVJWN2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCItCREyh8CApK3yfFqgHp%2FwFr19EKp4USq%2BCxf%2Be%2BoVQIhAKzoS4QHH1ZEV9O9QuIp%2FGGNlO9%2Fuo6RpXiOhy3nKMOZKv8DCG0QABoMNjM3NDIzMTgzODA1IgyAkCODRU8MZ%2BKTDhMq3ANy81s2QGjAFkAiBd8q%2BqHxFFeQbYiJ6d4ODizgNUjb87itivxkZHePin0Q1MfIKX4Imeoy8F9BkLSOueoAXYnmkWGXl58wy%2F1U6M3flbfrKJKdV8XNdpEOZt%2BnwQQg9PrCgrvciM3TrYtZSRagI18J4c7cAgB3hXDh969fG%2FBh4NVKuOUhQRz531c6IfCWfSN%2BDCT5LTtkghqTTc5hI0Nyv1RFuBs87UQiSHcsYQ9uPGObl8EijjRnFL7yqpmOya4Wfz64i%2BnmVNnF%2B7OYYm2RL53X3yc2iRSTrLNATJeCBfDZ%2F0FrxD8OHzWQ7cV5SfZQZ58SDoUU9WKauw5Lsq4TbNIf9QMiHsoZQbYYt4b3uUFNCeHilVnrASqUi%2B%2F%2BkXUz3VNl1sOKWspVzIe2bU2oQHaLvxBhwJsZ%2B64wEbxuTHEOmyWxWIc3U79fBAQhU9J1V%2B0fQUb3Z2Uj5DO%2FDSNcdoEnI3AZgd9wCyELhoun1C9t%2BzxnvjNvYYYVATGh3LRn3pWMnHUg%2FHdvT%2BLDLD%2BMePHAdbkOcFbSt%2BNb3%2B8MOXFzO4PDkyvUw%2FFj6hjX4QVixOxTgXwAev%2FpxR0HyCTB0fnVeomBg%2FJnMdagFeHiuqGU%2Bj3syBocZqqNNTCU%2Fui%2BBjqkAfH6vSHakP0l4WN3idjg3zdQxccQn1PCeUJXR%2FJ%2B3SbQj4SLoKkrKNIMBad%2BaCi4UmsfEtXGkMRmm03GZhNjv5qBMp88HT%2FdbIcztq6hPFRyGOEuQFhVpG2axu2q8AtLsCIPvVf5f99cjVgxYZtRRvLyuk3Lq1wiZWrl7ZdgQ67Z2CSGOpRTQG6mgDPD31%2BMopOfW3M1x9F%2FJRXA%2FJeceMC8NVTA&X-Amz-Signature=0fa35dd6ab473b221b931ebc57d337d8b5584621c44b31941753f811336eb1da&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSVJWN2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCItCREyh8CApK3yfFqgHp%2FwFr19EKp4USq%2BCxf%2Be%2BoVQIhAKzoS4QHH1ZEV9O9QuIp%2FGGNlO9%2Fuo6RpXiOhy3nKMOZKv8DCG0QABoMNjM3NDIzMTgzODA1IgyAkCODRU8MZ%2BKTDhMq3ANy81s2QGjAFkAiBd8q%2BqHxFFeQbYiJ6d4ODizgNUjb87itivxkZHePin0Q1MfIKX4Imeoy8F9BkLSOueoAXYnmkWGXl58wy%2F1U6M3flbfrKJKdV8XNdpEOZt%2BnwQQg9PrCgrvciM3TrYtZSRagI18J4c7cAgB3hXDh969fG%2FBh4NVKuOUhQRz531c6IfCWfSN%2BDCT5LTtkghqTTc5hI0Nyv1RFuBs87UQiSHcsYQ9uPGObl8EijjRnFL7yqpmOya4Wfz64i%2BnmVNnF%2B7OYYm2RL53X3yc2iRSTrLNATJeCBfDZ%2F0FrxD8OHzWQ7cV5SfZQZ58SDoUU9WKauw5Lsq4TbNIf9QMiHsoZQbYYt4b3uUFNCeHilVnrASqUi%2B%2F%2BkXUz3VNl1sOKWspVzIe2bU2oQHaLvxBhwJsZ%2B64wEbxuTHEOmyWxWIc3U79fBAQhU9J1V%2B0fQUb3Z2Uj5DO%2FDSNcdoEnI3AZgd9wCyELhoun1C9t%2BzxnvjNvYYYVATGh3LRn3pWMnHUg%2FHdvT%2BLDLD%2BMePHAdbkOcFbSt%2BNb3%2B8MOXFzO4PDkyvUw%2FFj6hjX4QVixOxTgXwAev%2FpxR0HyCTB0fnVeomBg%2FJnMdagFeHiuqGU%2Bj3syBocZqqNNTCU%2Fui%2BBjqkAfH6vSHakP0l4WN3idjg3zdQxccQn1PCeUJXR%2FJ%2B3SbQj4SLoKkrKNIMBad%2BaCi4UmsfEtXGkMRmm03GZhNjv5qBMp88HT%2FdbIcztq6hPFRyGOEuQFhVpG2axu2q8AtLsCIPvVf5f99cjVgxYZtRRvLyuk3Lq1wiZWrl7ZdgQ67Z2CSGOpRTQG6mgDPD31%2BMopOfW3M1x9F%2FJRXA%2FJeceMC8NVTA&X-Amz-Signature=9813210f9d924147842b73e699581c908478bbb521c6af2c54b9ba80d4268a76&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSVJWN2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCItCREyh8CApK3yfFqgHp%2FwFr19EKp4USq%2BCxf%2Be%2BoVQIhAKzoS4QHH1ZEV9O9QuIp%2FGGNlO9%2Fuo6RpXiOhy3nKMOZKv8DCG0QABoMNjM3NDIzMTgzODA1IgyAkCODRU8MZ%2BKTDhMq3ANy81s2QGjAFkAiBd8q%2BqHxFFeQbYiJ6d4ODizgNUjb87itivxkZHePin0Q1MfIKX4Imeoy8F9BkLSOueoAXYnmkWGXl58wy%2F1U6M3flbfrKJKdV8XNdpEOZt%2BnwQQg9PrCgrvciM3TrYtZSRagI18J4c7cAgB3hXDh969fG%2FBh4NVKuOUhQRz531c6IfCWfSN%2BDCT5LTtkghqTTc5hI0Nyv1RFuBs87UQiSHcsYQ9uPGObl8EijjRnFL7yqpmOya4Wfz64i%2BnmVNnF%2B7OYYm2RL53X3yc2iRSTrLNATJeCBfDZ%2F0FrxD8OHzWQ7cV5SfZQZ58SDoUU9WKauw5Lsq4TbNIf9QMiHsoZQbYYt4b3uUFNCeHilVnrASqUi%2B%2F%2BkXUz3VNl1sOKWspVzIe2bU2oQHaLvxBhwJsZ%2B64wEbxuTHEOmyWxWIc3U79fBAQhU9J1V%2B0fQUb3Z2Uj5DO%2FDSNcdoEnI3AZgd9wCyELhoun1C9t%2BzxnvjNvYYYVATGh3LRn3pWMnHUg%2FHdvT%2BLDLD%2BMePHAdbkOcFbSt%2BNb3%2B8MOXFzO4PDkyvUw%2FFj6hjX4QVixOxTgXwAev%2FpxR0HyCTB0fnVeomBg%2FJnMdagFeHiuqGU%2Bj3syBocZqqNNTCU%2Fui%2BBjqkAfH6vSHakP0l4WN3idjg3zdQxccQn1PCeUJXR%2FJ%2B3SbQj4SLoKkrKNIMBad%2BaCi4UmsfEtXGkMRmm03GZhNjv5qBMp88HT%2FdbIcztq6hPFRyGOEuQFhVpG2axu2q8AtLsCIPvVf5f99cjVgxYZtRRvLyuk3Lq1wiZWrl7ZdgQ67Z2CSGOpRTQG6mgDPD31%2BMopOfW3M1x9F%2FJRXA%2FJeceMC8NVTA&X-Amz-Signature=406e2dd36cd42d60cdc0f1b5978b4bd0da2e36f15e3fcb6e2a8b8be629baaeb3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSVJWN2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCItCREyh8CApK3yfFqgHp%2FwFr19EKp4USq%2BCxf%2Be%2BoVQIhAKzoS4QHH1ZEV9O9QuIp%2FGGNlO9%2Fuo6RpXiOhy3nKMOZKv8DCG0QABoMNjM3NDIzMTgzODA1IgyAkCODRU8MZ%2BKTDhMq3ANy81s2QGjAFkAiBd8q%2BqHxFFeQbYiJ6d4ODizgNUjb87itivxkZHePin0Q1MfIKX4Imeoy8F9BkLSOueoAXYnmkWGXl58wy%2F1U6M3flbfrKJKdV8XNdpEOZt%2BnwQQg9PrCgrvciM3TrYtZSRagI18J4c7cAgB3hXDh969fG%2FBh4NVKuOUhQRz531c6IfCWfSN%2BDCT5LTtkghqTTc5hI0Nyv1RFuBs87UQiSHcsYQ9uPGObl8EijjRnFL7yqpmOya4Wfz64i%2BnmVNnF%2B7OYYm2RL53X3yc2iRSTrLNATJeCBfDZ%2F0FrxD8OHzWQ7cV5SfZQZ58SDoUU9WKauw5Lsq4TbNIf9QMiHsoZQbYYt4b3uUFNCeHilVnrASqUi%2B%2F%2BkXUz3VNl1sOKWspVzIe2bU2oQHaLvxBhwJsZ%2B64wEbxuTHEOmyWxWIc3U79fBAQhU9J1V%2B0fQUb3Z2Uj5DO%2FDSNcdoEnI3AZgd9wCyELhoun1C9t%2BzxnvjNvYYYVATGh3LRn3pWMnHUg%2FHdvT%2BLDLD%2BMePHAdbkOcFbSt%2BNb3%2B8MOXFzO4PDkyvUw%2FFj6hjX4QVixOxTgXwAev%2FpxR0HyCTB0fnVeomBg%2FJnMdagFeHiuqGU%2Bj3syBocZqqNNTCU%2Fui%2BBjqkAfH6vSHakP0l4WN3idjg3zdQxccQn1PCeUJXR%2FJ%2B3SbQj4SLoKkrKNIMBad%2BaCi4UmsfEtXGkMRmm03GZhNjv5qBMp88HT%2FdbIcztq6hPFRyGOEuQFhVpG2axu2q8AtLsCIPvVf5f99cjVgxYZtRRvLyuk3Lq1wiZWrl7ZdgQ67Z2CSGOpRTQG6mgDPD31%2BMopOfW3M1x9F%2FJRXA%2FJeceMC8NVTA&X-Amz-Signature=c80c687cb4206250000cc336741c1aa325185c50f96fe2000d6e11b495fa8554&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSVJWN2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCItCREyh8CApK3yfFqgHp%2FwFr19EKp4USq%2BCxf%2Be%2BoVQIhAKzoS4QHH1ZEV9O9QuIp%2FGGNlO9%2Fuo6RpXiOhy3nKMOZKv8DCG0QABoMNjM3NDIzMTgzODA1IgyAkCODRU8MZ%2BKTDhMq3ANy81s2QGjAFkAiBd8q%2BqHxFFeQbYiJ6d4ODizgNUjb87itivxkZHePin0Q1MfIKX4Imeoy8F9BkLSOueoAXYnmkWGXl58wy%2F1U6M3flbfrKJKdV8XNdpEOZt%2BnwQQg9PrCgrvciM3TrYtZSRagI18J4c7cAgB3hXDh969fG%2FBh4NVKuOUhQRz531c6IfCWfSN%2BDCT5LTtkghqTTc5hI0Nyv1RFuBs87UQiSHcsYQ9uPGObl8EijjRnFL7yqpmOya4Wfz64i%2BnmVNnF%2B7OYYm2RL53X3yc2iRSTrLNATJeCBfDZ%2F0FrxD8OHzWQ7cV5SfZQZ58SDoUU9WKauw5Lsq4TbNIf9QMiHsoZQbYYt4b3uUFNCeHilVnrASqUi%2B%2F%2BkXUz3VNl1sOKWspVzIe2bU2oQHaLvxBhwJsZ%2B64wEbxuTHEOmyWxWIc3U79fBAQhU9J1V%2B0fQUb3Z2Uj5DO%2FDSNcdoEnI3AZgd9wCyELhoun1C9t%2BzxnvjNvYYYVATGh3LRn3pWMnHUg%2FHdvT%2BLDLD%2BMePHAdbkOcFbSt%2BNb3%2B8MOXFzO4PDkyvUw%2FFj6hjX4QVixOxTgXwAev%2FpxR0HyCTB0fnVeomBg%2FJnMdagFeHiuqGU%2Bj3syBocZqqNNTCU%2Fui%2BBjqkAfH6vSHakP0l4WN3idjg3zdQxccQn1PCeUJXR%2FJ%2B3SbQj4SLoKkrKNIMBad%2BaCi4UmsfEtXGkMRmm03GZhNjv5qBMp88HT%2FdbIcztq6hPFRyGOEuQFhVpG2axu2q8AtLsCIPvVf5f99cjVgxYZtRRvLyuk3Lq1wiZWrl7ZdgQ67Z2CSGOpRTQG6mgDPD31%2BMopOfW3M1x9F%2FJRXA%2FJeceMC8NVTA&X-Amz-Signature=de7679d3f1b91a85c66a96f318e5de996861020fa776e4ef428e3a1e281a2922&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
