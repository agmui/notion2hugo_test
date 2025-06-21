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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFXT2BA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg2FpCt2OmIwCquLIPrbtWONFJJAFeOLnRYRImdIyoyAiEAomw1CFwiN%2BxmrbGvB3myy3G3XF6Z1u00QCLsksJG5aMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzlq%2BumHIEEV7hYqSrcA8Kjzi91mVGKpprtXI7OYx8AzX%2BDVME5Kt%2BbKWDUuWyJFm0WP5O%2FFLDdWb%2F4oYEVmQ91OopyIQU1%2FD9dJkNpir2lxxqqyCU9ZfmrsiurxKga8Rf79BkDFFJh88091qVZeYdWw4d0hOl2DmKZVfJi2peuAJD0DkMlacnCtIHTaWkGwRJdXcI8BU9VCZEtA3TBNXUEGmSlthVGhfnMGHTRyKHw8OuJmhVKdEmM6bwSNcVf4LI98k5JAA37KfcSemMKi3vH3OY9TzdFIyp32X415FLH14oIsCj%2FwyIMtWdaZj%2FZ%2BGW9V7oARlUCTsWvjW76A5e6wlbV98nRFNBeh7DRONlwVvT5%2BVTx6JRW6A6kaXrfrA%2BA%2BCLhgGhJ2hw8t%2FTxfLOzoOuR02mJi%2FmNaTmaFEnGZfRkViHzvQ%2F6VHuOGU4Fkv20RxEMv%2FSmOKgEMLb07ehVXoXHFh7GVTSQH2wBP4uBi9rejfbZb8rtcM6KnVdoi6m3TfYOqRA6MIFvhCRencQsMVDMDlmYOKQxHr8dx%2FjjXP9NSmVsRA4yYDbiPLkB85cMC3ItXq6DAjWkonIosDtXtDizuOaH6b2IOppv6huV8WWQPU4C8M69rVQW6GyIzVTldCvabX41mIF2MOLV2cIGOqUB%2Bx8chxHzfNJTPDWWIC3FwLgNeRVzpscJsnwn6e%2FKH2Z8mo5%2BK1t%2Bt8mg2RjOnJsb9%2FpxpveRmH9HfOI7paLBhgQb5NDL837B3FZN%2BXcuzUR9WMfoiNIFMQK%2BpPx0STUYTYzf2BCBh6fZnVPW8c3Dk1eQaLpHLT0uSH%2FlQa09gWE7Vrw12ThVYW3UCAOhw0C37ioKuHY7JpEL1gNDQdnotpwUdrsY&X-Amz-Signature=b0fba6c0cf5ef2c57008a60877828d12a9f2daff2e5acae2a138721b4f3b2675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFXT2BA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg2FpCt2OmIwCquLIPrbtWONFJJAFeOLnRYRImdIyoyAiEAomw1CFwiN%2BxmrbGvB3myy3G3XF6Z1u00QCLsksJG5aMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzlq%2BumHIEEV7hYqSrcA8Kjzi91mVGKpprtXI7OYx8AzX%2BDVME5Kt%2BbKWDUuWyJFm0WP5O%2FFLDdWb%2F4oYEVmQ91OopyIQU1%2FD9dJkNpir2lxxqqyCU9ZfmrsiurxKga8Rf79BkDFFJh88091qVZeYdWw4d0hOl2DmKZVfJi2peuAJD0DkMlacnCtIHTaWkGwRJdXcI8BU9VCZEtA3TBNXUEGmSlthVGhfnMGHTRyKHw8OuJmhVKdEmM6bwSNcVf4LI98k5JAA37KfcSemMKi3vH3OY9TzdFIyp32X415FLH14oIsCj%2FwyIMtWdaZj%2FZ%2BGW9V7oARlUCTsWvjW76A5e6wlbV98nRFNBeh7DRONlwVvT5%2BVTx6JRW6A6kaXrfrA%2BA%2BCLhgGhJ2hw8t%2FTxfLOzoOuR02mJi%2FmNaTmaFEnGZfRkViHzvQ%2F6VHuOGU4Fkv20RxEMv%2FSmOKgEMLb07ehVXoXHFh7GVTSQH2wBP4uBi9rejfbZb8rtcM6KnVdoi6m3TfYOqRA6MIFvhCRencQsMVDMDlmYOKQxHr8dx%2FjjXP9NSmVsRA4yYDbiPLkB85cMC3ItXq6DAjWkonIosDtXtDizuOaH6b2IOppv6huV8WWQPU4C8M69rVQW6GyIzVTldCvabX41mIF2MOLV2cIGOqUB%2Bx8chxHzfNJTPDWWIC3FwLgNeRVzpscJsnwn6e%2FKH2Z8mo5%2BK1t%2Bt8mg2RjOnJsb9%2FpxpveRmH9HfOI7paLBhgQb5NDL837B3FZN%2BXcuzUR9WMfoiNIFMQK%2BpPx0STUYTYzf2BCBh6fZnVPW8c3Dk1eQaLpHLT0uSH%2FlQa09gWE7Vrw12ThVYW3UCAOhw0C37ioKuHY7JpEL1gNDQdnotpwUdrsY&X-Amz-Signature=6d4c9b39c724fea82b28311a8257e3d1f3f020a41caf0b0865652c702f4acfa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFXT2BA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg2FpCt2OmIwCquLIPrbtWONFJJAFeOLnRYRImdIyoyAiEAomw1CFwiN%2BxmrbGvB3myy3G3XF6Z1u00QCLsksJG5aMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzlq%2BumHIEEV7hYqSrcA8Kjzi91mVGKpprtXI7OYx8AzX%2BDVME5Kt%2BbKWDUuWyJFm0WP5O%2FFLDdWb%2F4oYEVmQ91OopyIQU1%2FD9dJkNpir2lxxqqyCU9ZfmrsiurxKga8Rf79BkDFFJh88091qVZeYdWw4d0hOl2DmKZVfJi2peuAJD0DkMlacnCtIHTaWkGwRJdXcI8BU9VCZEtA3TBNXUEGmSlthVGhfnMGHTRyKHw8OuJmhVKdEmM6bwSNcVf4LI98k5JAA37KfcSemMKi3vH3OY9TzdFIyp32X415FLH14oIsCj%2FwyIMtWdaZj%2FZ%2BGW9V7oARlUCTsWvjW76A5e6wlbV98nRFNBeh7DRONlwVvT5%2BVTx6JRW6A6kaXrfrA%2BA%2BCLhgGhJ2hw8t%2FTxfLOzoOuR02mJi%2FmNaTmaFEnGZfRkViHzvQ%2F6VHuOGU4Fkv20RxEMv%2FSmOKgEMLb07ehVXoXHFh7GVTSQH2wBP4uBi9rejfbZb8rtcM6KnVdoi6m3TfYOqRA6MIFvhCRencQsMVDMDlmYOKQxHr8dx%2FjjXP9NSmVsRA4yYDbiPLkB85cMC3ItXq6DAjWkonIosDtXtDizuOaH6b2IOppv6huV8WWQPU4C8M69rVQW6GyIzVTldCvabX41mIF2MOLV2cIGOqUB%2Bx8chxHzfNJTPDWWIC3FwLgNeRVzpscJsnwn6e%2FKH2Z8mo5%2BK1t%2Bt8mg2RjOnJsb9%2FpxpveRmH9HfOI7paLBhgQb5NDL837B3FZN%2BXcuzUR9WMfoiNIFMQK%2BpPx0STUYTYzf2BCBh6fZnVPW8c3Dk1eQaLpHLT0uSH%2FlQa09gWE7Vrw12ThVYW3UCAOhw0C37ioKuHY7JpEL1gNDQdnotpwUdrsY&X-Amz-Signature=b17c73bf711bfe72158c9c97d8ae571fe8db143704dec19ff02d209cad8894bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFXT2BA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg2FpCt2OmIwCquLIPrbtWONFJJAFeOLnRYRImdIyoyAiEAomw1CFwiN%2BxmrbGvB3myy3G3XF6Z1u00QCLsksJG5aMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzlq%2BumHIEEV7hYqSrcA8Kjzi91mVGKpprtXI7OYx8AzX%2BDVME5Kt%2BbKWDUuWyJFm0WP5O%2FFLDdWb%2F4oYEVmQ91OopyIQU1%2FD9dJkNpir2lxxqqyCU9ZfmrsiurxKga8Rf79BkDFFJh88091qVZeYdWw4d0hOl2DmKZVfJi2peuAJD0DkMlacnCtIHTaWkGwRJdXcI8BU9VCZEtA3TBNXUEGmSlthVGhfnMGHTRyKHw8OuJmhVKdEmM6bwSNcVf4LI98k5JAA37KfcSemMKi3vH3OY9TzdFIyp32X415FLH14oIsCj%2FwyIMtWdaZj%2FZ%2BGW9V7oARlUCTsWvjW76A5e6wlbV98nRFNBeh7DRONlwVvT5%2BVTx6JRW6A6kaXrfrA%2BA%2BCLhgGhJ2hw8t%2FTxfLOzoOuR02mJi%2FmNaTmaFEnGZfRkViHzvQ%2F6VHuOGU4Fkv20RxEMv%2FSmOKgEMLb07ehVXoXHFh7GVTSQH2wBP4uBi9rejfbZb8rtcM6KnVdoi6m3TfYOqRA6MIFvhCRencQsMVDMDlmYOKQxHr8dx%2FjjXP9NSmVsRA4yYDbiPLkB85cMC3ItXq6DAjWkonIosDtXtDizuOaH6b2IOppv6huV8WWQPU4C8M69rVQW6GyIzVTldCvabX41mIF2MOLV2cIGOqUB%2Bx8chxHzfNJTPDWWIC3FwLgNeRVzpscJsnwn6e%2FKH2Z8mo5%2BK1t%2Bt8mg2RjOnJsb9%2FpxpveRmH9HfOI7paLBhgQb5NDL837B3FZN%2BXcuzUR9WMfoiNIFMQK%2BpPx0STUYTYzf2BCBh6fZnVPW8c3Dk1eQaLpHLT0uSH%2FlQa09gWE7Vrw12ThVYW3UCAOhw0C37ioKuHY7JpEL1gNDQdnotpwUdrsY&X-Amz-Signature=ec204bee84dfe15cda95760a5c416c3d670fac3b619a05fc061c52fdb251477a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFXT2BA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg2FpCt2OmIwCquLIPrbtWONFJJAFeOLnRYRImdIyoyAiEAomw1CFwiN%2BxmrbGvB3myy3G3XF6Z1u00QCLsksJG5aMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzlq%2BumHIEEV7hYqSrcA8Kjzi91mVGKpprtXI7OYx8AzX%2BDVME5Kt%2BbKWDUuWyJFm0WP5O%2FFLDdWb%2F4oYEVmQ91OopyIQU1%2FD9dJkNpir2lxxqqyCU9ZfmrsiurxKga8Rf79BkDFFJh88091qVZeYdWw4d0hOl2DmKZVfJi2peuAJD0DkMlacnCtIHTaWkGwRJdXcI8BU9VCZEtA3TBNXUEGmSlthVGhfnMGHTRyKHw8OuJmhVKdEmM6bwSNcVf4LI98k5JAA37KfcSemMKi3vH3OY9TzdFIyp32X415FLH14oIsCj%2FwyIMtWdaZj%2FZ%2BGW9V7oARlUCTsWvjW76A5e6wlbV98nRFNBeh7DRONlwVvT5%2BVTx6JRW6A6kaXrfrA%2BA%2BCLhgGhJ2hw8t%2FTxfLOzoOuR02mJi%2FmNaTmaFEnGZfRkViHzvQ%2F6VHuOGU4Fkv20RxEMv%2FSmOKgEMLb07ehVXoXHFh7GVTSQH2wBP4uBi9rejfbZb8rtcM6KnVdoi6m3TfYOqRA6MIFvhCRencQsMVDMDlmYOKQxHr8dx%2FjjXP9NSmVsRA4yYDbiPLkB85cMC3ItXq6DAjWkonIosDtXtDizuOaH6b2IOppv6huV8WWQPU4C8M69rVQW6GyIzVTldCvabX41mIF2MOLV2cIGOqUB%2Bx8chxHzfNJTPDWWIC3FwLgNeRVzpscJsnwn6e%2FKH2Z8mo5%2BK1t%2Bt8mg2RjOnJsb9%2FpxpveRmH9HfOI7paLBhgQb5NDL837B3FZN%2BXcuzUR9WMfoiNIFMQK%2BpPx0STUYTYzf2BCBh6fZnVPW8c3Dk1eQaLpHLT0uSH%2FlQa09gWE7Vrw12ThVYW3UCAOhw0C37ioKuHY7JpEL1gNDQdnotpwUdrsY&X-Amz-Signature=3eca85af61d514f8e1d5640feccb8642893005d246a4ce8dc84653dfb604a7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFXT2BA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg2FpCt2OmIwCquLIPrbtWONFJJAFeOLnRYRImdIyoyAiEAomw1CFwiN%2BxmrbGvB3myy3G3XF6Z1u00QCLsksJG5aMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzlq%2BumHIEEV7hYqSrcA8Kjzi91mVGKpprtXI7OYx8AzX%2BDVME5Kt%2BbKWDUuWyJFm0WP5O%2FFLDdWb%2F4oYEVmQ91OopyIQU1%2FD9dJkNpir2lxxqqyCU9ZfmrsiurxKga8Rf79BkDFFJh88091qVZeYdWw4d0hOl2DmKZVfJi2peuAJD0DkMlacnCtIHTaWkGwRJdXcI8BU9VCZEtA3TBNXUEGmSlthVGhfnMGHTRyKHw8OuJmhVKdEmM6bwSNcVf4LI98k5JAA37KfcSemMKi3vH3OY9TzdFIyp32X415FLH14oIsCj%2FwyIMtWdaZj%2FZ%2BGW9V7oARlUCTsWvjW76A5e6wlbV98nRFNBeh7DRONlwVvT5%2BVTx6JRW6A6kaXrfrA%2BA%2BCLhgGhJ2hw8t%2FTxfLOzoOuR02mJi%2FmNaTmaFEnGZfRkViHzvQ%2F6VHuOGU4Fkv20RxEMv%2FSmOKgEMLb07ehVXoXHFh7GVTSQH2wBP4uBi9rejfbZb8rtcM6KnVdoi6m3TfYOqRA6MIFvhCRencQsMVDMDlmYOKQxHr8dx%2FjjXP9NSmVsRA4yYDbiPLkB85cMC3ItXq6DAjWkonIosDtXtDizuOaH6b2IOppv6huV8WWQPU4C8M69rVQW6GyIzVTldCvabX41mIF2MOLV2cIGOqUB%2Bx8chxHzfNJTPDWWIC3FwLgNeRVzpscJsnwn6e%2FKH2Z8mo5%2BK1t%2Bt8mg2RjOnJsb9%2FpxpveRmH9HfOI7paLBhgQb5NDL837B3FZN%2BXcuzUR9WMfoiNIFMQK%2BpPx0STUYTYzf2BCBh6fZnVPW8c3Dk1eQaLpHLT0uSH%2FlQa09gWE7Vrw12ThVYW3UCAOhw0C37ioKuHY7JpEL1gNDQdnotpwUdrsY&X-Amz-Signature=62e7fba9a1c023f37d99cd1feb4084046ef5189cbb9ff16b24113e943e9d78b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDFXT2BA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg2FpCt2OmIwCquLIPrbtWONFJJAFeOLnRYRImdIyoyAiEAomw1CFwiN%2BxmrbGvB3myy3G3XF6Z1u00QCLsksJG5aMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzlq%2BumHIEEV7hYqSrcA8Kjzi91mVGKpprtXI7OYx8AzX%2BDVME5Kt%2BbKWDUuWyJFm0WP5O%2FFLDdWb%2F4oYEVmQ91OopyIQU1%2FD9dJkNpir2lxxqqyCU9ZfmrsiurxKga8Rf79BkDFFJh88091qVZeYdWw4d0hOl2DmKZVfJi2peuAJD0DkMlacnCtIHTaWkGwRJdXcI8BU9VCZEtA3TBNXUEGmSlthVGhfnMGHTRyKHw8OuJmhVKdEmM6bwSNcVf4LI98k5JAA37KfcSemMKi3vH3OY9TzdFIyp32X415FLH14oIsCj%2FwyIMtWdaZj%2FZ%2BGW9V7oARlUCTsWvjW76A5e6wlbV98nRFNBeh7DRONlwVvT5%2BVTx6JRW6A6kaXrfrA%2BA%2BCLhgGhJ2hw8t%2FTxfLOzoOuR02mJi%2FmNaTmaFEnGZfRkViHzvQ%2F6VHuOGU4Fkv20RxEMv%2FSmOKgEMLb07ehVXoXHFh7GVTSQH2wBP4uBi9rejfbZb8rtcM6KnVdoi6m3TfYOqRA6MIFvhCRencQsMVDMDlmYOKQxHr8dx%2FjjXP9NSmVsRA4yYDbiPLkB85cMC3ItXq6DAjWkonIosDtXtDizuOaH6b2IOppv6huV8WWQPU4C8M69rVQW6GyIzVTldCvabX41mIF2MOLV2cIGOqUB%2Bx8chxHzfNJTPDWWIC3FwLgNeRVzpscJsnwn6e%2FKH2Z8mo5%2BK1t%2Bt8mg2RjOnJsb9%2FpxpveRmH9HfOI7paLBhgQb5NDL837B3FZN%2BXcuzUR9WMfoiNIFMQK%2BpPx0STUYTYzf2BCBh6fZnVPW8c3Dk1eQaLpHLT0uSH%2FlQa09gWE7Vrw12ThVYW3UCAOhw0C37ioKuHY7JpEL1gNDQdnotpwUdrsY&X-Amz-Signature=7c13c17358f303467452f1f69810623514d986439bd1f5ced2fecd3f6f5ea7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
