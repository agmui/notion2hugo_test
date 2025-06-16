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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3IGO6E%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDBkaUYR4tPivnsEWES%2Fcv7ABa3LxXc4nGZHkxeCFIu%2FAiAe%2Bb1OXEsjqRKm0J1PCLFcajwQdlvs8Be2JvUrNmza9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoOumOW7fHwS4lnjHKtwDcQCpachEF0RgS0Qf4KMTGpkfCwA%2FNyR9u4cV2WUqoDBnAM3Z1io1nUHzHp4dzBfh4qqy97wY9RGrdjqZTjc9epVLRfV4rAanlbNgR6gcZ9SXHw2yqm5rEK0KqJJs040NX2xquU%2FPeTnPMH84ZiR6XvcxtDtCoXjxPpd0Jjm5F6cNzk0iNekOPcQk049JE0WOovi2Kn03O3E0IB1pY2ej%2FxzQgvFwUI9dSJ%2F1eLmAzC2Cn0Wk4WEBYHAQhFIDoKAPWv2c%2FCcFQMzGqzGISrHL97D7bpylg44sEaHAXUAyBDJMb%2BRsA39rlV%2Fb4HmPOpvRViMWADs%2BmBfh16MeBHxJ1L%2Fc1bJ4mkENzLpA7wN6f1Xd0Yw5R7OosKCDN5wN2Bgs6g5Y60MfZdkrX4459F8%2FW48q1Ki%2BOx0H0hnqh3km3pDmslAymX4cM6Q6c4EbHmAaRtpq9mVlN85pKTWWxPhSAgol%2B78TNVsnix0bRryHqAeC2vJw44cgKn0zl7KwS7ew7ved2vPtqbrumVd%2Fll6LD%2F2SczCnXMEhMaKfqi30vjMXOHEqIxbEq2xvthUNWMcRHVXiS36qi7OE22ioDo28KunEIKWxKvxzciEVocyhqmtI8h5hftrlGoUij78wqY7CwgY6pgEW0SYPXLHyAN281G9GZ3f2T5vhkR1xskPsrC0DNv7r3MmpbbwdbioQIPY%2BXGx0eW1jtgezCdZUqY6LNcQIXN8XwLjXUH6BZJGzeCresGo5P5njIi8hyMnvXKj%2BwQJ5FuI2XLVK85zOWUXot52l927o5j61TvJ4fWQRQAsSgi6324ZRMZfKG%2FYfsurP57Y3EeMK1BJ1sloax9JO%2FpZGJ24P56NdyQjD&X-Amz-Signature=43fa34bb519d23f4c832a153e5b3d756341c22aaf3840ae97e5da0d41267b8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3IGO6E%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDBkaUYR4tPivnsEWES%2Fcv7ABa3LxXc4nGZHkxeCFIu%2FAiAe%2Bb1OXEsjqRKm0J1PCLFcajwQdlvs8Be2JvUrNmza9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoOumOW7fHwS4lnjHKtwDcQCpachEF0RgS0Qf4KMTGpkfCwA%2FNyR9u4cV2WUqoDBnAM3Z1io1nUHzHp4dzBfh4qqy97wY9RGrdjqZTjc9epVLRfV4rAanlbNgR6gcZ9SXHw2yqm5rEK0KqJJs040NX2xquU%2FPeTnPMH84ZiR6XvcxtDtCoXjxPpd0Jjm5F6cNzk0iNekOPcQk049JE0WOovi2Kn03O3E0IB1pY2ej%2FxzQgvFwUI9dSJ%2F1eLmAzC2Cn0Wk4WEBYHAQhFIDoKAPWv2c%2FCcFQMzGqzGISrHL97D7bpylg44sEaHAXUAyBDJMb%2BRsA39rlV%2Fb4HmPOpvRViMWADs%2BmBfh16MeBHxJ1L%2Fc1bJ4mkENzLpA7wN6f1Xd0Yw5R7OosKCDN5wN2Bgs6g5Y60MfZdkrX4459F8%2FW48q1Ki%2BOx0H0hnqh3km3pDmslAymX4cM6Q6c4EbHmAaRtpq9mVlN85pKTWWxPhSAgol%2B78TNVsnix0bRryHqAeC2vJw44cgKn0zl7KwS7ew7ved2vPtqbrumVd%2Fll6LD%2F2SczCnXMEhMaKfqi30vjMXOHEqIxbEq2xvthUNWMcRHVXiS36qi7OE22ioDo28KunEIKWxKvxzciEVocyhqmtI8h5hftrlGoUij78wqY7CwgY6pgEW0SYPXLHyAN281G9GZ3f2T5vhkR1xskPsrC0DNv7r3MmpbbwdbioQIPY%2BXGx0eW1jtgezCdZUqY6LNcQIXN8XwLjXUH6BZJGzeCresGo5P5njIi8hyMnvXKj%2BwQJ5FuI2XLVK85zOWUXot52l927o5j61TvJ4fWQRQAsSgi6324ZRMZfKG%2FYfsurP57Y3EeMK1BJ1sloax9JO%2FpZGJ24P56NdyQjD&X-Amz-Signature=4b901f11a868e4824ea699c4de084287b09d2aac0ceb1ae66c8ab9160db45c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3IGO6E%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDBkaUYR4tPivnsEWES%2Fcv7ABa3LxXc4nGZHkxeCFIu%2FAiAe%2Bb1OXEsjqRKm0J1PCLFcajwQdlvs8Be2JvUrNmza9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoOumOW7fHwS4lnjHKtwDcQCpachEF0RgS0Qf4KMTGpkfCwA%2FNyR9u4cV2WUqoDBnAM3Z1io1nUHzHp4dzBfh4qqy97wY9RGrdjqZTjc9epVLRfV4rAanlbNgR6gcZ9SXHw2yqm5rEK0KqJJs040NX2xquU%2FPeTnPMH84ZiR6XvcxtDtCoXjxPpd0Jjm5F6cNzk0iNekOPcQk049JE0WOovi2Kn03O3E0IB1pY2ej%2FxzQgvFwUI9dSJ%2F1eLmAzC2Cn0Wk4WEBYHAQhFIDoKAPWv2c%2FCcFQMzGqzGISrHL97D7bpylg44sEaHAXUAyBDJMb%2BRsA39rlV%2Fb4HmPOpvRViMWADs%2BmBfh16MeBHxJ1L%2Fc1bJ4mkENzLpA7wN6f1Xd0Yw5R7OosKCDN5wN2Bgs6g5Y60MfZdkrX4459F8%2FW48q1Ki%2BOx0H0hnqh3km3pDmslAymX4cM6Q6c4EbHmAaRtpq9mVlN85pKTWWxPhSAgol%2B78TNVsnix0bRryHqAeC2vJw44cgKn0zl7KwS7ew7ved2vPtqbrumVd%2Fll6LD%2F2SczCnXMEhMaKfqi30vjMXOHEqIxbEq2xvthUNWMcRHVXiS36qi7OE22ioDo28KunEIKWxKvxzciEVocyhqmtI8h5hftrlGoUij78wqY7CwgY6pgEW0SYPXLHyAN281G9GZ3f2T5vhkR1xskPsrC0DNv7r3MmpbbwdbioQIPY%2BXGx0eW1jtgezCdZUqY6LNcQIXN8XwLjXUH6BZJGzeCresGo5P5njIi8hyMnvXKj%2BwQJ5FuI2XLVK85zOWUXot52l927o5j61TvJ4fWQRQAsSgi6324ZRMZfKG%2FYfsurP57Y3EeMK1BJ1sloax9JO%2FpZGJ24P56NdyQjD&X-Amz-Signature=54562b4293fd2e7c994c6d98a81ccc072b230e4f333dedaeae67698529a92dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3IGO6E%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDBkaUYR4tPivnsEWES%2Fcv7ABa3LxXc4nGZHkxeCFIu%2FAiAe%2Bb1OXEsjqRKm0J1PCLFcajwQdlvs8Be2JvUrNmza9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoOumOW7fHwS4lnjHKtwDcQCpachEF0RgS0Qf4KMTGpkfCwA%2FNyR9u4cV2WUqoDBnAM3Z1io1nUHzHp4dzBfh4qqy97wY9RGrdjqZTjc9epVLRfV4rAanlbNgR6gcZ9SXHw2yqm5rEK0KqJJs040NX2xquU%2FPeTnPMH84ZiR6XvcxtDtCoXjxPpd0Jjm5F6cNzk0iNekOPcQk049JE0WOovi2Kn03O3E0IB1pY2ej%2FxzQgvFwUI9dSJ%2F1eLmAzC2Cn0Wk4WEBYHAQhFIDoKAPWv2c%2FCcFQMzGqzGISrHL97D7bpylg44sEaHAXUAyBDJMb%2BRsA39rlV%2Fb4HmPOpvRViMWADs%2BmBfh16MeBHxJ1L%2Fc1bJ4mkENzLpA7wN6f1Xd0Yw5R7OosKCDN5wN2Bgs6g5Y60MfZdkrX4459F8%2FW48q1Ki%2BOx0H0hnqh3km3pDmslAymX4cM6Q6c4EbHmAaRtpq9mVlN85pKTWWxPhSAgol%2B78TNVsnix0bRryHqAeC2vJw44cgKn0zl7KwS7ew7ved2vPtqbrumVd%2Fll6LD%2F2SczCnXMEhMaKfqi30vjMXOHEqIxbEq2xvthUNWMcRHVXiS36qi7OE22ioDo28KunEIKWxKvxzciEVocyhqmtI8h5hftrlGoUij78wqY7CwgY6pgEW0SYPXLHyAN281G9GZ3f2T5vhkR1xskPsrC0DNv7r3MmpbbwdbioQIPY%2BXGx0eW1jtgezCdZUqY6LNcQIXN8XwLjXUH6BZJGzeCresGo5P5njIi8hyMnvXKj%2BwQJ5FuI2XLVK85zOWUXot52l927o5j61TvJ4fWQRQAsSgi6324ZRMZfKG%2FYfsurP57Y3EeMK1BJ1sloax9JO%2FpZGJ24P56NdyQjD&X-Amz-Signature=a152fbd5cd8a731fe8528567b2a9083715de3a3a10ee9988006db1bba9c3a8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3IGO6E%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDBkaUYR4tPivnsEWES%2Fcv7ABa3LxXc4nGZHkxeCFIu%2FAiAe%2Bb1OXEsjqRKm0J1PCLFcajwQdlvs8Be2JvUrNmza9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoOumOW7fHwS4lnjHKtwDcQCpachEF0RgS0Qf4KMTGpkfCwA%2FNyR9u4cV2WUqoDBnAM3Z1io1nUHzHp4dzBfh4qqy97wY9RGrdjqZTjc9epVLRfV4rAanlbNgR6gcZ9SXHw2yqm5rEK0KqJJs040NX2xquU%2FPeTnPMH84ZiR6XvcxtDtCoXjxPpd0Jjm5F6cNzk0iNekOPcQk049JE0WOovi2Kn03O3E0IB1pY2ej%2FxzQgvFwUI9dSJ%2F1eLmAzC2Cn0Wk4WEBYHAQhFIDoKAPWv2c%2FCcFQMzGqzGISrHL97D7bpylg44sEaHAXUAyBDJMb%2BRsA39rlV%2Fb4HmPOpvRViMWADs%2BmBfh16MeBHxJ1L%2Fc1bJ4mkENzLpA7wN6f1Xd0Yw5R7OosKCDN5wN2Bgs6g5Y60MfZdkrX4459F8%2FW48q1Ki%2BOx0H0hnqh3km3pDmslAymX4cM6Q6c4EbHmAaRtpq9mVlN85pKTWWxPhSAgol%2B78TNVsnix0bRryHqAeC2vJw44cgKn0zl7KwS7ew7ved2vPtqbrumVd%2Fll6LD%2F2SczCnXMEhMaKfqi30vjMXOHEqIxbEq2xvthUNWMcRHVXiS36qi7OE22ioDo28KunEIKWxKvxzciEVocyhqmtI8h5hftrlGoUij78wqY7CwgY6pgEW0SYPXLHyAN281G9GZ3f2T5vhkR1xskPsrC0DNv7r3MmpbbwdbioQIPY%2BXGx0eW1jtgezCdZUqY6LNcQIXN8XwLjXUH6BZJGzeCresGo5P5njIi8hyMnvXKj%2BwQJ5FuI2XLVK85zOWUXot52l927o5j61TvJ4fWQRQAsSgi6324ZRMZfKG%2FYfsurP57Y3EeMK1BJ1sloax9JO%2FpZGJ24P56NdyQjD&X-Amz-Signature=20c2a74e9d3bf7cef6dfc4e81c0e9a4a9d6924617daadf1176a25bf359d20f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3IGO6E%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDBkaUYR4tPivnsEWES%2Fcv7ABa3LxXc4nGZHkxeCFIu%2FAiAe%2Bb1OXEsjqRKm0J1PCLFcajwQdlvs8Be2JvUrNmza9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoOumOW7fHwS4lnjHKtwDcQCpachEF0RgS0Qf4KMTGpkfCwA%2FNyR9u4cV2WUqoDBnAM3Z1io1nUHzHp4dzBfh4qqy97wY9RGrdjqZTjc9epVLRfV4rAanlbNgR6gcZ9SXHw2yqm5rEK0KqJJs040NX2xquU%2FPeTnPMH84ZiR6XvcxtDtCoXjxPpd0Jjm5F6cNzk0iNekOPcQk049JE0WOovi2Kn03O3E0IB1pY2ej%2FxzQgvFwUI9dSJ%2F1eLmAzC2Cn0Wk4WEBYHAQhFIDoKAPWv2c%2FCcFQMzGqzGISrHL97D7bpylg44sEaHAXUAyBDJMb%2BRsA39rlV%2Fb4HmPOpvRViMWADs%2BmBfh16MeBHxJ1L%2Fc1bJ4mkENzLpA7wN6f1Xd0Yw5R7OosKCDN5wN2Bgs6g5Y60MfZdkrX4459F8%2FW48q1Ki%2BOx0H0hnqh3km3pDmslAymX4cM6Q6c4EbHmAaRtpq9mVlN85pKTWWxPhSAgol%2B78TNVsnix0bRryHqAeC2vJw44cgKn0zl7KwS7ew7ved2vPtqbrumVd%2Fll6LD%2F2SczCnXMEhMaKfqi30vjMXOHEqIxbEq2xvthUNWMcRHVXiS36qi7OE22ioDo28KunEIKWxKvxzciEVocyhqmtI8h5hftrlGoUij78wqY7CwgY6pgEW0SYPXLHyAN281G9GZ3f2T5vhkR1xskPsrC0DNv7r3MmpbbwdbioQIPY%2BXGx0eW1jtgezCdZUqY6LNcQIXN8XwLjXUH6BZJGzeCresGo5P5njIi8hyMnvXKj%2BwQJ5FuI2XLVK85zOWUXot52l927o5j61TvJ4fWQRQAsSgi6324ZRMZfKG%2FYfsurP57Y3EeMK1BJ1sloax9JO%2FpZGJ24P56NdyQjD&X-Amz-Signature=2e6cc1215d0f1fd627efd17a6f212c79e009238e9e96f997b6313c34f3e1de04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY3IGO6E%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDBkaUYR4tPivnsEWES%2Fcv7ABa3LxXc4nGZHkxeCFIu%2FAiAe%2Bb1OXEsjqRKm0J1PCLFcajwQdlvs8Be2JvUrNmza9Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMoOumOW7fHwS4lnjHKtwDcQCpachEF0RgS0Qf4KMTGpkfCwA%2FNyR9u4cV2WUqoDBnAM3Z1io1nUHzHp4dzBfh4qqy97wY9RGrdjqZTjc9epVLRfV4rAanlbNgR6gcZ9SXHw2yqm5rEK0KqJJs040NX2xquU%2FPeTnPMH84ZiR6XvcxtDtCoXjxPpd0Jjm5F6cNzk0iNekOPcQk049JE0WOovi2Kn03O3E0IB1pY2ej%2FxzQgvFwUI9dSJ%2F1eLmAzC2Cn0Wk4WEBYHAQhFIDoKAPWv2c%2FCcFQMzGqzGISrHL97D7bpylg44sEaHAXUAyBDJMb%2BRsA39rlV%2Fb4HmPOpvRViMWADs%2BmBfh16MeBHxJ1L%2Fc1bJ4mkENzLpA7wN6f1Xd0Yw5R7OosKCDN5wN2Bgs6g5Y60MfZdkrX4459F8%2FW48q1Ki%2BOx0H0hnqh3km3pDmslAymX4cM6Q6c4EbHmAaRtpq9mVlN85pKTWWxPhSAgol%2B78TNVsnix0bRryHqAeC2vJw44cgKn0zl7KwS7ew7ved2vPtqbrumVd%2Fll6LD%2F2SczCnXMEhMaKfqi30vjMXOHEqIxbEq2xvthUNWMcRHVXiS36qi7OE22ioDo28KunEIKWxKvxzciEVocyhqmtI8h5hftrlGoUij78wqY7CwgY6pgEW0SYPXLHyAN281G9GZ3f2T5vhkR1xskPsrC0DNv7r3MmpbbwdbioQIPY%2BXGx0eW1jtgezCdZUqY6LNcQIXN8XwLjXUH6BZJGzeCresGo5P5njIi8hyMnvXKj%2BwQJ5FuI2XLVK85zOWUXot52l927o5j61TvJ4fWQRQAsSgi6324ZRMZfKG%2FYfsurP57Y3EeMK1BJ1sloax9JO%2FpZGJ24P56NdyQjD&X-Amz-Signature=cd35b937bb852d9d4b9a1f71c3558425282863ffdf8081439e0aa9006db01656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
