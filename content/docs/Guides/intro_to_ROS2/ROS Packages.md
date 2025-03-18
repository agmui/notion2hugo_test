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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VRSJZY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIF%2FSA8s2HcVNvhkWzlDzc99qOG%2BUkP9wTNbc1je%2FOGoHAiEAnOZ2oSuIjVxSdjpV2CF0I4lTYdKLnfs5jCckS17goDIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN2PYBPixJPM6dKi9CrcA2AbeqKB6m0n8KiLNz6%2BX6gx3BiyqbZNGgz7nQ4a5hiOmGOSCSnn6lWvHiRAqOMU6%2FJkvfdBpPxL5LJM%2FeNy%2BAyhkdhDDDU4lvUSFTP7yswi%2BR1pFvFpPpAgN2yl3Zr2P2Ct7%2FCaaJ5dhBVC7ooTRGKZ4%2B3QnY89B2MtngSHHLcghi2LwDeUbPztkqihweqA%2FoCQ1uyRBZmk675zQAwpU6%2BPrt9Le8sHKKUposWjGI7IF92ytXC2YOCyEuBMLmTVZtoc%2BSj9Sm61DDhOv8eoeh7UHFHhjLOzIJvEciITo5a%2BVR%2FA908Ev9Oab5X1j06qB4oja8yEgDARLfMRQXoCRXSOrsMKACW6npKqNTve7oZDwmUoGiSv5BIOE%2BqO5I%2FzsUwmmaniWLQcnaxB7X0Y9lhtRNp5Gg9YH1rNEAGjlTf7KoK1%2FJ%2FcdexLFMH8%2F63JCFr7XAFyKWN9WD1FbAN7VduGDqEaCsmxO4u5mXgQlbf9Mj5nY%2BmSMfOukx0ZM4UIedJ%2FpFhf0j2t%2BTy151GgrtZfYpr%2Fiu3YDERvfGXyq1LVfJgDga60pCGB%2FewuIXFx8gVG%2BG%2BJyl6dQ5I%2FIrx3%2BjKL5lW5MP25nN5rDv%2FBYCBcKR2dU7KactehalOyMOi15r4GOqUBExL2YJQ4OtaMfOZv7eZ0r9DPji%2BFJ7bl%2FUvgEa%2FUBm4PV1Z%2BTK2p%2FlRT8gnPjgkIU919TEOZ46Ivp9dN1x%2BATGxmPA5v8MILmW%2FpHrLsabGFDMjKqQ2iVAcibDCdOEqwTXAjJfNlp0lv3uGq3qQS%2BrBAIytIYbcwAvAA1V7QlKSAUasFt5AE7TQ7BI%2BqGQxa60zVSvdT80dP7yrGzR7NqfEWi4Js&X-Amz-Signature=d6503317fedfbc0f0fa94217f812f4481747a5d6c28f3ac99bdf3e3e6a92385b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VRSJZY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIF%2FSA8s2HcVNvhkWzlDzc99qOG%2BUkP9wTNbc1je%2FOGoHAiEAnOZ2oSuIjVxSdjpV2CF0I4lTYdKLnfs5jCckS17goDIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN2PYBPixJPM6dKi9CrcA2AbeqKB6m0n8KiLNz6%2BX6gx3BiyqbZNGgz7nQ4a5hiOmGOSCSnn6lWvHiRAqOMU6%2FJkvfdBpPxL5LJM%2FeNy%2BAyhkdhDDDU4lvUSFTP7yswi%2BR1pFvFpPpAgN2yl3Zr2P2Ct7%2FCaaJ5dhBVC7ooTRGKZ4%2B3QnY89B2MtngSHHLcghi2LwDeUbPztkqihweqA%2FoCQ1uyRBZmk675zQAwpU6%2BPrt9Le8sHKKUposWjGI7IF92ytXC2YOCyEuBMLmTVZtoc%2BSj9Sm61DDhOv8eoeh7UHFHhjLOzIJvEciITo5a%2BVR%2FA908Ev9Oab5X1j06qB4oja8yEgDARLfMRQXoCRXSOrsMKACW6npKqNTve7oZDwmUoGiSv5BIOE%2BqO5I%2FzsUwmmaniWLQcnaxB7X0Y9lhtRNp5Gg9YH1rNEAGjlTf7KoK1%2FJ%2FcdexLFMH8%2F63JCFr7XAFyKWN9WD1FbAN7VduGDqEaCsmxO4u5mXgQlbf9Mj5nY%2BmSMfOukx0ZM4UIedJ%2FpFhf0j2t%2BTy151GgrtZfYpr%2Fiu3YDERvfGXyq1LVfJgDga60pCGB%2FewuIXFx8gVG%2BG%2BJyl6dQ5I%2FIrx3%2BjKL5lW5MP25nN5rDv%2FBYCBcKR2dU7KactehalOyMOi15r4GOqUBExL2YJQ4OtaMfOZv7eZ0r9DPji%2BFJ7bl%2FUvgEa%2FUBm4PV1Z%2BTK2p%2FlRT8gnPjgkIU919TEOZ46Ivp9dN1x%2BATGxmPA5v8MILmW%2FpHrLsabGFDMjKqQ2iVAcibDCdOEqwTXAjJfNlp0lv3uGq3qQS%2BrBAIytIYbcwAvAA1V7QlKSAUasFt5AE7TQ7BI%2BqGQxa60zVSvdT80dP7yrGzR7NqfEWi4Js&X-Amz-Signature=387ea1764dbf4497098e20254db9e8f7246332e2b192941ecd66ff130bfd63e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VRSJZY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIF%2FSA8s2HcVNvhkWzlDzc99qOG%2BUkP9wTNbc1je%2FOGoHAiEAnOZ2oSuIjVxSdjpV2CF0I4lTYdKLnfs5jCckS17goDIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN2PYBPixJPM6dKi9CrcA2AbeqKB6m0n8KiLNz6%2BX6gx3BiyqbZNGgz7nQ4a5hiOmGOSCSnn6lWvHiRAqOMU6%2FJkvfdBpPxL5LJM%2FeNy%2BAyhkdhDDDU4lvUSFTP7yswi%2BR1pFvFpPpAgN2yl3Zr2P2Ct7%2FCaaJ5dhBVC7ooTRGKZ4%2B3QnY89B2MtngSHHLcghi2LwDeUbPztkqihweqA%2FoCQ1uyRBZmk675zQAwpU6%2BPrt9Le8sHKKUposWjGI7IF92ytXC2YOCyEuBMLmTVZtoc%2BSj9Sm61DDhOv8eoeh7UHFHhjLOzIJvEciITo5a%2BVR%2FA908Ev9Oab5X1j06qB4oja8yEgDARLfMRQXoCRXSOrsMKACW6npKqNTve7oZDwmUoGiSv5BIOE%2BqO5I%2FzsUwmmaniWLQcnaxB7X0Y9lhtRNp5Gg9YH1rNEAGjlTf7KoK1%2FJ%2FcdexLFMH8%2F63JCFr7XAFyKWN9WD1FbAN7VduGDqEaCsmxO4u5mXgQlbf9Mj5nY%2BmSMfOukx0ZM4UIedJ%2FpFhf0j2t%2BTy151GgrtZfYpr%2Fiu3YDERvfGXyq1LVfJgDga60pCGB%2FewuIXFx8gVG%2BG%2BJyl6dQ5I%2FIrx3%2BjKL5lW5MP25nN5rDv%2FBYCBcKR2dU7KactehalOyMOi15r4GOqUBExL2YJQ4OtaMfOZv7eZ0r9DPji%2BFJ7bl%2FUvgEa%2FUBm4PV1Z%2BTK2p%2FlRT8gnPjgkIU919TEOZ46Ivp9dN1x%2BATGxmPA5v8MILmW%2FpHrLsabGFDMjKqQ2iVAcibDCdOEqwTXAjJfNlp0lv3uGq3qQS%2BrBAIytIYbcwAvAA1V7QlKSAUasFt5AE7TQ7BI%2BqGQxa60zVSvdT80dP7yrGzR7NqfEWi4Js&X-Amz-Signature=7d3afc948198e3c8ecf8d9ab89cc22955613f53495bf2141489aed7ff3037d48&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VRSJZY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIF%2FSA8s2HcVNvhkWzlDzc99qOG%2BUkP9wTNbc1je%2FOGoHAiEAnOZ2oSuIjVxSdjpV2CF0I4lTYdKLnfs5jCckS17goDIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN2PYBPixJPM6dKi9CrcA2AbeqKB6m0n8KiLNz6%2BX6gx3BiyqbZNGgz7nQ4a5hiOmGOSCSnn6lWvHiRAqOMU6%2FJkvfdBpPxL5LJM%2FeNy%2BAyhkdhDDDU4lvUSFTP7yswi%2BR1pFvFpPpAgN2yl3Zr2P2Ct7%2FCaaJ5dhBVC7ooTRGKZ4%2B3QnY89B2MtngSHHLcghi2LwDeUbPztkqihweqA%2FoCQ1uyRBZmk675zQAwpU6%2BPrt9Le8sHKKUposWjGI7IF92ytXC2YOCyEuBMLmTVZtoc%2BSj9Sm61DDhOv8eoeh7UHFHhjLOzIJvEciITo5a%2BVR%2FA908Ev9Oab5X1j06qB4oja8yEgDARLfMRQXoCRXSOrsMKACW6npKqNTve7oZDwmUoGiSv5BIOE%2BqO5I%2FzsUwmmaniWLQcnaxB7X0Y9lhtRNp5Gg9YH1rNEAGjlTf7KoK1%2FJ%2FcdexLFMH8%2F63JCFr7XAFyKWN9WD1FbAN7VduGDqEaCsmxO4u5mXgQlbf9Mj5nY%2BmSMfOukx0ZM4UIedJ%2FpFhf0j2t%2BTy151GgrtZfYpr%2Fiu3YDERvfGXyq1LVfJgDga60pCGB%2FewuIXFx8gVG%2BG%2BJyl6dQ5I%2FIrx3%2BjKL5lW5MP25nN5rDv%2FBYCBcKR2dU7KactehalOyMOi15r4GOqUBExL2YJQ4OtaMfOZv7eZ0r9DPji%2BFJ7bl%2FUvgEa%2FUBm4PV1Z%2BTK2p%2FlRT8gnPjgkIU919TEOZ46Ivp9dN1x%2BATGxmPA5v8MILmW%2FpHrLsabGFDMjKqQ2iVAcibDCdOEqwTXAjJfNlp0lv3uGq3qQS%2BrBAIytIYbcwAvAA1V7QlKSAUasFt5AE7TQ7BI%2BqGQxa60zVSvdT80dP7yrGzR7NqfEWi4Js&X-Amz-Signature=88a39abb8a768aa37122a00980124d9ad5bbdf3faf529b34ba80162081be594a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VRSJZY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIF%2FSA8s2HcVNvhkWzlDzc99qOG%2BUkP9wTNbc1je%2FOGoHAiEAnOZ2oSuIjVxSdjpV2CF0I4lTYdKLnfs5jCckS17goDIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN2PYBPixJPM6dKi9CrcA2AbeqKB6m0n8KiLNz6%2BX6gx3BiyqbZNGgz7nQ4a5hiOmGOSCSnn6lWvHiRAqOMU6%2FJkvfdBpPxL5LJM%2FeNy%2BAyhkdhDDDU4lvUSFTP7yswi%2BR1pFvFpPpAgN2yl3Zr2P2Ct7%2FCaaJ5dhBVC7ooTRGKZ4%2B3QnY89B2MtngSHHLcghi2LwDeUbPztkqihweqA%2FoCQ1uyRBZmk675zQAwpU6%2BPrt9Le8sHKKUposWjGI7IF92ytXC2YOCyEuBMLmTVZtoc%2BSj9Sm61DDhOv8eoeh7UHFHhjLOzIJvEciITo5a%2BVR%2FA908Ev9Oab5X1j06qB4oja8yEgDARLfMRQXoCRXSOrsMKACW6npKqNTve7oZDwmUoGiSv5BIOE%2BqO5I%2FzsUwmmaniWLQcnaxB7X0Y9lhtRNp5Gg9YH1rNEAGjlTf7KoK1%2FJ%2FcdexLFMH8%2F63JCFr7XAFyKWN9WD1FbAN7VduGDqEaCsmxO4u5mXgQlbf9Mj5nY%2BmSMfOukx0ZM4UIedJ%2FpFhf0j2t%2BTy151GgrtZfYpr%2Fiu3YDERvfGXyq1LVfJgDga60pCGB%2FewuIXFx8gVG%2BG%2BJyl6dQ5I%2FIrx3%2BjKL5lW5MP25nN5rDv%2FBYCBcKR2dU7KactehalOyMOi15r4GOqUBExL2YJQ4OtaMfOZv7eZ0r9DPji%2BFJ7bl%2FUvgEa%2FUBm4PV1Z%2BTK2p%2FlRT8gnPjgkIU919TEOZ46Ivp9dN1x%2BATGxmPA5v8MILmW%2FpHrLsabGFDMjKqQ2iVAcibDCdOEqwTXAjJfNlp0lv3uGq3qQS%2BrBAIytIYbcwAvAA1V7QlKSAUasFt5AE7TQ7BI%2BqGQxa60zVSvdT80dP7yrGzR7NqfEWi4Js&X-Amz-Signature=bba595a141792a8e6aac6e18b65fef08ab4cf52a375666a98d7cbaa865420021&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VRSJZY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIF%2FSA8s2HcVNvhkWzlDzc99qOG%2BUkP9wTNbc1je%2FOGoHAiEAnOZ2oSuIjVxSdjpV2CF0I4lTYdKLnfs5jCckS17goDIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN2PYBPixJPM6dKi9CrcA2AbeqKB6m0n8KiLNz6%2BX6gx3BiyqbZNGgz7nQ4a5hiOmGOSCSnn6lWvHiRAqOMU6%2FJkvfdBpPxL5LJM%2FeNy%2BAyhkdhDDDU4lvUSFTP7yswi%2BR1pFvFpPpAgN2yl3Zr2P2Ct7%2FCaaJ5dhBVC7ooTRGKZ4%2B3QnY89B2MtngSHHLcghi2LwDeUbPztkqihweqA%2FoCQ1uyRBZmk675zQAwpU6%2BPrt9Le8sHKKUposWjGI7IF92ytXC2YOCyEuBMLmTVZtoc%2BSj9Sm61DDhOv8eoeh7UHFHhjLOzIJvEciITo5a%2BVR%2FA908Ev9Oab5X1j06qB4oja8yEgDARLfMRQXoCRXSOrsMKACW6npKqNTve7oZDwmUoGiSv5BIOE%2BqO5I%2FzsUwmmaniWLQcnaxB7X0Y9lhtRNp5Gg9YH1rNEAGjlTf7KoK1%2FJ%2FcdexLFMH8%2F63JCFr7XAFyKWN9WD1FbAN7VduGDqEaCsmxO4u5mXgQlbf9Mj5nY%2BmSMfOukx0ZM4UIedJ%2FpFhf0j2t%2BTy151GgrtZfYpr%2Fiu3YDERvfGXyq1LVfJgDga60pCGB%2FewuIXFx8gVG%2BG%2BJyl6dQ5I%2FIrx3%2BjKL5lW5MP25nN5rDv%2FBYCBcKR2dU7KactehalOyMOi15r4GOqUBExL2YJQ4OtaMfOZv7eZ0r9DPji%2BFJ7bl%2FUvgEa%2FUBm4PV1Z%2BTK2p%2FlRT8gnPjgkIU919TEOZ46Ivp9dN1x%2BATGxmPA5v8MILmW%2FpHrLsabGFDMjKqQ2iVAcibDCdOEqwTXAjJfNlp0lv3uGq3qQS%2BrBAIytIYbcwAvAA1V7QlKSAUasFt5AE7TQ7BI%2BqGQxa60zVSvdT80dP7yrGzR7NqfEWi4Js&X-Amz-Signature=3e10f76b3e702951d76c8c20f3a0ad40fdfdfedeb28b98bf1d6b164b783da628&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VRSJZY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIF%2FSA8s2HcVNvhkWzlDzc99qOG%2BUkP9wTNbc1je%2FOGoHAiEAnOZ2oSuIjVxSdjpV2CF0I4lTYdKLnfs5jCckS17goDIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDN2PYBPixJPM6dKi9CrcA2AbeqKB6m0n8KiLNz6%2BX6gx3BiyqbZNGgz7nQ4a5hiOmGOSCSnn6lWvHiRAqOMU6%2FJkvfdBpPxL5LJM%2FeNy%2BAyhkdhDDDU4lvUSFTP7yswi%2BR1pFvFpPpAgN2yl3Zr2P2Ct7%2FCaaJ5dhBVC7ooTRGKZ4%2B3QnY89B2MtngSHHLcghi2LwDeUbPztkqihweqA%2FoCQ1uyRBZmk675zQAwpU6%2BPrt9Le8sHKKUposWjGI7IF92ytXC2YOCyEuBMLmTVZtoc%2BSj9Sm61DDhOv8eoeh7UHFHhjLOzIJvEciITo5a%2BVR%2FA908Ev9Oab5X1j06qB4oja8yEgDARLfMRQXoCRXSOrsMKACW6npKqNTve7oZDwmUoGiSv5BIOE%2BqO5I%2FzsUwmmaniWLQcnaxB7X0Y9lhtRNp5Gg9YH1rNEAGjlTf7KoK1%2FJ%2FcdexLFMH8%2F63JCFr7XAFyKWN9WD1FbAN7VduGDqEaCsmxO4u5mXgQlbf9Mj5nY%2BmSMfOukx0ZM4UIedJ%2FpFhf0j2t%2BTy151GgrtZfYpr%2Fiu3YDERvfGXyq1LVfJgDga60pCGB%2FewuIXFx8gVG%2BG%2BJyl6dQ5I%2FIrx3%2BjKL5lW5MP25nN5rDv%2FBYCBcKR2dU7KactehalOyMOi15r4GOqUBExL2YJQ4OtaMfOZv7eZ0r9DPji%2BFJ7bl%2FUvgEa%2FUBm4PV1Z%2BTK2p%2FlRT8gnPjgkIU919TEOZ46Ivp9dN1x%2BATGxmPA5v8MILmW%2FpHrLsabGFDMjKqQ2iVAcibDCdOEqwTXAjJfNlp0lv3uGq3qQS%2BrBAIytIYbcwAvAA1V7QlKSAUasFt5AE7TQ7BI%2BqGQxa60zVSvdT80dP7yrGzR7NqfEWi4Js&X-Amz-Signature=060e789ceb989379dbbdb7ef7048c0d5b033bbb7b8c893c416cb902b79d80ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
