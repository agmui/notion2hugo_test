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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2INCNV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDax%2Fq73%2BRFO%2BsGqogD4gVyptoB%2BqES2LlWCdNKi9HgAQIgOi7kcC4DDJQzoJNh3pXzOWrrvIitPBDaUzTWjnXwPccqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMEJNZoW4jYkXaF4yrcA2w5EzCSjg8GihQZdvIioqfuWoDg8PvakiZmdATShKAbmo7c7%2F53SFMCtVZd01Gvx7pBr7n5oBe9XoPKaFHZZtP0bOR3jzfsRf2wjy4QRU5li3yycAf5ZZN%2BJ9ik%2BEl94qwoRxHzdB%2FXokuHvnsWclpPFihNy%2FWfOvKRiFI0JfLwhX55KTcGFiB5xJAU869szyhzFEHTjatP9uiQdmNx3%2F%2FcCbVXDX2Y7dVSkNVIohBJSmFL1cEqng30WiMOAr2BWGq%2Be70Y3yVYV4spsvnlUYII7ndJQmbsnWMQdGkV9CipS4QDZhHf8Ar2TbOMC%2FdKPKclNx65bTAAH8eDAwaJ%2Bg%2FLjFBtkggC%2BDFT0GiBg6v9tq1MOhEH5vAoMi048NWbL9ioTGyNTbVDc%2FZdILmoqCZq4rdBAygu3eFYMGoOZ6fPbWutkQ72%2BZKMlHB9Noiw31VbWbtUyvcb6tC8U%2FaiP09SeewjMNXTyRtEKpgZ2E3CTVdCWYLd%2B3sknUBLI9A6BvHNoObzuOWifKjXD%2BYFmcrHzSS6tWzhLL2Kl5i9AflGK9QZTEomgOsJYJ%2FnC4M%2BgrF%2B4PKjXN7c8NCVWSXjI6Rjsh6KMctCljVemn%2BsQFWQIeUWGOu2ypCOVg%2B2MKOEm74GOqUB5s7vD6Jk6JuG16gABEEp1KR2rdXkK8KN9fsScv8r1TMSoS2NBaH4Fq6EK7By3OmB1HvlDnvxIs0RxNaCTyE0XQQ2B%2FW%2F2EtAnoIFxJWJVQ1LAXIsqikpnreIWmCdSsMK7R4B%2B1Wcjo3IfjXqk8XqD9db38k2UK5S7dzEWWAUTg8YVod85P%2B%2B4vAL50J00LIcKs98HpsqRWZT1vdra2ZnxesqJjQf&X-Amz-Signature=29fb6914e4f049d12feda3684b4a18001d2a90fd4aedddf299232f6862e0316a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2INCNV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDax%2Fq73%2BRFO%2BsGqogD4gVyptoB%2BqES2LlWCdNKi9HgAQIgOi7kcC4DDJQzoJNh3pXzOWrrvIitPBDaUzTWjnXwPccqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMEJNZoW4jYkXaF4yrcA2w5EzCSjg8GihQZdvIioqfuWoDg8PvakiZmdATShKAbmo7c7%2F53SFMCtVZd01Gvx7pBr7n5oBe9XoPKaFHZZtP0bOR3jzfsRf2wjy4QRU5li3yycAf5ZZN%2BJ9ik%2BEl94qwoRxHzdB%2FXokuHvnsWclpPFihNy%2FWfOvKRiFI0JfLwhX55KTcGFiB5xJAU869szyhzFEHTjatP9uiQdmNx3%2F%2FcCbVXDX2Y7dVSkNVIohBJSmFL1cEqng30WiMOAr2BWGq%2Be70Y3yVYV4spsvnlUYII7ndJQmbsnWMQdGkV9CipS4QDZhHf8Ar2TbOMC%2FdKPKclNx65bTAAH8eDAwaJ%2Bg%2FLjFBtkggC%2BDFT0GiBg6v9tq1MOhEH5vAoMi048NWbL9ioTGyNTbVDc%2FZdILmoqCZq4rdBAygu3eFYMGoOZ6fPbWutkQ72%2BZKMlHB9Noiw31VbWbtUyvcb6tC8U%2FaiP09SeewjMNXTyRtEKpgZ2E3CTVdCWYLd%2B3sknUBLI9A6BvHNoObzuOWifKjXD%2BYFmcrHzSS6tWzhLL2Kl5i9AflGK9QZTEomgOsJYJ%2FnC4M%2BgrF%2B4PKjXN7c8NCVWSXjI6Rjsh6KMctCljVemn%2BsQFWQIeUWGOu2ypCOVg%2B2MKOEm74GOqUB5s7vD6Jk6JuG16gABEEp1KR2rdXkK8KN9fsScv8r1TMSoS2NBaH4Fq6EK7By3OmB1HvlDnvxIs0RxNaCTyE0XQQ2B%2FW%2F2EtAnoIFxJWJVQ1LAXIsqikpnreIWmCdSsMK7R4B%2B1Wcjo3IfjXqk8XqD9db38k2UK5S7dzEWWAUTg8YVod85P%2B%2B4vAL50J00LIcKs98HpsqRWZT1vdra2ZnxesqJjQf&X-Amz-Signature=3558ec3e4d827d81b5fd849b94a33a59ea20bbb7c539e8af738e1a610a4218d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2INCNV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDax%2Fq73%2BRFO%2BsGqogD4gVyptoB%2BqES2LlWCdNKi9HgAQIgOi7kcC4DDJQzoJNh3pXzOWrrvIitPBDaUzTWjnXwPccqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMEJNZoW4jYkXaF4yrcA2w5EzCSjg8GihQZdvIioqfuWoDg8PvakiZmdATShKAbmo7c7%2F53SFMCtVZd01Gvx7pBr7n5oBe9XoPKaFHZZtP0bOR3jzfsRf2wjy4QRU5li3yycAf5ZZN%2BJ9ik%2BEl94qwoRxHzdB%2FXokuHvnsWclpPFihNy%2FWfOvKRiFI0JfLwhX55KTcGFiB5xJAU869szyhzFEHTjatP9uiQdmNx3%2F%2FcCbVXDX2Y7dVSkNVIohBJSmFL1cEqng30WiMOAr2BWGq%2Be70Y3yVYV4spsvnlUYII7ndJQmbsnWMQdGkV9CipS4QDZhHf8Ar2TbOMC%2FdKPKclNx65bTAAH8eDAwaJ%2Bg%2FLjFBtkggC%2BDFT0GiBg6v9tq1MOhEH5vAoMi048NWbL9ioTGyNTbVDc%2FZdILmoqCZq4rdBAygu3eFYMGoOZ6fPbWutkQ72%2BZKMlHB9Noiw31VbWbtUyvcb6tC8U%2FaiP09SeewjMNXTyRtEKpgZ2E3CTVdCWYLd%2B3sknUBLI9A6BvHNoObzuOWifKjXD%2BYFmcrHzSS6tWzhLL2Kl5i9AflGK9QZTEomgOsJYJ%2FnC4M%2BgrF%2B4PKjXN7c8NCVWSXjI6Rjsh6KMctCljVemn%2BsQFWQIeUWGOu2ypCOVg%2B2MKOEm74GOqUB5s7vD6Jk6JuG16gABEEp1KR2rdXkK8KN9fsScv8r1TMSoS2NBaH4Fq6EK7By3OmB1HvlDnvxIs0RxNaCTyE0XQQ2B%2FW%2F2EtAnoIFxJWJVQ1LAXIsqikpnreIWmCdSsMK7R4B%2B1Wcjo3IfjXqk8XqD9db38k2UK5S7dzEWWAUTg8YVod85P%2B%2B4vAL50J00LIcKs98HpsqRWZT1vdra2ZnxesqJjQf&X-Amz-Signature=8cb2c89d2866c54530c376bfd7db863a2f6a7b9e414234d3b1a4ef66c4ed8e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2INCNV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDax%2Fq73%2BRFO%2BsGqogD4gVyptoB%2BqES2LlWCdNKi9HgAQIgOi7kcC4DDJQzoJNh3pXzOWrrvIitPBDaUzTWjnXwPccqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMEJNZoW4jYkXaF4yrcA2w5EzCSjg8GihQZdvIioqfuWoDg8PvakiZmdATShKAbmo7c7%2F53SFMCtVZd01Gvx7pBr7n5oBe9XoPKaFHZZtP0bOR3jzfsRf2wjy4QRU5li3yycAf5ZZN%2BJ9ik%2BEl94qwoRxHzdB%2FXokuHvnsWclpPFihNy%2FWfOvKRiFI0JfLwhX55KTcGFiB5xJAU869szyhzFEHTjatP9uiQdmNx3%2F%2FcCbVXDX2Y7dVSkNVIohBJSmFL1cEqng30WiMOAr2BWGq%2Be70Y3yVYV4spsvnlUYII7ndJQmbsnWMQdGkV9CipS4QDZhHf8Ar2TbOMC%2FdKPKclNx65bTAAH8eDAwaJ%2Bg%2FLjFBtkggC%2BDFT0GiBg6v9tq1MOhEH5vAoMi048NWbL9ioTGyNTbVDc%2FZdILmoqCZq4rdBAygu3eFYMGoOZ6fPbWutkQ72%2BZKMlHB9Noiw31VbWbtUyvcb6tC8U%2FaiP09SeewjMNXTyRtEKpgZ2E3CTVdCWYLd%2B3sknUBLI9A6BvHNoObzuOWifKjXD%2BYFmcrHzSS6tWzhLL2Kl5i9AflGK9QZTEomgOsJYJ%2FnC4M%2BgrF%2B4PKjXN7c8NCVWSXjI6Rjsh6KMctCljVemn%2BsQFWQIeUWGOu2ypCOVg%2B2MKOEm74GOqUB5s7vD6Jk6JuG16gABEEp1KR2rdXkK8KN9fsScv8r1TMSoS2NBaH4Fq6EK7By3OmB1HvlDnvxIs0RxNaCTyE0XQQ2B%2FW%2F2EtAnoIFxJWJVQ1LAXIsqikpnreIWmCdSsMK7R4B%2B1Wcjo3IfjXqk8XqD9db38k2UK5S7dzEWWAUTg8YVod85P%2B%2B4vAL50J00LIcKs98HpsqRWZT1vdra2ZnxesqJjQf&X-Amz-Signature=6307f19c7a39c06a0121ee49ff7ad8f126aad53ac7ee3c4478aa2372a7357906&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2INCNV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDax%2Fq73%2BRFO%2BsGqogD4gVyptoB%2BqES2LlWCdNKi9HgAQIgOi7kcC4DDJQzoJNh3pXzOWrrvIitPBDaUzTWjnXwPccqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMEJNZoW4jYkXaF4yrcA2w5EzCSjg8GihQZdvIioqfuWoDg8PvakiZmdATShKAbmo7c7%2F53SFMCtVZd01Gvx7pBr7n5oBe9XoPKaFHZZtP0bOR3jzfsRf2wjy4QRU5li3yycAf5ZZN%2BJ9ik%2BEl94qwoRxHzdB%2FXokuHvnsWclpPFihNy%2FWfOvKRiFI0JfLwhX55KTcGFiB5xJAU869szyhzFEHTjatP9uiQdmNx3%2F%2FcCbVXDX2Y7dVSkNVIohBJSmFL1cEqng30WiMOAr2BWGq%2Be70Y3yVYV4spsvnlUYII7ndJQmbsnWMQdGkV9CipS4QDZhHf8Ar2TbOMC%2FdKPKclNx65bTAAH8eDAwaJ%2Bg%2FLjFBtkggC%2BDFT0GiBg6v9tq1MOhEH5vAoMi048NWbL9ioTGyNTbVDc%2FZdILmoqCZq4rdBAygu3eFYMGoOZ6fPbWutkQ72%2BZKMlHB9Noiw31VbWbtUyvcb6tC8U%2FaiP09SeewjMNXTyRtEKpgZ2E3CTVdCWYLd%2B3sknUBLI9A6BvHNoObzuOWifKjXD%2BYFmcrHzSS6tWzhLL2Kl5i9AflGK9QZTEomgOsJYJ%2FnC4M%2BgrF%2B4PKjXN7c8NCVWSXjI6Rjsh6KMctCljVemn%2BsQFWQIeUWGOu2ypCOVg%2B2MKOEm74GOqUB5s7vD6Jk6JuG16gABEEp1KR2rdXkK8KN9fsScv8r1TMSoS2NBaH4Fq6EK7By3OmB1HvlDnvxIs0RxNaCTyE0XQQ2B%2FW%2F2EtAnoIFxJWJVQ1LAXIsqikpnreIWmCdSsMK7R4B%2B1Wcjo3IfjXqk8XqD9db38k2UK5S7dzEWWAUTg8YVod85P%2B%2B4vAL50J00LIcKs98HpsqRWZT1vdra2ZnxesqJjQf&X-Amz-Signature=f19c03e4d35eb4b892cecd750a4157e645c00a3f8f1316cbac97dad0ed5d1e55&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2INCNV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDax%2Fq73%2BRFO%2BsGqogD4gVyptoB%2BqES2LlWCdNKi9HgAQIgOi7kcC4DDJQzoJNh3pXzOWrrvIitPBDaUzTWjnXwPccqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMEJNZoW4jYkXaF4yrcA2w5EzCSjg8GihQZdvIioqfuWoDg8PvakiZmdATShKAbmo7c7%2F53SFMCtVZd01Gvx7pBr7n5oBe9XoPKaFHZZtP0bOR3jzfsRf2wjy4QRU5li3yycAf5ZZN%2BJ9ik%2BEl94qwoRxHzdB%2FXokuHvnsWclpPFihNy%2FWfOvKRiFI0JfLwhX55KTcGFiB5xJAU869szyhzFEHTjatP9uiQdmNx3%2F%2FcCbVXDX2Y7dVSkNVIohBJSmFL1cEqng30WiMOAr2BWGq%2Be70Y3yVYV4spsvnlUYII7ndJQmbsnWMQdGkV9CipS4QDZhHf8Ar2TbOMC%2FdKPKclNx65bTAAH8eDAwaJ%2Bg%2FLjFBtkggC%2BDFT0GiBg6v9tq1MOhEH5vAoMi048NWbL9ioTGyNTbVDc%2FZdILmoqCZq4rdBAygu3eFYMGoOZ6fPbWutkQ72%2BZKMlHB9Noiw31VbWbtUyvcb6tC8U%2FaiP09SeewjMNXTyRtEKpgZ2E3CTVdCWYLd%2B3sknUBLI9A6BvHNoObzuOWifKjXD%2BYFmcrHzSS6tWzhLL2Kl5i9AflGK9QZTEomgOsJYJ%2FnC4M%2BgrF%2B4PKjXN7c8NCVWSXjI6Rjsh6KMctCljVemn%2BsQFWQIeUWGOu2ypCOVg%2B2MKOEm74GOqUB5s7vD6Jk6JuG16gABEEp1KR2rdXkK8KN9fsScv8r1TMSoS2NBaH4Fq6EK7By3OmB1HvlDnvxIs0RxNaCTyE0XQQ2B%2FW%2F2EtAnoIFxJWJVQ1LAXIsqikpnreIWmCdSsMK7R4B%2B1Wcjo3IfjXqk8XqD9db38k2UK5S7dzEWWAUTg8YVod85P%2B%2B4vAL50J00LIcKs98HpsqRWZT1vdra2ZnxesqJjQf&X-Amz-Signature=5b141ec400be514329a630aa86e3b4e0f6fa487a8ed363f5297c67e1f79b38d9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2INCNV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDax%2Fq73%2BRFO%2BsGqogD4gVyptoB%2BqES2LlWCdNKi9HgAQIgOi7kcC4DDJQzoJNh3pXzOWrrvIitPBDaUzTWjnXwPccqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMEJNZoW4jYkXaF4yrcA2w5EzCSjg8GihQZdvIioqfuWoDg8PvakiZmdATShKAbmo7c7%2F53SFMCtVZd01Gvx7pBr7n5oBe9XoPKaFHZZtP0bOR3jzfsRf2wjy4QRU5li3yycAf5ZZN%2BJ9ik%2BEl94qwoRxHzdB%2FXokuHvnsWclpPFihNy%2FWfOvKRiFI0JfLwhX55KTcGFiB5xJAU869szyhzFEHTjatP9uiQdmNx3%2F%2FcCbVXDX2Y7dVSkNVIohBJSmFL1cEqng30WiMOAr2BWGq%2Be70Y3yVYV4spsvnlUYII7ndJQmbsnWMQdGkV9CipS4QDZhHf8Ar2TbOMC%2FdKPKclNx65bTAAH8eDAwaJ%2Bg%2FLjFBtkggC%2BDFT0GiBg6v9tq1MOhEH5vAoMi048NWbL9ioTGyNTbVDc%2FZdILmoqCZq4rdBAygu3eFYMGoOZ6fPbWutkQ72%2BZKMlHB9Noiw31VbWbtUyvcb6tC8U%2FaiP09SeewjMNXTyRtEKpgZ2E3CTVdCWYLd%2B3sknUBLI9A6BvHNoObzuOWifKjXD%2BYFmcrHzSS6tWzhLL2Kl5i9AflGK9QZTEomgOsJYJ%2FnC4M%2BgrF%2B4PKjXN7c8NCVWSXjI6Rjsh6KMctCljVemn%2BsQFWQIeUWGOu2ypCOVg%2B2MKOEm74GOqUB5s7vD6Jk6JuG16gABEEp1KR2rdXkK8KN9fsScv8r1TMSoS2NBaH4Fq6EK7By3OmB1HvlDnvxIs0RxNaCTyE0XQQ2B%2FW%2F2EtAnoIFxJWJVQ1LAXIsqikpnreIWmCdSsMK7R4B%2B1Wcjo3IfjXqk8XqD9db38k2UK5S7dzEWWAUTg8YVod85P%2B%2B4vAL50J00LIcKs98HpsqRWZT1vdra2ZnxesqJjQf&X-Amz-Signature=5e75f344a08cac233ee05cb2186e893e962f77dcfd3a316c52e7a6869be9befe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
