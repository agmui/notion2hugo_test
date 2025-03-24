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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL45YZLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaLCcTlUkTUqVkYsc2zJAGdUEkXtJp8R2KXjYKpIN9AiAJWFrmgDqP7kqRJw30QkLRWpFITSp75g0p%2B5OwZDKugSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19ypkyx5CwWkvS2MKtwDOJRAhxaOzWimu7ELx1FnlWbomO%2Fbo%2FG05o8l2AS72NekI0YdiLwUzFwdl89ZeJvaWwvnTDY31JQFl9DompOBcAxXpell7y7N1t0oaHg5K3XbsiS5iDAGb2llvXNa0hMJXoaR067uNDzdy8VzFaipgHhGwXxSZgRCVw3CovhwhavwzmOfPDigUFthRXYugNjxciMeYL7ZJ3C4z8rtBs7qZqxFM962KzLHz%2F6rbmHxcpluE3C%2BURL6RuWS%2FzD%2FVgzazMoUEw1KTSq6Iq95C9UKy%2FmScslMxmVGBqjXTgLorajqoeh5V49FqXQRqLOJAnzCJ%2FFpSofhO3MoksaNHaH%2Bn3WX4FiBWkXu5Ny3M70tPWEW329vt3BNMj%2FjxwstO9JFA06YMCQzfPHDckom5dHKwU5hQcWNPdYT2%2FHUEVvoaGgfgCl7Tg%2FH%2BbYopRFUVI9903vQCOOhDqXvfQQdVLr24c9wjxloo04UTZl9CJZiqI0nf%2BoJXwHRkydzWKvKKMzVP0pkBrZzehiVxBI3dHnI48kOrFy%2BsjDOjgTkBUCNXxCrTJzrxPZuaZclNVBa82uUcyST3kI1AxTDfsTt8uapJ8DeChZ2FS4p4chhePgwwWtigusxwUS7k9MjZWowmbGCvwY6pgHQpjzwiT3rgw31jxKoJZXMqJBs9VIdD7qzWqvtkgisGgbHMuFdVSHd4VuO78cQo%2FBviNuZU5sA3FjNy1lwq9n%2B7Ur8i9yDs5U%2BrKq3tWnB4bGs%2FF2FC73phb%2BQk6ZKpJRJO0ralN8KytVurdM1rhL5jacw0XyDCwBx5oidbPqJNiH1d4faPGBwOLhlJu96b9oNk6Pjgzv0zd%2BA9sBJGbBdDK4Qzh%2Fl&X-Amz-Signature=d3d44e76e1a87407d788e6abb332bfd630051e4fbf1fa7d098f1e9f9bfb06c61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL45YZLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaLCcTlUkTUqVkYsc2zJAGdUEkXtJp8R2KXjYKpIN9AiAJWFrmgDqP7kqRJw30QkLRWpFITSp75g0p%2B5OwZDKugSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19ypkyx5CwWkvS2MKtwDOJRAhxaOzWimu7ELx1FnlWbomO%2Fbo%2FG05o8l2AS72NekI0YdiLwUzFwdl89ZeJvaWwvnTDY31JQFl9DompOBcAxXpell7y7N1t0oaHg5K3XbsiS5iDAGb2llvXNa0hMJXoaR067uNDzdy8VzFaipgHhGwXxSZgRCVw3CovhwhavwzmOfPDigUFthRXYugNjxciMeYL7ZJ3C4z8rtBs7qZqxFM962KzLHz%2F6rbmHxcpluE3C%2BURL6RuWS%2FzD%2FVgzazMoUEw1KTSq6Iq95C9UKy%2FmScslMxmVGBqjXTgLorajqoeh5V49FqXQRqLOJAnzCJ%2FFpSofhO3MoksaNHaH%2Bn3WX4FiBWkXu5Ny3M70tPWEW329vt3BNMj%2FjxwstO9JFA06YMCQzfPHDckom5dHKwU5hQcWNPdYT2%2FHUEVvoaGgfgCl7Tg%2FH%2BbYopRFUVI9903vQCOOhDqXvfQQdVLr24c9wjxloo04UTZl9CJZiqI0nf%2BoJXwHRkydzWKvKKMzVP0pkBrZzehiVxBI3dHnI48kOrFy%2BsjDOjgTkBUCNXxCrTJzrxPZuaZclNVBa82uUcyST3kI1AxTDfsTt8uapJ8DeChZ2FS4p4chhePgwwWtigusxwUS7k9MjZWowmbGCvwY6pgHQpjzwiT3rgw31jxKoJZXMqJBs9VIdD7qzWqvtkgisGgbHMuFdVSHd4VuO78cQo%2FBviNuZU5sA3FjNy1lwq9n%2B7Ur8i9yDs5U%2BrKq3tWnB4bGs%2FF2FC73phb%2BQk6ZKpJRJO0ralN8KytVurdM1rhL5jacw0XyDCwBx5oidbPqJNiH1d4faPGBwOLhlJu96b9oNk6Pjgzv0zd%2BA9sBJGbBdDK4Qzh%2Fl&X-Amz-Signature=1fdfd01e7fb92c61ab4bfb067ae698688de3696db59c9b97216ebf4a81b3d60a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL45YZLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaLCcTlUkTUqVkYsc2zJAGdUEkXtJp8R2KXjYKpIN9AiAJWFrmgDqP7kqRJw30QkLRWpFITSp75g0p%2B5OwZDKugSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19ypkyx5CwWkvS2MKtwDOJRAhxaOzWimu7ELx1FnlWbomO%2Fbo%2FG05o8l2AS72NekI0YdiLwUzFwdl89ZeJvaWwvnTDY31JQFl9DompOBcAxXpell7y7N1t0oaHg5K3XbsiS5iDAGb2llvXNa0hMJXoaR067uNDzdy8VzFaipgHhGwXxSZgRCVw3CovhwhavwzmOfPDigUFthRXYugNjxciMeYL7ZJ3C4z8rtBs7qZqxFM962KzLHz%2F6rbmHxcpluE3C%2BURL6RuWS%2FzD%2FVgzazMoUEw1KTSq6Iq95C9UKy%2FmScslMxmVGBqjXTgLorajqoeh5V49FqXQRqLOJAnzCJ%2FFpSofhO3MoksaNHaH%2Bn3WX4FiBWkXu5Ny3M70tPWEW329vt3BNMj%2FjxwstO9JFA06YMCQzfPHDckom5dHKwU5hQcWNPdYT2%2FHUEVvoaGgfgCl7Tg%2FH%2BbYopRFUVI9903vQCOOhDqXvfQQdVLr24c9wjxloo04UTZl9CJZiqI0nf%2BoJXwHRkydzWKvKKMzVP0pkBrZzehiVxBI3dHnI48kOrFy%2BsjDOjgTkBUCNXxCrTJzrxPZuaZclNVBa82uUcyST3kI1AxTDfsTt8uapJ8DeChZ2FS4p4chhePgwwWtigusxwUS7k9MjZWowmbGCvwY6pgHQpjzwiT3rgw31jxKoJZXMqJBs9VIdD7qzWqvtkgisGgbHMuFdVSHd4VuO78cQo%2FBviNuZU5sA3FjNy1lwq9n%2B7Ur8i9yDs5U%2BrKq3tWnB4bGs%2FF2FC73phb%2BQk6ZKpJRJO0ralN8KytVurdM1rhL5jacw0XyDCwBx5oidbPqJNiH1d4faPGBwOLhlJu96b9oNk6Pjgzv0zd%2BA9sBJGbBdDK4Qzh%2Fl&X-Amz-Signature=1a9bc3ebd0018fab6416fc51bba1f5d4ece87a0d022b191c8252fb009b306bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL45YZLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaLCcTlUkTUqVkYsc2zJAGdUEkXtJp8R2KXjYKpIN9AiAJWFrmgDqP7kqRJw30QkLRWpFITSp75g0p%2B5OwZDKugSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19ypkyx5CwWkvS2MKtwDOJRAhxaOzWimu7ELx1FnlWbomO%2Fbo%2FG05o8l2AS72NekI0YdiLwUzFwdl89ZeJvaWwvnTDY31JQFl9DompOBcAxXpell7y7N1t0oaHg5K3XbsiS5iDAGb2llvXNa0hMJXoaR067uNDzdy8VzFaipgHhGwXxSZgRCVw3CovhwhavwzmOfPDigUFthRXYugNjxciMeYL7ZJ3C4z8rtBs7qZqxFM962KzLHz%2F6rbmHxcpluE3C%2BURL6RuWS%2FzD%2FVgzazMoUEw1KTSq6Iq95C9UKy%2FmScslMxmVGBqjXTgLorajqoeh5V49FqXQRqLOJAnzCJ%2FFpSofhO3MoksaNHaH%2Bn3WX4FiBWkXu5Ny3M70tPWEW329vt3BNMj%2FjxwstO9JFA06YMCQzfPHDckom5dHKwU5hQcWNPdYT2%2FHUEVvoaGgfgCl7Tg%2FH%2BbYopRFUVI9903vQCOOhDqXvfQQdVLr24c9wjxloo04UTZl9CJZiqI0nf%2BoJXwHRkydzWKvKKMzVP0pkBrZzehiVxBI3dHnI48kOrFy%2BsjDOjgTkBUCNXxCrTJzrxPZuaZclNVBa82uUcyST3kI1AxTDfsTt8uapJ8DeChZ2FS4p4chhePgwwWtigusxwUS7k9MjZWowmbGCvwY6pgHQpjzwiT3rgw31jxKoJZXMqJBs9VIdD7qzWqvtkgisGgbHMuFdVSHd4VuO78cQo%2FBviNuZU5sA3FjNy1lwq9n%2B7Ur8i9yDs5U%2BrKq3tWnB4bGs%2FF2FC73phb%2BQk6ZKpJRJO0ralN8KytVurdM1rhL5jacw0XyDCwBx5oidbPqJNiH1d4faPGBwOLhlJu96b9oNk6Pjgzv0zd%2BA9sBJGbBdDK4Qzh%2Fl&X-Amz-Signature=15cc0985837a8f9a1dd4584bd7ed471926d196f0583f5a0a54a5f51b4b5711b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL45YZLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaLCcTlUkTUqVkYsc2zJAGdUEkXtJp8R2KXjYKpIN9AiAJWFrmgDqP7kqRJw30QkLRWpFITSp75g0p%2B5OwZDKugSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19ypkyx5CwWkvS2MKtwDOJRAhxaOzWimu7ELx1FnlWbomO%2Fbo%2FG05o8l2AS72NekI0YdiLwUzFwdl89ZeJvaWwvnTDY31JQFl9DompOBcAxXpell7y7N1t0oaHg5K3XbsiS5iDAGb2llvXNa0hMJXoaR067uNDzdy8VzFaipgHhGwXxSZgRCVw3CovhwhavwzmOfPDigUFthRXYugNjxciMeYL7ZJ3C4z8rtBs7qZqxFM962KzLHz%2F6rbmHxcpluE3C%2BURL6RuWS%2FzD%2FVgzazMoUEw1KTSq6Iq95C9UKy%2FmScslMxmVGBqjXTgLorajqoeh5V49FqXQRqLOJAnzCJ%2FFpSofhO3MoksaNHaH%2Bn3WX4FiBWkXu5Ny3M70tPWEW329vt3BNMj%2FjxwstO9JFA06YMCQzfPHDckom5dHKwU5hQcWNPdYT2%2FHUEVvoaGgfgCl7Tg%2FH%2BbYopRFUVI9903vQCOOhDqXvfQQdVLr24c9wjxloo04UTZl9CJZiqI0nf%2BoJXwHRkydzWKvKKMzVP0pkBrZzehiVxBI3dHnI48kOrFy%2BsjDOjgTkBUCNXxCrTJzrxPZuaZclNVBa82uUcyST3kI1AxTDfsTt8uapJ8DeChZ2FS4p4chhePgwwWtigusxwUS7k9MjZWowmbGCvwY6pgHQpjzwiT3rgw31jxKoJZXMqJBs9VIdD7qzWqvtkgisGgbHMuFdVSHd4VuO78cQo%2FBviNuZU5sA3FjNy1lwq9n%2B7Ur8i9yDs5U%2BrKq3tWnB4bGs%2FF2FC73phb%2BQk6ZKpJRJO0ralN8KytVurdM1rhL5jacw0XyDCwBx5oidbPqJNiH1d4faPGBwOLhlJu96b9oNk6Pjgzv0zd%2BA9sBJGbBdDK4Qzh%2Fl&X-Amz-Signature=4be92fb3f1f69e70ddf7e009e972f505a43cba2c92854bc792d466e4c3a31ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL45YZLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaLCcTlUkTUqVkYsc2zJAGdUEkXtJp8R2KXjYKpIN9AiAJWFrmgDqP7kqRJw30QkLRWpFITSp75g0p%2B5OwZDKugSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19ypkyx5CwWkvS2MKtwDOJRAhxaOzWimu7ELx1FnlWbomO%2Fbo%2FG05o8l2AS72NekI0YdiLwUzFwdl89ZeJvaWwvnTDY31JQFl9DompOBcAxXpell7y7N1t0oaHg5K3XbsiS5iDAGb2llvXNa0hMJXoaR067uNDzdy8VzFaipgHhGwXxSZgRCVw3CovhwhavwzmOfPDigUFthRXYugNjxciMeYL7ZJ3C4z8rtBs7qZqxFM962KzLHz%2F6rbmHxcpluE3C%2BURL6RuWS%2FzD%2FVgzazMoUEw1KTSq6Iq95C9UKy%2FmScslMxmVGBqjXTgLorajqoeh5V49FqXQRqLOJAnzCJ%2FFpSofhO3MoksaNHaH%2Bn3WX4FiBWkXu5Ny3M70tPWEW329vt3BNMj%2FjxwstO9JFA06YMCQzfPHDckom5dHKwU5hQcWNPdYT2%2FHUEVvoaGgfgCl7Tg%2FH%2BbYopRFUVI9903vQCOOhDqXvfQQdVLr24c9wjxloo04UTZl9CJZiqI0nf%2BoJXwHRkydzWKvKKMzVP0pkBrZzehiVxBI3dHnI48kOrFy%2BsjDOjgTkBUCNXxCrTJzrxPZuaZclNVBa82uUcyST3kI1AxTDfsTt8uapJ8DeChZ2FS4p4chhePgwwWtigusxwUS7k9MjZWowmbGCvwY6pgHQpjzwiT3rgw31jxKoJZXMqJBs9VIdD7qzWqvtkgisGgbHMuFdVSHd4VuO78cQo%2FBviNuZU5sA3FjNy1lwq9n%2B7Ur8i9yDs5U%2BrKq3tWnB4bGs%2FF2FC73phb%2BQk6ZKpJRJO0ralN8KytVurdM1rhL5jacw0XyDCwBx5oidbPqJNiH1d4faPGBwOLhlJu96b9oNk6Pjgzv0zd%2BA9sBJGbBdDK4Qzh%2Fl&X-Amz-Signature=80142c6b6ed807435d9da2e2797fcfe211a7cff2b42bd8410cd00eb02f136da2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL45YZLT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfaLCcTlUkTUqVkYsc2zJAGdUEkXtJp8R2KXjYKpIN9AiAJWFrmgDqP7kqRJw30QkLRWpFITSp75g0p%2B5OwZDKugSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19ypkyx5CwWkvS2MKtwDOJRAhxaOzWimu7ELx1FnlWbomO%2Fbo%2FG05o8l2AS72NekI0YdiLwUzFwdl89ZeJvaWwvnTDY31JQFl9DompOBcAxXpell7y7N1t0oaHg5K3XbsiS5iDAGb2llvXNa0hMJXoaR067uNDzdy8VzFaipgHhGwXxSZgRCVw3CovhwhavwzmOfPDigUFthRXYugNjxciMeYL7ZJ3C4z8rtBs7qZqxFM962KzLHz%2F6rbmHxcpluE3C%2BURL6RuWS%2FzD%2FVgzazMoUEw1KTSq6Iq95C9UKy%2FmScslMxmVGBqjXTgLorajqoeh5V49FqXQRqLOJAnzCJ%2FFpSofhO3MoksaNHaH%2Bn3WX4FiBWkXu5Ny3M70tPWEW329vt3BNMj%2FjxwstO9JFA06YMCQzfPHDckom5dHKwU5hQcWNPdYT2%2FHUEVvoaGgfgCl7Tg%2FH%2BbYopRFUVI9903vQCOOhDqXvfQQdVLr24c9wjxloo04UTZl9CJZiqI0nf%2BoJXwHRkydzWKvKKMzVP0pkBrZzehiVxBI3dHnI48kOrFy%2BsjDOjgTkBUCNXxCrTJzrxPZuaZclNVBa82uUcyST3kI1AxTDfsTt8uapJ8DeChZ2FS4p4chhePgwwWtigusxwUS7k9MjZWowmbGCvwY6pgHQpjzwiT3rgw31jxKoJZXMqJBs9VIdD7qzWqvtkgisGgbHMuFdVSHd4VuO78cQo%2FBviNuZU5sA3FjNy1lwq9n%2B7Ur8i9yDs5U%2BrKq3tWnB4bGs%2FF2FC73phb%2BQk6ZKpJRJO0ralN8KytVurdM1rhL5jacw0XyDCwBx5oidbPqJNiH1d4faPGBwOLhlJu96b9oNk6Pjgzv0zd%2BA9sBJGbBdDK4Qzh%2Fl&X-Amz-Signature=e9e8b034c140a465500e3cff7e357f0b46170e06b43552be630b350cbd589ace&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
