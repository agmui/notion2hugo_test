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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBL5JTH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FzsrJpW%2Fn9fpCJlTLZeM71nWOiQZwkpVxT34JeqKSgIgBXsOB9heOsmTcb2tOZ0wogOvH%2F0R7SmlS5S0TkNCN1Mq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIc7%2FcQjMI5EyKg2QCrcA2oV%2BH2n%2FXpP4%2FtuWACWxeghQd856J0yp%2B2qjs0Xf12PXXHZ5mANBHcBXMsAKh%2FO%2Fx6ZWy8188c6irHK1%2BNEVfmkRN6ngxH7dbxGhpS3YOupn4iFL%2Bqo5aLBal0KiMqq3%2Fa0IwNSnVNL8ewjCCLK%2FiYjqg1sziAwcoSnpFk7NrghNiURocKhJaKckWO7FzEw6fXmsM2wF5bpE3qmjE0MQUqel2IWTBNxVSTHvT2pT0VdZMsDdXDCPmtQ%2BvUvmq9ZlkRbgQtr6L9tvDhTzj9XRwmf2MxLGXLvZOdsCjiLwf471lAe9dJVk2k30cUohASvG0JkcU99cd9D5WfRkGisVmBHhoFban9qVjdleTrxnwf0feyU30ZGKYGREzsh2jn1meYU%2FJ8DT0aJVGEhRL78LrHrKQbiqcTBkiPCGORehb9y7Hg9rhJcKDw8B%2Bs4GnWU19CEfd8Ueu5BBfeBOX%2BU21OpVMoGKrbF6UAtUSfPMd5JLvK5tV7xLSHcWe8IkkwKbQbtSO5kOXlUGUQUocB%2FLqg82ct3ARLrcMpCShrA2iCKzIb3jS78RDRATfSUKG9OhTcboYrMwR5RdKafHOIglKyuIU3lp4RfoNG125o6%2BnG%2BnbI6qJ0LXIrP0JJMMLbE2sEGOqUBfrgilnoH1e4MpSxtxn%2BnJCPyUcTeBw%2BdHNNgrUBtaK3UxT18P1R3FvDLkbUBy5vxqzYTDpbXnxeKNRGssDZeu3efXxIipjBIXBsSqUnflNZGY%2BZeLt3kGzdcbrRSAMlHfdGGRSaTgRXSgZASztMRir7kbnsGPa9xyWXefVHWBIan6yPv%2BW46gQuVGfTCvjTsAiOrBdxLLiQXXi5h6M%2BQIryDpBr9&X-Amz-Signature=9878c0f06a250fe122eeacbf1148f296ee95e00ed49cd63da8782e5a732c3421&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBL5JTH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FzsrJpW%2Fn9fpCJlTLZeM71nWOiQZwkpVxT34JeqKSgIgBXsOB9heOsmTcb2tOZ0wogOvH%2F0R7SmlS5S0TkNCN1Mq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIc7%2FcQjMI5EyKg2QCrcA2oV%2BH2n%2FXpP4%2FtuWACWxeghQd856J0yp%2B2qjs0Xf12PXXHZ5mANBHcBXMsAKh%2FO%2Fx6ZWy8188c6irHK1%2BNEVfmkRN6ngxH7dbxGhpS3YOupn4iFL%2Bqo5aLBal0KiMqq3%2Fa0IwNSnVNL8ewjCCLK%2FiYjqg1sziAwcoSnpFk7NrghNiURocKhJaKckWO7FzEw6fXmsM2wF5bpE3qmjE0MQUqel2IWTBNxVSTHvT2pT0VdZMsDdXDCPmtQ%2BvUvmq9ZlkRbgQtr6L9tvDhTzj9XRwmf2MxLGXLvZOdsCjiLwf471lAe9dJVk2k30cUohASvG0JkcU99cd9D5WfRkGisVmBHhoFban9qVjdleTrxnwf0feyU30ZGKYGREzsh2jn1meYU%2FJ8DT0aJVGEhRL78LrHrKQbiqcTBkiPCGORehb9y7Hg9rhJcKDw8B%2Bs4GnWU19CEfd8Ueu5BBfeBOX%2BU21OpVMoGKrbF6UAtUSfPMd5JLvK5tV7xLSHcWe8IkkwKbQbtSO5kOXlUGUQUocB%2FLqg82ct3ARLrcMpCShrA2iCKzIb3jS78RDRATfSUKG9OhTcboYrMwR5RdKafHOIglKyuIU3lp4RfoNG125o6%2BnG%2BnbI6qJ0LXIrP0JJMMLbE2sEGOqUBfrgilnoH1e4MpSxtxn%2BnJCPyUcTeBw%2BdHNNgrUBtaK3UxT18P1R3FvDLkbUBy5vxqzYTDpbXnxeKNRGssDZeu3efXxIipjBIXBsSqUnflNZGY%2BZeLt3kGzdcbrRSAMlHfdGGRSaTgRXSgZASztMRir7kbnsGPa9xyWXefVHWBIan6yPv%2BW46gQuVGfTCvjTsAiOrBdxLLiQXXi5h6M%2BQIryDpBr9&X-Amz-Signature=06df1b2be79fa0eab83fc71b86e8c379b24ff269e7149bcc630dd8b4dee136db&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBL5JTH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FzsrJpW%2Fn9fpCJlTLZeM71nWOiQZwkpVxT34JeqKSgIgBXsOB9heOsmTcb2tOZ0wogOvH%2F0R7SmlS5S0TkNCN1Mq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIc7%2FcQjMI5EyKg2QCrcA2oV%2BH2n%2FXpP4%2FtuWACWxeghQd856J0yp%2B2qjs0Xf12PXXHZ5mANBHcBXMsAKh%2FO%2Fx6ZWy8188c6irHK1%2BNEVfmkRN6ngxH7dbxGhpS3YOupn4iFL%2Bqo5aLBal0KiMqq3%2Fa0IwNSnVNL8ewjCCLK%2FiYjqg1sziAwcoSnpFk7NrghNiURocKhJaKckWO7FzEw6fXmsM2wF5bpE3qmjE0MQUqel2IWTBNxVSTHvT2pT0VdZMsDdXDCPmtQ%2BvUvmq9ZlkRbgQtr6L9tvDhTzj9XRwmf2MxLGXLvZOdsCjiLwf471lAe9dJVk2k30cUohASvG0JkcU99cd9D5WfRkGisVmBHhoFban9qVjdleTrxnwf0feyU30ZGKYGREzsh2jn1meYU%2FJ8DT0aJVGEhRL78LrHrKQbiqcTBkiPCGORehb9y7Hg9rhJcKDw8B%2Bs4GnWU19CEfd8Ueu5BBfeBOX%2BU21OpVMoGKrbF6UAtUSfPMd5JLvK5tV7xLSHcWe8IkkwKbQbtSO5kOXlUGUQUocB%2FLqg82ct3ARLrcMpCShrA2iCKzIb3jS78RDRATfSUKG9OhTcboYrMwR5RdKafHOIglKyuIU3lp4RfoNG125o6%2BnG%2BnbI6qJ0LXIrP0JJMMLbE2sEGOqUBfrgilnoH1e4MpSxtxn%2BnJCPyUcTeBw%2BdHNNgrUBtaK3UxT18P1R3FvDLkbUBy5vxqzYTDpbXnxeKNRGssDZeu3efXxIipjBIXBsSqUnflNZGY%2BZeLt3kGzdcbrRSAMlHfdGGRSaTgRXSgZASztMRir7kbnsGPa9xyWXefVHWBIan6yPv%2BW46gQuVGfTCvjTsAiOrBdxLLiQXXi5h6M%2BQIryDpBr9&X-Amz-Signature=3a2c90cbac948ae60e836c8006fc4a03b9caad6d4e294c61b3dda009c03906f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBL5JTH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FzsrJpW%2Fn9fpCJlTLZeM71nWOiQZwkpVxT34JeqKSgIgBXsOB9heOsmTcb2tOZ0wogOvH%2F0R7SmlS5S0TkNCN1Mq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIc7%2FcQjMI5EyKg2QCrcA2oV%2BH2n%2FXpP4%2FtuWACWxeghQd856J0yp%2B2qjs0Xf12PXXHZ5mANBHcBXMsAKh%2FO%2Fx6ZWy8188c6irHK1%2BNEVfmkRN6ngxH7dbxGhpS3YOupn4iFL%2Bqo5aLBal0KiMqq3%2Fa0IwNSnVNL8ewjCCLK%2FiYjqg1sziAwcoSnpFk7NrghNiURocKhJaKckWO7FzEw6fXmsM2wF5bpE3qmjE0MQUqel2IWTBNxVSTHvT2pT0VdZMsDdXDCPmtQ%2BvUvmq9ZlkRbgQtr6L9tvDhTzj9XRwmf2MxLGXLvZOdsCjiLwf471lAe9dJVk2k30cUohASvG0JkcU99cd9D5WfRkGisVmBHhoFban9qVjdleTrxnwf0feyU30ZGKYGREzsh2jn1meYU%2FJ8DT0aJVGEhRL78LrHrKQbiqcTBkiPCGORehb9y7Hg9rhJcKDw8B%2Bs4GnWU19CEfd8Ueu5BBfeBOX%2BU21OpVMoGKrbF6UAtUSfPMd5JLvK5tV7xLSHcWe8IkkwKbQbtSO5kOXlUGUQUocB%2FLqg82ct3ARLrcMpCShrA2iCKzIb3jS78RDRATfSUKG9OhTcboYrMwR5RdKafHOIglKyuIU3lp4RfoNG125o6%2BnG%2BnbI6qJ0LXIrP0JJMMLbE2sEGOqUBfrgilnoH1e4MpSxtxn%2BnJCPyUcTeBw%2BdHNNgrUBtaK3UxT18P1R3FvDLkbUBy5vxqzYTDpbXnxeKNRGssDZeu3efXxIipjBIXBsSqUnflNZGY%2BZeLt3kGzdcbrRSAMlHfdGGRSaTgRXSgZASztMRir7kbnsGPa9xyWXefVHWBIan6yPv%2BW46gQuVGfTCvjTsAiOrBdxLLiQXXi5h6M%2BQIryDpBr9&X-Amz-Signature=c5365aef92ef33578b90034619d55a77328566bba6273eaf847a3185eb45b487&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBL5JTH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FzsrJpW%2Fn9fpCJlTLZeM71nWOiQZwkpVxT34JeqKSgIgBXsOB9heOsmTcb2tOZ0wogOvH%2F0R7SmlS5S0TkNCN1Mq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIc7%2FcQjMI5EyKg2QCrcA2oV%2BH2n%2FXpP4%2FtuWACWxeghQd856J0yp%2B2qjs0Xf12PXXHZ5mANBHcBXMsAKh%2FO%2Fx6ZWy8188c6irHK1%2BNEVfmkRN6ngxH7dbxGhpS3YOupn4iFL%2Bqo5aLBal0KiMqq3%2Fa0IwNSnVNL8ewjCCLK%2FiYjqg1sziAwcoSnpFk7NrghNiURocKhJaKckWO7FzEw6fXmsM2wF5bpE3qmjE0MQUqel2IWTBNxVSTHvT2pT0VdZMsDdXDCPmtQ%2BvUvmq9ZlkRbgQtr6L9tvDhTzj9XRwmf2MxLGXLvZOdsCjiLwf471lAe9dJVk2k30cUohASvG0JkcU99cd9D5WfRkGisVmBHhoFban9qVjdleTrxnwf0feyU30ZGKYGREzsh2jn1meYU%2FJ8DT0aJVGEhRL78LrHrKQbiqcTBkiPCGORehb9y7Hg9rhJcKDw8B%2Bs4GnWU19CEfd8Ueu5BBfeBOX%2BU21OpVMoGKrbF6UAtUSfPMd5JLvK5tV7xLSHcWe8IkkwKbQbtSO5kOXlUGUQUocB%2FLqg82ct3ARLrcMpCShrA2iCKzIb3jS78RDRATfSUKG9OhTcboYrMwR5RdKafHOIglKyuIU3lp4RfoNG125o6%2BnG%2BnbI6qJ0LXIrP0JJMMLbE2sEGOqUBfrgilnoH1e4MpSxtxn%2BnJCPyUcTeBw%2BdHNNgrUBtaK3UxT18P1R3FvDLkbUBy5vxqzYTDpbXnxeKNRGssDZeu3efXxIipjBIXBsSqUnflNZGY%2BZeLt3kGzdcbrRSAMlHfdGGRSaTgRXSgZASztMRir7kbnsGPa9xyWXefVHWBIan6yPv%2BW46gQuVGfTCvjTsAiOrBdxLLiQXXi5h6M%2BQIryDpBr9&X-Amz-Signature=ba91f8a0a3f569cd34faa60e6c85f48a82252d063479a5549899a337d614bbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBL5JTH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FzsrJpW%2Fn9fpCJlTLZeM71nWOiQZwkpVxT34JeqKSgIgBXsOB9heOsmTcb2tOZ0wogOvH%2F0R7SmlS5S0TkNCN1Mq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIc7%2FcQjMI5EyKg2QCrcA2oV%2BH2n%2FXpP4%2FtuWACWxeghQd856J0yp%2B2qjs0Xf12PXXHZ5mANBHcBXMsAKh%2FO%2Fx6ZWy8188c6irHK1%2BNEVfmkRN6ngxH7dbxGhpS3YOupn4iFL%2Bqo5aLBal0KiMqq3%2Fa0IwNSnVNL8ewjCCLK%2FiYjqg1sziAwcoSnpFk7NrghNiURocKhJaKckWO7FzEw6fXmsM2wF5bpE3qmjE0MQUqel2IWTBNxVSTHvT2pT0VdZMsDdXDCPmtQ%2BvUvmq9ZlkRbgQtr6L9tvDhTzj9XRwmf2MxLGXLvZOdsCjiLwf471lAe9dJVk2k30cUohASvG0JkcU99cd9D5WfRkGisVmBHhoFban9qVjdleTrxnwf0feyU30ZGKYGREzsh2jn1meYU%2FJ8DT0aJVGEhRL78LrHrKQbiqcTBkiPCGORehb9y7Hg9rhJcKDw8B%2Bs4GnWU19CEfd8Ueu5BBfeBOX%2BU21OpVMoGKrbF6UAtUSfPMd5JLvK5tV7xLSHcWe8IkkwKbQbtSO5kOXlUGUQUocB%2FLqg82ct3ARLrcMpCShrA2iCKzIb3jS78RDRATfSUKG9OhTcboYrMwR5RdKafHOIglKyuIU3lp4RfoNG125o6%2BnG%2BnbI6qJ0LXIrP0JJMMLbE2sEGOqUBfrgilnoH1e4MpSxtxn%2BnJCPyUcTeBw%2BdHNNgrUBtaK3UxT18P1R3FvDLkbUBy5vxqzYTDpbXnxeKNRGssDZeu3efXxIipjBIXBsSqUnflNZGY%2BZeLt3kGzdcbrRSAMlHfdGGRSaTgRXSgZASztMRir7kbnsGPa9xyWXefVHWBIan6yPv%2BW46gQuVGfTCvjTsAiOrBdxLLiQXXi5h6M%2BQIryDpBr9&X-Amz-Signature=970083c9ee435aae9265eee3b93b63e948a1f07ebf75612675e7ac46fc8bac24&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMBL5JTH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FzsrJpW%2Fn9fpCJlTLZeM71nWOiQZwkpVxT34JeqKSgIgBXsOB9heOsmTcb2tOZ0wogOvH%2F0R7SmlS5S0TkNCN1Mq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIc7%2FcQjMI5EyKg2QCrcA2oV%2BH2n%2FXpP4%2FtuWACWxeghQd856J0yp%2B2qjs0Xf12PXXHZ5mANBHcBXMsAKh%2FO%2Fx6ZWy8188c6irHK1%2BNEVfmkRN6ngxH7dbxGhpS3YOupn4iFL%2Bqo5aLBal0KiMqq3%2Fa0IwNSnVNL8ewjCCLK%2FiYjqg1sziAwcoSnpFk7NrghNiURocKhJaKckWO7FzEw6fXmsM2wF5bpE3qmjE0MQUqel2IWTBNxVSTHvT2pT0VdZMsDdXDCPmtQ%2BvUvmq9ZlkRbgQtr6L9tvDhTzj9XRwmf2MxLGXLvZOdsCjiLwf471lAe9dJVk2k30cUohASvG0JkcU99cd9D5WfRkGisVmBHhoFban9qVjdleTrxnwf0feyU30ZGKYGREzsh2jn1meYU%2FJ8DT0aJVGEhRL78LrHrKQbiqcTBkiPCGORehb9y7Hg9rhJcKDw8B%2Bs4GnWU19CEfd8Ueu5BBfeBOX%2BU21OpVMoGKrbF6UAtUSfPMd5JLvK5tV7xLSHcWe8IkkwKbQbtSO5kOXlUGUQUocB%2FLqg82ct3ARLrcMpCShrA2iCKzIb3jS78RDRATfSUKG9OhTcboYrMwR5RdKafHOIglKyuIU3lp4RfoNG125o6%2BnG%2BnbI6qJ0LXIrP0JJMMLbE2sEGOqUBfrgilnoH1e4MpSxtxn%2BnJCPyUcTeBw%2BdHNNgrUBtaK3UxT18P1R3FvDLkbUBy5vxqzYTDpbXnxeKNRGssDZeu3efXxIipjBIXBsSqUnflNZGY%2BZeLt3kGzdcbrRSAMlHfdGGRSaTgRXSgZASztMRir7kbnsGPa9xyWXefVHWBIan6yPv%2BW46gQuVGfTCvjTsAiOrBdxLLiQXXi5h6M%2BQIryDpBr9&X-Amz-Signature=4b7aef355b14880e674c1f2114d13487b34e23785b20776819ad8e1c76170ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
