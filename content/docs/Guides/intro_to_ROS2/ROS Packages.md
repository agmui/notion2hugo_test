---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5TBQAZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq9XoMkRLsLquXVXjSpSNEu6FqAvUB2uVB37%2FMC8UTrAiEAgNPV6agouMAbv5sQ4IsAsUsXhRXA35BUTSjldGdReL4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7X5Q4fHPqvHPTcircAwMXu7eGDOeFLni8nSUblPjP60OGvvDsE1q%2BKaKPqE1NVEo%2BDTc4k2MYn2zhET4xhoNQ6TMnX2WC0n%2Ba9vSEctSbvEzkn4YXtvOoj9VkMWc2fTw3lDi1ATdC3BfTuDsFGWaZSx6royHc4%2F%2F%2F0%2FtZqTux9oALVhXa4ztBN2F0F%2BtsNOKT7SZK33bPWkG6O5EddnolRL1Nufn3X89ATgmc15qd2PFHFBPSufdAStNf2KSSA81PiCVx43zl4BJ%2FXDLc5Jr3OycqEtjbyAnQzjSnzeJPynZECNTz7tnHwQXsuFgCzIgw3%2BEa%2Fes0DH3ZAzxBYRFqgQpcHrWET3t%2BDvwB%2FbV8JLNqyBR3NUf%2BxtSD2jEB6EpOzNYh%2FX%2B1y5nuJe5oJlrTqj3nY1yU31uTgBmXud5hRi3XMbEgZx0bPtv%2B%2BzZSP3JZtqlBAq6GBuR1ZG1Fv1vYjXiIce24xn72EiAiRkqHcY%2B43b7CWZYfn9GWKaMRNty6MP32XeUYj4%2Bkz0i%2BcT7%2FEQgD2LMmsi5bQJC3Y%2FZ0QGeXflPv70%2FiyDlcBY0hZv%2FZ%2BU7Z6TqrL2g3aUw%2Bz3h8Iz7ignZZYBDEGHWunfidwuSViMa6tKOAoVL3S%2F7qzhBnOcLyBYzyNlzKMIyxzM4GOqUBGaGRWEyGHyU2tp9BND05glh65wwoLYjjZXX9WmTOUY0qY9nKFsNZ%2Br%2Fn9QLZJk3WpxkeUXAzjfpB%2FNm6HXLqMuZYgHwItzufu8jJ%2BVhm8sI6KSGbmRb2EG4XLOUbTl4u7QT9ZyCTw8tIR%2BRM%2FmWNeFpN2isoZ2Zbr3Jc3IfvocP4AE3PIE1rY9jD57VPu5ETtuS8Fe1CajWZgCUmHvR7eeUHePh9&X-Amz-Signature=6922300163041c960691f2fd5db387019c822e4cd3b7841ef5735d491e1cb682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5TBQAZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq9XoMkRLsLquXVXjSpSNEu6FqAvUB2uVB37%2FMC8UTrAiEAgNPV6agouMAbv5sQ4IsAsUsXhRXA35BUTSjldGdReL4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7X5Q4fHPqvHPTcircAwMXu7eGDOeFLni8nSUblPjP60OGvvDsE1q%2BKaKPqE1NVEo%2BDTc4k2MYn2zhET4xhoNQ6TMnX2WC0n%2Ba9vSEctSbvEzkn4YXtvOoj9VkMWc2fTw3lDi1ATdC3BfTuDsFGWaZSx6royHc4%2F%2F%2F0%2FtZqTux9oALVhXa4ztBN2F0F%2BtsNOKT7SZK33bPWkG6O5EddnolRL1Nufn3X89ATgmc15qd2PFHFBPSufdAStNf2KSSA81PiCVx43zl4BJ%2FXDLc5Jr3OycqEtjbyAnQzjSnzeJPynZECNTz7tnHwQXsuFgCzIgw3%2BEa%2Fes0DH3ZAzxBYRFqgQpcHrWET3t%2BDvwB%2FbV8JLNqyBR3NUf%2BxtSD2jEB6EpOzNYh%2FX%2B1y5nuJe5oJlrTqj3nY1yU31uTgBmXud5hRi3XMbEgZx0bPtv%2B%2BzZSP3JZtqlBAq6GBuR1ZG1Fv1vYjXiIce24xn72EiAiRkqHcY%2B43b7CWZYfn9GWKaMRNty6MP32XeUYj4%2Bkz0i%2BcT7%2FEQgD2LMmsi5bQJC3Y%2FZ0QGeXflPv70%2FiyDlcBY0hZv%2FZ%2BU7Z6TqrL2g3aUw%2Bz3h8Iz7ignZZYBDEGHWunfidwuSViMa6tKOAoVL3S%2F7qzhBnOcLyBYzyNlzKMIyxzM4GOqUBGaGRWEyGHyU2tp9BND05glh65wwoLYjjZXX9WmTOUY0qY9nKFsNZ%2Br%2Fn9QLZJk3WpxkeUXAzjfpB%2FNm6HXLqMuZYgHwItzufu8jJ%2BVhm8sI6KSGbmRb2EG4XLOUbTl4u7QT9ZyCTw8tIR%2BRM%2FmWNeFpN2isoZ2Zbr3Jc3IfvocP4AE3PIE1rY9jD57VPu5ETtuS8Fe1CajWZgCUmHvR7eeUHePh9&X-Amz-Signature=08c13a14d1ed6d54ad83266044a2cf7d4d74b00145f7a540fde835e256bd8b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5TBQAZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq9XoMkRLsLquXVXjSpSNEu6FqAvUB2uVB37%2FMC8UTrAiEAgNPV6agouMAbv5sQ4IsAsUsXhRXA35BUTSjldGdReL4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7X5Q4fHPqvHPTcircAwMXu7eGDOeFLni8nSUblPjP60OGvvDsE1q%2BKaKPqE1NVEo%2BDTc4k2MYn2zhET4xhoNQ6TMnX2WC0n%2Ba9vSEctSbvEzkn4YXtvOoj9VkMWc2fTw3lDi1ATdC3BfTuDsFGWaZSx6royHc4%2F%2F%2F0%2FtZqTux9oALVhXa4ztBN2F0F%2BtsNOKT7SZK33bPWkG6O5EddnolRL1Nufn3X89ATgmc15qd2PFHFBPSufdAStNf2KSSA81PiCVx43zl4BJ%2FXDLc5Jr3OycqEtjbyAnQzjSnzeJPynZECNTz7tnHwQXsuFgCzIgw3%2BEa%2Fes0DH3ZAzxBYRFqgQpcHrWET3t%2BDvwB%2FbV8JLNqyBR3NUf%2BxtSD2jEB6EpOzNYh%2FX%2B1y5nuJe5oJlrTqj3nY1yU31uTgBmXud5hRi3XMbEgZx0bPtv%2B%2BzZSP3JZtqlBAq6GBuR1ZG1Fv1vYjXiIce24xn72EiAiRkqHcY%2B43b7CWZYfn9GWKaMRNty6MP32XeUYj4%2Bkz0i%2BcT7%2FEQgD2LMmsi5bQJC3Y%2FZ0QGeXflPv70%2FiyDlcBY0hZv%2FZ%2BU7Z6TqrL2g3aUw%2Bz3h8Iz7ignZZYBDEGHWunfidwuSViMa6tKOAoVL3S%2F7qzhBnOcLyBYzyNlzKMIyxzM4GOqUBGaGRWEyGHyU2tp9BND05glh65wwoLYjjZXX9WmTOUY0qY9nKFsNZ%2Br%2Fn9QLZJk3WpxkeUXAzjfpB%2FNm6HXLqMuZYgHwItzufu8jJ%2BVhm8sI6KSGbmRb2EG4XLOUbTl4u7QT9ZyCTw8tIR%2BRM%2FmWNeFpN2isoZ2Zbr3Jc3IfvocP4AE3PIE1rY9jD57VPu5ETtuS8Fe1CajWZgCUmHvR7eeUHePh9&X-Amz-Signature=7aeec131a6a67980110955fca66a97e58a5817d5a6f8171b2535b71f96de9800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5TBQAZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq9XoMkRLsLquXVXjSpSNEu6FqAvUB2uVB37%2FMC8UTrAiEAgNPV6agouMAbv5sQ4IsAsUsXhRXA35BUTSjldGdReL4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7X5Q4fHPqvHPTcircAwMXu7eGDOeFLni8nSUblPjP60OGvvDsE1q%2BKaKPqE1NVEo%2BDTc4k2MYn2zhET4xhoNQ6TMnX2WC0n%2Ba9vSEctSbvEzkn4YXtvOoj9VkMWc2fTw3lDi1ATdC3BfTuDsFGWaZSx6royHc4%2F%2F%2F0%2FtZqTux9oALVhXa4ztBN2F0F%2BtsNOKT7SZK33bPWkG6O5EddnolRL1Nufn3X89ATgmc15qd2PFHFBPSufdAStNf2KSSA81PiCVx43zl4BJ%2FXDLc5Jr3OycqEtjbyAnQzjSnzeJPynZECNTz7tnHwQXsuFgCzIgw3%2BEa%2Fes0DH3ZAzxBYRFqgQpcHrWET3t%2BDvwB%2FbV8JLNqyBR3NUf%2BxtSD2jEB6EpOzNYh%2FX%2B1y5nuJe5oJlrTqj3nY1yU31uTgBmXud5hRi3XMbEgZx0bPtv%2B%2BzZSP3JZtqlBAq6GBuR1ZG1Fv1vYjXiIce24xn72EiAiRkqHcY%2B43b7CWZYfn9GWKaMRNty6MP32XeUYj4%2Bkz0i%2BcT7%2FEQgD2LMmsi5bQJC3Y%2FZ0QGeXflPv70%2FiyDlcBY0hZv%2FZ%2BU7Z6TqrL2g3aUw%2Bz3h8Iz7ignZZYBDEGHWunfidwuSViMa6tKOAoVL3S%2F7qzhBnOcLyBYzyNlzKMIyxzM4GOqUBGaGRWEyGHyU2tp9BND05glh65wwoLYjjZXX9WmTOUY0qY9nKFsNZ%2Br%2Fn9QLZJk3WpxkeUXAzjfpB%2FNm6HXLqMuZYgHwItzufu8jJ%2BVhm8sI6KSGbmRb2EG4XLOUbTl4u7QT9ZyCTw8tIR%2BRM%2FmWNeFpN2isoZ2Zbr3Jc3IfvocP4AE3PIE1rY9jD57VPu5ETtuS8Fe1CajWZgCUmHvR7eeUHePh9&X-Amz-Signature=66a2fd1506449f933c3931b1d021200cb18b4ef4cb1891f206d6ccde8148a2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5TBQAZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq9XoMkRLsLquXVXjSpSNEu6FqAvUB2uVB37%2FMC8UTrAiEAgNPV6agouMAbv5sQ4IsAsUsXhRXA35BUTSjldGdReL4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7X5Q4fHPqvHPTcircAwMXu7eGDOeFLni8nSUblPjP60OGvvDsE1q%2BKaKPqE1NVEo%2BDTc4k2MYn2zhET4xhoNQ6TMnX2WC0n%2Ba9vSEctSbvEzkn4YXtvOoj9VkMWc2fTw3lDi1ATdC3BfTuDsFGWaZSx6royHc4%2F%2F%2F0%2FtZqTux9oALVhXa4ztBN2F0F%2BtsNOKT7SZK33bPWkG6O5EddnolRL1Nufn3X89ATgmc15qd2PFHFBPSufdAStNf2KSSA81PiCVx43zl4BJ%2FXDLc5Jr3OycqEtjbyAnQzjSnzeJPynZECNTz7tnHwQXsuFgCzIgw3%2BEa%2Fes0DH3ZAzxBYRFqgQpcHrWET3t%2BDvwB%2FbV8JLNqyBR3NUf%2BxtSD2jEB6EpOzNYh%2FX%2B1y5nuJe5oJlrTqj3nY1yU31uTgBmXud5hRi3XMbEgZx0bPtv%2B%2BzZSP3JZtqlBAq6GBuR1ZG1Fv1vYjXiIce24xn72EiAiRkqHcY%2B43b7CWZYfn9GWKaMRNty6MP32XeUYj4%2Bkz0i%2BcT7%2FEQgD2LMmsi5bQJC3Y%2FZ0QGeXflPv70%2FiyDlcBY0hZv%2FZ%2BU7Z6TqrL2g3aUw%2Bz3h8Iz7ignZZYBDEGHWunfidwuSViMa6tKOAoVL3S%2F7qzhBnOcLyBYzyNlzKMIyxzM4GOqUBGaGRWEyGHyU2tp9BND05glh65wwoLYjjZXX9WmTOUY0qY9nKFsNZ%2Br%2Fn9QLZJk3WpxkeUXAzjfpB%2FNm6HXLqMuZYgHwItzufu8jJ%2BVhm8sI6KSGbmRb2EG4XLOUbTl4u7QT9ZyCTw8tIR%2BRM%2FmWNeFpN2isoZ2Zbr3Jc3IfvocP4AE3PIE1rY9jD57VPu5ETtuS8Fe1CajWZgCUmHvR7eeUHePh9&X-Amz-Signature=b8386f5c9b3885d4767513d5bbdfb67d24313300abdb00d1d1211f6a5a84ec94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5TBQAZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq9XoMkRLsLquXVXjSpSNEu6FqAvUB2uVB37%2FMC8UTrAiEAgNPV6agouMAbv5sQ4IsAsUsXhRXA35BUTSjldGdReL4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7X5Q4fHPqvHPTcircAwMXu7eGDOeFLni8nSUblPjP60OGvvDsE1q%2BKaKPqE1NVEo%2BDTc4k2MYn2zhET4xhoNQ6TMnX2WC0n%2Ba9vSEctSbvEzkn4YXtvOoj9VkMWc2fTw3lDi1ATdC3BfTuDsFGWaZSx6royHc4%2F%2F%2F0%2FtZqTux9oALVhXa4ztBN2F0F%2BtsNOKT7SZK33bPWkG6O5EddnolRL1Nufn3X89ATgmc15qd2PFHFBPSufdAStNf2KSSA81PiCVx43zl4BJ%2FXDLc5Jr3OycqEtjbyAnQzjSnzeJPynZECNTz7tnHwQXsuFgCzIgw3%2BEa%2Fes0DH3ZAzxBYRFqgQpcHrWET3t%2BDvwB%2FbV8JLNqyBR3NUf%2BxtSD2jEB6EpOzNYh%2FX%2B1y5nuJe5oJlrTqj3nY1yU31uTgBmXud5hRi3XMbEgZx0bPtv%2B%2BzZSP3JZtqlBAq6GBuR1ZG1Fv1vYjXiIce24xn72EiAiRkqHcY%2B43b7CWZYfn9GWKaMRNty6MP32XeUYj4%2Bkz0i%2BcT7%2FEQgD2LMmsi5bQJC3Y%2FZ0QGeXflPv70%2FiyDlcBY0hZv%2FZ%2BU7Z6TqrL2g3aUw%2Bz3h8Iz7ignZZYBDEGHWunfidwuSViMa6tKOAoVL3S%2F7qzhBnOcLyBYzyNlzKMIyxzM4GOqUBGaGRWEyGHyU2tp9BND05glh65wwoLYjjZXX9WmTOUY0qY9nKFsNZ%2Br%2Fn9QLZJk3WpxkeUXAzjfpB%2FNm6HXLqMuZYgHwItzufu8jJ%2BVhm8sI6KSGbmRb2EG4XLOUbTl4u7QT9ZyCTw8tIR%2BRM%2FmWNeFpN2isoZ2Zbr3Jc3IfvocP4AE3PIE1rY9jD57VPu5ETtuS8Fe1CajWZgCUmHvR7eeUHePh9&X-Amz-Signature=b14ce7774e3087191da27c71136eac2851d7f66495897ef1f54b581d64748715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5TBQAZ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq9XoMkRLsLquXVXjSpSNEu6FqAvUB2uVB37%2FMC8UTrAiEAgNPV6agouMAbv5sQ4IsAsUsXhRXA35BUTSjldGdReL4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCH7X5Q4fHPqvHPTcircAwMXu7eGDOeFLni8nSUblPjP60OGvvDsE1q%2BKaKPqE1NVEo%2BDTc4k2MYn2zhET4xhoNQ6TMnX2WC0n%2Ba9vSEctSbvEzkn4YXtvOoj9VkMWc2fTw3lDi1ATdC3BfTuDsFGWaZSx6royHc4%2F%2F%2F0%2FtZqTux9oALVhXa4ztBN2F0F%2BtsNOKT7SZK33bPWkG6O5EddnolRL1Nufn3X89ATgmc15qd2PFHFBPSufdAStNf2KSSA81PiCVx43zl4BJ%2FXDLc5Jr3OycqEtjbyAnQzjSnzeJPynZECNTz7tnHwQXsuFgCzIgw3%2BEa%2Fes0DH3ZAzxBYRFqgQpcHrWET3t%2BDvwB%2FbV8JLNqyBR3NUf%2BxtSD2jEB6EpOzNYh%2FX%2B1y5nuJe5oJlrTqj3nY1yU31uTgBmXud5hRi3XMbEgZx0bPtv%2B%2BzZSP3JZtqlBAq6GBuR1ZG1Fv1vYjXiIce24xn72EiAiRkqHcY%2B43b7CWZYfn9GWKaMRNty6MP32XeUYj4%2Bkz0i%2BcT7%2FEQgD2LMmsi5bQJC3Y%2FZ0QGeXflPv70%2FiyDlcBY0hZv%2FZ%2BU7Z6TqrL2g3aUw%2Bz3h8Iz7ignZZYBDEGHWunfidwuSViMa6tKOAoVL3S%2F7qzhBnOcLyBYzyNlzKMIyxzM4GOqUBGaGRWEyGHyU2tp9BND05glh65wwoLYjjZXX9WmTOUY0qY9nKFsNZ%2Br%2Fn9QLZJk3WpxkeUXAzjfpB%2FNm6HXLqMuZYgHwItzufu8jJ%2BVhm8sI6KSGbmRb2EG4XLOUbTl4u7QT9ZyCTw8tIR%2BRM%2FmWNeFpN2isoZ2Zbr3Jc3IfvocP4AE3PIE1rY9jD57VPu5ETtuS8Fe1CajWZgCUmHvR7eeUHePh9&X-Amz-Signature=b1ee4bb7e7e2bb7a0d919a5c28af94273a8a3a34c97ae32ac36ce4ad8208a749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
