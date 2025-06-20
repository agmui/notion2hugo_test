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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FY7YC3F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD9f4a5WXEmiqsllIACipJUM2XPER4rgDjMANm60YcDAIgHHKW02jvAH4kQq7CJIzYAb7rLl%2BuKc%2F9CGOxIGkP7IoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1%2Fv8mBDJVBwIB6KCrcAzQ9WaZolMEWVugGCfANLBHoQswUG8NumawsfKEU9z0%2Boli2n0ztkg8nBkykfeHnr8dOXkO9VrcOSgGY2GwTeaTanB3iFyI9KCfA4nteKvhVy7RhHLloVMlbR2jTlxNX94irZ6y%2BwU8flfhU8nnlvspTbo09TJYLsPLwDBK%2FYpyrHsc2f4SfHycQCR%2BTH02VVsWSwI7ojhXnxem1D2dmn%2BcpIkAX07UU4jY6nULrW%2FP556NAwZaM0AENl4DbJai6Ial%2B%2BI%2BedLSlRlBitfUQGG3nsYgVaMnSy8mHBZA3GkyyhWu50MSUPdbRnRmCK%2BALCIMdV11Vns4aOdAbMb4%2B4XFRE21KYIgelPMugJVrqB6xLu34UEmXqXi%2BhZwia7XYEy13WaFCLiGPd%2Fhn3LKCuPxdH0PGT7uA%2FK2p0h4y9rxP%2BdmyfRBMAG%2FapmsDS%2BBVXPpb%2FX4F%2FTDjNB4RMpsjlWq8NP69PlMcJM0XKxlhWsa42e3ZmHg6nUfPZWSva7rPjq1H%2FPl0mVDA6co1QcsVPRCSabKFnBki6Mn%2BG9HXgW%2FiQI0xVxN%2Fy1rLj1NVFQ6pr0rdv3BBGLseto2AKBkp0%2FBGrepl5ISP6Q3nhp8MenQndu8Qxi08dJqGCWOwMOy808IGOqUBNgwOrPtvxOOkNCUblt2iam5gYUeDCMOK3QN69QrysKtc269qx2L44f9TL%2FS4D57EDwab%2FSW0Dfn0mQdgAP9Jli%2FCnGST9Wv0nGam1Bn52nNswq3LmzmKf4Ioh4zWHR1fx32JwjIdvfZ2lAqaFPz8Fk8y6FIMEJoWspqsAj576J6k9M4hCjAeiMwEvpk%2FdrL7B2k1SMvmBE4cz17Ri3UEb5VHVNaz&X-Amz-Signature=4daebbd7f26404ee9395f8658f895e46490f6cbfe10c457152d64aee7c36d418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FY7YC3F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD9f4a5WXEmiqsllIACipJUM2XPER4rgDjMANm60YcDAIgHHKW02jvAH4kQq7CJIzYAb7rLl%2BuKc%2F9CGOxIGkP7IoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1%2Fv8mBDJVBwIB6KCrcAzQ9WaZolMEWVugGCfANLBHoQswUG8NumawsfKEU9z0%2Boli2n0ztkg8nBkykfeHnr8dOXkO9VrcOSgGY2GwTeaTanB3iFyI9KCfA4nteKvhVy7RhHLloVMlbR2jTlxNX94irZ6y%2BwU8flfhU8nnlvspTbo09TJYLsPLwDBK%2FYpyrHsc2f4SfHycQCR%2BTH02VVsWSwI7ojhXnxem1D2dmn%2BcpIkAX07UU4jY6nULrW%2FP556NAwZaM0AENl4DbJai6Ial%2B%2BI%2BedLSlRlBitfUQGG3nsYgVaMnSy8mHBZA3GkyyhWu50MSUPdbRnRmCK%2BALCIMdV11Vns4aOdAbMb4%2B4XFRE21KYIgelPMugJVrqB6xLu34UEmXqXi%2BhZwia7XYEy13WaFCLiGPd%2Fhn3LKCuPxdH0PGT7uA%2FK2p0h4y9rxP%2BdmyfRBMAG%2FapmsDS%2BBVXPpb%2FX4F%2FTDjNB4RMpsjlWq8NP69PlMcJM0XKxlhWsa42e3ZmHg6nUfPZWSva7rPjq1H%2FPl0mVDA6co1QcsVPRCSabKFnBki6Mn%2BG9HXgW%2FiQI0xVxN%2Fy1rLj1NVFQ6pr0rdv3BBGLseto2AKBkp0%2FBGrepl5ISP6Q3nhp8MenQndu8Qxi08dJqGCWOwMOy808IGOqUBNgwOrPtvxOOkNCUblt2iam5gYUeDCMOK3QN69QrysKtc269qx2L44f9TL%2FS4D57EDwab%2FSW0Dfn0mQdgAP9Jli%2FCnGST9Wv0nGam1Bn52nNswq3LmzmKf4Ioh4zWHR1fx32JwjIdvfZ2lAqaFPz8Fk8y6FIMEJoWspqsAj576J6k9M4hCjAeiMwEvpk%2FdrL7B2k1SMvmBE4cz17Ri3UEb5VHVNaz&X-Amz-Signature=a98b790aaf53a0f433ca3eea427ed48911674c8ac5eb13aaeb3d2e2afe317a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FY7YC3F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD9f4a5WXEmiqsllIACipJUM2XPER4rgDjMANm60YcDAIgHHKW02jvAH4kQq7CJIzYAb7rLl%2BuKc%2F9CGOxIGkP7IoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1%2Fv8mBDJVBwIB6KCrcAzQ9WaZolMEWVugGCfANLBHoQswUG8NumawsfKEU9z0%2Boli2n0ztkg8nBkykfeHnr8dOXkO9VrcOSgGY2GwTeaTanB3iFyI9KCfA4nteKvhVy7RhHLloVMlbR2jTlxNX94irZ6y%2BwU8flfhU8nnlvspTbo09TJYLsPLwDBK%2FYpyrHsc2f4SfHycQCR%2BTH02VVsWSwI7ojhXnxem1D2dmn%2BcpIkAX07UU4jY6nULrW%2FP556NAwZaM0AENl4DbJai6Ial%2B%2BI%2BedLSlRlBitfUQGG3nsYgVaMnSy8mHBZA3GkyyhWu50MSUPdbRnRmCK%2BALCIMdV11Vns4aOdAbMb4%2B4XFRE21KYIgelPMugJVrqB6xLu34UEmXqXi%2BhZwia7XYEy13WaFCLiGPd%2Fhn3LKCuPxdH0PGT7uA%2FK2p0h4y9rxP%2BdmyfRBMAG%2FapmsDS%2BBVXPpb%2FX4F%2FTDjNB4RMpsjlWq8NP69PlMcJM0XKxlhWsa42e3ZmHg6nUfPZWSva7rPjq1H%2FPl0mVDA6co1QcsVPRCSabKFnBki6Mn%2BG9HXgW%2FiQI0xVxN%2Fy1rLj1NVFQ6pr0rdv3BBGLseto2AKBkp0%2FBGrepl5ISP6Q3nhp8MenQndu8Qxi08dJqGCWOwMOy808IGOqUBNgwOrPtvxOOkNCUblt2iam5gYUeDCMOK3QN69QrysKtc269qx2L44f9TL%2FS4D57EDwab%2FSW0Dfn0mQdgAP9Jli%2FCnGST9Wv0nGam1Bn52nNswq3LmzmKf4Ioh4zWHR1fx32JwjIdvfZ2lAqaFPz8Fk8y6FIMEJoWspqsAj576J6k9M4hCjAeiMwEvpk%2FdrL7B2k1SMvmBE4cz17Ri3UEb5VHVNaz&X-Amz-Signature=82f8898649d827f8ed88e7a0d00049677f1581312e037e26a8e724b5d7193a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FY7YC3F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD9f4a5WXEmiqsllIACipJUM2XPER4rgDjMANm60YcDAIgHHKW02jvAH4kQq7CJIzYAb7rLl%2BuKc%2F9CGOxIGkP7IoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1%2Fv8mBDJVBwIB6KCrcAzQ9WaZolMEWVugGCfANLBHoQswUG8NumawsfKEU9z0%2Boli2n0ztkg8nBkykfeHnr8dOXkO9VrcOSgGY2GwTeaTanB3iFyI9KCfA4nteKvhVy7RhHLloVMlbR2jTlxNX94irZ6y%2BwU8flfhU8nnlvspTbo09TJYLsPLwDBK%2FYpyrHsc2f4SfHycQCR%2BTH02VVsWSwI7ojhXnxem1D2dmn%2BcpIkAX07UU4jY6nULrW%2FP556NAwZaM0AENl4DbJai6Ial%2B%2BI%2BedLSlRlBitfUQGG3nsYgVaMnSy8mHBZA3GkyyhWu50MSUPdbRnRmCK%2BALCIMdV11Vns4aOdAbMb4%2B4XFRE21KYIgelPMugJVrqB6xLu34UEmXqXi%2BhZwia7XYEy13WaFCLiGPd%2Fhn3LKCuPxdH0PGT7uA%2FK2p0h4y9rxP%2BdmyfRBMAG%2FapmsDS%2BBVXPpb%2FX4F%2FTDjNB4RMpsjlWq8NP69PlMcJM0XKxlhWsa42e3ZmHg6nUfPZWSva7rPjq1H%2FPl0mVDA6co1QcsVPRCSabKFnBki6Mn%2BG9HXgW%2FiQI0xVxN%2Fy1rLj1NVFQ6pr0rdv3BBGLseto2AKBkp0%2FBGrepl5ISP6Q3nhp8MenQndu8Qxi08dJqGCWOwMOy808IGOqUBNgwOrPtvxOOkNCUblt2iam5gYUeDCMOK3QN69QrysKtc269qx2L44f9TL%2FS4D57EDwab%2FSW0Dfn0mQdgAP9Jli%2FCnGST9Wv0nGam1Bn52nNswq3LmzmKf4Ioh4zWHR1fx32JwjIdvfZ2lAqaFPz8Fk8y6FIMEJoWspqsAj576J6k9M4hCjAeiMwEvpk%2FdrL7B2k1SMvmBE4cz17Ri3UEb5VHVNaz&X-Amz-Signature=cb07dabbf3d6e73f128c734d53019a241650d8f30253baaca92620336e9f9000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FY7YC3F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD9f4a5WXEmiqsllIACipJUM2XPER4rgDjMANm60YcDAIgHHKW02jvAH4kQq7CJIzYAb7rLl%2BuKc%2F9CGOxIGkP7IoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1%2Fv8mBDJVBwIB6KCrcAzQ9WaZolMEWVugGCfANLBHoQswUG8NumawsfKEU9z0%2Boli2n0ztkg8nBkykfeHnr8dOXkO9VrcOSgGY2GwTeaTanB3iFyI9KCfA4nteKvhVy7RhHLloVMlbR2jTlxNX94irZ6y%2BwU8flfhU8nnlvspTbo09TJYLsPLwDBK%2FYpyrHsc2f4SfHycQCR%2BTH02VVsWSwI7ojhXnxem1D2dmn%2BcpIkAX07UU4jY6nULrW%2FP556NAwZaM0AENl4DbJai6Ial%2B%2BI%2BedLSlRlBitfUQGG3nsYgVaMnSy8mHBZA3GkyyhWu50MSUPdbRnRmCK%2BALCIMdV11Vns4aOdAbMb4%2B4XFRE21KYIgelPMugJVrqB6xLu34UEmXqXi%2BhZwia7XYEy13WaFCLiGPd%2Fhn3LKCuPxdH0PGT7uA%2FK2p0h4y9rxP%2BdmyfRBMAG%2FapmsDS%2BBVXPpb%2FX4F%2FTDjNB4RMpsjlWq8NP69PlMcJM0XKxlhWsa42e3ZmHg6nUfPZWSva7rPjq1H%2FPl0mVDA6co1QcsVPRCSabKFnBki6Mn%2BG9HXgW%2FiQI0xVxN%2Fy1rLj1NVFQ6pr0rdv3BBGLseto2AKBkp0%2FBGrepl5ISP6Q3nhp8MenQndu8Qxi08dJqGCWOwMOy808IGOqUBNgwOrPtvxOOkNCUblt2iam5gYUeDCMOK3QN69QrysKtc269qx2L44f9TL%2FS4D57EDwab%2FSW0Dfn0mQdgAP9Jli%2FCnGST9Wv0nGam1Bn52nNswq3LmzmKf4Ioh4zWHR1fx32JwjIdvfZ2lAqaFPz8Fk8y6FIMEJoWspqsAj576J6k9M4hCjAeiMwEvpk%2FdrL7B2k1SMvmBE4cz17Ri3UEb5VHVNaz&X-Amz-Signature=f51fef4e5662caa5a31ccc873370ecd0620281a3abac41f23e96cbbc187ea71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FY7YC3F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD9f4a5WXEmiqsllIACipJUM2XPER4rgDjMANm60YcDAIgHHKW02jvAH4kQq7CJIzYAb7rLl%2BuKc%2F9CGOxIGkP7IoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1%2Fv8mBDJVBwIB6KCrcAzQ9WaZolMEWVugGCfANLBHoQswUG8NumawsfKEU9z0%2Boli2n0ztkg8nBkykfeHnr8dOXkO9VrcOSgGY2GwTeaTanB3iFyI9KCfA4nteKvhVy7RhHLloVMlbR2jTlxNX94irZ6y%2BwU8flfhU8nnlvspTbo09TJYLsPLwDBK%2FYpyrHsc2f4SfHycQCR%2BTH02VVsWSwI7ojhXnxem1D2dmn%2BcpIkAX07UU4jY6nULrW%2FP556NAwZaM0AENl4DbJai6Ial%2B%2BI%2BedLSlRlBitfUQGG3nsYgVaMnSy8mHBZA3GkyyhWu50MSUPdbRnRmCK%2BALCIMdV11Vns4aOdAbMb4%2B4XFRE21KYIgelPMugJVrqB6xLu34UEmXqXi%2BhZwia7XYEy13WaFCLiGPd%2Fhn3LKCuPxdH0PGT7uA%2FK2p0h4y9rxP%2BdmyfRBMAG%2FapmsDS%2BBVXPpb%2FX4F%2FTDjNB4RMpsjlWq8NP69PlMcJM0XKxlhWsa42e3ZmHg6nUfPZWSva7rPjq1H%2FPl0mVDA6co1QcsVPRCSabKFnBki6Mn%2BG9HXgW%2FiQI0xVxN%2Fy1rLj1NVFQ6pr0rdv3BBGLseto2AKBkp0%2FBGrepl5ISP6Q3nhp8MenQndu8Qxi08dJqGCWOwMOy808IGOqUBNgwOrPtvxOOkNCUblt2iam5gYUeDCMOK3QN69QrysKtc269qx2L44f9TL%2FS4D57EDwab%2FSW0Dfn0mQdgAP9Jli%2FCnGST9Wv0nGam1Bn52nNswq3LmzmKf4Ioh4zWHR1fx32JwjIdvfZ2lAqaFPz8Fk8y6FIMEJoWspqsAj576J6k9M4hCjAeiMwEvpk%2FdrL7B2k1SMvmBE4cz17Ri3UEb5VHVNaz&X-Amz-Signature=5529ef737fd0566c4154ad9a56c907daac40b6d0366a45bf7415e3bb02e8a5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FY7YC3F%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD9f4a5WXEmiqsllIACipJUM2XPER4rgDjMANm60YcDAIgHHKW02jvAH4kQq7CJIzYAb7rLl%2BuKc%2F9CGOxIGkP7IoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1%2Fv8mBDJVBwIB6KCrcAzQ9WaZolMEWVugGCfANLBHoQswUG8NumawsfKEU9z0%2Boli2n0ztkg8nBkykfeHnr8dOXkO9VrcOSgGY2GwTeaTanB3iFyI9KCfA4nteKvhVy7RhHLloVMlbR2jTlxNX94irZ6y%2BwU8flfhU8nnlvspTbo09TJYLsPLwDBK%2FYpyrHsc2f4SfHycQCR%2BTH02VVsWSwI7ojhXnxem1D2dmn%2BcpIkAX07UU4jY6nULrW%2FP556NAwZaM0AENl4DbJai6Ial%2B%2BI%2BedLSlRlBitfUQGG3nsYgVaMnSy8mHBZA3GkyyhWu50MSUPdbRnRmCK%2BALCIMdV11Vns4aOdAbMb4%2B4XFRE21KYIgelPMugJVrqB6xLu34UEmXqXi%2BhZwia7XYEy13WaFCLiGPd%2Fhn3LKCuPxdH0PGT7uA%2FK2p0h4y9rxP%2BdmyfRBMAG%2FapmsDS%2BBVXPpb%2FX4F%2FTDjNB4RMpsjlWq8NP69PlMcJM0XKxlhWsa42e3ZmHg6nUfPZWSva7rPjq1H%2FPl0mVDA6co1QcsVPRCSabKFnBki6Mn%2BG9HXgW%2FiQI0xVxN%2Fy1rLj1NVFQ6pr0rdv3BBGLseto2AKBkp0%2FBGrepl5ISP6Q3nhp8MenQndu8Qxi08dJqGCWOwMOy808IGOqUBNgwOrPtvxOOkNCUblt2iam5gYUeDCMOK3QN69QrysKtc269qx2L44f9TL%2FS4D57EDwab%2FSW0Dfn0mQdgAP9Jli%2FCnGST9Wv0nGam1Bn52nNswq3LmzmKf4Ioh4zWHR1fx32JwjIdvfZ2lAqaFPz8Fk8y6FIMEJoWspqsAj576J6k9M4hCjAeiMwEvpk%2FdrL7B2k1SMvmBE4cz17Ri3UEb5VHVNaz&X-Amz-Signature=3474172812bab0345fe78e56677313af86f4a881b90b9965098d519a28189aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
