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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4TAL2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCPMN64E4tGLrjKM8wAQUUQDQdbABj4j%2Fx2FyAR2bEpYgIhAOgP4WDl4WdcV8Usp6tynKpvsobo9KpxKZvmcYzMKZ3vKv8DCDsQABoMNjM3NDIzMTgzODA1IgxzaaIgmz5ojgHz9JAq3AN59fIfkIsjvUXAnpqhZzGuZR%2B%2F43u3J%2BjmHYyZc5SCbp2Kw4CHrTM%2F2aMNP0VxW5gAkbMqjiEF5xBiyHRWDhpO1%2BpmsPvd%2FFwTA2MOL7%2BSWZ6B8SCeZxeebw4QmkyZ8Ks8f%2FfgaX7mrzr8PfhwHIoqLUBYgg1VM3Uey9l7IWvKWdV4PojUPkyeXEVjAFRjj0U0ZOhBkG0b3y1KNFZzJkgGm4EAiNzFHk0yhXspcFQEpJtbGMqSFAscRaWM6rL3Nna7YyVaGJDUgm5jjwVQ3jTMbjg%2BTb77r1lBdFP3v9Smkks%2FGKzd6QyMnocC0zQZXv547BVITuhUh603teP0w%2Fa6c%2FElNamxMuhNKrOg%2BOJIrTaUUAf%2FfkBfH42lpsqi6U8%2BgaEhQTbdiN3lDEpX6syJ70wVs%2Fdsf9I3E5kch9VdLanGS97Eomfd9zMzwF6V0ZXP2FwGF07rPft1N3Fjfa4uOw25JD4BJTCUjpL%2FRtkskGW9fTDMJSxcWbrYyQ8Xg61DXqmkTJlseTvLWZV7Z5XCfeMHTqSGC%2B3MT6w%2FO4BRQoWmrVVoSL1K8jmmV0XZNXw7oyBXwH7XMpjKAfP2EPvpyyldcF%2BlcfRZbpkcVj2Z7OV3VyD8zPSXOUtD3zDRiKLDBjqkAViirVSbMCxbCcyI4%2FWWAmyVbahjigV2E%2Bl7d1CFkWQzUenSE7Qa4lwlWiAffmv9cxCJGcmzMLu7HkSuYxBI1EmShVfQ0JH7pDBD%2FR%2Fz9rYyumkUviB7RsoBhZuw%2B3ja9QZIbqPtW79uH7nRDiT4Bh9G8U1yi%2FhtpklfN%2B9IXOpspbaYEDSy7Q%2BXiT%2BSAlAkrtf39Gf1LMVPTMOw2xv5YigULQj%2F&X-Amz-Signature=2c45bb48a6dc46cce14cf4232df3379301eb1611acabe743f8e6c919c2c36ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4TAL2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCPMN64E4tGLrjKM8wAQUUQDQdbABj4j%2Fx2FyAR2bEpYgIhAOgP4WDl4WdcV8Usp6tynKpvsobo9KpxKZvmcYzMKZ3vKv8DCDsQABoMNjM3NDIzMTgzODA1IgxzaaIgmz5ojgHz9JAq3AN59fIfkIsjvUXAnpqhZzGuZR%2B%2F43u3J%2BjmHYyZc5SCbp2Kw4CHrTM%2F2aMNP0VxW5gAkbMqjiEF5xBiyHRWDhpO1%2BpmsPvd%2FFwTA2MOL7%2BSWZ6B8SCeZxeebw4QmkyZ8Ks8f%2FfgaX7mrzr8PfhwHIoqLUBYgg1VM3Uey9l7IWvKWdV4PojUPkyeXEVjAFRjj0U0ZOhBkG0b3y1KNFZzJkgGm4EAiNzFHk0yhXspcFQEpJtbGMqSFAscRaWM6rL3Nna7YyVaGJDUgm5jjwVQ3jTMbjg%2BTb77r1lBdFP3v9Smkks%2FGKzd6QyMnocC0zQZXv547BVITuhUh603teP0w%2Fa6c%2FElNamxMuhNKrOg%2BOJIrTaUUAf%2FfkBfH42lpsqi6U8%2BgaEhQTbdiN3lDEpX6syJ70wVs%2Fdsf9I3E5kch9VdLanGS97Eomfd9zMzwF6V0ZXP2FwGF07rPft1N3Fjfa4uOw25JD4BJTCUjpL%2FRtkskGW9fTDMJSxcWbrYyQ8Xg61DXqmkTJlseTvLWZV7Z5XCfeMHTqSGC%2B3MT6w%2FO4BRQoWmrVVoSL1K8jmmV0XZNXw7oyBXwH7XMpjKAfP2EPvpyyldcF%2BlcfRZbpkcVj2Z7OV3VyD8zPSXOUtD3zDRiKLDBjqkAViirVSbMCxbCcyI4%2FWWAmyVbahjigV2E%2Bl7d1CFkWQzUenSE7Qa4lwlWiAffmv9cxCJGcmzMLu7HkSuYxBI1EmShVfQ0JH7pDBD%2FR%2Fz9rYyumkUviB7RsoBhZuw%2B3ja9QZIbqPtW79uH7nRDiT4Bh9G8U1yi%2FhtpklfN%2B9IXOpspbaYEDSy7Q%2BXiT%2BSAlAkrtf39Gf1LMVPTMOw2xv5YigULQj%2F&X-Amz-Signature=a7a320833e2ebcc94dae087d624f732d0147e31a6f8ef9d85395901f8e9c70cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4TAL2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCPMN64E4tGLrjKM8wAQUUQDQdbABj4j%2Fx2FyAR2bEpYgIhAOgP4WDl4WdcV8Usp6tynKpvsobo9KpxKZvmcYzMKZ3vKv8DCDsQABoMNjM3NDIzMTgzODA1IgxzaaIgmz5ojgHz9JAq3AN59fIfkIsjvUXAnpqhZzGuZR%2B%2F43u3J%2BjmHYyZc5SCbp2Kw4CHrTM%2F2aMNP0VxW5gAkbMqjiEF5xBiyHRWDhpO1%2BpmsPvd%2FFwTA2MOL7%2BSWZ6B8SCeZxeebw4QmkyZ8Ks8f%2FfgaX7mrzr8PfhwHIoqLUBYgg1VM3Uey9l7IWvKWdV4PojUPkyeXEVjAFRjj0U0ZOhBkG0b3y1KNFZzJkgGm4EAiNzFHk0yhXspcFQEpJtbGMqSFAscRaWM6rL3Nna7YyVaGJDUgm5jjwVQ3jTMbjg%2BTb77r1lBdFP3v9Smkks%2FGKzd6QyMnocC0zQZXv547BVITuhUh603teP0w%2Fa6c%2FElNamxMuhNKrOg%2BOJIrTaUUAf%2FfkBfH42lpsqi6U8%2BgaEhQTbdiN3lDEpX6syJ70wVs%2Fdsf9I3E5kch9VdLanGS97Eomfd9zMzwF6V0ZXP2FwGF07rPft1N3Fjfa4uOw25JD4BJTCUjpL%2FRtkskGW9fTDMJSxcWbrYyQ8Xg61DXqmkTJlseTvLWZV7Z5XCfeMHTqSGC%2B3MT6w%2FO4BRQoWmrVVoSL1K8jmmV0XZNXw7oyBXwH7XMpjKAfP2EPvpyyldcF%2BlcfRZbpkcVj2Z7OV3VyD8zPSXOUtD3zDRiKLDBjqkAViirVSbMCxbCcyI4%2FWWAmyVbahjigV2E%2Bl7d1CFkWQzUenSE7Qa4lwlWiAffmv9cxCJGcmzMLu7HkSuYxBI1EmShVfQ0JH7pDBD%2FR%2Fz9rYyumkUviB7RsoBhZuw%2B3ja9QZIbqPtW79uH7nRDiT4Bh9G8U1yi%2FhtpklfN%2B9IXOpspbaYEDSy7Q%2BXiT%2BSAlAkrtf39Gf1LMVPTMOw2xv5YigULQj%2F&X-Amz-Signature=eb4d2eba15857f78ebe471b727de113ac8818aff8562e56f1016591392684079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4TAL2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCPMN64E4tGLrjKM8wAQUUQDQdbABj4j%2Fx2FyAR2bEpYgIhAOgP4WDl4WdcV8Usp6tynKpvsobo9KpxKZvmcYzMKZ3vKv8DCDsQABoMNjM3NDIzMTgzODA1IgxzaaIgmz5ojgHz9JAq3AN59fIfkIsjvUXAnpqhZzGuZR%2B%2F43u3J%2BjmHYyZc5SCbp2Kw4CHrTM%2F2aMNP0VxW5gAkbMqjiEF5xBiyHRWDhpO1%2BpmsPvd%2FFwTA2MOL7%2BSWZ6B8SCeZxeebw4QmkyZ8Ks8f%2FfgaX7mrzr8PfhwHIoqLUBYgg1VM3Uey9l7IWvKWdV4PojUPkyeXEVjAFRjj0U0ZOhBkG0b3y1KNFZzJkgGm4EAiNzFHk0yhXspcFQEpJtbGMqSFAscRaWM6rL3Nna7YyVaGJDUgm5jjwVQ3jTMbjg%2BTb77r1lBdFP3v9Smkks%2FGKzd6QyMnocC0zQZXv547BVITuhUh603teP0w%2Fa6c%2FElNamxMuhNKrOg%2BOJIrTaUUAf%2FfkBfH42lpsqi6U8%2BgaEhQTbdiN3lDEpX6syJ70wVs%2Fdsf9I3E5kch9VdLanGS97Eomfd9zMzwF6V0ZXP2FwGF07rPft1N3Fjfa4uOw25JD4BJTCUjpL%2FRtkskGW9fTDMJSxcWbrYyQ8Xg61DXqmkTJlseTvLWZV7Z5XCfeMHTqSGC%2B3MT6w%2FO4BRQoWmrVVoSL1K8jmmV0XZNXw7oyBXwH7XMpjKAfP2EPvpyyldcF%2BlcfRZbpkcVj2Z7OV3VyD8zPSXOUtD3zDRiKLDBjqkAViirVSbMCxbCcyI4%2FWWAmyVbahjigV2E%2Bl7d1CFkWQzUenSE7Qa4lwlWiAffmv9cxCJGcmzMLu7HkSuYxBI1EmShVfQ0JH7pDBD%2FR%2Fz9rYyumkUviB7RsoBhZuw%2B3ja9QZIbqPtW79uH7nRDiT4Bh9G8U1yi%2FhtpklfN%2B9IXOpspbaYEDSy7Q%2BXiT%2BSAlAkrtf39Gf1LMVPTMOw2xv5YigULQj%2F&X-Amz-Signature=b109becd0b2e5ecf6f2e7e7e6f2914c410a7954f1c1bf43a18f71bf9f796ce82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4TAL2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCPMN64E4tGLrjKM8wAQUUQDQdbABj4j%2Fx2FyAR2bEpYgIhAOgP4WDl4WdcV8Usp6tynKpvsobo9KpxKZvmcYzMKZ3vKv8DCDsQABoMNjM3NDIzMTgzODA1IgxzaaIgmz5ojgHz9JAq3AN59fIfkIsjvUXAnpqhZzGuZR%2B%2F43u3J%2BjmHYyZc5SCbp2Kw4CHrTM%2F2aMNP0VxW5gAkbMqjiEF5xBiyHRWDhpO1%2BpmsPvd%2FFwTA2MOL7%2BSWZ6B8SCeZxeebw4QmkyZ8Ks8f%2FfgaX7mrzr8PfhwHIoqLUBYgg1VM3Uey9l7IWvKWdV4PojUPkyeXEVjAFRjj0U0ZOhBkG0b3y1KNFZzJkgGm4EAiNzFHk0yhXspcFQEpJtbGMqSFAscRaWM6rL3Nna7YyVaGJDUgm5jjwVQ3jTMbjg%2BTb77r1lBdFP3v9Smkks%2FGKzd6QyMnocC0zQZXv547BVITuhUh603teP0w%2Fa6c%2FElNamxMuhNKrOg%2BOJIrTaUUAf%2FfkBfH42lpsqi6U8%2BgaEhQTbdiN3lDEpX6syJ70wVs%2Fdsf9I3E5kch9VdLanGS97Eomfd9zMzwF6V0ZXP2FwGF07rPft1N3Fjfa4uOw25JD4BJTCUjpL%2FRtkskGW9fTDMJSxcWbrYyQ8Xg61DXqmkTJlseTvLWZV7Z5XCfeMHTqSGC%2B3MT6w%2FO4BRQoWmrVVoSL1K8jmmV0XZNXw7oyBXwH7XMpjKAfP2EPvpyyldcF%2BlcfRZbpkcVj2Z7OV3VyD8zPSXOUtD3zDRiKLDBjqkAViirVSbMCxbCcyI4%2FWWAmyVbahjigV2E%2Bl7d1CFkWQzUenSE7Qa4lwlWiAffmv9cxCJGcmzMLu7HkSuYxBI1EmShVfQ0JH7pDBD%2FR%2Fz9rYyumkUviB7RsoBhZuw%2B3ja9QZIbqPtW79uH7nRDiT4Bh9G8U1yi%2FhtpklfN%2B9IXOpspbaYEDSy7Q%2BXiT%2BSAlAkrtf39Gf1LMVPTMOw2xv5YigULQj%2F&X-Amz-Signature=1c0162b93cfd699fc16d27dc6e035cceeee89ae8d0cf15bbab3e9a31f5236f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4TAL2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCPMN64E4tGLrjKM8wAQUUQDQdbABj4j%2Fx2FyAR2bEpYgIhAOgP4WDl4WdcV8Usp6tynKpvsobo9KpxKZvmcYzMKZ3vKv8DCDsQABoMNjM3NDIzMTgzODA1IgxzaaIgmz5ojgHz9JAq3AN59fIfkIsjvUXAnpqhZzGuZR%2B%2F43u3J%2BjmHYyZc5SCbp2Kw4CHrTM%2F2aMNP0VxW5gAkbMqjiEF5xBiyHRWDhpO1%2BpmsPvd%2FFwTA2MOL7%2BSWZ6B8SCeZxeebw4QmkyZ8Ks8f%2FfgaX7mrzr8PfhwHIoqLUBYgg1VM3Uey9l7IWvKWdV4PojUPkyeXEVjAFRjj0U0ZOhBkG0b3y1KNFZzJkgGm4EAiNzFHk0yhXspcFQEpJtbGMqSFAscRaWM6rL3Nna7YyVaGJDUgm5jjwVQ3jTMbjg%2BTb77r1lBdFP3v9Smkks%2FGKzd6QyMnocC0zQZXv547BVITuhUh603teP0w%2Fa6c%2FElNamxMuhNKrOg%2BOJIrTaUUAf%2FfkBfH42lpsqi6U8%2BgaEhQTbdiN3lDEpX6syJ70wVs%2Fdsf9I3E5kch9VdLanGS97Eomfd9zMzwF6V0ZXP2FwGF07rPft1N3Fjfa4uOw25JD4BJTCUjpL%2FRtkskGW9fTDMJSxcWbrYyQ8Xg61DXqmkTJlseTvLWZV7Z5XCfeMHTqSGC%2B3MT6w%2FO4BRQoWmrVVoSL1K8jmmV0XZNXw7oyBXwH7XMpjKAfP2EPvpyyldcF%2BlcfRZbpkcVj2Z7OV3VyD8zPSXOUtD3zDRiKLDBjqkAViirVSbMCxbCcyI4%2FWWAmyVbahjigV2E%2Bl7d1CFkWQzUenSE7Qa4lwlWiAffmv9cxCJGcmzMLu7HkSuYxBI1EmShVfQ0JH7pDBD%2FR%2Fz9rYyumkUviB7RsoBhZuw%2B3ja9QZIbqPtW79uH7nRDiT4Bh9G8U1yi%2FhtpklfN%2B9IXOpspbaYEDSy7Q%2BXiT%2BSAlAkrtf39Gf1LMVPTMOw2xv5YigULQj%2F&X-Amz-Signature=80f87f7ea4268050181b2d867fef42b16bd87158be1ae480da09d4dc50c72fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4TAL2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCPMN64E4tGLrjKM8wAQUUQDQdbABj4j%2Fx2FyAR2bEpYgIhAOgP4WDl4WdcV8Usp6tynKpvsobo9KpxKZvmcYzMKZ3vKv8DCDsQABoMNjM3NDIzMTgzODA1IgxzaaIgmz5ojgHz9JAq3AN59fIfkIsjvUXAnpqhZzGuZR%2B%2F43u3J%2BjmHYyZc5SCbp2Kw4CHrTM%2F2aMNP0VxW5gAkbMqjiEF5xBiyHRWDhpO1%2BpmsPvd%2FFwTA2MOL7%2BSWZ6B8SCeZxeebw4QmkyZ8Ks8f%2FfgaX7mrzr8PfhwHIoqLUBYgg1VM3Uey9l7IWvKWdV4PojUPkyeXEVjAFRjj0U0ZOhBkG0b3y1KNFZzJkgGm4EAiNzFHk0yhXspcFQEpJtbGMqSFAscRaWM6rL3Nna7YyVaGJDUgm5jjwVQ3jTMbjg%2BTb77r1lBdFP3v9Smkks%2FGKzd6QyMnocC0zQZXv547BVITuhUh603teP0w%2Fa6c%2FElNamxMuhNKrOg%2BOJIrTaUUAf%2FfkBfH42lpsqi6U8%2BgaEhQTbdiN3lDEpX6syJ70wVs%2Fdsf9I3E5kch9VdLanGS97Eomfd9zMzwF6V0ZXP2FwGF07rPft1N3Fjfa4uOw25JD4BJTCUjpL%2FRtkskGW9fTDMJSxcWbrYyQ8Xg61DXqmkTJlseTvLWZV7Z5XCfeMHTqSGC%2B3MT6w%2FO4BRQoWmrVVoSL1K8jmmV0XZNXw7oyBXwH7XMpjKAfP2EPvpyyldcF%2BlcfRZbpkcVj2Z7OV3VyD8zPSXOUtD3zDRiKLDBjqkAViirVSbMCxbCcyI4%2FWWAmyVbahjigV2E%2Bl7d1CFkWQzUenSE7Qa4lwlWiAffmv9cxCJGcmzMLu7HkSuYxBI1EmShVfQ0JH7pDBD%2FR%2Fz9rYyumkUviB7RsoBhZuw%2B3ja9QZIbqPtW79uH7nRDiT4Bh9G8U1yi%2FhtpklfN%2B9IXOpspbaYEDSy7Q%2BXiT%2BSAlAkrtf39Gf1LMVPTMOw2xv5YigULQj%2F&X-Amz-Signature=6b0f9917b4f78daca0ac24f6750a316936a6c0b473c1c4b0119c9eb7259cdd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
