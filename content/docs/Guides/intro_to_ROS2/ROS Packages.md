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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCITU4G%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAPj4YeEQJI3%2B5iwv4KZ1RYhqlO28h6uiHippNWzMk3gIhAIlIh3k9aHSBJMvwOhZ6J7dvISx5VKA71I9Weu4e7X%2FSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjTrd4kZoSaOjCvGEq3AO2pcBRiKoaebKRmDxhzvRe%2BtYZvztrCBLsNjjLixO9yyX1kx4rX6v9yKKMGv6UZIy1U%2BE3zyhtrTJmVd4AfNFfghmXgsOmiKvFMGjJ7U4FcbmMdHao795NXN4pVdyAIz9kn%2BfUaFRfcCtYbWOOVpQ5Ex0j4WAbO0Yfcqm8G9n8lFbW7GG2nnsIQ%2FlPnEHY1ZYNI8VoRR%2BoyJCBZwVuHkJYNPMr9WKkeKbd9mrDWrxwNrx34gX9oY5fy7hVDsGH%2BN5kL2d3tFcmMzUojz1D4l4SdiYUlSAxRlAUwoP3AYBGy1vmDVJV25edhiO5E3hI%2BeFtVrdgTE2384t1LKG4MjxYMM2fn1TSDjVG0HiNSZ7jBBNEjpE6iaagZmtUE7X4xbzZDw%2FpFHOseHhgAJiOGCiM7SY%2FwdR2kqgrVIEjfvX1n6RV%2FThw91hp%2BJq8WrC2kih0DaUFFtB830WXsJjEFKrZufkH6scmEffGaKmZvnmxbC09qSow0qV12D1Hix0sfoeNcCpskvaEg%2BvEXG76BHSGfejrzUQUNGIvJ5YkAXqwPk3BPEsEh8TLbeX5P0XXO9OrMMbIo1YWgPnWxWXP2%2BpJy8iJGlNCpTxPn%2Bkh9JLZxU5KVzxE7ZzxR4d5AjDg1q7CBjqkAUkfDz9jtZDrihW5Y7SYE%2F%2BdU8YyeAAxOB1CMMysG6dMynWwinPfRoWCSSJbC0TCpjZaZmzjU2LfWRuMullF3W9Pqoya5H5kDcOpT%2FAo0GQhYGruZfBE3whQRxipi0Ab1gb6b5UMtR%2FyXDdNIox18jjZ8VxOCsGRDGtA4JNPYW04dHLsQkSBqLLOAL%2Bv1RIHklDwymwi4mH4lJYSn12E%2B56yaOgv&X-Amz-Signature=cd1ee869311ef1e5b35c50d7a5ba9fac58cd0df4c063f6605476b27a551a871c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCITU4G%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAPj4YeEQJI3%2B5iwv4KZ1RYhqlO28h6uiHippNWzMk3gIhAIlIh3k9aHSBJMvwOhZ6J7dvISx5VKA71I9Weu4e7X%2FSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjTrd4kZoSaOjCvGEq3AO2pcBRiKoaebKRmDxhzvRe%2BtYZvztrCBLsNjjLixO9yyX1kx4rX6v9yKKMGv6UZIy1U%2BE3zyhtrTJmVd4AfNFfghmXgsOmiKvFMGjJ7U4FcbmMdHao795NXN4pVdyAIz9kn%2BfUaFRfcCtYbWOOVpQ5Ex0j4WAbO0Yfcqm8G9n8lFbW7GG2nnsIQ%2FlPnEHY1ZYNI8VoRR%2BoyJCBZwVuHkJYNPMr9WKkeKbd9mrDWrxwNrx34gX9oY5fy7hVDsGH%2BN5kL2d3tFcmMzUojz1D4l4SdiYUlSAxRlAUwoP3AYBGy1vmDVJV25edhiO5E3hI%2BeFtVrdgTE2384t1LKG4MjxYMM2fn1TSDjVG0HiNSZ7jBBNEjpE6iaagZmtUE7X4xbzZDw%2FpFHOseHhgAJiOGCiM7SY%2FwdR2kqgrVIEjfvX1n6RV%2FThw91hp%2BJq8WrC2kih0DaUFFtB830WXsJjEFKrZufkH6scmEffGaKmZvnmxbC09qSow0qV12D1Hix0sfoeNcCpskvaEg%2BvEXG76BHSGfejrzUQUNGIvJ5YkAXqwPk3BPEsEh8TLbeX5P0XXO9OrMMbIo1YWgPnWxWXP2%2BpJy8iJGlNCpTxPn%2Bkh9JLZxU5KVzxE7ZzxR4d5AjDg1q7CBjqkAUkfDz9jtZDrihW5Y7SYE%2F%2BdU8YyeAAxOB1CMMysG6dMynWwinPfRoWCSSJbC0TCpjZaZmzjU2LfWRuMullF3W9Pqoya5H5kDcOpT%2FAo0GQhYGruZfBE3whQRxipi0Ab1gb6b5UMtR%2FyXDdNIox18jjZ8VxOCsGRDGtA4JNPYW04dHLsQkSBqLLOAL%2Bv1RIHklDwymwi4mH4lJYSn12E%2B56yaOgv&X-Amz-Signature=7c6d802f7e6a7331c8c6873d9279c817d030255ab7eeb59eab799b0cc9c50b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCITU4G%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAPj4YeEQJI3%2B5iwv4KZ1RYhqlO28h6uiHippNWzMk3gIhAIlIh3k9aHSBJMvwOhZ6J7dvISx5VKA71I9Weu4e7X%2FSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjTrd4kZoSaOjCvGEq3AO2pcBRiKoaebKRmDxhzvRe%2BtYZvztrCBLsNjjLixO9yyX1kx4rX6v9yKKMGv6UZIy1U%2BE3zyhtrTJmVd4AfNFfghmXgsOmiKvFMGjJ7U4FcbmMdHao795NXN4pVdyAIz9kn%2BfUaFRfcCtYbWOOVpQ5Ex0j4WAbO0Yfcqm8G9n8lFbW7GG2nnsIQ%2FlPnEHY1ZYNI8VoRR%2BoyJCBZwVuHkJYNPMr9WKkeKbd9mrDWrxwNrx34gX9oY5fy7hVDsGH%2BN5kL2d3tFcmMzUojz1D4l4SdiYUlSAxRlAUwoP3AYBGy1vmDVJV25edhiO5E3hI%2BeFtVrdgTE2384t1LKG4MjxYMM2fn1TSDjVG0HiNSZ7jBBNEjpE6iaagZmtUE7X4xbzZDw%2FpFHOseHhgAJiOGCiM7SY%2FwdR2kqgrVIEjfvX1n6RV%2FThw91hp%2BJq8WrC2kih0DaUFFtB830WXsJjEFKrZufkH6scmEffGaKmZvnmxbC09qSow0qV12D1Hix0sfoeNcCpskvaEg%2BvEXG76BHSGfejrzUQUNGIvJ5YkAXqwPk3BPEsEh8TLbeX5P0XXO9OrMMbIo1YWgPnWxWXP2%2BpJy8iJGlNCpTxPn%2Bkh9JLZxU5KVzxE7ZzxR4d5AjDg1q7CBjqkAUkfDz9jtZDrihW5Y7SYE%2F%2BdU8YyeAAxOB1CMMysG6dMynWwinPfRoWCSSJbC0TCpjZaZmzjU2LfWRuMullF3W9Pqoya5H5kDcOpT%2FAo0GQhYGruZfBE3whQRxipi0Ab1gb6b5UMtR%2FyXDdNIox18jjZ8VxOCsGRDGtA4JNPYW04dHLsQkSBqLLOAL%2Bv1RIHklDwymwi4mH4lJYSn12E%2B56yaOgv&X-Amz-Signature=165d1d029a30025a874db52745f41b5bbefa14fd970ed718b72bb482da523135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCITU4G%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAPj4YeEQJI3%2B5iwv4KZ1RYhqlO28h6uiHippNWzMk3gIhAIlIh3k9aHSBJMvwOhZ6J7dvISx5VKA71I9Weu4e7X%2FSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjTrd4kZoSaOjCvGEq3AO2pcBRiKoaebKRmDxhzvRe%2BtYZvztrCBLsNjjLixO9yyX1kx4rX6v9yKKMGv6UZIy1U%2BE3zyhtrTJmVd4AfNFfghmXgsOmiKvFMGjJ7U4FcbmMdHao795NXN4pVdyAIz9kn%2BfUaFRfcCtYbWOOVpQ5Ex0j4WAbO0Yfcqm8G9n8lFbW7GG2nnsIQ%2FlPnEHY1ZYNI8VoRR%2BoyJCBZwVuHkJYNPMr9WKkeKbd9mrDWrxwNrx34gX9oY5fy7hVDsGH%2BN5kL2d3tFcmMzUojz1D4l4SdiYUlSAxRlAUwoP3AYBGy1vmDVJV25edhiO5E3hI%2BeFtVrdgTE2384t1LKG4MjxYMM2fn1TSDjVG0HiNSZ7jBBNEjpE6iaagZmtUE7X4xbzZDw%2FpFHOseHhgAJiOGCiM7SY%2FwdR2kqgrVIEjfvX1n6RV%2FThw91hp%2BJq8WrC2kih0DaUFFtB830WXsJjEFKrZufkH6scmEffGaKmZvnmxbC09qSow0qV12D1Hix0sfoeNcCpskvaEg%2BvEXG76BHSGfejrzUQUNGIvJ5YkAXqwPk3BPEsEh8TLbeX5P0XXO9OrMMbIo1YWgPnWxWXP2%2BpJy8iJGlNCpTxPn%2Bkh9JLZxU5KVzxE7ZzxR4d5AjDg1q7CBjqkAUkfDz9jtZDrihW5Y7SYE%2F%2BdU8YyeAAxOB1CMMysG6dMynWwinPfRoWCSSJbC0TCpjZaZmzjU2LfWRuMullF3W9Pqoya5H5kDcOpT%2FAo0GQhYGruZfBE3whQRxipi0Ab1gb6b5UMtR%2FyXDdNIox18jjZ8VxOCsGRDGtA4JNPYW04dHLsQkSBqLLOAL%2Bv1RIHklDwymwi4mH4lJYSn12E%2B56yaOgv&X-Amz-Signature=a4509dbeef7923e37f87ef6f9e3a3f5d85ce910529fde7cb9949bbb2c0d722a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCITU4G%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAPj4YeEQJI3%2B5iwv4KZ1RYhqlO28h6uiHippNWzMk3gIhAIlIh3k9aHSBJMvwOhZ6J7dvISx5VKA71I9Weu4e7X%2FSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjTrd4kZoSaOjCvGEq3AO2pcBRiKoaebKRmDxhzvRe%2BtYZvztrCBLsNjjLixO9yyX1kx4rX6v9yKKMGv6UZIy1U%2BE3zyhtrTJmVd4AfNFfghmXgsOmiKvFMGjJ7U4FcbmMdHao795NXN4pVdyAIz9kn%2BfUaFRfcCtYbWOOVpQ5Ex0j4WAbO0Yfcqm8G9n8lFbW7GG2nnsIQ%2FlPnEHY1ZYNI8VoRR%2BoyJCBZwVuHkJYNPMr9WKkeKbd9mrDWrxwNrx34gX9oY5fy7hVDsGH%2BN5kL2d3tFcmMzUojz1D4l4SdiYUlSAxRlAUwoP3AYBGy1vmDVJV25edhiO5E3hI%2BeFtVrdgTE2384t1LKG4MjxYMM2fn1TSDjVG0HiNSZ7jBBNEjpE6iaagZmtUE7X4xbzZDw%2FpFHOseHhgAJiOGCiM7SY%2FwdR2kqgrVIEjfvX1n6RV%2FThw91hp%2BJq8WrC2kih0DaUFFtB830WXsJjEFKrZufkH6scmEffGaKmZvnmxbC09qSow0qV12D1Hix0sfoeNcCpskvaEg%2BvEXG76BHSGfejrzUQUNGIvJ5YkAXqwPk3BPEsEh8TLbeX5P0XXO9OrMMbIo1YWgPnWxWXP2%2BpJy8iJGlNCpTxPn%2Bkh9JLZxU5KVzxE7ZzxR4d5AjDg1q7CBjqkAUkfDz9jtZDrihW5Y7SYE%2F%2BdU8YyeAAxOB1CMMysG6dMynWwinPfRoWCSSJbC0TCpjZaZmzjU2LfWRuMullF3W9Pqoya5H5kDcOpT%2FAo0GQhYGruZfBE3whQRxipi0Ab1gb6b5UMtR%2FyXDdNIox18jjZ8VxOCsGRDGtA4JNPYW04dHLsQkSBqLLOAL%2Bv1RIHklDwymwi4mH4lJYSn12E%2B56yaOgv&X-Amz-Signature=fbeacfeac3651faa8e1ae4f978b46595d060fa910af2cd895300168a9aa87e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCITU4G%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAPj4YeEQJI3%2B5iwv4KZ1RYhqlO28h6uiHippNWzMk3gIhAIlIh3k9aHSBJMvwOhZ6J7dvISx5VKA71I9Weu4e7X%2FSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjTrd4kZoSaOjCvGEq3AO2pcBRiKoaebKRmDxhzvRe%2BtYZvztrCBLsNjjLixO9yyX1kx4rX6v9yKKMGv6UZIy1U%2BE3zyhtrTJmVd4AfNFfghmXgsOmiKvFMGjJ7U4FcbmMdHao795NXN4pVdyAIz9kn%2BfUaFRfcCtYbWOOVpQ5Ex0j4WAbO0Yfcqm8G9n8lFbW7GG2nnsIQ%2FlPnEHY1ZYNI8VoRR%2BoyJCBZwVuHkJYNPMr9WKkeKbd9mrDWrxwNrx34gX9oY5fy7hVDsGH%2BN5kL2d3tFcmMzUojz1D4l4SdiYUlSAxRlAUwoP3AYBGy1vmDVJV25edhiO5E3hI%2BeFtVrdgTE2384t1LKG4MjxYMM2fn1TSDjVG0HiNSZ7jBBNEjpE6iaagZmtUE7X4xbzZDw%2FpFHOseHhgAJiOGCiM7SY%2FwdR2kqgrVIEjfvX1n6RV%2FThw91hp%2BJq8WrC2kih0DaUFFtB830WXsJjEFKrZufkH6scmEffGaKmZvnmxbC09qSow0qV12D1Hix0sfoeNcCpskvaEg%2BvEXG76BHSGfejrzUQUNGIvJ5YkAXqwPk3BPEsEh8TLbeX5P0XXO9OrMMbIo1YWgPnWxWXP2%2BpJy8iJGlNCpTxPn%2Bkh9JLZxU5KVzxE7ZzxR4d5AjDg1q7CBjqkAUkfDz9jtZDrihW5Y7SYE%2F%2BdU8YyeAAxOB1CMMysG6dMynWwinPfRoWCSSJbC0TCpjZaZmzjU2LfWRuMullF3W9Pqoya5H5kDcOpT%2FAo0GQhYGruZfBE3whQRxipi0Ab1gb6b5UMtR%2FyXDdNIox18jjZ8VxOCsGRDGtA4JNPYW04dHLsQkSBqLLOAL%2Bv1RIHklDwymwi4mH4lJYSn12E%2B56yaOgv&X-Amz-Signature=dbefc503cc931c82a64546bc834a4dfff0a3da92328d0f34d5bac4a90d94af23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCITU4G%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCAPj4YeEQJI3%2B5iwv4KZ1RYhqlO28h6uiHippNWzMk3gIhAIlIh3k9aHSBJMvwOhZ6J7dvISx5VKA71I9Weu4e7X%2FSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjTrd4kZoSaOjCvGEq3AO2pcBRiKoaebKRmDxhzvRe%2BtYZvztrCBLsNjjLixO9yyX1kx4rX6v9yKKMGv6UZIy1U%2BE3zyhtrTJmVd4AfNFfghmXgsOmiKvFMGjJ7U4FcbmMdHao795NXN4pVdyAIz9kn%2BfUaFRfcCtYbWOOVpQ5Ex0j4WAbO0Yfcqm8G9n8lFbW7GG2nnsIQ%2FlPnEHY1ZYNI8VoRR%2BoyJCBZwVuHkJYNPMr9WKkeKbd9mrDWrxwNrx34gX9oY5fy7hVDsGH%2BN5kL2d3tFcmMzUojz1D4l4SdiYUlSAxRlAUwoP3AYBGy1vmDVJV25edhiO5E3hI%2BeFtVrdgTE2384t1LKG4MjxYMM2fn1TSDjVG0HiNSZ7jBBNEjpE6iaagZmtUE7X4xbzZDw%2FpFHOseHhgAJiOGCiM7SY%2FwdR2kqgrVIEjfvX1n6RV%2FThw91hp%2BJq8WrC2kih0DaUFFtB830WXsJjEFKrZufkH6scmEffGaKmZvnmxbC09qSow0qV12D1Hix0sfoeNcCpskvaEg%2BvEXG76BHSGfejrzUQUNGIvJ5YkAXqwPk3BPEsEh8TLbeX5P0XXO9OrMMbIo1YWgPnWxWXP2%2BpJy8iJGlNCpTxPn%2Bkh9JLZxU5KVzxE7ZzxR4d5AjDg1q7CBjqkAUkfDz9jtZDrihW5Y7SYE%2F%2BdU8YyeAAxOB1CMMysG6dMynWwinPfRoWCSSJbC0TCpjZaZmzjU2LfWRuMullF3W9Pqoya5H5kDcOpT%2FAo0GQhYGruZfBE3whQRxipi0Ab1gb6b5UMtR%2FyXDdNIox18jjZ8VxOCsGRDGtA4JNPYW04dHLsQkSBqLLOAL%2Bv1RIHklDwymwi4mH4lJYSn12E%2B56yaOgv&X-Amz-Signature=205b8f5386d6ce09e9c3937ee487e9d921d3e2aace57954c46f61177a93c9685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
