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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPPSB2H%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDamkHorSLgJu9DSMN%2B7vjJ6quzrOD57ST5RcVfHK9jsAIgFStAZVfizChgw5Bx5UbOPLIujQPODqrKa5Ro9eK5ClsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9m0E%2ByFojaMCNX4ircA8T5MsL6tPb34jLQPCs5tUOHAYIqeyy30USM7zuztfLDGRk19JUkg6VohGhZhgagGmmtH6RmoNlpMOKcWyl4Ft6kjqizbhqNqMk1lfqGKILSpSUL7qBxBT04D7NLH9k27jrL93tzK8HtB3mHSIlmzBv8faetOMttPywGsJJ47LNH9dpo%2Bz9JSxSBsM9OjE8JMgYlwInLV8vIf6llW3UMupHTW5EXuO1P6MigFFYAhcUYyM9zXBTJe%2BCtWfara%2BishJI6mpAzjinH8LTELQvFmhNyxa%2Fq3Dv7F%2FLk5UJWbV0F75hukJMVzoOfQmKYSm4oc9DcOmBNrTibkKfJY8TcLihugY8OjHOi%2BtzvS4bvJFoT08V77vSV9TAzSonRlYmTDRKhZAgZ%2B%2FgTHg3%2FV2wFpKiPd4eyqyeX7Q1wS9jF6QL1UjMjR0C%2BDjhEAetiui4hvjw63AG%2BygkUsbT0gLKKpDisNGGg9BTYz4yXV5tAcDURSBU2keVUCuQ0aRzL4FvUlKbA%2BvbHMEVjyjPz7myKAHUWnlP4OrmralGh7q4VoyjdYw0yGdzHIIWnMt39Ze2PMiwhp1xtkrQDG6gNoRqByyep1eQEbGsc5XpnHV0mU%2BE4Zby2ZF%2FsLFEQHXfUMPex4cEGOqUBKlcxSwke8XLLhDPYkt7kdNJsdsEVnAgYQuj0lAslLKmAR9bXpYbhG5IYP0ajhB%2Fk1eMZ4K93xhlPLQzYg8p9g2MviI5unR1rCENGcWkmOsPG4X81W%2BZLdemq5xVqkcOlvLI4ahSDyi5zQxx8OjNS2DA0sbO82ozaYyusXIbetQanZdIH%2B9BXEyZ0vNzoDDUSteBhgaT1xsd6Hodju%2BByGr815bk0&X-Amz-Signature=8bad2ab605909bd43b8650ad155d942c77c0c2d8eb2e13dcb18cb4783a2edd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPPSB2H%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDamkHorSLgJu9DSMN%2B7vjJ6quzrOD57ST5RcVfHK9jsAIgFStAZVfizChgw5Bx5UbOPLIujQPODqrKa5Ro9eK5ClsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9m0E%2ByFojaMCNX4ircA8T5MsL6tPb34jLQPCs5tUOHAYIqeyy30USM7zuztfLDGRk19JUkg6VohGhZhgagGmmtH6RmoNlpMOKcWyl4Ft6kjqizbhqNqMk1lfqGKILSpSUL7qBxBT04D7NLH9k27jrL93tzK8HtB3mHSIlmzBv8faetOMttPywGsJJ47LNH9dpo%2Bz9JSxSBsM9OjE8JMgYlwInLV8vIf6llW3UMupHTW5EXuO1P6MigFFYAhcUYyM9zXBTJe%2BCtWfara%2BishJI6mpAzjinH8LTELQvFmhNyxa%2Fq3Dv7F%2FLk5UJWbV0F75hukJMVzoOfQmKYSm4oc9DcOmBNrTibkKfJY8TcLihugY8OjHOi%2BtzvS4bvJFoT08V77vSV9TAzSonRlYmTDRKhZAgZ%2B%2FgTHg3%2FV2wFpKiPd4eyqyeX7Q1wS9jF6QL1UjMjR0C%2BDjhEAetiui4hvjw63AG%2BygkUsbT0gLKKpDisNGGg9BTYz4yXV5tAcDURSBU2keVUCuQ0aRzL4FvUlKbA%2BvbHMEVjyjPz7myKAHUWnlP4OrmralGh7q4VoyjdYw0yGdzHIIWnMt39Ze2PMiwhp1xtkrQDG6gNoRqByyep1eQEbGsc5XpnHV0mU%2BE4Zby2ZF%2FsLFEQHXfUMPex4cEGOqUBKlcxSwke8XLLhDPYkt7kdNJsdsEVnAgYQuj0lAslLKmAR9bXpYbhG5IYP0ajhB%2Fk1eMZ4K93xhlPLQzYg8p9g2MviI5unR1rCENGcWkmOsPG4X81W%2BZLdemq5xVqkcOlvLI4ahSDyi5zQxx8OjNS2DA0sbO82ozaYyusXIbetQanZdIH%2B9BXEyZ0vNzoDDUSteBhgaT1xsd6Hodju%2BByGr815bk0&X-Amz-Signature=394819d1cdf4ddb6b94128141f26259a527861119f56136eab23ad65e22cafc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPPSB2H%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDamkHorSLgJu9DSMN%2B7vjJ6quzrOD57ST5RcVfHK9jsAIgFStAZVfizChgw5Bx5UbOPLIujQPODqrKa5Ro9eK5ClsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9m0E%2ByFojaMCNX4ircA8T5MsL6tPb34jLQPCs5tUOHAYIqeyy30USM7zuztfLDGRk19JUkg6VohGhZhgagGmmtH6RmoNlpMOKcWyl4Ft6kjqizbhqNqMk1lfqGKILSpSUL7qBxBT04D7NLH9k27jrL93tzK8HtB3mHSIlmzBv8faetOMttPywGsJJ47LNH9dpo%2Bz9JSxSBsM9OjE8JMgYlwInLV8vIf6llW3UMupHTW5EXuO1P6MigFFYAhcUYyM9zXBTJe%2BCtWfara%2BishJI6mpAzjinH8LTELQvFmhNyxa%2Fq3Dv7F%2FLk5UJWbV0F75hukJMVzoOfQmKYSm4oc9DcOmBNrTibkKfJY8TcLihugY8OjHOi%2BtzvS4bvJFoT08V77vSV9TAzSonRlYmTDRKhZAgZ%2B%2FgTHg3%2FV2wFpKiPd4eyqyeX7Q1wS9jF6QL1UjMjR0C%2BDjhEAetiui4hvjw63AG%2BygkUsbT0gLKKpDisNGGg9BTYz4yXV5tAcDURSBU2keVUCuQ0aRzL4FvUlKbA%2BvbHMEVjyjPz7myKAHUWnlP4OrmralGh7q4VoyjdYw0yGdzHIIWnMt39Ze2PMiwhp1xtkrQDG6gNoRqByyep1eQEbGsc5XpnHV0mU%2BE4Zby2ZF%2FsLFEQHXfUMPex4cEGOqUBKlcxSwke8XLLhDPYkt7kdNJsdsEVnAgYQuj0lAslLKmAR9bXpYbhG5IYP0ajhB%2Fk1eMZ4K93xhlPLQzYg8p9g2MviI5unR1rCENGcWkmOsPG4X81W%2BZLdemq5xVqkcOlvLI4ahSDyi5zQxx8OjNS2DA0sbO82ozaYyusXIbetQanZdIH%2B9BXEyZ0vNzoDDUSteBhgaT1xsd6Hodju%2BByGr815bk0&X-Amz-Signature=0145987b54fa85ee2c44d49ea3e69ddacd852afd55e8f5054d547c9c9c804760&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPPSB2H%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDamkHorSLgJu9DSMN%2B7vjJ6quzrOD57ST5RcVfHK9jsAIgFStAZVfizChgw5Bx5UbOPLIujQPODqrKa5Ro9eK5ClsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9m0E%2ByFojaMCNX4ircA8T5MsL6tPb34jLQPCs5tUOHAYIqeyy30USM7zuztfLDGRk19JUkg6VohGhZhgagGmmtH6RmoNlpMOKcWyl4Ft6kjqizbhqNqMk1lfqGKILSpSUL7qBxBT04D7NLH9k27jrL93tzK8HtB3mHSIlmzBv8faetOMttPywGsJJ47LNH9dpo%2Bz9JSxSBsM9OjE8JMgYlwInLV8vIf6llW3UMupHTW5EXuO1P6MigFFYAhcUYyM9zXBTJe%2BCtWfara%2BishJI6mpAzjinH8LTELQvFmhNyxa%2Fq3Dv7F%2FLk5UJWbV0F75hukJMVzoOfQmKYSm4oc9DcOmBNrTibkKfJY8TcLihugY8OjHOi%2BtzvS4bvJFoT08V77vSV9TAzSonRlYmTDRKhZAgZ%2B%2FgTHg3%2FV2wFpKiPd4eyqyeX7Q1wS9jF6QL1UjMjR0C%2BDjhEAetiui4hvjw63AG%2BygkUsbT0gLKKpDisNGGg9BTYz4yXV5tAcDURSBU2keVUCuQ0aRzL4FvUlKbA%2BvbHMEVjyjPz7myKAHUWnlP4OrmralGh7q4VoyjdYw0yGdzHIIWnMt39Ze2PMiwhp1xtkrQDG6gNoRqByyep1eQEbGsc5XpnHV0mU%2BE4Zby2ZF%2FsLFEQHXfUMPex4cEGOqUBKlcxSwke8XLLhDPYkt7kdNJsdsEVnAgYQuj0lAslLKmAR9bXpYbhG5IYP0ajhB%2Fk1eMZ4K93xhlPLQzYg8p9g2MviI5unR1rCENGcWkmOsPG4X81W%2BZLdemq5xVqkcOlvLI4ahSDyi5zQxx8OjNS2DA0sbO82ozaYyusXIbetQanZdIH%2B9BXEyZ0vNzoDDUSteBhgaT1xsd6Hodju%2BByGr815bk0&X-Amz-Signature=217946b2e3623b066065525efa88f135dc54b8f4ae5d326846346dc23f6867d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPPSB2H%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDamkHorSLgJu9DSMN%2B7vjJ6quzrOD57ST5RcVfHK9jsAIgFStAZVfizChgw5Bx5UbOPLIujQPODqrKa5Ro9eK5ClsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9m0E%2ByFojaMCNX4ircA8T5MsL6tPb34jLQPCs5tUOHAYIqeyy30USM7zuztfLDGRk19JUkg6VohGhZhgagGmmtH6RmoNlpMOKcWyl4Ft6kjqizbhqNqMk1lfqGKILSpSUL7qBxBT04D7NLH9k27jrL93tzK8HtB3mHSIlmzBv8faetOMttPywGsJJ47LNH9dpo%2Bz9JSxSBsM9OjE8JMgYlwInLV8vIf6llW3UMupHTW5EXuO1P6MigFFYAhcUYyM9zXBTJe%2BCtWfara%2BishJI6mpAzjinH8LTELQvFmhNyxa%2Fq3Dv7F%2FLk5UJWbV0F75hukJMVzoOfQmKYSm4oc9DcOmBNrTibkKfJY8TcLihugY8OjHOi%2BtzvS4bvJFoT08V77vSV9TAzSonRlYmTDRKhZAgZ%2B%2FgTHg3%2FV2wFpKiPd4eyqyeX7Q1wS9jF6QL1UjMjR0C%2BDjhEAetiui4hvjw63AG%2BygkUsbT0gLKKpDisNGGg9BTYz4yXV5tAcDURSBU2keVUCuQ0aRzL4FvUlKbA%2BvbHMEVjyjPz7myKAHUWnlP4OrmralGh7q4VoyjdYw0yGdzHIIWnMt39Ze2PMiwhp1xtkrQDG6gNoRqByyep1eQEbGsc5XpnHV0mU%2BE4Zby2ZF%2FsLFEQHXfUMPex4cEGOqUBKlcxSwke8XLLhDPYkt7kdNJsdsEVnAgYQuj0lAslLKmAR9bXpYbhG5IYP0ajhB%2Fk1eMZ4K93xhlPLQzYg8p9g2MviI5unR1rCENGcWkmOsPG4X81W%2BZLdemq5xVqkcOlvLI4ahSDyi5zQxx8OjNS2DA0sbO82ozaYyusXIbetQanZdIH%2B9BXEyZ0vNzoDDUSteBhgaT1xsd6Hodju%2BByGr815bk0&X-Amz-Signature=4bd448eb5108a6f1dee79edf1c582b53f6d9633b5f25619c17744caf15c9b891&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPPSB2H%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDamkHorSLgJu9DSMN%2B7vjJ6quzrOD57ST5RcVfHK9jsAIgFStAZVfizChgw5Bx5UbOPLIujQPODqrKa5Ro9eK5ClsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9m0E%2ByFojaMCNX4ircA8T5MsL6tPb34jLQPCs5tUOHAYIqeyy30USM7zuztfLDGRk19JUkg6VohGhZhgagGmmtH6RmoNlpMOKcWyl4Ft6kjqizbhqNqMk1lfqGKILSpSUL7qBxBT04D7NLH9k27jrL93tzK8HtB3mHSIlmzBv8faetOMttPywGsJJ47LNH9dpo%2Bz9JSxSBsM9OjE8JMgYlwInLV8vIf6llW3UMupHTW5EXuO1P6MigFFYAhcUYyM9zXBTJe%2BCtWfara%2BishJI6mpAzjinH8LTELQvFmhNyxa%2Fq3Dv7F%2FLk5UJWbV0F75hukJMVzoOfQmKYSm4oc9DcOmBNrTibkKfJY8TcLihugY8OjHOi%2BtzvS4bvJFoT08V77vSV9TAzSonRlYmTDRKhZAgZ%2B%2FgTHg3%2FV2wFpKiPd4eyqyeX7Q1wS9jF6QL1UjMjR0C%2BDjhEAetiui4hvjw63AG%2BygkUsbT0gLKKpDisNGGg9BTYz4yXV5tAcDURSBU2keVUCuQ0aRzL4FvUlKbA%2BvbHMEVjyjPz7myKAHUWnlP4OrmralGh7q4VoyjdYw0yGdzHIIWnMt39Ze2PMiwhp1xtkrQDG6gNoRqByyep1eQEbGsc5XpnHV0mU%2BE4Zby2ZF%2FsLFEQHXfUMPex4cEGOqUBKlcxSwke8XLLhDPYkt7kdNJsdsEVnAgYQuj0lAslLKmAR9bXpYbhG5IYP0ajhB%2Fk1eMZ4K93xhlPLQzYg8p9g2MviI5unR1rCENGcWkmOsPG4X81W%2BZLdemq5xVqkcOlvLI4ahSDyi5zQxx8OjNS2DA0sbO82ozaYyusXIbetQanZdIH%2B9BXEyZ0vNzoDDUSteBhgaT1xsd6Hodju%2BByGr815bk0&X-Amz-Signature=feb6af83bbf553efd7957b164c331e04509987907906e4b0751aeccbb07de341&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJPPSB2H%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDamkHorSLgJu9DSMN%2B7vjJ6quzrOD57ST5RcVfHK9jsAIgFStAZVfizChgw5Bx5UbOPLIujQPODqrKa5Ro9eK5ClsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9m0E%2ByFojaMCNX4ircA8T5MsL6tPb34jLQPCs5tUOHAYIqeyy30USM7zuztfLDGRk19JUkg6VohGhZhgagGmmtH6RmoNlpMOKcWyl4Ft6kjqizbhqNqMk1lfqGKILSpSUL7qBxBT04D7NLH9k27jrL93tzK8HtB3mHSIlmzBv8faetOMttPywGsJJ47LNH9dpo%2Bz9JSxSBsM9OjE8JMgYlwInLV8vIf6llW3UMupHTW5EXuO1P6MigFFYAhcUYyM9zXBTJe%2BCtWfara%2BishJI6mpAzjinH8LTELQvFmhNyxa%2Fq3Dv7F%2FLk5UJWbV0F75hukJMVzoOfQmKYSm4oc9DcOmBNrTibkKfJY8TcLihugY8OjHOi%2BtzvS4bvJFoT08V77vSV9TAzSonRlYmTDRKhZAgZ%2B%2FgTHg3%2FV2wFpKiPd4eyqyeX7Q1wS9jF6QL1UjMjR0C%2BDjhEAetiui4hvjw63AG%2BygkUsbT0gLKKpDisNGGg9BTYz4yXV5tAcDURSBU2keVUCuQ0aRzL4FvUlKbA%2BvbHMEVjyjPz7myKAHUWnlP4OrmralGh7q4VoyjdYw0yGdzHIIWnMt39Ze2PMiwhp1xtkrQDG6gNoRqByyep1eQEbGsc5XpnHV0mU%2BE4Zby2ZF%2FsLFEQHXfUMPex4cEGOqUBKlcxSwke8XLLhDPYkt7kdNJsdsEVnAgYQuj0lAslLKmAR9bXpYbhG5IYP0ajhB%2Fk1eMZ4K93xhlPLQzYg8p9g2MviI5unR1rCENGcWkmOsPG4X81W%2BZLdemq5xVqkcOlvLI4ahSDyi5zQxx8OjNS2DA0sbO82ozaYyusXIbetQanZdIH%2B9BXEyZ0vNzoDDUSteBhgaT1xsd6Hodju%2BByGr815bk0&X-Amz-Signature=47105440a7c6962e34f42e742bb9878b1ed9d9b463dfa42ee32230a94d75767f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
