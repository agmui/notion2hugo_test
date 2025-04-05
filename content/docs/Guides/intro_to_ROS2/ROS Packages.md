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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNHZFB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGHhh8MiKuwl%2F02%2FST24Owrk53u46mBpQn%2FWeFEVUw7AiEAs50D5DkbotMJtbrDbzkqZZNtoMmxOR19ed8wEjB7JKIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMqbsgI2BcchGvQQuCrcA7is42uJE%2FBJJ8YOnLWBOYirvOu9Pw%2B6UXhORjfkc2EVNc1QxLYrRy2S7Q5W21qnFgEUPH%2BEtwzarvqceRLWqwiq%2BKmxpOOZJBT0%2B30uyLzb3nEARJM0DWwPWS8zHTt4hL4lSNcqoIUatVFziYYAQ6%2FyW67ykEO%2FZgs4b5OohVDr5aTuSvAX9R1gSuNQJE6B0YUflK3nawI5mhimrkanzNabnnztFNwuh0Z0TaqPnfzCzYbKls1xRHTEka4GWmqE2E7kzHSRW%2Fs6%2FsAxPXstGYRlJnbOHe85sm6bYQUe7CnIA4JbLrSKxAQrfD8p7CuviiaSC4DaG5XwTWjxP6Fv%2BUGCu1iUL2WDMabihjpvl5XwkIMNoj%2FT8iq0wUPh4%2BWwdx6JUvpkknXjbF%2BF6SDVEr0WrveBVfo0J1uOHE6Cm2xibIrmAV34ZyW78dLHLmhsZ6HLYa0I3t4M0WPMR8PvoEan5RDpEtoXnrhpME8SHEpaX7zVdr1F0oGZKF8oRh2GA9WY90S2Urp5hQl92IKV1e7blCdojKrIsbdLVutu5eesNCGV%2Bu4OzexiMKwYSdB7Yzpd6lzQoK3Gyy0WIiPwtgvOJyccN%2FyfF4D2SVyVpM4IiwQrM8htkGYUenpVMMS8w78GOqUB9ehiwRltPMCKaSYGejjja14KPlME4vLo4qe18rdLCSbAmYow%2BcdjVXMVDDjhmLRoGR8B1Tro3h1oTkD%2F%2FXR%2F5%2FrTUFrzkw5JWBh2O7VpCuO8M6avR3T%2FPIotqkIca%2FR0DL6C5ESPZpw4BPAb7rV1sK%2BDhwJSWRvtjyEyidRoCfhILNwuD3OcsJwBYKzaRqSdC3Cgu1zzfb6oe2CDRC8mGBKfHeVh&X-Amz-Signature=bcca5c866aaa58ac78d96cafcbd9d3924235aa64f7f75b73ee0f01b9238e07ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNHZFB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGHhh8MiKuwl%2F02%2FST24Owrk53u46mBpQn%2FWeFEVUw7AiEAs50D5DkbotMJtbrDbzkqZZNtoMmxOR19ed8wEjB7JKIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMqbsgI2BcchGvQQuCrcA7is42uJE%2FBJJ8YOnLWBOYirvOu9Pw%2B6UXhORjfkc2EVNc1QxLYrRy2S7Q5W21qnFgEUPH%2BEtwzarvqceRLWqwiq%2BKmxpOOZJBT0%2B30uyLzb3nEARJM0DWwPWS8zHTt4hL4lSNcqoIUatVFziYYAQ6%2FyW67ykEO%2FZgs4b5OohVDr5aTuSvAX9R1gSuNQJE6B0YUflK3nawI5mhimrkanzNabnnztFNwuh0Z0TaqPnfzCzYbKls1xRHTEka4GWmqE2E7kzHSRW%2Fs6%2FsAxPXstGYRlJnbOHe85sm6bYQUe7CnIA4JbLrSKxAQrfD8p7CuviiaSC4DaG5XwTWjxP6Fv%2BUGCu1iUL2WDMabihjpvl5XwkIMNoj%2FT8iq0wUPh4%2BWwdx6JUvpkknXjbF%2BF6SDVEr0WrveBVfo0J1uOHE6Cm2xibIrmAV34ZyW78dLHLmhsZ6HLYa0I3t4M0WPMR8PvoEan5RDpEtoXnrhpME8SHEpaX7zVdr1F0oGZKF8oRh2GA9WY90S2Urp5hQl92IKV1e7blCdojKrIsbdLVutu5eesNCGV%2Bu4OzexiMKwYSdB7Yzpd6lzQoK3Gyy0WIiPwtgvOJyccN%2FyfF4D2SVyVpM4IiwQrM8htkGYUenpVMMS8w78GOqUB9ehiwRltPMCKaSYGejjja14KPlME4vLo4qe18rdLCSbAmYow%2BcdjVXMVDDjhmLRoGR8B1Tro3h1oTkD%2F%2FXR%2F5%2FrTUFrzkw5JWBh2O7VpCuO8M6avR3T%2FPIotqkIca%2FR0DL6C5ESPZpw4BPAb7rV1sK%2BDhwJSWRvtjyEyidRoCfhILNwuD3OcsJwBYKzaRqSdC3Cgu1zzfb6oe2CDRC8mGBKfHeVh&X-Amz-Signature=dcb42b5148c8c332b737c8d1c97b0ad93f5e49fb45500f3a12feb79de201f6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNHZFB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGHhh8MiKuwl%2F02%2FST24Owrk53u46mBpQn%2FWeFEVUw7AiEAs50D5DkbotMJtbrDbzkqZZNtoMmxOR19ed8wEjB7JKIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMqbsgI2BcchGvQQuCrcA7is42uJE%2FBJJ8YOnLWBOYirvOu9Pw%2B6UXhORjfkc2EVNc1QxLYrRy2S7Q5W21qnFgEUPH%2BEtwzarvqceRLWqwiq%2BKmxpOOZJBT0%2B30uyLzb3nEARJM0DWwPWS8zHTt4hL4lSNcqoIUatVFziYYAQ6%2FyW67ykEO%2FZgs4b5OohVDr5aTuSvAX9R1gSuNQJE6B0YUflK3nawI5mhimrkanzNabnnztFNwuh0Z0TaqPnfzCzYbKls1xRHTEka4GWmqE2E7kzHSRW%2Fs6%2FsAxPXstGYRlJnbOHe85sm6bYQUe7CnIA4JbLrSKxAQrfD8p7CuviiaSC4DaG5XwTWjxP6Fv%2BUGCu1iUL2WDMabihjpvl5XwkIMNoj%2FT8iq0wUPh4%2BWwdx6JUvpkknXjbF%2BF6SDVEr0WrveBVfo0J1uOHE6Cm2xibIrmAV34ZyW78dLHLmhsZ6HLYa0I3t4M0WPMR8PvoEan5RDpEtoXnrhpME8SHEpaX7zVdr1F0oGZKF8oRh2GA9WY90S2Urp5hQl92IKV1e7blCdojKrIsbdLVutu5eesNCGV%2Bu4OzexiMKwYSdB7Yzpd6lzQoK3Gyy0WIiPwtgvOJyccN%2FyfF4D2SVyVpM4IiwQrM8htkGYUenpVMMS8w78GOqUB9ehiwRltPMCKaSYGejjja14KPlME4vLo4qe18rdLCSbAmYow%2BcdjVXMVDDjhmLRoGR8B1Tro3h1oTkD%2F%2FXR%2F5%2FrTUFrzkw5JWBh2O7VpCuO8M6avR3T%2FPIotqkIca%2FR0DL6C5ESPZpw4BPAb7rV1sK%2BDhwJSWRvtjyEyidRoCfhILNwuD3OcsJwBYKzaRqSdC3Cgu1zzfb6oe2CDRC8mGBKfHeVh&X-Amz-Signature=15f71170776131a66980b1ad4957d9625950664a37cf931d31a26d86f1190d31&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNHZFB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGHhh8MiKuwl%2F02%2FST24Owrk53u46mBpQn%2FWeFEVUw7AiEAs50D5DkbotMJtbrDbzkqZZNtoMmxOR19ed8wEjB7JKIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMqbsgI2BcchGvQQuCrcA7is42uJE%2FBJJ8YOnLWBOYirvOu9Pw%2B6UXhORjfkc2EVNc1QxLYrRy2S7Q5W21qnFgEUPH%2BEtwzarvqceRLWqwiq%2BKmxpOOZJBT0%2B30uyLzb3nEARJM0DWwPWS8zHTt4hL4lSNcqoIUatVFziYYAQ6%2FyW67ykEO%2FZgs4b5OohVDr5aTuSvAX9R1gSuNQJE6B0YUflK3nawI5mhimrkanzNabnnztFNwuh0Z0TaqPnfzCzYbKls1xRHTEka4GWmqE2E7kzHSRW%2Fs6%2FsAxPXstGYRlJnbOHe85sm6bYQUe7CnIA4JbLrSKxAQrfD8p7CuviiaSC4DaG5XwTWjxP6Fv%2BUGCu1iUL2WDMabihjpvl5XwkIMNoj%2FT8iq0wUPh4%2BWwdx6JUvpkknXjbF%2BF6SDVEr0WrveBVfo0J1uOHE6Cm2xibIrmAV34ZyW78dLHLmhsZ6HLYa0I3t4M0WPMR8PvoEan5RDpEtoXnrhpME8SHEpaX7zVdr1F0oGZKF8oRh2GA9WY90S2Urp5hQl92IKV1e7blCdojKrIsbdLVutu5eesNCGV%2Bu4OzexiMKwYSdB7Yzpd6lzQoK3Gyy0WIiPwtgvOJyccN%2FyfF4D2SVyVpM4IiwQrM8htkGYUenpVMMS8w78GOqUB9ehiwRltPMCKaSYGejjja14KPlME4vLo4qe18rdLCSbAmYow%2BcdjVXMVDDjhmLRoGR8B1Tro3h1oTkD%2F%2FXR%2F5%2FrTUFrzkw5JWBh2O7VpCuO8M6avR3T%2FPIotqkIca%2FR0DL6C5ESPZpw4BPAb7rV1sK%2BDhwJSWRvtjyEyidRoCfhILNwuD3OcsJwBYKzaRqSdC3Cgu1zzfb6oe2CDRC8mGBKfHeVh&X-Amz-Signature=0ab93c3eb39041138fce764e92fac8e0ba5112b4c6fb9eff6e6c0de4924b4a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNHZFB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGHhh8MiKuwl%2F02%2FST24Owrk53u46mBpQn%2FWeFEVUw7AiEAs50D5DkbotMJtbrDbzkqZZNtoMmxOR19ed8wEjB7JKIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMqbsgI2BcchGvQQuCrcA7is42uJE%2FBJJ8YOnLWBOYirvOu9Pw%2B6UXhORjfkc2EVNc1QxLYrRy2S7Q5W21qnFgEUPH%2BEtwzarvqceRLWqwiq%2BKmxpOOZJBT0%2B30uyLzb3nEARJM0DWwPWS8zHTt4hL4lSNcqoIUatVFziYYAQ6%2FyW67ykEO%2FZgs4b5OohVDr5aTuSvAX9R1gSuNQJE6B0YUflK3nawI5mhimrkanzNabnnztFNwuh0Z0TaqPnfzCzYbKls1xRHTEka4GWmqE2E7kzHSRW%2Fs6%2FsAxPXstGYRlJnbOHe85sm6bYQUe7CnIA4JbLrSKxAQrfD8p7CuviiaSC4DaG5XwTWjxP6Fv%2BUGCu1iUL2WDMabihjpvl5XwkIMNoj%2FT8iq0wUPh4%2BWwdx6JUvpkknXjbF%2BF6SDVEr0WrveBVfo0J1uOHE6Cm2xibIrmAV34ZyW78dLHLmhsZ6HLYa0I3t4M0WPMR8PvoEan5RDpEtoXnrhpME8SHEpaX7zVdr1F0oGZKF8oRh2GA9WY90S2Urp5hQl92IKV1e7blCdojKrIsbdLVutu5eesNCGV%2Bu4OzexiMKwYSdB7Yzpd6lzQoK3Gyy0WIiPwtgvOJyccN%2FyfF4D2SVyVpM4IiwQrM8htkGYUenpVMMS8w78GOqUB9ehiwRltPMCKaSYGejjja14KPlME4vLo4qe18rdLCSbAmYow%2BcdjVXMVDDjhmLRoGR8B1Tro3h1oTkD%2F%2FXR%2F5%2FrTUFrzkw5JWBh2O7VpCuO8M6avR3T%2FPIotqkIca%2FR0DL6C5ESPZpw4BPAb7rV1sK%2BDhwJSWRvtjyEyidRoCfhILNwuD3OcsJwBYKzaRqSdC3Cgu1zzfb6oe2CDRC8mGBKfHeVh&X-Amz-Signature=f02d6aa707edbed7722ae6b7445bb726ae941184da0e5927b8a371ba1739cf0e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNHZFB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGHhh8MiKuwl%2F02%2FST24Owrk53u46mBpQn%2FWeFEVUw7AiEAs50D5DkbotMJtbrDbzkqZZNtoMmxOR19ed8wEjB7JKIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMqbsgI2BcchGvQQuCrcA7is42uJE%2FBJJ8YOnLWBOYirvOu9Pw%2B6UXhORjfkc2EVNc1QxLYrRy2S7Q5W21qnFgEUPH%2BEtwzarvqceRLWqwiq%2BKmxpOOZJBT0%2B30uyLzb3nEARJM0DWwPWS8zHTt4hL4lSNcqoIUatVFziYYAQ6%2FyW67ykEO%2FZgs4b5OohVDr5aTuSvAX9R1gSuNQJE6B0YUflK3nawI5mhimrkanzNabnnztFNwuh0Z0TaqPnfzCzYbKls1xRHTEka4GWmqE2E7kzHSRW%2Fs6%2FsAxPXstGYRlJnbOHe85sm6bYQUe7CnIA4JbLrSKxAQrfD8p7CuviiaSC4DaG5XwTWjxP6Fv%2BUGCu1iUL2WDMabihjpvl5XwkIMNoj%2FT8iq0wUPh4%2BWwdx6JUvpkknXjbF%2BF6SDVEr0WrveBVfo0J1uOHE6Cm2xibIrmAV34ZyW78dLHLmhsZ6HLYa0I3t4M0WPMR8PvoEan5RDpEtoXnrhpME8SHEpaX7zVdr1F0oGZKF8oRh2GA9WY90S2Urp5hQl92IKV1e7blCdojKrIsbdLVutu5eesNCGV%2Bu4OzexiMKwYSdB7Yzpd6lzQoK3Gyy0WIiPwtgvOJyccN%2FyfF4D2SVyVpM4IiwQrM8htkGYUenpVMMS8w78GOqUB9ehiwRltPMCKaSYGejjja14KPlME4vLo4qe18rdLCSbAmYow%2BcdjVXMVDDjhmLRoGR8B1Tro3h1oTkD%2F%2FXR%2F5%2FrTUFrzkw5JWBh2O7VpCuO8M6avR3T%2FPIotqkIca%2FR0DL6C5ESPZpw4BPAb7rV1sK%2BDhwJSWRvtjyEyidRoCfhILNwuD3OcsJwBYKzaRqSdC3Cgu1zzfb6oe2CDRC8mGBKfHeVh&X-Amz-Signature=6e314e4c269a512508d65f086e6400f8a7e29f11d647211337f1457243ddf7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFNHZFB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGHhh8MiKuwl%2F02%2FST24Owrk53u46mBpQn%2FWeFEVUw7AiEAs50D5DkbotMJtbrDbzkqZZNtoMmxOR19ed8wEjB7JKIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMqbsgI2BcchGvQQuCrcA7is42uJE%2FBJJ8YOnLWBOYirvOu9Pw%2B6UXhORjfkc2EVNc1QxLYrRy2S7Q5W21qnFgEUPH%2BEtwzarvqceRLWqwiq%2BKmxpOOZJBT0%2B30uyLzb3nEARJM0DWwPWS8zHTt4hL4lSNcqoIUatVFziYYAQ6%2FyW67ykEO%2FZgs4b5OohVDr5aTuSvAX9R1gSuNQJE6B0YUflK3nawI5mhimrkanzNabnnztFNwuh0Z0TaqPnfzCzYbKls1xRHTEka4GWmqE2E7kzHSRW%2Fs6%2FsAxPXstGYRlJnbOHe85sm6bYQUe7CnIA4JbLrSKxAQrfD8p7CuviiaSC4DaG5XwTWjxP6Fv%2BUGCu1iUL2WDMabihjpvl5XwkIMNoj%2FT8iq0wUPh4%2BWwdx6JUvpkknXjbF%2BF6SDVEr0WrveBVfo0J1uOHE6Cm2xibIrmAV34ZyW78dLHLmhsZ6HLYa0I3t4M0WPMR8PvoEan5RDpEtoXnrhpME8SHEpaX7zVdr1F0oGZKF8oRh2GA9WY90S2Urp5hQl92IKV1e7blCdojKrIsbdLVutu5eesNCGV%2Bu4OzexiMKwYSdB7Yzpd6lzQoK3Gyy0WIiPwtgvOJyccN%2FyfF4D2SVyVpM4IiwQrM8htkGYUenpVMMS8w78GOqUB9ehiwRltPMCKaSYGejjja14KPlME4vLo4qe18rdLCSbAmYow%2BcdjVXMVDDjhmLRoGR8B1Tro3h1oTkD%2F%2FXR%2F5%2FrTUFrzkw5JWBh2O7VpCuO8M6avR3T%2FPIotqkIca%2FR0DL6C5ESPZpw4BPAb7rV1sK%2BDhwJSWRvtjyEyidRoCfhILNwuD3OcsJwBYKzaRqSdC3Cgu1zzfb6oe2CDRC8mGBKfHeVh&X-Amz-Signature=af194dace5a1287b332e339442b97eb840e56171d83ca1911192ae9fd7edf19b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
