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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOKXYE3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCfODqlSQmzZy7lIMUAlbSxbviv0T5xUR1wM8Tw%2F9h8ngIhAObvP2Kj6iOqdEfWIhAthoz0zyFTdIBkC%2Bvw7qP4q8sjKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h7OfD7bh4zwFVgIq3AO7%2BYLUWClCyEXStiuiSIYKLOc6wR8r7iwvF5sh9pf%2BGJh%2BKiBl%2FOA%2Bl6hEO9OQpxOj9TtdWJyQvu%2BNtIB36u%2F9kEjs1fuE1Gn5KZP71cyrSB%2BgCDDFr3HvLkYlF7IynJBJbAP7SUpNHw28HGFmMegr1rdHUhhBirC5U37gEK8QiNrhB22KAO4PrZ2q1ihmR8UM0P4bq4nGS%2FC33RCHnEKopI7Gzo%2BQQbkLFAOmV6ENo%2FSm5LIpo3QFNSUxbFxuAR2ckZkn3VANYO3afcwndfyzF1U7Tp9pe0MIoCz9DMudcbf%2F1X8qQr7ef%2BRfLCoiJuCmjQQSSqnArHJnhHc4e01lgM8fGZJTScwX7rsy5QV6%2Feqt6MLSPbry4jgIfkSHcMGIsYFPdxK7L2Zf89ocbIYAtdv0%2BypWNm5klrXOK6m3lQ7QE4AZ09MW7FMq%2Bv69sA294ARqTsdgMg9lJuU8xPzd4ENGO7F3FOY8tY%2FcsLdnA%2Bc7ticlg5VxEnXhnL3dOL4zZ4lxJy8wuhcOERAN8rih%2BCGqVRLrp%2BfClUc%2F5RJKlf6IBiEMfjpIadleS086qop%2FNwuUVkHRsKOGBNHJPF81RKfnaynT6P34E0O6YvjGJVIJGOMsflw1PLXIrTCkwvXBBjqkAbLID%2B3ubFpIM%2F37mpFH2BC0drv1u7zBLio6sOMc%2FBqSLX935vn4x2umbBfDFn%2Bs68mht3wQpVGAwZ%2F4iS2oeNq9J%2FHmkONUOK5hs%2F3b1GQK7r8rSKl3NdMSiBUWCSUeAA2UeCYX0AwV7eGqZw0eu70Jd%2FlmkcYQrbkSgRicJlz2%2FBX2OGcyk5l9CnmbbyOWgkI3fuLJ%2Fib6Cfaad%2FXEZ42cxZDy&X-Amz-Signature=3928cd1a57cd29206a93215c246e7c756a83112e1e696b433485c5ae89b01bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOKXYE3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCfODqlSQmzZy7lIMUAlbSxbviv0T5xUR1wM8Tw%2F9h8ngIhAObvP2Kj6iOqdEfWIhAthoz0zyFTdIBkC%2Bvw7qP4q8sjKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h7OfD7bh4zwFVgIq3AO7%2BYLUWClCyEXStiuiSIYKLOc6wR8r7iwvF5sh9pf%2BGJh%2BKiBl%2FOA%2Bl6hEO9OQpxOj9TtdWJyQvu%2BNtIB36u%2F9kEjs1fuE1Gn5KZP71cyrSB%2BgCDDFr3HvLkYlF7IynJBJbAP7SUpNHw28HGFmMegr1rdHUhhBirC5U37gEK8QiNrhB22KAO4PrZ2q1ihmR8UM0P4bq4nGS%2FC33RCHnEKopI7Gzo%2BQQbkLFAOmV6ENo%2FSm5LIpo3QFNSUxbFxuAR2ckZkn3VANYO3afcwndfyzF1U7Tp9pe0MIoCz9DMudcbf%2F1X8qQr7ef%2BRfLCoiJuCmjQQSSqnArHJnhHc4e01lgM8fGZJTScwX7rsy5QV6%2Feqt6MLSPbry4jgIfkSHcMGIsYFPdxK7L2Zf89ocbIYAtdv0%2BypWNm5klrXOK6m3lQ7QE4AZ09MW7FMq%2Bv69sA294ARqTsdgMg9lJuU8xPzd4ENGO7F3FOY8tY%2FcsLdnA%2Bc7ticlg5VxEnXhnL3dOL4zZ4lxJy8wuhcOERAN8rih%2BCGqVRLrp%2BfClUc%2F5RJKlf6IBiEMfjpIadleS086qop%2FNwuUVkHRsKOGBNHJPF81RKfnaynT6P34E0O6YvjGJVIJGOMsflw1PLXIrTCkwvXBBjqkAbLID%2B3ubFpIM%2F37mpFH2BC0drv1u7zBLio6sOMc%2FBqSLX935vn4x2umbBfDFn%2Bs68mht3wQpVGAwZ%2F4iS2oeNq9J%2FHmkONUOK5hs%2F3b1GQK7r8rSKl3NdMSiBUWCSUeAA2UeCYX0AwV7eGqZw0eu70Jd%2FlmkcYQrbkSgRicJlz2%2FBX2OGcyk5l9CnmbbyOWgkI3fuLJ%2Fib6Cfaad%2FXEZ42cxZDy&X-Amz-Signature=ee936f4fa549ee1fb1d22beb06f03dbf441b1a66bdc6c29cdd7c4afcbe1edb27&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOKXYE3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCfODqlSQmzZy7lIMUAlbSxbviv0T5xUR1wM8Tw%2F9h8ngIhAObvP2Kj6iOqdEfWIhAthoz0zyFTdIBkC%2Bvw7qP4q8sjKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h7OfD7bh4zwFVgIq3AO7%2BYLUWClCyEXStiuiSIYKLOc6wR8r7iwvF5sh9pf%2BGJh%2BKiBl%2FOA%2Bl6hEO9OQpxOj9TtdWJyQvu%2BNtIB36u%2F9kEjs1fuE1Gn5KZP71cyrSB%2BgCDDFr3HvLkYlF7IynJBJbAP7SUpNHw28HGFmMegr1rdHUhhBirC5U37gEK8QiNrhB22KAO4PrZ2q1ihmR8UM0P4bq4nGS%2FC33RCHnEKopI7Gzo%2BQQbkLFAOmV6ENo%2FSm5LIpo3QFNSUxbFxuAR2ckZkn3VANYO3afcwndfyzF1U7Tp9pe0MIoCz9DMudcbf%2F1X8qQr7ef%2BRfLCoiJuCmjQQSSqnArHJnhHc4e01lgM8fGZJTScwX7rsy5QV6%2Feqt6MLSPbry4jgIfkSHcMGIsYFPdxK7L2Zf89ocbIYAtdv0%2BypWNm5klrXOK6m3lQ7QE4AZ09MW7FMq%2Bv69sA294ARqTsdgMg9lJuU8xPzd4ENGO7F3FOY8tY%2FcsLdnA%2Bc7ticlg5VxEnXhnL3dOL4zZ4lxJy8wuhcOERAN8rih%2BCGqVRLrp%2BfClUc%2F5RJKlf6IBiEMfjpIadleS086qop%2FNwuUVkHRsKOGBNHJPF81RKfnaynT6P34E0O6YvjGJVIJGOMsflw1PLXIrTCkwvXBBjqkAbLID%2B3ubFpIM%2F37mpFH2BC0drv1u7zBLio6sOMc%2FBqSLX935vn4x2umbBfDFn%2Bs68mht3wQpVGAwZ%2F4iS2oeNq9J%2FHmkONUOK5hs%2F3b1GQK7r8rSKl3NdMSiBUWCSUeAA2UeCYX0AwV7eGqZw0eu70Jd%2FlmkcYQrbkSgRicJlz2%2FBX2OGcyk5l9CnmbbyOWgkI3fuLJ%2Fib6Cfaad%2FXEZ42cxZDy&X-Amz-Signature=13ec29d55e6392089bb783e507b8ba42fb02ddc0cd71a5ee7655953401f4c266&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOKXYE3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCfODqlSQmzZy7lIMUAlbSxbviv0T5xUR1wM8Tw%2F9h8ngIhAObvP2Kj6iOqdEfWIhAthoz0zyFTdIBkC%2Bvw7qP4q8sjKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h7OfD7bh4zwFVgIq3AO7%2BYLUWClCyEXStiuiSIYKLOc6wR8r7iwvF5sh9pf%2BGJh%2BKiBl%2FOA%2Bl6hEO9OQpxOj9TtdWJyQvu%2BNtIB36u%2F9kEjs1fuE1Gn5KZP71cyrSB%2BgCDDFr3HvLkYlF7IynJBJbAP7SUpNHw28HGFmMegr1rdHUhhBirC5U37gEK8QiNrhB22KAO4PrZ2q1ihmR8UM0P4bq4nGS%2FC33RCHnEKopI7Gzo%2BQQbkLFAOmV6ENo%2FSm5LIpo3QFNSUxbFxuAR2ckZkn3VANYO3afcwndfyzF1U7Tp9pe0MIoCz9DMudcbf%2F1X8qQr7ef%2BRfLCoiJuCmjQQSSqnArHJnhHc4e01lgM8fGZJTScwX7rsy5QV6%2Feqt6MLSPbry4jgIfkSHcMGIsYFPdxK7L2Zf89ocbIYAtdv0%2BypWNm5klrXOK6m3lQ7QE4AZ09MW7FMq%2Bv69sA294ARqTsdgMg9lJuU8xPzd4ENGO7F3FOY8tY%2FcsLdnA%2Bc7ticlg5VxEnXhnL3dOL4zZ4lxJy8wuhcOERAN8rih%2BCGqVRLrp%2BfClUc%2F5RJKlf6IBiEMfjpIadleS086qop%2FNwuUVkHRsKOGBNHJPF81RKfnaynT6P34E0O6YvjGJVIJGOMsflw1PLXIrTCkwvXBBjqkAbLID%2B3ubFpIM%2F37mpFH2BC0drv1u7zBLio6sOMc%2FBqSLX935vn4x2umbBfDFn%2Bs68mht3wQpVGAwZ%2F4iS2oeNq9J%2FHmkONUOK5hs%2F3b1GQK7r8rSKl3NdMSiBUWCSUeAA2UeCYX0AwV7eGqZw0eu70Jd%2FlmkcYQrbkSgRicJlz2%2FBX2OGcyk5l9CnmbbyOWgkI3fuLJ%2Fib6Cfaad%2FXEZ42cxZDy&X-Amz-Signature=ae52a22ffbf2b2171b5e536564e46816f97bf07ff5cdd38ba846ba056e53713a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOKXYE3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCfODqlSQmzZy7lIMUAlbSxbviv0T5xUR1wM8Tw%2F9h8ngIhAObvP2Kj6iOqdEfWIhAthoz0zyFTdIBkC%2Bvw7qP4q8sjKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h7OfD7bh4zwFVgIq3AO7%2BYLUWClCyEXStiuiSIYKLOc6wR8r7iwvF5sh9pf%2BGJh%2BKiBl%2FOA%2Bl6hEO9OQpxOj9TtdWJyQvu%2BNtIB36u%2F9kEjs1fuE1Gn5KZP71cyrSB%2BgCDDFr3HvLkYlF7IynJBJbAP7SUpNHw28HGFmMegr1rdHUhhBirC5U37gEK8QiNrhB22KAO4PrZ2q1ihmR8UM0P4bq4nGS%2FC33RCHnEKopI7Gzo%2BQQbkLFAOmV6ENo%2FSm5LIpo3QFNSUxbFxuAR2ckZkn3VANYO3afcwndfyzF1U7Tp9pe0MIoCz9DMudcbf%2F1X8qQr7ef%2BRfLCoiJuCmjQQSSqnArHJnhHc4e01lgM8fGZJTScwX7rsy5QV6%2Feqt6MLSPbry4jgIfkSHcMGIsYFPdxK7L2Zf89ocbIYAtdv0%2BypWNm5klrXOK6m3lQ7QE4AZ09MW7FMq%2Bv69sA294ARqTsdgMg9lJuU8xPzd4ENGO7F3FOY8tY%2FcsLdnA%2Bc7ticlg5VxEnXhnL3dOL4zZ4lxJy8wuhcOERAN8rih%2BCGqVRLrp%2BfClUc%2F5RJKlf6IBiEMfjpIadleS086qop%2FNwuUVkHRsKOGBNHJPF81RKfnaynT6P34E0O6YvjGJVIJGOMsflw1PLXIrTCkwvXBBjqkAbLID%2B3ubFpIM%2F37mpFH2BC0drv1u7zBLio6sOMc%2FBqSLX935vn4x2umbBfDFn%2Bs68mht3wQpVGAwZ%2F4iS2oeNq9J%2FHmkONUOK5hs%2F3b1GQK7r8rSKl3NdMSiBUWCSUeAA2UeCYX0AwV7eGqZw0eu70Jd%2FlmkcYQrbkSgRicJlz2%2FBX2OGcyk5l9CnmbbyOWgkI3fuLJ%2Fib6Cfaad%2FXEZ42cxZDy&X-Amz-Signature=780278d4a5863168c3558443189b7676a024ae7534233b5b2b84ef8d3143ef41&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOKXYE3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCfODqlSQmzZy7lIMUAlbSxbviv0T5xUR1wM8Tw%2F9h8ngIhAObvP2Kj6iOqdEfWIhAthoz0zyFTdIBkC%2Bvw7qP4q8sjKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h7OfD7bh4zwFVgIq3AO7%2BYLUWClCyEXStiuiSIYKLOc6wR8r7iwvF5sh9pf%2BGJh%2BKiBl%2FOA%2Bl6hEO9OQpxOj9TtdWJyQvu%2BNtIB36u%2F9kEjs1fuE1Gn5KZP71cyrSB%2BgCDDFr3HvLkYlF7IynJBJbAP7SUpNHw28HGFmMegr1rdHUhhBirC5U37gEK8QiNrhB22KAO4PrZ2q1ihmR8UM0P4bq4nGS%2FC33RCHnEKopI7Gzo%2BQQbkLFAOmV6ENo%2FSm5LIpo3QFNSUxbFxuAR2ckZkn3VANYO3afcwndfyzF1U7Tp9pe0MIoCz9DMudcbf%2F1X8qQr7ef%2BRfLCoiJuCmjQQSSqnArHJnhHc4e01lgM8fGZJTScwX7rsy5QV6%2Feqt6MLSPbry4jgIfkSHcMGIsYFPdxK7L2Zf89ocbIYAtdv0%2BypWNm5klrXOK6m3lQ7QE4AZ09MW7FMq%2Bv69sA294ARqTsdgMg9lJuU8xPzd4ENGO7F3FOY8tY%2FcsLdnA%2Bc7ticlg5VxEnXhnL3dOL4zZ4lxJy8wuhcOERAN8rih%2BCGqVRLrp%2BfClUc%2F5RJKlf6IBiEMfjpIadleS086qop%2FNwuUVkHRsKOGBNHJPF81RKfnaynT6P34E0O6YvjGJVIJGOMsflw1PLXIrTCkwvXBBjqkAbLID%2B3ubFpIM%2F37mpFH2BC0drv1u7zBLio6sOMc%2FBqSLX935vn4x2umbBfDFn%2Bs68mht3wQpVGAwZ%2F4iS2oeNq9J%2FHmkONUOK5hs%2F3b1GQK7r8rSKl3NdMSiBUWCSUeAA2UeCYX0AwV7eGqZw0eu70Jd%2FlmkcYQrbkSgRicJlz2%2FBX2OGcyk5l9CnmbbyOWgkI3fuLJ%2Fib6Cfaad%2FXEZ42cxZDy&X-Amz-Signature=eeff536888a5095e65d2b02aeedd556566a36282890883cd20c937b193fd391b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTOKXYE3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCfODqlSQmzZy7lIMUAlbSxbviv0T5xUR1wM8Tw%2F9h8ngIhAObvP2Kj6iOqdEfWIhAthoz0zyFTdIBkC%2Bvw7qP4q8sjKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0h7OfD7bh4zwFVgIq3AO7%2BYLUWClCyEXStiuiSIYKLOc6wR8r7iwvF5sh9pf%2BGJh%2BKiBl%2FOA%2Bl6hEO9OQpxOj9TtdWJyQvu%2BNtIB36u%2F9kEjs1fuE1Gn5KZP71cyrSB%2BgCDDFr3HvLkYlF7IynJBJbAP7SUpNHw28HGFmMegr1rdHUhhBirC5U37gEK8QiNrhB22KAO4PrZ2q1ihmR8UM0P4bq4nGS%2FC33RCHnEKopI7Gzo%2BQQbkLFAOmV6ENo%2FSm5LIpo3QFNSUxbFxuAR2ckZkn3VANYO3afcwndfyzF1U7Tp9pe0MIoCz9DMudcbf%2F1X8qQr7ef%2BRfLCoiJuCmjQQSSqnArHJnhHc4e01lgM8fGZJTScwX7rsy5QV6%2Feqt6MLSPbry4jgIfkSHcMGIsYFPdxK7L2Zf89ocbIYAtdv0%2BypWNm5klrXOK6m3lQ7QE4AZ09MW7FMq%2Bv69sA294ARqTsdgMg9lJuU8xPzd4ENGO7F3FOY8tY%2FcsLdnA%2Bc7ticlg5VxEnXhnL3dOL4zZ4lxJy8wuhcOERAN8rih%2BCGqVRLrp%2BfClUc%2F5RJKlf6IBiEMfjpIadleS086qop%2FNwuUVkHRsKOGBNHJPF81RKfnaynT6P34E0O6YvjGJVIJGOMsflw1PLXIrTCkwvXBBjqkAbLID%2B3ubFpIM%2F37mpFH2BC0drv1u7zBLio6sOMc%2FBqSLX935vn4x2umbBfDFn%2Bs68mht3wQpVGAwZ%2F4iS2oeNq9J%2FHmkONUOK5hs%2F3b1GQK7r8rSKl3NdMSiBUWCSUeAA2UeCYX0AwV7eGqZw0eu70Jd%2FlmkcYQrbkSgRicJlz2%2FBX2OGcyk5l9CnmbbyOWgkI3fuLJ%2Fib6Cfaad%2FXEZ42cxZDy&X-Amz-Signature=7ace8bcd30431c9d0166fb46d7ce9f669fb1f60ca237f39e920c3327f10a1204&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
