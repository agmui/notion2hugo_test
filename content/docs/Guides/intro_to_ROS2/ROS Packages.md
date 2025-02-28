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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPA2S7X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhFP0w%2BAWQNEqVnvnYbF7e8Md8BY2zdXMwbTd%2BvRH3HAIhAL8BP32edfYmJI63gsPInNkZsSWzO3g8PzuVhgeoAtC8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU53zn6UxAftGh%2FYgq3APr2nR5QMI8OuQFaBQtia%2BYc2VCqw50VWDelMcu2X8OyoITY0AMdGlKmZLozZhn%2FGXurDbOBYbG0XZOb0TPHtyqhphXLqb2DHhl8%2B6YLbYpD50it6c06%2FGXtv0fbra%2FB%2BAlS5hZZTsBmK3pIJiegc6saD47I%2BC3Bxa2%2B6ORPhjlKXxg3DSNupe0W%2BCRPuUpEP7YM0q8v5hwyFsv2dRi2ieCY%2BlE0GWIsLp0aGTxip8rk7FJ8EsWdOUlgne9KiOP9CCSHaumsV0MddQU4PJZICnZXhsPHwR7rErQ6Ffko05DGpGUy97SH9Gp%2F8zKhCe3A7uyEhnoLFFk8Id7y4qnRqEFjA7SOB5Uygplf61KsdWP%2B%2Fx1QnPSMcfzI0IA4ebnTCclRmGgitJ0h4x40ygh%2BDIFs3QxQZfOYHieZg00UG0QoqWZIU0T%2BcRPof2LKo8QHp4j6j6rIeEFT%2B9ADBgmCFIT%2Blw67pMaVxJxDvJoASKvmCdUKdAaskvGl%2BtipkY3M8slgAj3%2BY3yjcXdDMXpuoc%2ByZaf7LLJjLBHaQYBI2b3N6b07HSXl0OCISqSGBIjbLUyfdduBY68yYhcW2B9PcUzb35JOroKKMlVtxCGaUfS%2FrLUtQOidk3CJiRyDTCD74a%2BBjqkAROIvhAivFn1FWEd1QwTtapxuvfYoIeG%2FZK9QBuKqA1a1ClxVGiqrefyhWsZccMLJFNLKwK5qUee%2Bq5nFQ3jwwSgnTLbBsybnIz1ef6noMo%2BJLnrSDIV0R8YK%2B3Q1htPh%2B0T5vDLEa9xZqPZGkQ2BGnYvX4qepiuqt4JavdpYZz2AetJNAdDpm%2FpK3L224kL72sISGhQUsLGuk0e23OX7Tbky31l&X-Amz-Signature=1a42781fb635675e1cb9b32993725df15b6d506b7216a904ea1dfda71b949e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPA2S7X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhFP0w%2BAWQNEqVnvnYbF7e8Md8BY2zdXMwbTd%2BvRH3HAIhAL8BP32edfYmJI63gsPInNkZsSWzO3g8PzuVhgeoAtC8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU53zn6UxAftGh%2FYgq3APr2nR5QMI8OuQFaBQtia%2BYc2VCqw50VWDelMcu2X8OyoITY0AMdGlKmZLozZhn%2FGXurDbOBYbG0XZOb0TPHtyqhphXLqb2DHhl8%2B6YLbYpD50it6c06%2FGXtv0fbra%2FB%2BAlS5hZZTsBmK3pIJiegc6saD47I%2BC3Bxa2%2B6ORPhjlKXxg3DSNupe0W%2BCRPuUpEP7YM0q8v5hwyFsv2dRi2ieCY%2BlE0GWIsLp0aGTxip8rk7FJ8EsWdOUlgne9KiOP9CCSHaumsV0MddQU4PJZICnZXhsPHwR7rErQ6Ffko05DGpGUy97SH9Gp%2F8zKhCe3A7uyEhnoLFFk8Id7y4qnRqEFjA7SOB5Uygplf61KsdWP%2B%2Fx1QnPSMcfzI0IA4ebnTCclRmGgitJ0h4x40ygh%2BDIFs3QxQZfOYHieZg00UG0QoqWZIU0T%2BcRPof2LKo8QHp4j6j6rIeEFT%2B9ADBgmCFIT%2Blw67pMaVxJxDvJoASKvmCdUKdAaskvGl%2BtipkY3M8slgAj3%2BY3yjcXdDMXpuoc%2ByZaf7LLJjLBHaQYBI2b3N6b07HSXl0OCISqSGBIjbLUyfdduBY68yYhcW2B9PcUzb35JOroKKMlVtxCGaUfS%2FrLUtQOidk3CJiRyDTCD74a%2BBjqkAROIvhAivFn1FWEd1QwTtapxuvfYoIeG%2FZK9QBuKqA1a1ClxVGiqrefyhWsZccMLJFNLKwK5qUee%2Bq5nFQ3jwwSgnTLbBsybnIz1ef6noMo%2BJLnrSDIV0R8YK%2B3Q1htPh%2B0T5vDLEa9xZqPZGkQ2BGnYvX4qepiuqt4JavdpYZz2AetJNAdDpm%2FpK3L224kL72sISGhQUsLGuk0e23OX7Tbky31l&X-Amz-Signature=860d3bee0d49df0470d37342fecaf16f60c7d95573c8cd904752eed0a75dce27&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPA2S7X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhFP0w%2BAWQNEqVnvnYbF7e8Md8BY2zdXMwbTd%2BvRH3HAIhAL8BP32edfYmJI63gsPInNkZsSWzO3g8PzuVhgeoAtC8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU53zn6UxAftGh%2FYgq3APr2nR5QMI8OuQFaBQtia%2BYc2VCqw50VWDelMcu2X8OyoITY0AMdGlKmZLozZhn%2FGXurDbOBYbG0XZOb0TPHtyqhphXLqb2DHhl8%2B6YLbYpD50it6c06%2FGXtv0fbra%2FB%2BAlS5hZZTsBmK3pIJiegc6saD47I%2BC3Bxa2%2B6ORPhjlKXxg3DSNupe0W%2BCRPuUpEP7YM0q8v5hwyFsv2dRi2ieCY%2BlE0GWIsLp0aGTxip8rk7FJ8EsWdOUlgne9KiOP9CCSHaumsV0MddQU4PJZICnZXhsPHwR7rErQ6Ffko05DGpGUy97SH9Gp%2F8zKhCe3A7uyEhnoLFFk8Id7y4qnRqEFjA7SOB5Uygplf61KsdWP%2B%2Fx1QnPSMcfzI0IA4ebnTCclRmGgitJ0h4x40ygh%2BDIFs3QxQZfOYHieZg00UG0QoqWZIU0T%2BcRPof2LKo8QHp4j6j6rIeEFT%2B9ADBgmCFIT%2Blw67pMaVxJxDvJoASKvmCdUKdAaskvGl%2BtipkY3M8slgAj3%2BY3yjcXdDMXpuoc%2ByZaf7LLJjLBHaQYBI2b3N6b07HSXl0OCISqSGBIjbLUyfdduBY68yYhcW2B9PcUzb35JOroKKMlVtxCGaUfS%2FrLUtQOidk3CJiRyDTCD74a%2BBjqkAROIvhAivFn1FWEd1QwTtapxuvfYoIeG%2FZK9QBuKqA1a1ClxVGiqrefyhWsZccMLJFNLKwK5qUee%2Bq5nFQ3jwwSgnTLbBsybnIz1ef6noMo%2BJLnrSDIV0R8YK%2B3Q1htPh%2B0T5vDLEa9xZqPZGkQ2BGnYvX4qepiuqt4JavdpYZz2AetJNAdDpm%2FpK3L224kL72sISGhQUsLGuk0e23OX7Tbky31l&X-Amz-Signature=c49da142b664805c7e673f289a8ceb1a57c9268356cd536503c90e9b0cfe6cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPA2S7X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhFP0w%2BAWQNEqVnvnYbF7e8Md8BY2zdXMwbTd%2BvRH3HAIhAL8BP32edfYmJI63gsPInNkZsSWzO3g8PzuVhgeoAtC8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU53zn6UxAftGh%2FYgq3APr2nR5QMI8OuQFaBQtia%2BYc2VCqw50VWDelMcu2X8OyoITY0AMdGlKmZLozZhn%2FGXurDbOBYbG0XZOb0TPHtyqhphXLqb2DHhl8%2B6YLbYpD50it6c06%2FGXtv0fbra%2FB%2BAlS5hZZTsBmK3pIJiegc6saD47I%2BC3Bxa2%2B6ORPhjlKXxg3DSNupe0W%2BCRPuUpEP7YM0q8v5hwyFsv2dRi2ieCY%2BlE0GWIsLp0aGTxip8rk7FJ8EsWdOUlgne9KiOP9CCSHaumsV0MddQU4PJZICnZXhsPHwR7rErQ6Ffko05DGpGUy97SH9Gp%2F8zKhCe3A7uyEhnoLFFk8Id7y4qnRqEFjA7SOB5Uygplf61KsdWP%2B%2Fx1QnPSMcfzI0IA4ebnTCclRmGgitJ0h4x40ygh%2BDIFs3QxQZfOYHieZg00UG0QoqWZIU0T%2BcRPof2LKo8QHp4j6j6rIeEFT%2B9ADBgmCFIT%2Blw67pMaVxJxDvJoASKvmCdUKdAaskvGl%2BtipkY3M8slgAj3%2BY3yjcXdDMXpuoc%2ByZaf7LLJjLBHaQYBI2b3N6b07HSXl0OCISqSGBIjbLUyfdduBY68yYhcW2B9PcUzb35JOroKKMlVtxCGaUfS%2FrLUtQOidk3CJiRyDTCD74a%2BBjqkAROIvhAivFn1FWEd1QwTtapxuvfYoIeG%2FZK9QBuKqA1a1ClxVGiqrefyhWsZccMLJFNLKwK5qUee%2Bq5nFQ3jwwSgnTLbBsybnIz1ef6noMo%2BJLnrSDIV0R8YK%2B3Q1htPh%2B0T5vDLEa9xZqPZGkQ2BGnYvX4qepiuqt4JavdpYZz2AetJNAdDpm%2FpK3L224kL72sISGhQUsLGuk0e23OX7Tbky31l&X-Amz-Signature=357cb03899d19b67cdd6186196400337d205443f4a015cacaae3a90a3845c2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPA2S7X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhFP0w%2BAWQNEqVnvnYbF7e8Md8BY2zdXMwbTd%2BvRH3HAIhAL8BP32edfYmJI63gsPInNkZsSWzO3g8PzuVhgeoAtC8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU53zn6UxAftGh%2FYgq3APr2nR5QMI8OuQFaBQtia%2BYc2VCqw50VWDelMcu2X8OyoITY0AMdGlKmZLozZhn%2FGXurDbOBYbG0XZOb0TPHtyqhphXLqb2DHhl8%2B6YLbYpD50it6c06%2FGXtv0fbra%2FB%2BAlS5hZZTsBmK3pIJiegc6saD47I%2BC3Bxa2%2B6ORPhjlKXxg3DSNupe0W%2BCRPuUpEP7YM0q8v5hwyFsv2dRi2ieCY%2BlE0GWIsLp0aGTxip8rk7FJ8EsWdOUlgne9KiOP9CCSHaumsV0MddQU4PJZICnZXhsPHwR7rErQ6Ffko05DGpGUy97SH9Gp%2F8zKhCe3A7uyEhnoLFFk8Id7y4qnRqEFjA7SOB5Uygplf61KsdWP%2B%2Fx1QnPSMcfzI0IA4ebnTCclRmGgitJ0h4x40ygh%2BDIFs3QxQZfOYHieZg00UG0QoqWZIU0T%2BcRPof2LKo8QHp4j6j6rIeEFT%2B9ADBgmCFIT%2Blw67pMaVxJxDvJoASKvmCdUKdAaskvGl%2BtipkY3M8slgAj3%2BY3yjcXdDMXpuoc%2ByZaf7LLJjLBHaQYBI2b3N6b07HSXl0OCISqSGBIjbLUyfdduBY68yYhcW2B9PcUzb35JOroKKMlVtxCGaUfS%2FrLUtQOidk3CJiRyDTCD74a%2BBjqkAROIvhAivFn1FWEd1QwTtapxuvfYoIeG%2FZK9QBuKqA1a1ClxVGiqrefyhWsZccMLJFNLKwK5qUee%2Bq5nFQ3jwwSgnTLbBsybnIz1ef6noMo%2BJLnrSDIV0R8YK%2B3Q1htPh%2B0T5vDLEa9xZqPZGkQ2BGnYvX4qepiuqt4JavdpYZz2AetJNAdDpm%2FpK3L224kL72sISGhQUsLGuk0e23OX7Tbky31l&X-Amz-Signature=23039c4f91c7524821739aec534f7b47448b80e36ff0330db5ceb6a3cfd04666&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPA2S7X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhFP0w%2BAWQNEqVnvnYbF7e8Md8BY2zdXMwbTd%2BvRH3HAIhAL8BP32edfYmJI63gsPInNkZsSWzO3g8PzuVhgeoAtC8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU53zn6UxAftGh%2FYgq3APr2nR5QMI8OuQFaBQtia%2BYc2VCqw50VWDelMcu2X8OyoITY0AMdGlKmZLozZhn%2FGXurDbOBYbG0XZOb0TPHtyqhphXLqb2DHhl8%2B6YLbYpD50it6c06%2FGXtv0fbra%2FB%2BAlS5hZZTsBmK3pIJiegc6saD47I%2BC3Bxa2%2B6ORPhjlKXxg3DSNupe0W%2BCRPuUpEP7YM0q8v5hwyFsv2dRi2ieCY%2BlE0GWIsLp0aGTxip8rk7FJ8EsWdOUlgne9KiOP9CCSHaumsV0MddQU4PJZICnZXhsPHwR7rErQ6Ffko05DGpGUy97SH9Gp%2F8zKhCe3A7uyEhnoLFFk8Id7y4qnRqEFjA7SOB5Uygplf61KsdWP%2B%2Fx1QnPSMcfzI0IA4ebnTCclRmGgitJ0h4x40ygh%2BDIFs3QxQZfOYHieZg00UG0QoqWZIU0T%2BcRPof2LKo8QHp4j6j6rIeEFT%2B9ADBgmCFIT%2Blw67pMaVxJxDvJoASKvmCdUKdAaskvGl%2BtipkY3M8slgAj3%2BY3yjcXdDMXpuoc%2ByZaf7LLJjLBHaQYBI2b3N6b07HSXl0OCISqSGBIjbLUyfdduBY68yYhcW2B9PcUzb35JOroKKMlVtxCGaUfS%2FrLUtQOidk3CJiRyDTCD74a%2BBjqkAROIvhAivFn1FWEd1QwTtapxuvfYoIeG%2FZK9QBuKqA1a1ClxVGiqrefyhWsZccMLJFNLKwK5qUee%2Bq5nFQ3jwwSgnTLbBsybnIz1ef6noMo%2BJLnrSDIV0R8YK%2B3Q1htPh%2B0T5vDLEa9xZqPZGkQ2BGnYvX4qepiuqt4JavdpYZz2AetJNAdDpm%2FpK3L224kL72sISGhQUsLGuk0e23OX7Tbky31l&X-Amz-Signature=3ae271b52f48af7143573b42d0436737861039210932125cbf3319d0e815b1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPA2S7X%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDhFP0w%2BAWQNEqVnvnYbF7e8Md8BY2zdXMwbTd%2BvRH3HAIhAL8BP32edfYmJI63gsPInNkZsSWzO3g8PzuVhgeoAtC8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU53zn6UxAftGh%2FYgq3APr2nR5QMI8OuQFaBQtia%2BYc2VCqw50VWDelMcu2X8OyoITY0AMdGlKmZLozZhn%2FGXurDbOBYbG0XZOb0TPHtyqhphXLqb2DHhl8%2B6YLbYpD50it6c06%2FGXtv0fbra%2FB%2BAlS5hZZTsBmK3pIJiegc6saD47I%2BC3Bxa2%2B6ORPhjlKXxg3DSNupe0W%2BCRPuUpEP7YM0q8v5hwyFsv2dRi2ieCY%2BlE0GWIsLp0aGTxip8rk7FJ8EsWdOUlgne9KiOP9CCSHaumsV0MddQU4PJZICnZXhsPHwR7rErQ6Ffko05DGpGUy97SH9Gp%2F8zKhCe3A7uyEhnoLFFk8Id7y4qnRqEFjA7SOB5Uygplf61KsdWP%2B%2Fx1QnPSMcfzI0IA4ebnTCclRmGgitJ0h4x40ygh%2BDIFs3QxQZfOYHieZg00UG0QoqWZIU0T%2BcRPof2LKo8QHp4j6j6rIeEFT%2B9ADBgmCFIT%2Blw67pMaVxJxDvJoASKvmCdUKdAaskvGl%2BtipkY3M8slgAj3%2BY3yjcXdDMXpuoc%2ByZaf7LLJjLBHaQYBI2b3N6b07HSXl0OCISqSGBIjbLUyfdduBY68yYhcW2B9PcUzb35JOroKKMlVtxCGaUfS%2FrLUtQOidk3CJiRyDTCD74a%2BBjqkAROIvhAivFn1FWEd1QwTtapxuvfYoIeG%2FZK9QBuKqA1a1ClxVGiqrefyhWsZccMLJFNLKwK5qUee%2Bq5nFQ3jwwSgnTLbBsybnIz1ef6noMo%2BJLnrSDIV0R8YK%2B3Q1htPh%2B0T5vDLEa9xZqPZGkQ2BGnYvX4qepiuqt4JavdpYZz2AetJNAdDpm%2FpK3L224kL72sISGhQUsLGuk0e23OX7Tbky31l&X-Amz-Signature=d03bb8e8926bb1b6a7efe7d8857825ac33738dfa61891ef964425d1f42f37627&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
