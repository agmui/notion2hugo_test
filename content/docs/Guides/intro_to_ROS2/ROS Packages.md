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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXA27JF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDFHxkvp%2FF9%2FBEk%2F0WK5cjTdWmpN53fvN%2F95m2Za1jEgAiEA1keNrv1IKFm7bJ4CvBCRTs3OPDsduGVXCFsXUXi%2FesYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLxTgSnJjEXK8AlxeCrcAyPk8bSZ1j7tgHwJyHTn6qx3H41%2BElWIrbrKfIKjPE%2F5o7JMj8rXuEiDo7Vxor1d5KzgCB2T24gFbOjklO2YiyDFsaAYWQkvF2p6HtAeVxClrcXoRqojBAHYvDmn2WPTAsHAoUuzGI5kHC5vuA3jJKz5coUGLeSw6vUZbtD5bmADiGrG23bQY3HUIULpqYCdMYVJq2qUWmZ4RUhxbLVYHa0GK2h1fUhY%2FPuLiRhJmWhOxMGeGWifmYQ1tvllaRIE%2BPSC5uHlHYClDSNhHXD8sV%2FQXwcYwBWRHLPiUATDXWltkWNlWm8Z%2Bu99gnBv%2Fvs8hdDrTDue0%2Bt9Obj2Zr1NAbPPSTrIb1p2LwlHHoBzKbmJ4UaICZ4dLBsfh3svoshU3sxVphNdUz0nlwwM2tM2cwIJHoxSvtddgaA7PJUs8o%2BtyYaqisIqjmltRafc%2FVzrLkmXOxdqaVU0p0Wjv2X1WyqOzZFwuGXCnUPnOHQG%2B%2Bod6bMQ4TiuI2gS3dD%2F7BmHEE8syWCtalAUETKCNh5TpJotAA1MlHP9R6xyrd2nxXFOi7DtkeWGn9WCnIQuLqKtUMVIw7dbw3JOTLUZjoKB3B0ihXBIIQqRr01twiL5hGcEbyXWsIjllpprXOO0MJeQ78IGOqUBa8qfxBrjgqDZ1vRoVkcJTaGxnrampzRKkISNzLRJdDT6O8kOPx5HpdqAaX8tWwOZsHVzhWoorQbSWETpdCG9QmdxEjQdpaKw8LSIRMFrMrNhep12Q3EBvKkxabN%2FyQ1sCtpCAz390LAyE4fEMLTQBcAqfPAe8k1AiGzxxj6Xa%2BDjjTm5LWyYOrEeIooDGmGk3kBPi0BFxBqHNofOsLgA1bIhRywr&X-Amz-Signature=c7bccaef57a9a836e1d093c01ea0afc07f8fd2c7838f5f6737a3b12755d49e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXA27JF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDFHxkvp%2FF9%2FBEk%2F0WK5cjTdWmpN53fvN%2F95m2Za1jEgAiEA1keNrv1IKFm7bJ4CvBCRTs3OPDsduGVXCFsXUXi%2FesYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLxTgSnJjEXK8AlxeCrcAyPk8bSZ1j7tgHwJyHTn6qx3H41%2BElWIrbrKfIKjPE%2F5o7JMj8rXuEiDo7Vxor1d5KzgCB2T24gFbOjklO2YiyDFsaAYWQkvF2p6HtAeVxClrcXoRqojBAHYvDmn2WPTAsHAoUuzGI5kHC5vuA3jJKz5coUGLeSw6vUZbtD5bmADiGrG23bQY3HUIULpqYCdMYVJq2qUWmZ4RUhxbLVYHa0GK2h1fUhY%2FPuLiRhJmWhOxMGeGWifmYQ1tvllaRIE%2BPSC5uHlHYClDSNhHXD8sV%2FQXwcYwBWRHLPiUATDXWltkWNlWm8Z%2Bu99gnBv%2Fvs8hdDrTDue0%2Bt9Obj2Zr1NAbPPSTrIb1p2LwlHHoBzKbmJ4UaICZ4dLBsfh3svoshU3sxVphNdUz0nlwwM2tM2cwIJHoxSvtddgaA7PJUs8o%2BtyYaqisIqjmltRafc%2FVzrLkmXOxdqaVU0p0Wjv2X1WyqOzZFwuGXCnUPnOHQG%2B%2Bod6bMQ4TiuI2gS3dD%2F7BmHEE8syWCtalAUETKCNh5TpJotAA1MlHP9R6xyrd2nxXFOi7DtkeWGn9WCnIQuLqKtUMVIw7dbw3JOTLUZjoKB3B0ihXBIIQqRr01twiL5hGcEbyXWsIjllpprXOO0MJeQ78IGOqUBa8qfxBrjgqDZ1vRoVkcJTaGxnrampzRKkISNzLRJdDT6O8kOPx5HpdqAaX8tWwOZsHVzhWoorQbSWETpdCG9QmdxEjQdpaKw8LSIRMFrMrNhep12Q3EBvKkxabN%2FyQ1sCtpCAz390LAyE4fEMLTQBcAqfPAe8k1AiGzxxj6Xa%2BDjjTm5LWyYOrEeIooDGmGk3kBPi0BFxBqHNofOsLgA1bIhRywr&X-Amz-Signature=e3fc488e8b38e18a15b9d1e58038603c9b62ef90a04bd316acf1d65056fdfcc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXA27JF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDFHxkvp%2FF9%2FBEk%2F0WK5cjTdWmpN53fvN%2F95m2Za1jEgAiEA1keNrv1IKFm7bJ4CvBCRTs3OPDsduGVXCFsXUXi%2FesYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLxTgSnJjEXK8AlxeCrcAyPk8bSZ1j7tgHwJyHTn6qx3H41%2BElWIrbrKfIKjPE%2F5o7JMj8rXuEiDo7Vxor1d5KzgCB2T24gFbOjklO2YiyDFsaAYWQkvF2p6HtAeVxClrcXoRqojBAHYvDmn2WPTAsHAoUuzGI5kHC5vuA3jJKz5coUGLeSw6vUZbtD5bmADiGrG23bQY3HUIULpqYCdMYVJq2qUWmZ4RUhxbLVYHa0GK2h1fUhY%2FPuLiRhJmWhOxMGeGWifmYQ1tvllaRIE%2BPSC5uHlHYClDSNhHXD8sV%2FQXwcYwBWRHLPiUATDXWltkWNlWm8Z%2Bu99gnBv%2Fvs8hdDrTDue0%2Bt9Obj2Zr1NAbPPSTrIb1p2LwlHHoBzKbmJ4UaICZ4dLBsfh3svoshU3sxVphNdUz0nlwwM2tM2cwIJHoxSvtddgaA7PJUs8o%2BtyYaqisIqjmltRafc%2FVzrLkmXOxdqaVU0p0Wjv2X1WyqOzZFwuGXCnUPnOHQG%2B%2Bod6bMQ4TiuI2gS3dD%2F7BmHEE8syWCtalAUETKCNh5TpJotAA1MlHP9R6xyrd2nxXFOi7DtkeWGn9WCnIQuLqKtUMVIw7dbw3JOTLUZjoKB3B0ihXBIIQqRr01twiL5hGcEbyXWsIjllpprXOO0MJeQ78IGOqUBa8qfxBrjgqDZ1vRoVkcJTaGxnrampzRKkISNzLRJdDT6O8kOPx5HpdqAaX8tWwOZsHVzhWoorQbSWETpdCG9QmdxEjQdpaKw8LSIRMFrMrNhep12Q3EBvKkxabN%2FyQ1sCtpCAz390LAyE4fEMLTQBcAqfPAe8k1AiGzxxj6Xa%2BDjjTm5LWyYOrEeIooDGmGk3kBPi0BFxBqHNofOsLgA1bIhRywr&X-Amz-Signature=a0d6c444aa41451860d23dea55611cf5025b68ee4092501ad83006e421a7c4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXA27JF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDFHxkvp%2FF9%2FBEk%2F0WK5cjTdWmpN53fvN%2F95m2Za1jEgAiEA1keNrv1IKFm7bJ4CvBCRTs3OPDsduGVXCFsXUXi%2FesYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLxTgSnJjEXK8AlxeCrcAyPk8bSZ1j7tgHwJyHTn6qx3H41%2BElWIrbrKfIKjPE%2F5o7JMj8rXuEiDo7Vxor1d5KzgCB2T24gFbOjklO2YiyDFsaAYWQkvF2p6HtAeVxClrcXoRqojBAHYvDmn2WPTAsHAoUuzGI5kHC5vuA3jJKz5coUGLeSw6vUZbtD5bmADiGrG23bQY3HUIULpqYCdMYVJq2qUWmZ4RUhxbLVYHa0GK2h1fUhY%2FPuLiRhJmWhOxMGeGWifmYQ1tvllaRIE%2BPSC5uHlHYClDSNhHXD8sV%2FQXwcYwBWRHLPiUATDXWltkWNlWm8Z%2Bu99gnBv%2Fvs8hdDrTDue0%2Bt9Obj2Zr1NAbPPSTrIb1p2LwlHHoBzKbmJ4UaICZ4dLBsfh3svoshU3sxVphNdUz0nlwwM2tM2cwIJHoxSvtddgaA7PJUs8o%2BtyYaqisIqjmltRafc%2FVzrLkmXOxdqaVU0p0Wjv2X1WyqOzZFwuGXCnUPnOHQG%2B%2Bod6bMQ4TiuI2gS3dD%2F7BmHEE8syWCtalAUETKCNh5TpJotAA1MlHP9R6xyrd2nxXFOi7DtkeWGn9WCnIQuLqKtUMVIw7dbw3JOTLUZjoKB3B0ihXBIIQqRr01twiL5hGcEbyXWsIjllpprXOO0MJeQ78IGOqUBa8qfxBrjgqDZ1vRoVkcJTaGxnrampzRKkISNzLRJdDT6O8kOPx5HpdqAaX8tWwOZsHVzhWoorQbSWETpdCG9QmdxEjQdpaKw8LSIRMFrMrNhep12Q3EBvKkxabN%2FyQ1sCtpCAz390LAyE4fEMLTQBcAqfPAe8k1AiGzxxj6Xa%2BDjjTm5LWyYOrEeIooDGmGk3kBPi0BFxBqHNofOsLgA1bIhRywr&X-Amz-Signature=8d363edb292030309df1c48b8d639c64b81f8c9a4feda7f93e60bfe60cc44c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXA27JF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDFHxkvp%2FF9%2FBEk%2F0WK5cjTdWmpN53fvN%2F95m2Za1jEgAiEA1keNrv1IKFm7bJ4CvBCRTs3OPDsduGVXCFsXUXi%2FesYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLxTgSnJjEXK8AlxeCrcAyPk8bSZ1j7tgHwJyHTn6qx3H41%2BElWIrbrKfIKjPE%2F5o7JMj8rXuEiDo7Vxor1d5KzgCB2T24gFbOjklO2YiyDFsaAYWQkvF2p6HtAeVxClrcXoRqojBAHYvDmn2WPTAsHAoUuzGI5kHC5vuA3jJKz5coUGLeSw6vUZbtD5bmADiGrG23bQY3HUIULpqYCdMYVJq2qUWmZ4RUhxbLVYHa0GK2h1fUhY%2FPuLiRhJmWhOxMGeGWifmYQ1tvllaRIE%2BPSC5uHlHYClDSNhHXD8sV%2FQXwcYwBWRHLPiUATDXWltkWNlWm8Z%2Bu99gnBv%2Fvs8hdDrTDue0%2Bt9Obj2Zr1NAbPPSTrIb1p2LwlHHoBzKbmJ4UaICZ4dLBsfh3svoshU3sxVphNdUz0nlwwM2tM2cwIJHoxSvtddgaA7PJUs8o%2BtyYaqisIqjmltRafc%2FVzrLkmXOxdqaVU0p0Wjv2X1WyqOzZFwuGXCnUPnOHQG%2B%2Bod6bMQ4TiuI2gS3dD%2F7BmHEE8syWCtalAUETKCNh5TpJotAA1MlHP9R6xyrd2nxXFOi7DtkeWGn9WCnIQuLqKtUMVIw7dbw3JOTLUZjoKB3B0ihXBIIQqRr01twiL5hGcEbyXWsIjllpprXOO0MJeQ78IGOqUBa8qfxBrjgqDZ1vRoVkcJTaGxnrampzRKkISNzLRJdDT6O8kOPx5HpdqAaX8tWwOZsHVzhWoorQbSWETpdCG9QmdxEjQdpaKw8LSIRMFrMrNhep12Q3EBvKkxabN%2FyQ1sCtpCAz390LAyE4fEMLTQBcAqfPAe8k1AiGzxxj6Xa%2BDjjTm5LWyYOrEeIooDGmGk3kBPi0BFxBqHNofOsLgA1bIhRywr&X-Amz-Signature=75c0e79114667c725dd5df42112788537623fb3ee630849218b6ef93139063d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXA27JF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDFHxkvp%2FF9%2FBEk%2F0WK5cjTdWmpN53fvN%2F95m2Za1jEgAiEA1keNrv1IKFm7bJ4CvBCRTs3OPDsduGVXCFsXUXi%2FesYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLxTgSnJjEXK8AlxeCrcAyPk8bSZ1j7tgHwJyHTn6qx3H41%2BElWIrbrKfIKjPE%2F5o7JMj8rXuEiDo7Vxor1d5KzgCB2T24gFbOjklO2YiyDFsaAYWQkvF2p6HtAeVxClrcXoRqojBAHYvDmn2WPTAsHAoUuzGI5kHC5vuA3jJKz5coUGLeSw6vUZbtD5bmADiGrG23bQY3HUIULpqYCdMYVJq2qUWmZ4RUhxbLVYHa0GK2h1fUhY%2FPuLiRhJmWhOxMGeGWifmYQ1tvllaRIE%2BPSC5uHlHYClDSNhHXD8sV%2FQXwcYwBWRHLPiUATDXWltkWNlWm8Z%2Bu99gnBv%2Fvs8hdDrTDue0%2Bt9Obj2Zr1NAbPPSTrIb1p2LwlHHoBzKbmJ4UaICZ4dLBsfh3svoshU3sxVphNdUz0nlwwM2tM2cwIJHoxSvtddgaA7PJUs8o%2BtyYaqisIqjmltRafc%2FVzrLkmXOxdqaVU0p0Wjv2X1WyqOzZFwuGXCnUPnOHQG%2B%2Bod6bMQ4TiuI2gS3dD%2F7BmHEE8syWCtalAUETKCNh5TpJotAA1MlHP9R6xyrd2nxXFOi7DtkeWGn9WCnIQuLqKtUMVIw7dbw3JOTLUZjoKB3B0ihXBIIQqRr01twiL5hGcEbyXWsIjllpprXOO0MJeQ78IGOqUBa8qfxBrjgqDZ1vRoVkcJTaGxnrampzRKkISNzLRJdDT6O8kOPx5HpdqAaX8tWwOZsHVzhWoorQbSWETpdCG9QmdxEjQdpaKw8LSIRMFrMrNhep12Q3EBvKkxabN%2FyQ1sCtpCAz390LAyE4fEMLTQBcAqfPAe8k1AiGzxxj6Xa%2BDjjTm5LWyYOrEeIooDGmGk3kBPi0BFxBqHNofOsLgA1bIhRywr&X-Amz-Signature=1f4b0fa70b6039e4a0f64b24f4aaad1d20297e8809732be65cc1978c0fa02538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXA27JF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDFHxkvp%2FF9%2FBEk%2F0WK5cjTdWmpN53fvN%2F95m2Za1jEgAiEA1keNrv1IKFm7bJ4CvBCRTs3OPDsduGVXCFsXUXi%2FesYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLxTgSnJjEXK8AlxeCrcAyPk8bSZ1j7tgHwJyHTn6qx3H41%2BElWIrbrKfIKjPE%2F5o7JMj8rXuEiDo7Vxor1d5KzgCB2T24gFbOjklO2YiyDFsaAYWQkvF2p6HtAeVxClrcXoRqojBAHYvDmn2WPTAsHAoUuzGI5kHC5vuA3jJKz5coUGLeSw6vUZbtD5bmADiGrG23bQY3HUIULpqYCdMYVJq2qUWmZ4RUhxbLVYHa0GK2h1fUhY%2FPuLiRhJmWhOxMGeGWifmYQ1tvllaRIE%2BPSC5uHlHYClDSNhHXD8sV%2FQXwcYwBWRHLPiUATDXWltkWNlWm8Z%2Bu99gnBv%2Fvs8hdDrTDue0%2Bt9Obj2Zr1NAbPPSTrIb1p2LwlHHoBzKbmJ4UaICZ4dLBsfh3svoshU3sxVphNdUz0nlwwM2tM2cwIJHoxSvtddgaA7PJUs8o%2BtyYaqisIqjmltRafc%2FVzrLkmXOxdqaVU0p0Wjv2X1WyqOzZFwuGXCnUPnOHQG%2B%2Bod6bMQ4TiuI2gS3dD%2F7BmHEE8syWCtalAUETKCNh5TpJotAA1MlHP9R6xyrd2nxXFOi7DtkeWGn9WCnIQuLqKtUMVIw7dbw3JOTLUZjoKB3B0ihXBIIQqRr01twiL5hGcEbyXWsIjllpprXOO0MJeQ78IGOqUBa8qfxBrjgqDZ1vRoVkcJTaGxnrampzRKkISNzLRJdDT6O8kOPx5HpdqAaX8tWwOZsHVzhWoorQbSWETpdCG9QmdxEjQdpaKw8LSIRMFrMrNhep12Q3EBvKkxabN%2FyQ1sCtpCAz390LAyE4fEMLTQBcAqfPAe8k1AiGzxxj6Xa%2BDjjTm5LWyYOrEeIooDGmGk3kBPi0BFxBqHNofOsLgA1bIhRywr&X-Amz-Signature=2de9e26075ad496bd3f8f231f5f92699f13b87d78acb79f8f852571da2e6f372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
