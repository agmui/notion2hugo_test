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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWC55ZX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNCqGhgIi5oQtAQZ%2BLJFTBfoSfhqCC4BeGHzlORVY1jAiEApkf4uJ3gWtTskmw%2ByzkxdSwGJs0bJgzK0WHem0cqXTEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvrzSbQld%2FVbTupVircAxu0ECDOTcV%2B%2BUbdkaX9ttO%2BI5LNyClmKZuejoeBHm3buEg33hLVJZKqoNinC5VIx83%2B%2Bu%2FFArejgR7GQkAzI%2F6UrbAkWk214Jpxl2k2Zo%2FagrNFm9IbjDHIu3YK6nqj7BxoUrW0pxhp488DURyNNPM2xiC1wbxjAfyl4kBrfcCvH0zKp%2FX1LJIhfiP7FoNC4ZfumgJ%2BvL06%2FH08h5ynRgSrLHNfS97zyxX8XbeQjCoPm47xeJLz%2FdYAUIM60IxIkJ1z35wqDfSZ75UP1O%2BmJnGJEkKa6efTusvLS3PNap%2BW5%2BO3lpzlon1YYrpIjEsVIUXzsyQiaS8yxK9VovA3BygI8swdwwVYPYSJKvZKCuDhCSj8RV%2BlGdL3SHg%2BVKBj4XynnMoSlxDlwfFvyUZU4MBPkRBoFHCFvMNo43b3PSNCfLzRuSHcSH0hynWGbtDJXMoFyD0UyutokKVQ%2FdrmtbdE3LkxVJQl8T4YiLj%2BEcUs3bcFBuFnzPmcy3c8JIfi7cqBcumo4P6MF6DDN8l%2B3Z80x54D14iRH%2FVQG2Oe7PXYCqHhi0CUXTO3HbkZqlx%2BW9A0bbVUkp8QZGaJ08uWo8bx376Uzkzgg%2B1nhjketHgtgwzrcaECAoHOIqOvMI6E68EGOqUBj0JwRbIVFMxNR2aXjIMmPCWYd5yE%2FOit1iaGGFSPI%2BUd3nznNQ8lVyEUFgyed0bZFhVrrMZohQTb5wFGwiZXDvpvDpkdB95XB4mj5mKZKmsUdh8l%2FbautvN1PUb80d8HVn%2BlKVcghROnkUbnxZ%2BxIy%2B5%2B%2BmazclszcuKPfW5eKb2QEHOct0xf%2FmOIdcJATRdvNAUU%2BDsaQcjfuGQGGL95iqydfWk&X-Amz-Signature=5e11f51fc8f0e7d2414df8f7a3b6620486e543dcf987f47a73bbd5d9e4269d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWC55ZX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNCqGhgIi5oQtAQZ%2BLJFTBfoSfhqCC4BeGHzlORVY1jAiEApkf4uJ3gWtTskmw%2ByzkxdSwGJs0bJgzK0WHem0cqXTEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvrzSbQld%2FVbTupVircAxu0ECDOTcV%2B%2BUbdkaX9ttO%2BI5LNyClmKZuejoeBHm3buEg33hLVJZKqoNinC5VIx83%2B%2Bu%2FFArejgR7GQkAzI%2F6UrbAkWk214Jpxl2k2Zo%2FagrNFm9IbjDHIu3YK6nqj7BxoUrW0pxhp488DURyNNPM2xiC1wbxjAfyl4kBrfcCvH0zKp%2FX1LJIhfiP7FoNC4ZfumgJ%2BvL06%2FH08h5ynRgSrLHNfS97zyxX8XbeQjCoPm47xeJLz%2FdYAUIM60IxIkJ1z35wqDfSZ75UP1O%2BmJnGJEkKa6efTusvLS3PNap%2BW5%2BO3lpzlon1YYrpIjEsVIUXzsyQiaS8yxK9VovA3BygI8swdwwVYPYSJKvZKCuDhCSj8RV%2BlGdL3SHg%2BVKBj4XynnMoSlxDlwfFvyUZU4MBPkRBoFHCFvMNo43b3PSNCfLzRuSHcSH0hynWGbtDJXMoFyD0UyutokKVQ%2FdrmtbdE3LkxVJQl8T4YiLj%2BEcUs3bcFBuFnzPmcy3c8JIfi7cqBcumo4P6MF6DDN8l%2B3Z80x54D14iRH%2FVQG2Oe7PXYCqHhi0CUXTO3HbkZqlx%2BW9A0bbVUkp8QZGaJ08uWo8bx376Uzkzgg%2B1nhjketHgtgwzrcaECAoHOIqOvMI6E68EGOqUBj0JwRbIVFMxNR2aXjIMmPCWYd5yE%2FOit1iaGGFSPI%2BUd3nznNQ8lVyEUFgyed0bZFhVrrMZohQTb5wFGwiZXDvpvDpkdB95XB4mj5mKZKmsUdh8l%2FbautvN1PUb80d8HVn%2BlKVcghROnkUbnxZ%2BxIy%2B5%2B%2BmazclszcuKPfW5eKb2QEHOct0xf%2FmOIdcJATRdvNAUU%2BDsaQcjfuGQGGL95iqydfWk&X-Amz-Signature=643083f48b0bd75d0a147e6b13fd8702c4a8b369abc8dd9f49c85919b29698e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWC55ZX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNCqGhgIi5oQtAQZ%2BLJFTBfoSfhqCC4BeGHzlORVY1jAiEApkf4uJ3gWtTskmw%2ByzkxdSwGJs0bJgzK0WHem0cqXTEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvrzSbQld%2FVbTupVircAxu0ECDOTcV%2B%2BUbdkaX9ttO%2BI5LNyClmKZuejoeBHm3buEg33hLVJZKqoNinC5VIx83%2B%2Bu%2FFArejgR7GQkAzI%2F6UrbAkWk214Jpxl2k2Zo%2FagrNFm9IbjDHIu3YK6nqj7BxoUrW0pxhp488DURyNNPM2xiC1wbxjAfyl4kBrfcCvH0zKp%2FX1LJIhfiP7FoNC4ZfumgJ%2BvL06%2FH08h5ynRgSrLHNfS97zyxX8XbeQjCoPm47xeJLz%2FdYAUIM60IxIkJ1z35wqDfSZ75UP1O%2BmJnGJEkKa6efTusvLS3PNap%2BW5%2BO3lpzlon1YYrpIjEsVIUXzsyQiaS8yxK9VovA3BygI8swdwwVYPYSJKvZKCuDhCSj8RV%2BlGdL3SHg%2BVKBj4XynnMoSlxDlwfFvyUZU4MBPkRBoFHCFvMNo43b3PSNCfLzRuSHcSH0hynWGbtDJXMoFyD0UyutokKVQ%2FdrmtbdE3LkxVJQl8T4YiLj%2BEcUs3bcFBuFnzPmcy3c8JIfi7cqBcumo4P6MF6DDN8l%2B3Z80x54D14iRH%2FVQG2Oe7PXYCqHhi0CUXTO3HbkZqlx%2BW9A0bbVUkp8QZGaJ08uWo8bx376Uzkzgg%2B1nhjketHgtgwzrcaECAoHOIqOvMI6E68EGOqUBj0JwRbIVFMxNR2aXjIMmPCWYd5yE%2FOit1iaGGFSPI%2BUd3nznNQ8lVyEUFgyed0bZFhVrrMZohQTb5wFGwiZXDvpvDpkdB95XB4mj5mKZKmsUdh8l%2FbautvN1PUb80d8HVn%2BlKVcghROnkUbnxZ%2BxIy%2B5%2B%2BmazclszcuKPfW5eKb2QEHOct0xf%2FmOIdcJATRdvNAUU%2BDsaQcjfuGQGGL95iqydfWk&X-Amz-Signature=ceafd3a1cf396c99192b369a55157811be68e8f63852ef3622d79290e778d381&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWC55ZX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNCqGhgIi5oQtAQZ%2BLJFTBfoSfhqCC4BeGHzlORVY1jAiEApkf4uJ3gWtTskmw%2ByzkxdSwGJs0bJgzK0WHem0cqXTEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvrzSbQld%2FVbTupVircAxu0ECDOTcV%2B%2BUbdkaX9ttO%2BI5LNyClmKZuejoeBHm3buEg33hLVJZKqoNinC5VIx83%2B%2Bu%2FFArejgR7GQkAzI%2F6UrbAkWk214Jpxl2k2Zo%2FagrNFm9IbjDHIu3YK6nqj7BxoUrW0pxhp488DURyNNPM2xiC1wbxjAfyl4kBrfcCvH0zKp%2FX1LJIhfiP7FoNC4ZfumgJ%2BvL06%2FH08h5ynRgSrLHNfS97zyxX8XbeQjCoPm47xeJLz%2FdYAUIM60IxIkJ1z35wqDfSZ75UP1O%2BmJnGJEkKa6efTusvLS3PNap%2BW5%2BO3lpzlon1YYrpIjEsVIUXzsyQiaS8yxK9VovA3BygI8swdwwVYPYSJKvZKCuDhCSj8RV%2BlGdL3SHg%2BVKBj4XynnMoSlxDlwfFvyUZU4MBPkRBoFHCFvMNo43b3PSNCfLzRuSHcSH0hynWGbtDJXMoFyD0UyutokKVQ%2FdrmtbdE3LkxVJQl8T4YiLj%2BEcUs3bcFBuFnzPmcy3c8JIfi7cqBcumo4P6MF6DDN8l%2B3Z80x54D14iRH%2FVQG2Oe7PXYCqHhi0CUXTO3HbkZqlx%2BW9A0bbVUkp8QZGaJ08uWo8bx376Uzkzgg%2B1nhjketHgtgwzrcaECAoHOIqOvMI6E68EGOqUBj0JwRbIVFMxNR2aXjIMmPCWYd5yE%2FOit1iaGGFSPI%2BUd3nznNQ8lVyEUFgyed0bZFhVrrMZohQTb5wFGwiZXDvpvDpkdB95XB4mj5mKZKmsUdh8l%2FbautvN1PUb80d8HVn%2BlKVcghROnkUbnxZ%2BxIy%2B5%2B%2BmazclszcuKPfW5eKb2QEHOct0xf%2FmOIdcJATRdvNAUU%2BDsaQcjfuGQGGL95iqydfWk&X-Amz-Signature=3cadd2a68478f70436cb312e0c1f0c8e8e189ea023a8d3936fa1f5ab2b06260f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWC55ZX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNCqGhgIi5oQtAQZ%2BLJFTBfoSfhqCC4BeGHzlORVY1jAiEApkf4uJ3gWtTskmw%2ByzkxdSwGJs0bJgzK0WHem0cqXTEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvrzSbQld%2FVbTupVircAxu0ECDOTcV%2B%2BUbdkaX9ttO%2BI5LNyClmKZuejoeBHm3buEg33hLVJZKqoNinC5VIx83%2B%2Bu%2FFArejgR7GQkAzI%2F6UrbAkWk214Jpxl2k2Zo%2FagrNFm9IbjDHIu3YK6nqj7BxoUrW0pxhp488DURyNNPM2xiC1wbxjAfyl4kBrfcCvH0zKp%2FX1LJIhfiP7FoNC4ZfumgJ%2BvL06%2FH08h5ynRgSrLHNfS97zyxX8XbeQjCoPm47xeJLz%2FdYAUIM60IxIkJ1z35wqDfSZ75UP1O%2BmJnGJEkKa6efTusvLS3PNap%2BW5%2BO3lpzlon1YYrpIjEsVIUXzsyQiaS8yxK9VovA3BygI8swdwwVYPYSJKvZKCuDhCSj8RV%2BlGdL3SHg%2BVKBj4XynnMoSlxDlwfFvyUZU4MBPkRBoFHCFvMNo43b3PSNCfLzRuSHcSH0hynWGbtDJXMoFyD0UyutokKVQ%2FdrmtbdE3LkxVJQl8T4YiLj%2BEcUs3bcFBuFnzPmcy3c8JIfi7cqBcumo4P6MF6DDN8l%2B3Z80x54D14iRH%2FVQG2Oe7PXYCqHhi0CUXTO3HbkZqlx%2BW9A0bbVUkp8QZGaJ08uWo8bx376Uzkzgg%2B1nhjketHgtgwzrcaECAoHOIqOvMI6E68EGOqUBj0JwRbIVFMxNR2aXjIMmPCWYd5yE%2FOit1iaGGFSPI%2BUd3nznNQ8lVyEUFgyed0bZFhVrrMZohQTb5wFGwiZXDvpvDpkdB95XB4mj5mKZKmsUdh8l%2FbautvN1PUb80d8HVn%2BlKVcghROnkUbnxZ%2BxIy%2B5%2B%2BmazclszcuKPfW5eKb2QEHOct0xf%2FmOIdcJATRdvNAUU%2BDsaQcjfuGQGGL95iqydfWk&X-Amz-Signature=79779bcfa79c744cb0e3ef2ab204e3fddd113f61885031eeb4c9af48390d853c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWC55ZX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNCqGhgIi5oQtAQZ%2BLJFTBfoSfhqCC4BeGHzlORVY1jAiEApkf4uJ3gWtTskmw%2ByzkxdSwGJs0bJgzK0WHem0cqXTEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvrzSbQld%2FVbTupVircAxu0ECDOTcV%2B%2BUbdkaX9ttO%2BI5LNyClmKZuejoeBHm3buEg33hLVJZKqoNinC5VIx83%2B%2Bu%2FFArejgR7GQkAzI%2F6UrbAkWk214Jpxl2k2Zo%2FagrNFm9IbjDHIu3YK6nqj7BxoUrW0pxhp488DURyNNPM2xiC1wbxjAfyl4kBrfcCvH0zKp%2FX1LJIhfiP7FoNC4ZfumgJ%2BvL06%2FH08h5ynRgSrLHNfS97zyxX8XbeQjCoPm47xeJLz%2FdYAUIM60IxIkJ1z35wqDfSZ75UP1O%2BmJnGJEkKa6efTusvLS3PNap%2BW5%2BO3lpzlon1YYrpIjEsVIUXzsyQiaS8yxK9VovA3BygI8swdwwVYPYSJKvZKCuDhCSj8RV%2BlGdL3SHg%2BVKBj4XynnMoSlxDlwfFvyUZU4MBPkRBoFHCFvMNo43b3PSNCfLzRuSHcSH0hynWGbtDJXMoFyD0UyutokKVQ%2FdrmtbdE3LkxVJQl8T4YiLj%2BEcUs3bcFBuFnzPmcy3c8JIfi7cqBcumo4P6MF6DDN8l%2B3Z80x54D14iRH%2FVQG2Oe7PXYCqHhi0CUXTO3HbkZqlx%2BW9A0bbVUkp8QZGaJ08uWo8bx376Uzkzgg%2B1nhjketHgtgwzrcaECAoHOIqOvMI6E68EGOqUBj0JwRbIVFMxNR2aXjIMmPCWYd5yE%2FOit1iaGGFSPI%2BUd3nznNQ8lVyEUFgyed0bZFhVrrMZohQTb5wFGwiZXDvpvDpkdB95XB4mj5mKZKmsUdh8l%2FbautvN1PUb80d8HVn%2BlKVcghROnkUbnxZ%2BxIy%2B5%2B%2BmazclszcuKPfW5eKb2QEHOct0xf%2FmOIdcJATRdvNAUU%2BDsaQcjfuGQGGL95iqydfWk&X-Amz-Signature=da667234ec1d6b379dc87892f1dbce52dbe438696650a46724bfef0262d28c43&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWC55ZX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNCqGhgIi5oQtAQZ%2BLJFTBfoSfhqCC4BeGHzlORVY1jAiEApkf4uJ3gWtTskmw%2ByzkxdSwGJs0bJgzK0WHem0cqXTEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvrzSbQld%2FVbTupVircAxu0ECDOTcV%2B%2BUbdkaX9ttO%2BI5LNyClmKZuejoeBHm3buEg33hLVJZKqoNinC5VIx83%2B%2Bu%2FFArejgR7GQkAzI%2F6UrbAkWk214Jpxl2k2Zo%2FagrNFm9IbjDHIu3YK6nqj7BxoUrW0pxhp488DURyNNPM2xiC1wbxjAfyl4kBrfcCvH0zKp%2FX1LJIhfiP7FoNC4ZfumgJ%2BvL06%2FH08h5ynRgSrLHNfS97zyxX8XbeQjCoPm47xeJLz%2FdYAUIM60IxIkJ1z35wqDfSZ75UP1O%2BmJnGJEkKa6efTusvLS3PNap%2BW5%2BO3lpzlon1YYrpIjEsVIUXzsyQiaS8yxK9VovA3BygI8swdwwVYPYSJKvZKCuDhCSj8RV%2BlGdL3SHg%2BVKBj4XynnMoSlxDlwfFvyUZU4MBPkRBoFHCFvMNo43b3PSNCfLzRuSHcSH0hynWGbtDJXMoFyD0UyutokKVQ%2FdrmtbdE3LkxVJQl8T4YiLj%2BEcUs3bcFBuFnzPmcy3c8JIfi7cqBcumo4P6MF6DDN8l%2B3Z80x54D14iRH%2FVQG2Oe7PXYCqHhi0CUXTO3HbkZqlx%2BW9A0bbVUkp8QZGaJ08uWo8bx376Uzkzgg%2B1nhjketHgtgwzrcaECAoHOIqOvMI6E68EGOqUBj0JwRbIVFMxNR2aXjIMmPCWYd5yE%2FOit1iaGGFSPI%2BUd3nznNQ8lVyEUFgyed0bZFhVrrMZohQTb5wFGwiZXDvpvDpkdB95XB4mj5mKZKmsUdh8l%2FbautvN1PUb80d8HVn%2BlKVcghROnkUbnxZ%2BxIy%2B5%2B%2BmazclszcuKPfW5eKb2QEHOct0xf%2FmOIdcJATRdvNAUU%2BDsaQcjfuGQGGL95iqydfWk&X-Amz-Signature=a3729d3f3794bce971233b18b64d7d30a8abbdc5d9699ab0f302526c34cb5e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
