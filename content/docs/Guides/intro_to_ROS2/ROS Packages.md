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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNICJZHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdJDepEWe4cg6nzwYeRO2GFndcMhEQeEmiBBqQLgTOUgIgYzAH2BGPT6KK7GRBFQW0ynnqHWnUqx2Bq3DUKNcx%2FLUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqP9QRIlYM7YxdfyCrcA8wE0Jnehuy4u8OsVj8Z2BwJBpVwusZ5iCYTpO8lr3U5b6LPYilW3az6ZhvZTRSzbi06inUgTukZ%2FFxnxpL%2FGkFGdbTtfyizXsJElOjR8LWx8aNGH0nxXWcNiSFI8bo3vVOZxfTGxsynecobDCs15BZQCnZI7suKUaFoJyzYyHgzNDiM0ykuUQR1mwHXdYl3vb1tkYgYJF%2B44xxuKzUmCwX%2Fu7O2jv3cKC%2BJPoGLjlDTY0RcC0A3ze3WDPG%2FZOcQtMlkkgPCzWyoEpzKmp0VolqeEJSYpoOd%2F3XPy7R1ZZyQ4jCQbFVsc9Eyz1uZNfB%2FSKmkRfY4hJMY9b8YkGLzvqnkg8zNF1oGCLU6xdwVURANWkyurqIcCHf12aZ0Zm8tMAyPsAogvClzBy4bK%2Bk46k6jlzlzWSnPwTOUdjE70%2FSQxvvkjR0WLJajqWU7r3DpsOmtBojsLLLc5%2BogfYCxptedmktWiPLPPNHUHC6eFekk24%2BRoEUp865Xo%2BoJ26qiJV4j%2F6%2BGmsauiSSdTTNFYanueQj1QHLlafrnM3m2BPCGMoPCpgDnIKDmJk%2BwJSBzPt2QYwlUR1G45xIY2aSHrPdUgvbwWjZqitNdF%2B8QylSrl2Y585D%2FkDWzyTUEMJGk7MEGOqUBKlpHk%2FkRN8xaS9lzzEk1sJ%2FF3eTxO4YWau%2FoC4I%2FyNzuYycBi6eDDTdv4Nr4NPG7wPqeMaxyh9ZIsxOsi5H%2FMHxLYJLdgQlUIpKqVNazC9%2BKa1uk6kCaj51XFRu4TCDozTotDA2NLmZePhu2LL7acI2AyD2A0WQDLkiiU3kfIl2i0cPysjGywiqoNx42kr0HQ21dZ8b%2BQ%2FY7gH9dEp5QYCIROYI8&X-Amz-Signature=77bb9f4f2564ded2e7f913f8b835c24c289b9e19fb940123fc2c3bd9872f1b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNICJZHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdJDepEWe4cg6nzwYeRO2GFndcMhEQeEmiBBqQLgTOUgIgYzAH2BGPT6KK7GRBFQW0ynnqHWnUqx2Bq3DUKNcx%2FLUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqP9QRIlYM7YxdfyCrcA8wE0Jnehuy4u8OsVj8Z2BwJBpVwusZ5iCYTpO8lr3U5b6LPYilW3az6ZhvZTRSzbi06inUgTukZ%2FFxnxpL%2FGkFGdbTtfyizXsJElOjR8LWx8aNGH0nxXWcNiSFI8bo3vVOZxfTGxsynecobDCs15BZQCnZI7suKUaFoJyzYyHgzNDiM0ykuUQR1mwHXdYl3vb1tkYgYJF%2B44xxuKzUmCwX%2Fu7O2jv3cKC%2BJPoGLjlDTY0RcC0A3ze3WDPG%2FZOcQtMlkkgPCzWyoEpzKmp0VolqeEJSYpoOd%2F3XPy7R1ZZyQ4jCQbFVsc9Eyz1uZNfB%2FSKmkRfY4hJMY9b8YkGLzvqnkg8zNF1oGCLU6xdwVURANWkyurqIcCHf12aZ0Zm8tMAyPsAogvClzBy4bK%2Bk46k6jlzlzWSnPwTOUdjE70%2FSQxvvkjR0WLJajqWU7r3DpsOmtBojsLLLc5%2BogfYCxptedmktWiPLPPNHUHC6eFekk24%2BRoEUp865Xo%2BoJ26qiJV4j%2F6%2BGmsauiSSdTTNFYanueQj1QHLlafrnM3m2BPCGMoPCpgDnIKDmJk%2BwJSBzPt2QYwlUR1G45xIY2aSHrPdUgvbwWjZqitNdF%2B8QylSrl2Y585D%2FkDWzyTUEMJGk7MEGOqUBKlpHk%2FkRN8xaS9lzzEk1sJ%2FF3eTxO4YWau%2FoC4I%2FyNzuYycBi6eDDTdv4Nr4NPG7wPqeMaxyh9ZIsxOsi5H%2FMHxLYJLdgQlUIpKqVNazC9%2BKa1uk6kCaj51XFRu4TCDozTotDA2NLmZePhu2LL7acI2AyD2A0WQDLkiiU3kfIl2i0cPysjGywiqoNx42kr0HQ21dZ8b%2BQ%2FY7gH9dEp5QYCIROYI8&X-Amz-Signature=4c5ace5cdcca210564c86386ba5169860ee48f2e338ba0f4a915e5ecd93dfec3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNICJZHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdJDepEWe4cg6nzwYeRO2GFndcMhEQeEmiBBqQLgTOUgIgYzAH2BGPT6KK7GRBFQW0ynnqHWnUqx2Bq3DUKNcx%2FLUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqP9QRIlYM7YxdfyCrcA8wE0Jnehuy4u8OsVj8Z2BwJBpVwusZ5iCYTpO8lr3U5b6LPYilW3az6ZhvZTRSzbi06inUgTukZ%2FFxnxpL%2FGkFGdbTtfyizXsJElOjR8LWx8aNGH0nxXWcNiSFI8bo3vVOZxfTGxsynecobDCs15BZQCnZI7suKUaFoJyzYyHgzNDiM0ykuUQR1mwHXdYl3vb1tkYgYJF%2B44xxuKzUmCwX%2Fu7O2jv3cKC%2BJPoGLjlDTY0RcC0A3ze3WDPG%2FZOcQtMlkkgPCzWyoEpzKmp0VolqeEJSYpoOd%2F3XPy7R1ZZyQ4jCQbFVsc9Eyz1uZNfB%2FSKmkRfY4hJMY9b8YkGLzvqnkg8zNF1oGCLU6xdwVURANWkyurqIcCHf12aZ0Zm8tMAyPsAogvClzBy4bK%2Bk46k6jlzlzWSnPwTOUdjE70%2FSQxvvkjR0WLJajqWU7r3DpsOmtBojsLLLc5%2BogfYCxptedmktWiPLPPNHUHC6eFekk24%2BRoEUp865Xo%2BoJ26qiJV4j%2F6%2BGmsauiSSdTTNFYanueQj1QHLlafrnM3m2BPCGMoPCpgDnIKDmJk%2BwJSBzPt2QYwlUR1G45xIY2aSHrPdUgvbwWjZqitNdF%2B8QylSrl2Y585D%2FkDWzyTUEMJGk7MEGOqUBKlpHk%2FkRN8xaS9lzzEk1sJ%2FF3eTxO4YWau%2FoC4I%2FyNzuYycBi6eDDTdv4Nr4NPG7wPqeMaxyh9ZIsxOsi5H%2FMHxLYJLdgQlUIpKqVNazC9%2BKa1uk6kCaj51XFRu4TCDozTotDA2NLmZePhu2LL7acI2AyD2A0WQDLkiiU3kfIl2i0cPysjGywiqoNx42kr0HQ21dZ8b%2BQ%2FY7gH9dEp5QYCIROYI8&X-Amz-Signature=efad05d736da93ac7d29936dd731d33ad1c4819f3eb399ebcb62bfe8573fa209&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNICJZHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdJDepEWe4cg6nzwYeRO2GFndcMhEQeEmiBBqQLgTOUgIgYzAH2BGPT6KK7GRBFQW0ynnqHWnUqx2Bq3DUKNcx%2FLUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqP9QRIlYM7YxdfyCrcA8wE0Jnehuy4u8OsVj8Z2BwJBpVwusZ5iCYTpO8lr3U5b6LPYilW3az6ZhvZTRSzbi06inUgTukZ%2FFxnxpL%2FGkFGdbTtfyizXsJElOjR8LWx8aNGH0nxXWcNiSFI8bo3vVOZxfTGxsynecobDCs15BZQCnZI7suKUaFoJyzYyHgzNDiM0ykuUQR1mwHXdYl3vb1tkYgYJF%2B44xxuKzUmCwX%2Fu7O2jv3cKC%2BJPoGLjlDTY0RcC0A3ze3WDPG%2FZOcQtMlkkgPCzWyoEpzKmp0VolqeEJSYpoOd%2F3XPy7R1ZZyQ4jCQbFVsc9Eyz1uZNfB%2FSKmkRfY4hJMY9b8YkGLzvqnkg8zNF1oGCLU6xdwVURANWkyurqIcCHf12aZ0Zm8tMAyPsAogvClzBy4bK%2Bk46k6jlzlzWSnPwTOUdjE70%2FSQxvvkjR0WLJajqWU7r3DpsOmtBojsLLLc5%2BogfYCxptedmktWiPLPPNHUHC6eFekk24%2BRoEUp865Xo%2BoJ26qiJV4j%2F6%2BGmsauiSSdTTNFYanueQj1QHLlafrnM3m2BPCGMoPCpgDnIKDmJk%2BwJSBzPt2QYwlUR1G45xIY2aSHrPdUgvbwWjZqitNdF%2B8QylSrl2Y585D%2FkDWzyTUEMJGk7MEGOqUBKlpHk%2FkRN8xaS9lzzEk1sJ%2FF3eTxO4YWau%2FoC4I%2FyNzuYycBi6eDDTdv4Nr4NPG7wPqeMaxyh9ZIsxOsi5H%2FMHxLYJLdgQlUIpKqVNazC9%2BKa1uk6kCaj51XFRu4TCDozTotDA2NLmZePhu2LL7acI2AyD2A0WQDLkiiU3kfIl2i0cPysjGywiqoNx42kr0HQ21dZ8b%2BQ%2FY7gH9dEp5QYCIROYI8&X-Amz-Signature=2903b38961979f8dca18bd456872ae1be23d2439881f30802305afe77f10c7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNICJZHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdJDepEWe4cg6nzwYeRO2GFndcMhEQeEmiBBqQLgTOUgIgYzAH2BGPT6KK7GRBFQW0ynnqHWnUqx2Bq3DUKNcx%2FLUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqP9QRIlYM7YxdfyCrcA8wE0Jnehuy4u8OsVj8Z2BwJBpVwusZ5iCYTpO8lr3U5b6LPYilW3az6ZhvZTRSzbi06inUgTukZ%2FFxnxpL%2FGkFGdbTtfyizXsJElOjR8LWx8aNGH0nxXWcNiSFI8bo3vVOZxfTGxsynecobDCs15BZQCnZI7suKUaFoJyzYyHgzNDiM0ykuUQR1mwHXdYl3vb1tkYgYJF%2B44xxuKzUmCwX%2Fu7O2jv3cKC%2BJPoGLjlDTY0RcC0A3ze3WDPG%2FZOcQtMlkkgPCzWyoEpzKmp0VolqeEJSYpoOd%2F3XPy7R1ZZyQ4jCQbFVsc9Eyz1uZNfB%2FSKmkRfY4hJMY9b8YkGLzvqnkg8zNF1oGCLU6xdwVURANWkyurqIcCHf12aZ0Zm8tMAyPsAogvClzBy4bK%2Bk46k6jlzlzWSnPwTOUdjE70%2FSQxvvkjR0WLJajqWU7r3DpsOmtBojsLLLc5%2BogfYCxptedmktWiPLPPNHUHC6eFekk24%2BRoEUp865Xo%2BoJ26qiJV4j%2F6%2BGmsauiSSdTTNFYanueQj1QHLlafrnM3m2BPCGMoPCpgDnIKDmJk%2BwJSBzPt2QYwlUR1G45xIY2aSHrPdUgvbwWjZqitNdF%2B8QylSrl2Y585D%2FkDWzyTUEMJGk7MEGOqUBKlpHk%2FkRN8xaS9lzzEk1sJ%2FF3eTxO4YWau%2FoC4I%2FyNzuYycBi6eDDTdv4Nr4NPG7wPqeMaxyh9ZIsxOsi5H%2FMHxLYJLdgQlUIpKqVNazC9%2BKa1uk6kCaj51XFRu4TCDozTotDA2NLmZePhu2LL7acI2AyD2A0WQDLkiiU3kfIl2i0cPysjGywiqoNx42kr0HQ21dZ8b%2BQ%2FY7gH9dEp5QYCIROYI8&X-Amz-Signature=3bed16c09648abd034936286c5c5dafd4ffebae5800c670599a451721c12c2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNICJZHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdJDepEWe4cg6nzwYeRO2GFndcMhEQeEmiBBqQLgTOUgIgYzAH2BGPT6KK7GRBFQW0ynnqHWnUqx2Bq3DUKNcx%2FLUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqP9QRIlYM7YxdfyCrcA8wE0Jnehuy4u8OsVj8Z2BwJBpVwusZ5iCYTpO8lr3U5b6LPYilW3az6ZhvZTRSzbi06inUgTukZ%2FFxnxpL%2FGkFGdbTtfyizXsJElOjR8LWx8aNGH0nxXWcNiSFI8bo3vVOZxfTGxsynecobDCs15BZQCnZI7suKUaFoJyzYyHgzNDiM0ykuUQR1mwHXdYl3vb1tkYgYJF%2B44xxuKzUmCwX%2Fu7O2jv3cKC%2BJPoGLjlDTY0RcC0A3ze3WDPG%2FZOcQtMlkkgPCzWyoEpzKmp0VolqeEJSYpoOd%2F3XPy7R1ZZyQ4jCQbFVsc9Eyz1uZNfB%2FSKmkRfY4hJMY9b8YkGLzvqnkg8zNF1oGCLU6xdwVURANWkyurqIcCHf12aZ0Zm8tMAyPsAogvClzBy4bK%2Bk46k6jlzlzWSnPwTOUdjE70%2FSQxvvkjR0WLJajqWU7r3DpsOmtBojsLLLc5%2BogfYCxptedmktWiPLPPNHUHC6eFekk24%2BRoEUp865Xo%2BoJ26qiJV4j%2F6%2BGmsauiSSdTTNFYanueQj1QHLlafrnM3m2BPCGMoPCpgDnIKDmJk%2BwJSBzPt2QYwlUR1G45xIY2aSHrPdUgvbwWjZqitNdF%2B8QylSrl2Y585D%2FkDWzyTUEMJGk7MEGOqUBKlpHk%2FkRN8xaS9lzzEk1sJ%2FF3eTxO4YWau%2FoC4I%2FyNzuYycBi6eDDTdv4Nr4NPG7wPqeMaxyh9ZIsxOsi5H%2FMHxLYJLdgQlUIpKqVNazC9%2BKa1uk6kCaj51XFRu4TCDozTotDA2NLmZePhu2LL7acI2AyD2A0WQDLkiiU3kfIl2i0cPysjGywiqoNx42kr0HQ21dZ8b%2BQ%2FY7gH9dEp5QYCIROYI8&X-Amz-Signature=42c744f34e49b7a1637cd52dd3c80bdebf8d5dc25f3f51f1722839c31caae898&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNICJZHP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdJDepEWe4cg6nzwYeRO2GFndcMhEQeEmiBBqQLgTOUgIgYzAH2BGPT6KK7GRBFQW0ynnqHWnUqx2Bq3DUKNcx%2FLUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqP9QRIlYM7YxdfyCrcA8wE0Jnehuy4u8OsVj8Z2BwJBpVwusZ5iCYTpO8lr3U5b6LPYilW3az6ZhvZTRSzbi06inUgTukZ%2FFxnxpL%2FGkFGdbTtfyizXsJElOjR8LWx8aNGH0nxXWcNiSFI8bo3vVOZxfTGxsynecobDCs15BZQCnZI7suKUaFoJyzYyHgzNDiM0ykuUQR1mwHXdYl3vb1tkYgYJF%2B44xxuKzUmCwX%2Fu7O2jv3cKC%2BJPoGLjlDTY0RcC0A3ze3WDPG%2FZOcQtMlkkgPCzWyoEpzKmp0VolqeEJSYpoOd%2F3XPy7R1ZZyQ4jCQbFVsc9Eyz1uZNfB%2FSKmkRfY4hJMY9b8YkGLzvqnkg8zNF1oGCLU6xdwVURANWkyurqIcCHf12aZ0Zm8tMAyPsAogvClzBy4bK%2Bk46k6jlzlzWSnPwTOUdjE70%2FSQxvvkjR0WLJajqWU7r3DpsOmtBojsLLLc5%2BogfYCxptedmktWiPLPPNHUHC6eFekk24%2BRoEUp865Xo%2BoJ26qiJV4j%2F6%2BGmsauiSSdTTNFYanueQj1QHLlafrnM3m2BPCGMoPCpgDnIKDmJk%2BwJSBzPt2QYwlUR1G45xIY2aSHrPdUgvbwWjZqitNdF%2B8QylSrl2Y585D%2FkDWzyTUEMJGk7MEGOqUBKlpHk%2FkRN8xaS9lzzEk1sJ%2FF3eTxO4YWau%2FoC4I%2FyNzuYycBi6eDDTdv4Nr4NPG7wPqeMaxyh9ZIsxOsi5H%2FMHxLYJLdgQlUIpKqVNazC9%2BKa1uk6kCaj51XFRu4TCDozTotDA2NLmZePhu2LL7acI2AyD2A0WQDLkiiU3kfIl2i0cPysjGywiqoNx42kr0HQ21dZ8b%2BQ%2FY7gH9dEp5QYCIROYI8&X-Amz-Signature=b6732f7d815e79787ecdee79a25eb7c662ab00e0a2d1b5835ee0ed1276ed0453&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
