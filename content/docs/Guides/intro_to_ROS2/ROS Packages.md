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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE5A3OQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCyf72MgwslHaky2JEHFyyjqqW8kdXzhJBCBbSj0t0MwIhALquRTP8xBGfplaGZ%2Fj%2FhrsQ2ox4LHSBv1GYAnH%2FWe0TKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw%2F25e7n3alx9BwW0q3AOhArz9FVGN7XRzv%2BKcsj6ZxV97UNp1hVhNrICeVnMAC5QHdrxmRZusMwGId1dl6v2GhrWYJJq2vo2qKnuTpJ6P7N96DBXpPJRi12vmqACKallSoBAj%2BH%2BxvhRyrZRwB9jUPIpjx9iE%2FR6A%2BWqlKMnvte5VhAj9As3iozItozsL0LOznIpYL51weBJFKSIE2WczHk2V4uTKDhRu0%2Fxe5u4f8SoQoXxalJEXPuu%2BkQwovN8Ans6tnU7SAnMgtgRPJl8YezipGo2E6TzlvfgxxTKSES40a9ziI5D48pCOVMcTRdw4kXfcqkiFajCJxH4L98MbWNulBTxAuibsePF0t7MPwwt%2F2vl5eGY6YDosN9%2Fm5g1oV7QXi0JS6DYiHVfOtEoEALagjgEmBz2QqDkPKvtvD%2FYOO4PVZeu5OBfJrUNq5Z12Em04Icg95GJO2ydEw3AF93KG0ZQgFU9%2F1akYGW62M6bOQncKhN7eNcV%2BXWmNvZzThxMYvhw6rFV5Wf6cdg1K5LHRAfNG4cjEcVhAs%2FgU5I%2BxtFfz8F3vbzRhQMsg6pRMEDpFGWAk05BANEzfsgV%2Bn7u0oFfwNGQl0CvrdIqgf5g%2B50egggc%2B5Ldo1BLxa%2FWNwdX%2B5VlP7aS9cTC5j4W%2FBjqkAYxhKGGQDSvjPjtCotIIsXexUEalfNeBPrnReLx45mYwVrT%2Fecp8SpKTCo6GFLU91vXs1hsVpq7Nw1KJ3t5S3w1SIm3tRcylXY4wXReTcqGQlR8CH8T9vQODIukqvLJStt%2B6d410hEqH1c6OsDx0whbpYKUarstyyIFSF%2FYMzY%2Bo8%2F9cQre4HBJIAPbugjil83ZjQ3p0ZWubHcKetK%2FBfQMpy1%2Bw&X-Amz-Signature=3cb2c974c662aa07738e4140d1abe04f34e53217fcc0a1ed38ff92ef9add9e84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE5A3OQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCyf72MgwslHaky2JEHFyyjqqW8kdXzhJBCBbSj0t0MwIhALquRTP8xBGfplaGZ%2Fj%2FhrsQ2ox4LHSBv1GYAnH%2FWe0TKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw%2F25e7n3alx9BwW0q3AOhArz9FVGN7XRzv%2BKcsj6ZxV97UNp1hVhNrICeVnMAC5QHdrxmRZusMwGId1dl6v2GhrWYJJq2vo2qKnuTpJ6P7N96DBXpPJRi12vmqACKallSoBAj%2BH%2BxvhRyrZRwB9jUPIpjx9iE%2FR6A%2BWqlKMnvte5VhAj9As3iozItozsL0LOznIpYL51weBJFKSIE2WczHk2V4uTKDhRu0%2Fxe5u4f8SoQoXxalJEXPuu%2BkQwovN8Ans6tnU7SAnMgtgRPJl8YezipGo2E6TzlvfgxxTKSES40a9ziI5D48pCOVMcTRdw4kXfcqkiFajCJxH4L98MbWNulBTxAuibsePF0t7MPwwt%2F2vl5eGY6YDosN9%2Fm5g1oV7QXi0JS6DYiHVfOtEoEALagjgEmBz2QqDkPKvtvD%2FYOO4PVZeu5OBfJrUNq5Z12Em04Icg95GJO2ydEw3AF93KG0ZQgFU9%2F1akYGW62M6bOQncKhN7eNcV%2BXWmNvZzThxMYvhw6rFV5Wf6cdg1K5LHRAfNG4cjEcVhAs%2FgU5I%2BxtFfz8F3vbzRhQMsg6pRMEDpFGWAk05BANEzfsgV%2Bn7u0oFfwNGQl0CvrdIqgf5g%2B50egggc%2B5Ldo1BLxa%2FWNwdX%2B5VlP7aS9cTC5j4W%2FBjqkAYxhKGGQDSvjPjtCotIIsXexUEalfNeBPrnReLx45mYwVrT%2Fecp8SpKTCo6GFLU91vXs1hsVpq7Nw1KJ3t5S3w1SIm3tRcylXY4wXReTcqGQlR8CH8T9vQODIukqvLJStt%2B6d410hEqH1c6OsDx0whbpYKUarstyyIFSF%2FYMzY%2Bo8%2F9cQre4HBJIAPbugjil83ZjQ3p0ZWubHcKetK%2FBfQMpy1%2Bw&X-Amz-Signature=2a9116861fe6725d9ae3214af308b0aebdff7fcee1a7fbc3ff2cf48078aca125&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE5A3OQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCyf72MgwslHaky2JEHFyyjqqW8kdXzhJBCBbSj0t0MwIhALquRTP8xBGfplaGZ%2Fj%2FhrsQ2ox4LHSBv1GYAnH%2FWe0TKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw%2F25e7n3alx9BwW0q3AOhArz9FVGN7XRzv%2BKcsj6ZxV97UNp1hVhNrICeVnMAC5QHdrxmRZusMwGId1dl6v2GhrWYJJq2vo2qKnuTpJ6P7N96DBXpPJRi12vmqACKallSoBAj%2BH%2BxvhRyrZRwB9jUPIpjx9iE%2FR6A%2BWqlKMnvte5VhAj9As3iozItozsL0LOznIpYL51weBJFKSIE2WczHk2V4uTKDhRu0%2Fxe5u4f8SoQoXxalJEXPuu%2BkQwovN8Ans6tnU7SAnMgtgRPJl8YezipGo2E6TzlvfgxxTKSES40a9ziI5D48pCOVMcTRdw4kXfcqkiFajCJxH4L98MbWNulBTxAuibsePF0t7MPwwt%2F2vl5eGY6YDosN9%2Fm5g1oV7QXi0JS6DYiHVfOtEoEALagjgEmBz2QqDkPKvtvD%2FYOO4PVZeu5OBfJrUNq5Z12Em04Icg95GJO2ydEw3AF93KG0ZQgFU9%2F1akYGW62M6bOQncKhN7eNcV%2BXWmNvZzThxMYvhw6rFV5Wf6cdg1K5LHRAfNG4cjEcVhAs%2FgU5I%2BxtFfz8F3vbzRhQMsg6pRMEDpFGWAk05BANEzfsgV%2Bn7u0oFfwNGQl0CvrdIqgf5g%2B50egggc%2B5Ldo1BLxa%2FWNwdX%2B5VlP7aS9cTC5j4W%2FBjqkAYxhKGGQDSvjPjtCotIIsXexUEalfNeBPrnReLx45mYwVrT%2Fecp8SpKTCo6GFLU91vXs1hsVpq7Nw1KJ3t5S3w1SIm3tRcylXY4wXReTcqGQlR8CH8T9vQODIukqvLJStt%2B6d410hEqH1c6OsDx0whbpYKUarstyyIFSF%2FYMzY%2Bo8%2F9cQre4HBJIAPbugjil83ZjQ3p0ZWubHcKetK%2FBfQMpy1%2Bw&X-Amz-Signature=b7e1d330d8082fc4cea85a19fc0085ac2e2229b19b51567d68b0f138dbe32e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE5A3OQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCyf72MgwslHaky2JEHFyyjqqW8kdXzhJBCBbSj0t0MwIhALquRTP8xBGfplaGZ%2Fj%2FhrsQ2ox4LHSBv1GYAnH%2FWe0TKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw%2F25e7n3alx9BwW0q3AOhArz9FVGN7XRzv%2BKcsj6ZxV97UNp1hVhNrICeVnMAC5QHdrxmRZusMwGId1dl6v2GhrWYJJq2vo2qKnuTpJ6P7N96DBXpPJRi12vmqACKallSoBAj%2BH%2BxvhRyrZRwB9jUPIpjx9iE%2FR6A%2BWqlKMnvte5VhAj9As3iozItozsL0LOznIpYL51weBJFKSIE2WczHk2V4uTKDhRu0%2Fxe5u4f8SoQoXxalJEXPuu%2BkQwovN8Ans6tnU7SAnMgtgRPJl8YezipGo2E6TzlvfgxxTKSES40a9ziI5D48pCOVMcTRdw4kXfcqkiFajCJxH4L98MbWNulBTxAuibsePF0t7MPwwt%2F2vl5eGY6YDosN9%2Fm5g1oV7QXi0JS6DYiHVfOtEoEALagjgEmBz2QqDkPKvtvD%2FYOO4PVZeu5OBfJrUNq5Z12Em04Icg95GJO2ydEw3AF93KG0ZQgFU9%2F1akYGW62M6bOQncKhN7eNcV%2BXWmNvZzThxMYvhw6rFV5Wf6cdg1K5LHRAfNG4cjEcVhAs%2FgU5I%2BxtFfz8F3vbzRhQMsg6pRMEDpFGWAk05BANEzfsgV%2Bn7u0oFfwNGQl0CvrdIqgf5g%2B50egggc%2B5Ldo1BLxa%2FWNwdX%2B5VlP7aS9cTC5j4W%2FBjqkAYxhKGGQDSvjPjtCotIIsXexUEalfNeBPrnReLx45mYwVrT%2Fecp8SpKTCo6GFLU91vXs1hsVpq7Nw1KJ3t5S3w1SIm3tRcylXY4wXReTcqGQlR8CH8T9vQODIukqvLJStt%2B6d410hEqH1c6OsDx0whbpYKUarstyyIFSF%2FYMzY%2Bo8%2F9cQre4HBJIAPbugjil83ZjQ3p0ZWubHcKetK%2FBfQMpy1%2Bw&X-Amz-Signature=98f20664194379107fe6dec5c184791cb411c5f013cb323d1f9d7014f01ce882&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE5A3OQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCyf72MgwslHaky2JEHFyyjqqW8kdXzhJBCBbSj0t0MwIhALquRTP8xBGfplaGZ%2Fj%2FhrsQ2ox4LHSBv1GYAnH%2FWe0TKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw%2F25e7n3alx9BwW0q3AOhArz9FVGN7XRzv%2BKcsj6ZxV97UNp1hVhNrICeVnMAC5QHdrxmRZusMwGId1dl6v2GhrWYJJq2vo2qKnuTpJ6P7N96DBXpPJRi12vmqACKallSoBAj%2BH%2BxvhRyrZRwB9jUPIpjx9iE%2FR6A%2BWqlKMnvte5VhAj9As3iozItozsL0LOznIpYL51weBJFKSIE2WczHk2V4uTKDhRu0%2Fxe5u4f8SoQoXxalJEXPuu%2BkQwovN8Ans6tnU7SAnMgtgRPJl8YezipGo2E6TzlvfgxxTKSES40a9ziI5D48pCOVMcTRdw4kXfcqkiFajCJxH4L98MbWNulBTxAuibsePF0t7MPwwt%2F2vl5eGY6YDosN9%2Fm5g1oV7QXi0JS6DYiHVfOtEoEALagjgEmBz2QqDkPKvtvD%2FYOO4PVZeu5OBfJrUNq5Z12Em04Icg95GJO2ydEw3AF93KG0ZQgFU9%2F1akYGW62M6bOQncKhN7eNcV%2BXWmNvZzThxMYvhw6rFV5Wf6cdg1K5LHRAfNG4cjEcVhAs%2FgU5I%2BxtFfz8F3vbzRhQMsg6pRMEDpFGWAk05BANEzfsgV%2Bn7u0oFfwNGQl0CvrdIqgf5g%2B50egggc%2B5Ldo1BLxa%2FWNwdX%2B5VlP7aS9cTC5j4W%2FBjqkAYxhKGGQDSvjPjtCotIIsXexUEalfNeBPrnReLx45mYwVrT%2Fecp8SpKTCo6GFLU91vXs1hsVpq7Nw1KJ3t5S3w1SIm3tRcylXY4wXReTcqGQlR8CH8T9vQODIukqvLJStt%2B6d410hEqH1c6OsDx0whbpYKUarstyyIFSF%2FYMzY%2Bo8%2F9cQre4HBJIAPbugjil83ZjQ3p0ZWubHcKetK%2FBfQMpy1%2Bw&X-Amz-Signature=9395c87956f3fbacb11dd3d1763fd5d830c587c12382a713cf19dda6a2a13088&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE5A3OQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCyf72MgwslHaky2JEHFyyjqqW8kdXzhJBCBbSj0t0MwIhALquRTP8xBGfplaGZ%2Fj%2FhrsQ2ox4LHSBv1GYAnH%2FWe0TKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw%2F25e7n3alx9BwW0q3AOhArz9FVGN7XRzv%2BKcsj6ZxV97UNp1hVhNrICeVnMAC5QHdrxmRZusMwGId1dl6v2GhrWYJJq2vo2qKnuTpJ6P7N96DBXpPJRi12vmqACKallSoBAj%2BH%2BxvhRyrZRwB9jUPIpjx9iE%2FR6A%2BWqlKMnvte5VhAj9As3iozItozsL0LOznIpYL51weBJFKSIE2WczHk2V4uTKDhRu0%2Fxe5u4f8SoQoXxalJEXPuu%2BkQwovN8Ans6tnU7SAnMgtgRPJl8YezipGo2E6TzlvfgxxTKSES40a9ziI5D48pCOVMcTRdw4kXfcqkiFajCJxH4L98MbWNulBTxAuibsePF0t7MPwwt%2F2vl5eGY6YDosN9%2Fm5g1oV7QXi0JS6DYiHVfOtEoEALagjgEmBz2QqDkPKvtvD%2FYOO4PVZeu5OBfJrUNq5Z12Em04Icg95GJO2ydEw3AF93KG0ZQgFU9%2F1akYGW62M6bOQncKhN7eNcV%2BXWmNvZzThxMYvhw6rFV5Wf6cdg1K5LHRAfNG4cjEcVhAs%2FgU5I%2BxtFfz8F3vbzRhQMsg6pRMEDpFGWAk05BANEzfsgV%2Bn7u0oFfwNGQl0CvrdIqgf5g%2B50egggc%2B5Ldo1BLxa%2FWNwdX%2B5VlP7aS9cTC5j4W%2FBjqkAYxhKGGQDSvjPjtCotIIsXexUEalfNeBPrnReLx45mYwVrT%2Fecp8SpKTCo6GFLU91vXs1hsVpq7Nw1KJ3t5S3w1SIm3tRcylXY4wXReTcqGQlR8CH8T9vQODIukqvLJStt%2B6d410hEqH1c6OsDx0whbpYKUarstyyIFSF%2FYMzY%2Bo8%2F9cQre4HBJIAPbugjil83ZjQ3p0ZWubHcKetK%2FBfQMpy1%2Bw&X-Amz-Signature=d643d093819a59e5c1c9791125bddf24ee69598dc1219eeda8b9be4185f8beb2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE5A3OQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCyf72MgwslHaky2JEHFyyjqqW8kdXzhJBCBbSj0t0MwIhALquRTP8xBGfplaGZ%2Fj%2FhrsQ2ox4LHSBv1GYAnH%2FWe0TKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw%2F25e7n3alx9BwW0q3AOhArz9FVGN7XRzv%2BKcsj6ZxV97UNp1hVhNrICeVnMAC5QHdrxmRZusMwGId1dl6v2GhrWYJJq2vo2qKnuTpJ6P7N96DBXpPJRi12vmqACKallSoBAj%2BH%2BxvhRyrZRwB9jUPIpjx9iE%2FR6A%2BWqlKMnvte5VhAj9As3iozItozsL0LOznIpYL51weBJFKSIE2WczHk2V4uTKDhRu0%2Fxe5u4f8SoQoXxalJEXPuu%2BkQwovN8Ans6tnU7SAnMgtgRPJl8YezipGo2E6TzlvfgxxTKSES40a9ziI5D48pCOVMcTRdw4kXfcqkiFajCJxH4L98MbWNulBTxAuibsePF0t7MPwwt%2F2vl5eGY6YDosN9%2Fm5g1oV7QXi0JS6DYiHVfOtEoEALagjgEmBz2QqDkPKvtvD%2FYOO4PVZeu5OBfJrUNq5Z12Em04Icg95GJO2ydEw3AF93KG0ZQgFU9%2F1akYGW62M6bOQncKhN7eNcV%2BXWmNvZzThxMYvhw6rFV5Wf6cdg1K5LHRAfNG4cjEcVhAs%2FgU5I%2BxtFfz8F3vbzRhQMsg6pRMEDpFGWAk05BANEzfsgV%2Bn7u0oFfwNGQl0CvrdIqgf5g%2B50egggc%2B5Ldo1BLxa%2FWNwdX%2B5VlP7aS9cTC5j4W%2FBjqkAYxhKGGQDSvjPjtCotIIsXexUEalfNeBPrnReLx45mYwVrT%2Fecp8SpKTCo6GFLU91vXs1hsVpq7Nw1KJ3t5S3w1SIm3tRcylXY4wXReTcqGQlR8CH8T9vQODIukqvLJStt%2B6d410hEqH1c6OsDx0whbpYKUarstyyIFSF%2FYMzY%2Bo8%2F9cQre4HBJIAPbugjil83ZjQ3p0ZWubHcKetK%2FBfQMpy1%2Bw&X-Amz-Signature=2b4f69218be736314bcccfd3ae76b0772c42a7e389ca076b2e1978246439688e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
