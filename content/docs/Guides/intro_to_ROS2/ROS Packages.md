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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJRHCUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDBEhtJFvMKMbXmjK6IQpyM56vrc22YMXbNmBIhW%2BxRqwIhAOYqxTA6wQF8KoLjFOQM5HE%2F36CeYvEAsuLs4dnoHehjKv8DCGYQABoMNjM3NDIzMTgzODA1IgxjkWt5l%2FZoimqAn0wq3AMQVim3dBqZY8YrQwHubpodhYyzk8iLK%2FtCT1tdKirRZb8XRj6HAdHucYzAsLEWNnejIrOvjrN9jnaneeIfkbdVt%2FwyPxO2JHJgNj3n4XlQzdRffjr9iqqtjc5uyhzxuJs%2BmeMOQ%2FfLMRYVPfooTJPEFFCaVvmuSZzDvXtoPmDvvwup2BIDSgCr2Hqd9UCeOtqTON3wGZt1UN%2Bot%2F%2BorVa%2BK7wgELHGCNk4957iac0aTX4g21WpjoTZxmBMDd4FGY2XJ9YJXf5OSElrf1wVBg1M9nYlqATO4kJVHTttT1Q2bnnisDxI265cz8BaAYbXAZkINtWReXMGMX54EV2xzsm5kr0XwRCulkMGRu%2B5N%2BSibp7EGuvldbpUT893rexmh1gFLT%2Byd%2BVTftSUgqSi3FRwQj1t%2FTJEGdevMvad3MIkXRCSPO9nm2AHGQZg7I5dRWg9ava7WGXG5wH%2FexiBfdOdQzbvXKY1HkH87gYoInVML9Av0bTrpnk3tI75yNe2EMfsUT36CwIp4vI%2BWE4OEbI4rj8xKw4QBaL3Q7ojKmoiOkDphnJMh%2B4nTmFRjZ5cTAEesAXdXchh1xDgQBsKCXL0MKecYxWdl0tRy2e%2BO3J%2FhFLlg4DLWFSmmIl9FTCx%2F5TEBjqkAW%2FYPjOEwckL2RESqgizpukZNvWbGz8jOtqQ6j6g0Ui4%2FM3sEhDk6Jiw1ujIHzdCS7%2FU2RxS8PMlDky7LY0qHaEFrcTbkj0Ff4NA6tIhmDj7%2FIEWoS%2FDyFYmjOFvOGe0FdrLgLgm9uWu4K%2Bp6rmTOhyj7rJV%2BF4C8gRr9khchPwSbDB0B79YZ3QYocF3knjx%2BSIJP7Xm9lOA8jebPcLS7aLXr%2B2k&X-Amz-Signature=a9e5f4e0d02b8c04b0e8309baba9f685c3cc89a876d03aaff87f597f6e25b695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJRHCUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDBEhtJFvMKMbXmjK6IQpyM56vrc22YMXbNmBIhW%2BxRqwIhAOYqxTA6wQF8KoLjFOQM5HE%2F36CeYvEAsuLs4dnoHehjKv8DCGYQABoMNjM3NDIzMTgzODA1IgxjkWt5l%2FZoimqAn0wq3AMQVim3dBqZY8YrQwHubpodhYyzk8iLK%2FtCT1tdKirRZb8XRj6HAdHucYzAsLEWNnejIrOvjrN9jnaneeIfkbdVt%2FwyPxO2JHJgNj3n4XlQzdRffjr9iqqtjc5uyhzxuJs%2BmeMOQ%2FfLMRYVPfooTJPEFFCaVvmuSZzDvXtoPmDvvwup2BIDSgCr2Hqd9UCeOtqTON3wGZt1UN%2Bot%2F%2BorVa%2BK7wgELHGCNk4957iac0aTX4g21WpjoTZxmBMDd4FGY2XJ9YJXf5OSElrf1wVBg1M9nYlqATO4kJVHTttT1Q2bnnisDxI265cz8BaAYbXAZkINtWReXMGMX54EV2xzsm5kr0XwRCulkMGRu%2B5N%2BSibp7EGuvldbpUT893rexmh1gFLT%2Byd%2BVTftSUgqSi3FRwQj1t%2FTJEGdevMvad3MIkXRCSPO9nm2AHGQZg7I5dRWg9ava7WGXG5wH%2FexiBfdOdQzbvXKY1HkH87gYoInVML9Av0bTrpnk3tI75yNe2EMfsUT36CwIp4vI%2BWE4OEbI4rj8xKw4QBaL3Q7ojKmoiOkDphnJMh%2B4nTmFRjZ5cTAEesAXdXchh1xDgQBsKCXL0MKecYxWdl0tRy2e%2BO3J%2FhFLlg4DLWFSmmIl9FTCx%2F5TEBjqkAW%2FYPjOEwckL2RESqgizpukZNvWbGz8jOtqQ6j6g0Ui4%2FM3sEhDk6Jiw1ujIHzdCS7%2FU2RxS8PMlDky7LY0qHaEFrcTbkj0Ff4NA6tIhmDj7%2FIEWoS%2FDyFYmjOFvOGe0FdrLgLgm9uWu4K%2Bp6rmTOhyj7rJV%2BF4C8gRr9khchPwSbDB0B79YZ3QYocF3knjx%2BSIJP7Xm9lOA8jebPcLS7aLXr%2B2k&X-Amz-Signature=5446eae71de8c9d8fdb4bec437474eff4430026ded308b35691114db5adb5510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJRHCUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDBEhtJFvMKMbXmjK6IQpyM56vrc22YMXbNmBIhW%2BxRqwIhAOYqxTA6wQF8KoLjFOQM5HE%2F36CeYvEAsuLs4dnoHehjKv8DCGYQABoMNjM3NDIzMTgzODA1IgxjkWt5l%2FZoimqAn0wq3AMQVim3dBqZY8YrQwHubpodhYyzk8iLK%2FtCT1tdKirRZb8XRj6HAdHucYzAsLEWNnejIrOvjrN9jnaneeIfkbdVt%2FwyPxO2JHJgNj3n4XlQzdRffjr9iqqtjc5uyhzxuJs%2BmeMOQ%2FfLMRYVPfooTJPEFFCaVvmuSZzDvXtoPmDvvwup2BIDSgCr2Hqd9UCeOtqTON3wGZt1UN%2Bot%2F%2BorVa%2BK7wgELHGCNk4957iac0aTX4g21WpjoTZxmBMDd4FGY2XJ9YJXf5OSElrf1wVBg1M9nYlqATO4kJVHTttT1Q2bnnisDxI265cz8BaAYbXAZkINtWReXMGMX54EV2xzsm5kr0XwRCulkMGRu%2B5N%2BSibp7EGuvldbpUT893rexmh1gFLT%2Byd%2BVTftSUgqSi3FRwQj1t%2FTJEGdevMvad3MIkXRCSPO9nm2AHGQZg7I5dRWg9ava7WGXG5wH%2FexiBfdOdQzbvXKY1HkH87gYoInVML9Av0bTrpnk3tI75yNe2EMfsUT36CwIp4vI%2BWE4OEbI4rj8xKw4QBaL3Q7ojKmoiOkDphnJMh%2B4nTmFRjZ5cTAEesAXdXchh1xDgQBsKCXL0MKecYxWdl0tRy2e%2BO3J%2FhFLlg4DLWFSmmIl9FTCx%2F5TEBjqkAW%2FYPjOEwckL2RESqgizpukZNvWbGz8jOtqQ6j6g0Ui4%2FM3sEhDk6Jiw1ujIHzdCS7%2FU2RxS8PMlDky7LY0qHaEFrcTbkj0Ff4NA6tIhmDj7%2FIEWoS%2FDyFYmjOFvOGe0FdrLgLgm9uWu4K%2Bp6rmTOhyj7rJV%2BF4C8gRr9khchPwSbDB0B79YZ3QYocF3knjx%2BSIJP7Xm9lOA8jebPcLS7aLXr%2B2k&X-Amz-Signature=ee3a7570b9085003214280b5f5a97d91382731734ed6b38eeec5d39d383ef651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJRHCUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDBEhtJFvMKMbXmjK6IQpyM56vrc22YMXbNmBIhW%2BxRqwIhAOYqxTA6wQF8KoLjFOQM5HE%2F36CeYvEAsuLs4dnoHehjKv8DCGYQABoMNjM3NDIzMTgzODA1IgxjkWt5l%2FZoimqAn0wq3AMQVim3dBqZY8YrQwHubpodhYyzk8iLK%2FtCT1tdKirRZb8XRj6HAdHucYzAsLEWNnejIrOvjrN9jnaneeIfkbdVt%2FwyPxO2JHJgNj3n4XlQzdRffjr9iqqtjc5uyhzxuJs%2BmeMOQ%2FfLMRYVPfooTJPEFFCaVvmuSZzDvXtoPmDvvwup2BIDSgCr2Hqd9UCeOtqTON3wGZt1UN%2Bot%2F%2BorVa%2BK7wgELHGCNk4957iac0aTX4g21WpjoTZxmBMDd4FGY2XJ9YJXf5OSElrf1wVBg1M9nYlqATO4kJVHTttT1Q2bnnisDxI265cz8BaAYbXAZkINtWReXMGMX54EV2xzsm5kr0XwRCulkMGRu%2B5N%2BSibp7EGuvldbpUT893rexmh1gFLT%2Byd%2BVTftSUgqSi3FRwQj1t%2FTJEGdevMvad3MIkXRCSPO9nm2AHGQZg7I5dRWg9ava7WGXG5wH%2FexiBfdOdQzbvXKY1HkH87gYoInVML9Av0bTrpnk3tI75yNe2EMfsUT36CwIp4vI%2BWE4OEbI4rj8xKw4QBaL3Q7ojKmoiOkDphnJMh%2B4nTmFRjZ5cTAEesAXdXchh1xDgQBsKCXL0MKecYxWdl0tRy2e%2BO3J%2FhFLlg4DLWFSmmIl9FTCx%2F5TEBjqkAW%2FYPjOEwckL2RESqgizpukZNvWbGz8jOtqQ6j6g0Ui4%2FM3sEhDk6Jiw1ujIHzdCS7%2FU2RxS8PMlDky7LY0qHaEFrcTbkj0Ff4NA6tIhmDj7%2FIEWoS%2FDyFYmjOFvOGe0FdrLgLgm9uWu4K%2Bp6rmTOhyj7rJV%2BF4C8gRr9khchPwSbDB0B79YZ3QYocF3knjx%2BSIJP7Xm9lOA8jebPcLS7aLXr%2B2k&X-Amz-Signature=65dae2ee1bbf6697b870157dece2b2b4d9fad1ae1b7248859267edd1f9b0f4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJRHCUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDBEhtJFvMKMbXmjK6IQpyM56vrc22YMXbNmBIhW%2BxRqwIhAOYqxTA6wQF8KoLjFOQM5HE%2F36CeYvEAsuLs4dnoHehjKv8DCGYQABoMNjM3NDIzMTgzODA1IgxjkWt5l%2FZoimqAn0wq3AMQVim3dBqZY8YrQwHubpodhYyzk8iLK%2FtCT1tdKirRZb8XRj6HAdHucYzAsLEWNnejIrOvjrN9jnaneeIfkbdVt%2FwyPxO2JHJgNj3n4XlQzdRffjr9iqqtjc5uyhzxuJs%2BmeMOQ%2FfLMRYVPfooTJPEFFCaVvmuSZzDvXtoPmDvvwup2BIDSgCr2Hqd9UCeOtqTON3wGZt1UN%2Bot%2F%2BorVa%2BK7wgELHGCNk4957iac0aTX4g21WpjoTZxmBMDd4FGY2XJ9YJXf5OSElrf1wVBg1M9nYlqATO4kJVHTttT1Q2bnnisDxI265cz8BaAYbXAZkINtWReXMGMX54EV2xzsm5kr0XwRCulkMGRu%2B5N%2BSibp7EGuvldbpUT893rexmh1gFLT%2Byd%2BVTftSUgqSi3FRwQj1t%2FTJEGdevMvad3MIkXRCSPO9nm2AHGQZg7I5dRWg9ava7WGXG5wH%2FexiBfdOdQzbvXKY1HkH87gYoInVML9Av0bTrpnk3tI75yNe2EMfsUT36CwIp4vI%2BWE4OEbI4rj8xKw4QBaL3Q7ojKmoiOkDphnJMh%2B4nTmFRjZ5cTAEesAXdXchh1xDgQBsKCXL0MKecYxWdl0tRy2e%2BO3J%2FhFLlg4DLWFSmmIl9FTCx%2F5TEBjqkAW%2FYPjOEwckL2RESqgizpukZNvWbGz8jOtqQ6j6g0Ui4%2FM3sEhDk6Jiw1ujIHzdCS7%2FU2RxS8PMlDky7LY0qHaEFrcTbkj0Ff4NA6tIhmDj7%2FIEWoS%2FDyFYmjOFvOGe0FdrLgLgm9uWu4K%2Bp6rmTOhyj7rJV%2BF4C8gRr9khchPwSbDB0B79YZ3QYocF3knjx%2BSIJP7Xm9lOA8jebPcLS7aLXr%2B2k&X-Amz-Signature=015a3cc3038299b72d3c41f298505a111208f84bf0576e3902edd3694f937b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJRHCUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDBEhtJFvMKMbXmjK6IQpyM56vrc22YMXbNmBIhW%2BxRqwIhAOYqxTA6wQF8KoLjFOQM5HE%2F36CeYvEAsuLs4dnoHehjKv8DCGYQABoMNjM3NDIzMTgzODA1IgxjkWt5l%2FZoimqAn0wq3AMQVim3dBqZY8YrQwHubpodhYyzk8iLK%2FtCT1tdKirRZb8XRj6HAdHucYzAsLEWNnejIrOvjrN9jnaneeIfkbdVt%2FwyPxO2JHJgNj3n4XlQzdRffjr9iqqtjc5uyhzxuJs%2BmeMOQ%2FfLMRYVPfooTJPEFFCaVvmuSZzDvXtoPmDvvwup2BIDSgCr2Hqd9UCeOtqTON3wGZt1UN%2Bot%2F%2BorVa%2BK7wgELHGCNk4957iac0aTX4g21WpjoTZxmBMDd4FGY2XJ9YJXf5OSElrf1wVBg1M9nYlqATO4kJVHTttT1Q2bnnisDxI265cz8BaAYbXAZkINtWReXMGMX54EV2xzsm5kr0XwRCulkMGRu%2B5N%2BSibp7EGuvldbpUT893rexmh1gFLT%2Byd%2BVTftSUgqSi3FRwQj1t%2FTJEGdevMvad3MIkXRCSPO9nm2AHGQZg7I5dRWg9ava7WGXG5wH%2FexiBfdOdQzbvXKY1HkH87gYoInVML9Av0bTrpnk3tI75yNe2EMfsUT36CwIp4vI%2BWE4OEbI4rj8xKw4QBaL3Q7ojKmoiOkDphnJMh%2B4nTmFRjZ5cTAEesAXdXchh1xDgQBsKCXL0MKecYxWdl0tRy2e%2BO3J%2FhFLlg4DLWFSmmIl9FTCx%2F5TEBjqkAW%2FYPjOEwckL2RESqgizpukZNvWbGz8jOtqQ6j6g0Ui4%2FM3sEhDk6Jiw1ujIHzdCS7%2FU2RxS8PMlDky7LY0qHaEFrcTbkj0Ff4NA6tIhmDj7%2FIEWoS%2FDyFYmjOFvOGe0FdrLgLgm9uWu4K%2Bp6rmTOhyj7rJV%2BF4C8gRr9khchPwSbDB0B79YZ3QYocF3knjx%2BSIJP7Xm9lOA8jebPcLS7aLXr%2B2k&X-Amz-Signature=0a09ed23536203dc7d6077956f0eadc63c15a4bfb67dbcbac1503fdc64e3b411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJRHCUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDBEhtJFvMKMbXmjK6IQpyM56vrc22YMXbNmBIhW%2BxRqwIhAOYqxTA6wQF8KoLjFOQM5HE%2F36CeYvEAsuLs4dnoHehjKv8DCGYQABoMNjM3NDIzMTgzODA1IgxjkWt5l%2FZoimqAn0wq3AMQVim3dBqZY8YrQwHubpodhYyzk8iLK%2FtCT1tdKirRZb8XRj6HAdHucYzAsLEWNnejIrOvjrN9jnaneeIfkbdVt%2FwyPxO2JHJgNj3n4XlQzdRffjr9iqqtjc5uyhzxuJs%2BmeMOQ%2FfLMRYVPfooTJPEFFCaVvmuSZzDvXtoPmDvvwup2BIDSgCr2Hqd9UCeOtqTON3wGZt1UN%2Bot%2F%2BorVa%2BK7wgELHGCNk4957iac0aTX4g21WpjoTZxmBMDd4FGY2XJ9YJXf5OSElrf1wVBg1M9nYlqATO4kJVHTttT1Q2bnnisDxI265cz8BaAYbXAZkINtWReXMGMX54EV2xzsm5kr0XwRCulkMGRu%2B5N%2BSibp7EGuvldbpUT893rexmh1gFLT%2Byd%2BVTftSUgqSi3FRwQj1t%2FTJEGdevMvad3MIkXRCSPO9nm2AHGQZg7I5dRWg9ava7WGXG5wH%2FexiBfdOdQzbvXKY1HkH87gYoInVML9Av0bTrpnk3tI75yNe2EMfsUT36CwIp4vI%2BWE4OEbI4rj8xKw4QBaL3Q7ojKmoiOkDphnJMh%2B4nTmFRjZ5cTAEesAXdXchh1xDgQBsKCXL0MKecYxWdl0tRy2e%2BO3J%2FhFLlg4DLWFSmmIl9FTCx%2F5TEBjqkAW%2FYPjOEwckL2RESqgizpukZNvWbGz8jOtqQ6j6g0Ui4%2FM3sEhDk6Jiw1ujIHzdCS7%2FU2RxS8PMlDky7LY0qHaEFrcTbkj0Ff4NA6tIhmDj7%2FIEWoS%2FDyFYmjOFvOGe0FdrLgLgm9uWu4K%2Bp6rmTOhyj7rJV%2BF4C8gRr9khchPwSbDB0B79YZ3QYocF3knjx%2BSIJP7Xm9lOA8jebPcLS7aLXr%2B2k&X-Amz-Signature=361556d370d2ab96be95a663812905052d5b9a552b091e5959a87b00111dd218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
