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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFMXVUS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC9Bd5jtqgKO0U5H4I5Z6vOdnTS6nhLM0KCroUrY4DqYgIgRRX2xS6pPqeTPy%2FepydVn7M6WlxZ3VvcC%2FItXof8t%2B8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFpegIF2mynNuVsiwCrcA3LGLzYXT1skip3DQlYdN18Nbv2uQyRcU6SbPO2ybI2HFzynE43iRg5FYzeGIIHJssTj1Q5s8IOG%2B4wKaBlfEAdSL3xO%2FQGy61As%2FtJTmiC10Zoyv0gsP5K0IVoIWn84G7zXUrereRlyqsVe%2BiJ9NuYGwegZofvVZLpvzvEKsvoRRMQOih4nUUL8eu17Ka6d0EIr9bKu5qtq93mlQUo2Ev5Xy45PcqSy7ordG%2FP%2FAd3QSKeFJlfGnle9UNFlBh2NH%2BXoc26t6rqgQTxie%2F%2Bq%2BSs9TOAiRV3QiVV2D7ryjW7WTIXD5MEm4%2Bb2C5TcUka2s6VVgWy0vPBC0EgNf2eXN0AJSvyhtU9LJ5ApBFQOzIUW9Uo1TORQ4OLVj8r5cj5xGcNroP5qeT6xwMP%2F2GAdHcksCxNZ3L%2BhIoucCAuxUaou7armFdvYe%2BJ4vgFWbUycnoPcxjojFQUWNFej0bXSX0SyNYUhQnjs%2Fq3Yfm4%2BO1ErshmcmvpHdQT9zjw1BUzXJc1N3dUCw3kscBbLDfeYTOJHdjWrVMt3gVl6SIKhAhcerVIOQtA9rPgyg9SKbpDiFTKIktbOTJGeC0uiFAsREtmZX10R00QHWxlNbwsmU0%2F1lpRxcskoNl5GNPT2MKvMycEGOqUBR4q5G%2FAJsXaqEjSawH4i5wYLgfhrNaAIL8yuCEHutez%2FerQKF4qD84MI5vAiZm9yn5jhzNpv8xrwces1ifAWgjUp%2FKhLLGHkgNcklM5fim1d%2FIc5M1rRUPDS4S2wK63JGLEc%2FS%2FbLpbpMS6ZEP42XO6z2i1y3B6cMhP844QYOLVpkUcqW%2FGmsWFoayH7KtWtWwlrCrG9z5AA7aizeQhqJQy%2B1I2f&X-Amz-Signature=632e2585f7752a0eb2e5ff7269daa18ab90f1b554a201b66872bac6b9536f41c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFMXVUS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC9Bd5jtqgKO0U5H4I5Z6vOdnTS6nhLM0KCroUrY4DqYgIgRRX2xS6pPqeTPy%2FepydVn7M6WlxZ3VvcC%2FItXof8t%2B8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFpegIF2mynNuVsiwCrcA3LGLzYXT1skip3DQlYdN18Nbv2uQyRcU6SbPO2ybI2HFzynE43iRg5FYzeGIIHJssTj1Q5s8IOG%2B4wKaBlfEAdSL3xO%2FQGy61As%2FtJTmiC10Zoyv0gsP5K0IVoIWn84G7zXUrereRlyqsVe%2BiJ9NuYGwegZofvVZLpvzvEKsvoRRMQOih4nUUL8eu17Ka6d0EIr9bKu5qtq93mlQUo2Ev5Xy45PcqSy7ordG%2FP%2FAd3QSKeFJlfGnle9UNFlBh2NH%2BXoc26t6rqgQTxie%2F%2Bq%2BSs9TOAiRV3QiVV2D7ryjW7WTIXD5MEm4%2Bb2C5TcUka2s6VVgWy0vPBC0EgNf2eXN0AJSvyhtU9LJ5ApBFQOzIUW9Uo1TORQ4OLVj8r5cj5xGcNroP5qeT6xwMP%2F2GAdHcksCxNZ3L%2BhIoucCAuxUaou7armFdvYe%2BJ4vgFWbUycnoPcxjojFQUWNFej0bXSX0SyNYUhQnjs%2Fq3Yfm4%2BO1ErshmcmvpHdQT9zjw1BUzXJc1N3dUCw3kscBbLDfeYTOJHdjWrVMt3gVl6SIKhAhcerVIOQtA9rPgyg9SKbpDiFTKIktbOTJGeC0uiFAsREtmZX10R00QHWxlNbwsmU0%2F1lpRxcskoNl5GNPT2MKvMycEGOqUBR4q5G%2FAJsXaqEjSawH4i5wYLgfhrNaAIL8yuCEHutez%2FerQKF4qD84MI5vAiZm9yn5jhzNpv8xrwces1ifAWgjUp%2FKhLLGHkgNcklM5fim1d%2FIc5M1rRUPDS4S2wK63JGLEc%2FS%2FbLpbpMS6ZEP42XO6z2i1y3B6cMhP844QYOLVpkUcqW%2FGmsWFoayH7KtWtWwlrCrG9z5AA7aizeQhqJQy%2B1I2f&X-Amz-Signature=b4f36c223f88d36c150d2920f6088d1648a54a14482d15553e4391bd4f9f1e53&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFMXVUS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC9Bd5jtqgKO0U5H4I5Z6vOdnTS6nhLM0KCroUrY4DqYgIgRRX2xS6pPqeTPy%2FepydVn7M6WlxZ3VvcC%2FItXof8t%2B8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFpegIF2mynNuVsiwCrcA3LGLzYXT1skip3DQlYdN18Nbv2uQyRcU6SbPO2ybI2HFzynE43iRg5FYzeGIIHJssTj1Q5s8IOG%2B4wKaBlfEAdSL3xO%2FQGy61As%2FtJTmiC10Zoyv0gsP5K0IVoIWn84G7zXUrereRlyqsVe%2BiJ9NuYGwegZofvVZLpvzvEKsvoRRMQOih4nUUL8eu17Ka6d0EIr9bKu5qtq93mlQUo2Ev5Xy45PcqSy7ordG%2FP%2FAd3QSKeFJlfGnle9UNFlBh2NH%2BXoc26t6rqgQTxie%2F%2Bq%2BSs9TOAiRV3QiVV2D7ryjW7WTIXD5MEm4%2Bb2C5TcUka2s6VVgWy0vPBC0EgNf2eXN0AJSvyhtU9LJ5ApBFQOzIUW9Uo1TORQ4OLVj8r5cj5xGcNroP5qeT6xwMP%2F2GAdHcksCxNZ3L%2BhIoucCAuxUaou7armFdvYe%2BJ4vgFWbUycnoPcxjojFQUWNFej0bXSX0SyNYUhQnjs%2Fq3Yfm4%2BO1ErshmcmvpHdQT9zjw1BUzXJc1N3dUCw3kscBbLDfeYTOJHdjWrVMt3gVl6SIKhAhcerVIOQtA9rPgyg9SKbpDiFTKIktbOTJGeC0uiFAsREtmZX10R00QHWxlNbwsmU0%2F1lpRxcskoNl5GNPT2MKvMycEGOqUBR4q5G%2FAJsXaqEjSawH4i5wYLgfhrNaAIL8yuCEHutez%2FerQKF4qD84MI5vAiZm9yn5jhzNpv8xrwces1ifAWgjUp%2FKhLLGHkgNcklM5fim1d%2FIc5M1rRUPDS4S2wK63JGLEc%2FS%2FbLpbpMS6ZEP42XO6z2i1y3B6cMhP844QYOLVpkUcqW%2FGmsWFoayH7KtWtWwlrCrG9z5AA7aizeQhqJQy%2B1I2f&X-Amz-Signature=55fe6192f4858f962f45688334009232c715454f3df2259636dfdee70d6355d8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFMXVUS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC9Bd5jtqgKO0U5H4I5Z6vOdnTS6nhLM0KCroUrY4DqYgIgRRX2xS6pPqeTPy%2FepydVn7M6WlxZ3VvcC%2FItXof8t%2B8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFpegIF2mynNuVsiwCrcA3LGLzYXT1skip3DQlYdN18Nbv2uQyRcU6SbPO2ybI2HFzynE43iRg5FYzeGIIHJssTj1Q5s8IOG%2B4wKaBlfEAdSL3xO%2FQGy61As%2FtJTmiC10Zoyv0gsP5K0IVoIWn84G7zXUrereRlyqsVe%2BiJ9NuYGwegZofvVZLpvzvEKsvoRRMQOih4nUUL8eu17Ka6d0EIr9bKu5qtq93mlQUo2Ev5Xy45PcqSy7ordG%2FP%2FAd3QSKeFJlfGnle9UNFlBh2NH%2BXoc26t6rqgQTxie%2F%2Bq%2BSs9TOAiRV3QiVV2D7ryjW7WTIXD5MEm4%2Bb2C5TcUka2s6VVgWy0vPBC0EgNf2eXN0AJSvyhtU9LJ5ApBFQOzIUW9Uo1TORQ4OLVj8r5cj5xGcNroP5qeT6xwMP%2F2GAdHcksCxNZ3L%2BhIoucCAuxUaou7armFdvYe%2BJ4vgFWbUycnoPcxjojFQUWNFej0bXSX0SyNYUhQnjs%2Fq3Yfm4%2BO1ErshmcmvpHdQT9zjw1BUzXJc1N3dUCw3kscBbLDfeYTOJHdjWrVMt3gVl6SIKhAhcerVIOQtA9rPgyg9SKbpDiFTKIktbOTJGeC0uiFAsREtmZX10R00QHWxlNbwsmU0%2F1lpRxcskoNl5GNPT2MKvMycEGOqUBR4q5G%2FAJsXaqEjSawH4i5wYLgfhrNaAIL8yuCEHutez%2FerQKF4qD84MI5vAiZm9yn5jhzNpv8xrwces1ifAWgjUp%2FKhLLGHkgNcklM5fim1d%2FIc5M1rRUPDS4S2wK63JGLEc%2FS%2FbLpbpMS6ZEP42XO6z2i1y3B6cMhP844QYOLVpkUcqW%2FGmsWFoayH7KtWtWwlrCrG9z5AA7aizeQhqJQy%2B1I2f&X-Amz-Signature=728831fd11313e5328bb8f5a6bc883d6adad472d5a5f56b9f6078502e6bf683c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFMXVUS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC9Bd5jtqgKO0U5H4I5Z6vOdnTS6nhLM0KCroUrY4DqYgIgRRX2xS6pPqeTPy%2FepydVn7M6WlxZ3VvcC%2FItXof8t%2B8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFpegIF2mynNuVsiwCrcA3LGLzYXT1skip3DQlYdN18Nbv2uQyRcU6SbPO2ybI2HFzynE43iRg5FYzeGIIHJssTj1Q5s8IOG%2B4wKaBlfEAdSL3xO%2FQGy61As%2FtJTmiC10Zoyv0gsP5K0IVoIWn84G7zXUrereRlyqsVe%2BiJ9NuYGwegZofvVZLpvzvEKsvoRRMQOih4nUUL8eu17Ka6d0EIr9bKu5qtq93mlQUo2Ev5Xy45PcqSy7ordG%2FP%2FAd3QSKeFJlfGnle9UNFlBh2NH%2BXoc26t6rqgQTxie%2F%2Bq%2BSs9TOAiRV3QiVV2D7ryjW7WTIXD5MEm4%2Bb2C5TcUka2s6VVgWy0vPBC0EgNf2eXN0AJSvyhtU9LJ5ApBFQOzIUW9Uo1TORQ4OLVj8r5cj5xGcNroP5qeT6xwMP%2F2GAdHcksCxNZ3L%2BhIoucCAuxUaou7armFdvYe%2BJ4vgFWbUycnoPcxjojFQUWNFej0bXSX0SyNYUhQnjs%2Fq3Yfm4%2BO1ErshmcmvpHdQT9zjw1BUzXJc1N3dUCw3kscBbLDfeYTOJHdjWrVMt3gVl6SIKhAhcerVIOQtA9rPgyg9SKbpDiFTKIktbOTJGeC0uiFAsREtmZX10R00QHWxlNbwsmU0%2F1lpRxcskoNl5GNPT2MKvMycEGOqUBR4q5G%2FAJsXaqEjSawH4i5wYLgfhrNaAIL8yuCEHutez%2FerQKF4qD84MI5vAiZm9yn5jhzNpv8xrwces1ifAWgjUp%2FKhLLGHkgNcklM5fim1d%2FIc5M1rRUPDS4S2wK63JGLEc%2FS%2FbLpbpMS6ZEP42XO6z2i1y3B6cMhP844QYOLVpkUcqW%2FGmsWFoayH7KtWtWwlrCrG9z5AA7aizeQhqJQy%2B1I2f&X-Amz-Signature=cb99d1f0af25caf27ef75885d4e8665ab4e5bfb9c391501d60747af53c087efe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFMXVUS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC9Bd5jtqgKO0U5H4I5Z6vOdnTS6nhLM0KCroUrY4DqYgIgRRX2xS6pPqeTPy%2FepydVn7M6WlxZ3VvcC%2FItXof8t%2B8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFpegIF2mynNuVsiwCrcA3LGLzYXT1skip3DQlYdN18Nbv2uQyRcU6SbPO2ybI2HFzynE43iRg5FYzeGIIHJssTj1Q5s8IOG%2B4wKaBlfEAdSL3xO%2FQGy61As%2FtJTmiC10Zoyv0gsP5K0IVoIWn84G7zXUrereRlyqsVe%2BiJ9NuYGwegZofvVZLpvzvEKsvoRRMQOih4nUUL8eu17Ka6d0EIr9bKu5qtq93mlQUo2Ev5Xy45PcqSy7ordG%2FP%2FAd3QSKeFJlfGnle9UNFlBh2NH%2BXoc26t6rqgQTxie%2F%2Bq%2BSs9TOAiRV3QiVV2D7ryjW7WTIXD5MEm4%2Bb2C5TcUka2s6VVgWy0vPBC0EgNf2eXN0AJSvyhtU9LJ5ApBFQOzIUW9Uo1TORQ4OLVj8r5cj5xGcNroP5qeT6xwMP%2F2GAdHcksCxNZ3L%2BhIoucCAuxUaou7armFdvYe%2BJ4vgFWbUycnoPcxjojFQUWNFej0bXSX0SyNYUhQnjs%2Fq3Yfm4%2BO1ErshmcmvpHdQT9zjw1BUzXJc1N3dUCw3kscBbLDfeYTOJHdjWrVMt3gVl6SIKhAhcerVIOQtA9rPgyg9SKbpDiFTKIktbOTJGeC0uiFAsREtmZX10R00QHWxlNbwsmU0%2F1lpRxcskoNl5GNPT2MKvMycEGOqUBR4q5G%2FAJsXaqEjSawH4i5wYLgfhrNaAIL8yuCEHutez%2FerQKF4qD84MI5vAiZm9yn5jhzNpv8xrwces1ifAWgjUp%2FKhLLGHkgNcklM5fim1d%2FIc5M1rRUPDS4S2wK63JGLEc%2FS%2FbLpbpMS6ZEP42XO6z2i1y3B6cMhP844QYOLVpkUcqW%2FGmsWFoayH7KtWtWwlrCrG9z5AA7aizeQhqJQy%2B1I2f&X-Amz-Signature=818e9c093253e84601adde6cb81dfab9c668ace25ae8bf6007eea7f5affab958&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFMXVUS%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC9Bd5jtqgKO0U5H4I5Z6vOdnTS6nhLM0KCroUrY4DqYgIgRRX2xS6pPqeTPy%2FepydVn7M6WlxZ3VvcC%2FItXof8t%2B8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFpegIF2mynNuVsiwCrcA3LGLzYXT1skip3DQlYdN18Nbv2uQyRcU6SbPO2ybI2HFzynE43iRg5FYzeGIIHJssTj1Q5s8IOG%2B4wKaBlfEAdSL3xO%2FQGy61As%2FtJTmiC10Zoyv0gsP5K0IVoIWn84G7zXUrereRlyqsVe%2BiJ9NuYGwegZofvVZLpvzvEKsvoRRMQOih4nUUL8eu17Ka6d0EIr9bKu5qtq93mlQUo2Ev5Xy45PcqSy7ordG%2FP%2FAd3QSKeFJlfGnle9UNFlBh2NH%2BXoc26t6rqgQTxie%2F%2Bq%2BSs9TOAiRV3QiVV2D7ryjW7WTIXD5MEm4%2Bb2C5TcUka2s6VVgWy0vPBC0EgNf2eXN0AJSvyhtU9LJ5ApBFQOzIUW9Uo1TORQ4OLVj8r5cj5xGcNroP5qeT6xwMP%2F2GAdHcksCxNZ3L%2BhIoucCAuxUaou7armFdvYe%2BJ4vgFWbUycnoPcxjojFQUWNFej0bXSX0SyNYUhQnjs%2Fq3Yfm4%2BO1ErshmcmvpHdQT9zjw1BUzXJc1N3dUCw3kscBbLDfeYTOJHdjWrVMt3gVl6SIKhAhcerVIOQtA9rPgyg9SKbpDiFTKIktbOTJGeC0uiFAsREtmZX10R00QHWxlNbwsmU0%2F1lpRxcskoNl5GNPT2MKvMycEGOqUBR4q5G%2FAJsXaqEjSawH4i5wYLgfhrNaAIL8yuCEHutez%2FerQKF4qD84MI5vAiZm9yn5jhzNpv8xrwces1ifAWgjUp%2FKhLLGHkgNcklM5fim1d%2FIc5M1rRUPDS4S2wK63JGLEc%2FS%2FbLpbpMS6ZEP42XO6z2i1y3B6cMhP844QYOLVpkUcqW%2FGmsWFoayH7KtWtWwlrCrG9z5AA7aizeQhqJQy%2B1I2f&X-Amz-Signature=fd9946a7e5cec9788f4b4e2b88fc228e9e40778611579737a3b2d8b4aee10772&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
