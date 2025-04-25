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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FRN6ZI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYb%2Fl4Gq7Qnx1vW4mGNlsK35KMUeHCC13rNtkHUWshwQIhAOo7SpYxy1Nmw9MnlYRysUJhIdrN4uiuUE9EFGF1rTZBKv8DCDcQABoMNjM3NDIzMTgzODA1IgzbniLhRkt6Xxtzh44q3APoJAKc4tYIYw3HAJqxSndFmij01ElZQxyURdHmV91tYRs7VBfdyPN47kNiw1R6aGMBk0p961cWy039hSAMoC9%2FTDKMqWrvvfc8SjvTUCfDV%2B%2BK%2B7l7zgxBiRAhTiVh1ZmAZ0o02C5h3%2Biqe3hOOWAyjTo9YmykiAwupzSDqmXJPemcm%2BTDEdks%2BU6ecuHkfhUAcmoYRV8VrwPibVufRxBr4ubKXkld7c6WvbDoEb3BJY6fsUwqlrMxCTV0Si7vVNfU4jlqdw%2BveSG1ZxRR4lu9e0eZUiOsSsAYW0D0ByFGat7VSwhXqjxyOUILLmKhV%2FkFWIssxdXMKUc9ZWZdSBXEPkbr%2FfTqeK%2FhrrgJLlWGUykB0MdBoOalFSQvcYnMhHMoA%2FL4B0pWE1zZ6XlQ9oc3RsnX2MgOxuoZZc3%2FRmd%2FtF806Wp56%2FtWweB8vTnsQGcPks5%2FnloaSBOWz%2FucEAezuL03gHE2%2Bx9VMFIDExZKkd2nLJeOnchAHKoFiaubVVKtpKeAmHnc4hyKmZs%2FbodLBBC3YEJVbsNkx5EQZRk%2BzTKlYz6hSrntYM7QWPPxriymZeQ9xiKA93h0s%2F26GQFFNx3xae2RW1LFNtwPjMF88nmO4pC%2BGLdVEjGncjCkh7DABjqkASxdWIxrbi9ZYEY4WjyJMBsZhGOuj7rG7ewpVqexlUMg5zMytrwbrSUsH6WF6GAbFo%2FsIQzElGp65nx9KSOllcGI75XzAzVQLoyXKo7ILX27BcjGZMJ9cl4e4%2F3lE4VN%2BGKa5NAuMeAGGfTXWQEA80c%2BuNRahRsExZ%2BG41ZJnf2%2FUbFNOxw%2B2mIM%2BW%2FgFMqsEFJtptzstdP0%2FJcddXq5Ge52Bex2&X-Amz-Signature=c63a7e4ff03701a42c2ada92e529d88047b0f757d69acf8fac42dd570751ddce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FRN6ZI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYb%2Fl4Gq7Qnx1vW4mGNlsK35KMUeHCC13rNtkHUWshwQIhAOo7SpYxy1Nmw9MnlYRysUJhIdrN4uiuUE9EFGF1rTZBKv8DCDcQABoMNjM3NDIzMTgzODA1IgzbniLhRkt6Xxtzh44q3APoJAKc4tYIYw3HAJqxSndFmij01ElZQxyURdHmV91tYRs7VBfdyPN47kNiw1R6aGMBk0p961cWy039hSAMoC9%2FTDKMqWrvvfc8SjvTUCfDV%2B%2BK%2B7l7zgxBiRAhTiVh1ZmAZ0o02C5h3%2Biqe3hOOWAyjTo9YmykiAwupzSDqmXJPemcm%2BTDEdks%2BU6ecuHkfhUAcmoYRV8VrwPibVufRxBr4ubKXkld7c6WvbDoEb3BJY6fsUwqlrMxCTV0Si7vVNfU4jlqdw%2BveSG1ZxRR4lu9e0eZUiOsSsAYW0D0ByFGat7VSwhXqjxyOUILLmKhV%2FkFWIssxdXMKUc9ZWZdSBXEPkbr%2FfTqeK%2FhrrgJLlWGUykB0MdBoOalFSQvcYnMhHMoA%2FL4B0pWE1zZ6XlQ9oc3RsnX2MgOxuoZZc3%2FRmd%2FtF806Wp56%2FtWweB8vTnsQGcPks5%2FnloaSBOWz%2FucEAezuL03gHE2%2Bx9VMFIDExZKkd2nLJeOnchAHKoFiaubVVKtpKeAmHnc4hyKmZs%2FbodLBBC3YEJVbsNkx5EQZRk%2BzTKlYz6hSrntYM7QWPPxriymZeQ9xiKA93h0s%2F26GQFFNx3xae2RW1LFNtwPjMF88nmO4pC%2BGLdVEjGncjCkh7DABjqkASxdWIxrbi9ZYEY4WjyJMBsZhGOuj7rG7ewpVqexlUMg5zMytrwbrSUsH6WF6GAbFo%2FsIQzElGp65nx9KSOllcGI75XzAzVQLoyXKo7ILX27BcjGZMJ9cl4e4%2F3lE4VN%2BGKa5NAuMeAGGfTXWQEA80c%2BuNRahRsExZ%2BG41ZJnf2%2FUbFNOxw%2B2mIM%2BW%2FgFMqsEFJtptzstdP0%2FJcddXq5Ge52Bex2&X-Amz-Signature=da12b66d5891a4646406be89c9da81b3d31c9d8696aa1e03dd7bec6978b433ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FRN6ZI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYb%2Fl4Gq7Qnx1vW4mGNlsK35KMUeHCC13rNtkHUWshwQIhAOo7SpYxy1Nmw9MnlYRysUJhIdrN4uiuUE9EFGF1rTZBKv8DCDcQABoMNjM3NDIzMTgzODA1IgzbniLhRkt6Xxtzh44q3APoJAKc4tYIYw3HAJqxSndFmij01ElZQxyURdHmV91tYRs7VBfdyPN47kNiw1R6aGMBk0p961cWy039hSAMoC9%2FTDKMqWrvvfc8SjvTUCfDV%2B%2BK%2B7l7zgxBiRAhTiVh1ZmAZ0o02C5h3%2Biqe3hOOWAyjTo9YmykiAwupzSDqmXJPemcm%2BTDEdks%2BU6ecuHkfhUAcmoYRV8VrwPibVufRxBr4ubKXkld7c6WvbDoEb3BJY6fsUwqlrMxCTV0Si7vVNfU4jlqdw%2BveSG1ZxRR4lu9e0eZUiOsSsAYW0D0ByFGat7VSwhXqjxyOUILLmKhV%2FkFWIssxdXMKUc9ZWZdSBXEPkbr%2FfTqeK%2FhrrgJLlWGUykB0MdBoOalFSQvcYnMhHMoA%2FL4B0pWE1zZ6XlQ9oc3RsnX2MgOxuoZZc3%2FRmd%2FtF806Wp56%2FtWweB8vTnsQGcPks5%2FnloaSBOWz%2FucEAezuL03gHE2%2Bx9VMFIDExZKkd2nLJeOnchAHKoFiaubVVKtpKeAmHnc4hyKmZs%2FbodLBBC3YEJVbsNkx5EQZRk%2BzTKlYz6hSrntYM7QWPPxriymZeQ9xiKA93h0s%2F26GQFFNx3xae2RW1LFNtwPjMF88nmO4pC%2BGLdVEjGncjCkh7DABjqkASxdWIxrbi9ZYEY4WjyJMBsZhGOuj7rG7ewpVqexlUMg5zMytrwbrSUsH6WF6GAbFo%2FsIQzElGp65nx9KSOllcGI75XzAzVQLoyXKo7ILX27BcjGZMJ9cl4e4%2F3lE4VN%2BGKa5NAuMeAGGfTXWQEA80c%2BuNRahRsExZ%2BG41ZJnf2%2FUbFNOxw%2B2mIM%2BW%2FgFMqsEFJtptzstdP0%2FJcddXq5Ge52Bex2&X-Amz-Signature=940e099a3b0e23250f13cbdcca570c4f0c965bdb3bf66dc83b52bd5b0ba7a4be&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FRN6ZI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYb%2Fl4Gq7Qnx1vW4mGNlsK35KMUeHCC13rNtkHUWshwQIhAOo7SpYxy1Nmw9MnlYRysUJhIdrN4uiuUE9EFGF1rTZBKv8DCDcQABoMNjM3NDIzMTgzODA1IgzbniLhRkt6Xxtzh44q3APoJAKc4tYIYw3HAJqxSndFmij01ElZQxyURdHmV91tYRs7VBfdyPN47kNiw1R6aGMBk0p961cWy039hSAMoC9%2FTDKMqWrvvfc8SjvTUCfDV%2B%2BK%2B7l7zgxBiRAhTiVh1ZmAZ0o02C5h3%2Biqe3hOOWAyjTo9YmykiAwupzSDqmXJPemcm%2BTDEdks%2BU6ecuHkfhUAcmoYRV8VrwPibVufRxBr4ubKXkld7c6WvbDoEb3BJY6fsUwqlrMxCTV0Si7vVNfU4jlqdw%2BveSG1ZxRR4lu9e0eZUiOsSsAYW0D0ByFGat7VSwhXqjxyOUILLmKhV%2FkFWIssxdXMKUc9ZWZdSBXEPkbr%2FfTqeK%2FhrrgJLlWGUykB0MdBoOalFSQvcYnMhHMoA%2FL4B0pWE1zZ6XlQ9oc3RsnX2MgOxuoZZc3%2FRmd%2FtF806Wp56%2FtWweB8vTnsQGcPks5%2FnloaSBOWz%2FucEAezuL03gHE2%2Bx9VMFIDExZKkd2nLJeOnchAHKoFiaubVVKtpKeAmHnc4hyKmZs%2FbodLBBC3YEJVbsNkx5EQZRk%2BzTKlYz6hSrntYM7QWPPxriymZeQ9xiKA93h0s%2F26GQFFNx3xae2RW1LFNtwPjMF88nmO4pC%2BGLdVEjGncjCkh7DABjqkASxdWIxrbi9ZYEY4WjyJMBsZhGOuj7rG7ewpVqexlUMg5zMytrwbrSUsH6WF6GAbFo%2FsIQzElGp65nx9KSOllcGI75XzAzVQLoyXKo7ILX27BcjGZMJ9cl4e4%2F3lE4VN%2BGKa5NAuMeAGGfTXWQEA80c%2BuNRahRsExZ%2BG41ZJnf2%2FUbFNOxw%2B2mIM%2BW%2FgFMqsEFJtptzstdP0%2FJcddXq5Ge52Bex2&X-Amz-Signature=cec6dc2a2b5fa48f8ac120be9381a7ba468583f3c7bd4aac12a2401ca936c6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FRN6ZI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYb%2Fl4Gq7Qnx1vW4mGNlsK35KMUeHCC13rNtkHUWshwQIhAOo7SpYxy1Nmw9MnlYRysUJhIdrN4uiuUE9EFGF1rTZBKv8DCDcQABoMNjM3NDIzMTgzODA1IgzbniLhRkt6Xxtzh44q3APoJAKc4tYIYw3HAJqxSndFmij01ElZQxyURdHmV91tYRs7VBfdyPN47kNiw1R6aGMBk0p961cWy039hSAMoC9%2FTDKMqWrvvfc8SjvTUCfDV%2B%2BK%2B7l7zgxBiRAhTiVh1ZmAZ0o02C5h3%2Biqe3hOOWAyjTo9YmykiAwupzSDqmXJPemcm%2BTDEdks%2BU6ecuHkfhUAcmoYRV8VrwPibVufRxBr4ubKXkld7c6WvbDoEb3BJY6fsUwqlrMxCTV0Si7vVNfU4jlqdw%2BveSG1ZxRR4lu9e0eZUiOsSsAYW0D0ByFGat7VSwhXqjxyOUILLmKhV%2FkFWIssxdXMKUc9ZWZdSBXEPkbr%2FfTqeK%2FhrrgJLlWGUykB0MdBoOalFSQvcYnMhHMoA%2FL4B0pWE1zZ6XlQ9oc3RsnX2MgOxuoZZc3%2FRmd%2FtF806Wp56%2FtWweB8vTnsQGcPks5%2FnloaSBOWz%2FucEAezuL03gHE2%2Bx9VMFIDExZKkd2nLJeOnchAHKoFiaubVVKtpKeAmHnc4hyKmZs%2FbodLBBC3YEJVbsNkx5EQZRk%2BzTKlYz6hSrntYM7QWPPxriymZeQ9xiKA93h0s%2F26GQFFNx3xae2RW1LFNtwPjMF88nmO4pC%2BGLdVEjGncjCkh7DABjqkASxdWIxrbi9ZYEY4WjyJMBsZhGOuj7rG7ewpVqexlUMg5zMytrwbrSUsH6WF6GAbFo%2FsIQzElGp65nx9KSOllcGI75XzAzVQLoyXKo7ILX27BcjGZMJ9cl4e4%2F3lE4VN%2BGKa5NAuMeAGGfTXWQEA80c%2BuNRahRsExZ%2BG41ZJnf2%2FUbFNOxw%2B2mIM%2BW%2FgFMqsEFJtptzstdP0%2FJcddXq5Ge52Bex2&X-Amz-Signature=7136c9936778ca462fe75fb37f76483d08d0fce03b379ac3adfe4bc343fe6cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FRN6ZI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYb%2Fl4Gq7Qnx1vW4mGNlsK35KMUeHCC13rNtkHUWshwQIhAOo7SpYxy1Nmw9MnlYRysUJhIdrN4uiuUE9EFGF1rTZBKv8DCDcQABoMNjM3NDIzMTgzODA1IgzbniLhRkt6Xxtzh44q3APoJAKc4tYIYw3HAJqxSndFmij01ElZQxyURdHmV91tYRs7VBfdyPN47kNiw1R6aGMBk0p961cWy039hSAMoC9%2FTDKMqWrvvfc8SjvTUCfDV%2B%2BK%2B7l7zgxBiRAhTiVh1ZmAZ0o02C5h3%2Biqe3hOOWAyjTo9YmykiAwupzSDqmXJPemcm%2BTDEdks%2BU6ecuHkfhUAcmoYRV8VrwPibVufRxBr4ubKXkld7c6WvbDoEb3BJY6fsUwqlrMxCTV0Si7vVNfU4jlqdw%2BveSG1ZxRR4lu9e0eZUiOsSsAYW0D0ByFGat7VSwhXqjxyOUILLmKhV%2FkFWIssxdXMKUc9ZWZdSBXEPkbr%2FfTqeK%2FhrrgJLlWGUykB0MdBoOalFSQvcYnMhHMoA%2FL4B0pWE1zZ6XlQ9oc3RsnX2MgOxuoZZc3%2FRmd%2FtF806Wp56%2FtWweB8vTnsQGcPks5%2FnloaSBOWz%2FucEAezuL03gHE2%2Bx9VMFIDExZKkd2nLJeOnchAHKoFiaubVVKtpKeAmHnc4hyKmZs%2FbodLBBC3YEJVbsNkx5EQZRk%2BzTKlYz6hSrntYM7QWPPxriymZeQ9xiKA93h0s%2F26GQFFNx3xae2RW1LFNtwPjMF88nmO4pC%2BGLdVEjGncjCkh7DABjqkASxdWIxrbi9ZYEY4WjyJMBsZhGOuj7rG7ewpVqexlUMg5zMytrwbrSUsH6WF6GAbFo%2FsIQzElGp65nx9KSOllcGI75XzAzVQLoyXKo7ILX27BcjGZMJ9cl4e4%2F3lE4VN%2BGKa5NAuMeAGGfTXWQEA80c%2BuNRahRsExZ%2BG41ZJnf2%2FUbFNOxw%2B2mIM%2BW%2FgFMqsEFJtptzstdP0%2FJcddXq5Ge52Bex2&X-Amz-Signature=08d29f17d24fbb35d7d91df05d7bce336bee7fd6a8bf2ddd90de6df5814bf173&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FRN6ZI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYb%2Fl4Gq7Qnx1vW4mGNlsK35KMUeHCC13rNtkHUWshwQIhAOo7SpYxy1Nmw9MnlYRysUJhIdrN4uiuUE9EFGF1rTZBKv8DCDcQABoMNjM3NDIzMTgzODA1IgzbniLhRkt6Xxtzh44q3APoJAKc4tYIYw3HAJqxSndFmij01ElZQxyURdHmV91tYRs7VBfdyPN47kNiw1R6aGMBk0p961cWy039hSAMoC9%2FTDKMqWrvvfc8SjvTUCfDV%2B%2BK%2B7l7zgxBiRAhTiVh1ZmAZ0o02C5h3%2Biqe3hOOWAyjTo9YmykiAwupzSDqmXJPemcm%2BTDEdks%2BU6ecuHkfhUAcmoYRV8VrwPibVufRxBr4ubKXkld7c6WvbDoEb3BJY6fsUwqlrMxCTV0Si7vVNfU4jlqdw%2BveSG1ZxRR4lu9e0eZUiOsSsAYW0D0ByFGat7VSwhXqjxyOUILLmKhV%2FkFWIssxdXMKUc9ZWZdSBXEPkbr%2FfTqeK%2FhrrgJLlWGUykB0MdBoOalFSQvcYnMhHMoA%2FL4B0pWE1zZ6XlQ9oc3RsnX2MgOxuoZZc3%2FRmd%2FtF806Wp56%2FtWweB8vTnsQGcPks5%2FnloaSBOWz%2FucEAezuL03gHE2%2Bx9VMFIDExZKkd2nLJeOnchAHKoFiaubVVKtpKeAmHnc4hyKmZs%2FbodLBBC3YEJVbsNkx5EQZRk%2BzTKlYz6hSrntYM7QWPPxriymZeQ9xiKA93h0s%2F26GQFFNx3xae2RW1LFNtwPjMF88nmO4pC%2BGLdVEjGncjCkh7DABjqkASxdWIxrbi9ZYEY4WjyJMBsZhGOuj7rG7ewpVqexlUMg5zMytrwbrSUsH6WF6GAbFo%2FsIQzElGp65nx9KSOllcGI75XzAzVQLoyXKo7ILX27BcjGZMJ9cl4e4%2F3lE4VN%2BGKa5NAuMeAGGfTXWQEA80c%2BuNRahRsExZ%2BG41ZJnf2%2FUbFNOxw%2B2mIM%2BW%2FgFMqsEFJtptzstdP0%2FJcddXq5Ge52Bex2&X-Amz-Signature=716354f416b16ae07674442401b556270b68f57ae32f4173dd6a647adedeb6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
