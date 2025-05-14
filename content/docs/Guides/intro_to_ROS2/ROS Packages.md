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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5JTN7W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG29YlKLhoM1bcdakgmO7MFt6ZzlVG1UVdaVKWvdT7jzAiB3M%2B1Co%2F0iFduxMD2Gz2LayIM76IyhBefaOcHG4yO74yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqnGPeOWDKPQy1ZWIKtwDWbmpPf6NgUNmkHvSk19jQQGEdFaFVFNZmK0sHm22OJ%2F9iM53QgGuxeMG8i%2BH3VtSoPUWIoygv1EUnb6X1L%2F1i%2FAsxkz02U79mUSrNbf68BkuvCztYOtpUGyzQcRiPaVSgn6KxC8zmj%2B5Uzyq73%2FDokg9JEV97SkUewRBTQf3AinfDrIWcdlZtGrxh2aPu3ABfSio2lrDz1XMzJuQHacvwM2Y90HFPUGFFpkHS75q4hPsJjWUJ7qqLQ2uey4ydTqzTajejoYNTtopX2FmY%2BWmBv1V8uM%2F4iQqqlMtf6QUwn8tPwQyIcbQkoMGrn9TW9B22vLlSH%2FtQZAe4JW6oysb7DKiqWvhlATUK0AXrDnfGNUcCqpvxCUHrC6A6P6whZ0OPl13cD4lCpFUDUjUCgM6tOO1%2FjDrFDa%2ByRogvs4Xw0fOfQ%2FXDofqVB2k9lsUmLf%2BwqVRfsFjZoywz45FYLQ1cL7aEN1GCJCw8sQCt%2FYwXXmBZEmso%2FwGASbCuA9MLWbX7l2iRtHz4tnQ%2Fcm6jhcUzGPj05fRAvQ5czALXh%2BXKxHD74c0xekWRwXDOX1UOPjzgym%2FrzI0mU8n2Eym0WEliLj4bEZ5zyabmDhpSb5HYTIl4uAnEiektjVFLAIwlqOTwQY6pgF9Wexw%2Brwfcwi7QZmkxMIWvTG9KWbePDwEu6%2F2QKuHuPYHzHGmR2sXpRAZ%2BYMMIqzbyK1W1G6worQlfsCZgm2URsCfglCBSErBxYwyYQ1ARTDDv2XzrZ0EPxWUFKWX8TtTNSJYIAFDQZw8gJDXNGx46xqn5m38WqG4TUXkT6Uj9GridE%2FnBXSIJN6p4nt32h%2FWaSePdD%2F7eJ1FgJlFMMngE2m1y7Xv&X-Amz-Signature=08814f6c991d85d86f20f769b05bcf3d347852fa7c4983bcf807870a7591ccac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5JTN7W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG29YlKLhoM1bcdakgmO7MFt6ZzlVG1UVdaVKWvdT7jzAiB3M%2B1Co%2F0iFduxMD2Gz2LayIM76IyhBefaOcHG4yO74yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqnGPeOWDKPQy1ZWIKtwDWbmpPf6NgUNmkHvSk19jQQGEdFaFVFNZmK0sHm22OJ%2F9iM53QgGuxeMG8i%2BH3VtSoPUWIoygv1EUnb6X1L%2F1i%2FAsxkz02U79mUSrNbf68BkuvCztYOtpUGyzQcRiPaVSgn6KxC8zmj%2B5Uzyq73%2FDokg9JEV97SkUewRBTQf3AinfDrIWcdlZtGrxh2aPu3ABfSio2lrDz1XMzJuQHacvwM2Y90HFPUGFFpkHS75q4hPsJjWUJ7qqLQ2uey4ydTqzTajejoYNTtopX2FmY%2BWmBv1V8uM%2F4iQqqlMtf6QUwn8tPwQyIcbQkoMGrn9TW9B22vLlSH%2FtQZAe4JW6oysb7DKiqWvhlATUK0AXrDnfGNUcCqpvxCUHrC6A6P6whZ0OPl13cD4lCpFUDUjUCgM6tOO1%2FjDrFDa%2ByRogvs4Xw0fOfQ%2FXDofqVB2k9lsUmLf%2BwqVRfsFjZoywz45FYLQ1cL7aEN1GCJCw8sQCt%2FYwXXmBZEmso%2FwGASbCuA9MLWbX7l2iRtHz4tnQ%2Fcm6jhcUzGPj05fRAvQ5czALXh%2BXKxHD74c0xekWRwXDOX1UOPjzgym%2FrzI0mU8n2Eym0WEliLj4bEZ5zyabmDhpSb5HYTIl4uAnEiektjVFLAIwlqOTwQY6pgF9Wexw%2Brwfcwi7QZmkxMIWvTG9KWbePDwEu6%2F2QKuHuPYHzHGmR2sXpRAZ%2BYMMIqzbyK1W1G6worQlfsCZgm2URsCfglCBSErBxYwyYQ1ARTDDv2XzrZ0EPxWUFKWX8TtTNSJYIAFDQZw8gJDXNGx46xqn5m38WqG4TUXkT6Uj9GridE%2FnBXSIJN6p4nt32h%2FWaSePdD%2F7eJ1FgJlFMMngE2m1y7Xv&X-Amz-Signature=de961f801747b7a0fae68bd041bfd0ba0200dda96d3126659d4fa6a269c1cae0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5JTN7W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG29YlKLhoM1bcdakgmO7MFt6ZzlVG1UVdaVKWvdT7jzAiB3M%2B1Co%2F0iFduxMD2Gz2LayIM76IyhBefaOcHG4yO74yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqnGPeOWDKPQy1ZWIKtwDWbmpPf6NgUNmkHvSk19jQQGEdFaFVFNZmK0sHm22OJ%2F9iM53QgGuxeMG8i%2BH3VtSoPUWIoygv1EUnb6X1L%2F1i%2FAsxkz02U79mUSrNbf68BkuvCztYOtpUGyzQcRiPaVSgn6KxC8zmj%2B5Uzyq73%2FDokg9JEV97SkUewRBTQf3AinfDrIWcdlZtGrxh2aPu3ABfSio2lrDz1XMzJuQHacvwM2Y90HFPUGFFpkHS75q4hPsJjWUJ7qqLQ2uey4ydTqzTajejoYNTtopX2FmY%2BWmBv1V8uM%2F4iQqqlMtf6QUwn8tPwQyIcbQkoMGrn9TW9B22vLlSH%2FtQZAe4JW6oysb7DKiqWvhlATUK0AXrDnfGNUcCqpvxCUHrC6A6P6whZ0OPl13cD4lCpFUDUjUCgM6tOO1%2FjDrFDa%2ByRogvs4Xw0fOfQ%2FXDofqVB2k9lsUmLf%2BwqVRfsFjZoywz45FYLQ1cL7aEN1GCJCw8sQCt%2FYwXXmBZEmso%2FwGASbCuA9MLWbX7l2iRtHz4tnQ%2Fcm6jhcUzGPj05fRAvQ5czALXh%2BXKxHD74c0xekWRwXDOX1UOPjzgym%2FrzI0mU8n2Eym0WEliLj4bEZ5zyabmDhpSb5HYTIl4uAnEiektjVFLAIwlqOTwQY6pgF9Wexw%2Brwfcwi7QZmkxMIWvTG9KWbePDwEu6%2F2QKuHuPYHzHGmR2sXpRAZ%2BYMMIqzbyK1W1G6worQlfsCZgm2URsCfglCBSErBxYwyYQ1ARTDDv2XzrZ0EPxWUFKWX8TtTNSJYIAFDQZw8gJDXNGx46xqn5m38WqG4TUXkT6Uj9GridE%2FnBXSIJN6p4nt32h%2FWaSePdD%2F7eJ1FgJlFMMngE2m1y7Xv&X-Amz-Signature=fa5b1c4748f8a1a0e73fb5b24b9745adf887d9fafb2af916da65167c00fa2e38&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5JTN7W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG29YlKLhoM1bcdakgmO7MFt6ZzlVG1UVdaVKWvdT7jzAiB3M%2B1Co%2F0iFduxMD2Gz2LayIM76IyhBefaOcHG4yO74yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqnGPeOWDKPQy1ZWIKtwDWbmpPf6NgUNmkHvSk19jQQGEdFaFVFNZmK0sHm22OJ%2F9iM53QgGuxeMG8i%2BH3VtSoPUWIoygv1EUnb6X1L%2F1i%2FAsxkz02U79mUSrNbf68BkuvCztYOtpUGyzQcRiPaVSgn6KxC8zmj%2B5Uzyq73%2FDokg9JEV97SkUewRBTQf3AinfDrIWcdlZtGrxh2aPu3ABfSio2lrDz1XMzJuQHacvwM2Y90HFPUGFFpkHS75q4hPsJjWUJ7qqLQ2uey4ydTqzTajejoYNTtopX2FmY%2BWmBv1V8uM%2F4iQqqlMtf6QUwn8tPwQyIcbQkoMGrn9TW9B22vLlSH%2FtQZAe4JW6oysb7DKiqWvhlATUK0AXrDnfGNUcCqpvxCUHrC6A6P6whZ0OPl13cD4lCpFUDUjUCgM6tOO1%2FjDrFDa%2ByRogvs4Xw0fOfQ%2FXDofqVB2k9lsUmLf%2BwqVRfsFjZoywz45FYLQ1cL7aEN1GCJCw8sQCt%2FYwXXmBZEmso%2FwGASbCuA9MLWbX7l2iRtHz4tnQ%2Fcm6jhcUzGPj05fRAvQ5czALXh%2BXKxHD74c0xekWRwXDOX1UOPjzgym%2FrzI0mU8n2Eym0WEliLj4bEZ5zyabmDhpSb5HYTIl4uAnEiektjVFLAIwlqOTwQY6pgF9Wexw%2Brwfcwi7QZmkxMIWvTG9KWbePDwEu6%2F2QKuHuPYHzHGmR2sXpRAZ%2BYMMIqzbyK1W1G6worQlfsCZgm2URsCfglCBSErBxYwyYQ1ARTDDv2XzrZ0EPxWUFKWX8TtTNSJYIAFDQZw8gJDXNGx46xqn5m38WqG4TUXkT6Uj9GridE%2FnBXSIJN6p4nt32h%2FWaSePdD%2F7eJ1FgJlFMMngE2m1y7Xv&X-Amz-Signature=a8025f0e119f8d38fe2c084c96bdd27af6303d07e1ef84242320e095aabf048f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5JTN7W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG29YlKLhoM1bcdakgmO7MFt6ZzlVG1UVdaVKWvdT7jzAiB3M%2B1Co%2F0iFduxMD2Gz2LayIM76IyhBefaOcHG4yO74yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqnGPeOWDKPQy1ZWIKtwDWbmpPf6NgUNmkHvSk19jQQGEdFaFVFNZmK0sHm22OJ%2F9iM53QgGuxeMG8i%2BH3VtSoPUWIoygv1EUnb6X1L%2F1i%2FAsxkz02U79mUSrNbf68BkuvCztYOtpUGyzQcRiPaVSgn6KxC8zmj%2B5Uzyq73%2FDokg9JEV97SkUewRBTQf3AinfDrIWcdlZtGrxh2aPu3ABfSio2lrDz1XMzJuQHacvwM2Y90HFPUGFFpkHS75q4hPsJjWUJ7qqLQ2uey4ydTqzTajejoYNTtopX2FmY%2BWmBv1V8uM%2F4iQqqlMtf6QUwn8tPwQyIcbQkoMGrn9TW9B22vLlSH%2FtQZAe4JW6oysb7DKiqWvhlATUK0AXrDnfGNUcCqpvxCUHrC6A6P6whZ0OPl13cD4lCpFUDUjUCgM6tOO1%2FjDrFDa%2ByRogvs4Xw0fOfQ%2FXDofqVB2k9lsUmLf%2BwqVRfsFjZoywz45FYLQ1cL7aEN1GCJCw8sQCt%2FYwXXmBZEmso%2FwGASbCuA9MLWbX7l2iRtHz4tnQ%2Fcm6jhcUzGPj05fRAvQ5czALXh%2BXKxHD74c0xekWRwXDOX1UOPjzgym%2FrzI0mU8n2Eym0WEliLj4bEZ5zyabmDhpSb5HYTIl4uAnEiektjVFLAIwlqOTwQY6pgF9Wexw%2Brwfcwi7QZmkxMIWvTG9KWbePDwEu6%2F2QKuHuPYHzHGmR2sXpRAZ%2BYMMIqzbyK1W1G6worQlfsCZgm2URsCfglCBSErBxYwyYQ1ARTDDv2XzrZ0EPxWUFKWX8TtTNSJYIAFDQZw8gJDXNGx46xqn5m38WqG4TUXkT6Uj9GridE%2FnBXSIJN6p4nt32h%2FWaSePdD%2F7eJ1FgJlFMMngE2m1y7Xv&X-Amz-Signature=f802ee4593365612085758345c185a64fa9d0fba56b66261182ad95fce8759e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5JTN7W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG29YlKLhoM1bcdakgmO7MFt6ZzlVG1UVdaVKWvdT7jzAiB3M%2B1Co%2F0iFduxMD2Gz2LayIM76IyhBefaOcHG4yO74yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqnGPeOWDKPQy1ZWIKtwDWbmpPf6NgUNmkHvSk19jQQGEdFaFVFNZmK0sHm22OJ%2F9iM53QgGuxeMG8i%2BH3VtSoPUWIoygv1EUnb6X1L%2F1i%2FAsxkz02U79mUSrNbf68BkuvCztYOtpUGyzQcRiPaVSgn6KxC8zmj%2B5Uzyq73%2FDokg9JEV97SkUewRBTQf3AinfDrIWcdlZtGrxh2aPu3ABfSio2lrDz1XMzJuQHacvwM2Y90HFPUGFFpkHS75q4hPsJjWUJ7qqLQ2uey4ydTqzTajejoYNTtopX2FmY%2BWmBv1V8uM%2F4iQqqlMtf6QUwn8tPwQyIcbQkoMGrn9TW9B22vLlSH%2FtQZAe4JW6oysb7DKiqWvhlATUK0AXrDnfGNUcCqpvxCUHrC6A6P6whZ0OPl13cD4lCpFUDUjUCgM6tOO1%2FjDrFDa%2ByRogvs4Xw0fOfQ%2FXDofqVB2k9lsUmLf%2BwqVRfsFjZoywz45FYLQ1cL7aEN1GCJCw8sQCt%2FYwXXmBZEmso%2FwGASbCuA9MLWbX7l2iRtHz4tnQ%2Fcm6jhcUzGPj05fRAvQ5czALXh%2BXKxHD74c0xekWRwXDOX1UOPjzgym%2FrzI0mU8n2Eym0WEliLj4bEZ5zyabmDhpSb5HYTIl4uAnEiektjVFLAIwlqOTwQY6pgF9Wexw%2Brwfcwi7QZmkxMIWvTG9KWbePDwEu6%2F2QKuHuPYHzHGmR2sXpRAZ%2BYMMIqzbyK1W1G6worQlfsCZgm2URsCfglCBSErBxYwyYQ1ARTDDv2XzrZ0EPxWUFKWX8TtTNSJYIAFDQZw8gJDXNGx46xqn5m38WqG4TUXkT6Uj9GridE%2FnBXSIJN6p4nt32h%2FWaSePdD%2F7eJ1FgJlFMMngE2m1y7Xv&X-Amz-Signature=ef74ab0ef8c5cf058328f4b7a1af6e4b0c07d354ba138e8831c959f7de71d8a9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5JTN7W%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIG29YlKLhoM1bcdakgmO7MFt6ZzlVG1UVdaVKWvdT7jzAiB3M%2B1Co%2F0iFduxMD2Gz2LayIM76IyhBefaOcHG4yO74yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMqnGPeOWDKPQy1ZWIKtwDWbmpPf6NgUNmkHvSk19jQQGEdFaFVFNZmK0sHm22OJ%2F9iM53QgGuxeMG8i%2BH3VtSoPUWIoygv1EUnb6X1L%2F1i%2FAsxkz02U79mUSrNbf68BkuvCztYOtpUGyzQcRiPaVSgn6KxC8zmj%2B5Uzyq73%2FDokg9JEV97SkUewRBTQf3AinfDrIWcdlZtGrxh2aPu3ABfSio2lrDz1XMzJuQHacvwM2Y90HFPUGFFpkHS75q4hPsJjWUJ7qqLQ2uey4ydTqzTajejoYNTtopX2FmY%2BWmBv1V8uM%2F4iQqqlMtf6QUwn8tPwQyIcbQkoMGrn9TW9B22vLlSH%2FtQZAe4JW6oysb7DKiqWvhlATUK0AXrDnfGNUcCqpvxCUHrC6A6P6whZ0OPl13cD4lCpFUDUjUCgM6tOO1%2FjDrFDa%2ByRogvs4Xw0fOfQ%2FXDofqVB2k9lsUmLf%2BwqVRfsFjZoywz45FYLQ1cL7aEN1GCJCw8sQCt%2FYwXXmBZEmso%2FwGASbCuA9MLWbX7l2iRtHz4tnQ%2Fcm6jhcUzGPj05fRAvQ5czALXh%2BXKxHD74c0xekWRwXDOX1UOPjzgym%2FrzI0mU8n2Eym0WEliLj4bEZ5zyabmDhpSb5HYTIl4uAnEiektjVFLAIwlqOTwQY6pgF9Wexw%2Brwfcwi7QZmkxMIWvTG9KWbePDwEu6%2F2QKuHuPYHzHGmR2sXpRAZ%2BYMMIqzbyK1W1G6worQlfsCZgm2URsCfglCBSErBxYwyYQ1ARTDDv2XzrZ0EPxWUFKWX8TtTNSJYIAFDQZw8gJDXNGx46xqn5m38WqG4TUXkT6Uj9GridE%2FnBXSIJN6p4nt32h%2FWaSePdD%2F7eJ1FgJlFMMngE2m1y7Xv&X-Amz-Signature=651c3ad6fbcc94035beda2c280d40c4fe583f502175531bb8907ea1853307fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
