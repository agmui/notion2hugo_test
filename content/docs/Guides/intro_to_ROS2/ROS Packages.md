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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BH3SIVP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcLpgCQaxtWhuLBKZDyx5GXAeIkg0rySoQwNiVQQrf1AiEA%2BtdkrkOBPJlttFfqzjWCqc8YUrfAedgFnFaECy%2FcnyIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAV2HYyhgoKaDncMPCrcAzkoMmbEAv9wlTAelYHXbxQS2GAs0mhnEyHEKVTaZTUX5R2bQczPSo639FQineSQyOzw1rK4u3NhkVrzObJr0xU1UNjJBdbJRTj%2BVO%2BJ2uQqrzlUBmaTZ759HSsS2YBfNelF3eiAAf2ek3coyVIludaNenui%2BXrwbNwxxzB9zkgOKGnJGp0R2lODm2EouCI%2B0UDtoNISpxT6b5PthJj9R6nC7intYcP6IfNmGFkf9N2ayb%2FKLlo4COD90SgtmunNZJ1J3Y5jMN91edTgfHH6QecegXrKmlOfeyzke2Wvlnye3yVh4Fsrr4%2B20ZJvn4b8igl2zsrELEUndWWDlu4RE8L%2FJgS7T%2BElHaicRtztmmFNad%2FmXy%2B8c0LpDfrJuBZTZxzGploEjIUNyIaIqOlPhd66nywR37Pe04LU6Mi4gyupXkW0V2pCuuU1Xp7kBn8AtxKywa7AadD0gcpEWoDNK8yAOZiWmYMEl%2FLGnyS2oB0VrhgmfMzsrIzf66t1Uze49VwBuXisJN%2Bdzb%2FtfRZllHSPm54cuUixFW3uV9pltE%2BxGJNEbYf7kcnegN2ekq%2FwM4lH3ZpyZjuPveWpbcyH7WWWk%2BcN8T1XqtfU5%2FJ8uw4ckJFeRgW3ZwDCyhFBMJeDzb8GOqUBRUtoEe%2FUnl5D3Uo8M35C8hJJWuwJ%2BKJ9nGL6%2FoboJhuQcFg%2Fa8obfbY3Fpay2ZfnD%2FPYnSG5YeaDta5DuuvysJiRwx4uhry5jqBeB0E1roj5aWn8Ztlr%2FX6x62cg5uhWkbTO2sg8kkH2e54z8CuI72cBWEllmtzac1uUeov4nmVJZyl81BQ4GuGIJFBpKjguUtKGYqoEv9gYAbYsN7cH%2ByarfbLQ&X-Amz-Signature=09897609a8fd94f086add2f816767c6882e670f608140c0cae17742837035454&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BH3SIVP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcLpgCQaxtWhuLBKZDyx5GXAeIkg0rySoQwNiVQQrf1AiEA%2BtdkrkOBPJlttFfqzjWCqc8YUrfAedgFnFaECy%2FcnyIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAV2HYyhgoKaDncMPCrcAzkoMmbEAv9wlTAelYHXbxQS2GAs0mhnEyHEKVTaZTUX5R2bQczPSo639FQineSQyOzw1rK4u3NhkVrzObJr0xU1UNjJBdbJRTj%2BVO%2BJ2uQqrzlUBmaTZ759HSsS2YBfNelF3eiAAf2ek3coyVIludaNenui%2BXrwbNwxxzB9zkgOKGnJGp0R2lODm2EouCI%2B0UDtoNISpxT6b5PthJj9R6nC7intYcP6IfNmGFkf9N2ayb%2FKLlo4COD90SgtmunNZJ1J3Y5jMN91edTgfHH6QecegXrKmlOfeyzke2Wvlnye3yVh4Fsrr4%2B20ZJvn4b8igl2zsrELEUndWWDlu4RE8L%2FJgS7T%2BElHaicRtztmmFNad%2FmXy%2B8c0LpDfrJuBZTZxzGploEjIUNyIaIqOlPhd66nywR37Pe04LU6Mi4gyupXkW0V2pCuuU1Xp7kBn8AtxKywa7AadD0gcpEWoDNK8yAOZiWmYMEl%2FLGnyS2oB0VrhgmfMzsrIzf66t1Uze49VwBuXisJN%2Bdzb%2FtfRZllHSPm54cuUixFW3uV9pltE%2BxGJNEbYf7kcnegN2ekq%2FwM4lH3ZpyZjuPveWpbcyH7WWWk%2BcN8T1XqtfU5%2FJ8uw4ckJFeRgW3ZwDCyhFBMJeDzb8GOqUBRUtoEe%2FUnl5D3Uo8M35C8hJJWuwJ%2BKJ9nGL6%2FoboJhuQcFg%2Fa8obfbY3Fpay2ZfnD%2FPYnSG5YeaDta5DuuvysJiRwx4uhry5jqBeB0E1roj5aWn8Ztlr%2FX6x62cg5uhWkbTO2sg8kkH2e54z8CuI72cBWEllmtzac1uUeov4nmVJZyl81BQ4GuGIJFBpKjguUtKGYqoEv9gYAbYsN7cH%2ByarfbLQ&X-Amz-Signature=284315fc860c9b95f0160ce01f37ef1de112d0de12445b54314ae6452c8baed2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BH3SIVP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcLpgCQaxtWhuLBKZDyx5GXAeIkg0rySoQwNiVQQrf1AiEA%2BtdkrkOBPJlttFfqzjWCqc8YUrfAedgFnFaECy%2FcnyIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAV2HYyhgoKaDncMPCrcAzkoMmbEAv9wlTAelYHXbxQS2GAs0mhnEyHEKVTaZTUX5R2bQczPSo639FQineSQyOzw1rK4u3NhkVrzObJr0xU1UNjJBdbJRTj%2BVO%2BJ2uQqrzlUBmaTZ759HSsS2YBfNelF3eiAAf2ek3coyVIludaNenui%2BXrwbNwxxzB9zkgOKGnJGp0R2lODm2EouCI%2B0UDtoNISpxT6b5PthJj9R6nC7intYcP6IfNmGFkf9N2ayb%2FKLlo4COD90SgtmunNZJ1J3Y5jMN91edTgfHH6QecegXrKmlOfeyzke2Wvlnye3yVh4Fsrr4%2B20ZJvn4b8igl2zsrELEUndWWDlu4RE8L%2FJgS7T%2BElHaicRtztmmFNad%2FmXy%2B8c0LpDfrJuBZTZxzGploEjIUNyIaIqOlPhd66nywR37Pe04LU6Mi4gyupXkW0V2pCuuU1Xp7kBn8AtxKywa7AadD0gcpEWoDNK8yAOZiWmYMEl%2FLGnyS2oB0VrhgmfMzsrIzf66t1Uze49VwBuXisJN%2Bdzb%2FtfRZllHSPm54cuUixFW3uV9pltE%2BxGJNEbYf7kcnegN2ekq%2FwM4lH3ZpyZjuPveWpbcyH7WWWk%2BcN8T1XqtfU5%2FJ8uw4ckJFeRgW3ZwDCyhFBMJeDzb8GOqUBRUtoEe%2FUnl5D3Uo8M35C8hJJWuwJ%2BKJ9nGL6%2FoboJhuQcFg%2Fa8obfbY3Fpay2ZfnD%2FPYnSG5YeaDta5DuuvysJiRwx4uhry5jqBeB0E1roj5aWn8Ztlr%2FX6x62cg5uhWkbTO2sg8kkH2e54z8CuI72cBWEllmtzac1uUeov4nmVJZyl81BQ4GuGIJFBpKjguUtKGYqoEv9gYAbYsN7cH%2ByarfbLQ&X-Amz-Signature=22708908b2bcd3c56ed2cb9f9d6b2b4009fd98197010bca8f9f01e4a02356c27&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BH3SIVP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcLpgCQaxtWhuLBKZDyx5GXAeIkg0rySoQwNiVQQrf1AiEA%2BtdkrkOBPJlttFfqzjWCqc8YUrfAedgFnFaECy%2FcnyIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAV2HYyhgoKaDncMPCrcAzkoMmbEAv9wlTAelYHXbxQS2GAs0mhnEyHEKVTaZTUX5R2bQczPSo639FQineSQyOzw1rK4u3NhkVrzObJr0xU1UNjJBdbJRTj%2BVO%2BJ2uQqrzlUBmaTZ759HSsS2YBfNelF3eiAAf2ek3coyVIludaNenui%2BXrwbNwxxzB9zkgOKGnJGp0R2lODm2EouCI%2B0UDtoNISpxT6b5PthJj9R6nC7intYcP6IfNmGFkf9N2ayb%2FKLlo4COD90SgtmunNZJ1J3Y5jMN91edTgfHH6QecegXrKmlOfeyzke2Wvlnye3yVh4Fsrr4%2B20ZJvn4b8igl2zsrELEUndWWDlu4RE8L%2FJgS7T%2BElHaicRtztmmFNad%2FmXy%2B8c0LpDfrJuBZTZxzGploEjIUNyIaIqOlPhd66nywR37Pe04LU6Mi4gyupXkW0V2pCuuU1Xp7kBn8AtxKywa7AadD0gcpEWoDNK8yAOZiWmYMEl%2FLGnyS2oB0VrhgmfMzsrIzf66t1Uze49VwBuXisJN%2Bdzb%2FtfRZllHSPm54cuUixFW3uV9pltE%2BxGJNEbYf7kcnegN2ekq%2FwM4lH3ZpyZjuPveWpbcyH7WWWk%2BcN8T1XqtfU5%2FJ8uw4ckJFeRgW3ZwDCyhFBMJeDzb8GOqUBRUtoEe%2FUnl5D3Uo8M35C8hJJWuwJ%2BKJ9nGL6%2FoboJhuQcFg%2Fa8obfbY3Fpay2ZfnD%2FPYnSG5YeaDta5DuuvysJiRwx4uhry5jqBeB0E1roj5aWn8Ztlr%2FX6x62cg5uhWkbTO2sg8kkH2e54z8CuI72cBWEllmtzac1uUeov4nmVJZyl81BQ4GuGIJFBpKjguUtKGYqoEv9gYAbYsN7cH%2ByarfbLQ&X-Amz-Signature=eb8b1578bbca2358e9c1dfd05a78cc61d6a86b32a24d6f3f62a25ad141452dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BH3SIVP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcLpgCQaxtWhuLBKZDyx5GXAeIkg0rySoQwNiVQQrf1AiEA%2BtdkrkOBPJlttFfqzjWCqc8YUrfAedgFnFaECy%2FcnyIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAV2HYyhgoKaDncMPCrcAzkoMmbEAv9wlTAelYHXbxQS2GAs0mhnEyHEKVTaZTUX5R2bQczPSo639FQineSQyOzw1rK4u3NhkVrzObJr0xU1UNjJBdbJRTj%2BVO%2BJ2uQqrzlUBmaTZ759HSsS2YBfNelF3eiAAf2ek3coyVIludaNenui%2BXrwbNwxxzB9zkgOKGnJGp0R2lODm2EouCI%2B0UDtoNISpxT6b5PthJj9R6nC7intYcP6IfNmGFkf9N2ayb%2FKLlo4COD90SgtmunNZJ1J3Y5jMN91edTgfHH6QecegXrKmlOfeyzke2Wvlnye3yVh4Fsrr4%2B20ZJvn4b8igl2zsrELEUndWWDlu4RE8L%2FJgS7T%2BElHaicRtztmmFNad%2FmXy%2B8c0LpDfrJuBZTZxzGploEjIUNyIaIqOlPhd66nywR37Pe04LU6Mi4gyupXkW0V2pCuuU1Xp7kBn8AtxKywa7AadD0gcpEWoDNK8yAOZiWmYMEl%2FLGnyS2oB0VrhgmfMzsrIzf66t1Uze49VwBuXisJN%2Bdzb%2FtfRZllHSPm54cuUixFW3uV9pltE%2BxGJNEbYf7kcnegN2ekq%2FwM4lH3ZpyZjuPveWpbcyH7WWWk%2BcN8T1XqtfU5%2FJ8uw4ckJFeRgW3ZwDCyhFBMJeDzb8GOqUBRUtoEe%2FUnl5D3Uo8M35C8hJJWuwJ%2BKJ9nGL6%2FoboJhuQcFg%2Fa8obfbY3Fpay2ZfnD%2FPYnSG5YeaDta5DuuvysJiRwx4uhry5jqBeB0E1roj5aWn8Ztlr%2FX6x62cg5uhWkbTO2sg8kkH2e54z8CuI72cBWEllmtzac1uUeov4nmVJZyl81BQ4GuGIJFBpKjguUtKGYqoEv9gYAbYsN7cH%2ByarfbLQ&X-Amz-Signature=d8e5e01d54cc8ce262c7cabcb4d52ad1a8e36b921138c155adf48081c7a8d635&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BH3SIVP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcLpgCQaxtWhuLBKZDyx5GXAeIkg0rySoQwNiVQQrf1AiEA%2BtdkrkOBPJlttFfqzjWCqc8YUrfAedgFnFaECy%2FcnyIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAV2HYyhgoKaDncMPCrcAzkoMmbEAv9wlTAelYHXbxQS2GAs0mhnEyHEKVTaZTUX5R2bQczPSo639FQineSQyOzw1rK4u3NhkVrzObJr0xU1UNjJBdbJRTj%2BVO%2BJ2uQqrzlUBmaTZ759HSsS2YBfNelF3eiAAf2ek3coyVIludaNenui%2BXrwbNwxxzB9zkgOKGnJGp0R2lODm2EouCI%2B0UDtoNISpxT6b5PthJj9R6nC7intYcP6IfNmGFkf9N2ayb%2FKLlo4COD90SgtmunNZJ1J3Y5jMN91edTgfHH6QecegXrKmlOfeyzke2Wvlnye3yVh4Fsrr4%2B20ZJvn4b8igl2zsrELEUndWWDlu4RE8L%2FJgS7T%2BElHaicRtztmmFNad%2FmXy%2B8c0LpDfrJuBZTZxzGploEjIUNyIaIqOlPhd66nywR37Pe04LU6Mi4gyupXkW0V2pCuuU1Xp7kBn8AtxKywa7AadD0gcpEWoDNK8yAOZiWmYMEl%2FLGnyS2oB0VrhgmfMzsrIzf66t1Uze49VwBuXisJN%2Bdzb%2FtfRZllHSPm54cuUixFW3uV9pltE%2BxGJNEbYf7kcnegN2ekq%2FwM4lH3ZpyZjuPveWpbcyH7WWWk%2BcN8T1XqtfU5%2FJ8uw4ckJFeRgW3ZwDCyhFBMJeDzb8GOqUBRUtoEe%2FUnl5D3Uo8M35C8hJJWuwJ%2BKJ9nGL6%2FoboJhuQcFg%2Fa8obfbY3Fpay2ZfnD%2FPYnSG5YeaDta5DuuvysJiRwx4uhry5jqBeB0E1roj5aWn8Ztlr%2FX6x62cg5uhWkbTO2sg8kkH2e54z8CuI72cBWEllmtzac1uUeov4nmVJZyl81BQ4GuGIJFBpKjguUtKGYqoEv9gYAbYsN7cH%2ByarfbLQ&X-Amz-Signature=bf647e2bdd32532b7bb77d08c8713e2b3affee1f27b51afa64562ddb4326d22b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BH3SIVP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcLpgCQaxtWhuLBKZDyx5GXAeIkg0rySoQwNiVQQrf1AiEA%2BtdkrkOBPJlttFfqzjWCqc8YUrfAedgFnFaECy%2FcnyIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAV2HYyhgoKaDncMPCrcAzkoMmbEAv9wlTAelYHXbxQS2GAs0mhnEyHEKVTaZTUX5R2bQczPSo639FQineSQyOzw1rK4u3NhkVrzObJr0xU1UNjJBdbJRTj%2BVO%2BJ2uQqrzlUBmaTZ759HSsS2YBfNelF3eiAAf2ek3coyVIludaNenui%2BXrwbNwxxzB9zkgOKGnJGp0R2lODm2EouCI%2B0UDtoNISpxT6b5PthJj9R6nC7intYcP6IfNmGFkf9N2ayb%2FKLlo4COD90SgtmunNZJ1J3Y5jMN91edTgfHH6QecegXrKmlOfeyzke2Wvlnye3yVh4Fsrr4%2B20ZJvn4b8igl2zsrELEUndWWDlu4RE8L%2FJgS7T%2BElHaicRtztmmFNad%2FmXy%2B8c0LpDfrJuBZTZxzGploEjIUNyIaIqOlPhd66nywR37Pe04LU6Mi4gyupXkW0V2pCuuU1Xp7kBn8AtxKywa7AadD0gcpEWoDNK8yAOZiWmYMEl%2FLGnyS2oB0VrhgmfMzsrIzf66t1Uze49VwBuXisJN%2Bdzb%2FtfRZllHSPm54cuUixFW3uV9pltE%2BxGJNEbYf7kcnegN2ekq%2FwM4lH3ZpyZjuPveWpbcyH7WWWk%2BcN8T1XqtfU5%2FJ8uw4ckJFeRgW3ZwDCyhFBMJeDzb8GOqUBRUtoEe%2FUnl5D3Uo8M35C8hJJWuwJ%2BKJ9nGL6%2FoboJhuQcFg%2Fa8obfbY3Fpay2ZfnD%2FPYnSG5YeaDta5DuuvysJiRwx4uhry5jqBeB0E1roj5aWn8Ztlr%2FX6x62cg5uhWkbTO2sg8kkH2e54z8CuI72cBWEllmtzac1uUeov4nmVJZyl81BQ4GuGIJFBpKjguUtKGYqoEv9gYAbYsN7cH%2ByarfbLQ&X-Amz-Signature=cd83b5e21954bd30ab764074a246adb3428f9dc21853c0ebda54dbe033bf109d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
