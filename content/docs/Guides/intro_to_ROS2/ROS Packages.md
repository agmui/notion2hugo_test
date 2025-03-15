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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQFYPJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZPV%2FhaWsAOhvtq%2Fr8IzY5NdEIGAm8KC8W52IXV%2Bz0UAiBFiJTaLrU%2Bvbr46RK6CTprPuZiC%2F2cq7wYvjEVJke3KSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMYK8Ck7z0oIa7GSFZKtwDWjx2gKS1554Rxm1FipudwNcKnxTogDrB1xUgSGXLLnPshQg%2FzHLyESL%2BqTlxjulAILDl6hiKepYl5AE0TtvzzPjvBsySAy6OAttuQS9A%2BEKK%2Bgtp4FhKAja%2Fn1iTfnr%2FlgDIxhenpRLOCFILwXOUs%2FtBL6eCWegl301Yk6H%2BDw5KbWaj4uuJgHGH3b4lM5AB24m3hkOnrN9PybyYdC39voT11Vf6hSjlWjSTBJlcpIFGRvfbqv4677VdK4NBNh%2F9mssxctHN7HWlRTuhGsSxl%2FQBDVDQQsw561bTbKG0HZnhaOTx799rt%2BUqwl%2B0ttYI5x0tVbqjI7cCMFg%2FIshrwmhzU%2FcZKYr%2BrRG6YY1nAKfjWD9Puq%2BjXBWbtkBou2fzTB9%2BulhUkYPW2AN5%2FEzjAopjiURzcyzBfd8zlD8rdVDJuiIf0hd8%2B6LMp8zsXphRx1G9TtpA9BNudAAzAJ5gJQZynWPKUGAwoF6NnxPe2GM5cnq4v8iUYNwWzcRH2agMSUDqUxYMnP8uUX3mxTTq9kmcA9urVd0oKMae00pVVnPC0F%2F8Up4DpruLiszlZA5Bfj%2BN9oZV679e026nOgUyw9NyrA8HpE%2F6u6fg1Lj%2F2fDrEdmPhD2y1Z6vnV4wpsPXvgY6pgEbd6ZT4V97RoqxmE9SmfZovWWT9KM4HUBxW%2B%2FWC3MdNgjRXNLMHpp5%2Bikfn5AkZA6aGla4AO71aCY5Omw%2BxWBAHHNYgtmWvMLUagpijgmwXjDah1oCb9pk8ATkOSrUxIUgtpYuQQ4UeDGM2CRZ6RK9NvWP1jyHMxJQzsSBKSGa7fb%2FS4hV6kRzsIGBwTf8hP4LqEHYD0tw4XfqOhVPLWXNrLkXW3yT&X-Amz-Signature=5849625bfb30bb90852a8d7e424d811b96106f919a35d8523acb7b9f8c4803e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQFYPJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZPV%2FhaWsAOhvtq%2Fr8IzY5NdEIGAm8KC8W52IXV%2Bz0UAiBFiJTaLrU%2Bvbr46RK6CTprPuZiC%2F2cq7wYvjEVJke3KSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMYK8Ck7z0oIa7GSFZKtwDWjx2gKS1554Rxm1FipudwNcKnxTogDrB1xUgSGXLLnPshQg%2FzHLyESL%2BqTlxjulAILDl6hiKepYl5AE0TtvzzPjvBsySAy6OAttuQS9A%2BEKK%2Bgtp4FhKAja%2Fn1iTfnr%2FlgDIxhenpRLOCFILwXOUs%2FtBL6eCWegl301Yk6H%2BDw5KbWaj4uuJgHGH3b4lM5AB24m3hkOnrN9PybyYdC39voT11Vf6hSjlWjSTBJlcpIFGRvfbqv4677VdK4NBNh%2F9mssxctHN7HWlRTuhGsSxl%2FQBDVDQQsw561bTbKG0HZnhaOTx799rt%2BUqwl%2B0ttYI5x0tVbqjI7cCMFg%2FIshrwmhzU%2FcZKYr%2BrRG6YY1nAKfjWD9Puq%2BjXBWbtkBou2fzTB9%2BulhUkYPW2AN5%2FEzjAopjiURzcyzBfd8zlD8rdVDJuiIf0hd8%2B6LMp8zsXphRx1G9TtpA9BNudAAzAJ5gJQZynWPKUGAwoF6NnxPe2GM5cnq4v8iUYNwWzcRH2agMSUDqUxYMnP8uUX3mxTTq9kmcA9urVd0oKMae00pVVnPC0F%2F8Up4DpruLiszlZA5Bfj%2BN9oZV679e026nOgUyw9NyrA8HpE%2F6u6fg1Lj%2F2fDrEdmPhD2y1Z6vnV4wpsPXvgY6pgEbd6ZT4V97RoqxmE9SmfZovWWT9KM4HUBxW%2B%2FWC3MdNgjRXNLMHpp5%2Bikfn5AkZA6aGla4AO71aCY5Omw%2BxWBAHHNYgtmWvMLUagpijgmwXjDah1oCb9pk8ATkOSrUxIUgtpYuQQ4UeDGM2CRZ6RK9NvWP1jyHMxJQzsSBKSGa7fb%2FS4hV6kRzsIGBwTf8hP4LqEHYD0tw4XfqOhVPLWXNrLkXW3yT&X-Amz-Signature=96033d492c27af432e7370718d45081357d43ff8830e78f6226046879b2d83b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQFYPJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZPV%2FhaWsAOhvtq%2Fr8IzY5NdEIGAm8KC8W52IXV%2Bz0UAiBFiJTaLrU%2Bvbr46RK6CTprPuZiC%2F2cq7wYvjEVJke3KSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMYK8Ck7z0oIa7GSFZKtwDWjx2gKS1554Rxm1FipudwNcKnxTogDrB1xUgSGXLLnPshQg%2FzHLyESL%2BqTlxjulAILDl6hiKepYl5AE0TtvzzPjvBsySAy6OAttuQS9A%2BEKK%2Bgtp4FhKAja%2Fn1iTfnr%2FlgDIxhenpRLOCFILwXOUs%2FtBL6eCWegl301Yk6H%2BDw5KbWaj4uuJgHGH3b4lM5AB24m3hkOnrN9PybyYdC39voT11Vf6hSjlWjSTBJlcpIFGRvfbqv4677VdK4NBNh%2F9mssxctHN7HWlRTuhGsSxl%2FQBDVDQQsw561bTbKG0HZnhaOTx799rt%2BUqwl%2B0ttYI5x0tVbqjI7cCMFg%2FIshrwmhzU%2FcZKYr%2BrRG6YY1nAKfjWD9Puq%2BjXBWbtkBou2fzTB9%2BulhUkYPW2AN5%2FEzjAopjiURzcyzBfd8zlD8rdVDJuiIf0hd8%2B6LMp8zsXphRx1G9TtpA9BNudAAzAJ5gJQZynWPKUGAwoF6NnxPe2GM5cnq4v8iUYNwWzcRH2agMSUDqUxYMnP8uUX3mxTTq9kmcA9urVd0oKMae00pVVnPC0F%2F8Up4DpruLiszlZA5Bfj%2BN9oZV679e026nOgUyw9NyrA8HpE%2F6u6fg1Lj%2F2fDrEdmPhD2y1Z6vnV4wpsPXvgY6pgEbd6ZT4V97RoqxmE9SmfZovWWT9KM4HUBxW%2B%2FWC3MdNgjRXNLMHpp5%2Bikfn5AkZA6aGla4AO71aCY5Omw%2BxWBAHHNYgtmWvMLUagpijgmwXjDah1oCb9pk8ATkOSrUxIUgtpYuQQ4UeDGM2CRZ6RK9NvWP1jyHMxJQzsSBKSGa7fb%2FS4hV6kRzsIGBwTf8hP4LqEHYD0tw4XfqOhVPLWXNrLkXW3yT&X-Amz-Signature=2089755bc7488e190f3825700215dba852e3a7e5f9c80afb2453dd851aace663&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQFYPJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZPV%2FhaWsAOhvtq%2Fr8IzY5NdEIGAm8KC8W52IXV%2Bz0UAiBFiJTaLrU%2Bvbr46RK6CTprPuZiC%2F2cq7wYvjEVJke3KSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMYK8Ck7z0oIa7GSFZKtwDWjx2gKS1554Rxm1FipudwNcKnxTogDrB1xUgSGXLLnPshQg%2FzHLyESL%2BqTlxjulAILDl6hiKepYl5AE0TtvzzPjvBsySAy6OAttuQS9A%2BEKK%2Bgtp4FhKAja%2Fn1iTfnr%2FlgDIxhenpRLOCFILwXOUs%2FtBL6eCWegl301Yk6H%2BDw5KbWaj4uuJgHGH3b4lM5AB24m3hkOnrN9PybyYdC39voT11Vf6hSjlWjSTBJlcpIFGRvfbqv4677VdK4NBNh%2F9mssxctHN7HWlRTuhGsSxl%2FQBDVDQQsw561bTbKG0HZnhaOTx799rt%2BUqwl%2B0ttYI5x0tVbqjI7cCMFg%2FIshrwmhzU%2FcZKYr%2BrRG6YY1nAKfjWD9Puq%2BjXBWbtkBou2fzTB9%2BulhUkYPW2AN5%2FEzjAopjiURzcyzBfd8zlD8rdVDJuiIf0hd8%2B6LMp8zsXphRx1G9TtpA9BNudAAzAJ5gJQZynWPKUGAwoF6NnxPe2GM5cnq4v8iUYNwWzcRH2agMSUDqUxYMnP8uUX3mxTTq9kmcA9urVd0oKMae00pVVnPC0F%2F8Up4DpruLiszlZA5Bfj%2BN9oZV679e026nOgUyw9NyrA8HpE%2F6u6fg1Lj%2F2fDrEdmPhD2y1Z6vnV4wpsPXvgY6pgEbd6ZT4V97RoqxmE9SmfZovWWT9KM4HUBxW%2B%2FWC3MdNgjRXNLMHpp5%2Bikfn5AkZA6aGla4AO71aCY5Omw%2BxWBAHHNYgtmWvMLUagpijgmwXjDah1oCb9pk8ATkOSrUxIUgtpYuQQ4UeDGM2CRZ6RK9NvWP1jyHMxJQzsSBKSGa7fb%2FS4hV6kRzsIGBwTf8hP4LqEHYD0tw4XfqOhVPLWXNrLkXW3yT&X-Amz-Signature=dfe957139134b7b89f4bf4d266266aa7d0201ea88d5b50dbfdf8eeb8d67935e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQFYPJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZPV%2FhaWsAOhvtq%2Fr8IzY5NdEIGAm8KC8W52IXV%2Bz0UAiBFiJTaLrU%2Bvbr46RK6CTprPuZiC%2F2cq7wYvjEVJke3KSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMYK8Ck7z0oIa7GSFZKtwDWjx2gKS1554Rxm1FipudwNcKnxTogDrB1xUgSGXLLnPshQg%2FzHLyESL%2BqTlxjulAILDl6hiKepYl5AE0TtvzzPjvBsySAy6OAttuQS9A%2BEKK%2Bgtp4FhKAja%2Fn1iTfnr%2FlgDIxhenpRLOCFILwXOUs%2FtBL6eCWegl301Yk6H%2BDw5KbWaj4uuJgHGH3b4lM5AB24m3hkOnrN9PybyYdC39voT11Vf6hSjlWjSTBJlcpIFGRvfbqv4677VdK4NBNh%2F9mssxctHN7HWlRTuhGsSxl%2FQBDVDQQsw561bTbKG0HZnhaOTx799rt%2BUqwl%2B0ttYI5x0tVbqjI7cCMFg%2FIshrwmhzU%2FcZKYr%2BrRG6YY1nAKfjWD9Puq%2BjXBWbtkBou2fzTB9%2BulhUkYPW2AN5%2FEzjAopjiURzcyzBfd8zlD8rdVDJuiIf0hd8%2B6LMp8zsXphRx1G9TtpA9BNudAAzAJ5gJQZynWPKUGAwoF6NnxPe2GM5cnq4v8iUYNwWzcRH2agMSUDqUxYMnP8uUX3mxTTq9kmcA9urVd0oKMae00pVVnPC0F%2F8Up4DpruLiszlZA5Bfj%2BN9oZV679e026nOgUyw9NyrA8HpE%2F6u6fg1Lj%2F2fDrEdmPhD2y1Z6vnV4wpsPXvgY6pgEbd6ZT4V97RoqxmE9SmfZovWWT9KM4HUBxW%2B%2FWC3MdNgjRXNLMHpp5%2Bikfn5AkZA6aGla4AO71aCY5Omw%2BxWBAHHNYgtmWvMLUagpijgmwXjDah1oCb9pk8ATkOSrUxIUgtpYuQQ4UeDGM2CRZ6RK9NvWP1jyHMxJQzsSBKSGa7fb%2FS4hV6kRzsIGBwTf8hP4LqEHYD0tw4XfqOhVPLWXNrLkXW3yT&X-Amz-Signature=230cae6e37b0acd7cdeef468df2023c81e895d6094b3e5fe64041c3a2c9bd712&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQFYPJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZPV%2FhaWsAOhvtq%2Fr8IzY5NdEIGAm8KC8W52IXV%2Bz0UAiBFiJTaLrU%2Bvbr46RK6CTprPuZiC%2F2cq7wYvjEVJke3KSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMYK8Ck7z0oIa7GSFZKtwDWjx2gKS1554Rxm1FipudwNcKnxTogDrB1xUgSGXLLnPshQg%2FzHLyESL%2BqTlxjulAILDl6hiKepYl5AE0TtvzzPjvBsySAy6OAttuQS9A%2BEKK%2Bgtp4FhKAja%2Fn1iTfnr%2FlgDIxhenpRLOCFILwXOUs%2FtBL6eCWegl301Yk6H%2BDw5KbWaj4uuJgHGH3b4lM5AB24m3hkOnrN9PybyYdC39voT11Vf6hSjlWjSTBJlcpIFGRvfbqv4677VdK4NBNh%2F9mssxctHN7HWlRTuhGsSxl%2FQBDVDQQsw561bTbKG0HZnhaOTx799rt%2BUqwl%2B0ttYI5x0tVbqjI7cCMFg%2FIshrwmhzU%2FcZKYr%2BrRG6YY1nAKfjWD9Puq%2BjXBWbtkBou2fzTB9%2BulhUkYPW2AN5%2FEzjAopjiURzcyzBfd8zlD8rdVDJuiIf0hd8%2B6LMp8zsXphRx1G9TtpA9BNudAAzAJ5gJQZynWPKUGAwoF6NnxPe2GM5cnq4v8iUYNwWzcRH2agMSUDqUxYMnP8uUX3mxTTq9kmcA9urVd0oKMae00pVVnPC0F%2F8Up4DpruLiszlZA5Bfj%2BN9oZV679e026nOgUyw9NyrA8HpE%2F6u6fg1Lj%2F2fDrEdmPhD2y1Z6vnV4wpsPXvgY6pgEbd6ZT4V97RoqxmE9SmfZovWWT9KM4HUBxW%2B%2FWC3MdNgjRXNLMHpp5%2Bikfn5AkZA6aGla4AO71aCY5Omw%2BxWBAHHNYgtmWvMLUagpijgmwXjDah1oCb9pk8ATkOSrUxIUgtpYuQQ4UeDGM2CRZ6RK9NvWP1jyHMxJQzsSBKSGa7fb%2FS4hV6kRzsIGBwTf8hP4LqEHYD0tw4XfqOhVPLWXNrLkXW3yT&X-Amz-Signature=8d31de5b36bd592267ad0792983c479a5a4401578c299a24103834b7c233ec7f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAQFYPJY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZPV%2FhaWsAOhvtq%2Fr8IzY5NdEIGAm8KC8W52IXV%2Bz0UAiBFiJTaLrU%2Bvbr46RK6CTprPuZiC%2F2cq7wYvjEVJke3KSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMYK8Ck7z0oIa7GSFZKtwDWjx2gKS1554Rxm1FipudwNcKnxTogDrB1xUgSGXLLnPshQg%2FzHLyESL%2BqTlxjulAILDl6hiKepYl5AE0TtvzzPjvBsySAy6OAttuQS9A%2BEKK%2Bgtp4FhKAja%2Fn1iTfnr%2FlgDIxhenpRLOCFILwXOUs%2FtBL6eCWegl301Yk6H%2BDw5KbWaj4uuJgHGH3b4lM5AB24m3hkOnrN9PybyYdC39voT11Vf6hSjlWjSTBJlcpIFGRvfbqv4677VdK4NBNh%2F9mssxctHN7HWlRTuhGsSxl%2FQBDVDQQsw561bTbKG0HZnhaOTx799rt%2BUqwl%2B0ttYI5x0tVbqjI7cCMFg%2FIshrwmhzU%2FcZKYr%2BrRG6YY1nAKfjWD9Puq%2BjXBWbtkBou2fzTB9%2BulhUkYPW2AN5%2FEzjAopjiURzcyzBfd8zlD8rdVDJuiIf0hd8%2B6LMp8zsXphRx1G9TtpA9BNudAAzAJ5gJQZynWPKUGAwoF6NnxPe2GM5cnq4v8iUYNwWzcRH2agMSUDqUxYMnP8uUX3mxTTq9kmcA9urVd0oKMae00pVVnPC0F%2F8Up4DpruLiszlZA5Bfj%2BN9oZV679e026nOgUyw9NyrA8HpE%2F6u6fg1Lj%2F2fDrEdmPhD2y1Z6vnV4wpsPXvgY6pgEbd6ZT4V97RoqxmE9SmfZovWWT9KM4HUBxW%2B%2FWC3MdNgjRXNLMHpp5%2Bikfn5AkZA6aGla4AO71aCY5Omw%2BxWBAHHNYgtmWvMLUagpijgmwXjDah1oCb9pk8ATkOSrUxIUgtpYuQQ4UeDGM2CRZ6RK9NvWP1jyHMxJQzsSBKSGa7fb%2FS4hV6kRzsIGBwTf8hP4LqEHYD0tw4XfqOhVPLWXNrLkXW3yT&X-Amz-Signature=c0f3457dd3509a86cbb7718c2eb9d81639e216da7a0aef51f28854d2c2998bba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
