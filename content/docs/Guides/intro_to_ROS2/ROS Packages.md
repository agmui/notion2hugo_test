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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVYDCAO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDD%2FMPIksWZhHbJJ%2FhOV8mmjeawnh8Clzns342cglVI8QIgBWdLojCbEolW13%2BZj4YMjGISHvg%2B0Q%2FMnoPk2atCAKYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDO2EdBvH%2Fxj7KbV6tyrcA1hTeC0c2A9%2B6NvzucNeXYKcBl13%2BnY2T%2FpBJM0MBcANKa7aiN%2F3o6CJX4bFT%2FbjN1w%2BmqNrycMhOeOhM0ii753pf9qxplkNxl%2F1LzxkpClLZ%2FkxDkwOvC76omjO3C%2FR0dDOiTmBMNNXeXYI9Jl%2B5GLPF%2BLjYRjr%2B7co6kQTbOxzKjjOr1HditjHm3VN6iDDpy%2BGVa%2Fi1B2HrFVeWS%2F4%2FFJB6G%2BqSG2m0h3vMSWE8BGdaLb9S02qNlR0Vil%2F5hOmEfgSW7RcpQ%2Fh5WWssS5MyUH30NB%2FF3xbgT%2BxSXQpDW04xB91J7yK01a7czzZEGZ8%2FXND%2FGxNa8twf4LKxEfAccuIu5c62081ojxH6%2B90%2FWvOTG4zH6HezP%2BQ9UchuzeV%2FdRYDRX01HQ%2B%2FEPa7eQ8nw4uesqb52%2B%2BhS9xFzSoKY30UwAzDrLX1tN1MKRLH4QclcM3lCeI6dWsjMFZnqrgiFKLlpgICs05t2NoJYWihrulzheVDJR1TcUedQZswvCGoP2Brvq96Xyuckg%2Barj5N1K6NGkzGF%2FvjN6F%2Fyahkl6T3gUNIBYuk8NA5pWnNNNcaM4ESpO4QPdUiDgsznb9Oyw1f1qFWh3AVhNakoqZus4jAw77s6PIVKK7o0ZhMLiF%2FcEGOqUBmGLpUNiAIQ4Gsu2IQV3KzQKiYPixzR1N3UnAgd3J7Lw7FLlLD1938c4%2FX2tG9xCqSKn0HrhAWDNAH2GXnup%2BUUbbn1wy40zuiRLByOY5gKoonh0ZI2qI2v%2FsVgggs1JKv6OqGizXU%2B6RaGa0F%2FkHR6N4RIRhgW6pvu3eancAjPG6iCtBJ7M8WW%2B5OIAi6jLjmaJ24sMi%2Fwa6nCafnbwdnOVbMp9T&X-Amz-Signature=89e6ab047c710d77f68fa3a17d354c4660f6ba76eeafd9dfdef2e2d1d2e4d145&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVYDCAO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDD%2FMPIksWZhHbJJ%2FhOV8mmjeawnh8Clzns342cglVI8QIgBWdLojCbEolW13%2BZj4YMjGISHvg%2B0Q%2FMnoPk2atCAKYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDO2EdBvH%2Fxj7KbV6tyrcA1hTeC0c2A9%2B6NvzucNeXYKcBl13%2BnY2T%2FpBJM0MBcANKa7aiN%2F3o6CJX4bFT%2FbjN1w%2BmqNrycMhOeOhM0ii753pf9qxplkNxl%2F1LzxkpClLZ%2FkxDkwOvC76omjO3C%2FR0dDOiTmBMNNXeXYI9Jl%2B5GLPF%2BLjYRjr%2B7co6kQTbOxzKjjOr1HditjHm3VN6iDDpy%2BGVa%2Fi1B2HrFVeWS%2F4%2FFJB6G%2BqSG2m0h3vMSWE8BGdaLb9S02qNlR0Vil%2F5hOmEfgSW7RcpQ%2Fh5WWssS5MyUH30NB%2FF3xbgT%2BxSXQpDW04xB91J7yK01a7czzZEGZ8%2FXND%2FGxNa8twf4LKxEfAccuIu5c62081ojxH6%2B90%2FWvOTG4zH6HezP%2BQ9UchuzeV%2FdRYDRX01HQ%2B%2FEPa7eQ8nw4uesqb52%2B%2BhS9xFzSoKY30UwAzDrLX1tN1MKRLH4QclcM3lCeI6dWsjMFZnqrgiFKLlpgICs05t2NoJYWihrulzheVDJR1TcUedQZswvCGoP2Brvq96Xyuckg%2Barj5N1K6NGkzGF%2FvjN6F%2Fyahkl6T3gUNIBYuk8NA5pWnNNNcaM4ESpO4QPdUiDgsznb9Oyw1f1qFWh3AVhNakoqZus4jAw77s6PIVKK7o0ZhMLiF%2FcEGOqUBmGLpUNiAIQ4Gsu2IQV3KzQKiYPixzR1N3UnAgd3J7Lw7FLlLD1938c4%2FX2tG9xCqSKn0HrhAWDNAH2GXnup%2BUUbbn1wy40zuiRLByOY5gKoonh0ZI2qI2v%2FsVgggs1JKv6OqGizXU%2B6RaGa0F%2FkHR6N4RIRhgW6pvu3eancAjPG6iCtBJ7M8WW%2B5OIAi6jLjmaJ24sMi%2Fwa6nCafnbwdnOVbMp9T&X-Amz-Signature=9f8d94dd010525245df1b16bf91b1dafd7eb0761e025e658dbbc6d0a62099396&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVYDCAO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDD%2FMPIksWZhHbJJ%2FhOV8mmjeawnh8Clzns342cglVI8QIgBWdLojCbEolW13%2BZj4YMjGISHvg%2B0Q%2FMnoPk2atCAKYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDO2EdBvH%2Fxj7KbV6tyrcA1hTeC0c2A9%2B6NvzucNeXYKcBl13%2BnY2T%2FpBJM0MBcANKa7aiN%2F3o6CJX4bFT%2FbjN1w%2BmqNrycMhOeOhM0ii753pf9qxplkNxl%2F1LzxkpClLZ%2FkxDkwOvC76omjO3C%2FR0dDOiTmBMNNXeXYI9Jl%2B5GLPF%2BLjYRjr%2B7co6kQTbOxzKjjOr1HditjHm3VN6iDDpy%2BGVa%2Fi1B2HrFVeWS%2F4%2FFJB6G%2BqSG2m0h3vMSWE8BGdaLb9S02qNlR0Vil%2F5hOmEfgSW7RcpQ%2Fh5WWssS5MyUH30NB%2FF3xbgT%2BxSXQpDW04xB91J7yK01a7czzZEGZ8%2FXND%2FGxNa8twf4LKxEfAccuIu5c62081ojxH6%2B90%2FWvOTG4zH6HezP%2BQ9UchuzeV%2FdRYDRX01HQ%2B%2FEPa7eQ8nw4uesqb52%2B%2BhS9xFzSoKY30UwAzDrLX1tN1MKRLH4QclcM3lCeI6dWsjMFZnqrgiFKLlpgICs05t2NoJYWihrulzheVDJR1TcUedQZswvCGoP2Brvq96Xyuckg%2Barj5N1K6NGkzGF%2FvjN6F%2Fyahkl6T3gUNIBYuk8NA5pWnNNNcaM4ESpO4QPdUiDgsznb9Oyw1f1qFWh3AVhNakoqZus4jAw77s6PIVKK7o0ZhMLiF%2FcEGOqUBmGLpUNiAIQ4Gsu2IQV3KzQKiYPixzR1N3UnAgd3J7Lw7FLlLD1938c4%2FX2tG9xCqSKn0HrhAWDNAH2GXnup%2BUUbbn1wy40zuiRLByOY5gKoonh0ZI2qI2v%2FsVgggs1JKv6OqGizXU%2B6RaGa0F%2FkHR6N4RIRhgW6pvu3eancAjPG6iCtBJ7M8WW%2B5OIAi6jLjmaJ24sMi%2Fwa6nCafnbwdnOVbMp9T&X-Amz-Signature=da47482b178b3c246de178402c47a42ceff73f40caf540fe012325826c28da76&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVYDCAO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDD%2FMPIksWZhHbJJ%2FhOV8mmjeawnh8Clzns342cglVI8QIgBWdLojCbEolW13%2BZj4YMjGISHvg%2B0Q%2FMnoPk2atCAKYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDO2EdBvH%2Fxj7KbV6tyrcA1hTeC0c2A9%2B6NvzucNeXYKcBl13%2BnY2T%2FpBJM0MBcANKa7aiN%2F3o6CJX4bFT%2FbjN1w%2BmqNrycMhOeOhM0ii753pf9qxplkNxl%2F1LzxkpClLZ%2FkxDkwOvC76omjO3C%2FR0dDOiTmBMNNXeXYI9Jl%2B5GLPF%2BLjYRjr%2B7co6kQTbOxzKjjOr1HditjHm3VN6iDDpy%2BGVa%2Fi1B2HrFVeWS%2F4%2FFJB6G%2BqSG2m0h3vMSWE8BGdaLb9S02qNlR0Vil%2F5hOmEfgSW7RcpQ%2Fh5WWssS5MyUH30NB%2FF3xbgT%2BxSXQpDW04xB91J7yK01a7czzZEGZ8%2FXND%2FGxNa8twf4LKxEfAccuIu5c62081ojxH6%2B90%2FWvOTG4zH6HezP%2BQ9UchuzeV%2FdRYDRX01HQ%2B%2FEPa7eQ8nw4uesqb52%2B%2BhS9xFzSoKY30UwAzDrLX1tN1MKRLH4QclcM3lCeI6dWsjMFZnqrgiFKLlpgICs05t2NoJYWihrulzheVDJR1TcUedQZswvCGoP2Brvq96Xyuckg%2Barj5N1K6NGkzGF%2FvjN6F%2Fyahkl6T3gUNIBYuk8NA5pWnNNNcaM4ESpO4QPdUiDgsznb9Oyw1f1qFWh3AVhNakoqZus4jAw77s6PIVKK7o0ZhMLiF%2FcEGOqUBmGLpUNiAIQ4Gsu2IQV3KzQKiYPixzR1N3UnAgd3J7Lw7FLlLD1938c4%2FX2tG9xCqSKn0HrhAWDNAH2GXnup%2BUUbbn1wy40zuiRLByOY5gKoonh0ZI2qI2v%2FsVgggs1JKv6OqGizXU%2B6RaGa0F%2FkHR6N4RIRhgW6pvu3eancAjPG6iCtBJ7M8WW%2B5OIAi6jLjmaJ24sMi%2Fwa6nCafnbwdnOVbMp9T&X-Amz-Signature=03e8409b1c392d2c291ea8cc006326b8af619a54adfbb71ed643c92d6745fab1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVYDCAO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDD%2FMPIksWZhHbJJ%2FhOV8mmjeawnh8Clzns342cglVI8QIgBWdLojCbEolW13%2BZj4YMjGISHvg%2B0Q%2FMnoPk2atCAKYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDO2EdBvH%2Fxj7KbV6tyrcA1hTeC0c2A9%2B6NvzucNeXYKcBl13%2BnY2T%2FpBJM0MBcANKa7aiN%2F3o6CJX4bFT%2FbjN1w%2BmqNrycMhOeOhM0ii753pf9qxplkNxl%2F1LzxkpClLZ%2FkxDkwOvC76omjO3C%2FR0dDOiTmBMNNXeXYI9Jl%2B5GLPF%2BLjYRjr%2B7co6kQTbOxzKjjOr1HditjHm3VN6iDDpy%2BGVa%2Fi1B2HrFVeWS%2F4%2FFJB6G%2BqSG2m0h3vMSWE8BGdaLb9S02qNlR0Vil%2F5hOmEfgSW7RcpQ%2Fh5WWssS5MyUH30NB%2FF3xbgT%2BxSXQpDW04xB91J7yK01a7czzZEGZ8%2FXND%2FGxNa8twf4LKxEfAccuIu5c62081ojxH6%2B90%2FWvOTG4zH6HezP%2BQ9UchuzeV%2FdRYDRX01HQ%2B%2FEPa7eQ8nw4uesqb52%2B%2BhS9xFzSoKY30UwAzDrLX1tN1MKRLH4QclcM3lCeI6dWsjMFZnqrgiFKLlpgICs05t2NoJYWihrulzheVDJR1TcUedQZswvCGoP2Brvq96Xyuckg%2Barj5N1K6NGkzGF%2FvjN6F%2Fyahkl6T3gUNIBYuk8NA5pWnNNNcaM4ESpO4QPdUiDgsznb9Oyw1f1qFWh3AVhNakoqZus4jAw77s6PIVKK7o0ZhMLiF%2FcEGOqUBmGLpUNiAIQ4Gsu2IQV3KzQKiYPixzR1N3UnAgd3J7Lw7FLlLD1938c4%2FX2tG9xCqSKn0HrhAWDNAH2GXnup%2BUUbbn1wy40zuiRLByOY5gKoonh0ZI2qI2v%2FsVgggs1JKv6OqGizXU%2B6RaGa0F%2FkHR6N4RIRhgW6pvu3eancAjPG6iCtBJ7M8WW%2B5OIAi6jLjmaJ24sMi%2Fwa6nCafnbwdnOVbMp9T&X-Amz-Signature=3316ca8651e9011f7443c940fcf92c5d5f3798b43b580a9fa18dc088b7185463&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVYDCAO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDD%2FMPIksWZhHbJJ%2FhOV8mmjeawnh8Clzns342cglVI8QIgBWdLojCbEolW13%2BZj4YMjGISHvg%2B0Q%2FMnoPk2atCAKYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDO2EdBvH%2Fxj7KbV6tyrcA1hTeC0c2A9%2B6NvzucNeXYKcBl13%2BnY2T%2FpBJM0MBcANKa7aiN%2F3o6CJX4bFT%2FbjN1w%2BmqNrycMhOeOhM0ii753pf9qxplkNxl%2F1LzxkpClLZ%2FkxDkwOvC76omjO3C%2FR0dDOiTmBMNNXeXYI9Jl%2B5GLPF%2BLjYRjr%2B7co6kQTbOxzKjjOr1HditjHm3VN6iDDpy%2BGVa%2Fi1B2HrFVeWS%2F4%2FFJB6G%2BqSG2m0h3vMSWE8BGdaLb9S02qNlR0Vil%2F5hOmEfgSW7RcpQ%2Fh5WWssS5MyUH30NB%2FF3xbgT%2BxSXQpDW04xB91J7yK01a7czzZEGZ8%2FXND%2FGxNa8twf4LKxEfAccuIu5c62081ojxH6%2B90%2FWvOTG4zH6HezP%2BQ9UchuzeV%2FdRYDRX01HQ%2B%2FEPa7eQ8nw4uesqb52%2B%2BhS9xFzSoKY30UwAzDrLX1tN1MKRLH4QclcM3lCeI6dWsjMFZnqrgiFKLlpgICs05t2NoJYWihrulzheVDJR1TcUedQZswvCGoP2Brvq96Xyuckg%2Barj5N1K6NGkzGF%2FvjN6F%2Fyahkl6T3gUNIBYuk8NA5pWnNNNcaM4ESpO4QPdUiDgsznb9Oyw1f1qFWh3AVhNakoqZus4jAw77s6PIVKK7o0ZhMLiF%2FcEGOqUBmGLpUNiAIQ4Gsu2IQV3KzQKiYPixzR1N3UnAgd3J7Lw7FLlLD1938c4%2FX2tG9xCqSKn0HrhAWDNAH2GXnup%2BUUbbn1wy40zuiRLByOY5gKoonh0ZI2qI2v%2FsVgggs1JKv6OqGizXU%2B6RaGa0F%2FkHR6N4RIRhgW6pvu3eancAjPG6iCtBJ7M8WW%2B5OIAi6jLjmaJ24sMi%2Fwa6nCafnbwdnOVbMp9T&X-Amz-Signature=df1986cda6ccb2acc6e5c75a8bd70548a6e36005281a58c8a264389cf11c82c1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVYDCAO%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDD%2FMPIksWZhHbJJ%2FhOV8mmjeawnh8Clzns342cglVI8QIgBWdLojCbEolW13%2BZj4YMjGISHvg%2B0Q%2FMnoPk2atCAKYq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDO2EdBvH%2Fxj7KbV6tyrcA1hTeC0c2A9%2B6NvzucNeXYKcBl13%2BnY2T%2FpBJM0MBcANKa7aiN%2F3o6CJX4bFT%2FbjN1w%2BmqNrycMhOeOhM0ii753pf9qxplkNxl%2F1LzxkpClLZ%2FkxDkwOvC76omjO3C%2FR0dDOiTmBMNNXeXYI9Jl%2B5GLPF%2BLjYRjr%2B7co6kQTbOxzKjjOr1HditjHm3VN6iDDpy%2BGVa%2Fi1B2HrFVeWS%2F4%2FFJB6G%2BqSG2m0h3vMSWE8BGdaLb9S02qNlR0Vil%2F5hOmEfgSW7RcpQ%2Fh5WWssS5MyUH30NB%2FF3xbgT%2BxSXQpDW04xB91J7yK01a7czzZEGZ8%2FXND%2FGxNa8twf4LKxEfAccuIu5c62081ojxH6%2B90%2FWvOTG4zH6HezP%2BQ9UchuzeV%2FdRYDRX01HQ%2B%2FEPa7eQ8nw4uesqb52%2B%2BhS9xFzSoKY30UwAzDrLX1tN1MKRLH4QclcM3lCeI6dWsjMFZnqrgiFKLlpgICs05t2NoJYWihrulzheVDJR1TcUedQZswvCGoP2Brvq96Xyuckg%2Barj5N1K6NGkzGF%2FvjN6F%2Fyahkl6T3gUNIBYuk8NA5pWnNNNcaM4ESpO4QPdUiDgsznb9Oyw1f1qFWh3AVhNakoqZus4jAw77s6PIVKK7o0ZhMLiF%2FcEGOqUBmGLpUNiAIQ4Gsu2IQV3KzQKiYPixzR1N3UnAgd3J7Lw7FLlLD1938c4%2FX2tG9xCqSKn0HrhAWDNAH2GXnup%2BUUbbn1wy40zuiRLByOY5gKoonh0ZI2qI2v%2FsVgggs1JKv6OqGizXU%2B6RaGa0F%2FkHR6N4RIRhgW6pvu3eancAjPG6iCtBJ7M8WW%2B5OIAi6jLjmaJ24sMi%2Fwa6nCafnbwdnOVbMp9T&X-Amz-Signature=d7de5779b8ba2a1fddb41aaef68bdb91d93a28fe3731a17b9926829b8b89ee3c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
