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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU7TJ64R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVi%2B7GqROBPjLzfVKAdrV08o6FMIp3anVhflG73wfmAIhAKSZK4QfEVzLBVAQbDfzED%2BrPE7EEpShvDBvB6lx%2BiQgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYD2g2yKGQQWoXX98q3AM2LbpWDqyLISeSGJwS3kviMz628dLaXrNwmWhwGyW5%2F6OQ9oPirAz%2FEVHeagUpP0m30QLe0%2BHKirg9tvhPjRnGySU6H1vZM92GxPMm9aDHB5k0h989%2FtYL6M1x4wMtWdb32xnO3Rk%2BetpNNUiT2C4I%2B7evcP84fQ8M%2BboPkUBOKXD3wVv1ktr7m5DmN8%2FI72ECJxeT6lSmAfNbR2Az0VI%2B39qcqAEqcoCZvAWUmiTli%2BpCFzRTlHm6BIQubvPXemr0%2FxZtElPuIh4M5%2Fdjocllnq9A%2F10priFzw9ele79l4gplbFFHRv8KT2It7d8TF%2Bldar%2Buzfzn0XSiEK12Dhy7Sd5GcR7fy1d9wxeS%2FuJAYA0hdquLG%2BYN7tF4dr5n21FLdyqzoiQEsVdNh4zw8haxmLjjweSL36JI3BymYiSIPtZXUFOQJpDuxd8SlfGhITJyam5bt4iex7kWkvC8%2BSiem6psWdrMydE7TWyRrjXGhpAHPWKaQY7TGruvebQdbRh9ToVb4lifCBFBAPcGm3pd8%2F5tKK6ARJAY03UxS3wq7HFbqvND%2B7Zy1731iBXJKATAFXj2DytP6gN9Fbkjvl672OMY7VbbWy7xAb6JS5bahUUdMVLZFcsvMUdt7TCihd%2B9BjqkAarsa%2BwQjsK8fvK3LKLwwFG5lLAptlmCq8IRnFObu%2BKn4nCWsd3pQhTt8N8mC8mqN8FisjP3DuCUajnqKD58sk%2ByCn%2FpOyJsjJ%2FMKeYS6cZFyBaHmMXb40xh23cZTuq8R7h%2FlfkDmNPEdKdb%2BK%2B2Z7LM43so1KRPosppezTPwxkDH0zGhbYQNQT4ToF4J5qDLUN3BwImXIzTYOIsEOU%2Fp4OiulN9&X-Amz-Signature=f2bea8fcde68f9d6b042f2e6624d17cd61ea369a71f8feb50b06e65c8c73ac66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU7TJ64R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVi%2B7GqROBPjLzfVKAdrV08o6FMIp3anVhflG73wfmAIhAKSZK4QfEVzLBVAQbDfzED%2BrPE7EEpShvDBvB6lx%2BiQgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYD2g2yKGQQWoXX98q3AM2LbpWDqyLISeSGJwS3kviMz628dLaXrNwmWhwGyW5%2F6OQ9oPirAz%2FEVHeagUpP0m30QLe0%2BHKirg9tvhPjRnGySU6H1vZM92GxPMm9aDHB5k0h989%2FtYL6M1x4wMtWdb32xnO3Rk%2BetpNNUiT2C4I%2B7evcP84fQ8M%2BboPkUBOKXD3wVv1ktr7m5DmN8%2FI72ECJxeT6lSmAfNbR2Az0VI%2B39qcqAEqcoCZvAWUmiTli%2BpCFzRTlHm6BIQubvPXemr0%2FxZtElPuIh4M5%2Fdjocllnq9A%2F10priFzw9ele79l4gplbFFHRv8KT2It7d8TF%2Bldar%2Buzfzn0XSiEK12Dhy7Sd5GcR7fy1d9wxeS%2FuJAYA0hdquLG%2BYN7tF4dr5n21FLdyqzoiQEsVdNh4zw8haxmLjjweSL36JI3BymYiSIPtZXUFOQJpDuxd8SlfGhITJyam5bt4iex7kWkvC8%2BSiem6psWdrMydE7TWyRrjXGhpAHPWKaQY7TGruvebQdbRh9ToVb4lifCBFBAPcGm3pd8%2F5tKK6ARJAY03UxS3wq7HFbqvND%2B7Zy1731iBXJKATAFXj2DytP6gN9Fbkjvl672OMY7VbbWy7xAb6JS5bahUUdMVLZFcsvMUdt7TCihd%2B9BjqkAarsa%2BwQjsK8fvK3LKLwwFG5lLAptlmCq8IRnFObu%2BKn4nCWsd3pQhTt8N8mC8mqN8FisjP3DuCUajnqKD58sk%2ByCn%2FpOyJsjJ%2FMKeYS6cZFyBaHmMXb40xh23cZTuq8R7h%2FlfkDmNPEdKdb%2BK%2B2Z7LM43so1KRPosppezTPwxkDH0zGhbYQNQT4ToF4J5qDLUN3BwImXIzTYOIsEOU%2Fp4OiulN9&X-Amz-Signature=b4fc60f257d478c112c703879435bede23fbd154dee4d09526ce78255e62e68c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU7TJ64R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVi%2B7GqROBPjLzfVKAdrV08o6FMIp3anVhflG73wfmAIhAKSZK4QfEVzLBVAQbDfzED%2BrPE7EEpShvDBvB6lx%2BiQgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYD2g2yKGQQWoXX98q3AM2LbpWDqyLISeSGJwS3kviMz628dLaXrNwmWhwGyW5%2F6OQ9oPirAz%2FEVHeagUpP0m30QLe0%2BHKirg9tvhPjRnGySU6H1vZM92GxPMm9aDHB5k0h989%2FtYL6M1x4wMtWdb32xnO3Rk%2BetpNNUiT2C4I%2B7evcP84fQ8M%2BboPkUBOKXD3wVv1ktr7m5DmN8%2FI72ECJxeT6lSmAfNbR2Az0VI%2B39qcqAEqcoCZvAWUmiTli%2BpCFzRTlHm6BIQubvPXemr0%2FxZtElPuIh4M5%2Fdjocllnq9A%2F10priFzw9ele79l4gplbFFHRv8KT2It7d8TF%2Bldar%2Buzfzn0XSiEK12Dhy7Sd5GcR7fy1d9wxeS%2FuJAYA0hdquLG%2BYN7tF4dr5n21FLdyqzoiQEsVdNh4zw8haxmLjjweSL36JI3BymYiSIPtZXUFOQJpDuxd8SlfGhITJyam5bt4iex7kWkvC8%2BSiem6psWdrMydE7TWyRrjXGhpAHPWKaQY7TGruvebQdbRh9ToVb4lifCBFBAPcGm3pd8%2F5tKK6ARJAY03UxS3wq7HFbqvND%2B7Zy1731iBXJKATAFXj2DytP6gN9Fbkjvl672OMY7VbbWy7xAb6JS5bahUUdMVLZFcsvMUdt7TCihd%2B9BjqkAarsa%2BwQjsK8fvK3LKLwwFG5lLAptlmCq8IRnFObu%2BKn4nCWsd3pQhTt8N8mC8mqN8FisjP3DuCUajnqKD58sk%2ByCn%2FpOyJsjJ%2FMKeYS6cZFyBaHmMXb40xh23cZTuq8R7h%2FlfkDmNPEdKdb%2BK%2B2Z7LM43so1KRPosppezTPwxkDH0zGhbYQNQT4ToF4J5qDLUN3BwImXIzTYOIsEOU%2Fp4OiulN9&X-Amz-Signature=963181436f05af66dfa9f8f9752cc50afeac2877944d264449fe29f9eab3e718&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU7TJ64R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVi%2B7GqROBPjLzfVKAdrV08o6FMIp3anVhflG73wfmAIhAKSZK4QfEVzLBVAQbDfzED%2BrPE7EEpShvDBvB6lx%2BiQgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYD2g2yKGQQWoXX98q3AM2LbpWDqyLISeSGJwS3kviMz628dLaXrNwmWhwGyW5%2F6OQ9oPirAz%2FEVHeagUpP0m30QLe0%2BHKirg9tvhPjRnGySU6H1vZM92GxPMm9aDHB5k0h989%2FtYL6M1x4wMtWdb32xnO3Rk%2BetpNNUiT2C4I%2B7evcP84fQ8M%2BboPkUBOKXD3wVv1ktr7m5DmN8%2FI72ECJxeT6lSmAfNbR2Az0VI%2B39qcqAEqcoCZvAWUmiTli%2BpCFzRTlHm6BIQubvPXemr0%2FxZtElPuIh4M5%2Fdjocllnq9A%2F10priFzw9ele79l4gplbFFHRv8KT2It7d8TF%2Bldar%2Buzfzn0XSiEK12Dhy7Sd5GcR7fy1d9wxeS%2FuJAYA0hdquLG%2BYN7tF4dr5n21FLdyqzoiQEsVdNh4zw8haxmLjjweSL36JI3BymYiSIPtZXUFOQJpDuxd8SlfGhITJyam5bt4iex7kWkvC8%2BSiem6psWdrMydE7TWyRrjXGhpAHPWKaQY7TGruvebQdbRh9ToVb4lifCBFBAPcGm3pd8%2F5tKK6ARJAY03UxS3wq7HFbqvND%2B7Zy1731iBXJKATAFXj2DytP6gN9Fbkjvl672OMY7VbbWy7xAb6JS5bahUUdMVLZFcsvMUdt7TCihd%2B9BjqkAarsa%2BwQjsK8fvK3LKLwwFG5lLAptlmCq8IRnFObu%2BKn4nCWsd3pQhTt8N8mC8mqN8FisjP3DuCUajnqKD58sk%2ByCn%2FpOyJsjJ%2FMKeYS6cZFyBaHmMXb40xh23cZTuq8R7h%2FlfkDmNPEdKdb%2BK%2B2Z7LM43so1KRPosppezTPwxkDH0zGhbYQNQT4ToF4J5qDLUN3BwImXIzTYOIsEOU%2Fp4OiulN9&X-Amz-Signature=7de5f7bb0a151914fd8955c760a499442dae6c5d57d321e01a1fddcc410163c3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU7TJ64R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVi%2B7GqROBPjLzfVKAdrV08o6FMIp3anVhflG73wfmAIhAKSZK4QfEVzLBVAQbDfzED%2BrPE7EEpShvDBvB6lx%2BiQgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYD2g2yKGQQWoXX98q3AM2LbpWDqyLISeSGJwS3kviMz628dLaXrNwmWhwGyW5%2F6OQ9oPirAz%2FEVHeagUpP0m30QLe0%2BHKirg9tvhPjRnGySU6H1vZM92GxPMm9aDHB5k0h989%2FtYL6M1x4wMtWdb32xnO3Rk%2BetpNNUiT2C4I%2B7evcP84fQ8M%2BboPkUBOKXD3wVv1ktr7m5DmN8%2FI72ECJxeT6lSmAfNbR2Az0VI%2B39qcqAEqcoCZvAWUmiTli%2BpCFzRTlHm6BIQubvPXemr0%2FxZtElPuIh4M5%2Fdjocllnq9A%2F10priFzw9ele79l4gplbFFHRv8KT2It7d8TF%2Bldar%2Buzfzn0XSiEK12Dhy7Sd5GcR7fy1d9wxeS%2FuJAYA0hdquLG%2BYN7tF4dr5n21FLdyqzoiQEsVdNh4zw8haxmLjjweSL36JI3BymYiSIPtZXUFOQJpDuxd8SlfGhITJyam5bt4iex7kWkvC8%2BSiem6psWdrMydE7TWyRrjXGhpAHPWKaQY7TGruvebQdbRh9ToVb4lifCBFBAPcGm3pd8%2F5tKK6ARJAY03UxS3wq7HFbqvND%2B7Zy1731iBXJKATAFXj2DytP6gN9Fbkjvl672OMY7VbbWy7xAb6JS5bahUUdMVLZFcsvMUdt7TCihd%2B9BjqkAarsa%2BwQjsK8fvK3LKLwwFG5lLAptlmCq8IRnFObu%2BKn4nCWsd3pQhTt8N8mC8mqN8FisjP3DuCUajnqKD58sk%2ByCn%2FpOyJsjJ%2FMKeYS6cZFyBaHmMXb40xh23cZTuq8R7h%2FlfkDmNPEdKdb%2BK%2B2Z7LM43so1KRPosppezTPwxkDH0zGhbYQNQT4ToF4J5qDLUN3BwImXIzTYOIsEOU%2Fp4OiulN9&X-Amz-Signature=f898ea21cc8fec7c5d888b3d19cef9b172986eea6068838cf8cd20eccf33d876&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU7TJ64R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVi%2B7GqROBPjLzfVKAdrV08o6FMIp3anVhflG73wfmAIhAKSZK4QfEVzLBVAQbDfzED%2BrPE7EEpShvDBvB6lx%2BiQgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYD2g2yKGQQWoXX98q3AM2LbpWDqyLISeSGJwS3kviMz628dLaXrNwmWhwGyW5%2F6OQ9oPirAz%2FEVHeagUpP0m30QLe0%2BHKirg9tvhPjRnGySU6H1vZM92GxPMm9aDHB5k0h989%2FtYL6M1x4wMtWdb32xnO3Rk%2BetpNNUiT2C4I%2B7evcP84fQ8M%2BboPkUBOKXD3wVv1ktr7m5DmN8%2FI72ECJxeT6lSmAfNbR2Az0VI%2B39qcqAEqcoCZvAWUmiTli%2BpCFzRTlHm6BIQubvPXemr0%2FxZtElPuIh4M5%2Fdjocllnq9A%2F10priFzw9ele79l4gplbFFHRv8KT2It7d8TF%2Bldar%2Buzfzn0XSiEK12Dhy7Sd5GcR7fy1d9wxeS%2FuJAYA0hdquLG%2BYN7tF4dr5n21FLdyqzoiQEsVdNh4zw8haxmLjjweSL36JI3BymYiSIPtZXUFOQJpDuxd8SlfGhITJyam5bt4iex7kWkvC8%2BSiem6psWdrMydE7TWyRrjXGhpAHPWKaQY7TGruvebQdbRh9ToVb4lifCBFBAPcGm3pd8%2F5tKK6ARJAY03UxS3wq7HFbqvND%2B7Zy1731iBXJKATAFXj2DytP6gN9Fbkjvl672OMY7VbbWy7xAb6JS5bahUUdMVLZFcsvMUdt7TCihd%2B9BjqkAarsa%2BwQjsK8fvK3LKLwwFG5lLAptlmCq8IRnFObu%2BKn4nCWsd3pQhTt8N8mC8mqN8FisjP3DuCUajnqKD58sk%2ByCn%2FpOyJsjJ%2FMKeYS6cZFyBaHmMXb40xh23cZTuq8R7h%2FlfkDmNPEdKdb%2BK%2B2Z7LM43so1KRPosppezTPwxkDH0zGhbYQNQT4ToF4J5qDLUN3BwImXIzTYOIsEOU%2Fp4OiulN9&X-Amz-Signature=9c0c688a41daa6920d4ec6c990f454d9afb310f42dd71a27d0352b3fb1bb79af&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU7TJ64R%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVi%2B7GqROBPjLzfVKAdrV08o6FMIp3anVhflG73wfmAIhAKSZK4QfEVzLBVAQbDfzED%2BrPE7EEpShvDBvB6lx%2BiQgKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYD2g2yKGQQWoXX98q3AM2LbpWDqyLISeSGJwS3kviMz628dLaXrNwmWhwGyW5%2F6OQ9oPirAz%2FEVHeagUpP0m30QLe0%2BHKirg9tvhPjRnGySU6H1vZM92GxPMm9aDHB5k0h989%2FtYL6M1x4wMtWdb32xnO3Rk%2BetpNNUiT2C4I%2B7evcP84fQ8M%2BboPkUBOKXD3wVv1ktr7m5DmN8%2FI72ECJxeT6lSmAfNbR2Az0VI%2B39qcqAEqcoCZvAWUmiTli%2BpCFzRTlHm6BIQubvPXemr0%2FxZtElPuIh4M5%2Fdjocllnq9A%2F10priFzw9ele79l4gplbFFHRv8KT2It7d8TF%2Bldar%2Buzfzn0XSiEK12Dhy7Sd5GcR7fy1d9wxeS%2FuJAYA0hdquLG%2BYN7tF4dr5n21FLdyqzoiQEsVdNh4zw8haxmLjjweSL36JI3BymYiSIPtZXUFOQJpDuxd8SlfGhITJyam5bt4iex7kWkvC8%2BSiem6psWdrMydE7TWyRrjXGhpAHPWKaQY7TGruvebQdbRh9ToVb4lifCBFBAPcGm3pd8%2F5tKK6ARJAY03UxS3wq7HFbqvND%2B7Zy1731iBXJKATAFXj2DytP6gN9Fbkjvl672OMY7VbbWy7xAb6JS5bahUUdMVLZFcsvMUdt7TCihd%2B9BjqkAarsa%2BwQjsK8fvK3LKLwwFG5lLAptlmCq8IRnFObu%2BKn4nCWsd3pQhTt8N8mC8mqN8FisjP3DuCUajnqKD58sk%2ByCn%2FpOyJsjJ%2FMKeYS6cZFyBaHmMXb40xh23cZTuq8R7h%2FlfkDmNPEdKdb%2BK%2B2Z7LM43so1KRPosppezTPwxkDH0zGhbYQNQT4ToF4J5qDLUN3BwImXIzTYOIsEOU%2Fp4OiulN9&X-Amz-Signature=22d3f5c4e01dd5976c759ebe92bd9f48d453f16241adbed37f9d110ed3b9120d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
