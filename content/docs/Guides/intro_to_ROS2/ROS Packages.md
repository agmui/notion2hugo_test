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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXBNR6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnhYPwiO%2BCWgBNjppmNVqR3VI918WyFnRX4G9UaFldAAiBVnLOYRkTaW85kUE7rzWxQ7j167kJ3TRYaM4Cl%2FnHNfyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMaQNpGAXbdQem7jF2KtwDxOBEwtuekEam4Bnp649iuyC%2B4Q%2BHIZFzecZ25qhqS%2BV2cxLEwyTUBDSQg9Gr24eUalUjXJtRs7YNyxS4Cakd%2FmlekgBTwtNbJJFbdUdEYL6%2B1EjFxhg%2BoDT9PfbXzrn%2BIc28Jvymw5d79VHJYN26n5c4QSE4KXMlmQDO%2FdojdCoH7mFXJnDPsVlfabDK3NQf0CB8T84AtV0fT7VyZmfZiW11AHimrI7jb0D2QIrv99SxZeUCtylBuQtZpxF3Z5dS3X3jx2YyhLoumUUbRTpR0JbEB4UtDpa1SGnzgxs819SD5AruNAc5xexoMWQWI883UZHk%2BnC1vKh3kqZExHM2%2FtmBc9BQ%2F%2BzD0fP%2BVETPplFtKIxJVTx6nlhah5v%2F1N%2B1QBxKCOmk7EwpqPB7SqbX4mECETY2aJuNwpDAEFc2K4dRkpjXd10LIEPckpgKnHk8l5fVEw9%2BNGZMWPnpbGXzTKIPiM5S3PaYodcLRZwvwKT13qx51rt0l5fX7mH%2FI6CmSIDmhChwtbnvz5csYMlyGRNbhr1wuYXFL2I1SN7%2FBBs8XZl0AVkCu1u4Ar8pqxCUwQn7vq%2BH%2FMBasidlsyCaalS4ReKPXJu1O2NtXY1TAuW14SmW1SI7PnooK8kwi9PAvwY6pgF3dx%2Bp0SM6n7zo5u7JspX89zj45V%2FfsnjI0nZUAB%2By%2BPMVxPYMKn7xmQek8LHdVkRO15Lc6IQpZ6rctkhWsFw93%2Bup0toYjq%2FwBgiBbfzOSyGma%2Fn7sx3FCTArZPvf0lUPEel1sgPp%2B7P9TvI4hUZBD3%2FJ03s%2BnYvPlt1RYEVIFgVvvT4mE8Oq%2F0e8jbaEt016rDLRRciEG3qnHInyK6OPHi5zWhgB&X-Amz-Signature=13d80c8cbd39156de99a1b1b9181dfae8fb90d6c08d728c5366b5ec447dadcb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXBNR6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnhYPwiO%2BCWgBNjppmNVqR3VI918WyFnRX4G9UaFldAAiBVnLOYRkTaW85kUE7rzWxQ7j167kJ3TRYaM4Cl%2FnHNfyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMaQNpGAXbdQem7jF2KtwDxOBEwtuekEam4Bnp649iuyC%2B4Q%2BHIZFzecZ25qhqS%2BV2cxLEwyTUBDSQg9Gr24eUalUjXJtRs7YNyxS4Cakd%2FmlekgBTwtNbJJFbdUdEYL6%2B1EjFxhg%2BoDT9PfbXzrn%2BIc28Jvymw5d79VHJYN26n5c4QSE4KXMlmQDO%2FdojdCoH7mFXJnDPsVlfabDK3NQf0CB8T84AtV0fT7VyZmfZiW11AHimrI7jb0D2QIrv99SxZeUCtylBuQtZpxF3Z5dS3X3jx2YyhLoumUUbRTpR0JbEB4UtDpa1SGnzgxs819SD5AruNAc5xexoMWQWI883UZHk%2BnC1vKh3kqZExHM2%2FtmBc9BQ%2F%2BzD0fP%2BVETPplFtKIxJVTx6nlhah5v%2F1N%2B1QBxKCOmk7EwpqPB7SqbX4mECETY2aJuNwpDAEFc2K4dRkpjXd10LIEPckpgKnHk8l5fVEw9%2BNGZMWPnpbGXzTKIPiM5S3PaYodcLRZwvwKT13qx51rt0l5fX7mH%2FI6CmSIDmhChwtbnvz5csYMlyGRNbhr1wuYXFL2I1SN7%2FBBs8XZl0AVkCu1u4Ar8pqxCUwQn7vq%2BH%2FMBasidlsyCaalS4ReKPXJu1O2NtXY1TAuW14SmW1SI7PnooK8kwi9PAvwY6pgF3dx%2Bp0SM6n7zo5u7JspX89zj45V%2FfsnjI0nZUAB%2By%2BPMVxPYMKn7xmQek8LHdVkRO15Lc6IQpZ6rctkhWsFw93%2Bup0toYjq%2FwBgiBbfzOSyGma%2Fn7sx3FCTArZPvf0lUPEel1sgPp%2B7P9TvI4hUZBD3%2FJ03s%2BnYvPlt1RYEVIFgVvvT4mE8Oq%2F0e8jbaEt016rDLRRciEG3qnHInyK6OPHi5zWhgB&X-Amz-Signature=3e2bddc13b03374cad956ad40f1f9b5c02b35a84cc606bbe0c693d3e0ccc5176&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXBNR6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnhYPwiO%2BCWgBNjppmNVqR3VI918WyFnRX4G9UaFldAAiBVnLOYRkTaW85kUE7rzWxQ7j167kJ3TRYaM4Cl%2FnHNfyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMaQNpGAXbdQem7jF2KtwDxOBEwtuekEam4Bnp649iuyC%2B4Q%2BHIZFzecZ25qhqS%2BV2cxLEwyTUBDSQg9Gr24eUalUjXJtRs7YNyxS4Cakd%2FmlekgBTwtNbJJFbdUdEYL6%2B1EjFxhg%2BoDT9PfbXzrn%2BIc28Jvymw5d79VHJYN26n5c4QSE4KXMlmQDO%2FdojdCoH7mFXJnDPsVlfabDK3NQf0CB8T84AtV0fT7VyZmfZiW11AHimrI7jb0D2QIrv99SxZeUCtylBuQtZpxF3Z5dS3X3jx2YyhLoumUUbRTpR0JbEB4UtDpa1SGnzgxs819SD5AruNAc5xexoMWQWI883UZHk%2BnC1vKh3kqZExHM2%2FtmBc9BQ%2F%2BzD0fP%2BVETPplFtKIxJVTx6nlhah5v%2F1N%2B1QBxKCOmk7EwpqPB7SqbX4mECETY2aJuNwpDAEFc2K4dRkpjXd10LIEPckpgKnHk8l5fVEw9%2BNGZMWPnpbGXzTKIPiM5S3PaYodcLRZwvwKT13qx51rt0l5fX7mH%2FI6CmSIDmhChwtbnvz5csYMlyGRNbhr1wuYXFL2I1SN7%2FBBs8XZl0AVkCu1u4Ar8pqxCUwQn7vq%2BH%2FMBasidlsyCaalS4ReKPXJu1O2NtXY1TAuW14SmW1SI7PnooK8kwi9PAvwY6pgF3dx%2Bp0SM6n7zo5u7JspX89zj45V%2FfsnjI0nZUAB%2By%2BPMVxPYMKn7xmQek8LHdVkRO15Lc6IQpZ6rctkhWsFw93%2Bup0toYjq%2FwBgiBbfzOSyGma%2Fn7sx3FCTArZPvf0lUPEel1sgPp%2B7P9TvI4hUZBD3%2FJ03s%2BnYvPlt1RYEVIFgVvvT4mE8Oq%2F0e8jbaEt016rDLRRciEG3qnHInyK6OPHi5zWhgB&X-Amz-Signature=dbdc2a0929f597f2cfc53cd90479ca956dec7a5b916d40ad80a655d49526b204&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXBNR6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnhYPwiO%2BCWgBNjppmNVqR3VI918WyFnRX4G9UaFldAAiBVnLOYRkTaW85kUE7rzWxQ7j167kJ3TRYaM4Cl%2FnHNfyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMaQNpGAXbdQem7jF2KtwDxOBEwtuekEam4Bnp649iuyC%2B4Q%2BHIZFzecZ25qhqS%2BV2cxLEwyTUBDSQg9Gr24eUalUjXJtRs7YNyxS4Cakd%2FmlekgBTwtNbJJFbdUdEYL6%2B1EjFxhg%2BoDT9PfbXzrn%2BIc28Jvymw5d79VHJYN26n5c4QSE4KXMlmQDO%2FdojdCoH7mFXJnDPsVlfabDK3NQf0CB8T84AtV0fT7VyZmfZiW11AHimrI7jb0D2QIrv99SxZeUCtylBuQtZpxF3Z5dS3X3jx2YyhLoumUUbRTpR0JbEB4UtDpa1SGnzgxs819SD5AruNAc5xexoMWQWI883UZHk%2BnC1vKh3kqZExHM2%2FtmBc9BQ%2F%2BzD0fP%2BVETPplFtKIxJVTx6nlhah5v%2F1N%2B1QBxKCOmk7EwpqPB7SqbX4mECETY2aJuNwpDAEFc2K4dRkpjXd10LIEPckpgKnHk8l5fVEw9%2BNGZMWPnpbGXzTKIPiM5S3PaYodcLRZwvwKT13qx51rt0l5fX7mH%2FI6CmSIDmhChwtbnvz5csYMlyGRNbhr1wuYXFL2I1SN7%2FBBs8XZl0AVkCu1u4Ar8pqxCUwQn7vq%2BH%2FMBasidlsyCaalS4ReKPXJu1O2NtXY1TAuW14SmW1SI7PnooK8kwi9PAvwY6pgF3dx%2Bp0SM6n7zo5u7JspX89zj45V%2FfsnjI0nZUAB%2By%2BPMVxPYMKn7xmQek8LHdVkRO15Lc6IQpZ6rctkhWsFw93%2Bup0toYjq%2FwBgiBbfzOSyGma%2Fn7sx3FCTArZPvf0lUPEel1sgPp%2B7P9TvI4hUZBD3%2FJ03s%2BnYvPlt1RYEVIFgVvvT4mE8Oq%2F0e8jbaEt016rDLRRciEG3qnHInyK6OPHi5zWhgB&X-Amz-Signature=e2fb120e9f8be2f1611b140f1b493533963fd08364cbf5dd19b5bc11c52327a4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXBNR6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnhYPwiO%2BCWgBNjppmNVqR3VI918WyFnRX4G9UaFldAAiBVnLOYRkTaW85kUE7rzWxQ7j167kJ3TRYaM4Cl%2FnHNfyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMaQNpGAXbdQem7jF2KtwDxOBEwtuekEam4Bnp649iuyC%2B4Q%2BHIZFzecZ25qhqS%2BV2cxLEwyTUBDSQg9Gr24eUalUjXJtRs7YNyxS4Cakd%2FmlekgBTwtNbJJFbdUdEYL6%2B1EjFxhg%2BoDT9PfbXzrn%2BIc28Jvymw5d79VHJYN26n5c4QSE4KXMlmQDO%2FdojdCoH7mFXJnDPsVlfabDK3NQf0CB8T84AtV0fT7VyZmfZiW11AHimrI7jb0D2QIrv99SxZeUCtylBuQtZpxF3Z5dS3X3jx2YyhLoumUUbRTpR0JbEB4UtDpa1SGnzgxs819SD5AruNAc5xexoMWQWI883UZHk%2BnC1vKh3kqZExHM2%2FtmBc9BQ%2F%2BzD0fP%2BVETPplFtKIxJVTx6nlhah5v%2F1N%2B1QBxKCOmk7EwpqPB7SqbX4mECETY2aJuNwpDAEFc2K4dRkpjXd10LIEPckpgKnHk8l5fVEw9%2BNGZMWPnpbGXzTKIPiM5S3PaYodcLRZwvwKT13qx51rt0l5fX7mH%2FI6CmSIDmhChwtbnvz5csYMlyGRNbhr1wuYXFL2I1SN7%2FBBs8XZl0AVkCu1u4Ar8pqxCUwQn7vq%2BH%2FMBasidlsyCaalS4ReKPXJu1O2NtXY1TAuW14SmW1SI7PnooK8kwi9PAvwY6pgF3dx%2Bp0SM6n7zo5u7JspX89zj45V%2FfsnjI0nZUAB%2By%2BPMVxPYMKn7xmQek8LHdVkRO15Lc6IQpZ6rctkhWsFw93%2Bup0toYjq%2FwBgiBbfzOSyGma%2Fn7sx3FCTArZPvf0lUPEel1sgPp%2B7P9TvI4hUZBD3%2FJ03s%2BnYvPlt1RYEVIFgVvvT4mE8Oq%2F0e8jbaEt016rDLRRciEG3qnHInyK6OPHi5zWhgB&X-Amz-Signature=f32c7f135d47625bdd55db9b5e82a70e712d40d794d7e2d0c60b84047f39e6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXBNR6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnhYPwiO%2BCWgBNjppmNVqR3VI918WyFnRX4G9UaFldAAiBVnLOYRkTaW85kUE7rzWxQ7j167kJ3TRYaM4Cl%2FnHNfyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMaQNpGAXbdQem7jF2KtwDxOBEwtuekEam4Bnp649iuyC%2B4Q%2BHIZFzecZ25qhqS%2BV2cxLEwyTUBDSQg9Gr24eUalUjXJtRs7YNyxS4Cakd%2FmlekgBTwtNbJJFbdUdEYL6%2B1EjFxhg%2BoDT9PfbXzrn%2BIc28Jvymw5d79VHJYN26n5c4QSE4KXMlmQDO%2FdojdCoH7mFXJnDPsVlfabDK3NQf0CB8T84AtV0fT7VyZmfZiW11AHimrI7jb0D2QIrv99SxZeUCtylBuQtZpxF3Z5dS3X3jx2YyhLoumUUbRTpR0JbEB4UtDpa1SGnzgxs819SD5AruNAc5xexoMWQWI883UZHk%2BnC1vKh3kqZExHM2%2FtmBc9BQ%2F%2BzD0fP%2BVETPplFtKIxJVTx6nlhah5v%2F1N%2B1QBxKCOmk7EwpqPB7SqbX4mECETY2aJuNwpDAEFc2K4dRkpjXd10LIEPckpgKnHk8l5fVEw9%2BNGZMWPnpbGXzTKIPiM5S3PaYodcLRZwvwKT13qx51rt0l5fX7mH%2FI6CmSIDmhChwtbnvz5csYMlyGRNbhr1wuYXFL2I1SN7%2FBBs8XZl0AVkCu1u4Ar8pqxCUwQn7vq%2BH%2FMBasidlsyCaalS4ReKPXJu1O2NtXY1TAuW14SmW1SI7PnooK8kwi9PAvwY6pgF3dx%2Bp0SM6n7zo5u7JspX89zj45V%2FfsnjI0nZUAB%2By%2BPMVxPYMKn7xmQek8LHdVkRO15Lc6IQpZ6rctkhWsFw93%2Bup0toYjq%2FwBgiBbfzOSyGma%2Fn7sx3FCTArZPvf0lUPEel1sgPp%2B7P9TvI4hUZBD3%2FJ03s%2BnYvPlt1RYEVIFgVvvT4mE8Oq%2F0e8jbaEt016rDLRRciEG3qnHInyK6OPHi5zWhgB&X-Amz-Signature=be284668f622e1ad2a4e317c48ab3b363ec812067b60d8b405ed8cf457708b25&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXBNR6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnhYPwiO%2BCWgBNjppmNVqR3VI918WyFnRX4G9UaFldAAiBVnLOYRkTaW85kUE7rzWxQ7j167kJ3TRYaM4Cl%2FnHNfyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMaQNpGAXbdQem7jF2KtwDxOBEwtuekEam4Bnp649iuyC%2B4Q%2BHIZFzecZ25qhqS%2BV2cxLEwyTUBDSQg9Gr24eUalUjXJtRs7YNyxS4Cakd%2FmlekgBTwtNbJJFbdUdEYL6%2B1EjFxhg%2BoDT9PfbXzrn%2BIc28Jvymw5d79VHJYN26n5c4QSE4KXMlmQDO%2FdojdCoH7mFXJnDPsVlfabDK3NQf0CB8T84AtV0fT7VyZmfZiW11AHimrI7jb0D2QIrv99SxZeUCtylBuQtZpxF3Z5dS3X3jx2YyhLoumUUbRTpR0JbEB4UtDpa1SGnzgxs819SD5AruNAc5xexoMWQWI883UZHk%2BnC1vKh3kqZExHM2%2FtmBc9BQ%2F%2BzD0fP%2BVETPplFtKIxJVTx6nlhah5v%2F1N%2B1QBxKCOmk7EwpqPB7SqbX4mECETY2aJuNwpDAEFc2K4dRkpjXd10LIEPckpgKnHk8l5fVEw9%2BNGZMWPnpbGXzTKIPiM5S3PaYodcLRZwvwKT13qx51rt0l5fX7mH%2FI6CmSIDmhChwtbnvz5csYMlyGRNbhr1wuYXFL2I1SN7%2FBBs8XZl0AVkCu1u4Ar8pqxCUwQn7vq%2BH%2FMBasidlsyCaalS4ReKPXJu1O2NtXY1TAuW14SmW1SI7PnooK8kwi9PAvwY6pgF3dx%2Bp0SM6n7zo5u7JspX89zj45V%2FfsnjI0nZUAB%2By%2BPMVxPYMKn7xmQek8LHdVkRO15Lc6IQpZ6rctkhWsFw93%2Bup0toYjq%2FwBgiBbfzOSyGma%2Fn7sx3FCTArZPvf0lUPEel1sgPp%2B7P9TvI4hUZBD3%2FJ03s%2BnYvPlt1RYEVIFgVvvT4mE8Oq%2F0e8jbaEt016rDLRRciEG3qnHInyK6OPHi5zWhgB&X-Amz-Signature=eb686864530332f9172b8066699c0ba7fa8e60f3f18c8c53395112fbb3212c44&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
