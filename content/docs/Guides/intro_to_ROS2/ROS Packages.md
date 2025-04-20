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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVMBQJZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDgfO12L6fEbW1dXu%2FWm7KF90%2Bp%2FgvHA8VqXf%2FXP2CQQgIhAPoCIgbPsp2hblYNMVnFJprnsUBMfF%2Ftx%2BhURB6rEHp%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUs3j5htL0TjAmBHMq3AMZaiTxv8EF07FFi3J0XR5jjgFddlioAEgWxh3AKFqDU73fm5ssseoIJ%2FXsGQQbLFDONHmrpv2s1Hiturzt4%2BqMYZNvHwkC6UPfQBQ3jzAOWgDVrBHwzdxulo4PCrTbokc15327jLuEgAvGANRsdF5PSuIxPevKiftDs0sVnSkiqBnMY3KT8qP%2BW5KebZ5NA19AievOwEwzcLhVbaqrN%2FCmj5DB8%2F5FhCmqgh1NQcmjImNKc6LejEQ6wDGrnwUzCst2wLNyPtlevTYYG6qenjojNhujjgaMQZ64EVeWs85H23rE4t5paWAT%2Fx%2BRPy4Xpc2C7QzW0%2FKea3wJ8yYtYBStAe835uVHgmpf6sPq5k5g4GSrSYgdzhKW8IWIa9uv57yq7XShntqcioL4%2BtgZ1%2FdTAmx0CvTUdmUC%2FB4sUrYWaS%2FPinCCcnvCT%2B80vtKgaaOkEYgzvX3ZZhgeDL8HYVP6sLNeWHYC%2FOH3Dfwu2zhSNG9GFiuoZm0eo%2FxW9c%2F1apQ7JAIZ66bognLyqYF9h4148no23%2BZ%2FwnQZhkSX3PyQZv5d1iBB9mEFJXqGZJnppAdWVg1Jo9EF1Vu2TrBYcAH%2B6meI0Q8ToBJ2zHRhplLKtJBsZjyUuPakbTooVTDWyJPABjqkATrfQWry1MW4LYUFhzU3DLKhuEx5LZzdIpjg3RhBPKqiPJ8pg0aO3xSLQ2Xr32yUQD9x%2FGG9%2FoctevvnSttDRcurl0dNvmbxCDzxQ3AoyLfa7tQURV6FW2BWz6WF6VrurXMp%2FbtYyXeDkgPA6mJwssFCWboLimJGS86sBeWBRZvHgdk%2BRzzcsHi6RtB%2FSkY%2FOwn2UE1xtXOVywqwfxHoJA94%2Bxdl&X-Amz-Signature=90081920c806de839ac5a6397a801cd0b6325b4f9e01686cee752b7ff0015274&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVMBQJZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDgfO12L6fEbW1dXu%2FWm7KF90%2Bp%2FgvHA8VqXf%2FXP2CQQgIhAPoCIgbPsp2hblYNMVnFJprnsUBMfF%2Ftx%2BhURB6rEHp%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUs3j5htL0TjAmBHMq3AMZaiTxv8EF07FFi3J0XR5jjgFddlioAEgWxh3AKFqDU73fm5ssseoIJ%2FXsGQQbLFDONHmrpv2s1Hiturzt4%2BqMYZNvHwkC6UPfQBQ3jzAOWgDVrBHwzdxulo4PCrTbokc15327jLuEgAvGANRsdF5PSuIxPevKiftDs0sVnSkiqBnMY3KT8qP%2BW5KebZ5NA19AievOwEwzcLhVbaqrN%2FCmj5DB8%2F5FhCmqgh1NQcmjImNKc6LejEQ6wDGrnwUzCst2wLNyPtlevTYYG6qenjojNhujjgaMQZ64EVeWs85H23rE4t5paWAT%2Fx%2BRPy4Xpc2C7QzW0%2FKea3wJ8yYtYBStAe835uVHgmpf6sPq5k5g4GSrSYgdzhKW8IWIa9uv57yq7XShntqcioL4%2BtgZ1%2FdTAmx0CvTUdmUC%2FB4sUrYWaS%2FPinCCcnvCT%2B80vtKgaaOkEYgzvX3ZZhgeDL8HYVP6sLNeWHYC%2FOH3Dfwu2zhSNG9GFiuoZm0eo%2FxW9c%2F1apQ7JAIZ66bognLyqYF9h4148no23%2BZ%2FwnQZhkSX3PyQZv5d1iBB9mEFJXqGZJnppAdWVg1Jo9EF1Vu2TrBYcAH%2B6meI0Q8ToBJ2zHRhplLKtJBsZjyUuPakbTooVTDWyJPABjqkATrfQWry1MW4LYUFhzU3DLKhuEx5LZzdIpjg3RhBPKqiPJ8pg0aO3xSLQ2Xr32yUQD9x%2FGG9%2FoctevvnSttDRcurl0dNvmbxCDzxQ3AoyLfa7tQURV6FW2BWz6WF6VrurXMp%2FbtYyXeDkgPA6mJwssFCWboLimJGS86sBeWBRZvHgdk%2BRzzcsHi6RtB%2FSkY%2FOwn2UE1xtXOVywqwfxHoJA94%2Bxdl&X-Amz-Signature=fe080baaed2694c3e6afe84552226cff6dcd0fb4c6ec27aa8708034bd7dfc075&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVMBQJZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDgfO12L6fEbW1dXu%2FWm7KF90%2Bp%2FgvHA8VqXf%2FXP2CQQgIhAPoCIgbPsp2hblYNMVnFJprnsUBMfF%2Ftx%2BhURB6rEHp%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUs3j5htL0TjAmBHMq3AMZaiTxv8EF07FFi3J0XR5jjgFddlioAEgWxh3AKFqDU73fm5ssseoIJ%2FXsGQQbLFDONHmrpv2s1Hiturzt4%2BqMYZNvHwkC6UPfQBQ3jzAOWgDVrBHwzdxulo4PCrTbokc15327jLuEgAvGANRsdF5PSuIxPevKiftDs0sVnSkiqBnMY3KT8qP%2BW5KebZ5NA19AievOwEwzcLhVbaqrN%2FCmj5DB8%2F5FhCmqgh1NQcmjImNKc6LejEQ6wDGrnwUzCst2wLNyPtlevTYYG6qenjojNhujjgaMQZ64EVeWs85H23rE4t5paWAT%2Fx%2BRPy4Xpc2C7QzW0%2FKea3wJ8yYtYBStAe835uVHgmpf6sPq5k5g4GSrSYgdzhKW8IWIa9uv57yq7XShntqcioL4%2BtgZ1%2FdTAmx0CvTUdmUC%2FB4sUrYWaS%2FPinCCcnvCT%2B80vtKgaaOkEYgzvX3ZZhgeDL8HYVP6sLNeWHYC%2FOH3Dfwu2zhSNG9GFiuoZm0eo%2FxW9c%2F1apQ7JAIZ66bognLyqYF9h4148no23%2BZ%2FwnQZhkSX3PyQZv5d1iBB9mEFJXqGZJnppAdWVg1Jo9EF1Vu2TrBYcAH%2B6meI0Q8ToBJ2zHRhplLKtJBsZjyUuPakbTooVTDWyJPABjqkATrfQWry1MW4LYUFhzU3DLKhuEx5LZzdIpjg3RhBPKqiPJ8pg0aO3xSLQ2Xr32yUQD9x%2FGG9%2FoctevvnSttDRcurl0dNvmbxCDzxQ3AoyLfa7tQURV6FW2BWz6WF6VrurXMp%2FbtYyXeDkgPA6mJwssFCWboLimJGS86sBeWBRZvHgdk%2BRzzcsHi6RtB%2FSkY%2FOwn2UE1xtXOVywqwfxHoJA94%2Bxdl&X-Amz-Signature=2085382bb565391298a4be76c3312bfdcee7c79b6de60a8b5ac22de7f67ab217&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVMBQJZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDgfO12L6fEbW1dXu%2FWm7KF90%2Bp%2FgvHA8VqXf%2FXP2CQQgIhAPoCIgbPsp2hblYNMVnFJprnsUBMfF%2Ftx%2BhURB6rEHp%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUs3j5htL0TjAmBHMq3AMZaiTxv8EF07FFi3J0XR5jjgFddlioAEgWxh3AKFqDU73fm5ssseoIJ%2FXsGQQbLFDONHmrpv2s1Hiturzt4%2BqMYZNvHwkC6UPfQBQ3jzAOWgDVrBHwzdxulo4PCrTbokc15327jLuEgAvGANRsdF5PSuIxPevKiftDs0sVnSkiqBnMY3KT8qP%2BW5KebZ5NA19AievOwEwzcLhVbaqrN%2FCmj5DB8%2F5FhCmqgh1NQcmjImNKc6LejEQ6wDGrnwUzCst2wLNyPtlevTYYG6qenjojNhujjgaMQZ64EVeWs85H23rE4t5paWAT%2Fx%2BRPy4Xpc2C7QzW0%2FKea3wJ8yYtYBStAe835uVHgmpf6sPq5k5g4GSrSYgdzhKW8IWIa9uv57yq7XShntqcioL4%2BtgZ1%2FdTAmx0CvTUdmUC%2FB4sUrYWaS%2FPinCCcnvCT%2B80vtKgaaOkEYgzvX3ZZhgeDL8HYVP6sLNeWHYC%2FOH3Dfwu2zhSNG9GFiuoZm0eo%2FxW9c%2F1apQ7JAIZ66bognLyqYF9h4148no23%2BZ%2FwnQZhkSX3PyQZv5d1iBB9mEFJXqGZJnppAdWVg1Jo9EF1Vu2TrBYcAH%2B6meI0Q8ToBJ2zHRhplLKtJBsZjyUuPakbTooVTDWyJPABjqkATrfQWry1MW4LYUFhzU3DLKhuEx5LZzdIpjg3RhBPKqiPJ8pg0aO3xSLQ2Xr32yUQD9x%2FGG9%2FoctevvnSttDRcurl0dNvmbxCDzxQ3AoyLfa7tQURV6FW2BWz6WF6VrurXMp%2FbtYyXeDkgPA6mJwssFCWboLimJGS86sBeWBRZvHgdk%2BRzzcsHi6RtB%2FSkY%2FOwn2UE1xtXOVywqwfxHoJA94%2Bxdl&X-Amz-Signature=147f02dbdc421d4554a705f0aeb2b546fcb97221b2a61bb532c499032caa6132&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVMBQJZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDgfO12L6fEbW1dXu%2FWm7KF90%2Bp%2FgvHA8VqXf%2FXP2CQQgIhAPoCIgbPsp2hblYNMVnFJprnsUBMfF%2Ftx%2BhURB6rEHp%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUs3j5htL0TjAmBHMq3AMZaiTxv8EF07FFi3J0XR5jjgFddlioAEgWxh3AKFqDU73fm5ssseoIJ%2FXsGQQbLFDONHmrpv2s1Hiturzt4%2BqMYZNvHwkC6UPfQBQ3jzAOWgDVrBHwzdxulo4PCrTbokc15327jLuEgAvGANRsdF5PSuIxPevKiftDs0sVnSkiqBnMY3KT8qP%2BW5KebZ5NA19AievOwEwzcLhVbaqrN%2FCmj5DB8%2F5FhCmqgh1NQcmjImNKc6LejEQ6wDGrnwUzCst2wLNyPtlevTYYG6qenjojNhujjgaMQZ64EVeWs85H23rE4t5paWAT%2Fx%2BRPy4Xpc2C7QzW0%2FKea3wJ8yYtYBStAe835uVHgmpf6sPq5k5g4GSrSYgdzhKW8IWIa9uv57yq7XShntqcioL4%2BtgZ1%2FdTAmx0CvTUdmUC%2FB4sUrYWaS%2FPinCCcnvCT%2B80vtKgaaOkEYgzvX3ZZhgeDL8HYVP6sLNeWHYC%2FOH3Dfwu2zhSNG9GFiuoZm0eo%2FxW9c%2F1apQ7JAIZ66bognLyqYF9h4148no23%2BZ%2FwnQZhkSX3PyQZv5d1iBB9mEFJXqGZJnppAdWVg1Jo9EF1Vu2TrBYcAH%2B6meI0Q8ToBJ2zHRhplLKtJBsZjyUuPakbTooVTDWyJPABjqkATrfQWry1MW4LYUFhzU3DLKhuEx5LZzdIpjg3RhBPKqiPJ8pg0aO3xSLQ2Xr32yUQD9x%2FGG9%2FoctevvnSttDRcurl0dNvmbxCDzxQ3AoyLfa7tQURV6FW2BWz6WF6VrurXMp%2FbtYyXeDkgPA6mJwssFCWboLimJGS86sBeWBRZvHgdk%2BRzzcsHi6RtB%2FSkY%2FOwn2UE1xtXOVywqwfxHoJA94%2Bxdl&X-Amz-Signature=e3de4fc71e7e66a7b7e77c98751491163ad8238c433e09e2ebec9047f78658cf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVMBQJZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDgfO12L6fEbW1dXu%2FWm7KF90%2Bp%2FgvHA8VqXf%2FXP2CQQgIhAPoCIgbPsp2hblYNMVnFJprnsUBMfF%2Ftx%2BhURB6rEHp%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUs3j5htL0TjAmBHMq3AMZaiTxv8EF07FFi3J0XR5jjgFddlioAEgWxh3AKFqDU73fm5ssseoIJ%2FXsGQQbLFDONHmrpv2s1Hiturzt4%2BqMYZNvHwkC6UPfQBQ3jzAOWgDVrBHwzdxulo4PCrTbokc15327jLuEgAvGANRsdF5PSuIxPevKiftDs0sVnSkiqBnMY3KT8qP%2BW5KebZ5NA19AievOwEwzcLhVbaqrN%2FCmj5DB8%2F5FhCmqgh1NQcmjImNKc6LejEQ6wDGrnwUzCst2wLNyPtlevTYYG6qenjojNhujjgaMQZ64EVeWs85H23rE4t5paWAT%2Fx%2BRPy4Xpc2C7QzW0%2FKea3wJ8yYtYBStAe835uVHgmpf6sPq5k5g4GSrSYgdzhKW8IWIa9uv57yq7XShntqcioL4%2BtgZ1%2FdTAmx0CvTUdmUC%2FB4sUrYWaS%2FPinCCcnvCT%2B80vtKgaaOkEYgzvX3ZZhgeDL8HYVP6sLNeWHYC%2FOH3Dfwu2zhSNG9GFiuoZm0eo%2FxW9c%2F1apQ7JAIZ66bognLyqYF9h4148no23%2BZ%2FwnQZhkSX3PyQZv5d1iBB9mEFJXqGZJnppAdWVg1Jo9EF1Vu2TrBYcAH%2B6meI0Q8ToBJ2zHRhplLKtJBsZjyUuPakbTooVTDWyJPABjqkATrfQWry1MW4LYUFhzU3DLKhuEx5LZzdIpjg3RhBPKqiPJ8pg0aO3xSLQ2Xr32yUQD9x%2FGG9%2FoctevvnSttDRcurl0dNvmbxCDzxQ3AoyLfa7tQURV6FW2BWz6WF6VrurXMp%2FbtYyXeDkgPA6mJwssFCWboLimJGS86sBeWBRZvHgdk%2BRzzcsHi6RtB%2FSkY%2FOwn2UE1xtXOVywqwfxHoJA94%2Bxdl&X-Amz-Signature=9b53c9d829e4b8753da71e6087e4d79deab9cc3fb431f74cfc3c76c4df560812&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVMBQJZ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDgfO12L6fEbW1dXu%2FWm7KF90%2Bp%2FgvHA8VqXf%2FXP2CQQgIhAPoCIgbPsp2hblYNMVnFJprnsUBMfF%2Ftx%2BhURB6rEHp%2FKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUs3j5htL0TjAmBHMq3AMZaiTxv8EF07FFi3J0XR5jjgFddlioAEgWxh3AKFqDU73fm5ssseoIJ%2FXsGQQbLFDONHmrpv2s1Hiturzt4%2BqMYZNvHwkC6UPfQBQ3jzAOWgDVrBHwzdxulo4PCrTbokc15327jLuEgAvGANRsdF5PSuIxPevKiftDs0sVnSkiqBnMY3KT8qP%2BW5KebZ5NA19AievOwEwzcLhVbaqrN%2FCmj5DB8%2F5FhCmqgh1NQcmjImNKc6LejEQ6wDGrnwUzCst2wLNyPtlevTYYG6qenjojNhujjgaMQZ64EVeWs85H23rE4t5paWAT%2Fx%2BRPy4Xpc2C7QzW0%2FKea3wJ8yYtYBStAe835uVHgmpf6sPq5k5g4GSrSYgdzhKW8IWIa9uv57yq7XShntqcioL4%2BtgZ1%2FdTAmx0CvTUdmUC%2FB4sUrYWaS%2FPinCCcnvCT%2B80vtKgaaOkEYgzvX3ZZhgeDL8HYVP6sLNeWHYC%2FOH3Dfwu2zhSNG9GFiuoZm0eo%2FxW9c%2F1apQ7JAIZ66bognLyqYF9h4148no23%2BZ%2FwnQZhkSX3PyQZv5d1iBB9mEFJXqGZJnppAdWVg1Jo9EF1Vu2TrBYcAH%2B6meI0Q8ToBJ2zHRhplLKtJBsZjyUuPakbTooVTDWyJPABjqkATrfQWry1MW4LYUFhzU3DLKhuEx5LZzdIpjg3RhBPKqiPJ8pg0aO3xSLQ2Xr32yUQD9x%2FGG9%2FoctevvnSttDRcurl0dNvmbxCDzxQ3AoyLfa7tQURV6FW2BWz6WF6VrurXMp%2FbtYyXeDkgPA6mJwssFCWboLimJGS86sBeWBRZvHgdk%2BRzzcsHi6RtB%2FSkY%2FOwn2UE1xtXOVywqwfxHoJA94%2Bxdl&X-Amz-Signature=feb00ce4137a7303cb76ed30f6f199c7ec8f8c78519c2402c7ef68182aae1759&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
