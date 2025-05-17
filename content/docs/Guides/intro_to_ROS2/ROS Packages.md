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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZH2LVJO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsrHoyxFGkjPFm4QYoI4dW%2BWRC%2FXHMN1Yem10xWlkPAiEAsGN%2FhfQbEUaf9xw2EUgd7oCW5WCotBPk9Kkr1dYmPTAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIjiQ%2BbxB89%2Frf%2FOSCrcA8y3n6rNIC4m%2FapKyZeOzGBU39rRMiUd1KbWK2GTQO2alw9Jy6YdKrI4vQjT4GeTgMMUWOY54%2FCOFPmONl1l%2B3nQ3WgxSTLQR%2Fc8Qw3XRi66AGbsyOQ2pFXduaKoSrzMuS6nIebJSDS0fJvVgFBBitp8%2F6UwetaVWTD3ajekYx3g7wHZb09m5Dn2GOfvQXMFSk1H3s4oxOMaUrRZ0Tsc4fng0m4FCSg9ovVsaicx1035agEyL%2FNE93cK0nB7TTIO%2BNHpDuKjPQBZsbDrbpBEFPB2QfKQ3LLCSHKF97u0cT7DnSJ5rUe7laV81pg1BGFw2WRk9aByVANbd4qchnZZEKIFcl66Ar9Hql14IZMQw8iaEa4AZLl1u42bJGxi0%2ByE%2BBm69nCoRK3C3HBEVGFTF%2BW9dnHbFircDq0YxLcoWoDiNfIrvZllqL%2FVSinh875MZwt4DyS2XX0sD0YZ9cG1vrj%2FEG8hMB40bqtMyOj0jPKroa%2FS0fRZSW38xkcuo8r1yF85G1sjtYW6Ftymkg5kf4hW8uIwAWgMqeJwxYw16Vfe6DCRg90byoV5hUsaIKCu0JX0IBHUz6IBuJ3%2BeWRn1kOHRV1JCVLAWpjPflWIXDJCnEGuV04Vwmw6Z40LMNW2osEGOqUBtc%2FnhW7myzxjnrbVuaKJI1%2BozWK8yRwo4N23KHGBy3HCX%2B%2F8cn%2FlqxNbA2nCAbH8y5kWZJ5Z2JpGz8O663g0Kl%2Ft5l0GEWYxSY43MGlWO2iozTe2wDfsy9vJK9b7CdipwwoppjRN6WQbuk%2FR33hO7uHEgeQeCYPX4MZlwi8fuj09pMNNCbQx5J8h23XYP6ebBxHnkiwD1Emi%2BDf1Y%2FM1ehStejcW&X-Amz-Signature=322981f0c78e71568ad152fb04215aad32a2e617409f0fed5178b885f2bea9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZH2LVJO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsrHoyxFGkjPFm4QYoI4dW%2BWRC%2FXHMN1Yem10xWlkPAiEAsGN%2FhfQbEUaf9xw2EUgd7oCW5WCotBPk9Kkr1dYmPTAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIjiQ%2BbxB89%2Frf%2FOSCrcA8y3n6rNIC4m%2FapKyZeOzGBU39rRMiUd1KbWK2GTQO2alw9Jy6YdKrI4vQjT4GeTgMMUWOY54%2FCOFPmONl1l%2B3nQ3WgxSTLQR%2Fc8Qw3XRi66AGbsyOQ2pFXduaKoSrzMuS6nIebJSDS0fJvVgFBBitp8%2F6UwetaVWTD3ajekYx3g7wHZb09m5Dn2GOfvQXMFSk1H3s4oxOMaUrRZ0Tsc4fng0m4FCSg9ovVsaicx1035agEyL%2FNE93cK0nB7TTIO%2BNHpDuKjPQBZsbDrbpBEFPB2QfKQ3LLCSHKF97u0cT7DnSJ5rUe7laV81pg1BGFw2WRk9aByVANbd4qchnZZEKIFcl66Ar9Hql14IZMQw8iaEa4AZLl1u42bJGxi0%2ByE%2BBm69nCoRK3C3HBEVGFTF%2BW9dnHbFircDq0YxLcoWoDiNfIrvZllqL%2FVSinh875MZwt4DyS2XX0sD0YZ9cG1vrj%2FEG8hMB40bqtMyOj0jPKroa%2FS0fRZSW38xkcuo8r1yF85G1sjtYW6Ftymkg5kf4hW8uIwAWgMqeJwxYw16Vfe6DCRg90byoV5hUsaIKCu0JX0IBHUz6IBuJ3%2BeWRn1kOHRV1JCVLAWpjPflWIXDJCnEGuV04Vwmw6Z40LMNW2osEGOqUBtc%2FnhW7myzxjnrbVuaKJI1%2BozWK8yRwo4N23KHGBy3HCX%2B%2F8cn%2FlqxNbA2nCAbH8y5kWZJ5Z2JpGz8O663g0Kl%2Ft5l0GEWYxSY43MGlWO2iozTe2wDfsy9vJK9b7CdipwwoppjRN6WQbuk%2FR33hO7uHEgeQeCYPX4MZlwi8fuj09pMNNCbQx5J8h23XYP6ebBxHnkiwD1Emi%2BDf1Y%2FM1ehStejcW&X-Amz-Signature=ceba3a12e46f84c39a0a774baa76087b5950a9be9abf02c4a6faaacdc48d2d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZH2LVJO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsrHoyxFGkjPFm4QYoI4dW%2BWRC%2FXHMN1Yem10xWlkPAiEAsGN%2FhfQbEUaf9xw2EUgd7oCW5WCotBPk9Kkr1dYmPTAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIjiQ%2BbxB89%2Frf%2FOSCrcA8y3n6rNIC4m%2FapKyZeOzGBU39rRMiUd1KbWK2GTQO2alw9Jy6YdKrI4vQjT4GeTgMMUWOY54%2FCOFPmONl1l%2B3nQ3WgxSTLQR%2Fc8Qw3XRi66AGbsyOQ2pFXduaKoSrzMuS6nIebJSDS0fJvVgFBBitp8%2F6UwetaVWTD3ajekYx3g7wHZb09m5Dn2GOfvQXMFSk1H3s4oxOMaUrRZ0Tsc4fng0m4FCSg9ovVsaicx1035agEyL%2FNE93cK0nB7TTIO%2BNHpDuKjPQBZsbDrbpBEFPB2QfKQ3LLCSHKF97u0cT7DnSJ5rUe7laV81pg1BGFw2WRk9aByVANbd4qchnZZEKIFcl66Ar9Hql14IZMQw8iaEa4AZLl1u42bJGxi0%2ByE%2BBm69nCoRK3C3HBEVGFTF%2BW9dnHbFircDq0YxLcoWoDiNfIrvZllqL%2FVSinh875MZwt4DyS2XX0sD0YZ9cG1vrj%2FEG8hMB40bqtMyOj0jPKroa%2FS0fRZSW38xkcuo8r1yF85G1sjtYW6Ftymkg5kf4hW8uIwAWgMqeJwxYw16Vfe6DCRg90byoV5hUsaIKCu0JX0IBHUz6IBuJ3%2BeWRn1kOHRV1JCVLAWpjPflWIXDJCnEGuV04Vwmw6Z40LMNW2osEGOqUBtc%2FnhW7myzxjnrbVuaKJI1%2BozWK8yRwo4N23KHGBy3HCX%2B%2F8cn%2FlqxNbA2nCAbH8y5kWZJ5Z2JpGz8O663g0Kl%2Ft5l0GEWYxSY43MGlWO2iozTe2wDfsy9vJK9b7CdipwwoppjRN6WQbuk%2FR33hO7uHEgeQeCYPX4MZlwi8fuj09pMNNCbQx5J8h23XYP6ebBxHnkiwD1Emi%2BDf1Y%2FM1ehStejcW&X-Amz-Signature=c2f8ac72ad64f1fe1957f04c45dc18d272bc2c5bb65ca4070f90ea7308fc61db&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZH2LVJO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsrHoyxFGkjPFm4QYoI4dW%2BWRC%2FXHMN1Yem10xWlkPAiEAsGN%2FhfQbEUaf9xw2EUgd7oCW5WCotBPk9Kkr1dYmPTAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIjiQ%2BbxB89%2Frf%2FOSCrcA8y3n6rNIC4m%2FapKyZeOzGBU39rRMiUd1KbWK2GTQO2alw9Jy6YdKrI4vQjT4GeTgMMUWOY54%2FCOFPmONl1l%2B3nQ3WgxSTLQR%2Fc8Qw3XRi66AGbsyOQ2pFXduaKoSrzMuS6nIebJSDS0fJvVgFBBitp8%2F6UwetaVWTD3ajekYx3g7wHZb09m5Dn2GOfvQXMFSk1H3s4oxOMaUrRZ0Tsc4fng0m4FCSg9ovVsaicx1035agEyL%2FNE93cK0nB7TTIO%2BNHpDuKjPQBZsbDrbpBEFPB2QfKQ3LLCSHKF97u0cT7DnSJ5rUe7laV81pg1BGFw2WRk9aByVANbd4qchnZZEKIFcl66Ar9Hql14IZMQw8iaEa4AZLl1u42bJGxi0%2ByE%2BBm69nCoRK3C3HBEVGFTF%2BW9dnHbFircDq0YxLcoWoDiNfIrvZllqL%2FVSinh875MZwt4DyS2XX0sD0YZ9cG1vrj%2FEG8hMB40bqtMyOj0jPKroa%2FS0fRZSW38xkcuo8r1yF85G1sjtYW6Ftymkg5kf4hW8uIwAWgMqeJwxYw16Vfe6DCRg90byoV5hUsaIKCu0JX0IBHUz6IBuJ3%2BeWRn1kOHRV1JCVLAWpjPflWIXDJCnEGuV04Vwmw6Z40LMNW2osEGOqUBtc%2FnhW7myzxjnrbVuaKJI1%2BozWK8yRwo4N23KHGBy3HCX%2B%2F8cn%2FlqxNbA2nCAbH8y5kWZJ5Z2JpGz8O663g0Kl%2Ft5l0GEWYxSY43MGlWO2iozTe2wDfsy9vJK9b7CdipwwoppjRN6WQbuk%2FR33hO7uHEgeQeCYPX4MZlwi8fuj09pMNNCbQx5J8h23XYP6ebBxHnkiwD1Emi%2BDf1Y%2FM1ehStejcW&X-Amz-Signature=1e158b2ce559fdafc6a20b1972efb419f4b0e529a825c0459825e63d0aed5499&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZH2LVJO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsrHoyxFGkjPFm4QYoI4dW%2BWRC%2FXHMN1Yem10xWlkPAiEAsGN%2FhfQbEUaf9xw2EUgd7oCW5WCotBPk9Kkr1dYmPTAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIjiQ%2BbxB89%2Frf%2FOSCrcA8y3n6rNIC4m%2FapKyZeOzGBU39rRMiUd1KbWK2GTQO2alw9Jy6YdKrI4vQjT4GeTgMMUWOY54%2FCOFPmONl1l%2B3nQ3WgxSTLQR%2Fc8Qw3XRi66AGbsyOQ2pFXduaKoSrzMuS6nIebJSDS0fJvVgFBBitp8%2F6UwetaVWTD3ajekYx3g7wHZb09m5Dn2GOfvQXMFSk1H3s4oxOMaUrRZ0Tsc4fng0m4FCSg9ovVsaicx1035agEyL%2FNE93cK0nB7TTIO%2BNHpDuKjPQBZsbDrbpBEFPB2QfKQ3LLCSHKF97u0cT7DnSJ5rUe7laV81pg1BGFw2WRk9aByVANbd4qchnZZEKIFcl66Ar9Hql14IZMQw8iaEa4AZLl1u42bJGxi0%2ByE%2BBm69nCoRK3C3HBEVGFTF%2BW9dnHbFircDq0YxLcoWoDiNfIrvZllqL%2FVSinh875MZwt4DyS2XX0sD0YZ9cG1vrj%2FEG8hMB40bqtMyOj0jPKroa%2FS0fRZSW38xkcuo8r1yF85G1sjtYW6Ftymkg5kf4hW8uIwAWgMqeJwxYw16Vfe6DCRg90byoV5hUsaIKCu0JX0IBHUz6IBuJ3%2BeWRn1kOHRV1JCVLAWpjPflWIXDJCnEGuV04Vwmw6Z40LMNW2osEGOqUBtc%2FnhW7myzxjnrbVuaKJI1%2BozWK8yRwo4N23KHGBy3HCX%2B%2F8cn%2FlqxNbA2nCAbH8y5kWZJ5Z2JpGz8O663g0Kl%2Ft5l0GEWYxSY43MGlWO2iozTe2wDfsy9vJK9b7CdipwwoppjRN6WQbuk%2FR33hO7uHEgeQeCYPX4MZlwi8fuj09pMNNCbQx5J8h23XYP6ebBxHnkiwD1Emi%2BDf1Y%2FM1ehStejcW&X-Amz-Signature=eaf643cae707d77c47829ba8f671f8b90bdef6f745e732a75ae36385e3b090fb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZH2LVJO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsrHoyxFGkjPFm4QYoI4dW%2BWRC%2FXHMN1Yem10xWlkPAiEAsGN%2FhfQbEUaf9xw2EUgd7oCW5WCotBPk9Kkr1dYmPTAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIjiQ%2BbxB89%2Frf%2FOSCrcA8y3n6rNIC4m%2FapKyZeOzGBU39rRMiUd1KbWK2GTQO2alw9Jy6YdKrI4vQjT4GeTgMMUWOY54%2FCOFPmONl1l%2B3nQ3WgxSTLQR%2Fc8Qw3XRi66AGbsyOQ2pFXduaKoSrzMuS6nIebJSDS0fJvVgFBBitp8%2F6UwetaVWTD3ajekYx3g7wHZb09m5Dn2GOfvQXMFSk1H3s4oxOMaUrRZ0Tsc4fng0m4FCSg9ovVsaicx1035agEyL%2FNE93cK0nB7TTIO%2BNHpDuKjPQBZsbDrbpBEFPB2QfKQ3LLCSHKF97u0cT7DnSJ5rUe7laV81pg1BGFw2WRk9aByVANbd4qchnZZEKIFcl66Ar9Hql14IZMQw8iaEa4AZLl1u42bJGxi0%2ByE%2BBm69nCoRK3C3HBEVGFTF%2BW9dnHbFircDq0YxLcoWoDiNfIrvZllqL%2FVSinh875MZwt4DyS2XX0sD0YZ9cG1vrj%2FEG8hMB40bqtMyOj0jPKroa%2FS0fRZSW38xkcuo8r1yF85G1sjtYW6Ftymkg5kf4hW8uIwAWgMqeJwxYw16Vfe6DCRg90byoV5hUsaIKCu0JX0IBHUz6IBuJ3%2BeWRn1kOHRV1JCVLAWpjPflWIXDJCnEGuV04Vwmw6Z40LMNW2osEGOqUBtc%2FnhW7myzxjnrbVuaKJI1%2BozWK8yRwo4N23KHGBy3HCX%2B%2F8cn%2FlqxNbA2nCAbH8y5kWZJ5Z2JpGz8O663g0Kl%2Ft5l0GEWYxSY43MGlWO2iozTe2wDfsy9vJK9b7CdipwwoppjRN6WQbuk%2FR33hO7uHEgeQeCYPX4MZlwi8fuj09pMNNCbQx5J8h23XYP6ebBxHnkiwD1Emi%2BDf1Y%2FM1ehStejcW&X-Amz-Signature=bbb6ac357c4c154698eb3c766e775fb3a4a0275a5632ab3b02b6e01b0886c14f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZH2LVJO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxsrHoyxFGkjPFm4QYoI4dW%2BWRC%2FXHMN1Yem10xWlkPAiEAsGN%2FhfQbEUaf9xw2EUgd7oCW5WCotBPk9Kkr1dYmPTAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIjiQ%2BbxB89%2Frf%2FOSCrcA8y3n6rNIC4m%2FapKyZeOzGBU39rRMiUd1KbWK2GTQO2alw9Jy6YdKrI4vQjT4GeTgMMUWOY54%2FCOFPmONl1l%2B3nQ3WgxSTLQR%2Fc8Qw3XRi66AGbsyOQ2pFXduaKoSrzMuS6nIebJSDS0fJvVgFBBitp8%2F6UwetaVWTD3ajekYx3g7wHZb09m5Dn2GOfvQXMFSk1H3s4oxOMaUrRZ0Tsc4fng0m4FCSg9ovVsaicx1035agEyL%2FNE93cK0nB7TTIO%2BNHpDuKjPQBZsbDrbpBEFPB2QfKQ3LLCSHKF97u0cT7DnSJ5rUe7laV81pg1BGFw2WRk9aByVANbd4qchnZZEKIFcl66Ar9Hql14IZMQw8iaEa4AZLl1u42bJGxi0%2ByE%2BBm69nCoRK3C3HBEVGFTF%2BW9dnHbFircDq0YxLcoWoDiNfIrvZllqL%2FVSinh875MZwt4DyS2XX0sD0YZ9cG1vrj%2FEG8hMB40bqtMyOj0jPKroa%2FS0fRZSW38xkcuo8r1yF85G1sjtYW6Ftymkg5kf4hW8uIwAWgMqeJwxYw16Vfe6DCRg90byoV5hUsaIKCu0JX0IBHUz6IBuJ3%2BeWRn1kOHRV1JCVLAWpjPflWIXDJCnEGuV04Vwmw6Z40LMNW2osEGOqUBtc%2FnhW7myzxjnrbVuaKJI1%2BozWK8yRwo4N23KHGBy3HCX%2B%2F8cn%2FlqxNbA2nCAbH8y5kWZJ5Z2JpGz8O663g0Kl%2Ft5l0GEWYxSY43MGlWO2iozTe2wDfsy9vJK9b7CdipwwoppjRN6WQbuk%2FR33hO7uHEgeQeCYPX4MZlwi8fuj09pMNNCbQx5J8h23XYP6ebBxHnkiwD1Emi%2BDf1Y%2FM1ehStejcW&X-Amz-Signature=6b8a0d1b302bacdd413b4a6b7701be0fc3e51cccabd0560b91bffdac9589e75a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
