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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYMX2B4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8N3%2F5HI5uJRLpj8wak9uB7GhzCFcvFz44n0DTXI2xAiAGMC%2FQPjJ1Gd8yFGos10S1%2FLYAO5QvrJ32x5gwqJkLySr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqL%2FnL%2B34Mfg43PkgKtwDiXH9BKydSITL3CLyJhIKX4uOPP6jlxSg3uOH%2Bkvm1EdX8oPTH%2BASO5i6fADCmoqzewS64wrEcjda9QRmCgFbE1EM1BnSOsg6HTiG1fGHiV9oeT3bUB%2FngYmzDG7XJOlEZz8sEXuaBZJXFLAkOooqtuoXXJG%2FW6xpYS%2F%2FV%2FkVHBQy2TJ3pab6lgaoVsTMEnOAtMopOOs%2F5dQhMX5B23r7UxhQUvgeTyIP5suBpx6Fw2d1xjVHJIrhjVr8rY1XbEQxD3hlNzAcnL89qA3l%2FUnF9DDbs93jGmpys3uOB3z7Qnchii964WsCRixmZZSBJXvs%2Fg6uz6t33zH%2FzTIAxHnifuU%2BIPxttKOZCVkRPI5nEV20NUIJCDC4tojoanrampwQxC6K0zklO4K%2Fgk4hYQRE4TzcSBeAOMNWDw952gnm0mkENWioZ8xBnHWa7iWPoSgEZ1isdBQGlwfis15BTk%2BzIz5YwFXaPp1Vm52jOWzQWBzzgq%2BiJbghpPI7s1O0eJeds1Eiz22iEskIgISDalXRJCIZFxiXZIhxjKM%2BPx0fINIYW%2FYHaL2QCBrA2nxPGcsVePbEesq6RTVa6A3m95IYvoojdMhVfBx1poo%2BKSO5vgWRg3Dz7w%2FQov2HpO8wpomOwgY6pgFH4f99HgljhoQr%2FDAyB3YcX1xjWbIFqk3ycTjnImq310o3nQCOLjKNuqCikHYJDr7G0uFQ5t%2BZtFnmrAixxZDy2WAeJonWTHbMvqF8K9vysKIkO8CIo4sx%2BRPkeJ7s8UPg7aD40t0SEkjdf9cl2V4Onj7jB9tD7LvYrnN1QBB5QpP6uCQ7U3Jy8Om9PyLpNo7gQ2QQYKnzOv51mf35U3SsyPgqhDYt&X-Amz-Signature=2d1ef91a595795f7aaa459b114e40e9b45a484c4bc2da8491a98364b27b4cf13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYMX2B4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8N3%2F5HI5uJRLpj8wak9uB7GhzCFcvFz44n0DTXI2xAiAGMC%2FQPjJ1Gd8yFGos10S1%2FLYAO5QvrJ32x5gwqJkLySr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqL%2FnL%2B34Mfg43PkgKtwDiXH9BKydSITL3CLyJhIKX4uOPP6jlxSg3uOH%2Bkvm1EdX8oPTH%2BASO5i6fADCmoqzewS64wrEcjda9QRmCgFbE1EM1BnSOsg6HTiG1fGHiV9oeT3bUB%2FngYmzDG7XJOlEZz8sEXuaBZJXFLAkOooqtuoXXJG%2FW6xpYS%2F%2FV%2FkVHBQy2TJ3pab6lgaoVsTMEnOAtMopOOs%2F5dQhMX5B23r7UxhQUvgeTyIP5suBpx6Fw2d1xjVHJIrhjVr8rY1XbEQxD3hlNzAcnL89qA3l%2FUnF9DDbs93jGmpys3uOB3z7Qnchii964WsCRixmZZSBJXvs%2Fg6uz6t33zH%2FzTIAxHnifuU%2BIPxttKOZCVkRPI5nEV20NUIJCDC4tojoanrampwQxC6K0zklO4K%2Fgk4hYQRE4TzcSBeAOMNWDw952gnm0mkENWioZ8xBnHWa7iWPoSgEZ1isdBQGlwfis15BTk%2BzIz5YwFXaPp1Vm52jOWzQWBzzgq%2BiJbghpPI7s1O0eJeds1Eiz22iEskIgISDalXRJCIZFxiXZIhxjKM%2BPx0fINIYW%2FYHaL2QCBrA2nxPGcsVePbEesq6RTVa6A3m95IYvoojdMhVfBx1poo%2BKSO5vgWRg3Dz7w%2FQov2HpO8wpomOwgY6pgFH4f99HgljhoQr%2FDAyB3YcX1xjWbIFqk3ycTjnImq310o3nQCOLjKNuqCikHYJDr7G0uFQ5t%2BZtFnmrAixxZDy2WAeJonWTHbMvqF8K9vysKIkO8CIo4sx%2BRPkeJ7s8UPg7aD40t0SEkjdf9cl2V4Onj7jB9tD7LvYrnN1QBB5QpP6uCQ7U3Jy8Om9PyLpNo7gQ2QQYKnzOv51mf35U3SsyPgqhDYt&X-Amz-Signature=48fd6ddf357a2959b30afa0a2e7026443ee1f81de641d5463c705df94c6e8a66&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYMX2B4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8N3%2F5HI5uJRLpj8wak9uB7GhzCFcvFz44n0DTXI2xAiAGMC%2FQPjJ1Gd8yFGos10S1%2FLYAO5QvrJ32x5gwqJkLySr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqL%2FnL%2B34Mfg43PkgKtwDiXH9BKydSITL3CLyJhIKX4uOPP6jlxSg3uOH%2Bkvm1EdX8oPTH%2BASO5i6fADCmoqzewS64wrEcjda9QRmCgFbE1EM1BnSOsg6HTiG1fGHiV9oeT3bUB%2FngYmzDG7XJOlEZz8sEXuaBZJXFLAkOooqtuoXXJG%2FW6xpYS%2F%2FV%2FkVHBQy2TJ3pab6lgaoVsTMEnOAtMopOOs%2F5dQhMX5B23r7UxhQUvgeTyIP5suBpx6Fw2d1xjVHJIrhjVr8rY1XbEQxD3hlNzAcnL89qA3l%2FUnF9DDbs93jGmpys3uOB3z7Qnchii964WsCRixmZZSBJXvs%2Fg6uz6t33zH%2FzTIAxHnifuU%2BIPxttKOZCVkRPI5nEV20NUIJCDC4tojoanrampwQxC6K0zklO4K%2Fgk4hYQRE4TzcSBeAOMNWDw952gnm0mkENWioZ8xBnHWa7iWPoSgEZ1isdBQGlwfis15BTk%2BzIz5YwFXaPp1Vm52jOWzQWBzzgq%2BiJbghpPI7s1O0eJeds1Eiz22iEskIgISDalXRJCIZFxiXZIhxjKM%2BPx0fINIYW%2FYHaL2QCBrA2nxPGcsVePbEesq6RTVa6A3m95IYvoojdMhVfBx1poo%2BKSO5vgWRg3Dz7w%2FQov2HpO8wpomOwgY6pgFH4f99HgljhoQr%2FDAyB3YcX1xjWbIFqk3ycTjnImq310o3nQCOLjKNuqCikHYJDr7G0uFQ5t%2BZtFnmrAixxZDy2WAeJonWTHbMvqF8K9vysKIkO8CIo4sx%2BRPkeJ7s8UPg7aD40t0SEkjdf9cl2V4Onj7jB9tD7LvYrnN1QBB5QpP6uCQ7U3Jy8Om9PyLpNo7gQ2QQYKnzOv51mf35U3SsyPgqhDYt&X-Amz-Signature=4b1685f0ce7506d48a6f5c358372e2fc7d3ef66e9bc9b0ae58989db7bc5e36a2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYMX2B4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8N3%2F5HI5uJRLpj8wak9uB7GhzCFcvFz44n0DTXI2xAiAGMC%2FQPjJ1Gd8yFGos10S1%2FLYAO5QvrJ32x5gwqJkLySr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqL%2FnL%2B34Mfg43PkgKtwDiXH9BKydSITL3CLyJhIKX4uOPP6jlxSg3uOH%2Bkvm1EdX8oPTH%2BASO5i6fADCmoqzewS64wrEcjda9QRmCgFbE1EM1BnSOsg6HTiG1fGHiV9oeT3bUB%2FngYmzDG7XJOlEZz8sEXuaBZJXFLAkOooqtuoXXJG%2FW6xpYS%2F%2FV%2FkVHBQy2TJ3pab6lgaoVsTMEnOAtMopOOs%2F5dQhMX5B23r7UxhQUvgeTyIP5suBpx6Fw2d1xjVHJIrhjVr8rY1XbEQxD3hlNzAcnL89qA3l%2FUnF9DDbs93jGmpys3uOB3z7Qnchii964WsCRixmZZSBJXvs%2Fg6uz6t33zH%2FzTIAxHnifuU%2BIPxttKOZCVkRPI5nEV20NUIJCDC4tojoanrampwQxC6K0zklO4K%2Fgk4hYQRE4TzcSBeAOMNWDw952gnm0mkENWioZ8xBnHWa7iWPoSgEZ1isdBQGlwfis15BTk%2BzIz5YwFXaPp1Vm52jOWzQWBzzgq%2BiJbghpPI7s1O0eJeds1Eiz22iEskIgISDalXRJCIZFxiXZIhxjKM%2BPx0fINIYW%2FYHaL2QCBrA2nxPGcsVePbEesq6RTVa6A3m95IYvoojdMhVfBx1poo%2BKSO5vgWRg3Dz7w%2FQov2HpO8wpomOwgY6pgFH4f99HgljhoQr%2FDAyB3YcX1xjWbIFqk3ycTjnImq310o3nQCOLjKNuqCikHYJDr7G0uFQ5t%2BZtFnmrAixxZDy2WAeJonWTHbMvqF8K9vysKIkO8CIo4sx%2BRPkeJ7s8UPg7aD40t0SEkjdf9cl2V4Onj7jB9tD7LvYrnN1QBB5QpP6uCQ7U3Jy8Om9PyLpNo7gQ2QQYKnzOv51mf35U3SsyPgqhDYt&X-Amz-Signature=96afdab9b14879d648ad785836bc8ce6ba73d63fcf42f13048bb1b24698fc495&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYMX2B4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8N3%2F5HI5uJRLpj8wak9uB7GhzCFcvFz44n0DTXI2xAiAGMC%2FQPjJ1Gd8yFGos10S1%2FLYAO5QvrJ32x5gwqJkLySr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqL%2FnL%2B34Mfg43PkgKtwDiXH9BKydSITL3CLyJhIKX4uOPP6jlxSg3uOH%2Bkvm1EdX8oPTH%2BASO5i6fADCmoqzewS64wrEcjda9QRmCgFbE1EM1BnSOsg6HTiG1fGHiV9oeT3bUB%2FngYmzDG7XJOlEZz8sEXuaBZJXFLAkOooqtuoXXJG%2FW6xpYS%2F%2FV%2FkVHBQy2TJ3pab6lgaoVsTMEnOAtMopOOs%2F5dQhMX5B23r7UxhQUvgeTyIP5suBpx6Fw2d1xjVHJIrhjVr8rY1XbEQxD3hlNzAcnL89qA3l%2FUnF9DDbs93jGmpys3uOB3z7Qnchii964WsCRixmZZSBJXvs%2Fg6uz6t33zH%2FzTIAxHnifuU%2BIPxttKOZCVkRPI5nEV20NUIJCDC4tojoanrampwQxC6K0zklO4K%2Fgk4hYQRE4TzcSBeAOMNWDw952gnm0mkENWioZ8xBnHWa7iWPoSgEZ1isdBQGlwfis15BTk%2BzIz5YwFXaPp1Vm52jOWzQWBzzgq%2BiJbghpPI7s1O0eJeds1Eiz22iEskIgISDalXRJCIZFxiXZIhxjKM%2BPx0fINIYW%2FYHaL2QCBrA2nxPGcsVePbEesq6RTVa6A3m95IYvoojdMhVfBx1poo%2BKSO5vgWRg3Dz7w%2FQov2HpO8wpomOwgY6pgFH4f99HgljhoQr%2FDAyB3YcX1xjWbIFqk3ycTjnImq310o3nQCOLjKNuqCikHYJDr7G0uFQ5t%2BZtFnmrAixxZDy2WAeJonWTHbMvqF8K9vysKIkO8CIo4sx%2BRPkeJ7s8UPg7aD40t0SEkjdf9cl2V4Onj7jB9tD7LvYrnN1QBB5QpP6uCQ7U3Jy8Om9PyLpNo7gQ2QQYKnzOv51mf35U3SsyPgqhDYt&X-Amz-Signature=cf76f73b3f293516f380edfa79504411f6e8af9842c418f54d12d7f56d583b62&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYMX2B4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8N3%2F5HI5uJRLpj8wak9uB7GhzCFcvFz44n0DTXI2xAiAGMC%2FQPjJ1Gd8yFGos10S1%2FLYAO5QvrJ32x5gwqJkLySr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqL%2FnL%2B34Mfg43PkgKtwDiXH9BKydSITL3CLyJhIKX4uOPP6jlxSg3uOH%2Bkvm1EdX8oPTH%2BASO5i6fADCmoqzewS64wrEcjda9QRmCgFbE1EM1BnSOsg6HTiG1fGHiV9oeT3bUB%2FngYmzDG7XJOlEZz8sEXuaBZJXFLAkOooqtuoXXJG%2FW6xpYS%2F%2FV%2FkVHBQy2TJ3pab6lgaoVsTMEnOAtMopOOs%2F5dQhMX5B23r7UxhQUvgeTyIP5suBpx6Fw2d1xjVHJIrhjVr8rY1XbEQxD3hlNzAcnL89qA3l%2FUnF9DDbs93jGmpys3uOB3z7Qnchii964WsCRixmZZSBJXvs%2Fg6uz6t33zH%2FzTIAxHnifuU%2BIPxttKOZCVkRPI5nEV20NUIJCDC4tojoanrampwQxC6K0zklO4K%2Fgk4hYQRE4TzcSBeAOMNWDw952gnm0mkENWioZ8xBnHWa7iWPoSgEZ1isdBQGlwfis15BTk%2BzIz5YwFXaPp1Vm52jOWzQWBzzgq%2BiJbghpPI7s1O0eJeds1Eiz22iEskIgISDalXRJCIZFxiXZIhxjKM%2BPx0fINIYW%2FYHaL2QCBrA2nxPGcsVePbEesq6RTVa6A3m95IYvoojdMhVfBx1poo%2BKSO5vgWRg3Dz7w%2FQov2HpO8wpomOwgY6pgFH4f99HgljhoQr%2FDAyB3YcX1xjWbIFqk3ycTjnImq310o3nQCOLjKNuqCikHYJDr7G0uFQ5t%2BZtFnmrAixxZDy2WAeJonWTHbMvqF8K9vysKIkO8CIo4sx%2BRPkeJ7s8UPg7aD40t0SEkjdf9cl2V4Onj7jB9tD7LvYrnN1QBB5QpP6uCQ7U3Jy8Om9PyLpNo7gQ2QQYKnzOv51mf35U3SsyPgqhDYt&X-Amz-Signature=6f5870a4e65b18aa94e5bac50f319f6249f2e5c68526d6d18b236a7b5b5a25c6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYMX2B4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj8N3%2F5HI5uJRLpj8wak9uB7GhzCFcvFz44n0DTXI2xAiAGMC%2FQPjJ1Gd8yFGos10S1%2FLYAO5QvrJ32x5gwqJkLySr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMqL%2FnL%2B34Mfg43PkgKtwDiXH9BKydSITL3CLyJhIKX4uOPP6jlxSg3uOH%2Bkvm1EdX8oPTH%2BASO5i6fADCmoqzewS64wrEcjda9QRmCgFbE1EM1BnSOsg6HTiG1fGHiV9oeT3bUB%2FngYmzDG7XJOlEZz8sEXuaBZJXFLAkOooqtuoXXJG%2FW6xpYS%2F%2FV%2FkVHBQy2TJ3pab6lgaoVsTMEnOAtMopOOs%2F5dQhMX5B23r7UxhQUvgeTyIP5suBpx6Fw2d1xjVHJIrhjVr8rY1XbEQxD3hlNzAcnL89qA3l%2FUnF9DDbs93jGmpys3uOB3z7Qnchii964WsCRixmZZSBJXvs%2Fg6uz6t33zH%2FzTIAxHnifuU%2BIPxttKOZCVkRPI5nEV20NUIJCDC4tojoanrampwQxC6K0zklO4K%2Fgk4hYQRE4TzcSBeAOMNWDw952gnm0mkENWioZ8xBnHWa7iWPoSgEZ1isdBQGlwfis15BTk%2BzIz5YwFXaPp1Vm52jOWzQWBzzgq%2BiJbghpPI7s1O0eJeds1Eiz22iEskIgISDalXRJCIZFxiXZIhxjKM%2BPx0fINIYW%2FYHaL2QCBrA2nxPGcsVePbEesq6RTVa6A3m95IYvoojdMhVfBx1poo%2BKSO5vgWRg3Dz7w%2FQov2HpO8wpomOwgY6pgFH4f99HgljhoQr%2FDAyB3YcX1xjWbIFqk3ycTjnImq310o3nQCOLjKNuqCikHYJDr7G0uFQ5t%2BZtFnmrAixxZDy2WAeJonWTHbMvqF8K9vysKIkO8CIo4sx%2BRPkeJ7s8UPg7aD40t0SEkjdf9cl2V4Onj7jB9tD7LvYrnN1QBB5QpP6uCQ7U3Jy8Om9PyLpNo7gQ2QQYKnzOv51mf35U3SsyPgqhDYt&X-Amz-Signature=b45393fca8acddf81cae10dd7472361ba12ac1a6043ec0696ec442dc041c8536&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
