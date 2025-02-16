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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4SWIMI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHJZX6EGeCZSk9k4GFqdqZ3lurzO%2BifL35eqt6sh9UYkAiEAkwLQyCZZ2F%2FDES8xrW%2B4ngNcSYZE%2BbWV7FIKWJzoPb4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC6l3fYLh3dr5tAtdircA%2FN7BXbawl0XppU2v8A%2Fall28oRgcN8PIOSRJrF29VMmcBsZyN%2BM3Y7dTWAA5YCtF8B%2FRxE9EivZ4OYIQ6hiY6g%2BMxxyBPs21XHuwRGKmz1HA4DnxAopnEf%2B3F0czVc%2Fyg4gEgPQm9Un%2FnsxWwaZnq35bfUn7xVFD9sVi76l%2Fd1sH7l7yu3L6zkYL8%2FJuybcgM0%2BXqS69Kv1M7InwFt%2Bz7jLJnbquHwUrZeWq4mXY7khSK0Z4Oc7cAl62ElTvre2PNsPaDMGJXCUfB3z%2BFsv1tWrdabgDhltOglEWIKlCb8mH58f7UdgzEnF8zh1Y%2FHTXo3yBwXauDyVCLieDVWKMLSJi%2FNMn8Y49UCWIUwXs4cZ76PH6VIOZGGmRzkdXo8pfLH1j%2BTI7V6NjPMDCq6xkiwLRhzZWTbjat70fmD2mpVIDkQd0sbWCDh2iBO5ACZb%2Fk%2Ffi68ET0ky1I6VpgJiE7hwbPZVKgbAZ7ULWDeIIFy5Ga%2FSg%2FXeRBPyCy7QgCNW1ZILx7WJJgUAUsetdpocb9meEqXcb2k0QPoKaQseLqDSCeOwUsUWloRZb4LRAyo4KEvNTvnZ3rlfINS2rEsRSEDXKKIMcwqaCZCHpPlgyV7eUjiWE0m2OmG6vPn4MI3%2Bxb0GOqUBQTBuSc7c23N85s%2Bn%2BbyzAlvQanRwNAhAQaQvq0C5PqiA9vfynY1PrkSH7P010bzMUVOwy9QGu8MEEkrhQUTEKsSt8ckeKfqMRw8gYnMaeUZD7IHpjB5BJV1L4U1y3AWO1j4XQ3T0lFeKLLo%2FCj9MrPVWLYhvhxfcD5jQ9SZkLhJQItMvYvus5DQLIhHDz%2B6VdudCWvQEPrfJjOkIcH%2FxcngmcERb&X-Amz-Signature=7e5131917a8cfbc9d2626b12198c1b6d34c0836a03c445ff258be617a2c4b9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4SWIMI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHJZX6EGeCZSk9k4GFqdqZ3lurzO%2BifL35eqt6sh9UYkAiEAkwLQyCZZ2F%2FDES8xrW%2B4ngNcSYZE%2BbWV7FIKWJzoPb4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC6l3fYLh3dr5tAtdircA%2FN7BXbawl0XppU2v8A%2Fall28oRgcN8PIOSRJrF29VMmcBsZyN%2BM3Y7dTWAA5YCtF8B%2FRxE9EivZ4OYIQ6hiY6g%2BMxxyBPs21XHuwRGKmz1HA4DnxAopnEf%2B3F0czVc%2Fyg4gEgPQm9Un%2FnsxWwaZnq35bfUn7xVFD9sVi76l%2Fd1sH7l7yu3L6zkYL8%2FJuybcgM0%2BXqS69Kv1M7InwFt%2Bz7jLJnbquHwUrZeWq4mXY7khSK0Z4Oc7cAl62ElTvre2PNsPaDMGJXCUfB3z%2BFsv1tWrdabgDhltOglEWIKlCb8mH58f7UdgzEnF8zh1Y%2FHTXo3yBwXauDyVCLieDVWKMLSJi%2FNMn8Y49UCWIUwXs4cZ76PH6VIOZGGmRzkdXo8pfLH1j%2BTI7V6NjPMDCq6xkiwLRhzZWTbjat70fmD2mpVIDkQd0sbWCDh2iBO5ACZb%2Fk%2Ffi68ET0ky1I6VpgJiE7hwbPZVKgbAZ7ULWDeIIFy5Ga%2FSg%2FXeRBPyCy7QgCNW1ZILx7WJJgUAUsetdpocb9meEqXcb2k0QPoKaQseLqDSCeOwUsUWloRZb4LRAyo4KEvNTvnZ3rlfINS2rEsRSEDXKKIMcwqaCZCHpPlgyV7eUjiWE0m2OmG6vPn4MI3%2Bxb0GOqUBQTBuSc7c23N85s%2Bn%2BbyzAlvQanRwNAhAQaQvq0C5PqiA9vfynY1PrkSH7P010bzMUVOwy9QGu8MEEkrhQUTEKsSt8ckeKfqMRw8gYnMaeUZD7IHpjB5BJV1L4U1y3AWO1j4XQ3T0lFeKLLo%2FCj9MrPVWLYhvhxfcD5jQ9SZkLhJQItMvYvus5DQLIhHDz%2B6VdudCWvQEPrfJjOkIcH%2FxcngmcERb&X-Amz-Signature=9a3a37994bda6361105c58617cf106c03b83f8e1fb3158ec6d8befc5634a4fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4SWIMI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHJZX6EGeCZSk9k4GFqdqZ3lurzO%2BifL35eqt6sh9UYkAiEAkwLQyCZZ2F%2FDES8xrW%2B4ngNcSYZE%2BbWV7FIKWJzoPb4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC6l3fYLh3dr5tAtdircA%2FN7BXbawl0XppU2v8A%2Fall28oRgcN8PIOSRJrF29VMmcBsZyN%2BM3Y7dTWAA5YCtF8B%2FRxE9EivZ4OYIQ6hiY6g%2BMxxyBPs21XHuwRGKmz1HA4DnxAopnEf%2B3F0czVc%2Fyg4gEgPQm9Un%2FnsxWwaZnq35bfUn7xVFD9sVi76l%2Fd1sH7l7yu3L6zkYL8%2FJuybcgM0%2BXqS69Kv1M7InwFt%2Bz7jLJnbquHwUrZeWq4mXY7khSK0Z4Oc7cAl62ElTvre2PNsPaDMGJXCUfB3z%2BFsv1tWrdabgDhltOglEWIKlCb8mH58f7UdgzEnF8zh1Y%2FHTXo3yBwXauDyVCLieDVWKMLSJi%2FNMn8Y49UCWIUwXs4cZ76PH6VIOZGGmRzkdXo8pfLH1j%2BTI7V6NjPMDCq6xkiwLRhzZWTbjat70fmD2mpVIDkQd0sbWCDh2iBO5ACZb%2Fk%2Ffi68ET0ky1I6VpgJiE7hwbPZVKgbAZ7ULWDeIIFy5Ga%2FSg%2FXeRBPyCy7QgCNW1ZILx7WJJgUAUsetdpocb9meEqXcb2k0QPoKaQseLqDSCeOwUsUWloRZb4LRAyo4KEvNTvnZ3rlfINS2rEsRSEDXKKIMcwqaCZCHpPlgyV7eUjiWE0m2OmG6vPn4MI3%2Bxb0GOqUBQTBuSc7c23N85s%2Bn%2BbyzAlvQanRwNAhAQaQvq0C5PqiA9vfynY1PrkSH7P010bzMUVOwy9QGu8MEEkrhQUTEKsSt8ckeKfqMRw8gYnMaeUZD7IHpjB5BJV1L4U1y3AWO1j4XQ3T0lFeKLLo%2FCj9MrPVWLYhvhxfcD5jQ9SZkLhJQItMvYvus5DQLIhHDz%2B6VdudCWvQEPrfJjOkIcH%2FxcngmcERb&X-Amz-Signature=f67f0774b031030bb398e05f9638426f6ab6536707ba23a56906e0816696e33b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4SWIMI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHJZX6EGeCZSk9k4GFqdqZ3lurzO%2BifL35eqt6sh9UYkAiEAkwLQyCZZ2F%2FDES8xrW%2B4ngNcSYZE%2BbWV7FIKWJzoPb4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC6l3fYLh3dr5tAtdircA%2FN7BXbawl0XppU2v8A%2Fall28oRgcN8PIOSRJrF29VMmcBsZyN%2BM3Y7dTWAA5YCtF8B%2FRxE9EivZ4OYIQ6hiY6g%2BMxxyBPs21XHuwRGKmz1HA4DnxAopnEf%2B3F0czVc%2Fyg4gEgPQm9Un%2FnsxWwaZnq35bfUn7xVFD9sVi76l%2Fd1sH7l7yu3L6zkYL8%2FJuybcgM0%2BXqS69Kv1M7InwFt%2Bz7jLJnbquHwUrZeWq4mXY7khSK0Z4Oc7cAl62ElTvre2PNsPaDMGJXCUfB3z%2BFsv1tWrdabgDhltOglEWIKlCb8mH58f7UdgzEnF8zh1Y%2FHTXo3yBwXauDyVCLieDVWKMLSJi%2FNMn8Y49UCWIUwXs4cZ76PH6VIOZGGmRzkdXo8pfLH1j%2BTI7V6NjPMDCq6xkiwLRhzZWTbjat70fmD2mpVIDkQd0sbWCDh2iBO5ACZb%2Fk%2Ffi68ET0ky1I6VpgJiE7hwbPZVKgbAZ7ULWDeIIFy5Ga%2FSg%2FXeRBPyCy7QgCNW1ZILx7WJJgUAUsetdpocb9meEqXcb2k0QPoKaQseLqDSCeOwUsUWloRZb4LRAyo4KEvNTvnZ3rlfINS2rEsRSEDXKKIMcwqaCZCHpPlgyV7eUjiWE0m2OmG6vPn4MI3%2Bxb0GOqUBQTBuSc7c23N85s%2Bn%2BbyzAlvQanRwNAhAQaQvq0C5PqiA9vfynY1PrkSH7P010bzMUVOwy9QGu8MEEkrhQUTEKsSt8ckeKfqMRw8gYnMaeUZD7IHpjB5BJV1L4U1y3AWO1j4XQ3T0lFeKLLo%2FCj9MrPVWLYhvhxfcD5jQ9SZkLhJQItMvYvus5DQLIhHDz%2B6VdudCWvQEPrfJjOkIcH%2FxcngmcERb&X-Amz-Signature=fb37cdad65af0ad411723e85fa3a00d1b657108786b3548c53f900d4755d0219&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4SWIMI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHJZX6EGeCZSk9k4GFqdqZ3lurzO%2BifL35eqt6sh9UYkAiEAkwLQyCZZ2F%2FDES8xrW%2B4ngNcSYZE%2BbWV7FIKWJzoPb4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC6l3fYLh3dr5tAtdircA%2FN7BXbawl0XppU2v8A%2Fall28oRgcN8PIOSRJrF29VMmcBsZyN%2BM3Y7dTWAA5YCtF8B%2FRxE9EivZ4OYIQ6hiY6g%2BMxxyBPs21XHuwRGKmz1HA4DnxAopnEf%2B3F0czVc%2Fyg4gEgPQm9Un%2FnsxWwaZnq35bfUn7xVFD9sVi76l%2Fd1sH7l7yu3L6zkYL8%2FJuybcgM0%2BXqS69Kv1M7InwFt%2Bz7jLJnbquHwUrZeWq4mXY7khSK0Z4Oc7cAl62ElTvre2PNsPaDMGJXCUfB3z%2BFsv1tWrdabgDhltOglEWIKlCb8mH58f7UdgzEnF8zh1Y%2FHTXo3yBwXauDyVCLieDVWKMLSJi%2FNMn8Y49UCWIUwXs4cZ76PH6VIOZGGmRzkdXo8pfLH1j%2BTI7V6NjPMDCq6xkiwLRhzZWTbjat70fmD2mpVIDkQd0sbWCDh2iBO5ACZb%2Fk%2Ffi68ET0ky1I6VpgJiE7hwbPZVKgbAZ7ULWDeIIFy5Ga%2FSg%2FXeRBPyCy7QgCNW1ZILx7WJJgUAUsetdpocb9meEqXcb2k0QPoKaQseLqDSCeOwUsUWloRZb4LRAyo4KEvNTvnZ3rlfINS2rEsRSEDXKKIMcwqaCZCHpPlgyV7eUjiWE0m2OmG6vPn4MI3%2Bxb0GOqUBQTBuSc7c23N85s%2Bn%2BbyzAlvQanRwNAhAQaQvq0C5PqiA9vfynY1PrkSH7P010bzMUVOwy9QGu8MEEkrhQUTEKsSt8ckeKfqMRw8gYnMaeUZD7IHpjB5BJV1L4U1y3AWO1j4XQ3T0lFeKLLo%2FCj9MrPVWLYhvhxfcD5jQ9SZkLhJQItMvYvus5DQLIhHDz%2B6VdudCWvQEPrfJjOkIcH%2FxcngmcERb&X-Amz-Signature=bb2499bf319ff83862d1a724b254279d0bb34d4143d9a05c9d1ad172e9a857ca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4SWIMI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHJZX6EGeCZSk9k4GFqdqZ3lurzO%2BifL35eqt6sh9UYkAiEAkwLQyCZZ2F%2FDES8xrW%2B4ngNcSYZE%2BbWV7FIKWJzoPb4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC6l3fYLh3dr5tAtdircA%2FN7BXbawl0XppU2v8A%2Fall28oRgcN8PIOSRJrF29VMmcBsZyN%2BM3Y7dTWAA5YCtF8B%2FRxE9EivZ4OYIQ6hiY6g%2BMxxyBPs21XHuwRGKmz1HA4DnxAopnEf%2B3F0czVc%2Fyg4gEgPQm9Un%2FnsxWwaZnq35bfUn7xVFD9sVi76l%2Fd1sH7l7yu3L6zkYL8%2FJuybcgM0%2BXqS69Kv1M7InwFt%2Bz7jLJnbquHwUrZeWq4mXY7khSK0Z4Oc7cAl62ElTvre2PNsPaDMGJXCUfB3z%2BFsv1tWrdabgDhltOglEWIKlCb8mH58f7UdgzEnF8zh1Y%2FHTXo3yBwXauDyVCLieDVWKMLSJi%2FNMn8Y49UCWIUwXs4cZ76PH6VIOZGGmRzkdXo8pfLH1j%2BTI7V6NjPMDCq6xkiwLRhzZWTbjat70fmD2mpVIDkQd0sbWCDh2iBO5ACZb%2Fk%2Ffi68ET0ky1I6VpgJiE7hwbPZVKgbAZ7ULWDeIIFy5Ga%2FSg%2FXeRBPyCy7QgCNW1ZILx7WJJgUAUsetdpocb9meEqXcb2k0QPoKaQseLqDSCeOwUsUWloRZb4LRAyo4KEvNTvnZ3rlfINS2rEsRSEDXKKIMcwqaCZCHpPlgyV7eUjiWE0m2OmG6vPn4MI3%2Bxb0GOqUBQTBuSc7c23N85s%2Bn%2BbyzAlvQanRwNAhAQaQvq0C5PqiA9vfynY1PrkSH7P010bzMUVOwy9QGu8MEEkrhQUTEKsSt8ckeKfqMRw8gYnMaeUZD7IHpjB5BJV1L4U1y3AWO1j4XQ3T0lFeKLLo%2FCj9MrPVWLYhvhxfcD5jQ9SZkLhJQItMvYvus5DQLIhHDz%2B6VdudCWvQEPrfJjOkIcH%2FxcngmcERb&X-Amz-Signature=9c407980243633030507f7895e2ca86e28d066ecc7f977fdcc7ee3c3a22e88c3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4SWIMI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHJZX6EGeCZSk9k4GFqdqZ3lurzO%2BifL35eqt6sh9UYkAiEAkwLQyCZZ2F%2FDES8xrW%2B4ngNcSYZE%2BbWV7FIKWJzoPb4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDC6l3fYLh3dr5tAtdircA%2FN7BXbawl0XppU2v8A%2Fall28oRgcN8PIOSRJrF29VMmcBsZyN%2BM3Y7dTWAA5YCtF8B%2FRxE9EivZ4OYIQ6hiY6g%2BMxxyBPs21XHuwRGKmz1HA4DnxAopnEf%2B3F0czVc%2Fyg4gEgPQm9Un%2FnsxWwaZnq35bfUn7xVFD9sVi76l%2Fd1sH7l7yu3L6zkYL8%2FJuybcgM0%2BXqS69Kv1M7InwFt%2Bz7jLJnbquHwUrZeWq4mXY7khSK0Z4Oc7cAl62ElTvre2PNsPaDMGJXCUfB3z%2BFsv1tWrdabgDhltOglEWIKlCb8mH58f7UdgzEnF8zh1Y%2FHTXo3yBwXauDyVCLieDVWKMLSJi%2FNMn8Y49UCWIUwXs4cZ76PH6VIOZGGmRzkdXo8pfLH1j%2BTI7V6NjPMDCq6xkiwLRhzZWTbjat70fmD2mpVIDkQd0sbWCDh2iBO5ACZb%2Fk%2Ffi68ET0ky1I6VpgJiE7hwbPZVKgbAZ7ULWDeIIFy5Ga%2FSg%2FXeRBPyCy7QgCNW1ZILx7WJJgUAUsetdpocb9meEqXcb2k0QPoKaQseLqDSCeOwUsUWloRZb4LRAyo4KEvNTvnZ3rlfINS2rEsRSEDXKKIMcwqaCZCHpPlgyV7eUjiWE0m2OmG6vPn4MI3%2Bxb0GOqUBQTBuSc7c23N85s%2Bn%2BbyzAlvQanRwNAhAQaQvq0C5PqiA9vfynY1PrkSH7P010bzMUVOwy9QGu8MEEkrhQUTEKsSt8ckeKfqMRw8gYnMaeUZD7IHpjB5BJV1L4U1y3AWO1j4XQ3T0lFeKLLo%2FCj9MrPVWLYhvhxfcD5jQ9SZkLhJQItMvYvus5DQLIhHDz%2B6VdudCWvQEPrfJjOkIcH%2FxcngmcERb&X-Amz-Signature=c7a6995da58d7b32bf63ce155a634a3f901744d0d14a4f57d88e81e4ad3bae8f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
