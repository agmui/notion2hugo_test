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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5V5GJ2P%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEfPMJj7xVaaW53%2BKX%2B2o3UTMRWbkfojZecQ3A7U7cbwIhAOCtYuqhVnR2KLfx%2F07mkKr5u6yaP1z9ZVxvzF63fYRYKv8DCCgQABoMNjM3NDIzMTgzODA1Igz6xReUrwoNwlXfyfYq3ANN6zWkS8BeIsH%2FdgBeKflqiyKZW9t6IsXPV8coDsgU4b3bVFTr2POnrrIHeFMyOA7A8aRk%2FB96GSZcSlNjafEaBfuFFjmXQYrRli7ozcIfxzbujhe7rVS0AL0h5klhsuchuR7UyiiPQQGa22kMi6zpBKF5HkvEULXUIDaeC89cKTq845uMT9G62%2FbLwmmELbeHgR0S1Wxx2g1U06zHbvQUweSrtF%2FNXUHwsEhj8AdzrZJbkheKDQKWR5C51x7TMIuVLoEJRuHRwYFmTHxR1tWPJPkPhe6OzT5kGg3pSCdK3%2BlCsJtNXmF%2BIdWaptcFZa7VDQsBYELbgqkm1NhXFXB%2B8zmcD%2FQpLi4kCO6etANzopVLx9HCqajL1LwQqF%2FP3XfBDS6LK%2BTTChhaU38DpoNh4Utzozfc9NTr%2FIPUX2EQJXCDxSDbqc8PZ6Bwzh2xE0dHwpV5JzYezssFJN9uQvKf9EgCywMhLtUKk6OnI15RBya6wJ5Tn%2FuIa2Yk42iZn%2BJMsbOm3HRQJEHFVsAyn1P9xwzEpvWyVtvpFePolfF4yZWWq5bFaK4j%2F3DtyUfAaypTvFGOc5CDGzTUFSyBe9TlQ954kbHxtkKPSe1SfIfBl71iaekg7JZngNlGjjD2osO%2FBjqkAVpyMNhAvsecQKqv%2FsK70a7ErGPempro0AMlBtwsm6zTTlI7sIpe4H3Me8a5UsvQ4UospOqK%2FYLPj7uK85Yuvh5z82bTxnD8zdMq8rPKkZv0vgwjrtAwAq0B33lIob6WxLQMrmLDdZByXPewfNEiwh0XdRyQXO86gukxlfy%2BuzH41V1r%2FawJ0QMyVrFtMoJRRV9uLrl4ssIHeCmD5V4QaX6%2Fkk6F&X-Amz-Signature=1b7bfa458a356222bce845b0708ad9defa3fd761cff2561a61b9c811fcb1b04d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5V5GJ2P%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEfPMJj7xVaaW53%2BKX%2B2o3UTMRWbkfojZecQ3A7U7cbwIhAOCtYuqhVnR2KLfx%2F07mkKr5u6yaP1z9ZVxvzF63fYRYKv8DCCgQABoMNjM3NDIzMTgzODA1Igz6xReUrwoNwlXfyfYq3ANN6zWkS8BeIsH%2FdgBeKflqiyKZW9t6IsXPV8coDsgU4b3bVFTr2POnrrIHeFMyOA7A8aRk%2FB96GSZcSlNjafEaBfuFFjmXQYrRli7ozcIfxzbujhe7rVS0AL0h5klhsuchuR7UyiiPQQGa22kMi6zpBKF5HkvEULXUIDaeC89cKTq845uMT9G62%2FbLwmmELbeHgR0S1Wxx2g1U06zHbvQUweSrtF%2FNXUHwsEhj8AdzrZJbkheKDQKWR5C51x7TMIuVLoEJRuHRwYFmTHxR1tWPJPkPhe6OzT5kGg3pSCdK3%2BlCsJtNXmF%2BIdWaptcFZa7VDQsBYELbgqkm1NhXFXB%2B8zmcD%2FQpLi4kCO6etANzopVLx9HCqajL1LwQqF%2FP3XfBDS6LK%2BTTChhaU38DpoNh4Utzozfc9NTr%2FIPUX2EQJXCDxSDbqc8PZ6Bwzh2xE0dHwpV5JzYezssFJN9uQvKf9EgCywMhLtUKk6OnI15RBya6wJ5Tn%2FuIa2Yk42iZn%2BJMsbOm3HRQJEHFVsAyn1P9xwzEpvWyVtvpFePolfF4yZWWq5bFaK4j%2F3DtyUfAaypTvFGOc5CDGzTUFSyBe9TlQ954kbHxtkKPSe1SfIfBl71iaekg7JZngNlGjjD2osO%2FBjqkAVpyMNhAvsecQKqv%2FsK70a7ErGPempro0AMlBtwsm6zTTlI7sIpe4H3Me8a5UsvQ4UospOqK%2FYLPj7uK85Yuvh5z82bTxnD8zdMq8rPKkZv0vgwjrtAwAq0B33lIob6WxLQMrmLDdZByXPewfNEiwh0XdRyQXO86gukxlfy%2BuzH41V1r%2FawJ0QMyVrFtMoJRRV9uLrl4ssIHeCmD5V4QaX6%2Fkk6F&X-Amz-Signature=1049658005c39e06f2a08aa8b87812d5a8df8f073a5f59564c0187243d83ca6d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5V5GJ2P%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEfPMJj7xVaaW53%2BKX%2B2o3UTMRWbkfojZecQ3A7U7cbwIhAOCtYuqhVnR2KLfx%2F07mkKr5u6yaP1z9ZVxvzF63fYRYKv8DCCgQABoMNjM3NDIzMTgzODA1Igz6xReUrwoNwlXfyfYq3ANN6zWkS8BeIsH%2FdgBeKflqiyKZW9t6IsXPV8coDsgU4b3bVFTr2POnrrIHeFMyOA7A8aRk%2FB96GSZcSlNjafEaBfuFFjmXQYrRli7ozcIfxzbujhe7rVS0AL0h5klhsuchuR7UyiiPQQGa22kMi6zpBKF5HkvEULXUIDaeC89cKTq845uMT9G62%2FbLwmmELbeHgR0S1Wxx2g1U06zHbvQUweSrtF%2FNXUHwsEhj8AdzrZJbkheKDQKWR5C51x7TMIuVLoEJRuHRwYFmTHxR1tWPJPkPhe6OzT5kGg3pSCdK3%2BlCsJtNXmF%2BIdWaptcFZa7VDQsBYELbgqkm1NhXFXB%2B8zmcD%2FQpLi4kCO6etANzopVLx9HCqajL1LwQqF%2FP3XfBDS6LK%2BTTChhaU38DpoNh4Utzozfc9NTr%2FIPUX2EQJXCDxSDbqc8PZ6Bwzh2xE0dHwpV5JzYezssFJN9uQvKf9EgCywMhLtUKk6OnI15RBya6wJ5Tn%2FuIa2Yk42iZn%2BJMsbOm3HRQJEHFVsAyn1P9xwzEpvWyVtvpFePolfF4yZWWq5bFaK4j%2F3DtyUfAaypTvFGOc5CDGzTUFSyBe9TlQ954kbHxtkKPSe1SfIfBl71iaekg7JZngNlGjjD2osO%2FBjqkAVpyMNhAvsecQKqv%2FsK70a7ErGPempro0AMlBtwsm6zTTlI7sIpe4H3Me8a5UsvQ4UospOqK%2FYLPj7uK85Yuvh5z82bTxnD8zdMq8rPKkZv0vgwjrtAwAq0B33lIob6WxLQMrmLDdZByXPewfNEiwh0XdRyQXO86gukxlfy%2BuzH41V1r%2FawJ0QMyVrFtMoJRRV9uLrl4ssIHeCmD5V4QaX6%2Fkk6F&X-Amz-Signature=53153ac556b3fef655b4631fa8e590231c1631d57529226cc2623da33b2ee371&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5V5GJ2P%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEfPMJj7xVaaW53%2BKX%2B2o3UTMRWbkfojZecQ3A7U7cbwIhAOCtYuqhVnR2KLfx%2F07mkKr5u6yaP1z9ZVxvzF63fYRYKv8DCCgQABoMNjM3NDIzMTgzODA1Igz6xReUrwoNwlXfyfYq3ANN6zWkS8BeIsH%2FdgBeKflqiyKZW9t6IsXPV8coDsgU4b3bVFTr2POnrrIHeFMyOA7A8aRk%2FB96GSZcSlNjafEaBfuFFjmXQYrRli7ozcIfxzbujhe7rVS0AL0h5klhsuchuR7UyiiPQQGa22kMi6zpBKF5HkvEULXUIDaeC89cKTq845uMT9G62%2FbLwmmELbeHgR0S1Wxx2g1U06zHbvQUweSrtF%2FNXUHwsEhj8AdzrZJbkheKDQKWR5C51x7TMIuVLoEJRuHRwYFmTHxR1tWPJPkPhe6OzT5kGg3pSCdK3%2BlCsJtNXmF%2BIdWaptcFZa7VDQsBYELbgqkm1NhXFXB%2B8zmcD%2FQpLi4kCO6etANzopVLx9HCqajL1LwQqF%2FP3XfBDS6LK%2BTTChhaU38DpoNh4Utzozfc9NTr%2FIPUX2EQJXCDxSDbqc8PZ6Bwzh2xE0dHwpV5JzYezssFJN9uQvKf9EgCywMhLtUKk6OnI15RBya6wJ5Tn%2FuIa2Yk42iZn%2BJMsbOm3HRQJEHFVsAyn1P9xwzEpvWyVtvpFePolfF4yZWWq5bFaK4j%2F3DtyUfAaypTvFGOc5CDGzTUFSyBe9TlQ954kbHxtkKPSe1SfIfBl71iaekg7JZngNlGjjD2osO%2FBjqkAVpyMNhAvsecQKqv%2FsK70a7ErGPempro0AMlBtwsm6zTTlI7sIpe4H3Me8a5UsvQ4UospOqK%2FYLPj7uK85Yuvh5z82bTxnD8zdMq8rPKkZv0vgwjrtAwAq0B33lIob6WxLQMrmLDdZByXPewfNEiwh0XdRyQXO86gukxlfy%2BuzH41V1r%2FawJ0QMyVrFtMoJRRV9uLrl4ssIHeCmD5V4QaX6%2Fkk6F&X-Amz-Signature=b9a9d5abce5f6b24c6eb49b191fac7a674a5ab83df7d2a8e23b8f5f465dd2851&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5V5GJ2P%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEfPMJj7xVaaW53%2BKX%2B2o3UTMRWbkfojZecQ3A7U7cbwIhAOCtYuqhVnR2KLfx%2F07mkKr5u6yaP1z9ZVxvzF63fYRYKv8DCCgQABoMNjM3NDIzMTgzODA1Igz6xReUrwoNwlXfyfYq3ANN6zWkS8BeIsH%2FdgBeKflqiyKZW9t6IsXPV8coDsgU4b3bVFTr2POnrrIHeFMyOA7A8aRk%2FB96GSZcSlNjafEaBfuFFjmXQYrRli7ozcIfxzbujhe7rVS0AL0h5klhsuchuR7UyiiPQQGa22kMi6zpBKF5HkvEULXUIDaeC89cKTq845uMT9G62%2FbLwmmELbeHgR0S1Wxx2g1U06zHbvQUweSrtF%2FNXUHwsEhj8AdzrZJbkheKDQKWR5C51x7TMIuVLoEJRuHRwYFmTHxR1tWPJPkPhe6OzT5kGg3pSCdK3%2BlCsJtNXmF%2BIdWaptcFZa7VDQsBYELbgqkm1NhXFXB%2B8zmcD%2FQpLi4kCO6etANzopVLx9HCqajL1LwQqF%2FP3XfBDS6LK%2BTTChhaU38DpoNh4Utzozfc9NTr%2FIPUX2EQJXCDxSDbqc8PZ6Bwzh2xE0dHwpV5JzYezssFJN9uQvKf9EgCywMhLtUKk6OnI15RBya6wJ5Tn%2FuIa2Yk42iZn%2BJMsbOm3HRQJEHFVsAyn1P9xwzEpvWyVtvpFePolfF4yZWWq5bFaK4j%2F3DtyUfAaypTvFGOc5CDGzTUFSyBe9TlQ954kbHxtkKPSe1SfIfBl71iaekg7JZngNlGjjD2osO%2FBjqkAVpyMNhAvsecQKqv%2FsK70a7ErGPempro0AMlBtwsm6zTTlI7sIpe4H3Me8a5UsvQ4UospOqK%2FYLPj7uK85Yuvh5z82bTxnD8zdMq8rPKkZv0vgwjrtAwAq0B33lIob6WxLQMrmLDdZByXPewfNEiwh0XdRyQXO86gukxlfy%2BuzH41V1r%2FawJ0QMyVrFtMoJRRV9uLrl4ssIHeCmD5V4QaX6%2Fkk6F&X-Amz-Signature=653b3c108cf24da030dc01e6e6f5e8b1276f201a9a35431c3176090515b06010&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5V5GJ2P%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEfPMJj7xVaaW53%2BKX%2B2o3UTMRWbkfojZecQ3A7U7cbwIhAOCtYuqhVnR2KLfx%2F07mkKr5u6yaP1z9ZVxvzF63fYRYKv8DCCgQABoMNjM3NDIzMTgzODA1Igz6xReUrwoNwlXfyfYq3ANN6zWkS8BeIsH%2FdgBeKflqiyKZW9t6IsXPV8coDsgU4b3bVFTr2POnrrIHeFMyOA7A8aRk%2FB96GSZcSlNjafEaBfuFFjmXQYrRli7ozcIfxzbujhe7rVS0AL0h5klhsuchuR7UyiiPQQGa22kMi6zpBKF5HkvEULXUIDaeC89cKTq845uMT9G62%2FbLwmmELbeHgR0S1Wxx2g1U06zHbvQUweSrtF%2FNXUHwsEhj8AdzrZJbkheKDQKWR5C51x7TMIuVLoEJRuHRwYFmTHxR1tWPJPkPhe6OzT5kGg3pSCdK3%2BlCsJtNXmF%2BIdWaptcFZa7VDQsBYELbgqkm1NhXFXB%2B8zmcD%2FQpLi4kCO6etANzopVLx9HCqajL1LwQqF%2FP3XfBDS6LK%2BTTChhaU38DpoNh4Utzozfc9NTr%2FIPUX2EQJXCDxSDbqc8PZ6Bwzh2xE0dHwpV5JzYezssFJN9uQvKf9EgCywMhLtUKk6OnI15RBya6wJ5Tn%2FuIa2Yk42iZn%2BJMsbOm3HRQJEHFVsAyn1P9xwzEpvWyVtvpFePolfF4yZWWq5bFaK4j%2F3DtyUfAaypTvFGOc5CDGzTUFSyBe9TlQ954kbHxtkKPSe1SfIfBl71iaekg7JZngNlGjjD2osO%2FBjqkAVpyMNhAvsecQKqv%2FsK70a7ErGPempro0AMlBtwsm6zTTlI7sIpe4H3Me8a5UsvQ4UospOqK%2FYLPj7uK85Yuvh5z82bTxnD8zdMq8rPKkZv0vgwjrtAwAq0B33lIob6WxLQMrmLDdZByXPewfNEiwh0XdRyQXO86gukxlfy%2BuzH41V1r%2FawJ0QMyVrFtMoJRRV9uLrl4ssIHeCmD5V4QaX6%2Fkk6F&X-Amz-Signature=b1b0854a0ea7f0d93ed23323e93ce798f3b0f6010d0510358352dff91392e9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5V5GJ2P%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEfPMJj7xVaaW53%2BKX%2B2o3UTMRWbkfojZecQ3A7U7cbwIhAOCtYuqhVnR2KLfx%2F07mkKr5u6yaP1z9ZVxvzF63fYRYKv8DCCgQABoMNjM3NDIzMTgzODA1Igz6xReUrwoNwlXfyfYq3ANN6zWkS8BeIsH%2FdgBeKflqiyKZW9t6IsXPV8coDsgU4b3bVFTr2POnrrIHeFMyOA7A8aRk%2FB96GSZcSlNjafEaBfuFFjmXQYrRli7ozcIfxzbujhe7rVS0AL0h5klhsuchuR7UyiiPQQGa22kMi6zpBKF5HkvEULXUIDaeC89cKTq845uMT9G62%2FbLwmmELbeHgR0S1Wxx2g1U06zHbvQUweSrtF%2FNXUHwsEhj8AdzrZJbkheKDQKWR5C51x7TMIuVLoEJRuHRwYFmTHxR1tWPJPkPhe6OzT5kGg3pSCdK3%2BlCsJtNXmF%2BIdWaptcFZa7VDQsBYELbgqkm1NhXFXB%2B8zmcD%2FQpLi4kCO6etANzopVLx9HCqajL1LwQqF%2FP3XfBDS6LK%2BTTChhaU38DpoNh4Utzozfc9NTr%2FIPUX2EQJXCDxSDbqc8PZ6Bwzh2xE0dHwpV5JzYezssFJN9uQvKf9EgCywMhLtUKk6OnI15RBya6wJ5Tn%2FuIa2Yk42iZn%2BJMsbOm3HRQJEHFVsAyn1P9xwzEpvWyVtvpFePolfF4yZWWq5bFaK4j%2F3DtyUfAaypTvFGOc5CDGzTUFSyBe9TlQ954kbHxtkKPSe1SfIfBl71iaekg7JZngNlGjjD2osO%2FBjqkAVpyMNhAvsecQKqv%2FsK70a7ErGPempro0AMlBtwsm6zTTlI7sIpe4H3Me8a5UsvQ4UospOqK%2FYLPj7uK85Yuvh5z82bTxnD8zdMq8rPKkZv0vgwjrtAwAq0B33lIob6WxLQMrmLDdZByXPewfNEiwh0XdRyQXO86gukxlfy%2BuzH41V1r%2FawJ0QMyVrFtMoJRRV9uLrl4ssIHeCmD5V4QaX6%2Fkk6F&X-Amz-Signature=f9e41c7ee775c7248b1a34f9e24e02afcd07d51633f0c8055d29a9f38bb87f70&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
