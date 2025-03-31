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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYCKSQC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA7XTm1Gv3cUTkuAUr%2BSeThq36Lh%2BsLTPOMfOUXU6giVAiBUSJjSMmiSYw%2BvSxYr8sGvFFZsENNn5IWgSwAXqDA0pSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYZw3kHbQX3AoUbBKtwDPfUkRZ%2Fs7cq29MOLGqyewUHa3l5u1TTxGXiK9f6GlmpzfIiZcB0fkimei%2FvXzZw2nKR43se7hMX4zgOlNsybWejasGbIb3DSSVE%2F3ngxKuGtTQGfRJG%2B2fSx8Pwkz3g3xveT32GxR7c8CrO0q4Rq%2FG1luu%2FexCJzV4zvVOs%2Fe24XDpsnj8vyPR3bvm8R%2FXe5g2H4fvbe5jNaFJoz3Pa9U6vO1wcGnOyNNXkLn1yU3Q%2F2VoIP7uAnswyHLlxqxymq0TF2s7Q6qwrDNQjRR3JFxEE2HSnVM4xKDfYwoeJOhe1SsmgLnGSil9Ia0cTRW7w28bl0myljzdTSVYbYPwF0Oye2M3GOMZfWxjDqeQTPnrU9loGrCFrA1k4Q130EBsj%2F1j6Ryqud55Duh%2BMi8cHB3%2FevnXzeaiZAT4zTZinppX9xN0xSgMFyx56vIf%2BeD8He2XyFEwqLigKfeJXQUsEttnvvQn9jkCR5G6BY5%2BhEkKSN1kF69Hnt5xfQlUbPZWpRJ9YZqjpkqbPwGH9UBXhZ55aIpir%2B3JPhGt%2FyavaoXEElHiNmSyOCpxnj2JLHoI5%2Br3uzSkE5idg4FuRdai0%2BI2xqQJc62kMvVE8WEgT9KRA1BEr3Vq6WuryzxXow3OapvwY6pgErzQmwb03DUVDBOFK0QjyBG94Svkk2dIMHfNfOjT2xhXFlPooSfLrXNxjTFM4nHmmPoywnlCbhE5h%2FcfL7yLiUH2GyIt615QOEL4RPd64NGBf4rfU5setK29YxVN7TbDePVEWN6BXTlbT9AgtNnbH3Ocoq90HBxh33mPxOZgRl6evY4qLBUdATbgc2uh4cZGQ5sslkHP9KRqH2nc%2FnKHAmSssTQV7F&X-Amz-Signature=7e73038378d783ab8b7da62919d5a7ade7b7cf0575b21800ae1def8b3db2c4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYCKSQC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA7XTm1Gv3cUTkuAUr%2BSeThq36Lh%2BsLTPOMfOUXU6giVAiBUSJjSMmiSYw%2BvSxYr8sGvFFZsENNn5IWgSwAXqDA0pSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYZw3kHbQX3AoUbBKtwDPfUkRZ%2Fs7cq29MOLGqyewUHa3l5u1TTxGXiK9f6GlmpzfIiZcB0fkimei%2FvXzZw2nKR43se7hMX4zgOlNsybWejasGbIb3DSSVE%2F3ngxKuGtTQGfRJG%2B2fSx8Pwkz3g3xveT32GxR7c8CrO0q4Rq%2FG1luu%2FexCJzV4zvVOs%2Fe24XDpsnj8vyPR3bvm8R%2FXe5g2H4fvbe5jNaFJoz3Pa9U6vO1wcGnOyNNXkLn1yU3Q%2F2VoIP7uAnswyHLlxqxymq0TF2s7Q6qwrDNQjRR3JFxEE2HSnVM4xKDfYwoeJOhe1SsmgLnGSil9Ia0cTRW7w28bl0myljzdTSVYbYPwF0Oye2M3GOMZfWxjDqeQTPnrU9loGrCFrA1k4Q130EBsj%2F1j6Ryqud55Duh%2BMi8cHB3%2FevnXzeaiZAT4zTZinppX9xN0xSgMFyx56vIf%2BeD8He2XyFEwqLigKfeJXQUsEttnvvQn9jkCR5G6BY5%2BhEkKSN1kF69Hnt5xfQlUbPZWpRJ9YZqjpkqbPwGH9UBXhZ55aIpir%2B3JPhGt%2FyavaoXEElHiNmSyOCpxnj2JLHoI5%2Br3uzSkE5idg4FuRdai0%2BI2xqQJc62kMvVE8WEgT9KRA1BEr3Vq6WuryzxXow3OapvwY6pgErzQmwb03DUVDBOFK0QjyBG94Svkk2dIMHfNfOjT2xhXFlPooSfLrXNxjTFM4nHmmPoywnlCbhE5h%2FcfL7yLiUH2GyIt615QOEL4RPd64NGBf4rfU5setK29YxVN7TbDePVEWN6BXTlbT9AgtNnbH3Ocoq90HBxh33mPxOZgRl6evY4qLBUdATbgc2uh4cZGQ5sslkHP9KRqH2nc%2FnKHAmSssTQV7F&X-Amz-Signature=486edc232e326b3e745b38833fe07900641838c7f0102958f766b8dd6e708635&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYCKSQC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA7XTm1Gv3cUTkuAUr%2BSeThq36Lh%2BsLTPOMfOUXU6giVAiBUSJjSMmiSYw%2BvSxYr8sGvFFZsENNn5IWgSwAXqDA0pSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYZw3kHbQX3AoUbBKtwDPfUkRZ%2Fs7cq29MOLGqyewUHa3l5u1TTxGXiK9f6GlmpzfIiZcB0fkimei%2FvXzZw2nKR43se7hMX4zgOlNsybWejasGbIb3DSSVE%2F3ngxKuGtTQGfRJG%2B2fSx8Pwkz3g3xveT32GxR7c8CrO0q4Rq%2FG1luu%2FexCJzV4zvVOs%2Fe24XDpsnj8vyPR3bvm8R%2FXe5g2H4fvbe5jNaFJoz3Pa9U6vO1wcGnOyNNXkLn1yU3Q%2F2VoIP7uAnswyHLlxqxymq0TF2s7Q6qwrDNQjRR3JFxEE2HSnVM4xKDfYwoeJOhe1SsmgLnGSil9Ia0cTRW7w28bl0myljzdTSVYbYPwF0Oye2M3GOMZfWxjDqeQTPnrU9loGrCFrA1k4Q130EBsj%2F1j6Ryqud55Duh%2BMi8cHB3%2FevnXzeaiZAT4zTZinppX9xN0xSgMFyx56vIf%2BeD8He2XyFEwqLigKfeJXQUsEttnvvQn9jkCR5G6BY5%2BhEkKSN1kF69Hnt5xfQlUbPZWpRJ9YZqjpkqbPwGH9UBXhZ55aIpir%2B3JPhGt%2FyavaoXEElHiNmSyOCpxnj2JLHoI5%2Br3uzSkE5idg4FuRdai0%2BI2xqQJc62kMvVE8WEgT9KRA1BEr3Vq6WuryzxXow3OapvwY6pgErzQmwb03DUVDBOFK0QjyBG94Svkk2dIMHfNfOjT2xhXFlPooSfLrXNxjTFM4nHmmPoywnlCbhE5h%2FcfL7yLiUH2GyIt615QOEL4RPd64NGBf4rfU5setK29YxVN7TbDePVEWN6BXTlbT9AgtNnbH3Ocoq90HBxh33mPxOZgRl6evY4qLBUdATbgc2uh4cZGQ5sslkHP9KRqH2nc%2FnKHAmSssTQV7F&X-Amz-Signature=e6cd1f78bd48539dd0ce834133b10551992a4070b9f62fd4b13e1d8c15c2dcf4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYCKSQC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA7XTm1Gv3cUTkuAUr%2BSeThq36Lh%2BsLTPOMfOUXU6giVAiBUSJjSMmiSYw%2BvSxYr8sGvFFZsENNn5IWgSwAXqDA0pSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYZw3kHbQX3AoUbBKtwDPfUkRZ%2Fs7cq29MOLGqyewUHa3l5u1TTxGXiK9f6GlmpzfIiZcB0fkimei%2FvXzZw2nKR43se7hMX4zgOlNsybWejasGbIb3DSSVE%2F3ngxKuGtTQGfRJG%2B2fSx8Pwkz3g3xveT32GxR7c8CrO0q4Rq%2FG1luu%2FexCJzV4zvVOs%2Fe24XDpsnj8vyPR3bvm8R%2FXe5g2H4fvbe5jNaFJoz3Pa9U6vO1wcGnOyNNXkLn1yU3Q%2F2VoIP7uAnswyHLlxqxymq0TF2s7Q6qwrDNQjRR3JFxEE2HSnVM4xKDfYwoeJOhe1SsmgLnGSil9Ia0cTRW7w28bl0myljzdTSVYbYPwF0Oye2M3GOMZfWxjDqeQTPnrU9loGrCFrA1k4Q130EBsj%2F1j6Ryqud55Duh%2BMi8cHB3%2FevnXzeaiZAT4zTZinppX9xN0xSgMFyx56vIf%2BeD8He2XyFEwqLigKfeJXQUsEttnvvQn9jkCR5G6BY5%2BhEkKSN1kF69Hnt5xfQlUbPZWpRJ9YZqjpkqbPwGH9UBXhZ55aIpir%2B3JPhGt%2FyavaoXEElHiNmSyOCpxnj2JLHoI5%2Br3uzSkE5idg4FuRdai0%2BI2xqQJc62kMvVE8WEgT9KRA1BEr3Vq6WuryzxXow3OapvwY6pgErzQmwb03DUVDBOFK0QjyBG94Svkk2dIMHfNfOjT2xhXFlPooSfLrXNxjTFM4nHmmPoywnlCbhE5h%2FcfL7yLiUH2GyIt615QOEL4RPd64NGBf4rfU5setK29YxVN7TbDePVEWN6BXTlbT9AgtNnbH3Ocoq90HBxh33mPxOZgRl6evY4qLBUdATbgc2uh4cZGQ5sslkHP9KRqH2nc%2FnKHAmSssTQV7F&X-Amz-Signature=7db2ec48e02f09f44e4eb0e6ac82194b515bbd4139e7c3980794bf220a63b83f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYCKSQC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA7XTm1Gv3cUTkuAUr%2BSeThq36Lh%2BsLTPOMfOUXU6giVAiBUSJjSMmiSYw%2BvSxYr8sGvFFZsENNn5IWgSwAXqDA0pSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYZw3kHbQX3AoUbBKtwDPfUkRZ%2Fs7cq29MOLGqyewUHa3l5u1TTxGXiK9f6GlmpzfIiZcB0fkimei%2FvXzZw2nKR43se7hMX4zgOlNsybWejasGbIb3DSSVE%2F3ngxKuGtTQGfRJG%2B2fSx8Pwkz3g3xveT32GxR7c8CrO0q4Rq%2FG1luu%2FexCJzV4zvVOs%2Fe24XDpsnj8vyPR3bvm8R%2FXe5g2H4fvbe5jNaFJoz3Pa9U6vO1wcGnOyNNXkLn1yU3Q%2F2VoIP7uAnswyHLlxqxymq0TF2s7Q6qwrDNQjRR3JFxEE2HSnVM4xKDfYwoeJOhe1SsmgLnGSil9Ia0cTRW7w28bl0myljzdTSVYbYPwF0Oye2M3GOMZfWxjDqeQTPnrU9loGrCFrA1k4Q130EBsj%2F1j6Ryqud55Duh%2BMi8cHB3%2FevnXzeaiZAT4zTZinppX9xN0xSgMFyx56vIf%2BeD8He2XyFEwqLigKfeJXQUsEttnvvQn9jkCR5G6BY5%2BhEkKSN1kF69Hnt5xfQlUbPZWpRJ9YZqjpkqbPwGH9UBXhZ55aIpir%2B3JPhGt%2FyavaoXEElHiNmSyOCpxnj2JLHoI5%2Br3uzSkE5idg4FuRdai0%2BI2xqQJc62kMvVE8WEgT9KRA1BEr3Vq6WuryzxXow3OapvwY6pgErzQmwb03DUVDBOFK0QjyBG94Svkk2dIMHfNfOjT2xhXFlPooSfLrXNxjTFM4nHmmPoywnlCbhE5h%2FcfL7yLiUH2GyIt615QOEL4RPd64NGBf4rfU5setK29YxVN7TbDePVEWN6BXTlbT9AgtNnbH3Ocoq90HBxh33mPxOZgRl6evY4qLBUdATbgc2uh4cZGQ5sslkHP9KRqH2nc%2FnKHAmSssTQV7F&X-Amz-Signature=a4d68982fcb0a09f01c0c764d9a921b0dcf7cc37cec376da8bfee7ff2129c0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYCKSQC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA7XTm1Gv3cUTkuAUr%2BSeThq36Lh%2BsLTPOMfOUXU6giVAiBUSJjSMmiSYw%2BvSxYr8sGvFFZsENNn5IWgSwAXqDA0pSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYZw3kHbQX3AoUbBKtwDPfUkRZ%2Fs7cq29MOLGqyewUHa3l5u1TTxGXiK9f6GlmpzfIiZcB0fkimei%2FvXzZw2nKR43se7hMX4zgOlNsybWejasGbIb3DSSVE%2F3ngxKuGtTQGfRJG%2B2fSx8Pwkz3g3xveT32GxR7c8CrO0q4Rq%2FG1luu%2FexCJzV4zvVOs%2Fe24XDpsnj8vyPR3bvm8R%2FXe5g2H4fvbe5jNaFJoz3Pa9U6vO1wcGnOyNNXkLn1yU3Q%2F2VoIP7uAnswyHLlxqxymq0TF2s7Q6qwrDNQjRR3JFxEE2HSnVM4xKDfYwoeJOhe1SsmgLnGSil9Ia0cTRW7w28bl0myljzdTSVYbYPwF0Oye2M3GOMZfWxjDqeQTPnrU9loGrCFrA1k4Q130EBsj%2F1j6Ryqud55Duh%2BMi8cHB3%2FevnXzeaiZAT4zTZinppX9xN0xSgMFyx56vIf%2BeD8He2XyFEwqLigKfeJXQUsEttnvvQn9jkCR5G6BY5%2BhEkKSN1kF69Hnt5xfQlUbPZWpRJ9YZqjpkqbPwGH9UBXhZ55aIpir%2B3JPhGt%2FyavaoXEElHiNmSyOCpxnj2JLHoI5%2Br3uzSkE5idg4FuRdai0%2BI2xqQJc62kMvVE8WEgT9KRA1BEr3Vq6WuryzxXow3OapvwY6pgErzQmwb03DUVDBOFK0QjyBG94Svkk2dIMHfNfOjT2xhXFlPooSfLrXNxjTFM4nHmmPoywnlCbhE5h%2FcfL7yLiUH2GyIt615QOEL4RPd64NGBf4rfU5setK29YxVN7TbDePVEWN6BXTlbT9AgtNnbH3Ocoq90HBxh33mPxOZgRl6evY4qLBUdATbgc2uh4cZGQ5sslkHP9KRqH2nc%2FnKHAmSssTQV7F&X-Amz-Signature=6c9d31388f461090f3822597bdf24de657852f249db5cb7f4dd9c7eb9ced6d71&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYCKSQC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA7XTm1Gv3cUTkuAUr%2BSeThq36Lh%2BsLTPOMfOUXU6giVAiBUSJjSMmiSYw%2BvSxYr8sGvFFZsENNn5IWgSwAXqDA0pSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyYZw3kHbQX3AoUbBKtwDPfUkRZ%2Fs7cq29MOLGqyewUHa3l5u1TTxGXiK9f6GlmpzfIiZcB0fkimei%2FvXzZw2nKR43se7hMX4zgOlNsybWejasGbIb3DSSVE%2F3ngxKuGtTQGfRJG%2B2fSx8Pwkz3g3xveT32GxR7c8CrO0q4Rq%2FG1luu%2FexCJzV4zvVOs%2Fe24XDpsnj8vyPR3bvm8R%2FXe5g2H4fvbe5jNaFJoz3Pa9U6vO1wcGnOyNNXkLn1yU3Q%2F2VoIP7uAnswyHLlxqxymq0TF2s7Q6qwrDNQjRR3JFxEE2HSnVM4xKDfYwoeJOhe1SsmgLnGSil9Ia0cTRW7w28bl0myljzdTSVYbYPwF0Oye2M3GOMZfWxjDqeQTPnrU9loGrCFrA1k4Q130EBsj%2F1j6Ryqud55Duh%2BMi8cHB3%2FevnXzeaiZAT4zTZinppX9xN0xSgMFyx56vIf%2BeD8He2XyFEwqLigKfeJXQUsEttnvvQn9jkCR5G6BY5%2BhEkKSN1kF69Hnt5xfQlUbPZWpRJ9YZqjpkqbPwGH9UBXhZ55aIpir%2B3JPhGt%2FyavaoXEElHiNmSyOCpxnj2JLHoI5%2Br3uzSkE5idg4FuRdai0%2BI2xqQJc62kMvVE8WEgT9KRA1BEr3Vq6WuryzxXow3OapvwY6pgErzQmwb03DUVDBOFK0QjyBG94Svkk2dIMHfNfOjT2xhXFlPooSfLrXNxjTFM4nHmmPoywnlCbhE5h%2FcfL7yLiUH2GyIt615QOEL4RPd64NGBf4rfU5setK29YxVN7TbDePVEWN6BXTlbT9AgtNnbH3Ocoq90HBxh33mPxOZgRl6evY4qLBUdATbgc2uh4cZGQ5sslkHP9KRqH2nc%2FnKHAmSssTQV7F&X-Amz-Signature=902023b64fa32d4e3f7a3135bd6ec7faead19b9fa8627296d9a3ef0bf7f28dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
