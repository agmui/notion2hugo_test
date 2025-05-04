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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KNWFP6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnaPU1Tdi7mQVkKb4aqGmJJM2iS4r%2F9u4MEFOEoNVohgIhAIa6%2BokGI31Kd00WdHGm9NZoMeZYnBCOPTMneQ39xfkUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz53V5e35HwqHvqJ8Iq3AO2MwxAakrY4NKZ%2B0prYMrt19q%2B9hvckzEYq7zCUIFOFDyHZIDb1xu3a%2BKnRfgd5g4a%2BqMpzb9BeQ0KH02vxGz7vbCRFQeYBawO9YoLsYW42ZNgcXCxasoXLiP3Es0UvInU4C9mFPHA4Ddjzth%2BDVvjf4c%2F68CJJArcb0UQooC4BPytUwvOBUxWGTtw7KYc9INbpo7nR%2FD07vYnK0I%2BErKn4JnOFcuoXE4jfkf4yFP8AMqJ0nhOmgY10kiPnnNHICE8F8XDm1LnqZ28QrBqcagwjPINjxilqLhF4P8kAn4ADwLuIJyoSqi4ISZ067gusZ%2BZoE%2B0XjFZLHE3uL%2F%2BVx%2B8bfZ5VE0mCWyjYpux5TH3H%2BBGqUDpRylhOcnz6K2YwTGEGpnm0LlirMHj7I4WU%2Fec6rR4mI5%2BYsxG7q4LDySKS8aUwAtFGqjEXYdquy39i1USLaOFyeOfx96RPd8UYi3ppvK8NM5USYQd%2BW78qXh1FVJrSgpNymQli53%2F6Pix%2FcttoUTB3hfgWjbXM9OF61IVqcbrK4Pmsc6gWbxr%2BrINcN14yGzNB3N1BuzDGnqKChZ2OTjc9wW5b06KdBXuFTm%2FTiYF8fzZ%2BA0LYfg0j3viYCYgTvqb37chiP4lxjCD69vABjqkAZJFyojSpImoMRlt5J09gsBF0tUaQ3NE%2FQNc%2BY%2Beda5PpYuvR6%2FYIZ2vAWKYCxxw3frhsDN57WfeyZ3T%2Bmr66F2MSwVxeMlECrGfHb4FD0vfVNm2CKRKGSx%2FjWjJbFdXaNsoAadkhyyzes9JPk2rzhHGtBrn7Oh8IwftKNqMXs18tuqZTjHKSzfl2ryOvvyVHCTAUhvL2DuSledG7q%2BL5D9rMnl8&X-Amz-Signature=36c92bed34ea4bcc0bcdd7dd65a65969d2557cdff7f8c908375f16a1e7b73b72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KNWFP6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnaPU1Tdi7mQVkKb4aqGmJJM2iS4r%2F9u4MEFOEoNVohgIhAIa6%2BokGI31Kd00WdHGm9NZoMeZYnBCOPTMneQ39xfkUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz53V5e35HwqHvqJ8Iq3AO2MwxAakrY4NKZ%2B0prYMrt19q%2B9hvckzEYq7zCUIFOFDyHZIDb1xu3a%2BKnRfgd5g4a%2BqMpzb9BeQ0KH02vxGz7vbCRFQeYBawO9YoLsYW42ZNgcXCxasoXLiP3Es0UvInU4C9mFPHA4Ddjzth%2BDVvjf4c%2F68CJJArcb0UQooC4BPytUwvOBUxWGTtw7KYc9INbpo7nR%2FD07vYnK0I%2BErKn4JnOFcuoXE4jfkf4yFP8AMqJ0nhOmgY10kiPnnNHICE8F8XDm1LnqZ28QrBqcagwjPINjxilqLhF4P8kAn4ADwLuIJyoSqi4ISZ067gusZ%2BZoE%2B0XjFZLHE3uL%2F%2BVx%2B8bfZ5VE0mCWyjYpux5TH3H%2BBGqUDpRylhOcnz6K2YwTGEGpnm0LlirMHj7I4WU%2Fec6rR4mI5%2BYsxG7q4LDySKS8aUwAtFGqjEXYdquy39i1USLaOFyeOfx96RPd8UYi3ppvK8NM5USYQd%2BW78qXh1FVJrSgpNymQli53%2F6Pix%2FcttoUTB3hfgWjbXM9OF61IVqcbrK4Pmsc6gWbxr%2BrINcN14yGzNB3N1BuzDGnqKChZ2OTjc9wW5b06KdBXuFTm%2FTiYF8fzZ%2BA0LYfg0j3viYCYgTvqb37chiP4lxjCD69vABjqkAZJFyojSpImoMRlt5J09gsBF0tUaQ3NE%2FQNc%2BY%2Beda5PpYuvR6%2FYIZ2vAWKYCxxw3frhsDN57WfeyZ3T%2Bmr66F2MSwVxeMlECrGfHb4FD0vfVNm2CKRKGSx%2FjWjJbFdXaNsoAadkhyyzes9JPk2rzhHGtBrn7Oh8IwftKNqMXs18tuqZTjHKSzfl2ryOvvyVHCTAUhvL2DuSledG7q%2BL5D9rMnl8&X-Amz-Signature=877b8b4893b7dd0e9c382dc9b3f92cf03acf82bcb423b8543354b4464489adfe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KNWFP6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnaPU1Tdi7mQVkKb4aqGmJJM2iS4r%2F9u4MEFOEoNVohgIhAIa6%2BokGI31Kd00WdHGm9NZoMeZYnBCOPTMneQ39xfkUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz53V5e35HwqHvqJ8Iq3AO2MwxAakrY4NKZ%2B0prYMrt19q%2B9hvckzEYq7zCUIFOFDyHZIDb1xu3a%2BKnRfgd5g4a%2BqMpzb9BeQ0KH02vxGz7vbCRFQeYBawO9YoLsYW42ZNgcXCxasoXLiP3Es0UvInU4C9mFPHA4Ddjzth%2BDVvjf4c%2F68CJJArcb0UQooC4BPytUwvOBUxWGTtw7KYc9INbpo7nR%2FD07vYnK0I%2BErKn4JnOFcuoXE4jfkf4yFP8AMqJ0nhOmgY10kiPnnNHICE8F8XDm1LnqZ28QrBqcagwjPINjxilqLhF4P8kAn4ADwLuIJyoSqi4ISZ067gusZ%2BZoE%2B0XjFZLHE3uL%2F%2BVx%2B8bfZ5VE0mCWyjYpux5TH3H%2BBGqUDpRylhOcnz6K2YwTGEGpnm0LlirMHj7I4WU%2Fec6rR4mI5%2BYsxG7q4LDySKS8aUwAtFGqjEXYdquy39i1USLaOFyeOfx96RPd8UYi3ppvK8NM5USYQd%2BW78qXh1FVJrSgpNymQli53%2F6Pix%2FcttoUTB3hfgWjbXM9OF61IVqcbrK4Pmsc6gWbxr%2BrINcN14yGzNB3N1BuzDGnqKChZ2OTjc9wW5b06KdBXuFTm%2FTiYF8fzZ%2BA0LYfg0j3viYCYgTvqb37chiP4lxjCD69vABjqkAZJFyojSpImoMRlt5J09gsBF0tUaQ3NE%2FQNc%2BY%2Beda5PpYuvR6%2FYIZ2vAWKYCxxw3frhsDN57WfeyZ3T%2Bmr66F2MSwVxeMlECrGfHb4FD0vfVNm2CKRKGSx%2FjWjJbFdXaNsoAadkhyyzes9JPk2rzhHGtBrn7Oh8IwftKNqMXs18tuqZTjHKSzfl2ryOvvyVHCTAUhvL2DuSledG7q%2BL5D9rMnl8&X-Amz-Signature=e487a2ce76dff071129c7328de2640fe03e28c479c5466c5dca17490f04547b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KNWFP6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnaPU1Tdi7mQVkKb4aqGmJJM2iS4r%2F9u4MEFOEoNVohgIhAIa6%2BokGI31Kd00WdHGm9NZoMeZYnBCOPTMneQ39xfkUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz53V5e35HwqHvqJ8Iq3AO2MwxAakrY4NKZ%2B0prYMrt19q%2B9hvckzEYq7zCUIFOFDyHZIDb1xu3a%2BKnRfgd5g4a%2BqMpzb9BeQ0KH02vxGz7vbCRFQeYBawO9YoLsYW42ZNgcXCxasoXLiP3Es0UvInU4C9mFPHA4Ddjzth%2BDVvjf4c%2F68CJJArcb0UQooC4BPytUwvOBUxWGTtw7KYc9INbpo7nR%2FD07vYnK0I%2BErKn4JnOFcuoXE4jfkf4yFP8AMqJ0nhOmgY10kiPnnNHICE8F8XDm1LnqZ28QrBqcagwjPINjxilqLhF4P8kAn4ADwLuIJyoSqi4ISZ067gusZ%2BZoE%2B0XjFZLHE3uL%2F%2BVx%2B8bfZ5VE0mCWyjYpux5TH3H%2BBGqUDpRylhOcnz6K2YwTGEGpnm0LlirMHj7I4WU%2Fec6rR4mI5%2BYsxG7q4LDySKS8aUwAtFGqjEXYdquy39i1USLaOFyeOfx96RPd8UYi3ppvK8NM5USYQd%2BW78qXh1FVJrSgpNymQli53%2F6Pix%2FcttoUTB3hfgWjbXM9OF61IVqcbrK4Pmsc6gWbxr%2BrINcN14yGzNB3N1BuzDGnqKChZ2OTjc9wW5b06KdBXuFTm%2FTiYF8fzZ%2BA0LYfg0j3viYCYgTvqb37chiP4lxjCD69vABjqkAZJFyojSpImoMRlt5J09gsBF0tUaQ3NE%2FQNc%2BY%2Beda5PpYuvR6%2FYIZ2vAWKYCxxw3frhsDN57WfeyZ3T%2Bmr66F2MSwVxeMlECrGfHb4FD0vfVNm2CKRKGSx%2FjWjJbFdXaNsoAadkhyyzes9JPk2rzhHGtBrn7Oh8IwftKNqMXs18tuqZTjHKSzfl2ryOvvyVHCTAUhvL2DuSledG7q%2BL5D9rMnl8&X-Amz-Signature=9d91d06a4efb7a77245686a641304234204b66e2038acbd36a0dea26eb243ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KNWFP6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnaPU1Tdi7mQVkKb4aqGmJJM2iS4r%2F9u4MEFOEoNVohgIhAIa6%2BokGI31Kd00WdHGm9NZoMeZYnBCOPTMneQ39xfkUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz53V5e35HwqHvqJ8Iq3AO2MwxAakrY4NKZ%2B0prYMrt19q%2B9hvckzEYq7zCUIFOFDyHZIDb1xu3a%2BKnRfgd5g4a%2BqMpzb9BeQ0KH02vxGz7vbCRFQeYBawO9YoLsYW42ZNgcXCxasoXLiP3Es0UvInU4C9mFPHA4Ddjzth%2BDVvjf4c%2F68CJJArcb0UQooC4BPytUwvOBUxWGTtw7KYc9INbpo7nR%2FD07vYnK0I%2BErKn4JnOFcuoXE4jfkf4yFP8AMqJ0nhOmgY10kiPnnNHICE8F8XDm1LnqZ28QrBqcagwjPINjxilqLhF4P8kAn4ADwLuIJyoSqi4ISZ067gusZ%2BZoE%2B0XjFZLHE3uL%2F%2BVx%2B8bfZ5VE0mCWyjYpux5TH3H%2BBGqUDpRylhOcnz6K2YwTGEGpnm0LlirMHj7I4WU%2Fec6rR4mI5%2BYsxG7q4LDySKS8aUwAtFGqjEXYdquy39i1USLaOFyeOfx96RPd8UYi3ppvK8NM5USYQd%2BW78qXh1FVJrSgpNymQli53%2F6Pix%2FcttoUTB3hfgWjbXM9OF61IVqcbrK4Pmsc6gWbxr%2BrINcN14yGzNB3N1BuzDGnqKChZ2OTjc9wW5b06KdBXuFTm%2FTiYF8fzZ%2BA0LYfg0j3viYCYgTvqb37chiP4lxjCD69vABjqkAZJFyojSpImoMRlt5J09gsBF0tUaQ3NE%2FQNc%2BY%2Beda5PpYuvR6%2FYIZ2vAWKYCxxw3frhsDN57WfeyZ3T%2Bmr66F2MSwVxeMlECrGfHb4FD0vfVNm2CKRKGSx%2FjWjJbFdXaNsoAadkhyyzes9JPk2rzhHGtBrn7Oh8IwftKNqMXs18tuqZTjHKSzfl2ryOvvyVHCTAUhvL2DuSledG7q%2BL5D9rMnl8&X-Amz-Signature=fa344f043d91e75f955d15e2c9d976cfb235f83c6e5e8fe0df2361361991d252&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KNWFP6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnaPU1Tdi7mQVkKb4aqGmJJM2iS4r%2F9u4MEFOEoNVohgIhAIa6%2BokGI31Kd00WdHGm9NZoMeZYnBCOPTMneQ39xfkUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz53V5e35HwqHvqJ8Iq3AO2MwxAakrY4NKZ%2B0prYMrt19q%2B9hvckzEYq7zCUIFOFDyHZIDb1xu3a%2BKnRfgd5g4a%2BqMpzb9BeQ0KH02vxGz7vbCRFQeYBawO9YoLsYW42ZNgcXCxasoXLiP3Es0UvInU4C9mFPHA4Ddjzth%2BDVvjf4c%2F68CJJArcb0UQooC4BPytUwvOBUxWGTtw7KYc9INbpo7nR%2FD07vYnK0I%2BErKn4JnOFcuoXE4jfkf4yFP8AMqJ0nhOmgY10kiPnnNHICE8F8XDm1LnqZ28QrBqcagwjPINjxilqLhF4P8kAn4ADwLuIJyoSqi4ISZ067gusZ%2BZoE%2B0XjFZLHE3uL%2F%2BVx%2B8bfZ5VE0mCWyjYpux5TH3H%2BBGqUDpRylhOcnz6K2YwTGEGpnm0LlirMHj7I4WU%2Fec6rR4mI5%2BYsxG7q4LDySKS8aUwAtFGqjEXYdquy39i1USLaOFyeOfx96RPd8UYi3ppvK8NM5USYQd%2BW78qXh1FVJrSgpNymQli53%2F6Pix%2FcttoUTB3hfgWjbXM9OF61IVqcbrK4Pmsc6gWbxr%2BrINcN14yGzNB3N1BuzDGnqKChZ2OTjc9wW5b06KdBXuFTm%2FTiYF8fzZ%2BA0LYfg0j3viYCYgTvqb37chiP4lxjCD69vABjqkAZJFyojSpImoMRlt5J09gsBF0tUaQ3NE%2FQNc%2BY%2Beda5PpYuvR6%2FYIZ2vAWKYCxxw3frhsDN57WfeyZ3T%2Bmr66F2MSwVxeMlECrGfHb4FD0vfVNm2CKRKGSx%2FjWjJbFdXaNsoAadkhyyzes9JPk2rzhHGtBrn7Oh8IwftKNqMXs18tuqZTjHKSzfl2ryOvvyVHCTAUhvL2DuSledG7q%2BL5D9rMnl8&X-Amz-Signature=b9bebba63f96cf7a62f7499313323221475f2e943fc9641f3ed48ab63de7dcae&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KNWFP6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnaPU1Tdi7mQVkKb4aqGmJJM2iS4r%2F9u4MEFOEoNVohgIhAIa6%2BokGI31Kd00WdHGm9NZoMeZYnBCOPTMneQ39xfkUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz53V5e35HwqHvqJ8Iq3AO2MwxAakrY4NKZ%2B0prYMrt19q%2B9hvckzEYq7zCUIFOFDyHZIDb1xu3a%2BKnRfgd5g4a%2BqMpzb9BeQ0KH02vxGz7vbCRFQeYBawO9YoLsYW42ZNgcXCxasoXLiP3Es0UvInU4C9mFPHA4Ddjzth%2BDVvjf4c%2F68CJJArcb0UQooC4BPytUwvOBUxWGTtw7KYc9INbpo7nR%2FD07vYnK0I%2BErKn4JnOFcuoXE4jfkf4yFP8AMqJ0nhOmgY10kiPnnNHICE8F8XDm1LnqZ28QrBqcagwjPINjxilqLhF4P8kAn4ADwLuIJyoSqi4ISZ067gusZ%2BZoE%2B0XjFZLHE3uL%2F%2BVx%2B8bfZ5VE0mCWyjYpux5TH3H%2BBGqUDpRylhOcnz6K2YwTGEGpnm0LlirMHj7I4WU%2Fec6rR4mI5%2BYsxG7q4LDySKS8aUwAtFGqjEXYdquy39i1USLaOFyeOfx96RPd8UYi3ppvK8NM5USYQd%2BW78qXh1FVJrSgpNymQli53%2F6Pix%2FcttoUTB3hfgWjbXM9OF61IVqcbrK4Pmsc6gWbxr%2BrINcN14yGzNB3N1BuzDGnqKChZ2OTjc9wW5b06KdBXuFTm%2FTiYF8fzZ%2BA0LYfg0j3viYCYgTvqb37chiP4lxjCD69vABjqkAZJFyojSpImoMRlt5J09gsBF0tUaQ3NE%2FQNc%2BY%2Beda5PpYuvR6%2FYIZ2vAWKYCxxw3frhsDN57WfeyZ3T%2Bmr66F2MSwVxeMlECrGfHb4FD0vfVNm2CKRKGSx%2FjWjJbFdXaNsoAadkhyyzes9JPk2rzhHGtBrn7Oh8IwftKNqMXs18tuqZTjHKSzfl2ryOvvyVHCTAUhvL2DuSledG7q%2BL5D9rMnl8&X-Amz-Signature=c57eadad84ef31028441c8087008b5d3ed2cde6c503f4513d6e9d2e2aa65a83d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
