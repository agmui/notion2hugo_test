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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WIUPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFs2C66j9%2B8IWl5ttT7kaiHmimrfexSrW%2Fznxmaej5LWAiEAoYsjGyVe%2F1aTCtcyXDsmPgWdgWtpDUWgjB3QluNJLMAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDKSlZZ%2FtmWv%2Bvm9jircA1KQLzYrPGwtRyTl3klAzxR04%2B0kFa%2F3SeLSJHkUlIHV0bQEXh%2B7URk6Tj5Anpn3rpyTle4TqEcmfEwDToC1M3bhUZ7ySVDmCVzvQR6QYG3YgtoW1dtyBgYNHYDA763Ew6eF8zmENSoXQ9loEzhKgV3I5aOp6KBATYt8gdSbmTa1GPYWfzoDzC184PG%2Bs7AFQ9lxQFatEhz0ycFLiEeqoHdj40Qgmp%2FjRxsCFaPls8L%2BtAX3lIrV%2FKcBr0Dvfds5nyjJ77%2FCfoTaPQWyH0drZ7BRgwnD2E7pO5lSqW7%2Fb5XUmtOfY%2B68n6P799mrx1QhsPXbC67BSpEdRbcRVaudownduqbu8ULAwysQsVFwiUOsofHAPTGBWtLk3jriLt9FHM8RcIrKhI4aMS0o23i%2BTRp0Gz2oS4woikIRLwcyfbyjwB6frNv2xDefVhz121uz6pv01jWzZ9Z3Fo3p6XFsTsaCybxTfIl3QyTfLRZufYN2a9PkE4ToQhsuKM09l55WDYWFMcAt5dg1L3QXSyTuuecWcwL3N6lzWehIdJNSCAY%2FDx%2Fb8V8IRKYZRiM%2Fhk%2BdHOM8wJDEO97BCWmHPIQtaLV0%2FtidHN0kktHtJeVDp5yplRk6jHKXlvZHAirYMNCuhcIGOqUBK%2B2PHZRGJFq1EVoOUN%2BLQdWVAcrOrETnTS4SjmXIpsyPXJv2JeieKfA06WUjlCflnnbVtncPZJ8ESJ4L%2B%2Bs6%2BeI71hLu2v9v6eT4QhpGiJIUqXGlJ6tOO%2BHlgKy6ONwLX5Fz0t0YJVENWBXMx0lqLS9X2U4Pd8lFPkoKX4j%2BHRrsSbnqXiOpKNcUbfxVYiXNybl6ig%2FDPhZiqkicSG4%2FJjh4WoZS&X-Amz-Signature=0d846b473d3e08f6650fcf46ad420fd01d802fe93c32930cdff8432f2fc47915&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WIUPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFs2C66j9%2B8IWl5ttT7kaiHmimrfexSrW%2Fznxmaej5LWAiEAoYsjGyVe%2F1aTCtcyXDsmPgWdgWtpDUWgjB3QluNJLMAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDKSlZZ%2FtmWv%2Bvm9jircA1KQLzYrPGwtRyTl3klAzxR04%2B0kFa%2F3SeLSJHkUlIHV0bQEXh%2B7URk6Tj5Anpn3rpyTle4TqEcmfEwDToC1M3bhUZ7ySVDmCVzvQR6QYG3YgtoW1dtyBgYNHYDA763Ew6eF8zmENSoXQ9loEzhKgV3I5aOp6KBATYt8gdSbmTa1GPYWfzoDzC184PG%2Bs7AFQ9lxQFatEhz0ycFLiEeqoHdj40Qgmp%2FjRxsCFaPls8L%2BtAX3lIrV%2FKcBr0Dvfds5nyjJ77%2FCfoTaPQWyH0drZ7BRgwnD2E7pO5lSqW7%2Fb5XUmtOfY%2B68n6P799mrx1QhsPXbC67BSpEdRbcRVaudownduqbu8ULAwysQsVFwiUOsofHAPTGBWtLk3jriLt9FHM8RcIrKhI4aMS0o23i%2BTRp0Gz2oS4woikIRLwcyfbyjwB6frNv2xDefVhz121uz6pv01jWzZ9Z3Fo3p6XFsTsaCybxTfIl3QyTfLRZufYN2a9PkE4ToQhsuKM09l55WDYWFMcAt5dg1L3QXSyTuuecWcwL3N6lzWehIdJNSCAY%2FDx%2Fb8V8IRKYZRiM%2Fhk%2BdHOM8wJDEO97BCWmHPIQtaLV0%2FtidHN0kktHtJeVDp5yplRk6jHKXlvZHAirYMNCuhcIGOqUBK%2B2PHZRGJFq1EVoOUN%2BLQdWVAcrOrETnTS4SjmXIpsyPXJv2JeieKfA06WUjlCflnnbVtncPZJ8ESJ4L%2B%2Bs6%2BeI71hLu2v9v6eT4QhpGiJIUqXGlJ6tOO%2BHlgKy6ONwLX5Fz0t0YJVENWBXMx0lqLS9X2U4Pd8lFPkoKX4j%2BHRrsSbnqXiOpKNcUbfxVYiXNybl6ig%2FDPhZiqkicSG4%2FJjh4WoZS&X-Amz-Signature=8ce909a0d69280c82af57564c9ca3e118da93e9fd69e5e81a5d4cdc43f0870bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WIUPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFs2C66j9%2B8IWl5ttT7kaiHmimrfexSrW%2Fznxmaej5LWAiEAoYsjGyVe%2F1aTCtcyXDsmPgWdgWtpDUWgjB3QluNJLMAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDKSlZZ%2FtmWv%2Bvm9jircA1KQLzYrPGwtRyTl3klAzxR04%2B0kFa%2F3SeLSJHkUlIHV0bQEXh%2B7URk6Tj5Anpn3rpyTle4TqEcmfEwDToC1M3bhUZ7ySVDmCVzvQR6QYG3YgtoW1dtyBgYNHYDA763Ew6eF8zmENSoXQ9loEzhKgV3I5aOp6KBATYt8gdSbmTa1GPYWfzoDzC184PG%2Bs7AFQ9lxQFatEhz0ycFLiEeqoHdj40Qgmp%2FjRxsCFaPls8L%2BtAX3lIrV%2FKcBr0Dvfds5nyjJ77%2FCfoTaPQWyH0drZ7BRgwnD2E7pO5lSqW7%2Fb5XUmtOfY%2B68n6P799mrx1QhsPXbC67BSpEdRbcRVaudownduqbu8ULAwysQsVFwiUOsofHAPTGBWtLk3jriLt9FHM8RcIrKhI4aMS0o23i%2BTRp0Gz2oS4woikIRLwcyfbyjwB6frNv2xDefVhz121uz6pv01jWzZ9Z3Fo3p6XFsTsaCybxTfIl3QyTfLRZufYN2a9PkE4ToQhsuKM09l55WDYWFMcAt5dg1L3QXSyTuuecWcwL3N6lzWehIdJNSCAY%2FDx%2Fb8V8IRKYZRiM%2Fhk%2BdHOM8wJDEO97BCWmHPIQtaLV0%2FtidHN0kktHtJeVDp5yplRk6jHKXlvZHAirYMNCuhcIGOqUBK%2B2PHZRGJFq1EVoOUN%2BLQdWVAcrOrETnTS4SjmXIpsyPXJv2JeieKfA06WUjlCflnnbVtncPZJ8ESJ4L%2B%2Bs6%2BeI71hLu2v9v6eT4QhpGiJIUqXGlJ6tOO%2BHlgKy6ONwLX5Fz0t0YJVENWBXMx0lqLS9X2U4Pd8lFPkoKX4j%2BHRrsSbnqXiOpKNcUbfxVYiXNybl6ig%2FDPhZiqkicSG4%2FJjh4WoZS&X-Amz-Signature=c2ca2ee7c8117113f4c34a6945190c589af2c39052f2b84c44484d0867b76952&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WIUPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFs2C66j9%2B8IWl5ttT7kaiHmimrfexSrW%2Fznxmaej5LWAiEAoYsjGyVe%2F1aTCtcyXDsmPgWdgWtpDUWgjB3QluNJLMAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDKSlZZ%2FtmWv%2Bvm9jircA1KQLzYrPGwtRyTl3klAzxR04%2B0kFa%2F3SeLSJHkUlIHV0bQEXh%2B7URk6Tj5Anpn3rpyTle4TqEcmfEwDToC1M3bhUZ7ySVDmCVzvQR6QYG3YgtoW1dtyBgYNHYDA763Ew6eF8zmENSoXQ9loEzhKgV3I5aOp6KBATYt8gdSbmTa1GPYWfzoDzC184PG%2Bs7AFQ9lxQFatEhz0ycFLiEeqoHdj40Qgmp%2FjRxsCFaPls8L%2BtAX3lIrV%2FKcBr0Dvfds5nyjJ77%2FCfoTaPQWyH0drZ7BRgwnD2E7pO5lSqW7%2Fb5XUmtOfY%2B68n6P799mrx1QhsPXbC67BSpEdRbcRVaudownduqbu8ULAwysQsVFwiUOsofHAPTGBWtLk3jriLt9FHM8RcIrKhI4aMS0o23i%2BTRp0Gz2oS4woikIRLwcyfbyjwB6frNv2xDefVhz121uz6pv01jWzZ9Z3Fo3p6XFsTsaCybxTfIl3QyTfLRZufYN2a9PkE4ToQhsuKM09l55WDYWFMcAt5dg1L3QXSyTuuecWcwL3N6lzWehIdJNSCAY%2FDx%2Fb8V8IRKYZRiM%2Fhk%2BdHOM8wJDEO97BCWmHPIQtaLV0%2FtidHN0kktHtJeVDp5yplRk6jHKXlvZHAirYMNCuhcIGOqUBK%2B2PHZRGJFq1EVoOUN%2BLQdWVAcrOrETnTS4SjmXIpsyPXJv2JeieKfA06WUjlCflnnbVtncPZJ8ESJ4L%2B%2Bs6%2BeI71hLu2v9v6eT4QhpGiJIUqXGlJ6tOO%2BHlgKy6ONwLX5Fz0t0YJVENWBXMx0lqLS9X2U4Pd8lFPkoKX4j%2BHRrsSbnqXiOpKNcUbfxVYiXNybl6ig%2FDPhZiqkicSG4%2FJjh4WoZS&X-Amz-Signature=674605d3e222e3b9fddced9510f4f77486e7566e4db8158d90e0a04855037535&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WIUPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFs2C66j9%2B8IWl5ttT7kaiHmimrfexSrW%2Fznxmaej5LWAiEAoYsjGyVe%2F1aTCtcyXDsmPgWdgWtpDUWgjB3QluNJLMAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDKSlZZ%2FtmWv%2Bvm9jircA1KQLzYrPGwtRyTl3klAzxR04%2B0kFa%2F3SeLSJHkUlIHV0bQEXh%2B7URk6Tj5Anpn3rpyTle4TqEcmfEwDToC1M3bhUZ7ySVDmCVzvQR6QYG3YgtoW1dtyBgYNHYDA763Ew6eF8zmENSoXQ9loEzhKgV3I5aOp6KBATYt8gdSbmTa1GPYWfzoDzC184PG%2Bs7AFQ9lxQFatEhz0ycFLiEeqoHdj40Qgmp%2FjRxsCFaPls8L%2BtAX3lIrV%2FKcBr0Dvfds5nyjJ77%2FCfoTaPQWyH0drZ7BRgwnD2E7pO5lSqW7%2Fb5XUmtOfY%2B68n6P799mrx1QhsPXbC67BSpEdRbcRVaudownduqbu8ULAwysQsVFwiUOsofHAPTGBWtLk3jriLt9FHM8RcIrKhI4aMS0o23i%2BTRp0Gz2oS4woikIRLwcyfbyjwB6frNv2xDefVhz121uz6pv01jWzZ9Z3Fo3p6XFsTsaCybxTfIl3QyTfLRZufYN2a9PkE4ToQhsuKM09l55WDYWFMcAt5dg1L3QXSyTuuecWcwL3N6lzWehIdJNSCAY%2FDx%2Fb8V8IRKYZRiM%2Fhk%2BdHOM8wJDEO97BCWmHPIQtaLV0%2FtidHN0kktHtJeVDp5yplRk6jHKXlvZHAirYMNCuhcIGOqUBK%2B2PHZRGJFq1EVoOUN%2BLQdWVAcrOrETnTS4SjmXIpsyPXJv2JeieKfA06WUjlCflnnbVtncPZJ8ESJ4L%2B%2Bs6%2BeI71hLu2v9v6eT4QhpGiJIUqXGlJ6tOO%2BHlgKy6ONwLX5Fz0t0YJVENWBXMx0lqLS9X2U4Pd8lFPkoKX4j%2BHRrsSbnqXiOpKNcUbfxVYiXNybl6ig%2FDPhZiqkicSG4%2FJjh4WoZS&X-Amz-Signature=a5c74d50b5e5cbccd25bcccf229f6fc4a9c9b889a05cd17c621c9d96de3cd78d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WIUPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFs2C66j9%2B8IWl5ttT7kaiHmimrfexSrW%2Fznxmaej5LWAiEAoYsjGyVe%2F1aTCtcyXDsmPgWdgWtpDUWgjB3QluNJLMAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDKSlZZ%2FtmWv%2Bvm9jircA1KQLzYrPGwtRyTl3klAzxR04%2B0kFa%2F3SeLSJHkUlIHV0bQEXh%2B7URk6Tj5Anpn3rpyTle4TqEcmfEwDToC1M3bhUZ7ySVDmCVzvQR6QYG3YgtoW1dtyBgYNHYDA763Ew6eF8zmENSoXQ9loEzhKgV3I5aOp6KBATYt8gdSbmTa1GPYWfzoDzC184PG%2Bs7AFQ9lxQFatEhz0ycFLiEeqoHdj40Qgmp%2FjRxsCFaPls8L%2BtAX3lIrV%2FKcBr0Dvfds5nyjJ77%2FCfoTaPQWyH0drZ7BRgwnD2E7pO5lSqW7%2Fb5XUmtOfY%2B68n6P799mrx1QhsPXbC67BSpEdRbcRVaudownduqbu8ULAwysQsVFwiUOsofHAPTGBWtLk3jriLt9FHM8RcIrKhI4aMS0o23i%2BTRp0Gz2oS4woikIRLwcyfbyjwB6frNv2xDefVhz121uz6pv01jWzZ9Z3Fo3p6XFsTsaCybxTfIl3QyTfLRZufYN2a9PkE4ToQhsuKM09l55WDYWFMcAt5dg1L3QXSyTuuecWcwL3N6lzWehIdJNSCAY%2FDx%2Fb8V8IRKYZRiM%2Fhk%2BdHOM8wJDEO97BCWmHPIQtaLV0%2FtidHN0kktHtJeVDp5yplRk6jHKXlvZHAirYMNCuhcIGOqUBK%2B2PHZRGJFq1EVoOUN%2BLQdWVAcrOrETnTS4SjmXIpsyPXJv2JeieKfA06WUjlCflnnbVtncPZJ8ESJ4L%2B%2Bs6%2BeI71hLu2v9v6eT4QhpGiJIUqXGlJ6tOO%2BHlgKy6ONwLX5Fz0t0YJVENWBXMx0lqLS9X2U4Pd8lFPkoKX4j%2BHRrsSbnqXiOpKNcUbfxVYiXNybl6ig%2FDPhZiqkicSG4%2FJjh4WoZS&X-Amz-Signature=11add78859401a7b9ee662363543597343b4fab6cd5b8d5064002727b72477c9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WIUPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFs2C66j9%2B8IWl5ttT7kaiHmimrfexSrW%2Fznxmaej5LWAiEAoYsjGyVe%2F1aTCtcyXDsmPgWdgWtpDUWgjB3QluNJLMAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDKSlZZ%2FtmWv%2Bvm9jircA1KQLzYrPGwtRyTl3klAzxR04%2B0kFa%2F3SeLSJHkUlIHV0bQEXh%2B7URk6Tj5Anpn3rpyTle4TqEcmfEwDToC1M3bhUZ7ySVDmCVzvQR6QYG3YgtoW1dtyBgYNHYDA763Ew6eF8zmENSoXQ9loEzhKgV3I5aOp6KBATYt8gdSbmTa1GPYWfzoDzC184PG%2Bs7AFQ9lxQFatEhz0ycFLiEeqoHdj40Qgmp%2FjRxsCFaPls8L%2BtAX3lIrV%2FKcBr0Dvfds5nyjJ77%2FCfoTaPQWyH0drZ7BRgwnD2E7pO5lSqW7%2Fb5XUmtOfY%2B68n6P799mrx1QhsPXbC67BSpEdRbcRVaudownduqbu8ULAwysQsVFwiUOsofHAPTGBWtLk3jriLt9FHM8RcIrKhI4aMS0o23i%2BTRp0Gz2oS4woikIRLwcyfbyjwB6frNv2xDefVhz121uz6pv01jWzZ9Z3Fo3p6XFsTsaCybxTfIl3QyTfLRZufYN2a9PkE4ToQhsuKM09l55WDYWFMcAt5dg1L3QXSyTuuecWcwL3N6lzWehIdJNSCAY%2FDx%2Fb8V8IRKYZRiM%2Fhk%2BdHOM8wJDEO97BCWmHPIQtaLV0%2FtidHN0kktHtJeVDp5yplRk6jHKXlvZHAirYMNCuhcIGOqUBK%2B2PHZRGJFq1EVoOUN%2BLQdWVAcrOrETnTS4SjmXIpsyPXJv2JeieKfA06WUjlCflnnbVtncPZJ8ESJ4L%2B%2Bs6%2BeI71hLu2v9v6eT4QhpGiJIUqXGlJ6tOO%2BHlgKy6ONwLX5Fz0t0YJVENWBXMx0lqLS9X2U4Pd8lFPkoKX4j%2BHRrsSbnqXiOpKNcUbfxVYiXNybl6ig%2FDPhZiqkicSG4%2FJjh4WoZS&X-Amz-Signature=f3929422a36194e6e712ba561abf1820d1b7f68d97c10b23e5ad762cae9a2dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
