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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRP44H4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHT1fHXbEjXW3pFvhbcaQ5xHp6XVUr%2BEuDE0ufPGjrN4AiAOOm5dxeKr7tSqZlfEp%2BrwrlSGFt1Zqok%2FXHXIPW7d5Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMmhj2BBKzQoHf%2FyuaKtwDU6PC9s9cD2fMwMTEZheAhoD1QwV6z7t8pztzLOHyybJUsmV5hyoyAFrI8Ws4rUN5qvlw0os%2BFU2374ppsOCNxmpFWkC74jkRk9tH4Ky5enFNrxOXF1ZxO6cr%2Fxbtc1sBqNJyF7FopteVAZgdfdqHAp1ReDvsMUXFD%2FZ9VchiR6QxilFDBGBR74fMuTkhnBdfRExHY8zw%2FzVroFu2AQdDHNSaT8Y98ZazigYGwcYuXNiD%2FGts51gWVYoVeRd0jY4PoK7Wyo4K6vhov%2FE3hdOhsPXs%2B06YLfWhT%2Bpy7n%2BdQ%2BiljoBr%2Buv8GfElh1R4i0mb2jRaiC8wH28ToDod1xLp6kUhY5KDmPH4gdlgb2s7Fs8RvDSozPc4hXumE7MI75yHEMOAhNYIFpLFUkrfBjzcOKAz3JdiVxOR%2FPMBNg%2BWCn3um3OmHmz94T5BSrFcmjJAoqUAOjwp61UJKUuER5YqEbCEOn0mP%2F3Tp5OryXPFk%2BaJf2nVfvWsV2kMzKmjj3SXGwMqoYJf%2BEZiYKerDEzCq47MZvUI%2FhjuttrUlgE0ZaKDTAII3D%2BTEnTsABKAwto7Q3bgI7EnudKoQF8193i2v1Cgj9E6813cvRZTeyrteqwYDFdJTvur0c17EI0wtp%2BOvQY6pgHzIxGb4ATj45B%2B1GjkNnNiN7kHYIUq%2FmUwz7qQ1NT6ZFaOz56RG%2Bz28rmb3JFAVwQnjisuLlD2zC4bzNDs9geUFi6uZKSJv6ebFrvTdR%2FcFMJ7QybSrzf7hJdxc84jx4FPWVqHtJ%2BEfykJIXxMBzT5fiEIis6%2FDzbePXf7XxlpobL5MjzZXY96lwfmyPIpTKBDc9Qx%2B%2F4WrLISzVwdPXHzM2fchh4F&X-Amz-Signature=539d82c645bb471b9c558fcbcaef04d9d5023a5b85704185d8b41c24af8eec6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRP44H4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHT1fHXbEjXW3pFvhbcaQ5xHp6XVUr%2BEuDE0ufPGjrN4AiAOOm5dxeKr7tSqZlfEp%2BrwrlSGFt1Zqok%2FXHXIPW7d5Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMmhj2BBKzQoHf%2FyuaKtwDU6PC9s9cD2fMwMTEZheAhoD1QwV6z7t8pztzLOHyybJUsmV5hyoyAFrI8Ws4rUN5qvlw0os%2BFU2374ppsOCNxmpFWkC74jkRk9tH4Ky5enFNrxOXF1ZxO6cr%2Fxbtc1sBqNJyF7FopteVAZgdfdqHAp1ReDvsMUXFD%2FZ9VchiR6QxilFDBGBR74fMuTkhnBdfRExHY8zw%2FzVroFu2AQdDHNSaT8Y98ZazigYGwcYuXNiD%2FGts51gWVYoVeRd0jY4PoK7Wyo4K6vhov%2FE3hdOhsPXs%2B06YLfWhT%2Bpy7n%2BdQ%2BiljoBr%2Buv8GfElh1R4i0mb2jRaiC8wH28ToDod1xLp6kUhY5KDmPH4gdlgb2s7Fs8RvDSozPc4hXumE7MI75yHEMOAhNYIFpLFUkrfBjzcOKAz3JdiVxOR%2FPMBNg%2BWCn3um3OmHmz94T5BSrFcmjJAoqUAOjwp61UJKUuER5YqEbCEOn0mP%2F3Tp5OryXPFk%2BaJf2nVfvWsV2kMzKmjj3SXGwMqoYJf%2BEZiYKerDEzCq47MZvUI%2FhjuttrUlgE0ZaKDTAII3D%2BTEnTsABKAwto7Q3bgI7EnudKoQF8193i2v1Cgj9E6813cvRZTeyrteqwYDFdJTvur0c17EI0wtp%2BOvQY6pgHzIxGb4ATj45B%2B1GjkNnNiN7kHYIUq%2FmUwz7qQ1NT6ZFaOz56RG%2Bz28rmb3JFAVwQnjisuLlD2zC4bzNDs9geUFi6uZKSJv6ebFrvTdR%2FcFMJ7QybSrzf7hJdxc84jx4FPWVqHtJ%2BEfykJIXxMBzT5fiEIis6%2FDzbePXf7XxlpobL5MjzZXY96lwfmyPIpTKBDc9Qx%2B%2F4WrLISzVwdPXHzM2fchh4F&X-Amz-Signature=e5d749a5e0be40000b1276944afa8d3b71714976389367adf5cf331fa29cb8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRP44H4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHT1fHXbEjXW3pFvhbcaQ5xHp6XVUr%2BEuDE0ufPGjrN4AiAOOm5dxeKr7tSqZlfEp%2BrwrlSGFt1Zqok%2FXHXIPW7d5Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMmhj2BBKzQoHf%2FyuaKtwDU6PC9s9cD2fMwMTEZheAhoD1QwV6z7t8pztzLOHyybJUsmV5hyoyAFrI8Ws4rUN5qvlw0os%2BFU2374ppsOCNxmpFWkC74jkRk9tH4Ky5enFNrxOXF1ZxO6cr%2Fxbtc1sBqNJyF7FopteVAZgdfdqHAp1ReDvsMUXFD%2FZ9VchiR6QxilFDBGBR74fMuTkhnBdfRExHY8zw%2FzVroFu2AQdDHNSaT8Y98ZazigYGwcYuXNiD%2FGts51gWVYoVeRd0jY4PoK7Wyo4K6vhov%2FE3hdOhsPXs%2B06YLfWhT%2Bpy7n%2BdQ%2BiljoBr%2Buv8GfElh1R4i0mb2jRaiC8wH28ToDod1xLp6kUhY5KDmPH4gdlgb2s7Fs8RvDSozPc4hXumE7MI75yHEMOAhNYIFpLFUkrfBjzcOKAz3JdiVxOR%2FPMBNg%2BWCn3um3OmHmz94T5BSrFcmjJAoqUAOjwp61UJKUuER5YqEbCEOn0mP%2F3Tp5OryXPFk%2BaJf2nVfvWsV2kMzKmjj3SXGwMqoYJf%2BEZiYKerDEzCq47MZvUI%2FhjuttrUlgE0ZaKDTAII3D%2BTEnTsABKAwto7Q3bgI7EnudKoQF8193i2v1Cgj9E6813cvRZTeyrteqwYDFdJTvur0c17EI0wtp%2BOvQY6pgHzIxGb4ATj45B%2B1GjkNnNiN7kHYIUq%2FmUwz7qQ1NT6ZFaOz56RG%2Bz28rmb3JFAVwQnjisuLlD2zC4bzNDs9geUFi6uZKSJv6ebFrvTdR%2FcFMJ7QybSrzf7hJdxc84jx4FPWVqHtJ%2BEfykJIXxMBzT5fiEIis6%2FDzbePXf7XxlpobL5MjzZXY96lwfmyPIpTKBDc9Qx%2B%2F4WrLISzVwdPXHzM2fchh4F&X-Amz-Signature=ddf669ffe43f8624b396931228451f0f71e1707575f9e090d58fe2f7a1d1bb82&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRP44H4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHT1fHXbEjXW3pFvhbcaQ5xHp6XVUr%2BEuDE0ufPGjrN4AiAOOm5dxeKr7tSqZlfEp%2BrwrlSGFt1Zqok%2FXHXIPW7d5Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMmhj2BBKzQoHf%2FyuaKtwDU6PC9s9cD2fMwMTEZheAhoD1QwV6z7t8pztzLOHyybJUsmV5hyoyAFrI8Ws4rUN5qvlw0os%2BFU2374ppsOCNxmpFWkC74jkRk9tH4Ky5enFNrxOXF1ZxO6cr%2Fxbtc1sBqNJyF7FopteVAZgdfdqHAp1ReDvsMUXFD%2FZ9VchiR6QxilFDBGBR74fMuTkhnBdfRExHY8zw%2FzVroFu2AQdDHNSaT8Y98ZazigYGwcYuXNiD%2FGts51gWVYoVeRd0jY4PoK7Wyo4K6vhov%2FE3hdOhsPXs%2B06YLfWhT%2Bpy7n%2BdQ%2BiljoBr%2Buv8GfElh1R4i0mb2jRaiC8wH28ToDod1xLp6kUhY5KDmPH4gdlgb2s7Fs8RvDSozPc4hXumE7MI75yHEMOAhNYIFpLFUkrfBjzcOKAz3JdiVxOR%2FPMBNg%2BWCn3um3OmHmz94T5BSrFcmjJAoqUAOjwp61UJKUuER5YqEbCEOn0mP%2F3Tp5OryXPFk%2BaJf2nVfvWsV2kMzKmjj3SXGwMqoYJf%2BEZiYKerDEzCq47MZvUI%2FhjuttrUlgE0ZaKDTAII3D%2BTEnTsABKAwto7Q3bgI7EnudKoQF8193i2v1Cgj9E6813cvRZTeyrteqwYDFdJTvur0c17EI0wtp%2BOvQY6pgHzIxGb4ATj45B%2B1GjkNnNiN7kHYIUq%2FmUwz7qQ1NT6ZFaOz56RG%2Bz28rmb3JFAVwQnjisuLlD2zC4bzNDs9geUFi6uZKSJv6ebFrvTdR%2FcFMJ7QybSrzf7hJdxc84jx4FPWVqHtJ%2BEfykJIXxMBzT5fiEIis6%2FDzbePXf7XxlpobL5MjzZXY96lwfmyPIpTKBDc9Qx%2B%2F4WrLISzVwdPXHzM2fchh4F&X-Amz-Signature=202552588bc107c974b89289dfb71708978cecd3cc80a6331350c83bb7570acb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRP44H4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHT1fHXbEjXW3pFvhbcaQ5xHp6XVUr%2BEuDE0ufPGjrN4AiAOOm5dxeKr7tSqZlfEp%2BrwrlSGFt1Zqok%2FXHXIPW7d5Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMmhj2BBKzQoHf%2FyuaKtwDU6PC9s9cD2fMwMTEZheAhoD1QwV6z7t8pztzLOHyybJUsmV5hyoyAFrI8Ws4rUN5qvlw0os%2BFU2374ppsOCNxmpFWkC74jkRk9tH4Ky5enFNrxOXF1ZxO6cr%2Fxbtc1sBqNJyF7FopteVAZgdfdqHAp1ReDvsMUXFD%2FZ9VchiR6QxilFDBGBR74fMuTkhnBdfRExHY8zw%2FzVroFu2AQdDHNSaT8Y98ZazigYGwcYuXNiD%2FGts51gWVYoVeRd0jY4PoK7Wyo4K6vhov%2FE3hdOhsPXs%2B06YLfWhT%2Bpy7n%2BdQ%2BiljoBr%2Buv8GfElh1R4i0mb2jRaiC8wH28ToDod1xLp6kUhY5KDmPH4gdlgb2s7Fs8RvDSozPc4hXumE7MI75yHEMOAhNYIFpLFUkrfBjzcOKAz3JdiVxOR%2FPMBNg%2BWCn3um3OmHmz94T5BSrFcmjJAoqUAOjwp61UJKUuER5YqEbCEOn0mP%2F3Tp5OryXPFk%2BaJf2nVfvWsV2kMzKmjj3SXGwMqoYJf%2BEZiYKerDEzCq47MZvUI%2FhjuttrUlgE0ZaKDTAII3D%2BTEnTsABKAwto7Q3bgI7EnudKoQF8193i2v1Cgj9E6813cvRZTeyrteqwYDFdJTvur0c17EI0wtp%2BOvQY6pgHzIxGb4ATj45B%2B1GjkNnNiN7kHYIUq%2FmUwz7qQ1NT6ZFaOz56RG%2Bz28rmb3JFAVwQnjisuLlD2zC4bzNDs9geUFi6uZKSJv6ebFrvTdR%2FcFMJ7QybSrzf7hJdxc84jx4FPWVqHtJ%2BEfykJIXxMBzT5fiEIis6%2FDzbePXf7XxlpobL5MjzZXY96lwfmyPIpTKBDc9Qx%2B%2F4WrLISzVwdPXHzM2fchh4F&X-Amz-Signature=d02aa0372aa858b27f06dbd128c67a8bedcdca096a48e75434e599db6da7c973&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRP44H4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHT1fHXbEjXW3pFvhbcaQ5xHp6XVUr%2BEuDE0ufPGjrN4AiAOOm5dxeKr7tSqZlfEp%2BrwrlSGFt1Zqok%2FXHXIPW7d5Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMmhj2BBKzQoHf%2FyuaKtwDU6PC9s9cD2fMwMTEZheAhoD1QwV6z7t8pztzLOHyybJUsmV5hyoyAFrI8Ws4rUN5qvlw0os%2BFU2374ppsOCNxmpFWkC74jkRk9tH4Ky5enFNrxOXF1ZxO6cr%2Fxbtc1sBqNJyF7FopteVAZgdfdqHAp1ReDvsMUXFD%2FZ9VchiR6QxilFDBGBR74fMuTkhnBdfRExHY8zw%2FzVroFu2AQdDHNSaT8Y98ZazigYGwcYuXNiD%2FGts51gWVYoVeRd0jY4PoK7Wyo4K6vhov%2FE3hdOhsPXs%2B06YLfWhT%2Bpy7n%2BdQ%2BiljoBr%2Buv8GfElh1R4i0mb2jRaiC8wH28ToDod1xLp6kUhY5KDmPH4gdlgb2s7Fs8RvDSozPc4hXumE7MI75yHEMOAhNYIFpLFUkrfBjzcOKAz3JdiVxOR%2FPMBNg%2BWCn3um3OmHmz94T5BSrFcmjJAoqUAOjwp61UJKUuER5YqEbCEOn0mP%2F3Tp5OryXPFk%2BaJf2nVfvWsV2kMzKmjj3SXGwMqoYJf%2BEZiYKerDEzCq47MZvUI%2FhjuttrUlgE0ZaKDTAII3D%2BTEnTsABKAwto7Q3bgI7EnudKoQF8193i2v1Cgj9E6813cvRZTeyrteqwYDFdJTvur0c17EI0wtp%2BOvQY6pgHzIxGb4ATj45B%2B1GjkNnNiN7kHYIUq%2FmUwz7qQ1NT6ZFaOz56RG%2Bz28rmb3JFAVwQnjisuLlD2zC4bzNDs9geUFi6uZKSJv6ebFrvTdR%2FcFMJ7QybSrzf7hJdxc84jx4FPWVqHtJ%2BEfykJIXxMBzT5fiEIis6%2FDzbePXf7XxlpobL5MjzZXY96lwfmyPIpTKBDc9Qx%2B%2F4WrLISzVwdPXHzM2fchh4F&X-Amz-Signature=b1eb969cbc61ccbba6bb88077b60786353a20c719af5ef7f31ed034d89b4c5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRP44H4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHT1fHXbEjXW3pFvhbcaQ5xHp6XVUr%2BEuDE0ufPGjrN4AiAOOm5dxeKr7tSqZlfEp%2BrwrlSGFt1Zqok%2FXHXIPW7d5Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMmhj2BBKzQoHf%2FyuaKtwDU6PC9s9cD2fMwMTEZheAhoD1QwV6z7t8pztzLOHyybJUsmV5hyoyAFrI8Ws4rUN5qvlw0os%2BFU2374ppsOCNxmpFWkC74jkRk9tH4Ky5enFNrxOXF1ZxO6cr%2Fxbtc1sBqNJyF7FopteVAZgdfdqHAp1ReDvsMUXFD%2FZ9VchiR6QxilFDBGBR74fMuTkhnBdfRExHY8zw%2FzVroFu2AQdDHNSaT8Y98ZazigYGwcYuXNiD%2FGts51gWVYoVeRd0jY4PoK7Wyo4K6vhov%2FE3hdOhsPXs%2B06YLfWhT%2Bpy7n%2BdQ%2BiljoBr%2Buv8GfElh1R4i0mb2jRaiC8wH28ToDod1xLp6kUhY5KDmPH4gdlgb2s7Fs8RvDSozPc4hXumE7MI75yHEMOAhNYIFpLFUkrfBjzcOKAz3JdiVxOR%2FPMBNg%2BWCn3um3OmHmz94T5BSrFcmjJAoqUAOjwp61UJKUuER5YqEbCEOn0mP%2F3Tp5OryXPFk%2BaJf2nVfvWsV2kMzKmjj3SXGwMqoYJf%2BEZiYKerDEzCq47MZvUI%2FhjuttrUlgE0ZaKDTAII3D%2BTEnTsABKAwto7Q3bgI7EnudKoQF8193i2v1Cgj9E6813cvRZTeyrteqwYDFdJTvur0c17EI0wtp%2BOvQY6pgHzIxGb4ATj45B%2B1GjkNnNiN7kHYIUq%2FmUwz7qQ1NT6ZFaOz56RG%2Bz28rmb3JFAVwQnjisuLlD2zC4bzNDs9geUFi6uZKSJv6ebFrvTdR%2FcFMJ7QybSrzf7hJdxc84jx4FPWVqHtJ%2BEfykJIXxMBzT5fiEIis6%2FDzbePXf7XxlpobL5MjzZXY96lwfmyPIpTKBDc9Qx%2B%2F4WrLISzVwdPXHzM2fchh4F&X-Amz-Signature=c29a55c4673c322d128f7b2026cdf132baf57082429d2b8664417555bc75ad9b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
