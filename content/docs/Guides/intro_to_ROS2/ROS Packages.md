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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHOVPLK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ4%2BOxjZKvxu8oorNd7jyTYY%2BM8aUlshYYhxlGVFEnZAiAGPi%2Fbw0OiKfp%2FSU6mYzI9oKUVUGUjL2Uvoa5MisKzKir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4z9GFsCWnU8OLB%2FxKtwDk%2Bc0Bc85hmrWTJemll3Et2QpojZdStlv%2FW5cQvoJ70CmEPOUEqgkZiHxAASL7J6Ozh%2F8CA%2FzCMPVKwOdOfV7xSJct%2FJc3XDcC6avR8rK6uWOHItXPSZF7IWGm4csD2Tv4F3m2leJTKJ8Th1OWulYvLXtv6G8UMNhLy66eO00jcckOw5YdJdaP3pR05hCm%2BIVI2PVQhYryNwNJC0UVEqSKVsofy4q5aktWmpLmen9ET75kGmtmngQyf5Xmk1Htdvq8yWrkZ3dM2tyKI%2BQeAonBbteQnYJIyaerCmGoX7T%2F1p3WjPLuE1JnkxMhx6gwo8ao2B0F7c5x4LhZYyA9%2FoYwUyUOxRV9C9AR1PAs99eVwBYY1%2BCwhzCISSOwfc7dLRsPBwqZpiniij1haq%2Facjq54ezIcDwBcM6qb5Syar1LxVlfhkGP13PIGVEuFd4vrKfCTVjdfGLglpawwngz%2FO3kaDxbECvqWpCplJJlLPnsFdhEAkqHARRrfli%2BtegNKk4lKdqVFEI1VJ3fm4gZquI7myP7DHOBGXFdPDGi6RoNxrjK2NBBUBPPV%2BBZBfS3kNuNApyOOFdsieAgiMpblJuV%2FEyFUDp9i2o0d0MBjs7kA%2FOMCzTOXsU%2FdgOwJYwgOWiwQY6pgHX93tIH6S%2FF%2B9dMDVWi7wo4r6sJkGLj1MgiPzw%2Bfd93gdpE9LPOTt9S63Y04pp6r3Oa9mYjDX%2FRpR3Gr3fau5QR9AJ1PHKgmByjftc%2FuDfndvCeBQDlNi90C7SzOAZdNC1%2Fe2UJSnybqUPyenUFieKD7vkTaZnVAq8UwCxiga%2FdqJNP7CeswxeCAY%2BY7nQ8Db1IcqRHqD4PcZ9cOyQmTWGA0%2F8a30F&X-Amz-Signature=a7fab8eb39c2def1d0b2ed856564c61bb532a26439753a94877cbcdd750fe06f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHOVPLK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ4%2BOxjZKvxu8oorNd7jyTYY%2BM8aUlshYYhxlGVFEnZAiAGPi%2Fbw0OiKfp%2FSU6mYzI9oKUVUGUjL2Uvoa5MisKzKir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4z9GFsCWnU8OLB%2FxKtwDk%2Bc0Bc85hmrWTJemll3Et2QpojZdStlv%2FW5cQvoJ70CmEPOUEqgkZiHxAASL7J6Ozh%2F8CA%2FzCMPVKwOdOfV7xSJct%2FJc3XDcC6avR8rK6uWOHItXPSZF7IWGm4csD2Tv4F3m2leJTKJ8Th1OWulYvLXtv6G8UMNhLy66eO00jcckOw5YdJdaP3pR05hCm%2BIVI2PVQhYryNwNJC0UVEqSKVsofy4q5aktWmpLmen9ET75kGmtmngQyf5Xmk1Htdvq8yWrkZ3dM2tyKI%2BQeAonBbteQnYJIyaerCmGoX7T%2F1p3WjPLuE1JnkxMhx6gwo8ao2B0F7c5x4LhZYyA9%2FoYwUyUOxRV9C9AR1PAs99eVwBYY1%2BCwhzCISSOwfc7dLRsPBwqZpiniij1haq%2Facjq54ezIcDwBcM6qb5Syar1LxVlfhkGP13PIGVEuFd4vrKfCTVjdfGLglpawwngz%2FO3kaDxbECvqWpCplJJlLPnsFdhEAkqHARRrfli%2BtegNKk4lKdqVFEI1VJ3fm4gZquI7myP7DHOBGXFdPDGi6RoNxrjK2NBBUBPPV%2BBZBfS3kNuNApyOOFdsieAgiMpblJuV%2FEyFUDp9i2o0d0MBjs7kA%2FOMCzTOXsU%2FdgOwJYwgOWiwQY6pgHX93tIH6S%2FF%2B9dMDVWi7wo4r6sJkGLj1MgiPzw%2Bfd93gdpE9LPOTt9S63Y04pp6r3Oa9mYjDX%2FRpR3Gr3fau5QR9AJ1PHKgmByjftc%2FuDfndvCeBQDlNi90C7SzOAZdNC1%2Fe2UJSnybqUPyenUFieKD7vkTaZnVAq8UwCxiga%2FdqJNP7CeswxeCAY%2BY7nQ8Db1IcqRHqD4PcZ9cOyQmTWGA0%2F8a30F&X-Amz-Signature=73b284470fcd28cf31ed0157ca73e96794779cd3bb6f3b159fd9308bda366313&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHOVPLK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ4%2BOxjZKvxu8oorNd7jyTYY%2BM8aUlshYYhxlGVFEnZAiAGPi%2Fbw0OiKfp%2FSU6mYzI9oKUVUGUjL2Uvoa5MisKzKir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4z9GFsCWnU8OLB%2FxKtwDk%2Bc0Bc85hmrWTJemll3Et2QpojZdStlv%2FW5cQvoJ70CmEPOUEqgkZiHxAASL7J6Ozh%2F8CA%2FzCMPVKwOdOfV7xSJct%2FJc3XDcC6avR8rK6uWOHItXPSZF7IWGm4csD2Tv4F3m2leJTKJ8Th1OWulYvLXtv6G8UMNhLy66eO00jcckOw5YdJdaP3pR05hCm%2BIVI2PVQhYryNwNJC0UVEqSKVsofy4q5aktWmpLmen9ET75kGmtmngQyf5Xmk1Htdvq8yWrkZ3dM2tyKI%2BQeAonBbteQnYJIyaerCmGoX7T%2F1p3WjPLuE1JnkxMhx6gwo8ao2B0F7c5x4LhZYyA9%2FoYwUyUOxRV9C9AR1PAs99eVwBYY1%2BCwhzCISSOwfc7dLRsPBwqZpiniij1haq%2Facjq54ezIcDwBcM6qb5Syar1LxVlfhkGP13PIGVEuFd4vrKfCTVjdfGLglpawwngz%2FO3kaDxbECvqWpCplJJlLPnsFdhEAkqHARRrfli%2BtegNKk4lKdqVFEI1VJ3fm4gZquI7myP7DHOBGXFdPDGi6RoNxrjK2NBBUBPPV%2BBZBfS3kNuNApyOOFdsieAgiMpblJuV%2FEyFUDp9i2o0d0MBjs7kA%2FOMCzTOXsU%2FdgOwJYwgOWiwQY6pgHX93tIH6S%2FF%2B9dMDVWi7wo4r6sJkGLj1MgiPzw%2Bfd93gdpE9LPOTt9S63Y04pp6r3Oa9mYjDX%2FRpR3Gr3fau5QR9AJ1PHKgmByjftc%2FuDfndvCeBQDlNi90C7SzOAZdNC1%2Fe2UJSnybqUPyenUFieKD7vkTaZnVAq8UwCxiga%2FdqJNP7CeswxeCAY%2BY7nQ8Db1IcqRHqD4PcZ9cOyQmTWGA0%2F8a30F&X-Amz-Signature=dc6bc10e7770204b24aa666875677f70ebc0dc9dd727a2855a982d4e1bfae5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHOVPLK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ4%2BOxjZKvxu8oorNd7jyTYY%2BM8aUlshYYhxlGVFEnZAiAGPi%2Fbw0OiKfp%2FSU6mYzI9oKUVUGUjL2Uvoa5MisKzKir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4z9GFsCWnU8OLB%2FxKtwDk%2Bc0Bc85hmrWTJemll3Et2QpojZdStlv%2FW5cQvoJ70CmEPOUEqgkZiHxAASL7J6Ozh%2F8CA%2FzCMPVKwOdOfV7xSJct%2FJc3XDcC6avR8rK6uWOHItXPSZF7IWGm4csD2Tv4F3m2leJTKJ8Th1OWulYvLXtv6G8UMNhLy66eO00jcckOw5YdJdaP3pR05hCm%2BIVI2PVQhYryNwNJC0UVEqSKVsofy4q5aktWmpLmen9ET75kGmtmngQyf5Xmk1Htdvq8yWrkZ3dM2tyKI%2BQeAonBbteQnYJIyaerCmGoX7T%2F1p3WjPLuE1JnkxMhx6gwo8ao2B0F7c5x4LhZYyA9%2FoYwUyUOxRV9C9AR1PAs99eVwBYY1%2BCwhzCISSOwfc7dLRsPBwqZpiniij1haq%2Facjq54ezIcDwBcM6qb5Syar1LxVlfhkGP13PIGVEuFd4vrKfCTVjdfGLglpawwngz%2FO3kaDxbECvqWpCplJJlLPnsFdhEAkqHARRrfli%2BtegNKk4lKdqVFEI1VJ3fm4gZquI7myP7DHOBGXFdPDGi6RoNxrjK2NBBUBPPV%2BBZBfS3kNuNApyOOFdsieAgiMpblJuV%2FEyFUDp9i2o0d0MBjs7kA%2FOMCzTOXsU%2FdgOwJYwgOWiwQY6pgHX93tIH6S%2FF%2B9dMDVWi7wo4r6sJkGLj1MgiPzw%2Bfd93gdpE9LPOTt9S63Y04pp6r3Oa9mYjDX%2FRpR3Gr3fau5QR9AJ1PHKgmByjftc%2FuDfndvCeBQDlNi90C7SzOAZdNC1%2Fe2UJSnybqUPyenUFieKD7vkTaZnVAq8UwCxiga%2FdqJNP7CeswxeCAY%2BY7nQ8Db1IcqRHqD4PcZ9cOyQmTWGA0%2F8a30F&X-Amz-Signature=54d2f50ef7edcde904c10ac072816c19c79acb1d469d69484f321ba275a0b3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHOVPLK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ4%2BOxjZKvxu8oorNd7jyTYY%2BM8aUlshYYhxlGVFEnZAiAGPi%2Fbw0OiKfp%2FSU6mYzI9oKUVUGUjL2Uvoa5MisKzKir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4z9GFsCWnU8OLB%2FxKtwDk%2Bc0Bc85hmrWTJemll3Et2QpojZdStlv%2FW5cQvoJ70CmEPOUEqgkZiHxAASL7J6Ozh%2F8CA%2FzCMPVKwOdOfV7xSJct%2FJc3XDcC6avR8rK6uWOHItXPSZF7IWGm4csD2Tv4F3m2leJTKJ8Th1OWulYvLXtv6G8UMNhLy66eO00jcckOw5YdJdaP3pR05hCm%2BIVI2PVQhYryNwNJC0UVEqSKVsofy4q5aktWmpLmen9ET75kGmtmngQyf5Xmk1Htdvq8yWrkZ3dM2tyKI%2BQeAonBbteQnYJIyaerCmGoX7T%2F1p3WjPLuE1JnkxMhx6gwo8ao2B0F7c5x4LhZYyA9%2FoYwUyUOxRV9C9AR1PAs99eVwBYY1%2BCwhzCISSOwfc7dLRsPBwqZpiniij1haq%2Facjq54ezIcDwBcM6qb5Syar1LxVlfhkGP13PIGVEuFd4vrKfCTVjdfGLglpawwngz%2FO3kaDxbECvqWpCplJJlLPnsFdhEAkqHARRrfli%2BtegNKk4lKdqVFEI1VJ3fm4gZquI7myP7DHOBGXFdPDGi6RoNxrjK2NBBUBPPV%2BBZBfS3kNuNApyOOFdsieAgiMpblJuV%2FEyFUDp9i2o0d0MBjs7kA%2FOMCzTOXsU%2FdgOwJYwgOWiwQY6pgHX93tIH6S%2FF%2B9dMDVWi7wo4r6sJkGLj1MgiPzw%2Bfd93gdpE9LPOTt9S63Y04pp6r3Oa9mYjDX%2FRpR3Gr3fau5QR9AJ1PHKgmByjftc%2FuDfndvCeBQDlNi90C7SzOAZdNC1%2Fe2UJSnybqUPyenUFieKD7vkTaZnVAq8UwCxiga%2FdqJNP7CeswxeCAY%2BY7nQ8Db1IcqRHqD4PcZ9cOyQmTWGA0%2F8a30F&X-Amz-Signature=893f70628347666b04a580724f17087294524d5440ae49c9a3e396b925b4df62&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHOVPLK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ4%2BOxjZKvxu8oorNd7jyTYY%2BM8aUlshYYhxlGVFEnZAiAGPi%2Fbw0OiKfp%2FSU6mYzI9oKUVUGUjL2Uvoa5MisKzKir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4z9GFsCWnU8OLB%2FxKtwDk%2Bc0Bc85hmrWTJemll3Et2QpojZdStlv%2FW5cQvoJ70CmEPOUEqgkZiHxAASL7J6Ozh%2F8CA%2FzCMPVKwOdOfV7xSJct%2FJc3XDcC6avR8rK6uWOHItXPSZF7IWGm4csD2Tv4F3m2leJTKJ8Th1OWulYvLXtv6G8UMNhLy66eO00jcckOw5YdJdaP3pR05hCm%2BIVI2PVQhYryNwNJC0UVEqSKVsofy4q5aktWmpLmen9ET75kGmtmngQyf5Xmk1Htdvq8yWrkZ3dM2tyKI%2BQeAonBbteQnYJIyaerCmGoX7T%2F1p3WjPLuE1JnkxMhx6gwo8ao2B0F7c5x4LhZYyA9%2FoYwUyUOxRV9C9AR1PAs99eVwBYY1%2BCwhzCISSOwfc7dLRsPBwqZpiniij1haq%2Facjq54ezIcDwBcM6qb5Syar1LxVlfhkGP13PIGVEuFd4vrKfCTVjdfGLglpawwngz%2FO3kaDxbECvqWpCplJJlLPnsFdhEAkqHARRrfli%2BtegNKk4lKdqVFEI1VJ3fm4gZquI7myP7DHOBGXFdPDGi6RoNxrjK2NBBUBPPV%2BBZBfS3kNuNApyOOFdsieAgiMpblJuV%2FEyFUDp9i2o0d0MBjs7kA%2FOMCzTOXsU%2FdgOwJYwgOWiwQY6pgHX93tIH6S%2FF%2B9dMDVWi7wo4r6sJkGLj1MgiPzw%2Bfd93gdpE9LPOTt9S63Y04pp6r3Oa9mYjDX%2FRpR3Gr3fau5QR9AJ1PHKgmByjftc%2FuDfndvCeBQDlNi90C7SzOAZdNC1%2Fe2UJSnybqUPyenUFieKD7vkTaZnVAq8UwCxiga%2FdqJNP7CeswxeCAY%2BY7nQ8Db1IcqRHqD4PcZ9cOyQmTWGA0%2F8a30F&X-Amz-Signature=c0e86bf69108c9b9efdaa5d3c93d3f5e5b8a9eedb730b35462d15867eb1dc439&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHOVPLK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ4%2BOxjZKvxu8oorNd7jyTYY%2BM8aUlshYYhxlGVFEnZAiAGPi%2Fbw0OiKfp%2FSU6mYzI9oKUVUGUjL2Uvoa5MisKzKir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4z9GFsCWnU8OLB%2FxKtwDk%2Bc0Bc85hmrWTJemll3Et2QpojZdStlv%2FW5cQvoJ70CmEPOUEqgkZiHxAASL7J6Ozh%2F8CA%2FzCMPVKwOdOfV7xSJct%2FJc3XDcC6avR8rK6uWOHItXPSZF7IWGm4csD2Tv4F3m2leJTKJ8Th1OWulYvLXtv6G8UMNhLy66eO00jcckOw5YdJdaP3pR05hCm%2BIVI2PVQhYryNwNJC0UVEqSKVsofy4q5aktWmpLmen9ET75kGmtmngQyf5Xmk1Htdvq8yWrkZ3dM2tyKI%2BQeAonBbteQnYJIyaerCmGoX7T%2F1p3WjPLuE1JnkxMhx6gwo8ao2B0F7c5x4LhZYyA9%2FoYwUyUOxRV9C9AR1PAs99eVwBYY1%2BCwhzCISSOwfc7dLRsPBwqZpiniij1haq%2Facjq54ezIcDwBcM6qb5Syar1LxVlfhkGP13PIGVEuFd4vrKfCTVjdfGLglpawwngz%2FO3kaDxbECvqWpCplJJlLPnsFdhEAkqHARRrfli%2BtegNKk4lKdqVFEI1VJ3fm4gZquI7myP7DHOBGXFdPDGi6RoNxrjK2NBBUBPPV%2BBZBfS3kNuNApyOOFdsieAgiMpblJuV%2FEyFUDp9i2o0d0MBjs7kA%2FOMCzTOXsU%2FdgOwJYwgOWiwQY6pgHX93tIH6S%2FF%2B9dMDVWi7wo4r6sJkGLj1MgiPzw%2Bfd93gdpE9LPOTt9S63Y04pp6r3Oa9mYjDX%2FRpR3Gr3fau5QR9AJ1PHKgmByjftc%2FuDfndvCeBQDlNi90C7SzOAZdNC1%2Fe2UJSnybqUPyenUFieKD7vkTaZnVAq8UwCxiga%2FdqJNP7CeswxeCAY%2BY7nQ8Db1IcqRHqD4PcZ9cOyQmTWGA0%2F8a30F&X-Amz-Signature=9f17860a834e81150aacdeeb29e0a03e5d588bb13e7d6972090b78eb29d3b6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
