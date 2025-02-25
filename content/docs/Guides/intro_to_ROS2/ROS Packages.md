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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIMMUGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICS8S2vpog0M65SEdJG24TNXaFwN2c3fi0%2FQE9LEHDFGAiEA7j7iHINBTQubjrSWGweWMUFq%2BlIC6qtSVA78SPmCrQAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCK7GPGQGBh%2Bt5Pq6yrcAy7QFwUW%2F4ZcmPRgP4MUu3e1SLbKS0MplTEYD8bMgx5LhrPX9h5BChZiN%2BvgdzZXXUluAFw%2BC7Bg%2Fzza%2FyEXdQyUBa2djNZWyvcoAwmsreONFE%2F9zv3ilYvwtcRGIKkpu3CVmSEdsvYDI8idUHDNGey%2FwU5NcjvRvxNMxy9CFUhLkL%2BiW8ENVqc%2Fm9f3%2FRCET8DkoeMJ6aFf%2B1K2dAelOkBNyxvL0bdO5q0oL2uZY%2BZVGu4n1cdtJigZ709k%2FFLSSiptk4rDMyCRM0jj%2BNllQXbOahUZc0vvRAk%2BMHpR9kCCufVbBCE0GwIwGVt%2BEzuGmTuRFn88k22cisrBIXYzwGwL8YWVGb3Fn%2BKN7u8PKh8rsR7oyemr23TTl5ajR%2F%2Fr6qjs%2BTwByeFvoCAOudE%2FAK6BigAwfv%2Frcizih9gc3EqJbePJ7ZzbLBRtSy7F5GM%2FqozwBqyuOgDETae6uzuG7KnrDR%2F1FUrYkFSC5h%2Bk6V9ubG4nFrAhAXXevhqEJv7vt04us%2F5i6icspUwDC6b9T%2FIJYDjX7sAvDkAF4FgTVflmTGVtQ%2BKXhwTboqxidI8N30U0dhaH86cOX0DVLa27IkiOl1yY9Mn5XdfSOBKNgzj%2FfhBd6O5wWcKxMsI3MICD9L0GOqUB5Q41%2F%2Ffm2x14gqm9%2BcloviOlIn1MeFGUYiOEpdZFk7RlZMCjDsp%2B%2FAZCx70rIOm8%2BD0jEvagHq4uQum79i4ARjJN1DfVyTnx1tmBmK6PyI8v7z%2F4kEYRwuxlZLBLe04D%2BgkkuXAMtJxg7fNo%2FftrV7zO7926sgrJ%2BFF2SkR9Kt%2BBOplKbk4MuP5hUGKiyIv5RWkcE3vTVh364Ke09Xr62iNqYhPP&X-Amz-Signature=37f44e6c1065f9b29da1c1bc5b7a4dfb59f124e1efae5f84530fafc5a4294f67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIMMUGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICS8S2vpog0M65SEdJG24TNXaFwN2c3fi0%2FQE9LEHDFGAiEA7j7iHINBTQubjrSWGweWMUFq%2BlIC6qtSVA78SPmCrQAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCK7GPGQGBh%2Bt5Pq6yrcAy7QFwUW%2F4ZcmPRgP4MUu3e1SLbKS0MplTEYD8bMgx5LhrPX9h5BChZiN%2BvgdzZXXUluAFw%2BC7Bg%2Fzza%2FyEXdQyUBa2djNZWyvcoAwmsreONFE%2F9zv3ilYvwtcRGIKkpu3CVmSEdsvYDI8idUHDNGey%2FwU5NcjvRvxNMxy9CFUhLkL%2BiW8ENVqc%2Fm9f3%2FRCET8DkoeMJ6aFf%2B1K2dAelOkBNyxvL0bdO5q0oL2uZY%2BZVGu4n1cdtJigZ709k%2FFLSSiptk4rDMyCRM0jj%2BNllQXbOahUZc0vvRAk%2BMHpR9kCCufVbBCE0GwIwGVt%2BEzuGmTuRFn88k22cisrBIXYzwGwL8YWVGb3Fn%2BKN7u8PKh8rsR7oyemr23TTl5ajR%2F%2Fr6qjs%2BTwByeFvoCAOudE%2FAK6BigAwfv%2Frcizih9gc3EqJbePJ7ZzbLBRtSy7F5GM%2FqozwBqyuOgDETae6uzuG7KnrDR%2F1FUrYkFSC5h%2Bk6V9ubG4nFrAhAXXevhqEJv7vt04us%2F5i6icspUwDC6b9T%2FIJYDjX7sAvDkAF4FgTVflmTGVtQ%2BKXhwTboqxidI8N30U0dhaH86cOX0DVLa27IkiOl1yY9Mn5XdfSOBKNgzj%2FfhBd6O5wWcKxMsI3MICD9L0GOqUB5Q41%2F%2Ffm2x14gqm9%2BcloviOlIn1MeFGUYiOEpdZFk7RlZMCjDsp%2B%2FAZCx70rIOm8%2BD0jEvagHq4uQum79i4ARjJN1DfVyTnx1tmBmK6PyI8v7z%2F4kEYRwuxlZLBLe04D%2BgkkuXAMtJxg7fNo%2FftrV7zO7926sgrJ%2BFF2SkR9Kt%2BBOplKbk4MuP5hUGKiyIv5RWkcE3vTVh364Ke09Xr62iNqYhPP&X-Amz-Signature=20dbd434604685e398dab67ccb10345286f8d7cf7ff51b7878484a1d5dcff3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIMMUGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICS8S2vpog0M65SEdJG24TNXaFwN2c3fi0%2FQE9LEHDFGAiEA7j7iHINBTQubjrSWGweWMUFq%2BlIC6qtSVA78SPmCrQAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCK7GPGQGBh%2Bt5Pq6yrcAy7QFwUW%2F4ZcmPRgP4MUu3e1SLbKS0MplTEYD8bMgx5LhrPX9h5BChZiN%2BvgdzZXXUluAFw%2BC7Bg%2Fzza%2FyEXdQyUBa2djNZWyvcoAwmsreONFE%2F9zv3ilYvwtcRGIKkpu3CVmSEdsvYDI8idUHDNGey%2FwU5NcjvRvxNMxy9CFUhLkL%2BiW8ENVqc%2Fm9f3%2FRCET8DkoeMJ6aFf%2B1K2dAelOkBNyxvL0bdO5q0oL2uZY%2BZVGu4n1cdtJigZ709k%2FFLSSiptk4rDMyCRM0jj%2BNllQXbOahUZc0vvRAk%2BMHpR9kCCufVbBCE0GwIwGVt%2BEzuGmTuRFn88k22cisrBIXYzwGwL8YWVGb3Fn%2BKN7u8PKh8rsR7oyemr23TTl5ajR%2F%2Fr6qjs%2BTwByeFvoCAOudE%2FAK6BigAwfv%2Frcizih9gc3EqJbePJ7ZzbLBRtSy7F5GM%2FqozwBqyuOgDETae6uzuG7KnrDR%2F1FUrYkFSC5h%2Bk6V9ubG4nFrAhAXXevhqEJv7vt04us%2F5i6icspUwDC6b9T%2FIJYDjX7sAvDkAF4FgTVflmTGVtQ%2BKXhwTboqxidI8N30U0dhaH86cOX0DVLa27IkiOl1yY9Mn5XdfSOBKNgzj%2FfhBd6O5wWcKxMsI3MICD9L0GOqUB5Q41%2F%2Ffm2x14gqm9%2BcloviOlIn1MeFGUYiOEpdZFk7RlZMCjDsp%2B%2FAZCx70rIOm8%2BD0jEvagHq4uQum79i4ARjJN1DfVyTnx1tmBmK6PyI8v7z%2F4kEYRwuxlZLBLe04D%2BgkkuXAMtJxg7fNo%2FftrV7zO7926sgrJ%2BFF2SkR9Kt%2BBOplKbk4MuP5hUGKiyIv5RWkcE3vTVh364Ke09Xr62iNqYhPP&X-Amz-Signature=a3cbe94b8f75ce8a7c2d99fa1873b7d9fb98b2a9be0cb52e9ef3e5cde446e04d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIMMUGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICS8S2vpog0M65SEdJG24TNXaFwN2c3fi0%2FQE9LEHDFGAiEA7j7iHINBTQubjrSWGweWMUFq%2BlIC6qtSVA78SPmCrQAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCK7GPGQGBh%2Bt5Pq6yrcAy7QFwUW%2F4ZcmPRgP4MUu3e1SLbKS0MplTEYD8bMgx5LhrPX9h5BChZiN%2BvgdzZXXUluAFw%2BC7Bg%2Fzza%2FyEXdQyUBa2djNZWyvcoAwmsreONFE%2F9zv3ilYvwtcRGIKkpu3CVmSEdsvYDI8idUHDNGey%2FwU5NcjvRvxNMxy9CFUhLkL%2BiW8ENVqc%2Fm9f3%2FRCET8DkoeMJ6aFf%2B1K2dAelOkBNyxvL0bdO5q0oL2uZY%2BZVGu4n1cdtJigZ709k%2FFLSSiptk4rDMyCRM0jj%2BNllQXbOahUZc0vvRAk%2BMHpR9kCCufVbBCE0GwIwGVt%2BEzuGmTuRFn88k22cisrBIXYzwGwL8YWVGb3Fn%2BKN7u8PKh8rsR7oyemr23TTl5ajR%2F%2Fr6qjs%2BTwByeFvoCAOudE%2FAK6BigAwfv%2Frcizih9gc3EqJbePJ7ZzbLBRtSy7F5GM%2FqozwBqyuOgDETae6uzuG7KnrDR%2F1FUrYkFSC5h%2Bk6V9ubG4nFrAhAXXevhqEJv7vt04us%2F5i6icspUwDC6b9T%2FIJYDjX7sAvDkAF4FgTVflmTGVtQ%2BKXhwTboqxidI8N30U0dhaH86cOX0DVLa27IkiOl1yY9Mn5XdfSOBKNgzj%2FfhBd6O5wWcKxMsI3MICD9L0GOqUB5Q41%2F%2Ffm2x14gqm9%2BcloviOlIn1MeFGUYiOEpdZFk7RlZMCjDsp%2B%2FAZCx70rIOm8%2BD0jEvagHq4uQum79i4ARjJN1DfVyTnx1tmBmK6PyI8v7z%2F4kEYRwuxlZLBLe04D%2BgkkuXAMtJxg7fNo%2FftrV7zO7926sgrJ%2BFF2SkR9Kt%2BBOplKbk4MuP5hUGKiyIv5RWkcE3vTVh364Ke09Xr62iNqYhPP&X-Amz-Signature=d7f7053c7f1d1b55a568d42507e3cf34a1fb303787e35acfb6b434380b45e0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIMMUGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICS8S2vpog0M65SEdJG24TNXaFwN2c3fi0%2FQE9LEHDFGAiEA7j7iHINBTQubjrSWGweWMUFq%2BlIC6qtSVA78SPmCrQAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCK7GPGQGBh%2Bt5Pq6yrcAy7QFwUW%2F4ZcmPRgP4MUu3e1SLbKS0MplTEYD8bMgx5LhrPX9h5BChZiN%2BvgdzZXXUluAFw%2BC7Bg%2Fzza%2FyEXdQyUBa2djNZWyvcoAwmsreONFE%2F9zv3ilYvwtcRGIKkpu3CVmSEdsvYDI8idUHDNGey%2FwU5NcjvRvxNMxy9CFUhLkL%2BiW8ENVqc%2Fm9f3%2FRCET8DkoeMJ6aFf%2B1K2dAelOkBNyxvL0bdO5q0oL2uZY%2BZVGu4n1cdtJigZ709k%2FFLSSiptk4rDMyCRM0jj%2BNllQXbOahUZc0vvRAk%2BMHpR9kCCufVbBCE0GwIwGVt%2BEzuGmTuRFn88k22cisrBIXYzwGwL8YWVGb3Fn%2BKN7u8PKh8rsR7oyemr23TTl5ajR%2F%2Fr6qjs%2BTwByeFvoCAOudE%2FAK6BigAwfv%2Frcizih9gc3EqJbePJ7ZzbLBRtSy7F5GM%2FqozwBqyuOgDETae6uzuG7KnrDR%2F1FUrYkFSC5h%2Bk6V9ubG4nFrAhAXXevhqEJv7vt04us%2F5i6icspUwDC6b9T%2FIJYDjX7sAvDkAF4FgTVflmTGVtQ%2BKXhwTboqxidI8N30U0dhaH86cOX0DVLa27IkiOl1yY9Mn5XdfSOBKNgzj%2FfhBd6O5wWcKxMsI3MICD9L0GOqUB5Q41%2F%2Ffm2x14gqm9%2BcloviOlIn1MeFGUYiOEpdZFk7RlZMCjDsp%2B%2FAZCx70rIOm8%2BD0jEvagHq4uQum79i4ARjJN1DfVyTnx1tmBmK6PyI8v7z%2F4kEYRwuxlZLBLe04D%2BgkkuXAMtJxg7fNo%2FftrV7zO7926sgrJ%2BFF2SkR9Kt%2BBOplKbk4MuP5hUGKiyIv5RWkcE3vTVh364Ke09Xr62iNqYhPP&X-Amz-Signature=849c90b962a7cd4d04d25df021eb967d57142be484f42abe55a1756b7719d653&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIMMUGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICS8S2vpog0M65SEdJG24TNXaFwN2c3fi0%2FQE9LEHDFGAiEA7j7iHINBTQubjrSWGweWMUFq%2BlIC6qtSVA78SPmCrQAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCK7GPGQGBh%2Bt5Pq6yrcAy7QFwUW%2F4ZcmPRgP4MUu3e1SLbKS0MplTEYD8bMgx5LhrPX9h5BChZiN%2BvgdzZXXUluAFw%2BC7Bg%2Fzza%2FyEXdQyUBa2djNZWyvcoAwmsreONFE%2F9zv3ilYvwtcRGIKkpu3CVmSEdsvYDI8idUHDNGey%2FwU5NcjvRvxNMxy9CFUhLkL%2BiW8ENVqc%2Fm9f3%2FRCET8DkoeMJ6aFf%2B1K2dAelOkBNyxvL0bdO5q0oL2uZY%2BZVGu4n1cdtJigZ709k%2FFLSSiptk4rDMyCRM0jj%2BNllQXbOahUZc0vvRAk%2BMHpR9kCCufVbBCE0GwIwGVt%2BEzuGmTuRFn88k22cisrBIXYzwGwL8YWVGb3Fn%2BKN7u8PKh8rsR7oyemr23TTl5ajR%2F%2Fr6qjs%2BTwByeFvoCAOudE%2FAK6BigAwfv%2Frcizih9gc3EqJbePJ7ZzbLBRtSy7F5GM%2FqozwBqyuOgDETae6uzuG7KnrDR%2F1FUrYkFSC5h%2Bk6V9ubG4nFrAhAXXevhqEJv7vt04us%2F5i6icspUwDC6b9T%2FIJYDjX7sAvDkAF4FgTVflmTGVtQ%2BKXhwTboqxidI8N30U0dhaH86cOX0DVLa27IkiOl1yY9Mn5XdfSOBKNgzj%2FfhBd6O5wWcKxMsI3MICD9L0GOqUB5Q41%2F%2Ffm2x14gqm9%2BcloviOlIn1MeFGUYiOEpdZFk7RlZMCjDsp%2B%2FAZCx70rIOm8%2BD0jEvagHq4uQum79i4ARjJN1DfVyTnx1tmBmK6PyI8v7z%2F4kEYRwuxlZLBLe04D%2BgkkuXAMtJxg7fNo%2FftrV7zO7926sgrJ%2BFF2SkR9Kt%2BBOplKbk4MuP5hUGKiyIv5RWkcE3vTVh364Ke09Xr62iNqYhPP&X-Amz-Signature=88102f1f263c1f147ce3b4cea1331d0949d01a4d0c1266d2b30f4e0343cc161d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIMMUGX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCICS8S2vpog0M65SEdJG24TNXaFwN2c3fi0%2FQE9LEHDFGAiEA7j7iHINBTQubjrSWGweWMUFq%2BlIC6qtSVA78SPmCrQAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCK7GPGQGBh%2Bt5Pq6yrcAy7QFwUW%2F4ZcmPRgP4MUu3e1SLbKS0MplTEYD8bMgx5LhrPX9h5BChZiN%2BvgdzZXXUluAFw%2BC7Bg%2Fzza%2FyEXdQyUBa2djNZWyvcoAwmsreONFE%2F9zv3ilYvwtcRGIKkpu3CVmSEdsvYDI8idUHDNGey%2FwU5NcjvRvxNMxy9CFUhLkL%2BiW8ENVqc%2Fm9f3%2FRCET8DkoeMJ6aFf%2B1K2dAelOkBNyxvL0bdO5q0oL2uZY%2BZVGu4n1cdtJigZ709k%2FFLSSiptk4rDMyCRM0jj%2BNllQXbOahUZc0vvRAk%2BMHpR9kCCufVbBCE0GwIwGVt%2BEzuGmTuRFn88k22cisrBIXYzwGwL8YWVGb3Fn%2BKN7u8PKh8rsR7oyemr23TTl5ajR%2F%2Fr6qjs%2BTwByeFvoCAOudE%2FAK6BigAwfv%2Frcizih9gc3EqJbePJ7ZzbLBRtSy7F5GM%2FqozwBqyuOgDETae6uzuG7KnrDR%2F1FUrYkFSC5h%2Bk6V9ubG4nFrAhAXXevhqEJv7vt04us%2F5i6icspUwDC6b9T%2FIJYDjX7sAvDkAF4FgTVflmTGVtQ%2BKXhwTboqxidI8N30U0dhaH86cOX0DVLa27IkiOl1yY9Mn5XdfSOBKNgzj%2FfhBd6O5wWcKxMsI3MICD9L0GOqUB5Q41%2F%2Ffm2x14gqm9%2BcloviOlIn1MeFGUYiOEpdZFk7RlZMCjDsp%2B%2FAZCx70rIOm8%2BD0jEvagHq4uQum79i4ARjJN1DfVyTnx1tmBmK6PyI8v7z%2F4kEYRwuxlZLBLe04D%2BgkkuXAMtJxg7fNo%2FftrV7zO7926sgrJ%2BFF2SkR9Kt%2BBOplKbk4MuP5hUGKiyIv5RWkcE3vTVh364Ke09Xr62iNqYhPP&X-Amz-Signature=b30fa34e19f3ca68f33e4af2be06a24bc66d22a58620ecb651253c659d4a98de&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
