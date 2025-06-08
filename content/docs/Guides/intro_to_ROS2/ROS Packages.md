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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P7CKTB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL6vWHIjys%2BVBZtOLqlT4IuihLzTbxaUzcbHxKIK5j4AiBArJuLNDwkt%2FrK4ryNV6FE9lK%2BN%2Br30iGBfzZYNON%2FnyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81yag%2FxCY6TdcJ6kKtwDVh5jMpr0RfBg0AKl7UT8urX1c%2F%2FtV3hsumo26zC3VZNkP%2BwfZyEbhyM%2BzloarbOPMYuhkaKOrwxn7F2oaI0uecxUgQUjlkWZ9HSYrW0cDNgqbq%2FSe7xteLGFpHMIxnax1vKt4ZeV9S9cUBXWRbFpc97Cz7zR7tGlDztdKoB9QCQgcljL4tsR%2BX%2BoE5Ix8RGPpHYy7BWUnVSC%2B%2BCKvTxg6%2BYTHXeYkSEKxxUlz09l2TvToHw%2FZ8tO7AYjlKKMZy0IjehHwrij%2B3O5doHTmpuE2nItaZ8L42Qv%2FB2wjmXMYrZyml%2BU8i1%2BDIopSYw0pcoHlxTNj2QOcXnYrvfL05FSyAelboDH%2BxnKWd24jqO7WcL3IgWdwE5N4xL%2BT7uAYjVICZ9KA3QjUpPe0t4vUVNPT6wXxyXpMk9qXv7QS%2BnDblWOomiBSxFGYPf%2Fz1DK5sJU1qUbmS%2BViQx2BEEDTMVIWotG7Ti9p9SVaTHcj6eqULg8Gsd4phxagot53C0qdJLo8s5wbHaGFhABX8IBC5RW%2F%2FzTCGN7OsYbn%2FrYjsa1nJqXoANZ4mJdMomUw6NRXjm0RCxUCfmcST51e2CUgGVTC8h%2BXvQfs2GfFx9Kn1QZpXYt5Q9ndy5qZylR6oUwk6aVwgY6pgE6FBQN56hWqsV5KMnc%2Fs%2BDXInCHbAkfJxIk9srdujMC3%2B0xcCg4yAbuMp8NJCOD91%2FVdXV4xkKX610WTA6eA0kl3953Rc6rykI3fQUS9V4tt%2BYpCKBORVPcxHZZ9P%2B2heu9SjAfh6Y9rB6Y5ARJhUi1jDqyEJL%2BWKprLnkXIOYX8oxnQKiPBd%2BMGCiUZ7UEObqoXAME%2FfTanX70Y%2BJ0JwTWCZ5%2BREr&X-Amz-Signature=6630e76725272a30f4a86b270fb23e12b53d88d0061fc83b5da1180708a34429&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P7CKTB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL6vWHIjys%2BVBZtOLqlT4IuihLzTbxaUzcbHxKIK5j4AiBArJuLNDwkt%2FrK4ryNV6FE9lK%2BN%2Br30iGBfzZYNON%2FnyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81yag%2FxCY6TdcJ6kKtwDVh5jMpr0RfBg0AKl7UT8urX1c%2F%2FtV3hsumo26zC3VZNkP%2BwfZyEbhyM%2BzloarbOPMYuhkaKOrwxn7F2oaI0uecxUgQUjlkWZ9HSYrW0cDNgqbq%2FSe7xteLGFpHMIxnax1vKt4ZeV9S9cUBXWRbFpc97Cz7zR7tGlDztdKoB9QCQgcljL4tsR%2BX%2BoE5Ix8RGPpHYy7BWUnVSC%2B%2BCKvTxg6%2BYTHXeYkSEKxxUlz09l2TvToHw%2FZ8tO7AYjlKKMZy0IjehHwrij%2B3O5doHTmpuE2nItaZ8L42Qv%2FB2wjmXMYrZyml%2BU8i1%2BDIopSYw0pcoHlxTNj2QOcXnYrvfL05FSyAelboDH%2BxnKWd24jqO7WcL3IgWdwE5N4xL%2BT7uAYjVICZ9KA3QjUpPe0t4vUVNPT6wXxyXpMk9qXv7QS%2BnDblWOomiBSxFGYPf%2Fz1DK5sJU1qUbmS%2BViQx2BEEDTMVIWotG7Ti9p9SVaTHcj6eqULg8Gsd4phxagot53C0qdJLo8s5wbHaGFhABX8IBC5RW%2F%2FzTCGN7OsYbn%2FrYjsa1nJqXoANZ4mJdMomUw6NRXjm0RCxUCfmcST51e2CUgGVTC8h%2BXvQfs2GfFx9Kn1QZpXYt5Q9ndy5qZylR6oUwk6aVwgY6pgE6FBQN56hWqsV5KMnc%2Fs%2BDXInCHbAkfJxIk9srdujMC3%2B0xcCg4yAbuMp8NJCOD91%2FVdXV4xkKX610WTA6eA0kl3953Rc6rykI3fQUS9V4tt%2BYpCKBORVPcxHZZ9P%2B2heu9SjAfh6Y9rB6Y5ARJhUi1jDqyEJL%2BWKprLnkXIOYX8oxnQKiPBd%2BMGCiUZ7UEObqoXAME%2FfTanX70Y%2BJ0JwTWCZ5%2BREr&X-Amz-Signature=71878828ff99ad624d3b291ec75d39f87c83334eb780f75f1526934d4007e0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P7CKTB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL6vWHIjys%2BVBZtOLqlT4IuihLzTbxaUzcbHxKIK5j4AiBArJuLNDwkt%2FrK4ryNV6FE9lK%2BN%2Br30iGBfzZYNON%2FnyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81yag%2FxCY6TdcJ6kKtwDVh5jMpr0RfBg0AKl7UT8urX1c%2F%2FtV3hsumo26zC3VZNkP%2BwfZyEbhyM%2BzloarbOPMYuhkaKOrwxn7F2oaI0uecxUgQUjlkWZ9HSYrW0cDNgqbq%2FSe7xteLGFpHMIxnax1vKt4ZeV9S9cUBXWRbFpc97Cz7zR7tGlDztdKoB9QCQgcljL4tsR%2BX%2BoE5Ix8RGPpHYy7BWUnVSC%2B%2BCKvTxg6%2BYTHXeYkSEKxxUlz09l2TvToHw%2FZ8tO7AYjlKKMZy0IjehHwrij%2B3O5doHTmpuE2nItaZ8L42Qv%2FB2wjmXMYrZyml%2BU8i1%2BDIopSYw0pcoHlxTNj2QOcXnYrvfL05FSyAelboDH%2BxnKWd24jqO7WcL3IgWdwE5N4xL%2BT7uAYjVICZ9KA3QjUpPe0t4vUVNPT6wXxyXpMk9qXv7QS%2BnDblWOomiBSxFGYPf%2Fz1DK5sJU1qUbmS%2BViQx2BEEDTMVIWotG7Ti9p9SVaTHcj6eqULg8Gsd4phxagot53C0qdJLo8s5wbHaGFhABX8IBC5RW%2F%2FzTCGN7OsYbn%2FrYjsa1nJqXoANZ4mJdMomUw6NRXjm0RCxUCfmcST51e2CUgGVTC8h%2BXvQfs2GfFx9Kn1QZpXYt5Q9ndy5qZylR6oUwk6aVwgY6pgE6FBQN56hWqsV5KMnc%2Fs%2BDXInCHbAkfJxIk9srdujMC3%2B0xcCg4yAbuMp8NJCOD91%2FVdXV4xkKX610WTA6eA0kl3953Rc6rykI3fQUS9V4tt%2BYpCKBORVPcxHZZ9P%2B2heu9SjAfh6Y9rB6Y5ARJhUi1jDqyEJL%2BWKprLnkXIOYX8oxnQKiPBd%2BMGCiUZ7UEObqoXAME%2FfTanX70Y%2BJ0JwTWCZ5%2BREr&X-Amz-Signature=1831c58cfbc2b6adc27b44ab0516d6c1415519cafdf5c98825f77ff3885484bf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P7CKTB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL6vWHIjys%2BVBZtOLqlT4IuihLzTbxaUzcbHxKIK5j4AiBArJuLNDwkt%2FrK4ryNV6FE9lK%2BN%2Br30iGBfzZYNON%2FnyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81yag%2FxCY6TdcJ6kKtwDVh5jMpr0RfBg0AKl7UT8urX1c%2F%2FtV3hsumo26zC3VZNkP%2BwfZyEbhyM%2BzloarbOPMYuhkaKOrwxn7F2oaI0uecxUgQUjlkWZ9HSYrW0cDNgqbq%2FSe7xteLGFpHMIxnax1vKt4ZeV9S9cUBXWRbFpc97Cz7zR7tGlDztdKoB9QCQgcljL4tsR%2BX%2BoE5Ix8RGPpHYy7BWUnVSC%2B%2BCKvTxg6%2BYTHXeYkSEKxxUlz09l2TvToHw%2FZ8tO7AYjlKKMZy0IjehHwrij%2B3O5doHTmpuE2nItaZ8L42Qv%2FB2wjmXMYrZyml%2BU8i1%2BDIopSYw0pcoHlxTNj2QOcXnYrvfL05FSyAelboDH%2BxnKWd24jqO7WcL3IgWdwE5N4xL%2BT7uAYjVICZ9KA3QjUpPe0t4vUVNPT6wXxyXpMk9qXv7QS%2BnDblWOomiBSxFGYPf%2Fz1DK5sJU1qUbmS%2BViQx2BEEDTMVIWotG7Ti9p9SVaTHcj6eqULg8Gsd4phxagot53C0qdJLo8s5wbHaGFhABX8IBC5RW%2F%2FzTCGN7OsYbn%2FrYjsa1nJqXoANZ4mJdMomUw6NRXjm0RCxUCfmcST51e2CUgGVTC8h%2BXvQfs2GfFx9Kn1QZpXYt5Q9ndy5qZylR6oUwk6aVwgY6pgE6FBQN56hWqsV5KMnc%2Fs%2BDXInCHbAkfJxIk9srdujMC3%2B0xcCg4yAbuMp8NJCOD91%2FVdXV4xkKX610WTA6eA0kl3953Rc6rykI3fQUS9V4tt%2BYpCKBORVPcxHZZ9P%2B2heu9SjAfh6Y9rB6Y5ARJhUi1jDqyEJL%2BWKprLnkXIOYX8oxnQKiPBd%2BMGCiUZ7UEObqoXAME%2FfTanX70Y%2BJ0JwTWCZ5%2BREr&X-Amz-Signature=dc65c1a1950434b0b8cbbd2ba62dc0b8701c5ad8b3e757ec9957fd0ec499c298&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P7CKTB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL6vWHIjys%2BVBZtOLqlT4IuihLzTbxaUzcbHxKIK5j4AiBArJuLNDwkt%2FrK4ryNV6FE9lK%2BN%2Br30iGBfzZYNON%2FnyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81yag%2FxCY6TdcJ6kKtwDVh5jMpr0RfBg0AKl7UT8urX1c%2F%2FtV3hsumo26zC3VZNkP%2BwfZyEbhyM%2BzloarbOPMYuhkaKOrwxn7F2oaI0uecxUgQUjlkWZ9HSYrW0cDNgqbq%2FSe7xteLGFpHMIxnax1vKt4ZeV9S9cUBXWRbFpc97Cz7zR7tGlDztdKoB9QCQgcljL4tsR%2BX%2BoE5Ix8RGPpHYy7BWUnVSC%2B%2BCKvTxg6%2BYTHXeYkSEKxxUlz09l2TvToHw%2FZ8tO7AYjlKKMZy0IjehHwrij%2B3O5doHTmpuE2nItaZ8L42Qv%2FB2wjmXMYrZyml%2BU8i1%2BDIopSYw0pcoHlxTNj2QOcXnYrvfL05FSyAelboDH%2BxnKWd24jqO7WcL3IgWdwE5N4xL%2BT7uAYjVICZ9KA3QjUpPe0t4vUVNPT6wXxyXpMk9qXv7QS%2BnDblWOomiBSxFGYPf%2Fz1DK5sJU1qUbmS%2BViQx2BEEDTMVIWotG7Ti9p9SVaTHcj6eqULg8Gsd4phxagot53C0qdJLo8s5wbHaGFhABX8IBC5RW%2F%2FzTCGN7OsYbn%2FrYjsa1nJqXoANZ4mJdMomUw6NRXjm0RCxUCfmcST51e2CUgGVTC8h%2BXvQfs2GfFx9Kn1QZpXYt5Q9ndy5qZylR6oUwk6aVwgY6pgE6FBQN56hWqsV5KMnc%2Fs%2BDXInCHbAkfJxIk9srdujMC3%2B0xcCg4yAbuMp8NJCOD91%2FVdXV4xkKX610WTA6eA0kl3953Rc6rykI3fQUS9V4tt%2BYpCKBORVPcxHZZ9P%2B2heu9SjAfh6Y9rB6Y5ARJhUi1jDqyEJL%2BWKprLnkXIOYX8oxnQKiPBd%2BMGCiUZ7UEObqoXAME%2FfTanX70Y%2BJ0JwTWCZ5%2BREr&X-Amz-Signature=14d5691a7e07ee16de43ffcdd28a5585ce94dd5ce8e4b53d4e87652edeb4a7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P7CKTB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL6vWHIjys%2BVBZtOLqlT4IuihLzTbxaUzcbHxKIK5j4AiBArJuLNDwkt%2FrK4ryNV6FE9lK%2BN%2Br30iGBfzZYNON%2FnyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81yag%2FxCY6TdcJ6kKtwDVh5jMpr0RfBg0AKl7UT8urX1c%2F%2FtV3hsumo26zC3VZNkP%2BwfZyEbhyM%2BzloarbOPMYuhkaKOrwxn7F2oaI0uecxUgQUjlkWZ9HSYrW0cDNgqbq%2FSe7xteLGFpHMIxnax1vKt4ZeV9S9cUBXWRbFpc97Cz7zR7tGlDztdKoB9QCQgcljL4tsR%2BX%2BoE5Ix8RGPpHYy7BWUnVSC%2B%2BCKvTxg6%2BYTHXeYkSEKxxUlz09l2TvToHw%2FZ8tO7AYjlKKMZy0IjehHwrij%2B3O5doHTmpuE2nItaZ8L42Qv%2FB2wjmXMYrZyml%2BU8i1%2BDIopSYw0pcoHlxTNj2QOcXnYrvfL05FSyAelboDH%2BxnKWd24jqO7WcL3IgWdwE5N4xL%2BT7uAYjVICZ9KA3QjUpPe0t4vUVNPT6wXxyXpMk9qXv7QS%2BnDblWOomiBSxFGYPf%2Fz1DK5sJU1qUbmS%2BViQx2BEEDTMVIWotG7Ti9p9SVaTHcj6eqULg8Gsd4phxagot53C0qdJLo8s5wbHaGFhABX8IBC5RW%2F%2FzTCGN7OsYbn%2FrYjsa1nJqXoANZ4mJdMomUw6NRXjm0RCxUCfmcST51e2CUgGVTC8h%2BXvQfs2GfFx9Kn1QZpXYt5Q9ndy5qZylR6oUwk6aVwgY6pgE6FBQN56hWqsV5KMnc%2Fs%2BDXInCHbAkfJxIk9srdujMC3%2B0xcCg4yAbuMp8NJCOD91%2FVdXV4xkKX610WTA6eA0kl3953Rc6rykI3fQUS9V4tt%2BYpCKBORVPcxHZZ9P%2B2heu9SjAfh6Y9rB6Y5ARJhUi1jDqyEJL%2BWKprLnkXIOYX8oxnQKiPBd%2BMGCiUZ7UEObqoXAME%2FfTanX70Y%2BJ0JwTWCZ5%2BREr&X-Amz-Signature=153ab1be980dc3e8ac4e37f16a37ed6e416f7176026a0873d7e85c53b8eefdb5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5P7CKTB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL6vWHIjys%2BVBZtOLqlT4IuihLzTbxaUzcbHxKIK5j4AiBArJuLNDwkt%2FrK4ryNV6FE9lK%2BN%2Br30iGBfzZYNON%2FnyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81yag%2FxCY6TdcJ6kKtwDVh5jMpr0RfBg0AKl7UT8urX1c%2F%2FtV3hsumo26zC3VZNkP%2BwfZyEbhyM%2BzloarbOPMYuhkaKOrwxn7F2oaI0uecxUgQUjlkWZ9HSYrW0cDNgqbq%2FSe7xteLGFpHMIxnax1vKt4ZeV9S9cUBXWRbFpc97Cz7zR7tGlDztdKoB9QCQgcljL4tsR%2BX%2BoE5Ix8RGPpHYy7BWUnVSC%2B%2BCKvTxg6%2BYTHXeYkSEKxxUlz09l2TvToHw%2FZ8tO7AYjlKKMZy0IjehHwrij%2B3O5doHTmpuE2nItaZ8L42Qv%2FB2wjmXMYrZyml%2BU8i1%2BDIopSYw0pcoHlxTNj2QOcXnYrvfL05FSyAelboDH%2BxnKWd24jqO7WcL3IgWdwE5N4xL%2BT7uAYjVICZ9KA3QjUpPe0t4vUVNPT6wXxyXpMk9qXv7QS%2BnDblWOomiBSxFGYPf%2Fz1DK5sJU1qUbmS%2BViQx2BEEDTMVIWotG7Ti9p9SVaTHcj6eqULg8Gsd4phxagot53C0qdJLo8s5wbHaGFhABX8IBC5RW%2F%2FzTCGN7OsYbn%2FrYjsa1nJqXoANZ4mJdMomUw6NRXjm0RCxUCfmcST51e2CUgGVTC8h%2BXvQfs2GfFx9Kn1QZpXYt5Q9ndy5qZylR6oUwk6aVwgY6pgE6FBQN56hWqsV5KMnc%2Fs%2BDXInCHbAkfJxIk9srdujMC3%2B0xcCg4yAbuMp8NJCOD91%2FVdXV4xkKX610WTA6eA0kl3953Rc6rykI3fQUS9V4tt%2BYpCKBORVPcxHZZ9P%2B2heu9SjAfh6Y9rB6Y5ARJhUi1jDqyEJL%2BWKprLnkXIOYX8oxnQKiPBd%2BMGCiUZ7UEObqoXAME%2FfTanX70Y%2BJ0JwTWCZ5%2BREr&X-Amz-Signature=9339a06a7237d979c14209ac7de36596861100ae1df77b08cac7a233a3d48cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
