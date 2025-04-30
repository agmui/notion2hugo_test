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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRACJQI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCaGOBeHMecWkiIM6GiZpacB%2FXJ9DHhHUXb%2FVbp2J4JdwIgbCmVYddtkExCahMmEmiR7wkWVgcYHo4PaApmmU7WW2oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo2R5Xf%2B1PXMj0DuSrcA7UNsGdL4QT9wbNn8qj1vPYcpT6id1lCk8B%2Fle7E0ZhI1YSJNb5R%2BRXvlHnpXPys436SZulN9s3eGgW0E7Z1tqoTqLupy%2FI4gtHNbEe2WpviKUsukRHWmCkc1LMHs7q9O6Hj6LpPbcEJdv0TBar683LoGISzm0SFcpTOu%2B6n%2B1ZD7aVzeJkA4q5afsHCiAX06C43aP5rZAMPsX%2B8Iq%2FY62VNtxe8N9IutFHyObifkTf7UtgSAYRHbLvHMFfJCiOqhwZ%2B%2BV8PzZodAM2xXMg1enmBC4GvD33ZDkYBXJiLLUKopMzmw9mNP%2BMPOTQxi3%2B7l3tVucG9VPUbNJH9OEy9hthokaQcG0GbWmTGnp3XYHN9XTyL5x3jNUgnC8KHYLaqDSSdmBwqLu8kps5IdvDHvs9kcvb1yV9nPUXNTWNFf%2F9ZuaT0AR1Me6o3AEokO0ynMI3B9zD2GxKK4r0EdMqj%2BMly2M46LhMBKrntAL0vMPlldMA2i651WlPo0VoeBtjSLLR8nGEJwB2Mu8wD6DWkGzNtF%2F84RHhiSuAif9r8W6%2FBInjiLfHwtveLrPD9z1yCJQSw34e5sUlRPINka5cqQ2sWlRlNNj5lnORu2WhWRQRZJ5uEMSTTJNiOBJAhMMbcxsAGOqUBgZFOOPwATaDI1KbmzJB2hZsX8tVOP3M%2BrejItmC25UKMP%2F%2BDSRkm6LUwXL5HZcm7Ujt%2B%2FN6vlmcopYFM2i7xTtk%2F9yICU%2Bmg7LJhUxCB%2BjYRGSrReVxf114qewEJ0PvEhDbX03HP6gdkfUpF8TW9Nu0%2FYJe2GP503ctPF2hU6cNMkxLaYO5c%2BOX8EAbEJ4R2VH5SVeWShTmIDDzziSBROq6PvfqV&X-Amz-Signature=408821838337bda3936d9996a1128b63aac6e02c74809951117a5061183b66c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRACJQI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCaGOBeHMecWkiIM6GiZpacB%2FXJ9DHhHUXb%2FVbp2J4JdwIgbCmVYddtkExCahMmEmiR7wkWVgcYHo4PaApmmU7WW2oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo2R5Xf%2B1PXMj0DuSrcA7UNsGdL4QT9wbNn8qj1vPYcpT6id1lCk8B%2Fle7E0ZhI1YSJNb5R%2BRXvlHnpXPys436SZulN9s3eGgW0E7Z1tqoTqLupy%2FI4gtHNbEe2WpviKUsukRHWmCkc1LMHs7q9O6Hj6LpPbcEJdv0TBar683LoGISzm0SFcpTOu%2B6n%2B1ZD7aVzeJkA4q5afsHCiAX06C43aP5rZAMPsX%2B8Iq%2FY62VNtxe8N9IutFHyObifkTf7UtgSAYRHbLvHMFfJCiOqhwZ%2B%2BV8PzZodAM2xXMg1enmBC4GvD33ZDkYBXJiLLUKopMzmw9mNP%2BMPOTQxi3%2B7l3tVucG9VPUbNJH9OEy9hthokaQcG0GbWmTGnp3XYHN9XTyL5x3jNUgnC8KHYLaqDSSdmBwqLu8kps5IdvDHvs9kcvb1yV9nPUXNTWNFf%2F9ZuaT0AR1Me6o3AEokO0ynMI3B9zD2GxKK4r0EdMqj%2BMly2M46LhMBKrntAL0vMPlldMA2i651WlPo0VoeBtjSLLR8nGEJwB2Mu8wD6DWkGzNtF%2F84RHhiSuAif9r8W6%2FBInjiLfHwtveLrPD9z1yCJQSw34e5sUlRPINka5cqQ2sWlRlNNj5lnORu2WhWRQRZJ5uEMSTTJNiOBJAhMMbcxsAGOqUBgZFOOPwATaDI1KbmzJB2hZsX8tVOP3M%2BrejItmC25UKMP%2F%2BDSRkm6LUwXL5HZcm7Ujt%2B%2FN6vlmcopYFM2i7xTtk%2F9yICU%2Bmg7LJhUxCB%2BjYRGSrReVxf114qewEJ0PvEhDbX03HP6gdkfUpF8TW9Nu0%2FYJe2GP503ctPF2hU6cNMkxLaYO5c%2BOX8EAbEJ4R2VH5SVeWShTmIDDzziSBROq6PvfqV&X-Amz-Signature=84ae5594c37294c78f132a745c6a720c5d43f84e148b0f5ee9f763bf815a68c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRACJQI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCaGOBeHMecWkiIM6GiZpacB%2FXJ9DHhHUXb%2FVbp2J4JdwIgbCmVYddtkExCahMmEmiR7wkWVgcYHo4PaApmmU7WW2oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo2R5Xf%2B1PXMj0DuSrcA7UNsGdL4QT9wbNn8qj1vPYcpT6id1lCk8B%2Fle7E0ZhI1YSJNb5R%2BRXvlHnpXPys436SZulN9s3eGgW0E7Z1tqoTqLupy%2FI4gtHNbEe2WpviKUsukRHWmCkc1LMHs7q9O6Hj6LpPbcEJdv0TBar683LoGISzm0SFcpTOu%2B6n%2B1ZD7aVzeJkA4q5afsHCiAX06C43aP5rZAMPsX%2B8Iq%2FY62VNtxe8N9IutFHyObifkTf7UtgSAYRHbLvHMFfJCiOqhwZ%2B%2BV8PzZodAM2xXMg1enmBC4GvD33ZDkYBXJiLLUKopMzmw9mNP%2BMPOTQxi3%2B7l3tVucG9VPUbNJH9OEy9hthokaQcG0GbWmTGnp3XYHN9XTyL5x3jNUgnC8KHYLaqDSSdmBwqLu8kps5IdvDHvs9kcvb1yV9nPUXNTWNFf%2F9ZuaT0AR1Me6o3AEokO0ynMI3B9zD2GxKK4r0EdMqj%2BMly2M46LhMBKrntAL0vMPlldMA2i651WlPo0VoeBtjSLLR8nGEJwB2Mu8wD6DWkGzNtF%2F84RHhiSuAif9r8W6%2FBInjiLfHwtveLrPD9z1yCJQSw34e5sUlRPINka5cqQ2sWlRlNNj5lnORu2WhWRQRZJ5uEMSTTJNiOBJAhMMbcxsAGOqUBgZFOOPwATaDI1KbmzJB2hZsX8tVOP3M%2BrejItmC25UKMP%2F%2BDSRkm6LUwXL5HZcm7Ujt%2B%2FN6vlmcopYFM2i7xTtk%2F9yICU%2Bmg7LJhUxCB%2BjYRGSrReVxf114qewEJ0PvEhDbX03HP6gdkfUpF8TW9Nu0%2FYJe2GP503ctPF2hU6cNMkxLaYO5c%2BOX8EAbEJ4R2VH5SVeWShTmIDDzziSBROq6PvfqV&X-Amz-Signature=870059f1fa2d2c32df427c42414fc4c8bdd9ac46de49c578c7c95320a18aa4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRACJQI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCaGOBeHMecWkiIM6GiZpacB%2FXJ9DHhHUXb%2FVbp2J4JdwIgbCmVYddtkExCahMmEmiR7wkWVgcYHo4PaApmmU7WW2oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo2R5Xf%2B1PXMj0DuSrcA7UNsGdL4QT9wbNn8qj1vPYcpT6id1lCk8B%2Fle7E0ZhI1YSJNb5R%2BRXvlHnpXPys436SZulN9s3eGgW0E7Z1tqoTqLupy%2FI4gtHNbEe2WpviKUsukRHWmCkc1LMHs7q9O6Hj6LpPbcEJdv0TBar683LoGISzm0SFcpTOu%2B6n%2B1ZD7aVzeJkA4q5afsHCiAX06C43aP5rZAMPsX%2B8Iq%2FY62VNtxe8N9IutFHyObifkTf7UtgSAYRHbLvHMFfJCiOqhwZ%2B%2BV8PzZodAM2xXMg1enmBC4GvD33ZDkYBXJiLLUKopMzmw9mNP%2BMPOTQxi3%2B7l3tVucG9VPUbNJH9OEy9hthokaQcG0GbWmTGnp3XYHN9XTyL5x3jNUgnC8KHYLaqDSSdmBwqLu8kps5IdvDHvs9kcvb1yV9nPUXNTWNFf%2F9ZuaT0AR1Me6o3AEokO0ynMI3B9zD2GxKK4r0EdMqj%2BMly2M46LhMBKrntAL0vMPlldMA2i651WlPo0VoeBtjSLLR8nGEJwB2Mu8wD6DWkGzNtF%2F84RHhiSuAif9r8W6%2FBInjiLfHwtveLrPD9z1yCJQSw34e5sUlRPINka5cqQ2sWlRlNNj5lnORu2WhWRQRZJ5uEMSTTJNiOBJAhMMbcxsAGOqUBgZFOOPwATaDI1KbmzJB2hZsX8tVOP3M%2BrejItmC25UKMP%2F%2BDSRkm6LUwXL5HZcm7Ujt%2B%2FN6vlmcopYFM2i7xTtk%2F9yICU%2Bmg7LJhUxCB%2BjYRGSrReVxf114qewEJ0PvEhDbX03HP6gdkfUpF8TW9Nu0%2FYJe2GP503ctPF2hU6cNMkxLaYO5c%2BOX8EAbEJ4R2VH5SVeWShTmIDDzziSBROq6PvfqV&X-Amz-Signature=feee7cebf1560836c20753a3a5873df0b5f50e5c80f7061379bc88270e933caf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRACJQI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCaGOBeHMecWkiIM6GiZpacB%2FXJ9DHhHUXb%2FVbp2J4JdwIgbCmVYddtkExCahMmEmiR7wkWVgcYHo4PaApmmU7WW2oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo2R5Xf%2B1PXMj0DuSrcA7UNsGdL4QT9wbNn8qj1vPYcpT6id1lCk8B%2Fle7E0ZhI1YSJNb5R%2BRXvlHnpXPys436SZulN9s3eGgW0E7Z1tqoTqLupy%2FI4gtHNbEe2WpviKUsukRHWmCkc1LMHs7q9O6Hj6LpPbcEJdv0TBar683LoGISzm0SFcpTOu%2B6n%2B1ZD7aVzeJkA4q5afsHCiAX06C43aP5rZAMPsX%2B8Iq%2FY62VNtxe8N9IutFHyObifkTf7UtgSAYRHbLvHMFfJCiOqhwZ%2B%2BV8PzZodAM2xXMg1enmBC4GvD33ZDkYBXJiLLUKopMzmw9mNP%2BMPOTQxi3%2B7l3tVucG9VPUbNJH9OEy9hthokaQcG0GbWmTGnp3XYHN9XTyL5x3jNUgnC8KHYLaqDSSdmBwqLu8kps5IdvDHvs9kcvb1yV9nPUXNTWNFf%2F9ZuaT0AR1Me6o3AEokO0ynMI3B9zD2GxKK4r0EdMqj%2BMly2M46LhMBKrntAL0vMPlldMA2i651WlPo0VoeBtjSLLR8nGEJwB2Mu8wD6DWkGzNtF%2F84RHhiSuAif9r8W6%2FBInjiLfHwtveLrPD9z1yCJQSw34e5sUlRPINka5cqQ2sWlRlNNj5lnORu2WhWRQRZJ5uEMSTTJNiOBJAhMMbcxsAGOqUBgZFOOPwATaDI1KbmzJB2hZsX8tVOP3M%2BrejItmC25UKMP%2F%2BDSRkm6LUwXL5HZcm7Ujt%2B%2FN6vlmcopYFM2i7xTtk%2F9yICU%2Bmg7LJhUxCB%2BjYRGSrReVxf114qewEJ0PvEhDbX03HP6gdkfUpF8TW9Nu0%2FYJe2GP503ctPF2hU6cNMkxLaYO5c%2BOX8EAbEJ4R2VH5SVeWShTmIDDzziSBROq6PvfqV&X-Amz-Signature=f128b776e45588f7e41fd851779e75173bd557ee3c5a1bbc8c5dd5fcb8ac5c18&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRACJQI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCaGOBeHMecWkiIM6GiZpacB%2FXJ9DHhHUXb%2FVbp2J4JdwIgbCmVYddtkExCahMmEmiR7wkWVgcYHo4PaApmmU7WW2oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo2R5Xf%2B1PXMj0DuSrcA7UNsGdL4QT9wbNn8qj1vPYcpT6id1lCk8B%2Fle7E0ZhI1YSJNb5R%2BRXvlHnpXPys436SZulN9s3eGgW0E7Z1tqoTqLupy%2FI4gtHNbEe2WpviKUsukRHWmCkc1LMHs7q9O6Hj6LpPbcEJdv0TBar683LoGISzm0SFcpTOu%2B6n%2B1ZD7aVzeJkA4q5afsHCiAX06C43aP5rZAMPsX%2B8Iq%2FY62VNtxe8N9IutFHyObifkTf7UtgSAYRHbLvHMFfJCiOqhwZ%2B%2BV8PzZodAM2xXMg1enmBC4GvD33ZDkYBXJiLLUKopMzmw9mNP%2BMPOTQxi3%2B7l3tVucG9VPUbNJH9OEy9hthokaQcG0GbWmTGnp3XYHN9XTyL5x3jNUgnC8KHYLaqDSSdmBwqLu8kps5IdvDHvs9kcvb1yV9nPUXNTWNFf%2F9ZuaT0AR1Me6o3AEokO0ynMI3B9zD2GxKK4r0EdMqj%2BMly2M46LhMBKrntAL0vMPlldMA2i651WlPo0VoeBtjSLLR8nGEJwB2Mu8wD6DWkGzNtF%2F84RHhiSuAif9r8W6%2FBInjiLfHwtveLrPD9z1yCJQSw34e5sUlRPINka5cqQ2sWlRlNNj5lnORu2WhWRQRZJ5uEMSTTJNiOBJAhMMbcxsAGOqUBgZFOOPwATaDI1KbmzJB2hZsX8tVOP3M%2BrejItmC25UKMP%2F%2BDSRkm6LUwXL5HZcm7Ujt%2B%2FN6vlmcopYFM2i7xTtk%2F9yICU%2Bmg7LJhUxCB%2BjYRGSrReVxf114qewEJ0PvEhDbX03HP6gdkfUpF8TW9Nu0%2FYJe2GP503ctPF2hU6cNMkxLaYO5c%2BOX8EAbEJ4R2VH5SVeWShTmIDDzziSBROq6PvfqV&X-Amz-Signature=2c7307541b63066a43bca42af95f73e1f93a695f04a3a5613fbd03470be675ab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRACJQI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCaGOBeHMecWkiIM6GiZpacB%2FXJ9DHhHUXb%2FVbp2J4JdwIgbCmVYddtkExCahMmEmiR7wkWVgcYHo4PaApmmU7WW2oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGo2R5Xf%2B1PXMj0DuSrcA7UNsGdL4QT9wbNn8qj1vPYcpT6id1lCk8B%2Fle7E0ZhI1YSJNb5R%2BRXvlHnpXPys436SZulN9s3eGgW0E7Z1tqoTqLupy%2FI4gtHNbEe2WpviKUsukRHWmCkc1LMHs7q9O6Hj6LpPbcEJdv0TBar683LoGISzm0SFcpTOu%2B6n%2B1ZD7aVzeJkA4q5afsHCiAX06C43aP5rZAMPsX%2B8Iq%2FY62VNtxe8N9IutFHyObifkTf7UtgSAYRHbLvHMFfJCiOqhwZ%2B%2BV8PzZodAM2xXMg1enmBC4GvD33ZDkYBXJiLLUKopMzmw9mNP%2BMPOTQxi3%2B7l3tVucG9VPUbNJH9OEy9hthokaQcG0GbWmTGnp3XYHN9XTyL5x3jNUgnC8KHYLaqDSSdmBwqLu8kps5IdvDHvs9kcvb1yV9nPUXNTWNFf%2F9ZuaT0AR1Me6o3AEokO0ynMI3B9zD2GxKK4r0EdMqj%2BMly2M46LhMBKrntAL0vMPlldMA2i651WlPo0VoeBtjSLLR8nGEJwB2Mu8wD6DWkGzNtF%2F84RHhiSuAif9r8W6%2FBInjiLfHwtveLrPD9z1yCJQSw34e5sUlRPINka5cqQ2sWlRlNNj5lnORu2WhWRQRZJ5uEMSTTJNiOBJAhMMbcxsAGOqUBgZFOOPwATaDI1KbmzJB2hZsX8tVOP3M%2BrejItmC25UKMP%2F%2BDSRkm6LUwXL5HZcm7Ujt%2B%2FN6vlmcopYFM2i7xTtk%2F9yICU%2Bmg7LJhUxCB%2BjYRGSrReVxf114qewEJ0PvEhDbX03HP6gdkfUpF8TW9Nu0%2FYJe2GP503ctPF2hU6cNMkxLaYO5c%2BOX8EAbEJ4R2VH5SVeWShTmIDDzziSBROq6PvfqV&X-Amz-Signature=c5c2f640b6097a569b3528d50790c228a09990bf6e121711b63be22196d7013b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
