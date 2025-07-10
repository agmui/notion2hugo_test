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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=74a2101c6eab44047013d7beaee8d71f5618f5c2c35785c763c1a3b8a51c23c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=7930e962c58f521a1800e7650e6d0eb1fa109cdae624b3e322db77a651a17fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=3db04431536415abaad5503ef4a70083f0d3a5e312f398b38cdefca62e44fe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=9c75713c01b6443029197d509495019b87f42cea1fb06bc4ed27de28d3f76df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=747b3089ebe6be7898f43d74aca6b91846e2b3dcec99b3481a97c3838a7afcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=2593fd6f25f652702c7ccf73d830f4f4eef01c0b2206f0b7a60dfc4d4c26fdaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGULIJX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXj3ppCa685Nr5v9drpnYl8GQ5ohn74GzlYWAHYqdmEAiA%2BgOik%2FRuatGur0pA2z4%2BW2%2BP%2BOUQHsT4F8GYGmT40OSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEk4HJZN7t3EHYKDsKtwDnsWyu1IXZbEA8QKAeDxivIuTbksA%2BD4Yt0%2BTyrTSd281vW7AGfanc9UL6hiP9Dq0RgD5s4azkkno836Qfy6bNTvI3yp4v6a3aiw2KthgEZseiSXditQtpXHkZqvfHlXbBSYZ2xoguwRq1J%2FM5k%2BT%2FZ2miGIO7AAnDbHfYD8gZ4qvyKAAFh2l6KMpdW28Ibuqw9is2UKwVVfAHeyo6%2FHfG2KM64sQpjzxcBeugZTAzIw9i70wiM59WCRPRCPyml04Cp78lidyxliPKP9pB6wxmBM9yzt%2FpggvqkEBgu4pqkb9EcXHviAIdF%2B5VqGAR1dOBY8mS2IZQDPCw16LFg89qFaE52OJxVWW3rUl7sSB9P6KdU%2BjraPVKy30%2Fe1SRs2oCDsjpSqZGaM1GDpAWzmmVvjafa0IrvxMQzbNQ03fjIiYLBCkZv71VDB4dV%2FGcCI67JoDjBc3mHYN9gGVjXw44FAatSxLjfqGpMqlOZCMU2IH4l1a3GdBY4ReSdwYWmKKsDwOvkd84fOSSetKshixQx13aWm%2Bbhj454EQa4fMvss9yi743IxyGE0t0nmJO%2BX9KrnfGVle2Tq7sZ7b4aKUvmhfFqqwyM6DZMRLkStL09opYMcKbT5kOObgIjIw2%2Fi%2FwwY6pgFZJ%2FZUMrlkITG0Ju8d4Xhyq7Uzk8xwOWHjgHG%2Fq24focYm%2BIL368%2Bjmtbe%2FEHZAV%2B01u91XqinWhmVyXSaWXBGUcP%2F4WPWuVDm37Usp%2Fp%2FRwFqvy0i2Fmu2VNS%2Bdgzm7qrBie6gV0eJ%2Bxjhf0MYH%2FiJgS8ftCRyjUH%2BahIvwrKIRszkCFcd1w0ovepjx4YgfX4kIquORExDjGKl7sf6mulKQ4kjMBx&X-Amz-Signature=52208a5a961c6ef58176d58a9dcb540383a980ca18917364063b02165f204750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
