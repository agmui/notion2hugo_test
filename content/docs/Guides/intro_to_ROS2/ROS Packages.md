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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK2A7KU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FgLtOqXYWnloWc6dh%2B5Gf4be3XCFBuxX5422gdluzYAiAaIeCFNHxUcNJs3l4RmHDMu%2BthomjM7tGLXNVTbNgRpSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIFYgm4t6yZN7hlJKtwDcIl9Nq4nFEXKpTD2BQzSxHZoKO8q%2B8A0jW3%2BkJgykcPVlUMds2ufQUBeVNggF8gAUGnpfN4fE29I5QlxOK%2BfyoQo%2ByQwjvoBqslKrzBGAjpsSMwUB6k4uNU2RrJWI9cwSi6XXS0T0l655T7%2BAUCS1BKQ83ZWm3SoR787MDnaii6ZPl%2Br2cQ9o9n21KyjqLjnznuEMBlwpbBNxmves2NFrlfrHEh3l37Nvz9FWDb1hXsjzDKWr5m%2FNvgNmJ37pPkup0v9qSpmcXv5njQ8OEc1d8qcjxjeCgff%2FOd6xeHVVA7QAEYY%2FCQdW7Na3EWlFpvsnW6m3%2BcbH8uCRJsDD7Hu1iLO6xWI%2Bw%2B0mJ0IhhQAjLKVHA%2BCpumXrKwxahs86qwub89APLAByEq0940pdj6mBLmi52he0%2FolKw6XNNnBXRqUWwjAjbyspG9htzupC4E0YGj6q68A9fLB9FROwburUguWEg521MSgIrwfZKltyfJBbPH4LB6hxVpJuE3gUv7njc2rTDcbLo94pFOE6Bgb5mCAGomAZdAH0ARPCrLnZGrs65iAp0Qh%2Brz2YGwIIgxYvlF0dHP5Ql7WyHTnGFSVxA3cPTu2LQCk9b%2BmdVkFbDloj5u%2FXTCSaFAHZUsw1tvgwQY6pgFz5JnIAGyLLccJ63%2BP9bNJS8P78L640mJ4BTFg8Ukh0V2dtYmeGmW8MgesN1JrCPyWxCikj8%2B9YsctlTAxsWj5hd9vhPbxNG4xSLwQVQbWB36t4P%2FuSAkBUatJoUT6eBwRkBjrOJHQKGl0HyGhwKGgHdcx4fin2tiOoTP8ixnQ2raoEkrGpKrPDqbfmKyBHuSheC2BcpCxfbEfGJRqPa5HNSfkZxKq&X-Amz-Signature=ed730e9b335b7524eb081548e62b57cdb2cfdc76dfec4ae14b653b83e30dc770&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK2A7KU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FgLtOqXYWnloWc6dh%2B5Gf4be3XCFBuxX5422gdluzYAiAaIeCFNHxUcNJs3l4RmHDMu%2BthomjM7tGLXNVTbNgRpSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIFYgm4t6yZN7hlJKtwDcIl9Nq4nFEXKpTD2BQzSxHZoKO8q%2B8A0jW3%2BkJgykcPVlUMds2ufQUBeVNggF8gAUGnpfN4fE29I5QlxOK%2BfyoQo%2ByQwjvoBqslKrzBGAjpsSMwUB6k4uNU2RrJWI9cwSi6XXS0T0l655T7%2BAUCS1BKQ83ZWm3SoR787MDnaii6ZPl%2Br2cQ9o9n21KyjqLjnznuEMBlwpbBNxmves2NFrlfrHEh3l37Nvz9FWDb1hXsjzDKWr5m%2FNvgNmJ37pPkup0v9qSpmcXv5njQ8OEc1d8qcjxjeCgff%2FOd6xeHVVA7QAEYY%2FCQdW7Na3EWlFpvsnW6m3%2BcbH8uCRJsDD7Hu1iLO6xWI%2Bw%2B0mJ0IhhQAjLKVHA%2BCpumXrKwxahs86qwub89APLAByEq0940pdj6mBLmi52he0%2FolKw6XNNnBXRqUWwjAjbyspG9htzupC4E0YGj6q68A9fLB9FROwburUguWEg521MSgIrwfZKltyfJBbPH4LB6hxVpJuE3gUv7njc2rTDcbLo94pFOE6Bgb5mCAGomAZdAH0ARPCrLnZGrs65iAp0Qh%2Brz2YGwIIgxYvlF0dHP5Ql7WyHTnGFSVxA3cPTu2LQCk9b%2BmdVkFbDloj5u%2FXTCSaFAHZUsw1tvgwQY6pgFz5JnIAGyLLccJ63%2BP9bNJS8P78L640mJ4BTFg8Ukh0V2dtYmeGmW8MgesN1JrCPyWxCikj8%2B9YsctlTAxsWj5hd9vhPbxNG4xSLwQVQbWB36t4P%2FuSAkBUatJoUT6eBwRkBjrOJHQKGl0HyGhwKGgHdcx4fin2tiOoTP8ixnQ2raoEkrGpKrPDqbfmKyBHuSheC2BcpCxfbEfGJRqPa5HNSfkZxKq&X-Amz-Signature=2221ff447034888d4c304d0b7cd79eb391f0f5efb1bb31f7b2acc104c35c4ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK2A7KU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FgLtOqXYWnloWc6dh%2B5Gf4be3XCFBuxX5422gdluzYAiAaIeCFNHxUcNJs3l4RmHDMu%2BthomjM7tGLXNVTbNgRpSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIFYgm4t6yZN7hlJKtwDcIl9Nq4nFEXKpTD2BQzSxHZoKO8q%2B8A0jW3%2BkJgykcPVlUMds2ufQUBeVNggF8gAUGnpfN4fE29I5QlxOK%2BfyoQo%2ByQwjvoBqslKrzBGAjpsSMwUB6k4uNU2RrJWI9cwSi6XXS0T0l655T7%2BAUCS1BKQ83ZWm3SoR787MDnaii6ZPl%2Br2cQ9o9n21KyjqLjnznuEMBlwpbBNxmves2NFrlfrHEh3l37Nvz9FWDb1hXsjzDKWr5m%2FNvgNmJ37pPkup0v9qSpmcXv5njQ8OEc1d8qcjxjeCgff%2FOd6xeHVVA7QAEYY%2FCQdW7Na3EWlFpvsnW6m3%2BcbH8uCRJsDD7Hu1iLO6xWI%2Bw%2B0mJ0IhhQAjLKVHA%2BCpumXrKwxahs86qwub89APLAByEq0940pdj6mBLmi52he0%2FolKw6XNNnBXRqUWwjAjbyspG9htzupC4E0YGj6q68A9fLB9FROwburUguWEg521MSgIrwfZKltyfJBbPH4LB6hxVpJuE3gUv7njc2rTDcbLo94pFOE6Bgb5mCAGomAZdAH0ARPCrLnZGrs65iAp0Qh%2Brz2YGwIIgxYvlF0dHP5Ql7WyHTnGFSVxA3cPTu2LQCk9b%2BmdVkFbDloj5u%2FXTCSaFAHZUsw1tvgwQY6pgFz5JnIAGyLLccJ63%2BP9bNJS8P78L640mJ4BTFg8Ukh0V2dtYmeGmW8MgesN1JrCPyWxCikj8%2B9YsctlTAxsWj5hd9vhPbxNG4xSLwQVQbWB36t4P%2FuSAkBUatJoUT6eBwRkBjrOJHQKGl0HyGhwKGgHdcx4fin2tiOoTP8ixnQ2raoEkrGpKrPDqbfmKyBHuSheC2BcpCxfbEfGJRqPa5HNSfkZxKq&X-Amz-Signature=7d3575945c38bf6f0e7a027f80acd94c0176237c47b057d6f6326de0d75196c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK2A7KU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FgLtOqXYWnloWc6dh%2B5Gf4be3XCFBuxX5422gdluzYAiAaIeCFNHxUcNJs3l4RmHDMu%2BthomjM7tGLXNVTbNgRpSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIFYgm4t6yZN7hlJKtwDcIl9Nq4nFEXKpTD2BQzSxHZoKO8q%2B8A0jW3%2BkJgykcPVlUMds2ufQUBeVNggF8gAUGnpfN4fE29I5QlxOK%2BfyoQo%2ByQwjvoBqslKrzBGAjpsSMwUB6k4uNU2RrJWI9cwSi6XXS0T0l655T7%2BAUCS1BKQ83ZWm3SoR787MDnaii6ZPl%2Br2cQ9o9n21KyjqLjnznuEMBlwpbBNxmves2NFrlfrHEh3l37Nvz9FWDb1hXsjzDKWr5m%2FNvgNmJ37pPkup0v9qSpmcXv5njQ8OEc1d8qcjxjeCgff%2FOd6xeHVVA7QAEYY%2FCQdW7Na3EWlFpvsnW6m3%2BcbH8uCRJsDD7Hu1iLO6xWI%2Bw%2B0mJ0IhhQAjLKVHA%2BCpumXrKwxahs86qwub89APLAByEq0940pdj6mBLmi52he0%2FolKw6XNNnBXRqUWwjAjbyspG9htzupC4E0YGj6q68A9fLB9FROwburUguWEg521MSgIrwfZKltyfJBbPH4LB6hxVpJuE3gUv7njc2rTDcbLo94pFOE6Bgb5mCAGomAZdAH0ARPCrLnZGrs65iAp0Qh%2Brz2YGwIIgxYvlF0dHP5Ql7WyHTnGFSVxA3cPTu2LQCk9b%2BmdVkFbDloj5u%2FXTCSaFAHZUsw1tvgwQY6pgFz5JnIAGyLLccJ63%2BP9bNJS8P78L640mJ4BTFg8Ukh0V2dtYmeGmW8MgesN1JrCPyWxCikj8%2B9YsctlTAxsWj5hd9vhPbxNG4xSLwQVQbWB36t4P%2FuSAkBUatJoUT6eBwRkBjrOJHQKGl0HyGhwKGgHdcx4fin2tiOoTP8ixnQ2raoEkrGpKrPDqbfmKyBHuSheC2BcpCxfbEfGJRqPa5HNSfkZxKq&X-Amz-Signature=fb8dd786da5b0db56b9fb2b47fd595d7de073fa19d3a63673cb088dd407d8c38&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK2A7KU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FgLtOqXYWnloWc6dh%2B5Gf4be3XCFBuxX5422gdluzYAiAaIeCFNHxUcNJs3l4RmHDMu%2BthomjM7tGLXNVTbNgRpSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIFYgm4t6yZN7hlJKtwDcIl9Nq4nFEXKpTD2BQzSxHZoKO8q%2B8A0jW3%2BkJgykcPVlUMds2ufQUBeVNggF8gAUGnpfN4fE29I5QlxOK%2BfyoQo%2ByQwjvoBqslKrzBGAjpsSMwUB6k4uNU2RrJWI9cwSi6XXS0T0l655T7%2BAUCS1BKQ83ZWm3SoR787MDnaii6ZPl%2Br2cQ9o9n21KyjqLjnznuEMBlwpbBNxmves2NFrlfrHEh3l37Nvz9FWDb1hXsjzDKWr5m%2FNvgNmJ37pPkup0v9qSpmcXv5njQ8OEc1d8qcjxjeCgff%2FOd6xeHVVA7QAEYY%2FCQdW7Na3EWlFpvsnW6m3%2BcbH8uCRJsDD7Hu1iLO6xWI%2Bw%2B0mJ0IhhQAjLKVHA%2BCpumXrKwxahs86qwub89APLAByEq0940pdj6mBLmi52he0%2FolKw6XNNnBXRqUWwjAjbyspG9htzupC4E0YGj6q68A9fLB9FROwburUguWEg521MSgIrwfZKltyfJBbPH4LB6hxVpJuE3gUv7njc2rTDcbLo94pFOE6Bgb5mCAGomAZdAH0ARPCrLnZGrs65iAp0Qh%2Brz2YGwIIgxYvlF0dHP5Ql7WyHTnGFSVxA3cPTu2LQCk9b%2BmdVkFbDloj5u%2FXTCSaFAHZUsw1tvgwQY6pgFz5JnIAGyLLccJ63%2BP9bNJS8P78L640mJ4BTFg8Ukh0V2dtYmeGmW8MgesN1JrCPyWxCikj8%2B9YsctlTAxsWj5hd9vhPbxNG4xSLwQVQbWB36t4P%2FuSAkBUatJoUT6eBwRkBjrOJHQKGl0HyGhwKGgHdcx4fin2tiOoTP8ixnQ2raoEkrGpKrPDqbfmKyBHuSheC2BcpCxfbEfGJRqPa5HNSfkZxKq&X-Amz-Signature=d947381132e1f715a45543d1126282651f65e052876c9aa3dd80ce68445330e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK2A7KU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FgLtOqXYWnloWc6dh%2B5Gf4be3XCFBuxX5422gdluzYAiAaIeCFNHxUcNJs3l4RmHDMu%2BthomjM7tGLXNVTbNgRpSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIFYgm4t6yZN7hlJKtwDcIl9Nq4nFEXKpTD2BQzSxHZoKO8q%2B8A0jW3%2BkJgykcPVlUMds2ufQUBeVNggF8gAUGnpfN4fE29I5QlxOK%2BfyoQo%2ByQwjvoBqslKrzBGAjpsSMwUB6k4uNU2RrJWI9cwSi6XXS0T0l655T7%2BAUCS1BKQ83ZWm3SoR787MDnaii6ZPl%2Br2cQ9o9n21KyjqLjnznuEMBlwpbBNxmves2NFrlfrHEh3l37Nvz9FWDb1hXsjzDKWr5m%2FNvgNmJ37pPkup0v9qSpmcXv5njQ8OEc1d8qcjxjeCgff%2FOd6xeHVVA7QAEYY%2FCQdW7Na3EWlFpvsnW6m3%2BcbH8uCRJsDD7Hu1iLO6xWI%2Bw%2B0mJ0IhhQAjLKVHA%2BCpumXrKwxahs86qwub89APLAByEq0940pdj6mBLmi52he0%2FolKw6XNNnBXRqUWwjAjbyspG9htzupC4E0YGj6q68A9fLB9FROwburUguWEg521MSgIrwfZKltyfJBbPH4LB6hxVpJuE3gUv7njc2rTDcbLo94pFOE6Bgb5mCAGomAZdAH0ARPCrLnZGrs65iAp0Qh%2Brz2YGwIIgxYvlF0dHP5Ql7WyHTnGFSVxA3cPTu2LQCk9b%2BmdVkFbDloj5u%2FXTCSaFAHZUsw1tvgwQY6pgFz5JnIAGyLLccJ63%2BP9bNJS8P78L640mJ4BTFg8Ukh0V2dtYmeGmW8MgesN1JrCPyWxCikj8%2B9YsctlTAxsWj5hd9vhPbxNG4xSLwQVQbWB36t4P%2FuSAkBUatJoUT6eBwRkBjrOJHQKGl0HyGhwKGgHdcx4fin2tiOoTP8ixnQ2raoEkrGpKrPDqbfmKyBHuSheC2BcpCxfbEfGJRqPa5HNSfkZxKq&X-Amz-Signature=91b5fd36860fe6260869cc560a1017bc43110469f0d3659b5bda176ab66f851b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVK2A7KU%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FgLtOqXYWnloWc6dh%2B5Gf4be3XCFBuxX5422gdluzYAiAaIeCFNHxUcNJs3l4RmHDMu%2BthomjM7tGLXNVTbNgRpSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIFYgm4t6yZN7hlJKtwDcIl9Nq4nFEXKpTD2BQzSxHZoKO8q%2B8A0jW3%2BkJgykcPVlUMds2ufQUBeVNggF8gAUGnpfN4fE29I5QlxOK%2BfyoQo%2ByQwjvoBqslKrzBGAjpsSMwUB6k4uNU2RrJWI9cwSi6XXS0T0l655T7%2BAUCS1BKQ83ZWm3SoR787MDnaii6ZPl%2Br2cQ9o9n21KyjqLjnznuEMBlwpbBNxmves2NFrlfrHEh3l37Nvz9FWDb1hXsjzDKWr5m%2FNvgNmJ37pPkup0v9qSpmcXv5njQ8OEc1d8qcjxjeCgff%2FOd6xeHVVA7QAEYY%2FCQdW7Na3EWlFpvsnW6m3%2BcbH8uCRJsDD7Hu1iLO6xWI%2Bw%2B0mJ0IhhQAjLKVHA%2BCpumXrKwxahs86qwub89APLAByEq0940pdj6mBLmi52he0%2FolKw6XNNnBXRqUWwjAjbyspG9htzupC4E0YGj6q68A9fLB9FROwburUguWEg521MSgIrwfZKltyfJBbPH4LB6hxVpJuE3gUv7njc2rTDcbLo94pFOE6Bgb5mCAGomAZdAH0ARPCrLnZGrs65iAp0Qh%2Brz2YGwIIgxYvlF0dHP5Ql7WyHTnGFSVxA3cPTu2LQCk9b%2BmdVkFbDloj5u%2FXTCSaFAHZUsw1tvgwQY6pgFz5JnIAGyLLccJ63%2BP9bNJS8P78L640mJ4BTFg8Ukh0V2dtYmeGmW8MgesN1JrCPyWxCikj8%2B9YsctlTAxsWj5hd9vhPbxNG4xSLwQVQbWB36t4P%2FuSAkBUatJoUT6eBwRkBjrOJHQKGl0HyGhwKGgHdcx4fin2tiOoTP8ixnQ2raoEkrGpKrPDqbfmKyBHuSheC2BcpCxfbEfGJRqPa5HNSfkZxKq&X-Amz-Signature=048b2a6e02e6af2b0d582063164e55fc0bac8dd204dc5413e2e95d5a333c55d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
