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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOFDTNP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwPMz2LhG4hH9zyEi%2BnjUuwSIahElOnysDO4FY4vr3AIgU8HlrIMMW5Sr5Z6znY%2BImadlsRcyCuExGQ53FLw36uUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC878YCX%2BrJx0uX7SrcAyniwhN%2BGb8VoBGnLD6xQU%2BuBzxBkw%2BXPX1orXvt4So8PHNEa3ZAhZrNaRWT9bjjkiaFyklhqDG1w4janVQsnBqepden5cOTEeplYAMoEgijZDhX7ZywmnOSeFY1n6bRqXlQ1WTYoZJv7khjelTpeSwR9%2FNDyx5bVWHCCgi745kbWzKsD1q%2FwAdekNh6S9fN%2Fsn8ERCe0IrEHcxtIojw3AwWGUCjxBIflKjQKIkHTQy8cIf8qQtE5ZMzjzMZCiCjK13GGOsvoimX0elMjvnkapYLC0HIS4dt9CJGbNgNVnV2FMsittCzpXGqtTsKeoB7XJo85EulRoSSY23G%2BN6NhiSFaVJbKPBQqglKKCe4tw6OGPZfkbA0uKWfctkJevDc4mD5mlDbfMC3LU0ZP%2Bh87ratIAQfrTMMq1Z%2FhcVicCv0vvV7eMi4UooGSCs8Vo1HjpQnrFuISzrqSLxbWKvCFgkLbDyNOsQ6LftHAOtFNzmR0rup0qYAugwDKwBbShakUTNK3D3rxKTadsRT273ET69%2FDw%2BBwhrolEgIAhyLd6GKJwP1JorhSypPVVmEY7rJox3PYK2xa%2FeK5qDSr4zf8G7TVqk1%2F2%2BqyDfW0B6ffYMuvxrKnLxAkdw%2Fia%2BDMMOe470GOqUBISpthMsketZyQncUPoDym%2B80h%2B%2FHXT%2B2oDUMRZqiPoovXEuPigezaDyOqBIhBv5nHtQUtIGSm2WDMpv8MDpge1d2HCgrftyJ4Tyq0Fyk87mQ4S%2Fuzc2N99que9758CXSPkc0bOLIcCWfRQTTyWGtsgsw%2BqNlilvKF9OBPuU1gFa%2Fx2fEXbrOd7ac3JOseeVNTlSrLZzrNUdbh2OSZaiBd1v%2BixjZ&X-Amz-Signature=885f2482b89825925b4d858e3236424fdf7d60fdcbd13905fd0a6e6745bc9958&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOFDTNP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwPMz2LhG4hH9zyEi%2BnjUuwSIahElOnysDO4FY4vr3AIgU8HlrIMMW5Sr5Z6znY%2BImadlsRcyCuExGQ53FLw36uUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC878YCX%2BrJx0uX7SrcAyniwhN%2BGb8VoBGnLD6xQU%2BuBzxBkw%2BXPX1orXvt4So8PHNEa3ZAhZrNaRWT9bjjkiaFyklhqDG1w4janVQsnBqepden5cOTEeplYAMoEgijZDhX7ZywmnOSeFY1n6bRqXlQ1WTYoZJv7khjelTpeSwR9%2FNDyx5bVWHCCgi745kbWzKsD1q%2FwAdekNh6S9fN%2Fsn8ERCe0IrEHcxtIojw3AwWGUCjxBIflKjQKIkHTQy8cIf8qQtE5ZMzjzMZCiCjK13GGOsvoimX0elMjvnkapYLC0HIS4dt9CJGbNgNVnV2FMsittCzpXGqtTsKeoB7XJo85EulRoSSY23G%2BN6NhiSFaVJbKPBQqglKKCe4tw6OGPZfkbA0uKWfctkJevDc4mD5mlDbfMC3LU0ZP%2Bh87ratIAQfrTMMq1Z%2FhcVicCv0vvV7eMi4UooGSCs8Vo1HjpQnrFuISzrqSLxbWKvCFgkLbDyNOsQ6LftHAOtFNzmR0rup0qYAugwDKwBbShakUTNK3D3rxKTadsRT273ET69%2FDw%2BBwhrolEgIAhyLd6GKJwP1JorhSypPVVmEY7rJox3PYK2xa%2FeK5qDSr4zf8G7TVqk1%2F2%2BqyDfW0B6ffYMuvxrKnLxAkdw%2Fia%2BDMMOe470GOqUBISpthMsketZyQncUPoDym%2B80h%2B%2FHXT%2B2oDUMRZqiPoovXEuPigezaDyOqBIhBv5nHtQUtIGSm2WDMpv8MDpge1d2HCgrftyJ4Tyq0Fyk87mQ4S%2Fuzc2N99que9758CXSPkc0bOLIcCWfRQTTyWGtsgsw%2BqNlilvKF9OBPuU1gFa%2Fx2fEXbrOd7ac3JOseeVNTlSrLZzrNUdbh2OSZaiBd1v%2BixjZ&X-Amz-Signature=5f1764bb8cdf32e21133e35a656cba8f0d8e6b175e9d29bcd08d1942ee9ddf95&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOFDTNP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwPMz2LhG4hH9zyEi%2BnjUuwSIahElOnysDO4FY4vr3AIgU8HlrIMMW5Sr5Z6znY%2BImadlsRcyCuExGQ53FLw36uUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC878YCX%2BrJx0uX7SrcAyniwhN%2BGb8VoBGnLD6xQU%2BuBzxBkw%2BXPX1orXvt4So8PHNEa3ZAhZrNaRWT9bjjkiaFyklhqDG1w4janVQsnBqepden5cOTEeplYAMoEgijZDhX7ZywmnOSeFY1n6bRqXlQ1WTYoZJv7khjelTpeSwR9%2FNDyx5bVWHCCgi745kbWzKsD1q%2FwAdekNh6S9fN%2Fsn8ERCe0IrEHcxtIojw3AwWGUCjxBIflKjQKIkHTQy8cIf8qQtE5ZMzjzMZCiCjK13GGOsvoimX0elMjvnkapYLC0HIS4dt9CJGbNgNVnV2FMsittCzpXGqtTsKeoB7XJo85EulRoSSY23G%2BN6NhiSFaVJbKPBQqglKKCe4tw6OGPZfkbA0uKWfctkJevDc4mD5mlDbfMC3LU0ZP%2Bh87ratIAQfrTMMq1Z%2FhcVicCv0vvV7eMi4UooGSCs8Vo1HjpQnrFuISzrqSLxbWKvCFgkLbDyNOsQ6LftHAOtFNzmR0rup0qYAugwDKwBbShakUTNK3D3rxKTadsRT273ET69%2FDw%2BBwhrolEgIAhyLd6GKJwP1JorhSypPVVmEY7rJox3PYK2xa%2FeK5qDSr4zf8G7TVqk1%2F2%2BqyDfW0B6ffYMuvxrKnLxAkdw%2Fia%2BDMMOe470GOqUBISpthMsketZyQncUPoDym%2B80h%2B%2FHXT%2B2oDUMRZqiPoovXEuPigezaDyOqBIhBv5nHtQUtIGSm2WDMpv8MDpge1d2HCgrftyJ4Tyq0Fyk87mQ4S%2Fuzc2N99que9758CXSPkc0bOLIcCWfRQTTyWGtsgsw%2BqNlilvKF9OBPuU1gFa%2Fx2fEXbrOd7ac3JOseeVNTlSrLZzrNUdbh2OSZaiBd1v%2BixjZ&X-Amz-Signature=33317b40a1e92dd21f64e32e37109c8244fa4bd2c5e7386e8d8f4d62a8e41230&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOFDTNP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwPMz2LhG4hH9zyEi%2BnjUuwSIahElOnysDO4FY4vr3AIgU8HlrIMMW5Sr5Z6znY%2BImadlsRcyCuExGQ53FLw36uUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC878YCX%2BrJx0uX7SrcAyniwhN%2BGb8VoBGnLD6xQU%2BuBzxBkw%2BXPX1orXvt4So8PHNEa3ZAhZrNaRWT9bjjkiaFyklhqDG1w4janVQsnBqepden5cOTEeplYAMoEgijZDhX7ZywmnOSeFY1n6bRqXlQ1WTYoZJv7khjelTpeSwR9%2FNDyx5bVWHCCgi745kbWzKsD1q%2FwAdekNh6S9fN%2Fsn8ERCe0IrEHcxtIojw3AwWGUCjxBIflKjQKIkHTQy8cIf8qQtE5ZMzjzMZCiCjK13GGOsvoimX0elMjvnkapYLC0HIS4dt9CJGbNgNVnV2FMsittCzpXGqtTsKeoB7XJo85EulRoSSY23G%2BN6NhiSFaVJbKPBQqglKKCe4tw6OGPZfkbA0uKWfctkJevDc4mD5mlDbfMC3LU0ZP%2Bh87ratIAQfrTMMq1Z%2FhcVicCv0vvV7eMi4UooGSCs8Vo1HjpQnrFuISzrqSLxbWKvCFgkLbDyNOsQ6LftHAOtFNzmR0rup0qYAugwDKwBbShakUTNK3D3rxKTadsRT273ET69%2FDw%2BBwhrolEgIAhyLd6GKJwP1JorhSypPVVmEY7rJox3PYK2xa%2FeK5qDSr4zf8G7TVqk1%2F2%2BqyDfW0B6ffYMuvxrKnLxAkdw%2Fia%2BDMMOe470GOqUBISpthMsketZyQncUPoDym%2B80h%2B%2FHXT%2B2oDUMRZqiPoovXEuPigezaDyOqBIhBv5nHtQUtIGSm2WDMpv8MDpge1d2HCgrftyJ4Tyq0Fyk87mQ4S%2Fuzc2N99que9758CXSPkc0bOLIcCWfRQTTyWGtsgsw%2BqNlilvKF9OBPuU1gFa%2Fx2fEXbrOd7ac3JOseeVNTlSrLZzrNUdbh2OSZaiBd1v%2BixjZ&X-Amz-Signature=c2372d81b36c105dc4b9197740f40a21b0b4b34fa3ba9d8707df0af953de6029&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOFDTNP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwPMz2LhG4hH9zyEi%2BnjUuwSIahElOnysDO4FY4vr3AIgU8HlrIMMW5Sr5Z6znY%2BImadlsRcyCuExGQ53FLw36uUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC878YCX%2BrJx0uX7SrcAyniwhN%2BGb8VoBGnLD6xQU%2BuBzxBkw%2BXPX1orXvt4So8PHNEa3ZAhZrNaRWT9bjjkiaFyklhqDG1w4janVQsnBqepden5cOTEeplYAMoEgijZDhX7ZywmnOSeFY1n6bRqXlQ1WTYoZJv7khjelTpeSwR9%2FNDyx5bVWHCCgi745kbWzKsD1q%2FwAdekNh6S9fN%2Fsn8ERCe0IrEHcxtIojw3AwWGUCjxBIflKjQKIkHTQy8cIf8qQtE5ZMzjzMZCiCjK13GGOsvoimX0elMjvnkapYLC0HIS4dt9CJGbNgNVnV2FMsittCzpXGqtTsKeoB7XJo85EulRoSSY23G%2BN6NhiSFaVJbKPBQqglKKCe4tw6OGPZfkbA0uKWfctkJevDc4mD5mlDbfMC3LU0ZP%2Bh87ratIAQfrTMMq1Z%2FhcVicCv0vvV7eMi4UooGSCs8Vo1HjpQnrFuISzrqSLxbWKvCFgkLbDyNOsQ6LftHAOtFNzmR0rup0qYAugwDKwBbShakUTNK3D3rxKTadsRT273ET69%2FDw%2BBwhrolEgIAhyLd6GKJwP1JorhSypPVVmEY7rJox3PYK2xa%2FeK5qDSr4zf8G7TVqk1%2F2%2BqyDfW0B6ffYMuvxrKnLxAkdw%2Fia%2BDMMOe470GOqUBISpthMsketZyQncUPoDym%2B80h%2B%2FHXT%2B2oDUMRZqiPoovXEuPigezaDyOqBIhBv5nHtQUtIGSm2WDMpv8MDpge1d2HCgrftyJ4Tyq0Fyk87mQ4S%2Fuzc2N99que9758CXSPkc0bOLIcCWfRQTTyWGtsgsw%2BqNlilvKF9OBPuU1gFa%2Fx2fEXbrOd7ac3JOseeVNTlSrLZzrNUdbh2OSZaiBd1v%2BixjZ&X-Amz-Signature=c2c3dc9c4bc8b970ec4d8e3f1796d4f7529d432b4ab1c34b344470d04e096390&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOFDTNP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwPMz2LhG4hH9zyEi%2BnjUuwSIahElOnysDO4FY4vr3AIgU8HlrIMMW5Sr5Z6znY%2BImadlsRcyCuExGQ53FLw36uUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC878YCX%2BrJx0uX7SrcAyniwhN%2BGb8VoBGnLD6xQU%2BuBzxBkw%2BXPX1orXvt4So8PHNEa3ZAhZrNaRWT9bjjkiaFyklhqDG1w4janVQsnBqepden5cOTEeplYAMoEgijZDhX7ZywmnOSeFY1n6bRqXlQ1WTYoZJv7khjelTpeSwR9%2FNDyx5bVWHCCgi745kbWzKsD1q%2FwAdekNh6S9fN%2Fsn8ERCe0IrEHcxtIojw3AwWGUCjxBIflKjQKIkHTQy8cIf8qQtE5ZMzjzMZCiCjK13GGOsvoimX0elMjvnkapYLC0HIS4dt9CJGbNgNVnV2FMsittCzpXGqtTsKeoB7XJo85EulRoSSY23G%2BN6NhiSFaVJbKPBQqglKKCe4tw6OGPZfkbA0uKWfctkJevDc4mD5mlDbfMC3LU0ZP%2Bh87ratIAQfrTMMq1Z%2FhcVicCv0vvV7eMi4UooGSCs8Vo1HjpQnrFuISzrqSLxbWKvCFgkLbDyNOsQ6LftHAOtFNzmR0rup0qYAugwDKwBbShakUTNK3D3rxKTadsRT273ET69%2FDw%2BBwhrolEgIAhyLd6GKJwP1JorhSypPVVmEY7rJox3PYK2xa%2FeK5qDSr4zf8G7TVqk1%2F2%2BqyDfW0B6ffYMuvxrKnLxAkdw%2Fia%2BDMMOe470GOqUBISpthMsketZyQncUPoDym%2B80h%2B%2FHXT%2B2oDUMRZqiPoovXEuPigezaDyOqBIhBv5nHtQUtIGSm2WDMpv8MDpge1d2HCgrftyJ4Tyq0Fyk87mQ4S%2Fuzc2N99que9758CXSPkc0bOLIcCWfRQTTyWGtsgsw%2BqNlilvKF9OBPuU1gFa%2Fx2fEXbrOd7ac3JOseeVNTlSrLZzrNUdbh2OSZaiBd1v%2BixjZ&X-Amz-Signature=57e02a991d638a58e3b384683708f124a03f568f85f75ed5d1f2a143d437bb27&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOFDTNP%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwPMz2LhG4hH9zyEi%2BnjUuwSIahElOnysDO4FY4vr3AIgU8HlrIMMW5Sr5Z6znY%2BImadlsRcyCuExGQ53FLw36uUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC878YCX%2BrJx0uX7SrcAyniwhN%2BGb8VoBGnLD6xQU%2BuBzxBkw%2BXPX1orXvt4So8PHNEa3ZAhZrNaRWT9bjjkiaFyklhqDG1w4janVQsnBqepden5cOTEeplYAMoEgijZDhX7ZywmnOSeFY1n6bRqXlQ1WTYoZJv7khjelTpeSwR9%2FNDyx5bVWHCCgi745kbWzKsD1q%2FwAdekNh6S9fN%2Fsn8ERCe0IrEHcxtIojw3AwWGUCjxBIflKjQKIkHTQy8cIf8qQtE5ZMzjzMZCiCjK13GGOsvoimX0elMjvnkapYLC0HIS4dt9CJGbNgNVnV2FMsittCzpXGqtTsKeoB7XJo85EulRoSSY23G%2BN6NhiSFaVJbKPBQqglKKCe4tw6OGPZfkbA0uKWfctkJevDc4mD5mlDbfMC3LU0ZP%2Bh87ratIAQfrTMMq1Z%2FhcVicCv0vvV7eMi4UooGSCs8Vo1HjpQnrFuISzrqSLxbWKvCFgkLbDyNOsQ6LftHAOtFNzmR0rup0qYAugwDKwBbShakUTNK3D3rxKTadsRT273ET69%2FDw%2BBwhrolEgIAhyLd6GKJwP1JorhSypPVVmEY7rJox3PYK2xa%2FeK5qDSr4zf8G7TVqk1%2F2%2BqyDfW0B6ffYMuvxrKnLxAkdw%2Fia%2BDMMOe470GOqUBISpthMsketZyQncUPoDym%2B80h%2B%2FHXT%2B2oDUMRZqiPoovXEuPigezaDyOqBIhBv5nHtQUtIGSm2WDMpv8MDpge1d2HCgrftyJ4Tyq0Fyk87mQ4S%2Fuzc2N99que9758CXSPkc0bOLIcCWfRQTTyWGtsgsw%2BqNlilvKF9OBPuU1gFa%2Fx2fEXbrOd7ac3JOseeVNTlSrLZzrNUdbh2OSZaiBd1v%2BixjZ&X-Amz-Signature=4d179e9e0932f9f631be462bc2db5787201d1deab53e487481393e9635ce73c1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
