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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHB7BI4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCgvaoDLH8Qas3uIPxqD%2FOFnWFJ9OTWgapdG814UHa1YgIgEIA1B%2BSOA6VmBHL%2BNB%2BNux06dJGj0mM9JKANTtgs4vMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5UW7%2FxjpV8FyTuZSrcA0Hr86jNMkRrvHZ7hoHQj8vWkmJGjcvm%2BjdLGQFIu3FIC3sHqnFsM5wNtRXJOapPBpv4JDjgTFzivevqw2c5NM%2BLuvCRQ2hNic3fxv9deCIY5BZ%2BuCSw5Hq4Sx4il30FsvetRH0mE9ZFpT82bfDF1%2FREgMj1VZKMrURSCgYFJtj3XvVYaAHh%2B56yhvkh%2BAfvC3mko5Z%2BtadNMOOF01FZedu05i5WuooKSZvjKfukn8gIqkgRPVLAs1m6TTP81%2FHAmuJT9kRMQwpg1J1o83ZoFbuHLABBrH%2FnZC5Sg6l9s7m3GboR%2FtiC%2BUrwr%2FCK%2FQOzJ9wVGjFVe2D9VvpNF%2Bs9mFx1kUJJ4IHX0K9SwIvw1URVL6lDPrgTDIuecNYlEdwl4zCeUK%2BM6EgIXPEMb1ZDyY7w2tENoeGzOt3YVvzDYgIh45RAMvd442DHxi9poU%2B0YdWl9S8cDogrvyWsAKnLA7EbY%2F%2FGQkVGnF1CdVhSgRx18O%2FE3jLTZ460zxGXuusaiCNUAhRmkXy9YKUQ6zUE4kSShlXMQT7JJCwfp8O%2BA7PEy5lKmSXPXR1fEqmU0TG%2BuCyLUbKJlAI9pCdQ%2BSMMddvkr0EYGI9VZLY8urFXkaToKN6QTYwRE5pO7NqKMMukrL8GOqUBAeGkYq1wo7P%2BHj28WIiBgtFrtue9qR9zP5mzisRe9bZYq7hTlVfkmVXlma4dJREWa5SJGun1bqDP0QRg7SUdlr4%2F%2BaEJBZwhfVOLb2hCYROscRHW1NRYiBC7rFzOnHzDMLPXX%2BGE3KiLV1tzjE5jPqyZ95kJRW0XEdcffiGweWXRrBiBwPUL9OXL5MAa3lEJJWUT1d4A2i1slchvz00fH%2FWpJKOR&X-Amz-Signature=72b963674f1a1f9bdde6cfd02db06824649130fc50db9c7d8740e4fac1717e07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHB7BI4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCgvaoDLH8Qas3uIPxqD%2FOFnWFJ9OTWgapdG814UHa1YgIgEIA1B%2BSOA6VmBHL%2BNB%2BNux06dJGj0mM9JKANTtgs4vMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5UW7%2FxjpV8FyTuZSrcA0Hr86jNMkRrvHZ7hoHQj8vWkmJGjcvm%2BjdLGQFIu3FIC3sHqnFsM5wNtRXJOapPBpv4JDjgTFzivevqw2c5NM%2BLuvCRQ2hNic3fxv9deCIY5BZ%2BuCSw5Hq4Sx4il30FsvetRH0mE9ZFpT82bfDF1%2FREgMj1VZKMrURSCgYFJtj3XvVYaAHh%2B56yhvkh%2BAfvC3mko5Z%2BtadNMOOF01FZedu05i5WuooKSZvjKfukn8gIqkgRPVLAs1m6TTP81%2FHAmuJT9kRMQwpg1J1o83ZoFbuHLABBrH%2FnZC5Sg6l9s7m3GboR%2FtiC%2BUrwr%2FCK%2FQOzJ9wVGjFVe2D9VvpNF%2Bs9mFx1kUJJ4IHX0K9SwIvw1URVL6lDPrgTDIuecNYlEdwl4zCeUK%2BM6EgIXPEMb1ZDyY7w2tENoeGzOt3YVvzDYgIh45RAMvd442DHxi9poU%2B0YdWl9S8cDogrvyWsAKnLA7EbY%2F%2FGQkVGnF1CdVhSgRx18O%2FE3jLTZ460zxGXuusaiCNUAhRmkXy9YKUQ6zUE4kSShlXMQT7JJCwfp8O%2BA7PEy5lKmSXPXR1fEqmU0TG%2BuCyLUbKJlAI9pCdQ%2BSMMddvkr0EYGI9VZLY8urFXkaToKN6QTYwRE5pO7NqKMMukrL8GOqUBAeGkYq1wo7P%2BHj28WIiBgtFrtue9qR9zP5mzisRe9bZYq7hTlVfkmVXlma4dJREWa5SJGun1bqDP0QRg7SUdlr4%2F%2BaEJBZwhfVOLb2hCYROscRHW1NRYiBC7rFzOnHzDMLPXX%2BGE3KiLV1tzjE5jPqyZ95kJRW0XEdcffiGweWXRrBiBwPUL9OXL5MAa3lEJJWUT1d4A2i1slchvz00fH%2FWpJKOR&X-Amz-Signature=f6bf6ce781e5fca77b7ed0f6a655b8181376d5003cd6f051ed5cf35b7778864e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHB7BI4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCgvaoDLH8Qas3uIPxqD%2FOFnWFJ9OTWgapdG814UHa1YgIgEIA1B%2BSOA6VmBHL%2BNB%2BNux06dJGj0mM9JKANTtgs4vMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5UW7%2FxjpV8FyTuZSrcA0Hr86jNMkRrvHZ7hoHQj8vWkmJGjcvm%2BjdLGQFIu3FIC3sHqnFsM5wNtRXJOapPBpv4JDjgTFzivevqw2c5NM%2BLuvCRQ2hNic3fxv9deCIY5BZ%2BuCSw5Hq4Sx4il30FsvetRH0mE9ZFpT82bfDF1%2FREgMj1VZKMrURSCgYFJtj3XvVYaAHh%2B56yhvkh%2BAfvC3mko5Z%2BtadNMOOF01FZedu05i5WuooKSZvjKfukn8gIqkgRPVLAs1m6TTP81%2FHAmuJT9kRMQwpg1J1o83ZoFbuHLABBrH%2FnZC5Sg6l9s7m3GboR%2FtiC%2BUrwr%2FCK%2FQOzJ9wVGjFVe2D9VvpNF%2Bs9mFx1kUJJ4IHX0K9SwIvw1URVL6lDPrgTDIuecNYlEdwl4zCeUK%2BM6EgIXPEMb1ZDyY7w2tENoeGzOt3YVvzDYgIh45RAMvd442DHxi9poU%2B0YdWl9S8cDogrvyWsAKnLA7EbY%2F%2FGQkVGnF1CdVhSgRx18O%2FE3jLTZ460zxGXuusaiCNUAhRmkXy9YKUQ6zUE4kSShlXMQT7JJCwfp8O%2BA7PEy5lKmSXPXR1fEqmU0TG%2BuCyLUbKJlAI9pCdQ%2BSMMddvkr0EYGI9VZLY8urFXkaToKN6QTYwRE5pO7NqKMMukrL8GOqUBAeGkYq1wo7P%2BHj28WIiBgtFrtue9qR9zP5mzisRe9bZYq7hTlVfkmVXlma4dJREWa5SJGun1bqDP0QRg7SUdlr4%2F%2BaEJBZwhfVOLb2hCYROscRHW1NRYiBC7rFzOnHzDMLPXX%2BGE3KiLV1tzjE5jPqyZ95kJRW0XEdcffiGweWXRrBiBwPUL9OXL5MAa3lEJJWUT1d4A2i1slchvz00fH%2FWpJKOR&X-Amz-Signature=fbfede41ee93eb15bc51208e34fbda0d5b68776e8c3b7d4fa5d93ed73085b26b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHB7BI4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCgvaoDLH8Qas3uIPxqD%2FOFnWFJ9OTWgapdG814UHa1YgIgEIA1B%2BSOA6VmBHL%2BNB%2BNux06dJGj0mM9JKANTtgs4vMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5UW7%2FxjpV8FyTuZSrcA0Hr86jNMkRrvHZ7hoHQj8vWkmJGjcvm%2BjdLGQFIu3FIC3sHqnFsM5wNtRXJOapPBpv4JDjgTFzivevqw2c5NM%2BLuvCRQ2hNic3fxv9deCIY5BZ%2BuCSw5Hq4Sx4il30FsvetRH0mE9ZFpT82bfDF1%2FREgMj1VZKMrURSCgYFJtj3XvVYaAHh%2B56yhvkh%2BAfvC3mko5Z%2BtadNMOOF01FZedu05i5WuooKSZvjKfukn8gIqkgRPVLAs1m6TTP81%2FHAmuJT9kRMQwpg1J1o83ZoFbuHLABBrH%2FnZC5Sg6l9s7m3GboR%2FtiC%2BUrwr%2FCK%2FQOzJ9wVGjFVe2D9VvpNF%2Bs9mFx1kUJJ4IHX0K9SwIvw1URVL6lDPrgTDIuecNYlEdwl4zCeUK%2BM6EgIXPEMb1ZDyY7w2tENoeGzOt3YVvzDYgIh45RAMvd442DHxi9poU%2B0YdWl9S8cDogrvyWsAKnLA7EbY%2F%2FGQkVGnF1CdVhSgRx18O%2FE3jLTZ460zxGXuusaiCNUAhRmkXy9YKUQ6zUE4kSShlXMQT7JJCwfp8O%2BA7PEy5lKmSXPXR1fEqmU0TG%2BuCyLUbKJlAI9pCdQ%2BSMMddvkr0EYGI9VZLY8urFXkaToKN6QTYwRE5pO7NqKMMukrL8GOqUBAeGkYq1wo7P%2BHj28WIiBgtFrtue9qR9zP5mzisRe9bZYq7hTlVfkmVXlma4dJREWa5SJGun1bqDP0QRg7SUdlr4%2F%2BaEJBZwhfVOLb2hCYROscRHW1NRYiBC7rFzOnHzDMLPXX%2BGE3KiLV1tzjE5jPqyZ95kJRW0XEdcffiGweWXRrBiBwPUL9OXL5MAa3lEJJWUT1d4A2i1slchvz00fH%2FWpJKOR&X-Amz-Signature=3133d500a5679c5f774036532b85cccfbd093b887071b10f057a2f1c48f311ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHB7BI4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCgvaoDLH8Qas3uIPxqD%2FOFnWFJ9OTWgapdG814UHa1YgIgEIA1B%2BSOA6VmBHL%2BNB%2BNux06dJGj0mM9JKANTtgs4vMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5UW7%2FxjpV8FyTuZSrcA0Hr86jNMkRrvHZ7hoHQj8vWkmJGjcvm%2BjdLGQFIu3FIC3sHqnFsM5wNtRXJOapPBpv4JDjgTFzivevqw2c5NM%2BLuvCRQ2hNic3fxv9deCIY5BZ%2BuCSw5Hq4Sx4il30FsvetRH0mE9ZFpT82bfDF1%2FREgMj1VZKMrURSCgYFJtj3XvVYaAHh%2B56yhvkh%2BAfvC3mko5Z%2BtadNMOOF01FZedu05i5WuooKSZvjKfukn8gIqkgRPVLAs1m6TTP81%2FHAmuJT9kRMQwpg1J1o83ZoFbuHLABBrH%2FnZC5Sg6l9s7m3GboR%2FtiC%2BUrwr%2FCK%2FQOzJ9wVGjFVe2D9VvpNF%2Bs9mFx1kUJJ4IHX0K9SwIvw1URVL6lDPrgTDIuecNYlEdwl4zCeUK%2BM6EgIXPEMb1ZDyY7w2tENoeGzOt3YVvzDYgIh45RAMvd442DHxi9poU%2B0YdWl9S8cDogrvyWsAKnLA7EbY%2F%2FGQkVGnF1CdVhSgRx18O%2FE3jLTZ460zxGXuusaiCNUAhRmkXy9YKUQ6zUE4kSShlXMQT7JJCwfp8O%2BA7PEy5lKmSXPXR1fEqmU0TG%2BuCyLUbKJlAI9pCdQ%2BSMMddvkr0EYGI9VZLY8urFXkaToKN6QTYwRE5pO7NqKMMukrL8GOqUBAeGkYq1wo7P%2BHj28WIiBgtFrtue9qR9zP5mzisRe9bZYq7hTlVfkmVXlma4dJREWa5SJGun1bqDP0QRg7SUdlr4%2F%2BaEJBZwhfVOLb2hCYROscRHW1NRYiBC7rFzOnHzDMLPXX%2BGE3KiLV1tzjE5jPqyZ95kJRW0XEdcffiGweWXRrBiBwPUL9OXL5MAa3lEJJWUT1d4A2i1slchvz00fH%2FWpJKOR&X-Amz-Signature=a76ae2914c9433bb5649c53d00dce126f2a08952950fe053cb633eff3ebf2c20&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHB7BI4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCgvaoDLH8Qas3uIPxqD%2FOFnWFJ9OTWgapdG814UHa1YgIgEIA1B%2BSOA6VmBHL%2BNB%2BNux06dJGj0mM9JKANTtgs4vMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5UW7%2FxjpV8FyTuZSrcA0Hr86jNMkRrvHZ7hoHQj8vWkmJGjcvm%2BjdLGQFIu3FIC3sHqnFsM5wNtRXJOapPBpv4JDjgTFzivevqw2c5NM%2BLuvCRQ2hNic3fxv9deCIY5BZ%2BuCSw5Hq4Sx4il30FsvetRH0mE9ZFpT82bfDF1%2FREgMj1VZKMrURSCgYFJtj3XvVYaAHh%2B56yhvkh%2BAfvC3mko5Z%2BtadNMOOF01FZedu05i5WuooKSZvjKfukn8gIqkgRPVLAs1m6TTP81%2FHAmuJT9kRMQwpg1J1o83ZoFbuHLABBrH%2FnZC5Sg6l9s7m3GboR%2FtiC%2BUrwr%2FCK%2FQOzJ9wVGjFVe2D9VvpNF%2Bs9mFx1kUJJ4IHX0K9SwIvw1URVL6lDPrgTDIuecNYlEdwl4zCeUK%2BM6EgIXPEMb1ZDyY7w2tENoeGzOt3YVvzDYgIh45RAMvd442DHxi9poU%2B0YdWl9S8cDogrvyWsAKnLA7EbY%2F%2FGQkVGnF1CdVhSgRx18O%2FE3jLTZ460zxGXuusaiCNUAhRmkXy9YKUQ6zUE4kSShlXMQT7JJCwfp8O%2BA7PEy5lKmSXPXR1fEqmU0TG%2BuCyLUbKJlAI9pCdQ%2BSMMddvkr0EYGI9VZLY8urFXkaToKN6QTYwRE5pO7NqKMMukrL8GOqUBAeGkYq1wo7P%2BHj28WIiBgtFrtue9qR9zP5mzisRe9bZYq7hTlVfkmVXlma4dJREWa5SJGun1bqDP0QRg7SUdlr4%2F%2BaEJBZwhfVOLb2hCYROscRHW1NRYiBC7rFzOnHzDMLPXX%2BGE3KiLV1tzjE5jPqyZ95kJRW0XEdcffiGweWXRrBiBwPUL9OXL5MAa3lEJJWUT1d4A2i1slchvz00fH%2FWpJKOR&X-Amz-Signature=2857ebd4108065b10304cc387f8f0cd1c4b649a7158b534a552a7995c2e00eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LHB7BI4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCgvaoDLH8Qas3uIPxqD%2FOFnWFJ9OTWgapdG814UHa1YgIgEIA1B%2BSOA6VmBHL%2BNB%2BNux06dJGj0mM9JKANTtgs4vMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5UW7%2FxjpV8FyTuZSrcA0Hr86jNMkRrvHZ7hoHQj8vWkmJGjcvm%2BjdLGQFIu3FIC3sHqnFsM5wNtRXJOapPBpv4JDjgTFzivevqw2c5NM%2BLuvCRQ2hNic3fxv9deCIY5BZ%2BuCSw5Hq4Sx4il30FsvetRH0mE9ZFpT82bfDF1%2FREgMj1VZKMrURSCgYFJtj3XvVYaAHh%2B56yhvkh%2BAfvC3mko5Z%2BtadNMOOF01FZedu05i5WuooKSZvjKfukn8gIqkgRPVLAs1m6TTP81%2FHAmuJT9kRMQwpg1J1o83ZoFbuHLABBrH%2FnZC5Sg6l9s7m3GboR%2FtiC%2BUrwr%2FCK%2FQOzJ9wVGjFVe2D9VvpNF%2Bs9mFx1kUJJ4IHX0K9SwIvw1URVL6lDPrgTDIuecNYlEdwl4zCeUK%2BM6EgIXPEMb1ZDyY7w2tENoeGzOt3YVvzDYgIh45RAMvd442DHxi9poU%2B0YdWl9S8cDogrvyWsAKnLA7EbY%2F%2FGQkVGnF1CdVhSgRx18O%2FE3jLTZ460zxGXuusaiCNUAhRmkXy9YKUQ6zUE4kSShlXMQT7JJCwfp8O%2BA7PEy5lKmSXPXR1fEqmU0TG%2BuCyLUbKJlAI9pCdQ%2BSMMddvkr0EYGI9VZLY8urFXkaToKN6QTYwRE5pO7NqKMMukrL8GOqUBAeGkYq1wo7P%2BHj28WIiBgtFrtue9qR9zP5mzisRe9bZYq7hTlVfkmVXlma4dJREWa5SJGun1bqDP0QRg7SUdlr4%2F%2BaEJBZwhfVOLb2hCYROscRHW1NRYiBC7rFzOnHzDMLPXX%2BGE3KiLV1tzjE5jPqyZ95kJRW0XEdcffiGweWXRrBiBwPUL9OXL5MAa3lEJJWUT1d4A2i1slchvz00fH%2FWpJKOR&X-Amz-Signature=447af7c79e164422297664326a02e977f867433c919ab32cf1e2a12ac4ba2949&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
