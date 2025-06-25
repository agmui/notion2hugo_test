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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWTWLXJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAWq0RCctQsUYbYu6PnWVwWT%2FoweKWcJtdN%2BvKbGotOoAiBgoRin9epAEjl5jH%2BJq2eqtvdZ40funxqILuNbkZJwlCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMLWU6XXFvzzUWoP2PKtwDZ3v6NvI%2BOZBMtWUBxIsU5InO%2B%2BkyqcqwVuTUyQEJA7Kr4YfOCy8ujc91xAuvcEmiod4zRUdNYDNKVzPUqR7fYMs9FcMNVPV3w48246ju8f6khXsVM20mfBGOpTzI2HkwbGpajwUs9xqIjN%2BlciWnWH8HQQYTNE6DA3sXaKMWS9C3M1pg5O6VqMcA8NQ2i24TH%2FOSKVlDTbnYLRf3rAEl0sDeZyD1poJM%2BZrMpMNB5fFy9LxjSxmHKsRrf8jgxVVR0LQBXXNA6EV6YTZJ6%2FgSzNO09tC045NJguMARKwEvQ8G0TIQ8rWN2KiT4479S2%2FzfRMbsVFOekSZRpKTl7j3m9GKwDg0jD6YvDYN6%2FG6%2B8CPX8XY8QiU%2FYehil43WiP8kuLoYDTp5xrIX1EFiQ2No8JPtcI7LoouosyzxNz8CRKnCLCIunNKsbKV2l0CI1GBVZwyTlv4XKVZiFCvXrb%2FAMntAGLPvm62hrSN68HmMwFA6gtAJmcQp1S9YIQ3L8iWROH8D4VeB5nxjb22JuQnmDRWth1TfxAp2SEdy9FKgN6hxzuAHbrAKoP76mi5zphRTKjun1itq9WQBQb8GrLY4eSe8d2xTmzlyPsw7hZuB1DQg2ndTkKIQ0PXQq8wr8LtwgY6pgFoWKwzg%2FMX33MLZj5RR4YB%2FijcN6oUVFOm1LrpZtLEsA82a%2FdPMbdvwjSGBFJvDzrw5i%2FlfETFOJthOd3XI5EZg2yIqJLa7BVIEdpKxC%2BOg83dbNGcDm4vT5rjBYUxZYYHMOBej%2FPKvZh0IKb26KjeE8u9ap3wpKXp0YuDqinuaL%2Foxw4iKab2AcG6sHGc1H2wswFiUijWmgl1FmvNM5ym1kiCfd1G&X-Amz-Signature=cebc057f8bc27379f30ebb65d3e7383921c724405587a08cb2924a9281e1a2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWTWLXJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAWq0RCctQsUYbYu6PnWVwWT%2FoweKWcJtdN%2BvKbGotOoAiBgoRin9epAEjl5jH%2BJq2eqtvdZ40funxqILuNbkZJwlCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMLWU6XXFvzzUWoP2PKtwDZ3v6NvI%2BOZBMtWUBxIsU5InO%2B%2BkyqcqwVuTUyQEJA7Kr4YfOCy8ujc91xAuvcEmiod4zRUdNYDNKVzPUqR7fYMs9FcMNVPV3w48246ju8f6khXsVM20mfBGOpTzI2HkwbGpajwUs9xqIjN%2BlciWnWH8HQQYTNE6DA3sXaKMWS9C3M1pg5O6VqMcA8NQ2i24TH%2FOSKVlDTbnYLRf3rAEl0sDeZyD1poJM%2BZrMpMNB5fFy9LxjSxmHKsRrf8jgxVVR0LQBXXNA6EV6YTZJ6%2FgSzNO09tC045NJguMARKwEvQ8G0TIQ8rWN2KiT4479S2%2FzfRMbsVFOekSZRpKTl7j3m9GKwDg0jD6YvDYN6%2FG6%2B8CPX8XY8QiU%2FYehil43WiP8kuLoYDTp5xrIX1EFiQ2No8JPtcI7LoouosyzxNz8CRKnCLCIunNKsbKV2l0CI1GBVZwyTlv4XKVZiFCvXrb%2FAMntAGLPvm62hrSN68HmMwFA6gtAJmcQp1S9YIQ3L8iWROH8D4VeB5nxjb22JuQnmDRWth1TfxAp2SEdy9FKgN6hxzuAHbrAKoP76mi5zphRTKjun1itq9WQBQb8GrLY4eSe8d2xTmzlyPsw7hZuB1DQg2ndTkKIQ0PXQq8wr8LtwgY6pgFoWKwzg%2FMX33MLZj5RR4YB%2FijcN6oUVFOm1LrpZtLEsA82a%2FdPMbdvwjSGBFJvDzrw5i%2FlfETFOJthOd3XI5EZg2yIqJLa7BVIEdpKxC%2BOg83dbNGcDm4vT5rjBYUxZYYHMOBej%2FPKvZh0IKb26KjeE8u9ap3wpKXp0YuDqinuaL%2Foxw4iKab2AcG6sHGc1H2wswFiUijWmgl1FmvNM5ym1kiCfd1G&X-Amz-Signature=8570b0d3617ad44ccafe9fb5762adf36c657fec296fa14e1c050c70b8e755949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWTWLXJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAWq0RCctQsUYbYu6PnWVwWT%2FoweKWcJtdN%2BvKbGotOoAiBgoRin9epAEjl5jH%2BJq2eqtvdZ40funxqILuNbkZJwlCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMLWU6XXFvzzUWoP2PKtwDZ3v6NvI%2BOZBMtWUBxIsU5InO%2B%2BkyqcqwVuTUyQEJA7Kr4YfOCy8ujc91xAuvcEmiod4zRUdNYDNKVzPUqR7fYMs9FcMNVPV3w48246ju8f6khXsVM20mfBGOpTzI2HkwbGpajwUs9xqIjN%2BlciWnWH8HQQYTNE6DA3sXaKMWS9C3M1pg5O6VqMcA8NQ2i24TH%2FOSKVlDTbnYLRf3rAEl0sDeZyD1poJM%2BZrMpMNB5fFy9LxjSxmHKsRrf8jgxVVR0LQBXXNA6EV6YTZJ6%2FgSzNO09tC045NJguMARKwEvQ8G0TIQ8rWN2KiT4479S2%2FzfRMbsVFOekSZRpKTl7j3m9GKwDg0jD6YvDYN6%2FG6%2B8CPX8XY8QiU%2FYehil43WiP8kuLoYDTp5xrIX1EFiQ2No8JPtcI7LoouosyzxNz8CRKnCLCIunNKsbKV2l0CI1GBVZwyTlv4XKVZiFCvXrb%2FAMntAGLPvm62hrSN68HmMwFA6gtAJmcQp1S9YIQ3L8iWROH8D4VeB5nxjb22JuQnmDRWth1TfxAp2SEdy9FKgN6hxzuAHbrAKoP76mi5zphRTKjun1itq9WQBQb8GrLY4eSe8d2xTmzlyPsw7hZuB1DQg2ndTkKIQ0PXQq8wr8LtwgY6pgFoWKwzg%2FMX33MLZj5RR4YB%2FijcN6oUVFOm1LrpZtLEsA82a%2FdPMbdvwjSGBFJvDzrw5i%2FlfETFOJthOd3XI5EZg2yIqJLa7BVIEdpKxC%2BOg83dbNGcDm4vT5rjBYUxZYYHMOBej%2FPKvZh0IKb26KjeE8u9ap3wpKXp0YuDqinuaL%2Foxw4iKab2AcG6sHGc1H2wswFiUijWmgl1FmvNM5ym1kiCfd1G&X-Amz-Signature=e85e40497987d349b6717dfb760d4d837578f5c9c61f4623556b524854a226fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWTWLXJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAWq0RCctQsUYbYu6PnWVwWT%2FoweKWcJtdN%2BvKbGotOoAiBgoRin9epAEjl5jH%2BJq2eqtvdZ40funxqILuNbkZJwlCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMLWU6XXFvzzUWoP2PKtwDZ3v6NvI%2BOZBMtWUBxIsU5InO%2B%2BkyqcqwVuTUyQEJA7Kr4YfOCy8ujc91xAuvcEmiod4zRUdNYDNKVzPUqR7fYMs9FcMNVPV3w48246ju8f6khXsVM20mfBGOpTzI2HkwbGpajwUs9xqIjN%2BlciWnWH8HQQYTNE6DA3sXaKMWS9C3M1pg5O6VqMcA8NQ2i24TH%2FOSKVlDTbnYLRf3rAEl0sDeZyD1poJM%2BZrMpMNB5fFy9LxjSxmHKsRrf8jgxVVR0LQBXXNA6EV6YTZJ6%2FgSzNO09tC045NJguMARKwEvQ8G0TIQ8rWN2KiT4479S2%2FzfRMbsVFOekSZRpKTl7j3m9GKwDg0jD6YvDYN6%2FG6%2B8CPX8XY8QiU%2FYehil43WiP8kuLoYDTp5xrIX1EFiQ2No8JPtcI7LoouosyzxNz8CRKnCLCIunNKsbKV2l0CI1GBVZwyTlv4XKVZiFCvXrb%2FAMntAGLPvm62hrSN68HmMwFA6gtAJmcQp1S9YIQ3L8iWROH8D4VeB5nxjb22JuQnmDRWth1TfxAp2SEdy9FKgN6hxzuAHbrAKoP76mi5zphRTKjun1itq9WQBQb8GrLY4eSe8d2xTmzlyPsw7hZuB1DQg2ndTkKIQ0PXQq8wr8LtwgY6pgFoWKwzg%2FMX33MLZj5RR4YB%2FijcN6oUVFOm1LrpZtLEsA82a%2FdPMbdvwjSGBFJvDzrw5i%2FlfETFOJthOd3XI5EZg2yIqJLa7BVIEdpKxC%2BOg83dbNGcDm4vT5rjBYUxZYYHMOBej%2FPKvZh0IKb26KjeE8u9ap3wpKXp0YuDqinuaL%2Foxw4iKab2AcG6sHGc1H2wswFiUijWmgl1FmvNM5ym1kiCfd1G&X-Amz-Signature=92c9dfb923d0bd8944989144d85c31da2e0bdaa6adb74f41735d1637afad947e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWTWLXJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAWq0RCctQsUYbYu6PnWVwWT%2FoweKWcJtdN%2BvKbGotOoAiBgoRin9epAEjl5jH%2BJq2eqtvdZ40funxqILuNbkZJwlCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMLWU6XXFvzzUWoP2PKtwDZ3v6NvI%2BOZBMtWUBxIsU5InO%2B%2BkyqcqwVuTUyQEJA7Kr4YfOCy8ujc91xAuvcEmiod4zRUdNYDNKVzPUqR7fYMs9FcMNVPV3w48246ju8f6khXsVM20mfBGOpTzI2HkwbGpajwUs9xqIjN%2BlciWnWH8HQQYTNE6DA3sXaKMWS9C3M1pg5O6VqMcA8NQ2i24TH%2FOSKVlDTbnYLRf3rAEl0sDeZyD1poJM%2BZrMpMNB5fFy9LxjSxmHKsRrf8jgxVVR0LQBXXNA6EV6YTZJ6%2FgSzNO09tC045NJguMARKwEvQ8G0TIQ8rWN2KiT4479S2%2FzfRMbsVFOekSZRpKTl7j3m9GKwDg0jD6YvDYN6%2FG6%2B8CPX8XY8QiU%2FYehil43WiP8kuLoYDTp5xrIX1EFiQ2No8JPtcI7LoouosyzxNz8CRKnCLCIunNKsbKV2l0CI1GBVZwyTlv4XKVZiFCvXrb%2FAMntAGLPvm62hrSN68HmMwFA6gtAJmcQp1S9YIQ3L8iWROH8D4VeB5nxjb22JuQnmDRWth1TfxAp2SEdy9FKgN6hxzuAHbrAKoP76mi5zphRTKjun1itq9WQBQb8GrLY4eSe8d2xTmzlyPsw7hZuB1DQg2ndTkKIQ0PXQq8wr8LtwgY6pgFoWKwzg%2FMX33MLZj5RR4YB%2FijcN6oUVFOm1LrpZtLEsA82a%2FdPMbdvwjSGBFJvDzrw5i%2FlfETFOJthOd3XI5EZg2yIqJLa7BVIEdpKxC%2BOg83dbNGcDm4vT5rjBYUxZYYHMOBej%2FPKvZh0IKb26KjeE8u9ap3wpKXp0YuDqinuaL%2Foxw4iKab2AcG6sHGc1H2wswFiUijWmgl1FmvNM5ym1kiCfd1G&X-Amz-Signature=16a7fcab73978abd2fac37d94759419c1c29f813cd521091080ce5a1e9f6c075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWTWLXJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAWq0RCctQsUYbYu6PnWVwWT%2FoweKWcJtdN%2BvKbGotOoAiBgoRin9epAEjl5jH%2BJq2eqtvdZ40funxqILuNbkZJwlCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMLWU6XXFvzzUWoP2PKtwDZ3v6NvI%2BOZBMtWUBxIsU5InO%2B%2BkyqcqwVuTUyQEJA7Kr4YfOCy8ujc91xAuvcEmiod4zRUdNYDNKVzPUqR7fYMs9FcMNVPV3w48246ju8f6khXsVM20mfBGOpTzI2HkwbGpajwUs9xqIjN%2BlciWnWH8HQQYTNE6DA3sXaKMWS9C3M1pg5O6VqMcA8NQ2i24TH%2FOSKVlDTbnYLRf3rAEl0sDeZyD1poJM%2BZrMpMNB5fFy9LxjSxmHKsRrf8jgxVVR0LQBXXNA6EV6YTZJ6%2FgSzNO09tC045NJguMARKwEvQ8G0TIQ8rWN2KiT4479S2%2FzfRMbsVFOekSZRpKTl7j3m9GKwDg0jD6YvDYN6%2FG6%2B8CPX8XY8QiU%2FYehil43WiP8kuLoYDTp5xrIX1EFiQ2No8JPtcI7LoouosyzxNz8CRKnCLCIunNKsbKV2l0CI1GBVZwyTlv4XKVZiFCvXrb%2FAMntAGLPvm62hrSN68HmMwFA6gtAJmcQp1S9YIQ3L8iWROH8D4VeB5nxjb22JuQnmDRWth1TfxAp2SEdy9FKgN6hxzuAHbrAKoP76mi5zphRTKjun1itq9WQBQb8GrLY4eSe8d2xTmzlyPsw7hZuB1DQg2ndTkKIQ0PXQq8wr8LtwgY6pgFoWKwzg%2FMX33MLZj5RR4YB%2FijcN6oUVFOm1LrpZtLEsA82a%2FdPMbdvwjSGBFJvDzrw5i%2FlfETFOJthOd3XI5EZg2yIqJLa7BVIEdpKxC%2BOg83dbNGcDm4vT5rjBYUxZYYHMOBej%2FPKvZh0IKb26KjeE8u9ap3wpKXp0YuDqinuaL%2Foxw4iKab2AcG6sHGc1H2wswFiUijWmgl1FmvNM5ym1kiCfd1G&X-Amz-Signature=0e56756fab66b8ef650ca3d787f6a16ac7d8ace17a0220ab190841df465d49ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWTWLXJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAWq0RCctQsUYbYu6PnWVwWT%2FoweKWcJtdN%2BvKbGotOoAiBgoRin9epAEjl5jH%2BJq2eqtvdZ40funxqILuNbkZJwlCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMLWU6XXFvzzUWoP2PKtwDZ3v6NvI%2BOZBMtWUBxIsU5InO%2B%2BkyqcqwVuTUyQEJA7Kr4YfOCy8ujc91xAuvcEmiod4zRUdNYDNKVzPUqR7fYMs9FcMNVPV3w48246ju8f6khXsVM20mfBGOpTzI2HkwbGpajwUs9xqIjN%2BlciWnWH8HQQYTNE6DA3sXaKMWS9C3M1pg5O6VqMcA8NQ2i24TH%2FOSKVlDTbnYLRf3rAEl0sDeZyD1poJM%2BZrMpMNB5fFy9LxjSxmHKsRrf8jgxVVR0LQBXXNA6EV6YTZJ6%2FgSzNO09tC045NJguMARKwEvQ8G0TIQ8rWN2KiT4479S2%2FzfRMbsVFOekSZRpKTl7j3m9GKwDg0jD6YvDYN6%2FG6%2B8CPX8XY8QiU%2FYehil43WiP8kuLoYDTp5xrIX1EFiQ2No8JPtcI7LoouosyzxNz8CRKnCLCIunNKsbKV2l0CI1GBVZwyTlv4XKVZiFCvXrb%2FAMntAGLPvm62hrSN68HmMwFA6gtAJmcQp1S9YIQ3L8iWROH8D4VeB5nxjb22JuQnmDRWth1TfxAp2SEdy9FKgN6hxzuAHbrAKoP76mi5zphRTKjun1itq9WQBQb8GrLY4eSe8d2xTmzlyPsw7hZuB1DQg2ndTkKIQ0PXQq8wr8LtwgY6pgFoWKwzg%2FMX33MLZj5RR4YB%2FijcN6oUVFOm1LrpZtLEsA82a%2FdPMbdvwjSGBFJvDzrw5i%2FlfETFOJthOd3XI5EZg2yIqJLa7BVIEdpKxC%2BOg83dbNGcDm4vT5rjBYUxZYYHMOBej%2FPKvZh0IKb26KjeE8u9ap3wpKXp0YuDqinuaL%2Foxw4iKab2AcG6sHGc1H2wswFiUijWmgl1FmvNM5ym1kiCfd1G&X-Amz-Signature=cfd4b15ea3fdbb9adaee8aa95967a2f3a74a5671be0806436ca80e5b928aa048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
