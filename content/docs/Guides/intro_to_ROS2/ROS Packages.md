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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF7XQDG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa1Mec9TeX5Gn%2BUIxZO8%2BkN4e%2Fra1Z%2B7Jd2BsM2Tl8TwIhAKX7wr81tbJaTjbHWtkr3Db0JA%2FiZdroTFdG5ijHKD5WKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJ8iY3ekdmAYpIoEq3APalQqw1c9W0FAIgQnr%2FowxCZgXKbnb0KkcLYg8N%2FjoBTLPkMjSxRP5KECcA%2FNRw6Dtas03NhxygaaKwsB1CGhX7OnBMvvp6L3hPwn2I4PS2V9cOk7O11mYZHnSRhQWv7tbgl%2FbIICWCYSIoJ5AWlZReKFZaBls%2Fhz41IgcuSUfFHvF7%2FiLbs2ho8Nb%2BLWp97m3ZcPXV3c9Pseb%2F8S8orAAlZhimD13%2FFTWQiG4dA06G4X24R3vRBvAqZljRWUe1Ogm4wNCHbUXx0i1BU8gHDNOoeA9Te6AKGyjCiAy842aj6KWptXNu%2BDk8jTbg6U9idcGKkBxjYVXnJdqeeeC2wSyd2cszPBHBrFkPMs7f%2BqcCNw7Z87zFRl%2FJPbQ1IisAilZBc5ajV%2BLAZaCYYIuZgXaAc4aYF%2BnKeRmiXC2qZJlZ0MrEAwlRiEYJHdMwm1qmNWyVon2zjlhx3VfE4mc1yQ9eWUDJdmXf74eQrIo7cm2f6X0EurK2eDzRonTCaoijX26RmZAatt%2BIZaoyq%2F6VerlEu4FWlFleS2o0Jy4KAyQFNXNkp7ylpR4P5bmqFPDp4z8TCglWf%2FxwMVUtOXu52RG6vY5GYam1EBZOGH0zf3v489LTes%2Fvu3ctKSYSzDGk5XDBjqkAXB1qysw8MZ1ar%2F49Y3uPrBa1DrCxoXTS1ImYhu3pTIzGZr8meCGsCn2xIU2Z1IBqODkKPxzDwUP2ahi9sa2nvULizxbxR%2Ffcefn58CrNU0vyskF7EcttH3gbm9nThDieRN%2B%2BBLFF7UG9Y2igNd0qcqAHqUUuQJCobJVME4DBDeA3NvQIXcCm8dl9WBgDk9k%2B0TUPtK2%2BwbgEEH0kt3VN%2B6xieAg&X-Amz-Signature=9eeebbebedd846c61f5c8f0e4815d3fb61366ef782e866dbeaa29c0732574e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF7XQDG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa1Mec9TeX5Gn%2BUIxZO8%2BkN4e%2Fra1Z%2B7Jd2BsM2Tl8TwIhAKX7wr81tbJaTjbHWtkr3Db0JA%2FiZdroTFdG5ijHKD5WKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJ8iY3ekdmAYpIoEq3APalQqw1c9W0FAIgQnr%2FowxCZgXKbnb0KkcLYg8N%2FjoBTLPkMjSxRP5KECcA%2FNRw6Dtas03NhxygaaKwsB1CGhX7OnBMvvp6L3hPwn2I4PS2V9cOk7O11mYZHnSRhQWv7tbgl%2FbIICWCYSIoJ5AWlZReKFZaBls%2Fhz41IgcuSUfFHvF7%2FiLbs2ho8Nb%2BLWp97m3ZcPXV3c9Pseb%2F8S8orAAlZhimD13%2FFTWQiG4dA06G4X24R3vRBvAqZljRWUe1Ogm4wNCHbUXx0i1BU8gHDNOoeA9Te6AKGyjCiAy842aj6KWptXNu%2BDk8jTbg6U9idcGKkBxjYVXnJdqeeeC2wSyd2cszPBHBrFkPMs7f%2BqcCNw7Z87zFRl%2FJPbQ1IisAilZBc5ajV%2BLAZaCYYIuZgXaAc4aYF%2BnKeRmiXC2qZJlZ0MrEAwlRiEYJHdMwm1qmNWyVon2zjlhx3VfE4mc1yQ9eWUDJdmXf74eQrIo7cm2f6X0EurK2eDzRonTCaoijX26RmZAatt%2BIZaoyq%2F6VerlEu4FWlFleS2o0Jy4KAyQFNXNkp7ylpR4P5bmqFPDp4z8TCglWf%2FxwMVUtOXu52RG6vY5GYam1EBZOGH0zf3v489LTes%2Fvu3ctKSYSzDGk5XDBjqkAXB1qysw8MZ1ar%2F49Y3uPrBa1DrCxoXTS1ImYhu3pTIzGZr8meCGsCn2xIU2Z1IBqODkKPxzDwUP2ahi9sa2nvULizxbxR%2Ffcefn58CrNU0vyskF7EcttH3gbm9nThDieRN%2B%2BBLFF7UG9Y2igNd0qcqAHqUUuQJCobJVME4DBDeA3NvQIXcCm8dl9WBgDk9k%2B0TUPtK2%2BwbgEEH0kt3VN%2B6xieAg&X-Amz-Signature=0e2a3315445f3c49c7e5e64c33f0d44d884862e2c00a08a520a97794b7a3181e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF7XQDG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa1Mec9TeX5Gn%2BUIxZO8%2BkN4e%2Fra1Z%2B7Jd2BsM2Tl8TwIhAKX7wr81tbJaTjbHWtkr3Db0JA%2FiZdroTFdG5ijHKD5WKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJ8iY3ekdmAYpIoEq3APalQqw1c9W0FAIgQnr%2FowxCZgXKbnb0KkcLYg8N%2FjoBTLPkMjSxRP5KECcA%2FNRw6Dtas03NhxygaaKwsB1CGhX7OnBMvvp6L3hPwn2I4PS2V9cOk7O11mYZHnSRhQWv7tbgl%2FbIICWCYSIoJ5AWlZReKFZaBls%2Fhz41IgcuSUfFHvF7%2FiLbs2ho8Nb%2BLWp97m3ZcPXV3c9Pseb%2F8S8orAAlZhimD13%2FFTWQiG4dA06G4X24R3vRBvAqZljRWUe1Ogm4wNCHbUXx0i1BU8gHDNOoeA9Te6AKGyjCiAy842aj6KWptXNu%2BDk8jTbg6U9idcGKkBxjYVXnJdqeeeC2wSyd2cszPBHBrFkPMs7f%2BqcCNw7Z87zFRl%2FJPbQ1IisAilZBc5ajV%2BLAZaCYYIuZgXaAc4aYF%2BnKeRmiXC2qZJlZ0MrEAwlRiEYJHdMwm1qmNWyVon2zjlhx3VfE4mc1yQ9eWUDJdmXf74eQrIo7cm2f6X0EurK2eDzRonTCaoijX26RmZAatt%2BIZaoyq%2F6VerlEu4FWlFleS2o0Jy4KAyQFNXNkp7ylpR4P5bmqFPDp4z8TCglWf%2FxwMVUtOXu52RG6vY5GYam1EBZOGH0zf3v489LTes%2Fvu3ctKSYSzDGk5XDBjqkAXB1qysw8MZ1ar%2F49Y3uPrBa1DrCxoXTS1ImYhu3pTIzGZr8meCGsCn2xIU2Z1IBqODkKPxzDwUP2ahi9sa2nvULizxbxR%2Ffcefn58CrNU0vyskF7EcttH3gbm9nThDieRN%2B%2BBLFF7UG9Y2igNd0qcqAHqUUuQJCobJVME4DBDeA3NvQIXcCm8dl9WBgDk9k%2B0TUPtK2%2BwbgEEH0kt3VN%2B6xieAg&X-Amz-Signature=385f3a83f931aba14e37d3546ce566ff37f523cd6a77c9025a630567ffefcb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF7XQDG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa1Mec9TeX5Gn%2BUIxZO8%2BkN4e%2Fra1Z%2B7Jd2BsM2Tl8TwIhAKX7wr81tbJaTjbHWtkr3Db0JA%2FiZdroTFdG5ijHKD5WKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJ8iY3ekdmAYpIoEq3APalQqw1c9W0FAIgQnr%2FowxCZgXKbnb0KkcLYg8N%2FjoBTLPkMjSxRP5KECcA%2FNRw6Dtas03NhxygaaKwsB1CGhX7OnBMvvp6L3hPwn2I4PS2V9cOk7O11mYZHnSRhQWv7tbgl%2FbIICWCYSIoJ5AWlZReKFZaBls%2Fhz41IgcuSUfFHvF7%2FiLbs2ho8Nb%2BLWp97m3ZcPXV3c9Pseb%2F8S8orAAlZhimD13%2FFTWQiG4dA06G4X24R3vRBvAqZljRWUe1Ogm4wNCHbUXx0i1BU8gHDNOoeA9Te6AKGyjCiAy842aj6KWptXNu%2BDk8jTbg6U9idcGKkBxjYVXnJdqeeeC2wSyd2cszPBHBrFkPMs7f%2BqcCNw7Z87zFRl%2FJPbQ1IisAilZBc5ajV%2BLAZaCYYIuZgXaAc4aYF%2BnKeRmiXC2qZJlZ0MrEAwlRiEYJHdMwm1qmNWyVon2zjlhx3VfE4mc1yQ9eWUDJdmXf74eQrIo7cm2f6X0EurK2eDzRonTCaoijX26RmZAatt%2BIZaoyq%2F6VerlEu4FWlFleS2o0Jy4KAyQFNXNkp7ylpR4P5bmqFPDp4z8TCglWf%2FxwMVUtOXu52RG6vY5GYam1EBZOGH0zf3v489LTes%2Fvu3ctKSYSzDGk5XDBjqkAXB1qysw8MZ1ar%2F49Y3uPrBa1DrCxoXTS1ImYhu3pTIzGZr8meCGsCn2xIU2Z1IBqODkKPxzDwUP2ahi9sa2nvULizxbxR%2Ffcefn58CrNU0vyskF7EcttH3gbm9nThDieRN%2B%2BBLFF7UG9Y2igNd0qcqAHqUUuQJCobJVME4DBDeA3NvQIXcCm8dl9WBgDk9k%2B0TUPtK2%2BwbgEEH0kt3VN%2B6xieAg&X-Amz-Signature=6f7e1c62b9f576c1300595d6058f228eb0f9253755f6b05ff99696d582f8c81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF7XQDG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa1Mec9TeX5Gn%2BUIxZO8%2BkN4e%2Fra1Z%2B7Jd2BsM2Tl8TwIhAKX7wr81tbJaTjbHWtkr3Db0JA%2FiZdroTFdG5ijHKD5WKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJ8iY3ekdmAYpIoEq3APalQqw1c9W0FAIgQnr%2FowxCZgXKbnb0KkcLYg8N%2FjoBTLPkMjSxRP5KECcA%2FNRw6Dtas03NhxygaaKwsB1CGhX7OnBMvvp6L3hPwn2I4PS2V9cOk7O11mYZHnSRhQWv7tbgl%2FbIICWCYSIoJ5AWlZReKFZaBls%2Fhz41IgcuSUfFHvF7%2FiLbs2ho8Nb%2BLWp97m3ZcPXV3c9Pseb%2F8S8orAAlZhimD13%2FFTWQiG4dA06G4X24R3vRBvAqZljRWUe1Ogm4wNCHbUXx0i1BU8gHDNOoeA9Te6AKGyjCiAy842aj6KWptXNu%2BDk8jTbg6U9idcGKkBxjYVXnJdqeeeC2wSyd2cszPBHBrFkPMs7f%2BqcCNw7Z87zFRl%2FJPbQ1IisAilZBc5ajV%2BLAZaCYYIuZgXaAc4aYF%2BnKeRmiXC2qZJlZ0MrEAwlRiEYJHdMwm1qmNWyVon2zjlhx3VfE4mc1yQ9eWUDJdmXf74eQrIo7cm2f6X0EurK2eDzRonTCaoijX26RmZAatt%2BIZaoyq%2F6VerlEu4FWlFleS2o0Jy4KAyQFNXNkp7ylpR4P5bmqFPDp4z8TCglWf%2FxwMVUtOXu52RG6vY5GYam1EBZOGH0zf3v489LTes%2Fvu3ctKSYSzDGk5XDBjqkAXB1qysw8MZ1ar%2F49Y3uPrBa1DrCxoXTS1ImYhu3pTIzGZr8meCGsCn2xIU2Z1IBqODkKPxzDwUP2ahi9sa2nvULizxbxR%2Ffcefn58CrNU0vyskF7EcttH3gbm9nThDieRN%2B%2BBLFF7UG9Y2igNd0qcqAHqUUuQJCobJVME4DBDeA3NvQIXcCm8dl9WBgDk9k%2B0TUPtK2%2BwbgEEH0kt3VN%2B6xieAg&X-Amz-Signature=e233661969f15f9e45c255081d5e44f61fb5c1071a5bf8fcff4f20e792e4e2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF7XQDG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa1Mec9TeX5Gn%2BUIxZO8%2BkN4e%2Fra1Z%2B7Jd2BsM2Tl8TwIhAKX7wr81tbJaTjbHWtkr3Db0JA%2FiZdroTFdG5ijHKD5WKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJ8iY3ekdmAYpIoEq3APalQqw1c9W0FAIgQnr%2FowxCZgXKbnb0KkcLYg8N%2FjoBTLPkMjSxRP5KECcA%2FNRw6Dtas03NhxygaaKwsB1CGhX7OnBMvvp6L3hPwn2I4PS2V9cOk7O11mYZHnSRhQWv7tbgl%2FbIICWCYSIoJ5AWlZReKFZaBls%2Fhz41IgcuSUfFHvF7%2FiLbs2ho8Nb%2BLWp97m3ZcPXV3c9Pseb%2F8S8orAAlZhimD13%2FFTWQiG4dA06G4X24R3vRBvAqZljRWUe1Ogm4wNCHbUXx0i1BU8gHDNOoeA9Te6AKGyjCiAy842aj6KWptXNu%2BDk8jTbg6U9idcGKkBxjYVXnJdqeeeC2wSyd2cszPBHBrFkPMs7f%2BqcCNw7Z87zFRl%2FJPbQ1IisAilZBc5ajV%2BLAZaCYYIuZgXaAc4aYF%2BnKeRmiXC2qZJlZ0MrEAwlRiEYJHdMwm1qmNWyVon2zjlhx3VfE4mc1yQ9eWUDJdmXf74eQrIo7cm2f6X0EurK2eDzRonTCaoijX26RmZAatt%2BIZaoyq%2F6VerlEu4FWlFleS2o0Jy4KAyQFNXNkp7ylpR4P5bmqFPDp4z8TCglWf%2FxwMVUtOXu52RG6vY5GYam1EBZOGH0zf3v489LTes%2Fvu3ctKSYSzDGk5XDBjqkAXB1qysw8MZ1ar%2F49Y3uPrBa1DrCxoXTS1ImYhu3pTIzGZr8meCGsCn2xIU2Z1IBqODkKPxzDwUP2ahi9sa2nvULizxbxR%2Ffcefn58CrNU0vyskF7EcttH3gbm9nThDieRN%2B%2BBLFF7UG9Y2igNd0qcqAHqUUuQJCobJVME4DBDeA3NvQIXcCm8dl9WBgDk9k%2B0TUPtK2%2BwbgEEH0kt3VN%2B6xieAg&X-Amz-Signature=2335ee14ece01d0bbc2c04f8ab71ea0df888a74fd4c697a51c12849ec4f85c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIF7XQDG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa1Mec9TeX5Gn%2BUIxZO8%2BkN4e%2Fra1Z%2B7Jd2BsM2Tl8TwIhAKX7wr81tbJaTjbHWtkr3Db0JA%2FiZdroTFdG5ijHKD5WKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYJ8iY3ekdmAYpIoEq3APalQqw1c9W0FAIgQnr%2FowxCZgXKbnb0KkcLYg8N%2FjoBTLPkMjSxRP5KECcA%2FNRw6Dtas03NhxygaaKwsB1CGhX7OnBMvvp6L3hPwn2I4PS2V9cOk7O11mYZHnSRhQWv7tbgl%2FbIICWCYSIoJ5AWlZReKFZaBls%2Fhz41IgcuSUfFHvF7%2FiLbs2ho8Nb%2BLWp97m3ZcPXV3c9Pseb%2F8S8orAAlZhimD13%2FFTWQiG4dA06G4X24R3vRBvAqZljRWUe1Ogm4wNCHbUXx0i1BU8gHDNOoeA9Te6AKGyjCiAy842aj6KWptXNu%2BDk8jTbg6U9idcGKkBxjYVXnJdqeeeC2wSyd2cszPBHBrFkPMs7f%2BqcCNw7Z87zFRl%2FJPbQ1IisAilZBc5ajV%2BLAZaCYYIuZgXaAc4aYF%2BnKeRmiXC2qZJlZ0MrEAwlRiEYJHdMwm1qmNWyVon2zjlhx3VfE4mc1yQ9eWUDJdmXf74eQrIo7cm2f6X0EurK2eDzRonTCaoijX26RmZAatt%2BIZaoyq%2F6VerlEu4FWlFleS2o0Jy4KAyQFNXNkp7ylpR4P5bmqFPDp4z8TCglWf%2FxwMVUtOXu52RG6vY5GYam1EBZOGH0zf3v489LTes%2Fvu3ctKSYSzDGk5XDBjqkAXB1qysw8MZ1ar%2F49Y3uPrBa1DrCxoXTS1ImYhu3pTIzGZr8meCGsCn2xIU2Z1IBqODkKPxzDwUP2ahi9sa2nvULizxbxR%2Ffcefn58CrNU0vyskF7EcttH3gbm9nThDieRN%2B%2BBLFF7UG9Y2igNd0qcqAHqUUuQJCobJVME4DBDeA3NvQIXcCm8dl9WBgDk9k%2B0TUPtK2%2BwbgEEH0kt3VN%2B6xieAg&X-Amz-Signature=7dfbc5fc48283e6ba086db3e120dd2379756925825164be224a385a22b4a1235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
