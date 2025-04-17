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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHLHY3O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy35lc1nXaq8gYYSNg3W0TtNKJrb5V%2B24lQfV09GgFLQIgSksB6Uorjx8ufNW5TBys38KMnksCDw4jPRnO53ckSooq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFqdhIFSg1J%2BHEHyCyrcA6Szn0gSb%2BNGLW8L37cuSZmM7AwPSSJV2uxB6fvZk1mLzNmL5pPLABd38b4ohWfUPB1z7jLwLpjqNCMUDjVYsbV2tixn3GUvLKvqewxwewP6M7oR3CS0%2F7Q6oK%2Bd1ZOM6cyxE5LY3Gf1d00S6p4AcbXniipDFXfYEE%2F18%2BcH%2BKfD3JUAU4pLIvT3IyYI7B4QF0Q4gF50TTsO00KNt5lN0V95HsduE0Av%2BjUdpH1RNVOIB%2B0RQn%2Fcw4j5AKpptDxgY%2Bi5Yx%2BH3V1%2FTSJ3zEY1FrIy%2Fq6pUB2xM8llKY5UBS%2FcqJ%2Bzlx1A9LtHxd%2FE3AWUh0MYB12Bv2xWxm%2FQKxsJRpYY1dz8sf%2BDqJqebvx0ofcesq2TZxNGfb7%2B91lgeulWiCvM23k4WZrTvqfoNWye74iMsGUmFC8fbhjLm5GKxieAfBKIVyKiTSiTt5NRQSg8bBnRuy9hdiV8ehqoMsPGZjnu3ss3fpcg%2FTduWrk79j9i2sq7%2B7cLo4Uo67b3E6K7H7IZaqwOjRuoKlW6pt3CK8Ek243tK28VCmSCuLpvr2o%2FyrPmi8hHpb%2FrXMjMiEl%2FojZerYOoQOwFA8UK6rVXfUU1we4SXKvuWM2UI451vbr4hQ9jpFpz9x7ZBvI%2FMMTIgsAGOqUBSUJ7pCzEnTBvcXb7WplVCzRmDMmKEEB7bgo4%2FvBdNyJESRFQksCHsC87OOB57%2Fl%2Bjo74WRNEwbWgBIbQ1ppx7X%2Bzr1%2B21%2F5ivqTc%2Bm89OsvsMU6M19jpzGYndNmIKZSHhpxYuChXf1AvKAfqq4LN5mbo1Gttbp8ISQE9r3DegKi13mjoEXZ2iGfBYxImZ4VSlt0spBYf1VfTceQfU%2BiK4viX6Voo&X-Amz-Signature=58da0732066cff38e9470797578124e16163f39760d9dd36944ba0cdea13619a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHLHY3O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy35lc1nXaq8gYYSNg3W0TtNKJrb5V%2B24lQfV09GgFLQIgSksB6Uorjx8ufNW5TBys38KMnksCDw4jPRnO53ckSooq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFqdhIFSg1J%2BHEHyCyrcA6Szn0gSb%2BNGLW8L37cuSZmM7AwPSSJV2uxB6fvZk1mLzNmL5pPLABd38b4ohWfUPB1z7jLwLpjqNCMUDjVYsbV2tixn3GUvLKvqewxwewP6M7oR3CS0%2F7Q6oK%2Bd1ZOM6cyxE5LY3Gf1d00S6p4AcbXniipDFXfYEE%2F18%2BcH%2BKfD3JUAU4pLIvT3IyYI7B4QF0Q4gF50TTsO00KNt5lN0V95HsduE0Av%2BjUdpH1RNVOIB%2B0RQn%2Fcw4j5AKpptDxgY%2Bi5Yx%2BH3V1%2FTSJ3zEY1FrIy%2Fq6pUB2xM8llKY5UBS%2FcqJ%2Bzlx1A9LtHxd%2FE3AWUh0MYB12Bv2xWxm%2FQKxsJRpYY1dz8sf%2BDqJqebvx0ofcesq2TZxNGfb7%2B91lgeulWiCvM23k4WZrTvqfoNWye74iMsGUmFC8fbhjLm5GKxieAfBKIVyKiTSiTt5NRQSg8bBnRuy9hdiV8ehqoMsPGZjnu3ss3fpcg%2FTduWrk79j9i2sq7%2B7cLo4Uo67b3E6K7H7IZaqwOjRuoKlW6pt3CK8Ek243tK28VCmSCuLpvr2o%2FyrPmi8hHpb%2FrXMjMiEl%2FojZerYOoQOwFA8UK6rVXfUU1we4SXKvuWM2UI451vbr4hQ9jpFpz9x7ZBvI%2FMMTIgsAGOqUBSUJ7pCzEnTBvcXb7WplVCzRmDMmKEEB7bgo4%2FvBdNyJESRFQksCHsC87OOB57%2Fl%2Bjo74WRNEwbWgBIbQ1ppx7X%2Bzr1%2B21%2F5ivqTc%2Bm89OsvsMU6M19jpzGYndNmIKZSHhpxYuChXf1AvKAfqq4LN5mbo1Gttbp8ISQE9r3DegKi13mjoEXZ2iGfBYxImZ4VSlt0spBYf1VfTceQfU%2BiK4viX6Voo&X-Amz-Signature=b8cc47472317f029ad108833ecf2b6d0637e3bce1d1430e0760166e224140b92&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHLHY3O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy35lc1nXaq8gYYSNg3W0TtNKJrb5V%2B24lQfV09GgFLQIgSksB6Uorjx8ufNW5TBys38KMnksCDw4jPRnO53ckSooq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFqdhIFSg1J%2BHEHyCyrcA6Szn0gSb%2BNGLW8L37cuSZmM7AwPSSJV2uxB6fvZk1mLzNmL5pPLABd38b4ohWfUPB1z7jLwLpjqNCMUDjVYsbV2tixn3GUvLKvqewxwewP6M7oR3CS0%2F7Q6oK%2Bd1ZOM6cyxE5LY3Gf1d00S6p4AcbXniipDFXfYEE%2F18%2BcH%2BKfD3JUAU4pLIvT3IyYI7B4QF0Q4gF50TTsO00KNt5lN0V95HsduE0Av%2BjUdpH1RNVOIB%2B0RQn%2Fcw4j5AKpptDxgY%2Bi5Yx%2BH3V1%2FTSJ3zEY1FrIy%2Fq6pUB2xM8llKY5UBS%2FcqJ%2Bzlx1A9LtHxd%2FE3AWUh0MYB12Bv2xWxm%2FQKxsJRpYY1dz8sf%2BDqJqebvx0ofcesq2TZxNGfb7%2B91lgeulWiCvM23k4WZrTvqfoNWye74iMsGUmFC8fbhjLm5GKxieAfBKIVyKiTSiTt5NRQSg8bBnRuy9hdiV8ehqoMsPGZjnu3ss3fpcg%2FTduWrk79j9i2sq7%2B7cLo4Uo67b3E6K7H7IZaqwOjRuoKlW6pt3CK8Ek243tK28VCmSCuLpvr2o%2FyrPmi8hHpb%2FrXMjMiEl%2FojZerYOoQOwFA8UK6rVXfUU1we4SXKvuWM2UI451vbr4hQ9jpFpz9x7ZBvI%2FMMTIgsAGOqUBSUJ7pCzEnTBvcXb7WplVCzRmDMmKEEB7bgo4%2FvBdNyJESRFQksCHsC87OOB57%2Fl%2Bjo74WRNEwbWgBIbQ1ppx7X%2Bzr1%2B21%2F5ivqTc%2Bm89OsvsMU6M19jpzGYndNmIKZSHhpxYuChXf1AvKAfqq4LN5mbo1Gttbp8ISQE9r3DegKi13mjoEXZ2iGfBYxImZ4VSlt0spBYf1VfTceQfU%2BiK4viX6Voo&X-Amz-Signature=570dbf739e2d279e57a83cadd7dceb180f0e1896b91991295c5ca2a64dec0b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHLHY3O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy35lc1nXaq8gYYSNg3W0TtNKJrb5V%2B24lQfV09GgFLQIgSksB6Uorjx8ufNW5TBys38KMnksCDw4jPRnO53ckSooq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFqdhIFSg1J%2BHEHyCyrcA6Szn0gSb%2BNGLW8L37cuSZmM7AwPSSJV2uxB6fvZk1mLzNmL5pPLABd38b4ohWfUPB1z7jLwLpjqNCMUDjVYsbV2tixn3GUvLKvqewxwewP6M7oR3CS0%2F7Q6oK%2Bd1ZOM6cyxE5LY3Gf1d00S6p4AcbXniipDFXfYEE%2F18%2BcH%2BKfD3JUAU4pLIvT3IyYI7B4QF0Q4gF50TTsO00KNt5lN0V95HsduE0Av%2BjUdpH1RNVOIB%2B0RQn%2Fcw4j5AKpptDxgY%2Bi5Yx%2BH3V1%2FTSJ3zEY1FrIy%2Fq6pUB2xM8llKY5UBS%2FcqJ%2Bzlx1A9LtHxd%2FE3AWUh0MYB12Bv2xWxm%2FQKxsJRpYY1dz8sf%2BDqJqebvx0ofcesq2TZxNGfb7%2B91lgeulWiCvM23k4WZrTvqfoNWye74iMsGUmFC8fbhjLm5GKxieAfBKIVyKiTSiTt5NRQSg8bBnRuy9hdiV8ehqoMsPGZjnu3ss3fpcg%2FTduWrk79j9i2sq7%2B7cLo4Uo67b3E6K7H7IZaqwOjRuoKlW6pt3CK8Ek243tK28VCmSCuLpvr2o%2FyrPmi8hHpb%2FrXMjMiEl%2FojZerYOoQOwFA8UK6rVXfUU1we4SXKvuWM2UI451vbr4hQ9jpFpz9x7ZBvI%2FMMTIgsAGOqUBSUJ7pCzEnTBvcXb7WplVCzRmDMmKEEB7bgo4%2FvBdNyJESRFQksCHsC87OOB57%2Fl%2Bjo74WRNEwbWgBIbQ1ppx7X%2Bzr1%2B21%2F5ivqTc%2Bm89OsvsMU6M19jpzGYndNmIKZSHhpxYuChXf1AvKAfqq4LN5mbo1Gttbp8ISQE9r3DegKi13mjoEXZ2iGfBYxImZ4VSlt0spBYf1VfTceQfU%2BiK4viX6Voo&X-Amz-Signature=28db75be422b289a7091c339bc8f21ff657159d49d87e56408783f25f6028950&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHLHY3O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy35lc1nXaq8gYYSNg3W0TtNKJrb5V%2B24lQfV09GgFLQIgSksB6Uorjx8ufNW5TBys38KMnksCDw4jPRnO53ckSooq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFqdhIFSg1J%2BHEHyCyrcA6Szn0gSb%2BNGLW8L37cuSZmM7AwPSSJV2uxB6fvZk1mLzNmL5pPLABd38b4ohWfUPB1z7jLwLpjqNCMUDjVYsbV2tixn3GUvLKvqewxwewP6M7oR3CS0%2F7Q6oK%2Bd1ZOM6cyxE5LY3Gf1d00S6p4AcbXniipDFXfYEE%2F18%2BcH%2BKfD3JUAU4pLIvT3IyYI7B4QF0Q4gF50TTsO00KNt5lN0V95HsduE0Av%2BjUdpH1RNVOIB%2B0RQn%2Fcw4j5AKpptDxgY%2Bi5Yx%2BH3V1%2FTSJ3zEY1FrIy%2Fq6pUB2xM8llKY5UBS%2FcqJ%2Bzlx1A9LtHxd%2FE3AWUh0MYB12Bv2xWxm%2FQKxsJRpYY1dz8sf%2BDqJqebvx0ofcesq2TZxNGfb7%2B91lgeulWiCvM23k4WZrTvqfoNWye74iMsGUmFC8fbhjLm5GKxieAfBKIVyKiTSiTt5NRQSg8bBnRuy9hdiV8ehqoMsPGZjnu3ss3fpcg%2FTduWrk79j9i2sq7%2B7cLo4Uo67b3E6K7H7IZaqwOjRuoKlW6pt3CK8Ek243tK28VCmSCuLpvr2o%2FyrPmi8hHpb%2FrXMjMiEl%2FojZerYOoQOwFA8UK6rVXfUU1we4SXKvuWM2UI451vbr4hQ9jpFpz9x7ZBvI%2FMMTIgsAGOqUBSUJ7pCzEnTBvcXb7WplVCzRmDMmKEEB7bgo4%2FvBdNyJESRFQksCHsC87OOB57%2Fl%2Bjo74WRNEwbWgBIbQ1ppx7X%2Bzr1%2B21%2F5ivqTc%2Bm89OsvsMU6M19jpzGYndNmIKZSHhpxYuChXf1AvKAfqq4LN5mbo1Gttbp8ISQE9r3DegKi13mjoEXZ2iGfBYxImZ4VSlt0spBYf1VfTceQfU%2BiK4viX6Voo&X-Amz-Signature=8e6bebb724687ac66d721ca38138e133207904589a61581cc3d00a2df1c736ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHLHY3O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy35lc1nXaq8gYYSNg3W0TtNKJrb5V%2B24lQfV09GgFLQIgSksB6Uorjx8ufNW5TBys38KMnksCDw4jPRnO53ckSooq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFqdhIFSg1J%2BHEHyCyrcA6Szn0gSb%2BNGLW8L37cuSZmM7AwPSSJV2uxB6fvZk1mLzNmL5pPLABd38b4ohWfUPB1z7jLwLpjqNCMUDjVYsbV2tixn3GUvLKvqewxwewP6M7oR3CS0%2F7Q6oK%2Bd1ZOM6cyxE5LY3Gf1d00S6p4AcbXniipDFXfYEE%2F18%2BcH%2BKfD3JUAU4pLIvT3IyYI7B4QF0Q4gF50TTsO00KNt5lN0V95HsduE0Av%2BjUdpH1RNVOIB%2B0RQn%2Fcw4j5AKpptDxgY%2Bi5Yx%2BH3V1%2FTSJ3zEY1FrIy%2Fq6pUB2xM8llKY5UBS%2FcqJ%2Bzlx1A9LtHxd%2FE3AWUh0MYB12Bv2xWxm%2FQKxsJRpYY1dz8sf%2BDqJqebvx0ofcesq2TZxNGfb7%2B91lgeulWiCvM23k4WZrTvqfoNWye74iMsGUmFC8fbhjLm5GKxieAfBKIVyKiTSiTt5NRQSg8bBnRuy9hdiV8ehqoMsPGZjnu3ss3fpcg%2FTduWrk79j9i2sq7%2B7cLo4Uo67b3E6K7H7IZaqwOjRuoKlW6pt3CK8Ek243tK28VCmSCuLpvr2o%2FyrPmi8hHpb%2FrXMjMiEl%2FojZerYOoQOwFA8UK6rVXfUU1we4SXKvuWM2UI451vbr4hQ9jpFpz9x7ZBvI%2FMMTIgsAGOqUBSUJ7pCzEnTBvcXb7WplVCzRmDMmKEEB7bgo4%2FvBdNyJESRFQksCHsC87OOB57%2Fl%2Bjo74WRNEwbWgBIbQ1ppx7X%2Bzr1%2B21%2F5ivqTc%2Bm89OsvsMU6M19jpzGYndNmIKZSHhpxYuChXf1AvKAfqq4LN5mbo1Gttbp8ISQE9r3DegKi13mjoEXZ2iGfBYxImZ4VSlt0spBYf1VfTceQfU%2BiK4viX6Voo&X-Amz-Signature=9bef187a437d742a1a2e475d10c4445d5896b4b137671f8045c91420ad650b31&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CHLHY3O%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy35lc1nXaq8gYYSNg3W0TtNKJrb5V%2B24lQfV09GgFLQIgSksB6Uorjx8ufNW5TBys38KMnksCDw4jPRnO53ckSooq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFqdhIFSg1J%2BHEHyCyrcA6Szn0gSb%2BNGLW8L37cuSZmM7AwPSSJV2uxB6fvZk1mLzNmL5pPLABd38b4ohWfUPB1z7jLwLpjqNCMUDjVYsbV2tixn3GUvLKvqewxwewP6M7oR3CS0%2F7Q6oK%2Bd1ZOM6cyxE5LY3Gf1d00S6p4AcbXniipDFXfYEE%2F18%2BcH%2BKfD3JUAU4pLIvT3IyYI7B4QF0Q4gF50TTsO00KNt5lN0V95HsduE0Av%2BjUdpH1RNVOIB%2B0RQn%2Fcw4j5AKpptDxgY%2Bi5Yx%2BH3V1%2FTSJ3zEY1FrIy%2Fq6pUB2xM8llKY5UBS%2FcqJ%2Bzlx1A9LtHxd%2FE3AWUh0MYB12Bv2xWxm%2FQKxsJRpYY1dz8sf%2BDqJqebvx0ofcesq2TZxNGfb7%2B91lgeulWiCvM23k4WZrTvqfoNWye74iMsGUmFC8fbhjLm5GKxieAfBKIVyKiTSiTt5NRQSg8bBnRuy9hdiV8ehqoMsPGZjnu3ss3fpcg%2FTduWrk79j9i2sq7%2B7cLo4Uo67b3E6K7H7IZaqwOjRuoKlW6pt3CK8Ek243tK28VCmSCuLpvr2o%2FyrPmi8hHpb%2FrXMjMiEl%2FojZerYOoQOwFA8UK6rVXfUU1we4SXKvuWM2UI451vbr4hQ9jpFpz9x7ZBvI%2FMMTIgsAGOqUBSUJ7pCzEnTBvcXb7WplVCzRmDMmKEEB7bgo4%2FvBdNyJESRFQksCHsC87OOB57%2Fl%2Bjo74WRNEwbWgBIbQ1ppx7X%2Bzr1%2B21%2F5ivqTc%2Bm89OsvsMU6M19jpzGYndNmIKZSHhpxYuChXf1AvKAfqq4LN5mbo1Gttbp8ISQE9r3DegKi13mjoEXZ2iGfBYxImZ4VSlt0spBYf1VfTceQfU%2BiK4viX6Voo&X-Amz-Signature=836513dda8a3f7312925ed1ac03e0bd3709a773aa95d0219ddd015e2062302f5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
