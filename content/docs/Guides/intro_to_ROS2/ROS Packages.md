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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657TRJDZF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aWRo%2BKstbq83FhbKyqvClv4llHbMFFT6hd4rHqTyqwIgAwQGGnfbOXce4Y5Xso5P68YoxKDIpKdrSGB2yyo%2Fvp0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI2%2B3pJ6atTzvSr%2F0CrcAyYoziawweBtHUVuQmAWe2%2FLWxuX03Otmpxl96ORYejQO%2FMOKGXlG4DPVx3tVVlbYL082oE1laDjp%2FBnW5TIVe%2BWKJN1vOygyjICdPIz0WJmT0W9euTrTH5i%2F8rK7b6f%2FVnu0VbUx7XYeftTTdynScr8yIDUJCSAhHvy1oFd4Yg%2BVr0Gl2CbHwASmCKci6qNH7CjpNb1SL0A%2FMX11UAEOn3Ae1u7FIC0GVMptcoslKMEnWGm65MxEX%2F%2FZPYtYetNueMKbN6uj0JdHOW2VpWsznMh%2FUEHmJF%2FPXNlrIFqa54V1E6%2F%2BC3Jgs3vHFzS6srCxGa%2FNp5NMBeA2MfLc1QyakoAdsKIDEZIvPn7EcCGZCwhWkt52cXy%2BYi9432YZc7LQxrZxuL2zrCyzx%2Bp9ea9TwwvnNRQ4VFcw9Q0e933Pd7JussAgX8ihaWLE6%2BZKWMzh5g8pQkB1fyennmXrmq2cdmT%2Bn2mVE23HO25oCp2zdjF7BkxNfr788y%2ByvCSU1r9tGBNEWNc1Tu6TGjaIfU0y440h1gluQj109YRSLRJTN1bixX73y7tTe8VDB%2BeM4F7u2psdZ4IpgBbIlXsHQ1Fb5RuwiRPuw%2BsAkAeXCjEzmml%2Bi%2F91BrUG8gxk9H%2FMJvzgr0GOqUBM2bSIOnmjEV5TtxJVvBUrhAX%2BWbLOGY2EfOsWs9cLypjsM3vDZVsF7jd4p5D86b%2Fd%2FJOptXzRVEmq7BGzVXkqAOyaV0G7k9aqWJa3lw9SngtZQnr7Wx5MCI6bHUOlQ0SfwquSY5X8LTXgpEXdZ0%2FbiIqSFV1VnQWazFe4DHPsKXYQOuhqVd66b29XhphPiwjVrPW8UQG%2BlsmFWL6hmy8X%2BVmBVn4&X-Amz-Signature=904ac30daf1086ecae3c5b28caa4f75c2b72ef03ecfc7e1326653c999d9a20b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657TRJDZF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aWRo%2BKstbq83FhbKyqvClv4llHbMFFT6hd4rHqTyqwIgAwQGGnfbOXce4Y5Xso5P68YoxKDIpKdrSGB2yyo%2Fvp0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI2%2B3pJ6atTzvSr%2F0CrcAyYoziawweBtHUVuQmAWe2%2FLWxuX03Otmpxl96ORYejQO%2FMOKGXlG4DPVx3tVVlbYL082oE1laDjp%2FBnW5TIVe%2BWKJN1vOygyjICdPIz0WJmT0W9euTrTH5i%2F8rK7b6f%2FVnu0VbUx7XYeftTTdynScr8yIDUJCSAhHvy1oFd4Yg%2BVr0Gl2CbHwASmCKci6qNH7CjpNb1SL0A%2FMX11UAEOn3Ae1u7FIC0GVMptcoslKMEnWGm65MxEX%2F%2FZPYtYetNueMKbN6uj0JdHOW2VpWsznMh%2FUEHmJF%2FPXNlrIFqa54V1E6%2F%2BC3Jgs3vHFzS6srCxGa%2FNp5NMBeA2MfLc1QyakoAdsKIDEZIvPn7EcCGZCwhWkt52cXy%2BYi9432YZc7LQxrZxuL2zrCyzx%2Bp9ea9TwwvnNRQ4VFcw9Q0e933Pd7JussAgX8ihaWLE6%2BZKWMzh5g8pQkB1fyennmXrmq2cdmT%2Bn2mVE23HO25oCp2zdjF7BkxNfr788y%2ByvCSU1r9tGBNEWNc1Tu6TGjaIfU0y440h1gluQj109YRSLRJTN1bixX73y7tTe8VDB%2BeM4F7u2psdZ4IpgBbIlXsHQ1Fb5RuwiRPuw%2BsAkAeXCjEzmml%2Bi%2F91BrUG8gxk9H%2FMJvzgr0GOqUBM2bSIOnmjEV5TtxJVvBUrhAX%2BWbLOGY2EfOsWs9cLypjsM3vDZVsF7jd4p5D86b%2Fd%2FJOptXzRVEmq7BGzVXkqAOyaV0G7k9aqWJa3lw9SngtZQnr7Wx5MCI6bHUOlQ0SfwquSY5X8LTXgpEXdZ0%2FbiIqSFV1VnQWazFe4DHPsKXYQOuhqVd66b29XhphPiwjVrPW8UQG%2BlsmFWL6hmy8X%2BVmBVn4&X-Amz-Signature=14faa9853fe8c60981cefbfd7d46a0816147d25352a7e288fa0fcadab7e7e81f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657TRJDZF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aWRo%2BKstbq83FhbKyqvClv4llHbMFFT6hd4rHqTyqwIgAwQGGnfbOXce4Y5Xso5P68YoxKDIpKdrSGB2yyo%2Fvp0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI2%2B3pJ6atTzvSr%2F0CrcAyYoziawweBtHUVuQmAWe2%2FLWxuX03Otmpxl96ORYejQO%2FMOKGXlG4DPVx3tVVlbYL082oE1laDjp%2FBnW5TIVe%2BWKJN1vOygyjICdPIz0WJmT0W9euTrTH5i%2F8rK7b6f%2FVnu0VbUx7XYeftTTdynScr8yIDUJCSAhHvy1oFd4Yg%2BVr0Gl2CbHwASmCKci6qNH7CjpNb1SL0A%2FMX11UAEOn3Ae1u7FIC0GVMptcoslKMEnWGm65MxEX%2F%2FZPYtYetNueMKbN6uj0JdHOW2VpWsznMh%2FUEHmJF%2FPXNlrIFqa54V1E6%2F%2BC3Jgs3vHFzS6srCxGa%2FNp5NMBeA2MfLc1QyakoAdsKIDEZIvPn7EcCGZCwhWkt52cXy%2BYi9432YZc7LQxrZxuL2zrCyzx%2Bp9ea9TwwvnNRQ4VFcw9Q0e933Pd7JussAgX8ihaWLE6%2BZKWMzh5g8pQkB1fyennmXrmq2cdmT%2Bn2mVE23HO25oCp2zdjF7BkxNfr788y%2ByvCSU1r9tGBNEWNc1Tu6TGjaIfU0y440h1gluQj109YRSLRJTN1bixX73y7tTe8VDB%2BeM4F7u2psdZ4IpgBbIlXsHQ1Fb5RuwiRPuw%2BsAkAeXCjEzmml%2Bi%2F91BrUG8gxk9H%2FMJvzgr0GOqUBM2bSIOnmjEV5TtxJVvBUrhAX%2BWbLOGY2EfOsWs9cLypjsM3vDZVsF7jd4p5D86b%2Fd%2FJOptXzRVEmq7BGzVXkqAOyaV0G7k9aqWJa3lw9SngtZQnr7Wx5MCI6bHUOlQ0SfwquSY5X8LTXgpEXdZ0%2FbiIqSFV1VnQWazFe4DHPsKXYQOuhqVd66b29XhphPiwjVrPW8UQG%2BlsmFWL6hmy8X%2BVmBVn4&X-Amz-Signature=448baed21eeca8e9455296bc8febf30b339f9b75b80e6212cc2d07337c9ed7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657TRJDZF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aWRo%2BKstbq83FhbKyqvClv4llHbMFFT6hd4rHqTyqwIgAwQGGnfbOXce4Y5Xso5P68YoxKDIpKdrSGB2yyo%2Fvp0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI2%2B3pJ6atTzvSr%2F0CrcAyYoziawweBtHUVuQmAWe2%2FLWxuX03Otmpxl96ORYejQO%2FMOKGXlG4DPVx3tVVlbYL082oE1laDjp%2FBnW5TIVe%2BWKJN1vOygyjICdPIz0WJmT0W9euTrTH5i%2F8rK7b6f%2FVnu0VbUx7XYeftTTdynScr8yIDUJCSAhHvy1oFd4Yg%2BVr0Gl2CbHwASmCKci6qNH7CjpNb1SL0A%2FMX11UAEOn3Ae1u7FIC0GVMptcoslKMEnWGm65MxEX%2F%2FZPYtYetNueMKbN6uj0JdHOW2VpWsznMh%2FUEHmJF%2FPXNlrIFqa54V1E6%2F%2BC3Jgs3vHFzS6srCxGa%2FNp5NMBeA2MfLc1QyakoAdsKIDEZIvPn7EcCGZCwhWkt52cXy%2BYi9432YZc7LQxrZxuL2zrCyzx%2Bp9ea9TwwvnNRQ4VFcw9Q0e933Pd7JussAgX8ihaWLE6%2BZKWMzh5g8pQkB1fyennmXrmq2cdmT%2Bn2mVE23HO25oCp2zdjF7BkxNfr788y%2ByvCSU1r9tGBNEWNc1Tu6TGjaIfU0y440h1gluQj109YRSLRJTN1bixX73y7tTe8VDB%2BeM4F7u2psdZ4IpgBbIlXsHQ1Fb5RuwiRPuw%2BsAkAeXCjEzmml%2Bi%2F91BrUG8gxk9H%2FMJvzgr0GOqUBM2bSIOnmjEV5TtxJVvBUrhAX%2BWbLOGY2EfOsWs9cLypjsM3vDZVsF7jd4p5D86b%2Fd%2FJOptXzRVEmq7BGzVXkqAOyaV0G7k9aqWJa3lw9SngtZQnr7Wx5MCI6bHUOlQ0SfwquSY5X8LTXgpEXdZ0%2FbiIqSFV1VnQWazFe4DHPsKXYQOuhqVd66b29XhphPiwjVrPW8UQG%2BlsmFWL6hmy8X%2BVmBVn4&X-Amz-Signature=b821a0618e6398700d3de089a8b995e68ae2c25cd46fa3c9e6071f8cc30aea39&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657TRJDZF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aWRo%2BKstbq83FhbKyqvClv4llHbMFFT6hd4rHqTyqwIgAwQGGnfbOXce4Y5Xso5P68YoxKDIpKdrSGB2yyo%2Fvp0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI2%2B3pJ6atTzvSr%2F0CrcAyYoziawweBtHUVuQmAWe2%2FLWxuX03Otmpxl96ORYejQO%2FMOKGXlG4DPVx3tVVlbYL082oE1laDjp%2FBnW5TIVe%2BWKJN1vOygyjICdPIz0WJmT0W9euTrTH5i%2F8rK7b6f%2FVnu0VbUx7XYeftTTdynScr8yIDUJCSAhHvy1oFd4Yg%2BVr0Gl2CbHwASmCKci6qNH7CjpNb1SL0A%2FMX11UAEOn3Ae1u7FIC0GVMptcoslKMEnWGm65MxEX%2F%2FZPYtYetNueMKbN6uj0JdHOW2VpWsznMh%2FUEHmJF%2FPXNlrIFqa54V1E6%2F%2BC3Jgs3vHFzS6srCxGa%2FNp5NMBeA2MfLc1QyakoAdsKIDEZIvPn7EcCGZCwhWkt52cXy%2BYi9432YZc7LQxrZxuL2zrCyzx%2Bp9ea9TwwvnNRQ4VFcw9Q0e933Pd7JussAgX8ihaWLE6%2BZKWMzh5g8pQkB1fyennmXrmq2cdmT%2Bn2mVE23HO25oCp2zdjF7BkxNfr788y%2ByvCSU1r9tGBNEWNc1Tu6TGjaIfU0y440h1gluQj109YRSLRJTN1bixX73y7tTe8VDB%2BeM4F7u2psdZ4IpgBbIlXsHQ1Fb5RuwiRPuw%2BsAkAeXCjEzmml%2Bi%2F91BrUG8gxk9H%2FMJvzgr0GOqUBM2bSIOnmjEV5TtxJVvBUrhAX%2BWbLOGY2EfOsWs9cLypjsM3vDZVsF7jd4p5D86b%2Fd%2FJOptXzRVEmq7BGzVXkqAOyaV0G7k9aqWJa3lw9SngtZQnr7Wx5MCI6bHUOlQ0SfwquSY5X8LTXgpEXdZ0%2FbiIqSFV1VnQWazFe4DHPsKXYQOuhqVd66b29XhphPiwjVrPW8UQG%2BlsmFWL6hmy8X%2BVmBVn4&X-Amz-Signature=8af6a657f24a9504d7f7757f9ef1754a2034f99de01efc7896bee84c6faf14c2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657TRJDZF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aWRo%2BKstbq83FhbKyqvClv4llHbMFFT6hd4rHqTyqwIgAwQGGnfbOXce4Y5Xso5P68YoxKDIpKdrSGB2yyo%2Fvp0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI2%2B3pJ6atTzvSr%2F0CrcAyYoziawweBtHUVuQmAWe2%2FLWxuX03Otmpxl96ORYejQO%2FMOKGXlG4DPVx3tVVlbYL082oE1laDjp%2FBnW5TIVe%2BWKJN1vOygyjICdPIz0WJmT0W9euTrTH5i%2F8rK7b6f%2FVnu0VbUx7XYeftTTdynScr8yIDUJCSAhHvy1oFd4Yg%2BVr0Gl2CbHwASmCKci6qNH7CjpNb1SL0A%2FMX11UAEOn3Ae1u7FIC0GVMptcoslKMEnWGm65MxEX%2F%2FZPYtYetNueMKbN6uj0JdHOW2VpWsznMh%2FUEHmJF%2FPXNlrIFqa54V1E6%2F%2BC3Jgs3vHFzS6srCxGa%2FNp5NMBeA2MfLc1QyakoAdsKIDEZIvPn7EcCGZCwhWkt52cXy%2BYi9432YZc7LQxrZxuL2zrCyzx%2Bp9ea9TwwvnNRQ4VFcw9Q0e933Pd7JussAgX8ihaWLE6%2BZKWMzh5g8pQkB1fyennmXrmq2cdmT%2Bn2mVE23HO25oCp2zdjF7BkxNfr788y%2ByvCSU1r9tGBNEWNc1Tu6TGjaIfU0y440h1gluQj109YRSLRJTN1bixX73y7tTe8VDB%2BeM4F7u2psdZ4IpgBbIlXsHQ1Fb5RuwiRPuw%2BsAkAeXCjEzmml%2Bi%2F91BrUG8gxk9H%2FMJvzgr0GOqUBM2bSIOnmjEV5TtxJVvBUrhAX%2BWbLOGY2EfOsWs9cLypjsM3vDZVsF7jd4p5D86b%2Fd%2FJOptXzRVEmq7BGzVXkqAOyaV0G7k9aqWJa3lw9SngtZQnr7Wx5MCI6bHUOlQ0SfwquSY5X8LTXgpEXdZ0%2FbiIqSFV1VnQWazFe4DHPsKXYQOuhqVd66b29XhphPiwjVrPW8UQG%2BlsmFWL6hmy8X%2BVmBVn4&X-Amz-Signature=f4b0685a831b227a209e11232e79a894add35295830f92cd1db2c79a7998e96c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657TRJDZF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aWRo%2BKstbq83FhbKyqvClv4llHbMFFT6hd4rHqTyqwIgAwQGGnfbOXce4Y5Xso5P68YoxKDIpKdrSGB2yyo%2Fvp0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDI2%2B3pJ6atTzvSr%2F0CrcAyYoziawweBtHUVuQmAWe2%2FLWxuX03Otmpxl96ORYejQO%2FMOKGXlG4DPVx3tVVlbYL082oE1laDjp%2FBnW5TIVe%2BWKJN1vOygyjICdPIz0WJmT0W9euTrTH5i%2F8rK7b6f%2FVnu0VbUx7XYeftTTdynScr8yIDUJCSAhHvy1oFd4Yg%2BVr0Gl2CbHwASmCKci6qNH7CjpNb1SL0A%2FMX11UAEOn3Ae1u7FIC0GVMptcoslKMEnWGm65MxEX%2F%2FZPYtYetNueMKbN6uj0JdHOW2VpWsznMh%2FUEHmJF%2FPXNlrIFqa54V1E6%2F%2BC3Jgs3vHFzS6srCxGa%2FNp5NMBeA2MfLc1QyakoAdsKIDEZIvPn7EcCGZCwhWkt52cXy%2BYi9432YZc7LQxrZxuL2zrCyzx%2Bp9ea9TwwvnNRQ4VFcw9Q0e933Pd7JussAgX8ihaWLE6%2BZKWMzh5g8pQkB1fyennmXrmq2cdmT%2Bn2mVE23HO25oCp2zdjF7BkxNfr788y%2ByvCSU1r9tGBNEWNc1Tu6TGjaIfU0y440h1gluQj109YRSLRJTN1bixX73y7tTe8VDB%2BeM4F7u2psdZ4IpgBbIlXsHQ1Fb5RuwiRPuw%2BsAkAeXCjEzmml%2Bi%2F91BrUG8gxk9H%2FMJvzgr0GOqUBM2bSIOnmjEV5TtxJVvBUrhAX%2BWbLOGY2EfOsWs9cLypjsM3vDZVsF7jd4p5D86b%2Fd%2FJOptXzRVEmq7BGzVXkqAOyaV0G7k9aqWJa3lw9SngtZQnr7Wx5MCI6bHUOlQ0SfwquSY5X8LTXgpEXdZ0%2FbiIqSFV1VnQWazFe4DHPsKXYQOuhqVd66b29XhphPiwjVrPW8UQG%2BlsmFWL6hmy8X%2BVmBVn4&X-Amz-Signature=c34be978cf7ab8296a1fe5f130eab5a9b8f296998124fef5895a239d930d93fc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
