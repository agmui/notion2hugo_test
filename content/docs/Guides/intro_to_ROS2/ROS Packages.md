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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYEVVT4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDSbZHb4XLD9DgF0s0AAmt6GDR0RiudQm0IushrfhnsyQIhANh7qvj76RTH7g2GdynOm21ZdBV3QycqMWVS4fac4%2BAhKv8DCEwQABoMNjM3NDIzMTgzODA1IgwF%2BkTvPWxl50SN904q3APpjnHMbrWqh3AG6nkLpN1v8njj%2BwyYXbcJQ3SRizI7hrqV%2FXIf014WDrHwec6tUQb8hlKA4bVc%2FBH%2FabA4AskAAktChrZ4HPsz1OHO%2BwqXjLHoS0dULx%2BhSOsfDTt%2FsFi8%2FiS9uQza2k%2F1eELg2inu1GIuxBg6xqTcuv0DeJbE%2FAc1xyltgh%2FXBwtHEZut2w0Of5Cg76eAfElIpQOmvx%2Byu1iSUpHfrnwxTQWlY6cWPebJnSU5RsCv8AYt95GgdIULOoS038iEwq8kTs3vcDBRaTm23zLfj9exETEJluQQ2MDVcBRBFXlbDlkYLXRnFC2vBSt%2BIV5GPk6GtDoCY7r4vn3qZWRF5IynLXVHcJPO3d%2FPwbIxOunE2SYZVMGCxt1slaZqprDsjXvxuPSZk3YfZFxsStfe95oy5nfAqcRY%2FuVvUhfqUNwj77f0gGjbhzwZKTzXARvyHikncG8IUtRPgOklPk7o0DGyd%2BlvZ6%2BN1rKoPInWpCMcs90UIi3MVCKHZl9Nyz4A4A%2FSyCWnMF9c%2FWQbqB%2F3IxuBP7OZOXW1JiW5NQiBnMmvE5XD57JWjqJwCWzl%2F8TbV5GGOoMIMzxH4OhlLaWMqIJwCnZCEEJQvCtq59tFWOAAIzuQvzCS2IfCBjqkAajBcxTUtlIA0lGWf53FDyikFe6W5LEMgYqE4Hb6awtrvxVNaao1DBc55xt9QJzMpLK2b%2F7ySdji2FEYpE2p0MhMZ1JtJ%2F3qdRNkkK1m%2BV46%2BDDYRVWGt4Jo0Yox8Hzo%2B1f1X5%2F3uFdRM%2B33Cq9ePzV7ud75Fc40hIHXi%2BrzgnUhYMHO7i3hwc%2F9pUu5JCJytJKPfOGkRpDyKSO4N4yHKy7SxkGl&X-Amz-Signature=c2bbde4f13e23a4deb1dd14d59f2dcbf494aad2565e4526f6483cc254e440e44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYEVVT4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDSbZHb4XLD9DgF0s0AAmt6GDR0RiudQm0IushrfhnsyQIhANh7qvj76RTH7g2GdynOm21ZdBV3QycqMWVS4fac4%2BAhKv8DCEwQABoMNjM3NDIzMTgzODA1IgwF%2BkTvPWxl50SN904q3APpjnHMbrWqh3AG6nkLpN1v8njj%2BwyYXbcJQ3SRizI7hrqV%2FXIf014WDrHwec6tUQb8hlKA4bVc%2FBH%2FabA4AskAAktChrZ4HPsz1OHO%2BwqXjLHoS0dULx%2BhSOsfDTt%2FsFi8%2FiS9uQza2k%2F1eELg2inu1GIuxBg6xqTcuv0DeJbE%2FAc1xyltgh%2FXBwtHEZut2w0Of5Cg76eAfElIpQOmvx%2Byu1iSUpHfrnwxTQWlY6cWPebJnSU5RsCv8AYt95GgdIULOoS038iEwq8kTs3vcDBRaTm23zLfj9exETEJluQQ2MDVcBRBFXlbDlkYLXRnFC2vBSt%2BIV5GPk6GtDoCY7r4vn3qZWRF5IynLXVHcJPO3d%2FPwbIxOunE2SYZVMGCxt1slaZqprDsjXvxuPSZk3YfZFxsStfe95oy5nfAqcRY%2FuVvUhfqUNwj77f0gGjbhzwZKTzXARvyHikncG8IUtRPgOklPk7o0DGyd%2BlvZ6%2BN1rKoPInWpCMcs90UIi3MVCKHZl9Nyz4A4A%2FSyCWnMF9c%2FWQbqB%2F3IxuBP7OZOXW1JiW5NQiBnMmvE5XD57JWjqJwCWzl%2F8TbV5GGOoMIMzxH4OhlLaWMqIJwCnZCEEJQvCtq59tFWOAAIzuQvzCS2IfCBjqkAajBcxTUtlIA0lGWf53FDyikFe6W5LEMgYqE4Hb6awtrvxVNaao1DBc55xt9QJzMpLK2b%2F7ySdji2FEYpE2p0MhMZ1JtJ%2F3qdRNkkK1m%2BV46%2BDDYRVWGt4Jo0Yox8Hzo%2B1f1X5%2F3uFdRM%2B33Cq9ePzV7ud75Fc40hIHXi%2BrzgnUhYMHO7i3hwc%2F9pUu5JCJytJKPfOGkRpDyKSO4N4yHKy7SxkGl&X-Amz-Signature=39b1342206203f6c080f04aca40a401c4ff149c83aa5241bf505c3f30cf044e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYEVVT4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDSbZHb4XLD9DgF0s0AAmt6GDR0RiudQm0IushrfhnsyQIhANh7qvj76RTH7g2GdynOm21ZdBV3QycqMWVS4fac4%2BAhKv8DCEwQABoMNjM3NDIzMTgzODA1IgwF%2BkTvPWxl50SN904q3APpjnHMbrWqh3AG6nkLpN1v8njj%2BwyYXbcJQ3SRizI7hrqV%2FXIf014WDrHwec6tUQb8hlKA4bVc%2FBH%2FabA4AskAAktChrZ4HPsz1OHO%2BwqXjLHoS0dULx%2BhSOsfDTt%2FsFi8%2FiS9uQza2k%2F1eELg2inu1GIuxBg6xqTcuv0DeJbE%2FAc1xyltgh%2FXBwtHEZut2w0Of5Cg76eAfElIpQOmvx%2Byu1iSUpHfrnwxTQWlY6cWPebJnSU5RsCv8AYt95GgdIULOoS038iEwq8kTs3vcDBRaTm23zLfj9exETEJluQQ2MDVcBRBFXlbDlkYLXRnFC2vBSt%2BIV5GPk6GtDoCY7r4vn3qZWRF5IynLXVHcJPO3d%2FPwbIxOunE2SYZVMGCxt1slaZqprDsjXvxuPSZk3YfZFxsStfe95oy5nfAqcRY%2FuVvUhfqUNwj77f0gGjbhzwZKTzXARvyHikncG8IUtRPgOklPk7o0DGyd%2BlvZ6%2BN1rKoPInWpCMcs90UIi3MVCKHZl9Nyz4A4A%2FSyCWnMF9c%2FWQbqB%2F3IxuBP7OZOXW1JiW5NQiBnMmvE5XD57JWjqJwCWzl%2F8TbV5GGOoMIMzxH4OhlLaWMqIJwCnZCEEJQvCtq59tFWOAAIzuQvzCS2IfCBjqkAajBcxTUtlIA0lGWf53FDyikFe6W5LEMgYqE4Hb6awtrvxVNaao1DBc55xt9QJzMpLK2b%2F7ySdji2FEYpE2p0MhMZ1JtJ%2F3qdRNkkK1m%2BV46%2BDDYRVWGt4Jo0Yox8Hzo%2B1f1X5%2F3uFdRM%2B33Cq9ePzV7ud75Fc40hIHXi%2BrzgnUhYMHO7i3hwc%2F9pUu5JCJytJKPfOGkRpDyKSO4N4yHKy7SxkGl&X-Amz-Signature=876699d40ee31a665252f7a48d7de61ed0bbc3bf5bb8f9dd30d0d46c9ae723a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYEVVT4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDSbZHb4XLD9DgF0s0AAmt6GDR0RiudQm0IushrfhnsyQIhANh7qvj76RTH7g2GdynOm21ZdBV3QycqMWVS4fac4%2BAhKv8DCEwQABoMNjM3NDIzMTgzODA1IgwF%2BkTvPWxl50SN904q3APpjnHMbrWqh3AG6nkLpN1v8njj%2BwyYXbcJQ3SRizI7hrqV%2FXIf014WDrHwec6tUQb8hlKA4bVc%2FBH%2FabA4AskAAktChrZ4HPsz1OHO%2BwqXjLHoS0dULx%2BhSOsfDTt%2FsFi8%2FiS9uQza2k%2F1eELg2inu1GIuxBg6xqTcuv0DeJbE%2FAc1xyltgh%2FXBwtHEZut2w0Of5Cg76eAfElIpQOmvx%2Byu1iSUpHfrnwxTQWlY6cWPebJnSU5RsCv8AYt95GgdIULOoS038iEwq8kTs3vcDBRaTm23zLfj9exETEJluQQ2MDVcBRBFXlbDlkYLXRnFC2vBSt%2BIV5GPk6GtDoCY7r4vn3qZWRF5IynLXVHcJPO3d%2FPwbIxOunE2SYZVMGCxt1slaZqprDsjXvxuPSZk3YfZFxsStfe95oy5nfAqcRY%2FuVvUhfqUNwj77f0gGjbhzwZKTzXARvyHikncG8IUtRPgOklPk7o0DGyd%2BlvZ6%2BN1rKoPInWpCMcs90UIi3MVCKHZl9Nyz4A4A%2FSyCWnMF9c%2FWQbqB%2F3IxuBP7OZOXW1JiW5NQiBnMmvE5XD57JWjqJwCWzl%2F8TbV5GGOoMIMzxH4OhlLaWMqIJwCnZCEEJQvCtq59tFWOAAIzuQvzCS2IfCBjqkAajBcxTUtlIA0lGWf53FDyikFe6W5LEMgYqE4Hb6awtrvxVNaao1DBc55xt9QJzMpLK2b%2F7ySdji2FEYpE2p0MhMZ1JtJ%2F3qdRNkkK1m%2BV46%2BDDYRVWGt4Jo0Yox8Hzo%2B1f1X5%2F3uFdRM%2B33Cq9ePzV7ud75Fc40hIHXi%2BrzgnUhYMHO7i3hwc%2F9pUu5JCJytJKPfOGkRpDyKSO4N4yHKy7SxkGl&X-Amz-Signature=c1c647baded4dbf0127a2b573755a3fcd2765cbfc7e3ebfd1e3ce7bc5054f174&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYEVVT4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDSbZHb4XLD9DgF0s0AAmt6GDR0RiudQm0IushrfhnsyQIhANh7qvj76RTH7g2GdynOm21ZdBV3QycqMWVS4fac4%2BAhKv8DCEwQABoMNjM3NDIzMTgzODA1IgwF%2BkTvPWxl50SN904q3APpjnHMbrWqh3AG6nkLpN1v8njj%2BwyYXbcJQ3SRizI7hrqV%2FXIf014WDrHwec6tUQb8hlKA4bVc%2FBH%2FabA4AskAAktChrZ4HPsz1OHO%2BwqXjLHoS0dULx%2BhSOsfDTt%2FsFi8%2FiS9uQza2k%2F1eELg2inu1GIuxBg6xqTcuv0DeJbE%2FAc1xyltgh%2FXBwtHEZut2w0Of5Cg76eAfElIpQOmvx%2Byu1iSUpHfrnwxTQWlY6cWPebJnSU5RsCv8AYt95GgdIULOoS038iEwq8kTs3vcDBRaTm23zLfj9exETEJluQQ2MDVcBRBFXlbDlkYLXRnFC2vBSt%2BIV5GPk6GtDoCY7r4vn3qZWRF5IynLXVHcJPO3d%2FPwbIxOunE2SYZVMGCxt1slaZqprDsjXvxuPSZk3YfZFxsStfe95oy5nfAqcRY%2FuVvUhfqUNwj77f0gGjbhzwZKTzXARvyHikncG8IUtRPgOklPk7o0DGyd%2BlvZ6%2BN1rKoPInWpCMcs90UIi3MVCKHZl9Nyz4A4A%2FSyCWnMF9c%2FWQbqB%2F3IxuBP7OZOXW1JiW5NQiBnMmvE5XD57JWjqJwCWzl%2F8TbV5GGOoMIMzxH4OhlLaWMqIJwCnZCEEJQvCtq59tFWOAAIzuQvzCS2IfCBjqkAajBcxTUtlIA0lGWf53FDyikFe6W5LEMgYqE4Hb6awtrvxVNaao1DBc55xt9QJzMpLK2b%2F7ySdji2FEYpE2p0MhMZ1JtJ%2F3qdRNkkK1m%2BV46%2BDDYRVWGt4Jo0Yox8Hzo%2B1f1X5%2F3uFdRM%2B33Cq9ePzV7ud75Fc40hIHXi%2BrzgnUhYMHO7i3hwc%2F9pUu5JCJytJKPfOGkRpDyKSO4N4yHKy7SxkGl&X-Amz-Signature=f7e0a625deafaa271c975d2ed454482030c5214c0300da169b285d1611e408d0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYEVVT4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDSbZHb4XLD9DgF0s0AAmt6GDR0RiudQm0IushrfhnsyQIhANh7qvj76RTH7g2GdynOm21ZdBV3QycqMWVS4fac4%2BAhKv8DCEwQABoMNjM3NDIzMTgzODA1IgwF%2BkTvPWxl50SN904q3APpjnHMbrWqh3AG6nkLpN1v8njj%2BwyYXbcJQ3SRizI7hrqV%2FXIf014WDrHwec6tUQb8hlKA4bVc%2FBH%2FabA4AskAAktChrZ4HPsz1OHO%2BwqXjLHoS0dULx%2BhSOsfDTt%2FsFi8%2FiS9uQza2k%2F1eELg2inu1GIuxBg6xqTcuv0DeJbE%2FAc1xyltgh%2FXBwtHEZut2w0Of5Cg76eAfElIpQOmvx%2Byu1iSUpHfrnwxTQWlY6cWPebJnSU5RsCv8AYt95GgdIULOoS038iEwq8kTs3vcDBRaTm23zLfj9exETEJluQQ2MDVcBRBFXlbDlkYLXRnFC2vBSt%2BIV5GPk6GtDoCY7r4vn3qZWRF5IynLXVHcJPO3d%2FPwbIxOunE2SYZVMGCxt1slaZqprDsjXvxuPSZk3YfZFxsStfe95oy5nfAqcRY%2FuVvUhfqUNwj77f0gGjbhzwZKTzXARvyHikncG8IUtRPgOklPk7o0DGyd%2BlvZ6%2BN1rKoPInWpCMcs90UIi3MVCKHZl9Nyz4A4A%2FSyCWnMF9c%2FWQbqB%2F3IxuBP7OZOXW1JiW5NQiBnMmvE5XD57JWjqJwCWzl%2F8TbV5GGOoMIMzxH4OhlLaWMqIJwCnZCEEJQvCtq59tFWOAAIzuQvzCS2IfCBjqkAajBcxTUtlIA0lGWf53FDyikFe6W5LEMgYqE4Hb6awtrvxVNaao1DBc55xt9QJzMpLK2b%2F7ySdji2FEYpE2p0MhMZ1JtJ%2F3qdRNkkK1m%2BV46%2BDDYRVWGt4Jo0Yox8Hzo%2B1f1X5%2F3uFdRM%2B33Cq9ePzV7ud75Fc40hIHXi%2BrzgnUhYMHO7i3hwc%2F9pUu5JCJytJKPfOGkRpDyKSO4N4yHKy7SxkGl&X-Amz-Signature=e9f5dd06992b55d6bb728052af0d10adbcc681b0147cf41bbc4ff46c668bb4ff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYEVVT4%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDSbZHb4XLD9DgF0s0AAmt6GDR0RiudQm0IushrfhnsyQIhANh7qvj76RTH7g2GdynOm21ZdBV3QycqMWVS4fac4%2BAhKv8DCEwQABoMNjM3NDIzMTgzODA1IgwF%2BkTvPWxl50SN904q3APpjnHMbrWqh3AG6nkLpN1v8njj%2BwyYXbcJQ3SRizI7hrqV%2FXIf014WDrHwec6tUQb8hlKA4bVc%2FBH%2FabA4AskAAktChrZ4HPsz1OHO%2BwqXjLHoS0dULx%2BhSOsfDTt%2FsFi8%2FiS9uQza2k%2F1eELg2inu1GIuxBg6xqTcuv0DeJbE%2FAc1xyltgh%2FXBwtHEZut2w0Of5Cg76eAfElIpQOmvx%2Byu1iSUpHfrnwxTQWlY6cWPebJnSU5RsCv8AYt95GgdIULOoS038iEwq8kTs3vcDBRaTm23zLfj9exETEJluQQ2MDVcBRBFXlbDlkYLXRnFC2vBSt%2BIV5GPk6GtDoCY7r4vn3qZWRF5IynLXVHcJPO3d%2FPwbIxOunE2SYZVMGCxt1slaZqprDsjXvxuPSZk3YfZFxsStfe95oy5nfAqcRY%2FuVvUhfqUNwj77f0gGjbhzwZKTzXARvyHikncG8IUtRPgOklPk7o0DGyd%2BlvZ6%2BN1rKoPInWpCMcs90UIi3MVCKHZl9Nyz4A4A%2FSyCWnMF9c%2FWQbqB%2F3IxuBP7OZOXW1JiW5NQiBnMmvE5XD57JWjqJwCWzl%2F8TbV5GGOoMIMzxH4OhlLaWMqIJwCnZCEEJQvCtq59tFWOAAIzuQvzCS2IfCBjqkAajBcxTUtlIA0lGWf53FDyikFe6W5LEMgYqE4Hb6awtrvxVNaao1DBc55xt9QJzMpLK2b%2F7ySdji2FEYpE2p0MhMZ1JtJ%2F3qdRNkkK1m%2BV46%2BDDYRVWGt4Jo0Yox8Hzo%2B1f1X5%2F3uFdRM%2B33Cq9ePzV7ud75Fc40hIHXi%2BrzgnUhYMHO7i3hwc%2F9pUu5JCJytJKPfOGkRpDyKSO4N4yHKy7SxkGl&X-Amz-Signature=a24c31ef05cad5b6b955a52dd32e10988bb5e9d954ac699dbe990b98ae2277ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
