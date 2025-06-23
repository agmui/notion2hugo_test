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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GXN7PF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCfZ0BNLcqJWpvIvCMWUkbVsK3ZqfuqptGHddbD4Dtk0gIgVGqR0HnI51RXywGUEc8%2Bdq27EdRDyiHEhPvKvlgEmnoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM7xgeIcfsuAg6XLByrcAzI4e%2BxYsGs6Sv2nR6tmSdr1JPHu%2Fscr8aDJ2DBz94SAlRrrcz5qZlTZBJu%2FIMCFoiWfI86OsJC%2FMwKgspEr3oj9QSeEYq9EWPJnBipJ9ZHW%2BHuuWBn4eAZzUk%2BNclLRg4j3WgUptIw417jVtdnFfujP1i5ExKeIDcGfAFPmLKNPltq%2Fa4y8MXAFAiNyTKm%2Bzjn2qnRGxulIa6avqKTpIIsEJukCn%2BzeZ0V23jdAjazzahS1kQ3LQk%2BilaWBAlITOFG5EABQ3aXnKplFr5PX8poCZwJWCIOAdLOTyMUvUYMQy%2F72w0hyKmTb4lq1%2FpWwZRW2I7KIsjN6OCSzeBOO4Zsi5XBBE3rFHJLoqklcVMZNZOuvRnAa5t2f3YP7KF5Ph9FOUz4izMsg32CH8r17u5Bj5wDN2oH1O6PMp1DWwUJYmHiG3kByjVIsA2qDDfserxQucHxXgrQ0ZZ1YQlBzEaBr8od%2B5UX0mtphm2lFJ0Ztoy6UZ2dpQUnwoe%2Bq%2BOSvZRuAJYx02kfDYoAdxiz9RR6OW7Towfp0XncoVdSuFvk29BE%2B1dEdVyeJe%2BMDmDdzUCGA1zcIek7Q7w2sTSjk88BrSbL0%2BY4xq%2FRFXldgkqDUsT%2BkId65hfS0CSd4MN2O58IGOqUB4uZYD05939bB6TXom7w0eEtR9QY5ccsU3Avroa%2BUPQ7dyESK5WTspDNiOVjCfnrFBeJg2GPoR1aqznPzL9URYWpiYagkmXI%2FeBAprTjwdQOs6Zhq1%2FxE4KymCYxAEl%2B8hcI9wqc%2F6XKfLP%2BdKqEW4Sk795zuq%2F0ryDWuWAbKLqzTA288DXe7ltD%2FSH0Pyv8OhTBVqGLTkyLrVKYDrkiEq%2Fz7gbGf&X-Amz-Signature=07a2a4bd26fd724306c5f67ce496a6c54225a19572821044b9899413b5aca5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GXN7PF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCfZ0BNLcqJWpvIvCMWUkbVsK3ZqfuqptGHddbD4Dtk0gIgVGqR0HnI51RXywGUEc8%2Bdq27EdRDyiHEhPvKvlgEmnoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM7xgeIcfsuAg6XLByrcAzI4e%2BxYsGs6Sv2nR6tmSdr1JPHu%2Fscr8aDJ2DBz94SAlRrrcz5qZlTZBJu%2FIMCFoiWfI86OsJC%2FMwKgspEr3oj9QSeEYq9EWPJnBipJ9ZHW%2BHuuWBn4eAZzUk%2BNclLRg4j3WgUptIw417jVtdnFfujP1i5ExKeIDcGfAFPmLKNPltq%2Fa4y8MXAFAiNyTKm%2Bzjn2qnRGxulIa6avqKTpIIsEJukCn%2BzeZ0V23jdAjazzahS1kQ3LQk%2BilaWBAlITOFG5EABQ3aXnKplFr5PX8poCZwJWCIOAdLOTyMUvUYMQy%2F72w0hyKmTb4lq1%2FpWwZRW2I7KIsjN6OCSzeBOO4Zsi5XBBE3rFHJLoqklcVMZNZOuvRnAa5t2f3YP7KF5Ph9FOUz4izMsg32CH8r17u5Bj5wDN2oH1O6PMp1DWwUJYmHiG3kByjVIsA2qDDfserxQucHxXgrQ0ZZ1YQlBzEaBr8od%2B5UX0mtphm2lFJ0Ztoy6UZ2dpQUnwoe%2Bq%2BOSvZRuAJYx02kfDYoAdxiz9RR6OW7Towfp0XncoVdSuFvk29BE%2B1dEdVyeJe%2BMDmDdzUCGA1zcIek7Q7w2sTSjk88BrSbL0%2BY4xq%2FRFXldgkqDUsT%2BkId65hfS0CSd4MN2O58IGOqUB4uZYD05939bB6TXom7w0eEtR9QY5ccsU3Avroa%2BUPQ7dyESK5WTspDNiOVjCfnrFBeJg2GPoR1aqznPzL9URYWpiYagkmXI%2FeBAprTjwdQOs6Zhq1%2FxE4KymCYxAEl%2B8hcI9wqc%2F6XKfLP%2BdKqEW4Sk795zuq%2F0ryDWuWAbKLqzTA288DXe7ltD%2FSH0Pyv8OhTBVqGLTkyLrVKYDrkiEq%2Fz7gbGf&X-Amz-Signature=b7c1aa7a78513ab8e59513560a010283f97866c6fa053f0768e9f011bb72a88d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GXN7PF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCfZ0BNLcqJWpvIvCMWUkbVsK3ZqfuqptGHddbD4Dtk0gIgVGqR0HnI51RXywGUEc8%2Bdq27EdRDyiHEhPvKvlgEmnoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM7xgeIcfsuAg6XLByrcAzI4e%2BxYsGs6Sv2nR6tmSdr1JPHu%2Fscr8aDJ2DBz94SAlRrrcz5qZlTZBJu%2FIMCFoiWfI86OsJC%2FMwKgspEr3oj9QSeEYq9EWPJnBipJ9ZHW%2BHuuWBn4eAZzUk%2BNclLRg4j3WgUptIw417jVtdnFfujP1i5ExKeIDcGfAFPmLKNPltq%2Fa4y8MXAFAiNyTKm%2Bzjn2qnRGxulIa6avqKTpIIsEJukCn%2BzeZ0V23jdAjazzahS1kQ3LQk%2BilaWBAlITOFG5EABQ3aXnKplFr5PX8poCZwJWCIOAdLOTyMUvUYMQy%2F72w0hyKmTb4lq1%2FpWwZRW2I7KIsjN6OCSzeBOO4Zsi5XBBE3rFHJLoqklcVMZNZOuvRnAa5t2f3YP7KF5Ph9FOUz4izMsg32CH8r17u5Bj5wDN2oH1O6PMp1DWwUJYmHiG3kByjVIsA2qDDfserxQucHxXgrQ0ZZ1YQlBzEaBr8od%2B5UX0mtphm2lFJ0Ztoy6UZ2dpQUnwoe%2Bq%2BOSvZRuAJYx02kfDYoAdxiz9RR6OW7Towfp0XncoVdSuFvk29BE%2B1dEdVyeJe%2BMDmDdzUCGA1zcIek7Q7w2sTSjk88BrSbL0%2BY4xq%2FRFXldgkqDUsT%2BkId65hfS0CSd4MN2O58IGOqUB4uZYD05939bB6TXom7w0eEtR9QY5ccsU3Avroa%2BUPQ7dyESK5WTspDNiOVjCfnrFBeJg2GPoR1aqznPzL9URYWpiYagkmXI%2FeBAprTjwdQOs6Zhq1%2FxE4KymCYxAEl%2B8hcI9wqc%2F6XKfLP%2BdKqEW4Sk795zuq%2F0ryDWuWAbKLqzTA288DXe7ltD%2FSH0Pyv8OhTBVqGLTkyLrVKYDrkiEq%2Fz7gbGf&X-Amz-Signature=7bdf1a6c5739c2ba77a4555f6c885b44ed86710356b2abb80cbf6c33f81c149d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GXN7PF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCfZ0BNLcqJWpvIvCMWUkbVsK3ZqfuqptGHddbD4Dtk0gIgVGqR0HnI51RXywGUEc8%2Bdq27EdRDyiHEhPvKvlgEmnoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM7xgeIcfsuAg6XLByrcAzI4e%2BxYsGs6Sv2nR6tmSdr1JPHu%2Fscr8aDJ2DBz94SAlRrrcz5qZlTZBJu%2FIMCFoiWfI86OsJC%2FMwKgspEr3oj9QSeEYq9EWPJnBipJ9ZHW%2BHuuWBn4eAZzUk%2BNclLRg4j3WgUptIw417jVtdnFfujP1i5ExKeIDcGfAFPmLKNPltq%2Fa4y8MXAFAiNyTKm%2Bzjn2qnRGxulIa6avqKTpIIsEJukCn%2BzeZ0V23jdAjazzahS1kQ3LQk%2BilaWBAlITOFG5EABQ3aXnKplFr5PX8poCZwJWCIOAdLOTyMUvUYMQy%2F72w0hyKmTb4lq1%2FpWwZRW2I7KIsjN6OCSzeBOO4Zsi5XBBE3rFHJLoqklcVMZNZOuvRnAa5t2f3YP7KF5Ph9FOUz4izMsg32CH8r17u5Bj5wDN2oH1O6PMp1DWwUJYmHiG3kByjVIsA2qDDfserxQucHxXgrQ0ZZ1YQlBzEaBr8od%2B5UX0mtphm2lFJ0Ztoy6UZ2dpQUnwoe%2Bq%2BOSvZRuAJYx02kfDYoAdxiz9RR6OW7Towfp0XncoVdSuFvk29BE%2B1dEdVyeJe%2BMDmDdzUCGA1zcIek7Q7w2sTSjk88BrSbL0%2BY4xq%2FRFXldgkqDUsT%2BkId65hfS0CSd4MN2O58IGOqUB4uZYD05939bB6TXom7w0eEtR9QY5ccsU3Avroa%2BUPQ7dyESK5WTspDNiOVjCfnrFBeJg2GPoR1aqznPzL9URYWpiYagkmXI%2FeBAprTjwdQOs6Zhq1%2FxE4KymCYxAEl%2B8hcI9wqc%2F6XKfLP%2BdKqEW4Sk795zuq%2F0ryDWuWAbKLqzTA288DXe7ltD%2FSH0Pyv8OhTBVqGLTkyLrVKYDrkiEq%2Fz7gbGf&X-Amz-Signature=b98e495b651cd8ebc1db33f59f9d726ed119ccd69be128bb8c2a8534607b9a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GXN7PF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCfZ0BNLcqJWpvIvCMWUkbVsK3ZqfuqptGHddbD4Dtk0gIgVGqR0HnI51RXywGUEc8%2Bdq27EdRDyiHEhPvKvlgEmnoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM7xgeIcfsuAg6XLByrcAzI4e%2BxYsGs6Sv2nR6tmSdr1JPHu%2Fscr8aDJ2DBz94SAlRrrcz5qZlTZBJu%2FIMCFoiWfI86OsJC%2FMwKgspEr3oj9QSeEYq9EWPJnBipJ9ZHW%2BHuuWBn4eAZzUk%2BNclLRg4j3WgUptIw417jVtdnFfujP1i5ExKeIDcGfAFPmLKNPltq%2Fa4y8MXAFAiNyTKm%2Bzjn2qnRGxulIa6avqKTpIIsEJukCn%2BzeZ0V23jdAjazzahS1kQ3LQk%2BilaWBAlITOFG5EABQ3aXnKplFr5PX8poCZwJWCIOAdLOTyMUvUYMQy%2F72w0hyKmTb4lq1%2FpWwZRW2I7KIsjN6OCSzeBOO4Zsi5XBBE3rFHJLoqklcVMZNZOuvRnAa5t2f3YP7KF5Ph9FOUz4izMsg32CH8r17u5Bj5wDN2oH1O6PMp1DWwUJYmHiG3kByjVIsA2qDDfserxQucHxXgrQ0ZZ1YQlBzEaBr8od%2B5UX0mtphm2lFJ0Ztoy6UZ2dpQUnwoe%2Bq%2BOSvZRuAJYx02kfDYoAdxiz9RR6OW7Towfp0XncoVdSuFvk29BE%2B1dEdVyeJe%2BMDmDdzUCGA1zcIek7Q7w2sTSjk88BrSbL0%2BY4xq%2FRFXldgkqDUsT%2BkId65hfS0CSd4MN2O58IGOqUB4uZYD05939bB6TXom7w0eEtR9QY5ccsU3Avroa%2BUPQ7dyESK5WTspDNiOVjCfnrFBeJg2GPoR1aqznPzL9URYWpiYagkmXI%2FeBAprTjwdQOs6Zhq1%2FxE4KymCYxAEl%2B8hcI9wqc%2F6XKfLP%2BdKqEW4Sk795zuq%2F0ryDWuWAbKLqzTA288DXe7ltD%2FSH0Pyv8OhTBVqGLTkyLrVKYDrkiEq%2Fz7gbGf&X-Amz-Signature=3a25a2021e8c91b9f83d72e4267e34a1119757718831c947c7f915b503178d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GXN7PF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCfZ0BNLcqJWpvIvCMWUkbVsK3ZqfuqptGHddbD4Dtk0gIgVGqR0HnI51RXywGUEc8%2Bdq27EdRDyiHEhPvKvlgEmnoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM7xgeIcfsuAg6XLByrcAzI4e%2BxYsGs6Sv2nR6tmSdr1JPHu%2Fscr8aDJ2DBz94SAlRrrcz5qZlTZBJu%2FIMCFoiWfI86OsJC%2FMwKgspEr3oj9QSeEYq9EWPJnBipJ9ZHW%2BHuuWBn4eAZzUk%2BNclLRg4j3WgUptIw417jVtdnFfujP1i5ExKeIDcGfAFPmLKNPltq%2Fa4y8MXAFAiNyTKm%2Bzjn2qnRGxulIa6avqKTpIIsEJukCn%2BzeZ0V23jdAjazzahS1kQ3LQk%2BilaWBAlITOFG5EABQ3aXnKplFr5PX8poCZwJWCIOAdLOTyMUvUYMQy%2F72w0hyKmTb4lq1%2FpWwZRW2I7KIsjN6OCSzeBOO4Zsi5XBBE3rFHJLoqklcVMZNZOuvRnAa5t2f3YP7KF5Ph9FOUz4izMsg32CH8r17u5Bj5wDN2oH1O6PMp1DWwUJYmHiG3kByjVIsA2qDDfserxQucHxXgrQ0ZZ1YQlBzEaBr8od%2B5UX0mtphm2lFJ0Ztoy6UZ2dpQUnwoe%2Bq%2BOSvZRuAJYx02kfDYoAdxiz9RR6OW7Towfp0XncoVdSuFvk29BE%2B1dEdVyeJe%2BMDmDdzUCGA1zcIek7Q7w2sTSjk88BrSbL0%2BY4xq%2FRFXldgkqDUsT%2BkId65hfS0CSd4MN2O58IGOqUB4uZYD05939bB6TXom7w0eEtR9QY5ccsU3Avroa%2BUPQ7dyESK5WTspDNiOVjCfnrFBeJg2GPoR1aqznPzL9URYWpiYagkmXI%2FeBAprTjwdQOs6Zhq1%2FxE4KymCYxAEl%2B8hcI9wqc%2F6XKfLP%2BdKqEW4Sk795zuq%2F0ryDWuWAbKLqzTA288DXe7ltD%2FSH0Pyv8OhTBVqGLTkyLrVKYDrkiEq%2Fz7gbGf&X-Amz-Signature=40bab66ace2844b2df8d51ea19165eafd02fbfcb15e1427784af292f5fe8e056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GXN7PF%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCfZ0BNLcqJWpvIvCMWUkbVsK3ZqfuqptGHddbD4Dtk0gIgVGqR0HnI51RXywGUEc8%2Bdq27EdRDyiHEhPvKvlgEmnoq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM7xgeIcfsuAg6XLByrcAzI4e%2BxYsGs6Sv2nR6tmSdr1JPHu%2Fscr8aDJ2DBz94SAlRrrcz5qZlTZBJu%2FIMCFoiWfI86OsJC%2FMwKgspEr3oj9QSeEYq9EWPJnBipJ9ZHW%2BHuuWBn4eAZzUk%2BNclLRg4j3WgUptIw417jVtdnFfujP1i5ExKeIDcGfAFPmLKNPltq%2Fa4y8MXAFAiNyTKm%2Bzjn2qnRGxulIa6avqKTpIIsEJukCn%2BzeZ0V23jdAjazzahS1kQ3LQk%2BilaWBAlITOFG5EABQ3aXnKplFr5PX8poCZwJWCIOAdLOTyMUvUYMQy%2F72w0hyKmTb4lq1%2FpWwZRW2I7KIsjN6OCSzeBOO4Zsi5XBBE3rFHJLoqklcVMZNZOuvRnAa5t2f3YP7KF5Ph9FOUz4izMsg32CH8r17u5Bj5wDN2oH1O6PMp1DWwUJYmHiG3kByjVIsA2qDDfserxQucHxXgrQ0ZZ1YQlBzEaBr8od%2B5UX0mtphm2lFJ0Ztoy6UZ2dpQUnwoe%2Bq%2BOSvZRuAJYx02kfDYoAdxiz9RR6OW7Towfp0XncoVdSuFvk29BE%2B1dEdVyeJe%2BMDmDdzUCGA1zcIek7Q7w2sTSjk88BrSbL0%2BY4xq%2FRFXldgkqDUsT%2BkId65hfS0CSd4MN2O58IGOqUB4uZYD05939bB6TXom7w0eEtR9QY5ccsU3Avroa%2BUPQ7dyESK5WTspDNiOVjCfnrFBeJg2GPoR1aqznPzL9URYWpiYagkmXI%2FeBAprTjwdQOs6Zhq1%2FxE4KymCYxAEl%2B8hcI9wqc%2F6XKfLP%2BdKqEW4Sk795zuq%2F0ryDWuWAbKLqzTA288DXe7ltD%2FSH0Pyv8OhTBVqGLTkyLrVKYDrkiEq%2Fz7gbGf&X-Amz-Signature=77c93f0b30669ebb4cd2eaf368d945ef8b57c3833eec704ba4aa0355b6ce38e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
