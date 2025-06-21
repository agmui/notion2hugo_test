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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNTHFRH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSxEpGhVlVx5EK5OKvxpKva8B7e72HjHpwKkkGCD%2F%2FnAiA0nGF6d0FSN2790v0wXF%2BipoQ4anLlgKw07QIU5VOc0iqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAJRhyNripb1cFpTKtwDBeHY8mMvmTmDEtrkJniFvIpI4a10kZxJFetcKJjT6YWeE1X5Rc1RvX%2F8IDzr9uVePzmAnzzO9h83uxju2U9jgGx8Xcmw%2FEzxN%2FJg5zrA96U%2BGLa%2BT4YIjj1lIolrl8lnKosC%2FWrxkEi9TIlZa3zYB09Wp%2B1ypUcKsCy1EOTLBQyVfvJDQhbIgAv%2FjqgdM%2BY8cggFR74pQMDSKt3tGWuQCGvxYRehAl6I83847FZvIndhtxyRDS8h%2FEMOzd8rt86KVPOWQNKSRFT9rbz3Ld9Q4RqX3L5%2FuMB2zzdBjvHOktcd0UsePLJYLKjf7fd4Dg6PBgtJ33rs6nZTuV8Qn7adyYOn9kBWauyvzDeixHzjp%2BDA1dgwMLifUUP6lIVTqmH85mqaK57Q3FyotvKhVIPBCFmP%2FYw391xqNZfkmr6z%2B98mq%2Bbcv9RksrSMxvBAbXkwr8YCO5e5cJVK%2BlZez3lXmZkteusOX5ordZF0Vyoo5KWjc0z2qAedHE1GAANQJFknsjw1e5rOvTtR%2B2%2B9x5w9%2FoICSBDfaShaNN0KN%2FdYb4nFUF1U5qOJZ3sqK3O03%2BETHD1tWpRtQboGuuh%2BZR2m2u430tjnamkX2S6G6KAJf1%2BXSM8nKqaazNcuthQw26DXwgY6pgHgXGt04NDAp%2Bu%2BuXo%2BgXcHJDaR%2BIdQRV7kcgxQE4pahFeL45DUuhNlWHULJa9rgd5mvZ0PgqRT7kxZlgUlBV118bAgggEDsQNbGMjeaRmG96jTy7em6x%2B14untD%2B%2Fmwbj5MYjB5E7MsPSsb5r1TDHUBVKeTK4OVTTqDVbo1vFV3%2F1cJ04SD%2FU4M3BW12z%2FtH7EJfjfh5yGgImkILjnXmw2zliQZjLy&X-Amz-Signature=55ae1e8d4a0fea52d8a2f7be5e714d68c3e12db79dd74be3a0b2b4719664b850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNTHFRH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSxEpGhVlVx5EK5OKvxpKva8B7e72HjHpwKkkGCD%2F%2FnAiA0nGF6d0FSN2790v0wXF%2BipoQ4anLlgKw07QIU5VOc0iqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAJRhyNripb1cFpTKtwDBeHY8mMvmTmDEtrkJniFvIpI4a10kZxJFetcKJjT6YWeE1X5Rc1RvX%2F8IDzr9uVePzmAnzzO9h83uxju2U9jgGx8Xcmw%2FEzxN%2FJg5zrA96U%2BGLa%2BT4YIjj1lIolrl8lnKosC%2FWrxkEi9TIlZa3zYB09Wp%2B1ypUcKsCy1EOTLBQyVfvJDQhbIgAv%2FjqgdM%2BY8cggFR74pQMDSKt3tGWuQCGvxYRehAl6I83847FZvIndhtxyRDS8h%2FEMOzd8rt86KVPOWQNKSRFT9rbz3Ld9Q4RqX3L5%2FuMB2zzdBjvHOktcd0UsePLJYLKjf7fd4Dg6PBgtJ33rs6nZTuV8Qn7adyYOn9kBWauyvzDeixHzjp%2BDA1dgwMLifUUP6lIVTqmH85mqaK57Q3FyotvKhVIPBCFmP%2FYw391xqNZfkmr6z%2B98mq%2Bbcv9RksrSMxvBAbXkwr8YCO5e5cJVK%2BlZez3lXmZkteusOX5ordZF0Vyoo5KWjc0z2qAedHE1GAANQJFknsjw1e5rOvTtR%2B2%2B9x5w9%2FoICSBDfaShaNN0KN%2FdYb4nFUF1U5qOJZ3sqK3O03%2BETHD1tWpRtQboGuuh%2BZR2m2u430tjnamkX2S6G6KAJf1%2BXSM8nKqaazNcuthQw26DXwgY6pgHgXGt04NDAp%2Bu%2BuXo%2BgXcHJDaR%2BIdQRV7kcgxQE4pahFeL45DUuhNlWHULJa9rgd5mvZ0PgqRT7kxZlgUlBV118bAgggEDsQNbGMjeaRmG96jTy7em6x%2B14untD%2B%2Fmwbj5MYjB5E7MsPSsb5r1TDHUBVKeTK4OVTTqDVbo1vFV3%2F1cJ04SD%2FU4M3BW12z%2FtH7EJfjfh5yGgImkILjnXmw2zliQZjLy&X-Amz-Signature=6f977249c95d17049ee484c815bf322472f0d69ea316977ed94fe671e21c5b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNTHFRH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSxEpGhVlVx5EK5OKvxpKva8B7e72HjHpwKkkGCD%2F%2FnAiA0nGF6d0FSN2790v0wXF%2BipoQ4anLlgKw07QIU5VOc0iqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAJRhyNripb1cFpTKtwDBeHY8mMvmTmDEtrkJniFvIpI4a10kZxJFetcKJjT6YWeE1X5Rc1RvX%2F8IDzr9uVePzmAnzzO9h83uxju2U9jgGx8Xcmw%2FEzxN%2FJg5zrA96U%2BGLa%2BT4YIjj1lIolrl8lnKosC%2FWrxkEi9TIlZa3zYB09Wp%2B1ypUcKsCy1EOTLBQyVfvJDQhbIgAv%2FjqgdM%2BY8cggFR74pQMDSKt3tGWuQCGvxYRehAl6I83847FZvIndhtxyRDS8h%2FEMOzd8rt86KVPOWQNKSRFT9rbz3Ld9Q4RqX3L5%2FuMB2zzdBjvHOktcd0UsePLJYLKjf7fd4Dg6PBgtJ33rs6nZTuV8Qn7adyYOn9kBWauyvzDeixHzjp%2BDA1dgwMLifUUP6lIVTqmH85mqaK57Q3FyotvKhVIPBCFmP%2FYw391xqNZfkmr6z%2B98mq%2Bbcv9RksrSMxvBAbXkwr8YCO5e5cJVK%2BlZez3lXmZkteusOX5ordZF0Vyoo5KWjc0z2qAedHE1GAANQJFknsjw1e5rOvTtR%2B2%2B9x5w9%2FoICSBDfaShaNN0KN%2FdYb4nFUF1U5qOJZ3sqK3O03%2BETHD1tWpRtQboGuuh%2BZR2m2u430tjnamkX2S6G6KAJf1%2BXSM8nKqaazNcuthQw26DXwgY6pgHgXGt04NDAp%2Bu%2BuXo%2BgXcHJDaR%2BIdQRV7kcgxQE4pahFeL45DUuhNlWHULJa9rgd5mvZ0PgqRT7kxZlgUlBV118bAgggEDsQNbGMjeaRmG96jTy7em6x%2B14untD%2B%2Fmwbj5MYjB5E7MsPSsb5r1TDHUBVKeTK4OVTTqDVbo1vFV3%2F1cJ04SD%2FU4M3BW12z%2FtH7EJfjfh5yGgImkILjnXmw2zliQZjLy&X-Amz-Signature=4c85073bc534e32c67c2d64b12c148d66809f3f4638b18aa67c061f4a4d15b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNTHFRH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSxEpGhVlVx5EK5OKvxpKva8B7e72HjHpwKkkGCD%2F%2FnAiA0nGF6d0FSN2790v0wXF%2BipoQ4anLlgKw07QIU5VOc0iqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAJRhyNripb1cFpTKtwDBeHY8mMvmTmDEtrkJniFvIpI4a10kZxJFetcKJjT6YWeE1X5Rc1RvX%2F8IDzr9uVePzmAnzzO9h83uxju2U9jgGx8Xcmw%2FEzxN%2FJg5zrA96U%2BGLa%2BT4YIjj1lIolrl8lnKosC%2FWrxkEi9TIlZa3zYB09Wp%2B1ypUcKsCy1EOTLBQyVfvJDQhbIgAv%2FjqgdM%2BY8cggFR74pQMDSKt3tGWuQCGvxYRehAl6I83847FZvIndhtxyRDS8h%2FEMOzd8rt86KVPOWQNKSRFT9rbz3Ld9Q4RqX3L5%2FuMB2zzdBjvHOktcd0UsePLJYLKjf7fd4Dg6PBgtJ33rs6nZTuV8Qn7adyYOn9kBWauyvzDeixHzjp%2BDA1dgwMLifUUP6lIVTqmH85mqaK57Q3FyotvKhVIPBCFmP%2FYw391xqNZfkmr6z%2B98mq%2Bbcv9RksrSMxvBAbXkwr8YCO5e5cJVK%2BlZez3lXmZkteusOX5ordZF0Vyoo5KWjc0z2qAedHE1GAANQJFknsjw1e5rOvTtR%2B2%2B9x5w9%2FoICSBDfaShaNN0KN%2FdYb4nFUF1U5qOJZ3sqK3O03%2BETHD1tWpRtQboGuuh%2BZR2m2u430tjnamkX2S6G6KAJf1%2BXSM8nKqaazNcuthQw26DXwgY6pgHgXGt04NDAp%2Bu%2BuXo%2BgXcHJDaR%2BIdQRV7kcgxQE4pahFeL45DUuhNlWHULJa9rgd5mvZ0PgqRT7kxZlgUlBV118bAgggEDsQNbGMjeaRmG96jTy7em6x%2B14untD%2B%2Fmwbj5MYjB5E7MsPSsb5r1TDHUBVKeTK4OVTTqDVbo1vFV3%2F1cJ04SD%2FU4M3BW12z%2FtH7EJfjfh5yGgImkILjnXmw2zliQZjLy&X-Amz-Signature=dae4034572e681b9a4a2043967f55445e01ec5a18fe2a978ea284331901ba327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNTHFRH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSxEpGhVlVx5EK5OKvxpKva8B7e72HjHpwKkkGCD%2F%2FnAiA0nGF6d0FSN2790v0wXF%2BipoQ4anLlgKw07QIU5VOc0iqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAJRhyNripb1cFpTKtwDBeHY8mMvmTmDEtrkJniFvIpI4a10kZxJFetcKJjT6YWeE1X5Rc1RvX%2F8IDzr9uVePzmAnzzO9h83uxju2U9jgGx8Xcmw%2FEzxN%2FJg5zrA96U%2BGLa%2BT4YIjj1lIolrl8lnKosC%2FWrxkEi9TIlZa3zYB09Wp%2B1ypUcKsCy1EOTLBQyVfvJDQhbIgAv%2FjqgdM%2BY8cggFR74pQMDSKt3tGWuQCGvxYRehAl6I83847FZvIndhtxyRDS8h%2FEMOzd8rt86KVPOWQNKSRFT9rbz3Ld9Q4RqX3L5%2FuMB2zzdBjvHOktcd0UsePLJYLKjf7fd4Dg6PBgtJ33rs6nZTuV8Qn7adyYOn9kBWauyvzDeixHzjp%2BDA1dgwMLifUUP6lIVTqmH85mqaK57Q3FyotvKhVIPBCFmP%2FYw391xqNZfkmr6z%2B98mq%2Bbcv9RksrSMxvBAbXkwr8YCO5e5cJVK%2BlZez3lXmZkteusOX5ordZF0Vyoo5KWjc0z2qAedHE1GAANQJFknsjw1e5rOvTtR%2B2%2B9x5w9%2FoICSBDfaShaNN0KN%2FdYb4nFUF1U5qOJZ3sqK3O03%2BETHD1tWpRtQboGuuh%2BZR2m2u430tjnamkX2S6G6KAJf1%2BXSM8nKqaazNcuthQw26DXwgY6pgHgXGt04NDAp%2Bu%2BuXo%2BgXcHJDaR%2BIdQRV7kcgxQE4pahFeL45DUuhNlWHULJa9rgd5mvZ0PgqRT7kxZlgUlBV118bAgggEDsQNbGMjeaRmG96jTy7em6x%2B14untD%2B%2Fmwbj5MYjB5E7MsPSsb5r1TDHUBVKeTK4OVTTqDVbo1vFV3%2F1cJ04SD%2FU4M3BW12z%2FtH7EJfjfh5yGgImkILjnXmw2zliQZjLy&X-Amz-Signature=92484cce9421fad69eb99e13ec4fb9e0d1041fddae637538971c5d3ce205e303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNTHFRH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSxEpGhVlVx5EK5OKvxpKva8B7e72HjHpwKkkGCD%2F%2FnAiA0nGF6d0FSN2790v0wXF%2BipoQ4anLlgKw07QIU5VOc0iqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAJRhyNripb1cFpTKtwDBeHY8mMvmTmDEtrkJniFvIpI4a10kZxJFetcKJjT6YWeE1X5Rc1RvX%2F8IDzr9uVePzmAnzzO9h83uxju2U9jgGx8Xcmw%2FEzxN%2FJg5zrA96U%2BGLa%2BT4YIjj1lIolrl8lnKosC%2FWrxkEi9TIlZa3zYB09Wp%2B1ypUcKsCy1EOTLBQyVfvJDQhbIgAv%2FjqgdM%2BY8cggFR74pQMDSKt3tGWuQCGvxYRehAl6I83847FZvIndhtxyRDS8h%2FEMOzd8rt86KVPOWQNKSRFT9rbz3Ld9Q4RqX3L5%2FuMB2zzdBjvHOktcd0UsePLJYLKjf7fd4Dg6PBgtJ33rs6nZTuV8Qn7adyYOn9kBWauyvzDeixHzjp%2BDA1dgwMLifUUP6lIVTqmH85mqaK57Q3FyotvKhVIPBCFmP%2FYw391xqNZfkmr6z%2B98mq%2Bbcv9RksrSMxvBAbXkwr8YCO5e5cJVK%2BlZez3lXmZkteusOX5ordZF0Vyoo5KWjc0z2qAedHE1GAANQJFknsjw1e5rOvTtR%2B2%2B9x5w9%2FoICSBDfaShaNN0KN%2FdYb4nFUF1U5qOJZ3sqK3O03%2BETHD1tWpRtQboGuuh%2BZR2m2u430tjnamkX2S6G6KAJf1%2BXSM8nKqaazNcuthQw26DXwgY6pgHgXGt04NDAp%2Bu%2BuXo%2BgXcHJDaR%2BIdQRV7kcgxQE4pahFeL45DUuhNlWHULJa9rgd5mvZ0PgqRT7kxZlgUlBV118bAgggEDsQNbGMjeaRmG96jTy7em6x%2B14untD%2B%2Fmwbj5MYjB5E7MsPSsb5r1TDHUBVKeTK4OVTTqDVbo1vFV3%2F1cJ04SD%2FU4M3BW12z%2FtH7EJfjfh5yGgImkILjnXmw2zliQZjLy&X-Amz-Signature=c4f08c56a2340cfdd0d366041770d537cff8f403a41fdf573bfc0e2922a083e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNTHFRH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSxEpGhVlVx5EK5OKvxpKva8B7e72HjHpwKkkGCD%2F%2FnAiA0nGF6d0FSN2790v0wXF%2BipoQ4anLlgKw07QIU5VOc0iqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQAJRhyNripb1cFpTKtwDBeHY8mMvmTmDEtrkJniFvIpI4a10kZxJFetcKJjT6YWeE1X5Rc1RvX%2F8IDzr9uVePzmAnzzO9h83uxju2U9jgGx8Xcmw%2FEzxN%2FJg5zrA96U%2BGLa%2BT4YIjj1lIolrl8lnKosC%2FWrxkEi9TIlZa3zYB09Wp%2B1ypUcKsCy1EOTLBQyVfvJDQhbIgAv%2FjqgdM%2BY8cggFR74pQMDSKt3tGWuQCGvxYRehAl6I83847FZvIndhtxyRDS8h%2FEMOzd8rt86KVPOWQNKSRFT9rbz3Ld9Q4RqX3L5%2FuMB2zzdBjvHOktcd0UsePLJYLKjf7fd4Dg6PBgtJ33rs6nZTuV8Qn7adyYOn9kBWauyvzDeixHzjp%2BDA1dgwMLifUUP6lIVTqmH85mqaK57Q3FyotvKhVIPBCFmP%2FYw391xqNZfkmr6z%2B98mq%2Bbcv9RksrSMxvBAbXkwr8YCO5e5cJVK%2BlZez3lXmZkteusOX5ordZF0Vyoo5KWjc0z2qAedHE1GAANQJFknsjw1e5rOvTtR%2B2%2B9x5w9%2FoICSBDfaShaNN0KN%2FdYb4nFUF1U5qOJZ3sqK3O03%2BETHD1tWpRtQboGuuh%2BZR2m2u430tjnamkX2S6G6KAJf1%2BXSM8nKqaazNcuthQw26DXwgY6pgHgXGt04NDAp%2Bu%2BuXo%2BgXcHJDaR%2BIdQRV7kcgxQE4pahFeL45DUuhNlWHULJa9rgd5mvZ0PgqRT7kxZlgUlBV118bAgggEDsQNbGMjeaRmG96jTy7em6x%2B14untD%2B%2Fmwbj5MYjB5E7MsPSsb5r1TDHUBVKeTK4OVTTqDVbo1vFV3%2F1cJ04SD%2FU4M3BW12z%2FtH7EJfjfh5yGgImkILjnXmw2zliQZjLy&X-Amz-Signature=783799ec44c33732aa92f8aaae1fe19ebdbfec0c895886e5fa7a6bdada2dd6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
