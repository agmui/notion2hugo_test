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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RNVTQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCWDtSqU6nYkPnJ4pFE%2BdDghRWfbgOK0swZduq%2B%2FOj98wIhAO1ltlv%2FnV2dt8ngVA7ZLnoIEPR9pSJOLHcLlxhNFU0nKv8DCHIQABoMNjM3NDIzMTgzODA1Igxsmr%2BTM%2Blt2xqsfuMq3ANn6O8JYtffpnc0Yu%2FU3O3zecJLzoKhttRbCTKMbwYjNwsARKJSZ8GfX0c%2BH3BctjlPGJISFc1BhJGVKUUXTmcU1kUiUs%2Bno%2BhULB8RqeCpOez19ZI2sGQ13axnF6wlCano5Eaeb6cfJAUOmrXppqoogEP9hPa83FAQwPlaIwCZhrDINstk%2BnXHqiXBU0nWxVtnOdkwbmrADJuO%2ByP5nw2XylI1Kzy8c9kxf7K2J2YnaxqUJtYiisLAlNWMGSTQRj7fUbxp0NkoH9skjlqLBzKlXTUZTe437Ml7qoPx4WZgSaJPoJEq0uG%2FauEef3dezjSzPdPzDOyigO6oDWBuEbhRXm8a1We9XZAHdwVNRBNhVCrTcnPEsFfclrYd35LsHOPgfO1BsOEgo6Akhuv4p9JhgoHqu%2FUzhwYZnXSBBCWK9hqtRwl9sBNy9HieSB3uZ5jl6%2FNeCfMfFbS1eUmkq7OLYKP7ZScOY51OHohhb5whErKnnWkhre7jUPpt6mWJlT2QVYmulTf6BG%2B517rq2KIICadcejX5VcUDs7rLPhcC4jar56dvroYXsjCjAFz4cbh5EJrZ0X%2BuJkTzb1PC3MLHpGqQ57sbrt8Fi%2FWzexs1F3SZO2W6bkTCB2cPNjCR4p6%2FBjqkAVRevs0raafPcdkCKzY3UmR8x0ijuL83vIN4hvA3pR%2B9KbLcVLAVz%2BkG9yjn%2FlfB1QL%2FtqoBdeStMT88NVQJg7XxWIRDS1E7eVqrR1DK6yhMsHW51K6Z1IGOXe6ma5YV3mnuFqqmMeRp7FiwYVmwIS18zDdu6KDbtTdSgpjrIFOY3Mk6SPzK558iW3GSg2vtof5v1Q8f3VTlL08K7qyAQH5BOo1M&X-Amz-Signature=8614e48689f10a89eea6433fb7d508fb0b365f83262dd6b0c7cef97f2682e0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RNVTQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCWDtSqU6nYkPnJ4pFE%2BdDghRWfbgOK0swZduq%2B%2FOj98wIhAO1ltlv%2FnV2dt8ngVA7ZLnoIEPR9pSJOLHcLlxhNFU0nKv8DCHIQABoMNjM3NDIzMTgzODA1Igxsmr%2BTM%2Blt2xqsfuMq3ANn6O8JYtffpnc0Yu%2FU3O3zecJLzoKhttRbCTKMbwYjNwsARKJSZ8GfX0c%2BH3BctjlPGJISFc1BhJGVKUUXTmcU1kUiUs%2Bno%2BhULB8RqeCpOez19ZI2sGQ13axnF6wlCano5Eaeb6cfJAUOmrXppqoogEP9hPa83FAQwPlaIwCZhrDINstk%2BnXHqiXBU0nWxVtnOdkwbmrADJuO%2ByP5nw2XylI1Kzy8c9kxf7K2J2YnaxqUJtYiisLAlNWMGSTQRj7fUbxp0NkoH9skjlqLBzKlXTUZTe437Ml7qoPx4WZgSaJPoJEq0uG%2FauEef3dezjSzPdPzDOyigO6oDWBuEbhRXm8a1We9XZAHdwVNRBNhVCrTcnPEsFfclrYd35LsHOPgfO1BsOEgo6Akhuv4p9JhgoHqu%2FUzhwYZnXSBBCWK9hqtRwl9sBNy9HieSB3uZ5jl6%2FNeCfMfFbS1eUmkq7OLYKP7ZScOY51OHohhb5whErKnnWkhre7jUPpt6mWJlT2QVYmulTf6BG%2B517rq2KIICadcejX5VcUDs7rLPhcC4jar56dvroYXsjCjAFz4cbh5EJrZ0X%2BuJkTzb1PC3MLHpGqQ57sbrt8Fi%2FWzexs1F3SZO2W6bkTCB2cPNjCR4p6%2FBjqkAVRevs0raafPcdkCKzY3UmR8x0ijuL83vIN4hvA3pR%2B9KbLcVLAVz%2BkG9yjn%2FlfB1QL%2FtqoBdeStMT88NVQJg7XxWIRDS1E7eVqrR1DK6yhMsHW51K6Z1IGOXe6ma5YV3mnuFqqmMeRp7FiwYVmwIS18zDdu6KDbtTdSgpjrIFOY3Mk6SPzK558iW3GSg2vtof5v1Q8f3VTlL08K7qyAQH5BOo1M&X-Amz-Signature=ad7f5064dace5c777d93d61d75fa5760630d2ac8aa44c6ce0301dfdf3f5e857e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RNVTQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCWDtSqU6nYkPnJ4pFE%2BdDghRWfbgOK0swZduq%2B%2FOj98wIhAO1ltlv%2FnV2dt8ngVA7ZLnoIEPR9pSJOLHcLlxhNFU0nKv8DCHIQABoMNjM3NDIzMTgzODA1Igxsmr%2BTM%2Blt2xqsfuMq3ANn6O8JYtffpnc0Yu%2FU3O3zecJLzoKhttRbCTKMbwYjNwsARKJSZ8GfX0c%2BH3BctjlPGJISFc1BhJGVKUUXTmcU1kUiUs%2Bno%2BhULB8RqeCpOez19ZI2sGQ13axnF6wlCano5Eaeb6cfJAUOmrXppqoogEP9hPa83FAQwPlaIwCZhrDINstk%2BnXHqiXBU0nWxVtnOdkwbmrADJuO%2ByP5nw2XylI1Kzy8c9kxf7K2J2YnaxqUJtYiisLAlNWMGSTQRj7fUbxp0NkoH9skjlqLBzKlXTUZTe437Ml7qoPx4WZgSaJPoJEq0uG%2FauEef3dezjSzPdPzDOyigO6oDWBuEbhRXm8a1We9XZAHdwVNRBNhVCrTcnPEsFfclrYd35LsHOPgfO1BsOEgo6Akhuv4p9JhgoHqu%2FUzhwYZnXSBBCWK9hqtRwl9sBNy9HieSB3uZ5jl6%2FNeCfMfFbS1eUmkq7OLYKP7ZScOY51OHohhb5whErKnnWkhre7jUPpt6mWJlT2QVYmulTf6BG%2B517rq2KIICadcejX5VcUDs7rLPhcC4jar56dvroYXsjCjAFz4cbh5EJrZ0X%2BuJkTzb1PC3MLHpGqQ57sbrt8Fi%2FWzexs1F3SZO2W6bkTCB2cPNjCR4p6%2FBjqkAVRevs0raafPcdkCKzY3UmR8x0ijuL83vIN4hvA3pR%2B9KbLcVLAVz%2BkG9yjn%2FlfB1QL%2FtqoBdeStMT88NVQJg7XxWIRDS1E7eVqrR1DK6yhMsHW51K6Z1IGOXe6ma5YV3mnuFqqmMeRp7FiwYVmwIS18zDdu6KDbtTdSgpjrIFOY3Mk6SPzK558iW3GSg2vtof5v1Q8f3VTlL08K7qyAQH5BOo1M&X-Amz-Signature=b0b392c5be43f88121ad8dbff70935db01b6e55b667207bc2d0253331e6cebaa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RNVTQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCWDtSqU6nYkPnJ4pFE%2BdDghRWfbgOK0swZduq%2B%2FOj98wIhAO1ltlv%2FnV2dt8ngVA7ZLnoIEPR9pSJOLHcLlxhNFU0nKv8DCHIQABoMNjM3NDIzMTgzODA1Igxsmr%2BTM%2Blt2xqsfuMq3ANn6O8JYtffpnc0Yu%2FU3O3zecJLzoKhttRbCTKMbwYjNwsARKJSZ8GfX0c%2BH3BctjlPGJISFc1BhJGVKUUXTmcU1kUiUs%2Bno%2BhULB8RqeCpOez19ZI2sGQ13axnF6wlCano5Eaeb6cfJAUOmrXppqoogEP9hPa83FAQwPlaIwCZhrDINstk%2BnXHqiXBU0nWxVtnOdkwbmrADJuO%2ByP5nw2XylI1Kzy8c9kxf7K2J2YnaxqUJtYiisLAlNWMGSTQRj7fUbxp0NkoH9skjlqLBzKlXTUZTe437Ml7qoPx4WZgSaJPoJEq0uG%2FauEef3dezjSzPdPzDOyigO6oDWBuEbhRXm8a1We9XZAHdwVNRBNhVCrTcnPEsFfclrYd35LsHOPgfO1BsOEgo6Akhuv4p9JhgoHqu%2FUzhwYZnXSBBCWK9hqtRwl9sBNy9HieSB3uZ5jl6%2FNeCfMfFbS1eUmkq7OLYKP7ZScOY51OHohhb5whErKnnWkhre7jUPpt6mWJlT2QVYmulTf6BG%2B517rq2KIICadcejX5VcUDs7rLPhcC4jar56dvroYXsjCjAFz4cbh5EJrZ0X%2BuJkTzb1PC3MLHpGqQ57sbrt8Fi%2FWzexs1F3SZO2W6bkTCB2cPNjCR4p6%2FBjqkAVRevs0raafPcdkCKzY3UmR8x0ijuL83vIN4hvA3pR%2B9KbLcVLAVz%2BkG9yjn%2FlfB1QL%2FtqoBdeStMT88NVQJg7XxWIRDS1E7eVqrR1DK6yhMsHW51K6Z1IGOXe6ma5YV3mnuFqqmMeRp7FiwYVmwIS18zDdu6KDbtTdSgpjrIFOY3Mk6SPzK558iW3GSg2vtof5v1Q8f3VTlL08K7qyAQH5BOo1M&X-Amz-Signature=6265a1b4bf616e21a5dc45efd1b7c5264959cebc9ebcef3dc06cc4230441ed87&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RNVTQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCWDtSqU6nYkPnJ4pFE%2BdDghRWfbgOK0swZduq%2B%2FOj98wIhAO1ltlv%2FnV2dt8ngVA7ZLnoIEPR9pSJOLHcLlxhNFU0nKv8DCHIQABoMNjM3NDIzMTgzODA1Igxsmr%2BTM%2Blt2xqsfuMq3ANn6O8JYtffpnc0Yu%2FU3O3zecJLzoKhttRbCTKMbwYjNwsARKJSZ8GfX0c%2BH3BctjlPGJISFc1BhJGVKUUXTmcU1kUiUs%2Bno%2BhULB8RqeCpOez19ZI2sGQ13axnF6wlCano5Eaeb6cfJAUOmrXppqoogEP9hPa83FAQwPlaIwCZhrDINstk%2BnXHqiXBU0nWxVtnOdkwbmrADJuO%2ByP5nw2XylI1Kzy8c9kxf7K2J2YnaxqUJtYiisLAlNWMGSTQRj7fUbxp0NkoH9skjlqLBzKlXTUZTe437Ml7qoPx4WZgSaJPoJEq0uG%2FauEef3dezjSzPdPzDOyigO6oDWBuEbhRXm8a1We9XZAHdwVNRBNhVCrTcnPEsFfclrYd35LsHOPgfO1BsOEgo6Akhuv4p9JhgoHqu%2FUzhwYZnXSBBCWK9hqtRwl9sBNy9HieSB3uZ5jl6%2FNeCfMfFbS1eUmkq7OLYKP7ZScOY51OHohhb5whErKnnWkhre7jUPpt6mWJlT2QVYmulTf6BG%2B517rq2KIICadcejX5VcUDs7rLPhcC4jar56dvroYXsjCjAFz4cbh5EJrZ0X%2BuJkTzb1PC3MLHpGqQ57sbrt8Fi%2FWzexs1F3SZO2W6bkTCB2cPNjCR4p6%2FBjqkAVRevs0raafPcdkCKzY3UmR8x0ijuL83vIN4hvA3pR%2B9KbLcVLAVz%2BkG9yjn%2FlfB1QL%2FtqoBdeStMT88NVQJg7XxWIRDS1E7eVqrR1DK6yhMsHW51K6Z1IGOXe6ma5YV3mnuFqqmMeRp7FiwYVmwIS18zDdu6KDbtTdSgpjrIFOY3Mk6SPzK558iW3GSg2vtof5v1Q8f3VTlL08K7qyAQH5BOo1M&X-Amz-Signature=66474db5da5594b76ac618f7d2fc82d1f9a214d5b25ffa3fbd65a77422134b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RNVTQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCWDtSqU6nYkPnJ4pFE%2BdDghRWfbgOK0swZduq%2B%2FOj98wIhAO1ltlv%2FnV2dt8ngVA7ZLnoIEPR9pSJOLHcLlxhNFU0nKv8DCHIQABoMNjM3NDIzMTgzODA1Igxsmr%2BTM%2Blt2xqsfuMq3ANn6O8JYtffpnc0Yu%2FU3O3zecJLzoKhttRbCTKMbwYjNwsARKJSZ8GfX0c%2BH3BctjlPGJISFc1BhJGVKUUXTmcU1kUiUs%2Bno%2BhULB8RqeCpOez19ZI2sGQ13axnF6wlCano5Eaeb6cfJAUOmrXppqoogEP9hPa83FAQwPlaIwCZhrDINstk%2BnXHqiXBU0nWxVtnOdkwbmrADJuO%2ByP5nw2XylI1Kzy8c9kxf7K2J2YnaxqUJtYiisLAlNWMGSTQRj7fUbxp0NkoH9skjlqLBzKlXTUZTe437Ml7qoPx4WZgSaJPoJEq0uG%2FauEef3dezjSzPdPzDOyigO6oDWBuEbhRXm8a1We9XZAHdwVNRBNhVCrTcnPEsFfclrYd35LsHOPgfO1BsOEgo6Akhuv4p9JhgoHqu%2FUzhwYZnXSBBCWK9hqtRwl9sBNy9HieSB3uZ5jl6%2FNeCfMfFbS1eUmkq7OLYKP7ZScOY51OHohhb5whErKnnWkhre7jUPpt6mWJlT2QVYmulTf6BG%2B517rq2KIICadcejX5VcUDs7rLPhcC4jar56dvroYXsjCjAFz4cbh5EJrZ0X%2BuJkTzb1PC3MLHpGqQ57sbrt8Fi%2FWzexs1F3SZO2W6bkTCB2cPNjCR4p6%2FBjqkAVRevs0raafPcdkCKzY3UmR8x0ijuL83vIN4hvA3pR%2B9KbLcVLAVz%2BkG9yjn%2FlfB1QL%2FtqoBdeStMT88NVQJg7XxWIRDS1E7eVqrR1DK6yhMsHW51K6Z1IGOXe6ma5YV3mnuFqqmMeRp7FiwYVmwIS18zDdu6KDbtTdSgpjrIFOY3Mk6SPzK558iW3GSg2vtof5v1Q8f3VTlL08K7qyAQH5BOo1M&X-Amz-Signature=18a3e32b50b7c3336013ca2e4aef77c72bc87dced517ef5e2188be1a74e2703b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2RNVTQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCWDtSqU6nYkPnJ4pFE%2BdDghRWfbgOK0swZduq%2B%2FOj98wIhAO1ltlv%2FnV2dt8ngVA7ZLnoIEPR9pSJOLHcLlxhNFU0nKv8DCHIQABoMNjM3NDIzMTgzODA1Igxsmr%2BTM%2Blt2xqsfuMq3ANn6O8JYtffpnc0Yu%2FU3O3zecJLzoKhttRbCTKMbwYjNwsARKJSZ8GfX0c%2BH3BctjlPGJISFc1BhJGVKUUXTmcU1kUiUs%2Bno%2BhULB8RqeCpOez19ZI2sGQ13axnF6wlCano5Eaeb6cfJAUOmrXppqoogEP9hPa83FAQwPlaIwCZhrDINstk%2BnXHqiXBU0nWxVtnOdkwbmrADJuO%2ByP5nw2XylI1Kzy8c9kxf7K2J2YnaxqUJtYiisLAlNWMGSTQRj7fUbxp0NkoH9skjlqLBzKlXTUZTe437Ml7qoPx4WZgSaJPoJEq0uG%2FauEef3dezjSzPdPzDOyigO6oDWBuEbhRXm8a1We9XZAHdwVNRBNhVCrTcnPEsFfclrYd35LsHOPgfO1BsOEgo6Akhuv4p9JhgoHqu%2FUzhwYZnXSBBCWK9hqtRwl9sBNy9HieSB3uZ5jl6%2FNeCfMfFbS1eUmkq7OLYKP7ZScOY51OHohhb5whErKnnWkhre7jUPpt6mWJlT2QVYmulTf6BG%2B517rq2KIICadcejX5VcUDs7rLPhcC4jar56dvroYXsjCjAFz4cbh5EJrZ0X%2BuJkTzb1PC3MLHpGqQ57sbrt8Fi%2FWzexs1F3SZO2W6bkTCB2cPNjCR4p6%2FBjqkAVRevs0raafPcdkCKzY3UmR8x0ijuL83vIN4hvA3pR%2B9KbLcVLAVz%2BkG9yjn%2FlfB1QL%2FtqoBdeStMT88NVQJg7XxWIRDS1E7eVqrR1DK6yhMsHW51K6Z1IGOXe6ma5YV3mnuFqqmMeRp7FiwYVmwIS18zDdu6KDbtTdSgpjrIFOY3Mk6SPzK558iW3GSg2vtof5v1Q8f3VTlL08K7qyAQH5BOo1M&X-Amz-Signature=89a7324ad741b888f064c3a67e03692f6c237045f60c44ab1e573c303e521f30&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
