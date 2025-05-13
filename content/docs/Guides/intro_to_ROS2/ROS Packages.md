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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZ2B65V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCQ8ycc7kVohqrAZPqzDuZmQrp1aaSBFEhzOQ3j%2B2qgTQIgFv%2FLHwbPGC7I5R5yr2MOCtLRuRK5156DSfM%2FApsu1g8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3h8EaNNBLE%2BJ0iBCrcA6a2vqq%2FJ5kfqv6FUqhHcCwSy5b%2Fv%2BgmwPmXGn7JV4FjskSCL0lRtHqQKQdrJBMZZRcjUD1Xxno2RpWVUkwuAXGECwZqgOyzQwN4yxhSyLMjR9nwvTF9bF6JlvdACnN90iw0Qiympd9ouZGy8psVuWZD4XJUkZrSJO5y%2Fzi0W8pT9y1Fw3GWECMEP2Az0SF9hilC01%2FKS8lSgce3cREOfD%2BqZ%2BtWP7wW9d4rireFINm9PbXEYlD9ApJ%2BwD%2Fm%2FFx3vzoyGq%2FqpVyK8X7HZ8DgHc5oI%2BOlXKY%2FiJt7hFNvwbvUX06ezOpUPL9hVybF%2BEPc5u7B%2F0e6vRFDLAMGo6mAYtGkBiRn6PX84AP3t8j4KUHWKSomUWP5Hgo4Ef0WoAT5UCit2BkPscBrBRjw%2FUBUBbxG9rWRH7cNi4%2BBaLQVqTcybfUyIATo1ogDp4yvtb3VW5lMP3bzlyerDX8K3QgsKsUHaJRacdJCD5o1xinl7Qt7SgwPHcdOWaC6RNJwIHScA%2FiLMUiQwr0V%2FQ5vKseRXsHxduTV6a1%2FKczuFFcAWbjhJcJA5hc8VIc1iSJwGbLTDBg9rfzIke75%2BoDoWmfbRg4F0vLLE%2BEsQa1XIg1GviBIbIaA9xpfQW8WuOa%2FMMLGjsEGOqUBLx4nXtBYusIJBkoWfTlQb%2B5ttvPqN%2FnqzMm1jhTc2mZOyHj1Pkb0sXkKz%2BqQ4FXqreTQNHHGgk0vCSM3qT%2B8gTKXnuYs%2BUnB2s%2FfrlqdDur7yl8zXMy1ejU0nbDm759kHF%2FAeSHVFRZ1QtPmodaWT7KlKlETm%2FxOUMOZj4W1Nw8KFr4hqZGPpv6u9MUCO4lmQb%2FesH1dwTdqBPp2S1%2BgBNItlx8a&X-Amz-Signature=95e03f406fa4b20532f8b16a2e1788f703f2cfa5932919c0734e3456c5e93992&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZ2B65V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCQ8ycc7kVohqrAZPqzDuZmQrp1aaSBFEhzOQ3j%2B2qgTQIgFv%2FLHwbPGC7I5R5yr2MOCtLRuRK5156DSfM%2FApsu1g8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3h8EaNNBLE%2BJ0iBCrcA6a2vqq%2FJ5kfqv6FUqhHcCwSy5b%2Fv%2BgmwPmXGn7JV4FjskSCL0lRtHqQKQdrJBMZZRcjUD1Xxno2RpWVUkwuAXGECwZqgOyzQwN4yxhSyLMjR9nwvTF9bF6JlvdACnN90iw0Qiympd9ouZGy8psVuWZD4XJUkZrSJO5y%2Fzi0W8pT9y1Fw3GWECMEP2Az0SF9hilC01%2FKS8lSgce3cREOfD%2BqZ%2BtWP7wW9d4rireFINm9PbXEYlD9ApJ%2BwD%2Fm%2FFx3vzoyGq%2FqpVyK8X7HZ8DgHc5oI%2BOlXKY%2FiJt7hFNvwbvUX06ezOpUPL9hVybF%2BEPc5u7B%2F0e6vRFDLAMGo6mAYtGkBiRn6PX84AP3t8j4KUHWKSomUWP5Hgo4Ef0WoAT5UCit2BkPscBrBRjw%2FUBUBbxG9rWRH7cNi4%2BBaLQVqTcybfUyIATo1ogDp4yvtb3VW5lMP3bzlyerDX8K3QgsKsUHaJRacdJCD5o1xinl7Qt7SgwPHcdOWaC6RNJwIHScA%2FiLMUiQwr0V%2FQ5vKseRXsHxduTV6a1%2FKczuFFcAWbjhJcJA5hc8VIc1iSJwGbLTDBg9rfzIke75%2BoDoWmfbRg4F0vLLE%2BEsQa1XIg1GviBIbIaA9xpfQW8WuOa%2FMMLGjsEGOqUBLx4nXtBYusIJBkoWfTlQb%2B5ttvPqN%2FnqzMm1jhTc2mZOyHj1Pkb0sXkKz%2BqQ4FXqreTQNHHGgk0vCSM3qT%2B8gTKXnuYs%2BUnB2s%2FfrlqdDur7yl8zXMy1ejU0nbDm759kHF%2FAeSHVFRZ1QtPmodaWT7KlKlETm%2FxOUMOZj4W1Nw8KFr4hqZGPpv6u9MUCO4lmQb%2FesH1dwTdqBPp2S1%2BgBNItlx8a&X-Amz-Signature=56c40a015ed343175fb210379cf4b02491a7fd977bbb74b2704c95d9701027ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZ2B65V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCQ8ycc7kVohqrAZPqzDuZmQrp1aaSBFEhzOQ3j%2B2qgTQIgFv%2FLHwbPGC7I5R5yr2MOCtLRuRK5156DSfM%2FApsu1g8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3h8EaNNBLE%2BJ0iBCrcA6a2vqq%2FJ5kfqv6FUqhHcCwSy5b%2Fv%2BgmwPmXGn7JV4FjskSCL0lRtHqQKQdrJBMZZRcjUD1Xxno2RpWVUkwuAXGECwZqgOyzQwN4yxhSyLMjR9nwvTF9bF6JlvdACnN90iw0Qiympd9ouZGy8psVuWZD4XJUkZrSJO5y%2Fzi0W8pT9y1Fw3GWECMEP2Az0SF9hilC01%2FKS8lSgce3cREOfD%2BqZ%2BtWP7wW9d4rireFINm9PbXEYlD9ApJ%2BwD%2Fm%2FFx3vzoyGq%2FqpVyK8X7HZ8DgHc5oI%2BOlXKY%2FiJt7hFNvwbvUX06ezOpUPL9hVybF%2BEPc5u7B%2F0e6vRFDLAMGo6mAYtGkBiRn6PX84AP3t8j4KUHWKSomUWP5Hgo4Ef0WoAT5UCit2BkPscBrBRjw%2FUBUBbxG9rWRH7cNi4%2BBaLQVqTcybfUyIATo1ogDp4yvtb3VW5lMP3bzlyerDX8K3QgsKsUHaJRacdJCD5o1xinl7Qt7SgwPHcdOWaC6RNJwIHScA%2FiLMUiQwr0V%2FQ5vKseRXsHxduTV6a1%2FKczuFFcAWbjhJcJA5hc8VIc1iSJwGbLTDBg9rfzIke75%2BoDoWmfbRg4F0vLLE%2BEsQa1XIg1GviBIbIaA9xpfQW8WuOa%2FMMLGjsEGOqUBLx4nXtBYusIJBkoWfTlQb%2B5ttvPqN%2FnqzMm1jhTc2mZOyHj1Pkb0sXkKz%2BqQ4FXqreTQNHHGgk0vCSM3qT%2B8gTKXnuYs%2BUnB2s%2FfrlqdDur7yl8zXMy1ejU0nbDm759kHF%2FAeSHVFRZ1QtPmodaWT7KlKlETm%2FxOUMOZj4W1Nw8KFr4hqZGPpv6u9MUCO4lmQb%2FesH1dwTdqBPp2S1%2BgBNItlx8a&X-Amz-Signature=6afb90a2b66922050eda4d0694ac9804f1ef85a8874740146cdd9b964544b28b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZ2B65V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCQ8ycc7kVohqrAZPqzDuZmQrp1aaSBFEhzOQ3j%2B2qgTQIgFv%2FLHwbPGC7I5R5yr2MOCtLRuRK5156DSfM%2FApsu1g8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3h8EaNNBLE%2BJ0iBCrcA6a2vqq%2FJ5kfqv6FUqhHcCwSy5b%2Fv%2BgmwPmXGn7JV4FjskSCL0lRtHqQKQdrJBMZZRcjUD1Xxno2RpWVUkwuAXGECwZqgOyzQwN4yxhSyLMjR9nwvTF9bF6JlvdACnN90iw0Qiympd9ouZGy8psVuWZD4XJUkZrSJO5y%2Fzi0W8pT9y1Fw3GWECMEP2Az0SF9hilC01%2FKS8lSgce3cREOfD%2BqZ%2BtWP7wW9d4rireFINm9PbXEYlD9ApJ%2BwD%2Fm%2FFx3vzoyGq%2FqpVyK8X7HZ8DgHc5oI%2BOlXKY%2FiJt7hFNvwbvUX06ezOpUPL9hVybF%2BEPc5u7B%2F0e6vRFDLAMGo6mAYtGkBiRn6PX84AP3t8j4KUHWKSomUWP5Hgo4Ef0WoAT5UCit2BkPscBrBRjw%2FUBUBbxG9rWRH7cNi4%2BBaLQVqTcybfUyIATo1ogDp4yvtb3VW5lMP3bzlyerDX8K3QgsKsUHaJRacdJCD5o1xinl7Qt7SgwPHcdOWaC6RNJwIHScA%2FiLMUiQwr0V%2FQ5vKseRXsHxduTV6a1%2FKczuFFcAWbjhJcJA5hc8VIc1iSJwGbLTDBg9rfzIke75%2BoDoWmfbRg4F0vLLE%2BEsQa1XIg1GviBIbIaA9xpfQW8WuOa%2FMMLGjsEGOqUBLx4nXtBYusIJBkoWfTlQb%2B5ttvPqN%2FnqzMm1jhTc2mZOyHj1Pkb0sXkKz%2BqQ4FXqreTQNHHGgk0vCSM3qT%2B8gTKXnuYs%2BUnB2s%2FfrlqdDur7yl8zXMy1ejU0nbDm759kHF%2FAeSHVFRZ1QtPmodaWT7KlKlETm%2FxOUMOZj4W1Nw8KFr4hqZGPpv6u9MUCO4lmQb%2FesH1dwTdqBPp2S1%2BgBNItlx8a&X-Amz-Signature=763c4485fa3e2ba8ff13d28a8a59681f77fcfa9840b89eab9c9e14716b03424d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZ2B65V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCQ8ycc7kVohqrAZPqzDuZmQrp1aaSBFEhzOQ3j%2B2qgTQIgFv%2FLHwbPGC7I5R5yr2MOCtLRuRK5156DSfM%2FApsu1g8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3h8EaNNBLE%2BJ0iBCrcA6a2vqq%2FJ5kfqv6FUqhHcCwSy5b%2Fv%2BgmwPmXGn7JV4FjskSCL0lRtHqQKQdrJBMZZRcjUD1Xxno2RpWVUkwuAXGECwZqgOyzQwN4yxhSyLMjR9nwvTF9bF6JlvdACnN90iw0Qiympd9ouZGy8psVuWZD4XJUkZrSJO5y%2Fzi0W8pT9y1Fw3GWECMEP2Az0SF9hilC01%2FKS8lSgce3cREOfD%2BqZ%2BtWP7wW9d4rireFINm9PbXEYlD9ApJ%2BwD%2Fm%2FFx3vzoyGq%2FqpVyK8X7HZ8DgHc5oI%2BOlXKY%2FiJt7hFNvwbvUX06ezOpUPL9hVybF%2BEPc5u7B%2F0e6vRFDLAMGo6mAYtGkBiRn6PX84AP3t8j4KUHWKSomUWP5Hgo4Ef0WoAT5UCit2BkPscBrBRjw%2FUBUBbxG9rWRH7cNi4%2BBaLQVqTcybfUyIATo1ogDp4yvtb3VW5lMP3bzlyerDX8K3QgsKsUHaJRacdJCD5o1xinl7Qt7SgwPHcdOWaC6RNJwIHScA%2FiLMUiQwr0V%2FQ5vKseRXsHxduTV6a1%2FKczuFFcAWbjhJcJA5hc8VIc1iSJwGbLTDBg9rfzIke75%2BoDoWmfbRg4F0vLLE%2BEsQa1XIg1GviBIbIaA9xpfQW8WuOa%2FMMLGjsEGOqUBLx4nXtBYusIJBkoWfTlQb%2B5ttvPqN%2FnqzMm1jhTc2mZOyHj1Pkb0sXkKz%2BqQ4FXqreTQNHHGgk0vCSM3qT%2B8gTKXnuYs%2BUnB2s%2FfrlqdDur7yl8zXMy1ejU0nbDm759kHF%2FAeSHVFRZ1QtPmodaWT7KlKlETm%2FxOUMOZj4W1Nw8KFr4hqZGPpv6u9MUCO4lmQb%2FesH1dwTdqBPp2S1%2BgBNItlx8a&X-Amz-Signature=3cb4729acdaf7960d56700eb4336e32c9d4060df724251102258598de9555882&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZ2B65V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCQ8ycc7kVohqrAZPqzDuZmQrp1aaSBFEhzOQ3j%2B2qgTQIgFv%2FLHwbPGC7I5R5yr2MOCtLRuRK5156DSfM%2FApsu1g8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3h8EaNNBLE%2BJ0iBCrcA6a2vqq%2FJ5kfqv6FUqhHcCwSy5b%2Fv%2BgmwPmXGn7JV4FjskSCL0lRtHqQKQdrJBMZZRcjUD1Xxno2RpWVUkwuAXGECwZqgOyzQwN4yxhSyLMjR9nwvTF9bF6JlvdACnN90iw0Qiympd9ouZGy8psVuWZD4XJUkZrSJO5y%2Fzi0W8pT9y1Fw3GWECMEP2Az0SF9hilC01%2FKS8lSgce3cREOfD%2BqZ%2BtWP7wW9d4rireFINm9PbXEYlD9ApJ%2BwD%2Fm%2FFx3vzoyGq%2FqpVyK8X7HZ8DgHc5oI%2BOlXKY%2FiJt7hFNvwbvUX06ezOpUPL9hVybF%2BEPc5u7B%2F0e6vRFDLAMGo6mAYtGkBiRn6PX84AP3t8j4KUHWKSomUWP5Hgo4Ef0WoAT5UCit2BkPscBrBRjw%2FUBUBbxG9rWRH7cNi4%2BBaLQVqTcybfUyIATo1ogDp4yvtb3VW5lMP3bzlyerDX8K3QgsKsUHaJRacdJCD5o1xinl7Qt7SgwPHcdOWaC6RNJwIHScA%2FiLMUiQwr0V%2FQ5vKseRXsHxduTV6a1%2FKczuFFcAWbjhJcJA5hc8VIc1iSJwGbLTDBg9rfzIke75%2BoDoWmfbRg4F0vLLE%2BEsQa1XIg1GviBIbIaA9xpfQW8WuOa%2FMMLGjsEGOqUBLx4nXtBYusIJBkoWfTlQb%2B5ttvPqN%2FnqzMm1jhTc2mZOyHj1Pkb0sXkKz%2BqQ4FXqreTQNHHGgk0vCSM3qT%2B8gTKXnuYs%2BUnB2s%2FfrlqdDur7yl8zXMy1ejU0nbDm759kHF%2FAeSHVFRZ1QtPmodaWT7KlKlETm%2FxOUMOZj4W1Nw8KFr4hqZGPpv6u9MUCO4lmQb%2FesH1dwTdqBPp2S1%2BgBNItlx8a&X-Amz-Signature=ab972fbd15a1d366e405d3be71f7c621b456b1606de81c2dacb2fe567e99194a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDZ2B65V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCQ8ycc7kVohqrAZPqzDuZmQrp1aaSBFEhzOQ3j%2B2qgTQIgFv%2FLHwbPGC7I5R5yr2MOCtLRuRK5156DSfM%2FApsu1g8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3h8EaNNBLE%2BJ0iBCrcA6a2vqq%2FJ5kfqv6FUqhHcCwSy5b%2Fv%2BgmwPmXGn7JV4FjskSCL0lRtHqQKQdrJBMZZRcjUD1Xxno2RpWVUkwuAXGECwZqgOyzQwN4yxhSyLMjR9nwvTF9bF6JlvdACnN90iw0Qiympd9ouZGy8psVuWZD4XJUkZrSJO5y%2Fzi0W8pT9y1Fw3GWECMEP2Az0SF9hilC01%2FKS8lSgce3cREOfD%2BqZ%2BtWP7wW9d4rireFINm9PbXEYlD9ApJ%2BwD%2Fm%2FFx3vzoyGq%2FqpVyK8X7HZ8DgHc5oI%2BOlXKY%2FiJt7hFNvwbvUX06ezOpUPL9hVybF%2BEPc5u7B%2F0e6vRFDLAMGo6mAYtGkBiRn6PX84AP3t8j4KUHWKSomUWP5Hgo4Ef0WoAT5UCit2BkPscBrBRjw%2FUBUBbxG9rWRH7cNi4%2BBaLQVqTcybfUyIATo1ogDp4yvtb3VW5lMP3bzlyerDX8K3QgsKsUHaJRacdJCD5o1xinl7Qt7SgwPHcdOWaC6RNJwIHScA%2FiLMUiQwr0V%2FQ5vKseRXsHxduTV6a1%2FKczuFFcAWbjhJcJA5hc8VIc1iSJwGbLTDBg9rfzIke75%2BoDoWmfbRg4F0vLLE%2BEsQa1XIg1GviBIbIaA9xpfQW8WuOa%2FMMLGjsEGOqUBLx4nXtBYusIJBkoWfTlQb%2B5ttvPqN%2FnqzMm1jhTc2mZOyHj1Pkb0sXkKz%2BqQ4FXqreTQNHHGgk0vCSM3qT%2B8gTKXnuYs%2BUnB2s%2FfrlqdDur7yl8zXMy1ejU0nbDm759kHF%2FAeSHVFRZ1QtPmodaWT7KlKlETm%2FxOUMOZj4W1Nw8KFr4hqZGPpv6u9MUCO4lmQb%2FesH1dwTdqBPp2S1%2BgBNItlx8a&X-Amz-Signature=6b430cee74c6c98508662f6f5d61a11ec748c52c2e2c10e98cf242c7313dcffc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
