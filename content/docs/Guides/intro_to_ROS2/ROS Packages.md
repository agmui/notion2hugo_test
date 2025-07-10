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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGKUSTH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhY0pYHL2sxbY7Ym5B12rXOlCYxBotS3XqiIreC6OXgIhAI0K54yUdNTWKvlkpGJLR%2BsWOjFWrk%2BeKjeLYnEcwZc0KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGXwNDAhkFqWGDLFwq3AOoIS9Y3UnU%2Fw%2BNB21KhdTRCHJ2dmmw687NjKD03iQNdocErwhjsF4XGBKV8pUU8S%2BCf323Cm1FWcpzm9Ja4O3YmUwW%2BZ2hnCSUhGj%2Bu2FsqbBRIAoPZvrG0sPy32bxIhTkksujH0njCR0AA78lHOzy1yaDTW%2BM3x2Y%2B8NIamXjTgYurXSqmGYqy2qPVLi%2BIwEr28AXbe4UsrzAVEGefvlnXndjeSW%2FkTThnMnW2KFrBn2cNR0t96c6VKQUThb5aOghDKNWd%2FJ%2BWzSJxrPSNK7u1Qi4Xk5%2FVrTeevlhEGkHuFERG4dr8ljNobyYnWRJNkDbUUKpwL1WJcPD4%2B1tNcavEE6f8wOkbniNi61GEUgHzyAMadWBeFkG4EEzL1lVeQnyyYhZiHdcODbWCBcuLfI8GW%2FGObX057OFBoMRDyp7ylXi8W7wD4MY0Nlr9YEB85QWEori%2FY4cF0PLaRbH8a7hblPvLEhz8Qrvpte2SEEPIPt5BVWET2Xr6Sg3kNFC7WJ0evN%2FUJQDCWbPA5gNuqf0JX9L1f4xrYawAOoiRIHSRrl7Izh%2Fo5xL14dziJI%2B10CEQpd%2FMyNUH8kTY%2BnJCE4uauMPiQUBnnFqcB%2B4N3YXe5n6HVFUcCzms9JzQzCe%2F7zDBjqkAdB6CL3eiPqdnQFB2OIcTQAzuqtUbQyWDZyaqX7sD0RtRvCETOb3yWPCZDEvE%2FUDx6SeIPhX2NXcNfGP9AdQQbe0Z7y4g4sHJbOy1%2B4x04WCd0vnF4OO%2Ba8VDckLPaOzE8GSaH6qFt7PFYQzs%2BKmkUNqapHzb5aSF5NVZAbT6cyhCFFoFu3yLuD8PnFuUBR3f1aslhiwAveRjBfbEnxOvv4AcQtw&X-Amz-Signature=01f2f5d12eb3fe9bff445d2bb5fbd3a3fee8a6d4a48d2aee47afd815d33a079e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGKUSTH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhY0pYHL2sxbY7Ym5B12rXOlCYxBotS3XqiIreC6OXgIhAI0K54yUdNTWKvlkpGJLR%2BsWOjFWrk%2BeKjeLYnEcwZc0KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGXwNDAhkFqWGDLFwq3AOoIS9Y3UnU%2Fw%2BNB21KhdTRCHJ2dmmw687NjKD03iQNdocErwhjsF4XGBKV8pUU8S%2BCf323Cm1FWcpzm9Ja4O3YmUwW%2BZ2hnCSUhGj%2Bu2FsqbBRIAoPZvrG0sPy32bxIhTkksujH0njCR0AA78lHOzy1yaDTW%2BM3x2Y%2B8NIamXjTgYurXSqmGYqy2qPVLi%2BIwEr28AXbe4UsrzAVEGefvlnXndjeSW%2FkTThnMnW2KFrBn2cNR0t96c6VKQUThb5aOghDKNWd%2FJ%2BWzSJxrPSNK7u1Qi4Xk5%2FVrTeevlhEGkHuFERG4dr8ljNobyYnWRJNkDbUUKpwL1WJcPD4%2B1tNcavEE6f8wOkbniNi61GEUgHzyAMadWBeFkG4EEzL1lVeQnyyYhZiHdcODbWCBcuLfI8GW%2FGObX057OFBoMRDyp7ylXi8W7wD4MY0Nlr9YEB85QWEori%2FY4cF0PLaRbH8a7hblPvLEhz8Qrvpte2SEEPIPt5BVWET2Xr6Sg3kNFC7WJ0evN%2FUJQDCWbPA5gNuqf0JX9L1f4xrYawAOoiRIHSRrl7Izh%2Fo5xL14dziJI%2B10CEQpd%2FMyNUH8kTY%2BnJCE4uauMPiQUBnnFqcB%2B4N3YXe5n6HVFUcCzms9JzQzCe%2F7zDBjqkAdB6CL3eiPqdnQFB2OIcTQAzuqtUbQyWDZyaqX7sD0RtRvCETOb3yWPCZDEvE%2FUDx6SeIPhX2NXcNfGP9AdQQbe0Z7y4g4sHJbOy1%2B4x04WCd0vnF4OO%2Ba8VDckLPaOzE8GSaH6qFt7PFYQzs%2BKmkUNqapHzb5aSF5NVZAbT6cyhCFFoFu3yLuD8PnFuUBR3f1aslhiwAveRjBfbEnxOvv4AcQtw&X-Amz-Signature=c1aa4a94eaf5c383c62d59785b7ba436a5cab676a1ce64a29fe9ef77e3b5f5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGKUSTH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhY0pYHL2sxbY7Ym5B12rXOlCYxBotS3XqiIreC6OXgIhAI0K54yUdNTWKvlkpGJLR%2BsWOjFWrk%2BeKjeLYnEcwZc0KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGXwNDAhkFqWGDLFwq3AOoIS9Y3UnU%2Fw%2BNB21KhdTRCHJ2dmmw687NjKD03iQNdocErwhjsF4XGBKV8pUU8S%2BCf323Cm1FWcpzm9Ja4O3YmUwW%2BZ2hnCSUhGj%2Bu2FsqbBRIAoPZvrG0sPy32bxIhTkksujH0njCR0AA78lHOzy1yaDTW%2BM3x2Y%2B8NIamXjTgYurXSqmGYqy2qPVLi%2BIwEr28AXbe4UsrzAVEGefvlnXndjeSW%2FkTThnMnW2KFrBn2cNR0t96c6VKQUThb5aOghDKNWd%2FJ%2BWzSJxrPSNK7u1Qi4Xk5%2FVrTeevlhEGkHuFERG4dr8ljNobyYnWRJNkDbUUKpwL1WJcPD4%2B1tNcavEE6f8wOkbniNi61GEUgHzyAMadWBeFkG4EEzL1lVeQnyyYhZiHdcODbWCBcuLfI8GW%2FGObX057OFBoMRDyp7ylXi8W7wD4MY0Nlr9YEB85QWEori%2FY4cF0PLaRbH8a7hblPvLEhz8Qrvpte2SEEPIPt5BVWET2Xr6Sg3kNFC7WJ0evN%2FUJQDCWbPA5gNuqf0JX9L1f4xrYawAOoiRIHSRrl7Izh%2Fo5xL14dziJI%2B10CEQpd%2FMyNUH8kTY%2BnJCE4uauMPiQUBnnFqcB%2B4N3YXe5n6HVFUcCzms9JzQzCe%2F7zDBjqkAdB6CL3eiPqdnQFB2OIcTQAzuqtUbQyWDZyaqX7sD0RtRvCETOb3yWPCZDEvE%2FUDx6SeIPhX2NXcNfGP9AdQQbe0Z7y4g4sHJbOy1%2B4x04WCd0vnF4OO%2Ba8VDckLPaOzE8GSaH6qFt7PFYQzs%2BKmkUNqapHzb5aSF5NVZAbT6cyhCFFoFu3yLuD8PnFuUBR3f1aslhiwAveRjBfbEnxOvv4AcQtw&X-Amz-Signature=a1d5f8e23818dacb9ae1b6c6526fc5cd35443b4d52fbd5eaad43fec4e53906c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGKUSTH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhY0pYHL2sxbY7Ym5B12rXOlCYxBotS3XqiIreC6OXgIhAI0K54yUdNTWKvlkpGJLR%2BsWOjFWrk%2BeKjeLYnEcwZc0KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGXwNDAhkFqWGDLFwq3AOoIS9Y3UnU%2Fw%2BNB21KhdTRCHJ2dmmw687NjKD03iQNdocErwhjsF4XGBKV8pUU8S%2BCf323Cm1FWcpzm9Ja4O3YmUwW%2BZ2hnCSUhGj%2Bu2FsqbBRIAoPZvrG0sPy32bxIhTkksujH0njCR0AA78lHOzy1yaDTW%2BM3x2Y%2B8NIamXjTgYurXSqmGYqy2qPVLi%2BIwEr28AXbe4UsrzAVEGefvlnXndjeSW%2FkTThnMnW2KFrBn2cNR0t96c6VKQUThb5aOghDKNWd%2FJ%2BWzSJxrPSNK7u1Qi4Xk5%2FVrTeevlhEGkHuFERG4dr8ljNobyYnWRJNkDbUUKpwL1WJcPD4%2B1tNcavEE6f8wOkbniNi61GEUgHzyAMadWBeFkG4EEzL1lVeQnyyYhZiHdcODbWCBcuLfI8GW%2FGObX057OFBoMRDyp7ylXi8W7wD4MY0Nlr9YEB85QWEori%2FY4cF0PLaRbH8a7hblPvLEhz8Qrvpte2SEEPIPt5BVWET2Xr6Sg3kNFC7WJ0evN%2FUJQDCWbPA5gNuqf0JX9L1f4xrYawAOoiRIHSRrl7Izh%2Fo5xL14dziJI%2B10CEQpd%2FMyNUH8kTY%2BnJCE4uauMPiQUBnnFqcB%2B4N3YXe5n6HVFUcCzms9JzQzCe%2F7zDBjqkAdB6CL3eiPqdnQFB2OIcTQAzuqtUbQyWDZyaqX7sD0RtRvCETOb3yWPCZDEvE%2FUDx6SeIPhX2NXcNfGP9AdQQbe0Z7y4g4sHJbOy1%2B4x04WCd0vnF4OO%2Ba8VDckLPaOzE8GSaH6qFt7PFYQzs%2BKmkUNqapHzb5aSF5NVZAbT6cyhCFFoFu3yLuD8PnFuUBR3f1aslhiwAveRjBfbEnxOvv4AcQtw&X-Amz-Signature=7dec297edee2b3c840f7a267c21e59ce25e657dd35770da10c07cacdaec0fa67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGKUSTH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhY0pYHL2sxbY7Ym5B12rXOlCYxBotS3XqiIreC6OXgIhAI0K54yUdNTWKvlkpGJLR%2BsWOjFWrk%2BeKjeLYnEcwZc0KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGXwNDAhkFqWGDLFwq3AOoIS9Y3UnU%2Fw%2BNB21KhdTRCHJ2dmmw687NjKD03iQNdocErwhjsF4XGBKV8pUU8S%2BCf323Cm1FWcpzm9Ja4O3YmUwW%2BZ2hnCSUhGj%2Bu2FsqbBRIAoPZvrG0sPy32bxIhTkksujH0njCR0AA78lHOzy1yaDTW%2BM3x2Y%2B8NIamXjTgYurXSqmGYqy2qPVLi%2BIwEr28AXbe4UsrzAVEGefvlnXndjeSW%2FkTThnMnW2KFrBn2cNR0t96c6VKQUThb5aOghDKNWd%2FJ%2BWzSJxrPSNK7u1Qi4Xk5%2FVrTeevlhEGkHuFERG4dr8ljNobyYnWRJNkDbUUKpwL1WJcPD4%2B1tNcavEE6f8wOkbniNi61GEUgHzyAMadWBeFkG4EEzL1lVeQnyyYhZiHdcODbWCBcuLfI8GW%2FGObX057OFBoMRDyp7ylXi8W7wD4MY0Nlr9YEB85QWEori%2FY4cF0PLaRbH8a7hblPvLEhz8Qrvpte2SEEPIPt5BVWET2Xr6Sg3kNFC7WJ0evN%2FUJQDCWbPA5gNuqf0JX9L1f4xrYawAOoiRIHSRrl7Izh%2Fo5xL14dziJI%2B10CEQpd%2FMyNUH8kTY%2BnJCE4uauMPiQUBnnFqcB%2B4N3YXe5n6HVFUcCzms9JzQzCe%2F7zDBjqkAdB6CL3eiPqdnQFB2OIcTQAzuqtUbQyWDZyaqX7sD0RtRvCETOb3yWPCZDEvE%2FUDx6SeIPhX2NXcNfGP9AdQQbe0Z7y4g4sHJbOy1%2B4x04WCd0vnF4OO%2Ba8VDckLPaOzE8GSaH6qFt7PFYQzs%2BKmkUNqapHzb5aSF5NVZAbT6cyhCFFoFu3yLuD8PnFuUBR3f1aslhiwAveRjBfbEnxOvv4AcQtw&X-Amz-Signature=41eecc1e332d46ff85da981190e80946650031ea9ce54863fcef45c5daf92716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGKUSTH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhY0pYHL2sxbY7Ym5B12rXOlCYxBotS3XqiIreC6OXgIhAI0K54yUdNTWKvlkpGJLR%2BsWOjFWrk%2BeKjeLYnEcwZc0KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGXwNDAhkFqWGDLFwq3AOoIS9Y3UnU%2Fw%2BNB21KhdTRCHJ2dmmw687NjKD03iQNdocErwhjsF4XGBKV8pUU8S%2BCf323Cm1FWcpzm9Ja4O3YmUwW%2BZ2hnCSUhGj%2Bu2FsqbBRIAoPZvrG0sPy32bxIhTkksujH0njCR0AA78lHOzy1yaDTW%2BM3x2Y%2B8NIamXjTgYurXSqmGYqy2qPVLi%2BIwEr28AXbe4UsrzAVEGefvlnXndjeSW%2FkTThnMnW2KFrBn2cNR0t96c6VKQUThb5aOghDKNWd%2FJ%2BWzSJxrPSNK7u1Qi4Xk5%2FVrTeevlhEGkHuFERG4dr8ljNobyYnWRJNkDbUUKpwL1WJcPD4%2B1tNcavEE6f8wOkbniNi61GEUgHzyAMadWBeFkG4EEzL1lVeQnyyYhZiHdcODbWCBcuLfI8GW%2FGObX057OFBoMRDyp7ylXi8W7wD4MY0Nlr9YEB85QWEori%2FY4cF0PLaRbH8a7hblPvLEhz8Qrvpte2SEEPIPt5BVWET2Xr6Sg3kNFC7WJ0evN%2FUJQDCWbPA5gNuqf0JX9L1f4xrYawAOoiRIHSRrl7Izh%2Fo5xL14dziJI%2B10CEQpd%2FMyNUH8kTY%2BnJCE4uauMPiQUBnnFqcB%2B4N3YXe5n6HVFUcCzms9JzQzCe%2F7zDBjqkAdB6CL3eiPqdnQFB2OIcTQAzuqtUbQyWDZyaqX7sD0RtRvCETOb3yWPCZDEvE%2FUDx6SeIPhX2NXcNfGP9AdQQbe0Z7y4g4sHJbOy1%2B4x04WCd0vnF4OO%2Ba8VDckLPaOzE8GSaH6qFt7PFYQzs%2BKmkUNqapHzb5aSF5NVZAbT6cyhCFFoFu3yLuD8PnFuUBR3f1aslhiwAveRjBfbEnxOvv4AcQtw&X-Amz-Signature=9401329507f3530a201d6d582694bc502ebf212fd2a3af5ebf6e3d1214763325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZGKUSTH%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZhY0pYHL2sxbY7Ym5B12rXOlCYxBotS3XqiIreC6OXgIhAI0K54yUdNTWKvlkpGJLR%2BsWOjFWrk%2BeKjeLYnEcwZc0KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGXwNDAhkFqWGDLFwq3AOoIS9Y3UnU%2Fw%2BNB21KhdTRCHJ2dmmw687NjKD03iQNdocErwhjsF4XGBKV8pUU8S%2BCf323Cm1FWcpzm9Ja4O3YmUwW%2BZ2hnCSUhGj%2Bu2FsqbBRIAoPZvrG0sPy32bxIhTkksujH0njCR0AA78lHOzy1yaDTW%2BM3x2Y%2B8NIamXjTgYurXSqmGYqy2qPVLi%2BIwEr28AXbe4UsrzAVEGefvlnXndjeSW%2FkTThnMnW2KFrBn2cNR0t96c6VKQUThb5aOghDKNWd%2FJ%2BWzSJxrPSNK7u1Qi4Xk5%2FVrTeevlhEGkHuFERG4dr8ljNobyYnWRJNkDbUUKpwL1WJcPD4%2B1tNcavEE6f8wOkbniNi61GEUgHzyAMadWBeFkG4EEzL1lVeQnyyYhZiHdcODbWCBcuLfI8GW%2FGObX057OFBoMRDyp7ylXi8W7wD4MY0Nlr9YEB85QWEori%2FY4cF0PLaRbH8a7hblPvLEhz8Qrvpte2SEEPIPt5BVWET2Xr6Sg3kNFC7WJ0evN%2FUJQDCWbPA5gNuqf0JX9L1f4xrYawAOoiRIHSRrl7Izh%2Fo5xL14dziJI%2B10CEQpd%2FMyNUH8kTY%2BnJCE4uauMPiQUBnnFqcB%2B4N3YXe5n6HVFUcCzms9JzQzCe%2F7zDBjqkAdB6CL3eiPqdnQFB2OIcTQAzuqtUbQyWDZyaqX7sD0RtRvCETOb3yWPCZDEvE%2FUDx6SeIPhX2NXcNfGP9AdQQbe0Z7y4g4sHJbOy1%2B4x04WCd0vnF4OO%2Ba8VDckLPaOzE8GSaH6qFt7PFYQzs%2BKmkUNqapHzb5aSF5NVZAbT6cyhCFFoFu3yLuD8PnFuUBR3f1aslhiwAveRjBfbEnxOvv4AcQtw&X-Amz-Signature=30d512d9bc13625ede750f5b93cd64265a33d6bc70e7894f6be8f213ddc8cbdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
