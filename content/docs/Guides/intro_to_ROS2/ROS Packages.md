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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEG2QVE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIB3Uo31vahcewg0iCyOX2kLNmcOxapoyzm1fFA62AUXIAiEAnBWXGny3x%2FGZEmOR63CuiMkkEbam4yuQTnOr9Arm0qQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyt6b%2FaVPfr00CT5CrcA0bEdHVV%2FRRcHTzmqrk3ZCogw7I8lMDqMYjomzj5Kyxs2%2B7wIM07zeZb%2BIcgI3S%2Bu4gCpcTrrnB78gnuPr%2BHQZWHbClJmceDe25GIydIWDk9TN0h6no7uOkB3UitSlS4hSRHcIp8lCOqhhNbjq4VYcqT8yEYvwMbtfWbEavxrlFGmNbimyLdPz6BuVPVhaEbCt6BW90ts%2FrKGFK3UwE1fy3uFY%2F1MNbIckifSTyMU38WMvEJrUloRluIKAStw6pfOZbkU4z7z1nqAJ11IYUuiNhLre86m5dzbUc64BKUc2fVR7iUEN%2B5j0YtZrW7w5tUM7T8s2vclsDNrIKJ4IElFaRIPR%2FQm1swwRxXG3H0x84Kkm9fsIF7vEBbtJH79siIswMEBS%2Bq3LkLHnnptDiq4WiE9oQhaZ3Zhw1eQQqCEUtsUJC8owgUFT%2BAnhKU2Nwk23JYLnkVVsxWh%2BTLEMcOjquvjj45k7VMWmJFug1MfonFH68zpJeRKPACUpqF%2BYHAo1Ddic5I7edAX4kMHdXJwlCn6Ry2YbYmY98eDTArQ8wgCJl2LnlDWFiIjt95pOyLLesxo1ajedTsHDMeCi2pieExAFhtocUwpXUOsRZDd5BqMn06DZMh3zIiEq6PMMekksAGOqUBQlwFUntUDlJOJmhpObK7hgpLXj5FLmmZEhCDh2SbC4iANaKTpqxk2KJ5XWbNo4MfkQG5W8zQwpl5u0P3UjAhaArn%2BUHdYg7mo1SvU3MPKfClz%2FPlDCD13iTz6FbySaMtoEVRV6GadLpvYgrpgZGxIGLCpnyVBLYCvD%2Fq6rTtS9hK29eDeGu703l7vZGRoMO6dMPSDmumOfyYcVJNDsmsd7NIfQeo&X-Amz-Signature=6e0714f0d11b41dca8c30f1e791093acc1764c32f36acea33ec1363522dcefaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEG2QVE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIB3Uo31vahcewg0iCyOX2kLNmcOxapoyzm1fFA62AUXIAiEAnBWXGny3x%2FGZEmOR63CuiMkkEbam4yuQTnOr9Arm0qQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyt6b%2FaVPfr00CT5CrcA0bEdHVV%2FRRcHTzmqrk3ZCogw7I8lMDqMYjomzj5Kyxs2%2B7wIM07zeZb%2BIcgI3S%2Bu4gCpcTrrnB78gnuPr%2BHQZWHbClJmceDe25GIydIWDk9TN0h6no7uOkB3UitSlS4hSRHcIp8lCOqhhNbjq4VYcqT8yEYvwMbtfWbEavxrlFGmNbimyLdPz6BuVPVhaEbCt6BW90ts%2FrKGFK3UwE1fy3uFY%2F1MNbIckifSTyMU38WMvEJrUloRluIKAStw6pfOZbkU4z7z1nqAJ11IYUuiNhLre86m5dzbUc64BKUc2fVR7iUEN%2B5j0YtZrW7w5tUM7T8s2vclsDNrIKJ4IElFaRIPR%2FQm1swwRxXG3H0x84Kkm9fsIF7vEBbtJH79siIswMEBS%2Bq3LkLHnnptDiq4WiE9oQhaZ3Zhw1eQQqCEUtsUJC8owgUFT%2BAnhKU2Nwk23JYLnkVVsxWh%2BTLEMcOjquvjj45k7VMWmJFug1MfonFH68zpJeRKPACUpqF%2BYHAo1Ddic5I7edAX4kMHdXJwlCn6Ry2YbYmY98eDTArQ8wgCJl2LnlDWFiIjt95pOyLLesxo1ajedTsHDMeCi2pieExAFhtocUwpXUOsRZDd5BqMn06DZMh3zIiEq6PMMekksAGOqUBQlwFUntUDlJOJmhpObK7hgpLXj5FLmmZEhCDh2SbC4iANaKTpqxk2KJ5XWbNo4MfkQG5W8zQwpl5u0P3UjAhaArn%2BUHdYg7mo1SvU3MPKfClz%2FPlDCD13iTz6FbySaMtoEVRV6GadLpvYgrpgZGxIGLCpnyVBLYCvD%2Fq6rTtS9hK29eDeGu703l7vZGRoMO6dMPSDmumOfyYcVJNDsmsd7NIfQeo&X-Amz-Signature=8742adfcb536b13b49808ccc85dd397b2cabdb3655f13c8b3d55a0ba3e199693&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEG2QVE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIB3Uo31vahcewg0iCyOX2kLNmcOxapoyzm1fFA62AUXIAiEAnBWXGny3x%2FGZEmOR63CuiMkkEbam4yuQTnOr9Arm0qQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyt6b%2FaVPfr00CT5CrcA0bEdHVV%2FRRcHTzmqrk3ZCogw7I8lMDqMYjomzj5Kyxs2%2B7wIM07zeZb%2BIcgI3S%2Bu4gCpcTrrnB78gnuPr%2BHQZWHbClJmceDe25GIydIWDk9TN0h6no7uOkB3UitSlS4hSRHcIp8lCOqhhNbjq4VYcqT8yEYvwMbtfWbEavxrlFGmNbimyLdPz6BuVPVhaEbCt6BW90ts%2FrKGFK3UwE1fy3uFY%2F1MNbIckifSTyMU38WMvEJrUloRluIKAStw6pfOZbkU4z7z1nqAJ11IYUuiNhLre86m5dzbUc64BKUc2fVR7iUEN%2B5j0YtZrW7w5tUM7T8s2vclsDNrIKJ4IElFaRIPR%2FQm1swwRxXG3H0x84Kkm9fsIF7vEBbtJH79siIswMEBS%2Bq3LkLHnnptDiq4WiE9oQhaZ3Zhw1eQQqCEUtsUJC8owgUFT%2BAnhKU2Nwk23JYLnkVVsxWh%2BTLEMcOjquvjj45k7VMWmJFug1MfonFH68zpJeRKPACUpqF%2BYHAo1Ddic5I7edAX4kMHdXJwlCn6Ry2YbYmY98eDTArQ8wgCJl2LnlDWFiIjt95pOyLLesxo1ajedTsHDMeCi2pieExAFhtocUwpXUOsRZDd5BqMn06DZMh3zIiEq6PMMekksAGOqUBQlwFUntUDlJOJmhpObK7hgpLXj5FLmmZEhCDh2SbC4iANaKTpqxk2KJ5XWbNo4MfkQG5W8zQwpl5u0P3UjAhaArn%2BUHdYg7mo1SvU3MPKfClz%2FPlDCD13iTz6FbySaMtoEVRV6GadLpvYgrpgZGxIGLCpnyVBLYCvD%2Fq6rTtS9hK29eDeGu703l7vZGRoMO6dMPSDmumOfyYcVJNDsmsd7NIfQeo&X-Amz-Signature=36b9a3f84424c8507b30d949b9bd8c180c6f13c1141d80620e466627ef031c56&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEG2QVE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIB3Uo31vahcewg0iCyOX2kLNmcOxapoyzm1fFA62AUXIAiEAnBWXGny3x%2FGZEmOR63CuiMkkEbam4yuQTnOr9Arm0qQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyt6b%2FaVPfr00CT5CrcA0bEdHVV%2FRRcHTzmqrk3ZCogw7I8lMDqMYjomzj5Kyxs2%2B7wIM07zeZb%2BIcgI3S%2Bu4gCpcTrrnB78gnuPr%2BHQZWHbClJmceDe25GIydIWDk9TN0h6no7uOkB3UitSlS4hSRHcIp8lCOqhhNbjq4VYcqT8yEYvwMbtfWbEavxrlFGmNbimyLdPz6BuVPVhaEbCt6BW90ts%2FrKGFK3UwE1fy3uFY%2F1MNbIckifSTyMU38WMvEJrUloRluIKAStw6pfOZbkU4z7z1nqAJ11IYUuiNhLre86m5dzbUc64BKUc2fVR7iUEN%2B5j0YtZrW7w5tUM7T8s2vclsDNrIKJ4IElFaRIPR%2FQm1swwRxXG3H0x84Kkm9fsIF7vEBbtJH79siIswMEBS%2Bq3LkLHnnptDiq4WiE9oQhaZ3Zhw1eQQqCEUtsUJC8owgUFT%2BAnhKU2Nwk23JYLnkVVsxWh%2BTLEMcOjquvjj45k7VMWmJFug1MfonFH68zpJeRKPACUpqF%2BYHAo1Ddic5I7edAX4kMHdXJwlCn6Ry2YbYmY98eDTArQ8wgCJl2LnlDWFiIjt95pOyLLesxo1ajedTsHDMeCi2pieExAFhtocUwpXUOsRZDd5BqMn06DZMh3zIiEq6PMMekksAGOqUBQlwFUntUDlJOJmhpObK7hgpLXj5FLmmZEhCDh2SbC4iANaKTpqxk2KJ5XWbNo4MfkQG5W8zQwpl5u0P3UjAhaArn%2BUHdYg7mo1SvU3MPKfClz%2FPlDCD13iTz6FbySaMtoEVRV6GadLpvYgrpgZGxIGLCpnyVBLYCvD%2Fq6rTtS9hK29eDeGu703l7vZGRoMO6dMPSDmumOfyYcVJNDsmsd7NIfQeo&X-Amz-Signature=4d001c3a0fcdc1733c41a0066c4ee7f3ce955d549574d3f7cd2dc99dc4d3ec35&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEG2QVE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIB3Uo31vahcewg0iCyOX2kLNmcOxapoyzm1fFA62AUXIAiEAnBWXGny3x%2FGZEmOR63CuiMkkEbam4yuQTnOr9Arm0qQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyt6b%2FaVPfr00CT5CrcA0bEdHVV%2FRRcHTzmqrk3ZCogw7I8lMDqMYjomzj5Kyxs2%2B7wIM07zeZb%2BIcgI3S%2Bu4gCpcTrrnB78gnuPr%2BHQZWHbClJmceDe25GIydIWDk9TN0h6no7uOkB3UitSlS4hSRHcIp8lCOqhhNbjq4VYcqT8yEYvwMbtfWbEavxrlFGmNbimyLdPz6BuVPVhaEbCt6BW90ts%2FrKGFK3UwE1fy3uFY%2F1MNbIckifSTyMU38WMvEJrUloRluIKAStw6pfOZbkU4z7z1nqAJ11IYUuiNhLre86m5dzbUc64BKUc2fVR7iUEN%2B5j0YtZrW7w5tUM7T8s2vclsDNrIKJ4IElFaRIPR%2FQm1swwRxXG3H0x84Kkm9fsIF7vEBbtJH79siIswMEBS%2Bq3LkLHnnptDiq4WiE9oQhaZ3Zhw1eQQqCEUtsUJC8owgUFT%2BAnhKU2Nwk23JYLnkVVsxWh%2BTLEMcOjquvjj45k7VMWmJFug1MfonFH68zpJeRKPACUpqF%2BYHAo1Ddic5I7edAX4kMHdXJwlCn6Ry2YbYmY98eDTArQ8wgCJl2LnlDWFiIjt95pOyLLesxo1ajedTsHDMeCi2pieExAFhtocUwpXUOsRZDd5BqMn06DZMh3zIiEq6PMMekksAGOqUBQlwFUntUDlJOJmhpObK7hgpLXj5FLmmZEhCDh2SbC4iANaKTpqxk2KJ5XWbNo4MfkQG5W8zQwpl5u0P3UjAhaArn%2BUHdYg7mo1SvU3MPKfClz%2FPlDCD13iTz6FbySaMtoEVRV6GadLpvYgrpgZGxIGLCpnyVBLYCvD%2Fq6rTtS9hK29eDeGu703l7vZGRoMO6dMPSDmumOfyYcVJNDsmsd7NIfQeo&X-Amz-Signature=d757fa07064d5180a5c3428903f3e5b9ce020c66f5149e2be479a8c50851f615&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEG2QVE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIB3Uo31vahcewg0iCyOX2kLNmcOxapoyzm1fFA62AUXIAiEAnBWXGny3x%2FGZEmOR63CuiMkkEbam4yuQTnOr9Arm0qQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyt6b%2FaVPfr00CT5CrcA0bEdHVV%2FRRcHTzmqrk3ZCogw7I8lMDqMYjomzj5Kyxs2%2B7wIM07zeZb%2BIcgI3S%2Bu4gCpcTrrnB78gnuPr%2BHQZWHbClJmceDe25GIydIWDk9TN0h6no7uOkB3UitSlS4hSRHcIp8lCOqhhNbjq4VYcqT8yEYvwMbtfWbEavxrlFGmNbimyLdPz6BuVPVhaEbCt6BW90ts%2FrKGFK3UwE1fy3uFY%2F1MNbIckifSTyMU38WMvEJrUloRluIKAStw6pfOZbkU4z7z1nqAJ11IYUuiNhLre86m5dzbUc64BKUc2fVR7iUEN%2B5j0YtZrW7w5tUM7T8s2vclsDNrIKJ4IElFaRIPR%2FQm1swwRxXG3H0x84Kkm9fsIF7vEBbtJH79siIswMEBS%2Bq3LkLHnnptDiq4WiE9oQhaZ3Zhw1eQQqCEUtsUJC8owgUFT%2BAnhKU2Nwk23JYLnkVVsxWh%2BTLEMcOjquvjj45k7VMWmJFug1MfonFH68zpJeRKPACUpqF%2BYHAo1Ddic5I7edAX4kMHdXJwlCn6Ry2YbYmY98eDTArQ8wgCJl2LnlDWFiIjt95pOyLLesxo1ajedTsHDMeCi2pieExAFhtocUwpXUOsRZDd5BqMn06DZMh3zIiEq6PMMekksAGOqUBQlwFUntUDlJOJmhpObK7hgpLXj5FLmmZEhCDh2SbC4iANaKTpqxk2KJ5XWbNo4MfkQG5W8zQwpl5u0P3UjAhaArn%2BUHdYg7mo1SvU3MPKfClz%2FPlDCD13iTz6FbySaMtoEVRV6GadLpvYgrpgZGxIGLCpnyVBLYCvD%2Fq6rTtS9hK29eDeGu703l7vZGRoMO6dMPSDmumOfyYcVJNDsmsd7NIfQeo&X-Amz-Signature=9362945f646794974fcafe5d9e54ce40bc26d9f29fd09bdcbd9353b15f3307a1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QEG2QVE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIB3Uo31vahcewg0iCyOX2kLNmcOxapoyzm1fFA62AUXIAiEAnBWXGny3x%2FGZEmOR63CuiMkkEbam4yuQTnOr9Arm0qQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyt6b%2FaVPfr00CT5CrcA0bEdHVV%2FRRcHTzmqrk3ZCogw7I8lMDqMYjomzj5Kyxs2%2B7wIM07zeZb%2BIcgI3S%2Bu4gCpcTrrnB78gnuPr%2BHQZWHbClJmceDe25GIydIWDk9TN0h6no7uOkB3UitSlS4hSRHcIp8lCOqhhNbjq4VYcqT8yEYvwMbtfWbEavxrlFGmNbimyLdPz6BuVPVhaEbCt6BW90ts%2FrKGFK3UwE1fy3uFY%2F1MNbIckifSTyMU38WMvEJrUloRluIKAStw6pfOZbkU4z7z1nqAJ11IYUuiNhLre86m5dzbUc64BKUc2fVR7iUEN%2B5j0YtZrW7w5tUM7T8s2vclsDNrIKJ4IElFaRIPR%2FQm1swwRxXG3H0x84Kkm9fsIF7vEBbtJH79siIswMEBS%2Bq3LkLHnnptDiq4WiE9oQhaZ3Zhw1eQQqCEUtsUJC8owgUFT%2BAnhKU2Nwk23JYLnkVVsxWh%2BTLEMcOjquvjj45k7VMWmJFug1MfonFH68zpJeRKPACUpqF%2BYHAo1Ddic5I7edAX4kMHdXJwlCn6Ry2YbYmY98eDTArQ8wgCJl2LnlDWFiIjt95pOyLLesxo1ajedTsHDMeCi2pieExAFhtocUwpXUOsRZDd5BqMn06DZMh3zIiEq6PMMekksAGOqUBQlwFUntUDlJOJmhpObK7hgpLXj5FLmmZEhCDh2SbC4iANaKTpqxk2KJ5XWbNo4MfkQG5W8zQwpl5u0P3UjAhaArn%2BUHdYg7mo1SvU3MPKfClz%2FPlDCD13iTz6FbySaMtoEVRV6GadLpvYgrpgZGxIGLCpnyVBLYCvD%2Fq6rTtS9hK29eDeGu703l7vZGRoMO6dMPSDmumOfyYcVJNDsmsd7NIfQeo&X-Amz-Signature=83a16e80fa38b82ceec18431e84a20a8e0dae2d3b4d9b96982858cb9f5391452&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
