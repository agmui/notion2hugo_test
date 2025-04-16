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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXD67LK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR15VgSs7%2FaYdlGiSxDku9aQDXIT%2BywI3O%2FDJcTnTPpAIgbB%2FuLm6roR1YUaPxKJLIOOCmQyRx8gIw0%2Fw4SF47RsYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBtoWzzL0hk5bYN6tyrcA66juq14C%2FEi3LZf4QeI66gznA3VCydwCFboFrocJszmSp%2BQEdQEs%2BOJ05a2ebPI1N26kVG7FUHYsvPYpOWDJ23b6cYZMPM%2F5ik1lBOsp7J6DiM7rgG3xb2ZoNcvpkCzPsylu0vb3zf6FdChY8knNDosocSh79tdYJbKo%2BEeasQohz%2BmG0fcFVcQHEL5PvJQPSboh1y8INplnqCEaSBJQWYZDK%2BpsrsjFVaOGDRjD%2FU3g1j1rwNkNkIv2rrBRd%2BvTNWcIIP7W87MnJKPXbOONsm18Fxf%2BLbkBoBFVfEC1PUwTepmf1%2FE8bWKuA9G3PmgXvmMPrKP99VcM7JH4CZNKs9t2gof6P69BKjFn2WPsUcZMbdPF7lsbGBVnbXYKV%2B%2BhKGiTEdSAs6QcwRixO5bxvwQnL20hLcnYz%2F7no7QwzA1UsHW%2F3nWmwrPcFc%2B0QUY2aayNpGPTp0oyqHOOh9e%2FCIHrewzMBmss7kR0TNXqkJSxAXYGDDuVS98pNNRBu0TjkEOkQaHB6rytIYG6aDS6oAb%2FhHRGGT10ydSh%2B7MpuYp1uJv3uFsGiLaWibKJAZ9eQUiSZZccVcjrl3Z3rCjkYB8GiNJy%2Bfnh1jnTBNYE7mNXQpWh3fjM%2BtTXYuOMPPV%2FL8GOqUB9RS5QSr5rn6ocWLJZgWvAQN30IWTRo8powe4udGo%2FDAo7BR81xbtiS%2FeVYmm60%2F5ZUNCj6LABruXdSKIU9vd5bqY5eErPiSrRxfAsb%2FKiQncUwGMjUWomg8Ala9wyy1FsaMtW0t2kayKn8dQ5MSALVILJMTUsXp%2BGSph3eHW0YSom6RDXLvP4Zqie%2BqOTfJWkn6z45%2Bq%2Fh6IbdQU4cfig11XEdS5&X-Amz-Signature=15ae450d1ef108bf22fca872a23dcaefd85fc17553afbc1ccfd05456c6abb287&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXD67LK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR15VgSs7%2FaYdlGiSxDku9aQDXIT%2BywI3O%2FDJcTnTPpAIgbB%2FuLm6roR1YUaPxKJLIOOCmQyRx8gIw0%2Fw4SF47RsYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBtoWzzL0hk5bYN6tyrcA66juq14C%2FEi3LZf4QeI66gznA3VCydwCFboFrocJszmSp%2BQEdQEs%2BOJ05a2ebPI1N26kVG7FUHYsvPYpOWDJ23b6cYZMPM%2F5ik1lBOsp7J6DiM7rgG3xb2ZoNcvpkCzPsylu0vb3zf6FdChY8knNDosocSh79tdYJbKo%2BEeasQohz%2BmG0fcFVcQHEL5PvJQPSboh1y8INplnqCEaSBJQWYZDK%2BpsrsjFVaOGDRjD%2FU3g1j1rwNkNkIv2rrBRd%2BvTNWcIIP7W87MnJKPXbOONsm18Fxf%2BLbkBoBFVfEC1PUwTepmf1%2FE8bWKuA9G3PmgXvmMPrKP99VcM7JH4CZNKs9t2gof6P69BKjFn2WPsUcZMbdPF7lsbGBVnbXYKV%2B%2BhKGiTEdSAs6QcwRixO5bxvwQnL20hLcnYz%2F7no7QwzA1UsHW%2F3nWmwrPcFc%2B0QUY2aayNpGPTp0oyqHOOh9e%2FCIHrewzMBmss7kR0TNXqkJSxAXYGDDuVS98pNNRBu0TjkEOkQaHB6rytIYG6aDS6oAb%2FhHRGGT10ydSh%2B7MpuYp1uJv3uFsGiLaWibKJAZ9eQUiSZZccVcjrl3Z3rCjkYB8GiNJy%2Bfnh1jnTBNYE7mNXQpWh3fjM%2BtTXYuOMPPV%2FL8GOqUB9RS5QSr5rn6ocWLJZgWvAQN30IWTRo8powe4udGo%2FDAo7BR81xbtiS%2FeVYmm60%2F5ZUNCj6LABruXdSKIU9vd5bqY5eErPiSrRxfAsb%2FKiQncUwGMjUWomg8Ala9wyy1FsaMtW0t2kayKn8dQ5MSALVILJMTUsXp%2BGSph3eHW0YSom6RDXLvP4Zqie%2BqOTfJWkn6z45%2Bq%2Fh6IbdQU4cfig11XEdS5&X-Amz-Signature=8a27bb77ba6ad3334fbc5428f2ae39068c14b5cb6930999187aa60d617d38d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXD67LK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR15VgSs7%2FaYdlGiSxDku9aQDXIT%2BywI3O%2FDJcTnTPpAIgbB%2FuLm6roR1YUaPxKJLIOOCmQyRx8gIw0%2Fw4SF47RsYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBtoWzzL0hk5bYN6tyrcA66juq14C%2FEi3LZf4QeI66gznA3VCydwCFboFrocJszmSp%2BQEdQEs%2BOJ05a2ebPI1N26kVG7FUHYsvPYpOWDJ23b6cYZMPM%2F5ik1lBOsp7J6DiM7rgG3xb2ZoNcvpkCzPsylu0vb3zf6FdChY8knNDosocSh79tdYJbKo%2BEeasQohz%2BmG0fcFVcQHEL5PvJQPSboh1y8INplnqCEaSBJQWYZDK%2BpsrsjFVaOGDRjD%2FU3g1j1rwNkNkIv2rrBRd%2BvTNWcIIP7W87MnJKPXbOONsm18Fxf%2BLbkBoBFVfEC1PUwTepmf1%2FE8bWKuA9G3PmgXvmMPrKP99VcM7JH4CZNKs9t2gof6P69BKjFn2WPsUcZMbdPF7lsbGBVnbXYKV%2B%2BhKGiTEdSAs6QcwRixO5bxvwQnL20hLcnYz%2F7no7QwzA1UsHW%2F3nWmwrPcFc%2B0QUY2aayNpGPTp0oyqHOOh9e%2FCIHrewzMBmss7kR0TNXqkJSxAXYGDDuVS98pNNRBu0TjkEOkQaHB6rytIYG6aDS6oAb%2FhHRGGT10ydSh%2B7MpuYp1uJv3uFsGiLaWibKJAZ9eQUiSZZccVcjrl3Z3rCjkYB8GiNJy%2Bfnh1jnTBNYE7mNXQpWh3fjM%2BtTXYuOMPPV%2FL8GOqUB9RS5QSr5rn6ocWLJZgWvAQN30IWTRo8powe4udGo%2FDAo7BR81xbtiS%2FeVYmm60%2F5ZUNCj6LABruXdSKIU9vd5bqY5eErPiSrRxfAsb%2FKiQncUwGMjUWomg8Ala9wyy1FsaMtW0t2kayKn8dQ5MSALVILJMTUsXp%2BGSph3eHW0YSom6RDXLvP4Zqie%2BqOTfJWkn6z45%2Bq%2Fh6IbdQU4cfig11XEdS5&X-Amz-Signature=15cc9d8833d43a3581ffb58fed79057a1d58d0cc7d6f47eeba71d28dc7515010&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXD67LK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR15VgSs7%2FaYdlGiSxDku9aQDXIT%2BywI3O%2FDJcTnTPpAIgbB%2FuLm6roR1YUaPxKJLIOOCmQyRx8gIw0%2Fw4SF47RsYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBtoWzzL0hk5bYN6tyrcA66juq14C%2FEi3LZf4QeI66gznA3VCydwCFboFrocJszmSp%2BQEdQEs%2BOJ05a2ebPI1N26kVG7FUHYsvPYpOWDJ23b6cYZMPM%2F5ik1lBOsp7J6DiM7rgG3xb2ZoNcvpkCzPsylu0vb3zf6FdChY8knNDosocSh79tdYJbKo%2BEeasQohz%2BmG0fcFVcQHEL5PvJQPSboh1y8INplnqCEaSBJQWYZDK%2BpsrsjFVaOGDRjD%2FU3g1j1rwNkNkIv2rrBRd%2BvTNWcIIP7W87MnJKPXbOONsm18Fxf%2BLbkBoBFVfEC1PUwTepmf1%2FE8bWKuA9G3PmgXvmMPrKP99VcM7JH4CZNKs9t2gof6P69BKjFn2WPsUcZMbdPF7lsbGBVnbXYKV%2B%2BhKGiTEdSAs6QcwRixO5bxvwQnL20hLcnYz%2F7no7QwzA1UsHW%2F3nWmwrPcFc%2B0QUY2aayNpGPTp0oyqHOOh9e%2FCIHrewzMBmss7kR0TNXqkJSxAXYGDDuVS98pNNRBu0TjkEOkQaHB6rytIYG6aDS6oAb%2FhHRGGT10ydSh%2B7MpuYp1uJv3uFsGiLaWibKJAZ9eQUiSZZccVcjrl3Z3rCjkYB8GiNJy%2Bfnh1jnTBNYE7mNXQpWh3fjM%2BtTXYuOMPPV%2FL8GOqUB9RS5QSr5rn6ocWLJZgWvAQN30IWTRo8powe4udGo%2FDAo7BR81xbtiS%2FeVYmm60%2F5ZUNCj6LABruXdSKIU9vd5bqY5eErPiSrRxfAsb%2FKiQncUwGMjUWomg8Ala9wyy1FsaMtW0t2kayKn8dQ5MSALVILJMTUsXp%2BGSph3eHW0YSom6RDXLvP4Zqie%2BqOTfJWkn6z45%2Bq%2Fh6IbdQU4cfig11XEdS5&X-Amz-Signature=4b9b6dbfa6b497b71c72fba18142578fc9e9918746c8e5624cb70de946b52237&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXD67LK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR15VgSs7%2FaYdlGiSxDku9aQDXIT%2BywI3O%2FDJcTnTPpAIgbB%2FuLm6roR1YUaPxKJLIOOCmQyRx8gIw0%2Fw4SF47RsYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBtoWzzL0hk5bYN6tyrcA66juq14C%2FEi3LZf4QeI66gznA3VCydwCFboFrocJszmSp%2BQEdQEs%2BOJ05a2ebPI1N26kVG7FUHYsvPYpOWDJ23b6cYZMPM%2F5ik1lBOsp7J6DiM7rgG3xb2ZoNcvpkCzPsylu0vb3zf6FdChY8knNDosocSh79tdYJbKo%2BEeasQohz%2BmG0fcFVcQHEL5PvJQPSboh1y8INplnqCEaSBJQWYZDK%2BpsrsjFVaOGDRjD%2FU3g1j1rwNkNkIv2rrBRd%2BvTNWcIIP7W87MnJKPXbOONsm18Fxf%2BLbkBoBFVfEC1PUwTepmf1%2FE8bWKuA9G3PmgXvmMPrKP99VcM7JH4CZNKs9t2gof6P69BKjFn2WPsUcZMbdPF7lsbGBVnbXYKV%2B%2BhKGiTEdSAs6QcwRixO5bxvwQnL20hLcnYz%2F7no7QwzA1UsHW%2F3nWmwrPcFc%2B0QUY2aayNpGPTp0oyqHOOh9e%2FCIHrewzMBmss7kR0TNXqkJSxAXYGDDuVS98pNNRBu0TjkEOkQaHB6rytIYG6aDS6oAb%2FhHRGGT10ydSh%2B7MpuYp1uJv3uFsGiLaWibKJAZ9eQUiSZZccVcjrl3Z3rCjkYB8GiNJy%2Bfnh1jnTBNYE7mNXQpWh3fjM%2BtTXYuOMPPV%2FL8GOqUB9RS5QSr5rn6ocWLJZgWvAQN30IWTRo8powe4udGo%2FDAo7BR81xbtiS%2FeVYmm60%2F5ZUNCj6LABruXdSKIU9vd5bqY5eErPiSrRxfAsb%2FKiQncUwGMjUWomg8Ala9wyy1FsaMtW0t2kayKn8dQ5MSALVILJMTUsXp%2BGSph3eHW0YSom6RDXLvP4Zqie%2BqOTfJWkn6z45%2Bq%2Fh6IbdQU4cfig11XEdS5&X-Amz-Signature=23da97432790a3816fa62dc8526fcf63510270d60cf9efdfea7ab3fc91cdef5c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXD67LK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR15VgSs7%2FaYdlGiSxDku9aQDXIT%2BywI3O%2FDJcTnTPpAIgbB%2FuLm6roR1YUaPxKJLIOOCmQyRx8gIw0%2Fw4SF47RsYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBtoWzzL0hk5bYN6tyrcA66juq14C%2FEi3LZf4QeI66gznA3VCydwCFboFrocJszmSp%2BQEdQEs%2BOJ05a2ebPI1N26kVG7FUHYsvPYpOWDJ23b6cYZMPM%2F5ik1lBOsp7J6DiM7rgG3xb2ZoNcvpkCzPsylu0vb3zf6FdChY8knNDosocSh79tdYJbKo%2BEeasQohz%2BmG0fcFVcQHEL5PvJQPSboh1y8INplnqCEaSBJQWYZDK%2BpsrsjFVaOGDRjD%2FU3g1j1rwNkNkIv2rrBRd%2BvTNWcIIP7W87MnJKPXbOONsm18Fxf%2BLbkBoBFVfEC1PUwTepmf1%2FE8bWKuA9G3PmgXvmMPrKP99VcM7JH4CZNKs9t2gof6P69BKjFn2WPsUcZMbdPF7lsbGBVnbXYKV%2B%2BhKGiTEdSAs6QcwRixO5bxvwQnL20hLcnYz%2F7no7QwzA1UsHW%2F3nWmwrPcFc%2B0QUY2aayNpGPTp0oyqHOOh9e%2FCIHrewzMBmss7kR0TNXqkJSxAXYGDDuVS98pNNRBu0TjkEOkQaHB6rytIYG6aDS6oAb%2FhHRGGT10ydSh%2B7MpuYp1uJv3uFsGiLaWibKJAZ9eQUiSZZccVcjrl3Z3rCjkYB8GiNJy%2Bfnh1jnTBNYE7mNXQpWh3fjM%2BtTXYuOMPPV%2FL8GOqUB9RS5QSr5rn6ocWLJZgWvAQN30IWTRo8powe4udGo%2FDAo7BR81xbtiS%2FeVYmm60%2F5ZUNCj6LABruXdSKIU9vd5bqY5eErPiSrRxfAsb%2FKiQncUwGMjUWomg8Ala9wyy1FsaMtW0t2kayKn8dQ5MSALVILJMTUsXp%2BGSph3eHW0YSom6RDXLvP4Zqie%2BqOTfJWkn6z45%2Bq%2Fh6IbdQU4cfig11XEdS5&X-Amz-Signature=9eb9531f112016c3ee8a209bd00442617e682d515743cc565a799721b0209874&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXD67LK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR15VgSs7%2FaYdlGiSxDku9aQDXIT%2BywI3O%2FDJcTnTPpAIgbB%2FuLm6roR1YUaPxKJLIOOCmQyRx8gIw0%2Fw4SF47RsYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBtoWzzL0hk5bYN6tyrcA66juq14C%2FEi3LZf4QeI66gznA3VCydwCFboFrocJszmSp%2BQEdQEs%2BOJ05a2ebPI1N26kVG7FUHYsvPYpOWDJ23b6cYZMPM%2F5ik1lBOsp7J6DiM7rgG3xb2ZoNcvpkCzPsylu0vb3zf6FdChY8knNDosocSh79tdYJbKo%2BEeasQohz%2BmG0fcFVcQHEL5PvJQPSboh1y8INplnqCEaSBJQWYZDK%2BpsrsjFVaOGDRjD%2FU3g1j1rwNkNkIv2rrBRd%2BvTNWcIIP7W87MnJKPXbOONsm18Fxf%2BLbkBoBFVfEC1PUwTepmf1%2FE8bWKuA9G3PmgXvmMPrKP99VcM7JH4CZNKs9t2gof6P69BKjFn2WPsUcZMbdPF7lsbGBVnbXYKV%2B%2BhKGiTEdSAs6QcwRixO5bxvwQnL20hLcnYz%2F7no7QwzA1UsHW%2F3nWmwrPcFc%2B0QUY2aayNpGPTp0oyqHOOh9e%2FCIHrewzMBmss7kR0TNXqkJSxAXYGDDuVS98pNNRBu0TjkEOkQaHB6rytIYG6aDS6oAb%2FhHRGGT10ydSh%2B7MpuYp1uJv3uFsGiLaWibKJAZ9eQUiSZZccVcjrl3Z3rCjkYB8GiNJy%2Bfnh1jnTBNYE7mNXQpWh3fjM%2BtTXYuOMPPV%2FL8GOqUB9RS5QSr5rn6ocWLJZgWvAQN30IWTRo8powe4udGo%2FDAo7BR81xbtiS%2FeVYmm60%2F5ZUNCj6LABruXdSKIU9vd5bqY5eErPiSrRxfAsb%2FKiQncUwGMjUWomg8Ala9wyy1FsaMtW0t2kayKn8dQ5MSALVILJMTUsXp%2BGSph3eHW0YSom6RDXLvP4Zqie%2BqOTfJWkn6z45%2Bq%2Fh6IbdQU4cfig11XEdS5&X-Amz-Signature=5466c9b606f6ab644c9516fbfc407d56d93ca51bc0b09ea84a5a925f319e3114&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
