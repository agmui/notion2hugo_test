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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22FRLRA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHUb6NLy1uB5rhNxAMHR04ShksTTwe7oFxnaLDkD0VgNAiEAlEyQTQQSPeD28WzHtVMOIkw6aLHZ6rb%2BTJId2D7luyUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIcujeXx22L0pORXIircA2vrPKRDXy2FfESyesUE%2FIg9XwgEYSvLQbhQ0t%2B%2BjgziVp6jCKiOrhQhg05PzPa8g%2FdacjCe41olMqhLfM%2BrFJsy9lKAhQqNcJyUomZhrIKVsUlKFQVDKh7RBefHRG3kWbFCz8yraguHkjNW4vErj8Cbq6SPj5XcRV%2FRsNlBDEal0PYa9OWbv6WuGSQDG9jXyGbzJo5IlUkLRneQoiEzdCT6Jjj70NKaFsEhPX68Xy9%2FeMgUbCcNyqt4XQaQRLTNMMJn23iEpUQuepKGdSA9mSowKy5WRudVMlUZu4O257TsHZKZTZOZ52B1d5l%2F2QZnHiH7eBvTFrg3C0N0SJVu7dHX069X4lrq0B%2Fp2%2FEeJbmSBwSJ0sP41tWX4l1zcaVTjj9hfbIHu%2BJbSaPVT75roS59KaExtBpFq%2F1f%2FpygtruU0DYzREOAXC36QAnoITQgdCBuPwmA%2Fj9cMx4rL7DCnY0Q8i2AtQbZFr%2FtIYHbA3ta8gNGZOmOBdtdachfIbds4xNMdB%2FM1ARzOWpId%2FguIJKMAJKGgHDhXbKPyqSdMuPrOO5KTgPKfTKihy%2BLwmw4khalmEe2RO31BUmzZJrJLnOafPY6HPIB4q0dkbQT%2FtfjMC3DBzIDRCNAGsnXMNnqvL0GOqUBiSlOh%2BumANqo83nBSjOc0ZYP0SmV9LWsUuixdiWFfv308ugngZymlo49XblhtyMMthl8V2k0mCHmTRj7TDl0GCP6fLIjmrtyuBAXsHTQNvxQVoHYqPADzawX7WA0AhwfUo%2FKJSou8YOUcEicXgzW0AX841zluhFlSI7%2B8OyaR2Acpeep0pBkjnP13QIanKrhpNW2HUtrTcnCo%2BgRN8%2B9CVV5gDFn&X-Amz-Signature=80d6736597912a99eebd27c3579580e47915496af6f092d5bb86ae1098a7dc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22FRLRA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHUb6NLy1uB5rhNxAMHR04ShksTTwe7oFxnaLDkD0VgNAiEAlEyQTQQSPeD28WzHtVMOIkw6aLHZ6rb%2BTJId2D7luyUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIcujeXx22L0pORXIircA2vrPKRDXy2FfESyesUE%2FIg9XwgEYSvLQbhQ0t%2B%2BjgziVp6jCKiOrhQhg05PzPa8g%2FdacjCe41olMqhLfM%2BrFJsy9lKAhQqNcJyUomZhrIKVsUlKFQVDKh7RBefHRG3kWbFCz8yraguHkjNW4vErj8Cbq6SPj5XcRV%2FRsNlBDEal0PYa9OWbv6WuGSQDG9jXyGbzJo5IlUkLRneQoiEzdCT6Jjj70NKaFsEhPX68Xy9%2FeMgUbCcNyqt4XQaQRLTNMMJn23iEpUQuepKGdSA9mSowKy5WRudVMlUZu4O257TsHZKZTZOZ52B1d5l%2F2QZnHiH7eBvTFrg3C0N0SJVu7dHX069X4lrq0B%2Fp2%2FEeJbmSBwSJ0sP41tWX4l1zcaVTjj9hfbIHu%2BJbSaPVT75roS59KaExtBpFq%2F1f%2FpygtruU0DYzREOAXC36QAnoITQgdCBuPwmA%2Fj9cMx4rL7DCnY0Q8i2AtQbZFr%2FtIYHbA3ta8gNGZOmOBdtdachfIbds4xNMdB%2FM1ARzOWpId%2FguIJKMAJKGgHDhXbKPyqSdMuPrOO5KTgPKfTKihy%2BLwmw4khalmEe2RO31BUmzZJrJLnOafPY6HPIB4q0dkbQT%2FtfjMC3DBzIDRCNAGsnXMNnqvL0GOqUBiSlOh%2BumANqo83nBSjOc0ZYP0SmV9LWsUuixdiWFfv308ugngZymlo49XblhtyMMthl8V2k0mCHmTRj7TDl0GCP6fLIjmrtyuBAXsHTQNvxQVoHYqPADzawX7WA0AhwfUo%2FKJSou8YOUcEicXgzW0AX841zluhFlSI7%2B8OyaR2Acpeep0pBkjnP13QIanKrhpNW2HUtrTcnCo%2BgRN8%2B9CVV5gDFn&X-Amz-Signature=32461508fc921744b2c4147a315308004104e5f9707a8ce65aebb121c7ad85f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22FRLRA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHUb6NLy1uB5rhNxAMHR04ShksTTwe7oFxnaLDkD0VgNAiEAlEyQTQQSPeD28WzHtVMOIkw6aLHZ6rb%2BTJId2D7luyUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIcujeXx22L0pORXIircA2vrPKRDXy2FfESyesUE%2FIg9XwgEYSvLQbhQ0t%2B%2BjgziVp6jCKiOrhQhg05PzPa8g%2FdacjCe41olMqhLfM%2BrFJsy9lKAhQqNcJyUomZhrIKVsUlKFQVDKh7RBefHRG3kWbFCz8yraguHkjNW4vErj8Cbq6SPj5XcRV%2FRsNlBDEal0PYa9OWbv6WuGSQDG9jXyGbzJo5IlUkLRneQoiEzdCT6Jjj70NKaFsEhPX68Xy9%2FeMgUbCcNyqt4XQaQRLTNMMJn23iEpUQuepKGdSA9mSowKy5WRudVMlUZu4O257TsHZKZTZOZ52B1d5l%2F2QZnHiH7eBvTFrg3C0N0SJVu7dHX069X4lrq0B%2Fp2%2FEeJbmSBwSJ0sP41tWX4l1zcaVTjj9hfbIHu%2BJbSaPVT75roS59KaExtBpFq%2F1f%2FpygtruU0DYzREOAXC36QAnoITQgdCBuPwmA%2Fj9cMx4rL7DCnY0Q8i2AtQbZFr%2FtIYHbA3ta8gNGZOmOBdtdachfIbds4xNMdB%2FM1ARzOWpId%2FguIJKMAJKGgHDhXbKPyqSdMuPrOO5KTgPKfTKihy%2BLwmw4khalmEe2RO31BUmzZJrJLnOafPY6HPIB4q0dkbQT%2FtfjMC3DBzIDRCNAGsnXMNnqvL0GOqUBiSlOh%2BumANqo83nBSjOc0ZYP0SmV9LWsUuixdiWFfv308ugngZymlo49XblhtyMMthl8V2k0mCHmTRj7TDl0GCP6fLIjmrtyuBAXsHTQNvxQVoHYqPADzawX7WA0AhwfUo%2FKJSou8YOUcEicXgzW0AX841zluhFlSI7%2B8OyaR2Acpeep0pBkjnP13QIanKrhpNW2HUtrTcnCo%2BgRN8%2B9CVV5gDFn&X-Amz-Signature=e1fe49974ea74e256a8dab90b6291b6904f3c950de01fa68bed7682eea347606&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22FRLRA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHUb6NLy1uB5rhNxAMHR04ShksTTwe7oFxnaLDkD0VgNAiEAlEyQTQQSPeD28WzHtVMOIkw6aLHZ6rb%2BTJId2D7luyUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIcujeXx22L0pORXIircA2vrPKRDXy2FfESyesUE%2FIg9XwgEYSvLQbhQ0t%2B%2BjgziVp6jCKiOrhQhg05PzPa8g%2FdacjCe41olMqhLfM%2BrFJsy9lKAhQqNcJyUomZhrIKVsUlKFQVDKh7RBefHRG3kWbFCz8yraguHkjNW4vErj8Cbq6SPj5XcRV%2FRsNlBDEal0PYa9OWbv6WuGSQDG9jXyGbzJo5IlUkLRneQoiEzdCT6Jjj70NKaFsEhPX68Xy9%2FeMgUbCcNyqt4XQaQRLTNMMJn23iEpUQuepKGdSA9mSowKy5WRudVMlUZu4O257TsHZKZTZOZ52B1d5l%2F2QZnHiH7eBvTFrg3C0N0SJVu7dHX069X4lrq0B%2Fp2%2FEeJbmSBwSJ0sP41tWX4l1zcaVTjj9hfbIHu%2BJbSaPVT75roS59KaExtBpFq%2F1f%2FpygtruU0DYzREOAXC36QAnoITQgdCBuPwmA%2Fj9cMx4rL7DCnY0Q8i2AtQbZFr%2FtIYHbA3ta8gNGZOmOBdtdachfIbds4xNMdB%2FM1ARzOWpId%2FguIJKMAJKGgHDhXbKPyqSdMuPrOO5KTgPKfTKihy%2BLwmw4khalmEe2RO31BUmzZJrJLnOafPY6HPIB4q0dkbQT%2FtfjMC3DBzIDRCNAGsnXMNnqvL0GOqUBiSlOh%2BumANqo83nBSjOc0ZYP0SmV9LWsUuixdiWFfv308ugngZymlo49XblhtyMMthl8V2k0mCHmTRj7TDl0GCP6fLIjmrtyuBAXsHTQNvxQVoHYqPADzawX7WA0AhwfUo%2FKJSou8YOUcEicXgzW0AX841zluhFlSI7%2B8OyaR2Acpeep0pBkjnP13QIanKrhpNW2HUtrTcnCo%2BgRN8%2B9CVV5gDFn&X-Amz-Signature=5debf7aa06877c69fd5af9d2b630a6b1219bd794b0c30541440e69284bdf4076&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22FRLRA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHUb6NLy1uB5rhNxAMHR04ShksTTwe7oFxnaLDkD0VgNAiEAlEyQTQQSPeD28WzHtVMOIkw6aLHZ6rb%2BTJId2D7luyUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIcujeXx22L0pORXIircA2vrPKRDXy2FfESyesUE%2FIg9XwgEYSvLQbhQ0t%2B%2BjgziVp6jCKiOrhQhg05PzPa8g%2FdacjCe41olMqhLfM%2BrFJsy9lKAhQqNcJyUomZhrIKVsUlKFQVDKh7RBefHRG3kWbFCz8yraguHkjNW4vErj8Cbq6SPj5XcRV%2FRsNlBDEal0PYa9OWbv6WuGSQDG9jXyGbzJo5IlUkLRneQoiEzdCT6Jjj70NKaFsEhPX68Xy9%2FeMgUbCcNyqt4XQaQRLTNMMJn23iEpUQuepKGdSA9mSowKy5WRudVMlUZu4O257TsHZKZTZOZ52B1d5l%2F2QZnHiH7eBvTFrg3C0N0SJVu7dHX069X4lrq0B%2Fp2%2FEeJbmSBwSJ0sP41tWX4l1zcaVTjj9hfbIHu%2BJbSaPVT75roS59KaExtBpFq%2F1f%2FpygtruU0DYzREOAXC36QAnoITQgdCBuPwmA%2Fj9cMx4rL7DCnY0Q8i2AtQbZFr%2FtIYHbA3ta8gNGZOmOBdtdachfIbds4xNMdB%2FM1ARzOWpId%2FguIJKMAJKGgHDhXbKPyqSdMuPrOO5KTgPKfTKihy%2BLwmw4khalmEe2RO31BUmzZJrJLnOafPY6HPIB4q0dkbQT%2FtfjMC3DBzIDRCNAGsnXMNnqvL0GOqUBiSlOh%2BumANqo83nBSjOc0ZYP0SmV9LWsUuixdiWFfv308ugngZymlo49XblhtyMMthl8V2k0mCHmTRj7TDl0GCP6fLIjmrtyuBAXsHTQNvxQVoHYqPADzawX7WA0AhwfUo%2FKJSou8YOUcEicXgzW0AX841zluhFlSI7%2B8OyaR2Acpeep0pBkjnP13QIanKrhpNW2HUtrTcnCo%2BgRN8%2B9CVV5gDFn&X-Amz-Signature=ca91a6215a451c13fa608114893dfb7bc1071f19931cc24e842f9b6d6d196683&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22FRLRA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHUb6NLy1uB5rhNxAMHR04ShksTTwe7oFxnaLDkD0VgNAiEAlEyQTQQSPeD28WzHtVMOIkw6aLHZ6rb%2BTJId2D7luyUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIcujeXx22L0pORXIircA2vrPKRDXy2FfESyesUE%2FIg9XwgEYSvLQbhQ0t%2B%2BjgziVp6jCKiOrhQhg05PzPa8g%2FdacjCe41olMqhLfM%2BrFJsy9lKAhQqNcJyUomZhrIKVsUlKFQVDKh7RBefHRG3kWbFCz8yraguHkjNW4vErj8Cbq6SPj5XcRV%2FRsNlBDEal0PYa9OWbv6WuGSQDG9jXyGbzJo5IlUkLRneQoiEzdCT6Jjj70NKaFsEhPX68Xy9%2FeMgUbCcNyqt4XQaQRLTNMMJn23iEpUQuepKGdSA9mSowKy5WRudVMlUZu4O257TsHZKZTZOZ52B1d5l%2F2QZnHiH7eBvTFrg3C0N0SJVu7dHX069X4lrq0B%2Fp2%2FEeJbmSBwSJ0sP41tWX4l1zcaVTjj9hfbIHu%2BJbSaPVT75roS59KaExtBpFq%2F1f%2FpygtruU0DYzREOAXC36QAnoITQgdCBuPwmA%2Fj9cMx4rL7DCnY0Q8i2AtQbZFr%2FtIYHbA3ta8gNGZOmOBdtdachfIbds4xNMdB%2FM1ARzOWpId%2FguIJKMAJKGgHDhXbKPyqSdMuPrOO5KTgPKfTKihy%2BLwmw4khalmEe2RO31BUmzZJrJLnOafPY6HPIB4q0dkbQT%2FtfjMC3DBzIDRCNAGsnXMNnqvL0GOqUBiSlOh%2BumANqo83nBSjOc0ZYP0SmV9LWsUuixdiWFfv308ugngZymlo49XblhtyMMthl8V2k0mCHmTRj7TDl0GCP6fLIjmrtyuBAXsHTQNvxQVoHYqPADzawX7WA0AhwfUo%2FKJSou8YOUcEicXgzW0AX841zluhFlSI7%2B8OyaR2Acpeep0pBkjnP13QIanKrhpNW2HUtrTcnCo%2BgRN8%2B9CVV5gDFn&X-Amz-Signature=a135995ec4386b58a3b56cfdb6a4a10fdff896d4438838cdfc0ddc70079c465f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22FRLRA%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHUb6NLy1uB5rhNxAMHR04ShksTTwe7oFxnaLDkD0VgNAiEAlEyQTQQSPeD28WzHtVMOIkw6aLHZ6rb%2BTJId2D7luyUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIcujeXx22L0pORXIircA2vrPKRDXy2FfESyesUE%2FIg9XwgEYSvLQbhQ0t%2B%2BjgziVp6jCKiOrhQhg05PzPa8g%2FdacjCe41olMqhLfM%2BrFJsy9lKAhQqNcJyUomZhrIKVsUlKFQVDKh7RBefHRG3kWbFCz8yraguHkjNW4vErj8Cbq6SPj5XcRV%2FRsNlBDEal0PYa9OWbv6WuGSQDG9jXyGbzJo5IlUkLRneQoiEzdCT6Jjj70NKaFsEhPX68Xy9%2FeMgUbCcNyqt4XQaQRLTNMMJn23iEpUQuepKGdSA9mSowKy5WRudVMlUZu4O257TsHZKZTZOZ52B1d5l%2F2QZnHiH7eBvTFrg3C0N0SJVu7dHX069X4lrq0B%2Fp2%2FEeJbmSBwSJ0sP41tWX4l1zcaVTjj9hfbIHu%2BJbSaPVT75roS59KaExtBpFq%2F1f%2FpygtruU0DYzREOAXC36QAnoITQgdCBuPwmA%2Fj9cMx4rL7DCnY0Q8i2AtQbZFr%2FtIYHbA3ta8gNGZOmOBdtdachfIbds4xNMdB%2FM1ARzOWpId%2FguIJKMAJKGgHDhXbKPyqSdMuPrOO5KTgPKfTKihy%2BLwmw4khalmEe2RO31BUmzZJrJLnOafPY6HPIB4q0dkbQT%2FtfjMC3DBzIDRCNAGsnXMNnqvL0GOqUBiSlOh%2BumANqo83nBSjOc0ZYP0SmV9LWsUuixdiWFfv308ugngZymlo49XblhtyMMthl8V2k0mCHmTRj7TDl0GCP6fLIjmrtyuBAXsHTQNvxQVoHYqPADzawX7WA0AhwfUo%2FKJSou8YOUcEicXgzW0AX841zluhFlSI7%2B8OyaR2Acpeep0pBkjnP13QIanKrhpNW2HUtrTcnCo%2BgRN8%2B9CVV5gDFn&X-Amz-Signature=efd59e47cbefe22f888c2c27ea9759a654647ca1f2c0784dbc25cf49202afad0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
