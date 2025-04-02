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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ATI2UZG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz2l0R6a1Mf6IrsQwf%2BULhvIHJuxaHKv%2FRSztwU7P0KAiBYwwKXBqhXan9H6NiVaJBTxeZ%2FsWlrqHPxsBgd%2F%2FTMMCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1RPQoVSc6kSLoDRKtwDTQzIHAUO1iiGvCgl593OGQZeml%2BD69cBpVaxwxB8cT88l2TJCk73RtSMupSN6dV4lsUDjuGycyZBHz73R5m%2Fz%2FC8r1x3ZBQvP6BSYiS2l6ChLok7k5LYJXmDQPoXm0o7%2BfmgOkFnedUydYQ91qxXUU2QGIjo2wAu%2F2P7zoBHODyEcVWE7eTUJocuYSYnGaOH9Bn5ILK8iv1%2BGRUuz5DAMEDQ9hp6pkzJo714ec7iWvrzQJpvtGRP6K404ZwUU3atVH%2BqyNEQa%2FYQYq0L5CFps9s9GJcHqWdvuyF7TCJk3A1J1vfJXbNqxEEDBs%2FkQhveYX%2FDWFtbnzTrMpp6AiQZXwQta27YExxhTwdiHRO11DDYWYn%2F2fcNPUNZTWTy%2BvP7UH7MR3WzOFZhub%2BUTN7rHIu6HT3NwgNz5I0iJQBFtCpzYhvLpjepZQCdOrRwc3f52BHJuTwMoRQ7gm5MoiyYlSxijPbz1AVO13jyJkdIaFx1Y9HAPsyvTTWeR3wzm7NTKOsNXSc8cmx8iMaQJoC2K7DOyDhL%2BMW2P%2FD5irEnxhxssmMIRzE0OteuumVgRvpltFCAta%2FUcKnHjTWobqwt%2FChCaCvHN0G0BBcvp7z1CT%2BAK6bj1Xmr1j1IQr8wx4qzvwY6pgFV7esa0KWkKtHW3ZO8YjR0MVsp1xUZh48bfnz0Ja1FeS5Ruk63MQYupVp7kKGIUz24fOL4V1yuYGYwRZozcYFuNDXJpNqjsqRLgYWut%2Bc0CJmJjO1dmfuMEPhiYKO2Q6417H6mv9zFMFBkCLP%2FLhcery%2FmWpabfkh3GP85ddLEG57JGweUjjYtvn%2BSwSz%2F%2FIzNi2NZJAAoDar3evOgLcDMfuuVhI9y&X-Amz-Signature=25583bfef9d9071322130ef13c242ebd823dce755a8568c4ba8dc9411e8f0bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ATI2UZG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz2l0R6a1Mf6IrsQwf%2BULhvIHJuxaHKv%2FRSztwU7P0KAiBYwwKXBqhXan9H6NiVaJBTxeZ%2FsWlrqHPxsBgd%2F%2FTMMCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1RPQoVSc6kSLoDRKtwDTQzIHAUO1iiGvCgl593OGQZeml%2BD69cBpVaxwxB8cT88l2TJCk73RtSMupSN6dV4lsUDjuGycyZBHz73R5m%2Fz%2FC8r1x3ZBQvP6BSYiS2l6ChLok7k5LYJXmDQPoXm0o7%2BfmgOkFnedUydYQ91qxXUU2QGIjo2wAu%2F2P7zoBHODyEcVWE7eTUJocuYSYnGaOH9Bn5ILK8iv1%2BGRUuz5DAMEDQ9hp6pkzJo714ec7iWvrzQJpvtGRP6K404ZwUU3atVH%2BqyNEQa%2FYQYq0L5CFps9s9GJcHqWdvuyF7TCJk3A1J1vfJXbNqxEEDBs%2FkQhveYX%2FDWFtbnzTrMpp6AiQZXwQta27YExxhTwdiHRO11DDYWYn%2F2fcNPUNZTWTy%2BvP7UH7MR3WzOFZhub%2BUTN7rHIu6HT3NwgNz5I0iJQBFtCpzYhvLpjepZQCdOrRwc3f52BHJuTwMoRQ7gm5MoiyYlSxijPbz1AVO13jyJkdIaFx1Y9HAPsyvTTWeR3wzm7NTKOsNXSc8cmx8iMaQJoC2K7DOyDhL%2BMW2P%2FD5irEnxhxssmMIRzE0OteuumVgRvpltFCAta%2FUcKnHjTWobqwt%2FChCaCvHN0G0BBcvp7z1CT%2BAK6bj1Xmr1j1IQr8wx4qzvwY6pgFV7esa0KWkKtHW3ZO8YjR0MVsp1xUZh48bfnz0Ja1FeS5Ruk63MQYupVp7kKGIUz24fOL4V1yuYGYwRZozcYFuNDXJpNqjsqRLgYWut%2Bc0CJmJjO1dmfuMEPhiYKO2Q6417H6mv9zFMFBkCLP%2FLhcery%2FmWpabfkh3GP85ddLEG57JGweUjjYtvn%2BSwSz%2F%2FIzNi2NZJAAoDar3evOgLcDMfuuVhI9y&X-Amz-Signature=d98ad4a359cffb8cdf90c058c4c6da8502b0ef51bfaba486c1350b1c1af70317&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ATI2UZG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz2l0R6a1Mf6IrsQwf%2BULhvIHJuxaHKv%2FRSztwU7P0KAiBYwwKXBqhXan9H6NiVaJBTxeZ%2FsWlrqHPxsBgd%2F%2FTMMCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1RPQoVSc6kSLoDRKtwDTQzIHAUO1iiGvCgl593OGQZeml%2BD69cBpVaxwxB8cT88l2TJCk73RtSMupSN6dV4lsUDjuGycyZBHz73R5m%2Fz%2FC8r1x3ZBQvP6BSYiS2l6ChLok7k5LYJXmDQPoXm0o7%2BfmgOkFnedUydYQ91qxXUU2QGIjo2wAu%2F2P7zoBHODyEcVWE7eTUJocuYSYnGaOH9Bn5ILK8iv1%2BGRUuz5DAMEDQ9hp6pkzJo714ec7iWvrzQJpvtGRP6K404ZwUU3atVH%2BqyNEQa%2FYQYq0L5CFps9s9GJcHqWdvuyF7TCJk3A1J1vfJXbNqxEEDBs%2FkQhveYX%2FDWFtbnzTrMpp6AiQZXwQta27YExxhTwdiHRO11DDYWYn%2F2fcNPUNZTWTy%2BvP7UH7MR3WzOFZhub%2BUTN7rHIu6HT3NwgNz5I0iJQBFtCpzYhvLpjepZQCdOrRwc3f52BHJuTwMoRQ7gm5MoiyYlSxijPbz1AVO13jyJkdIaFx1Y9HAPsyvTTWeR3wzm7NTKOsNXSc8cmx8iMaQJoC2K7DOyDhL%2BMW2P%2FD5irEnxhxssmMIRzE0OteuumVgRvpltFCAta%2FUcKnHjTWobqwt%2FChCaCvHN0G0BBcvp7z1CT%2BAK6bj1Xmr1j1IQr8wx4qzvwY6pgFV7esa0KWkKtHW3ZO8YjR0MVsp1xUZh48bfnz0Ja1FeS5Ruk63MQYupVp7kKGIUz24fOL4V1yuYGYwRZozcYFuNDXJpNqjsqRLgYWut%2Bc0CJmJjO1dmfuMEPhiYKO2Q6417H6mv9zFMFBkCLP%2FLhcery%2FmWpabfkh3GP85ddLEG57JGweUjjYtvn%2BSwSz%2F%2FIzNi2NZJAAoDar3evOgLcDMfuuVhI9y&X-Amz-Signature=52440186dbeab48f7324388714c77defd97987b77b11fd96f3bcef186fac7233&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ATI2UZG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz2l0R6a1Mf6IrsQwf%2BULhvIHJuxaHKv%2FRSztwU7P0KAiBYwwKXBqhXan9H6NiVaJBTxeZ%2FsWlrqHPxsBgd%2F%2FTMMCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1RPQoVSc6kSLoDRKtwDTQzIHAUO1iiGvCgl593OGQZeml%2BD69cBpVaxwxB8cT88l2TJCk73RtSMupSN6dV4lsUDjuGycyZBHz73R5m%2Fz%2FC8r1x3ZBQvP6BSYiS2l6ChLok7k5LYJXmDQPoXm0o7%2BfmgOkFnedUydYQ91qxXUU2QGIjo2wAu%2F2P7zoBHODyEcVWE7eTUJocuYSYnGaOH9Bn5ILK8iv1%2BGRUuz5DAMEDQ9hp6pkzJo714ec7iWvrzQJpvtGRP6K404ZwUU3atVH%2BqyNEQa%2FYQYq0L5CFps9s9GJcHqWdvuyF7TCJk3A1J1vfJXbNqxEEDBs%2FkQhveYX%2FDWFtbnzTrMpp6AiQZXwQta27YExxhTwdiHRO11DDYWYn%2F2fcNPUNZTWTy%2BvP7UH7MR3WzOFZhub%2BUTN7rHIu6HT3NwgNz5I0iJQBFtCpzYhvLpjepZQCdOrRwc3f52BHJuTwMoRQ7gm5MoiyYlSxijPbz1AVO13jyJkdIaFx1Y9HAPsyvTTWeR3wzm7NTKOsNXSc8cmx8iMaQJoC2K7DOyDhL%2BMW2P%2FD5irEnxhxssmMIRzE0OteuumVgRvpltFCAta%2FUcKnHjTWobqwt%2FChCaCvHN0G0BBcvp7z1CT%2BAK6bj1Xmr1j1IQr8wx4qzvwY6pgFV7esa0KWkKtHW3ZO8YjR0MVsp1xUZh48bfnz0Ja1FeS5Ruk63MQYupVp7kKGIUz24fOL4V1yuYGYwRZozcYFuNDXJpNqjsqRLgYWut%2Bc0CJmJjO1dmfuMEPhiYKO2Q6417H6mv9zFMFBkCLP%2FLhcery%2FmWpabfkh3GP85ddLEG57JGweUjjYtvn%2BSwSz%2F%2FIzNi2NZJAAoDar3evOgLcDMfuuVhI9y&X-Amz-Signature=29a76a4b6933ecc4f4adbc2b1f5c4a62c79d50649e218be71c512cd0b116bc64&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ATI2UZG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz2l0R6a1Mf6IrsQwf%2BULhvIHJuxaHKv%2FRSztwU7P0KAiBYwwKXBqhXan9H6NiVaJBTxeZ%2FsWlrqHPxsBgd%2F%2FTMMCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1RPQoVSc6kSLoDRKtwDTQzIHAUO1iiGvCgl593OGQZeml%2BD69cBpVaxwxB8cT88l2TJCk73RtSMupSN6dV4lsUDjuGycyZBHz73R5m%2Fz%2FC8r1x3ZBQvP6BSYiS2l6ChLok7k5LYJXmDQPoXm0o7%2BfmgOkFnedUydYQ91qxXUU2QGIjo2wAu%2F2P7zoBHODyEcVWE7eTUJocuYSYnGaOH9Bn5ILK8iv1%2BGRUuz5DAMEDQ9hp6pkzJo714ec7iWvrzQJpvtGRP6K404ZwUU3atVH%2BqyNEQa%2FYQYq0L5CFps9s9GJcHqWdvuyF7TCJk3A1J1vfJXbNqxEEDBs%2FkQhveYX%2FDWFtbnzTrMpp6AiQZXwQta27YExxhTwdiHRO11DDYWYn%2F2fcNPUNZTWTy%2BvP7UH7MR3WzOFZhub%2BUTN7rHIu6HT3NwgNz5I0iJQBFtCpzYhvLpjepZQCdOrRwc3f52BHJuTwMoRQ7gm5MoiyYlSxijPbz1AVO13jyJkdIaFx1Y9HAPsyvTTWeR3wzm7NTKOsNXSc8cmx8iMaQJoC2K7DOyDhL%2BMW2P%2FD5irEnxhxssmMIRzE0OteuumVgRvpltFCAta%2FUcKnHjTWobqwt%2FChCaCvHN0G0BBcvp7z1CT%2BAK6bj1Xmr1j1IQr8wx4qzvwY6pgFV7esa0KWkKtHW3ZO8YjR0MVsp1xUZh48bfnz0Ja1FeS5Ruk63MQYupVp7kKGIUz24fOL4V1yuYGYwRZozcYFuNDXJpNqjsqRLgYWut%2Bc0CJmJjO1dmfuMEPhiYKO2Q6417H6mv9zFMFBkCLP%2FLhcery%2FmWpabfkh3GP85ddLEG57JGweUjjYtvn%2BSwSz%2F%2FIzNi2NZJAAoDar3evOgLcDMfuuVhI9y&X-Amz-Signature=250a581390bde09c4749a52e717fee622328492c9fb70fa937d7d5186275cc40&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ATI2UZG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz2l0R6a1Mf6IrsQwf%2BULhvIHJuxaHKv%2FRSztwU7P0KAiBYwwKXBqhXan9H6NiVaJBTxeZ%2FsWlrqHPxsBgd%2F%2FTMMCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1RPQoVSc6kSLoDRKtwDTQzIHAUO1iiGvCgl593OGQZeml%2BD69cBpVaxwxB8cT88l2TJCk73RtSMupSN6dV4lsUDjuGycyZBHz73R5m%2Fz%2FC8r1x3ZBQvP6BSYiS2l6ChLok7k5LYJXmDQPoXm0o7%2BfmgOkFnedUydYQ91qxXUU2QGIjo2wAu%2F2P7zoBHODyEcVWE7eTUJocuYSYnGaOH9Bn5ILK8iv1%2BGRUuz5DAMEDQ9hp6pkzJo714ec7iWvrzQJpvtGRP6K404ZwUU3atVH%2BqyNEQa%2FYQYq0L5CFps9s9GJcHqWdvuyF7TCJk3A1J1vfJXbNqxEEDBs%2FkQhveYX%2FDWFtbnzTrMpp6AiQZXwQta27YExxhTwdiHRO11DDYWYn%2F2fcNPUNZTWTy%2BvP7UH7MR3WzOFZhub%2BUTN7rHIu6HT3NwgNz5I0iJQBFtCpzYhvLpjepZQCdOrRwc3f52BHJuTwMoRQ7gm5MoiyYlSxijPbz1AVO13jyJkdIaFx1Y9HAPsyvTTWeR3wzm7NTKOsNXSc8cmx8iMaQJoC2K7DOyDhL%2BMW2P%2FD5irEnxhxssmMIRzE0OteuumVgRvpltFCAta%2FUcKnHjTWobqwt%2FChCaCvHN0G0BBcvp7z1CT%2BAK6bj1Xmr1j1IQr8wx4qzvwY6pgFV7esa0KWkKtHW3ZO8YjR0MVsp1xUZh48bfnz0Ja1FeS5Ruk63MQYupVp7kKGIUz24fOL4V1yuYGYwRZozcYFuNDXJpNqjsqRLgYWut%2Bc0CJmJjO1dmfuMEPhiYKO2Q6417H6mv9zFMFBkCLP%2FLhcery%2FmWpabfkh3GP85ddLEG57JGweUjjYtvn%2BSwSz%2F%2FIzNi2NZJAAoDar3evOgLcDMfuuVhI9y&X-Amz-Signature=da1d5b5dc70831f02141d2c74dbe5d005773e30e2540ad2fd632a192bc027481&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ATI2UZG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGz2l0R6a1Mf6IrsQwf%2BULhvIHJuxaHKv%2FRSztwU7P0KAiBYwwKXBqhXan9H6NiVaJBTxeZ%2FsWlrqHPxsBgd%2F%2FTMMCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1RPQoVSc6kSLoDRKtwDTQzIHAUO1iiGvCgl593OGQZeml%2BD69cBpVaxwxB8cT88l2TJCk73RtSMupSN6dV4lsUDjuGycyZBHz73R5m%2Fz%2FC8r1x3ZBQvP6BSYiS2l6ChLok7k5LYJXmDQPoXm0o7%2BfmgOkFnedUydYQ91qxXUU2QGIjo2wAu%2F2P7zoBHODyEcVWE7eTUJocuYSYnGaOH9Bn5ILK8iv1%2BGRUuz5DAMEDQ9hp6pkzJo714ec7iWvrzQJpvtGRP6K404ZwUU3atVH%2BqyNEQa%2FYQYq0L5CFps9s9GJcHqWdvuyF7TCJk3A1J1vfJXbNqxEEDBs%2FkQhveYX%2FDWFtbnzTrMpp6AiQZXwQta27YExxhTwdiHRO11DDYWYn%2F2fcNPUNZTWTy%2BvP7UH7MR3WzOFZhub%2BUTN7rHIu6HT3NwgNz5I0iJQBFtCpzYhvLpjepZQCdOrRwc3f52BHJuTwMoRQ7gm5MoiyYlSxijPbz1AVO13jyJkdIaFx1Y9HAPsyvTTWeR3wzm7NTKOsNXSc8cmx8iMaQJoC2K7DOyDhL%2BMW2P%2FD5irEnxhxssmMIRzE0OteuumVgRvpltFCAta%2FUcKnHjTWobqwt%2FChCaCvHN0G0BBcvp7z1CT%2BAK6bj1Xmr1j1IQr8wx4qzvwY6pgFV7esa0KWkKtHW3ZO8YjR0MVsp1xUZh48bfnz0Ja1FeS5Ruk63MQYupVp7kKGIUz24fOL4V1yuYGYwRZozcYFuNDXJpNqjsqRLgYWut%2Bc0CJmJjO1dmfuMEPhiYKO2Q6417H6mv9zFMFBkCLP%2FLhcery%2FmWpabfkh3GP85ddLEG57JGweUjjYtvn%2BSwSz%2F%2FIzNi2NZJAAoDar3evOgLcDMfuuVhI9y&X-Amz-Signature=deb5efb2139a77efbb220c6d2b9ae7937cfb7a1dc2128e74996d4ba58ce45e37&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
