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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILKGB5C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHGj7%2FMYhajG3RxObAomujw6EscpcNobe3zllGE489wIhALXHZWwIwBcGoocrG1DDUu9Y%2B%2FKXWUbiBEU7MzAywEtuKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjkcBevI5%2BMvMuZuMq3AN1JZT4FvoMjme%2B4NG1mOgeKRHLK0txPSXn7O%2F1uKNdBT55cS9CqHHJtZxDbaTLWaMp2OknA7BBQ%2B5tf9G9vrVu3Ei%2BWaRKYQhAejp%2FZtq5G44roTYIoMRonQhjmB5farbSSSgyMj2jpnkkd6w0RxlHF7vFkGM15JjXC3%2FzSSF1F7QWjK%2B9EZPvLAK8P2cqlmXj9OPrD4cTBw5mNTGszlYusJbWmweoR4Keqf675W%2FrdllACTkWfCUqsscVUpDZkjlZy%2Bai5cHTdsCwZafZqSuWDq8PAW4OkuPlFHjjoXpGG4jc7Pk7V7Au5PDy8HXKaQt8aQ86dZA%2FGl6DJMsXxGWj%2Ft3ZNJSEMRp6HA76Tzyc8mO2kK%2FMxiEvzaGiNoapWlfLEbSiA11wNnKRLcDz8Zp%2FPtNVxkX8Jo4ZgCYr7dK8HvL7TKjMwofGGHckvJtiWGKRmCAoJAqT%2B%2F4WdkxVOOEmkg6tKAWwDHQtc6hqG6Ap58TXnrCJzk6crCd%2BDpdBss%2BNHn2cRkhXpKxBPEApy3DkVrR6THckef%2FDS5sD7nHt92GGGiuzHwlZxP3jJVd1Sn4ZxCbWXRNdHr%2BNeXZLyXjsZ5ipZZHWziLQp1jUrc8DpKJBzpx%2FYmOiGyZJKjCanfy8BjqkAa9zk4WHLWOCXZcu716xGrLYcPz25qc9aMB7iQVwEMhgsHrcWXxnusctP6WeXhPfgdKF0etlslF2FdIgJYFaF2cvg8tS9KnIrST05BZR6i7w1AtQI8%2FxW1lKVTbSnt9KKpcGRs0Ju4JN0M2tDltnVq4aLclmRSLmn2FsJFHZzwjPZq8JRZESIfX5fgoi4dOwNroK1BnhL%2FUfpRDhlPC01n98j%2BK0&X-Amz-Signature=a3f19fddab19f18678e0c88bad1d0c9dad69a33de5aa7cb5e79f6b514030cb64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILKGB5C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHGj7%2FMYhajG3RxObAomujw6EscpcNobe3zllGE489wIhALXHZWwIwBcGoocrG1DDUu9Y%2B%2FKXWUbiBEU7MzAywEtuKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjkcBevI5%2BMvMuZuMq3AN1JZT4FvoMjme%2B4NG1mOgeKRHLK0txPSXn7O%2F1uKNdBT55cS9CqHHJtZxDbaTLWaMp2OknA7BBQ%2B5tf9G9vrVu3Ei%2BWaRKYQhAejp%2FZtq5G44roTYIoMRonQhjmB5farbSSSgyMj2jpnkkd6w0RxlHF7vFkGM15JjXC3%2FzSSF1F7QWjK%2B9EZPvLAK8P2cqlmXj9OPrD4cTBw5mNTGszlYusJbWmweoR4Keqf675W%2FrdllACTkWfCUqsscVUpDZkjlZy%2Bai5cHTdsCwZafZqSuWDq8PAW4OkuPlFHjjoXpGG4jc7Pk7V7Au5PDy8HXKaQt8aQ86dZA%2FGl6DJMsXxGWj%2Ft3ZNJSEMRp6HA76Tzyc8mO2kK%2FMxiEvzaGiNoapWlfLEbSiA11wNnKRLcDz8Zp%2FPtNVxkX8Jo4ZgCYr7dK8HvL7TKjMwofGGHckvJtiWGKRmCAoJAqT%2B%2F4WdkxVOOEmkg6tKAWwDHQtc6hqG6Ap58TXnrCJzk6crCd%2BDpdBss%2BNHn2cRkhXpKxBPEApy3DkVrR6THckef%2FDS5sD7nHt92GGGiuzHwlZxP3jJVd1Sn4ZxCbWXRNdHr%2BNeXZLyXjsZ5ipZZHWziLQp1jUrc8DpKJBzpx%2FYmOiGyZJKjCanfy8BjqkAa9zk4WHLWOCXZcu716xGrLYcPz25qc9aMB7iQVwEMhgsHrcWXxnusctP6WeXhPfgdKF0etlslF2FdIgJYFaF2cvg8tS9KnIrST05BZR6i7w1AtQI8%2FxW1lKVTbSnt9KKpcGRs0Ju4JN0M2tDltnVq4aLclmRSLmn2FsJFHZzwjPZq8JRZESIfX5fgoi4dOwNroK1BnhL%2FUfpRDhlPC01n98j%2BK0&X-Amz-Signature=92a7ab74487dd0badb3161e1a7eca34909f46ac07b2e81a66d25e300ccaa95a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILKGB5C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHGj7%2FMYhajG3RxObAomujw6EscpcNobe3zllGE489wIhALXHZWwIwBcGoocrG1DDUu9Y%2B%2FKXWUbiBEU7MzAywEtuKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjkcBevI5%2BMvMuZuMq3AN1JZT4FvoMjme%2B4NG1mOgeKRHLK0txPSXn7O%2F1uKNdBT55cS9CqHHJtZxDbaTLWaMp2OknA7BBQ%2B5tf9G9vrVu3Ei%2BWaRKYQhAejp%2FZtq5G44roTYIoMRonQhjmB5farbSSSgyMj2jpnkkd6w0RxlHF7vFkGM15JjXC3%2FzSSF1F7QWjK%2B9EZPvLAK8P2cqlmXj9OPrD4cTBw5mNTGszlYusJbWmweoR4Keqf675W%2FrdllACTkWfCUqsscVUpDZkjlZy%2Bai5cHTdsCwZafZqSuWDq8PAW4OkuPlFHjjoXpGG4jc7Pk7V7Au5PDy8HXKaQt8aQ86dZA%2FGl6DJMsXxGWj%2Ft3ZNJSEMRp6HA76Tzyc8mO2kK%2FMxiEvzaGiNoapWlfLEbSiA11wNnKRLcDz8Zp%2FPtNVxkX8Jo4ZgCYr7dK8HvL7TKjMwofGGHckvJtiWGKRmCAoJAqT%2B%2F4WdkxVOOEmkg6tKAWwDHQtc6hqG6Ap58TXnrCJzk6crCd%2BDpdBss%2BNHn2cRkhXpKxBPEApy3DkVrR6THckef%2FDS5sD7nHt92GGGiuzHwlZxP3jJVd1Sn4ZxCbWXRNdHr%2BNeXZLyXjsZ5ipZZHWziLQp1jUrc8DpKJBzpx%2FYmOiGyZJKjCanfy8BjqkAa9zk4WHLWOCXZcu716xGrLYcPz25qc9aMB7iQVwEMhgsHrcWXxnusctP6WeXhPfgdKF0etlslF2FdIgJYFaF2cvg8tS9KnIrST05BZR6i7w1AtQI8%2FxW1lKVTbSnt9KKpcGRs0Ju4JN0M2tDltnVq4aLclmRSLmn2FsJFHZzwjPZq8JRZESIfX5fgoi4dOwNroK1BnhL%2FUfpRDhlPC01n98j%2BK0&X-Amz-Signature=127409fad40d7188c4e9a879cb53be8f43e836c04de237dcd0b4e3ad747bd02a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILKGB5C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHGj7%2FMYhajG3RxObAomujw6EscpcNobe3zllGE489wIhALXHZWwIwBcGoocrG1DDUu9Y%2B%2FKXWUbiBEU7MzAywEtuKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjkcBevI5%2BMvMuZuMq3AN1JZT4FvoMjme%2B4NG1mOgeKRHLK0txPSXn7O%2F1uKNdBT55cS9CqHHJtZxDbaTLWaMp2OknA7BBQ%2B5tf9G9vrVu3Ei%2BWaRKYQhAejp%2FZtq5G44roTYIoMRonQhjmB5farbSSSgyMj2jpnkkd6w0RxlHF7vFkGM15JjXC3%2FzSSF1F7QWjK%2B9EZPvLAK8P2cqlmXj9OPrD4cTBw5mNTGszlYusJbWmweoR4Keqf675W%2FrdllACTkWfCUqsscVUpDZkjlZy%2Bai5cHTdsCwZafZqSuWDq8PAW4OkuPlFHjjoXpGG4jc7Pk7V7Au5PDy8HXKaQt8aQ86dZA%2FGl6DJMsXxGWj%2Ft3ZNJSEMRp6HA76Tzyc8mO2kK%2FMxiEvzaGiNoapWlfLEbSiA11wNnKRLcDz8Zp%2FPtNVxkX8Jo4ZgCYr7dK8HvL7TKjMwofGGHckvJtiWGKRmCAoJAqT%2B%2F4WdkxVOOEmkg6tKAWwDHQtc6hqG6Ap58TXnrCJzk6crCd%2BDpdBss%2BNHn2cRkhXpKxBPEApy3DkVrR6THckef%2FDS5sD7nHt92GGGiuzHwlZxP3jJVd1Sn4ZxCbWXRNdHr%2BNeXZLyXjsZ5ipZZHWziLQp1jUrc8DpKJBzpx%2FYmOiGyZJKjCanfy8BjqkAa9zk4WHLWOCXZcu716xGrLYcPz25qc9aMB7iQVwEMhgsHrcWXxnusctP6WeXhPfgdKF0etlslF2FdIgJYFaF2cvg8tS9KnIrST05BZR6i7w1AtQI8%2FxW1lKVTbSnt9KKpcGRs0Ju4JN0M2tDltnVq4aLclmRSLmn2FsJFHZzwjPZq8JRZESIfX5fgoi4dOwNroK1BnhL%2FUfpRDhlPC01n98j%2BK0&X-Amz-Signature=e4eb4d10014eaafbd52d2e8ef61fe5972fd570b28e7b9bcdd22f5f66726c2c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILKGB5C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHGj7%2FMYhajG3RxObAomujw6EscpcNobe3zllGE489wIhALXHZWwIwBcGoocrG1DDUu9Y%2B%2FKXWUbiBEU7MzAywEtuKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjkcBevI5%2BMvMuZuMq3AN1JZT4FvoMjme%2B4NG1mOgeKRHLK0txPSXn7O%2F1uKNdBT55cS9CqHHJtZxDbaTLWaMp2OknA7BBQ%2B5tf9G9vrVu3Ei%2BWaRKYQhAejp%2FZtq5G44roTYIoMRonQhjmB5farbSSSgyMj2jpnkkd6w0RxlHF7vFkGM15JjXC3%2FzSSF1F7QWjK%2B9EZPvLAK8P2cqlmXj9OPrD4cTBw5mNTGszlYusJbWmweoR4Keqf675W%2FrdllACTkWfCUqsscVUpDZkjlZy%2Bai5cHTdsCwZafZqSuWDq8PAW4OkuPlFHjjoXpGG4jc7Pk7V7Au5PDy8HXKaQt8aQ86dZA%2FGl6DJMsXxGWj%2Ft3ZNJSEMRp6HA76Tzyc8mO2kK%2FMxiEvzaGiNoapWlfLEbSiA11wNnKRLcDz8Zp%2FPtNVxkX8Jo4ZgCYr7dK8HvL7TKjMwofGGHckvJtiWGKRmCAoJAqT%2B%2F4WdkxVOOEmkg6tKAWwDHQtc6hqG6Ap58TXnrCJzk6crCd%2BDpdBss%2BNHn2cRkhXpKxBPEApy3DkVrR6THckef%2FDS5sD7nHt92GGGiuzHwlZxP3jJVd1Sn4ZxCbWXRNdHr%2BNeXZLyXjsZ5ipZZHWziLQp1jUrc8DpKJBzpx%2FYmOiGyZJKjCanfy8BjqkAa9zk4WHLWOCXZcu716xGrLYcPz25qc9aMB7iQVwEMhgsHrcWXxnusctP6WeXhPfgdKF0etlslF2FdIgJYFaF2cvg8tS9KnIrST05BZR6i7w1AtQI8%2FxW1lKVTbSnt9KKpcGRs0Ju4JN0M2tDltnVq4aLclmRSLmn2FsJFHZzwjPZq8JRZESIfX5fgoi4dOwNroK1BnhL%2FUfpRDhlPC01n98j%2BK0&X-Amz-Signature=6a14350289e39118c82d6e2fda64230d89dc073a497868dd3f2a5eafad3c2b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILKGB5C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHGj7%2FMYhajG3RxObAomujw6EscpcNobe3zllGE489wIhALXHZWwIwBcGoocrG1DDUu9Y%2B%2FKXWUbiBEU7MzAywEtuKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjkcBevI5%2BMvMuZuMq3AN1JZT4FvoMjme%2B4NG1mOgeKRHLK0txPSXn7O%2F1uKNdBT55cS9CqHHJtZxDbaTLWaMp2OknA7BBQ%2B5tf9G9vrVu3Ei%2BWaRKYQhAejp%2FZtq5G44roTYIoMRonQhjmB5farbSSSgyMj2jpnkkd6w0RxlHF7vFkGM15JjXC3%2FzSSF1F7QWjK%2B9EZPvLAK8P2cqlmXj9OPrD4cTBw5mNTGszlYusJbWmweoR4Keqf675W%2FrdllACTkWfCUqsscVUpDZkjlZy%2Bai5cHTdsCwZafZqSuWDq8PAW4OkuPlFHjjoXpGG4jc7Pk7V7Au5PDy8HXKaQt8aQ86dZA%2FGl6DJMsXxGWj%2Ft3ZNJSEMRp6HA76Tzyc8mO2kK%2FMxiEvzaGiNoapWlfLEbSiA11wNnKRLcDz8Zp%2FPtNVxkX8Jo4ZgCYr7dK8HvL7TKjMwofGGHckvJtiWGKRmCAoJAqT%2B%2F4WdkxVOOEmkg6tKAWwDHQtc6hqG6Ap58TXnrCJzk6crCd%2BDpdBss%2BNHn2cRkhXpKxBPEApy3DkVrR6THckef%2FDS5sD7nHt92GGGiuzHwlZxP3jJVd1Sn4ZxCbWXRNdHr%2BNeXZLyXjsZ5ipZZHWziLQp1jUrc8DpKJBzpx%2FYmOiGyZJKjCanfy8BjqkAa9zk4WHLWOCXZcu716xGrLYcPz25qc9aMB7iQVwEMhgsHrcWXxnusctP6WeXhPfgdKF0etlslF2FdIgJYFaF2cvg8tS9KnIrST05BZR6i7w1AtQI8%2FxW1lKVTbSnt9KKpcGRs0Ju4JN0M2tDltnVq4aLclmRSLmn2FsJFHZzwjPZq8JRZESIfX5fgoi4dOwNroK1BnhL%2FUfpRDhlPC01n98j%2BK0&X-Amz-Signature=eebd271e5665073ee41b93287e204314ab8f6a133507f0d31c977c1bb2313937&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILKGB5C%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHGj7%2FMYhajG3RxObAomujw6EscpcNobe3zllGE489wIhALXHZWwIwBcGoocrG1DDUu9Y%2B%2FKXWUbiBEU7MzAywEtuKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjkcBevI5%2BMvMuZuMq3AN1JZT4FvoMjme%2B4NG1mOgeKRHLK0txPSXn7O%2F1uKNdBT55cS9CqHHJtZxDbaTLWaMp2OknA7BBQ%2B5tf9G9vrVu3Ei%2BWaRKYQhAejp%2FZtq5G44roTYIoMRonQhjmB5farbSSSgyMj2jpnkkd6w0RxlHF7vFkGM15JjXC3%2FzSSF1F7QWjK%2B9EZPvLAK8P2cqlmXj9OPrD4cTBw5mNTGszlYusJbWmweoR4Keqf675W%2FrdllACTkWfCUqsscVUpDZkjlZy%2Bai5cHTdsCwZafZqSuWDq8PAW4OkuPlFHjjoXpGG4jc7Pk7V7Au5PDy8HXKaQt8aQ86dZA%2FGl6DJMsXxGWj%2Ft3ZNJSEMRp6HA76Tzyc8mO2kK%2FMxiEvzaGiNoapWlfLEbSiA11wNnKRLcDz8Zp%2FPtNVxkX8Jo4ZgCYr7dK8HvL7TKjMwofGGHckvJtiWGKRmCAoJAqT%2B%2F4WdkxVOOEmkg6tKAWwDHQtc6hqG6Ap58TXnrCJzk6crCd%2BDpdBss%2BNHn2cRkhXpKxBPEApy3DkVrR6THckef%2FDS5sD7nHt92GGGiuzHwlZxP3jJVd1Sn4ZxCbWXRNdHr%2BNeXZLyXjsZ5ipZZHWziLQp1jUrc8DpKJBzpx%2FYmOiGyZJKjCanfy8BjqkAa9zk4WHLWOCXZcu716xGrLYcPz25qc9aMB7iQVwEMhgsHrcWXxnusctP6WeXhPfgdKF0etlslF2FdIgJYFaF2cvg8tS9KnIrST05BZR6i7w1AtQI8%2FxW1lKVTbSnt9KKpcGRs0Ju4JN0M2tDltnVq4aLclmRSLmn2FsJFHZzwjPZq8JRZESIfX5fgoi4dOwNroK1BnhL%2FUfpRDhlPC01n98j%2BK0&X-Amz-Signature=830f286f7f87877482104713d2a40563a499025bc2566b384b5951897c2c2bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
