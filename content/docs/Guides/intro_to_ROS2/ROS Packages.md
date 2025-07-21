---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLM225F%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHeRGj%2BiXHo3Lp%2FAL12Lv1g5%2FBu8FbhG7PDnh2ghEqQIgaHQHq7dYgyt8EcPrwSZ%2F%2BeTY9WeG7xgBCbBEzjXyGIYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcagdi3C%2FEWRxghFSrcA7CPWs%2B%2FeHSTqX1D86E0843aTIKCPffP30zr%2FzMLpilZb%2BvDWpYdqN22Q8bdT7vPOedIhY6gLjzwQfBLQAWkpxqfLtYKvLmOqITA6RIL1gUuh%2BlaaT%2Fst5le1eh%2FwGgWlhapnOcJe07dyhxB2RPWJWF03uQLroBffE6mYjOGEugm5BiAI3PYUQWHFk21UyksNXEOscSdPu5ml182I9DykI92143u0o9QI3KrF7UXSqo3Fess8nW%2F0MsGl34f4t5X35vBQNP%2Fvu7ZRFAV6xfZ%2FZfOgorKB9EUwTK%2BTCIYNjl1A%2FrUly0xUptNw2t0qHrj4cDCyO7U110CDS53HmxnMfbHgezAea2qNSrDxT1%2Fiv5DSFJAY3YQotul3uvUMv7eV8alo%2F6viGPH2TnjwmFQ57%2FtRAjz6cPOX8GWrTHb2pgtz5mj6bMsEiCKj6FQu6ZwowSY%2BJ7wHOEQwoAtp3CspLoDcV1sDeBFKOKnjSrAVPHtmOFtRyQOTnKMGxCCrOBzP2VUBF1WXJP2EQLiK4uU9%2FkRmuZfaovelXHr9CgPsS9Vi%2B%2F1aEV2oGcmAYZSSz3SN3jO5nzNJDfOG4Q4ceeZhIRQx2XlNJEqj75O%2FpBzXXumu7CYbWMEWExUy1pmMIqT98MGOqUBsPKi3uABxIAlHt%2BWvM1kGDL5Eqn9u9EAOPnTHgfexlGdsr3NRSeQEqXo%2FqyfMW5xPswxKoQG7hYQUCoZimH6cCjgH%2FJJ1wrjEzKx5G8KrAtdbnKHgtSEPjY8KpU1kLBK%2BtiAZdG6AWB%2BR3AQWAU5lwc7nHrR36eMQ0ApqxX4sjcnaO8brnjxpX9ukcv14Y3N7eJQoi0KuHKRPcDT95Hnfk1zG%2FX%2F&X-Amz-Signature=37f08af5ad28edd38d69d9f78b77ec7aabdaf36bed9c206ad312e3a577a01e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLM225F%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHeRGj%2BiXHo3Lp%2FAL12Lv1g5%2FBu8FbhG7PDnh2ghEqQIgaHQHq7dYgyt8EcPrwSZ%2F%2BeTY9WeG7xgBCbBEzjXyGIYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcagdi3C%2FEWRxghFSrcA7CPWs%2B%2FeHSTqX1D86E0843aTIKCPffP30zr%2FzMLpilZb%2BvDWpYdqN22Q8bdT7vPOedIhY6gLjzwQfBLQAWkpxqfLtYKvLmOqITA6RIL1gUuh%2BlaaT%2Fst5le1eh%2FwGgWlhapnOcJe07dyhxB2RPWJWF03uQLroBffE6mYjOGEugm5BiAI3PYUQWHFk21UyksNXEOscSdPu5ml182I9DykI92143u0o9QI3KrF7UXSqo3Fess8nW%2F0MsGl34f4t5X35vBQNP%2Fvu7ZRFAV6xfZ%2FZfOgorKB9EUwTK%2BTCIYNjl1A%2FrUly0xUptNw2t0qHrj4cDCyO7U110CDS53HmxnMfbHgezAea2qNSrDxT1%2Fiv5DSFJAY3YQotul3uvUMv7eV8alo%2F6viGPH2TnjwmFQ57%2FtRAjz6cPOX8GWrTHb2pgtz5mj6bMsEiCKj6FQu6ZwowSY%2BJ7wHOEQwoAtp3CspLoDcV1sDeBFKOKnjSrAVPHtmOFtRyQOTnKMGxCCrOBzP2VUBF1WXJP2EQLiK4uU9%2FkRmuZfaovelXHr9CgPsS9Vi%2B%2F1aEV2oGcmAYZSSz3SN3jO5nzNJDfOG4Q4ceeZhIRQx2XlNJEqj75O%2FpBzXXumu7CYbWMEWExUy1pmMIqT98MGOqUBsPKi3uABxIAlHt%2BWvM1kGDL5Eqn9u9EAOPnTHgfexlGdsr3NRSeQEqXo%2FqyfMW5xPswxKoQG7hYQUCoZimH6cCjgH%2FJJ1wrjEzKx5G8KrAtdbnKHgtSEPjY8KpU1kLBK%2BtiAZdG6AWB%2BR3AQWAU5lwc7nHrR36eMQ0ApqxX4sjcnaO8brnjxpX9ukcv14Y3N7eJQoi0KuHKRPcDT95Hnfk1zG%2FX%2F&X-Amz-Signature=718fe7095cbbd94d9046c9a43b73be8bafa7e265e3c40edb1358e3172bd3fe75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLM225F%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHeRGj%2BiXHo3Lp%2FAL12Lv1g5%2FBu8FbhG7PDnh2ghEqQIgaHQHq7dYgyt8EcPrwSZ%2F%2BeTY9WeG7xgBCbBEzjXyGIYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcagdi3C%2FEWRxghFSrcA7CPWs%2B%2FeHSTqX1D86E0843aTIKCPffP30zr%2FzMLpilZb%2BvDWpYdqN22Q8bdT7vPOedIhY6gLjzwQfBLQAWkpxqfLtYKvLmOqITA6RIL1gUuh%2BlaaT%2Fst5le1eh%2FwGgWlhapnOcJe07dyhxB2RPWJWF03uQLroBffE6mYjOGEugm5BiAI3PYUQWHFk21UyksNXEOscSdPu5ml182I9DykI92143u0o9QI3KrF7UXSqo3Fess8nW%2F0MsGl34f4t5X35vBQNP%2Fvu7ZRFAV6xfZ%2FZfOgorKB9EUwTK%2BTCIYNjl1A%2FrUly0xUptNw2t0qHrj4cDCyO7U110CDS53HmxnMfbHgezAea2qNSrDxT1%2Fiv5DSFJAY3YQotul3uvUMv7eV8alo%2F6viGPH2TnjwmFQ57%2FtRAjz6cPOX8GWrTHb2pgtz5mj6bMsEiCKj6FQu6ZwowSY%2BJ7wHOEQwoAtp3CspLoDcV1sDeBFKOKnjSrAVPHtmOFtRyQOTnKMGxCCrOBzP2VUBF1WXJP2EQLiK4uU9%2FkRmuZfaovelXHr9CgPsS9Vi%2B%2F1aEV2oGcmAYZSSz3SN3jO5nzNJDfOG4Q4ceeZhIRQx2XlNJEqj75O%2FpBzXXumu7CYbWMEWExUy1pmMIqT98MGOqUBsPKi3uABxIAlHt%2BWvM1kGDL5Eqn9u9EAOPnTHgfexlGdsr3NRSeQEqXo%2FqyfMW5xPswxKoQG7hYQUCoZimH6cCjgH%2FJJ1wrjEzKx5G8KrAtdbnKHgtSEPjY8KpU1kLBK%2BtiAZdG6AWB%2BR3AQWAU5lwc7nHrR36eMQ0ApqxX4sjcnaO8brnjxpX9ukcv14Y3N7eJQoi0KuHKRPcDT95Hnfk1zG%2FX%2F&X-Amz-Signature=ae95aadcac5dd62c4b7b1f0d406ed538583da9acbbff6e755038342750398a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLM225F%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHeRGj%2BiXHo3Lp%2FAL12Lv1g5%2FBu8FbhG7PDnh2ghEqQIgaHQHq7dYgyt8EcPrwSZ%2F%2BeTY9WeG7xgBCbBEzjXyGIYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcagdi3C%2FEWRxghFSrcA7CPWs%2B%2FeHSTqX1D86E0843aTIKCPffP30zr%2FzMLpilZb%2BvDWpYdqN22Q8bdT7vPOedIhY6gLjzwQfBLQAWkpxqfLtYKvLmOqITA6RIL1gUuh%2BlaaT%2Fst5le1eh%2FwGgWlhapnOcJe07dyhxB2RPWJWF03uQLroBffE6mYjOGEugm5BiAI3PYUQWHFk21UyksNXEOscSdPu5ml182I9DykI92143u0o9QI3KrF7UXSqo3Fess8nW%2F0MsGl34f4t5X35vBQNP%2Fvu7ZRFAV6xfZ%2FZfOgorKB9EUwTK%2BTCIYNjl1A%2FrUly0xUptNw2t0qHrj4cDCyO7U110CDS53HmxnMfbHgezAea2qNSrDxT1%2Fiv5DSFJAY3YQotul3uvUMv7eV8alo%2F6viGPH2TnjwmFQ57%2FtRAjz6cPOX8GWrTHb2pgtz5mj6bMsEiCKj6FQu6ZwowSY%2BJ7wHOEQwoAtp3CspLoDcV1sDeBFKOKnjSrAVPHtmOFtRyQOTnKMGxCCrOBzP2VUBF1WXJP2EQLiK4uU9%2FkRmuZfaovelXHr9CgPsS9Vi%2B%2F1aEV2oGcmAYZSSz3SN3jO5nzNJDfOG4Q4ceeZhIRQx2XlNJEqj75O%2FpBzXXumu7CYbWMEWExUy1pmMIqT98MGOqUBsPKi3uABxIAlHt%2BWvM1kGDL5Eqn9u9EAOPnTHgfexlGdsr3NRSeQEqXo%2FqyfMW5xPswxKoQG7hYQUCoZimH6cCjgH%2FJJ1wrjEzKx5G8KrAtdbnKHgtSEPjY8KpU1kLBK%2BtiAZdG6AWB%2BR3AQWAU5lwc7nHrR36eMQ0ApqxX4sjcnaO8brnjxpX9ukcv14Y3N7eJQoi0KuHKRPcDT95Hnfk1zG%2FX%2F&X-Amz-Signature=9102a16ea42e5824e65431dfa670fc5890f8ce5852492b1ac52c127db343079c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLM225F%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHeRGj%2BiXHo3Lp%2FAL12Lv1g5%2FBu8FbhG7PDnh2ghEqQIgaHQHq7dYgyt8EcPrwSZ%2F%2BeTY9WeG7xgBCbBEzjXyGIYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcagdi3C%2FEWRxghFSrcA7CPWs%2B%2FeHSTqX1D86E0843aTIKCPffP30zr%2FzMLpilZb%2BvDWpYdqN22Q8bdT7vPOedIhY6gLjzwQfBLQAWkpxqfLtYKvLmOqITA6RIL1gUuh%2BlaaT%2Fst5le1eh%2FwGgWlhapnOcJe07dyhxB2RPWJWF03uQLroBffE6mYjOGEugm5BiAI3PYUQWHFk21UyksNXEOscSdPu5ml182I9DykI92143u0o9QI3KrF7UXSqo3Fess8nW%2F0MsGl34f4t5X35vBQNP%2Fvu7ZRFAV6xfZ%2FZfOgorKB9EUwTK%2BTCIYNjl1A%2FrUly0xUptNw2t0qHrj4cDCyO7U110CDS53HmxnMfbHgezAea2qNSrDxT1%2Fiv5DSFJAY3YQotul3uvUMv7eV8alo%2F6viGPH2TnjwmFQ57%2FtRAjz6cPOX8GWrTHb2pgtz5mj6bMsEiCKj6FQu6ZwowSY%2BJ7wHOEQwoAtp3CspLoDcV1sDeBFKOKnjSrAVPHtmOFtRyQOTnKMGxCCrOBzP2VUBF1WXJP2EQLiK4uU9%2FkRmuZfaovelXHr9CgPsS9Vi%2B%2F1aEV2oGcmAYZSSz3SN3jO5nzNJDfOG4Q4ceeZhIRQx2XlNJEqj75O%2FpBzXXumu7CYbWMEWExUy1pmMIqT98MGOqUBsPKi3uABxIAlHt%2BWvM1kGDL5Eqn9u9EAOPnTHgfexlGdsr3NRSeQEqXo%2FqyfMW5xPswxKoQG7hYQUCoZimH6cCjgH%2FJJ1wrjEzKx5G8KrAtdbnKHgtSEPjY8KpU1kLBK%2BtiAZdG6AWB%2BR3AQWAU5lwc7nHrR36eMQ0ApqxX4sjcnaO8brnjxpX9ukcv14Y3N7eJQoi0KuHKRPcDT95Hnfk1zG%2FX%2F&X-Amz-Signature=8dff41da5ead7eb60a6c4dabf5c3e7a3d58c8696e8c3d9450a713a73309c0b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLM225F%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHeRGj%2BiXHo3Lp%2FAL12Lv1g5%2FBu8FbhG7PDnh2ghEqQIgaHQHq7dYgyt8EcPrwSZ%2F%2BeTY9WeG7xgBCbBEzjXyGIYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcagdi3C%2FEWRxghFSrcA7CPWs%2B%2FeHSTqX1D86E0843aTIKCPffP30zr%2FzMLpilZb%2BvDWpYdqN22Q8bdT7vPOedIhY6gLjzwQfBLQAWkpxqfLtYKvLmOqITA6RIL1gUuh%2BlaaT%2Fst5le1eh%2FwGgWlhapnOcJe07dyhxB2RPWJWF03uQLroBffE6mYjOGEugm5BiAI3PYUQWHFk21UyksNXEOscSdPu5ml182I9DykI92143u0o9QI3KrF7UXSqo3Fess8nW%2F0MsGl34f4t5X35vBQNP%2Fvu7ZRFAV6xfZ%2FZfOgorKB9EUwTK%2BTCIYNjl1A%2FrUly0xUptNw2t0qHrj4cDCyO7U110CDS53HmxnMfbHgezAea2qNSrDxT1%2Fiv5DSFJAY3YQotul3uvUMv7eV8alo%2F6viGPH2TnjwmFQ57%2FtRAjz6cPOX8GWrTHb2pgtz5mj6bMsEiCKj6FQu6ZwowSY%2BJ7wHOEQwoAtp3CspLoDcV1sDeBFKOKnjSrAVPHtmOFtRyQOTnKMGxCCrOBzP2VUBF1WXJP2EQLiK4uU9%2FkRmuZfaovelXHr9CgPsS9Vi%2B%2F1aEV2oGcmAYZSSz3SN3jO5nzNJDfOG4Q4ceeZhIRQx2XlNJEqj75O%2FpBzXXumu7CYbWMEWExUy1pmMIqT98MGOqUBsPKi3uABxIAlHt%2BWvM1kGDL5Eqn9u9EAOPnTHgfexlGdsr3NRSeQEqXo%2FqyfMW5xPswxKoQG7hYQUCoZimH6cCjgH%2FJJ1wrjEzKx5G8KrAtdbnKHgtSEPjY8KpU1kLBK%2BtiAZdG6AWB%2BR3AQWAU5lwc7nHrR36eMQ0ApqxX4sjcnaO8brnjxpX9ukcv14Y3N7eJQoi0KuHKRPcDT95Hnfk1zG%2FX%2F&X-Amz-Signature=6ebec00066efbbfe55892f42468c9652338f9179ded8fa589ade8377bb6d3abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLM225F%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCHeRGj%2BiXHo3Lp%2FAL12Lv1g5%2FBu8FbhG7PDnh2ghEqQIgaHQHq7dYgyt8EcPrwSZ%2F%2BeTY9WeG7xgBCbBEzjXyGIYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcagdi3C%2FEWRxghFSrcA7CPWs%2B%2FeHSTqX1D86E0843aTIKCPffP30zr%2FzMLpilZb%2BvDWpYdqN22Q8bdT7vPOedIhY6gLjzwQfBLQAWkpxqfLtYKvLmOqITA6RIL1gUuh%2BlaaT%2Fst5le1eh%2FwGgWlhapnOcJe07dyhxB2RPWJWF03uQLroBffE6mYjOGEugm5BiAI3PYUQWHFk21UyksNXEOscSdPu5ml182I9DykI92143u0o9QI3KrF7UXSqo3Fess8nW%2F0MsGl34f4t5X35vBQNP%2Fvu7ZRFAV6xfZ%2FZfOgorKB9EUwTK%2BTCIYNjl1A%2FrUly0xUptNw2t0qHrj4cDCyO7U110CDS53HmxnMfbHgezAea2qNSrDxT1%2Fiv5DSFJAY3YQotul3uvUMv7eV8alo%2F6viGPH2TnjwmFQ57%2FtRAjz6cPOX8GWrTHb2pgtz5mj6bMsEiCKj6FQu6ZwowSY%2BJ7wHOEQwoAtp3CspLoDcV1sDeBFKOKnjSrAVPHtmOFtRyQOTnKMGxCCrOBzP2VUBF1WXJP2EQLiK4uU9%2FkRmuZfaovelXHr9CgPsS9Vi%2B%2F1aEV2oGcmAYZSSz3SN3jO5nzNJDfOG4Q4ceeZhIRQx2XlNJEqj75O%2FpBzXXumu7CYbWMEWExUy1pmMIqT98MGOqUBsPKi3uABxIAlHt%2BWvM1kGDL5Eqn9u9EAOPnTHgfexlGdsr3NRSeQEqXo%2FqyfMW5xPswxKoQG7hYQUCoZimH6cCjgH%2FJJ1wrjEzKx5G8KrAtdbnKHgtSEPjY8KpU1kLBK%2BtiAZdG6AWB%2BR3AQWAU5lwc7nHrR36eMQ0ApqxX4sjcnaO8brnjxpX9ukcv14Y3N7eJQoi0KuHKRPcDT95Hnfk1zG%2FX%2F&X-Amz-Signature=11a8e10aebd80f0a88afa4d386a2077646cc69d3d2874d69eb5d203e0a287a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
