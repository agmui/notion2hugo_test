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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YS2KAEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Dv%2BsupuiI5%2FPwyxsIGOltYiCxrXl3zqQHUmtFrOq9AiEAiT4UyfTTit%2BKeQh4366bUMkQLkOFE%2BWCuc6u%2By91iZUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJG65wdavcdaS%2BAJyrcA9o9EQi5IdvWe1pWW0DscksHCbMfbvbWZHds5jN3rFuzownkhJ2CdyWY57PyKltNAxc1HfLugGTk0QZX7YSwzeUZr5qp9Ko3KV9q1WVJqRHHpjtkW1Hb5a5H%2FGYb6J8N7ydpR6xlmN95w5oCUUtO8Cdr0eM1YHZ0Syk4d1t0hwkLlfjOsS7KF4HFV0qn95q7JdcNQVhPjD39bW6PfaoVfNeWazwgZHIoMm7z3vlOn1NDtlwQncC%2B1rOg1Fpql9LtVYunWsjpZvtXzAC8E8FOwwbiBInsoE3JuXF3U6u3%2B0vodTfckjsJrBvT1xEBtOPwmSwQh5FqpvNHj6NHrWROniBlDHBgQ0qMErOdAALDLJXDhJ2DYhFXgzfuVwrY6qgQQyHCwkK5Xz5lPcb9kv3czXYgb02vtBzj%2BM4tBu40etlcildLJZPAvpIoGpdF%2F5K0NFKTHpB3vYN4QsfEmbBtFaeX4cTQtwjtUSgbXRDLKVTu%2BR%2FVGPqhOAHu4ni2WNJkXqogZkPmc6qVEP7TRmh7EAibUj%2BOGWLSDfY%2F1DvRieK0hR7HuFlc%2B4rcPEp0RWWNNN84K0eoJrlmlKlMGG%2Bn2FKkLyLNNxfbXwAehpNkLYjN0vaweV4wWjh8PUXNMPuhoL0GOqUBJEkiBAXjI7Bi5eKtLV%2BqWrCrjAyGSAOEhG7llXW0xlQYh%2FE21LsN225%2FJVVFn6Qd8xwjWs1F8VOpLT6DD3ptAv9Uria5aVvAt%2FAmB%2FQk3SzgySRvI%2FZP4AEftZjqhmPRVdvICePuuL8brFWg2gLS2jM%2FCYeHD7aq3XX7SZFasVdpsTSmcV9Knf1pcBdW%2Bgs0k3zYcf2%2F5Dp4lADEZ2haK43hs2dd&X-Amz-Signature=ac0d057510b476b050b8938167e90455f94287d9144d519c5137a69d3c413132&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YS2KAEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Dv%2BsupuiI5%2FPwyxsIGOltYiCxrXl3zqQHUmtFrOq9AiEAiT4UyfTTit%2BKeQh4366bUMkQLkOFE%2BWCuc6u%2By91iZUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJG65wdavcdaS%2BAJyrcA9o9EQi5IdvWe1pWW0DscksHCbMfbvbWZHds5jN3rFuzownkhJ2CdyWY57PyKltNAxc1HfLugGTk0QZX7YSwzeUZr5qp9Ko3KV9q1WVJqRHHpjtkW1Hb5a5H%2FGYb6J8N7ydpR6xlmN95w5oCUUtO8Cdr0eM1YHZ0Syk4d1t0hwkLlfjOsS7KF4HFV0qn95q7JdcNQVhPjD39bW6PfaoVfNeWazwgZHIoMm7z3vlOn1NDtlwQncC%2B1rOg1Fpql9LtVYunWsjpZvtXzAC8E8FOwwbiBInsoE3JuXF3U6u3%2B0vodTfckjsJrBvT1xEBtOPwmSwQh5FqpvNHj6NHrWROniBlDHBgQ0qMErOdAALDLJXDhJ2DYhFXgzfuVwrY6qgQQyHCwkK5Xz5lPcb9kv3czXYgb02vtBzj%2BM4tBu40etlcildLJZPAvpIoGpdF%2F5K0NFKTHpB3vYN4QsfEmbBtFaeX4cTQtwjtUSgbXRDLKVTu%2BR%2FVGPqhOAHu4ni2WNJkXqogZkPmc6qVEP7TRmh7EAibUj%2BOGWLSDfY%2F1DvRieK0hR7HuFlc%2B4rcPEp0RWWNNN84K0eoJrlmlKlMGG%2Bn2FKkLyLNNxfbXwAehpNkLYjN0vaweV4wWjh8PUXNMPuhoL0GOqUBJEkiBAXjI7Bi5eKtLV%2BqWrCrjAyGSAOEhG7llXW0xlQYh%2FE21LsN225%2FJVVFn6Qd8xwjWs1F8VOpLT6DD3ptAv9Uria5aVvAt%2FAmB%2FQk3SzgySRvI%2FZP4AEftZjqhmPRVdvICePuuL8brFWg2gLS2jM%2FCYeHD7aq3XX7SZFasVdpsTSmcV9Knf1pcBdW%2Bgs0k3zYcf2%2F5Dp4lADEZ2haK43hs2dd&X-Amz-Signature=73924c41e231614a10ed17cf88cd5d497e0eae9171e573bf3a061d11249c4bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YS2KAEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Dv%2BsupuiI5%2FPwyxsIGOltYiCxrXl3zqQHUmtFrOq9AiEAiT4UyfTTit%2BKeQh4366bUMkQLkOFE%2BWCuc6u%2By91iZUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJG65wdavcdaS%2BAJyrcA9o9EQi5IdvWe1pWW0DscksHCbMfbvbWZHds5jN3rFuzownkhJ2CdyWY57PyKltNAxc1HfLugGTk0QZX7YSwzeUZr5qp9Ko3KV9q1WVJqRHHpjtkW1Hb5a5H%2FGYb6J8N7ydpR6xlmN95w5oCUUtO8Cdr0eM1YHZ0Syk4d1t0hwkLlfjOsS7KF4HFV0qn95q7JdcNQVhPjD39bW6PfaoVfNeWazwgZHIoMm7z3vlOn1NDtlwQncC%2B1rOg1Fpql9LtVYunWsjpZvtXzAC8E8FOwwbiBInsoE3JuXF3U6u3%2B0vodTfckjsJrBvT1xEBtOPwmSwQh5FqpvNHj6NHrWROniBlDHBgQ0qMErOdAALDLJXDhJ2DYhFXgzfuVwrY6qgQQyHCwkK5Xz5lPcb9kv3czXYgb02vtBzj%2BM4tBu40etlcildLJZPAvpIoGpdF%2F5K0NFKTHpB3vYN4QsfEmbBtFaeX4cTQtwjtUSgbXRDLKVTu%2BR%2FVGPqhOAHu4ni2WNJkXqogZkPmc6qVEP7TRmh7EAibUj%2BOGWLSDfY%2F1DvRieK0hR7HuFlc%2B4rcPEp0RWWNNN84K0eoJrlmlKlMGG%2Bn2FKkLyLNNxfbXwAehpNkLYjN0vaweV4wWjh8PUXNMPuhoL0GOqUBJEkiBAXjI7Bi5eKtLV%2BqWrCrjAyGSAOEhG7llXW0xlQYh%2FE21LsN225%2FJVVFn6Qd8xwjWs1F8VOpLT6DD3ptAv9Uria5aVvAt%2FAmB%2FQk3SzgySRvI%2FZP4AEftZjqhmPRVdvICePuuL8brFWg2gLS2jM%2FCYeHD7aq3XX7SZFasVdpsTSmcV9Knf1pcBdW%2Bgs0k3zYcf2%2F5Dp4lADEZ2haK43hs2dd&X-Amz-Signature=4364e79a5fdc8c3732a6ed3220d2ba1902cf43dfdfa75913f488f7238caf490f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YS2KAEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Dv%2BsupuiI5%2FPwyxsIGOltYiCxrXl3zqQHUmtFrOq9AiEAiT4UyfTTit%2BKeQh4366bUMkQLkOFE%2BWCuc6u%2By91iZUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJG65wdavcdaS%2BAJyrcA9o9EQi5IdvWe1pWW0DscksHCbMfbvbWZHds5jN3rFuzownkhJ2CdyWY57PyKltNAxc1HfLugGTk0QZX7YSwzeUZr5qp9Ko3KV9q1WVJqRHHpjtkW1Hb5a5H%2FGYb6J8N7ydpR6xlmN95w5oCUUtO8Cdr0eM1YHZ0Syk4d1t0hwkLlfjOsS7KF4HFV0qn95q7JdcNQVhPjD39bW6PfaoVfNeWazwgZHIoMm7z3vlOn1NDtlwQncC%2B1rOg1Fpql9LtVYunWsjpZvtXzAC8E8FOwwbiBInsoE3JuXF3U6u3%2B0vodTfckjsJrBvT1xEBtOPwmSwQh5FqpvNHj6NHrWROniBlDHBgQ0qMErOdAALDLJXDhJ2DYhFXgzfuVwrY6qgQQyHCwkK5Xz5lPcb9kv3czXYgb02vtBzj%2BM4tBu40etlcildLJZPAvpIoGpdF%2F5K0NFKTHpB3vYN4QsfEmbBtFaeX4cTQtwjtUSgbXRDLKVTu%2BR%2FVGPqhOAHu4ni2WNJkXqogZkPmc6qVEP7TRmh7EAibUj%2BOGWLSDfY%2F1DvRieK0hR7HuFlc%2B4rcPEp0RWWNNN84K0eoJrlmlKlMGG%2Bn2FKkLyLNNxfbXwAehpNkLYjN0vaweV4wWjh8PUXNMPuhoL0GOqUBJEkiBAXjI7Bi5eKtLV%2BqWrCrjAyGSAOEhG7llXW0xlQYh%2FE21LsN225%2FJVVFn6Qd8xwjWs1F8VOpLT6DD3ptAv9Uria5aVvAt%2FAmB%2FQk3SzgySRvI%2FZP4AEftZjqhmPRVdvICePuuL8brFWg2gLS2jM%2FCYeHD7aq3XX7SZFasVdpsTSmcV9Knf1pcBdW%2Bgs0k3zYcf2%2F5Dp4lADEZ2haK43hs2dd&X-Amz-Signature=ecd17f382e6ff80e6ff9b91bed5ea6542ede4328e5d2691a4e517bc39a7ae742&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YS2KAEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Dv%2BsupuiI5%2FPwyxsIGOltYiCxrXl3zqQHUmtFrOq9AiEAiT4UyfTTit%2BKeQh4366bUMkQLkOFE%2BWCuc6u%2By91iZUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJG65wdavcdaS%2BAJyrcA9o9EQi5IdvWe1pWW0DscksHCbMfbvbWZHds5jN3rFuzownkhJ2CdyWY57PyKltNAxc1HfLugGTk0QZX7YSwzeUZr5qp9Ko3KV9q1WVJqRHHpjtkW1Hb5a5H%2FGYb6J8N7ydpR6xlmN95w5oCUUtO8Cdr0eM1YHZ0Syk4d1t0hwkLlfjOsS7KF4HFV0qn95q7JdcNQVhPjD39bW6PfaoVfNeWazwgZHIoMm7z3vlOn1NDtlwQncC%2B1rOg1Fpql9LtVYunWsjpZvtXzAC8E8FOwwbiBInsoE3JuXF3U6u3%2B0vodTfckjsJrBvT1xEBtOPwmSwQh5FqpvNHj6NHrWROniBlDHBgQ0qMErOdAALDLJXDhJ2DYhFXgzfuVwrY6qgQQyHCwkK5Xz5lPcb9kv3czXYgb02vtBzj%2BM4tBu40etlcildLJZPAvpIoGpdF%2F5K0NFKTHpB3vYN4QsfEmbBtFaeX4cTQtwjtUSgbXRDLKVTu%2BR%2FVGPqhOAHu4ni2WNJkXqogZkPmc6qVEP7TRmh7EAibUj%2BOGWLSDfY%2F1DvRieK0hR7HuFlc%2B4rcPEp0RWWNNN84K0eoJrlmlKlMGG%2Bn2FKkLyLNNxfbXwAehpNkLYjN0vaweV4wWjh8PUXNMPuhoL0GOqUBJEkiBAXjI7Bi5eKtLV%2BqWrCrjAyGSAOEhG7llXW0xlQYh%2FE21LsN225%2FJVVFn6Qd8xwjWs1F8VOpLT6DD3ptAv9Uria5aVvAt%2FAmB%2FQk3SzgySRvI%2FZP4AEftZjqhmPRVdvICePuuL8brFWg2gLS2jM%2FCYeHD7aq3XX7SZFasVdpsTSmcV9Knf1pcBdW%2Bgs0k3zYcf2%2F5Dp4lADEZ2haK43hs2dd&X-Amz-Signature=b341e81dcb1c8b6c134bfe9a75e9adc3637e36e46612c974ddafe559d6176544&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YS2KAEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Dv%2BsupuiI5%2FPwyxsIGOltYiCxrXl3zqQHUmtFrOq9AiEAiT4UyfTTit%2BKeQh4366bUMkQLkOFE%2BWCuc6u%2By91iZUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJG65wdavcdaS%2BAJyrcA9o9EQi5IdvWe1pWW0DscksHCbMfbvbWZHds5jN3rFuzownkhJ2CdyWY57PyKltNAxc1HfLugGTk0QZX7YSwzeUZr5qp9Ko3KV9q1WVJqRHHpjtkW1Hb5a5H%2FGYb6J8N7ydpR6xlmN95w5oCUUtO8Cdr0eM1YHZ0Syk4d1t0hwkLlfjOsS7KF4HFV0qn95q7JdcNQVhPjD39bW6PfaoVfNeWazwgZHIoMm7z3vlOn1NDtlwQncC%2B1rOg1Fpql9LtVYunWsjpZvtXzAC8E8FOwwbiBInsoE3JuXF3U6u3%2B0vodTfckjsJrBvT1xEBtOPwmSwQh5FqpvNHj6NHrWROniBlDHBgQ0qMErOdAALDLJXDhJ2DYhFXgzfuVwrY6qgQQyHCwkK5Xz5lPcb9kv3czXYgb02vtBzj%2BM4tBu40etlcildLJZPAvpIoGpdF%2F5K0NFKTHpB3vYN4QsfEmbBtFaeX4cTQtwjtUSgbXRDLKVTu%2BR%2FVGPqhOAHu4ni2WNJkXqogZkPmc6qVEP7TRmh7EAibUj%2BOGWLSDfY%2F1DvRieK0hR7HuFlc%2B4rcPEp0RWWNNN84K0eoJrlmlKlMGG%2Bn2FKkLyLNNxfbXwAehpNkLYjN0vaweV4wWjh8PUXNMPuhoL0GOqUBJEkiBAXjI7Bi5eKtLV%2BqWrCrjAyGSAOEhG7llXW0xlQYh%2FE21LsN225%2FJVVFn6Qd8xwjWs1F8VOpLT6DD3ptAv9Uria5aVvAt%2FAmB%2FQk3SzgySRvI%2FZP4AEftZjqhmPRVdvICePuuL8brFWg2gLS2jM%2FCYeHD7aq3XX7SZFasVdpsTSmcV9Knf1pcBdW%2Bgs0k3zYcf2%2F5Dp4lADEZ2haK43hs2dd&X-Amz-Signature=eb820cdcf6cdbf11337261a7ca7f910b4b9fe199e94ac9b0c2d802195871083e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YS2KAEK%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5Dv%2BsupuiI5%2FPwyxsIGOltYiCxrXl3zqQHUmtFrOq9AiEAiT4UyfTTit%2BKeQh4366bUMkQLkOFE%2BWCuc6u%2By91iZUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJG65wdavcdaS%2BAJyrcA9o9EQi5IdvWe1pWW0DscksHCbMfbvbWZHds5jN3rFuzownkhJ2CdyWY57PyKltNAxc1HfLugGTk0QZX7YSwzeUZr5qp9Ko3KV9q1WVJqRHHpjtkW1Hb5a5H%2FGYb6J8N7ydpR6xlmN95w5oCUUtO8Cdr0eM1YHZ0Syk4d1t0hwkLlfjOsS7KF4HFV0qn95q7JdcNQVhPjD39bW6PfaoVfNeWazwgZHIoMm7z3vlOn1NDtlwQncC%2B1rOg1Fpql9LtVYunWsjpZvtXzAC8E8FOwwbiBInsoE3JuXF3U6u3%2B0vodTfckjsJrBvT1xEBtOPwmSwQh5FqpvNHj6NHrWROniBlDHBgQ0qMErOdAALDLJXDhJ2DYhFXgzfuVwrY6qgQQyHCwkK5Xz5lPcb9kv3czXYgb02vtBzj%2BM4tBu40etlcildLJZPAvpIoGpdF%2F5K0NFKTHpB3vYN4QsfEmbBtFaeX4cTQtwjtUSgbXRDLKVTu%2BR%2FVGPqhOAHu4ni2WNJkXqogZkPmc6qVEP7TRmh7EAibUj%2BOGWLSDfY%2F1DvRieK0hR7HuFlc%2B4rcPEp0RWWNNN84K0eoJrlmlKlMGG%2Bn2FKkLyLNNxfbXwAehpNkLYjN0vaweV4wWjh8PUXNMPuhoL0GOqUBJEkiBAXjI7Bi5eKtLV%2BqWrCrjAyGSAOEhG7llXW0xlQYh%2FE21LsN225%2FJVVFn6Qd8xwjWs1F8VOpLT6DD3ptAv9Uria5aVvAt%2FAmB%2FQk3SzgySRvI%2FZP4AEftZjqhmPRVdvICePuuL8brFWg2gLS2jM%2FCYeHD7aq3XX7SZFasVdpsTSmcV9Knf1pcBdW%2Bgs0k3zYcf2%2F5Dp4lADEZ2haK43hs2dd&X-Amz-Signature=1340ddaa41365c8014033ad3d3ea41bd1fca54d751212a1d8399bc6ee2ae6f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
