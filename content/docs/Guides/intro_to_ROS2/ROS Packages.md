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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NH22YD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGXNvop67BBGGt45wEKyI41Z3Za2d%2F2EVu14qDrI1OChAiEA%2BFgWbPy5KNVlr10aQhjdgy%2FHMQ08rcCw%2Bbm7PV%2B6XXEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg2iwPZ1rHM5Hc6WircA1XOcqpHc7LZQ5lJRxtWh7unx8x3GKWgbYxc4PNaESFhiADzGwMpqrFeotnNOZvPh%2Fg9S0f6HRe6aCoZC9oUlTLhvIjgMmdVDld3xHI7xiwag%2BHTdDNjs0mSvdqUgTMPjfWjQhy8zTOu1%2ByoxNV%2F1%2B1lxzNJ3onDF9CPS%2FoiHJiG20XwNO9em6Oxc%2FTBUo9vipmiONordZ0B6xdaflBQQ7yTDCn4Ia3yezIyyRfbU4iRo%2F0bV3UJ0M2nE8kcQsLJY3dTQBO2tcu6JHnyAFq3B%2FHN3t9oKNFoh8cvFFvKysb4OOz7tjYYChwqzz4Q7%2FWGCDexhdg6IWlXP%2ByRYpxfcU63LpzPK0Wa9VltuBIs%2FX2iZJ2r7IPJl8dY8jF7LYHRkoY2%2BgyT19%2FLne2MlCVbEbcE7QwPYfNCFX5I1E%2BgmA0X7oXg9edVlcx%2FWDaiMYUhH%2FWTJBwIDD9KX0pV6M4mQabV80xWjYSH0LOmanwILlys1xVOEO%2Fx4dEhItkkvfIWbXvUmCv9%2B%2BiSVfGuIpnLUjigARAfmtbSKdIt8oPkJIdDtNr3ze9bJZwFW6HSV7uIBc8mat1qB%2Bd9DIJ3SVD6ixs4VKjQ66bqakv39DJ4MtOUGAwzO7BUKwwyQrWlMJ%2Frx8AGOqUB2MCmJeV%2BTbwgu8IV8YZWEZwgKXcwk1gLXVsD%2FMCI1IMV%2FmACJOtcCppBNozdjhBXuQhCSuqqfsnnHNCnC%2FI7T5rblQjYTy%2BbtVtbtji%2BO4YYvnb208ZIWUWM4%2BjsqGdXV1E2EbHUtofgqSDQdtl0TTAM7KJyA%2FTcRIyB2xTweYFH9YHYPrnb1Fux19EfEf7V17Fc%2BY0on8yE7y4CetUISc7bQF5q&X-Amz-Signature=54f1eff91450f0f9a76b444f06da2f8c01246db6f3cf82e42447fedaf7aa8eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NH22YD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGXNvop67BBGGt45wEKyI41Z3Za2d%2F2EVu14qDrI1OChAiEA%2BFgWbPy5KNVlr10aQhjdgy%2FHMQ08rcCw%2Bbm7PV%2B6XXEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg2iwPZ1rHM5Hc6WircA1XOcqpHc7LZQ5lJRxtWh7unx8x3GKWgbYxc4PNaESFhiADzGwMpqrFeotnNOZvPh%2Fg9S0f6HRe6aCoZC9oUlTLhvIjgMmdVDld3xHI7xiwag%2BHTdDNjs0mSvdqUgTMPjfWjQhy8zTOu1%2ByoxNV%2F1%2B1lxzNJ3onDF9CPS%2FoiHJiG20XwNO9em6Oxc%2FTBUo9vipmiONordZ0B6xdaflBQQ7yTDCn4Ia3yezIyyRfbU4iRo%2F0bV3UJ0M2nE8kcQsLJY3dTQBO2tcu6JHnyAFq3B%2FHN3t9oKNFoh8cvFFvKysb4OOz7tjYYChwqzz4Q7%2FWGCDexhdg6IWlXP%2ByRYpxfcU63LpzPK0Wa9VltuBIs%2FX2iZJ2r7IPJl8dY8jF7LYHRkoY2%2BgyT19%2FLne2MlCVbEbcE7QwPYfNCFX5I1E%2BgmA0X7oXg9edVlcx%2FWDaiMYUhH%2FWTJBwIDD9KX0pV6M4mQabV80xWjYSH0LOmanwILlys1xVOEO%2Fx4dEhItkkvfIWbXvUmCv9%2B%2BiSVfGuIpnLUjigARAfmtbSKdIt8oPkJIdDtNr3ze9bJZwFW6HSV7uIBc8mat1qB%2Bd9DIJ3SVD6ixs4VKjQ66bqakv39DJ4MtOUGAwzO7BUKwwyQrWlMJ%2Frx8AGOqUB2MCmJeV%2BTbwgu8IV8YZWEZwgKXcwk1gLXVsD%2FMCI1IMV%2FmACJOtcCppBNozdjhBXuQhCSuqqfsnnHNCnC%2FI7T5rblQjYTy%2BbtVtbtji%2BO4YYvnb208ZIWUWM4%2BjsqGdXV1E2EbHUtofgqSDQdtl0TTAM7KJyA%2FTcRIyB2xTweYFH9YHYPrnb1Fux19EfEf7V17Fc%2BY0on8yE7y4CetUISc7bQF5q&X-Amz-Signature=d1d78825e77b687be2f32ec185912af467c2af49d467eb22768997b5a0a03786&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NH22YD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGXNvop67BBGGt45wEKyI41Z3Za2d%2F2EVu14qDrI1OChAiEA%2BFgWbPy5KNVlr10aQhjdgy%2FHMQ08rcCw%2Bbm7PV%2B6XXEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg2iwPZ1rHM5Hc6WircA1XOcqpHc7LZQ5lJRxtWh7unx8x3GKWgbYxc4PNaESFhiADzGwMpqrFeotnNOZvPh%2Fg9S0f6HRe6aCoZC9oUlTLhvIjgMmdVDld3xHI7xiwag%2BHTdDNjs0mSvdqUgTMPjfWjQhy8zTOu1%2ByoxNV%2F1%2B1lxzNJ3onDF9CPS%2FoiHJiG20XwNO9em6Oxc%2FTBUo9vipmiONordZ0B6xdaflBQQ7yTDCn4Ia3yezIyyRfbU4iRo%2F0bV3UJ0M2nE8kcQsLJY3dTQBO2tcu6JHnyAFq3B%2FHN3t9oKNFoh8cvFFvKysb4OOz7tjYYChwqzz4Q7%2FWGCDexhdg6IWlXP%2ByRYpxfcU63LpzPK0Wa9VltuBIs%2FX2iZJ2r7IPJl8dY8jF7LYHRkoY2%2BgyT19%2FLne2MlCVbEbcE7QwPYfNCFX5I1E%2BgmA0X7oXg9edVlcx%2FWDaiMYUhH%2FWTJBwIDD9KX0pV6M4mQabV80xWjYSH0LOmanwILlys1xVOEO%2Fx4dEhItkkvfIWbXvUmCv9%2B%2BiSVfGuIpnLUjigARAfmtbSKdIt8oPkJIdDtNr3ze9bJZwFW6HSV7uIBc8mat1qB%2Bd9DIJ3SVD6ixs4VKjQ66bqakv39DJ4MtOUGAwzO7BUKwwyQrWlMJ%2Frx8AGOqUB2MCmJeV%2BTbwgu8IV8YZWEZwgKXcwk1gLXVsD%2FMCI1IMV%2FmACJOtcCppBNozdjhBXuQhCSuqqfsnnHNCnC%2FI7T5rblQjYTy%2BbtVtbtji%2BO4YYvnb208ZIWUWM4%2BjsqGdXV1E2EbHUtofgqSDQdtl0TTAM7KJyA%2FTcRIyB2xTweYFH9YHYPrnb1Fux19EfEf7V17Fc%2BY0on8yE7y4CetUISc7bQF5q&X-Amz-Signature=93d5c35dfe936ac874c508e5fcaa3f3b99c5dcbe87007f12400c6d6921106635&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NH22YD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGXNvop67BBGGt45wEKyI41Z3Za2d%2F2EVu14qDrI1OChAiEA%2BFgWbPy5KNVlr10aQhjdgy%2FHMQ08rcCw%2Bbm7PV%2B6XXEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg2iwPZ1rHM5Hc6WircA1XOcqpHc7LZQ5lJRxtWh7unx8x3GKWgbYxc4PNaESFhiADzGwMpqrFeotnNOZvPh%2Fg9S0f6HRe6aCoZC9oUlTLhvIjgMmdVDld3xHI7xiwag%2BHTdDNjs0mSvdqUgTMPjfWjQhy8zTOu1%2ByoxNV%2F1%2B1lxzNJ3onDF9CPS%2FoiHJiG20XwNO9em6Oxc%2FTBUo9vipmiONordZ0B6xdaflBQQ7yTDCn4Ia3yezIyyRfbU4iRo%2F0bV3UJ0M2nE8kcQsLJY3dTQBO2tcu6JHnyAFq3B%2FHN3t9oKNFoh8cvFFvKysb4OOz7tjYYChwqzz4Q7%2FWGCDexhdg6IWlXP%2ByRYpxfcU63LpzPK0Wa9VltuBIs%2FX2iZJ2r7IPJl8dY8jF7LYHRkoY2%2BgyT19%2FLne2MlCVbEbcE7QwPYfNCFX5I1E%2BgmA0X7oXg9edVlcx%2FWDaiMYUhH%2FWTJBwIDD9KX0pV6M4mQabV80xWjYSH0LOmanwILlys1xVOEO%2Fx4dEhItkkvfIWbXvUmCv9%2B%2BiSVfGuIpnLUjigARAfmtbSKdIt8oPkJIdDtNr3ze9bJZwFW6HSV7uIBc8mat1qB%2Bd9DIJ3SVD6ixs4VKjQ66bqakv39DJ4MtOUGAwzO7BUKwwyQrWlMJ%2Frx8AGOqUB2MCmJeV%2BTbwgu8IV8YZWEZwgKXcwk1gLXVsD%2FMCI1IMV%2FmACJOtcCppBNozdjhBXuQhCSuqqfsnnHNCnC%2FI7T5rblQjYTy%2BbtVtbtji%2BO4YYvnb208ZIWUWM4%2BjsqGdXV1E2EbHUtofgqSDQdtl0TTAM7KJyA%2FTcRIyB2xTweYFH9YHYPrnb1Fux19EfEf7V17Fc%2BY0on8yE7y4CetUISc7bQF5q&X-Amz-Signature=f60e57b0e75a2e42a248745556bfe7da1879ad762f019145fdda674870c1c66d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NH22YD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGXNvop67BBGGt45wEKyI41Z3Za2d%2F2EVu14qDrI1OChAiEA%2BFgWbPy5KNVlr10aQhjdgy%2FHMQ08rcCw%2Bbm7PV%2B6XXEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg2iwPZ1rHM5Hc6WircA1XOcqpHc7LZQ5lJRxtWh7unx8x3GKWgbYxc4PNaESFhiADzGwMpqrFeotnNOZvPh%2Fg9S0f6HRe6aCoZC9oUlTLhvIjgMmdVDld3xHI7xiwag%2BHTdDNjs0mSvdqUgTMPjfWjQhy8zTOu1%2ByoxNV%2F1%2B1lxzNJ3onDF9CPS%2FoiHJiG20XwNO9em6Oxc%2FTBUo9vipmiONordZ0B6xdaflBQQ7yTDCn4Ia3yezIyyRfbU4iRo%2F0bV3UJ0M2nE8kcQsLJY3dTQBO2tcu6JHnyAFq3B%2FHN3t9oKNFoh8cvFFvKysb4OOz7tjYYChwqzz4Q7%2FWGCDexhdg6IWlXP%2ByRYpxfcU63LpzPK0Wa9VltuBIs%2FX2iZJ2r7IPJl8dY8jF7LYHRkoY2%2BgyT19%2FLne2MlCVbEbcE7QwPYfNCFX5I1E%2BgmA0X7oXg9edVlcx%2FWDaiMYUhH%2FWTJBwIDD9KX0pV6M4mQabV80xWjYSH0LOmanwILlys1xVOEO%2Fx4dEhItkkvfIWbXvUmCv9%2B%2BiSVfGuIpnLUjigARAfmtbSKdIt8oPkJIdDtNr3ze9bJZwFW6HSV7uIBc8mat1qB%2Bd9DIJ3SVD6ixs4VKjQ66bqakv39DJ4MtOUGAwzO7BUKwwyQrWlMJ%2Frx8AGOqUB2MCmJeV%2BTbwgu8IV8YZWEZwgKXcwk1gLXVsD%2FMCI1IMV%2FmACJOtcCppBNozdjhBXuQhCSuqqfsnnHNCnC%2FI7T5rblQjYTy%2BbtVtbtji%2BO4YYvnb208ZIWUWM4%2BjsqGdXV1E2EbHUtofgqSDQdtl0TTAM7KJyA%2FTcRIyB2xTweYFH9YHYPrnb1Fux19EfEf7V17Fc%2BY0on8yE7y4CetUISc7bQF5q&X-Amz-Signature=50685399b34a2c7a5d3fd622c69b5399e05bb2c0c3f42f5105031a2fef797aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NH22YD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGXNvop67BBGGt45wEKyI41Z3Za2d%2F2EVu14qDrI1OChAiEA%2BFgWbPy5KNVlr10aQhjdgy%2FHMQ08rcCw%2Bbm7PV%2B6XXEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg2iwPZ1rHM5Hc6WircA1XOcqpHc7LZQ5lJRxtWh7unx8x3GKWgbYxc4PNaESFhiADzGwMpqrFeotnNOZvPh%2Fg9S0f6HRe6aCoZC9oUlTLhvIjgMmdVDld3xHI7xiwag%2BHTdDNjs0mSvdqUgTMPjfWjQhy8zTOu1%2ByoxNV%2F1%2B1lxzNJ3onDF9CPS%2FoiHJiG20XwNO9em6Oxc%2FTBUo9vipmiONordZ0B6xdaflBQQ7yTDCn4Ia3yezIyyRfbU4iRo%2F0bV3UJ0M2nE8kcQsLJY3dTQBO2tcu6JHnyAFq3B%2FHN3t9oKNFoh8cvFFvKysb4OOz7tjYYChwqzz4Q7%2FWGCDexhdg6IWlXP%2ByRYpxfcU63LpzPK0Wa9VltuBIs%2FX2iZJ2r7IPJl8dY8jF7LYHRkoY2%2BgyT19%2FLne2MlCVbEbcE7QwPYfNCFX5I1E%2BgmA0X7oXg9edVlcx%2FWDaiMYUhH%2FWTJBwIDD9KX0pV6M4mQabV80xWjYSH0LOmanwILlys1xVOEO%2Fx4dEhItkkvfIWbXvUmCv9%2B%2BiSVfGuIpnLUjigARAfmtbSKdIt8oPkJIdDtNr3ze9bJZwFW6HSV7uIBc8mat1qB%2Bd9DIJ3SVD6ixs4VKjQ66bqakv39DJ4MtOUGAwzO7BUKwwyQrWlMJ%2Frx8AGOqUB2MCmJeV%2BTbwgu8IV8YZWEZwgKXcwk1gLXVsD%2FMCI1IMV%2FmACJOtcCppBNozdjhBXuQhCSuqqfsnnHNCnC%2FI7T5rblQjYTy%2BbtVtbtji%2BO4YYvnb208ZIWUWM4%2BjsqGdXV1E2EbHUtofgqSDQdtl0TTAM7KJyA%2FTcRIyB2xTweYFH9YHYPrnb1Fux19EfEf7V17Fc%2BY0on8yE7y4CetUISc7bQF5q&X-Amz-Signature=7368f98f215c93bd01118b9e89ccdef1151f41114475ffabc8f5e87b606d1f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NH22YD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGXNvop67BBGGt45wEKyI41Z3Za2d%2F2EVu14qDrI1OChAiEA%2BFgWbPy5KNVlr10aQhjdgy%2FHMQ08rcCw%2Bbm7PV%2B6XXEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg2iwPZ1rHM5Hc6WircA1XOcqpHc7LZQ5lJRxtWh7unx8x3GKWgbYxc4PNaESFhiADzGwMpqrFeotnNOZvPh%2Fg9S0f6HRe6aCoZC9oUlTLhvIjgMmdVDld3xHI7xiwag%2BHTdDNjs0mSvdqUgTMPjfWjQhy8zTOu1%2ByoxNV%2F1%2B1lxzNJ3onDF9CPS%2FoiHJiG20XwNO9em6Oxc%2FTBUo9vipmiONordZ0B6xdaflBQQ7yTDCn4Ia3yezIyyRfbU4iRo%2F0bV3UJ0M2nE8kcQsLJY3dTQBO2tcu6JHnyAFq3B%2FHN3t9oKNFoh8cvFFvKysb4OOz7tjYYChwqzz4Q7%2FWGCDexhdg6IWlXP%2ByRYpxfcU63LpzPK0Wa9VltuBIs%2FX2iZJ2r7IPJl8dY8jF7LYHRkoY2%2BgyT19%2FLne2MlCVbEbcE7QwPYfNCFX5I1E%2BgmA0X7oXg9edVlcx%2FWDaiMYUhH%2FWTJBwIDD9KX0pV6M4mQabV80xWjYSH0LOmanwILlys1xVOEO%2Fx4dEhItkkvfIWbXvUmCv9%2B%2BiSVfGuIpnLUjigARAfmtbSKdIt8oPkJIdDtNr3ze9bJZwFW6HSV7uIBc8mat1qB%2Bd9DIJ3SVD6ixs4VKjQ66bqakv39DJ4MtOUGAwzO7BUKwwyQrWlMJ%2Frx8AGOqUB2MCmJeV%2BTbwgu8IV8YZWEZwgKXcwk1gLXVsD%2FMCI1IMV%2FmACJOtcCppBNozdjhBXuQhCSuqqfsnnHNCnC%2FI7T5rblQjYTy%2BbtVtbtji%2BO4YYvnb208ZIWUWM4%2BjsqGdXV1E2EbHUtofgqSDQdtl0TTAM7KJyA%2FTcRIyB2xTweYFH9YHYPrnb1Fux19EfEf7V17Fc%2BY0on8yE7y4CetUISc7bQF5q&X-Amz-Signature=dba6d9ea5e3f6185c9418d18987b67f314278acd74471e31a359dd6b26165d36&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
