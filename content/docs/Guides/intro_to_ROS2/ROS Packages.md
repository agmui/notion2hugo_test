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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WEB5CJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXMecFC9KisDdN2B3UNzlUblPWHLwcSH9bZuKNkhVegIhAMlGU%2Bm5%2F2bx5uPPK3Zz1twSkyG3AUI7BXF33sUJGF9YKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhCfFbbb%2BpnAIuub0q3APaXgJP6kyg6w3PrvHsxOYpS91mnhng7x9mojAl31MjeWauUPz2dBWjoVyJ6oyTD4aNP22v0DdVaNqwzbhf9VSi0UzB1pUjVLyU5q5lJAMF%2FZcQfW6x9%2BNSAJnjYIe7QZn1wpJoFuGji9lC3xSYW4YwvS93q%2Fbo7GtYkje%2FRP3msZZ6x9rrOSbdsHDJ0770G0MCSwKr3%2F%2BnoUZFB9ol90uj0aXX1FQsOtDQBnB87UZrGWIcOmNWbVFWelMeJe7nkBzmgNgOPDsRTuyC3yQQYU444Sof8y6OTrv%2Bk4lw6TyQ3HLvSv1mqPDrboEPLbcwSYa0fIzOTnGh30wWCfpUe6QK4ozGg7fbpKoNjRFan61P0ShP6Md2pwCOoIFDROEpQYsmKhyJi2LZIg1AJUYEpJdWaetW0Dg3p6qWp69UaI7zMtTJnAmpfktXMR7ffn1TR%2F8QQu7M5ihGEtCEYIq%2BXh7WEYIS0kuMfpP645e7Lhk1EZ%2FhjZbNWACgLofMuyfOlnCmVTWok5Mmvh9T4pZKyRkGKRWszFvUWXW5Wf40lWka2j1CAKEkuTcIh8JAck06dWmExg6oHNkBltfl1UO5VaeFaxDUYAaBV5V7rN0%2F0pRwKFmxU%2BQSL1iYsIz2JzDNp7PABjqkAWSbScwrhtadQDO2m2InQHouw9z3GQ2TnsSRP4GdUTAIWrcPCvLcj2tsTtC4bcjkxFYNhcyeaCVZyby6fbCslQFsSqBtI4fG5b7R7GKMphMlpHFk2mZMWN3WP4Jlva3YgmC9doflVzsKgexrLoMkukVXqnKqoPgCH7rHezKnx8zYakpa7SFVKeVusmdU%2BVjAKYlWitBH7NDxthleUVsIscM4TVd5&X-Amz-Signature=004428202723d470f9ab85ca717da98eb6ecb3fc3400f3797ca05111810f3985&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WEB5CJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXMecFC9KisDdN2B3UNzlUblPWHLwcSH9bZuKNkhVegIhAMlGU%2Bm5%2F2bx5uPPK3Zz1twSkyG3AUI7BXF33sUJGF9YKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhCfFbbb%2BpnAIuub0q3APaXgJP6kyg6w3PrvHsxOYpS91mnhng7x9mojAl31MjeWauUPz2dBWjoVyJ6oyTD4aNP22v0DdVaNqwzbhf9VSi0UzB1pUjVLyU5q5lJAMF%2FZcQfW6x9%2BNSAJnjYIe7QZn1wpJoFuGji9lC3xSYW4YwvS93q%2Fbo7GtYkje%2FRP3msZZ6x9rrOSbdsHDJ0770G0MCSwKr3%2F%2BnoUZFB9ol90uj0aXX1FQsOtDQBnB87UZrGWIcOmNWbVFWelMeJe7nkBzmgNgOPDsRTuyC3yQQYU444Sof8y6OTrv%2Bk4lw6TyQ3HLvSv1mqPDrboEPLbcwSYa0fIzOTnGh30wWCfpUe6QK4ozGg7fbpKoNjRFan61P0ShP6Md2pwCOoIFDROEpQYsmKhyJi2LZIg1AJUYEpJdWaetW0Dg3p6qWp69UaI7zMtTJnAmpfktXMR7ffn1TR%2F8QQu7M5ihGEtCEYIq%2BXh7WEYIS0kuMfpP645e7Lhk1EZ%2FhjZbNWACgLofMuyfOlnCmVTWok5Mmvh9T4pZKyRkGKRWszFvUWXW5Wf40lWka2j1CAKEkuTcIh8JAck06dWmExg6oHNkBltfl1UO5VaeFaxDUYAaBV5V7rN0%2F0pRwKFmxU%2BQSL1iYsIz2JzDNp7PABjqkAWSbScwrhtadQDO2m2InQHouw9z3GQ2TnsSRP4GdUTAIWrcPCvLcj2tsTtC4bcjkxFYNhcyeaCVZyby6fbCslQFsSqBtI4fG5b7R7GKMphMlpHFk2mZMWN3WP4Jlva3YgmC9doflVzsKgexrLoMkukVXqnKqoPgCH7rHezKnx8zYakpa7SFVKeVusmdU%2BVjAKYlWitBH7NDxthleUVsIscM4TVd5&X-Amz-Signature=7abfbfb64631c04f57e9d539217d1cc229284655f6d41a20189392e9ce80a03a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WEB5CJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXMecFC9KisDdN2B3UNzlUblPWHLwcSH9bZuKNkhVegIhAMlGU%2Bm5%2F2bx5uPPK3Zz1twSkyG3AUI7BXF33sUJGF9YKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhCfFbbb%2BpnAIuub0q3APaXgJP6kyg6w3PrvHsxOYpS91mnhng7x9mojAl31MjeWauUPz2dBWjoVyJ6oyTD4aNP22v0DdVaNqwzbhf9VSi0UzB1pUjVLyU5q5lJAMF%2FZcQfW6x9%2BNSAJnjYIe7QZn1wpJoFuGji9lC3xSYW4YwvS93q%2Fbo7GtYkje%2FRP3msZZ6x9rrOSbdsHDJ0770G0MCSwKr3%2F%2BnoUZFB9ol90uj0aXX1FQsOtDQBnB87UZrGWIcOmNWbVFWelMeJe7nkBzmgNgOPDsRTuyC3yQQYU444Sof8y6OTrv%2Bk4lw6TyQ3HLvSv1mqPDrboEPLbcwSYa0fIzOTnGh30wWCfpUe6QK4ozGg7fbpKoNjRFan61P0ShP6Md2pwCOoIFDROEpQYsmKhyJi2LZIg1AJUYEpJdWaetW0Dg3p6qWp69UaI7zMtTJnAmpfktXMR7ffn1TR%2F8QQu7M5ihGEtCEYIq%2BXh7WEYIS0kuMfpP645e7Lhk1EZ%2FhjZbNWACgLofMuyfOlnCmVTWok5Mmvh9T4pZKyRkGKRWszFvUWXW5Wf40lWka2j1CAKEkuTcIh8JAck06dWmExg6oHNkBltfl1UO5VaeFaxDUYAaBV5V7rN0%2F0pRwKFmxU%2BQSL1iYsIz2JzDNp7PABjqkAWSbScwrhtadQDO2m2InQHouw9z3GQ2TnsSRP4GdUTAIWrcPCvLcj2tsTtC4bcjkxFYNhcyeaCVZyby6fbCslQFsSqBtI4fG5b7R7GKMphMlpHFk2mZMWN3WP4Jlva3YgmC9doflVzsKgexrLoMkukVXqnKqoPgCH7rHezKnx8zYakpa7SFVKeVusmdU%2BVjAKYlWitBH7NDxthleUVsIscM4TVd5&X-Amz-Signature=1e552dcc95f4111e666c2c10be8a91291b5f0a2016c5ff5a92d26475019594bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WEB5CJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXMecFC9KisDdN2B3UNzlUblPWHLwcSH9bZuKNkhVegIhAMlGU%2Bm5%2F2bx5uPPK3Zz1twSkyG3AUI7BXF33sUJGF9YKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhCfFbbb%2BpnAIuub0q3APaXgJP6kyg6w3PrvHsxOYpS91mnhng7x9mojAl31MjeWauUPz2dBWjoVyJ6oyTD4aNP22v0DdVaNqwzbhf9VSi0UzB1pUjVLyU5q5lJAMF%2FZcQfW6x9%2BNSAJnjYIe7QZn1wpJoFuGji9lC3xSYW4YwvS93q%2Fbo7GtYkje%2FRP3msZZ6x9rrOSbdsHDJ0770G0MCSwKr3%2F%2BnoUZFB9ol90uj0aXX1FQsOtDQBnB87UZrGWIcOmNWbVFWelMeJe7nkBzmgNgOPDsRTuyC3yQQYU444Sof8y6OTrv%2Bk4lw6TyQ3HLvSv1mqPDrboEPLbcwSYa0fIzOTnGh30wWCfpUe6QK4ozGg7fbpKoNjRFan61P0ShP6Md2pwCOoIFDROEpQYsmKhyJi2LZIg1AJUYEpJdWaetW0Dg3p6qWp69UaI7zMtTJnAmpfktXMR7ffn1TR%2F8QQu7M5ihGEtCEYIq%2BXh7WEYIS0kuMfpP645e7Lhk1EZ%2FhjZbNWACgLofMuyfOlnCmVTWok5Mmvh9T4pZKyRkGKRWszFvUWXW5Wf40lWka2j1CAKEkuTcIh8JAck06dWmExg6oHNkBltfl1UO5VaeFaxDUYAaBV5V7rN0%2F0pRwKFmxU%2BQSL1iYsIz2JzDNp7PABjqkAWSbScwrhtadQDO2m2InQHouw9z3GQ2TnsSRP4GdUTAIWrcPCvLcj2tsTtC4bcjkxFYNhcyeaCVZyby6fbCslQFsSqBtI4fG5b7R7GKMphMlpHFk2mZMWN3WP4Jlva3YgmC9doflVzsKgexrLoMkukVXqnKqoPgCH7rHezKnx8zYakpa7SFVKeVusmdU%2BVjAKYlWitBH7NDxthleUVsIscM4TVd5&X-Amz-Signature=7d86147c76abc54c65e85a7519cbec59c71ed57b30f4b97e6ad665d040283769&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WEB5CJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXMecFC9KisDdN2B3UNzlUblPWHLwcSH9bZuKNkhVegIhAMlGU%2Bm5%2F2bx5uPPK3Zz1twSkyG3AUI7BXF33sUJGF9YKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhCfFbbb%2BpnAIuub0q3APaXgJP6kyg6w3PrvHsxOYpS91mnhng7x9mojAl31MjeWauUPz2dBWjoVyJ6oyTD4aNP22v0DdVaNqwzbhf9VSi0UzB1pUjVLyU5q5lJAMF%2FZcQfW6x9%2BNSAJnjYIe7QZn1wpJoFuGji9lC3xSYW4YwvS93q%2Fbo7GtYkje%2FRP3msZZ6x9rrOSbdsHDJ0770G0MCSwKr3%2F%2BnoUZFB9ol90uj0aXX1FQsOtDQBnB87UZrGWIcOmNWbVFWelMeJe7nkBzmgNgOPDsRTuyC3yQQYU444Sof8y6OTrv%2Bk4lw6TyQ3HLvSv1mqPDrboEPLbcwSYa0fIzOTnGh30wWCfpUe6QK4ozGg7fbpKoNjRFan61P0ShP6Md2pwCOoIFDROEpQYsmKhyJi2LZIg1AJUYEpJdWaetW0Dg3p6qWp69UaI7zMtTJnAmpfktXMR7ffn1TR%2F8QQu7M5ihGEtCEYIq%2BXh7WEYIS0kuMfpP645e7Lhk1EZ%2FhjZbNWACgLofMuyfOlnCmVTWok5Mmvh9T4pZKyRkGKRWszFvUWXW5Wf40lWka2j1CAKEkuTcIh8JAck06dWmExg6oHNkBltfl1UO5VaeFaxDUYAaBV5V7rN0%2F0pRwKFmxU%2BQSL1iYsIz2JzDNp7PABjqkAWSbScwrhtadQDO2m2InQHouw9z3GQ2TnsSRP4GdUTAIWrcPCvLcj2tsTtC4bcjkxFYNhcyeaCVZyby6fbCslQFsSqBtI4fG5b7R7GKMphMlpHFk2mZMWN3WP4Jlva3YgmC9doflVzsKgexrLoMkukVXqnKqoPgCH7rHezKnx8zYakpa7SFVKeVusmdU%2BVjAKYlWitBH7NDxthleUVsIscM4TVd5&X-Amz-Signature=78e103362cf1f134f58835aec9266c35657c6d9032948f2afe5d2ec89d7c82b6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WEB5CJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXMecFC9KisDdN2B3UNzlUblPWHLwcSH9bZuKNkhVegIhAMlGU%2Bm5%2F2bx5uPPK3Zz1twSkyG3AUI7BXF33sUJGF9YKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhCfFbbb%2BpnAIuub0q3APaXgJP6kyg6w3PrvHsxOYpS91mnhng7x9mojAl31MjeWauUPz2dBWjoVyJ6oyTD4aNP22v0DdVaNqwzbhf9VSi0UzB1pUjVLyU5q5lJAMF%2FZcQfW6x9%2BNSAJnjYIe7QZn1wpJoFuGji9lC3xSYW4YwvS93q%2Fbo7GtYkje%2FRP3msZZ6x9rrOSbdsHDJ0770G0MCSwKr3%2F%2BnoUZFB9ol90uj0aXX1FQsOtDQBnB87UZrGWIcOmNWbVFWelMeJe7nkBzmgNgOPDsRTuyC3yQQYU444Sof8y6OTrv%2Bk4lw6TyQ3HLvSv1mqPDrboEPLbcwSYa0fIzOTnGh30wWCfpUe6QK4ozGg7fbpKoNjRFan61P0ShP6Md2pwCOoIFDROEpQYsmKhyJi2LZIg1AJUYEpJdWaetW0Dg3p6qWp69UaI7zMtTJnAmpfktXMR7ffn1TR%2F8QQu7M5ihGEtCEYIq%2BXh7WEYIS0kuMfpP645e7Lhk1EZ%2FhjZbNWACgLofMuyfOlnCmVTWok5Mmvh9T4pZKyRkGKRWszFvUWXW5Wf40lWka2j1CAKEkuTcIh8JAck06dWmExg6oHNkBltfl1UO5VaeFaxDUYAaBV5V7rN0%2F0pRwKFmxU%2BQSL1iYsIz2JzDNp7PABjqkAWSbScwrhtadQDO2m2InQHouw9z3GQ2TnsSRP4GdUTAIWrcPCvLcj2tsTtC4bcjkxFYNhcyeaCVZyby6fbCslQFsSqBtI4fG5b7R7GKMphMlpHFk2mZMWN3WP4Jlva3YgmC9doflVzsKgexrLoMkukVXqnKqoPgCH7rHezKnx8zYakpa7SFVKeVusmdU%2BVjAKYlWitBH7NDxthleUVsIscM4TVd5&X-Amz-Signature=0d7c4b29e659385f57c3ccd2d959641fb966b51f4ef8dd76cd1d59ab5daf5330&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WEB5CJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T131542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXMecFC9KisDdN2B3UNzlUblPWHLwcSH9bZuKNkhVegIhAMlGU%2Bm5%2F2bx5uPPK3Zz1twSkyG3AUI7BXF33sUJGF9YKv8DCEYQABoMNjM3NDIzMTgzODA1IgwhCfFbbb%2BpnAIuub0q3APaXgJP6kyg6w3PrvHsxOYpS91mnhng7x9mojAl31MjeWauUPz2dBWjoVyJ6oyTD4aNP22v0DdVaNqwzbhf9VSi0UzB1pUjVLyU5q5lJAMF%2FZcQfW6x9%2BNSAJnjYIe7QZn1wpJoFuGji9lC3xSYW4YwvS93q%2Fbo7GtYkje%2FRP3msZZ6x9rrOSbdsHDJ0770G0MCSwKr3%2F%2BnoUZFB9ol90uj0aXX1FQsOtDQBnB87UZrGWIcOmNWbVFWelMeJe7nkBzmgNgOPDsRTuyC3yQQYU444Sof8y6OTrv%2Bk4lw6TyQ3HLvSv1mqPDrboEPLbcwSYa0fIzOTnGh30wWCfpUe6QK4ozGg7fbpKoNjRFan61P0ShP6Md2pwCOoIFDROEpQYsmKhyJi2LZIg1AJUYEpJdWaetW0Dg3p6qWp69UaI7zMtTJnAmpfktXMR7ffn1TR%2F8QQu7M5ihGEtCEYIq%2BXh7WEYIS0kuMfpP645e7Lhk1EZ%2FhjZbNWACgLofMuyfOlnCmVTWok5Mmvh9T4pZKyRkGKRWszFvUWXW5Wf40lWka2j1CAKEkuTcIh8JAck06dWmExg6oHNkBltfl1UO5VaeFaxDUYAaBV5V7rN0%2F0pRwKFmxU%2BQSL1iYsIz2JzDNp7PABjqkAWSbScwrhtadQDO2m2InQHouw9z3GQ2TnsSRP4GdUTAIWrcPCvLcj2tsTtC4bcjkxFYNhcyeaCVZyby6fbCslQFsSqBtI4fG5b7R7GKMphMlpHFk2mZMWN3WP4Jlva3YgmC9doflVzsKgexrLoMkukVXqnKqoPgCH7rHezKnx8zYakpa7SFVKeVusmdU%2BVjAKYlWitBH7NDxthleUVsIscM4TVd5&X-Amz-Signature=d5052d0d2b8b254f18413249728a71d14b5b7c9d5f3ccc13c4bfcb18a99046ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
