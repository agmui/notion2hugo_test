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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUYJOWB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEQfhcxyi0F0m0obwzTFMgJ4w8PydDE1dknlSEouoejoAiBT%2ByhQU4YrfhFPdoW6szuPKrCCNMhnMmbPPgBKjSYiSCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbYTWYwsSdywmk1eKtwDzV8c%2FLC3YNR7IrCgoGZDiv4lLbop4i251w2Yb4pA%2Bbw0OYZLHfXWisL3x6%2Fxj2vhec9iceNW0tiu12nkU1lgHya9JaKNQzMJSvQqaWGKH3i8eF6WeSkYrtlH2y3P0s2MyQZY%2FN9abtjYsfFYkxXO89zjUNzru4jhU2EDVsqi%2B5vCie%2BkcFBgmREJbFKSrzBsITw2cCEXBVTCmEw9Zwygu8D3VCcMRKbQaSOYXzrfMsaq8c%2Fi5D2t%2FNcNwIFGJEDresra3wOk%2FGZCzPiXvlBGw7%2FnyhHRlTBYOHIda3RhThFZKirGZ3bUqYfm2Qe%2FYiYZ%2BeplLIKyKUofda%2FhSKB92Z5ZEXHxrEkBh%2FeWZPVBNl4lrgE1HGWNA%2BZ8Q6CxNKVjuymWqf%2BNTtve9a92BsntcMWczZgL%2BDs2kOUa9EzaoMYJ1K8E8cNfKg2zXVynd0%2FSCr6V57ha4%2FUSxqUgiq0GPs2MCw92maZLmv5T9iUTiE6qPEnHIO981EDofxlznDd1mWXlWa6jsuVa21vQ%2F4dkEvmXw9ARwA34D2nhi8%2FFCKaBKeA8YeVLRJDa1BRFeq%2BQd%2BNVkKgw1iHnZpWUgEHydmBv15inbMCV1cXACk43w0cbGzgQl8ys0wZG6Nsw29quwgY6pgHxZ7ohU5dzeHWXegeAfTPh3nyds2aNLZboKo9nh6r%2FKYd45%2FOAffW1w5riIPCQCJb6RlSZqaneUVHqz01Me9MaiyUJB7IczBpul4ZYDMoc5DY2Oa8UEZM47fcldDGBfluSJapefDsFdyheJK4WDe%2F%2F7IJKrmxJiBfp6emC9joM3XsI8jhvT1%2Fu%2B%2FrTSpiVNaXWrXgNxLM3ngwVuu6ZJL02GYIL5ACY&X-Amz-Signature=689ad0ec8bd160f53086e3a24f2dfc1b9e789f19bec3705ce4fef1b3d90ace0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUYJOWB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEQfhcxyi0F0m0obwzTFMgJ4w8PydDE1dknlSEouoejoAiBT%2ByhQU4YrfhFPdoW6szuPKrCCNMhnMmbPPgBKjSYiSCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbYTWYwsSdywmk1eKtwDzV8c%2FLC3YNR7IrCgoGZDiv4lLbop4i251w2Yb4pA%2Bbw0OYZLHfXWisL3x6%2Fxj2vhec9iceNW0tiu12nkU1lgHya9JaKNQzMJSvQqaWGKH3i8eF6WeSkYrtlH2y3P0s2MyQZY%2FN9abtjYsfFYkxXO89zjUNzru4jhU2EDVsqi%2B5vCie%2BkcFBgmREJbFKSrzBsITw2cCEXBVTCmEw9Zwygu8D3VCcMRKbQaSOYXzrfMsaq8c%2Fi5D2t%2FNcNwIFGJEDresra3wOk%2FGZCzPiXvlBGw7%2FnyhHRlTBYOHIda3RhThFZKirGZ3bUqYfm2Qe%2FYiYZ%2BeplLIKyKUofda%2FhSKB92Z5ZEXHxrEkBh%2FeWZPVBNl4lrgE1HGWNA%2BZ8Q6CxNKVjuymWqf%2BNTtve9a92BsntcMWczZgL%2BDs2kOUa9EzaoMYJ1K8E8cNfKg2zXVynd0%2FSCr6V57ha4%2FUSxqUgiq0GPs2MCw92maZLmv5T9iUTiE6qPEnHIO981EDofxlznDd1mWXlWa6jsuVa21vQ%2F4dkEvmXw9ARwA34D2nhi8%2FFCKaBKeA8YeVLRJDa1BRFeq%2BQd%2BNVkKgw1iHnZpWUgEHydmBv15inbMCV1cXACk43w0cbGzgQl8ys0wZG6Nsw29quwgY6pgHxZ7ohU5dzeHWXegeAfTPh3nyds2aNLZboKo9nh6r%2FKYd45%2FOAffW1w5riIPCQCJb6RlSZqaneUVHqz01Me9MaiyUJB7IczBpul4ZYDMoc5DY2Oa8UEZM47fcldDGBfluSJapefDsFdyheJK4WDe%2F%2F7IJKrmxJiBfp6emC9joM3XsI8jhvT1%2Fu%2B%2FrTSpiVNaXWrXgNxLM3ngwVuu6ZJL02GYIL5ACY&X-Amz-Signature=23ea574bbc9fccbd1629669f81b1d3a4c386cb9536cf5a10ca31711744ef2455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUYJOWB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEQfhcxyi0F0m0obwzTFMgJ4w8PydDE1dknlSEouoejoAiBT%2ByhQU4YrfhFPdoW6szuPKrCCNMhnMmbPPgBKjSYiSCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbYTWYwsSdywmk1eKtwDzV8c%2FLC3YNR7IrCgoGZDiv4lLbop4i251w2Yb4pA%2Bbw0OYZLHfXWisL3x6%2Fxj2vhec9iceNW0tiu12nkU1lgHya9JaKNQzMJSvQqaWGKH3i8eF6WeSkYrtlH2y3P0s2MyQZY%2FN9abtjYsfFYkxXO89zjUNzru4jhU2EDVsqi%2B5vCie%2BkcFBgmREJbFKSrzBsITw2cCEXBVTCmEw9Zwygu8D3VCcMRKbQaSOYXzrfMsaq8c%2Fi5D2t%2FNcNwIFGJEDresra3wOk%2FGZCzPiXvlBGw7%2FnyhHRlTBYOHIda3RhThFZKirGZ3bUqYfm2Qe%2FYiYZ%2BeplLIKyKUofda%2FhSKB92Z5ZEXHxrEkBh%2FeWZPVBNl4lrgE1HGWNA%2BZ8Q6CxNKVjuymWqf%2BNTtve9a92BsntcMWczZgL%2BDs2kOUa9EzaoMYJ1K8E8cNfKg2zXVynd0%2FSCr6V57ha4%2FUSxqUgiq0GPs2MCw92maZLmv5T9iUTiE6qPEnHIO981EDofxlznDd1mWXlWa6jsuVa21vQ%2F4dkEvmXw9ARwA34D2nhi8%2FFCKaBKeA8YeVLRJDa1BRFeq%2BQd%2BNVkKgw1iHnZpWUgEHydmBv15inbMCV1cXACk43w0cbGzgQl8ys0wZG6Nsw29quwgY6pgHxZ7ohU5dzeHWXegeAfTPh3nyds2aNLZboKo9nh6r%2FKYd45%2FOAffW1w5riIPCQCJb6RlSZqaneUVHqz01Me9MaiyUJB7IczBpul4ZYDMoc5DY2Oa8UEZM47fcldDGBfluSJapefDsFdyheJK4WDe%2F%2F7IJKrmxJiBfp6emC9joM3XsI8jhvT1%2Fu%2B%2FrTSpiVNaXWrXgNxLM3ngwVuu6ZJL02GYIL5ACY&X-Amz-Signature=eadedea07cbe7d504fafba5ed09c2c3ccdb8597a8603e0f447966ebc12e4131f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUYJOWB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEQfhcxyi0F0m0obwzTFMgJ4w8PydDE1dknlSEouoejoAiBT%2ByhQU4YrfhFPdoW6szuPKrCCNMhnMmbPPgBKjSYiSCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbYTWYwsSdywmk1eKtwDzV8c%2FLC3YNR7IrCgoGZDiv4lLbop4i251w2Yb4pA%2Bbw0OYZLHfXWisL3x6%2Fxj2vhec9iceNW0tiu12nkU1lgHya9JaKNQzMJSvQqaWGKH3i8eF6WeSkYrtlH2y3P0s2MyQZY%2FN9abtjYsfFYkxXO89zjUNzru4jhU2EDVsqi%2B5vCie%2BkcFBgmREJbFKSrzBsITw2cCEXBVTCmEw9Zwygu8D3VCcMRKbQaSOYXzrfMsaq8c%2Fi5D2t%2FNcNwIFGJEDresra3wOk%2FGZCzPiXvlBGw7%2FnyhHRlTBYOHIda3RhThFZKirGZ3bUqYfm2Qe%2FYiYZ%2BeplLIKyKUofda%2FhSKB92Z5ZEXHxrEkBh%2FeWZPVBNl4lrgE1HGWNA%2BZ8Q6CxNKVjuymWqf%2BNTtve9a92BsntcMWczZgL%2BDs2kOUa9EzaoMYJ1K8E8cNfKg2zXVynd0%2FSCr6V57ha4%2FUSxqUgiq0GPs2MCw92maZLmv5T9iUTiE6qPEnHIO981EDofxlznDd1mWXlWa6jsuVa21vQ%2F4dkEvmXw9ARwA34D2nhi8%2FFCKaBKeA8YeVLRJDa1BRFeq%2BQd%2BNVkKgw1iHnZpWUgEHydmBv15inbMCV1cXACk43w0cbGzgQl8ys0wZG6Nsw29quwgY6pgHxZ7ohU5dzeHWXegeAfTPh3nyds2aNLZboKo9nh6r%2FKYd45%2FOAffW1w5riIPCQCJb6RlSZqaneUVHqz01Me9MaiyUJB7IczBpul4ZYDMoc5DY2Oa8UEZM47fcldDGBfluSJapefDsFdyheJK4WDe%2F%2F7IJKrmxJiBfp6emC9joM3XsI8jhvT1%2Fu%2B%2FrTSpiVNaXWrXgNxLM3ngwVuu6ZJL02GYIL5ACY&X-Amz-Signature=80ffbfc8c093565541016de01f2af2add5ad86465e7acdfad33094e489f1c6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUYJOWB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEQfhcxyi0F0m0obwzTFMgJ4w8PydDE1dknlSEouoejoAiBT%2ByhQU4YrfhFPdoW6szuPKrCCNMhnMmbPPgBKjSYiSCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbYTWYwsSdywmk1eKtwDzV8c%2FLC3YNR7IrCgoGZDiv4lLbop4i251w2Yb4pA%2Bbw0OYZLHfXWisL3x6%2Fxj2vhec9iceNW0tiu12nkU1lgHya9JaKNQzMJSvQqaWGKH3i8eF6WeSkYrtlH2y3P0s2MyQZY%2FN9abtjYsfFYkxXO89zjUNzru4jhU2EDVsqi%2B5vCie%2BkcFBgmREJbFKSrzBsITw2cCEXBVTCmEw9Zwygu8D3VCcMRKbQaSOYXzrfMsaq8c%2Fi5D2t%2FNcNwIFGJEDresra3wOk%2FGZCzPiXvlBGw7%2FnyhHRlTBYOHIda3RhThFZKirGZ3bUqYfm2Qe%2FYiYZ%2BeplLIKyKUofda%2FhSKB92Z5ZEXHxrEkBh%2FeWZPVBNl4lrgE1HGWNA%2BZ8Q6CxNKVjuymWqf%2BNTtve9a92BsntcMWczZgL%2BDs2kOUa9EzaoMYJ1K8E8cNfKg2zXVynd0%2FSCr6V57ha4%2FUSxqUgiq0GPs2MCw92maZLmv5T9iUTiE6qPEnHIO981EDofxlznDd1mWXlWa6jsuVa21vQ%2F4dkEvmXw9ARwA34D2nhi8%2FFCKaBKeA8YeVLRJDa1BRFeq%2BQd%2BNVkKgw1iHnZpWUgEHydmBv15inbMCV1cXACk43w0cbGzgQl8ys0wZG6Nsw29quwgY6pgHxZ7ohU5dzeHWXegeAfTPh3nyds2aNLZboKo9nh6r%2FKYd45%2FOAffW1w5riIPCQCJb6RlSZqaneUVHqz01Me9MaiyUJB7IczBpul4ZYDMoc5DY2Oa8UEZM47fcldDGBfluSJapefDsFdyheJK4WDe%2F%2F7IJKrmxJiBfp6emC9joM3XsI8jhvT1%2Fu%2B%2FrTSpiVNaXWrXgNxLM3ngwVuu6ZJL02GYIL5ACY&X-Amz-Signature=59fbdbed1159a021da8c28e4fda465fb83f5c664c1f6a4f69358af63e8e8a7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUYJOWB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEQfhcxyi0F0m0obwzTFMgJ4w8PydDE1dknlSEouoejoAiBT%2ByhQU4YrfhFPdoW6szuPKrCCNMhnMmbPPgBKjSYiSCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbYTWYwsSdywmk1eKtwDzV8c%2FLC3YNR7IrCgoGZDiv4lLbop4i251w2Yb4pA%2Bbw0OYZLHfXWisL3x6%2Fxj2vhec9iceNW0tiu12nkU1lgHya9JaKNQzMJSvQqaWGKH3i8eF6WeSkYrtlH2y3P0s2MyQZY%2FN9abtjYsfFYkxXO89zjUNzru4jhU2EDVsqi%2B5vCie%2BkcFBgmREJbFKSrzBsITw2cCEXBVTCmEw9Zwygu8D3VCcMRKbQaSOYXzrfMsaq8c%2Fi5D2t%2FNcNwIFGJEDresra3wOk%2FGZCzPiXvlBGw7%2FnyhHRlTBYOHIda3RhThFZKirGZ3bUqYfm2Qe%2FYiYZ%2BeplLIKyKUofda%2FhSKB92Z5ZEXHxrEkBh%2FeWZPVBNl4lrgE1HGWNA%2BZ8Q6CxNKVjuymWqf%2BNTtve9a92BsntcMWczZgL%2BDs2kOUa9EzaoMYJ1K8E8cNfKg2zXVynd0%2FSCr6V57ha4%2FUSxqUgiq0GPs2MCw92maZLmv5T9iUTiE6qPEnHIO981EDofxlznDd1mWXlWa6jsuVa21vQ%2F4dkEvmXw9ARwA34D2nhi8%2FFCKaBKeA8YeVLRJDa1BRFeq%2BQd%2BNVkKgw1iHnZpWUgEHydmBv15inbMCV1cXACk43w0cbGzgQl8ys0wZG6Nsw29quwgY6pgHxZ7ohU5dzeHWXegeAfTPh3nyds2aNLZboKo9nh6r%2FKYd45%2FOAffW1w5riIPCQCJb6RlSZqaneUVHqz01Me9MaiyUJB7IczBpul4ZYDMoc5DY2Oa8UEZM47fcldDGBfluSJapefDsFdyheJK4WDe%2F%2F7IJKrmxJiBfp6emC9joM3XsI8jhvT1%2Fu%2B%2FrTSpiVNaXWrXgNxLM3ngwVuu6ZJL02GYIL5ACY&X-Amz-Signature=3b45edb1d366e4ef9079b16bdc4c432c749407478b840477541e43d48b31fb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUYJOWB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEQfhcxyi0F0m0obwzTFMgJ4w8PydDE1dknlSEouoejoAiBT%2ByhQU4YrfhFPdoW6szuPKrCCNMhnMmbPPgBKjSYiSCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnbYTWYwsSdywmk1eKtwDzV8c%2FLC3YNR7IrCgoGZDiv4lLbop4i251w2Yb4pA%2Bbw0OYZLHfXWisL3x6%2Fxj2vhec9iceNW0tiu12nkU1lgHya9JaKNQzMJSvQqaWGKH3i8eF6WeSkYrtlH2y3P0s2MyQZY%2FN9abtjYsfFYkxXO89zjUNzru4jhU2EDVsqi%2B5vCie%2BkcFBgmREJbFKSrzBsITw2cCEXBVTCmEw9Zwygu8D3VCcMRKbQaSOYXzrfMsaq8c%2Fi5D2t%2FNcNwIFGJEDresra3wOk%2FGZCzPiXvlBGw7%2FnyhHRlTBYOHIda3RhThFZKirGZ3bUqYfm2Qe%2FYiYZ%2BeplLIKyKUofda%2FhSKB92Z5ZEXHxrEkBh%2FeWZPVBNl4lrgE1HGWNA%2BZ8Q6CxNKVjuymWqf%2BNTtve9a92BsntcMWczZgL%2BDs2kOUa9EzaoMYJ1K8E8cNfKg2zXVynd0%2FSCr6V57ha4%2FUSxqUgiq0GPs2MCw92maZLmv5T9iUTiE6qPEnHIO981EDofxlznDd1mWXlWa6jsuVa21vQ%2F4dkEvmXw9ARwA34D2nhi8%2FFCKaBKeA8YeVLRJDa1BRFeq%2BQd%2BNVkKgw1iHnZpWUgEHydmBv15inbMCV1cXACk43w0cbGzgQl8ys0wZG6Nsw29quwgY6pgHxZ7ohU5dzeHWXegeAfTPh3nyds2aNLZboKo9nh6r%2FKYd45%2FOAffW1w5riIPCQCJb6RlSZqaneUVHqz01Me9MaiyUJB7IczBpul4ZYDMoc5DY2Oa8UEZM47fcldDGBfluSJapefDsFdyheJK4WDe%2F%2F7IJKrmxJiBfp6emC9joM3XsI8jhvT1%2Fu%2B%2FrTSpiVNaXWrXgNxLM3ngwVuu6ZJL02GYIL5ACY&X-Amz-Signature=209261e6539a392634e5fb5f2a3a311a88794c21e8631e05c6df99e19cb52a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
