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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG522YCT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjkS5daQAdCDYzrC4jLiAlE%2FvEkGlLXL74Z3m36Dy%2FwIgLiBuToiSMlRW8yI4JAdZxM0F6Lm2o8oozU4W7a1vsvcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBCvlApWjXe1pcvvkSrcAxWJIlEW%2FhfLZLdJH1x%2FLsLVNANrM43pJQQbSmkjAuZWfeB2ZiKJ3Xif4G%2BqnnQ%2FWgDobEu60%2FHAOlWXEDudV5fW6WLhTU8CBHNNJMC7Q%2FyS7tmwP%2BLlpJdk18DgWadxtU1nl4x9ArxCbCsIgPHLCdiebVY3bIXSbQL0aP%2BPv6zF1NzZnuLFJf%2BAhA%2FSJKMpviCElHv4ScYf7SQJf%2F91ucQszsZDwEQv%2F9xHbCaE%2Fd2F2E%2FaYDCI2Z1BRRUIEQXbZPo5m9KPYOQNTpDFi3B9vtC6emWRFLVlUEW2MkhcVd%2FNTn8vDi7pLf5dPuGBJUWeO9IGnmbfcaJJbgf4j%2FR6WtuhCllHGjUkD8zlJVc%2BeCnZZ2RMmvKBOJ2X5b8SFIOnNdfBbkucb8%2BbIf834m6EJfPUqQb5%2FsMcWrckqvQILpDDboQt9RrcsCA5VRjxabYnS6sN48Rwrou2BoexdO35o5rhuQ3hNWAAkXS%2FxEn9vWmFqYavn80PYYq3ivx7tbK7uVlvntaMWPg1n4oeq%2FD47NRgCM56Wb4KhueahLtWkhlAFUBNF3f%2B%2Bs94ul%2FjR04laGBLHtORjI98a%2Blp%2FfsULItNxN%2Fx6Heq7wthzzXqLunhxxXzUW2zwk1UWBb6MNLsib8GOqUBjMkFBvIhiRIO3I%2B0SVVRMqqkrCm8K58DWbSEZRjHHYRkLhSCtLreKHRzm4FM1KsCRFsEsPGtZRT3hxSJ3VSGAussBUdM9vjW%2FW9rtHC5kn0x4z%2FkDxGbjLxndOhCG3c79ROr%2BJMFpD1BGM6RSNrGwGLdjXlfCvIov1bdC9EDBTRfxEIB0TC9w8x09Kgqfu2NPzEz%2Bz2qVg9WzLDTMRrH32axLNkz&X-Amz-Signature=dacb9fa28c2be67d861bd7f8b390a8cc8f5d77dff299980cce5e177ccf7c4d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG522YCT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjkS5daQAdCDYzrC4jLiAlE%2FvEkGlLXL74Z3m36Dy%2FwIgLiBuToiSMlRW8yI4JAdZxM0F6Lm2o8oozU4W7a1vsvcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBCvlApWjXe1pcvvkSrcAxWJIlEW%2FhfLZLdJH1x%2FLsLVNANrM43pJQQbSmkjAuZWfeB2ZiKJ3Xif4G%2BqnnQ%2FWgDobEu60%2FHAOlWXEDudV5fW6WLhTU8CBHNNJMC7Q%2FyS7tmwP%2BLlpJdk18DgWadxtU1nl4x9ArxCbCsIgPHLCdiebVY3bIXSbQL0aP%2BPv6zF1NzZnuLFJf%2BAhA%2FSJKMpviCElHv4ScYf7SQJf%2F91ucQszsZDwEQv%2F9xHbCaE%2Fd2F2E%2FaYDCI2Z1BRRUIEQXbZPo5m9KPYOQNTpDFi3B9vtC6emWRFLVlUEW2MkhcVd%2FNTn8vDi7pLf5dPuGBJUWeO9IGnmbfcaJJbgf4j%2FR6WtuhCllHGjUkD8zlJVc%2BeCnZZ2RMmvKBOJ2X5b8SFIOnNdfBbkucb8%2BbIf834m6EJfPUqQb5%2FsMcWrckqvQILpDDboQt9RrcsCA5VRjxabYnS6sN48Rwrou2BoexdO35o5rhuQ3hNWAAkXS%2FxEn9vWmFqYavn80PYYq3ivx7tbK7uVlvntaMWPg1n4oeq%2FD47NRgCM56Wb4KhueahLtWkhlAFUBNF3f%2B%2Bs94ul%2FjR04laGBLHtORjI98a%2Blp%2FfsULItNxN%2Fx6Heq7wthzzXqLunhxxXzUW2zwk1UWBb6MNLsib8GOqUBjMkFBvIhiRIO3I%2B0SVVRMqqkrCm8K58DWbSEZRjHHYRkLhSCtLreKHRzm4FM1KsCRFsEsPGtZRT3hxSJ3VSGAussBUdM9vjW%2FW9rtHC5kn0x4z%2FkDxGbjLxndOhCG3c79ROr%2BJMFpD1BGM6RSNrGwGLdjXlfCvIov1bdC9EDBTRfxEIB0TC9w8x09Kgqfu2NPzEz%2Bz2qVg9WzLDTMRrH32axLNkz&X-Amz-Signature=ec28ede16e0e6667c098dcb9ad52e7bb3e555b38cfc949491f9f6a4a63dd8f69&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG522YCT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjkS5daQAdCDYzrC4jLiAlE%2FvEkGlLXL74Z3m36Dy%2FwIgLiBuToiSMlRW8yI4JAdZxM0F6Lm2o8oozU4W7a1vsvcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBCvlApWjXe1pcvvkSrcAxWJIlEW%2FhfLZLdJH1x%2FLsLVNANrM43pJQQbSmkjAuZWfeB2ZiKJ3Xif4G%2BqnnQ%2FWgDobEu60%2FHAOlWXEDudV5fW6WLhTU8CBHNNJMC7Q%2FyS7tmwP%2BLlpJdk18DgWadxtU1nl4x9ArxCbCsIgPHLCdiebVY3bIXSbQL0aP%2BPv6zF1NzZnuLFJf%2BAhA%2FSJKMpviCElHv4ScYf7SQJf%2F91ucQszsZDwEQv%2F9xHbCaE%2Fd2F2E%2FaYDCI2Z1BRRUIEQXbZPo5m9KPYOQNTpDFi3B9vtC6emWRFLVlUEW2MkhcVd%2FNTn8vDi7pLf5dPuGBJUWeO9IGnmbfcaJJbgf4j%2FR6WtuhCllHGjUkD8zlJVc%2BeCnZZ2RMmvKBOJ2X5b8SFIOnNdfBbkucb8%2BbIf834m6EJfPUqQb5%2FsMcWrckqvQILpDDboQt9RrcsCA5VRjxabYnS6sN48Rwrou2BoexdO35o5rhuQ3hNWAAkXS%2FxEn9vWmFqYavn80PYYq3ivx7tbK7uVlvntaMWPg1n4oeq%2FD47NRgCM56Wb4KhueahLtWkhlAFUBNF3f%2B%2Bs94ul%2FjR04laGBLHtORjI98a%2Blp%2FfsULItNxN%2Fx6Heq7wthzzXqLunhxxXzUW2zwk1UWBb6MNLsib8GOqUBjMkFBvIhiRIO3I%2B0SVVRMqqkrCm8K58DWbSEZRjHHYRkLhSCtLreKHRzm4FM1KsCRFsEsPGtZRT3hxSJ3VSGAussBUdM9vjW%2FW9rtHC5kn0x4z%2FkDxGbjLxndOhCG3c79ROr%2BJMFpD1BGM6RSNrGwGLdjXlfCvIov1bdC9EDBTRfxEIB0TC9w8x09Kgqfu2NPzEz%2Bz2qVg9WzLDTMRrH32axLNkz&X-Amz-Signature=c11d1f14dc33f6214f4c3f45e3653b29fa380927efd79c44f7d2bdc784d253d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG522YCT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjkS5daQAdCDYzrC4jLiAlE%2FvEkGlLXL74Z3m36Dy%2FwIgLiBuToiSMlRW8yI4JAdZxM0F6Lm2o8oozU4W7a1vsvcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBCvlApWjXe1pcvvkSrcAxWJIlEW%2FhfLZLdJH1x%2FLsLVNANrM43pJQQbSmkjAuZWfeB2ZiKJ3Xif4G%2BqnnQ%2FWgDobEu60%2FHAOlWXEDudV5fW6WLhTU8CBHNNJMC7Q%2FyS7tmwP%2BLlpJdk18DgWadxtU1nl4x9ArxCbCsIgPHLCdiebVY3bIXSbQL0aP%2BPv6zF1NzZnuLFJf%2BAhA%2FSJKMpviCElHv4ScYf7SQJf%2F91ucQszsZDwEQv%2F9xHbCaE%2Fd2F2E%2FaYDCI2Z1BRRUIEQXbZPo5m9KPYOQNTpDFi3B9vtC6emWRFLVlUEW2MkhcVd%2FNTn8vDi7pLf5dPuGBJUWeO9IGnmbfcaJJbgf4j%2FR6WtuhCllHGjUkD8zlJVc%2BeCnZZ2RMmvKBOJ2X5b8SFIOnNdfBbkucb8%2BbIf834m6EJfPUqQb5%2FsMcWrckqvQILpDDboQt9RrcsCA5VRjxabYnS6sN48Rwrou2BoexdO35o5rhuQ3hNWAAkXS%2FxEn9vWmFqYavn80PYYq3ivx7tbK7uVlvntaMWPg1n4oeq%2FD47NRgCM56Wb4KhueahLtWkhlAFUBNF3f%2B%2Bs94ul%2FjR04laGBLHtORjI98a%2Blp%2FfsULItNxN%2Fx6Heq7wthzzXqLunhxxXzUW2zwk1UWBb6MNLsib8GOqUBjMkFBvIhiRIO3I%2B0SVVRMqqkrCm8K58DWbSEZRjHHYRkLhSCtLreKHRzm4FM1KsCRFsEsPGtZRT3hxSJ3VSGAussBUdM9vjW%2FW9rtHC5kn0x4z%2FkDxGbjLxndOhCG3c79ROr%2BJMFpD1BGM6RSNrGwGLdjXlfCvIov1bdC9EDBTRfxEIB0TC9w8x09Kgqfu2NPzEz%2Bz2qVg9WzLDTMRrH32axLNkz&X-Amz-Signature=95cdaa689e13df39f8ae1c48a50b7a0c1faad4b0782cf350774b277955a13622&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG522YCT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjkS5daQAdCDYzrC4jLiAlE%2FvEkGlLXL74Z3m36Dy%2FwIgLiBuToiSMlRW8yI4JAdZxM0F6Lm2o8oozU4W7a1vsvcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBCvlApWjXe1pcvvkSrcAxWJIlEW%2FhfLZLdJH1x%2FLsLVNANrM43pJQQbSmkjAuZWfeB2ZiKJ3Xif4G%2BqnnQ%2FWgDobEu60%2FHAOlWXEDudV5fW6WLhTU8CBHNNJMC7Q%2FyS7tmwP%2BLlpJdk18DgWadxtU1nl4x9ArxCbCsIgPHLCdiebVY3bIXSbQL0aP%2BPv6zF1NzZnuLFJf%2BAhA%2FSJKMpviCElHv4ScYf7SQJf%2F91ucQszsZDwEQv%2F9xHbCaE%2Fd2F2E%2FaYDCI2Z1BRRUIEQXbZPo5m9KPYOQNTpDFi3B9vtC6emWRFLVlUEW2MkhcVd%2FNTn8vDi7pLf5dPuGBJUWeO9IGnmbfcaJJbgf4j%2FR6WtuhCllHGjUkD8zlJVc%2BeCnZZ2RMmvKBOJ2X5b8SFIOnNdfBbkucb8%2BbIf834m6EJfPUqQb5%2FsMcWrckqvQILpDDboQt9RrcsCA5VRjxabYnS6sN48Rwrou2BoexdO35o5rhuQ3hNWAAkXS%2FxEn9vWmFqYavn80PYYq3ivx7tbK7uVlvntaMWPg1n4oeq%2FD47NRgCM56Wb4KhueahLtWkhlAFUBNF3f%2B%2Bs94ul%2FjR04laGBLHtORjI98a%2Blp%2FfsULItNxN%2Fx6Heq7wthzzXqLunhxxXzUW2zwk1UWBb6MNLsib8GOqUBjMkFBvIhiRIO3I%2B0SVVRMqqkrCm8K58DWbSEZRjHHYRkLhSCtLreKHRzm4FM1KsCRFsEsPGtZRT3hxSJ3VSGAussBUdM9vjW%2FW9rtHC5kn0x4z%2FkDxGbjLxndOhCG3c79ROr%2BJMFpD1BGM6RSNrGwGLdjXlfCvIov1bdC9EDBTRfxEIB0TC9w8x09Kgqfu2NPzEz%2Bz2qVg9WzLDTMRrH32axLNkz&X-Amz-Signature=dcdfa2fb40385ab1c45f1f4ca4d1c5700a6b0b729139f3abe527ce9992bca848&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG522YCT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjkS5daQAdCDYzrC4jLiAlE%2FvEkGlLXL74Z3m36Dy%2FwIgLiBuToiSMlRW8yI4JAdZxM0F6Lm2o8oozU4W7a1vsvcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBCvlApWjXe1pcvvkSrcAxWJIlEW%2FhfLZLdJH1x%2FLsLVNANrM43pJQQbSmkjAuZWfeB2ZiKJ3Xif4G%2BqnnQ%2FWgDobEu60%2FHAOlWXEDudV5fW6WLhTU8CBHNNJMC7Q%2FyS7tmwP%2BLlpJdk18DgWadxtU1nl4x9ArxCbCsIgPHLCdiebVY3bIXSbQL0aP%2BPv6zF1NzZnuLFJf%2BAhA%2FSJKMpviCElHv4ScYf7SQJf%2F91ucQszsZDwEQv%2F9xHbCaE%2Fd2F2E%2FaYDCI2Z1BRRUIEQXbZPo5m9KPYOQNTpDFi3B9vtC6emWRFLVlUEW2MkhcVd%2FNTn8vDi7pLf5dPuGBJUWeO9IGnmbfcaJJbgf4j%2FR6WtuhCllHGjUkD8zlJVc%2BeCnZZ2RMmvKBOJ2X5b8SFIOnNdfBbkucb8%2BbIf834m6EJfPUqQb5%2FsMcWrckqvQILpDDboQt9RrcsCA5VRjxabYnS6sN48Rwrou2BoexdO35o5rhuQ3hNWAAkXS%2FxEn9vWmFqYavn80PYYq3ivx7tbK7uVlvntaMWPg1n4oeq%2FD47NRgCM56Wb4KhueahLtWkhlAFUBNF3f%2B%2Bs94ul%2FjR04laGBLHtORjI98a%2Blp%2FfsULItNxN%2Fx6Heq7wthzzXqLunhxxXzUW2zwk1UWBb6MNLsib8GOqUBjMkFBvIhiRIO3I%2B0SVVRMqqkrCm8K58DWbSEZRjHHYRkLhSCtLreKHRzm4FM1KsCRFsEsPGtZRT3hxSJ3VSGAussBUdM9vjW%2FW9rtHC5kn0x4z%2FkDxGbjLxndOhCG3c79ROr%2BJMFpD1BGM6RSNrGwGLdjXlfCvIov1bdC9EDBTRfxEIB0TC9w8x09Kgqfu2NPzEz%2Bz2qVg9WzLDTMRrH32axLNkz&X-Amz-Signature=ad73623ee2d08b1f1350e660c22004032ad7615dec3532aa77c309f8aa89437b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG522YCT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjkS5daQAdCDYzrC4jLiAlE%2FvEkGlLXL74Z3m36Dy%2FwIgLiBuToiSMlRW8yI4JAdZxM0F6Lm2o8oozU4W7a1vsvcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBCvlApWjXe1pcvvkSrcAxWJIlEW%2FhfLZLdJH1x%2FLsLVNANrM43pJQQbSmkjAuZWfeB2ZiKJ3Xif4G%2BqnnQ%2FWgDobEu60%2FHAOlWXEDudV5fW6WLhTU8CBHNNJMC7Q%2FyS7tmwP%2BLlpJdk18DgWadxtU1nl4x9ArxCbCsIgPHLCdiebVY3bIXSbQL0aP%2BPv6zF1NzZnuLFJf%2BAhA%2FSJKMpviCElHv4ScYf7SQJf%2F91ucQszsZDwEQv%2F9xHbCaE%2Fd2F2E%2FaYDCI2Z1BRRUIEQXbZPo5m9KPYOQNTpDFi3B9vtC6emWRFLVlUEW2MkhcVd%2FNTn8vDi7pLf5dPuGBJUWeO9IGnmbfcaJJbgf4j%2FR6WtuhCllHGjUkD8zlJVc%2BeCnZZ2RMmvKBOJ2X5b8SFIOnNdfBbkucb8%2BbIf834m6EJfPUqQb5%2FsMcWrckqvQILpDDboQt9RrcsCA5VRjxabYnS6sN48Rwrou2BoexdO35o5rhuQ3hNWAAkXS%2FxEn9vWmFqYavn80PYYq3ivx7tbK7uVlvntaMWPg1n4oeq%2FD47NRgCM56Wb4KhueahLtWkhlAFUBNF3f%2B%2Bs94ul%2FjR04laGBLHtORjI98a%2Blp%2FfsULItNxN%2Fx6Heq7wthzzXqLunhxxXzUW2zwk1UWBb6MNLsib8GOqUBjMkFBvIhiRIO3I%2B0SVVRMqqkrCm8K58DWbSEZRjHHYRkLhSCtLreKHRzm4FM1KsCRFsEsPGtZRT3hxSJ3VSGAussBUdM9vjW%2FW9rtHC5kn0x4z%2FkDxGbjLxndOhCG3c79ROr%2BJMFpD1BGM6RSNrGwGLdjXlfCvIov1bdC9EDBTRfxEIB0TC9w8x09Kgqfu2NPzEz%2Bz2qVg9WzLDTMRrH32axLNkz&X-Amz-Signature=d6fde58e9a1c84de95f48a1d258f3d53bec05c168f23b23a18e191f7d419cfb0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
