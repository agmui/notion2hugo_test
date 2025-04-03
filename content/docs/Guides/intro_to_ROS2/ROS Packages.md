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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNW6DG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2EPgTaX0rUmW1Z%2FyJFQ%2FBbWl9Ks0lX%2FCTkrQQAe9YyQIhALp0jnmZF8hYJ1DqBslp3%2FjL3IZou34jt9%2FM3a%2BHEwkcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlzzylsPxzEYbaIq3ANsfS7GyET%2FBbFJZeLO9wYls4d8JNJpbCzuYlB5Pi49q5ecP8chCRcM%2FTt70aGEVuCU0csGgEjby%2B9thb8u4iEOfFjsxRAqBDtWqKc1IJ0ksycoOUtONAU2m63cbkTg1sUlONkag7VbC27nh93JRmE4wZRk%2BlAEBm8VN%2F5eh8IAeuKcEzL9tmal84s8ndPv1wg7IccXJStZ6lZ%2FzT72bpZ%2BzyySilsBQv5LnoLiJ0nJ4tphA16UBXnR2CfPJfgm0rPV6TZUXjea5pyJqxIrFmRhTwZTPy40Pa%2F8Qh4t1eX8Zly5r8alze8aOR431nCZrTNp0PUAl3CcjfncpkmxeWZiTj9Lpi%2BioyIk5F9lJKkfwwUjUGwC%2FxVSINk6gUQuq5LRw6qFO96cwX%2BcI0iahudC86c%2FS9zk5Bp09PJfIAl7IdnG3z7TznzUbyYSMHPKnTXaQ%2FbLiK96n4zSN2bukSDGXdren0Qb%2B9ndfGJnHD5hOnvR5750cnti3aHkNsG0K8IkfbYapm9M1cfOLwk6AFG9geqN3qPeq7rM2R%2FpEB7ZEXs3Vezl4ieKxMLexCKyPNJ34Cx6m8xc9I7P0iprLAnJ7z8XRhgeAVu5X%2BufRGWLmcMOaOYBtnnVrrLtbTCF6Lq%2FBjqkAc8o59WPSJoGzpkmvm7qUuALJ5t6Mz3r3QcpVtMj4shvNtnKTt8F3miYdPNBB%2BOrT4tnt98fC0ZkKao8Wzz%2F3ncnavQ%2FYcn7%2FFHSyfDzL6W69bINb8wCRkPCmU6mECj%2BL7YeisRrbq0jAl%2BHUdcsSY53b6SrILZO8DN9Ngdlr0RTJ1S414nZg9rBnkWovuh0iz5RWr4sW2m4W%2BOvcwIrf2MVb7kw&X-Amz-Signature=b241332fa52201dcd3b7f1083f8c1ba4387ec217ef9bbc5db4522c06229d4ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNW6DG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2EPgTaX0rUmW1Z%2FyJFQ%2FBbWl9Ks0lX%2FCTkrQQAe9YyQIhALp0jnmZF8hYJ1DqBslp3%2FjL3IZou34jt9%2FM3a%2BHEwkcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlzzylsPxzEYbaIq3ANsfS7GyET%2FBbFJZeLO9wYls4d8JNJpbCzuYlB5Pi49q5ecP8chCRcM%2FTt70aGEVuCU0csGgEjby%2B9thb8u4iEOfFjsxRAqBDtWqKc1IJ0ksycoOUtONAU2m63cbkTg1sUlONkag7VbC27nh93JRmE4wZRk%2BlAEBm8VN%2F5eh8IAeuKcEzL9tmal84s8ndPv1wg7IccXJStZ6lZ%2FzT72bpZ%2BzyySilsBQv5LnoLiJ0nJ4tphA16UBXnR2CfPJfgm0rPV6TZUXjea5pyJqxIrFmRhTwZTPy40Pa%2F8Qh4t1eX8Zly5r8alze8aOR431nCZrTNp0PUAl3CcjfncpkmxeWZiTj9Lpi%2BioyIk5F9lJKkfwwUjUGwC%2FxVSINk6gUQuq5LRw6qFO96cwX%2BcI0iahudC86c%2FS9zk5Bp09PJfIAl7IdnG3z7TznzUbyYSMHPKnTXaQ%2FbLiK96n4zSN2bukSDGXdren0Qb%2B9ndfGJnHD5hOnvR5750cnti3aHkNsG0K8IkfbYapm9M1cfOLwk6AFG9geqN3qPeq7rM2R%2FpEB7ZEXs3Vezl4ieKxMLexCKyPNJ34Cx6m8xc9I7P0iprLAnJ7z8XRhgeAVu5X%2BufRGWLmcMOaOYBtnnVrrLtbTCF6Lq%2FBjqkAc8o59WPSJoGzpkmvm7qUuALJ5t6Mz3r3QcpVtMj4shvNtnKTt8F3miYdPNBB%2BOrT4tnt98fC0ZkKao8Wzz%2F3ncnavQ%2FYcn7%2FFHSyfDzL6W69bINb8wCRkPCmU6mECj%2BL7YeisRrbq0jAl%2BHUdcsSY53b6SrILZO8DN9Ngdlr0RTJ1S414nZg9rBnkWovuh0iz5RWr4sW2m4W%2BOvcwIrf2MVb7kw&X-Amz-Signature=9f74fdf0ed2eb01e01e36adc41ebc762e4055d960c77b1f174c1a6838eb2c748&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNW6DG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2EPgTaX0rUmW1Z%2FyJFQ%2FBbWl9Ks0lX%2FCTkrQQAe9YyQIhALp0jnmZF8hYJ1DqBslp3%2FjL3IZou34jt9%2FM3a%2BHEwkcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlzzylsPxzEYbaIq3ANsfS7GyET%2FBbFJZeLO9wYls4d8JNJpbCzuYlB5Pi49q5ecP8chCRcM%2FTt70aGEVuCU0csGgEjby%2B9thb8u4iEOfFjsxRAqBDtWqKc1IJ0ksycoOUtONAU2m63cbkTg1sUlONkag7VbC27nh93JRmE4wZRk%2BlAEBm8VN%2F5eh8IAeuKcEzL9tmal84s8ndPv1wg7IccXJStZ6lZ%2FzT72bpZ%2BzyySilsBQv5LnoLiJ0nJ4tphA16UBXnR2CfPJfgm0rPV6TZUXjea5pyJqxIrFmRhTwZTPy40Pa%2F8Qh4t1eX8Zly5r8alze8aOR431nCZrTNp0PUAl3CcjfncpkmxeWZiTj9Lpi%2BioyIk5F9lJKkfwwUjUGwC%2FxVSINk6gUQuq5LRw6qFO96cwX%2BcI0iahudC86c%2FS9zk5Bp09PJfIAl7IdnG3z7TznzUbyYSMHPKnTXaQ%2FbLiK96n4zSN2bukSDGXdren0Qb%2B9ndfGJnHD5hOnvR5750cnti3aHkNsG0K8IkfbYapm9M1cfOLwk6AFG9geqN3qPeq7rM2R%2FpEB7ZEXs3Vezl4ieKxMLexCKyPNJ34Cx6m8xc9I7P0iprLAnJ7z8XRhgeAVu5X%2BufRGWLmcMOaOYBtnnVrrLtbTCF6Lq%2FBjqkAc8o59WPSJoGzpkmvm7qUuALJ5t6Mz3r3QcpVtMj4shvNtnKTt8F3miYdPNBB%2BOrT4tnt98fC0ZkKao8Wzz%2F3ncnavQ%2FYcn7%2FFHSyfDzL6W69bINb8wCRkPCmU6mECj%2BL7YeisRrbq0jAl%2BHUdcsSY53b6SrILZO8DN9Ngdlr0RTJ1S414nZg9rBnkWovuh0iz5RWr4sW2m4W%2BOvcwIrf2MVb7kw&X-Amz-Signature=ed28095ce01ebeb2b872d162fc6192340a7e33ddb8e22f18cb09991e5810a28c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNW6DG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2EPgTaX0rUmW1Z%2FyJFQ%2FBbWl9Ks0lX%2FCTkrQQAe9YyQIhALp0jnmZF8hYJ1DqBslp3%2FjL3IZou34jt9%2FM3a%2BHEwkcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlzzylsPxzEYbaIq3ANsfS7GyET%2FBbFJZeLO9wYls4d8JNJpbCzuYlB5Pi49q5ecP8chCRcM%2FTt70aGEVuCU0csGgEjby%2B9thb8u4iEOfFjsxRAqBDtWqKc1IJ0ksycoOUtONAU2m63cbkTg1sUlONkag7VbC27nh93JRmE4wZRk%2BlAEBm8VN%2F5eh8IAeuKcEzL9tmal84s8ndPv1wg7IccXJStZ6lZ%2FzT72bpZ%2BzyySilsBQv5LnoLiJ0nJ4tphA16UBXnR2CfPJfgm0rPV6TZUXjea5pyJqxIrFmRhTwZTPy40Pa%2F8Qh4t1eX8Zly5r8alze8aOR431nCZrTNp0PUAl3CcjfncpkmxeWZiTj9Lpi%2BioyIk5F9lJKkfwwUjUGwC%2FxVSINk6gUQuq5LRw6qFO96cwX%2BcI0iahudC86c%2FS9zk5Bp09PJfIAl7IdnG3z7TznzUbyYSMHPKnTXaQ%2FbLiK96n4zSN2bukSDGXdren0Qb%2B9ndfGJnHD5hOnvR5750cnti3aHkNsG0K8IkfbYapm9M1cfOLwk6AFG9geqN3qPeq7rM2R%2FpEB7ZEXs3Vezl4ieKxMLexCKyPNJ34Cx6m8xc9I7P0iprLAnJ7z8XRhgeAVu5X%2BufRGWLmcMOaOYBtnnVrrLtbTCF6Lq%2FBjqkAc8o59WPSJoGzpkmvm7qUuALJ5t6Mz3r3QcpVtMj4shvNtnKTt8F3miYdPNBB%2BOrT4tnt98fC0ZkKao8Wzz%2F3ncnavQ%2FYcn7%2FFHSyfDzL6W69bINb8wCRkPCmU6mECj%2BL7YeisRrbq0jAl%2BHUdcsSY53b6SrILZO8DN9Ngdlr0RTJ1S414nZg9rBnkWovuh0iz5RWr4sW2m4W%2BOvcwIrf2MVb7kw&X-Amz-Signature=7eca7e09d43f208cff8e7a7f218ae062c73b4657e677ed0c19bc1a32e6dadcec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNW6DG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2EPgTaX0rUmW1Z%2FyJFQ%2FBbWl9Ks0lX%2FCTkrQQAe9YyQIhALp0jnmZF8hYJ1DqBslp3%2FjL3IZou34jt9%2FM3a%2BHEwkcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlzzylsPxzEYbaIq3ANsfS7GyET%2FBbFJZeLO9wYls4d8JNJpbCzuYlB5Pi49q5ecP8chCRcM%2FTt70aGEVuCU0csGgEjby%2B9thb8u4iEOfFjsxRAqBDtWqKc1IJ0ksycoOUtONAU2m63cbkTg1sUlONkag7VbC27nh93JRmE4wZRk%2BlAEBm8VN%2F5eh8IAeuKcEzL9tmal84s8ndPv1wg7IccXJStZ6lZ%2FzT72bpZ%2BzyySilsBQv5LnoLiJ0nJ4tphA16UBXnR2CfPJfgm0rPV6TZUXjea5pyJqxIrFmRhTwZTPy40Pa%2F8Qh4t1eX8Zly5r8alze8aOR431nCZrTNp0PUAl3CcjfncpkmxeWZiTj9Lpi%2BioyIk5F9lJKkfwwUjUGwC%2FxVSINk6gUQuq5LRw6qFO96cwX%2BcI0iahudC86c%2FS9zk5Bp09PJfIAl7IdnG3z7TznzUbyYSMHPKnTXaQ%2FbLiK96n4zSN2bukSDGXdren0Qb%2B9ndfGJnHD5hOnvR5750cnti3aHkNsG0K8IkfbYapm9M1cfOLwk6AFG9geqN3qPeq7rM2R%2FpEB7ZEXs3Vezl4ieKxMLexCKyPNJ34Cx6m8xc9I7P0iprLAnJ7z8XRhgeAVu5X%2BufRGWLmcMOaOYBtnnVrrLtbTCF6Lq%2FBjqkAc8o59WPSJoGzpkmvm7qUuALJ5t6Mz3r3QcpVtMj4shvNtnKTt8F3miYdPNBB%2BOrT4tnt98fC0ZkKao8Wzz%2F3ncnavQ%2FYcn7%2FFHSyfDzL6W69bINb8wCRkPCmU6mECj%2BL7YeisRrbq0jAl%2BHUdcsSY53b6SrILZO8DN9Ngdlr0RTJ1S414nZg9rBnkWovuh0iz5RWr4sW2m4W%2BOvcwIrf2MVb7kw&X-Amz-Signature=6a6649725d0fc4e951bcac05aa2462180077037872841770b29a7f357372c029&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNW6DG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2EPgTaX0rUmW1Z%2FyJFQ%2FBbWl9Ks0lX%2FCTkrQQAe9YyQIhALp0jnmZF8hYJ1DqBslp3%2FjL3IZou34jt9%2FM3a%2BHEwkcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlzzylsPxzEYbaIq3ANsfS7GyET%2FBbFJZeLO9wYls4d8JNJpbCzuYlB5Pi49q5ecP8chCRcM%2FTt70aGEVuCU0csGgEjby%2B9thb8u4iEOfFjsxRAqBDtWqKc1IJ0ksycoOUtONAU2m63cbkTg1sUlONkag7VbC27nh93JRmE4wZRk%2BlAEBm8VN%2F5eh8IAeuKcEzL9tmal84s8ndPv1wg7IccXJStZ6lZ%2FzT72bpZ%2BzyySilsBQv5LnoLiJ0nJ4tphA16UBXnR2CfPJfgm0rPV6TZUXjea5pyJqxIrFmRhTwZTPy40Pa%2F8Qh4t1eX8Zly5r8alze8aOR431nCZrTNp0PUAl3CcjfncpkmxeWZiTj9Lpi%2BioyIk5F9lJKkfwwUjUGwC%2FxVSINk6gUQuq5LRw6qFO96cwX%2BcI0iahudC86c%2FS9zk5Bp09PJfIAl7IdnG3z7TznzUbyYSMHPKnTXaQ%2FbLiK96n4zSN2bukSDGXdren0Qb%2B9ndfGJnHD5hOnvR5750cnti3aHkNsG0K8IkfbYapm9M1cfOLwk6AFG9geqN3qPeq7rM2R%2FpEB7ZEXs3Vezl4ieKxMLexCKyPNJ34Cx6m8xc9I7P0iprLAnJ7z8XRhgeAVu5X%2BufRGWLmcMOaOYBtnnVrrLtbTCF6Lq%2FBjqkAc8o59WPSJoGzpkmvm7qUuALJ5t6Mz3r3QcpVtMj4shvNtnKTt8F3miYdPNBB%2BOrT4tnt98fC0ZkKao8Wzz%2F3ncnavQ%2FYcn7%2FFHSyfDzL6W69bINb8wCRkPCmU6mECj%2BL7YeisRrbq0jAl%2BHUdcsSY53b6SrILZO8DN9Ngdlr0RTJ1S414nZg9rBnkWovuh0iz5RWr4sW2m4W%2BOvcwIrf2MVb7kw&X-Amz-Signature=12c6bfb297108430f69b49d8362ebb20d4134785ecf4e082e27193fe179b34be&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNW6DG4%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2EPgTaX0rUmW1Z%2FyJFQ%2FBbWl9Ks0lX%2FCTkrQQAe9YyQIhALp0jnmZF8hYJ1DqBslp3%2FjL3IZou34jt9%2FM3a%2BHEwkcKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlzzylsPxzEYbaIq3ANsfS7GyET%2FBbFJZeLO9wYls4d8JNJpbCzuYlB5Pi49q5ecP8chCRcM%2FTt70aGEVuCU0csGgEjby%2B9thb8u4iEOfFjsxRAqBDtWqKc1IJ0ksycoOUtONAU2m63cbkTg1sUlONkag7VbC27nh93JRmE4wZRk%2BlAEBm8VN%2F5eh8IAeuKcEzL9tmal84s8ndPv1wg7IccXJStZ6lZ%2FzT72bpZ%2BzyySilsBQv5LnoLiJ0nJ4tphA16UBXnR2CfPJfgm0rPV6TZUXjea5pyJqxIrFmRhTwZTPy40Pa%2F8Qh4t1eX8Zly5r8alze8aOR431nCZrTNp0PUAl3CcjfncpkmxeWZiTj9Lpi%2BioyIk5F9lJKkfwwUjUGwC%2FxVSINk6gUQuq5LRw6qFO96cwX%2BcI0iahudC86c%2FS9zk5Bp09PJfIAl7IdnG3z7TznzUbyYSMHPKnTXaQ%2FbLiK96n4zSN2bukSDGXdren0Qb%2B9ndfGJnHD5hOnvR5750cnti3aHkNsG0K8IkfbYapm9M1cfOLwk6AFG9geqN3qPeq7rM2R%2FpEB7ZEXs3Vezl4ieKxMLexCKyPNJ34Cx6m8xc9I7P0iprLAnJ7z8XRhgeAVu5X%2BufRGWLmcMOaOYBtnnVrrLtbTCF6Lq%2FBjqkAc8o59WPSJoGzpkmvm7qUuALJ5t6Mz3r3QcpVtMj4shvNtnKTt8F3miYdPNBB%2BOrT4tnt98fC0ZkKao8Wzz%2F3ncnavQ%2FYcn7%2FFHSyfDzL6W69bINb8wCRkPCmU6mECj%2BL7YeisRrbq0jAl%2BHUdcsSY53b6SrILZO8DN9Ngdlr0RTJ1S414nZg9rBnkWovuh0iz5RWr4sW2m4W%2BOvcwIrf2MVb7kw&X-Amz-Signature=5a5f3281032519fbc098cb5fc8b4c283d81703825912e385d7152a2304cdd162&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
