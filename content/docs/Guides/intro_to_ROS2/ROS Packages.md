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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZI4KJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSzBZT9ZdIDOgwfZ%2FZd93zIDBNMbYyOBU1cLT79EWwggIhAKbJHBZsm9FFI3%2BR%2BgJI4okgX6TRNoZ21O7avAa3rzurKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNIWMduU46U3P93h8q3AOtipN6V0j5yI9Y%2BnmkXvCQbN9XO24iZK0Ake5LQ0uvAtlthjHzjeSD7hm96HRO1l5pXZLNLoit4MHa03KNkxo0ftGOBqU%2BYEQs8luPYfEeii344ffLdbtkcIsNfEh5clMRIwzLlAXcBItbt9nh9H4qDqkbyISLlhuOoZ%2FnWp9EN2L%2FXKYCabVCpNmZ%2BAI7p78o%2FkBT31Tx5hb4v0admwvE5dIiSV8cQO3h06S%2Fw7cZ9W20j78dZ8%2Bh0d8wk%2Fgx%2F%2BVKI7qE1m236QWBh534niBxKJmM2YH5ZyeFO%2FZfYbgB3XexNAUB%2F8%2BJ2bYsoAhGgOFEfR5BuuLLfh%2BeKTYBwpHeL%2B%2F3yyLxgZ7XfsiVStCqbpNjsIXgpPbXQK%2B7xS2KOSzC78AgcVMV4mkO8Bm4EVylpEAo7x68%2FEwL3pnFAImWsPMEEJ5fJFhRW8DUUkbi4%2Bt9Tx%2BqUNmXy1KhwgmGlIRj5y3a9jaB9%2BML2A32b5yvDOcRNMZftt2vejbepUjDg%2FWjiGhZNFXoQkqum%2FrKDpVHi8Nvu6%2BVpjmYjOA%2FhFWOJB4NX7R2heXjLnSCDBcL47%2Bq6Rlc64UxgFq4KPNORrgRFu31%2FJkz4nPpwYlqVqZY%2FoC8%2BaMpuA3f5DLuaDCG%2FIzABjqkAUgSU0cc6d1ZLRWJtF4Nnp16NjJZO8jqdwwdHZiMQx8zq28wAMQrnFC5fo1mpb3ahEz7M0MAF4cIaaoIOUWuGD6rJHcmeZcPL4g15ZGVCs1unsz9v9aAP%2BiGQa33P2gXef%2Fkb%2FkTgRE7vYbFbUtRwF%2FRqiKWdJnMaqqW72V%2F0cQPf46dmcYgRl6sxo73jFMHmHpSjdcoEgqkFsac3KH3yMt2tfez&X-Amz-Signature=b4dc13d460eaaed975d94c34a45cef56693e9c3af9a600078f58910b1124d0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZI4KJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSzBZT9ZdIDOgwfZ%2FZd93zIDBNMbYyOBU1cLT79EWwggIhAKbJHBZsm9FFI3%2BR%2BgJI4okgX6TRNoZ21O7avAa3rzurKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNIWMduU46U3P93h8q3AOtipN6V0j5yI9Y%2BnmkXvCQbN9XO24iZK0Ake5LQ0uvAtlthjHzjeSD7hm96HRO1l5pXZLNLoit4MHa03KNkxo0ftGOBqU%2BYEQs8luPYfEeii344ffLdbtkcIsNfEh5clMRIwzLlAXcBItbt9nh9H4qDqkbyISLlhuOoZ%2FnWp9EN2L%2FXKYCabVCpNmZ%2BAI7p78o%2FkBT31Tx5hb4v0admwvE5dIiSV8cQO3h06S%2Fw7cZ9W20j78dZ8%2Bh0d8wk%2Fgx%2F%2BVKI7qE1m236QWBh534niBxKJmM2YH5ZyeFO%2FZfYbgB3XexNAUB%2F8%2BJ2bYsoAhGgOFEfR5BuuLLfh%2BeKTYBwpHeL%2B%2F3yyLxgZ7XfsiVStCqbpNjsIXgpPbXQK%2B7xS2KOSzC78AgcVMV4mkO8Bm4EVylpEAo7x68%2FEwL3pnFAImWsPMEEJ5fJFhRW8DUUkbi4%2Bt9Tx%2BqUNmXy1KhwgmGlIRj5y3a9jaB9%2BML2A32b5yvDOcRNMZftt2vejbepUjDg%2FWjiGhZNFXoQkqum%2FrKDpVHi8Nvu6%2BVpjmYjOA%2FhFWOJB4NX7R2heXjLnSCDBcL47%2Bq6Rlc64UxgFq4KPNORrgRFu31%2FJkz4nPpwYlqVqZY%2FoC8%2BaMpuA3f5DLuaDCG%2FIzABjqkAUgSU0cc6d1ZLRWJtF4Nnp16NjJZO8jqdwwdHZiMQx8zq28wAMQrnFC5fo1mpb3ahEz7M0MAF4cIaaoIOUWuGD6rJHcmeZcPL4g15ZGVCs1unsz9v9aAP%2BiGQa33P2gXef%2Fkb%2FkTgRE7vYbFbUtRwF%2FRqiKWdJnMaqqW72V%2F0cQPf46dmcYgRl6sxo73jFMHmHpSjdcoEgqkFsac3KH3yMt2tfez&X-Amz-Signature=a1e5515b830d97b3b4a78cf7df7a98b9950c95c466acc9d565b514ef463f7950&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZI4KJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSzBZT9ZdIDOgwfZ%2FZd93zIDBNMbYyOBU1cLT79EWwggIhAKbJHBZsm9FFI3%2BR%2BgJI4okgX6TRNoZ21O7avAa3rzurKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNIWMduU46U3P93h8q3AOtipN6V0j5yI9Y%2BnmkXvCQbN9XO24iZK0Ake5LQ0uvAtlthjHzjeSD7hm96HRO1l5pXZLNLoit4MHa03KNkxo0ftGOBqU%2BYEQs8luPYfEeii344ffLdbtkcIsNfEh5clMRIwzLlAXcBItbt9nh9H4qDqkbyISLlhuOoZ%2FnWp9EN2L%2FXKYCabVCpNmZ%2BAI7p78o%2FkBT31Tx5hb4v0admwvE5dIiSV8cQO3h06S%2Fw7cZ9W20j78dZ8%2Bh0d8wk%2Fgx%2F%2BVKI7qE1m236QWBh534niBxKJmM2YH5ZyeFO%2FZfYbgB3XexNAUB%2F8%2BJ2bYsoAhGgOFEfR5BuuLLfh%2BeKTYBwpHeL%2B%2F3yyLxgZ7XfsiVStCqbpNjsIXgpPbXQK%2B7xS2KOSzC78AgcVMV4mkO8Bm4EVylpEAo7x68%2FEwL3pnFAImWsPMEEJ5fJFhRW8DUUkbi4%2Bt9Tx%2BqUNmXy1KhwgmGlIRj5y3a9jaB9%2BML2A32b5yvDOcRNMZftt2vejbepUjDg%2FWjiGhZNFXoQkqum%2FrKDpVHi8Nvu6%2BVpjmYjOA%2FhFWOJB4NX7R2heXjLnSCDBcL47%2Bq6Rlc64UxgFq4KPNORrgRFu31%2FJkz4nPpwYlqVqZY%2FoC8%2BaMpuA3f5DLuaDCG%2FIzABjqkAUgSU0cc6d1ZLRWJtF4Nnp16NjJZO8jqdwwdHZiMQx8zq28wAMQrnFC5fo1mpb3ahEz7M0MAF4cIaaoIOUWuGD6rJHcmeZcPL4g15ZGVCs1unsz9v9aAP%2BiGQa33P2gXef%2Fkb%2FkTgRE7vYbFbUtRwF%2FRqiKWdJnMaqqW72V%2F0cQPf46dmcYgRl6sxo73jFMHmHpSjdcoEgqkFsac3KH3yMt2tfez&X-Amz-Signature=093de9c7b1590357139b8702f2176b1e481d67734bd28aa3f269d6c6e3625438&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZI4KJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSzBZT9ZdIDOgwfZ%2FZd93zIDBNMbYyOBU1cLT79EWwggIhAKbJHBZsm9FFI3%2BR%2BgJI4okgX6TRNoZ21O7avAa3rzurKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNIWMduU46U3P93h8q3AOtipN6V0j5yI9Y%2BnmkXvCQbN9XO24iZK0Ake5LQ0uvAtlthjHzjeSD7hm96HRO1l5pXZLNLoit4MHa03KNkxo0ftGOBqU%2BYEQs8luPYfEeii344ffLdbtkcIsNfEh5clMRIwzLlAXcBItbt9nh9H4qDqkbyISLlhuOoZ%2FnWp9EN2L%2FXKYCabVCpNmZ%2BAI7p78o%2FkBT31Tx5hb4v0admwvE5dIiSV8cQO3h06S%2Fw7cZ9W20j78dZ8%2Bh0d8wk%2Fgx%2F%2BVKI7qE1m236QWBh534niBxKJmM2YH5ZyeFO%2FZfYbgB3XexNAUB%2F8%2BJ2bYsoAhGgOFEfR5BuuLLfh%2BeKTYBwpHeL%2B%2F3yyLxgZ7XfsiVStCqbpNjsIXgpPbXQK%2B7xS2KOSzC78AgcVMV4mkO8Bm4EVylpEAo7x68%2FEwL3pnFAImWsPMEEJ5fJFhRW8DUUkbi4%2Bt9Tx%2BqUNmXy1KhwgmGlIRj5y3a9jaB9%2BML2A32b5yvDOcRNMZftt2vejbepUjDg%2FWjiGhZNFXoQkqum%2FrKDpVHi8Nvu6%2BVpjmYjOA%2FhFWOJB4NX7R2heXjLnSCDBcL47%2Bq6Rlc64UxgFq4KPNORrgRFu31%2FJkz4nPpwYlqVqZY%2FoC8%2BaMpuA3f5DLuaDCG%2FIzABjqkAUgSU0cc6d1ZLRWJtF4Nnp16NjJZO8jqdwwdHZiMQx8zq28wAMQrnFC5fo1mpb3ahEz7M0MAF4cIaaoIOUWuGD6rJHcmeZcPL4g15ZGVCs1unsz9v9aAP%2BiGQa33P2gXef%2Fkb%2FkTgRE7vYbFbUtRwF%2FRqiKWdJnMaqqW72V%2F0cQPf46dmcYgRl6sxo73jFMHmHpSjdcoEgqkFsac3KH3yMt2tfez&X-Amz-Signature=2c207f1e73fb11835466ef7c0135d30eb1f56d6d3352135c94a4a42b75ea5f29&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZI4KJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSzBZT9ZdIDOgwfZ%2FZd93zIDBNMbYyOBU1cLT79EWwggIhAKbJHBZsm9FFI3%2BR%2BgJI4okgX6TRNoZ21O7avAa3rzurKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNIWMduU46U3P93h8q3AOtipN6V0j5yI9Y%2BnmkXvCQbN9XO24iZK0Ake5LQ0uvAtlthjHzjeSD7hm96HRO1l5pXZLNLoit4MHa03KNkxo0ftGOBqU%2BYEQs8luPYfEeii344ffLdbtkcIsNfEh5clMRIwzLlAXcBItbt9nh9H4qDqkbyISLlhuOoZ%2FnWp9EN2L%2FXKYCabVCpNmZ%2BAI7p78o%2FkBT31Tx5hb4v0admwvE5dIiSV8cQO3h06S%2Fw7cZ9W20j78dZ8%2Bh0d8wk%2Fgx%2F%2BVKI7qE1m236QWBh534niBxKJmM2YH5ZyeFO%2FZfYbgB3XexNAUB%2F8%2BJ2bYsoAhGgOFEfR5BuuLLfh%2BeKTYBwpHeL%2B%2F3yyLxgZ7XfsiVStCqbpNjsIXgpPbXQK%2B7xS2KOSzC78AgcVMV4mkO8Bm4EVylpEAo7x68%2FEwL3pnFAImWsPMEEJ5fJFhRW8DUUkbi4%2Bt9Tx%2BqUNmXy1KhwgmGlIRj5y3a9jaB9%2BML2A32b5yvDOcRNMZftt2vejbepUjDg%2FWjiGhZNFXoQkqum%2FrKDpVHi8Nvu6%2BVpjmYjOA%2FhFWOJB4NX7R2heXjLnSCDBcL47%2Bq6Rlc64UxgFq4KPNORrgRFu31%2FJkz4nPpwYlqVqZY%2FoC8%2BaMpuA3f5DLuaDCG%2FIzABjqkAUgSU0cc6d1ZLRWJtF4Nnp16NjJZO8jqdwwdHZiMQx8zq28wAMQrnFC5fo1mpb3ahEz7M0MAF4cIaaoIOUWuGD6rJHcmeZcPL4g15ZGVCs1unsz9v9aAP%2BiGQa33P2gXef%2Fkb%2FkTgRE7vYbFbUtRwF%2FRqiKWdJnMaqqW72V%2F0cQPf46dmcYgRl6sxo73jFMHmHpSjdcoEgqkFsac3KH3yMt2tfez&X-Amz-Signature=cde24538fa8c66f26706d7b15070ab2ced7cd1408bf1378a56fa1a68b1a04b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZI4KJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSzBZT9ZdIDOgwfZ%2FZd93zIDBNMbYyOBU1cLT79EWwggIhAKbJHBZsm9FFI3%2BR%2BgJI4okgX6TRNoZ21O7avAa3rzurKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNIWMduU46U3P93h8q3AOtipN6V0j5yI9Y%2BnmkXvCQbN9XO24iZK0Ake5LQ0uvAtlthjHzjeSD7hm96HRO1l5pXZLNLoit4MHa03KNkxo0ftGOBqU%2BYEQs8luPYfEeii344ffLdbtkcIsNfEh5clMRIwzLlAXcBItbt9nh9H4qDqkbyISLlhuOoZ%2FnWp9EN2L%2FXKYCabVCpNmZ%2BAI7p78o%2FkBT31Tx5hb4v0admwvE5dIiSV8cQO3h06S%2Fw7cZ9W20j78dZ8%2Bh0d8wk%2Fgx%2F%2BVKI7qE1m236QWBh534niBxKJmM2YH5ZyeFO%2FZfYbgB3XexNAUB%2F8%2BJ2bYsoAhGgOFEfR5BuuLLfh%2BeKTYBwpHeL%2B%2F3yyLxgZ7XfsiVStCqbpNjsIXgpPbXQK%2B7xS2KOSzC78AgcVMV4mkO8Bm4EVylpEAo7x68%2FEwL3pnFAImWsPMEEJ5fJFhRW8DUUkbi4%2Bt9Tx%2BqUNmXy1KhwgmGlIRj5y3a9jaB9%2BML2A32b5yvDOcRNMZftt2vejbepUjDg%2FWjiGhZNFXoQkqum%2FrKDpVHi8Nvu6%2BVpjmYjOA%2FhFWOJB4NX7R2heXjLnSCDBcL47%2Bq6Rlc64UxgFq4KPNORrgRFu31%2FJkz4nPpwYlqVqZY%2FoC8%2BaMpuA3f5DLuaDCG%2FIzABjqkAUgSU0cc6d1ZLRWJtF4Nnp16NjJZO8jqdwwdHZiMQx8zq28wAMQrnFC5fo1mpb3ahEz7M0MAF4cIaaoIOUWuGD6rJHcmeZcPL4g15ZGVCs1unsz9v9aAP%2BiGQa33P2gXef%2Fkb%2FkTgRE7vYbFbUtRwF%2FRqiKWdJnMaqqW72V%2F0cQPf46dmcYgRl6sxo73jFMHmHpSjdcoEgqkFsac3KH3yMt2tfez&X-Amz-Signature=27874b3322dd83a4a09c1032327a1e6a3a6ce5cd770ba194b7432007772b7cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZI4KJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSzBZT9ZdIDOgwfZ%2FZd93zIDBNMbYyOBU1cLT79EWwggIhAKbJHBZsm9FFI3%2BR%2BgJI4okgX6TRNoZ21O7avAa3rzurKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNIWMduU46U3P93h8q3AOtipN6V0j5yI9Y%2BnmkXvCQbN9XO24iZK0Ake5LQ0uvAtlthjHzjeSD7hm96HRO1l5pXZLNLoit4MHa03KNkxo0ftGOBqU%2BYEQs8luPYfEeii344ffLdbtkcIsNfEh5clMRIwzLlAXcBItbt9nh9H4qDqkbyISLlhuOoZ%2FnWp9EN2L%2FXKYCabVCpNmZ%2BAI7p78o%2FkBT31Tx5hb4v0admwvE5dIiSV8cQO3h06S%2Fw7cZ9W20j78dZ8%2Bh0d8wk%2Fgx%2F%2BVKI7qE1m236QWBh534niBxKJmM2YH5ZyeFO%2FZfYbgB3XexNAUB%2F8%2BJ2bYsoAhGgOFEfR5BuuLLfh%2BeKTYBwpHeL%2B%2F3yyLxgZ7XfsiVStCqbpNjsIXgpPbXQK%2B7xS2KOSzC78AgcVMV4mkO8Bm4EVylpEAo7x68%2FEwL3pnFAImWsPMEEJ5fJFhRW8DUUkbi4%2Bt9Tx%2BqUNmXy1KhwgmGlIRj5y3a9jaB9%2BML2A32b5yvDOcRNMZftt2vejbepUjDg%2FWjiGhZNFXoQkqum%2FrKDpVHi8Nvu6%2BVpjmYjOA%2FhFWOJB4NX7R2heXjLnSCDBcL47%2Bq6Rlc64UxgFq4KPNORrgRFu31%2FJkz4nPpwYlqVqZY%2FoC8%2BaMpuA3f5DLuaDCG%2FIzABjqkAUgSU0cc6d1ZLRWJtF4Nnp16NjJZO8jqdwwdHZiMQx8zq28wAMQrnFC5fo1mpb3ahEz7M0MAF4cIaaoIOUWuGD6rJHcmeZcPL4g15ZGVCs1unsz9v9aAP%2BiGQa33P2gXef%2Fkb%2FkTgRE7vYbFbUtRwF%2FRqiKWdJnMaqqW72V%2F0cQPf46dmcYgRl6sxo73jFMHmHpSjdcoEgqkFsac3KH3yMt2tfez&X-Amz-Signature=b084013909e2f794e3f5b5a9907491fefaaaf4b593224b309ace665e67dad299&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
