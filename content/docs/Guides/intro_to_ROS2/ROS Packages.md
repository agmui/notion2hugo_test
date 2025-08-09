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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQ5EAEL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJWSCjE%2FLR36sBgmdd6LZrlD55AYWOtCL6oVXixxzLUAiEA0jwAkQSwsm2%2FYgDTLN9cYHnc4RKCChOMz0dToCYuzCcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNULCUWzV6OvGxFVircAwwUS%2FHOOPrxdhnbdwNc5%2FGVY%2Bk0uvJMoi%2BsMLiZ7pfly%2Bt2Djy0bhoJYFEFh1nRcY1O49nCIYkEKjRE9UFYK%2FrUjsFSD5Lta%2Fsvt5MWJBBZ9Z0nxYW30kAUQKvy25JQD9v1va0KioN41F3gwkBIAbqPB2olokIoIkH3x16QP89CUyMQkJX4NPEq%2FT37LcxEpMbBfK%2B%2FVQqPpg0u8jVbX2U8mV3QdGwALlL7Mcc35Qqfqh%2FK4t5thUIPh%2F7Ns6KxMaQKnCww0Pp5zeYGFWu46TMzGz4wfheHLAr3WZaphlFfP6ZaAl7tREEgj7Y6TE2HtBDuwkAB%2FZKrRMpPhG1dbCjQU1ru%2Fe8Q45Cm8rfSBoV4o6UagrpxCLCyHB6uV3aJYjtXBlHHlk%2Fvl3NsycgkceVPB8AEscJHo9Wum3aKpMvSYWrBSoD9amTUYwskvUbS4tKobcE46mqM8kErmC3KXMfJ9dRZD%2F17dboI9cEBGtiI9LCFQHfvtc0d95R4yFXCli%2B2c0u2%2FgjXILEnEg26Kep6dQWeDMCHcxXe%2B1XGCIQu%2FA0FBV1LBuBPVV7Yvz%2B5QWZHsDyzcyka8k%2FpmCrIMZljYwuyWfjoTR8lupbL77j4FbeWknAWbozPcy4YML%2FE28QGOqUBDl%2FAXBk0Z%2BdQzRK2oi2Rbe7RCK46sE%2B91DttngjYA3DK6zOR052AiNy3AouxZSdSq47ylCmp2m2lsUi0nOyyeFlw%2FsgeHF69uKXEc3UQqAeU6PPRYFylJnNDMmOClD%2B6FQhCc76OAUV1pIAUvAHetdIn24NBzLHqNuiQZ169yVcoIFeG0K%2BRTPW%2FceZtowmawxyof0Q9PvgPOoIwWUmeWJTZQfE7&X-Amz-Signature=d0aa9d25ecd9b4c9828305599a4353c171358c80f7c45d8f9ef265e6fe986348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQ5EAEL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJWSCjE%2FLR36sBgmdd6LZrlD55AYWOtCL6oVXixxzLUAiEA0jwAkQSwsm2%2FYgDTLN9cYHnc4RKCChOMz0dToCYuzCcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNULCUWzV6OvGxFVircAwwUS%2FHOOPrxdhnbdwNc5%2FGVY%2Bk0uvJMoi%2BsMLiZ7pfly%2Bt2Djy0bhoJYFEFh1nRcY1O49nCIYkEKjRE9UFYK%2FrUjsFSD5Lta%2Fsvt5MWJBBZ9Z0nxYW30kAUQKvy25JQD9v1va0KioN41F3gwkBIAbqPB2olokIoIkH3x16QP89CUyMQkJX4NPEq%2FT37LcxEpMbBfK%2B%2FVQqPpg0u8jVbX2U8mV3QdGwALlL7Mcc35Qqfqh%2FK4t5thUIPh%2F7Ns6KxMaQKnCww0Pp5zeYGFWu46TMzGz4wfheHLAr3WZaphlFfP6ZaAl7tREEgj7Y6TE2HtBDuwkAB%2FZKrRMpPhG1dbCjQU1ru%2Fe8Q45Cm8rfSBoV4o6UagrpxCLCyHB6uV3aJYjtXBlHHlk%2Fvl3NsycgkceVPB8AEscJHo9Wum3aKpMvSYWrBSoD9amTUYwskvUbS4tKobcE46mqM8kErmC3KXMfJ9dRZD%2F17dboI9cEBGtiI9LCFQHfvtc0d95R4yFXCli%2B2c0u2%2FgjXILEnEg26Kep6dQWeDMCHcxXe%2B1XGCIQu%2FA0FBV1LBuBPVV7Yvz%2B5QWZHsDyzcyka8k%2FpmCrIMZljYwuyWfjoTR8lupbL77j4FbeWknAWbozPcy4YML%2FE28QGOqUBDl%2FAXBk0Z%2BdQzRK2oi2Rbe7RCK46sE%2B91DttngjYA3DK6zOR052AiNy3AouxZSdSq47ylCmp2m2lsUi0nOyyeFlw%2FsgeHF69uKXEc3UQqAeU6PPRYFylJnNDMmOClD%2B6FQhCc76OAUV1pIAUvAHetdIn24NBzLHqNuiQZ169yVcoIFeG0K%2BRTPW%2FceZtowmawxyof0Q9PvgPOoIwWUmeWJTZQfE7&X-Amz-Signature=01dc74bc0a757352e6625e87796e1bd24a14ec69ea62ca50415d5d94cbdb9ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQ5EAEL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJWSCjE%2FLR36sBgmdd6LZrlD55AYWOtCL6oVXixxzLUAiEA0jwAkQSwsm2%2FYgDTLN9cYHnc4RKCChOMz0dToCYuzCcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNULCUWzV6OvGxFVircAwwUS%2FHOOPrxdhnbdwNc5%2FGVY%2Bk0uvJMoi%2BsMLiZ7pfly%2Bt2Djy0bhoJYFEFh1nRcY1O49nCIYkEKjRE9UFYK%2FrUjsFSD5Lta%2Fsvt5MWJBBZ9Z0nxYW30kAUQKvy25JQD9v1va0KioN41F3gwkBIAbqPB2olokIoIkH3x16QP89CUyMQkJX4NPEq%2FT37LcxEpMbBfK%2B%2FVQqPpg0u8jVbX2U8mV3QdGwALlL7Mcc35Qqfqh%2FK4t5thUIPh%2F7Ns6KxMaQKnCww0Pp5zeYGFWu46TMzGz4wfheHLAr3WZaphlFfP6ZaAl7tREEgj7Y6TE2HtBDuwkAB%2FZKrRMpPhG1dbCjQU1ru%2Fe8Q45Cm8rfSBoV4o6UagrpxCLCyHB6uV3aJYjtXBlHHlk%2Fvl3NsycgkceVPB8AEscJHo9Wum3aKpMvSYWrBSoD9amTUYwskvUbS4tKobcE46mqM8kErmC3KXMfJ9dRZD%2F17dboI9cEBGtiI9LCFQHfvtc0d95R4yFXCli%2B2c0u2%2FgjXILEnEg26Kep6dQWeDMCHcxXe%2B1XGCIQu%2FA0FBV1LBuBPVV7Yvz%2B5QWZHsDyzcyka8k%2FpmCrIMZljYwuyWfjoTR8lupbL77j4FbeWknAWbozPcy4YML%2FE28QGOqUBDl%2FAXBk0Z%2BdQzRK2oi2Rbe7RCK46sE%2B91DttngjYA3DK6zOR052AiNy3AouxZSdSq47ylCmp2m2lsUi0nOyyeFlw%2FsgeHF69uKXEc3UQqAeU6PPRYFylJnNDMmOClD%2B6FQhCc76OAUV1pIAUvAHetdIn24NBzLHqNuiQZ169yVcoIFeG0K%2BRTPW%2FceZtowmawxyof0Q9PvgPOoIwWUmeWJTZQfE7&X-Amz-Signature=0d6d12662949f2ecc60f4045a0168b3dd0c89a02e5102e6bc8f5086277575d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQ5EAEL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJWSCjE%2FLR36sBgmdd6LZrlD55AYWOtCL6oVXixxzLUAiEA0jwAkQSwsm2%2FYgDTLN9cYHnc4RKCChOMz0dToCYuzCcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNULCUWzV6OvGxFVircAwwUS%2FHOOPrxdhnbdwNc5%2FGVY%2Bk0uvJMoi%2BsMLiZ7pfly%2Bt2Djy0bhoJYFEFh1nRcY1O49nCIYkEKjRE9UFYK%2FrUjsFSD5Lta%2Fsvt5MWJBBZ9Z0nxYW30kAUQKvy25JQD9v1va0KioN41F3gwkBIAbqPB2olokIoIkH3x16QP89CUyMQkJX4NPEq%2FT37LcxEpMbBfK%2B%2FVQqPpg0u8jVbX2U8mV3QdGwALlL7Mcc35Qqfqh%2FK4t5thUIPh%2F7Ns6KxMaQKnCww0Pp5zeYGFWu46TMzGz4wfheHLAr3WZaphlFfP6ZaAl7tREEgj7Y6TE2HtBDuwkAB%2FZKrRMpPhG1dbCjQU1ru%2Fe8Q45Cm8rfSBoV4o6UagrpxCLCyHB6uV3aJYjtXBlHHlk%2Fvl3NsycgkceVPB8AEscJHo9Wum3aKpMvSYWrBSoD9amTUYwskvUbS4tKobcE46mqM8kErmC3KXMfJ9dRZD%2F17dboI9cEBGtiI9LCFQHfvtc0d95R4yFXCli%2B2c0u2%2FgjXILEnEg26Kep6dQWeDMCHcxXe%2B1XGCIQu%2FA0FBV1LBuBPVV7Yvz%2B5QWZHsDyzcyka8k%2FpmCrIMZljYwuyWfjoTR8lupbL77j4FbeWknAWbozPcy4YML%2FE28QGOqUBDl%2FAXBk0Z%2BdQzRK2oi2Rbe7RCK46sE%2B91DttngjYA3DK6zOR052AiNy3AouxZSdSq47ylCmp2m2lsUi0nOyyeFlw%2FsgeHF69uKXEc3UQqAeU6PPRYFylJnNDMmOClD%2B6FQhCc76OAUV1pIAUvAHetdIn24NBzLHqNuiQZ169yVcoIFeG0K%2BRTPW%2FceZtowmawxyof0Q9PvgPOoIwWUmeWJTZQfE7&X-Amz-Signature=6578fa5b9036b9685a870b849766f95e1d6c28703f8805ef988fa7328f6cc672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQ5EAEL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJWSCjE%2FLR36sBgmdd6LZrlD55AYWOtCL6oVXixxzLUAiEA0jwAkQSwsm2%2FYgDTLN9cYHnc4RKCChOMz0dToCYuzCcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNULCUWzV6OvGxFVircAwwUS%2FHOOPrxdhnbdwNc5%2FGVY%2Bk0uvJMoi%2BsMLiZ7pfly%2Bt2Djy0bhoJYFEFh1nRcY1O49nCIYkEKjRE9UFYK%2FrUjsFSD5Lta%2Fsvt5MWJBBZ9Z0nxYW30kAUQKvy25JQD9v1va0KioN41F3gwkBIAbqPB2olokIoIkH3x16QP89CUyMQkJX4NPEq%2FT37LcxEpMbBfK%2B%2FVQqPpg0u8jVbX2U8mV3QdGwALlL7Mcc35Qqfqh%2FK4t5thUIPh%2F7Ns6KxMaQKnCww0Pp5zeYGFWu46TMzGz4wfheHLAr3WZaphlFfP6ZaAl7tREEgj7Y6TE2HtBDuwkAB%2FZKrRMpPhG1dbCjQU1ru%2Fe8Q45Cm8rfSBoV4o6UagrpxCLCyHB6uV3aJYjtXBlHHlk%2Fvl3NsycgkceVPB8AEscJHo9Wum3aKpMvSYWrBSoD9amTUYwskvUbS4tKobcE46mqM8kErmC3KXMfJ9dRZD%2F17dboI9cEBGtiI9LCFQHfvtc0d95R4yFXCli%2B2c0u2%2FgjXILEnEg26Kep6dQWeDMCHcxXe%2B1XGCIQu%2FA0FBV1LBuBPVV7Yvz%2B5QWZHsDyzcyka8k%2FpmCrIMZljYwuyWfjoTR8lupbL77j4FbeWknAWbozPcy4YML%2FE28QGOqUBDl%2FAXBk0Z%2BdQzRK2oi2Rbe7RCK46sE%2B91DttngjYA3DK6zOR052AiNy3AouxZSdSq47ylCmp2m2lsUi0nOyyeFlw%2FsgeHF69uKXEc3UQqAeU6PPRYFylJnNDMmOClD%2B6FQhCc76OAUV1pIAUvAHetdIn24NBzLHqNuiQZ169yVcoIFeG0K%2BRTPW%2FceZtowmawxyof0Q9PvgPOoIwWUmeWJTZQfE7&X-Amz-Signature=773ecc915ca0b5ca8a4943eb265b7243d1e3b20b8402d944183e6205462ded4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQ5EAEL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJWSCjE%2FLR36sBgmdd6LZrlD55AYWOtCL6oVXixxzLUAiEA0jwAkQSwsm2%2FYgDTLN9cYHnc4RKCChOMz0dToCYuzCcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNULCUWzV6OvGxFVircAwwUS%2FHOOPrxdhnbdwNc5%2FGVY%2Bk0uvJMoi%2BsMLiZ7pfly%2Bt2Djy0bhoJYFEFh1nRcY1O49nCIYkEKjRE9UFYK%2FrUjsFSD5Lta%2Fsvt5MWJBBZ9Z0nxYW30kAUQKvy25JQD9v1va0KioN41F3gwkBIAbqPB2olokIoIkH3x16QP89CUyMQkJX4NPEq%2FT37LcxEpMbBfK%2B%2FVQqPpg0u8jVbX2U8mV3QdGwALlL7Mcc35Qqfqh%2FK4t5thUIPh%2F7Ns6KxMaQKnCww0Pp5zeYGFWu46TMzGz4wfheHLAr3WZaphlFfP6ZaAl7tREEgj7Y6TE2HtBDuwkAB%2FZKrRMpPhG1dbCjQU1ru%2Fe8Q45Cm8rfSBoV4o6UagrpxCLCyHB6uV3aJYjtXBlHHlk%2Fvl3NsycgkceVPB8AEscJHo9Wum3aKpMvSYWrBSoD9amTUYwskvUbS4tKobcE46mqM8kErmC3KXMfJ9dRZD%2F17dboI9cEBGtiI9LCFQHfvtc0d95R4yFXCli%2B2c0u2%2FgjXILEnEg26Kep6dQWeDMCHcxXe%2B1XGCIQu%2FA0FBV1LBuBPVV7Yvz%2B5QWZHsDyzcyka8k%2FpmCrIMZljYwuyWfjoTR8lupbL77j4FbeWknAWbozPcy4YML%2FE28QGOqUBDl%2FAXBk0Z%2BdQzRK2oi2Rbe7RCK46sE%2B91DttngjYA3DK6zOR052AiNy3AouxZSdSq47ylCmp2m2lsUi0nOyyeFlw%2FsgeHF69uKXEc3UQqAeU6PPRYFylJnNDMmOClD%2B6FQhCc76OAUV1pIAUvAHetdIn24NBzLHqNuiQZ169yVcoIFeG0K%2BRTPW%2FceZtowmawxyof0Q9PvgPOoIwWUmeWJTZQfE7&X-Amz-Signature=7b39099671904baa5aea1317def15b575de392bd9a0c874cfae89982dffa8d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQ5EAEL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHJWSCjE%2FLR36sBgmdd6LZrlD55AYWOtCL6oVXixxzLUAiEA0jwAkQSwsm2%2FYgDTLN9cYHnc4RKCChOMz0dToCYuzCcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNULCUWzV6OvGxFVircAwwUS%2FHOOPrxdhnbdwNc5%2FGVY%2Bk0uvJMoi%2BsMLiZ7pfly%2Bt2Djy0bhoJYFEFh1nRcY1O49nCIYkEKjRE9UFYK%2FrUjsFSD5Lta%2Fsvt5MWJBBZ9Z0nxYW30kAUQKvy25JQD9v1va0KioN41F3gwkBIAbqPB2olokIoIkH3x16QP89CUyMQkJX4NPEq%2FT37LcxEpMbBfK%2B%2FVQqPpg0u8jVbX2U8mV3QdGwALlL7Mcc35Qqfqh%2FK4t5thUIPh%2F7Ns6KxMaQKnCww0Pp5zeYGFWu46TMzGz4wfheHLAr3WZaphlFfP6ZaAl7tREEgj7Y6TE2HtBDuwkAB%2FZKrRMpPhG1dbCjQU1ru%2Fe8Q45Cm8rfSBoV4o6UagrpxCLCyHB6uV3aJYjtXBlHHlk%2Fvl3NsycgkceVPB8AEscJHo9Wum3aKpMvSYWrBSoD9amTUYwskvUbS4tKobcE46mqM8kErmC3KXMfJ9dRZD%2F17dboI9cEBGtiI9LCFQHfvtc0d95R4yFXCli%2B2c0u2%2FgjXILEnEg26Kep6dQWeDMCHcxXe%2B1XGCIQu%2FA0FBV1LBuBPVV7Yvz%2B5QWZHsDyzcyka8k%2FpmCrIMZljYwuyWfjoTR8lupbL77j4FbeWknAWbozPcy4YML%2FE28QGOqUBDl%2FAXBk0Z%2BdQzRK2oi2Rbe7RCK46sE%2B91DttngjYA3DK6zOR052AiNy3AouxZSdSq47ylCmp2m2lsUi0nOyyeFlw%2FsgeHF69uKXEc3UQqAeU6PPRYFylJnNDMmOClD%2B6FQhCc76OAUV1pIAUvAHetdIn24NBzLHqNuiQZ169yVcoIFeG0K%2BRTPW%2FceZtowmawxyof0Q9PvgPOoIwWUmeWJTZQfE7&X-Amz-Signature=ee00979b28e0b659a4da11bd24bdb189ecd67cdf996dd8eb78cdcc0fd88ecd5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
