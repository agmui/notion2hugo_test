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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVQBUQV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB4SOxrB1A87EbeUfBBY2NCrGPAiLHuSVFmtcIHBA77aAiAVQRLDqi%2FTW3iP%2F4huJdpEEfMJakwmWQQgRCtXsyhFdSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrZzVfb%2BHIvZ1Y9TcKtwDoQ70udDVsgDTXnmf%2BWA57MuYeJQo630Eb4511M3ExQP2vPChGJ6KNzSm8CKgRvWd7rnK77D2c3kiwSceGjTsMT0SgeRexwKFKOaj5mda7Y1j1NL0Y%2BustcCWPiXgk5ZJIgJKhtI196uxNYVKsG6rxwnG1NGY%2BmlcfNgZWZ2MLc0zE6MiSbcnG%2Fckng07CQfIKcf0C2wopCijnrPWz91nDoNKSBQx2k91WF8oNt8Zj6AaZKrGDgerypMQpzErRy8LwXjLSSgC7XnaUtYoEhsiplcu7CbrET%2B%2F1xA3AjUGX0W5vvE38u%2FTk9yTSlyQiA0StxKbX0nC1DoDnJ1A4ZqEnp0gwIOUIE5UdiveIHFMQEOqqQOMOyHHM0YrmMrHYBws4AQDb%2FFZXaDcvsbwnhqtScbtWzpqQsmAHgdr8Leds2CPypM%2FRoyYQPBbPev82oqH3c8n%2BxuWLvIM%2BkbFG7DuSL20yNmHz2IVFuCEo1rmsie7Zl1ZxTtNOXpz60pWBqMfNKmj0cHjs77jvSTI3G7w8YO700%2BbFiKq4UX9XNB%2BiiPoR2i%2FdVYLgTV1UU0UuKB77kCd0j%2BlTrg5DjXfRU6AU3f2E7VdoIvznflR7bQmLAsOTgD%2Fddc5VOQYKFcwmb%2BtvgY6pgGZgi7BZ%2FYpBnW9rEwTk66HVLDqli8U%2FrvLO2djHtRcu41rMiw9yTxEoNXq42Ez7605rIUC3%2BzVaFAC3%2BsYrd8Cj8aZdKlPKeNAgPg0XqEneo3EpDpyMj1in0YA8B3jyot5Ct%2BMIey2qkFbDfguhimaKTBOew1XHAMkUxkBnGGpFNNocTUg3gMFTcuzKJMsqVxUh1i9QjxndYV4Bh9v3USkh81MQ6J%2B&X-Amz-Signature=0202aec0da2ae6cc27cddbd63129f833207ee968079fc65201986810b583fa5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVQBUQV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB4SOxrB1A87EbeUfBBY2NCrGPAiLHuSVFmtcIHBA77aAiAVQRLDqi%2FTW3iP%2F4huJdpEEfMJakwmWQQgRCtXsyhFdSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrZzVfb%2BHIvZ1Y9TcKtwDoQ70udDVsgDTXnmf%2BWA57MuYeJQo630Eb4511M3ExQP2vPChGJ6KNzSm8CKgRvWd7rnK77D2c3kiwSceGjTsMT0SgeRexwKFKOaj5mda7Y1j1NL0Y%2BustcCWPiXgk5ZJIgJKhtI196uxNYVKsG6rxwnG1NGY%2BmlcfNgZWZ2MLc0zE6MiSbcnG%2Fckng07CQfIKcf0C2wopCijnrPWz91nDoNKSBQx2k91WF8oNt8Zj6AaZKrGDgerypMQpzErRy8LwXjLSSgC7XnaUtYoEhsiplcu7CbrET%2B%2F1xA3AjUGX0W5vvE38u%2FTk9yTSlyQiA0StxKbX0nC1DoDnJ1A4ZqEnp0gwIOUIE5UdiveIHFMQEOqqQOMOyHHM0YrmMrHYBws4AQDb%2FFZXaDcvsbwnhqtScbtWzpqQsmAHgdr8Leds2CPypM%2FRoyYQPBbPev82oqH3c8n%2BxuWLvIM%2BkbFG7DuSL20yNmHz2IVFuCEo1rmsie7Zl1ZxTtNOXpz60pWBqMfNKmj0cHjs77jvSTI3G7w8YO700%2BbFiKq4UX9XNB%2BiiPoR2i%2FdVYLgTV1UU0UuKB77kCd0j%2BlTrg5DjXfRU6AU3f2E7VdoIvznflR7bQmLAsOTgD%2Fddc5VOQYKFcwmb%2BtvgY6pgGZgi7BZ%2FYpBnW9rEwTk66HVLDqli8U%2FrvLO2djHtRcu41rMiw9yTxEoNXq42Ez7605rIUC3%2BzVaFAC3%2BsYrd8Cj8aZdKlPKeNAgPg0XqEneo3EpDpyMj1in0YA8B3jyot5Ct%2BMIey2qkFbDfguhimaKTBOew1XHAMkUxkBnGGpFNNocTUg3gMFTcuzKJMsqVxUh1i9QjxndYV4Bh9v3USkh81MQ6J%2B&X-Amz-Signature=516b4db585dc683cd45ee1206149661df99dd99bca395ddc569b66e2ac5d4ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVQBUQV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB4SOxrB1A87EbeUfBBY2NCrGPAiLHuSVFmtcIHBA77aAiAVQRLDqi%2FTW3iP%2F4huJdpEEfMJakwmWQQgRCtXsyhFdSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrZzVfb%2BHIvZ1Y9TcKtwDoQ70udDVsgDTXnmf%2BWA57MuYeJQo630Eb4511M3ExQP2vPChGJ6KNzSm8CKgRvWd7rnK77D2c3kiwSceGjTsMT0SgeRexwKFKOaj5mda7Y1j1NL0Y%2BustcCWPiXgk5ZJIgJKhtI196uxNYVKsG6rxwnG1NGY%2BmlcfNgZWZ2MLc0zE6MiSbcnG%2Fckng07CQfIKcf0C2wopCijnrPWz91nDoNKSBQx2k91WF8oNt8Zj6AaZKrGDgerypMQpzErRy8LwXjLSSgC7XnaUtYoEhsiplcu7CbrET%2B%2F1xA3AjUGX0W5vvE38u%2FTk9yTSlyQiA0StxKbX0nC1DoDnJ1A4ZqEnp0gwIOUIE5UdiveIHFMQEOqqQOMOyHHM0YrmMrHYBws4AQDb%2FFZXaDcvsbwnhqtScbtWzpqQsmAHgdr8Leds2CPypM%2FRoyYQPBbPev82oqH3c8n%2BxuWLvIM%2BkbFG7DuSL20yNmHz2IVFuCEo1rmsie7Zl1ZxTtNOXpz60pWBqMfNKmj0cHjs77jvSTI3G7w8YO700%2BbFiKq4UX9XNB%2BiiPoR2i%2FdVYLgTV1UU0UuKB77kCd0j%2BlTrg5DjXfRU6AU3f2E7VdoIvznflR7bQmLAsOTgD%2Fddc5VOQYKFcwmb%2BtvgY6pgGZgi7BZ%2FYpBnW9rEwTk66HVLDqli8U%2FrvLO2djHtRcu41rMiw9yTxEoNXq42Ez7605rIUC3%2BzVaFAC3%2BsYrd8Cj8aZdKlPKeNAgPg0XqEneo3EpDpyMj1in0YA8B3jyot5Ct%2BMIey2qkFbDfguhimaKTBOew1XHAMkUxkBnGGpFNNocTUg3gMFTcuzKJMsqVxUh1i9QjxndYV4Bh9v3USkh81MQ6J%2B&X-Amz-Signature=95d399c5e10acb9b131979829e5a9b57d76074d927ea72eb3756185079e3fd70&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVQBUQV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB4SOxrB1A87EbeUfBBY2NCrGPAiLHuSVFmtcIHBA77aAiAVQRLDqi%2FTW3iP%2F4huJdpEEfMJakwmWQQgRCtXsyhFdSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrZzVfb%2BHIvZ1Y9TcKtwDoQ70udDVsgDTXnmf%2BWA57MuYeJQo630Eb4511M3ExQP2vPChGJ6KNzSm8CKgRvWd7rnK77D2c3kiwSceGjTsMT0SgeRexwKFKOaj5mda7Y1j1NL0Y%2BustcCWPiXgk5ZJIgJKhtI196uxNYVKsG6rxwnG1NGY%2BmlcfNgZWZ2MLc0zE6MiSbcnG%2Fckng07CQfIKcf0C2wopCijnrPWz91nDoNKSBQx2k91WF8oNt8Zj6AaZKrGDgerypMQpzErRy8LwXjLSSgC7XnaUtYoEhsiplcu7CbrET%2B%2F1xA3AjUGX0W5vvE38u%2FTk9yTSlyQiA0StxKbX0nC1DoDnJ1A4ZqEnp0gwIOUIE5UdiveIHFMQEOqqQOMOyHHM0YrmMrHYBws4AQDb%2FFZXaDcvsbwnhqtScbtWzpqQsmAHgdr8Leds2CPypM%2FRoyYQPBbPev82oqH3c8n%2BxuWLvIM%2BkbFG7DuSL20yNmHz2IVFuCEo1rmsie7Zl1ZxTtNOXpz60pWBqMfNKmj0cHjs77jvSTI3G7w8YO700%2BbFiKq4UX9XNB%2BiiPoR2i%2FdVYLgTV1UU0UuKB77kCd0j%2BlTrg5DjXfRU6AU3f2E7VdoIvznflR7bQmLAsOTgD%2Fddc5VOQYKFcwmb%2BtvgY6pgGZgi7BZ%2FYpBnW9rEwTk66HVLDqli8U%2FrvLO2djHtRcu41rMiw9yTxEoNXq42Ez7605rIUC3%2BzVaFAC3%2BsYrd8Cj8aZdKlPKeNAgPg0XqEneo3EpDpyMj1in0YA8B3jyot5Ct%2BMIey2qkFbDfguhimaKTBOew1XHAMkUxkBnGGpFNNocTUg3gMFTcuzKJMsqVxUh1i9QjxndYV4Bh9v3USkh81MQ6J%2B&X-Amz-Signature=f6e7930f885ee292f9b6756962ad65aa63a1f17b3344e1e59f12739234850c56&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVQBUQV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB4SOxrB1A87EbeUfBBY2NCrGPAiLHuSVFmtcIHBA77aAiAVQRLDqi%2FTW3iP%2F4huJdpEEfMJakwmWQQgRCtXsyhFdSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrZzVfb%2BHIvZ1Y9TcKtwDoQ70udDVsgDTXnmf%2BWA57MuYeJQo630Eb4511M3ExQP2vPChGJ6KNzSm8CKgRvWd7rnK77D2c3kiwSceGjTsMT0SgeRexwKFKOaj5mda7Y1j1NL0Y%2BustcCWPiXgk5ZJIgJKhtI196uxNYVKsG6rxwnG1NGY%2BmlcfNgZWZ2MLc0zE6MiSbcnG%2Fckng07CQfIKcf0C2wopCijnrPWz91nDoNKSBQx2k91WF8oNt8Zj6AaZKrGDgerypMQpzErRy8LwXjLSSgC7XnaUtYoEhsiplcu7CbrET%2B%2F1xA3AjUGX0W5vvE38u%2FTk9yTSlyQiA0StxKbX0nC1DoDnJ1A4ZqEnp0gwIOUIE5UdiveIHFMQEOqqQOMOyHHM0YrmMrHYBws4AQDb%2FFZXaDcvsbwnhqtScbtWzpqQsmAHgdr8Leds2CPypM%2FRoyYQPBbPev82oqH3c8n%2BxuWLvIM%2BkbFG7DuSL20yNmHz2IVFuCEo1rmsie7Zl1ZxTtNOXpz60pWBqMfNKmj0cHjs77jvSTI3G7w8YO700%2BbFiKq4UX9XNB%2BiiPoR2i%2FdVYLgTV1UU0UuKB77kCd0j%2BlTrg5DjXfRU6AU3f2E7VdoIvznflR7bQmLAsOTgD%2Fddc5VOQYKFcwmb%2BtvgY6pgGZgi7BZ%2FYpBnW9rEwTk66HVLDqli8U%2FrvLO2djHtRcu41rMiw9yTxEoNXq42Ez7605rIUC3%2BzVaFAC3%2BsYrd8Cj8aZdKlPKeNAgPg0XqEneo3EpDpyMj1in0YA8B3jyot5Ct%2BMIey2qkFbDfguhimaKTBOew1XHAMkUxkBnGGpFNNocTUg3gMFTcuzKJMsqVxUh1i9QjxndYV4Bh9v3USkh81MQ6J%2B&X-Amz-Signature=f72d3adbb6197f193fdc1f33c230c499bc5848f2c1b56ffcdd62110c52a7f467&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVQBUQV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB4SOxrB1A87EbeUfBBY2NCrGPAiLHuSVFmtcIHBA77aAiAVQRLDqi%2FTW3iP%2F4huJdpEEfMJakwmWQQgRCtXsyhFdSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrZzVfb%2BHIvZ1Y9TcKtwDoQ70udDVsgDTXnmf%2BWA57MuYeJQo630Eb4511M3ExQP2vPChGJ6KNzSm8CKgRvWd7rnK77D2c3kiwSceGjTsMT0SgeRexwKFKOaj5mda7Y1j1NL0Y%2BustcCWPiXgk5ZJIgJKhtI196uxNYVKsG6rxwnG1NGY%2BmlcfNgZWZ2MLc0zE6MiSbcnG%2Fckng07CQfIKcf0C2wopCijnrPWz91nDoNKSBQx2k91WF8oNt8Zj6AaZKrGDgerypMQpzErRy8LwXjLSSgC7XnaUtYoEhsiplcu7CbrET%2B%2F1xA3AjUGX0W5vvE38u%2FTk9yTSlyQiA0StxKbX0nC1DoDnJ1A4ZqEnp0gwIOUIE5UdiveIHFMQEOqqQOMOyHHM0YrmMrHYBws4AQDb%2FFZXaDcvsbwnhqtScbtWzpqQsmAHgdr8Leds2CPypM%2FRoyYQPBbPev82oqH3c8n%2BxuWLvIM%2BkbFG7DuSL20yNmHz2IVFuCEo1rmsie7Zl1ZxTtNOXpz60pWBqMfNKmj0cHjs77jvSTI3G7w8YO700%2BbFiKq4UX9XNB%2BiiPoR2i%2FdVYLgTV1UU0UuKB77kCd0j%2BlTrg5DjXfRU6AU3f2E7VdoIvznflR7bQmLAsOTgD%2Fddc5VOQYKFcwmb%2BtvgY6pgGZgi7BZ%2FYpBnW9rEwTk66HVLDqli8U%2FrvLO2djHtRcu41rMiw9yTxEoNXq42Ez7605rIUC3%2BzVaFAC3%2BsYrd8Cj8aZdKlPKeNAgPg0XqEneo3EpDpyMj1in0YA8B3jyot5Ct%2BMIey2qkFbDfguhimaKTBOew1XHAMkUxkBnGGpFNNocTUg3gMFTcuzKJMsqVxUh1i9QjxndYV4Bh9v3USkh81MQ6J%2B&X-Amz-Signature=fbfe63d8afc786a330c5147a2522e044aac9e3c0e731beccb37dd0577ce21bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVQBUQV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB4SOxrB1A87EbeUfBBY2NCrGPAiLHuSVFmtcIHBA77aAiAVQRLDqi%2FTW3iP%2F4huJdpEEfMJakwmWQQgRCtXsyhFdSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMrZzVfb%2BHIvZ1Y9TcKtwDoQ70udDVsgDTXnmf%2BWA57MuYeJQo630Eb4511M3ExQP2vPChGJ6KNzSm8CKgRvWd7rnK77D2c3kiwSceGjTsMT0SgeRexwKFKOaj5mda7Y1j1NL0Y%2BustcCWPiXgk5ZJIgJKhtI196uxNYVKsG6rxwnG1NGY%2BmlcfNgZWZ2MLc0zE6MiSbcnG%2Fckng07CQfIKcf0C2wopCijnrPWz91nDoNKSBQx2k91WF8oNt8Zj6AaZKrGDgerypMQpzErRy8LwXjLSSgC7XnaUtYoEhsiplcu7CbrET%2B%2F1xA3AjUGX0W5vvE38u%2FTk9yTSlyQiA0StxKbX0nC1DoDnJ1A4ZqEnp0gwIOUIE5UdiveIHFMQEOqqQOMOyHHM0YrmMrHYBws4AQDb%2FFZXaDcvsbwnhqtScbtWzpqQsmAHgdr8Leds2CPypM%2FRoyYQPBbPev82oqH3c8n%2BxuWLvIM%2BkbFG7DuSL20yNmHz2IVFuCEo1rmsie7Zl1ZxTtNOXpz60pWBqMfNKmj0cHjs77jvSTI3G7w8YO700%2BbFiKq4UX9XNB%2BiiPoR2i%2FdVYLgTV1UU0UuKB77kCd0j%2BlTrg5DjXfRU6AU3f2E7VdoIvznflR7bQmLAsOTgD%2Fddc5VOQYKFcwmb%2BtvgY6pgGZgi7BZ%2FYpBnW9rEwTk66HVLDqli8U%2FrvLO2djHtRcu41rMiw9yTxEoNXq42Ez7605rIUC3%2BzVaFAC3%2BsYrd8Cj8aZdKlPKeNAgPg0XqEneo3EpDpyMj1in0YA8B3jyot5Ct%2BMIey2qkFbDfguhimaKTBOew1XHAMkUxkBnGGpFNNocTUg3gMFTcuzKJMsqVxUh1i9QjxndYV4Bh9v3USkh81MQ6J%2B&X-Amz-Signature=0a2715238184b7f40d0043edc30e6ad18e7b40a167e914454a745ca951616108&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
