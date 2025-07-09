---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPPTO7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI3Wybu9ix72zRoxnNYoWZDEj5CqpTRaXsnS9Z2oujFAiEAg1Jm31E3Lk1lu3RkOLuul7xeOyAhjyqNB3i6VcNO7kYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx56g3Qs58K84xvXyrcA9F4wHPiQ%2BeWhniW9%2BBpIrjkQzWlkod6AnIP7Mo0bvLG6V%2FbEbcc21GmX2puc9CBDfels01p%2FYAdR8VuDohG8WIJTppiVgZc%2BAkNUNG8fidR4LJHPe64kjOYb8QqTDVzSA2FRg1GET3%2BULoy9MJcogmVK2CK20f357OgVMy4XeUc52%2BR8SuT5CZWlCSUkEyfTul%2BiMYC8KTFbLGpsqNlnWHA38XRFZg5GEbdj4NVIPNlUSzOwwyqsQdUaCI1VIdoDo0z81xpLZfNdOPNTBwx69UGYjxTZd6La1CsJwpgcgquZfRYAmcs1Z3bnO%2FIIg9NSFnsPDwhfIO13H%2F2Oc5GgVHx4aDBkp69qxnGkbD7AHQaCnAtd7j53tqeILbYiZWDgASwIlBgWqiSGXDf%2B7zfXy%2FqGDt4yH8kXpYMzOibiYnCHv0oqr0%2FIezk2SdMIbwdiqEjU6qy1lV36s0enmjRrFQWW8yM7%2FmflfxXRL5VLSuVPL3jQw26Namg0PH15ICWvFU7ro5q3fAcON474syZTjUutj8prz3XxQ77Q9cddOoEQE2DrR8KWsk9ESoR1%2FTo8MZSYPVQEw6UWYELGriEog4V9pY6U1cr7UbYk26VUrCqPBizkan6VG1Vlib9MLqau8MGOqUBioPUtcYtNj5b5O0Lwp0e3V43R2gnXyU9DSLf3C5mscKdZh%2FX2K2T0JdYtNdm1v7QXEJO5YGk6XKdAvOh7%2FU2p6erIWXyxHQuLXFgT41iu9rINC7M7fzKm7AS2hRbjNEAAEOSgala9kDxsD%2BXCea1hSc1H2J3LinFh2IUCld9borBy7PLcqJAywvW3HEWxJ%2Fklke2AEgeV9k0I8272B3CW9VcvDVs&X-Amz-Signature=822493b15724ff78fba01e1bbb6795e3aa047b7865c5b347045f75368c05ec5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPPTO7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI3Wybu9ix72zRoxnNYoWZDEj5CqpTRaXsnS9Z2oujFAiEAg1Jm31E3Lk1lu3RkOLuul7xeOyAhjyqNB3i6VcNO7kYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx56g3Qs58K84xvXyrcA9F4wHPiQ%2BeWhniW9%2BBpIrjkQzWlkod6AnIP7Mo0bvLG6V%2FbEbcc21GmX2puc9CBDfels01p%2FYAdR8VuDohG8WIJTppiVgZc%2BAkNUNG8fidR4LJHPe64kjOYb8QqTDVzSA2FRg1GET3%2BULoy9MJcogmVK2CK20f357OgVMy4XeUc52%2BR8SuT5CZWlCSUkEyfTul%2BiMYC8KTFbLGpsqNlnWHA38XRFZg5GEbdj4NVIPNlUSzOwwyqsQdUaCI1VIdoDo0z81xpLZfNdOPNTBwx69UGYjxTZd6La1CsJwpgcgquZfRYAmcs1Z3bnO%2FIIg9NSFnsPDwhfIO13H%2F2Oc5GgVHx4aDBkp69qxnGkbD7AHQaCnAtd7j53tqeILbYiZWDgASwIlBgWqiSGXDf%2B7zfXy%2FqGDt4yH8kXpYMzOibiYnCHv0oqr0%2FIezk2SdMIbwdiqEjU6qy1lV36s0enmjRrFQWW8yM7%2FmflfxXRL5VLSuVPL3jQw26Namg0PH15ICWvFU7ro5q3fAcON474syZTjUutj8prz3XxQ77Q9cddOoEQE2DrR8KWsk9ESoR1%2FTo8MZSYPVQEw6UWYELGriEog4V9pY6U1cr7UbYk26VUrCqPBizkan6VG1Vlib9MLqau8MGOqUBioPUtcYtNj5b5O0Lwp0e3V43R2gnXyU9DSLf3C5mscKdZh%2FX2K2T0JdYtNdm1v7QXEJO5YGk6XKdAvOh7%2FU2p6erIWXyxHQuLXFgT41iu9rINC7M7fzKm7AS2hRbjNEAAEOSgala9kDxsD%2BXCea1hSc1H2J3LinFh2IUCld9borBy7PLcqJAywvW3HEWxJ%2Fklke2AEgeV9k0I8272B3CW9VcvDVs&X-Amz-Signature=cff52f02c1cc39dfa070e4a7d506a39b3e61a7ffef546d2baa9488f68cda5a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPPTO7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI3Wybu9ix72zRoxnNYoWZDEj5CqpTRaXsnS9Z2oujFAiEAg1Jm31E3Lk1lu3RkOLuul7xeOyAhjyqNB3i6VcNO7kYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx56g3Qs58K84xvXyrcA9F4wHPiQ%2BeWhniW9%2BBpIrjkQzWlkod6AnIP7Mo0bvLG6V%2FbEbcc21GmX2puc9CBDfels01p%2FYAdR8VuDohG8WIJTppiVgZc%2BAkNUNG8fidR4LJHPe64kjOYb8QqTDVzSA2FRg1GET3%2BULoy9MJcogmVK2CK20f357OgVMy4XeUc52%2BR8SuT5CZWlCSUkEyfTul%2BiMYC8KTFbLGpsqNlnWHA38XRFZg5GEbdj4NVIPNlUSzOwwyqsQdUaCI1VIdoDo0z81xpLZfNdOPNTBwx69UGYjxTZd6La1CsJwpgcgquZfRYAmcs1Z3bnO%2FIIg9NSFnsPDwhfIO13H%2F2Oc5GgVHx4aDBkp69qxnGkbD7AHQaCnAtd7j53tqeILbYiZWDgASwIlBgWqiSGXDf%2B7zfXy%2FqGDt4yH8kXpYMzOibiYnCHv0oqr0%2FIezk2SdMIbwdiqEjU6qy1lV36s0enmjRrFQWW8yM7%2FmflfxXRL5VLSuVPL3jQw26Namg0PH15ICWvFU7ro5q3fAcON474syZTjUutj8prz3XxQ77Q9cddOoEQE2DrR8KWsk9ESoR1%2FTo8MZSYPVQEw6UWYELGriEog4V9pY6U1cr7UbYk26VUrCqPBizkan6VG1Vlib9MLqau8MGOqUBioPUtcYtNj5b5O0Lwp0e3V43R2gnXyU9DSLf3C5mscKdZh%2FX2K2T0JdYtNdm1v7QXEJO5YGk6XKdAvOh7%2FU2p6erIWXyxHQuLXFgT41iu9rINC7M7fzKm7AS2hRbjNEAAEOSgala9kDxsD%2BXCea1hSc1H2J3LinFh2IUCld9borBy7PLcqJAywvW3HEWxJ%2Fklke2AEgeV9k0I8272B3CW9VcvDVs&X-Amz-Signature=09cf3fccaa00f49522895bd179cf8266ecc40947b6bb254a0231655a4deb5690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPPTO7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI3Wybu9ix72zRoxnNYoWZDEj5CqpTRaXsnS9Z2oujFAiEAg1Jm31E3Lk1lu3RkOLuul7xeOyAhjyqNB3i6VcNO7kYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx56g3Qs58K84xvXyrcA9F4wHPiQ%2BeWhniW9%2BBpIrjkQzWlkod6AnIP7Mo0bvLG6V%2FbEbcc21GmX2puc9CBDfels01p%2FYAdR8VuDohG8WIJTppiVgZc%2BAkNUNG8fidR4LJHPe64kjOYb8QqTDVzSA2FRg1GET3%2BULoy9MJcogmVK2CK20f357OgVMy4XeUc52%2BR8SuT5CZWlCSUkEyfTul%2BiMYC8KTFbLGpsqNlnWHA38XRFZg5GEbdj4NVIPNlUSzOwwyqsQdUaCI1VIdoDo0z81xpLZfNdOPNTBwx69UGYjxTZd6La1CsJwpgcgquZfRYAmcs1Z3bnO%2FIIg9NSFnsPDwhfIO13H%2F2Oc5GgVHx4aDBkp69qxnGkbD7AHQaCnAtd7j53tqeILbYiZWDgASwIlBgWqiSGXDf%2B7zfXy%2FqGDt4yH8kXpYMzOibiYnCHv0oqr0%2FIezk2SdMIbwdiqEjU6qy1lV36s0enmjRrFQWW8yM7%2FmflfxXRL5VLSuVPL3jQw26Namg0PH15ICWvFU7ro5q3fAcON474syZTjUutj8prz3XxQ77Q9cddOoEQE2DrR8KWsk9ESoR1%2FTo8MZSYPVQEw6UWYELGriEog4V9pY6U1cr7UbYk26VUrCqPBizkan6VG1Vlib9MLqau8MGOqUBioPUtcYtNj5b5O0Lwp0e3V43R2gnXyU9DSLf3C5mscKdZh%2FX2K2T0JdYtNdm1v7QXEJO5YGk6XKdAvOh7%2FU2p6erIWXyxHQuLXFgT41iu9rINC7M7fzKm7AS2hRbjNEAAEOSgala9kDxsD%2BXCea1hSc1H2J3LinFh2IUCld9borBy7PLcqJAywvW3HEWxJ%2Fklke2AEgeV9k0I8272B3CW9VcvDVs&X-Amz-Signature=c7c0e66cc3d0824ce1498b6a0fbac08977d6e2048ec92614a1eb96c716a423ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPPTO7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI3Wybu9ix72zRoxnNYoWZDEj5CqpTRaXsnS9Z2oujFAiEAg1Jm31E3Lk1lu3RkOLuul7xeOyAhjyqNB3i6VcNO7kYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx56g3Qs58K84xvXyrcA9F4wHPiQ%2BeWhniW9%2BBpIrjkQzWlkod6AnIP7Mo0bvLG6V%2FbEbcc21GmX2puc9CBDfels01p%2FYAdR8VuDohG8WIJTppiVgZc%2BAkNUNG8fidR4LJHPe64kjOYb8QqTDVzSA2FRg1GET3%2BULoy9MJcogmVK2CK20f357OgVMy4XeUc52%2BR8SuT5CZWlCSUkEyfTul%2BiMYC8KTFbLGpsqNlnWHA38XRFZg5GEbdj4NVIPNlUSzOwwyqsQdUaCI1VIdoDo0z81xpLZfNdOPNTBwx69UGYjxTZd6La1CsJwpgcgquZfRYAmcs1Z3bnO%2FIIg9NSFnsPDwhfIO13H%2F2Oc5GgVHx4aDBkp69qxnGkbD7AHQaCnAtd7j53tqeILbYiZWDgASwIlBgWqiSGXDf%2B7zfXy%2FqGDt4yH8kXpYMzOibiYnCHv0oqr0%2FIezk2SdMIbwdiqEjU6qy1lV36s0enmjRrFQWW8yM7%2FmflfxXRL5VLSuVPL3jQw26Namg0PH15ICWvFU7ro5q3fAcON474syZTjUutj8prz3XxQ77Q9cddOoEQE2DrR8KWsk9ESoR1%2FTo8MZSYPVQEw6UWYELGriEog4V9pY6U1cr7UbYk26VUrCqPBizkan6VG1Vlib9MLqau8MGOqUBioPUtcYtNj5b5O0Lwp0e3V43R2gnXyU9DSLf3C5mscKdZh%2FX2K2T0JdYtNdm1v7QXEJO5YGk6XKdAvOh7%2FU2p6erIWXyxHQuLXFgT41iu9rINC7M7fzKm7AS2hRbjNEAAEOSgala9kDxsD%2BXCea1hSc1H2J3LinFh2IUCld9borBy7PLcqJAywvW3HEWxJ%2Fklke2AEgeV9k0I8272B3CW9VcvDVs&X-Amz-Signature=b0e7168049c1737e774cee21c44654ffb0329422c03aed392c0541bcaa0eea78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPPTO7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI3Wybu9ix72zRoxnNYoWZDEj5CqpTRaXsnS9Z2oujFAiEAg1Jm31E3Lk1lu3RkOLuul7xeOyAhjyqNB3i6VcNO7kYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx56g3Qs58K84xvXyrcA9F4wHPiQ%2BeWhniW9%2BBpIrjkQzWlkod6AnIP7Mo0bvLG6V%2FbEbcc21GmX2puc9CBDfels01p%2FYAdR8VuDohG8WIJTppiVgZc%2BAkNUNG8fidR4LJHPe64kjOYb8QqTDVzSA2FRg1GET3%2BULoy9MJcogmVK2CK20f357OgVMy4XeUc52%2BR8SuT5CZWlCSUkEyfTul%2BiMYC8KTFbLGpsqNlnWHA38XRFZg5GEbdj4NVIPNlUSzOwwyqsQdUaCI1VIdoDo0z81xpLZfNdOPNTBwx69UGYjxTZd6La1CsJwpgcgquZfRYAmcs1Z3bnO%2FIIg9NSFnsPDwhfIO13H%2F2Oc5GgVHx4aDBkp69qxnGkbD7AHQaCnAtd7j53tqeILbYiZWDgASwIlBgWqiSGXDf%2B7zfXy%2FqGDt4yH8kXpYMzOibiYnCHv0oqr0%2FIezk2SdMIbwdiqEjU6qy1lV36s0enmjRrFQWW8yM7%2FmflfxXRL5VLSuVPL3jQw26Namg0PH15ICWvFU7ro5q3fAcON474syZTjUutj8prz3XxQ77Q9cddOoEQE2DrR8KWsk9ESoR1%2FTo8MZSYPVQEw6UWYELGriEog4V9pY6U1cr7UbYk26VUrCqPBizkan6VG1Vlib9MLqau8MGOqUBioPUtcYtNj5b5O0Lwp0e3V43R2gnXyU9DSLf3C5mscKdZh%2FX2K2T0JdYtNdm1v7QXEJO5YGk6XKdAvOh7%2FU2p6erIWXyxHQuLXFgT41iu9rINC7M7fzKm7AS2hRbjNEAAEOSgala9kDxsD%2BXCea1hSc1H2J3LinFh2IUCld9borBy7PLcqJAywvW3HEWxJ%2Fklke2AEgeV9k0I8272B3CW9VcvDVs&X-Amz-Signature=db7512ab78ed60a72061ff03ea2e282fd28ae7ca0778f9c1a6e9a1dce69ed698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYMPPTO7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGI3Wybu9ix72zRoxnNYoWZDEj5CqpTRaXsnS9Z2oujFAiEAg1Jm31E3Lk1lu3RkOLuul7xeOyAhjyqNB3i6VcNO7kYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx56g3Qs58K84xvXyrcA9F4wHPiQ%2BeWhniW9%2BBpIrjkQzWlkod6AnIP7Mo0bvLG6V%2FbEbcc21GmX2puc9CBDfels01p%2FYAdR8VuDohG8WIJTppiVgZc%2BAkNUNG8fidR4LJHPe64kjOYb8QqTDVzSA2FRg1GET3%2BULoy9MJcogmVK2CK20f357OgVMy4XeUc52%2BR8SuT5CZWlCSUkEyfTul%2BiMYC8KTFbLGpsqNlnWHA38XRFZg5GEbdj4NVIPNlUSzOwwyqsQdUaCI1VIdoDo0z81xpLZfNdOPNTBwx69UGYjxTZd6La1CsJwpgcgquZfRYAmcs1Z3bnO%2FIIg9NSFnsPDwhfIO13H%2F2Oc5GgVHx4aDBkp69qxnGkbD7AHQaCnAtd7j53tqeILbYiZWDgASwIlBgWqiSGXDf%2B7zfXy%2FqGDt4yH8kXpYMzOibiYnCHv0oqr0%2FIezk2SdMIbwdiqEjU6qy1lV36s0enmjRrFQWW8yM7%2FmflfxXRL5VLSuVPL3jQw26Namg0PH15ICWvFU7ro5q3fAcON474syZTjUutj8prz3XxQ77Q9cddOoEQE2DrR8KWsk9ESoR1%2FTo8MZSYPVQEw6UWYELGriEog4V9pY6U1cr7UbYk26VUrCqPBizkan6VG1Vlib9MLqau8MGOqUBioPUtcYtNj5b5O0Lwp0e3V43R2gnXyU9DSLf3C5mscKdZh%2FX2K2T0JdYtNdm1v7QXEJO5YGk6XKdAvOh7%2FU2p6erIWXyxHQuLXFgT41iu9rINC7M7fzKm7AS2hRbjNEAAEOSgala9kDxsD%2BXCea1hSc1H2J3LinFh2IUCld9borBy7PLcqJAywvW3HEWxJ%2Fklke2AEgeV9k0I8272B3CW9VcvDVs&X-Amz-Signature=b08470c58a3ff3cc73b38155da14e5d886cbb290b2d2944b40580a0c8f2fe708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
