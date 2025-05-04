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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNQ74P4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGJYNdSQ5BZON4I%2BL2BM4tk9Dcy1%2BtAYGruSeaoUT0kgIgKnkQH%2FkViBTsNBuLlmd94j%2FsvaLuzY3wDh4C%2BHeZlycqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo427Zv%2BmD7iD0q5ircA%2BWHc6duNsS1EELH%2Fyzqtmh%2FKRGp4g%2B6SP88BH0nMgzOYvbGmVYZabZhbG88ryGCyGyeH1ptaulvJ2ocqKm7k0qgCYWDYfIM4VZAtv8v1XR6uMIHv5uMffJoQFM6UQhK6y16ETp7oY8sBmagbYDFwXhILN9YGQ3B75mZ5jJZoi2Z8iOZkVm3GMeSzn61JlAcIPGBigsZhWUkikkKfGbxbkpq1y6mEgys%2BfiFndVT8mBPBlc7ua9CydDqZZLz%2Fe%2FBScM0cBzAUm4vqGZazfAkjI1sq0Lq4V%2FfulDn7eOE0081GuZcj4IltAOsAQfu159sHqb2HBKyZdGnGNM4CS8nfAz26IjCNzHOd81%2BS9g7hUUQJjSE0Of2NgHcUoeh1N3ZJ50w94WbUOAqGIRihMLnnoAeC10pKDviF9Q6U7Vof%2B8tJ4l1GLgcGbmxlhcJUQkwTv%2Fj259JS2%2FPMpCYsBe8P%2BlhIskkvZAr%2BzcwwgNKjiFvM0QNzTWYunC19gmqQIE2%2BPk3tzkshjBiUCGOMGcVV%2BCqVW4YHQt9EVsU4KKuTL4H4AJcqb5TvYnwRE6p9T%2BRjM7gz%2F0Vuk4VxZN%2Bz8ySCYtLp8lg9JSf%2Bn76MkpQI%2BZmlJooR2aO30TNvI%2FxMNfr28AGOqUBRBb1vdSrk394MWAxKh4IsQlAWZk8mSPjhgs39wtXvjghErQaBEXtMbHQHURurKKlueTY8HK5SUhqB66YD%2FlqQUu7FVzjwFH5fx2LffyVfJEIx49hDRmQYdxgXr9E2ygb7ZN%2BPZLvuzJ9LC%2BlIB6ggCWHGZcG2x6KYRMz38QGHkpMiR3bZV3O8TnKsSlddn3y8YI9Jl6rS2uJ0L2Pv8iUcJn0HjxX&X-Amz-Signature=ffb826b1cd9f5ac7dc08d69fea26805a7e45d333d348d3f57a73cf911cc5d896&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNQ74P4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGJYNdSQ5BZON4I%2BL2BM4tk9Dcy1%2BtAYGruSeaoUT0kgIgKnkQH%2FkViBTsNBuLlmd94j%2FsvaLuzY3wDh4C%2BHeZlycqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo427Zv%2BmD7iD0q5ircA%2BWHc6duNsS1EELH%2Fyzqtmh%2FKRGp4g%2B6SP88BH0nMgzOYvbGmVYZabZhbG88ryGCyGyeH1ptaulvJ2ocqKm7k0qgCYWDYfIM4VZAtv8v1XR6uMIHv5uMffJoQFM6UQhK6y16ETp7oY8sBmagbYDFwXhILN9YGQ3B75mZ5jJZoi2Z8iOZkVm3GMeSzn61JlAcIPGBigsZhWUkikkKfGbxbkpq1y6mEgys%2BfiFndVT8mBPBlc7ua9CydDqZZLz%2Fe%2FBScM0cBzAUm4vqGZazfAkjI1sq0Lq4V%2FfulDn7eOE0081GuZcj4IltAOsAQfu159sHqb2HBKyZdGnGNM4CS8nfAz26IjCNzHOd81%2BS9g7hUUQJjSE0Of2NgHcUoeh1N3ZJ50w94WbUOAqGIRihMLnnoAeC10pKDviF9Q6U7Vof%2B8tJ4l1GLgcGbmxlhcJUQkwTv%2Fj259JS2%2FPMpCYsBe8P%2BlhIskkvZAr%2BzcwwgNKjiFvM0QNzTWYunC19gmqQIE2%2BPk3tzkshjBiUCGOMGcVV%2BCqVW4YHQt9EVsU4KKuTL4H4AJcqb5TvYnwRE6p9T%2BRjM7gz%2F0Vuk4VxZN%2Bz8ySCYtLp8lg9JSf%2Bn76MkpQI%2BZmlJooR2aO30TNvI%2FxMNfr28AGOqUBRBb1vdSrk394MWAxKh4IsQlAWZk8mSPjhgs39wtXvjghErQaBEXtMbHQHURurKKlueTY8HK5SUhqB66YD%2FlqQUu7FVzjwFH5fx2LffyVfJEIx49hDRmQYdxgXr9E2ygb7ZN%2BPZLvuzJ9LC%2BlIB6ggCWHGZcG2x6KYRMz38QGHkpMiR3bZV3O8TnKsSlddn3y8YI9Jl6rS2uJ0L2Pv8iUcJn0HjxX&X-Amz-Signature=b8bc70a8348518215e9ea2d689674c99b1038c0e6424601b6913b5c9a1a5990e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNQ74P4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGJYNdSQ5BZON4I%2BL2BM4tk9Dcy1%2BtAYGruSeaoUT0kgIgKnkQH%2FkViBTsNBuLlmd94j%2FsvaLuzY3wDh4C%2BHeZlycqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo427Zv%2BmD7iD0q5ircA%2BWHc6duNsS1EELH%2Fyzqtmh%2FKRGp4g%2B6SP88BH0nMgzOYvbGmVYZabZhbG88ryGCyGyeH1ptaulvJ2ocqKm7k0qgCYWDYfIM4VZAtv8v1XR6uMIHv5uMffJoQFM6UQhK6y16ETp7oY8sBmagbYDFwXhILN9YGQ3B75mZ5jJZoi2Z8iOZkVm3GMeSzn61JlAcIPGBigsZhWUkikkKfGbxbkpq1y6mEgys%2BfiFndVT8mBPBlc7ua9CydDqZZLz%2Fe%2FBScM0cBzAUm4vqGZazfAkjI1sq0Lq4V%2FfulDn7eOE0081GuZcj4IltAOsAQfu159sHqb2HBKyZdGnGNM4CS8nfAz26IjCNzHOd81%2BS9g7hUUQJjSE0Of2NgHcUoeh1N3ZJ50w94WbUOAqGIRihMLnnoAeC10pKDviF9Q6U7Vof%2B8tJ4l1GLgcGbmxlhcJUQkwTv%2Fj259JS2%2FPMpCYsBe8P%2BlhIskkvZAr%2BzcwwgNKjiFvM0QNzTWYunC19gmqQIE2%2BPk3tzkshjBiUCGOMGcVV%2BCqVW4YHQt9EVsU4KKuTL4H4AJcqb5TvYnwRE6p9T%2BRjM7gz%2F0Vuk4VxZN%2Bz8ySCYtLp8lg9JSf%2Bn76MkpQI%2BZmlJooR2aO30TNvI%2FxMNfr28AGOqUBRBb1vdSrk394MWAxKh4IsQlAWZk8mSPjhgs39wtXvjghErQaBEXtMbHQHURurKKlueTY8HK5SUhqB66YD%2FlqQUu7FVzjwFH5fx2LffyVfJEIx49hDRmQYdxgXr9E2ygb7ZN%2BPZLvuzJ9LC%2BlIB6ggCWHGZcG2x6KYRMz38QGHkpMiR3bZV3O8TnKsSlddn3y8YI9Jl6rS2uJ0L2Pv8iUcJn0HjxX&X-Amz-Signature=9d31fccf4447764315690b9c120ef4d1bbc9622810967e2a7a7db1b1fdc0f0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNQ74P4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGJYNdSQ5BZON4I%2BL2BM4tk9Dcy1%2BtAYGruSeaoUT0kgIgKnkQH%2FkViBTsNBuLlmd94j%2FsvaLuzY3wDh4C%2BHeZlycqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo427Zv%2BmD7iD0q5ircA%2BWHc6duNsS1EELH%2Fyzqtmh%2FKRGp4g%2B6SP88BH0nMgzOYvbGmVYZabZhbG88ryGCyGyeH1ptaulvJ2ocqKm7k0qgCYWDYfIM4VZAtv8v1XR6uMIHv5uMffJoQFM6UQhK6y16ETp7oY8sBmagbYDFwXhILN9YGQ3B75mZ5jJZoi2Z8iOZkVm3GMeSzn61JlAcIPGBigsZhWUkikkKfGbxbkpq1y6mEgys%2BfiFndVT8mBPBlc7ua9CydDqZZLz%2Fe%2FBScM0cBzAUm4vqGZazfAkjI1sq0Lq4V%2FfulDn7eOE0081GuZcj4IltAOsAQfu159sHqb2HBKyZdGnGNM4CS8nfAz26IjCNzHOd81%2BS9g7hUUQJjSE0Of2NgHcUoeh1N3ZJ50w94WbUOAqGIRihMLnnoAeC10pKDviF9Q6U7Vof%2B8tJ4l1GLgcGbmxlhcJUQkwTv%2Fj259JS2%2FPMpCYsBe8P%2BlhIskkvZAr%2BzcwwgNKjiFvM0QNzTWYunC19gmqQIE2%2BPk3tzkshjBiUCGOMGcVV%2BCqVW4YHQt9EVsU4KKuTL4H4AJcqb5TvYnwRE6p9T%2BRjM7gz%2F0Vuk4VxZN%2Bz8ySCYtLp8lg9JSf%2Bn76MkpQI%2BZmlJooR2aO30TNvI%2FxMNfr28AGOqUBRBb1vdSrk394MWAxKh4IsQlAWZk8mSPjhgs39wtXvjghErQaBEXtMbHQHURurKKlueTY8HK5SUhqB66YD%2FlqQUu7FVzjwFH5fx2LffyVfJEIx49hDRmQYdxgXr9E2ygb7ZN%2BPZLvuzJ9LC%2BlIB6ggCWHGZcG2x6KYRMz38QGHkpMiR3bZV3O8TnKsSlddn3y8YI9Jl6rS2uJ0L2Pv8iUcJn0HjxX&X-Amz-Signature=89e3751be34327a84893d3d6dbba6ab2fb9bf0213bbbeda86f0d2dfc1676cdd9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNQ74P4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGJYNdSQ5BZON4I%2BL2BM4tk9Dcy1%2BtAYGruSeaoUT0kgIgKnkQH%2FkViBTsNBuLlmd94j%2FsvaLuzY3wDh4C%2BHeZlycqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo427Zv%2BmD7iD0q5ircA%2BWHc6duNsS1EELH%2Fyzqtmh%2FKRGp4g%2B6SP88BH0nMgzOYvbGmVYZabZhbG88ryGCyGyeH1ptaulvJ2ocqKm7k0qgCYWDYfIM4VZAtv8v1XR6uMIHv5uMffJoQFM6UQhK6y16ETp7oY8sBmagbYDFwXhILN9YGQ3B75mZ5jJZoi2Z8iOZkVm3GMeSzn61JlAcIPGBigsZhWUkikkKfGbxbkpq1y6mEgys%2BfiFndVT8mBPBlc7ua9CydDqZZLz%2Fe%2FBScM0cBzAUm4vqGZazfAkjI1sq0Lq4V%2FfulDn7eOE0081GuZcj4IltAOsAQfu159sHqb2HBKyZdGnGNM4CS8nfAz26IjCNzHOd81%2BS9g7hUUQJjSE0Of2NgHcUoeh1N3ZJ50w94WbUOAqGIRihMLnnoAeC10pKDviF9Q6U7Vof%2B8tJ4l1GLgcGbmxlhcJUQkwTv%2Fj259JS2%2FPMpCYsBe8P%2BlhIskkvZAr%2BzcwwgNKjiFvM0QNzTWYunC19gmqQIE2%2BPk3tzkshjBiUCGOMGcVV%2BCqVW4YHQt9EVsU4KKuTL4H4AJcqb5TvYnwRE6p9T%2BRjM7gz%2F0Vuk4VxZN%2Bz8ySCYtLp8lg9JSf%2Bn76MkpQI%2BZmlJooR2aO30TNvI%2FxMNfr28AGOqUBRBb1vdSrk394MWAxKh4IsQlAWZk8mSPjhgs39wtXvjghErQaBEXtMbHQHURurKKlueTY8HK5SUhqB66YD%2FlqQUu7FVzjwFH5fx2LffyVfJEIx49hDRmQYdxgXr9E2ygb7ZN%2BPZLvuzJ9LC%2BlIB6ggCWHGZcG2x6KYRMz38QGHkpMiR3bZV3O8TnKsSlddn3y8YI9Jl6rS2uJ0L2Pv8iUcJn0HjxX&X-Amz-Signature=9b81caf2cd93555f00193f26921bedd34abb51a4c404526e2763d605ec35bd79&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNQ74P4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGJYNdSQ5BZON4I%2BL2BM4tk9Dcy1%2BtAYGruSeaoUT0kgIgKnkQH%2FkViBTsNBuLlmd94j%2FsvaLuzY3wDh4C%2BHeZlycqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo427Zv%2BmD7iD0q5ircA%2BWHc6duNsS1EELH%2Fyzqtmh%2FKRGp4g%2B6SP88BH0nMgzOYvbGmVYZabZhbG88ryGCyGyeH1ptaulvJ2ocqKm7k0qgCYWDYfIM4VZAtv8v1XR6uMIHv5uMffJoQFM6UQhK6y16ETp7oY8sBmagbYDFwXhILN9YGQ3B75mZ5jJZoi2Z8iOZkVm3GMeSzn61JlAcIPGBigsZhWUkikkKfGbxbkpq1y6mEgys%2BfiFndVT8mBPBlc7ua9CydDqZZLz%2Fe%2FBScM0cBzAUm4vqGZazfAkjI1sq0Lq4V%2FfulDn7eOE0081GuZcj4IltAOsAQfu159sHqb2HBKyZdGnGNM4CS8nfAz26IjCNzHOd81%2BS9g7hUUQJjSE0Of2NgHcUoeh1N3ZJ50w94WbUOAqGIRihMLnnoAeC10pKDviF9Q6U7Vof%2B8tJ4l1GLgcGbmxlhcJUQkwTv%2Fj259JS2%2FPMpCYsBe8P%2BlhIskkvZAr%2BzcwwgNKjiFvM0QNzTWYunC19gmqQIE2%2BPk3tzkshjBiUCGOMGcVV%2BCqVW4YHQt9EVsU4KKuTL4H4AJcqb5TvYnwRE6p9T%2BRjM7gz%2F0Vuk4VxZN%2Bz8ySCYtLp8lg9JSf%2Bn76MkpQI%2BZmlJooR2aO30TNvI%2FxMNfr28AGOqUBRBb1vdSrk394MWAxKh4IsQlAWZk8mSPjhgs39wtXvjghErQaBEXtMbHQHURurKKlueTY8HK5SUhqB66YD%2FlqQUu7FVzjwFH5fx2LffyVfJEIx49hDRmQYdxgXr9E2ygb7ZN%2BPZLvuzJ9LC%2BlIB6ggCWHGZcG2x6KYRMz38QGHkpMiR3bZV3O8TnKsSlddn3y8YI9Jl6rS2uJ0L2Pv8iUcJn0HjxX&X-Amz-Signature=58f34e8b8101293e984fe0136210e131ec7e89b2e36af4a3cf25b221840a2746&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MNQ74P4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGJYNdSQ5BZON4I%2BL2BM4tk9Dcy1%2BtAYGruSeaoUT0kgIgKnkQH%2FkViBTsNBuLlmd94j%2FsvaLuzY3wDh4C%2BHeZlycqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo427Zv%2BmD7iD0q5ircA%2BWHc6duNsS1EELH%2Fyzqtmh%2FKRGp4g%2B6SP88BH0nMgzOYvbGmVYZabZhbG88ryGCyGyeH1ptaulvJ2ocqKm7k0qgCYWDYfIM4VZAtv8v1XR6uMIHv5uMffJoQFM6UQhK6y16ETp7oY8sBmagbYDFwXhILN9YGQ3B75mZ5jJZoi2Z8iOZkVm3GMeSzn61JlAcIPGBigsZhWUkikkKfGbxbkpq1y6mEgys%2BfiFndVT8mBPBlc7ua9CydDqZZLz%2Fe%2FBScM0cBzAUm4vqGZazfAkjI1sq0Lq4V%2FfulDn7eOE0081GuZcj4IltAOsAQfu159sHqb2HBKyZdGnGNM4CS8nfAz26IjCNzHOd81%2BS9g7hUUQJjSE0Of2NgHcUoeh1N3ZJ50w94WbUOAqGIRihMLnnoAeC10pKDviF9Q6U7Vof%2B8tJ4l1GLgcGbmxlhcJUQkwTv%2Fj259JS2%2FPMpCYsBe8P%2BlhIskkvZAr%2BzcwwgNKjiFvM0QNzTWYunC19gmqQIE2%2BPk3tzkshjBiUCGOMGcVV%2BCqVW4YHQt9EVsU4KKuTL4H4AJcqb5TvYnwRE6p9T%2BRjM7gz%2F0Vuk4VxZN%2Bz8ySCYtLp8lg9JSf%2Bn76MkpQI%2BZmlJooR2aO30TNvI%2FxMNfr28AGOqUBRBb1vdSrk394MWAxKh4IsQlAWZk8mSPjhgs39wtXvjghErQaBEXtMbHQHURurKKlueTY8HK5SUhqB66YD%2FlqQUu7FVzjwFH5fx2LffyVfJEIx49hDRmQYdxgXr9E2ygb7ZN%2BPZLvuzJ9LC%2BlIB6ggCWHGZcG2x6KYRMz38QGHkpMiR3bZV3O8TnKsSlddn3y8YI9Jl6rS2uJ0L2Pv8iUcJn0HjxX&X-Amz-Signature=6776ce68d855228e6fd9106de61f0cad164f6cb1bb9d3709d33258a177fb2da9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
