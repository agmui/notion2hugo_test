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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPG4AGMM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJMAuDAlftIPnCm1cW55QZ59AL%2F7DYgI239N4lHVl43AiEAhz%2FA03CRA5R5mYUfdlbDFVgp0ItNojjog9tJ0%2BZbSvIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPfrou%2FQ4JLGHhtdyrcAzSMgHpS6jaSr2cYD4o9WB4N9cTJLWXKBVt0jBwK9UOA4nXRvl70zgeV%2BPXY3C5D1t%2FiEJZzIzcTge6jyU6l0cz2SD39Tfkkt0waBM1MbjuUTXCE1P%2BjeLUb%2BUkxfQ%2FjeWBk12L6UKzCUH8vDUWFcCHc8JdMJpWYIkSW%2Fz5Ez%2BUYM7di30T%2FYlK2wmAZnvOypMjWi3U79Zp0NPbUtLbzqc4lzEV7RbB3xhNNpnyynjJxMNWQk5rjNzlZRIDCFnKLoUxibSwF8VUz7VUFbES79NpSqgLkbavoIbSxn5Q3M3Jb0FX%2FoW77zpeUXyDYkWeeJg9Gk3qP1oI70NwD8%2FesM2YEmWkMQUL7QY588hATMYACPvQrlWAw%2FLTQj0Flg%2FUPjDxsNF%2FjmQ1dgDA55seOmNkK31RkhaQdlHUAiR7cL%2FbspWmNTH%2F1j6b1uPn5W1sUvh%2B7ce1Do6tqAUpSbytWO3pwyYQ%2BZaG32Lg954OEfXLqssqXPfDX3RXluCbQzbjctGjkoiE%2BDdvCRKtCK2PnmVh9k5w5SzVWodvZEY5ol3BUf6gBDwMGC1OJzZwEGku5QVZRvHMly4DPFh3gWC35g6VI6GMpfUsr2PfUuSVadueMiP9NhrGUfrMwuvtMMN%2F8wsAGOqUBZWcStTgP0bbfLksA1aND9cMwKtOc0UprUTvcpnVc9ZenHJuJ8eARftSBSK9TekbUyJRc44Sp1HHyqT81LTHLx1%2BwVTFvnJoF20sHd7CGBj7I8Mrpv2RRkYVOzCfC%2FlGJOCaWeTrui7ewzLUcEKCxXA8omWxjL6fFKX5vG4Boyfx15H9Nc9XLvIfFqAy4czKLMl8Z7tst21x%2BmHMC12XFvxzs7nq7&X-Amz-Signature=d33b825f4d9b5e687e83c6807e8570ebd9f0d5c239e83ca2993dfff01b2699b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPG4AGMM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJMAuDAlftIPnCm1cW55QZ59AL%2F7DYgI239N4lHVl43AiEAhz%2FA03CRA5R5mYUfdlbDFVgp0ItNojjog9tJ0%2BZbSvIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPfrou%2FQ4JLGHhtdyrcAzSMgHpS6jaSr2cYD4o9WB4N9cTJLWXKBVt0jBwK9UOA4nXRvl70zgeV%2BPXY3C5D1t%2FiEJZzIzcTge6jyU6l0cz2SD39Tfkkt0waBM1MbjuUTXCE1P%2BjeLUb%2BUkxfQ%2FjeWBk12L6UKzCUH8vDUWFcCHc8JdMJpWYIkSW%2Fz5Ez%2BUYM7di30T%2FYlK2wmAZnvOypMjWi3U79Zp0NPbUtLbzqc4lzEV7RbB3xhNNpnyynjJxMNWQk5rjNzlZRIDCFnKLoUxibSwF8VUz7VUFbES79NpSqgLkbavoIbSxn5Q3M3Jb0FX%2FoW77zpeUXyDYkWeeJg9Gk3qP1oI70NwD8%2FesM2YEmWkMQUL7QY588hATMYACPvQrlWAw%2FLTQj0Flg%2FUPjDxsNF%2FjmQ1dgDA55seOmNkK31RkhaQdlHUAiR7cL%2FbspWmNTH%2F1j6b1uPn5W1sUvh%2B7ce1Do6tqAUpSbytWO3pwyYQ%2BZaG32Lg954OEfXLqssqXPfDX3RXluCbQzbjctGjkoiE%2BDdvCRKtCK2PnmVh9k5w5SzVWodvZEY5ol3BUf6gBDwMGC1OJzZwEGku5QVZRvHMly4DPFh3gWC35g6VI6GMpfUsr2PfUuSVadueMiP9NhrGUfrMwuvtMMN%2F8wsAGOqUBZWcStTgP0bbfLksA1aND9cMwKtOc0UprUTvcpnVc9ZenHJuJ8eARftSBSK9TekbUyJRc44Sp1HHyqT81LTHLx1%2BwVTFvnJoF20sHd7CGBj7I8Mrpv2RRkYVOzCfC%2FlGJOCaWeTrui7ewzLUcEKCxXA8omWxjL6fFKX5vG4Boyfx15H9Nc9XLvIfFqAy4czKLMl8Z7tst21x%2BmHMC12XFvxzs7nq7&X-Amz-Signature=425891c9b17deb7bb9e313f4cc05df3fd68c108de94ec26722849a1c3854bcfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPG4AGMM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJMAuDAlftIPnCm1cW55QZ59AL%2F7DYgI239N4lHVl43AiEAhz%2FA03CRA5R5mYUfdlbDFVgp0ItNojjog9tJ0%2BZbSvIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPfrou%2FQ4JLGHhtdyrcAzSMgHpS6jaSr2cYD4o9WB4N9cTJLWXKBVt0jBwK9UOA4nXRvl70zgeV%2BPXY3C5D1t%2FiEJZzIzcTge6jyU6l0cz2SD39Tfkkt0waBM1MbjuUTXCE1P%2BjeLUb%2BUkxfQ%2FjeWBk12L6UKzCUH8vDUWFcCHc8JdMJpWYIkSW%2Fz5Ez%2BUYM7di30T%2FYlK2wmAZnvOypMjWi3U79Zp0NPbUtLbzqc4lzEV7RbB3xhNNpnyynjJxMNWQk5rjNzlZRIDCFnKLoUxibSwF8VUz7VUFbES79NpSqgLkbavoIbSxn5Q3M3Jb0FX%2FoW77zpeUXyDYkWeeJg9Gk3qP1oI70NwD8%2FesM2YEmWkMQUL7QY588hATMYACPvQrlWAw%2FLTQj0Flg%2FUPjDxsNF%2FjmQ1dgDA55seOmNkK31RkhaQdlHUAiR7cL%2FbspWmNTH%2F1j6b1uPn5W1sUvh%2B7ce1Do6tqAUpSbytWO3pwyYQ%2BZaG32Lg954OEfXLqssqXPfDX3RXluCbQzbjctGjkoiE%2BDdvCRKtCK2PnmVh9k5w5SzVWodvZEY5ol3BUf6gBDwMGC1OJzZwEGku5QVZRvHMly4DPFh3gWC35g6VI6GMpfUsr2PfUuSVadueMiP9NhrGUfrMwuvtMMN%2F8wsAGOqUBZWcStTgP0bbfLksA1aND9cMwKtOc0UprUTvcpnVc9ZenHJuJ8eARftSBSK9TekbUyJRc44Sp1HHyqT81LTHLx1%2BwVTFvnJoF20sHd7CGBj7I8Mrpv2RRkYVOzCfC%2FlGJOCaWeTrui7ewzLUcEKCxXA8omWxjL6fFKX5vG4Boyfx15H9Nc9XLvIfFqAy4czKLMl8Z7tst21x%2BmHMC12XFvxzs7nq7&X-Amz-Signature=55f733bab1e1c04cd23fd06d417aa3d61b9607260713c6f54e48ec7c9be0f980&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPG4AGMM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJMAuDAlftIPnCm1cW55QZ59AL%2F7DYgI239N4lHVl43AiEAhz%2FA03CRA5R5mYUfdlbDFVgp0ItNojjog9tJ0%2BZbSvIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPfrou%2FQ4JLGHhtdyrcAzSMgHpS6jaSr2cYD4o9WB4N9cTJLWXKBVt0jBwK9UOA4nXRvl70zgeV%2BPXY3C5D1t%2FiEJZzIzcTge6jyU6l0cz2SD39Tfkkt0waBM1MbjuUTXCE1P%2BjeLUb%2BUkxfQ%2FjeWBk12L6UKzCUH8vDUWFcCHc8JdMJpWYIkSW%2Fz5Ez%2BUYM7di30T%2FYlK2wmAZnvOypMjWi3U79Zp0NPbUtLbzqc4lzEV7RbB3xhNNpnyynjJxMNWQk5rjNzlZRIDCFnKLoUxibSwF8VUz7VUFbES79NpSqgLkbavoIbSxn5Q3M3Jb0FX%2FoW77zpeUXyDYkWeeJg9Gk3qP1oI70NwD8%2FesM2YEmWkMQUL7QY588hATMYACPvQrlWAw%2FLTQj0Flg%2FUPjDxsNF%2FjmQ1dgDA55seOmNkK31RkhaQdlHUAiR7cL%2FbspWmNTH%2F1j6b1uPn5W1sUvh%2B7ce1Do6tqAUpSbytWO3pwyYQ%2BZaG32Lg954OEfXLqssqXPfDX3RXluCbQzbjctGjkoiE%2BDdvCRKtCK2PnmVh9k5w5SzVWodvZEY5ol3BUf6gBDwMGC1OJzZwEGku5QVZRvHMly4DPFh3gWC35g6VI6GMpfUsr2PfUuSVadueMiP9NhrGUfrMwuvtMMN%2F8wsAGOqUBZWcStTgP0bbfLksA1aND9cMwKtOc0UprUTvcpnVc9ZenHJuJ8eARftSBSK9TekbUyJRc44Sp1HHyqT81LTHLx1%2BwVTFvnJoF20sHd7CGBj7I8Mrpv2RRkYVOzCfC%2FlGJOCaWeTrui7ewzLUcEKCxXA8omWxjL6fFKX5vG4Boyfx15H9Nc9XLvIfFqAy4czKLMl8Z7tst21x%2BmHMC12XFvxzs7nq7&X-Amz-Signature=7cfb302cd30bf1e1e0ce4574f7f7948dcae4ecc17f44deb55332582286a9d6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPG4AGMM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJMAuDAlftIPnCm1cW55QZ59AL%2F7DYgI239N4lHVl43AiEAhz%2FA03CRA5R5mYUfdlbDFVgp0ItNojjog9tJ0%2BZbSvIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPfrou%2FQ4JLGHhtdyrcAzSMgHpS6jaSr2cYD4o9WB4N9cTJLWXKBVt0jBwK9UOA4nXRvl70zgeV%2BPXY3C5D1t%2FiEJZzIzcTge6jyU6l0cz2SD39Tfkkt0waBM1MbjuUTXCE1P%2BjeLUb%2BUkxfQ%2FjeWBk12L6UKzCUH8vDUWFcCHc8JdMJpWYIkSW%2Fz5Ez%2BUYM7di30T%2FYlK2wmAZnvOypMjWi3U79Zp0NPbUtLbzqc4lzEV7RbB3xhNNpnyynjJxMNWQk5rjNzlZRIDCFnKLoUxibSwF8VUz7VUFbES79NpSqgLkbavoIbSxn5Q3M3Jb0FX%2FoW77zpeUXyDYkWeeJg9Gk3qP1oI70NwD8%2FesM2YEmWkMQUL7QY588hATMYACPvQrlWAw%2FLTQj0Flg%2FUPjDxsNF%2FjmQ1dgDA55seOmNkK31RkhaQdlHUAiR7cL%2FbspWmNTH%2F1j6b1uPn5W1sUvh%2B7ce1Do6tqAUpSbytWO3pwyYQ%2BZaG32Lg954OEfXLqssqXPfDX3RXluCbQzbjctGjkoiE%2BDdvCRKtCK2PnmVh9k5w5SzVWodvZEY5ol3BUf6gBDwMGC1OJzZwEGku5QVZRvHMly4DPFh3gWC35g6VI6GMpfUsr2PfUuSVadueMiP9NhrGUfrMwuvtMMN%2F8wsAGOqUBZWcStTgP0bbfLksA1aND9cMwKtOc0UprUTvcpnVc9ZenHJuJ8eARftSBSK9TekbUyJRc44Sp1HHyqT81LTHLx1%2BwVTFvnJoF20sHd7CGBj7I8Mrpv2RRkYVOzCfC%2FlGJOCaWeTrui7ewzLUcEKCxXA8omWxjL6fFKX5vG4Boyfx15H9Nc9XLvIfFqAy4czKLMl8Z7tst21x%2BmHMC12XFvxzs7nq7&X-Amz-Signature=d19be8e4de3f3dd32d348df5263bcbc1021aea80e1772a5911abb1a5a6aded46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPG4AGMM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJMAuDAlftIPnCm1cW55QZ59AL%2F7DYgI239N4lHVl43AiEAhz%2FA03CRA5R5mYUfdlbDFVgp0ItNojjog9tJ0%2BZbSvIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPfrou%2FQ4JLGHhtdyrcAzSMgHpS6jaSr2cYD4o9WB4N9cTJLWXKBVt0jBwK9UOA4nXRvl70zgeV%2BPXY3C5D1t%2FiEJZzIzcTge6jyU6l0cz2SD39Tfkkt0waBM1MbjuUTXCE1P%2BjeLUb%2BUkxfQ%2FjeWBk12L6UKzCUH8vDUWFcCHc8JdMJpWYIkSW%2Fz5Ez%2BUYM7di30T%2FYlK2wmAZnvOypMjWi3U79Zp0NPbUtLbzqc4lzEV7RbB3xhNNpnyynjJxMNWQk5rjNzlZRIDCFnKLoUxibSwF8VUz7VUFbES79NpSqgLkbavoIbSxn5Q3M3Jb0FX%2FoW77zpeUXyDYkWeeJg9Gk3qP1oI70NwD8%2FesM2YEmWkMQUL7QY588hATMYACPvQrlWAw%2FLTQj0Flg%2FUPjDxsNF%2FjmQ1dgDA55seOmNkK31RkhaQdlHUAiR7cL%2FbspWmNTH%2F1j6b1uPn5W1sUvh%2B7ce1Do6tqAUpSbytWO3pwyYQ%2BZaG32Lg954OEfXLqssqXPfDX3RXluCbQzbjctGjkoiE%2BDdvCRKtCK2PnmVh9k5w5SzVWodvZEY5ol3BUf6gBDwMGC1OJzZwEGku5QVZRvHMly4DPFh3gWC35g6VI6GMpfUsr2PfUuSVadueMiP9NhrGUfrMwuvtMMN%2F8wsAGOqUBZWcStTgP0bbfLksA1aND9cMwKtOc0UprUTvcpnVc9ZenHJuJ8eARftSBSK9TekbUyJRc44Sp1HHyqT81LTHLx1%2BwVTFvnJoF20sHd7CGBj7I8Mrpv2RRkYVOzCfC%2FlGJOCaWeTrui7ewzLUcEKCxXA8omWxjL6fFKX5vG4Boyfx15H9Nc9XLvIfFqAy4czKLMl8Z7tst21x%2BmHMC12XFvxzs7nq7&X-Amz-Signature=7f5df457c74d4660ea77a6c02b9b684e6a6bf5b8cfde2a7becf49c345f24918a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPG4AGMM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJMAuDAlftIPnCm1cW55QZ59AL%2F7DYgI239N4lHVl43AiEAhz%2FA03CRA5R5mYUfdlbDFVgp0ItNojjog9tJ0%2BZbSvIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPfrou%2FQ4JLGHhtdyrcAzSMgHpS6jaSr2cYD4o9WB4N9cTJLWXKBVt0jBwK9UOA4nXRvl70zgeV%2BPXY3C5D1t%2FiEJZzIzcTge6jyU6l0cz2SD39Tfkkt0waBM1MbjuUTXCE1P%2BjeLUb%2BUkxfQ%2FjeWBk12L6UKzCUH8vDUWFcCHc8JdMJpWYIkSW%2Fz5Ez%2BUYM7di30T%2FYlK2wmAZnvOypMjWi3U79Zp0NPbUtLbzqc4lzEV7RbB3xhNNpnyynjJxMNWQk5rjNzlZRIDCFnKLoUxibSwF8VUz7VUFbES79NpSqgLkbavoIbSxn5Q3M3Jb0FX%2FoW77zpeUXyDYkWeeJg9Gk3qP1oI70NwD8%2FesM2YEmWkMQUL7QY588hATMYACPvQrlWAw%2FLTQj0Flg%2FUPjDxsNF%2FjmQ1dgDA55seOmNkK31RkhaQdlHUAiR7cL%2FbspWmNTH%2F1j6b1uPn5W1sUvh%2B7ce1Do6tqAUpSbytWO3pwyYQ%2BZaG32Lg954OEfXLqssqXPfDX3RXluCbQzbjctGjkoiE%2BDdvCRKtCK2PnmVh9k5w5SzVWodvZEY5ol3BUf6gBDwMGC1OJzZwEGku5QVZRvHMly4DPFh3gWC35g6VI6GMpfUsr2PfUuSVadueMiP9NhrGUfrMwuvtMMN%2F8wsAGOqUBZWcStTgP0bbfLksA1aND9cMwKtOc0UprUTvcpnVc9ZenHJuJ8eARftSBSK9TekbUyJRc44Sp1HHyqT81LTHLx1%2BwVTFvnJoF20sHd7CGBj7I8Mrpv2RRkYVOzCfC%2FlGJOCaWeTrui7ewzLUcEKCxXA8omWxjL6fFKX5vG4Boyfx15H9Nc9XLvIfFqAy4czKLMl8Z7tst21x%2BmHMC12XFvxzs7nq7&X-Amz-Signature=d05a62bbd3fb297520edf8a979876a9a73c6fc51f202c757aa521809f8404be2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
