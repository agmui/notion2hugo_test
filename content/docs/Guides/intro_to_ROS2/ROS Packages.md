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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KS6UYQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCzAnD5SNJR05kXPjavE%2BP17ihtymLrmUqv5e33w0xzfQIgVzb4gYgkzML0m1R73YVDv9oFNS1kd0ddZozm5f8%2FxgoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0dc6LcHvPVHITutSrcA06gc%2FT5rpq66gf%2ByhRiyN1K2f3wvWoLw0RnsfITWYC3V9KdnxSHzUsE%2BDTVwtfoeYo5GKYrqnJW62jVRv2W8dr4WAjhUV3B8hTY3klrBlxe%2FUVmtyIJjwOCq95ci3iZCvdYdYjJrsEd5li%2Btq7mNeIGg1XognKz4uKNZFKK2CHkfCoSAwmGNyPXwQG58BbUx4U2cwoZaMi%2B9a0Tog2dkMQTYCtOvoAsTsOs2s9Z6YLNBVx6pcSzA45WFE7nFAUbuWWYi4zagL4bCH0D6fng91lV0hUVHkQUqmp75bQmtyJ1n1kI0emoGvIUPd%2Bu%2BZ7x0Qw%2FQzsCepsOi%2Fw0HR144ObU1pMVEkmPlzhh4k6OnifWrGcw376m%2FSYIH6c%2FbeSg0xkuKlJh%2FQSo9Z%2F2N9wINLpV9nY2xN18mrlIlG2facjnVksCGOI0VMHbTYliUaB%2BgAKjM8BZPm4z2jj2PnFikBPFjC2iB368gBLu7YeUyhr%2FkkATC0S%2F8zXPwVhKp8UO9X%2F%2FsSmp%2FwUBgBBhcN5yNEbEGaka9VMbGptWvrEFHD1GMsy%2Bu1iBT6vjMDETqmQ0S77usYRXcZDVxn0%2BxEGr2NfefYw7HqIP3Oy0aXQQApafLTwx46yL50j3XSiiMJH7tL8GOqUBoq%2FXttTd4X6rWJOrmpcHNOmyDTBgtPYCZfvCMXN8egzHn5sfElIYrzbHRANM0Xjs7QK58eaMf6a32rRM91yyFJ2crMGBkPizACQzTnS%2Bd75XfDz1IuJKrwcmzF1qCHuJXkRBeUVtyBp3nFw%2BmECGDnDbcIRuXXmA6oz%2BA9h2P3WbnB3qrg6YS4pZ9wd8bZAiMhykRwNzbLet0sFoSt1uppbLjRIE&X-Amz-Signature=62d3e04d535793c92676d08625daca7d06dca5540c3d6ab68997a255efece1ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KS6UYQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCzAnD5SNJR05kXPjavE%2BP17ihtymLrmUqv5e33w0xzfQIgVzb4gYgkzML0m1R73YVDv9oFNS1kd0ddZozm5f8%2FxgoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0dc6LcHvPVHITutSrcA06gc%2FT5rpq66gf%2ByhRiyN1K2f3wvWoLw0RnsfITWYC3V9KdnxSHzUsE%2BDTVwtfoeYo5GKYrqnJW62jVRv2W8dr4WAjhUV3B8hTY3klrBlxe%2FUVmtyIJjwOCq95ci3iZCvdYdYjJrsEd5li%2Btq7mNeIGg1XognKz4uKNZFKK2CHkfCoSAwmGNyPXwQG58BbUx4U2cwoZaMi%2B9a0Tog2dkMQTYCtOvoAsTsOs2s9Z6YLNBVx6pcSzA45WFE7nFAUbuWWYi4zagL4bCH0D6fng91lV0hUVHkQUqmp75bQmtyJ1n1kI0emoGvIUPd%2Bu%2BZ7x0Qw%2FQzsCepsOi%2Fw0HR144ObU1pMVEkmPlzhh4k6OnifWrGcw376m%2FSYIH6c%2FbeSg0xkuKlJh%2FQSo9Z%2F2N9wINLpV9nY2xN18mrlIlG2facjnVksCGOI0VMHbTYliUaB%2BgAKjM8BZPm4z2jj2PnFikBPFjC2iB368gBLu7YeUyhr%2FkkATC0S%2F8zXPwVhKp8UO9X%2F%2FsSmp%2FwUBgBBhcN5yNEbEGaka9VMbGptWvrEFHD1GMsy%2Bu1iBT6vjMDETqmQ0S77usYRXcZDVxn0%2BxEGr2NfefYw7HqIP3Oy0aXQQApafLTwx46yL50j3XSiiMJH7tL8GOqUBoq%2FXttTd4X6rWJOrmpcHNOmyDTBgtPYCZfvCMXN8egzHn5sfElIYrzbHRANM0Xjs7QK58eaMf6a32rRM91yyFJ2crMGBkPizACQzTnS%2Bd75XfDz1IuJKrwcmzF1qCHuJXkRBeUVtyBp3nFw%2BmECGDnDbcIRuXXmA6oz%2BA9h2P3WbnB3qrg6YS4pZ9wd8bZAiMhykRwNzbLet0sFoSt1uppbLjRIE&X-Amz-Signature=cfaf024da85dae2c6da43d329a30f338840b75ef0d5d1d90229c8e830398aeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KS6UYQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCzAnD5SNJR05kXPjavE%2BP17ihtymLrmUqv5e33w0xzfQIgVzb4gYgkzML0m1R73YVDv9oFNS1kd0ddZozm5f8%2FxgoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0dc6LcHvPVHITutSrcA06gc%2FT5rpq66gf%2ByhRiyN1K2f3wvWoLw0RnsfITWYC3V9KdnxSHzUsE%2BDTVwtfoeYo5GKYrqnJW62jVRv2W8dr4WAjhUV3B8hTY3klrBlxe%2FUVmtyIJjwOCq95ci3iZCvdYdYjJrsEd5li%2Btq7mNeIGg1XognKz4uKNZFKK2CHkfCoSAwmGNyPXwQG58BbUx4U2cwoZaMi%2B9a0Tog2dkMQTYCtOvoAsTsOs2s9Z6YLNBVx6pcSzA45WFE7nFAUbuWWYi4zagL4bCH0D6fng91lV0hUVHkQUqmp75bQmtyJ1n1kI0emoGvIUPd%2Bu%2BZ7x0Qw%2FQzsCepsOi%2Fw0HR144ObU1pMVEkmPlzhh4k6OnifWrGcw376m%2FSYIH6c%2FbeSg0xkuKlJh%2FQSo9Z%2F2N9wINLpV9nY2xN18mrlIlG2facjnVksCGOI0VMHbTYliUaB%2BgAKjM8BZPm4z2jj2PnFikBPFjC2iB368gBLu7YeUyhr%2FkkATC0S%2F8zXPwVhKp8UO9X%2F%2FsSmp%2FwUBgBBhcN5yNEbEGaka9VMbGptWvrEFHD1GMsy%2Bu1iBT6vjMDETqmQ0S77usYRXcZDVxn0%2BxEGr2NfefYw7HqIP3Oy0aXQQApafLTwx46yL50j3XSiiMJH7tL8GOqUBoq%2FXttTd4X6rWJOrmpcHNOmyDTBgtPYCZfvCMXN8egzHn5sfElIYrzbHRANM0Xjs7QK58eaMf6a32rRM91yyFJ2crMGBkPizACQzTnS%2Bd75XfDz1IuJKrwcmzF1qCHuJXkRBeUVtyBp3nFw%2BmECGDnDbcIRuXXmA6oz%2BA9h2P3WbnB3qrg6YS4pZ9wd8bZAiMhykRwNzbLet0sFoSt1uppbLjRIE&X-Amz-Signature=5dcbf021daf048f50b7bbca147a4c53f0837d454056f872f65c14c3c3c46d08c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KS6UYQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCzAnD5SNJR05kXPjavE%2BP17ihtymLrmUqv5e33w0xzfQIgVzb4gYgkzML0m1R73YVDv9oFNS1kd0ddZozm5f8%2FxgoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0dc6LcHvPVHITutSrcA06gc%2FT5rpq66gf%2ByhRiyN1K2f3wvWoLw0RnsfITWYC3V9KdnxSHzUsE%2BDTVwtfoeYo5GKYrqnJW62jVRv2W8dr4WAjhUV3B8hTY3klrBlxe%2FUVmtyIJjwOCq95ci3iZCvdYdYjJrsEd5li%2Btq7mNeIGg1XognKz4uKNZFKK2CHkfCoSAwmGNyPXwQG58BbUx4U2cwoZaMi%2B9a0Tog2dkMQTYCtOvoAsTsOs2s9Z6YLNBVx6pcSzA45WFE7nFAUbuWWYi4zagL4bCH0D6fng91lV0hUVHkQUqmp75bQmtyJ1n1kI0emoGvIUPd%2Bu%2BZ7x0Qw%2FQzsCepsOi%2Fw0HR144ObU1pMVEkmPlzhh4k6OnifWrGcw376m%2FSYIH6c%2FbeSg0xkuKlJh%2FQSo9Z%2F2N9wINLpV9nY2xN18mrlIlG2facjnVksCGOI0VMHbTYliUaB%2BgAKjM8BZPm4z2jj2PnFikBPFjC2iB368gBLu7YeUyhr%2FkkATC0S%2F8zXPwVhKp8UO9X%2F%2FsSmp%2FwUBgBBhcN5yNEbEGaka9VMbGptWvrEFHD1GMsy%2Bu1iBT6vjMDETqmQ0S77usYRXcZDVxn0%2BxEGr2NfefYw7HqIP3Oy0aXQQApafLTwx46yL50j3XSiiMJH7tL8GOqUBoq%2FXttTd4X6rWJOrmpcHNOmyDTBgtPYCZfvCMXN8egzHn5sfElIYrzbHRANM0Xjs7QK58eaMf6a32rRM91yyFJ2crMGBkPizACQzTnS%2Bd75XfDz1IuJKrwcmzF1qCHuJXkRBeUVtyBp3nFw%2BmECGDnDbcIRuXXmA6oz%2BA9h2P3WbnB3qrg6YS4pZ9wd8bZAiMhykRwNzbLet0sFoSt1uppbLjRIE&X-Amz-Signature=1b07aa0dfc4e6096653c7430ec07bfb0b5248b4c64e748d81efd7eefa2584737&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KS6UYQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCzAnD5SNJR05kXPjavE%2BP17ihtymLrmUqv5e33w0xzfQIgVzb4gYgkzML0m1R73YVDv9oFNS1kd0ddZozm5f8%2FxgoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0dc6LcHvPVHITutSrcA06gc%2FT5rpq66gf%2ByhRiyN1K2f3wvWoLw0RnsfITWYC3V9KdnxSHzUsE%2BDTVwtfoeYo5GKYrqnJW62jVRv2W8dr4WAjhUV3B8hTY3klrBlxe%2FUVmtyIJjwOCq95ci3iZCvdYdYjJrsEd5li%2Btq7mNeIGg1XognKz4uKNZFKK2CHkfCoSAwmGNyPXwQG58BbUx4U2cwoZaMi%2B9a0Tog2dkMQTYCtOvoAsTsOs2s9Z6YLNBVx6pcSzA45WFE7nFAUbuWWYi4zagL4bCH0D6fng91lV0hUVHkQUqmp75bQmtyJ1n1kI0emoGvIUPd%2Bu%2BZ7x0Qw%2FQzsCepsOi%2Fw0HR144ObU1pMVEkmPlzhh4k6OnifWrGcw376m%2FSYIH6c%2FbeSg0xkuKlJh%2FQSo9Z%2F2N9wINLpV9nY2xN18mrlIlG2facjnVksCGOI0VMHbTYliUaB%2BgAKjM8BZPm4z2jj2PnFikBPFjC2iB368gBLu7YeUyhr%2FkkATC0S%2F8zXPwVhKp8UO9X%2F%2FsSmp%2FwUBgBBhcN5yNEbEGaka9VMbGptWvrEFHD1GMsy%2Bu1iBT6vjMDETqmQ0S77usYRXcZDVxn0%2BxEGr2NfefYw7HqIP3Oy0aXQQApafLTwx46yL50j3XSiiMJH7tL8GOqUBoq%2FXttTd4X6rWJOrmpcHNOmyDTBgtPYCZfvCMXN8egzHn5sfElIYrzbHRANM0Xjs7QK58eaMf6a32rRM91yyFJ2crMGBkPizACQzTnS%2Bd75XfDz1IuJKrwcmzF1qCHuJXkRBeUVtyBp3nFw%2BmECGDnDbcIRuXXmA6oz%2BA9h2P3WbnB3qrg6YS4pZ9wd8bZAiMhykRwNzbLet0sFoSt1uppbLjRIE&X-Amz-Signature=0e2a73da4b71a40a7aa5aedece625507bd0f7186f08f6c585c6b85141ab6d6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KS6UYQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCzAnD5SNJR05kXPjavE%2BP17ihtymLrmUqv5e33w0xzfQIgVzb4gYgkzML0m1R73YVDv9oFNS1kd0ddZozm5f8%2FxgoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0dc6LcHvPVHITutSrcA06gc%2FT5rpq66gf%2ByhRiyN1K2f3wvWoLw0RnsfITWYC3V9KdnxSHzUsE%2BDTVwtfoeYo5GKYrqnJW62jVRv2W8dr4WAjhUV3B8hTY3klrBlxe%2FUVmtyIJjwOCq95ci3iZCvdYdYjJrsEd5li%2Btq7mNeIGg1XognKz4uKNZFKK2CHkfCoSAwmGNyPXwQG58BbUx4U2cwoZaMi%2B9a0Tog2dkMQTYCtOvoAsTsOs2s9Z6YLNBVx6pcSzA45WFE7nFAUbuWWYi4zagL4bCH0D6fng91lV0hUVHkQUqmp75bQmtyJ1n1kI0emoGvIUPd%2Bu%2BZ7x0Qw%2FQzsCepsOi%2Fw0HR144ObU1pMVEkmPlzhh4k6OnifWrGcw376m%2FSYIH6c%2FbeSg0xkuKlJh%2FQSo9Z%2F2N9wINLpV9nY2xN18mrlIlG2facjnVksCGOI0VMHbTYliUaB%2BgAKjM8BZPm4z2jj2PnFikBPFjC2iB368gBLu7YeUyhr%2FkkATC0S%2F8zXPwVhKp8UO9X%2F%2FsSmp%2FwUBgBBhcN5yNEbEGaka9VMbGptWvrEFHD1GMsy%2Bu1iBT6vjMDETqmQ0S77usYRXcZDVxn0%2BxEGr2NfefYw7HqIP3Oy0aXQQApafLTwx46yL50j3XSiiMJH7tL8GOqUBoq%2FXttTd4X6rWJOrmpcHNOmyDTBgtPYCZfvCMXN8egzHn5sfElIYrzbHRANM0Xjs7QK58eaMf6a32rRM91yyFJ2crMGBkPizACQzTnS%2Bd75XfDz1IuJKrwcmzF1qCHuJXkRBeUVtyBp3nFw%2BmECGDnDbcIRuXXmA6oz%2BA9h2P3WbnB3qrg6YS4pZ9wd8bZAiMhykRwNzbLet0sFoSt1uppbLjRIE&X-Amz-Signature=c7718cb92bc0571e44f3aff43c44bebcc09b0fd429773610eb3123f10a122370&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6KS6UYQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCzAnD5SNJR05kXPjavE%2BP17ihtymLrmUqv5e33w0xzfQIgVzb4gYgkzML0m1R73YVDv9oFNS1kd0ddZozm5f8%2FxgoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0dc6LcHvPVHITutSrcA06gc%2FT5rpq66gf%2ByhRiyN1K2f3wvWoLw0RnsfITWYC3V9KdnxSHzUsE%2BDTVwtfoeYo5GKYrqnJW62jVRv2W8dr4WAjhUV3B8hTY3klrBlxe%2FUVmtyIJjwOCq95ci3iZCvdYdYjJrsEd5li%2Btq7mNeIGg1XognKz4uKNZFKK2CHkfCoSAwmGNyPXwQG58BbUx4U2cwoZaMi%2B9a0Tog2dkMQTYCtOvoAsTsOs2s9Z6YLNBVx6pcSzA45WFE7nFAUbuWWYi4zagL4bCH0D6fng91lV0hUVHkQUqmp75bQmtyJ1n1kI0emoGvIUPd%2Bu%2BZ7x0Qw%2FQzsCepsOi%2Fw0HR144ObU1pMVEkmPlzhh4k6OnifWrGcw376m%2FSYIH6c%2FbeSg0xkuKlJh%2FQSo9Z%2F2N9wINLpV9nY2xN18mrlIlG2facjnVksCGOI0VMHbTYliUaB%2BgAKjM8BZPm4z2jj2PnFikBPFjC2iB368gBLu7YeUyhr%2FkkATC0S%2F8zXPwVhKp8UO9X%2F%2FsSmp%2FwUBgBBhcN5yNEbEGaka9VMbGptWvrEFHD1GMsy%2Bu1iBT6vjMDETqmQ0S77usYRXcZDVxn0%2BxEGr2NfefYw7HqIP3Oy0aXQQApafLTwx46yL50j3XSiiMJH7tL8GOqUBoq%2FXttTd4X6rWJOrmpcHNOmyDTBgtPYCZfvCMXN8egzHn5sfElIYrzbHRANM0Xjs7QK58eaMf6a32rRM91yyFJ2crMGBkPizACQzTnS%2Bd75XfDz1IuJKrwcmzF1qCHuJXkRBeUVtyBp3nFw%2BmECGDnDbcIRuXXmA6oz%2BA9h2P3WbnB3qrg6YS4pZ9wd8bZAiMhykRwNzbLet0sFoSt1uppbLjRIE&X-Amz-Signature=931c5a8732de07962566cf12b9418bf308448711d8840047c85582c7960cffb0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
