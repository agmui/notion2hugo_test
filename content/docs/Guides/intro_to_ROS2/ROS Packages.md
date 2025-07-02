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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAVUCI5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIvbCK6KD5Ocae0XELvEHveRmZdED3U3ec%2BPIuZ8N2MAiB0nXGbyPkLJ%2BrmU2XGU%2F2LCzbkVFVamJKgZZl79wh%2F8CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhvuZ%2B%2BAh1xPOQKBpKtwDdFTHLUGnylh5Dj8SKt7dOFCgMUO8baxEf4op2tCfnZuMVZeBKoI7j4oUZZd6urCegKWiI4bisS0d8m0XfzeR1o%2BYb2reAmHaXPKoxNamx6S3i6aeOZJpbemDwSYA%2F85sjsEZFeJ3QyuUjOrDDAnoXRpzQws7yh%2FQkvSQW5oSY6x7mMKH%2BLAoIBHHQ78spPcXJw6d4lwFNCYYt5L7DV3TFvjGir%2F49uQIOgfnPeoPcDUO5kS%2F5UWKD4gDCMfONZX3eWgacjX4k67Nh0a1Ci7pjPtdeUacaT0IeyqOls0dwqAOMKv30LagQvxThL1LyHOAbp6JgVAJWpvpLMZupNjHJ0O7zC7YLztYBHboXrAhiwHUG8qg0ij3BDhmMLZ69qeLLHntrIbThAwfiYFbqd3TJnnMD%2FAIgDcjOQ8ZeZxWeLCuviDQuZSYdre0%2BOWqp0A2luDkl9mJ%2FB5QQhctJySDBwrlyNaHgKXv9yH%2FAqb5uQzJHwOys128lj%2BAjY9wChZsBUZQHXXzWM9GYasgRVcId4dDPk1oGGH0%2Bh%2B3UoCXKIlXkQzSs%2BgKK4gQh0h6JbN6vts8ANduR%2FI5CwFFviXnk0moOubJ3BjN84DjiVOOVX8WkbAp3h10p9QQHiIw5J6SwwY6pgG7eV1%2B4DB77hPWyJnI1dvmyFr7WPqGLHT6KgYFZWW1nf3zt0nAomI%2FwEYXfeijUbJkp4JyXP1R3OTUpBFadqmk%2FQvuPT74xGqL1Ga%2FiN25sD%2Fpn%2BTyGkBm1jhLr4kM797NiQSOupUnTVvlxcKqiGzMEABJkUe%2Btxz5b7WyIZoKmmcIC1k%2Fy1bcl8pT4DyybgNfUB173jEWD6pf7ESI6TjAa68jkHkS&X-Amz-Signature=c7bb4169ee1671c88bad7bc1c82587a1832f0dd8224ba254374e6e721eb3833d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAVUCI5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIvbCK6KD5Ocae0XELvEHveRmZdED3U3ec%2BPIuZ8N2MAiB0nXGbyPkLJ%2BrmU2XGU%2F2LCzbkVFVamJKgZZl79wh%2F8CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhvuZ%2B%2BAh1xPOQKBpKtwDdFTHLUGnylh5Dj8SKt7dOFCgMUO8baxEf4op2tCfnZuMVZeBKoI7j4oUZZd6urCegKWiI4bisS0d8m0XfzeR1o%2BYb2reAmHaXPKoxNamx6S3i6aeOZJpbemDwSYA%2F85sjsEZFeJ3QyuUjOrDDAnoXRpzQws7yh%2FQkvSQW5oSY6x7mMKH%2BLAoIBHHQ78spPcXJw6d4lwFNCYYt5L7DV3TFvjGir%2F49uQIOgfnPeoPcDUO5kS%2F5UWKD4gDCMfONZX3eWgacjX4k67Nh0a1Ci7pjPtdeUacaT0IeyqOls0dwqAOMKv30LagQvxThL1LyHOAbp6JgVAJWpvpLMZupNjHJ0O7zC7YLztYBHboXrAhiwHUG8qg0ij3BDhmMLZ69qeLLHntrIbThAwfiYFbqd3TJnnMD%2FAIgDcjOQ8ZeZxWeLCuviDQuZSYdre0%2BOWqp0A2luDkl9mJ%2FB5QQhctJySDBwrlyNaHgKXv9yH%2FAqb5uQzJHwOys128lj%2BAjY9wChZsBUZQHXXzWM9GYasgRVcId4dDPk1oGGH0%2Bh%2B3UoCXKIlXkQzSs%2BgKK4gQh0h6JbN6vts8ANduR%2FI5CwFFviXnk0moOubJ3BjN84DjiVOOVX8WkbAp3h10p9QQHiIw5J6SwwY6pgG7eV1%2B4DB77hPWyJnI1dvmyFr7WPqGLHT6KgYFZWW1nf3zt0nAomI%2FwEYXfeijUbJkp4JyXP1R3OTUpBFadqmk%2FQvuPT74xGqL1Ga%2FiN25sD%2Fpn%2BTyGkBm1jhLr4kM797NiQSOupUnTVvlxcKqiGzMEABJkUe%2Btxz5b7WyIZoKmmcIC1k%2Fy1bcl8pT4DyybgNfUB173jEWD6pf7ESI6TjAa68jkHkS&X-Amz-Signature=97bccab2aab38ce679a1beac05fdd8c3bd23fedc4d57ad466fb4a9d51bb16c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAVUCI5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIvbCK6KD5Ocae0XELvEHveRmZdED3U3ec%2BPIuZ8N2MAiB0nXGbyPkLJ%2BrmU2XGU%2F2LCzbkVFVamJKgZZl79wh%2F8CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhvuZ%2B%2BAh1xPOQKBpKtwDdFTHLUGnylh5Dj8SKt7dOFCgMUO8baxEf4op2tCfnZuMVZeBKoI7j4oUZZd6urCegKWiI4bisS0d8m0XfzeR1o%2BYb2reAmHaXPKoxNamx6S3i6aeOZJpbemDwSYA%2F85sjsEZFeJ3QyuUjOrDDAnoXRpzQws7yh%2FQkvSQW5oSY6x7mMKH%2BLAoIBHHQ78spPcXJw6d4lwFNCYYt5L7DV3TFvjGir%2F49uQIOgfnPeoPcDUO5kS%2F5UWKD4gDCMfONZX3eWgacjX4k67Nh0a1Ci7pjPtdeUacaT0IeyqOls0dwqAOMKv30LagQvxThL1LyHOAbp6JgVAJWpvpLMZupNjHJ0O7zC7YLztYBHboXrAhiwHUG8qg0ij3BDhmMLZ69qeLLHntrIbThAwfiYFbqd3TJnnMD%2FAIgDcjOQ8ZeZxWeLCuviDQuZSYdre0%2BOWqp0A2luDkl9mJ%2FB5QQhctJySDBwrlyNaHgKXv9yH%2FAqb5uQzJHwOys128lj%2BAjY9wChZsBUZQHXXzWM9GYasgRVcId4dDPk1oGGH0%2Bh%2B3UoCXKIlXkQzSs%2BgKK4gQh0h6JbN6vts8ANduR%2FI5CwFFviXnk0moOubJ3BjN84DjiVOOVX8WkbAp3h10p9QQHiIw5J6SwwY6pgG7eV1%2B4DB77hPWyJnI1dvmyFr7WPqGLHT6KgYFZWW1nf3zt0nAomI%2FwEYXfeijUbJkp4JyXP1R3OTUpBFadqmk%2FQvuPT74xGqL1Ga%2FiN25sD%2Fpn%2BTyGkBm1jhLr4kM797NiQSOupUnTVvlxcKqiGzMEABJkUe%2Btxz5b7WyIZoKmmcIC1k%2Fy1bcl8pT4DyybgNfUB173jEWD6pf7ESI6TjAa68jkHkS&X-Amz-Signature=c1885efa02b61fdedecbfcd37b3dc1f1fddd81efecbdc44a4b72e911f8bc3131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAVUCI5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIvbCK6KD5Ocae0XELvEHveRmZdED3U3ec%2BPIuZ8N2MAiB0nXGbyPkLJ%2BrmU2XGU%2F2LCzbkVFVamJKgZZl79wh%2F8CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhvuZ%2B%2BAh1xPOQKBpKtwDdFTHLUGnylh5Dj8SKt7dOFCgMUO8baxEf4op2tCfnZuMVZeBKoI7j4oUZZd6urCegKWiI4bisS0d8m0XfzeR1o%2BYb2reAmHaXPKoxNamx6S3i6aeOZJpbemDwSYA%2F85sjsEZFeJ3QyuUjOrDDAnoXRpzQws7yh%2FQkvSQW5oSY6x7mMKH%2BLAoIBHHQ78spPcXJw6d4lwFNCYYt5L7DV3TFvjGir%2F49uQIOgfnPeoPcDUO5kS%2F5UWKD4gDCMfONZX3eWgacjX4k67Nh0a1Ci7pjPtdeUacaT0IeyqOls0dwqAOMKv30LagQvxThL1LyHOAbp6JgVAJWpvpLMZupNjHJ0O7zC7YLztYBHboXrAhiwHUG8qg0ij3BDhmMLZ69qeLLHntrIbThAwfiYFbqd3TJnnMD%2FAIgDcjOQ8ZeZxWeLCuviDQuZSYdre0%2BOWqp0A2luDkl9mJ%2FB5QQhctJySDBwrlyNaHgKXv9yH%2FAqb5uQzJHwOys128lj%2BAjY9wChZsBUZQHXXzWM9GYasgRVcId4dDPk1oGGH0%2Bh%2B3UoCXKIlXkQzSs%2BgKK4gQh0h6JbN6vts8ANduR%2FI5CwFFviXnk0moOubJ3BjN84DjiVOOVX8WkbAp3h10p9QQHiIw5J6SwwY6pgG7eV1%2B4DB77hPWyJnI1dvmyFr7WPqGLHT6KgYFZWW1nf3zt0nAomI%2FwEYXfeijUbJkp4JyXP1R3OTUpBFadqmk%2FQvuPT74xGqL1Ga%2FiN25sD%2Fpn%2BTyGkBm1jhLr4kM797NiQSOupUnTVvlxcKqiGzMEABJkUe%2Btxz5b7WyIZoKmmcIC1k%2Fy1bcl8pT4DyybgNfUB173jEWD6pf7ESI6TjAa68jkHkS&X-Amz-Signature=d94691df408a2591fb60b5d1d5f98b2bb3433e4ba29830c5b50af7d0a3c0cbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAVUCI5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIvbCK6KD5Ocae0XELvEHveRmZdED3U3ec%2BPIuZ8N2MAiB0nXGbyPkLJ%2BrmU2XGU%2F2LCzbkVFVamJKgZZl79wh%2F8CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhvuZ%2B%2BAh1xPOQKBpKtwDdFTHLUGnylh5Dj8SKt7dOFCgMUO8baxEf4op2tCfnZuMVZeBKoI7j4oUZZd6urCegKWiI4bisS0d8m0XfzeR1o%2BYb2reAmHaXPKoxNamx6S3i6aeOZJpbemDwSYA%2F85sjsEZFeJ3QyuUjOrDDAnoXRpzQws7yh%2FQkvSQW5oSY6x7mMKH%2BLAoIBHHQ78spPcXJw6d4lwFNCYYt5L7DV3TFvjGir%2F49uQIOgfnPeoPcDUO5kS%2F5UWKD4gDCMfONZX3eWgacjX4k67Nh0a1Ci7pjPtdeUacaT0IeyqOls0dwqAOMKv30LagQvxThL1LyHOAbp6JgVAJWpvpLMZupNjHJ0O7zC7YLztYBHboXrAhiwHUG8qg0ij3BDhmMLZ69qeLLHntrIbThAwfiYFbqd3TJnnMD%2FAIgDcjOQ8ZeZxWeLCuviDQuZSYdre0%2BOWqp0A2luDkl9mJ%2FB5QQhctJySDBwrlyNaHgKXv9yH%2FAqb5uQzJHwOys128lj%2BAjY9wChZsBUZQHXXzWM9GYasgRVcId4dDPk1oGGH0%2Bh%2B3UoCXKIlXkQzSs%2BgKK4gQh0h6JbN6vts8ANduR%2FI5CwFFviXnk0moOubJ3BjN84DjiVOOVX8WkbAp3h10p9QQHiIw5J6SwwY6pgG7eV1%2B4DB77hPWyJnI1dvmyFr7WPqGLHT6KgYFZWW1nf3zt0nAomI%2FwEYXfeijUbJkp4JyXP1R3OTUpBFadqmk%2FQvuPT74xGqL1Ga%2FiN25sD%2Fpn%2BTyGkBm1jhLr4kM797NiQSOupUnTVvlxcKqiGzMEABJkUe%2Btxz5b7WyIZoKmmcIC1k%2Fy1bcl8pT4DyybgNfUB173jEWD6pf7ESI6TjAa68jkHkS&X-Amz-Signature=c159191059bce0d866e348c93e91df1ba33a8571e35faddde4f31a88b478243c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAVUCI5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIvbCK6KD5Ocae0XELvEHveRmZdED3U3ec%2BPIuZ8N2MAiB0nXGbyPkLJ%2BrmU2XGU%2F2LCzbkVFVamJKgZZl79wh%2F8CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhvuZ%2B%2BAh1xPOQKBpKtwDdFTHLUGnylh5Dj8SKt7dOFCgMUO8baxEf4op2tCfnZuMVZeBKoI7j4oUZZd6urCegKWiI4bisS0d8m0XfzeR1o%2BYb2reAmHaXPKoxNamx6S3i6aeOZJpbemDwSYA%2F85sjsEZFeJ3QyuUjOrDDAnoXRpzQws7yh%2FQkvSQW5oSY6x7mMKH%2BLAoIBHHQ78spPcXJw6d4lwFNCYYt5L7DV3TFvjGir%2F49uQIOgfnPeoPcDUO5kS%2F5UWKD4gDCMfONZX3eWgacjX4k67Nh0a1Ci7pjPtdeUacaT0IeyqOls0dwqAOMKv30LagQvxThL1LyHOAbp6JgVAJWpvpLMZupNjHJ0O7zC7YLztYBHboXrAhiwHUG8qg0ij3BDhmMLZ69qeLLHntrIbThAwfiYFbqd3TJnnMD%2FAIgDcjOQ8ZeZxWeLCuviDQuZSYdre0%2BOWqp0A2luDkl9mJ%2FB5QQhctJySDBwrlyNaHgKXv9yH%2FAqb5uQzJHwOys128lj%2BAjY9wChZsBUZQHXXzWM9GYasgRVcId4dDPk1oGGH0%2Bh%2B3UoCXKIlXkQzSs%2BgKK4gQh0h6JbN6vts8ANduR%2FI5CwFFviXnk0moOubJ3BjN84DjiVOOVX8WkbAp3h10p9QQHiIw5J6SwwY6pgG7eV1%2B4DB77hPWyJnI1dvmyFr7WPqGLHT6KgYFZWW1nf3zt0nAomI%2FwEYXfeijUbJkp4JyXP1R3OTUpBFadqmk%2FQvuPT74xGqL1Ga%2FiN25sD%2Fpn%2BTyGkBm1jhLr4kM797NiQSOupUnTVvlxcKqiGzMEABJkUe%2Btxz5b7WyIZoKmmcIC1k%2Fy1bcl8pT4DyybgNfUB173jEWD6pf7ESI6TjAa68jkHkS&X-Amz-Signature=875f64fe1ac5a0dfaf49d8772fb0ab20332fbd61ad051fb95feb3b3f6ad6a310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEAVUCI5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T024106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIvbCK6KD5Ocae0XELvEHveRmZdED3U3ec%2BPIuZ8N2MAiB0nXGbyPkLJ%2BrmU2XGU%2F2LCzbkVFVamJKgZZl79wh%2F8CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhvuZ%2B%2BAh1xPOQKBpKtwDdFTHLUGnylh5Dj8SKt7dOFCgMUO8baxEf4op2tCfnZuMVZeBKoI7j4oUZZd6urCegKWiI4bisS0d8m0XfzeR1o%2BYb2reAmHaXPKoxNamx6S3i6aeOZJpbemDwSYA%2F85sjsEZFeJ3QyuUjOrDDAnoXRpzQws7yh%2FQkvSQW5oSY6x7mMKH%2BLAoIBHHQ78spPcXJw6d4lwFNCYYt5L7DV3TFvjGir%2F49uQIOgfnPeoPcDUO5kS%2F5UWKD4gDCMfONZX3eWgacjX4k67Nh0a1Ci7pjPtdeUacaT0IeyqOls0dwqAOMKv30LagQvxThL1LyHOAbp6JgVAJWpvpLMZupNjHJ0O7zC7YLztYBHboXrAhiwHUG8qg0ij3BDhmMLZ69qeLLHntrIbThAwfiYFbqd3TJnnMD%2FAIgDcjOQ8ZeZxWeLCuviDQuZSYdre0%2BOWqp0A2luDkl9mJ%2FB5QQhctJySDBwrlyNaHgKXv9yH%2FAqb5uQzJHwOys128lj%2BAjY9wChZsBUZQHXXzWM9GYasgRVcId4dDPk1oGGH0%2Bh%2B3UoCXKIlXkQzSs%2BgKK4gQh0h6JbN6vts8ANduR%2FI5CwFFviXnk0moOubJ3BjN84DjiVOOVX8WkbAp3h10p9QQHiIw5J6SwwY6pgG7eV1%2B4DB77hPWyJnI1dvmyFr7WPqGLHT6KgYFZWW1nf3zt0nAomI%2FwEYXfeijUbJkp4JyXP1R3OTUpBFadqmk%2FQvuPT74xGqL1Ga%2FiN25sD%2Fpn%2BTyGkBm1jhLr4kM797NiQSOupUnTVvlxcKqiGzMEABJkUe%2Btxz5b7WyIZoKmmcIC1k%2Fy1bcl8pT4DyybgNfUB173jEWD6pf7ESI6TjAa68jkHkS&X-Amz-Signature=816f6ee0e225ccf6d39d4a6868fc3bfc790ed651d6ccd1aa970dc7f1671e4a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
