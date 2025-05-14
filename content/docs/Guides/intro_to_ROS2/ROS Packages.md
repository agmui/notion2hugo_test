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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFB4LZ6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAcLoAQS%2FZtIzILDrZ7ILi8E%2F64ksRYyI55B67IRpQDIAiEA4Sz4P8aFiVCyHiEJgLR%2FaqGKc060S0Jj%2BpB0dS3xiNMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIiCygEtXFbnoFwtSCrcAybHpjWkSxQcS9EeSyZ17VFlIboegNjDm8sL8p7ov7vqf8pEzcH0%2Bf3PboYTP7mQxhVBsbpgd3hgI%2BIA9o7eaJyJZjUDRfnGV%2BR3WjlMi%2Bi50Bk8xyo6D0lL5EBsDFacMmt6zBlD%2FV1Spvd%2FvWYdmwoY5nI%2BfvkzQuc7vlpEa0h4P1Ya8w2OR3hZzXDbvX2sLWCThPAnihYNA2YYmc3kJPAI3QqHB16J2cWBiXDHdFGwmRDVUSUdakXNsJmWnML2ivPQfsL3FK0TXJtnE3KF7H7wNgB%2F9uSE5JnWmkRnPjWGdy3k1NSzOzYTR1hpcVrCxcZXg6U1AUkyEoyRB9wEwwiEIgRpyZTN9ycooCvB31C078WTc1nv2A%2F49fa1RD0amdywzWf7xSDakqhTmKstWx8gWpaEQIFVyVY36h3aV6skcMVO3BMSjImLX1chNoJlucGDhcm4tdTgU8rpRP26bgcuLTlKq1Pw4dTZ6jYN08OW8nNITp8L3lNEWwr2%2FY%2FTdNs%2BYMYJWHgFDsS7lSdbutRAa7sszXPF2Ap%2FYJtK6x2jyu1aAqOI3SwrYJVZq37o3tANPitc8wL9SXhdXJG%2Bdn0Htf5d%2BUxFDwf6pT23mcIpxLiByD9gBEU4R8U4MPfQk8EGOqUBFV%2Ft7dwVrQ8JzKg9%2BChjNK2SwOjGJwDku9FF4%2BicOO%2B%2FnivHdyUyI2xps%2BTy5QfGY%2BALA8BR6nD8wVcYPsja6VlfxE7kgD25S6EZ0KnB7Yi4g4YsbQ9GMMdsxiToJ9yl346z2D7XsKyuJ2NNtwAwUHHFI%2B12NgSCxao4TXmHuNl9l%2Fk2sb2WG1i6Y89eExlDbrTarUWqK4FvTd6u4LFLHyapJ515&X-Amz-Signature=ad71cc2b157a45e2527eefb7aa366d84065da320fff51270b89682bf513acd42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFB4LZ6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAcLoAQS%2FZtIzILDrZ7ILi8E%2F64ksRYyI55B67IRpQDIAiEA4Sz4P8aFiVCyHiEJgLR%2FaqGKc060S0Jj%2BpB0dS3xiNMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIiCygEtXFbnoFwtSCrcAybHpjWkSxQcS9EeSyZ17VFlIboegNjDm8sL8p7ov7vqf8pEzcH0%2Bf3PboYTP7mQxhVBsbpgd3hgI%2BIA9o7eaJyJZjUDRfnGV%2BR3WjlMi%2Bi50Bk8xyo6D0lL5EBsDFacMmt6zBlD%2FV1Spvd%2FvWYdmwoY5nI%2BfvkzQuc7vlpEa0h4P1Ya8w2OR3hZzXDbvX2sLWCThPAnihYNA2YYmc3kJPAI3QqHB16J2cWBiXDHdFGwmRDVUSUdakXNsJmWnML2ivPQfsL3FK0TXJtnE3KF7H7wNgB%2F9uSE5JnWmkRnPjWGdy3k1NSzOzYTR1hpcVrCxcZXg6U1AUkyEoyRB9wEwwiEIgRpyZTN9ycooCvB31C078WTc1nv2A%2F49fa1RD0amdywzWf7xSDakqhTmKstWx8gWpaEQIFVyVY36h3aV6skcMVO3BMSjImLX1chNoJlucGDhcm4tdTgU8rpRP26bgcuLTlKq1Pw4dTZ6jYN08OW8nNITp8L3lNEWwr2%2FY%2FTdNs%2BYMYJWHgFDsS7lSdbutRAa7sszXPF2Ap%2FYJtK6x2jyu1aAqOI3SwrYJVZq37o3tANPitc8wL9SXhdXJG%2Bdn0Htf5d%2BUxFDwf6pT23mcIpxLiByD9gBEU4R8U4MPfQk8EGOqUBFV%2Ft7dwVrQ8JzKg9%2BChjNK2SwOjGJwDku9FF4%2BicOO%2B%2FnivHdyUyI2xps%2BTy5QfGY%2BALA8BR6nD8wVcYPsja6VlfxE7kgD25S6EZ0KnB7Yi4g4YsbQ9GMMdsxiToJ9yl346z2D7XsKyuJ2NNtwAwUHHFI%2B12NgSCxao4TXmHuNl9l%2Fk2sb2WG1i6Y89eExlDbrTarUWqK4FvTd6u4LFLHyapJ515&X-Amz-Signature=362a2adb1cc9b6d22d2d2dec2c5d0c9aeda64d6f4e44102ece485cebfc635e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFB4LZ6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAcLoAQS%2FZtIzILDrZ7ILi8E%2F64ksRYyI55B67IRpQDIAiEA4Sz4P8aFiVCyHiEJgLR%2FaqGKc060S0Jj%2BpB0dS3xiNMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIiCygEtXFbnoFwtSCrcAybHpjWkSxQcS9EeSyZ17VFlIboegNjDm8sL8p7ov7vqf8pEzcH0%2Bf3PboYTP7mQxhVBsbpgd3hgI%2BIA9o7eaJyJZjUDRfnGV%2BR3WjlMi%2Bi50Bk8xyo6D0lL5EBsDFacMmt6zBlD%2FV1Spvd%2FvWYdmwoY5nI%2BfvkzQuc7vlpEa0h4P1Ya8w2OR3hZzXDbvX2sLWCThPAnihYNA2YYmc3kJPAI3QqHB16J2cWBiXDHdFGwmRDVUSUdakXNsJmWnML2ivPQfsL3FK0TXJtnE3KF7H7wNgB%2F9uSE5JnWmkRnPjWGdy3k1NSzOzYTR1hpcVrCxcZXg6U1AUkyEoyRB9wEwwiEIgRpyZTN9ycooCvB31C078WTc1nv2A%2F49fa1RD0amdywzWf7xSDakqhTmKstWx8gWpaEQIFVyVY36h3aV6skcMVO3BMSjImLX1chNoJlucGDhcm4tdTgU8rpRP26bgcuLTlKq1Pw4dTZ6jYN08OW8nNITp8L3lNEWwr2%2FY%2FTdNs%2BYMYJWHgFDsS7lSdbutRAa7sszXPF2Ap%2FYJtK6x2jyu1aAqOI3SwrYJVZq37o3tANPitc8wL9SXhdXJG%2Bdn0Htf5d%2BUxFDwf6pT23mcIpxLiByD9gBEU4R8U4MPfQk8EGOqUBFV%2Ft7dwVrQ8JzKg9%2BChjNK2SwOjGJwDku9FF4%2BicOO%2B%2FnivHdyUyI2xps%2BTy5QfGY%2BALA8BR6nD8wVcYPsja6VlfxE7kgD25S6EZ0KnB7Yi4g4YsbQ9GMMdsxiToJ9yl346z2D7XsKyuJ2NNtwAwUHHFI%2B12NgSCxao4TXmHuNl9l%2Fk2sb2WG1i6Y89eExlDbrTarUWqK4FvTd6u4LFLHyapJ515&X-Amz-Signature=6f77afffebb08b808387565be6528d9279c9590b711d0a4027bb291c831fc7e3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFB4LZ6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAcLoAQS%2FZtIzILDrZ7ILi8E%2F64ksRYyI55B67IRpQDIAiEA4Sz4P8aFiVCyHiEJgLR%2FaqGKc060S0Jj%2BpB0dS3xiNMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIiCygEtXFbnoFwtSCrcAybHpjWkSxQcS9EeSyZ17VFlIboegNjDm8sL8p7ov7vqf8pEzcH0%2Bf3PboYTP7mQxhVBsbpgd3hgI%2BIA9o7eaJyJZjUDRfnGV%2BR3WjlMi%2Bi50Bk8xyo6D0lL5EBsDFacMmt6zBlD%2FV1Spvd%2FvWYdmwoY5nI%2BfvkzQuc7vlpEa0h4P1Ya8w2OR3hZzXDbvX2sLWCThPAnihYNA2YYmc3kJPAI3QqHB16J2cWBiXDHdFGwmRDVUSUdakXNsJmWnML2ivPQfsL3FK0TXJtnE3KF7H7wNgB%2F9uSE5JnWmkRnPjWGdy3k1NSzOzYTR1hpcVrCxcZXg6U1AUkyEoyRB9wEwwiEIgRpyZTN9ycooCvB31C078WTc1nv2A%2F49fa1RD0amdywzWf7xSDakqhTmKstWx8gWpaEQIFVyVY36h3aV6skcMVO3BMSjImLX1chNoJlucGDhcm4tdTgU8rpRP26bgcuLTlKq1Pw4dTZ6jYN08OW8nNITp8L3lNEWwr2%2FY%2FTdNs%2BYMYJWHgFDsS7lSdbutRAa7sszXPF2Ap%2FYJtK6x2jyu1aAqOI3SwrYJVZq37o3tANPitc8wL9SXhdXJG%2Bdn0Htf5d%2BUxFDwf6pT23mcIpxLiByD9gBEU4R8U4MPfQk8EGOqUBFV%2Ft7dwVrQ8JzKg9%2BChjNK2SwOjGJwDku9FF4%2BicOO%2B%2FnivHdyUyI2xps%2BTy5QfGY%2BALA8BR6nD8wVcYPsja6VlfxE7kgD25S6EZ0KnB7Yi4g4YsbQ9GMMdsxiToJ9yl346z2D7XsKyuJ2NNtwAwUHHFI%2B12NgSCxao4TXmHuNl9l%2Fk2sb2WG1i6Y89eExlDbrTarUWqK4FvTd6u4LFLHyapJ515&X-Amz-Signature=2a62156cfe1d1c07a00abedec214b944636b4192dd6884bacc66f93b2e271065&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFB4LZ6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAcLoAQS%2FZtIzILDrZ7ILi8E%2F64ksRYyI55B67IRpQDIAiEA4Sz4P8aFiVCyHiEJgLR%2FaqGKc060S0Jj%2BpB0dS3xiNMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIiCygEtXFbnoFwtSCrcAybHpjWkSxQcS9EeSyZ17VFlIboegNjDm8sL8p7ov7vqf8pEzcH0%2Bf3PboYTP7mQxhVBsbpgd3hgI%2BIA9o7eaJyJZjUDRfnGV%2BR3WjlMi%2Bi50Bk8xyo6D0lL5EBsDFacMmt6zBlD%2FV1Spvd%2FvWYdmwoY5nI%2BfvkzQuc7vlpEa0h4P1Ya8w2OR3hZzXDbvX2sLWCThPAnihYNA2YYmc3kJPAI3QqHB16J2cWBiXDHdFGwmRDVUSUdakXNsJmWnML2ivPQfsL3FK0TXJtnE3KF7H7wNgB%2F9uSE5JnWmkRnPjWGdy3k1NSzOzYTR1hpcVrCxcZXg6U1AUkyEoyRB9wEwwiEIgRpyZTN9ycooCvB31C078WTc1nv2A%2F49fa1RD0amdywzWf7xSDakqhTmKstWx8gWpaEQIFVyVY36h3aV6skcMVO3BMSjImLX1chNoJlucGDhcm4tdTgU8rpRP26bgcuLTlKq1Pw4dTZ6jYN08OW8nNITp8L3lNEWwr2%2FY%2FTdNs%2BYMYJWHgFDsS7lSdbutRAa7sszXPF2Ap%2FYJtK6x2jyu1aAqOI3SwrYJVZq37o3tANPitc8wL9SXhdXJG%2Bdn0Htf5d%2BUxFDwf6pT23mcIpxLiByD9gBEU4R8U4MPfQk8EGOqUBFV%2Ft7dwVrQ8JzKg9%2BChjNK2SwOjGJwDku9FF4%2BicOO%2B%2FnivHdyUyI2xps%2BTy5QfGY%2BALA8BR6nD8wVcYPsja6VlfxE7kgD25S6EZ0KnB7Yi4g4YsbQ9GMMdsxiToJ9yl346z2D7XsKyuJ2NNtwAwUHHFI%2B12NgSCxao4TXmHuNl9l%2Fk2sb2WG1i6Y89eExlDbrTarUWqK4FvTd6u4LFLHyapJ515&X-Amz-Signature=5789a395a99eb41ba9a1f5109f48d12a22aaa01b5c3cfdeed3df4cee1894e8ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFB4LZ6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAcLoAQS%2FZtIzILDrZ7ILi8E%2F64ksRYyI55B67IRpQDIAiEA4Sz4P8aFiVCyHiEJgLR%2FaqGKc060S0Jj%2BpB0dS3xiNMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIiCygEtXFbnoFwtSCrcAybHpjWkSxQcS9EeSyZ17VFlIboegNjDm8sL8p7ov7vqf8pEzcH0%2Bf3PboYTP7mQxhVBsbpgd3hgI%2BIA9o7eaJyJZjUDRfnGV%2BR3WjlMi%2Bi50Bk8xyo6D0lL5EBsDFacMmt6zBlD%2FV1Spvd%2FvWYdmwoY5nI%2BfvkzQuc7vlpEa0h4P1Ya8w2OR3hZzXDbvX2sLWCThPAnihYNA2YYmc3kJPAI3QqHB16J2cWBiXDHdFGwmRDVUSUdakXNsJmWnML2ivPQfsL3FK0TXJtnE3KF7H7wNgB%2F9uSE5JnWmkRnPjWGdy3k1NSzOzYTR1hpcVrCxcZXg6U1AUkyEoyRB9wEwwiEIgRpyZTN9ycooCvB31C078WTc1nv2A%2F49fa1RD0amdywzWf7xSDakqhTmKstWx8gWpaEQIFVyVY36h3aV6skcMVO3BMSjImLX1chNoJlucGDhcm4tdTgU8rpRP26bgcuLTlKq1Pw4dTZ6jYN08OW8nNITp8L3lNEWwr2%2FY%2FTdNs%2BYMYJWHgFDsS7lSdbutRAa7sszXPF2Ap%2FYJtK6x2jyu1aAqOI3SwrYJVZq37o3tANPitc8wL9SXhdXJG%2Bdn0Htf5d%2BUxFDwf6pT23mcIpxLiByD9gBEU4R8U4MPfQk8EGOqUBFV%2Ft7dwVrQ8JzKg9%2BChjNK2SwOjGJwDku9FF4%2BicOO%2B%2FnivHdyUyI2xps%2BTy5QfGY%2BALA8BR6nD8wVcYPsja6VlfxE7kgD25S6EZ0KnB7Yi4g4YsbQ9GMMdsxiToJ9yl346z2D7XsKyuJ2NNtwAwUHHFI%2B12NgSCxao4TXmHuNl9l%2Fk2sb2WG1i6Y89eExlDbrTarUWqK4FvTd6u4LFLHyapJ515&X-Amz-Signature=f52508d96f02b4d7d3f46fc85548738689af151ad19c12d264887b4f3f9ffabb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFB4LZ6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAcLoAQS%2FZtIzILDrZ7ILi8E%2F64ksRYyI55B67IRpQDIAiEA4Sz4P8aFiVCyHiEJgLR%2FaqGKc060S0Jj%2BpB0dS3xiNMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIiCygEtXFbnoFwtSCrcAybHpjWkSxQcS9EeSyZ17VFlIboegNjDm8sL8p7ov7vqf8pEzcH0%2Bf3PboYTP7mQxhVBsbpgd3hgI%2BIA9o7eaJyJZjUDRfnGV%2BR3WjlMi%2Bi50Bk8xyo6D0lL5EBsDFacMmt6zBlD%2FV1Spvd%2FvWYdmwoY5nI%2BfvkzQuc7vlpEa0h4P1Ya8w2OR3hZzXDbvX2sLWCThPAnihYNA2YYmc3kJPAI3QqHB16J2cWBiXDHdFGwmRDVUSUdakXNsJmWnML2ivPQfsL3FK0TXJtnE3KF7H7wNgB%2F9uSE5JnWmkRnPjWGdy3k1NSzOzYTR1hpcVrCxcZXg6U1AUkyEoyRB9wEwwiEIgRpyZTN9ycooCvB31C078WTc1nv2A%2F49fa1RD0amdywzWf7xSDakqhTmKstWx8gWpaEQIFVyVY36h3aV6skcMVO3BMSjImLX1chNoJlucGDhcm4tdTgU8rpRP26bgcuLTlKq1Pw4dTZ6jYN08OW8nNITp8L3lNEWwr2%2FY%2FTdNs%2BYMYJWHgFDsS7lSdbutRAa7sszXPF2Ap%2FYJtK6x2jyu1aAqOI3SwrYJVZq37o3tANPitc8wL9SXhdXJG%2Bdn0Htf5d%2BUxFDwf6pT23mcIpxLiByD9gBEU4R8U4MPfQk8EGOqUBFV%2Ft7dwVrQ8JzKg9%2BChjNK2SwOjGJwDku9FF4%2BicOO%2B%2FnivHdyUyI2xps%2BTy5QfGY%2BALA8BR6nD8wVcYPsja6VlfxE7kgD25S6EZ0KnB7Yi4g4YsbQ9GMMdsxiToJ9yl346z2D7XsKyuJ2NNtwAwUHHFI%2B12NgSCxao4TXmHuNl9l%2Fk2sb2WG1i6Y89eExlDbrTarUWqK4FvTd6u4LFLHyapJ515&X-Amz-Signature=56aa53c62edd73a25a4cfc798edf346e2ef12e3a7cd0d2099c3ca6e26bc18547&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
