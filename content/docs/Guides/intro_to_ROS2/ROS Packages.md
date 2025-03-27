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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSSWLWA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbo6L82Z6JoV642PCLLsaXHfBA1iVScl%2FgJa8LBBDR9AiBhllifDJn%2BANOk4lsEj8j75ZrhBxqIICoq2YX%2FxRsf%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMC8Do7EflSLmxQMwaKtwDesBhnXxjUDKjHoUYTRZcRh%2Bd3Go8SDHCGDTfmtVLxYeJVvvQZOsLh56NTakSv9mvC%2FxH7f5ecHbLISnR%2BZhs89GA%2BVXMeLvwKt4GS6%2FxYrXh7rIRN1qfNGT3UBVIsFaorlP7wzjWuRYwU%2BjbEaooDlkRgBol3tGgOd8xJHc7niVS6xgY9uJedXgOX338C%2F5HJ%2FcvnSbGO7OYhNXVILwMWZEQJc83f3dlQjBXqSP1l%2FOKWsMKIQ0QpnLdRFIKLZ4arOYXFh2dcoEJJvfO3nfbkztE3FdDbFgc8YU0Eq6x3PnnutcqBY6jGcHts6EqCmoSHdR7pZsQc3db4mudHTcyd6I0Go9FWb3qhch7LKjDXeW1Jd5qDr9F8u%2BIX%2F8ZyJzaC%2FTZTPX9BQaS1WlyJ%2F68BIoaJxRLimOj3gVzwQftNX34JbIHhmFEG7%2F2BE0hv4OLAwXPn07Djve4vBdetFDeDUocDhsU9zufePUYA6kqHy2kTqAKO8u2ZLxXikdoPCemgnsAvjIKn2EqJh%2FJvcqGUNqSrupxkhttu2hLCpKjqElM7V2ypWQMtrbYDg2x8bpHWW2x2yaP2YrEzwzdD7Pp8CNDQooNGCU3jt2LyD3EMpjdEV0SDeVPP%2BXFW3Qw3euVvwY6pgG06F8Yi7aXvYkZvjGoYRxBg74LfLZf2NVCi3DjKlSBJjHKKzJz4XGinB61HyRarDdBu8qduWjz2DdRwolQE%2BFjW4Sf25lkTVQu32REy6scSaSlwxpG1KaWhkekvjdU0vXjY%2BLVAPqFUFwvLTPTJjM3%2FYWK7DIvtvdfhPPlHYswhPgKYI0JQpgLv0ax%2BGtC3ImTfhBHJvkZRKjvQyqPRmABZqsnom5J&X-Amz-Signature=82d8eac14b2e5aebcfe6fb330d47729b6711c7c7dacafab3137fe3ee3623d2d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSSWLWA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbo6L82Z6JoV642PCLLsaXHfBA1iVScl%2FgJa8LBBDR9AiBhllifDJn%2BANOk4lsEj8j75ZrhBxqIICoq2YX%2FxRsf%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMC8Do7EflSLmxQMwaKtwDesBhnXxjUDKjHoUYTRZcRh%2Bd3Go8SDHCGDTfmtVLxYeJVvvQZOsLh56NTakSv9mvC%2FxH7f5ecHbLISnR%2BZhs89GA%2BVXMeLvwKt4GS6%2FxYrXh7rIRN1qfNGT3UBVIsFaorlP7wzjWuRYwU%2BjbEaooDlkRgBol3tGgOd8xJHc7niVS6xgY9uJedXgOX338C%2F5HJ%2FcvnSbGO7OYhNXVILwMWZEQJc83f3dlQjBXqSP1l%2FOKWsMKIQ0QpnLdRFIKLZ4arOYXFh2dcoEJJvfO3nfbkztE3FdDbFgc8YU0Eq6x3PnnutcqBY6jGcHts6EqCmoSHdR7pZsQc3db4mudHTcyd6I0Go9FWb3qhch7LKjDXeW1Jd5qDr9F8u%2BIX%2F8ZyJzaC%2FTZTPX9BQaS1WlyJ%2F68BIoaJxRLimOj3gVzwQftNX34JbIHhmFEG7%2F2BE0hv4OLAwXPn07Djve4vBdetFDeDUocDhsU9zufePUYA6kqHy2kTqAKO8u2ZLxXikdoPCemgnsAvjIKn2EqJh%2FJvcqGUNqSrupxkhttu2hLCpKjqElM7V2ypWQMtrbYDg2x8bpHWW2x2yaP2YrEzwzdD7Pp8CNDQooNGCU3jt2LyD3EMpjdEV0SDeVPP%2BXFW3Qw3euVvwY6pgG06F8Yi7aXvYkZvjGoYRxBg74LfLZf2NVCi3DjKlSBJjHKKzJz4XGinB61HyRarDdBu8qduWjz2DdRwolQE%2BFjW4Sf25lkTVQu32REy6scSaSlwxpG1KaWhkekvjdU0vXjY%2BLVAPqFUFwvLTPTJjM3%2FYWK7DIvtvdfhPPlHYswhPgKYI0JQpgLv0ax%2BGtC3ImTfhBHJvkZRKjvQyqPRmABZqsnom5J&X-Amz-Signature=75bebae04c00df4d0b24942b4d66f5a4100fe630e5143098aa7c92144995b061&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSSWLWA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbo6L82Z6JoV642PCLLsaXHfBA1iVScl%2FgJa8LBBDR9AiBhllifDJn%2BANOk4lsEj8j75ZrhBxqIICoq2YX%2FxRsf%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMC8Do7EflSLmxQMwaKtwDesBhnXxjUDKjHoUYTRZcRh%2Bd3Go8SDHCGDTfmtVLxYeJVvvQZOsLh56NTakSv9mvC%2FxH7f5ecHbLISnR%2BZhs89GA%2BVXMeLvwKt4GS6%2FxYrXh7rIRN1qfNGT3UBVIsFaorlP7wzjWuRYwU%2BjbEaooDlkRgBol3tGgOd8xJHc7niVS6xgY9uJedXgOX338C%2F5HJ%2FcvnSbGO7OYhNXVILwMWZEQJc83f3dlQjBXqSP1l%2FOKWsMKIQ0QpnLdRFIKLZ4arOYXFh2dcoEJJvfO3nfbkztE3FdDbFgc8YU0Eq6x3PnnutcqBY6jGcHts6EqCmoSHdR7pZsQc3db4mudHTcyd6I0Go9FWb3qhch7LKjDXeW1Jd5qDr9F8u%2BIX%2F8ZyJzaC%2FTZTPX9BQaS1WlyJ%2F68BIoaJxRLimOj3gVzwQftNX34JbIHhmFEG7%2F2BE0hv4OLAwXPn07Djve4vBdetFDeDUocDhsU9zufePUYA6kqHy2kTqAKO8u2ZLxXikdoPCemgnsAvjIKn2EqJh%2FJvcqGUNqSrupxkhttu2hLCpKjqElM7V2ypWQMtrbYDg2x8bpHWW2x2yaP2YrEzwzdD7Pp8CNDQooNGCU3jt2LyD3EMpjdEV0SDeVPP%2BXFW3Qw3euVvwY6pgG06F8Yi7aXvYkZvjGoYRxBg74LfLZf2NVCi3DjKlSBJjHKKzJz4XGinB61HyRarDdBu8qduWjz2DdRwolQE%2BFjW4Sf25lkTVQu32REy6scSaSlwxpG1KaWhkekvjdU0vXjY%2BLVAPqFUFwvLTPTJjM3%2FYWK7DIvtvdfhPPlHYswhPgKYI0JQpgLv0ax%2BGtC3ImTfhBHJvkZRKjvQyqPRmABZqsnom5J&X-Amz-Signature=35c8c47040d4083519ac2f9eaa53a05bd15acd24faf90dab963ab819695a4bda&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSSWLWA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbo6L82Z6JoV642PCLLsaXHfBA1iVScl%2FgJa8LBBDR9AiBhllifDJn%2BANOk4lsEj8j75ZrhBxqIICoq2YX%2FxRsf%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMC8Do7EflSLmxQMwaKtwDesBhnXxjUDKjHoUYTRZcRh%2Bd3Go8SDHCGDTfmtVLxYeJVvvQZOsLh56NTakSv9mvC%2FxH7f5ecHbLISnR%2BZhs89GA%2BVXMeLvwKt4GS6%2FxYrXh7rIRN1qfNGT3UBVIsFaorlP7wzjWuRYwU%2BjbEaooDlkRgBol3tGgOd8xJHc7niVS6xgY9uJedXgOX338C%2F5HJ%2FcvnSbGO7OYhNXVILwMWZEQJc83f3dlQjBXqSP1l%2FOKWsMKIQ0QpnLdRFIKLZ4arOYXFh2dcoEJJvfO3nfbkztE3FdDbFgc8YU0Eq6x3PnnutcqBY6jGcHts6EqCmoSHdR7pZsQc3db4mudHTcyd6I0Go9FWb3qhch7LKjDXeW1Jd5qDr9F8u%2BIX%2F8ZyJzaC%2FTZTPX9BQaS1WlyJ%2F68BIoaJxRLimOj3gVzwQftNX34JbIHhmFEG7%2F2BE0hv4OLAwXPn07Djve4vBdetFDeDUocDhsU9zufePUYA6kqHy2kTqAKO8u2ZLxXikdoPCemgnsAvjIKn2EqJh%2FJvcqGUNqSrupxkhttu2hLCpKjqElM7V2ypWQMtrbYDg2x8bpHWW2x2yaP2YrEzwzdD7Pp8CNDQooNGCU3jt2LyD3EMpjdEV0SDeVPP%2BXFW3Qw3euVvwY6pgG06F8Yi7aXvYkZvjGoYRxBg74LfLZf2NVCi3DjKlSBJjHKKzJz4XGinB61HyRarDdBu8qduWjz2DdRwolQE%2BFjW4Sf25lkTVQu32REy6scSaSlwxpG1KaWhkekvjdU0vXjY%2BLVAPqFUFwvLTPTJjM3%2FYWK7DIvtvdfhPPlHYswhPgKYI0JQpgLv0ax%2BGtC3ImTfhBHJvkZRKjvQyqPRmABZqsnom5J&X-Amz-Signature=fa4f5f97c89fe597d2f38d5d3b74bb35dd0f609b827977f78aa6e34e16b0ec9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSSWLWA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbo6L82Z6JoV642PCLLsaXHfBA1iVScl%2FgJa8LBBDR9AiBhllifDJn%2BANOk4lsEj8j75ZrhBxqIICoq2YX%2FxRsf%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMC8Do7EflSLmxQMwaKtwDesBhnXxjUDKjHoUYTRZcRh%2Bd3Go8SDHCGDTfmtVLxYeJVvvQZOsLh56NTakSv9mvC%2FxH7f5ecHbLISnR%2BZhs89GA%2BVXMeLvwKt4GS6%2FxYrXh7rIRN1qfNGT3UBVIsFaorlP7wzjWuRYwU%2BjbEaooDlkRgBol3tGgOd8xJHc7niVS6xgY9uJedXgOX338C%2F5HJ%2FcvnSbGO7OYhNXVILwMWZEQJc83f3dlQjBXqSP1l%2FOKWsMKIQ0QpnLdRFIKLZ4arOYXFh2dcoEJJvfO3nfbkztE3FdDbFgc8YU0Eq6x3PnnutcqBY6jGcHts6EqCmoSHdR7pZsQc3db4mudHTcyd6I0Go9FWb3qhch7LKjDXeW1Jd5qDr9F8u%2BIX%2F8ZyJzaC%2FTZTPX9BQaS1WlyJ%2F68BIoaJxRLimOj3gVzwQftNX34JbIHhmFEG7%2F2BE0hv4OLAwXPn07Djve4vBdetFDeDUocDhsU9zufePUYA6kqHy2kTqAKO8u2ZLxXikdoPCemgnsAvjIKn2EqJh%2FJvcqGUNqSrupxkhttu2hLCpKjqElM7V2ypWQMtrbYDg2x8bpHWW2x2yaP2YrEzwzdD7Pp8CNDQooNGCU3jt2LyD3EMpjdEV0SDeVPP%2BXFW3Qw3euVvwY6pgG06F8Yi7aXvYkZvjGoYRxBg74LfLZf2NVCi3DjKlSBJjHKKzJz4XGinB61HyRarDdBu8qduWjz2DdRwolQE%2BFjW4Sf25lkTVQu32REy6scSaSlwxpG1KaWhkekvjdU0vXjY%2BLVAPqFUFwvLTPTJjM3%2FYWK7DIvtvdfhPPlHYswhPgKYI0JQpgLv0ax%2BGtC3ImTfhBHJvkZRKjvQyqPRmABZqsnom5J&X-Amz-Signature=6e23b957cb5445ac9f1e94ac9711603ab2ffb743484ceb8ff7d9a7137d022be4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSSWLWA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbo6L82Z6JoV642PCLLsaXHfBA1iVScl%2FgJa8LBBDR9AiBhllifDJn%2BANOk4lsEj8j75ZrhBxqIICoq2YX%2FxRsf%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMC8Do7EflSLmxQMwaKtwDesBhnXxjUDKjHoUYTRZcRh%2Bd3Go8SDHCGDTfmtVLxYeJVvvQZOsLh56NTakSv9mvC%2FxH7f5ecHbLISnR%2BZhs89GA%2BVXMeLvwKt4GS6%2FxYrXh7rIRN1qfNGT3UBVIsFaorlP7wzjWuRYwU%2BjbEaooDlkRgBol3tGgOd8xJHc7niVS6xgY9uJedXgOX338C%2F5HJ%2FcvnSbGO7OYhNXVILwMWZEQJc83f3dlQjBXqSP1l%2FOKWsMKIQ0QpnLdRFIKLZ4arOYXFh2dcoEJJvfO3nfbkztE3FdDbFgc8YU0Eq6x3PnnutcqBY6jGcHts6EqCmoSHdR7pZsQc3db4mudHTcyd6I0Go9FWb3qhch7LKjDXeW1Jd5qDr9F8u%2BIX%2F8ZyJzaC%2FTZTPX9BQaS1WlyJ%2F68BIoaJxRLimOj3gVzwQftNX34JbIHhmFEG7%2F2BE0hv4OLAwXPn07Djve4vBdetFDeDUocDhsU9zufePUYA6kqHy2kTqAKO8u2ZLxXikdoPCemgnsAvjIKn2EqJh%2FJvcqGUNqSrupxkhttu2hLCpKjqElM7V2ypWQMtrbYDg2x8bpHWW2x2yaP2YrEzwzdD7Pp8CNDQooNGCU3jt2LyD3EMpjdEV0SDeVPP%2BXFW3Qw3euVvwY6pgG06F8Yi7aXvYkZvjGoYRxBg74LfLZf2NVCi3DjKlSBJjHKKzJz4XGinB61HyRarDdBu8qduWjz2DdRwolQE%2BFjW4Sf25lkTVQu32REy6scSaSlwxpG1KaWhkekvjdU0vXjY%2BLVAPqFUFwvLTPTJjM3%2FYWK7DIvtvdfhPPlHYswhPgKYI0JQpgLv0ax%2BGtC3ImTfhBHJvkZRKjvQyqPRmABZqsnom5J&X-Amz-Signature=eb0f682dffffecbefdee006d337d737c4590ad9d4dd3d3db2cb2f6289b8d49fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVSSWLWA%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbo6L82Z6JoV642PCLLsaXHfBA1iVScl%2FgJa8LBBDR9AiBhllifDJn%2BANOk4lsEj8j75ZrhBxqIICoq2YX%2FxRsf%2FSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMC8Do7EflSLmxQMwaKtwDesBhnXxjUDKjHoUYTRZcRh%2Bd3Go8SDHCGDTfmtVLxYeJVvvQZOsLh56NTakSv9mvC%2FxH7f5ecHbLISnR%2BZhs89GA%2BVXMeLvwKt4GS6%2FxYrXh7rIRN1qfNGT3UBVIsFaorlP7wzjWuRYwU%2BjbEaooDlkRgBol3tGgOd8xJHc7niVS6xgY9uJedXgOX338C%2F5HJ%2FcvnSbGO7OYhNXVILwMWZEQJc83f3dlQjBXqSP1l%2FOKWsMKIQ0QpnLdRFIKLZ4arOYXFh2dcoEJJvfO3nfbkztE3FdDbFgc8YU0Eq6x3PnnutcqBY6jGcHts6EqCmoSHdR7pZsQc3db4mudHTcyd6I0Go9FWb3qhch7LKjDXeW1Jd5qDr9F8u%2BIX%2F8ZyJzaC%2FTZTPX9BQaS1WlyJ%2F68BIoaJxRLimOj3gVzwQftNX34JbIHhmFEG7%2F2BE0hv4OLAwXPn07Djve4vBdetFDeDUocDhsU9zufePUYA6kqHy2kTqAKO8u2ZLxXikdoPCemgnsAvjIKn2EqJh%2FJvcqGUNqSrupxkhttu2hLCpKjqElM7V2ypWQMtrbYDg2x8bpHWW2x2yaP2YrEzwzdD7Pp8CNDQooNGCU3jt2LyD3EMpjdEV0SDeVPP%2BXFW3Qw3euVvwY6pgG06F8Yi7aXvYkZvjGoYRxBg74LfLZf2NVCi3DjKlSBJjHKKzJz4XGinB61HyRarDdBu8qduWjz2DdRwolQE%2BFjW4Sf25lkTVQu32REy6scSaSlwxpG1KaWhkekvjdU0vXjY%2BLVAPqFUFwvLTPTJjM3%2FYWK7DIvtvdfhPPlHYswhPgKYI0JQpgLv0ax%2BGtC3ImTfhBHJvkZRKjvQyqPRmABZqsnom5J&X-Amz-Signature=9b332ed9df51f8271f7133dc7b1a8194246263dc1e261954b6c9a6c15b6f4c34&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
