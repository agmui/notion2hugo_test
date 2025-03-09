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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPAF5E3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCpD1nkFTqh4x9%2FExQLTjznM31U%2FlDpuzcpw5qpSLjiegIgPo5qzhkq%2FZOz7fPJrVuN7If71H7Cf9F4rBWdFarboN8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM%2Fz8nrNsWxUXu2jeSrcA5XBBglo4UxfXrfKKIa%2B4N7rWibkvUoBzyv01KU5P4Nc6bvTFdtueZM4mE1qreX6zhZH0dYmzAjyYl1P0oyayJqog%2BcAkzzdHCBZ5SyNdE8KdDu%2B6In8sUz%2FKY1gtYNxEobtjEySJFImec3NEmbpcdYBhVpFhmhjMGsmiwbf7irz%2F98VZV5CHcN%2FPnnMBCrMKG9oL3P3To5t%2Fd%2Fl6Cha1I%2BDIZSLUeWyQ%2BP8iMosM5EsXhO7EoVfrjWXQ3TQTsyGdfBbI09Gx0Z7cWVR42xjQ75pwmGhjqF5Q7uSgXaY%2FEn0V%2FMhAWgfs%2Br01oRtshtjScyWQRuNLUt5fhj4RAEWsNTyEpLUJCz26tzWAXkSn7WLV0sgqn%2B%2F6nioBvgNeGvJQOBJkDuvOaeaL5LWrrsDLchvWuQHzYcofdUHewkOZerEbQAVD%2BSNjUU%2F1U3ict%2FQmCphnd3AUelivBweVt6U2M6vfl4LuBjw8BZV3TAEVlEF7uaofMNuG%2FTuVbq0h1s87haASwAF0oWJiHJ0bjh90DG%2BhnqvRPo5fo%2B4h5eYTvvt9Xwa48yqGQZz4vuP4rWk0yDIoha995dtYcYPU6QLtGS1DtcBuFBGOuL8%2FYiLJEUbxcssTGSIX4w2f7OOMMmKtL4GOqUBC9fTk37bOo4xjUKQyiqt0cVquAxM%2Fz3np79X2pTtTgS1JFKsUW0OFxAiRm1%2Fr6Bg1T9n0Ifd1yn0%2FA36dMxr4NJxpn1icoClG1%2FDjWAAf1b0edNdPBhrOmV9%2BRYKkNnhCcCIaJHdNDfaKbay2YNCVo0jGM7NBfM%2BXauZNB0367Kha8ednePfAKgBLLvtL%2BWBCn0LthCHRG0s%2BGtLG6naDBHnOSVO&X-Amz-Signature=cb4383e928f7b10505bbcd4a88d75affd61daff1063cce5c20be64715c059eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPAF5E3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCpD1nkFTqh4x9%2FExQLTjznM31U%2FlDpuzcpw5qpSLjiegIgPo5qzhkq%2FZOz7fPJrVuN7If71H7Cf9F4rBWdFarboN8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM%2Fz8nrNsWxUXu2jeSrcA5XBBglo4UxfXrfKKIa%2B4N7rWibkvUoBzyv01KU5P4Nc6bvTFdtueZM4mE1qreX6zhZH0dYmzAjyYl1P0oyayJqog%2BcAkzzdHCBZ5SyNdE8KdDu%2B6In8sUz%2FKY1gtYNxEobtjEySJFImec3NEmbpcdYBhVpFhmhjMGsmiwbf7irz%2F98VZV5CHcN%2FPnnMBCrMKG9oL3P3To5t%2Fd%2Fl6Cha1I%2BDIZSLUeWyQ%2BP8iMosM5EsXhO7EoVfrjWXQ3TQTsyGdfBbI09Gx0Z7cWVR42xjQ75pwmGhjqF5Q7uSgXaY%2FEn0V%2FMhAWgfs%2Br01oRtshtjScyWQRuNLUt5fhj4RAEWsNTyEpLUJCz26tzWAXkSn7WLV0sgqn%2B%2F6nioBvgNeGvJQOBJkDuvOaeaL5LWrrsDLchvWuQHzYcofdUHewkOZerEbQAVD%2BSNjUU%2F1U3ict%2FQmCphnd3AUelivBweVt6U2M6vfl4LuBjw8BZV3TAEVlEF7uaofMNuG%2FTuVbq0h1s87haASwAF0oWJiHJ0bjh90DG%2BhnqvRPo5fo%2B4h5eYTvvt9Xwa48yqGQZz4vuP4rWk0yDIoha995dtYcYPU6QLtGS1DtcBuFBGOuL8%2FYiLJEUbxcssTGSIX4w2f7OOMMmKtL4GOqUBC9fTk37bOo4xjUKQyiqt0cVquAxM%2Fz3np79X2pTtTgS1JFKsUW0OFxAiRm1%2Fr6Bg1T9n0Ifd1yn0%2FA36dMxr4NJxpn1icoClG1%2FDjWAAf1b0edNdPBhrOmV9%2BRYKkNnhCcCIaJHdNDfaKbay2YNCVo0jGM7NBfM%2BXauZNB0367Kha8ednePfAKgBLLvtL%2BWBCn0LthCHRG0s%2BGtLG6naDBHnOSVO&X-Amz-Signature=d7aa5210778cb0b4313e4eed0ef2e4d7e91f36a4acd4a2e01d12ca9dba25d953&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPAF5E3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCpD1nkFTqh4x9%2FExQLTjznM31U%2FlDpuzcpw5qpSLjiegIgPo5qzhkq%2FZOz7fPJrVuN7If71H7Cf9F4rBWdFarboN8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM%2Fz8nrNsWxUXu2jeSrcA5XBBglo4UxfXrfKKIa%2B4N7rWibkvUoBzyv01KU5P4Nc6bvTFdtueZM4mE1qreX6zhZH0dYmzAjyYl1P0oyayJqog%2BcAkzzdHCBZ5SyNdE8KdDu%2B6In8sUz%2FKY1gtYNxEobtjEySJFImec3NEmbpcdYBhVpFhmhjMGsmiwbf7irz%2F98VZV5CHcN%2FPnnMBCrMKG9oL3P3To5t%2Fd%2Fl6Cha1I%2BDIZSLUeWyQ%2BP8iMosM5EsXhO7EoVfrjWXQ3TQTsyGdfBbI09Gx0Z7cWVR42xjQ75pwmGhjqF5Q7uSgXaY%2FEn0V%2FMhAWgfs%2Br01oRtshtjScyWQRuNLUt5fhj4RAEWsNTyEpLUJCz26tzWAXkSn7WLV0sgqn%2B%2F6nioBvgNeGvJQOBJkDuvOaeaL5LWrrsDLchvWuQHzYcofdUHewkOZerEbQAVD%2BSNjUU%2F1U3ict%2FQmCphnd3AUelivBweVt6U2M6vfl4LuBjw8BZV3TAEVlEF7uaofMNuG%2FTuVbq0h1s87haASwAF0oWJiHJ0bjh90DG%2BhnqvRPo5fo%2B4h5eYTvvt9Xwa48yqGQZz4vuP4rWk0yDIoha995dtYcYPU6QLtGS1DtcBuFBGOuL8%2FYiLJEUbxcssTGSIX4w2f7OOMMmKtL4GOqUBC9fTk37bOo4xjUKQyiqt0cVquAxM%2Fz3np79X2pTtTgS1JFKsUW0OFxAiRm1%2Fr6Bg1T9n0Ifd1yn0%2FA36dMxr4NJxpn1icoClG1%2FDjWAAf1b0edNdPBhrOmV9%2BRYKkNnhCcCIaJHdNDfaKbay2YNCVo0jGM7NBfM%2BXauZNB0367Kha8ednePfAKgBLLvtL%2BWBCn0LthCHRG0s%2BGtLG6naDBHnOSVO&X-Amz-Signature=6d085ea7a932eed851a8edc8cfb6701c20caa94cf75ee86dea6bdac684d2f3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPAF5E3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCpD1nkFTqh4x9%2FExQLTjznM31U%2FlDpuzcpw5qpSLjiegIgPo5qzhkq%2FZOz7fPJrVuN7If71H7Cf9F4rBWdFarboN8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM%2Fz8nrNsWxUXu2jeSrcA5XBBglo4UxfXrfKKIa%2B4N7rWibkvUoBzyv01KU5P4Nc6bvTFdtueZM4mE1qreX6zhZH0dYmzAjyYl1P0oyayJqog%2BcAkzzdHCBZ5SyNdE8KdDu%2B6In8sUz%2FKY1gtYNxEobtjEySJFImec3NEmbpcdYBhVpFhmhjMGsmiwbf7irz%2F98VZV5CHcN%2FPnnMBCrMKG9oL3P3To5t%2Fd%2Fl6Cha1I%2BDIZSLUeWyQ%2BP8iMosM5EsXhO7EoVfrjWXQ3TQTsyGdfBbI09Gx0Z7cWVR42xjQ75pwmGhjqF5Q7uSgXaY%2FEn0V%2FMhAWgfs%2Br01oRtshtjScyWQRuNLUt5fhj4RAEWsNTyEpLUJCz26tzWAXkSn7WLV0sgqn%2B%2F6nioBvgNeGvJQOBJkDuvOaeaL5LWrrsDLchvWuQHzYcofdUHewkOZerEbQAVD%2BSNjUU%2F1U3ict%2FQmCphnd3AUelivBweVt6U2M6vfl4LuBjw8BZV3TAEVlEF7uaofMNuG%2FTuVbq0h1s87haASwAF0oWJiHJ0bjh90DG%2BhnqvRPo5fo%2B4h5eYTvvt9Xwa48yqGQZz4vuP4rWk0yDIoha995dtYcYPU6QLtGS1DtcBuFBGOuL8%2FYiLJEUbxcssTGSIX4w2f7OOMMmKtL4GOqUBC9fTk37bOo4xjUKQyiqt0cVquAxM%2Fz3np79X2pTtTgS1JFKsUW0OFxAiRm1%2Fr6Bg1T9n0Ifd1yn0%2FA36dMxr4NJxpn1icoClG1%2FDjWAAf1b0edNdPBhrOmV9%2BRYKkNnhCcCIaJHdNDfaKbay2YNCVo0jGM7NBfM%2BXauZNB0367Kha8ednePfAKgBLLvtL%2BWBCn0LthCHRG0s%2BGtLG6naDBHnOSVO&X-Amz-Signature=1c8de88760135ee54515835571f8b057ba52b435bc908f9cbdad60ee70a2ff44&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPAF5E3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCpD1nkFTqh4x9%2FExQLTjznM31U%2FlDpuzcpw5qpSLjiegIgPo5qzhkq%2FZOz7fPJrVuN7If71H7Cf9F4rBWdFarboN8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM%2Fz8nrNsWxUXu2jeSrcA5XBBglo4UxfXrfKKIa%2B4N7rWibkvUoBzyv01KU5P4Nc6bvTFdtueZM4mE1qreX6zhZH0dYmzAjyYl1P0oyayJqog%2BcAkzzdHCBZ5SyNdE8KdDu%2B6In8sUz%2FKY1gtYNxEobtjEySJFImec3NEmbpcdYBhVpFhmhjMGsmiwbf7irz%2F98VZV5CHcN%2FPnnMBCrMKG9oL3P3To5t%2Fd%2Fl6Cha1I%2BDIZSLUeWyQ%2BP8iMosM5EsXhO7EoVfrjWXQ3TQTsyGdfBbI09Gx0Z7cWVR42xjQ75pwmGhjqF5Q7uSgXaY%2FEn0V%2FMhAWgfs%2Br01oRtshtjScyWQRuNLUt5fhj4RAEWsNTyEpLUJCz26tzWAXkSn7WLV0sgqn%2B%2F6nioBvgNeGvJQOBJkDuvOaeaL5LWrrsDLchvWuQHzYcofdUHewkOZerEbQAVD%2BSNjUU%2F1U3ict%2FQmCphnd3AUelivBweVt6U2M6vfl4LuBjw8BZV3TAEVlEF7uaofMNuG%2FTuVbq0h1s87haASwAF0oWJiHJ0bjh90DG%2BhnqvRPo5fo%2B4h5eYTvvt9Xwa48yqGQZz4vuP4rWk0yDIoha995dtYcYPU6QLtGS1DtcBuFBGOuL8%2FYiLJEUbxcssTGSIX4w2f7OOMMmKtL4GOqUBC9fTk37bOo4xjUKQyiqt0cVquAxM%2Fz3np79X2pTtTgS1JFKsUW0OFxAiRm1%2Fr6Bg1T9n0Ifd1yn0%2FA36dMxr4NJxpn1icoClG1%2FDjWAAf1b0edNdPBhrOmV9%2BRYKkNnhCcCIaJHdNDfaKbay2YNCVo0jGM7NBfM%2BXauZNB0367Kha8ednePfAKgBLLvtL%2BWBCn0LthCHRG0s%2BGtLG6naDBHnOSVO&X-Amz-Signature=80175eaa70158c222e8478c35c1b2549ee6d353d2f763b826bfed70f2f7c816b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPAF5E3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCpD1nkFTqh4x9%2FExQLTjznM31U%2FlDpuzcpw5qpSLjiegIgPo5qzhkq%2FZOz7fPJrVuN7If71H7Cf9F4rBWdFarboN8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM%2Fz8nrNsWxUXu2jeSrcA5XBBglo4UxfXrfKKIa%2B4N7rWibkvUoBzyv01KU5P4Nc6bvTFdtueZM4mE1qreX6zhZH0dYmzAjyYl1P0oyayJqog%2BcAkzzdHCBZ5SyNdE8KdDu%2B6In8sUz%2FKY1gtYNxEobtjEySJFImec3NEmbpcdYBhVpFhmhjMGsmiwbf7irz%2F98VZV5CHcN%2FPnnMBCrMKG9oL3P3To5t%2Fd%2Fl6Cha1I%2BDIZSLUeWyQ%2BP8iMosM5EsXhO7EoVfrjWXQ3TQTsyGdfBbI09Gx0Z7cWVR42xjQ75pwmGhjqF5Q7uSgXaY%2FEn0V%2FMhAWgfs%2Br01oRtshtjScyWQRuNLUt5fhj4RAEWsNTyEpLUJCz26tzWAXkSn7WLV0sgqn%2B%2F6nioBvgNeGvJQOBJkDuvOaeaL5LWrrsDLchvWuQHzYcofdUHewkOZerEbQAVD%2BSNjUU%2F1U3ict%2FQmCphnd3AUelivBweVt6U2M6vfl4LuBjw8BZV3TAEVlEF7uaofMNuG%2FTuVbq0h1s87haASwAF0oWJiHJ0bjh90DG%2BhnqvRPo5fo%2B4h5eYTvvt9Xwa48yqGQZz4vuP4rWk0yDIoha995dtYcYPU6QLtGS1DtcBuFBGOuL8%2FYiLJEUbxcssTGSIX4w2f7OOMMmKtL4GOqUBC9fTk37bOo4xjUKQyiqt0cVquAxM%2Fz3np79X2pTtTgS1JFKsUW0OFxAiRm1%2Fr6Bg1T9n0Ifd1yn0%2FA36dMxr4NJxpn1icoClG1%2FDjWAAf1b0edNdPBhrOmV9%2BRYKkNnhCcCIaJHdNDfaKbay2YNCVo0jGM7NBfM%2BXauZNB0367Kha8ednePfAKgBLLvtL%2BWBCn0LthCHRG0s%2BGtLG6naDBHnOSVO&X-Amz-Signature=fd0a1aa4e7acd422c0a3e122184a5fa399d67043df2097a182553ea409e89557&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPAF5E3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCpD1nkFTqh4x9%2FExQLTjznM31U%2FlDpuzcpw5qpSLjiegIgPo5qzhkq%2FZOz7fPJrVuN7If71H7Cf9F4rBWdFarboN8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM%2Fz8nrNsWxUXu2jeSrcA5XBBglo4UxfXrfKKIa%2B4N7rWibkvUoBzyv01KU5P4Nc6bvTFdtueZM4mE1qreX6zhZH0dYmzAjyYl1P0oyayJqog%2BcAkzzdHCBZ5SyNdE8KdDu%2B6In8sUz%2FKY1gtYNxEobtjEySJFImec3NEmbpcdYBhVpFhmhjMGsmiwbf7irz%2F98VZV5CHcN%2FPnnMBCrMKG9oL3P3To5t%2Fd%2Fl6Cha1I%2BDIZSLUeWyQ%2BP8iMosM5EsXhO7EoVfrjWXQ3TQTsyGdfBbI09Gx0Z7cWVR42xjQ75pwmGhjqF5Q7uSgXaY%2FEn0V%2FMhAWgfs%2Br01oRtshtjScyWQRuNLUt5fhj4RAEWsNTyEpLUJCz26tzWAXkSn7WLV0sgqn%2B%2F6nioBvgNeGvJQOBJkDuvOaeaL5LWrrsDLchvWuQHzYcofdUHewkOZerEbQAVD%2BSNjUU%2F1U3ict%2FQmCphnd3AUelivBweVt6U2M6vfl4LuBjw8BZV3TAEVlEF7uaofMNuG%2FTuVbq0h1s87haASwAF0oWJiHJ0bjh90DG%2BhnqvRPo5fo%2B4h5eYTvvt9Xwa48yqGQZz4vuP4rWk0yDIoha995dtYcYPU6QLtGS1DtcBuFBGOuL8%2FYiLJEUbxcssTGSIX4w2f7OOMMmKtL4GOqUBC9fTk37bOo4xjUKQyiqt0cVquAxM%2Fz3np79X2pTtTgS1JFKsUW0OFxAiRm1%2Fr6Bg1T9n0Ifd1yn0%2FA36dMxr4NJxpn1icoClG1%2FDjWAAf1b0edNdPBhrOmV9%2BRYKkNnhCcCIaJHdNDfaKbay2YNCVo0jGM7NBfM%2BXauZNB0367Kha8ednePfAKgBLLvtL%2BWBCn0LthCHRG0s%2BGtLG6naDBHnOSVO&X-Amz-Signature=742cc14e3868f4c47b800462e9a991788315b3f563e0a48a867a7a025bee2b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
