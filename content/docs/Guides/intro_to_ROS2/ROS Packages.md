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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZF3OHI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGDZoGUFxY0EEgSv0o4CQOJzo2IJOkiCRCQXay1d8STQAiEAimN87VkVQqwFlsmXCrMLVZdbbg3e65pDChyOdeZCfa8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHi0ueu3tIJVJVx6xCrcA1xmRU5Uu6cbJDupAmEUWQeFM%2FRF4i3YOrCJQ%2BiFbKDijgX7OKH%2F%2BH%2F2op5HCpYseYrKoDcC717fHy1Q%2Bn%2BTFwJ91sl5qF5%2FQw5%2BwuI1KGANJm6WCoXiPV52Dawe6E1lYdynnph9XRDYxIaSsLVFFGDMNwbBV%2Fg9hNzP0F8TvPWOjYXo0C0GOtbeNvUbQxnVgtFC3o51V36jdy7nrG0k5utv0o8etMBUuBFbhIOfCvn6aQQ%2FI7jOPVMQRqzCVgjLKkgPNG7xzAKpEUyWDNP37HQAg2Q5XtX0%2FpQr1PfVG20efHfCj4n0itHG5LeS%2Bn%2FP39fvRqozP%2FIYSWB2N9Y423LyNoa%2F73XoBcucSLbRVjoln8qrrDazrPNGAVY32cjUOskEN2%2FFhaCRoAVQPNjSChTwBaRwwDwjYbP4WKSD5GC78Xw%2FcaAlmi%2F%2BJuSY1Pjt5WEfh4svNHaCdG2e79KGsdRQzsDokJ2KIyh7dkPAyywzSTV8CMTz9o7Zukbe%2FSb7AHfkoTb3vw1zuyvuz3z%2BdDa1IU78lr%2BSpofbBJSA2ayPrRr9hXrlYZEUOni%2BEuLzMlvzGmXMmrTEUgFend8EeP0hZtcr%2Bapff%2FlYIp7TAR5nW7snAK1tMqGVlvKdMMjK%2BMIGOqUBOikVmz%2Fw49LNQg%2BrW2BaaAl83cn9hPSCeXvz9KSWj%2BAUDjLjBIUzxZ7X9futolhw61xFOu0GYfIL%2Fp9poyqhX1mU8qVLbUyo3NAKjwrAT1PLBw4iLQvm9KvFtMx5Xir3h6ds7qHN80e5EFSjjtme%2BU2bKp8N7dqPVf3JrpChmDLyRKeOtHy1zkVYP32tb8GS%2F%2F3z4a237mJcEpk1H6IGqjfzyVtT&X-Amz-Signature=a057ee556fe7771e6a2d2d374421406b800337b5d0f0cb079d52ad60a39123a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZF3OHI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGDZoGUFxY0EEgSv0o4CQOJzo2IJOkiCRCQXay1d8STQAiEAimN87VkVQqwFlsmXCrMLVZdbbg3e65pDChyOdeZCfa8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHi0ueu3tIJVJVx6xCrcA1xmRU5Uu6cbJDupAmEUWQeFM%2FRF4i3YOrCJQ%2BiFbKDijgX7OKH%2F%2BH%2F2op5HCpYseYrKoDcC717fHy1Q%2Bn%2BTFwJ91sl5qF5%2FQw5%2BwuI1KGANJm6WCoXiPV52Dawe6E1lYdynnph9XRDYxIaSsLVFFGDMNwbBV%2Fg9hNzP0F8TvPWOjYXo0C0GOtbeNvUbQxnVgtFC3o51V36jdy7nrG0k5utv0o8etMBUuBFbhIOfCvn6aQQ%2FI7jOPVMQRqzCVgjLKkgPNG7xzAKpEUyWDNP37HQAg2Q5XtX0%2FpQr1PfVG20efHfCj4n0itHG5LeS%2Bn%2FP39fvRqozP%2FIYSWB2N9Y423LyNoa%2F73XoBcucSLbRVjoln8qrrDazrPNGAVY32cjUOskEN2%2FFhaCRoAVQPNjSChTwBaRwwDwjYbP4WKSD5GC78Xw%2FcaAlmi%2F%2BJuSY1Pjt5WEfh4svNHaCdG2e79KGsdRQzsDokJ2KIyh7dkPAyywzSTV8CMTz9o7Zukbe%2FSb7AHfkoTb3vw1zuyvuz3z%2BdDa1IU78lr%2BSpofbBJSA2ayPrRr9hXrlYZEUOni%2BEuLzMlvzGmXMmrTEUgFend8EeP0hZtcr%2Bapff%2FlYIp7TAR5nW7snAK1tMqGVlvKdMMjK%2BMIGOqUBOikVmz%2Fw49LNQg%2BrW2BaaAl83cn9hPSCeXvz9KSWj%2BAUDjLjBIUzxZ7X9futolhw61xFOu0GYfIL%2Fp9poyqhX1mU8qVLbUyo3NAKjwrAT1PLBw4iLQvm9KvFtMx5Xir3h6ds7qHN80e5EFSjjtme%2BU2bKp8N7dqPVf3JrpChmDLyRKeOtHy1zkVYP32tb8GS%2F%2F3z4a237mJcEpk1H6IGqjfzyVtT&X-Amz-Signature=2858ec3bd5a728ce2efd72e6c8f305f8ca8a902fd571de9edd0d183cd426a79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZF3OHI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGDZoGUFxY0EEgSv0o4CQOJzo2IJOkiCRCQXay1d8STQAiEAimN87VkVQqwFlsmXCrMLVZdbbg3e65pDChyOdeZCfa8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHi0ueu3tIJVJVx6xCrcA1xmRU5Uu6cbJDupAmEUWQeFM%2FRF4i3YOrCJQ%2BiFbKDijgX7OKH%2F%2BH%2F2op5HCpYseYrKoDcC717fHy1Q%2Bn%2BTFwJ91sl5qF5%2FQw5%2BwuI1KGANJm6WCoXiPV52Dawe6E1lYdynnph9XRDYxIaSsLVFFGDMNwbBV%2Fg9hNzP0F8TvPWOjYXo0C0GOtbeNvUbQxnVgtFC3o51V36jdy7nrG0k5utv0o8etMBUuBFbhIOfCvn6aQQ%2FI7jOPVMQRqzCVgjLKkgPNG7xzAKpEUyWDNP37HQAg2Q5XtX0%2FpQr1PfVG20efHfCj4n0itHG5LeS%2Bn%2FP39fvRqozP%2FIYSWB2N9Y423LyNoa%2F73XoBcucSLbRVjoln8qrrDazrPNGAVY32cjUOskEN2%2FFhaCRoAVQPNjSChTwBaRwwDwjYbP4WKSD5GC78Xw%2FcaAlmi%2F%2BJuSY1Pjt5WEfh4svNHaCdG2e79KGsdRQzsDokJ2KIyh7dkPAyywzSTV8CMTz9o7Zukbe%2FSb7AHfkoTb3vw1zuyvuz3z%2BdDa1IU78lr%2BSpofbBJSA2ayPrRr9hXrlYZEUOni%2BEuLzMlvzGmXMmrTEUgFend8EeP0hZtcr%2Bapff%2FlYIp7TAR5nW7snAK1tMqGVlvKdMMjK%2BMIGOqUBOikVmz%2Fw49LNQg%2BrW2BaaAl83cn9hPSCeXvz9KSWj%2BAUDjLjBIUzxZ7X9futolhw61xFOu0GYfIL%2Fp9poyqhX1mU8qVLbUyo3NAKjwrAT1PLBw4iLQvm9KvFtMx5Xir3h6ds7qHN80e5EFSjjtme%2BU2bKp8N7dqPVf3JrpChmDLyRKeOtHy1zkVYP32tb8GS%2F%2F3z4a237mJcEpk1H6IGqjfzyVtT&X-Amz-Signature=47fff563d736d780b2d83da3daa1daf4902ae7f1226d3d9b12a1a46c8ecb64b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZF3OHI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGDZoGUFxY0EEgSv0o4CQOJzo2IJOkiCRCQXay1d8STQAiEAimN87VkVQqwFlsmXCrMLVZdbbg3e65pDChyOdeZCfa8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHi0ueu3tIJVJVx6xCrcA1xmRU5Uu6cbJDupAmEUWQeFM%2FRF4i3YOrCJQ%2BiFbKDijgX7OKH%2F%2BH%2F2op5HCpYseYrKoDcC717fHy1Q%2Bn%2BTFwJ91sl5qF5%2FQw5%2BwuI1KGANJm6WCoXiPV52Dawe6E1lYdynnph9XRDYxIaSsLVFFGDMNwbBV%2Fg9hNzP0F8TvPWOjYXo0C0GOtbeNvUbQxnVgtFC3o51V36jdy7nrG0k5utv0o8etMBUuBFbhIOfCvn6aQQ%2FI7jOPVMQRqzCVgjLKkgPNG7xzAKpEUyWDNP37HQAg2Q5XtX0%2FpQr1PfVG20efHfCj4n0itHG5LeS%2Bn%2FP39fvRqozP%2FIYSWB2N9Y423LyNoa%2F73XoBcucSLbRVjoln8qrrDazrPNGAVY32cjUOskEN2%2FFhaCRoAVQPNjSChTwBaRwwDwjYbP4WKSD5GC78Xw%2FcaAlmi%2F%2BJuSY1Pjt5WEfh4svNHaCdG2e79KGsdRQzsDokJ2KIyh7dkPAyywzSTV8CMTz9o7Zukbe%2FSb7AHfkoTb3vw1zuyvuz3z%2BdDa1IU78lr%2BSpofbBJSA2ayPrRr9hXrlYZEUOni%2BEuLzMlvzGmXMmrTEUgFend8EeP0hZtcr%2Bapff%2FlYIp7TAR5nW7snAK1tMqGVlvKdMMjK%2BMIGOqUBOikVmz%2Fw49LNQg%2BrW2BaaAl83cn9hPSCeXvz9KSWj%2BAUDjLjBIUzxZ7X9futolhw61xFOu0GYfIL%2Fp9poyqhX1mU8qVLbUyo3NAKjwrAT1PLBw4iLQvm9KvFtMx5Xir3h6ds7qHN80e5EFSjjtme%2BU2bKp8N7dqPVf3JrpChmDLyRKeOtHy1zkVYP32tb8GS%2F%2F3z4a237mJcEpk1H6IGqjfzyVtT&X-Amz-Signature=a287530e27b4290f1b7981b3fa644408b18dd47fc340785ea9eb10a98da84d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZF3OHI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGDZoGUFxY0EEgSv0o4CQOJzo2IJOkiCRCQXay1d8STQAiEAimN87VkVQqwFlsmXCrMLVZdbbg3e65pDChyOdeZCfa8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHi0ueu3tIJVJVx6xCrcA1xmRU5Uu6cbJDupAmEUWQeFM%2FRF4i3YOrCJQ%2BiFbKDijgX7OKH%2F%2BH%2F2op5HCpYseYrKoDcC717fHy1Q%2Bn%2BTFwJ91sl5qF5%2FQw5%2BwuI1KGANJm6WCoXiPV52Dawe6E1lYdynnph9XRDYxIaSsLVFFGDMNwbBV%2Fg9hNzP0F8TvPWOjYXo0C0GOtbeNvUbQxnVgtFC3o51V36jdy7nrG0k5utv0o8etMBUuBFbhIOfCvn6aQQ%2FI7jOPVMQRqzCVgjLKkgPNG7xzAKpEUyWDNP37HQAg2Q5XtX0%2FpQr1PfVG20efHfCj4n0itHG5LeS%2Bn%2FP39fvRqozP%2FIYSWB2N9Y423LyNoa%2F73XoBcucSLbRVjoln8qrrDazrPNGAVY32cjUOskEN2%2FFhaCRoAVQPNjSChTwBaRwwDwjYbP4WKSD5GC78Xw%2FcaAlmi%2F%2BJuSY1Pjt5WEfh4svNHaCdG2e79KGsdRQzsDokJ2KIyh7dkPAyywzSTV8CMTz9o7Zukbe%2FSb7AHfkoTb3vw1zuyvuz3z%2BdDa1IU78lr%2BSpofbBJSA2ayPrRr9hXrlYZEUOni%2BEuLzMlvzGmXMmrTEUgFend8EeP0hZtcr%2Bapff%2FlYIp7TAR5nW7snAK1tMqGVlvKdMMjK%2BMIGOqUBOikVmz%2Fw49LNQg%2BrW2BaaAl83cn9hPSCeXvz9KSWj%2BAUDjLjBIUzxZ7X9futolhw61xFOu0GYfIL%2Fp9poyqhX1mU8qVLbUyo3NAKjwrAT1PLBw4iLQvm9KvFtMx5Xir3h6ds7qHN80e5EFSjjtme%2BU2bKp8N7dqPVf3JrpChmDLyRKeOtHy1zkVYP32tb8GS%2F%2F3z4a237mJcEpk1H6IGqjfzyVtT&X-Amz-Signature=34251ca278209b2bf1145b96f16e75a575d2860ba018bfd9d1370825eccd846d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZF3OHI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGDZoGUFxY0EEgSv0o4CQOJzo2IJOkiCRCQXay1d8STQAiEAimN87VkVQqwFlsmXCrMLVZdbbg3e65pDChyOdeZCfa8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHi0ueu3tIJVJVx6xCrcA1xmRU5Uu6cbJDupAmEUWQeFM%2FRF4i3YOrCJQ%2BiFbKDijgX7OKH%2F%2BH%2F2op5HCpYseYrKoDcC717fHy1Q%2Bn%2BTFwJ91sl5qF5%2FQw5%2BwuI1KGANJm6WCoXiPV52Dawe6E1lYdynnph9XRDYxIaSsLVFFGDMNwbBV%2Fg9hNzP0F8TvPWOjYXo0C0GOtbeNvUbQxnVgtFC3o51V36jdy7nrG0k5utv0o8etMBUuBFbhIOfCvn6aQQ%2FI7jOPVMQRqzCVgjLKkgPNG7xzAKpEUyWDNP37HQAg2Q5XtX0%2FpQr1PfVG20efHfCj4n0itHG5LeS%2Bn%2FP39fvRqozP%2FIYSWB2N9Y423LyNoa%2F73XoBcucSLbRVjoln8qrrDazrPNGAVY32cjUOskEN2%2FFhaCRoAVQPNjSChTwBaRwwDwjYbP4WKSD5GC78Xw%2FcaAlmi%2F%2BJuSY1Pjt5WEfh4svNHaCdG2e79KGsdRQzsDokJ2KIyh7dkPAyywzSTV8CMTz9o7Zukbe%2FSb7AHfkoTb3vw1zuyvuz3z%2BdDa1IU78lr%2BSpofbBJSA2ayPrRr9hXrlYZEUOni%2BEuLzMlvzGmXMmrTEUgFend8EeP0hZtcr%2Bapff%2FlYIp7TAR5nW7snAK1tMqGVlvKdMMjK%2BMIGOqUBOikVmz%2Fw49LNQg%2BrW2BaaAl83cn9hPSCeXvz9KSWj%2BAUDjLjBIUzxZ7X9futolhw61xFOu0GYfIL%2Fp9poyqhX1mU8qVLbUyo3NAKjwrAT1PLBw4iLQvm9KvFtMx5Xir3h6ds7qHN80e5EFSjjtme%2BU2bKp8N7dqPVf3JrpChmDLyRKeOtHy1zkVYP32tb8GS%2F%2F3z4a237mJcEpk1H6IGqjfzyVtT&X-Amz-Signature=e47664dc0a0afdd09059cc02653614fe5a1f96e64f01dce4295d0090ddbd9b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZF3OHI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGDZoGUFxY0EEgSv0o4CQOJzo2IJOkiCRCQXay1d8STQAiEAimN87VkVQqwFlsmXCrMLVZdbbg3e65pDChyOdeZCfa8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHi0ueu3tIJVJVx6xCrcA1xmRU5Uu6cbJDupAmEUWQeFM%2FRF4i3YOrCJQ%2BiFbKDijgX7OKH%2F%2BH%2F2op5HCpYseYrKoDcC717fHy1Q%2Bn%2BTFwJ91sl5qF5%2FQw5%2BwuI1KGANJm6WCoXiPV52Dawe6E1lYdynnph9XRDYxIaSsLVFFGDMNwbBV%2Fg9hNzP0F8TvPWOjYXo0C0GOtbeNvUbQxnVgtFC3o51V36jdy7nrG0k5utv0o8etMBUuBFbhIOfCvn6aQQ%2FI7jOPVMQRqzCVgjLKkgPNG7xzAKpEUyWDNP37HQAg2Q5XtX0%2FpQr1PfVG20efHfCj4n0itHG5LeS%2Bn%2FP39fvRqozP%2FIYSWB2N9Y423LyNoa%2F73XoBcucSLbRVjoln8qrrDazrPNGAVY32cjUOskEN2%2FFhaCRoAVQPNjSChTwBaRwwDwjYbP4WKSD5GC78Xw%2FcaAlmi%2F%2BJuSY1Pjt5WEfh4svNHaCdG2e79KGsdRQzsDokJ2KIyh7dkPAyywzSTV8CMTz9o7Zukbe%2FSb7AHfkoTb3vw1zuyvuz3z%2BdDa1IU78lr%2BSpofbBJSA2ayPrRr9hXrlYZEUOni%2BEuLzMlvzGmXMmrTEUgFend8EeP0hZtcr%2Bapff%2FlYIp7TAR5nW7snAK1tMqGVlvKdMMjK%2BMIGOqUBOikVmz%2Fw49LNQg%2BrW2BaaAl83cn9hPSCeXvz9KSWj%2BAUDjLjBIUzxZ7X9futolhw61xFOu0GYfIL%2Fp9poyqhX1mU8qVLbUyo3NAKjwrAT1PLBw4iLQvm9KvFtMx5Xir3h6ds7qHN80e5EFSjjtme%2BU2bKp8N7dqPVf3JrpChmDLyRKeOtHy1zkVYP32tb8GS%2F%2F3z4a237mJcEpk1H6IGqjfzyVtT&X-Amz-Signature=392abdf8d8a2a0941ac54519f587d4f377e2da1c3f61e81dcc4d84a71b80c45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
