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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=5a2ce08e911aedc8eadf4cebd4ca53de44f293d53814c4e21ac16c64d4fb79bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=2c223b092dd48d7d738c1a013776e8b66aa16f0dd99cf91995ed967d64241f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=44cac3c6dacfcd51aba140374e6d99503e89c32f78196539c79e292384e046a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=da65f00dc6d52b38a58ce3a806f8c1c16429ed9f4c432395122f337c85bb1a79&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=1a022e69993c0c441a3b0499006497830c9d5d4e656dd6aa8e712e3157813d14&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=f9808be0a9511ab3d2bed4229cc8ba8e23e14c56643e7b306f8fe191568f60a2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET62KDE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAmF1Y5tsRa4SwxiQ02k6rmrELxxCfWLnvvht6u4tov3AiEA2yXReL1tHfbHrW2Mv26wWKKr%2FIlFEFV3Nb2fgT36Z1cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIHOzaL9oDDcZC7nyrcAz0mT7OGTvyg4myJkj7v2YkhP4wradobOuZlMCx0%2B%2FUzcX6iq424mvUND%2FNqs%2FEkV5MoFDm0cEKuOiDVdSOwn83PnwPVDOF6UizweAv%2Bk9dJZM9IqK2lMYT7m9mHPeZdaVaxx1EhbPK1wJCmzLwerN6RT9OQEXB0PxQ%2BcG0LQwi7EAInKmOxNrWKaza0cGPAYOwFvUuCLSBkFy1KK1WZZ19aRdTO7eRuOnm44ZuvsqRewIAEGQzK2racdtzfSvdOCV9NcY8jblMIqhHRYYg9rJu%2BmYOFSfys0YvnGdlIzEU9EijLOtzT70VHjFOCsJGB392JSpOP0Kp20ALWWFJ4LGTYGz4OYf88sPFQse5Hc62uSyQJLwoi7%2BItjBUtq5zCm%2BzzTSutgw6Jko42TQlzP4tFNt03j55HdLc9Lupb00uFRLLUf6yIetPNaP%2FRkOUac5jxhXFYhOFEK7L9CQdX%2Biz2a4EXlJyUh%2F9GZPi%2FLLDEQPwmI2j%2BlRFTRpt8BasGINVuswy5bhrTNX5PNK%2FKY2IoRJPZAUMl45bKJriB%2F1BNiSgPwCd5SGf9LoIO3T%2FGDAALl%2BUn2awyhgIRqC7OV%2FO2s1C%2Fd1ARbKpsfRIThfiKBrHtqPmzJJ20O4SpMKf7tL8GOqUBgH0eyy8OE6z7QKmnnrUGW01LRarU5cMj%2BkQZ%2FGtJFMSllReLXJO1vdVb%2BapxQZavnIr%2FervXXfywMop1WwBBLr%2FPVauSlZSC1pkJKXV33p7QZGxfXAwTIc6GhuzYRHwoQgMPcxnR2Jy1%2BKMwub7t2qLsfMsZAQLl%2BRr5kRBBzxS9gBuQGDeVHtzfN5WmDLQVRxJE0ekyLMX3IiTGpRF5VOZ4nMg%2F&X-Amz-Signature=48a64c1e3fe4a291836bf5290e833e457458454bdf77ba4659524b366f690392&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
