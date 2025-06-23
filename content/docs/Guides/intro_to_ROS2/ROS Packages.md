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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQM6XDW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDw2pBr04nGnLkbayky6qP%2B5wozwf0wWduCxdoMD23tlAIgNv90Ugbn9lknZ6nT3frUMsULNBKTlomgtUeUuNr560kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMryK0hFQB3gju6mlSrcA9ACHP6g4LQU9IGJVeVmmLX1ZNMbPZeDX%2B4ViUshzaW4owZHjcsHju3L6Li1UzMsCovoxhn69X5b93Lgei7q3ViVUIkng9QLQIkzhVaUhpeUnwwsHY%2BMHdvNE1oN7Jeh4%2BxuAKASDZU8flYJ6y0YQD45qAgLxudgZEBld2V7IANPp5VeM1xn5CPcX6TMw%2BfXhQGTuxiRFihqr7TukHk0Nnpjfw%2FarPvAKUeMNgCR1ERBzaAHJtBM7PolJ%2F3K8CrJ9fTj3cLBQ7n6MRgqT28qekOkLIJx13ywpiYk5i3oaEMT3JHzoxeUscbSfZnDVgMCMqsVDAmOdvL7kJIkTJF6PgbCu%2BDYbPLKM7PUaAo5XKplSyxj1RUTlcY8CImgIhWeHP%2Bq%2BUYdAfpyF2QBE2nGmdv0UfRkio958Oacr8RLBo%2FG6OzvdMMMLVWbyu6oz7ua0lLC6ov1EVWsWROtML6ADwGtRJmuQu0Kwxl351QYqjlMwooELl200d7ZC48MJi1Zbm3UTezJqBWA8AtQZBnEr3vzgv9IaTUQdM3Pf9wuGlkzwILkEg1xI21hPJ%2B4GYBB4um6Swng%2B8UamRvbuYW%2FOqrA7jAPjRrOpIFtpIBlUU4DQFDW0gwu9Em7%2Bs%2FiMP2q5sIGOqUBD1onEoMl6jqWgHI2i0pmFv63%2Bcf%2F%2BFRQD%2BAy5s1Odij5OwJxMiwcQmdoeeJUZOtzxguyjerWFKKKcWMGRzM%2B1cFr6n6wF8%2FRDi22lsW7TN0fpegRvPtIgSKmZziWg745YYCXBFmTqfat8a1z7lgxFh34w02J0ekQlONqZqen73dvREpBnrnFGQoH8W%2BVTb%2B1t28zReOH9hOuPtYil82uhtvHGyYT&X-Amz-Signature=7f5cb9be580e1c4ba1c1f2a8dddae22734a395c26bb5b01f7773452f0a80335e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQM6XDW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDw2pBr04nGnLkbayky6qP%2B5wozwf0wWduCxdoMD23tlAIgNv90Ugbn9lknZ6nT3frUMsULNBKTlomgtUeUuNr560kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMryK0hFQB3gju6mlSrcA9ACHP6g4LQU9IGJVeVmmLX1ZNMbPZeDX%2B4ViUshzaW4owZHjcsHju3L6Li1UzMsCovoxhn69X5b93Lgei7q3ViVUIkng9QLQIkzhVaUhpeUnwwsHY%2BMHdvNE1oN7Jeh4%2BxuAKASDZU8flYJ6y0YQD45qAgLxudgZEBld2V7IANPp5VeM1xn5CPcX6TMw%2BfXhQGTuxiRFihqr7TukHk0Nnpjfw%2FarPvAKUeMNgCR1ERBzaAHJtBM7PolJ%2F3K8CrJ9fTj3cLBQ7n6MRgqT28qekOkLIJx13ywpiYk5i3oaEMT3JHzoxeUscbSfZnDVgMCMqsVDAmOdvL7kJIkTJF6PgbCu%2BDYbPLKM7PUaAo5XKplSyxj1RUTlcY8CImgIhWeHP%2Bq%2BUYdAfpyF2QBE2nGmdv0UfRkio958Oacr8RLBo%2FG6OzvdMMMLVWbyu6oz7ua0lLC6ov1EVWsWROtML6ADwGtRJmuQu0Kwxl351QYqjlMwooELl200d7ZC48MJi1Zbm3UTezJqBWA8AtQZBnEr3vzgv9IaTUQdM3Pf9wuGlkzwILkEg1xI21hPJ%2B4GYBB4um6Swng%2B8UamRvbuYW%2FOqrA7jAPjRrOpIFtpIBlUU4DQFDW0gwu9Em7%2Bs%2FiMP2q5sIGOqUBD1onEoMl6jqWgHI2i0pmFv63%2Bcf%2F%2BFRQD%2BAy5s1Odij5OwJxMiwcQmdoeeJUZOtzxguyjerWFKKKcWMGRzM%2B1cFr6n6wF8%2FRDi22lsW7TN0fpegRvPtIgSKmZziWg745YYCXBFmTqfat8a1z7lgxFh34w02J0ekQlONqZqen73dvREpBnrnFGQoH8W%2BVTb%2B1t28zReOH9hOuPtYil82uhtvHGyYT&X-Amz-Signature=9d4b9675b0f7e0153c509efa21e39c93c26e6a45a1984c2800af0268c99c3e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQM6XDW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDw2pBr04nGnLkbayky6qP%2B5wozwf0wWduCxdoMD23tlAIgNv90Ugbn9lknZ6nT3frUMsULNBKTlomgtUeUuNr560kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMryK0hFQB3gju6mlSrcA9ACHP6g4LQU9IGJVeVmmLX1ZNMbPZeDX%2B4ViUshzaW4owZHjcsHju3L6Li1UzMsCovoxhn69X5b93Lgei7q3ViVUIkng9QLQIkzhVaUhpeUnwwsHY%2BMHdvNE1oN7Jeh4%2BxuAKASDZU8flYJ6y0YQD45qAgLxudgZEBld2V7IANPp5VeM1xn5CPcX6TMw%2BfXhQGTuxiRFihqr7TukHk0Nnpjfw%2FarPvAKUeMNgCR1ERBzaAHJtBM7PolJ%2F3K8CrJ9fTj3cLBQ7n6MRgqT28qekOkLIJx13ywpiYk5i3oaEMT3JHzoxeUscbSfZnDVgMCMqsVDAmOdvL7kJIkTJF6PgbCu%2BDYbPLKM7PUaAo5XKplSyxj1RUTlcY8CImgIhWeHP%2Bq%2BUYdAfpyF2QBE2nGmdv0UfRkio958Oacr8RLBo%2FG6OzvdMMMLVWbyu6oz7ua0lLC6ov1EVWsWROtML6ADwGtRJmuQu0Kwxl351QYqjlMwooELl200d7ZC48MJi1Zbm3UTezJqBWA8AtQZBnEr3vzgv9IaTUQdM3Pf9wuGlkzwILkEg1xI21hPJ%2B4GYBB4um6Swng%2B8UamRvbuYW%2FOqrA7jAPjRrOpIFtpIBlUU4DQFDW0gwu9Em7%2Bs%2FiMP2q5sIGOqUBD1onEoMl6jqWgHI2i0pmFv63%2Bcf%2F%2BFRQD%2BAy5s1Odij5OwJxMiwcQmdoeeJUZOtzxguyjerWFKKKcWMGRzM%2B1cFr6n6wF8%2FRDi22lsW7TN0fpegRvPtIgSKmZziWg745YYCXBFmTqfat8a1z7lgxFh34w02J0ekQlONqZqen73dvREpBnrnFGQoH8W%2BVTb%2B1t28zReOH9hOuPtYil82uhtvHGyYT&X-Amz-Signature=8bf1dab18d68159b0b8c5996e9d26acff8504c79d90cb1ff16955a0e355f9659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQM6XDW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDw2pBr04nGnLkbayky6qP%2B5wozwf0wWduCxdoMD23tlAIgNv90Ugbn9lknZ6nT3frUMsULNBKTlomgtUeUuNr560kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMryK0hFQB3gju6mlSrcA9ACHP6g4LQU9IGJVeVmmLX1ZNMbPZeDX%2B4ViUshzaW4owZHjcsHju3L6Li1UzMsCovoxhn69X5b93Lgei7q3ViVUIkng9QLQIkzhVaUhpeUnwwsHY%2BMHdvNE1oN7Jeh4%2BxuAKASDZU8flYJ6y0YQD45qAgLxudgZEBld2V7IANPp5VeM1xn5CPcX6TMw%2BfXhQGTuxiRFihqr7TukHk0Nnpjfw%2FarPvAKUeMNgCR1ERBzaAHJtBM7PolJ%2F3K8CrJ9fTj3cLBQ7n6MRgqT28qekOkLIJx13ywpiYk5i3oaEMT3JHzoxeUscbSfZnDVgMCMqsVDAmOdvL7kJIkTJF6PgbCu%2BDYbPLKM7PUaAo5XKplSyxj1RUTlcY8CImgIhWeHP%2Bq%2BUYdAfpyF2QBE2nGmdv0UfRkio958Oacr8RLBo%2FG6OzvdMMMLVWbyu6oz7ua0lLC6ov1EVWsWROtML6ADwGtRJmuQu0Kwxl351QYqjlMwooELl200d7ZC48MJi1Zbm3UTezJqBWA8AtQZBnEr3vzgv9IaTUQdM3Pf9wuGlkzwILkEg1xI21hPJ%2B4GYBB4um6Swng%2B8UamRvbuYW%2FOqrA7jAPjRrOpIFtpIBlUU4DQFDW0gwu9Em7%2Bs%2FiMP2q5sIGOqUBD1onEoMl6jqWgHI2i0pmFv63%2Bcf%2F%2BFRQD%2BAy5s1Odij5OwJxMiwcQmdoeeJUZOtzxguyjerWFKKKcWMGRzM%2B1cFr6n6wF8%2FRDi22lsW7TN0fpegRvPtIgSKmZziWg745YYCXBFmTqfat8a1z7lgxFh34w02J0ekQlONqZqen73dvREpBnrnFGQoH8W%2BVTb%2B1t28zReOH9hOuPtYil82uhtvHGyYT&X-Amz-Signature=2e672444d93d3ae3440168bd2439b3602c6138390ba2437f9c624f7e797f8e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQM6XDW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDw2pBr04nGnLkbayky6qP%2B5wozwf0wWduCxdoMD23tlAIgNv90Ugbn9lknZ6nT3frUMsULNBKTlomgtUeUuNr560kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMryK0hFQB3gju6mlSrcA9ACHP6g4LQU9IGJVeVmmLX1ZNMbPZeDX%2B4ViUshzaW4owZHjcsHju3L6Li1UzMsCovoxhn69X5b93Lgei7q3ViVUIkng9QLQIkzhVaUhpeUnwwsHY%2BMHdvNE1oN7Jeh4%2BxuAKASDZU8flYJ6y0YQD45qAgLxudgZEBld2V7IANPp5VeM1xn5CPcX6TMw%2BfXhQGTuxiRFihqr7TukHk0Nnpjfw%2FarPvAKUeMNgCR1ERBzaAHJtBM7PolJ%2F3K8CrJ9fTj3cLBQ7n6MRgqT28qekOkLIJx13ywpiYk5i3oaEMT3JHzoxeUscbSfZnDVgMCMqsVDAmOdvL7kJIkTJF6PgbCu%2BDYbPLKM7PUaAo5XKplSyxj1RUTlcY8CImgIhWeHP%2Bq%2BUYdAfpyF2QBE2nGmdv0UfRkio958Oacr8RLBo%2FG6OzvdMMMLVWbyu6oz7ua0lLC6ov1EVWsWROtML6ADwGtRJmuQu0Kwxl351QYqjlMwooELl200d7ZC48MJi1Zbm3UTezJqBWA8AtQZBnEr3vzgv9IaTUQdM3Pf9wuGlkzwILkEg1xI21hPJ%2B4GYBB4um6Swng%2B8UamRvbuYW%2FOqrA7jAPjRrOpIFtpIBlUU4DQFDW0gwu9Em7%2Bs%2FiMP2q5sIGOqUBD1onEoMl6jqWgHI2i0pmFv63%2Bcf%2F%2BFRQD%2BAy5s1Odij5OwJxMiwcQmdoeeJUZOtzxguyjerWFKKKcWMGRzM%2B1cFr6n6wF8%2FRDi22lsW7TN0fpegRvPtIgSKmZziWg745YYCXBFmTqfat8a1z7lgxFh34w02J0ekQlONqZqen73dvREpBnrnFGQoH8W%2BVTb%2B1t28zReOH9hOuPtYil82uhtvHGyYT&X-Amz-Signature=ddcddd9307cf1c43588f36770b4ca2e6c27d502aa899da11652c1f43a97f1814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQM6XDW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDw2pBr04nGnLkbayky6qP%2B5wozwf0wWduCxdoMD23tlAIgNv90Ugbn9lknZ6nT3frUMsULNBKTlomgtUeUuNr560kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMryK0hFQB3gju6mlSrcA9ACHP6g4LQU9IGJVeVmmLX1ZNMbPZeDX%2B4ViUshzaW4owZHjcsHju3L6Li1UzMsCovoxhn69X5b93Lgei7q3ViVUIkng9QLQIkzhVaUhpeUnwwsHY%2BMHdvNE1oN7Jeh4%2BxuAKASDZU8flYJ6y0YQD45qAgLxudgZEBld2V7IANPp5VeM1xn5CPcX6TMw%2BfXhQGTuxiRFihqr7TukHk0Nnpjfw%2FarPvAKUeMNgCR1ERBzaAHJtBM7PolJ%2F3K8CrJ9fTj3cLBQ7n6MRgqT28qekOkLIJx13ywpiYk5i3oaEMT3JHzoxeUscbSfZnDVgMCMqsVDAmOdvL7kJIkTJF6PgbCu%2BDYbPLKM7PUaAo5XKplSyxj1RUTlcY8CImgIhWeHP%2Bq%2BUYdAfpyF2QBE2nGmdv0UfRkio958Oacr8RLBo%2FG6OzvdMMMLVWbyu6oz7ua0lLC6ov1EVWsWROtML6ADwGtRJmuQu0Kwxl351QYqjlMwooELl200d7ZC48MJi1Zbm3UTezJqBWA8AtQZBnEr3vzgv9IaTUQdM3Pf9wuGlkzwILkEg1xI21hPJ%2B4GYBB4um6Swng%2B8UamRvbuYW%2FOqrA7jAPjRrOpIFtpIBlUU4DQFDW0gwu9Em7%2Bs%2FiMP2q5sIGOqUBD1onEoMl6jqWgHI2i0pmFv63%2Bcf%2F%2BFRQD%2BAy5s1Odij5OwJxMiwcQmdoeeJUZOtzxguyjerWFKKKcWMGRzM%2B1cFr6n6wF8%2FRDi22lsW7TN0fpegRvPtIgSKmZziWg745YYCXBFmTqfat8a1z7lgxFh34w02J0ekQlONqZqen73dvREpBnrnFGQoH8W%2BVTb%2B1t28zReOH9hOuPtYil82uhtvHGyYT&X-Amz-Signature=5d8fca0ddfb24383bdde65ec463757f56ef52ad50f2bf6d330e3b369bedf6c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRQM6XDW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDw2pBr04nGnLkbayky6qP%2B5wozwf0wWduCxdoMD23tlAIgNv90Ugbn9lknZ6nT3frUMsULNBKTlomgtUeUuNr560kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMryK0hFQB3gju6mlSrcA9ACHP6g4LQU9IGJVeVmmLX1ZNMbPZeDX%2B4ViUshzaW4owZHjcsHju3L6Li1UzMsCovoxhn69X5b93Lgei7q3ViVUIkng9QLQIkzhVaUhpeUnwwsHY%2BMHdvNE1oN7Jeh4%2BxuAKASDZU8flYJ6y0YQD45qAgLxudgZEBld2V7IANPp5VeM1xn5CPcX6TMw%2BfXhQGTuxiRFihqr7TukHk0Nnpjfw%2FarPvAKUeMNgCR1ERBzaAHJtBM7PolJ%2F3K8CrJ9fTj3cLBQ7n6MRgqT28qekOkLIJx13ywpiYk5i3oaEMT3JHzoxeUscbSfZnDVgMCMqsVDAmOdvL7kJIkTJF6PgbCu%2BDYbPLKM7PUaAo5XKplSyxj1RUTlcY8CImgIhWeHP%2Bq%2BUYdAfpyF2QBE2nGmdv0UfRkio958Oacr8RLBo%2FG6OzvdMMMLVWbyu6oz7ua0lLC6ov1EVWsWROtML6ADwGtRJmuQu0Kwxl351QYqjlMwooELl200d7ZC48MJi1Zbm3UTezJqBWA8AtQZBnEr3vzgv9IaTUQdM3Pf9wuGlkzwILkEg1xI21hPJ%2B4GYBB4um6Swng%2B8UamRvbuYW%2FOqrA7jAPjRrOpIFtpIBlUU4DQFDW0gwu9Em7%2Bs%2FiMP2q5sIGOqUBD1onEoMl6jqWgHI2i0pmFv63%2Bcf%2F%2BFRQD%2BAy5s1Odij5OwJxMiwcQmdoeeJUZOtzxguyjerWFKKKcWMGRzM%2B1cFr6n6wF8%2FRDi22lsW7TN0fpegRvPtIgSKmZziWg745YYCXBFmTqfat8a1z7lgxFh34w02J0ekQlONqZqen73dvREpBnrnFGQoH8W%2BVTb%2B1t28zReOH9hOuPtYil82uhtvHGyYT&X-Amz-Signature=3bdd682dff28afe08a10bbaf3b6e18f45219198596206fe2b2b09d08dd863811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
