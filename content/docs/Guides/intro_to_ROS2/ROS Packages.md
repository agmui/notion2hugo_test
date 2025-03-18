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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQPLCC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIhcrMZMgjm3o8YHySSCvbbOizM5ucYoOI5Yo0X%2FKKwIgfVza%2BxxOoe%2Bc%2BEDD7X9o4xqjVfh%2BsG5BzEiP1J3gGHsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKxjd5AGYPMi13G4WyrcA7BneT8TKX9UR8MT0yWklzV7bS6j3kymF2lwU7sWtpgrAwCYVDfbhKYvgXvffArmfBtN1sY038BHAwRPbtuvLEgvLXhI0eJU%2ByJyfXxP%2FaCQmsY1%2FrFdqqhp48%2FHZrhCTab7IvVMGZYvELwFw0okX6Q2YVakh1fkfTTVCYA%2FghUl4kSjdBw%2BDZKausM9pXAXNCcyRmpfBHVRJOvqbo9rt1Z%2FVgU5FlMWMYB6ePgD%2FkGkINVUyum14dg1DdyQb7mfSjbKMAzhHsuEaWy9V%2BqezFeh6PL6PRF%2F%2F%2FIruSfDXhq7DWNJaSB6cVnZmQmP7Yxhu0ffUu5kvsxNsbIXhrM7J4k%2B0d0Zjgg%2FWsNK%2BwdyijxV13mrZHuY2oSJTHND9%2F3%2BAQtRmjjMkKClNNxajxqfWC%2Fusc1x2Pjng8LYX0yaHjiWuAV%2FKet8AEteFKunyX%2FZv26KwHJ%2BCa10gTsa5CFCiYXthAXF9LuV8HVoh2XskQEaeXNXeut5FsyX1NxNqn6ENZiRUPdzew0Pc4%2BvU1BEoUEcM0mMpcRlvCzDae5YLwV2hGIrgPav2KsU04V4OBeK3ypmnxMvPpMR2duvvUBBPv1vJ50JvACL9zoVRX8GAO2wYa4htweUG%2FPm45OWMN%2FJ474GOqUByMSB%2BG%2BtmsPxHCTdf0aNr9gW0ZSkWxTT%2BNUePr9vbDwvMZLYJNGi7PcYHKFrsdHVSQAf66sL%2Ffe0%2FQDRbJ9UprKvHvf%2Fv0L0RzyHjixVlEKlkdiuejHM2UU%2FOwX5oEw9Fc6fmSn%2Fg98QGQEau%2BKnCkunktV%2FuUY5GEprGXOug4tEGkQOM0hJ5Oc7AAxolZ4p7bgc9x%2B2def4lZzSaFA8A2gfdIaF&X-Amz-Signature=936d766a4e6a67d552e895973609628bc087516026b853643705492e91ae57c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQPLCC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIhcrMZMgjm3o8YHySSCvbbOizM5ucYoOI5Yo0X%2FKKwIgfVza%2BxxOoe%2Bc%2BEDD7X9o4xqjVfh%2BsG5BzEiP1J3gGHsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKxjd5AGYPMi13G4WyrcA7BneT8TKX9UR8MT0yWklzV7bS6j3kymF2lwU7sWtpgrAwCYVDfbhKYvgXvffArmfBtN1sY038BHAwRPbtuvLEgvLXhI0eJU%2ByJyfXxP%2FaCQmsY1%2FrFdqqhp48%2FHZrhCTab7IvVMGZYvELwFw0okX6Q2YVakh1fkfTTVCYA%2FghUl4kSjdBw%2BDZKausM9pXAXNCcyRmpfBHVRJOvqbo9rt1Z%2FVgU5FlMWMYB6ePgD%2FkGkINVUyum14dg1DdyQb7mfSjbKMAzhHsuEaWy9V%2BqezFeh6PL6PRF%2F%2F%2FIruSfDXhq7DWNJaSB6cVnZmQmP7Yxhu0ffUu5kvsxNsbIXhrM7J4k%2B0d0Zjgg%2FWsNK%2BwdyijxV13mrZHuY2oSJTHND9%2F3%2BAQtRmjjMkKClNNxajxqfWC%2Fusc1x2Pjng8LYX0yaHjiWuAV%2FKet8AEteFKunyX%2FZv26KwHJ%2BCa10gTsa5CFCiYXthAXF9LuV8HVoh2XskQEaeXNXeut5FsyX1NxNqn6ENZiRUPdzew0Pc4%2BvU1BEoUEcM0mMpcRlvCzDae5YLwV2hGIrgPav2KsU04V4OBeK3ypmnxMvPpMR2duvvUBBPv1vJ50JvACL9zoVRX8GAO2wYa4htweUG%2FPm45OWMN%2FJ474GOqUByMSB%2BG%2BtmsPxHCTdf0aNr9gW0ZSkWxTT%2BNUePr9vbDwvMZLYJNGi7PcYHKFrsdHVSQAf66sL%2Ffe0%2FQDRbJ9UprKvHvf%2Fv0L0RzyHjixVlEKlkdiuejHM2UU%2FOwX5oEw9Fc6fmSn%2Fg98QGQEau%2BKnCkunktV%2FuUY5GEprGXOug4tEGkQOM0hJ5Oc7AAxolZ4p7bgc9x%2B2def4lZzSaFA8A2gfdIaF&X-Amz-Signature=d214aeece8ef275368e389dea686af494698e9fb8ba77c21d94a231af747ef96&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQPLCC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIhcrMZMgjm3o8YHySSCvbbOizM5ucYoOI5Yo0X%2FKKwIgfVza%2BxxOoe%2Bc%2BEDD7X9o4xqjVfh%2BsG5BzEiP1J3gGHsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKxjd5AGYPMi13G4WyrcA7BneT8TKX9UR8MT0yWklzV7bS6j3kymF2lwU7sWtpgrAwCYVDfbhKYvgXvffArmfBtN1sY038BHAwRPbtuvLEgvLXhI0eJU%2ByJyfXxP%2FaCQmsY1%2FrFdqqhp48%2FHZrhCTab7IvVMGZYvELwFw0okX6Q2YVakh1fkfTTVCYA%2FghUl4kSjdBw%2BDZKausM9pXAXNCcyRmpfBHVRJOvqbo9rt1Z%2FVgU5FlMWMYB6ePgD%2FkGkINVUyum14dg1DdyQb7mfSjbKMAzhHsuEaWy9V%2BqezFeh6PL6PRF%2F%2F%2FIruSfDXhq7DWNJaSB6cVnZmQmP7Yxhu0ffUu5kvsxNsbIXhrM7J4k%2B0d0Zjgg%2FWsNK%2BwdyijxV13mrZHuY2oSJTHND9%2F3%2BAQtRmjjMkKClNNxajxqfWC%2Fusc1x2Pjng8LYX0yaHjiWuAV%2FKet8AEteFKunyX%2FZv26KwHJ%2BCa10gTsa5CFCiYXthAXF9LuV8HVoh2XskQEaeXNXeut5FsyX1NxNqn6ENZiRUPdzew0Pc4%2BvU1BEoUEcM0mMpcRlvCzDae5YLwV2hGIrgPav2KsU04V4OBeK3ypmnxMvPpMR2duvvUBBPv1vJ50JvACL9zoVRX8GAO2wYa4htweUG%2FPm45OWMN%2FJ474GOqUByMSB%2BG%2BtmsPxHCTdf0aNr9gW0ZSkWxTT%2BNUePr9vbDwvMZLYJNGi7PcYHKFrsdHVSQAf66sL%2Ffe0%2FQDRbJ9UprKvHvf%2Fv0L0RzyHjixVlEKlkdiuejHM2UU%2FOwX5oEw9Fc6fmSn%2Fg98QGQEau%2BKnCkunktV%2FuUY5GEprGXOug4tEGkQOM0hJ5Oc7AAxolZ4p7bgc9x%2B2def4lZzSaFA8A2gfdIaF&X-Amz-Signature=66bba7e4ae1ccef4e25d466c70044415f2c90ae51e8955b844c90ae1ff995b89&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQPLCC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIhcrMZMgjm3o8YHySSCvbbOizM5ucYoOI5Yo0X%2FKKwIgfVza%2BxxOoe%2Bc%2BEDD7X9o4xqjVfh%2BsG5BzEiP1J3gGHsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKxjd5AGYPMi13G4WyrcA7BneT8TKX9UR8MT0yWklzV7bS6j3kymF2lwU7sWtpgrAwCYVDfbhKYvgXvffArmfBtN1sY038BHAwRPbtuvLEgvLXhI0eJU%2ByJyfXxP%2FaCQmsY1%2FrFdqqhp48%2FHZrhCTab7IvVMGZYvELwFw0okX6Q2YVakh1fkfTTVCYA%2FghUl4kSjdBw%2BDZKausM9pXAXNCcyRmpfBHVRJOvqbo9rt1Z%2FVgU5FlMWMYB6ePgD%2FkGkINVUyum14dg1DdyQb7mfSjbKMAzhHsuEaWy9V%2BqezFeh6PL6PRF%2F%2F%2FIruSfDXhq7DWNJaSB6cVnZmQmP7Yxhu0ffUu5kvsxNsbIXhrM7J4k%2B0d0Zjgg%2FWsNK%2BwdyijxV13mrZHuY2oSJTHND9%2F3%2BAQtRmjjMkKClNNxajxqfWC%2Fusc1x2Pjng8LYX0yaHjiWuAV%2FKet8AEteFKunyX%2FZv26KwHJ%2BCa10gTsa5CFCiYXthAXF9LuV8HVoh2XskQEaeXNXeut5FsyX1NxNqn6ENZiRUPdzew0Pc4%2BvU1BEoUEcM0mMpcRlvCzDae5YLwV2hGIrgPav2KsU04V4OBeK3ypmnxMvPpMR2duvvUBBPv1vJ50JvACL9zoVRX8GAO2wYa4htweUG%2FPm45OWMN%2FJ474GOqUByMSB%2BG%2BtmsPxHCTdf0aNr9gW0ZSkWxTT%2BNUePr9vbDwvMZLYJNGi7PcYHKFrsdHVSQAf66sL%2Ffe0%2FQDRbJ9UprKvHvf%2Fv0L0RzyHjixVlEKlkdiuejHM2UU%2FOwX5oEw9Fc6fmSn%2Fg98QGQEau%2BKnCkunktV%2FuUY5GEprGXOug4tEGkQOM0hJ5Oc7AAxolZ4p7bgc9x%2B2def4lZzSaFA8A2gfdIaF&X-Amz-Signature=4db6ff6c8f4bd02d697a62f2fa6c51784b7c594db934fc01d140b1ebb43da520&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQPLCC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIhcrMZMgjm3o8YHySSCvbbOizM5ucYoOI5Yo0X%2FKKwIgfVza%2BxxOoe%2Bc%2BEDD7X9o4xqjVfh%2BsG5BzEiP1J3gGHsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKxjd5AGYPMi13G4WyrcA7BneT8TKX9UR8MT0yWklzV7bS6j3kymF2lwU7sWtpgrAwCYVDfbhKYvgXvffArmfBtN1sY038BHAwRPbtuvLEgvLXhI0eJU%2ByJyfXxP%2FaCQmsY1%2FrFdqqhp48%2FHZrhCTab7IvVMGZYvELwFw0okX6Q2YVakh1fkfTTVCYA%2FghUl4kSjdBw%2BDZKausM9pXAXNCcyRmpfBHVRJOvqbo9rt1Z%2FVgU5FlMWMYB6ePgD%2FkGkINVUyum14dg1DdyQb7mfSjbKMAzhHsuEaWy9V%2BqezFeh6PL6PRF%2F%2F%2FIruSfDXhq7DWNJaSB6cVnZmQmP7Yxhu0ffUu5kvsxNsbIXhrM7J4k%2B0d0Zjgg%2FWsNK%2BwdyijxV13mrZHuY2oSJTHND9%2F3%2BAQtRmjjMkKClNNxajxqfWC%2Fusc1x2Pjng8LYX0yaHjiWuAV%2FKet8AEteFKunyX%2FZv26KwHJ%2BCa10gTsa5CFCiYXthAXF9LuV8HVoh2XskQEaeXNXeut5FsyX1NxNqn6ENZiRUPdzew0Pc4%2BvU1BEoUEcM0mMpcRlvCzDae5YLwV2hGIrgPav2KsU04V4OBeK3ypmnxMvPpMR2duvvUBBPv1vJ50JvACL9zoVRX8GAO2wYa4htweUG%2FPm45OWMN%2FJ474GOqUByMSB%2BG%2BtmsPxHCTdf0aNr9gW0ZSkWxTT%2BNUePr9vbDwvMZLYJNGi7PcYHKFrsdHVSQAf66sL%2Ffe0%2FQDRbJ9UprKvHvf%2Fv0L0RzyHjixVlEKlkdiuejHM2UU%2FOwX5oEw9Fc6fmSn%2Fg98QGQEau%2BKnCkunktV%2FuUY5GEprGXOug4tEGkQOM0hJ5Oc7AAxolZ4p7bgc9x%2B2def4lZzSaFA8A2gfdIaF&X-Amz-Signature=c27c81810112466c4b553581d79c95a24c610470c3cc2df345d249fbaa7f6834&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQPLCC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIhcrMZMgjm3o8YHySSCvbbOizM5ucYoOI5Yo0X%2FKKwIgfVza%2BxxOoe%2Bc%2BEDD7X9o4xqjVfh%2BsG5BzEiP1J3gGHsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKxjd5AGYPMi13G4WyrcA7BneT8TKX9UR8MT0yWklzV7bS6j3kymF2lwU7sWtpgrAwCYVDfbhKYvgXvffArmfBtN1sY038BHAwRPbtuvLEgvLXhI0eJU%2ByJyfXxP%2FaCQmsY1%2FrFdqqhp48%2FHZrhCTab7IvVMGZYvELwFw0okX6Q2YVakh1fkfTTVCYA%2FghUl4kSjdBw%2BDZKausM9pXAXNCcyRmpfBHVRJOvqbo9rt1Z%2FVgU5FlMWMYB6ePgD%2FkGkINVUyum14dg1DdyQb7mfSjbKMAzhHsuEaWy9V%2BqezFeh6PL6PRF%2F%2F%2FIruSfDXhq7DWNJaSB6cVnZmQmP7Yxhu0ffUu5kvsxNsbIXhrM7J4k%2B0d0Zjgg%2FWsNK%2BwdyijxV13mrZHuY2oSJTHND9%2F3%2BAQtRmjjMkKClNNxajxqfWC%2Fusc1x2Pjng8LYX0yaHjiWuAV%2FKet8AEteFKunyX%2FZv26KwHJ%2BCa10gTsa5CFCiYXthAXF9LuV8HVoh2XskQEaeXNXeut5FsyX1NxNqn6ENZiRUPdzew0Pc4%2BvU1BEoUEcM0mMpcRlvCzDae5YLwV2hGIrgPav2KsU04V4OBeK3ypmnxMvPpMR2duvvUBBPv1vJ50JvACL9zoVRX8GAO2wYa4htweUG%2FPm45OWMN%2FJ474GOqUByMSB%2BG%2BtmsPxHCTdf0aNr9gW0ZSkWxTT%2BNUePr9vbDwvMZLYJNGi7PcYHKFrsdHVSQAf66sL%2Ffe0%2FQDRbJ9UprKvHvf%2Fv0L0RzyHjixVlEKlkdiuejHM2UU%2FOwX5oEw9Fc6fmSn%2Fg98QGQEau%2BKnCkunktV%2FuUY5GEprGXOug4tEGkQOM0hJ5Oc7AAxolZ4p7bgc9x%2B2def4lZzSaFA8A2gfdIaF&X-Amz-Signature=cf6637867d888f8ae2cf85ae397d3110c5bfe5c64416e0f987cc4a4e52cbcad8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQPLCC5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T032222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCIhcrMZMgjm3o8YHySSCvbbOizM5ucYoOI5Yo0X%2FKKwIgfVza%2BxxOoe%2Bc%2BEDD7X9o4xqjVfh%2BsG5BzEiP1J3gGHsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKxjd5AGYPMi13G4WyrcA7BneT8TKX9UR8MT0yWklzV7bS6j3kymF2lwU7sWtpgrAwCYVDfbhKYvgXvffArmfBtN1sY038BHAwRPbtuvLEgvLXhI0eJU%2ByJyfXxP%2FaCQmsY1%2FrFdqqhp48%2FHZrhCTab7IvVMGZYvELwFw0okX6Q2YVakh1fkfTTVCYA%2FghUl4kSjdBw%2BDZKausM9pXAXNCcyRmpfBHVRJOvqbo9rt1Z%2FVgU5FlMWMYB6ePgD%2FkGkINVUyum14dg1DdyQb7mfSjbKMAzhHsuEaWy9V%2BqezFeh6PL6PRF%2F%2F%2FIruSfDXhq7DWNJaSB6cVnZmQmP7Yxhu0ffUu5kvsxNsbIXhrM7J4k%2B0d0Zjgg%2FWsNK%2BwdyijxV13mrZHuY2oSJTHND9%2F3%2BAQtRmjjMkKClNNxajxqfWC%2Fusc1x2Pjng8LYX0yaHjiWuAV%2FKet8AEteFKunyX%2FZv26KwHJ%2BCa10gTsa5CFCiYXthAXF9LuV8HVoh2XskQEaeXNXeut5FsyX1NxNqn6ENZiRUPdzew0Pc4%2BvU1BEoUEcM0mMpcRlvCzDae5YLwV2hGIrgPav2KsU04V4OBeK3ypmnxMvPpMR2duvvUBBPv1vJ50JvACL9zoVRX8GAO2wYa4htweUG%2FPm45OWMN%2FJ474GOqUByMSB%2BG%2BtmsPxHCTdf0aNr9gW0ZSkWxTT%2BNUePr9vbDwvMZLYJNGi7PcYHKFrsdHVSQAf66sL%2Ffe0%2FQDRbJ9UprKvHvf%2Fv0L0RzyHjixVlEKlkdiuejHM2UU%2FOwX5oEw9Fc6fmSn%2Fg98QGQEau%2BKnCkunktV%2FuUY5GEprGXOug4tEGkQOM0hJ5Oc7AAxolZ4p7bgc9x%2B2def4lZzSaFA8A2gfdIaF&X-Amz-Signature=e061177b476ae97689ed7f3516cf14a16698f34189540c08f602498b8069ad45&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
