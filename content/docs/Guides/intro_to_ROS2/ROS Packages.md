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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573QVVPC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FsvVZlStoI3am7anlnnDJWsbLDy8DvONbeO4psotkFAIhAPmswr4D5POJkdjE6jbTzkm141LSuAUROQ1WhGxisMRYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pCSTAlvzsAtGOmAq3APShaszF%2Boa7Z3Syb3G1yEAr%2BgMNmyDlPEMBjkwOb%2FI%2B2rvFPfYYG%2FKeWLms12EZ8YeOyE%2BVFtBUddMKfxak6BzKTKw5EHiCaYOdJlvFyIGDoBXzH0bhy8tzjRrm93gZStudTvrhxAHSZS55se6Z6rYtPHCDZjP7us24h%2BPyMOTsupE5Tz5vC%2FAd9FUPAlZFMcgBR803rda%2F6TWI0ErJCxFHJQsR84poSEqdzi41HZJ47qK5kZRyjowBwHJq%2FwZMzZnEYA%2BH2VvdyvGFigs4CYgf4l5nNq2Ghl0Mzx%2B20sWOa93BFTxrJETNnuK3iypESARBhkvvFGIBkG0%2BmpfphVqtmnWRT3XvKxH9%2FgYdF8zu3cN5V4in%2Fz9y951o%2FYYkYCe2NpPOOLti3MSuqBHe49Rd8Wc7fnp2%2FAu68d96X2dCWcOjKdfek9zCmGaARri2oE%2B2h%2BqPy0jInO10WEuHaKLCU%2ByogFxCuWTMAojc%2B8K4Mg9nkH9qh5Qv2mu38isKnCItHvRqaPMNU08hTxmPtCJV18gjqun2ccGSCb9p%2FRHYpzhjK5AtlgwTiGF8cs4%2F2DyObL6Yrdk%2BubeKucSGtG5xxBDzdedQWx6%2FAPK3hRqZEUeMmTfAjrx8m%2Fj6jCvzcDDBjqkASfEPSvrc4WBW6QAVFAPA4eDPowu%2F9SvgAHNObZoz%2FXPxTMRB%2FaI%2FTW8wCn3EQGcK925m12TorU3BcQbYYSahqYrpOlqfADBrnU7QmoqU3GGA5Nhw6n6C9YS1nHUxzMPVf4E9i4E7eBUEWdD7mm0oO4Z6A41VSvTj15uyK514qqpmqHqn1Lu%2BfdV0MHPOI274Kg7Xbx4hsCGccKmT2bt8QKlRRp1&X-Amz-Signature=a02c4a9a126685004681b6dc1889fb520b52396b9e26765d54ef56336793bc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573QVVPC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FsvVZlStoI3am7anlnnDJWsbLDy8DvONbeO4psotkFAIhAPmswr4D5POJkdjE6jbTzkm141LSuAUROQ1WhGxisMRYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pCSTAlvzsAtGOmAq3APShaszF%2Boa7Z3Syb3G1yEAr%2BgMNmyDlPEMBjkwOb%2FI%2B2rvFPfYYG%2FKeWLms12EZ8YeOyE%2BVFtBUddMKfxak6BzKTKw5EHiCaYOdJlvFyIGDoBXzH0bhy8tzjRrm93gZStudTvrhxAHSZS55se6Z6rYtPHCDZjP7us24h%2BPyMOTsupE5Tz5vC%2FAd9FUPAlZFMcgBR803rda%2F6TWI0ErJCxFHJQsR84poSEqdzi41HZJ47qK5kZRyjowBwHJq%2FwZMzZnEYA%2BH2VvdyvGFigs4CYgf4l5nNq2Ghl0Mzx%2B20sWOa93BFTxrJETNnuK3iypESARBhkvvFGIBkG0%2BmpfphVqtmnWRT3XvKxH9%2FgYdF8zu3cN5V4in%2Fz9y951o%2FYYkYCe2NpPOOLti3MSuqBHe49Rd8Wc7fnp2%2FAu68d96X2dCWcOjKdfek9zCmGaARri2oE%2B2h%2BqPy0jInO10WEuHaKLCU%2ByogFxCuWTMAojc%2B8K4Mg9nkH9qh5Qv2mu38isKnCItHvRqaPMNU08hTxmPtCJV18gjqun2ccGSCb9p%2FRHYpzhjK5AtlgwTiGF8cs4%2F2DyObL6Yrdk%2BubeKucSGtG5xxBDzdedQWx6%2FAPK3hRqZEUeMmTfAjrx8m%2Fj6jCvzcDDBjqkASfEPSvrc4WBW6QAVFAPA4eDPowu%2F9SvgAHNObZoz%2FXPxTMRB%2FaI%2FTW8wCn3EQGcK925m12TorU3BcQbYYSahqYrpOlqfADBrnU7QmoqU3GGA5Nhw6n6C9YS1nHUxzMPVf4E9i4E7eBUEWdD7mm0oO4Z6A41VSvTj15uyK514qqpmqHqn1Lu%2BfdV0MHPOI274Kg7Xbx4hsCGccKmT2bt8QKlRRp1&X-Amz-Signature=36ce175f02757f8617a829a5c9924f7472f760553079074925e34eb2c715792c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573QVVPC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FsvVZlStoI3am7anlnnDJWsbLDy8DvONbeO4psotkFAIhAPmswr4D5POJkdjE6jbTzkm141LSuAUROQ1WhGxisMRYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pCSTAlvzsAtGOmAq3APShaszF%2Boa7Z3Syb3G1yEAr%2BgMNmyDlPEMBjkwOb%2FI%2B2rvFPfYYG%2FKeWLms12EZ8YeOyE%2BVFtBUddMKfxak6BzKTKw5EHiCaYOdJlvFyIGDoBXzH0bhy8tzjRrm93gZStudTvrhxAHSZS55se6Z6rYtPHCDZjP7us24h%2BPyMOTsupE5Tz5vC%2FAd9FUPAlZFMcgBR803rda%2F6TWI0ErJCxFHJQsR84poSEqdzi41HZJ47qK5kZRyjowBwHJq%2FwZMzZnEYA%2BH2VvdyvGFigs4CYgf4l5nNq2Ghl0Mzx%2B20sWOa93BFTxrJETNnuK3iypESARBhkvvFGIBkG0%2BmpfphVqtmnWRT3XvKxH9%2FgYdF8zu3cN5V4in%2Fz9y951o%2FYYkYCe2NpPOOLti3MSuqBHe49Rd8Wc7fnp2%2FAu68d96X2dCWcOjKdfek9zCmGaARri2oE%2B2h%2BqPy0jInO10WEuHaKLCU%2ByogFxCuWTMAojc%2B8K4Mg9nkH9qh5Qv2mu38isKnCItHvRqaPMNU08hTxmPtCJV18gjqun2ccGSCb9p%2FRHYpzhjK5AtlgwTiGF8cs4%2F2DyObL6Yrdk%2BubeKucSGtG5xxBDzdedQWx6%2FAPK3hRqZEUeMmTfAjrx8m%2Fj6jCvzcDDBjqkASfEPSvrc4WBW6QAVFAPA4eDPowu%2F9SvgAHNObZoz%2FXPxTMRB%2FaI%2FTW8wCn3EQGcK925m12TorU3BcQbYYSahqYrpOlqfADBrnU7QmoqU3GGA5Nhw6n6C9YS1nHUxzMPVf4E9i4E7eBUEWdD7mm0oO4Z6A41VSvTj15uyK514qqpmqHqn1Lu%2BfdV0MHPOI274Kg7Xbx4hsCGccKmT2bt8QKlRRp1&X-Amz-Signature=b8a4d0a2b1bc4b9a693c988b88ab2abbc72f2ff1b43e45b036a94388ee53f279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573QVVPC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FsvVZlStoI3am7anlnnDJWsbLDy8DvONbeO4psotkFAIhAPmswr4D5POJkdjE6jbTzkm141LSuAUROQ1WhGxisMRYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pCSTAlvzsAtGOmAq3APShaszF%2Boa7Z3Syb3G1yEAr%2BgMNmyDlPEMBjkwOb%2FI%2B2rvFPfYYG%2FKeWLms12EZ8YeOyE%2BVFtBUddMKfxak6BzKTKw5EHiCaYOdJlvFyIGDoBXzH0bhy8tzjRrm93gZStudTvrhxAHSZS55se6Z6rYtPHCDZjP7us24h%2BPyMOTsupE5Tz5vC%2FAd9FUPAlZFMcgBR803rda%2F6TWI0ErJCxFHJQsR84poSEqdzi41HZJ47qK5kZRyjowBwHJq%2FwZMzZnEYA%2BH2VvdyvGFigs4CYgf4l5nNq2Ghl0Mzx%2B20sWOa93BFTxrJETNnuK3iypESARBhkvvFGIBkG0%2BmpfphVqtmnWRT3XvKxH9%2FgYdF8zu3cN5V4in%2Fz9y951o%2FYYkYCe2NpPOOLti3MSuqBHe49Rd8Wc7fnp2%2FAu68d96X2dCWcOjKdfek9zCmGaARri2oE%2B2h%2BqPy0jInO10WEuHaKLCU%2ByogFxCuWTMAojc%2B8K4Mg9nkH9qh5Qv2mu38isKnCItHvRqaPMNU08hTxmPtCJV18gjqun2ccGSCb9p%2FRHYpzhjK5AtlgwTiGF8cs4%2F2DyObL6Yrdk%2BubeKucSGtG5xxBDzdedQWx6%2FAPK3hRqZEUeMmTfAjrx8m%2Fj6jCvzcDDBjqkASfEPSvrc4WBW6QAVFAPA4eDPowu%2F9SvgAHNObZoz%2FXPxTMRB%2FaI%2FTW8wCn3EQGcK925m12TorU3BcQbYYSahqYrpOlqfADBrnU7QmoqU3GGA5Nhw6n6C9YS1nHUxzMPVf4E9i4E7eBUEWdD7mm0oO4Z6A41VSvTj15uyK514qqpmqHqn1Lu%2BfdV0MHPOI274Kg7Xbx4hsCGccKmT2bt8QKlRRp1&X-Amz-Signature=a691c89a47ed21462cb777163a869b397e6d4593aa15cfb6e677986c7032b923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573QVVPC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FsvVZlStoI3am7anlnnDJWsbLDy8DvONbeO4psotkFAIhAPmswr4D5POJkdjE6jbTzkm141LSuAUROQ1WhGxisMRYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pCSTAlvzsAtGOmAq3APShaszF%2Boa7Z3Syb3G1yEAr%2BgMNmyDlPEMBjkwOb%2FI%2B2rvFPfYYG%2FKeWLms12EZ8YeOyE%2BVFtBUddMKfxak6BzKTKw5EHiCaYOdJlvFyIGDoBXzH0bhy8tzjRrm93gZStudTvrhxAHSZS55se6Z6rYtPHCDZjP7us24h%2BPyMOTsupE5Tz5vC%2FAd9FUPAlZFMcgBR803rda%2F6TWI0ErJCxFHJQsR84poSEqdzi41HZJ47qK5kZRyjowBwHJq%2FwZMzZnEYA%2BH2VvdyvGFigs4CYgf4l5nNq2Ghl0Mzx%2B20sWOa93BFTxrJETNnuK3iypESARBhkvvFGIBkG0%2BmpfphVqtmnWRT3XvKxH9%2FgYdF8zu3cN5V4in%2Fz9y951o%2FYYkYCe2NpPOOLti3MSuqBHe49Rd8Wc7fnp2%2FAu68d96X2dCWcOjKdfek9zCmGaARri2oE%2B2h%2BqPy0jInO10WEuHaKLCU%2ByogFxCuWTMAojc%2B8K4Mg9nkH9qh5Qv2mu38isKnCItHvRqaPMNU08hTxmPtCJV18gjqun2ccGSCb9p%2FRHYpzhjK5AtlgwTiGF8cs4%2F2DyObL6Yrdk%2BubeKucSGtG5xxBDzdedQWx6%2FAPK3hRqZEUeMmTfAjrx8m%2Fj6jCvzcDDBjqkASfEPSvrc4WBW6QAVFAPA4eDPowu%2F9SvgAHNObZoz%2FXPxTMRB%2FaI%2FTW8wCn3EQGcK925m12TorU3BcQbYYSahqYrpOlqfADBrnU7QmoqU3GGA5Nhw6n6C9YS1nHUxzMPVf4E9i4E7eBUEWdD7mm0oO4Z6A41VSvTj15uyK514qqpmqHqn1Lu%2BfdV0MHPOI274Kg7Xbx4hsCGccKmT2bt8QKlRRp1&X-Amz-Signature=183fa07d2b36ac82b7c32d94e0298e300d2b5e49cfb552a4d323d7850bd94204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573QVVPC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FsvVZlStoI3am7anlnnDJWsbLDy8DvONbeO4psotkFAIhAPmswr4D5POJkdjE6jbTzkm141LSuAUROQ1WhGxisMRYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pCSTAlvzsAtGOmAq3APShaszF%2Boa7Z3Syb3G1yEAr%2BgMNmyDlPEMBjkwOb%2FI%2B2rvFPfYYG%2FKeWLms12EZ8YeOyE%2BVFtBUddMKfxak6BzKTKw5EHiCaYOdJlvFyIGDoBXzH0bhy8tzjRrm93gZStudTvrhxAHSZS55se6Z6rYtPHCDZjP7us24h%2BPyMOTsupE5Tz5vC%2FAd9FUPAlZFMcgBR803rda%2F6TWI0ErJCxFHJQsR84poSEqdzi41HZJ47qK5kZRyjowBwHJq%2FwZMzZnEYA%2BH2VvdyvGFigs4CYgf4l5nNq2Ghl0Mzx%2B20sWOa93BFTxrJETNnuK3iypESARBhkvvFGIBkG0%2BmpfphVqtmnWRT3XvKxH9%2FgYdF8zu3cN5V4in%2Fz9y951o%2FYYkYCe2NpPOOLti3MSuqBHe49Rd8Wc7fnp2%2FAu68d96X2dCWcOjKdfek9zCmGaARri2oE%2B2h%2BqPy0jInO10WEuHaKLCU%2ByogFxCuWTMAojc%2B8K4Mg9nkH9qh5Qv2mu38isKnCItHvRqaPMNU08hTxmPtCJV18gjqun2ccGSCb9p%2FRHYpzhjK5AtlgwTiGF8cs4%2F2DyObL6Yrdk%2BubeKucSGtG5xxBDzdedQWx6%2FAPK3hRqZEUeMmTfAjrx8m%2Fj6jCvzcDDBjqkASfEPSvrc4WBW6QAVFAPA4eDPowu%2F9SvgAHNObZoz%2FXPxTMRB%2FaI%2FTW8wCn3EQGcK925m12TorU3BcQbYYSahqYrpOlqfADBrnU7QmoqU3GGA5Nhw6n6C9YS1nHUxzMPVf4E9i4E7eBUEWdD7mm0oO4Z6A41VSvTj15uyK514qqpmqHqn1Lu%2BfdV0MHPOI274Kg7Xbx4hsCGccKmT2bt8QKlRRp1&X-Amz-Signature=706b74bedf9c03ac5de9a05a9c48953d3e1b16a1918d153018bc4c053a492f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573QVVPC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FsvVZlStoI3am7anlnnDJWsbLDy8DvONbeO4psotkFAIhAPmswr4D5POJkdjE6jbTzkm141LSuAUROQ1WhGxisMRYKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pCSTAlvzsAtGOmAq3APShaszF%2Boa7Z3Syb3G1yEAr%2BgMNmyDlPEMBjkwOb%2FI%2B2rvFPfYYG%2FKeWLms12EZ8YeOyE%2BVFtBUddMKfxak6BzKTKw5EHiCaYOdJlvFyIGDoBXzH0bhy8tzjRrm93gZStudTvrhxAHSZS55se6Z6rYtPHCDZjP7us24h%2BPyMOTsupE5Tz5vC%2FAd9FUPAlZFMcgBR803rda%2F6TWI0ErJCxFHJQsR84poSEqdzi41HZJ47qK5kZRyjowBwHJq%2FwZMzZnEYA%2BH2VvdyvGFigs4CYgf4l5nNq2Ghl0Mzx%2B20sWOa93BFTxrJETNnuK3iypESARBhkvvFGIBkG0%2BmpfphVqtmnWRT3XvKxH9%2FgYdF8zu3cN5V4in%2Fz9y951o%2FYYkYCe2NpPOOLti3MSuqBHe49Rd8Wc7fnp2%2FAu68d96X2dCWcOjKdfek9zCmGaARri2oE%2B2h%2BqPy0jInO10WEuHaKLCU%2ByogFxCuWTMAojc%2B8K4Mg9nkH9qh5Qv2mu38isKnCItHvRqaPMNU08hTxmPtCJV18gjqun2ccGSCb9p%2FRHYpzhjK5AtlgwTiGF8cs4%2F2DyObL6Yrdk%2BubeKucSGtG5xxBDzdedQWx6%2FAPK3hRqZEUeMmTfAjrx8m%2Fj6jCvzcDDBjqkASfEPSvrc4WBW6QAVFAPA4eDPowu%2F9SvgAHNObZoz%2FXPxTMRB%2FaI%2FTW8wCn3EQGcK925m12TorU3BcQbYYSahqYrpOlqfADBrnU7QmoqU3GGA5Nhw6n6C9YS1nHUxzMPVf4E9i4E7eBUEWdD7mm0oO4Z6A41VSvTj15uyK514qqpmqHqn1Lu%2BfdV0MHPOI274Kg7Xbx4hsCGccKmT2bt8QKlRRp1&X-Amz-Signature=66f5d500cbca2e1981c644c48bc0be86e25acd6f99f7c709a421a23238bdbbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
