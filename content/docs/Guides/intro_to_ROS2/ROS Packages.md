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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGYOVPN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL5zQdmlD7rTgPTWbZwr89KntdpmS6f%2B2kf347LaeYPQIhAMMn6EKYACa%2FBxy8ONxjhdMvNupmJI1Od%2BsLuV4Rs9SrKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznqJrlqDLmjSGFH%2FEq3APaxlT8oWwvklWwJW%2BLGjQfsMr%2BnFKDTLgWCujCOakTQHbRXUNYuq2i92axuzcwv4iivsUZ%2BElF8OGBjwLMydwGMJqlMfb1aw73Mrw5u3n3n7KS%2B274CV%2FrwOpvLR7asO3I%2BqBTbh8uyX%2BVYYjXEXwEiul3k8oVuXh5CRuVxs1sV9tEeiCSY%2Bx2xof84zOLpioTZ5GoPsTmKntQqakbR9aw1GqNfXaCz9%2BtngEiUxL8mArXJ3TIPr7vJgqAxE3TSeZBTvXXR4RKuTlxgVVB81Oav8uPJq83um9GH1dIBYh2%2BNS9MsGgR%2FJEHly12i%2BxC8DGdNHhd2po0K3LLoYd5QOLB6ILYmPUnKKcv0qMmBDG80pQuYwvjMkSfriFBCjgYQ0d07BW3BDuwOYfkl%2FiER9TxpK7V%2FnwYRrZx3JOHyYwEZjUGXMZ96x7jC%2F0mqHcQVz6xE0yIdX%2Bt8QJvBaPYNa97mKyVR39YvWuf2O70QIOQsd%2Fe629ZtV91tCpXROdtGMM5p82z01pV1Y8r2hRIBfH7llXwXMaM8ot1dmiH1NKlbUAl94FMXv7TXQ6Pxwo3sY6%2FdlhRvuLjWz%2FVxEj1nVGiN253y%2FCKvCKOMhQIJbR%2B19ZsMq3KITo3ea1nDCCutO9BjqkAQGP4dduzyqroop0CKm9M8rzCqY5UOmBInloTCDStUo1WDP3BTrvtcnCrggcKZ%2FlsJ3DnuPukV3%2FpBLkbxNIHL4u279mIsMizij4345VQ%2FgDFcGJfBMy%2FdUvexlX8dOqZ6ksI4WphdAQbUqKC4AsXTSMxe%2FC7nbdc6WhehHRoABCnQAAkfquCkF5BM3H3iU1AbEKDUiM0bayxIPXunI0f8E8rS6b&X-Amz-Signature=a3144b319ac61580dcd00d7539dbe39b90e91a9a5ba63a935a76ffc87303e440&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGYOVPN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL5zQdmlD7rTgPTWbZwr89KntdpmS6f%2B2kf347LaeYPQIhAMMn6EKYACa%2FBxy8ONxjhdMvNupmJI1Od%2BsLuV4Rs9SrKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznqJrlqDLmjSGFH%2FEq3APaxlT8oWwvklWwJW%2BLGjQfsMr%2BnFKDTLgWCujCOakTQHbRXUNYuq2i92axuzcwv4iivsUZ%2BElF8OGBjwLMydwGMJqlMfb1aw73Mrw5u3n3n7KS%2B274CV%2FrwOpvLR7asO3I%2BqBTbh8uyX%2BVYYjXEXwEiul3k8oVuXh5CRuVxs1sV9tEeiCSY%2Bx2xof84zOLpioTZ5GoPsTmKntQqakbR9aw1GqNfXaCz9%2BtngEiUxL8mArXJ3TIPr7vJgqAxE3TSeZBTvXXR4RKuTlxgVVB81Oav8uPJq83um9GH1dIBYh2%2BNS9MsGgR%2FJEHly12i%2BxC8DGdNHhd2po0K3LLoYd5QOLB6ILYmPUnKKcv0qMmBDG80pQuYwvjMkSfriFBCjgYQ0d07BW3BDuwOYfkl%2FiER9TxpK7V%2FnwYRrZx3JOHyYwEZjUGXMZ96x7jC%2F0mqHcQVz6xE0yIdX%2Bt8QJvBaPYNa97mKyVR39YvWuf2O70QIOQsd%2Fe629ZtV91tCpXROdtGMM5p82z01pV1Y8r2hRIBfH7llXwXMaM8ot1dmiH1NKlbUAl94FMXv7TXQ6Pxwo3sY6%2FdlhRvuLjWz%2FVxEj1nVGiN253y%2FCKvCKOMhQIJbR%2B19ZsMq3KITo3ea1nDCCutO9BjqkAQGP4dduzyqroop0CKm9M8rzCqY5UOmBInloTCDStUo1WDP3BTrvtcnCrggcKZ%2FlsJ3DnuPukV3%2FpBLkbxNIHL4u279mIsMizij4345VQ%2FgDFcGJfBMy%2FdUvexlX8dOqZ6ksI4WphdAQbUqKC4AsXTSMxe%2FC7nbdc6WhehHRoABCnQAAkfquCkF5BM3H3iU1AbEKDUiM0bayxIPXunI0f8E8rS6b&X-Amz-Signature=bf78a12589cd1ee6470718ab9f2aa110ee13b60e90876cf64c6940b0cc529084&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGYOVPN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL5zQdmlD7rTgPTWbZwr89KntdpmS6f%2B2kf347LaeYPQIhAMMn6EKYACa%2FBxy8ONxjhdMvNupmJI1Od%2BsLuV4Rs9SrKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznqJrlqDLmjSGFH%2FEq3APaxlT8oWwvklWwJW%2BLGjQfsMr%2BnFKDTLgWCujCOakTQHbRXUNYuq2i92axuzcwv4iivsUZ%2BElF8OGBjwLMydwGMJqlMfb1aw73Mrw5u3n3n7KS%2B274CV%2FrwOpvLR7asO3I%2BqBTbh8uyX%2BVYYjXEXwEiul3k8oVuXh5CRuVxs1sV9tEeiCSY%2Bx2xof84zOLpioTZ5GoPsTmKntQqakbR9aw1GqNfXaCz9%2BtngEiUxL8mArXJ3TIPr7vJgqAxE3TSeZBTvXXR4RKuTlxgVVB81Oav8uPJq83um9GH1dIBYh2%2BNS9MsGgR%2FJEHly12i%2BxC8DGdNHhd2po0K3LLoYd5QOLB6ILYmPUnKKcv0qMmBDG80pQuYwvjMkSfriFBCjgYQ0d07BW3BDuwOYfkl%2FiER9TxpK7V%2FnwYRrZx3JOHyYwEZjUGXMZ96x7jC%2F0mqHcQVz6xE0yIdX%2Bt8QJvBaPYNa97mKyVR39YvWuf2O70QIOQsd%2Fe629ZtV91tCpXROdtGMM5p82z01pV1Y8r2hRIBfH7llXwXMaM8ot1dmiH1NKlbUAl94FMXv7TXQ6Pxwo3sY6%2FdlhRvuLjWz%2FVxEj1nVGiN253y%2FCKvCKOMhQIJbR%2B19ZsMq3KITo3ea1nDCCutO9BjqkAQGP4dduzyqroop0CKm9M8rzCqY5UOmBInloTCDStUo1WDP3BTrvtcnCrggcKZ%2FlsJ3DnuPukV3%2FpBLkbxNIHL4u279mIsMizij4345VQ%2FgDFcGJfBMy%2FdUvexlX8dOqZ6ksI4WphdAQbUqKC4AsXTSMxe%2FC7nbdc6WhehHRoABCnQAAkfquCkF5BM3H3iU1AbEKDUiM0bayxIPXunI0f8E8rS6b&X-Amz-Signature=46e9f70adc71411ea697591b5061a2f29454b9e6be538694037d25cf27607c17&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGYOVPN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL5zQdmlD7rTgPTWbZwr89KntdpmS6f%2B2kf347LaeYPQIhAMMn6EKYACa%2FBxy8ONxjhdMvNupmJI1Od%2BsLuV4Rs9SrKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznqJrlqDLmjSGFH%2FEq3APaxlT8oWwvklWwJW%2BLGjQfsMr%2BnFKDTLgWCujCOakTQHbRXUNYuq2i92axuzcwv4iivsUZ%2BElF8OGBjwLMydwGMJqlMfb1aw73Mrw5u3n3n7KS%2B274CV%2FrwOpvLR7asO3I%2BqBTbh8uyX%2BVYYjXEXwEiul3k8oVuXh5CRuVxs1sV9tEeiCSY%2Bx2xof84zOLpioTZ5GoPsTmKntQqakbR9aw1GqNfXaCz9%2BtngEiUxL8mArXJ3TIPr7vJgqAxE3TSeZBTvXXR4RKuTlxgVVB81Oav8uPJq83um9GH1dIBYh2%2BNS9MsGgR%2FJEHly12i%2BxC8DGdNHhd2po0K3LLoYd5QOLB6ILYmPUnKKcv0qMmBDG80pQuYwvjMkSfriFBCjgYQ0d07BW3BDuwOYfkl%2FiER9TxpK7V%2FnwYRrZx3JOHyYwEZjUGXMZ96x7jC%2F0mqHcQVz6xE0yIdX%2Bt8QJvBaPYNa97mKyVR39YvWuf2O70QIOQsd%2Fe629ZtV91tCpXROdtGMM5p82z01pV1Y8r2hRIBfH7llXwXMaM8ot1dmiH1NKlbUAl94FMXv7TXQ6Pxwo3sY6%2FdlhRvuLjWz%2FVxEj1nVGiN253y%2FCKvCKOMhQIJbR%2B19ZsMq3KITo3ea1nDCCutO9BjqkAQGP4dduzyqroop0CKm9M8rzCqY5UOmBInloTCDStUo1WDP3BTrvtcnCrggcKZ%2FlsJ3DnuPukV3%2FpBLkbxNIHL4u279mIsMizij4345VQ%2FgDFcGJfBMy%2FdUvexlX8dOqZ6ksI4WphdAQbUqKC4AsXTSMxe%2FC7nbdc6WhehHRoABCnQAAkfquCkF5BM3H3iU1AbEKDUiM0bayxIPXunI0f8E8rS6b&X-Amz-Signature=44ec727f53e5137983302b86d0ba0e48f324db2c6f0f7fdceba82148c21dfde8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGYOVPN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL5zQdmlD7rTgPTWbZwr89KntdpmS6f%2B2kf347LaeYPQIhAMMn6EKYACa%2FBxy8ONxjhdMvNupmJI1Od%2BsLuV4Rs9SrKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznqJrlqDLmjSGFH%2FEq3APaxlT8oWwvklWwJW%2BLGjQfsMr%2BnFKDTLgWCujCOakTQHbRXUNYuq2i92axuzcwv4iivsUZ%2BElF8OGBjwLMydwGMJqlMfb1aw73Mrw5u3n3n7KS%2B274CV%2FrwOpvLR7asO3I%2BqBTbh8uyX%2BVYYjXEXwEiul3k8oVuXh5CRuVxs1sV9tEeiCSY%2Bx2xof84zOLpioTZ5GoPsTmKntQqakbR9aw1GqNfXaCz9%2BtngEiUxL8mArXJ3TIPr7vJgqAxE3TSeZBTvXXR4RKuTlxgVVB81Oav8uPJq83um9GH1dIBYh2%2BNS9MsGgR%2FJEHly12i%2BxC8DGdNHhd2po0K3LLoYd5QOLB6ILYmPUnKKcv0qMmBDG80pQuYwvjMkSfriFBCjgYQ0d07BW3BDuwOYfkl%2FiER9TxpK7V%2FnwYRrZx3JOHyYwEZjUGXMZ96x7jC%2F0mqHcQVz6xE0yIdX%2Bt8QJvBaPYNa97mKyVR39YvWuf2O70QIOQsd%2Fe629ZtV91tCpXROdtGMM5p82z01pV1Y8r2hRIBfH7llXwXMaM8ot1dmiH1NKlbUAl94FMXv7TXQ6Pxwo3sY6%2FdlhRvuLjWz%2FVxEj1nVGiN253y%2FCKvCKOMhQIJbR%2B19ZsMq3KITo3ea1nDCCutO9BjqkAQGP4dduzyqroop0CKm9M8rzCqY5UOmBInloTCDStUo1WDP3BTrvtcnCrggcKZ%2FlsJ3DnuPukV3%2FpBLkbxNIHL4u279mIsMizij4345VQ%2FgDFcGJfBMy%2FdUvexlX8dOqZ6ksI4WphdAQbUqKC4AsXTSMxe%2FC7nbdc6WhehHRoABCnQAAkfquCkF5BM3H3iU1AbEKDUiM0bayxIPXunI0f8E8rS6b&X-Amz-Signature=94e4b4fcb8cb3f5cc57ca141704ec7d0afe50120f05d424efa8192c14e6a10a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGYOVPN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL5zQdmlD7rTgPTWbZwr89KntdpmS6f%2B2kf347LaeYPQIhAMMn6EKYACa%2FBxy8ONxjhdMvNupmJI1Od%2BsLuV4Rs9SrKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznqJrlqDLmjSGFH%2FEq3APaxlT8oWwvklWwJW%2BLGjQfsMr%2BnFKDTLgWCujCOakTQHbRXUNYuq2i92axuzcwv4iivsUZ%2BElF8OGBjwLMydwGMJqlMfb1aw73Mrw5u3n3n7KS%2B274CV%2FrwOpvLR7asO3I%2BqBTbh8uyX%2BVYYjXEXwEiul3k8oVuXh5CRuVxs1sV9tEeiCSY%2Bx2xof84zOLpioTZ5GoPsTmKntQqakbR9aw1GqNfXaCz9%2BtngEiUxL8mArXJ3TIPr7vJgqAxE3TSeZBTvXXR4RKuTlxgVVB81Oav8uPJq83um9GH1dIBYh2%2BNS9MsGgR%2FJEHly12i%2BxC8DGdNHhd2po0K3LLoYd5QOLB6ILYmPUnKKcv0qMmBDG80pQuYwvjMkSfriFBCjgYQ0d07BW3BDuwOYfkl%2FiER9TxpK7V%2FnwYRrZx3JOHyYwEZjUGXMZ96x7jC%2F0mqHcQVz6xE0yIdX%2Bt8QJvBaPYNa97mKyVR39YvWuf2O70QIOQsd%2Fe629ZtV91tCpXROdtGMM5p82z01pV1Y8r2hRIBfH7llXwXMaM8ot1dmiH1NKlbUAl94FMXv7TXQ6Pxwo3sY6%2FdlhRvuLjWz%2FVxEj1nVGiN253y%2FCKvCKOMhQIJbR%2B19ZsMq3KITo3ea1nDCCutO9BjqkAQGP4dduzyqroop0CKm9M8rzCqY5UOmBInloTCDStUo1WDP3BTrvtcnCrggcKZ%2FlsJ3DnuPukV3%2FpBLkbxNIHL4u279mIsMizij4345VQ%2FgDFcGJfBMy%2FdUvexlX8dOqZ6ksI4WphdAQbUqKC4AsXTSMxe%2FC7nbdc6WhehHRoABCnQAAkfquCkF5BM3H3iU1AbEKDUiM0bayxIPXunI0f8E8rS6b&X-Amz-Signature=07bc84a767e83b3eec854774342db3f553862657d0c69ac773a42b11799676f5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGYOVPN%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCL5zQdmlD7rTgPTWbZwr89KntdpmS6f%2B2kf347LaeYPQIhAMMn6EKYACa%2FBxy8ONxjhdMvNupmJI1Od%2BsLuV4Rs9SrKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznqJrlqDLmjSGFH%2FEq3APaxlT8oWwvklWwJW%2BLGjQfsMr%2BnFKDTLgWCujCOakTQHbRXUNYuq2i92axuzcwv4iivsUZ%2BElF8OGBjwLMydwGMJqlMfb1aw73Mrw5u3n3n7KS%2B274CV%2FrwOpvLR7asO3I%2BqBTbh8uyX%2BVYYjXEXwEiul3k8oVuXh5CRuVxs1sV9tEeiCSY%2Bx2xof84zOLpioTZ5GoPsTmKntQqakbR9aw1GqNfXaCz9%2BtngEiUxL8mArXJ3TIPr7vJgqAxE3TSeZBTvXXR4RKuTlxgVVB81Oav8uPJq83um9GH1dIBYh2%2BNS9MsGgR%2FJEHly12i%2BxC8DGdNHhd2po0K3LLoYd5QOLB6ILYmPUnKKcv0qMmBDG80pQuYwvjMkSfriFBCjgYQ0d07BW3BDuwOYfkl%2FiER9TxpK7V%2FnwYRrZx3JOHyYwEZjUGXMZ96x7jC%2F0mqHcQVz6xE0yIdX%2Bt8QJvBaPYNa97mKyVR39YvWuf2O70QIOQsd%2Fe629ZtV91tCpXROdtGMM5p82z01pV1Y8r2hRIBfH7llXwXMaM8ot1dmiH1NKlbUAl94FMXv7TXQ6Pxwo3sY6%2FdlhRvuLjWz%2FVxEj1nVGiN253y%2FCKvCKOMhQIJbR%2B19ZsMq3KITo3ea1nDCCutO9BjqkAQGP4dduzyqroop0CKm9M8rzCqY5UOmBInloTCDStUo1WDP3BTrvtcnCrggcKZ%2FlsJ3DnuPukV3%2FpBLkbxNIHL4u279mIsMizij4345VQ%2FgDFcGJfBMy%2FdUvexlX8dOqZ6ksI4WphdAQbUqKC4AsXTSMxe%2FC7nbdc6WhehHRoABCnQAAkfquCkF5BM3H3iU1AbEKDUiM0bayxIPXunI0f8E8rS6b&X-Amz-Signature=0d05303e30fec7636ea38bd09d54207473c7b4b04de5928101c2f6fbfe028519&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
