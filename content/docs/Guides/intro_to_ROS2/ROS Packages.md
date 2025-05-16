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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3K4ZAW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQVS%2FyK19ej22k1HLkTXOkSnJe%2B4LWdaCXPLket4IjeAIgXiVpiHpL31q4yP7H4PpxA6CNof9lAfY76XYtHlLkZSYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIX9vgEpxHUy2TfRTircA0hHyHpDHJZlC4o0p6pfqAnC45VpwjA6n7M2aUX9cv1Mb1HuW6%2B5y0MB8Bod%2BXa5LueHrvMuTU%2FDpVwOBOMhChk2ePWzG6W8Jw7YWnPBnRImLGpz%2Bcu15Yr72rCA1it3kier%2FqlGiEpfvNpu4KJ2a%2F3cHGBX1VcNr%2FNlfC0PnB2CF3JC2mXQXat676jvjzuOTDPrHEprE4ifCr9AFQBOHmAuzfBN22b8G37uKAnWb2GQ9XR3c4p4MSJE0sWKE3c0AdB8NWlKyYbkLrjFaO3PDEyjGcpY3HJxJXiN02MxM2KbswfqtAmmZQUEWtW0v1vK3iHt5leHiDjISFddiyfH9bbghl4sK2WLlPiAyw8e%2F0VXTub%2F1ceIbc7qqvTHkGLbcCzcgEy%2Bs4quw0Qa4XFPEg7hovlkHKpNbB1moCuKWedorwHSz%2Fo2koXdCxvl8m%2B%2FE4W0OcHN4natcPSA2300g7Herij3iWaK32fqov%2FTxVP6ebEoIP8%2FdPgzQ%2B7ycJ7A1BUP%2FJSIdtpLzZO9c570qqRRn2PxL3zNFlOuXUSz63UeCHlLUnI5dLkD8iU1NaU%2F98gBkbHXdOZEwUOp1FlLBp13L0eJZ4hrYd4AuO37NrgdvguwyUqnvoaRq9rDMN6nnMEGOqUBCGfgNkYpoaKFvTg3BvNfm8RACgwn2SiCAJtysximT9Uw%2FsCXkLI0hILb5jFJ3hiTAEGnhjUVJAO%2BpAbxZLi3akE9g25zbvx%2BzaSzD5Bt921Nnn9wnsJslTZ1LQPN3Eq9BLZQF7hCq%2BIElPe1PC6Icg6rkG0vYwm1rj1i26MC%2FZD3hvogF0BCMKYNhw9M%2BkfYPjIY04cBeEfhoe9yxv5TumInnd7w&X-Amz-Signature=7dbcd7d1b0f56c52f9f156239f46e8c96fe8908bfac6e41837a5718cdc811e99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3K4ZAW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQVS%2FyK19ej22k1HLkTXOkSnJe%2B4LWdaCXPLket4IjeAIgXiVpiHpL31q4yP7H4PpxA6CNof9lAfY76XYtHlLkZSYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIX9vgEpxHUy2TfRTircA0hHyHpDHJZlC4o0p6pfqAnC45VpwjA6n7M2aUX9cv1Mb1HuW6%2B5y0MB8Bod%2BXa5LueHrvMuTU%2FDpVwOBOMhChk2ePWzG6W8Jw7YWnPBnRImLGpz%2Bcu15Yr72rCA1it3kier%2FqlGiEpfvNpu4KJ2a%2F3cHGBX1VcNr%2FNlfC0PnB2CF3JC2mXQXat676jvjzuOTDPrHEprE4ifCr9AFQBOHmAuzfBN22b8G37uKAnWb2GQ9XR3c4p4MSJE0sWKE3c0AdB8NWlKyYbkLrjFaO3PDEyjGcpY3HJxJXiN02MxM2KbswfqtAmmZQUEWtW0v1vK3iHt5leHiDjISFddiyfH9bbghl4sK2WLlPiAyw8e%2F0VXTub%2F1ceIbc7qqvTHkGLbcCzcgEy%2Bs4quw0Qa4XFPEg7hovlkHKpNbB1moCuKWedorwHSz%2Fo2koXdCxvl8m%2B%2FE4W0OcHN4natcPSA2300g7Herij3iWaK32fqov%2FTxVP6ebEoIP8%2FdPgzQ%2B7ycJ7A1BUP%2FJSIdtpLzZO9c570qqRRn2PxL3zNFlOuXUSz63UeCHlLUnI5dLkD8iU1NaU%2F98gBkbHXdOZEwUOp1FlLBp13L0eJZ4hrYd4AuO37NrgdvguwyUqnvoaRq9rDMN6nnMEGOqUBCGfgNkYpoaKFvTg3BvNfm8RACgwn2SiCAJtysximT9Uw%2FsCXkLI0hILb5jFJ3hiTAEGnhjUVJAO%2BpAbxZLi3akE9g25zbvx%2BzaSzD5Bt921Nnn9wnsJslTZ1LQPN3Eq9BLZQF7hCq%2BIElPe1PC6Icg6rkG0vYwm1rj1i26MC%2FZD3hvogF0BCMKYNhw9M%2BkfYPjIY04cBeEfhoe9yxv5TumInnd7w&X-Amz-Signature=c45c082289d7357311ab83e7c7a49cc6c3a8c62e819980cf09582945edf19791&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3K4ZAW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQVS%2FyK19ej22k1HLkTXOkSnJe%2B4LWdaCXPLket4IjeAIgXiVpiHpL31q4yP7H4PpxA6CNof9lAfY76XYtHlLkZSYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIX9vgEpxHUy2TfRTircA0hHyHpDHJZlC4o0p6pfqAnC45VpwjA6n7M2aUX9cv1Mb1HuW6%2B5y0MB8Bod%2BXa5LueHrvMuTU%2FDpVwOBOMhChk2ePWzG6W8Jw7YWnPBnRImLGpz%2Bcu15Yr72rCA1it3kier%2FqlGiEpfvNpu4KJ2a%2F3cHGBX1VcNr%2FNlfC0PnB2CF3JC2mXQXat676jvjzuOTDPrHEprE4ifCr9AFQBOHmAuzfBN22b8G37uKAnWb2GQ9XR3c4p4MSJE0sWKE3c0AdB8NWlKyYbkLrjFaO3PDEyjGcpY3HJxJXiN02MxM2KbswfqtAmmZQUEWtW0v1vK3iHt5leHiDjISFddiyfH9bbghl4sK2WLlPiAyw8e%2F0VXTub%2F1ceIbc7qqvTHkGLbcCzcgEy%2Bs4quw0Qa4XFPEg7hovlkHKpNbB1moCuKWedorwHSz%2Fo2koXdCxvl8m%2B%2FE4W0OcHN4natcPSA2300g7Herij3iWaK32fqov%2FTxVP6ebEoIP8%2FdPgzQ%2B7ycJ7A1BUP%2FJSIdtpLzZO9c570qqRRn2PxL3zNFlOuXUSz63UeCHlLUnI5dLkD8iU1NaU%2F98gBkbHXdOZEwUOp1FlLBp13L0eJZ4hrYd4AuO37NrgdvguwyUqnvoaRq9rDMN6nnMEGOqUBCGfgNkYpoaKFvTg3BvNfm8RACgwn2SiCAJtysximT9Uw%2FsCXkLI0hILb5jFJ3hiTAEGnhjUVJAO%2BpAbxZLi3akE9g25zbvx%2BzaSzD5Bt921Nnn9wnsJslTZ1LQPN3Eq9BLZQF7hCq%2BIElPe1PC6Icg6rkG0vYwm1rj1i26MC%2FZD3hvogF0BCMKYNhw9M%2BkfYPjIY04cBeEfhoe9yxv5TumInnd7w&X-Amz-Signature=661c203f1cc8eed986a4e67db467d6fed5b8c3b8ec1b7d751ac4ea534fc77e02&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3K4ZAW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQVS%2FyK19ej22k1HLkTXOkSnJe%2B4LWdaCXPLket4IjeAIgXiVpiHpL31q4yP7H4PpxA6CNof9lAfY76XYtHlLkZSYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIX9vgEpxHUy2TfRTircA0hHyHpDHJZlC4o0p6pfqAnC45VpwjA6n7M2aUX9cv1Mb1HuW6%2B5y0MB8Bod%2BXa5LueHrvMuTU%2FDpVwOBOMhChk2ePWzG6W8Jw7YWnPBnRImLGpz%2Bcu15Yr72rCA1it3kier%2FqlGiEpfvNpu4KJ2a%2F3cHGBX1VcNr%2FNlfC0PnB2CF3JC2mXQXat676jvjzuOTDPrHEprE4ifCr9AFQBOHmAuzfBN22b8G37uKAnWb2GQ9XR3c4p4MSJE0sWKE3c0AdB8NWlKyYbkLrjFaO3PDEyjGcpY3HJxJXiN02MxM2KbswfqtAmmZQUEWtW0v1vK3iHt5leHiDjISFddiyfH9bbghl4sK2WLlPiAyw8e%2F0VXTub%2F1ceIbc7qqvTHkGLbcCzcgEy%2Bs4quw0Qa4XFPEg7hovlkHKpNbB1moCuKWedorwHSz%2Fo2koXdCxvl8m%2B%2FE4W0OcHN4natcPSA2300g7Herij3iWaK32fqov%2FTxVP6ebEoIP8%2FdPgzQ%2B7ycJ7A1BUP%2FJSIdtpLzZO9c570qqRRn2PxL3zNFlOuXUSz63UeCHlLUnI5dLkD8iU1NaU%2F98gBkbHXdOZEwUOp1FlLBp13L0eJZ4hrYd4AuO37NrgdvguwyUqnvoaRq9rDMN6nnMEGOqUBCGfgNkYpoaKFvTg3BvNfm8RACgwn2SiCAJtysximT9Uw%2FsCXkLI0hILb5jFJ3hiTAEGnhjUVJAO%2BpAbxZLi3akE9g25zbvx%2BzaSzD5Bt921Nnn9wnsJslTZ1LQPN3Eq9BLZQF7hCq%2BIElPe1PC6Icg6rkG0vYwm1rj1i26MC%2FZD3hvogF0BCMKYNhw9M%2BkfYPjIY04cBeEfhoe9yxv5TumInnd7w&X-Amz-Signature=b21599e7759995bde1e048788454ea7aef6c5df1c94bb26dee96be1dd5185930&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3K4ZAW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQVS%2FyK19ej22k1HLkTXOkSnJe%2B4LWdaCXPLket4IjeAIgXiVpiHpL31q4yP7H4PpxA6CNof9lAfY76XYtHlLkZSYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIX9vgEpxHUy2TfRTircA0hHyHpDHJZlC4o0p6pfqAnC45VpwjA6n7M2aUX9cv1Mb1HuW6%2B5y0MB8Bod%2BXa5LueHrvMuTU%2FDpVwOBOMhChk2ePWzG6W8Jw7YWnPBnRImLGpz%2Bcu15Yr72rCA1it3kier%2FqlGiEpfvNpu4KJ2a%2F3cHGBX1VcNr%2FNlfC0PnB2CF3JC2mXQXat676jvjzuOTDPrHEprE4ifCr9AFQBOHmAuzfBN22b8G37uKAnWb2GQ9XR3c4p4MSJE0sWKE3c0AdB8NWlKyYbkLrjFaO3PDEyjGcpY3HJxJXiN02MxM2KbswfqtAmmZQUEWtW0v1vK3iHt5leHiDjISFddiyfH9bbghl4sK2WLlPiAyw8e%2F0VXTub%2F1ceIbc7qqvTHkGLbcCzcgEy%2Bs4quw0Qa4XFPEg7hovlkHKpNbB1moCuKWedorwHSz%2Fo2koXdCxvl8m%2B%2FE4W0OcHN4natcPSA2300g7Herij3iWaK32fqov%2FTxVP6ebEoIP8%2FdPgzQ%2B7ycJ7A1BUP%2FJSIdtpLzZO9c570qqRRn2PxL3zNFlOuXUSz63UeCHlLUnI5dLkD8iU1NaU%2F98gBkbHXdOZEwUOp1FlLBp13L0eJZ4hrYd4AuO37NrgdvguwyUqnvoaRq9rDMN6nnMEGOqUBCGfgNkYpoaKFvTg3BvNfm8RACgwn2SiCAJtysximT9Uw%2FsCXkLI0hILb5jFJ3hiTAEGnhjUVJAO%2BpAbxZLi3akE9g25zbvx%2BzaSzD5Bt921Nnn9wnsJslTZ1LQPN3Eq9BLZQF7hCq%2BIElPe1PC6Icg6rkG0vYwm1rj1i26MC%2FZD3hvogF0BCMKYNhw9M%2BkfYPjIY04cBeEfhoe9yxv5TumInnd7w&X-Amz-Signature=553bfce1a8e8b95dd4c253831d22b4dd0561d648771d0b130268926fe1c893a7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3K4ZAW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQVS%2FyK19ej22k1HLkTXOkSnJe%2B4LWdaCXPLket4IjeAIgXiVpiHpL31q4yP7H4PpxA6CNof9lAfY76XYtHlLkZSYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIX9vgEpxHUy2TfRTircA0hHyHpDHJZlC4o0p6pfqAnC45VpwjA6n7M2aUX9cv1Mb1HuW6%2B5y0MB8Bod%2BXa5LueHrvMuTU%2FDpVwOBOMhChk2ePWzG6W8Jw7YWnPBnRImLGpz%2Bcu15Yr72rCA1it3kier%2FqlGiEpfvNpu4KJ2a%2F3cHGBX1VcNr%2FNlfC0PnB2CF3JC2mXQXat676jvjzuOTDPrHEprE4ifCr9AFQBOHmAuzfBN22b8G37uKAnWb2GQ9XR3c4p4MSJE0sWKE3c0AdB8NWlKyYbkLrjFaO3PDEyjGcpY3HJxJXiN02MxM2KbswfqtAmmZQUEWtW0v1vK3iHt5leHiDjISFddiyfH9bbghl4sK2WLlPiAyw8e%2F0VXTub%2F1ceIbc7qqvTHkGLbcCzcgEy%2Bs4quw0Qa4XFPEg7hovlkHKpNbB1moCuKWedorwHSz%2Fo2koXdCxvl8m%2B%2FE4W0OcHN4natcPSA2300g7Herij3iWaK32fqov%2FTxVP6ebEoIP8%2FdPgzQ%2B7ycJ7A1BUP%2FJSIdtpLzZO9c570qqRRn2PxL3zNFlOuXUSz63UeCHlLUnI5dLkD8iU1NaU%2F98gBkbHXdOZEwUOp1FlLBp13L0eJZ4hrYd4AuO37NrgdvguwyUqnvoaRq9rDMN6nnMEGOqUBCGfgNkYpoaKFvTg3BvNfm8RACgwn2SiCAJtysximT9Uw%2FsCXkLI0hILb5jFJ3hiTAEGnhjUVJAO%2BpAbxZLi3akE9g25zbvx%2BzaSzD5Bt921Nnn9wnsJslTZ1LQPN3Eq9BLZQF7hCq%2BIElPe1PC6Icg6rkG0vYwm1rj1i26MC%2FZD3hvogF0BCMKYNhw9M%2BkfYPjIY04cBeEfhoe9yxv5TumInnd7w&X-Amz-Signature=8a1e3c079cc818a37836cd9b1d653d383f61ee07b2acd71b40211b5eae295855&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3K4ZAW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQVS%2FyK19ej22k1HLkTXOkSnJe%2B4LWdaCXPLket4IjeAIgXiVpiHpL31q4yP7H4PpxA6CNof9lAfY76XYtHlLkZSYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIX9vgEpxHUy2TfRTircA0hHyHpDHJZlC4o0p6pfqAnC45VpwjA6n7M2aUX9cv1Mb1HuW6%2B5y0MB8Bod%2BXa5LueHrvMuTU%2FDpVwOBOMhChk2ePWzG6W8Jw7YWnPBnRImLGpz%2Bcu15Yr72rCA1it3kier%2FqlGiEpfvNpu4KJ2a%2F3cHGBX1VcNr%2FNlfC0PnB2CF3JC2mXQXat676jvjzuOTDPrHEprE4ifCr9AFQBOHmAuzfBN22b8G37uKAnWb2GQ9XR3c4p4MSJE0sWKE3c0AdB8NWlKyYbkLrjFaO3PDEyjGcpY3HJxJXiN02MxM2KbswfqtAmmZQUEWtW0v1vK3iHt5leHiDjISFddiyfH9bbghl4sK2WLlPiAyw8e%2F0VXTub%2F1ceIbc7qqvTHkGLbcCzcgEy%2Bs4quw0Qa4XFPEg7hovlkHKpNbB1moCuKWedorwHSz%2Fo2koXdCxvl8m%2B%2FE4W0OcHN4natcPSA2300g7Herij3iWaK32fqov%2FTxVP6ebEoIP8%2FdPgzQ%2B7ycJ7A1BUP%2FJSIdtpLzZO9c570qqRRn2PxL3zNFlOuXUSz63UeCHlLUnI5dLkD8iU1NaU%2F98gBkbHXdOZEwUOp1FlLBp13L0eJZ4hrYd4AuO37NrgdvguwyUqnvoaRq9rDMN6nnMEGOqUBCGfgNkYpoaKFvTg3BvNfm8RACgwn2SiCAJtysximT9Uw%2FsCXkLI0hILb5jFJ3hiTAEGnhjUVJAO%2BpAbxZLi3akE9g25zbvx%2BzaSzD5Bt921Nnn9wnsJslTZ1LQPN3Eq9BLZQF7hCq%2BIElPe1PC6Icg6rkG0vYwm1rj1i26MC%2FZD3hvogF0BCMKYNhw9M%2BkfYPjIY04cBeEfhoe9yxv5TumInnd7w&X-Amz-Signature=bb51a215d1f561374b07ff9e622fc31df0f8306b7d75231ce958f48c86133ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
