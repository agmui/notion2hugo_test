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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2YSL7F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmIFyp3lmaxGfjiQfbmFuYey4O7qoiwXNXgpU2CeQuTAiEA5z%2FM0pm0g7ozelxxMmQ4RQD09Wis%2Bgg4CGVBMGTtHkUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zCjqx%2BabnsYLRUCrcA9nbFsvrxD1HyqWktAlOKbmdSzUxF3uOCU2%2BTk6ZIhLfcXS%2FNT4iSsRfZNi6JPN%2BXcFD6a330nuueHG9HImORSnnQMkUgkKOGD9op1oR2K1muXfeAX6JsZ8QEz%2BrFe40DEZmYZJIh9TU1X5ajZpSxhod73pWchSvguXQl064ARYRjLegEFz9DLhK%2FBbdfkTW5ooCya%2BcqCLPe1IbZUzvcQhSUYiZbKbDc1AJPz66Mq4G2SmQfjhIvgqK4u%2BCNb1z0VTapIaRRIsNLiNLrGsp0tE1XkMo4WFfa3OhVT8WPwi3miE9zVXSnq8h%2FAZ2V3dL7E0wDb3R40xZGnM1oVi2hfFLrk2INqxH%2Bg5RlKFzzE%2B6FjxejBXqBTdqU8guipzaoB75BS7vVYacGonDvvqC%2FoFfAnA3uEwcWIOVw0hDcFBMobh4UGSDIKQmF7i9NzXp8S7dn71pGZoxsu1h6hmtXMJbnK4vDjc%2FQkcz24PFB647LlNNydG4fhy1tN3VERBoMRZbxp0O%2BLoCFpmzaHMR0Z4REfWCgU0XPFYCVbpczfF0sk1Cz%2Bvbsfg0hl5ouxS44eiLuruhMO2VHr6e7CbtMEx25XVVFxR9BtZkT2J%2Br2oKSn0n3%2FFRPfLVwJJNMOKcy74GOqUBqsD0KhWqHceIdHt8xB%2Fo7HIoZkkAm4gxO381ikrIVLAxD1JVNvlee51xO3BR37TRDD%2FdSnwLvyq9zXmK6jPkFMVe97U7XX3M2Gi%2BrkAgnHbiXl3yKu%2FPlxzd6jNi%2FuVTHJOHdRLSYtP2CNFaBndK1m0b5jotphzbbV90adUI3y0roqNF%2B94hUJBP7e4JUXCmUPr1NcsazRoQbw2HTn7SPxYFVAdn&X-Amz-Signature=adc8fe2b163164c2ec507e4811bd8d93a025b270f77a9cd97fdcd180c2ac6a83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2YSL7F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmIFyp3lmaxGfjiQfbmFuYey4O7qoiwXNXgpU2CeQuTAiEA5z%2FM0pm0g7ozelxxMmQ4RQD09Wis%2Bgg4CGVBMGTtHkUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zCjqx%2BabnsYLRUCrcA9nbFsvrxD1HyqWktAlOKbmdSzUxF3uOCU2%2BTk6ZIhLfcXS%2FNT4iSsRfZNi6JPN%2BXcFD6a330nuueHG9HImORSnnQMkUgkKOGD9op1oR2K1muXfeAX6JsZ8QEz%2BrFe40DEZmYZJIh9TU1X5ajZpSxhod73pWchSvguXQl064ARYRjLegEFz9DLhK%2FBbdfkTW5ooCya%2BcqCLPe1IbZUzvcQhSUYiZbKbDc1AJPz66Mq4G2SmQfjhIvgqK4u%2BCNb1z0VTapIaRRIsNLiNLrGsp0tE1XkMo4WFfa3OhVT8WPwi3miE9zVXSnq8h%2FAZ2V3dL7E0wDb3R40xZGnM1oVi2hfFLrk2INqxH%2Bg5RlKFzzE%2B6FjxejBXqBTdqU8guipzaoB75BS7vVYacGonDvvqC%2FoFfAnA3uEwcWIOVw0hDcFBMobh4UGSDIKQmF7i9NzXp8S7dn71pGZoxsu1h6hmtXMJbnK4vDjc%2FQkcz24PFB647LlNNydG4fhy1tN3VERBoMRZbxp0O%2BLoCFpmzaHMR0Z4REfWCgU0XPFYCVbpczfF0sk1Cz%2Bvbsfg0hl5ouxS44eiLuruhMO2VHr6e7CbtMEx25XVVFxR9BtZkT2J%2Br2oKSn0n3%2FFRPfLVwJJNMOKcy74GOqUBqsD0KhWqHceIdHt8xB%2Fo7HIoZkkAm4gxO381ikrIVLAxD1JVNvlee51xO3BR37TRDD%2FdSnwLvyq9zXmK6jPkFMVe97U7XX3M2Gi%2BrkAgnHbiXl3yKu%2FPlxzd6jNi%2FuVTHJOHdRLSYtP2CNFaBndK1m0b5jotphzbbV90adUI3y0roqNF%2B94hUJBP7e4JUXCmUPr1NcsazRoQbw2HTn7SPxYFVAdn&X-Amz-Signature=5117ecd90a6a6d7e2c89d3bbd61ebd4fd448ab9109c244021627b39ed825cfbb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2YSL7F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmIFyp3lmaxGfjiQfbmFuYey4O7qoiwXNXgpU2CeQuTAiEA5z%2FM0pm0g7ozelxxMmQ4RQD09Wis%2Bgg4CGVBMGTtHkUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zCjqx%2BabnsYLRUCrcA9nbFsvrxD1HyqWktAlOKbmdSzUxF3uOCU2%2BTk6ZIhLfcXS%2FNT4iSsRfZNi6JPN%2BXcFD6a330nuueHG9HImORSnnQMkUgkKOGD9op1oR2K1muXfeAX6JsZ8QEz%2BrFe40DEZmYZJIh9TU1X5ajZpSxhod73pWchSvguXQl064ARYRjLegEFz9DLhK%2FBbdfkTW5ooCya%2BcqCLPe1IbZUzvcQhSUYiZbKbDc1AJPz66Mq4G2SmQfjhIvgqK4u%2BCNb1z0VTapIaRRIsNLiNLrGsp0tE1XkMo4WFfa3OhVT8WPwi3miE9zVXSnq8h%2FAZ2V3dL7E0wDb3R40xZGnM1oVi2hfFLrk2INqxH%2Bg5RlKFzzE%2B6FjxejBXqBTdqU8guipzaoB75BS7vVYacGonDvvqC%2FoFfAnA3uEwcWIOVw0hDcFBMobh4UGSDIKQmF7i9NzXp8S7dn71pGZoxsu1h6hmtXMJbnK4vDjc%2FQkcz24PFB647LlNNydG4fhy1tN3VERBoMRZbxp0O%2BLoCFpmzaHMR0Z4REfWCgU0XPFYCVbpczfF0sk1Cz%2Bvbsfg0hl5ouxS44eiLuruhMO2VHr6e7CbtMEx25XVVFxR9BtZkT2J%2Br2oKSn0n3%2FFRPfLVwJJNMOKcy74GOqUBqsD0KhWqHceIdHt8xB%2Fo7HIoZkkAm4gxO381ikrIVLAxD1JVNvlee51xO3BR37TRDD%2FdSnwLvyq9zXmK6jPkFMVe97U7XX3M2Gi%2BrkAgnHbiXl3yKu%2FPlxzd6jNi%2FuVTHJOHdRLSYtP2CNFaBndK1m0b5jotphzbbV90adUI3y0roqNF%2B94hUJBP7e4JUXCmUPr1NcsazRoQbw2HTn7SPxYFVAdn&X-Amz-Signature=c3cebbf7c57a7e2d6c3aa9f66d933321268bab4a6d371cda8d4069b81ad75c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2YSL7F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmIFyp3lmaxGfjiQfbmFuYey4O7qoiwXNXgpU2CeQuTAiEA5z%2FM0pm0g7ozelxxMmQ4RQD09Wis%2Bgg4CGVBMGTtHkUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zCjqx%2BabnsYLRUCrcA9nbFsvrxD1HyqWktAlOKbmdSzUxF3uOCU2%2BTk6ZIhLfcXS%2FNT4iSsRfZNi6JPN%2BXcFD6a330nuueHG9HImORSnnQMkUgkKOGD9op1oR2K1muXfeAX6JsZ8QEz%2BrFe40DEZmYZJIh9TU1X5ajZpSxhod73pWchSvguXQl064ARYRjLegEFz9DLhK%2FBbdfkTW5ooCya%2BcqCLPe1IbZUzvcQhSUYiZbKbDc1AJPz66Mq4G2SmQfjhIvgqK4u%2BCNb1z0VTapIaRRIsNLiNLrGsp0tE1XkMo4WFfa3OhVT8WPwi3miE9zVXSnq8h%2FAZ2V3dL7E0wDb3R40xZGnM1oVi2hfFLrk2INqxH%2Bg5RlKFzzE%2B6FjxejBXqBTdqU8guipzaoB75BS7vVYacGonDvvqC%2FoFfAnA3uEwcWIOVw0hDcFBMobh4UGSDIKQmF7i9NzXp8S7dn71pGZoxsu1h6hmtXMJbnK4vDjc%2FQkcz24PFB647LlNNydG4fhy1tN3VERBoMRZbxp0O%2BLoCFpmzaHMR0Z4REfWCgU0XPFYCVbpczfF0sk1Cz%2Bvbsfg0hl5ouxS44eiLuruhMO2VHr6e7CbtMEx25XVVFxR9BtZkT2J%2Br2oKSn0n3%2FFRPfLVwJJNMOKcy74GOqUBqsD0KhWqHceIdHt8xB%2Fo7HIoZkkAm4gxO381ikrIVLAxD1JVNvlee51xO3BR37TRDD%2FdSnwLvyq9zXmK6jPkFMVe97U7XX3M2Gi%2BrkAgnHbiXl3yKu%2FPlxzd6jNi%2FuVTHJOHdRLSYtP2CNFaBndK1m0b5jotphzbbV90adUI3y0roqNF%2B94hUJBP7e4JUXCmUPr1NcsazRoQbw2HTn7SPxYFVAdn&X-Amz-Signature=8b13187be4eddbd1bafcde012cd026fe7ca09288d53138ec53ba826e97a0c27a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2YSL7F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmIFyp3lmaxGfjiQfbmFuYey4O7qoiwXNXgpU2CeQuTAiEA5z%2FM0pm0g7ozelxxMmQ4RQD09Wis%2Bgg4CGVBMGTtHkUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zCjqx%2BabnsYLRUCrcA9nbFsvrxD1HyqWktAlOKbmdSzUxF3uOCU2%2BTk6ZIhLfcXS%2FNT4iSsRfZNi6JPN%2BXcFD6a330nuueHG9HImORSnnQMkUgkKOGD9op1oR2K1muXfeAX6JsZ8QEz%2BrFe40DEZmYZJIh9TU1X5ajZpSxhod73pWchSvguXQl064ARYRjLegEFz9DLhK%2FBbdfkTW5ooCya%2BcqCLPe1IbZUzvcQhSUYiZbKbDc1AJPz66Mq4G2SmQfjhIvgqK4u%2BCNb1z0VTapIaRRIsNLiNLrGsp0tE1XkMo4WFfa3OhVT8WPwi3miE9zVXSnq8h%2FAZ2V3dL7E0wDb3R40xZGnM1oVi2hfFLrk2INqxH%2Bg5RlKFzzE%2B6FjxejBXqBTdqU8guipzaoB75BS7vVYacGonDvvqC%2FoFfAnA3uEwcWIOVw0hDcFBMobh4UGSDIKQmF7i9NzXp8S7dn71pGZoxsu1h6hmtXMJbnK4vDjc%2FQkcz24PFB647LlNNydG4fhy1tN3VERBoMRZbxp0O%2BLoCFpmzaHMR0Z4REfWCgU0XPFYCVbpczfF0sk1Cz%2Bvbsfg0hl5ouxS44eiLuruhMO2VHr6e7CbtMEx25XVVFxR9BtZkT2J%2Br2oKSn0n3%2FFRPfLVwJJNMOKcy74GOqUBqsD0KhWqHceIdHt8xB%2Fo7HIoZkkAm4gxO381ikrIVLAxD1JVNvlee51xO3BR37TRDD%2FdSnwLvyq9zXmK6jPkFMVe97U7XX3M2Gi%2BrkAgnHbiXl3yKu%2FPlxzd6jNi%2FuVTHJOHdRLSYtP2CNFaBndK1m0b5jotphzbbV90adUI3y0roqNF%2B94hUJBP7e4JUXCmUPr1NcsazRoQbw2HTn7SPxYFVAdn&X-Amz-Signature=4a945a2afc76cfab86ed994cb7a72c2fd1b0dc80bb6ee0281f020605f5269009&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2YSL7F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmIFyp3lmaxGfjiQfbmFuYey4O7qoiwXNXgpU2CeQuTAiEA5z%2FM0pm0g7ozelxxMmQ4RQD09Wis%2Bgg4CGVBMGTtHkUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zCjqx%2BabnsYLRUCrcA9nbFsvrxD1HyqWktAlOKbmdSzUxF3uOCU2%2BTk6ZIhLfcXS%2FNT4iSsRfZNi6JPN%2BXcFD6a330nuueHG9HImORSnnQMkUgkKOGD9op1oR2K1muXfeAX6JsZ8QEz%2BrFe40DEZmYZJIh9TU1X5ajZpSxhod73pWchSvguXQl064ARYRjLegEFz9DLhK%2FBbdfkTW5ooCya%2BcqCLPe1IbZUzvcQhSUYiZbKbDc1AJPz66Mq4G2SmQfjhIvgqK4u%2BCNb1z0VTapIaRRIsNLiNLrGsp0tE1XkMo4WFfa3OhVT8WPwi3miE9zVXSnq8h%2FAZ2V3dL7E0wDb3R40xZGnM1oVi2hfFLrk2INqxH%2Bg5RlKFzzE%2B6FjxejBXqBTdqU8guipzaoB75BS7vVYacGonDvvqC%2FoFfAnA3uEwcWIOVw0hDcFBMobh4UGSDIKQmF7i9NzXp8S7dn71pGZoxsu1h6hmtXMJbnK4vDjc%2FQkcz24PFB647LlNNydG4fhy1tN3VERBoMRZbxp0O%2BLoCFpmzaHMR0Z4REfWCgU0XPFYCVbpczfF0sk1Cz%2Bvbsfg0hl5ouxS44eiLuruhMO2VHr6e7CbtMEx25XVVFxR9BtZkT2J%2Br2oKSn0n3%2FFRPfLVwJJNMOKcy74GOqUBqsD0KhWqHceIdHt8xB%2Fo7HIoZkkAm4gxO381ikrIVLAxD1JVNvlee51xO3BR37TRDD%2FdSnwLvyq9zXmK6jPkFMVe97U7XX3M2Gi%2BrkAgnHbiXl3yKu%2FPlxzd6jNi%2FuVTHJOHdRLSYtP2CNFaBndK1m0b5jotphzbbV90adUI3y0roqNF%2B94hUJBP7e4JUXCmUPr1NcsazRoQbw2HTn7SPxYFVAdn&X-Amz-Signature=d0c98c9517bd5d70ba8eb0265e8a8ead0e889cb2b0fd4fad2483b2a36a781e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY2YSL7F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmIFyp3lmaxGfjiQfbmFuYey4O7qoiwXNXgpU2CeQuTAiEA5z%2FM0pm0g7ozelxxMmQ4RQD09Wis%2Bgg4CGVBMGTtHkUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zCjqx%2BabnsYLRUCrcA9nbFsvrxD1HyqWktAlOKbmdSzUxF3uOCU2%2BTk6ZIhLfcXS%2FNT4iSsRfZNi6JPN%2BXcFD6a330nuueHG9HImORSnnQMkUgkKOGD9op1oR2K1muXfeAX6JsZ8QEz%2BrFe40DEZmYZJIh9TU1X5ajZpSxhod73pWchSvguXQl064ARYRjLegEFz9DLhK%2FBbdfkTW5ooCya%2BcqCLPe1IbZUzvcQhSUYiZbKbDc1AJPz66Mq4G2SmQfjhIvgqK4u%2BCNb1z0VTapIaRRIsNLiNLrGsp0tE1XkMo4WFfa3OhVT8WPwi3miE9zVXSnq8h%2FAZ2V3dL7E0wDb3R40xZGnM1oVi2hfFLrk2INqxH%2Bg5RlKFzzE%2B6FjxejBXqBTdqU8guipzaoB75BS7vVYacGonDvvqC%2FoFfAnA3uEwcWIOVw0hDcFBMobh4UGSDIKQmF7i9NzXp8S7dn71pGZoxsu1h6hmtXMJbnK4vDjc%2FQkcz24PFB647LlNNydG4fhy1tN3VERBoMRZbxp0O%2BLoCFpmzaHMR0Z4REfWCgU0XPFYCVbpczfF0sk1Cz%2Bvbsfg0hl5ouxS44eiLuruhMO2VHr6e7CbtMEx25XVVFxR9BtZkT2J%2Br2oKSn0n3%2FFRPfLVwJJNMOKcy74GOqUBqsD0KhWqHceIdHt8xB%2Fo7HIoZkkAm4gxO381ikrIVLAxD1JVNvlee51xO3BR37TRDD%2FdSnwLvyq9zXmK6jPkFMVe97U7XX3M2Gi%2BrkAgnHbiXl3yKu%2FPlxzd6jNi%2FuVTHJOHdRLSYtP2CNFaBndK1m0b5jotphzbbV90adUI3y0roqNF%2B94hUJBP7e4JUXCmUPr1NcsazRoQbw2HTn7SPxYFVAdn&X-Amz-Signature=37030fda0fbce87f592128fb81e1e16d4ae5c6677f43a12e37867617732631f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
