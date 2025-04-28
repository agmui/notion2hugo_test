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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEA6SCMX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEaTLlOhVLY7XLXECzL2JtfEfPISxs%2FQvdlObN%2B5n%2FVQIgSG73J7GeXGFc44ZDbIiSk%2BvMFIiF1BROj0Q%2FpIhuC3wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPIM2okKfn%2BS9h6dOSrcA5ozykG8GwFruKDzSQXzeFQtJWLqRuuhiGH%2FYDSg1ng%2F9nFukf8YKjiCqCONVUglExCmRZkBe63p00mCxtX%2BNqJo779WMNNjr%2F0Yps2c%2BKc2zFGmP9aP%2Bjaxj0f%2BwE57fPzY2I4XfyHG1n4astbJfUWo71mntDvKowbC5a4mP8iO%2BcrGx%2FMQ%2BGypbQjdIzeZ1a9iAKzKNbYfHlJb45UzKXm8E6T0kQUZ5%2BcZ0pPETn%2BLMbiTP2iMPh%2B%2FQEgTG0dlCASQe6fLi%2FDFCmRx45zgqtIiR3jcu4nAnWE2Lk9jjaEJTptsvaWLmA3%2F8KJitYfCvTGK5quhQkIKAD2xESrtLTk8KnOt%2BXEh428jSC9pZFB0RcamZ8jRP3rpwEv1IMr9Eycy%2Fz0aV7enzwX%2FTjwka1gGAHR25uL8FEmZCychm1tSzYQvTSPK%2Fpt80fB3tZEowqWT0Hk5gax1N%2FA9tY1vmLHilnzp76QsfTv8kJ7MDZ6895ow6Cf214ZoT0geXK7CRxlbZ0LytBN6RCowBtbquLg58NEM1Y%2Flb418l%2BQLjt8GpPvXEcuN2yUwncN1by05pNgGmJLmFa2pCXCR%2Bs6kVsyjB%2BeVDjDFwAcyHwER1%2B0UhVy0wd1Cta1XC%2FrKMPqhu8AGOqUBMaYidrZtEX5GLBH7Ywl4m7gLEUX%2BwqoiKasHtocK17Z%2Bm1qgSBjLvniaBxSyEcQycQyuCxEOKvDlURMOdDj%2B93s3G3GfkSuYK0bv4jQ8%2F1P0WTfFsczI49eFX6ZLOGxdnVaVb3DJscwe5ulqxy1l%2F%2BmFWU3kMZf%2BGqCpFePEfhrWKF9VTXyALYqNhZHLDvwYyM%2FcZyRB3fktI8JEQHOYoH6eRTy2&X-Amz-Signature=45b156ad0176da8f951a264b9fe4f2d3a66fea1caa66792b870758c128f9c621&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEA6SCMX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEaTLlOhVLY7XLXECzL2JtfEfPISxs%2FQvdlObN%2B5n%2FVQIgSG73J7GeXGFc44ZDbIiSk%2BvMFIiF1BROj0Q%2FpIhuC3wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPIM2okKfn%2BS9h6dOSrcA5ozykG8GwFruKDzSQXzeFQtJWLqRuuhiGH%2FYDSg1ng%2F9nFukf8YKjiCqCONVUglExCmRZkBe63p00mCxtX%2BNqJo779WMNNjr%2F0Yps2c%2BKc2zFGmP9aP%2Bjaxj0f%2BwE57fPzY2I4XfyHG1n4astbJfUWo71mntDvKowbC5a4mP8iO%2BcrGx%2FMQ%2BGypbQjdIzeZ1a9iAKzKNbYfHlJb45UzKXm8E6T0kQUZ5%2BcZ0pPETn%2BLMbiTP2iMPh%2B%2FQEgTG0dlCASQe6fLi%2FDFCmRx45zgqtIiR3jcu4nAnWE2Lk9jjaEJTptsvaWLmA3%2F8KJitYfCvTGK5quhQkIKAD2xESrtLTk8KnOt%2BXEh428jSC9pZFB0RcamZ8jRP3rpwEv1IMr9Eycy%2Fz0aV7enzwX%2FTjwka1gGAHR25uL8FEmZCychm1tSzYQvTSPK%2Fpt80fB3tZEowqWT0Hk5gax1N%2FA9tY1vmLHilnzp76QsfTv8kJ7MDZ6895ow6Cf214ZoT0geXK7CRxlbZ0LytBN6RCowBtbquLg58NEM1Y%2Flb418l%2BQLjt8GpPvXEcuN2yUwncN1by05pNgGmJLmFa2pCXCR%2Bs6kVsyjB%2BeVDjDFwAcyHwER1%2B0UhVy0wd1Cta1XC%2FrKMPqhu8AGOqUBMaYidrZtEX5GLBH7Ywl4m7gLEUX%2BwqoiKasHtocK17Z%2Bm1qgSBjLvniaBxSyEcQycQyuCxEOKvDlURMOdDj%2B93s3G3GfkSuYK0bv4jQ8%2F1P0WTfFsczI49eFX6ZLOGxdnVaVb3DJscwe5ulqxy1l%2F%2BmFWU3kMZf%2BGqCpFePEfhrWKF9VTXyALYqNhZHLDvwYyM%2FcZyRB3fktI8JEQHOYoH6eRTy2&X-Amz-Signature=a82f56927f00043268bedc39b0e96a6477036a06e9fc2ac91b934f9755236089&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEA6SCMX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEaTLlOhVLY7XLXECzL2JtfEfPISxs%2FQvdlObN%2B5n%2FVQIgSG73J7GeXGFc44ZDbIiSk%2BvMFIiF1BROj0Q%2FpIhuC3wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPIM2okKfn%2BS9h6dOSrcA5ozykG8GwFruKDzSQXzeFQtJWLqRuuhiGH%2FYDSg1ng%2F9nFukf8YKjiCqCONVUglExCmRZkBe63p00mCxtX%2BNqJo779WMNNjr%2F0Yps2c%2BKc2zFGmP9aP%2Bjaxj0f%2BwE57fPzY2I4XfyHG1n4astbJfUWo71mntDvKowbC5a4mP8iO%2BcrGx%2FMQ%2BGypbQjdIzeZ1a9iAKzKNbYfHlJb45UzKXm8E6T0kQUZ5%2BcZ0pPETn%2BLMbiTP2iMPh%2B%2FQEgTG0dlCASQe6fLi%2FDFCmRx45zgqtIiR3jcu4nAnWE2Lk9jjaEJTptsvaWLmA3%2F8KJitYfCvTGK5quhQkIKAD2xESrtLTk8KnOt%2BXEh428jSC9pZFB0RcamZ8jRP3rpwEv1IMr9Eycy%2Fz0aV7enzwX%2FTjwka1gGAHR25uL8FEmZCychm1tSzYQvTSPK%2Fpt80fB3tZEowqWT0Hk5gax1N%2FA9tY1vmLHilnzp76QsfTv8kJ7MDZ6895ow6Cf214ZoT0geXK7CRxlbZ0LytBN6RCowBtbquLg58NEM1Y%2Flb418l%2BQLjt8GpPvXEcuN2yUwncN1by05pNgGmJLmFa2pCXCR%2Bs6kVsyjB%2BeVDjDFwAcyHwER1%2B0UhVy0wd1Cta1XC%2FrKMPqhu8AGOqUBMaYidrZtEX5GLBH7Ywl4m7gLEUX%2BwqoiKasHtocK17Z%2Bm1qgSBjLvniaBxSyEcQycQyuCxEOKvDlURMOdDj%2B93s3G3GfkSuYK0bv4jQ8%2F1P0WTfFsczI49eFX6ZLOGxdnVaVb3DJscwe5ulqxy1l%2F%2BmFWU3kMZf%2BGqCpFePEfhrWKF9VTXyALYqNhZHLDvwYyM%2FcZyRB3fktI8JEQHOYoH6eRTy2&X-Amz-Signature=eda42dabbc99e246490307d2609addc3f481b4d02f142085367d7211e1abe5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEA6SCMX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEaTLlOhVLY7XLXECzL2JtfEfPISxs%2FQvdlObN%2B5n%2FVQIgSG73J7GeXGFc44ZDbIiSk%2BvMFIiF1BROj0Q%2FpIhuC3wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPIM2okKfn%2BS9h6dOSrcA5ozykG8GwFruKDzSQXzeFQtJWLqRuuhiGH%2FYDSg1ng%2F9nFukf8YKjiCqCONVUglExCmRZkBe63p00mCxtX%2BNqJo779WMNNjr%2F0Yps2c%2BKc2zFGmP9aP%2Bjaxj0f%2BwE57fPzY2I4XfyHG1n4astbJfUWo71mntDvKowbC5a4mP8iO%2BcrGx%2FMQ%2BGypbQjdIzeZ1a9iAKzKNbYfHlJb45UzKXm8E6T0kQUZ5%2BcZ0pPETn%2BLMbiTP2iMPh%2B%2FQEgTG0dlCASQe6fLi%2FDFCmRx45zgqtIiR3jcu4nAnWE2Lk9jjaEJTptsvaWLmA3%2F8KJitYfCvTGK5quhQkIKAD2xESrtLTk8KnOt%2BXEh428jSC9pZFB0RcamZ8jRP3rpwEv1IMr9Eycy%2Fz0aV7enzwX%2FTjwka1gGAHR25uL8FEmZCychm1tSzYQvTSPK%2Fpt80fB3tZEowqWT0Hk5gax1N%2FA9tY1vmLHilnzp76QsfTv8kJ7MDZ6895ow6Cf214ZoT0geXK7CRxlbZ0LytBN6RCowBtbquLg58NEM1Y%2Flb418l%2BQLjt8GpPvXEcuN2yUwncN1by05pNgGmJLmFa2pCXCR%2Bs6kVsyjB%2BeVDjDFwAcyHwER1%2B0UhVy0wd1Cta1XC%2FrKMPqhu8AGOqUBMaYidrZtEX5GLBH7Ywl4m7gLEUX%2BwqoiKasHtocK17Z%2Bm1qgSBjLvniaBxSyEcQycQyuCxEOKvDlURMOdDj%2B93s3G3GfkSuYK0bv4jQ8%2F1P0WTfFsczI49eFX6ZLOGxdnVaVb3DJscwe5ulqxy1l%2F%2BmFWU3kMZf%2BGqCpFePEfhrWKF9VTXyALYqNhZHLDvwYyM%2FcZyRB3fktI8JEQHOYoH6eRTy2&X-Amz-Signature=af0cb3c8e3362de008cd12396bb15ba99f64ebdf9ef26738b21be7b0d8cfa686&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEA6SCMX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEaTLlOhVLY7XLXECzL2JtfEfPISxs%2FQvdlObN%2B5n%2FVQIgSG73J7GeXGFc44ZDbIiSk%2BvMFIiF1BROj0Q%2FpIhuC3wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPIM2okKfn%2BS9h6dOSrcA5ozykG8GwFruKDzSQXzeFQtJWLqRuuhiGH%2FYDSg1ng%2F9nFukf8YKjiCqCONVUglExCmRZkBe63p00mCxtX%2BNqJo779WMNNjr%2F0Yps2c%2BKc2zFGmP9aP%2Bjaxj0f%2BwE57fPzY2I4XfyHG1n4astbJfUWo71mntDvKowbC5a4mP8iO%2BcrGx%2FMQ%2BGypbQjdIzeZ1a9iAKzKNbYfHlJb45UzKXm8E6T0kQUZ5%2BcZ0pPETn%2BLMbiTP2iMPh%2B%2FQEgTG0dlCASQe6fLi%2FDFCmRx45zgqtIiR3jcu4nAnWE2Lk9jjaEJTptsvaWLmA3%2F8KJitYfCvTGK5quhQkIKAD2xESrtLTk8KnOt%2BXEh428jSC9pZFB0RcamZ8jRP3rpwEv1IMr9Eycy%2Fz0aV7enzwX%2FTjwka1gGAHR25uL8FEmZCychm1tSzYQvTSPK%2Fpt80fB3tZEowqWT0Hk5gax1N%2FA9tY1vmLHilnzp76QsfTv8kJ7MDZ6895ow6Cf214ZoT0geXK7CRxlbZ0LytBN6RCowBtbquLg58NEM1Y%2Flb418l%2BQLjt8GpPvXEcuN2yUwncN1by05pNgGmJLmFa2pCXCR%2Bs6kVsyjB%2BeVDjDFwAcyHwER1%2B0UhVy0wd1Cta1XC%2FrKMPqhu8AGOqUBMaYidrZtEX5GLBH7Ywl4m7gLEUX%2BwqoiKasHtocK17Z%2Bm1qgSBjLvniaBxSyEcQycQyuCxEOKvDlURMOdDj%2B93s3G3GfkSuYK0bv4jQ8%2F1P0WTfFsczI49eFX6ZLOGxdnVaVb3DJscwe5ulqxy1l%2F%2BmFWU3kMZf%2BGqCpFePEfhrWKF9VTXyALYqNhZHLDvwYyM%2FcZyRB3fktI8JEQHOYoH6eRTy2&X-Amz-Signature=743cfd17df97f42f1f4ba3b635a794ca9fbbbd23eccd0261b546659ea8235d74&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEA6SCMX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEaTLlOhVLY7XLXECzL2JtfEfPISxs%2FQvdlObN%2B5n%2FVQIgSG73J7GeXGFc44ZDbIiSk%2BvMFIiF1BROj0Q%2FpIhuC3wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPIM2okKfn%2BS9h6dOSrcA5ozykG8GwFruKDzSQXzeFQtJWLqRuuhiGH%2FYDSg1ng%2F9nFukf8YKjiCqCONVUglExCmRZkBe63p00mCxtX%2BNqJo779WMNNjr%2F0Yps2c%2BKc2zFGmP9aP%2Bjaxj0f%2BwE57fPzY2I4XfyHG1n4astbJfUWo71mntDvKowbC5a4mP8iO%2BcrGx%2FMQ%2BGypbQjdIzeZ1a9iAKzKNbYfHlJb45UzKXm8E6T0kQUZ5%2BcZ0pPETn%2BLMbiTP2iMPh%2B%2FQEgTG0dlCASQe6fLi%2FDFCmRx45zgqtIiR3jcu4nAnWE2Lk9jjaEJTptsvaWLmA3%2F8KJitYfCvTGK5quhQkIKAD2xESrtLTk8KnOt%2BXEh428jSC9pZFB0RcamZ8jRP3rpwEv1IMr9Eycy%2Fz0aV7enzwX%2FTjwka1gGAHR25uL8FEmZCychm1tSzYQvTSPK%2Fpt80fB3tZEowqWT0Hk5gax1N%2FA9tY1vmLHilnzp76QsfTv8kJ7MDZ6895ow6Cf214ZoT0geXK7CRxlbZ0LytBN6RCowBtbquLg58NEM1Y%2Flb418l%2BQLjt8GpPvXEcuN2yUwncN1by05pNgGmJLmFa2pCXCR%2Bs6kVsyjB%2BeVDjDFwAcyHwER1%2B0UhVy0wd1Cta1XC%2FrKMPqhu8AGOqUBMaYidrZtEX5GLBH7Ywl4m7gLEUX%2BwqoiKasHtocK17Z%2Bm1qgSBjLvniaBxSyEcQycQyuCxEOKvDlURMOdDj%2B93s3G3GfkSuYK0bv4jQ8%2F1P0WTfFsczI49eFX6ZLOGxdnVaVb3DJscwe5ulqxy1l%2F%2BmFWU3kMZf%2BGqCpFePEfhrWKF9VTXyALYqNhZHLDvwYyM%2FcZyRB3fktI8JEQHOYoH6eRTy2&X-Amz-Signature=ad115923493788268795f8bb4cf5d40a6b0ccb3d6a999835e457c127aaf4ad05&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEA6SCMX%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEaTLlOhVLY7XLXECzL2JtfEfPISxs%2FQvdlObN%2B5n%2FVQIgSG73J7GeXGFc44ZDbIiSk%2BvMFIiF1BROj0Q%2FpIhuC3wq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPIM2okKfn%2BS9h6dOSrcA5ozykG8GwFruKDzSQXzeFQtJWLqRuuhiGH%2FYDSg1ng%2F9nFukf8YKjiCqCONVUglExCmRZkBe63p00mCxtX%2BNqJo779WMNNjr%2F0Yps2c%2BKc2zFGmP9aP%2Bjaxj0f%2BwE57fPzY2I4XfyHG1n4astbJfUWo71mntDvKowbC5a4mP8iO%2BcrGx%2FMQ%2BGypbQjdIzeZ1a9iAKzKNbYfHlJb45UzKXm8E6T0kQUZ5%2BcZ0pPETn%2BLMbiTP2iMPh%2B%2FQEgTG0dlCASQe6fLi%2FDFCmRx45zgqtIiR3jcu4nAnWE2Lk9jjaEJTptsvaWLmA3%2F8KJitYfCvTGK5quhQkIKAD2xESrtLTk8KnOt%2BXEh428jSC9pZFB0RcamZ8jRP3rpwEv1IMr9Eycy%2Fz0aV7enzwX%2FTjwka1gGAHR25uL8FEmZCychm1tSzYQvTSPK%2Fpt80fB3tZEowqWT0Hk5gax1N%2FA9tY1vmLHilnzp76QsfTv8kJ7MDZ6895ow6Cf214ZoT0geXK7CRxlbZ0LytBN6RCowBtbquLg58NEM1Y%2Flb418l%2BQLjt8GpPvXEcuN2yUwncN1by05pNgGmJLmFa2pCXCR%2Bs6kVsyjB%2BeVDjDFwAcyHwER1%2B0UhVy0wd1Cta1XC%2FrKMPqhu8AGOqUBMaYidrZtEX5GLBH7Ywl4m7gLEUX%2BwqoiKasHtocK17Z%2Bm1qgSBjLvniaBxSyEcQycQyuCxEOKvDlURMOdDj%2B93s3G3GfkSuYK0bv4jQ8%2F1P0WTfFsczI49eFX6ZLOGxdnVaVb3DJscwe5ulqxy1l%2F%2BmFWU3kMZf%2BGqCpFePEfhrWKF9VTXyALYqNhZHLDvwYyM%2FcZyRB3fktI8JEQHOYoH6eRTy2&X-Amz-Signature=51688625f0ff469c74fe6e734025206ddfd732375df2007524a64cf39861adc8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
