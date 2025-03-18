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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=d8dabf072f8bf4c7c65772cf1e9fa0461b1ee6120ba63868f041cbc21df0a807&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=ebdda8d8d15a03f1ef4df8ef065faa6be1bfdc3f1e518bc6f976d91bd605f1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=6d1118a43ee11f084c14470c955dbcf287c8057b509162fbdd1ce0959cfbab9a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=29853b5b05bfab398da65723aa5e1994f3a9be59bb49376c90781e4e1ed5968c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=c791199a4916af3726d9ebff80e55a7af7bd18851e47c39cb7a5b164546817df&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=b94689361dde29ccbe7680c3fa934050e8c321be30b6a66a042e9225ea2931f8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDR3XUX7%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIHZTJHl3v%2BAtc38NIECHANFtTSpkFNhOE86EBLzaLLdjAiEA6POqAKZ3AaF8l99tWmkC3fkOGCt6WPYoMmUfDqJwL9sq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNIUEZHbDSikSVjehyrcA9n9KX4N%2BwMa1k3HwmW6XlwBqc2U2OjUR71UrVJ%2FTyPKE30vS0UC%2BySKuFSlYXRG8Y6cZwtnW0844hxPGSJQwhiGRmj8aVi5xY7grZSF3gNK42wb5LQL3RWXajQlz3ZHtWszzVyfO79bK4L4dbSU5tARDOkX9Y2m15D%2F0SivRIlrmMI4PsAHyX3omJZFTcMx6RtSeqtxf0qRIzMhIo464XVVUCtLjc2gQMe24KqjSw7x6%2BFg0%2Fm0mnx57LbGAYGsjxc4IvzqGBeGJhJzSeQN90qBgqrPLGuWSpxaO1gcwGAHxkbKtbLh33at0L7A11z4m1xzAiu6lgdcaYzTe2QaWsjVln4y%2BygWswQfUquJCCz7oLWPqHVuqKOg2nfNgSW6ZKCqxqkg39l6Wya2sAypKLhqk7KdtH1nriEqEhr%2FZbdiQFXx20LZCApvWHKhN%2F3PUs8SYEIyVvYr4GIzkSKtNO3ztiwpq55at9WK7pf%2FZ1QoXiP8DHPnuHY0Le5TOfBTqj4c%2B6nn8nQGyH0ZoRInB0nL5WF%2BPciLtqhAJiFl6wm2ZckVwGxtUN%2Fv8Tkcq7TbBMF6OeV3i2W%2F3ap%2BWbHupeo5OoQzp57tr%2FbsprWJSmiJgAKrkYF8SsLehrcWMOaw574GOqUBpJPBTTHUs3AnU%2BYpqsQfGiPuNrjptetOlmvn0OCKSXa7ir6CK%2BSzKLRsUCmR%2BnW5%2BU%2FrYohGPCVRrbEl5K4h6ERY1W7Hlhpg9DgIDjx7pSQktkgsHEdp9e8WZKiDMfQAYOAJtGZH7el0sPZRRX0KnxPRsMLt1krYUmwoY1wd9UUHCGRRzQvwLsqxSs6vpT7Ds%2B6rvTIV5v3dKCV0EQYVwON3vcox&X-Amz-Signature=0fc64f3451307a87facefe69f59aeb3bcdc92f68071c81d3bc9896ccdc734ada&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
