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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCSN2LM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyz%2BJFdxxhAYSGZqY%2FIE9MAawUPmYb%2Bt%2FxRI%2BAUrbaxQIhAKmycAS7iq%2Bl2FNuGYakXrsfAVfdKy7v2x2kdp4CUhovKv8DCAIQABoMNjM3NDIzMTgzODA1Igzj00j6TTP%2BW%2FJNtL8q3ANu%2Byqzq%2FGFufFgcG8W3cdwdEp3d5wlzEyYgp2xw4bgN8icoaOimnRVyJwOy6GDEDoODi1P3wQYPMH4Fes5sO8ggo0C4bGfelFGYJd9lqsz5qMHDJpFmfTqBF7LYu%2B5gg6QLUABu%2FMSsYbm9oLgMtuIDOvlzRZQZdHWE8s4a%2FfXVeedHoEiIZ7JiGUOwaKKFMNvam845cF4HFiTp1EedMSGGW9SiB2wjJVeMQZpXxEBPI5MmFDWtiBEB8koNCR1eCPIi03T2y6I8isaJFh8HEb4WrCal%2Bgm9Tg0%2FyL%2Bkn6ZsP%2Fvmm83tTRhhYLGL5c%2Bj0kLEHm0i3PBipyUcbK0Qy6DvuGs6IA1armdsI1iKWjA5X5v0yNjGBiAZVQwDu4tctsHVQG2yczeWMZeGOPy1yOSJCR0dYjotyKkYcF%2B0qn760X9Kho5Ls3REYcWCgTARSD8%2FaIaG2cGhEUJF7IQ1KagdWzxRoHUw9jqMy30WmJbA5ZtvP7ZlHyaEGe%2Bfc26h1%2BQY5xflPwCxXEReh8WazIOY5Ooml6dT67PnPmb4LljsIfJGyJF%2F%2BSCXKPBRYok0sqrn14%2FerI%2FK6264ska0uzQUK%2BLG9p5wVWlb336GHsZf6SZ2TsgJyiK%2F28ktjD5pfPQBjqkARiYhNJeDroc8VB%2FfBiToNOiVC3SRUGmZvSgffx%2FyCQ5%2BFhdXv6tPU%2Bn1X9uHaAeZujhTnXLSpZWh%2B%2FiT0%2FdMGm2djipcO0fIo15ZGe1%2FebwqDbFkM0959hp%2BO6R%2BVwGn9AGEZv39vbwdxOcBRD2xYdc1SrSvPBwbeBZG0dlMHMW7Az%2BEhvpmZlQkxAS6vfag%2Bgb1vRe0GH6D4d2BiyDLsWQMiox&X-Amz-Signature=b33b1f1abfad8eb6c461d8c55ab17ab344a3f306fd6683c18014c8b569a6a1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCSN2LM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyz%2BJFdxxhAYSGZqY%2FIE9MAawUPmYb%2Bt%2FxRI%2BAUrbaxQIhAKmycAS7iq%2Bl2FNuGYakXrsfAVfdKy7v2x2kdp4CUhovKv8DCAIQABoMNjM3NDIzMTgzODA1Igzj00j6TTP%2BW%2FJNtL8q3ANu%2Byqzq%2FGFufFgcG8W3cdwdEp3d5wlzEyYgp2xw4bgN8icoaOimnRVyJwOy6GDEDoODi1P3wQYPMH4Fes5sO8ggo0C4bGfelFGYJd9lqsz5qMHDJpFmfTqBF7LYu%2B5gg6QLUABu%2FMSsYbm9oLgMtuIDOvlzRZQZdHWE8s4a%2FfXVeedHoEiIZ7JiGUOwaKKFMNvam845cF4HFiTp1EedMSGGW9SiB2wjJVeMQZpXxEBPI5MmFDWtiBEB8koNCR1eCPIi03T2y6I8isaJFh8HEb4WrCal%2Bgm9Tg0%2FyL%2Bkn6ZsP%2Fvmm83tTRhhYLGL5c%2Bj0kLEHm0i3PBipyUcbK0Qy6DvuGs6IA1armdsI1iKWjA5X5v0yNjGBiAZVQwDu4tctsHVQG2yczeWMZeGOPy1yOSJCR0dYjotyKkYcF%2B0qn760X9Kho5Ls3REYcWCgTARSD8%2FaIaG2cGhEUJF7IQ1KagdWzxRoHUw9jqMy30WmJbA5ZtvP7ZlHyaEGe%2Bfc26h1%2BQY5xflPwCxXEReh8WazIOY5Ooml6dT67PnPmb4LljsIfJGyJF%2F%2BSCXKPBRYok0sqrn14%2FerI%2FK6264ska0uzQUK%2BLG9p5wVWlb336GHsZf6SZ2TsgJyiK%2F28ktjD5pfPQBjqkARiYhNJeDroc8VB%2FfBiToNOiVC3SRUGmZvSgffx%2FyCQ5%2BFhdXv6tPU%2Bn1X9uHaAeZujhTnXLSpZWh%2B%2FiT0%2FdMGm2djipcO0fIo15ZGe1%2FebwqDbFkM0959hp%2BO6R%2BVwGn9AGEZv39vbwdxOcBRD2xYdc1SrSvPBwbeBZG0dlMHMW7Az%2BEhvpmZlQkxAS6vfag%2Bgb1vRe0GH6D4d2BiyDLsWQMiox&X-Amz-Signature=5d9fba0f8adcd7696c81a00aec32b43fd68ecf86a241d050dd69e5c3a3df558a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCSN2LM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyz%2BJFdxxhAYSGZqY%2FIE9MAawUPmYb%2Bt%2FxRI%2BAUrbaxQIhAKmycAS7iq%2Bl2FNuGYakXrsfAVfdKy7v2x2kdp4CUhovKv8DCAIQABoMNjM3NDIzMTgzODA1Igzj00j6TTP%2BW%2FJNtL8q3ANu%2Byqzq%2FGFufFgcG8W3cdwdEp3d5wlzEyYgp2xw4bgN8icoaOimnRVyJwOy6GDEDoODi1P3wQYPMH4Fes5sO8ggo0C4bGfelFGYJd9lqsz5qMHDJpFmfTqBF7LYu%2B5gg6QLUABu%2FMSsYbm9oLgMtuIDOvlzRZQZdHWE8s4a%2FfXVeedHoEiIZ7JiGUOwaKKFMNvam845cF4HFiTp1EedMSGGW9SiB2wjJVeMQZpXxEBPI5MmFDWtiBEB8koNCR1eCPIi03T2y6I8isaJFh8HEb4WrCal%2Bgm9Tg0%2FyL%2Bkn6ZsP%2Fvmm83tTRhhYLGL5c%2Bj0kLEHm0i3PBipyUcbK0Qy6DvuGs6IA1armdsI1iKWjA5X5v0yNjGBiAZVQwDu4tctsHVQG2yczeWMZeGOPy1yOSJCR0dYjotyKkYcF%2B0qn760X9Kho5Ls3REYcWCgTARSD8%2FaIaG2cGhEUJF7IQ1KagdWzxRoHUw9jqMy30WmJbA5ZtvP7ZlHyaEGe%2Bfc26h1%2BQY5xflPwCxXEReh8WazIOY5Ooml6dT67PnPmb4LljsIfJGyJF%2F%2BSCXKPBRYok0sqrn14%2FerI%2FK6264ska0uzQUK%2BLG9p5wVWlb336GHsZf6SZ2TsgJyiK%2F28ktjD5pfPQBjqkARiYhNJeDroc8VB%2FfBiToNOiVC3SRUGmZvSgffx%2FyCQ5%2BFhdXv6tPU%2Bn1X9uHaAeZujhTnXLSpZWh%2B%2FiT0%2FdMGm2djipcO0fIo15ZGe1%2FebwqDbFkM0959hp%2BO6R%2BVwGn9AGEZv39vbwdxOcBRD2xYdc1SrSvPBwbeBZG0dlMHMW7Az%2BEhvpmZlQkxAS6vfag%2Bgb1vRe0GH6D4d2BiyDLsWQMiox&X-Amz-Signature=c4b14f2e6e62cfb581c63b354fe24b73e0e6a047c3d951ce4fca328b96ea66fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCSN2LM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyz%2BJFdxxhAYSGZqY%2FIE9MAawUPmYb%2Bt%2FxRI%2BAUrbaxQIhAKmycAS7iq%2Bl2FNuGYakXrsfAVfdKy7v2x2kdp4CUhovKv8DCAIQABoMNjM3NDIzMTgzODA1Igzj00j6TTP%2BW%2FJNtL8q3ANu%2Byqzq%2FGFufFgcG8W3cdwdEp3d5wlzEyYgp2xw4bgN8icoaOimnRVyJwOy6GDEDoODi1P3wQYPMH4Fes5sO8ggo0C4bGfelFGYJd9lqsz5qMHDJpFmfTqBF7LYu%2B5gg6QLUABu%2FMSsYbm9oLgMtuIDOvlzRZQZdHWE8s4a%2FfXVeedHoEiIZ7JiGUOwaKKFMNvam845cF4HFiTp1EedMSGGW9SiB2wjJVeMQZpXxEBPI5MmFDWtiBEB8koNCR1eCPIi03T2y6I8isaJFh8HEb4WrCal%2Bgm9Tg0%2FyL%2Bkn6ZsP%2Fvmm83tTRhhYLGL5c%2Bj0kLEHm0i3PBipyUcbK0Qy6DvuGs6IA1armdsI1iKWjA5X5v0yNjGBiAZVQwDu4tctsHVQG2yczeWMZeGOPy1yOSJCR0dYjotyKkYcF%2B0qn760X9Kho5Ls3REYcWCgTARSD8%2FaIaG2cGhEUJF7IQ1KagdWzxRoHUw9jqMy30WmJbA5ZtvP7ZlHyaEGe%2Bfc26h1%2BQY5xflPwCxXEReh8WazIOY5Ooml6dT67PnPmb4LljsIfJGyJF%2F%2BSCXKPBRYok0sqrn14%2FerI%2FK6264ska0uzQUK%2BLG9p5wVWlb336GHsZf6SZ2TsgJyiK%2F28ktjD5pfPQBjqkARiYhNJeDroc8VB%2FfBiToNOiVC3SRUGmZvSgffx%2FyCQ5%2BFhdXv6tPU%2Bn1X9uHaAeZujhTnXLSpZWh%2B%2FiT0%2FdMGm2djipcO0fIo15ZGe1%2FebwqDbFkM0959hp%2BO6R%2BVwGn9AGEZv39vbwdxOcBRD2xYdc1SrSvPBwbeBZG0dlMHMW7Az%2BEhvpmZlQkxAS6vfag%2Bgb1vRe0GH6D4d2BiyDLsWQMiox&X-Amz-Signature=9921745be43a3b269baf34b5ec3d83465320e42dfe45158f26e7cf6022afe824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCSN2LM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyz%2BJFdxxhAYSGZqY%2FIE9MAawUPmYb%2Bt%2FxRI%2BAUrbaxQIhAKmycAS7iq%2Bl2FNuGYakXrsfAVfdKy7v2x2kdp4CUhovKv8DCAIQABoMNjM3NDIzMTgzODA1Igzj00j6TTP%2BW%2FJNtL8q3ANu%2Byqzq%2FGFufFgcG8W3cdwdEp3d5wlzEyYgp2xw4bgN8icoaOimnRVyJwOy6GDEDoODi1P3wQYPMH4Fes5sO8ggo0C4bGfelFGYJd9lqsz5qMHDJpFmfTqBF7LYu%2B5gg6QLUABu%2FMSsYbm9oLgMtuIDOvlzRZQZdHWE8s4a%2FfXVeedHoEiIZ7JiGUOwaKKFMNvam845cF4HFiTp1EedMSGGW9SiB2wjJVeMQZpXxEBPI5MmFDWtiBEB8koNCR1eCPIi03T2y6I8isaJFh8HEb4WrCal%2Bgm9Tg0%2FyL%2Bkn6ZsP%2Fvmm83tTRhhYLGL5c%2Bj0kLEHm0i3PBipyUcbK0Qy6DvuGs6IA1armdsI1iKWjA5X5v0yNjGBiAZVQwDu4tctsHVQG2yczeWMZeGOPy1yOSJCR0dYjotyKkYcF%2B0qn760X9Kho5Ls3REYcWCgTARSD8%2FaIaG2cGhEUJF7IQ1KagdWzxRoHUw9jqMy30WmJbA5ZtvP7ZlHyaEGe%2Bfc26h1%2BQY5xflPwCxXEReh8WazIOY5Ooml6dT67PnPmb4LljsIfJGyJF%2F%2BSCXKPBRYok0sqrn14%2FerI%2FK6264ska0uzQUK%2BLG9p5wVWlb336GHsZf6SZ2TsgJyiK%2F28ktjD5pfPQBjqkARiYhNJeDroc8VB%2FfBiToNOiVC3SRUGmZvSgffx%2FyCQ5%2BFhdXv6tPU%2Bn1X9uHaAeZujhTnXLSpZWh%2B%2FiT0%2FdMGm2djipcO0fIo15ZGe1%2FebwqDbFkM0959hp%2BO6R%2BVwGn9AGEZv39vbwdxOcBRD2xYdc1SrSvPBwbeBZG0dlMHMW7Az%2BEhvpmZlQkxAS6vfag%2Bgb1vRe0GH6D4d2BiyDLsWQMiox&X-Amz-Signature=e7a89de6a7817dd6e48d176689fb0140ecf340c3d51f2ceac2cfc7b9f1b2bc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCSN2LM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyz%2BJFdxxhAYSGZqY%2FIE9MAawUPmYb%2Bt%2FxRI%2BAUrbaxQIhAKmycAS7iq%2Bl2FNuGYakXrsfAVfdKy7v2x2kdp4CUhovKv8DCAIQABoMNjM3NDIzMTgzODA1Igzj00j6TTP%2BW%2FJNtL8q3ANu%2Byqzq%2FGFufFgcG8W3cdwdEp3d5wlzEyYgp2xw4bgN8icoaOimnRVyJwOy6GDEDoODi1P3wQYPMH4Fes5sO8ggo0C4bGfelFGYJd9lqsz5qMHDJpFmfTqBF7LYu%2B5gg6QLUABu%2FMSsYbm9oLgMtuIDOvlzRZQZdHWE8s4a%2FfXVeedHoEiIZ7JiGUOwaKKFMNvam845cF4HFiTp1EedMSGGW9SiB2wjJVeMQZpXxEBPI5MmFDWtiBEB8koNCR1eCPIi03T2y6I8isaJFh8HEb4WrCal%2Bgm9Tg0%2FyL%2Bkn6ZsP%2Fvmm83tTRhhYLGL5c%2Bj0kLEHm0i3PBipyUcbK0Qy6DvuGs6IA1armdsI1iKWjA5X5v0yNjGBiAZVQwDu4tctsHVQG2yczeWMZeGOPy1yOSJCR0dYjotyKkYcF%2B0qn760X9Kho5Ls3REYcWCgTARSD8%2FaIaG2cGhEUJF7IQ1KagdWzxRoHUw9jqMy30WmJbA5ZtvP7ZlHyaEGe%2Bfc26h1%2BQY5xflPwCxXEReh8WazIOY5Ooml6dT67PnPmb4LljsIfJGyJF%2F%2BSCXKPBRYok0sqrn14%2FerI%2FK6264ska0uzQUK%2BLG9p5wVWlb336GHsZf6SZ2TsgJyiK%2F28ktjD5pfPQBjqkARiYhNJeDroc8VB%2FfBiToNOiVC3SRUGmZvSgffx%2FyCQ5%2BFhdXv6tPU%2Bn1X9uHaAeZujhTnXLSpZWh%2B%2FiT0%2FdMGm2djipcO0fIo15ZGe1%2FebwqDbFkM0959hp%2BO6R%2BVwGn9AGEZv39vbwdxOcBRD2xYdc1SrSvPBwbeBZG0dlMHMW7Az%2BEhvpmZlQkxAS6vfag%2Bgb1vRe0GH6D4d2BiyDLsWQMiox&X-Amz-Signature=2ab8c6853926adb89e66f545f810c02b374f4a6bf6f91eed55342a887a7bbc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCSN2LM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyz%2BJFdxxhAYSGZqY%2FIE9MAawUPmYb%2Bt%2FxRI%2BAUrbaxQIhAKmycAS7iq%2Bl2FNuGYakXrsfAVfdKy7v2x2kdp4CUhovKv8DCAIQABoMNjM3NDIzMTgzODA1Igzj00j6TTP%2BW%2FJNtL8q3ANu%2Byqzq%2FGFufFgcG8W3cdwdEp3d5wlzEyYgp2xw4bgN8icoaOimnRVyJwOy6GDEDoODi1P3wQYPMH4Fes5sO8ggo0C4bGfelFGYJd9lqsz5qMHDJpFmfTqBF7LYu%2B5gg6QLUABu%2FMSsYbm9oLgMtuIDOvlzRZQZdHWE8s4a%2FfXVeedHoEiIZ7JiGUOwaKKFMNvam845cF4HFiTp1EedMSGGW9SiB2wjJVeMQZpXxEBPI5MmFDWtiBEB8koNCR1eCPIi03T2y6I8isaJFh8HEb4WrCal%2Bgm9Tg0%2FyL%2Bkn6ZsP%2Fvmm83tTRhhYLGL5c%2Bj0kLEHm0i3PBipyUcbK0Qy6DvuGs6IA1armdsI1iKWjA5X5v0yNjGBiAZVQwDu4tctsHVQG2yczeWMZeGOPy1yOSJCR0dYjotyKkYcF%2B0qn760X9Kho5Ls3REYcWCgTARSD8%2FaIaG2cGhEUJF7IQ1KagdWzxRoHUw9jqMy30WmJbA5ZtvP7ZlHyaEGe%2Bfc26h1%2BQY5xflPwCxXEReh8WazIOY5Ooml6dT67PnPmb4LljsIfJGyJF%2F%2BSCXKPBRYok0sqrn14%2FerI%2FK6264ska0uzQUK%2BLG9p5wVWlb336GHsZf6SZ2TsgJyiK%2F28ktjD5pfPQBjqkARiYhNJeDroc8VB%2FfBiToNOiVC3SRUGmZvSgffx%2FyCQ5%2BFhdXv6tPU%2Bn1X9uHaAeZujhTnXLSpZWh%2B%2FiT0%2FdMGm2djipcO0fIo15ZGe1%2FebwqDbFkM0959hp%2BO6R%2BVwGn9AGEZv39vbwdxOcBRD2xYdc1SrSvPBwbeBZG0dlMHMW7Az%2BEhvpmZlQkxAS6vfag%2Bgb1vRe0GH6D4d2BiyDLsWQMiox&X-Amz-Signature=182540c7a4822039964755ec076e6a27005664b78d88248bced3fc1ad50d6979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
