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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQRKWBY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCZfWvYqZvDLajRvOHX%2FIS%2Fhs%2FsKFVyrI6P8FYzH8hKAiEA5DeFpMnhPwy0jtVtGuaJa6D5riqxzs39GZJFT7t9ZXsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGOlnPUSrTXOiTROsCrcA9km41mV5vs3GPpffLVa%2F5IfViYGicIindeOwSBRtcQgJXuikbIiWxIIErRJa%2Fa0LrrG0jUrj6E%2BB7YKKjmNsyRkgoXx%2B7T1ZTpbYnnza9jtls0aDQUDRXY4NhOKm0sfpvHl5GvV3ib35z0MZIg8lwdgm%2FxsCco7AO%2FpokzUDMXHBO4RXbMMH2FcY0ZPGagd5PHIj7KI%2F3hkfQ8Nw5jxKQSSgRs4xC6uOjSP6bVcF%2BmksS91GGxS0jcC8B3Mh8%2FBzzYRJU8YTODCZYz5c4Kd3TCgt80Ay808craK0GvD2cWKzm%2FSj9k0%2FmvxucH%2FmS8QlQ2sSlfR8ikTFo5FeFQTzB4qD81xarduKilBDiWazoYw6mU1bFTfzHGuxoeSxmv0cbOghH04dABi8AFSd%2BjlbLb%2BGD1t%2Brg%2FLBQsW8dnmMbg1jyogk%2BkzWiCP7w4bWxgX2Uy%2FBQc%2FdAagMPScd4HHA%2FpwiAB%2FECyderdJcPuptY6rqRc%2BRYZe28pES3cRSBPMJKs7DARB1AZYeSiffYuCEdT%2BtZRdhzfhEJPXCaeoBbQ928fn8uxr8CkDOFgh0wlvWIWFa92v9ccJublaavu8svbvwwdr2EVaUJc0PC1TxY1NU4zswMRUdEINW48MOq0pb4GOqUBUuzUd8QbsBoIVtVTci9eSaDcZ%2FgJ2eCQPCN9iCNPslirqv4WUFDpn0Adp4OLFI0TnSjJ4IRwTaIoXdtpgMMiSnLSMn5AkJQQO6ZGWNj2R5YxiCB7ZYwEzKWqoqlgKvxc%2FpXStQmXUZj%2B5kIq4lNIu7hes%2FPNp32aPf2DEsSFPQiW%2BpiRuzLNYRvfIIrikZgrK13BKzCIcKuKDW179P1Fw1R0RSUl&X-Amz-Signature=bb64ef4a0b4b1f8a42b70adf56657149eaaf38bb131a5396cef34a56e9a4b992&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQRKWBY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCZfWvYqZvDLajRvOHX%2FIS%2Fhs%2FsKFVyrI6P8FYzH8hKAiEA5DeFpMnhPwy0jtVtGuaJa6D5riqxzs39GZJFT7t9ZXsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGOlnPUSrTXOiTROsCrcA9km41mV5vs3GPpffLVa%2F5IfViYGicIindeOwSBRtcQgJXuikbIiWxIIErRJa%2Fa0LrrG0jUrj6E%2BB7YKKjmNsyRkgoXx%2B7T1ZTpbYnnza9jtls0aDQUDRXY4NhOKm0sfpvHl5GvV3ib35z0MZIg8lwdgm%2FxsCco7AO%2FpokzUDMXHBO4RXbMMH2FcY0ZPGagd5PHIj7KI%2F3hkfQ8Nw5jxKQSSgRs4xC6uOjSP6bVcF%2BmksS91GGxS0jcC8B3Mh8%2FBzzYRJU8YTODCZYz5c4Kd3TCgt80Ay808craK0GvD2cWKzm%2FSj9k0%2FmvxucH%2FmS8QlQ2sSlfR8ikTFo5FeFQTzB4qD81xarduKilBDiWazoYw6mU1bFTfzHGuxoeSxmv0cbOghH04dABi8AFSd%2BjlbLb%2BGD1t%2Brg%2FLBQsW8dnmMbg1jyogk%2BkzWiCP7w4bWxgX2Uy%2FBQc%2FdAagMPScd4HHA%2FpwiAB%2FECyderdJcPuptY6rqRc%2BRYZe28pES3cRSBPMJKs7DARB1AZYeSiffYuCEdT%2BtZRdhzfhEJPXCaeoBbQ928fn8uxr8CkDOFgh0wlvWIWFa92v9ccJublaavu8svbvwwdr2EVaUJc0PC1TxY1NU4zswMRUdEINW48MOq0pb4GOqUBUuzUd8QbsBoIVtVTci9eSaDcZ%2FgJ2eCQPCN9iCNPslirqv4WUFDpn0Adp4OLFI0TnSjJ4IRwTaIoXdtpgMMiSnLSMn5AkJQQO6ZGWNj2R5YxiCB7ZYwEzKWqoqlgKvxc%2FpXStQmXUZj%2B5kIq4lNIu7hes%2FPNp32aPf2DEsSFPQiW%2BpiRuzLNYRvfIIrikZgrK13BKzCIcKuKDW179P1Fw1R0RSUl&X-Amz-Signature=822db194e1a98a670ae1caf76df64481b3edbd2da85c4b9c27190e72375f0783&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQRKWBY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCZfWvYqZvDLajRvOHX%2FIS%2Fhs%2FsKFVyrI6P8FYzH8hKAiEA5DeFpMnhPwy0jtVtGuaJa6D5riqxzs39GZJFT7t9ZXsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGOlnPUSrTXOiTROsCrcA9km41mV5vs3GPpffLVa%2F5IfViYGicIindeOwSBRtcQgJXuikbIiWxIIErRJa%2Fa0LrrG0jUrj6E%2BB7YKKjmNsyRkgoXx%2B7T1ZTpbYnnza9jtls0aDQUDRXY4NhOKm0sfpvHl5GvV3ib35z0MZIg8lwdgm%2FxsCco7AO%2FpokzUDMXHBO4RXbMMH2FcY0ZPGagd5PHIj7KI%2F3hkfQ8Nw5jxKQSSgRs4xC6uOjSP6bVcF%2BmksS91GGxS0jcC8B3Mh8%2FBzzYRJU8YTODCZYz5c4Kd3TCgt80Ay808craK0GvD2cWKzm%2FSj9k0%2FmvxucH%2FmS8QlQ2sSlfR8ikTFo5FeFQTzB4qD81xarduKilBDiWazoYw6mU1bFTfzHGuxoeSxmv0cbOghH04dABi8AFSd%2BjlbLb%2BGD1t%2Brg%2FLBQsW8dnmMbg1jyogk%2BkzWiCP7w4bWxgX2Uy%2FBQc%2FdAagMPScd4HHA%2FpwiAB%2FECyderdJcPuptY6rqRc%2BRYZe28pES3cRSBPMJKs7DARB1AZYeSiffYuCEdT%2BtZRdhzfhEJPXCaeoBbQ928fn8uxr8CkDOFgh0wlvWIWFa92v9ccJublaavu8svbvwwdr2EVaUJc0PC1TxY1NU4zswMRUdEINW48MOq0pb4GOqUBUuzUd8QbsBoIVtVTci9eSaDcZ%2FgJ2eCQPCN9iCNPslirqv4WUFDpn0Adp4OLFI0TnSjJ4IRwTaIoXdtpgMMiSnLSMn5AkJQQO6ZGWNj2R5YxiCB7ZYwEzKWqoqlgKvxc%2FpXStQmXUZj%2B5kIq4lNIu7hes%2FPNp32aPf2DEsSFPQiW%2BpiRuzLNYRvfIIrikZgrK13BKzCIcKuKDW179P1Fw1R0RSUl&X-Amz-Signature=e1b934b2e1d0977726987804b54bbdca412f9505c02582fbb6e925de3eb492e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQRKWBY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCZfWvYqZvDLajRvOHX%2FIS%2Fhs%2FsKFVyrI6P8FYzH8hKAiEA5DeFpMnhPwy0jtVtGuaJa6D5riqxzs39GZJFT7t9ZXsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGOlnPUSrTXOiTROsCrcA9km41mV5vs3GPpffLVa%2F5IfViYGicIindeOwSBRtcQgJXuikbIiWxIIErRJa%2Fa0LrrG0jUrj6E%2BB7YKKjmNsyRkgoXx%2B7T1ZTpbYnnza9jtls0aDQUDRXY4NhOKm0sfpvHl5GvV3ib35z0MZIg8lwdgm%2FxsCco7AO%2FpokzUDMXHBO4RXbMMH2FcY0ZPGagd5PHIj7KI%2F3hkfQ8Nw5jxKQSSgRs4xC6uOjSP6bVcF%2BmksS91GGxS0jcC8B3Mh8%2FBzzYRJU8YTODCZYz5c4Kd3TCgt80Ay808craK0GvD2cWKzm%2FSj9k0%2FmvxucH%2FmS8QlQ2sSlfR8ikTFo5FeFQTzB4qD81xarduKilBDiWazoYw6mU1bFTfzHGuxoeSxmv0cbOghH04dABi8AFSd%2BjlbLb%2BGD1t%2Brg%2FLBQsW8dnmMbg1jyogk%2BkzWiCP7w4bWxgX2Uy%2FBQc%2FdAagMPScd4HHA%2FpwiAB%2FECyderdJcPuptY6rqRc%2BRYZe28pES3cRSBPMJKs7DARB1AZYeSiffYuCEdT%2BtZRdhzfhEJPXCaeoBbQ928fn8uxr8CkDOFgh0wlvWIWFa92v9ccJublaavu8svbvwwdr2EVaUJc0PC1TxY1NU4zswMRUdEINW48MOq0pb4GOqUBUuzUd8QbsBoIVtVTci9eSaDcZ%2FgJ2eCQPCN9iCNPslirqv4WUFDpn0Adp4OLFI0TnSjJ4IRwTaIoXdtpgMMiSnLSMn5AkJQQO6ZGWNj2R5YxiCB7ZYwEzKWqoqlgKvxc%2FpXStQmXUZj%2B5kIq4lNIu7hes%2FPNp32aPf2DEsSFPQiW%2BpiRuzLNYRvfIIrikZgrK13BKzCIcKuKDW179P1Fw1R0RSUl&X-Amz-Signature=fd32552a2bd1f69763a95fbfb0e4707d8a2727115f8e334506b47558fd3277ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQRKWBY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCZfWvYqZvDLajRvOHX%2FIS%2Fhs%2FsKFVyrI6P8FYzH8hKAiEA5DeFpMnhPwy0jtVtGuaJa6D5riqxzs39GZJFT7t9ZXsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGOlnPUSrTXOiTROsCrcA9km41mV5vs3GPpffLVa%2F5IfViYGicIindeOwSBRtcQgJXuikbIiWxIIErRJa%2Fa0LrrG0jUrj6E%2BB7YKKjmNsyRkgoXx%2B7T1ZTpbYnnza9jtls0aDQUDRXY4NhOKm0sfpvHl5GvV3ib35z0MZIg8lwdgm%2FxsCco7AO%2FpokzUDMXHBO4RXbMMH2FcY0ZPGagd5PHIj7KI%2F3hkfQ8Nw5jxKQSSgRs4xC6uOjSP6bVcF%2BmksS91GGxS0jcC8B3Mh8%2FBzzYRJU8YTODCZYz5c4Kd3TCgt80Ay808craK0GvD2cWKzm%2FSj9k0%2FmvxucH%2FmS8QlQ2sSlfR8ikTFo5FeFQTzB4qD81xarduKilBDiWazoYw6mU1bFTfzHGuxoeSxmv0cbOghH04dABi8AFSd%2BjlbLb%2BGD1t%2Brg%2FLBQsW8dnmMbg1jyogk%2BkzWiCP7w4bWxgX2Uy%2FBQc%2FdAagMPScd4HHA%2FpwiAB%2FECyderdJcPuptY6rqRc%2BRYZe28pES3cRSBPMJKs7DARB1AZYeSiffYuCEdT%2BtZRdhzfhEJPXCaeoBbQ928fn8uxr8CkDOFgh0wlvWIWFa92v9ccJublaavu8svbvwwdr2EVaUJc0PC1TxY1NU4zswMRUdEINW48MOq0pb4GOqUBUuzUd8QbsBoIVtVTci9eSaDcZ%2FgJ2eCQPCN9iCNPslirqv4WUFDpn0Adp4OLFI0TnSjJ4IRwTaIoXdtpgMMiSnLSMn5AkJQQO6ZGWNj2R5YxiCB7ZYwEzKWqoqlgKvxc%2FpXStQmXUZj%2B5kIq4lNIu7hes%2FPNp32aPf2DEsSFPQiW%2BpiRuzLNYRvfIIrikZgrK13BKzCIcKuKDW179P1Fw1R0RSUl&X-Amz-Signature=dc9c8063b385091b0e1c149e73310ee67392af4319fd5806a4247dffe7f79dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQRKWBY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCZfWvYqZvDLajRvOHX%2FIS%2Fhs%2FsKFVyrI6P8FYzH8hKAiEA5DeFpMnhPwy0jtVtGuaJa6D5riqxzs39GZJFT7t9ZXsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGOlnPUSrTXOiTROsCrcA9km41mV5vs3GPpffLVa%2F5IfViYGicIindeOwSBRtcQgJXuikbIiWxIIErRJa%2Fa0LrrG0jUrj6E%2BB7YKKjmNsyRkgoXx%2B7T1ZTpbYnnza9jtls0aDQUDRXY4NhOKm0sfpvHl5GvV3ib35z0MZIg8lwdgm%2FxsCco7AO%2FpokzUDMXHBO4RXbMMH2FcY0ZPGagd5PHIj7KI%2F3hkfQ8Nw5jxKQSSgRs4xC6uOjSP6bVcF%2BmksS91GGxS0jcC8B3Mh8%2FBzzYRJU8YTODCZYz5c4Kd3TCgt80Ay808craK0GvD2cWKzm%2FSj9k0%2FmvxucH%2FmS8QlQ2sSlfR8ikTFo5FeFQTzB4qD81xarduKilBDiWazoYw6mU1bFTfzHGuxoeSxmv0cbOghH04dABi8AFSd%2BjlbLb%2BGD1t%2Brg%2FLBQsW8dnmMbg1jyogk%2BkzWiCP7w4bWxgX2Uy%2FBQc%2FdAagMPScd4HHA%2FpwiAB%2FECyderdJcPuptY6rqRc%2BRYZe28pES3cRSBPMJKs7DARB1AZYeSiffYuCEdT%2BtZRdhzfhEJPXCaeoBbQ928fn8uxr8CkDOFgh0wlvWIWFa92v9ccJublaavu8svbvwwdr2EVaUJc0PC1TxY1NU4zswMRUdEINW48MOq0pb4GOqUBUuzUd8QbsBoIVtVTci9eSaDcZ%2FgJ2eCQPCN9iCNPslirqv4WUFDpn0Adp4OLFI0TnSjJ4IRwTaIoXdtpgMMiSnLSMn5AkJQQO6ZGWNj2R5YxiCB7ZYwEzKWqoqlgKvxc%2FpXStQmXUZj%2B5kIq4lNIu7hes%2FPNp32aPf2DEsSFPQiW%2BpiRuzLNYRvfIIrikZgrK13BKzCIcKuKDW179P1Fw1R0RSUl&X-Amz-Signature=97210455b3c54331350f26b0cfecc25db4a618f94f21d2a6ee2dc7a738df1a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQRKWBY%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCZfWvYqZvDLajRvOHX%2FIS%2Fhs%2FsKFVyrI6P8FYzH8hKAiEA5DeFpMnhPwy0jtVtGuaJa6D5riqxzs39GZJFT7t9ZXsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGOlnPUSrTXOiTROsCrcA9km41mV5vs3GPpffLVa%2F5IfViYGicIindeOwSBRtcQgJXuikbIiWxIIErRJa%2Fa0LrrG0jUrj6E%2BB7YKKjmNsyRkgoXx%2B7T1ZTpbYnnza9jtls0aDQUDRXY4NhOKm0sfpvHl5GvV3ib35z0MZIg8lwdgm%2FxsCco7AO%2FpokzUDMXHBO4RXbMMH2FcY0ZPGagd5PHIj7KI%2F3hkfQ8Nw5jxKQSSgRs4xC6uOjSP6bVcF%2BmksS91GGxS0jcC8B3Mh8%2FBzzYRJU8YTODCZYz5c4Kd3TCgt80Ay808craK0GvD2cWKzm%2FSj9k0%2FmvxucH%2FmS8QlQ2sSlfR8ikTFo5FeFQTzB4qD81xarduKilBDiWazoYw6mU1bFTfzHGuxoeSxmv0cbOghH04dABi8AFSd%2BjlbLb%2BGD1t%2Brg%2FLBQsW8dnmMbg1jyogk%2BkzWiCP7w4bWxgX2Uy%2FBQc%2FdAagMPScd4HHA%2FpwiAB%2FECyderdJcPuptY6rqRc%2BRYZe28pES3cRSBPMJKs7DARB1AZYeSiffYuCEdT%2BtZRdhzfhEJPXCaeoBbQ928fn8uxr8CkDOFgh0wlvWIWFa92v9ccJublaavu8svbvwwdr2EVaUJc0PC1TxY1NU4zswMRUdEINW48MOq0pb4GOqUBUuzUd8QbsBoIVtVTci9eSaDcZ%2FgJ2eCQPCN9iCNPslirqv4WUFDpn0Adp4OLFI0TnSjJ4IRwTaIoXdtpgMMiSnLSMn5AkJQQO6ZGWNj2R5YxiCB7ZYwEzKWqoqlgKvxc%2FpXStQmXUZj%2B5kIq4lNIu7hes%2FPNp32aPf2DEsSFPQiW%2BpiRuzLNYRvfIIrikZgrK13BKzCIcKuKDW179P1Fw1R0RSUl&X-Amz-Signature=b781fb9841886350bddc60cf29dd96ea16d9df1619b48001024f2299d3bd9a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
