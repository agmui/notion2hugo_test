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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNRDVJZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpkaJMKCtgSfH5iewCEoA8JTVo15kaZDbXuRJrudsnigIgMzeF4fgYMvpMRz6EC8j3qGFEcfqHdKr94WTocSw%2FECUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOa7yfkLMjDYl0dO1ircAzPTDl2cmopwE9bR04wwFjfBGpMpFREvMiZ5fBTvUCwAbLffCpH3eHIgN%2FvJegRpjn%2Ff9RO1TFO1lwlCLte7RCQJtAHJn8M36qwiUMcjOQDezjagrsdnGXv9%2BGdBmwDfwekWmemoqGsqr4ZKu8W6Ej5lsrFIoIh47HbzQa1tzivcKv%2FUw%2FQ69MGJG6cxWkKDumjvtOItRHFEn6jXf6HHUi%2FyUx3xRS6f9T4gtGUwV2CP%2FUq0m2eyusqxqOqh%2BXgJO1rXUmz6Eq51aD4Yajsp6mLFxJ2UdTOOg92%2BoeMJ6tG0WmklgzU9to6z20M0NjnyvxDK9MKgMivW5bx6OxPDGK0Z5PtVxnN6r5qTdM4%2FVXDHjrT%2FElj3QsZM1Tvl7GQzXsmSJEcdhDAVL0KlJSkd6igeNRtMgUDyiYgmIgmD0Y5qGUvnoF%2F2lcf04QL9fgOXy5ys3kSQVUTjdp40pjckiFGqCnOlgI0EIevsJajtsfXJfA77auFDu%2FhmZbOBeE0fH3XJ%2BYtw34MzLv%2FQErOhPvu3ASyV1SXA8ftxTu1G%2F%2BHH5FF49nTALPkabW0kH3jUxehGv0QD5Eg3HRLFovhL3UTAi%2BAtljYihTV0HgkahhtlFNMwoYEafh9ZnXnUMPD%2B8b0GOqUBXocPB2SJUJZsn4j%2FnaC4je5zDsKfSVelHhnltBoljReBnwmX4ouuz29LTTXm1hWirHz27bifNeeGhOAlYcwWUxS%2BTmpVoDO%2FXxdng3dZEG0KRlJ32nELw%2BxVL539aNSo0GJVWhJkZuJORU4ljUblXiGLoxkD%2F0JX6JXKbxu37OBDVA6QhwVLXqG62hXBuz52TeM4tCVpmzoxs5ZZZ%2FxMYZ%2FJ3AaP&X-Amz-Signature=2f2ff5c78fe1c4d84fd85d2873109eda5a7194d55e36b57a5019cadc68fa8a44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNRDVJZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpkaJMKCtgSfH5iewCEoA8JTVo15kaZDbXuRJrudsnigIgMzeF4fgYMvpMRz6EC8j3qGFEcfqHdKr94WTocSw%2FECUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOa7yfkLMjDYl0dO1ircAzPTDl2cmopwE9bR04wwFjfBGpMpFREvMiZ5fBTvUCwAbLffCpH3eHIgN%2FvJegRpjn%2Ff9RO1TFO1lwlCLte7RCQJtAHJn8M36qwiUMcjOQDezjagrsdnGXv9%2BGdBmwDfwekWmemoqGsqr4ZKu8W6Ej5lsrFIoIh47HbzQa1tzivcKv%2FUw%2FQ69MGJG6cxWkKDumjvtOItRHFEn6jXf6HHUi%2FyUx3xRS6f9T4gtGUwV2CP%2FUq0m2eyusqxqOqh%2BXgJO1rXUmz6Eq51aD4Yajsp6mLFxJ2UdTOOg92%2BoeMJ6tG0WmklgzU9to6z20M0NjnyvxDK9MKgMivW5bx6OxPDGK0Z5PtVxnN6r5qTdM4%2FVXDHjrT%2FElj3QsZM1Tvl7GQzXsmSJEcdhDAVL0KlJSkd6igeNRtMgUDyiYgmIgmD0Y5qGUvnoF%2F2lcf04QL9fgOXy5ys3kSQVUTjdp40pjckiFGqCnOlgI0EIevsJajtsfXJfA77auFDu%2FhmZbOBeE0fH3XJ%2BYtw34MzLv%2FQErOhPvu3ASyV1SXA8ftxTu1G%2F%2BHH5FF49nTALPkabW0kH3jUxehGv0QD5Eg3HRLFovhL3UTAi%2BAtljYihTV0HgkahhtlFNMwoYEafh9ZnXnUMPD%2B8b0GOqUBXocPB2SJUJZsn4j%2FnaC4je5zDsKfSVelHhnltBoljReBnwmX4ouuz29LTTXm1hWirHz27bifNeeGhOAlYcwWUxS%2BTmpVoDO%2FXxdng3dZEG0KRlJ32nELw%2BxVL539aNSo0GJVWhJkZuJORU4ljUblXiGLoxkD%2F0JX6JXKbxu37OBDVA6QhwVLXqG62hXBuz52TeM4tCVpmzoxs5ZZZ%2FxMYZ%2FJ3AaP&X-Amz-Signature=f4ec762d809bd25ddb9453e45f83e05b050923d43e64f94d0d79a297057fb64e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNRDVJZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpkaJMKCtgSfH5iewCEoA8JTVo15kaZDbXuRJrudsnigIgMzeF4fgYMvpMRz6EC8j3qGFEcfqHdKr94WTocSw%2FECUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOa7yfkLMjDYl0dO1ircAzPTDl2cmopwE9bR04wwFjfBGpMpFREvMiZ5fBTvUCwAbLffCpH3eHIgN%2FvJegRpjn%2Ff9RO1TFO1lwlCLte7RCQJtAHJn8M36qwiUMcjOQDezjagrsdnGXv9%2BGdBmwDfwekWmemoqGsqr4ZKu8W6Ej5lsrFIoIh47HbzQa1tzivcKv%2FUw%2FQ69MGJG6cxWkKDumjvtOItRHFEn6jXf6HHUi%2FyUx3xRS6f9T4gtGUwV2CP%2FUq0m2eyusqxqOqh%2BXgJO1rXUmz6Eq51aD4Yajsp6mLFxJ2UdTOOg92%2BoeMJ6tG0WmklgzU9to6z20M0NjnyvxDK9MKgMivW5bx6OxPDGK0Z5PtVxnN6r5qTdM4%2FVXDHjrT%2FElj3QsZM1Tvl7GQzXsmSJEcdhDAVL0KlJSkd6igeNRtMgUDyiYgmIgmD0Y5qGUvnoF%2F2lcf04QL9fgOXy5ys3kSQVUTjdp40pjckiFGqCnOlgI0EIevsJajtsfXJfA77auFDu%2FhmZbOBeE0fH3XJ%2BYtw34MzLv%2FQErOhPvu3ASyV1SXA8ftxTu1G%2F%2BHH5FF49nTALPkabW0kH3jUxehGv0QD5Eg3HRLFovhL3UTAi%2BAtljYihTV0HgkahhtlFNMwoYEafh9ZnXnUMPD%2B8b0GOqUBXocPB2SJUJZsn4j%2FnaC4je5zDsKfSVelHhnltBoljReBnwmX4ouuz29LTTXm1hWirHz27bifNeeGhOAlYcwWUxS%2BTmpVoDO%2FXxdng3dZEG0KRlJ32nELw%2BxVL539aNSo0GJVWhJkZuJORU4ljUblXiGLoxkD%2F0JX6JXKbxu37OBDVA6QhwVLXqG62hXBuz52TeM4tCVpmzoxs5ZZZ%2FxMYZ%2FJ3AaP&X-Amz-Signature=90d3bb0e4b275e26879450118507e95fd6a2263cf32ba8e4d5087985525c6a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNRDVJZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpkaJMKCtgSfH5iewCEoA8JTVo15kaZDbXuRJrudsnigIgMzeF4fgYMvpMRz6EC8j3qGFEcfqHdKr94WTocSw%2FECUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOa7yfkLMjDYl0dO1ircAzPTDl2cmopwE9bR04wwFjfBGpMpFREvMiZ5fBTvUCwAbLffCpH3eHIgN%2FvJegRpjn%2Ff9RO1TFO1lwlCLte7RCQJtAHJn8M36qwiUMcjOQDezjagrsdnGXv9%2BGdBmwDfwekWmemoqGsqr4ZKu8W6Ej5lsrFIoIh47HbzQa1tzivcKv%2FUw%2FQ69MGJG6cxWkKDumjvtOItRHFEn6jXf6HHUi%2FyUx3xRS6f9T4gtGUwV2CP%2FUq0m2eyusqxqOqh%2BXgJO1rXUmz6Eq51aD4Yajsp6mLFxJ2UdTOOg92%2BoeMJ6tG0WmklgzU9to6z20M0NjnyvxDK9MKgMivW5bx6OxPDGK0Z5PtVxnN6r5qTdM4%2FVXDHjrT%2FElj3QsZM1Tvl7GQzXsmSJEcdhDAVL0KlJSkd6igeNRtMgUDyiYgmIgmD0Y5qGUvnoF%2F2lcf04QL9fgOXy5ys3kSQVUTjdp40pjckiFGqCnOlgI0EIevsJajtsfXJfA77auFDu%2FhmZbOBeE0fH3XJ%2BYtw34MzLv%2FQErOhPvu3ASyV1SXA8ftxTu1G%2F%2BHH5FF49nTALPkabW0kH3jUxehGv0QD5Eg3HRLFovhL3UTAi%2BAtljYihTV0HgkahhtlFNMwoYEafh9ZnXnUMPD%2B8b0GOqUBXocPB2SJUJZsn4j%2FnaC4je5zDsKfSVelHhnltBoljReBnwmX4ouuz29LTTXm1hWirHz27bifNeeGhOAlYcwWUxS%2BTmpVoDO%2FXxdng3dZEG0KRlJ32nELw%2BxVL539aNSo0GJVWhJkZuJORU4ljUblXiGLoxkD%2F0JX6JXKbxu37OBDVA6QhwVLXqG62hXBuz52TeM4tCVpmzoxs5ZZZ%2FxMYZ%2FJ3AaP&X-Amz-Signature=caa7e86ec7c2d28d4967a96d4f4cc60f8e82f6914c448d882a40baaa2f21366e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNRDVJZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpkaJMKCtgSfH5iewCEoA8JTVo15kaZDbXuRJrudsnigIgMzeF4fgYMvpMRz6EC8j3qGFEcfqHdKr94WTocSw%2FECUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOa7yfkLMjDYl0dO1ircAzPTDl2cmopwE9bR04wwFjfBGpMpFREvMiZ5fBTvUCwAbLffCpH3eHIgN%2FvJegRpjn%2Ff9RO1TFO1lwlCLte7RCQJtAHJn8M36qwiUMcjOQDezjagrsdnGXv9%2BGdBmwDfwekWmemoqGsqr4ZKu8W6Ej5lsrFIoIh47HbzQa1tzivcKv%2FUw%2FQ69MGJG6cxWkKDumjvtOItRHFEn6jXf6HHUi%2FyUx3xRS6f9T4gtGUwV2CP%2FUq0m2eyusqxqOqh%2BXgJO1rXUmz6Eq51aD4Yajsp6mLFxJ2UdTOOg92%2BoeMJ6tG0WmklgzU9to6z20M0NjnyvxDK9MKgMivW5bx6OxPDGK0Z5PtVxnN6r5qTdM4%2FVXDHjrT%2FElj3QsZM1Tvl7GQzXsmSJEcdhDAVL0KlJSkd6igeNRtMgUDyiYgmIgmD0Y5qGUvnoF%2F2lcf04QL9fgOXy5ys3kSQVUTjdp40pjckiFGqCnOlgI0EIevsJajtsfXJfA77auFDu%2FhmZbOBeE0fH3XJ%2BYtw34MzLv%2FQErOhPvu3ASyV1SXA8ftxTu1G%2F%2BHH5FF49nTALPkabW0kH3jUxehGv0QD5Eg3HRLFovhL3UTAi%2BAtljYihTV0HgkahhtlFNMwoYEafh9ZnXnUMPD%2B8b0GOqUBXocPB2SJUJZsn4j%2FnaC4je5zDsKfSVelHhnltBoljReBnwmX4ouuz29LTTXm1hWirHz27bifNeeGhOAlYcwWUxS%2BTmpVoDO%2FXxdng3dZEG0KRlJ32nELw%2BxVL539aNSo0GJVWhJkZuJORU4ljUblXiGLoxkD%2F0JX6JXKbxu37OBDVA6QhwVLXqG62hXBuz52TeM4tCVpmzoxs5ZZZ%2FxMYZ%2FJ3AaP&X-Amz-Signature=cef8ef81426bb8758eddaf02795ac7d2497d19b3c4840b74a8eccfde8ee08125&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNRDVJZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpkaJMKCtgSfH5iewCEoA8JTVo15kaZDbXuRJrudsnigIgMzeF4fgYMvpMRz6EC8j3qGFEcfqHdKr94WTocSw%2FECUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOa7yfkLMjDYl0dO1ircAzPTDl2cmopwE9bR04wwFjfBGpMpFREvMiZ5fBTvUCwAbLffCpH3eHIgN%2FvJegRpjn%2Ff9RO1TFO1lwlCLte7RCQJtAHJn8M36qwiUMcjOQDezjagrsdnGXv9%2BGdBmwDfwekWmemoqGsqr4ZKu8W6Ej5lsrFIoIh47HbzQa1tzivcKv%2FUw%2FQ69MGJG6cxWkKDumjvtOItRHFEn6jXf6HHUi%2FyUx3xRS6f9T4gtGUwV2CP%2FUq0m2eyusqxqOqh%2BXgJO1rXUmz6Eq51aD4Yajsp6mLFxJ2UdTOOg92%2BoeMJ6tG0WmklgzU9to6z20M0NjnyvxDK9MKgMivW5bx6OxPDGK0Z5PtVxnN6r5qTdM4%2FVXDHjrT%2FElj3QsZM1Tvl7GQzXsmSJEcdhDAVL0KlJSkd6igeNRtMgUDyiYgmIgmD0Y5qGUvnoF%2F2lcf04QL9fgOXy5ys3kSQVUTjdp40pjckiFGqCnOlgI0EIevsJajtsfXJfA77auFDu%2FhmZbOBeE0fH3XJ%2BYtw34MzLv%2FQErOhPvu3ASyV1SXA8ftxTu1G%2F%2BHH5FF49nTALPkabW0kH3jUxehGv0QD5Eg3HRLFovhL3UTAi%2BAtljYihTV0HgkahhtlFNMwoYEafh9ZnXnUMPD%2B8b0GOqUBXocPB2SJUJZsn4j%2FnaC4je5zDsKfSVelHhnltBoljReBnwmX4ouuz29LTTXm1hWirHz27bifNeeGhOAlYcwWUxS%2BTmpVoDO%2FXxdng3dZEG0KRlJ32nELw%2BxVL539aNSo0GJVWhJkZuJORU4ljUblXiGLoxkD%2F0JX6JXKbxu37OBDVA6QhwVLXqG62hXBuz52TeM4tCVpmzoxs5ZZZ%2FxMYZ%2FJ3AaP&X-Amz-Signature=599d53927aeaa689560ecdc997f5e68f6c2b0c36854a977ec498a45efce4c076&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNRDVJZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpkaJMKCtgSfH5iewCEoA8JTVo15kaZDbXuRJrudsnigIgMzeF4fgYMvpMRz6EC8j3qGFEcfqHdKr94WTocSw%2FECUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOa7yfkLMjDYl0dO1ircAzPTDl2cmopwE9bR04wwFjfBGpMpFREvMiZ5fBTvUCwAbLffCpH3eHIgN%2FvJegRpjn%2Ff9RO1TFO1lwlCLte7RCQJtAHJn8M36qwiUMcjOQDezjagrsdnGXv9%2BGdBmwDfwekWmemoqGsqr4ZKu8W6Ej5lsrFIoIh47HbzQa1tzivcKv%2FUw%2FQ69MGJG6cxWkKDumjvtOItRHFEn6jXf6HHUi%2FyUx3xRS6f9T4gtGUwV2CP%2FUq0m2eyusqxqOqh%2BXgJO1rXUmz6Eq51aD4Yajsp6mLFxJ2UdTOOg92%2BoeMJ6tG0WmklgzU9to6z20M0NjnyvxDK9MKgMivW5bx6OxPDGK0Z5PtVxnN6r5qTdM4%2FVXDHjrT%2FElj3QsZM1Tvl7GQzXsmSJEcdhDAVL0KlJSkd6igeNRtMgUDyiYgmIgmD0Y5qGUvnoF%2F2lcf04QL9fgOXy5ys3kSQVUTjdp40pjckiFGqCnOlgI0EIevsJajtsfXJfA77auFDu%2FhmZbOBeE0fH3XJ%2BYtw34MzLv%2FQErOhPvu3ASyV1SXA8ftxTu1G%2F%2BHH5FF49nTALPkabW0kH3jUxehGv0QD5Eg3HRLFovhL3UTAi%2BAtljYihTV0HgkahhtlFNMwoYEafh9ZnXnUMPD%2B8b0GOqUBXocPB2SJUJZsn4j%2FnaC4je5zDsKfSVelHhnltBoljReBnwmX4ouuz29LTTXm1hWirHz27bifNeeGhOAlYcwWUxS%2BTmpVoDO%2FXxdng3dZEG0KRlJ32nELw%2BxVL539aNSo0GJVWhJkZuJORU4ljUblXiGLoxkD%2F0JX6JXKbxu37OBDVA6QhwVLXqG62hXBuz52TeM4tCVpmzoxs5ZZZ%2FxMYZ%2FJ3AaP&X-Amz-Signature=ff5a4632afc45d9b218b4e4d41da518586697bcd4370c22edc5e3716071a91db&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
