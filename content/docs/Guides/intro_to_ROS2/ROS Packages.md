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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624436KKR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCLlphYoMkB7T%2FdOQyqwNmtctjy6Y3bLEZB302xEI0zkgIgZzkaudDU6xbPbbk9oAWJUgyk4Nlwm6QF49J3kxzc6E4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO%2FADYaJYZ3QXEpfCSrcAwh5FEF2%2FCo189VKGOfOhkAR6yiCDUrozvrSlhmHLm9zpy62Xe%2BmbU2icID1LZfP%2Bm1enRBbiB4kk59NdqUZaDIHanQmwUrMZNIO3gdntP75ourQawZlh7pRpjZfFwq5GLwc9jRcm0ydp8VQzr6u2Qg5clKqthgz2qlrLCcMMTt%2Bw2UMZqYMeL0e6U63eOs4jYnS52VmeeXjQhg%2B81Vmj8UuDfFEYPed8aNXXV1MfS8kqhSmcB3LGfuRHtiKbNvOQlHeFtiDur7iTXrl7VV270drdTHTAs6l65r8YblIithc7VP8EdREX2HSFzxFINBRHH6Ai%2F0ZlNIu68Dh5lUIOd0RZC5VBH7pzZvPp8ZDL9%2BMmhVFZZiy0lq3q0Rg6CgfhSh3Dpjx7a%2FcBVTzeAkT9zxpGcaa8ZQpcFmYiO6dtO6O6uM9iwvItE%2BLc23fPqXmJlbeKYelw28QjlpYF0vRF3LJ%2BJMzLYLxdpimhOxU2kTulp9%2BOGL2gYHjx6ywHakUN2IUSfskmyGcFnha9jLBP8V0kIFYPcSl6QggvcE4%2B6VrqnBX2t7UYY28M4NWIboHDOrxOcV6jYKa1pF3ElHqR3hkLVrGxSnCkHuP0fxbeNPD32EjvwWOiK3XhNp7MKabx70GOqUBGDP%2BZ0S2WtS8BmezVPYMBLdQEj41YvxSc76GUHtg06U1AMJEw7%2FupZK8ur2Ty37CuxcHDTOKdRKIQ8f0C0JpAPrph3cl2FmYQVTIzVgkHYBM6P78qcKl8WVH4yx47f2LzSS%2FJTRbLKmdFxNg%2BiwCLWmUNLjRzBs0f3GOQhBOMGxQmBUcHmT1HBVA8g3O%2BcwFdzBbVUke5x6soFfwo%2BJvtGaFLNH3&X-Amz-Signature=2687fd2abed03fe593ced88cb8205fa67ebf98f45b114e19f6b20a664e29f5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624436KKR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCLlphYoMkB7T%2FdOQyqwNmtctjy6Y3bLEZB302xEI0zkgIgZzkaudDU6xbPbbk9oAWJUgyk4Nlwm6QF49J3kxzc6E4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO%2FADYaJYZ3QXEpfCSrcAwh5FEF2%2FCo189VKGOfOhkAR6yiCDUrozvrSlhmHLm9zpy62Xe%2BmbU2icID1LZfP%2Bm1enRBbiB4kk59NdqUZaDIHanQmwUrMZNIO3gdntP75ourQawZlh7pRpjZfFwq5GLwc9jRcm0ydp8VQzr6u2Qg5clKqthgz2qlrLCcMMTt%2Bw2UMZqYMeL0e6U63eOs4jYnS52VmeeXjQhg%2B81Vmj8UuDfFEYPed8aNXXV1MfS8kqhSmcB3LGfuRHtiKbNvOQlHeFtiDur7iTXrl7VV270drdTHTAs6l65r8YblIithc7VP8EdREX2HSFzxFINBRHH6Ai%2F0ZlNIu68Dh5lUIOd0RZC5VBH7pzZvPp8ZDL9%2BMmhVFZZiy0lq3q0Rg6CgfhSh3Dpjx7a%2FcBVTzeAkT9zxpGcaa8ZQpcFmYiO6dtO6O6uM9iwvItE%2BLc23fPqXmJlbeKYelw28QjlpYF0vRF3LJ%2BJMzLYLxdpimhOxU2kTulp9%2BOGL2gYHjx6ywHakUN2IUSfskmyGcFnha9jLBP8V0kIFYPcSl6QggvcE4%2B6VrqnBX2t7UYY28M4NWIboHDOrxOcV6jYKa1pF3ElHqR3hkLVrGxSnCkHuP0fxbeNPD32EjvwWOiK3XhNp7MKabx70GOqUBGDP%2BZ0S2WtS8BmezVPYMBLdQEj41YvxSc76GUHtg06U1AMJEw7%2FupZK8ur2Ty37CuxcHDTOKdRKIQ8f0C0JpAPrph3cl2FmYQVTIzVgkHYBM6P78qcKl8WVH4yx47f2LzSS%2FJTRbLKmdFxNg%2BiwCLWmUNLjRzBs0f3GOQhBOMGxQmBUcHmT1HBVA8g3O%2BcwFdzBbVUke5x6soFfwo%2BJvtGaFLNH3&X-Amz-Signature=864c48d1e654f9fec3c05761ff27c28e9732457ce7db7469d91399bc75deaddd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624436KKR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCLlphYoMkB7T%2FdOQyqwNmtctjy6Y3bLEZB302xEI0zkgIgZzkaudDU6xbPbbk9oAWJUgyk4Nlwm6QF49J3kxzc6E4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO%2FADYaJYZ3QXEpfCSrcAwh5FEF2%2FCo189VKGOfOhkAR6yiCDUrozvrSlhmHLm9zpy62Xe%2BmbU2icID1LZfP%2Bm1enRBbiB4kk59NdqUZaDIHanQmwUrMZNIO3gdntP75ourQawZlh7pRpjZfFwq5GLwc9jRcm0ydp8VQzr6u2Qg5clKqthgz2qlrLCcMMTt%2Bw2UMZqYMeL0e6U63eOs4jYnS52VmeeXjQhg%2B81Vmj8UuDfFEYPed8aNXXV1MfS8kqhSmcB3LGfuRHtiKbNvOQlHeFtiDur7iTXrl7VV270drdTHTAs6l65r8YblIithc7VP8EdREX2HSFzxFINBRHH6Ai%2F0ZlNIu68Dh5lUIOd0RZC5VBH7pzZvPp8ZDL9%2BMmhVFZZiy0lq3q0Rg6CgfhSh3Dpjx7a%2FcBVTzeAkT9zxpGcaa8ZQpcFmYiO6dtO6O6uM9iwvItE%2BLc23fPqXmJlbeKYelw28QjlpYF0vRF3LJ%2BJMzLYLxdpimhOxU2kTulp9%2BOGL2gYHjx6ywHakUN2IUSfskmyGcFnha9jLBP8V0kIFYPcSl6QggvcE4%2B6VrqnBX2t7UYY28M4NWIboHDOrxOcV6jYKa1pF3ElHqR3hkLVrGxSnCkHuP0fxbeNPD32EjvwWOiK3XhNp7MKabx70GOqUBGDP%2BZ0S2WtS8BmezVPYMBLdQEj41YvxSc76GUHtg06U1AMJEw7%2FupZK8ur2Ty37CuxcHDTOKdRKIQ8f0C0JpAPrph3cl2FmYQVTIzVgkHYBM6P78qcKl8WVH4yx47f2LzSS%2FJTRbLKmdFxNg%2BiwCLWmUNLjRzBs0f3GOQhBOMGxQmBUcHmT1HBVA8g3O%2BcwFdzBbVUke5x6soFfwo%2BJvtGaFLNH3&X-Amz-Signature=f4857265c1b54ecae1e8d49771683d7d93983bbf103b1fe8abc17c883ff45bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624436KKR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCLlphYoMkB7T%2FdOQyqwNmtctjy6Y3bLEZB302xEI0zkgIgZzkaudDU6xbPbbk9oAWJUgyk4Nlwm6QF49J3kxzc6E4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO%2FADYaJYZ3QXEpfCSrcAwh5FEF2%2FCo189VKGOfOhkAR6yiCDUrozvrSlhmHLm9zpy62Xe%2BmbU2icID1LZfP%2Bm1enRBbiB4kk59NdqUZaDIHanQmwUrMZNIO3gdntP75ourQawZlh7pRpjZfFwq5GLwc9jRcm0ydp8VQzr6u2Qg5clKqthgz2qlrLCcMMTt%2Bw2UMZqYMeL0e6U63eOs4jYnS52VmeeXjQhg%2B81Vmj8UuDfFEYPed8aNXXV1MfS8kqhSmcB3LGfuRHtiKbNvOQlHeFtiDur7iTXrl7VV270drdTHTAs6l65r8YblIithc7VP8EdREX2HSFzxFINBRHH6Ai%2F0ZlNIu68Dh5lUIOd0RZC5VBH7pzZvPp8ZDL9%2BMmhVFZZiy0lq3q0Rg6CgfhSh3Dpjx7a%2FcBVTzeAkT9zxpGcaa8ZQpcFmYiO6dtO6O6uM9iwvItE%2BLc23fPqXmJlbeKYelw28QjlpYF0vRF3LJ%2BJMzLYLxdpimhOxU2kTulp9%2BOGL2gYHjx6ywHakUN2IUSfskmyGcFnha9jLBP8V0kIFYPcSl6QggvcE4%2B6VrqnBX2t7UYY28M4NWIboHDOrxOcV6jYKa1pF3ElHqR3hkLVrGxSnCkHuP0fxbeNPD32EjvwWOiK3XhNp7MKabx70GOqUBGDP%2BZ0S2WtS8BmezVPYMBLdQEj41YvxSc76GUHtg06U1AMJEw7%2FupZK8ur2Ty37CuxcHDTOKdRKIQ8f0C0JpAPrph3cl2FmYQVTIzVgkHYBM6P78qcKl8WVH4yx47f2LzSS%2FJTRbLKmdFxNg%2BiwCLWmUNLjRzBs0f3GOQhBOMGxQmBUcHmT1HBVA8g3O%2BcwFdzBbVUke5x6soFfwo%2BJvtGaFLNH3&X-Amz-Signature=4621f85ab9462adbf18b42a68c053858ca46d0ab2c15e8bb4d2d949cc8568302&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624436KKR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCLlphYoMkB7T%2FdOQyqwNmtctjy6Y3bLEZB302xEI0zkgIgZzkaudDU6xbPbbk9oAWJUgyk4Nlwm6QF49J3kxzc6E4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO%2FADYaJYZ3QXEpfCSrcAwh5FEF2%2FCo189VKGOfOhkAR6yiCDUrozvrSlhmHLm9zpy62Xe%2BmbU2icID1LZfP%2Bm1enRBbiB4kk59NdqUZaDIHanQmwUrMZNIO3gdntP75ourQawZlh7pRpjZfFwq5GLwc9jRcm0ydp8VQzr6u2Qg5clKqthgz2qlrLCcMMTt%2Bw2UMZqYMeL0e6U63eOs4jYnS52VmeeXjQhg%2B81Vmj8UuDfFEYPed8aNXXV1MfS8kqhSmcB3LGfuRHtiKbNvOQlHeFtiDur7iTXrl7VV270drdTHTAs6l65r8YblIithc7VP8EdREX2HSFzxFINBRHH6Ai%2F0ZlNIu68Dh5lUIOd0RZC5VBH7pzZvPp8ZDL9%2BMmhVFZZiy0lq3q0Rg6CgfhSh3Dpjx7a%2FcBVTzeAkT9zxpGcaa8ZQpcFmYiO6dtO6O6uM9iwvItE%2BLc23fPqXmJlbeKYelw28QjlpYF0vRF3LJ%2BJMzLYLxdpimhOxU2kTulp9%2BOGL2gYHjx6ywHakUN2IUSfskmyGcFnha9jLBP8V0kIFYPcSl6QggvcE4%2B6VrqnBX2t7UYY28M4NWIboHDOrxOcV6jYKa1pF3ElHqR3hkLVrGxSnCkHuP0fxbeNPD32EjvwWOiK3XhNp7MKabx70GOqUBGDP%2BZ0S2WtS8BmezVPYMBLdQEj41YvxSc76GUHtg06U1AMJEw7%2FupZK8ur2Ty37CuxcHDTOKdRKIQ8f0C0JpAPrph3cl2FmYQVTIzVgkHYBM6P78qcKl8WVH4yx47f2LzSS%2FJTRbLKmdFxNg%2BiwCLWmUNLjRzBs0f3GOQhBOMGxQmBUcHmT1HBVA8g3O%2BcwFdzBbVUke5x6soFfwo%2BJvtGaFLNH3&X-Amz-Signature=d4568a5d7075479638f3a8b71220a80d1a3ab12a7ea576eeb3b6f3e99fd3be9e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624436KKR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCLlphYoMkB7T%2FdOQyqwNmtctjy6Y3bLEZB302xEI0zkgIgZzkaudDU6xbPbbk9oAWJUgyk4Nlwm6QF49J3kxzc6E4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO%2FADYaJYZ3QXEpfCSrcAwh5FEF2%2FCo189VKGOfOhkAR6yiCDUrozvrSlhmHLm9zpy62Xe%2BmbU2icID1LZfP%2Bm1enRBbiB4kk59NdqUZaDIHanQmwUrMZNIO3gdntP75ourQawZlh7pRpjZfFwq5GLwc9jRcm0ydp8VQzr6u2Qg5clKqthgz2qlrLCcMMTt%2Bw2UMZqYMeL0e6U63eOs4jYnS52VmeeXjQhg%2B81Vmj8UuDfFEYPed8aNXXV1MfS8kqhSmcB3LGfuRHtiKbNvOQlHeFtiDur7iTXrl7VV270drdTHTAs6l65r8YblIithc7VP8EdREX2HSFzxFINBRHH6Ai%2F0ZlNIu68Dh5lUIOd0RZC5VBH7pzZvPp8ZDL9%2BMmhVFZZiy0lq3q0Rg6CgfhSh3Dpjx7a%2FcBVTzeAkT9zxpGcaa8ZQpcFmYiO6dtO6O6uM9iwvItE%2BLc23fPqXmJlbeKYelw28QjlpYF0vRF3LJ%2BJMzLYLxdpimhOxU2kTulp9%2BOGL2gYHjx6ywHakUN2IUSfskmyGcFnha9jLBP8V0kIFYPcSl6QggvcE4%2B6VrqnBX2t7UYY28M4NWIboHDOrxOcV6jYKa1pF3ElHqR3hkLVrGxSnCkHuP0fxbeNPD32EjvwWOiK3XhNp7MKabx70GOqUBGDP%2BZ0S2WtS8BmezVPYMBLdQEj41YvxSc76GUHtg06U1AMJEw7%2FupZK8ur2Ty37CuxcHDTOKdRKIQ8f0C0JpAPrph3cl2FmYQVTIzVgkHYBM6P78qcKl8WVH4yx47f2LzSS%2FJTRbLKmdFxNg%2BiwCLWmUNLjRzBs0f3GOQhBOMGxQmBUcHmT1HBVA8g3O%2BcwFdzBbVUke5x6soFfwo%2BJvtGaFLNH3&X-Amz-Signature=ba4f16183db65246b21fa71a262bec626533f19bc269007495bc544cc02f731e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624436KKR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCLlphYoMkB7T%2FdOQyqwNmtctjy6Y3bLEZB302xEI0zkgIgZzkaudDU6xbPbbk9oAWJUgyk4Nlwm6QF49J3kxzc6E4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO%2FADYaJYZ3QXEpfCSrcAwh5FEF2%2FCo189VKGOfOhkAR6yiCDUrozvrSlhmHLm9zpy62Xe%2BmbU2icID1LZfP%2Bm1enRBbiB4kk59NdqUZaDIHanQmwUrMZNIO3gdntP75ourQawZlh7pRpjZfFwq5GLwc9jRcm0ydp8VQzr6u2Qg5clKqthgz2qlrLCcMMTt%2Bw2UMZqYMeL0e6U63eOs4jYnS52VmeeXjQhg%2B81Vmj8UuDfFEYPed8aNXXV1MfS8kqhSmcB3LGfuRHtiKbNvOQlHeFtiDur7iTXrl7VV270drdTHTAs6l65r8YblIithc7VP8EdREX2HSFzxFINBRHH6Ai%2F0ZlNIu68Dh5lUIOd0RZC5VBH7pzZvPp8ZDL9%2BMmhVFZZiy0lq3q0Rg6CgfhSh3Dpjx7a%2FcBVTzeAkT9zxpGcaa8ZQpcFmYiO6dtO6O6uM9iwvItE%2BLc23fPqXmJlbeKYelw28QjlpYF0vRF3LJ%2BJMzLYLxdpimhOxU2kTulp9%2BOGL2gYHjx6ywHakUN2IUSfskmyGcFnha9jLBP8V0kIFYPcSl6QggvcE4%2B6VrqnBX2t7UYY28M4NWIboHDOrxOcV6jYKa1pF3ElHqR3hkLVrGxSnCkHuP0fxbeNPD32EjvwWOiK3XhNp7MKabx70GOqUBGDP%2BZ0S2WtS8BmezVPYMBLdQEj41YvxSc76GUHtg06U1AMJEw7%2FupZK8ur2Ty37CuxcHDTOKdRKIQ8f0C0JpAPrph3cl2FmYQVTIzVgkHYBM6P78qcKl8WVH4yx47f2LzSS%2FJTRbLKmdFxNg%2BiwCLWmUNLjRzBs0f3GOQhBOMGxQmBUcHmT1HBVA8g3O%2BcwFdzBbVUke5x6soFfwo%2BJvtGaFLNH3&X-Amz-Signature=ce059f22750bf7ac0631b3cbd57cd3bff9bb9a1b77bf960b5c09a8b848980f35&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
