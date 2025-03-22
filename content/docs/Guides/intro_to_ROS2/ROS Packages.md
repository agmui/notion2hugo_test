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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWK5EQV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFbISB1QqfDUbkU5sIqhlTQDK%2BxNiOa4rOJK%2BanrAgWQIhANdK%2BlsEdRSfuMsS%2BXb9%2B%2FlrixyXkaNi8c9YIKQ33qgjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJa%2Fwi1JBBdcowBdAq3AOTptwxqAZjG9SS9jpmiXiD%2BBzjNDtwlb4f8mTaVcjR6Wlbwir8bJAsInD%2Boc8XKPPli2KW2dYkyyxwDevv6iulcr7NypY7VnxxdRtbXucJ6CFV7DLl%2B8lR2y7zTHdqGKJOpVgGX3bRwxLU12XjzFu9%2BnTwmT9vzSnhdsxdU8nSefBHsd4nYmq4qTmTOBxbmKqPQ5ZFqWSpb0a7IoD11etFd1Y8HBskb4Th9%2FOIlAOCe9XG19dE9m4NdUivwemcXH%2FaPTRxOqp1GZypTuZwS0qQyCHu9Z2JSztZ%2Fwjw%2BCZakFJXVCpAeUNUKhaJ%2FFchJQgt6pjAcbFMUoSM8l15uBd6oZV76XKBO0o6NGIakyBwydQ9SQNJQ87aCk8DSR%2Bm%2BgYYgetsDwTnrv8JwyaagfmNPUdP5R111QdWU3pUZJW6s%2FgVnXDUOvW3w5NuXRs2PQZYknve0rDhqyPeXTeW6fnJCaBKoksNSQtvESZbnV4tj853TMWtXgqVae15ePyq8dq5h3J0uOmEA4nCzq3asmkWrwfydxUBcRuE6C9lxCkd7l7%2Fvd7VEE8GIN1UmIW%2FPriWDEASZeJ4tktqn4Gl99JT4tTumDIn1B8lZnYRWTnP60zGYYXDBQUakpJkNTClu%2Fi%2BBjqkAWJ3HKdjKhMHxnFUH5HzrsmaejoUOePFV2vFuoTa7QXMX0XOvLPQnS6xgfoW9Nvg23osxk33fHZV%2F6%2F0SIPJ%2FRj8VZKTJe7te7wupUIG1Q7ELFisK7Iny4vJRz%2FWMm%2Bp1XrjRh%2FjwfJfg1OPRBYT3yKe4481XOn00cddGhz4GzdEgN680772hKSBQzGg7AjuJ2bjeFdyFi%2B8ozWDyKbNKyVrtuu6&X-Amz-Signature=c36a30d78cb4c4e137b865dd9b62d3c69c1cb4d14372a27669cb800a315e758b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWK5EQV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFbISB1QqfDUbkU5sIqhlTQDK%2BxNiOa4rOJK%2BanrAgWQIhANdK%2BlsEdRSfuMsS%2BXb9%2B%2FlrixyXkaNi8c9YIKQ33qgjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJa%2Fwi1JBBdcowBdAq3AOTptwxqAZjG9SS9jpmiXiD%2BBzjNDtwlb4f8mTaVcjR6Wlbwir8bJAsInD%2Boc8XKPPli2KW2dYkyyxwDevv6iulcr7NypY7VnxxdRtbXucJ6CFV7DLl%2B8lR2y7zTHdqGKJOpVgGX3bRwxLU12XjzFu9%2BnTwmT9vzSnhdsxdU8nSefBHsd4nYmq4qTmTOBxbmKqPQ5ZFqWSpb0a7IoD11etFd1Y8HBskb4Th9%2FOIlAOCe9XG19dE9m4NdUivwemcXH%2FaPTRxOqp1GZypTuZwS0qQyCHu9Z2JSztZ%2Fwjw%2BCZakFJXVCpAeUNUKhaJ%2FFchJQgt6pjAcbFMUoSM8l15uBd6oZV76XKBO0o6NGIakyBwydQ9SQNJQ87aCk8DSR%2Bm%2BgYYgetsDwTnrv8JwyaagfmNPUdP5R111QdWU3pUZJW6s%2FgVnXDUOvW3w5NuXRs2PQZYknve0rDhqyPeXTeW6fnJCaBKoksNSQtvESZbnV4tj853TMWtXgqVae15ePyq8dq5h3J0uOmEA4nCzq3asmkWrwfydxUBcRuE6C9lxCkd7l7%2Fvd7VEE8GIN1UmIW%2FPriWDEASZeJ4tktqn4Gl99JT4tTumDIn1B8lZnYRWTnP60zGYYXDBQUakpJkNTClu%2Fi%2BBjqkAWJ3HKdjKhMHxnFUH5HzrsmaejoUOePFV2vFuoTa7QXMX0XOvLPQnS6xgfoW9Nvg23osxk33fHZV%2F6%2F0SIPJ%2FRj8VZKTJe7te7wupUIG1Q7ELFisK7Iny4vJRz%2FWMm%2Bp1XrjRh%2FjwfJfg1OPRBYT3yKe4481XOn00cddGhz4GzdEgN680772hKSBQzGg7AjuJ2bjeFdyFi%2B8ozWDyKbNKyVrtuu6&X-Amz-Signature=01e3d9912d28328a56ed786202a06540bcd62aa4bdf706b1ae53735934fbbcd0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWK5EQV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFbISB1QqfDUbkU5sIqhlTQDK%2BxNiOa4rOJK%2BanrAgWQIhANdK%2BlsEdRSfuMsS%2BXb9%2B%2FlrixyXkaNi8c9YIKQ33qgjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJa%2Fwi1JBBdcowBdAq3AOTptwxqAZjG9SS9jpmiXiD%2BBzjNDtwlb4f8mTaVcjR6Wlbwir8bJAsInD%2Boc8XKPPli2KW2dYkyyxwDevv6iulcr7NypY7VnxxdRtbXucJ6CFV7DLl%2B8lR2y7zTHdqGKJOpVgGX3bRwxLU12XjzFu9%2BnTwmT9vzSnhdsxdU8nSefBHsd4nYmq4qTmTOBxbmKqPQ5ZFqWSpb0a7IoD11etFd1Y8HBskb4Th9%2FOIlAOCe9XG19dE9m4NdUivwemcXH%2FaPTRxOqp1GZypTuZwS0qQyCHu9Z2JSztZ%2Fwjw%2BCZakFJXVCpAeUNUKhaJ%2FFchJQgt6pjAcbFMUoSM8l15uBd6oZV76XKBO0o6NGIakyBwydQ9SQNJQ87aCk8DSR%2Bm%2BgYYgetsDwTnrv8JwyaagfmNPUdP5R111QdWU3pUZJW6s%2FgVnXDUOvW3w5NuXRs2PQZYknve0rDhqyPeXTeW6fnJCaBKoksNSQtvESZbnV4tj853TMWtXgqVae15ePyq8dq5h3J0uOmEA4nCzq3asmkWrwfydxUBcRuE6C9lxCkd7l7%2Fvd7VEE8GIN1UmIW%2FPriWDEASZeJ4tktqn4Gl99JT4tTumDIn1B8lZnYRWTnP60zGYYXDBQUakpJkNTClu%2Fi%2BBjqkAWJ3HKdjKhMHxnFUH5HzrsmaejoUOePFV2vFuoTa7QXMX0XOvLPQnS6xgfoW9Nvg23osxk33fHZV%2F6%2F0SIPJ%2FRj8VZKTJe7te7wupUIG1Q7ELFisK7Iny4vJRz%2FWMm%2Bp1XrjRh%2FjwfJfg1OPRBYT3yKe4481XOn00cddGhz4GzdEgN680772hKSBQzGg7AjuJ2bjeFdyFi%2B8ozWDyKbNKyVrtuu6&X-Amz-Signature=ae8e3170cbecd74a065db43c1044ea407284e3c59d5590e53b3918410805be7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWK5EQV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFbISB1QqfDUbkU5sIqhlTQDK%2BxNiOa4rOJK%2BanrAgWQIhANdK%2BlsEdRSfuMsS%2BXb9%2B%2FlrixyXkaNi8c9YIKQ33qgjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJa%2Fwi1JBBdcowBdAq3AOTptwxqAZjG9SS9jpmiXiD%2BBzjNDtwlb4f8mTaVcjR6Wlbwir8bJAsInD%2Boc8XKPPli2KW2dYkyyxwDevv6iulcr7NypY7VnxxdRtbXucJ6CFV7DLl%2B8lR2y7zTHdqGKJOpVgGX3bRwxLU12XjzFu9%2BnTwmT9vzSnhdsxdU8nSefBHsd4nYmq4qTmTOBxbmKqPQ5ZFqWSpb0a7IoD11etFd1Y8HBskb4Th9%2FOIlAOCe9XG19dE9m4NdUivwemcXH%2FaPTRxOqp1GZypTuZwS0qQyCHu9Z2JSztZ%2Fwjw%2BCZakFJXVCpAeUNUKhaJ%2FFchJQgt6pjAcbFMUoSM8l15uBd6oZV76XKBO0o6NGIakyBwydQ9SQNJQ87aCk8DSR%2Bm%2BgYYgetsDwTnrv8JwyaagfmNPUdP5R111QdWU3pUZJW6s%2FgVnXDUOvW3w5NuXRs2PQZYknve0rDhqyPeXTeW6fnJCaBKoksNSQtvESZbnV4tj853TMWtXgqVae15ePyq8dq5h3J0uOmEA4nCzq3asmkWrwfydxUBcRuE6C9lxCkd7l7%2Fvd7VEE8GIN1UmIW%2FPriWDEASZeJ4tktqn4Gl99JT4tTumDIn1B8lZnYRWTnP60zGYYXDBQUakpJkNTClu%2Fi%2BBjqkAWJ3HKdjKhMHxnFUH5HzrsmaejoUOePFV2vFuoTa7QXMX0XOvLPQnS6xgfoW9Nvg23osxk33fHZV%2F6%2F0SIPJ%2FRj8VZKTJe7te7wupUIG1Q7ELFisK7Iny4vJRz%2FWMm%2Bp1XrjRh%2FjwfJfg1OPRBYT3yKe4481XOn00cddGhz4GzdEgN680772hKSBQzGg7AjuJ2bjeFdyFi%2B8ozWDyKbNKyVrtuu6&X-Amz-Signature=e3f7151ccadcd9a7d20b280be1472c46df68a2919bc4e6c6368daf074faaeec8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWK5EQV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFbISB1QqfDUbkU5sIqhlTQDK%2BxNiOa4rOJK%2BanrAgWQIhANdK%2BlsEdRSfuMsS%2BXb9%2B%2FlrixyXkaNi8c9YIKQ33qgjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJa%2Fwi1JBBdcowBdAq3AOTptwxqAZjG9SS9jpmiXiD%2BBzjNDtwlb4f8mTaVcjR6Wlbwir8bJAsInD%2Boc8XKPPli2KW2dYkyyxwDevv6iulcr7NypY7VnxxdRtbXucJ6CFV7DLl%2B8lR2y7zTHdqGKJOpVgGX3bRwxLU12XjzFu9%2BnTwmT9vzSnhdsxdU8nSefBHsd4nYmq4qTmTOBxbmKqPQ5ZFqWSpb0a7IoD11etFd1Y8HBskb4Th9%2FOIlAOCe9XG19dE9m4NdUivwemcXH%2FaPTRxOqp1GZypTuZwS0qQyCHu9Z2JSztZ%2Fwjw%2BCZakFJXVCpAeUNUKhaJ%2FFchJQgt6pjAcbFMUoSM8l15uBd6oZV76XKBO0o6NGIakyBwydQ9SQNJQ87aCk8DSR%2Bm%2BgYYgetsDwTnrv8JwyaagfmNPUdP5R111QdWU3pUZJW6s%2FgVnXDUOvW3w5NuXRs2PQZYknve0rDhqyPeXTeW6fnJCaBKoksNSQtvESZbnV4tj853TMWtXgqVae15ePyq8dq5h3J0uOmEA4nCzq3asmkWrwfydxUBcRuE6C9lxCkd7l7%2Fvd7VEE8GIN1UmIW%2FPriWDEASZeJ4tktqn4Gl99JT4tTumDIn1B8lZnYRWTnP60zGYYXDBQUakpJkNTClu%2Fi%2BBjqkAWJ3HKdjKhMHxnFUH5HzrsmaejoUOePFV2vFuoTa7QXMX0XOvLPQnS6xgfoW9Nvg23osxk33fHZV%2F6%2F0SIPJ%2FRj8VZKTJe7te7wupUIG1Q7ELFisK7Iny4vJRz%2FWMm%2Bp1XrjRh%2FjwfJfg1OPRBYT3yKe4481XOn00cddGhz4GzdEgN680772hKSBQzGg7AjuJ2bjeFdyFi%2B8ozWDyKbNKyVrtuu6&X-Amz-Signature=b797e2a6b77ca1f881c45024826a93347ac6f9c0dab5b0a52baf2c905e188b57&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWK5EQV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFbISB1QqfDUbkU5sIqhlTQDK%2BxNiOa4rOJK%2BanrAgWQIhANdK%2BlsEdRSfuMsS%2BXb9%2B%2FlrixyXkaNi8c9YIKQ33qgjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJa%2Fwi1JBBdcowBdAq3AOTptwxqAZjG9SS9jpmiXiD%2BBzjNDtwlb4f8mTaVcjR6Wlbwir8bJAsInD%2Boc8XKPPli2KW2dYkyyxwDevv6iulcr7NypY7VnxxdRtbXucJ6CFV7DLl%2B8lR2y7zTHdqGKJOpVgGX3bRwxLU12XjzFu9%2BnTwmT9vzSnhdsxdU8nSefBHsd4nYmq4qTmTOBxbmKqPQ5ZFqWSpb0a7IoD11etFd1Y8HBskb4Th9%2FOIlAOCe9XG19dE9m4NdUivwemcXH%2FaPTRxOqp1GZypTuZwS0qQyCHu9Z2JSztZ%2Fwjw%2BCZakFJXVCpAeUNUKhaJ%2FFchJQgt6pjAcbFMUoSM8l15uBd6oZV76XKBO0o6NGIakyBwydQ9SQNJQ87aCk8DSR%2Bm%2BgYYgetsDwTnrv8JwyaagfmNPUdP5R111QdWU3pUZJW6s%2FgVnXDUOvW3w5NuXRs2PQZYknve0rDhqyPeXTeW6fnJCaBKoksNSQtvESZbnV4tj853TMWtXgqVae15ePyq8dq5h3J0uOmEA4nCzq3asmkWrwfydxUBcRuE6C9lxCkd7l7%2Fvd7VEE8GIN1UmIW%2FPriWDEASZeJ4tktqn4Gl99JT4tTumDIn1B8lZnYRWTnP60zGYYXDBQUakpJkNTClu%2Fi%2BBjqkAWJ3HKdjKhMHxnFUH5HzrsmaejoUOePFV2vFuoTa7QXMX0XOvLPQnS6xgfoW9Nvg23osxk33fHZV%2F6%2F0SIPJ%2FRj8VZKTJe7te7wupUIG1Q7ELFisK7Iny4vJRz%2FWMm%2Bp1XrjRh%2FjwfJfg1OPRBYT3yKe4481XOn00cddGhz4GzdEgN680772hKSBQzGg7AjuJ2bjeFdyFi%2B8ozWDyKbNKyVrtuu6&X-Amz-Signature=034951caa740e4fbb2d009b1a551921a3eb9ddc4bc204e0894d2c8f00c3c50a4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWK5EQV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCFbISB1QqfDUbkU5sIqhlTQDK%2BxNiOa4rOJK%2BanrAgWQIhANdK%2BlsEdRSfuMsS%2BXb9%2B%2FlrixyXkaNi8c9YIKQ33qgjKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJa%2Fwi1JBBdcowBdAq3AOTptwxqAZjG9SS9jpmiXiD%2BBzjNDtwlb4f8mTaVcjR6Wlbwir8bJAsInD%2Boc8XKPPli2KW2dYkyyxwDevv6iulcr7NypY7VnxxdRtbXucJ6CFV7DLl%2B8lR2y7zTHdqGKJOpVgGX3bRwxLU12XjzFu9%2BnTwmT9vzSnhdsxdU8nSefBHsd4nYmq4qTmTOBxbmKqPQ5ZFqWSpb0a7IoD11etFd1Y8HBskb4Th9%2FOIlAOCe9XG19dE9m4NdUivwemcXH%2FaPTRxOqp1GZypTuZwS0qQyCHu9Z2JSztZ%2Fwjw%2BCZakFJXVCpAeUNUKhaJ%2FFchJQgt6pjAcbFMUoSM8l15uBd6oZV76XKBO0o6NGIakyBwydQ9SQNJQ87aCk8DSR%2Bm%2BgYYgetsDwTnrv8JwyaagfmNPUdP5R111QdWU3pUZJW6s%2FgVnXDUOvW3w5NuXRs2PQZYknve0rDhqyPeXTeW6fnJCaBKoksNSQtvESZbnV4tj853TMWtXgqVae15ePyq8dq5h3J0uOmEA4nCzq3asmkWrwfydxUBcRuE6C9lxCkd7l7%2Fvd7VEE8GIN1UmIW%2FPriWDEASZeJ4tktqn4Gl99JT4tTumDIn1B8lZnYRWTnP60zGYYXDBQUakpJkNTClu%2Fi%2BBjqkAWJ3HKdjKhMHxnFUH5HzrsmaejoUOePFV2vFuoTa7QXMX0XOvLPQnS6xgfoW9Nvg23osxk33fHZV%2F6%2F0SIPJ%2FRj8VZKTJe7te7wupUIG1Q7ELFisK7Iny4vJRz%2FWMm%2Bp1XrjRh%2FjwfJfg1OPRBYT3yKe4481XOn00cddGhz4GzdEgN680772hKSBQzGg7AjuJ2bjeFdyFi%2B8ozWDyKbNKyVrtuu6&X-Amz-Signature=db79807b436ff51a302a1b2ea5e7809f75dbd57a36402cc6bef163623a7417d1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
