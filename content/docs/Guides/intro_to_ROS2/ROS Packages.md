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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4AEUM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElEmhNbnf%2Fq9qGJV%2F7VyCK7WZ3E3uMJdx%2Bx4QXzyDtbAiEAoq5pWHDQtSkPINVUYdsjri2WD%2F%2FnBUpkKhbiepQzYFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMLw2QHiViPUEmiF3yrcA9phQlAtzNxSgPlO%2Bc3xZByMeyqJoDMcmk34Nj3LNRh01WTXhNx4prBXgKQM6D10qkhslvarPQ5qysMHruG6TuxukkK57tfxsV54UEpI2xB4xf3b3GaqIQK4iqNCj0cXWW%2FlOKJfZlDJajuf1eOuczKqd7RpPDZYLIHyyx8PXV3hSMjm%2F6x5Yn1nW13t73WsRF4yaq1ndXfif5H7L4%2FjAXa77fgf1wQH%2FXt%2BEVzbWRakZ4Vpr554xqMK6aTmQw0fEf0pZvBQEPcd%2BX6HzHp%2FZq791cSLTpGY9UmYt9qaFW6t%2B0Z1U5yeZty6je7vXbj93CzylUXi0uaVE%2BrfhUmb78xTelII%2BUycmadIUJwlxBfyQaQx6tdoZIhA9xqcEsTeJGQk9YTc2p87w4BPq4hS4pgzG3LBeGpAqshuPQz%2FNhFiQR9Wvg%2FUV0T1CftXFTwqWF0xZWrmZlPwb2a6XCOotcuBN%2Ftd%2F2ZkcxswBjTTZ01dw0NhxmGI%2Bwaw6IvP5WoRI3BJIax7UXvrkQOBjUm6nYP74eXNNL5FO56PfUn%2BBpbVEFwdkltEavNmtMFoQX8P4%2BTbh4MF5NvGZlsF8DZhQ1vhgkTq0jyvrQ2apImF1dl18%2FgkOlhXnSAlYdIaMNv6q8AGOqUBLANe8US%2B6rcZARQ0Mq5VpLRhoWjymCZzaRhwmH7zBf76GRnXRu2O8mTNTt%2FepYGkNSTkF6wOjpmhKccJB37nCDfZcMAYkfC47HBaOnhnst2E1voE3jrKixzgzhA%2F59M6b0ZfUbMdVr8cEnXxwB1a4WEyr0Rp976dot972TVVof6nxlRt3NtwpCMsVDSb727%2BnAY04g1DY9tXJm4CQ2VGNAn%2FCEgF&X-Amz-Signature=8b6df4f1fea023a3bc405fd9c6219b026f89ba8ea23b7b7b3a82f5a81ce6f84c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4AEUM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElEmhNbnf%2Fq9qGJV%2F7VyCK7WZ3E3uMJdx%2Bx4QXzyDtbAiEAoq5pWHDQtSkPINVUYdsjri2WD%2F%2FnBUpkKhbiepQzYFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMLw2QHiViPUEmiF3yrcA9phQlAtzNxSgPlO%2Bc3xZByMeyqJoDMcmk34Nj3LNRh01WTXhNx4prBXgKQM6D10qkhslvarPQ5qysMHruG6TuxukkK57tfxsV54UEpI2xB4xf3b3GaqIQK4iqNCj0cXWW%2FlOKJfZlDJajuf1eOuczKqd7RpPDZYLIHyyx8PXV3hSMjm%2F6x5Yn1nW13t73WsRF4yaq1ndXfif5H7L4%2FjAXa77fgf1wQH%2FXt%2BEVzbWRakZ4Vpr554xqMK6aTmQw0fEf0pZvBQEPcd%2BX6HzHp%2FZq791cSLTpGY9UmYt9qaFW6t%2B0Z1U5yeZty6je7vXbj93CzylUXi0uaVE%2BrfhUmb78xTelII%2BUycmadIUJwlxBfyQaQx6tdoZIhA9xqcEsTeJGQk9YTc2p87w4BPq4hS4pgzG3LBeGpAqshuPQz%2FNhFiQR9Wvg%2FUV0T1CftXFTwqWF0xZWrmZlPwb2a6XCOotcuBN%2Ftd%2F2ZkcxswBjTTZ01dw0NhxmGI%2Bwaw6IvP5WoRI3BJIax7UXvrkQOBjUm6nYP74eXNNL5FO56PfUn%2BBpbVEFwdkltEavNmtMFoQX8P4%2BTbh4MF5NvGZlsF8DZhQ1vhgkTq0jyvrQ2apImF1dl18%2FgkOlhXnSAlYdIaMNv6q8AGOqUBLANe8US%2B6rcZARQ0Mq5VpLRhoWjymCZzaRhwmH7zBf76GRnXRu2O8mTNTt%2FepYGkNSTkF6wOjpmhKccJB37nCDfZcMAYkfC47HBaOnhnst2E1voE3jrKixzgzhA%2F59M6b0ZfUbMdVr8cEnXxwB1a4WEyr0Rp976dot972TVVof6nxlRt3NtwpCMsVDSb727%2BnAY04g1DY9tXJm4CQ2VGNAn%2FCEgF&X-Amz-Signature=914febf33e993902ae447bbcdf6fc7fb32586969ae4a1490b65545b41314b9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4AEUM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElEmhNbnf%2Fq9qGJV%2F7VyCK7WZ3E3uMJdx%2Bx4QXzyDtbAiEAoq5pWHDQtSkPINVUYdsjri2WD%2F%2FnBUpkKhbiepQzYFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMLw2QHiViPUEmiF3yrcA9phQlAtzNxSgPlO%2Bc3xZByMeyqJoDMcmk34Nj3LNRh01WTXhNx4prBXgKQM6D10qkhslvarPQ5qysMHruG6TuxukkK57tfxsV54UEpI2xB4xf3b3GaqIQK4iqNCj0cXWW%2FlOKJfZlDJajuf1eOuczKqd7RpPDZYLIHyyx8PXV3hSMjm%2F6x5Yn1nW13t73WsRF4yaq1ndXfif5H7L4%2FjAXa77fgf1wQH%2FXt%2BEVzbWRakZ4Vpr554xqMK6aTmQw0fEf0pZvBQEPcd%2BX6HzHp%2FZq791cSLTpGY9UmYt9qaFW6t%2B0Z1U5yeZty6je7vXbj93CzylUXi0uaVE%2BrfhUmb78xTelII%2BUycmadIUJwlxBfyQaQx6tdoZIhA9xqcEsTeJGQk9YTc2p87w4BPq4hS4pgzG3LBeGpAqshuPQz%2FNhFiQR9Wvg%2FUV0T1CftXFTwqWF0xZWrmZlPwb2a6XCOotcuBN%2Ftd%2F2ZkcxswBjTTZ01dw0NhxmGI%2Bwaw6IvP5WoRI3BJIax7UXvrkQOBjUm6nYP74eXNNL5FO56PfUn%2BBpbVEFwdkltEavNmtMFoQX8P4%2BTbh4MF5NvGZlsF8DZhQ1vhgkTq0jyvrQ2apImF1dl18%2FgkOlhXnSAlYdIaMNv6q8AGOqUBLANe8US%2B6rcZARQ0Mq5VpLRhoWjymCZzaRhwmH7zBf76GRnXRu2O8mTNTt%2FepYGkNSTkF6wOjpmhKccJB37nCDfZcMAYkfC47HBaOnhnst2E1voE3jrKixzgzhA%2F59M6b0ZfUbMdVr8cEnXxwB1a4WEyr0Rp976dot972TVVof6nxlRt3NtwpCMsVDSb727%2BnAY04g1DY9tXJm4CQ2VGNAn%2FCEgF&X-Amz-Signature=b113bb8974a5e81f41b9321c3ee44087ac7411f402c490e5936c14746ad48d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4AEUM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElEmhNbnf%2Fq9qGJV%2F7VyCK7WZ3E3uMJdx%2Bx4QXzyDtbAiEAoq5pWHDQtSkPINVUYdsjri2WD%2F%2FnBUpkKhbiepQzYFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMLw2QHiViPUEmiF3yrcA9phQlAtzNxSgPlO%2Bc3xZByMeyqJoDMcmk34Nj3LNRh01WTXhNx4prBXgKQM6D10qkhslvarPQ5qysMHruG6TuxukkK57tfxsV54UEpI2xB4xf3b3GaqIQK4iqNCj0cXWW%2FlOKJfZlDJajuf1eOuczKqd7RpPDZYLIHyyx8PXV3hSMjm%2F6x5Yn1nW13t73WsRF4yaq1ndXfif5H7L4%2FjAXa77fgf1wQH%2FXt%2BEVzbWRakZ4Vpr554xqMK6aTmQw0fEf0pZvBQEPcd%2BX6HzHp%2FZq791cSLTpGY9UmYt9qaFW6t%2B0Z1U5yeZty6je7vXbj93CzylUXi0uaVE%2BrfhUmb78xTelII%2BUycmadIUJwlxBfyQaQx6tdoZIhA9xqcEsTeJGQk9YTc2p87w4BPq4hS4pgzG3LBeGpAqshuPQz%2FNhFiQR9Wvg%2FUV0T1CftXFTwqWF0xZWrmZlPwb2a6XCOotcuBN%2Ftd%2F2ZkcxswBjTTZ01dw0NhxmGI%2Bwaw6IvP5WoRI3BJIax7UXvrkQOBjUm6nYP74eXNNL5FO56PfUn%2BBpbVEFwdkltEavNmtMFoQX8P4%2BTbh4MF5NvGZlsF8DZhQ1vhgkTq0jyvrQ2apImF1dl18%2FgkOlhXnSAlYdIaMNv6q8AGOqUBLANe8US%2B6rcZARQ0Mq5VpLRhoWjymCZzaRhwmH7zBf76GRnXRu2O8mTNTt%2FepYGkNSTkF6wOjpmhKccJB37nCDfZcMAYkfC47HBaOnhnst2E1voE3jrKixzgzhA%2F59M6b0ZfUbMdVr8cEnXxwB1a4WEyr0Rp976dot972TVVof6nxlRt3NtwpCMsVDSb727%2BnAY04g1DY9tXJm4CQ2VGNAn%2FCEgF&X-Amz-Signature=d9140b692f3c461780cf8ce75051e45a8c9c2cea3072566bcc31bf956c5ac2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4AEUM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElEmhNbnf%2Fq9qGJV%2F7VyCK7WZ3E3uMJdx%2Bx4QXzyDtbAiEAoq5pWHDQtSkPINVUYdsjri2WD%2F%2FnBUpkKhbiepQzYFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMLw2QHiViPUEmiF3yrcA9phQlAtzNxSgPlO%2Bc3xZByMeyqJoDMcmk34Nj3LNRh01WTXhNx4prBXgKQM6D10qkhslvarPQ5qysMHruG6TuxukkK57tfxsV54UEpI2xB4xf3b3GaqIQK4iqNCj0cXWW%2FlOKJfZlDJajuf1eOuczKqd7RpPDZYLIHyyx8PXV3hSMjm%2F6x5Yn1nW13t73WsRF4yaq1ndXfif5H7L4%2FjAXa77fgf1wQH%2FXt%2BEVzbWRakZ4Vpr554xqMK6aTmQw0fEf0pZvBQEPcd%2BX6HzHp%2FZq791cSLTpGY9UmYt9qaFW6t%2B0Z1U5yeZty6je7vXbj93CzylUXi0uaVE%2BrfhUmb78xTelII%2BUycmadIUJwlxBfyQaQx6tdoZIhA9xqcEsTeJGQk9YTc2p87w4BPq4hS4pgzG3LBeGpAqshuPQz%2FNhFiQR9Wvg%2FUV0T1CftXFTwqWF0xZWrmZlPwb2a6XCOotcuBN%2Ftd%2F2ZkcxswBjTTZ01dw0NhxmGI%2Bwaw6IvP5WoRI3BJIax7UXvrkQOBjUm6nYP74eXNNL5FO56PfUn%2BBpbVEFwdkltEavNmtMFoQX8P4%2BTbh4MF5NvGZlsF8DZhQ1vhgkTq0jyvrQ2apImF1dl18%2FgkOlhXnSAlYdIaMNv6q8AGOqUBLANe8US%2B6rcZARQ0Mq5VpLRhoWjymCZzaRhwmH7zBf76GRnXRu2O8mTNTt%2FepYGkNSTkF6wOjpmhKccJB37nCDfZcMAYkfC47HBaOnhnst2E1voE3jrKixzgzhA%2F59M6b0ZfUbMdVr8cEnXxwB1a4WEyr0Rp976dot972TVVof6nxlRt3NtwpCMsVDSb727%2BnAY04g1DY9tXJm4CQ2VGNAn%2FCEgF&X-Amz-Signature=c6d173a8c639ac22477485fa757d4f4601bf1a75e6f1dc2a92a0ad4a78d92760&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4AEUM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElEmhNbnf%2Fq9qGJV%2F7VyCK7WZ3E3uMJdx%2Bx4QXzyDtbAiEAoq5pWHDQtSkPINVUYdsjri2WD%2F%2FnBUpkKhbiepQzYFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMLw2QHiViPUEmiF3yrcA9phQlAtzNxSgPlO%2Bc3xZByMeyqJoDMcmk34Nj3LNRh01WTXhNx4prBXgKQM6D10qkhslvarPQ5qysMHruG6TuxukkK57tfxsV54UEpI2xB4xf3b3GaqIQK4iqNCj0cXWW%2FlOKJfZlDJajuf1eOuczKqd7RpPDZYLIHyyx8PXV3hSMjm%2F6x5Yn1nW13t73WsRF4yaq1ndXfif5H7L4%2FjAXa77fgf1wQH%2FXt%2BEVzbWRakZ4Vpr554xqMK6aTmQw0fEf0pZvBQEPcd%2BX6HzHp%2FZq791cSLTpGY9UmYt9qaFW6t%2B0Z1U5yeZty6je7vXbj93CzylUXi0uaVE%2BrfhUmb78xTelII%2BUycmadIUJwlxBfyQaQx6tdoZIhA9xqcEsTeJGQk9YTc2p87w4BPq4hS4pgzG3LBeGpAqshuPQz%2FNhFiQR9Wvg%2FUV0T1CftXFTwqWF0xZWrmZlPwb2a6XCOotcuBN%2Ftd%2F2ZkcxswBjTTZ01dw0NhxmGI%2Bwaw6IvP5WoRI3BJIax7UXvrkQOBjUm6nYP74eXNNL5FO56PfUn%2BBpbVEFwdkltEavNmtMFoQX8P4%2BTbh4MF5NvGZlsF8DZhQ1vhgkTq0jyvrQ2apImF1dl18%2FgkOlhXnSAlYdIaMNv6q8AGOqUBLANe8US%2B6rcZARQ0Mq5VpLRhoWjymCZzaRhwmH7zBf76GRnXRu2O8mTNTt%2FepYGkNSTkF6wOjpmhKccJB37nCDfZcMAYkfC47HBaOnhnst2E1voE3jrKixzgzhA%2F59M6b0ZfUbMdVr8cEnXxwB1a4WEyr0Rp976dot972TVVof6nxlRt3NtwpCMsVDSb727%2BnAY04g1DY9tXJm4CQ2VGNAn%2FCEgF&X-Amz-Signature=0313c337b02e3ddea5b9a9658f3798c1172b86570f674e064f91cf415707a327&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6U4AEUM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElEmhNbnf%2Fq9qGJV%2F7VyCK7WZ3E3uMJdx%2Bx4QXzyDtbAiEAoq5pWHDQtSkPINVUYdsjri2WD%2F%2FnBUpkKhbiepQzYFUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMLw2QHiViPUEmiF3yrcA9phQlAtzNxSgPlO%2Bc3xZByMeyqJoDMcmk34Nj3LNRh01WTXhNx4prBXgKQM6D10qkhslvarPQ5qysMHruG6TuxukkK57tfxsV54UEpI2xB4xf3b3GaqIQK4iqNCj0cXWW%2FlOKJfZlDJajuf1eOuczKqd7RpPDZYLIHyyx8PXV3hSMjm%2F6x5Yn1nW13t73WsRF4yaq1ndXfif5H7L4%2FjAXa77fgf1wQH%2FXt%2BEVzbWRakZ4Vpr554xqMK6aTmQw0fEf0pZvBQEPcd%2BX6HzHp%2FZq791cSLTpGY9UmYt9qaFW6t%2B0Z1U5yeZty6je7vXbj93CzylUXi0uaVE%2BrfhUmb78xTelII%2BUycmadIUJwlxBfyQaQx6tdoZIhA9xqcEsTeJGQk9YTc2p87w4BPq4hS4pgzG3LBeGpAqshuPQz%2FNhFiQR9Wvg%2FUV0T1CftXFTwqWF0xZWrmZlPwb2a6XCOotcuBN%2Ftd%2F2ZkcxswBjTTZ01dw0NhxmGI%2Bwaw6IvP5WoRI3BJIax7UXvrkQOBjUm6nYP74eXNNL5FO56PfUn%2BBpbVEFwdkltEavNmtMFoQX8P4%2BTbh4MF5NvGZlsF8DZhQ1vhgkTq0jyvrQ2apImF1dl18%2FgkOlhXnSAlYdIaMNv6q8AGOqUBLANe8US%2B6rcZARQ0Mq5VpLRhoWjymCZzaRhwmH7zBf76GRnXRu2O8mTNTt%2FepYGkNSTkF6wOjpmhKccJB37nCDfZcMAYkfC47HBaOnhnst2E1voE3jrKixzgzhA%2F59M6b0ZfUbMdVr8cEnXxwB1a4WEyr0Rp976dot972TVVof6nxlRt3NtwpCMsVDSb727%2BnAY04g1DY9tXJm4CQ2VGNAn%2FCEgF&X-Amz-Signature=32acc6557ee6b05a932024a9ca57417271e246bfcc4b7fc151f8fb7357cbe129&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
