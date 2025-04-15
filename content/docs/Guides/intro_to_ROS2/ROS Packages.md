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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7UILLBS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmT4W%2B1GzDRJOnC2C6sdNXKOLcaZkzQhk%2BCzQOgL%2FyQIhAJ4nOoTDxukyhXrcplh0SG4etiyN2B1WF6TzVQlzNscTKv8DCCgQABoMNjM3NDIzMTgzODA1IgxofFK7bU4Um61xs10q3ANmwLWgSaWRCXVN8FQ3m8Z7B4pitVVUKCoZekcMmYhjTYkg%2F2ZnoqoYfQt4dWXEYDNqRw7dHSdhCQHgJ8Y4JwJPl6zjtQlStCQFubc7hsgIcwVz8sGiUH7%2BK%2FKlQd7DptWq80ia5rWha517JCLUjh0JECmkwFPmCPH2ovL9CwVU9cDRRyLRJAZm9wolbyk2poFGcgFTyzzzoFBG5%2BAwnaIsBUVyJ2AEKhA96IAkeRDnRU%2FsR0P%2FgZ4NXUQ6wPetQowsdDgNIypkLUcZb21gmcG2yuEC0%2BqEBQKqsiOJOyGKwgBUE51O1P3NdUyfrGk5lCssfRjKWytmIvapye9dyPCB103y9%2F%2F%2BesabDrIQOU2ZnGBd%2B7W1deYBqv03DGTIceafsxghqhtidYeJxlK6VdLMcieSYZ5zUVJSWOSW1VbIDJHoAiGoEjuQcKwkQxouP7dIcxifEoOwgO55%2BeY4O39tc1mHuLIbM0Kb5rs3p1qbQqc133wDvXJvPn8wGOU%2FDEBdwpMGn1lGhrP9TVoNqecTS7PnfNG4ZF8bsrSMXPoVh9IH3kUvjdrWnh8oDAhYWXuCRTlYylsWYbUJJZ3Yu5bXgdAGhB4hsNIcRTlZon63zntDypLvDDGQHqftxjCNgvi%2FBjqkAcLLM3tWXkaq4FDWIkAGknO7eebtBbsGjxhboRneatjJxQl8U1uQFUf82LWOt9WUVRZ4DxJyf3VtLcXreNTVES9Bq8qjig%2FlXvpFFqnZZdTR7NMtDnDES%2FUg5toKMYDneQaQ62cPKgTbsdqQ9uK4GWZHiysFuHjpvoO2xH4K1OXD4vjHbpWrbNHyVjnD%2Bj891DbZL8CcYSa2FNDEv4xSE%2FpZJ0n2&X-Amz-Signature=f732ea1aeba5bce7ba6e0e8d5d37d5485ebf871febba593fe1d4bcba978806d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7UILLBS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmT4W%2B1GzDRJOnC2C6sdNXKOLcaZkzQhk%2BCzQOgL%2FyQIhAJ4nOoTDxukyhXrcplh0SG4etiyN2B1WF6TzVQlzNscTKv8DCCgQABoMNjM3NDIzMTgzODA1IgxofFK7bU4Um61xs10q3ANmwLWgSaWRCXVN8FQ3m8Z7B4pitVVUKCoZekcMmYhjTYkg%2F2ZnoqoYfQt4dWXEYDNqRw7dHSdhCQHgJ8Y4JwJPl6zjtQlStCQFubc7hsgIcwVz8sGiUH7%2BK%2FKlQd7DptWq80ia5rWha517JCLUjh0JECmkwFPmCPH2ovL9CwVU9cDRRyLRJAZm9wolbyk2poFGcgFTyzzzoFBG5%2BAwnaIsBUVyJ2AEKhA96IAkeRDnRU%2FsR0P%2FgZ4NXUQ6wPetQowsdDgNIypkLUcZb21gmcG2yuEC0%2BqEBQKqsiOJOyGKwgBUE51O1P3NdUyfrGk5lCssfRjKWytmIvapye9dyPCB103y9%2F%2F%2BesabDrIQOU2ZnGBd%2B7W1deYBqv03DGTIceafsxghqhtidYeJxlK6VdLMcieSYZ5zUVJSWOSW1VbIDJHoAiGoEjuQcKwkQxouP7dIcxifEoOwgO55%2BeY4O39tc1mHuLIbM0Kb5rs3p1qbQqc133wDvXJvPn8wGOU%2FDEBdwpMGn1lGhrP9TVoNqecTS7PnfNG4ZF8bsrSMXPoVh9IH3kUvjdrWnh8oDAhYWXuCRTlYylsWYbUJJZ3Yu5bXgdAGhB4hsNIcRTlZon63zntDypLvDDGQHqftxjCNgvi%2FBjqkAcLLM3tWXkaq4FDWIkAGknO7eebtBbsGjxhboRneatjJxQl8U1uQFUf82LWOt9WUVRZ4DxJyf3VtLcXreNTVES9Bq8qjig%2FlXvpFFqnZZdTR7NMtDnDES%2FUg5toKMYDneQaQ62cPKgTbsdqQ9uK4GWZHiysFuHjpvoO2xH4K1OXD4vjHbpWrbNHyVjnD%2Bj891DbZL8CcYSa2FNDEv4xSE%2FpZJ0n2&X-Amz-Signature=134d8df34cea38a49bce5c771562b7bb5be542ec65572c3f27df2a0c4cc4d037&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7UILLBS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmT4W%2B1GzDRJOnC2C6sdNXKOLcaZkzQhk%2BCzQOgL%2FyQIhAJ4nOoTDxukyhXrcplh0SG4etiyN2B1WF6TzVQlzNscTKv8DCCgQABoMNjM3NDIzMTgzODA1IgxofFK7bU4Um61xs10q3ANmwLWgSaWRCXVN8FQ3m8Z7B4pitVVUKCoZekcMmYhjTYkg%2F2ZnoqoYfQt4dWXEYDNqRw7dHSdhCQHgJ8Y4JwJPl6zjtQlStCQFubc7hsgIcwVz8sGiUH7%2BK%2FKlQd7DptWq80ia5rWha517JCLUjh0JECmkwFPmCPH2ovL9CwVU9cDRRyLRJAZm9wolbyk2poFGcgFTyzzzoFBG5%2BAwnaIsBUVyJ2AEKhA96IAkeRDnRU%2FsR0P%2FgZ4NXUQ6wPetQowsdDgNIypkLUcZb21gmcG2yuEC0%2BqEBQKqsiOJOyGKwgBUE51O1P3NdUyfrGk5lCssfRjKWytmIvapye9dyPCB103y9%2F%2F%2BesabDrIQOU2ZnGBd%2B7W1deYBqv03DGTIceafsxghqhtidYeJxlK6VdLMcieSYZ5zUVJSWOSW1VbIDJHoAiGoEjuQcKwkQxouP7dIcxifEoOwgO55%2BeY4O39tc1mHuLIbM0Kb5rs3p1qbQqc133wDvXJvPn8wGOU%2FDEBdwpMGn1lGhrP9TVoNqecTS7PnfNG4ZF8bsrSMXPoVh9IH3kUvjdrWnh8oDAhYWXuCRTlYylsWYbUJJZ3Yu5bXgdAGhB4hsNIcRTlZon63zntDypLvDDGQHqftxjCNgvi%2FBjqkAcLLM3tWXkaq4FDWIkAGknO7eebtBbsGjxhboRneatjJxQl8U1uQFUf82LWOt9WUVRZ4DxJyf3VtLcXreNTVES9Bq8qjig%2FlXvpFFqnZZdTR7NMtDnDES%2FUg5toKMYDneQaQ62cPKgTbsdqQ9uK4GWZHiysFuHjpvoO2xH4K1OXD4vjHbpWrbNHyVjnD%2Bj891DbZL8CcYSa2FNDEv4xSE%2FpZJ0n2&X-Amz-Signature=708559138bff35cf5ba428e3630c9f0f476fd698cb442376081b48e870324a66&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7UILLBS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmT4W%2B1GzDRJOnC2C6sdNXKOLcaZkzQhk%2BCzQOgL%2FyQIhAJ4nOoTDxukyhXrcplh0SG4etiyN2B1WF6TzVQlzNscTKv8DCCgQABoMNjM3NDIzMTgzODA1IgxofFK7bU4Um61xs10q3ANmwLWgSaWRCXVN8FQ3m8Z7B4pitVVUKCoZekcMmYhjTYkg%2F2ZnoqoYfQt4dWXEYDNqRw7dHSdhCQHgJ8Y4JwJPl6zjtQlStCQFubc7hsgIcwVz8sGiUH7%2BK%2FKlQd7DptWq80ia5rWha517JCLUjh0JECmkwFPmCPH2ovL9CwVU9cDRRyLRJAZm9wolbyk2poFGcgFTyzzzoFBG5%2BAwnaIsBUVyJ2AEKhA96IAkeRDnRU%2FsR0P%2FgZ4NXUQ6wPetQowsdDgNIypkLUcZb21gmcG2yuEC0%2BqEBQKqsiOJOyGKwgBUE51O1P3NdUyfrGk5lCssfRjKWytmIvapye9dyPCB103y9%2F%2F%2BesabDrIQOU2ZnGBd%2B7W1deYBqv03DGTIceafsxghqhtidYeJxlK6VdLMcieSYZ5zUVJSWOSW1VbIDJHoAiGoEjuQcKwkQxouP7dIcxifEoOwgO55%2BeY4O39tc1mHuLIbM0Kb5rs3p1qbQqc133wDvXJvPn8wGOU%2FDEBdwpMGn1lGhrP9TVoNqecTS7PnfNG4ZF8bsrSMXPoVh9IH3kUvjdrWnh8oDAhYWXuCRTlYylsWYbUJJZ3Yu5bXgdAGhB4hsNIcRTlZon63zntDypLvDDGQHqftxjCNgvi%2FBjqkAcLLM3tWXkaq4FDWIkAGknO7eebtBbsGjxhboRneatjJxQl8U1uQFUf82LWOt9WUVRZ4DxJyf3VtLcXreNTVES9Bq8qjig%2FlXvpFFqnZZdTR7NMtDnDES%2FUg5toKMYDneQaQ62cPKgTbsdqQ9uK4GWZHiysFuHjpvoO2xH4K1OXD4vjHbpWrbNHyVjnD%2Bj891DbZL8CcYSa2FNDEv4xSE%2FpZJ0n2&X-Amz-Signature=679996f0b0dddf7cebd56d3f106b130698ef340ce20bfb068b4cb0240aa96a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7UILLBS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmT4W%2B1GzDRJOnC2C6sdNXKOLcaZkzQhk%2BCzQOgL%2FyQIhAJ4nOoTDxukyhXrcplh0SG4etiyN2B1WF6TzVQlzNscTKv8DCCgQABoMNjM3NDIzMTgzODA1IgxofFK7bU4Um61xs10q3ANmwLWgSaWRCXVN8FQ3m8Z7B4pitVVUKCoZekcMmYhjTYkg%2F2ZnoqoYfQt4dWXEYDNqRw7dHSdhCQHgJ8Y4JwJPl6zjtQlStCQFubc7hsgIcwVz8sGiUH7%2BK%2FKlQd7DptWq80ia5rWha517JCLUjh0JECmkwFPmCPH2ovL9CwVU9cDRRyLRJAZm9wolbyk2poFGcgFTyzzzoFBG5%2BAwnaIsBUVyJ2AEKhA96IAkeRDnRU%2FsR0P%2FgZ4NXUQ6wPetQowsdDgNIypkLUcZb21gmcG2yuEC0%2BqEBQKqsiOJOyGKwgBUE51O1P3NdUyfrGk5lCssfRjKWytmIvapye9dyPCB103y9%2F%2F%2BesabDrIQOU2ZnGBd%2B7W1deYBqv03DGTIceafsxghqhtidYeJxlK6VdLMcieSYZ5zUVJSWOSW1VbIDJHoAiGoEjuQcKwkQxouP7dIcxifEoOwgO55%2BeY4O39tc1mHuLIbM0Kb5rs3p1qbQqc133wDvXJvPn8wGOU%2FDEBdwpMGn1lGhrP9TVoNqecTS7PnfNG4ZF8bsrSMXPoVh9IH3kUvjdrWnh8oDAhYWXuCRTlYylsWYbUJJZ3Yu5bXgdAGhB4hsNIcRTlZon63zntDypLvDDGQHqftxjCNgvi%2FBjqkAcLLM3tWXkaq4FDWIkAGknO7eebtBbsGjxhboRneatjJxQl8U1uQFUf82LWOt9WUVRZ4DxJyf3VtLcXreNTVES9Bq8qjig%2FlXvpFFqnZZdTR7NMtDnDES%2FUg5toKMYDneQaQ62cPKgTbsdqQ9uK4GWZHiysFuHjpvoO2xH4K1OXD4vjHbpWrbNHyVjnD%2Bj891DbZL8CcYSa2FNDEv4xSE%2FpZJ0n2&X-Amz-Signature=825f15938bb24177ecb59eb50efe8a71a7765509ef77052f076dc6e006c29463&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7UILLBS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmT4W%2B1GzDRJOnC2C6sdNXKOLcaZkzQhk%2BCzQOgL%2FyQIhAJ4nOoTDxukyhXrcplh0SG4etiyN2B1WF6TzVQlzNscTKv8DCCgQABoMNjM3NDIzMTgzODA1IgxofFK7bU4Um61xs10q3ANmwLWgSaWRCXVN8FQ3m8Z7B4pitVVUKCoZekcMmYhjTYkg%2F2ZnoqoYfQt4dWXEYDNqRw7dHSdhCQHgJ8Y4JwJPl6zjtQlStCQFubc7hsgIcwVz8sGiUH7%2BK%2FKlQd7DptWq80ia5rWha517JCLUjh0JECmkwFPmCPH2ovL9CwVU9cDRRyLRJAZm9wolbyk2poFGcgFTyzzzoFBG5%2BAwnaIsBUVyJ2AEKhA96IAkeRDnRU%2FsR0P%2FgZ4NXUQ6wPetQowsdDgNIypkLUcZb21gmcG2yuEC0%2BqEBQKqsiOJOyGKwgBUE51O1P3NdUyfrGk5lCssfRjKWytmIvapye9dyPCB103y9%2F%2F%2BesabDrIQOU2ZnGBd%2B7W1deYBqv03DGTIceafsxghqhtidYeJxlK6VdLMcieSYZ5zUVJSWOSW1VbIDJHoAiGoEjuQcKwkQxouP7dIcxifEoOwgO55%2BeY4O39tc1mHuLIbM0Kb5rs3p1qbQqc133wDvXJvPn8wGOU%2FDEBdwpMGn1lGhrP9TVoNqecTS7PnfNG4ZF8bsrSMXPoVh9IH3kUvjdrWnh8oDAhYWXuCRTlYylsWYbUJJZ3Yu5bXgdAGhB4hsNIcRTlZon63zntDypLvDDGQHqftxjCNgvi%2FBjqkAcLLM3tWXkaq4FDWIkAGknO7eebtBbsGjxhboRneatjJxQl8U1uQFUf82LWOt9WUVRZ4DxJyf3VtLcXreNTVES9Bq8qjig%2FlXvpFFqnZZdTR7NMtDnDES%2FUg5toKMYDneQaQ62cPKgTbsdqQ9uK4GWZHiysFuHjpvoO2xH4K1OXD4vjHbpWrbNHyVjnD%2Bj891DbZL8CcYSa2FNDEv4xSE%2FpZJ0n2&X-Amz-Signature=87ac810fba4bb042ba9d7b9ba80f013f53d9063330982dcb27a7b616abe646b0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7UILLBS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtmT4W%2B1GzDRJOnC2C6sdNXKOLcaZkzQhk%2BCzQOgL%2FyQIhAJ4nOoTDxukyhXrcplh0SG4etiyN2B1WF6TzVQlzNscTKv8DCCgQABoMNjM3NDIzMTgzODA1IgxofFK7bU4Um61xs10q3ANmwLWgSaWRCXVN8FQ3m8Z7B4pitVVUKCoZekcMmYhjTYkg%2F2ZnoqoYfQt4dWXEYDNqRw7dHSdhCQHgJ8Y4JwJPl6zjtQlStCQFubc7hsgIcwVz8sGiUH7%2BK%2FKlQd7DptWq80ia5rWha517JCLUjh0JECmkwFPmCPH2ovL9CwVU9cDRRyLRJAZm9wolbyk2poFGcgFTyzzzoFBG5%2BAwnaIsBUVyJ2AEKhA96IAkeRDnRU%2FsR0P%2FgZ4NXUQ6wPetQowsdDgNIypkLUcZb21gmcG2yuEC0%2BqEBQKqsiOJOyGKwgBUE51O1P3NdUyfrGk5lCssfRjKWytmIvapye9dyPCB103y9%2F%2F%2BesabDrIQOU2ZnGBd%2B7W1deYBqv03DGTIceafsxghqhtidYeJxlK6VdLMcieSYZ5zUVJSWOSW1VbIDJHoAiGoEjuQcKwkQxouP7dIcxifEoOwgO55%2BeY4O39tc1mHuLIbM0Kb5rs3p1qbQqc133wDvXJvPn8wGOU%2FDEBdwpMGn1lGhrP9TVoNqecTS7PnfNG4ZF8bsrSMXPoVh9IH3kUvjdrWnh8oDAhYWXuCRTlYylsWYbUJJZ3Yu5bXgdAGhB4hsNIcRTlZon63zntDypLvDDGQHqftxjCNgvi%2FBjqkAcLLM3tWXkaq4FDWIkAGknO7eebtBbsGjxhboRneatjJxQl8U1uQFUf82LWOt9WUVRZ4DxJyf3VtLcXreNTVES9Bq8qjig%2FlXvpFFqnZZdTR7NMtDnDES%2FUg5toKMYDneQaQ62cPKgTbsdqQ9uK4GWZHiysFuHjpvoO2xH4K1OXD4vjHbpWrbNHyVjnD%2Bj891DbZL8CcYSa2FNDEv4xSE%2FpZJ0n2&X-Amz-Signature=bc0d660aa23a05a08c3d541dfec8dcc271164ddd41003b272255ea68b634d23e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
