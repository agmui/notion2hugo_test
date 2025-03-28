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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNYAC7C%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzbjdxiFBi9a5WT34k8OjdlS8t%2FtPsq9yOWQaLnTa3QAiEAqbbkBnX3k%2FNvPXnWjh8%2BS9Gi4LqQRqJ8kSDTDUzKSNIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM8nioU6gEeugB5UgyrcAzTRQGJZMbOKHbyN%2BRkEi2aJOfvEnK2dBhzSkj61YUC%2BiCF8ju5toglEKjPkH0ai1sOba2jpNB%2F0aKhKb8Z7eo8Fj79sSS0wsjNJYclZ1OLey3ZT2WFz5hC9qj9TzG9N0dFNJyAhX1AApo7vOA3hp2fYMy1gQDT6Pwk40FGIAsoQJFNgAGVXgQiyHDW5%2B%2BVf6IvQvnYucgMOqzufXkySouS1Y3Sa%2BGtQFibIwJEx0pAl%2FgRJyGdBAgc7qPUUQVqeoXI1A3eoGjvHOg6s%2BHhfM6DEFvjETpr0wYwm5NkUpNDOJu2l5wtITiIuUwWkosM%2Bsqx3B3JX%2BX62n9DGFoD7KnAyQBU9rMTLiH%2BIlS2PgKeb3TScNy0bSR5c6UNvWkiokCWG0HdzOTS78JZir77qBmI7cYKnC05bRrkifos%2Fo1tGIUUpscPU9cB3rWZhqrx%2FNP%2FfNbwMSKIzlL%2Fg%2FzKskKM%2F1TZvQICPdP2LDB8HNcnMur%2B7NMS2iIDdbjNHsVcCcwT%2B%2F7JJC9BjR1x7R2hPYnFIhQm0IvqWIT3GwGNwZZBf9dD1RWjtNc2EBRKYtVbCe2hNtNP4QT2W7qRoa3crneJvQ4xghQQcfo0jxuKk7pQRlL8e%2F7Iryuv5wOoqMJuHmb8GOqUBA%2F1K5VqUoFrA6cQcNWy9pUlZgjbKHmnepPUxCDBeNB3xn6uSbGd3AmCFVGn4FO1%2FfLJwaBf0uxEuqcusmHnneHoaoFYeJCNdi%2BTcM53IfjU5SXsLabptfeoI4kNsbGl9MJYHVu7NWLmgj9Az6pzHsvSoSScQ9QQtVc%2BsaneQcJvj2GLMPaFQ98sGcU86kS3simX%2FKVG0qOixhnFmgBrFWPQf9mkE&X-Amz-Signature=b1bb2d1640affa5bfffe4b995aebd05d5d465067620dc00ace778530a5006005&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNYAC7C%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzbjdxiFBi9a5WT34k8OjdlS8t%2FtPsq9yOWQaLnTa3QAiEAqbbkBnX3k%2FNvPXnWjh8%2BS9Gi4LqQRqJ8kSDTDUzKSNIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM8nioU6gEeugB5UgyrcAzTRQGJZMbOKHbyN%2BRkEi2aJOfvEnK2dBhzSkj61YUC%2BiCF8ju5toglEKjPkH0ai1sOba2jpNB%2F0aKhKb8Z7eo8Fj79sSS0wsjNJYclZ1OLey3ZT2WFz5hC9qj9TzG9N0dFNJyAhX1AApo7vOA3hp2fYMy1gQDT6Pwk40FGIAsoQJFNgAGVXgQiyHDW5%2B%2BVf6IvQvnYucgMOqzufXkySouS1Y3Sa%2BGtQFibIwJEx0pAl%2FgRJyGdBAgc7qPUUQVqeoXI1A3eoGjvHOg6s%2BHhfM6DEFvjETpr0wYwm5NkUpNDOJu2l5wtITiIuUwWkosM%2Bsqx3B3JX%2BX62n9DGFoD7KnAyQBU9rMTLiH%2BIlS2PgKeb3TScNy0bSR5c6UNvWkiokCWG0HdzOTS78JZir77qBmI7cYKnC05bRrkifos%2Fo1tGIUUpscPU9cB3rWZhqrx%2FNP%2FfNbwMSKIzlL%2Fg%2FzKskKM%2F1TZvQICPdP2LDB8HNcnMur%2B7NMS2iIDdbjNHsVcCcwT%2B%2F7JJC9BjR1x7R2hPYnFIhQm0IvqWIT3GwGNwZZBf9dD1RWjtNc2EBRKYtVbCe2hNtNP4QT2W7qRoa3crneJvQ4xghQQcfo0jxuKk7pQRlL8e%2F7Iryuv5wOoqMJuHmb8GOqUBA%2F1K5VqUoFrA6cQcNWy9pUlZgjbKHmnepPUxCDBeNB3xn6uSbGd3AmCFVGn4FO1%2FfLJwaBf0uxEuqcusmHnneHoaoFYeJCNdi%2BTcM53IfjU5SXsLabptfeoI4kNsbGl9MJYHVu7NWLmgj9Az6pzHsvSoSScQ9QQtVc%2BsaneQcJvj2GLMPaFQ98sGcU86kS3simX%2FKVG0qOixhnFmgBrFWPQf9mkE&X-Amz-Signature=2813735c336c59a9e415610af0c82b94da49e698da94e6fefd2ca4c5c71223b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNYAC7C%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzbjdxiFBi9a5WT34k8OjdlS8t%2FtPsq9yOWQaLnTa3QAiEAqbbkBnX3k%2FNvPXnWjh8%2BS9Gi4LqQRqJ8kSDTDUzKSNIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM8nioU6gEeugB5UgyrcAzTRQGJZMbOKHbyN%2BRkEi2aJOfvEnK2dBhzSkj61YUC%2BiCF8ju5toglEKjPkH0ai1sOba2jpNB%2F0aKhKb8Z7eo8Fj79sSS0wsjNJYclZ1OLey3ZT2WFz5hC9qj9TzG9N0dFNJyAhX1AApo7vOA3hp2fYMy1gQDT6Pwk40FGIAsoQJFNgAGVXgQiyHDW5%2B%2BVf6IvQvnYucgMOqzufXkySouS1Y3Sa%2BGtQFibIwJEx0pAl%2FgRJyGdBAgc7qPUUQVqeoXI1A3eoGjvHOg6s%2BHhfM6DEFvjETpr0wYwm5NkUpNDOJu2l5wtITiIuUwWkosM%2Bsqx3B3JX%2BX62n9DGFoD7KnAyQBU9rMTLiH%2BIlS2PgKeb3TScNy0bSR5c6UNvWkiokCWG0HdzOTS78JZir77qBmI7cYKnC05bRrkifos%2Fo1tGIUUpscPU9cB3rWZhqrx%2FNP%2FfNbwMSKIzlL%2Fg%2FzKskKM%2F1TZvQICPdP2LDB8HNcnMur%2B7NMS2iIDdbjNHsVcCcwT%2B%2F7JJC9BjR1x7R2hPYnFIhQm0IvqWIT3GwGNwZZBf9dD1RWjtNc2EBRKYtVbCe2hNtNP4QT2W7qRoa3crneJvQ4xghQQcfo0jxuKk7pQRlL8e%2F7Iryuv5wOoqMJuHmb8GOqUBA%2F1K5VqUoFrA6cQcNWy9pUlZgjbKHmnepPUxCDBeNB3xn6uSbGd3AmCFVGn4FO1%2FfLJwaBf0uxEuqcusmHnneHoaoFYeJCNdi%2BTcM53IfjU5SXsLabptfeoI4kNsbGl9MJYHVu7NWLmgj9Az6pzHsvSoSScQ9QQtVc%2BsaneQcJvj2GLMPaFQ98sGcU86kS3simX%2FKVG0qOixhnFmgBrFWPQf9mkE&X-Amz-Signature=8180efd0ee492c33c8382b8686096c9d4609eb5c9d0708fbafcafaf30bafbd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNYAC7C%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzbjdxiFBi9a5WT34k8OjdlS8t%2FtPsq9yOWQaLnTa3QAiEAqbbkBnX3k%2FNvPXnWjh8%2BS9Gi4LqQRqJ8kSDTDUzKSNIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM8nioU6gEeugB5UgyrcAzTRQGJZMbOKHbyN%2BRkEi2aJOfvEnK2dBhzSkj61YUC%2BiCF8ju5toglEKjPkH0ai1sOba2jpNB%2F0aKhKb8Z7eo8Fj79sSS0wsjNJYclZ1OLey3ZT2WFz5hC9qj9TzG9N0dFNJyAhX1AApo7vOA3hp2fYMy1gQDT6Pwk40FGIAsoQJFNgAGVXgQiyHDW5%2B%2BVf6IvQvnYucgMOqzufXkySouS1Y3Sa%2BGtQFibIwJEx0pAl%2FgRJyGdBAgc7qPUUQVqeoXI1A3eoGjvHOg6s%2BHhfM6DEFvjETpr0wYwm5NkUpNDOJu2l5wtITiIuUwWkosM%2Bsqx3B3JX%2BX62n9DGFoD7KnAyQBU9rMTLiH%2BIlS2PgKeb3TScNy0bSR5c6UNvWkiokCWG0HdzOTS78JZir77qBmI7cYKnC05bRrkifos%2Fo1tGIUUpscPU9cB3rWZhqrx%2FNP%2FfNbwMSKIzlL%2Fg%2FzKskKM%2F1TZvQICPdP2LDB8HNcnMur%2B7NMS2iIDdbjNHsVcCcwT%2B%2F7JJC9BjR1x7R2hPYnFIhQm0IvqWIT3GwGNwZZBf9dD1RWjtNc2EBRKYtVbCe2hNtNP4QT2W7qRoa3crneJvQ4xghQQcfo0jxuKk7pQRlL8e%2F7Iryuv5wOoqMJuHmb8GOqUBA%2F1K5VqUoFrA6cQcNWy9pUlZgjbKHmnepPUxCDBeNB3xn6uSbGd3AmCFVGn4FO1%2FfLJwaBf0uxEuqcusmHnneHoaoFYeJCNdi%2BTcM53IfjU5SXsLabptfeoI4kNsbGl9MJYHVu7NWLmgj9Az6pzHsvSoSScQ9QQtVc%2BsaneQcJvj2GLMPaFQ98sGcU86kS3simX%2FKVG0qOixhnFmgBrFWPQf9mkE&X-Amz-Signature=e79f013eeb0f2f534b01bf81f7df8ca2648fa4a803d0c340db9e7672d551c9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNYAC7C%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzbjdxiFBi9a5WT34k8OjdlS8t%2FtPsq9yOWQaLnTa3QAiEAqbbkBnX3k%2FNvPXnWjh8%2BS9Gi4LqQRqJ8kSDTDUzKSNIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM8nioU6gEeugB5UgyrcAzTRQGJZMbOKHbyN%2BRkEi2aJOfvEnK2dBhzSkj61YUC%2BiCF8ju5toglEKjPkH0ai1sOba2jpNB%2F0aKhKb8Z7eo8Fj79sSS0wsjNJYclZ1OLey3ZT2WFz5hC9qj9TzG9N0dFNJyAhX1AApo7vOA3hp2fYMy1gQDT6Pwk40FGIAsoQJFNgAGVXgQiyHDW5%2B%2BVf6IvQvnYucgMOqzufXkySouS1Y3Sa%2BGtQFibIwJEx0pAl%2FgRJyGdBAgc7qPUUQVqeoXI1A3eoGjvHOg6s%2BHhfM6DEFvjETpr0wYwm5NkUpNDOJu2l5wtITiIuUwWkosM%2Bsqx3B3JX%2BX62n9DGFoD7KnAyQBU9rMTLiH%2BIlS2PgKeb3TScNy0bSR5c6UNvWkiokCWG0HdzOTS78JZir77qBmI7cYKnC05bRrkifos%2Fo1tGIUUpscPU9cB3rWZhqrx%2FNP%2FfNbwMSKIzlL%2Fg%2FzKskKM%2F1TZvQICPdP2LDB8HNcnMur%2B7NMS2iIDdbjNHsVcCcwT%2B%2F7JJC9BjR1x7R2hPYnFIhQm0IvqWIT3GwGNwZZBf9dD1RWjtNc2EBRKYtVbCe2hNtNP4QT2W7qRoa3crneJvQ4xghQQcfo0jxuKk7pQRlL8e%2F7Iryuv5wOoqMJuHmb8GOqUBA%2F1K5VqUoFrA6cQcNWy9pUlZgjbKHmnepPUxCDBeNB3xn6uSbGd3AmCFVGn4FO1%2FfLJwaBf0uxEuqcusmHnneHoaoFYeJCNdi%2BTcM53IfjU5SXsLabptfeoI4kNsbGl9MJYHVu7NWLmgj9Az6pzHsvSoSScQ9QQtVc%2BsaneQcJvj2GLMPaFQ98sGcU86kS3simX%2FKVG0qOixhnFmgBrFWPQf9mkE&X-Amz-Signature=a7ea7bfe699add1ae0a8ecc06880ec9dfe09f7af6eec07c6fe3ca682c7406f58&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNYAC7C%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzbjdxiFBi9a5WT34k8OjdlS8t%2FtPsq9yOWQaLnTa3QAiEAqbbkBnX3k%2FNvPXnWjh8%2BS9Gi4LqQRqJ8kSDTDUzKSNIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM8nioU6gEeugB5UgyrcAzTRQGJZMbOKHbyN%2BRkEi2aJOfvEnK2dBhzSkj61YUC%2BiCF8ju5toglEKjPkH0ai1sOba2jpNB%2F0aKhKb8Z7eo8Fj79sSS0wsjNJYclZ1OLey3ZT2WFz5hC9qj9TzG9N0dFNJyAhX1AApo7vOA3hp2fYMy1gQDT6Pwk40FGIAsoQJFNgAGVXgQiyHDW5%2B%2BVf6IvQvnYucgMOqzufXkySouS1Y3Sa%2BGtQFibIwJEx0pAl%2FgRJyGdBAgc7qPUUQVqeoXI1A3eoGjvHOg6s%2BHhfM6DEFvjETpr0wYwm5NkUpNDOJu2l5wtITiIuUwWkosM%2Bsqx3B3JX%2BX62n9DGFoD7KnAyQBU9rMTLiH%2BIlS2PgKeb3TScNy0bSR5c6UNvWkiokCWG0HdzOTS78JZir77qBmI7cYKnC05bRrkifos%2Fo1tGIUUpscPU9cB3rWZhqrx%2FNP%2FfNbwMSKIzlL%2Fg%2FzKskKM%2F1TZvQICPdP2LDB8HNcnMur%2B7NMS2iIDdbjNHsVcCcwT%2B%2F7JJC9BjR1x7R2hPYnFIhQm0IvqWIT3GwGNwZZBf9dD1RWjtNc2EBRKYtVbCe2hNtNP4QT2W7qRoa3crneJvQ4xghQQcfo0jxuKk7pQRlL8e%2F7Iryuv5wOoqMJuHmb8GOqUBA%2F1K5VqUoFrA6cQcNWy9pUlZgjbKHmnepPUxCDBeNB3xn6uSbGd3AmCFVGn4FO1%2FfLJwaBf0uxEuqcusmHnneHoaoFYeJCNdi%2BTcM53IfjU5SXsLabptfeoI4kNsbGl9MJYHVu7NWLmgj9Az6pzHsvSoSScQ9QQtVc%2BsaneQcJvj2GLMPaFQ98sGcU86kS3simX%2FKVG0qOixhnFmgBrFWPQf9mkE&X-Amz-Signature=1e3b51a03e881559ba211d937760336437597eb33f0b9d1f7983cc1367b17093&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKNYAC7C%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzbjdxiFBi9a5WT34k8OjdlS8t%2FtPsq9yOWQaLnTa3QAiEAqbbkBnX3k%2FNvPXnWjh8%2BS9Gi4LqQRqJ8kSDTDUzKSNIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDM8nioU6gEeugB5UgyrcAzTRQGJZMbOKHbyN%2BRkEi2aJOfvEnK2dBhzSkj61YUC%2BiCF8ju5toglEKjPkH0ai1sOba2jpNB%2F0aKhKb8Z7eo8Fj79sSS0wsjNJYclZ1OLey3ZT2WFz5hC9qj9TzG9N0dFNJyAhX1AApo7vOA3hp2fYMy1gQDT6Pwk40FGIAsoQJFNgAGVXgQiyHDW5%2B%2BVf6IvQvnYucgMOqzufXkySouS1Y3Sa%2BGtQFibIwJEx0pAl%2FgRJyGdBAgc7qPUUQVqeoXI1A3eoGjvHOg6s%2BHhfM6DEFvjETpr0wYwm5NkUpNDOJu2l5wtITiIuUwWkosM%2Bsqx3B3JX%2BX62n9DGFoD7KnAyQBU9rMTLiH%2BIlS2PgKeb3TScNy0bSR5c6UNvWkiokCWG0HdzOTS78JZir77qBmI7cYKnC05bRrkifos%2Fo1tGIUUpscPU9cB3rWZhqrx%2FNP%2FfNbwMSKIzlL%2Fg%2FzKskKM%2F1TZvQICPdP2LDB8HNcnMur%2B7NMS2iIDdbjNHsVcCcwT%2B%2F7JJC9BjR1x7R2hPYnFIhQm0IvqWIT3GwGNwZZBf9dD1RWjtNc2EBRKYtVbCe2hNtNP4QT2W7qRoa3crneJvQ4xghQQcfo0jxuKk7pQRlL8e%2F7Iryuv5wOoqMJuHmb8GOqUBA%2F1K5VqUoFrA6cQcNWy9pUlZgjbKHmnepPUxCDBeNB3xn6uSbGd3AmCFVGn4FO1%2FfLJwaBf0uxEuqcusmHnneHoaoFYeJCNdi%2BTcM53IfjU5SXsLabptfeoI4kNsbGl9MJYHVu7NWLmgj9Az6pzHsvSoSScQ9QQtVc%2BsaneQcJvj2GLMPaFQ98sGcU86kS3simX%2FKVG0qOixhnFmgBrFWPQf9mkE&X-Amz-Signature=61159738ecb6e2fc2685f58d2baa2aaafb138d42c90941b136a5050285ce62f9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
