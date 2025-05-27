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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWBU7TI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFL1Yu8doGWvrbSJkRbJU%2FnmmCvPGYK%2BInJ9KrP65i3AiAt7n1Va14ThXBL%2Bo2pMPxHtKjLVfpHk8Et160wy8xY0ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaHZvZBefgKRbRBGoKtwDLu6ekXVaYDX6BXxGlHFqQ2RcDgKd0YCBelrffs8QgxComv54pMwfjaOCaLBj8PSgzeQVmOM4ndeOzkv0I%2BB8bzxD4VLT8%2BHWvjdmKa6MFRey3km7%2FLYhLcI6Uq9CCymxXTMhweZcBSX0zzCMA0l6qkXBBPWjWqIrBroTozyeD2zC61iftQSwpgWg%2F5al6MnOCNqYTuPLOBmvW1BnVTce7nJ8AsCOHLkLxsRxX215ZgRlCI6zMxdDVdaH49%2BXNoZVvJcbtFi80dGS331RUTKEgU8%2BObekK0RJ4%2F32AGYGLnV85g5yGXR5lA3KUSgY1qHhNDRBJ%2BXaRMQX3qHxR%2FZKca%2FLyd%2FhlyKG%2FXc0bkNJGerDOPsafb%2FpBL1F576yhKyYIigzW%2F56B4sngd5pVlOg%2FdVS51hJ046dJ8ib0oWahS9u3DaG%2Bb2Yt%2F7dSOJHkmu2%2ForpP7QAAIuInAxNQC51O5O7tX7W0C3Gp4wTcpIRcQysfUHltj7X38P7ePgKo8VWgNbOqT39xXE7cmy5FurzCvFH88fCS%2BaBPEyywCmGKFgYUtpiAAa0f8dTcMD2eb6PjcQRjp34j4Ipwkf9HPkl95HlhIAhWBe480swpuydlqyj2%2Bmma4cTFYNAK4kwoJbUwQY6pgETb7aDRJl4nUwLzas6dcROMLBDd15kMz3Q7OvM%2F9UpACO3i8gxQ9gcJXsOevcDkdz9Vv9d%2BJwSCdeCjr729yaZo8tuCDFObWMdUbRuBmu7cIp72AdelFsd4Si4K0Zgpb65AIdSRlxs8kR9sOiLO3fpdI1ftgL7FlWuC4flDIkTV82VwqKiZQ0F%2F9LmsG5q5%2Fdj6V5WV4Kfzhd0WMyrf5QWRVVX9A9X&X-Amz-Signature=b4b9ba30a3219beaef37d3e8304b2533e898e2e6a302339b5e9985e68c7f0648&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWBU7TI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFL1Yu8doGWvrbSJkRbJU%2FnmmCvPGYK%2BInJ9KrP65i3AiAt7n1Va14ThXBL%2Bo2pMPxHtKjLVfpHk8Et160wy8xY0ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaHZvZBefgKRbRBGoKtwDLu6ekXVaYDX6BXxGlHFqQ2RcDgKd0YCBelrffs8QgxComv54pMwfjaOCaLBj8PSgzeQVmOM4ndeOzkv0I%2BB8bzxD4VLT8%2BHWvjdmKa6MFRey3km7%2FLYhLcI6Uq9CCymxXTMhweZcBSX0zzCMA0l6qkXBBPWjWqIrBroTozyeD2zC61iftQSwpgWg%2F5al6MnOCNqYTuPLOBmvW1BnVTce7nJ8AsCOHLkLxsRxX215ZgRlCI6zMxdDVdaH49%2BXNoZVvJcbtFi80dGS331RUTKEgU8%2BObekK0RJ4%2F32AGYGLnV85g5yGXR5lA3KUSgY1qHhNDRBJ%2BXaRMQX3qHxR%2FZKca%2FLyd%2FhlyKG%2FXc0bkNJGerDOPsafb%2FpBL1F576yhKyYIigzW%2F56B4sngd5pVlOg%2FdVS51hJ046dJ8ib0oWahS9u3DaG%2Bb2Yt%2F7dSOJHkmu2%2ForpP7QAAIuInAxNQC51O5O7tX7W0C3Gp4wTcpIRcQysfUHltj7X38P7ePgKo8VWgNbOqT39xXE7cmy5FurzCvFH88fCS%2BaBPEyywCmGKFgYUtpiAAa0f8dTcMD2eb6PjcQRjp34j4Ipwkf9HPkl95HlhIAhWBe480swpuydlqyj2%2Bmma4cTFYNAK4kwoJbUwQY6pgETb7aDRJl4nUwLzas6dcROMLBDd15kMz3Q7OvM%2F9UpACO3i8gxQ9gcJXsOevcDkdz9Vv9d%2BJwSCdeCjr729yaZo8tuCDFObWMdUbRuBmu7cIp72AdelFsd4Si4K0Zgpb65AIdSRlxs8kR9sOiLO3fpdI1ftgL7FlWuC4flDIkTV82VwqKiZQ0F%2F9LmsG5q5%2Fdj6V5WV4Kfzhd0WMyrf5QWRVVX9A9X&X-Amz-Signature=3783a2fd58888727ec7c74da9e13ffdabcb87e6b365a5f77cf5ce0e44e495e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWBU7TI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFL1Yu8doGWvrbSJkRbJU%2FnmmCvPGYK%2BInJ9KrP65i3AiAt7n1Va14ThXBL%2Bo2pMPxHtKjLVfpHk8Et160wy8xY0ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaHZvZBefgKRbRBGoKtwDLu6ekXVaYDX6BXxGlHFqQ2RcDgKd0YCBelrffs8QgxComv54pMwfjaOCaLBj8PSgzeQVmOM4ndeOzkv0I%2BB8bzxD4VLT8%2BHWvjdmKa6MFRey3km7%2FLYhLcI6Uq9CCymxXTMhweZcBSX0zzCMA0l6qkXBBPWjWqIrBroTozyeD2zC61iftQSwpgWg%2F5al6MnOCNqYTuPLOBmvW1BnVTce7nJ8AsCOHLkLxsRxX215ZgRlCI6zMxdDVdaH49%2BXNoZVvJcbtFi80dGS331RUTKEgU8%2BObekK0RJ4%2F32AGYGLnV85g5yGXR5lA3KUSgY1qHhNDRBJ%2BXaRMQX3qHxR%2FZKca%2FLyd%2FhlyKG%2FXc0bkNJGerDOPsafb%2FpBL1F576yhKyYIigzW%2F56B4sngd5pVlOg%2FdVS51hJ046dJ8ib0oWahS9u3DaG%2Bb2Yt%2F7dSOJHkmu2%2ForpP7QAAIuInAxNQC51O5O7tX7W0C3Gp4wTcpIRcQysfUHltj7X38P7ePgKo8VWgNbOqT39xXE7cmy5FurzCvFH88fCS%2BaBPEyywCmGKFgYUtpiAAa0f8dTcMD2eb6PjcQRjp34j4Ipwkf9HPkl95HlhIAhWBe480swpuydlqyj2%2Bmma4cTFYNAK4kwoJbUwQY6pgETb7aDRJl4nUwLzas6dcROMLBDd15kMz3Q7OvM%2F9UpACO3i8gxQ9gcJXsOevcDkdz9Vv9d%2BJwSCdeCjr729yaZo8tuCDFObWMdUbRuBmu7cIp72AdelFsd4Si4K0Zgpb65AIdSRlxs8kR9sOiLO3fpdI1ftgL7FlWuC4flDIkTV82VwqKiZQ0F%2F9LmsG5q5%2Fdj6V5WV4Kfzhd0WMyrf5QWRVVX9A9X&X-Amz-Signature=9e52427fa498d5eb7fe13a8b2a3c419d9772a5e8834afe41f94e3cc7578dea88&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWBU7TI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFL1Yu8doGWvrbSJkRbJU%2FnmmCvPGYK%2BInJ9KrP65i3AiAt7n1Va14ThXBL%2Bo2pMPxHtKjLVfpHk8Et160wy8xY0ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaHZvZBefgKRbRBGoKtwDLu6ekXVaYDX6BXxGlHFqQ2RcDgKd0YCBelrffs8QgxComv54pMwfjaOCaLBj8PSgzeQVmOM4ndeOzkv0I%2BB8bzxD4VLT8%2BHWvjdmKa6MFRey3km7%2FLYhLcI6Uq9CCymxXTMhweZcBSX0zzCMA0l6qkXBBPWjWqIrBroTozyeD2zC61iftQSwpgWg%2F5al6MnOCNqYTuPLOBmvW1BnVTce7nJ8AsCOHLkLxsRxX215ZgRlCI6zMxdDVdaH49%2BXNoZVvJcbtFi80dGS331RUTKEgU8%2BObekK0RJ4%2F32AGYGLnV85g5yGXR5lA3KUSgY1qHhNDRBJ%2BXaRMQX3qHxR%2FZKca%2FLyd%2FhlyKG%2FXc0bkNJGerDOPsafb%2FpBL1F576yhKyYIigzW%2F56B4sngd5pVlOg%2FdVS51hJ046dJ8ib0oWahS9u3DaG%2Bb2Yt%2F7dSOJHkmu2%2ForpP7QAAIuInAxNQC51O5O7tX7W0C3Gp4wTcpIRcQysfUHltj7X38P7ePgKo8VWgNbOqT39xXE7cmy5FurzCvFH88fCS%2BaBPEyywCmGKFgYUtpiAAa0f8dTcMD2eb6PjcQRjp34j4Ipwkf9HPkl95HlhIAhWBe480swpuydlqyj2%2Bmma4cTFYNAK4kwoJbUwQY6pgETb7aDRJl4nUwLzas6dcROMLBDd15kMz3Q7OvM%2F9UpACO3i8gxQ9gcJXsOevcDkdz9Vv9d%2BJwSCdeCjr729yaZo8tuCDFObWMdUbRuBmu7cIp72AdelFsd4Si4K0Zgpb65AIdSRlxs8kR9sOiLO3fpdI1ftgL7FlWuC4flDIkTV82VwqKiZQ0F%2F9LmsG5q5%2Fdj6V5WV4Kfzhd0WMyrf5QWRVVX9A9X&X-Amz-Signature=1061cd98af267cad9a0fc2201df5df10b0a3d86b0a24b291e899d2512759ab69&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWBU7TI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFL1Yu8doGWvrbSJkRbJU%2FnmmCvPGYK%2BInJ9KrP65i3AiAt7n1Va14ThXBL%2Bo2pMPxHtKjLVfpHk8Et160wy8xY0ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaHZvZBefgKRbRBGoKtwDLu6ekXVaYDX6BXxGlHFqQ2RcDgKd0YCBelrffs8QgxComv54pMwfjaOCaLBj8PSgzeQVmOM4ndeOzkv0I%2BB8bzxD4VLT8%2BHWvjdmKa6MFRey3km7%2FLYhLcI6Uq9CCymxXTMhweZcBSX0zzCMA0l6qkXBBPWjWqIrBroTozyeD2zC61iftQSwpgWg%2F5al6MnOCNqYTuPLOBmvW1BnVTce7nJ8AsCOHLkLxsRxX215ZgRlCI6zMxdDVdaH49%2BXNoZVvJcbtFi80dGS331RUTKEgU8%2BObekK0RJ4%2F32AGYGLnV85g5yGXR5lA3KUSgY1qHhNDRBJ%2BXaRMQX3qHxR%2FZKca%2FLyd%2FhlyKG%2FXc0bkNJGerDOPsafb%2FpBL1F576yhKyYIigzW%2F56B4sngd5pVlOg%2FdVS51hJ046dJ8ib0oWahS9u3DaG%2Bb2Yt%2F7dSOJHkmu2%2ForpP7QAAIuInAxNQC51O5O7tX7W0C3Gp4wTcpIRcQysfUHltj7X38P7ePgKo8VWgNbOqT39xXE7cmy5FurzCvFH88fCS%2BaBPEyywCmGKFgYUtpiAAa0f8dTcMD2eb6PjcQRjp34j4Ipwkf9HPkl95HlhIAhWBe480swpuydlqyj2%2Bmma4cTFYNAK4kwoJbUwQY6pgETb7aDRJl4nUwLzas6dcROMLBDd15kMz3Q7OvM%2F9UpACO3i8gxQ9gcJXsOevcDkdz9Vv9d%2BJwSCdeCjr729yaZo8tuCDFObWMdUbRuBmu7cIp72AdelFsd4Si4K0Zgpb65AIdSRlxs8kR9sOiLO3fpdI1ftgL7FlWuC4flDIkTV82VwqKiZQ0F%2F9LmsG5q5%2Fdj6V5WV4Kfzhd0WMyrf5QWRVVX9A9X&X-Amz-Signature=84ee40c719e4cb43dde72975991ab68f6fd02455bd13508ec597a96cb8068e68&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWBU7TI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFL1Yu8doGWvrbSJkRbJU%2FnmmCvPGYK%2BInJ9KrP65i3AiAt7n1Va14ThXBL%2Bo2pMPxHtKjLVfpHk8Et160wy8xY0ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaHZvZBefgKRbRBGoKtwDLu6ekXVaYDX6BXxGlHFqQ2RcDgKd0YCBelrffs8QgxComv54pMwfjaOCaLBj8PSgzeQVmOM4ndeOzkv0I%2BB8bzxD4VLT8%2BHWvjdmKa6MFRey3km7%2FLYhLcI6Uq9CCymxXTMhweZcBSX0zzCMA0l6qkXBBPWjWqIrBroTozyeD2zC61iftQSwpgWg%2F5al6MnOCNqYTuPLOBmvW1BnVTce7nJ8AsCOHLkLxsRxX215ZgRlCI6zMxdDVdaH49%2BXNoZVvJcbtFi80dGS331RUTKEgU8%2BObekK0RJ4%2F32AGYGLnV85g5yGXR5lA3KUSgY1qHhNDRBJ%2BXaRMQX3qHxR%2FZKca%2FLyd%2FhlyKG%2FXc0bkNJGerDOPsafb%2FpBL1F576yhKyYIigzW%2F56B4sngd5pVlOg%2FdVS51hJ046dJ8ib0oWahS9u3DaG%2Bb2Yt%2F7dSOJHkmu2%2ForpP7QAAIuInAxNQC51O5O7tX7W0C3Gp4wTcpIRcQysfUHltj7X38P7ePgKo8VWgNbOqT39xXE7cmy5FurzCvFH88fCS%2BaBPEyywCmGKFgYUtpiAAa0f8dTcMD2eb6PjcQRjp34j4Ipwkf9HPkl95HlhIAhWBe480swpuydlqyj2%2Bmma4cTFYNAK4kwoJbUwQY6pgETb7aDRJl4nUwLzas6dcROMLBDd15kMz3Q7OvM%2F9UpACO3i8gxQ9gcJXsOevcDkdz9Vv9d%2BJwSCdeCjr729yaZo8tuCDFObWMdUbRuBmu7cIp72AdelFsd4Si4K0Zgpb65AIdSRlxs8kR9sOiLO3fpdI1ftgL7FlWuC4flDIkTV82VwqKiZQ0F%2F9LmsG5q5%2Fdj6V5WV4Kfzhd0WMyrf5QWRVVX9A9X&X-Amz-Signature=caec920f4a925c9a7d8471b91d6d503ca373dfe561ec9b49214da70a983f9b28&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWBU7TI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFL1Yu8doGWvrbSJkRbJU%2FnmmCvPGYK%2BInJ9KrP65i3AiAt7n1Va14ThXBL%2Bo2pMPxHtKjLVfpHk8Et160wy8xY0ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaHZvZBefgKRbRBGoKtwDLu6ekXVaYDX6BXxGlHFqQ2RcDgKd0YCBelrffs8QgxComv54pMwfjaOCaLBj8PSgzeQVmOM4ndeOzkv0I%2BB8bzxD4VLT8%2BHWvjdmKa6MFRey3km7%2FLYhLcI6Uq9CCymxXTMhweZcBSX0zzCMA0l6qkXBBPWjWqIrBroTozyeD2zC61iftQSwpgWg%2F5al6MnOCNqYTuPLOBmvW1BnVTce7nJ8AsCOHLkLxsRxX215ZgRlCI6zMxdDVdaH49%2BXNoZVvJcbtFi80dGS331RUTKEgU8%2BObekK0RJ4%2F32AGYGLnV85g5yGXR5lA3KUSgY1qHhNDRBJ%2BXaRMQX3qHxR%2FZKca%2FLyd%2FhlyKG%2FXc0bkNJGerDOPsafb%2FpBL1F576yhKyYIigzW%2F56B4sngd5pVlOg%2FdVS51hJ046dJ8ib0oWahS9u3DaG%2Bb2Yt%2F7dSOJHkmu2%2ForpP7QAAIuInAxNQC51O5O7tX7W0C3Gp4wTcpIRcQysfUHltj7X38P7ePgKo8VWgNbOqT39xXE7cmy5FurzCvFH88fCS%2BaBPEyywCmGKFgYUtpiAAa0f8dTcMD2eb6PjcQRjp34j4Ipwkf9HPkl95HlhIAhWBe480swpuydlqyj2%2Bmma4cTFYNAK4kwoJbUwQY6pgETb7aDRJl4nUwLzas6dcROMLBDd15kMz3Q7OvM%2F9UpACO3i8gxQ9gcJXsOevcDkdz9Vv9d%2BJwSCdeCjr729yaZo8tuCDFObWMdUbRuBmu7cIp72AdelFsd4Si4K0Zgpb65AIdSRlxs8kR9sOiLO3fpdI1ftgL7FlWuC4flDIkTV82VwqKiZQ0F%2F9LmsG5q5%2Fdj6V5WV4Kfzhd0WMyrf5QWRVVX9A9X&X-Amz-Signature=c411caa61011ac7ab763d6bc787e866e269f018f59a7ee9b3ef914526c4ab5d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
