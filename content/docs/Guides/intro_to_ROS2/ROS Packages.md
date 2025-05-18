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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGQJKDG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWmqRfcEQk2gzo7lA54y%2FntmHzTADCmt0toD3JqGEsAIhALzxQDhDwZwHE52sa4wQA1%2BMX0HpzFGdZk4swqUrsg7ZKv8DCGoQABoMNjM3NDIzMTgzODA1IgzWMcMM%2Bmp5qJfSLkIq3AOrcU4%2BFi1ngZcTMfkePXyRQJ8sQb7R0r%2Bxtv8fwnHu51MjBkVEIkvIFZzsejWXXn%2BUwvq6tBxsruNkNTwmTrSBDcU3vcdU6c9Z64qsPZl1xxFGwuLf2Jqbnj8v9IiLqJlOfihenI55%2F9k7YFzN8FaZ4%2FFXoC9HRKF3F3YAMs8%2FqSfogE6ku1rOfaCrtUG0joMYaz4ILJvGaUhK96uzXBas1xutnqmASU0edlIhGjFM67UdgZQ0m2oPsjVNeNSHxYZCqwQyKB1VndT7wyrMEm24jB%2FIhegXDJO4O0pwsYQaKH4h4rSBA2ejRMRTeFDVwKKeo5RvEDY9mHSoge4Kqp%2F0ypalHba8uWN5fYmeA%2FlUINuNdwX9vddLfSvKwlJ8C6M2GfElByIQwhsKmrDc4gonU8x3UOwvsecJVOO9as6At1wud7QxNRV8AcLJnHOC58BHP3KZIFsSpW2k07%2FelbceA3qL1u3zoLOWPWSQWhTTTqoQomX179H2dCnhS%2FRl2j0%2BwlWUpExt61grywyFpnQmPddddYJU3TbTEnHZ1FZdiOwGbl2GOuD615q6woFGSZlQEtGSdO4ZyAEa4t%2B4ikCnSLKpRsMV9y7hn3XGOFyutS0vJ1euTQ72DiyT4DDv16TBBjqkAR%2BxdnBvJKVCQzNaXHdhaByvpfobG%2FBPw8zfOlwnzJB7XU7YxGb%2BQPqwoPPdZfH4QK4o5GpSeBcF95Ak8Dl0CM%2B7GOb5w9ygmmvtHYQGd632oBpJoreE0ChcpmY2ksQ7I6QiTdaru3NxSwO659s5OT7DDNFa6sp8IPE8Qrl5F6%2Fh41WRGfuaXwq%2BKjQQZbcDk4uBH2RO0JulGZjMSgAQ2mmJzqdh&X-Amz-Signature=05596ba790baf331f1c0f052bc9cbfefd293f7eb44d3c2b646cc7c271fee71c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGQJKDG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWmqRfcEQk2gzo7lA54y%2FntmHzTADCmt0toD3JqGEsAIhALzxQDhDwZwHE52sa4wQA1%2BMX0HpzFGdZk4swqUrsg7ZKv8DCGoQABoMNjM3NDIzMTgzODA1IgzWMcMM%2Bmp5qJfSLkIq3AOrcU4%2BFi1ngZcTMfkePXyRQJ8sQb7R0r%2Bxtv8fwnHu51MjBkVEIkvIFZzsejWXXn%2BUwvq6tBxsruNkNTwmTrSBDcU3vcdU6c9Z64qsPZl1xxFGwuLf2Jqbnj8v9IiLqJlOfihenI55%2F9k7YFzN8FaZ4%2FFXoC9HRKF3F3YAMs8%2FqSfogE6ku1rOfaCrtUG0joMYaz4ILJvGaUhK96uzXBas1xutnqmASU0edlIhGjFM67UdgZQ0m2oPsjVNeNSHxYZCqwQyKB1VndT7wyrMEm24jB%2FIhegXDJO4O0pwsYQaKH4h4rSBA2ejRMRTeFDVwKKeo5RvEDY9mHSoge4Kqp%2F0ypalHba8uWN5fYmeA%2FlUINuNdwX9vddLfSvKwlJ8C6M2GfElByIQwhsKmrDc4gonU8x3UOwvsecJVOO9as6At1wud7QxNRV8AcLJnHOC58BHP3KZIFsSpW2k07%2FelbceA3qL1u3zoLOWPWSQWhTTTqoQomX179H2dCnhS%2FRl2j0%2BwlWUpExt61grywyFpnQmPddddYJU3TbTEnHZ1FZdiOwGbl2GOuD615q6woFGSZlQEtGSdO4ZyAEa4t%2B4ikCnSLKpRsMV9y7hn3XGOFyutS0vJ1euTQ72DiyT4DDv16TBBjqkAR%2BxdnBvJKVCQzNaXHdhaByvpfobG%2FBPw8zfOlwnzJB7XU7YxGb%2BQPqwoPPdZfH4QK4o5GpSeBcF95Ak8Dl0CM%2B7GOb5w9ygmmvtHYQGd632oBpJoreE0ChcpmY2ksQ7I6QiTdaru3NxSwO659s5OT7DDNFa6sp8IPE8Qrl5F6%2Fh41WRGfuaXwq%2BKjQQZbcDk4uBH2RO0JulGZjMSgAQ2mmJzqdh&X-Amz-Signature=f747f0eb4391c6775c0b444f9cdc05f71097279d9e87d7d4e21b89bcef026e00&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGQJKDG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWmqRfcEQk2gzo7lA54y%2FntmHzTADCmt0toD3JqGEsAIhALzxQDhDwZwHE52sa4wQA1%2BMX0HpzFGdZk4swqUrsg7ZKv8DCGoQABoMNjM3NDIzMTgzODA1IgzWMcMM%2Bmp5qJfSLkIq3AOrcU4%2BFi1ngZcTMfkePXyRQJ8sQb7R0r%2Bxtv8fwnHu51MjBkVEIkvIFZzsejWXXn%2BUwvq6tBxsruNkNTwmTrSBDcU3vcdU6c9Z64qsPZl1xxFGwuLf2Jqbnj8v9IiLqJlOfihenI55%2F9k7YFzN8FaZ4%2FFXoC9HRKF3F3YAMs8%2FqSfogE6ku1rOfaCrtUG0joMYaz4ILJvGaUhK96uzXBas1xutnqmASU0edlIhGjFM67UdgZQ0m2oPsjVNeNSHxYZCqwQyKB1VndT7wyrMEm24jB%2FIhegXDJO4O0pwsYQaKH4h4rSBA2ejRMRTeFDVwKKeo5RvEDY9mHSoge4Kqp%2F0ypalHba8uWN5fYmeA%2FlUINuNdwX9vddLfSvKwlJ8C6M2GfElByIQwhsKmrDc4gonU8x3UOwvsecJVOO9as6At1wud7QxNRV8AcLJnHOC58BHP3KZIFsSpW2k07%2FelbceA3qL1u3zoLOWPWSQWhTTTqoQomX179H2dCnhS%2FRl2j0%2BwlWUpExt61grywyFpnQmPddddYJU3TbTEnHZ1FZdiOwGbl2GOuD615q6woFGSZlQEtGSdO4ZyAEa4t%2B4ikCnSLKpRsMV9y7hn3XGOFyutS0vJ1euTQ72DiyT4DDv16TBBjqkAR%2BxdnBvJKVCQzNaXHdhaByvpfobG%2FBPw8zfOlwnzJB7XU7YxGb%2BQPqwoPPdZfH4QK4o5GpSeBcF95Ak8Dl0CM%2B7GOb5w9ygmmvtHYQGd632oBpJoreE0ChcpmY2ksQ7I6QiTdaru3NxSwO659s5OT7DDNFa6sp8IPE8Qrl5F6%2Fh41WRGfuaXwq%2BKjQQZbcDk4uBH2RO0JulGZjMSgAQ2mmJzqdh&X-Amz-Signature=499accf6edc648a1dee045897c98e12f281d1e84c46846bcbd6f6e7e144d609f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGQJKDG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWmqRfcEQk2gzo7lA54y%2FntmHzTADCmt0toD3JqGEsAIhALzxQDhDwZwHE52sa4wQA1%2BMX0HpzFGdZk4swqUrsg7ZKv8DCGoQABoMNjM3NDIzMTgzODA1IgzWMcMM%2Bmp5qJfSLkIq3AOrcU4%2BFi1ngZcTMfkePXyRQJ8sQb7R0r%2Bxtv8fwnHu51MjBkVEIkvIFZzsejWXXn%2BUwvq6tBxsruNkNTwmTrSBDcU3vcdU6c9Z64qsPZl1xxFGwuLf2Jqbnj8v9IiLqJlOfihenI55%2F9k7YFzN8FaZ4%2FFXoC9HRKF3F3YAMs8%2FqSfogE6ku1rOfaCrtUG0joMYaz4ILJvGaUhK96uzXBas1xutnqmASU0edlIhGjFM67UdgZQ0m2oPsjVNeNSHxYZCqwQyKB1VndT7wyrMEm24jB%2FIhegXDJO4O0pwsYQaKH4h4rSBA2ejRMRTeFDVwKKeo5RvEDY9mHSoge4Kqp%2F0ypalHba8uWN5fYmeA%2FlUINuNdwX9vddLfSvKwlJ8C6M2GfElByIQwhsKmrDc4gonU8x3UOwvsecJVOO9as6At1wud7QxNRV8AcLJnHOC58BHP3KZIFsSpW2k07%2FelbceA3qL1u3zoLOWPWSQWhTTTqoQomX179H2dCnhS%2FRl2j0%2BwlWUpExt61grywyFpnQmPddddYJU3TbTEnHZ1FZdiOwGbl2GOuD615q6woFGSZlQEtGSdO4ZyAEa4t%2B4ikCnSLKpRsMV9y7hn3XGOFyutS0vJ1euTQ72DiyT4DDv16TBBjqkAR%2BxdnBvJKVCQzNaXHdhaByvpfobG%2FBPw8zfOlwnzJB7XU7YxGb%2BQPqwoPPdZfH4QK4o5GpSeBcF95Ak8Dl0CM%2B7GOb5w9ygmmvtHYQGd632oBpJoreE0ChcpmY2ksQ7I6QiTdaru3NxSwO659s5OT7DDNFa6sp8IPE8Qrl5F6%2Fh41WRGfuaXwq%2BKjQQZbcDk4uBH2RO0JulGZjMSgAQ2mmJzqdh&X-Amz-Signature=43703185b6a2d448d8a05b9279ef049bbcc8fd89ed37958d80ff8c346c0642f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGQJKDG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWmqRfcEQk2gzo7lA54y%2FntmHzTADCmt0toD3JqGEsAIhALzxQDhDwZwHE52sa4wQA1%2BMX0HpzFGdZk4swqUrsg7ZKv8DCGoQABoMNjM3NDIzMTgzODA1IgzWMcMM%2Bmp5qJfSLkIq3AOrcU4%2BFi1ngZcTMfkePXyRQJ8sQb7R0r%2Bxtv8fwnHu51MjBkVEIkvIFZzsejWXXn%2BUwvq6tBxsruNkNTwmTrSBDcU3vcdU6c9Z64qsPZl1xxFGwuLf2Jqbnj8v9IiLqJlOfihenI55%2F9k7YFzN8FaZ4%2FFXoC9HRKF3F3YAMs8%2FqSfogE6ku1rOfaCrtUG0joMYaz4ILJvGaUhK96uzXBas1xutnqmASU0edlIhGjFM67UdgZQ0m2oPsjVNeNSHxYZCqwQyKB1VndT7wyrMEm24jB%2FIhegXDJO4O0pwsYQaKH4h4rSBA2ejRMRTeFDVwKKeo5RvEDY9mHSoge4Kqp%2F0ypalHba8uWN5fYmeA%2FlUINuNdwX9vddLfSvKwlJ8C6M2GfElByIQwhsKmrDc4gonU8x3UOwvsecJVOO9as6At1wud7QxNRV8AcLJnHOC58BHP3KZIFsSpW2k07%2FelbceA3qL1u3zoLOWPWSQWhTTTqoQomX179H2dCnhS%2FRl2j0%2BwlWUpExt61grywyFpnQmPddddYJU3TbTEnHZ1FZdiOwGbl2GOuD615q6woFGSZlQEtGSdO4ZyAEa4t%2B4ikCnSLKpRsMV9y7hn3XGOFyutS0vJ1euTQ72DiyT4DDv16TBBjqkAR%2BxdnBvJKVCQzNaXHdhaByvpfobG%2FBPw8zfOlwnzJB7XU7YxGb%2BQPqwoPPdZfH4QK4o5GpSeBcF95Ak8Dl0CM%2B7GOb5w9ygmmvtHYQGd632oBpJoreE0ChcpmY2ksQ7I6QiTdaru3NxSwO659s5OT7DDNFa6sp8IPE8Qrl5F6%2Fh41WRGfuaXwq%2BKjQQZbcDk4uBH2RO0JulGZjMSgAQ2mmJzqdh&X-Amz-Signature=2f544908e01b03bfcd304d4322f16568c9ddad6f4ae6062917139be079c671d4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGQJKDG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWmqRfcEQk2gzo7lA54y%2FntmHzTADCmt0toD3JqGEsAIhALzxQDhDwZwHE52sa4wQA1%2BMX0HpzFGdZk4swqUrsg7ZKv8DCGoQABoMNjM3NDIzMTgzODA1IgzWMcMM%2Bmp5qJfSLkIq3AOrcU4%2BFi1ngZcTMfkePXyRQJ8sQb7R0r%2Bxtv8fwnHu51MjBkVEIkvIFZzsejWXXn%2BUwvq6tBxsruNkNTwmTrSBDcU3vcdU6c9Z64qsPZl1xxFGwuLf2Jqbnj8v9IiLqJlOfihenI55%2F9k7YFzN8FaZ4%2FFXoC9HRKF3F3YAMs8%2FqSfogE6ku1rOfaCrtUG0joMYaz4ILJvGaUhK96uzXBas1xutnqmASU0edlIhGjFM67UdgZQ0m2oPsjVNeNSHxYZCqwQyKB1VndT7wyrMEm24jB%2FIhegXDJO4O0pwsYQaKH4h4rSBA2ejRMRTeFDVwKKeo5RvEDY9mHSoge4Kqp%2F0ypalHba8uWN5fYmeA%2FlUINuNdwX9vddLfSvKwlJ8C6M2GfElByIQwhsKmrDc4gonU8x3UOwvsecJVOO9as6At1wud7QxNRV8AcLJnHOC58BHP3KZIFsSpW2k07%2FelbceA3qL1u3zoLOWPWSQWhTTTqoQomX179H2dCnhS%2FRl2j0%2BwlWUpExt61grywyFpnQmPddddYJU3TbTEnHZ1FZdiOwGbl2GOuD615q6woFGSZlQEtGSdO4ZyAEa4t%2B4ikCnSLKpRsMV9y7hn3XGOFyutS0vJ1euTQ72DiyT4DDv16TBBjqkAR%2BxdnBvJKVCQzNaXHdhaByvpfobG%2FBPw8zfOlwnzJB7XU7YxGb%2BQPqwoPPdZfH4QK4o5GpSeBcF95Ak8Dl0CM%2B7GOb5w9ygmmvtHYQGd632oBpJoreE0ChcpmY2ksQ7I6QiTdaru3NxSwO659s5OT7DDNFa6sp8IPE8Qrl5F6%2Fh41WRGfuaXwq%2BKjQQZbcDk4uBH2RO0JulGZjMSgAQ2mmJzqdh&X-Amz-Signature=94a6b5e89ac13788397f0ad87fe5cd18363a6fb6564489296959363d10a3036d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGQJKDG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWmqRfcEQk2gzo7lA54y%2FntmHzTADCmt0toD3JqGEsAIhALzxQDhDwZwHE52sa4wQA1%2BMX0HpzFGdZk4swqUrsg7ZKv8DCGoQABoMNjM3NDIzMTgzODA1IgzWMcMM%2Bmp5qJfSLkIq3AOrcU4%2BFi1ngZcTMfkePXyRQJ8sQb7R0r%2Bxtv8fwnHu51MjBkVEIkvIFZzsejWXXn%2BUwvq6tBxsruNkNTwmTrSBDcU3vcdU6c9Z64qsPZl1xxFGwuLf2Jqbnj8v9IiLqJlOfihenI55%2F9k7YFzN8FaZ4%2FFXoC9HRKF3F3YAMs8%2FqSfogE6ku1rOfaCrtUG0joMYaz4ILJvGaUhK96uzXBas1xutnqmASU0edlIhGjFM67UdgZQ0m2oPsjVNeNSHxYZCqwQyKB1VndT7wyrMEm24jB%2FIhegXDJO4O0pwsYQaKH4h4rSBA2ejRMRTeFDVwKKeo5RvEDY9mHSoge4Kqp%2F0ypalHba8uWN5fYmeA%2FlUINuNdwX9vddLfSvKwlJ8C6M2GfElByIQwhsKmrDc4gonU8x3UOwvsecJVOO9as6At1wud7QxNRV8AcLJnHOC58BHP3KZIFsSpW2k07%2FelbceA3qL1u3zoLOWPWSQWhTTTqoQomX179H2dCnhS%2FRl2j0%2BwlWUpExt61grywyFpnQmPddddYJU3TbTEnHZ1FZdiOwGbl2GOuD615q6woFGSZlQEtGSdO4ZyAEa4t%2B4ikCnSLKpRsMV9y7hn3XGOFyutS0vJ1euTQ72DiyT4DDv16TBBjqkAR%2BxdnBvJKVCQzNaXHdhaByvpfobG%2FBPw8zfOlwnzJB7XU7YxGb%2BQPqwoPPdZfH4QK4o5GpSeBcF95Ak8Dl0CM%2B7GOb5w9ygmmvtHYQGd632oBpJoreE0ChcpmY2ksQ7I6QiTdaru3NxSwO659s5OT7DDNFa6sp8IPE8Qrl5F6%2Fh41WRGfuaXwq%2BKjQQZbcDk4uBH2RO0JulGZjMSgAQ2mmJzqdh&X-Amz-Signature=912d54076db6a662bdd2721d553d3da96684e977f0748270f3cdfae4066f63a3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
