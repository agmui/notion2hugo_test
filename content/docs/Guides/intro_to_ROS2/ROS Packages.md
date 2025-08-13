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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZY7VCY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgGvJ7ashHKIudTJ%2F6F%2BDXk9UL%2BrKZFRbwPaa95g%2FOuAiEA5ksKNfdlxOmp5wki0CCtbS%2FyO4dQrpWV%2FQCg8EZUFzMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDO5s%2B7VuTBY9KPzZircAxhlFvBQu%2BBJnLpZHP7xMGAGr5TGp1V%2Fh9rl6hf3nrKW%2BjWXg3Nygt8gF0XFrRRc%2BSXl8DX74Pdi0e2D8GPlBQvEz3%2BqqHzrX7sWFv2clD7v7ZbaJF7BJQAnJIPN9YscB980shqNbItPOyeQMCdOFF5kF8ZlbwkHbbVSwT36CH4HkLMrIBNjyUWWS5EhRryWBkIAjFZBKQCcpqOvMe0nHNfTglugNx2E6p2N85XXwNtI15b8f5jKBKG6VzVeKK9JxhK8vRofyEfWlp6E1K%2FE6uBMtcPm0IBppE53dvr5JOVv0uiBPBk9ematEan3Q4cETgxHbe7%2FMIdZHdY5DUEacKDymRgB1oDYYr%2FgzJnHkuH9OJZObxyjDUewW5q%2F9WkW8gEHqtGVdI3dulSwHuyThb98000tz%2BSF2sEVY9fjeyPPUSZ7Em%2FuvgPWKwWa%2BTqUCicCXOOPWNnabZSFK3qpu0PiSZTqtcBONAOVahgRnhlkeC48V7XEbMl7UpQlWYFk7hW45duiGRnYOPMnvZEVZZLJX0UZLMhQ4LjzgHurf%2BSx4sflUUoD9JuaNRLxeOtcPsa2SAhMsQTaBHBg0WbbDQEyICgKQm%2FUdlvHJx%2B0bj48XlixMe6%2F2zhiq04DMIv58MQGOqUBrH8utVEa0Z%2B%2BFuMh9c2LuBh2Yj6Nus1A7X60ujL3VpkFZ2Ajw%2FB08Jaso8WHwiNsNRKEvPbdga41fI1ISVR7kep8UWVuOED1ymeMIZkeVMW4q0SesrVqGMSX41uqd%2BBmjqduyHGbOzs46z7WdqyFS9yh6%2BVeNVecROnPtvP1SpyrzMjt2RjezuBuKn91J0LKqn%2Fb6aJRAYcDpRGemWR4F3EcMvn0&X-Amz-Signature=41c3452e260fec18dcf09403ae60773a4c17579c9fa1f37bbb931c93f9d9aeb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZY7VCY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgGvJ7ashHKIudTJ%2F6F%2BDXk9UL%2BrKZFRbwPaa95g%2FOuAiEA5ksKNfdlxOmp5wki0CCtbS%2FyO4dQrpWV%2FQCg8EZUFzMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDO5s%2B7VuTBY9KPzZircAxhlFvBQu%2BBJnLpZHP7xMGAGr5TGp1V%2Fh9rl6hf3nrKW%2BjWXg3Nygt8gF0XFrRRc%2BSXl8DX74Pdi0e2D8GPlBQvEz3%2BqqHzrX7sWFv2clD7v7ZbaJF7BJQAnJIPN9YscB980shqNbItPOyeQMCdOFF5kF8ZlbwkHbbVSwT36CH4HkLMrIBNjyUWWS5EhRryWBkIAjFZBKQCcpqOvMe0nHNfTglugNx2E6p2N85XXwNtI15b8f5jKBKG6VzVeKK9JxhK8vRofyEfWlp6E1K%2FE6uBMtcPm0IBppE53dvr5JOVv0uiBPBk9ematEan3Q4cETgxHbe7%2FMIdZHdY5DUEacKDymRgB1oDYYr%2FgzJnHkuH9OJZObxyjDUewW5q%2F9WkW8gEHqtGVdI3dulSwHuyThb98000tz%2BSF2sEVY9fjeyPPUSZ7Em%2FuvgPWKwWa%2BTqUCicCXOOPWNnabZSFK3qpu0PiSZTqtcBONAOVahgRnhlkeC48V7XEbMl7UpQlWYFk7hW45duiGRnYOPMnvZEVZZLJX0UZLMhQ4LjzgHurf%2BSx4sflUUoD9JuaNRLxeOtcPsa2SAhMsQTaBHBg0WbbDQEyICgKQm%2FUdlvHJx%2B0bj48XlixMe6%2F2zhiq04DMIv58MQGOqUBrH8utVEa0Z%2B%2BFuMh9c2LuBh2Yj6Nus1A7X60ujL3VpkFZ2Ajw%2FB08Jaso8WHwiNsNRKEvPbdga41fI1ISVR7kep8UWVuOED1ymeMIZkeVMW4q0SesrVqGMSX41uqd%2BBmjqduyHGbOzs46z7WdqyFS9yh6%2BVeNVecROnPtvP1SpyrzMjt2RjezuBuKn91J0LKqn%2Fb6aJRAYcDpRGemWR4F3EcMvn0&X-Amz-Signature=6e6795c2fd074cf6aa54dab85468450ddffd553fc7839628557d01e0b19e5d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZY7VCY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgGvJ7ashHKIudTJ%2F6F%2BDXk9UL%2BrKZFRbwPaa95g%2FOuAiEA5ksKNfdlxOmp5wki0CCtbS%2FyO4dQrpWV%2FQCg8EZUFzMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDO5s%2B7VuTBY9KPzZircAxhlFvBQu%2BBJnLpZHP7xMGAGr5TGp1V%2Fh9rl6hf3nrKW%2BjWXg3Nygt8gF0XFrRRc%2BSXl8DX74Pdi0e2D8GPlBQvEz3%2BqqHzrX7sWFv2clD7v7ZbaJF7BJQAnJIPN9YscB980shqNbItPOyeQMCdOFF5kF8ZlbwkHbbVSwT36CH4HkLMrIBNjyUWWS5EhRryWBkIAjFZBKQCcpqOvMe0nHNfTglugNx2E6p2N85XXwNtI15b8f5jKBKG6VzVeKK9JxhK8vRofyEfWlp6E1K%2FE6uBMtcPm0IBppE53dvr5JOVv0uiBPBk9ematEan3Q4cETgxHbe7%2FMIdZHdY5DUEacKDymRgB1oDYYr%2FgzJnHkuH9OJZObxyjDUewW5q%2F9WkW8gEHqtGVdI3dulSwHuyThb98000tz%2BSF2sEVY9fjeyPPUSZ7Em%2FuvgPWKwWa%2BTqUCicCXOOPWNnabZSFK3qpu0PiSZTqtcBONAOVahgRnhlkeC48V7XEbMl7UpQlWYFk7hW45duiGRnYOPMnvZEVZZLJX0UZLMhQ4LjzgHurf%2BSx4sflUUoD9JuaNRLxeOtcPsa2SAhMsQTaBHBg0WbbDQEyICgKQm%2FUdlvHJx%2B0bj48XlixMe6%2F2zhiq04DMIv58MQGOqUBrH8utVEa0Z%2B%2BFuMh9c2LuBh2Yj6Nus1A7X60ujL3VpkFZ2Ajw%2FB08Jaso8WHwiNsNRKEvPbdga41fI1ISVR7kep8UWVuOED1ymeMIZkeVMW4q0SesrVqGMSX41uqd%2BBmjqduyHGbOzs46z7WdqyFS9yh6%2BVeNVecROnPtvP1SpyrzMjt2RjezuBuKn91J0LKqn%2Fb6aJRAYcDpRGemWR4F3EcMvn0&X-Amz-Signature=b56bf16d17d0d7bef92bc9627f7c1252fd7221412bbc7117c331844489286764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZY7VCY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgGvJ7ashHKIudTJ%2F6F%2BDXk9UL%2BrKZFRbwPaa95g%2FOuAiEA5ksKNfdlxOmp5wki0CCtbS%2FyO4dQrpWV%2FQCg8EZUFzMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDO5s%2B7VuTBY9KPzZircAxhlFvBQu%2BBJnLpZHP7xMGAGr5TGp1V%2Fh9rl6hf3nrKW%2BjWXg3Nygt8gF0XFrRRc%2BSXl8DX74Pdi0e2D8GPlBQvEz3%2BqqHzrX7sWFv2clD7v7ZbaJF7BJQAnJIPN9YscB980shqNbItPOyeQMCdOFF5kF8ZlbwkHbbVSwT36CH4HkLMrIBNjyUWWS5EhRryWBkIAjFZBKQCcpqOvMe0nHNfTglugNx2E6p2N85XXwNtI15b8f5jKBKG6VzVeKK9JxhK8vRofyEfWlp6E1K%2FE6uBMtcPm0IBppE53dvr5JOVv0uiBPBk9ematEan3Q4cETgxHbe7%2FMIdZHdY5DUEacKDymRgB1oDYYr%2FgzJnHkuH9OJZObxyjDUewW5q%2F9WkW8gEHqtGVdI3dulSwHuyThb98000tz%2BSF2sEVY9fjeyPPUSZ7Em%2FuvgPWKwWa%2BTqUCicCXOOPWNnabZSFK3qpu0PiSZTqtcBONAOVahgRnhlkeC48V7XEbMl7UpQlWYFk7hW45duiGRnYOPMnvZEVZZLJX0UZLMhQ4LjzgHurf%2BSx4sflUUoD9JuaNRLxeOtcPsa2SAhMsQTaBHBg0WbbDQEyICgKQm%2FUdlvHJx%2B0bj48XlixMe6%2F2zhiq04DMIv58MQGOqUBrH8utVEa0Z%2B%2BFuMh9c2LuBh2Yj6Nus1A7X60ujL3VpkFZ2Ajw%2FB08Jaso8WHwiNsNRKEvPbdga41fI1ISVR7kep8UWVuOED1ymeMIZkeVMW4q0SesrVqGMSX41uqd%2BBmjqduyHGbOzs46z7WdqyFS9yh6%2BVeNVecROnPtvP1SpyrzMjt2RjezuBuKn91J0LKqn%2Fb6aJRAYcDpRGemWR4F3EcMvn0&X-Amz-Signature=713f37fb20aadb432da5fb94c04801d4962533a03d85b6bf7358ca21dc8c53a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZY7VCY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgGvJ7ashHKIudTJ%2F6F%2BDXk9UL%2BrKZFRbwPaa95g%2FOuAiEA5ksKNfdlxOmp5wki0CCtbS%2FyO4dQrpWV%2FQCg8EZUFzMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDO5s%2B7VuTBY9KPzZircAxhlFvBQu%2BBJnLpZHP7xMGAGr5TGp1V%2Fh9rl6hf3nrKW%2BjWXg3Nygt8gF0XFrRRc%2BSXl8DX74Pdi0e2D8GPlBQvEz3%2BqqHzrX7sWFv2clD7v7ZbaJF7BJQAnJIPN9YscB980shqNbItPOyeQMCdOFF5kF8ZlbwkHbbVSwT36CH4HkLMrIBNjyUWWS5EhRryWBkIAjFZBKQCcpqOvMe0nHNfTglugNx2E6p2N85XXwNtI15b8f5jKBKG6VzVeKK9JxhK8vRofyEfWlp6E1K%2FE6uBMtcPm0IBppE53dvr5JOVv0uiBPBk9ematEan3Q4cETgxHbe7%2FMIdZHdY5DUEacKDymRgB1oDYYr%2FgzJnHkuH9OJZObxyjDUewW5q%2F9WkW8gEHqtGVdI3dulSwHuyThb98000tz%2BSF2sEVY9fjeyPPUSZ7Em%2FuvgPWKwWa%2BTqUCicCXOOPWNnabZSFK3qpu0PiSZTqtcBONAOVahgRnhlkeC48V7XEbMl7UpQlWYFk7hW45duiGRnYOPMnvZEVZZLJX0UZLMhQ4LjzgHurf%2BSx4sflUUoD9JuaNRLxeOtcPsa2SAhMsQTaBHBg0WbbDQEyICgKQm%2FUdlvHJx%2B0bj48XlixMe6%2F2zhiq04DMIv58MQGOqUBrH8utVEa0Z%2B%2BFuMh9c2LuBh2Yj6Nus1A7X60ujL3VpkFZ2Ajw%2FB08Jaso8WHwiNsNRKEvPbdga41fI1ISVR7kep8UWVuOED1ymeMIZkeVMW4q0SesrVqGMSX41uqd%2BBmjqduyHGbOzs46z7WdqyFS9yh6%2BVeNVecROnPtvP1SpyrzMjt2RjezuBuKn91J0LKqn%2Fb6aJRAYcDpRGemWR4F3EcMvn0&X-Amz-Signature=d4806e29a70aeca675c36adb08074dd3bb3bac5303588747b2a5e8d17bf9b75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZY7VCY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgGvJ7ashHKIudTJ%2F6F%2BDXk9UL%2BrKZFRbwPaa95g%2FOuAiEA5ksKNfdlxOmp5wki0CCtbS%2FyO4dQrpWV%2FQCg8EZUFzMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDO5s%2B7VuTBY9KPzZircAxhlFvBQu%2BBJnLpZHP7xMGAGr5TGp1V%2Fh9rl6hf3nrKW%2BjWXg3Nygt8gF0XFrRRc%2BSXl8DX74Pdi0e2D8GPlBQvEz3%2BqqHzrX7sWFv2clD7v7ZbaJF7BJQAnJIPN9YscB980shqNbItPOyeQMCdOFF5kF8ZlbwkHbbVSwT36CH4HkLMrIBNjyUWWS5EhRryWBkIAjFZBKQCcpqOvMe0nHNfTglugNx2E6p2N85XXwNtI15b8f5jKBKG6VzVeKK9JxhK8vRofyEfWlp6E1K%2FE6uBMtcPm0IBppE53dvr5JOVv0uiBPBk9ematEan3Q4cETgxHbe7%2FMIdZHdY5DUEacKDymRgB1oDYYr%2FgzJnHkuH9OJZObxyjDUewW5q%2F9WkW8gEHqtGVdI3dulSwHuyThb98000tz%2BSF2sEVY9fjeyPPUSZ7Em%2FuvgPWKwWa%2BTqUCicCXOOPWNnabZSFK3qpu0PiSZTqtcBONAOVahgRnhlkeC48V7XEbMl7UpQlWYFk7hW45duiGRnYOPMnvZEVZZLJX0UZLMhQ4LjzgHurf%2BSx4sflUUoD9JuaNRLxeOtcPsa2SAhMsQTaBHBg0WbbDQEyICgKQm%2FUdlvHJx%2B0bj48XlixMe6%2F2zhiq04DMIv58MQGOqUBrH8utVEa0Z%2B%2BFuMh9c2LuBh2Yj6Nus1A7X60ujL3VpkFZ2Ajw%2FB08Jaso8WHwiNsNRKEvPbdga41fI1ISVR7kep8UWVuOED1ymeMIZkeVMW4q0SesrVqGMSX41uqd%2BBmjqduyHGbOzs46z7WdqyFS9yh6%2BVeNVecROnPtvP1SpyrzMjt2RjezuBuKn91J0LKqn%2Fb6aJRAYcDpRGemWR4F3EcMvn0&X-Amz-Signature=fb7c852b428ab9a338f5b9c1a95992a21103cec3fdac97e87ec15ad005efb76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZY7VCY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgGvJ7ashHKIudTJ%2F6F%2BDXk9UL%2BrKZFRbwPaa95g%2FOuAiEA5ksKNfdlxOmp5wki0CCtbS%2FyO4dQrpWV%2FQCg8EZUFzMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDO5s%2B7VuTBY9KPzZircAxhlFvBQu%2BBJnLpZHP7xMGAGr5TGp1V%2Fh9rl6hf3nrKW%2BjWXg3Nygt8gF0XFrRRc%2BSXl8DX74Pdi0e2D8GPlBQvEz3%2BqqHzrX7sWFv2clD7v7ZbaJF7BJQAnJIPN9YscB980shqNbItPOyeQMCdOFF5kF8ZlbwkHbbVSwT36CH4HkLMrIBNjyUWWS5EhRryWBkIAjFZBKQCcpqOvMe0nHNfTglugNx2E6p2N85XXwNtI15b8f5jKBKG6VzVeKK9JxhK8vRofyEfWlp6E1K%2FE6uBMtcPm0IBppE53dvr5JOVv0uiBPBk9ematEan3Q4cETgxHbe7%2FMIdZHdY5DUEacKDymRgB1oDYYr%2FgzJnHkuH9OJZObxyjDUewW5q%2F9WkW8gEHqtGVdI3dulSwHuyThb98000tz%2BSF2sEVY9fjeyPPUSZ7Em%2FuvgPWKwWa%2BTqUCicCXOOPWNnabZSFK3qpu0PiSZTqtcBONAOVahgRnhlkeC48V7XEbMl7UpQlWYFk7hW45duiGRnYOPMnvZEVZZLJX0UZLMhQ4LjzgHurf%2BSx4sflUUoD9JuaNRLxeOtcPsa2SAhMsQTaBHBg0WbbDQEyICgKQm%2FUdlvHJx%2B0bj48XlixMe6%2F2zhiq04DMIv58MQGOqUBrH8utVEa0Z%2B%2BFuMh9c2LuBh2Yj6Nus1A7X60ujL3VpkFZ2Ajw%2FB08Jaso8WHwiNsNRKEvPbdga41fI1ISVR7kep8UWVuOED1ymeMIZkeVMW4q0SesrVqGMSX41uqd%2BBmjqduyHGbOzs46z7WdqyFS9yh6%2BVeNVecROnPtvP1SpyrzMjt2RjezuBuKn91J0LKqn%2Fb6aJRAYcDpRGemWR4F3EcMvn0&X-Amz-Signature=492773ac3feb18825fdf47f1ea10a74385266e20b114220d1206024a6fef4546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
