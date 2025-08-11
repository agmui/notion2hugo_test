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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XDJVWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoqhQl7m9aUXHnzF8JJKU7rxZgipd87toCsrzijtthUAiEAlwHl22yJ45aWupmiqXGo1aAZDlrf8PQB0yDXPb3sG1cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjzHT6wzr8sU%2Fme5SrcA%2BIV1CGGynJ5LcKvmrrRpcE2eDqte4HY5mZmyvgIGLTgA0CpPSWgD4UnPv%2BfpgFLzzbJDhoheZzTdYPD%2BFJhRuE%2F4yjj4aR6S3K52DvMly3b88Hfz1NpbsdQsUzUocRPlhL8LLfkZZk36b2gYJ2QpIGhpmsO1lZ%2B9RYSh5oBOVoXWSXK2WABqOcVcLB6GCRIdsIq2vGBjY%2FvKFq7GwTFMd5Ye6bOhtN2sILnAd1169ny0T3BtOVOBOzwjN5dhuUwUAKUBRUu12OK2E7oBHjiPJk4W76Ej6jhgrcxWUXuRRP6GpnDphqfRQjbUJx7ZciIWV1n5DPsucOr%2FuwvpywftlCrwvsm1U3DCA1Tt3nRM8VMX2f8SSiRrHRPm5siA3d%2FRQVifvGQGQAA1SUc7mpKDaFqEOvLUpl%2B6suwkjssf9OTmZHy6UR6iA5BmQT8B4keH0uXpCjZ21NYFNow7YFg%2BFTmqrZ8wdGLx9UbfnEgkO5it94qI2u2YfIPQJ7qyALr6IBEExWgdjfoozbfgkGBH10SPb2%2FWLCt1tifq64WYVWDNa%2FIk6liLYTraE2lQqMnBoPCEYiHu%2FPRT7Fnl5OBda%2Fkir5G0BoC%2F%2F%2B5XeReJ3y2CxTLCIM4%2FUZstM%2FDMJSj58QGOqUBFHfW6wWLNdb73OqXfH681yZvIWun31SbrDqvMQeFX%2BQJXMBN46nU9r3%2BV7DeWsUz%2FdV9ccGC2CrS3ZTzDYFhgJP3lnFM8lqbkD772yh1DE330jdXIlkXYpyTxcCG%2BYYfYeoNxyHH0xMui3oXb0ymK3N4dQF4y5pcmNqJeHzXTvKlPcKR9UpMa5DritRVvrlvMsswfrPtzAfuS%2FBM78Uuck3p%2Fhc%2F&X-Amz-Signature=2e4c7d1882e0b532cc6a074efffcab9f643f11d1def3e8632601933e0b0bacfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XDJVWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoqhQl7m9aUXHnzF8JJKU7rxZgipd87toCsrzijtthUAiEAlwHl22yJ45aWupmiqXGo1aAZDlrf8PQB0yDXPb3sG1cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjzHT6wzr8sU%2Fme5SrcA%2BIV1CGGynJ5LcKvmrrRpcE2eDqte4HY5mZmyvgIGLTgA0CpPSWgD4UnPv%2BfpgFLzzbJDhoheZzTdYPD%2BFJhRuE%2F4yjj4aR6S3K52DvMly3b88Hfz1NpbsdQsUzUocRPlhL8LLfkZZk36b2gYJ2QpIGhpmsO1lZ%2B9RYSh5oBOVoXWSXK2WABqOcVcLB6GCRIdsIq2vGBjY%2FvKFq7GwTFMd5Ye6bOhtN2sILnAd1169ny0T3BtOVOBOzwjN5dhuUwUAKUBRUu12OK2E7oBHjiPJk4W76Ej6jhgrcxWUXuRRP6GpnDphqfRQjbUJx7ZciIWV1n5DPsucOr%2FuwvpywftlCrwvsm1U3DCA1Tt3nRM8VMX2f8SSiRrHRPm5siA3d%2FRQVifvGQGQAA1SUc7mpKDaFqEOvLUpl%2B6suwkjssf9OTmZHy6UR6iA5BmQT8B4keH0uXpCjZ21NYFNow7YFg%2BFTmqrZ8wdGLx9UbfnEgkO5it94qI2u2YfIPQJ7qyALr6IBEExWgdjfoozbfgkGBH10SPb2%2FWLCt1tifq64WYVWDNa%2FIk6liLYTraE2lQqMnBoPCEYiHu%2FPRT7Fnl5OBda%2Fkir5G0BoC%2F%2F%2B5XeReJ3y2CxTLCIM4%2FUZstM%2FDMJSj58QGOqUBFHfW6wWLNdb73OqXfH681yZvIWun31SbrDqvMQeFX%2BQJXMBN46nU9r3%2BV7DeWsUz%2FdV9ccGC2CrS3ZTzDYFhgJP3lnFM8lqbkD772yh1DE330jdXIlkXYpyTxcCG%2BYYfYeoNxyHH0xMui3oXb0ymK3N4dQF4y5pcmNqJeHzXTvKlPcKR9UpMa5DritRVvrlvMsswfrPtzAfuS%2FBM78Uuck3p%2Fhc%2F&X-Amz-Signature=f50588015badca036a8828e1856a6a1d6e46e720240ae7536252b12c81098577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XDJVWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoqhQl7m9aUXHnzF8JJKU7rxZgipd87toCsrzijtthUAiEAlwHl22yJ45aWupmiqXGo1aAZDlrf8PQB0yDXPb3sG1cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjzHT6wzr8sU%2Fme5SrcA%2BIV1CGGynJ5LcKvmrrRpcE2eDqte4HY5mZmyvgIGLTgA0CpPSWgD4UnPv%2BfpgFLzzbJDhoheZzTdYPD%2BFJhRuE%2F4yjj4aR6S3K52DvMly3b88Hfz1NpbsdQsUzUocRPlhL8LLfkZZk36b2gYJ2QpIGhpmsO1lZ%2B9RYSh5oBOVoXWSXK2WABqOcVcLB6GCRIdsIq2vGBjY%2FvKFq7GwTFMd5Ye6bOhtN2sILnAd1169ny0T3BtOVOBOzwjN5dhuUwUAKUBRUu12OK2E7oBHjiPJk4W76Ej6jhgrcxWUXuRRP6GpnDphqfRQjbUJx7ZciIWV1n5DPsucOr%2FuwvpywftlCrwvsm1U3DCA1Tt3nRM8VMX2f8SSiRrHRPm5siA3d%2FRQVifvGQGQAA1SUc7mpKDaFqEOvLUpl%2B6suwkjssf9OTmZHy6UR6iA5BmQT8B4keH0uXpCjZ21NYFNow7YFg%2BFTmqrZ8wdGLx9UbfnEgkO5it94qI2u2YfIPQJ7qyALr6IBEExWgdjfoozbfgkGBH10SPb2%2FWLCt1tifq64WYVWDNa%2FIk6liLYTraE2lQqMnBoPCEYiHu%2FPRT7Fnl5OBda%2Fkir5G0BoC%2F%2F%2B5XeReJ3y2CxTLCIM4%2FUZstM%2FDMJSj58QGOqUBFHfW6wWLNdb73OqXfH681yZvIWun31SbrDqvMQeFX%2BQJXMBN46nU9r3%2BV7DeWsUz%2FdV9ccGC2CrS3ZTzDYFhgJP3lnFM8lqbkD772yh1DE330jdXIlkXYpyTxcCG%2BYYfYeoNxyHH0xMui3oXb0ymK3N4dQF4y5pcmNqJeHzXTvKlPcKR9UpMa5DritRVvrlvMsswfrPtzAfuS%2FBM78Uuck3p%2Fhc%2F&X-Amz-Signature=2483909dac6d1778214ed9df0c05f36b74512f7cdaaeef22fce6339b49aa6287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XDJVWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoqhQl7m9aUXHnzF8JJKU7rxZgipd87toCsrzijtthUAiEAlwHl22yJ45aWupmiqXGo1aAZDlrf8PQB0yDXPb3sG1cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjzHT6wzr8sU%2Fme5SrcA%2BIV1CGGynJ5LcKvmrrRpcE2eDqte4HY5mZmyvgIGLTgA0CpPSWgD4UnPv%2BfpgFLzzbJDhoheZzTdYPD%2BFJhRuE%2F4yjj4aR6S3K52DvMly3b88Hfz1NpbsdQsUzUocRPlhL8LLfkZZk36b2gYJ2QpIGhpmsO1lZ%2B9RYSh5oBOVoXWSXK2WABqOcVcLB6GCRIdsIq2vGBjY%2FvKFq7GwTFMd5Ye6bOhtN2sILnAd1169ny0T3BtOVOBOzwjN5dhuUwUAKUBRUu12OK2E7oBHjiPJk4W76Ej6jhgrcxWUXuRRP6GpnDphqfRQjbUJx7ZciIWV1n5DPsucOr%2FuwvpywftlCrwvsm1U3DCA1Tt3nRM8VMX2f8SSiRrHRPm5siA3d%2FRQVifvGQGQAA1SUc7mpKDaFqEOvLUpl%2B6suwkjssf9OTmZHy6UR6iA5BmQT8B4keH0uXpCjZ21NYFNow7YFg%2BFTmqrZ8wdGLx9UbfnEgkO5it94qI2u2YfIPQJ7qyALr6IBEExWgdjfoozbfgkGBH10SPb2%2FWLCt1tifq64WYVWDNa%2FIk6liLYTraE2lQqMnBoPCEYiHu%2FPRT7Fnl5OBda%2Fkir5G0BoC%2F%2F%2B5XeReJ3y2CxTLCIM4%2FUZstM%2FDMJSj58QGOqUBFHfW6wWLNdb73OqXfH681yZvIWun31SbrDqvMQeFX%2BQJXMBN46nU9r3%2BV7DeWsUz%2FdV9ccGC2CrS3ZTzDYFhgJP3lnFM8lqbkD772yh1DE330jdXIlkXYpyTxcCG%2BYYfYeoNxyHH0xMui3oXb0ymK3N4dQF4y5pcmNqJeHzXTvKlPcKR9UpMa5DritRVvrlvMsswfrPtzAfuS%2FBM78Uuck3p%2Fhc%2F&X-Amz-Signature=51cb49af1803c007a540bc9350b5bc2684dba23e176d9e1fee54687124b77e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XDJVWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoqhQl7m9aUXHnzF8JJKU7rxZgipd87toCsrzijtthUAiEAlwHl22yJ45aWupmiqXGo1aAZDlrf8PQB0yDXPb3sG1cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjzHT6wzr8sU%2Fme5SrcA%2BIV1CGGynJ5LcKvmrrRpcE2eDqte4HY5mZmyvgIGLTgA0CpPSWgD4UnPv%2BfpgFLzzbJDhoheZzTdYPD%2BFJhRuE%2F4yjj4aR6S3K52DvMly3b88Hfz1NpbsdQsUzUocRPlhL8LLfkZZk36b2gYJ2QpIGhpmsO1lZ%2B9RYSh5oBOVoXWSXK2WABqOcVcLB6GCRIdsIq2vGBjY%2FvKFq7GwTFMd5Ye6bOhtN2sILnAd1169ny0T3BtOVOBOzwjN5dhuUwUAKUBRUu12OK2E7oBHjiPJk4W76Ej6jhgrcxWUXuRRP6GpnDphqfRQjbUJx7ZciIWV1n5DPsucOr%2FuwvpywftlCrwvsm1U3DCA1Tt3nRM8VMX2f8SSiRrHRPm5siA3d%2FRQVifvGQGQAA1SUc7mpKDaFqEOvLUpl%2B6suwkjssf9OTmZHy6UR6iA5BmQT8B4keH0uXpCjZ21NYFNow7YFg%2BFTmqrZ8wdGLx9UbfnEgkO5it94qI2u2YfIPQJ7qyALr6IBEExWgdjfoozbfgkGBH10SPb2%2FWLCt1tifq64WYVWDNa%2FIk6liLYTraE2lQqMnBoPCEYiHu%2FPRT7Fnl5OBda%2Fkir5G0BoC%2F%2F%2B5XeReJ3y2CxTLCIM4%2FUZstM%2FDMJSj58QGOqUBFHfW6wWLNdb73OqXfH681yZvIWun31SbrDqvMQeFX%2BQJXMBN46nU9r3%2BV7DeWsUz%2FdV9ccGC2CrS3ZTzDYFhgJP3lnFM8lqbkD772yh1DE330jdXIlkXYpyTxcCG%2BYYfYeoNxyHH0xMui3oXb0ymK3N4dQF4y5pcmNqJeHzXTvKlPcKR9UpMa5DritRVvrlvMsswfrPtzAfuS%2FBM78Uuck3p%2Fhc%2F&X-Amz-Signature=3b82029e5f1e183f0f2d4b01e57af0b25fc5e352287eee176cf64b421b46dba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XDJVWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoqhQl7m9aUXHnzF8JJKU7rxZgipd87toCsrzijtthUAiEAlwHl22yJ45aWupmiqXGo1aAZDlrf8PQB0yDXPb3sG1cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjzHT6wzr8sU%2Fme5SrcA%2BIV1CGGynJ5LcKvmrrRpcE2eDqte4HY5mZmyvgIGLTgA0CpPSWgD4UnPv%2BfpgFLzzbJDhoheZzTdYPD%2BFJhRuE%2F4yjj4aR6S3K52DvMly3b88Hfz1NpbsdQsUzUocRPlhL8LLfkZZk36b2gYJ2QpIGhpmsO1lZ%2B9RYSh5oBOVoXWSXK2WABqOcVcLB6GCRIdsIq2vGBjY%2FvKFq7GwTFMd5Ye6bOhtN2sILnAd1169ny0T3BtOVOBOzwjN5dhuUwUAKUBRUu12OK2E7oBHjiPJk4W76Ej6jhgrcxWUXuRRP6GpnDphqfRQjbUJx7ZciIWV1n5DPsucOr%2FuwvpywftlCrwvsm1U3DCA1Tt3nRM8VMX2f8SSiRrHRPm5siA3d%2FRQVifvGQGQAA1SUc7mpKDaFqEOvLUpl%2B6suwkjssf9OTmZHy6UR6iA5BmQT8B4keH0uXpCjZ21NYFNow7YFg%2BFTmqrZ8wdGLx9UbfnEgkO5it94qI2u2YfIPQJ7qyALr6IBEExWgdjfoozbfgkGBH10SPb2%2FWLCt1tifq64WYVWDNa%2FIk6liLYTraE2lQqMnBoPCEYiHu%2FPRT7Fnl5OBda%2Fkir5G0BoC%2F%2F%2B5XeReJ3y2CxTLCIM4%2FUZstM%2FDMJSj58QGOqUBFHfW6wWLNdb73OqXfH681yZvIWun31SbrDqvMQeFX%2BQJXMBN46nU9r3%2BV7DeWsUz%2FdV9ccGC2CrS3ZTzDYFhgJP3lnFM8lqbkD772yh1DE330jdXIlkXYpyTxcCG%2BYYfYeoNxyHH0xMui3oXb0ymK3N4dQF4y5pcmNqJeHzXTvKlPcKR9UpMa5DritRVvrlvMsswfrPtzAfuS%2FBM78Uuck3p%2Fhc%2F&X-Amz-Signature=a64b70be5e64375c79226c87031eb7be58872ed6fea5353cce48c1eb1695cd48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642XDJVWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoqhQl7m9aUXHnzF8JJKU7rxZgipd87toCsrzijtthUAiEAlwHl22yJ45aWupmiqXGo1aAZDlrf8PQB0yDXPb3sG1cqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjzHT6wzr8sU%2Fme5SrcA%2BIV1CGGynJ5LcKvmrrRpcE2eDqte4HY5mZmyvgIGLTgA0CpPSWgD4UnPv%2BfpgFLzzbJDhoheZzTdYPD%2BFJhRuE%2F4yjj4aR6S3K52DvMly3b88Hfz1NpbsdQsUzUocRPlhL8LLfkZZk36b2gYJ2QpIGhpmsO1lZ%2B9RYSh5oBOVoXWSXK2WABqOcVcLB6GCRIdsIq2vGBjY%2FvKFq7GwTFMd5Ye6bOhtN2sILnAd1169ny0T3BtOVOBOzwjN5dhuUwUAKUBRUu12OK2E7oBHjiPJk4W76Ej6jhgrcxWUXuRRP6GpnDphqfRQjbUJx7ZciIWV1n5DPsucOr%2FuwvpywftlCrwvsm1U3DCA1Tt3nRM8VMX2f8SSiRrHRPm5siA3d%2FRQVifvGQGQAA1SUc7mpKDaFqEOvLUpl%2B6suwkjssf9OTmZHy6UR6iA5BmQT8B4keH0uXpCjZ21NYFNow7YFg%2BFTmqrZ8wdGLx9UbfnEgkO5it94qI2u2YfIPQJ7qyALr6IBEExWgdjfoozbfgkGBH10SPb2%2FWLCt1tifq64WYVWDNa%2FIk6liLYTraE2lQqMnBoPCEYiHu%2FPRT7Fnl5OBda%2Fkir5G0BoC%2F%2F%2B5XeReJ3y2CxTLCIM4%2FUZstM%2FDMJSj58QGOqUBFHfW6wWLNdb73OqXfH681yZvIWun31SbrDqvMQeFX%2BQJXMBN46nU9r3%2BV7DeWsUz%2FdV9ccGC2CrS3ZTzDYFhgJP3lnFM8lqbkD772yh1DE330jdXIlkXYpyTxcCG%2BYYfYeoNxyHH0xMui3oXb0ymK3N4dQF4y5pcmNqJeHzXTvKlPcKR9UpMa5DritRVvrlvMsswfrPtzAfuS%2FBM78Uuck3p%2Fhc%2F&X-Amz-Signature=33b262137f995b4f02c18300fca9fda5218e6a44e91e843b6a67669de9569ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
