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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLKK2OV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9sodfOd2nfIORGFNiSb4KTAXhVtyUCPWmRmlZbYA6gAiAuvUdTJPGsTSJP6XGUUT%2FOTUTxTWJmE2rdnMBKPsom%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVyHo7LLJAKcNwmlKtwDijPEardHDF0NUEtvalLMxrY%2B3ZXqYscTM3TnvQaWX0R6WGQjs3jDbxM6JAxq6ywPmCd0I7P%2BnEcPmAUo6zuZPdbmkVa3nX8WrtorcIW6UFU2Mih2dF0nSfqjZLffYeaZMLeaQscCCg6HBF33BxEviQzR8RJHZ2vr772UwXfJ6a%2BTBpBdnq%2B3%2FYJUcbNc40vjn%2Fsbz1mVl5aYL9oDEr0yebTPF4zZDp%2B7hfUDxgCsk0tGopnZSLYCBFBeenNTQW297kXaSveHCGfWIG72PLs7P54YjZVAcl9Auv15%2FZN0g4sJi%2Fg%2BftOnZ8N6L2MDocXqrr4gUO9j9NT2xsIQQXQyqZzu%2B9g70%2FputM5N%2BJxSrdGHAeC802PzmkJrkyYiK7L%2Fj2GKMQ5avblJAqXjdcp885jN9t59q3it3BMjcLaTma8WMUAmSbsRcul8HwDfSGw3%2Ffp3FOXD06uX%2FG91O6qSOs3s57hZVQZkOSSmoAbDblKSEXm2wvocmd3m8UPUj80HQK%2BxbTF3hNstfUz4R4bAiHh5qMVdwNbfqVMoWmyf%2BYn20DyONuMJTMeVZfVVGUdTp3rUi9EJP3eMhhOG7VyKfInXlsw3yFh3J2MycaQcnJ4l1ti0BSdeg0keqqIw9pPEwAY6pgFme0vr6jJaMrRG6F0KPE8auLsOdSGkZByjkRt2yVevMkPx5FvgGsnmlgs8Aq7%2BcGmuiIH0Hz%2F1A38AWPm7LJh1vI73uEnFNZn3eJGpFEiiLk0A72j1md5tv2QsSm8XQZfLiyN41AYr%2BJ3WI6ktKKcxJmnpmY6nMO8PllNzHf8xA0eszJfUXLEWZLvjM34CuGwADXf3fyzk2IfDIyzZrDeI4ljXYu1%2B&X-Amz-Signature=5bfded56387f50edac37e0a9875bb72b6bd8fdfa1ee152b0647ec882e71ffe90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLKK2OV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9sodfOd2nfIORGFNiSb4KTAXhVtyUCPWmRmlZbYA6gAiAuvUdTJPGsTSJP6XGUUT%2FOTUTxTWJmE2rdnMBKPsom%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVyHo7LLJAKcNwmlKtwDijPEardHDF0NUEtvalLMxrY%2B3ZXqYscTM3TnvQaWX0R6WGQjs3jDbxM6JAxq6ywPmCd0I7P%2BnEcPmAUo6zuZPdbmkVa3nX8WrtorcIW6UFU2Mih2dF0nSfqjZLffYeaZMLeaQscCCg6HBF33BxEviQzR8RJHZ2vr772UwXfJ6a%2BTBpBdnq%2B3%2FYJUcbNc40vjn%2Fsbz1mVl5aYL9oDEr0yebTPF4zZDp%2B7hfUDxgCsk0tGopnZSLYCBFBeenNTQW297kXaSveHCGfWIG72PLs7P54YjZVAcl9Auv15%2FZN0g4sJi%2Fg%2BftOnZ8N6L2MDocXqrr4gUO9j9NT2xsIQQXQyqZzu%2B9g70%2FputM5N%2BJxSrdGHAeC802PzmkJrkyYiK7L%2Fj2GKMQ5avblJAqXjdcp885jN9t59q3it3BMjcLaTma8WMUAmSbsRcul8HwDfSGw3%2Ffp3FOXD06uX%2FG91O6qSOs3s57hZVQZkOSSmoAbDblKSEXm2wvocmd3m8UPUj80HQK%2BxbTF3hNstfUz4R4bAiHh5qMVdwNbfqVMoWmyf%2BYn20DyONuMJTMeVZfVVGUdTp3rUi9EJP3eMhhOG7VyKfInXlsw3yFh3J2MycaQcnJ4l1ti0BSdeg0keqqIw9pPEwAY6pgFme0vr6jJaMrRG6F0KPE8auLsOdSGkZByjkRt2yVevMkPx5FvgGsnmlgs8Aq7%2BcGmuiIH0Hz%2F1A38AWPm7LJh1vI73uEnFNZn3eJGpFEiiLk0A72j1md5tv2QsSm8XQZfLiyN41AYr%2BJ3WI6ktKKcxJmnpmY6nMO8PllNzHf8xA0eszJfUXLEWZLvjM34CuGwADXf3fyzk2IfDIyzZrDeI4ljXYu1%2B&X-Amz-Signature=916aeb767bb4ccc55fdb3fa9eaab2d9d636c17db606c0329bfb9f4889c1e59cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLKK2OV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9sodfOd2nfIORGFNiSb4KTAXhVtyUCPWmRmlZbYA6gAiAuvUdTJPGsTSJP6XGUUT%2FOTUTxTWJmE2rdnMBKPsom%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVyHo7LLJAKcNwmlKtwDijPEardHDF0NUEtvalLMxrY%2B3ZXqYscTM3TnvQaWX0R6WGQjs3jDbxM6JAxq6ywPmCd0I7P%2BnEcPmAUo6zuZPdbmkVa3nX8WrtorcIW6UFU2Mih2dF0nSfqjZLffYeaZMLeaQscCCg6HBF33BxEviQzR8RJHZ2vr772UwXfJ6a%2BTBpBdnq%2B3%2FYJUcbNc40vjn%2Fsbz1mVl5aYL9oDEr0yebTPF4zZDp%2B7hfUDxgCsk0tGopnZSLYCBFBeenNTQW297kXaSveHCGfWIG72PLs7P54YjZVAcl9Auv15%2FZN0g4sJi%2Fg%2BftOnZ8N6L2MDocXqrr4gUO9j9NT2xsIQQXQyqZzu%2B9g70%2FputM5N%2BJxSrdGHAeC802PzmkJrkyYiK7L%2Fj2GKMQ5avblJAqXjdcp885jN9t59q3it3BMjcLaTma8WMUAmSbsRcul8HwDfSGw3%2Ffp3FOXD06uX%2FG91O6qSOs3s57hZVQZkOSSmoAbDblKSEXm2wvocmd3m8UPUj80HQK%2BxbTF3hNstfUz4R4bAiHh5qMVdwNbfqVMoWmyf%2BYn20DyONuMJTMeVZfVVGUdTp3rUi9EJP3eMhhOG7VyKfInXlsw3yFh3J2MycaQcnJ4l1ti0BSdeg0keqqIw9pPEwAY6pgFme0vr6jJaMrRG6F0KPE8auLsOdSGkZByjkRt2yVevMkPx5FvgGsnmlgs8Aq7%2BcGmuiIH0Hz%2F1A38AWPm7LJh1vI73uEnFNZn3eJGpFEiiLk0A72j1md5tv2QsSm8XQZfLiyN41AYr%2BJ3WI6ktKKcxJmnpmY6nMO8PllNzHf8xA0eszJfUXLEWZLvjM34CuGwADXf3fyzk2IfDIyzZrDeI4ljXYu1%2B&X-Amz-Signature=c464131695076b4d5cf79940c45ce7e200b39a74a1e405834c70ede818467409&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLKK2OV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9sodfOd2nfIORGFNiSb4KTAXhVtyUCPWmRmlZbYA6gAiAuvUdTJPGsTSJP6XGUUT%2FOTUTxTWJmE2rdnMBKPsom%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVyHo7LLJAKcNwmlKtwDijPEardHDF0NUEtvalLMxrY%2B3ZXqYscTM3TnvQaWX0R6WGQjs3jDbxM6JAxq6ywPmCd0I7P%2BnEcPmAUo6zuZPdbmkVa3nX8WrtorcIW6UFU2Mih2dF0nSfqjZLffYeaZMLeaQscCCg6HBF33BxEviQzR8RJHZ2vr772UwXfJ6a%2BTBpBdnq%2B3%2FYJUcbNc40vjn%2Fsbz1mVl5aYL9oDEr0yebTPF4zZDp%2B7hfUDxgCsk0tGopnZSLYCBFBeenNTQW297kXaSveHCGfWIG72PLs7P54YjZVAcl9Auv15%2FZN0g4sJi%2Fg%2BftOnZ8N6L2MDocXqrr4gUO9j9NT2xsIQQXQyqZzu%2B9g70%2FputM5N%2BJxSrdGHAeC802PzmkJrkyYiK7L%2Fj2GKMQ5avblJAqXjdcp885jN9t59q3it3BMjcLaTma8WMUAmSbsRcul8HwDfSGw3%2Ffp3FOXD06uX%2FG91O6qSOs3s57hZVQZkOSSmoAbDblKSEXm2wvocmd3m8UPUj80HQK%2BxbTF3hNstfUz4R4bAiHh5qMVdwNbfqVMoWmyf%2BYn20DyONuMJTMeVZfVVGUdTp3rUi9EJP3eMhhOG7VyKfInXlsw3yFh3J2MycaQcnJ4l1ti0BSdeg0keqqIw9pPEwAY6pgFme0vr6jJaMrRG6F0KPE8auLsOdSGkZByjkRt2yVevMkPx5FvgGsnmlgs8Aq7%2BcGmuiIH0Hz%2F1A38AWPm7LJh1vI73uEnFNZn3eJGpFEiiLk0A72j1md5tv2QsSm8XQZfLiyN41AYr%2BJ3WI6ktKKcxJmnpmY6nMO8PllNzHf8xA0eszJfUXLEWZLvjM34CuGwADXf3fyzk2IfDIyzZrDeI4ljXYu1%2B&X-Amz-Signature=05714e154b770a2879c7f4b99a73c3a7c02c6d7c49d1d4c3b9fccaee30796647&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLKK2OV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9sodfOd2nfIORGFNiSb4KTAXhVtyUCPWmRmlZbYA6gAiAuvUdTJPGsTSJP6XGUUT%2FOTUTxTWJmE2rdnMBKPsom%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVyHo7LLJAKcNwmlKtwDijPEardHDF0NUEtvalLMxrY%2B3ZXqYscTM3TnvQaWX0R6WGQjs3jDbxM6JAxq6ywPmCd0I7P%2BnEcPmAUo6zuZPdbmkVa3nX8WrtorcIW6UFU2Mih2dF0nSfqjZLffYeaZMLeaQscCCg6HBF33BxEviQzR8RJHZ2vr772UwXfJ6a%2BTBpBdnq%2B3%2FYJUcbNc40vjn%2Fsbz1mVl5aYL9oDEr0yebTPF4zZDp%2B7hfUDxgCsk0tGopnZSLYCBFBeenNTQW297kXaSveHCGfWIG72PLs7P54YjZVAcl9Auv15%2FZN0g4sJi%2Fg%2BftOnZ8N6L2MDocXqrr4gUO9j9NT2xsIQQXQyqZzu%2B9g70%2FputM5N%2BJxSrdGHAeC802PzmkJrkyYiK7L%2Fj2GKMQ5avblJAqXjdcp885jN9t59q3it3BMjcLaTma8WMUAmSbsRcul8HwDfSGw3%2Ffp3FOXD06uX%2FG91O6qSOs3s57hZVQZkOSSmoAbDblKSEXm2wvocmd3m8UPUj80HQK%2BxbTF3hNstfUz4R4bAiHh5qMVdwNbfqVMoWmyf%2BYn20DyONuMJTMeVZfVVGUdTp3rUi9EJP3eMhhOG7VyKfInXlsw3yFh3J2MycaQcnJ4l1ti0BSdeg0keqqIw9pPEwAY6pgFme0vr6jJaMrRG6F0KPE8auLsOdSGkZByjkRt2yVevMkPx5FvgGsnmlgs8Aq7%2BcGmuiIH0Hz%2F1A38AWPm7LJh1vI73uEnFNZn3eJGpFEiiLk0A72j1md5tv2QsSm8XQZfLiyN41AYr%2BJ3WI6ktKKcxJmnpmY6nMO8PllNzHf8xA0eszJfUXLEWZLvjM34CuGwADXf3fyzk2IfDIyzZrDeI4ljXYu1%2B&X-Amz-Signature=442d436dd8ed0459e618661eb4fb3b88d21ecb1f331b2489e55607f7130df2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLKK2OV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9sodfOd2nfIORGFNiSb4KTAXhVtyUCPWmRmlZbYA6gAiAuvUdTJPGsTSJP6XGUUT%2FOTUTxTWJmE2rdnMBKPsom%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVyHo7LLJAKcNwmlKtwDijPEardHDF0NUEtvalLMxrY%2B3ZXqYscTM3TnvQaWX0R6WGQjs3jDbxM6JAxq6ywPmCd0I7P%2BnEcPmAUo6zuZPdbmkVa3nX8WrtorcIW6UFU2Mih2dF0nSfqjZLffYeaZMLeaQscCCg6HBF33BxEviQzR8RJHZ2vr772UwXfJ6a%2BTBpBdnq%2B3%2FYJUcbNc40vjn%2Fsbz1mVl5aYL9oDEr0yebTPF4zZDp%2B7hfUDxgCsk0tGopnZSLYCBFBeenNTQW297kXaSveHCGfWIG72PLs7P54YjZVAcl9Auv15%2FZN0g4sJi%2Fg%2BftOnZ8N6L2MDocXqrr4gUO9j9NT2xsIQQXQyqZzu%2B9g70%2FputM5N%2BJxSrdGHAeC802PzmkJrkyYiK7L%2Fj2GKMQ5avblJAqXjdcp885jN9t59q3it3BMjcLaTma8WMUAmSbsRcul8HwDfSGw3%2Ffp3FOXD06uX%2FG91O6qSOs3s57hZVQZkOSSmoAbDblKSEXm2wvocmd3m8UPUj80HQK%2BxbTF3hNstfUz4R4bAiHh5qMVdwNbfqVMoWmyf%2BYn20DyONuMJTMeVZfVVGUdTp3rUi9EJP3eMhhOG7VyKfInXlsw3yFh3J2MycaQcnJ4l1ti0BSdeg0keqqIw9pPEwAY6pgFme0vr6jJaMrRG6F0KPE8auLsOdSGkZByjkRt2yVevMkPx5FvgGsnmlgs8Aq7%2BcGmuiIH0Hz%2F1A38AWPm7LJh1vI73uEnFNZn3eJGpFEiiLk0A72j1md5tv2QsSm8XQZfLiyN41AYr%2BJ3WI6ktKKcxJmnpmY6nMO8PllNzHf8xA0eszJfUXLEWZLvjM34CuGwADXf3fyzk2IfDIyzZrDeI4ljXYu1%2B&X-Amz-Signature=c7f74bfefc22a9e92494c05b55bb29ff6268a3dde7b467789c7706301eccf7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLKK2OV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9sodfOd2nfIORGFNiSb4KTAXhVtyUCPWmRmlZbYA6gAiAuvUdTJPGsTSJP6XGUUT%2FOTUTxTWJmE2rdnMBKPsom%2FyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVyHo7LLJAKcNwmlKtwDijPEardHDF0NUEtvalLMxrY%2B3ZXqYscTM3TnvQaWX0R6WGQjs3jDbxM6JAxq6ywPmCd0I7P%2BnEcPmAUo6zuZPdbmkVa3nX8WrtorcIW6UFU2Mih2dF0nSfqjZLffYeaZMLeaQscCCg6HBF33BxEviQzR8RJHZ2vr772UwXfJ6a%2BTBpBdnq%2B3%2FYJUcbNc40vjn%2Fsbz1mVl5aYL9oDEr0yebTPF4zZDp%2B7hfUDxgCsk0tGopnZSLYCBFBeenNTQW297kXaSveHCGfWIG72PLs7P54YjZVAcl9Auv15%2FZN0g4sJi%2Fg%2BftOnZ8N6L2MDocXqrr4gUO9j9NT2xsIQQXQyqZzu%2B9g70%2FputM5N%2BJxSrdGHAeC802PzmkJrkyYiK7L%2Fj2GKMQ5avblJAqXjdcp885jN9t59q3it3BMjcLaTma8WMUAmSbsRcul8HwDfSGw3%2Ffp3FOXD06uX%2FG91O6qSOs3s57hZVQZkOSSmoAbDblKSEXm2wvocmd3m8UPUj80HQK%2BxbTF3hNstfUz4R4bAiHh5qMVdwNbfqVMoWmyf%2BYn20DyONuMJTMeVZfVVGUdTp3rUi9EJP3eMhhOG7VyKfInXlsw3yFh3J2MycaQcnJ4l1ti0BSdeg0keqqIw9pPEwAY6pgFme0vr6jJaMrRG6F0KPE8auLsOdSGkZByjkRt2yVevMkPx5FvgGsnmlgs8Aq7%2BcGmuiIH0Hz%2F1A38AWPm7LJh1vI73uEnFNZn3eJGpFEiiLk0A72j1md5tv2QsSm8XQZfLiyN41AYr%2BJ3WI6ktKKcxJmnpmY6nMO8PllNzHf8xA0eszJfUXLEWZLvjM34CuGwADXf3fyzk2IfDIyzZrDeI4ljXYu1%2B&X-Amz-Signature=03839aa8604910bb2b351513efa03ec0fa447f0997e25033c3d5b2aa1555fbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
