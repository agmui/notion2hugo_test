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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX62B2JA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFnDdtFbsjUglK19oF2NlzRkKINsfAK28R11O56E%2FvBlAiAPtIN6fD%2Fd9c2EJa7yF%2BuH6idahWtNqAGotERij3c%2FDyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoVw%2BOrCBFOSBfG9EKtwDQ3q5myUdt3G61i8x5HteptazSUyN6mQiLACCkdjgX701FB8g0rwMpSJJjlqMTxcvlkUhmRtn74d2tvyKQhM1%2BHnM5MJr5j4BZVMaYQHWUTrReqSLFzLV7mYe0W1RER5r9zL5Ha%2FrKitZAE8oGLq1lMSSa9fWQ82hHGKUk0v%2BbtDXdAx8etmHS98WuT87SFVdRwWcqzsr%2BcuGac1l7IjJlpsACM7Jgk1Pn0h5bJzQ70J8NHyvOR9Z4MQaxzakbcsRpL0jVxyjR5GN%2F3Bg1aZ%2FRQEgkwIgI8O3ZjsfDcohT%2BFK9YlCvHPLWRIn%2B1h5otOTWX8HYwkgIqj%2BYX6FbhJz7DTKGXJwGdcBJn%2FXXq1Q%2FnAAsgGwIZlx%2BMY4RTaCyi2NVrqxtLP029vxnwT%2BhnaYIIXpyq2educTAjQOWdhgHXGB25XuqoUgB4zQ9xuGgrSBowivI%2FC%2B6faXKt9BWPQW3r23smHRq53nlAWP1qBmY6dfwQx11nRUgyuFzRJro6CrEgb9pultdZP3PIlDYmc0pGBg3yYWCPU3eVZ37%2BbVWXkRQU%2FNJpITPgnERm%2F5ll9jNxY3jQty9YFsdChC2dADymdG0iUFz%2FDmZd4qn%2FowvlljUv0SR%2BixQEWhdZ4wl9ewvwY6pgGvebtdeUXicG0KKpO4wX8WdcZe9LghgxJ1Ccd2%2BHQ8BumBpHMUkS4DGGtAczdacnKpdb7OR8afQlIRj5k0ZAyl0ask%2FuDEfm5Z3ueduWg%2B8ydSLdp793iSiGK2OWoPfnxeUonVzO4FODTm%2Ffi05yFmTqM1IK0AB7K6aSIffAae5mOOmccIJTcvCyM%2Bd0UbcHrgtFehUHqdxX1ADBZX3fyiFTjDr7a%2B&X-Amz-Signature=0c14030c004692cfb4c4c9633707fdb90a4d1cad55b6eeed932b63d29933ef49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX62B2JA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFnDdtFbsjUglK19oF2NlzRkKINsfAK28R11O56E%2FvBlAiAPtIN6fD%2Fd9c2EJa7yF%2BuH6idahWtNqAGotERij3c%2FDyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoVw%2BOrCBFOSBfG9EKtwDQ3q5myUdt3G61i8x5HteptazSUyN6mQiLACCkdjgX701FB8g0rwMpSJJjlqMTxcvlkUhmRtn74d2tvyKQhM1%2BHnM5MJr5j4BZVMaYQHWUTrReqSLFzLV7mYe0W1RER5r9zL5Ha%2FrKitZAE8oGLq1lMSSa9fWQ82hHGKUk0v%2BbtDXdAx8etmHS98WuT87SFVdRwWcqzsr%2BcuGac1l7IjJlpsACM7Jgk1Pn0h5bJzQ70J8NHyvOR9Z4MQaxzakbcsRpL0jVxyjR5GN%2F3Bg1aZ%2FRQEgkwIgI8O3ZjsfDcohT%2BFK9YlCvHPLWRIn%2B1h5otOTWX8HYwkgIqj%2BYX6FbhJz7DTKGXJwGdcBJn%2FXXq1Q%2FnAAsgGwIZlx%2BMY4RTaCyi2NVrqxtLP029vxnwT%2BhnaYIIXpyq2educTAjQOWdhgHXGB25XuqoUgB4zQ9xuGgrSBowivI%2FC%2B6faXKt9BWPQW3r23smHRq53nlAWP1qBmY6dfwQx11nRUgyuFzRJro6CrEgb9pultdZP3PIlDYmc0pGBg3yYWCPU3eVZ37%2BbVWXkRQU%2FNJpITPgnERm%2F5ll9jNxY3jQty9YFsdChC2dADymdG0iUFz%2FDmZd4qn%2FowvlljUv0SR%2BixQEWhdZ4wl9ewvwY6pgGvebtdeUXicG0KKpO4wX8WdcZe9LghgxJ1Ccd2%2BHQ8BumBpHMUkS4DGGtAczdacnKpdb7OR8afQlIRj5k0ZAyl0ask%2FuDEfm5Z3ueduWg%2B8ydSLdp793iSiGK2OWoPfnxeUonVzO4FODTm%2Ffi05yFmTqM1IK0AB7K6aSIffAae5mOOmccIJTcvCyM%2Bd0UbcHrgtFehUHqdxX1ADBZX3fyiFTjDr7a%2B&X-Amz-Signature=d44801447a850a4babe91af2152c570e12156d86337493e99cf6de5d037b6e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX62B2JA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFnDdtFbsjUglK19oF2NlzRkKINsfAK28R11O56E%2FvBlAiAPtIN6fD%2Fd9c2EJa7yF%2BuH6idahWtNqAGotERij3c%2FDyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoVw%2BOrCBFOSBfG9EKtwDQ3q5myUdt3G61i8x5HteptazSUyN6mQiLACCkdjgX701FB8g0rwMpSJJjlqMTxcvlkUhmRtn74d2tvyKQhM1%2BHnM5MJr5j4BZVMaYQHWUTrReqSLFzLV7mYe0W1RER5r9zL5Ha%2FrKitZAE8oGLq1lMSSa9fWQ82hHGKUk0v%2BbtDXdAx8etmHS98WuT87SFVdRwWcqzsr%2BcuGac1l7IjJlpsACM7Jgk1Pn0h5bJzQ70J8NHyvOR9Z4MQaxzakbcsRpL0jVxyjR5GN%2F3Bg1aZ%2FRQEgkwIgI8O3ZjsfDcohT%2BFK9YlCvHPLWRIn%2B1h5otOTWX8HYwkgIqj%2BYX6FbhJz7DTKGXJwGdcBJn%2FXXq1Q%2FnAAsgGwIZlx%2BMY4RTaCyi2NVrqxtLP029vxnwT%2BhnaYIIXpyq2educTAjQOWdhgHXGB25XuqoUgB4zQ9xuGgrSBowivI%2FC%2B6faXKt9BWPQW3r23smHRq53nlAWP1qBmY6dfwQx11nRUgyuFzRJro6CrEgb9pultdZP3PIlDYmc0pGBg3yYWCPU3eVZ37%2BbVWXkRQU%2FNJpITPgnERm%2F5ll9jNxY3jQty9YFsdChC2dADymdG0iUFz%2FDmZd4qn%2FowvlljUv0SR%2BixQEWhdZ4wl9ewvwY6pgGvebtdeUXicG0KKpO4wX8WdcZe9LghgxJ1Ccd2%2BHQ8BumBpHMUkS4DGGtAczdacnKpdb7OR8afQlIRj5k0ZAyl0ask%2FuDEfm5Z3ueduWg%2B8ydSLdp793iSiGK2OWoPfnxeUonVzO4FODTm%2Ffi05yFmTqM1IK0AB7K6aSIffAae5mOOmccIJTcvCyM%2Bd0UbcHrgtFehUHqdxX1ADBZX3fyiFTjDr7a%2B&X-Amz-Signature=8b95d5f8593112110c0d6429bb2867fac9db42d6104dc83d13a3bbb71292d179&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX62B2JA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFnDdtFbsjUglK19oF2NlzRkKINsfAK28R11O56E%2FvBlAiAPtIN6fD%2Fd9c2EJa7yF%2BuH6idahWtNqAGotERij3c%2FDyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoVw%2BOrCBFOSBfG9EKtwDQ3q5myUdt3G61i8x5HteptazSUyN6mQiLACCkdjgX701FB8g0rwMpSJJjlqMTxcvlkUhmRtn74d2tvyKQhM1%2BHnM5MJr5j4BZVMaYQHWUTrReqSLFzLV7mYe0W1RER5r9zL5Ha%2FrKitZAE8oGLq1lMSSa9fWQ82hHGKUk0v%2BbtDXdAx8etmHS98WuT87SFVdRwWcqzsr%2BcuGac1l7IjJlpsACM7Jgk1Pn0h5bJzQ70J8NHyvOR9Z4MQaxzakbcsRpL0jVxyjR5GN%2F3Bg1aZ%2FRQEgkwIgI8O3ZjsfDcohT%2BFK9YlCvHPLWRIn%2B1h5otOTWX8HYwkgIqj%2BYX6FbhJz7DTKGXJwGdcBJn%2FXXq1Q%2FnAAsgGwIZlx%2BMY4RTaCyi2NVrqxtLP029vxnwT%2BhnaYIIXpyq2educTAjQOWdhgHXGB25XuqoUgB4zQ9xuGgrSBowivI%2FC%2B6faXKt9BWPQW3r23smHRq53nlAWP1qBmY6dfwQx11nRUgyuFzRJro6CrEgb9pultdZP3PIlDYmc0pGBg3yYWCPU3eVZ37%2BbVWXkRQU%2FNJpITPgnERm%2F5ll9jNxY3jQty9YFsdChC2dADymdG0iUFz%2FDmZd4qn%2FowvlljUv0SR%2BixQEWhdZ4wl9ewvwY6pgGvebtdeUXicG0KKpO4wX8WdcZe9LghgxJ1Ccd2%2BHQ8BumBpHMUkS4DGGtAczdacnKpdb7OR8afQlIRj5k0ZAyl0ask%2FuDEfm5Z3ueduWg%2B8ydSLdp793iSiGK2OWoPfnxeUonVzO4FODTm%2Ffi05yFmTqM1IK0AB7K6aSIffAae5mOOmccIJTcvCyM%2Bd0UbcHrgtFehUHqdxX1ADBZX3fyiFTjDr7a%2B&X-Amz-Signature=5a5cd28cfe4cb55ec459d754803360b450fffac2cbd8a67cc2c0f9c2b72126ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX62B2JA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFnDdtFbsjUglK19oF2NlzRkKINsfAK28R11O56E%2FvBlAiAPtIN6fD%2Fd9c2EJa7yF%2BuH6idahWtNqAGotERij3c%2FDyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoVw%2BOrCBFOSBfG9EKtwDQ3q5myUdt3G61i8x5HteptazSUyN6mQiLACCkdjgX701FB8g0rwMpSJJjlqMTxcvlkUhmRtn74d2tvyKQhM1%2BHnM5MJr5j4BZVMaYQHWUTrReqSLFzLV7mYe0W1RER5r9zL5Ha%2FrKitZAE8oGLq1lMSSa9fWQ82hHGKUk0v%2BbtDXdAx8etmHS98WuT87SFVdRwWcqzsr%2BcuGac1l7IjJlpsACM7Jgk1Pn0h5bJzQ70J8NHyvOR9Z4MQaxzakbcsRpL0jVxyjR5GN%2F3Bg1aZ%2FRQEgkwIgI8O3ZjsfDcohT%2BFK9YlCvHPLWRIn%2B1h5otOTWX8HYwkgIqj%2BYX6FbhJz7DTKGXJwGdcBJn%2FXXq1Q%2FnAAsgGwIZlx%2BMY4RTaCyi2NVrqxtLP029vxnwT%2BhnaYIIXpyq2educTAjQOWdhgHXGB25XuqoUgB4zQ9xuGgrSBowivI%2FC%2B6faXKt9BWPQW3r23smHRq53nlAWP1qBmY6dfwQx11nRUgyuFzRJro6CrEgb9pultdZP3PIlDYmc0pGBg3yYWCPU3eVZ37%2BbVWXkRQU%2FNJpITPgnERm%2F5ll9jNxY3jQty9YFsdChC2dADymdG0iUFz%2FDmZd4qn%2FowvlljUv0SR%2BixQEWhdZ4wl9ewvwY6pgGvebtdeUXicG0KKpO4wX8WdcZe9LghgxJ1Ccd2%2BHQ8BumBpHMUkS4DGGtAczdacnKpdb7OR8afQlIRj5k0ZAyl0ask%2FuDEfm5Z3ueduWg%2B8ydSLdp793iSiGK2OWoPfnxeUonVzO4FODTm%2Ffi05yFmTqM1IK0AB7K6aSIffAae5mOOmccIJTcvCyM%2Bd0UbcHrgtFehUHqdxX1ADBZX3fyiFTjDr7a%2B&X-Amz-Signature=07257004b05243c3cfe8af86f60355427c8447729186c7369435f3af0894864a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX62B2JA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFnDdtFbsjUglK19oF2NlzRkKINsfAK28R11O56E%2FvBlAiAPtIN6fD%2Fd9c2EJa7yF%2BuH6idahWtNqAGotERij3c%2FDyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoVw%2BOrCBFOSBfG9EKtwDQ3q5myUdt3G61i8x5HteptazSUyN6mQiLACCkdjgX701FB8g0rwMpSJJjlqMTxcvlkUhmRtn74d2tvyKQhM1%2BHnM5MJr5j4BZVMaYQHWUTrReqSLFzLV7mYe0W1RER5r9zL5Ha%2FrKitZAE8oGLq1lMSSa9fWQ82hHGKUk0v%2BbtDXdAx8etmHS98WuT87SFVdRwWcqzsr%2BcuGac1l7IjJlpsACM7Jgk1Pn0h5bJzQ70J8NHyvOR9Z4MQaxzakbcsRpL0jVxyjR5GN%2F3Bg1aZ%2FRQEgkwIgI8O3ZjsfDcohT%2BFK9YlCvHPLWRIn%2B1h5otOTWX8HYwkgIqj%2BYX6FbhJz7DTKGXJwGdcBJn%2FXXq1Q%2FnAAsgGwIZlx%2BMY4RTaCyi2NVrqxtLP029vxnwT%2BhnaYIIXpyq2educTAjQOWdhgHXGB25XuqoUgB4zQ9xuGgrSBowivI%2FC%2B6faXKt9BWPQW3r23smHRq53nlAWP1qBmY6dfwQx11nRUgyuFzRJro6CrEgb9pultdZP3PIlDYmc0pGBg3yYWCPU3eVZ37%2BbVWXkRQU%2FNJpITPgnERm%2F5ll9jNxY3jQty9YFsdChC2dADymdG0iUFz%2FDmZd4qn%2FowvlljUv0SR%2BixQEWhdZ4wl9ewvwY6pgGvebtdeUXicG0KKpO4wX8WdcZe9LghgxJ1Ccd2%2BHQ8BumBpHMUkS4DGGtAczdacnKpdb7OR8afQlIRj5k0ZAyl0ask%2FuDEfm5Z3ueduWg%2B8ydSLdp793iSiGK2OWoPfnxeUonVzO4FODTm%2Ffi05yFmTqM1IK0AB7K6aSIffAae5mOOmccIJTcvCyM%2Bd0UbcHrgtFehUHqdxX1ADBZX3fyiFTjDr7a%2B&X-Amz-Signature=9b466c14806de2e1b3327b3d0194098e00c9fcb188f1c1a3ce217a6a75bf3b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX62B2JA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFnDdtFbsjUglK19oF2NlzRkKINsfAK28R11O56E%2FvBlAiAPtIN6fD%2Fd9c2EJa7yF%2BuH6idahWtNqAGotERij3c%2FDyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoVw%2BOrCBFOSBfG9EKtwDQ3q5myUdt3G61i8x5HteptazSUyN6mQiLACCkdjgX701FB8g0rwMpSJJjlqMTxcvlkUhmRtn74d2tvyKQhM1%2BHnM5MJr5j4BZVMaYQHWUTrReqSLFzLV7mYe0W1RER5r9zL5Ha%2FrKitZAE8oGLq1lMSSa9fWQ82hHGKUk0v%2BbtDXdAx8etmHS98WuT87SFVdRwWcqzsr%2BcuGac1l7IjJlpsACM7Jgk1Pn0h5bJzQ70J8NHyvOR9Z4MQaxzakbcsRpL0jVxyjR5GN%2F3Bg1aZ%2FRQEgkwIgI8O3ZjsfDcohT%2BFK9YlCvHPLWRIn%2B1h5otOTWX8HYwkgIqj%2BYX6FbhJz7DTKGXJwGdcBJn%2FXXq1Q%2FnAAsgGwIZlx%2BMY4RTaCyi2NVrqxtLP029vxnwT%2BhnaYIIXpyq2educTAjQOWdhgHXGB25XuqoUgB4zQ9xuGgrSBowivI%2FC%2B6faXKt9BWPQW3r23smHRq53nlAWP1qBmY6dfwQx11nRUgyuFzRJro6CrEgb9pultdZP3PIlDYmc0pGBg3yYWCPU3eVZ37%2BbVWXkRQU%2FNJpITPgnERm%2F5ll9jNxY3jQty9YFsdChC2dADymdG0iUFz%2FDmZd4qn%2FowvlljUv0SR%2BixQEWhdZ4wl9ewvwY6pgGvebtdeUXicG0KKpO4wX8WdcZe9LghgxJ1Ccd2%2BHQ8BumBpHMUkS4DGGtAczdacnKpdb7OR8afQlIRj5k0ZAyl0ask%2FuDEfm5Z3ueduWg%2B8ydSLdp793iSiGK2OWoPfnxeUonVzO4FODTm%2Ffi05yFmTqM1IK0AB7K6aSIffAae5mOOmccIJTcvCyM%2Bd0UbcHrgtFehUHqdxX1ADBZX3fyiFTjDr7a%2B&X-Amz-Signature=ce84cb9708d6cd1ad8051ce663fd67a4814e3222ee091f13bf8cd5bbb8ba1d96&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
