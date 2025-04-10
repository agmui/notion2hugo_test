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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNQJB2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCTei9QIR0QfF%2BtiwHcohg%2FuEl8YhEelsoJsRMI0kIrFgIgJUpyAXpvPfQgHlxP1%2B2WrRHJAHh2ua1gqWUCbAKNehgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRzzBg9cRoLeHE%2BOSrcA8Zjcr2QsPg3R9QsyUcw2%2B%2F%2F3rmiOmUNBjdgRH4qbYsMLC%2BOJzNXPjzqhzBSM8zxcmQ1uyxX3XWQjwhU1t4q7Tk2YVnaPApudA59AKqaBwCGxAnr3rx7p7kAkutr%2FHb6LJK9Zs0SQhgMT7VTnDKmoFw4UT%2BW1TQPKWl9vRy9z5mcpMy0f5yFuGuSlEKJbaCDsIhSvEsfQC3voVL6FPk1p1tjTHSIOsz%2BmVh9EOgdP9GahwuEk%2FnO1BIZskwvC8x4DHls7vspd2e9fOJ6uTNGmUancsglgGU69RjqcknMskgtvRG4%2B99qUtF9jBfFHsuGR%2FsL%2BmcFlAKd51awNN080%2B2qOpHL%2Ffyn3ZAF9FD80OGeHu3CHNoe4LcEBqLhpCLxfhS1M9oRInmwc77afYyMJd5rD5Rjns%2FMjH6ov36MFEUG9gAprMe8AgLhqbTOa6JY%2FCDSQPDUJTrNsTbHn3dBYmt56afMvAXeDk0XJWSl2BlfxKplXQKm9QOyfBa19vUUDpWnGS4uj%2B0g%2FmWjIieOX%2BIcHEkmt%2FCuKcoLqNkQQeQs30bREBnAMEJbAYVOSoOx%2BOmX7BJ7jIefELNNNzz%2FxZvjTtB4UxrMQQpB5cqVyaXqu3QSx8yaODo0sqWsMMLu378GOqUBmcWrpX50mt0MkTAGsAUKjwtEOihFTN5ePwkWTM%2FiIUxTlGSaNmhEvVWNRSVlyk780fvWrNN2EXGMsLJQPPkcVvp1zres7x8RTCL2e43LcHIVSvztifWIdMmxHnCTCUYIB7W2yGDmJE0O%2B0fYIlVGW9GuZEtRvL4EXjsJZaNbcedz7oTmGJU2v%2Bs1Ikp6mNJtxAGkc2AqZC3UyK1o%2B0h52A0aqkWx&X-Amz-Signature=a0c4a9edd86879d5794f8120452e60c91675963dd15ea7cfa07831f95be64c62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNQJB2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCTei9QIR0QfF%2BtiwHcohg%2FuEl8YhEelsoJsRMI0kIrFgIgJUpyAXpvPfQgHlxP1%2B2WrRHJAHh2ua1gqWUCbAKNehgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRzzBg9cRoLeHE%2BOSrcA8Zjcr2QsPg3R9QsyUcw2%2B%2F%2F3rmiOmUNBjdgRH4qbYsMLC%2BOJzNXPjzqhzBSM8zxcmQ1uyxX3XWQjwhU1t4q7Tk2YVnaPApudA59AKqaBwCGxAnr3rx7p7kAkutr%2FHb6LJK9Zs0SQhgMT7VTnDKmoFw4UT%2BW1TQPKWl9vRy9z5mcpMy0f5yFuGuSlEKJbaCDsIhSvEsfQC3voVL6FPk1p1tjTHSIOsz%2BmVh9EOgdP9GahwuEk%2FnO1BIZskwvC8x4DHls7vspd2e9fOJ6uTNGmUancsglgGU69RjqcknMskgtvRG4%2B99qUtF9jBfFHsuGR%2FsL%2BmcFlAKd51awNN080%2B2qOpHL%2Ffyn3ZAF9FD80OGeHu3CHNoe4LcEBqLhpCLxfhS1M9oRInmwc77afYyMJd5rD5Rjns%2FMjH6ov36MFEUG9gAprMe8AgLhqbTOa6JY%2FCDSQPDUJTrNsTbHn3dBYmt56afMvAXeDk0XJWSl2BlfxKplXQKm9QOyfBa19vUUDpWnGS4uj%2B0g%2FmWjIieOX%2BIcHEkmt%2FCuKcoLqNkQQeQs30bREBnAMEJbAYVOSoOx%2BOmX7BJ7jIefELNNNzz%2FxZvjTtB4UxrMQQpB5cqVyaXqu3QSx8yaODo0sqWsMMLu378GOqUBmcWrpX50mt0MkTAGsAUKjwtEOihFTN5ePwkWTM%2FiIUxTlGSaNmhEvVWNRSVlyk780fvWrNN2EXGMsLJQPPkcVvp1zres7x8RTCL2e43LcHIVSvztifWIdMmxHnCTCUYIB7W2yGDmJE0O%2B0fYIlVGW9GuZEtRvL4EXjsJZaNbcedz7oTmGJU2v%2Bs1Ikp6mNJtxAGkc2AqZC3UyK1o%2B0h52A0aqkWx&X-Amz-Signature=35c5c6efd5ac46b331eea2046460705d8b504db9d4d1f370c07408a8e610c99f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNQJB2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCTei9QIR0QfF%2BtiwHcohg%2FuEl8YhEelsoJsRMI0kIrFgIgJUpyAXpvPfQgHlxP1%2B2WrRHJAHh2ua1gqWUCbAKNehgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRzzBg9cRoLeHE%2BOSrcA8Zjcr2QsPg3R9QsyUcw2%2B%2F%2F3rmiOmUNBjdgRH4qbYsMLC%2BOJzNXPjzqhzBSM8zxcmQ1uyxX3XWQjwhU1t4q7Tk2YVnaPApudA59AKqaBwCGxAnr3rx7p7kAkutr%2FHb6LJK9Zs0SQhgMT7VTnDKmoFw4UT%2BW1TQPKWl9vRy9z5mcpMy0f5yFuGuSlEKJbaCDsIhSvEsfQC3voVL6FPk1p1tjTHSIOsz%2BmVh9EOgdP9GahwuEk%2FnO1BIZskwvC8x4DHls7vspd2e9fOJ6uTNGmUancsglgGU69RjqcknMskgtvRG4%2B99qUtF9jBfFHsuGR%2FsL%2BmcFlAKd51awNN080%2B2qOpHL%2Ffyn3ZAF9FD80OGeHu3CHNoe4LcEBqLhpCLxfhS1M9oRInmwc77afYyMJd5rD5Rjns%2FMjH6ov36MFEUG9gAprMe8AgLhqbTOa6JY%2FCDSQPDUJTrNsTbHn3dBYmt56afMvAXeDk0XJWSl2BlfxKplXQKm9QOyfBa19vUUDpWnGS4uj%2B0g%2FmWjIieOX%2BIcHEkmt%2FCuKcoLqNkQQeQs30bREBnAMEJbAYVOSoOx%2BOmX7BJ7jIefELNNNzz%2FxZvjTtB4UxrMQQpB5cqVyaXqu3QSx8yaODo0sqWsMMLu378GOqUBmcWrpX50mt0MkTAGsAUKjwtEOihFTN5ePwkWTM%2FiIUxTlGSaNmhEvVWNRSVlyk780fvWrNN2EXGMsLJQPPkcVvp1zres7x8RTCL2e43LcHIVSvztifWIdMmxHnCTCUYIB7W2yGDmJE0O%2B0fYIlVGW9GuZEtRvL4EXjsJZaNbcedz7oTmGJU2v%2Bs1Ikp6mNJtxAGkc2AqZC3UyK1o%2B0h52A0aqkWx&X-Amz-Signature=a662a637d4496713e034ac4f915233872ca2393d97eb4ef49c90fa03beb17bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNQJB2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCTei9QIR0QfF%2BtiwHcohg%2FuEl8YhEelsoJsRMI0kIrFgIgJUpyAXpvPfQgHlxP1%2B2WrRHJAHh2ua1gqWUCbAKNehgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRzzBg9cRoLeHE%2BOSrcA8Zjcr2QsPg3R9QsyUcw2%2B%2F%2F3rmiOmUNBjdgRH4qbYsMLC%2BOJzNXPjzqhzBSM8zxcmQ1uyxX3XWQjwhU1t4q7Tk2YVnaPApudA59AKqaBwCGxAnr3rx7p7kAkutr%2FHb6LJK9Zs0SQhgMT7VTnDKmoFw4UT%2BW1TQPKWl9vRy9z5mcpMy0f5yFuGuSlEKJbaCDsIhSvEsfQC3voVL6FPk1p1tjTHSIOsz%2BmVh9EOgdP9GahwuEk%2FnO1BIZskwvC8x4DHls7vspd2e9fOJ6uTNGmUancsglgGU69RjqcknMskgtvRG4%2B99qUtF9jBfFHsuGR%2FsL%2BmcFlAKd51awNN080%2B2qOpHL%2Ffyn3ZAF9FD80OGeHu3CHNoe4LcEBqLhpCLxfhS1M9oRInmwc77afYyMJd5rD5Rjns%2FMjH6ov36MFEUG9gAprMe8AgLhqbTOa6JY%2FCDSQPDUJTrNsTbHn3dBYmt56afMvAXeDk0XJWSl2BlfxKplXQKm9QOyfBa19vUUDpWnGS4uj%2B0g%2FmWjIieOX%2BIcHEkmt%2FCuKcoLqNkQQeQs30bREBnAMEJbAYVOSoOx%2BOmX7BJ7jIefELNNNzz%2FxZvjTtB4UxrMQQpB5cqVyaXqu3QSx8yaODo0sqWsMMLu378GOqUBmcWrpX50mt0MkTAGsAUKjwtEOihFTN5ePwkWTM%2FiIUxTlGSaNmhEvVWNRSVlyk780fvWrNN2EXGMsLJQPPkcVvp1zres7x8RTCL2e43LcHIVSvztifWIdMmxHnCTCUYIB7W2yGDmJE0O%2B0fYIlVGW9GuZEtRvL4EXjsJZaNbcedz7oTmGJU2v%2Bs1Ikp6mNJtxAGkc2AqZC3UyK1o%2B0h52A0aqkWx&X-Amz-Signature=f9fe9adc072f2f12b3e6477bd201480b4133096304d0ca0fd154d0b65bac505e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNQJB2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCTei9QIR0QfF%2BtiwHcohg%2FuEl8YhEelsoJsRMI0kIrFgIgJUpyAXpvPfQgHlxP1%2B2WrRHJAHh2ua1gqWUCbAKNehgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRzzBg9cRoLeHE%2BOSrcA8Zjcr2QsPg3R9QsyUcw2%2B%2F%2F3rmiOmUNBjdgRH4qbYsMLC%2BOJzNXPjzqhzBSM8zxcmQ1uyxX3XWQjwhU1t4q7Tk2YVnaPApudA59AKqaBwCGxAnr3rx7p7kAkutr%2FHb6LJK9Zs0SQhgMT7VTnDKmoFw4UT%2BW1TQPKWl9vRy9z5mcpMy0f5yFuGuSlEKJbaCDsIhSvEsfQC3voVL6FPk1p1tjTHSIOsz%2BmVh9EOgdP9GahwuEk%2FnO1BIZskwvC8x4DHls7vspd2e9fOJ6uTNGmUancsglgGU69RjqcknMskgtvRG4%2B99qUtF9jBfFHsuGR%2FsL%2BmcFlAKd51awNN080%2B2qOpHL%2Ffyn3ZAF9FD80OGeHu3CHNoe4LcEBqLhpCLxfhS1M9oRInmwc77afYyMJd5rD5Rjns%2FMjH6ov36MFEUG9gAprMe8AgLhqbTOa6JY%2FCDSQPDUJTrNsTbHn3dBYmt56afMvAXeDk0XJWSl2BlfxKplXQKm9QOyfBa19vUUDpWnGS4uj%2B0g%2FmWjIieOX%2BIcHEkmt%2FCuKcoLqNkQQeQs30bREBnAMEJbAYVOSoOx%2BOmX7BJ7jIefELNNNzz%2FxZvjTtB4UxrMQQpB5cqVyaXqu3QSx8yaODo0sqWsMMLu378GOqUBmcWrpX50mt0MkTAGsAUKjwtEOihFTN5ePwkWTM%2FiIUxTlGSaNmhEvVWNRSVlyk780fvWrNN2EXGMsLJQPPkcVvp1zres7x8RTCL2e43LcHIVSvztifWIdMmxHnCTCUYIB7W2yGDmJE0O%2B0fYIlVGW9GuZEtRvL4EXjsJZaNbcedz7oTmGJU2v%2Bs1Ikp6mNJtxAGkc2AqZC3UyK1o%2B0h52A0aqkWx&X-Amz-Signature=9f6e68ed92f293f408caf9c589e9f024dd80d1a3c1ca6cfd7f2cf2cc8c34f632&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNQJB2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCTei9QIR0QfF%2BtiwHcohg%2FuEl8YhEelsoJsRMI0kIrFgIgJUpyAXpvPfQgHlxP1%2B2WrRHJAHh2ua1gqWUCbAKNehgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRzzBg9cRoLeHE%2BOSrcA8Zjcr2QsPg3R9QsyUcw2%2B%2F%2F3rmiOmUNBjdgRH4qbYsMLC%2BOJzNXPjzqhzBSM8zxcmQ1uyxX3XWQjwhU1t4q7Tk2YVnaPApudA59AKqaBwCGxAnr3rx7p7kAkutr%2FHb6LJK9Zs0SQhgMT7VTnDKmoFw4UT%2BW1TQPKWl9vRy9z5mcpMy0f5yFuGuSlEKJbaCDsIhSvEsfQC3voVL6FPk1p1tjTHSIOsz%2BmVh9EOgdP9GahwuEk%2FnO1BIZskwvC8x4DHls7vspd2e9fOJ6uTNGmUancsglgGU69RjqcknMskgtvRG4%2B99qUtF9jBfFHsuGR%2FsL%2BmcFlAKd51awNN080%2B2qOpHL%2Ffyn3ZAF9FD80OGeHu3CHNoe4LcEBqLhpCLxfhS1M9oRInmwc77afYyMJd5rD5Rjns%2FMjH6ov36MFEUG9gAprMe8AgLhqbTOa6JY%2FCDSQPDUJTrNsTbHn3dBYmt56afMvAXeDk0XJWSl2BlfxKplXQKm9QOyfBa19vUUDpWnGS4uj%2B0g%2FmWjIieOX%2BIcHEkmt%2FCuKcoLqNkQQeQs30bREBnAMEJbAYVOSoOx%2BOmX7BJ7jIefELNNNzz%2FxZvjTtB4UxrMQQpB5cqVyaXqu3QSx8yaODo0sqWsMMLu378GOqUBmcWrpX50mt0MkTAGsAUKjwtEOihFTN5ePwkWTM%2FiIUxTlGSaNmhEvVWNRSVlyk780fvWrNN2EXGMsLJQPPkcVvp1zres7x8RTCL2e43LcHIVSvztifWIdMmxHnCTCUYIB7W2yGDmJE0O%2B0fYIlVGW9GuZEtRvL4EXjsJZaNbcedz7oTmGJU2v%2Bs1Ikp6mNJtxAGkc2AqZC3UyK1o%2B0h52A0aqkWx&X-Amz-Signature=27380b18281a0aa8874173dcede26b29a489a05d860e1a193ccf9e8824c74e45&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNQJB2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCTei9QIR0QfF%2BtiwHcohg%2FuEl8YhEelsoJsRMI0kIrFgIgJUpyAXpvPfQgHlxP1%2B2WrRHJAHh2ua1gqWUCbAKNehgqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRzzBg9cRoLeHE%2BOSrcA8Zjcr2QsPg3R9QsyUcw2%2B%2F%2F3rmiOmUNBjdgRH4qbYsMLC%2BOJzNXPjzqhzBSM8zxcmQ1uyxX3XWQjwhU1t4q7Tk2YVnaPApudA59AKqaBwCGxAnr3rx7p7kAkutr%2FHb6LJK9Zs0SQhgMT7VTnDKmoFw4UT%2BW1TQPKWl9vRy9z5mcpMy0f5yFuGuSlEKJbaCDsIhSvEsfQC3voVL6FPk1p1tjTHSIOsz%2BmVh9EOgdP9GahwuEk%2FnO1BIZskwvC8x4DHls7vspd2e9fOJ6uTNGmUancsglgGU69RjqcknMskgtvRG4%2B99qUtF9jBfFHsuGR%2FsL%2BmcFlAKd51awNN080%2B2qOpHL%2Ffyn3ZAF9FD80OGeHu3CHNoe4LcEBqLhpCLxfhS1M9oRInmwc77afYyMJd5rD5Rjns%2FMjH6ov36MFEUG9gAprMe8AgLhqbTOa6JY%2FCDSQPDUJTrNsTbHn3dBYmt56afMvAXeDk0XJWSl2BlfxKplXQKm9QOyfBa19vUUDpWnGS4uj%2B0g%2FmWjIieOX%2BIcHEkmt%2FCuKcoLqNkQQeQs30bREBnAMEJbAYVOSoOx%2BOmX7BJ7jIefELNNNzz%2FxZvjTtB4UxrMQQpB5cqVyaXqu3QSx8yaODo0sqWsMMLu378GOqUBmcWrpX50mt0MkTAGsAUKjwtEOihFTN5ePwkWTM%2FiIUxTlGSaNmhEvVWNRSVlyk780fvWrNN2EXGMsLJQPPkcVvp1zres7x8RTCL2e43LcHIVSvztifWIdMmxHnCTCUYIB7W2yGDmJE0O%2B0fYIlVGW9GuZEtRvL4EXjsJZaNbcedz7oTmGJU2v%2Bs1Ikp6mNJtxAGkc2AqZC3UyK1o%2B0h52A0aqkWx&X-Amz-Signature=3a417cb1d66d0c374d31c281ff2f12e3ef21926bf56adca70dc28a47cec59465&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
