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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRDLCCI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDq4xwVMDgdOV0d5jBkQT8njkeT7ABuVtjFbaAZQg29KAIhAOzPjKPvU2oGc3BgicScxT6NkKgZ4khX3S5lHguOpFqCKv8DCH0QABoMNjM3NDIzMTgzODA1Igysd2f1FfiZJZEHSc0q3AOeamkr6lWFVJrllq%2BvAGYj6%2FBM%2BuAXMeNrK3JPjxtYzwLk9lGyrTs1s1chG2zpN0bINMIcXovFGNyPrCTOfID2M0K%2F%2BGuRPYeH2k3IuDYAnyh%2FKUma0nRdCDcKCgwh3Vx1cQKYB07fyMjmJMpl%2FaIcMss7ATpxPdq%2F7rrcUb7mVkGCSPgVfShwwwbuc5gep%2BDuDAC52kzzks%2BOgeUJJiqMdoU9mSLKmYLSQ5s1L41BG48banN2%2FfyXoEJxkF3b9e7NZ7lCMa3iLBWcu2f9mzYdGdS%2Bwq%2FGxiV6U61g9vDPcKhS5b7Encqp99P%2BCX%2F%2FpK4K1Pv5CQ4k60hOGG%2BJQ7TXc%2BXR6giEB9ml6Hg6Mt%2FbL8EuTubbUfnSnAuqiC9iqu%2FGTOmVUF9gdeqTE%2BBlN5vKETHDIaEnJ0H6uy6mSU5sG6MHKG3A6DUS8678cq33sHazGikB37zeYQtJAeGpWwkaYL4JF8nTRDMrKgeGX6PCuP2u4z6bhNRZcK9pmBWb%2BwgCaBEY%2FHJ2esiFBn0L819jlVsAVd%2B7Psj4bEtNhQn39jkIWazSXyRktlpQ8vomxRcJFAi9BRDsHZHAegzyGJ8ZkAfMnDwI1XTSpBHPr689LVYRfrNpX3q5QdQtNDCPqKG%2FBjqkAXuPJfI90fklSrIeVMSl0H8VSLROPfLAJwEwmUSD5E5JlVibiKYn6nnot2wo2xjBycyc2uGRp6etfKkOchPRf3Ea8TAVmKvdBWnxKlwhH1067bYbrylz3Fm39He74ZG9ktVwQ0PyTl8BDphhMRG6qXhD2x70xoRyl0zetkGPLMxlXhgvU1hMRkH4cXWTMmdkpVtQwsDh2uwobmxNyEMHPVPm2794&X-Amz-Signature=e0eeaf95c3c04d874599f83910a246bfa3eb04048437fb8e7f41a9f70f044b34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRDLCCI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDq4xwVMDgdOV0d5jBkQT8njkeT7ABuVtjFbaAZQg29KAIhAOzPjKPvU2oGc3BgicScxT6NkKgZ4khX3S5lHguOpFqCKv8DCH0QABoMNjM3NDIzMTgzODA1Igysd2f1FfiZJZEHSc0q3AOeamkr6lWFVJrllq%2BvAGYj6%2FBM%2BuAXMeNrK3JPjxtYzwLk9lGyrTs1s1chG2zpN0bINMIcXovFGNyPrCTOfID2M0K%2F%2BGuRPYeH2k3IuDYAnyh%2FKUma0nRdCDcKCgwh3Vx1cQKYB07fyMjmJMpl%2FaIcMss7ATpxPdq%2F7rrcUb7mVkGCSPgVfShwwwbuc5gep%2BDuDAC52kzzks%2BOgeUJJiqMdoU9mSLKmYLSQ5s1L41BG48banN2%2FfyXoEJxkF3b9e7NZ7lCMa3iLBWcu2f9mzYdGdS%2Bwq%2FGxiV6U61g9vDPcKhS5b7Encqp99P%2BCX%2F%2FpK4K1Pv5CQ4k60hOGG%2BJQ7TXc%2BXR6giEB9ml6Hg6Mt%2FbL8EuTubbUfnSnAuqiC9iqu%2FGTOmVUF9gdeqTE%2BBlN5vKETHDIaEnJ0H6uy6mSU5sG6MHKG3A6DUS8678cq33sHazGikB37zeYQtJAeGpWwkaYL4JF8nTRDMrKgeGX6PCuP2u4z6bhNRZcK9pmBWb%2BwgCaBEY%2FHJ2esiFBn0L819jlVsAVd%2B7Psj4bEtNhQn39jkIWazSXyRktlpQ8vomxRcJFAi9BRDsHZHAegzyGJ8ZkAfMnDwI1XTSpBHPr689LVYRfrNpX3q5QdQtNDCPqKG%2FBjqkAXuPJfI90fklSrIeVMSl0H8VSLROPfLAJwEwmUSD5E5JlVibiKYn6nnot2wo2xjBycyc2uGRp6etfKkOchPRf3Ea8TAVmKvdBWnxKlwhH1067bYbrylz3Fm39He74ZG9ktVwQ0PyTl8BDphhMRG6qXhD2x70xoRyl0zetkGPLMxlXhgvU1hMRkH4cXWTMmdkpVtQwsDh2uwobmxNyEMHPVPm2794&X-Amz-Signature=e3762ccff84f5605dcce332f5ff44455a9f5a595ba79024fdd8e40028e5e5641&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRDLCCI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDq4xwVMDgdOV0d5jBkQT8njkeT7ABuVtjFbaAZQg29KAIhAOzPjKPvU2oGc3BgicScxT6NkKgZ4khX3S5lHguOpFqCKv8DCH0QABoMNjM3NDIzMTgzODA1Igysd2f1FfiZJZEHSc0q3AOeamkr6lWFVJrllq%2BvAGYj6%2FBM%2BuAXMeNrK3JPjxtYzwLk9lGyrTs1s1chG2zpN0bINMIcXovFGNyPrCTOfID2M0K%2F%2BGuRPYeH2k3IuDYAnyh%2FKUma0nRdCDcKCgwh3Vx1cQKYB07fyMjmJMpl%2FaIcMss7ATpxPdq%2F7rrcUb7mVkGCSPgVfShwwwbuc5gep%2BDuDAC52kzzks%2BOgeUJJiqMdoU9mSLKmYLSQ5s1L41BG48banN2%2FfyXoEJxkF3b9e7NZ7lCMa3iLBWcu2f9mzYdGdS%2Bwq%2FGxiV6U61g9vDPcKhS5b7Encqp99P%2BCX%2F%2FpK4K1Pv5CQ4k60hOGG%2BJQ7TXc%2BXR6giEB9ml6Hg6Mt%2FbL8EuTubbUfnSnAuqiC9iqu%2FGTOmVUF9gdeqTE%2BBlN5vKETHDIaEnJ0H6uy6mSU5sG6MHKG3A6DUS8678cq33sHazGikB37zeYQtJAeGpWwkaYL4JF8nTRDMrKgeGX6PCuP2u4z6bhNRZcK9pmBWb%2BwgCaBEY%2FHJ2esiFBn0L819jlVsAVd%2B7Psj4bEtNhQn39jkIWazSXyRktlpQ8vomxRcJFAi9BRDsHZHAegzyGJ8ZkAfMnDwI1XTSpBHPr689LVYRfrNpX3q5QdQtNDCPqKG%2FBjqkAXuPJfI90fklSrIeVMSl0H8VSLROPfLAJwEwmUSD5E5JlVibiKYn6nnot2wo2xjBycyc2uGRp6etfKkOchPRf3Ea8TAVmKvdBWnxKlwhH1067bYbrylz3Fm39He74ZG9ktVwQ0PyTl8BDphhMRG6qXhD2x70xoRyl0zetkGPLMxlXhgvU1hMRkH4cXWTMmdkpVtQwsDh2uwobmxNyEMHPVPm2794&X-Amz-Signature=41a9a23f7fee6f3a3e4e4466f2a8b9c33888fdb881302dbf2e14b4b49310a73d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRDLCCI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDq4xwVMDgdOV0d5jBkQT8njkeT7ABuVtjFbaAZQg29KAIhAOzPjKPvU2oGc3BgicScxT6NkKgZ4khX3S5lHguOpFqCKv8DCH0QABoMNjM3NDIzMTgzODA1Igysd2f1FfiZJZEHSc0q3AOeamkr6lWFVJrllq%2BvAGYj6%2FBM%2BuAXMeNrK3JPjxtYzwLk9lGyrTs1s1chG2zpN0bINMIcXovFGNyPrCTOfID2M0K%2F%2BGuRPYeH2k3IuDYAnyh%2FKUma0nRdCDcKCgwh3Vx1cQKYB07fyMjmJMpl%2FaIcMss7ATpxPdq%2F7rrcUb7mVkGCSPgVfShwwwbuc5gep%2BDuDAC52kzzks%2BOgeUJJiqMdoU9mSLKmYLSQ5s1L41BG48banN2%2FfyXoEJxkF3b9e7NZ7lCMa3iLBWcu2f9mzYdGdS%2Bwq%2FGxiV6U61g9vDPcKhS5b7Encqp99P%2BCX%2F%2FpK4K1Pv5CQ4k60hOGG%2BJQ7TXc%2BXR6giEB9ml6Hg6Mt%2FbL8EuTubbUfnSnAuqiC9iqu%2FGTOmVUF9gdeqTE%2BBlN5vKETHDIaEnJ0H6uy6mSU5sG6MHKG3A6DUS8678cq33sHazGikB37zeYQtJAeGpWwkaYL4JF8nTRDMrKgeGX6PCuP2u4z6bhNRZcK9pmBWb%2BwgCaBEY%2FHJ2esiFBn0L819jlVsAVd%2B7Psj4bEtNhQn39jkIWazSXyRktlpQ8vomxRcJFAi9BRDsHZHAegzyGJ8ZkAfMnDwI1XTSpBHPr689LVYRfrNpX3q5QdQtNDCPqKG%2FBjqkAXuPJfI90fklSrIeVMSl0H8VSLROPfLAJwEwmUSD5E5JlVibiKYn6nnot2wo2xjBycyc2uGRp6etfKkOchPRf3Ea8TAVmKvdBWnxKlwhH1067bYbrylz3Fm39He74ZG9ktVwQ0PyTl8BDphhMRG6qXhD2x70xoRyl0zetkGPLMxlXhgvU1hMRkH4cXWTMmdkpVtQwsDh2uwobmxNyEMHPVPm2794&X-Amz-Signature=f64fafd169f0c8ed0b81ad84d37427e3549db1f0db4808ccf8ae6b52e7d3d756&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRDLCCI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDq4xwVMDgdOV0d5jBkQT8njkeT7ABuVtjFbaAZQg29KAIhAOzPjKPvU2oGc3BgicScxT6NkKgZ4khX3S5lHguOpFqCKv8DCH0QABoMNjM3NDIzMTgzODA1Igysd2f1FfiZJZEHSc0q3AOeamkr6lWFVJrllq%2BvAGYj6%2FBM%2BuAXMeNrK3JPjxtYzwLk9lGyrTs1s1chG2zpN0bINMIcXovFGNyPrCTOfID2M0K%2F%2BGuRPYeH2k3IuDYAnyh%2FKUma0nRdCDcKCgwh3Vx1cQKYB07fyMjmJMpl%2FaIcMss7ATpxPdq%2F7rrcUb7mVkGCSPgVfShwwwbuc5gep%2BDuDAC52kzzks%2BOgeUJJiqMdoU9mSLKmYLSQ5s1L41BG48banN2%2FfyXoEJxkF3b9e7NZ7lCMa3iLBWcu2f9mzYdGdS%2Bwq%2FGxiV6U61g9vDPcKhS5b7Encqp99P%2BCX%2F%2FpK4K1Pv5CQ4k60hOGG%2BJQ7TXc%2BXR6giEB9ml6Hg6Mt%2FbL8EuTubbUfnSnAuqiC9iqu%2FGTOmVUF9gdeqTE%2BBlN5vKETHDIaEnJ0H6uy6mSU5sG6MHKG3A6DUS8678cq33sHazGikB37zeYQtJAeGpWwkaYL4JF8nTRDMrKgeGX6PCuP2u4z6bhNRZcK9pmBWb%2BwgCaBEY%2FHJ2esiFBn0L819jlVsAVd%2B7Psj4bEtNhQn39jkIWazSXyRktlpQ8vomxRcJFAi9BRDsHZHAegzyGJ8ZkAfMnDwI1XTSpBHPr689LVYRfrNpX3q5QdQtNDCPqKG%2FBjqkAXuPJfI90fklSrIeVMSl0H8VSLROPfLAJwEwmUSD5E5JlVibiKYn6nnot2wo2xjBycyc2uGRp6etfKkOchPRf3Ea8TAVmKvdBWnxKlwhH1067bYbrylz3Fm39He74ZG9ktVwQ0PyTl8BDphhMRG6qXhD2x70xoRyl0zetkGPLMxlXhgvU1hMRkH4cXWTMmdkpVtQwsDh2uwobmxNyEMHPVPm2794&X-Amz-Signature=cdf467e8e4724eb951cbd2c81581a77c0b75eb867327e62e059a48eb01f47d29&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRDLCCI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDq4xwVMDgdOV0d5jBkQT8njkeT7ABuVtjFbaAZQg29KAIhAOzPjKPvU2oGc3BgicScxT6NkKgZ4khX3S5lHguOpFqCKv8DCH0QABoMNjM3NDIzMTgzODA1Igysd2f1FfiZJZEHSc0q3AOeamkr6lWFVJrllq%2BvAGYj6%2FBM%2BuAXMeNrK3JPjxtYzwLk9lGyrTs1s1chG2zpN0bINMIcXovFGNyPrCTOfID2M0K%2F%2BGuRPYeH2k3IuDYAnyh%2FKUma0nRdCDcKCgwh3Vx1cQKYB07fyMjmJMpl%2FaIcMss7ATpxPdq%2F7rrcUb7mVkGCSPgVfShwwwbuc5gep%2BDuDAC52kzzks%2BOgeUJJiqMdoU9mSLKmYLSQ5s1L41BG48banN2%2FfyXoEJxkF3b9e7NZ7lCMa3iLBWcu2f9mzYdGdS%2Bwq%2FGxiV6U61g9vDPcKhS5b7Encqp99P%2BCX%2F%2FpK4K1Pv5CQ4k60hOGG%2BJQ7TXc%2BXR6giEB9ml6Hg6Mt%2FbL8EuTubbUfnSnAuqiC9iqu%2FGTOmVUF9gdeqTE%2BBlN5vKETHDIaEnJ0H6uy6mSU5sG6MHKG3A6DUS8678cq33sHazGikB37zeYQtJAeGpWwkaYL4JF8nTRDMrKgeGX6PCuP2u4z6bhNRZcK9pmBWb%2BwgCaBEY%2FHJ2esiFBn0L819jlVsAVd%2B7Psj4bEtNhQn39jkIWazSXyRktlpQ8vomxRcJFAi9BRDsHZHAegzyGJ8ZkAfMnDwI1XTSpBHPr689LVYRfrNpX3q5QdQtNDCPqKG%2FBjqkAXuPJfI90fklSrIeVMSl0H8VSLROPfLAJwEwmUSD5E5JlVibiKYn6nnot2wo2xjBycyc2uGRp6etfKkOchPRf3Ea8TAVmKvdBWnxKlwhH1067bYbrylz3Fm39He74ZG9ktVwQ0PyTl8BDphhMRG6qXhD2x70xoRyl0zetkGPLMxlXhgvU1hMRkH4cXWTMmdkpVtQwsDh2uwobmxNyEMHPVPm2794&X-Amz-Signature=4ed08848f129212504aab5d94b12d019de29c5b735434ea8281788297b11ee0b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRDLCCI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDq4xwVMDgdOV0d5jBkQT8njkeT7ABuVtjFbaAZQg29KAIhAOzPjKPvU2oGc3BgicScxT6NkKgZ4khX3S5lHguOpFqCKv8DCH0QABoMNjM3NDIzMTgzODA1Igysd2f1FfiZJZEHSc0q3AOeamkr6lWFVJrllq%2BvAGYj6%2FBM%2BuAXMeNrK3JPjxtYzwLk9lGyrTs1s1chG2zpN0bINMIcXovFGNyPrCTOfID2M0K%2F%2BGuRPYeH2k3IuDYAnyh%2FKUma0nRdCDcKCgwh3Vx1cQKYB07fyMjmJMpl%2FaIcMss7ATpxPdq%2F7rrcUb7mVkGCSPgVfShwwwbuc5gep%2BDuDAC52kzzks%2BOgeUJJiqMdoU9mSLKmYLSQ5s1L41BG48banN2%2FfyXoEJxkF3b9e7NZ7lCMa3iLBWcu2f9mzYdGdS%2Bwq%2FGxiV6U61g9vDPcKhS5b7Encqp99P%2BCX%2F%2FpK4K1Pv5CQ4k60hOGG%2BJQ7TXc%2BXR6giEB9ml6Hg6Mt%2FbL8EuTubbUfnSnAuqiC9iqu%2FGTOmVUF9gdeqTE%2BBlN5vKETHDIaEnJ0H6uy6mSU5sG6MHKG3A6DUS8678cq33sHazGikB37zeYQtJAeGpWwkaYL4JF8nTRDMrKgeGX6PCuP2u4z6bhNRZcK9pmBWb%2BwgCaBEY%2FHJ2esiFBn0L819jlVsAVd%2B7Psj4bEtNhQn39jkIWazSXyRktlpQ8vomxRcJFAi9BRDsHZHAegzyGJ8ZkAfMnDwI1XTSpBHPr689LVYRfrNpX3q5QdQtNDCPqKG%2FBjqkAXuPJfI90fklSrIeVMSl0H8VSLROPfLAJwEwmUSD5E5JlVibiKYn6nnot2wo2xjBycyc2uGRp6etfKkOchPRf3Ea8TAVmKvdBWnxKlwhH1067bYbrylz3Fm39He74ZG9ktVwQ0PyTl8BDphhMRG6qXhD2x70xoRyl0zetkGPLMxlXhgvU1hMRkH4cXWTMmdkpVtQwsDh2uwobmxNyEMHPVPm2794&X-Amz-Signature=33523daf4da033577084790a103d19423ea11c0fbfe9ad60b04cd67074745dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
