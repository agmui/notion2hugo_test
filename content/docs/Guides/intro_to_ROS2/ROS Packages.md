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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBNX7YQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDbmbB2tB6A1DLw1UpY%2FnD4E5QavF5sxQDJkR8QFhcWsAIhAINXpy4SAmaGM2V3MUTMTMaIunpYI59dD3BZ1yU7u4EyKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrq0pSEXEA9sigvUsq3AMieOo5ajwUtVdCdW3kNISam07BRBwUptdHWtRRbpdbq1TYgKhz0htR3wk8DyDmIxfZUS%2BsPMPB259fO2Sd8Unz1GQ5agrFp%2B1fs60XWoD0oZPRcENTL6Hgw%2FOnovtKxgExkyPSMDEh4ETd9hDz%2FlJtTGTnHE7X5w0EM5q8g0%2BueZCK31pLpYlaiYavd7djeR3LZRTfFvTSghvuBRC6PybippN8VNtA%2FWM%2Bguj6bmcDOPsIJvGrcq%2FwxIc2MH4wIsWM7%2BGeeOSAPp0Qto%2Bym5DFaq0%2BU9JqKSE49wUDokiSyF8KZ0jCMprrJ0V1Szw1B9i21wZvYAV4qg1mW%2Fe1akcdcTshFuFu%2BL4kLH4grbkba1STik%2BQA3mteTu2lJZicQ1WVW3MBzph17D7e289kRcnwPMogukboNkbc2y71DUJ6yQj1zRt1mWEgPucQfccl%2FjkLRDQilSy9j6PkXPCRNFGgPVkzqpYqS4aU9Bwj4cBSgxcPRfZxTnV%2BdJofgoOqrrWmfMWys%2FdkOdeIluvrEZdU3UgSPM75FXFVaQkVE55zASVKba5Q9VcXYdHpzYx8j839F1CCF6wD6Y7epC1AHSDkLQZXVSICSceekOkzFH72%2Be4VuKQ%2FTwKWp4EoDC5jrjBBjqkAUfEBDU3iqAeqa03YW7c6tBXvrWAOrtGWst98%2FHtPOuIUTSv7sx9y4bUItpVcN0D%2BeB3h%2FW4d7hqcec3o6iCNA5NXEpC5PmIgwLHvKlrnxoQk5IzgxqoWgCkVRXbISYe%2B5WYTCm54WZZeW3HieH9tpnh0OdpF4X4FdmRp0WEkQ0Y17cZu%2FD7CpvtMFNXHI2xHBzY47FcxcriXSsgDrN%2BM9plqB%2Bb&X-Amz-Signature=8273fc88d9de513a6a56489b86f95421a19296d10e2270651648345e7037f23f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBNX7YQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDbmbB2tB6A1DLw1UpY%2FnD4E5QavF5sxQDJkR8QFhcWsAIhAINXpy4SAmaGM2V3MUTMTMaIunpYI59dD3BZ1yU7u4EyKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrq0pSEXEA9sigvUsq3AMieOo5ajwUtVdCdW3kNISam07BRBwUptdHWtRRbpdbq1TYgKhz0htR3wk8DyDmIxfZUS%2BsPMPB259fO2Sd8Unz1GQ5agrFp%2B1fs60XWoD0oZPRcENTL6Hgw%2FOnovtKxgExkyPSMDEh4ETd9hDz%2FlJtTGTnHE7X5w0EM5q8g0%2BueZCK31pLpYlaiYavd7djeR3LZRTfFvTSghvuBRC6PybippN8VNtA%2FWM%2Bguj6bmcDOPsIJvGrcq%2FwxIc2MH4wIsWM7%2BGeeOSAPp0Qto%2Bym5DFaq0%2BU9JqKSE49wUDokiSyF8KZ0jCMprrJ0V1Szw1B9i21wZvYAV4qg1mW%2Fe1akcdcTshFuFu%2BL4kLH4grbkba1STik%2BQA3mteTu2lJZicQ1WVW3MBzph17D7e289kRcnwPMogukboNkbc2y71DUJ6yQj1zRt1mWEgPucQfccl%2FjkLRDQilSy9j6PkXPCRNFGgPVkzqpYqS4aU9Bwj4cBSgxcPRfZxTnV%2BdJofgoOqrrWmfMWys%2FdkOdeIluvrEZdU3UgSPM75FXFVaQkVE55zASVKba5Q9VcXYdHpzYx8j839F1CCF6wD6Y7epC1AHSDkLQZXVSICSceekOkzFH72%2Be4VuKQ%2FTwKWp4EoDC5jrjBBjqkAUfEBDU3iqAeqa03YW7c6tBXvrWAOrtGWst98%2FHtPOuIUTSv7sx9y4bUItpVcN0D%2BeB3h%2FW4d7hqcec3o6iCNA5NXEpC5PmIgwLHvKlrnxoQk5IzgxqoWgCkVRXbISYe%2B5WYTCm54WZZeW3HieH9tpnh0OdpF4X4FdmRp0WEkQ0Y17cZu%2FD7CpvtMFNXHI2xHBzY47FcxcriXSsgDrN%2BM9plqB%2Bb&X-Amz-Signature=009718a6658f8dda02980a348c95c3f49bf7ff1bdddba7cdd15ac874ba4a1461&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBNX7YQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDbmbB2tB6A1DLw1UpY%2FnD4E5QavF5sxQDJkR8QFhcWsAIhAINXpy4SAmaGM2V3MUTMTMaIunpYI59dD3BZ1yU7u4EyKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrq0pSEXEA9sigvUsq3AMieOo5ajwUtVdCdW3kNISam07BRBwUptdHWtRRbpdbq1TYgKhz0htR3wk8DyDmIxfZUS%2BsPMPB259fO2Sd8Unz1GQ5agrFp%2B1fs60XWoD0oZPRcENTL6Hgw%2FOnovtKxgExkyPSMDEh4ETd9hDz%2FlJtTGTnHE7X5w0EM5q8g0%2BueZCK31pLpYlaiYavd7djeR3LZRTfFvTSghvuBRC6PybippN8VNtA%2FWM%2Bguj6bmcDOPsIJvGrcq%2FwxIc2MH4wIsWM7%2BGeeOSAPp0Qto%2Bym5DFaq0%2BU9JqKSE49wUDokiSyF8KZ0jCMprrJ0V1Szw1B9i21wZvYAV4qg1mW%2Fe1akcdcTshFuFu%2BL4kLH4grbkba1STik%2BQA3mteTu2lJZicQ1WVW3MBzph17D7e289kRcnwPMogukboNkbc2y71DUJ6yQj1zRt1mWEgPucQfccl%2FjkLRDQilSy9j6PkXPCRNFGgPVkzqpYqS4aU9Bwj4cBSgxcPRfZxTnV%2BdJofgoOqrrWmfMWys%2FdkOdeIluvrEZdU3UgSPM75FXFVaQkVE55zASVKba5Q9VcXYdHpzYx8j839F1CCF6wD6Y7epC1AHSDkLQZXVSICSceekOkzFH72%2Be4VuKQ%2FTwKWp4EoDC5jrjBBjqkAUfEBDU3iqAeqa03YW7c6tBXvrWAOrtGWst98%2FHtPOuIUTSv7sx9y4bUItpVcN0D%2BeB3h%2FW4d7hqcec3o6iCNA5NXEpC5PmIgwLHvKlrnxoQk5IzgxqoWgCkVRXbISYe%2B5WYTCm54WZZeW3HieH9tpnh0OdpF4X4FdmRp0WEkQ0Y17cZu%2FD7CpvtMFNXHI2xHBzY47FcxcriXSsgDrN%2BM9plqB%2Bb&X-Amz-Signature=671290eaf224e8ed9463e23dd70b1524f280086da2ab155e95a5f9426ca64235&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBNX7YQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDbmbB2tB6A1DLw1UpY%2FnD4E5QavF5sxQDJkR8QFhcWsAIhAINXpy4SAmaGM2V3MUTMTMaIunpYI59dD3BZ1yU7u4EyKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrq0pSEXEA9sigvUsq3AMieOo5ajwUtVdCdW3kNISam07BRBwUptdHWtRRbpdbq1TYgKhz0htR3wk8DyDmIxfZUS%2BsPMPB259fO2Sd8Unz1GQ5agrFp%2B1fs60XWoD0oZPRcENTL6Hgw%2FOnovtKxgExkyPSMDEh4ETd9hDz%2FlJtTGTnHE7X5w0EM5q8g0%2BueZCK31pLpYlaiYavd7djeR3LZRTfFvTSghvuBRC6PybippN8VNtA%2FWM%2Bguj6bmcDOPsIJvGrcq%2FwxIc2MH4wIsWM7%2BGeeOSAPp0Qto%2Bym5DFaq0%2BU9JqKSE49wUDokiSyF8KZ0jCMprrJ0V1Szw1B9i21wZvYAV4qg1mW%2Fe1akcdcTshFuFu%2BL4kLH4grbkba1STik%2BQA3mteTu2lJZicQ1WVW3MBzph17D7e289kRcnwPMogukboNkbc2y71DUJ6yQj1zRt1mWEgPucQfccl%2FjkLRDQilSy9j6PkXPCRNFGgPVkzqpYqS4aU9Bwj4cBSgxcPRfZxTnV%2BdJofgoOqrrWmfMWys%2FdkOdeIluvrEZdU3UgSPM75FXFVaQkVE55zASVKba5Q9VcXYdHpzYx8j839F1CCF6wD6Y7epC1AHSDkLQZXVSICSceekOkzFH72%2Be4VuKQ%2FTwKWp4EoDC5jrjBBjqkAUfEBDU3iqAeqa03YW7c6tBXvrWAOrtGWst98%2FHtPOuIUTSv7sx9y4bUItpVcN0D%2BeB3h%2FW4d7hqcec3o6iCNA5NXEpC5PmIgwLHvKlrnxoQk5IzgxqoWgCkVRXbISYe%2B5WYTCm54WZZeW3HieH9tpnh0OdpF4X4FdmRp0WEkQ0Y17cZu%2FD7CpvtMFNXHI2xHBzY47FcxcriXSsgDrN%2BM9plqB%2Bb&X-Amz-Signature=caff85d229b879a33277f73f89ef705ee9d132e52372b761957057131a46c6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBNX7YQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDbmbB2tB6A1DLw1UpY%2FnD4E5QavF5sxQDJkR8QFhcWsAIhAINXpy4SAmaGM2V3MUTMTMaIunpYI59dD3BZ1yU7u4EyKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrq0pSEXEA9sigvUsq3AMieOo5ajwUtVdCdW3kNISam07BRBwUptdHWtRRbpdbq1TYgKhz0htR3wk8DyDmIxfZUS%2BsPMPB259fO2Sd8Unz1GQ5agrFp%2B1fs60XWoD0oZPRcENTL6Hgw%2FOnovtKxgExkyPSMDEh4ETd9hDz%2FlJtTGTnHE7X5w0EM5q8g0%2BueZCK31pLpYlaiYavd7djeR3LZRTfFvTSghvuBRC6PybippN8VNtA%2FWM%2Bguj6bmcDOPsIJvGrcq%2FwxIc2MH4wIsWM7%2BGeeOSAPp0Qto%2Bym5DFaq0%2BU9JqKSE49wUDokiSyF8KZ0jCMprrJ0V1Szw1B9i21wZvYAV4qg1mW%2Fe1akcdcTshFuFu%2BL4kLH4grbkba1STik%2BQA3mteTu2lJZicQ1WVW3MBzph17D7e289kRcnwPMogukboNkbc2y71DUJ6yQj1zRt1mWEgPucQfccl%2FjkLRDQilSy9j6PkXPCRNFGgPVkzqpYqS4aU9Bwj4cBSgxcPRfZxTnV%2BdJofgoOqrrWmfMWys%2FdkOdeIluvrEZdU3UgSPM75FXFVaQkVE55zASVKba5Q9VcXYdHpzYx8j839F1CCF6wD6Y7epC1AHSDkLQZXVSICSceekOkzFH72%2Be4VuKQ%2FTwKWp4EoDC5jrjBBjqkAUfEBDU3iqAeqa03YW7c6tBXvrWAOrtGWst98%2FHtPOuIUTSv7sx9y4bUItpVcN0D%2BeB3h%2FW4d7hqcec3o6iCNA5NXEpC5PmIgwLHvKlrnxoQk5IzgxqoWgCkVRXbISYe%2B5WYTCm54WZZeW3HieH9tpnh0OdpF4X4FdmRp0WEkQ0Y17cZu%2FD7CpvtMFNXHI2xHBzY47FcxcriXSsgDrN%2BM9plqB%2Bb&X-Amz-Signature=fafa3a8279237588bbb1ed5a7110ae6f46e13d0fb2c2fefc2c18fb0857c8a808&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBNX7YQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDbmbB2tB6A1DLw1UpY%2FnD4E5QavF5sxQDJkR8QFhcWsAIhAINXpy4SAmaGM2V3MUTMTMaIunpYI59dD3BZ1yU7u4EyKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrq0pSEXEA9sigvUsq3AMieOo5ajwUtVdCdW3kNISam07BRBwUptdHWtRRbpdbq1TYgKhz0htR3wk8DyDmIxfZUS%2BsPMPB259fO2Sd8Unz1GQ5agrFp%2B1fs60XWoD0oZPRcENTL6Hgw%2FOnovtKxgExkyPSMDEh4ETd9hDz%2FlJtTGTnHE7X5w0EM5q8g0%2BueZCK31pLpYlaiYavd7djeR3LZRTfFvTSghvuBRC6PybippN8VNtA%2FWM%2Bguj6bmcDOPsIJvGrcq%2FwxIc2MH4wIsWM7%2BGeeOSAPp0Qto%2Bym5DFaq0%2BU9JqKSE49wUDokiSyF8KZ0jCMprrJ0V1Szw1B9i21wZvYAV4qg1mW%2Fe1akcdcTshFuFu%2BL4kLH4grbkba1STik%2BQA3mteTu2lJZicQ1WVW3MBzph17D7e289kRcnwPMogukboNkbc2y71DUJ6yQj1zRt1mWEgPucQfccl%2FjkLRDQilSy9j6PkXPCRNFGgPVkzqpYqS4aU9Bwj4cBSgxcPRfZxTnV%2BdJofgoOqrrWmfMWys%2FdkOdeIluvrEZdU3UgSPM75FXFVaQkVE55zASVKba5Q9VcXYdHpzYx8j839F1CCF6wD6Y7epC1AHSDkLQZXVSICSceekOkzFH72%2Be4VuKQ%2FTwKWp4EoDC5jrjBBjqkAUfEBDU3iqAeqa03YW7c6tBXvrWAOrtGWst98%2FHtPOuIUTSv7sx9y4bUItpVcN0D%2BeB3h%2FW4d7hqcec3o6iCNA5NXEpC5PmIgwLHvKlrnxoQk5IzgxqoWgCkVRXbISYe%2B5WYTCm54WZZeW3HieH9tpnh0OdpF4X4FdmRp0WEkQ0Y17cZu%2FD7CpvtMFNXHI2xHBzY47FcxcriXSsgDrN%2BM9plqB%2Bb&X-Amz-Signature=bf0336d16ecfaee1f51c7fd40f61e34f16d700ed7b129e714fa5a9f680d8fe1e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRBNX7YQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDbmbB2tB6A1DLw1UpY%2FnD4E5QavF5sxQDJkR8QFhcWsAIhAINXpy4SAmaGM2V3MUTMTMaIunpYI59dD3BZ1yU7u4EyKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrq0pSEXEA9sigvUsq3AMieOo5ajwUtVdCdW3kNISam07BRBwUptdHWtRRbpdbq1TYgKhz0htR3wk8DyDmIxfZUS%2BsPMPB259fO2Sd8Unz1GQ5agrFp%2B1fs60XWoD0oZPRcENTL6Hgw%2FOnovtKxgExkyPSMDEh4ETd9hDz%2FlJtTGTnHE7X5w0EM5q8g0%2BueZCK31pLpYlaiYavd7djeR3LZRTfFvTSghvuBRC6PybippN8VNtA%2FWM%2Bguj6bmcDOPsIJvGrcq%2FwxIc2MH4wIsWM7%2BGeeOSAPp0Qto%2Bym5DFaq0%2BU9JqKSE49wUDokiSyF8KZ0jCMprrJ0V1Szw1B9i21wZvYAV4qg1mW%2Fe1akcdcTshFuFu%2BL4kLH4grbkba1STik%2BQA3mteTu2lJZicQ1WVW3MBzph17D7e289kRcnwPMogukboNkbc2y71DUJ6yQj1zRt1mWEgPucQfccl%2FjkLRDQilSy9j6PkXPCRNFGgPVkzqpYqS4aU9Bwj4cBSgxcPRfZxTnV%2BdJofgoOqrrWmfMWys%2FdkOdeIluvrEZdU3UgSPM75FXFVaQkVE55zASVKba5Q9VcXYdHpzYx8j839F1CCF6wD6Y7epC1AHSDkLQZXVSICSceekOkzFH72%2Be4VuKQ%2FTwKWp4EoDC5jrjBBjqkAUfEBDU3iqAeqa03YW7c6tBXvrWAOrtGWst98%2FHtPOuIUTSv7sx9y4bUItpVcN0D%2BeB3h%2FW4d7hqcec3o6iCNA5NXEpC5PmIgwLHvKlrnxoQk5IzgxqoWgCkVRXbISYe%2B5WYTCm54WZZeW3HieH9tpnh0OdpF4X4FdmRp0WEkQ0Y17cZu%2FD7CpvtMFNXHI2xHBzY47FcxcriXSsgDrN%2BM9plqB%2Bb&X-Amz-Signature=596794e84004bc27738d9a4a5332656570fe440e7d9e954eaa44c3d462e0f99e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
