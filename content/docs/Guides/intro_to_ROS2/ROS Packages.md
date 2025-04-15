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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNM5NXFR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs8Y4c3Qvm4PTycaW%2BE1Tlm3a2%2FqBwXMhsDqx4GymhJAiAYrGt8qF2QQIyu5QDTt9kMhIg8QcpCHJsMOjoN0rVbwir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMec2%2B6583Pg5I0ZZjKtwDhAjVqvrrsr2039XWerE0diFdywU0O9SazAq8zHsSO9rVs7AWTkwLD%2B8xXRUDtDhi0dtlOgCk7ge3sckszQfktp1sMO%2FDZJgX%2BRKAC5wSOILq02OBRh4b9Wyoecb1e4iMLe7cH%2BNACaQ8dL5F%2BAaF94VYgME0oegaOqiWl66HxtHAniyrFANtfPd91BDvmMKSuonl9aN3WQ%2F1O67hjc%2F7NnWPlMRmG3IDqAgNEV0E7u4IQJzbAcQgOYnOJrfXZBz6DlJdnwuirSQBLWAiW%2FgcpZQ5tQQwJ3nAoZaA7StQ0Gu0zyWZrrk%2FFZkUQ8kaF%2F7qc7fnyIinBvGO%2FkhCQBQCzuT7PMTeBtL3HWMTERGhOzvRSzRoWlib1yUIaW4e4jxjcpUn1aQ4u3wNqdEi55%2FqCpbUwkhX4visvNmQr0mcZc3WPRumoQoqWp62qHnYPyOwri8PX1ugURNsVA%2FZNEiiBfyiIiKJzlucoClkQaes8Z9u2UvX9GAWudT3Ap5D8yT7YOCLh3ojK%2BLqoB6AqAwLuRVJ%2BYLI%2FvQNTnkJ%2Fw7ZM2AA%2FzFjTDg9ZaaX7n1wuLdUJeY8PwNp0BABk0HwaMnRPCfzTC9cpnGanfTVKlzu4wi9p1f9tzfiZv5e58kwis%2F4vwY6pgHVIv2MGyJqLTPVyRxhk1Z0ZXqL54L8gxAM4OuKiThgLJMFW8OdwPKrgJTq6Nghv%2FguPNnvbRbqMlREb%2FD%2FLEOReB%2BaVR9%2F%2BCEqAL1ILvYAIUfyau9mrV%2Fjw6pieN6nRX4KXMPToAe%2B3abEpE9NJjsKq%2FIwv2UoaCz2QVnqidiomtvhtKzLndFyiJ4R8IbwFJGWZ3l4FmjpCSYLkR%2B3yuDyuqBJvOH8&X-Amz-Signature=cbe638b21d40b6f465f34f62e2d599b953b96167f9af0b17aa8d29f1a87e20b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNM5NXFR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs8Y4c3Qvm4PTycaW%2BE1Tlm3a2%2FqBwXMhsDqx4GymhJAiAYrGt8qF2QQIyu5QDTt9kMhIg8QcpCHJsMOjoN0rVbwir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMec2%2B6583Pg5I0ZZjKtwDhAjVqvrrsr2039XWerE0diFdywU0O9SazAq8zHsSO9rVs7AWTkwLD%2B8xXRUDtDhi0dtlOgCk7ge3sckszQfktp1sMO%2FDZJgX%2BRKAC5wSOILq02OBRh4b9Wyoecb1e4iMLe7cH%2BNACaQ8dL5F%2BAaF94VYgME0oegaOqiWl66HxtHAniyrFANtfPd91BDvmMKSuonl9aN3WQ%2F1O67hjc%2F7NnWPlMRmG3IDqAgNEV0E7u4IQJzbAcQgOYnOJrfXZBz6DlJdnwuirSQBLWAiW%2FgcpZQ5tQQwJ3nAoZaA7StQ0Gu0zyWZrrk%2FFZkUQ8kaF%2F7qc7fnyIinBvGO%2FkhCQBQCzuT7PMTeBtL3HWMTERGhOzvRSzRoWlib1yUIaW4e4jxjcpUn1aQ4u3wNqdEi55%2FqCpbUwkhX4visvNmQr0mcZc3WPRumoQoqWp62qHnYPyOwri8PX1ugURNsVA%2FZNEiiBfyiIiKJzlucoClkQaes8Z9u2UvX9GAWudT3Ap5D8yT7YOCLh3ojK%2BLqoB6AqAwLuRVJ%2BYLI%2FvQNTnkJ%2Fw7ZM2AA%2FzFjTDg9ZaaX7n1wuLdUJeY8PwNp0BABk0HwaMnRPCfzTC9cpnGanfTVKlzu4wi9p1f9tzfiZv5e58kwis%2F4vwY6pgHVIv2MGyJqLTPVyRxhk1Z0ZXqL54L8gxAM4OuKiThgLJMFW8OdwPKrgJTq6Nghv%2FguPNnvbRbqMlREb%2FD%2FLEOReB%2BaVR9%2F%2BCEqAL1ILvYAIUfyau9mrV%2Fjw6pieN6nRX4KXMPToAe%2B3abEpE9NJjsKq%2FIwv2UoaCz2QVnqidiomtvhtKzLndFyiJ4R8IbwFJGWZ3l4FmjpCSYLkR%2B3yuDyuqBJvOH8&X-Amz-Signature=4bdf45d537b9e75ec235dfe7e84add6528005e53435fd3177443393920d946c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNM5NXFR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs8Y4c3Qvm4PTycaW%2BE1Tlm3a2%2FqBwXMhsDqx4GymhJAiAYrGt8qF2QQIyu5QDTt9kMhIg8QcpCHJsMOjoN0rVbwir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMec2%2B6583Pg5I0ZZjKtwDhAjVqvrrsr2039XWerE0diFdywU0O9SazAq8zHsSO9rVs7AWTkwLD%2B8xXRUDtDhi0dtlOgCk7ge3sckszQfktp1sMO%2FDZJgX%2BRKAC5wSOILq02OBRh4b9Wyoecb1e4iMLe7cH%2BNACaQ8dL5F%2BAaF94VYgME0oegaOqiWl66HxtHAniyrFANtfPd91BDvmMKSuonl9aN3WQ%2F1O67hjc%2F7NnWPlMRmG3IDqAgNEV0E7u4IQJzbAcQgOYnOJrfXZBz6DlJdnwuirSQBLWAiW%2FgcpZQ5tQQwJ3nAoZaA7StQ0Gu0zyWZrrk%2FFZkUQ8kaF%2F7qc7fnyIinBvGO%2FkhCQBQCzuT7PMTeBtL3HWMTERGhOzvRSzRoWlib1yUIaW4e4jxjcpUn1aQ4u3wNqdEi55%2FqCpbUwkhX4visvNmQr0mcZc3WPRumoQoqWp62qHnYPyOwri8PX1ugURNsVA%2FZNEiiBfyiIiKJzlucoClkQaes8Z9u2UvX9GAWudT3Ap5D8yT7YOCLh3ojK%2BLqoB6AqAwLuRVJ%2BYLI%2FvQNTnkJ%2Fw7ZM2AA%2FzFjTDg9ZaaX7n1wuLdUJeY8PwNp0BABk0HwaMnRPCfzTC9cpnGanfTVKlzu4wi9p1f9tzfiZv5e58kwis%2F4vwY6pgHVIv2MGyJqLTPVyRxhk1Z0ZXqL54L8gxAM4OuKiThgLJMFW8OdwPKrgJTq6Nghv%2FguPNnvbRbqMlREb%2FD%2FLEOReB%2BaVR9%2F%2BCEqAL1ILvYAIUfyau9mrV%2Fjw6pieN6nRX4KXMPToAe%2B3abEpE9NJjsKq%2FIwv2UoaCz2QVnqidiomtvhtKzLndFyiJ4R8IbwFJGWZ3l4FmjpCSYLkR%2B3yuDyuqBJvOH8&X-Amz-Signature=6a40d3c9edc579f8ae28bb4cb4cacbd1ba3929ef7ec1a709fa2f288a74e04362&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNM5NXFR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs8Y4c3Qvm4PTycaW%2BE1Tlm3a2%2FqBwXMhsDqx4GymhJAiAYrGt8qF2QQIyu5QDTt9kMhIg8QcpCHJsMOjoN0rVbwir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMec2%2B6583Pg5I0ZZjKtwDhAjVqvrrsr2039XWerE0diFdywU0O9SazAq8zHsSO9rVs7AWTkwLD%2B8xXRUDtDhi0dtlOgCk7ge3sckszQfktp1sMO%2FDZJgX%2BRKAC5wSOILq02OBRh4b9Wyoecb1e4iMLe7cH%2BNACaQ8dL5F%2BAaF94VYgME0oegaOqiWl66HxtHAniyrFANtfPd91BDvmMKSuonl9aN3WQ%2F1O67hjc%2F7NnWPlMRmG3IDqAgNEV0E7u4IQJzbAcQgOYnOJrfXZBz6DlJdnwuirSQBLWAiW%2FgcpZQ5tQQwJ3nAoZaA7StQ0Gu0zyWZrrk%2FFZkUQ8kaF%2F7qc7fnyIinBvGO%2FkhCQBQCzuT7PMTeBtL3HWMTERGhOzvRSzRoWlib1yUIaW4e4jxjcpUn1aQ4u3wNqdEi55%2FqCpbUwkhX4visvNmQr0mcZc3WPRumoQoqWp62qHnYPyOwri8PX1ugURNsVA%2FZNEiiBfyiIiKJzlucoClkQaes8Z9u2UvX9GAWudT3Ap5D8yT7YOCLh3ojK%2BLqoB6AqAwLuRVJ%2BYLI%2FvQNTnkJ%2Fw7ZM2AA%2FzFjTDg9ZaaX7n1wuLdUJeY8PwNp0BABk0HwaMnRPCfzTC9cpnGanfTVKlzu4wi9p1f9tzfiZv5e58kwis%2F4vwY6pgHVIv2MGyJqLTPVyRxhk1Z0ZXqL54L8gxAM4OuKiThgLJMFW8OdwPKrgJTq6Nghv%2FguPNnvbRbqMlREb%2FD%2FLEOReB%2BaVR9%2F%2BCEqAL1ILvYAIUfyau9mrV%2Fjw6pieN6nRX4KXMPToAe%2B3abEpE9NJjsKq%2FIwv2UoaCz2QVnqidiomtvhtKzLndFyiJ4R8IbwFJGWZ3l4FmjpCSYLkR%2B3yuDyuqBJvOH8&X-Amz-Signature=61931263b09418c50fce1ef37d78b43cdd3f2b9c40320c27fa4e9c4d3fe93242&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNM5NXFR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs8Y4c3Qvm4PTycaW%2BE1Tlm3a2%2FqBwXMhsDqx4GymhJAiAYrGt8qF2QQIyu5QDTt9kMhIg8QcpCHJsMOjoN0rVbwir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMec2%2B6583Pg5I0ZZjKtwDhAjVqvrrsr2039XWerE0diFdywU0O9SazAq8zHsSO9rVs7AWTkwLD%2B8xXRUDtDhi0dtlOgCk7ge3sckszQfktp1sMO%2FDZJgX%2BRKAC5wSOILq02OBRh4b9Wyoecb1e4iMLe7cH%2BNACaQ8dL5F%2BAaF94VYgME0oegaOqiWl66HxtHAniyrFANtfPd91BDvmMKSuonl9aN3WQ%2F1O67hjc%2F7NnWPlMRmG3IDqAgNEV0E7u4IQJzbAcQgOYnOJrfXZBz6DlJdnwuirSQBLWAiW%2FgcpZQ5tQQwJ3nAoZaA7StQ0Gu0zyWZrrk%2FFZkUQ8kaF%2F7qc7fnyIinBvGO%2FkhCQBQCzuT7PMTeBtL3HWMTERGhOzvRSzRoWlib1yUIaW4e4jxjcpUn1aQ4u3wNqdEi55%2FqCpbUwkhX4visvNmQr0mcZc3WPRumoQoqWp62qHnYPyOwri8PX1ugURNsVA%2FZNEiiBfyiIiKJzlucoClkQaes8Z9u2UvX9GAWudT3Ap5D8yT7YOCLh3ojK%2BLqoB6AqAwLuRVJ%2BYLI%2FvQNTnkJ%2Fw7ZM2AA%2FzFjTDg9ZaaX7n1wuLdUJeY8PwNp0BABk0HwaMnRPCfzTC9cpnGanfTVKlzu4wi9p1f9tzfiZv5e58kwis%2F4vwY6pgHVIv2MGyJqLTPVyRxhk1Z0ZXqL54L8gxAM4OuKiThgLJMFW8OdwPKrgJTq6Nghv%2FguPNnvbRbqMlREb%2FD%2FLEOReB%2BaVR9%2F%2BCEqAL1ILvYAIUfyau9mrV%2Fjw6pieN6nRX4KXMPToAe%2B3abEpE9NJjsKq%2FIwv2UoaCz2QVnqidiomtvhtKzLndFyiJ4R8IbwFJGWZ3l4FmjpCSYLkR%2B3yuDyuqBJvOH8&X-Amz-Signature=1a7760ed061d6ab5558ac869907add57efbe4d339dbba0e479dc86d5b5be0989&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNM5NXFR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs8Y4c3Qvm4PTycaW%2BE1Tlm3a2%2FqBwXMhsDqx4GymhJAiAYrGt8qF2QQIyu5QDTt9kMhIg8QcpCHJsMOjoN0rVbwir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMec2%2B6583Pg5I0ZZjKtwDhAjVqvrrsr2039XWerE0diFdywU0O9SazAq8zHsSO9rVs7AWTkwLD%2B8xXRUDtDhi0dtlOgCk7ge3sckszQfktp1sMO%2FDZJgX%2BRKAC5wSOILq02OBRh4b9Wyoecb1e4iMLe7cH%2BNACaQ8dL5F%2BAaF94VYgME0oegaOqiWl66HxtHAniyrFANtfPd91BDvmMKSuonl9aN3WQ%2F1O67hjc%2F7NnWPlMRmG3IDqAgNEV0E7u4IQJzbAcQgOYnOJrfXZBz6DlJdnwuirSQBLWAiW%2FgcpZQ5tQQwJ3nAoZaA7StQ0Gu0zyWZrrk%2FFZkUQ8kaF%2F7qc7fnyIinBvGO%2FkhCQBQCzuT7PMTeBtL3HWMTERGhOzvRSzRoWlib1yUIaW4e4jxjcpUn1aQ4u3wNqdEi55%2FqCpbUwkhX4visvNmQr0mcZc3WPRumoQoqWp62qHnYPyOwri8PX1ugURNsVA%2FZNEiiBfyiIiKJzlucoClkQaes8Z9u2UvX9GAWudT3Ap5D8yT7YOCLh3ojK%2BLqoB6AqAwLuRVJ%2BYLI%2FvQNTnkJ%2Fw7ZM2AA%2FzFjTDg9ZaaX7n1wuLdUJeY8PwNp0BABk0HwaMnRPCfzTC9cpnGanfTVKlzu4wi9p1f9tzfiZv5e58kwis%2F4vwY6pgHVIv2MGyJqLTPVyRxhk1Z0ZXqL54L8gxAM4OuKiThgLJMFW8OdwPKrgJTq6Nghv%2FguPNnvbRbqMlREb%2FD%2FLEOReB%2BaVR9%2F%2BCEqAL1ILvYAIUfyau9mrV%2Fjw6pieN6nRX4KXMPToAe%2B3abEpE9NJjsKq%2FIwv2UoaCz2QVnqidiomtvhtKzLndFyiJ4R8IbwFJGWZ3l4FmjpCSYLkR%2B3yuDyuqBJvOH8&X-Amz-Signature=b8b33386cfa0e36c92d48f54fa5f894ba82eea7d1ad7ffaa32aa6deed11005f4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNM5NXFR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAs8Y4c3Qvm4PTycaW%2BE1Tlm3a2%2FqBwXMhsDqx4GymhJAiAYrGt8qF2QQIyu5QDTt9kMhIg8QcpCHJsMOjoN0rVbwir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMec2%2B6583Pg5I0ZZjKtwDhAjVqvrrsr2039XWerE0diFdywU0O9SazAq8zHsSO9rVs7AWTkwLD%2B8xXRUDtDhi0dtlOgCk7ge3sckszQfktp1sMO%2FDZJgX%2BRKAC5wSOILq02OBRh4b9Wyoecb1e4iMLe7cH%2BNACaQ8dL5F%2BAaF94VYgME0oegaOqiWl66HxtHAniyrFANtfPd91BDvmMKSuonl9aN3WQ%2F1O67hjc%2F7NnWPlMRmG3IDqAgNEV0E7u4IQJzbAcQgOYnOJrfXZBz6DlJdnwuirSQBLWAiW%2FgcpZQ5tQQwJ3nAoZaA7StQ0Gu0zyWZrrk%2FFZkUQ8kaF%2F7qc7fnyIinBvGO%2FkhCQBQCzuT7PMTeBtL3HWMTERGhOzvRSzRoWlib1yUIaW4e4jxjcpUn1aQ4u3wNqdEi55%2FqCpbUwkhX4visvNmQr0mcZc3WPRumoQoqWp62qHnYPyOwri8PX1ugURNsVA%2FZNEiiBfyiIiKJzlucoClkQaes8Z9u2UvX9GAWudT3Ap5D8yT7YOCLh3ojK%2BLqoB6AqAwLuRVJ%2BYLI%2FvQNTnkJ%2Fw7ZM2AA%2FzFjTDg9ZaaX7n1wuLdUJeY8PwNp0BABk0HwaMnRPCfzTC9cpnGanfTVKlzu4wi9p1f9tzfiZv5e58kwis%2F4vwY6pgHVIv2MGyJqLTPVyRxhk1Z0ZXqL54L8gxAM4OuKiThgLJMFW8OdwPKrgJTq6Nghv%2FguPNnvbRbqMlREb%2FD%2FLEOReB%2BaVR9%2F%2BCEqAL1ILvYAIUfyau9mrV%2Fjw6pieN6nRX4KXMPToAe%2B3abEpE9NJjsKq%2FIwv2UoaCz2QVnqidiomtvhtKzLndFyiJ4R8IbwFJGWZ3l4FmjpCSYLkR%2B3yuDyuqBJvOH8&X-Amz-Signature=564f559037ae989a7b5a4afc0d4870b178377e7e10756ead6cf8e6f7d93fdd17&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
