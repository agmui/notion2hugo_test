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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T473BEGB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtWWzGVJj7%2Fz%2Frhuom1jlRP%2FBPPAGQxkeY2InM8oengIhAJrqpjrRgIwda0FV0DwNiWw%2BefMHvp4K%2F1adGPHQJt0ZKv8DCFgQABoMNjM3NDIzMTgzODA1Igw377HH6%2FmIUmt0GW0q3AOLu4KHeipJxjlvgE2WvjecAJBSL5NrNvV9ByrA2EeYG4rUVpIcoWIS7nwBX1Z0wTMOtg5Hr%2BsMvOslor3VEZMUZTKEFPjnuGIY9v3BRmxy077T2n1SNVvxmJ4IzrR%2FOkRspZkDHzlGXNQ5gEkIG3xtPELkU2Lsv9Q9uosr%2B5W7XGkXm9nIzzrd4v9ssTFzY1BSh6W9nw0b12g0DBpOYIVkV9A%2Fg17DXW%2BuJuwMGrSilTBotYDVCabisbSopslvPd8c9G6TYP1hEcNQY32Eh00QYBbGlTVapt4PygET9FuRxR2BkPrnaz9aGta00%2BM6TUxc3gA0DTvozp14otHCoKb%2BWSBi6mFWAWREpCqaAEWOMqE%2Bi2GdE9SlJHgKAScW6zpJACkUlOMyyAPZpyqKIX3RVC%2FYhnHLC9p5rWOlOKk6eTmA6qHEngSRRcWeKF%2FvYFOjkF86Ymr2Qb6wTBSIWVk9XIlDuH%2BxAS6wMRZTNDyy4pldvQIzfTgKrx%2BHR9pYKYz1hZ%2FeS44M1o70J9mjUGo%2F3VtRADm2LXFYLApalw4q80RHgiLlE%2Fp0uhFggosdjgd5PgQx5x2BUzgSraM5zPIF9zx582j1SL754FhBb4eyPNIeyGY9fXRmc%2BaLVDD%2F4KDBBjqkAave3m2wCAu1e5jKiH52P8AMzlS62K3UKj1ztUZ%2FhswcByOUEwfxFUZJFSN9eEVX%2FHJrjXPD5aUuqevv7u9mBF3R0InZXqeFRoXraEoc3lIU%2Bd%2FFilRV%2ByCBD%2Bd%2FEUuXlAa49yia56DUChVJZEtkqtPnt2OonZnZhI8Xl6ut3BYdjgEM%2FQXlSszLnwagbRkOZeANwJgMyCRs0YWD63OH947GO3eQ&X-Amz-Signature=e670115a59ee9a639dc6bf510e120cb838378e46761b4dca661c9a586d1bef5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T473BEGB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtWWzGVJj7%2Fz%2Frhuom1jlRP%2FBPPAGQxkeY2InM8oengIhAJrqpjrRgIwda0FV0DwNiWw%2BefMHvp4K%2F1adGPHQJt0ZKv8DCFgQABoMNjM3NDIzMTgzODA1Igw377HH6%2FmIUmt0GW0q3AOLu4KHeipJxjlvgE2WvjecAJBSL5NrNvV9ByrA2EeYG4rUVpIcoWIS7nwBX1Z0wTMOtg5Hr%2BsMvOslor3VEZMUZTKEFPjnuGIY9v3BRmxy077T2n1SNVvxmJ4IzrR%2FOkRspZkDHzlGXNQ5gEkIG3xtPELkU2Lsv9Q9uosr%2B5W7XGkXm9nIzzrd4v9ssTFzY1BSh6W9nw0b12g0DBpOYIVkV9A%2Fg17DXW%2BuJuwMGrSilTBotYDVCabisbSopslvPd8c9G6TYP1hEcNQY32Eh00QYBbGlTVapt4PygET9FuRxR2BkPrnaz9aGta00%2BM6TUxc3gA0DTvozp14otHCoKb%2BWSBi6mFWAWREpCqaAEWOMqE%2Bi2GdE9SlJHgKAScW6zpJACkUlOMyyAPZpyqKIX3RVC%2FYhnHLC9p5rWOlOKk6eTmA6qHEngSRRcWeKF%2FvYFOjkF86Ymr2Qb6wTBSIWVk9XIlDuH%2BxAS6wMRZTNDyy4pldvQIzfTgKrx%2BHR9pYKYz1hZ%2FeS44M1o70J9mjUGo%2F3VtRADm2LXFYLApalw4q80RHgiLlE%2Fp0uhFggosdjgd5PgQx5x2BUzgSraM5zPIF9zx582j1SL754FhBb4eyPNIeyGY9fXRmc%2BaLVDD%2F4KDBBjqkAave3m2wCAu1e5jKiH52P8AMzlS62K3UKj1ztUZ%2FhswcByOUEwfxFUZJFSN9eEVX%2FHJrjXPD5aUuqevv7u9mBF3R0InZXqeFRoXraEoc3lIU%2Bd%2FFilRV%2ByCBD%2Bd%2FEUuXlAa49yia56DUChVJZEtkqtPnt2OonZnZhI8Xl6ut3BYdjgEM%2FQXlSszLnwagbRkOZeANwJgMyCRs0YWD63OH947GO3eQ&X-Amz-Signature=e62f1a53b7931e12b686ddf8f2b060be29f50668c2989ffc0a384c4ef7c73a62&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T473BEGB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtWWzGVJj7%2Fz%2Frhuom1jlRP%2FBPPAGQxkeY2InM8oengIhAJrqpjrRgIwda0FV0DwNiWw%2BefMHvp4K%2F1adGPHQJt0ZKv8DCFgQABoMNjM3NDIzMTgzODA1Igw377HH6%2FmIUmt0GW0q3AOLu4KHeipJxjlvgE2WvjecAJBSL5NrNvV9ByrA2EeYG4rUVpIcoWIS7nwBX1Z0wTMOtg5Hr%2BsMvOslor3VEZMUZTKEFPjnuGIY9v3BRmxy077T2n1SNVvxmJ4IzrR%2FOkRspZkDHzlGXNQ5gEkIG3xtPELkU2Lsv9Q9uosr%2B5W7XGkXm9nIzzrd4v9ssTFzY1BSh6W9nw0b12g0DBpOYIVkV9A%2Fg17DXW%2BuJuwMGrSilTBotYDVCabisbSopslvPd8c9G6TYP1hEcNQY32Eh00QYBbGlTVapt4PygET9FuRxR2BkPrnaz9aGta00%2BM6TUxc3gA0DTvozp14otHCoKb%2BWSBi6mFWAWREpCqaAEWOMqE%2Bi2GdE9SlJHgKAScW6zpJACkUlOMyyAPZpyqKIX3RVC%2FYhnHLC9p5rWOlOKk6eTmA6qHEngSRRcWeKF%2FvYFOjkF86Ymr2Qb6wTBSIWVk9XIlDuH%2BxAS6wMRZTNDyy4pldvQIzfTgKrx%2BHR9pYKYz1hZ%2FeS44M1o70J9mjUGo%2F3VtRADm2LXFYLApalw4q80RHgiLlE%2Fp0uhFggosdjgd5PgQx5x2BUzgSraM5zPIF9zx582j1SL754FhBb4eyPNIeyGY9fXRmc%2BaLVDD%2F4KDBBjqkAave3m2wCAu1e5jKiH52P8AMzlS62K3UKj1ztUZ%2FhswcByOUEwfxFUZJFSN9eEVX%2FHJrjXPD5aUuqevv7u9mBF3R0InZXqeFRoXraEoc3lIU%2Bd%2FFilRV%2ByCBD%2Bd%2FEUuXlAa49yia56DUChVJZEtkqtPnt2OonZnZhI8Xl6ut3BYdjgEM%2FQXlSszLnwagbRkOZeANwJgMyCRs0YWD63OH947GO3eQ&X-Amz-Signature=79dac1c16b72cf162bf42094684634ab12a5e964b21dcd6316952d7cb5207c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T473BEGB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtWWzGVJj7%2Fz%2Frhuom1jlRP%2FBPPAGQxkeY2InM8oengIhAJrqpjrRgIwda0FV0DwNiWw%2BefMHvp4K%2F1adGPHQJt0ZKv8DCFgQABoMNjM3NDIzMTgzODA1Igw377HH6%2FmIUmt0GW0q3AOLu4KHeipJxjlvgE2WvjecAJBSL5NrNvV9ByrA2EeYG4rUVpIcoWIS7nwBX1Z0wTMOtg5Hr%2BsMvOslor3VEZMUZTKEFPjnuGIY9v3BRmxy077T2n1SNVvxmJ4IzrR%2FOkRspZkDHzlGXNQ5gEkIG3xtPELkU2Lsv9Q9uosr%2B5W7XGkXm9nIzzrd4v9ssTFzY1BSh6W9nw0b12g0DBpOYIVkV9A%2Fg17DXW%2BuJuwMGrSilTBotYDVCabisbSopslvPd8c9G6TYP1hEcNQY32Eh00QYBbGlTVapt4PygET9FuRxR2BkPrnaz9aGta00%2BM6TUxc3gA0DTvozp14otHCoKb%2BWSBi6mFWAWREpCqaAEWOMqE%2Bi2GdE9SlJHgKAScW6zpJACkUlOMyyAPZpyqKIX3RVC%2FYhnHLC9p5rWOlOKk6eTmA6qHEngSRRcWeKF%2FvYFOjkF86Ymr2Qb6wTBSIWVk9XIlDuH%2BxAS6wMRZTNDyy4pldvQIzfTgKrx%2BHR9pYKYz1hZ%2FeS44M1o70J9mjUGo%2F3VtRADm2LXFYLApalw4q80RHgiLlE%2Fp0uhFggosdjgd5PgQx5x2BUzgSraM5zPIF9zx582j1SL754FhBb4eyPNIeyGY9fXRmc%2BaLVDD%2F4KDBBjqkAave3m2wCAu1e5jKiH52P8AMzlS62K3UKj1ztUZ%2FhswcByOUEwfxFUZJFSN9eEVX%2FHJrjXPD5aUuqevv7u9mBF3R0InZXqeFRoXraEoc3lIU%2Bd%2FFilRV%2ByCBD%2Bd%2FEUuXlAa49yia56DUChVJZEtkqtPnt2OonZnZhI8Xl6ut3BYdjgEM%2FQXlSszLnwagbRkOZeANwJgMyCRs0YWD63OH947GO3eQ&X-Amz-Signature=23c03b343e2339bf1d409592d711b84bc80a6e93c5d22de182753692cc772e87&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T473BEGB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtWWzGVJj7%2Fz%2Frhuom1jlRP%2FBPPAGQxkeY2InM8oengIhAJrqpjrRgIwda0FV0DwNiWw%2BefMHvp4K%2F1adGPHQJt0ZKv8DCFgQABoMNjM3NDIzMTgzODA1Igw377HH6%2FmIUmt0GW0q3AOLu4KHeipJxjlvgE2WvjecAJBSL5NrNvV9ByrA2EeYG4rUVpIcoWIS7nwBX1Z0wTMOtg5Hr%2BsMvOslor3VEZMUZTKEFPjnuGIY9v3BRmxy077T2n1SNVvxmJ4IzrR%2FOkRspZkDHzlGXNQ5gEkIG3xtPELkU2Lsv9Q9uosr%2B5W7XGkXm9nIzzrd4v9ssTFzY1BSh6W9nw0b12g0DBpOYIVkV9A%2Fg17DXW%2BuJuwMGrSilTBotYDVCabisbSopslvPd8c9G6TYP1hEcNQY32Eh00QYBbGlTVapt4PygET9FuRxR2BkPrnaz9aGta00%2BM6TUxc3gA0DTvozp14otHCoKb%2BWSBi6mFWAWREpCqaAEWOMqE%2Bi2GdE9SlJHgKAScW6zpJACkUlOMyyAPZpyqKIX3RVC%2FYhnHLC9p5rWOlOKk6eTmA6qHEngSRRcWeKF%2FvYFOjkF86Ymr2Qb6wTBSIWVk9XIlDuH%2BxAS6wMRZTNDyy4pldvQIzfTgKrx%2BHR9pYKYz1hZ%2FeS44M1o70J9mjUGo%2F3VtRADm2LXFYLApalw4q80RHgiLlE%2Fp0uhFggosdjgd5PgQx5x2BUzgSraM5zPIF9zx582j1SL754FhBb4eyPNIeyGY9fXRmc%2BaLVDD%2F4KDBBjqkAave3m2wCAu1e5jKiH52P8AMzlS62K3UKj1ztUZ%2FhswcByOUEwfxFUZJFSN9eEVX%2FHJrjXPD5aUuqevv7u9mBF3R0InZXqeFRoXraEoc3lIU%2Bd%2FFilRV%2ByCBD%2Bd%2FEUuXlAa49yia56DUChVJZEtkqtPnt2OonZnZhI8Xl6ut3BYdjgEM%2FQXlSszLnwagbRkOZeANwJgMyCRs0YWD63OH947GO3eQ&X-Amz-Signature=b91dd6d272118f1eae8b5ade0332a613b6e28312c220bf2c3f5ff0b24953744f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T473BEGB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtWWzGVJj7%2Fz%2Frhuom1jlRP%2FBPPAGQxkeY2InM8oengIhAJrqpjrRgIwda0FV0DwNiWw%2BefMHvp4K%2F1adGPHQJt0ZKv8DCFgQABoMNjM3NDIzMTgzODA1Igw377HH6%2FmIUmt0GW0q3AOLu4KHeipJxjlvgE2WvjecAJBSL5NrNvV9ByrA2EeYG4rUVpIcoWIS7nwBX1Z0wTMOtg5Hr%2BsMvOslor3VEZMUZTKEFPjnuGIY9v3BRmxy077T2n1SNVvxmJ4IzrR%2FOkRspZkDHzlGXNQ5gEkIG3xtPELkU2Lsv9Q9uosr%2B5W7XGkXm9nIzzrd4v9ssTFzY1BSh6W9nw0b12g0DBpOYIVkV9A%2Fg17DXW%2BuJuwMGrSilTBotYDVCabisbSopslvPd8c9G6TYP1hEcNQY32Eh00QYBbGlTVapt4PygET9FuRxR2BkPrnaz9aGta00%2BM6TUxc3gA0DTvozp14otHCoKb%2BWSBi6mFWAWREpCqaAEWOMqE%2Bi2GdE9SlJHgKAScW6zpJACkUlOMyyAPZpyqKIX3RVC%2FYhnHLC9p5rWOlOKk6eTmA6qHEngSRRcWeKF%2FvYFOjkF86Ymr2Qb6wTBSIWVk9XIlDuH%2BxAS6wMRZTNDyy4pldvQIzfTgKrx%2BHR9pYKYz1hZ%2FeS44M1o70J9mjUGo%2F3VtRADm2LXFYLApalw4q80RHgiLlE%2Fp0uhFggosdjgd5PgQx5x2BUzgSraM5zPIF9zx582j1SL754FhBb4eyPNIeyGY9fXRmc%2BaLVDD%2F4KDBBjqkAave3m2wCAu1e5jKiH52P8AMzlS62K3UKj1ztUZ%2FhswcByOUEwfxFUZJFSN9eEVX%2FHJrjXPD5aUuqevv7u9mBF3R0InZXqeFRoXraEoc3lIU%2Bd%2FFilRV%2ByCBD%2Bd%2FEUuXlAa49yia56DUChVJZEtkqtPnt2OonZnZhI8Xl6ut3BYdjgEM%2FQXlSszLnwagbRkOZeANwJgMyCRs0YWD63OH947GO3eQ&X-Amz-Signature=0954bc0ca3833cd78bc7237913ad095eb0c7d5e9a696360d6295f9b99a1acaed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T473BEGB%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvtWWzGVJj7%2Fz%2Frhuom1jlRP%2FBPPAGQxkeY2InM8oengIhAJrqpjrRgIwda0FV0DwNiWw%2BefMHvp4K%2F1adGPHQJt0ZKv8DCFgQABoMNjM3NDIzMTgzODA1Igw377HH6%2FmIUmt0GW0q3AOLu4KHeipJxjlvgE2WvjecAJBSL5NrNvV9ByrA2EeYG4rUVpIcoWIS7nwBX1Z0wTMOtg5Hr%2BsMvOslor3VEZMUZTKEFPjnuGIY9v3BRmxy077T2n1SNVvxmJ4IzrR%2FOkRspZkDHzlGXNQ5gEkIG3xtPELkU2Lsv9Q9uosr%2B5W7XGkXm9nIzzrd4v9ssTFzY1BSh6W9nw0b12g0DBpOYIVkV9A%2Fg17DXW%2BuJuwMGrSilTBotYDVCabisbSopslvPd8c9G6TYP1hEcNQY32Eh00QYBbGlTVapt4PygET9FuRxR2BkPrnaz9aGta00%2BM6TUxc3gA0DTvozp14otHCoKb%2BWSBi6mFWAWREpCqaAEWOMqE%2Bi2GdE9SlJHgKAScW6zpJACkUlOMyyAPZpyqKIX3RVC%2FYhnHLC9p5rWOlOKk6eTmA6qHEngSRRcWeKF%2FvYFOjkF86Ymr2Qb6wTBSIWVk9XIlDuH%2BxAS6wMRZTNDyy4pldvQIzfTgKrx%2BHR9pYKYz1hZ%2FeS44M1o70J9mjUGo%2F3VtRADm2LXFYLApalw4q80RHgiLlE%2Fp0uhFggosdjgd5PgQx5x2BUzgSraM5zPIF9zx582j1SL754FhBb4eyPNIeyGY9fXRmc%2BaLVDD%2F4KDBBjqkAave3m2wCAu1e5jKiH52P8AMzlS62K3UKj1ztUZ%2FhswcByOUEwfxFUZJFSN9eEVX%2FHJrjXPD5aUuqevv7u9mBF3R0InZXqeFRoXraEoc3lIU%2Bd%2FFilRV%2ByCBD%2Bd%2FEUuXlAa49yia56DUChVJZEtkqtPnt2OonZnZhI8Xl6ut3BYdjgEM%2FQXlSszLnwagbRkOZeANwJgMyCRs0YWD63OH947GO3eQ&X-Amz-Signature=c1bf222d443fb0f2058db8a471f1806ecc1ad5db4e535f659eb04880721e995c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
