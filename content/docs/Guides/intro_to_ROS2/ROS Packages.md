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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWH6S2MS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAHY7GmZZ9iCJnHgay7qY1Fh82cJBfSLuR4sTjvQXI1SAiEAs0XM30cJrwdYlzkJEVAEh%2B%2BepD87XojCJrCymJGzKNYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcXKXUtc%2BH5JQ7S%2BSrcAywql8xEn3kB4B3mOtjr2b2Hz2%2FBGitQKpuEoaUxRA5oofWaYx8Za2%2F%2FCeEzfbzdT5m%2BSt7uz8ZtZybi0CBLhWN724vEfbVXwBD0eHde4TY8HU5BVt7PR0AcmWDCWDxTFMEwtM7mup7%2BjGVvWIpcMI4kEg0I%2BlH8UISeNvafp1C4e9fwZzeiFKfK5wcHKDRDA3n6rt5pXKkyEJauXa7ZtWlG6kTpaUppBLYraNLAR%2F6yrsdIhaxwrpEb4dbmolOTXUnNUH5tkWo72qlm%2Fdk2r6gZpKOLUKVXOqu0hr%2Few29OgLrIhWVbvVufvaZTeQBWReswQuX2Wxewfxl1RrwuXOcVcZXNGQuKaJaZawl%2FcqI99ybN9vdImRB7HOUQ%2Fxc4uQr805KquoIumepOpg8xDWMZVdwFl01PE9riAhOgM8W3Lqng6vTix%2FsWfo3GHd3S%2Fd89lHeO7AFLYKntDI%2FSjbHcpXz5sa%2BM9VSop6sGGEO9MwuGtWsQzeUVL7JBt3X%2FMmo8hxaXPF6ifuULlEqm2hhMcSF6tSn%2FB%2F%2FWPBF6geBf4LSqMppnQuE87%2BmiF5ocHzNdHLDnUmuB%2F1W%2F%2Fjh0Ly3BU6EvuoLLG0ZS%2FmAhVrLvodHc21wPtickC0jOMJXD4b8GOqUB1l%2FC3vGU3jGWCO%2FZD2vDAuq2DEaYBJpYwJR1Qilto%2FB0r2KBlmrHThFSG9QP7xfTk%2BFNfl3IMD6nEWXPdixQUZIQFh%2FdQ%2B9FvAHLviOOaGwZWvOmA8xTzYAEBL5M6x3ZHa9pHdGd0Fq52vn7g6OYg%2BrIKtz3R2JE2coYEO91a84SB1tZO8Z6QK2ifPPXgs7GZcP9puDcg0J%2Fn6NbUD8SV%2Fid7j%2B2&X-Amz-Signature=adeaadc71f274e9dce582e9332147fc24c4fe42f1c58dece9a183dfb3b46f623&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWH6S2MS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAHY7GmZZ9iCJnHgay7qY1Fh82cJBfSLuR4sTjvQXI1SAiEAs0XM30cJrwdYlzkJEVAEh%2B%2BepD87XojCJrCymJGzKNYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcXKXUtc%2BH5JQ7S%2BSrcAywql8xEn3kB4B3mOtjr2b2Hz2%2FBGitQKpuEoaUxRA5oofWaYx8Za2%2F%2FCeEzfbzdT5m%2BSt7uz8ZtZybi0CBLhWN724vEfbVXwBD0eHde4TY8HU5BVt7PR0AcmWDCWDxTFMEwtM7mup7%2BjGVvWIpcMI4kEg0I%2BlH8UISeNvafp1C4e9fwZzeiFKfK5wcHKDRDA3n6rt5pXKkyEJauXa7ZtWlG6kTpaUppBLYraNLAR%2F6yrsdIhaxwrpEb4dbmolOTXUnNUH5tkWo72qlm%2Fdk2r6gZpKOLUKVXOqu0hr%2Few29OgLrIhWVbvVufvaZTeQBWReswQuX2Wxewfxl1RrwuXOcVcZXNGQuKaJaZawl%2FcqI99ybN9vdImRB7HOUQ%2Fxc4uQr805KquoIumepOpg8xDWMZVdwFl01PE9riAhOgM8W3Lqng6vTix%2FsWfo3GHd3S%2Fd89lHeO7AFLYKntDI%2FSjbHcpXz5sa%2BM9VSop6sGGEO9MwuGtWsQzeUVL7JBt3X%2FMmo8hxaXPF6ifuULlEqm2hhMcSF6tSn%2FB%2F%2FWPBF6geBf4LSqMppnQuE87%2BmiF5ocHzNdHLDnUmuB%2F1W%2F%2Fjh0Ly3BU6EvuoLLG0ZS%2FmAhVrLvodHc21wPtickC0jOMJXD4b8GOqUB1l%2FC3vGU3jGWCO%2FZD2vDAuq2DEaYBJpYwJR1Qilto%2FB0r2KBlmrHThFSG9QP7xfTk%2BFNfl3IMD6nEWXPdixQUZIQFh%2FdQ%2B9FvAHLviOOaGwZWvOmA8xTzYAEBL5M6x3ZHa9pHdGd0Fq52vn7g6OYg%2BrIKtz3R2JE2coYEO91a84SB1tZO8Z6QK2ifPPXgs7GZcP9puDcg0J%2Fn6NbUD8SV%2Fid7j%2B2&X-Amz-Signature=6b3469b6b59fb322f2df4f31dd2ebd0880b0abdbc6158eb49010c42bcb31e313&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWH6S2MS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAHY7GmZZ9iCJnHgay7qY1Fh82cJBfSLuR4sTjvQXI1SAiEAs0XM30cJrwdYlzkJEVAEh%2B%2BepD87XojCJrCymJGzKNYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcXKXUtc%2BH5JQ7S%2BSrcAywql8xEn3kB4B3mOtjr2b2Hz2%2FBGitQKpuEoaUxRA5oofWaYx8Za2%2F%2FCeEzfbzdT5m%2BSt7uz8ZtZybi0CBLhWN724vEfbVXwBD0eHde4TY8HU5BVt7PR0AcmWDCWDxTFMEwtM7mup7%2BjGVvWIpcMI4kEg0I%2BlH8UISeNvafp1C4e9fwZzeiFKfK5wcHKDRDA3n6rt5pXKkyEJauXa7ZtWlG6kTpaUppBLYraNLAR%2F6yrsdIhaxwrpEb4dbmolOTXUnNUH5tkWo72qlm%2Fdk2r6gZpKOLUKVXOqu0hr%2Few29OgLrIhWVbvVufvaZTeQBWReswQuX2Wxewfxl1RrwuXOcVcZXNGQuKaJaZawl%2FcqI99ybN9vdImRB7HOUQ%2Fxc4uQr805KquoIumepOpg8xDWMZVdwFl01PE9riAhOgM8W3Lqng6vTix%2FsWfo3GHd3S%2Fd89lHeO7AFLYKntDI%2FSjbHcpXz5sa%2BM9VSop6sGGEO9MwuGtWsQzeUVL7JBt3X%2FMmo8hxaXPF6ifuULlEqm2hhMcSF6tSn%2FB%2F%2FWPBF6geBf4LSqMppnQuE87%2BmiF5ocHzNdHLDnUmuB%2F1W%2F%2Fjh0Ly3BU6EvuoLLG0ZS%2FmAhVrLvodHc21wPtickC0jOMJXD4b8GOqUB1l%2FC3vGU3jGWCO%2FZD2vDAuq2DEaYBJpYwJR1Qilto%2FB0r2KBlmrHThFSG9QP7xfTk%2BFNfl3IMD6nEWXPdixQUZIQFh%2FdQ%2B9FvAHLviOOaGwZWvOmA8xTzYAEBL5M6x3ZHa9pHdGd0Fq52vn7g6OYg%2BrIKtz3R2JE2coYEO91a84SB1tZO8Z6QK2ifPPXgs7GZcP9puDcg0J%2Fn6NbUD8SV%2Fid7j%2B2&X-Amz-Signature=634f3a56e09c3117e1040dbe40c9c4a445c3bdbe106a4efdc8c800911a8f51cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWH6S2MS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAHY7GmZZ9iCJnHgay7qY1Fh82cJBfSLuR4sTjvQXI1SAiEAs0XM30cJrwdYlzkJEVAEh%2B%2BepD87XojCJrCymJGzKNYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcXKXUtc%2BH5JQ7S%2BSrcAywql8xEn3kB4B3mOtjr2b2Hz2%2FBGitQKpuEoaUxRA5oofWaYx8Za2%2F%2FCeEzfbzdT5m%2BSt7uz8ZtZybi0CBLhWN724vEfbVXwBD0eHde4TY8HU5BVt7PR0AcmWDCWDxTFMEwtM7mup7%2BjGVvWIpcMI4kEg0I%2BlH8UISeNvafp1C4e9fwZzeiFKfK5wcHKDRDA3n6rt5pXKkyEJauXa7ZtWlG6kTpaUppBLYraNLAR%2F6yrsdIhaxwrpEb4dbmolOTXUnNUH5tkWo72qlm%2Fdk2r6gZpKOLUKVXOqu0hr%2Few29OgLrIhWVbvVufvaZTeQBWReswQuX2Wxewfxl1RrwuXOcVcZXNGQuKaJaZawl%2FcqI99ybN9vdImRB7HOUQ%2Fxc4uQr805KquoIumepOpg8xDWMZVdwFl01PE9riAhOgM8W3Lqng6vTix%2FsWfo3GHd3S%2Fd89lHeO7AFLYKntDI%2FSjbHcpXz5sa%2BM9VSop6sGGEO9MwuGtWsQzeUVL7JBt3X%2FMmo8hxaXPF6ifuULlEqm2hhMcSF6tSn%2FB%2F%2FWPBF6geBf4LSqMppnQuE87%2BmiF5ocHzNdHLDnUmuB%2F1W%2F%2Fjh0Ly3BU6EvuoLLG0ZS%2FmAhVrLvodHc21wPtickC0jOMJXD4b8GOqUB1l%2FC3vGU3jGWCO%2FZD2vDAuq2DEaYBJpYwJR1Qilto%2FB0r2KBlmrHThFSG9QP7xfTk%2BFNfl3IMD6nEWXPdixQUZIQFh%2FdQ%2B9FvAHLviOOaGwZWvOmA8xTzYAEBL5M6x3ZHa9pHdGd0Fq52vn7g6OYg%2BrIKtz3R2JE2coYEO91a84SB1tZO8Z6QK2ifPPXgs7GZcP9puDcg0J%2Fn6NbUD8SV%2Fid7j%2B2&X-Amz-Signature=08d4313867439fc330b62a53924846f9ee4a0d52b6981167054ba54674b01a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWH6S2MS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAHY7GmZZ9iCJnHgay7qY1Fh82cJBfSLuR4sTjvQXI1SAiEAs0XM30cJrwdYlzkJEVAEh%2B%2BepD87XojCJrCymJGzKNYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcXKXUtc%2BH5JQ7S%2BSrcAywql8xEn3kB4B3mOtjr2b2Hz2%2FBGitQKpuEoaUxRA5oofWaYx8Za2%2F%2FCeEzfbzdT5m%2BSt7uz8ZtZybi0CBLhWN724vEfbVXwBD0eHde4TY8HU5BVt7PR0AcmWDCWDxTFMEwtM7mup7%2BjGVvWIpcMI4kEg0I%2BlH8UISeNvafp1C4e9fwZzeiFKfK5wcHKDRDA3n6rt5pXKkyEJauXa7ZtWlG6kTpaUppBLYraNLAR%2F6yrsdIhaxwrpEb4dbmolOTXUnNUH5tkWo72qlm%2Fdk2r6gZpKOLUKVXOqu0hr%2Few29OgLrIhWVbvVufvaZTeQBWReswQuX2Wxewfxl1RrwuXOcVcZXNGQuKaJaZawl%2FcqI99ybN9vdImRB7HOUQ%2Fxc4uQr805KquoIumepOpg8xDWMZVdwFl01PE9riAhOgM8W3Lqng6vTix%2FsWfo3GHd3S%2Fd89lHeO7AFLYKntDI%2FSjbHcpXz5sa%2BM9VSop6sGGEO9MwuGtWsQzeUVL7JBt3X%2FMmo8hxaXPF6ifuULlEqm2hhMcSF6tSn%2FB%2F%2FWPBF6geBf4LSqMppnQuE87%2BmiF5ocHzNdHLDnUmuB%2F1W%2F%2Fjh0Ly3BU6EvuoLLG0ZS%2FmAhVrLvodHc21wPtickC0jOMJXD4b8GOqUB1l%2FC3vGU3jGWCO%2FZD2vDAuq2DEaYBJpYwJR1Qilto%2FB0r2KBlmrHThFSG9QP7xfTk%2BFNfl3IMD6nEWXPdixQUZIQFh%2FdQ%2B9FvAHLviOOaGwZWvOmA8xTzYAEBL5M6x3ZHa9pHdGd0Fq52vn7g6OYg%2BrIKtz3R2JE2coYEO91a84SB1tZO8Z6QK2ifPPXgs7GZcP9puDcg0J%2Fn6NbUD8SV%2Fid7j%2B2&X-Amz-Signature=4e3aa92246bc849e51b68cccd69b4e79ad2721db6cc7bcf3e656bc04a508737d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWH6S2MS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAHY7GmZZ9iCJnHgay7qY1Fh82cJBfSLuR4sTjvQXI1SAiEAs0XM30cJrwdYlzkJEVAEh%2B%2BepD87XojCJrCymJGzKNYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcXKXUtc%2BH5JQ7S%2BSrcAywql8xEn3kB4B3mOtjr2b2Hz2%2FBGitQKpuEoaUxRA5oofWaYx8Za2%2F%2FCeEzfbzdT5m%2BSt7uz8ZtZybi0CBLhWN724vEfbVXwBD0eHde4TY8HU5BVt7PR0AcmWDCWDxTFMEwtM7mup7%2BjGVvWIpcMI4kEg0I%2BlH8UISeNvafp1C4e9fwZzeiFKfK5wcHKDRDA3n6rt5pXKkyEJauXa7ZtWlG6kTpaUppBLYraNLAR%2F6yrsdIhaxwrpEb4dbmolOTXUnNUH5tkWo72qlm%2Fdk2r6gZpKOLUKVXOqu0hr%2Few29OgLrIhWVbvVufvaZTeQBWReswQuX2Wxewfxl1RrwuXOcVcZXNGQuKaJaZawl%2FcqI99ybN9vdImRB7HOUQ%2Fxc4uQr805KquoIumepOpg8xDWMZVdwFl01PE9riAhOgM8W3Lqng6vTix%2FsWfo3GHd3S%2Fd89lHeO7AFLYKntDI%2FSjbHcpXz5sa%2BM9VSop6sGGEO9MwuGtWsQzeUVL7JBt3X%2FMmo8hxaXPF6ifuULlEqm2hhMcSF6tSn%2FB%2F%2FWPBF6geBf4LSqMppnQuE87%2BmiF5ocHzNdHLDnUmuB%2F1W%2F%2Fjh0Ly3BU6EvuoLLG0ZS%2FmAhVrLvodHc21wPtickC0jOMJXD4b8GOqUB1l%2FC3vGU3jGWCO%2FZD2vDAuq2DEaYBJpYwJR1Qilto%2FB0r2KBlmrHThFSG9QP7xfTk%2BFNfl3IMD6nEWXPdixQUZIQFh%2FdQ%2B9FvAHLviOOaGwZWvOmA8xTzYAEBL5M6x3ZHa9pHdGd0Fq52vn7g6OYg%2BrIKtz3R2JE2coYEO91a84SB1tZO8Z6QK2ifPPXgs7GZcP9puDcg0J%2Fn6NbUD8SV%2Fid7j%2B2&X-Amz-Signature=758c5c4fa7e421cc3d38e89c4c746ca1665d72c05bb3452b74b20d33a2b14907&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWH6S2MS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAHY7GmZZ9iCJnHgay7qY1Fh82cJBfSLuR4sTjvQXI1SAiEAs0XM30cJrwdYlzkJEVAEh%2B%2BepD87XojCJrCymJGzKNYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcXKXUtc%2BH5JQ7S%2BSrcAywql8xEn3kB4B3mOtjr2b2Hz2%2FBGitQKpuEoaUxRA5oofWaYx8Za2%2F%2FCeEzfbzdT5m%2BSt7uz8ZtZybi0CBLhWN724vEfbVXwBD0eHde4TY8HU5BVt7PR0AcmWDCWDxTFMEwtM7mup7%2BjGVvWIpcMI4kEg0I%2BlH8UISeNvafp1C4e9fwZzeiFKfK5wcHKDRDA3n6rt5pXKkyEJauXa7ZtWlG6kTpaUppBLYraNLAR%2F6yrsdIhaxwrpEb4dbmolOTXUnNUH5tkWo72qlm%2Fdk2r6gZpKOLUKVXOqu0hr%2Few29OgLrIhWVbvVufvaZTeQBWReswQuX2Wxewfxl1RrwuXOcVcZXNGQuKaJaZawl%2FcqI99ybN9vdImRB7HOUQ%2Fxc4uQr805KquoIumepOpg8xDWMZVdwFl01PE9riAhOgM8W3Lqng6vTix%2FsWfo3GHd3S%2Fd89lHeO7AFLYKntDI%2FSjbHcpXz5sa%2BM9VSop6sGGEO9MwuGtWsQzeUVL7JBt3X%2FMmo8hxaXPF6ifuULlEqm2hhMcSF6tSn%2FB%2F%2FWPBF6geBf4LSqMppnQuE87%2BmiF5ocHzNdHLDnUmuB%2F1W%2F%2Fjh0Ly3BU6EvuoLLG0ZS%2FmAhVrLvodHc21wPtickC0jOMJXD4b8GOqUB1l%2FC3vGU3jGWCO%2FZD2vDAuq2DEaYBJpYwJR1Qilto%2FB0r2KBlmrHThFSG9QP7xfTk%2BFNfl3IMD6nEWXPdixQUZIQFh%2FdQ%2B9FvAHLviOOaGwZWvOmA8xTzYAEBL5M6x3ZHa9pHdGd0Fq52vn7g6OYg%2BrIKtz3R2JE2coYEO91a84SB1tZO8Z6QK2ifPPXgs7GZcP9puDcg0J%2Fn6NbUD8SV%2Fid7j%2B2&X-Amz-Signature=2e39a20f26d2da74e1dd3e0f783e6bf2ede45fd08ceb074270e35f8d2565c8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
