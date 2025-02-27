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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULFK3BN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDYki0P4HzXPoqZzt4n1BihxqozCBejhjJ4ZnS9Ccf8LwIhAMPVhORDZrgbVj%2BRNCD0FPJsS5bcpwD%2FymRE%2F%2B8uFWUPKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc4LS7cXuzoRgagHAq3ANXtHDw0G2TT2NgHDLe%2F52oeND5FdL1aWzzFOLTMwe241GpZ3dImM%2FDhFqge6BfkwMwjruirLbT1pOFceguOgSCQou3hElq4ueJasLmU8655oyTNTzEtj7wootVHfNODiAOQgoW1uxyoHsiI30Y74EJbqikQFVTd3luuLUBtrj1BPJIIcvYncjVQLEm5EfNZE78X2HbcuvwR37oR9jYn1b8aACvwu%2FynulBcqAfCsUsbVnsBT7QsGs%2Fp1FxlEcyoP%2FPXNhlA3dvIUnvYME98d6ld1sNqLSPbs2jip5oRh9eEpKXWQJISHZuMyG69xrWEUhuLyAXlIStm4kw%2FG5s%2FObkyCtVPblDwxRm5yHoRNXe5Rtu9m%2BHhy9C%2Bk%2FfWscWWX1OHpGVsRa%2Fmrs9%2F0vsGINMdwFrpmeg9VXIUQvx4uue74QgDgbE%2B88RXaJV3adXOC0Xpyet0dbUPaJyo8ZFYWYxL3jWUCpPAg24ezXajKl5HKKXjj9%2Bbl48nRX6Cug%2F88LuD4Ptx%2Fhkl5yqY4R4YOtgP%2Fx5hGx7sCWBdBBgYK9qaTaTyEheR6BkSBzI6J%2BhZH7Cgo%2BSc8p%2FaMV0%2Fq8jEVfqOZ46XvhJIJE16Sa02tmlBg1Okofi07HE5wVxojCQ%2BIK%2BBjqkAdTt8aDn9ew890Qi%2FRFSNatudqhbSRWWposGDndNHGVaM7AyEnzcz%2B0mPyV83kTFsUrjiid1S9%2FZpJYwBMqN5FTO7tu5CG6SBUNlTaN7VZZH6CI02uzRYQtOjyi7E%2FZiyUBiGut2uQrmgReaDwJJFlCeKehggW3qJhhqUi4D334oG11HtoBSdy%2BLFowyTSM6A5boLDhLecGB2ZaHTCr0kfdEPctG&X-Amz-Signature=63db20c38198d3bd92fb9e0bddb08b6e17e6e7dbe5183f2a40db928e3de250b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULFK3BN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDYki0P4HzXPoqZzt4n1BihxqozCBejhjJ4ZnS9Ccf8LwIhAMPVhORDZrgbVj%2BRNCD0FPJsS5bcpwD%2FymRE%2F%2B8uFWUPKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc4LS7cXuzoRgagHAq3ANXtHDw0G2TT2NgHDLe%2F52oeND5FdL1aWzzFOLTMwe241GpZ3dImM%2FDhFqge6BfkwMwjruirLbT1pOFceguOgSCQou3hElq4ueJasLmU8655oyTNTzEtj7wootVHfNODiAOQgoW1uxyoHsiI30Y74EJbqikQFVTd3luuLUBtrj1BPJIIcvYncjVQLEm5EfNZE78X2HbcuvwR37oR9jYn1b8aACvwu%2FynulBcqAfCsUsbVnsBT7QsGs%2Fp1FxlEcyoP%2FPXNhlA3dvIUnvYME98d6ld1sNqLSPbs2jip5oRh9eEpKXWQJISHZuMyG69xrWEUhuLyAXlIStm4kw%2FG5s%2FObkyCtVPblDwxRm5yHoRNXe5Rtu9m%2BHhy9C%2Bk%2FfWscWWX1OHpGVsRa%2Fmrs9%2F0vsGINMdwFrpmeg9VXIUQvx4uue74QgDgbE%2B88RXaJV3adXOC0Xpyet0dbUPaJyo8ZFYWYxL3jWUCpPAg24ezXajKl5HKKXjj9%2Bbl48nRX6Cug%2F88LuD4Ptx%2Fhkl5yqY4R4YOtgP%2Fx5hGx7sCWBdBBgYK9qaTaTyEheR6BkSBzI6J%2BhZH7Cgo%2BSc8p%2FaMV0%2Fq8jEVfqOZ46XvhJIJE16Sa02tmlBg1Okofi07HE5wVxojCQ%2BIK%2BBjqkAdTt8aDn9ew890Qi%2FRFSNatudqhbSRWWposGDndNHGVaM7AyEnzcz%2B0mPyV83kTFsUrjiid1S9%2FZpJYwBMqN5FTO7tu5CG6SBUNlTaN7VZZH6CI02uzRYQtOjyi7E%2FZiyUBiGut2uQrmgReaDwJJFlCeKehggW3qJhhqUi4D334oG11HtoBSdy%2BLFowyTSM6A5boLDhLecGB2ZaHTCr0kfdEPctG&X-Amz-Signature=458bb51ccd4dce1e94965c4852140b0b233f7b1f62315c68c21dc518cb7eccce&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULFK3BN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDYki0P4HzXPoqZzt4n1BihxqozCBejhjJ4ZnS9Ccf8LwIhAMPVhORDZrgbVj%2BRNCD0FPJsS5bcpwD%2FymRE%2F%2B8uFWUPKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc4LS7cXuzoRgagHAq3ANXtHDw0G2TT2NgHDLe%2F52oeND5FdL1aWzzFOLTMwe241GpZ3dImM%2FDhFqge6BfkwMwjruirLbT1pOFceguOgSCQou3hElq4ueJasLmU8655oyTNTzEtj7wootVHfNODiAOQgoW1uxyoHsiI30Y74EJbqikQFVTd3luuLUBtrj1BPJIIcvYncjVQLEm5EfNZE78X2HbcuvwR37oR9jYn1b8aACvwu%2FynulBcqAfCsUsbVnsBT7QsGs%2Fp1FxlEcyoP%2FPXNhlA3dvIUnvYME98d6ld1sNqLSPbs2jip5oRh9eEpKXWQJISHZuMyG69xrWEUhuLyAXlIStm4kw%2FG5s%2FObkyCtVPblDwxRm5yHoRNXe5Rtu9m%2BHhy9C%2Bk%2FfWscWWX1OHpGVsRa%2Fmrs9%2F0vsGINMdwFrpmeg9VXIUQvx4uue74QgDgbE%2B88RXaJV3adXOC0Xpyet0dbUPaJyo8ZFYWYxL3jWUCpPAg24ezXajKl5HKKXjj9%2Bbl48nRX6Cug%2F88LuD4Ptx%2Fhkl5yqY4R4YOtgP%2Fx5hGx7sCWBdBBgYK9qaTaTyEheR6BkSBzI6J%2BhZH7Cgo%2BSc8p%2FaMV0%2Fq8jEVfqOZ46XvhJIJE16Sa02tmlBg1Okofi07HE5wVxojCQ%2BIK%2BBjqkAdTt8aDn9ew890Qi%2FRFSNatudqhbSRWWposGDndNHGVaM7AyEnzcz%2B0mPyV83kTFsUrjiid1S9%2FZpJYwBMqN5FTO7tu5CG6SBUNlTaN7VZZH6CI02uzRYQtOjyi7E%2FZiyUBiGut2uQrmgReaDwJJFlCeKehggW3qJhhqUi4D334oG11HtoBSdy%2BLFowyTSM6A5boLDhLecGB2ZaHTCr0kfdEPctG&X-Amz-Signature=a6f6feccfbdfaad79f4a2a32d7da468bbc6a1b8a3e27b1b0fd9de9b1edea5a01&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULFK3BN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDYki0P4HzXPoqZzt4n1BihxqozCBejhjJ4ZnS9Ccf8LwIhAMPVhORDZrgbVj%2BRNCD0FPJsS5bcpwD%2FymRE%2F%2B8uFWUPKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc4LS7cXuzoRgagHAq3ANXtHDw0G2TT2NgHDLe%2F52oeND5FdL1aWzzFOLTMwe241GpZ3dImM%2FDhFqge6BfkwMwjruirLbT1pOFceguOgSCQou3hElq4ueJasLmU8655oyTNTzEtj7wootVHfNODiAOQgoW1uxyoHsiI30Y74EJbqikQFVTd3luuLUBtrj1BPJIIcvYncjVQLEm5EfNZE78X2HbcuvwR37oR9jYn1b8aACvwu%2FynulBcqAfCsUsbVnsBT7QsGs%2Fp1FxlEcyoP%2FPXNhlA3dvIUnvYME98d6ld1sNqLSPbs2jip5oRh9eEpKXWQJISHZuMyG69xrWEUhuLyAXlIStm4kw%2FG5s%2FObkyCtVPblDwxRm5yHoRNXe5Rtu9m%2BHhy9C%2Bk%2FfWscWWX1OHpGVsRa%2Fmrs9%2F0vsGINMdwFrpmeg9VXIUQvx4uue74QgDgbE%2B88RXaJV3adXOC0Xpyet0dbUPaJyo8ZFYWYxL3jWUCpPAg24ezXajKl5HKKXjj9%2Bbl48nRX6Cug%2F88LuD4Ptx%2Fhkl5yqY4R4YOtgP%2Fx5hGx7sCWBdBBgYK9qaTaTyEheR6BkSBzI6J%2BhZH7Cgo%2BSc8p%2FaMV0%2Fq8jEVfqOZ46XvhJIJE16Sa02tmlBg1Okofi07HE5wVxojCQ%2BIK%2BBjqkAdTt8aDn9ew890Qi%2FRFSNatudqhbSRWWposGDndNHGVaM7AyEnzcz%2B0mPyV83kTFsUrjiid1S9%2FZpJYwBMqN5FTO7tu5CG6SBUNlTaN7VZZH6CI02uzRYQtOjyi7E%2FZiyUBiGut2uQrmgReaDwJJFlCeKehggW3qJhhqUi4D334oG11HtoBSdy%2BLFowyTSM6A5boLDhLecGB2ZaHTCr0kfdEPctG&X-Amz-Signature=3ae1bf2c74ca4bc9bb9a65c9e3ca012015722a9790d4a10653d6e1400220822a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULFK3BN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDYki0P4HzXPoqZzt4n1BihxqozCBejhjJ4ZnS9Ccf8LwIhAMPVhORDZrgbVj%2BRNCD0FPJsS5bcpwD%2FymRE%2F%2B8uFWUPKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc4LS7cXuzoRgagHAq3ANXtHDw0G2TT2NgHDLe%2F52oeND5FdL1aWzzFOLTMwe241GpZ3dImM%2FDhFqge6BfkwMwjruirLbT1pOFceguOgSCQou3hElq4ueJasLmU8655oyTNTzEtj7wootVHfNODiAOQgoW1uxyoHsiI30Y74EJbqikQFVTd3luuLUBtrj1BPJIIcvYncjVQLEm5EfNZE78X2HbcuvwR37oR9jYn1b8aACvwu%2FynulBcqAfCsUsbVnsBT7QsGs%2Fp1FxlEcyoP%2FPXNhlA3dvIUnvYME98d6ld1sNqLSPbs2jip5oRh9eEpKXWQJISHZuMyG69xrWEUhuLyAXlIStm4kw%2FG5s%2FObkyCtVPblDwxRm5yHoRNXe5Rtu9m%2BHhy9C%2Bk%2FfWscWWX1OHpGVsRa%2Fmrs9%2F0vsGINMdwFrpmeg9VXIUQvx4uue74QgDgbE%2B88RXaJV3adXOC0Xpyet0dbUPaJyo8ZFYWYxL3jWUCpPAg24ezXajKl5HKKXjj9%2Bbl48nRX6Cug%2F88LuD4Ptx%2Fhkl5yqY4R4YOtgP%2Fx5hGx7sCWBdBBgYK9qaTaTyEheR6BkSBzI6J%2BhZH7Cgo%2BSc8p%2FaMV0%2Fq8jEVfqOZ46XvhJIJE16Sa02tmlBg1Okofi07HE5wVxojCQ%2BIK%2BBjqkAdTt8aDn9ew890Qi%2FRFSNatudqhbSRWWposGDndNHGVaM7AyEnzcz%2B0mPyV83kTFsUrjiid1S9%2FZpJYwBMqN5FTO7tu5CG6SBUNlTaN7VZZH6CI02uzRYQtOjyi7E%2FZiyUBiGut2uQrmgReaDwJJFlCeKehggW3qJhhqUi4D334oG11HtoBSdy%2BLFowyTSM6A5boLDhLecGB2ZaHTCr0kfdEPctG&X-Amz-Signature=5b28a3886d74968462a477b787a9fd0390cfdd5720469a19e4c1f5d1bd8acd67&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULFK3BN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDYki0P4HzXPoqZzt4n1BihxqozCBejhjJ4ZnS9Ccf8LwIhAMPVhORDZrgbVj%2BRNCD0FPJsS5bcpwD%2FymRE%2F%2B8uFWUPKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc4LS7cXuzoRgagHAq3ANXtHDw0G2TT2NgHDLe%2F52oeND5FdL1aWzzFOLTMwe241GpZ3dImM%2FDhFqge6BfkwMwjruirLbT1pOFceguOgSCQou3hElq4ueJasLmU8655oyTNTzEtj7wootVHfNODiAOQgoW1uxyoHsiI30Y74EJbqikQFVTd3luuLUBtrj1BPJIIcvYncjVQLEm5EfNZE78X2HbcuvwR37oR9jYn1b8aACvwu%2FynulBcqAfCsUsbVnsBT7QsGs%2Fp1FxlEcyoP%2FPXNhlA3dvIUnvYME98d6ld1sNqLSPbs2jip5oRh9eEpKXWQJISHZuMyG69xrWEUhuLyAXlIStm4kw%2FG5s%2FObkyCtVPblDwxRm5yHoRNXe5Rtu9m%2BHhy9C%2Bk%2FfWscWWX1OHpGVsRa%2Fmrs9%2F0vsGINMdwFrpmeg9VXIUQvx4uue74QgDgbE%2B88RXaJV3adXOC0Xpyet0dbUPaJyo8ZFYWYxL3jWUCpPAg24ezXajKl5HKKXjj9%2Bbl48nRX6Cug%2F88LuD4Ptx%2Fhkl5yqY4R4YOtgP%2Fx5hGx7sCWBdBBgYK9qaTaTyEheR6BkSBzI6J%2BhZH7Cgo%2BSc8p%2FaMV0%2Fq8jEVfqOZ46XvhJIJE16Sa02tmlBg1Okofi07HE5wVxojCQ%2BIK%2BBjqkAdTt8aDn9ew890Qi%2FRFSNatudqhbSRWWposGDndNHGVaM7AyEnzcz%2B0mPyV83kTFsUrjiid1S9%2FZpJYwBMqN5FTO7tu5CG6SBUNlTaN7VZZH6CI02uzRYQtOjyi7E%2FZiyUBiGut2uQrmgReaDwJJFlCeKehggW3qJhhqUi4D334oG11HtoBSdy%2BLFowyTSM6A5boLDhLecGB2ZaHTCr0kfdEPctG&X-Amz-Signature=fc883bd8d7f2390825012961be4e9c52458ad4247cd3de6331158a734dca43fd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ULFK3BN%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDYki0P4HzXPoqZzt4n1BihxqozCBejhjJ4ZnS9Ccf8LwIhAMPVhORDZrgbVj%2BRNCD0FPJsS5bcpwD%2FymRE%2F%2B8uFWUPKv8DCH0QABoMNjM3NDIzMTgzODA1Igxc4LS7cXuzoRgagHAq3ANXtHDw0G2TT2NgHDLe%2F52oeND5FdL1aWzzFOLTMwe241GpZ3dImM%2FDhFqge6BfkwMwjruirLbT1pOFceguOgSCQou3hElq4ueJasLmU8655oyTNTzEtj7wootVHfNODiAOQgoW1uxyoHsiI30Y74EJbqikQFVTd3luuLUBtrj1BPJIIcvYncjVQLEm5EfNZE78X2HbcuvwR37oR9jYn1b8aACvwu%2FynulBcqAfCsUsbVnsBT7QsGs%2Fp1FxlEcyoP%2FPXNhlA3dvIUnvYME98d6ld1sNqLSPbs2jip5oRh9eEpKXWQJISHZuMyG69xrWEUhuLyAXlIStm4kw%2FG5s%2FObkyCtVPblDwxRm5yHoRNXe5Rtu9m%2BHhy9C%2Bk%2FfWscWWX1OHpGVsRa%2Fmrs9%2F0vsGINMdwFrpmeg9VXIUQvx4uue74QgDgbE%2B88RXaJV3adXOC0Xpyet0dbUPaJyo8ZFYWYxL3jWUCpPAg24ezXajKl5HKKXjj9%2Bbl48nRX6Cug%2F88LuD4Ptx%2Fhkl5yqY4R4YOtgP%2Fx5hGx7sCWBdBBgYK9qaTaTyEheR6BkSBzI6J%2BhZH7Cgo%2BSc8p%2FaMV0%2Fq8jEVfqOZ46XvhJIJE16Sa02tmlBg1Okofi07HE5wVxojCQ%2BIK%2BBjqkAdTt8aDn9ew890Qi%2FRFSNatudqhbSRWWposGDndNHGVaM7AyEnzcz%2B0mPyV83kTFsUrjiid1S9%2FZpJYwBMqN5FTO7tu5CG6SBUNlTaN7VZZH6CI02uzRYQtOjyi7E%2FZiyUBiGut2uQrmgReaDwJJFlCeKehggW3qJhhqUi4D334oG11HtoBSdy%2BLFowyTSM6A5boLDhLecGB2ZaHTCr0kfdEPctG&X-Amz-Signature=5af4bd52665e3d26a7da4c8dc71f1d9a94e0977739b2741ce73c8efd068f8a00&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
