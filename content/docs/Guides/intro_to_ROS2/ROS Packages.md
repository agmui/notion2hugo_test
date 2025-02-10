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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUK35OD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiNEvpOyIbVHWElFOhbgz9HQuJEcD4dz%2FrCUaBhWGNwIhALNEh6d2FeU8n0yJQtP69N029DEhjBXrO80v0gE%2F8SVsKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfpS9Hptp%2BEMCzgG0q3ANz19xzDzzx%2BJ0zfyb5b7znAuxdxm7WBcrkNkYHqFognfNxfGmY8tNYE3yjHEl6vf4Oo9mY934TIQTQLwEXsUZMmgVJDkvcj98gqK8KUhh4C00ZQNYWdaEQPn2mOgjPmPvf6Jp4afV5Gf3Y3TTv%2Bc%2BJrbf4MI9c25BodgdaX2CPJ4Xv%2FlsCMzJcCIMh%2BeuehFasD%2B2JWlGbYB0pltXNmaBvox4co9n9sJl%2B%2FnOxS2o5FmS56Ndubzt2Cgh%2Fl83Tl07A4eU4RPZbyZ10W8jfRbvUxP5y1GGI3DfISKM292ZwRjqQe9QrNRcb%2BKO%2B596q%2BeR0KOTGv9%2BSHs09aJZCW1tK%2BVNeNDKkvjp%2BBtLa4vQoEKcNwu73Ew%2Bh%2FfsXKOBSoAvkdjeV3v5AinwddzYvwjipMvRtJYl2vAvVbjIqPg4eet7jJ5lMJCACtd76sb0%2FKpVBQVHU08%2FMwi5EfHJgewLxBNsjCOuVC1AqiKlvUH3QO9qfaoHBI1Ceb3Q%2FOUaSylpogazugeVD7fDd9A3TAK64rhGklSeznxf8LW2bE6oEdK8aBm74%2Fhde9ODRSoYwdYWMF9ejywAlA2vr2BZIbCcHl1NPn%2B%2BAPzWYlkUWxD3wWFfvTyCYU%2B%2FZva8b5zDXm6W9BjqkAbIpjviglY6CZBxJ703p2kTT6AuUeBduRTJQSf5qGhdKj8Eo2oHMIY%2B9oAlY3t9n6QxFlvAgsaod8rhr4%2F5a%2Ff%2B5TmHbm0el2OnORBB19OFVif7Ns90nQHq%2BGu5uAS0K%2FNwtfkO7TZXJ4i2Wp30uWtfxRmocHRf7vZ4IbEXSwqidKl0OkfGMs82afTqgUZfcd5GDQdcoHfLapLMXprH6nvIQe6ok&X-Amz-Signature=f7911fef98ce2a646e7646c4888fa3e4884a7226093ffba96ba559acd0610471&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUK35OD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiNEvpOyIbVHWElFOhbgz9HQuJEcD4dz%2FrCUaBhWGNwIhALNEh6d2FeU8n0yJQtP69N029DEhjBXrO80v0gE%2F8SVsKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfpS9Hptp%2BEMCzgG0q3ANz19xzDzzx%2BJ0zfyb5b7znAuxdxm7WBcrkNkYHqFognfNxfGmY8tNYE3yjHEl6vf4Oo9mY934TIQTQLwEXsUZMmgVJDkvcj98gqK8KUhh4C00ZQNYWdaEQPn2mOgjPmPvf6Jp4afV5Gf3Y3TTv%2Bc%2BJrbf4MI9c25BodgdaX2CPJ4Xv%2FlsCMzJcCIMh%2BeuehFasD%2B2JWlGbYB0pltXNmaBvox4co9n9sJl%2B%2FnOxS2o5FmS56Ndubzt2Cgh%2Fl83Tl07A4eU4RPZbyZ10W8jfRbvUxP5y1GGI3DfISKM292ZwRjqQe9QrNRcb%2BKO%2B596q%2BeR0KOTGv9%2BSHs09aJZCW1tK%2BVNeNDKkvjp%2BBtLa4vQoEKcNwu73Ew%2Bh%2FfsXKOBSoAvkdjeV3v5AinwddzYvwjipMvRtJYl2vAvVbjIqPg4eet7jJ5lMJCACtd76sb0%2FKpVBQVHU08%2FMwi5EfHJgewLxBNsjCOuVC1AqiKlvUH3QO9qfaoHBI1Ceb3Q%2FOUaSylpogazugeVD7fDd9A3TAK64rhGklSeznxf8LW2bE6oEdK8aBm74%2Fhde9ODRSoYwdYWMF9ejywAlA2vr2BZIbCcHl1NPn%2B%2BAPzWYlkUWxD3wWFfvTyCYU%2B%2FZva8b5zDXm6W9BjqkAbIpjviglY6CZBxJ703p2kTT6AuUeBduRTJQSf5qGhdKj8Eo2oHMIY%2B9oAlY3t9n6QxFlvAgsaod8rhr4%2F5a%2Ff%2B5TmHbm0el2OnORBB19OFVif7Ns90nQHq%2BGu5uAS0K%2FNwtfkO7TZXJ4i2Wp30uWtfxRmocHRf7vZ4IbEXSwqidKl0OkfGMs82afTqgUZfcd5GDQdcoHfLapLMXprH6nvIQe6ok&X-Amz-Signature=511d7f8c1126726cd4a1ce7723b16dafe0bed6c844cd8e135fa2a560855f208f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUK35OD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiNEvpOyIbVHWElFOhbgz9HQuJEcD4dz%2FrCUaBhWGNwIhALNEh6d2FeU8n0yJQtP69N029DEhjBXrO80v0gE%2F8SVsKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfpS9Hptp%2BEMCzgG0q3ANz19xzDzzx%2BJ0zfyb5b7znAuxdxm7WBcrkNkYHqFognfNxfGmY8tNYE3yjHEl6vf4Oo9mY934TIQTQLwEXsUZMmgVJDkvcj98gqK8KUhh4C00ZQNYWdaEQPn2mOgjPmPvf6Jp4afV5Gf3Y3TTv%2Bc%2BJrbf4MI9c25BodgdaX2CPJ4Xv%2FlsCMzJcCIMh%2BeuehFasD%2B2JWlGbYB0pltXNmaBvox4co9n9sJl%2B%2FnOxS2o5FmS56Ndubzt2Cgh%2Fl83Tl07A4eU4RPZbyZ10W8jfRbvUxP5y1GGI3DfISKM292ZwRjqQe9QrNRcb%2BKO%2B596q%2BeR0KOTGv9%2BSHs09aJZCW1tK%2BVNeNDKkvjp%2BBtLa4vQoEKcNwu73Ew%2Bh%2FfsXKOBSoAvkdjeV3v5AinwddzYvwjipMvRtJYl2vAvVbjIqPg4eet7jJ5lMJCACtd76sb0%2FKpVBQVHU08%2FMwi5EfHJgewLxBNsjCOuVC1AqiKlvUH3QO9qfaoHBI1Ceb3Q%2FOUaSylpogazugeVD7fDd9A3TAK64rhGklSeznxf8LW2bE6oEdK8aBm74%2Fhde9ODRSoYwdYWMF9ejywAlA2vr2BZIbCcHl1NPn%2B%2BAPzWYlkUWxD3wWFfvTyCYU%2B%2FZva8b5zDXm6W9BjqkAbIpjviglY6CZBxJ703p2kTT6AuUeBduRTJQSf5qGhdKj8Eo2oHMIY%2B9oAlY3t9n6QxFlvAgsaod8rhr4%2F5a%2Ff%2B5TmHbm0el2OnORBB19OFVif7Ns90nQHq%2BGu5uAS0K%2FNwtfkO7TZXJ4i2Wp30uWtfxRmocHRf7vZ4IbEXSwqidKl0OkfGMs82afTqgUZfcd5GDQdcoHfLapLMXprH6nvIQe6ok&X-Amz-Signature=665149b2830a733e948ff57e87d6684dfc34d9b0e8ee86af92bcedd65091f8a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUK35OD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiNEvpOyIbVHWElFOhbgz9HQuJEcD4dz%2FrCUaBhWGNwIhALNEh6d2FeU8n0yJQtP69N029DEhjBXrO80v0gE%2F8SVsKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfpS9Hptp%2BEMCzgG0q3ANz19xzDzzx%2BJ0zfyb5b7znAuxdxm7WBcrkNkYHqFognfNxfGmY8tNYE3yjHEl6vf4Oo9mY934TIQTQLwEXsUZMmgVJDkvcj98gqK8KUhh4C00ZQNYWdaEQPn2mOgjPmPvf6Jp4afV5Gf3Y3TTv%2Bc%2BJrbf4MI9c25BodgdaX2CPJ4Xv%2FlsCMzJcCIMh%2BeuehFasD%2B2JWlGbYB0pltXNmaBvox4co9n9sJl%2B%2FnOxS2o5FmS56Ndubzt2Cgh%2Fl83Tl07A4eU4RPZbyZ10W8jfRbvUxP5y1GGI3DfISKM292ZwRjqQe9QrNRcb%2BKO%2B596q%2BeR0KOTGv9%2BSHs09aJZCW1tK%2BVNeNDKkvjp%2BBtLa4vQoEKcNwu73Ew%2Bh%2FfsXKOBSoAvkdjeV3v5AinwddzYvwjipMvRtJYl2vAvVbjIqPg4eet7jJ5lMJCACtd76sb0%2FKpVBQVHU08%2FMwi5EfHJgewLxBNsjCOuVC1AqiKlvUH3QO9qfaoHBI1Ceb3Q%2FOUaSylpogazugeVD7fDd9A3TAK64rhGklSeznxf8LW2bE6oEdK8aBm74%2Fhde9ODRSoYwdYWMF9ejywAlA2vr2BZIbCcHl1NPn%2B%2BAPzWYlkUWxD3wWFfvTyCYU%2B%2FZva8b5zDXm6W9BjqkAbIpjviglY6CZBxJ703p2kTT6AuUeBduRTJQSf5qGhdKj8Eo2oHMIY%2B9oAlY3t9n6QxFlvAgsaod8rhr4%2F5a%2Ff%2B5TmHbm0el2OnORBB19OFVif7Ns90nQHq%2BGu5uAS0K%2FNwtfkO7TZXJ4i2Wp30uWtfxRmocHRf7vZ4IbEXSwqidKl0OkfGMs82afTqgUZfcd5GDQdcoHfLapLMXprH6nvIQe6ok&X-Amz-Signature=42cd39646ce077ec54d8d15555277b937bb6f23f4c4de43b095d3d4839a2af5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUK35OD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiNEvpOyIbVHWElFOhbgz9HQuJEcD4dz%2FrCUaBhWGNwIhALNEh6d2FeU8n0yJQtP69N029DEhjBXrO80v0gE%2F8SVsKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfpS9Hptp%2BEMCzgG0q3ANz19xzDzzx%2BJ0zfyb5b7znAuxdxm7WBcrkNkYHqFognfNxfGmY8tNYE3yjHEl6vf4Oo9mY934TIQTQLwEXsUZMmgVJDkvcj98gqK8KUhh4C00ZQNYWdaEQPn2mOgjPmPvf6Jp4afV5Gf3Y3TTv%2Bc%2BJrbf4MI9c25BodgdaX2CPJ4Xv%2FlsCMzJcCIMh%2BeuehFasD%2B2JWlGbYB0pltXNmaBvox4co9n9sJl%2B%2FnOxS2o5FmS56Ndubzt2Cgh%2Fl83Tl07A4eU4RPZbyZ10W8jfRbvUxP5y1GGI3DfISKM292ZwRjqQe9QrNRcb%2BKO%2B596q%2BeR0KOTGv9%2BSHs09aJZCW1tK%2BVNeNDKkvjp%2BBtLa4vQoEKcNwu73Ew%2Bh%2FfsXKOBSoAvkdjeV3v5AinwddzYvwjipMvRtJYl2vAvVbjIqPg4eet7jJ5lMJCACtd76sb0%2FKpVBQVHU08%2FMwi5EfHJgewLxBNsjCOuVC1AqiKlvUH3QO9qfaoHBI1Ceb3Q%2FOUaSylpogazugeVD7fDd9A3TAK64rhGklSeznxf8LW2bE6oEdK8aBm74%2Fhde9ODRSoYwdYWMF9ejywAlA2vr2BZIbCcHl1NPn%2B%2BAPzWYlkUWxD3wWFfvTyCYU%2B%2FZva8b5zDXm6W9BjqkAbIpjviglY6CZBxJ703p2kTT6AuUeBduRTJQSf5qGhdKj8Eo2oHMIY%2B9oAlY3t9n6QxFlvAgsaod8rhr4%2F5a%2Ff%2B5TmHbm0el2OnORBB19OFVif7Ns90nQHq%2BGu5uAS0K%2FNwtfkO7TZXJ4i2Wp30uWtfxRmocHRf7vZ4IbEXSwqidKl0OkfGMs82afTqgUZfcd5GDQdcoHfLapLMXprH6nvIQe6ok&X-Amz-Signature=1baf9e8fc7739c5062396c4a88f332ed6cc80d964c29d5adccc263aab983757e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUK35OD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiNEvpOyIbVHWElFOhbgz9HQuJEcD4dz%2FrCUaBhWGNwIhALNEh6d2FeU8n0yJQtP69N029DEhjBXrO80v0gE%2F8SVsKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfpS9Hptp%2BEMCzgG0q3ANz19xzDzzx%2BJ0zfyb5b7znAuxdxm7WBcrkNkYHqFognfNxfGmY8tNYE3yjHEl6vf4Oo9mY934TIQTQLwEXsUZMmgVJDkvcj98gqK8KUhh4C00ZQNYWdaEQPn2mOgjPmPvf6Jp4afV5Gf3Y3TTv%2Bc%2BJrbf4MI9c25BodgdaX2CPJ4Xv%2FlsCMzJcCIMh%2BeuehFasD%2B2JWlGbYB0pltXNmaBvox4co9n9sJl%2B%2FnOxS2o5FmS56Ndubzt2Cgh%2Fl83Tl07A4eU4RPZbyZ10W8jfRbvUxP5y1GGI3DfISKM292ZwRjqQe9QrNRcb%2BKO%2B596q%2BeR0KOTGv9%2BSHs09aJZCW1tK%2BVNeNDKkvjp%2BBtLa4vQoEKcNwu73Ew%2Bh%2FfsXKOBSoAvkdjeV3v5AinwddzYvwjipMvRtJYl2vAvVbjIqPg4eet7jJ5lMJCACtd76sb0%2FKpVBQVHU08%2FMwi5EfHJgewLxBNsjCOuVC1AqiKlvUH3QO9qfaoHBI1Ceb3Q%2FOUaSylpogazugeVD7fDd9A3TAK64rhGklSeznxf8LW2bE6oEdK8aBm74%2Fhde9ODRSoYwdYWMF9ejywAlA2vr2BZIbCcHl1NPn%2B%2BAPzWYlkUWxD3wWFfvTyCYU%2B%2FZva8b5zDXm6W9BjqkAbIpjviglY6CZBxJ703p2kTT6AuUeBduRTJQSf5qGhdKj8Eo2oHMIY%2B9oAlY3t9n6QxFlvAgsaod8rhr4%2F5a%2Ff%2B5TmHbm0el2OnORBB19OFVif7Ns90nQHq%2BGu5uAS0K%2FNwtfkO7TZXJ4i2Wp30uWtfxRmocHRf7vZ4IbEXSwqidKl0OkfGMs82afTqgUZfcd5GDQdcoHfLapLMXprH6nvIQe6ok&X-Amz-Signature=d5d6f1034fb5aad0358be517df9e510410aef52cc08b954e231f9c77872f3b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUK35OD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxiNEvpOyIbVHWElFOhbgz9HQuJEcD4dz%2FrCUaBhWGNwIhALNEh6d2FeU8n0yJQtP69N029DEhjBXrO80v0gE%2F8SVsKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfpS9Hptp%2BEMCzgG0q3ANz19xzDzzx%2BJ0zfyb5b7znAuxdxm7WBcrkNkYHqFognfNxfGmY8tNYE3yjHEl6vf4Oo9mY934TIQTQLwEXsUZMmgVJDkvcj98gqK8KUhh4C00ZQNYWdaEQPn2mOgjPmPvf6Jp4afV5Gf3Y3TTv%2Bc%2BJrbf4MI9c25BodgdaX2CPJ4Xv%2FlsCMzJcCIMh%2BeuehFasD%2B2JWlGbYB0pltXNmaBvox4co9n9sJl%2B%2FnOxS2o5FmS56Ndubzt2Cgh%2Fl83Tl07A4eU4RPZbyZ10W8jfRbvUxP5y1GGI3DfISKM292ZwRjqQe9QrNRcb%2BKO%2B596q%2BeR0KOTGv9%2BSHs09aJZCW1tK%2BVNeNDKkvjp%2BBtLa4vQoEKcNwu73Ew%2Bh%2FfsXKOBSoAvkdjeV3v5AinwddzYvwjipMvRtJYl2vAvVbjIqPg4eet7jJ5lMJCACtd76sb0%2FKpVBQVHU08%2FMwi5EfHJgewLxBNsjCOuVC1AqiKlvUH3QO9qfaoHBI1Ceb3Q%2FOUaSylpogazugeVD7fDd9A3TAK64rhGklSeznxf8LW2bE6oEdK8aBm74%2Fhde9ODRSoYwdYWMF9ejywAlA2vr2BZIbCcHl1NPn%2B%2BAPzWYlkUWxD3wWFfvTyCYU%2B%2FZva8b5zDXm6W9BjqkAbIpjviglY6CZBxJ703p2kTT6AuUeBduRTJQSf5qGhdKj8Eo2oHMIY%2B9oAlY3t9n6QxFlvAgsaod8rhr4%2F5a%2Ff%2B5TmHbm0el2OnORBB19OFVif7Ns90nQHq%2BGu5uAS0K%2FNwtfkO7TZXJ4i2Wp30uWtfxRmocHRf7vZ4IbEXSwqidKl0OkfGMs82afTqgUZfcd5GDQdcoHfLapLMXprH6nvIQe6ok&X-Amz-Signature=1289a3ff4821e419067199d470cfeb40ce6ccbe9383d704d05872b2a2baed63b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
