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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATXRFDR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBgrHLAjhH3oEzjNcJVqYQhCu5wFKS%2BC3rATdSQEudA7AiEA%2B4inIViXf2vARSUHoVwkh9O6RT3EdKunTc6Db6gtjJIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsDWDMaYBkx9V%2FZ8CrcA6blrX9eieb0EUGbtmoOV2WVfpZuVnD%2B57wHHtCBGrAXV8bFdKAwzgcTsEFphlLaJoj6UgCguUqN%2BU%2BF0asy9IBwvOVFU9lPdBWyds45PDCHIgyMHAtpA3EIaKWnv9V7gcuyqLKUTijL1n%2BoujXgZ5ap8BnT90J%2F%2BXhXZJ%2B%2BuNrm3NzI5jPW%2FZ4i1mlNYpEsax32Qxvq%2FBEQOeq3pbFHTfDrBF5b8DIXQtc3h9%2Flq%2FTt67TfJNLKGhjgpCwukuEzbn7dDeQinTAyBQyu%2BzT72Onf3ONMihb49joA%2BSgDz%2Bhy4%2FCcegKqcGnDDV7trn7kdq3CIGiBVqoNDhvfkJ1gyiwJZiM6YCW%2FVMsngj3%2BBlDUv3I4CuHW%2Feg2DNA03DP0gMtAJXslIJ8pwPf84YyO3bRshd%2BPS8x3C5SBso4lEoi8hjkMEQrrilDQOyYpw%2Bvfv2l1p5J0spGFthQcqhi22I14%2BAF4FPOTKOX6iReky1SbgwcuFdu4JPpE6ANWDpWgLX0skeWnrRwxXcSdMK8oGJzuL7slePfmFaniCPzbQwNzwiWv7Shp2oIOqr4wDz%2Bpbm%2BL0o0OgUsPF9OcEZLdA1HHPcPoJbIPMFgzM%2Fc6Qlmo43c2CBTR6kWJeDdKMNiQir4GOqUBHcSmRJ4Ojw9m5DYcRX4e%2FcagkNB4cWlCAsd%2FpUeLxeoXigrhJMzXboht5%2BvKj5aCXBWtLHJRTHhpOKFI5x%2B1rqc9Y8KDHXaLUhPww4hPbmn%2FUGEyF6yEcCUGdjelExO3j0V1upOfgHXCSpkYQilzO8BQHmnXofT1t2SbcXN1qqRohoGYVXpKI2%2F5HTI3QJsmEusgpdd9dSbedJJ2LyZefj8Kxyfw&X-Amz-Signature=d251141169fbf57cfca0fae1e1d84c0fe1d4ceb97228dd971147d16c2fc4a639&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATXRFDR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBgrHLAjhH3oEzjNcJVqYQhCu5wFKS%2BC3rATdSQEudA7AiEA%2B4inIViXf2vARSUHoVwkh9O6RT3EdKunTc6Db6gtjJIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsDWDMaYBkx9V%2FZ8CrcA6blrX9eieb0EUGbtmoOV2WVfpZuVnD%2B57wHHtCBGrAXV8bFdKAwzgcTsEFphlLaJoj6UgCguUqN%2BU%2BF0asy9IBwvOVFU9lPdBWyds45PDCHIgyMHAtpA3EIaKWnv9V7gcuyqLKUTijL1n%2BoujXgZ5ap8BnT90J%2F%2BXhXZJ%2B%2BuNrm3NzI5jPW%2FZ4i1mlNYpEsax32Qxvq%2FBEQOeq3pbFHTfDrBF5b8DIXQtc3h9%2Flq%2FTt67TfJNLKGhjgpCwukuEzbn7dDeQinTAyBQyu%2BzT72Onf3ONMihb49joA%2BSgDz%2Bhy4%2FCcegKqcGnDDV7trn7kdq3CIGiBVqoNDhvfkJ1gyiwJZiM6YCW%2FVMsngj3%2BBlDUv3I4CuHW%2Feg2DNA03DP0gMtAJXslIJ8pwPf84YyO3bRshd%2BPS8x3C5SBso4lEoi8hjkMEQrrilDQOyYpw%2Bvfv2l1p5J0spGFthQcqhi22I14%2BAF4FPOTKOX6iReky1SbgwcuFdu4JPpE6ANWDpWgLX0skeWnrRwxXcSdMK8oGJzuL7slePfmFaniCPzbQwNzwiWv7Shp2oIOqr4wDz%2Bpbm%2BL0o0OgUsPF9OcEZLdA1HHPcPoJbIPMFgzM%2Fc6Qlmo43c2CBTR6kWJeDdKMNiQir4GOqUBHcSmRJ4Ojw9m5DYcRX4e%2FcagkNB4cWlCAsd%2FpUeLxeoXigrhJMzXboht5%2BvKj5aCXBWtLHJRTHhpOKFI5x%2B1rqc9Y8KDHXaLUhPww4hPbmn%2FUGEyF6yEcCUGdjelExO3j0V1upOfgHXCSpkYQilzO8BQHmnXofT1t2SbcXN1qqRohoGYVXpKI2%2F5HTI3QJsmEusgpdd9dSbedJJ2LyZefj8Kxyfw&X-Amz-Signature=5766c7482295bc2e43bf1226296c892f69cc1f174b28570fa7a0c766ebb661fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATXRFDR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBgrHLAjhH3oEzjNcJVqYQhCu5wFKS%2BC3rATdSQEudA7AiEA%2B4inIViXf2vARSUHoVwkh9O6RT3EdKunTc6Db6gtjJIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsDWDMaYBkx9V%2FZ8CrcA6blrX9eieb0EUGbtmoOV2WVfpZuVnD%2B57wHHtCBGrAXV8bFdKAwzgcTsEFphlLaJoj6UgCguUqN%2BU%2BF0asy9IBwvOVFU9lPdBWyds45PDCHIgyMHAtpA3EIaKWnv9V7gcuyqLKUTijL1n%2BoujXgZ5ap8BnT90J%2F%2BXhXZJ%2B%2BuNrm3NzI5jPW%2FZ4i1mlNYpEsax32Qxvq%2FBEQOeq3pbFHTfDrBF5b8DIXQtc3h9%2Flq%2FTt67TfJNLKGhjgpCwukuEzbn7dDeQinTAyBQyu%2BzT72Onf3ONMihb49joA%2BSgDz%2Bhy4%2FCcegKqcGnDDV7trn7kdq3CIGiBVqoNDhvfkJ1gyiwJZiM6YCW%2FVMsngj3%2BBlDUv3I4CuHW%2Feg2DNA03DP0gMtAJXslIJ8pwPf84YyO3bRshd%2BPS8x3C5SBso4lEoi8hjkMEQrrilDQOyYpw%2Bvfv2l1p5J0spGFthQcqhi22I14%2BAF4FPOTKOX6iReky1SbgwcuFdu4JPpE6ANWDpWgLX0skeWnrRwxXcSdMK8oGJzuL7slePfmFaniCPzbQwNzwiWv7Shp2oIOqr4wDz%2Bpbm%2BL0o0OgUsPF9OcEZLdA1HHPcPoJbIPMFgzM%2Fc6Qlmo43c2CBTR6kWJeDdKMNiQir4GOqUBHcSmRJ4Ojw9m5DYcRX4e%2FcagkNB4cWlCAsd%2FpUeLxeoXigrhJMzXboht5%2BvKj5aCXBWtLHJRTHhpOKFI5x%2B1rqc9Y8KDHXaLUhPww4hPbmn%2FUGEyF6yEcCUGdjelExO3j0V1upOfgHXCSpkYQilzO8BQHmnXofT1t2SbcXN1qqRohoGYVXpKI2%2F5HTI3QJsmEusgpdd9dSbedJJ2LyZefj8Kxyfw&X-Amz-Signature=32410b1b1c36a0590787f42acab99fa8004dfcdc6a9722e6e9614a31ebf26ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATXRFDR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBgrHLAjhH3oEzjNcJVqYQhCu5wFKS%2BC3rATdSQEudA7AiEA%2B4inIViXf2vARSUHoVwkh9O6RT3EdKunTc6Db6gtjJIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsDWDMaYBkx9V%2FZ8CrcA6blrX9eieb0EUGbtmoOV2WVfpZuVnD%2B57wHHtCBGrAXV8bFdKAwzgcTsEFphlLaJoj6UgCguUqN%2BU%2BF0asy9IBwvOVFU9lPdBWyds45PDCHIgyMHAtpA3EIaKWnv9V7gcuyqLKUTijL1n%2BoujXgZ5ap8BnT90J%2F%2BXhXZJ%2B%2BuNrm3NzI5jPW%2FZ4i1mlNYpEsax32Qxvq%2FBEQOeq3pbFHTfDrBF5b8DIXQtc3h9%2Flq%2FTt67TfJNLKGhjgpCwukuEzbn7dDeQinTAyBQyu%2BzT72Onf3ONMihb49joA%2BSgDz%2Bhy4%2FCcegKqcGnDDV7trn7kdq3CIGiBVqoNDhvfkJ1gyiwJZiM6YCW%2FVMsngj3%2BBlDUv3I4CuHW%2Feg2DNA03DP0gMtAJXslIJ8pwPf84YyO3bRshd%2BPS8x3C5SBso4lEoi8hjkMEQrrilDQOyYpw%2Bvfv2l1p5J0spGFthQcqhi22I14%2BAF4FPOTKOX6iReky1SbgwcuFdu4JPpE6ANWDpWgLX0skeWnrRwxXcSdMK8oGJzuL7slePfmFaniCPzbQwNzwiWv7Shp2oIOqr4wDz%2Bpbm%2BL0o0OgUsPF9OcEZLdA1HHPcPoJbIPMFgzM%2Fc6Qlmo43c2CBTR6kWJeDdKMNiQir4GOqUBHcSmRJ4Ojw9m5DYcRX4e%2FcagkNB4cWlCAsd%2FpUeLxeoXigrhJMzXboht5%2BvKj5aCXBWtLHJRTHhpOKFI5x%2B1rqc9Y8KDHXaLUhPww4hPbmn%2FUGEyF6yEcCUGdjelExO3j0V1upOfgHXCSpkYQilzO8BQHmnXofT1t2SbcXN1qqRohoGYVXpKI2%2F5HTI3QJsmEusgpdd9dSbedJJ2LyZefj8Kxyfw&X-Amz-Signature=a391c6e74894132121bae17ebab9915d2901749c927c895021735dd4f079d0d2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATXRFDR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBgrHLAjhH3oEzjNcJVqYQhCu5wFKS%2BC3rATdSQEudA7AiEA%2B4inIViXf2vARSUHoVwkh9O6RT3EdKunTc6Db6gtjJIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsDWDMaYBkx9V%2FZ8CrcA6blrX9eieb0EUGbtmoOV2WVfpZuVnD%2B57wHHtCBGrAXV8bFdKAwzgcTsEFphlLaJoj6UgCguUqN%2BU%2BF0asy9IBwvOVFU9lPdBWyds45PDCHIgyMHAtpA3EIaKWnv9V7gcuyqLKUTijL1n%2BoujXgZ5ap8BnT90J%2F%2BXhXZJ%2B%2BuNrm3NzI5jPW%2FZ4i1mlNYpEsax32Qxvq%2FBEQOeq3pbFHTfDrBF5b8DIXQtc3h9%2Flq%2FTt67TfJNLKGhjgpCwukuEzbn7dDeQinTAyBQyu%2BzT72Onf3ONMihb49joA%2BSgDz%2Bhy4%2FCcegKqcGnDDV7trn7kdq3CIGiBVqoNDhvfkJ1gyiwJZiM6YCW%2FVMsngj3%2BBlDUv3I4CuHW%2Feg2DNA03DP0gMtAJXslIJ8pwPf84YyO3bRshd%2BPS8x3C5SBso4lEoi8hjkMEQrrilDQOyYpw%2Bvfv2l1p5J0spGFthQcqhi22I14%2BAF4FPOTKOX6iReky1SbgwcuFdu4JPpE6ANWDpWgLX0skeWnrRwxXcSdMK8oGJzuL7slePfmFaniCPzbQwNzwiWv7Shp2oIOqr4wDz%2Bpbm%2BL0o0OgUsPF9OcEZLdA1HHPcPoJbIPMFgzM%2Fc6Qlmo43c2CBTR6kWJeDdKMNiQir4GOqUBHcSmRJ4Ojw9m5DYcRX4e%2FcagkNB4cWlCAsd%2FpUeLxeoXigrhJMzXboht5%2BvKj5aCXBWtLHJRTHhpOKFI5x%2B1rqc9Y8KDHXaLUhPww4hPbmn%2FUGEyF6yEcCUGdjelExO3j0V1upOfgHXCSpkYQilzO8BQHmnXofT1t2SbcXN1qqRohoGYVXpKI2%2F5HTI3QJsmEusgpdd9dSbedJJ2LyZefj8Kxyfw&X-Amz-Signature=85d20205aca6af9f9d5d2bdc715095674d8717208a7caa2b96eccbc31bb37348&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATXRFDR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBgrHLAjhH3oEzjNcJVqYQhCu5wFKS%2BC3rATdSQEudA7AiEA%2B4inIViXf2vARSUHoVwkh9O6RT3EdKunTc6Db6gtjJIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsDWDMaYBkx9V%2FZ8CrcA6blrX9eieb0EUGbtmoOV2WVfpZuVnD%2B57wHHtCBGrAXV8bFdKAwzgcTsEFphlLaJoj6UgCguUqN%2BU%2BF0asy9IBwvOVFU9lPdBWyds45PDCHIgyMHAtpA3EIaKWnv9V7gcuyqLKUTijL1n%2BoujXgZ5ap8BnT90J%2F%2BXhXZJ%2B%2BuNrm3NzI5jPW%2FZ4i1mlNYpEsax32Qxvq%2FBEQOeq3pbFHTfDrBF5b8DIXQtc3h9%2Flq%2FTt67TfJNLKGhjgpCwukuEzbn7dDeQinTAyBQyu%2BzT72Onf3ONMihb49joA%2BSgDz%2Bhy4%2FCcegKqcGnDDV7trn7kdq3CIGiBVqoNDhvfkJ1gyiwJZiM6YCW%2FVMsngj3%2BBlDUv3I4CuHW%2Feg2DNA03DP0gMtAJXslIJ8pwPf84YyO3bRshd%2BPS8x3C5SBso4lEoi8hjkMEQrrilDQOyYpw%2Bvfv2l1p5J0spGFthQcqhi22I14%2BAF4FPOTKOX6iReky1SbgwcuFdu4JPpE6ANWDpWgLX0skeWnrRwxXcSdMK8oGJzuL7slePfmFaniCPzbQwNzwiWv7Shp2oIOqr4wDz%2Bpbm%2BL0o0OgUsPF9OcEZLdA1HHPcPoJbIPMFgzM%2Fc6Qlmo43c2CBTR6kWJeDdKMNiQir4GOqUBHcSmRJ4Ojw9m5DYcRX4e%2FcagkNB4cWlCAsd%2FpUeLxeoXigrhJMzXboht5%2BvKj5aCXBWtLHJRTHhpOKFI5x%2B1rqc9Y8KDHXaLUhPww4hPbmn%2FUGEyF6yEcCUGdjelExO3j0V1upOfgHXCSpkYQilzO8BQHmnXofT1t2SbcXN1qqRohoGYVXpKI2%2F5HTI3QJsmEusgpdd9dSbedJJ2LyZefj8Kxyfw&X-Amz-Signature=1261720bce8cf7fe3654bcb73de8726d21666d6e050bd2fc34a9958418ab166a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATXRFDR%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBgrHLAjhH3oEzjNcJVqYQhCu5wFKS%2BC3rATdSQEudA7AiEA%2B4inIViXf2vARSUHoVwkh9O6RT3EdKunTc6Db6gtjJIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsDWDMaYBkx9V%2FZ8CrcA6blrX9eieb0EUGbtmoOV2WVfpZuVnD%2B57wHHtCBGrAXV8bFdKAwzgcTsEFphlLaJoj6UgCguUqN%2BU%2BF0asy9IBwvOVFU9lPdBWyds45PDCHIgyMHAtpA3EIaKWnv9V7gcuyqLKUTijL1n%2BoujXgZ5ap8BnT90J%2F%2BXhXZJ%2B%2BuNrm3NzI5jPW%2FZ4i1mlNYpEsax32Qxvq%2FBEQOeq3pbFHTfDrBF5b8DIXQtc3h9%2Flq%2FTt67TfJNLKGhjgpCwukuEzbn7dDeQinTAyBQyu%2BzT72Onf3ONMihb49joA%2BSgDz%2Bhy4%2FCcegKqcGnDDV7trn7kdq3CIGiBVqoNDhvfkJ1gyiwJZiM6YCW%2FVMsngj3%2BBlDUv3I4CuHW%2Feg2DNA03DP0gMtAJXslIJ8pwPf84YyO3bRshd%2BPS8x3C5SBso4lEoi8hjkMEQrrilDQOyYpw%2Bvfv2l1p5J0spGFthQcqhi22I14%2BAF4FPOTKOX6iReky1SbgwcuFdu4JPpE6ANWDpWgLX0skeWnrRwxXcSdMK8oGJzuL7slePfmFaniCPzbQwNzwiWv7Shp2oIOqr4wDz%2Bpbm%2BL0o0OgUsPF9OcEZLdA1HHPcPoJbIPMFgzM%2Fc6Qlmo43c2CBTR6kWJeDdKMNiQir4GOqUBHcSmRJ4Ojw9m5DYcRX4e%2FcagkNB4cWlCAsd%2FpUeLxeoXigrhJMzXboht5%2BvKj5aCXBWtLHJRTHhpOKFI5x%2B1rqc9Y8KDHXaLUhPww4hPbmn%2FUGEyF6yEcCUGdjelExO3j0V1upOfgHXCSpkYQilzO8BQHmnXofT1t2SbcXN1qqRohoGYVXpKI2%2F5HTI3QJsmEusgpdd9dSbedJJ2LyZefj8Kxyfw&X-Amz-Signature=377b497a7e6462a9b968e23a2479f6ee40a1f6fdea7679c1beb6afbeb1052c84&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
