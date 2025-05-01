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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUUTZUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGXcNwQTFU4G%2FNYmBiZeu%2BbQgj3utm3%2FLn5x%2Bb%2FPmPMvAiA3WPEwG36lrAFtHwVOVEUjCkaicuHbT2CRXw6TbmP%2BLCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZrJVJjQK88sHS5RKtwDCcdIdnd7y7OSW1ncprmaRVmVEw6ZEP38cxfT%2FL7aGM5CAFPFBVSwJuDJsb1Qw7nomfFSuAdVZ27HJ0a4p4vZ5heFcWY4VgEMOQOSyQLggOPOsKnvK5xAuk9l5jL1Vgx90PCuONj5CXfRmn6uuWBuXIi0GmFitYJ%2B6CahLpLSssPsrHmPe4Eg1fqKflHlb%2FtdMChAJrhorABFynOe2m67cJUum%2BrqxTztrwPJtXX5XAMdovyo0RXq3vQgnPvNqVLN5vXlsSXbfmzRCLiBThf323gWfQltv93T9ynvFh%2BbQqGNW9lAZuTKCxVaQQfAECF5Zwwj2unVcD9O8jlG4IeNEaTPboB0hbdNmstyvrtvIwO4l7V%2B%2BiwxCraBqIEyGxH3NMcVF6pJrmgIPO%2FFehVrWcY0C7QtI7%2BWgEYmXWsRbYRB80GrUR7USvYesadna%2BH2OpPljm3CMFcyBVqUDQY9WSBhdyFqhVYsJQYHjl4AVQz8D6M2UTg4brw36p9dASfbWrCpYfcqklUIUhV0vnIJ90bmS5NAVAD%2BPoIBABFapVgk%2BEibi%2BNKhdrDCYSfMHu%2FesqxJi46OyxEEYt9sv8g63f7cNcDmrI0k0QX1kT3SoQW9y7RtBg50H%2F6ILcw8sjNwAY6pgG3baanduQJiBVpKzrfcJ9vw10XHdVA2LBP0k1njlP6zAi8azIa3KkayvwyM9CLeRgCmg41crfKdueG5uSDtxalE0ac%2FpCTRR%2F1o%2FADfhsgsSyfBEwEjy3iCvLYioT4YD31TYuG3yXxPt869Sb2NVblhltlySIFVZfEkw9fXi%2F8feTccoD8tOZZg9pfxXsxBnFmz%2BjC2%2BKw%2Bh4oIslTdkpW0cWeEg6K&X-Amz-Signature=ffe0e80677db7164a4482ffd61f53d87dc3f3411bb076c8235eb3b82041faca0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUUTZUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGXcNwQTFU4G%2FNYmBiZeu%2BbQgj3utm3%2FLn5x%2Bb%2FPmPMvAiA3WPEwG36lrAFtHwVOVEUjCkaicuHbT2CRXw6TbmP%2BLCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZrJVJjQK88sHS5RKtwDCcdIdnd7y7OSW1ncprmaRVmVEw6ZEP38cxfT%2FL7aGM5CAFPFBVSwJuDJsb1Qw7nomfFSuAdVZ27HJ0a4p4vZ5heFcWY4VgEMOQOSyQLggOPOsKnvK5xAuk9l5jL1Vgx90PCuONj5CXfRmn6uuWBuXIi0GmFitYJ%2B6CahLpLSssPsrHmPe4Eg1fqKflHlb%2FtdMChAJrhorABFynOe2m67cJUum%2BrqxTztrwPJtXX5XAMdovyo0RXq3vQgnPvNqVLN5vXlsSXbfmzRCLiBThf323gWfQltv93T9ynvFh%2BbQqGNW9lAZuTKCxVaQQfAECF5Zwwj2unVcD9O8jlG4IeNEaTPboB0hbdNmstyvrtvIwO4l7V%2B%2BiwxCraBqIEyGxH3NMcVF6pJrmgIPO%2FFehVrWcY0C7QtI7%2BWgEYmXWsRbYRB80GrUR7USvYesadna%2BH2OpPljm3CMFcyBVqUDQY9WSBhdyFqhVYsJQYHjl4AVQz8D6M2UTg4brw36p9dASfbWrCpYfcqklUIUhV0vnIJ90bmS5NAVAD%2BPoIBABFapVgk%2BEibi%2BNKhdrDCYSfMHu%2FesqxJi46OyxEEYt9sv8g63f7cNcDmrI0k0QX1kT3SoQW9y7RtBg50H%2F6ILcw8sjNwAY6pgG3baanduQJiBVpKzrfcJ9vw10XHdVA2LBP0k1njlP6zAi8azIa3KkayvwyM9CLeRgCmg41crfKdueG5uSDtxalE0ac%2FpCTRR%2F1o%2FADfhsgsSyfBEwEjy3iCvLYioT4YD31TYuG3yXxPt869Sb2NVblhltlySIFVZfEkw9fXi%2F8feTccoD8tOZZg9pfxXsxBnFmz%2BjC2%2BKw%2Bh4oIslTdkpW0cWeEg6K&X-Amz-Signature=4e08a780db4be3e02a2d2f62563ba2ea6b8c429c68717ace705499c90939c1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUUTZUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGXcNwQTFU4G%2FNYmBiZeu%2BbQgj3utm3%2FLn5x%2Bb%2FPmPMvAiA3WPEwG36lrAFtHwVOVEUjCkaicuHbT2CRXw6TbmP%2BLCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZrJVJjQK88sHS5RKtwDCcdIdnd7y7OSW1ncprmaRVmVEw6ZEP38cxfT%2FL7aGM5CAFPFBVSwJuDJsb1Qw7nomfFSuAdVZ27HJ0a4p4vZ5heFcWY4VgEMOQOSyQLggOPOsKnvK5xAuk9l5jL1Vgx90PCuONj5CXfRmn6uuWBuXIi0GmFitYJ%2B6CahLpLSssPsrHmPe4Eg1fqKflHlb%2FtdMChAJrhorABFynOe2m67cJUum%2BrqxTztrwPJtXX5XAMdovyo0RXq3vQgnPvNqVLN5vXlsSXbfmzRCLiBThf323gWfQltv93T9ynvFh%2BbQqGNW9lAZuTKCxVaQQfAECF5Zwwj2unVcD9O8jlG4IeNEaTPboB0hbdNmstyvrtvIwO4l7V%2B%2BiwxCraBqIEyGxH3NMcVF6pJrmgIPO%2FFehVrWcY0C7QtI7%2BWgEYmXWsRbYRB80GrUR7USvYesadna%2BH2OpPljm3CMFcyBVqUDQY9WSBhdyFqhVYsJQYHjl4AVQz8D6M2UTg4brw36p9dASfbWrCpYfcqklUIUhV0vnIJ90bmS5NAVAD%2BPoIBABFapVgk%2BEibi%2BNKhdrDCYSfMHu%2FesqxJi46OyxEEYt9sv8g63f7cNcDmrI0k0QX1kT3SoQW9y7RtBg50H%2F6ILcw8sjNwAY6pgG3baanduQJiBVpKzrfcJ9vw10XHdVA2LBP0k1njlP6zAi8azIa3KkayvwyM9CLeRgCmg41crfKdueG5uSDtxalE0ac%2FpCTRR%2F1o%2FADfhsgsSyfBEwEjy3iCvLYioT4YD31TYuG3yXxPt869Sb2NVblhltlySIFVZfEkw9fXi%2F8feTccoD8tOZZg9pfxXsxBnFmz%2BjC2%2BKw%2Bh4oIslTdkpW0cWeEg6K&X-Amz-Signature=4e0c6e2480b7565f2460943d8dfb18f5ea788ce3b349b1ea1f87e2ca36cd4c49&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUUTZUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGXcNwQTFU4G%2FNYmBiZeu%2BbQgj3utm3%2FLn5x%2Bb%2FPmPMvAiA3WPEwG36lrAFtHwVOVEUjCkaicuHbT2CRXw6TbmP%2BLCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZrJVJjQK88sHS5RKtwDCcdIdnd7y7OSW1ncprmaRVmVEw6ZEP38cxfT%2FL7aGM5CAFPFBVSwJuDJsb1Qw7nomfFSuAdVZ27HJ0a4p4vZ5heFcWY4VgEMOQOSyQLggOPOsKnvK5xAuk9l5jL1Vgx90PCuONj5CXfRmn6uuWBuXIi0GmFitYJ%2B6CahLpLSssPsrHmPe4Eg1fqKflHlb%2FtdMChAJrhorABFynOe2m67cJUum%2BrqxTztrwPJtXX5XAMdovyo0RXq3vQgnPvNqVLN5vXlsSXbfmzRCLiBThf323gWfQltv93T9ynvFh%2BbQqGNW9lAZuTKCxVaQQfAECF5Zwwj2unVcD9O8jlG4IeNEaTPboB0hbdNmstyvrtvIwO4l7V%2B%2BiwxCraBqIEyGxH3NMcVF6pJrmgIPO%2FFehVrWcY0C7QtI7%2BWgEYmXWsRbYRB80GrUR7USvYesadna%2BH2OpPljm3CMFcyBVqUDQY9WSBhdyFqhVYsJQYHjl4AVQz8D6M2UTg4brw36p9dASfbWrCpYfcqklUIUhV0vnIJ90bmS5NAVAD%2BPoIBABFapVgk%2BEibi%2BNKhdrDCYSfMHu%2FesqxJi46OyxEEYt9sv8g63f7cNcDmrI0k0QX1kT3SoQW9y7RtBg50H%2F6ILcw8sjNwAY6pgG3baanduQJiBVpKzrfcJ9vw10XHdVA2LBP0k1njlP6zAi8azIa3KkayvwyM9CLeRgCmg41crfKdueG5uSDtxalE0ac%2FpCTRR%2F1o%2FADfhsgsSyfBEwEjy3iCvLYioT4YD31TYuG3yXxPt869Sb2NVblhltlySIFVZfEkw9fXi%2F8feTccoD8tOZZg9pfxXsxBnFmz%2BjC2%2BKw%2Bh4oIslTdkpW0cWeEg6K&X-Amz-Signature=135d0cfc696464dfa5fb12d913bd022830b69fc4d4e8a5739d47c460683e98b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUUTZUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGXcNwQTFU4G%2FNYmBiZeu%2BbQgj3utm3%2FLn5x%2Bb%2FPmPMvAiA3WPEwG36lrAFtHwVOVEUjCkaicuHbT2CRXw6TbmP%2BLCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZrJVJjQK88sHS5RKtwDCcdIdnd7y7OSW1ncprmaRVmVEw6ZEP38cxfT%2FL7aGM5CAFPFBVSwJuDJsb1Qw7nomfFSuAdVZ27HJ0a4p4vZ5heFcWY4VgEMOQOSyQLggOPOsKnvK5xAuk9l5jL1Vgx90PCuONj5CXfRmn6uuWBuXIi0GmFitYJ%2B6CahLpLSssPsrHmPe4Eg1fqKflHlb%2FtdMChAJrhorABFynOe2m67cJUum%2BrqxTztrwPJtXX5XAMdovyo0RXq3vQgnPvNqVLN5vXlsSXbfmzRCLiBThf323gWfQltv93T9ynvFh%2BbQqGNW9lAZuTKCxVaQQfAECF5Zwwj2unVcD9O8jlG4IeNEaTPboB0hbdNmstyvrtvIwO4l7V%2B%2BiwxCraBqIEyGxH3NMcVF6pJrmgIPO%2FFehVrWcY0C7QtI7%2BWgEYmXWsRbYRB80GrUR7USvYesadna%2BH2OpPljm3CMFcyBVqUDQY9WSBhdyFqhVYsJQYHjl4AVQz8D6M2UTg4brw36p9dASfbWrCpYfcqklUIUhV0vnIJ90bmS5NAVAD%2BPoIBABFapVgk%2BEibi%2BNKhdrDCYSfMHu%2FesqxJi46OyxEEYt9sv8g63f7cNcDmrI0k0QX1kT3SoQW9y7RtBg50H%2F6ILcw8sjNwAY6pgG3baanduQJiBVpKzrfcJ9vw10XHdVA2LBP0k1njlP6zAi8azIa3KkayvwyM9CLeRgCmg41crfKdueG5uSDtxalE0ac%2FpCTRR%2F1o%2FADfhsgsSyfBEwEjy3iCvLYioT4YD31TYuG3yXxPt869Sb2NVblhltlySIFVZfEkw9fXi%2F8feTccoD8tOZZg9pfxXsxBnFmz%2BjC2%2BKw%2Bh4oIslTdkpW0cWeEg6K&X-Amz-Signature=d50b9f49613c243f8360e448b845278477c804b10ba4bd34be86bb56f069451e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUUTZUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGXcNwQTFU4G%2FNYmBiZeu%2BbQgj3utm3%2FLn5x%2Bb%2FPmPMvAiA3WPEwG36lrAFtHwVOVEUjCkaicuHbT2CRXw6TbmP%2BLCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZrJVJjQK88sHS5RKtwDCcdIdnd7y7OSW1ncprmaRVmVEw6ZEP38cxfT%2FL7aGM5CAFPFBVSwJuDJsb1Qw7nomfFSuAdVZ27HJ0a4p4vZ5heFcWY4VgEMOQOSyQLggOPOsKnvK5xAuk9l5jL1Vgx90PCuONj5CXfRmn6uuWBuXIi0GmFitYJ%2B6CahLpLSssPsrHmPe4Eg1fqKflHlb%2FtdMChAJrhorABFynOe2m67cJUum%2BrqxTztrwPJtXX5XAMdovyo0RXq3vQgnPvNqVLN5vXlsSXbfmzRCLiBThf323gWfQltv93T9ynvFh%2BbQqGNW9lAZuTKCxVaQQfAECF5Zwwj2unVcD9O8jlG4IeNEaTPboB0hbdNmstyvrtvIwO4l7V%2B%2BiwxCraBqIEyGxH3NMcVF6pJrmgIPO%2FFehVrWcY0C7QtI7%2BWgEYmXWsRbYRB80GrUR7USvYesadna%2BH2OpPljm3CMFcyBVqUDQY9WSBhdyFqhVYsJQYHjl4AVQz8D6M2UTg4brw36p9dASfbWrCpYfcqklUIUhV0vnIJ90bmS5NAVAD%2BPoIBABFapVgk%2BEibi%2BNKhdrDCYSfMHu%2FesqxJi46OyxEEYt9sv8g63f7cNcDmrI0k0QX1kT3SoQW9y7RtBg50H%2F6ILcw8sjNwAY6pgG3baanduQJiBVpKzrfcJ9vw10XHdVA2LBP0k1njlP6zAi8azIa3KkayvwyM9CLeRgCmg41crfKdueG5uSDtxalE0ac%2FpCTRR%2F1o%2FADfhsgsSyfBEwEjy3iCvLYioT4YD31TYuG3yXxPt869Sb2NVblhltlySIFVZfEkw9fXi%2F8feTccoD8tOZZg9pfxXsxBnFmz%2BjC2%2BKw%2Bh4oIslTdkpW0cWeEg6K&X-Amz-Signature=fffdd7729a4c55c921a63ba7e2d8449246a6523eff85aada9bf8fbc36aa37c54&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIUUTZUJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGXcNwQTFU4G%2FNYmBiZeu%2BbQgj3utm3%2FLn5x%2Bb%2FPmPMvAiA3WPEwG36lrAFtHwVOVEUjCkaicuHbT2CRXw6TbmP%2BLCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZrJVJjQK88sHS5RKtwDCcdIdnd7y7OSW1ncprmaRVmVEw6ZEP38cxfT%2FL7aGM5CAFPFBVSwJuDJsb1Qw7nomfFSuAdVZ27HJ0a4p4vZ5heFcWY4VgEMOQOSyQLggOPOsKnvK5xAuk9l5jL1Vgx90PCuONj5CXfRmn6uuWBuXIi0GmFitYJ%2B6CahLpLSssPsrHmPe4Eg1fqKflHlb%2FtdMChAJrhorABFynOe2m67cJUum%2BrqxTztrwPJtXX5XAMdovyo0RXq3vQgnPvNqVLN5vXlsSXbfmzRCLiBThf323gWfQltv93T9ynvFh%2BbQqGNW9lAZuTKCxVaQQfAECF5Zwwj2unVcD9O8jlG4IeNEaTPboB0hbdNmstyvrtvIwO4l7V%2B%2BiwxCraBqIEyGxH3NMcVF6pJrmgIPO%2FFehVrWcY0C7QtI7%2BWgEYmXWsRbYRB80GrUR7USvYesadna%2BH2OpPljm3CMFcyBVqUDQY9WSBhdyFqhVYsJQYHjl4AVQz8D6M2UTg4brw36p9dASfbWrCpYfcqklUIUhV0vnIJ90bmS5NAVAD%2BPoIBABFapVgk%2BEibi%2BNKhdrDCYSfMHu%2FesqxJi46OyxEEYt9sv8g63f7cNcDmrI0k0QX1kT3SoQW9y7RtBg50H%2F6ILcw8sjNwAY6pgG3baanduQJiBVpKzrfcJ9vw10XHdVA2LBP0k1njlP6zAi8azIa3KkayvwyM9CLeRgCmg41crfKdueG5uSDtxalE0ac%2FpCTRR%2F1o%2FADfhsgsSyfBEwEjy3iCvLYioT4YD31TYuG3yXxPt869Sb2NVblhltlySIFVZfEkw9fXi%2F8feTccoD8tOZZg9pfxXsxBnFmz%2BjC2%2BKw%2Bh4oIslTdkpW0cWeEg6K&X-Amz-Signature=483a216330dcf918cb49d75ad42612284b6a95358ec4f394f8d79cf88fdb70f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
