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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6LGX5G%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDODEYFzNu07c5s0es9it14kfPhfwfOOZJE%2BVbXEY0XgwIgTdF8rsReuA7b%2B%2FV9kFj7DzWzmbskQzsNJA6TB94oG%2FkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1sUtxjRhBVaw%2BOtircA9fMYn1yz%2FyWIN4Xq4xcUheFoNG%2FD%2BktG%2BwE39LCX6Git8IvV1uJmGwnwuEYvHSA14YAfyqPS6zj9DjeyXJ%2Bj5DJTU67LpmUEexBApa3DyTRSAE5tpvX0lk6IQqivtMXBgeDKGZzhZ1fer3oPYpwo6r7WMYcpLfOQTILdOPJeeynAr8%2BXvPuv0MiioQAZHX482pJLvgAwmFN2ptYJzfl%2F2ARo9eUCz%2BbhVLtDv3gSN6xAA6Zi5hwtr1RVCAIvdFmFUf2drHAW4uM%2Bx%2FhpXIIjWZhBS3YM59GF%2F0oKbK%2FqvMa1psEr3DEsIMtPlxbYUHp1fAdDiIdhQLT4R73rW%2B6AJaTwPyS1UGtWE7lck89C%2BxTt3ckxfUoPAYwdczoYCgGBShJqdKIuGpmG0Pw4Hs1bV%2B6oJ%2Fo1ciinZeLxogAwW99J0eGm3BnBfeyx1EIz5JvlU4lkyJUv1b4NHfnyYtJAgESrK9xr4B60he59bQwDsccR4ixTPiMfCziySXqBr6gBW1gtoH8VsahNoe3BYyZfJZXTpFGhICKCPZPNQV49U4UQCNzC7y1MkX7HWSXWhlZs4HNtBlEBfUaodOz0AVSryX8TrYn7tufNMVEFCN%2Fonh3NC%2BFvG4%2BkhCBeqzKMJ%2Fd5cEGOqUB7RFJUjIUSpoBktUuspEXU0sHF9jMV53W5%2B2t8B0jw%2FaQCE2V%2FikPxSb8g8ijfDrJogKtNu3VQFC%2Be591qFDWTqURxfvT%2F1OlKOBVxqXTnlbBH3Y0USsEDMYccyIhGZz5J0vLPYXpTOr9HMO2UZV%2Fywhmz5s9QsEMipRh%2Bvg3GF1C9Hs6oUxKQbWNEjmI21Br%2ByAyg0atwDg06Qrne%2B74QZ9RZds1&X-Amz-Signature=f31a74a437edce54708987d4928cae11e6835d23cb72be5f31ef93f777a7c38a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6LGX5G%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDODEYFzNu07c5s0es9it14kfPhfwfOOZJE%2BVbXEY0XgwIgTdF8rsReuA7b%2B%2FV9kFj7DzWzmbskQzsNJA6TB94oG%2FkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1sUtxjRhBVaw%2BOtircA9fMYn1yz%2FyWIN4Xq4xcUheFoNG%2FD%2BktG%2BwE39LCX6Git8IvV1uJmGwnwuEYvHSA14YAfyqPS6zj9DjeyXJ%2Bj5DJTU67LpmUEexBApa3DyTRSAE5tpvX0lk6IQqivtMXBgeDKGZzhZ1fer3oPYpwo6r7WMYcpLfOQTILdOPJeeynAr8%2BXvPuv0MiioQAZHX482pJLvgAwmFN2ptYJzfl%2F2ARo9eUCz%2BbhVLtDv3gSN6xAA6Zi5hwtr1RVCAIvdFmFUf2drHAW4uM%2Bx%2FhpXIIjWZhBS3YM59GF%2F0oKbK%2FqvMa1psEr3DEsIMtPlxbYUHp1fAdDiIdhQLT4R73rW%2B6AJaTwPyS1UGtWE7lck89C%2BxTt3ckxfUoPAYwdczoYCgGBShJqdKIuGpmG0Pw4Hs1bV%2B6oJ%2Fo1ciinZeLxogAwW99J0eGm3BnBfeyx1EIz5JvlU4lkyJUv1b4NHfnyYtJAgESrK9xr4B60he59bQwDsccR4ixTPiMfCziySXqBr6gBW1gtoH8VsahNoe3BYyZfJZXTpFGhICKCPZPNQV49U4UQCNzC7y1MkX7HWSXWhlZs4HNtBlEBfUaodOz0AVSryX8TrYn7tufNMVEFCN%2Fonh3NC%2BFvG4%2BkhCBeqzKMJ%2Fd5cEGOqUB7RFJUjIUSpoBktUuspEXU0sHF9jMV53W5%2B2t8B0jw%2FaQCE2V%2FikPxSb8g8ijfDrJogKtNu3VQFC%2Be591qFDWTqURxfvT%2F1OlKOBVxqXTnlbBH3Y0USsEDMYccyIhGZz5J0vLPYXpTOr9HMO2UZV%2Fywhmz5s9QsEMipRh%2Bvg3GF1C9Hs6oUxKQbWNEjmI21Br%2ByAyg0atwDg06Qrne%2B74QZ9RZds1&X-Amz-Signature=437e6080cd2459c419528617ae7d0c4b7acdb97fd21dde639a29411fd7aeef92&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6LGX5G%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDODEYFzNu07c5s0es9it14kfPhfwfOOZJE%2BVbXEY0XgwIgTdF8rsReuA7b%2B%2FV9kFj7DzWzmbskQzsNJA6TB94oG%2FkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1sUtxjRhBVaw%2BOtircA9fMYn1yz%2FyWIN4Xq4xcUheFoNG%2FD%2BktG%2BwE39LCX6Git8IvV1uJmGwnwuEYvHSA14YAfyqPS6zj9DjeyXJ%2Bj5DJTU67LpmUEexBApa3DyTRSAE5tpvX0lk6IQqivtMXBgeDKGZzhZ1fer3oPYpwo6r7WMYcpLfOQTILdOPJeeynAr8%2BXvPuv0MiioQAZHX482pJLvgAwmFN2ptYJzfl%2F2ARo9eUCz%2BbhVLtDv3gSN6xAA6Zi5hwtr1RVCAIvdFmFUf2drHAW4uM%2Bx%2FhpXIIjWZhBS3YM59GF%2F0oKbK%2FqvMa1psEr3DEsIMtPlxbYUHp1fAdDiIdhQLT4R73rW%2B6AJaTwPyS1UGtWE7lck89C%2BxTt3ckxfUoPAYwdczoYCgGBShJqdKIuGpmG0Pw4Hs1bV%2B6oJ%2Fo1ciinZeLxogAwW99J0eGm3BnBfeyx1EIz5JvlU4lkyJUv1b4NHfnyYtJAgESrK9xr4B60he59bQwDsccR4ixTPiMfCziySXqBr6gBW1gtoH8VsahNoe3BYyZfJZXTpFGhICKCPZPNQV49U4UQCNzC7y1MkX7HWSXWhlZs4HNtBlEBfUaodOz0AVSryX8TrYn7tufNMVEFCN%2Fonh3NC%2BFvG4%2BkhCBeqzKMJ%2Fd5cEGOqUB7RFJUjIUSpoBktUuspEXU0sHF9jMV53W5%2B2t8B0jw%2FaQCE2V%2FikPxSb8g8ijfDrJogKtNu3VQFC%2Be591qFDWTqURxfvT%2F1OlKOBVxqXTnlbBH3Y0USsEDMYccyIhGZz5J0vLPYXpTOr9HMO2UZV%2Fywhmz5s9QsEMipRh%2Bvg3GF1C9Hs6oUxKQbWNEjmI21Br%2ByAyg0atwDg06Qrne%2B74QZ9RZds1&X-Amz-Signature=6847324643457b59f606487aa1160514d14ac512c1371bb64ac267acb9f26f91&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6LGX5G%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDODEYFzNu07c5s0es9it14kfPhfwfOOZJE%2BVbXEY0XgwIgTdF8rsReuA7b%2B%2FV9kFj7DzWzmbskQzsNJA6TB94oG%2FkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1sUtxjRhBVaw%2BOtircA9fMYn1yz%2FyWIN4Xq4xcUheFoNG%2FD%2BktG%2BwE39LCX6Git8IvV1uJmGwnwuEYvHSA14YAfyqPS6zj9DjeyXJ%2Bj5DJTU67LpmUEexBApa3DyTRSAE5tpvX0lk6IQqivtMXBgeDKGZzhZ1fer3oPYpwo6r7WMYcpLfOQTILdOPJeeynAr8%2BXvPuv0MiioQAZHX482pJLvgAwmFN2ptYJzfl%2F2ARo9eUCz%2BbhVLtDv3gSN6xAA6Zi5hwtr1RVCAIvdFmFUf2drHAW4uM%2Bx%2FhpXIIjWZhBS3YM59GF%2F0oKbK%2FqvMa1psEr3DEsIMtPlxbYUHp1fAdDiIdhQLT4R73rW%2B6AJaTwPyS1UGtWE7lck89C%2BxTt3ckxfUoPAYwdczoYCgGBShJqdKIuGpmG0Pw4Hs1bV%2B6oJ%2Fo1ciinZeLxogAwW99J0eGm3BnBfeyx1EIz5JvlU4lkyJUv1b4NHfnyYtJAgESrK9xr4B60he59bQwDsccR4ixTPiMfCziySXqBr6gBW1gtoH8VsahNoe3BYyZfJZXTpFGhICKCPZPNQV49U4UQCNzC7y1MkX7HWSXWhlZs4HNtBlEBfUaodOz0AVSryX8TrYn7tufNMVEFCN%2Fonh3NC%2BFvG4%2BkhCBeqzKMJ%2Fd5cEGOqUB7RFJUjIUSpoBktUuspEXU0sHF9jMV53W5%2B2t8B0jw%2FaQCE2V%2FikPxSb8g8ijfDrJogKtNu3VQFC%2Be591qFDWTqURxfvT%2F1OlKOBVxqXTnlbBH3Y0USsEDMYccyIhGZz5J0vLPYXpTOr9HMO2UZV%2Fywhmz5s9QsEMipRh%2Bvg3GF1C9Hs6oUxKQbWNEjmI21Br%2ByAyg0atwDg06Qrne%2B74QZ9RZds1&X-Amz-Signature=a4e69897c919b9d00256045f7f0ca5e9a4b76c1c42ff6e0691133156c20f42dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6LGX5G%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDODEYFzNu07c5s0es9it14kfPhfwfOOZJE%2BVbXEY0XgwIgTdF8rsReuA7b%2B%2FV9kFj7DzWzmbskQzsNJA6TB94oG%2FkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1sUtxjRhBVaw%2BOtircA9fMYn1yz%2FyWIN4Xq4xcUheFoNG%2FD%2BktG%2BwE39LCX6Git8IvV1uJmGwnwuEYvHSA14YAfyqPS6zj9DjeyXJ%2Bj5DJTU67LpmUEexBApa3DyTRSAE5tpvX0lk6IQqivtMXBgeDKGZzhZ1fer3oPYpwo6r7WMYcpLfOQTILdOPJeeynAr8%2BXvPuv0MiioQAZHX482pJLvgAwmFN2ptYJzfl%2F2ARo9eUCz%2BbhVLtDv3gSN6xAA6Zi5hwtr1RVCAIvdFmFUf2drHAW4uM%2Bx%2FhpXIIjWZhBS3YM59GF%2F0oKbK%2FqvMa1psEr3DEsIMtPlxbYUHp1fAdDiIdhQLT4R73rW%2B6AJaTwPyS1UGtWE7lck89C%2BxTt3ckxfUoPAYwdczoYCgGBShJqdKIuGpmG0Pw4Hs1bV%2B6oJ%2Fo1ciinZeLxogAwW99J0eGm3BnBfeyx1EIz5JvlU4lkyJUv1b4NHfnyYtJAgESrK9xr4B60he59bQwDsccR4ixTPiMfCziySXqBr6gBW1gtoH8VsahNoe3BYyZfJZXTpFGhICKCPZPNQV49U4UQCNzC7y1MkX7HWSXWhlZs4HNtBlEBfUaodOz0AVSryX8TrYn7tufNMVEFCN%2Fonh3NC%2BFvG4%2BkhCBeqzKMJ%2Fd5cEGOqUB7RFJUjIUSpoBktUuspEXU0sHF9jMV53W5%2B2t8B0jw%2FaQCE2V%2FikPxSb8g8ijfDrJogKtNu3VQFC%2Be591qFDWTqURxfvT%2F1OlKOBVxqXTnlbBH3Y0USsEDMYccyIhGZz5J0vLPYXpTOr9HMO2UZV%2Fywhmz5s9QsEMipRh%2Bvg3GF1C9Hs6oUxKQbWNEjmI21Br%2ByAyg0atwDg06Qrne%2B74QZ9RZds1&X-Amz-Signature=7db9953b58ce4d95062484d983d3074e25c3a7a2da822a5db3004fe244b99db0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6LGX5G%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDODEYFzNu07c5s0es9it14kfPhfwfOOZJE%2BVbXEY0XgwIgTdF8rsReuA7b%2B%2FV9kFj7DzWzmbskQzsNJA6TB94oG%2FkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1sUtxjRhBVaw%2BOtircA9fMYn1yz%2FyWIN4Xq4xcUheFoNG%2FD%2BktG%2BwE39LCX6Git8IvV1uJmGwnwuEYvHSA14YAfyqPS6zj9DjeyXJ%2Bj5DJTU67LpmUEexBApa3DyTRSAE5tpvX0lk6IQqivtMXBgeDKGZzhZ1fer3oPYpwo6r7WMYcpLfOQTILdOPJeeynAr8%2BXvPuv0MiioQAZHX482pJLvgAwmFN2ptYJzfl%2F2ARo9eUCz%2BbhVLtDv3gSN6xAA6Zi5hwtr1RVCAIvdFmFUf2drHAW4uM%2Bx%2FhpXIIjWZhBS3YM59GF%2F0oKbK%2FqvMa1psEr3DEsIMtPlxbYUHp1fAdDiIdhQLT4R73rW%2B6AJaTwPyS1UGtWE7lck89C%2BxTt3ckxfUoPAYwdczoYCgGBShJqdKIuGpmG0Pw4Hs1bV%2B6oJ%2Fo1ciinZeLxogAwW99J0eGm3BnBfeyx1EIz5JvlU4lkyJUv1b4NHfnyYtJAgESrK9xr4B60he59bQwDsccR4ixTPiMfCziySXqBr6gBW1gtoH8VsahNoe3BYyZfJZXTpFGhICKCPZPNQV49U4UQCNzC7y1MkX7HWSXWhlZs4HNtBlEBfUaodOz0AVSryX8TrYn7tufNMVEFCN%2Fonh3NC%2BFvG4%2BkhCBeqzKMJ%2Fd5cEGOqUB7RFJUjIUSpoBktUuspEXU0sHF9jMV53W5%2B2t8B0jw%2FaQCE2V%2FikPxSb8g8ijfDrJogKtNu3VQFC%2Be591qFDWTqURxfvT%2F1OlKOBVxqXTnlbBH3Y0USsEDMYccyIhGZz5J0vLPYXpTOr9HMO2UZV%2Fywhmz5s9QsEMipRh%2Bvg3GF1C9Hs6oUxKQbWNEjmI21Br%2ByAyg0atwDg06Qrne%2B74QZ9RZds1&X-Amz-Signature=45ee723b83e8c7f567a0489d4aa3bf5c27b59a6e05638bee7d807d0db39ae0c3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6LGX5G%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDODEYFzNu07c5s0es9it14kfPhfwfOOZJE%2BVbXEY0XgwIgTdF8rsReuA7b%2B%2FV9kFj7DzWzmbskQzsNJA6TB94oG%2FkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1sUtxjRhBVaw%2BOtircA9fMYn1yz%2FyWIN4Xq4xcUheFoNG%2FD%2BktG%2BwE39LCX6Git8IvV1uJmGwnwuEYvHSA14YAfyqPS6zj9DjeyXJ%2Bj5DJTU67LpmUEexBApa3DyTRSAE5tpvX0lk6IQqivtMXBgeDKGZzhZ1fer3oPYpwo6r7WMYcpLfOQTILdOPJeeynAr8%2BXvPuv0MiioQAZHX482pJLvgAwmFN2ptYJzfl%2F2ARo9eUCz%2BbhVLtDv3gSN6xAA6Zi5hwtr1RVCAIvdFmFUf2drHAW4uM%2Bx%2FhpXIIjWZhBS3YM59GF%2F0oKbK%2FqvMa1psEr3DEsIMtPlxbYUHp1fAdDiIdhQLT4R73rW%2B6AJaTwPyS1UGtWE7lck89C%2BxTt3ckxfUoPAYwdczoYCgGBShJqdKIuGpmG0Pw4Hs1bV%2B6oJ%2Fo1ciinZeLxogAwW99J0eGm3BnBfeyx1EIz5JvlU4lkyJUv1b4NHfnyYtJAgESrK9xr4B60he59bQwDsccR4ixTPiMfCziySXqBr6gBW1gtoH8VsahNoe3BYyZfJZXTpFGhICKCPZPNQV49U4UQCNzC7y1MkX7HWSXWhlZs4HNtBlEBfUaodOz0AVSryX8TrYn7tufNMVEFCN%2Fonh3NC%2BFvG4%2BkhCBeqzKMJ%2Fd5cEGOqUB7RFJUjIUSpoBktUuspEXU0sHF9jMV53W5%2B2t8B0jw%2FaQCE2V%2FikPxSb8g8ijfDrJogKtNu3VQFC%2Be591qFDWTqURxfvT%2F1OlKOBVxqXTnlbBH3Y0USsEDMYccyIhGZz5J0vLPYXpTOr9HMO2UZV%2Fywhmz5s9QsEMipRh%2Bvg3GF1C9Hs6oUxKQbWNEjmI21Br%2ByAyg0atwDg06Qrne%2B74QZ9RZds1&X-Amz-Signature=c188765fe3e9f869ef300e5347d8b744eef7f4b8d2dabc41ad9cb6191ff3d9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
