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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMDLRVM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCe0jkrhtD8JDSManHInKezxsrxikZhoHlNt5N5tdShDgIgPBDmrcctzAcCZge2loVNghC88qfxS%2BwWSegYAG98fB8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvIw4cxZPQjMcp4uCrcAxIATFxVzWKQ5MA16aX7oaqJo14ubwPPslSfReVQs1JcDrXFSUhuxueanROVNTY227OX9s1n5cLoNBAtNNsVN8%2F%2BKKKKjg8XpuH8LbzGMlUu8Hy9m7lqUGKqm8qnbZcsZFB7YqQvf3DuWedzRV8T8ek4Zib%2FJSnotnyA61raTynOH8hVLJrLxtpj05vmrBAuGdbBYVdNQtzXK9ugIiC4io2cgOXnTiFxYaA9aG36ZaTQtKnEejouXVuaDAoA0CtG1%2BVbl%2F0ym7QFNj0%2BMokewEON%2FhvLlXClJKgB4X8%2Fqtg%2FQO6v199jwkgpQU5o347JLZuj3r0jje%2BQSA%2BF4m7HCBjEqBNXXiGIVrb2BeX1YSO2Fw3Bys5lsEiPftnW8B9p5xi7ssqFwAcyUsEB5fkITIZHcW%2BSv7UX%2FDZw%2BPrRjKFFh2XNsGHuOu7lEQ87EpJwV5G%2FbteEO8viC4lIOkHdPiT3VMpUgB4TS1b5xDpHyJZwcva%2Bvz8ABS8S9GskIt3doTNG0isTyTyyyGoeNFgso5SkJNBIDz6BGlATbMXKP%2BBDpjAh3TjS%2FPzPe2Fu0xVR2iUw1aoW5HrBTAe21xENCZkg%2BYu3oZp267HSLIkhtipvqOIwCSIw5sR2eqzbMK3Ez70GOqUBhKjbe9L13quJ0La12DVpgyUf05XkLOA1WEdSYm%2FuMyN7WnjCx3mYqFQkNpaza5%2BiYu4VDj%2BhR7HHO8Ll19LArCzvnDU2ACjjK6Ow7sBp1HRBCdUdFBc03RGf1DMqQKLepyz1FJtSSU4u5pILMSGoaJ23gxY%2Fb5LnJ0vlXqvEihpKMVWegOUA1StUfvrGj3tqIscRUt3cTdAQW3DxjRh7gaq%2FhyOL&X-Amz-Signature=b20e9f79d4313a42d1dfecb796142c31d085955208f2226644274ec0be608345&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMDLRVM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCe0jkrhtD8JDSManHInKezxsrxikZhoHlNt5N5tdShDgIgPBDmrcctzAcCZge2loVNghC88qfxS%2BwWSegYAG98fB8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvIw4cxZPQjMcp4uCrcAxIATFxVzWKQ5MA16aX7oaqJo14ubwPPslSfReVQs1JcDrXFSUhuxueanROVNTY227OX9s1n5cLoNBAtNNsVN8%2F%2BKKKKjg8XpuH8LbzGMlUu8Hy9m7lqUGKqm8qnbZcsZFB7YqQvf3DuWedzRV8T8ek4Zib%2FJSnotnyA61raTynOH8hVLJrLxtpj05vmrBAuGdbBYVdNQtzXK9ugIiC4io2cgOXnTiFxYaA9aG36ZaTQtKnEejouXVuaDAoA0CtG1%2BVbl%2F0ym7QFNj0%2BMokewEON%2FhvLlXClJKgB4X8%2Fqtg%2FQO6v199jwkgpQU5o347JLZuj3r0jje%2BQSA%2BF4m7HCBjEqBNXXiGIVrb2BeX1YSO2Fw3Bys5lsEiPftnW8B9p5xi7ssqFwAcyUsEB5fkITIZHcW%2BSv7UX%2FDZw%2BPrRjKFFh2XNsGHuOu7lEQ87EpJwV5G%2FbteEO8viC4lIOkHdPiT3VMpUgB4TS1b5xDpHyJZwcva%2Bvz8ABS8S9GskIt3doTNG0isTyTyyyGoeNFgso5SkJNBIDz6BGlATbMXKP%2BBDpjAh3TjS%2FPzPe2Fu0xVR2iUw1aoW5HrBTAe21xENCZkg%2BYu3oZp267HSLIkhtipvqOIwCSIw5sR2eqzbMK3Ez70GOqUBhKjbe9L13quJ0La12DVpgyUf05XkLOA1WEdSYm%2FuMyN7WnjCx3mYqFQkNpaza5%2BiYu4VDj%2BhR7HHO8Ll19LArCzvnDU2ACjjK6Ow7sBp1HRBCdUdFBc03RGf1DMqQKLepyz1FJtSSU4u5pILMSGoaJ23gxY%2Fb5LnJ0vlXqvEihpKMVWegOUA1StUfvrGj3tqIscRUt3cTdAQW3DxjRh7gaq%2FhyOL&X-Amz-Signature=3eeda841c968f64f00031d718541a4b9d267c3698866bb2438299443b7f11623&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMDLRVM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCe0jkrhtD8JDSManHInKezxsrxikZhoHlNt5N5tdShDgIgPBDmrcctzAcCZge2loVNghC88qfxS%2BwWSegYAG98fB8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvIw4cxZPQjMcp4uCrcAxIATFxVzWKQ5MA16aX7oaqJo14ubwPPslSfReVQs1JcDrXFSUhuxueanROVNTY227OX9s1n5cLoNBAtNNsVN8%2F%2BKKKKjg8XpuH8LbzGMlUu8Hy9m7lqUGKqm8qnbZcsZFB7YqQvf3DuWedzRV8T8ek4Zib%2FJSnotnyA61raTynOH8hVLJrLxtpj05vmrBAuGdbBYVdNQtzXK9ugIiC4io2cgOXnTiFxYaA9aG36ZaTQtKnEejouXVuaDAoA0CtG1%2BVbl%2F0ym7QFNj0%2BMokewEON%2FhvLlXClJKgB4X8%2Fqtg%2FQO6v199jwkgpQU5o347JLZuj3r0jje%2BQSA%2BF4m7HCBjEqBNXXiGIVrb2BeX1YSO2Fw3Bys5lsEiPftnW8B9p5xi7ssqFwAcyUsEB5fkITIZHcW%2BSv7UX%2FDZw%2BPrRjKFFh2XNsGHuOu7lEQ87EpJwV5G%2FbteEO8viC4lIOkHdPiT3VMpUgB4TS1b5xDpHyJZwcva%2Bvz8ABS8S9GskIt3doTNG0isTyTyyyGoeNFgso5SkJNBIDz6BGlATbMXKP%2BBDpjAh3TjS%2FPzPe2Fu0xVR2iUw1aoW5HrBTAe21xENCZkg%2BYu3oZp267HSLIkhtipvqOIwCSIw5sR2eqzbMK3Ez70GOqUBhKjbe9L13quJ0La12DVpgyUf05XkLOA1WEdSYm%2FuMyN7WnjCx3mYqFQkNpaza5%2BiYu4VDj%2BhR7HHO8Ll19LArCzvnDU2ACjjK6Ow7sBp1HRBCdUdFBc03RGf1DMqQKLepyz1FJtSSU4u5pILMSGoaJ23gxY%2Fb5LnJ0vlXqvEihpKMVWegOUA1StUfvrGj3tqIscRUt3cTdAQW3DxjRh7gaq%2FhyOL&X-Amz-Signature=44bd23da4e90b1d57b0b9ab12370663cdf5b84dfecea125adcb827e6bbfae8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMDLRVM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCe0jkrhtD8JDSManHInKezxsrxikZhoHlNt5N5tdShDgIgPBDmrcctzAcCZge2loVNghC88qfxS%2BwWSegYAG98fB8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvIw4cxZPQjMcp4uCrcAxIATFxVzWKQ5MA16aX7oaqJo14ubwPPslSfReVQs1JcDrXFSUhuxueanROVNTY227OX9s1n5cLoNBAtNNsVN8%2F%2BKKKKjg8XpuH8LbzGMlUu8Hy9m7lqUGKqm8qnbZcsZFB7YqQvf3DuWedzRV8T8ek4Zib%2FJSnotnyA61raTynOH8hVLJrLxtpj05vmrBAuGdbBYVdNQtzXK9ugIiC4io2cgOXnTiFxYaA9aG36ZaTQtKnEejouXVuaDAoA0CtG1%2BVbl%2F0ym7QFNj0%2BMokewEON%2FhvLlXClJKgB4X8%2Fqtg%2FQO6v199jwkgpQU5o347JLZuj3r0jje%2BQSA%2BF4m7HCBjEqBNXXiGIVrb2BeX1YSO2Fw3Bys5lsEiPftnW8B9p5xi7ssqFwAcyUsEB5fkITIZHcW%2BSv7UX%2FDZw%2BPrRjKFFh2XNsGHuOu7lEQ87EpJwV5G%2FbteEO8viC4lIOkHdPiT3VMpUgB4TS1b5xDpHyJZwcva%2Bvz8ABS8S9GskIt3doTNG0isTyTyyyGoeNFgso5SkJNBIDz6BGlATbMXKP%2BBDpjAh3TjS%2FPzPe2Fu0xVR2iUw1aoW5HrBTAe21xENCZkg%2BYu3oZp267HSLIkhtipvqOIwCSIw5sR2eqzbMK3Ez70GOqUBhKjbe9L13quJ0La12DVpgyUf05XkLOA1WEdSYm%2FuMyN7WnjCx3mYqFQkNpaza5%2BiYu4VDj%2BhR7HHO8Ll19LArCzvnDU2ACjjK6Ow7sBp1HRBCdUdFBc03RGf1DMqQKLepyz1FJtSSU4u5pILMSGoaJ23gxY%2Fb5LnJ0vlXqvEihpKMVWegOUA1StUfvrGj3tqIscRUt3cTdAQW3DxjRh7gaq%2FhyOL&X-Amz-Signature=e9379490aeaeefbfd44433ae4b503828dbc1ba63a479437116db500fe0853f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMDLRVM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCe0jkrhtD8JDSManHInKezxsrxikZhoHlNt5N5tdShDgIgPBDmrcctzAcCZge2loVNghC88qfxS%2BwWSegYAG98fB8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvIw4cxZPQjMcp4uCrcAxIATFxVzWKQ5MA16aX7oaqJo14ubwPPslSfReVQs1JcDrXFSUhuxueanROVNTY227OX9s1n5cLoNBAtNNsVN8%2F%2BKKKKjg8XpuH8LbzGMlUu8Hy9m7lqUGKqm8qnbZcsZFB7YqQvf3DuWedzRV8T8ek4Zib%2FJSnotnyA61raTynOH8hVLJrLxtpj05vmrBAuGdbBYVdNQtzXK9ugIiC4io2cgOXnTiFxYaA9aG36ZaTQtKnEejouXVuaDAoA0CtG1%2BVbl%2F0ym7QFNj0%2BMokewEON%2FhvLlXClJKgB4X8%2Fqtg%2FQO6v199jwkgpQU5o347JLZuj3r0jje%2BQSA%2BF4m7HCBjEqBNXXiGIVrb2BeX1YSO2Fw3Bys5lsEiPftnW8B9p5xi7ssqFwAcyUsEB5fkITIZHcW%2BSv7UX%2FDZw%2BPrRjKFFh2XNsGHuOu7lEQ87EpJwV5G%2FbteEO8viC4lIOkHdPiT3VMpUgB4TS1b5xDpHyJZwcva%2Bvz8ABS8S9GskIt3doTNG0isTyTyyyGoeNFgso5SkJNBIDz6BGlATbMXKP%2BBDpjAh3TjS%2FPzPe2Fu0xVR2iUw1aoW5HrBTAe21xENCZkg%2BYu3oZp267HSLIkhtipvqOIwCSIw5sR2eqzbMK3Ez70GOqUBhKjbe9L13quJ0La12DVpgyUf05XkLOA1WEdSYm%2FuMyN7WnjCx3mYqFQkNpaza5%2BiYu4VDj%2BhR7HHO8Ll19LArCzvnDU2ACjjK6Ow7sBp1HRBCdUdFBc03RGf1DMqQKLepyz1FJtSSU4u5pILMSGoaJ23gxY%2Fb5LnJ0vlXqvEihpKMVWegOUA1StUfvrGj3tqIscRUt3cTdAQW3DxjRh7gaq%2FhyOL&X-Amz-Signature=a546c40429731d703923c39365e8748f179b39692674f3cc5e3585a1589a3092&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMDLRVM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCe0jkrhtD8JDSManHInKezxsrxikZhoHlNt5N5tdShDgIgPBDmrcctzAcCZge2loVNghC88qfxS%2BwWSegYAG98fB8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvIw4cxZPQjMcp4uCrcAxIATFxVzWKQ5MA16aX7oaqJo14ubwPPslSfReVQs1JcDrXFSUhuxueanROVNTY227OX9s1n5cLoNBAtNNsVN8%2F%2BKKKKjg8XpuH8LbzGMlUu8Hy9m7lqUGKqm8qnbZcsZFB7YqQvf3DuWedzRV8T8ek4Zib%2FJSnotnyA61raTynOH8hVLJrLxtpj05vmrBAuGdbBYVdNQtzXK9ugIiC4io2cgOXnTiFxYaA9aG36ZaTQtKnEejouXVuaDAoA0CtG1%2BVbl%2F0ym7QFNj0%2BMokewEON%2FhvLlXClJKgB4X8%2Fqtg%2FQO6v199jwkgpQU5o347JLZuj3r0jje%2BQSA%2BF4m7HCBjEqBNXXiGIVrb2BeX1YSO2Fw3Bys5lsEiPftnW8B9p5xi7ssqFwAcyUsEB5fkITIZHcW%2BSv7UX%2FDZw%2BPrRjKFFh2XNsGHuOu7lEQ87EpJwV5G%2FbteEO8viC4lIOkHdPiT3VMpUgB4TS1b5xDpHyJZwcva%2Bvz8ABS8S9GskIt3doTNG0isTyTyyyGoeNFgso5SkJNBIDz6BGlATbMXKP%2BBDpjAh3TjS%2FPzPe2Fu0xVR2iUw1aoW5HrBTAe21xENCZkg%2BYu3oZp267HSLIkhtipvqOIwCSIw5sR2eqzbMK3Ez70GOqUBhKjbe9L13quJ0La12DVpgyUf05XkLOA1WEdSYm%2FuMyN7WnjCx3mYqFQkNpaza5%2BiYu4VDj%2BhR7HHO8Ll19LArCzvnDU2ACjjK6Ow7sBp1HRBCdUdFBc03RGf1DMqQKLepyz1FJtSSU4u5pILMSGoaJ23gxY%2Fb5LnJ0vlXqvEihpKMVWegOUA1StUfvrGj3tqIscRUt3cTdAQW3DxjRh7gaq%2FhyOL&X-Amz-Signature=50a6bc55905432ecacb81a68e58b589b74deb82bfbb85e8e89475c2a7ea12208&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMDLRVM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCe0jkrhtD8JDSManHInKezxsrxikZhoHlNt5N5tdShDgIgPBDmrcctzAcCZge2loVNghC88qfxS%2BwWSegYAG98fB8qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvIw4cxZPQjMcp4uCrcAxIATFxVzWKQ5MA16aX7oaqJo14ubwPPslSfReVQs1JcDrXFSUhuxueanROVNTY227OX9s1n5cLoNBAtNNsVN8%2F%2BKKKKjg8XpuH8LbzGMlUu8Hy9m7lqUGKqm8qnbZcsZFB7YqQvf3DuWedzRV8T8ek4Zib%2FJSnotnyA61raTynOH8hVLJrLxtpj05vmrBAuGdbBYVdNQtzXK9ugIiC4io2cgOXnTiFxYaA9aG36ZaTQtKnEejouXVuaDAoA0CtG1%2BVbl%2F0ym7QFNj0%2BMokewEON%2FhvLlXClJKgB4X8%2Fqtg%2FQO6v199jwkgpQU5o347JLZuj3r0jje%2BQSA%2BF4m7HCBjEqBNXXiGIVrb2BeX1YSO2Fw3Bys5lsEiPftnW8B9p5xi7ssqFwAcyUsEB5fkITIZHcW%2BSv7UX%2FDZw%2BPrRjKFFh2XNsGHuOu7lEQ87EpJwV5G%2FbteEO8viC4lIOkHdPiT3VMpUgB4TS1b5xDpHyJZwcva%2Bvz8ABS8S9GskIt3doTNG0isTyTyyyGoeNFgso5SkJNBIDz6BGlATbMXKP%2BBDpjAh3TjS%2FPzPe2Fu0xVR2iUw1aoW5HrBTAe21xENCZkg%2BYu3oZp267HSLIkhtipvqOIwCSIw5sR2eqzbMK3Ez70GOqUBhKjbe9L13quJ0La12DVpgyUf05XkLOA1WEdSYm%2FuMyN7WnjCx3mYqFQkNpaza5%2BiYu4VDj%2BhR7HHO8Ll19LArCzvnDU2ACjjK6Ow7sBp1HRBCdUdFBc03RGf1DMqQKLepyz1FJtSSU4u5pILMSGoaJ23gxY%2Fb5LnJ0vlXqvEihpKMVWegOUA1StUfvrGj3tqIscRUt3cTdAQW3DxjRh7gaq%2FhyOL&X-Amz-Signature=f27a46ee86743ac0c88f520a96a8c2f50aaaf3ff285e03803b83404467de9c13&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
