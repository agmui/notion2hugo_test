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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6LXFL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUu23aKyZn%2BnHbHKSw17W4n6KlvdTkHcchjCgsF%2BOLaQIgJB00e1jrvjOGqrQPNB99OSz3Ux2NmhQSxUm1DvS4AbMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUAcgaX60%2Fi%2FABHPyrcA%2BtDOqGaTfJtD84vnn2INxIP9QJvZMY2Y0uDuo6K8%2BeGd9iBBtHVByN8l6uG54lKSsh9lOtVuzG%2BzmxCugqxh2kPN5kst8zkH2I8q2hopfjq9MxGbSF6vKpCPoyHe7CW6twd670kpnkSatLuNA5MdzZBFCxvjSazCTqDcXtBbrgNB4oaHJ5useJXnd9ZVYrc6HNOfn77uHQcoLHDtcKc8SlYQADDuSxxXVAnblT1g4COdlawZnbYcd9wxtfEIZ%2Bx%2F5r1RNpTql%2B%2BAGxBRnDSU5trZ%2BboBtxSOtWsRZU9MJCYbNnHAsWFgQmkQVCKyHXqbNO9GvmlQ5MCvLRCTIeXDSqTopapciCgTHMakZiv4jfPxrd7jL5k%2FpHufbkTMhL6KQhFuwIWi4U9mbpMUCYawFEBek9S3CKWyFrs5iAZG%2BX2WEUcTiay1AU%2BUDmfUOaOMcwtk9M8i6BSwdRobnGxNHV0AEZ6UQDwM2zHdRudDSo3hE1MaNbxslTDzuJ%2BQqNw2%2FvoZjH4OVt4Ha82fn575sNmpUvQStOekWmc6U%2BZc51dLyhSIO396fHc8fziOeW%2BqMBbUninskPJ3K2yXq0ZfmVHbfpiQWDtBn2Mlol3CXSQIkyIay7v%2BTYdNTCDMMu41cIGOqUBg%2F3HyYecwX8WJgiqs9W857uCK3PAkoWKZLp1aN4hmxD75p95ZtSly5%2BicJkYGMpyO%2F%2FQalNSLptBcG0dDmcaWX3uSI0gc1Oj0%2BpA8IDPqAHdkoVZdyr285qBbqdoPC6bNM2lHbfuswWAy%2FzY1qDdP5QRHR8%2But6esgGfvHmULcEwaG4T7GJi85ILy9TeLks7Jx%2F7HsJIrmewAjl7cVQhnWz%2B888E&X-Amz-Signature=a645cccf6182946c2fdf0ab33996216f67db71fd0babcb5c0d0a5da619f082e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6LXFL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUu23aKyZn%2BnHbHKSw17W4n6KlvdTkHcchjCgsF%2BOLaQIgJB00e1jrvjOGqrQPNB99OSz3Ux2NmhQSxUm1DvS4AbMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUAcgaX60%2Fi%2FABHPyrcA%2BtDOqGaTfJtD84vnn2INxIP9QJvZMY2Y0uDuo6K8%2BeGd9iBBtHVByN8l6uG54lKSsh9lOtVuzG%2BzmxCugqxh2kPN5kst8zkH2I8q2hopfjq9MxGbSF6vKpCPoyHe7CW6twd670kpnkSatLuNA5MdzZBFCxvjSazCTqDcXtBbrgNB4oaHJ5useJXnd9ZVYrc6HNOfn77uHQcoLHDtcKc8SlYQADDuSxxXVAnblT1g4COdlawZnbYcd9wxtfEIZ%2Bx%2F5r1RNpTql%2B%2BAGxBRnDSU5trZ%2BboBtxSOtWsRZU9MJCYbNnHAsWFgQmkQVCKyHXqbNO9GvmlQ5MCvLRCTIeXDSqTopapciCgTHMakZiv4jfPxrd7jL5k%2FpHufbkTMhL6KQhFuwIWi4U9mbpMUCYawFEBek9S3CKWyFrs5iAZG%2BX2WEUcTiay1AU%2BUDmfUOaOMcwtk9M8i6BSwdRobnGxNHV0AEZ6UQDwM2zHdRudDSo3hE1MaNbxslTDzuJ%2BQqNw2%2FvoZjH4OVt4Ha82fn575sNmpUvQStOekWmc6U%2BZc51dLyhSIO396fHc8fziOeW%2BqMBbUninskPJ3K2yXq0ZfmVHbfpiQWDtBn2Mlol3CXSQIkyIay7v%2BTYdNTCDMMu41cIGOqUBg%2F3HyYecwX8WJgiqs9W857uCK3PAkoWKZLp1aN4hmxD75p95ZtSly5%2BicJkYGMpyO%2F%2FQalNSLptBcG0dDmcaWX3uSI0gc1Oj0%2BpA8IDPqAHdkoVZdyr285qBbqdoPC6bNM2lHbfuswWAy%2FzY1qDdP5QRHR8%2But6esgGfvHmULcEwaG4T7GJi85ILy9TeLks7Jx%2F7HsJIrmewAjl7cVQhnWz%2B888E&X-Amz-Signature=4728b23c91de7225efd195bb1da348ecb75777a2302bd50ef2cffcd918923c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6LXFL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUu23aKyZn%2BnHbHKSw17W4n6KlvdTkHcchjCgsF%2BOLaQIgJB00e1jrvjOGqrQPNB99OSz3Ux2NmhQSxUm1DvS4AbMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUAcgaX60%2Fi%2FABHPyrcA%2BtDOqGaTfJtD84vnn2INxIP9QJvZMY2Y0uDuo6K8%2BeGd9iBBtHVByN8l6uG54lKSsh9lOtVuzG%2BzmxCugqxh2kPN5kst8zkH2I8q2hopfjq9MxGbSF6vKpCPoyHe7CW6twd670kpnkSatLuNA5MdzZBFCxvjSazCTqDcXtBbrgNB4oaHJ5useJXnd9ZVYrc6HNOfn77uHQcoLHDtcKc8SlYQADDuSxxXVAnblT1g4COdlawZnbYcd9wxtfEIZ%2Bx%2F5r1RNpTql%2B%2BAGxBRnDSU5trZ%2BboBtxSOtWsRZU9MJCYbNnHAsWFgQmkQVCKyHXqbNO9GvmlQ5MCvLRCTIeXDSqTopapciCgTHMakZiv4jfPxrd7jL5k%2FpHufbkTMhL6KQhFuwIWi4U9mbpMUCYawFEBek9S3CKWyFrs5iAZG%2BX2WEUcTiay1AU%2BUDmfUOaOMcwtk9M8i6BSwdRobnGxNHV0AEZ6UQDwM2zHdRudDSo3hE1MaNbxslTDzuJ%2BQqNw2%2FvoZjH4OVt4Ha82fn575sNmpUvQStOekWmc6U%2BZc51dLyhSIO396fHc8fziOeW%2BqMBbUninskPJ3K2yXq0ZfmVHbfpiQWDtBn2Mlol3CXSQIkyIay7v%2BTYdNTCDMMu41cIGOqUBg%2F3HyYecwX8WJgiqs9W857uCK3PAkoWKZLp1aN4hmxD75p95ZtSly5%2BicJkYGMpyO%2F%2FQalNSLptBcG0dDmcaWX3uSI0gc1Oj0%2BpA8IDPqAHdkoVZdyr285qBbqdoPC6bNM2lHbfuswWAy%2FzY1qDdP5QRHR8%2But6esgGfvHmULcEwaG4T7GJi85ILy9TeLks7Jx%2F7HsJIrmewAjl7cVQhnWz%2B888E&X-Amz-Signature=07f14d741c5be020edb79a3c665f3316e7a3e6eba34a17e008ceee9867246690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6LXFL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUu23aKyZn%2BnHbHKSw17W4n6KlvdTkHcchjCgsF%2BOLaQIgJB00e1jrvjOGqrQPNB99OSz3Ux2NmhQSxUm1DvS4AbMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUAcgaX60%2Fi%2FABHPyrcA%2BtDOqGaTfJtD84vnn2INxIP9QJvZMY2Y0uDuo6K8%2BeGd9iBBtHVByN8l6uG54lKSsh9lOtVuzG%2BzmxCugqxh2kPN5kst8zkH2I8q2hopfjq9MxGbSF6vKpCPoyHe7CW6twd670kpnkSatLuNA5MdzZBFCxvjSazCTqDcXtBbrgNB4oaHJ5useJXnd9ZVYrc6HNOfn77uHQcoLHDtcKc8SlYQADDuSxxXVAnblT1g4COdlawZnbYcd9wxtfEIZ%2Bx%2F5r1RNpTql%2B%2BAGxBRnDSU5trZ%2BboBtxSOtWsRZU9MJCYbNnHAsWFgQmkQVCKyHXqbNO9GvmlQ5MCvLRCTIeXDSqTopapciCgTHMakZiv4jfPxrd7jL5k%2FpHufbkTMhL6KQhFuwIWi4U9mbpMUCYawFEBek9S3CKWyFrs5iAZG%2BX2WEUcTiay1AU%2BUDmfUOaOMcwtk9M8i6BSwdRobnGxNHV0AEZ6UQDwM2zHdRudDSo3hE1MaNbxslTDzuJ%2BQqNw2%2FvoZjH4OVt4Ha82fn575sNmpUvQStOekWmc6U%2BZc51dLyhSIO396fHc8fziOeW%2BqMBbUninskPJ3K2yXq0ZfmVHbfpiQWDtBn2Mlol3CXSQIkyIay7v%2BTYdNTCDMMu41cIGOqUBg%2F3HyYecwX8WJgiqs9W857uCK3PAkoWKZLp1aN4hmxD75p95ZtSly5%2BicJkYGMpyO%2F%2FQalNSLptBcG0dDmcaWX3uSI0gc1Oj0%2BpA8IDPqAHdkoVZdyr285qBbqdoPC6bNM2lHbfuswWAy%2FzY1qDdP5QRHR8%2But6esgGfvHmULcEwaG4T7GJi85ILy9TeLks7Jx%2F7HsJIrmewAjl7cVQhnWz%2B888E&X-Amz-Signature=6a47f320f9cbeb2306de816e5c66c92b36c2c45705df75a795c93d7738c11659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6LXFL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUu23aKyZn%2BnHbHKSw17W4n6KlvdTkHcchjCgsF%2BOLaQIgJB00e1jrvjOGqrQPNB99OSz3Ux2NmhQSxUm1DvS4AbMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUAcgaX60%2Fi%2FABHPyrcA%2BtDOqGaTfJtD84vnn2INxIP9QJvZMY2Y0uDuo6K8%2BeGd9iBBtHVByN8l6uG54lKSsh9lOtVuzG%2BzmxCugqxh2kPN5kst8zkH2I8q2hopfjq9MxGbSF6vKpCPoyHe7CW6twd670kpnkSatLuNA5MdzZBFCxvjSazCTqDcXtBbrgNB4oaHJ5useJXnd9ZVYrc6HNOfn77uHQcoLHDtcKc8SlYQADDuSxxXVAnblT1g4COdlawZnbYcd9wxtfEIZ%2Bx%2F5r1RNpTql%2B%2BAGxBRnDSU5trZ%2BboBtxSOtWsRZU9MJCYbNnHAsWFgQmkQVCKyHXqbNO9GvmlQ5MCvLRCTIeXDSqTopapciCgTHMakZiv4jfPxrd7jL5k%2FpHufbkTMhL6KQhFuwIWi4U9mbpMUCYawFEBek9S3CKWyFrs5iAZG%2BX2WEUcTiay1AU%2BUDmfUOaOMcwtk9M8i6BSwdRobnGxNHV0AEZ6UQDwM2zHdRudDSo3hE1MaNbxslTDzuJ%2BQqNw2%2FvoZjH4OVt4Ha82fn575sNmpUvQStOekWmc6U%2BZc51dLyhSIO396fHc8fziOeW%2BqMBbUninskPJ3K2yXq0ZfmVHbfpiQWDtBn2Mlol3CXSQIkyIay7v%2BTYdNTCDMMu41cIGOqUBg%2F3HyYecwX8WJgiqs9W857uCK3PAkoWKZLp1aN4hmxD75p95ZtSly5%2BicJkYGMpyO%2F%2FQalNSLptBcG0dDmcaWX3uSI0gc1Oj0%2BpA8IDPqAHdkoVZdyr285qBbqdoPC6bNM2lHbfuswWAy%2FzY1qDdP5QRHR8%2But6esgGfvHmULcEwaG4T7GJi85ILy9TeLks7Jx%2F7HsJIrmewAjl7cVQhnWz%2B888E&X-Amz-Signature=9929aee2d9b1de761437de443b8572221fd21b2c65c53696b70c1d1e2a3095f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6LXFL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUu23aKyZn%2BnHbHKSw17W4n6KlvdTkHcchjCgsF%2BOLaQIgJB00e1jrvjOGqrQPNB99OSz3Ux2NmhQSxUm1DvS4AbMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUAcgaX60%2Fi%2FABHPyrcA%2BtDOqGaTfJtD84vnn2INxIP9QJvZMY2Y0uDuo6K8%2BeGd9iBBtHVByN8l6uG54lKSsh9lOtVuzG%2BzmxCugqxh2kPN5kst8zkH2I8q2hopfjq9MxGbSF6vKpCPoyHe7CW6twd670kpnkSatLuNA5MdzZBFCxvjSazCTqDcXtBbrgNB4oaHJ5useJXnd9ZVYrc6HNOfn77uHQcoLHDtcKc8SlYQADDuSxxXVAnblT1g4COdlawZnbYcd9wxtfEIZ%2Bx%2F5r1RNpTql%2B%2BAGxBRnDSU5trZ%2BboBtxSOtWsRZU9MJCYbNnHAsWFgQmkQVCKyHXqbNO9GvmlQ5MCvLRCTIeXDSqTopapciCgTHMakZiv4jfPxrd7jL5k%2FpHufbkTMhL6KQhFuwIWi4U9mbpMUCYawFEBek9S3CKWyFrs5iAZG%2BX2WEUcTiay1AU%2BUDmfUOaOMcwtk9M8i6BSwdRobnGxNHV0AEZ6UQDwM2zHdRudDSo3hE1MaNbxslTDzuJ%2BQqNw2%2FvoZjH4OVt4Ha82fn575sNmpUvQStOekWmc6U%2BZc51dLyhSIO396fHc8fziOeW%2BqMBbUninskPJ3K2yXq0ZfmVHbfpiQWDtBn2Mlol3CXSQIkyIay7v%2BTYdNTCDMMu41cIGOqUBg%2F3HyYecwX8WJgiqs9W857uCK3PAkoWKZLp1aN4hmxD75p95ZtSly5%2BicJkYGMpyO%2F%2FQalNSLptBcG0dDmcaWX3uSI0gc1Oj0%2BpA8IDPqAHdkoVZdyr285qBbqdoPC6bNM2lHbfuswWAy%2FzY1qDdP5QRHR8%2But6esgGfvHmULcEwaG4T7GJi85ILy9TeLks7Jx%2F7HsJIrmewAjl7cVQhnWz%2B888E&X-Amz-Signature=5eedd6e090625ba3e90595ad614ad530e68cafd5fa227014f35d8a02ed565ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623E6LXFL%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUu23aKyZn%2BnHbHKSw17W4n6KlvdTkHcchjCgsF%2BOLaQIgJB00e1jrvjOGqrQPNB99OSz3Ux2NmhQSxUm1DvS4AbMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUAcgaX60%2Fi%2FABHPyrcA%2BtDOqGaTfJtD84vnn2INxIP9QJvZMY2Y0uDuo6K8%2BeGd9iBBtHVByN8l6uG54lKSsh9lOtVuzG%2BzmxCugqxh2kPN5kst8zkH2I8q2hopfjq9MxGbSF6vKpCPoyHe7CW6twd670kpnkSatLuNA5MdzZBFCxvjSazCTqDcXtBbrgNB4oaHJ5useJXnd9ZVYrc6HNOfn77uHQcoLHDtcKc8SlYQADDuSxxXVAnblT1g4COdlawZnbYcd9wxtfEIZ%2Bx%2F5r1RNpTql%2B%2BAGxBRnDSU5trZ%2BboBtxSOtWsRZU9MJCYbNnHAsWFgQmkQVCKyHXqbNO9GvmlQ5MCvLRCTIeXDSqTopapciCgTHMakZiv4jfPxrd7jL5k%2FpHufbkTMhL6KQhFuwIWi4U9mbpMUCYawFEBek9S3CKWyFrs5iAZG%2BX2WEUcTiay1AU%2BUDmfUOaOMcwtk9M8i6BSwdRobnGxNHV0AEZ6UQDwM2zHdRudDSo3hE1MaNbxslTDzuJ%2BQqNw2%2FvoZjH4OVt4Ha82fn575sNmpUvQStOekWmc6U%2BZc51dLyhSIO396fHc8fziOeW%2BqMBbUninskPJ3K2yXq0ZfmVHbfpiQWDtBn2Mlol3CXSQIkyIay7v%2BTYdNTCDMMu41cIGOqUBg%2F3HyYecwX8WJgiqs9W857uCK3PAkoWKZLp1aN4hmxD75p95ZtSly5%2BicJkYGMpyO%2F%2FQalNSLptBcG0dDmcaWX3uSI0gc1Oj0%2BpA8IDPqAHdkoVZdyr285qBbqdoPC6bNM2lHbfuswWAy%2FzY1qDdP5QRHR8%2But6esgGfvHmULcEwaG4T7GJi85ILy9TeLks7Jx%2F7HsJIrmewAjl7cVQhnWz%2B888E&X-Amz-Signature=d6350fbcda4296abf092fb40053a354b3040cd2e2bd5e32177b80d438efce2b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
