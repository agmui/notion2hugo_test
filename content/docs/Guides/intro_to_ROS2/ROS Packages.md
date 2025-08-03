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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=194b77586fe53330cbb04002cb56f59698611160a0900b1a8423d6f25d3a46ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=87a4ecfc311681d8284f945cc040d68831e8416013a9f6828341f84c7efe4466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=92c844075ab3d4959c9f01cd2fb77e2f9d4783eaf6381b6ab15a82de461d6c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=d53a004a45213f6658d29e262076f0474eb26eb4e861682ac13c294f31f858f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=c5fc948e7d1c6281af65909683964d3bc072a6627984aa4de5f11b6bec8881f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=42d6b60d5d78fafb307b3dc2f1056f5f924d73295cfd25d82a2e50297ec81016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWYLTUI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8poGjA5X5z5mJB5N2GPM0FXdrPsrqDzzJ%2Bj3tUeAoPAIhAL0HBF%2FjH%2BHdJtauh91%2FwuVnxRgXTuEOja7fB%2F2v4NC4Kv8DCCoQABoMNjM3NDIzMTgzODA1Igw7JITtIZTd4HeDDtcq3AM1emrRcITKIQAn4e3cODHmQ3NTUpbZFfOMz%2FK0bJM9cO46JcDhs4WOByN2Bbw%2BHVHEovqs39A8ACXpNXiEzjtunO04jMbLta9ktq5GcwRiPBqSILjNCQrnFsh1ln3vDyoaud%2Bvie9rIQUeSY6cHz%2FRuiJcjCKV81R4Czfgk7q%2FMnpOnS5hp1%2F921ibsOfleBWPkWLbSic410bxpjQpvlIMcKt%2B4kf%2FuUUZ0AqvCfWmFNo6wChfKBhwSveZ3pT5jkpiTzDBahWACgX6KWk2HtoAMPdJ%2BuPs7oxnyIu9KXZx%2B2Kr0v5BYn98lBXQA9pmetj48PMwD0FAFv30p%2BvIhKCp2gmSp9eSILBm0V6%2Fc6CZOnQWKltMpo7wRet68hYDbpJbwIn1HzjOnGtwWFqhQU8hZXRqDZYTZ4p47HsscYcUGiXTS6DFUjOlegxi16PDC1N7Jor7a4S7c1zprH4bSk5LgCvHKG8RplIzxX3A%2FPuBRMEUsYZpkgDmDBW1nmxPx81u%2FvbDbtpY2PZlAhiQ8uIO3bq32pH9aGoso%2F%2FprS4%2BZncbxBLANHDIML%2FFEI6hPRjCutZiMg1fs6l7x1oTypNS%2Bmn6SXaOlQgfp%2FtJicr7ts%2BU6T9q8U26c3SAmTChwrzEBjqkASIoAsyLJBWYZ2fBPONGLXxzo68chyJ7ytQXtWrLMfz51fPE0AYgAjRfH4%2Fdbq7Xq5pI82aMfxvFODL8rMaZKos6gKEXzS%2Fl6nJG838f4R23rCZcAAlf0Bk%2FROywsKnwXbVcTeaQG5hCwqd6P946bIrLWEj%2BCNqOkZm0U4trxIKyF82HF3ygAx6Ru9AO28hwuqRI7rSNTWVECqCzAhBr5hyOCX3K&X-Amz-Signature=d8a52658a8ac63325b3efb3f7c5d9dda83048ec0f2e7de411bf3fda27c938413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
