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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBWSE55%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ3wvHYuDthbjhfIf7CwmZmGvntwP9Qw2smi22HEVJBAiEAzxGGb9ZxPUjnFOJzx3WLo5nvUznJxGR5qg2QfGtESo0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBTsqR3QGpRc0a0gyircAy3O0Uky7dLFwGS3vadYrZSbpqULjb2S8SePAnnTzywH3ZadaOo2ww%2FIaEYi9anu8ikwMevpmqYWbsKJuENuvJT%2BghjyguTlrKJ60WO4hlnnorpYbqP6B0wACadx1jC9G7jAinPtZ2A%2B%2FhQ8vIZe8EbTYnLVDwSqQlWmF0%2BEkl%2FCGcklpiordCLHvZRI6vI10QXh6LUyF%2Fo7rkK9ssYhvAEOlAs8dxVPJ1gOsYc08q%2Bs34PmmrEcgl7u6CVg2%2FBatE6ZsPlXJwdXScjqNP5WOlqRI7gzbOPYeFGR8dmwKuX05H4qhvLpuDftFjvC1GcvP7cMw7XpncFCf7VPTYAvUhvFtltRgywmIg%2FnBJDyL%2FnVq9B%2B%2FSLTDyHELmljHtjFQmd%2F5cIEj219gKTntq9wikCIQ6mM68ClxgXlDyauYsCz%2BLF3HYoIkGRWYcLmPg3P0oqxXkZKwVhOooDWFqGmRlt63X7PXspMd9axJkR9S2ejN6jaMB%2F0TybV5k62w1cfmQ8yinDAz1qSRufIh5%2FXRylVdIyf0p94ImLdGyF5CPXNop6JtMX01A7JHzTPKFcIAQXkyCixEy9qD1l9DYXT1ss5qcDK8O57y9xgjFzrkSlcel91zqHfC%2B70mPnWMIneh8AGOqUBBDQ1z3hAzcu8GyJugUqfWb9eiRViYMmxjSeNqoHLQfWWsTUlpp5WLB8siFnwQnmVWWwglw55PdpF59ZnEyiHILTh0WGf07cyniP5yOb0AW0%2F2aQY7sEF15I9%2FbnN%2FSJ%2FhnU5F2WwryErTasghDTJn0X5xs8wL36MDDhCz5wdrKcjm3B3SxZvsw3HM53qbalxQuyupka46Gzln0YJXmnAymWuc6RF&X-Amz-Signature=6c32c7a913f0409580c0acbf19355725dd7aeb0f6a768c89238fc31c9a6d310e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBWSE55%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ3wvHYuDthbjhfIf7CwmZmGvntwP9Qw2smi22HEVJBAiEAzxGGb9ZxPUjnFOJzx3WLo5nvUznJxGR5qg2QfGtESo0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBTsqR3QGpRc0a0gyircAy3O0Uky7dLFwGS3vadYrZSbpqULjb2S8SePAnnTzywH3ZadaOo2ww%2FIaEYi9anu8ikwMevpmqYWbsKJuENuvJT%2BghjyguTlrKJ60WO4hlnnorpYbqP6B0wACadx1jC9G7jAinPtZ2A%2B%2FhQ8vIZe8EbTYnLVDwSqQlWmF0%2BEkl%2FCGcklpiordCLHvZRI6vI10QXh6LUyF%2Fo7rkK9ssYhvAEOlAs8dxVPJ1gOsYc08q%2Bs34PmmrEcgl7u6CVg2%2FBatE6ZsPlXJwdXScjqNP5WOlqRI7gzbOPYeFGR8dmwKuX05H4qhvLpuDftFjvC1GcvP7cMw7XpncFCf7VPTYAvUhvFtltRgywmIg%2FnBJDyL%2FnVq9B%2B%2FSLTDyHELmljHtjFQmd%2F5cIEj219gKTntq9wikCIQ6mM68ClxgXlDyauYsCz%2BLF3HYoIkGRWYcLmPg3P0oqxXkZKwVhOooDWFqGmRlt63X7PXspMd9axJkR9S2ejN6jaMB%2F0TybV5k62w1cfmQ8yinDAz1qSRufIh5%2FXRylVdIyf0p94ImLdGyF5CPXNop6JtMX01A7JHzTPKFcIAQXkyCixEy9qD1l9DYXT1ss5qcDK8O57y9xgjFzrkSlcel91zqHfC%2B70mPnWMIneh8AGOqUBBDQ1z3hAzcu8GyJugUqfWb9eiRViYMmxjSeNqoHLQfWWsTUlpp5WLB8siFnwQnmVWWwglw55PdpF59ZnEyiHILTh0WGf07cyniP5yOb0AW0%2F2aQY7sEF15I9%2FbnN%2FSJ%2FhnU5F2WwryErTasghDTJn0X5xs8wL36MDDhCz5wdrKcjm3B3SxZvsw3HM53qbalxQuyupka46Gzln0YJXmnAymWuc6RF&X-Amz-Signature=2602f30719235c73db1aec7f95b068116ad0ff6ee6b91e43640436c62413aa05&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBWSE55%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ3wvHYuDthbjhfIf7CwmZmGvntwP9Qw2smi22HEVJBAiEAzxGGb9ZxPUjnFOJzx3WLo5nvUznJxGR5qg2QfGtESo0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBTsqR3QGpRc0a0gyircAy3O0Uky7dLFwGS3vadYrZSbpqULjb2S8SePAnnTzywH3ZadaOo2ww%2FIaEYi9anu8ikwMevpmqYWbsKJuENuvJT%2BghjyguTlrKJ60WO4hlnnorpYbqP6B0wACadx1jC9G7jAinPtZ2A%2B%2FhQ8vIZe8EbTYnLVDwSqQlWmF0%2BEkl%2FCGcklpiordCLHvZRI6vI10QXh6LUyF%2Fo7rkK9ssYhvAEOlAs8dxVPJ1gOsYc08q%2Bs34PmmrEcgl7u6CVg2%2FBatE6ZsPlXJwdXScjqNP5WOlqRI7gzbOPYeFGR8dmwKuX05H4qhvLpuDftFjvC1GcvP7cMw7XpncFCf7VPTYAvUhvFtltRgywmIg%2FnBJDyL%2FnVq9B%2B%2FSLTDyHELmljHtjFQmd%2F5cIEj219gKTntq9wikCIQ6mM68ClxgXlDyauYsCz%2BLF3HYoIkGRWYcLmPg3P0oqxXkZKwVhOooDWFqGmRlt63X7PXspMd9axJkR9S2ejN6jaMB%2F0TybV5k62w1cfmQ8yinDAz1qSRufIh5%2FXRylVdIyf0p94ImLdGyF5CPXNop6JtMX01A7JHzTPKFcIAQXkyCixEy9qD1l9DYXT1ss5qcDK8O57y9xgjFzrkSlcel91zqHfC%2B70mPnWMIneh8AGOqUBBDQ1z3hAzcu8GyJugUqfWb9eiRViYMmxjSeNqoHLQfWWsTUlpp5WLB8siFnwQnmVWWwglw55PdpF59ZnEyiHILTh0WGf07cyniP5yOb0AW0%2F2aQY7sEF15I9%2FbnN%2FSJ%2FhnU5F2WwryErTasghDTJn0X5xs8wL36MDDhCz5wdrKcjm3B3SxZvsw3HM53qbalxQuyupka46Gzln0YJXmnAymWuc6RF&X-Amz-Signature=665abb9a02d24aa86a7ea9526f0d5264640f0e1d673006161d8cf24122847b59&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBWSE55%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ3wvHYuDthbjhfIf7CwmZmGvntwP9Qw2smi22HEVJBAiEAzxGGb9ZxPUjnFOJzx3WLo5nvUznJxGR5qg2QfGtESo0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBTsqR3QGpRc0a0gyircAy3O0Uky7dLFwGS3vadYrZSbpqULjb2S8SePAnnTzywH3ZadaOo2ww%2FIaEYi9anu8ikwMevpmqYWbsKJuENuvJT%2BghjyguTlrKJ60WO4hlnnorpYbqP6B0wACadx1jC9G7jAinPtZ2A%2B%2FhQ8vIZe8EbTYnLVDwSqQlWmF0%2BEkl%2FCGcklpiordCLHvZRI6vI10QXh6LUyF%2Fo7rkK9ssYhvAEOlAs8dxVPJ1gOsYc08q%2Bs34PmmrEcgl7u6CVg2%2FBatE6ZsPlXJwdXScjqNP5WOlqRI7gzbOPYeFGR8dmwKuX05H4qhvLpuDftFjvC1GcvP7cMw7XpncFCf7VPTYAvUhvFtltRgywmIg%2FnBJDyL%2FnVq9B%2B%2FSLTDyHELmljHtjFQmd%2F5cIEj219gKTntq9wikCIQ6mM68ClxgXlDyauYsCz%2BLF3HYoIkGRWYcLmPg3P0oqxXkZKwVhOooDWFqGmRlt63X7PXspMd9axJkR9S2ejN6jaMB%2F0TybV5k62w1cfmQ8yinDAz1qSRufIh5%2FXRylVdIyf0p94ImLdGyF5CPXNop6JtMX01A7JHzTPKFcIAQXkyCixEy9qD1l9DYXT1ss5qcDK8O57y9xgjFzrkSlcel91zqHfC%2B70mPnWMIneh8AGOqUBBDQ1z3hAzcu8GyJugUqfWb9eiRViYMmxjSeNqoHLQfWWsTUlpp5WLB8siFnwQnmVWWwglw55PdpF59ZnEyiHILTh0WGf07cyniP5yOb0AW0%2F2aQY7sEF15I9%2FbnN%2FSJ%2FhnU5F2WwryErTasghDTJn0X5xs8wL36MDDhCz5wdrKcjm3B3SxZvsw3HM53qbalxQuyupka46Gzln0YJXmnAymWuc6RF&X-Amz-Signature=af81c08e60a0e17df1ae50e11dd8f3eb3ebf9b67c667f1c1d799cdaae35a5678&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBWSE55%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ3wvHYuDthbjhfIf7CwmZmGvntwP9Qw2smi22HEVJBAiEAzxGGb9ZxPUjnFOJzx3WLo5nvUznJxGR5qg2QfGtESo0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBTsqR3QGpRc0a0gyircAy3O0Uky7dLFwGS3vadYrZSbpqULjb2S8SePAnnTzywH3ZadaOo2ww%2FIaEYi9anu8ikwMevpmqYWbsKJuENuvJT%2BghjyguTlrKJ60WO4hlnnorpYbqP6B0wACadx1jC9G7jAinPtZ2A%2B%2FhQ8vIZe8EbTYnLVDwSqQlWmF0%2BEkl%2FCGcklpiordCLHvZRI6vI10QXh6LUyF%2Fo7rkK9ssYhvAEOlAs8dxVPJ1gOsYc08q%2Bs34PmmrEcgl7u6CVg2%2FBatE6ZsPlXJwdXScjqNP5WOlqRI7gzbOPYeFGR8dmwKuX05H4qhvLpuDftFjvC1GcvP7cMw7XpncFCf7VPTYAvUhvFtltRgywmIg%2FnBJDyL%2FnVq9B%2B%2FSLTDyHELmljHtjFQmd%2F5cIEj219gKTntq9wikCIQ6mM68ClxgXlDyauYsCz%2BLF3HYoIkGRWYcLmPg3P0oqxXkZKwVhOooDWFqGmRlt63X7PXspMd9axJkR9S2ejN6jaMB%2F0TybV5k62w1cfmQ8yinDAz1qSRufIh5%2FXRylVdIyf0p94ImLdGyF5CPXNop6JtMX01A7JHzTPKFcIAQXkyCixEy9qD1l9DYXT1ss5qcDK8O57y9xgjFzrkSlcel91zqHfC%2B70mPnWMIneh8AGOqUBBDQ1z3hAzcu8GyJugUqfWb9eiRViYMmxjSeNqoHLQfWWsTUlpp5WLB8siFnwQnmVWWwglw55PdpF59ZnEyiHILTh0WGf07cyniP5yOb0AW0%2F2aQY7sEF15I9%2FbnN%2FSJ%2FhnU5F2WwryErTasghDTJn0X5xs8wL36MDDhCz5wdrKcjm3B3SxZvsw3HM53qbalxQuyupka46Gzln0YJXmnAymWuc6RF&X-Amz-Signature=03631d383482cb33c3713a26856202b15febe196194fe82615cbee76e053a15f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBWSE55%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ3wvHYuDthbjhfIf7CwmZmGvntwP9Qw2smi22HEVJBAiEAzxGGb9ZxPUjnFOJzx3WLo5nvUznJxGR5qg2QfGtESo0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBTsqR3QGpRc0a0gyircAy3O0Uky7dLFwGS3vadYrZSbpqULjb2S8SePAnnTzywH3ZadaOo2ww%2FIaEYi9anu8ikwMevpmqYWbsKJuENuvJT%2BghjyguTlrKJ60WO4hlnnorpYbqP6B0wACadx1jC9G7jAinPtZ2A%2B%2FhQ8vIZe8EbTYnLVDwSqQlWmF0%2BEkl%2FCGcklpiordCLHvZRI6vI10QXh6LUyF%2Fo7rkK9ssYhvAEOlAs8dxVPJ1gOsYc08q%2Bs34PmmrEcgl7u6CVg2%2FBatE6ZsPlXJwdXScjqNP5WOlqRI7gzbOPYeFGR8dmwKuX05H4qhvLpuDftFjvC1GcvP7cMw7XpncFCf7VPTYAvUhvFtltRgywmIg%2FnBJDyL%2FnVq9B%2B%2FSLTDyHELmljHtjFQmd%2F5cIEj219gKTntq9wikCIQ6mM68ClxgXlDyauYsCz%2BLF3HYoIkGRWYcLmPg3P0oqxXkZKwVhOooDWFqGmRlt63X7PXspMd9axJkR9S2ejN6jaMB%2F0TybV5k62w1cfmQ8yinDAz1qSRufIh5%2FXRylVdIyf0p94ImLdGyF5CPXNop6JtMX01A7JHzTPKFcIAQXkyCixEy9qD1l9DYXT1ss5qcDK8O57y9xgjFzrkSlcel91zqHfC%2B70mPnWMIneh8AGOqUBBDQ1z3hAzcu8GyJugUqfWb9eiRViYMmxjSeNqoHLQfWWsTUlpp5WLB8siFnwQnmVWWwglw55PdpF59ZnEyiHILTh0WGf07cyniP5yOb0AW0%2F2aQY7sEF15I9%2FbnN%2FSJ%2FhnU5F2WwryErTasghDTJn0X5xs8wL36MDDhCz5wdrKcjm3B3SxZvsw3HM53qbalxQuyupka46Gzln0YJXmnAymWuc6RF&X-Amz-Signature=234f2c0cb3bd938535e00bb8d210d76965e82af31a12e8d2db8e514cc3707aab&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LBWSE55%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ3wvHYuDthbjhfIf7CwmZmGvntwP9Qw2smi22HEVJBAiEAzxGGb9ZxPUjnFOJzx3WLo5nvUznJxGR5qg2QfGtESo0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBTsqR3QGpRc0a0gyircAy3O0Uky7dLFwGS3vadYrZSbpqULjb2S8SePAnnTzywH3ZadaOo2ww%2FIaEYi9anu8ikwMevpmqYWbsKJuENuvJT%2BghjyguTlrKJ60WO4hlnnorpYbqP6B0wACadx1jC9G7jAinPtZ2A%2B%2FhQ8vIZe8EbTYnLVDwSqQlWmF0%2BEkl%2FCGcklpiordCLHvZRI6vI10QXh6LUyF%2Fo7rkK9ssYhvAEOlAs8dxVPJ1gOsYc08q%2Bs34PmmrEcgl7u6CVg2%2FBatE6ZsPlXJwdXScjqNP5WOlqRI7gzbOPYeFGR8dmwKuX05H4qhvLpuDftFjvC1GcvP7cMw7XpncFCf7VPTYAvUhvFtltRgywmIg%2FnBJDyL%2FnVq9B%2B%2FSLTDyHELmljHtjFQmd%2F5cIEj219gKTntq9wikCIQ6mM68ClxgXlDyauYsCz%2BLF3HYoIkGRWYcLmPg3P0oqxXkZKwVhOooDWFqGmRlt63X7PXspMd9axJkR9S2ejN6jaMB%2F0TybV5k62w1cfmQ8yinDAz1qSRufIh5%2FXRylVdIyf0p94ImLdGyF5CPXNop6JtMX01A7JHzTPKFcIAQXkyCixEy9qD1l9DYXT1ss5qcDK8O57y9xgjFzrkSlcel91zqHfC%2B70mPnWMIneh8AGOqUBBDQ1z3hAzcu8GyJugUqfWb9eiRViYMmxjSeNqoHLQfWWsTUlpp5WLB8siFnwQnmVWWwglw55PdpF59ZnEyiHILTh0WGf07cyniP5yOb0AW0%2F2aQY7sEF15I9%2FbnN%2FSJ%2FhnU5F2WwryErTasghDTJn0X5xs8wL36MDDhCz5wdrKcjm3B3SxZvsw3HM53qbalxQuyupka46Gzln0YJXmnAymWuc6RF&X-Amz-Signature=33239ef1c7c9b2def6051c17170cfddfbb4f863546e78f93ae28605fca018b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
