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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL3R3G3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEb%2BjilGP5oc7Tur7oahaQr9rGAjzZsz4shOlEEUJ5gOAiAtbLdkfTPyUv5MSE%2FzncGHXAGBI%2BpNuZfSewjPZbgtRiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0SGKi8mahJcQlvKKtwDEdxWgEhZCd3qElwKle%2BY6zfO4a7t%2FTp2XNWUPlX6Gitjo9gEiom2cz0RLs0XT2WytKwqvZfngy1Sp3Mvr3444gHpkm%2B2Ew4kQxmlNbUCxgZmV%2Bes%2BC3ePwlEnbrlH%2B2eQ4Jlv1sOrbZ2BXj%2FkkzBK8%2Bde7CvLXhG9fajmuNWAOoxJLkz2O0X79NX9tkZz38USH%2FO3qxevi0xvOQURdSYQ%2FD6EfK5jniO7r74DPun0MhkkN6EQwJHx6NODH%2F0gkqdWzd3nFFEV9M9B%2BUsmvVYV14m8hOPWnLPCfKqXT12fxoil2JL9NGqsYixlBS7MoD6cG4UKOuPkn4x5sluhj6zBeXGQ4lOFoZO%2Bj0lXp7w82Khn8dsiI8Gqj0tSvxErLW7yWdnICOzUXWhnUjkcSpxt5mLkGehmuN5yxv2dbKA3PEw%2BRU%2BRXqOvMtm0p2UAERJDG4A7xSjcdD2z5CNWTKF%2FCc%2FpbDzpoNdjRDzkD98tdGxkejQYlZpDIPBS31T7DFQtIjgzantnl%2FvJVk723I0evWNzSbYLbVVS2G0GQb2BuMrHPx6CSfLwCbegOxiZRl8lMaqR%2FQmr%2BvPUR0cZBJ4WBeWr3bIJraaUY%2FF9r9XYU3wOrbFhGHcKmuUAycwjJ3ywQY6pgEMV2o%2FPNcI%2FQrstxe%2BjFnuX95ihpnlCYrCgzP45Z4XcxhK7VHkdTKsTI1taKufR1Z167piEh%2Fh8dILle1mmaFz4TCyju4%2BAEwgpHzgiL%2FuqMsHaPYm5RPAcc%2FxT5smawaECDCd8DT6g23SybpwQOyCAY3CdYiMvv4G62Su0peniBKwURfxdyZ6FnYUgsayN95lb1XImlaujUjPb67MVG3mJHFJfMgB&X-Amz-Signature=5c12e02181823db2d629029c609db0a8fed252fc6f8f95bc3e45a48fe513a9d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL3R3G3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEb%2BjilGP5oc7Tur7oahaQr9rGAjzZsz4shOlEEUJ5gOAiAtbLdkfTPyUv5MSE%2FzncGHXAGBI%2BpNuZfSewjPZbgtRiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0SGKi8mahJcQlvKKtwDEdxWgEhZCd3qElwKle%2BY6zfO4a7t%2FTp2XNWUPlX6Gitjo9gEiom2cz0RLs0XT2WytKwqvZfngy1Sp3Mvr3444gHpkm%2B2Ew4kQxmlNbUCxgZmV%2Bes%2BC3ePwlEnbrlH%2B2eQ4Jlv1sOrbZ2BXj%2FkkzBK8%2Bde7CvLXhG9fajmuNWAOoxJLkz2O0X79NX9tkZz38USH%2FO3qxevi0xvOQURdSYQ%2FD6EfK5jniO7r74DPun0MhkkN6EQwJHx6NODH%2F0gkqdWzd3nFFEV9M9B%2BUsmvVYV14m8hOPWnLPCfKqXT12fxoil2JL9NGqsYixlBS7MoD6cG4UKOuPkn4x5sluhj6zBeXGQ4lOFoZO%2Bj0lXp7w82Khn8dsiI8Gqj0tSvxErLW7yWdnICOzUXWhnUjkcSpxt5mLkGehmuN5yxv2dbKA3PEw%2BRU%2BRXqOvMtm0p2UAERJDG4A7xSjcdD2z5CNWTKF%2FCc%2FpbDzpoNdjRDzkD98tdGxkejQYlZpDIPBS31T7DFQtIjgzantnl%2FvJVk723I0evWNzSbYLbVVS2G0GQb2BuMrHPx6CSfLwCbegOxiZRl8lMaqR%2FQmr%2BvPUR0cZBJ4WBeWr3bIJraaUY%2FF9r9XYU3wOrbFhGHcKmuUAycwjJ3ywQY6pgEMV2o%2FPNcI%2FQrstxe%2BjFnuX95ihpnlCYrCgzP45Z4XcxhK7VHkdTKsTI1taKufR1Z167piEh%2Fh8dILle1mmaFz4TCyju4%2BAEwgpHzgiL%2FuqMsHaPYm5RPAcc%2FxT5smawaECDCd8DT6g23SybpwQOyCAY3CdYiMvv4G62Su0peniBKwURfxdyZ6FnYUgsayN95lb1XImlaujUjPb67MVG3mJHFJfMgB&X-Amz-Signature=e671e1ad37c29fc77e412dc57edecc39059ea1e7bbc14ff16487f18f21ddb0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL3R3G3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEb%2BjilGP5oc7Tur7oahaQr9rGAjzZsz4shOlEEUJ5gOAiAtbLdkfTPyUv5MSE%2FzncGHXAGBI%2BpNuZfSewjPZbgtRiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0SGKi8mahJcQlvKKtwDEdxWgEhZCd3qElwKle%2BY6zfO4a7t%2FTp2XNWUPlX6Gitjo9gEiom2cz0RLs0XT2WytKwqvZfngy1Sp3Mvr3444gHpkm%2B2Ew4kQxmlNbUCxgZmV%2Bes%2BC3ePwlEnbrlH%2B2eQ4Jlv1sOrbZ2BXj%2FkkzBK8%2Bde7CvLXhG9fajmuNWAOoxJLkz2O0X79NX9tkZz38USH%2FO3qxevi0xvOQURdSYQ%2FD6EfK5jniO7r74DPun0MhkkN6EQwJHx6NODH%2F0gkqdWzd3nFFEV9M9B%2BUsmvVYV14m8hOPWnLPCfKqXT12fxoil2JL9NGqsYixlBS7MoD6cG4UKOuPkn4x5sluhj6zBeXGQ4lOFoZO%2Bj0lXp7w82Khn8dsiI8Gqj0tSvxErLW7yWdnICOzUXWhnUjkcSpxt5mLkGehmuN5yxv2dbKA3PEw%2BRU%2BRXqOvMtm0p2UAERJDG4A7xSjcdD2z5CNWTKF%2FCc%2FpbDzpoNdjRDzkD98tdGxkejQYlZpDIPBS31T7DFQtIjgzantnl%2FvJVk723I0evWNzSbYLbVVS2G0GQb2BuMrHPx6CSfLwCbegOxiZRl8lMaqR%2FQmr%2BvPUR0cZBJ4WBeWr3bIJraaUY%2FF9r9XYU3wOrbFhGHcKmuUAycwjJ3ywQY6pgEMV2o%2FPNcI%2FQrstxe%2BjFnuX95ihpnlCYrCgzP45Z4XcxhK7VHkdTKsTI1taKufR1Z167piEh%2Fh8dILle1mmaFz4TCyju4%2BAEwgpHzgiL%2FuqMsHaPYm5RPAcc%2FxT5smawaECDCd8DT6g23SybpwQOyCAY3CdYiMvv4G62Su0peniBKwURfxdyZ6FnYUgsayN95lb1XImlaujUjPb67MVG3mJHFJfMgB&X-Amz-Signature=3f0277a0b9d69212bf1e3bbb4797f1ec35ae328bf4bdaadc594e832006e0e0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL3R3G3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEb%2BjilGP5oc7Tur7oahaQr9rGAjzZsz4shOlEEUJ5gOAiAtbLdkfTPyUv5MSE%2FzncGHXAGBI%2BpNuZfSewjPZbgtRiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0SGKi8mahJcQlvKKtwDEdxWgEhZCd3qElwKle%2BY6zfO4a7t%2FTp2XNWUPlX6Gitjo9gEiom2cz0RLs0XT2WytKwqvZfngy1Sp3Mvr3444gHpkm%2B2Ew4kQxmlNbUCxgZmV%2Bes%2BC3ePwlEnbrlH%2B2eQ4Jlv1sOrbZ2BXj%2FkkzBK8%2Bde7CvLXhG9fajmuNWAOoxJLkz2O0X79NX9tkZz38USH%2FO3qxevi0xvOQURdSYQ%2FD6EfK5jniO7r74DPun0MhkkN6EQwJHx6NODH%2F0gkqdWzd3nFFEV9M9B%2BUsmvVYV14m8hOPWnLPCfKqXT12fxoil2JL9NGqsYixlBS7MoD6cG4UKOuPkn4x5sluhj6zBeXGQ4lOFoZO%2Bj0lXp7w82Khn8dsiI8Gqj0tSvxErLW7yWdnICOzUXWhnUjkcSpxt5mLkGehmuN5yxv2dbKA3PEw%2BRU%2BRXqOvMtm0p2UAERJDG4A7xSjcdD2z5CNWTKF%2FCc%2FpbDzpoNdjRDzkD98tdGxkejQYlZpDIPBS31T7DFQtIjgzantnl%2FvJVk723I0evWNzSbYLbVVS2G0GQb2BuMrHPx6CSfLwCbegOxiZRl8lMaqR%2FQmr%2BvPUR0cZBJ4WBeWr3bIJraaUY%2FF9r9XYU3wOrbFhGHcKmuUAycwjJ3ywQY6pgEMV2o%2FPNcI%2FQrstxe%2BjFnuX95ihpnlCYrCgzP45Z4XcxhK7VHkdTKsTI1taKufR1Z167piEh%2Fh8dILle1mmaFz4TCyju4%2BAEwgpHzgiL%2FuqMsHaPYm5RPAcc%2FxT5smawaECDCd8DT6g23SybpwQOyCAY3CdYiMvv4G62Su0peniBKwURfxdyZ6FnYUgsayN95lb1XImlaujUjPb67MVG3mJHFJfMgB&X-Amz-Signature=3fb22529df01c08b2979b2e8294db075357f721a01527e7ab9f72556e7770eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL3R3G3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEb%2BjilGP5oc7Tur7oahaQr9rGAjzZsz4shOlEEUJ5gOAiAtbLdkfTPyUv5MSE%2FzncGHXAGBI%2BpNuZfSewjPZbgtRiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0SGKi8mahJcQlvKKtwDEdxWgEhZCd3qElwKle%2BY6zfO4a7t%2FTp2XNWUPlX6Gitjo9gEiom2cz0RLs0XT2WytKwqvZfngy1Sp3Mvr3444gHpkm%2B2Ew4kQxmlNbUCxgZmV%2Bes%2BC3ePwlEnbrlH%2B2eQ4Jlv1sOrbZ2BXj%2FkkzBK8%2Bde7CvLXhG9fajmuNWAOoxJLkz2O0X79NX9tkZz38USH%2FO3qxevi0xvOQURdSYQ%2FD6EfK5jniO7r74DPun0MhkkN6EQwJHx6NODH%2F0gkqdWzd3nFFEV9M9B%2BUsmvVYV14m8hOPWnLPCfKqXT12fxoil2JL9NGqsYixlBS7MoD6cG4UKOuPkn4x5sluhj6zBeXGQ4lOFoZO%2Bj0lXp7w82Khn8dsiI8Gqj0tSvxErLW7yWdnICOzUXWhnUjkcSpxt5mLkGehmuN5yxv2dbKA3PEw%2BRU%2BRXqOvMtm0p2UAERJDG4A7xSjcdD2z5CNWTKF%2FCc%2FpbDzpoNdjRDzkD98tdGxkejQYlZpDIPBS31T7DFQtIjgzantnl%2FvJVk723I0evWNzSbYLbVVS2G0GQb2BuMrHPx6CSfLwCbegOxiZRl8lMaqR%2FQmr%2BvPUR0cZBJ4WBeWr3bIJraaUY%2FF9r9XYU3wOrbFhGHcKmuUAycwjJ3ywQY6pgEMV2o%2FPNcI%2FQrstxe%2BjFnuX95ihpnlCYrCgzP45Z4XcxhK7VHkdTKsTI1taKufR1Z167piEh%2Fh8dILle1mmaFz4TCyju4%2BAEwgpHzgiL%2FuqMsHaPYm5RPAcc%2FxT5smawaECDCd8DT6g23SybpwQOyCAY3CdYiMvv4G62Su0peniBKwURfxdyZ6FnYUgsayN95lb1XImlaujUjPb67MVG3mJHFJfMgB&X-Amz-Signature=215a92ad8892584a1532e9cd8c8b84be65f82f46d434f7d89d26f850c3ec2318&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL3R3G3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEb%2BjilGP5oc7Tur7oahaQr9rGAjzZsz4shOlEEUJ5gOAiAtbLdkfTPyUv5MSE%2FzncGHXAGBI%2BpNuZfSewjPZbgtRiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0SGKi8mahJcQlvKKtwDEdxWgEhZCd3qElwKle%2BY6zfO4a7t%2FTp2XNWUPlX6Gitjo9gEiom2cz0RLs0XT2WytKwqvZfngy1Sp3Mvr3444gHpkm%2B2Ew4kQxmlNbUCxgZmV%2Bes%2BC3ePwlEnbrlH%2B2eQ4Jlv1sOrbZ2BXj%2FkkzBK8%2Bde7CvLXhG9fajmuNWAOoxJLkz2O0X79NX9tkZz38USH%2FO3qxevi0xvOQURdSYQ%2FD6EfK5jniO7r74DPun0MhkkN6EQwJHx6NODH%2F0gkqdWzd3nFFEV9M9B%2BUsmvVYV14m8hOPWnLPCfKqXT12fxoil2JL9NGqsYixlBS7MoD6cG4UKOuPkn4x5sluhj6zBeXGQ4lOFoZO%2Bj0lXp7w82Khn8dsiI8Gqj0tSvxErLW7yWdnICOzUXWhnUjkcSpxt5mLkGehmuN5yxv2dbKA3PEw%2BRU%2BRXqOvMtm0p2UAERJDG4A7xSjcdD2z5CNWTKF%2FCc%2FpbDzpoNdjRDzkD98tdGxkejQYlZpDIPBS31T7DFQtIjgzantnl%2FvJVk723I0evWNzSbYLbVVS2G0GQb2BuMrHPx6CSfLwCbegOxiZRl8lMaqR%2FQmr%2BvPUR0cZBJ4WBeWr3bIJraaUY%2FF9r9XYU3wOrbFhGHcKmuUAycwjJ3ywQY6pgEMV2o%2FPNcI%2FQrstxe%2BjFnuX95ihpnlCYrCgzP45Z4XcxhK7VHkdTKsTI1taKufR1Z167piEh%2Fh8dILle1mmaFz4TCyju4%2BAEwgpHzgiL%2FuqMsHaPYm5RPAcc%2FxT5smawaECDCd8DT6g23SybpwQOyCAY3CdYiMvv4G62Su0peniBKwURfxdyZ6FnYUgsayN95lb1XImlaujUjPb67MVG3mJHFJfMgB&X-Amz-Signature=e80a948648d858ae130a8cf5d248c76ac74149d2b8a35fd242545578b37b9837&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL3R3G3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEb%2BjilGP5oc7Tur7oahaQr9rGAjzZsz4shOlEEUJ5gOAiAtbLdkfTPyUv5MSE%2FzncGHXAGBI%2BpNuZfSewjPZbgtRiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0SGKi8mahJcQlvKKtwDEdxWgEhZCd3qElwKle%2BY6zfO4a7t%2FTp2XNWUPlX6Gitjo9gEiom2cz0RLs0XT2WytKwqvZfngy1Sp3Mvr3444gHpkm%2B2Ew4kQxmlNbUCxgZmV%2Bes%2BC3ePwlEnbrlH%2B2eQ4Jlv1sOrbZ2BXj%2FkkzBK8%2Bde7CvLXhG9fajmuNWAOoxJLkz2O0X79NX9tkZz38USH%2FO3qxevi0xvOQURdSYQ%2FD6EfK5jniO7r74DPun0MhkkN6EQwJHx6NODH%2F0gkqdWzd3nFFEV9M9B%2BUsmvVYV14m8hOPWnLPCfKqXT12fxoil2JL9NGqsYixlBS7MoD6cG4UKOuPkn4x5sluhj6zBeXGQ4lOFoZO%2Bj0lXp7w82Khn8dsiI8Gqj0tSvxErLW7yWdnICOzUXWhnUjkcSpxt5mLkGehmuN5yxv2dbKA3PEw%2BRU%2BRXqOvMtm0p2UAERJDG4A7xSjcdD2z5CNWTKF%2FCc%2FpbDzpoNdjRDzkD98tdGxkejQYlZpDIPBS31T7DFQtIjgzantnl%2FvJVk723I0evWNzSbYLbVVS2G0GQb2BuMrHPx6CSfLwCbegOxiZRl8lMaqR%2FQmr%2BvPUR0cZBJ4WBeWr3bIJraaUY%2FF9r9XYU3wOrbFhGHcKmuUAycwjJ3ywQY6pgEMV2o%2FPNcI%2FQrstxe%2BjFnuX95ihpnlCYrCgzP45Z4XcxhK7VHkdTKsTI1taKufR1Z167piEh%2Fh8dILle1mmaFz4TCyju4%2BAEwgpHzgiL%2FuqMsHaPYm5RPAcc%2FxT5smawaECDCd8DT6g23SybpwQOyCAY3CdYiMvv4G62Su0peniBKwURfxdyZ6FnYUgsayN95lb1XImlaujUjPb67MVG3mJHFJfMgB&X-Amz-Signature=e02cff4d9b6710b86288c783117103ca907c97e20fb168f35fe01e2aadb8e11f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
