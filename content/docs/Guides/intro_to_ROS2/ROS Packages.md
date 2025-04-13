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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHXLISX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEqtn28REVeLfr1uqlvuHepJuXhrxeAT9DdnJ6kbF9aDAiEAxO42AyLH%2FnicCDMwUwBr1A%2Fo59%2Famklw7UU1WQCd0xEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6HhBRle3oNTkoeyrcA%2B7dYWrRsdNKsjcFyCArsX4pta1R27BmefmQf2YOZtGP7vwbiExCaARJF0DAAZBXXuPODQcN1umDZNDm3OWmar%2BUnSryM07LAeoF%2B3nY%2BW7AbeMR%2FjUl%2Fx4shnkkUKyR7nqCZpwQn0od6EXt482CqnQH1rS%2Ftrc7nMPgPOD19lf7eICjjNs48sr2u57UlZnrwn%2FdLU3BjiPHEw8Ge7HoBbgYLGB6ESic2TnzwdUBZ%2Bpqd8DbdsIfUbo%2BlYAD8%2FnFuBe9MvSitkhnqyYqcnxoNYg9iIHVUQomUp5MBtoxbAfLZoiQn78SLRQ9CFS8BI1Vul92610xKpHrIZ%2B2dYz7OaCLkwFAVoh2THRhwlK9XjQzLT%2BQUgjzi%2FqqfCpZb4%2Fmlr0z7cpFv3sT6n%2FkCdf6uhmlqDZVvq4V6iUnxNVIZi%2F3d7weaZ1LrKGlZv5NslVeoOKWg%2B17ZBF039A6ch3iOy1QQ1d9NWGeYYsZXcUOkfM01e0mxynO7N8P0onpsWNRBprRiCO4fx8oWOkzTByl0f98ZEkHhsGN5OQNTm5HhAM%2BYKv8p0Pp8dYx4C0v7a4TxdD9yhHePrwBg%2BJ63k9H9bgq8afm3JHqHa7T7ZQW5%2F31uQdx6pSQV8XJi1a%2FMK297r8GOqUBZA%2Bn11XmbRHEeycEmCeNUpNE9EDPTUvH3blDvw8TT493w2p3bSE4AnzN6rmorPsLhbAIuSUabgAHEOrkvXIa%2BBckh94fGZ9B3rNGlfbfurd0tI9fjqCBxFdDlLmc%2BwN0LZmwdfyQ2LeCqCGARYn4wQHKfxpD4hvESPhZGfk7dO8VdOqBKyVbITMhMrmguMAY2ZEg8%2FAxeyOUPGx7WP%2BhGkPvrMD2&X-Amz-Signature=49c9b3828f75cdb2803b305d31ebff63c8d4f64deb37e61ca056141369246644&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHXLISX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEqtn28REVeLfr1uqlvuHepJuXhrxeAT9DdnJ6kbF9aDAiEAxO42AyLH%2FnicCDMwUwBr1A%2Fo59%2Famklw7UU1WQCd0xEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6HhBRle3oNTkoeyrcA%2B7dYWrRsdNKsjcFyCArsX4pta1R27BmefmQf2YOZtGP7vwbiExCaARJF0DAAZBXXuPODQcN1umDZNDm3OWmar%2BUnSryM07LAeoF%2B3nY%2BW7AbeMR%2FjUl%2Fx4shnkkUKyR7nqCZpwQn0od6EXt482CqnQH1rS%2Ftrc7nMPgPOD19lf7eICjjNs48sr2u57UlZnrwn%2FdLU3BjiPHEw8Ge7HoBbgYLGB6ESic2TnzwdUBZ%2Bpqd8DbdsIfUbo%2BlYAD8%2FnFuBe9MvSitkhnqyYqcnxoNYg9iIHVUQomUp5MBtoxbAfLZoiQn78SLRQ9CFS8BI1Vul92610xKpHrIZ%2B2dYz7OaCLkwFAVoh2THRhwlK9XjQzLT%2BQUgjzi%2FqqfCpZb4%2Fmlr0z7cpFv3sT6n%2FkCdf6uhmlqDZVvq4V6iUnxNVIZi%2F3d7weaZ1LrKGlZv5NslVeoOKWg%2B17ZBF039A6ch3iOy1QQ1d9NWGeYYsZXcUOkfM01e0mxynO7N8P0onpsWNRBprRiCO4fx8oWOkzTByl0f98ZEkHhsGN5OQNTm5HhAM%2BYKv8p0Pp8dYx4C0v7a4TxdD9yhHePrwBg%2BJ63k9H9bgq8afm3JHqHa7T7ZQW5%2F31uQdx6pSQV8XJi1a%2FMK297r8GOqUBZA%2Bn11XmbRHEeycEmCeNUpNE9EDPTUvH3blDvw8TT493w2p3bSE4AnzN6rmorPsLhbAIuSUabgAHEOrkvXIa%2BBckh94fGZ9B3rNGlfbfurd0tI9fjqCBxFdDlLmc%2BwN0LZmwdfyQ2LeCqCGARYn4wQHKfxpD4hvESPhZGfk7dO8VdOqBKyVbITMhMrmguMAY2ZEg8%2FAxeyOUPGx7WP%2BhGkPvrMD2&X-Amz-Signature=1b11b6c7e0e236632dafd56fdb35df095e3378b46885217004078f9afc14e2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHXLISX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEqtn28REVeLfr1uqlvuHepJuXhrxeAT9DdnJ6kbF9aDAiEAxO42AyLH%2FnicCDMwUwBr1A%2Fo59%2Famklw7UU1WQCd0xEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6HhBRle3oNTkoeyrcA%2B7dYWrRsdNKsjcFyCArsX4pta1R27BmefmQf2YOZtGP7vwbiExCaARJF0DAAZBXXuPODQcN1umDZNDm3OWmar%2BUnSryM07LAeoF%2B3nY%2BW7AbeMR%2FjUl%2Fx4shnkkUKyR7nqCZpwQn0od6EXt482CqnQH1rS%2Ftrc7nMPgPOD19lf7eICjjNs48sr2u57UlZnrwn%2FdLU3BjiPHEw8Ge7HoBbgYLGB6ESic2TnzwdUBZ%2Bpqd8DbdsIfUbo%2BlYAD8%2FnFuBe9MvSitkhnqyYqcnxoNYg9iIHVUQomUp5MBtoxbAfLZoiQn78SLRQ9CFS8BI1Vul92610xKpHrIZ%2B2dYz7OaCLkwFAVoh2THRhwlK9XjQzLT%2BQUgjzi%2FqqfCpZb4%2Fmlr0z7cpFv3sT6n%2FkCdf6uhmlqDZVvq4V6iUnxNVIZi%2F3d7weaZ1LrKGlZv5NslVeoOKWg%2B17ZBF039A6ch3iOy1QQ1d9NWGeYYsZXcUOkfM01e0mxynO7N8P0onpsWNRBprRiCO4fx8oWOkzTByl0f98ZEkHhsGN5OQNTm5HhAM%2BYKv8p0Pp8dYx4C0v7a4TxdD9yhHePrwBg%2BJ63k9H9bgq8afm3JHqHa7T7ZQW5%2F31uQdx6pSQV8XJi1a%2FMK297r8GOqUBZA%2Bn11XmbRHEeycEmCeNUpNE9EDPTUvH3blDvw8TT493w2p3bSE4AnzN6rmorPsLhbAIuSUabgAHEOrkvXIa%2BBckh94fGZ9B3rNGlfbfurd0tI9fjqCBxFdDlLmc%2BwN0LZmwdfyQ2LeCqCGARYn4wQHKfxpD4hvESPhZGfk7dO8VdOqBKyVbITMhMrmguMAY2ZEg8%2FAxeyOUPGx7WP%2BhGkPvrMD2&X-Amz-Signature=cd5065b9abc8d07c4fdf920bb50e3c6d7e4f3f27305d4398d56c8fc5dd6816ab&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHXLISX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEqtn28REVeLfr1uqlvuHepJuXhrxeAT9DdnJ6kbF9aDAiEAxO42AyLH%2FnicCDMwUwBr1A%2Fo59%2Famklw7UU1WQCd0xEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6HhBRle3oNTkoeyrcA%2B7dYWrRsdNKsjcFyCArsX4pta1R27BmefmQf2YOZtGP7vwbiExCaARJF0DAAZBXXuPODQcN1umDZNDm3OWmar%2BUnSryM07LAeoF%2B3nY%2BW7AbeMR%2FjUl%2Fx4shnkkUKyR7nqCZpwQn0od6EXt482CqnQH1rS%2Ftrc7nMPgPOD19lf7eICjjNs48sr2u57UlZnrwn%2FdLU3BjiPHEw8Ge7HoBbgYLGB6ESic2TnzwdUBZ%2Bpqd8DbdsIfUbo%2BlYAD8%2FnFuBe9MvSitkhnqyYqcnxoNYg9iIHVUQomUp5MBtoxbAfLZoiQn78SLRQ9CFS8BI1Vul92610xKpHrIZ%2B2dYz7OaCLkwFAVoh2THRhwlK9XjQzLT%2BQUgjzi%2FqqfCpZb4%2Fmlr0z7cpFv3sT6n%2FkCdf6uhmlqDZVvq4V6iUnxNVIZi%2F3d7weaZ1LrKGlZv5NslVeoOKWg%2B17ZBF039A6ch3iOy1QQ1d9NWGeYYsZXcUOkfM01e0mxynO7N8P0onpsWNRBprRiCO4fx8oWOkzTByl0f98ZEkHhsGN5OQNTm5HhAM%2BYKv8p0Pp8dYx4C0v7a4TxdD9yhHePrwBg%2BJ63k9H9bgq8afm3JHqHa7T7ZQW5%2F31uQdx6pSQV8XJi1a%2FMK297r8GOqUBZA%2Bn11XmbRHEeycEmCeNUpNE9EDPTUvH3blDvw8TT493w2p3bSE4AnzN6rmorPsLhbAIuSUabgAHEOrkvXIa%2BBckh94fGZ9B3rNGlfbfurd0tI9fjqCBxFdDlLmc%2BwN0LZmwdfyQ2LeCqCGARYn4wQHKfxpD4hvESPhZGfk7dO8VdOqBKyVbITMhMrmguMAY2ZEg8%2FAxeyOUPGx7WP%2BhGkPvrMD2&X-Amz-Signature=42280e0b007d417657d92daacefe0f7166aa988b56051003906230e69975a47a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHXLISX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEqtn28REVeLfr1uqlvuHepJuXhrxeAT9DdnJ6kbF9aDAiEAxO42AyLH%2FnicCDMwUwBr1A%2Fo59%2Famklw7UU1WQCd0xEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6HhBRle3oNTkoeyrcA%2B7dYWrRsdNKsjcFyCArsX4pta1R27BmefmQf2YOZtGP7vwbiExCaARJF0DAAZBXXuPODQcN1umDZNDm3OWmar%2BUnSryM07LAeoF%2B3nY%2BW7AbeMR%2FjUl%2Fx4shnkkUKyR7nqCZpwQn0od6EXt482CqnQH1rS%2Ftrc7nMPgPOD19lf7eICjjNs48sr2u57UlZnrwn%2FdLU3BjiPHEw8Ge7HoBbgYLGB6ESic2TnzwdUBZ%2Bpqd8DbdsIfUbo%2BlYAD8%2FnFuBe9MvSitkhnqyYqcnxoNYg9iIHVUQomUp5MBtoxbAfLZoiQn78SLRQ9CFS8BI1Vul92610xKpHrIZ%2B2dYz7OaCLkwFAVoh2THRhwlK9XjQzLT%2BQUgjzi%2FqqfCpZb4%2Fmlr0z7cpFv3sT6n%2FkCdf6uhmlqDZVvq4V6iUnxNVIZi%2F3d7weaZ1LrKGlZv5NslVeoOKWg%2B17ZBF039A6ch3iOy1QQ1d9NWGeYYsZXcUOkfM01e0mxynO7N8P0onpsWNRBprRiCO4fx8oWOkzTByl0f98ZEkHhsGN5OQNTm5HhAM%2BYKv8p0Pp8dYx4C0v7a4TxdD9yhHePrwBg%2BJ63k9H9bgq8afm3JHqHa7T7ZQW5%2F31uQdx6pSQV8XJi1a%2FMK297r8GOqUBZA%2Bn11XmbRHEeycEmCeNUpNE9EDPTUvH3blDvw8TT493w2p3bSE4AnzN6rmorPsLhbAIuSUabgAHEOrkvXIa%2BBckh94fGZ9B3rNGlfbfurd0tI9fjqCBxFdDlLmc%2BwN0LZmwdfyQ2LeCqCGARYn4wQHKfxpD4hvESPhZGfk7dO8VdOqBKyVbITMhMrmguMAY2ZEg8%2FAxeyOUPGx7WP%2BhGkPvrMD2&X-Amz-Signature=cca5f34671ccd0cfab304c1ede55f98c269307cfe857da5495a7656cbb99bbdd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHXLISX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEqtn28REVeLfr1uqlvuHepJuXhrxeAT9DdnJ6kbF9aDAiEAxO42AyLH%2FnicCDMwUwBr1A%2Fo59%2Famklw7UU1WQCd0xEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6HhBRle3oNTkoeyrcA%2B7dYWrRsdNKsjcFyCArsX4pta1R27BmefmQf2YOZtGP7vwbiExCaARJF0DAAZBXXuPODQcN1umDZNDm3OWmar%2BUnSryM07LAeoF%2B3nY%2BW7AbeMR%2FjUl%2Fx4shnkkUKyR7nqCZpwQn0od6EXt482CqnQH1rS%2Ftrc7nMPgPOD19lf7eICjjNs48sr2u57UlZnrwn%2FdLU3BjiPHEw8Ge7HoBbgYLGB6ESic2TnzwdUBZ%2Bpqd8DbdsIfUbo%2BlYAD8%2FnFuBe9MvSitkhnqyYqcnxoNYg9iIHVUQomUp5MBtoxbAfLZoiQn78SLRQ9CFS8BI1Vul92610xKpHrIZ%2B2dYz7OaCLkwFAVoh2THRhwlK9XjQzLT%2BQUgjzi%2FqqfCpZb4%2Fmlr0z7cpFv3sT6n%2FkCdf6uhmlqDZVvq4V6iUnxNVIZi%2F3d7weaZ1LrKGlZv5NslVeoOKWg%2B17ZBF039A6ch3iOy1QQ1d9NWGeYYsZXcUOkfM01e0mxynO7N8P0onpsWNRBprRiCO4fx8oWOkzTByl0f98ZEkHhsGN5OQNTm5HhAM%2BYKv8p0Pp8dYx4C0v7a4TxdD9yhHePrwBg%2BJ63k9H9bgq8afm3JHqHa7T7ZQW5%2F31uQdx6pSQV8XJi1a%2FMK297r8GOqUBZA%2Bn11XmbRHEeycEmCeNUpNE9EDPTUvH3blDvw8TT493w2p3bSE4AnzN6rmorPsLhbAIuSUabgAHEOrkvXIa%2BBckh94fGZ9B3rNGlfbfurd0tI9fjqCBxFdDlLmc%2BwN0LZmwdfyQ2LeCqCGARYn4wQHKfxpD4hvESPhZGfk7dO8VdOqBKyVbITMhMrmguMAY2ZEg8%2FAxeyOUPGx7WP%2BhGkPvrMD2&X-Amz-Signature=fe08846980fc4bdde617462f65061313f4138e3acc45974e31422749c78350da&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UHXLISX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEqtn28REVeLfr1uqlvuHepJuXhrxeAT9DdnJ6kbF9aDAiEAxO42AyLH%2FnicCDMwUwBr1A%2Fo59%2Famklw7UU1WQCd0xEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6HhBRle3oNTkoeyrcA%2B7dYWrRsdNKsjcFyCArsX4pta1R27BmefmQf2YOZtGP7vwbiExCaARJF0DAAZBXXuPODQcN1umDZNDm3OWmar%2BUnSryM07LAeoF%2B3nY%2BW7AbeMR%2FjUl%2Fx4shnkkUKyR7nqCZpwQn0od6EXt482CqnQH1rS%2Ftrc7nMPgPOD19lf7eICjjNs48sr2u57UlZnrwn%2FdLU3BjiPHEw8Ge7HoBbgYLGB6ESic2TnzwdUBZ%2Bpqd8DbdsIfUbo%2BlYAD8%2FnFuBe9MvSitkhnqyYqcnxoNYg9iIHVUQomUp5MBtoxbAfLZoiQn78SLRQ9CFS8BI1Vul92610xKpHrIZ%2B2dYz7OaCLkwFAVoh2THRhwlK9XjQzLT%2BQUgjzi%2FqqfCpZb4%2Fmlr0z7cpFv3sT6n%2FkCdf6uhmlqDZVvq4V6iUnxNVIZi%2F3d7weaZ1LrKGlZv5NslVeoOKWg%2B17ZBF039A6ch3iOy1QQ1d9NWGeYYsZXcUOkfM01e0mxynO7N8P0onpsWNRBprRiCO4fx8oWOkzTByl0f98ZEkHhsGN5OQNTm5HhAM%2BYKv8p0Pp8dYx4C0v7a4TxdD9yhHePrwBg%2BJ63k9H9bgq8afm3JHqHa7T7ZQW5%2F31uQdx6pSQV8XJi1a%2FMK297r8GOqUBZA%2Bn11XmbRHEeycEmCeNUpNE9EDPTUvH3blDvw8TT493w2p3bSE4AnzN6rmorPsLhbAIuSUabgAHEOrkvXIa%2BBckh94fGZ9B3rNGlfbfurd0tI9fjqCBxFdDlLmc%2BwN0LZmwdfyQ2LeCqCGARYn4wQHKfxpD4hvESPhZGfk7dO8VdOqBKyVbITMhMrmguMAY2ZEg8%2FAxeyOUPGx7WP%2BhGkPvrMD2&X-Amz-Signature=da51d0ce34c494c60b4bc55964fa1ab9116f6d55b6b26363ab34167e138e1798&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
