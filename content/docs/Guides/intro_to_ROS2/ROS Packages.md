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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H33SZLA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ0jIz2lfS3Lsn%2FgyJ%2F4MfuO9oi9mPu6oPOlnnkv4mwIhAO%2BygYwabR2MZjlrPDdynDzRtn1T4nUh%2F2AqXlMVSHoEKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygB5DcocJSyzfL%2Flgq3AN5q4YMDjwEModMtydzAyjWFgqDsUjDj75HjuOy%2Bupq%2F5QjLAxvg5zp%2FWQCwfek4tzpVXYGkVGA0V6ioWA678Vur92e%2FQFpl1lHQgAllaqFncFtqY1CNRwBpXsdSlAvKF8q9D%2BN38Pm2Xfx2a3bpN6TrnK3jebObs%2BB1TQUYTnx4so1heBoAtw5wXQaGrbMsOEY1aAdZ57GtLEOK8eLBn9IqnS2%2FIFaxjUTQBYU69re6ZE3wZKxDeRK4O34W2IfkGD2MtSU3zCwBE4IaDtfEwVb7kg9V2dkSHGJEn3iQFQf%2FfnpNhxg5NGdT32cVtduTvi1x78y8qepQ%2B%2F8wiHrt%2BEwprVTLF34WCSeXwgappHKaGQPll1UPIsgjIv9OmKBCfspqiw34uVQFZv1HSiGdMwhbHIAMTMpW5s%2BiVR2hmXQPa%2Fq1%2B6Z2sTZs8LpmbFAY9Ke8XxX1lQHlH9djbf6cEKI5qWes79z9TfEXGzU2Lm2nXdEm%2BHiz1ejen8k6jCV2d9keN1Yo2qW1QQwG%2BOhifRHOvGBOuIknuwdOI5NfslWlwYW2gWixKSeO3IGlxtRRXfu6htr0vEQZl41bh4lUW863hBPaHXIyptxbg8Ks0GcKHvs5jXZIVTr6v0BCjDz%2BevDBjqkAT%2FQZgyspDSaoxQk4V%2FHcKuWrIc2Fl%2FaMuPeuaddy9ymUyUbvJi6wdCr09CGj3iqRimBArDvLbNdnpU8V3qOWEGz5vRHx7xVdajcxD8tsXoUV7DmMH8CQ02FWjBermQmOnPAQKgi3dBby2SxQhPOjYOYnED11XxM2MdJ%2FBr1mcWsVz9JiHbT2OWP9q51OJcgjdEYflaTHULiGjw5Jku1OBMOEDzJ&X-Amz-Signature=af94cdd89409106390080c3bfac354caae01fd6cfe97589cade1645532ed52c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H33SZLA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ0jIz2lfS3Lsn%2FgyJ%2F4MfuO9oi9mPu6oPOlnnkv4mwIhAO%2BygYwabR2MZjlrPDdynDzRtn1T4nUh%2F2AqXlMVSHoEKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygB5DcocJSyzfL%2Flgq3AN5q4YMDjwEModMtydzAyjWFgqDsUjDj75HjuOy%2Bupq%2F5QjLAxvg5zp%2FWQCwfek4tzpVXYGkVGA0V6ioWA678Vur92e%2FQFpl1lHQgAllaqFncFtqY1CNRwBpXsdSlAvKF8q9D%2BN38Pm2Xfx2a3bpN6TrnK3jebObs%2BB1TQUYTnx4so1heBoAtw5wXQaGrbMsOEY1aAdZ57GtLEOK8eLBn9IqnS2%2FIFaxjUTQBYU69re6ZE3wZKxDeRK4O34W2IfkGD2MtSU3zCwBE4IaDtfEwVb7kg9V2dkSHGJEn3iQFQf%2FfnpNhxg5NGdT32cVtduTvi1x78y8qepQ%2B%2F8wiHrt%2BEwprVTLF34WCSeXwgappHKaGQPll1UPIsgjIv9OmKBCfspqiw34uVQFZv1HSiGdMwhbHIAMTMpW5s%2BiVR2hmXQPa%2Fq1%2B6Z2sTZs8LpmbFAY9Ke8XxX1lQHlH9djbf6cEKI5qWes79z9TfEXGzU2Lm2nXdEm%2BHiz1ejen8k6jCV2d9keN1Yo2qW1QQwG%2BOhifRHOvGBOuIknuwdOI5NfslWlwYW2gWixKSeO3IGlxtRRXfu6htr0vEQZl41bh4lUW863hBPaHXIyptxbg8Ks0GcKHvs5jXZIVTr6v0BCjDz%2BevDBjqkAT%2FQZgyspDSaoxQk4V%2FHcKuWrIc2Fl%2FaMuPeuaddy9ymUyUbvJi6wdCr09CGj3iqRimBArDvLbNdnpU8V3qOWEGz5vRHx7xVdajcxD8tsXoUV7DmMH8CQ02FWjBermQmOnPAQKgi3dBby2SxQhPOjYOYnED11XxM2MdJ%2FBr1mcWsVz9JiHbT2OWP9q51OJcgjdEYflaTHULiGjw5Jku1OBMOEDzJ&X-Amz-Signature=e02870e3f92864fe843b18a5565b126527ffaaeff596e03b4a02c175f528cd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H33SZLA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ0jIz2lfS3Lsn%2FgyJ%2F4MfuO9oi9mPu6oPOlnnkv4mwIhAO%2BygYwabR2MZjlrPDdynDzRtn1T4nUh%2F2AqXlMVSHoEKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygB5DcocJSyzfL%2Flgq3AN5q4YMDjwEModMtydzAyjWFgqDsUjDj75HjuOy%2Bupq%2F5QjLAxvg5zp%2FWQCwfek4tzpVXYGkVGA0V6ioWA678Vur92e%2FQFpl1lHQgAllaqFncFtqY1CNRwBpXsdSlAvKF8q9D%2BN38Pm2Xfx2a3bpN6TrnK3jebObs%2BB1TQUYTnx4so1heBoAtw5wXQaGrbMsOEY1aAdZ57GtLEOK8eLBn9IqnS2%2FIFaxjUTQBYU69re6ZE3wZKxDeRK4O34W2IfkGD2MtSU3zCwBE4IaDtfEwVb7kg9V2dkSHGJEn3iQFQf%2FfnpNhxg5NGdT32cVtduTvi1x78y8qepQ%2B%2F8wiHrt%2BEwprVTLF34WCSeXwgappHKaGQPll1UPIsgjIv9OmKBCfspqiw34uVQFZv1HSiGdMwhbHIAMTMpW5s%2BiVR2hmXQPa%2Fq1%2B6Z2sTZs8LpmbFAY9Ke8XxX1lQHlH9djbf6cEKI5qWes79z9TfEXGzU2Lm2nXdEm%2BHiz1ejen8k6jCV2d9keN1Yo2qW1QQwG%2BOhifRHOvGBOuIknuwdOI5NfslWlwYW2gWixKSeO3IGlxtRRXfu6htr0vEQZl41bh4lUW863hBPaHXIyptxbg8Ks0GcKHvs5jXZIVTr6v0BCjDz%2BevDBjqkAT%2FQZgyspDSaoxQk4V%2FHcKuWrIc2Fl%2FaMuPeuaddy9ymUyUbvJi6wdCr09CGj3iqRimBArDvLbNdnpU8V3qOWEGz5vRHx7xVdajcxD8tsXoUV7DmMH8CQ02FWjBermQmOnPAQKgi3dBby2SxQhPOjYOYnED11XxM2MdJ%2FBr1mcWsVz9JiHbT2OWP9q51OJcgjdEYflaTHULiGjw5Jku1OBMOEDzJ&X-Amz-Signature=ee855cff6e51331c9a50a8149d52da1c6859bf7996e3b102a1b1c11e39763f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H33SZLA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ0jIz2lfS3Lsn%2FgyJ%2F4MfuO9oi9mPu6oPOlnnkv4mwIhAO%2BygYwabR2MZjlrPDdynDzRtn1T4nUh%2F2AqXlMVSHoEKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygB5DcocJSyzfL%2Flgq3AN5q4YMDjwEModMtydzAyjWFgqDsUjDj75HjuOy%2Bupq%2F5QjLAxvg5zp%2FWQCwfek4tzpVXYGkVGA0V6ioWA678Vur92e%2FQFpl1lHQgAllaqFncFtqY1CNRwBpXsdSlAvKF8q9D%2BN38Pm2Xfx2a3bpN6TrnK3jebObs%2BB1TQUYTnx4so1heBoAtw5wXQaGrbMsOEY1aAdZ57GtLEOK8eLBn9IqnS2%2FIFaxjUTQBYU69re6ZE3wZKxDeRK4O34W2IfkGD2MtSU3zCwBE4IaDtfEwVb7kg9V2dkSHGJEn3iQFQf%2FfnpNhxg5NGdT32cVtduTvi1x78y8qepQ%2B%2F8wiHrt%2BEwprVTLF34WCSeXwgappHKaGQPll1UPIsgjIv9OmKBCfspqiw34uVQFZv1HSiGdMwhbHIAMTMpW5s%2BiVR2hmXQPa%2Fq1%2B6Z2sTZs8LpmbFAY9Ke8XxX1lQHlH9djbf6cEKI5qWes79z9TfEXGzU2Lm2nXdEm%2BHiz1ejen8k6jCV2d9keN1Yo2qW1QQwG%2BOhifRHOvGBOuIknuwdOI5NfslWlwYW2gWixKSeO3IGlxtRRXfu6htr0vEQZl41bh4lUW863hBPaHXIyptxbg8Ks0GcKHvs5jXZIVTr6v0BCjDz%2BevDBjqkAT%2FQZgyspDSaoxQk4V%2FHcKuWrIc2Fl%2FaMuPeuaddy9ymUyUbvJi6wdCr09CGj3iqRimBArDvLbNdnpU8V3qOWEGz5vRHx7xVdajcxD8tsXoUV7DmMH8CQ02FWjBermQmOnPAQKgi3dBby2SxQhPOjYOYnED11XxM2MdJ%2FBr1mcWsVz9JiHbT2OWP9q51OJcgjdEYflaTHULiGjw5Jku1OBMOEDzJ&X-Amz-Signature=27d96b1789265948eee19f922c46c366ac1b0f37ff6ebb4507fc28d798a5fa9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H33SZLA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ0jIz2lfS3Lsn%2FgyJ%2F4MfuO9oi9mPu6oPOlnnkv4mwIhAO%2BygYwabR2MZjlrPDdynDzRtn1T4nUh%2F2AqXlMVSHoEKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygB5DcocJSyzfL%2Flgq3AN5q4YMDjwEModMtydzAyjWFgqDsUjDj75HjuOy%2Bupq%2F5QjLAxvg5zp%2FWQCwfek4tzpVXYGkVGA0V6ioWA678Vur92e%2FQFpl1lHQgAllaqFncFtqY1CNRwBpXsdSlAvKF8q9D%2BN38Pm2Xfx2a3bpN6TrnK3jebObs%2BB1TQUYTnx4so1heBoAtw5wXQaGrbMsOEY1aAdZ57GtLEOK8eLBn9IqnS2%2FIFaxjUTQBYU69re6ZE3wZKxDeRK4O34W2IfkGD2MtSU3zCwBE4IaDtfEwVb7kg9V2dkSHGJEn3iQFQf%2FfnpNhxg5NGdT32cVtduTvi1x78y8qepQ%2B%2F8wiHrt%2BEwprVTLF34WCSeXwgappHKaGQPll1UPIsgjIv9OmKBCfspqiw34uVQFZv1HSiGdMwhbHIAMTMpW5s%2BiVR2hmXQPa%2Fq1%2B6Z2sTZs8LpmbFAY9Ke8XxX1lQHlH9djbf6cEKI5qWes79z9TfEXGzU2Lm2nXdEm%2BHiz1ejen8k6jCV2d9keN1Yo2qW1QQwG%2BOhifRHOvGBOuIknuwdOI5NfslWlwYW2gWixKSeO3IGlxtRRXfu6htr0vEQZl41bh4lUW863hBPaHXIyptxbg8Ks0GcKHvs5jXZIVTr6v0BCjDz%2BevDBjqkAT%2FQZgyspDSaoxQk4V%2FHcKuWrIc2Fl%2FaMuPeuaddy9ymUyUbvJi6wdCr09CGj3iqRimBArDvLbNdnpU8V3qOWEGz5vRHx7xVdajcxD8tsXoUV7DmMH8CQ02FWjBermQmOnPAQKgi3dBby2SxQhPOjYOYnED11XxM2MdJ%2FBr1mcWsVz9JiHbT2OWP9q51OJcgjdEYflaTHULiGjw5Jku1OBMOEDzJ&X-Amz-Signature=c5c965755032de060d0535cce4c6af4349136de967207dd074836cc371f8dbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H33SZLA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ0jIz2lfS3Lsn%2FgyJ%2F4MfuO9oi9mPu6oPOlnnkv4mwIhAO%2BygYwabR2MZjlrPDdynDzRtn1T4nUh%2F2AqXlMVSHoEKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygB5DcocJSyzfL%2Flgq3AN5q4YMDjwEModMtydzAyjWFgqDsUjDj75HjuOy%2Bupq%2F5QjLAxvg5zp%2FWQCwfek4tzpVXYGkVGA0V6ioWA678Vur92e%2FQFpl1lHQgAllaqFncFtqY1CNRwBpXsdSlAvKF8q9D%2BN38Pm2Xfx2a3bpN6TrnK3jebObs%2BB1TQUYTnx4so1heBoAtw5wXQaGrbMsOEY1aAdZ57GtLEOK8eLBn9IqnS2%2FIFaxjUTQBYU69re6ZE3wZKxDeRK4O34W2IfkGD2MtSU3zCwBE4IaDtfEwVb7kg9V2dkSHGJEn3iQFQf%2FfnpNhxg5NGdT32cVtduTvi1x78y8qepQ%2B%2F8wiHrt%2BEwprVTLF34WCSeXwgappHKaGQPll1UPIsgjIv9OmKBCfspqiw34uVQFZv1HSiGdMwhbHIAMTMpW5s%2BiVR2hmXQPa%2Fq1%2B6Z2sTZs8LpmbFAY9Ke8XxX1lQHlH9djbf6cEKI5qWes79z9TfEXGzU2Lm2nXdEm%2BHiz1ejen8k6jCV2d9keN1Yo2qW1QQwG%2BOhifRHOvGBOuIknuwdOI5NfslWlwYW2gWixKSeO3IGlxtRRXfu6htr0vEQZl41bh4lUW863hBPaHXIyptxbg8Ks0GcKHvs5jXZIVTr6v0BCjDz%2BevDBjqkAT%2FQZgyspDSaoxQk4V%2FHcKuWrIc2Fl%2FaMuPeuaddy9ymUyUbvJi6wdCr09CGj3iqRimBArDvLbNdnpU8V3qOWEGz5vRHx7xVdajcxD8tsXoUV7DmMH8CQ02FWjBermQmOnPAQKgi3dBby2SxQhPOjYOYnED11XxM2MdJ%2FBr1mcWsVz9JiHbT2OWP9q51OJcgjdEYflaTHULiGjw5Jku1OBMOEDzJ&X-Amz-Signature=c49b60dc633ac2cd1af0df14e6aa163cb1aa425af97e9673593960e13d28f9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H33SZLA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T024348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnQ0jIz2lfS3Lsn%2FgyJ%2F4MfuO9oi9mPu6oPOlnnkv4mwIhAO%2BygYwabR2MZjlrPDdynDzRtn1T4nUh%2F2AqXlMVSHoEKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygB5DcocJSyzfL%2Flgq3AN5q4YMDjwEModMtydzAyjWFgqDsUjDj75HjuOy%2Bupq%2F5QjLAxvg5zp%2FWQCwfek4tzpVXYGkVGA0V6ioWA678Vur92e%2FQFpl1lHQgAllaqFncFtqY1CNRwBpXsdSlAvKF8q9D%2BN38Pm2Xfx2a3bpN6TrnK3jebObs%2BB1TQUYTnx4so1heBoAtw5wXQaGrbMsOEY1aAdZ57GtLEOK8eLBn9IqnS2%2FIFaxjUTQBYU69re6ZE3wZKxDeRK4O34W2IfkGD2MtSU3zCwBE4IaDtfEwVb7kg9V2dkSHGJEn3iQFQf%2FfnpNhxg5NGdT32cVtduTvi1x78y8qepQ%2B%2F8wiHrt%2BEwprVTLF34WCSeXwgappHKaGQPll1UPIsgjIv9OmKBCfspqiw34uVQFZv1HSiGdMwhbHIAMTMpW5s%2BiVR2hmXQPa%2Fq1%2B6Z2sTZs8LpmbFAY9Ke8XxX1lQHlH9djbf6cEKI5qWes79z9TfEXGzU2Lm2nXdEm%2BHiz1ejen8k6jCV2d9keN1Yo2qW1QQwG%2BOhifRHOvGBOuIknuwdOI5NfslWlwYW2gWixKSeO3IGlxtRRXfu6htr0vEQZl41bh4lUW863hBPaHXIyptxbg8Ks0GcKHvs5jXZIVTr6v0BCjDz%2BevDBjqkAT%2FQZgyspDSaoxQk4V%2FHcKuWrIc2Fl%2FaMuPeuaddy9ymUyUbvJi6wdCr09CGj3iqRimBArDvLbNdnpU8V3qOWEGz5vRHx7xVdajcxD8tsXoUV7DmMH8CQ02FWjBermQmOnPAQKgi3dBby2SxQhPOjYOYnED11XxM2MdJ%2FBr1mcWsVz9JiHbT2OWP9q51OJcgjdEYflaTHULiGjw5Jku1OBMOEDzJ&X-Amz-Signature=faa7f2c5421de98a7e3f580a0d6e5731127e7a24cfdfb01fd95f71b8d5d5bde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
