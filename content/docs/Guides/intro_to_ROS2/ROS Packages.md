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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33DUJGK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUM1vkv8fxTZQN2QJLD8zqTMRmJ1rhIl%2B6AL6diIg3zAiEA95RfJb1XKuGi%2FVQf45xxTAzhOtpuRuCsPCAGaXFAmAYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnx3ruwnBKg30t4CrcA%2BIFLTtiQERAzcvQ%2FMbMki3%2FhD%2Faa0byryL%2BDA5Zll%2FxSYJL%2FLNmNPGnkqGZFUgnKz1ObzXpjgc8uu7p%2FJEGXR%2BznzgoQTi6zOhsVTK%2FCqu%2FesVCjoSZmcTdXn6%2FuTkHMJ8wd%2BleR0zCKpJq9dkdeDNzO4ESc%2FzxjMCcSdXmJgtfARvj2UVJCp5PL8K2lMqjXX47Ohfj%2BrTlrUShJ1C3LhEdK%2BVZx6cKr0kQLLRxTh4BAzWEm%2FmPiXu2bT3el8AxKUTlw%2BDbtXCHTPKrzODG4tA9Gsn0wjUSoWUgBxBPMaOaVyWC77J1ah5Im38s9HlSO6Obich1hGsm0H2mYU8sJo1C8T0UmTbr4J6kchUZ64ichoAwBz%2FtjaJyioGJlfaf9i11FOwGFGoTkh%2F6jcASJISyMAIIWvGkNzdMyX6%2F4Ej%2B%2F%2BM2qolNTKPvmR%2BqBzCIptcgvgZTP6pVx8sZ1l4tKBiLNJFV0nHqwOCuk596w%2Fz45BIJBWjPbTUnANy8Kd15Hhraogeaf8tOWoLl1yxtw7REtfUUsWK7RbSz2YGUSUXburKAMZTpzX27YIoeKApkWYJEzqaLw7jHcpGFROYhuyRaWAIk03CGm4oElxFeYWRkmK1K%2FYnu3SNhyFyAMKek1cIGOqUBjReHsLhYwpjjeBvRiVVN9QRcKGbtpTvei3gPZVBT1EPO%2B%2F%2BxEZfzTNJVAS%2B3BDBsQlSZ5tNitwcmAIKVefy%2B9FhPFGxPsQK7blzVTY2%2BFYpRqu%2BatwKCkJjYxTyj7hMqiMOvw5ZgP6Dq30Vn3CG30WeamZ7cA7Nmei5Oqcm9wXe6WnkgXx%2B1IvzKKNWJwb0p34xJWvvvqbYUW5EK%2BIVJokxOfp1S&X-Amz-Signature=51e108a03dbdfd8259391b28375ae5e25431b15d9b6e5efd5b5ca63770c496c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33DUJGK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUM1vkv8fxTZQN2QJLD8zqTMRmJ1rhIl%2B6AL6diIg3zAiEA95RfJb1XKuGi%2FVQf45xxTAzhOtpuRuCsPCAGaXFAmAYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnx3ruwnBKg30t4CrcA%2BIFLTtiQERAzcvQ%2FMbMki3%2FhD%2Faa0byryL%2BDA5Zll%2FxSYJL%2FLNmNPGnkqGZFUgnKz1ObzXpjgc8uu7p%2FJEGXR%2BznzgoQTi6zOhsVTK%2FCqu%2FesVCjoSZmcTdXn6%2FuTkHMJ8wd%2BleR0zCKpJq9dkdeDNzO4ESc%2FzxjMCcSdXmJgtfARvj2UVJCp5PL8K2lMqjXX47Ohfj%2BrTlrUShJ1C3LhEdK%2BVZx6cKr0kQLLRxTh4BAzWEm%2FmPiXu2bT3el8AxKUTlw%2BDbtXCHTPKrzODG4tA9Gsn0wjUSoWUgBxBPMaOaVyWC77J1ah5Im38s9HlSO6Obich1hGsm0H2mYU8sJo1C8T0UmTbr4J6kchUZ64ichoAwBz%2FtjaJyioGJlfaf9i11FOwGFGoTkh%2F6jcASJISyMAIIWvGkNzdMyX6%2F4Ej%2B%2F%2BM2qolNTKPvmR%2BqBzCIptcgvgZTP6pVx8sZ1l4tKBiLNJFV0nHqwOCuk596w%2Fz45BIJBWjPbTUnANy8Kd15Hhraogeaf8tOWoLl1yxtw7REtfUUsWK7RbSz2YGUSUXburKAMZTpzX27YIoeKApkWYJEzqaLw7jHcpGFROYhuyRaWAIk03CGm4oElxFeYWRkmK1K%2FYnu3SNhyFyAMKek1cIGOqUBjReHsLhYwpjjeBvRiVVN9QRcKGbtpTvei3gPZVBT1EPO%2B%2F%2BxEZfzTNJVAS%2B3BDBsQlSZ5tNitwcmAIKVefy%2B9FhPFGxPsQK7blzVTY2%2BFYpRqu%2BatwKCkJjYxTyj7hMqiMOvw5ZgP6Dq30Vn3CG30WeamZ7cA7Nmei5Oqcm9wXe6WnkgXx%2B1IvzKKNWJwb0p34xJWvvvqbYUW5EK%2BIVJokxOfp1S&X-Amz-Signature=061a6dde75496a3fe3f3cfe94e68ef98624768589f13316e575825bf3fc374f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33DUJGK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUM1vkv8fxTZQN2QJLD8zqTMRmJ1rhIl%2B6AL6diIg3zAiEA95RfJb1XKuGi%2FVQf45xxTAzhOtpuRuCsPCAGaXFAmAYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnx3ruwnBKg30t4CrcA%2BIFLTtiQERAzcvQ%2FMbMki3%2FhD%2Faa0byryL%2BDA5Zll%2FxSYJL%2FLNmNPGnkqGZFUgnKz1ObzXpjgc8uu7p%2FJEGXR%2BznzgoQTi6zOhsVTK%2FCqu%2FesVCjoSZmcTdXn6%2FuTkHMJ8wd%2BleR0zCKpJq9dkdeDNzO4ESc%2FzxjMCcSdXmJgtfARvj2UVJCp5PL8K2lMqjXX47Ohfj%2BrTlrUShJ1C3LhEdK%2BVZx6cKr0kQLLRxTh4BAzWEm%2FmPiXu2bT3el8AxKUTlw%2BDbtXCHTPKrzODG4tA9Gsn0wjUSoWUgBxBPMaOaVyWC77J1ah5Im38s9HlSO6Obich1hGsm0H2mYU8sJo1C8T0UmTbr4J6kchUZ64ichoAwBz%2FtjaJyioGJlfaf9i11FOwGFGoTkh%2F6jcASJISyMAIIWvGkNzdMyX6%2F4Ej%2B%2F%2BM2qolNTKPvmR%2BqBzCIptcgvgZTP6pVx8sZ1l4tKBiLNJFV0nHqwOCuk596w%2Fz45BIJBWjPbTUnANy8Kd15Hhraogeaf8tOWoLl1yxtw7REtfUUsWK7RbSz2YGUSUXburKAMZTpzX27YIoeKApkWYJEzqaLw7jHcpGFROYhuyRaWAIk03CGm4oElxFeYWRkmK1K%2FYnu3SNhyFyAMKek1cIGOqUBjReHsLhYwpjjeBvRiVVN9QRcKGbtpTvei3gPZVBT1EPO%2B%2F%2BxEZfzTNJVAS%2B3BDBsQlSZ5tNitwcmAIKVefy%2B9FhPFGxPsQK7blzVTY2%2BFYpRqu%2BatwKCkJjYxTyj7hMqiMOvw5ZgP6Dq30Vn3CG30WeamZ7cA7Nmei5Oqcm9wXe6WnkgXx%2B1IvzKKNWJwb0p34xJWvvvqbYUW5EK%2BIVJokxOfp1S&X-Amz-Signature=7f663ebb305d9ef84bfa7c9e508602cd3abf63244a28f933d3eea62d2cd98b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33DUJGK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUM1vkv8fxTZQN2QJLD8zqTMRmJ1rhIl%2B6AL6diIg3zAiEA95RfJb1XKuGi%2FVQf45xxTAzhOtpuRuCsPCAGaXFAmAYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnx3ruwnBKg30t4CrcA%2BIFLTtiQERAzcvQ%2FMbMki3%2FhD%2Faa0byryL%2BDA5Zll%2FxSYJL%2FLNmNPGnkqGZFUgnKz1ObzXpjgc8uu7p%2FJEGXR%2BznzgoQTi6zOhsVTK%2FCqu%2FesVCjoSZmcTdXn6%2FuTkHMJ8wd%2BleR0zCKpJq9dkdeDNzO4ESc%2FzxjMCcSdXmJgtfARvj2UVJCp5PL8K2lMqjXX47Ohfj%2BrTlrUShJ1C3LhEdK%2BVZx6cKr0kQLLRxTh4BAzWEm%2FmPiXu2bT3el8AxKUTlw%2BDbtXCHTPKrzODG4tA9Gsn0wjUSoWUgBxBPMaOaVyWC77J1ah5Im38s9HlSO6Obich1hGsm0H2mYU8sJo1C8T0UmTbr4J6kchUZ64ichoAwBz%2FtjaJyioGJlfaf9i11FOwGFGoTkh%2F6jcASJISyMAIIWvGkNzdMyX6%2F4Ej%2B%2F%2BM2qolNTKPvmR%2BqBzCIptcgvgZTP6pVx8sZ1l4tKBiLNJFV0nHqwOCuk596w%2Fz45BIJBWjPbTUnANy8Kd15Hhraogeaf8tOWoLl1yxtw7REtfUUsWK7RbSz2YGUSUXburKAMZTpzX27YIoeKApkWYJEzqaLw7jHcpGFROYhuyRaWAIk03CGm4oElxFeYWRkmK1K%2FYnu3SNhyFyAMKek1cIGOqUBjReHsLhYwpjjeBvRiVVN9QRcKGbtpTvei3gPZVBT1EPO%2B%2F%2BxEZfzTNJVAS%2B3BDBsQlSZ5tNitwcmAIKVefy%2B9FhPFGxPsQK7blzVTY2%2BFYpRqu%2BatwKCkJjYxTyj7hMqiMOvw5ZgP6Dq30Vn3CG30WeamZ7cA7Nmei5Oqcm9wXe6WnkgXx%2B1IvzKKNWJwb0p34xJWvvvqbYUW5EK%2BIVJokxOfp1S&X-Amz-Signature=bb504f28056811a547c536b39b640fb64cbbde9df17c86698b5631c19862fb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33DUJGK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUM1vkv8fxTZQN2QJLD8zqTMRmJ1rhIl%2B6AL6diIg3zAiEA95RfJb1XKuGi%2FVQf45xxTAzhOtpuRuCsPCAGaXFAmAYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnx3ruwnBKg30t4CrcA%2BIFLTtiQERAzcvQ%2FMbMki3%2FhD%2Faa0byryL%2BDA5Zll%2FxSYJL%2FLNmNPGnkqGZFUgnKz1ObzXpjgc8uu7p%2FJEGXR%2BznzgoQTi6zOhsVTK%2FCqu%2FesVCjoSZmcTdXn6%2FuTkHMJ8wd%2BleR0zCKpJq9dkdeDNzO4ESc%2FzxjMCcSdXmJgtfARvj2UVJCp5PL8K2lMqjXX47Ohfj%2BrTlrUShJ1C3LhEdK%2BVZx6cKr0kQLLRxTh4BAzWEm%2FmPiXu2bT3el8AxKUTlw%2BDbtXCHTPKrzODG4tA9Gsn0wjUSoWUgBxBPMaOaVyWC77J1ah5Im38s9HlSO6Obich1hGsm0H2mYU8sJo1C8T0UmTbr4J6kchUZ64ichoAwBz%2FtjaJyioGJlfaf9i11FOwGFGoTkh%2F6jcASJISyMAIIWvGkNzdMyX6%2F4Ej%2B%2F%2BM2qolNTKPvmR%2BqBzCIptcgvgZTP6pVx8sZ1l4tKBiLNJFV0nHqwOCuk596w%2Fz45BIJBWjPbTUnANy8Kd15Hhraogeaf8tOWoLl1yxtw7REtfUUsWK7RbSz2YGUSUXburKAMZTpzX27YIoeKApkWYJEzqaLw7jHcpGFROYhuyRaWAIk03CGm4oElxFeYWRkmK1K%2FYnu3SNhyFyAMKek1cIGOqUBjReHsLhYwpjjeBvRiVVN9QRcKGbtpTvei3gPZVBT1EPO%2B%2F%2BxEZfzTNJVAS%2B3BDBsQlSZ5tNitwcmAIKVefy%2B9FhPFGxPsQK7blzVTY2%2BFYpRqu%2BatwKCkJjYxTyj7hMqiMOvw5ZgP6Dq30Vn3CG30WeamZ7cA7Nmei5Oqcm9wXe6WnkgXx%2B1IvzKKNWJwb0p34xJWvvvqbYUW5EK%2BIVJokxOfp1S&X-Amz-Signature=179a5919bbb05479125277e18066417eac0f218c7cc6b5f467447ebb3b01e5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33DUJGK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUM1vkv8fxTZQN2QJLD8zqTMRmJ1rhIl%2B6AL6diIg3zAiEA95RfJb1XKuGi%2FVQf45xxTAzhOtpuRuCsPCAGaXFAmAYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnx3ruwnBKg30t4CrcA%2BIFLTtiQERAzcvQ%2FMbMki3%2FhD%2Faa0byryL%2BDA5Zll%2FxSYJL%2FLNmNPGnkqGZFUgnKz1ObzXpjgc8uu7p%2FJEGXR%2BznzgoQTi6zOhsVTK%2FCqu%2FesVCjoSZmcTdXn6%2FuTkHMJ8wd%2BleR0zCKpJq9dkdeDNzO4ESc%2FzxjMCcSdXmJgtfARvj2UVJCp5PL8K2lMqjXX47Ohfj%2BrTlrUShJ1C3LhEdK%2BVZx6cKr0kQLLRxTh4BAzWEm%2FmPiXu2bT3el8AxKUTlw%2BDbtXCHTPKrzODG4tA9Gsn0wjUSoWUgBxBPMaOaVyWC77J1ah5Im38s9HlSO6Obich1hGsm0H2mYU8sJo1C8T0UmTbr4J6kchUZ64ichoAwBz%2FtjaJyioGJlfaf9i11FOwGFGoTkh%2F6jcASJISyMAIIWvGkNzdMyX6%2F4Ej%2B%2F%2BM2qolNTKPvmR%2BqBzCIptcgvgZTP6pVx8sZ1l4tKBiLNJFV0nHqwOCuk596w%2Fz45BIJBWjPbTUnANy8Kd15Hhraogeaf8tOWoLl1yxtw7REtfUUsWK7RbSz2YGUSUXburKAMZTpzX27YIoeKApkWYJEzqaLw7jHcpGFROYhuyRaWAIk03CGm4oElxFeYWRkmK1K%2FYnu3SNhyFyAMKek1cIGOqUBjReHsLhYwpjjeBvRiVVN9QRcKGbtpTvei3gPZVBT1EPO%2B%2F%2BxEZfzTNJVAS%2B3BDBsQlSZ5tNitwcmAIKVefy%2B9FhPFGxPsQK7blzVTY2%2BFYpRqu%2BatwKCkJjYxTyj7hMqiMOvw5ZgP6Dq30Vn3CG30WeamZ7cA7Nmei5Oqcm9wXe6WnkgXx%2B1IvzKKNWJwb0p34xJWvvvqbYUW5EK%2BIVJokxOfp1S&X-Amz-Signature=cba13c87f14c85e04dbb8bda2e3551d3e660426452582f100e0c416cf42285fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33DUJGK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUM1vkv8fxTZQN2QJLD8zqTMRmJ1rhIl%2B6AL6diIg3zAiEA95RfJb1XKuGi%2FVQf45xxTAzhOtpuRuCsPCAGaXFAmAYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPnx3ruwnBKg30t4CrcA%2BIFLTtiQERAzcvQ%2FMbMki3%2FhD%2Faa0byryL%2BDA5Zll%2FxSYJL%2FLNmNPGnkqGZFUgnKz1ObzXpjgc8uu7p%2FJEGXR%2BznzgoQTi6zOhsVTK%2FCqu%2FesVCjoSZmcTdXn6%2FuTkHMJ8wd%2BleR0zCKpJq9dkdeDNzO4ESc%2FzxjMCcSdXmJgtfARvj2UVJCp5PL8K2lMqjXX47Ohfj%2BrTlrUShJ1C3LhEdK%2BVZx6cKr0kQLLRxTh4BAzWEm%2FmPiXu2bT3el8AxKUTlw%2BDbtXCHTPKrzODG4tA9Gsn0wjUSoWUgBxBPMaOaVyWC77J1ah5Im38s9HlSO6Obich1hGsm0H2mYU8sJo1C8T0UmTbr4J6kchUZ64ichoAwBz%2FtjaJyioGJlfaf9i11FOwGFGoTkh%2F6jcASJISyMAIIWvGkNzdMyX6%2F4Ej%2B%2F%2BM2qolNTKPvmR%2BqBzCIptcgvgZTP6pVx8sZ1l4tKBiLNJFV0nHqwOCuk596w%2Fz45BIJBWjPbTUnANy8Kd15Hhraogeaf8tOWoLl1yxtw7REtfUUsWK7RbSz2YGUSUXburKAMZTpzX27YIoeKApkWYJEzqaLw7jHcpGFROYhuyRaWAIk03CGm4oElxFeYWRkmK1K%2FYnu3SNhyFyAMKek1cIGOqUBjReHsLhYwpjjeBvRiVVN9QRcKGbtpTvei3gPZVBT1EPO%2B%2F%2BxEZfzTNJVAS%2B3BDBsQlSZ5tNitwcmAIKVefy%2B9FhPFGxPsQK7blzVTY2%2BFYpRqu%2BatwKCkJjYxTyj7hMqiMOvw5ZgP6Dq30Vn3CG30WeamZ7cA7Nmei5Oqcm9wXe6WnkgXx%2B1IvzKKNWJwb0p34xJWvvvqbYUW5EK%2BIVJokxOfp1S&X-Amz-Signature=a9fbd557ecde137751b6a8bdd9142a23f655486ff421b86a7f814fac78742b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
