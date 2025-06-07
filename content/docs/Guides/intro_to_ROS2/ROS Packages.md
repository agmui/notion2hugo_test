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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZVJ5S4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALrEr02VG8%2F9rr0BW3UbxLE8lwVuDXUBZIv6QnQIOd2AiB1zMDLWeJnBHMtif4oO67UFQoCUUm1eNg09Z%2FDzKyA7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0czm1wFyvgC9pWkKtwDrXWGR5yZebL6XW%2BEwvJX2sp07G7jEnSGUk3t9FdvcdJmKRzYr%2BNFX3sJCMfHAxcwtroJVQdt7jxFZTD44f3v4eO2EfPCmG3OD0lHmNiaceDO8nfI%2FYvRAtWNRSXSe0p1kCkv54QKd3JSPmEbLR7ATTwEfIhsx7cbI05VCJ13HTu5jOjCXc1MCqCj%2BF%2BuK4Phri5VxiUB798zkRdKYDgtJBrr4gM5j5yE4ty3%2FDkkGx4M6g4VbIXZ1OGA5423g1mSltnPkZsapME18J4zswkAzT9iNwOhOYOcD2pbUOED9WIbpzT31vG%2FanV55VWuWOys1HzhGAljdrFTmNfyV6TQ2j0hHfERBcDyPDnC%2BNjbpz%2ByfaHED1yj3kqbitvSErhV%2F3B47U0hQciE9m%2FRL1Qjg3SghfQDO9nZotYY2Ye9vbBqtgoFn737hTwcBw0LeVrtNkBnHYMDDDBu1FaViMox94%2F5Hzl9h952oaqz1oG9DwcgbVWPA0uxxH%2FFtiBSHTAoDWRoQ75bXWjSnFQpGpMME2hSmi7PBFh%2BEJjhhe4IYDQ2zFSmxvX6HYtR5GtARVq3Q75kzwYEwvJY3hxVrshQeFbbCKnRu%2Bp9ZPosivd3e2fzh84%2BbWz8PSWTOAQws4GRwgY6pgH00zc1WA1D%2BnjKkTPfCandy255mZDFbs4ODWDG1rlZ67gEFYT6xBW%2FpVfrju328QO8b91G9ZwvIWJx8%2FeypWFAnlgldRas3K2Ko2JxeW0TqMQ3%2FPHXv9axXDdDWyk%2FDcMalFzJYT%2BTHpslCy7%2BJxff3CNOySLJyT1eto3fU6N8r0Uru3S%2BYT9L2U9LXNV%2FTDlnngUijH4bbjgApzkFhMlS4ONqdsL4&X-Amz-Signature=33707e96b3512979e3656ae4faaaf8a60ef98726fe8ac045757edf9a671b5337&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZVJ5S4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALrEr02VG8%2F9rr0BW3UbxLE8lwVuDXUBZIv6QnQIOd2AiB1zMDLWeJnBHMtif4oO67UFQoCUUm1eNg09Z%2FDzKyA7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0czm1wFyvgC9pWkKtwDrXWGR5yZebL6XW%2BEwvJX2sp07G7jEnSGUk3t9FdvcdJmKRzYr%2BNFX3sJCMfHAxcwtroJVQdt7jxFZTD44f3v4eO2EfPCmG3OD0lHmNiaceDO8nfI%2FYvRAtWNRSXSe0p1kCkv54QKd3JSPmEbLR7ATTwEfIhsx7cbI05VCJ13HTu5jOjCXc1MCqCj%2BF%2BuK4Phri5VxiUB798zkRdKYDgtJBrr4gM5j5yE4ty3%2FDkkGx4M6g4VbIXZ1OGA5423g1mSltnPkZsapME18J4zswkAzT9iNwOhOYOcD2pbUOED9WIbpzT31vG%2FanV55VWuWOys1HzhGAljdrFTmNfyV6TQ2j0hHfERBcDyPDnC%2BNjbpz%2ByfaHED1yj3kqbitvSErhV%2F3B47U0hQciE9m%2FRL1Qjg3SghfQDO9nZotYY2Ye9vbBqtgoFn737hTwcBw0LeVrtNkBnHYMDDDBu1FaViMox94%2F5Hzl9h952oaqz1oG9DwcgbVWPA0uxxH%2FFtiBSHTAoDWRoQ75bXWjSnFQpGpMME2hSmi7PBFh%2BEJjhhe4IYDQ2zFSmxvX6HYtR5GtARVq3Q75kzwYEwvJY3hxVrshQeFbbCKnRu%2Bp9ZPosivd3e2fzh84%2BbWz8PSWTOAQws4GRwgY6pgH00zc1WA1D%2BnjKkTPfCandy255mZDFbs4ODWDG1rlZ67gEFYT6xBW%2FpVfrju328QO8b91G9ZwvIWJx8%2FeypWFAnlgldRas3K2Ko2JxeW0TqMQ3%2FPHXv9axXDdDWyk%2FDcMalFzJYT%2BTHpslCy7%2BJxff3CNOySLJyT1eto3fU6N8r0Uru3S%2BYT9L2U9LXNV%2FTDlnngUijH4bbjgApzkFhMlS4ONqdsL4&X-Amz-Signature=b328d8d611af64a79cf5badf3cac5edd4445facd8be344205ae93d529163106b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZVJ5S4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALrEr02VG8%2F9rr0BW3UbxLE8lwVuDXUBZIv6QnQIOd2AiB1zMDLWeJnBHMtif4oO67UFQoCUUm1eNg09Z%2FDzKyA7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0czm1wFyvgC9pWkKtwDrXWGR5yZebL6XW%2BEwvJX2sp07G7jEnSGUk3t9FdvcdJmKRzYr%2BNFX3sJCMfHAxcwtroJVQdt7jxFZTD44f3v4eO2EfPCmG3OD0lHmNiaceDO8nfI%2FYvRAtWNRSXSe0p1kCkv54QKd3JSPmEbLR7ATTwEfIhsx7cbI05VCJ13HTu5jOjCXc1MCqCj%2BF%2BuK4Phri5VxiUB798zkRdKYDgtJBrr4gM5j5yE4ty3%2FDkkGx4M6g4VbIXZ1OGA5423g1mSltnPkZsapME18J4zswkAzT9iNwOhOYOcD2pbUOED9WIbpzT31vG%2FanV55VWuWOys1HzhGAljdrFTmNfyV6TQ2j0hHfERBcDyPDnC%2BNjbpz%2ByfaHED1yj3kqbitvSErhV%2F3B47U0hQciE9m%2FRL1Qjg3SghfQDO9nZotYY2Ye9vbBqtgoFn737hTwcBw0LeVrtNkBnHYMDDDBu1FaViMox94%2F5Hzl9h952oaqz1oG9DwcgbVWPA0uxxH%2FFtiBSHTAoDWRoQ75bXWjSnFQpGpMME2hSmi7PBFh%2BEJjhhe4IYDQ2zFSmxvX6HYtR5GtARVq3Q75kzwYEwvJY3hxVrshQeFbbCKnRu%2Bp9ZPosivd3e2fzh84%2BbWz8PSWTOAQws4GRwgY6pgH00zc1WA1D%2BnjKkTPfCandy255mZDFbs4ODWDG1rlZ67gEFYT6xBW%2FpVfrju328QO8b91G9ZwvIWJx8%2FeypWFAnlgldRas3K2Ko2JxeW0TqMQ3%2FPHXv9axXDdDWyk%2FDcMalFzJYT%2BTHpslCy7%2BJxff3CNOySLJyT1eto3fU6N8r0Uru3S%2BYT9L2U9LXNV%2FTDlnngUijH4bbjgApzkFhMlS4ONqdsL4&X-Amz-Signature=1980d2ec66a5d7446e20f90dff252a931a02cf5461b881f27019f7836aac34f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZVJ5S4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALrEr02VG8%2F9rr0BW3UbxLE8lwVuDXUBZIv6QnQIOd2AiB1zMDLWeJnBHMtif4oO67UFQoCUUm1eNg09Z%2FDzKyA7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0czm1wFyvgC9pWkKtwDrXWGR5yZebL6XW%2BEwvJX2sp07G7jEnSGUk3t9FdvcdJmKRzYr%2BNFX3sJCMfHAxcwtroJVQdt7jxFZTD44f3v4eO2EfPCmG3OD0lHmNiaceDO8nfI%2FYvRAtWNRSXSe0p1kCkv54QKd3JSPmEbLR7ATTwEfIhsx7cbI05VCJ13HTu5jOjCXc1MCqCj%2BF%2BuK4Phri5VxiUB798zkRdKYDgtJBrr4gM5j5yE4ty3%2FDkkGx4M6g4VbIXZ1OGA5423g1mSltnPkZsapME18J4zswkAzT9iNwOhOYOcD2pbUOED9WIbpzT31vG%2FanV55VWuWOys1HzhGAljdrFTmNfyV6TQ2j0hHfERBcDyPDnC%2BNjbpz%2ByfaHED1yj3kqbitvSErhV%2F3B47U0hQciE9m%2FRL1Qjg3SghfQDO9nZotYY2Ye9vbBqtgoFn737hTwcBw0LeVrtNkBnHYMDDDBu1FaViMox94%2F5Hzl9h952oaqz1oG9DwcgbVWPA0uxxH%2FFtiBSHTAoDWRoQ75bXWjSnFQpGpMME2hSmi7PBFh%2BEJjhhe4IYDQ2zFSmxvX6HYtR5GtARVq3Q75kzwYEwvJY3hxVrshQeFbbCKnRu%2Bp9ZPosivd3e2fzh84%2BbWz8PSWTOAQws4GRwgY6pgH00zc1WA1D%2BnjKkTPfCandy255mZDFbs4ODWDG1rlZ67gEFYT6xBW%2FpVfrju328QO8b91G9ZwvIWJx8%2FeypWFAnlgldRas3K2Ko2JxeW0TqMQ3%2FPHXv9axXDdDWyk%2FDcMalFzJYT%2BTHpslCy7%2BJxff3CNOySLJyT1eto3fU6N8r0Uru3S%2BYT9L2U9LXNV%2FTDlnngUijH4bbjgApzkFhMlS4ONqdsL4&X-Amz-Signature=c07a3a3c99f039fc1b31d8ebd1ec0084779267174bc75bf74a22091ee93ad1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZVJ5S4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALrEr02VG8%2F9rr0BW3UbxLE8lwVuDXUBZIv6QnQIOd2AiB1zMDLWeJnBHMtif4oO67UFQoCUUm1eNg09Z%2FDzKyA7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0czm1wFyvgC9pWkKtwDrXWGR5yZebL6XW%2BEwvJX2sp07G7jEnSGUk3t9FdvcdJmKRzYr%2BNFX3sJCMfHAxcwtroJVQdt7jxFZTD44f3v4eO2EfPCmG3OD0lHmNiaceDO8nfI%2FYvRAtWNRSXSe0p1kCkv54QKd3JSPmEbLR7ATTwEfIhsx7cbI05VCJ13HTu5jOjCXc1MCqCj%2BF%2BuK4Phri5VxiUB798zkRdKYDgtJBrr4gM5j5yE4ty3%2FDkkGx4M6g4VbIXZ1OGA5423g1mSltnPkZsapME18J4zswkAzT9iNwOhOYOcD2pbUOED9WIbpzT31vG%2FanV55VWuWOys1HzhGAljdrFTmNfyV6TQ2j0hHfERBcDyPDnC%2BNjbpz%2ByfaHED1yj3kqbitvSErhV%2F3B47U0hQciE9m%2FRL1Qjg3SghfQDO9nZotYY2Ye9vbBqtgoFn737hTwcBw0LeVrtNkBnHYMDDDBu1FaViMox94%2F5Hzl9h952oaqz1oG9DwcgbVWPA0uxxH%2FFtiBSHTAoDWRoQ75bXWjSnFQpGpMME2hSmi7PBFh%2BEJjhhe4IYDQ2zFSmxvX6HYtR5GtARVq3Q75kzwYEwvJY3hxVrshQeFbbCKnRu%2Bp9ZPosivd3e2fzh84%2BbWz8PSWTOAQws4GRwgY6pgH00zc1WA1D%2BnjKkTPfCandy255mZDFbs4ODWDG1rlZ67gEFYT6xBW%2FpVfrju328QO8b91G9ZwvIWJx8%2FeypWFAnlgldRas3K2Ko2JxeW0TqMQ3%2FPHXv9axXDdDWyk%2FDcMalFzJYT%2BTHpslCy7%2BJxff3CNOySLJyT1eto3fU6N8r0Uru3S%2BYT9L2U9LXNV%2FTDlnngUijH4bbjgApzkFhMlS4ONqdsL4&X-Amz-Signature=2da828e99ac76371038d628953b4e81ca1b89c57fc35b581a49760a4c103ef24&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZVJ5S4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALrEr02VG8%2F9rr0BW3UbxLE8lwVuDXUBZIv6QnQIOd2AiB1zMDLWeJnBHMtif4oO67UFQoCUUm1eNg09Z%2FDzKyA7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0czm1wFyvgC9pWkKtwDrXWGR5yZebL6XW%2BEwvJX2sp07G7jEnSGUk3t9FdvcdJmKRzYr%2BNFX3sJCMfHAxcwtroJVQdt7jxFZTD44f3v4eO2EfPCmG3OD0lHmNiaceDO8nfI%2FYvRAtWNRSXSe0p1kCkv54QKd3JSPmEbLR7ATTwEfIhsx7cbI05VCJ13HTu5jOjCXc1MCqCj%2BF%2BuK4Phri5VxiUB798zkRdKYDgtJBrr4gM5j5yE4ty3%2FDkkGx4M6g4VbIXZ1OGA5423g1mSltnPkZsapME18J4zswkAzT9iNwOhOYOcD2pbUOED9WIbpzT31vG%2FanV55VWuWOys1HzhGAljdrFTmNfyV6TQ2j0hHfERBcDyPDnC%2BNjbpz%2ByfaHED1yj3kqbitvSErhV%2F3B47U0hQciE9m%2FRL1Qjg3SghfQDO9nZotYY2Ye9vbBqtgoFn737hTwcBw0LeVrtNkBnHYMDDDBu1FaViMox94%2F5Hzl9h952oaqz1oG9DwcgbVWPA0uxxH%2FFtiBSHTAoDWRoQ75bXWjSnFQpGpMME2hSmi7PBFh%2BEJjhhe4IYDQ2zFSmxvX6HYtR5GtARVq3Q75kzwYEwvJY3hxVrshQeFbbCKnRu%2Bp9ZPosivd3e2fzh84%2BbWz8PSWTOAQws4GRwgY6pgH00zc1WA1D%2BnjKkTPfCandy255mZDFbs4ODWDG1rlZ67gEFYT6xBW%2FpVfrju328QO8b91G9ZwvIWJx8%2FeypWFAnlgldRas3K2Ko2JxeW0TqMQ3%2FPHXv9axXDdDWyk%2FDcMalFzJYT%2BTHpslCy7%2BJxff3CNOySLJyT1eto3fU6N8r0Uru3S%2BYT9L2U9LXNV%2FTDlnngUijH4bbjgApzkFhMlS4ONqdsL4&X-Amz-Signature=beed7cfe9ab73eca870765689801e60ced7331fd9d977bcfbe2c3e7cfa2c0e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZVJ5S4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALrEr02VG8%2F9rr0BW3UbxLE8lwVuDXUBZIv6QnQIOd2AiB1zMDLWeJnBHMtif4oO67UFQoCUUm1eNg09Z%2FDzKyA7ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMX0czm1wFyvgC9pWkKtwDrXWGR5yZebL6XW%2BEwvJX2sp07G7jEnSGUk3t9FdvcdJmKRzYr%2BNFX3sJCMfHAxcwtroJVQdt7jxFZTD44f3v4eO2EfPCmG3OD0lHmNiaceDO8nfI%2FYvRAtWNRSXSe0p1kCkv54QKd3JSPmEbLR7ATTwEfIhsx7cbI05VCJ13HTu5jOjCXc1MCqCj%2BF%2BuK4Phri5VxiUB798zkRdKYDgtJBrr4gM5j5yE4ty3%2FDkkGx4M6g4VbIXZ1OGA5423g1mSltnPkZsapME18J4zswkAzT9iNwOhOYOcD2pbUOED9WIbpzT31vG%2FanV55VWuWOys1HzhGAljdrFTmNfyV6TQ2j0hHfERBcDyPDnC%2BNjbpz%2ByfaHED1yj3kqbitvSErhV%2F3B47U0hQciE9m%2FRL1Qjg3SghfQDO9nZotYY2Ye9vbBqtgoFn737hTwcBw0LeVrtNkBnHYMDDDBu1FaViMox94%2F5Hzl9h952oaqz1oG9DwcgbVWPA0uxxH%2FFtiBSHTAoDWRoQ75bXWjSnFQpGpMME2hSmi7PBFh%2BEJjhhe4IYDQ2zFSmxvX6HYtR5GtARVq3Q75kzwYEwvJY3hxVrshQeFbbCKnRu%2Bp9ZPosivd3e2fzh84%2BbWz8PSWTOAQws4GRwgY6pgH00zc1WA1D%2BnjKkTPfCandy255mZDFbs4ODWDG1rlZ67gEFYT6xBW%2FpVfrju328QO8b91G9ZwvIWJx8%2FeypWFAnlgldRas3K2Ko2JxeW0TqMQ3%2FPHXv9axXDdDWyk%2FDcMalFzJYT%2BTHpslCy7%2BJxff3CNOySLJyT1eto3fU6N8r0Uru3S%2BYT9L2U9LXNV%2FTDlnngUijH4bbjgApzkFhMlS4ONqdsL4&X-Amz-Signature=caa3036f9125f907bfc4c4b1feddc5260763516bc12014825be1ac67bc255e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
