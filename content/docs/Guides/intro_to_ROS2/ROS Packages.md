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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPGFW67%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCLVS4onEPnrHMpxbUOFUETnyZx1%2BLK5IbV1qQ6kZepDgIgVv6OZr9YZ8yxIm7FjyZGmHcMvk8v%2FWBFeEXsWDIxg1AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2wdUVYXRXLV74%2BUircA7t4Ek8gbT0KYUn9AhvpB71rcijammueBmq1%2BiTtFQhzWBqc0I8tmYSJmwigyPL05Y6NY3fhgQM8%2BtT0IeljkRnPV3JcVIRaZ7%2FxgIMbbOdtVzybqGKGRcegiufGaFdcbJIwne4vFEgcxs4%2FeDTLn4LNIvuJDe8ANytErr6SWH4jCwuPorVaZ0iy9eJ8%2FAKwx3ZrmhnxM46VzF%2BvxdKwIsBRgtapWcNo7zFyxxPl%2Bh1kuZPx44BjceHdBn7KfDkjU%2FuJmWtDnwHxEks4e6kxicmC5yL%2Bz2kDcBWIis%2FP9eug9nMTxSQc2SbFo4GCa1kfdOeDVn0fsl8J%2BqFAlxRshslRzoacSZHm4t1aALZf7oJiQOvjBL1flS5y40ozHnQntG2jRzK5KGLBbz%2FcxoFpPArImWoa1nYhDPDVg3W4uUdOqqlWHD0JSNlOe4vDnOTaIAncAgRuGPORYrJ8BwmSa4BUbgZ2WdNuEOfdGrosnelUmlrPidmLCnEEF0x04J%2FVCRIbPg5aLPsDsPyIUGQjjWUaUy5ICLfcbG9MEChqjx5L%2FwU2meXF0m8IqF%2BpvHJ1V27XHSlAHwQpaqturR9pHbJOaba5sicDUzoOzxUQyTocSUnx%2Fvri3NuExTmrMLa25L8GOqUBUStqFu6%2FXGsuv7o%2FE915HLc09q786uaTptVe48z4CNVd1Z1fFf39Yr8QhBePORckaftsmMaontGLI02z4mUcHjjZWFbSdMo87XzPLxr93hpshGRUbDqQXTN4irsBjursfkuND4Ywdkyqn8ZPyNTIADqQ0Rwxl5CCovrO89fVgmlnwC0UpCTmvXtoWoUgj6EqFyqUxBFn303RoJtMIcOrixIdDAik&X-Amz-Signature=8106a54aec8faf45ba1dfd75a468eabc102ab5c8a5887721fa3369a2b5d056df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPGFW67%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCLVS4onEPnrHMpxbUOFUETnyZx1%2BLK5IbV1qQ6kZepDgIgVv6OZr9YZ8yxIm7FjyZGmHcMvk8v%2FWBFeEXsWDIxg1AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2wdUVYXRXLV74%2BUircA7t4Ek8gbT0KYUn9AhvpB71rcijammueBmq1%2BiTtFQhzWBqc0I8tmYSJmwigyPL05Y6NY3fhgQM8%2BtT0IeljkRnPV3JcVIRaZ7%2FxgIMbbOdtVzybqGKGRcegiufGaFdcbJIwne4vFEgcxs4%2FeDTLn4LNIvuJDe8ANytErr6SWH4jCwuPorVaZ0iy9eJ8%2FAKwx3ZrmhnxM46VzF%2BvxdKwIsBRgtapWcNo7zFyxxPl%2Bh1kuZPx44BjceHdBn7KfDkjU%2FuJmWtDnwHxEks4e6kxicmC5yL%2Bz2kDcBWIis%2FP9eug9nMTxSQc2SbFo4GCa1kfdOeDVn0fsl8J%2BqFAlxRshslRzoacSZHm4t1aALZf7oJiQOvjBL1flS5y40ozHnQntG2jRzK5KGLBbz%2FcxoFpPArImWoa1nYhDPDVg3W4uUdOqqlWHD0JSNlOe4vDnOTaIAncAgRuGPORYrJ8BwmSa4BUbgZ2WdNuEOfdGrosnelUmlrPidmLCnEEF0x04J%2FVCRIbPg5aLPsDsPyIUGQjjWUaUy5ICLfcbG9MEChqjx5L%2FwU2meXF0m8IqF%2BpvHJ1V27XHSlAHwQpaqturR9pHbJOaba5sicDUzoOzxUQyTocSUnx%2Fvri3NuExTmrMLa25L8GOqUBUStqFu6%2FXGsuv7o%2FE915HLc09q786uaTptVe48z4CNVd1Z1fFf39Yr8QhBePORckaftsmMaontGLI02z4mUcHjjZWFbSdMo87XzPLxr93hpshGRUbDqQXTN4irsBjursfkuND4Ywdkyqn8ZPyNTIADqQ0Rwxl5CCovrO89fVgmlnwC0UpCTmvXtoWoUgj6EqFyqUxBFn303RoJtMIcOrixIdDAik&X-Amz-Signature=d13fd935363ec1610362eb3069106cdda13e3f8de0a0865b743cd2e745ac3744&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPGFW67%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCLVS4onEPnrHMpxbUOFUETnyZx1%2BLK5IbV1qQ6kZepDgIgVv6OZr9YZ8yxIm7FjyZGmHcMvk8v%2FWBFeEXsWDIxg1AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2wdUVYXRXLV74%2BUircA7t4Ek8gbT0KYUn9AhvpB71rcijammueBmq1%2BiTtFQhzWBqc0I8tmYSJmwigyPL05Y6NY3fhgQM8%2BtT0IeljkRnPV3JcVIRaZ7%2FxgIMbbOdtVzybqGKGRcegiufGaFdcbJIwne4vFEgcxs4%2FeDTLn4LNIvuJDe8ANytErr6SWH4jCwuPorVaZ0iy9eJ8%2FAKwx3ZrmhnxM46VzF%2BvxdKwIsBRgtapWcNo7zFyxxPl%2Bh1kuZPx44BjceHdBn7KfDkjU%2FuJmWtDnwHxEks4e6kxicmC5yL%2Bz2kDcBWIis%2FP9eug9nMTxSQc2SbFo4GCa1kfdOeDVn0fsl8J%2BqFAlxRshslRzoacSZHm4t1aALZf7oJiQOvjBL1flS5y40ozHnQntG2jRzK5KGLBbz%2FcxoFpPArImWoa1nYhDPDVg3W4uUdOqqlWHD0JSNlOe4vDnOTaIAncAgRuGPORYrJ8BwmSa4BUbgZ2WdNuEOfdGrosnelUmlrPidmLCnEEF0x04J%2FVCRIbPg5aLPsDsPyIUGQjjWUaUy5ICLfcbG9MEChqjx5L%2FwU2meXF0m8IqF%2BpvHJ1V27XHSlAHwQpaqturR9pHbJOaba5sicDUzoOzxUQyTocSUnx%2Fvri3NuExTmrMLa25L8GOqUBUStqFu6%2FXGsuv7o%2FE915HLc09q786uaTptVe48z4CNVd1Z1fFf39Yr8QhBePORckaftsmMaontGLI02z4mUcHjjZWFbSdMo87XzPLxr93hpshGRUbDqQXTN4irsBjursfkuND4Ywdkyqn8ZPyNTIADqQ0Rwxl5CCovrO89fVgmlnwC0UpCTmvXtoWoUgj6EqFyqUxBFn303RoJtMIcOrixIdDAik&X-Amz-Signature=3cf85e1b3fa4a7f946fa47bd5f1868ed7dd12d7646ff06ee7a8ff1da08a1858c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPGFW67%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCLVS4onEPnrHMpxbUOFUETnyZx1%2BLK5IbV1qQ6kZepDgIgVv6OZr9YZ8yxIm7FjyZGmHcMvk8v%2FWBFeEXsWDIxg1AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2wdUVYXRXLV74%2BUircA7t4Ek8gbT0KYUn9AhvpB71rcijammueBmq1%2BiTtFQhzWBqc0I8tmYSJmwigyPL05Y6NY3fhgQM8%2BtT0IeljkRnPV3JcVIRaZ7%2FxgIMbbOdtVzybqGKGRcegiufGaFdcbJIwne4vFEgcxs4%2FeDTLn4LNIvuJDe8ANytErr6SWH4jCwuPorVaZ0iy9eJ8%2FAKwx3ZrmhnxM46VzF%2BvxdKwIsBRgtapWcNo7zFyxxPl%2Bh1kuZPx44BjceHdBn7KfDkjU%2FuJmWtDnwHxEks4e6kxicmC5yL%2Bz2kDcBWIis%2FP9eug9nMTxSQc2SbFo4GCa1kfdOeDVn0fsl8J%2BqFAlxRshslRzoacSZHm4t1aALZf7oJiQOvjBL1flS5y40ozHnQntG2jRzK5KGLBbz%2FcxoFpPArImWoa1nYhDPDVg3W4uUdOqqlWHD0JSNlOe4vDnOTaIAncAgRuGPORYrJ8BwmSa4BUbgZ2WdNuEOfdGrosnelUmlrPidmLCnEEF0x04J%2FVCRIbPg5aLPsDsPyIUGQjjWUaUy5ICLfcbG9MEChqjx5L%2FwU2meXF0m8IqF%2BpvHJ1V27XHSlAHwQpaqturR9pHbJOaba5sicDUzoOzxUQyTocSUnx%2Fvri3NuExTmrMLa25L8GOqUBUStqFu6%2FXGsuv7o%2FE915HLc09q786uaTptVe48z4CNVd1Z1fFf39Yr8QhBePORckaftsmMaontGLI02z4mUcHjjZWFbSdMo87XzPLxr93hpshGRUbDqQXTN4irsBjursfkuND4Ywdkyqn8ZPyNTIADqQ0Rwxl5CCovrO89fVgmlnwC0UpCTmvXtoWoUgj6EqFyqUxBFn303RoJtMIcOrixIdDAik&X-Amz-Signature=67f7c009d674704486f0ad8c511e31a8c6ce0dac0ab98f73c9f3416d07abb599&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPGFW67%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCLVS4onEPnrHMpxbUOFUETnyZx1%2BLK5IbV1qQ6kZepDgIgVv6OZr9YZ8yxIm7FjyZGmHcMvk8v%2FWBFeEXsWDIxg1AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2wdUVYXRXLV74%2BUircA7t4Ek8gbT0KYUn9AhvpB71rcijammueBmq1%2BiTtFQhzWBqc0I8tmYSJmwigyPL05Y6NY3fhgQM8%2BtT0IeljkRnPV3JcVIRaZ7%2FxgIMbbOdtVzybqGKGRcegiufGaFdcbJIwne4vFEgcxs4%2FeDTLn4LNIvuJDe8ANytErr6SWH4jCwuPorVaZ0iy9eJ8%2FAKwx3ZrmhnxM46VzF%2BvxdKwIsBRgtapWcNo7zFyxxPl%2Bh1kuZPx44BjceHdBn7KfDkjU%2FuJmWtDnwHxEks4e6kxicmC5yL%2Bz2kDcBWIis%2FP9eug9nMTxSQc2SbFo4GCa1kfdOeDVn0fsl8J%2BqFAlxRshslRzoacSZHm4t1aALZf7oJiQOvjBL1flS5y40ozHnQntG2jRzK5KGLBbz%2FcxoFpPArImWoa1nYhDPDVg3W4uUdOqqlWHD0JSNlOe4vDnOTaIAncAgRuGPORYrJ8BwmSa4BUbgZ2WdNuEOfdGrosnelUmlrPidmLCnEEF0x04J%2FVCRIbPg5aLPsDsPyIUGQjjWUaUy5ICLfcbG9MEChqjx5L%2FwU2meXF0m8IqF%2BpvHJ1V27XHSlAHwQpaqturR9pHbJOaba5sicDUzoOzxUQyTocSUnx%2Fvri3NuExTmrMLa25L8GOqUBUStqFu6%2FXGsuv7o%2FE915HLc09q786uaTptVe48z4CNVd1Z1fFf39Yr8QhBePORckaftsmMaontGLI02z4mUcHjjZWFbSdMo87XzPLxr93hpshGRUbDqQXTN4irsBjursfkuND4Ywdkyqn8ZPyNTIADqQ0Rwxl5CCovrO89fVgmlnwC0UpCTmvXtoWoUgj6EqFyqUxBFn303RoJtMIcOrixIdDAik&X-Amz-Signature=74ed7094b5ee94310d4ffc7c4d4e7cf415228d2b26ee0d3ebdc35f5197d50898&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPGFW67%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCLVS4onEPnrHMpxbUOFUETnyZx1%2BLK5IbV1qQ6kZepDgIgVv6OZr9YZ8yxIm7FjyZGmHcMvk8v%2FWBFeEXsWDIxg1AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2wdUVYXRXLV74%2BUircA7t4Ek8gbT0KYUn9AhvpB71rcijammueBmq1%2BiTtFQhzWBqc0I8tmYSJmwigyPL05Y6NY3fhgQM8%2BtT0IeljkRnPV3JcVIRaZ7%2FxgIMbbOdtVzybqGKGRcegiufGaFdcbJIwne4vFEgcxs4%2FeDTLn4LNIvuJDe8ANytErr6SWH4jCwuPorVaZ0iy9eJ8%2FAKwx3ZrmhnxM46VzF%2BvxdKwIsBRgtapWcNo7zFyxxPl%2Bh1kuZPx44BjceHdBn7KfDkjU%2FuJmWtDnwHxEks4e6kxicmC5yL%2Bz2kDcBWIis%2FP9eug9nMTxSQc2SbFo4GCa1kfdOeDVn0fsl8J%2BqFAlxRshslRzoacSZHm4t1aALZf7oJiQOvjBL1flS5y40ozHnQntG2jRzK5KGLBbz%2FcxoFpPArImWoa1nYhDPDVg3W4uUdOqqlWHD0JSNlOe4vDnOTaIAncAgRuGPORYrJ8BwmSa4BUbgZ2WdNuEOfdGrosnelUmlrPidmLCnEEF0x04J%2FVCRIbPg5aLPsDsPyIUGQjjWUaUy5ICLfcbG9MEChqjx5L%2FwU2meXF0m8IqF%2BpvHJ1V27XHSlAHwQpaqturR9pHbJOaba5sicDUzoOzxUQyTocSUnx%2Fvri3NuExTmrMLa25L8GOqUBUStqFu6%2FXGsuv7o%2FE915HLc09q786uaTptVe48z4CNVd1Z1fFf39Yr8QhBePORckaftsmMaontGLI02z4mUcHjjZWFbSdMo87XzPLxr93hpshGRUbDqQXTN4irsBjursfkuND4Ywdkyqn8ZPyNTIADqQ0Rwxl5CCovrO89fVgmlnwC0UpCTmvXtoWoUgj6EqFyqUxBFn303RoJtMIcOrixIdDAik&X-Amz-Signature=70a550494f46639d531f130bfe49a5944c529e896fce0f4afb8eb38b2736432d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPGFW67%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCLVS4onEPnrHMpxbUOFUETnyZx1%2BLK5IbV1qQ6kZepDgIgVv6OZr9YZ8yxIm7FjyZGmHcMvk8v%2FWBFeEXsWDIxg1AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2wdUVYXRXLV74%2BUircA7t4Ek8gbT0KYUn9AhvpB71rcijammueBmq1%2BiTtFQhzWBqc0I8tmYSJmwigyPL05Y6NY3fhgQM8%2BtT0IeljkRnPV3JcVIRaZ7%2FxgIMbbOdtVzybqGKGRcegiufGaFdcbJIwne4vFEgcxs4%2FeDTLn4LNIvuJDe8ANytErr6SWH4jCwuPorVaZ0iy9eJ8%2FAKwx3ZrmhnxM46VzF%2BvxdKwIsBRgtapWcNo7zFyxxPl%2Bh1kuZPx44BjceHdBn7KfDkjU%2FuJmWtDnwHxEks4e6kxicmC5yL%2Bz2kDcBWIis%2FP9eug9nMTxSQc2SbFo4GCa1kfdOeDVn0fsl8J%2BqFAlxRshslRzoacSZHm4t1aALZf7oJiQOvjBL1flS5y40ozHnQntG2jRzK5KGLBbz%2FcxoFpPArImWoa1nYhDPDVg3W4uUdOqqlWHD0JSNlOe4vDnOTaIAncAgRuGPORYrJ8BwmSa4BUbgZ2WdNuEOfdGrosnelUmlrPidmLCnEEF0x04J%2FVCRIbPg5aLPsDsPyIUGQjjWUaUy5ICLfcbG9MEChqjx5L%2FwU2meXF0m8IqF%2BpvHJ1V27XHSlAHwQpaqturR9pHbJOaba5sicDUzoOzxUQyTocSUnx%2Fvri3NuExTmrMLa25L8GOqUBUStqFu6%2FXGsuv7o%2FE915HLc09q786uaTptVe48z4CNVd1Z1fFf39Yr8QhBePORckaftsmMaontGLI02z4mUcHjjZWFbSdMo87XzPLxr93hpshGRUbDqQXTN4irsBjursfkuND4Ywdkyqn8ZPyNTIADqQ0Rwxl5CCovrO89fVgmlnwC0UpCTmvXtoWoUgj6EqFyqUxBFn303RoJtMIcOrixIdDAik&X-Amz-Signature=eb7330a23fc0d7d18da1eb94dd162b745ae38385d3ad1b7af0cd6185f1cbe775&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
