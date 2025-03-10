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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSMHPQQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFXagi3SejL214%2Bzcy2WHb7We0IeVkhgfEI2%2FJe9z0txAiEAvoXxpcCGM1J7rUJKX1uv0ZidVmf6gtgfr1tLaSWKdQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkcs7QBDPQ6NCETSrcA1vo8f01kd%2BvLSY%2BvjyAlgzzn7WpkcQi7X4cjs2gsCBfsuECz6aoVzqubfiMyfeVBTati4b20NDkeH4sK99PjGrHXR3T4SWx6YanwQrGM3Mnr7pNPsS2HBeCBT6BoQbQreZ%2Fjr1f4vdZQQQjY0hbRiTsVv8IIA9nlYPcO9MhYth1MrsBrmifKb7%2FwvONcF%2BZac9lYYsudAPvNA2wCcBaQFJGYT%2B91r3H%2F8MeoRgOmNdOpmABJlqqkQ6hH3fkH0T4r%2BymkWmFG%2BCz58O8%2FQRWMnKVtgn46W1tgVFi0mnjh%2FoBBoxBWt6xGvJLNh24rg%2F%2BrTJAMeeNzG9e7j72w83YSBOvy0PgK94bI8z24wwgdBtlPOH%2F7N%2BkladqtALgaoQTiTk3g3PGJTLk0dKb4duXgH1yLjvDw328lrLWoX5p7sVwA9ZcbEzwyCWUL8VMvyNnAKsFP%2BoFZ6yaAFBglWqbKqi8v%2BaCHYP%2ByRPMOqtXVpUOf5uXqcJIep%2BR1Clkd%2FhM6m7idyWeKDTYZzpcNLyY%2FCzYCMAimedMG%2BblDnQgSm3lmLuLGHhP3X56%2BOJOe8q%2F7AXDMyrVMuZU5Gk1CbRuit8i5hLtSBZbVsdnFAXg2AQacWk79N6xZXcMkRoiMJbcuL4GOqUBWHVN1Cv%2FFAsOyg1cwIRl0l4K%2BVVNQxSL3W%2BiMzmwulCRGyzC3PYr9Lzu9FlozD2WN5pLpsOXaPjUPSn0kUq7EFkcKu8Mmsszy5KYRdzdzz4w92a3Mgi42R2QAgO4D0%2BzT4MYh51pglgzEi0oxON%2ByI2cdEfmBJfsdJ6hNeELGfaIwaqH9Wm0tBPEPGIHq4vuBs00Z%2FuhQTV0SGL0IJkmwoqYmr7D&X-Amz-Signature=8b5806268f4efc63ba1ec0fe9bfcee1f4b90cf36e83c9f27d0355359d65807e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSMHPQQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFXagi3SejL214%2Bzcy2WHb7We0IeVkhgfEI2%2FJe9z0txAiEAvoXxpcCGM1J7rUJKX1uv0ZidVmf6gtgfr1tLaSWKdQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkcs7QBDPQ6NCETSrcA1vo8f01kd%2BvLSY%2BvjyAlgzzn7WpkcQi7X4cjs2gsCBfsuECz6aoVzqubfiMyfeVBTati4b20NDkeH4sK99PjGrHXR3T4SWx6YanwQrGM3Mnr7pNPsS2HBeCBT6BoQbQreZ%2Fjr1f4vdZQQQjY0hbRiTsVv8IIA9nlYPcO9MhYth1MrsBrmifKb7%2FwvONcF%2BZac9lYYsudAPvNA2wCcBaQFJGYT%2B91r3H%2F8MeoRgOmNdOpmABJlqqkQ6hH3fkH0T4r%2BymkWmFG%2BCz58O8%2FQRWMnKVtgn46W1tgVFi0mnjh%2FoBBoxBWt6xGvJLNh24rg%2F%2BrTJAMeeNzG9e7j72w83YSBOvy0PgK94bI8z24wwgdBtlPOH%2F7N%2BkladqtALgaoQTiTk3g3PGJTLk0dKb4duXgH1yLjvDw328lrLWoX5p7sVwA9ZcbEzwyCWUL8VMvyNnAKsFP%2BoFZ6yaAFBglWqbKqi8v%2BaCHYP%2ByRPMOqtXVpUOf5uXqcJIep%2BR1Clkd%2FhM6m7idyWeKDTYZzpcNLyY%2FCzYCMAimedMG%2BblDnQgSm3lmLuLGHhP3X56%2BOJOe8q%2F7AXDMyrVMuZU5Gk1CbRuit8i5hLtSBZbVsdnFAXg2AQacWk79N6xZXcMkRoiMJbcuL4GOqUBWHVN1Cv%2FFAsOyg1cwIRl0l4K%2BVVNQxSL3W%2BiMzmwulCRGyzC3PYr9Lzu9FlozD2WN5pLpsOXaPjUPSn0kUq7EFkcKu8Mmsszy5KYRdzdzz4w92a3Mgi42R2QAgO4D0%2BzT4MYh51pglgzEi0oxON%2ByI2cdEfmBJfsdJ6hNeELGfaIwaqH9Wm0tBPEPGIHq4vuBs00Z%2FuhQTV0SGL0IJkmwoqYmr7D&X-Amz-Signature=7b30453d562cc4d12b75e57e75327b9dd799666a25b2640e44d2b1f0217ccd26&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSMHPQQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFXagi3SejL214%2Bzcy2WHb7We0IeVkhgfEI2%2FJe9z0txAiEAvoXxpcCGM1J7rUJKX1uv0ZidVmf6gtgfr1tLaSWKdQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkcs7QBDPQ6NCETSrcA1vo8f01kd%2BvLSY%2BvjyAlgzzn7WpkcQi7X4cjs2gsCBfsuECz6aoVzqubfiMyfeVBTati4b20NDkeH4sK99PjGrHXR3T4SWx6YanwQrGM3Mnr7pNPsS2HBeCBT6BoQbQreZ%2Fjr1f4vdZQQQjY0hbRiTsVv8IIA9nlYPcO9MhYth1MrsBrmifKb7%2FwvONcF%2BZac9lYYsudAPvNA2wCcBaQFJGYT%2B91r3H%2F8MeoRgOmNdOpmABJlqqkQ6hH3fkH0T4r%2BymkWmFG%2BCz58O8%2FQRWMnKVtgn46W1tgVFi0mnjh%2FoBBoxBWt6xGvJLNh24rg%2F%2BrTJAMeeNzG9e7j72w83YSBOvy0PgK94bI8z24wwgdBtlPOH%2F7N%2BkladqtALgaoQTiTk3g3PGJTLk0dKb4duXgH1yLjvDw328lrLWoX5p7sVwA9ZcbEzwyCWUL8VMvyNnAKsFP%2BoFZ6yaAFBglWqbKqi8v%2BaCHYP%2ByRPMOqtXVpUOf5uXqcJIep%2BR1Clkd%2FhM6m7idyWeKDTYZzpcNLyY%2FCzYCMAimedMG%2BblDnQgSm3lmLuLGHhP3X56%2BOJOe8q%2F7AXDMyrVMuZU5Gk1CbRuit8i5hLtSBZbVsdnFAXg2AQacWk79N6xZXcMkRoiMJbcuL4GOqUBWHVN1Cv%2FFAsOyg1cwIRl0l4K%2BVVNQxSL3W%2BiMzmwulCRGyzC3PYr9Lzu9FlozD2WN5pLpsOXaPjUPSn0kUq7EFkcKu8Mmsszy5KYRdzdzz4w92a3Mgi42R2QAgO4D0%2BzT4MYh51pglgzEi0oxON%2ByI2cdEfmBJfsdJ6hNeELGfaIwaqH9Wm0tBPEPGIHq4vuBs00Z%2FuhQTV0SGL0IJkmwoqYmr7D&X-Amz-Signature=a254e1b9299fc3407710a316765cdbb5c5eef4c0e63a5ea83652e7097e21a55b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSMHPQQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFXagi3SejL214%2Bzcy2WHb7We0IeVkhgfEI2%2FJe9z0txAiEAvoXxpcCGM1J7rUJKX1uv0ZidVmf6gtgfr1tLaSWKdQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkcs7QBDPQ6NCETSrcA1vo8f01kd%2BvLSY%2BvjyAlgzzn7WpkcQi7X4cjs2gsCBfsuECz6aoVzqubfiMyfeVBTati4b20NDkeH4sK99PjGrHXR3T4SWx6YanwQrGM3Mnr7pNPsS2HBeCBT6BoQbQreZ%2Fjr1f4vdZQQQjY0hbRiTsVv8IIA9nlYPcO9MhYth1MrsBrmifKb7%2FwvONcF%2BZac9lYYsudAPvNA2wCcBaQFJGYT%2B91r3H%2F8MeoRgOmNdOpmABJlqqkQ6hH3fkH0T4r%2BymkWmFG%2BCz58O8%2FQRWMnKVtgn46W1tgVFi0mnjh%2FoBBoxBWt6xGvJLNh24rg%2F%2BrTJAMeeNzG9e7j72w83YSBOvy0PgK94bI8z24wwgdBtlPOH%2F7N%2BkladqtALgaoQTiTk3g3PGJTLk0dKb4duXgH1yLjvDw328lrLWoX5p7sVwA9ZcbEzwyCWUL8VMvyNnAKsFP%2BoFZ6yaAFBglWqbKqi8v%2BaCHYP%2ByRPMOqtXVpUOf5uXqcJIep%2BR1Clkd%2FhM6m7idyWeKDTYZzpcNLyY%2FCzYCMAimedMG%2BblDnQgSm3lmLuLGHhP3X56%2BOJOe8q%2F7AXDMyrVMuZU5Gk1CbRuit8i5hLtSBZbVsdnFAXg2AQacWk79N6xZXcMkRoiMJbcuL4GOqUBWHVN1Cv%2FFAsOyg1cwIRl0l4K%2BVVNQxSL3W%2BiMzmwulCRGyzC3PYr9Lzu9FlozD2WN5pLpsOXaPjUPSn0kUq7EFkcKu8Mmsszy5KYRdzdzz4w92a3Mgi42R2QAgO4D0%2BzT4MYh51pglgzEi0oxON%2ByI2cdEfmBJfsdJ6hNeELGfaIwaqH9Wm0tBPEPGIHq4vuBs00Z%2FuhQTV0SGL0IJkmwoqYmr7D&X-Amz-Signature=26e1f1c8453f8a61c4a022b9021fe3c19ee28772ade093fbfa93022c0a8f07f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSMHPQQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFXagi3SejL214%2Bzcy2WHb7We0IeVkhgfEI2%2FJe9z0txAiEAvoXxpcCGM1J7rUJKX1uv0ZidVmf6gtgfr1tLaSWKdQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkcs7QBDPQ6NCETSrcA1vo8f01kd%2BvLSY%2BvjyAlgzzn7WpkcQi7X4cjs2gsCBfsuECz6aoVzqubfiMyfeVBTati4b20NDkeH4sK99PjGrHXR3T4SWx6YanwQrGM3Mnr7pNPsS2HBeCBT6BoQbQreZ%2Fjr1f4vdZQQQjY0hbRiTsVv8IIA9nlYPcO9MhYth1MrsBrmifKb7%2FwvONcF%2BZac9lYYsudAPvNA2wCcBaQFJGYT%2B91r3H%2F8MeoRgOmNdOpmABJlqqkQ6hH3fkH0T4r%2BymkWmFG%2BCz58O8%2FQRWMnKVtgn46W1tgVFi0mnjh%2FoBBoxBWt6xGvJLNh24rg%2F%2BrTJAMeeNzG9e7j72w83YSBOvy0PgK94bI8z24wwgdBtlPOH%2F7N%2BkladqtALgaoQTiTk3g3PGJTLk0dKb4duXgH1yLjvDw328lrLWoX5p7sVwA9ZcbEzwyCWUL8VMvyNnAKsFP%2BoFZ6yaAFBglWqbKqi8v%2BaCHYP%2ByRPMOqtXVpUOf5uXqcJIep%2BR1Clkd%2FhM6m7idyWeKDTYZzpcNLyY%2FCzYCMAimedMG%2BblDnQgSm3lmLuLGHhP3X56%2BOJOe8q%2F7AXDMyrVMuZU5Gk1CbRuit8i5hLtSBZbVsdnFAXg2AQacWk79N6xZXcMkRoiMJbcuL4GOqUBWHVN1Cv%2FFAsOyg1cwIRl0l4K%2BVVNQxSL3W%2BiMzmwulCRGyzC3PYr9Lzu9FlozD2WN5pLpsOXaPjUPSn0kUq7EFkcKu8Mmsszy5KYRdzdzz4w92a3Mgi42R2QAgO4D0%2BzT4MYh51pglgzEi0oxON%2ByI2cdEfmBJfsdJ6hNeELGfaIwaqH9Wm0tBPEPGIHq4vuBs00Z%2FuhQTV0SGL0IJkmwoqYmr7D&X-Amz-Signature=752182158fe05ca4003919bced3a0e5f9b91b7aa11c5697350e3dedb5ffed9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSMHPQQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFXagi3SejL214%2Bzcy2WHb7We0IeVkhgfEI2%2FJe9z0txAiEAvoXxpcCGM1J7rUJKX1uv0ZidVmf6gtgfr1tLaSWKdQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkcs7QBDPQ6NCETSrcA1vo8f01kd%2BvLSY%2BvjyAlgzzn7WpkcQi7X4cjs2gsCBfsuECz6aoVzqubfiMyfeVBTati4b20NDkeH4sK99PjGrHXR3T4SWx6YanwQrGM3Mnr7pNPsS2HBeCBT6BoQbQreZ%2Fjr1f4vdZQQQjY0hbRiTsVv8IIA9nlYPcO9MhYth1MrsBrmifKb7%2FwvONcF%2BZac9lYYsudAPvNA2wCcBaQFJGYT%2B91r3H%2F8MeoRgOmNdOpmABJlqqkQ6hH3fkH0T4r%2BymkWmFG%2BCz58O8%2FQRWMnKVtgn46W1tgVFi0mnjh%2FoBBoxBWt6xGvJLNh24rg%2F%2BrTJAMeeNzG9e7j72w83YSBOvy0PgK94bI8z24wwgdBtlPOH%2F7N%2BkladqtALgaoQTiTk3g3PGJTLk0dKb4duXgH1yLjvDw328lrLWoX5p7sVwA9ZcbEzwyCWUL8VMvyNnAKsFP%2BoFZ6yaAFBglWqbKqi8v%2BaCHYP%2ByRPMOqtXVpUOf5uXqcJIep%2BR1Clkd%2FhM6m7idyWeKDTYZzpcNLyY%2FCzYCMAimedMG%2BblDnQgSm3lmLuLGHhP3X56%2BOJOe8q%2F7AXDMyrVMuZU5Gk1CbRuit8i5hLtSBZbVsdnFAXg2AQacWk79N6xZXcMkRoiMJbcuL4GOqUBWHVN1Cv%2FFAsOyg1cwIRl0l4K%2BVVNQxSL3W%2BiMzmwulCRGyzC3PYr9Lzu9FlozD2WN5pLpsOXaPjUPSn0kUq7EFkcKu8Mmsszy5KYRdzdzz4w92a3Mgi42R2QAgO4D0%2BzT4MYh51pglgzEi0oxON%2ByI2cdEfmBJfsdJ6hNeELGfaIwaqH9Wm0tBPEPGIHq4vuBs00Z%2FuhQTV0SGL0IJkmwoqYmr7D&X-Amz-Signature=12496d96f8fb9b46852f2ef4c69c29ced03b8984afead8402de1252b27a1751e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWSMHPQQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFXagi3SejL214%2Bzcy2WHb7We0IeVkhgfEI2%2FJe9z0txAiEAvoXxpcCGM1J7rUJKX1uv0ZidVmf6gtgfr1tLaSWKdQUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSkcs7QBDPQ6NCETSrcA1vo8f01kd%2BvLSY%2BvjyAlgzzn7WpkcQi7X4cjs2gsCBfsuECz6aoVzqubfiMyfeVBTati4b20NDkeH4sK99PjGrHXR3T4SWx6YanwQrGM3Mnr7pNPsS2HBeCBT6BoQbQreZ%2Fjr1f4vdZQQQjY0hbRiTsVv8IIA9nlYPcO9MhYth1MrsBrmifKb7%2FwvONcF%2BZac9lYYsudAPvNA2wCcBaQFJGYT%2B91r3H%2F8MeoRgOmNdOpmABJlqqkQ6hH3fkH0T4r%2BymkWmFG%2BCz58O8%2FQRWMnKVtgn46W1tgVFi0mnjh%2FoBBoxBWt6xGvJLNh24rg%2F%2BrTJAMeeNzG9e7j72w83YSBOvy0PgK94bI8z24wwgdBtlPOH%2F7N%2BkladqtALgaoQTiTk3g3PGJTLk0dKb4duXgH1yLjvDw328lrLWoX5p7sVwA9ZcbEzwyCWUL8VMvyNnAKsFP%2BoFZ6yaAFBglWqbKqi8v%2BaCHYP%2ByRPMOqtXVpUOf5uXqcJIep%2BR1Clkd%2FhM6m7idyWeKDTYZzpcNLyY%2FCzYCMAimedMG%2BblDnQgSm3lmLuLGHhP3X56%2BOJOe8q%2F7AXDMyrVMuZU5Gk1CbRuit8i5hLtSBZbVsdnFAXg2AQacWk79N6xZXcMkRoiMJbcuL4GOqUBWHVN1Cv%2FFAsOyg1cwIRl0l4K%2BVVNQxSL3W%2BiMzmwulCRGyzC3PYr9Lzu9FlozD2WN5pLpsOXaPjUPSn0kUq7EFkcKu8Mmsszy5KYRdzdzz4w92a3Mgi42R2QAgO4D0%2BzT4MYh51pglgzEi0oxON%2ByI2cdEfmBJfsdJ6hNeELGfaIwaqH9Wm0tBPEPGIHq4vuBs00Z%2FuhQTV0SGL0IJkmwoqYmr7D&X-Amz-Signature=c0ad041d73371fe2f2ca8a2483e1021c29eeefb0c4ae8d7ea8437c70061c7521&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
