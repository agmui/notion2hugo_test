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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWJPCJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlgdeflPNGz2ex23KqWDgKTnKWzMF79JxWw7fkQ847DAiEA9ZJYYErOB3zTUqW1uU4Zgs%2BR6moC8UsS1IPE4IRIm3oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK4G2AQoK%2BmDlMmkHircA%2FRShw%2Fi4mJEY1fr2Jb7WK6P9OWMGTFLCRWQ9WTbwGaHBDQlvcWGSMjr8waiQK0rlODQxd03CX1j1izNVfxHDegbgj4xPjYegn9%2Bu%2FeyzZxGB7fcW4tctHZjzOvNqXprKPIUkrA9ue%2FUKrkr6eUHHj2kmdsO2xk%2FhA52%2BBLWFyFKqzqQ76YKvLhxVATuOgk8%2BBj5J7G71gDK3K0rxVF5hl4pHsDXfTG6gCvFWGRh5xGH2kvH7DEOcu3BlNWa00AMpTnFM%2FRJ3B6sMmyFqHvca%2FdvFsjaKPZ9J6u843iwvAYWEDTnJnGMiznqBc4VJcWVZiRGkQvNlCKB2zwxlEYqb3J16DimIk0jJvT3Ij1PWBumQRQYE7VDYrZCIQZOHU9cA8521bXsTF969L%2BoBO2eAxM2SDYgQNBs66D3k0Xih3VWwG4s4Ius%2Bj96vKK4B3%2FksaYVpnO7uE8Y1s%2BTdW6v70N35DAtD14j7%2Bkp6N7J14tJGf1ZSxO2JD9PfllZowoXkjvMMip3LBHJdagRmDMUCwOTAlMpe5WavETrcpGtN2JNjkORfRmN8ituW2FU0jmTJwdz46AMmOivdzjZs56P6eLzxAVsw6hw7Yde86LNnAVrR0FRHctPFFmWxVSlMMzm6MAGOqUBBkOF7hW%2By43ReYUqDW6aY3QRLVHhaCTfOV%2F177olpt2mavFjttV9ODCufd6yabndA4YHGlkTqOehQAJ4O795AJIYvIefIB4CCmoXJs1snezXtc%2Feq%2BQS51hCu%2Fyqk9igQGN9F5%2FJ9fWIZ2RdbGCW%2Bu5wjGkJIQ4bsZZoGK74SVKzeoseD7X2H7n2irL7RBjy8AQDy4LiS54GHOKQ5Hko2ju1iiTu&X-Amz-Signature=1225e9f44cdf1944a22c6ec3c282fb71439345e9c4cf9b197930bac1e39dde93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWJPCJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlgdeflPNGz2ex23KqWDgKTnKWzMF79JxWw7fkQ847DAiEA9ZJYYErOB3zTUqW1uU4Zgs%2BR6moC8UsS1IPE4IRIm3oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK4G2AQoK%2BmDlMmkHircA%2FRShw%2Fi4mJEY1fr2Jb7WK6P9OWMGTFLCRWQ9WTbwGaHBDQlvcWGSMjr8waiQK0rlODQxd03CX1j1izNVfxHDegbgj4xPjYegn9%2Bu%2FeyzZxGB7fcW4tctHZjzOvNqXprKPIUkrA9ue%2FUKrkr6eUHHj2kmdsO2xk%2FhA52%2BBLWFyFKqzqQ76YKvLhxVATuOgk8%2BBj5J7G71gDK3K0rxVF5hl4pHsDXfTG6gCvFWGRh5xGH2kvH7DEOcu3BlNWa00AMpTnFM%2FRJ3B6sMmyFqHvca%2FdvFsjaKPZ9J6u843iwvAYWEDTnJnGMiznqBc4VJcWVZiRGkQvNlCKB2zwxlEYqb3J16DimIk0jJvT3Ij1PWBumQRQYE7VDYrZCIQZOHU9cA8521bXsTF969L%2BoBO2eAxM2SDYgQNBs66D3k0Xih3VWwG4s4Ius%2Bj96vKK4B3%2FksaYVpnO7uE8Y1s%2BTdW6v70N35DAtD14j7%2Bkp6N7J14tJGf1ZSxO2JD9PfllZowoXkjvMMip3LBHJdagRmDMUCwOTAlMpe5WavETrcpGtN2JNjkORfRmN8ituW2FU0jmTJwdz46AMmOivdzjZs56P6eLzxAVsw6hw7Yde86LNnAVrR0FRHctPFFmWxVSlMMzm6MAGOqUBBkOF7hW%2By43ReYUqDW6aY3QRLVHhaCTfOV%2F177olpt2mavFjttV9ODCufd6yabndA4YHGlkTqOehQAJ4O795AJIYvIefIB4CCmoXJs1snezXtc%2Feq%2BQS51hCu%2Fyqk9igQGN9F5%2FJ9fWIZ2RdbGCW%2Bu5wjGkJIQ4bsZZoGK74SVKzeoseD7X2H7n2irL7RBjy8AQDy4LiS54GHOKQ5Hko2ju1iiTu&X-Amz-Signature=b1cd6b26e8bf49a30f1d3b77c96230923f89a1dedf4fd144f300f1ba33e33644&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWJPCJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlgdeflPNGz2ex23KqWDgKTnKWzMF79JxWw7fkQ847DAiEA9ZJYYErOB3zTUqW1uU4Zgs%2BR6moC8UsS1IPE4IRIm3oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK4G2AQoK%2BmDlMmkHircA%2FRShw%2Fi4mJEY1fr2Jb7WK6P9OWMGTFLCRWQ9WTbwGaHBDQlvcWGSMjr8waiQK0rlODQxd03CX1j1izNVfxHDegbgj4xPjYegn9%2Bu%2FeyzZxGB7fcW4tctHZjzOvNqXprKPIUkrA9ue%2FUKrkr6eUHHj2kmdsO2xk%2FhA52%2BBLWFyFKqzqQ76YKvLhxVATuOgk8%2BBj5J7G71gDK3K0rxVF5hl4pHsDXfTG6gCvFWGRh5xGH2kvH7DEOcu3BlNWa00AMpTnFM%2FRJ3B6sMmyFqHvca%2FdvFsjaKPZ9J6u843iwvAYWEDTnJnGMiznqBc4VJcWVZiRGkQvNlCKB2zwxlEYqb3J16DimIk0jJvT3Ij1PWBumQRQYE7VDYrZCIQZOHU9cA8521bXsTF969L%2BoBO2eAxM2SDYgQNBs66D3k0Xih3VWwG4s4Ius%2Bj96vKK4B3%2FksaYVpnO7uE8Y1s%2BTdW6v70N35DAtD14j7%2Bkp6N7J14tJGf1ZSxO2JD9PfllZowoXkjvMMip3LBHJdagRmDMUCwOTAlMpe5WavETrcpGtN2JNjkORfRmN8ituW2FU0jmTJwdz46AMmOivdzjZs56P6eLzxAVsw6hw7Yde86LNnAVrR0FRHctPFFmWxVSlMMzm6MAGOqUBBkOF7hW%2By43ReYUqDW6aY3QRLVHhaCTfOV%2F177olpt2mavFjttV9ODCufd6yabndA4YHGlkTqOehQAJ4O795AJIYvIefIB4CCmoXJs1snezXtc%2Feq%2BQS51hCu%2Fyqk9igQGN9F5%2FJ9fWIZ2RdbGCW%2Bu5wjGkJIQ4bsZZoGK74SVKzeoseD7X2H7n2irL7RBjy8AQDy4LiS54GHOKQ5Hko2ju1iiTu&X-Amz-Signature=d8b0e1356a348d60f0ad5a5a6f92f532611cf52604c37d6355338f506d5fe8fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWJPCJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlgdeflPNGz2ex23KqWDgKTnKWzMF79JxWw7fkQ847DAiEA9ZJYYErOB3zTUqW1uU4Zgs%2BR6moC8UsS1IPE4IRIm3oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK4G2AQoK%2BmDlMmkHircA%2FRShw%2Fi4mJEY1fr2Jb7WK6P9OWMGTFLCRWQ9WTbwGaHBDQlvcWGSMjr8waiQK0rlODQxd03CX1j1izNVfxHDegbgj4xPjYegn9%2Bu%2FeyzZxGB7fcW4tctHZjzOvNqXprKPIUkrA9ue%2FUKrkr6eUHHj2kmdsO2xk%2FhA52%2BBLWFyFKqzqQ76YKvLhxVATuOgk8%2BBj5J7G71gDK3K0rxVF5hl4pHsDXfTG6gCvFWGRh5xGH2kvH7DEOcu3BlNWa00AMpTnFM%2FRJ3B6sMmyFqHvca%2FdvFsjaKPZ9J6u843iwvAYWEDTnJnGMiznqBc4VJcWVZiRGkQvNlCKB2zwxlEYqb3J16DimIk0jJvT3Ij1PWBumQRQYE7VDYrZCIQZOHU9cA8521bXsTF969L%2BoBO2eAxM2SDYgQNBs66D3k0Xih3VWwG4s4Ius%2Bj96vKK4B3%2FksaYVpnO7uE8Y1s%2BTdW6v70N35DAtD14j7%2Bkp6N7J14tJGf1ZSxO2JD9PfllZowoXkjvMMip3LBHJdagRmDMUCwOTAlMpe5WavETrcpGtN2JNjkORfRmN8ituW2FU0jmTJwdz46AMmOivdzjZs56P6eLzxAVsw6hw7Yde86LNnAVrR0FRHctPFFmWxVSlMMzm6MAGOqUBBkOF7hW%2By43ReYUqDW6aY3QRLVHhaCTfOV%2F177olpt2mavFjttV9ODCufd6yabndA4YHGlkTqOehQAJ4O795AJIYvIefIB4CCmoXJs1snezXtc%2Feq%2BQS51hCu%2Fyqk9igQGN9F5%2FJ9fWIZ2RdbGCW%2Bu5wjGkJIQ4bsZZoGK74SVKzeoseD7X2H7n2irL7RBjy8AQDy4LiS54GHOKQ5Hko2ju1iiTu&X-Amz-Signature=8df69b21290433d4ea47d030d835a9625a38e3aab0e39759e9aeceaa4fbe0043&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWJPCJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlgdeflPNGz2ex23KqWDgKTnKWzMF79JxWw7fkQ847DAiEA9ZJYYErOB3zTUqW1uU4Zgs%2BR6moC8UsS1IPE4IRIm3oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK4G2AQoK%2BmDlMmkHircA%2FRShw%2Fi4mJEY1fr2Jb7WK6P9OWMGTFLCRWQ9WTbwGaHBDQlvcWGSMjr8waiQK0rlODQxd03CX1j1izNVfxHDegbgj4xPjYegn9%2Bu%2FeyzZxGB7fcW4tctHZjzOvNqXprKPIUkrA9ue%2FUKrkr6eUHHj2kmdsO2xk%2FhA52%2BBLWFyFKqzqQ76YKvLhxVATuOgk8%2BBj5J7G71gDK3K0rxVF5hl4pHsDXfTG6gCvFWGRh5xGH2kvH7DEOcu3BlNWa00AMpTnFM%2FRJ3B6sMmyFqHvca%2FdvFsjaKPZ9J6u843iwvAYWEDTnJnGMiznqBc4VJcWVZiRGkQvNlCKB2zwxlEYqb3J16DimIk0jJvT3Ij1PWBumQRQYE7VDYrZCIQZOHU9cA8521bXsTF969L%2BoBO2eAxM2SDYgQNBs66D3k0Xih3VWwG4s4Ius%2Bj96vKK4B3%2FksaYVpnO7uE8Y1s%2BTdW6v70N35DAtD14j7%2Bkp6N7J14tJGf1ZSxO2JD9PfllZowoXkjvMMip3LBHJdagRmDMUCwOTAlMpe5WavETrcpGtN2JNjkORfRmN8ituW2FU0jmTJwdz46AMmOivdzjZs56P6eLzxAVsw6hw7Yde86LNnAVrR0FRHctPFFmWxVSlMMzm6MAGOqUBBkOF7hW%2By43ReYUqDW6aY3QRLVHhaCTfOV%2F177olpt2mavFjttV9ODCufd6yabndA4YHGlkTqOehQAJ4O795AJIYvIefIB4CCmoXJs1snezXtc%2Feq%2BQS51hCu%2Fyqk9igQGN9F5%2FJ9fWIZ2RdbGCW%2Bu5wjGkJIQ4bsZZoGK74SVKzeoseD7X2H7n2irL7RBjy8AQDy4LiS54GHOKQ5Hko2ju1iiTu&X-Amz-Signature=3a1af3af24e82437e65df67f6e19f9ac5a8c0ff44ce9220578e1365103a3c268&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWJPCJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlgdeflPNGz2ex23KqWDgKTnKWzMF79JxWw7fkQ847DAiEA9ZJYYErOB3zTUqW1uU4Zgs%2BR6moC8UsS1IPE4IRIm3oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK4G2AQoK%2BmDlMmkHircA%2FRShw%2Fi4mJEY1fr2Jb7WK6P9OWMGTFLCRWQ9WTbwGaHBDQlvcWGSMjr8waiQK0rlODQxd03CX1j1izNVfxHDegbgj4xPjYegn9%2Bu%2FeyzZxGB7fcW4tctHZjzOvNqXprKPIUkrA9ue%2FUKrkr6eUHHj2kmdsO2xk%2FhA52%2BBLWFyFKqzqQ76YKvLhxVATuOgk8%2BBj5J7G71gDK3K0rxVF5hl4pHsDXfTG6gCvFWGRh5xGH2kvH7DEOcu3BlNWa00AMpTnFM%2FRJ3B6sMmyFqHvca%2FdvFsjaKPZ9J6u843iwvAYWEDTnJnGMiznqBc4VJcWVZiRGkQvNlCKB2zwxlEYqb3J16DimIk0jJvT3Ij1PWBumQRQYE7VDYrZCIQZOHU9cA8521bXsTF969L%2BoBO2eAxM2SDYgQNBs66D3k0Xih3VWwG4s4Ius%2Bj96vKK4B3%2FksaYVpnO7uE8Y1s%2BTdW6v70N35DAtD14j7%2Bkp6N7J14tJGf1ZSxO2JD9PfllZowoXkjvMMip3LBHJdagRmDMUCwOTAlMpe5WavETrcpGtN2JNjkORfRmN8ituW2FU0jmTJwdz46AMmOivdzjZs56P6eLzxAVsw6hw7Yde86LNnAVrR0FRHctPFFmWxVSlMMzm6MAGOqUBBkOF7hW%2By43ReYUqDW6aY3QRLVHhaCTfOV%2F177olpt2mavFjttV9ODCufd6yabndA4YHGlkTqOehQAJ4O795AJIYvIefIB4CCmoXJs1snezXtc%2Feq%2BQS51hCu%2Fyqk9igQGN9F5%2FJ9fWIZ2RdbGCW%2Bu5wjGkJIQ4bsZZoGK74SVKzeoseD7X2H7n2irL7RBjy8AQDy4LiS54GHOKQ5Hko2ju1iiTu&X-Amz-Signature=a0f59d69476394f19a4815734bb326b56c4ac6e62ef4408dfd0792a61b7bbced&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWJPCJR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlgdeflPNGz2ex23KqWDgKTnKWzMF79JxWw7fkQ847DAiEA9ZJYYErOB3zTUqW1uU4Zgs%2BR6moC8UsS1IPE4IRIm3oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDK4G2AQoK%2BmDlMmkHircA%2FRShw%2Fi4mJEY1fr2Jb7WK6P9OWMGTFLCRWQ9WTbwGaHBDQlvcWGSMjr8waiQK0rlODQxd03CX1j1izNVfxHDegbgj4xPjYegn9%2Bu%2FeyzZxGB7fcW4tctHZjzOvNqXprKPIUkrA9ue%2FUKrkr6eUHHj2kmdsO2xk%2FhA52%2BBLWFyFKqzqQ76YKvLhxVATuOgk8%2BBj5J7G71gDK3K0rxVF5hl4pHsDXfTG6gCvFWGRh5xGH2kvH7DEOcu3BlNWa00AMpTnFM%2FRJ3B6sMmyFqHvca%2FdvFsjaKPZ9J6u843iwvAYWEDTnJnGMiznqBc4VJcWVZiRGkQvNlCKB2zwxlEYqb3J16DimIk0jJvT3Ij1PWBumQRQYE7VDYrZCIQZOHU9cA8521bXsTF969L%2BoBO2eAxM2SDYgQNBs66D3k0Xih3VWwG4s4Ius%2Bj96vKK4B3%2FksaYVpnO7uE8Y1s%2BTdW6v70N35DAtD14j7%2Bkp6N7J14tJGf1ZSxO2JD9PfllZowoXkjvMMip3LBHJdagRmDMUCwOTAlMpe5WavETrcpGtN2JNjkORfRmN8ituW2FU0jmTJwdz46AMmOivdzjZs56P6eLzxAVsw6hw7Yde86LNnAVrR0FRHctPFFmWxVSlMMzm6MAGOqUBBkOF7hW%2By43ReYUqDW6aY3QRLVHhaCTfOV%2F177olpt2mavFjttV9ODCufd6yabndA4YHGlkTqOehQAJ4O795AJIYvIefIB4CCmoXJs1snezXtc%2Feq%2BQS51hCu%2Fyqk9igQGN9F5%2FJ9fWIZ2RdbGCW%2Bu5wjGkJIQ4bsZZoGK74SVKzeoseD7X2H7n2irL7RBjy8AQDy4LiS54GHOKQ5Hko2ju1iiTu&X-Amz-Signature=887859080d1e13745b340bf22d81c3f897d234bc934d7815ce77b4514998d668&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
