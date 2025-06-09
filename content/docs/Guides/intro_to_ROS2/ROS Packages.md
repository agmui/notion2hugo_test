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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMDGGDG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWzaTq2HG7%2B8nxxXcTYSe%2FOkT6QAGhdV6BiWtq05cHZAiEA%2B6n1CG2BlUxZEabp5NajqpkVkUZz1Qj4p0bb575ZW%2FoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOlNHhWnph8fDnFGCrcA072VVoV3%2Fqy8ciyMuK2PWDQqO%2BRFaDsNBeKftz0sbkh6YNN5RdRGXybLrCLar9wvVmsagzGBHEzb%2FpkXFc2LXBeCUCvfTJ9r57HbDtycCTHEKiHHnRQIPL%2F3LVOcIN0%2FMbvYAtOVAyvx6Ny0usSZTFyi9c9BuCp10cNb4xwkbq2qCyUTE%2Fr401iZ3JicFaaGPJ9H7OwbL0wyNQo3lJYTC%2Fn8EBfoHQjubZtKKlZotq9QMW7QK2DhWQWgRMbSgC%2BQh62e4%2FNI5AEOq52tQR%2FIuOJvlROsEp%2Bfgf0UBvUWGbkRcWsV7PgXtG2d3k1ctFUHfDCPEJPkGIWQU8TFDH1GOAvXpKH4h6K1xptqWHDjQEEvYQRhYf5g9gf9pPIDzDmO%2Bng20HZipNRPPpnH982HrTPzjudWoEsxeA2geDnP%2BIfs1OIc0RMwZUP%2FhSedtNSq8px8IunHazah3Zr3IGbhK5weUtzOMAci4Jg3XXqTdIKAOhbmGmCZKkgTZepGaDha0LZrQ%2FYx7r3F%2BsDNsJsWayaArZPCQyBjyu%2Flxx9BykzsESBCRWPg9jVSl%2FuFo0oh%2BuOioK5QSXXaSxihQhqjaNaZnNmzmRhW9w3%2FXTNKT85T3oMqQ0hCvii6k%2FjMIeWnMIGOqUBOugElqJ1UnkZcy2%2BTWZf4ltQWlvjgsX8ZPBQsIMHQeGNMIPwMbD%2BSnJWyoMgUKqVs%2FjmI7q%2FmqoqjYKNNvzADl2Wl1Gbl5fibEUwFAO3g3AZIc%2FFnTMOAKAqBIqfPvRGHPoN5Hq3jpYjC735bCI7C9FoGeCSpR9lnIlMS8h3pio%2FAx2q%2FBu%2FnEueQywRZr0Lhs3NLyUyc6jOS9zXx03IfHJ0wZua&X-Amz-Signature=76851f8f439793b337f885a76288ba445bee519672e743f2bb11fa4749428974&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMDGGDG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWzaTq2HG7%2B8nxxXcTYSe%2FOkT6QAGhdV6BiWtq05cHZAiEA%2B6n1CG2BlUxZEabp5NajqpkVkUZz1Qj4p0bb575ZW%2FoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOlNHhWnph8fDnFGCrcA072VVoV3%2Fqy8ciyMuK2PWDQqO%2BRFaDsNBeKftz0sbkh6YNN5RdRGXybLrCLar9wvVmsagzGBHEzb%2FpkXFc2LXBeCUCvfTJ9r57HbDtycCTHEKiHHnRQIPL%2F3LVOcIN0%2FMbvYAtOVAyvx6Ny0usSZTFyi9c9BuCp10cNb4xwkbq2qCyUTE%2Fr401iZ3JicFaaGPJ9H7OwbL0wyNQo3lJYTC%2Fn8EBfoHQjubZtKKlZotq9QMW7QK2DhWQWgRMbSgC%2BQh62e4%2FNI5AEOq52tQR%2FIuOJvlROsEp%2Bfgf0UBvUWGbkRcWsV7PgXtG2d3k1ctFUHfDCPEJPkGIWQU8TFDH1GOAvXpKH4h6K1xptqWHDjQEEvYQRhYf5g9gf9pPIDzDmO%2Bng20HZipNRPPpnH982HrTPzjudWoEsxeA2geDnP%2BIfs1OIc0RMwZUP%2FhSedtNSq8px8IunHazah3Zr3IGbhK5weUtzOMAci4Jg3XXqTdIKAOhbmGmCZKkgTZepGaDha0LZrQ%2FYx7r3F%2BsDNsJsWayaArZPCQyBjyu%2Flxx9BykzsESBCRWPg9jVSl%2FuFo0oh%2BuOioK5QSXXaSxihQhqjaNaZnNmzmRhW9w3%2FXTNKT85T3oMqQ0hCvii6k%2FjMIeWnMIGOqUBOugElqJ1UnkZcy2%2BTWZf4ltQWlvjgsX8ZPBQsIMHQeGNMIPwMbD%2BSnJWyoMgUKqVs%2FjmI7q%2FmqoqjYKNNvzADl2Wl1Gbl5fibEUwFAO3g3AZIc%2FFnTMOAKAqBIqfPvRGHPoN5Hq3jpYjC735bCI7C9FoGeCSpR9lnIlMS8h3pio%2FAx2q%2FBu%2FnEueQywRZr0Lhs3NLyUyc6jOS9zXx03IfHJ0wZua&X-Amz-Signature=be897a67fa8b46cc399f1d12c19a30a57535dfb8bb9e74021997497cba3f9849&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMDGGDG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWzaTq2HG7%2B8nxxXcTYSe%2FOkT6QAGhdV6BiWtq05cHZAiEA%2B6n1CG2BlUxZEabp5NajqpkVkUZz1Qj4p0bb575ZW%2FoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOlNHhWnph8fDnFGCrcA072VVoV3%2Fqy8ciyMuK2PWDQqO%2BRFaDsNBeKftz0sbkh6YNN5RdRGXybLrCLar9wvVmsagzGBHEzb%2FpkXFc2LXBeCUCvfTJ9r57HbDtycCTHEKiHHnRQIPL%2F3LVOcIN0%2FMbvYAtOVAyvx6Ny0usSZTFyi9c9BuCp10cNb4xwkbq2qCyUTE%2Fr401iZ3JicFaaGPJ9H7OwbL0wyNQo3lJYTC%2Fn8EBfoHQjubZtKKlZotq9QMW7QK2DhWQWgRMbSgC%2BQh62e4%2FNI5AEOq52tQR%2FIuOJvlROsEp%2Bfgf0UBvUWGbkRcWsV7PgXtG2d3k1ctFUHfDCPEJPkGIWQU8TFDH1GOAvXpKH4h6K1xptqWHDjQEEvYQRhYf5g9gf9pPIDzDmO%2Bng20HZipNRPPpnH982HrTPzjudWoEsxeA2geDnP%2BIfs1OIc0RMwZUP%2FhSedtNSq8px8IunHazah3Zr3IGbhK5weUtzOMAci4Jg3XXqTdIKAOhbmGmCZKkgTZepGaDha0LZrQ%2FYx7r3F%2BsDNsJsWayaArZPCQyBjyu%2Flxx9BykzsESBCRWPg9jVSl%2FuFo0oh%2BuOioK5QSXXaSxihQhqjaNaZnNmzmRhW9w3%2FXTNKT85T3oMqQ0hCvii6k%2FjMIeWnMIGOqUBOugElqJ1UnkZcy2%2BTWZf4ltQWlvjgsX8ZPBQsIMHQeGNMIPwMbD%2BSnJWyoMgUKqVs%2FjmI7q%2FmqoqjYKNNvzADl2Wl1Gbl5fibEUwFAO3g3AZIc%2FFnTMOAKAqBIqfPvRGHPoN5Hq3jpYjC735bCI7C9FoGeCSpR9lnIlMS8h3pio%2FAx2q%2FBu%2FnEueQywRZr0Lhs3NLyUyc6jOS9zXx03IfHJ0wZua&X-Amz-Signature=b1eacae6ee676b522069d5a0a9897d8d2055734a64597d988cb392cf63b673c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMDGGDG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWzaTq2HG7%2B8nxxXcTYSe%2FOkT6QAGhdV6BiWtq05cHZAiEA%2B6n1CG2BlUxZEabp5NajqpkVkUZz1Qj4p0bb575ZW%2FoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOlNHhWnph8fDnFGCrcA072VVoV3%2Fqy8ciyMuK2PWDQqO%2BRFaDsNBeKftz0sbkh6YNN5RdRGXybLrCLar9wvVmsagzGBHEzb%2FpkXFc2LXBeCUCvfTJ9r57HbDtycCTHEKiHHnRQIPL%2F3LVOcIN0%2FMbvYAtOVAyvx6Ny0usSZTFyi9c9BuCp10cNb4xwkbq2qCyUTE%2Fr401iZ3JicFaaGPJ9H7OwbL0wyNQo3lJYTC%2Fn8EBfoHQjubZtKKlZotq9QMW7QK2DhWQWgRMbSgC%2BQh62e4%2FNI5AEOq52tQR%2FIuOJvlROsEp%2Bfgf0UBvUWGbkRcWsV7PgXtG2d3k1ctFUHfDCPEJPkGIWQU8TFDH1GOAvXpKH4h6K1xptqWHDjQEEvYQRhYf5g9gf9pPIDzDmO%2Bng20HZipNRPPpnH982HrTPzjudWoEsxeA2geDnP%2BIfs1OIc0RMwZUP%2FhSedtNSq8px8IunHazah3Zr3IGbhK5weUtzOMAci4Jg3XXqTdIKAOhbmGmCZKkgTZepGaDha0LZrQ%2FYx7r3F%2BsDNsJsWayaArZPCQyBjyu%2Flxx9BykzsESBCRWPg9jVSl%2FuFo0oh%2BuOioK5QSXXaSxihQhqjaNaZnNmzmRhW9w3%2FXTNKT85T3oMqQ0hCvii6k%2FjMIeWnMIGOqUBOugElqJ1UnkZcy2%2BTWZf4ltQWlvjgsX8ZPBQsIMHQeGNMIPwMbD%2BSnJWyoMgUKqVs%2FjmI7q%2FmqoqjYKNNvzADl2Wl1Gbl5fibEUwFAO3g3AZIc%2FFnTMOAKAqBIqfPvRGHPoN5Hq3jpYjC735bCI7C9FoGeCSpR9lnIlMS8h3pio%2FAx2q%2FBu%2FnEueQywRZr0Lhs3NLyUyc6jOS9zXx03IfHJ0wZua&X-Amz-Signature=562da12d35f87240c37516477898ed81290c25f4fdf56f3cd7675da2bc6e4e30&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMDGGDG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWzaTq2HG7%2B8nxxXcTYSe%2FOkT6QAGhdV6BiWtq05cHZAiEA%2B6n1CG2BlUxZEabp5NajqpkVkUZz1Qj4p0bb575ZW%2FoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOlNHhWnph8fDnFGCrcA072VVoV3%2Fqy8ciyMuK2PWDQqO%2BRFaDsNBeKftz0sbkh6YNN5RdRGXybLrCLar9wvVmsagzGBHEzb%2FpkXFc2LXBeCUCvfTJ9r57HbDtycCTHEKiHHnRQIPL%2F3LVOcIN0%2FMbvYAtOVAyvx6Ny0usSZTFyi9c9BuCp10cNb4xwkbq2qCyUTE%2Fr401iZ3JicFaaGPJ9H7OwbL0wyNQo3lJYTC%2Fn8EBfoHQjubZtKKlZotq9QMW7QK2DhWQWgRMbSgC%2BQh62e4%2FNI5AEOq52tQR%2FIuOJvlROsEp%2Bfgf0UBvUWGbkRcWsV7PgXtG2d3k1ctFUHfDCPEJPkGIWQU8TFDH1GOAvXpKH4h6K1xptqWHDjQEEvYQRhYf5g9gf9pPIDzDmO%2Bng20HZipNRPPpnH982HrTPzjudWoEsxeA2geDnP%2BIfs1OIc0RMwZUP%2FhSedtNSq8px8IunHazah3Zr3IGbhK5weUtzOMAci4Jg3XXqTdIKAOhbmGmCZKkgTZepGaDha0LZrQ%2FYx7r3F%2BsDNsJsWayaArZPCQyBjyu%2Flxx9BykzsESBCRWPg9jVSl%2FuFo0oh%2BuOioK5QSXXaSxihQhqjaNaZnNmzmRhW9w3%2FXTNKT85T3oMqQ0hCvii6k%2FjMIeWnMIGOqUBOugElqJ1UnkZcy2%2BTWZf4ltQWlvjgsX8ZPBQsIMHQeGNMIPwMbD%2BSnJWyoMgUKqVs%2FjmI7q%2FmqoqjYKNNvzADl2Wl1Gbl5fibEUwFAO3g3AZIc%2FFnTMOAKAqBIqfPvRGHPoN5Hq3jpYjC735bCI7C9FoGeCSpR9lnIlMS8h3pio%2FAx2q%2FBu%2FnEueQywRZr0Lhs3NLyUyc6jOS9zXx03IfHJ0wZua&X-Amz-Signature=059808faff4062c6975dc0b6c9ee08f09dc1f26df797a8c5e8eb11d6d65668f8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMDGGDG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWzaTq2HG7%2B8nxxXcTYSe%2FOkT6QAGhdV6BiWtq05cHZAiEA%2B6n1CG2BlUxZEabp5NajqpkVkUZz1Qj4p0bb575ZW%2FoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOlNHhWnph8fDnFGCrcA072VVoV3%2Fqy8ciyMuK2PWDQqO%2BRFaDsNBeKftz0sbkh6YNN5RdRGXybLrCLar9wvVmsagzGBHEzb%2FpkXFc2LXBeCUCvfTJ9r57HbDtycCTHEKiHHnRQIPL%2F3LVOcIN0%2FMbvYAtOVAyvx6Ny0usSZTFyi9c9BuCp10cNb4xwkbq2qCyUTE%2Fr401iZ3JicFaaGPJ9H7OwbL0wyNQo3lJYTC%2Fn8EBfoHQjubZtKKlZotq9QMW7QK2DhWQWgRMbSgC%2BQh62e4%2FNI5AEOq52tQR%2FIuOJvlROsEp%2Bfgf0UBvUWGbkRcWsV7PgXtG2d3k1ctFUHfDCPEJPkGIWQU8TFDH1GOAvXpKH4h6K1xptqWHDjQEEvYQRhYf5g9gf9pPIDzDmO%2Bng20HZipNRPPpnH982HrTPzjudWoEsxeA2geDnP%2BIfs1OIc0RMwZUP%2FhSedtNSq8px8IunHazah3Zr3IGbhK5weUtzOMAci4Jg3XXqTdIKAOhbmGmCZKkgTZepGaDha0LZrQ%2FYx7r3F%2BsDNsJsWayaArZPCQyBjyu%2Flxx9BykzsESBCRWPg9jVSl%2FuFo0oh%2BuOioK5QSXXaSxihQhqjaNaZnNmzmRhW9w3%2FXTNKT85T3oMqQ0hCvii6k%2FjMIeWnMIGOqUBOugElqJ1UnkZcy2%2BTWZf4ltQWlvjgsX8ZPBQsIMHQeGNMIPwMbD%2BSnJWyoMgUKqVs%2FjmI7q%2FmqoqjYKNNvzADl2Wl1Gbl5fibEUwFAO3g3AZIc%2FFnTMOAKAqBIqfPvRGHPoN5Hq3jpYjC735bCI7C9FoGeCSpR9lnIlMS8h3pio%2FAx2q%2FBu%2FnEueQywRZr0Lhs3NLyUyc6jOS9zXx03IfHJ0wZua&X-Amz-Signature=01e0c395e64c03e9baabbdb1dd015e33e5bbf4c255bfe2c66feb199a77cf9a88&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMDGGDG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWzaTq2HG7%2B8nxxXcTYSe%2FOkT6QAGhdV6BiWtq05cHZAiEA%2B6n1CG2BlUxZEabp5NajqpkVkUZz1Qj4p0bb575ZW%2FoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOlNHhWnph8fDnFGCrcA072VVoV3%2Fqy8ciyMuK2PWDQqO%2BRFaDsNBeKftz0sbkh6YNN5RdRGXybLrCLar9wvVmsagzGBHEzb%2FpkXFc2LXBeCUCvfTJ9r57HbDtycCTHEKiHHnRQIPL%2F3LVOcIN0%2FMbvYAtOVAyvx6Ny0usSZTFyi9c9BuCp10cNb4xwkbq2qCyUTE%2Fr401iZ3JicFaaGPJ9H7OwbL0wyNQo3lJYTC%2Fn8EBfoHQjubZtKKlZotq9QMW7QK2DhWQWgRMbSgC%2BQh62e4%2FNI5AEOq52tQR%2FIuOJvlROsEp%2Bfgf0UBvUWGbkRcWsV7PgXtG2d3k1ctFUHfDCPEJPkGIWQU8TFDH1GOAvXpKH4h6K1xptqWHDjQEEvYQRhYf5g9gf9pPIDzDmO%2Bng20HZipNRPPpnH982HrTPzjudWoEsxeA2geDnP%2BIfs1OIc0RMwZUP%2FhSedtNSq8px8IunHazah3Zr3IGbhK5weUtzOMAci4Jg3XXqTdIKAOhbmGmCZKkgTZepGaDha0LZrQ%2FYx7r3F%2BsDNsJsWayaArZPCQyBjyu%2Flxx9BykzsESBCRWPg9jVSl%2FuFo0oh%2BuOioK5QSXXaSxihQhqjaNaZnNmzmRhW9w3%2FXTNKT85T3oMqQ0hCvii6k%2FjMIeWnMIGOqUBOugElqJ1UnkZcy2%2BTWZf4ltQWlvjgsX8ZPBQsIMHQeGNMIPwMbD%2BSnJWyoMgUKqVs%2FjmI7q%2FmqoqjYKNNvzADl2Wl1Gbl5fibEUwFAO3g3AZIc%2FFnTMOAKAqBIqfPvRGHPoN5Hq3jpYjC735bCI7C9FoGeCSpR9lnIlMS8h3pio%2FAx2q%2FBu%2FnEueQywRZr0Lhs3NLyUyc6jOS9zXx03IfHJ0wZua&X-Amz-Signature=5f7f740584e53ad1e341b7740fb7b29b1bf3ffe1791612bb81393dae1fdeb166&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
