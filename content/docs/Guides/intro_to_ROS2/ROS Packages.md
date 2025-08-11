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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDQ47WT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFDIuzTqltkhrMryzkDDY6IMAVCS%2Bq36uMFBsYXCLe9wIhAKth%2B7lnjhc6u4c0rydj1P8WQ1CYO5d5WIQUnLeQn05kKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0tcHOex7tdSBToGYq3APLO3kaWoLnsI5c2QbxqjeYDB%2B3JYFKuMddiU5LrsSv1%2B1Tz6c37bRuQvwb63SMNEbvh4TriJ%2BTx6nlZeN3eypwT3xom6tCHiRA0SHyUKvWSdkawTSsdhbJejpadi1u0ZcUVG%2FPNuJrjkg3SEZJ09tuycoSpxzacdPU6eH3V8kXXsFaRY3Jc%2FSVS8jbuIXOUayWD80fcRCNZ4pQ75LwXUJ0UU%2FTZR5q6PrtkZo09n6gq7PtS%2BEaIz3jf%2FonVmF4tHNmuDVp5USJMSAJDbruuBp67rm7WiaHiw%2FpHHW7ODKD8CCQkGfwfErJPMqjgBldSAE%2BJ05B4ocOWdI8vDEusluy%2Bq%2Bfjb0YhItmxI7O5mHslRI7%2FQiKeTVNHpMx43aktTR3cDozyJpkAiwXuD94zoOwlgcTuYOC64tbz7wAV6EDaAzgdts2dzHBkqMqT3ueP6oCCjmSIB4CIiMbaTnvA7Z9ZcI7xNCKNpKXOLw1c1a0LNr15bygxp3tK4bS8RwtSLFgbkb3p3k04XSdvfaG475omi%2FDGGWrrq%2BOvysJ5tOs%2F4ZwwJW6wgvGfnbVy7TrxllO3OgGSmeu7LWvmdfOsLzEKZz2jnjPyYuERUZPQyRtwj7eTOsPYvPUmB2TZjCJ%2BebEBjqkAaQi%2BFIs%2BEkORPQ61eHMKcQythElgdAdTrAdKMiaUAcBUQifbjbI7OH24NOk1zh0Nyj9Z3yS8QDT%2BFDHNJd1%2Bhrd31x0pJr7gSPBTqGPCfXDTwnndRSS26WeMcvYLva5Drf311H3OGeWElGsf6IwxW59cRHEySa1%2FgSbM2EjXm79OaWgRw1DaTtD3T1uGTuOlHy%2Fx771J%2B4S0ldcZ1hZHbGzHJfb&X-Amz-Signature=279f8e9044602631faac9ec2d8291927f1007acbfba9b27588e71406395aa610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDQ47WT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFDIuzTqltkhrMryzkDDY6IMAVCS%2Bq36uMFBsYXCLe9wIhAKth%2B7lnjhc6u4c0rydj1P8WQ1CYO5d5WIQUnLeQn05kKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0tcHOex7tdSBToGYq3APLO3kaWoLnsI5c2QbxqjeYDB%2B3JYFKuMddiU5LrsSv1%2B1Tz6c37bRuQvwb63SMNEbvh4TriJ%2BTx6nlZeN3eypwT3xom6tCHiRA0SHyUKvWSdkawTSsdhbJejpadi1u0ZcUVG%2FPNuJrjkg3SEZJ09tuycoSpxzacdPU6eH3V8kXXsFaRY3Jc%2FSVS8jbuIXOUayWD80fcRCNZ4pQ75LwXUJ0UU%2FTZR5q6PrtkZo09n6gq7PtS%2BEaIz3jf%2FonVmF4tHNmuDVp5USJMSAJDbruuBp67rm7WiaHiw%2FpHHW7ODKD8CCQkGfwfErJPMqjgBldSAE%2BJ05B4ocOWdI8vDEusluy%2Bq%2Bfjb0YhItmxI7O5mHslRI7%2FQiKeTVNHpMx43aktTR3cDozyJpkAiwXuD94zoOwlgcTuYOC64tbz7wAV6EDaAzgdts2dzHBkqMqT3ueP6oCCjmSIB4CIiMbaTnvA7Z9ZcI7xNCKNpKXOLw1c1a0LNr15bygxp3tK4bS8RwtSLFgbkb3p3k04XSdvfaG475omi%2FDGGWrrq%2BOvysJ5tOs%2F4ZwwJW6wgvGfnbVy7TrxllO3OgGSmeu7LWvmdfOsLzEKZz2jnjPyYuERUZPQyRtwj7eTOsPYvPUmB2TZjCJ%2BebEBjqkAaQi%2BFIs%2BEkORPQ61eHMKcQythElgdAdTrAdKMiaUAcBUQifbjbI7OH24NOk1zh0Nyj9Z3yS8QDT%2BFDHNJd1%2Bhrd31x0pJr7gSPBTqGPCfXDTwnndRSS26WeMcvYLva5Drf311H3OGeWElGsf6IwxW59cRHEySa1%2FgSbM2EjXm79OaWgRw1DaTtD3T1uGTuOlHy%2Fx771J%2B4S0ldcZ1hZHbGzHJfb&X-Amz-Signature=37ccb46feea51dd8e1567407e051d394961a7786c51206ac0773b1588668124c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDQ47WT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFDIuzTqltkhrMryzkDDY6IMAVCS%2Bq36uMFBsYXCLe9wIhAKth%2B7lnjhc6u4c0rydj1P8WQ1CYO5d5WIQUnLeQn05kKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0tcHOex7tdSBToGYq3APLO3kaWoLnsI5c2QbxqjeYDB%2B3JYFKuMddiU5LrsSv1%2B1Tz6c37bRuQvwb63SMNEbvh4TriJ%2BTx6nlZeN3eypwT3xom6tCHiRA0SHyUKvWSdkawTSsdhbJejpadi1u0ZcUVG%2FPNuJrjkg3SEZJ09tuycoSpxzacdPU6eH3V8kXXsFaRY3Jc%2FSVS8jbuIXOUayWD80fcRCNZ4pQ75LwXUJ0UU%2FTZR5q6PrtkZo09n6gq7PtS%2BEaIz3jf%2FonVmF4tHNmuDVp5USJMSAJDbruuBp67rm7WiaHiw%2FpHHW7ODKD8CCQkGfwfErJPMqjgBldSAE%2BJ05B4ocOWdI8vDEusluy%2Bq%2Bfjb0YhItmxI7O5mHslRI7%2FQiKeTVNHpMx43aktTR3cDozyJpkAiwXuD94zoOwlgcTuYOC64tbz7wAV6EDaAzgdts2dzHBkqMqT3ueP6oCCjmSIB4CIiMbaTnvA7Z9ZcI7xNCKNpKXOLw1c1a0LNr15bygxp3tK4bS8RwtSLFgbkb3p3k04XSdvfaG475omi%2FDGGWrrq%2BOvysJ5tOs%2F4ZwwJW6wgvGfnbVy7TrxllO3OgGSmeu7LWvmdfOsLzEKZz2jnjPyYuERUZPQyRtwj7eTOsPYvPUmB2TZjCJ%2BebEBjqkAaQi%2BFIs%2BEkORPQ61eHMKcQythElgdAdTrAdKMiaUAcBUQifbjbI7OH24NOk1zh0Nyj9Z3yS8QDT%2BFDHNJd1%2Bhrd31x0pJr7gSPBTqGPCfXDTwnndRSS26WeMcvYLva5Drf311H3OGeWElGsf6IwxW59cRHEySa1%2FgSbM2EjXm79OaWgRw1DaTtD3T1uGTuOlHy%2Fx771J%2B4S0ldcZ1hZHbGzHJfb&X-Amz-Signature=3ab5db580b9058257cd9504d31e13a866c2fed7b60ae54e4e6403bfc25461075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDQ47WT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFDIuzTqltkhrMryzkDDY6IMAVCS%2Bq36uMFBsYXCLe9wIhAKth%2B7lnjhc6u4c0rydj1P8WQ1CYO5d5WIQUnLeQn05kKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0tcHOex7tdSBToGYq3APLO3kaWoLnsI5c2QbxqjeYDB%2B3JYFKuMddiU5LrsSv1%2B1Tz6c37bRuQvwb63SMNEbvh4TriJ%2BTx6nlZeN3eypwT3xom6tCHiRA0SHyUKvWSdkawTSsdhbJejpadi1u0ZcUVG%2FPNuJrjkg3SEZJ09tuycoSpxzacdPU6eH3V8kXXsFaRY3Jc%2FSVS8jbuIXOUayWD80fcRCNZ4pQ75LwXUJ0UU%2FTZR5q6PrtkZo09n6gq7PtS%2BEaIz3jf%2FonVmF4tHNmuDVp5USJMSAJDbruuBp67rm7WiaHiw%2FpHHW7ODKD8CCQkGfwfErJPMqjgBldSAE%2BJ05B4ocOWdI8vDEusluy%2Bq%2Bfjb0YhItmxI7O5mHslRI7%2FQiKeTVNHpMx43aktTR3cDozyJpkAiwXuD94zoOwlgcTuYOC64tbz7wAV6EDaAzgdts2dzHBkqMqT3ueP6oCCjmSIB4CIiMbaTnvA7Z9ZcI7xNCKNpKXOLw1c1a0LNr15bygxp3tK4bS8RwtSLFgbkb3p3k04XSdvfaG475omi%2FDGGWrrq%2BOvysJ5tOs%2F4ZwwJW6wgvGfnbVy7TrxllO3OgGSmeu7LWvmdfOsLzEKZz2jnjPyYuERUZPQyRtwj7eTOsPYvPUmB2TZjCJ%2BebEBjqkAaQi%2BFIs%2BEkORPQ61eHMKcQythElgdAdTrAdKMiaUAcBUQifbjbI7OH24NOk1zh0Nyj9Z3yS8QDT%2BFDHNJd1%2Bhrd31x0pJr7gSPBTqGPCfXDTwnndRSS26WeMcvYLva5Drf311H3OGeWElGsf6IwxW59cRHEySa1%2FgSbM2EjXm79OaWgRw1DaTtD3T1uGTuOlHy%2Fx771J%2B4S0ldcZ1hZHbGzHJfb&X-Amz-Signature=b2db7bc64c6d3ebb7760f47c5e0fb82cea9080ebb2e67bba3dd415c5fc4d9117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDQ47WT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFDIuzTqltkhrMryzkDDY6IMAVCS%2Bq36uMFBsYXCLe9wIhAKth%2B7lnjhc6u4c0rydj1P8WQ1CYO5d5WIQUnLeQn05kKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0tcHOex7tdSBToGYq3APLO3kaWoLnsI5c2QbxqjeYDB%2B3JYFKuMddiU5LrsSv1%2B1Tz6c37bRuQvwb63SMNEbvh4TriJ%2BTx6nlZeN3eypwT3xom6tCHiRA0SHyUKvWSdkawTSsdhbJejpadi1u0ZcUVG%2FPNuJrjkg3SEZJ09tuycoSpxzacdPU6eH3V8kXXsFaRY3Jc%2FSVS8jbuIXOUayWD80fcRCNZ4pQ75LwXUJ0UU%2FTZR5q6PrtkZo09n6gq7PtS%2BEaIz3jf%2FonVmF4tHNmuDVp5USJMSAJDbruuBp67rm7WiaHiw%2FpHHW7ODKD8CCQkGfwfErJPMqjgBldSAE%2BJ05B4ocOWdI8vDEusluy%2Bq%2Bfjb0YhItmxI7O5mHslRI7%2FQiKeTVNHpMx43aktTR3cDozyJpkAiwXuD94zoOwlgcTuYOC64tbz7wAV6EDaAzgdts2dzHBkqMqT3ueP6oCCjmSIB4CIiMbaTnvA7Z9ZcI7xNCKNpKXOLw1c1a0LNr15bygxp3tK4bS8RwtSLFgbkb3p3k04XSdvfaG475omi%2FDGGWrrq%2BOvysJ5tOs%2F4ZwwJW6wgvGfnbVy7TrxllO3OgGSmeu7LWvmdfOsLzEKZz2jnjPyYuERUZPQyRtwj7eTOsPYvPUmB2TZjCJ%2BebEBjqkAaQi%2BFIs%2BEkORPQ61eHMKcQythElgdAdTrAdKMiaUAcBUQifbjbI7OH24NOk1zh0Nyj9Z3yS8QDT%2BFDHNJd1%2Bhrd31x0pJr7gSPBTqGPCfXDTwnndRSS26WeMcvYLva5Drf311H3OGeWElGsf6IwxW59cRHEySa1%2FgSbM2EjXm79OaWgRw1DaTtD3T1uGTuOlHy%2Fx771J%2B4S0ldcZ1hZHbGzHJfb&X-Amz-Signature=6bfc97fbfbec5289b1aa1d434db383e57a78e23ad8358f5f5cadbf4a3eceebea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDQ47WT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFDIuzTqltkhrMryzkDDY6IMAVCS%2Bq36uMFBsYXCLe9wIhAKth%2B7lnjhc6u4c0rydj1P8WQ1CYO5d5WIQUnLeQn05kKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0tcHOex7tdSBToGYq3APLO3kaWoLnsI5c2QbxqjeYDB%2B3JYFKuMddiU5LrsSv1%2B1Tz6c37bRuQvwb63SMNEbvh4TriJ%2BTx6nlZeN3eypwT3xom6tCHiRA0SHyUKvWSdkawTSsdhbJejpadi1u0ZcUVG%2FPNuJrjkg3SEZJ09tuycoSpxzacdPU6eH3V8kXXsFaRY3Jc%2FSVS8jbuIXOUayWD80fcRCNZ4pQ75LwXUJ0UU%2FTZR5q6PrtkZo09n6gq7PtS%2BEaIz3jf%2FonVmF4tHNmuDVp5USJMSAJDbruuBp67rm7WiaHiw%2FpHHW7ODKD8CCQkGfwfErJPMqjgBldSAE%2BJ05B4ocOWdI8vDEusluy%2Bq%2Bfjb0YhItmxI7O5mHslRI7%2FQiKeTVNHpMx43aktTR3cDozyJpkAiwXuD94zoOwlgcTuYOC64tbz7wAV6EDaAzgdts2dzHBkqMqT3ueP6oCCjmSIB4CIiMbaTnvA7Z9ZcI7xNCKNpKXOLw1c1a0LNr15bygxp3tK4bS8RwtSLFgbkb3p3k04XSdvfaG475omi%2FDGGWrrq%2BOvysJ5tOs%2F4ZwwJW6wgvGfnbVy7TrxllO3OgGSmeu7LWvmdfOsLzEKZz2jnjPyYuERUZPQyRtwj7eTOsPYvPUmB2TZjCJ%2BebEBjqkAaQi%2BFIs%2BEkORPQ61eHMKcQythElgdAdTrAdKMiaUAcBUQifbjbI7OH24NOk1zh0Nyj9Z3yS8QDT%2BFDHNJd1%2Bhrd31x0pJr7gSPBTqGPCfXDTwnndRSS26WeMcvYLva5Drf311H3OGeWElGsf6IwxW59cRHEySa1%2FgSbM2EjXm79OaWgRw1DaTtD3T1uGTuOlHy%2Fx771J%2B4S0ldcZ1hZHbGzHJfb&X-Amz-Signature=cc76523a109011cbb755bc316bb4e3b01489b82aee225a1d8b2504c682caf26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDQ47WT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFDIuzTqltkhrMryzkDDY6IMAVCS%2Bq36uMFBsYXCLe9wIhAKth%2B7lnjhc6u4c0rydj1P8WQ1CYO5d5WIQUnLeQn05kKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0tcHOex7tdSBToGYq3APLO3kaWoLnsI5c2QbxqjeYDB%2B3JYFKuMddiU5LrsSv1%2B1Tz6c37bRuQvwb63SMNEbvh4TriJ%2BTx6nlZeN3eypwT3xom6tCHiRA0SHyUKvWSdkawTSsdhbJejpadi1u0ZcUVG%2FPNuJrjkg3SEZJ09tuycoSpxzacdPU6eH3V8kXXsFaRY3Jc%2FSVS8jbuIXOUayWD80fcRCNZ4pQ75LwXUJ0UU%2FTZR5q6PrtkZo09n6gq7PtS%2BEaIz3jf%2FonVmF4tHNmuDVp5USJMSAJDbruuBp67rm7WiaHiw%2FpHHW7ODKD8CCQkGfwfErJPMqjgBldSAE%2BJ05B4ocOWdI8vDEusluy%2Bq%2Bfjb0YhItmxI7O5mHslRI7%2FQiKeTVNHpMx43aktTR3cDozyJpkAiwXuD94zoOwlgcTuYOC64tbz7wAV6EDaAzgdts2dzHBkqMqT3ueP6oCCjmSIB4CIiMbaTnvA7Z9ZcI7xNCKNpKXOLw1c1a0LNr15bygxp3tK4bS8RwtSLFgbkb3p3k04XSdvfaG475omi%2FDGGWrrq%2BOvysJ5tOs%2F4ZwwJW6wgvGfnbVy7TrxllO3OgGSmeu7LWvmdfOsLzEKZz2jnjPyYuERUZPQyRtwj7eTOsPYvPUmB2TZjCJ%2BebEBjqkAaQi%2BFIs%2BEkORPQ61eHMKcQythElgdAdTrAdKMiaUAcBUQifbjbI7OH24NOk1zh0Nyj9Z3yS8QDT%2BFDHNJd1%2Bhrd31x0pJr7gSPBTqGPCfXDTwnndRSS26WeMcvYLva5Drf311H3OGeWElGsf6IwxW59cRHEySa1%2FgSbM2EjXm79OaWgRw1DaTtD3T1uGTuOlHy%2Fx771J%2B4S0ldcZ1hZHbGzHJfb&X-Amz-Signature=424a98b00d539ab677d1ea292cfbedec17c56c9e9763a11169d519148f964f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
