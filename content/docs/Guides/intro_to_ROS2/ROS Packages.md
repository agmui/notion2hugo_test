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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJ5KKUA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdMlDx4Cdggjdxynlm6ziIuE9H8ePGZJkxesBHv7zX%2FAiEAuof4sWncagxtC6nkCWgWFaIwBO58Tk0L1eRGhMgkpJgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKYEDKdbiTAIkJMHSrcA%2Bdyzir7QO3fACHwpvSVWDOChZFS53YywfUohMvYwWg%2FUrHE1hfu4EZXjC9kk8bBTWX%2FFYas4cvotzyKrNltLUNO7m57CzirpSyU4NyDIz0EqosYdtC8ziXZR3KsvyUUSA%2Bxyqh8aEu%2FzLeuAtAzLaz2JdprEghJmMQmWvPvkeRbnpEmKCsLeiCxwhneH3qOhuAB%2FYUqWJPyOBtoptJFZ%2B8FpSISmunBxVfLt%2Fp5u1LjSyWKo0BUnxlUZPQcsqOVV2Y8ioscVhLqOK4RGHnN%2B2D8FU4AknD4s4z2ScBA%2BZqqvx9BMWF%2FGM0fRzZFxug%2BvWJnDFGF0pnmjHCpQOgnWO3wlJv2yN0yJ3V13A34c4RZ30aSM55cHVY3JA4YyaO7UbXFg5Y8cJ3PzuED7RAjAvonxrPu8UQx1zft1Mg5xcAqv81YQqB%2Bq9aCY9Y2JgRHq0oG4k1y3qvh%2BA6OPx1Ea9wcAKG%2FvhikgbXFYMP3l6L5YcfbhSkFm3av9tw8rTi%2B%2FwL0VsZwDwbPkFnNDcAJHXnSGEgatAQNe2G7HgFk%2FnCtEOBIZ0R4fY8eDx0xySb8EZMS26P23%2BXOcF4WK7z5KNabGf5kURkwp%2FFQFY9hmgmDD9MjGsGTspbcVesjMICYs8EGOqUB0CT0wX2d952WmezuyfEZTaayS043itvHDR2deM1zm6ztQSkiWOOZuwV%2BAzgKK%2F2VUxuOtSzGDbPbc8gK0soDMc0L8XafixeNFhLokW5iZa83pok3soXtU5oMOt%2BP%2F4f8WICIKUPU0ZAJzvYo9NO32FUnIVudd%2BCOcb5fvH3YUbFJFOEZg9MC7%2B86sS%2FF1KwqyUZgMRAlgE5dYzUd5ZBnOyvFRwKg&X-Amz-Signature=8c7363bcf8a5587d3d4932dff1069848e1a1be9f62fdaf721b972760660916de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJ5KKUA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdMlDx4Cdggjdxynlm6ziIuE9H8ePGZJkxesBHv7zX%2FAiEAuof4sWncagxtC6nkCWgWFaIwBO58Tk0L1eRGhMgkpJgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKYEDKdbiTAIkJMHSrcA%2Bdyzir7QO3fACHwpvSVWDOChZFS53YywfUohMvYwWg%2FUrHE1hfu4EZXjC9kk8bBTWX%2FFYas4cvotzyKrNltLUNO7m57CzirpSyU4NyDIz0EqosYdtC8ziXZR3KsvyUUSA%2Bxyqh8aEu%2FzLeuAtAzLaz2JdprEghJmMQmWvPvkeRbnpEmKCsLeiCxwhneH3qOhuAB%2FYUqWJPyOBtoptJFZ%2B8FpSISmunBxVfLt%2Fp5u1LjSyWKo0BUnxlUZPQcsqOVV2Y8ioscVhLqOK4RGHnN%2B2D8FU4AknD4s4z2ScBA%2BZqqvx9BMWF%2FGM0fRzZFxug%2BvWJnDFGF0pnmjHCpQOgnWO3wlJv2yN0yJ3V13A34c4RZ30aSM55cHVY3JA4YyaO7UbXFg5Y8cJ3PzuED7RAjAvonxrPu8UQx1zft1Mg5xcAqv81YQqB%2Bq9aCY9Y2JgRHq0oG4k1y3qvh%2BA6OPx1Ea9wcAKG%2FvhikgbXFYMP3l6L5YcfbhSkFm3av9tw8rTi%2B%2FwL0VsZwDwbPkFnNDcAJHXnSGEgatAQNe2G7HgFk%2FnCtEOBIZ0R4fY8eDx0xySb8EZMS26P23%2BXOcF4WK7z5KNabGf5kURkwp%2FFQFY9hmgmDD9MjGsGTspbcVesjMICYs8EGOqUB0CT0wX2d952WmezuyfEZTaayS043itvHDR2deM1zm6ztQSkiWOOZuwV%2BAzgKK%2F2VUxuOtSzGDbPbc8gK0soDMc0L8XafixeNFhLokW5iZa83pok3soXtU5oMOt%2BP%2F4f8WICIKUPU0ZAJzvYo9NO32FUnIVudd%2BCOcb5fvH3YUbFJFOEZg9MC7%2B86sS%2FF1KwqyUZgMRAlgE5dYzUd5ZBnOyvFRwKg&X-Amz-Signature=54a0711571288409aa1bea03fe5393c21716678609b2dfe4ad9a1bcbb01abe5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJ5KKUA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdMlDx4Cdggjdxynlm6ziIuE9H8ePGZJkxesBHv7zX%2FAiEAuof4sWncagxtC6nkCWgWFaIwBO58Tk0L1eRGhMgkpJgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKYEDKdbiTAIkJMHSrcA%2Bdyzir7QO3fACHwpvSVWDOChZFS53YywfUohMvYwWg%2FUrHE1hfu4EZXjC9kk8bBTWX%2FFYas4cvotzyKrNltLUNO7m57CzirpSyU4NyDIz0EqosYdtC8ziXZR3KsvyUUSA%2Bxyqh8aEu%2FzLeuAtAzLaz2JdprEghJmMQmWvPvkeRbnpEmKCsLeiCxwhneH3qOhuAB%2FYUqWJPyOBtoptJFZ%2B8FpSISmunBxVfLt%2Fp5u1LjSyWKo0BUnxlUZPQcsqOVV2Y8ioscVhLqOK4RGHnN%2B2D8FU4AknD4s4z2ScBA%2BZqqvx9BMWF%2FGM0fRzZFxug%2BvWJnDFGF0pnmjHCpQOgnWO3wlJv2yN0yJ3V13A34c4RZ30aSM55cHVY3JA4YyaO7UbXFg5Y8cJ3PzuED7RAjAvonxrPu8UQx1zft1Mg5xcAqv81YQqB%2Bq9aCY9Y2JgRHq0oG4k1y3qvh%2BA6OPx1Ea9wcAKG%2FvhikgbXFYMP3l6L5YcfbhSkFm3av9tw8rTi%2B%2FwL0VsZwDwbPkFnNDcAJHXnSGEgatAQNe2G7HgFk%2FnCtEOBIZ0R4fY8eDx0xySb8EZMS26P23%2BXOcF4WK7z5KNabGf5kURkwp%2FFQFY9hmgmDD9MjGsGTspbcVesjMICYs8EGOqUB0CT0wX2d952WmezuyfEZTaayS043itvHDR2deM1zm6ztQSkiWOOZuwV%2BAzgKK%2F2VUxuOtSzGDbPbc8gK0soDMc0L8XafixeNFhLokW5iZa83pok3soXtU5oMOt%2BP%2F4f8WICIKUPU0ZAJzvYo9NO32FUnIVudd%2BCOcb5fvH3YUbFJFOEZg9MC7%2B86sS%2FF1KwqyUZgMRAlgE5dYzUd5ZBnOyvFRwKg&X-Amz-Signature=b8adb8bc3a389f94d41007f9a80850632cdda9cd8f798239457966c41736037d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJ5KKUA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdMlDx4Cdggjdxynlm6ziIuE9H8ePGZJkxesBHv7zX%2FAiEAuof4sWncagxtC6nkCWgWFaIwBO58Tk0L1eRGhMgkpJgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKYEDKdbiTAIkJMHSrcA%2Bdyzir7QO3fACHwpvSVWDOChZFS53YywfUohMvYwWg%2FUrHE1hfu4EZXjC9kk8bBTWX%2FFYas4cvotzyKrNltLUNO7m57CzirpSyU4NyDIz0EqosYdtC8ziXZR3KsvyUUSA%2Bxyqh8aEu%2FzLeuAtAzLaz2JdprEghJmMQmWvPvkeRbnpEmKCsLeiCxwhneH3qOhuAB%2FYUqWJPyOBtoptJFZ%2B8FpSISmunBxVfLt%2Fp5u1LjSyWKo0BUnxlUZPQcsqOVV2Y8ioscVhLqOK4RGHnN%2B2D8FU4AknD4s4z2ScBA%2BZqqvx9BMWF%2FGM0fRzZFxug%2BvWJnDFGF0pnmjHCpQOgnWO3wlJv2yN0yJ3V13A34c4RZ30aSM55cHVY3JA4YyaO7UbXFg5Y8cJ3PzuED7RAjAvonxrPu8UQx1zft1Mg5xcAqv81YQqB%2Bq9aCY9Y2JgRHq0oG4k1y3qvh%2BA6OPx1Ea9wcAKG%2FvhikgbXFYMP3l6L5YcfbhSkFm3av9tw8rTi%2B%2FwL0VsZwDwbPkFnNDcAJHXnSGEgatAQNe2G7HgFk%2FnCtEOBIZ0R4fY8eDx0xySb8EZMS26P23%2BXOcF4WK7z5KNabGf5kURkwp%2FFQFY9hmgmDD9MjGsGTspbcVesjMICYs8EGOqUB0CT0wX2d952WmezuyfEZTaayS043itvHDR2deM1zm6ztQSkiWOOZuwV%2BAzgKK%2F2VUxuOtSzGDbPbc8gK0soDMc0L8XafixeNFhLokW5iZa83pok3soXtU5oMOt%2BP%2F4f8WICIKUPU0ZAJzvYo9NO32FUnIVudd%2BCOcb5fvH3YUbFJFOEZg9MC7%2B86sS%2FF1KwqyUZgMRAlgE5dYzUd5ZBnOyvFRwKg&X-Amz-Signature=39b793763cf34759f31949b21d87d254439d18f6bcf78ee91e3580229fea4574&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJ5KKUA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdMlDx4Cdggjdxynlm6ziIuE9H8ePGZJkxesBHv7zX%2FAiEAuof4sWncagxtC6nkCWgWFaIwBO58Tk0L1eRGhMgkpJgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKYEDKdbiTAIkJMHSrcA%2Bdyzir7QO3fACHwpvSVWDOChZFS53YywfUohMvYwWg%2FUrHE1hfu4EZXjC9kk8bBTWX%2FFYas4cvotzyKrNltLUNO7m57CzirpSyU4NyDIz0EqosYdtC8ziXZR3KsvyUUSA%2Bxyqh8aEu%2FzLeuAtAzLaz2JdprEghJmMQmWvPvkeRbnpEmKCsLeiCxwhneH3qOhuAB%2FYUqWJPyOBtoptJFZ%2B8FpSISmunBxVfLt%2Fp5u1LjSyWKo0BUnxlUZPQcsqOVV2Y8ioscVhLqOK4RGHnN%2B2D8FU4AknD4s4z2ScBA%2BZqqvx9BMWF%2FGM0fRzZFxug%2BvWJnDFGF0pnmjHCpQOgnWO3wlJv2yN0yJ3V13A34c4RZ30aSM55cHVY3JA4YyaO7UbXFg5Y8cJ3PzuED7RAjAvonxrPu8UQx1zft1Mg5xcAqv81YQqB%2Bq9aCY9Y2JgRHq0oG4k1y3qvh%2BA6OPx1Ea9wcAKG%2FvhikgbXFYMP3l6L5YcfbhSkFm3av9tw8rTi%2B%2FwL0VsZwDwbPkFnNDcAJHXnSGEgatAQNe2G7HgFk%2FnCtEOBIZ0R4fY8eDx0xySb8EZMS26P23%2BXOcF4WK7z5KNabGf5kURkwp%2FFQFY9hmgmDD9MjGsGTspbcVesjMICYs8EGOqUB0CT0wX2d952WmezuyfEZTaayS043itvHDR2deM1zm6ztQSkiWOOZuwV%2BAzgKK%2F2VUxuOtSzGDbPbc8gK0soDMc0L8XafixeNFhLokW5iZa83pok3soXtU5oMOt%2BP%2F4f8WICIKUPU0ZAJzvYo9NO32FUnIVudd%2BCOcb5fvH3YUbFJFOEZg9MC7%2B86sS%2FF1KwqyUZgMRAlgE5dYzUd5ZBnOyvFRwKg&X-Amz-Signature=ed9ad0296907cdd900afd7d7262de0642c2f5a7eff1047b51fb5f5785443e531&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJ5KKUA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdMlDx4Cdggjdxynlm6ziIuE9H8ePGZJkxesBHv7zX%2FAiEAuof4sWncagxtC6nkCWgWFaIwBO58Tk0L1eRGhMgkpJgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKYEDKdbiTAIkJMHSrcA%2Bdyzir7QO3fACHwpvSVWDOChZFS53YywfUohMvYwWg%2FUrHE1hfu4EZXjC9kk8bBTWX%2FFYas4cvotzyKrNltLUNO7m57CzirpSyU4NyDIz0EqosYdtC8ziXZR3KsvyUUSA%2Bxyqh8aEu%2FzLeuAtAzLaz2JdprEghJmMQmWvPvkeRbnpEmKCsLeiCxwhneH3qOhuAB%2FYUqWJPyOBtoptJFZ%2B8FpSISmunBxVfLt%2Fp5u1LjSyWKo0BUnxlUZPQcsqOVV2Y8ioscVhLqOK4RGHnN%2B2D8FU4AknD4s4z2ScBA%2BZqqvx9BMWF%2FGM0fRzZFxug%2BvWJnDFGF0pnmjHCpQOgnWO3wlJv2yN0yJ3V13A34c4RZ30aSM55cHVY3JA4YyaO7UbXFg5Y8cJ3PzuED7RAjAvonxrPu8UQx1zft1Mg5xcAqv81YQqB%2Bq9aCY9Y2JgRHq0oG4k1y3qvh%2BA6OPx1Ea9wcAKG%2FvhikgbXFYMP3l6L5YcfbhSkFm3av9tw8rTi%2B%2FwL0VsZwDwbPkFnNDcAJHXnSGEgatAQNe2G7HgFk%2FnCtEOBIZ0R4fY8eDx0xySb8EZMS26P23%2BXOcF4WK7z5KNabGf5kURkwp%2FFQFY9hmgmDD9MjGsGTspbcVesjMICYs8EGOqUB0CT0wX2d952WmezuyfEZTaayS043itvHDR2deM1zm6ztQSkiWOOZuwV%2BAzgKK%2F2VUxuOtSzGDbPbc8gK0soDMc0L8XafixeNFhLokW5iZa83pok3soXtU5oMOt%2BP%2F4f8WICIKUPU0ZAJzvYo9NO32FUnIVudd%2BCOcb5fvH3YUbFJFOEZg9MC7%2B86sS%2FF1KwqyUZgMRAlgE5dYzUd5ZBnOyvFRwKg&X-Amz-Signature=20baf27dad160d45b1243246e73ed6779a1cc53d47babf99768849f86556d3e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJ5KKUA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdMlDx4Cdggjdxynlm6ziIuE9H8ePGZJkxesBHv7zX%2FAiEAuof4sWncagxtC6nkCWgWFaIwBO58Tk0L1eRGhMgkpJgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKYEDKdbiTAIkJMHSrcA%2Bdyzir7QO3fACHwpvSVWDOChZFS53YywfUohMvYwWg%2FUrHE1hfu4EZXjC9kk8bBTWX%2FFYas4cvotzyKrNltLUNO7m57CzirpSyU4NyDIz0EqosYdtC8ziXZR3KsvyUUSA%2Bxyqh8aEu%2FzLeuAtAzLaz2JdprEghJmMQmWvPvkeRbnpEmKCsLeiCxwhneH3qOhuAB%2FYUqWJPyOBtoptJFZ%2B8FpSISmunBxVfLt%2Fp5u1LjSyWKo0BUnxlUZPQcsqOVV2Y8ioscVhLqOK4RGHnN%2B2D8FU4AknD4s4z2ScBA%2BZqqvx9BMWF%2FGM0fRzZFxug%2BvWJnDFGF0pnmjHCpQOgnWO3wlJv2yN0yJ3V13A34c4RZ30aSM55cHVY3JA4YyaO7UbXFg5Y8cJ3PzuED7RAjAvonxrPu8UQx1zft1Mg5xcAqv81YQqB%2Bq9aCY9Y2JgRHq0oG4k1y3qvh%2BA6OPx1Ea9wcAKG%2FvhikgbXFYMP3l6L5YcfbhSkFm3av9tw8rTi%2B%2FwL0VsZwDwbPkFnNDcAJHXnSGEgatAQNe2G7HgFk%2FnCtEOBIZ0R4fY8eDx0xySb8EZMS26P23%2BXOcF4WK7z5KNabGf5kURkwp%2FFQFY9hmgmDD9MjGsGTspbcVesjMICYs8EGOqUB0CT0wX2d952WmezuyfEZTaayS043itvHDR2deM1zm6ztQSkiWOOZuwV%2BAzgKK%2F2VUxuOtSzGDbPbc8gK0soDMc0L8XafixeNFhLokW5iZa83pok3soXtU5oMOt%2BP%2F4f8WICIKUPU0ZAJzvYo9NO32FUnIVudd%2BCOcb5fvH3YUbFJFOEZg9MC7%2B86sS%2FF1KwqyUZgMRAlgE5dYzUd5ZBnOyvFRwKg&X-Amz-Signature=281c04e97e6a57291ffaf2814ee93a449815d9b63c459457ca9a3d6db94c39e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
