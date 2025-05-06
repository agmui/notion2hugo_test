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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU5ENL6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYbAjJFgGKnwuVr7XqW2ofn5O9qrHdRWp9VfksU%2FcwAIgCHxSoZ3d%2FhHhSfdz%2BoNBDQTMLvCHaPzfZzQUd8L%2Bz3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFge0JZSluiWONkXcircA%2BrSeUb2Fcr2UlLbK62UoIJREtNEaG%2FBJ0WSQT2lE5gkgABQxJ8epzPlycpk67DvUHuhjAG7gPcBdrK1D5IYqZnJOOYwgjrGAUM2mx1JGkCuLTDILQ9iDhXlAD%2FAh1vYvzGgvjm3kRqH7RkbaMkiBnhl6SsQpKjHtQZhyskLKzMs43U01%2BF1ak1iFqVFONFIlxpldRjErFehbQoJgHzE8OGyUZ6tuZxRzWb6aekBZpYjYGXENqwwL%2FUl29K7PpbXRx5dpi%2BG%2F%2Br9%2BrGgBk%2Fz%2FS8z8JRFRyl9VYqFyYdugYCMOyAUQSbkj8Q3dVyTKfUcyAvQ%2FSYUVSr2nHYViukuSQyxAgpcs3Nf%2FKXAe5ROk80JDZrTxynROnUBRARebOrkhl2c%2FQDxlLrFPxeaCtVbUHGlVMt96dU%2FoIVfxsxG%2FFxon2hciMCH8SOS1qcdISTm%2BIRPEMl%2BWrov9bJlilCApm8MGudQ1wmn6USIoXlhsa%2Be%2FpWdCnurtymdjAZ7mx%2BH6%2BUn%2Bk7uuT%2BoBhzDMY9y5No2P8YvNJR5qtFcsYXsXhHLfuDM7ugS4%2BNbflk%2FgAhp13kc2JMD%2BE0Q2rz7BOL1uc2JGUjzW7JWe1XcN5R1gd2f0Eapg3kMW%2FKHQrzAMJy06cAGOqUBCZWdFME0FwuuvA5ADS8FRARonB50KA66t8gIbLjsnWC9yHgee7dkZkVAcKJ24vtXD06Ryi594o1Hmi2RFAprjCe8CLDKnvhQ0GyXSdk4h2OjPqnUrHq7744hWCpqRg0kyQt7eXq86a59v5Gz4ArnVbtv3gJg%2BkNNtdRtHf8fJ8T%2BL132EgvQep%2BRv6F%2FZQF%2FmpwbMvlBgxnKJSZFXpsEF9qu%2BuLf&X-Amz-Signature=f7ba7da4741f32714092dd012c26b82cb6181460765f7e03fe6c517916a84bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU5ENL6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYbAjJFgGKnwuVr7XqW2ofn5O9qrHdRWp9VfksU%2FcwAIgCHxSoZ3d%2FhHhSfdz%2BoNBDQTMLvCHaPzfZzQUd8L%2Bz3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFge0JZSluiWONkXcircA%2BrSeUb2Fcr2UlLbK62UoIJREtNEaG%2FBJ0WSQT2lE5gkgABQxJ8epzPlycpk67DvUHuhjAG7gPcBdrK1D5IYqZnJOOYwgjrGAUM2mx1JGkCuLTDILQ9iDhXlAD%2FAh1vYvzGgvjm3kRqH7RkbaMkiBnhl6SsQpKjHtQZhyskLKzMs43U01%2BF1ak1iFqVFONFIlxpldRjErFehbQoJgHzE8OGyUZ6tuZxRzWb6aekBZpYjYGXENqwwL%2FUl29K7PpbXRx5dpi%2BG%2F%2Br9%2BrGgBk%2Fz%2FS8z8JRFRyl9VYqFyYdugYCMOyAUQSbkj8Q3dVyTKfUcyAvQ%2FSYUVSr2nHYViukuSQyxAgpcs3Nf%2FKXAe5ROk80JDZrTxynROnUBRARebOrkhl2c%2FQDxlLrFPxeaCtVbUHGlVMt96dU%2FoIVfxsxG%2FFxon2hciMCH8SOS1qcdISTm%2BIRPEMl%2BWrov9bJlilCApm8MGudQ1wmn6USIoXlhsa%2Be%2FpWdCnurtymdjAZ7mx%2BH6%2BUn%2Bk7uuT%2BoBhzDMY9y5No2P8YvNJR5qtFcsYXsXhHLfuDM7ugS4%2BNbflk%2FgAhp13kc2JMD%2BE0Q2rz7BOL1uc2JGUjzW7JWe1XcN5R1gd2f0Eapg3kMW%2FKHQrzAMJy06cAGOqUBCZWdFME0FwuuvA5ADS8FRARonB50KA66t8gIbLjsnWC9yHgee7dkZkVAcKJ24vtXD06Ryi594o1Hmi2RFAprjCe8CLDKnvhQ0GyXSdk4h2OjPqnUrHq7744hWCpqRg0kyQt7eXq86a59v5Gz4ArnVbtv3gJg%2BkNNtdRtHf8fJ8T%2BL132EgvQep%2BRv6F%2FZQF%2FmpwbMvlBgxnKJSZFXpsEF9qu%2BuLf&X-Amz-Signature=a3aefa5d255216bd79a6b0bcd798ffdb08f45d70c8491c9681d68440e685d059&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU5ENL6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYbAjJFgGKnwuVr7XqW2ofn5O9qrHdRWp9VfksU%2FcwAIgCHxSoZ3d%2FhHhSfdz%2BoNBDQTMLvCHaPzfZzQUd8L%2Bz3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFge0JZSluiWONkXcircA%2BrSeUb2Fcr2UlLbK62UoIJREtNEaG%2FBJ0WSQT2lE5gkgABQxJ8epzPlycpk67DvUHuhjAG7gPcBdrK1D5IYqZnJOOYwgjrGAUM2mx1JGkCuLTDILQ9iDhXlAD%2FAh1vYvzGgvjm3kRqH7RkbaMkiBnhl6SsQpKjHtQZhyskLKzMs43U01%2BF1ak1iFqVFONFIlxpldRjErFehbQoJgHzE8OGyUZ6tuZxRzWb6aekBZpYjYGXENqwwL%2FUl29K7PpbXRx5dpi%2BG%2F%2Br9%2BrGgBk%2Fz%2FS8z8JRFRyl9VYqFyYdugYCMOyAUQSbkj8Q3dVyTKfUcyAvQ%2FSYUVSr2nHYViukuSQyxAgpcs3Nf%2FKXAe5ROk80JDZrTxynROnUBRARebOrkhl2c%2FQDxlLrFPxeaCtVbUHGlVMt96dU%2FoIVfxsxG%2FFxon2hciMCH8SOS1qcdISTm%2BIRPEMl%2BWrov9bJlilCApm8MGudQ1wmn6USIoXlhsa%2Be%2FpWdCnurtymdjAZ7mx%2BH6%2BUn%2Bk7uuT%2BoBhzDMY9y5No2P8YvNJR5qtFcsYXsXhHLfuDM7ugS4%2BNbflk%2FgAhp13kc2JMD%2BE0Q2rz7BOL1uc2JGUjzW7JWe1XcN5R1gd2f0Eapg3kMW%2FKHQrzAMJy06cAGOqUBCZWdFME0FwuuvA5ADS8FRARonB50KA66t8gIbLjsnWC9yHgee7dkZkVAcKJ24vtXD06Ryi594o1Hmi2RFAprjCe8CLDKnvhQ0GyXSdk4h2OjPqnUrHq7744hWCpqRg0kyQt7eXq86a59v5Gz4ArnVbtv3gJg%2BkNNtdRtHf8fJ8T%2BL132EgvQep%2BRv6F%2FZQF%2FmpwbMvlBgxnKJSZFXpsEF9qu%2BuLf&X-Amz-Signature=2db1a181377b3b4cbf78e4edcd84d89d8dbbedc235635d86e2c2b670b64e6796&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU5ENL6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYbAjJFgGKnwuVr7XqW2ofn5O9qrHdRWp9VfksU%2FcwAIgCHxSoZ3d%2FhHhSfdz%2BoNBDQTMLvCHaPzfZzQUd8L%2Bz3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFge0JZSluiWONkXcircA%2BrSeUb2Fcr2UlLbK62UoIJREtNEaG%2FBJ0WSQT2lE5gkgABQxJ8epzPlycpk67DvUHuhjAG7gPcBdrK1D5IYqZnJOOYwgjrGAUM2mx1JGkCuLTDILQ9iDhXlAD%2FAh1vYvzGgvjm3kRqH7RkbaMkiBnhl6SsQpKjHtQZhyskLKzMs43U01%2BF1ak1iFqVFONFIlxpldRjErFehbQoJgHzE8OGyUZ6tuZxRzWb6aekBZpYjYGXENqwwL%2FUl29K7PpbXRx5dpi%2BG%2F%2Br9%2BrGgBk%2Fz%2FS8z8JRFRyl9VYqFyYdugYCMOyAUQSbkj8Q3dVyTKfUcyAvQ%2FSYUVSr2nHYViukuSQyxAgpcs3Nf%2FKXAe5ROk80JDZrTxynROnUBRARebOrkhl2c%2FQDxlLrFPxeaCtVbUHGlVMt96dU%2FoIVfxsxG%2FFxon2hciMCH8SOS1qcdISTm%2BIRPEMl%2BWrov9bJlilCApm8MGudQ1wmn6USIoXlhsa%2Be%2FpWdCnurtymdjAZ7mx%2BH6%2BUn%2Bk7uuT%2BoBhzDMY9y5No2P8YvNJR5qtFcsYXsXhHLfuDM7ugS4%2BNbflk%2FgAhp13kc2JMD%2BE0Q2rz7BOL1uc2JGUjzW7JWe1XcN5R1gd2f0Eapg3kMW%2FKHQrzAMJy06cAGOqUBCZWdFME0FwuuvA5ADS8FRARonB50KA66t8gIbLjsnWC9yHgee7dkZkVAcKJ24vtXD06Ryi594o1Hmi2RFAprjCe8CLDKnvhQ0GyXSdk4h2OjPqnUrHq7744hWCpqRg0kyQt7eXq86a59v5Gz4ArnVbtv3gJg%2BkNNtdRtHf8fJ8T%2BL132EgvQep%2BRv6F%2FZQF%2FmpwbMvlBgxnKJSZFXpsEF9qu%2BuLf&X-Amz-Signature=bb2e40c434aa411852a5e27c50fda7fda31a103385149754ba80302552d16dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU5ENL6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYbAjJFgGKnwuVr7XqW2ofn5O9qrHdRWp9VfksU%2FcwAIgCHxSoZ3d%2FhHhSfdz%2BoNBDQTMLvCHaPzfZzQUd8L%2Bz3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFge0JZSluiWONkXcircA%2BrSeUb2Fcr2UlLbK62UoIJREtNEaG%2FBJ0WSQT2lE5gkgABQxJ8epzPlycpk67DvUHuhjAG7gPcBdrK1D5IYqZnJOOYwgjrGAUM2mx1JGkCuLTDILQ9iDhXlAD%2FAh1vYvzGgvjm3kRqH7RkbaMkiBnhl6SsQpKjHtQZhyskLKzMs43U01%2BF1ak1iFqVFONFIlxpldRjErFehbQoJgHzE8OGyUZ6tuZxRzWb6aekBZpYjYGXENqwwL%2FUl29K7PpbXRx5dpi%2BG%2F%2Br9%2BrGgBk%2Fz%2FS8z8JRFRyl9VYqFyYdugYCMOyAUQSbkj8Q3dVyTKfUcyAvQ%2FSYUVSr2nHYViukuSQyxAgpcs3Nf%2FKXAe5ROk80JDZrTxynROnUBRARebOrkhl2c%2FQDxlLrFPxeaCtVbUHGlVMt96dU%2FoIVfxsxG%2FFxon2hciMCH8SOS1qcdISTm%2BIRPEMl%2BWrov9bJlilCApm8MGudQ1wmn6USIoXlhsa%2Be%2FpWdCnurtymdjAZ7mx%2BH6%2BUn%2Bk7uuT%2BoBhzDMY9y5No2P8YvNJR5qtFcsYXsXhHLfuDM7ugS4%2BNbflk%2FgAhp13kc2JMD%2BE0Q2rz7BOL1uc2JGUjzW7JWe1XcN5R1gd2f0Eapg3kMW%2FKHQrzAMJy06cAGOqUBCZWdFME0FwuuvA5ADS8FRARonB50KA66t8gIbLjsnWC9yHgee7dkZkVAcKJ24vtXD06Ryi594o1Hmi2RFAprjCe8CLDKnvhQ0GyXSdk4h2OjPqnUrHq7744hWCpqRg0kyQt7eXq86a59v5Gz4ArnVbtv3gJg%2BkNNtdRtHf8fJ8T%2BL132EgvQep%2BRv6F%2FZQF%2FmpwbMvlBgxnKJSZFXpsEF9qu%2BuLf&X-Amz-Signature=7a8cc5e849f11c434149272a1aca107af744c9bfdb0b0fdd2195afc2957a2559&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU5ENL6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYbAjJFgGKnwuVr7XqW2ofn5O9qrHdRWp9VfksU%2FcwAIgCHxSoZ3d%2FhHhSfdz%2BoNBDQTMLvCHaPzfZzQUd8L%2Bz3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFge0JZSluiWONkXcircA%2BrSeUb2Fcr2UlLbK62UoIJREtNEaG%2FBJ0WSQT2lE5gkgABQxJ8epzPlycpk67DvUHuhjAG7gPcBdrK1D5IYqZnJOOYwgjrGAUM2mx1JGkCuLTDILQ9iDhXlAD%2FAh1vYvzGgvjm3kRqH7RkbaMkiBnhl6SsQpKjHtQZhyskLKzMs43U01%2BF1ak1iFqVFONFIlxpldRjErFehbQoJgHzE8OGyUZ6tuZxRzWb6aekBZpYjYGXENqwwL%2FUl29K7PpbXRx5dpi%2BG%2F%2Br9%2BrGgBk%2Fz%2FS8z8JRFRyl9VYqFyYdugYCMOyAUQSbkj8Q3dVyTKfUcyAvQ%2FSYUVSr2nHYViukuSQyxAgpcs3Nf%2FKXAe5ROk80JDZrTxynROnUBRARebOrkhl2c%2FQDxlLrFPxeaCtVbUHGlVMt96dU%2FoIVfxsxG%2FFxon2hciMCH8SOS1qcdISTm%2BIRPEMl%2BWrov9bJlilCApm8MGudQ1wmn6USIoXlhsa%2Be%2FpWdCnurtymdjAZ7mx%2BH6%2BUn%2Bk7uuT%2BoBhzDMY9y5No2P8YvNJR5qtFcsYXsXhHLfuDM7ugS4%2BNbflk%2FgAhp13kc2JMD%2BE0Q2rz7BOL1uc2JGUjzW7JWe1XcN5R1gd2f0Eapg3kMW%2FKHQrzAMJy06cAGOqUBCZWdFME0FwuuvA5ADS8FRARonB50KA66t8gIbLjsnWC9yHgee7dkZkVAcKJ24vtXD06Ryi594o1Hmi2RFAprjCe8CLDKnvhQ0GyXSdk4h2OjPqnUrHq7744hWCpqRg0kyQt7eXq86a59v5Gz4ArnVbtv3gJg%2BkNNtdRtHf8fJ8T%2BL132EgvQep%2BRv6F%2FZQF%2FmpwbMvlBgxnKJSZFXpsEF9qu%2BuLf&X-Amz-Signature=1fcd2088bf861e137742010dc6bca518d1046e7c985a05b7c9cd263f6ac771cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU5ENL6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYbAjJFgGKnwuVr7XqW2ofn5O9qrHdRWp9VfksU%2FcwAIgCHxSoZ3d%2FhHhSfdz%2BoNBDQTMLvCHaPzfZzQUd8L%2Bz3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFge0JZSluiWONkXcircA%2BrSeUb2Fcr2UlLbK62UoIJREtNEaG%2FBJ0WSQT2lE5gkgABQxJ8epzPlycpk67DvUHuhjAG7gPcBdrK1D5IYqZnJOOYwgjrGAUM2mx1JGkCuLTDILQ9iDhXlAD%2FAh1vYvzGgvjm3kRqH7RkbaMkiBnhl6SsQpKjHtQZhyskLKzMs43U01%2BF1ak1iFqVFONFIlxpldRjErFehbQoJgHzE8OGyUZ6tuZxRzWb6aekBZpYjYGXENqwwL%2FUl29K7PpbXRx5dpi%2BG%2F%2Br9%2BrGgBk%2Fz%2FS8z8JRFRyl9VYqFyYdugYCMOyAUQSbkj8Q3dVyTKfUcyAvQ%2FSYUVSr2nHYViukuSQyxAgpcs3Nf%2FKXAe5ROk80JDZrTxynROnUBRARebOrkhl2c%2FQDxlLrFPxeaCtVbUHGlVMt96dU%2FoIVfxsxG%2FFxon2hciMCH8SOS1qcdISTm%2BIRPEMl%2BWrov9bJlilCApm8MGudQ1wmn6USIoXlhsa%2Be%2FpWdCnurtymdjAZ7mx%2BH6%2BUn%2Bk7uuT%2BoBhzDMY9y5No2P8YvNJR5qtFcsYXsXhHLfuDM7ugS4%2BNbflk%2FgAhp13kc2JMD%2BE0Q2rz7BOL1uc2JGUjzW7JWe1XcN5R1gd2f0Eapg3kMW%2FKHQrzAMJy06cAGOqUBCZWdFME0FwuuvA5ADS8FRARonB50KA66t8gIbLjsnWC9yHgee7dkZkVAcKJ24vtXD06Ryi594o1Hmi2RFAprjCe8CLDKnvhQ0GyXSdk4h2OjPqnUrHq7744hWCpqRg0kyQt7eXq86a59v5Gz4ArnVbtv3gJg%2BkNNtdRtHf8fJ8T%2BL132EgvQep%2BRv6F%2FZQF%2FmpwbMvlBgxnKJSZFXpsEF9qu%2BuLf&X-Amz-Signature=6303b35e16bfe35dc7baa215da2874ef9dab2543aac0cc46c38d56d86c932c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
