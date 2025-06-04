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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOT4MNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFCNBuHFDTxyt%2BjodlS%2FdDRhB%2BF0U9eYFRpmASQ3833HAiEAy64fHRKptIyo3oLHdfwD6%2BW2tUf21pR%2BDYclXiZUhLQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW%2FEIecwezs9d%2BaYCrcA50x7fQ0BuL%2BfI1ewYfKv%2B0tTzs9bBJWUv%2BmyOAnAnWkcQ2ooHa7s%2FWVrMJbZmmz%2FzvVFLbn4yY0o4N6PcPuh%2FUI4xidAh%2B4uDbuioizAjjZ7rsSvAT525Kf72SG5sVwU9V5%2BUgmDyrzdFlUlsSGMEoU5uTL2NPNhfJTsIdiF3H52Z9cPC2JSbobnbPVXDZs1izjODW1ctsuOopGwHCEuxs01m96YUWcgeEV1kuZUgXipYVmGAcLuUhoeo%2FDZSnHPLQGIQCibAGVvr094xVd3FMANJVH8cav3%2Fu4steSIplWg7axLa%2FxP1421MwpE1TnOV%2FfFPJY7xEH3VDHxlj42zNUIf0kAjY%2BwFDE62ni8cWqRlrurJBAfUONGjpAaeipwvaelzAAzNmSMpCmzLvgqL1t5IrwVSN1yuEMdT0lf5S8%2FoIzSeTxa3XuEkD3Oeptx635%2FGwhjWxjT8L60EeoWDzdJmKX3pZ%2F2I2JiOrtVDP7AxuU5QWaYnv1WJ%2BodzH7QW1YHc2BHT1VjILNpTeZCdQpcPvBWFz898562Rsmmi986E14sW82zNJSY368V19RjzBcEs%2BT0zhpc2gUKv1EUT23aoJEtvhvr4Kp2to01hQqf6EKJPi%2BpOrP4RrHMLuI%2F8EGOqUBpLA1CX2xnrDNIAVFm9ByErXzXH8YCOGC45QCmsi41aGLOlru0%2FYULfK24Qm5lUNyjy%2FYTgvRa9YZd%2FznoCPOoGhBlz%2FJavhiPd2miAnAJ0JF12KNVfXO957llp2OP4NzmQqFFto9A8C8hnfJJ1ZYKovbCPNyNFGflAOsEtY4Z6hHa5A8lg4Inwi%2FFLCrVFMszh4tO8HwYfzl4jopN24nmj%2FanWd8&X-Amz-Signature=1d990aa49b84c834cd702ba6127d814960d91e0f9534368b91887e7fc6d0c270&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOT4MNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFCNBuHFDTxyt%2BjodlS%2FdDRhB%2BF0U9eYFRpmASQ3833HAiEAy64fHRKptIyo3oLHdfwD6%2BW2tUf21pR%2BDYclXiZUhLQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW%2FEIecwezs9d%2BaYCrcA50x7fQ0BuL%2BfI1ewYfKv%2B0tTzs9bBJWUv%2BmyOAnAnWkcQ2ooHa7s%2FWVrMJbZmmz%2FzvVFLbn4yY0o4N6PcPuh%2FUI4xidAh%2B4uDbuioizAjjZ7rsSvAT525Kf72SG5sVwU9V5%2BUgmDyrzdFlUlsSGMEoU5uTL2NPNhfJTsIdiF3H52Z9cPC2JSbobnbPVXDZs1izjODW1ctsuOopGwHCEuxs01m96YUWcgeEV1kuZUgXipYVmGAcLuUhoeo%2FDZSnHPLQGIQCibAGVvr094xVd3FMANJVH8cav3%2Fu4steSIplWg7axLa%2FxP1421MwpE1TnOV%2FfFPJY7xEH3VDHxlj42zNUIf0kAjY%2BwFDE62ni8cWqRlrurJBAfUONGjpAaeipwvaelzAAzNmSMpCmzLvgqL1t5IrwVSN1yuEMdT0lf5S8%2FoIzSeTxa3XuEkD3Oeptx635%2FGwhjWxjT8L60EeoWDzdJmKX3pZ%2F2I2JiOrtVDP7AxuU5QWaYnv1WJ%2BodzH7QW1YHc2BHT1VjILNpTeZCdQpcPvBWFz898562Rsmmi986E14sW82zNJSY368V19RjzBcEs%2BT0zhpc2gUKv1EUT23aoJEtvhvr4Kp2to01hQqf6EKJPi%2BpOrP4RrHMLuI%2F8EGOqUBpLA1CX2xnrDNIAVFm9ByErXzXH8YCOGC45QCmsi41aGLOlru0%2FYULfK24Qm5lUNyjy%2FYTgvRa9YZd%2FznoCPOoGhBlz%2FJavhiPd2miAnAJ0JF12KNVfXO957llp2OP4NzmQqFFto9A8C8hnfJJ1ZYKovbCPNyNFGflAOsEtY4Z6hHa5A8lg4Inwi%2FFLCrVFMszh4tO8HwYfzl4jopN24nmj%2FanWd8&X-Amz-Signature=ba7b9ef7027ee89b1c9c25a567156ac6e6695880f43678a3eeee4c013c2fae5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOT4MNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFCNBuHFDTxyt%2BjodlS%2FdDRhB%2BF0U9eYFRpmASQ3833HAiEAy64fHRKptIyo3oLHdfwD6%2BW2tUf21pR%2BDYclXiZUhLQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW%2FEIecwezs9d%2BaYCrcA50x7fQ0BuL%2BfI1ewYfKv%2B0tTzs9bBJWUv%2BmyOAnAnWkcQ2ooHa7s%2FWVrMJbZmmz%2FzvVFLbn4yY0o4N6PcPuh%2FUI4xidAh%2B4uDbuioizAjjZ7rsSvAT525Kf72SG5sVwU9V5%2BUgmDyrzdFlUlsSGMEoU5uTL2NPNhfJTsIdiF3H52Z9cPC2JSbobnbPVXDZs1izjODW1ctsuOopGwHCEuxs01m96YUWcgeEV1kuZUgXipYVmGAcLuUhoeo%2FDZSnHPLQGIQCibAGVvr094xVd3FMANJVH8cav3%2Fu4steSIplWg7axLa%2FxP1421MwpE1TnOV%2FfFPJY7xEH3VDHxlj42zNUIf0kAjY%2BwFDE62ni8cWqRlrurJBAfUONGjpAaeipwvaelzAAzNmSMpCmzLvgqL1t5IrwVSN1yuEMdT0lf5S8%2FoIzSeTxa3XuEkD3Oeptx635%2FGwhjWxjT8L60EeoWDzdJmKX3pZ%2F2I2JiOrtVDP7AxuU5QWaYnv1WJ%2BodzH7QW1YHc2BHT1VjILNpTeZCdQpcPvBWFz898562Rsmmi986E14sW82zNJSY368V19RjzBcEs%2BT0zhpc2gUKv1EUT23aoJEtvhvr4Kp2to01hQqf6EKJPi%2BpOrP4RrHMLuI%2F8EGOqUBpLA1CX2xnrDNIAVFm9ByErXzXH8YCOGC45QCmsi41aGLOlru0%2FYULfK24Qm5lUNyjy%2FYTgvRa9YZd%2FznoCPOoGhBlz%2FJavhiPd2miAnAJ0JF12KNVfXO957llp2OP4NzmQqFFto9A8C8hnfJJ1ZYKovbCPNyNFGflAOsEtY4Z6hHa5A8lg4Inwi%2FFLCrVFMszh4tO8HwYfzl4jopN24nmj%2FanWd8&X-Amz-Signature=562ed63f3edfc500dbfeb1b874f11c85f1203a92d228f71de8f352cbbcc5a5f9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOT4MNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFCNBuHFDTxyt%2BjodlS%2FdDRhB%2BF0U9eYFRpmASQ3833HAiEAy64fHRKptIyo3oLHdfwD6%2BW2tUf21pR%2BDYclXiZUhLQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW%2FEIecwezs9d%2BaYCrcA50x7fQ0BuL%2BfI1ewYfKv%2B0tTzs9bBJWUv%2BmyOAnAnWkcQ2ooHa7s%2FWVrMJbZmmz%2FzvVFLbn4yY0o4N6PcPuh%2FUI4xidAh%2B4uDbuioizAjjZ7rsSvAT525Kf72SG5sVwU9V5%2BUgmDyrzdFlUlsSGMEoU5uTL2NPNhfJTsIdiF3H52Z9cPC2JSbobnbPVXDZs1izjODW1ctsuOopGwHCEuxs01m96YUWcgeEV1kuZUgXipYVmGAcLuUhoeo%2FDZSnHPLQGIQCibAGVvr094xVd3FMANJVH8cav3%2Fu4steSIplWg7axLa%2FxP1421MwpE1TnOV%2FfFPJY7xEH3VDHxlj42zNUIf0kAjY%2BwFDE62ni8cWqRlrurJBAfUONGjpAaeipwvaelzAAzNmSMpCmzLvgqL1t5IrwVSN1yuEMdT0lf5S8%2FoIzSeTxa3XuEkD3Oeptx635%2FGwhjWxjT8L60EeoWDzdJmKX3pZ%2F2I2JiOrtVDP7AxuU5QWaYnv1WJ%2BodzH7QW1YHc2BHT1VjILNpTeZCdQpcPvBWFz898562Rsmmi986E14sW82zNJSY368V19RjzBcEs%2BT0zhpc2gUKv1EUT23aoJEtvhvr4Kp2to01hQqf6EKJPi%2BpOrP4RrHMLuI%2F8EGOqUBpLA1CX2xnrDNIAVFm9ByErXzXH8YCOGC45QCmsi41aGLOlru0%2FYULfK24Qm5lUNyjy%2FYTgvRa9YZd%2FznoCPOoGhBlz%2FJavhiPd2miAnAJ0JF12KNVfXO957llp2OP4NzmQqFFto9A8C8hnfJJ1ZYKovbCPNyNFGflAOsEtY4Z6hHa5A8lg4Inwi%2FFLCrVFMszh4tO8HwYfzl4jopN24nmj%2FanWd8&X-Amz-Signature=4bb4c7078e3229e2e54ab09b88274aa3882ec695b4842b5259485dd91261cc74&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOT4MNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFCNBuHFDTxyt%2BjodlS%2FdDRhB%2BF0U9eYFRpmASQ3833HAiEAy64fHRKptIyo3oLHdfwD6%2BW2tUf21pR%2BDYclXiZUhLQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW%2FEIecwezs9d%2BaYCrcA50x7fQ0BuL%2BfI1ewYfKv%2B0tTzs9bBJWUv%2BmyOAnAnWkcQ2ooHa7s%2FWVrMJbZmmz%2FzvVFLbn4yY0o4N6PcPuh%2FUI4xidAh%2B4uDbuioizAjjZ7rsSvAT525Kf72SG5sVwU9V5%2BUgmDyrzdFlUlsSGMEoU5uTL2NPNhfJTsIdiF3H52Z9cPC2JSbobnbPVXDZs1izjODW1ctsuOopGwHCEuxs01m96YUWcgeEV1kuZUgXipYVmGAcLuUhoeo%2FDZSnHPLQGIQCibAGVvr094xVd3FMANJVH8cav3%2Fu4steSIplWg7axLa%2FxP1421MwpE1TnOV%2FfFPJY7xEH3VDHxlj42zNUIf0kAjY%2BwFDE62ni8cWqRlrurJBAfUONGjpAaeipwvaelzAAzNmSMpCmzLvgqL1t5IrwVSN1yuEMdT0lf5S8%2FoIzSeTxa3XuEkD3Oeptx635%2FGwhjWxjT8L60EeoWDzdJmKX3pZ%2F2I2JiOrtVDP7AxuU5QWaYnv1WJ%2BodzH7QW1YHc2BHT1VjILNpTeZCdQpcPvBWFz898562Rsmmi986E14sW82zNJSY368V19RjzBcEs%2BT0zhpc2gUKv1EUT23aoJEtvhvr4Kp2to01hQqf6EKJPi%2BpOrP4RrHMLuI%2F8EGOqUBpLA1CX2xnrDNIAVFm9ByErXzXH8YCOGC45QCmsi41aGLOlru0%2FYULfK24Qm5lUNyjy%2FYTgvRa9YZd%2FznoCPOoGhBlz%2FJavhiPd2miAnAJ0JF12KNVfXO957llp2OP4NzmQqFFto9A8C8hnfJJ1ZYKovbCPNyNFGflAOsEtY4Z6hHa5A8lg4Inwi%2FFLCrVFMszh4tO8HwYfzl4jopN24nmj%2FanWd8&X-Amz-Signature=cc3f6eea1d0e3e32c9de30ce48f5b97046dc54888179ced8a44c04f64bdf320b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOT4MNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFCNBuHFDTxyt%2BjodlS%2FdDRhB%2BF0U9eYFRpmASQ3833HAiEAy64fHRKptIyo3oLHdfwD6%2BW2tUf21pR%2BDYclXiZUhLQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW%2FEIecwezs9d%2BaYCrcA50x7fQ0BuL%2BfI1ewYfKv%2B0tTzs9bBJWUv%2BmyOAnAnWkcQ2ooHa7s%2FWVrMJbZmmz%2FzvVFLbn4yY0o4N6PcPuh%2FUI4xidAh%2B4uDbuioizAjjZ7rsSvAT525Kf72SG5sVwU9V5%2BUgmDyrzdFlUlsSGMEoU5uTL2NPNhfJTsIdiF3H52Z9cPC2JSbobnbPVXDZs1izjODW1ctsuOopGwHCEuxs01m96YUWcgeEV1kuZUgXipYVmGAcLuUhoeo%2FDZSnHPLQGIQCibAGVvr094xVd3FMANJVH8cav3%2Fu4steSIplWg7axLa%2FxP1421MwpE1TnOV%2FfFPJY7xEH3VDHxlj42zNUIf0kAjY%2BwFDE62ni8cWqRlrurJBAfUONGjpAaeipwvaelzAAzNmSMpCmzLvgqL1t5IrwVSN1yuEMdT0lf5S8%2FoIzSeTxa3XuEkD3Oeptx635%2FGwhjWxjT8L60EeoWDzdJmKX3pZ%2F2I2JiOrtVDP7AxuU5QWaYnv1WJ%2BodzH7QW1YHc2BHT1VjILNpTeZCdQpcPvBWFz898562Rsmmi986E14sW82zNJSY368V19RjzBcEs%2BT0zhpc2gUKv1EUT23aoJEtvhvr4Kp2to01hQqf6EKJPi%2BpOrP4RrHMLuI%2F8EGOqUBpLA1CX2xnrDNIAVFm9ByErXzXH8YCOGC45QCmsi41aGLOlru0%2FYULfK24Qm5lUNyjy%2FYTgvRa9YZd%2FznoCPOoGhBlz%2FJavhiPd2miAnAJ0JF12KNVfXO957llp2OP4NzmQqFFto9A8C8hnfJJ1ZYKovbCPNyNFGflAOsEtY4Z6hHa5A8lg4Inwi%2FFLCrVFMszh4tO8HwYfzl4jopN24nmj%2FanWd8&X-Amz-Signature=052f21d54ef6b82202aad7608d61d085a1e18929a566c75a96974ac5d08106ed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOT4MNC%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFCNBuHFDTxyt%2BjodlS%2FdDRhB%2BF0U9eYFRpmASQ3833HAiEAy64fHRKptIyo3oLHdfwD6%2BW2tUf21pR%2BDYclXiZUhLQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIW%2FEIecwezs9d%2BaYCrcA50x7fQ0BuL%2BfI1ewYfKv%2B0tTzs9bBJWUv%2BmyOAnAnWkcQ2ooHa7s%2FWVrMJbZmmz%2FzvVFLbn4yY0o4N6PcPuh%2FUI4xidAh%2B4uDbuioizAjjZ7rsSvAT525Kf72SG5sVwU9V5%2BUgmDyrzdFlUlsSGMEoU5uTL2NPNhfJTsIdiF3H52Z9cPC2JSbobnbPVXDZs1izjODW1ctsuOopGwHCEuxs01m96YUWcgeEV1kuZUgXipYVmGAcLuUhoeo%2FDZSnHPLQGIQCibAGVvr094xVd3FMANJVH8cav3%2Fu4steSIplWg7axLa%2FxP1421MwpE1TnOV%2FfFPJY7xEH3VDHxlj42zNUIf0kAjY%2BwFDE62ni8cWqRlrurJBAfUONGjpAaeipwvaelzAAzNmSMpCmzLvgqL1t5IrwVSN1yuEMdT0lf5S8%2FoIzSeTxa3XuEkD3Oeptx635%2FGwhjWxjT8L60EeoWDzdJmKX3pZ%2F2I2JiOrtVDP7AxuU5QWaYnv1WJ%2BodzH7QW1YHc2BHT1VjILNpTeZCdQpcPvBWFz898562Rsmmi986E14sW82zNJSY368V19RjzBcEs%2BT0zhpc2gUKv1EUT23aoJEtvhvr4Kp2to01hQqf6EKJPi%2BpOrP4RrHMLuI%2F8EGOqUBpLA1CX2xnrDNIAVFm9ByErXzXH8YCOGC45QCmsi41aGLOlru0%2FYULfK24Qm5lUNyjy%2FYTgvRa9YZd%2FznoCPOoGhBlz%2FJavhiPd2miAnAJ0JF12KNVfXO957llp2OP4NzmQqFFto9A8C8hnfJJ1ZYKovbCPNyNFGflAOsEtY4Z6hHa5A8lg4Inwi%2FFLCrVFMszh4tO8HwYfzl4jopN24nmj%2FanWd8&X-Amz-Signature=e15e0d510bf20c31db57fdc574179719c7202c96ef4a635b7e173d5fbb7c3404&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
