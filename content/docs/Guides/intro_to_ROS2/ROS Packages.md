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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUY2TVPR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzzIBephOor19t%2FhqM30PsD%2BgVfyspshbr70PxazxCXQIhALnXKCTyw%2BsR8QvnZbHgWad7yE4xhE%2BfZQAOUHxcU43AKv8DCBoQABoMNjM3NDIzMTgzODA1IgzTLXW0veDzr%2BnztOcq3APgSNfvsRe9XsWg3%2FQ2wQuFtRPrnOO71Vr3g%2B44UiJfUPpuml1jyUcXGHKkDUQ%2Bow1l7gvjYgaVcYqyZBNyWKhIF3cKzNvg%2F20OOck8tCxHKjanC6F2dVPooEoyAntzzU30w5vVUbs8eFcOY8ye6xGSteRfKtEfmGqJSr6GWzEMKs5Jg4yVwqkllK%2BxwIwi4fnGt5UU9mXA6eg2r57VryKCQ8wYLIvtd8YD6Fxd2MOCsvJiFE0mpTfUPUbSpuZ9Rg8RmnmEbeF7uTYL3bqbqZGqjngATcy3F8DuYbqNEkFhiYGhTD%2BDzh9zUTPRcmEQIzRoJX8DVLs7dNEzcPRlnnzFLAotwF51ZzkS1QAUsJqd7EYSf9TrxJBOgGwnFN3T2TjV2%2BAZT%2BKCMEYkbDx2t6DCbk1PN5QmQylmqmuf0UkQJ3s1co223pKoEaH1H8p%2Bx49DE455%2BlkNLvMwsLAL40rtdX7hYaKm5FD3JK50o%2Bk1GWO30PVHKoevxfJcKapu3zTotcl3XBunSBI6veWajQnhnQsjWjeFmdfOu23VojRRY%2FSbWTdwUyv8hrf58Qa8PNriSsHrcVR5835fy11OuIeaeq9n2PfAXGQyHdsSl%2FP5AADzbGxi3P6w9j1DoTDvut7ABjqkAcxmONgOdN2DvU40envLTn3H5wFXsiwR3%2BFLQDZEF5foCaQIgiKhjtt5qGJHbL4m1wbuSShnmdUARchtmNuIKl%2FTw%2BBqc9YYqTA2UHD5AnILaaCvqitPRaJGRa%2FayrLYcdWCbB5%2BIk6Jj4cLrVoGKKSt4mvXZP73DmhaTdUm7zJY0Zvg%2BE%2Buyl5pcrnVGeWbflwlVLPkVPuOqZVdiTq4YeIkGfef&X-Amz-Signature=6fd1008c7252b329253cbd86835855110942b067d89a31d5639b202799941c51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUY2TVPR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzzIBephOor19t%2FhqM30PsD%2BgVfyspshbr70PxazxCXQIhALnXKCTyw%2BsR8QvnZbHgWad7yE4xhE%2BfZQAOUHxcU43AKv8DCBoQABoMNjM3NDIzMTgzODA1IgzTLXW0veDzr%2BnztOcq3APgSNfvsRe9XsWg3%2FQ2wQuFtRPrnOO71Vr3g%2B44UiJfUPpuml1jyUcXGHKkDUQ%2Bow1l7gvjYgaVcYqyZBNyWKhIF3cKzNvg%2F20OOck8tCxHKjanC6F2dVPooEoyAntzzU30w5vVUbs8eFcOY8ye6xGSteRfKtEfmGqJSr6GWzEMKs5Jg4yVwqkllK%2BxwIwi4fnGt5UU9mXA6eg2r57VryKCQ8wYLIvtd8YD6Fxd2MOCsvJiFE0mpTfUPUbSpuZ9Rg8RmnmEbeF7uTYL3bqbqZGqjngATcy3F8DuYbqNEkFhiYGhTD%2BDzh9zUTPRcmEQIzRoJX8DVLs7dNEzcPRlnnzFLAotwF51ZzkS1QAUsJqd7EYSf9TrxJBOgGwnFN3T2TjV2%2BAZT%2BKCMEYkbDx2t6DCbk1PN5QmQylmqmuf0UkQJ3s1co223pKoEaH1H8p%2Bx49DE455%2BlkNLvMwsLAL40rtdX7hYaKm5FD3JK50o%2Bk1GWO30PVHKoevxfJcKapu3zTotcl3XBunSBI6veWajQnhnQsjWjeFmdfOu23VojRRY%2FSbWTdwUyv8hrf58Qa8PNriSsHrcVR5835fy11OuIeaeq9n2PfAXGQyHdsSl%2FP5AADzbGxi3P6w9j1DoTDvut7ABjqkAcxmONgOdN2DvU40envLTn3H5wFXsiwR3%2BFLQDZEF5foCaQIgiKhjtt5qGJHbL4m1wbuSShnmdUARchtmNuIKl%2FTw%2BBqc9YYqTA2UHD5AnILaaCvqitPRaJGRa%2FayrLYcdWCbB5%2BIk6Jj4cLrVoGKKSt4mvXZP73DmhaTdUm7zJY0Zvg%2BE%2Buyl5pcrnVGeWbflwlVLPkVPuOqZVdiTq4YeIkGfef&X-Amz-Signature=15378c0658d24326bb6c39a8f443befcb8f4e7c3f3d3f51fbb2feca341bc7f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUY2TVPR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzzIBephOor19t%2FhqM30PsD%2BgVfyspshbr70PxazxCXQIhALnXKCTyw%2BsR8QvnZbHgWad7yE4xhE%2BfZQAOUHxcU43AKv8DCBoQABoMNjM3NDIzMTgzODA1IgzTLXW0veDzr%2BnztOcq3APgSNfvsRe9XsWg3%2FQ2wQuFtRPrnOO71Vr3g%2B44UiJfUPpuml1jyUcXGHKkDUQ%2Bow1l7gvjYgaVcYqyZBNyWKhIF3cKzNvg%2F20OOck8tCxHKjanC6F2dVPooEoyAntzzU30w5vVUbs8eFcOY8ye6xGSteRfKtEfmGqJSr6GWzEMKs5Jg4yVwqkllK%2BxwIwi4fnGt5UU9mXA6eg2r57VryKCQ8wYLIvtd8YD6Fxd2MOCsvJiFE0mpTfUPUbSpuZ9Rg8RmnmEbeF7uTYL3bqbqZGqjngATcy3F8DuYbqNEkFhiYGhTD%2BDzh9zUTPRcmEQIzRoJX8DVLs7dNEzcPRlnnzFLAotwF51ZzkS1QAUsJqd7EYSf9TrxJBOgGwnFN3T2TjV2%2BAZT%2BKCMEYkbDx2t6DCbk1PN5QmQylmqmuf0UkQJ3s1co223pKoEaH1H8p%2Bx49DE455%2BlkNLvMwsLAL40rtdX7hYaKm5FD3JK50o%2Bk1GWO30PVHKoevxfJcKapu3zTotcl3XBunSBI6veWajQnhnQsjWjeFmdfOu23VojRRY%2FSbWTdwUyv8hrf58Qa8PNriSsHrcVR5835fy11OuIeaeq9n2PfAXGQyHdsSl%2FP5AADzbGxi3P6w9j1DoTDvut7ABjqkAcxmONgOdN2DvU40envLTn3H5wFXsiwR3%2BFLQDZEF5foCaQIgiKhjtt5qGJHbL4m1wbuSShnmdUARchtmNuIKl%2FTw%2BBqc9YYqTA2UHD5AnILaaCvqitPRaJGRa%2FayrLYcdWCbB5%2BIk6Jj4cLrVoGKKSt4mvXZP73DmhaTdUm7zJY0Zvg%2BE%2Buyl5pcrnVGeWbflwlVLPkVPuOqZVdiTq4YeIkGfef&X-Amz-Signature=0f5d6adeef7bbe1fad39a5f1fc13d003c15f6e9562221bd02f774711f130a672&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUY2TVPR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzzIBephOor19t%2FhqM30PsD%2BgVfyspshbr70PxazxCXQIhALnXKCTyw%2BsR8QvnZbHgWad7yE4xhE%2BfZQAOUHxcU43AKv8DCBoQABoMNjM3NDIzMTgzODA1IgzTLXW0veDzr%2BnztOcq3APgSNfvsRe9XsWg3%2FQ2wQuFtRPrnOO71Vr3g%2B44UiJfUPpuml1jyUcXGHKkDUQ%2Bow1l7gvjYgaVcYqyZBNyWKhIF3cKzNvg%2F20OOck8tCxHKjanC6F2dVPooEoyAntzzU30w5vVUbs8eFcOY8ye6xGSteRfKtEfmGqJSr6GWzEMKs5Jg4yVwqkllK%2BxwIwi4fnGt5UU9mXA6eg2r57VryKCQ8wYLIvtd8YD6Fxd2MOCsvJiFE0mpTfUPUbSpuZ9Rg8RmnmEbeF7uTYL3bqbqZGqjngATcy3F8DuYbqNEkFhiYGhTD%2BDzh9zUTPRcmEQIzRoJX8DVLs7dNEzcPRlnnzFLAotwF51ZzkS1QAUsJqd7EYSf9TrxJBOgGwnFN3T2TjV2%2BAZT%2BKCMEYkbDx2t6DCbk1PN5QmQylmqmuf0UkQJ3s1co223pKoEaH1H8p%2Bx49DE455%2BlkNLvMwsLAL40rtdX7hYaKm5FD3JK50o%2Bk1GWO30PVHKoevxfJcKapu3zTotcl3XBunSBI6veWajQnhnQsjWjeFmdfOu23VojRRY%2FSbWTdwUyv8hrf58Qa8PNriSsHrcVR5835fy11OuIeaeq9n2PfAXGQyHdsSl%2FP5AADzbGxi3P6w9j1DoTDvut7ABjqkAcxmONgOdN2DvU40envLTn3H5wFXsiwR3%2BFLQDZEF5foCaQIgiKhjtt5qGJHbL4m1wbuSShnmdUARchtmNuIKl%2FTw%2BBqc9YYqTA2UHD5AnILaaCvqitPRaJGRa%2FayrLYcdWCbB5%2BIk6Jj4cLrVoGKKSt4mvXZP73DmhaTdUm7zJY0Zvg%2BE%2Buyl5pcrnVGeWbflwlVLPkVPuOqZVdiTq4YeIkGfef&X-Amz-Signature=a48f7f09e06ee9a7bfbf7e2ba1291a33b8f2d0d6092dee24ce307133f49f6e60&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUY2TVPR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzzIBephOor19t%2FhqM30PsD%2BgVfyspshbr70PxazxCXQIhALnXKCTyw%2BsR8QvnZbHgWad7yE4xhE%2BfZQAOUHxcU43AKv8DCBoQABoMNjM3NDIzMTgzODA1IgzTLXW0veDzr%2BnztOcq3APgSNfvsRe9XsWg3%2FQ2wQuFtRPrnOO71Vr3g%2B44UiJfUPpuml1jyUcXGHKkDUQ%2Bow1l7gvjYgaVcYqyZBNyWKhIF3cKzNvg%2F20OOck8tCxHKjanC6F2dVPooEoyAntzzU30w5vVUbs8eFcOY8ye6xGSteRfKtEfmGqJSr6GWzEMKs5Jg4yVwqkllK%2BxwIwi4fnGt5UU9mXA6eg2r57VryKCQ8wYLIvtd8YD6Fxd2MOCsvJiFE0mpTfUPUbSpuZ9Rg8RmnmEbeF7uTYL3bqbqZGqjngATcy3F8DuYbqNEkFhiYGhTD%2BDzh9zUTPRcmEQIzRoJX8DVLs7dNEzcPRlnnzFLAotwF51ZzkS1QAUsJqd7EYSf9TrxJBOgGwnFN3T2TjV2%2BAZT%2BKCMEYkbDx2t6DCbk1PN5QmQylmqmuf0UkQJ3s1co223pKoEaH1H8p%2Bx49DE455%2BlkNLvMwsLAL40rtdX7hYaKm5FD3JK50o%2Bk1GWO30PVHKoevxfJcKapu3zTotcl3XBunSBI6veWajQnhnQsjWjeFmdfOu23VojRRY%2FSbWTdwUyv8hrf58Qa8PNriSsHrcVR5835fy11OuIeaeq9n2PfAXGQyHdsSl%2FP5AADzbGxi3P6w9j1DoTDvut7ABjqkAcxmONgOdN2DvU40envLTn3H5wFXsiwR3%2BFLQDZEF5foCaQIgiKhjtt5qGJHbL4m1wbuSShnmdUARchtmNuIKl%2FTw%2BBqc9YYqTA2UHD5AnILaaCvqitPRaJGRa%2FayrLYcdWCbB5%2BIk6Jj4cLrVoGKKSt4mvXZP73DmhaTdUm7zJY0Zvg%2BE%2Buyl5pcrnVGeWbflwlVLPkVPuOqZVdiTq4YeIkGfef&X-Amz-Signature=1c8c528978936bc48e7392276b9000b3f4c7522eff27a3211653f69aaec4930b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUY2TVPR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzzIBephOor19t%2FhqM30PsD%2BgVfyspshbr70PxazxCXQIhALnXKCTyw%2BsR8QvnZbHgWad7yE4xhE%2BfZQAOUHxcU43AKv8DCBoQABoMNjM3NDIzMTgzODA1IgzTLXW0veDzr%2BnztOcq3APgSNfvsRe9XsWg3%2FQ2wQuFtRPrnOO71Vr3g%2B44UiJfUPpuml1jyUcXGHKkDUQ%2Bow1l7gvjYgaVcYqyZBNyWKhIF3cKzNvg%2F20OOck8tCxHKjanC6F2dVPooEoyAntzzU30w5vVUbs8eFcOY8ye6xGSteRfKtEfmGqJSr6GWzEMKs5Jg4yVwqkllK%2BxwIwi4fnGt5UU9mXA6eg2r57VryKCQ8wYLIvtd8YD6Fxd2MOCsvJiFE0mpTfUPUbSpuZ9Rg8RmnmEbeF7uTYL3bqbqZGqjngATcy3F8DuYbqNEkFhiYGhTD%2BDzh9zUTPRcmEQIzRoJX8DVLs7dNEzcPRlnnzFLAotwF51ZzkS1QAUsJqd7EYSf9TrxJBOgGwnFN3T2TjV2%2BAZT%2BKCMEYkbDx2t6DCbk1PN5QmQylmqmuf0UkQJ3s1co223pKoEaH1H8p%2Bx49DE455%2BlkNLvMwsLAL40rtdX7hYaKm5FD3JK50o%2Bk1GWO30PVHKoevxfJcKapu3zTotcl3XBunSBI6veWajQnhnQsjWjeFmdfOu23VojRRY%2FSbWTdwUyv8hrf58Qa8PNriSsHrcVR5835fy11OuIeaeq9n2PfAXGQyHdsSl%2FP5AADzbGxi3P6w9j1DoTDvut7ABjqkAcxmONgOdN2DvU40envLTn3H5wFXsiwR3%2BFLQDZEF5foCaQIgiKhjtt5qGJHbL4m1wbuSShnmdUARchtmNuIKl%2FTw%2BBqc9YYqTA2UHD5AnILaaCvqitPRaJGRa%2FayrLYcdWCbB5%2BIk6Jj4cLrVoGKKSt4mvXZP73DmhaTdUm7zJY0Zvg%2BE%2Buyl5pcrnVGeWbflwlVLPkVPuOqZVdiTq4YeIkGfef&X-Amz-Signature=01f6303bc00962084231ad392c81a67f065578a87f4eac268651131ccc46f822&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUY2TVPR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzzIBephOor19t%2FhqM30PsD%2BgVfyspshbr70PxazxCXQIhALnXKCTyw%2BsR8QvnZbHgWad7yE4xhE%2BfZQAOUHxcU43AKv8DCBoQABoMNjM3NDIzMTgzODA1IgzTLXW0veDzr%2BnztOcq3APgSNfvsRe9XsWg3%2FQ2wQuFtRPrnOO71Vr3g%2B44UiJfUPpuml1jyUcXGHKkDUQ%2Bow1l7gvjYgaVcYqyZBNyWKhIF3cKzNvg%2F20OOck8tCxHKjanC6F2dVPooEoyAntzzU30w5vVUbs8eFcOY8ye6xGSteRfKtEfmGqJSr6GWzEMKs5Jg4yVwqkllK%2BxwIwi4fnGt5UU9mXA6eg2r57VryKCQ8wYLIvtd8YD6Fxd2MOCsvJiFE0mpTfUPUbSpuZ9Rg8RmnmEbeF7uTYL3bqbqZGqjngATcy3F8DuYbqNEkFhiYGhTD%2BDzh9zUTPRcmEQIzRoJX8DVLs7dNEzcPRlnnzFLAotwF51ZzkS1QAUsJqd7EYSf9TrxJBOgGwnFN3T2TjV2%2BAZT%2BKCMEYkbDx2t6DCbk1PN5QmQylmqmuf0UkQJ3s1co223pKoEaH1H8p%2Bx49DE455%2BlkNLvMwsLAL40rtdX7hYaKm5FD3JK50o%2Bk1GWO30PVHKoevxfJcKapu3zTotcl3XBunSBI6veWajQnhnQsjWjeFmdfOu23VojRRY%2FSbWTdwUyv8hrf58Qa8PNriSsHrcVR5835fy11OuIeaeq9n2PfAXGQyHdsSl%2FP5AADzbGxi3P6w9j1DoTDvut7ABjqkAcxmONgOdN2DvU40envLTn3H5wFXsiwR3%2BFLQDZEF5foCaQIgiKhjtt5qGJHbL4m1wbuSShnmdUARchtmNuIKl%2FTw%2BBqc9YYqTA2UHD5AnILaaCvqitPRaJGRa%2FayrLYcdWCbB5%2BIk6Jj4cLrVoGKKSt4mvXZP73DmhaTdUm7zJY0Zvg%2BE%2Buyl5pcrnVGeWbflwlVLPkVPuOqZVdiTq4YeIkGfef&X-Amz-Signature=dc2e415d7c828ea0bed94fc12be68d5b33ff3bb7cda63bce18bc76ca26ce5f34&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
