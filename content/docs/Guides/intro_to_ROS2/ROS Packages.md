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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMSZJLK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9%2Fa3O3jL17AlTa9b%2BE4vjlqDRTt3e9xW4ysBMOXrpZwIgAlKmFzgRbJ0yYl8%2FiPK7IMsFciGe5GUBOzfQAb6tu9cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY6oUf4bSwnCBxBtircA9RU5Ss4JtkuvsrPC7arbQJZmD1b1vnJ2Wd0CZEN9KrjEOntN%2FJ9qkk7qqnt40hh4WQqqeD1ZDYMXAAEPsYyLVQgBb1pEzAZdBsIKDQo1J1r50EnjqX4PX5r0Ikc8b9Qv0al57RyQCSRPOwdmIqPdGHhv8US05SxirWuYsfzXjYvKyfuRx2B8%2Bkr0%2FNV3xuJo3FDi%2BpUhiOYWgSF4Lo9Sl0HB0UGjT8GIL1wBpUPpEPFg3G%2Fqao6%2BnM1TM4NI75WxIksbMtlH%2F0xnRoEE9m8DT4Uw6V8g2pG9oYGkSPirKvuk7LJe8A05T0CpSO7gtYU1820T2ufUgbb46Zu7jFunoBFShLFNOuwqj2Fn3%2Bh5GZRT07Smw4vWX38QBYLQ%2B50XvnQ2EeIDnSH3KamsomEM97K6qEzFxxjlHAQQ01DlvOJvPMOlfO1aiq4rTPbJA%2FNOAQRA8fUY2kpc0fVZJ9FEucg2myy1Uykbgk8DGosVXuLVaUo5L6Ge5fHjHT7yezxT9HQhIwO3dKNNZHnvwxlboRaYF%2F1gSUudR%2Fr94d0%2FU2T2SN2L46GcZECdI%2FVY9Bn4Flt91LHQpn1wZVp%2Bl2zojL6J2zzWtsRDO8xPonWgVOrAVusoQlMe6vdTeYFMI%2Fj9MAGOqUB2eViDRSsR%2BhMVCGRyygInVYZnAMuFy44edRsumjnmGxXOcNobHDfur1uUOKPLoWAlL02iO9hWoGGDcOPw6YBJ1YrM8%2ByLgqtNHwCZ8yiazXnQl4hMOCwYApomLPBHBPQEmnNJrW3xiIUkw4nSlU3aT8Q8ExcGuIehMWBqsmpVEdd2QD8J5IbWOJL%2FCC1L%2B3JQQfwVRgpbDBWeJNMYBRBFxOe6JIN&X-Amz-Signature=6ea12398f7fa5d58f097529d1687d8ece1a897f7a1e08619c02cb74a3660b419&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMSZJLK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9%2Fa3O3jL17AlTa9b%2BE4vjlqDRTt3e9xW4ysBMOXrpZwIgAlKmFzgRbJ0yYl8%2FiPK7IMsFciGe5GUBOzfQAb6tu9cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY6oUf4bSwnCBxBtircA9RU5Ss4JtkuvsrPC7arbQJZmD1b1vnJ2Wd0CZEN9KrjEOntN%2FJ9qkk7qqnt40hh4WQqqeD1ZDYMXAAEPsYyLVQgBb1pEzAZdBsIKDQo1J1r50EnjqX4PX5r0Ikc8b9Qv0al57RyQCSRPOwdmIqPdGHhv8US05SxirWuYsfzXjYvKyfuRx2B8%2Bkr0%2FNV3xuJo3FDi%2BpUhiOYWgSF4Lo9Sl0HB0UGjT8GIL1wBpUPpEPFg3G%2Fqao6%2BnM1TM4NI75WxIksbMtlH%2F0xnRoEE9m8DT4Uw6V8g2pG9oYGkSPirKvuk7LJe8A05T0CpSO7gtYU1820T2ufUgbb46Zu7jFunoBFShLFNOuwqj2Fn3%2Bh5GZRT07Smw4vWX38QBYLQ%2B50XvnQ2EeIDnSH3KamsomEM97K6qEzFxxjlHAQQ01DlvOJvPMOlfO1aiq4rTPbJA%2FNOAQRA8fUY2kpc0fVZJ9FEucg2myy1Uykbgk8DGosVXuLVaUo5L6Ge5fHjHT7yezxT9HQhIwO3dKNNZHnvwxlboRaYF%2F1gSUudR%2Fr94d0%2FU2T2SN2L46GcZECdI%2FVY9Bn4Flt91LHQpn1wZVp%2Bl2zojL6J2zzWtsRDO8xPonWgVOrAVusoQlMe6vdTeYFMI%2Fj9MAGOqUB2eViDRSsR%2BhMVCGRyygInVYZnAMuFy44edRsumjnmGxXOcNobHDfur1uUOKPLoWAlL02iO9hWoGGDcOPw6YBJ1YrM8%2ByLgqtNHwCZ8yiazXnQl4hMOCwYApomLPBHBPQEmnNJrW3xiIUkw4nSlU3aT8Q8ExcGuIehMWBqsmpVEdd2QD8J5IbWOJL%2FCC1L%2B3JQQfwVRgpbDBWeJNMYBRBFxOe6JIN&X-Amz-Signature=a59458333ba323fe06e9c082208938e0d06ad4334ea188d3a890c9877a606212&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMSZJLK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9%2Fa3O3jL17AlTa9b%2BE4vjlqDRTt3e9xW4ysBMOXrpZwIgAlKmFzgRbJ0yYl8%2FiPK7IMsFciGe5GUBOzfQAb6tu9cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY6oUf4bSwnCBxBtircA9RU5Ss4JtkuvsrPC7arbQJZmD1b1vnJ2Wd0CZEN9KrjEOntN%2FJ9qkk7qqnt40hh4WQqqeD1ZDYMXAAEPsYyLVQgBb1pEzAZdBsIKDQo1J1r50EnjqX4PX5r0Ikc8b9Qv0al57RyQCSRPOwdmIqPdGHhv8US05SxirWuYsfzXjYvKyfuRx2B8%2Bkr0%2FNV3xuJo3FDi%2BpUhiOYWgSF4Lo9Sl0HB0UGjT8GIL1wBpUPpEPFg3G%2Fqao6%2BnM1TM4NI75WxIksbMtlH%2F0xnRoEE9m8DT4Uw6V8g2pG9oYGkSPirKvuk7LJe8A05T0CpSO7gtYU1820T2ufUgbb46Zu7jFunoBFShLFNOuwqj2Fn3%2Bh5GZRT07Smw4vWX38QBYLQ%2B50XvnQ2EeIDnSH3KamsomEM97K6qEzFxxjlHAQQ01DlvOJvPMOlfO1aiq4rTPbJA%2FNOAQRA8fUY2kpc0fVZJ9FEucg2myy1Uykbgk8DGosVXuLVaUo5L6Ge5fHjHT7yezxT9HQhIwO3dKNNZHnvwxlboRaYF%2F1gSUudR%2Fr94d0%2FU2T2SN2L46GcZECdI%2FVY9Bn4Flt91LHQpn1wZVp%2Bl2zojL6J2zzWtsRDO8xPonWgVOrAVusoQlMe6vdTeYFMI%2Fj9MAGOqUB2eViDRSsR%2BhMVCGRyygInVYZnAMuFy44edRsumjnmGxXOcNobHDfur1uUOKPLoWAlL02iO9hWoGGDcOPw6YBJ1YrM8%2ByLgqtNHwCZ8yiazXnQl4hMOCwYApomLPBHBPQEmnNJrW3xiIUkw4nSlU3aT8Q8ExcGuIehMWBqsmpVEdd2QD8J5IbWOJL%2FCC1L%2B3JQQfwVRgpbDBWeJNMYBRBFxOe6JIN&X-Amz-Signature=35467c948e14b8819451f34dc7d96051f84823438b592982fcc74cf4a06848ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMSZJLK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9%2Fa3O3jL17AlTa9b%2BE4vjlqDRTt3e9xW4ysBMOXrpZwIgAlKmFzgRbJ0yYl8%2FiPK7IMsFciGe5GUBOzfQAb6tu9cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY6oUf4bSwnCBxBtircA9RU5Ss4JtkuvsrPC7arbQJZmD1b1vnJ2Wd0CZEN9KrjEOntN%2FJ9qkk7qqnt40hh4WQqqeD1ZDYMXAAEPsYyLVQgBb1pEzAZdBsIKDQo1J1r50EnjqX4PX5r0Ikc8b9Qv0al57RyQCSRPOwdmIqPdGHhv8US05SxirWuYsfzXjYvKyfuRx2B8%2Bkr0%2FNV3xuJo3FDi%2BpUhiOYWgSF4Lo9Sl0HB0UGjT8GIL1wBpUPpEPFg3G%2Fqao6%2BnM1TM4NI75WxIksbMtlH%2F0xnRoEE9m8DT4Uw6V8g2pG9oYGkSPirKvuk7LJe8A05T0CpSO7gtYU1820T2ufUgbb46Zu7jFunoBFShLFNOuwqj2Fn3%2Bh5GZRT07Smw4vWX38QBYLQ%2B50XvnQ2EeIDnSH3KamsomEM97K6qEzFxxjlHAQQ01DlvOJvPMOlfO1aiq4rTPbJA%2FNOAQRA8fUY2kpc0fVZJ9FEucg2myy1Uykbgk8DGosVXuLVaUo5L6Ge5fHjHT7yezxT9HQhIwO3dKNNZHnvwxlboRaYF%2F1gSUudR%2Fr94d0%2FU2T2SN2L46GcZECdI%2FVY9Bn4Flt91LHQpn1wZVp%2Bl2zojL6J2zzWtsRDO8xPonWgVOrAVusoQlMe6vdTeYFMI%2Fj9MAGOqUB2eViDRSsR%2BhMVCGRyygInVYZnAMuFy44edRsumjnmGxXOcNobHDfur1uUOKPLoWAlL02iO9hWoGGDcOPw6YBJ1YrM8%2ByLgqtNHwCZ8yiazXnQl4hMOCwYApomLPBHBPQEmnNJrW3xiIUkw4nSlU3aT8Q8ExcGuIehMWBqsmpVEdd2QD8J5IbWOJL%2FCC1L%2B3JQQfwVRgpbDBWeJNMYBRBFxOe6JIN&X-Amz-Signature=f9660584bc2ef5a4a669ca14f39ec93e76bc20fd3c9189dc345de176e664ec5c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMSZJLK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9%2Fa3O3jL17AlTa9b%2BE4vjlqDRTt3e9xW4ysBMOXrpZwIgAlKmFzgRbJ0yYl8%2FiPK7IMsFciGe5GUBOzfQAb6tu9cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY6oUf4bSwnCBxBtircA9RU5Ss4JtkuvsrPC7arbQJZmD1b1vnJ2Wd0CZEN9KrjEOntN%2FJ9qkk7qqnt40hh4WQqqeD1ZDYMXAAEPsYyLVQgBb1pEzAZdBsIKDQo1J1r50EnjqX4PX5r0Ikc8b9Qv0al57RyQCSRPOwdmIqPdGHhv8US05SxirWuYsfzXjYvKyfuRx2B8%2Bkr0%2FNV3xuJo3FDi%2BpUhiOYWgSF4Lo9Sl0HB0UGjT8GIL1wBpUPpEPFg3G%2Fqao6%2BnM1TM4NI75WxIksbMtlH%2F0xnRoEE9m8DT4Uw6V8g2pG9oYGkSPirKvuk7LJe8A05T0CpSO7gtYU1820T2ufUgbb46Zu7jFunoBFShLFNOuwqj2Fn3%2Bh5GZRT07Smw4vWX38QBYLQ%2B50XvnQ2EeIDnSH3KamsomEM97K6qEzFxxjlHAQQ01DlvOJvPMOlfO1aiq4rTPbJA%2FNOAQRA8fUY2kpc0fVZJ9FEucg2myy1Uykbgk8DGosVXuLVaUo5L6Ge5fHjHT7yezxT9HQhIwO3dKNNZHnvwxlboRaYF%2F1gSUudR%2Fr94d0%2FU2T2SN2L46GcZECdI%2FVY9Bn4Flt91LHQpn1wZVp%2Bl2zojL6J2zzWtsRDO8xPonWgVOrAVusoQlMe6vdTeYFMI%2Fj9MAGOqUB2eViDRSsR%2BhMVCGRyygInVYZnAMuFy44edRsumjnmGxXOcNobHDfur1uUOKPLoWAlL02iO9hWoGGDcOPw6YBJ1YrM8%2ByLgqtNHwCZ8yiazXnQl4hMOCwYApomLPBHBPQEmnNJrW3xiIUkw4nSlU3aT8Q8ExcGuIehMWBqsmpVEdd2QD8J5IbWOJL%2FCC1L%2B3JQQfwVRgpbDBWeJNMYBRBFxOe6JIN&X-Amz-Signature=d1c418d2c4b3ff4190f43ff16166313ce5d1e7c05b25384aed0816bf3a9a546d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMSZJLK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9%2Fa3O3jL17AlTa9b%2BE4vjlqDRTt3e9xW4ysBMOXrpZwIgAlKmFzgRbJ0yYl8%2FiPK7IMsFciGe5GUBOzfQAb6tu9cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY6oUf4bSwnCBxBtircA9RU5Ss4JtkuvsrPC7arbQJZmD1b1vnJ2Wd0CZEN9KrjEOntN%2FJ9qkk7qqnt40hh4WQqqeD1ZDYMXAAEPsYyLVQgBb1pEzAZdBsIKDQo1J1r50EnjqX4PX5r0Ikc8b9Qv0al57RyQCSRPOwdmIqPdGHhv8US05SxirWuYsfzXjYvKyfuRx2B8%2Bkr0%2FNV3xuJo3FDi%2BpUhiOYWgSF4Lo9Sl0HB0UGjT8GIL1wBpUPpEPFg3G%2Fqao6%2BnM1TM4NI75WxIksbMtlH%2F0xnRoEE9m8DT4Uw6V8g2pG9oYGkSPirKvuk7LJe8A05T0CpSO7gtYU1820T2ufUgbb46Zu7jFunoBFShLFNOuwqj2Fn3%2Bh5GZRT07Smw4vWX38QBYLQ%2B50XvnQ2EeIDnSH3KamsomEM97K6qEzFxxjlHAQQ01DlvOJvPMOlfO1aiq4rTPbJA%2FNOAQRA8fUY2kpc0fVZJ9FEucg2myy1Uykbgk8DGosVXuLVaUo5L6Ge5fHjHT7yezxT9HQhIwO3dKNNZHnvwxlboRaYF%2F1gSUudR%2Fr94d0%2FU2T2SN2L46GcZECdI%2FVY9Bn4Flt91LHQpn1wZVp%2Bl2zojL6J2zzWtsRDO8xPonWgVOrAVusoQlMe6vdTeYFMI%2Fj9MAGOqUB2eViDRSsR%2BhMVCGRyygInVYZnAMuFy44edRsumjnmGxXOcNobHDfur1uUOKPLoWAlL02iO9hWoGGDcOPw6YBJ1YrM8%2ByLgqtNHwCZ8yiazXnQl4hMOCwYApomLPBHBPQEmnNJrW3xiIUkw4nSlU3aT8Q8ExcGuIehMWBqsmpVEdd2QD8J5IbWOJL%2FCC1L%2B3JQQfwVRgpbDBWeJNMYBRBFxOe6JIN&X-Amz-Signature=b0327f4ece96c8bf67b3217e6f472d16def9a5e164050946bcd0189626b5ea86&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGMSZJLK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9%2Fa3O3jL17AlTa9b%2BE4vjlqDRTt3e9xW4ysBMOXrpZwIgAlKmFzgRbJ0yYl8%2FiPK7IMsFciGe5GUBOzfQAb6tu9cqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY6oUf4bSwnCBxBtircA9RU5Ss4JtkuvsrPC7arbQJZmD1b1vnJ2Wd0CZEN9KrjEOntN%2FJ9qkk7qqnt40hh4WQqqeD1ZDYMXAAEPsYyLVQgBb1pEzAZdBsIKDQo1J1r50EnjqX4PX5r0Ikc8b9Qv0al57RyQCSRPOwdmIqPdGHhv8US05SxirWuYsfzXjYvKyfuRx2B8%2Bkr0%2FNV3xuJo3FDi%2BpUhiOYWgSF4Lo9Sl0HB0UGjT8GIL1wBpUPpEPFg3G%2Fqao6%2BnM1TM4NI75WxIksbMtlH%2F0xnRoEE9m8DT4Uw6V8g2pG9oYGkSPirKvuk7LJe8A05T0CpSO7gtYU1820T2ufUgbb46Zu7jFunoBFShLFNOuwqj2Fn3%2Bh5GZRT07Smw4vWX38QBYLQ%2B50XvnQ2EeIDnSH3KamsomEM97K6qEzFxxjlHAQQ01DlvOJvPMOlfO1aiq4rTPbJA%2FNOAQRA8fUY2kpc0fVZJ9FEucg2myy1Uykbgk8DGosVXuLVaUo5L6Ge5fHjHT7yezxT9HQhIwO3dKNNZHnvwxlboRaYF%2F1gSUudR%2Fr94d0%2FU2T2SN2L46GcZECdI%2FVY9Bn4Flt91LHQpn1wZVp%2Bl2zojL6J2zzWtsRDO8xPonWgVOrAVusoQlMe6vdTeYFMI%2Fj9MAGOqUB2eViDRSsR%2BhMVCGRyygInVYZnAMuFy44edRsumjnmGxXOcNobHDfur1uUOKPLoWAlL02iO9hWoGGDcOPw6YBJ1YrM8%2ByLgqtNHwCZ8yiazXnQl4hMOCwYApomLPBHBPQEmnNJrW3xiIUkw4nSlU3aT8Q8ExcGuIehMWBqsmpVEdd2QD8J5IbWOJL%2FCC1L%2B3JQQfwVRgpbDBWeJNMYBRBFxOe6JIN&X-Amz-Signature=ab708e854068c776541a4a8cd814ae2b872986f0f59c5a4195df73410452e78c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
