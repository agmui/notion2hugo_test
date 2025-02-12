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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7TEYVY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqdqoIX%2FTiP5G0Uj0qKEX9xwO%2BmenBj0ASqW2LP28OtgIgEhhV7s%2BrnzsjTGnlvytcqkCW9BMwA3dajXVV3Nj2ANcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwXv2YOMMXw5Ry2rircA1ua9WWQTXFsi172zJYpm2cYy7MHCeEyz5JHWlS5FeW5dorNL7TV5HoYyfaFCnhnkNuIaWy4Jbp60V4u8fCM6tbpXkpOZRUZqEL4I6QCrUP3sOhBvI%2F5NiQkQH2ilSWZ%2B1G4ZTJ555tP%2B4jQN1YWQIaROMNZ2rpOy3dJo7lRMm5S6Kq9ixN8DJi2Pvsy4on4wrpNBPt6XkdOoD0rJdGDrFCWo6TYE6%2FRwktg538Ueij%2Bv%2BciTyU7AJ9sh6F4jdSacZ3iACv9SvvUyX%2Bpror1J%2Bs3XHBIbwf00MSyJf1vVZVkrSTRrax9LZM93iLRnwj20NMObx9kmdr1eQArukVml7m9dmEx9uVquG1f%2Buv0PYhYR7PJGOxvMIiS14V33%2BxSsS%2F%2BZBDiXD%2BzeeL72YyWZH6fYAE3KMJFrzop38LVhl5Ponc99PSNEdIMdComXLWlW9ERMtKbzcZsboWHuFXMBK%2BzmbMT3XBvOz6eM%2BfTubl9V%2BrJAQiC9agAmGk1VfAjcB5u77Rgc01%2BemzlX36M7p4p%2FkSmqNO8xxbyOOkJa1l67%2F4nfv4DIbz5AH0DeCXogb4aSTazxD9ROuZizGabbu%2FKF9siA%2FUBSDBK2DUFK3JLY4ygDdLt7S%2FWtS6oMJPrr70GOqUBnNGBGmlRohiYqJu%2FRUElX9YALMHM%2B2rxsrdrTSXI0UBK%2BuPRj8oiR27D226jFLZ5zljV6S2WnlO%2BT9CYFLhwUiVoAQsLttF8GAfJHbEvOdOYMnxQh8RGW6Ym9GCr4DUqMP1fx%2FXoF7734apWcRQ3ct7MlvDzAUIF9Hl9GUUbQol%2BeQYXDIJUetFqL13m7eOHVKEytsMzUvjC7TyfOcYxkJQijl5x&X-Amz-Signature=ea61ec7f4108d56e0b20f68242b879e69ce26233ab45c246df141521364ce0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7TEYVY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqdqoIX%2FTiP5G0Uj0qKEX9xwO%2BmenBj0ASqW2LP28OtgIgEhhV7s%2BrnzsjTGnlvytcqkCW9BMwA3dajXVV3Nj2ANcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwXv2YOMMXw5Ry2rircA1ua9WWQTXFsi172zJYpm2cYy7MHCeEyz5JHWlS5FeW5dorNL7TV5HoYyfaFCnhnkNuIaWy4Jbp60V4u8fCM6tbpXkpOZRUZqEL4I6QCrUP3sOhBvI%2F5NiQkQH2ilSWZ%2B1G4ZTJ555tP%2B4jQN1YWQIaROMNZ2rpOy3dJo7lRMm5S6Kq9ixN8DJi2Pvsy4on4wrpNBPt6XkdOoD0rJdGDrFCWo6TYE6%2FRwktg538Ueij%2Bv%2BciTyU7AJ9sh6F4jdSacZ3iACv9SvvUyX%2Bpror1J%2Bs3XHBIbwf00MSyJf1vVZVkrSTRrax9LZM93iLRnwj20NMObx9kmdr1eQArukVml7m9dmEx9uVquG1f%2Buv0PYhYR7PJGOxvMIiS14V33%2BxSsS%2F%2BZBDiXD%2BzeeL72YyWZH6fYAE3KMJFrzop38LVhl5Ponc99PSNEdIMdComXLWlW9ERMtKbzcZsboWHuFXMBK%2BzmbMT3XBvOz6eM%2BfTubl9V%2BrJAQiC9agAmGk1VfAjcB5u77Rgc01%2BemzlX36M7p4p%2FkSmqNO8xxbyOOkJa1l67%2F4nfv4DIbz5AH0DeCXogb4aSTazxD9ROuZizGabbu%2FKF9siA%2FUBSDBK2DUFK3JLY4ygDdLt7S%2FWtS6oMJPrr70GOqUBnNGBGmlRohiYqJu%2FRUElX9YALMHM%2B2rxsrdrTSXI0UBK%2BuPRj8oiR27D226jFLZ5zljV6S2WnlO%2BT9CYFLhwUiVoAQsLttF8GAfJHbEvOdOYMnxQh8RGW6Ym9GCr4DUqMP1fx%2FXoF7734apWcRQ3ct7MlvDzAUIF9Hl9GUUbQol%2BeQYXDIJUetFqL13m7eOHVKEytsMzUvjC7TyfOcYxkJQijl5x&X-Amz-Signature=07100acfe02a9777fec5e5ad15061c7c7b131c1a0feafc71b2e56ac363bf50a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7TEYVY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqdqoIX%2FTiP5G0Uj0qKEX9xwO%2BmenBj0ASqW2LP28OtgIgEhhV7s%2BrnzsjTGnlvytcqkCW9BMwA3dajXVV3Nj2ANcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwXv2YOMMXw5Ry2rircA1ua9WWQTXFsi172zJYpm2cYy7MHCeEyz5JHWlS5FeW5dorNL7TV5HoYyfaFCnhnkNuIaWy4Jbp60V4u8fCM6tbpXkpOZRUZqEL4I6QCrUP3sOhBvI%2F5NiQkQH2ilSWZ%2B1G4ZTJ555tP%2B4jQN1YWQIaROMNZ2rpOy3dJo7lRMm5S6Kq9ixN8DJi2Pvsy4on4wrpNBPt6XkdOoD0rJdGDrFCWo6TYE6%2FRwktg538Ueij%2Bv%2BciTyU7AJ9sh6F4jdSacZ3iACv9SvvUyX%2Bpror1J%2Bs3XHBIbwf00MSyJf1vVZVkrSTRrax9LZM93iLRnwj20NMObx9kmdr1eQArukVml7m9dmEx9uVquG1f%2Buv0PYhYR7PJGOxvMIiS14V33%2BxSsS%2F%2BZBDiXD%2BzeeL72YyWZH6fYAE3KMJFrzop38LVhl5Ponc99PSNEdIMdComXLWlW9ERMtKbzcZsboWHuFXMBK%2BzmbMT3XBvOz6eM%2BfTubl9V%2BrJAQiC9agAmGk1VfAjcB5u77Rgc01%2BemzlX36M7p4p%2FkSmqNO8xxbyOOkJa1l67%2F4nfv4DIbz5AH0DeCXogb4aSTazxD9ROuZizGabbu%2FKF9siA%2FUBSDBK2DUFK3JLY4ygDdLt7S%2FWtS6oMJPrr70GOqUBnNGBGmlRohiYqJu%2FRUElX9YALMHM%2B2rxsrdrTSXI0UBK%2BuPRj8oiR27D226jFLZ5zljV6S2WnlO%2BT9CYFLhwUiVoAQsLttF8GAfJHbEvOdOYMnxQh8RGW6Ym9GCr4DUqMP1fx%2FXoF7734apWcRQ3ct7MlvDzAUIF9Hl9GUUbQol%2BeQYXDIJUetFqL13m7eOHVKEytsMzUvjC7TyfOcYxkJQijl5x&X-Amz-Signature=152c1af6d87870f37f168146669ff2ebf8cd42ebf6819b341e5acf9227edef1f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7TEYVY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqdqoIX%2FTiP5G0Uj0qKEX9xwO%2BmenBj0ASqW2LP28OtgIgEhhV7s%2BrnzsjTGnlvytcqkCW9BMwA3dajXVV3Nj2ANcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwXv2YOMMXw5Ry2rircA1ua9WWQTXFsi172zJYpm2cYy7MHCeEyz5JHWlS5FeW5dorNL7TV5HoYyfaFCnhnkNuIaWy4Jbp60V4u8fCM6tbpXkpOZRUZqEL4I6QCrUP3sOhBvI%2F5NiQkQH2ilSWZ%2B1G4ZTJ555tP%2B4jQN1YWQIaROMNZ2rpOy3dJo7lRMm5S6Kq9ixN8DJi2Pvsy4on4wrpNBPt6XkdOoD0rJdGDrFCWo6TYE6%2FRwktg538Ueij%2Bv%2BciTyU7AJ9sh6F4jdSacZ3iACv9SvvUyX%2Bpror1J%2Bs3XHBIbwf00MSyJf1vVZVkrSTRrax9LZM93iLRnwj20NMObx9kmdr1eQArukVml7m9dmEx9uVquG1f%2Buv0PYhYR7PJGOxvMIiS14V33%2BxSsS%2F%2BZBDiXD%2BzeeL72YyWZH6fYAE3KMJFrzop38LVhl5Ponc99PSNEdIMdComXLWlW9ERMtKbzcZsboWHuFXMBK%2BzmbMT3XBvOz6eM%2BfTubl9V%2BrJAQiC9agAmGk1VfAjcB5u77Rgc01%2BemzlX36M7p4p%2FkSmqNO8xxbyOOkJa1l67%2F4nfv4DIbz5AH0DeCXogb4aSTazxD9ROuZizGabbu%2FKF9siA%2FUBSDBK2DUFK3JLY4ygDdLt7S%2FWtS6oMJPrr70GOqUBnNGBGmlRohiYqJu%2FRUElX9YALMHM%2B2rxsrdrTSXI0UBK%2BuPRj8oiR27D226jFLZ5zljV6S2WnlO%2BT9CYFLhwUiVoAQsLttF8GAfJHbEvOdOYMnxQh8RGW6Ym9GCr4DUqMP1fx%2FXoF7734apWcRQ3ct7MlvDzAUIF9Hl9GUUbQol%2BeQYXDIJUetFqL13m7eOHVKEytsMzUvjC7TyfOcYxkJQijl5x&X-Amz-Signature=1c842d51000dc3018ef04e85aa1a7094485fcb9afcbd6584ba882f6ce76a7e7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7TEYVY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqdqoIX%2FTiP5G0Uj0qKEX9xwO%2BmenBj0ASqW2LP28OtgIgEhhV7s%2BrnzsjTGnlvytcqkCW9BMwA3dajXVV3Nj2ANcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwXv2YOMMXw5Ry2rircA1ua9WWQTXFsi172zJYpm2cYy7MHCeEyz5JHWlS5FeW5dorNL7TV5HoYyfaFCnhnkNuIaWy4Jbp60V4u8fCM6tbpXkpOZRUZqEL4I6QCrUP3sOhBvI%2F5NiQkQH2ilSWZ%2B1G4ZTJ555tP%2B4jQN1YWQIaROMNZ2rpOy3dJo7lRMm5S6Kq9ixN8DJi2Pvsy4on4wrpNBPt6XkdOoD0rJdGDrFCWo6TYE6%2FRwktg538Ueij%2Bv%2BciTyU7AJ9sh6F4jdSacZ3iACv9SvvUyX%2Bpror1J%2Bs3XHBIbwf00MSyJf1vVZVkrSTRrax9LZM93iLRnwj20NMObx9kmdr1eQArukVml7m9dmEx9uVquG1f%2Buv0PYhYR7PJGOxvMIiS14V33%2BxSsS%2F%2BZBDiXD%2BzeeL72YyWZH6fYAE3KMJFrzop38LVhl5Ponc99PSNEdIMdComXLWlW9ERMtKbzcZsboWHuFXMBK%2BzmbMT3XBvOz6eM%2BfTubl9V%2BrJAQiC9agAmGk1VfAjcB5u77Rgc01%2BemzlX36M7p4p%2FkSmqNO8xxbyOOkJa1l67%2F4nfv4DIbz5AH0DeCXogb4aSTazxD9ROuZizGabbu%2FKF9siA%2FUBSDBK2DUFK3JLY4ygDdLt7S%2FWtS6oMJPrr70GOqUBnNGBGmlRohiYqJu%2FRUElX9YALMHM%2B2rxsrdrTSXI0UBK%2BuPRj8oiR27D226jFLZ5zljV6S2WnlO%2BT9CYFLhwUiVoAQsLttF8GAfJHbEvOdOYMnxQh8RGW6Ym9GCr4DUqMP1fx%2FXoF7734apWcRQ3ct7MlvDzAUIF9Hl9GUUbQol%2BeQYXDIJUetFqL13m7eOHVKEytsMzUvjC7TyfOcYxkJQijl5x&X-Amz-Signature=ac3a7611afc1b0bf936cab820382d70608a509f3159fdd2a6a5e2c16f8402a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7TEYVY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqdqoIX%2FTiP5G0Uj0qKEX9xwO%2BmenBj0ASqW2LP28OtgIgEhhV7s%2BrnzsjTGnlvytcqkCW9BMwA3dajXVV3Nj2ANcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwXv2YOMMXw5Ry2rircA1ua9WWQTXFsi172zJYpm2cYy7MHCeEyz5JHWlS5FeW5dorNL7TV5HoYyfaFCnhnkNuIaWy4Jbp60V4u8fCM6tbpXkpOZRUZqEL4I6QCrUP3sOhBvI%2F5NiQkQH2ilSWZ%2B1G4ZTJ555tP%2B4jQN1YWQIaROMNZ2rpOy3dJo7lRMm5S6Kq9ixN8DJi2Pvsy4on4wrpNBPt6XkdOoD0rJdGDrFCWo6TYE6%2FRwktg538Ueij%2Bv%2BciTyU7AJ9sh6F4jdSacZ3iACv9SvvUyX%2Bpror1J%2Bs3XHBIbwf00MSyJf1vVZVkrSTRrax9LZM93iLRnwj20NMObx9kmdr1eQArukVml7m9dmEx9uVquG1f%2Buv0PYhYR7PJGOxvMIiS14V33%2BxSsS%2F%2BZBDiXD%2BzeeL72YyWZH6fYAE3KMJFrzop38LVhl5Ponc99PSNEdIMdComXLWlW9ERMtKbzcZsboWHuFXMBK%2BzmbMT3XBvOz6eM%2BfTubl9V%2BrJAQiC9agAmGk1VfAjcB5u77Rgc01%2BemzlX36M7p4p%2FkSmqNO8xxbyOOkJa1l67%2F4nfv4DIbz5AH0DeCXogb4aSTazxD9ROuZizGabbu%2FKF9siA%2FUBSDBK2DUFK3JLY4ygDdLt7S%2FWtS6oMJPrr70GOqUBnNGBGmlRohiYqJu%2FRUElX9YALMHM%2B2rxsrdrTSXI0UBK%2BuPRj8oiR27D226jFLZ5zljV6S2WnlO%2BT9CYFLhwUiVoAQsLttF8GAfJHbEvOdOYMnxQh8RGW6Ym9GCr4DUqMP1fx%2FXoF7734apWcRQ3ct7MlvDzAUIF9Hl9GUUbQol%2BeQYXDIJUetFqL13m7eOHVKEytsMzUvjC7TyfOcYxkJQijl5x&X-Amz-Signature=0ff99bbdd396e8dd78bb24f67192509c340a8c3883d2881b41b230c81b0ff31b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7TEYVY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqdqoIX%2FTiP5G0Uj0qKEX9xwO%2BmenBj0ASqW2LP28OtgIgEhhV7s%2BrnzsjTGnlvytcqkCW9BMwA3dajXVV3Nj2ANcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwXv2YOMMXw5Ry2rircA1ua9WWQTXFsi172zJYpm2cYy7MHCeEyz5JHWlS5FeW5dorNL7TV5HoYyfaFCnhnkNuIaWy4Jbp60V4u8fCM6tbpXkpOZRUZqEL4I6QCrUP3sOhBvI%2F5NiQkQH2ilSWZ%2B1G4ZTJ555tP%2B4jQN1YWQIaROMNZ2rpOy3dJo7lRMm5S6Kq9ixN8DJi2Pvsy4on4wrpNBPt6XkdOoD0rJdGDrFCWo6TYE6%2FRwktg538Ueij%2Bv%2BciTyU7AJ9sh6F4jdSacZ3iACv9SvvUyX%2Bpror1J%2Bs3XHBIbwf00MSyJf1vVZVkrSTRrax9LZM93iLRnwj20NMObx9kmdr1eQArukVml7m9dmEx9uVquG1f%2Buv0PYhYR7PJGOxvMIiS14V33%2BxSsS%2F%2BZBDiXD%2BzeeL72YyWZH6fYAE3KMJFrzop38LVhl5Ponc99PSNEdIMdComXLWlW9ERMtKbzcZsboWHuFXMBK%2BzmbMT3XBvOz6eM%2BfTubl9V%2BrJAQiC9agAmGk1VfAjcB5u77Rgc01%2BemzlX36M7p4p%2FkSmqNO8xxbyOOkJa1l67%2F4nfv4DIbz5AH0DeCXogb4aSTazxD9ROuZizGabbu%2FKF9siA%2FUBSDBK2DUFK3JLY4ygDdLt7S%2FWtS6oMJPrr70GOqUBnNGBGmlRohiYqJu%2FRUElX9YALMHM%2B2rxsrdrTSXI0UBK%2BuPRj8oiR27D226jFLZ5zljV6S2WnlO%2BT9CYFLhwUiVoAQsLttF8GAfJHbEvOdOYMnxQh8RGW6Ym9GCr4DUqMP1fx%2FXoF7734apWcRQ3ct7MlvDzAUIF9Hl9GUUbQol%2BeQYXDIJUetFqL13m7eOHVKEytsMzUvjC7TyfOcYxkJQijl5x&X-Amz-Signature=7d6588b50bf3783de2e367ae7eccb2c76ed1a6c9390e87d56a962bfdb0fdadc9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
