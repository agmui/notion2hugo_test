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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGYTU3S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr6864VTc8BBBNj8Vr4n2IlRkpRbp2dQpIaY2WJBN3SAIgQtN1W4ofGzAhB2FfUQkKr4uQaJo%2Bq7RhQRUKVqJGUwMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEoL5FKorXvzXdaUZCrcAwf6DmbJsnFaRp9pcv2nkc0UIKExRAFH7hpOvYQZ6vXC1xvmAwbYLmWqHiVQfHD8DfP%2F%2FAvgaFoc8f4nhirPYTxA0TI2YayT01k8Gsmn%2Flx%2Fsb3tY%2Bj4jNxFLYhNCSmaFymLWgtQbvxmlgkzIDdao%2FN7bB9rSbaUhEpXL0odY4odVXCuNanX0j4PumuFw8C%2FgZ9C5NmbeHqZ%2FJlBRFkv%2BOgK9KGcLY7I2gjRqMP50ytZuhf0HxymdG5kz3FoN9JNWU24YB3ACC%2FtnGlsKrm6n3EaoyMc9KnZNxjcAu23emwS9QcZk%2FjvQOJ9%2BS0mB1dmUjq1OAyy7QN2TkMgqbGUn7B0T5l2Uwv4BI3Ij4XaQfbMrtkKqP8r4tDgw3eLpbeB2ru7z009%2Bld0wSQTamKIRlHd6gNpWsIN2WlYXg9N2b4FC%2FhVY0ivlAu%2BHDLdTprfPF11eRREapOLoMAGypUxihXKdIbJ1w90rZSyCaOKpadf3t%2FhjoEwb%2BjSvi66L8FvEQ%2Bxqnjv%2FbODGsDqb%2BxdjDRgECL6L6mSW6uWEimj7d0OVlVGMlnLDR3c1CdN5TstXglZ8L2X%2BMpZoN46PQhSg9%2BhZhNAuTIw%2BBO3fk0BOFFMLucFxw4ZOuikNm8NMLX%2FyL8GOqUBgL%2BXm2zai6QX9q3PrOuQp3FAfw7lSAWNOcoeN1v6TW2%2Fx9W1jXxDT%2ByNs5ONNFIh1i%2FsXI4rZ4Scw%2B5lPW9HkRRtwGvvF%2BfLQ3UhIV6EKPhxTA6kX4coKHT3QYJtrXLsOKos5R4968csC5uvmryodGsvQxjzTtPw6IcK1ScguRcZClPttXE55OuNUHUF7p2s0knawI7sF9gwl5MLf1wSa3IHJwvm&X-Amz-Signature=7a6f4a768b4ad5765ca7bdf82a8bb3ce2391ed82976bceba498187e1e0d9a881&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGYTU3S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr6864VTc8BBBNj8Vr4n2IlRkpRbp2dQpIaY2WJBN3SAIgQtN1W4ofGzAhB2FfUQkKr4uQaJo%2Bq7RhQRUKVqJGUwMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEoL5FKorXvzXdaUZCrcAwf6DmbJsnFaRp9pcv2nkc0UIKExRAFH7hpOvYQZ6vXC1xvmAwbYLmWqHiVQfHD8DfP%2F%2FAvgaFoc8f4nhirPYTxA0TI2YayT01k8Gsmn%2Flx%2Fsb3tY%2Bj4jNxFLYhNCSmaFymLWgtQbvxmlgkzIDdao%2FN7bB9rSbaUhEpXL0odY4odVXCuNanX0j4PumuFw8C%2FgZ9C5NmbeHqZ%2FJlBRFkv%2BOgK9KGcLY7I2gjRqMP50ytZuhf0HxymdG5kz3FoN9JNWU24YB3ACC%2FtnGlsKrm6n3EaoyMc9KnZNxjcAu23emwS9QcZk%2FjvQOJ9%2BS0mB1dmUjq1OAyy7QN2TkMgqbGUn7B0T5l2Uwv4BI3Ij4XaQfbMrtkKqP8r4tDgw3eLpbeB2ru7z009%2Bld0wSQTamKIRlHd6gNpWsIN2WlYXg9N2b4FC%2FhVY0ivlAu%2BHDLdTprfPF11eRREapOLoMAGypUxihXKdIbJ1w90rZSyCaOKpadf3t%2FhjoEwb%2BjSvi66L8FvEQ%2Bxqnjv%2FbODGsDqb%2BxdjDRgECL6L6mSW6uWEimj7d0OVlVGMlnLDR3c1CdN5TstXglZ8L2X%2BMpZoN46PQhSg9%2BhZhNAuTIw%2BBO3fk0BOFFMLucFxw4ZOuikNm8NMLX%2FyL8GOqUBgL%2BXm2zai6QX9q3PrOuQp3FAfw7lSAWNOcoeN1v6TW2%2Fx9W1jXxDT%2ByNs5ONNFIh1i%2FsXI4rZ4Scw%2B5lPW9HkRRtwGvvF%2BfLQ3UhIV6EKPhxTA6kX4coKHT3QYJtrXLsOKos5R4968csC5uvmryodGsvQxjzTtPw6IcK1ScguRcZClPttXE55OuNUHUF7p2s0knawI7sF9gwl5MLf1wSa3IHJwvm&X-Amz-Signature=1f4df474777b646583d6d17e4bfea4746025dfa976870ee65af2ad2ff9e6da38&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGYTU3S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr6864VTc8BBBNj8Vr4n2IlRkpRbp2dQpIaY2WJBN3SAIgQtN1W4ofGzAhB2FfUQkKr4uQaJo%2Bq7RhQRUKVqJGUwMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEoL5FKorXvzXdaUZCrcAwf6DmbJsnFaRp9pcv2nkc0UIKExRAFH7hpOvYQZ6vXC1xvmAwbYLmWqHiVQfHD8DfP%2F%2FAvgaFoc8f4nhirPYTxA0TI2YayT01k8Gsmn%2Flx%2Fsb3tY%2Bj4jNxFLYhNCSmaFymLWgtQbvxmlgkzIDdao%2FN7bB9rSbaUhEpXL0odY4odVXCuNanX0j4PumuFw8C%2FgZ9C5NmbeHqZ%2FJlBRFkv%2BOgK9KGcLY7I2gjRqMP50ytZuhf0HxymdG5kz3FoN9JNWU24YB3ACC%2FtnGlsKrm6n3EaoyMc9KnZNxjcAu23emwS9QcZk%2FjvQOJ9%2BS0mB1dmUjq1OAyy7QN2TkMgqbGUn7B0T5l2Uwv4BI3Ij4XaQfbMrtkKqP8r4tDgw3eLpbeB2ru7z009%2Bld0wSQTamKIRlHd6gNpWsIN2WlYXg9N2b4FC%2FhVY0ivlAu%2BHDLdTprfPF11eRREapOLoMAGypUxihXKdIbJ1w90rZSyCaOKpadf3t%2FhjoEwb%2BjSvi66L8FvEQ%2Bxqnjv%2FbODGsDqb%2BxdjDRgECL6L6mSW6uWEimj7d0OVlVGMlnLDR3c1CdN5TstXglZ8L2X%2BMpZoN46PQhSg9%2BhZhNAuTIw%2BBO3fk0BOFFMLucFxw4ZOuikNm8NMLX%2FyL8GOqUBgL%2BXm2zai6QX9q3PrOuQp3FAfw7lSAWNOcoeN1v6TW2%2Fx9W1jXxDT%2ByNs5ONNFIh1i%2FsXI4rZ4Scw%2B5lPW9HkRRtwGvvF%2BfLQ3UhIV6EKPhxTA6kX4coKHT3QYJtrXLsOKos5R4968csC5uvmryodGsvQxjzTtPw6IcK1ScguRcZClPttXE55OuNUHUF7p2s0knawI7sF9gwl5MLf1wSa3IHJwvm&X-Amz-Signature=8ffe77e7c7a8c5fe7ffe0a4ab1ea9ccc446fec8434ba71450114bf8e4dde7b38&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGYTU3S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr6864VTc8BBBNj8Vr4n2IlRkpRbp2dQpIaY2WJBN3SAIgQtN1W4ofGzAhB2FfUQkKr4uQaJo%2Bq7RhQRUKVqJGUwMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEoL5FKorXvzXdaUZCrcAwf6DmbJsnFaRp9pcv2nkc0UIKExRAFH7hpOvYQZ6vXC1xvmAwbYLmWqHiVQfHD8DfP%2F%2FAvgaFoc8f4nhirPYTxA0TI2YayT01k8Gsmn%2Flx%2Fsb3tY%2Bj4jNxFLYhNCSmaFymLWgtQbvxmlgkzIDdao%2FN7bB9rSbaUhEpXL0odY4odVXCuNanX0j4PumuFw8C%2FgZ9C5NmbeHqZ%2FJlBRFkv%2BOgK9KGcLY7I2gjRqMP50ytZuhf0HxymdG5kz3FoN9JNWU24YB3ACC%2FtnGlsKrm6n3EaoyMc9KnZNxjcAu23emwS9QcZk%2FjvQOJ9%2BS0mB1dmUjq1OAyy7QN2TkMgqbGUn7B0T5l2Uwv4BI3Ij4XaQfbMrtkKqP8r4tDgw3eLpbeB2ru7z009%2Bld0wSQTamKIRlHd6gNpWsIN2WlYXg9N2b4FC%2FhVY0ivlAu%2BHDLdTprfPF11eRREapOLoMAGypUxihXKdIbJ1w90rZSyCaOKpadf3t%2FhjoEwb%2BjSvi66L8FvEQ%2Bxqnjv%2FbODGsDqb%2BxdjDRgECL6L6mSW6uWEimj7d0OVlVGMlnLDR3c1CdN5TstXglZ8L2X%2BMpZoN46PQhSg9%2BhZhNAuTIw%2BBO3fk0BOFFMLucFxw4ZOuikNm8NMLX%2FyL8GOqUBgL%2BXm2zai6QX9q3PrOuQp3FAfw7lSAWNOcoeN1v6TW2%2Fx9W1jXxDT%2ByNs5ONNFIh1i%2FsXI4rZ4Scw%2B5lPW9HkRRtwGvvF%2BfLQ3UhIV6EKPhxTA6kX4coKHT3QYJtrXLsOKos5R4968csC5uvmryodGsvQxjzTtPw6IcK1ScguRcZClPttXE55OuNUHUF7p2s0knawI7sF9gwl5MLf1wSa3IHJwvm&X-Amz-Signature=b4e7dabcdfd2888905ad597c9251207dd5c58bb0bb0f05b5ff4c59f348246ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGYTU3S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr6864VTc8BBBNj8Vr4n2IlRkpRbp2dQpIaY2WJBN3SAIgQtN1W4ofGzAhB2FfUQkKr4uQaJo%2Bq7RhQRUKVqJGUwMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEoL5FKorXvzXdaUZCrcAwf6DmbJsnFaRp9pcv2nkc0UIKExRAFH7hpOvYQZ6vXC1xvmAwbYLmWqHiVQfHD8DfP%2F%2FAvgaFoc8f4nhirPYTxA0TI2YayT01k8Gsmn%2Flx%2Fsb3tY%2Bj4jNxFLYhNCSmaFymLWgtQbvxmlgkzIDdao%2FN7bB9rSbaUhEpXL0odY4odVXCuNanX0j4PumuFw8C%2FgZ9C5NmbeHqZ%2FJlBRFkv%2BOgK9KGcLY7I2gjRqMP50ytZuhf0HxymdG5kz3FoN9JNWU24YB3ACC%2FtnGlsKrm6n3EaoyMc9KnZNxjcAu23emwS9QcZk%2FjvQOJ9%2BS0mB1dmUjq1OAyy7QN2TkMgqbGUn7B0T5l2Uwv4BI3Ij4XaQfbMrtkKqP8r4tDgw3eLpbeB2ru7z009%2Bld0wSQTamKIRlHd6gNpWsIN2WlYXg9N2b4FC%2FhVY0ivlAu%2BHDLdTprfPF11eRREapOLoMAGypUxihXKdIbJ1w90rZSyCaOKpadf3t%2FhjoEwb%2BjSvi66L8FvEQ%2Bxqnjv%2FbODGsDqb%2BxdjDRgECL6L6mSW6uWEimj7d0OVlVGMlnLDR3c1CdN5TstXglZ8L2X%2BMpZoN46PQhSg9%2BhZhNAuTIw%2BBO3fk0BOFFMLucFxw4ZOuikNm8NMLX%2FyL8GOqUBgL%2BXm2zai6QX9q3PrOuQp3FAfw7lSAWNOcoeN1v6TW2%2Fx9W1jXxDT%2ByNs5ONNFIh1i%2FsXI4rZ4Scw%2B5lPW9HkRRtwGvvF%2BfLQ3UhIV6EKPhxTA6kX4coKHT3QYJtrXLsOKos5R4968csC5uvmryodGsvQxjzTtPw6IcK1ScguRcZClPttXE55OuNUHUF7p2s0knawI7sF9gwl5MLf1wSa3IHJwvm&X-Amz-Signature=b9abd572974ff7653fdc85ee2b6bf9832b4fe2d4bf755e91bac20c5cc0437672&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGYTU3S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr6864VTc8BBBNj8Vr4n2IlRkpRbp2dQpIaY2WJBN3SAIgQtN1W4ofGzAhB2FfUQkKr4uQaJo%2Bq7RhQRUKVqJGUwMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEoL5FKorXvzXdaUZCrcAwf6DmbJsnFaRp9pcv2nkc0UIKExRAFH7hpOvYQZ6vXC1xvmAwbYLmWqHiVQfHD8DfP%2F%2FAvgaFoc8f4nhirPYTxA0TI2YayT01k8Gsmn%2Flx%2Fsb3tY%2Bj4jNxFLYhNCSmaFymLWgtQbvxmlgkzIDdao%2FN7bB9rSbaUhEpXL0odY4odVXCuNanX0j4PumuFw8C%2FgZ9C5NmbeHqZ%2FJlBRFkv%2BOgK9KGcLY7I2gjRqMP50ytZuhf0HxymdG5kz3FoN9JNWU24YB3ACC%2FtnGlsKrm6n3EaoyMc9KnZNxjcAu23emwS9QcZk%2FjvQOJ9%2BS0mB1dmUjq1OAyy7QN2TkMgqbGUn7B0T5l2Uwv4BI3Ij4XaQfbMrtkKqP8r4tDgw3eLpbeB2ru7z009%2Bld0wSQTamKIRlHd6gNpWsIN2WlYXg9N2b4FC%2FhVY0ivlAu%2BHDLdTprfPF11eRREapOLoMAGypUxihXKdIbJ1w90rZSyCaOKpadf3t%2FhjoEwb%2BjSvi66L8FvEQ%2Bxqnjv%2FbODGsDqb%2BxdjDRgECL6L6mSW6uWEimj7d0OVlVGMlnLDR3c1CdN5TstXglZ8L2X%2BMpZoN46PQhSg9%2BhZhNAuTIw%2BBO3fk0BOFFMLucFxw4ZOuikNm8NMLX%2FyL8GOqUBgL%2BXm2zai6QX9q3PrOuQp3FAfw7lSAWNOcoeN1v6TW2%2Fx9W1jXxDT%2ByNs5ONNFIh1i%2FsXI4rZ4Scw%2B5lPW9HkRRtwGvvF%2BfLQ3UhIV6EKPhxTA6kX4coKHT3QYJtrXLsOKos5R4968csC5uvmryodGsvQxjzTtPw6IcK1ScguRcZClPttXE55OuNUHUF7p2s0knawI7sF9gwl5MLf1wSa3IHJwvm&X-Amz-Signature=3884ce87870c11777025f1bccf2074b6ae34ab7e5032bb5ca552f968a2f0d0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGYTU3S%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr6864VTc8BBBNj8Vr4n2IlRkpRbp2dQpIaY2WJBN3SAIgQtN1W4ofGzAhB2FfUQkKr4uQaJo%2Bq7RhQRUKVqJGUwMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEoL5FKorXvzXdaUZCrcAwf6DmbJsnFaRp9pcv2nkc0UIKExRAFH7hpOvYQZ6vXC1xvmAwbYLmWqHiVQfHD8DfP%2F%2FAvgaFoc8f4nhirPYTxA0TI2YayT01k8Gsmn%2Flx%2Fsb3tY%2Bj4jNxFLYhNCSmaFymLWgtQbvxmlgkzIDdao%2FN7bB9rSbaUhEpXL0odY4odVXCuNanX0j4PumuFw8C%2FgZ9C5NmbeHqZ%2FJlBRFkv%2BOgK9KGcLY7I2gjRqMP50ytZuhf0HxymdG5kz3FoN9JNWU24YB3ACC%2FtnGlsKrm6n3EaoyMc9KnZNxjcAu23emwS9QcZk%2FjvQOJ9%2BS0mB1dmUjq1OAyy7QN2TkMgqbGUn7B0T5l2Uwv4BI3Ij4XaQfbMrtkKqP8r4tDgw3eLpbeB2ru7z009%2Bld0wSQTamKIRlHd6gNpWsIN2WlYXg9N2b4FC%2FhVY0ivlAu%2BHDLdTprfPF11eRREapOLoMAGypUxihXKdIbJ1w90rZSyCaOKpadf3t%2FhjoEwb%2BjSvi66L8FvEQ%2Bxqnjv%2FbODGsDqb%2BxdjDRgECL6L6mSW6uWEimj7d0OVlVGMlnLDR3c1CdN5TstXglZ8L2X%2BMpZoN46PQhSg9%2BhZhNAuTIw%2BBO3fk0BOFFMLucFxw4ZOuikNm8NMLX%2FyL8GOqUBgL%2BXm2zai6QX9q3PrOuQp3FAfw7lSAWNOcoeN1v6TW2%2Fx9W1jXxDT%2ByNs5ONNFIh1i%2FsXI4rZ4Scw%2B5lPW9HkRRtwGvvF%2BfLQ3UhIV6EKPhxTA6kX4coKHT3QYJtrXLsOKos5R4968csC5uvmryodGsvQxjzTtPw6IcK1ScguRcZClPttXE55OuNUHUF7p2s0knawI7sF9gwl5MLf1wSa3IHJwvm&X-Amz-Signature=d132dd802114e71e481b692caaaf627d581b2980a2b70994bee475b9e4654590&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
