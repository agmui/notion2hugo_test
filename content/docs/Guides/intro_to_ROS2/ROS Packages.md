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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBB4EPM4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl%2FPrVY89LYQfDuqbqMFHottKGLOuOcH%2BsHh2PXtO4IwIhAKR3HBA8wf1rGlNcryBDITTO7HNPA7zWrXFpoiIVxoDUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEyd%2BE%2FpSu6oOlv%2Fgq3ANTqrrXayjPQ4va5Juo6DMllKuiyxoyv5yBijR5MfzI5wcnHoJe%2Fj9BodM4Rhp01fPgFP5h8oKsGz5bJ6%2FLbX4RY0uBHyOtyVyDGA4bXqH%2FBIcPkasVp8Y97%2FggWdQ4erizMYt3a6r9zdg4EIqOccYQ%2FfjInJuPx4T58xVzUDwNIS2jl2TAcffYLsi84aYhjkTziPHv8ZQDfHBKHEyX7lnSDkS%2F4kyfneBrotc7UugMg0nf67JvvGNwXLGGX17sl87gXxJnp6nsvbcypAS7HTjpp5lzcU3oEMO%2FOCOjMTmwgiV%2BiGO8RbP47hkyjpRgZNLPfis%2F6vzWRVv2cQnYCsyvpWRzeDGFQvyXjvz2a6CokkdWwXx0tfZSkM6ez0NhmeXmvYvOsgWR5wvKbbYh20pWt7sBoyjLffpc2DfbrJ38hJdbpBGr3twWOxXHP3MHRFkhxjmwws65In1wAOWRelFPtaQe%2FULGmprDQJAASngL48iIK3t1OpNaKc5TbQq2rGz2bopdHL5CkIQbfYedbJXuJjC9xvVC0SILmJoIb1SaOqGYBJ0Z88lSGKROyG6x33YCMkaAKXxwKioCTsGkAFo8jJUtWz68n%2BLK3tAQnBLsqjZXL8rEw%2B%2B%2FxuKYdTC5nezBBjqkAUziKMiFqTRoejXS6v0cttsUVhzkHCZcYRdpSxJxINS%2FYLaGv%2FO2ijRzJ92Q8dbok1dmSYvW1ki2aHitpQQYsaqDHOT5JetmDinfdUob5SIsRKXm4abNtDjDiNBdcwl1bxD6aSgEGRMz9VUcpJcTjfwpTGOiElx5UR5noDWhw%2BadoP6sA4A%2FyadbXaetzesVOQO%2F6i%2FOoFZ2PzALAMg5kE0JP4iv&X-Amz-Signature=ff34cbcd0def4bd609ae6e7f60f833f9bbcbbd4b5715958df499556daafa9b54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBB4EPM4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl%2FPrVY89LYQfDuqbqMFHottKGLOuOcH%2BsHh2PXtO4IwIhAKR3HBA8wf1rGlNcryBDITTO7HNPA7zWrXFpoiIVxoDUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEyd%2BE%2FpSu6oOlv%2Fgq3ANTqrrXayjPQ4va5Juo6DMllKuiyxoyv5yBijR5MfzI5wcnHoJe%2Fj9BodM4Rhp01fPgFP5h8oKsGz5bJ6%2FLbX4RY0uBHyOtyVyDGA4bXqH%2FBIcPkasVp8Y97%2FggWdQ4erizMYt3a6r9zdg4EIqOccYQ%2FfjInJuPx4T58xVzUDwNIS2jl2TAcffYLsi84aYhjkTziPHv8ZQDfHBKHEyX7lnSDkS%2F4kyfneBrotc7UugMg0nf67JvvGNwXLGGX17sl87gXxJnp6nsvbcypAS7HTjpp5lzcU3oEMO%2FOCOjMTmwgiV%2BiGO8RbP47hkyjpRgZNLPfis%2F6vzWRVv2cQnYCsyvpWRzeDGFQvyXjvz2a6CokkdWwXx0tfZSkM6ez0NhmeXmvYvOsgWR5wvKbbYh20pWt7sBoyjLffpc2DfbrJ38hJdbpBGr3twWOxXHP3MHRFkhxjmwws65In1wAOWRelFPtaQe%2FULGmprDQJAASngL48iIK3t1OpNaKc5TbQq2rGz2bopdHL5CkIQbfYedbJXuJjC9xvVC0SILmJoIb1SaOqGYBJ0Z88lSGKROyG6x33YCMkaAKXxwKioCTsGkAFo8jJUtWz68n%2BLK3tAQnBLsqjZXL8rEw%2B%2B%2FxuKYdTC5nezBBjqkAUziKMiFqTRoejXS6v0cttsUVhzkHCZcYRdpSxJxINS%2FYLaGv%2FO2ijRzJ92Q8dbok1dmSYvW1ki2aHitpQQYsaqDHOT5JetmDinfdUob5SIsRKXm4abNtDjDiNBdcwl1bxD6aSgEGRMz9VUcpJcTjfwpTGOiElx5UR5noDWhw%2BadoP6sA4A%2FyadbXaetzesVOQO%2F6i%2FOoFZ2PzALAMg5kE0JP4iv&X-Amz-Signature=5f1ee6db7f6339ed0bebe0745b0042395ab79fa3ed2fbc70c3a0ba621ae422a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBB4EPM4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl%2FPrVY89LYQfDuqbqMFHottKGLOuOcH%2BsHh2PXtO4IwIhAKR3HBA8wf1rGlNcryBDITTO7HNPA7zWrXFpoiIVxoDUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEyd%2BE%2FpSu6oOlv%2Fgq3ANTqrrXayjPQ4va5Juo6DMllKuiyxoyv5yBijR5MfzI5wcnHoJe%2Fj9BodM4Rhp01fPgFP5h8oKsGz5bJ6%2FLbX4RY0uBHyOtyVyDGA4bXqH%2FBIcPkasVp8Y97%2FggWdQ4erizMYt3a6r9zdg4EIqOccYQ%2FfjInJuPx4T58xVzUDwNIS2jl2TAcffYLsi84aYhjkTziPHv8ZQDfHBKHEyX7lnSDkS%2F4kyfneBrotc7UugMg0nf67JvvGNwXLGGX17sl87gXxJnp6nsvbcypAS7HTjpp5lzcU3oEMO%2FOCOjMTmwgiV%2BiGO8RbP47hkyjpRgZNLPfis%2F6vzWRVv2cQnYCsyvpWRzeDGFQvyXjvz2a6CokkdWwXx0tfZSkM6ez0NhmeXmvYvOsgWR5wvKbbYh20pWt7sBoyjLffpc2DfbrJ38hJdbpBGr3twWOxXHP3MHRFkhxjmwws65In1wAOWRelFPtaQe%2FULGmprDQJAASngL48iIK3t1OpNaKc5TbQq2rGz2bopdHL5CkIQbfYedbJXuJjC9xvVC0SILmJoIb1SaOqGYBJ0Z88lSGKROyG6x33YCMkaAKXxwKioCTsGkAFo8jJUtWz68n%2BLK3tAQnBLsqjZXL8rEw%2B%2B%2FxuKYdTC5nezBBjqkAUziKMiFqTRoejXS6v0cttsUVhzkHCZcYRdpSxJxINS%2FYLaGv%2FO2ijRzJ92Q8dbok1dmSYvW1ki2aHitpQQYsaqDHOT5JetmDinfdUob5SIsRKXm4abNtDjDiNBdcwl1bxD6aSgEGRMz9VUcpJcTjfwpTGOiElx5UR5noDWhw%2BadoP6sA4A%2FyadbXaetzesVOQO%2F6i%2FOoFZ2PzALAMg5kE0JP4iv&X-Amz-Signature=54f6773d45070f3c402b03071eeb7e98cf0eeeaedf7334ace11510a1e4395cee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBB4EPM4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl%2FPrVY89LYQfDuqbqMFHottKGLOuOcH%2BsHh2PXtO4IwIhAKR3HBA8wf1rGlNcryBDITTO7HNPA7zWrXFpoiIVxoDUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEyd%2BE%2FpSu6oOlv%2Fgq3ANTqrrXayjPQ4va5Juo6DMllKuiyxoyv5yBijR5MfzI5wcnHoJe%2Fj9BodM4Rhp01fPgFP5h8oKsGz5bJ6%2FLbX4RY0uBHyOtyVyDGA4bXqH%2FBIcPkasVp8Y97%2FggWdQ4erizMYt3a6r9zdg4EIqOccYQ%2FfjInJuPx4T58xVzUDwNIS2jl2TAcffYLsi84aYhjkTziPHv8ZQDfHBKHEyX7lnSDkS%2F4kyfneBrotc7UugMg0nf67JvvGNwXLGGX17sl87gXxJnp6nsvbcypAS7HTjpp5lzcU3oEMO%2FOCOjMTmwgiV%2BiGO8RbP47hkyjpRgZNLPfis%2F6vzWRVv2cQnYCsyvpWRzeDGFQvyXjvz2a6CokkdWwXx0tfZSkM6ez0NhmeXmvYvOsgWR5wvKbbYh20pWt7sBoyjLffpc2DfbrJ38hJdbpBGr3twWOxXHP3MHRFkhxjmwws65In1wAOWRelFPtaQe%2FULGmprDQJAASngL48iIK3t1OpNaKc5TbQq2rGz2bopdHL5CkIQbfYedbJXuJjC9xvVC0SILmJoIb1SaOqGYBJ0Z88lSGKROyG6x33YCMkaAKXxwKioCTsGkAFo8jJUtWz68n%2BLK3tAQnBLsqjZXL8rEw%2B%2B%2FxuKYdTC5nezBBjqkAUziKMiFqTRoejXS6v0cttsUVhzkHCZcYRdpSxJxINS%2FYLaGv%2FO2ijRzJ92Q8dbok1dmSYvW1ki2aHitpQQYsaqDHOT5JetmDinfdUob5SIsRKXm4abNtDjDiNBdcwl1bxD6aSgEGRMz9VUcpJcTjfwpTGOiElx5UR5noDWhw%2BadoP6sA4A%2FyadbXaetzesVOQO%2F6i%2FOoFZ2PzALAMg5kE0JP4iv&X-Amz-Signature=cd7ed99f89503570ef4c47a70cecac260b482ccd66985638039d6a5f1332a1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBB4EPM4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl%2FPrVY89LYQfDuqbqMFHottKGLOuOcH%2BsHh2PXtO4IwIhAKR3HBA8wf1rGlNcryBDITTO7HNPA7zWrXFpoiIVxoDUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEyd%2BE%2FpSu6oOlv%2Fgq3ANTqrrXayjPQ4va5Juo6DMllKuiyxoyv5yBijR5MfzI5wcnHoJe%2Fj9BodM4Rhp01fPgFP5h8oKsGz5bJ6%2FLbX4RY0uBHyOtyVyDGA4bXqH%2FBIcPkasVp8Y97%2FggWdQ4erizMYt3a6r9zdg4EIqOccYQ%2FfjInJuPx4T58xVzUDwNIS2jl2TAcffYLsi84aYhjkTziPHv8ZQDfHBKHEyX7lnSDkS%2F4kyfneBrotc7UugMg0nf67JvvGNwXLGGX17sl87gXxJnp6nsvbcypAS7HTjpp5lzcU3oEMO%2FOCOjMTmwgiV%2BiGO8RbP47hkyjpRgZNLPfis%2F6vzWRVv2cQnYCsyvpWRzeDGFQvyXjvz2a6CokkdWwXx0tfZSkM6ez0NhmeXmvYvOsgWR5wvKbbYh20pWt7sBoyjLffpc2DfbrJ38hJdbpBGr3twWOxXHP3MHRFkhxjmwws65In1wAOWRelFPtaQe%2FULGmprDQJAASngL48iIK3t1OpNaKc5TbQq2rGz2bopdHL5CkIQbfYedbJXuJjC9xvVC0SILmJoIb1SaOqGYBJ0Z88lSGKROyG6x33YCMkaAKXxwKioCTsGkAFo8jJUtWz68n%2BLK3tAQnBLsqjZXL8rEw%2B%2B%2FxuKYdTC5nezBBjqkAUziKMiFqTRoejXS6v0cttsUVhzkHCZcYRdpSxJxINS%2FYLaGv%2FO2ijRzJ92Q8dbok1dmSYvW1ki2aHitpQQYsaqDHOT5JetmDinfdUob5SIsRKXm4abNtDjDiNBdcwl1bxD6aSgEGRMz9VUcpJcTjfwpTGOiElx5UR5noDWhw%2BadoP6sA4A%2FyadbXaetzesVOQO%2F6i%2FOoFZ2PzALAMg5kE0JP4iv&X-Amz-Signature=03a7dec74c954b56d93cc1c04f7728cf94f6a2ca35035cccbae1bb12dcad61b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBB4EPM4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl%2FPrVY89LYQfDuqbqMFHottKGLOuOcH%2BsHh2PXtO4IwIhAKR3HBA8wf1rGlNcryBDITTO7HNPA7zWrXFpoiIVxoDUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEyd%2BE%2FpSu6oOlv%2Fgq3ANTqrrXayjPQ4va5Juo6DMllKuiyxoyv5yBijR5MfzI5wcnHoJe%2Fj9BodM4Rhp01fPgFP5h8oKsGz5bJ6%2FLbX4RY0uBHyOtyVyDGA4bXqH%2FBIcPkasVp8Y97%2FggWdQ4erizMYt3a6r9zdg4EIqOccYQ%2FfjInJuPx4T58xVzUDwNIS2jl2TAcffYLsi84aYhjkTziPHv8ZQDfHBKHEyX7lnSDkS%2F4kyfneBrotc7UugMg0nf67JvvGNwXLGGX17sl87gXxJnp6nsvbcypAS7HTjpp5lzcU3oEMO%2FOCOjMTmwgiV%2BiGO8RbP47hkyjpRgZNLPfis%2F6vzWRVv2cQnYCsyvpWRzeDGFQvyXjvz2a6CokkdWwXx0tfZSkM6ez0NhmeXmvYvOsgWR5wvKbbYh20pWt7sBoyjLffpc2DfbrJ38hJdbpBGr3twWOxXHP3MHRFkhxjmwws65In1wAOWRelFPtaQe%2FULGmprDQJAASngL48iIK3t1OpNaKc5TbQq2rGz2bopdHL5CkIQbfYedbJXuJjC9xvVC0SILmJoIb1SaOqGYBJ0Z88lSGKROyG6x33YCMkaAKXxwKioCTsGkAFo8jJUtWz68n%2BLK3tAQnBLsqjZXL8rEw%2B%2B%2FxuKYdTC5nezBBjqkAUziKMiFqTRoejXS6v0cttsUVhzkHCZcYRdpSxJxINS%2FYLaGv%2FO2ijRzJ92Q8dbok1dmSYvW1ki2aHitpQQYsaqDHOT5JetmDinfdUob5SIsRKXm4abNtDjDiNBdcwl1bxD6aSgEGRMz9VUcpJcTjfwpTGOiElx5UR5noDWhw%2BadoP6sA4A%2FyadbXaetzesVOQO%2F6i%2FOoFZ2PzALAMg5kE0JP4iv&X-Amz-Signature=30a80cb33501befb5a4b9b3494146048e182100256c8fa4c32c840f60cd42a81&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBB4EPM4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl%2FPrVY89LYQfDuqbqMFHottKGLOuOcH%2BsHh2PXtO4IwIhAKR3HBA8wf1rGlNcryBDITTO7HNPA7zWrXFpoiIVxoDUKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEyd%2BE%2FpSu6oOlv%2Fgq3ANTqrrXayjPQ4va5Juo6DMllKuiyxoyv5yBijR5MfzI5wcnHoJe%2Fj9BodM4Rhp01fPgFP5h8oKsGz5bJ6%2FLbX4RY0uBHyOtyVyDGA4bXqH%2FBIcPkasVp8Y97%2FggWdQ4erizMYt3a6r9zdg4EIqOccYQ%2FfjInJuPx4T58xVzUDwNIS2jl2TAcffYLsi84aYhjkTziPHv8ZQDfHBKHEyX7lnSDkS%2F4kyfneBrotc7UugMg0nf67JvvGNwXLGGX17sl87gXxJnp6nsvbcypAS7HTjpp5lzcU3oEMO%2FOCOjMTmwgiV%2BiGO8RbP47hkyjpRgZNLPfis%2F6vzWRVv2cQnYCsyvpWRzeDGFQvyXjvz2a6CokkdWwXx0tfZSkM6ez0NhmeXmvYvOsgWR5wvKbbYh20pWt7sBoyjLffpc2DfbrJ38hJdbpBGr3twWOxXHP3MHRFkhxjmwws65In1wAOWRelFPtaQe%2FULGmprDQJAASngL48iIK3t1OpNaKc5TbQq2rGz2bopdHL5CkIQbfYedbJXuJjC9xvVC0SILmJoIb1SaOqGYBJ0Z88lSGKROyG6x33YCMkaAKXxwKioCTsGkAFo8jJUtWz68n%2BLK3tAQnBLsqjZXL8rEw%2B%2B%2FxuKYdTC5nezBBjqkAUziKMiFqTRoejXS6v0cttsUVhzkHCZcYRdpSxJxINS%2FYLaGv%2FO2ijRzJ92Q8dbok1dmSYvW1ki2aHitpQQYsaqDHOT5JetmDinfdUob5SIsRKXm4abNtDjDiNBdcwl1bxD6aSgEGRMz9VUcpJcTjfwpTGOiElx5UR5noDWhw%2BadoP6sA4A%2FyadbXaetzesVOQO%2F6i%2FOoFZ2PzALAMg5kE0JP4iv&X-Amz-Signature=ed4619baed4675d183b57b6af73e32e25f78088aae5a606330f0875de4fa101e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
