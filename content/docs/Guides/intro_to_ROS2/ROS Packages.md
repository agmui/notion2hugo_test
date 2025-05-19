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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6AMPHG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkQ6Wu6hbe7sLriV%2BNqHJWxNmRhTPjBGbA5hwXRuh9YAiBir5npHfXjFReaoSICCM7F2k%2FtvjATxHSjDsl18t4llyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6t4HVLyagB6MJ1CYKtwDlXbZk5r2XXFjRJm1Zp5LWqA7nyL3jZ8%2FVTYF8G75MHAPK2oNXTNP4DL1EujddMW64%2BHic9a%2FMhYchRZty3AX7CCu7GBuZuf7cQjSiYlDFeiEskZex3624G%2Fzkq4gmG4TP7724uLc8HuCho6%2BZWZQw0bMNsdqHFSx0ZG0CEteEAxgC72BLI8OoSOsXHjbE4LMEQ6NG4m8NrpLw1GLrGy3V46n3sL6JCeA0xXtSSvyhyuJUfNy9Ggr0o9vWRYe970owZJzfJPZBE%2Bqe8Z3qKeSK2Ft5q%2BXS0ENZm0HTqei3N5%2BxP1sNuDrGjVbEMj2Om%2FJAwMVz8aK7%2BT%2B7q5NpSIaaJNZIUBbA70P3TExVXtFIYLNpRdIpY2iEhW46utvGvNv%2BIoFHTojwJ%2BVvsetd1gM4%2FDrS4NVWqer41nNlu%2FCYSwsJ%2FjtCyCwo%2BTj%2Bcff0c5id1Daa9xtxkdTnipnpjfgXpSTNhSmLc4N0a3sPFAvX1N%2FrIr%2Bc4ybCTER54SMv1abJQwtBBqEJgojteNS5qcXJuVbmvLmiTjhRjcjWyVsxehT1lMC0wweRKr%2FDkKVQW3V6Ar%2Bhh%2FGLSGqSjNhGZBr5E6y9n0YYPKrMn99VysRMOWlxEcbWEzFAqUBqWUwpp%2BrwQY6pgGxDrOxEHxVppesrd61jgcx2d4KQuX1Lhlt9dHG4N75%2FKM8%2FZterdHjk3nByLrFhjpmXvQvjIT7ExwhQuWUeTIckhylVdQ%2BHM9nJScn56H7WN8YoFvkaceUqCx3UOY9wtslkrjw6pry7CVV82RPgrNzYGHVxuj3C32O5Hiva0EtgQtRt1r9bBRJmV%2FROOlBquxc4HTpFVaEi2enaGabEfrzowBfXQe0&X-Amz-Signature=dda5c068087f9c18138cb389cb33516eb589ef4689b146fd654683f06488e66a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6AMPHG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkQ6Wu6hbe7sLriV%2BNqHJWxNmRhTPjBGbA5hwXRuh9YAiBir5npHfXjFReaoSICCM7F2k%2FtvjATxHSjDsl18t4llyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6t4HVLyagB6MJ1CYKtwDlXbZk5r2XXFjRJm1Zp5LWqA7nyL3jZ8%2FVTYF8G75MHAPK2oNXTNP4DL1EujddMW64%2BHic9a%2FMhYchRZty3AX7CCu7GBuZuf7cQjSiYlDFeiEskZex3624G%2Fzkq4gmG4TP7724uLc8HuCho6%2BZWZQw0bMNsdqHFSx0ZG0CEteEAxgC72BLI8OoSOsXHjbE4LMEQ6NG4m8NrpLw1GLrGy3V46n3sL6JCeA0xXtSSvyhyuJUfNy9Ggr0o9vWRYe970owZJzfJPZBE%2Bqe8Z3qKeSK2Ft5q%2BXS0ENZm0HTqei3N5%2BxP1sNuDrGjVbEMj2Om%2FJAwMVz8aK7%2BT%2B7q5NpSIaaJNZIUBbA70P3TExVXtFIYLNpRdIpY2iEhW46utvGvNv%2BIoFHTojwJ%2BVvsetd1gM4%2FDrS4NVWqer41nNlu%2FCYSwsJ%2FjtCyCwo%2BTj%2Bcff0c5id1Daa9xtxkdTnipnpjfgXpSTNhSmLc4N0a3sPFAvX1N%2FrIr%2Bc4ybCTER54SMv1abJQwtBBqEJgojteNS5qcXJuVbmvLmiTjhRjcjWyVsxehT1lMC0wweRKr%2FDkKVQW3V6Ar%2Bhh%2FGLSGqSjNhGZBr5E6y9n0YYPKrMn99VysRMOWlxEcbWEzFAqUBqWUwpp%2BrwQY6pgGxDrOxEHxVppesrd61jgcx2d4KQuX1Lhlt9dHG4N75%2FKM8%2FZterdHjk3nByLrFhjpmXvQvjIT7ExwhQuWUeTIckhylVdQ%2BHM9nJScn56H7WN8YoFvkaceUqCx3UOY9wtslkrjw6pry7CVV82RPgrNzYGHVxuj3C32O5Hiva0EtgQtRt1r9bBRJmV%2FROOlBquxc4HTpFVaEi2enaGabEfrzowBfXQe0&X-Amz-Signature=b545e8044224c364b7bdb4d2b6d86ae9aa62528c8bad3908c1e80b1feab0e5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6AMPHG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkQ6Wu6hbe7sLriV%2BNqHJWxNmRhTPjBGbA5hwXRuh9YAiBir5npHfXjFReaoSICCM7F2k%2FtvjATxHSjDsl18t4llyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6t4HVLyagB6MJ1CYKtwDlXbZk5r2XXFjRJm1Zp5LWqA7nyL3jZ8%2FVTYF8G75MHAPK2oNXTNP4DL1EujddMW64%2BHic9a%2FMhYchRZty3AX7CCu7GBuZuf7cQjSiYlDFeiEskZex3624G%2Fzkq4gmG4TP7724uLc8HuCho6%2BZWZQw0bMNsdqHFSx0ZG0CEteEAxgC72BLI8OoSOsXHjbE4LMEQ6NG4m8NrpLw1GLrGy3V46n3sL6JCeA0xXtSSvyhyuJUfNy9Ggr0o9vWRYe970owZJzfJPZBE%2Bqe8Z3qKeSK2Ft5q%2BXS0ENZm0HTqei3N5%2BxP1sNuDrGjVbEMj2Om%2FJAwMVz8aK7%2BT%2B7q5NpSIaaJNZIUBbA70P3TExVXtFIYLNpRdIpY2iEhW46utvGvNv%2BIoFHTojwJ%2BVvsetd1gM4%2FDrS4NVWqer41nNlu%2FCYSwsJ%2FjtCyCwo%2BTj%2Bcff0c5id1Daa9xtxkdTnipnpjfgXpSTNhSmLc4N0a3sPFAvX1N%2FrIr%2Bc4ybCTER54SMv1abJQwtBBqEJgojteNS5qcXJuVbmvLmiTjhRjcjWyVsxehT1lMC0wweRKr%2FDkKVQW3V6Ar%2Bhh%2FGLSGqSjNhGZBr5E6y9n0YYPKrMn99VysRMOWlxEcbWEzFAqUBqWUwpp%2BrwQY6pgGxDrOxEHxVppesrd61jgcx2d4KQuX1Lhlt9dHG4N75%2FKM8%2FZterdHjk3nByLrFhjpmXvQvjIT7ExwhQuWUeTIckhylVdQ%2BHM9nJScn56H7WN8YoFvkaceUqCx3UOY9wtslkrjw6pry7CVV82RPgrNzYGHVxuj3C32O5Hiva0EtgQtRt1r9bBRJmV%2FROOlBquxc4HTpFVaEi2enaGabEfrzowBfXQe0&X-Amz-Signature=66236ad6babc15d62fbb86b5db2f6f62c46faea184675f20d03d03390d63f99b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6AMPHG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkQ6Wu6hbe7sLriV%2BNqHJWxNmRhTPjBGbA5hwXRuh9YAiBir5npHfXjFReaoSICCM7F2k%2FtvjATxHSjDsl18t4llyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6t4HVLyagB6MJ1CYKtwDlXbZk5r2XXFjRJm1Zp5LWqA7nyL3jZ8%2FVTYF8G75MHAPK2oNXTNP4DL1EujddMW64%2BHic9a%2FMhYchRZty3AX7CCu7GBuZuf7cQjSiYlDFeiEskZex3624G%2Fzkq4gmG4TP7724uLc8HuCho6%2BZWZQw0bMNsdqHFSx0ZG0CEteEAxgC72BLI8OoSOsXHjbE4LMEQ6NG4m8NrpLw1GLrGy3V46n3sL6JCeA0xXtSSvyhyuJUfNy9Ggr0o9vWRYe970owZJzfJPZBE%2Bqe8Z3qKeSK2Ft5q%2BXS0ENZm0HTqei3N5%2BxP1sNuDrGjVbEMj2Om%2FJAwMVz8aK7%2BT%2B7q5NpSIaaJNZIUBbA70P3TExVXtFIYLNpRdIpY2iEhW46utvGvNv%2BIoFHTojwJ%2BVvsetd1gM4%2FDrS4NVWqer41nNlu%2FCYSwsJ%2FjtCyCwo%2BTj%2Bcff0c5id1Daa9xtxkdTnipnpjfgXpSTNhSmLc4N0a3sPFAvX1N%2FrIr%2Bc4ybCTER54SMv1abJQwtBBqEJgojteNS5qcXJuVbmvLmiTjhRjcjWyVsxehT1lMC0wweRKr%2FDkKVQW3V6Ar%2Bhh%2FGLSGqSjNhGZBr5E6y9n0YYPKrMn99VysRMOWlxEcbWEzFAqUBqWUwpp%2BrwQY6pgGxDrOxEHxVppesrd61jgcx2d4KQuX1Lhlt9dHG4N75%2FKM8%2FZterdHjk3nByLrFhjpmXvQvjIT7ExwhQuWUeTIckhylVdQ%2BHM9nJScn56H7WN8YoFvkaceUqCx3UOY9wtslkrjw6pry7CVV82RPgrNzYGHVxuj3C32O5Hiva0EtgQtRt1r9bBRJmV%2FROOlBquxc4HTpFVaEi2enaGabEfrzowBfXQe0&X-Amz-Signature=4a967b4a79c83ae0d01aa46be29e275b6415a68be8510dafe17896992fd9cf38&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6AMPHG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkQ6Wu6hbe7sLriV%2BNqHJWxNmRhTPjBGbA5hwXRuh9YAiBir5npHfXjFReaoSICCM7F2k%2FtvjATxHSjDsl18t4llyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6t4HVLyagB6MJ1CYKtwDlXbZk5r2XXFjRJm1Zp5LWqA7nyL3jZ8%2FVTYF8G75MHAPK2oNXTNP4DL1EujddMW64%2BHic9a%2FMhYchRZty3AX7CCu7GBuZuf7cQjSiYlDFeiEskZex3624G%2Fzkq4gmG4TP7724uLc8HuCho6%2BZWZQw0bMNsdqHFSx0ZG0CEteEAxgC72BLI8OoSOsXHjbE4LMEQ6NG4m8NrpLw1GLrGy3V46n3sL6JCeA0xXtSSvyhyuJUfNy9Ggr0o9vWRYe970owZJzfJPZBE%2Bqe8Z3qKeSK2Ft5q%2BXS0ENZm0HTqei3N5%2BxP1sNuDrGjVbEMj2Om%2FJAwMVz8aK7%2BT%2B7q5NpSIaaJNZIUBbA70P3TExVXtFIYLNpRdIpY2iEhW46utvGvNv%2BIoFHTojwJ%2BVvsetd1gM4%2FDrS4NVWqer41nNlu%2FCYSwsJ%2FjtCyCwo%2BTj%2Bcff0c5id1Daa9xtxkdTnipnpjfgXpSTNhSmLc4N0a3sPFAvX1N%2FrIr%2Bc4ybCTER54SMv1abJQwtBBqEJgojteNS5qcXJuVbmvLmiTjhRjcjWyVsxehT1lMC0wweRKr%2FDkKVQW3V6Ar%2Bhh%2FGLSGqSjNhGZBr5E6y9n0YYPKrMn99VysRMOWlxEcbWEzFAqUBqWUwpp%2BrwQY6pgGxDrOxEHxVppesrd61jgcx2d4KQuX1Lhlt9dHG4N75%2FKM8%2FZterdHjk3nByLrFhjpmXvQvjIT7ExwhQuWUeTIckhylVdQ%2BHM9nJScn56H7WN8YoFvkaceUqCx3UOY9wtslkrjw6pry7CVV82RPgrNzYGHVxuj3C32O5Hiva0EtgQtRt1r9bBRJmV%2FROOlBquxc4HTpFVaEi2enaGabEfrzowBfXQe0&X-Amz-Signature=fe3e64d34b52b90b407074e49065cac3110534852ee3863b86bb459cc1d470e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6AMPHG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkQ6Wu6hbe7sLriV%2BNqHJWxNmRhTPjBGbA5hwXRuh9YAiBir5npHfXjFReaoSICCM7F2k%2FtvjATxHSjDsl18t4llyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6t4HVLyagB6MJ1CYKtwDlXbZk5r2XXFjRJm1Zp5LWqA7nyL3jZ8%2FVTYF8G75MHAPK2oNXTNP4DL1EujddMW64%2BHic9a%2FMhYchRZty3AX7CCu7GBuZuf7cQjSiYlDFeiEskZex3624G%2Fzkq4gmG4TP7724uLc8HuCho6%2BZWZQw0bMNsdqHFSx0ZG0CEteEAxgC72BLI8OoSOsXHjbE4LMEQ6NG4m8NrpLw1GLrGy3V46n3sL6JCeA0xXtSSvyhyuJUfNy9Ggr0o9vWRYe970owZJzfJPZBE%2Bqe8Z3qKeSK2Ft5q%2BXS0ENZm0HTqei3N5%2BxP1sNuDrGjVbEMj2Om%2FJAwMVz8aK7%2BT%2B7q5NpSIaaJNZIUBbA70P3TExVXtFIYLNpRdIpY2iEhW46utvGvNv%2BIoFHTojwJ%2BVvsetd1gM4%2FDrS4NVWqer41nNlu%2FCYSwsJ%2FjtCyCwo%2BTj%2Bcff0c5id1Daa9xtxkdTnipnpjfgXpSTNhSmLc4N0a3sPFAvX1N%2FrIr%2Bc4ybCTER54SMv1abJQwtBBqEJgojteNS5qcXJuVbmvLmiTjhRjcjWyVsxehT1lMC0wweRKr%2FDkKVQW3V6Ar%2Bhh%2FGLSGqSjNhGZBr5E6y9n0YYPKrMn99VysRMOWlxEcbWEzFAqUBqWUwpp%2BrwQY6pgGxDrOxEHxVppesrd61jgcx2d4KQuX1Lhlt9dHG4N75%2FKM8%2FZterdHjk3nByLrFhjpmXvQvjIT7ExwhQuWUeTIckhylVdQ%2BHM9nJScn56H7WN8YoFvkaceUqCx3UOY9wtslkrjw6pry7CVV82RPgrNzYGHVxuj3C32O5Hiva0EtgQtRt1r9bBRJmV%2FROOlBquxc4HTpFVaEi2enaGabEfrzowBfXQe0&X-Amz-Signature=d23bfaf0019bda15ac1fac0a3dcca55d762602c2b3a7b7c94c772a041a90ead8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6AMPHG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkQ6Wu6hbe7sLriV%2BNqHJWxNmRhTPjBGbA5hwXRuh9YAiBir5npHfXjFReaoSICCM7F2k%2FtvjATxHSjDsl18t4llyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6t4HVLyagB6MJ1CYKtwDlXbZk5r2XXFjRJm1Zp5LWqA7nyL3jZ8%2FVTYF8G75MHAPK2oNXTNP4DL1EujddMW64%2BHic9a%2FMhYchRZty3AX7CCu7GBuZuf7cQjSiYlDFeiEskZex3624G%2Fzkq4gmG4TP7724uLc8HuCho6%2BZWZQw0bMNsdqHFSx0ZG0CEteEAxgC72BLI8OoSOsXHjbE4LMEQ6NG4m8NrpLw1GLrGy3V46n3sL6JCeA0xXtSSvyhyuJUfNy9Ggr0o9vWRYe970owZJzfJPZBE%2Bqe8Z3qKeSK2Ft5q%2BXS0ENZm0HTqei3N5%2BxP1sNuDrGjVbEMj2Om%2FJAwMVz8aK7%2BT%2B7q5NpSIaaJNZIUBbA70P3TExVXtFIYLNpRdIpY2iEhW46utvGvNv%2BIoFHTojwJ%2BVvsetd1gM4%2FDrS4NVWqer41nNlu%2FCYSwsJ%2FjtCyCwo%2BTj%2Bcff0c5id1Daa9xtxkdTnipnpjfgXpSTNhSmLc4N0a3sPFAvX1N%2FrIr%2Bc4ybCTER54SMv1abJQwtBBqEJgojteNS5qcXJuVbmvLmiTjhRjcjWyVsxehT1lMC0wweRKr%2FDkKVQW3V6Ar%2Bhh%2FGLSGqSjNhGZBr5E6y9n0YYPKrMn99VysRMOWlxEcbWEzFAqUBqWUwpp%2BrwQY6pgGxDrOxEHxVppesrd61jgcx2d4KQuX1Lhlt9dHG4N75%2FKM8%2FZterdHjk3nByLrFhjpmXvQvjIT7ExwhQuWUeTIckhylVdQ%2BHM9nJScn56H7WN8YoFvkaceUqCx3UOY9wtslkrjw6pry7CVV82RPgrNzYGHVxuj3C32O5Hiva0EtgQtRt1r9bBRJmV%2FROOlBquxc4HTpFVaEi2enaGabEfrzowBfXQe0&X-Amz-Signature=1718e0b995b324c22787f612868ccae52f07799c7d3ad1fa90239a4f302d73d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
