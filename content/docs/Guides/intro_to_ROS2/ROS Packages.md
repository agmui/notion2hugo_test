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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMNHR5U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLYd0aia2N%2BX86CCNYc1wqqH%2BLFBScFhvXCfw%2BpXnfYAiEAi4NVOs8vh4QvDA1sLOEoeGk7SFWBlxSnzaMxSy5Qb50qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApvpxReCRae48kKVCrcAyn5jn1x4YsruT%2BUfGrxcxzG3FSzUVXORwA%2B4X0f5CwNBaSJ9FVm%2F0VT9Pvq4%2FR5n5uUgB8fmLc%2F4aKyVS68dvUZXTUwOj0xqJJAlaze6C%2FTQAgwiOQZjIZRpH2HhSq739WKL9Ts24z57b5y8O8Ov9EJxuybHRLRQltjAq30YmA3ZlscE%2BCjVE8bndu2QmeLDaFiwDMMPQkkIvW7h6TpgQ06FUjU9iPs7rg96r5C4Md9%2F6ayzaaIVfBHqJo2MDMnIUZyYsnGl%2Bxwrg2rXU8tjDlA8kp1U5xH%2FQAqVhWQfMQpK2xsx4bif575QGdv9A%2FnG8xgonZIGiwarR%2B4KP2yKGKK2FXu%2BUP7e1RQAXSU4iI%2FPOF7eq%2B9jr1jpwwD9HQTEVFgNHAFqWNvXUIksZ7wD0YnXALwFpamfPaHwk%2FNpJ3cH2B%2FiCxgEAeOrFGMZW2Pd%2BU%2Fxw%2Fx%2FtkEGJvm%2Fk%2FTrMZQExDMxLIpnCuo%2FBwAIpG5F47Tc7VmjvMohpbvJjWt%2FaWTlvrGYBebEvGACSL%2BaiIuWgmUvqK1SUAuprG5gBtcgb4ShOzMuht9cE%2FVkLkUrkM7zEQoUOMRDba8PGcAoO80HnZnZmu%2BA9fCKg33a0nh%2Bw6fbHuYjzmRfBnGMPGjw8AGOqUB6cE52lJuAAHUtV6mRnoLutY%2BEUK1zamoX128yLOoofU%2BvWvJ8j5M%2BxCpcBYuP9e%2BcvgcOFAwnLWqJhZ3ToMnRDFDyS%2BmT9oRyfuI2Y%2BQ8v7%2F0qTfHU6cOXayiAb01DtNhLx8CRwm6FIRIydMrkLM3vNlsa3SGfiedZoQkbX2CT2TWM4SpTM4g4TIvKLc1PwfhlRTFwXm5oRnLiLZHKudmx%2FNT6IA&X-Amz-Signature=f78f7e1bddc8d5c8dea4edbc1dd38a6620bb819a5771fec47b008c7cd7c2e48f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMNHR5U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLYd0aia2N%2BX86CCNYc1wqqH%2BLFBScFhvXCfw%2BpXnfYAiEAi4NVOs8vh4QvDA1sLOEoeGk7SFWBlxSnzaMxSy5Qb50qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApvpxReCRae48kKVCrcAyn5jn1x4YsruT%2BUfGrxcxzG3FSzUVXORwA%2B4X0f5CwNBaSJ9FVm%2F0VT9Pvq4%2FR5n5uUgB8fmLc%2F4aKyVS68dvUZXTUwOj0xqJJAlaze6C%2FTQAgwiOQZjIZRpH2HhSq739WKL9Ts24z57b5y8O8Ov9EJxuybHRLRQltjAq30YmA3ZlscE%2BCjVE8bndu2QmeLDaFiwDMMPQkkIvW7h6TpgQ06FUjU9iPs7rg96r5C4Md9%2F6ayzaaIVfBHqJo2MDMnIUZyYsnGl%2Bxwrg2rXU8tjDlA8kp1U5xH%2FQAqVhWQfMQpK2xsx4bif575QGdv9A%2FnG8xgonZIGiwarR%2B4KP2yKGKK2FXu%2BUP7e1RQAXSU4iI%2FPOF7eq%2B9jr1jpwwD9HQTEVFgNHAFqWNvXUIksZ7wD0YnXALwFpamfPaHwk%2FNpJ3cH2B%2FiCxgEAeOrFGMZW2Pd%2BU%2Fxw%2Fx%2FtkEGJvm%2Fk%2FTrMZQExDMxLIpnCuo%2FBwAIpG5F47Tc7VmjvMohpbvJjWt%2FaWTlvrGYBebEvGACSL%2BaiIuWgmUvqK1SUAuprG5gBtcgb4ShOzMuht9cE%2FVkLkUrkM7zEQoUOMRDba8PGcAoO80HnZnZmu%2BA9fCKg33a0nh%2Bw6fbHuYjzmRfBnGMPGjw8AGOqUB6cE52lJuAAHUtV6mRnoLutY%2BEUK1zamoX128yLOoofU%2BvWvJ8j5M%2BxCpcBYuP9e%2BcvgcOFAwnLWqJhZ3ToMnRDFDyS%2BmT9oRyfuI2Y%2BQ8v7%2F0qTfHU6cOXayiAb01DtNhLx8CRwm6FIRIydMrkLM3vNlsa3SGfiedZoQkbX2CT2TWM4SpTM4g4TIvKLc1PwfhlRTFwXm5oRnLiLZHKudmx%2FNT6IA&X-Amz-Signature=c85e66754629e0083c56c665bef8f347866e564804d52cbeeeba19df10159ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMNHR5U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLYd0aia2N%2BX86CCNYc1wqqH%2BLFBScFhvXCfw%2BpXnfYAiEAi4NVOs8vh4QvDA1sLOEoeGk7SFWBlxSnzaMxSy5Qb50qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApvpxReCRae48kKVCrcAyn5jn1x4YsruT%2BUfGrxcxzG3FSzUVXORwA%2B4X0f5CwNBaSJ9FVm%2F0VT9Pvq4%2FR5n5uUgB8fmLc%2F4aKyVS68dvUZXTUwOj0xqJJAlaze6C%2FTQAgwiOQZjIZRpH2HhSq739WKL9Ts24z57b5y8O8Ov9EJxuybHRLRQltjAq30YmA3ZlscE%2BCjVE8bndu2QmeLDaFiwDMMPQkkIvW7h6TpgQ06FUjU9iPs7rg96r5C4Md9%2F6ayzaaIVfBHqJo2MDMnIUZyYsnGl%2Bxwrg2rXU8tjDlA8kp1U5xH%2FQAqVhWQfMQpK2xsx4bif575QGdv9A%2FnG8xgonZIGiwarR%2B4KP2yKGKK2FXu%2BUP7e1RQAXSU4iI%2FPOF7eq%2B9jr1jpwwD9HQTEVFgNHAFqWNvXUIksZ7wD0YnXALwFpamfPaHwk%2FNpJ3cH2B%2FiCxgEAeOrFGMZW2Pd%2BU%2Fxw%2Fx%2FtkEGJvm%2Fk%2FTrMZQExDMxLIpnCuo%2FBwAIpG5F47Tc7VmjvMohpbvJjWt%2FaWTlvrGYBebEvGACSL%2BaiIuWgmUvqK1SUAuprG5gBtcgb4ShOzMuht9cE%2FVkLkUrkM7zEQoUOMRDba8PGcAoO80HnZnZmu%2BA9fCKg33a0nh%2Bw6fbHuYjzmRfBnGMPGjw8AGOqUB6cE52lJuAAHUtV6mRnoLutY%2BEUK1zamoX128yLOoofU%2BvWvJ8j5M%2BxCpcBYuP9e%2BcvgcOFAwnLWqJhZ3ToMnRDFDyS%2BmT9oRyfuI2Y%2BQ8v7%2F0qTfHU6cOXayiAb01DtNhLx8CRwm6FIRIydMrkLM3vNlsa3SGfiedZoQkbX2CT2TWM4SpTM4g4TIvKLc1PwfhlRTFwXm5oRnLiLZHKudmx%2FNT6IA&X-Amz-Signature=a319170653c24e351e7fd2e70b6a12a27840be019116e7f0c3db81d5eb39d950&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMNHR5U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLYd0aia2N%2BX86CCNYc1wqqH%2BLFBScFhvXCfw%2BpXnfYAiEAi4NVOs8vh4QvDA1sLOEoeGk7SFWBlxSnzaMxSy5Qb50qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApvpxReCRae48kKVCrcAyn5jn1x4YsruT%2BUfGrxcxzG3FSzUVXORwA%2B4X0f5CwNBaSJ9FVm%2F0VT9Pvq4%2FR5n5uUgB8fmLc%2F4aKyVS68dvUZXTUwOj0xqJJAlaze6C%2FTQAgwiOQZjIZRpH2HhSq739WKL9Ts24z57b5y8O8Ov9EJxuybHRLRQltjAq30YmA3ZlscE%2BCjVE8bndu2QmeLDaFiwDMMPQkkIvW7h6TpgQ06FUjU9iPs7rg96r5C4Md9%2F6ayzaaIVfBHqJo2MDMnIUZyYsnGl%2Bxwrg2rXU8tjDlA8kp1U5xH%2FQAqVhWQfMQpK2xsx4bif575QGdv9A%2FnG8xgonZIGiwarR%2B4KP2yKGKK2FXu%2BUP7e1RQAXSU4iI%2FPOF7eq%2B9jr1jpwwD9HQTEVFgNHAFqWNvXUIksZ7wD0YnXALwFpamfPaHwk%2FNpJ3cH2B%2FiCxgEAeOrFGMZW2Pd%2BU%2Fxw%2Fx%2FtkEGJvm%2Fk%2FTrMZQExDMxLIpnCuo%2FBwAIpG5F47Tc7VmjvMohpbvJjWt%2FaWTlvrGYBebEvGACSL%2BaiIuWgmUvqK1SUAuprG5gBtcgb4ShOzMuht9cE%2FVkLkUrkM7zEQoUOMRDba8PGcAoO80HnZnZmu%2BA9fCKg33a0nh%2Bw6fbHuYjzmRfBnGMPGjw8AGOqUB6cE52lJuAAHUtV6mRnoLutY%2BEUK1zamoX128yLOoofU%2BvWvJ8j5M%2BxCpcBYuP9e%2BcvgcOFAwnLWqJhZ3ToMnRDFDyS%2BmT9oRyfuI2Y%2BQ8v7%2F0qTfHU6cOXayiAb01DtNhLx8CRwm6FIRIydMrkLM3vNlsa3SGfiedZoQkbX2CT2TWM4SpTM4g4TIvKLc1PwfhlRTFwXm5oRnLiLZHKudmx%2FNT6IA&X-Amz-Signature=7bcdfb36067864e70594f1dd13f915af5dffc1babbe35170da1a843bf7e8d020&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMNHR5U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLYd0aia2N%2BX86CCNYc1wqqH%2BLFBScFhvXCfw%2BpXnfYAiEAi4NVOs8vh4QvDA1sLOEoeGk7SFWBlxSnzaMxSy5Qb50qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApvpxReCRae48kKVCrcAyn5jn1x4YsruT%2BUfGrxcxzG3FSzUVXORwA%2B4X0f5CwNBaSJ9FVm%2F0VT9Pvq4%2FR5n5uUgB8fmLc%2F4aKyVS68dvUZXTUwOj0xqJJAlaze6C%2FTQAgwiOQZjIZRpH2HhSq739WKL9Ts24z57b5y8O8Ov9EJxuybHRLRQltjAq30YmA3ZlscE%2BCjVE8bndu2QmeLDaFiwDMMPQkkIvW7h6TpgQ06FUjU9iPs7rg96r5C4Md9%2F6ayzaaIVfBHqJo2MDMnIUZyYsnGl%2Bxwrg2rXU8tjDlA8kp1U5xH%2FQAqVhWQfMQpK2xsx4bif575QGdv9A%2FnG8xgonZIGiwarR%2B4KP2yKGKK2FXu%2BUP7e1RQAXSU4iI%2FPOF7eq%2B9jr1jpwwD9HQTEVFgNHAFqWNvXUIksZ7wD0YnXALwFpamfPaHwk%2FNpJ3cH2B%2FiCxgEAeOrFGMZW2Pd%2BU%2Fxw%2Fx%2FtkEGJvm%2Fk%2FTrMZQExDMxLIpnCuo%2FBwAIpG5F47Tc7VmjvMohpbvJjWt%2FaWTlvrGYBebEvGACSL%2BaiIuWgmUvqK1SUAuprG5gBtcgb4ShOzMuht9cE%2FVkLkUrkM7zEQoUOMRDba8PGcAoO80HnZnZmu%2BA9fCKg33a0nh%2Bw6fbHuYjzmRfBnGMPGjw8AGOqUB6cE52lJuAAHUtV6mRnoLutY%2BEUK1zamoX128yLOoofU%2BvWvJ8j5M%2BxCpcBYuP9e%2BcvgcOFAwnLWqJhZ3ToMnRDFDyS%2BmT9oRyfuI2Y%2BQ8v7%2F0qTfHU6cOXayiAb01DtNhLx8CRwm6FIRIydMrkLM3vNlsa3SGfiedZoQkbX2CT2TWM4SpTM4g4TIvKLc1PwfhlRTFwXm5oRnLiLZHKudmx%2FNT6IA&X-Amz-Signature=474ff783adc6f7911f1cad06b45c466db59c1a9e01b0fe6aeffd02e722834f49&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMNHR5U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLYd0aia2N%2BX86CCNYc1wqqH%2BLFBScFhvXCfw%2BpXnfYAiEAi4NVOs8vh4QvDA1sLOEoeGk7SFWBlxSnzaMxSy5Qb50qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApvpxReCRae48kKVCrcAyn5jn1x4YsruT%2BUfGrxcxzG3FSzUVXORwA%2B4X0f5CwNBaSJ9FVm%2F0VT9Pvq4%2FR5n5uUgB8fmLc%2F4aKyVS68dvUZXTUwOj0xqJJAlaze6C%2FTQAgwiOQZjIZRpH2HhSq739WKL9Ts24z57b5y8O8Ov9EJxuybHRLRQltjAq30YmA3ZlscE%2BCjVE8bndu2QmeLDaFiwDMMPQkkIvW7h6TpgQ06FUjU9iPs7rg96r5C4Md9%2F6ayzaaIVfBHqJo2MDMnIUZyYsnGl%2Bxwrg2rXU8tjDlA8kp1U5xH%2FQAqVhWQfMQpK2xsx4bif575QGdv9A%2FnG8xgonZIGiwarR%2B4KP2yKGKK2FXu%2BUP7e1RQAXSU4iI%2FPOF7eq%2B9jr1jpwwD9HQTEVFgNHAFqWNvXUIksZ7wD0YnXALwFpamfPaHwk%2FNpJ3cH2B%2FiCxgEAeOrFGMZW2Pd%2BU%2Fxw%2Fx%2FtkEGJvm%2Fk%2FTrMZQExDMxLIpnCuo%2FBwAIpG5F47Tc7VmjvMohpbvJjWt%2FaWTlvrGYBebEvGACSL%2BaiIuWgmUvqK1SUAuprG5gBtcgb4ShOzMuht9cE%2FVkLkUrkM7zEQoUOMRDba8PGcAoO80HnZnZmu%2BA9fCKg33a0nh%2Bw6fbHuYjzmRfBnGMPGjw8AGOqUB6cE52lJuAAHUtV6mRnoLutY%2BEUK1zamoX128yLOoofU%2BvWvJ8j5M%2BxCpcBYuP9e%2BcvgcOFAwnLWqJhZ3ToMnRDFDyS%2BmT9oRyfuI2Y%2BQ8v7%2F0qTfHU6cOXayiAb01DtNhLx8CRwm6FIRIydMrkLM3vNlsa3SGfiedZoQkbX2CT2TWM4SpTM4g4TIvKLc1PwfhlRTFwXm5oRnLiLZHKudmx%2FNT6IA&X-Amz-Signature=cab7aa8d5344777c7ef3ea8ec3881da66300482bf1491cb3e70d0216a48512f0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMNHR5U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLYd0aia2N%2BX86CCNYc1wqqH%2BLFBScFhvXCfw%2BpXnfYAiEAi4NVOs8vh4QvDA1sLOEoeGk7SFWBlxSnzaMxSy5Qb50qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApvpxReCRae48kKVCrcAyn5jn1x4YsruT%2BUfGrxcxzG3FSzUVXORwA%2B4X0f5CwNBaSJ9FVm%2F0VT9Pvq4%2FR5n5uUgB8fmLc%2F4aKyVS68dvUZXTUwOj0xqJJAlaze6C%2FTQAgwiOQZjIZRpH2HhSq739WKL9Ts24z57b5y8O8Ov9EJxuybHRLRQltjAq30YmA3ZlscE%2BCjVE8bndu2QmeLDaFiwDMMPQkkIvW7h6TpgQ06FUjU9iPs7rg96r5C4Md9%2F6ayzaaIVfBHqJo2MDMnIUZyYsnGl%2Bxwrg2rXU8tjDlA8kp1U5xH%2FQAqVhWQfMQpK2xsx4bif575QGdv9A%2FnG8xgonZIGiwarR%2B4KP2yKGKK2FXu%2BUP7e1RQAXSU4iI%2FPOF7eq%2B9jr1jpwwD9HQTEVFgNHAFqWNvXUIksZ7wD0YnXALwFpamfPaHwk%2FNpJ3cH2B%2FiCxgEAeOrFGMZW2Pd%2BU%2Fxw%2Fx%2FtkEGJvm%2Fk%2FTrMZQExDMxLIpnCuo%2FBwAIpG5F47Tc7VmjvMohpbvJjWt%2FaWTlvrGYBebEvGACSL%2BaiIuWgmUvqK1SUAuprG5gBtcgb4ShOzMuht9cE%2FVkLkUrkM7zEQoUOMRDba8PGcAoO80HnZnZmu%2BA9fCKg33a0nh%2Bw6fbHuYjzmRfBnGMPGjw8AGOqUB6cE52lJuAAHUtV6mRnoLutY%2BEUK1zamoX128yLOoofU%2BvWvJ8j5M%2BxCpcBYuP9e%2BcvgcOFAwnLWqJhZ3ToMnRDFDyS%2BmT9oRyfuI2Y%2BQ8v7%2F0qTfHU6cOXayiAb01DtNhLx8CRwm6FIRIydMrkLM3vNlsa3SGfiedZoQkbX2CT2TWM4SpTM4g4TIvKLc1PwfhlRTFwXm5oRnLiLZHKudmx%2FNT6IA&X-Amz-Signature=cd468181bdd5974e6f5f0719ff424842a042819679c5209fa4375d430baebf2b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
