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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHVCXJ4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAb5MgE5tjkJzbEFRFRbgGCffPbaR3IClvoL2Z6%2BmQ9xAiAWHrHY473hHAZU8Npbt2CvWQRmiRV92zFEuRcxJBMljyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8MwthjIgRtjGmQaKtwDmxNmSIMVtGrjdS1s0txeLNf0r4Jw45IlxZ0lAIp1MyWX2oc6VfvjjQYz3Le2ETpWW7XB91t87wN25V25I2gtnSk6MbpjalWtJ8cIHW82sF4C5GcmFBg3%2FMeU7oPJlh4dWT8UYMomaAoVRVKOblvyp%2FwL2iSf44T58D633OGkJA7AbKTZ1O0MXNNurd2NqT4FOGPDLFo7xrIsGdPiNW0tZBJntJwIPEfhnUBcwxSXZmC3XhnKjyUGDIp9KdLM%2FAi05nlMjirCcM1LpzSMEJlDM4EUo7MKLMbcMFwV7sepTLwVNywphEMWnjCSoqu8S8QI%2BWaCMp72Hu6snlORFgtu79t%2BkLKbInfLMPoH6G%2FVkH12V9894G50gR3FD4qhmMx1vB3RvAbSQNAfRtM92rWn1IBixXHbWRLIdghLbhxHRHj44R%2FLNLyNhrwuJ4iAPuqAqpoKYRqIeIg7GDaS%2B%2BHAKs9fWgcz2afAjGmap7HB5unXjvDzf7o11V9VVp0did9QMSepkPXSka23SQcnvNj5WXQUOzOWQgNwjGXDovplLwQLcxko6BfjBepttKdT6QRKVGbdKfVoxkmoaUytZ6k70SxKwGK1BZWqMUN39rdgRFvEN7Bhygj0JQRsW8ww2MfhwgY6pgHosjW6iU8VLiyIXHnEYZwVc9BjwWSwLfX4o1REQP6ZtzbVp2gI7PvFCOVWA7c4eeXOyrWXQ8oYDRr2tKiK5abtFuXRu7bAFwBw7zNEIea1cK0IcT%2Fx5HTDb87oSkGQsBVlN6mHy0UBqrAW2qt69WT9ToANMpKwCnS8wTwti35CMQlBVlpZwwypjraD%2BnXBEkm1TyBJNEbYGoCOX3aMK1Sqh750vJC2&X-Amz-Signature=f5ed9a1f2d54082e2fc436d67545a4371d776acc9ebabb5456e049866bb257b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHVCXJ4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAb5MgE5tjkJzbEFRFRbgGCffPbaR3IClvoL2Z6%2BmQ9xAiAWHrHY473hHAZU8Npbt2CvWQRmiRV92zFEuRcxJBMljyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8MwthjIgRtjGmQaKtwDmxNmSIMVtGrjdS1s0txeLNf0r4Jw45IlxZ0lAIp1MyWX2oc6VfvjjQYz3Le2ETpWW7XB91t87wN25V25I2gtnSk6MbpjalWtJ8cIHW82sF4C5GcmFBg3%2FMeU7oPJlh4dWT8UYMomaAoVRVKOblvyp%2FwL2iSf44T58D633OGkJA7AbKTZ1O0MXNNurd2NqT4FOGPDLFo7xrIsGdPiNW0tZBJntJwIPEfhnUBcwxSXZmC3XhnKjyUGDIp9KdLM%2FAi05nlMjirCcM1LpzSMEJlDM4EUo7MKLMbcMFwV7sepTLwVNywphEMWnjCSoqu8S8QI%2BWaCMp72Hu6snlORFgtu79t%2BkLKbInfLMPoH6G%2FVkH12V9894G50gR3FD4qhmMx1vB3RvAbSQNAfRtM92rWn1IBixXHbWRLIdghLbhxHRHj44R%2FLNLyNhrwuJ4iAPuqAqpoKYRqIeIg7GDaS%2B%2BHAKs9fWgcz2afAjGmap7HB5unXjvDzf7o11V9VVp0did9QMSepkPXSka23SQcnvNj5WXQUOzOWQgNwjGXDovplLwQLcxko6BfjBepttKdT6QRKVGbdKfVoxkmoaUytZ6k70SxKwGK1BZWqMUN39rdgRFvEN7Bhygj0JQRsW8ww2MfhwgY6pgHosjW6iU8VLiyIXHnEYZwVc9BjwWSwLfX4o1REQP6ZtzbVp2gI7PvFCOVWA7c4eeXOyrWXQ8oYDRr2tKiK5abtFuXRu7bAFwBw7zNEIea1cK0IcT%2Fx5HTDb87oSkGQsBVlN6mHy0UBqrAW2qt69WT9ToANMpKwCnS8wTwti35CMQlBVlpZwwypjraD%2BnXBEkm1TyBJNEbYGoCOX3aMK1Sqh750vJC2&X-Amz-Signature=93114d9587446642c1cd5f5964152fd3d894b3766236d6f44273d4131b0ab867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHVCXJ4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAb5MgE5tjkJzbEFRFRbgGCffPbaR3IClvoL2Z6%2BmQ9xAiAWHrHY473hHAZU8Npbt2CvWQRmiRV92zFEuRcxJBMljyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8MwthjIgRtjGmQaKtwDmxNmSIMVtGrjdS1s0txeLNf0r4Jw45IlxZ0lAIp1MyWX2oc6VfvjjQYz3Le2ETpWW7XB91t87wN25V25I2gtnSk6MbpjalWtJ8cIHW82sF4C5GcmFBg3%2FMeU7oPJlh4dWT8UYMomaAoVRVKOblvyp%2FwL2iSf44T58D633OGkJA7AbKTZ1O0MXNNurd2NqT4FOGPDLFo7xrIsGdPiNW0tZBJntJwIPEfhnUBcwxSXZmC3XhnKjyUGDIp9KdLM%2FAi05nlMjirCcM1LpzSMEJlDM4EUo7MKLMbcMFwV7sepTLwVNywphEMWnjCSoqu8S8QI%2BWaCMp72Hu6snlORFgtu79t%2BkLKbInfLMPoH6G%2FVkH12V9894G50gR3FD4qhmMx1vB3RvAbSQNAfRtM92rWn1IBixXHbWRLIdghLbhxHRHj44R%2FLNLyNhrwuJ4iAPuqAqpoKYRqIeIg7GDaS%2B%2BHAKs9fWgcz2afAjGmap7HB5unXjvDzf7o11V9VVp0did9QMSepkPXSka23SQcnvNj5WXQUOzOWQgNwjGXDovplLwQLcxko6BfjBepttKdT6QRKVGbdKfVoxkmoaUytZ6k70SxKwGK1BZWqMUN39rdgRFvEN7Bhygj0JQRsW8ww2MfhwgY6pgHosjW6iU8VLiyIXHnEYZwVc9BjwWSwLfX4o1REQP6ZtzbVp2gI7PvFCOVWA7c4eeXOyrWXQ8oYDRr2tKiK5abtFuXRu7bAFwBw7zNEIea1cK0IcT%2Fx5HTDb87oSkGQsBVlN6mHy0UBqrAW2qt69WT9ToANMpKwCnS8wTwti35CMQlBVlpZwwypjraD%2BnXBEkm1TyBJNEbYGoCOX3aMK1Sqh750vJC2&X-Amz-Signature=8fb81e32735f5a655bf522794e0dc56439a9b08f02431dc7b2f32600a5a68a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHVCXJ4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAb5MgE5tjkJzbEFRFRbgGCffPbaR3IClvoL2Z6%2BmQ9xAiAWHrHY473hHAZU8Npbt2CvWQRmiRV92zFEuRcxJBMljyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8MwthjIgRtjGmQaKtwDmxNmSIMVtGrjdS1s0txeLNf0r4Jw45IlxZ0lAIp1MyWX2oc6VfvjjQYz3Le2ETpWW7XB91t87wN25V25I2gtnSk6MbpjalWtJ8cIHW82sF4C5GcmFBg3%2FMeU7oPJlh4dWT8UYMomaAoVRVKOblvyp%2FwL2iSf44T58D633OGkJA7AbKTZ1O0MXNNurd2NqT4FOGPDLFo7xrIsGdPiNW0tZBJntJwIPEfhnUBcwxSXZmC3XhnKjyUGDIp9KdLM%2FAi05nlMjirCcM1LpzSMEJlDM4EUo7MKLMbcMFwV7sepTLwVNywphEMWnjCSoqu8S8QI%2BWaCMp72Hu6snlORFgtu79t%2BkLKbInfLMPoH6G%2FVkH12V9894G50gR3FD4qhmMx1vB3RvAbSQNAfRtM92rWn1IBixXHbWRLIdghLbhxHRHj44R%2FLNLyNhrwuJ4iAPuqAqpoKYRqIeIg7GDaS%2B%2BHAKs9fWgcz2afAjGmap7HB5unXjvDzf7o11V9VVp0did9QMSepkPXSka23SQcnvNj5WXQUOzOWQgNwjGXDovplLwQLcxko6BfjBepttKdT6QRKVGbdKfVoxkmoaUytZ6k70SxKwGK1BZWqMUN39rdgRFvEN7Bhygj0JQRsW8ww2MfhwgY6pgHosjW6iU8VLiyIXHnEYZwVc9BjwWSwLfX4o1REQP6ZtzbVp2gI7PvFCOVWA7c4eeXOyrWXQ8oYDRr2tKiK5abtFuXRu7bAFwBw7zNEIea1cK0IcT%2Fx5HTDb87oSkGQsBVlN6mHy0UBqrAW2qt69WT9ToANMpKwCnS8wTwti35CMQlBVlpZwwypjraD%2BnXBEkm1TyBJNEbYGoCOX3aMK1Sqh750vJC2&X-Amz-Signature=9b17151a8167e3ea42dc3c068a7e00c8da180400122de7fc336bc3706aa1646d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHVCXJ4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAb5MgE5tjkJzbEFRFRbgGCffPbaR3IClvoL2Z6%2BmQ9xAiAWHrHY473hHAZU8Npbt2CvWQRmiRV92zFEuRcxJBMljyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8MwthjIgRtjGmQaKtwDmxNmSIMVtGrjdS1s0txeLNf0r4Jw45IlxZ0lAIp1MyWX2oc6VfvjjQYz3Le2ETpWW7XB91t87wN25V25I2gtnSk6MbpjalWtJ8cIHW82sF4C5GcmFBg3%2FMeU7oPJlh4dWT8UYMomaAoVRVKOblvyp%2FwL2iSf44T58D633OGkJA7AbKTZ1O0MXNNurd2NqT4FOGPDLFo7xrIsGdPiNW0tZBJntJwIPEfhnUBcwxSXZmC3XhnKjyUGDIp9KdLM%2FAi05nlMjirCcM1LpzSMEJlDM4EUo7MKLMbcMFwV7sepTLwVNywphEMWnjCSoqu8S8QI%2BWaCMp72Hu6snlORFgtu79t%2BkLKbInfLMPoH6G%2FVkH12V9894G50gR3FD4qhmMx1vB3RvAbSQNAfRtM92rWn1IBixXHbWRLIdghLbhxHRHj44R%2FLNLyNhrwuJ4iAPuqAqpoKYRqIeIg7GDaS%2B%2BHAKs9fWgcz2afAjGmap7HB5unXjvDzf7o11V9VVp0did9QMSepkPXSka23SQcnvNj5WXQUOzOWQgNwjGXDovplLwQLcxko6BfjBepttKdT6QRKVGbdKfVoxkmoaUytZ6k70SxKwGK1BZWqMUN39rdgRFvEN7Bhygj0JQRsW8ww2MfhwgY6pgHosjW6iU8VLiyIXHnEYZwVc9BjwWSwLfX4o1REQP6ZtzbVp2gI7PvFCOVWA7c4eeXOyrWXQ8oYDRr2tKiK5abtFuXRu7bAFwBw7zNEIea1cK0IcT%2Fx5HTDb87oSkGQsBVlN6mHy0UBqrAW2qt69WT9ToANMpKwCnS8wTwti35CMQlBVlpZwwypjraD%2BnXBEkm1TyBJNEbYGoCOX3aMK1Sqh750vJC2&X-Amz-Signature=85e17c8d80812e8e43dd8acd9786bfa49cd5da59843d47c32159dd883a0b81cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHVCXJ4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAb5MgE5tjkJzbEFRFRbgGCffPbaR3IClvoL2Z6%2BmQ9xAiAWHrHY473hHAZU8Npbt2CvWQRmiRV92zFEuRcxJBMljyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8MwthjIgRtjGmQaKtwDmxNmSIMVtGrjdS1s0txeLNf0r4Jw45IlxZ0lAIp1MyWX2oc6VfvjjQYz3Le2ETpWW7XB91t87wN25V25I2gtnSk6MbpjalWtJ8cIHW82sF4C5GcmFBg3%2FMeU7oPJlh4dWT8UYMomaAoVRVKOblvyp%2FwL2iSf44T58D633OGkJA7AbKTZ1O0MXNNurd2NqT4FOGPDLFo7xrIsGdPiNW0tZBJntJwIPEfhnUBcwxSXZmC3XhnKjyUGDIp9KdLM%2FAi05nlMjirCcM1LpzSMEJlDM4EUo7MKLMbcMFwV7sepTLwVNywphEMWnjCSoqu8S8QI%2BWaCMp72Hu6snlORFgtu79t%2BkLKbInfLMPoH6G%2FVkH12V9894G50gR3FD4qhmMx1vB3RvAbSQNAfRtM92rWn1IBixXHbWRLIdghLbhxHRHj44R%2FLNLyNhrwuJ4iAPuqAqpoKYRqIeIg7GDaS%2B%2BHAKs9fWgcz2afAjGmap7HB5unXjvDzf7o11V9VVp0did9QMSepkPXSka23SQcnvNj5WXQUOzOWQgNwjGXDovplLwQLcxko6BfjBepttKdT6QRKVGbdKfVoxkmoaUytZ6k70SxKwGK1BZWqMUN39rdgRFvEN7Bhygj0JQRsW8ww2MfhwgY6pgHosjW6iU8VLiyIXHnEYZwVc9BjwWSwLfX4o1REQP6ZtzbVp2gI7PvFCOVWA7c4eeXOyrWXQ8oYDRr2tKiK5abtFuXRu7bAFwBw7zNEIea1cK0IcT%2Fx5HTDb87oSkGQsBVlN6mHy0UBqrAW2qt69WT9ToANMpKwCnS8wTwti35CMQlBVlpZwwypjraD%2BnXBEkm1TyBJNEbYGoCOX3aMK1Sqh750vJC2&X-Amz-Signature=7bf6103f79aed3fe4321670b0a1cb2ab72728ce9b24e79a0bfd4f2f5a6147968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHVCXJ4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAb5MgE5tjkJzbEFRFRbgGCffPbaR3IClvoL2Z6%2BmQ9xAiAWHrHY473hHAZU8Npbt2CvWQRmiRV92zFEuRcxJBMljyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8MwthjIgRtjGmQaKtwDmxNmSIMVtGrjdS1s0txeLNf0r4Jw45IlxZ0lAIp1MyWX2oc6VfvjjQYz3Le2ETpWW7XB91t87wN25V25I2gtnSk6MbpjalWtJ8cIHW82sF4C5GcmFBg3%2FMeU7oPJlh4dWT8UYMomaAoVRVKOblvyp%2FwL2iSf44T58D633OGkJA7AbKTZ1O0MXNNurd2NqT4FOGPDLFo7xrIsGdPiNW0tZBJntJwIPEfhnUBcwxSXZmC3XhnKjyUGDIp9KdLM%2FAi05nlMjirCcM1LpzSMEJlDM4EUo7MKLMbcMFwV7sepTLwVNywphEMWnjCSoqu8S8QI%2BWaCMp72Hu6snlORFgtu79t%2BkLKbInfLMPoH6G%2FVkH12V9894G50gR3FD4qhmMx1vB3RvAbSQNAfRtM92rWn1IBixXHbWRLIdghLbhxHRHj44R%2FLNLyNhrwuJ4iAPuqAqpoKYRqIeIg7GDaS%2B%2BHAKs9fWgcz2afAjGmap7HB5unXjvDzf7o11V9VVp0did9QMSepkPXSka23SQcnvNj5WXQUOzOWQgNwjGXDovplLwQLcxko6BfjBepttKdT6QRKVGbdKfVoxkmoaUytZ6k70SxKwGK1BZWqMUN39rdgRFvEN7Bhygj0JQRsW8ww2MfhwgY6pgHosjW6iU8VLiyIXHnEYZwVc9BjwWSwLfX4o1REQP6ZtzbVp2gI7PvFCOVWA7c4eeXOyrWXQ8oYDRr2tKiK5abtFuXRu7bAFwBw7zNEIea1cK0IcT%2Fx5HTDb87oSkGQsBVlN6mHy0UBqrAW2qt69WT9ToANMpKwCnS8wTwti35CMQlBVlpZwwypjraD%2BnXBEkm1TyBJNEbYGoCOX3aMK1Sqh750vJC2&X-Amz-Signature=9c9ac6543b26019cf6ce0411f623c1753e7e86fe3a8b7a9a47790d78acbdf5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
