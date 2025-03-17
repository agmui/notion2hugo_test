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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPY7LG2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7zncM%2F6vIlNiQ4ONdjs%2B%2BmYVYON7fr%2Bt4xerYHSymVAiAlgWWK%2B%2BSgnWSwTT2MZiSikYyPQqAN52INn0BsYdO%2Bjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBqzUx8uWCE%2FCPS2VKtwDWaMsspxnXXslTgKW%2F94JBBegfExfxz6xsFr2WD8ZUnMpafFTwa1cQ2MxRKu29TwiBlJttSokBpBFpf0n%2FCA9AEnURdyGQUluCz%2BmUERlZkLkVlWD1vHIx%2FnTrNH8BH9U0NThyG2bnVQvi6A40x0fjmxozkhN0lh03zjaNzEngTeWAtM53Ib3kCVNoKvjVHVLVb7BQtsDg1v%2F0DCmEhp%2BzhW2WbuqIJnv2A4aegwUxn2BuzN1GhHHwDNY3aRMg5YOcnBoLBMN%2BaZyp0PAy2oqH8Fd2NKAUwkmPIkdQ%2FdcNYflnSCmeY%2Ff1J55IZ3BPUroQunhVpd%2BluNNkFlZNuIu9FY7Qme9%2Be6Livn6O8uOd%2BQ3xAsFu%2FECOGLvT%2BeXlvSoB57BxceaqeUyhyNGaJi2AEpvHYbLug0%2BPW%2FOxlZzNZXjnlPuHMhux1TBVezFPuasDUw3Y7T0wQFCIVDhxDoAdo%2F0Eqnt74JkqQ0bCSYUe%2BjUD%2BC%2BdN0Bg9h4y0dXG4OwRqWjNNtKNCN6rRekBW%2FpDh81dnnuyrSlCzECySBkDOKAbCI0uY3mgeH%2B2piA1VJh52BDp4gOtPacTxLuvgpN2kUM8HNZoUARUXGHd2VH83ZCyJ2E19ScKEOgpcEw%2BJHfvgY6pgFI0Si%2BQ5CfALJLMRoE1DRBPt3DQSrwatwriXCmS2gBjke3YppGsRvjgrGYB0qpmbvg9dudcNtGYw9UMev2hU7NuSQC0hyqwtM8josJpoFTFdjfw8Kz9vFmaETBbr6BplvJCD3WK%2BU73%2FfU3BkuAN5YtTnjy2JeXnRtxKzegG%2BzZryY%2FdLSx2HxyULS3RJJJJ0Ye53Wnv33mIWA066f9rYc1AhYrsbx&X-Amz-Signature=4309a40ad2d07b00cc07b067a06a6418fbd222bbd4b02f1650f5657c3253772a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPY7LG2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7zncM%2F6vIlNiQ4ONdjs%2B%2BmYVYON7fr%2Bt4xerYHSymVAiAlgWWK%2B%2BSgnWSwTT2MZiSikYyPQqAN52INn0BsYdO%2Bjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBqzUx8uWCE%2FCPS2VKtwDWaMsspxnXXslTgKW%2F94JBBegfExfxz6xsFr2WD8ZUnMpafFTwa1cQ2MxRKu29TwiBlJttSokBpBFpf0n%2FCA9AEnURdyGQUluCz%2BmUERlZkLkVlWD1vHIx%2FnTrNH8BH9U0NThyG2bnVQvi6A40x0fjmxozkhN0lh03zjaNzEngTeWAtM53Ib3kCVNoKvjVHVLVb7BQtsDg1v%2F0DCmEhp%2BzhW2WbuqIJnv2A4aegwUxn2BuzN1GhHHwDNY3aRMg5YOcnBoLBMN%2BaZyp0PAy2oqH8Fd2NKAUwkmPIkdQ%2FdcNYflnSCmeY%2Ff1J55IZ3BPUroQunhVpd%2BluNNkFlZNuIu9FY7Qme9%2Be6Livn6O8uOd%2BQ3xAsFu%2FECOGLvT%2BeXlvSoB57BxceaqeUyhyNGaJi2AEpvHYbLug0%2BPW%2FOxlZzNZXjnlPuHMhux1TBVezFPuasDUw3Y7T0wQFCIVDhxDoAdo%2F0Eqnt74JkqQ0bCSYUe%2BjUD%2BC%2BdN0Bg9h4y0dXG4OwRqWjNNtKNCN6rRekBW%2FpDh81dnnuyrSlCzECySBkDOKAbCI0uY3mgeH%2B2piA1VJh52BDp4gOtPacTxLuvgpN2kUM8HNZoUARUXGHd2VH83ZCyJ2E19ScKEOgpcEw%2BJHfvgY6pgFI0Si%2BQ5CfALJLMRoE1DRBPt3DQSrwatwriXCmS2gBjke3YppGsRvjgrGYB0qpmbvg9dudcNtGYw9UMev2hU7NuSQC0hyqwtM8josJpoFTFdjfw8Kz9vFmaETBbr6BplvJCD3WK%2BU73%2FfU3BkuAN5YtTnjy2JeXnRtxKzegG%2BzZryY%2FdLSx2HxyULS3RJJJJ0Ye53Wnv33mIWA066f9rYc1AhYrsbx&X-Amz-Signature=2a6846c705c35766eb419091ced4218e0739ebc6ffdaf748800846327b8d287d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPY7LG2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7zncM%2F6vIlNiQ4ONdjs%2B%2BmYVYON7fr%2Bt4xerYHSymVAiAlgWWK%2B%2BSgnWSwTT2MZiSikYyPQqAN52INn0BsYdO%2Bjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBqzUx8uWCE%2FCPS2VKtwDWaMsspxnXXslTgKW%2F94JBBegfExfxz6xsFr2WD8ZUnMpafFTwa1cQ2MxRKu29TwiBlJttSokBpBFpf0n%2FCA9AEnURdyGQUluCz%2BmUERlZkLkVlWD1vHIx%2FnTrNH8BH9U0NThyG2bnVQvi6A40x0fjmxozkhN0lh03zjaNzEngTeWAtM53Ib3kCVNoKvjVHVLVb7BQtsDg1v%2F0DCmEhp%2BzhW2WbuqIJnv2A4aegwUxn2BuzN1GhHHwDNY3aRMg5YOcnBoLBMN%2BaZyp0PAy2oqH8Fd2NKAUwkmPIkdQ%2FdcNYflnSCmeY%2Ff1J55IZ3BPUroQunhVpd%2BluNNkFlZNuIu9FY7Qme9%2Be6Livn6O8uOd%2BQ3xAsFu%2FECOGLvT%2BeXlvSoB57BxceaqeUyhyNGaJi2AEpvHYbLug0%2BPW%2FOxlZzNZXjnlPuHMhux1TBVezFPuasDUw3Y7T0wQFCIVDhxDoAdo%2F0Eqnt74JkqQ0bCSYUe%2BjUD%2BC%2BdN0Bg9h4y0dXG4OwRqWjNNtKNCN6rRekBW%2FpDh81dnnuyrSlCzECySBkDOKAbCI0uY3mgeH%2B2piA1VJh52BDp4gOtPacTxLuvgpN2kUM8HNZoUARUXGHd2VH83ZCyJ2E19ScKEOgpcEw%2BJHfvgY6pgFI0Si%2BQ5CfALJLMRoE1DRBPt3DQSrwatwriXCmS2gBjke3YppGsRvjgrGYB0qpmbvg9dudcNtGYw9UMev2hU7NuSQC0hyqwtM8josJpoFTFdjfw8Kz9vFmaETBbr6BplvJCD3WK%2BU73%2FfU3BkuAN5YtTnjy2JeXnRtxKzegG%2BzZryY%2FdLSx2HxyULS3RJJJJ0Ye53Wnv33mIWA066f9rYc1AhYrsbx&X-Amz-Signature=fb3b73b7adcf847415b04689298920eefc718716601ea44d433135c5879f53a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPY7LG2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7zncM%2F6vIlNiQ4ONdjs%2B%2BmYVYON7fr%2Bt4xerYHSymVAiAlgWWK%2B%2BSgnWSwTT2MZiSikYyPQqAN52INn0BsYdO%2Bjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBqzUx8uWCE%2FCPS2VKtwDWaMsspxnXXslTgKW%2F94JBBegfExfxz6xsFr2WD8ZUnMpafFTwa1cQ2MxRKu29TwiBlJttSokBpBFpf0n%2FCA9AEnURdyGQUluCz%2BmUERlZkLkVlWD1vHIx%2FnTrNH8BH9U0NThyG2bnVQvi6A40x0fjmxozkhN0lh03zjaNzEngTeWAtM53Ib3kCVNoKvjVHVLVb7BQtsDg1v%2F0DCmEhp%2BzhW2WbuqIJnv2A4aegwUxn2BuzN1GhHHwDNY3aRMg5YOcnBoLBMN%2BaZyp0PAy2oqH8Fd2NKAUwkmPIkdQ%2FdcNYflnSCmeY%2Ff1J55IZ3BPUroQunhVpd%2BluNNkFlZNuIu9FY7Qme9%2Be6Livn6O8uOd%2BQ3xAsFu%2FECOGLvT%2BeXlvSoB57BxceaqeUyhyNGaJi2AEpvHYbLug0%2BPW%2FOxlZzNZXjnlPuHMhux1TBVezFPuasDUw3Y7T0wQFCIVDhxDoAdo%2F0Eqnt74JkqQ0bCSYUe%2BjUD%2BC%2BdN0Bg9h4y0dXG4OwRqWjNNtKNCN6rRekBW%2FpDh81dnnuyrSlCzECySBkDOKAbCI0uY3mgeH%2B2piA1VJh52BDp4gOtPacTxLuvgpN2kUM8HNZoUARUXGHd2VH83ZCyJ2E19ScKEOgpcEw%2BJHfvgY6pgFI0Si%2BQ5CfALJLMRoE1DRBPt3DQSrwatwriXCmS2gBjke3YppGsRvjgrGYB0qpmbvg9dudcNtGYw9UMev2hU7NuSQC0hyqwtM8josJpoFTFdjfw8Kz9vFmaETBbr6BplvJCD3WK%2BU73%2FfU3BkuAN5YtTnjy2JeXnRtxKzegG%2BzZryY%2FdLSx2HxyULS3RJJJJ0Ye53Wnv33mIWA066f9rYc1AhYrsbx&X-Amz-Signature=82cdb92f095906aaeadc86e0f57131162c44ad73ba374aae62bcf5058d4c731a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPY7LG2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7zncM%2F6vIlNiQ4ONdjs%2B%2BmYVYON7fr%2Bt4xerYHSymVAiAlgWWK%2B%2BSgnWSwTT2MZiSikYyPQqAN52INn0BsYdO%2Bjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBqzUx8uWCE%2FCPS2VKtwDWaMsspxnXXslTgKW%2F94JBBegfExfxz6xsFr2WD8ZUnMpafFTwa1cQ2MxRKu29TwiBlJttSokBpBFpf0n%2FCA9AEnURdyGQUluCz%2BmUERlZkLkVlWD1vHIx%2FnTrNH8BH9U0NThyG2bnVQvi6A40x0fjmxozkhN0lh03zjaNzEngTeWAtM53Ib3kCVNoKvjVHVLVb7BQtsDg1v%2F0DCmEhp%2BzhW2WbuqIJnv2A4aegwUxn2BuzN1GhHHwDNY3aRMg5YOcnBoLBMN%2BaZyp0PAy2oqH8Fd2NKAUwkmPIkdQ%2FdcNYflnSCmeY%2Ff1J55IZ3BPUroQunhVpd%2BluNNkFlZNuIu9FY7Qme9%2Be6Livn6O8uOd%2BQ3xAsFu%2FECOGLvT%2BeXlvSoB57BxceaqeUyhyNGaJi2AEpvHYbLug0%2BPW%2FOxlZzNZXjnlPuHMhux1TBVezFPuasDUw3Y7T0wQFCIVDhxDoAdo%2F0Eqnt74JkqQ0bCSYUe%2BjUD%2BC%2BdN0Bg9h4y0dXG4OwRqWjNNtKNCN6rRekBW%2FpDh81dnnuyrSlCzECySBkDOKAbCI0uY3mgeH%2B2piA1VJh52BDp4gOtPacTxLuvgpN2kUM8HNZoUARUXGHd2VH83ZCyJ2E19ScKEOgpcEw%2BJHfvgY6pgFI0Si%2BQ5CfALJLMRoE1DRBPt3DQSrwatwriXCmS2gBjke3YppGsRvjgrGYB0qpmbvg9dudcNtGYw9UMev2hU7NuSQC0hyqwtM8josJpoFTFdjfw8Kz9vFmaETBbr6BplvJCD3WK%2BU73%2FfU3BkuAN5YtTnjy2JeXnRtxKzegG%2BzZryY%2FdLSx2HxyULS3RJJJJ0Ye53Wnv33mIWA066f9rYc1AhYrsbx&X-Amz-Signature=b024035f6be8bdd948c92fac0a9b828087f74b40c581b475cc5f09adab038e13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPY7LG2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7zncM%2F6vIlNiQ4ONdjs%2B%2BmYVYON7fr%2Bt4xerYHSymVAiAlgWWK%2B%2BSgnWSwTT2MZiSikYyPQqAN52INn0BsYdO%2Bjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBqzUx8uWCE%2FCPS2VKtwDWaMsspxnXXslTgKW%2F94JBBegfExfxz6xsFr2WD8ZUnMpafFTwa1cQ2MxRKu29TwiBlJttSokBpBFpf0n%2FCA9AEnURdyGQUluCz%2BmUERlZkLkVlWD1vHIx%2FnTrNH8BH9U0NThyG2bnVQvi6A40x0fjmxozkhN0lh03zjaNzEngTeWAtM53Ib3kCVNoKvjVHVLVb7BQtsDg1v%2F0DCmEhp%2BzhW2WbuqIJnv2A4aegwUxn2BuzN1GhHHwDNY3aRMg5YOcnBoLBMN%2BaZyp0PAy2oqH8Fd2NKAUwkmPIkdQ%2FdcNYflnSCmeY%2Ff1J55IZ3BPUroQunhVpd%2BluNNkFlZNuIu9FY7Qme9%2Be6Livn6O8uOd%2BQ3xAsFu%2FECOGLvT%2BeXlvSoB57BxceaqeUyhyNGaJi2AEpvHYbLug0%2BPW%2FOxlZzNZXjnlPuHMhux1TBVezFPuasDUw3Y7T0wQFCIVDhxDoAdo%2F0Eqnt74JkqQ0bCSYUe%2BjUD%2BC%2BdN0Bg9h4y0dXG4OwRqWjNNtKNCN6rRekBW%2FpDh81dnnuyrSlCzECySBkDOKAbCI0uY3mgeH%2B2piA1VJh52BDp4gOtPacTxLuvgpN2kUM8HNZoUARUXGHd2VH83ZCyJ2E19ScKEOgpcEw%2BJHfvgY6pgFI0Si%2BQ5CfALJLMRoE1DRBPt3DQSrwatwriXCmS2gBjke3YppGsRvjgrGYB0qpmbvg9dudcNtGYw9UMev2hU7NuSQC0hyqwtM8josJpoFTFdjfw8Kz9vFmaETBbr6BplvJCD3WK%2BU73%2FfU3BkuAN5YtTnjy2JeXnRtxKzegG%2BzZryY%2FdLSx2HxyULS3RJJJJ0Ye53Wnv33mIWA066f9rYc1AhYrsbx&X-Amz-Signature=4df162f8d34ed95982b61f8205fc70d5cdc17aafb3b72d038ccde95ecf179327&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPY7LG2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7zncM%2F6vIlNiQ4ONdjs%2B%2BmYVYON7fr%2Bt4xerYHSymVAiAlgWWK%2B%2BSgnWSwTT2MZiSikYyPQqAN52INn0BsYdO%2Bjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMBqzUx8uWCE%2FCPS2VKtwDWaMsspxnXXslTgKW%2F94JBBegfExfxz6xsFr2WD8ZUnMpafFTwa1cQ2MxRKu29TwiBlJttSokBpBFpf0n%2FCA9AEnURdyGQUluCz%2BmUERlZkLkVlWD1vHIx%2FnTrNH8BH9U0NThyG2bnVQvi6A40x0fjmxozkhN0lh03zjaNzEngTeWAtM53Ib3kCVNoKvjVHVLVb7BQtsDg1v%2F0DCmEhp%2BzhW2WbuqIJnv2A4aegwUxn2BuzN1GhHHwDNY3aRMg5YOcnBoLBMN%2BaZyp0PAy2oqH8Fd2NKAUwkmPIkdQ%2FdcNYflnSCmeY%2Ff1J55IZ3BPUroQunhVpd%2BluNNkFlZNuIu9FY7Qme9%2Be6Livn6O8uOd%2BQ3xAsFu%2FECOGLvT%2BeXlvSoB57BxceaqeUyhyNGaJi2AEpvHYbLug0%2BPW%2FOxlZzNZXjnlPuHMhux1TBVezFPuasDUw3Y7T0wQFCIVDhxDoAdo%2F0Eqnt74JkqQ0bCSYUe%2BjUD%2BC%2BdN0Bg9h4y0dXG4OwRqWjNNtKNCN6rRekBW%2FpDh81dnnuyrSlCzECySBkDOKAbCI0uY3mgeH%2B2piA1VJh52BDp4gOtPacTxLuvgpN2kUM8HNZoUARUXGHd2VH83ZCyJ2E19ScKEOgpcEw%2BJHfvgY6pgFI0Si%2BQ5CfALJLMRoE1DRBPt3DQSrwatwriXCmS2gBjke3YppGsRvjgrGYB0qpmbvg9dudcNtGYw9UMev2hU7NuSQC0hyqwtM8josJpoFTFdjfw8Kz9vFmaETBbr6BplvJCD3WK%2BU73%2FfU3BkuAN5YtTnjy2JeXnRtxKzegG%2BzZryY%2FdLSx2HxyULS3RJJJJ0Ye53Wnv33mIWA066f9rYc1AhYrsbx&X-Amz-Signature=fdce88ed0935768730140cb56ebdc148bc2a7c8fadc7ed031666a3477ab68b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
