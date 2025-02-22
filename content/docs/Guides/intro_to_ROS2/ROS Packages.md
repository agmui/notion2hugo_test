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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLL3M2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPRXsoyrhzRPsl73QSl7%2FE5%2Flwk%2FY%2BUP1BHcos%2FLBxDAiBHuM7%2Bc3aWtNbPtJw3XGQ3KuRZazE%2B1WPNKsphi26uXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYU5Fhl1cF2E6AueKtwDy48Zinns1IoW77KTT26H%2B40a8ZZmuZeA34OrYQNmYdwp%2FVR%2BhS040IX%2Be%2BaHm1ehvo886oQQ8e5g%2FVlxpffZsqNb8lDy2Dp%2BMu47oVqkihL4opuIsdf%2F44svMOjJlFYnRor63Nb3Obv0z3bTw2bcgA4gq3bJhy3juk75LXgge33aOEeELsWlO7yr%2FOSnaqTa90XRfC1K6Q%2FGoomYBq9PLrDPX0ZN0%2BFUkD69CKmOPLmMjgCsz4elJIkPMjaXuUHwE72GWMlE1Mx4%2BsOy40ACPGjmv9UBlwRvrvAt4Nm5L%2BMAtDRlaf56qsuM4xfaFlnKj125Anzd%2BIPMaBEJglrDlNNxQc7vUmvgTjnuwAjpy8asT10iao9Saq41KyUTe81cpdfhyhrW7Qj8lG2X2s7WIuu3pzZPo5uWn8ziGEhTwDLIiwfDo1Sp%2Bw%2FjLsj4AmzfzTttc2uTW3XmMsps65vm9vUmAd33045gEXTf%2FVufrvofn6%2F0bVuqVZXUtiYrvNLkaiWUz7HBYD18OErjMyqZ931iw5MxI7vkRsQKIvWYaRrmiuAakhjqDaYZyc6nag8eXFNs5TzrDABgOMVxLHano7ACFeuGSAu72p3aO%2FDEV2hODXFon3fWgAcGyHwwj57ovQY6pgHqAHlFqZBpvYdroXHsl1QTkeamKsbIALN%2FF9gxQJHcfvxqlBIsumZ7hwfV7TbuiT13UQ4Yx3LxCFcWYh5Yuul0foZJSyf23OtKPgQfKeqZGsVWSzasmnZXx95o6ivIaVjZKNKNbWh1JOISPqdB%2Ffclvx4siQHuweyVgr0ELsOEW9oXGBIrzsI8vtCS08OlwdUrLHhL2y2T9lfLxtfDZ43DBI%2FUxtJq&X-Amz-Signature=7db867defcf67b272a386cbc8e730b8b47e0e7b66738f9885e4f8ac2264fba31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLL3M2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPRXsoyrhzRPsl73QSl7%2FE5%2Flwk%2FY%2BUP1BHcos%2FLBxDAiBHuM7%2Bc3aWtNbPtJw3XGQ3KuRZazE%2B1WPNKsphi26uXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYU5Fhl1cF2E6AueKtwDy48Zinns1IoW77KTT26H%2B40a8ZZmuZeA34OrYQNmYdwp%2FVR%2BhS040IX%2Be%2BaHm1ehvo886oQQ8e5g%2FVlxpffZsqNb8lDy2Dp%2BMu47oVqkihL4opuIsdf%2F44svMOjJlFYnRor63Nb3Obv0z3bTw2bcgA4gq3bJhy3juk75LXgge33aOEeELsWlO7yr%2FOSnaqTa90XRfC1K6Q%2FGoomYBq9PLrDPX0ZN0%2BFUkD69CKmOPLmMjgCsz4elJIkPMjaXuUHwE72GWMlE1Mx4%2BsOy40ACPGjmv9UBlwRvrvAt4Nm5L%2BMAtDRlaf56qsuM4xfaFlnKj125Anzd%2BIPMaBEJglrDlNNxQc7vUmvgTjnuwAjpy8asT10iao9Saq41KyUTe81cpdfhyhrW7Qj8lG2X2s7WIuu3pzZPo5uWn8ziGEhTwDLIiwfDo1Sp%2Bw%2FjLsj4AmzfzTttc2uTW3XmMsps65vm9vUmAd33045gEXTf%2FVufrvofn6%2F0bVuqVZXUtiYrvNLkaiWUz7HBYD18OErjMyqZ931iw5MxI7vkRsQKIvWYaRrmiuAakhjqDaYZyc6nag8eXFNs5TzrDABgOMVxLHano7ACFeuGSAu72p3aO%2FDEV2hODXFon3fWgAcGyHwwj57ovQY6pgHqAHlFqZBpvYdroXHsl1QTkeamKsbIALN%2FF9gxQJHcfvxqlBIsumZ7hwfV7TbuiT13UQ4Yx3LxCFcWYh5Yuul0foZJSyf23OtKPgQfKeqZGsVWSzasmnZXx95o6ivIaVjZKNKNbWh1JOISPqdB%2Ffclvx4siQHuweyVgr0ELsOEW9oXGBIrzsI8vtCS08OlwdUrLHhL2y2T9lfLxtfDZ43DBI%2FUxtJq&X-Amz-Signature=ea1408ebd79070d882ec0f28ff65b9bb5be03d32eb07126ce2a65b6bdd397b99&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLL3M2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPRXsoyrhzRPsl73QSl7%2FE5%2Flwk%2FY%2BUP1BHcos%2FLBxDAiBHuM7%2Bc3aWtNbPtJw3XGQ3KuRZazE%2B1WPNKsphi26uXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYU5Fhl1cF2E6AueKtwDy48Zinns1IoW77KTT26H%2B40a8ZZmuZeA34OrYQNmYdwp%2FVR%2BhS040IX%2Be%2BaHm1ehvo886oQQ8e5g%2FVlxpffZsqNb8lDy2Dp%2BMu47oVqkihL4opuIsdf%2F44svMOjJlFYnRor63Nb3Obv0z3bTw2bcgA4gq3bJhy3juk75LXgge33aOEeELsWlO7yr%2FOSnaqTa90XRfC1K6Q%2FGoomYBq9PLrDPX0ZN0%2BFUkD69CKmOPLmMjgCsz4elJIkPMjaXuUHwE72GWMlE1Mx4%2BsOy40ACPGjmv9UBlwRvrvAt4Nm5L%2BMAtDRlaf56qsuM4xfaFlnKj125Anzd%2BIPMaBEJglrDlNNxQc7vUmvgTjnuwAjpy8asT10iao9Saq41KyUTe81cpdfhyhrW7Qj8lG2X2s7WIuu3pzZPo5uWn8ziGEhTwDLIiwfDo1Sp%2Bw%2FjLsj4AmzfzTttc2uTW3XmMsps65vm9vUmAd33045gEXTf%2FVufrvofn6%2F0bVuqVZXUtiYrvNLkaiWUz7HBYD18OErjMyqZ931iw5MxI7vkRsQKIvWYaRrmiuAakhjqDaYZyc6nag8eXFNs5TzrDABgOMVxLHano7ACFeuGSAu72p3aO%2FDEV2hODXFon3fWgAcGyHwwj57ovQY6pgHqAHlFqZBpvYdroXHsl1QTkeamKsbIALN%2FF9gxQJHcfvxqlBIsumZ7hwfV7TbuiT13UQ4Yx3LxCFcWYh5Yuul0foZJSyf23OtKPgQfKeqZGsVWSzasmnZXx95o6ivIaVjZKNKNbWh1JOISPqdB%2Ffclvx4siQHuweyVgr0ELsOEW9oXGBIrzsI8vtCS08OlwdUrLHhL2y2T9lfLxtfDZ43DBI%2FUxtJq&X-Amz-Signature=efe577cd209739aa558e8ca806ea459b61d1e3ad5a5931b18a80685b0bd53b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLL3M2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPRXsoyrhzRPsl73QSl7%2FE5%2Flwk%2FY%2BUP1BHcos%2FLBxDAiBHuM7%2Bc3aWtNbPtJw3XGQ3KuRZazE%2B1WPNKsphi26uXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYU5Fhl1cF2E6AueKtwDy48Zinns1IoW77KTT26H%2B40a8ZZmuZeA34OrYQNmYdwp%2FVR%2BhS040IX%2Be%2BaHm1ehvo886oQQ8e5g%2FVlxpffZsqNb8lDy2Dp%2BMu47oVqkihL4opuIsdf%2F44svMOjJlFYnRor63Nb3Obv0z3bTw2bcgA4gq3bJhy3juk75LXgge33aOEeELsWlO7yr%2FOSnaqTa90XRfC1K6Q%2FGoomYBq9PLrDPX0ZN0%2BFUkD69CKmOPLmMjgCsz4elJIkPMjaXuUHwE72GWMlE1Mx4%2BsOy40ACPGjmv9UBlwRvrvAt4Nm5L%2BMAtDRlaf56qsuM4xfaFlnKj125Anzd%2BIPMaBEJglrDlNNxQc7vUmvgTjnuwAjpy8asT10iao9Saq41KyUTe81cpdfhyhrW7Qj8lG2X2s7WIuu3pzZPo5uWn8ziGEhTwDLIiwfDo1Sp%2Bw%2FjLsj4AmzfzTttc2uTW3XmMsps65vm9vUmAd33045gEXTf%2FVufrvofn6%2F0bVuqVZXUtiYrvNLkaiWUz7HBYD18OErjMyqZ931iw5MxI7vkRsQKIvWYaRrmiuAakhjqDaYZyc6nag8eXFNs5TzrDABgOMVxLHano7ACFeuGSAu72p3aO%2FDEV2hODXFon3fWgAcGyHwwj57ovQY6pgHqAHlFqZBpvYdroXHsl1QTkeamKsbIALN%2FF9gxQJHcfvxqlBIsumZ7hwfV7TbuiT13UQ4Yx3LxCFcWYh5Yuul0foZJSyf23OtKPgQfKeqZGsVWSzasmnZXx95o6ivIaVjZKNKNbWh1JOISPqdB%2Ffclvx4siQHuweyVgr0ELsOEW9oXGBIrzsI8vtCS08OlwdUrLHhL2y2T9lfLxtfDZ43DBI%2FUxtJq&X-Amz-Signature=d01688a5558e6d2581e2b49be2bc3444d61d50fd413e4405a43960fcd8b5b6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLL3M2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPRXsoyrhzRPsl73QSl7%2FE5%2Flwk%2FY%2BUP1BHcos%2FLBxDAiBHuM7%2Bc3aWtNbPtJw3XGQ3KuRZazE%2B1WPNKsphi26uXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYU5Fhl1cF2E6AueKtwDy48Zinns1IoW77KTT26H%2B40a8ZZmuZeA34OrYQNmYdwp%2FVR%2BhS040IX%2Be%2BaHm1ehvo886oQQ8e5g%2FVlxpffZsqNb8lDy2Dp%2BMu47oVqkihL4opuIsdf%2F44svMOjJlFYnRor63Nb3Obv0z3bTw2bcgA4gq3bJhy3juk75LXgge33aOEeELsWlO7yr%2FOSnaqTa90XRfC1K6Q%2FGoomYBq9PLrDPX0ZN0%2BFUkD69CKmOPLmMjgCsz4elJIkPMjaXuUHwE72GWMlE1Mx4%2BsOy40ACPGjmv9UBlwRvrvAt4Nm5L%2BMAtDRlaf56qsuM4xfaFlnKj125Anzd%2BIPMaBEJglrDlNNxQc7vUmvgTjnuwAjpy8asT10iao9Saq41KyUTe81cpdfhyhrW7Qj8lG2X2s7WIuu3pzZPo5uWn8ziGEhTwDLIiwfDo1Sp%2Bw%2FjLsj4AmzfzTttc2uTW3XmMsps65vm9vUmAd33045gEXTf%2FVufrvofn6%2F0bVuqVZXUtiYrvNLkaiWUz7HBYD18OErjMyqZ931iw5MxI7vkRsQKIvWYaRrmiuAakhjqDaYZyc6nag8eXFNs5TzrDABgOMVxLHano7ACFeuGSAu72p3aO%2FDEV2hODXFon3fWgAcGyHwwj57ovQY6pgHqAHlFqZBpvYdroXHsl1QTkeamKsbIALN%2FF9gxQJHcfvxqlBIsumZ7hwfV7TbuiT13UQ4Yx3LxCFcWYh5Yuul0foZJSyf23OtKPgQfKeqZGsVWSzasmnZXx95o6ivIaVjZKNKNbWh1JOISPqdB%2Ffclvx4siQHuweyVgr0ELsOEW9oXGBIrzsI8vtCS08OlwdUrLHhL2y2T9lfLxtfDZ43DBI%2FUxtJq&X-Amz-Signature=cdda037658aece74f337035baca29adc99228b932b6a36e8ba5c4f5bf9271633&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLL3M2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPRXsoyrhzRPsl73QSl7%2FE5%2Flwk%2FY%2BUP1BHcos%2FLBxDAiBHuM7%2Bc3aWtNbPtJw3XGQ3KuRZazE%2B1WPNKsphi26uXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYU5Fhl1cF2E6AueKtwDy48Zinns1IoW77KTT26H%2B40a8ZZmuZeA34OrYQNmYdwp%2FVR%2BhS040IX%2Be%2BaHm1ehvo886oQQ8e5g%2FVlxpffZsqNb8lDy2Dp%2BMu47oVqkihL4opuIsdf%2F44svMOjJlFYnRor63Nb3Obv0z3bTw2bcgA4gq3bJhy3juk75LXgge33aOEeELsWlO7yr%2FOSnaqTa90XRfC1K6Q%2FGoomYBq9PLrDPX0ZN0%2BFUkD69CKmOPLmMjgCsz4elJIkPMjaXuUHwE72GWMlE1Mx4%2BsOy40ACPGjmv9UBlwRvrvAt4Nm5L%2BMAtDRlaf56qsuM4xfaFlnKj125Anzd%2BIPMaBEJglrDlNNxQc7vUmvgTjnuwAjpy8asT10iao9Saq41KyUTe81cpdfhyhrW7Qj8lG2X2s7WIuu3pzZPo5uWn8ziGEhTwDLIiwfDo1Sp%2Bw%2FjLsj4AmzfzTttc2uTW3XmMsps65vm9vUmAd33045gEXTf%2FVufrvofn6%2F0bVuqVZXUtiYrvNLkaiWUz7HBYD18OErjMyqZ931iw5MxI7vkRsQKIvWYaRrmiuAakhjqDaYZyc6nag8eXFNs5TzrDABgOMVxLHano7ACFeuGSAu72p3aO%2FDEV2hODXFon3fWgAcGyHwwj57ovQY6pgHqAHlFqZBpvYdroXHsl1QTkeamKsbIALN%2FF9gxQJHcfvxqlBIsumZ7hwfV7TbuiT13UQ4Yx3LxCFcWYh5Yuul0foZJSyf23OtKPgQfKeqZGsVWSzasmnZXx95o6ivIaVjZKNKNbWh1JOISPqdB%2Ffclvx4siQHuweyVgr0ELsOEW9oXGBIrzsI8vtCS08OlwdUrLHhL2y2T9lfLxtfDZ43DBI%2FUxtJq&X-Amz-Signature=6f34d5ab7ce9058be7942cc44c8eb3e4f7a5e83467bd46b1fd23fc2f96daced7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLL3M2E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPRXsoyrhzRPsl73QSl7%2FE5%2Flwk%2FY%2BUP1BHcos%2FLBxDAiBHuM7%2Bc3aWtNbPtJw3XGQ3KuRZazE%2B1WPNKsphi26uXyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrYU5Fhl1cF2E6AueKtwDy48Zinns1IoW77KTT26H%2B40a8ZZmuZeA34OrYQNmYdwp%2FVR%2BhS040IX%2Be%2BaHm1ehvo886oQQ8e5g%2FVlxpffZsqNb8lDy2Dp%2BMu47oVqkihL4opuIsdf%2F44svMOjJlFYnRor63Nb3Obv0z3bTw2bcgA4gq3bJhy3juk75LXgge33aOEeELsWlO7yr%2FOSnaqTa90XRfC1K6Q%2FGoomYBq9PLrDPX0ZN0%2BFUkD69CKmOPLmMjgCsz4elJIkPMjaXuUHwE72GWMlE1Mx4%2BsOy40ACPGjmv9UBlwRvrvAt4Nm5L%2BMAtDRlaf56qsuM4xfaFlnKj125Anzd%2BIPMaBEJglrDlNNxQc7vUmvgTjnuwAjpy8asT10iao9Saq41KyUTe81cpdfhyhrW7Qj8lG2X2s7WIuu3pzZPo5uWn8ziGEhTwDLIiwfDo1Sp%2Bw%2FjLsj4AmzfzTttc2uTW3XmMsps65vm9vUmAd33045gEXTf%2FVufrvofn6%2F0bVuqVZXUtiYrvNLkaiWUz7HBYD18OErjMyqZ931iw5MxI7vkRsQKIvWYaRrmiuAakhjqDaYZyc6nag8eXFNs5TzrDABgOMVxLHano7ACFeuGSAu72p3aO%2FDEV2hODXFon3fWgAcGyHwwj57ovQY6pgHqAHlFqZBpvYdroXHsl1QTkeamKsbIALN%2FF9gxQJHcfvxqlBIsumZ7hwfV7TbuiT13UQ4Yx3LxCFcWYh5Yuul0foZJSyf23OtKPgQfKeqZGsVWSzasmnZXx95o6ivIaVjZKNKNbWh1JOISPqdB%2Ffclvx4siQHuweyVgr0ELsOEW9oXGBIrzsI8vtCS08OlwdUrLHhL2y2T9lfLxtfDZ43DBI%2FUxtJq&X-Amz-Signature=d9e5cf140cd9d0e0710dc5817a9a0e48ee62eafb7ff4b709ac0ef81bf449a596&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
