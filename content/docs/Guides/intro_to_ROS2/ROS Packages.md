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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTQKHQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw0SmRNkjjp5JuOcy9t7lVd%2B3DkfxlvTfwobGkfm73gIgK3rGqPLcmqhNtpZxR3z600PUmmcfwM4rMoMw60yIb5Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFJKlINIIQpC1FfKfyrcA3%2FBhYWlb8BRNGYaXSggFMRESRGfxAmYeIgtt1ebx6C%2FKyuI6OPpaSjxcYQ%2F1%2F5Dec31rkpXk5BMzL%2BEHNA4fpw3msPai6DdbsF%2FE%2BRRiglnSs0R72sn%2FVPcBn3LXYSLnAl8koa8jK1IdsLxf9V4OEK5voc2VEgskgo7z66%2B%2BYift3pEywt2OMIuZvKvev6wRf01vFRBehow7FXMSHLjP68x57MZRmJB7PHJsg1Bj9WGy9gmPXGTHINJVnbSXm79mMD6QBTRacyQw3VdOB5AZOtZxZiPCPGwpvGoY%2BC%2BgORvCeFlLx19qy14TP2gwMGarH6i%2BKxxsoiuQEI9OgGmvbEecvOCh02fem8y1XcWZNqSGPUmzIhscvtBqRDvWT3pFeQQXUP%2BoU%2Fmf8axeSEbTKG%2BJrwRkmzfaisD3rWPOa5ksNQq8r1ehSN3BVQlaEVxzUDCq4tBdEHs0VPSov6NFeZKUlo%2FYFxAMVBKA0uEdwHeePwZn6mpargyJS2cizSDZfF2dJyGkvfkxiCH3Sa2x0%2FaA2yImQcGvKFflo3pBi2VEJbjKjL6jsSHk6mhlg%2FN%2FRxY00pT%2FUm31GcxmW%2Fg%2FHygj9fF3ubhWZelL%2B2PlxpcOxH1lCwt6%2FlX0SKbMKPnqMEGOqUBJ7hDeZOx1O2fQ3X4VsBZAW8KGAVWcXiTLbDS8weN%2FpIbx6A0rGvEyxqzkGolE%2FCExhqB%2Bh8i744rbLkWejwgIyyjo8Hkt6VRZk4nds%2FQngnZ9sq2UvZWrQVqRJnqnAgEePY1gFw37LRj0wBJMdCtLaFt4I2QzFOOLcZRkEF20UcU3OxoIcZKuqy2UO6APVi1zk06%2Fn5XAv0Ct1vUPU%2BlwSkZjIb0&X-Amz-Signature=7275f8d319cf0a5b8de4619d294c85969f1f43c4764ccb9dc50139d5dffce958&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTQKHQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw0SmRNkjjp5JuOcy9t7lVd%2B3DkfxlvTfwobGkfm73gIgK3rGqPLcmqhNtpZxR3z600PUmmcfwM4rMoMw60yIb5Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFJKlINIIQpC1FfKfyrcA3%2FBhYWlb8BRNGYaXSggFMRESRGfxAmYeIgtt1ebx6C%2FKyuI6OPpaSjxcYQ%2F1%2F5Dec31rkpXk5BMzL%2BEHNA4fpw3msPai6DdbsF%2FE%2BRRiglnSs0R72sn%2FVPcBn3LXYSLnAl8koa8jK1IdsLxf9V4OEK5voc2VEgskgo7z66%2B%2BYift3pEywt2OMIuZvKvev6wRf01vFRBehow7FXMSHLjP68x57MZRmJB7PHJsg1Bj9WGy9gmPXGTHINJVnbSXm79mMD6QBTRacyQw3VdOB5AZOtZxZiPCPGwpvGoY%2BC%2BgORvCeFlLx19qy14TP2gwMGarH6i%2BKxxsoiuQEI9OgGmvbEecvOCh02fem8y1XcWZNqSGPUmzIhscvtBqRDvWT3pFeQQXUP%2BoU%2Fmf8axeSEbTKG%2BJrwRkmzfaisD3rWPOa5ksNQq8r1ehSN3BVQlaEVxzUDCq4tBdEHs0VPSov6NFeZKUlo%2FYFxAMVBKA0uEdwHeePwZn6mpargyJS2cizSDZfF2dJyGkvfkxiCH3Sa2x0%2FaA2yImQcGvKFflo3pBi2VEJbjKjL6jsSHk6mhlg%2FN%2FRxY00pT%2FUm31GcxmW%2Fg%2FHygj9fF3ubhWZelL%2B2PlxpcOxH1lCwt6%2FlX0SKbMKPnqMEGOqUBJ7hDeZOx1O2fQ3X4VsBZAW8KGAVWcXiTLbDS8weN%2FpIbx6A0rGvEyxqzkGolE%2FCExhqB%2Bh8i744rbLkWejwgIyyjo8Hkt6VRZk4nds%2FQngnZ9sq2UvZWrQVqRJnqnAgEePY1gFw37LRj0wBJMdCtLaFt4I2QzFOOLcZRkEF20UcU3OxoIcZKuqy2UO6APVi1zk06%2Fn5XAv0Ct1vUPU%2BlwSkZjIb0&X-Amz-Signature=9ad430c3f57f79dbbee85018a481866649538c457c06fb3ce36eb90cfb8f7341&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTQKHQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw0SmRNkjjp5JuOcy9t7lVd%2B3DkfxlvTfwobGkfm73gIgK3rGqPLcmqhNtpZxR3z600PUmmcfwM4rMoMw60yIb5Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFJKlINIIQpC1FfKfyrcA3%2FBhYWlb8BRNGYaXSggFMRESRGfxAmYeIgtt1ebx6C%2FKyuI6OPpaSjxcYQ%2F1%2F5Dec31rkpXk5BMzL%2BEHNA4fpw3msPai6DdbsF%2FE%2BRRiglnSs0R72sn%2FVPcBn3LXYSLnAl8koa8jK1IdsLxf9V4OEK5voc2VEgskgo7z66%2B%2BYift3pEywt2OMIuZvKvev6wRf01vFRBehow7FXMSHLjP68x57MZRmJB7PHJsg1Bj9WGy9gmPXGTHINJVnbSXm79mMD6QBTRacyQw3VdOB5AZOtZxZiPCPGwpvGoY%2BC%2BgORvCeFlLx19qy14TP2gwMGarH6i%2BKxxsoiuQEI9OgGmvbEecvOCh02fem8y1XcWZNqSGPUmzIhscvtBqRDvWT3pFeQQXUP%2BoU%2Fmf8axeSEbTKG%2BJrwRkmzfaisD3rWPOa5ksNQq8r1ehSN3BVQlaEVxzUDCq4tBdEHs0VPSov6NFeZKUlo%2FYFxAMVBKA0uEdwHeePwZn6mpargyJS2cizSDZfF2dJyGkvfkxiCH3Sa2x0%2FaA2yImQcGvKFflo3pBi2VEJbjKjL6jsSHk6mhlg%2FN%2FRxY00pT%2FUm31GcxmW%2Fg%2FHygj9fF3ubhWZelL%2B2PlxpcOxH1lCwt6%2FlX0SKbMKPnqMEGOqUBJ7hDeZOx1O2fQ3X4VsBZAW8KGAVWcXiTLbDS8weN%2FpIbx6A0rGvEyxqzkGolE%2FCExhqB%2Bh8i744rbLkWejwgIyyjo8Hkt6VRZk4nds%2FQngnZ9sq2UvZWrQVqRJnqnAgEePY1gFw37LRj0wBJMdCtLaFt4I2QzFOOLcZRkEF20UcU3OxoIcZKuqy2UO6APVi1zk06%2Fn5XAv0Ct1vUPU%2BlwSkZjIb0&X-Amz-Signature=e7d1138ecb3140029f9c7db36819ca905cce8e1e85a735aad8fbf47bd98a13cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTQKHQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw0SmRNkjjp5JuOcy9t7lVd%2B3DkfxlvTfwobGkfm73gIgK3rGqPLcmqhNtpZxR3z600PUmmcfwM4rMoMw60yIb5Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFJKlINIIQpC1FfKfyrcA3%2FBhYWlb8BRNGYaXSggFMRESRGfxAmYeIgtt1ebx6C%2FKyuI6OPpaSjxcYQ%2F1%2F5Dec31rkpXk5BMzL%2BEHNA4fpw3msPai6DdbsF%2FE%2BRRiglnSs0R72sn%2FVPcBn3LXYSLnAl8koa8jK1IdsLxf9V4OEK5voc2VEgskgo7z66%2B%2BYift3pEywt2OMIuZvKvev6wRf01vFRBehow7FXMSHLjP68x57MZRmJB7PHJsg1Bj9WGy9gmPXGTHINJVnbSXm79mMD6QBTRacyQw3VdOB5AZOtZxZiPCPGwpvGoY%2BC%2BgORvCeFlLx19qy14TP2gwMGarH6i%2BKxxsoiuQEI9OgGmvbEecvOCh02fem8y1XcWZNqSGPUmzIhscvtBqRDvWT3pFeQQXUP%2BoU%2Fmf8axeSEbTKG%2BJrwRkmzfaisD3rWPOa5ksNQq8r1ehSN3BVQlaEVxzUDCq4tBdEHs0VPSov6NFeZKUlo%2FYFxAMVBKA0uEdwHeePwZn6mpargyJS2cizSDZfF2dJyGkvfkxiCH3Sa2x0%2FaA2yImQcGvKFflo3pBi2VEJbjKjL6jsSHk6mhlg%2FN%2FRxY00pT%2FUm31GcxmW%2Fg%2FHygj9fF3ubhWZelL%2B2PlxpcOxH1lCwt6%2FlX0SKbMKPnqMEGOqUBJ7hDeZOx1O2fQ3X4VsBZAW8KGAVWcXiTLbDS8weN%2FpIbx6A0rGvEyxqzkGolE%2FCExhqB%2Bh8i744rbLkWejwgIyyjo8Hkt6VRZk4nds%2FQngnZ9sq2UvZWrQVqRJnqnAgEePY1gFw37LRj0wBJMdCtLaFt4I2QzFOOLcZRkEF20UcU3OxoIcZKuqy2UO6APVi1zk06%2Fn5XAv0Ct1vUPU%2BlwSkZjIb0&X-Amz-Signature=5ae060ca1a719e049d8e953930eea2d96984be66e6ae9b3423d4958aa77d647d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTQKHQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw0SmRNkjjp5JuOcy9t7lVd%2B3DkfxlvTfwobGkfm73gIgK3rGqPLcmqhNtpZxR3z600PUmmcfwM4rMoMw60yIb5Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFJKlINIIQpC1FfKfyrcA3%2FBhYWlb8BRNGYaXSggFMRESRGfxAmYeIgtt1ebx6C%2FKyuI6OPpaSjxcYQ%2F1%2F5Dec31rkpXk5BMzL%2BEHNA4fpw3msPai6DdbsF%2FE%2BRRiglnSs0R72sn%2FVPcBn3LXYSLnAl8koa8jK1IdsLxf9V4OEK5voc2VEgskgo7z66%2B%2BYift3pEywt2OMIuZvKvev6wRf01vFRBehow7FXMSHLjP68x57MZRmJB7PHJsg1Bj9WGy9gmPXGTHINJVnbSXm79mMD6QBTRacyQw3VdOB5AZOtZxZiPCPGwpvGoY%2BC%2BgORvCeFlLx19qy14TP2gwMGarH6i%2BKxxsoiuQEI9OgGmvbEecvOCh02fem8y1XcWZNqSGPUmzIhscvtBqRDvWT3pFeQQXUP%2BoU%2Fmf8axeSEbTKG%2BJrwRkmzfaisD3rWPOa5ksNQq8r1ehSN3BVQlaEVxzUDCq4tBdEHs0VPSov6NFeZKUlo%2FYFxAMVBKA0uEdwHeePwZn6mpargyJS2cizSDZfF2dJyGkvfkxiCH3Sa2x0%2FaA2yImQcGvKFflo3pBi2VEJbjKjL6jsSHk6mhlg%2FN%2FRxY00pT%2FUm31GcxmW%2Fg%2FHygj9fF3ubhWZelL%2B2PlxpcOxH1lCwt6%2FlX0SKbMKPnqMEGOqUBJ7hDeZOx1O2fQ3X4VsBZAW8KGAVWcXiTLbDS8weN%2FpIbx6A0rGvEyxqzkGolE%2FCExhqB%2Bh8i744rbLkWejwgIyyjo8Hkt6VRZk4nds%2FQngnZ9sq2UvZWrQVqRJnqnAgEePY1gFw37LRj0wBJMdCtLaFt4I2QzFOOLcZRkEF20UcU3OxoIcZKuqy2UO6APVi1zk06%2Fn5XAv0Ct1vUPU%2BlwSkZjIb0&X-Amz-Signature=d43e90fef0fc0dd3f7329f391aecb47566fdbc07c0fe7b05146c3da6d7967e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTQKHQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw0SmRNkjjp5JuOcy9t7lVd%2B3DkfxlvTfwobGkfm73gIgK3rGqPLcmqhNtpZxR3z600PUmmcfwM4rMoMw60yIb5Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFJKlINIIQpC1FfKfyrcA3%2FBhYWlb8BRNGYaXSggFMRESRGfxAmYeIgtt1ebx6C%2FKyuI6OPpaSjxcYQ%2F1%2F5Dec31rkpXk5BMzL%2BEHNA4fpw3msPai6DdbsF%2FE%2BRRiglnSs0R72sn%2FVPcBn3LXYSLnAl8koa8jK1IdsLxf9V4OEK5voc2VEgskgo7z66%2B%2BYift3pEywt2OMIuZvKvev6wRf01vFRBehow7FXMSHLjP68x57MZRmJB7PHJsg1Bj9WGy9gmPXGTHINJVnbSXm79mMD6QBTRacyQw3VdOB5AZOtZxZiPCPGwpvGoY%2BC%2BgORvCeFlLx19qy14TP2gwMGarH6i%2BKxxsoiuQEI9OgGmvbEecvOCh02fem8y1XcWZNqSGPUmzIhscvtBqRDvWT3pFeQQXUP%2BoU%2Fmf8axeSEbTKG%2BJrwRkmzfaisD3rWPOa5ksNQq8r1ehSN3BVQlaEVxzUDCq4tBdEHs0VPSov6NFeZKUlo%2FYFxAMVBKA0uEdwHeePwZn6mpargyJS2cizSDZfF2dJyGkvfkxiCH3Sa2x0%2FaA2yImQcGvKFflo3pBi2VEJbjKjL6jsSHk6mhlg%2FN%2FRxY00pT%2FUm31GcxmW%2Fg%2FHygj9fF3ubhWZelL%2B2PlxpcOxH1lCwt6%2FlX0SKbMKPnqMEGOqUBJ7hDeZOx1O2fQ3X4VsBZAW8KGAVWcXiTLbDS8weN%2FpIbx6A0rGvEyxqzkGolE%2FCExhqB%2Bh8i744rbLkWejwgIyyjo8Hkt6VRZk4nds%2FQngnZ9sq2UvZWrQVqRJnqnAgEePY1gFw37LRj0wBJMdCtLaFt4I2QzFOOLcZRkEF20UcU3OxoIcZKuqy2UO6APVi1zk06%2Fn5XAv0Ct1vUPU%2BlwSkZjIb0&X-Amz-Signature=e612caf7263ca30d4f61d245749cd7aa45939308bc4c2653b96fb3f885880693&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTQKHQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiw0SmRNkjjp5JuOcy9t7lVd%2B3DkfxlvTfwobGkfm73gIgK3rGqPLcmqhNtpZxR3z600PUmmcfwM4rMoMw60yIb5Aq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFJKlINIIQpC1FfKfyrcA3%2FBhYWlb8BRNGYaXSggFMRESRGfxAmYeIgtt1ebx6C%2FKyuI6OPpaSjxcYQ%2F1%2F5Dec31rkpXk5BMzL%2BEHNA4fpw3msPai6DdbsF%2FE%2BRRiglnSs0R72sn%2FVPcBn3LXYSLnAl8koa8jK1IdsLxf9V4OEK5voc2VEgskgo7z66%2B%2BYift3pEywt2OMIuZvKvev6wRf01vFRBehow7FXMSHLjP68x57MZRmJB7PHJsg1Bj9WGy9gmPXGTHINJVnbSXm79mMD6QBTRacyQw3VdOB5AZOtZxZiPCPGwpvGoY%2BC%2BgORvCeFlLx19qy14TP2gwMGarH6i%2BKxxsoiuQEI9OgGmvbEecvOCh02fem8y1XcWZNqSGPUmzIhscvtBqRDvWT3pFeQQXUP%2BoU%2Fmf8axeSEbTKG%2BJrwRkmzfaisD3rWPOa5ksNQq8r1ehSN3BVQlaEVxzUDCq4tBdEHs0VPSov6NFeZKUlo%2FYFxAMVBKA0uEdwHeePwZn6mpargyJS2cizSDZfF2dJyGkvfkxiCH3Sa2x0%2FaA2yImQcGvKFflo3pBi2VEJbjKjL6jsSHk6mhlg%2FN%2FRxY00pT%2FUm31GcxmW%2Fg%2FHygj9fF3ubhWZelL%2B2PlxpcOxH1lCwt6%2FlX0SKbMKPnqMEGOqUBJ7hDeZOx1O2fQ3X4VsBZAW8KGAVWcXiTLbDS8weN%2FpIbx6A0rGvEyxqzkGolE%2FCExhqB%2Bh8i744rbLkWejwgIyyjo8Hkt6VRZk4nds%2FQngnZ9sq2UvZWrQVqRJnqnAgEePY1gFw37LRj0wBJMdCtLaFt4I2QzFOOLcZRkEF20UcU3OxoIcZKuqy2UO6APVi1zk06%2Fn5XAv0Ct1vUPU%2BlwSkZjIb0&X-Amz-Signature=f514966c4c33b0a7b65999266f8d8bf7cf44b06bd5304572a4e428553c4f90f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
