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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOC2Z5AP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAwWJC1jCxDa%2FkdgW%2FJJ%2B9fIq5Unmr8UBewUscQOstrBAiBgbCGysmg4XTQ95DPklezndNnTz4YHqMfFpwZeVP31ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FOJtHaX%2FU6%2Fxd0RKtwDyErshokZQeBYsIGxd96ytewofTFsCgbGedRkvw4owMxO1H3dgA%2FACDHZXUOU84JlNehHqFxqredNcfKgNUHKGavaGaWW8wY%2Fg1bx3ohtkp2XwSRSR%2FI1fWwVoYqWF7xAjl%2BmGXaoIVUeLnuIAVRcuADbGTGfxvJSmawQ5awvSQPAtVP5tyoukwzZeWKwIJqyyN9il%2FPnA3BqFyq%2Bm8KN2t0a0gJ5qN6GOSGzI0L0L6dPqJkcGw4eEDye%2BFeEpp%2BYfY3KqoBE47oX%2FAHpCEhjAfyboD6Z9iwv0YoO%2B3D%2B317%2B%2FHOfiQ0HDc9zL0Ig12vyH4eiR7s8thKfLQCF6iTlDLqMj%2Bd5l9vMhDJnzkQMH2a%2BCA3Y6qItR5VpnvddCk18h4m72D0UxZcJhrkbydHR3lA8a9SOZ43hNU3hKW1EiU3PBvmHgnXuPH%2FIoqZx27QHgIq0%2FrMiCn5ZWzUXHsaz98MIp4VLsXHiuBPIblObIHa0czVq5M58jW7KyeMiqCVegMYWXoyZ0eInOBG5VvICHPUZUXHCVLbJ%2BZpv5J11Q5MwE2ile%2Bw25EorcwSg7mDLXBgZRWSB0%2F6Lhj2aDN9VGZR%2BBk2P%2FDjWvqPz46rCkKWPieRSPQ7Xde%2BQh3EwicbvvgY6pgEjSOFTObPx1CmxZIBU344XmZE4fyMI9l52CewHmVWVbLs4y5hBK8XsbQWo2CnwnmrutVP4FGi9Aj%2BVO2LyHpDPSRxlJmppUGKdoeJuZXjKEKlVZ9ZmMXH5%2FCcqcwRMuRx8OT%2BbLW0e4rpZplJg5uoFMqGfAKih2260rtGLXF7eiE2qn9L6gsyNVK%2FtSZnkpZR9w%2BFFP0qTXv%2Fjh3lbelEr440btOcz&X-Amz-Signature=f0768dd98b435764b580246ea584e77cdb422ab6ccf5d29c5148c910581948e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOC2Z5AP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAwWJC1jCxDa%2FkdgW%2FJJ%2B9fIq5Unmr8UBewUscQOstrBAiBgbCGysmg4XTQ95DPklezndNnTz4YHqMfFpwZeVP31ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FOJtHaX%2FU6%2Fxd0RKtwDyErshokZQeBYsIGxd96ytewofTFsCgbGedRkvw4owMxO1H3dgA%2FACDHZXUOU84JlNehHqFxqredNcfKgNUHKGavaGaWW8wY%2Fg1bx3ohtkp2XwSRSR%2FI1fWwVoYqWF7xAjl%2BmGXaoIVUeLnuIAVRcuADbGTGfxvJSmawQ5awvSQPAtVP5tyoukwzZeWKwIJqyyN9il%2FPnA3BqFyq%2Bm8KN2t0a0gJ5qN6GOSGzI0L0L6dPqJkcGw4eEDye%2BFeEpp%2BYfY3KqoBE47oX%2FAHpCEhjAfyboD6Z9iwv0YoO%2B3D%2B317%2B%2FHOfiQ0HDc9zL0Ig12vyH4eiR7s8thKfLQCF6iTlDLqMj%2Bd5l9vMhDJnzkQMH2a%2BCA3Y6qItR5VpnvddCk18h4m72D0UxZcJhrkbydHR3lA8a9SOZ43hNU3hKW1EiU3PBvmHgnXuPH%2FIoqZx27QHgIq0%2FrMiCn5ZWzUXHsaz98MIp4VLsXHiuBPIblObIHa0czVq5M58jW7KyeMiqCVegMYWXoyZ0eInOBG5VvICHPUZUXHCVLbJ%2BZpv5J11Q5MwE2ile%2Bw25EorcwSg7mDLXBgZRWSB0%2F6Lhj2aDN9VGZR%2BBk2P%2FDjWvqPz46rCkKWPieRSPQ7Xde%2BQh3EwicbvvgY6pgEjSOFTObPx1CmxZIBU344XmZE4fyMI9l52CewHmVWVbLs4y5hBK8XsbQWo2CnwnmrutVP4FGi9Aj%2BVO2LyHpDPSRxlJmppUGKdoeJuZXjKEKlVZ9ZmMXH5%2FCcqcwRMuRx8OT%2BbLW0e4rpZplJg5uoFMqGfAKih2260rtGLXF7eiE2qn9L6gsyNVK%2FtSZnkpZR9w%2BFFP0qTXv%2Fjh3lbelEr440btOcz&X-Amz-Signature=536078ca32a0336f53d6a4734b60244767cb0de1dabe1e17f651519ee2162fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOC2Z5AP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAwWJC1jCxDa%2FkdgW%2FJJ%2B9fIq5Unmr8UBewUscQOstrBAiBgbCGysmg4XTQ95DPklezndNnTz4YHqMfFpwZeVP31ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FOJtHaX%2FU6%2Fxd0RKtwDyErshokZQeBYsIGxd96ytewofTFsCgbGedRkvw4owMxO1H3dgA%2FACDHZXUOU84JlNehHqFxqredNcfKgNUHKGavaGaWW8wY%2Fg1bx3ohtkp2XwSRSR%2FI1fWwVoYqWF7xAjl%2BmGXaoIVUeLnuIAVRcuADbGTGfxvJSmawQ5awvSQPAtVP5tyoukwzZeWKwIJqyyN9il%2FPnA3BqFyq%2Bm8KN2t0a0gJ5qN6GOSGzI0L0L6dPqJkcGw4eEDye%2BFeEpp%2BYfY3KqoBE47oX%2FAHpCEhjAfyboD6Z9iwv0YoO%2B3D%2B317%2B%2FHOfiQ0HDc9zL0Ig12vyH4eiR7s8thKfLQCF6iTlDLqMj%2Bd5l9vMhDJnzkQMH2a%2BCA3Y6qItR5VpnvddCk18h4m72D0UxZcJhrkbydHR3lA8a9SOZ43hNU3hKW1EiU3PBvmHgnXuPH%2FIoqZx27QHgIq0%2FrMiCn5ZWzUXHsaz98MIp4VLsXHiuBPIblObIHa0czVq5M58jW7KyeMiqCVegMYWXoyZ0eInOBG5VvICHPUZUXHCVLbJ%2BZpv5J11Q5MwE2ile%2Bw25EorcwSg7mDLXBgZRWSB0%2F6Lhj2aDN9VGZR%2BBk2P%2FDjWvqPz46rCkKWPieRSPQ7Xde%2BQh3EwicbvvgY6pgEjSOFTObPx1CmxZIBU344XmZE4fyMI9l52CewHmVWVbLs4y5hBK8XsbQWo2CnwnmrutVP4FGi9Aj%2BVO2LyHpDPSRxlJmppUGKdoeJuZXjKEKlVZ9ZmMXH5%2FCcqcwRMuRx8OT%2BbLW0e4rpZplJg5uoFMqGfAKih2260rtGLXF7eiE2qn9L6gsyNVK%2FtSZnkpZR9w%2BFFP0qTXv%2Fjh3lbelEr440btOcz&X-Amz-Signature=6572d851f89d25ab2591a37e4128364e664e9cb81b47f7b70b1e00a304d997ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOC2Z5AP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAwWJC1jCxDa%2FkdgW%2FJJ%2B9fIq5Unmr8UBewUscQOstrBAiBgbCGysmg4XTQ95DPklezndNnTz4YHqMfFpwZeVP31ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FOJtHaX%2FU6%2Fxd0RKtwDyErshokZQeBYsIGxd96ytewofTFsCgbGedRkvw4owMxO1H3dgA%2FACDHZXUOU84JlNehHqFxqredNcfKgNUHKGavaGaWW8wY%2Fg1bx3ohtkp2XwSRSR%2FI1fWwVoYqWF7xAjl%2BmGXaoIVUeLnuIAVRcuADbGTGfxvJSmawQ5awvSQPAtVP5tyoukwzZeWKwIJqyyN9il%2FPnA3BqFyq%2Bm8KN2t0a0gJ5qN6GOSGzI0L0L6dPqJkcGw4eEDye%2BFeEpp%2BYfY3KqoBE47oX%2FAHpCEhjAfyboD6Z9iwv0YoO%2B3D%2B317%2B%2FHOfiQ0HDc9zL0Ig12vyH4eiR7s8thKfLQCF6iTlDLqMj%2Bd5l9vMhDJnzkQMH2a%2BCA3Y6qItR5VpnvddCk18h4m72D0UxZcJhrkbydHR3lA8a9SOZ43hNU3hKW1EiU3PBvmHgnXuPH%2FIoqZx27QHgIq0%2FrMiCn5ZWzUXHsaz98MIp4VLsXHiuBPIblObIHa0czVq5M58jW7KyeMiqCVegMYWXoyZ0eInOBG5VvICHPUZUXHCVLbJ%2BZpv5J11Q5MwE2ile%2Bw25EorcwSg7mDLXBgZRWSB0%2F6Lhj2aDN9VGZR%2BBk2P%2FDjWvqPz46rCkKWPieRSPQ7Xde%2BQh3EwicbvvgY6pgEjSOFTObPx1CmxZIBU344XmZE4fyMI9l52CewHmVWVbLs4y5hBK8XsbQWo2CnwnmrutVP4FGi9Aj%2BVO2LyHpDPSRxlJmppUGKdoeJuZXjKEKlVZ9ZmMXH5%2FCcqcwRMuRx8OT%2BbLW0e4rpZplJg5uoFMqGfAKih2260rtGLXF7eiE2qn9L6gsyNVK%2FtSZnkpZR9w%2BFFP0qTXv%2Fjh3lbelEr440btOcz&X-Amz-Signature=04a59f8488d70f2352549e97cb0bad04ae198b35f211af8a43d2cc3fec1692aa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOC2Z5AP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAwWJC1jCxDa%2FkdgW%2FJJ%2B9fIq5Unmr8UBewUscQOstrBAiBgbCGysmg4XTQ95DPklezndNnTz4YHqMfFpwZeVP31ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FOJtHaX%2FU6%2Fxd0RKtwDyErshokZQeBYsIGxd96ytewofTFsCgbGedRkvw4owMxO1H3dgA%2FACDHZXUOU84JlNehHqFxqredNcfKgNUHKGavaGaWW8wY%2Fg1bx3ohtkp2XwSRSR%2FI1fWwVoYqWF7xAjl%2BmGXaoIVUeLnuIAVRcuADbGTGfxvJSmawQ5awvSQPAtVP5tyoukwzZeWKwIJqyyN9il%2FPnA3BqFyq%2Bm8KN2t0a0gJ5qN6GOSGzI0L0L6dPqJkcGw4eEDye%2BFeEpp%2BYfY3KqoBE47oX%2FAHpCEhjAfyboD6Z9iwv0YoO%2B3D%2B317%2B%2FHOfiQ0HDc9zL0Ig12vyH4eiR7s8thKfLQCF6iTlDLqMj%2Bd5l9vMhDJnzkQMH2a%2BCA3Y6qItR5VpnvddCk18h4m72D0UxZcJhrkbydHR3lA8a9SOZ43hNU3hKW1EiU3PBvmHgnXuPH%2FIoqZx27QHgIq0%2FrMiCn5ZWzUXHsaz98MIp4VLsXHiuBPIblObIHa0czVq5M58jW7KyeMiqCVegMYWXoyZ0eInOBG5VvICHPUZUXHCVLbJ%2BZpv5J11Q5MwE2ile%2Bw25EorcwSg7mDLXBgZRWSB0%2F6Lhj2aDN9VGZR%2BBk2P%2FDjWvqPz46rCkKWPieRSPQ7Xde%2BQh3EwicbvvgY6pgEjSOFTObPx1CmxZIBU344XmZE4fyMI9l52CewHmVWVbLs4y5hBK8XsbQWo2CnwnmrutVP4FGi9Aj%2BVO2LyHpDPSRxlJmppUGKdoeJuZXjKEKlVZ9ZmMXH5%2FCcqcwRMuRx8OT%2BbLW0e4rpZplJg5uoFMqGfAKih2260rtGLXF7eiE2qn9L6gsyNVK%2FtSZnkpZR9w%2BFFP0qTXv%2Fjh3lbelEr440btOcz&X-Amz-Signature=7251e2d330dda1c3ff5d092778b44a04b5ae6d66de1d3c649821b38b674ce232&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOC2Z5AP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAwWJC1jCxDa%2FkdgW%2FJJ%2B9fIq5Unmr8UBewUscQOstrBAiBgbCGysmg4XTQ95DPklezndNnTz4YHqMfFpwZeVP31ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FOJtHaX%2FU6%2Fxd0RKtwDyErshokZQeBYsIGxd96ytewofTFsCgbGedRkvw4owMxO1H3dgA%2FACDHZXUOU84JlNehHqFxqredNcfKgNUHKGavaGaWW8wY%2Fg1bx3ohtkp2XwSRSR%2FI1fWwVoYqWF7xAjl%2BmGXaoIVUeLnuIAVRcuADbGTGfxvJSmawQ5awvSQPAtVP5tyoukwzZeWKwIJqyyN9il%2FPnA3BqFyq%2Bm8KN2t0a0gJ5qN6GOSGzI0L0L6dPqJkcGw4eEDye%2BFeEpp%2BYfY3KqoBE47oX%2FAHpCEhjAfyboD6Z9iwv0YoO%2B3D%2B317%2B%2FHOfiQ0HDc9zL0Ig12vyH4eiR7s8thKfLQCF6iTlDLqMj%2Bd5l9vMhDJnzkQMH2a%2BCA3Y6qItR5VpnvddCk18h4m72D0UxZcJhrkbydHR3lA8a9SOZ43hNU3hKW1EiU3PBvmHgnXuPH%2FIoqZx27QHgIq0%2FrMiCn5ZWzUXHsaz98MIp4VLsXHiuBPIblObIHa0czVq5M58jW7KyeMiqCVegMYWXoyZ0eInOBG5VvICHPUZUXHCVLbJ%2BZpv5J11Q5MwE2ile%2Bw25EorcwSg7mDLXBgZRWSB0%2F6Lhj2aDN9VGZR%2BBk2P%2FDjWvqPz46rCkKWPieRSPQ7Xde%2BQh3EwicbvvgY6pgEjSOFTObPx1CmxZIBU344XmZE4fyMI9l52CewHmVWVbLs4y5hBK8XsbQWo2CnwnmrutVP4FGi9Aj%2BVO2LyHpDPSRxlJmppUGKdoeJuZXjKEKlVZ9ZmMXH5%2FCcqcwRMuRx8OT%2BbLW0e4rpZplJg5uoFMqGfAKih2260rtGLXF7eiE2qn9L6gsyNVK%2FtSZnkpZR9w%2BFFP0qTXv%2Fjh3lbelEr440btOcz&X-Amz-Signature=1fb25019a8ce95318e10a953d7293c54bf2282b1c0f3e8b64b56132db58445d9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOC2Z5AP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAwWJC1jCxDa%2FkdgW%2FJJ%2B9fIq5Unmr8UBewUscQOstrBAiBgbCGysmg4XTQ95DPklezndNnTz4YHqMfFpwZeVP31ySqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2FOJtHaX%2FU6%2Fxd0RKtwDyErshokZQeBYsIGxd96ytewofTFsCgbGedRkvw4owMxO1H3dgA%2FACDHZXUOU84JlNehHqFxqredNcfKgNUHKGavaGaWW8wY%2Fg1bx3ohtkp2XwSRSR%2FI1fWwVoYqWF7xAjl%2BmGXaoIVUeLnuIAVRcuADbGTGfxvJSmawQ5awvSQPAtVP5tyoukwzZeWKwIJqyyN9il%2FPnA3BqFyq%2Bm8KN2t0a0gJ5qN6GOSGzI0L0L6dPqJkcGw4eEDye%2BFeEpp%2BYfY3KqoBE47oX%2FAHpCEhjAfyboD6Z9iwv0YoO%2B3D%2B317%2B%2FHOfiQ0HDc9zL0Ig12vyH4eiR7s8thKfLQCF6iTlDLqMj%2Bd5l9vMhDJnzkQMH2a%2BCA3Y6qItR5VpnvddCk18h4m72D0UxZcJhrkbydHR3lA8a9SOZ43hNU3hKW1EiU3PBvmHgnXuPH%2FIoqZx27QHgIq0%2FrMiCn5ZWzUXHsaz98MIp4VLsXHiuBPIblObIHa0czVq5M58jW7KyeMiqCVegMYWXoyZ0eInOBG5VvICHPUZUXHCVLbJ%2BZpv5J11Q5MwE2ile%2Bw25EorcwSg7mDLXBgZRWSB0%2F6Lhj2aDN9VGZR%2BBk2P%2FDjWvqPz46rCkKWPieRSPQ7Xde%2BQh3EwicbvvgY6pgEjSOFTObPx1CmxZIBU344XmZE4fyMI9l52CewHmVWVbLs4y5hBK8XsbQWo2CnwnmrutVP4FGi9Aj%2BVO2LyHpDPSRxlJmppUGKdoeJuZXjKEKlVZ9ZmMXH5%2FCcqcwRMuRx8OT%2BbLW0e4rpZplJg5uoFMqGfAKih2260rtGLXF7eiE2qn9L6gsyNVK%2FtSZnkpZR9w%2BFFP0qTXv%2Fjh3lbelEr440btOcz&X-Amz-Signature=8b2e5ecdff3658a1eac3e174a3bd8fdb86c597abbc97a994e189f6b7396de418&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
