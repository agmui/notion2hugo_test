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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CW7OXPD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDeX8n9uu3pgY7Kb4Rx0X5isiCftcl1TwCJRmk5jnvtiwIgTc6pFXZLHqsrMEdk8oXOzzverqXsF0gYgCXpf4GSxCUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMu2cUUfEHlzAJcWircAwY4opOUH%2BtFgavQF6x2Red7U9Ibhzs9Kmt6YkQAXgJ3oyF%2B0fhZwx9%2BoBpMTjHpDUVEYUlH%2Bo3xDFLXQCkoyV3DPJVia%2By5C0WPlAZuMWXB5PCbU1DSDdHzHANHacMApll%2FcNsjlatqwxWpbGA5R6rkTuXjGjXKmiEdQ%2FhcD2BbA98LXE6b8N2TT9sU0H9UkGi1wWPOePr4jn2eD7whPUurGXCbCbHhKJXQUATJ2sAez4uceEGVuKFWX00lM%2FwGcK1X5twZqfRk20lBnp0p%2BSbA3jb6VWS7nvB6RCvaXhojnkAVnLNA5zRwdn4Y06NfR1qhb9MrTt%2BAladtYeJEJYp9JuyOh2cNpvZn47ZtuUY6uNkSO0qxh0OdFcHnjDMyzj4QPWEqSAPLWgK%2BBOxDxyGVbhaXtP26zH63DzHP3lZmoYMiLXJwMUGlXqr%2BXMaVi3cnN6dhTnF3RaI6CLpb9jqwZY4caQAdFdvyZK8SNaJ6zuC%2Fxi%2B86fhuE3%2BnLM4cGAyZtzJ0l%2BQnbO%2BYrNmP84jGXhYoiafgfOZSnNZUlGRCPdrzeb4bw9%2F05C7YdkWost3BoQWC1Gw3bXopOOiRdaj6OKTn8xpWLhYb3L2%2FcgBJhFodqWxcuAaIhLvXMM%2BG1sAGOqUBYf7GQsEhtNpcC1O44DJlZhefNC5M2Ldmy9TbQMpD%2BbElNzZIq4g7sCH89Bj7fwhqgiVKIbXITsehfCfal3rqdUmtUlKC77s2y0atXFffqJSj%2B5P88RbP%2F0mGe7kDvKq%2BU3FrS1tSpd4DEya8%2FvrfdxGl2pFxIstj%2BYw7e1NfiZfeV%2FBsXs8arYuFiLzf7wbpTSfQIH61bWczruxvDLw0MtHVVHs%2B&X-Amz-Signature=4baa77b3c4a58b9794fc862290aab0198c58d26dc44828e0c4d351100bd3475f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CW7OXPD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDeX8n9uu3pgY7Kb4Rx0X5isiCftcl1TwCJRmk5jnvtiwIgTc6pFXZLHqsrMEdk8oXOzzverqXsF0gYgCXpf4GSxCUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMu2cUUfEHlzAJcWircAwY4opOUH%2BtFgavQF6x2Red7U9Ibhzs9Kmt6YkQAXgJ3oyF%2B0fhZwx9%2BoBpMTjHpDUVEYUlH%2Bo3xDFLXQCkoyV3DPJVia%2By5C0WPlAZuMWXB5PCbU1DSDdHzHANHacMApll%2FcNsjlatqwxWpbGA5R6rkTuXjGjXKmiEdQ%2FhcD2BbA98LXE6b8N2TT9sU0H9UkGi1wWPOePr4jn2eD7whPUurGXCbCbHhKJXQUATJ2sAez4uceEGVuKFWX00lM%2FwGcK1X5twZqfRk20lBnp0p%2BSbA3jb6VWS7nvB6RCvaXhojnkAVnLNA5zRwdn4Y06NfR1qhb9MrTt%2BAladtYeJEJYp9JuyOh2cNpvZn47ZtuUY6uNkSO0qxh0OdFcHnjDMyzj4QPWEqSAPLWgK%2BBOxDxyGVbhaXtP26zH63DzHP3lZmoYMiLXJwMUGlXqr%2BXMaVi3cnN6dhTnF3RaI6CLpb9jqwZY4caQAdFdvyZK8SNaJ6zuC%2Fxi%2B86fhuE3%2BnLM4cGAyZtzJ0l%2BQnbO%2BYrNmP84jGXhYoiafgfOZSnNZUlGRCPdrzeb4bw9%2F05C7YdkWost3BoQWC1Gw3bXopOOiRdaj6OKTn8xpWLhYb3L2%2FcgBJhFodqWxcuAaIhLvXMM%2BG1sAGOqUBYf7GQsEhtNpcC1O44DJlZhefNC5M2Ldmy9TbQMpD%2BbElNzZIq4g7sCH89Bj7fwhqgiVKIbXITsehfCfal3rqdUmtUlKC77s2y0atXFffqJSj%2B5P88RbP%2F0mGe7kDvKq%2BU3FrS1tSpd4DEya8%2FvrfdxGl2pFxIstj%2BYw7e1NfiZfeV%2FBsXs8arYuFiLzf7wbpTSfQIH61bWczruxvDLw0MtHVVHs%2B&X-Amz-Signature=b3c140ef380ebd2d7e11c68282c32105dd7ec45af1564b62ba8159bc1763a4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CW7OXPD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDeX8n9uu3pgY7Kb4Rx0X5isiCftcl1TwCJRmk5jnvtiwIgTc6pFXZLHqsrMEdk8oXOzzverqXsF0gYgCXpf4GSxCUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMu2cUUfEHlzAJcWircAwY4opOUH%2BtFgavQF6x2Red7U9Ibhzs9Kmt6YkQAXgJ3oyF%2B0fhZwx9%2BoBpMTjHpDUVEYUlH%2Bo3xDFLXQCkoyV3DPJVia%2By5C0WPlAZuMWXB5PCbU1DSDdHzHANHacMApll%2FcNsjlatqwxWpbGA5R6rkTuXjGjXKmiEdQ%2FhcD2BbA98LXE6b8N2TT9sU0H9UkGi1wWPOePr4jn2eD7whPUurGXCbCbHhKJXQUATJ2sAez4uceEGVuKFWX00lM%2FwGcK1X5twZqfRk20lBnp0p%2BSbA3jb6VWS7nvB6RCvaXhojnkAVnLNA5zRwdn4Y06NfR1qhb9MrTt%2BAladtYeJEJYp9JuyOh2cNpvZn47ZtuUY6uNkSO0qxh0OdFcHnjDMyzj4QPWEqSAPLWgK%2BBOxDxyGVbhaXtP26zH63DzHP3lZmoYMiLXJwMUGlXqr%2BXMaVi3cnN6dhTnF3RaI6CLpb9jqwZY4caQAdFdvyZK8SNaJ6zuC%2Fxi%2B86fhuE3%2BnLM4cGAyZtzJ0l%2BQnbO%2BYrNmP84jGXhYoiafgfOZSnNZUlGRCPdrzeb4bw9%2F05C7YdkWost3BoQWC1Gw3bXopOOiRdaj6OKTn8xpWLhYb3L2%2FcgBJhFodqWxcuAaIhLvXMM%2BG1sAGOqUBYf7GQsEhtNpcC1O44DJlZhefNC5M2Ldmy9TbQMpD%2BbElNzZIq4g7sCH89Bj7fwhqgiVKIbXITsehfCfal3rqdUmtUlKC77s2y0atXFffqJSj%2B5P88RbP%2F0mGe7kDvKq%2BU3FrS1tSpd4DEya8%2FvrfdxGl2pFxIstj%2BYw7e1NfiZfeV%2FBsXs8arYuFiLzf7wbpTSfQIH61bWczruxvDLw0MtHVVHs%2B&X-Amz-Signature=5b7526db17a9be26b71029c76f849bf246a1fe83598a7d61af0a9445431c6975&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CW7OXPD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDeX8n9uu3pgY7Kb4Rx0X5isiCftcl1TwCJRmk5jnvtiwIgTc6pFXZLHqsrMEdk8oXOzzverqXsF0gYgCXpf4GSxCUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMu2cUUfEHlzAJcWircAwY4opOUH%2BtFgavQF6x2Red7U9Ibhzs9Kmt6YkQAXgJ3oyF%2B0fhZwx9%2BoBpMTjHpDUVEYUlH%2Bo3xDFLXQCkoyV3DPJVia%2By5C0WPlAZuMWXB5PCbU1DSDdHzHANHacMApll%2FcNsjlatqwxWpbGA5R6rkTuXjGjXKmiEdQ%2FhcD2BbA98LXE6b8N2TT9sU0H9UkGi1wWPOePr4jn2eD7whPUurGXCbCbHhKJXQUATJ2sAez4uceEGVuKFWX00lM%2FwGcK1X5twZqfRk20lBnp0p%2BSbA3jb6VWS7nvB6RCvaXhojnkAVnLNA5zRwdn4Y06NfR1qhb9MrTt%2BAladtYeJEJYp9JuyOh2cNpvZn47ZtuUY6uNkSO0qxh0OdFcHnjDMyzj4QPWEqSAPLWgK%2BBOxDxyGVbhaXtP26zH63DzHP3lZmoYMiLXJwMUGlXqr%2BXMaVi3cnN6dhTnF3RaI6CLpb9jqwZY4caQAdFdvyZK8SNaJ6zuC%2Fxi%2B86fhuE3%2BnLM4cGAyZtzJ0l%2BQnbO%2BYrNmP84jGXhYoiafgfOZSnNZUlGRCPdrzeb4bw9%2F05C7YdkWost3BoQWC1Gw3bXopOOiRdaj6OKTn8xpWLhYb3L2%2FcgBJhFodqWxcuAaIhLvXMM%2BG1sAGOqUBYf7GQsEhtNpcC1O44DJlZhefNC5M2Ldmy9TbQMpD%2BbElNzZIq4g7sCH89Bj7fwhqgiVKIbXITsehfCfal3rqdUmtUlKC77s2y0atXFffqJSj%2B5P88RbP%2F0mGe7kDvKq%2BU3FrS1tSpd4DEya8%2FvrfdxGl2pFxIstj%2BYw7e1NfiZfeV%2FBsXs8arYuFiLzf7wbpTSfQIH61bWczruxvDLw0MtHVVHs%2B&X-Amz-Signature=1509c5a0e869ca02e0d1549e0010812e802a6bc190e63bd1a91f8c14b3404f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CW7OXPD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDeX8n9uu3pgY7Kb4Rx0X5isiCftcl1TwCJRmk5jnvtiwIgTc6pFXZLHqsrMEdk8oXOzzverqXsF0gYgCXpf4GSxCUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMu2cUUfEHlzAJcWircAwY4opOUH%2BtFgavQF6x2Red7U9Ibhzs9Kmt6YkQAXgJ3oyF%2B0fhZwx9%2BoBpMTjHpDUVEYUlH%2Bo3xDFLXQCkoyV3DPJVia%2By5C0WPlAZuMWXB5PCbU1DSDdHzHANHacMApll%2FcNsjlatqwxWpbGA5R6rkTuXjGjXKmiEdQ%2FhcD2BbA98LXE6b8N2TT9sU0H9UkGi1wWPOePr4jn2eD7whPUurGXCbCbHhKJXQUATJ2sAez4uceEGVuKFWX00lM%2FwGcK1X5twZqfRk20lBnp0p%2BSbA3jb6VWS7nvB6RCvaXhojnkAVnLNA5zRwdn4Y06NfR1qhb9MrTt%2BAladtYeJEJYp9JuyOh2cNpvZn47ZtuUY6uNkSO0qxh0OdFcHnjDMyzj4QPWEqSAPLWgK%2BBOxDxyGVbhaXtP26zH63DzHP3lZmoYMiLXJwMUGlXqr%2BXMaVi3cnN6dhTnF3RaI6CLpb9jqwZY4caQAdFdvyZK8SNaJ6zuC%2Fxi%2B86fhuE3%2BnLM4cGAyZtzJ0l%2BQnbO%2BYrNmP84jGXhYoiafgfOZSnNZUlGRCPdrzeb4bw9%2F05C7YdkWost3BoQWC1Gw3bXopOOiRdaj6OKTn8xpWLhYb3L2%2FcgBJhFodqWxcuAaIhLvXMM%2BG1sAGOqUBYf7GQsEhtNpcC1O44DJlZhefNC5M2Ldmy9TbQMpD%2BbElNzZIq4g7sCH89Bj7fwhqgiVKIbXITsehfCfal3rqdUmtUlKC77s2y0atXFffqJSj%2B5P88RbP%2F0mGe7kDvKq%2BU3FrS1tSpd4DEya8%2FvrfdxGl2pFxIstj%2BYw7e1NfiZfeV%2FBsXs8arYuFiLzf7wbpTSfQIH61bWczruxvDLw0MtHVVHs%2B&X-Amz-Signature=07fa0014888108a74cb7f8d17dc5c9171d3ffb4dea7484f75ac94fbc5526f178&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CW7OXPD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDeX8n9uu3pgY7Kb4Rx0X5isiCftcl1TwCJRmk5jnvtiwIgTc6pFXZLHqsrMEdk8oXOzzverqXsF0gYgCXpf4GSxCUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMu2cUUfEHlzAJcWircAwY4opOUH%2BtFgavQF6x2Red7U9Ibhzs9Kmt6YkQAXgJ3oyF%2B0fhZwx9%2BoBpMTjHpDUVEYUlH%2Bo3xDFLXQCkoyV3DPJVia%2By5C0WPlAZuMWXB5PCbU1DSDdHzHANHacMApll%2FcNsjlatqwxWpbGA5R6rkTuXjGjXKmiEdQ%2FhcD2BbA98LXE6b8N2TT9sU0H9UkGi1wWPOePr4jn2eD7whPUurGXCbCbHhKJXQUATJ2sAez4uceEGVuKFWX00lM%2FwGcK1X5twZqfRk20lBnp0p%2BSbA3jb6VWS7nvB6RCvaXhojnkAVnLNA5zRwdn4Y06NfR1qhb9MrTt%2BAladtYeJEJYp9JuyOh2cNpvZn47ZtuUY6uNkSO0qxh0OdFcHnjDMyzj4QPWEqSAPLWgK%2BBOxDxyGVbhaXtP26zH63DzHP3lZmoYMiLXJwMUGlXqr%2BXMaVi3cnN6dhTnF3RaI6CLpb9jqwZY4caQAdFdvyZK8SNaJ6zuC%2Fxi%2B86fhuE3%2BnLM4cGAyZtzJ0l%2BQnbO%2BYrNmP84jGXhYoiafgfOZSnNZUlGRCPdrzeb4bw9%2F05C7YdkWost3BoQWC1Gw3bXopOOiRdaj6OKTn8xpWLhYb3L2%2FcgBJhFodqWxcuAaIhLvXMM%2BG1sAGOqUBYf7GQsEhtNpcC1O44DJlZhefNC5M2Ldmy9TbQMpD%2BbElNzZIq4g7sCH89Bj7fwhqgiVKIbXITsehfCfal3rqdUmtUlKC77s2y0atXFffqJSj%2B5P88RbP%2F0mGe7kDvKq%2BU3FrS1tSpd4DEya8%2FvrfdxGl2pFxIstj%2BYw7e1NfiZfeV%2FBsXs8arYuFiLzf7wbpTSfQIH61bWczruxvDLw0MtHVVHs%2B&X-Amz-Signature=83f47a3e4e70a7a11db71ae2f127b5c1a3b0a9bac5692024e6e0afb89dc8fb1a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CW7OXPD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDeX8n9uu3pgY7Kb4Rx0X5isiCftcl1TwCJRmk5jnvtiwIgTc6pFXZLHqsrMEdk8oXOzzverqXsF0gYgCXpf4GSxCUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMu2cUUfEHlzAJcWircAwY4opOUH%2BtFgavQF6x2Red7U9Ibhzs9Kmt6YkQAXgJ3oyF%2B0fhZwx9%2BoBpMTjHpDUVEYUlH%2Bo3xDFLXQCkoyV3DPJVia%2By5C0WPlAZuMWXB5PCbU1DSDdHzHANHacMApll%2FcNsjlatqwxWpbGA5R6rkTuXjGjXKmiEdQ%2FhcD2BbA98LXE6b8N2TT9sU0H9UkGi1wWPOePr4jn2eD7whPUurGXCbCbHhKJXQUATJ2sAez4uceEGVuKFWX00lM%2FwGcK1X5twZqfRk20lBnp0p%2BSbA3jb6VWS7nvB6RCvaXhojnkAVnLNA5zRwdn4Y06NfR1qhb9MrTt%2BAladtYeJEJYp9JuyOh2cNpvZn47ZtuUY6uNkSO0qxh0OdFcHnjDMyzj4QPWEqSAPLWgK%2BBOxDxyGVbhaXtP26zH63DzHP3lZmoYMiLXJwMUGlXqr%2BXMaVi3cnN6dhTnF3RaI6CLpb9jqwZY4caQAdFdvyZK8SNaJ6zuC%2Fxi%2B86fhuE3%2BnLM4cGAyZtzJ0l%2BQnbO%2BYrNmP84jGXhYoiafgfOZSnNZUlGRCPdrzeb4bw9%2F05C7YdkWost3BoQWC1Gw3bXopOOiRdaj6OKTn8xpWLhYb3L2%2FcgBJhFodqWxcuAaIhLvXMM%2BG1sAGOqUBYf7GQsEhtNpcC1O44DJlZhefNC5M2Ldmy9TbQMpD%2BbElNzZIq4g7sCH89Bj7fwhqgiVKIbXITsehfCfal3rqdUmtUlKC77s2y0atXFffqJSj%2B5P88RbP%2F0mGe7kDvKq%2BU3FrS1tSpd4DEya8%2FvrfdxGl2pFxIstj%2BYw7e1NfiZfeV%2FBsXs8arYuFiLzf7wbpTSfQIH61bWczruxvDLw0MtHVVHs%2B&X-Amz-Signature=22e146025461aff56a978cfcb3b5c6a2bd161987e3f05dedd2ae02136290c550&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
