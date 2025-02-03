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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFOURUL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGzydRNVG4kKDaFn4JHGbRRd1yW%2B1GgHeEx4i275suvrAiEA7gniy6dciuBW7xMH5yw%2FP6SijcBKhZmUnpCoRGOpagQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIQLulsZgXaIeAvXpyrcA21Y%2FKJmpnEZ0LCARfMmHamcbS6FD2ClH9ldX89ygCdSpCa2RxaeN68mbziXDXDKmMN6YsUqx377Aj1SUKXFcpcbqaYer4gAS8uVtwxz1gM7A241jw0paUYLU%2FGxLGIM6hq9k2ZkuAe4lDkziejuYwXKP%2FXeR%2FBSJIoLk8WtaMR%2Fob7Pq1ginmDlm%2FqGmc2qfapnPfE4U2KIx880g8Le4PWnwrvp6PmxMi4aYRvYrRHj16uzvYI6hWiTpjnVmGr8wEkCAqjy%2FPYsszPrcNx%2BTYQGQd8sgHK%2FmmNU6XXFKGw1uTu5%2BCE03m3lau2jiKV%2BbI8y7CeQJY0%2Bmg65MYP1%2Bvz52XP5XNglMykwq90n8gs4J9XAzh9rb7QyagXbD3jArR8yFxkc3EdS25V9Oc5WMiKukEBlD8cdSeiyKReNROBjGc4QP9bSW%2FJOqx0LaPUeKfaNrQ3efx1A6k2zQv3Z7dPoEbQXqiEUOlJRke1q3wPPoy5C4IkYHX1MFFyeOa%2Bzbs7Jh%2FrZ1wLdBk%2F%2BpcwC2kQnhe8M7JL7Gi5T03ZzELchtnFyMhZMwm2%2FETtLMXI%2F7lLrF6AKY1kbJXDjmpi4z2DD9damqw%2BusmgVH8y1LHjd3U4h4gIRg%2BF2APcbMKfng70GOqUBvgiW4J5YTDgCjQFIv1XWdI3f13SKJBCUF%2Fl9oWroBZbXCTEcGcX4OXmt2yFtTv207idPI%2F%2FJvUmAINmYGKKCg5QXN3J2oUimVxfnVsWhAFOjK1Yz72kUzHjFYVYtFppmQ7CcJ%2FfZT%2BKgisZZ6e91kROaWce048o7Lsv8Z4GBAcdbe3gfKPwzk%2FxhJtvsc6YgM2OHTJf%2B8B957z9AmgM%2FRaKJQIjM&X-Amz-Signature=58ecd4dcc8cf66a4aa5160ffe7a54df51e420059454aac33eded488abc1e915b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFOURUL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGzydRNVG4kKDaFn4JHGbRRd1yW%2B1GgHeEx4i275suvrAiEA7gniy6dciuBW7xMH5yw%2FP6SijcBKhZmUnpCoRGOpagQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIQLulsZgXaIeAvXpyrcA21Y%2FKJmpnEZ0LCARfMmHamcbS6FD2ClH9ldX89ygCdSpCa2RxaeN68mbziXDXDKmMN6YsUqx377Aj1SUKXFcpcbqaYer4gAS8uVtwxz1gM7A241jw0paUYLU%2FGxLGIM6hq9k2ZkuAe4lDkziejuYwXKP%2FXeR%2FBSJIoLk8WtaMR%2Fob7Pq1ginmDlm%2FqGmc2qfapnPfE4U2KIx880g8Le4PWnwrvp6PmxMi4aYRvYrRHj16uzvYI6hWiTpjnVmGr8wEkCAqjy%2FPYsszPrcNx%2BTYQGQd8sgHK%2FmmNU6XXFKGw1uTu5%2BCE03m3lau2jiKV%2BbI8y7CeQJY0%2Bmg65MYP1%2Bvz52XP5XNglMykwq90n8gs4J9XAzh9rb7QyagXbD3jArR8yFxkc3EdS25V9Oc5WMiKukEBlD8cdSeiyKReNROBjGc4QP9bSW%2FJOqx0LaPUeKfaNrQ3efx1A6k2zQv3Z7dPoEbQXqiEUOlJRke1q3wPPoy5C4IkYHX1MFFyeOa%2Bzbs7Jh%2FrZ1wLdBk%2F%2BpcwC2kQnhe8M7JL7Gi5T03ZzELchtnFyMhZMwm2%2FETtLMXI%2F7lLrF6AKY1kbJXDjmpi4z2DD9damqw%2BusmgVH8y1LHjd3U4h4gIRg%2BF2APcbMKfng70GOqUBvgiW4J5YTDgCjQFIv1XWdI3f13SKJBCUF%2Fl9oWroBZbXCTEcGcX4OXmt2yFtTv207idPI%2F%2FJvUmAINmYGKKCg5QXN3J2oUimVxfnVsWhAFOjK1Yz72kUzHjFYVYtFppmQ7CcJ%2FfZT%2BKgisZZ6e91kROaWce048o7Lsv8Z4GBAcdbe3gfKPwzk%2FxhJtvsc6YgM2OHTJf%2B8B957z9AmgM%2FRaKJQIjM&X-Amz-Signature=d94704742174f6919ea50a44bb76ec3a64893efe039c03df6c25e7ef33d90da2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFOURUL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGzydRNVG4kKDaFn4JHGbRRd1yW%2B1GgHeEx4i275suvrAiEA7gniy6dciuBW7xMH5yw%2FP6SijcBKhZmUnpCoRGOpagQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIQLulsZgXaIeAvXpyrcA21Y%2FKJmpnEZ0LCARfMmHamcbS6FD2ClH9ldX89ygCdSpCa2RxaeN68mbziXDXDKmMN6YsUqx377Aj1SUKXFcpcbqaYer4gAS8uVtwxz1gM7A241jw0paUYLU%2FGxLGIM6hq9k2ZkuAe4lDkziejuYwXKP%2FXeR%2FBSJIoLk8WtaMR%2Fob7Pq1ginmDlm%2FqGmc2qfapnPfE4U2KIx880g8Le4PWnwrvp6PmxMi4aYRvYrRHj16uzvYI6hWiTpjnVmGr8wEkCAqjy%2FPYsszPrcNx%2BTYQGQd8sgHK%2FmmNU6XXFKGw1uTu5%2BCE03m3lau2jiKV%2BbI8y7CeQJY0%2Bmg65MYP1%2Bvz52XP5XNglMykwq90n8gs4J9XAzh9rb7QyagXbD3jArR8yFxkc3EdS25V9Oc5WMiKukEBlD8cdSeiyKReNROBjGc4QP9bSW%2FJOqx0LaPUeKfaNrQ3efx1A6k2zQv3Z7dPoEbQXqiEUOlJRke1q3wPPoy5C4IkYHX1MFFyeOa%2Bzbs7Jh%2FrZ1wLdBk%2F%2BpcwC2kQnhe8M7JL7Gi5T03ZzELchtnFyMhZMwm2%2FETtLMXI%2F7lLrF6AKY1kbJXDjmpi4z2DD9damqw%2BusmgVH8y1LHjd3U4h4gIRg%2BF2APcbMKfng70GOqUBvgiW4J5YTDgCjQFIv1XWdI3f13SKJBCUF%2Fl9oWroBZbXCTEcGcX4OXmt2yFtTv207idPI%2F%2FJvUmAINmYGKKCg5QXN3J2oUimVxfnVsWhAFOjK1Yz72kUzHjFYVYtFppmQ7CcJ%2FfZT%2BKgisZZ6e91kROaWce048o7Lsv8Z4GBAcdbe3gfKPwzk%2FxhJtvsc6YgM2OHTJf%2B8B957z9AmgM%2FRaKJQIjM&X-Amz-Signature=f99fb25ff0f380b226f276ab9571f403d734b0f4ad012a70e11f12aef2d095cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFOURUL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGzydRNVG4kKDaFn4JHGbRRd1yW%2B1GgHeEx4i275suvrAiEA7gniy6dciuBW7xMH5yw%2FP6SijcBKhZmUnpCoRGOpagQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIQLulsZgXaIeAvXpyrcA21Y%2FKJmpnEZ0LCARfMmHamcbS6FD2ClH9ldX89ygCdSpCa2RxaeN68mbziXDXDKmMN6YsUqx377Aj1SUKXFcpcbqaYer4gAS8uVtwxz1gM7A241jw0paUYLU%2FGxLGIM6hq9k2ZkuAe4lDkziejuYwXKP%2FXeR%2FBSJIoLk8WtaMR%2Fob7Pq1ginmDlm%2FqGmc2qfapnPfE4U2KIx880g8Le4PWnwrvp6PmxMi4aYRvYrRHj16uzvYI6hWiTpjnVmGr8wEkCAqjy%2FPYsszPrcNx%2BTYQGQd8sgHK%2FmmNU6XXFKGw1uTu5%2BCE03m3lau2jiKV%2BbI8y7CeQJY0%2Bmg65MYP1%2Bvz52XP5XNglMykwq90n8gs4J9XAzh9rb7QyagXbD3jArR8yFxkc3EdS25V9Oc5WMiKukEBlD8cdSeiyKReNROBjGc4QP9bSW%2FJOqx0LaPUeKfaNrQ3efx1A6k2zQv3Z7dPoEbQXqiEUOlJRke1q3wPPoy5C4IkYHX1MFFyeOa%2Bzbs7Jh%2FrZ1wLdBk%2F%2BpcwC2kQnhe8M7JL7Gi5T03ZzELchtnFyMhZMwm2%2FETtLMXI%2F7lLrF6AKY1kbJXDjmpi4z2DD9damqw%2BusmgVH8y1LHjd3U4h4gIRg%2BF2APcbMKfng70GOqUBvgiW4J5YTDgCjQFIv1XWdI3f13SKJBCUF%2Fl9oWroBZbXCTEcGcX4OXmt2yFtTv207idPI%2F%2FJvUmAINmYGKKCg5QXN3J2oUimVxfnVsWhAFOjK1Yz72kUzHjFYVYtFppmQ7CcJ%2FfZT%2BKgisZZ6e91kROaWce048o7Lsv8Z4GBAcdbe3gfKPwzk%2FxhJtvsc6YgM2OHTJf%2B8B957z9AmgM%2FRaKJQIjM&X-Amz-Signature=f749910f564d0421455a27393accac93104b8afa447107beb2401856b6e35189&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFOURUL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGzydRNVG4kKDaFn4JHGbRRd1yW%2B1GgHeEx4i275suvrAiEA7gniy6dciuBW7xMH5yw%2FP6SijcBKhZmUnpCoRGOpagQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIQLulsZgXaIeAvXpyrcA21Y%2FKJmpnEZ0LCARfMmHamcbS6FD2ClH9ldX89ygCdSpCa2RxaeN68mbziXDXDKmMN6YsUqx377Aj1SUKXFcpcbqaYer4gAS8uVtwxz1gM7A241jw0paUYLU%2FGxLGIM6hq9k2ZkuAe4lDkziejuYwXKP%2FXeR%2FBSJIoLk8WtaMR%2Fob7Pq1ginmDlm%2FqGmc2qfapnPfE4U2KIx880g8Le4PWnwrvp6PmxMi4aYRvYrRHj16uzvYI6hWiTpjnVmGr8wEkCAqjy%2FPYsszPrcNx%2BTYQGQd8sgHK%2FmmNU6XXFKGw1uTu5%2BCE03m3lau2jiKV%2BbI8y7CeQJY0%2Bmg65MYP1%2Bvz52XP5XNglMykwq90n8gs4J9XAzh9rb7QyagXbD3jArR8yFxkc3EdS25V9Oc5WMiKukEBlD8cdSeiyKReNROBjGc4QP9bSW%2FJOqx0LaPUeKfaNrQ3efx1A6k2zQv3Z7dPoEbQXqiEUOlJRke1q3wPPoy5C4IkYHX1MFFyeOa%2Bzbs7Jh%2FrZ1wLdBk%2F%2BpcwC2kQnhe8M7JL7Gi5T03ZzELchtnFyMhZMwm2%2FETtLMXI%2F7lLrF6AKY1kbJXDjmpi4z2DD9damqw%2BusmgVH8y1LHjd3U4h4gIRg%2BF2APcbMKfng70GOqUBvgiW4J5YTDgCjQFIv1XWdI3f13SKJBCUF%2Fl9oWroBZbXCTEcGcX4OXmt2yFtTv207idPI%2F%2FJvUmAINmYGKKCg5QXN3J2oUimVxfnVsWhAFOjK1Yz72kUzHjFYVYtFppmQ7CcJ%2FfZT%2BKgisZZ6e91kROaWce048o7Lsv8Z4GBAcdbe3gfKPwzk%2FxhJtvsc6YgM2OHTJf%2B8B957z9AmgM%2FRaKJQIjM&X-Amz-Signature=04ce2c35cdf6478cf3de1a332d8485a1d8cc76f247d2dbdf5458e3c5a3f77343&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFOURUL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGzydRNVG4kKDaFn4JHGbRRd1yW%2B1GgHeEx4i275suvrAiEA7gniy6dciuBW7xMH5yw%2FP6SijcBKhZmUnpCoRGOpagQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIQLulsZgXaIeAvXpyrcA21Y%2FKJmpnEZ0LCARfMmHamcbS6FD2ClH9ldX89ygCdSpCa2RxaeN68mbziXDXDKmMN6YsUqx377Aj1SUKXFcpcbqaYer4gAS8uVtwxz1gM7A241jw0paUYLU%2FGxLGIM6hq9k2ZkuAe4lDkziejuYwXKP%2FXeR%2FBSJIoLk8WtaMR%2Fob7Pq1ginmDlm%2FqGmc2qfapnPfE4U2KIx880g8Le4PWnwrvp6PmxMi4aYRvYrRHj16uzvYI6hWiTpjnVmGr8wEkCAqjy%2FPYsszPrcNx%2BTYQGQd8sgHK%2FmmNU6XXFKGw1uTu5%2BCE03m3lau2jiKV%2BbI8y7CeQJY0%2Bmg65MYP1%2Bvz52XP5XNglMykwq90n8gs4J9XAzh9rb7QyagXbD3jArR8yFxkc3EdS25V9Oc5WMiKukEBlD8cdSeiyKReNROBjGc4QP9bSW%2FJOqx0LaPUeKfaNrQ3efx1A6k2zQv3Z7dPoEbQXqiEUOlJRke1q3wPPoy5C4IkYHX1MFFyeOa%2Bzbs7Jh%2FrZ1wLdBk%2F%2BpcwC2kQnhe8M7JL7Gi5T03ZzELchtnFyMhZMwm2%2FETtLMXI%2F7lLrF6AKY1kbJXDjmpi4z2DD9damqw%2BusmgVH8y1LHjd3U4h4gIRg%2BF2APcbMKfng70GOqUBvgiW4J5YTDgCjQFIv1XWdI3f13SKJBCUF%2Fl9oWroBZbXCTEcGcX4OXmt2yFtTv207idPI%2F%2FJvUmAINmYGKKCg5QXN3J2oUimVxfnVsWhAFOjK1Yz72kUzHjFYVYtFppmQ7CcJ%2FfZT%2BKgisZZ6e91kROaWce048o7Lsv8Z4GBAcdbe3gfKPwzk%2FxhJtvsc6YgM2OHTJf%2B8B957z9AmgM%2FRaKJQIjM&X-Amz-Signature=c798043a89db892e14d1c01993791bbc87c3a6e037a9fd96cce5f63b673eb89e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKFOURUL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGzydRNVG4kKDaFn4JHGbRRd1yW%2B1GgHeEx4i275suvrAiEA7gniy6dciuBW7xMH5yw%2FP6SijcBKhZmUnpCoRGOpagQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIQLulsZgXaIeAvXpyrcA21Y%2FKJmpnEZ0LCARfMmHamcbS6FD2ClH9ldX89ygCdSpCa2RxaeN68mbziXDXDKmMN6YsUqx377Aj1SUKXFcpcbqaYer4gAS8uVtwxz1gM7A241jw0paUYLU%2FGxLGIM6hq9k2ZkuAe4lDkziejuYwXKP%2FXeR%2FBSJIoLk8WtaMR%2Fob7Pq1ginmDlm%2FqGmc2qfapnPfE4U2KIx880g8Le4PWnwrvp6PmxMi4aYRvYrRHj16uzvYI6hWiTpjnVmGr8wEkCAqjy%2FPYsszPrcNx%2BTYQGQd8sgHK%2FmmNU6XXFKGw1uTu5%2BCE03m3lau2jiKV%2BbI8y7CeQJY0%2Bmg65MYP1%2Bvz52XP5XNglMykwq90n8gs4J9XAzh9rb7QyagXbD3jArR8yFxkc3EdS25V9Oc5WMiKukEBlD8cdSeiyKReNROBjGc4QP9bSW%2FJOqx0LaPUeKfaNrQ3efx1A6k2zQv3Z7dPoEbQXqiEUOlJRke1q3wPPoy5C4IkYHX1MFFyeOa%2Bzbs7Jh%2FrZ1wLdBk%2F%2BpcwC2kQnhe8M7JL7Gi5T03ZzELchtnFyMhZMwm2%2FETtLMXI%2F7lLrF6AKY1kbJXDjmpi4z2DD9damqw%2BusmgVH8y1LHjd3U4h4gIRg%2BF2APcbMKfng70GOqUBvgiW4J5YTDgCjQFIv1XWdI3f13SKJBCUF%2Fl9oWroBZbXCTEcGcX4OXmt2yFtTv207idPI%2F%2FJvUmAINmYGKKCg5QXN3J2oUimVxfnVsWhAFOjK1Yz72kUzHjFYVYtFppmQ7CcJ%2FfZT%2BKgisZZ6e91kROaWce048o7Lsv8Z4GBAcdbe3gfKPwzk%2FxhJtvsc6YgM2OHTJf%2B8B957z9AmgM%2FRaKJQIjM&X-Amz-Signature=fb240deebc58f6d339ca9b55a837f2983a221d95869b5a8dd89f6e868be3c56d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
