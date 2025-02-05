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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5KOXU2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIC%2BBkP3afUEPYKJNG1z80VPDQgfrZMqOf84ltbWVGtvYAiEA7lDoX%2B%2BYlvAyinC9ZQL0BGrVp7EGp0pyN1X6MSxD1eEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN4NtZX56AjgQblMKSrcA8mbN4gomm7Yy92vLhtTbjSAgAdchiyZ4SLAHthfmKrclDaAbeYhPIv3OOcTtwXZNELqQgM125ILkyQZMmSNpOMLmOgUJtp%2Fdrw2hiOOedFg8Y6mFfRU3r3iVomd%2FLEhHXS61K2eX6E9Zam%2Bnc451lDHjxmAZiBEmY715S15t9ECs054TawrRPUTChwoQiFVWlXF0wLqABF3w4KE5ztWNScNqYG9XayqW7Rw85n3oUaCG2QhfX6Gd8Rj13Ci64l6ukwEbKqdoG9ZAv4m4YAUxNLQESilQgIkg8GizBmfSXMD5AjS%2BmPnnhhYUYKGMCuSBn3p1ZlKVOGS7eUyw14L39XsD6gdpsyPWoC0FgJ9ftqHZa6qI3sR%2BR0Ux4mgRjvFSe0SKUpUXK7Q1WqbE6TqQtVASRjtI371v8h8%2BOEKzr8UpY4tGVV%2F7e0VxYSM83Ec7Ma4EN7Y7ziZ3lj3fOUug%2BHDuuLwbsfSkWu3vOwsnCbrY1jT4dHgqN1GURB6eFeVFlLUPqI0pG2ZwQvPE22wyVFs6U5empVD8U6TUB8mkECEOQjc9%2BEQWHO5DIzYp4HKNPHtYD0LFUj%2Bp8yTKtGFY8U%2Bkbs8muZh9Kz9DTWhpiS7ZZbXHZyC8EoNhXNqMKvxjL0GOqUBv1oain8DZsDY%2BtiI1qjeJlQ5pfSXKGOb0zHhuyrW3Y1cIRM1UE54RTi76iml9PGjsURUQokg4bWOf6RjMaxPB4aF%2But1fgkpmLPQ0hm36FQd7pv5%2B0D20Btj6V5LEPM74x1paVkHSDZ3nfHQfPv%2F0SpZRYeZQWWtEKR1LVZY42ASmb%2Fydyljj1gcSpLQsXunAvLif7cBtg6elhfm6bydfvcS11G5&X-Amz-Signature=d26f46192afe26c6dece8a34994ebb23a93c7db8f8ff42e8041ac7f2c0c36e05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5KOXU2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIC%2BBkP3afUEPYKJNG1z80VPDQgfrZMqOf84ltbWVGtvYAiEA7lDoX%2B%2BYlvAyinC9ZQL0BGrVp7EGp0pyN1X6MSxD1eEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN4NtZX56AjgQblMKSrcA8mbN4gomm7Yy92vLhtTbjSAgAdchiyZ4SLAHthfmKrclDaAbeYhPIv3OOcTtwXZNELqQgM125ILkyQZMmSNpOMLmOgUJtp%2Fdrw2hiOOedFg8Y6mFfRU3r3iVomd%2FLEhHXS61K2eX6E9Zam%2Bnc451lDHjxmAZiBEmY715S15t9ECs054TawrRPUTChwoQiFVWlXF0wLqABF3w4KE5ztWNScNqYG9XayqW7Rw85n3oUaCG2QhfX6Gd8Rj13Ci64l6ukwEbKqdoG9ZAv4m4YAUxNLQESilQgIkg8GizBmfSXMD5AjS%2BmPnnhhYUYKGMCuSBn3p1ZlKVOGS7eUyw14L39XsD6gdpsyPWoC0FgJ9ftqHZa6qI3sR%2BR0Ux4mgRjvFSe0SKUpUXK7Q1WqbE6TqQtVASRjtI371v8h8%2BOEKzr8UpY4tGVV%2F7e0VxYSM83Ec7Ma4EN7Y7ziZ3lj3fOUug%2BHDuuLwbsfSkWu3vOwsnCbrY1jT4dHgqN1GURB6eFeVFlLUPqI0pG2ZwQvPE22wyVFs6U5empVD8U6TUB8mkECEOQjc9%2BEQWHO5DIzYp4HKNPHtYD0LFUj%2Bp8yTKtGFY8U%2Bkbs8muZh9Kz9DTWhpiS7ZZbXHZyC8EoNhXNqMKvxjL0GOqUBv1oain8DZsDY%2BtiI1qjeJlQ5pfSXKGOb0zHhuyrW3Y1cIRM1UE54RTi76iml9PGjsURUQokg4bWOf6RjMaxPB4aF%2But1fgkpmLPQ0hm36FQd7pv5%2B0D20Btj6V5LEPM74x1paVkHSDZ3nfHQfPv%2F0SpZRYeZQWWtEKR1LVZY42ASmb%2Fydyljj1gcSpLQsXunAvLif7cBtg6elhfm6bydfvcS11G5&X-Amz-Signature=a471f66c4b59695e89eb6c6487ecf9902f63ac93964cf2827df302f5bcc83453&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5KOXU2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIC%2BBkP3afUEPYKJNG1z80VPDQgfrZMqOf84ltbWVGtvYAiEA7lDoX%2B%2BYlvAyinC9ZQL0BGrVp7EGp0pyN1X6MSxD1eEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN4NtZX56AjgQblMKSrcA8mbN4gomm7Yy92vLhtTbjSAgAdchiyZ4SLAHthfmKrclDaAbeYhPIv3OOcTtwXZNELqQgM125ILkyQZMmSNpOMLmOgUJtp%2Fdrw2hiOOedFg8Y6mFfRU3r3iVomd%2FLEhHXS61K2eX6E9Zam%2Bnc451lDHjxmAZiBEmY715S15t9ECs054TawrRPUTChwoQiFVWlXF0wLqABF3w4KE5ztWNScNqYG9XayqW7Rw85n3oUaCG2QhfX6Gd8Rj13Ci64l6ukwEbKqdoG9ZAv4m4YAUxNLQESilQgIkg8GizBmfSXMD5AjS%2BmPnnhhYUYKGMCuSBn3p1ZlKVOGS7eUyw14L39XsD6gdpsyPWoC0FgJ9ftqHZa6qI3sR%2BR0Ux4mgRjvFSe0SKUpUXK7Q1WqbE6TqQtVASRjtI371v8h8%2BOEKzr8UpY4tGVV%2F7e0VxYSM83Ec7Ma4EN7Y7ziZ3lj3fOUug%2BHDuuLwbsfSkWu3vOwsnCbrY1jT4dHgqN1GURB6eFeVFlLUPqI0pG2ZwQvPE22wyVFs6U5empVD8U6TUB8mkECEOQjc9%2BEQWHO5DIzYp4HKNPHtYD0LFUj%2Bp8yTKtGFY8U%2Bkbs8muZh9Kz9DTWhpiS7ZZbXHZyC8EoNhXNqMKvxjL0GOqUBv1oain8DZsDY%2BtiI1qjeJlQ5pfSXKGOb0zHhuyrW3Y1cIRM1UE54RTi76iml9PGjsURUQokg4bWOf6RjMaxPB4aF%2But1fgkpmLPQ0hm36FQd7pv5%2B0D20Btj6V5LEPM74x1paVkHSDZ3nfHQfPv%2F0SpZRYeZQWWtEKR1LVZY42ASmb%2Fydyljj1gcSpLQsXunAvLif7cBtg6elhfm6bydfvcS11G5&X-Amz-Signature=efbd3ed28d1caa861b5eae6dae78b28ed321cf81533aa63ab2e4c5df1ed8660a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5KOXU2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIC%2BBkP3afUEPYKJNG1z80VPDQgfrZMqOf84ltbWVGtvYAiEA7lDoX%2B%2BYlvAyinC9ZQL0BGrVp7EGp0pyN1X6MSxD1eEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN4NtZX56AjgQblMKSrcA8mbN4gomm7Yy92vLhtTbjSAgAdchiyZ4SLAHthfmKrclDaAbeYhPIv3OOcTtwXZNELqQgM125ILkyQZMmSNpOMLmOgUJtp%2Fdrw2hiOOedFg8Y6mFfRU3r3iVomd%2FLEhHXS61K2eX6E9Zam%2Bnc451lDHjxmAZiBEmY715S15t9ECs054TawrRPUTChwoQiFVWlXF0wLqABF3w4KE5ztWNScNqYG9XayqW7Rw85n3oUaCG2QhfX6Gd8Rj13Ci64l6ukwEbKqdoG9ZAv4m4YAUxNLQESilQgIkg8GizBmfSXMD5AjS%2BmPnnhhYUYKGMCuSBn3p1ZlKVOGS7eUyw14L39XsD6gdpsyPWoC0FgJ9ftqHZa6qI3sR%2BR0Ux4mgRjvFSe0SKUpUXK7Q1WqbE6TqQtVASRjtI371v8h8%2BOEKzr8UpY4tGVV%2F7e0VxYSM83Ec7Ma4EN7Y7ziZ3lj3fOUug%2BHDuuLwbsfSkWu3vOwsnCbrY1jT4dHgqN1GURB6eFeVFlLUPqI0pG2ZwQvPE22wyVFs6U5empVD8U6TUB8mkECEOQjc9%2BEQWHO5DIzYp4HKNPHtYD0LFUj%2Bp8yTKtGFY8U%2Bkbs8muZh9Kz9DTWhpiS7ZZbXHZyC8EoNhXNqMKvxjL0GOqUBv1oain8DZsDY%2BtiI1qjeJlQ5pfSXKGOb0zHhuyrW3Y1cIRM1UE54RTi76iml9PGjsURUQokg4bWOf6RjMaxPB4aF%2But1fgkpmLPQ0hm36FQd7pv5%2B0D20Btj6V5LEPM74x1paVkHSDZ3nfHQfPv%2F0SpZRYeZQWWtEKR1LVZY42ASmb%2Fydyljj1gcSpLQsXunAvLif7cBtg6elhfm6bydfvcS11G5&X-Amz-Signature=4839df9fb86c9f2e2e17b5f76a7e3169fe9878e9108177983421d89b25a83b21&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5KOXU2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIC%2BBkP3afUEPYKJNG1z80VPDQgfrZMqOf84ltbWVGtvYAiEA7lDoX%2B%2BYlvAyinC9ZQL0BGrVp7EGp0pyN1X6MSxD1eEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN4NtZX56AjgQblMKSrcA8mbN4gomm7Yy92vLhtTbjSAgAdchiyZ4SLAHthfmKrclDaAbeYhPIv3OOcTtwXZNELqQgM125ILkyQZMmSNpOMLmOgUJtp%2Fdrw2hiOOedFg8Y6mFfRU3r3iVomd%2FLEhHXS61K2eX6E9Zam%2Bnc451lDHjxmAZiBEmY715S15t9ECs054TawrRPUTChwoQiFVWlXF0wLqABF3w4KE5ztWNScNqYG9XayqW7Rw85n3oUaCG2QhfX6Gd8Rj13Ci64l6ukwEbKqdoG9ZAv4m4YAUxNLQESilQgIkg8GizBmfSXMD5AjS%2BmPnnhhYUYKGMCuSBn3p1ZlKVOGS7eUyw14L39XsD6gdpsyPWoC0FgJ9ftqHZa6qI3sR%2BR0Ux4mgRjvFSe0SKUpUXK7Q1WqbE6TqQtVASRjtI371v8h8%2BOEKzr8UpY4tGVV%2F7e0VxYSM83Ec7Ma4EN7Y7ziZ3lj3fOUug%2BHDuuLwbsfSkWu3vOwsnCbrY1jT4dHgqN1GURB6eFeVFlLUPqI0pG2ZwQvPE22wyVFs6U5empVD8U6TUB8mkECEOQjc9%2BEQWHO5DIzYp4HKNPHtYD0LFUj%2Bp8yTKtGFY8U%2Bkbs8muZh9Kz9DTWhpiS7ZZbXHZyC8EoNhXNqMKvxjL0GOqUBv1oain8DZsDY%2BtiI1qjeJlQ5pfSXKGOb0zHhuyrW3Y1cIRM1UE54RTi76iml9PGjsURUQokg4bWOf6RjMaxPB4aF%2But1fgkpmLPQ0hm36FQd7pv5%2B0D20Btj6V5LEPM74x1paVkHSDZ3nfHQfPv%2F0SpZRYeZQWWtEKR1LVZY42ASmb%2Fydyljj1gcSpLQsXunAvLif7cBtg6elhfm6bydfvcS11G5&X-Amz-Signature=3ac3250079ba18d39c8f93dace7146a5f21e1c1368c2285aafeb1aeec53fe2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5KOXU2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIC%2BBkP3afUEPYKJNG1z80VPDQgfrZMqOf84ltbWVGtvYAiEA7lDoX%2B%2BYlvAyinC9ZQL0BGrVp7EGp0pyN1X6MSxD1eEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN4NtZX56AjgQblMKSrcA8mbN4gomm7Yy92vLhtTbjSAgAdchiyZ4SLAHthfmKrclDaAbeYhPIv3OOcTtwXZNELqQgM125ILkyQZMmSNpOMLmOgUJtp%2Fdrw2hiOOedFg8Y6mFfRU3r3iVomd%2FLEhHXS61K2eX6E9Zam%2Bnc451lDHjxmAZiBEmY715S15t9ECs054TawrRPUTChwoQiFVWlXF0wLqABF3w4KE5ztWNScNqYG9XayqW7Rw85n3oUaCG2QhfX6Gd8Rj13Ci64l6ukwEbKqdoG9ZAv4m4YAUxNLQESilQgIkg8GizBmfSXMD5AjS%2BmPnnhhYUYKGMCuSBn3p1ZlKVOGS7eUyw14L39XsD6gdpsyPWoC0FgJ9ftqHZa6qI3sR%2BR0Ux4mgRjvFSe0SKUpUXK7Q1WqbE6TqQtVASRjtI371v8h8%2BOEKzr8UpY4tGVV%2F7e0VxYSM83Ec7Ma4EN7Y7ziZ3lj3fOUug%2BHDuuLwbsfSkWu3vOwsnCbrY1jT4dHgqN1GURB6eFeVFlLUPqI0pG2ZwQvPE22wyVFs6U5empVD8U6TUB8mkECEOQjc9%2BEQWHO5DIzYp4HKNPHtYD0LFUj%2Bp8yTKtGFY8U%2Bkbs8muZh9Kz9DTWhpiS7ZZbXHZyC8EoNhXNqMKvxjL0GOqUBv1oain8DZsDY%2BtiI1qjeJlQ5pfSXKGOb0zHhuyrW3Y1cIRM1UE54RTi76iml9PGjsURUQokg4bWOf6RjMaxPB4aF%2But1fgkpmLPQ0hm36FQd7pv5%2B0D20Btj6V5LEPM74x1paVkHSDZ3nfHQfPv%2F0SpZRYeZQWWtEKR1LVZY42ASmb%2Fydyljj1gcSpLQsXunAvLif7cBtg6elhfm6bydfvcS11G5&X-Amz-Signature=a06867134b3ca6d65c3654961af8f346000222dcb7533d9438d422a27caea863&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5KOXU2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIC%2BBkP3afUEPYKJNG1z80VPDQgfrZMqOf84ltbWVGtvYAiEA7lDoX%2B%2BYlvAyinC9ZQL0BGrVp7EGp0pyN1X6MSxD1eEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN4NtZX56AjgQblMKSrcA8mbN4gomm7Yy92vLhtTbjSAgAdchiyZ4SLAHthfmKrclDaAbeYhPIv3OOcTtwXZNELqQgM125ILkyQZMmSNpOMLmOgUJtp%2Fdrw2hiOOedFg8Y6mFfRU3r3iVomd%2FLEhHXS61K2eX6E9Zam%2Bnc451lDHjxmAZiBEmY715S15t9ECs054TawrRPUTChwoQiFVWlXF0wLqABF3w4KE5ztWNScNqYG9XayqW7Rw85n3oUaCG2QhfX6Gd8Rj13Ci64l6ukwEbKqdoG9ZAv4m4YAUxNLQESilQgIkg8GizBmfSXMD5AjS%2BmPnnhhYUYKGMCuSBn3p1ZlKVOGS7eUyw14L39XsD6gdpsyPWoC0FgJ9ftqHZa6qI3sR%2BR0Ux4mgRjvFSe0SKUpUXK7Q1WqbE6TqQtVASRjtI371v8h8%2BOEKzr8UpY4tGVV%2F7e0VxYSM83Ec7Ma4EN7Y7ziZ3lj3fOUug%2BHDuuLwbsfSkWu3vOwsnCbrY1jT4dHgqN1GURB6eFeVFlLUPqI0pG2ZwQvPE22wyVFs6U5empVD8U6TUB8mkECEOQjc9%2BEQWHO5DIzYp4HKNPHtYD0LFUj%2Bp8yTKtGFY8U%2Bkbs8muZh9Kz9DTWhpiS7ZZbXHZyC8EoNhXNqMKvxjL0GOqUBv1oain8DZsDY%2BtiI1qjeJlQ5pfSXKGOb0zHhuyrW3Y1cIRM1UE54RTi76iml9PGjsURUQokg4bWOf6RjMaxPB4aF%2But1fgkpmLPQ0hm36FQd7pv5%2B0D20Btj6V5LEPM74x1paVkHSDZ3nfHQfPv%2F0SpZRYeZQWWtEKR1LVZY42ASmb%2Fydyljj1gcSpLQsXunAvLif7cBtg6elhfm6bydfvcS11G5&X-Amz-Signature=252429491a9f8a4d49983934874d0557852a20ebb1c2f26416691ff75e940306&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
