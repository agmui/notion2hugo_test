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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIFH65H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBMKYk82I6RUC2%2B5Ge7p2o0YS%2FamXqPP1uyitSgCLDb3AiEAiGKyeo2qraQyD6gDviHr01W0NKrr6s40EnvxP3Qe6YYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrwo2Q%2FiWHLrsyGOircA4enmYIYiu32HLDlyk911jgqu1IXXvwsabHb4O%2Ba8J53uDZ0600s2uIHHQK8n6dzvExjSS6i%2BA7Bn%2BaXT4RdnW92DjF%2BT4MVgyMfEaDQZfeXUtgCbxGCjKqoKIiCka2DT86val3oRfo3Q%2F9BAxiZR24uJ65gbeTDCTEi5t7XmeWSL8QM1QvYLXNaYOVV%2F5z6PAIXPFoA7mXPKbT5VWANMO7jTuJsmz6yEWD756QThTN9uNSV32x0H22SAHrSy1pdPRZCQ2EVwV%2FVGRZoEhol9GOu%2BbdLyuM7qunaiS2PCzD0B2MaRNaCJiU%2B9nJ4QtInswqFMbrvVCohrp8gRwSoeZ7Vil4DbwppWghfMXwBNJjVlBbctAnqhUMbXaRg%2Bfn9CchX67p8XHCW0mlwQ5XoOD4kFQLVe%2BfAxB2AARXSE2I2aqDwdQcoshsEPY30bHrHDXO4BefEM%2BusTH5CMzWOiOMkTLslw6Rvkc4b%2B0vgSH2d%2Bef%2FXH2zJj0%2BD5haELdsQuSoANidePrvljLxtUkQy%2BrXUQiBkLEVXxv3GdP1me14CHxUniw37632E4gthc6l1OodTS0FOJf%2BwSFAN%2FMzMZDfRmdap8a6IlbwDftguvZvUHG0Iny%2F7Ns%2FHgFTMKXBk8AGOqUB8We9pq5Isd3JZeIAry6MWXw%2FZvAsQ3zJC6uDZL2p3NvRbhC778TIWWoZlGw7Oqgg4cWQCU%2BO6%2FeBK6OFHIZUbL2E9UuHZPW0c%2FI6vVEy0TDrkudaQOWmYdj4qFJddAT5cIMQtKddTvc6RBkkUFsTRsBUUcOeifHJ6LEKYH%2F8893r9k8PvDBOH%2BTbGOF%2BjW7HYN9Ss9tZpJRDFC5pZVmSUMHWiFg0&X-Amz-Signature=3617967909f5aee6202be0e3f10a12ec2896d4d4077f9f2d78443e5c28d15bc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIFH65H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBMKYk82I6RUC2%2B5Ge7p2o0YS%2FamXqPP1uyitSgCLDb3AiEAiGKyeo2qraQyD6gDviHr01W0NKrr6s40EnvxP3Qe6YYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrwo2Q%2FiWHLrsyGOircA4enmYIYiu32HLDlyk911jgqu1IXXvwsabHb4O%2Ba8J53uDZ0600s2uIHHQK8n6dzvExjSS6i%2BA7Bn%2BaXT4RdnW92DjF%2BT4MVgyMfEaDQZfeXUtgCbxGCjKqoKIiCka2DT86val3oRfo3Q%2F9BAxiZR24uJ65gbeTDCTEi5t7XmeWSL8QM1QvYLXNaYOVV%2F5z6PAIXPFoA7mXPKbT5VWANMO7jTuJsmz6yEWD756QThTN9uNSV32x0H22SAHrSy1pdPRZCQ2EVwV%2FVGRZoEhol9GOu%2BbdLyuM7qunaiS2PCzD0B2MaRNaCJiU%2B9nJ4QtInswqFMbrvVCohrp8gRwSoeZ7Vil4DbwppWghfMXwBNJjVlBbctAnqhUMbXaRg%2Bfn9CchX67p8XHCW0mlwQ5XoOD4kFQLVe%2BfAxB2AARXSE2I2aqDwdQcoshsEPY30bHrHDXO4BefEM%2BusTH5CMzWOiOMkTLslw6Rvkc4b%2B0vgSH2d%2Bef%2FXH2zJj0%2BD5haELdsQuSoANidePrvljLxtUkQy%2BrXUQiBkLEVXxv3GdP1me14CHxUniw37632E4gthc6l1OodTS0FOJf%2BwSFAN%2FMzMZDfRmdap8a6IlbwDftguvZvUHG0Iny%2F7Ns%2FHgFTMKXBk8AGOqUB8We9pq5Isd3JZeIAry6MWXw%2FZvAsQ3zJC6uDZL2p3NvRbhC778TIWWoZlGw7Oqgg4cWQCU%2BO6%2FeBK6OFHIZUbL2E9UuHZPW0c%2FI6vVEy0TDrkudaQOWmYdj4qFJddAT5cIMQtKddTvc6RBkkUFsTRsBUUcOeifHJ6LEKYH%2F8893r9k8PvDBOH%2BTbGOF%2BjW7HYN9Ss9tZpJRDFC5pZVmSUMHWiFg0&X-Amz-Signature=7f456d2d7c0480bd220257054dce10baa4155d88887c63b2415c2ef68602b1f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIFH65H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBMKYk82I6RUC2%2B5Ge7p2o0YS%2FamXqPP1uyitSgCLDb3AiEAiGKyeo2qraQyD6gDviHr01W0NKrr6s40EnvxP3Qe6YYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrwo2Q%2FiWHLrsyGOircA4enmYIYiu32HLDlyk911jgqu1IXXvwsabHb4O%2Ba8J53uDZ0600s2uIHHQK8n6dzvExjSS6i%2BA7Bn%2BaXT4RdnW92DjF%2BT4MVgyMfEaDQZfeXUtgCbxGCjKqoKIiCka2DT86val3oRfo3Q%2F9BAxiZR24uJ65gbeTDCTEi5t7XmeWSL8QM1QvYLXNaYOVV%2F5z6PAIXPFoA7mXPKbT5VWANMO7jTuJsmz6yEWD756QThTN9uNSV32x0H22SAHrSy1pdPRZCQ2EVwV%2FVGRZoEhol9GOu%2BbdLyuM7qunaiS2PCzD0B2MaRNaCJiU%2B9nJ4QtInswqFMbrvVCohrp8gRwSoeZ7Vil4DbwppWghfMXwBNJjVlBbctAnqhUMbXaRg%2Bfn9CchX67p8XHCW0mlwQ5XoOD4kFQLVe%2BfAxB2AARXSE2I2aqDwdQcoshsEPY30bHrHDXO4BefEM%2BusTH5CMzWOiOMkTLslw6Rvkc4b%2B0vgSH2d%2Bef%2FXH2zJj0%2BD5haELdsQuSoANidePrvljLxtUkQy%2BrXUQiBkLEVXxv3GdP1me14CHxUniw37632E4gthc6l1OodTS0FOJf%2BwSFAN%2FMzMZDfRmdap8a6IlbwDftguvZvUHG0Iny%2F7Ns%2FHgFTMKXBk8AGOqUB8We9pq5Isd3JZeIAry6MWXw%2FZvAsQ3zJC6uDZL2p3NvRbhC778TIWWoZlGw7Oqgg4cWQCU%2BO6%2FeBK6OFHIZUbL2E9UuHZPW0c%2FI6vVEy0TDrkudaQOWmYdj4qFJddAT5cIMQtKddTvc6RBkkUFsTRsBUUcOeifHJ6LEKYH%2F8893r9k8PvDBOH%2BTbGOF%2BjW7HYN9Ss9tZpJRDFC5pZVmSUMHWiFg0&X-Amz-Signature=a7a791cc03eba1467d95ce0f72ea75013e6b0321f8e6554cca396ce2276be540&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIFH65H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBMKYk82I6RUC2%2B5Ge7p2o0YS%2FamXqPP1uyitSgCLDb3AiEAiGKyeo2qraQyD6gDviHr01W0NKrr6s40EnvxP3Qe6YYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrwo2Q%2FiWHLrsyGOircA4enmYIYiu32HLDlyk911jgqu1IXXvwsabHb4O%2Ba8J53uDZ0600s2uIHHQK8n6dzvExjSS6i%2BA7Bn%2BaXT4RdnW92DjF%2BT4MVgyMfEaDQZfeXUtgCbxGCjKqoKIiCka2DT86val3oRfo3Q%2F9BAxiZR24uJ65gbeTDCTEi5t7XmeWSL8QM1QvYLXNaYOVV%2F5z6PAIXPFoA7mXPKbT5VWANMO7jTuJsmz6yEWD756QThTN9uNSV32x0H22SAHrSy1pdPRZCQ2EVwV%2FVGRZoEhol9GOu%2BbdLyuM7qunaiS2PCzD0B2MaRNaCJiU%2B9nJ4QtInswqFMbrvVCohrp8gRwSoeZ7Vil4DbwppWghfMXwBNJjVlBbctAnqhUMbXaRg%2Bfn9CchX67p8XHCW0mlwQ5XoOD4kFQLVe%2BfAxB2AARXSE2I2aqDwdQcoshsEPY30bHrHDXO4BefEM%2BusTH5CMzWOiOMkTLslw6Rvkc4b%2B0vgSH2d%2Bef%2FXH2zJj0%2BD5haELdsQuSoANidePrvljLxtUkQy%2BrXUQiBkLEVXxv3GdP1me14CHxUniw37632E4gthc6l1OodTS0FOJf%2BwSFAN%2FMzMZDfRmdap8a6IlbwDftguvZvUHG0Iny%2F7Ns%2FHgFTMKXBk8AGOqUB8We9pq5Isd3JZeIAry6MWXw%2FZvAsQ3zJC6uDZL2p3NvRbhC778TIWWoZlGw7Oqgg4cWQCU%2BO6%2FeBK6OFHIZUbL2E9UuHZPW0c%2FI6vVEy0TDrkudaQOWmYdj4qFJddAT5cIMQtKddTvc6RBkkUFsTRsBUUcOeifHJ6LEKYH%2F8893r9k8PvDBOH%2BTbGOF%2BjW7HYN9Ss9tZpJRDFC5pZVmSUMHWiFg0&X-Amz-Signature=1261ccd7c35b6c50d496c175ab32e6c166c5be4872bbf3a928b9ba95f64df670&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIFH65H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBMKYk82I6RUC2%2B5Ge7p2o0YS%2FamXqPP1uyitSgCLDb3AiEAiGKyeo2qraQyD6gDviHr01W0NKrr6s40EnvxP3Qe6YYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrwo2Q%2FiWHLrsyGOircA4enmYIYiu32HLDlyk911jgqu1IXXvwsabHb4O%2Ba8J53uDZ0600s2uIHHQK8n6dzvExjSS6i%2BA7Bn%2BaXT4RdnW92DjF%2BT4MVgyMfEaDQZfeXUtgCbxGCjKqoKIiCka2DT86val3oRfo3Q%2F9BAxiZR24uJ65gbeTDCTEi5t7XmeWSL8QM1QvYLXNaYOVV%2F5z6PAIXPFoA7mXPKbT5VWANMO7jTuJsmz6yEWD756QThTN9uNSV32x0H22SAHrSy1pdPRZCQ2EVwV%2FVGRZoEhol9GOu%2BbdLyuM7qunaiS2PCzD0B2MaRNaCJiU%2B9nJ4QtInswqFMbrvVCohrp8gRwSoeZ7Vil4DbwppWghfMXwBNJjVlBbctAnqhUMbXaRg%2Bfn9CchX67p8XHCW0mlwQ5XoOD4kFQLVe%2BfAxB2AARXSE2I2aqDwdQcoshsEPY30bHrHDXO4BefEM%2BusTH5CMzWOiOMkTLslw6Rvkc4b%2B0vgSH2d%2Bef%2FXH2zJj0%2BD5haELdsQuSoANidePrvljLxtUkQy%2BrXUQiBkLEVXxv3GdP1me14CHxUniw37632E4gthc6l1OodTS0FOJf%2BwSFAN%2FMzMZDfRmdap8a6IlbwDftguvZvUHG0Iny%2F7Ns%2FHgFTMKXBk8AGOqUB8We9pq5Isd3JZeIAry6MWXw%2FZvAsQ3zJC6uDZL2p3NvRbhC778TIWWoZlGw7Oqgg4cWQCU%2BO6%2FeBK6OFHIZUbL2E9UuHZPW0c%2FI6vVEy0TDrkudaQOWmYdj4qFJddAT5cIMQtKddTvc6RBkkUFsTRsBUUcOeifHJ6LEKYH%2F8893r9k8PvDBOH%2BTbGOF%2BjW7HYN9Ss9tZpJRDFC5pZVmSUMHWiFg0&X-Amz-Signature=1ff7c8bac81a817fb45261d6953b106a1bc39baac0610baa573f6d5665e00ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIFH65H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBMKYk82I6RUC2%2B5Ge7p2o0YS%2FamXqPP1uyitSgCLDb3AiEAiGKyeo2qraQyD6gDviHr01W0NKrr6s40EnvxP3Qe6YYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrwo2Q%2FiWHLrsyGOircA4enmYIYiu32HLDlyk911jgqu1IXXvwsabHb4O%2Ba8J53uDZ0600s2uIHHQK8n6dzvExjSS6i%2BA7Bn%2BaXT4RdnW92DjF%2BT4MVgyMfEaDQZfeXUtgCbxGCjKqoKIiCka2DT86val3oRfo3Q%2F9BAxiZR24uJ65gbeTDCTEi5t7XmeWSL8QM1QvYLXNaYOVV%2F5z6PAIXPFoA7mXPKbT5VWANMO7jTuJsmz6yEWD756QThTN9uNSV32x0H22SAHrSy1pdPRZCQ2EVwV%2FVGRZoEhol9GOu%2BbdLyuM7qunaiS2PCzD0B2MaRNaCJiU%2B9nJ4QtInswqFMbrvVCohrp8gRwSoeZ7Vil4DbwppWghfMXwBNJjVlBbctAnqhUMbXaRg%2Bfn9CchX67p8XHCW0mlwQ5XoOD4kFQLVe%2BfAxB2AARXSE2I2aqDwdQcoshsEPY30bHrHDXO4BefEM%2BusTH5CMzWOiOMkTLslw6Rvkc4b%2B0vgSH2d%2Bef%2FXH2zJj0%2BD5haELdsQuSoANidePrvljLxtUkQy%2BrXUQiBkLEVXxv3GdP1me14CHxUniw37632E4gthc6l1OodTS0FOJf%2BwSFAN%2FMzMZDfRmdap8a6IlbwDftguvZvUHG0Iny%2F7Ns%2FHgFTMKXBk8AGOqUB8We9pq5Isd3JZeIAry6MWXw%2FZvAsQ3zJC6uDZL2p3NvRbhC778TIWWoZlGw7Oqgg4cWQCU%2BO6%2FeBK6OFHIZUbL2E9UuHZPW0c%2FI6vVEy0TDrkudaQOWmYdj4qFJddAT5cIMQtKddTvc6RBkkUFsTRsBUUcOeifHJ6LEKYH%2F8893r9k8PvDBOH%2BTbGOF%2BjW7HYN9Ss9tZpJRDFC5pZVmSUMHWiFg0&X-Amz-Signature=8b0cc2a43d2c7f36acc57803d9c0f0f17f481b697fe6473ecd023b0d147ccb57&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFIFH65H%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBMKYk82I6RUC2%2B5Ge7p2o0YS%2FamXqPP1uyitSgCLDb3AiEAiGKyeo2qraQyD6gDviHr01W0NKrr6s40EnvxP3Qe6YYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrwo2Q%2FiWHLrsyGOircA4enmYIYiu32HLDlyk911jgqu1IXXvwsabHb4O%2Ba8J53uDZ0600s2uIHHQK8n6dzvExjSS6i%2BA7Bn%2BaXT4RdnW92DjF%2BT4MVgyMfEaDQZfeXUtgCbxGCjKqoKIiCka2DT86val3oRfo3Q%2F9BAxiZR24uJ65gbeTDCTEi5t7XmeWSL8QM1QvYLXNaYOVV%2F5z6PAIXPFoA7mXPKbT5VWANMO7jTuJsmz6yEWD756QThTN9uNSV32x0H22SAHrSy1pdPRZCQ2EVwV%2FVGRZoEhol9GOu%2BbdLyuM7qunaiS2PCzD0B2MaRNaCJiU%2B9nJ4QtInswqFMbrvVCohrp8gRwSoeZ7Vil4DbwppWghfMXwBNJjVlBbctAnqhUMbXaRg%2Bfn9CchX67p8XHCW0mlwQ5XoOD4kFQLVe%2BfAxB2AARXSE2I2aqDwdQcoshsEPY30bHrHDXO4BefEM%2BusTH5CMzWOiOMkTLslw6Rvkc4b%2B0vgSH2d%2Bef%2FXH2zJj0%2BD5haELdsQuSoANidePrvljLxtUkQy%2BrXUQiBkLEVXxv3GdP1me14CHxUniw37632E4gthc6l1OodTS0FOJf%2BwSFAN%2FMzMZDfRmdap8a6IlbwDftguvZvUHG0Iny%2F7Ns%2FHgFTMKXBk8AGOqUB8We9pq5Isd3JZeIAry6MWXw%2FZvAsQ3zJC6uDZL2p3NvRbhC778TIWWoZlGw7Oqgg4cWQCU%2BO6%2FeBK6OFHIZUbL2E9UuHZPW0c%2FI6vVEy0TDrkudaQOWmYdj4qFJddAT5cIMQtKddTvc6RBkkUFsTRsBUUcOeifHJ6LEKYH%2F8893r9k8PvDBOH%2BTbGOF%2BjW7HYN9Ss9tZpJRDFC5pZVmSUMHWiFg0&X-Amz-Signature=ec10da7b91f65d0261200bc92fdf902da73c9e53bed6ed290a16cd439d279829&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
