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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPXUZSE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUBYojSD3d21ozT%2B%2BrG48urHbrG88%2FATLoiuPt1gzyCAiBa3dN6hgo3mXVbWvrRXD8rK7wQ%2Blwfhhs%2FXOMZ5KhkBSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMZhKJSuYPR3D1ihzjKtwDz2%2FnZ37hb0YaMGI9xLw5YD9IdkzLlf50ES2d5%2BTDNZ2aXXimtu96Q0st42AmuuUPIvtaTqbQgljBJOLH%2B68jrdTvnkNH6wpYJ51h%2B3MtpnB9VLwH8QaJu4o6HCrsGRZ%2F6KxPFu60nOwL7rztOPgtN2UHqn1q4TMN2QWIkFFjA%2F5z%2FCZGM9z8m7yNJDAojqtxw1dZ5CH%2FaL%2F4G3CSmk1h7kCmGG0FL39MmJNxvNQsgrvVMAgWfT57kNdp3rWo1pkGP0d9rEegsou%2FtqPb8Kw8jUsNmZujm914eESahCJf%2BqYINCewa%2FFZ0v5dqpQR3Ww0L%2BrqpsWgg9Pcn2T3RMnvIA07PBbd6lxdShl1SA%2Bu9bsFnxgeuRnNym%2BwEC6j87%2BbdJ1IaNmajI7mCh7LxUjkBtk6fMAUqblNkbols%2Bi3Uk%2F3QpXviBx7PBHWE%2FEBaT4VAVLXYF19fxe4XLkqduvfepj07tiT5B%2BeflViPCqTl5%2BoTQPqqugVpfijOrIwpC5FEAZoY%2F%2F4PvvkvrxtAM1GCz4jxn%2F0rQSZg6v76YKNpqbuDcNfb61b8NxbpVObaA%2BxxaDEHr%2B%2BQYw1hc1d71NViJO2NiYXtYnaImLOBSJujFPat8QgHZUMIDIK3RQw3JuVvQY6pgGZgc2kGSl6xFz7uKjZeWh5FrxGL70Cl7mL6UKvRK5UAyEUDN71%2Bh5BcR4pZK4fkcveR05v7LLdZSg%2B23a2PoUxwP%2BDxkaPHt4sDA956vfGtMahtiwz%2B2xnUf3hHbgThR1EBWFHYpvfiHem8%2B442q5MNRRaF0qfr3nkfykwXP8F95G4MzbztWe30YWx2ReuD6TQRfuq9hKJ7ge33A7oS0VR9Bmazod5&X-Amz-Signature=7765574bcb8082695db43b84ad8301a59a71752f0d9eb6b254b2ce0b1b8546a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPXUZSE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUBYojSD3d21ozT%2B%2BrG48urHbrG88%2FATLoiuPt1gzyCAiBa3dN6hgo3mXVbWvrRXD8rK7wQ%2Blwfhhs%2FXOMZ5KhkBSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMZhKJSuYPR3D1ihzjKtwDz2%2FnZ37hb0YaMGI9xLw5YD9IdkzLlf50ES2d5%2BTDNZ2aXXimtu96Q0st42AmuuUPIvtaTqbQgljBJOLH%2B68jrdTvnkNH6wpYJ51h%2B3MtpnB9VLwH8QaJu4o6HCrsGRZ%2F6KxPFu60nOwL7rztOPgtN2UHqn1q4TMN2QWIkFFjA%2F5z%2FCZGM9z8m7yNJDAojqtxw1dZ5CH%2FaL%2F4G3CSmk1h7kCmGG0FL39MmJNxvNQsgrvVMAgWfT57kNdp3rWo1pkGP0d9rEegsou%2FtqPb8Kw8jUsNmZujm914eESahCJf%2BqYINCewa%2FFZ0v5dqpQR3Ww0L%2BrqpsWgg9Pcn2T3RMnvIA07PBbd6lxdShl1SA%2Bu9bsFnxgeuRnNym%2BwEC6j87%2BbdJ1IaNmajI7mCh7LxUjkBtk6fMAUqblNkbols%2Bi3Uk%2F3QpXviBx7PBHWE%2FEBaT4VAVLXYF19fxe4XLkqduvfepj07tiT5B%2BeflViPCqTl5%2BoTQPqqugVpfijOrIwpC5FEAZoY%2F%2F4PvvkvrxtAM1GCz4jxn%2F0rQSZg6v76YKNpqbuDcNfb61b8NxbpVObaA%2BxxaDEHr%2B%2BQYw1hc1d71NViJO2NiYXtYnaImLOBSJujFPat8QgHZUMIDIK3RQw3JuVvQY6pgGZgc2kGSl6xFz7uKjZeWh5FrxGL70Cl7mL6UKvRK5UAyEUDN71%2Bh5BcR4pZK4fkcveR05v7LLdZSg%2B23a2PoUxwP%2BDxkaPHt4sDA956vfGtMahtiwz%2B2xnUf3hHbgThR1EBWFHYpvfiHem8%2B442q5MNRRaF0qfr3nkfykwXP8F95G4MzbztWe30YWx2ReuD6TQRfuq9hKJ7ge33A7oS0VR9Bmazod5&X-Amz-Signature=d20425c6048ff02eb07df236dec03cbb9600eb50c5d82fb874175b55e722d707&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPXUZSE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUBYojSD3d21ozT%2B%2BrG48urHbrG88%2FATLoiuPt1gzyCAiBa3dN6hgo3mXVbWvrRXD8rK7wQ%2Blwfhhs%2FXOMZ5KhkBSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMZhKJSuYPR3D1ihzjKtwDz2%2FnZ37hb0YaMGI9xLw5YD9IdkzLlf50ES2d5%2BTDNZ2aXXimtu96Q0st42AmuuUPIvtaTqbQgljBJOLH%2B68jrdTvnkNH6wpYJ51h%2B3MtpnB9VLwH8QaJu4o6HCrsGRZ%2F6KxPFu60nOwL7rztOPgtN2UHqn1q4TMN2QWIkFFjA%2F5z%2FCZGM9z8m7yNJDAojqtxw1dZ5CH%2FaL%2F4G3CSmk1h7kCmGG0FL39MmJNxvNQsgrvVMAgWfT57kNdp3rWo1pkGP0d9rEegsou%2FtqPb8Kw8jUsNmZujm914eESahCJf%2BqYINCewa%2FFZ0v5dqpQR3Ww0L%2BrqpsWgg9Pcn2T3RMnvIA07PBbd6lxdShl1SA%2Bu9bsFnxgeuRnNym%2BwEC6j87%2BbdJ1IaNmajI7mCh7LxUjkBtk6fMAUqblNkbols%2Bi3Uk%2F3QpXviBx7PBHWE%2FEBaT4VAVLXYF19fxe4XLkqduvfepj07tiT5B%2BeflViPCqTl5%2BoTQPqqugVpfijOrIwpC5FEAZoY%2F%2F4PvvkvrxtAM1GCz4jxn%2F0rQSZg6v76YKNpqbuDcNfb61b8NxbpVObaA%2BxxaDEHr%2B%2BQYw1hc1d71NViJO2NiYXtYnaImLOBSJujFPat8QgHZUMIDIK3RQw3JuVvQY6pgGZgc2kGSl6xFz7uKjZeWh5FrxGL70Cl7mL6UKvRK5UAyEUDN71%2Bh5BcR4pZK4fkcveR05v7LLdZSg%2B23a2PoUxwP%2BDxkaPHt4sDA956vfGtMahtiwz%2B2xnUf3hHbgThR1EBWFHYpvfiHem8%2B442q5MNRRaF0qfr3nkfykwXP8F95G4MzbztWe30YWx2ReuD6TQRfuq9hKJ7ge33A7oS0VR9Bmazod5&X-Amz-Signature=4884a47e629f005743c89e30767bba003ce1d379dca7551aadaadd635ba28dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPXUZSE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUBYojSD3d21ozT%2B%2BrG48urHbrG88%2FATLoiuPt1gzyCAiBa3dN6hgo3mXVbWvrRXD8rK7wQ%2Blwfhhs%2FXOMZ5KhkBSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMZhKJSuYPR3D1ihzjKtwDz2%2FnZ37hb0YaMGI9xLw5YD9IdkzLlf50ES2d5%2BTDNZ2aXXimtu96Q0st42AmuuUPIvtaTqbQgljBJOLH%2B68jrdTvnkNH6wpYJ51h%2B3MtpnB9VLwH8QaJu4o6HCrsGRZ%2F6KxPFu60nOwL7rztOPgtN2UHqn1q4TMN2QWIkFFjA%2F5z%2FCZGM9z8m7yNJDAojqtxw1dZ5CH%2FaL%2F4G3CSmk1h7kCmGG0FL39MmJNxvNQsgrvVMAgWfT57kNdp3rWo1pkGP0d9rEegsou%2FtqPb8Kw8jUsNmZujm914eESahCJf%2BqYINCewa%2FFZ0v5dqpQR3Ww0L%2BrqpsWgg9Pcn2T3RMnvIA07PBbd6lxdShl1SA%2Bu9bsFnxgeuRnNym%2BwEC6j87%2BbdJ1IaNmajI7mCh7LxUjkBtk6fMAUqblNkbols%2Bi3Uk%2F3QpXviBx7PBHWE%2FEBaT4VAVLXYF19fxe4XLkqduvfepj07tiT5B%2BeflViPCqTl5%2BoTQPqqugVpfijOrIwpC5FEAZoY%2F%2F4PvvkvrxtAM1GCz4jxn%2F0rQSZg6v76YKNpqbuDcNfb61b8NxbpVObaA%2BxxaDEHr%2B%2BQYw1hc1d71NViJO2NiYXtYnaImLOBSJujFPat8QgHZUMIDIK3RQw3JuVvQY6pgGZgc2kGSl6xFz7uKjZeWh5FrxGL70Cl7mL6UKvRK5UAyEUDN71%2Bh5BcR4pZK4fkcveR05v7LLdZSg%2B23a2PoUxwP%2BDxkaPHt4sDA956vfGtMahtiwz%2B2xnUf3hHbgThR1EBWFHYpvfiHem8%2B442q5MNRRaF0qfr3nkfykwXP8F95G4MzbztWe30YWx2ReuD6TQRfuq9hKJ7ge33A7oS0VR9Bmazod5&X-Amz-Signature=bababb0b752a24feb366ce30ff7bf9d4e1b88621376f87401620b83e58f227e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPXUZSE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUBYojSD3d21ozT%2B%2BrG48urHbrG88%2FATLoiuPt1gzyCAiBa3dN6hgo3mXVbWvrRXD8rK7wQ%2Blwfhhs%2FXOMZ5KhkBSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMZhKJSuYPR3D1ihzjKtwDz2%2FnZ37hb0YaMGI9xLw5YD9IdkzLlf50ES2d5%2BTDNZ2aXXimtu96Q0st42AmuuUPIvtaTqbQgljBJOLH%2B68jrdTvnkNH6wpYJ51h%2B3MtpnB9VLwH8QaJu4o6HCrsGRZ%2F6KxPFu60nOwL7rztOPgtN2UHqn1q4TMN2QWIkFFjA%2F5z%2FCZGM9z8m7yNJDAojqtxw1dZ5CH%2FaL%2F4G3CSmk1h7kCmGG0FL39MmJNxvNQsgrvVMAgWfT57kNdp3rWo1pkGP0d9rEegsou%2FtqPb8Kw8jUsNmZujm914eESahCJf%2BqYINCewa%2FFZ0v5dqpQR3Ww0L%2BrqpsWgg9Pcn2T3RMnvIA07PBbd6lxdShl1SA%2Bu9bsFnxgeuRnNym%2BwEC6j87%2BbdJ1IaNmajI7mCh7LxUjkBtk6fMAUqblNkbols%2Bi3Uk%2F3QpXviBx7PBHWE%2FEBaT4VAVLXYF19fxe4XLkqduvfepj07tiT5B%2BeflViPCqTl5%2BoTQPqqugVpfijOrIwpC5FEAZoY%2F%2F4PvvkvrxtAM1GCz4jxn%2F0rQSZg6v76YKNpqbuDcNfb61b8NxbpVObaA%2BxxaDEHr%2B%2BQYw1hc1d71NViJO2NiYXtYnaImLOBSJujFPat8QgHZUMIDIK3RQw3JuVvQY6pgGZgc2kGSl6xFz7uKjZeWh5FrxGL70Cl7mL6UKvRK5UAyEUDN71%2Bh5BcR4pZK4fkcveR05v7LLdZSg%2B23a2PoUxwP%2BDxkaPHt4sDA956vfGtMahtiwz%2B2xnUf3hHbgThR1EBWFHYpvfiHem8%2B442q5MNRRaF0qfr3nkfykwXP8F95G4MzbztWe30YWx2ReuD6TQRfuq9hKJ7ge33A7oS0VR9Bmazod5&X-Amz-Signature=56a53312a704110a1f1f12c873381dcf94854fcecbcecfc6d5860e081fb19019&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPXUZSE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUBYojSD3d21ozT%2B%2BrG48urHbrG88%2FATLoiuPt1gzyCAiBa3dN6hgo3mXVbWvrRXD8rK7wQ%2Blwfhhs%2FXOMZ5KhkBSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMZhKJSuYPR3D1ihzjKtwDz2%2FnZ37hb0YaMGI9xLw5YD9IdkzLlf50ES2d5%2BTDNZ2aXXimtu96Q0st42AmuuUPIvtaTqbQgljBJOLH%2B68jrdTvnkNH6wpYJ51h%2B3MtpnB9VLwH8QaJu4o6HCrsGRZ%2F6KxPFu60nOwL7rztOPgtN2UHqn1q4TMN2QWIkFFjA%2F5z%2FCZGM9z8m7yNJDAojqtxw1dZ5CH%2FaL%2F4G3CSmk1h7kCmGG0FL39MmJNxvNQsgrvVMAgWfT57kNdp3rWo1pkGP0d9rEegsou%2FtqPb8Kw8jUsNmZujm914eESahCJf%2BqYINCewa%2FFZ0v5dqpQR3Ww0L%2BrqpsWgg9Pcn2T3RMnvIA07PBbd6lxdShl1SA%2Bu9bsFnxgeuRnNym%2BwEC6j87%2BbdJ1IaNmajI7mCh7LxUjkBtk6fMAUqblNkbols%2Bi3Uk%2F3QpXviBx7PBHWE%2FEBaT4VAVLXYF19fxe4XLkqduvfepj07tiT5B%2BeflViPCqTl5%2BoTQPqqugVpfijOrIwpC5FEAZoY%2F%2F4PvvkvrxtAM1GCz4jxn%2F0rQSZg6v76YKNpqbuDcNfb61b8NxbpVObaA%2BxxaDEHr%2B%2BQYw1hc1d71NViJO2NiYXtYnaImLOBSJujFPat8QgHZUMIDIK3RQw3JuVvQY6pgGZgc2kGSl6xFz7uKjZeWh5FrxGL70Cl7mL6UKvRK5UAyEUDN71%2Bh5BcR4pZK4fkcveR05v7LLdZSg%2B23a2PoUxwP%2BDxkaPHt4sDA956vfGtMahtiwz%2B2xnUf3hHbgThR1EBWFHYpvfiHem8%2B442q5MNRRaF0qfr3nkfykwXP8F95G4MzbztWe30YWx2ReuD6TQRfuq9hKJ7ge33A7oS0VR9Bmazod5&X-Amz-Signature=6631fdec2afeb03008a81e1cbfd393b13b6dacfd6d5e64cc7f7274f7b4c2b5f9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPXUZSE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCICUBYojSD3d21ozT%2B%2BrG48urHbrG88%2FATLoiuPt1gzyCAiBa3dN6hgo3mXVbWvrRXD8rK7wQ%2Blwfhhs%2FXOMZ5KhkBSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMZhKJSuYPR3D1ihzjKtwDz2%2FnZ37hb0YaMGI9xLw5YD9IdkzLlf50ES2d5%2BTDNZ2aXXimtu96Q0st42AmuuUPIvtaTqbQgljBJOLH%2B68jrdTvnkNH6wpYJ51h%2B3MtpnB9VLwH8QaJu4o6HCrsGRZ%2F6KxPFu60nOwL7rztOPgtN2UHqn1q4TMN2QWIkFFjA%2F5z%2FCZGM9z8m7yNJDAojqtxw1dZ5CH%2FaL%2F4G3CSmk1h7kCmGG0FL39MmJNxvNQsgrvVMAgWfT57kNdp3rWo1pkGP0d9rEegsou%2FtqPb8Kw8jUsNmZujm914eESahCJf%2BqYINCewa%2FFZ0v5dqpQR3Ww0L%2BrqpsWgg9Pcn2T3RMnvIA07PBbd6lxdShl1SA%2Bu9bsFnxgeuRnNym%2BwEC6j87%2BbdJ1IaNmajI7mCh7LxUjkBtk6fMAUqblNkbols%2Bi3Uk%2F3QpXviBx7PBHWE%2FEBaT4VAVLXYF19fxe4XLkqduvfepj07tiT5B%2BeflViPCqTl5%2BoTQPqqugVpfijOrIwpC5FEAZoY%2F%2F4PvvkvrxtAM1GCz4jxn%2F0rQSZg6v76YKNpqbuDcNfb61b8NxbpVObaA%2BxxaDEHr%2B%2BQYw1hc1d71NViJO2NiYXtYnaImLOBSJujFPat8QgHZUMIDIK3RQw3JuVvQY6pgGZgc2kGSl6xFz7uKjZeWh5FrxGL70Cl7mL6UKvRK5UAyEUDN71%2Bh5BcR4pZK4fkcveR05v7LLdZSg%2B23a2PoUxwP%2BDxkaPHt4sDA956vfGtMahtiwz%2B2xnUf3hHbgThR1EBWFHYpvfiHem8%2B442q5MNRRaF0qfr3nkfykwXP8F95G4MzbztWe30YWx2ReuD6TQRfuq9hKJ7ge33A7oS0VR9Bmazod5&X-Amz-Signature=9579263c3eb488a0af77d200f30ee86e0b6995c41cc87cf578d4ce5d1ebbfc92&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
