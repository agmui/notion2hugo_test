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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCJFVRG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDZyMIAU0XCO8C7o94u4Mqn3JmBXDq1frpJWqm3pWybdwIgXslby9YwCGxG1z%2BrNaU0Yzj9ip7MU%2BBbtBNc4T5VCC8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvCJMchN5%2B6fNj7yyrcAxPtLshXy9j9xRFNM%2FlaE5U780j0ZTCV2d%2BanvAXp5jdz2gDke7fMA5wfYPVsiI%2BBpFiHjY8bHOnTuLioAr1AFQ2gUAFs%2FQBOvAYZzs0tAhp7s01t7pDN6Eri%2BjGb2I8Tc7nX3rNnc8%2FtcqKFpx0TGiuDQ223gg9czFGG8zJL3W2U8h17F%2FdSllNDGNrCLXdna6USYXDG0TPtPru8RbxX1Vyhbzg%2BzqJ6pyNqhm9lY8EHdUknhVadiMlmlheOxMJoNBlr6YXPr8vK8B0OGaUntQSoFW4vgRxxmlLefNDSxoKp6KhFvXbX4ry73g4m66Xzq20KxLzmVluqrvMS5U0vmMDhXRnRkTn8Mq44auBOqtVVVm5Yp%2BWk%2BkiCsKF%2B5rJDLQJbd3%2BF4NS7GJpe2QE1CtWHgSXvu1L8W7BqzTpc%2F9PjJwf2Jdk0vemBONv6m2LwEBL0POlAmcvsZMkXsMyAdf3N3FAMYkNv1tkaIxFHPHwvKrPKNKXMstPeI6tg3pA0LNaJLdqniRf3ebov3fy1vm06KUL8S%2BWK6OlR%2BGEJkt%2FbysiOJIUaXEwUK4BPaU3lzLboh99BU7m0Qv%2B2ops3EHw39BQnwo8Dm8bPfKvunlVRDAP7PnWoK8M2hYpMPyPrMIGOqUB9CUKOd4AWE3riWq2TwaS6Xa7kbyx6a31E1L1eGF%2FPV7czQQRd8QA1okXQRiTeHZ82rbRgs9dmhfV8Khw9WAyq673Wa0sfaEi9qLSHSJB5m4R5lMzQsXdmzusyEv5KXAx8QRNM3WTCvClDQAlwgbp%2BvcjV3Z68hQQ17QOUI9x7mxxhjMTi6q%2F6cMVfAYXHYfXUZJxbuzceYlw1FeQrs9dohHgINjv&X-Amz-Signature=8c2428fbb0910bc22c97eeaaffd1eacd4dc7d3b362731d3260f335f75b678b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCJFVRG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDZyMIAU0XCO8C7o94u4Mqn3JmBXDq1frpJWqm3pWybdwIgXslby9YwCGxG1z%2BrNaU0Yzj9ip7MU%2BBbtBNc4T5VCC8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvCJMchN5%2B6fNj7yyrcAxPtLshXy9j9xRFNM%2FlaE5U780j0ZTCV2d%2BanvAXp5jdz2gDke7fMA5wfYPVsiI%2BBpFiHjY8bHOnTuLioAr1AFQ2gUAFs%2FQBOvAYZzs0tAhp7s01t7pDN6Eri%2BjGb2I8Tc7nX3rNnc8%2FtcqKFpx0TGiuDQ223gg9czFGG8zJL3W2U8h17F%2FdSllNDGNrCLXdna6USYXDG0TPtPru8RbxX1Vyhbzg%2BzqJ6pyNqhm9lY8EHdUknhVadiMlmlheOxMJoNBlr6YXPr8vK8B0OGaUntQSoFW4vgRxxmlLefNDSxoKp6KhFvXbX4ry73g4m66Xzq20KxLzmVluqrvMS5U0vmMDhXRnRkTn8Mq44auBOqtVVVm5Yp%2BWk%2BkiCsKF%2B5rJDLQJbd3%2BF4NS7GJpe2QE1CtWHgSXvu1L8W7BqzTpc%2F9PjJwf2Jdk0vemBONv6m2LwEBL0POlAmcvsZMkXsMyAdf3N3FAMYkNv1tkaIxFHPHwvKrPKNKXMstPeI6tg3pA0LNaJLdqniRf3ebov3fy1vm06KUL8S%2BWK6OlR%2BGEJkt%2FbysiOJIUaXEwUK4BPaU3lzLboh99BU7m0Qv%2B2ops3EHw39BQnwo8Dm8bPfKvunlVRDAP7PnWoK8M2hYpMPyPrMIGOqUB9CUKOd4AWE3riWq2TwaS6Xa7kbyx6a31E1L1eGF%2FPV7czQQRd8QA1okXQRiTeHZ82rbRgs9dmhfV8Khw9WAyq673Wa0sfaEi9qLSHSJB5m4R5lMzQsXdmzusyEv5KXAx8QRNM3WTCvClDQAlwgbp%2BvcjV3Z68hQQ17QOUI9x7mxxhjMTi6q%2F6cMVfAYXHYfXUZJxbuzceYlw1FeQrs9dohHgINjv&X-Amz-Signature=24ede0c892201c2721657506400d1c2c790c4bf68a8692b04a31b5e0bff67b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCJFVRG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDZyMIAU0XCO8C7o94u4Mqn3JmBXDq1frpJWqm3pWybdwIgXslby9YwCGxG1z%2BrNaU0Yzj9ip7MU%2BBbtBNc4T5VCC8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvCJMchN5%2B6fNj7yyrcAxPtLshXy9j9xRFNM%2FlaE5U780j0ZTCV2d%2BanvAXp5jdz2gDke7fMA5wfYPVsiI%2BBpFiHjY8bHOnTuLioAr1AFQ2gUAFs%2FQBOvAYZzs0tAhp7s01t7pDN6Eri%2BjGb2I8Tc7nX3rNnc8%2FtcqKFpx0TGiuDQ223gg9czFGG8zJL3W2U8h17F%2FdSllNDGNrCLXdna6USYXDG0TPtPru8RbxX1Vyhbzg%2BzqJ6pyNqhm9lY8EHdUknhVadiMlmlheOxMJoNBlr6YXPr8vK8B0OGaUntQSoFW4vgRxxmlLefNDSxoKp6KhFvXbX4ry73g4m66Xzq20KxLzmVluqrvMS5U0vmMDhXRnRkTn8Mq44auBOqtVVVm5Yp%2BWk%2BkiCsKF%2B5rJDLQJbd3%2BF4NS7GJpe2QE1CtWHgSXvu1L8W7BqzTpc%2F9PjJwf2Jdk0vemBONv6m2LwEBL0POlAmcvsZMkXsMyAdf3N3FAMYkNv1tkaIxFHPHwvKrPKNKXMstPeI6tg3pA0LNaJLdqniRf3ebov3fy1vm06KUL8S%2BWK6OlR%2BGEJkt%2FbysiOJIUaXEwUK4BPaU3lzLboh99BU7m0Qv%2B2ops3EHw39BQnwo8Dm8bPfKvunlVRDAP7PnWoK8M2hYpMPyPrMIGOqUB9CUKOd4AWE3riWq2TwaS6Xa7kbyx6a31E1L1eGF%2FPV7czQQRd8QA1okXQRiTeHZ82rbRgs9dmhfV8Khw9WAyq673Wa0sfaEi9qLSHSJB5m4R5lMzQsXdmzusyEv5KXAx8QRNM3WTCvClDQAlwgbp%2BvcjV3Z68hQQ17QOUI9x7mxxhjMTi6q%2F6cMVfAYXHYfXUZJxbuzceYlw1FeQrs9dohHgINjv&X-Amz-Signature=f183ee64bba55d1c467c29f4d07255e638c088d532356b6c9f1d20cbae17adf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCJFVRG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDZyMIAU0XCO8C7o94u4Mqn3JmBXDq1frpJWqm3pWybdwIgXslby9YwCGxG1z%2BrNaU0Yzj9ip7MU%2BBbtBNc4T5VCC8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvCJMchN5%2B6fNj7yyrcAxPtLshXy9j9xRFNM%2FlaE5U780j0ZTCV2d%2BanvAXp5jdz2gDke7fMA5wfYPVsiI%2BBpFiHjY8bHOnTuLioAr1AFQ2gUAFs%2FQBOvAYZzs0tAhp7s01t7pDN6Eri%2BjGb2I8Tc7nX3rNnc8%2FtcqKFpx0TGiuDQ223gg9czFGG8zJL3W2U8h17F%2FdSllNDGNrCLXdna6USYXDG0TPtPru8RbxX1Vyhbzg%2BzqJ6pyNqhm9lY8EHdUknhVadiMlmlheOxMJoNBlr6YXPr8vK8B0OGaUntQSoFW4vgRxxmlLefNDSxoKp6KhFvXbX4ry73g4m66Xzq20KxLzmVluqrvMS5U0vmMDhXRnRkTn8Mq44auBOqtVVVm5Yp%2BWk%2BkiCsKF%2B5rJDLQJbd3%2BF4NS7GJpe2QE1CtWHgSXvu1L8W7BqzTpc%2F9PjJwf2Jdk0vemBONv6m2LwEBL0POlAmcvsZMkXsMyAdf3N3FAMYkNv1tkaIxFHPHwvKrPKNKXMstPeI6tg3pA0LNaJLdqniRf3ebov3fy1vm06KUL8S%2BWK6OlR%2BGEJkt%2FbysiOJIUaXEwUK4BPaU3lzLboh99BU7m0Qv%2B2ops3EHw39BQnwo8Dm8bPfKvunlVRDAP7PnWoK8M2hYpMPyPrMIGOqUB9CUKOd4AWE3riWq2TwaS6Xa7kbyx6a31E1L1eGF%2FPV7czQQRd8QA1okXQRiTeHZ82rbRgs9dmhfV8Khw9WAyq673Wa0sfaEi9qLSHSJB5m4R5lMzQsXdmzusyEv5KXAx8QRNM3WTCvClDQAlwgbp%2BvcjV3Z68hQQ17QOUI9x7mxxhjMTi6q%2F6cMVfAYXHYfXUZJxbuzceYlw1FeQrs9dohHgINjv&X-Amz-Signature=dc0f7956588c2ab95ff6311679ac44fd1e39a827502ef7736f64fff3910687a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCJFVRG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDZyMIAU0XCO8C7o94u4Mqn3JmBXDq1frpJWqm3pWybdwIgXslby9YwCGxG1z%2BrNaU0Yzj9ip7MU%2BBbtBNc4T5VCC8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvCJMchN5%2B6fNj7yyrcAxPtLshXy9j9xRFNM%2FlaE5U780j0ZTCV2d%2BanvAXp5jdz2gDke7fMA5wfYPVsiI%2BBpFiHjY8bHOnTuLioAr1AFQ2gUAFs%2FQBOvAYZzs0tAhp7s01t7pDN6Eri%2BjGb2I8Tc7nX3rNnc8%2FtcqKFpx0TGiuDQ223gg9czFGG8zJL3W2U8h17F%2FdSllNDGNrCLXdna6USYXDG0TPtPru8RbxX1Vyhbzg%2BzqJ6pyNqhm9lY8EHdUknhVadiMlmlheOxMJoNBlr6YXPr8vK8B0OGaUntQSoFW4vgRxxmlLefNDSxoKp6KhFvXbX4ry73g4m66Xzq20KxLzmVluqrvMS5U0vmMDhXRnRkTn8Mq44auBOqtVVVm5Yp%2BWk%2BkiCsKF%2B5rJDLQJbd3%2BF4NS7GJpe2QE1CtWHgSXvu1L8W7BqzTpc%2F9PjJwf2Jdk0vemBONv6m2LwEBL0POlAmcvsZMkXsMyAdf3N3FAMYkNv1tkaIxFHPHwvKrPKNKXMstPeI6tg3pA0LNaJLdqniRf3ebov3fy1vm06KUL8S%2BWK6OlR%2BGEJkt%2FbysiOJIUaXEwUK4BPaU3lzLboh99BU7m0Qv%2B2ops3EHw39BQnwo8Dm8bPfKvunlVRDAP7PnWoK8M2hYpMPyPrMIGOqUB9CUKOd4AWE3riWq2TwaS6Xa7kbyx6a31E1L1eGF%2FPV7czQQRd8QA1okXQRiTeHZ82rbRgs9dmhfV8Khw9WAyq673Wa0sfaEi9qLSHSJB5m4R5lMzQsXdmzusyEv5KXAx8QRNM3WTCvClDQAlwgbp%2BvcjV3Z68hQQ17QOUI9x7mxxhjMTi6q%2F6cMVfAYXHYfXUZJxbuzceYlw1FeQrs9dohHgINjv&X-Amz-Signature=97c643c1dab0ca963b132bc429f80ed8fc2634c78429ab0c302322cf85735c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCJFVRG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDZyMIAU0XCO8C7o94u4Mqn3JmBXDq1frpJWqm3pWybdwIgXslby9YwCGxG1z%2BrNaU0Yzj9ip7MU%2BBbtBNc4T5VCC8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvCJMchN5%2B6fNj7yyrcAxPtLshXy9j9xRFNM%2FlaE5U780j0ZTCV2d%2BanvAXp5jdz2gDke7fMA5wfYPVsiI%2BBpFiHjY8bHOnTuLioAr1AFQ2gUAFs%2FQBOvAYZzs0tAhp7s01t7pDN6Eri%2BjGb2I8Tc7nX3rNnc8%2FtcqKFpx0TGiuDQ223gg9czFGG8zJL3W2U8h17F%2FdSllNDGNrCLXdna6USYXDG0TPtPru8RbxX1Vyhbzg%2BzqJ6pyNqhm9lY8EHdUknhVadiMlmlheOxMJoNBlr6YXPr8vK8B0OGaUntQSoFW4vgRxxmlLefNDSxoKp6KhFvXbX4ry73g4m66Xzq20KxLzmVluqrvMS5U0vmMDhXRnRkTn8Mq44auBOqtVVVm5Yp%2BWk%2BkiCsKF%2B5rJDLQJbd3%2BF4NS7GJpe2QE1CtWHgSXvu1L8W7BqzTpc%2F9PjJwf2Jdk0vemBONv6m2LwEBL0POlAmcvsZMkXsMyAdf3N3FAMYkNv1tkaIxFHPHwvKrPKNKXMstPeI6tg3pA0LNaJLdqniRf3ebov3fy1vm06KUL8S%2BWK6OlR%2BGEJkt%2FbysiOJIUaXEwUK4BPaU3lzLboh99BU7m0Qv%2B2ops3EHw39BQnwo8Dm8bPfKvunlVRDAP7PnWoK8M2hYpMPyPrMIGOqUB9CUKOd4AWE3riWq2TwaS6Xa7kbyx6a31E1L1eGF%2FPV7czQQRd8QA1okXQRiTeHZ82rbRgs9dmhfV8Khw9WAyq673Wa0sfaEi9qLSHSJB5m4R5lMzQsXdmzusyEv5KXAx8QRNM3WTCvClDQAlwgbp%2BvcjV3Z68hQQ17QOUI9x7mxxhjMTi6q%2F6cMVfAYXHYfXUZJxbuzceYlw1FeQrs9dohHgINjv&X-Amz-Signature=1be97a14f4558db86520c1b985aae379cd6260277ea2e9e711a617006ab6c372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCJFVRG%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDZyMIAU0XCO8C7o94u4Mqn3JmBXDq1frpJWqm3pWybdwIgXslby9YwCGxG1z%2BrNaU0Yzj9ip7MU%2BBbtBNc4T5VCC8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvCJMchN5%2B6fNj7yyrcAxPtLshXy9j9xRFNM%2FlaE5U780j0ZTCV2d%2BanvAXp5jdz2gDke7fMA5wfYPVsiI%2BBpFiHjY8bHOnTuLioAr1AFQ2gUAFs%2FQBOvAYZzs0tAhp7s01t7pDN6Eri%2BjGb2I8Tc7nX3rNnc8%2FtcqKFpx0TGiuDQ223gg9czFGG8zJL3W2U8h17F%2FdSllNDGNrCLXdna6USYXDG0TPtPru8RbxX1Vyhbzg%2BzqJ6pyNqhm9lY8EHdUknhVadiMlmlheOxMJoNBlr6YXPr8vK8B0OGaUntQSoFW4vgRxxmlLefNDSxoKp6KhFvXbX4ry73g4m66Xzq20KxLzmVluqrvMS5U0vmMDhXRnRkTn8Mq44auBOqtVVVm5Yp%2BWk%2BkiCsKF%2B5rJDLQJbd3%2BF4NS7GJpe2QE1CtWHgSXvu1L8W7BqzTpc%2F9PjJwf2Jdk0vemBONv6m2LwEBL0POlAmcvsZMkXsMyAdf3N3FAMYkNv1tkaIxFHPHwvKrPKNKXMstPeI6tg3pA0LNaJLdqniRf3ebov3fy1vm06KUL8S%2BWK6OlR%2BGEJkt%2FbysiOJIUaXEwUK4BPaU3lzLboh99BU7m0Qv%2B2ops3EHw39BQnwo8Dm8bPfKvunlVRDAP7PnWoK8M2hYpMPyPrMIGOqUB9CUKOd4AWE3riWq2TwaS6Xa7kbyx6a31E1L1eGF%2FPV7czQQRd8QA1okXQRiTeHZ82rbRgs9dmhfV8Khw9WAyq673Wa0sfaEi9qLSHSJB5m4R5lMzQsXdmzusyEv5KXAx8QRNM3WTCvClDQAlwgbp%2BvcjV3Z68hQQ17QOUI9x7mxxhjMTi6q%2F6cMVfAYXHYfXUZJxbuzceYlw1FeQrs9dohHgINjv&X-Amz-Signature=93bbbd3cdae0a1b4c3139c3e2b57f3f3bfa89ea93f9580bfc33c935a87fa4947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
