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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQQQO47%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2RpR0LkZuXS6MWFjICfY%2BKeQj%2Fo04TS6xJysT1kuhgIgSkq5f0kui9eE3Gj6Rn1cjE3padGmPESSM1U3SBnyklIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkaZ1otsVeexK2cLSrcA6ZF2%2BMAUQ%2BzykrfNPFJCQA51HLXjRVbj0jAGvim9kbSiEY8RJPSAH7jnSWJxTaKolhCEp%2B%2FecP4nM6QBL4OG3AS1N797cJdp9hZHzBsB%2BsOPs8nITqYphu5gITxi5zK5%2FfYXegu%2Bqjp86rxJ0YhM7DGpspJ8Oay4M32cHoyoGrltFIDfe%2FPUKLIwVY%2FSyA1rKCcWJ1UJ%2FmW0aaIC%2FrfNtR5IGc%2BEyYWJ5J8jo881VrIQh3g%2BCXKtrvFYltksm4vZNtccwSJ1tqligkfznJO37gWUy52QoA8AZOL2Mw1NdFufLw%2F%2FkledAPy88nAVDHyoL6ITZ2dJWCGakDUZNxjMgG6YIHnehCxo3afVYiHs%2BYpQqjeXsIAenNzVrtgZdxV6kA4tp0NCxzyhSr03v8DaIKwPhQ4bp%2BnJgEbfVJ95EH24%2Fu0f6knptqSiHWCKyC%2FPG%2BwTQv8qavutu9bv0iN4WR9lMYOYDdeIvEB1JEMfVOSh9AXb4HlMahV%2Bv%2FSbq3QlvG9%2BySAX4q6eGxplIIF%2FF%2FFsm%2BWKgN45h44FuXseGlWVM6oRDvPe2CXe9qGDzV8MFLfBD7YJyOa%2Bwg4c7bSZRUfciX1%2F9KlDzmNIcp%2FUoDj4tlrgPDvEaE3zK1dMPa6%2B8AGOqUBWllprNQBimwbbo3Hugz49cWxCvtLpastkxKqTIqyRxa5Ogq82v8MNZlmCgjPZCnRILvyJfpqLG9MUVftqkz23ZT%2BnDUN6yguFMquvPoG55%2BJCXxNd7gVdCBF0iCocmJmrstceswCyiM03ZWtFfenRvI07SAn4m7wOK0QpX%2FeXYzaMy%2BAPhFb0Pu%2FjeRl4UZ2MzFLd18SV0vW%2FTgjhvM5Us1Jru9X&X-Amz-Signature=e814e607d3575e80ddf40a53b8f0d2705e80221b38ed430487efc61d7ff31c01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQQQO47%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2RpR0LkZuXS6MWFjICfY%2BKeQj%2Fo04TS6xJysT1kuhgIgSkq5f0kui9eE3Gj6Rn1cjE3padGmPESSM1U3SBnyklIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkaZ1otsVeexK2cLSrcA6ZF2%2BMAUQ%2BzykrfNPFJCQA51HLXjRVbj0jAGvim9kbSiEY8RJPSAH7jnSWJxTaKolhCEp%2B%2FecP4nM6QBL4OG3AS1N797cJdp9hZHzBsB%2BsOPs8nITqYphu5gITxi5zK5%2FfYXegu%2Bqjp86rxJ0YhM7DGpspJ8Oay4M32cHoyoGrltFIDfe%2FPUKLIwVY%2FSyA1rKCcWJ1UJ%2FmW0aaIC%2FrfNtR5IGc%2BEyYWJ5J8jo881VrIQh3g%2BCXKtrvFYltksm4vZNtccwSJ1tqligkfznJO37gWUy52QoA8AZOL2Mw1NdFufLw%2F%2FkledAPy88nAVDHyoL6ITZ2dJWCGakDUZNxjMgG6YIHnehCxo3afVYiHs%2BYpQqjeXsIAenNzVrtgZdxV6kA4tp0NCxzyhSr03v8DaIKwPhQ4bp%2BnJgEbfVJ95EH24%2Fu0f6knptqSiHWCKyC%2FPG%2BwTQv8qavutu9bv0iN4WR9lMYOYDdeIvEB1JEMfVOSh9AXb4HlMahV%2Bv%2FSbq3QlvG9%2BySAX4q6eGxplIIF%2FF%2FFsm%2BWKgN45h44FuXseGlWVM6oRDvPe2CXe9qGDzV8MFLfBD7YJyOa%2Bwg4c7bSZRUfciX1%2F9KlDzmNIcp%2FUoDj4tlrgPDvEaE3zK1dMPa6%2B8AGOqUBWllprNQBimwbbo3Hugz49cWxCvtLpastkxKqTIqyRxa5Ogq82v8MNZlmCgjPZCnRILvyJfpqLG9MUVftqkz23ZT%2BnDUN6yguFMquvPoG55%2BJCXxNd7gVdCBF0iCocmJmrstceswCyiM03ZWtFfenRvI07SAn4m7wOK0QpX%2FeXYzaMy%2BAPhFb0Pu%2FjeRl4UZ2MzFLd18SV0vW%2FTgjhvM5Us1Jru9X&X-Amz-Signature=8da11caf85d0e2f1fc8b4ad37e9341fec847d53ba4fc1d0a49f6aa8f2b134d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQQQO47%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2RpR0LkZuXS6MWFjICfY%2BKeQj%2Fo04TS6xJysT1kuhgIgSkq5f0kui9eE3Gj6Rn1cjE3padGmPESSM1U3SBnyklIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkaZ1otsVeexK2cLSrcA6ZF2%2BMAUQ%2BzykrfNPFJCQA51HLXjRVbj0jAGvim9kbSiEY8RJPSAH7jnSWJxTaKolhCEp%2B%2FecP4nM6QBL4OG3AS1N797cJdp9hZHzBsB%2BsOPs8nITqYphu5gITxi5zK5%2FfYXegu%2Bqjp86rxJ0YhM7DGpspJ8Oay4M32cHoyoGrltFIDfe%2FPUKLIwVY%2FSyA1rKCcWJ1UJ%2FmW0aaIC%2FrfNtR5IGc%2BEyYWJ5J8jo881VrIQh3g%2BCXKtrvFYltksm4vZNtccwSJ1tqligkfznJO37gWUy52QoA8AZOL2Mw1NdFufLw%2F%2FkledAPy88nAVDHyoL6ITZ2dJWCGakDUZNxjMgG6YIHnehCxo3afVYiHs%2BYpQqjeXsIAenNzVrtgZdxV6kA4tp0NCxzyhSr03v8DaIKwPhQ4bp%2BnJgEbfVJ95EH24%2Fu0f6knptqSiHWCKyC%2FPG%2BwTQv8qavutu9bv0iN4WR9lMYOYDdeIvEB1JEMfVOSh9AXb4HlMahV%2Bv%2FSbq3QlvG9%2BySAX4q6eGxplIIF%2FF%2FFsm%2BWKgN45h44FuXseGlWVM6oRDvPe2CXe9qGDzV8MFLfBD7YJyOa%2Bwg4c7bSZRUfciX1%2F9KlDzmNIcp%2FUoDj4tlrgPDvEaE3zK1dMPa6%2B8AGOqUBWllprNQBimwbbo3Hugz49cWxCvtLpastkxKqTIqyRxa5Ogq82v8MNZlmCgjPZCnRILvyJfpqLG9MUVftqkz23ZT%2BnDUN6yguFMquvPoG55%2BJCXxNd7gVdCBF0iCocmJmrstceswCyiM03ZWtFfenRvI07SAn4m7wOK0QpX%2FeXYzaMy%2BAPhFb0Pu%2FjeRl4UZ2MzFLd18SV0vW%2FTgjhvM5Us1Jru9X&X-Amz-Signature=5eea6bd796dd8c8288722ce9c9c63d7e2feb0b4976cd863e9e6ab2d5e6798d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQQQO47%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2RpR0LkZuXS6MWFjICfY%2BKeQj%2Fo04TS6xJysT1kuhgIgSkq5f0kui9eE3Gj6Rn1cjE3padGmPESSM1U3SBnyklIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkaZ1otsVeexK2cLSrcA6ZF2%2BMAUQ%2BzykrfNPFJCQA51HLXjRVbj0jAGvim9kbSiEY8RJPSAH7jnSWJxTaKolhCEp%2B%2FecP4nM6QBL4OG3AS1N797cJdp9hZHzBsB%2BsOPs8nITqYphu5gITxi5zK5%2FfYXegu%2Bqjp86rxJ0YhM7DGpspJ8Oay4M32cHoyoGrltFIDfe%2FPUKLIwVY%2FSyA1rKCcWJ1UJ%2FmW0aaIC%2FrfNtR5IGc%2BEyYWJ5J8jo881VrIQh3g%2BCXKtrvFYltksm4vZNtccwSJ1tqligkfznJO37gWUy52QoA8AZOL2Mw1NdFufLw%2F%2FkledAPy88nAVDHyoL6ITZ2dJWCGakDUZNxjMgG6YIHnehCxo3afVYiHs%2BYpQqjeXsIAenNzVrtgZdxV6kA4tp0NCxzyhSr03v8DaIKwPhQ4bp%2BnJgEbfVJ95EH24%2Fu0f6knptqSiHWCKyC%2FPG%2BwTQv8qavutu9bv0iN4WR9lMYOYDdeIvEB1JEMfVOSh9AXb4HlMahV%2Bv%2FSbq3QlvG9%2BySAX4q6eGxplIIF%2FF%2FFsm%2BWKgN45h44FuXseGlWVM6oRDvPe2CXe9qGDzV8MFLfBD7YJyOa%2Bwg4c7bSZRUfciX1%2F9KlDzmNIcp%2FUoDj4tlrgPDvEaE3zK1dMPa6%2B8AGOqUBWllprNQBimwbbo3Hugz49cWxCvtLpastkxKqTIqyRxa5Ogq82v8MNZlmCgjPZCnRILvyJfpqLG9MUVftqkz23ZT%2BnDUN6yguFMquvPoG55%2BJCXxNd7gVdCBF0iCocmJmrstceswCyiM03ZWtFfenRvI07SAn4m7wOK0QpX%2FeXYzaMy%2BAPhFb0Pu%2FjeRl4UZ2MzFLd18SV0vW%2FTgjhvM5Us1Jru9X&X-Amz-Signature=b1639b5fe23ac81bc5cd06876ff68a8af197f16ea2d7b85bb3e66f458ba49cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQQQO47%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2RpR0LkZuXS6MWFjICfY%2BKeQj%2Fo04TS6xJysT1kuhgIgSkq5f0kui9eE3Gj6Rn1cjE3padGmPESSM1U3SBnyklIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkaZ1otsVeexK2cLSrcA6ZF2%2BMAUQ%2BzykrfNPFJCQA51HLXjRVbj0jAGvim9kbSiEY8RJPSAH7jnSWJxTaKolhCEp%2B%2FecP4nM6QBL4OG3AS1N797cJdp9hZHzBsB%2BsOPs8nITqYphu5gITxi5zK5%2FfYXegu%2Bqjp86rxJ0YhM7DGpspJ8Oay4M32cHoyoGrltFIDfe%2FPUKLIwVY%2FSyA1rKCcWJ1UJ%2FmW0aaIC%2FrfNtR5IGc%2BEyYWJ5J8jo881VrIQh3g%2BCXKtrvFYltksm4vZNtccwSJ1tqligkfznJO37gWUy52QoA8AZOL2Mw1NdFufLw%2F%2FkledAPy88nAVDHyoL6ITZ2dJWCGakDUZNxjMgG6YIHnehCxo3afVYiHs%2BYpQqjeXsIAenNzVrtgZdxV6kA4tp0NCxzyhSr03v8DaIKwPhQ4bp%2BnJgEbfVJ95EH24%2Fu0f6knptqSiHWCKyC%2FPG%2BwTQv8qavutu9bv0iN4WR9lMYOYDdeIvEB1JEMfVOSh9AXb4HlMahV%2Bv%2FSbq3QlvG9%2BySAX4q6eGxplIIF%2FF%2FFsm%2BWKgN45h44FuXseGlWVM6oRDvPe2CXe9qGDzV8MFLfBD7YJyOa%2Bwg4c7bSZRUfciX1%2F9KlDzmNIcp%2FUoDj4tlrgPDvEaE3zK1dMPa6%2B8AGOqUBWllprNQBimwbbo3Hugz49cWxCvtLpastkxKqTIqyRxa5Ogq82v8MNZlmCgjPZCnRILvyJfpqLG9MUVftqkz23ZT%2BnDUN6yguFMquvPoG55%2BJCXxNd7gVdCBF0iCocmJmrstceswCyiM03ZWtFfenRvI07SAn4m7wOK0QpX%2FeXYzaMy%2BAPhFb0Pu%2FjeRl4UZ2MzFLd18SV0vW%2FTgjhvM5Us1Jru9X&X-Amz-Signature=302e5a13c6b6aa656a3d4d2dc32d706663a7ac2c6850d8389687ecca5df18dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQQQO47%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2RpR0LkZuXS6MWFjICfY%2BKeQj%2Fo04TS6xJysT1kuhgIgSkq5f0kui9eE3Gj6Rn1cjE3padGmPESSM1U3SBnyklIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkaZ1otsVeexK2cLSrcA6ZF2%2BMAUQ%2BzykrfNPFJCQA51HLXjRVbj0jAGvim9kbSiEY8RJPSAH7jnSWJxTaKolhCEp%2B%2FecP4nM6QBL4OG3AS1N797cJdp9hZHzBsB%2BsOPs8nITqYphu5gITxi5zK5%2FfYXegu%2Bqjp86rxJ0YhM7DGpspJ8Oay4M32cHoyoGrltFIDfe%2FPUKLIwVY%2FSyA1rKCcWJ1UJ%2FmW0aaIC%2FrfNtR5IGc%2BEyYWJ5J8jo881VrIQh3g%2BCXKtrvFYltksm4vZNtccwSJ1tqligkfznJO37gWUy52QoA8AZOL2Mw1NdFufLw%2F%2FkledAPy88nAVDHyoL6ITZ2dJWCGakDUZNxjMgG6YIHnehCxo3afVYiHs%2BYpQqjeXsIAenNzVrtgZdxV6kA4tp0NCxzyhSr03v8DaIKwPhQ4bp%2BnJgEbfVJ95EH24%2Fu0f6knptqSiHWCKyC%2FPG%2BwTQv8qavutu9bv0iN4WR9lMYOYDdeIvEB1JEMfVOSh9AXb4HlMahV%2Bv%2FSbq3QlvG9%2BySAX4q6eGxplIIF%2FF%2FFsm%2BWKgN45h44FuXseGlWVM6oRDvPe2CXe9qGDzV8MFLfBD7YJyOa%2Bwg4c7bSZRUfciX1%2F9KlDzmNIcp%2FUoDj4tlrgPDvEaE3zK1dMPa6%2B8AGOqUBWllprNQBimwbbo3Hugz49cWxCvtLpastkxKqTIqyRxa5Ogq82v8MNZlmCgjPZCnRILvyJfpqLG9MUVftqkz23ZT%2BnDUN6yguFMquvPoG55%2BJCXxNd7gVdCBF0iCocmJmrstceswCyiM03ZWtFfenRvI07SAn4m7wOK0QpX%2FeXYzaMy%2BAPhFb0Pu%2FjeRl4UZ2MzFLd18SV0vW%2FTgjhvM5Us1Jru9X&X-Amz-Signature=129d954b8e775e63742a126ce22cac668a50d45794832a95c08751f1fa1bcb27&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQQQO47%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv2RpR0LkZuXS6MWFjICfY%2BKeQj%2Fo04TS6xJysT1kuhgIgSkq5f0kui9eE3Gj6Rn1cjE3padGmPESSM1U3SBnyklIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkaZ1otsVeexK2cLSrcA6ZF2%2BMAUQ%2BzykrfNPFJCQA51HLXjRVbj0jAGvim9kbSiEY8RJPSAH7jnSWJxTaKolhCEp%2B%2FecP4nM6QBL4OG3AS1N797cJdp9hZHzBsB%2BsOPs8nITqYphu5gITxi5zK5%2FfYXegu%2Bqjp86rxJ0YhM7DGpspJ8Oay4M32cHoyoGrltFIDfe%2FPUKLIwVY%2FSyA1rKCcWJ1UJ%2FmW0aaIC%2FrfNtR5IGc%2BEyYWJ5J8jo881VrIQh3g%2BCXKtrvFYltksm4vZNtccwSJ1tqligkfznJO37gWUy52QoA8AZOL2Mw1NdFufLw%2F%2FkledAPy88nAVDHyoL6ITZ2dJWCGakDUZNxjMgG6YIHnehCxo3afVYiHs%2BYpQqjeXsIAenNzVrtgZdxV6kA4tp0NCxzyhSr03v8DaIKwPhQ4bp%2BnJgEbfVJ95EH24%2Fu0f6knptqSiHWCKyC%2FPG%2BwTQv8qavutu9bv0iN4WR9lMYOYDdeIvEB1JEMfVOSh9AXb4HlMahV%2Bv%2FSbq3QlvG9%2BySAX4q6eGxplIIF%2FF%2FFsm%2BWKgN45h44FuXseGlWVM6oRDvPe2CXe9qGDzV8MFLfBD7YJyOa%2Bwg4c7bSZRUfciX1%2F9KlDzmNIcp%2FUoDj4tlrgPDvEaE3zK1dMPa6%2B8AGOqUBWllprNQBimwbbo3Hugz49cWxCvtLpastkxKqTIqyRxa5Ogq82v8MNZlmCgjPZCnRILvyJfpqLG9MUVftqkz23ZT%2BnDUN6yguFMquvPoG55%2BJCXxNd7gVdCBF0iCocmJmrstceswCyiM03ZWtFfenRvI07SAn4m7wOK0QpX%2FeXYzaMy%2BAPhFb0Pu%2FjeRl4UZ2MzFLd18SV0vW%2FTgjhvM5Us1Jru9X&X-Amz-Signature=987ab393ab56ffd0390b9e03ad66d08dbbdcb10511dbc36af08f8ba07fec2050&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
