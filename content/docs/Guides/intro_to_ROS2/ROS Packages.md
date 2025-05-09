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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMV75OHI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID70RlzZmPHnU7jcG0ZstpHnT6EkDD0xYwRH3I%2BLvu96AiEAoRYus235EAV8DT5mZ%2FVh6SJLUUD5VI2zpzFWkrhNUQ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvjmiUbPNqqOtnsircA1ZTK9aWmp%2B8piBaSnce1uyJ%2FRZdJ40McpCU0lNLJAbm54yCNDZHSZ%2Fs4xz7sWlutd9fJN9oXFOlx9JNBhKDX4F%2FU9EZr0qB3yF7uQZELCOtNAp5s9gwiqmK4ilphduKXy94I2EDb%2F3aUK1a4lAS5466FS9TeIxqQYrfaJ1Z%2BL1zr0s20csIbwj8T4H050PCqALFylPvtBfqQUqUbLeS%2Bd5jKQLAjop2Qq8N0lTFgtCkjDPUlQJaS3Hhv6NQGmjfh%2BC5uxLlfysSunynSzTp5ws96vEskozJ1TcGnGORsdvrOIfT4T9Fl8YEcKADcS0gEGq10JnFN%2BcBsOlI5usoIEoPK%2Fk6effuqYk%2FbktjviYye0Vyi%2FyrRlXgi4Q7jSK%2BEl9hK4f%2BuIRbKjrz%2F1K0PhHSeYub72Tk4PirFxgs1dN2t5Z23vL6jIfoLD1AffR2uEAV%2BKo9ftkBAMK%2F7FwpGPTTd7VG49Qq0TwWVrwyQ4DR1yjJjZrrf1ZgTJ5m6AioImVvxc%2F%2FZDjmvL1pU1XFYtykzDxq4ulm%2F4JdzlphLBnyrgYiAdmRQjv6YlOGuP9N%2Fooi6yaCD0yzG92Fn4anQRtDzljtfz8NwEx%2B8l%2Bp6S3DO5W9ZXa3o2sIvHP4MPij%2BMAGOqUBsLxpZb1C9lxH3Jklxalj1nFscScMW%2BqCxVh%2BATQdcqTfxUavlR4aikWHZqtzuuw9njAP2JR16xEGCDVvduSoF4MukPoh5BKfODjNPQii5OCCo6xSAgbZGr9B1P7kx3ONqLsLPH5Xp4uPMdtxlsHIinD0%2BjGiTKYDjX2SpB3j3%2Fs4ExYjNjzqxV0VrxrsRt%2Bjh%2BBvalp4%2BBZ2PqH5PQ40hx3cT2hz&X-Amz-Signature=dd61dac93967a4e99e7791ac629bd8451ce9be953627168acd7aab1626b3d35d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMV75OHI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID70RlzZmPHnU7jcG0ZstpHnT6EkDD0xYwRH3I%2BLvu96AiEAoRYus235EAV8DT5mZ%2FVh6SJLUUD5VI2zpzFWkrhNUQ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvjmiUbPNqqOtnsircA1ZTK9aWmp%2B8piBaSnce1uyJ%2FRZdJ40McpCU0lNLJAbm54yCNDZHSZ%2Fs4xz7sWlutd9fJN9oXFOlx9JNBhKDX4F%2FU9EZr0qB3yF7uQZELCOtNAp5s9gwiqmK4ilphduKXy94I2EDb%2F3aUK1a4lAS5466FS9TeIxqQYrfaJ1Z%2BL1zr0s20csIbwj8T4H050PCqALFylPvtBfqQUqUbLeS%2Bd5jKQLAjop2Qq8N0lTFgtCkjDPUlQJaS3Hhv6NQGmjfh%2BC5uxLlfysSunynSzTp5ws96vEskozJ1TcGnGORsdvrOIfT4T9Fl8YEcKADcS0gEGq10JnFN%2BcBsOlI5usoIEoPK%2Fk6effuqYk%2FbktjviYye0Vyi%2FyrRlXgi4Q7jSK%2BEl9hK4f%2BuIRbKjrz%2F1K0PhHSeYub72Tk4PirFxgs1dN2t5Z23vL6jIfoLD1AffR2uEAV%2BKo9ftkBAMK%2F7FwpGPTTd7VG49Qq0TwWVrwyQ4DR1yjJjZrrf1ZgTJ5m6AioImVvxc%2F%2FZDjmvL1pU1XFYtykzDxq4ulm%2F4JdzlphLBnyrgYiAdmRQjv6YlOGuP9N%2Fooi6yaCD0yzG92Fn4anQRtDzljtfz8NwEx%2B8l%2Bp6S3DO5W9ZXa3o2sIvHP4MPij%2BMAGOqUBsLxpZb1C9lxH3Jklxalj1nFscScMW%2BqCxVh%2BATQdcqTfxUavlR4aikWHZqtzuuw9njAP2JR16xEGCDVvduSoF4MukPoh5BKfODjNPQii5OCCo6xSAgbZGr9B1P7kx3ONqLsLPH5Xp4uPMdtxlsHIinD0%2BjGiTKYDjX2SpB3j3%2Fs4ExYjNjzqxV0VrxrsRt%2Bjh%2BBvalp4%2BBZ2PqH5PQ40hx3cT2hz&X-Amz-Signature=a399645822d5b464d25f75f7ba6dbc3afb868e9612f2523e9f2742d7f49480b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMV75OHI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID70RlzZmPHnU7jcG0ZstpHnT6EkDD0xYwRH3I%2BLvu96AiEAoRYus235EAV8DT5mZ%2FVh6SJLUUD5VI2zpzFWkrhNUQ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvjmiUbPNqqOtnsircA1ZTK9aWmp%2B8piBaSnce1uyJ%2FRZdJ40McpCU0lNLJAbm54yCNDZHSZ%2Fs4xz7sWlutd9fJN9oXFOlx9JNBhKDX4F%2FU9EZr0qB3yF7uQZELCOtNAp5s9gwiqmK4ilphduKXy94I2EDb%2F3aUK1a4lAS5466FS9TeIxqQYrfaJ1Z%2BL1zr0s20csIbwj8T4H050PCqALFylPvtBfqQUqUbLeS%2Bd5jKQLAjop2Qq8N0lTFgtCkjDPUlQJaS3Hhv6NQGmjfh%2BC5uxLlfysSunynSzTp5ws96vEskozJ1TcGnGORsdvrOIfT4T9Fl8YEcKADcS0gEGq10JnFN%2BcBsOlI5usoIEoPK%2Fk6effuqYk%2FbktjviYye0Vyi%2FyrRlXgi4Q7jSK%2BEl9hK4f%2BuIRbKjrz%2F1K0PhHSeYub72Tk4PirFxgs1dN2t5Z23vL6jIfoLD1AffR2uEAV%2BKo9ftkBAMK%2F7FwpGPTTd7VG49Qq0TwWVrwyQ4DR1yjJjZrrf1ZgTJ5m6AioImVvxc%2F%2FZDjmvL1pU1XFYtykzDxq4ulm%2F4JdzlphLBnyrgYiAdmRQjv6YlOGuP9N%2Fooi6yaCD0yzG92Fn4anQRtDzljtfz8NwEx%2B8l%2Bp6S3DO5W9ZXa3o2sIvHP4MPij%2BMAGOqUBsLxpZb1C9lxH3Jklxalj1nFscScMW%2BqCxVh%2BATQdcqTfxUavlR4aikWHZqtzuuw9njAP2JR16xEGCDVvduSoF4MukPoh5BKfODjNPQii5OCCo6xSAgbZGr9B1P7kx3ONqLsLPH5Xp4uPMdtxlsHIinD0%2BjGiTKYDjX2SpB3j3%2Fs4ExYjNjzqxV0VrxrsRt%2Bjh%2BBvalp4%2BBZ2PqH5PQ40hx3cT2hz&X-Amz-Signature=def36c53b22c4ac080cc280af4da84b2928bb8452db2ed5b0dcdb39f99af643e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMV75OHI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID70RlzZmPHnU7jcG0ZstpHnT6EkDD0xYwRH3I%2BLvu96AiEAoRYus235EAV8DT5mZ%2FVh6SJLUUD5VI2zpzFWkrhNUQ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvjmiUbPNqqOtnsircA1ZTK9aWmp%2B8piBaSnce1uyJ%2FRZdJ40McpCU0lNLJAbm54yCNDZHSZ%2Fs4xz7sWlutd9fJN9oXFOlx9JNBhKDX4F%2FU9EZr0qB3yF7uQZELCOtNAp5s9gwiqmK4ilphduKXy94I2EDb%2F3aUK1a4lAS5466FS9TeIxqQYrfaJ1Z%2BL1zr0s20csIbwj8T4H050PCqALFylPvtBfqQUqUbLeS%2Bd5jKQLAjop2Qq8N0lTFgtCkjDPUlQJaS3Hhv6NQGmjfh%2BC5uxLlfysSunynSzTp5ws96vEskozJ1TcGnGORsdvrOIfT4T9Fl8YEcKADcS0gEGq10JnFN%2BcBsOlI5usoIEoPK%2Fk6effuqYk%2FbktjviYye0Vyi%2FyrRlXgi4Q7jSK%2BEl9hK4f%2BuIRbKjrz%2F1K0PhHSeYub72Tk4PirFxgs1dN2t5Z23vL6jIfoLD1AffR2uEAV%2BKo9ftkBAMK%2F7FwpGPTTd7VG49Qq0TwWVrwyQ4DR1yjJjZrrf1ZgTJ5m6AioImVvxc%2F%2FZDjmvL1pU1XFYtykzDxq4ulm%2F4JdzlphLBnyrgYiAdmRQjv6YlOGuP9N%2Fooi6yaCD0yzG92Fn4anQRtDzljtfz8NwEx%2B8l%2Bp6S3DO5W9ZXa3o2sIvHP4MPij%2BMAGOqUBsLxpZb1C9lxH3Jklxalj1nFscScMW%2BqCxVh%2BATQdcqTfxUavlR4aikWHZqtzuuw9njAP2JR16xEGCDVvduSoF4MukPoh5BKfODjNPQii5OCCo6xSAgbZGr9B1P7kx3ONqLsLPH5Xp4uPMdtxlsHIinD0%2BjGiTKYDjX2SpB3j3%2Fs4ExYjNjzqxV0VrxrsRt%2Bjh%2BBvalp4%2BBZ2PqH5PQ40hx3cT2hz&X-Amz-Signature=d2c849e708d3131c9069a3cfafec4ebeb5ff6fe576183992bc3e4b79e2ca20d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMV75OHI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID70RlzZmPHnU7jcG0ZstpHnT6EkDD0xYwRH3I%2BLvu96AiEAoRYus235EAV8DT5mZ%2FVh6SJLUUD5VI2zpzFWkrhNUQ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvjmiUbPNqqOtnsircA1ZTK9aWmp%2B8piBaSnce1uyJ%2FRZdJ40McpCU0lNLJAbm54yCNDZHSZ%2Fs4xz7sWlutd9fJN9oXFOlx9JNBhKDX4F%2FU9EZr0qB3yF7uQZELCOtNAp5s9gwiqmK4ilphduKXy94I2EDb%2F3aUK1a4lAS5466FS9TeIxqQYrfaJ1Z%2BL1zr0s20csIbwj8T4H050PCqALFylPvtBfqQUqUbLeS%2Bd5jKQLAjop2Qq8N0lTFgtCkjDPUlQJaS3Hhv6NQGmjfh%2BC5uxLlfysSunynSzTp5ws96vEskozJ1TcGnGORsdvrOIfT4T9Fl8YEcKADcS0gEGq10JnFN%2BcBsOlI5usoIEoPK%2Fk6effuqYk%2FbktjviYye0Vyi%2FyrRlXgi4Q7jSK%2BEl9hK4f%2BuIRbKjrz%2F1K0PhHSeYub72Tk4PirFxgs1dN2t5Z23vL6jIfoLD1AffR2uEAV%2BKo9ftkBAMK%2F7FwpGPTTd7VG49Qq0TwWVrwyQ4DR1yjJjZrrf1ZgTJ5m6AioImVvxc%2F%2FZDjmvL1pU1XFYtykzDxq4ulm%2F4JdzlphLBnyrgYiAdmRQjv6YlOGuP9N%2Fooi6yaCD0yzG92Fn4anQRtDzljtfz8NwEx%2B8l%2Bp6S3DO5W9ZXa3o2sIvHP4MPij%2BMAGOqUBsLxpZb1C9lxH3Jklxalj1nFscScMW%2BqCxVh%2BATQdcqTfxUavlR4aikWHZqtzuuw9njAP2JR16xEGCDVvduSoF4MukPoh5BKfODjNPQii5OCCo6xSAgbZGr9B1P7kx3ONqLsLPH5Xp4uPMdtxlsHIinD0%2BjGiTKYDjX2SpB3j3%2Fs4ExYjNjzqxV0VrxrsRt%2Bjh%2BBvalp4%2BBZ2PqH5PQ40hx3cT2hz&X-Amz-Signature=ffc32ff8ea20db1ade96b80b6ceb35f30f2b24b4a639e88f2cba05bbb9253246&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMV75OHI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID70RlzZmPHnU7jcG0ZstpHnT6EkDD0xYwRH3I%2BLvu96AiEAoRYus235EAV8DT5mZ%2FVh6SJLUUD5VI2zpzFWkrhNUQ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvjmiUbPNqqOtnsircA1ZTK9aWmp%2B8piBaSnce1uyJ%2FRZdJ40McpCU0lNLJAbm54yCNDZHSZ%2Fs4xz7sWlutd9fJN9oXFOlx9JNBhKDX4F%2FU9EZr0qB3yF7uQZELCOtNAp5s9gwiqmK4ilphduKXy94I2EDb%2F3aUK1a4lAS5466FS9TeIxqQYrfaJ1Z%2BL1zr0s20csIbwj8T4H050PCqALFylPvtBfqQUqUbLeS%2Bd5jKQLAjop2Qq8N0lTFgtCkjDPUlQJaS3Hhv6NQGmjfh%2BC5uxLlfysSunynSzTp5ws96vEskozJ1TcGnGORsdvrOIfT4T9Fl8YEcKADcS0gEGq10JnFN%2BcBsOlI5usoIEoPK%2Fk6effuqYk%2FbktjviYye0Vyi%2FyrRlXgi4Q7jSK%2BEl9hK4f%2BuIRbKjrz%2F1K0PhHSeYub72Tk4PirFxgs1dN2t5Z23vL6jIfoLD1AffR2uEAV%2BKo9ftkBAMK%2F7FwpGPTTd7VG49Qq0TwWVrwyQ4DR1yjJjZrrf1ZgTJ5m6AioImVvxc%2F%2FZDjmvL1pU1XFYtykzDxq4ulm%2F4JdzlphLBnyrgYiAdmRQjv6YlOGuP9N%2Fooi6yaCD0yzG92Fn4anQRtDzljtfz8NwEx%2B8l%2Bp6S3DO5W9ZXa3o2sIvHP4MPij%2BMAGOqUBsLxpZb1C9lxH3Jklxalj1nFscScMW%2BqCxVh%2BATQdcqTfxUavlR4aikWHZqtzuuw9njAP2JR16xEGCDVvduSoF4MukPoh5BKfODjNPQii5OCCo6xSAgbZGr9B1P7kx3ONqLsLPH5Xp4uPMdtxlsHIinD0%2BjGiTKYDjX2SpB3j3%2Fs4ExYjNjzqxV0VrxrsRt%2Bjh%2BBvalp4%2BBZ2PqH5PQ40hx3cT2hz&X-Amz-Signature=29cdd5ccb7753bd6d65f6267f9b945b7eaec85236c4b56bef0c45d3b19777113&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMV75OHI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID70RlzZmPHnU7jcG0ZstpHnT6EkDD0xYwRH3I%2BLvu96AiEAoRYus235EAV8DT5mZ%2FVh6SJLUUD5VI2zpzFWkrhNUQ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKvjmiUbPNqqOtnsircA1ZTK9aWmp%2B8piBaSnce1uyJ%2FRZdJ40McpCU0lNLJAbm54yCNDZHSZ%2Fs4xz7sWlutd9fJN9oXFOlx9JNBhKDX4F%2FU9EZr0qB3yF7uQZELCOtNAp5s9gwiqmK4ilphduKXy94I2EDb%2F3aUK1a4lAS5466FS9TeIxqQYrfaJ1Z%2BL1zr0s20csIbwj8T4H050PCqALFylPvtBfqQUqUbLeS%2Bd5jKQLAjop2Qq8N0lTFgtCkjDPUlQJaS3Hhv6NQGmjfh%2BC5uxLlfysSunynSzTp5ws96vEskozJ1TcGnGORsdvrOIfT4T9Fl8YEcKADcS0gEGq10JnFN%2BcBsOlI5usoIEoPK%2Fk6effuqYk%2FbktjviYye0Vyi%2FyrRlXgi4Q7jSK%2BEl9hK4f%2BuIRbKjrz%2F1K0PhHSeYub72Tk4PirFxgs1dN2t5Z23vL6jIfoLD1AffR2uEAV%2BKo9ftkBAMK%2F7FwpGPTTd7VG49Qq0TwWVrwyQ4DR1yjJjZrrf1ZgTJ5m6AioImVvxc%2F%2FZDjmvL1pU1XFYtykzDxq4ulm%2F4JdzlphLBnyrgYiAdmRQjv6YlOGuP9N%2Fooi6yaCD0yzG92Fn4anQRtDzljtfz8NwEx%2B8l%2Bp6S3DO5W9ZXa3o2sIvHP4MPij%2BMAGOqUBsLxpZb1C9lxH3Jklxalj1nFscScMW%2BqCxVh%2BATQdcqTfxUavlR4aikWHZqtzuuw9njAP2JR16xEGCDVvduSoF4MukPoh5BKfODjNPQii5OCCo6xSAgbZGr9B1P7kx3ONqLsLPH5Xp4uPMdtxlsHIinD0%2BjGiTKYDjX2SpB3j3%2Fs4ExYjNjzqxV0VrxrsRt%2Bjh%2BBvalp4%2BBZ2PqH5PQ40hx3cT2hz&X-Amz-Signature=d1ad5d964cb3674dfe152fe2f467c7c4db6e5251d944186dfcad0ce16b40fa1d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
