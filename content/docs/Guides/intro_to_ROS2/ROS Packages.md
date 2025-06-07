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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW22ZQ5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkOFBa925Wz3LfsOyAG%2FRt7z9FlRun%2BNimudshxdwpwQIgU0e8nTR3w%2B6TfA%2B3BJw01Pgf0wSXMMgMuckffb2k8%2BIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPXIJltT672ptxXiiyrcA3lfvfvww4Y1zbcr%2B1K5olcwksyC6Mn%2Ba7Y0pSN0ByFrKm8%2BP9s3pkHgjxqUa8ub6VXVtTEQbDL0cxIYu61Vk6LE9PA2P9NCxSfAgqss%2B63CehX1D35gunt3Bpo%2Fr2hjX8XH8eDSeh4Kjr4bjt%2FOJ8TeiHL7Nv355v0bwEMrqhxbRL6imLuH5XH9lhBfVCFdY6n6VgqDkRJYZSIjrb5MEfiMWkD2UnI2M0S4CgMn%2FlcA%2BiZ2l%2FlWib2XRdRUfkM8uGZR1UQvJGscXcZVEcXvipUtQbsPD%2Fs2o33bHV7Bp3R4WmnZHjKJtxi1Ez7htlgf5H37NtvwzrMtS7vuPZaReq4a9hotX%2B3I4Lehe%2BMqtusRqSQ7Hr40H6CvGan5qdfqRO%2FxzmcFjYRyhyUhShydV5qRTZngePw3vnP5%2BrRBR62Mp8w0H%2BvAPEns%2BmH3p40cKcEKEhdldJj2TTv6tm21%2FxYhZftoXa95CH0efOWfkuG8T0z558EmfuDsreP9dj%2BzFpiTl11RxHURZeRbDll%2BPnRPnXaK61fRCSb%2FNSKwV2ff5n7UJacjbg%2Bu8NP1u1hr7iHpWTuJsEgMF9N%2FsFx5lX%2FXkz1b6OKBHEWjZGWhTyz1N%2FH%2FpZIkkZQu4%2FHcMMOBkcIGOqUBgEJcGeeAv1OfxRKkeOJe4vTXdSx9t1%2Bt8PSQ1Wvac1vJHsKzc7pSt%2FY8%2BG1PVxHES15x52L1zUKwBXXZwR3wBre9rT0l3Gydl5wkF9zW76RPMKwarWhWGZmMu2TWHpVvPVbyLuK4hn%2BjZMw%2FeGnYu%2BHUrx3ID10EIyV6oMQZcJr3QcC1R0IKj98ob5NOxJbW0viaPJW6eI0vLQ4yGagSFowM1RNX&X-Amz-Signature=0ced6166f1df9c2ce4fd45d70440d4b8e8d4da3801faaf711b7c443784a3caca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW22ZQ5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkOFBa925Wz3LfsOyAG%2FRt7z9FlRun%2BNimudshxdwpwQIgU0e8nTR3w%2B6TfA%2B3BJw01Pgf0wSXMMgMuckffb2k8%2BIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPXIJltT672ptxXiiyrcA3lfvfvww4Y1zbcr%2B1K5olcwksyC6Mn%2Ba7Y0pSN0ByFrKm8%2BP9s3pkHgjxqUa8ub6VXVtTEQbDL0cxIYu61Vk6LE9PA2P9NCxSfAgqss%2B63CehX1D35gunt3Bpo%2Fr2hjX8XH8eDSeh4Kjr4bjt%2FOJ8TeiHL7Nv355v0bwEMrqhxbRL6imLuH5XH9lhBfVCFdY6n6VgqDkRJYZSIjrb5MEfiMWkD2UnI2M0S4CgMn%2FlcA%2BiZ2l%2FlWib2XRdRUfkM8uGZR1UQvJGscXcZVEcXvipUtQbsPD%2Fs2o33bHV7Bp3R4WmnZHjKJtxi1Ez7htlgf5H37NtvwzrMtS7vuPZaReq4a9hotX%2B3I4Lehe%2BMqtusRqSQ7Hr40H6CvGan5qdfqRO%2FxzmcFjYRyhyUhShydV5qRTZngePw3vnP5%2BrRBR62Mp8w0H%2BvAPEns%2BmH3p40cKcEKEhdldJj2TTv6tm21%2FxYhZftoXa95CH0efOWfkuG8T0z558EmfuDsreP9dj%2BzFpiTl11RxHURZeRbDll%2BPnRPnXaK61fRCSb%2FNSKwV2ff5n7UJacjbg%2Bu8NP1u1hr7iHpWTuJsEgMF9N%2FsFx5lX%2FXkz1b6OKBHEWjZGWhTyz1N%2FH%2FpZIkkZQu4%2FHcMMOBkcIGOqUBgEJcGeeAv1OfxRKkeOJe4vTXdSx9t1%2Bt8PSQ1Wvac1vJHsKzc7pSt%2FY8%2BG1PVxHES15x52L1zUKwBXXZwR3wBre9rT0l3Gydl5wkF9zW76RPMKwarWhWGZmMu2TWHpVvPVbyLuK4hn%2BjZMw%2FeGnYu%2BHUrx3ID10EIyV6oMQZcJr3QcC1R0IKj98ob5NOxJbW0viaPJW6eI0vLQ4yGagSFowM1RNX&X-Amz-Signature=c44cd55b20970c6a5422d68d44262d125378d77eab793e40f442978a86dfc8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW22ZQ5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkOFBa925Wz3LfsOyAG%2FRt7z9FlRun%2BNimudshxdwpwQIgU0e8nTR3w%2B6TfA%2B3BJw01Pgf0wSXMMgMuckffb2k8%2BIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPXIJltT672ptxXiiyrcA3lfvfvww4Y1zbcr%2B1K5olcwksyC6Mn%2Ba7Y0pSN0ByFrKm8%2BP9s3pkHgjxqUa8ub6VXVtTEQbDL0cxIYu61Vk6LE9PA2P9NCxSfAgqss%2B63CehX1D35gunt3Bpo%2Fr2hjX8XH8eDSeh4Kjr4bjt%2FOJ8TeiHL7Nv355v0bwEMrqhxbRL6imLuH5XH9lhBfVCFdY6n6VgqDkRJYZSIjrb5MEfiMWkD2UnI2M0S4CgMn%2FlcA%2BiZ2l%2FlWib2XRdRUfkM8uGZR1UQvJGscXcZVEcXvipUtQbsPD%2Fs2o33bHV7Bp3R4WmnZHjKJtxi1Ez7htlgf5H37NtvwzrMtS7vuPZaReq4a9hotX%2B3I4Lehe%2BMqtusRqSQ7Hr40H6CvGan5qdfqRO%2FxzmcFjYRyhyUhShydV5qRTZngePw3vnP5%2BrRBR62Mp8w0H%2BvAPEns%2BmH3p40cKcEKEhdldJj2TTv6tm21%2FxYhZftoXa95CH0efOWfkuG8T0z558EmfuDsreP9dj%2BzFpiTl11RxHURZeRbDll%2BPnRPnXaK61fRCSb%2FNSKwV2ff5n7UJacjbg%2Bu8NP1u1hr7iHpWTuJsEgMF9N%2FsFx5lX%2FXkz1b6OKBHEWjZGWhTyz1N%2FH%2FpZIkkZQu4%2FHcMMOBkcIGOqUBgEJcGeeAv1OfxRKkeOJe4vTXdSx9t1%2Bt8PSQ1Wvac1vJHsKzc7pSt%2FY8%2BG1PVxHES15x52L1zUKwBXXZwR3wBre9rT0l3Gydl5wkF9zW76RPMKwarWhWGZmMu2TWHpVvPVbyLuK4hn%2BjZMw%2FeGnYu%2BHUrx3ID10EIyV6oMQZcJr3QcC1R0IKj98ob5NOxJbW0viaPJW6eI0vLQ4yGagSFowM1RNX&X-Amz-Signature=3215bac41a8688f9707724f11cb9dc8edc9e2dead6785f6637b8cc50d4078e99&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW22ZQ5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkOFBa925Wz3LfsOyAG%2FRt7z9FlRun%2BNimudshxdwpwQIgU0e8nTR3w%2B6TfA%2B3BJw01Pgf0wSXMMgMuckffb2k8%2BIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPXIJltT672ptxXiiyrcA3lfvfvww4Y1zbcr%2B1K5olcwksyC6Mn%2Ba7Y0pSN0ByFrKm8%2BP9s3pkHgjxqUa8ub6VXVtTEQbDL0cxIYu61Vk6LE9PA2P9NCxSfAgqss%2B63CehX1D35gunt3Bpo%2Fr2hjX8XH8eDSeh4Kjr4bjt%2FOJ8TeiHL7Nv355v0bwEMrqhxbRL6imLuH5XH9lhBfVCFdY6n6VgqDkRJYZSIjrb5MEfiMWkD2UnI2M0S4CgMn%2FlcA%2BiZ2l%2FlWib2XRdRUfkM8uGZR1UQvJGscXcZVEcXvipUtQbsPD%2Fs2o33bHV7Bp3R4WmnZHjKJtxi1Ez7htlgf5H37NtvwzrMtS7vuPZaReq4a9hotX%2B3I4Lehe%2BMqtusRqSQ7Hr40H6CvGan5qdfqRO%2FxzmcFjYRyhyUhShydV5qRTZngePw3vnP5%2BrRBR62Mp8w0H%2BvAPEns%2BmH3p40cKcEKEhdldJj2TTv6tm21%2FxYhZftoXa95CH0efOWfkuG8T0z558EmfuDsreP9dj%2BzFpiTl11RxHURZeRbDll%2BPnRPnXaK61fRCSb%2FNSKwV2ff5n7UJacjbg%2Bu8NP1u1hr7iHpWTuJsEgMF9N%2FsFx5lX%2FXkz1b6OKBHEWjZGWhTyz1N%2FH%2FpZIkkZQu4%2FHcMMOBkcIGOqUBgEJcGeeAv1OfxRKkeOJe4vTXdSx9t1%2Bt8PSQ1Wvac1vJHsKzc7pSt%2FY8%2BG1PVxHES15x52L1zUKwBXXZwR3wBre9rT0l3Gydl5wkF9zW76RPMKwarWhWGZmMu2TWHpVvPVbyLuK4hn%2BjZMw%2FeGnYu%2BHUrx3ID10EIyV6oMQZcJr3QcC1R0IKj98ob5NOxJbW0viaPJW6eI0vLQ4yGagSFowM1RNX&X-Amz-Signature=0bd555d75f4fd8b2c732c1783020aaf0bfac05c08883e55233f76286c5407e44&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW22ZQ5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkOFBa925Wz3LfsOyAG%2FRt7z9FlRun%2BNimudshxdwpwQIgU0e8nTR3w%2B6TfA%2B3BJw01Pgf0wSXMMgMuckffb2k8%2BIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPXIJltT672ptxXiiyrcA3lfvfvww4Y1zbcr%2B1K5olcwksyC6Mn%2Ba7Y0pSN0ByFrKm8%2BP9s3pkHgjxqUa8ub6VXVtTEQbDL0cxIYu61Vk6LE9PA2P9NCxSfAgqss%2B63CehX1D35gunt3Bpo%2Fr2hjX8XH8eDSeh4Kjr4bjt%2FOJ8TeiHL7Nv355v0bwEMrqhxbRL6imLuH5XH9lhBfVCFdY6n6VgqDkRJYZSIjrb5MEfiMWkD2UnI2M0S4CgMn%2FlcA%2BiZ2l%2FlWib2XRdRUfkM8uGZR1UQvJGscXcZVEcXvipUtQbsPD%2Fs2o33bHV7Bp3R4WmnZHjKJtxi1Ez7htlgf5H37NtvwzrMtS7vuPZaReq4a9hotX%2B3I4Lehe%2BMqtusRqSQ7Hr40H6CvGan5qdfqRO%2FxzmcFjYRyhyUhShydV5qRTZngePw3vnP5%2BrRBR62Mp8w0H%2BvAPEns%2BmH3p40cKcEKEhdldJj2TTv6tm21%2FxYhZftoXa95CH0efOWfkuG8T0z558EmfuDsreP9dj%2BzFpiTl11RxHURZeRbDll%2BPnRPnXaK61fRCSb%2FNSKwV2ff5n7UJacjbg%2Bu8NP1u1hr7iHpWTuJsEgMF9N%2FsFx5lX%2FXkz1b6OKBHEWjZGWhTyz1N%2FH%2FpZIkkZQu4%2FHcMMOBkcIGOqUBgEJcGeeAv1OfxRKkeOJe4vTXdSx9t1%2Bt8PSQ1Wvac1vJHsKzc7pSt%2FY8%2BG1PVxHES15x52L1zUKwBXXZwR3wBre9rT0l3Gydl5wkF9zW76RPMKwarWhWGZmMu2TWHpVvPVbyLuK4hn%2BjZMw%2FeGnYu%2BHUrx3ID10EIyV6oMQZcJr3QcC1R0IKj98ob5NOxJbW0viaPJW6eI0vLQ4yGagSFowM1RNX&X-Amz-Signature=b488fa5f1ebdc313571abc51b2bbf0bb32f92ae74f55930f4744c8f10d12972a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW22ZQ5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkOFBa925Wz3LfsOyAG%2FRt7z9FlRun%2BNimudshxdwpwQIgU0e8nTR3w%2B6TfA%2B3BJw01Pgf0wSXMMgMuckffb2k8%2BIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPXIJltT672ptxXiiyrcA3lfvfvww4Y1zbcr%2B1K5olcwksyC6Mn%2Ba7Y0pSN0ByFrKm8%2BP9s3pkHgjxqUa8ub6VXVtTEQbDL0cxIYu61Vk6LE9PA2P9NCxSfAgqss%2B63CehX1D35gunt3Bpo%2Fr2hjX8XH8eDSeh4Kjr4bjt%2FOJ8TeiHL7Nv355v0bwEMrqhxbRL6imLuH5XH9lhBfVCFdY6n6VgqDkRJYZSIjrb5MEfiMWkD2UnI2M0S4CgMn%2FlcA%2BiZ2l%2FlWib2XRdRUfkM8uGZR1UQvJGscXcZVEcXvipUtQbsPD%2Fs2o33bHV7Bp3R4WmnZHjKJtxi1Ez7htlgf5H37NtvwzrMtS7vuPZaReq4a9hotX%2B3I4Lehe%2BMqtusRqSQ7Hr40H6CvGan5qdfqRO%2FxzmcFjYRyhyUhShydV5qRTZngePw3vnP5%2BrRBR62Mp8w0H%2BvAPEns%2BmH3p40cKcEKEhdldJj2TTv6tm21%2FxYhZftoXa95CH0efOWfkuG8T0z558EmfuDsreP9dj%2BzFpiTl11RxHURZeRbDll%2BPnRPnXaK61fRCSb%2FNSKwV2ff5n7UJacjbg%2Bu8NP1u1hr7iHpWTuJsEgMF9N%2FsFx5lX%2FXkz1b6OKBHEWjZGWhTyz1N%2FH%2FpZIkkZQu4%2FHcMMOBkcIGOqUBgEJcGeeAv1OfxRKkeOJe4vTXdSx9t1%2Bt8PSQ1Wvac1vJHsKzc7pSt%2FY8%2BG1PVxHES15x52L1zUKwBXXZwR3wBre9rT0l3Gydl5wkF9zW76RPMKwarWhWGZmMu2TWHpVvPVbyLuK4hn%2BjZMw%2FeGnYu%2BHUrx3ID10EIyV6oMQZcJr3QcC1R0IKj98ob5NOxJbW0viaPJW6eI0vLQ4yGagSFowM1RNX&X-Amz-Signature=e4936f8d32e7742d708761cb4a865b9e80c19355d5936e46a7b3afda24fe46c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQW22ZQ5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkOFBa925Wz3LfsOyAG%2FRt7z9FlRun%2BNimudshxdwpwQIgU0e8nTR3w%2B6TfA%2B3BJw01Pgf0wSXMMgMuckffb2k8%2BIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPXIJltT672ptxXiiyrcA3lfvfvww4Y1zbcr%2B1K5olcwksyC6Mn%2Ba7Y0pSN0ByFrKm8%2BP9s3pkHgjxqUa8ub6VXVtTEQbDL0cxIYu61Vk6LE9PA2P9NCxSfAgqss%2B63CehX1D35gunt3Bpo%2Fr2hjX8XH8eDSeh4Kjr4bjt%2FOJ8TeiHL7Nv355v0bwEMrqhxbRL6imLuH5XH9lhBfVCFdY6n6VgqDkRJYZSIjrb5MEfiMWkD2UnI2M0S4CgMn%2FlcA%2BiZ2l%2FlWib2XRdRUfkM8uGZR1UQvJGscXcZVEcXvipUtQbsPD%2Fs2o33bHV7Bp3R4WmnZHjKJtxi1Ez7htlgf5H37NtvwzrMtS7vuPZaReq4a9hotX%2B3I4Lehe%2BMqtusRqSQ7Hr40H6CvGan5qdfqRO%2FxzmcFjYRyhyUhShydV5qRTZngePw3vnP5%2BrRBR62Mp8w0H%2BvAPEns%2BmH3p40cKcEKEhdldJj2TTv6tm21%2FxYhZftoXa95CH0efOWfkuG8T0z558EmfuDsreP9dj%2BzFpiTl11RxHURZeRbDll%2BPnRPnXaK61fRCSb%2FNSKwV2ff5n7UJacjbg%2Bu8NP1u1hr7iHpWTuJsEgMF9N%2FsFx5lX%2FXkz1b6OKBHEWjZGWhTyz1N%2FH%2FpZIkkZQu4%2FHcMMOBkcIGOqUBgEJcGeeAv1OfxRKkeOJe4vTXdSx9t1%2Bt8PSQ1Wvac1vJHsKzc7pSt%2FY8%2BG1PVxHES15x52L1zUKwBXXZwR3wBre9rT0l3Gydl5wkF9zW76RPMKwarWhWGZmMu2TWHpVvPVbyLuK4hn%2BjZMw%2FeGnYu%2BHUrx3ID10EIyV6oMQZcJr3QcC1R0IKj98ob5NOxJbW0viaPJW6eI0vLQ4yGagSFowM1RNX&X-Amz-Signature=e2a64e50d6f2dece46be8a6b633f4654634ab80b78b1ee57206b7d600210fb2f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
