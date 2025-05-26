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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDTIY46%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAmyowgEI9uKkC8zy7uEFjXDuA2ZGxXPAy4wjnBbTNHGAiAzNPRw25Q0jeZqxXy01BUNmefVWvqEjui5QzxrJpMTICr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM4nopDItUmx81IxsgKtwD7YuIJKHlTRbwATqjheXRWrRGjC7MRnemZGlPN%2B2JUyZZ2qPvQ1sJq3Zqjs6T1RreIQ5RGenkpDyt07c6cbi47XpZd5AwijEcLgGcupMajJ75QESuEVJuk8L5TyiOaroEjA7nAmRknlkNSKk7oyiiBSancGhwS3RECB%2FgdglQ5tAVulWk6uWZxfMvv%2FACrl7O4NGDZks0725dz4M%2FIsDnXN5cxm4oNXZW8xhCKPn%2BzV%2BdmpkfZNbw5dRZ3RTwor2CPjPeMPymEXLCeD9X9T7%2FVrwLWFFHaY%2BKez6Hmi8LVxB0%2B3qQrJwrekiUlnPuWIb6MEJBbfsLz4oxDBJ78gUXbtR9V%2BIhiwj1egEH5LMQNBxvpVzvXXUTClajOAbumf74%2BPPPOxylFCcmA9dYF7VUPXNu3S6vStiB5HcxVFg8foeUzQ6g2gYXdJKHqfrAvlDwdRh1dumUEwNZUpZlRrEgj2QreS%2F7EA%2BC60VMeoBcGkXMF0QiBUJVeJav46XQWNG3%2F%2F%2FTFpDer%2FQ7wjhHW2DUPgtJlLcBfj%2FYW08VcV2ahcAFzE%2B8qhHYaUH5QDiMT2lvq2rj3H%2Bho4jrgnwTUWwbkX3X4vllrMS4OxYhpKLLS6WJmt0VeViBlvoHHL8wq9fQwQY6pgE%2BX9Jr%2Bh99kwzX4n0mQpXZdyCyodX%2Fi0kPAxHUmTQr5KNqcyaUQJQhdOzsORGa%2B0rNyDXP4YpWa%2Bi5fGLCS726HP75ODtWdnC9A48mYuaD6MRlsXejid6szAerxigeS0Gb2lR7p3QmRuHw%2B5pno5xDMxOE%2B5SStqQTJKKhqGJczYU83V79R3PA8JtsOg%2FRICyf2WXgAzqwf3yufqZ9Wi6jfye8HXx4&X-Amz-Signature=b8e25b20d574feedc529481f0d9cf4faa1ce99a2f8781d17581c11bdf27750a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDTIY46%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAmyowgEI9uKkC8zy7uEFjXDuA2ZGxXPAy4wjnBbTNHGAiAzNPRw25Q0jeZqxXy01BUNmefVWvqEjui5QzxrJpMTICr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM4nopDItUmx81IxsgKtwD7YuIJKHlTRbwATqjheXRWrRGjC7MRnemZGlPN%2B2JUyZZ2qPvQ1sJq3Zqjs6T1RreIQ5RGenkpDyt07c6cbi47XpZd5AwijEcLgGcupMajJ75QESuEVJuk8L5TyiOaroEjA7nAmRknlkNSKk7oyiiBSancGhwS3RECB%2FgdglQ5tAVulWk6uWZxfMvv%2FACrl7O4NGDZks0725dz4M%2FIsDnXN5cxm4oNXZW8xhCKPn%2BzV%2BdmpkfZNbw5dRZ3RTwor2CPjPeMPymEXLCeD9X9T7%2FVrwLWFFHaY%2BKez6Hmi8LVxB0%2B3qQrJwrekiUlnPuWIb6MEJBbfsLz4oxDBJ78gUXbtR9V%2BIhiwj1egEH5LMQNBxvpVzvXXUTClajOAbumf74%2BPPPOxylFCcmA9dYF7VUPXNu3S6vStiB5HcxVFg8foeUzQ6g2gYXdJKHqfrAvlDwdRh1dumUEwNZUpZlRrEgj2QreS%2F7EA%2BC60VMeoBcGkXMF0QiBUJVeJav46XQWNG3%2F%2F%2FTFpDer%2FQ7wjhHW2DUPgtJlLcBfj%2FYW08VcV2ahcAFzE%2B8qhHYaUH5QDiMT2lvq2rj3H%2Bho4jrgnwTUWwbkX3X4vllrMS4OxYhpKLLS6WJmt0VeViBlvoHHL8wq9fQwQY6pgE%2BX9Jr%2Bh99kwzX4n0mQpXZdyCyodX%2Fi0kPAxHUmTQr5KNqcyaUQJQhdOzsORGa%2B0rNyDXP4YpWa%2Bi5fGLCS726HP75ODtWdnC9A48mYuaD6MRlsXejid6szAerxigeS0Gb2lR7p3QmRuHw%2B5pno5xDMxOE%2B5SStqQTJKKhqGJczYU83V79R3PA8JtsOg%2FRICyf2WXgAzqwf3yufqZ9Wi6jfye8HXx4&X-Amz-Signature=cae62f4867b1566b443168ac2eb4b46743999a3f228561589ef7aea24a78a288&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDTIY46%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAmyowgEI9uKkC8zy7uEFjXDuA2ZGxXPAy4wjnBbTNHGAiAzNPRw25Q0jeZqxXy01BUNmefVWvqEjui5QzxrJpMTICr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM4nopDItUmx81IxsgKtwD7YuIJKHlTRbwATqjheXRWrRGjC7MRnemZGlPN%2B2JUyZZ2qPvQ1sJq3Zqjs6T1RreIQ5RGenkpDyt07c6cbi47XpZd5AwijEcLgGcupMajJ75QESuEVJuk8L5TyiOaroEjA7nAmRknlkNSKk7oyiiBSancGhwS3RECB%2FgdglQ5tAVulWk6uWZxfMvv%2FACrl7O4NGDZks0725dz4M%2FIsDnXN5cxm4oNXZW8xhCKPn%2BzV%2BdmpkfZNbw5dRZ3RTwor2CPjPeMPymEXLCeD9X9T7%2FVrwLWFFHaY%2BKez6Hmi8LVxB0%2B3qQrJwrekiUlnPuWIb6MEJBbfsLz4oxDBJ78gUXbtR9V%2BIhiwj1egEH5LMQNBxvpVzvXXUTClajOAbumf74%2BPPPOxylFCcmA9dYF7VUPXNu3S6vStiB5HcxVFg8foeUzQ6g2gYXdJKHqfrAvlDwdRh1dumUEwNZUpZlRrEgj2QreS%2F7EA%2BC60VMeoBcGkXMF0QiBUJVeJav46XQWNG3%2F%2F%2FTFpDer%2FQ7wjhHW2DUPgtJlLcBfj%2FYW08VcV2ahcAFzE%2B8qhHYaUH5QDiMT2lvq2rj3H%2Bho4jrgnwTUWwbkX3X4vllrMS4OxYhpKLLS6WJmt0VeViBlvoHHL8wq9fQwQY6pgE%2BX9Jr%2Bh99kwzX4n0mQpXZdyCyodX%2Fi0kPAxHUmTQr5KNqcyaUQJQhdOzsORGa%2B0rNyDXP4YpWa%2Bi5fGLCS726HP75ODtWdnC9A48mYuaD6MRlsXejid6szAerxigeS0Gb2lR7p3QmRuHw%2B5pno5xDMxOE%2B5SStqQTJKKhqGJczYU83V79R3PA8JtsOg%2FRICyf2WXgAzqwf3yufqZ9Wi6jfye8HXx4&X-Amz-Signature=5046c0d81c62e56f2a47f09fce5ff64d606c1f315a6d75a9cfeb317e69e186f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDTIY46%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAmyowgEI9uKkC8zy7uEFjXDuA2ZGxXPAy4wjnBbTNHGAiAzNPRw25Q0jeZqxXy01BUNmefVWvqEjui5QzxrJpMTICr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM4nopDItUmx81IxsgKtwD7YuIJKHlTRbwATqjheXRWrRGjC7MRnemZGlPN%2B2JUyZZ2qPvQ1sJq3Zqjs6T1RreIQ5RGenkpDyt07c6cbi47XpZd5AwijEcLgGcupMajJ75QESuEVJuk8L5TyiOaroEjA7nAmRknlkNSKk7oyiiBSancGhwS3RECB%2FgdglQ5tAVulWk6uWZxfMvv%2FACrl7O4NGDZks0725dz4M%2FIsDnXN5cxm4oNXZW8xhCKPn%2BzV%2BdmpkfZNbw5dRZ3RTwor2CPjPeMPymEXLCeD9X9T7%2FVrwLWFFHaY%2BKez6Hmi8LVxB0%2B3qQrJwrekiUlnPuWIb6MEJBbfsLz4oxDBJ78gUXbtR9V%2BIhiwj1egEH5LMQNBxvpVzvXXUTClajOAbumf74%2BPPPOxylFCcmA9dYF7VUPXNu3S6vStiB5HcxVFg8foeUzQ6g2gYXdJKHqfrAvlDwdRh1dumUEwNZUpZlRrEgj2QreS%2F7EA%2BC60VMeoBcGkXMF0QiBUJVeJav46XQWNG3%2F%2F%2FTFpDer%2FQ7wjhHW2DUPgtJlLcBfj%2FYW08VcV2ahcAFzE%2B8qhHYaUH5QDiMT2lvq2rj3H%2Bho4jrgnwTUWwbkX3X4vllrMS4OxYhpKLLS6WJmt0VeViBlvoHHL8wq9fQwQY6pgE%2BX9Jr%2Bh99kwzX4n0mQpXZdyCyodX%2Fi0kPAxHUmTQr5KNqcyaUQJQhdOzsORGa%2B0rNyDXP4YpWa%2Bi5fGLCS726HP75ODtWdnC9A48mYuaD6MRlsXejid6szAerxigeS0Gb2lR7p3QmRuHw%2B5pno5xDMxOE%2B5SStqQTJKKhqGJczYU83V79R3PA8JtsOg%2FRICyf2WXgAzqwf3yufqZ9Wi6jfye8HXx4&X-Amz-Signature=7071ab0d59bd8990cfabffe26206f431fb14aaa6bfcb597e23822e10e13226f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDTIY46%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAmyowgEI9uKkC8zy7uEFjXDuA2ZGxXPAy4wjnBbTNHGAiAzNPRw25Q0jeZqxXy01BUNmefVWvqEjui5QzxrJpMTICr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM4nopDItUmx81IxsgKtwD7YuIJKHlTRbwATqjheXRWrRGjC7MRnemZGlPN%2B2JUyZZ2qPvQ1sJq3Zqjs6T1RreIQ5RGenkpDyt07c6cbi47XpZd5AwijEcLgGcupMajJ75QESuEVJuk8L5TyiOaroEjA7nAmRknlkNSKk7oyiiBSancGhwS3RECB%2FgdglQ5tAVulWk6uWZxfMvv%2FACrl7O4NGDZks0725dz4M%2FIsDnXN5cxm4oNXZW8xhCKPn%2BzV%2BdmpkfZNbw5dRZ3RTwor2CPjPeMPymEXLCeD9X9T7%2FVrwLWFFHaY%2BKez6Hmi8LVxB0%2B3qQrJwrekiUlnPuWIb6MEJBbfsLz4oxDBJ78gUXbtR9V%2BIhiwj1egEH5LMQNBxvpVzvXXUTClajOAbumf74%2BPPPOxylFCcmA9dYF7VUPXNu3S6vStiB5HcxVFg8foeUzQ6g2gYXdJKHqfrAvlDwdRh1dumUEwNZUpZlRrEgj2QreS%2F7EA%2BC60VMeoBcGkXMF0QiBUJVeJav46XQWNG3%2F%2F%2FTFpDer%2FQ7wjhHW2DUPgtJlLcBfj%2FYW08VcV2ahcAFzE%2B8qhHYaUH5QDiMT2lvq2rj3H%2Bho4jrgnwTUWwbkX3X4vllrMS4OxYhpKLLS6WJmt0VeViBlvoHHL8wq9fQwQY6pgE%2BX9Jr%2Bh99kwzX4n0mQpXZdyCyodX%2Fi0kPAxHUmTQr5KNqcyaUQJQhdOzsORGa%2B0rNyDXP4YpWa%2Bi5fGLCS726HP75ODtWdnC9A48mYuaD6MRlsXejid6szAerxigeS0Gb2lR7p3QmRuHw%2B5pno5xDMxOE%2B5SStqQTJKKhqGJczYU83V79R3PA8JtsOg%2FRICyf2WXgAzqwf3yufqZ9Wi6jfye8HXx4&X-Amz-Signature=871e82412415ef6165f68808fff7158ff3d89072af1872c99667627b17097e35&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDTIY46%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAmyowgEI9uKkC8zy7uEFjXDuA2ZGxXPAy4wjnBbTNHGAiAzNPRw25Q0jeZqxXy01BUNmefVWvqEjui5QzxrJpMTICr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM4nopDItUmx81IxsgKtwD7YuIJKHlTRbwATqjheXRWrRGjC7MRnemZGlPN%2B2JUyZZ2qPvQ1sJq3Zqjs6T1RreIQ5RGenkpDyt07c6cbi47XpZd5AwijEcLgGcupMajJ75QESuEVJuk8L5TyiOaroEjA7nAmRknlkNSKk7oyiiBSancGhwS3RECB%2FgdglQ5tAVulWk6uWZxfMvv%2FACrl7O4NGDZks0725dz4M%2FIsDnXN5cxm4oNXZW8xhCKPn%2BzV%2BdmpkfZNbw5dRZ3RTwor2CPjPeMPymEXLCeD9X9T7%2FVrwLWFFHaY%2BKez6Hmi8LVxB0%2B3qQrJwrekiUlnPuWIb6MEJBbfsLz4oxDBJ78gUXbtR9V%2BIhiwj1egEH5LMQNBxvpVzvXXUTClajOAbumf74%2BPPPOxylFCcmA9dYF7VUPXNu3S6vStiB5HcxVFg8foeUzQ6g2gYXdJKHqfrAvlDwdRh1dumUEwNZUpZlRrEgj2QreS%2F7EA%2BC60VMeoBcGkXMF0QiBUJVeJav46XQWNG3%2F%2F%2FTFpDer%2FQ7wjhHW2DUPgtJlLcBfj%2FYW08VcV2ahcAFzE%2B8qhHYaUH5QDiMT2lvq2rj3H%2Bho4jrgnwTUWwbkX3X4vllrMS4OxYhpKLLS6WJmt0VeViBlvoHHL8wq9fQwQY6pgE%2BX9Jr%2Bh99kwzX4n0mQpXZdyCyodX%2Fi0kPAxHUmTQr5KNqcyaUQJQhdOzsORGa%2B0rNyDXP4YpWa%2Bi5fGLCS726HP75ODtWdnC9A48mYuaD6MRlsXejid6szAerxigeS0Gb2lR7p3QmRuHw%2B5pno5xDMxOE%2B5SStqQTJKKhqGJczYU83V79R3PA8JtsOg%2FRICyf2WXgAzqwf3yufqZ9Wi6jfye8HXx4&X-Amz-Signature=a8d072c687f7c0f9558511de9c8e5186ce272cf4846bbf27013fb386524df894&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDTIY46%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIAmyowgEI9uKkC8zy7uEFjXDuA2ZGxXPAy4wjnBbTNHGAiAzNPRw25Q0jeZqxXy01BUNmefVWvqEjui5QzxrJpMTICr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM4nopDItUmx81IxsgKtwD7YuIJKHlTRbwATqjheXRWrRGjC7MRnemZGlPN%2B2JUyZZ2qPvQ1sJq3Zqjs6T1RreIQ5RGenkpDyt07c6cbi47XpZd5AwijEcLgGcupMajJ75QESuEVJuk8L5TyiOaroEjA7nAmRknlkNSKk7oyiiBSancGhwS3RECB%2FgdglQ5tAVulWk6uWZxfMvv%2FACrl7O4NGDZks0725dz4M%2FIsDnXN5cxm4oNXZW8xhCKPn%2BzV%2BdmpkfZNbw5dRZ3RTwor2CPjPeMPymEXLCeD9X9T7%2FVrwLWFFHaY%2BKez6Hmi8LVxB0%2B3qQrJwrekiUlnPuWIb6MEJBbfsLz4oxDBJ78gUXbtR9V%2BIhiwj1egEH5LMQNBxvpVzvXXUTClajOAbumf74%2BPPPOxylFCcmA9dYF7VUPXNu3S6vStiB5HcxVFg8foeUzQ6g2gYXdJKHqfrAvlDwdRh1dumUEwNZUpZlRrEgj2QreS%2F7EA%2BC60VMeoBcGkXMF0QiBUJVeJav46XQWNG3%2F%2F%2FTFpDer%2FQ7wjhHW2DUPgtJlLcBfj%2FYW08VcV2ahcAFzE%2B8qhHYaUH5QDiMT2lvq2rj3H%2Bho4jrgnwTUWwbkX3X4vllrMS4OxYhpKLLS6WJmt0VeViBlvoHHL8wq9fQwQY6pgE%2BX9Jr%2Bh99kwzX4n0mQpXZdyCyodX%2Fi0kPAxHUmTQr5KNqcyaUQJQhdOzsORGa%2B0rNyDXP4YpWa%2Bi5fGLCS726HP75ODtWdnC9A48mYuaD6MRlsXejid6szAerxigeS0Gb2lR7p3QmRuHw%2B5pno5xDMxOE%2B5SStqQTJKKhqGJczYU83V79R3PA8JtsOg%2FRICyf2WXgAzqwf3yufqZ9Wi6jfye8HXx4&X-Amz-Signature=c2d8293dc68e54c741f2ea71d78cc2f82de070a6c8c6d274a9fbcabd93354feb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
