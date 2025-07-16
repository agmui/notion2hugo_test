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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7GJY4Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAxfb7JQS6huENHrxyIW5RfJqxlcsnsJvNn10Ep1IsRGAiAZ7S%2B3uwnz%2FDetP1e%2FRWYM1UXN6AvWLvXNeWACrc%2BV4ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxSUYxraqWSQcl%2BW3KtwDM%2FLu8CmwsmpZKHfbBRmR13CG%2F%2BBvBC9dbHqnCyrLWdpIFkZxgZeJPIHauaGR4SYf2l%2BBRmYXfaUMxZAtBLo639Fe%2Ff60PEcvLzABWXt%2BYUx8xqzjN59BvVBPdA2sxImP%2BBWg%2FgDEDCOYgG%2FxrYs27937AV4kXizvaVtvsAI2Yn5vd6PK6hryYdcMjIBnOYKl6d6Qmy72JgMP%2BLYhOfX7lotHy0g3z%2Fa3%2FC6h8cMLdSVdsYpy%2Bm8hl7jOMQIaQl%2Bte4VmVVV2WwL%2Fr6YMLqGFyl%2B9yMX1mzq%2FD%2FfxBou4O67ilmOe2zXm8g0bojpTpxifoJYe1NR70UwjKg1r%2FcAaRws8xMsjm7plSjCPSekcbsC0v%2BDvYRVQeAC6PQV6GfiUkXxHPWNj%2FTAcKeH2FEWYFm4mcjetqEw2STIz76gwJzKs7s43KXBU1Qg5YVPUGnw0t0ne6OETCXX%2Bg938qXn7pcuBpCq598RhvJK2hR1ifCXErQVYLFoDG7Ppp%2BQr%2B0XR0GgTd0OP8U61FyiOEL4JYKLrhfT1PAZw52ndJD%2FN4APVbEIq1%2Bysl8OKb93Ig%2BHKFHmx1%2FGoyKy4%2FAkPKOHPoFGqa97AgAD9QGYDuo7J7sr%2B9ALZKpK1BWa829YwupPewwY6pgEv9Y3woxN9Z0sU6Zt2wwcwjeYNDhThgZp1c3LOV8VGBwRcjhqi9yio5q6vpgF%2B6Vb6VFym2Oh%2Be8wUX0DS35NYDo7qf32PvpwH7LBFWhUjaYb6arwHGaNDjdHESchE80OF74pPYxDVGYHJ6ELdanU5F5%2Bt67AewUOmw63QVaZWKR3GBPXme06bIkEEPM5gdnVbGhBEy45Zu%2FklaqZ9NAuXGb07Or%2Fc&X-Amz-Signature=bc0140d9d31b1666410041c589d680eafaa0ecd67c2849da00346b53e15f0979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7GJY4Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAxfb7JQS6huENHrxyIW5RfJqxlcsnsJvNn10Ep1IsRGAiAZ7S%2B3uwnz%2FDetP1e%2FRWYM1UXN6AvWLvXNeWACrc%2BV4ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxSUYxraqWSQcl%2BW3KtwDM%2FLu8CmwsmpZKHfbBRmR13CG%2F%2BBvBC9dbHqnCyrLWdpIFkZxgZeJPIHauaGR4SYf2l%2BBRmYXfaUMxZAtBLo639Fe%2Ff60PEcvLzABWXt%2BYUx8xqzjN59BvVBPdA2sxImP%2BBWg%2FgDEDCOYgG%2FxrYs27937AV4kXizvaVtvsAI2Yn5vd6PK6hryYdcMjIBnOYKl6d6Qmy72JgMP%2BLYhOfX7lotHy0g3z%2Fa3%2FC6h8cMLdSVdsYpy%2Bm8hl7jOMQIaQl%2Bte4VmVVV2WwL%2Fr6YMLqGFyl%2B9yMX1mzq%2FD%2FfxBou4O67ilmOe2zXm8g0bojpTpxifoJYe1NR70UwjKg1r%2FcAaRws8xMsjm7plSjCPSekcbsC0v%2BDvYRVQeAC6PQV6GfiUkXxHPWNj%2FTAcKeH2FEWYFm4mcjetqEw2STIz76gwJzKs7s43KXBU1Qg5YVPUGnw0t0ne6OETCXX%2Bg938qXn7pcuBpCq598RhvJK2hR1ifCXErQVYLFoDG7Ppp%2BQr%2B0XR0GgTd0OP8U61FyiOEL4JYKLrhfT1PAZw52ndJD%2FN4APVbEIq1%2Bysl8OKb93Ig%2BHKFHmx1%2FGoyKy4%2FAkPKOHPoFGqa97AgAD9QGYDuo7J7sr%2B9ALZKpK1BWa829YwupPewwY6pgEv9Y3woxN9Z0sU6Zt2wwcwjeYNDhThgZp1c3LOV8VGBwRcjhqi9yio5q6vpgF%2B6Vb6VFym2Oh%2Be8wUX0DS35NYDo7qf32PvpwH7LBFWhUjaYb6arwHGaNDjdHESchE80OF74pPYxDVGYHJ6ELdanU5F5%2Bt67AewUOmw63QVaZWKR3GBPXme06bIkEEPM5gdnVbGhBEy45Zu%2FklaqZ9NAuXGb07Or%2Fc&X-Amz-Signature=dd9ea7249812244a415cd65e10f77613fee954ce2e06180f094d9e3b28d52ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7GJY4Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAxfb7JQS6huENHrxyIW5RfJqxlcsnsJvNn10Ep1IsRGAiAZ7S%2B3uwnz%2FDetP1e%2FRWYM1UXN6AvWLvXNeWACrc%2BV4ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxSUYxraqWSQcl%2BW3KtwDM%2FLu8CmwsmpZKHfbBRmR13CG%2F%2BBvBC9dbHqnCyrLWdpIFkZxgZeJPIHauaGR4SYf2l%2BBRmYXfaUMxZAtBLo639Fe%2Ff60PEcvLzABWXt%2BYUx8xqzjN59BvVBPdA2sxImP%2BBWg%2FgDEDCOYgG%2FxrYs27937AV4kXizvaVtvsAI2Yn5vd6PK6hryYdcMjIBnOYKl6d6Qmy72JgMP%2BLYhOfX7lotHy0g3z%2Fa3%2FC6h8cMLdSVdsYpy%2Bm8hl7jOMQIaQl%2Bte4VmVVV2WwL%2Fr6YMLqGFyl%2B9yMX1mzq%2FD%2FfxBou4O67ilmOe2zXm8g0bojpTpxifoJYe1NR70UwjKg1r%2FcAaRws8xMsjm7plSjCPSekcbsC0v%2BDvYRVQeAC6PQV6GfiUkXxHPWNj%2FTAcKeH2FEWYFm4mcjetqEw2STIz76gwJzKs7s43KXBU1Qg5YVPUGnw0t0ne6OETCXX%2Bg938qXn7pcuBpCq598RhvJK2hR1ifCXErQVYLFoDG7Ppp%2BQr%2B0XR0GgTd0OP8U61FyiOEL4JYKLrhfT1PAZw52ndJD%2FN4APVbEIq1%2Bysl8OKb93Ig%2BHKFHmx1%2FGoyKy4%2FAkPKOHPoFGqa97AgAD9QGYDuo7J7sr%2B9ALZKpK1BWa829YwupPewwY6pgEv9Y3woxN9Z0sU6Zt2wwcwjeYNDhThgZp1c3LOV8VGBwRcjhqi9yio5q6vpgF%2B6Vb6VFym2Oh%2Be8wUX0DS35NYDo7qf32PvpwH7LBFWhUjaYb6arwHGaNDjdHESchE80OF74pPYxDVGYHJ6ELdanU5F5%2Bt67AewUOmw63QVaZWKR3GBPXme06bIkEEPM5gdnVbGhBEy45Zu%2FklaqZ9NAuXGb07Or%2Fc&X-Amz-Signature=fbb26a3e981ebbe4f9247358adf68b0159e6ad2856f338147bd98f65a8e9e83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7GJY4Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAxfb7JQS6huENHrxyIW5RfJqxlcsnsJvNn10Ep1IsRGAiAZ7S%2B3uwnz%2FDetP1e%2FRWYM1UXN6AvWLvXNeWACrc%2BV4ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxSUYxraqWSQcl%2BW3KtwDM%2FLu8CmwsmpZKHfbBRmR13CG%2F%2BBvBC9dbHqnCyrLWdpIFkZxgZeJPIHauaGR4SYf2l%2BBRmYXfaUMxZAtBLo639Fe%2Ff60PEcvLzABWXt%2BYUx8xqzjN59BvVBPdA2sxImP%2BBWg%2FgDEDCOYgG%2FxrYs27937AV4kXizvaVtvsAI2Yn5vd6PK6hryYdcMjIBnOYKl6d6Qmy72JgMP%2BLYhOfX7lotHy0g3z%2Fa3%2FC6h8cMLdSVdsYpy%2Bm8hl7jOMQIaQl%2Bte4VmVVV2WwL%2Fr6YMLqGFyl%2B9yMX1mzq%2FD%2FfxBou4O67ilmOe2zXm8g0bojpTpxifoJYe1NR70UwjKg1r%2FcAaRws8xMsjm7plSjCPSekcbsC0v%2BDvYRVQeAC6PQV6GfiUkXxHPWNj%2FTAcKeH2FEWYFm4mcjetqEw2STIz76gwJzKs7s43KXBU1Qg5YVPUGnw0t0ne6OETCXX%2Bg938qXn7pcuBpCq598RhvJK2hR1ifCXErQVYLFoDG7Ppp%2BQr%2B0XR0GgTd0OP8U61FyiOEL4JYKLrhfT1PAZw52ndJD%2FN4APVbEIq1%2Bysl8OKb93Ig%2BHKFHmx1%2FGoyKy4%2FAkPKOHPoFGqa97AgAD9QGYDuo7J7sr%2B9ALZKpK1BWa829YwupPewwY6pgEv9Y3woxN9Z0sU6Zt2wwcwjeYNDhThgZp1c3LOV8VGBwRcjhqi9yio5q6vpgF%2B6Vb6VFym2Oh%2Be8wUX0DS35NYDo7qf32PvpwH7LBFWhUjaYb6arwHGaNDjdHESchE80OF74pPYxDVGYHJ6ELdanU5F5%2Bt67AewUOmw63QVaZWKR3GBPXme06bIkEEPM5gdnVbGhBEy45Zu%2FklaqZ9NAuXGb07Or%2Fc&X-Amz-Signature=a73e4731ec318a8d3d0a3d27142fa292f75897bbcb9b9f79ee7fadb6b5c37ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7GJY4Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAxfb7JQS6huENHrxyIW5RfJqxlcsnsJvNn10Ep1IsRGAiAZ7S%2B3uwnz%2FDetP1e%2FRWYM1UXN6AvWLvXNeWACrc%2BV4ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxSUYxraqWSQcl%2BW3KtwDM%2FLu8CmwsmpZKHfbBRmR13CG%2F%2BBvBC9dbHqnCyrLWdpIFkZxgZeJPIHauaGR4SYf2l%2BBRmYXfaUMxZAtBLo639Fe%2Ff60PEcvLzABWXt%2BYUx8xqzjN59BvVBPdA2sxImP%2BBWg%2FgDEDCOYgG%2FxrYs27937AV4kXizvaVtvsAI2Yn5vd6PK6hryYdcMjIBnOYKl6d6Qmy72JgMP%2BLYhOfX7lotHy0g3z%2Fa3%2FC6h8cMLdSVdsYpy%2Bm8hl7jOMQIaQl%2Bte4VmVVV2WwL%2Fr6YMLqGFyl%2B9yMX1mzq%2FD%2FfxBou4O67ilmOe2zXm8g0bojpTpxifoJYe1NR70UwjKg1r%2FcAaRws8xMsjm7plSjCPSekcbsC0v%2BDvYRVQeAC6PQV6GfiUkXxHPWNj%2FTAcKeH2FEWYFm4mcjetqEw2STIz76gwJzKs7s43KXBU1Qg5YVPUGnw0t0ne6OETCXX%2Bg938qXn7pcuBpCq598RhvJK2hR1ifCXErQVYLFoDG7Ppp%2BQr%2B0XR0GgTd0OP8U61FyiOEL4JYKLrhfT1PAZw52ndJD%2FN4APVbEIq1%2Bysl8OKb93Ig%2BHKFHmx1%2FGoyKy4%2FAkPKOHPoFGqa97AgAD9QGYDuo7J7sr%2B9ALZKpK1BWa829YwupPewwY6pgEv9Y3woxN9Z0sU6Zt2wwcwjeYNDhThgZp1c3LOV8VGBwRcjhqi9yio5q6vpgF%2B6Vb6VFym2Oh%2Be8wUX0DS35NYDo7qf32PvpwH7LBFWhUjaYb6arwHGaNDjdHESchE80OF74pPYxDVGYHJ6ELdanU5F5%2Bt67AewUOmw63QVaZWKR3GBPXme06bIkEEPM5gdnVbGhBEy45Zu%2FklaqZ9NAuXGb07Or%2Fc&X-Amz-Signature=2ef881eff10066bd370ba18f81d388121033d96a26822068746718f0652a2f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7GJY4Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAxfb7JQS6huENHrxyIW5RfJqxlcsnsJvNn10Ep1IsRGAiAZ7S%2B3uwnz%2FDetP1e%2FRWYM1UXN6AvWLvXNeWACrc%2BV4ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxSUYxraqWSQcl%2BW3KtwDM%2FLu8CmwsmpZKHfbBRmR13CG%2F%2BBvBC9dbHqnCyrLWdpIFkZxgZeJPIHauaGR4SYf2l%2BBRmYXfaUMxZAtBLo639Fe%2Ff60PEcvLzABWXt%2BYUx8xqzjN59BvVBPdA2sxImP%2BBWg%2FgDEDCOYgG%2FxrYs27937AV4kXizvaVtvsAI2Yn5vd6PK6hryYdcMjIBnOYKl6d6Qmy72JgMP%2BLYhOfX7lotHy0g3z%2Fa3%2FC6h8cMLdSVdsYpy%2Bm8hl7jOMQIaQl%2Bte4VmVVV2WwL%2Fr6YMLqGFyl%2B9yMX1mzq%2FD%2FfxBou4O67ilmOe2zXm8g0bojpTpxifoJYe1NR70UwjKg1r%2FcAaRws8xMsjm7plSjCPSekcbsC0v%2BDvYRVQeAC6PQV6GfiUkXxHPWNj%2FTAcKeH2FEWYFm4mcjetqEw2STIz76gwJzKs7s43KXBU1Qg5YVPUGnw0t0ne6OETCXX%2Bg938qXn7pcuBpCq598RhvJK2hR1ifCXErQVYLFoDG7Ppp%2BQr%2B0XR0GgTd0OP8U61FyiOEL4JYKLrhfT1PAZw52ndJD%2FN4APVbEIq1%2Bysl8OKb93Ig%2BHKFHmx1%2FGoyKy4%2FAkPKOHPoFGqa97AgAD9QGYDuo7J7sr%2B9ALZKpK1BWa829YwupPewwY6pgEv9Y3woxN9Z0sU6Zt2wwcwjeYNDhThgZp1c3LOV8VGBwRcjhqi9yio5q6vpgF%2B6Vb6VFym2Oh%2Be8wUX0DS35NYDo7qf32PvpwH7LBFWhUjaYb6arwHGaNDjdHESchE80OF74pPYxDVGYHJ6ELdanU5F5%2Bt67AewUOmw63QVaZWKR3GBPXme06bIkEEPM5gdnVbGhBEy45Zu%2FklaqZ9NAuXGb07Or%2Fc&X-Amz-Signature=c7bb1e641734ed888013df485684d74d1b59ba9d0109e2ebc69d062ec5d55054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L7GJY4Q%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAxfb7JQS6huENHrxyIW5RfJqxlcsnsJvNn10Ep1IsRGAiAZ7S%2B3uwnz%2FDetP1e%2FRWYM1UXN6AvWLvXNeWACrc%2BV4ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxSUYxraqWSQcl%2BW3KtwDM%2FLu8CmwsmpZKHfbBRmR13CG%2F%2BBvBC9dbHqnCyrLWdpIFkZxgZeJPIHauaGR4SYf2l%2BBRmYXfaUMxZAtBLo639Fe%2Ff60PEcvLzABWXt%2BYUx8xqzjN59BvVBPdA2sxImP%2BBWg%2FgDEDCOYgG%2FxrYs27937AV4kXizvaVtvsAI2Yn5vd6PK6hryYdcMjIBnOYKl6d6Qmy72JgMP%2BLYhOfX7lotHy0g3z%2Fa3%2FC6h8cMLdSVdsYpy%2Bm8hl7jOMQIaQl%2Bte4VmVVV2WwL%2Fr6YMLqGFyl%2B9yMX1mzq%2FD%2FfxBou4O67ilmOe2zXm8g0bojpTpxifoJYe1NR70UwjKg1r%2FcAaRws8xMsjm7plSjCPSekcbsC0v%2BDvYRVQeAC6PQV6GfiUkXxHPWNj%2FTAcKeH2FEWYFm4mcjetqEw2STIz76gwJzKs7s43KXBU1Qg5YVPUGnw0t0ne6OETCXX%2Bg938qXn7pcuBpCq598RhvJK2hR1ifCXErQVYLFoDG7Ppp%2BQr%2B0XR0GgTd0OP8U61FyiOEL4JYKLrhfT1PAZw52ndJD%2FN4APVbEIq1%2Bysl8OKb93Ig%2BHKFHmx1%2FGoyKy4%2FAkPKOHPoFGqa97AgAD9QGYDuo7J7sr%2B9ALZKpK1BWa829YwupPewwY6pgEv9Y3woxN9Z0sU6Zt2wwcwjeYNDhThgZp1c3LOV8VGBwRcjhqi9yio5q6vpgF%2B6Vb6VFym2Oh%2Be8wUX0DS35NYDo7qf32PvpwH7LBFWhUjaYb6arwHGaNDjdHESchE80OF74pPYxDVGYHJ6ELdanU5F5%2Bt67AewUOmw63QVaZWKR3GBPXme06bIkEEPM5gdnVbGhBEy45Zu%2FklaqZ9NAuXGb07Or%2Fc&X-Amz-Signature=6bcd5a42c8c8f8dff0e5384b992e7be2b56d350b96db6268f2ff84b0f32daea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
