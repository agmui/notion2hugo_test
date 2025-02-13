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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEF542X%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDemt3EeiEp6dIPItiZDGY3yws%2BE5TEYlIyRdPyIWjxcQIgVezt1IWR3fQBKC%2F6G%2BxXNrvRMkSfmkqfBkTznFR1VMMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLwx69i%2F794z3f2V6CrcA8FmatvwMQhGGq07YtXEK8l81XvGzA7tBnISpmNmfTuA9Da9FIhxnl6UFF6niU6JTDc4ygs5Ij0iEZd0n3q0YzgtyTd9sUV%2FlZpFt%2FWPAMXWmLGO1dde%2B212SUr2WdOdha6SJwQJvo4iaIboLGitcSy2kiNyDVmVKEvO5i3TQD%2FSfmAHw8ATUXLpSKes1jokSjlyzbbNFC8ZORO6Iv%2BHl50s5Vh%2FKzDIw6JqAmzvfKsX9tX7dvu6YlfPfiHQ3uEUdDMQva%2Bxhj1o4AQkuTG11cSshB3TYP1%2Bk0CytFyLq5RILVZg4ubi20NYboMrB64tlzs9E%2BE6f4WjR9gaCFh3NFwZmRycTefNPe5BKp59RVFHqb%2F7R9ajeNsSBatVXox7JqfHgIzOIBD%2BrqRI4uRDGhnGN2k6Ffq1f8ArDlGDJ9i8Cn1eg87bglhXLLtVkXOA3aHS8xg0oRIUt5TVLPRzG2HseCA7lxKy5KiV%2FYpeKgch1rFkxe%2FmDg6agwuDXTDofYJRNlEjQ%2FpaFIgvp0GQ6okjgA7DEQxXbdBsPFset0CYzazLqo7qnZsvy2QdGuaq2cIFaW0M8mL1LxyN%2B3bqtdZrnwnODT2huozOE6nwAMyBI7ILGFY1fHtVqjeNMKjet70GOqUB9Z4EIt6cy9q2UU1N0JiGlPtKiHij7ZrdlQMpCvxV8pqjuHGMgswMbo0xbEwqbBJB4hQniE0KbLg3hZ6LG%2FrqFWbOzKBFC2RRmwtatgb8Hqb5yiabB3TmX0HHogxuZ5xrRh5qq5XtVUPuYYACoX1FO0fF0X3fu12hqlR%2F%2BF6d4X1yQcCSdR7Ewo5zyC%2BaLGNPQx9E5ELh%2BK7JgILkDNq%2F%2F51MY0XA&X-Amz-Signature=735212cc53da1b7b0ec93307ae32025bf3fd64408ca5338dbb08a1a45fab31dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEF542X%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDemt3EeiEp6dIPItiZDGY3yws%2BE5TEYlIyRdPyIWjxcQIgVezt1IWR3fQBKC%2F6G%2BxXNrvRMkSfmkqfBkTznFR1VMMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLwx69i%2F794z3f2V6CrcA8FmatvwMQhGGq07YtXEK8l81XvGzA7tBnISpmNmfTuA9Da9FIhxnl6UFF6niU6JTDc4ygs5Ij0iEZd0n3q0YzgtyTd9sUV%2FlZpFt%2FWPAMXWmLGO1dde%2B212SUr2WdOdha6SJwQJvo4iaIboLGitcSy2kiNyDVmVKEvO5i3TQD%2FSfmAHw8ATUXLpSKes1jokSjlyzbbNFC8ZORO6Iv%2BHl50s5Vh%2FKzDIw6JqAmzvfKsX9tX7dvu6YlfPfiHQ3uEUdDMQva%2Bxhj1o4AQkuTG11cSshB3TYP1%2Bk0CytFyLq5RILVZg4ubi20NYboMrB64tlzs9E%2BE6f4WjR9gaCFh3NFwZmRycTefNPe5BKp59RVFHqb%2F7R9ajeNsSBatVXox7JqfHgIzOIBD%2BrqRI4uRDGhnGN2k6Ffq1f8ArDlGDJ9i8Cn1eg87bglhXLLtVkXOA3aHS8xg0oRIUt5TVLPRzG2HseCA7lxKy5KiV%2FYpeKgch1rFkxe%2FmDg6agwuDXTDofYJRNlEjQ%2FpaFIgvp0GQ6okjgA7DEQxXbdBsPFset0CYzazLqo7qnZsvy2QdGuaq2cIFaW0M8mL1LxyN%2B3bqtdZrnwnODT2huozOE6nwAMyBI7ILGFY1fHtVqjeNMKjet70GOqUB9Z4EIt6cy9q2UU1N0JiGlPtKiHij7ZrdlQMpCvxV8pqjuHGMgswMbo0xbEwqbBJB4hQniE0KbLg3hZ6LG%2FrqFWbOzKBFC2RRmwtatgb8Hqb5yiabB3TmX0HHogxuZ5xrRh5qq5XtVUPuYYACoX1FO0fF0X3fu12hqlR%2F%2BF6d4X1yQcCSdR7Ewo5zyC%2BaLGNPQx9E5ELh%2BK7JgILkDNq%2F%2F51MY0XA&X-Amz-Signature=8222a40807a7e3d317a77e619e31ef07d7692b6c836986caa8dae13de346f4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEF542X%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDemt3EeiEp6dIPItiZDGY3yws%2BE5TEYlIyRdPyIWjxcQIgVezt1IWR3fQBKC%2F6G%2BxXNrvRMkSfmkqfBkTznFR1VMMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLwx69i%2F794z3f2V6CrcA8FmatvwMQhGGq07YtXEK8l81XvGzA7tBnISpmNmfTuA9Da9FIhxnl6UFF6niU6JTDc4ygs5Ij0iEZd0n3q0YzgtyTd9sUV%2FlZpFt%2FWPAMXWmLGO1dde%2B212SUr2WdOdha6SJwQJvo4iaIboLGitcSy2kiNyDVmVKEvO5i3TQD%2FSfmAHw8ATUXLpSKes1jokSjlyzbbNFC8ZORO6Iv%2BHl50s5Vh%2FKzDIw6JqAmzvfKsX9tX7dvu6YlfPfiHQ3uEUdDMQva%2Bxhj1o4AQkuTG11cSshB3TYP1%2Bk0CytFyLq5RILVZg4ubi20NYboMrB64tlzs9E%2BE6f4WjR9gaCFh3NFwZmRycTefNPe5BKp59RVFHqb%2F7R9ajeNsSBatVXox7JqfHgIzOIBD%2BrqRI4uRDGhnGN2k6Ffq1f8ArDlGDJ9i8Cn1eg87bglhXLLtVkXOA3aHS8xg0oRIUt5TVLPRzG2HseCA7lxKy5KiV%2FYpeKgch1rFkxe%2FmDg6agwuDXTDofYJRNlEjQ%2FpaFIgvp0GQ6okjgA7DEQxXbdBsPFset0CYzazLqo7qnZsvy2QdGuaq2cIFaW0M8mL1LxyN%2B3bqtdZrnwnODT2huozOE6nwAMyBI7ILGFY1fHtVqjeNMKjet70GOqUB9Z4EIt6cy9q2UU1N0JiGlPtKiHij7ZrdlQMpCvxV8pqjuHGMgswMbo0xbEwqbBJB4hQniE0KbLg3hZ6LG%2FrqFWbOzKBFC2RRmwtatgb8Hqb5yiabB3TmX0HHogxuZ5xrRh5qq5XtVUPuYYACoX1FO0fF0X3fu12hqlR%2F%2BF6d4X1yQcCSdR7Ewo5zyC%2BaLGNPQx9E5ELh%2BK7JgILkDNq%2F%2F51MY0XA&X-Amz-Signature=bd40f15fbae6b877e708f0f94cabc686389486afc33d0ca11a3ba252395a50f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEF542X%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDemt3EeiEp6dIPItiZDGY3yws%2BE5TEYlIyRdPyIWjxcQIgVezt1IWR3fQBKC%2F6G%2BxXNrvRMkSfmkqfBkTznFR1VMMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLwx69i%2F794z3f2V6CrcA8FmatvwMQhGGq07YtXEK8l81XvGzA7tBnISpmNmfTuA9Da9FIhxnl6UFF6niU6JTDc4ygs5Ij0iEZd0n3q0YzgtyTd9sUV%2FlZpFt%2FWPAMXWmLGO1dde%2B212SUr2WdOdha6SJwQJvo4iaIboLGitcSy2kiNyDVmVKEvO5i3TQD%2FSfmAHw8ATUXLpSKes1jokSjlyzbbNFC8ZORO6Iv%2BHl50s5Vh%2FKzDIw6JqAmzvfKsX9tX7dvu6YlfPfiHQ3uEUdDMQva%2Bxhj1o4AQkuTG11cSshB3TYP1%2Bk0CytFyLq5RILVZg4ubi20NYboMrB64tlzs9E%2BE6f4WjR9gaCFh3NFwZmRycTefNPe5BKp59RVFHqb%2F7R9ajeNsSBatVXox7JqfHgIzOIBD%2BrqRI4uRDGhnGN2k6Ffq1f8ArDlGDJ9i8Cn1eg87bglhXLLtVkXOA3aHS8xg0oRIUt5TVLPRzG2HseCA7lxKy5KiV%2FYpeKgch1rFkxe%2FmDg6agwuDXTDofYJRNlEjQ%2FpaFIgvp0GQ6okjgA7DEQxXbdBsPFset0CYzazLqo7qnZsvy2QdGuaq2cIFaW0M8mL1LxyN%2B3bqtdZrnwnODT2huozOE6nwAMyBI7ILGFY1fHtVqjeNMKjet70GOqUB9Z4EIt6cy9q2UU1N0JiGlPtKiHij7ZrdlQMpCvxV8pqjuHGMgswMbo0xbEwqbBJB4hQniE0KbLg3hZ6LG%2FrqFWbOzKBFC2RRmwtatgb8Hqb5yiabB3TmX0HHogxuZ5xrRh5qq5XtVUPuYYACoX1FO0fF0X3fu12hqlR%2F%2BF6d4X1yQcCSdR7Ewo5zyC%2BaLGNPQx9E5ELh%2BK7JgILkDNq%2F%2F51MY0XA&X-Amz-Signature=daecfef11861b28e684a0f64fac48c5e47ef8666a08af5fc82b8ca40602d5ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEF542X%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDemt3EeiEp6dIPItiZDGY3yws%2BE5TEYlIyRdPyIWjxcQIgVezt1IWR3fQBKC%2F6G%2BxXNrvRMkSfmkqfBkTznFR1VMMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLwx69i%2F794z3f2V6CrcA8FmatvwMQhGGq07YtXEK8l81XvGzA7tBnISpmNmfTuA9Da9FIhxnl6UFF6niU6JTDc4ygs5Ij0iEZd0n3q0YzgtyTd9sUV%2FlZpFt%2FWPAMXWmLGO1dde%2B212SUr2WdOdha6SJwQJvo4iaIboLGitcSy2kiNyDVmVKEvO5i3TQD%2FSfmAHw8ATUXLpSKes1jokSjlyzbbNFC8ZORO6Iv%2BHl50s5Vh%2FKzDIw6JqAmzvfKsX9tX7dvu6YlfPfiHQ3uEUdDMQva%2Bxhj1o4AQkuTG11cSshB3TYP1%2Bk0CytFyLq5RILVZg4ubi20NYboMrB64tlzs9E%2BE6f4WjR9gaCFh3NFwZmRycTefNPe5BKp59RVFHqb%2F7R9ajeNsSBatVXox7JqfHgIzOIBD%2BrqRI4uRDGhnGN2k6Ffq1f8ArDlGDJ9i8Cn1eg87bglhXLLtVkXOA3aHS8xg0oRIUt5TVLPRzG2HseCA7lxKy5KiV%2FYpeKgch1rFkxe%2FmDg6agwuDXTDofYJRNlEjQ%2FpaFIgvp0GQ6okjgA7DEQxXbdBsPFset0CYzazLqo7qnZsvy2QdGuaq2cIFaW0M8mL1LxyN%2B3bqtdZrnwnODT2huozOE6nwAMyBI7ILGFY1fHtVqjeNMKjet70GOqUB9Z4EIt6cy9q2UU1N0JiGlPtKiHij7ZrdlQMpCvxV8pqjuHGMgswMbo0xbEwqbBJB4hQniE0KbLg3hZ6LG%2FrqFWbOzKBFC2RRmwtatgb8Hqb5yiabB3TmX0HHogxuZ5xrRh5qq5XtVUPuYYACoX1FO0fF0X3fu12hqlR%2F%2BF6d4X1yQcCSdR7Ewo5zyC%2BaLGNPQx9E5ELh%2BK7JgILkDNq%2F%2F51MY0XA&X-Amz-Signature=af1972c949cef8a95e34b535d677a7d496f68b0ec015055670bb0fd5a3360e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEF542X%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDemt3EeiEp6dIPItiZDGY3yws%2BE5TEYlIyRdPyIWjxcQIgVezt1IWR3fQBKC%2F6G%2BxXNrvRMkSfmkqfBkTznFR1VMMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLwx69i%2F794z3f2V6CrcA8FmatvwMQhGGq07YtXEK8l81XvGzA7tBnISpmNmfTuA9Da9FIhxnl6UFF6niU6JTDc4ygs5Ij0iEZd0n3q0YzgtyTd9sUV%2FlZpFt%2FWPAMXWmLGO1dde%2B212SUr2WdOdha6SJwQJvo4iaIboLGitcSy2kiNyDVmVKEvO5i3TQD%2FSfmAHw8ATUXLpSKes1jokSjlyzbbNFC8ZORO6Iv%2BHl50s5Vh%2FKzDIw6JqAmzvfKsX9tX7dvu6YlfPfiHQ3uEUdDMQva%2Bxhj1o4AQkuTG11cSshB3TYP1%2Bk0CytFyLq5RILVZg4ubi20NYboMrB64tlzs9E%2BE6f4WjR9gaCFh3NFwZmRycTefNPe5BKp59RVFHqb%2F7R9ajeNsSBatVXox7JqfHgIzOIBD%2BrqRI4uRDGhnGN2k6Ffq1f8ArDlGDJ9i8Cn1eg87bglhXLLtVkXOA3aHS8xg0oRIUt5TVLPRzG2HseCA7lxKy5KiV%2FYpeKgch1rFkxe%2FmDg6agwuDXTDofYJRNlEjQ%2FpaFIgvp0GQ6okjgA7DEQxXbdBsPFset0CYzazLqo7qnZsvy2QdGuaq2cIFaW0M8mL1LxyN%2B3bqtdZrnwnODT2huozOE6nwAMyBI7ILGFY1fHtVqjeNMKjet70GOqUB9Z4EIt6cy9q2UU1N0JiGlPtKiHij7ZrdlQMpCvxV8pqjuHGMgswMbo0xbEwqbBJB4hQniE0KbLg3hZ6LG%2FrqFWbOzKBFC2RRmwtatgb8Hqb5yiabB3TmX0HHogxuZ5xrRh5qq5XtVUPuYYACoX1FO0fF0X3fu12hqlR%2F%2BF6d4X1yQcCSdR7Ewo5zyC%2BaLGNPQx9E5ELh%2BK7JgILkDNq%2F%2F51MY0XA&X-Amz-Signature=84a296106225577bdcef6a9a108f630f3e2e4aa95c0d6241468dc121a9c1d9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEF542X%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDemt3EeiEp6dIPItiZDGY3yws%2BE5TEYlIyRdPyIWjxcQIgVezt1IWR3fQBKC%2F6G%2BxXNrvRMkSfmkqfBkTznFR1VMMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLwx69i%2F794z3f2V6CrcA8FmatvwMQhGGq07YtXEK8l81XvGzA7tBnISpmNmfTuA9Da9FIhxnl6UFF6niU6JTDc4ygs5Ij0iEZd0n3q0YzgtyTd9sUV%2FlZpFt%2FWPAMXWmLGO1dde%2B212SUr2WdOdha6SJwQJvo4iaIboLGitcSy2kiNyDVmVKEvO5i3TQD%2FSfmAHw8ATUXLpSKes1jokSjlyzbbNFC8ZORO6Iv%2BHl50s5Vh%2FKzDIw6JqAmzvfKsX9tX7dvu6YlfPfiHQ3uEUdDMQva%2Bxhj1o4AQkuTG11cSshB3TYP1%2Bk0CytFyLq5RILVZg4ubi20NYboMrB64tlzs9E%2BE6f4WjR9gaCFh3NFwZmRycTefNPe5BKp59RVFHqb%2F7R9ajeNsSBatVXox7JqfHgIzOIBD%2BrqRI4uRDGhnGN2k6Ffq1f8ArDlGDJ9i8Cn1eg87bglhXLLtVkXOA3aHS8xg0oRIUt5TVLPRzG2HseCA7lxKy5KiV%2FYpeKgch1rFkxe%2FmDg6agwuDXTDofYJRNlEjQ%2FpaFIgvp0GQ6okjgA7DEQxXbdBsPFset0CYzazLqo7qnZsvy2QdGuaq2cIFaW0M8mL1LxyN%2B3bqtdZrnwnODT2huozOE6nwAMyBI7ILGFY1fHtVqjeNMKjet70GOqUB9Z4EIt6cy9q2UU1N0JiGlPtKiHij7ZrdlQMpCvxV8pqjuHGMgswMbo0xbEwqbBJB4hQniE0KbLg3hZ6LG%2FrqFWbOzKBFC2RRmwtatgb8Hqb5yiabB3TmX0HHogxuZ5xrRh5qq5XtVUPuYYACoX1FO0fF0X3fu12hqlR%2F%2BF6d4X1yQcCSdR7Ewo5zyC%2BaLGNPQx9E5ELh%2BK7JgILkDNq%2F%2F51MY0XA&X-Amz-Signature=e8d461d091284495f2d679ccf63fd019e034f8163c4f59cdc9bf25408f7bffe4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
