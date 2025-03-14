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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRU75A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kkcSF41csWsL0ftvAYloXUagrX6d0WNJNba1GEjpDQIgUvvwuHPHlYJZ895jhdrW5gpmOrDYQGCxF%2Bmh1rNyaiEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJB%2FiyOO6n06DeN3CrcA3q5QM8Zb1R%2Bp4IeizL5HZ73aPehG0umIf%2BoMerVUOmeJe9O%2FpNq1qAyresKw%2FzdcxZesJxeLw6uOD06kVutJ7faid%2BV6ShG43qyZHBmuaxEKxV1cRAE7msx4XDtOas3%2BlEomOKkfVWCVFhuUal38GEghN2bb4vWdDJf75tAbNz4UG6OGzWPuamr%2FXz5ASUmf1VBMZrJ8MxCA7gdv9uLiX8oGnpBgrm9yXKkDUUQcPx%2F25yw9coYHqGDvttl9QpMx1IAsIGSb56Rnpbv9Cz1AcjDvxuCvDjDrivMDBqjO%2FvagrpaeQwtuAP3fWsADipbaqT2pUvRZWsLbqvsoZUcsMQ9xyTHY7j2KxNrbYWufoWluwJC398n3WlcESzhLFwG1qnS8JO057FpbB8J%2BjWoSaRRhKqnQ8kKUD6C4CSmrq1pHFxL2ffvt%2BMIVwizOGOZ9XZo4TJDBZY6vGhSAnL3rH8e9FvmLu%2FeuTE48xJkWkub5ou4BbkET7nHmLZH54NCCnXEZ0fl2jJrCW1myEAAsUxnYfahc%2B2hPIOaykDWcnQ0xXqDi%2BJTfuWwhRhYmIVnD1lf7MDibLdq%2Bwm05v4Gn8DkQuZARUH5IrL9kZbZrfdZwpQh1L0b6xezGQ6BMK7oz74GOqUBmUNemz3ViRdoHx5EKlj2st%2BweG2IQQGR9aGQpcVOqFfowgEfBVb9vqMi45wUJNz7dMYwUFg7dTTOpi0jnmzNDndGIEMXnSOdmryw31jJAN1JoNkQJKYfd3gp8RTRzvHH69Yt79uBoEQ0Z42n4iQ0VrTgYiZ3acBiC9%2FjTjxQayToqraVTqDxaXxLp%2FY3VmECS7%2BLvCgQx8ogR6vRnvmfhlh7h9O4&X-Amz-Signature=ec2bc6bab0901440f873df5c01e5582db8c575e4a84d4f5b0d706e1f3b56af54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRU75A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kkcSF41csWsL0ftvAYloXUagrX6d0WNJNba1GEjpDQIgUvvwuHPHlYJZ895jhdrW5gpmOrDYQGCxF%2Bmh1rNyaiEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJB%2FiyOO6n06DeN3CrcA3q5QM8Zb1R%2Bp4IeizL5HZ73aPehG0umIf%2BoMerVUOmeJe9O%2FpNq1qAyresKw%2FzdcxZesJxeLw6uOD06kVutJ7faid%2BV6ShG43qyZHBmuaxEKxV1cRAE7msx4XDtOas3%2BlEomOKkfVWCVFhuUal38GEghN2bb4vWdDJf75tAbNz4UG6OGzWPuamr%2FXz5ASUmf1VBMZrJ8MxCA7gdv9uLiX8oGnpBgrm9yXKkDUUQcPx%2F25yw9coYHqGDvttl9QpMx1IAsIGSb56Rnpbv9Cz1AcjDvxuCvDjDrivMDBqjO%2FvagrpaeQwtuAP3fWsADipbaqT2pUvRZWsLbqvsoZUcsMQ9xyTHY7j2KxNrbYWufoWluwJC398n3WlcESzhLFwG1qnS8JO057FpbB8J%2BjWoSaRRhKqnQ8kKUD6C4CSmrq1pHFxL2ffvt%2BMIVwizOGOZ9XZo4TJDBZY6vGhSAnL3rH8e9FvmLu%2FeuTE48xJkWkub5ou4BbkET7nHmLZH54NCCnXEZ0fl2jJrCW1myEAAsUxnYfahc%2B2hPIOaykDWcnQ0xXqDi%2BJTfuWwhRhYmIVnD1lf7MDibLdq%2Bwm05v4Gn8DkQuZARUH5IrL9kZbZrfdZwpQh1L0b6xezGQ6BMK7oz74GOqUBmUNemz3ViRdoHx5EKlj2st%2BweG2IQQGR9aGQpcVOqFfowgEfBVb9vqMi45wUJNz7dMYwUFg7dTTOpi0jnmzNDndGIEMXnSOdmryw31jJAN1JoNkQJKYfd3gp8RTRzvHH69Yt79uBoEQ0Z42n4iQ0VrTgYiZ3acBiC9%2FjTjxQayToqraVTqDxaXxLp%2FY3VmECS7%2BLvCgQx8ogR6vRnvmfhlh7h9O4&X-Amz-Signature=0aef1fb7d01284c3405599b6ad048e413125c05b4409957f0e031102e4ef2821&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRU75A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kkcSF41csWsL0ftvAYloXUagrX6d0WNJNba1GEjpDQIgUvvwuHPHlYJZ895jhdrW5gpmOrDYQGCxF%2Bmh1rNyaiEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJB%2FiyOO6n06DeN3CrcA3q5QM8Zb1R%2Bp4IeizL5HZ73aPehG0umIf%2BoMerVUOmeJe9O%2FpNq1qAyresKw%2FzdcxZesJxeLw6uOD06kVutJ7faid%2BV6ShG43qyZHBmuaxEKxV1cRAE7msx4XDtOas3%2BlEomOKkfVWCVFhuUal38GEghN2bb4vWdDJf75tAbNz4UG6OGzWPuamr%2FXz5ASUmf1VBMZrJ8MxCA7gdv9uLiX8oGnpBgrm9yXKkDUUQcPx%2F25yw9coYHqGDvttl9QpMx1IAsIGSb56Rnpbv9Cz1AcjDvxuCvDjDrivMDBqjO%2FvagrpaeQwtuAP3fWsADipbaqT2pUvRZWsLbqvsoZUcsMQ9xyTHY7j2KxNrbYWufoWluwJC398n3WlcESzhLFwG1qnS8JO057FpbB8J%2BjWoSaRRhKqnQ8kKUD6C4CSmrq1pHFxL2ffvt%2BMIVwizOGOZ9XZo4TJDBZY6vGhSAnL3rH8e9FvmLu%2FeuTE48xJkWkub5ou4BbkET7nHmLZH54NCCnXEZ0fl2jJrCW1myEAAsUxnYfahc%2B2hPIOaykDWcnQ0xXqDi%2BJTfuWwhRhYmIVnD1lf7MDibLdq%2Bwm05v4Gn8DkQuZARUH5IrL9kZbZrfdZwpQh1L0b6xezGQ6BMK7oz74GOqUBmUNemz3ViRdoHx5EKlj2st%2BweG2IQQGR9aGQpcVOqFfowgEfBVb9vqMi45wUJNz7dMYwUFg7dTTOpi0jnmzNDndGIEMXnSOdmryw31jJAN1JoNkQJKYfd3gp8RTRzvHH69Yt79uBoEQ0Z42n4iQ0VrTgYiZ3acBiC9%2FjTjxQayToqraVTqDxaXxLp%2FY3VmECS7%2BLvCgQx8ogR6vRnvmfhlh7h9O4&X-Amz-Signature=c51b2fbc236783794dca6b9ba6c4a7b4c3e1e9d600b4ba382591787b1244dcef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRU75A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kkcSF41csWsL0ftvAYloXUagrX6d0WNJNba1GEjpDQIgUvvwuHPHlYJZ895jhdrW5gpmOrDYQGCxF%2Bmh1rNyaiEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJB%2FiyOO6n06DeN3CrcA3q5QM8Zb1R%2Bp4IeizL5HZ73aPehG0umIf%2BoMerVUOmeJe9O%2FpNq1qAyresKw%2FzdcxZesJxeLw6uOD06kVutJ7faid%2BV6ShG43qyZHBmuaxEKxV1cRAE7msx4XDtOas3%2BlEomOKkfVWCVFhuUal38GEghN2bb4vWdDJf75tAbNz4UG6OGzWPuamr%2FXz5ASUmf1VBMZrJ8MxCA7gdv9uLiX8oGnpBgrm9yXKkDUUQcPx%2F25yw9coYHqGDvttl9QpMx1IAsIGSb56Rnpbv9Cz1AcjDvxuCvDjDrivMDBqjO%2FvagrpaeQwtuAP3fWsADipbaqT2pUvRZWsLbqvsoZUcsMQ9xyTHY7j2KxNrbYWufoWluwJC398n3WlcESzhLFwG1qnS8JO057FpbB8J%2BjWoSaRRhKqnQ8kKUD6C4CSmrq1pHFxL2ffvt%2BMIVwizOGOZ9XZo4TJDBZY6vGhSAnL3rH8e9FvmLu%2FeuTE48xJkWkub5ou4BbkET7nHmLZH54NCCnXEZ0fl2jJrCW1myEAAsUxnYfahc%2B2hPIOaykDWcnQ0xXqDi%2BJTfuWwhRhYmIVnD1lf7MDibLdq%2Bwm05v4Gn8DkQuZARUH5IrL9kZbZrfdZwpQh1L0b6xezGQ6BMK7oz74GOqUBmUNemz3ViRdoHx5EKlj2st%2BweG2IQQGR9aGQpcVOqFfowgEfBVb9vqMi45wUJNz7dMYwUFg7dTTOpi0jnmzNDndGIEMXnSOdmryw31jJAN1JoNkQJKYfd3gp8RTRzvHH69Yt79uBoEQ0Z42n4iQ0VrTgYiZ3acBiC9%2FjTjxQayToqraVTqDxaXxLp%2FY3VmECS7%2BLvCgQx8ogR6vRnvmfhlh7h9O4&X-Amz-Signature=d83a36a265ee34ff79727e5929bcded10a03994e77b458acdd080f4e7b094bee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRU75A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kkcSF41csWsL0ftvAYloXUagrX6d0WNJNba1GEjpDQIgUvvwuHPHlYJZ895jhdrW5gpmOrDYQGCxF%2Bmh1rNyaiEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJB%2FiyOO6n06DeN3CrcA3q5QM8Zb1R%2Bp4IeizL5HZ73aPehG0umIf%2BoMerVUOmeJe9O%2FpNq1qAyresKw%2FzdcxZesJxeLw6uOD06kVutJ7faid%2BV6ShG43qyZHBmuaxEKxV1cRAE7msx4XDtOas3%2BlEomOKkfVWCVFhuUal38GEghN2bb4vWdDJf75tAbNz4UG6OGzWPuamr%2FXz5ASUmf1VBMZrJ8MxCA7gdv9uLiX8oGnpBgrm9yXKkDUUQcPx%2F25yw9coYHqGDvttl9QpMx1IAsIGSb56Rnpbv9Cz1AcjDvxuCvDjDrivMDBqjO%2FvagrpaeQwtuAP3fWsADipbaqT2pUvRZWsLbqvsoZUcsMQ9xyTHY7j2KxNrbYWufoWluwJC398n3WlcESzhLFwG1qnS8JO057FpbB8J%2BjWoSaRRhKqnQ8kKUD6C4CSmrq1pHFxL2ffvt%2BMIVwizOGOZ9XZo4TJDBZY6vGhSAnL3rH8e9FvmLu%2FeuTE48xJkWkub5ou4BbkET7nHmLZH54NCCnXEZ0fl2jJrCW1myEAAsUxnYfahc%2B2hPIOaykDWcnQ0xXqDi%2BJTfuWwhRhYmIVnD1lf7MDibLdq%2Bwm05v4Gn8DkQuZARUH5IrL9kZbZrfdZwpQh1L0b6xezGQ6BMK7oz74GOqUBmUNemz3ViRdoHx5EKlj2st%2BweG2IQQGR9aGQpcVOqFfowgEfBVb9vqMi45wUJNz7dMYwUFg7dTTOpi0jnmzNDndGIEMXnSOdmryw31jJAN1JoNkQJKYfd3gp8RTRzvHH69Yt79uBoEQ0Z42n4iQ0VrTgYiZ3acBiC9%2FjTjxQayToqraVTqDxaXxLp%2FY3VmECS7%2BLvCgQx8ogR6vRnvmfhlh7h9O4&X-Amz-Signature=55f9684fcf0ce0029c3631fa2ede4c086d8e31e4c11133a03d7d50092feec98e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRU75A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kkcSF41csWsL0ftvAYloXUagrX6d0WNJNba1GEjpDQIgUvvwuHPHlYJZ895jhdrW5gpmOrDYQGCxF%2Bmh1rNyaiEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJB%2FiyOO6n06DeN3CrcA3q5QM8Zb1R%2Bp4IeizL5HZ73aPehG0umIf%2BoMerVUOmeJe9O%2FpNq1qAyresKw%2FzdcxZesJxeLw6uOD06kVutJ7faid%2BV6ShG43qyZHBmuaxEKxV1cRAE7msx4XDtOas3%2BlEomOKkfVWCVFhuUal38GEghN2bb4vWdDJf75tAbNz4UG6OGzWPuamr%2FXz5ASUmf1VBMZrJ8MxCA7gdv9uLiX8oGnpBgrm9yXKkDUUQcPx%2F25yw9coYHqGDvttl9QpMx1IAsIGSb56Rnpbv9Cz1AcjDvxuCvDjDrivMDBqjO%2FvagrpaeQwtuAP3fWsADipbaqT2pUvRZWsLbqvsoZUcsMQ9xyTHY7j2KxNrbYWufoWluwJC398n3WlcESzhLFwG1qnS8JO057FpbB8J%2BjWoSaRRhKqnQ8kKUD6C4CSmrq1pHFxL2ffvt%2BMIVwizOGOZ9XZo4TJDBZY6vGhSAnL3rH8e9FvmLu%2FeuTE48xJkWkub5ou4BbkET7nHmLZH54NCCnXEZ0fl2jJrCW1myEAAsUxnYfahc%2B2hPIOaykDWcnQ0xXqDi%2BJTfuWwhRhYmIVnD1lf7MDibLdq%2Bwm05v4Gn8DkQuZARUH5IrL9kZbZrfdZwpQh1L0b6xezGQ6BMK7oz74GOqUBmUNemz3ViRdoHx5EKlj2st%2BweG2IQQGR9aGQpcVOqFfowgEfBVb9vqMi45wUJNz7dMYwUFg7dTTOpi0jnmzNDndGIEMXnSOdmryw31jJAN1JoNkQJKYfd3gp8RTRzvHH69Yt79uBoEQ0Z42n4iQ0VrTgYiZ3acBiC9%2FjTjxQayToqraVTqDxaXxLp%2FY3VmECS7%2BLvCgQx8ogR6vRnvmfhlh7h9O4&X-Amz-Signature=e6889d6be446e777de66c4f12dc9122baf0c3ad1b5de5be3e16df01efad287cf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XRU75A%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kkcSF41csWsL0ftvAYloXUagrX6d0WNJNba1GEjpDQIgUvvwuHPHlYJZ895jhdrW5gpmOrDYQGCxF%2Bmh1rNyaiEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJB%2FiyOO6n06DeN3CrcA3q5QM8Zb1R%2Bp4IeizL5HZ73aPehG0umIf%2BoMerVUOmeJe9O%2FpNq1qAyresKw%2FzdcxZesJxeLw6uOD06kVutJ7faid%2BV6ShG43qyZHBmuaxEKxV1cRAE7msx4XDtOas3%2BlEomOKkfVWCVFhuUal38GEghN2bb4vWdDJf75tAbNz4UG6OGzWPuamr%2FXz5ASUmf1VBMZrJ8MxCA7gdv9uLiX8oGnpBgrm9yXKkDUUQcPx%2F25yw9coYHqGDvttl9QpMx1IAsIGSb56Rnpbv9Cz1AcjDvxuCvDjDrivMDBqjO%2FvagrpaeQwtuAP3fWsADipbaqT2pUvRZWsLbqvsoZUcsMQ9xyTHY7j2KxNrbYWufoWluwJC398n3WlcESzhLFwG1qnS8JO057FpbB8J%2BjWoSaRRhKqnQ8kKUD6C4CSmrq1pHFxL2ffvt%2BMIVwizOGOZ9XZo4TJDBZY6vGhSAnL3rH8e9FvmLu%2FeuTE48xJkWkub5ou4BbkET7nHmLZH54NCCnXEZ0fl2jJrCW1myEAAsUxnYfahc%2B2hPIOaykDWcnQ0xXqDi%2BJTfuWwhRhYmIVnD1lf7MDibLdq%2Bwm05v4Gn8DkQuZARUH5IrL9kZbZrfdZwpQh1L0b6xezGQ6BMK7oz74GOqUBmUNemz3ViRdoHx5EKlj2st%2BweG2IQQGR9aGQpcVOqFfowgEfBVb9vqMi45wUJNz7dMYwUFg7dTTOpi0jnmzNDndGIEMXnSOdmryw31jJAN1JoNkQJKYfd3gp8RTRzvHH69Yt79uBoEQ0Z42n4iQ0VrTgYiZ3acBiC9%2FjTjxQayToqraVTqDxaXxLp%2FY3VmECS7%2BLvCgQx8ogR6vRnvmfhlh7h9O4&X-Amz-Signature=2be958898ac28bec7e1c5f1a69e8ccc8f54fd069bc9aaafc19b63f1f6442b41c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
