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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MFC6FK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2BV8v6aJ11Kwf6MGKaTYZAsO1lx8MUUQTRj59iLthaoAiBRe0tX5igv%2FO%2Fo0vrg0g%2FjB3o%2Ffp8Vw%2BW8gMCN6lQ5hSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMcB%2BEtTrGkgCES6oEKtwDQiyELhT%2BHdqU8dFlY4tARAWS8XO5LL2YJc529ZNI%2FxnYFi8Dji88p%2Bj5BjXqDD8XJsLUrk6%2FO6%2FHr%2Flpja8HcT46yy0DGSwunBXCMynowtGk5dI1j7f1m6VjohxQtT27dc7uogAHePB0cmgBVwe9kZqQSGZeYj7SjkUpTltFLLwTh37faRyv810yLOovV9fVgmATzWFCmSabuUW7V%2FEWK4UXA5cOhOqJxqjqldkvi%2BZaV35NmiU0HXBQ3UmD8HaVpjS6OnqTUc9hXbp%2FKVTXygtdTAr40kDBcAWEILSUHmUu9cq8sESfxjttVrAC%2F6jxmRlPTN9DZ2AQ2JIQnKiV2Bp3SGhydw3x0QqhkCkwT93S6Wkwk19BhMy1jPqTrmHjiVSM15pgoMpKOn17gDcDjizVZl9e77jakwEziYMZu41zispkvbmsnYIO7UjypjgJ7HRObpUH6fiF5a9P6t1so%2F7Eomj283%2BQjw5SxNrL5VE6waIkDYUD4N1bn6%2F3HTau0i8zEJXCMJ9bKwZPA8isLaJ3yRALjJOqI%2BHdJfAzMG6KFVjRQ72kgDHsNF%2BgrNTXR0elxlM9Er%2Fi%2B%2FM0PC%2F2AOOSvdMQkoBa5xfZH%2Fwxlsp64ntTv7h6NWCNYz8w%2B57PwQY6pgHqEZluzcMWXRyMHty49wmRKoJ4ou2d2v4Fq5dYBIPe2e%2BaJ%2Fl%2B2%2BhVGL9Z8k2HzvfODQ6Zxx%2FHA1%2FEKUBcRBjzuw16Hp%2FaUrWUOzaEw73o6UaaPNmBrqcrCS8xuTsSC8VndiDjQQ%2ByW7NWeVUwxGbGqWbSpuIBIujSph0wEp8WI8vm%2FWVVzLrBWzrgUip7T%2BrS2QoUAoXRCbGj3GC694bvovzdr%2FrI&X-Amz-Signature=d4f5f11db7079e2196e8df9cf5f0afbcbc55946cb720b97640867d02c03f0b22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MFC6FK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2BV8v6aJ11Kwf6MGKaTYZAsO1lx8MUUQTRj59iLthaoAiBRe0tX5igv%2FO%2Fo0vrg0g%2FjB3o%2Ffp8Vw%2BW8gMCN6lQ5hSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMcB%2BEtTrGkgCES6oEKtwDQiyELhT%2BHdqU8dFlY4tARAWS8XO5LL2YJc529ZNI%2FxnYFi8Dji88p%2Bj5BjXqDD8XJsLUrk6%2FO6%2FHr%2Flpja8HcT46yy0DGSwunBXCMynowtGk5dI1j7f1m6VjohxQtT27dc7uogAHePB0cmgBVwe9kZqQSGZeYj7SjkUpTltFLLwTh37faRyv810yLOovV9fVgmATzWFCmSabuUW7V%2FEWK4UXA5cOhOqJxqjqldkvi%2BZaV35NmiU0HXBQ3UmD8HaVpjS6OnqTUc9hXbp%2FKVTXygtdTAr40kDBcAWEILSUHmUu9cq8sESfxjttVrAC%2F6jxmRlPTN9DZ2AQ2JIQnKiV2Bp3SGhydw3x0QqhkCkwT93S6Wkwk19BhMy1jPqTrmHjiVSM15pgoMpKOn17gDcDjizVZl9e77jakwEziYMZu41zispkvbmsnYIO7UjypjgJ7HRObpUH6fiF5a9P6t1so%2F7Eomj283%2BQjw5SxNrL5VE6waIkDYUD4N1bn6%2F3HTau0i8zEJXCMJ9bKwZPA8isLaJ3yRALjJOqI%2BHdJfAzMG6KFVjRQ72kgDHsNF%2BgrNTXR0elxlM9Er%2Fi%2B%2FM0PC%2F2AOOSvdMQkoBa5xfZH%2Fwxlsp64ntTv7h6NWCNYz8w%2B57PwQY6pgHqEZluzcMWXRyMHty49wmRKoJ4ou2d2v4Fq5dYBIPe2e%2BaJ%2Fl%2B2%2BhVGL9Z8k2HzvfODQ6Zxx%2FHA1%2FEKUBcRBjzuw16Hp%2FaUrWUOzaEw73o6UaaPNmBrqcrCS8xuTsSC8VndiDjQQ%2ByW7NWeVUwxGbGqWbSpuIBIujSph0wEp8WI8vm%2FWVVzLrBWzrgUip7T%2BrS2QoUAoXRCbGj3GC694bvovzdr%2FrI&X-Amz-Signature=6563387e9db0afe0f972caaa3161f2187c8cb8e108322dc05fef63490688ea14&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MFC6FK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2BV8v6aJ11Kwf6MGKaTYZAsO1lx8MUUQTRj59iLthaoAiBRe0tX5igv%2FO%2Fo0vrg0g%2FjB3o%2Ffp8Vw%2BW8gMCN6lQ5hSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMcB%2BEtTrGkgCES6oEKtwDQiyELhT%2BHdqU8dFlY4tARAWS8XO5LL2YJc529ZNI%2FxnYFi8Dji88p%2Bj5BjXqDD8XJsLUrk6%2FO6%2FHr%2Flpja8HcT46yy0DGSwunBXCMynowtGk5dI1j7f1m6VjohxQtT27dc7uogAHePB0cmgBVwe9kZqQSGZeYj7SjkUpTltFLLwTh37faRyv810yLOovV9fVgmATzWFCmSabuUW7V%2FEWK4UXA5cOhOqJxqjqldkvi%2BZaV35NmiU0HXBQ3UmD8HaVpjS6OnqTUc9hXbp%2FKVTXygtdTAr40kDBcAWEILSUHmUu9cq8sESfxjttVrAC%2F6jxmRlPTN9DZ2AQ2JIQnKiV2Bp3SGhydw3x0QqhkCkwT93S6Wkwk19BhMy1jPqTrmHjiVSM15pgoMpKOn17gDcDjizVZl9e77jakwEziYMZu41zispkvbmsnYIO7UjypjgJ7HRObpUH6fiF5a9P6t1so%2F7Eomj283%2BQjw5SxNrL5VE6waIkDYUD4N1bn6%2F3HTau0i8zEJXCMJ9bKwZPA8isLaJ3yRALjJOqI%2BHdJfAzMG6KFVjRQ72kgDHsNF%2BgrNTXR0elxlM9Er%2Fi%2B%2FM0PC%2F2AOOSvdMQkoBa5xfZH%2Fwxlsp64ntTv7h6NWCNYz8w%2B57PwQY6pgHqEZluzcMWXRyMHty49wmRKoJ4ou2d2v4Fq5dYBIPe2e%2BaJ%2Fl%2B2%2BhVGL9Z8k2HzvfODQ6Zxx%2FHA1%2FEKUBcRBjzuw16Hp%2FaUrWUOzaEw73o6UaaPNmBrqcrCS8xuTsSC8VndiDjQQ%2ByW7NWeVUwxGbGqWbSpuIBIujSph0wEp8WI8vm%2FWVVzLrBWzrgUip7T%2BrS2QoUAoXRCbGj3GC694bvovzdr%2FrI&X-Amz-Signature=6e16b658d519f0a06a9216342acde1cf148e41e2d44921edd40ced2ecf7a8fab&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MFC6FK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2BV8v6aJ11Kwf6MGKaTYZAsO1lx8MUUQTRj59iLthaoAiBRe0tX5igv%2FO%2Fo0vrg0g%2FjB3o%2Ffp8Vw%2BW8gMCN6lQ5hSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMcB%2BEtTrGkgCES6oEKtwDQiyELhT%2BHdqU8dFlY4tARAWS8XO5LL2YJc529ZNI%2FxnYFi8Dji88p%2Bj5BjXqDD8XJsLUrk6%2FO6%2FHr%2Flpja8HcT46yy0DGSwunBXCMynowtGk5dI1j7f1m6VjohxQtT27dc7uogAHePB0cmgBVwe9kZqQSGZeYj7SjkUpTltFLLwTh37faRyv810yLOovV9fVgmATzWFCmSabuUW7V%2FEWK4UXA5cOhOqJxqjqldkvi%2BZaV35NmiU0HXBQ3UmD8HaVpjS6OnqTUc9hXbp%2FKVTXygtdTAr40kDBcAWEILSUHmUu9cq8sESfxjttVrAC%2F6jxmRlPTN9DZ2AQ2JIQnKiV2Bp3SGhydw3x0QqhkCkwT93S6Wkwk19BhMy1jPqTrmHjiVSM15pgoMpKOn17gDcDjizVZl9e77jakwEziYMZu41zispkvbmsnYIO7UjypjgJ7HRObpUH6fiF5a9P6t1so%2F7Eomj283%2BQjw5SxNrL5VE6waIkDYUD4N1bn6%2F3HTau0i8zEJXCMJ9bKwZPA8isLaJ3yRALjJOqI%2BHdJfAzMG6KFVjRQ72kgDHsNF%2BgrNTXR0elxlM9Er%2Fi%2B%2FM0PC%2F2AOOSvdMQkoBa5xfZH%2Fwxlsp64ntTv7h6NWCNYz8w%2B57PwQY6pgHqEZluzcMWXRyMHty49wmRKoJ4ou2d2v4Fq5dYBIPe2e%2BaJ%2Fl%2B2%2BhVGL9Z8k2HzvfODQ6Zxx%2FHA1%2FEKUBcRBjzuw16Hp%2FaUrWUOzaEw73o6UaaPNmBrqcrCS8xuTsSC8VndiDjQQ%2ByW7NWeVUwxGbGqWbSpuIBIujSph0wEp8WI8vm%2FWVVzLrBWzrgUip7T%2BrS2QoUAoXRCbGj3GC694bvovzdr%2FrI&X-Amz-Signature=72f79bba0530016e434abe0a517f732a66cc8ed230fff05948f348f48a97b05a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MFC6FK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2BV8v6aJ11Kwf6MGKaTYZAsO1lx8MUUQTRj59iLthaoAiBRe0tX5igv%2FO%2Fo0vrg0g%2FjB3o%2Ffp8Vw%2BW8gMCN6lQ5hSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMcB%2BEtTrGkgCES6oEKtwDQiyELhT%2BHdqU8dFlY4tARAWS8XO5LL2YJc529ZNI%2FxnYFi8Dji88p%2Bj5BjXqDD8XJsLUrk6%2FO6%2FHr%2Flpja8HcT46yy0DGSwunBXCMynowtGk5dI1j7f1m6VjohxQtT27dc7uogAHePB0cmgBVwe9kZqQSGZeYj7SjkUpTltFLLwTh37faRyv810yLOovV9fVgmATzWFCmSabuUW7V%2FEWK4UXA5cOhOqJxqjqldkvi%2BZaV35NmiU0HXBQ3UmD8HaVpjS6OnqTUc9hXbp%2FKVTXygtdTAr40kDBcAWEILSUHmUu9cq8sESfxjttVrAC%2F6jxmRlPTN9DZ2AQ2JIQnKiV2Bp3SGhydw3x0QqhkCkwT93S6Wkwk19BhMy1jPqTrmHjiVSM15pgoMpKOn17gDcDjizVZl9e77jakwEziYMZu41zispkvbmsnYIO7UjypjgJ7HRObpUH6fiF5a9P6t1so%2F7Eomj283%2BQjw5SxNrL5VE6waIkDYUD4N1bn6%2F3HTau0i8zEJXCMJ9bKwZPA8isLaJ3yRALjJOqI%2BHdJfAzMG6KFVjRQ72kgDHsNF%2BgrNTXR0elxlM9Er%2Fi%2B%2FM0PC%2F2AOOSvdMQkoBa5xfZH%2Fwxlsp64ntTv7h6NWCNYz8w%2B57PwQY6pgHqEZluzcMWXRyMHty49wmRKoJ4ou2d2v4Fq5dYBIPe2e%2BaJ%2Fl%2B2%2BhVGL9Z8k2HzvfODQ6Zxx%2FHA1%2FEKUBcRBjzuw16Hp%2FaUrWUOzaEw73o6UaaPNmBrqcrCS8xuTsSC8VndiDjQQ%2ByW7NWeVUwxGbGqWbSpuIBIujSph0wEp8WI8vm%2FWVVzLrBWzrgUip7T%2BrS2QoUAoXRCbGj3GC694bvovzdr%2FrI&X-Amz-Signature=795b3e070c05e81d12c2256305ed2e87b94c8510b3d36bb9bc82a0683c535c44&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MFC6FK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2BV8v6aJ11Kwf6MGKaTYZAsO1lx8MUUQTRj59iLthaoAiBRe0tX5igv%2FO%2Fo0vrg0g%2FjB3o%2Ffp8Vw%2BW8gMCN6lQ5hSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMcB%2BEtTrGkgCES6oEKtwDQiyELhT%2BHdqU8dFlY4tARAWS8XO5LL2YJc529ZNI%2FxnYFi8Dji88p%2Bj5BjXqDD8XJsLUrk6%2FO6%2FHr%2Flpja8HcT46yy0DGSwunBXCMynowtGk5dI1j7f1m6VjohxQtT27dc7uogAHePB0cmgBVwe9kZqQSGZeYj7SjkUpTltFLLwTh37faRyv810yLOovV9fVgmATzWFCmSabuUW7V%2FEWK4UXA5cOhOqJxqjqldkvi%2BZaV35NmiU0HXBQ3UmD8HaVpjS6OnqTUc9hXbp%2FKVTXygtdTAr40kDBcAWEILSUHmUu9cq8sESfxjttVrAC%2F6jxmRlPTN9DZ2AQ2JIQnKiV2Bp3SGhydw3x0QqhkCkwT93S6Wkwk19BhMy1jPqTrmHjiVSM15pgoMpKOn17gDcDjizVZl9e77jakwEziYMZu41zispkvbmsnYIO7UjypjgJ7HRObpUH6fiF5a9P6t1so%2F7Eomj283%2BQjw5SxNrL5VE6waIkDYUD4N1bn6%2F3HTau0i8zEJXCMJ9bKwZPA8isLaJ3yRALjJOqI%2BHdJfAzMG6KFVjRQ72kgDHsNF%2BgrNTXR0elxlM9Er%2Fi%2B%2FM0PC%2F2AOOSvdMQkoBa5xfZH%2Fwxlsp64ntTv7h6NWCNYz8w%2B57PwQY6pgHqEZluzcMWXRyMHty49wmRKoJ4ou2d2v4Fq5dYBIPe2e%2BaJ%2Fl%2B2%2BhVGL9Z8k2HzvfODQ6Zxx%2FHA1%2FEKUBcRBjzuw16Hp%2FaUrWUOzaEw73o6UaaPNmBrqcrCS8xuTsSC8VndiDjQQ%2ByW7NWeVUwxGbGqWbSpuIBIujSph0wEp8WI8vm%2FWVVzLrBWzrgUip7T%2BrS2QoUAoXRCbGj3GC694bvovzdr%2FrI&X-Amz-Signature=edae282b29ba955d5f282eac561d6310ef807f97c227b76f802594ee3cfc4ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MFC6FK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIH%2BV8v6aJ11Kwf6MGKaTYZAsO1lx8MUUQTRj59iLthaoAiBRe0tX5igv%2FO%2Fo0vrg0g%2FjB3o%2Ffp8Vw%2BW8gMCN6lQ5hSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMcB%2BEtTrGkgCES6oEKtwDQiyELhT%2BHdqU8dFlY4tARAWS8XO5LL2YJc529ZNI%2FxnYFi8Dji88p%2Bj5BjXqDD8XJsLUrk6%2FO6%2FHr%2Flpja8HcT46yy0DGSwunBXCMynowtGk5dI1j7f1m6VjohxQtT27dc7uogAHePB0cmgBVwe9kZqQSGZeYj7SjkUpTltFLLwTh37faRyv810yLOovV9fVgmATzWFCmSabuUW7V%2FEWK4UXA5cOhOqJxqjqldkvi%2BZaV35NmiU0HXBQ3UmD8HaVpjS6OnqTUc9hXbp%2FKVTXygtdTAr40kDBcAWEILSUHmUu9cq8sESfxjttVrAC%2F6jxmRlPTN9DZ2AQ2JIQnKiV2Bp3SGhydw3x0QqhkCkwT93S6Wkwk19BhMy1jPqTrmHjiVSM15pgoMpKOn17gDcDjizVZl9e77jakwEziYMZu41zispkvbmsnYIO7UjypjgJ7HRObpUH6fiF5a9P6t1so%2F7Eomj283%2BQjw5SxNrL5VE6waIkDYUD4N1bn6%2F3HTau0i8zEJXCMJ9bKwZPA8isLaJ3yRALjJOqI%2BHdJfAzMG6KFVjRQ72kgDHsNF%2BgrNTXR0elxlM9Er%2Fi%2B%2FM0PC%2F2AOOSvdMQkoBa5xfZH%2Fwxlsp64ntTv7h6NWCNYz8w%2B57PwQY6pgHqEZluzcMWXRyMHty49wmRKoJ4ou2d2v4Fq5dYBIPe2e%2BaJ%2Fl%2B2%2BhVGL9Z8k2HzvfODQ6Zxx%2FHA1%2FEKUBcRBjzuw16Hp%2FaUrWUOzaEw73o6UaaPNmBrqcrCS8xuTsSC8VndiDjQQ%2ByW7NWeVUwxGbGqWbSpuIBIujSph0wEp8WI8vm%2FWVVzLrBWzrgUip7T%2BrS2QoUAoXRCbGj3GC694bvovzdr%2FrI&X-Amz-Signature=53f263ac015f43b12302af1ac48b55ea3819efa4104fadf8ed3152671db563c4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
