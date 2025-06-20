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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VVW2V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPWUo0HCH99A1Q5oAD6jgqSAdXzmwMUXwYe02m1p0PKAiEA9xYG1PqOD53MU2jLC4mwpOCVDQiWPojnPM%2BjJjZQwq8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrk1HQ7YPOZHtd3DircA25%2BOrVkbS0loOle8om3TaRL3WpJOPVkqEj82x7WaU%2BOxptsSImBm2ljI8W36%2F0Gvs2C6QJBvy9a0wlED9VdEYcA4VeBVpbZ1%2Ffhcg%2FN3kTtIy4QHfhLFdlUC8yEx%2BujnBb9PHB4cNmr%2BUJzG9mHzmPyGFPE5NzRPzScF%2BNsCkHKJZAB%2B7aMJuePqg%2B4DCd8divSkk5%2F0Y%2FPK%2BSOYY%2FRHqHeIf8iAsqVRAGlvrs9EVCUrx8pLx8fHvaSZjTUy8Sr0DhDD%2B9pvZbOYF%2F8EDmCpImXh1PGLaU0MA50%2FdPqw5mSY08Hc4hmBkJ5CTWCLExYOkAJehCqaJ6X56p86YdsmF%2BRw7nLUYFmP75O93BZfA5MB5tOKb47V09uCq4Sor7HDD5W0rduQgnDq2h%2FEOQr6wVr14h6mbO1hcUphXX14wZ%2FgVSEp90I3V1aJGwClVO%2FSC3plhnmDj%2FcJNiaH03OAw6PZsB%2BBAcVhx3mYoR2dY00iJfllDjmkgT6%2F4QHwKWTEv4%2FXQFtiofIVp1lOndDIEY9tPNZGgDvrNo8pLBohO4xd9%2FNDOtm1SCuJOGqblgk5D7P07SmKOl6WMz65dvLGQ%2BXSEud809isHcFEQrmBHQxPoRPjuw3QFfdD%2BmRMMak1cIGOqUBR48dR5rjKaxDAyhIC%2B%2BfxE3H4mJO8zDv0BrntfN5i%2FfR6PpzBFqBsQMKszgaAHltTxMF1c3w5zDu5fujycuiJ0%2BF6tnC7GnCM%2FxRoe5kOYzgRoGfVKZk1eM%2B5mjKMf4lhsBZ3IzAW7hk07vLKOUT99MMsV6q5ChyIXdOYWw9cIWcA4H%2BntF4hSlhCbNxMGHMudeNyU3y%2FARst5lCeD6ZumZFKMb5&X-Amz-Signature=50b104f9abc33d3b168d5fd26c16f1b6319555bde955599ac8a8e2c372660f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VVW2V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPWUo0HCH99A1Q5oAD6jgqSAdXzmwMUXwYe02m1p0PKAiEA9xYG1PqOD53MU2jLC4mwpOCVDQiWPojnPM%2BjJjZQwq8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrk1HQ7YPOZHtd3DircA25%2BOrVkbS0loOle8om3TaRL3WpJOPVkqEj82x7WaU%2BOxptsSImBm2ljI8W36%2F0Gvs2C6QJBvy9a0wlED9VdEYcA4VeBVpbZ1%2Ffhcg%2FN3kTtIy4QHfhLFdlUC8yEx%2BujnBb9PHB4cNmr%2BUJzG9mHzmPyGFPE5NzRPzScF%2BNsCkHKJZAB%2B7aMJuePqg%2B4DCd8divSkk5%2F0Y%2FPK%2BSOYY%2FRHqHeIf8iAsqVRAGlvrs9EVCUrx8pLx8fHvaSZjTUy8Sr0DhDD%2B9pvZbOYF%2F8EDmCpImXh1PGLaU0MA50%2FdPqw5mSY08Hc4hmBkJ5CTWCLExYOkAJehCqaJ6X56p86YdsmF%2BRw7nLUYFmP75O93BZfA5MB5tOKb47V09uCq4Sor7HDD5W0rduQgnDq2h%2FEOQr6wVr14h6mbO1hcUphXX14wZ%2FgVSEp90I3V1aJGwClVO%2FSC3plhnmDj%2FcJNiaH03OAw6PZsB%2BBAcVhx3mYoR2dY00iJfllDjmkgT6%2F4QHwKWTEv4%2FXQFtiofIVp1lOndDIEY9tPNZGgDvrNo8pLBohO4xd9%2FNDOtm1SCuJOGqblgk5D7P07SmKOl6WMz65dvLGQ%2BXSEud809isHcFEQrmBHQxPoRPjuw3QFfdD%2BmRMMak1cIGOqUBR48dR5rjKaxDAyhIC%2B%2BfxE3H4mJO8zDv0BrntfN5i%2FfR6PpzBFqBsQMKszgaAHltTxMF1c3w5zDu5fujycuiJ0%2BF6tnC7GnCM%2FxRoe5kOYzgRoGfVKZk1eM%2B5mjKMf4lhsBZ3IzAW7hk07vLKOUT99MMsV6q5ChyIXdOYWw9cIWcA4H%2BntF4hSlhCbNxMGHMudeNyU3y%2FARst5lCeD6ZumZFKMb5&X-Amz-Signature=9dae3f6b38bd9ae7a581c2d8f586a9278fa2f5ed26339c16869a3dd75dc73a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VVW2V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPWUo0HCH99A1Q5oAD6jgqSAdXzmwMUXwYe02m1p0PKAiEA9xYG1PqOD53MU2jLC4mwpOCVDQiWPojnPM%2BjJjZQwq8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrk1HQ7YPOZHtd3DircA25%2BOrVkbS0loOle8om3TaRL3WpJOPVkqEj82x7WaU%2BOxptsSImBm2ljI8W36%2F0Gvs2C6QJBvy9a0wlED9VdEYcA4VeBVpbZ1%2Ffhcg%2FN3kTtIy4QHfhLFdlUC8yEx%2BujnBb9PHB4cNmr%2BUJzG9mHzmPyGFPE5NzRPzScF%2BNsCkHKJZAB%2B7aMJuePqg%2B4DCd8divSkk5%2F0Y%2FPK%2BSOYY%2FRHqHeIf8iAsqVRAGlvrs9EVCUrx8pLx8fHvaSZjTUy8Sr0DhDD%2B9pvZbOYF%2F8EDmCpImXh1PGLaU0MA50%2FdPqw5mSY08Hc4hmBkJ5CTWCLExYOkAJehCqaJ6X56p86YdsmF%2BRw7nLUYFmP75O93BZfA5MB5tOKb47V09uCq4Sor7HDD5W0rduQgnDq2h%2FEOQr6wVr14h6mbO1hcUphXX14wZ%2FgVSEp90I3V1aJGwClVO%2FSC3plhnmDj%2FcJNiaH03OAw6PZsB%2BBAcVhx3mYoR2dY00iJfllDjmkgT6%2F4QHwKWTEv4%2FXQFtiofIVp1lOndDIEY9tPNZGgDvrNo8pLBohO4xd9%2FNDOtm1SCuJOGqblgk5D7P07SmKOl6WMz65dvLGQ%2BXSEud809isHcFEQrmBHQxPoRPjuw3QFfdD%2BmRMMak1cIGOqUBR48dR5rjKaxDAyhIC%2B%2BfxE3H4mJO8zDv0BrntfN5i%2FfR6PpzBFqBsQMKszgaAHltTxMF1c3w5zDu5fujycuiJ0%2BF6tnC7GnCM%2FxRoe5kOYzgRoGfVKZk1eM%2B5mjKMf4lhsBZ3IzAW7hk07vLKOUT99MMsV6q5ChyIXdOYWw9cIWcA4H%2BntF4hSlhCbNxMGHMudeNyU3y%2FARst5lCeD6ZumZFKMb5&X-Amz-Signature=bbc28f296e10eaa591a2e7214535e8a508cc47bdd5f6e282a9bc385d1b18767e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VVW2V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPWUo0HCH99A1Q5oAD6jgqSAdXzmwMUXwYe02m1p0PKAiEA9xYG1PqOD53MU2jLC4mwpOCVDQiWPojnPM%2BjJjZQwq8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrk1HQ7YPOZHtd3DircA25%2BOrVkbS0loOle8om3TaRL3WpJOPVkqEj82x7WaU%2BOxptsSImBm2ljI8W36%2F0Gvs2C6QJBvy9a0wlED9VdEYcA4VeBVpbZ1%2Ffhcg%2FN3kTtIy4QHfhLFdlUC8yEx%2BujnBb9PHB4cNmr%2BUJzG9mHzmPyGFPE5NzRPzScF%2BNsCkHKJZAB%2B7aMJuePqg%2B4DCd8divSkk5%2F0Y%2FPK%2BSOYY%2FRHqHeIf8iAsqVRAGlvrs9EVCUrx8pLx8fHvaSZjTUy8Sr0DhDD%2B9pvZbOYF%2F8EDmCpImXh1PGLaU0MA50%2FdPqw5mSY08Hc4hmBkJ5CTWCLExYOkAJehCqaJ6X56p86YdsmF%2BRw7nLUYFmP75O93BZfA5MB5tOKb47V09uCq4Sor7HDD5W0rduQgnDq2h%2FEOQr6wVr14h6mbO1hcUphXX14wZ%2FgVSEp90I3V1aJGwClVO%2FSC3plhnmDj%2FcJNiaH03OAw6PZsB%2BBAcVhx3mYoR2dY00iJfllDjmkgT6%2F4QHwKWTEv4%2FXQFtiofIVp1lOndDIEY9tPNZGgDvrNo8pLBohO4xd9%2FNDOtm1SCuJOGqblgk5D7P07SmKOl6WMz65dvLGQ%2BXSEud809isHcFEQrmBHQxPoRPjuw3QFfdD%2BmRMMak1cIGOqUBR48dR5rjKaxDAyhIC%2B%2BfxE3H4mJO8zDv0BrntfN5i%2FfR6PpzBFqBsQMKszgaAHltTxMF1c3w5zDu5fujycuiJ0%2BF6tnC7GnCM%2FxRoe5kOYzgRoGfVKZk1eM%2B5mjKMf4lhsBZ3IzAW7hk07vLKOUT99MMsV6q5ChyIXdOYWw9cIWcA4H%2BntF4hSlhCbNxMGHMudeNyU3y%2FARst5lCeD6ZumZFKMb5&X-Amz-Signature=3d95a795f2039a4a17fbee413d2eb1c58cd1091364d56f2666f3164c6dd87855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VVW2V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPWUo0HCH99A1Q5oAD6jgqSAdXzmwMUXwYe02m1p0PKAiEA9xYG1PqOD53MU2jLC4mwpOCVDQiWPojnPM%2BjJjZQwq8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrk1HQ7YPOZHtd3DircA25%2BOrVkbS0loOle8om3TaRL3WpJOPVkqEj82x7WaU%2BOxptsSImBm2ljI8W36%2F0Gvs2C6QJBvy9a0wlED9VdEYcA4VeBVpbZ1%2Ffhcg%2FN3kTtIy4QHfhLFdlUC8yEx%2BujnBb9PHB4cNmr%2BUJzG9mHzmPyGFPE5NzRPzScF%2BNsCkHKJZAB%2B7aMJuePqg%2B4DCd8divSkk5%2F0Y%2FPK%2BSOYY%2FRHqHeIf8iAsqVRAGlvrs9EVCUrx8pLx8fHvaSZjTUy8Sr0DhDD%2B9pvZbOYF%2F8EDmCpImXh1PGLaU0MA50%2FdPqw5mSY08Hc4hmBkJ5CTWCLExYOkAJehCqaJ6X56p86YdsmF%2BRw7nLUYFmP75O93BZfA5MB5tOKb47V09uCq4Sor7HDD5W0rduQgnDq2h%2FEOQr6wVr14h6mbO1hcUphXX14wZ%2FgVSEp90I3V1aJGwClVO%2FSC3plhnmDj%2FcJNiaH03OAw6PZsB%2BBAcVhx3mYoR2dY00iJfllDjmkgT6%2F4QHwKWTEv4%2FXQFtiofIVp1lOndDIEY9tPNZGgDvrNo8pLBohO4xd9%2FNDOtm1SCuJOGqblgk5D7P07SmKOl6WMz65dvLGQ%2BXSEud809isHcFEQrmBHQxPoRPjuw3QFfdD%2BmRMMak1cIGOqUBR48dR5rjKaxDAyhIC%2B%2BfxE3H4mJO8zDv0BrntfN5i%2FfR6PpzBFqBsQMKszgaAHltTxMF1c3w5zDu5fujycuiJ0%2BF6tnC7GnCM%2FxRoe5kOYzgRoGfVKZk1eM%2B5mjKMf4lhsBZ3IzAW7hk07vLKOUT99MMsV6q5ChyIXdOYWw9cIWcA4H%2BntF4hSlhCbNxMGHMudeNyU3y%2FARst5lCeD6ZumZFKMb5&X-Amz-Signature=5e2c96b15e345b4c9468077a714e88847f4cfcfe26da597e2c02a6cdcf9598f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VVW2V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPWUo0HCH99A1Q5oAD6jgqSAdXzmwMUXwYe02m1p0PKAiEA9xYG1PqOD53MU2jLC4mwpOCVDQiWPojnPM%2BjJjZQwq8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrk1HQ7YPOZHtd3DircA25%2BOrVkbS0loOle8om3TaRL3WpJOPVkqEj82x7WaU%2BOxptsSImBm2ljI8W36%2F0Gvs2C6QJBvy9a0wlED9VdEYcA4VeBVpbZ1%2Ffhcg%2FN3kTtIy4QHfhLFdlUC8yEx%2BujnBb9PHB4cNmr%2BUJzG9mHzmPyGFPE5NzRPzScF%2BNsCkHKJZAB%2B7aMJuePqg%2B4DCd8divSkk5%2F0Y%2FPK%2BSOYY%2FRHqHeIf8iAsqVRAGlvrs9EVCUrx8pLx8fHvaSZjTUy8Sr0DhDD%2B9pvZbOYF%2F8EDmCpImXh1PGLaU0MA50%2FdPqw5mSY08Hc4hmBkJ5CTWCLExYOkAJehCqaJ6X56p86YdsmF%2BRw7nLUYFmP75O93BZfA5MB5tOKb47V09uCq4Sor7HDD5W0rduQgnDq2h%2FEOQr6wVr14h6mbO1hcUphXX14wZ%2FgVSEp90I3V1aJGwClVO%2FSC3plhnmDj%2FcJNiaH03OAw6PZsB%2BBAcVhx3mYoR2dY00iJfllDjmkgT6%2F4QHwKWTEv4%2FXQFtiofIVp1lOndDIEY9tPNZGgDvrNo8pLBohO4xd9%2FNDOtm1SCuJOGqblgk5D7P07SmKOl6WMz65dvLGQ%2BXSEud809isHcFEQrmBHQxPoRPjuw3QFfdD%2BmRMMak1cIGOqUBR48dR5rjKaxDAyhIC%2B%2BfxE3H4mJO8zDv0BrntfN5i%2FfR6PpzBFqBsQMKszgaAHltTxMF1c3w5zDu5fujycuiJ0%2BF6tnC7GnCM%2FxRoe5kOYzgRoGfVKZk1eM%2B5mjKMf4lhsBZ3IzAW7hk07vLKOUT99MMsV6q5ChyIXdOYWw9cIWcA4H%2BntF4hSlhCbNxMGHMudeNyU3y%2FARst5lCeD6ZumZFKMb5&X-Amz-Signature=560dc366f510c0828ca37dd0cfcad0f4e6782c548fa7da110cf90167eb88dd1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6VVW2V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPWUo0HCH99A1Q5oAD6jgqSAdXzmwMUXwYe02m1p0PKAiEA9xYG1PqOD53MU2jLC4mwpOCVDQiWPojnPM%2BjJjZQwq8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrk1HQ7YPOZHtd3DircA25%2BOrVkbS0loOle8om3TaRL3WpJOPVkqEj82x7WaU%2BOxptsSImBm2ljI8W36%2F0Gvs2C6QJBvy9a0wlED9VdEYcA4VeBVpbZ1%2Ffhcg%2FN3kTtIy4QHfhLFdlUC8yEx%2BujnBb9PHB4cNmr%2BUJzG9mHzmPyGFPE5NzRPzScF%2BNsCkHKJZAB%2B7aMJuePqg%2B4DCd8divSkk5%2F0Y%2FPK%2BSOYY%2FRHqHeIf8iAsqVRAGlvrs9EVCUrx8pLx8fHvaSZjTUy8Sr0DhDD%2B9pvZbOYF%2F8EDmCpImXh1PGLaU0MA50%2FdPqw5mSY08Hc4hmBkJ5CTWCLExYOkAJehCqaJ6X56p86YdsmF%2BRw7nLUYFmP75O93BZfA5MB5tOKb47V09uCq4Sor7HDD5W0rduQgnDq2h%2FEOQr6wVr14h6mbO1hcUphXX14wZ%2FgVSEp90I3V1aJGwClVO%2FSC3plhnmDj%2FcJNiaH03OAw6PZsB%2BBAcVhx3mYoR2dY00iJfllDjmkgT6%2F4QHwKWTEv4%2FXQFtiofIVp1lOndDIEY9tPNZGgDvrNo8pLBohO4xd9%2FNDOtm1SCuJOGqblgk5D7P07SmKOl6WMz65dvLGQ%2BXSEud809isHcFEQrmBHQxPoRPjuw3QFfdD%2BmRMMak1cIGOqUBR48dR5rjKaxDAyhIC%2B%2BfxE3H4mJO8zDv0BrntfN5i%2FfR6PpzBFqBsQMKszgaAHltTxMF1c3w5zDu5fujycuiJ0%2BF6tnC7GnCM%2FxRoe5kOYzgRoGfVKZk1eM%2B5mjKMf4lhsBZ3IzAW7hk07vLKOUT99MMsV6q5ChyIXdOYWw9cIWcA4H%2BntF4hSlhCbNxMGHMudeNyU3y%2FARst5lCeD6ZumZFKMb5&X-Amz-Signature=f69369e86785b9c8fca04f159e45b2ffe231ff4e51142c5336da86de6e4f38c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
