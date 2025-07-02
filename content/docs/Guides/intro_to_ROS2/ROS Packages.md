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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EJUCFT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiwBF2koGZ0SkQQFcDVF%2BaiUJK6KvLf7YB5DO8noRzlwIgZRrmbfxbrQykWsZCam60d2DrwKD35sSj%2Fm1GX0l3MvoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC2TuvNixb9UnGceircA9Z5pUkaSKc2pBGYWkMfaAKAAlP%2FqNIizPHB0W9weLOSpZQOZeqsGWH99%2FwQmvnLlAeyy8k%2B59Y%2B3WgPudW87yej4Ao41mchKyu1NKJh8%2BTVc5PYd%2FbIzI3V0J4OzhOGtlnt3XNyKJ2CQZVwXMTOXy42WGV4D1i6YVMvEvkzaZFf7qUdn68qDvltVEYoMkhPfYz%2BayH7I5JWVll5fdH1mp3vOHROS%2FZNk2dkN1OhNvKqCpIo5SCGToLpnifCKxCXlUybFsf8O5svCSSSXH3Vp5PgBDXyI%2BbuSu4PNGeKG0ZStNAP6t4ohU7adWW%2FYquWxZyawY36d8h%2FxpLIxc82lnsUP9kO%2BoNLBFyLUQzSUQxPC4sda57mV0DjMFxqobwqesKII0XCF%2FV8OR2mKvQhhllOMffIOOR9tKWXOOQ0waH23oSlv2HjpS4sAULEVKQ7cH5OZQgD0%2FVxZBEEdCiXzXlMtrhajrUFkz85AOQDA0EATayMCAX58aUFHokRHBaf7zHoccgAKKPTJ%2FymCbcLOOA4OMzpsx2hvsCoW92xjiFaT9NFwZodOUDW9Zs0izkol4pZTswLJv9fb18wDEzSavDmPfGo%2BOvUZeRo63kXOJ2W1v%2FLRnveSL1yETIzMLa9lsMGOqUBhR20nbK2L%2BnFFfzne4DJgj4%2BwvIef0jC%2F89V%2BrnVv%2BbwFV6kGMUzAbVlKSxsiP76ArJXUxTDlLUUqCZR9Boi9Hbkf2Ilklx%2FyATF18KR6zmDvQkSWcoDhzeWbvpAkP1VUufuHExTllif0dI%2F2Bp0V2B6LaPeIi9ng4Z4opsuh8q%2BTmWnEtg1jB2aZxT8Vw78h728lSAmj4mXVG7VRKWR6alAYtTs&X-Amz-Signature=8716525ec3c58440b33538415fb99c867dffc9cc2a1c0ab5e9a827711952bcf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EJUCFT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiwBF2koGZ0SkQQFcDVF%2BaiUJK6KvLf7YB5DO8noRzlwIgZRrmbfxbrQykWsZCam60d2DrwKD35sSj%2Fm1GX0l3MvoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC2TuvNixb9UnGceircA9Z5pUkaSKc2pBGYWkMfaAKAAlP%2FqNIizPHB0W9weLOSpZQOZeqsGWH99%2FwQmvnLlAeyy8k%2B59Y%2B3WgPudW87yej4Ao41mchKyu1NKJh8%2BTVc5PYd%2FbIzI3V0J4OzhOGtlnt3XNyKJ2CQZVwXMTOXy42WGV4D1i6YVMvEvkzaZFf7qUdn68qDvltVEYoMkhPfYz%2BayH7I5JWVll5fdH1mp3vOHROS%2FZNk2dkN1OhNvKqCpIo5SCGToLpnifCKxCXlUybFsf8O5svCSSSXH3Vp5PgBDXyI%2BbuSu4PNGeKG0ZStNAP6t4ohU7adWW%2FYquWxZyawY36d8h%2FxpLIxc82lnsUP9kO%2BoNLBFyLUQzSUQxPC4sda57mV0DjMFxqobwqesKII0XCF%2FV8OR2mKvQhhllOMffIOOR9tKWXOOQ0waH23oSlv2HjpS4sAULEVKQ7cH5OZQgD0%2FVxZBEEdCiXzXlMtrhajrUFkz85AOQDA0EATayMCAX58aUFHokRHBaf7zHoccgAKKPTJ%2FymCbcLOOA4OMzpsx2hvsCoW92xjiFaT9NFwZodOUDW9Zs0izkol4pZTswLJv9fb18wDEzSavDmPfGo%2BOvUZeRo63kXOJ2W1v%2FLRnveSL1yETIzMLa9lsMGOqUBhR20nbK2L%2BnFFfzne4DJgj4%2BwvIef0jC%2F89V%2BrnVv%2BbwFV6kGMUzAbVlKSxsiP76ArJXUxTDlLUUqCZR9Boi9Hbkf2Ilklx%2FyATF18KR6zmDvQkSWcoDhzeWbvpAkP1VUufuHExTllif0dI%2F2Bp0V2B6LaPeIi9ng4Z4opsuh8q%2BTmWnEtg1jB2aZxT8Vw78h728lSAmj4mXVG7VRKWR6alAYtTs&X-Amz-Signature=a66afeabe34291b66e9d000b089a0312757376cbe213a5ce7d5d5c877f5b5496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EJUCFT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiwBF2koGZ0SkQQFcDVF%2BaiUJK6KvLf7YB5DO8noRzlwIgZRrmbfxbrQykWsZCam60d2DrwKD35sSj%2Fm1GX0l3MvoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC2TuvNixb9UnGceircA9Z5pUkaSKc2pBGYWkMfaAKAAlP%2FqNIizPHB0W9weLOSpZQOZeqsGWH99%2FwQmvnLlAeyy8k%2B59Y%2B3WgPudW87yej4Ao41mchKyu1NKJh8%2BTVc5PYd%2FbIzI3V0J4OzhOGtlnt3XNyKJ2CQZVwXMTOXy42WGV4D1i6YVMvEvkzaZFf7qUdn68qDvltVEYoMkhPfYz%2BayH7I5JWVll5fdH1mp3vOHROS%2FZNk2dkN1OhNvKqCpIo5SCGToLpnifCKxCXlUybFsf8O5svCSSSXH3Vp5PgBDXyI%2BbuSu4PNGeKG0ZStNAP6t4ohU7adWW%2FYquWxZyawY36d8h%2FxpLIxc82lnsUP9kO%2BoNLBFyLUQzSUQxPC4sda57mV0DjMFxqobwqesKII0XCF%2FV8OR2mKvQhhllOMffIOOR9tKWXOOQ0waH23oSlv2HjpS4sAULEVKQ7cH5OZQgD0%2FVxZBEEdCiXzXlMtrhajrUFkz85AOQDA0EATayMCAX58aUFHokRHBaf7zHoccgAKKPTJ%2FymCbcLOOA4OMzpsx2hvsCoW92xjiFaT9NFwZodOUDW9Zs0izkol4pZTswLJv9fb18wDEzSavDmPfGo%2BOvUZeRo63kXOJ2W1v%2FLRnveSL1yETIzMLa9lsMGOqUBhR20nbK2L%2BnFFfzne4DJgj4%2BwvIef0jC%2F89V%2BrnVv%2BbwFV6kGMUzAbVlKSxsiP76ArJXUxTDlLUUqCZR9Boi9Hbkf2Ilklx%2FyATF18KR6zmDvQkSWcoDhzeWbvpAkP1VUufuHExTllif0dI%2F2Bp0V2B6LaPeIi9ng4Z4opsuh8q%2BTmWnEtg1jB2aZxT8Vw78h728lSAmj4mXVG7VRKWR6alAYtTs&X-Amz-Signature=48ec5abc8b9350e61aabf3d34823cc91a5e8d95a59695a9ab6617771f1217572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EJUCFT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiwBF2koGZ0SkQQFcDVF%2BaiUJK6KvLf7YB5DO8noRzlwIgZRrmbfxbrQykWsZCam60d2DrwKD35sSj%2Fm1GX0l3MvoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC2TuvNixb9UnGceircA9Z5pUkaSKc2pBGYWkMfaAKAAlP%2FqNIizPHB0W9weLOSpZQOZeqsGWH99%2FwQmvnLlAeyy8k%2B59Y%2B3WgPudW87yej4Ao41mchKyu1NKJh8%2BTVc5PYd%2FbIzI3V0J4OzhOGtlnt3XNyKJ2CQZVwXMTOXy42WGV4D1i6YVMvEvkzaZFf7qUdn68qDvltVEYoMkhPfYz%2BayH7I5JWVll5fdH1mp3vOHROS%2FZNk2dkN1OhNvKqCpIo5SCGToLpnifCKxCXlUybFsf8O5svCSSSXH3Vp5PgBDXyI%2BbuSu4PNGeKG0ZStNAP6t4ohU7adWW%2FYquWxZyawY36d8h%2FxpLIxc82lnsUP9kO%2BoNLBFyLUQzSUQxPC4sda57mV0DjMFxqobwqesKII0XCF%2FV8OR2mKvQhhllOMffIOOR9tKWXOOQ0waH23oSlv2HjpS4sAULEVKQ7cH5OZQgD0%2FVxZBEEdCiXzXlMtrhajrUFkz85AOQDA0EATayMCAX58aUFHokRHBaf7zHoccgAKKPTJ%2FymCbcLOOA4OMzpsx2hvsCoW92xjiFaT9NFwZodOUDW9Zs0izkol4pZTswLJv9fb18wDEzSavDmPfGo%2BOvUZeRo63kXOJ2W1v%2FLRnveSL1yETIzMLa9lsMGOqUBhR20nbK2L%2BnFFfzne4DJgj4%2BwvIef0jC%2F89V%2BrnVv%2BbwFV6kGMUzAbVlKSxsiP76ArJXUxTDlLUUqCZR9Boi9Hbkf2Ilklx%2FyATF18KR6zmDvQkSWcoDhzeWbvpAkP1VUufuHExTllif0dI%2F2Bp0V2B6LaPeIi9ng4Z4opsuh8q%2BTmWnEtg1jB2aZxT8Vw78h728lSAmj4mXVG7VRKWR6alAYtTs&X-Amz-Signature=1a7a15a99d76073b117148901c584c4ebd1c73e3287b709d5589789c4c1d65ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EJUCFT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiwBF2koGZ0SkQQFcDVF%2BaiUJK6KvLf7YB5DO8noRzlwIgZRrmbfxbrQykWsZCam60d2DrwKD35sSj%2Fm1GX0l3MvoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC2TuvNixb9UnGceircA9Z5pUkaSKc2pBGYWkMfaAKAAlP%2FqNIizPHB0W9weLOSpZQOZeqsGWH99%2FwQmvnLlAeyy8k%2B59Y%2B3WgPudW87yej4Ao41mchKyu1NKJh8%2BTVc5PYd%2FbIzI3V0J4OzhOGtlnt3XNyKJ2CQZVwXMTOXy42WGV4D1i6YVMvEvkzaZFf7qUdn68qDvltVEYoMkhPfYz%2BayH7I5JWVll5fdH1mp3vOHROS%2FZNk2dkN1OhNvKqCpIo5SCGToLpnifCKxCXlUybFsf8O5svCSSSXH3Vp5PgBDXyI%2BbuSu4PNGeKG0ZStNAP6t4ohU7adWW%2FYquWxZyawY36d8h%2FxpLIxc82lnsUP9kO%2BoNLBFyLUQzSUQxPC4sda57mV0DjMFxqobwqesKII0XCF%2FV8OR2mKvQhhllOMffIOOR9tKWXOOQ0waH23oSlv2HjpS4sAULEVKQ7cH5OZQgD0%2FVxZBEEdCiXzXlMtrhajrUFkz85AOQDA0EATayMCAX58aUFHokRHBaf7zHoccgAKKPTJ%2FymCbcLOOA4OMzpsx2hvsCoW92xjiFaT9NFwZodOUDW9Zs0izkol4pZTswLJv9fb18wDEzSavDmPfGo%2BOvUZeRo63kXOJ2W1v%2FLRnveSL1yETIzMLa9lsMGOqUBhR20nbK2L%2BnFFfzne4DJgj4%2BwvIef0jC%2F89V%2BrnVv%2BbwFV6kGMUzAbVlKSxsiP76ArJXUxTDlLUUqCZR9Boi9Hbkf2Ilklx%2FyATF18KR6zmDvQkSWcoDhzeWbvpAkP1VUufuHExTllif0dI%2F2Bp0V2B6LaPeIi9ng4Z4opsuh8q%2BTmWnEtg1jB2aZxT8Vw78h728lSAmj4mXVG7VRKWR6alAYtTs&X-Amz-Signature=6eaf1188db97964161adbdd7866a676b1bb94d59f7118d0e36c2bbadf03cca97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EJUCFT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiwBF2koGZ0SkQQFcDVF%2BaiUJK6KvLf7YB5DO8noRzlwIgZRrmbfxbrQykWsZCam60d2DrwKD35sSj%2Fm1GX0l3MvoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC2TuvNixb9UnGceircA9Z5pUkaSKc2pBGYWkMfaAKAAlP%2FqNIizPHB0W9weLOSpZQOZeqsGWH99%2FwQmvnLlAeyy8k%2B59Y%2B3WgPudW87yej4Ao41mchKyu1NKJh8%2BTVc5PYd%2FbIzI3V0J4OzhOGtlnt3XNyKJ2CQZVwXMTOXy42WGV4D1i6YVMvEvkzaZFf7qUdn68qDvltVEYoMkhPfYz%2BayH7I5JWVll5fdH1mp3vOHROS%2FZNk2dkN1OhNvKqCpIo5SCGToLpnifCKxCXlUybFsf8O5svCSSSXH3Vp5PgBDXyI%2BbuSu4PNGeKG0ZStNAP6t4ohU7adWW%2FYquWxZyawY36d8h%2FxpLIxc82lnsUP9kO%2BoNLBFyLUQzSUQxPC4sda57mV0DjMFxqobwqesKII0XCF%2FV8OR2mKvQhhllOMffIOOR9tKWXOOQ0waH23oSlv2HjpS4sAULEVKQ7cH5OZQgD0%2FVxZBEEdCiXzXlMtrhajrUFkz85AOQDA0EATayMCAX58aUFHokRHBaf7zHoccgAKKPTJ%2FymCbcLOOA4OMzpsx2hvsCoW92xjiFaT9NFwZodOUDW9Zs0izkol4pZTswLJv9fb18wDEzSavDmPfGo%2BOvUZeRo63kXOJ2W1v%2FLRnveSL1yETIzMLa9lsMGOqUBhR20nbK2L%2BnFFfzne4DJgj4%2BwvIef0jC%2F89V%2BrnVv%2BbwFV6kGMUzAbVlKSxsiP76ArJXUxTDlLUUqCZR9Boi9Hbkf2Ilklx%2FyATF18KR6zmDvQkSWcoDhzeWbvpAkP1VUufuHExTllif0dI%2F2Bp0V2B6LaPeIi9ng4Z4opsuh8q%2BTmWnEtg1jB2aZxT8Vw78h728lSAmj4mXVG7VRKWR6alAYtTs&X-Amz-Signature=49a06314bcdee560d9772338b9a9163f96cb03ed45c92d6b9a317796d3c98fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EJUCFT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiwBF2koGZ0SkQQFcDVF%2BaiUJK6KvLf7YB5DO8noRzlwIgZRrmbfxbrQykWsZCam60d2DrwKD35sSj%2Fm1GX0l3MvoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC2TuvNixb9UnGceircA9Z5pUkaSKc2pBGYWkMfaAKAAlP%2FqNIizPHB0W9weLOSpZQOZeqsGWH99%2FwQmvnLlAeyy8k%2B59Y%2B3WgPudW87yej4Ao41mchKyu1NKJh8%2BTVc5PYd%2FbIzI3V0J4OzhOGtlnt3XNyKJ2CQZVwXMTOXy42WGV4D1i6YVMvEvkzaZFf7qUdn68qDvltVEYoMkhPfYz%2BayH7I5JWVll5fdH1mp3vOHROS%2FZNk2dkN1OhNvKqCpIo5SCGToLpnifCKxCXlUybFsf8O5svCSSSXH3Vp5PgBDXyI%2BbuSu4PNGeKG0ZStNAP6t4ohU7adWW%2FYquWxZyawY36d8h%2FxpLIxc82lnsUP9kO%2BoNLBFyLUQzSUQxPC4sda57mV0DjMFxqobwqesKII0XCF%2FV8OR2mKvQhhllOMffIOOR9tKWXOOQ0waH23oSlv2HjpS4sAULEVKQ7cH5OZQgD0%2FVxZBEEdCiXzXlMtrhajrUFkz85AOQDA0EATayMCAX58aUFHokRHBaf7zHoccgAKKPTJ%2FymCbcLOOA4OMzpsx2hvsCoW92xjiFaT9NFwZodOUDW9Zs0izkol4pZTswLJv9fb18wDEzSavDmPfGo%2BOvUZeRo63kXOJ2W1v%2FLRnveSL1yETIzMLa9lsMGOqUBhR20nbK2L%2BnFFfzne4DJgj4%2BwvIef0jC%2F89V%2BrnVv%2BbwFV6kGMUzAbVlKSxsiP76ArJXUxTDlLUUqCZR9Boi9Hbkf2Ilklx%2FyATF18KR6zmDvQkSWcoDhzeWbvpAkP1VUufuHExTllif0dI%2F2Bp0V2B6LaPeIi9ng4Z4opsuh8q%2BTmWnEtg1jB2aZxT8Vw78h728lSAmj4mXVG7VRKWR6alAYtTs&X-Amz-Signature=5c188b13b1a01247cbd9f5972ba92b260314514c2ce9743c7007515b4a37a720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
