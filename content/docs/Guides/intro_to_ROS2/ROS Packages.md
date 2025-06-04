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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZZ4V3J%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHlgtRFmRx7h%2B%2BRvFENdHdR1cJQuH4QkLPRDcTzIYPyeAiBWbaG%2BTgd4MSx5LUT0SO62pTnaPGbaLBl1hzUOQja1CCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM9aHD%2BJVCGtt8KIUCKtwDhI%2B3nAIPjLYJY4A8iUQdXrHobQhSmVxI%2Bh4cMw42j%2Fkq3ym3k9tHca2X%2FE79NQXyqfV3V7FNuJmqpdhC3fdbstwKmug67oKd9ole0CNdMxjSwgqMKOm35TqTMz2aB02A%2Bx5SgorBbXng1CEr4wmlnwEEfxTAGgLOgwy9DowwaGjXTP0%2Bzeu%2FOVzC1O%2B20ClxbG%2BrbRJVKgkRI4aXfJdQ1qAmIaO5bG5JyPhS60l96GB2UFaMuF%2BVFFXJKXUeY7vGhKAHmNXzg%2FF%2BPBCRafc5Fca%2B82iTnU3Yqj7ofqT%2FuUN6fwMXz8wbLQ1MipqkwqQAc162o%2B0QEDM0DjLVmRjRf63mTvbzYQbbJU%2Bwe%2BnDvq5fuW5n34j0ceMpE3%2BoaR78tFXqJn%2B8TXs2BiX%2BJ3%2BDGBgxqWo8KhY3IUAdAeaeRbeuCRFXColIl9B0UWtdj%2FD4mNuld6TAALwtncMeIqzyEPpylmi27p43mcEds5Q1OBmF%2F%2Fm9mmvAHBysOflIeTrEFm28NWijMsyGiR%2FO6NhM35YW%2B6aYVbRym3%2BCHtB6LwnjN2zRE6ueNWwIGMk8KeNMt6WpWywLkLiwqTZvgvf%2BSagAlooTjuM%2FQQ8QolwIUibh8YvDIROJXOR5zqUwjd6BwgY6pgElGfwXy884Vf8i4T7%2BtE7qIoxv21WTPUVhM0pP%2Fb2LAn8bveCHKcsrjelGve0eIAa8u7yQ0fblkrQCJGjP0gq%2FjtI%2Bu6cp7ZaMv%2BK7E4ccFkOgSCbtt%2Bobk6TUAwl9WVbwlEvfeNJh6KLaQV09vsaJYjBJRWnQ8ATcJi12t0An6pb%2BexxBczPzeHBeGKfqx0wzbdLflbU6dVqnmr8GYD6BGVM2vzxH&X-Amz-Signature=aed0aaf8922eb4f7d04ec70adc00ae72d69a3389dfe6da9984f1205b6c06a817&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZZ4V3J%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHlgtRFmRx7h%2B%2BRvFENdHdR1cJQuH4QkLPRDcTzIYPyeAiBWbaG%2BTgd4MSx5LUT0SO62pTnaPGbaLBl1hzUOQja1CCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM9aHD%2BJVCGtt8KIUCKtwDhI%2B3nAIPjLYJY4A8iUQdXrHobQhSmVxI%2Bh4cMw42j%2Fkq3ym3k9tHca2X%2FE79NQXyqfV3V7FNuJmqpdhC3fdbstwKmug67oKd9ole0CNdMxjSwgqMKOm35TqTMz2aB02A%2Bx5SgorBbXng1CEr4wmlnwEEfxTAGgLOgwy9DowwaGjXTP0%2Bzeu%2FOVzC1O%2B20ClxbG%2BrbRJVKgkRI4aXfJdQ1qAmIaO5bG5JyPhS60l96GB2UFaMuF%2BVFFXJKXUeY7vGhKAHmNXzg%2FF%2BPBCRafc5Fca%2B82iTnU3Yqj7ofqT%2FuUN6fwMXz8wbLQ1MipqkwqQAc162o%2B0QEDM0DjLVmRjRf63mTvbzYQbbJU%2Bwe%2BnDvq5fuW5n34j0ceMpE3%2BoaR78tFXqJn%2B8TXs2BiX%2BJ3%2BDGBgxqWo8KhY3IUAdAeaeRbeuCRFXColIl9B0UWtdj%2FD4mNuld6TAALwtncMeIqzyEPpylmi27p43mcEds5Q1OBmF%2F%2Fm9mmvAHBysOflIeTrEFm28NWijMsyGiR%2FO6NhM35YW%2B6aYVbRym3%2BCHtB6LwnjN2zRE6ueNWwIGMk8KeNMt6WpWywLkLiwqTZvgvf%2BSagAlooTjuM%2FQQ8QolwIUibh8YvDIROJXOR5zqUwjd6BwgY6pgElGfwXy884Vf8i4T7%2BtE7qIoxv21WTPUVhM0pP%2Fb2LAn8bveCHKcsrjelGve0eIAa8u7yQ0fblkrQCJGjP0gq%2FjtI%2Bu6cp7ZaMv%2BK7E4ccFkOgSCbtt%2Bobk6TUAwl9WVbwlEvfeNJh6KLaQV09vsaJYjBJRWnQ8ATcJi12t0An6pb%2BexxBczPzeHBeGKfqx0wzbdLflbU6dVqnmr8GYD6BGVM2vzxH&X-Amz-Signature=aa03ae3a2ea896e1c42fcce692b52f84e55120df64c6c153647fa786ac6148d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZZ4V3J%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHlgtRFmRx7h%2B%2BRvFENdHdR1cJQuH4QkLPRDcTzIYPyeAiBWbaG%2BTgd4MSx5LUT0SO62pTnaPGbaLBl1hzUOQja1CCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM9aHD%2BJVCGtt8KIUCKtwDhI%2B3nAIPjLYJY4A8iUQdXrHobQhSmVxI%2Bh4cMw42j%2Fkq3ym3k9tHca2X%2FE79NQXyqfV3V7FNuJmqpdhC3fdbstwKmug67oKd9ole0CNdMxjSwgqMKOm35TqTMz2aB02A%2Bx5SgorBbXng1CEr4wmlnwEEfxTAGgLOgwy9DowwaGjXTP0%2Bzeu%2FOVzC1O%2B20ClxbG%2BrbRJVKgkRI4aXfJdQ1qAmIaO5bG5JyPhS60l96GB2UFaMuF%2BVFFXJKXUeY7vGhKAHmNXzg%2FF%2BPBCRafc5Fca%2B82iTnU3Yqj7ofqT%2FuUN6fwMXz8wbLQ1MipqkwqQAc162o%2B0QEDM0DjLVmRjRf63mTvbzYQbbJU%2Bwe%2BnDvq5fuW5n34j0ceMpE3%2BoaR78tFXqJn%2B8TXs2BiX%2BJ3%2BDGBgxqWo8KhY3IUAdAeaeRbeuCRFXColIl9B0UWtdj%2FD4mNuld6TAALwtncMeIqzyEPpylmi27p43mcEds5Q1OBmF%2F%2Fm9mmvAHBysOflIeTrEFm28NWijMsyGiR%2FO6NhM35YW%2B6aYVbRym3%2BCHtB6LwnjN2zRE6ueNWwIGMk8KeNMt6WpWywLkLiwqTZvgvf%2BSagAlooTjuM%2FQQ8QolwIUibh8YvDIROJXOR5zqUwjd6BwgY6pgElGfwXy884Vf8i4T7%2BtE7qIoxv21WTPUVhM0pP%2Fb2LAn8bveCHKcsrjelGve0eIAa8u7yQ0fblkrQCJGjP0gq%2FjtI%2Bu6cp7ZaMv%2BK7E4ccFkOgSCbtt%2Bobk6TUAwl9WVbwlEvfeNJh6KLaQV09vsaJYjBJRWnQ8ATcJi12t0An6pb%2BexxBczPzeHBeGKfqx0wzbdLflbU6dVqnmr8GYD6BGVM2vzxH&X-Amz-Signature=7ba4b181c949838e2c71ada8938314bfd1aff47f8b0df249aca11e8bf30ae096&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZZ4V3J%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHlgtRFmRx7h%2B%2BRvFENdHdR1cJQuH4QkLPRDcTzIYPyeAiBWbaG%2BTgd4MSx5LUT0SO62pTnaPGbaLBl1hzUOQja1CCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM9aHD%2BJVCGtt8KIUCKtwDhI%2B3nAIPjLYJY4A8iUQdXrHobQhSmVxI%2Bh4cMw42j%2Fkq3ym3k9tHca2X%2FE79NQXyqfV3V7FNuJmqpdhC3fdbstwKmug67oKd9ole0CNdMxjSwgqMKOm35TqTMz2aB02A%2Bx5SgorBbXng1CEr4wmlnwEEfxTAGgLOgwy9DowwaGjXTP0%2Bzeu%2FOVzC1O%2B20ClxbG%2BrbRJVKgkRI4aXfJdQ1qAmIaO5bG5JyPhS60l96GB2UFaMuF%2BVFFXJKXUeY7vGhKAHmNXzg%2FF%2BPBCRafc5Fca%2B82iTnU3Yqj7ofqT%2FuUN6fwMXz8wbLQ1MipqkwqQAc162o%2B0QEDM0DjLVmRjRf63mTvbzYQbbJU%2Bwe%2BnDvq5fuW5n34j0ceMpE3%2BoaR78tFXqJn%2B8TXs2BiX%2BJ3%2BDGBgxqWo8KhY3IUAdAeaeRbeuCRFXColIl9B0UWtdj%2FD4mNuld6TAALwtncMeIqzyEPpylmi27p43mcEds5Q1OBmF%2F%2Fm9mmvAHBysOflIeTrEFm28NWijMsyGiR%2FO6NhM35YW%2B6aYVbRym3%2BCHtB6LwnjN2zRE6ueNWwIGMk8KeNMt6WpWywLkLiwqTZvgvf%2BSagAlooTjuM%2FQQ8QolwIUibh8YvDIROJXOR5zqUwjd6BwgY6pgElGfwXy884Vf8i4T7%2BtE7qIoxv21WTPUVhM0pP%2Fb2LAn8bveCHKcsrjelGve0eIAa8u7yQ0fblkrQCJGjP0gq%2FjtI%2Bu6cp7ZaMv%2BK7E4ccFkOgSCbtt%2Bobk6TUAwl9WVbwlEvfeNJh6KLaQV09vsaJYjBJRWnQ8ATcJi12t0An6pb%2BexxBczPzeHBeGKfqx0wzbdLflbU6dVqnmr8GYD6BGVM2vzxH&X-Amz-Signature=b998eb4f132a818b12627298425df4e3189851d121db21a8729f283896d1e9b3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZZ4V3J%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHlgtRFmRx7h%2B%2BRvFENdHdR1cJQuH4QkLPRDcTzIYPyeAiBWbaG%2BTgd4MSx5LUT0SO62pTnaPGbaLBl1hzUOQja1CCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM9aHD%2BJVCGtt8KIUCKtwDhI%2B3nAIPjLYJY4A8iUQdXrHobQhSmVxI%2Bh4cMw42j%2Fkq3ym3k9tHca2X%2FE79NQXyqfV3V7FNuJmqpdhC3fdbstwKmug67oKd9ole0CNdMxjSwgqMKOm35TqTMz2aB02A%2Bx5SgorBbXng1CEr4wmlnwEEfxTAGgLOgwy9DowwaGjXTP0%2Bzeu%2FOVzC1O%2B20ClxbG%2BrbRJVKgkRI4aXfJdQ1qAmIaO5bG5JyPhS60l96GB2UFaMuF%2BVFFXJKXUeY7vGhKAHmNXzg%2FF%2BPBCRafc5Fca%2B82iTnU3Yqj7ofqT%2FuUN6fwMXz8wbLQ1MipqkwqQAc162o%2B0QEDM0DjLVmRjRf63mTvbzYQbbJU%2Bwe%2BnDvq5fuW5n34j0ceMpE3%2BoaR78tFXqJn%2B8TXs2BiX%2BJ3%2BDGBgxqWo8KhY3IUAdAeaeRbeuCRFXColIl9B0UWtdj%2FD4mNuld6TAALwtncMeIqzyEPpylmi27p43mcEds5Q1OBmF%2F%2Fm9mmvAHBysOflIeTrEFm28NWijMsyGiR%2FO6NhM35YW%2B6aYVbRym3%2BCHtB6LwnjN2zRE6ueNWwIGMk8KeNMt6WpWywLkLiwqTZvgvf%2BSagAlooTjuM%2FQQ8QolwIUibh8YvDIROJXOR5zqUwjd6BwgY6pgElGfwXy884Vf8i4T7%2BtE7qIoxv21WTPUVhM0pP%2Fb2LAn8bveCHKcsrjelGve0eIAa8u7yQ0fblkrQCJGjP0gq%2FjtI%2Bu6cp7ZaMv%2BK7E4ccFkOgSCbtt%2Bobk6TUAwl9WVbwlEvfeNJh6KLaQV09vsaJYjBJRWnQ8ATcJi12t0An6pb%2BexxBczPzeHBeGKfqx0wzbdLflbU6dVqnmr8GYD6BGVM2vzxH&X-Amz-Signature=96a2a88ef0d4a5a9d948615033e018e1c488cdc9cb7c079167f747faab565d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZZ4V3J%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHlgtRFmRx7h%2B%2BRvFENdHdR1cJQuH4QkLPRDcTzIYPyeAiBWbaG%2BTgd4MSx5LUT0SO62pTnaPGbaLBl1hzUOQja1CCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM9aHD%2BJVCGtt8KIUCKtwDhI%2B3nAIPjLYJY4A8iUQdXrHobQhSmVxI%2Bh4cMw42j%2Fkq3ym3k9tHca2X%2FE79NQXyqfV3V7FNuJmqpdhC3fdbstwKmug67oKd9ole0CNdMxjSwgqMKOm35TqTMz2aB02A%2Bx5SgorBbXng1CEr4wmlnwEEfxTAGgLOgwy9DowwaGjXTP0%2Bzeu%2FOVzC1O%2B20ClxbG%2BrbRJVKgkRI4aXfJdQ1qAmIaO5bG5JyPhS60l96GB2UFaMuF%2BVFFXJKXUeY7vGhKAHmNXzg%2FF%2BPBCRafc5Fca%2B82iTnU3Yqj7ofqT%2FuUN6fwMXz8wbLQ1MipqkwqQAc162o%2B0QEDM0DjLVmRjRf63mTvbzYQbbJU%2Bwe%2BnDvq5fuW5n34j0ceMpE3%2BoaR78tFXqJn%2B8TXs2BiX%2BJ3%2BDGBgxqWo8KhY3IUAdAeaeRbeuCRFXColIl9B0UWtdj%2FD4mNuld6TAALwtncMeIqzyEPpylmi27p43mcEds5Q1OBmF%2F%2Fm9mmvAHBysOflIeTrEFm28NWijMsyGiR%2FO6NhM35YW%2B6aYVbRym3%2BCHtB6LwnjN2zRE6ueNWwIGMk8KeNMt6WpWywLkLiwqTZvgvf%2BSagAlooTjuM%2FQQ8QolwIUibh8YvDIROJXOR5zqUwjd6BwgY6pgElGfwXy884Vf8i4T7%2BtE7qIoxv21WTPUVhM0pP%2Fb2LAn8bveCHKcsrjelGve0eIAa8u7yQ0fblkrQCJGjP0gq%2FjtI%2Bu6cp7ZaMv%2BK7E4ccFkOgSCbtt%2Bobk6TUAwl9WVbwlEvfeNJh6KLaQV09vsaJYjBJRWnQ8ATcJi12t0An6pb%2BexxBczPzeHBeGKfqx0wzbdLflbU6dVqnmr8GYD6BGVM2vzxH&X-Amz-Signature=824d6d6b9c017f21bf3a8903613c1d7fa07b2a6d248ffbfb521dd10dfa0516ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSZZ4V3J%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHlgtRFmRx7h%2B%2BRvFENdHdR1cJQuH4QkLPRDcTzIYPyeAiBWbaG%2BTgd4MSx5LUT0SO62pTnaPGbaLBl1hzUOQja1CCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM9aHD%2BJVCGtt8KIUCKtwDhI%2B3nAIPjLYJY4A8iUQdXrHobQhSmVxI%2Bh4cMw42j%2Fkq3ym3k9tHca2X%2FE79NQXyqfV3V7FNuJmqpdhC3fdbstwKmug67oKd9ole0CNdMxjSwgqMKOm35TqTMz2aB02A%2Bx5SgorBbXng1CEr4wmlnwEEfxTAGgLOgwy9DowwaGjXTP0%2Bzeu%2FOVzC1O%2B20ClxbG%2BrbRJVKgkRI4aXfJdQ1qAmIaO5bG5JyPhS60l96GB2UFaMuF%2BVFFXJKXUeY7vGhKAHmNXzg%2FF%2BPBCRafc5Fca%2B82iTnU3Yqj7ofqT%2FuUN6fwMXz8wbLQ1MipqkwqQAc162o%2B0QEDM0DjLVmRjRf63mTvbzYQbbJU%2Bwe%2BnDvq5fuW5n34j0ceMpE3%2BoaR78tFXqJn%2B8TXs2BiX%2BJ3%2BDGBgxqWo8KhY3IUAdAeaeRbeuCRFXColIl9B0UWtdj%2FD4mNuld6TAALwtncMeIqzyEPpylmi27p43mcEds5Q1OBmF%2F%2Fm9mmvAHBysOflIeTrEFm28NWijMsyGiR%2FO6NhM35YW%2B6aYVbRym3%2BCHtB6LwnjN2zRE6ueNWwIGMk8KeNMt6WpWywLkLiwqTZvgvf%2BSagAlooTjuM%2FQQ8QolwIUibh8YvDIROJXOR5zqUwjd6BwgY6pgElGfwXy884Vf8i4T7%2BtE7qIoxv21WTPUVhM0pP%2Fb2LAn8bveCHKcsrjelGve0eIAa8u7yQ0fblkrQCJGjP0gq%2FjtI%2Bu6cp7ZaMv%2BK7E4ccFkOgSCbtt%2Bobk6TUAwl9WVbwlEvfeNJh6KLaQV09vsaJYjBJRWnQ8ATcJi12t0An6pb%2BexxBczPzeHBeGKfqx0wzbdLflbU6dVqnmr8GYD6BGVM2vzxH&X-Amz-Signature=04823ddb3a5fe9b5b3372a58da24bdf77f0aa4e5dd1f03d02d0edf51d4c5897b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
