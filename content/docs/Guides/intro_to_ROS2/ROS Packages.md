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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VZTPTD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIACzmB1jkOWnYjFZuSx3BE0kkqMCVghb6wAuVYSR767gAiEA3z77bGMsPBSCxn3BsM4gRaQr%2BxuZkOBtvzz3ptaOQ7MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRBKN1a9IDqyhKdircAw2z%2F642WbpO9%2BpigFhluwBH5REXZy%2FhoNoMbU9q5mSUZNl5htosf%2B8vJh7h2EIPJgLYSceHD71njr%2FNczX8IimYZwJH9B6lIXebuIEloMgfTaC2FFUgPsh6OjpR4QsjxIRYBTplIEtapRnNQxfEblGy23bBTpIsokTm4ahrlNhXbSRcwUEIzlUKcJZy0%2FAR07yuZbmh0fBMVCIg7FOne%2BMX%2BA3MAoJIxGBDcfPjFB2XOO%2BS3JNwZkcE6Unu9pLWxQh5t8Ua%2BNef%2FD9Hi2FJBTyUpA9haKWuNy7oG5F6iGrSmibGhW7uH3lWisczqhXa9w%2BX5QH08RjlB133JTB13B0SzGrFL%2B%2FMOJLZttXS8Y1iuiuIIqS1zJsB9LzBh%2FSP7Gn5h8%2FTGzc5DxBstKNF0tC229SvxMyPODYuoAaQuyIzxw8uSAKRK%2B89oXuoH4ZEwhU%2FMng0Nzuc6unhCKdVPXFn1XNLizIomLYaxdC77GF6ay7M8gGCTm%2FkBUNITRq%2BhXFPBq%2FRwIT6T2O6jSA439Y%2FSouWPVkDQRYl8eCJ9T6xj7mXhbLBBQnonodFiktazS5LN5S8%2Fi4tQu%2FWcE%2FqjFwYtGyhKNrJqR9K83kMvrLUmkYoQzX%2FPOHCpNDEMNuTusEGOqUBl9KRDlMl5VQ6azCYw8%2Feou3jCP6mz4WnH1Xe82EvKU3E5ZY0HT97vDYEUbgRClNuxSFHoS1SZl9R5NvANF0B%2BjhD8KxHvvWwJhHlaEjKGxSMFdWnjTWk4EkkfBdYU5P8UwCZGXW69tCQDJYpWVIt1yiTmXcCgVNKb7wDlBmCMkAdKYSUfyTVk5CuDhN%2BGrqYa5CTrfo5SglzpvdiBhnpzEgyIxcM&X-Amz-Signature=9f76d37fd2a97e6ff67bc4a6ca22de3b1d05e40b6adc9091af8ce6495beb7a17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VZTPTD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIACzmB1jkOWnYjFZuSx3BE0kkqMCVghb6wAuVYSR767gAiEA3z77bGMsPBSCxn3BsM4gRaQr%2BxuZkOBtvzz3ptaOQ7MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRBKN1a9IDqyhKdircAw2z%2F642WbpO9%2BpigFhluwBH5REXZy%2FhoNoMbU9q5mSUZNl5htosf%2B8vJh7h2EIPJgLYSceHD71njr%2FNczX8IimYZwJH9B6lIXebuIEloMgfTaC2FFUgPsh6OjpR4QsjxIRYBTplIEtapRnNQxfEblGy23bBTpIsokTm4ahrlNhXbSRcwUEIzlUKcJZy0%2FAR07yuZbmh0fBMVCIg7FOne%2BMX%2BA3MAoJIxGBDcfPjFB2XOO%2BS3JNwZkcE6Unu9pLWxQh5t8Ua%2BNef%2FD9Hi2FJBTyUpA9haKWuNy7oG5F6iGrSmibGhW7uH3lWisczqhXa9w%2BX5QH08RjlB133JTB13B0SzGrFL%2B%2FMOJLZttXS8Y1iuiuIIqS1zJsB9LzBh%2FSP7Gn5h8%2FTGzc5DxBstKNF0tC229SvxMyPODYuoAaQuyIzxw8uSAKRK%2B89oXuoH4ZEwhU%2FMng0Nzuc6unhCKdVPXFn1XNLizIomLYaxdC77GF6ay7M8gGCTm%2FkBUNITRq%2BhXFPBq%2FRwIT6T2O6jSA439Y%2FSouWPVkDQRYl8eCJ9T6xj7mXhbLBBQnonodFiktazS5LN5S8%2Fi4tQu%2FWcE%2FqjFwYtGyhKNrJqR9K83kMvrLUmkYoQzX%2FPOHCpNDEMNuTusEGOqUBl9KRDlMl5VQ6azCYw8%2Feou3jCP6mz4WnH1Xe82EvKU3E5ZY0HT97vDYEUbgRClNuxSFHoS1SZl9R5NvANF0B%2BjhD8KxHvvWwJhHlaEjKGxSMFdWnjTWk4EkkfBdYU5P8UwCZGXW69tCQDJYpWVIt1yiTmXcCgVNKb7wDlBmCMkAdKYSUfyTVk5CuDhN%2BGrqYa5CTrfo5SglzpvdiBhnpzEgyIxcM&X-Amz-Signature=e0c42bd1dd86b5cfa2613a29c27179ab2f8363b34eadf7d757a7e771b75b945b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VZTPTD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIACzmB1jkOWnYjFZuSx3BE0kkqMCVghb6wAuVYSR767gAiEA3z77bGMsPBSCxn3BsM4gRaQr%2BxuZkOBtvzz3ptaOQ7MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRBKN1a9IDqyhKdircAw2z%2F642WbpO9%2BpigFhluwBH5REXZy%2FhoNoMbU9q5mSUZNl5htosf%2B8vJh7h2EIPJgLYSceHD71njr%2FNczX8IimYZwJH9B6lIXebuIEloMgfTaC2FFUgPsh6OjpR4QsjxIRYBTplIEtapRnNQxfEblGy23bBTpIsokTm4ahrlNhXbSRcwUEIzlUKcJZy0%2FAR07yuZbmh0fBMVCIg7FOne%2BMX%2BA3MAoJIxGBDcfPjFB2XOO%2BS3JNwZkcE6Unu9pLWxQh5t8Ua%2BNef%2FD9Hi2FJBTyUpA9haKWuNy7oG5F6iGrSmibGhW7uH3lWisczqhXa9w%2BX5QH08RjlB133JTB13B0SzGrFL%2B%2FMOJLZttXS8Y1iuiuIIqS1zJsB9LzBh%2FSP7Gn5h8%2FTGzc5DxBstKNF0tC229SvxMyPODYuoAaQuyIzxw8uSAKRK%2B89oXuoH4ZEwhU%2FMng0Nzuc6unhCKdVPXFn1XNLizIomLYaxdC77GF6ay7M8gGCTm%2FkBUNITRq%2BhXFPBq%2FRwIT6T2O6jSA439Y%2FSouWPVkDQRYl8eCJ9T6xj7mXhbLBBQnonodFiktazS5LN5S8%2Fi4tQu%2FWcE%2FqjFwYtGyhKNrJqR9K83kMvrLUmkYoQzX%2FPOHCpNDEMNuTusEGOqUBl9KRDlMl5VQ6azCYw8%2Feou3jCP6mz4WnH1Xe82EvKU3E5ZY0HT97vDYEUbgRClNuxSFHoS1SZl9R5NvANF0B%2BjhD8KxHvvWwJhHlaEjKGxSMFdWnjTWk4EkkfBdYU5P8UwCZGXW69tCQDJYpWVIt1yiTmXcCgVNKb7wDlBmCMkAdKYSUfyTVk5CuDhN%2BGrqYa5CTrfo5SglzpvdiBhnpzEgyIxcM&X-Amz-Signature=9918c96aee71eb08933268bfaac1dd0370d5e4cbe0fbd23224dc0f3bf4960cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VZTPTD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIACzmB1jkOWnYjFZuSx3BE0kkqMCVghb6wAuVYSR767gAiEA3z77bGMsPBSCxn3BsM4gRaQr%2BxuZkOBtvzz3ptaOQ7MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRBKN1a9IDqyhKdircAw2z%2F642WbpO9%2BpigFhluwBH5REXZy%2FhoNoMbU9q5mSUZNl5htosf%2B8vJh7h2EIPJgLYSceHD71njr%2FNczX8IimYZwJH9B6lIXebuIEloMgfTaC2FFUgPsh6OjpR4QsjxIRYBTplIEtapRnNQxfEblGy23bBTpIsokTm4ahrlNhXbSRcwUEIzlUKcJZy0%2FAR07yuZbmh0fBMVCIg7FOne%2BMX%2BA3MAoJIxGBDcfPjFB2XOO%2BS3JNwZkcE6Unu9pLWxQh5t8Ua%2BNef%2FD9Hi2FJBTyUpA9haKWuNy7oG5F6iGrSmibGhW7uH3lWisczqhXa9w%2BX5QH08RjlB133JTB13B0SzGrFL%2B%2FMOJLZttXS8Y1iuiuIIqS1zJsB9LzBh%2FSP7Gn5h8%2FTGzc5DxBstKNF0tC229SvxMyPODYuoAaQuyIzxw8uSAKRK%2B89oXuoH4ZEwhU%2FMng0Nzuc6unhCKdVPXFn1XNLizIomLYaxdC77GF6ay7M8gGCTm%2FkBUNITRq%2BhXFPBq%2FRwIT6T2O6jSA439Y%2FSouWPVkDQRYl8eCJ9T6xj7mXhbLBBQnonodFiktazS5LN5S8%2Fi4tQu%2FWcE%2FqjFwYtGyhKNrJqR9K83kMvrLUmkYoQzX%2FPOHCpNDEMNuTusEGOqUBl9KRDlMl5VQ6azCYw8%2Feou3jCP6mz4WnH1Xe82EvKU3E5ZY0HT97vDYEUbgRClNuxSFHoS1SZl9R5NvANF0B%2BjhD8KxHvvWwJhHlaEjKGxSMFdWnjTWk4EkkfBdYU5P8UwCZGXW69tCQDJYpWVIt1yiTmXcCgVNKb7wDlBmCMkAdKYSUfyTVk5CuDhN%2BGrqYa5CTrfo5SglzpvdiBhnpzEgyIxcM&X-Amz-Signature=dfa20a91f4141d958c8d8e438f4e8e844bbb57ad2dd50b3c03bdcf3e668309a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VZTPTD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIACzmB1jkOWnYjFZuSx3BE0kkqMCVghb6wAuVYSR767gAiEA3z77bGMsPBSCxn3BsM4gRaQr%2BxuZkOBtvzz3ptaOQ7MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRBKN1a9IDqyhKdircAw2z%2F642WbpO9%2BpigFhluwBH5REXZy%2FhoNoMbU9q5mSUZNl5htosf%2B8vJh7h2EIPJgLYSceHD71njr%2FNczX8IimYZwJH9B6lIXebuIEloMgfTaC2FFUgPsh6OjpR4QsjxIRYBTplIEtapRnNQxfEblGy23bBTpIsokTm4ahrlNhXbSRcwUEIzlUKcJZy0%2FAR07yuZbmh0fBMVCIg7FOne%2BMX%2BA3MAoJIxGBDcfPjFB2XOO%2BS3JNwZkcE6Unu9pLWxQh5t8Ua%2BNef%2FD9Hi2FJBTyUpA9haKWuNy7oG5F6iGrSmibGhW7uH3lWisczqhXa9w%2BX5QH08RjlB133JTB13B0SzGrFL%2B%2FMOJLZttXS8Y1iuiuIIqS1zJsB9LzBh%2FSP7Gn5h8%2FTGzc5DxBstKNF0tC229SvxMyPODYuoAaQuyIzxw8uSAKRK%2B89oXuoH4ZEwhU%2FMng0Nzuc6unhCKdVPXFn1XNLizIomLYaxdC77GF6ay7M8gGCTm%2FkBUNITRq%2BhXFPBq%2FRwIT6T2O6jSA439Y%2FSouWPVkDQRYl8eCJ9T6xj7mXhbLBBQnonodFiktazS5LN5S8%2Fi4tQu%2FWcE%2FqjFwYtGyhKNrJqR9K83kMvrLUmkYoQzX%2FPOHCpNDEMNuTusEGOqUBl9KRDlMl5VQ6azCYw8%2Feou3jCP6mz4WnH1Xe82EvKU3E5ZY0HT97vDYEUbgRClNuxSFHoS1SZl9R5NvANF0B%2BjhD8KxHvvWwJhHlaEjKGxSMFdWnjTWk4EkkfBdYU5P8UwCZGXW69tCQDJYpWVIt1yiTmXcCgVNKb7wDlBmCMkAdKYSUfyTVk5CuDhN%2BGrqYa5CTrfo5SglzpvdiBhnpzEgyIxcM&X-Amz-Signature=57853ef6375bc1000aa97b73d1e0a282a8de8f540f21fb2620666fe03d4db8f3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VZTPTD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIACzmB1jkOWnYjFZuSx3BE0kkqMCVghb6wAuVYSR767gAiEA3z77bGMsPBSCxn3BsM4gRaQr%2BxuZkOBtvzz3ptaOQ7MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRBKN1a9IDqyhKdircAw2z%2F642WbpO9%2BpigFhluwBH5REXZy%2FhoNoMbU9q5mSUZNl5htosf%2B8vJh7h2EIPJgLYSceHD71njr%2FNczX8IimYZwJH9B6lIXebuIEloMgfTaC2FFUgPsh6OjpR4QsjxIRYBTplIEtapRnNQxfEblGy23bBTpIsokTm4ahrlNhXbSRcwUEIzlUKcJZy0%2FAR07yuZbmh0fBMVCIg7FOne%2BMX%2BA3MAoJIxGBDcfPjFB2XOO%2BS3JNwZkcE6Unu9pLWxQh5t8Ua%2BNef%2FD9Hi2FJBTyUpA9haKWuNy7oG5F6iGrSmibGhW7uH3lWisczqhXa9w%2BX5QH08RjlB133JTB13B0SzGrFL%2B%2FMOJLZttXS8Y1iuiuIIqS1zJsB9LzBh%2FSP7Gn5h8%2FTGzc5DxBstKNF0tC229SvxMyPODYuoAaQuyIzxw8uSAKRK%2B89oXuoH4ZEwhU%2FMng0Nzuc6unhCKdVPXFn1XNLizIomLYaxdC77GF6ay7M8gGCTm%2FkBUNITRq%2BhXFPBq%2FRwIT6T2O6jSA439Y%2FSouWPVkDQRYl8eCJ9T6xj7mXhbLBBQnonodFiktazS5LN5S8%2Fi4tQu%2FWcE%2FqjFwYtGyhKNrJqR9K83kMvrLUmkYoQzX%2FPOHCpNDEMNuTusEGOqUBl9KRDlMl5VQ6azCYw8%2Feou3jCP6mz4WnH1Xe82EvKU3E5ZY0HT97vDYEUbgRClNuxSFHoS1SZl9R5NvANF0B%2BjhD8KxHvvWwJhHlaEjKGxSMFdWnjTWk4EkkfBdYU5P8UwCZGXW69tCQDJYpWVIt1yiTmXcCgVNKb7wDlBmCMkAdKYSUfyTVk5CuDhN%2BGrqYa5CTrfo5SglzpvdiBhnpzEgyIxcM&X-Amz-Signature=5e4ce5ce2a84159d21977c1001e70daf743b647cc9f02bb0aa33463ca0389225&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VZTPTD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIACzmB1jkOWnYjFZuSx3BE0kkqMCVghb6wAuVYSR767gAiEA3z77bGMsPBSCxn3BsM4gRaQr%2BxuZkOBtvzz3ptaOQ7MqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRBKN1a9IDqyhKdircAw2z%2F642WbpO9%2BpigFhluwBH5REXZy%2FhoNoMbU9q5mSUZNl5htosf%2B8vJh7h2EIPJgLYSceHD71njr%2FNczX8IimYZwJH9B6lIXebuIEloMgfTaC2FFUgPsh6OjpR4QsjxIRYBTplIEtapRnNQxfEblGy23bBTpIsokTm4ahrlNhXbSRcwUEIzlUKcJZy0%2FAR07yuZbmh0fBMVCIg7FOne%2BMX%2BA3MAoJIxGBDcfPjFB2XOO%2BS3JNwZkcE6Unu9pLWxQh5t8Ua%2BNef%2FD9Hi2FJBTyUpA9haKWuNy7oG5F6iGrSmibGhW7uH3lWisczqhXa9w%2BX5QH08RjlB133JTB13B0SzGrFL%2B%2FMOJLZttXS8Y1iuiuIIqS1zJsB9LzBh%2FSP7Gn5h8%2FTGzc5DxBstKNF0tC229SvxMyPODYuoAaQuyIzxw8uSAKRK%2B89oXuoH4ZEwhU%2FMng0Nzuc6unhCKdVPXFn1XNLizIomLYaxdC77GF6ay7M8gGCTm%2FkBUNITRq%2BhXFPBq%2FRwIT6T2O6jSA439Y%2FSouWPVkDQRYl8eCJ9T6xj7mXhbLBBQnonodFiktazS5LN5S8%2Fi4tQu%2FWcE%2FqjFwYtGyhKNrJqR9K83kMvrLUmkYoQzX%2FPOHCpNDEMNuTusEGOqUBl9KRDlMl5VQ6azCYw8%2Feou3jCP6mz4WnH1Xe82EvKU3E5ZY0HT97vDYEUbgRClNuxSFHoS1SZl9R5NvANF0B%2BjhD8KxHvvWwJhHlaEjKGxSMFdWnjTWk4EkkfBdYU5P8UwCZGXW69tCQDJYpWVIt1yiTmXcCgVNKb7wDlBmCMkAdKYSUfyTVk5CuDhN%2BGrqYa5CTrfo5SglzpvdiBhnpzEgyIxcM&X-Amz-Signature=c9f493bd37b54c0fff59ef42d6ef486d3ce2322026783a75a8755ca5e44a7cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
