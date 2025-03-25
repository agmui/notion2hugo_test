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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JPCHWO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnPXhVSWFHtp1ze39lqv%2B47R8d59zMozocq6y88v3PDAiEAyF9QwqlNA9TJ78xyNWLZgjjjUz%2BoIkVUBqmZ0D8Snu8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKOekcNWTWAmM2J8lyrcA3p0SVpUt33IXhWBfhcgdGjuR%2FEYhA%2B8Cnq%2BLltUz63CJHtx7dlOSrSZk7qutXNVi7U3wSiFX0HY3UmbYA2a492g4tJ0OotHhuG2WEmO%2Fv%2FhLFq4oCuHy0XGtkNNalWDGVHCSnFjWRt5LCwi4QBArINKzJIBE%2B8rXjtW1I2HWbqKhWVVG2E%2Btvtyikm71adHrM0W2MXKPQcgGZB9OiZ3D9xPMWLgoPRbcS8%2BzM9tPm1W%2FsjaPAdoZ1KYdr62DaNY6OafS9qWUvrELbXdznKAoT%2FzpUKIPhas0YZrL8jALMISblmX%2BfcY2GiFrZtn0adlJb%2BEjpw2nNetqoNtOUNdOPoswTPM1RfrfJYlFe%2Bw1iUc3txFTIPhZCqotunedOHZoOFQhpDhHUP2aCU4F%2BZw9ZQ3KU%2BUUBG2XxSCpN6Hh93vda3whnse35qLvyX%2BvcYXWlF5FQXZpJNSWxYHDHsCIQrUirE1gTp8XG8yYJeIXOUXbBnkaBSqfyR%2FYrf0twXk%2Bm2mCjlmOD5t8aWIJwuE1ASaKoq6JZtsyOdoNGOKmaHfVFrtSylvzOTB%2Bf5lwg46QmP4mhFrcFvofblsdMEfaLnp66JfQII0DiDYCwkfXzrTpFMkPfuVdGy1OxabML%2BKir8GOqUBF0ji0yPMol7Vxr2bC6Z%2F%2Bzv2TH331MqvsMFE%2FvxzgoHEuTaI2N1w4LxmjNFNqcQqVLu%2BKGJQO8IGalaJim9INYFEMXprKllXrQH5MRYwuUYv1uMQDhZPE4N6UbyYSXMfRCKjBEPlGUi8NDLV4pN0vW66qz80sAHrniO5C8tiPsetQglY1C9AhCZqU0zA0KqY2X9%2F5Wlki%2FPYOl%2FO%2Bny0%2FTDiuVbL&X-Amz-Signature=fbe606c078d2324911cbf8e1257fcfb3097586c816fe2eb64ad27a43e631f1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JPCHWO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnPXhVSWFHtp1ze39lqv%2B47R8d59zMozocq6y88v3PDAiEAyF9QwqlNA9TJ78xyNWLZgjjjUz%2BoIkVUBqmZ0D8Snu8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKOekcNWTWAmM2J8lyrcA3p0SVpUt33IXhWBfhcgdGjuR%2FEYhA%2B8Cnq%2BLltUz63CJHtx7dlOSrSZk7qutXNVi7U3wSiFX0HY3UmbYA2a492g4tJ0OotHhuG2WEmO%2Fv%2FhLFq4oCuHy0XGtkNNalWDGVHCSnFjWRt5LCwi4QBArINKzJIBE%2B8rXjtW1I2HWbqKhWVVG2E%2Btvtyikm71adHrM0W2MXKPQcgGZB9OiZ3D9xPMWLgoPRbcS8%2BzM9tPm1W%2FsjaPAdoZ1KYdr62DaNY6OafS9qWUvrELbXdznKAoT%2FzpUKIPhas0YZrL8jALMISblmX%2BfcY2GiFrZtn0adlJb%2BEjpw2nNetqoNtOUNdOPoswTPM1RfrfJYlFe%2Bw1iUc3txFTIPhZCqotunedOHZoOFQhpDhHUP2aCU4F%2BZw9ZQ3KU%2BUUBG2XxSCpN6Hh93vda3whnse35qLvyX%2BvcYXWlF5FQXZpJNSWxYHDHsCIQrUirE1gTp8XG8yYJeIXOUXbBnkaBSqfyR%2FYrf0twXk%2Bm2mCjlmOD5t8aWIJwuE1ASaKoq6JZtsyOdoNGOKmaHfVFrtSylvzOTB%2Bf5lwg46QmP4mhFrcFvofblsdMEfaLnp66JfQII0DiDYCwkfXzrTpFMkPfuVdGy1OxabML%2BKir8GOqUBF0ji0yPMol7Vxr2bC6Z%2F%2Bzv2TH331MqvsMFE%2FvxzgoHEuTaI2N1w4LxmjNFNqcQqVLu%2BKGJQO8IGalaJim9INYFEMXprKllXrQH5MRYwuUYv1uMQDhZPE4N6UbyYSXMfRCKjBEPlGUi8NDLV4pN0vW66qz80sAHrniO5C8tiPsetQglY1C9AhCZqU0zA0KqY2X9%2F5Wlki%2FPYOl%2FO%2Bny0%2FTDiuVbL&X-Amz-Signature=e279e58915d3588d82c0015137fbda61d6a12e75a997f7e478b258618f696ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JPCHWO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnPXhVSWFHtp1ze39lqv%2B47R8d59zMozocq6y88v3PDAiEAyF9QwqlNA9TJ78xyNWLZgjjjUz%2BoIkVUBqmZ0D8Snu8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKOekcNWTWAmM2J8lyrcA3p0SVpUt33IXhWBfhcgdGjuR%2FEYhA%2B8Cnq%2BLltUz63CJHtx7dlOSrSZk7qutXNVi7U3wSiFX0HY3UmbYA2a492g4tJ0OotHhuG2WEmO%2Fv%2FhLFq4oCuHy0XGtkNNalWDGVHCSnFjWRt5LCwi4QBArINKzJIBE%2B8rXjtW1I2HWbqKhWVVG2E%2Btvtyikm71adHrM0W2MXKPQcgGZB9OiZ3D9xPMWLgoPRbcS8%2BzM9tPm1W%2FsjaPAdoZ1KYdr62DaNY6OafS9qWUvrELbXdznKAoT%2FzpUKIPhas0YZrL8jALMISblmX%2BfcY2GiFrZtn0adlJb%2BEjpw2nNetqoNtOUNdOPoswTPM1RfrfJYlFe%2Bw1iUc3txFTIPhZCqotunedOHZoOFQhpDhHUP2aCU4F%2BZw9ZQ3KU%2BUUBG2XxSCpN6Hh93vda3whnse35qLvyX%2BvcYXWlF5FQXZpJNSWxYHDHsCIQrUirE1gTp8XG8yYJeIXOUXbBnkaBSqfyR%2FYrf0twXk%2Bm2mCjlmOD5t8aWIJwuE1ASaKoq6JZtsyOdoNGOKmaHfVFrtSylvzOTB%2Bf5lwg46QmP4mhFrcFvofblsdMEfaLnp66JfQII0DiDYCwkfXzrTpFMkPfuVdGy1OxabML%2BKir8GOqUBF0ji0yPMol7Vxr2bC6Z%2F%2Bzv2TH331MqvsMFE%2FvxzgoHEuTaI2N1w4LxmjNFNqcQqVLu%2BKGJQO8IGalaJim9INYFEMXprKllXrQH5MRYwuUYv1uMQDhZPE4N6UbyYSXMfRCKjBEPlGUi8NDLV4pN0vW66qz80sAHrniO5C8tiPsetQglY1C9AhCZqU0zA0KqY2X9%2F5Wlki%2FPYOl%2FO%2Bny0%2FTDiuVbL&X-Amz-Signature=94c1c07527a6b92f1a75fb8089f910bd655728cf2c9c0d0e61d829e972bb8973&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JPCHWO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnPXhVSWFHtp1ze39lqv%2B47R8d59zMozocq6y88v3PDAiEAyF9QwqlNA9TJ78xyNWLZgjjjUz%2BoIkVUBqmZ0D8Snu8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKOekcNWTWAmM2J8lyrcA3p0SVpUt33IXhWBfhcgdGjuR%2FEYhA%2B8Cnq%2BLltUz63CJHtx7dlOSrSZk7qutXNVi7U3wSiFX0HY3UmbYA2a492g4tJ0OotHhuG2WEmO%2Fv%2FhLFq4oCuHy0XGtkNNalWDGVHCSnFjWRt5LCwi4QBArINKzJIBE%2B8rXjtW1I2HWbqKhWVVG2E%2Btvtyikm71adHrM0W2MXKPQcgGZB9OiZ3D9xPMWLgoPRbcS8%2BzM9tPm1W%2FsjaPAdoZ1KYdr62DaNY6OafS9qWUvrELbXdznKAoT%2FzpUKIPhas0YZrL8jALMISblmX%2BfcY2GiFrZtn0adlJb%2BEjpw2nNetqoNtOUNdOPoswTPM1RfrfJYlFe%2Bw1iUc3txFTIPhZCqotunedOHZoOFQhpDhHUP2aCU4F%2BZw9ZQ3KU%2BUUBG2XxSCpN6Hh93vda3whnse35qLvyX%2BvcYXWlF5FQXZpJNSWxYHDHsCIQrUirE1gTp8XG8yYJeIXOUXbBnkaBSqfyR%2FYrf0twXk%2Bm2mCjlmOD5t8aWIJwuE1ASaKoq6JZtsyOdoNGOKmaHfVFrtSylvzOTB%2Bf5lwg46QmP4mhFrcFvofblsdMEfaLnp66JfQII0DiDYCwkfXzrTpFMkPfuVdGy1OxabML%2BKir8GOqUBF0ji0yPMol7Vxr2bC6Z%2F%2Bzv2TH331MqvsMFE%2FvxzgoHEuTaI2N1w4LxmjNFNqcQqVLu%2BKGJQO8IGalaJim9INYFEMXprKllXrQH5MRYwuUYv1uMQDhZPE4N6UbyYSXMfRCKjBEPlGUi8NDLV4pN0vW66qz80sAHrniO5C8tiPsetQglY1C9AhCZqU0zA0KqY2X9%2F5Wlki%2FPYOl%2FO%2Bny0%2FTDiuVbL&X-Amz-Signature=1b21b6b71e8e5bd61ac48281b059e53b1dab48b4c018b078029ba2b9b8ac059f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JPCHWO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnPXhVSWFHtp1ze39lqv%2B47R8d59zMozocq6y88v3PDAiEAyF9QwqlNA9TJ78xyNWLZgjjjUz%2BoIkVUBqmZ0D8Snu8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKOekcNWTWAmM2J8lyrcA3p0SVpUt33IXhWBfhcgdGjuR%2FEYhA%2B8Cnq%2BLltUz63CJHtx7dlOSrSZk7qutXNVi7U3wSiFX0HY3UmbYA2a492g4tJ0OotHhuG2WEmO%2Fv%2FhLFq4oCuHy0XGtkNNalWDGVHCSnFjWRt5LCwi4QBArINKzJIBE%2B8rXjtW1I2HWbqKhWVVG2E%2Btvtyikm71adHrM0W2MXKPQcgGZB9OiZ3D9xPMWLgoPRbcS8%2BzM9tPm1W%2FsjaPAdoZ1KYdr62DaNY6OafS9qWUvrELbXdznKAoT%2FzpUKIPhas0YZrL8jALMISblmX%2BfcY2GiFrZtn0adlJb%2BEjpw2nNetqoNtOUNdOPoswTPM1RfrfJYlFe%2Bw1iUc3txFTIPhZCqotunedOHZoOFQhpDhHUP2aCU4F%2BZw9ZQ3KU%2BUUBG2XxSCpN6Hh93vda3whnse35qLvyX%2BvcYXWlF5FQXZpJNSWxYHDHsCIQrUirE1gTp8XG8yYJeIXOUXbBnkaBSqfyR%2FYrf0twXk%2Bm2mCjlmOD5t8aWIJwuE1ASaKoq6JZtsyOdoNGOKmaHfVFrtSylvzOTB%2Bf5lwg46QmP4mhFrcFvofblsdMEfaLnp66JfQII0DiDYCwkfXzrTpFMkPfuVdGy1OxabML%2BKir8GOqUBF0ji0yPMol7Vxr2bC6Z%2F%2Bzv2TH331MqvsMFE%2FvxzgoHEuTaI2N1w4LxmjNFNqcQqVLu%2BKGJQO8IGalaJim9INYFEMXprKllXrQH5MRYwuUYv1uMQDhZPE4N6UbyYSXMfRCKjBEPlGUi8NDLV4pN0vW66qz80sAHrniO5C8tiPsetQglY1C9AhCZqU0zA0KqY2X9%2F5Wlki%2FPYOl%2FO%2Bny0%2FTDiuVbL&X-Amz-Signature=d04eaea16955e8a42bd81c55c8802e1b9435451679ff1392044c3f6ffe32c750&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JPCHWO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnPXhVSWFHtp1ze39lqv%2B47R8d59zMozocq6y88v3PDAiEAyF9QwqlNA9TJ78xyNWLZgjjjUz%2BoIkVUBqmZ0D8Snu8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKOekcNWTWAmM2J8lyrcA3p0SVpUt33IXhWBfhcgdGjuR%2FEYhA%2B8Cnq%2BLltUz63CJHtx7dlOSrSZk7qutXNVi7U3wSiFX0HY3UmbYA2a492g4tJ0OotHhuG2WEmO%2Fv%2FhLFq4oCuHy0XGtkNNalWDGVHCSnFjWRt5LCwi4QBArINKzJIBE%2B8rXjtW1I2HWbqKhWVVG2E%2Btvtyikm71adHrM0W2MXKPQcgGZB9OiZ3D9xPMWLgoPRbcS8%2BzM9tPm1W%2FsjaPAdoZ1KYdr62DaNY6OafS9qWUvrELbXdznKAoT%2FzpUKIPhas0YZrL8jALMISblmX%2BfcY2GiFrZtn0adlJb%2BEjpw2nNetqoNtOUNdOPoswTPM1RfrfJYlFe%2Bw1iUc3txFTIPhZCqotunedOHZoOFQhpDhHUP2aCU4F%2BZw9ZQ3KU%2BUUBG2XxSCpN6Hh93vda3whnse35qLvyX%2BvcYXWlF5FQXZpJNSWxYHDHsCIQrUirE1gTp8XG8yYJeIXOUXbBnkaBSqfyR%2FYrf0twXk%2Bm2mCjlmOD5t8aWIJwuE1ASaKoq6JZtsyOdoNGOKmaHfVFrtSylvzOTB%2Bf5lwg46QmP4mhFrcFvofblsdMEfaLnp66JfQII0DiDYCwkfXzrTpFMkPfuVdGy1OxabML%2BKir8GOqUBF0ji0yPMol7Vxr2bC6Z%2F%2Bzv2TH331MqvsMFE%2FvxzgoHEuTaI2N1w4LxmjNFNqcQqVLu%2BKGJQO8IGalaJim9INYFEMXprKllXrQH5MRYwuUYv1uMQDhZPE4N6UbyYSXMfRCKjBEPlGUi8NDLV4pN0vW66qz80sAHrniO5C8tiPsetQglY1C9AhCZqU0zA0KqY2X9%2F5Wlki%2FPYOl%2FO%2Bny0%2FTDiuVbL&X-Amz-Signature=1194b6f4f5a0d15772564bfca3e4b076dbbd95f9b9168ab0b2896646105eab99&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JPCHWO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnPXhVSWFHtp1ze39lqv%2B47R8d59zMozocq6y88v3PDAiEAyF9QwqlNA9TJ78xyNWLZgjjjUz%2BoIkVUBqmZ0D8Snu8q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKOekcNWTWAmM2J8lyrcA3p0SVpUt33IXhWBfhcgdGjuR%2FEYhA%2B8Cnq%2BLltUz63CJHtx7dlOSrSZk7qutXNVi7U3wSiFX0HY3UmbYA2a492g4tJ0OotHhuG2WEmO%2Fv%2FhLFq4oCuHy0XGtkNNalWDGVHCSnFjWRt5LCwi4QBArINKzJIBE%2B8rXjtW1I2HWbqKhWVVG2E%2Btvtyikm71adHrM0W2MXKPQcgGZB9OiZ3D9xPMWLgoPRbcS8%2BzM9tPm1W%2FsjaPAdoZ1KYdr62DaNY6OafS9qWUvrELbXdznKAoT%2FzpUKIPhas0YZrL8jALMISblmX%2BfcY2GiFrZtn0adlJb%2BEjpw2nNetqoNtOUNdOPoswTPM1RfrfJYlFe%2Bw1iUc3txFTIPhZCqotunedOHZoOFQhpDhHUP2aCU4F%2BZw9ZQ3KU%2BUUBG2XxSCpN6Hh93vda3whnse35qLvyX%2BvcYXWlF5FQXZpJNSWxYHDHsCIQrUirE1gTp8XG8yYJeIXOUXbBnkaBSqfyR%2FYrf0twXk%2Bm2mCjlmOD5t8aWIJwuE1ASaKoq6JZtsyOdoNGOKmaHfVFrtSylvzOTB%2Bf5lwg46QmP4mhFrcFvofblsdMEfaLnp66JfQII0DiDYCwkfXzrTpFMkPfuVdGy1OxabML%2BKir8GOqUBF0ji0yPMol7Vxr2bC6Z%2F%2Bzv2TH331MqvsMFE%2FvxzgoHEuTaI2N1w4LxmjNFNqcQqVLu%2BKGJQO8IGalaJim9INYFEMXprKllXrQH5MRYwuUYv1uMQDhZPE4N6UbyYSXMfRCKjBEPlGUi8NDLV4pN0vW66qz80sAHrniO5C8tiPsetQglY1C9AhCZqU0zA0KqY2X9%2F5Wlki%2FPYOl%2FO%2Bny0%2FTDiuVbL&X-Amz-Signature=4db7ad3a8812b6015b2c32ca174144d43db3697883d60dda4a01cbb241363264&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
