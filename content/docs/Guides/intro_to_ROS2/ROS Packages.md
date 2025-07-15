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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2I72EG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCv8wmqiCXWWCTaepv6RWCK%2FT1CZPch%2BJF7ihSm7iFuXAIgQz1x0KuQyRSkDG0QmGyA%2F5%2FVgaxtfKj8lHPbkTx3Zjcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJGwSd0B8ZSilvvrqircAyqnkDFJZH2wA5zBHrVIBgflE4o0hGGqI0KcPrBk4WriKrAmc%2FkKjlO6MOwHmKs56pddHfR7m6JZn5yTUJk7YcH%2FqM1rf%2BczvgOJp4XObvHV2UOilv%2Fpxz5UixcCmIjRC4U1T5EQrVtye%2FsuwTZwcREeklCU54sgY1zbUDCaghp%2BWeUHqndsd1pf0uy1lO4Yp0kW5WSGOt6Y1UhX78f%2BBrk9lVJxVpfkBfysKGA%2FSJtH1dZyO06z3dPoyTS9BpWXKYcJFt29Mn%2FbXGB72ls8NvrSC%2ByPZeawMUN4ONFMqGhJoPtwCg%2Bp37nvS7GCHvKzyXrMsvdGq7Hm%2B364NjvV5onLzew34sqdo1m3wUlSw0MkcJwF5LJl17rg%2FNEQjYKs8wYSHzNWaz9HhYw%2Fzc93TH0%2FH0Nbrrmpe3Hln%2FeYYqwo8yyJ14v2M%2Be9WEoaCL8O2PY4FH3j8NDFCjImXt8xlGx0eF3mvaJWL7ARyNIJ6Upbg9dvCxA3XTXFGhgP0lZV4UwXYzmPl5xoNUOKwjPO9A9bmBLt%2BIOaP%2BIKcqNt9LbDiup%2BGiAySQW0oaZmC1G%2BLmsBrkmO2Q%2BMfuOIuOMzgnZsB6HB%2B5UO1Gend94wf4AdUnJUl5XdZMB2FrXJMPH22sMGOqUBvQABlKis6jGnsnwBcE%2FAtCqrFIZ%2BLpyNhCOf%2BT567X%2FsDz6FCgJtiu9OgN9R5bs3tQzaGpdURpNBXAULAkYGWZggv7cIVHUz17nruBoWzx3SvnNh2KmOStf7CbaAmFaIhBW6saW2gXAqYo2PLGmWMtNT0q0KMXG6nMiesJ80K%2BeIVCbTLunyfBS0QDi1RHD7Jg44MaCDwp6BB264kqYJnqbMwHlG&X-Amz-Signature=233b58e91f61a6e0eab16baddda1610e5a46307aef304f566acf0d2c51d7c9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2I72EG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCv8wmqiCXWWCTaepv6RWCK%2FT1CZPch%2BJF7ihSm7iFuXAIgQz1x0KuQyRSkDG0QmGyA%2F5%2FVgaxtfKj8lHPbkTx3Zjcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJGwSd0B8ZSilvvrqircAyqnkDFJZH2wA5zBHrVIBgflE4o0hGGqI0KcPrBk4WriKrAmc%2FkKjlO6MOwHmKs56pddHfR7m6JZn5yTUJk7YcH%2FqM1rf%2BczvgOJp4XObvHV2UOilv%2Fpxz5UixcCmIjRC4U1T5EQrVtye%2FsuwTZwcREeklCU54sgY1zbUDCaghp%2BWeUHqndsd1pf0uy1lO4Yp0kW5WSGOt6Y1UhX78f%2BBrk9lVJxVpfkBfysKGA%2FSJtH1dZyO06z3dPoyTS9BpWXKYcJFt29Mn%2FbXGB72ls8NvrSC%2ByPZeawMUN4ONFMqGhJoPtwCg%2Bp37nvS7GCHvKzyXrMsvdGq7Hm%2B364NjvV5onLzew34sqdo1m3wUlSw0MkcJwF5LJl17rg%2FNEQjYKs8wYSHzNWaz9HhYw%2Fzc93TH0%2FH0Nbrrmpe3Hln%2FeYYqwo8yyJ14v2M%2Be9WEoaCL8O2PY4FH3j8NDFCjImXt8xlGx0eF3mvaJWL7ARyNIJ6Upbg9dvCxA3XTXFGhgP0lZV4UwXYzmPl5xoNUOKwjPO9A9bmBLt%2BIOaP%2BIKcqNt9LbDiup%2BGiAySQW0oaZmC1G%2BLmsBrkmO2Q%2BMfuOIuOMzgnZsB6HB%2B5UO1Gend94wf4AdUnJUl5XdZMB2FrXJMPH22sMGOqUBvQABlKis6jGnsnwBcE%2FAtCqrFIZ%2BLpyNhCOf%2BT567X%2FsDz6FCgJtiu9OgN9R5bs3tQzaGpdURpNBXAULAkYGWZggv7cIVHUz17nruBoWzx3SvnNh2KmOStf7CbaAmFaIhBW6saW2gXAqYo2PLGmWMtNT0q0KMXG6nMiesJ80K%2BeIVCbTLunyfBS0QDi1RHD7Jg44MaCDwp6BB264kqYJnqbMwHlG&X-Amz-Signature=420db450089b16e6362241f542f4772d8b02ddfa3803c0dcd91664a10da24360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2I72EG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCv8wmqiCXWWCTaepv6RWCK%2FT1CZPch%2BJF7ihSm7iFuXAIgQz1x0KuQyRSkDG0QmGyA%2F5%2FVgaxtfKj8lHPbkTx3Zjcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJGwSd0B8ZSilvvrqircAyqnkDFJZH2wA5zBHrVIBgflE4o0hGGqI0KcPrBk4WriKrAmc%2FkKjlO6MOwHmKs56pddHfR7m6JZn5yTUJk7YcH%2FqM1rf%2BczvgOJp4XObvHV2UOilv%2Fpxz5UixcCmIjRC4U1T5EQrVtye%2FsuwTZwcREeklCU54sgY1zbUDCaghp%2BWeUHqndsd1pf0uy1lO4Yp0kW5WSGOt6Y1UhX78f%2BBrk9lVJxVpfkBfysKGA%2FSJtH1dZyO06z3dPoyTS9BpWXKYcJFt29Mn%2FbXGB72ls8NvrSC%2ByPZeawMUN4ONFMqGhJoPtwCg%2Bp37nvS7GCHvKzyXrMsvdGq7Hm%2B364NjvV5onLzew34sqdo1m3wUlSw0MkcJwF5LJl17rg%2FNEQjYKs8wYSHzNWaz9HhYw%2Fzc93TH0%2FH0Nbrrmpe3Hln%2FeYYqwo8yyJ14v2M%2Be9WEoaCL8O2PY4FH3j8NDFCjImXt8xlGx0eF3mvaJWL7ARyNIJ6Upbg9dvCxA3XTXFGhgP0lZV4UwXYzmPl5xoNUOKwjPO9A9bmBLt%2BIOaP%2BIKcqNt9LbDiup%2BGiAySQW0oaZmC1G%2BLmsBrkmO2Q%2BMfuOIuOMzgnZsB6HB%2B5UO1Gend94wf4AdUnJUl5XdZMB2FrXJMPH22sMGOqUBvQABlKis6jGnsnwBcE%2FAtCqrFIZ%2BLpyNhCOf%2BT567X%2FsDz6FCgJtiu9OgN9R5bs3tQzaGpdURpNBXAULAkYGWZggv7cIVHUz17nruBoWzx3SvnNh2KmOStf7CbaAmFaIhBW6saW2gXAqYo2PLGmWMtNT0q0KMXG6nMiesJ80K%2BeIVCbTLunyfBS0QDi1RHD7Jg44MaCDwp6BB264kqYJnqbMwHlG&X-Amz-Signature=eeb8afd12e2bde8e719e8e38d20bc17a46e9fba706008bbdde8d3e4e2aa2a540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2I72EG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCv8wmqiCXWWCTaepv6RWCK%2FT1CZPch%2BJF7ihSm7iFuXAIgQz1x0KuQyRSkDG0QmGyA%2F5%2FVgaxtfKj8lHPbkTx3Zjcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJGwSd0B8ZSilvvrqircAyqnkDFJZH2wA5zBHrVIBgflE4o0hGGqI0KcPrBk4WriKrAmc%2FkKjlO6MOwHmKs56pddHfR7m6JZn5yTUJk7YcH%2FqM1rf%2BczvgOJp4XObvHV2UOilv%2Fpxz5UixcCmIjRC4U1T5EQrVtye%2FsuwTZwcREeklCU54sgY1zbUDCaghp%2BWeUHqndsd1pf0uy1lO4Yp0kW5WSGOt6Y1UhX78f%2BBrk9lVJxVpfkBfysKGA%2FSJtH1dZyO06z3dPoyTS9BpWXKYcJFt29Mn%2FbXGB72ls8NvrSC%2ByPZeawMUN4ONFMqGhJoPtwCg%2Bp37nvS7GCHvKzyXrMsvdGq7Hm%2B364NjvV5onLzew34sqdo1m3wUlSw0MkcJwF5LJl17rg%2FNEQjYKs8wYSHzNWaz9HhYw%2Fzc93TH0%2FH0Nbrrmpe3Hln%2FeYYqwo8yyJ14v2M%2Be9WEoaCL8O2PY4FH3j8NDFCjImXt8xlGx0eF3mvaJWL7ARyNIJ6Upbg9dvCxA3XTXFGhgP0lZV4UwXYzmPl5xoNUOKwjPO9A9bmBLt%2BIOaP%2BIKcqNt9LbDiup%2BGiAySQW0oaZmC1G%2BLmsBrkmO2Q%2BMfuOIuOMzgnZsB6HB%2B5UO1Gend94wf4AdUnJUl5XdZMB2FrXJMPH22sMGOqUBvQABlKis6jGnsnwBcE%2FAtCqrFIZ%2BLpyNhCOf%2BT567X%2FsDz6FCgJtiu9OgN9R5bs3tQzaGpdURpNBXAULAkYGWZggv7cIVHUz17nruBoWzx3SvnNh2KmOStf7CbaAmFaIhBW6saW2gXAqYo2PLGmWMtNT0q0KMXG6nMiesJ80K%2BeIVCbTLunyfBS0QDi1RHD7Jg44MaCDwp6BB264kqYJnqbMwHlG&X-Amz-Signature=63b483d9898aed5af0402cf5f4a25af0e7766962163db5d4e1ea1e9909822c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2I72EG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCv8wmqiCXWWCTaepv6RWCK%2FT1CZPch%2BJF7ihSm7iFuXAIgQz1x0KuQyRSkDG0QmGyA%2F5%2FVgaxtfKj8lHPbkTx3Zjcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJGwSd0B8ZSilvvrqircAyqnkDFJZH2wA5zBHrVIBgflE4o0hGGqI0KcPrBk4WriKrAmc%2FkKjlO6MOwHmKs56pddHfR7m6JZn5yTUJk7YcH%2FqM1rf%2BczvgOJp4XObvHV2UOilv%2Fpxz5UixcCmIjRC4U1T5EQrVtye%2FsuwTZwcREeklCU54sgY1zbUDCaghp%2BWeUHqndsd1pf0uy1lO4Yp0kW5WSGOt6Y1UhX78f%2BBrk9lVJxVpfkBfysKGA%2FSJtH1dZyO06z3dPoyTS9BpWXKYcJFt29Mn%2FbXGB72ls8NvrSC%2ByPZeawMUN4ONFMqGhJoPtwCg%2Bp37nvS7GCHvKzyXrMsvdGq7Hm%2B364NjvV5onLzew34sqdo1m3wUlSw0MkcJwF5LJl17rg%2FNEQjYKs8wYSHzNWaz9HhYw%2Fzc93TH0%2FH0Nbrrmpe3Hln%2FeYYqwo8yyJ14v2M%2Be9WEoaCL8O2PY4FH3j8NDFCjImXt8xlGx0eF3mvaJWL7ARyNIJ6Upbg9dvCxA3XTXFGhgP0lZV4UwXYzmPl5xoNUOKwjPO9A9bmBLt%2BIOaP%2BIKcqNt9LbDiup%2BGiAySQW0oaZmC1G%2BLmsBrkmO2Q%2BMfuOIuOMzgnZsB6HB%2B5UO1Gend94wf4AdUnJUl5XdZMB2FrXJMPH22sMGOqUBvQABlKis6jGnsnwBcE%2FAtCqrFIZ%2BLpyNhCOf%2BT567X%2FsDz6FCgJtiu9OgN9R5bs3tQzaGpdURpNBXAULAkYGWZggv7cIVHUz17nruBoWzx3SvnNh2KmOStf7CbaAmFaIhBW6saW2gXAqYo2PLGmWMtNT0q0KMXG6nMiesJ80K%2BeIVCbTLunyfBS0QDi1RHD7Jg44MaCDwp6BB264kqYJnqbMwHlG&X-Amz-Signature=560b810ad09eab4732f80bd48577c95860420f009726c8c159211167a3faa154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2I72EG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCv8wmqiCXWWCTaepv6RWCK%2FT1CZPch%2BJF7ihSm7iFuXAIgQz1x0KuQyRSkDG0QmGyA%2F5%2FVgaxtfKj8lHPbkTx3Zjcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJGwSd0B8ZSilvvrqircAyqnkDFJZH2wA5zBHrVIBgflE4o0hGGqI0KcPrBk4WriKrAmc%2FkKjlO6MOwHmKs56pddHfR7m6JZn5yTUJk7YcH%2FqM1rf%2BczvgOJp4XObvHV2UOilv%2Fpxz5UixcCmIjRC4U1T5EQrVtye%2FsuwTZwcREeklCU54sgY1zbUDCaghp%2BWeUHqndsd1pf0uy1lO4Yp0kW5WSGOt6Y1UhX78f%2BBrk9lVJxVpfkBfysKGA%2FSJtH1dZyO06z3dPoyTS9BpWXKYcJFt29Mn%2FbXGB72ls8NvrSC%2ByPZeawMUN4ONFMqGhJoPtwCg%2Bp37nvS7GCHvKzyXrMsvdGq7Hm%2B364NjvV5onLzew34sqdo1m3wUlSw0MkcJwF5LJl17rg%2FNEQjYKs8wYSHzNWaz9HhYw%2Fzc93TH0%2FH0Nbrrmpe3Hln%2FeYYqwo8yyJ14v2M%2Be9WEoaCL8O2PY4FH3j8NDFCjImXt8xlGx0eF3mvaJWL7ARyNIJ6Upbg9dvCxA3XTXFGhgP0lZV4UwXYzmPl5xoNUOKwjPO9A9bmBLt%2BIOaP%2BIKcqNt9LbDiup%2BGiAySQW0oaZmC1G%2BLmsBrkmO2Q%2BMfuOIuOMzgnZsB6HB%2B5UO1Gend94wf4AdUnJUl5XdZMB2FrXJMPH22sMGOqUBvQABlKis6jGnsnwBcE%2FAtCqrFIZ%2BLpyNhCOf%2BT567X%2FsDz6FCgJtiu9OgN9R5bs3tQzaGpdURpNBXAULAkYGWZggv7cIVHUz17nruBoWzx3SvnNh2KmOStf7CbaAmFaIhBW6saW2gXAqYo2PLGmWMtNT0q0KMXG6nMiesJ80K%2BeIVCbTLunyfBS0QDi1RHD7Jg44MaCDwp6BB264kqYJnqbMwHlG&X-Amz-Signature=47541d3b307246ddd47542143f9f43cc8ebfa9aa013f065b5d5bf899bc069fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2I72EG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCv8wmqiCXWWCTaepv6RWCK%2FT1CZPch%2BJF7ihSm7iFuXAIgQz1x0KuQyRSkDG0QmGyA%2F5%2FVgaxtfKj8lHPbkTx3Zjcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDJGwSd0B8ZSilvvrqircAyqnkDFJZH2wA5zBHrVIBgflE4o0hGGqI0KcPrBk4WriKrAmc%2FkKjlO6MOwHmKs56pddHfR7m6JZn5yTUJk7YcH%2FqM1rf%2BczvgOJp4XObvHV2UOilv%2Fpxz5UixcCmIjRC4U1T5EQrVtye%2FsuwTZwcREeklCU54sgY1zbUDCaghp%2BWeUHqndsd1pf0uy1lO4Yp0kW5WSGOt6Y1UhX78f%2BBrk9lVJxVpfkBfysKGA%2FSJtH1dZyO06z3dPoyTS9BpWXKYcJFt29Mn%2FbXGB72ls8NvrSC%2ByPZeawMUN4ONFMqGhJoPtwCg%2Bp37nvS7GCHvKzyXrMsvdGq7Hm%2B364NjvV5onLzew34sqdo1m3wUlSw0MkcJwF5LJl17rg%2FNEQjYKs8wYSHzNWaz9HhYw%2Fzc93TH0%2FH0Nbrrmpe3Hln%2FeYYqwo8yyJ14v2M%2Be9WEoaCL8O2PY4FH3j8NDFCjImXt8xlGx0eF3mvaJWL7ARyNIJ6Upbg9dvCxA3XTXFGhgP0lZV4UwXYzmPl5xoNUOKwjPO9A9bmBLt%2BIOaP%2BIKcqNt9LbDiup%2BGiAySQW0oaZmC1G%2BLmsBrkmO2Q%2BMfuOIuOMzgnZsB6HB%2B5UO1Gend94wf4AdUnJUl5XdZMB2FrXJMPH22sMGOqUBvQABlKis6jGnsnwBcE%2FAtCqrFIZ%2BLpyNhCOf%2BT567X%2FsDz6FCgJtiu9OgN9R5bs3tQzaGpdURpNBXAULAkYGWZggv7cIVHUz17nruBoWzx3SvnNh2KmOStf7CbaAmFaIhBW6saW2gXAqYo2PLGmWMtNT0q0KMXG6nMiesJ80K%2BeIVCbTLunyfBS0QDi1RHD7Jg44MaCDwp6BB264kqYJnqbMwHlG&X-Amz-Signature=01b69c69f4e2d555483ab09a0da0fcd0577e6503fd1f40ab94d30c917ac30202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
