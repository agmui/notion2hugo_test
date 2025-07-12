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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKEW7XK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5WoUCLKy%2BZjFNJc5K6giT%2FWaaT226REk2fZUWepFxbQIgIxuDDLSQ1Tao8%2Futu%2B5%2Bu8PeGunuGzOvLhXcONdGQMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB7665TYkXm1dnFfSrcAy2Gg8yrtqBs8v%2FAocT3CNQaMg%2FvoyyfmyBrjCvhNFEtpAY%2BuaXw9KMFukMpQ4T9LA0dLCi79UAilTsOEgEvcfzAKSdVuLmJSKwv0JqUlARm8dHeqvGo%2Fi65gdI03iifEvxrZ8h2CcmAI971NPzNRXXIaSp1Ebx5mVoHBv2XhSBp3z6Kcw3Q4ur1664PgxbkdQ3HpYPBplvlCMLj9MEtpqItziTORGkctDymcq7sn6AXiKGjFILjXDat95sYZR0F1ZcTN7fAorwqMJyhZnCMKcvMq%2FiadNVN3mJqKAKIAxoE8p0EpcrOoqPQitntuIfkpnYU4cGbYdRT8%2FF6zjp%2B9qQzyIR77na%2BCuOxRmsLrs5vKOJ6oSBT4rf3Snopee8H8YYBUmPbZWEPzl4a6hhTT3kO5kIo2v1PVubDUYWJcxSqNYCRErBacBggoW5H5AKaTaimNUY54IgltADXLRwlN5UeLqXw33CAGuvqX4cfU%2Bwq5YCrF2giXuCMVBK8v4cDWJOgznqnwU2PPCDqxsGaclbpFhZEGhQWGRmcYG%2BRJkv%2BYAQuNDIWRVGm57e6CJTvcIpzTlWFX42jggVzl%2FB7AbDt1jBHUYDotjdl451SfarosnSn7b%2FmLd6bud7jMKb5x8MGOqUBpHegpLeyLlo5bWMauaJAb0NhZ4DJPfbPo7uPV37yFVWwSyl6VbKXiFkzu9dUa3npV0rdPYLL2slXP0umrKVbbnZLxYF%2FjJXyG4DbbZjld0wRo5agsYhKwCC%2FQXwo0qo8d5eAJYDvYv8YB9gueBXcxKyOHPYHkceFQgL44xAbOa9dFRxHmAJOvOK%2B96pIrhtiF1T5npMKA%2BLK%2F%2BfHxyjULvCXPgds&X-Amz-Signature=586ef028f7f64a20138355de204c2068fd9f30d262a248f393c3033d811bec4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKEW7XK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5WoUCLKy%2BZjFNJc5K6giT%2FWaaT226REk2fZUWepFxbQIgIxuDDLSQ1Tao8%2Futu%2B5%2Bu8PeGunuGzOvLhXcONdGQMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB7665TYkXm1dnFfSrcAy2Gg8yrtqBs8v%2FAocT3CNQaMg%2FvoyyfmyBrjCvhNFEtpAY%2BuaXw9KMFukMpQ4T9LA0dLCi79UAilTsOEgEvcfzAKSdVuLmJSKwv0JqUlARm8dHeqvGo%2Fi65gdI03iifEvxrZ8h2CcmAI971NPzNRXXIaSp1Ebx5mVoHBv2XhSBp3z6Kcw3Q4ur1664PgxbkdQ3HpYPBplvlCMLj9MEtpqItziTORGkctDymcq7sn6AXiKGjFILjXDat95sYZR0F1ZcTN7fAorwqMJyhZnCMKcvMq%2FiadNVN3mJqKAKIAxoE8p0EpcrOoqPQitntuIfkpnYU4cGbYdRT8%2FF6zjp%2B9qQzyIR77na%2BCuOxRmsLrs5vKOJ6oSBT4rf3Snopee8H8YYBUmPbZWEPzl4a6hhTT3kO5kIo2v1PVubDUYWJcxSqNYCRErBacBggoW5H5AKaTaimNUY54IgltADXLRwlN5UeLqXw33CAGuvqX4cfU%2Bwq5YCrF2giXuCMVBK8v4cDWJOgznqnwU2PPCDqxsGaclbpFhZEGhQWGRmcYG%2BRJkv%2BYAQuNDIWRVGm57e6CJTvcIpzTlWFX42jggVzl%2FB7AbDt1jBHUYDotjdl451SfarosnSn7b%2FmLd6bud7jMKb5x8MGOqUBpHegpLeyLlo5bWMauaJAb0NhZ4DJPfbPo7uPV37yFVWwSyl6VbKXiFkzu9dUa3npV0rdPYLL2slXP0umrKVbbnZLxYF%2FjJXyG4DbbZjld0wRo5agsYhKwCC%2FQXwo0qo8d5eAJYDvYv8YB9gueBXcxKyOHPYHkceFQgL44xAbOa9dFRxHmAJOvOK%2B96pIrhtiF1T5npMKA%2BLK%2F%2BfHxyjULvCXPgds&X-Amz-Signature=c718ad1b7eacf2b83126520ae3018bcdfd19cfd3cb50a1c9fd3fdd9956a2e8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKEW7XK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5WoUCLKy%2BZjFNJc5K6giT%2FWaaT226REk2fZUWepFxbQIgIxuDDLSQ1Tao8%2Futu%2B5%2Bu8PeGunuGzOvLhXcONdGQMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB7665TYkXm1dnFfSrcAy2Gg8yrtqBs8v%2FAocT3CNQaMg%2FvoyyfmyBrjCvhNFEtpAY%2BuaXw9KMFukMpQ4T9LA0dLCi79UAilTsOEgEvcfzAKSdVuLmJSKwv0JqUlARm8dHeqvGo%2Fi65gdI03iifEvxrZ8h2CcmAI971NPzNRXXIaSp1Ebx5mVoHBv2XhSBp3z6Kcw3Q4ur1664PgxbkdQ3HpYPBplvlCMLj9MEtpqItziTORGkctDymcq7sn6AXiKGjFILjXDat95sYZR0F1ZcTN7fAorwqMJyhZnCMKcvMq%2FiadNVN3mJqKAKIAxoE8p0EpcrOoqPQitntuIfkpnYU4cGbYdRT8%2FF6zjp%2B9qQzyIR77na%2BCuOxRmsLrs5vKOJ6oSBT4rf3Snopee8H8YYBUmPbZWEPzl4a6hhTT3kO5kIo2v1PVubDUYWJcxSqNYCRErBacBggoW5H5AKaTaimNUY54IgltADXLRwlN5UeLqXw33CAGuvqX4cfU%2Bwq5YCrF2giXuCMVBK8v4cDWJOgznqnwU2PPCDqxsGaclbpFhZEGhQWGRmcYG%2BRJkv%2BYAQuNDIWRVGm57e6CJTvcIpzTlWFX42jggVzl%2FB7AbDt1jBHUYDotjdl451SfarosnSn7b%2FmLd6bud7jMKb5x8MGOqUBpHegpLeyLlo5bWMauaJAb0NhZ4DJPfbPo7uPV37yFVWwSyl6VbKXiFkzu9dUa3npV0rdPYLL2slXP0umrKVbbnZLxYF%2FjJXyG4DbbZjld0wRo5agsYhKwCC%2FQXwo0qo8d5eAJYDvYv8YB9gueBXcxKyOHPYHkceFQgL44xAbOa9dFRxHmAJOvOK%2B96pIrhtiF1T5npMKA%2BLK%2F%2BfHxyjULvCXPgds&X-Amz-Signature=cc0240fb2094461fd65f946b4c67fde1b1c39a561384d6ee077efcb4386f2f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKEW7XK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5WoUCLKy%2BZjFNJc5K6giT%2FWaaT226REk2fZUWepFxbQIgIxuDDLSQ1Tao8%2Futu%2B5%2Bu8PeGunuGzOvLhXcONdGQMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB7665TYkXm1dnFfSrcAy2Gg8yrtqBs8v%2FAocT3CNQaMg%2FvoyyfmyBrjCvhNFEtpAY%2BuaXw9KMFukMpQ4T9LA0dLCi79UAilTsOEgEvcfzAKSdVuLmJSKwv0JqUlARm8dHeqvGo%2Fi65gdI03iifEvxrZ8h2CcmAI971NPzNRXXIaSp1Ebx5mVoHBv2XhSBp3z6Kcw3Q4ur1664PgxbkdQ3HpYPBplvlCMLj9MEtpqItziTORGkctDymcq7sn6AXiKGjFILjXDat95sYZR0F1ZcTN7fAorwqMJyhZnCMKcvMq%2FiadNVN3mJqKAKIAxoE8p0EpcrOoqPQitntuIfkpnYU4cGbYdRT8%2FF6zjp%2B9qQzyIR77na%2BCuOxRmsLrs5vKOJ6oSBT4rf3Snopee8H8YYBUmPbZWEPzl4a6hhTT3kO5kIo2v1PVubDUYWJcxSqNYCRErBacBggoW5H5AKaTaimNUY54IgltADXLRwlN5UeLqXw33CAGuvqX4cfU%2Bwq5YCrF2giXuCMVBK8v4cDWJOgznqnwU2PPCDqxsGaclbpFhZEGhQWGRmcYG%2BRJkv%2BYAQuNDIWRVGm57e6CJTvcIpzTlWFX42jggVzl%2FB7AbDt1jBHUYDotjdl451SfarosnSn7b%2FmLd6bud7jMKb5x8MGOqUBpHegpLeyLlo5bWMauaJAb0NhZ4DJPfbPo7uPV37yFVWwSyl6VbKXiFkzu9dUa3npV0rdPYLL2slXP0umrKVbbnZLxYF%2FjJXyG4DbbZjld0wRo5agsYhKwCC%2FQXwo0qo8d5eAJYDvYv8YB9gueBXcxKyOHPYHkceFQgL44xAbOa9dFRxHmAJOvOK%2B96pIrhtiF1T5npMKA%2BLK%2F%2BfHxyjULvCXPgds&X-Amz-Signature=e23221274aba0f17d915ef82bd34ccc8c797d5fbfacae7f05c3ed1054b33f6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKEW7XK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5WoUCLKy%2BZjFNJc5K6giT%2FWaaT226REk2fZUWepFxbQIgIxuDDLSQ1Tao8%2Futu%2B5%2Bu8PeGunuGzOvLhXcONdGQMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB7665TYkXm1dnFfSrcAy2Gg8yrtqBs8v%2FAocT3CNQaMg%2FvoyyfmyBrjCvhNFEtpAY%2BuaXw9KMFukMpQ4T9LA0dLCi79UAilTsOEgEvcfzAKSdVuLmJSKwv0JqUlARm8dHeqvGo%2Fi65gdI03iifEvxrZ8h2CcmAI971NPzNRXXIaSp1Ebx5mVoHBv2XhSBp3z6Kcw3Q4ur1664PgxbkdQ3HpYPBplvlCMLj9MEtpqItziTORGkctDymcq7sn6AXiKGjFILjXDat95sYZR0F1ZcTN7fAorwqMJyhZnCMKcvMq%2FiadNVN3mJqKAKIAxoE8p0EpcrOoqPQitntuIfkpnYU4cGbYdRT8%2FF6zjp%2B9qQzyIR77na%2BCuOxRmsLrs5vKOJ6oSBT4rf3Snopee8H8YYBUmPbZWEPzl4a6hhTT3kO5kIo2v1PVubDUYWJcxSqNYCRErBacBggoW5H5AKaTaimNUY54IgltADXLRwlN5UeLqXw33CAGuvqX4cfU%2Bwq5YCrF2giXuCMVBK8v4cDWJOgznqnwU2PPCDqxsGaclbpFhZEGhQWGRmcYG%2BRJkv%2BYAQuNDIWRVGm57e6CJTvcIpzTlWFX42jggVzl%2FB7AbDt1jBHUYDotjdl451SfarosnSn7b%2FmLd6bud7jMKb5x8MGOqUBpHegpLeyLlo5bWMauaJAb0NhZ4DJPfbPo7uPV37yFVWwSyl6VbKXiFkzu9dUa3npV0rdPYLL2slXP0umrKVbbnZLxYF%2FjJXyG4DbbZjld0wRo5agsYhKwCC%2FQXwo0qo8d5eAJYDvYv8YB9gueBXcxKyOHPYHkceFQgL44xAbOa9dFRxHmAJOvOK%2B96pIrhtiF1T5npMKA%2BLK%2F%2BfHxyjULvCXPgds&X-Amz-Signature=e547ef00266aaca72aa6a0fd3e7c8851271e4b0a799b5634229173eefb75c363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKEW7XK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5WoUCLKy%2BZjFNJc5K6giT%2FWaaT226REk2fZUWepFxbQIgIxuDDLSQ1Tao8%2Futu%2B5%2Bu8PeGunuGzOvLhXcONdGQMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB7665TYkXm1dnFfSrcAy2Gg8yrtqBs8v%2FAocT3CNQaMg%2FvoyyfmyBrjCvhNFEtpAY%2BuaXw9KMFukMpQ4T9LA0dLCi79UAilTsOEgEvcfzAKSdVuLmJSKwv0JqUlARm8dHeqvGo%2Fi65gdI03iifEvxrZ8h2CcmAI971NPzNRXXIaSp1Ebx5mVoHBv2XhSBp3z6Kcw3Q4ur1664PgxbkdQ3HpYPBplvlCMLj9MEtpqItziTORGkctDymcq7sn6AXiKGjFILjXDat95sYZR0F1ZcTN7fAorwqMJyhZnCMKcvMq%2FiadNVN3mJqKAKIAxoE8p0EpcrOoqPQitntuIfkpnYU4cGbYdRT8%2FF6zjp%2B9qQzyIR77na%2BCuOxRmsLrs5vKOJ6oSBT4rf3Snopee8H8YYBUmPbZWEPzl4a6hhTT3kO5kIo2v1PVubDUYWJcxSqNYCRErBacBggoW5H5AKaTaimNUY54IgltADXLRwlN5UeLqXw33CAGuvqX4cfU%2Bwq5YCrF2giXuCMVBK8v4cDWJOgznqnwU2PPCDqxsGaclbpFhZEGhQWGRmcYG%2BRJkv%2BYAQuNDIWRVGm57e6CJTvcIpzTlWFX42jggVzl%2FB7AbDt1jBHUYDotjdl451SfarosnSn7b%2FmLd6bud7jMKb5x8MGOqUBpHegpLeyLlo5bWMauaJAb0NhZ4DJPfbPo7uPV37yFVWwSyl6VbKXiFkzu9dUa3npV0rdPYLL2slXP0umrKVbbnZLxYF%2FjJXyG4DbbZjld0wRo5agsYhKwCC%2FQXwo0qo8d5eAJYDvYv8YB9gueBXcxKyOHPYHkceFQgL44xAbOa9dFRxHmAJOvOK%2B96pIrhtiF1T5npMKA%2BLK%2F%2BfHxyjULvCXPgds&X-Amz-Signature=9ca10a426c2c96bf996002266e7dbfdc649d3916efd7d69fd8bd5056b55e2f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNKEW7XK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5WoUCLKy%2BZjFNJc5K6giT%2FWaaT226REk2fZUWepFxbQIgIxuDDLSQ1Tao8%2Futu%2B5%2Bu8PeGunuGzOvLhXcONdGQMcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB7665TYkXm1dnFfSrcAy2Gg8yrtqBs8v%2FAocT3CNQaMg%2FvoyyfmyBrjCvhNFEtpAY%2BuaXw9KMFukMpQ4T9LA0dLCi79UAilTsOEgEvcfzAKSdVuLmJSKwv0JqUlARm8dHeqvGo%2Fi65gdI03iifEvxrZ8h2CcmAI971NPzNRXXIaSp1Ebx5mVoHBv2XhSBp3z6Kcw3Q4ur1664PgxbkdQ3HpYPBplvlCMLj9MEtpqItziTORGkctDymcq7sn6AXiKGjFILjXDat95sYZR0F1ZcTN7fAorwqMJyhZnCMKcvMq%2FiadNVN3mJqKAKIAxoE8p0EpcrOoqPQitntuIfkpnYU4cGbYdRT8%2FF6zjp%2B9qQzyIR77na%2BCuOxRmsLrs5vKOJ6oSBT4rf3Snopee8H8YYBUmPbZWEPzl4a6hhTT3kO5kIo2v1PVubDUYWJcxSqNYCRErBacBggoW5H5AKaTaimNUY54IgltADXLRwlN5UeLqXw33CAGuvqX4cfU%2Bwq5YCrF2giXuCMVBK8v4cDWJOgznqnwU2PPCDqxsGaclbpFhZEGhQWGRmcYG%2BRJkv%2BYAQuNDIWRVGm57e6CJTvcIpzTlWFX42jggVzl%2FB7AbDt1jBHUYDotjdl451SfarosnSn7b%2FmLd6bud7jMKb5x8MGOqUBpHegpLeyLlo5bWMauaJAb0NhZ4DJPfbPo7uPV37yFVWwSyl6VbKXiFkzu9dUa3npV0rdPYLL2slXP0umrKVbbnZLxYF%2FjJXyG4DbbZjld0wRo5agsYhKwCC%2FQXwo0qo8d5eAJYDvYv8YB9gueBXcxKyOHPYHkceFQgL44xAbOa9dFRxHmAJOvOK%2B96pIrhtiF1T5npMKA%2BLK%2F%2BfHxyjULvCXPgds&X-Amz-Signature=652b88fa1a0a1ac611d70ae219a190659fe10f8b3b94e209ff0dd038f0d921cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
