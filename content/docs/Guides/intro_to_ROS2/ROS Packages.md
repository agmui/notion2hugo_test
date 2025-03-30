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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVZGD3S%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDCHNV9aSL708zVcJXMVE2lI3Kd75An%2B9pPxZN%2FMCZ%2BIAiEAxUh5NjtOPOme%2FTMXtez6soEe0RdxLz7KF2s18FFK6xsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaX4fk%2FmcTxfi7nyircA%2Finewh7CjA3w%2FS7FhcEbDZUXpo8l%2BEk5K0GsbzZet6Hz0qOsB0iT6oD8B09Kp6RG4pshHhIXbyWoRGKJYrQU%2B%2FyUvaguabxFQTdNJjPsBABvZIgQ2XrS4cnwbNAviVC08BjgKF0MCwnUAVtiYN3dKCFg5s8X1Ovraii3MhLHkbv5E8Pdv3A%2F8hsfK3Sl6KehWGlvhluSvl7131RTtTWPQNMJtj1%2FBV7oYliAyqwHaRQdgkAr%2FM1cQr5S16WlV032jtsyEx89UPU%2BqMKbXrAPOIg7QBqi7BvPjKQXhF5L17U43LWuUcs5O1ncpWWsi8mM4d6uO7zxgbJItoTJVNreFp5LyKupNFGNyYumJEgO8XHQZHIo1tF8oX%2Fdj%2FDmw%2Ffv5o7XICNneaA5k4UAceZKlcHTmwzG4FwnxPr%2FpgSFnjBQyhUb1ZqgpzhbPjDhd0SydcW5aylv0kTMUFhQmmHsLemBOZakS2lpfPtwbTd4T0syF%2BtB1QPltHlD%2Fi%2BA3uvXsnH8%2FyOrL1i3bBncJaqi9JcNe8YEARIJNTxPvu7XGk5zQUwtzTm%2B%2Bta91SgWdAelJXR35Xs7irHoKXeJSHCyfF4gmJ01tGMLWsFnXJ%2FS9055cG47wT7eiuZMZs3MODQor8GOqUBqwX9OuEfya4qWyHrg6tTcui8DeYE5Zors9b8jd%2BSkkQHduMfF67Qi7QRG46nrOVUjlzgFCJqDv329owSbsdsnfiAntptUOo%2BOPAHp30LmcyR78UIybLUfcwTliTzYyk4OAu29%2BGeHRcrQe4DLCmekglbERGWFET2wcuhpJuQid3n3OmJQy2zakr0fzE3azHd7fb1BnTrmKO67XDyfcd1cXlN9eh0&X-Amz-Signature=9bbd10fb924967282dc721d79e10708e44b4f8f7ed76c8e2c0c60e2b0ccff05b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVZGD3S%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDCHNV9aSL708zVcJXMVE2lI3Kd75An%2B9pPxZN%2FMCZ%2BIAiEAxUh5NjtOPOme%2FTMXtez6soEe0RdxLz7KF2s18FFK6xsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaX4fk%2FmcTxfi7nyircA%2Finewh7CjA3w%2FS7FhcEbDZUXpo8l%2BEk5K0GsbzZet6Hz0qOsB0iT6oD8B09Kp6RG4pshHhIXbyWoRGKJYrQU%2B%2FyUvaguabxFQTdNJjPsBABvZIgQ2XrS4cnwbNAviVC08BjgKF0MCwnUAVtiYN3dKCFg5s8X1Ovraii3MhLHkbv5E8Pdv3A%2F8hsfK3Sl6KehWGlvhluSvl7131RTtTWPQNMJtj1%2FBV7oYliAyqwHaRQdgkAr%2FM1cQr5S16WlV032jtsyEx89UPU%2BqMKbXrAPOIg7QBqi7BvPjKQXhF5L17U43LWuUcs5O1ncpWWsi8mM4d6uO7zxgbJItoTJVNreFp5LyKupNFGNyYumJEgO8XHQZHIo1tF8oX%2Fdj%2FDmw%2Ffv5o7XICNneaA5k4UAceZKlcHTmwzG4FwnxPr%2FpgSFnjBQyhUb1ZqgpzhbPjDhd0SydcW5aylv0kTMUFhQmmHsLemBOZakS2lpfPtwbTd4T0syF%2BtB1QPltHlD%2Fi%2BA3uvXsnH8%2FyOrL1i3bBncJaqi9JcNe8YEARIJNTxPvu7XGk5zQUwtzTm%2B%2Bta91SgWdAelJXR35Xs7irHoKXeJSHCyfF4gmJ01tGMLWsFnXJ%2FS9055cG47wT7eiuZMZs3MODQor8GOqUBqwX9OuEfya4qWyHrg6tTcui8DeYE5Zors9b8jd%2BSkkQHduMfF67Qi7QRG46nrOVUjlzgFCJqDv329owSbsdsnfiAntptUOo%2BOPAHp30LmcyR78UIybLUfcwTliTzYyk4OAu29%2BGeHRcrQe4DLCmekglbERGWFET2wcuhpJuQid3n3OmJQy2zakr0fzE3azHd7fb1BnTrmKO67XDyfcd1cXlN9eh0&X-Amz-Signature=5add10fde456da70e84d72f184277b850dcb3253729ac6722e344dfc9a388708&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVZGD3S%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDCHNV9aSL708zVcJXMVE2lI3Kd75An%2B9pPxZN%2FMCZ%2BIAiEAxUh5NjtOPOme%2FTMXtez6soEe0RdxLz7KF2s18FFK6xsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaX4fk%2FmcTxfi7nyircA%2Finewh7CjA3w%2FS7FhcEbDZUXpo8l%2BEk5K0GsbzZet6Hz0qOsB0iT6oD8B09Kp6RG4pshHhIXbyWoRGKJYrQU%2B%2FyUvaguabxFQTdNJjPsBABvZIgQ2XrS4cnwbNAviVC08BjgKF0MCwnUAVtiYN3dKCFg5s8X1Ovraii3MhLHkbv5E8Pdv3A%2F8hsfK3Sl6KehWGlvhluSvl7131RTtTWPQNMJtj1%2FBV7oYliAyqwHaRQdgkAr%2FM1cQr5S16WlV032jtsyEx89UPU%2BqMKbXrAPOIg7QBqi7BvPjKQXhF5L17U43LWuUcs5O1ncpWWsi8mM4d6uO7zxgbJItoTJVNreFp5LyKupNFGNyYumJEgO8XHQZHIo1tF8oX%2Fdj%2FDmw%2Ffv5o7XICNneaA5k4UAceZKlcHTmwzG4FwnxPr%2FpgSFnjBQyhUb1ZqgpzhbPjDhd0SydcW5aylv0kTMUFhQmmHsLemBOZakS2lpfPtwbTd4T0syF%2BtB1QPltHlD%2Fi%2BA3uvXsnH8%2FyOrL1i3bBncJaqi9JcNe8YEARIJNTxPvu7XGk5zQUwtzTm%2B%2Bta91SgWdAelJXR35Xs7irHoKXeJSHCyfF4gmJ01tGMLWsFnXJ%2FS9055cG47wT7eiuZMZs3MODQor8GOqUBqwX9OuEfya4qWyHrg6tTcui8DeYE5Zors9b8jd%2BSkkQHduMfF67Qi7QRG46nrOVUjlzgFCJqDv329owSbsdsnfiAntptUOo%2BOPAHp30LmcyR78UIybLUfcwTliTzYyk4OAu29%2BGeHRcrQe4DLCmekglbERGWFET2wcuhpJuQid3n3OmJQy2zakr0fzE3azHd7fb1BnTrmKO67XDyfcd1cXlN9eh0&X-Amz-Signature=7a54865a26520a0586ffb02d91313a736b6aa81463102ef8ca2a4415e8d8bb7b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVZGD3S%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDCHNV9aSL708zVcJXMVE2lI3Kd75An%2B9pPxZN%2FMCZ%2BIAiEAxUh5NjtOPOme%2FTMXtez6soEe0RdxLz7KF2s18FFK6xsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaX4fk%2FmcTxfi7nyircA%2Finewh7CjA3w%2FS7FhcEbDZUXpo8l%2BEk5K0GsbzZet6Hz0qOsB0iT6oD8B09Kp6RG4pshHhIXbyWoRGKJYrQU%2B%2FyUvaguabxFQTdNJjPsBABvZIgQ2XrS4cnwbNAviVC08BjgKF0MCwnUAVtiYN3dKCFg5s8X1Ovraii3MhLHkbv5E8Pdv3A%2F8hsfK3Sl6KehWGlvhluSvl7131RTtTWPQNMJtj1%2FBV7oYliAyqwHaRQdgkAr%2FM1cQr5S16WlV032jtsyEx89UPU%2BqMKbXrAPOIg7QBqi7BvPjKQXhF5L17U43LWuUcs5O1ncpWWsi8mM4d6uO7zxgbJItoTJVNreFp5LyKupNFGNyYumJEgO8XHQZHIo1tF8oX%2Fdj%2FDmw%2Ffv5o7XICNneaA5k4UAceZKlcHTmwzG4FwnxPr%2FpgSFnjBQyhUb1ZqgpzhbPjDhd0SydcW5aylv0kTMUFhQmmHsLemBOZakS2lpfPtwbTd4T0syF%2BtB1QPltHlD%2Fi%2BA3uvXsnH8%2FyOrL1i3bBncJaqi9JcNe8YEARIJNTxPvu7XGk5zQUwtzTm%2B%2Bta91SgWdAelJXR35Xs7irHoKXeJSHCyfF4gmJ01tGMLWsFnXJ%2FS9055cG47wT7eiuZMZs3MODQor8GOqUBqwX9OuEfya4qWyHrg6tTcui8DeYE5Zors9b8jd%2BSkkQHduMfF67Qi7QRG46nrOVUjlzgFCJqDv329owSbsdsnfiAntptUOo%2BOPAHp30LmcyR78UIybLUfcwTliTzYyk4OAu29%2BGeHRcrQe4DLCmekglbERGWFET2wcuhpJuQid3n3OmJQy2zakr0fzE3azHd7fb1BnTrmKO67XDyfcd1cXlN9eh0&X-Amz-Signature=1005977bd8c272a345445bd2a6a3babde5e2312792e83fc93ef97f326a6e411e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVZGD3S%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDCHNV9aSL708zVcJXMVE2lI3Kd75An%2B9pPxZN%2FMCZ%2BIAiEAxUh5NjtOPOme%2FTMXtez6soEe0RdxLz7KF2s18FFK6xsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaX4fk%2FmcTxfi7nyircA%2Finewh7CjA3w%2FS7FhcEbDZUXpo8l%2BEk5K0GsbzZet6Hz0qOsB0iT6oD8B09Kp6RG4pshHhIXbyWoRGKJYrQU%2B%2FyUvaguabxFQTdNJjPsBABvZIgQ2XrS4cnwbNAviVC08BjgKF0MCwnUAVtiYN3dKCFg5s8X1Ovraii3MhLHkbv5E8Pdv3A%2F8hsfK3Sl6KehWGlvhluSvl7131RTtTWPQNMJtj1%2FBV7oYliAyqwHaRQdgkAr%2FM1cQr5S16WlV032jtsyEx89UPU%2BqMKbXrAPOIg7QBqi7BvPjKQXhF5L17U43LWuUcs5O1ncpWWsi8mM4d6uO7zxgbJItoTJVNreFp5LyKupNFGNyYumJEgO8XHQZHIo1tF8oX%2Fdj%2FDmw%2Ffv5o7XICNneaA5k4UAceZKlcHTmwzG4FwnxPr%2FpgSFnjBQyhUb1ZqgpzhbPjDhd0SydcW5aylv0kTMUFhQmmHsLemBOZakS2lpfPtwbTd4T0syF%2BtB1QPltHlD%2Fi%2BA3uvXsnH8%2FyOrL1i3bBncJaqi9JcNe8YEARIJNTxPvu7XGk5zQUwtzTm%2B%2Bta91SgWdAelJXR35Xs7irHoKXeJSHCyfF4gmJ01tGMLWsFnXJ%2FS9055cG47wT7eiuZMZs3MODQor8GOqUBqwX9OuEfya4qWyHrg6tTcui8DeYE5Zors9b8jd%2BSkkQHduMfF67Qi7QRG46nrOVUjlzgFCJqDv329owSbsdsnfiAntptUOo%2BOPAHp30LmcyR78UIybLUfcwTliTzYyk4OAu29%2BGeHRcrQe4DLCmekglbERGWFET2wcuhpJuQid3n3OmJQy2zakr0fzE3azHd7fb1BnTrmKO67XDyfcd1cXlN9eh0&X-Amz-Signature=899453017c339e095e13fb4facff988e11eb6dc73723d51ab5f3d124dfc9e87a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVZGD3S%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDCHNV9aSL708zVcJXMVE2lI3Kd75An%2B9pPxZN%2FMCZ%2BIAiEAxUh5NjtOPOme%2FTMXtez6soEe0RdxLz7KF2s18FFK6xsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaX4fk%2FmcTxfi7nyircA%2Finewh7CjA3w%2FS7FhcEbDZUXpo8l%2BEk5K0GsbzZet6Hz0qOsB0iT6oD8B09Kp6RG4pshHhIXbyWoRGKJYrQU%2B%2FyUvaguabxFQTdNJjPsBABvZIgQ2XrS4cnwbNAviVC08BjgKF0MCwnUAVtiYN3dKCFg5s8X1Ovraii3MhLHkbv5E8Pdv3A%2F8hsfK3Sl6KehWGlvhluSvl7131RTtTWPQNMJtj1%2FBV7oYliAyqwHaRQdgkAr%2FM1cQr5S16WlV032jtsyEx89UPU%2BqMKbXrAPOIg7QBqi7BvPjKQXhF5L17U43LWuUcs5O1ncpWWsi8mM4d6uO7zxgbJItoTJVNreFp5LyKupNFGNyYumJEgO8XHQZHIo1tF8oX%2Fdj%2FDmw%2Ffv5o7XICNneaA5k4UAceZKlcHTmwzG4FwnxPr%2FpgSFnjBQyhUb1ZqgpzhbPjDhd0SydcW5aylv0kTMUFhQmmHsLemBOZakS2lpfPtwbTd4T0syF%2BtB1QPltHlD%2Fi%2BA3uvXsnH8%2FyOrL1i3bBncJaqi9JcNe8YEARIJNTxPvu7XGk5zQUwtzTm%2B%2Bta91SgWdAelJXR35Xs7irHoKXeJSHCyfF4gmJ01tGMLWsFnXJ%2FS9055cG47wT7eiuZMZs3MODQor8GOqUBqwX9OuEfya4qWyHrg6tTcui8DeYE5Zors9b8jd%2BSkkQHduMfF67Qi7QRG46nrOVUjlzgFCJqDv329owSbsdsnfiAntptUOo%2BOPAHp30LmcyR78UIybLUfcwTliTzYyk4OAu29%2BGeHRcrQe4DLCmekglbERGWFET2wcuhpJuQid3n3OmJQy2zakr0fzE3azHd7fb1BnTrmKO67XDyfcd1cXlN9eh0&X-Amz-Signature=8e60568c9524c57bcf8ad24b7bd73490517f3dd20cded76dc9056b55fe5004f6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVZGD3S%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDCHNV9aSL708zVcJXMVE2lI3Kd75An%2B9pPxZN%2FMCZ%2BIAiEAxUh5NjtOPOme%2FTMXtez6soEe0RdxLz7KF2s18FFK6xsqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaX4fk%2FmcTxfi7nyircA%2Finewh7CjA3w%2FS7FhcEbDZUXpo8l%2BEk5K0GsbzZet6Hz0qOsB0iT6oD8B09Kp6RG4pshHhIXbyWoRGKJYrQU%2B%2FyUvaguabxFQTdNJjPsBABvZIgQ2XrS4cnwbNAviVC08BjgKF0MCwnUAVtiYN3dKCFg5s8X1Ovraii3MhLHkbv5E8Pdv3A%2F8hsfK3Sl6KehWGlvhluSvl7131RTtTWPQNMJtj1%2FBV7oYliAyqwHaRQdgkAr%2FM1cQr5S16WlV032jtsyEx89UPU%2BqMKbXrAPOIg7QBqi7BvPjKQXhF5L17U43LWuUcs5O1ncpWWsi8mM4d6uO7zxgbJItoTJVNreFp5LyKupNFGNyYumJEgO8XHQZHIo1tF8oX%2Fdj%2FDmw%2Ffv5o7XICNneaA5k4UAceZKlcHTmwzG4FwnxPr%2FpgSFnjBQyhUb1ZqgpzhbPjDhd0SydcW5aylv0kTMUFhQmmHsLemBOZakS2lpfPtwbTd4T0syF%2BtB1QPltHlD%2Fi%2BA3uvXsnH8%2FyOrL1i3bBncJaqi9JcNe8YEARIJNTxPvu7XGk5zQUwtzTm%2B%2Bta91SgWdAelJXR35Xs7irHoKXeJSHCyfF4gmJ01tGMLWsFnXJ%2FS9055cG47wT7eiuZMZs3MODQor8GOqUBqwX9OuEfya4qWyHrg6tTcui8DeYE5Zors9b8jd%2BSkkQHduMfF67Qi7QRG46nrOVUjlzgFCJqDv329owSbsdsnfiAntptUOo%2BOPAHp30LmcyR78UIybLUfcwTliTzYyk4OAu29%2BGeHRcrQe4DLCmekglbERGWFET2wcuhpJuQid3n3OmJQy2zakr0fzE3azHd7fb1BnTrmKO67XDyfcd1cXlN9eh0&X-Amz-Signature=4830b7a9fdf6eca4eb3f1901f3a271726aace0dfb9ad87aabd8b9c505436baae&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
