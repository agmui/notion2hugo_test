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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWV2DUM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1UME4pgVskQjGKTbWtRYEsw4uGKKxKZ3%2FkIoCVAdnWQIhANZXbs7nV8HxVAL081QvDcfPjHcvk%2BncISQo5mbz7x2mKv8DCHsQABoMNjM3NDIzMTgzODA1IgxcxQ7S7%2FDGUv5ofCQq3APaMZbl3lH3HTKNEF31ASXhAtV1KtUiT6Kx1YGKyRZUzYCxdPtzN%2B4VlH6XH92fnO79tXUlG8KoaNuILzUr19SK12OKKc8KCWHhpOJ2dFjWX%2FoOBb8qQm%2F0ga1rE3YEW1DDRG5YYcifrcnFLemDEil5vDFfQ%2B%2FyMY8m54ZU2B0z7NPAOpBn5A84oY9ftgtLWp8NGc2WbKzJL6R86o0RxTljomHKmGy8Gh4Y%2Fyoc4DqT7ySFD%2FPHnRJ4YkeEsqj64VpJ4619qCxk3Lg1Ia5egq2INBDIufC7vUrMx6EpQfVISl9RB9OU1RpgGcdB4fwjTxVZcwUXJlUDZe5Vg%2BY4HezIymRw87X26EGmed7nB5XqzF002VGFqnx0nfyOcmZj5YvD57MmF2iTQ%2Bk5q4oBzFVhf5UdsoC52OE%2Fxk5pYU203XLrEa3RcWx6AP70vzaQA0%2FdTaP9CLrOcon%2Bu2VzNvEf%2FtOvnmzICP5cd2gLhkeqUY16W9UQptLV50aafYkVrhpPv9kLm2N3RPpzEoS5pZsgyeavh57dIpvGDf%2FCKAlkRJtcPcfoSzAUGzAynwgyjxHWwUsDE%2FPsmkCcCp%2BT9Szur92C1dSY1pyKzpS9Z0PziMb8s8m9IOSAW6p2XzCY5vPABjqkAVSO%2BHqMAjeZfDJRgBVPsfxHw0zpOy%2FEf9r40tvHo%2FKBkeOx2bMEiB5ZMYpCDxA0lgDC9RB5rGhiLwTYyBsJBz80zrK5Pyk%2BCeV%2B8cxY0UUMRoYtDh4OaBCFvtqBIiL6BZauTvsWk4Q4H5yGfAabr1cNQp75F90DbfVE7oVPYmZmGdIYXKqpysTJH3BjgT7F3RB3yPfMWJxZo6%2FRSnmYQB8TEz5x&X-Amz-Signature=9787101e6f39b29ff41cb69d1627bf5130b7ebcddedf4e3efc72a7d8949f8a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWV2DUM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1UME4pgVskQjGKTbWtRYEsw4uGKKxKZ3%2FkIoCVAdnWQIhANZXbs7nV8HxVAL081QvDcfPjHcvk%2BncISQo5mbz7x2mKv8DCHsQABoMNjM3NDIzMTgzODA1IgxcxQ7S7%2FDGUv5ofCQq3APaMZbl3lH3HTKNEF31ASXhAtV1KtUiT6Kx1YGKyRZUzYCxdPtzN%2B4VlH6XH92fnO79tXUlG8KoaNuILzUr19SK12OKKc8KCWHhpOJ2dFjWX%2FoOBb8qQm%2F0ga1rE3YEW1DDRG5YYcifrcnFLemDEil5vDFfQ%2B%2FyMY8m54ZU2B0z7NPAOpBn5A84oY9ftgtLWp8NGc2WbKzJL6R86o0RxTljomHKmGy8Gh4Y%2Fyoc4DqT7ySFD%2FPHnRJ4YkeEsqj64VpJ4619qCxk3Lg1Ia5egq2INBDIufC7vUrMx6EpQfVISl9RB9OU1RpgGcdB4fwjTxVZcwUXJlUDZe5Vg%2BY4HezIymRw87X26EGmed7nB5XqzF002VGFqnx0nfyOcmZj5YvD57MmF2iTQ%2Bk5q4oBzFVhf5UdsoC52OE%2Fxk5pYU203XLrEa3RcWx6AP70vzaQA0%2FdTaP9CLrOcon%2Bu2VzNvEf%2FtOvnmzICP5cd2gLhkeqUY16W9UQptLV50aafYkVrhpPv9kLm2N3RPpzEoS5pZsgyeavh57dIpvGDf%2FCKAlkRJtcPcfoSzAUGzAynwgyjxHWwUsDE%2FPsmkCcCp%2BT9Szur92C1dSY1pyKzpS9Z0PziMb8s8m9IOSAW6p2XzCY5vPABjqkAVSO%2BHqMAjeZfDJRgBVPsfxHw0zpOy%2FEf9r40tvHo%2FKBkeOx2bMEiB5ZMYpCDxA0lgDC9RB5rGhiLwTYyBsJBz80zrK5Pyk%2BCeV%2B8cxY0UUMRoYtDh4OaBCFvtqBIiL6BZauTvsWk4Q4H5yGfAabr1cNQp75F90DbfVE7oVPYmZmGdIYXKqpysTJH3BjgT7F3RB3yPfMWJxZo6%2FRSnmYQB8TEz5x&X-Amz-Signature=7f4e3641e383a8279b89900323a0b19ce1b9fd3f5bc050350e2b8ca71b7588c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWV2DUM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1UME4pgVskQjGKTbWtRYEsw4uGKKxKZ3%2FkIoCVAdnWQIhANZXbs7nV8HxVAL081QvDcfPjHcvk%2BncISQo5mbz7x2mKv8DCHsQABoMNjM3NDIzMTgzODA1IgxcxQ7S7%2FDGUv5ofCQq3APaMZbl3lH3HTKNEF31ASXhAtV1KtUiT6Kx1YGKyRZUzYCxdPtzN%2B4VlH6XH92fnO79tXUlG8KoaNuILzUr19SK12OKKc8KCWHhpOJ2dFjWX%2FoOBb8qQm%2F0ga1rE3YEW1DDRG5YYcifrcnFLemDEil5vDFfQ%2B%2FyMY8m54ZU2B0z7NPAOpBn5A84oY9ftgtLWp8NGc2WbKzJL6R86o0RxTljomHKmGy8Gh4Y%2Fyoc4DqT7ySFD%2FPHnRJ4YkeEsqj64VpJ4619qCxk3Lg1Ia5egq2INBDIufC7vUrMx6EpQfVISl9RB9OU1RpgGcdB4fwjTxVZcwUXJlUDZe5Vg%2BY4HezIymRw87X26EGmed7nB5XqzF002VGFqnx0nfyOcmZj5YvD57MmF2iTQ%2Bk5q4oBzFVhf5UdsoC52OE%2Fxk5pYU203XLrEa3RcWx6AP70vzaQA0%2FdTaP9CLrOcon%2Bu2VzNvEf%2FtOvnmzICP5cd2gLhkeqUY16W9UQptLV50aafYkVrhpPv9kLm2N3RPpzEoS5pZsgyeavh57dIpvGDf%2FCKAlkRJtcPcfoSzAUGzAynwgyjxHWwUsDE%2FPsmkCcCp%2BT9Szur92C1dSY1pyKzpS9Z0PziMb8s8m9IOSAW6p2XzCY5vPABjqkAVSO%2BHqMAjeZfDJRgBVPsfxHw0zpOy%2FEf9r40tvHo%2FKBkeOx2bMEiB5ZMYpCDxA0lgDC9RB5rGhiLwTYyBsJBz80zrK5Pyk%2BCeV%2B8cxY0UUMRoYtDh4OaBCFvtqBIiL6BZauTvsWk4Q4H5yGfAabr1cNQp75F90DbfVE7oVPYmZmGdIYXKqpysTJH3BjgT7F3RB3yPfMWJxZo6%2FRSnmYQB8TEz5x&X-Amz-Signature=d4635fc58d6177d19f80861fe70dbca594ee8a53341d983474cbe03bbd4cb60c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWV2DUM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1UME4pgVskQjGKTbWtRYEsw4uGKKxKZ3%2FkIoCVAdnWQIhANZXbs7nV8HxVAL081QvDcfPjHcvk%2BncISQo5mbz7x2mKv8DCHsQABoMNjM3NDIzMTgzODA1IgxcxQ7S7%2FDGUv5ofCQq3APaMZbl3lH3HTKNEF31ASXhAtV1KtUiT6Kx1YGKyRZUzYCxdPtzN%2B4VlH6XH92fnO79tXUlG8KoaNuILzUr19SK12OKKc8KCWHhpOJ2dFjWX%2FoOBb8qQm%2F0ga1rE3YEW1DDRG5YYcifrcnFLemDEil5vDFfQ%2B%2FyMY8m54ZU2B0z7NPAOpBn5A84oY9ftgtLWp8NGc2WbKzJL6R86o0RxTljomHKmGy8Gh4Y%2Fyoc4DqT7ySFD%2FPHnRJ4YkeEsqj64VpJ4619qCxk3Lg1Ia5egq2INBDIufC7vUrMx6EpQfVISl9RB9OU1RpgGcdB4fwjTxVZcwUXJlUDZe5Vg%2BY4HezIymRw87X26EGmed7nB5XqzF002VGFqnx0nfyOcmZj5YvD57MmF2iTQ%2Bk5q4oBzFVhf5UdsoC52OE%2Fxk5pYU203XLrEa3RcWx6AP70vzaQA0%2FdTaP9CLrOcon%2Bu2VzNvEf%2FtOvnmzICP5cd2gLhkeqUY16W9UQptLV50aafYkVrhpPv9kLm2N3RPpzEoS5pZsgyeavh57dIpvGDf%2FCKAlkRJtcPcfoSzAUGzAynwgyjxHWwUsDE%2FPsmkCcCp%2BT9Szur92C1dSY1pyKzpS9Z0PziMb8s8m9IOSAW6p2XzCY5vPABjqkAVSO%2BHqMAjeZfDJRgBVPsfxHw0zpOy%2FEf9r40tvHo%2FKBkeOx2bMEiB5ZMYpCDxA0lgDC9RB5rGhiLwTYyBsJBz80zrK5Pyk%2BCeV%2B8cxY0UUMRoYtDh4OaBCFvtqBIiL6BZauTvsWk4Q4H5yGfAabr1cNQp75F90DbfVE7oVPYmZmGdIYXKqpysTJH3BjgT7F3RB3yPfMWJxZo6%2FRSnmYQB8TEz5x&X-Amz-Signature=cd10799a60c77d781013013f13c5460e8432afb796b8da86231b21c7f993ce98&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWV2DUM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1UME4pgVskQjGKTbWtRYEsw4uGKKxKZ3%2FkIoCVAdnWQIhANZXbs7nV8HxVAL081QvDcfPjHcvk%2BncISQo5mbz7x2mKv8DCHsQABoMNjM3NDIzMTgzODA1IgxcxQ7S7%2FDGUv5ofCQq3APaMZbl3lH3HTKNEF31ASXhAtV1KtUiT6Kx1YGKyRZUzYCxdPtzN%2B4VlH6XH92fnO79tXUlG8KoaNuILzUr19SK12OKKc8KCWHhpOJ2dFjWX%2FoOBb8qQm%2F0ga1rE3YEW1DDRG5YYcifrcnFLemDEil5vDFfQ%2B%2FyMY8m54ZU2B0z7NPAOpBn5A84oY9ftgtLWp8NGc2WbKzJL6R86o0RxTljomHKmGy8Gh4Y%2Fyoc4DqT7ySFD%2FPHnRJ4YkeEsqj64VpJ4619qCxk3Lg1Ia5egq2INBDIufC7vUrMx6EpQfVISl9RB9OU1RpgGcdB4fwjTxVZcwUXJlUDZe5Vg%2BY4HezIymRw87X26EGmed7nB5XqzF002VGFqnx0nfyOcmZj5YvD57MmF2iTQ%2Bk5q4oBzFVhf5UdsoC52OE%2Fxk5pYU203XLrEa3RcWx6AP70vzaQA0%2FdTaP9CLrOcon%2Bu2VzNvEf%2FtOvnmzICP5cd2gLhkeqUY16W9UQptLV50aafYkVrhpPv9kLm2N3RPpzEoS5pZsgyeavh57dIpvGDf%2FCKAlkRJtcPcfoSzAUGzAynwgyjxHWwUsDE%2FPsmkCcCp%2BT9Szur92C1dSY1pyKzpS9Z0PziMb8s8m9IOSAW6p2XzCY5vPABjqkAVSO%2BHqMAjeZfDJRgBVPsfxHw0zpOy%2FEf9r40tvHo%2FKBkeOx2bMEiB5ZMYpCDxA0lgDC9RB5rGhiLwTYyBsJBz80zrK5Pyk%2BCeV%2B8cxY0UUMRoYtDh4OaBCFvtqBIiL6BZauTvsWk4Q4H5yGfAabr1cNQp75F90DbfVE7oVPYmZmGdIYXKqpysTJH3BjgT7F3RB3yPfMWJxZo6%2FRSnmYQB8TEz5x&X-Amz-Signature=4867beb6a6b3271540bb3b010d2159f9b763c488c2272805f0a60435c3eefa0b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWV2DUM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1UME4pgVskQjGKTbWtRYEsw4uGKKxKZ3%2FkIoCVAdnWQIhANZXbs7nV8HxVAL081QvDcfPjHcvk%2BncISQo5mbz7x2mKv8DCHsQABoMNjM3NDIzMTgzODA1IgxcxQ7S7%2FDGUv5ofCQq3APaMZbl3lH3HTKNEF31ASXhAtV1KtUiT6Kx1YGKyRZUzYCxdPtzN%2B4VlH6XH92fnO79tXUlG8KoaNuILzUr19SK12OKKc8KCWHhpOJ2dFjWX%2FoOBb8qQm%2F0ga1rE3YEW1DDRG5YYcifrcnFLemDEil5vDFfQ%2B%2FyMY8m54ZU2B0z7NPAOpBn5A84oY9ftgtLWp8NGc2WbKzJL6R86o0RxTljomHKmGy8Gh4Y%2Fyoc4DqT7ySFD%2FPHnRJ4YkeEsqj64VpJ4619qCxk3Lg1Ia5egq2INBDIufC7vUrMx6EpQfVISl9RB9OU1RpgGcdB4fwjTxVZcwUXJlUDZe5Vg%2BY4HezIymRw87X26EGmed7nB5XqzF002VGFqnx0nfyOcmZj5YvD57MmF2iTQ%2Bk5q4oBzFVhf5UdsoC52OE%2Fxk5pYU203XLrEa3RcWx6AP70vzaQA0%2FdTaP9CLrOcon%2Bu2VzNvEf%2FtOvnmzICP5cd2gLhkeqUY16W9UQptLV50aafYkVrhpPv9kLm2N3RPpzEoS5pZsgyeavh57dIpvGDf%2FCKAlkRJtcPcfoSzAUGzAynwgyjxHWwUsDE%2FPsmkCcCp%2BT9Szur92C1dSY1pyKzpS9Z0PziMb8s8m9IOSAW6p2XzCY5vPABjqkAVSO%2BHqMAjeZfDJRgBVPsfxHw0zpOy%2FEf9r40tvHo%2FKBkeOx2bMEiB5ZMYpCDxA0lgDC9RB5rGhiLwTYyBsJBz80zrK5Pyk%2BCeV%2B8cxY0UUMRoYtDh4OaBCFvtqBIiL6BZauTvsWk4Q4H5yGfAabr1cNQp75F90DbfVE7oVPYmZmGdIYXKqpysTJH3BjgT7F3RB3yPfMWJxZo6%2FRSnmYQB8TEz5x&X-Amz-Signature=654c1dfefe5f8e9b9ee8caa50b438b97506d66adbe94b99cadc3b3186388e59c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWV2DUM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1UME4pgVskQjGKTbWtRYEsw4uGKKxKZ3%2FkIoCVAdnWQIhANZXbs7nV8HxVAL081QvDcfPjHcvk%2BncISQo5mbz7x2mKv8DCHsQABoMNjM3NDIzMTgzODA1IgxcxQ7S7%2FDGUv5ofCQq3APaMZbl3lH3HTKNEF31ASXhAtV1KtUiT6Kx1YGKyRZUzYCxdPtzN%2B4VlH6XH92fnO79tXUlG8KoaNuILzUr19SK12OKKc8KCWHhpOJ2dFjWX%2FoOBb8qQm%2F0ga1rE3YEW1DDRG5YYcifrcnFLemDEil5vDFfQ%2B%2FyMY8m54ZU2B0z7NPAOpBn5A84oY9ftgtLWp8NGc2WbKzJL6R86o0RxTljomHKmGy8Gh4Y%2Fyoc4DqT7ySFD%2FPHnRJ4YkeEsqj64VpJ4619qCxk3Lg1Ia5egq2INBDIufC7vUrMx6EpQfVISl9RB9OU1RpgGcdB4fwjTxVZcwUXJlUDZe5Vg%2BY4HezIymRw87X26EGmed7nB5XqzF002VGFqnx0nfyOcmZj5YvD57MmF2iTQ%2Bk5q4oBzFVhf5UdsoC52OE%2Fxk5pYU203XLrEa3RcWx6AP70vzaQA0%2FdTaP9CLrOcon%2Bu2VzNvEf%2FtOvnmzICP5cd2gLhkeqUY16W9UQptLV50aafYkVrhpPv9kLm2N3RPpzEoS5pZsgyeavh57dIpvGDf%2FCKAlkRJtcPcfoSzAUGzAynwgyjxHWwUsDE%2FPsmkCcCp%2BT9Szur92C1dSY1pyKzpS9Z0PziMb8s8m9IOSAW6p2XzCY5vPABjqkAVSO%2BHqMAjeZfDJRgBVPsfxHw0zpOy%2FEf9r40tvHo%2FKBkeOx2bMEiB5ZMYpCDxA0lgDC9RB5rGhiLwTYyBsJBz80zrK5Pyk%2BCeV%2B8cxY0UUMRoYtDh4OaBCFvtqBIiL6BZauTvsWk4Q4H5yGfAabr1cNQp75F90DbfVE7oVPYmZmGdIYXKqpysTJH3BjgT7F3RB3yPfMWJxZo6%2FRSnmYQB8TEz5x&X-Amz-Signature=ef0815df23ce4185e4f450c2e5e2c3dbff85b043fcf843025b87e4421b2c3fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
