---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMHU3H6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4qSvWgK0tUa1m1zqEZsnzkaXJgOW5aWuI8L7o5%2FjngIgbiwTYBD7loULICbPY31JxvjhHRFNAtfh5%2FfJX%2FSZxAkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7tH38MLLl0VWkSWCrcA%2Fbx8HqXd52G3G4WMPap2MlHVkD%2BozZDZa8RmlWZFkK%2B5W%2BJ9xI%2FFKYQAQSY4SNWafICpgm7NHTZNegQ9gRmaQhbtABZMkKGDeENvOqLg%2F1HaSALrF234VDzj7C1WwVauE5AnkqVCa8sJXhhwY%2FAQFLShrjhOUfPL7E05Ta0vosCEDMaNuDeT%2Fac2%2Fk9thuWngmWyc%2FtIR9f8c5AkPctci5WqI%2FuQ8N8TQ9WSwoiNCMP8a2EH1c7O7OcZMPlwngbrP%2FG88qoRjHb7ZKKurbxeUYgDZweYT2vXzPbjSvyxM5ZGQgxKDiEJS2Q2uCXbE9c5tC00eRqXr45Y9Pw1rKm6EFg53%2Byy5vBfIThycVJdE4uO9mkKd7j9AurWbhpGFmLZo1RRi2YIeQC2LiTtjZq%2BUfDw8ZfrW2orDdDJjIuAOSj7gCsZctefJImsRO7v%2BjNUlpmMzgm4xEi4ybd9KTyGkmsgt5E4%2Fo3I2lhaPZ1wCeQS0iqHEls9QE04Jzhu7Mw2j82%2BUWtNYpv10mbDBuH6vBcn1Dkft7W82js4KRfqgVLMKFA5EDF1BZFLQKWH94O%2Bg6LIjyWCMxhGDIM8Gz48wo6RbcmAD02zWsEsjlFlhQ3yntS1qFELevcqgvdMMCnw8MGOqUBT6hW47LCpwU%2F6yV%2BFo21o3dhzvyZ2fXfMv9Jv8y%2FDdR2yl3W3Xu3W4OcxpVxqRm84tfs72VCKniHLANukujhfrwmrAhVoCVQNnyfKa0SDrCVndO3S0XxislkN8wXw9%2FapvCG07oBPlXjA2%2FnAT9qq77NKVOxKSnzYGzGb6NbtkrFwqgFHoFCwI4ldLwyvxCRea%2FaL0vbB7s2esCF1qDEKt%2BYKP6T&X-Amz-Signature=16991b8223476425c520cf0c6f543807c5013b9a2780e81025e238487842fb66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMHU3H6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4qSvWgK0tUa1m1zqEZsnzkaXJgOW5aWuI8L7o5%2FjngIgbiwTYBD7loULICbPY31JxvjhHRFNAtfh5%2FfJX%2FSZxAkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7tH38MLLl0VWkSWCrcA%2Fbx8HqXd52G3G4WMPap2MlHVkD%2BozZDZa8RmlWZFkK%2B5W%2BJ9xI%2FFKYQAQSY4SNWafICpgm7NHTZNegQ9gRmaQhbtABZMkKGDeENvOqLg%2F1HaSALrF234VDzj7C1WwVauE5AnkqVCa8sJXhhwY%2FAQFLShrjhOUfPL7E05Ta0vosCEDMaNuDeT%2Fac2%2Fk9thuWngmWyc%2FtIR9f8c5AkPctci5WqI%2FuQ8N8TQ9WSwoiNCMP8a2EH1c7O7OcZMPlwngbrP%2FG88qoRjHb7ZKKurbxeUYgDZweYT2vXzPbjSvyxM5ZGQgxKDiEJS2Q2uCXbE9c5tC00eRqXr45Y9Pw1rKm6EFg53%2Byy5vBfIThycVJdE4uO9mkKd7j9AurWbhpGFmLZo1RRi2YIeQC2LiTtjZq%2BUfDw8ZfrW2orDdDJjIuAOSj7gCsZctefJImsRO7v%2BjNUlpmMzgm4xEi4ybd9KTyGkmsgt5E4%2Fo3I2lhaPZ1wCeQS0iqHEls9QE04Jzhu7Mw2j82%2BUWtNYpv10mbDBuH6vBcn1Dkft7W82js4KRfqgVLMKFA5EDF1BZFLQKWH94O%2Bg6LIjyWCMxhGDIM8Gz48wo6RbcmAD02zWsEsjlFlhQ3yntS1qFELevcqgvdMMCnw8MGOqUBT6hW47LCpwU%2F6yV%2BFo21o3dhzvyZ2fXfMv9Jv8y%2FDdR2yl3W3Xu3W4OcxpVxqRm84tfs72VCKniHLANukujhfrwmrAhVoCVQNnyfKa0SDrCVndO3S0XxislkN8wXw9%2FapvCG07oBPlXjA2%2FnAT9qq77NKVOxKSnzYGzGb6NbtkrFwqgFHoFCwI4ldLwyvxCRea%2FaL0vbB7s2esCF1qDEKt%2BYKP6T&X-Amz-Signature=16c18c525df2398cf129de9a3878fc023cab961c73fb19b5648f58c87fd56700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMHU3H6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4qSvWgK0tUa1m1zqEZsnzkaXJgOW5aWuI8L7o5%2FjngIgbiwTYBD7loULICbPY31JxvjhHRFNAtfh5%2FfJX%2FSZxAkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7tH38MLLl0VWkSWCrcA%2Fbx8HqXd52G3G4WMPap2MlHVkD%2BozZDZa8RmlWZFkK%2B5W%2BJ9xI%2FFKYQAQSY4SNWafICpgm7NHTZNegQ9gRmaQhbtABZMkKGDeENvOqLg%2F1HaSALrF234VDzj7C1WwVauE5AnkqVCa8sJXhhwY%2FAQFLShrjhOUfPL7E05Ta0vosCEDMaNuDeT%2Fac2%2Fk9thuWngmWyc%2FtIR9f8c5AkPctci5WqI%2FuQ8N8TQ9WSwoiNCMP8a2EH1c7O7OcZMPlwngbrP%2FG88qoRjHb7ZKKurbxeUYgDZweYT2vXzPbjSvyxM5ZGQgxKDiEJS2Q2uCXbE9c5tC00eRqXr45Y9Pw1rKm6EFg53%2Byy5vBfIThycVJdE4uO9mkKd7j9AurWbhpGFmLZo1RRi2YIeQC2LiTtjZq%2BUfDw8ZfrW2orDdDJjIuAOSj7gCsZctefJImsRO7v%2BjNUlpmMzgm4xEi4ybd9KTyGkmsgt5E4%2Fo3I2lhaPZ1wCeQS0iqHEls9QE04Jzhu7Mw2j82%2BUWtNYpv10mbDBuH6vBcn1Dkft7W82js4KRfqgVLMKFA5EDF1BZFLQKWH94O%2Bg6LIjyWCMxhGDIM8Gz48wo6RbcmAD02zWsEsjlFlhQ3yntS1qFELevcqgvdMMCnw8MGOqUBT6hW47LCpwU%2F6yV%2BFo21o3dhzvyZ2fXfMv9Jv8y%2FDdR2yl3W3Xu3W4OcxpVxqRm84tfs72VCKniHLANukujhfrwmrAhVoCVQNnyfKa0SDrCVndO3S0XxislkN8wXw9%2FapvCG07oBPlXjA2%2FnAT9qq77NKVOxKSnzYGzGb6NbtkrFwqgFHoFCwI4ldLwyvxCRea%2FaL0vbB7s2esCF1qDEKt%2BYKP6T&X-Amz-Signature=9eab21f9fdc1a92b9475b9aac6760ba42f58cb1a191b9b48c1b8434a8ed5b21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMHU3H6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4qSvWgK0tUa1m1zqEZsnzkaXJgOW5aWuI8L7o5%2FjngIgbiwTYBD7loULICbPY31JxvjhHRFNAtfh5%2FfJX%2FSZxAkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7tH38MLLl0VWkSWCrcA%2Fbx8HqXd52G3G4WMPap2MlHVkD%2BozZDZa8RmlWZFkK%2B5W%2BJ9xI%2FFKYQAQSY4SNWafICpgm7NHTZNegQ9gRmaQhbtABZMkKGDeENvOqLg%2F1HaSALrF234VDzj7C1WwVauE5AnkqVCa8sJXhhwY%2FAQFLShrjhOUfPL7E05Ta0vosCEDMaNuDeT%2Fac2%2Fk9thuWngmWyc%2FtIR9f8c5AkPctci5WqI%2FuQ8N8TQ9WSwoiNCMP8a2EH1c7O7OcZMPlwngbrP%2FG88qoRjHb7ZKKurbxeUYgDZweYT2vXzPbjSvyxM5ZGQgxKDiEJS2Q2uCXbE9c5tC00eRqXr45Y9Pw1rKm6EFg53%2Byy5vBfIThycVJdE4uO9mkKd7j9AurWbhpGFmLZo1RRi2YIeQC2LiTtjZq%2BUfDw8ZfrW2orDdDJjIuAOSj7gCsZctefJImsRO7v%2BjNUlpmMzgm4xEi4ybd9KTyGkmsgt5E4%2Fo3I2lhaPZ1wCeQS0iqHEls9QE04Jzhu7Mw2j82%2BUWtNYpv10mbDBuH6vBcn1Dkft7W82js4KRfqgVLMKFA5EDF1BZFLQKWH94O%2Bg6LIjyWCMxhGDIM8Gz48wo6RbcmAD02zWsEsjlFlhQ3yntS1qFELevcqgvdMMCnw8MGOqUBT6hW47LCpwU%2F6yV%2BFo21o3dhzvyZ2fXfMv9Jv8y%2FDdR2yl3W3Xu3W4OcxpVxqRm84tfs72VCKniHLANukujhfrwmrAhVoCVQNnyfKa0SDrCVndO3S0XxislkN8wXw9%2FapvCG07oBPlXjA2%2FnAT9qq77NKVOxKSnzYGzGb6NbtkrFwqgFHoFCwI4ldLwyvxCRea%2FaL0vbB7s2esCF1qDEKt%2BYKP6T&X-Amz-Signature=208bf2e186d690ebabfb2b2d924597a80c8054d4258449879bd84a5b3df0c810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMHU3H6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4qSvWgK0tUa1m1zqEZsnzkaXJgOW5aWuI8L7o5%2FjngIgbiwTYBD7loULICbPY31JxvjhHRFNAtfh5%2FfJX%2FSZxAkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7tH38MLLl0VWkSWCrcA%2Fbx8HqXd52G3G4WMPap2MlHVkD%2BozZDZa8RmlWZFkK%2B5W%2BJ9xI%2FFKYQAQSY4SNWafICpgm7NHTZNegQ9gRmaQhbtABZMkKGDeENvOqLg%2F1HaSALrF234VDzj7C1WwVauE5AnkqVCa8sJXhhwY%2FAQFLShrjhOUfPL7E05Ta0vosCEDMaNuDeT%2Fac2%2Fk9thuWngmWyc%2FtIR9f8c5AkPctci5WqI%2FuQ8N8TQ9WSwoiNCMP8a2EH1c7O7OcZMPlwngbrP%2FG88qoRjHb7ZKKurbxeUYgDZweYT2vXzPbjSvyxM5ZGQgxKDiEJS2Q2uCXbE9c5tC00eRqXr45Y9Pw1rKm6EFg53%2Byy5vBfIThycVJdE4uO9mkKd7j9AurWbhpGFmLZo1RRi2YIeQC2LiTtjZq%2BUfDw8ZfrW2orDdDJjIuAOSj7gCsZctefJImsRO7v%2BjNUlpmMzgm4xEi4ybd9KTyGkmsgt5E4%2Fo3I2lhaPZ1wCeQS0iqHEls9QE04Jzhu7Mw2j82%2BUWtNYpv10mbDBuH6vBcn1Dkft7W82js4KRfqgVLMKFA5EDF1BZFLQKWH94O%2Bg6LIjyWCMxhGDIM8Gz48wo6RbcmAD02zWsEsjlFlhQ3yntS1qFELevcqgvdMMCnw8MGOqUBT6hW47LCpwU%2F6yV%2BFo21o3dhzvyZ2fXfMv9Jv8y%2FDdR2yl3W3Xu3W4OcxpVxqRm84tfs72VCKniHLANukujhfrwmrAhVoCVQNnyfKa0SDrCVndO3S0XxislkN8wXw9%2FapvCG07oBPlXjA2%2FnAT9qq77NKVOxKSnzYGzGb6NbtkrFwqgFHoFCwI4ldLwyvxCRea%2FaL0vbB7s2esCF1qDEKt%2BYKP6T&X-Amz-Signature=6c96cd69fbee42e97b474d4afc92569f156b28b811be9aad03785cab36a26597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMHU3H6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4qSvWgK0tUa1m1zqEZsnzkaXJgOW5aWuI8L7o5%2FjngIgbiwTYBD7loULICbPY31JxvjhHRFNAtfh5%2FfJX%2FSZxAkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7tH38MLLl0VWkSWCrcA%2Fbx8HqXd52G3G4WMPap2MlHVkD%2BozZDZa8RmlWZFkK%2B5W%2BJ9xI%2FFKYQAQSY4SNWafICpgm7NHTZNegQ9gRmaQhbtABZMkKGDeENvOqLg%2F1HaSALrF234VDzj7C1WwVauE5AnkqVCa8sJXhhwY%2FAQFLShrjhOUfPL7E05Ta0vosCEDMaNuDeT%2Fac2%2Fk9thuWngmWyc%2FtIR9f8c5AkPctci5WqI%2FuQ8N8TQ9WSwoiNCMP8a2EH1c7O7OcZMPlwngbrP%2FG88qoRjHb7ZKKurbxeUYgDZweYT2vXzPbjSvyxM5ZGQgxKDiEJS2Q2uCXbE9c5tC00eRqXr45Y9Pw1rKm6EFg53%2Byy5vBfIThycVJdE4uO9mkKd7j9AurWbhpGFmLZo1RRi2YIeQC2LiTtjZq%2BUfDw8ZfrW2orDdDJjIuAOSj7gCsZctefJImsRO7v%2BjNUlpmMzgm4xEi4ybd9KTyGkmsgt5E4%2Fo3I2lhaPZ1wCeQS0iqHEls9QE04Jzhu7Mw2j82%2BUWtNYpv10mbDBuH6vBcn1Dkft7W82js4KRfqgVLMKFA5EDF1BZFLQKWH94O%2Bg6LIjyWCMxhGDIM8Gz48wo6RbcmAD02zWsEsjlFlhQ3yntS1qFELevcqgvdMMCnw8MGOqUBT6hW47LCpwU%2F6yV%2BFo21o3dhzvyZ2fXfMv9Jv8y%2FDdR2yl3W3Xu3W4OcxpVxqRm84tfs72VCKniHLANukujhfrwmrAhVoCVQNnyfKa0SDrCVndO3S0XxislkN8wXw9%2FapvCG07oBPlXjA2%2FnAT9qq77NKVOxKSnzYGzGb6NbtkrFwqgFHoFCwI4ldLwyvxCRea%2FaL0vbB7s2esCF1qDEKt%2BYKP6T&X-Amz-Signature=003666deedc924514ac9289e19f471838be65cada0c7bdde7ec4b8751c142f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMHU3H6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4qSvWgK0tUa1m1zqEZsnzkaXJgOW5aWuI8L7o5%2FjngIgbiwTYBD7loULICbPY31JxvjhHRFNAtfh5%2FfJX%2FSZxAkqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7tH38MLLl0VWkSWCrcA%2Fbx8HqXd52G3G4WMPap2MlHVkD%2BozZDZa8RmlWZFkK%2B5W%2BJ9xI%2FFKYQAQSY4SNWafICpgm7NHTZNegQ9gRmaQhbtABZMkKGDeENvOqLg%2F1HaSALrF234VDzj7C1WwVauE5AnkqVCa8sJXhhwY%2FAQFLShrjhOUfPL7E05Ta0vosCEDMaNuDeT%2Fac2%2Fk9thuWngmWyc%2FtIR9f8c5AkPctci5WqI%2FuQ8N8TQ9WSwoiNCMP8a2EH1c7O7OcZMPlwngbrP%2FG88qoRjHb7ZKKurbxeUYgDZweYT2vXzPbjSvyxM5ZGQgxKDiEJS2Q2uCXbE9c5tC00eRqXr45Y9Pw1rKm6EFg53%2Byy5vBfIThycVJdE4uO9mkKd7j9AurWbhpGFmLZo1RRi2YIeQC2LiTtjZq%2BUfDw8ZfrW2orDdDJjIuAOSj7gCsZctefJImsRO7v%2BjNUlpmMzgm4xEi4ybd9KTyGkmsgt5E4%2Fo3I2lhaPZ1wCeQS0iqHEls9QE04Jzhu7Mw2j82%2BUWtNYpv10mbDBuH6vBcn1Dkft7W82js4KRfqgVLMKFA5EDF1BZFLQKWH94O%2Bg6LIjyWCMxhGDIM8Gz48wo6RbcmAD02zWsEsjlFlhQ3yntS1qFELevcqgvdMMCnw8MGOqUBT6hW47LCpwU%2F6yV%2BFo21o3dhzvyZ2fXfMv9Jv8y%2FDdR2yl3W3Xu3W4OcxpVxqRm84tfs72VCKniHLANukujhfrwmrAhVoCVQNnyfKa0SDrCVndO3S0XxislkN8wXw9%2FapvCG07oBPlXjA2%2FnAT9qq77NKVOxKSnzYGzGb6NbtkrFwqgFHoFCwI4ldLwyvxCRea%2FaL0vbB7s2esCF1qDEKt%2BYKP6T&X-Amz-Signature=2c313d88c52eb727acf3cf6c784185d63eebff539bc698bff96692aebaf0fa01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
