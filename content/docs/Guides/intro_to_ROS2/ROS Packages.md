---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CEWZAJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5BH1lISx5NrbheDpMucHETxe95CLtuEDuSV5sObcJAIhALH0uZ2iOT7aTH6n3FuvbDeKjBfISnzfbxd3ECOXwW2FKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpJ0oLcZR12YZ%2FJ0Aq3AOPLuToZ5X%2FuwJUIMPb9HgOitjFFylsYqxh9VSZzJZEaQm9dNBVgPiPQZTvMwE%2B1Ir4tDr%2BecA1zm2zYVNTPgdBj2TPeJr8nc23RN9CNsGjSaQ04gaUXMYPZM1RLrmcPt4w9Nb%2FtsYQxDTKDKA0I2qvs3w3P1UnJku8kH0zSTp3mEohElU%2BKgv%2FJAyF3hp21NO8hb7s6aYPpO3lYkrc5Nq2QUF%2F0aU6%2FadTqFQc7EH8Vgr9HwOqyPoVOZpnyl9MLtUpLAT87S9LNYCBkF5POgfBr4Z9nDzdi85kP4%2FNHe3OqunJyhmBUhpvLLuclVtOLkr6PdljwLvlIoGGLccOjLSyUS%2BJRSrIhLUtCxxysdihetL3VS%2FrYiJ1xItxl9cZQn3041Mcx0Y%2BxMLLcrtkwK7tkTPsdF92l%2Fmd%2BzNLIvJmzLgAUN5Z%2FhuA6QFDF47oiEzU7doLV6z2N96iEd8o%2BIr%2F4T37CLJA%2BFTeizW41GZnlJ1sXt0gvGeosVihH5c0UQhHPFIJorjlXiwrKBBcU%2BE0ihnUXA2GWPzaCiLRniLewu9DrMP2NL%2FsZGgeWUSOaVuAeDLONzU6bZmSXd7ZXe11JFv9J4jcZJRvOX7WXEluXxoxsVytE0UxIGQXpDDWtvLDBjqkAXc7BfG%2Fc4%2Boh5L%2FKyDdJWm8g5E%2B1Dr76vdDpX3kohUYyjAs%2FMr%2B%2FZf0kX%2BvMH6KtN8eQYf13n9tObEYGAtG426lNVV%2FDR1kjRzrTrBBdOqLbyJln8p6eATZlOYleOpK35eDEptLtvaoTNYptT69LddYrjBWzfje5Q7PbapuH0wI52xb3o%2FclcZIecTtZ5NwIUdEvN4ltSgH0TW6sB9LmYdu2ECu&X-Amz-Signature=fa93a7e085542d519418429064965182548ba2c529bfc394538a91fa7e0623e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CEWZAJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5BH1lISx5NrbheDpMucHETxe95CLtuEDuSV5sObcJAIhALH0uZ2iOT7aTH6n3FuvbDeKjBfISnzfbxd3ECOXwW2FKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpJ0oLcZR12YZ%2FJ0Aq3AOPLuToZ5X%2FuwJUIMPb9HgOitjFFylsYqxh9VSZzJZEaQm9dNBVgPiPQZTvMwE%2B1Ir4tDr%2BecA1zm2zYVNTPgdBj2TPeJr8nc23RN9CNsGjSaQ04gaUXMYPZM1RLrmcPt4w9Nb%2FtsYQxDTKDKA0I2qvs3w3P1UnJku8kH0zSTp3mEohElU%2BKgv%2FJAyF3hp21NO8hb7s6aYPpO3lYkrc5Nq2QUF%2F0aU6%2FadTqFQc7EH8Vgr9HwOqyPoVOZpnyl9MLtUpLAT87S9LNYCBkF5POgfBr4Z9nDzdi85kP4%2FNHe3OqunJyhmBUhpvLLuclVtOLkr6PdljwLvlIoGGLccOjLSyUS%2BJRSrIhLUtCxxysdihetL3VS%2FrYiJ1xItxl9cZQn3041Mcx0Y%2BxMLLcrtkwK7tkTPsdF92l%2Fmd%2BzNLIvJmzLgAUN5Z%2FhuA6QFDF47oiEzU7doLV6z2N96iEd8o%2BIr%2F4T37CLJA%2BFTeizW41GZnlJ1sXt0gvGeosVihH5c0UQhHPFIJorjlXiwrKBBcU%2BE0ihnUXA2GWPzaCiLRniLewu9DrMP2NL%2FsZGgeWUSOaVuAeDLONzU6bZmSXd7ZXe11JFv9J4jcZJRvOX7WXEluXxoxsVytE0UxIGQXpDDWtvLDBjqkAXc7BfG%2Fc4%2Boh5L%2FKyDdJWm8g5E%2B1Dr76vdDpX3kohUYyjAs%2FMr%2B%2FZf0kX%2BvMH6KtN8eQYf13n9tObEYGAtG426lNVV%2FDR1kjRzrTrBBdOqLbyJln8p6eATZlOYleOpK35eDEptLtvaoTNYptT69LddYrjBWzfje5Q7PbapuH0wI52xb3o%2FclcZIecTtZ5NwIUdEvN4ltSgH0TW6sB9LmYdu2ECu&X-Amz-Signature=7f3587c88fcae2f2b3d73a6547232262e7bb7254ebb8d4fbc7819bd7fa70bf61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CEWZAJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5BH1lISx5NrbheDpMucHETxe95CLtuEDuSV5sObcJAIhALH0uZ2iOT7aTH6n3FuvbDeKjBfISnzfbxd3ECOXwW2FKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpJ0oLcZR12YZ%2FJ0Aq3AOPLuToZ5X%2FuwJUIMPb9HgOitjFFylsYqxh9VSZzJZEaQm9dNBVgPiPQZTvMwE%2B1Ir4tDr%2BecA1zm2zYVNTPgdBj2TPeJr8nc23RN9CNsGjSaQ04gaUXMYPZM1RLrmcPt4w9Nb%2FtsYQxDTKDKA0I2qvs3w3P1UnJku8kH0zSTp3mEohElU%2BKgv%2FJAyF3hp21NO8hb7s6aYPpO3lYkrc5Nq2QUF%2F0aU6%2FadTqFQc7EH8Vgr9HwOqyPoVOZpnyl9MLtUpLAT87S9LNYCBkF5POgfBr4Z9nDzdi85kP4%2FNHe3OqunJyhmBUhpvLLuclVtOLkr6PdljwLvlIoGGLccOjLSyUS%2BJRSrIhLUtCxxysdihetL3VS%2FrYiJ1xItxl9cZQn3041Mcx0Y%2BxMLLcrtkwK7tkTPsdF92l%2Fmd%2BzNLIvJmzLgAUN5Z%2FhuA6QFDF47oiEzU7doLV6z2N96iEd8o%2BIr%2F4T37CLJA%2BFTeizW41GZnlJ1sXt0gvGeosVihH5c0UQhHPFIJorjlXiwrKBBcU%2BE0ihnUXA2GWPzaCiLRniLewu9DrMP2NL%2FsZGgeWUSOaVuAeDLONzU6bZmSXd7ZXe11JFv9J4jcZJRvOX7WXEluXxoxsVytE0UxIGQXpDDWtvLDBjqkAXc7BfG%2Fc4%2Boh5L%2FKyDdJWm8g5E%2B1Dr76vdDpX3kohUYyjAs%2FMr%2B%2FZf0kX%2BvMH6KtN8eQYf13n9tObEYGAtG426lNVV%2FDR1kjRzrTrBBdOqLbyJln8p6eATZlOYleOpK35eDEptLtvaoTNYptT69LddYrjBWzfje5Q7PbapuH0wI52xb3o%2FclcZIecTtZ5NwIUdEvN4ltSgH0TW6sB9LmYdu2ECu&X-Amz-Signature=b998b6192e18f3c2090aeb9b70fc3bc24b2b93c4a9eaa6497eeda5def87c38ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CEWZAJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5BH1lISx5NrbheDpMucHETxe95CLtuEDuSV5sObcJAIhALH0uZ2iOT7aTH6n3FuvbDeKjBfISnzfbxd3ECOXwW2FKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpJ0oLcZR12YZ%2FJ0Aq3AOPLuToZ5X%2FuwJUIMPb9HgOitjFFylsYqxh9VSZzJZEaQm9dNBVgPiPQZTvMwE%2B1Ir4tDr%2BecA1zm2zYVNTPgdBj2TPeJr8nc23RN9CNsGjSaQ04gaUXMYPZM1RLrmcPt4w9Nb%2FtsYQxDTKDKA0I2qvs3w3P1UnJku8kH0zSTp3mEohElU%2BKgv%2FJAyF3hp21NO8hb7s6aYPpO3lYkrc5Nq2QUF%2F0aU6%2FadTqFQc7EH8Vgr9HwOqyPoVOZpnyl9MLtUpLAT87S9LNYCBkF5POgfBr4Z9nDzdi85kP4%2FNHe3OqunJyhmBUhpvLLuclVtOLkr6PdljwLvlIoGGLccOjLSyUS%2BJRSrIhLUtCxxysdihetL3VS%2FrYiJ1xItxl9cZQn3041Mcx0Y%2BxMLLcrtkwK7tkTPsdF92l%2Fmd%2BzNLIvJmzLgAUN5Z%2FhuA6QFDF47oiEzU7doLV6z2N96iEd8o%2BIr%2F4T37CLJA%2BFTeizW41GZnlJ1sXt0gvGeosVihH5c0UQhHPFIJorjlXiwrKBBcU%2BE0ihnUXA2GWPzaCiLRniLewu9DrMP2NL%2FsZGgeWUSOaVuAeDLONzU6bZmSXd7ZXe11JFv9J4jcZJRvOX7WXEluXxoxsVytE0UxIGQXpDDWtvLDBjqkAXc7BfG%2Fc4%2Boh5L%2FKyDdJWm8g5E%2B1Dr76vdDpX3kohUYyjAs%2FMr%2B%2FZf0kX%2BvMH6KtN8eQYf13n9tObEYGAtG426lNVV%2FDR1kjRzrTrBBdOqLbyJln8p6eATZlOYleOpK35eDEptLtvaoTNYptT69LddYrjBWzfje5Q7PbapuH0wI52xb3o%2FclcZIecTtZ5NwIUdEvN4ltSgH0TW6sB9LmYdu2ECu&X-Amz-Signature=62e0c442c331c0c34cfe83fd9142d1a0589c47aac9a89311da1bbb2fe74559db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CEWZAJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5BH1lISx5NrbheDpMucHETxe95CLtuEDuSV5sObcJAIhALH0uZ2iOT7aTH6n3FuvbDeKjBfISnzfbxd3ECOXwW2FKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpJ0oLcZR12YZ%2FJ0Aq3AOPLuToZ5X%2FuwJUIMPb9HgOitjFFylsYqxh9VSZzJZEaQm9dNBVgPiPQZTvMwE%2B1Ir4tDr%2BecA1zm2zYVNTPgdBj2TPeJr8nc23RN9CNsGjSaQ04gaUXMYPZM1RLrmcPt4w9Nb%2FtsYQxDTKDKA0I2qvs3w3P1UnJku8kH0zSTp3mEohElU%2BKgv%2FJAyF3hp21NO8hb7s6aYPpO3lYkrc5Nq2QUF%2F0aU6%2FadTqFQc7EH8Vgr9HwOqyPoVOZpnyl9MLtUpLAT87S9LNYCBkF5POgfBr4Z9nDzdi85kP4%2FNHe3OqunJyhmBUhpvLLuclVtOLkr6PdljwLvlIoGGLccOjLSyUS%2BJRSrIhLUtCxxysdihetL3VS%2FrYiJ1xItxl9cZQn3041Mcx0Y%2BxMLLcrtkwK7tkTPsdF92l%2Fmd%2BzNLIvJmzLgAUN5Z%2FhuA6QFDF47oiEzU7doLV6z2N96iEd8o%2BIr%2F4T37CLJA%2BFTeizW41GZnlJ1sXt0gvGeosVihH5c0UQhHPFIJorjlXiwrKBBcU%2BE0ihnUXA2GWPzaCiLRniLewu9DrMP2NL%2FsZGgeWUSOaVuAeDLONzU6bZmSXd7ZXe11JFv9J4jcZJRvOX7WXEluXxoxsVytE0UxIGQXpDDWtvLDBjqkAXc7BfG%2Fc4%2Boh5L%2FKyDdJWm8g5E%2B1Dr76vdDpX3kohUYyjAs%2FMr%2B%2FZf0kX%2BvMH6KtN8eQYf13n9tObEYGAtG426lNVV%2FDR1kjRzrTrBBdOqLbyJln8p6eATZlOYleOpK35eDEptLtvaoTNYptT69LddYrjBWzfje5Q7PbapuH0wI52xb3o%2FclcZIecTtZ5NwIUdEvN4ltSgH0TW6sB9LmYdu2ECu&X-Amz-Signature=eed5d0fa8f27a075e374a3d8b441efd2c2f118ccade17ab701e98faa7bee90f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CEWZAJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5BH1lISx5NrbheDpMucHETxe95CLtuEDuSV5sObcJAIhALH0uZ2iOT7aTH6n3FuvbDeKjBfISnzfbxd3ECOXwW2FKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpJ0oLcZR12YZ%2FJ0Aq3AOPLuToZ5X%2FuwJUIMPb9HgOitjFFylsYqxh9VSZzJZEaQm9dNBVgPiPQZTvMwE%2B1Ir4tDr%2BecA1zm2zYVNTPgdBj2TPeJr8nc23RN9CNsGjSaQ04gaUXMYPZM1RLrmcPt4w9Nb%2FtsYQxDTKDKA0I2qvs3w3P1UnJku8kH0zSTp3mEohElU%2BKgv%2FJAyF3hp21NO8hb7s6aYPpO3lYkrc5Nq2QUF%2F0aU6%2FadTqFQc7EH8Vgr9HwOqyPoVOZpnyl9MLtUpLAT87S9LNYCBkF5POgfBr4Z9nDzdi85kP4%2FNHe3OqunJyhmBUhpvLLuclVtOLkr6PdljwLvlIoGGLccOjLSyUS%2BJRSrIhLUtCxxysdihetL3VS%2FrYiJ1xItxl9cZQn3041Mcx0Y%2BxMLLcrtkwK7tkTPsdF92l%2Fmd%2BzNLIvJmzLgAUN5Z%2FhuA6QFDF47oiEzU7doLV6z2N96iEd8o%2BIr%2F4T37CLJA%2BFTeizW41GZnlJ1sXt0gvGeosVihH5c0UQhHPFIJorjlXiwrKBBcU%2BE0ihnUXA2GWPzaCiLRniLewu9DrMP2NL%2FsZGgeWUSOaVuAeDLONzU6bZmSXd7ZXe11JFv9J4jcZJRvOX7WXEluXxoxsVytE0UxIGQXpDDWtvLDBjqkAXc7BfG%2Fc4%2Boh5L%2FKyDdJWm8g5E%2B1Dr76vdDpX3kohUYyjAs%2FMr%2B%2FZf0kX%2BvMH6KtN8eQYf13n9tObEYGAtG426lNVV%2FDR1kjRzrTrBBdOqLbyJln8p6eATZlOYleOpK35eDEptLtvaoTNYptT69LddYrjBWzfje5Q7PbapuH0wI52xb3o%2FclcZIecTtZ5NwIUdEvN4ltSgH0TW6sB9LmYdu2ECu&X-Amz-Signature=34a98d3835c3ec8d0e1af2fd36a49242768fb90d741162e7f1348c46b39b5f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644CEWZAJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy5BH1lISx5NrbheDpMucHETxe95CLtuEDuSV5sObcJAIhALH0uZ2iOT7aTH6n3FuvbDeKjBfISnzfbxd3ECOXwW2FKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpJ0oLcZR12YZ%2FJ0Aq3AOPLuToZ5X%2FuwJUIMPb9HgOitjFFylsYqxh9VSZzJZEaQm9dNBVgPiPQZTvMwE%2B1Ir4tDr%2BecA1zm2zYVNTPgdBj2TPeJr8nc23RN9CNsGjSaQ04gaUXMYPZM1RLrmcPt4w9Nb%2FtsYQxDTKDKA0I2qvs3w3P1UnJku8kH0zSTp3mEohElU%2BKgv%2FJAyF3hp21NO8hb7s6aYPpO3lYkrc5Nq2QUF%2F0aU6%2FadTqFQc7EH8Vgr9HwOqyPoVOZpnyl9MLtUpLAT87S9LNYCBkF5POgfBr4Z9nDzdi85kP4%2FNHe3OqunJyhmBUhpvLLuclVtOLkr6PdljwLvlIoGGLccOjLSyUS%2BJRSrIhLUtCxxysdihetL3VS%2FrYiJ1xItxl9cZQn3041Mcx0Y%2BxMLLcrtkwK7tkTPsdF92l%2Fmd%2BzNLIvJmzLgAUN5Z%2FhuA6QFDF47oiEzU7doLV6z2N96iEd8o%2BIr%2F4T37CLJA%2BFTeizW41GZnlJ1sXt0gvGeosVihH5c0UQhHPFIJorjlXiwrKBBcU%2BE0ihnUXA2GWPzaCiLRniLewu9DrMP2NL%2FsZGgeWUSOaVuAeDLONzU6bZmSXd7ZXe11JFv9J4jcZJRvOX7WXEluXxoxsVytE0UxIGQXpDDWtvLDBjqkAXc7BfG%2Fc4%2Boh5L%2FKyDdJWm8g5E%2B1Dr76vdDpX3kohUYyjAs%2FMr%2B%2FZf0kX%2BvMH6KtN8eQYf13n9tObEYGAtG426lNVV%2FDR1kjRzrTrBBdOqLbyJln8p6eATZlOYleOpK35eDEptLtvaoTNYptT69LddYrjBWzfje5Q7PbapuH0wI52xb3o%2FclcZIecTtZ5NwIUdEvN4ltSgH0TW6sB9LmYdu2ECu&X-Amz-Signature=72e70a865c4a972d075f4e51002bd5cb768e9dc45ff46895618207d986f211fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
