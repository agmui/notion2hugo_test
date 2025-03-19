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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6RGVBI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7INVXpKcSdvDNkFiDFPYzuJVP667FgyE09o4m373RJQIhAPBftK9rre05z%2BgVO9H7vDATBifKzTfKTUbOJbdDeBo%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxP9Mwe5e17XJZCIisq3AMZLpiqSVvi5e%2BoyFqTsoqMqxhySXsH%2B2QPF%2FyjsN39IBh0cJ8qoOK0OtXsuJGp90yv73OOA%2F7UufkkWC7M4ATeWicyn7DUnsZutUoPhYv%2BID0qXM8qYvOCN0uBLA9yOSquR5dj0Q%2BwPqpxVQZpw3gZWfqOTeGiv7P9ZX%2FdDyfL3Kn9k13GSEYpFC%2FsSKgE8%2BQZkUuAFdTvOGcgwpTQ6MZEIPC4tyqzSndslnaYm5K6t5fFD0%2FvHxf9QXTSMxqOFCNuEqoU5AFOsxi4YXaddyKJLsO3%2F65Lr5KprhHLw%2BDGK2hafdccTPKbX4PntnO935U6NWtiNkv8r6Kg99w6LjaPrV0x2Gt7Sk2QYX%2FioncYxWmWv3PtoHWGALbSTgGAupNN2PSCyEjfvjlXcSBT%2B3qfYX69oUBfVXm6IvDyYfLUnZXNpHMBhJA%2Fh6PnN%2B1FODmjDhpyAR97WKTgWMtkGltt20iuBiTt4qKAJDTc1%2BBpCkVlddKlQNlKeslT9YdTxuUHYcSQK5KBEb8kgmwZUOtykkkurBPgcGWjVPeMWcXHTnkpjuHbvdbulEx%2BBBqpvbYJJa59VD6Yh30119MA3anghxYzgee6kkuDKmXmsyWFeRBfJYMuqTJTUwn%2FRzChveu%2BBjqkARMQooTo%2BUHTgh8GuyvMBferyat0golTk11lfHPosrvksZgY8vZ5VVyiiNk1%2FEqUGbKm2L12IAQ1MO%2B6lX6ybcV38WAj5FsUDuNtI%2F6I0nVqMwWKaT6WsLVgZy1DvxvXdsF%2BXQ9oPpXzF6WgFY7YKL93gZlwY9O%2B8ZBtoscFJNfyQtnf%2FQxFEzmzf1MMDpjmLrfjmur%2FcDCODGnZrs%2FOwX1aqpIY&X-Amz-Signature=76f2cc4872dde0902bfd36953511a448f38d0d30f021221f376e3c9d9b1abfa6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6RGVBI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7INVXpKcSdvDNkFiDFPYzuJVP667FgyE09o4m373RJQIhAPBftK9rre05z%2BgVO9H7vDATBifKzTfKTUbOJbdDeBo%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxP9Mwe5e17XJZCIisq3AMZLpiqSVvi5e%2BoyFqTsoqMqxhySXsH%2B2QPF%2FyjsN39IBh0cJ8qoOK0OtXsuJGp90yv73OOA%2F7UufkkWC7M4ATeWicyn7DUnsZutUoPhYv%2BID0qXM8qYvOCN0uBLA9yOSquR5dj0Q%2BwPqpxVQZpw3gZWfqOTeGiv7P9ZX%2FdDyfL3Kn9k13GSEYpFC%2FsSKgE8%2BQZkUuAFdTvOGcgwpTQ6MZEIPC4tyqzSndslnaYm5K6t5fFD0%2FvHxf9QXTSMxqOFCNuEqoU5AFOsxi4YXaddyKJLsO3%2F65Lr5KprhHLw%2BDGK2hafdccTPKbX4PntnO935U6NWtiNkv8r6Kg99w6LjaPrV0x2Gt7Sk2QYX%2FioncYxWmWv3PtoHWGALbSTgGAupNN2PSCyEjfvjlXcSBT%2B3qfYX69oUBfVXm6IvDyYfLUnZXNpHMBhJA%2Fh6PnN%2B1FODmjDhpyAR97WKTgWMtkGltt20iuBiTt4qKAJDTc1%2BBpCkVlddKlQNlKeslT9YdTxuUHYcSQK5KBEb8kgmwZUOtykkkurBPgcGWjVPeMWcXHTnkpjuHbvdbulEx%2BBBqpvbYJJa59VD6Yh30119MA3anghxYzgee6kkuDKmXmsyWFeRBfJYMuqTJTUwn%2FRzChveu%2BBjqkARMQooTo%2BUHTgh8GuyvMBferyat0golTk11lfHPosrvksZgY8vZ5VVyiiNk1%2FEqUGbKm2L12IAQ1MO%2B6lX6ybcV38WAj5FsUDuNtI%2F6I0nVqMwWKaT6WsLVgZy1DvxvXdsF%2BXQ9oPpXzF6WgFY7YKL93gZlwY9O%2B8ZBtoscFJNfyQtnf%2FQxFEzmzf1MMDpjmLrfjmur%2FcDCODGnZrs%2FOwX1aqpIY&X-Amz-Signature=6a4376b2aeded4b24be40627fac9483291bbaca0d42970b821538c921760c8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6RGVBI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7INVXpKcSdvDNkFiDFPYzuJVP667FgyE09o4m373RJQIhAPBftK9rre05z%2BgVO9H7vDATBifKzTfKTUbOJbdDeBo%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxP9Mwe5e17XJZCIisq3AMZLpiqSVvi5e%2BoyFqTsoqMqxhySXsH%2B2QPF%2FyjsN39IBh0cJ8qoOK0OtXsuJGp90yv73OOA%2F7UufkkWC7M4ATeWicyn7DUnsZutUoPhYv%2BID0qXM8qYvOCN0uBLA9yOSquR5dj0Q%2BwPqpxVQZpw3gZWfqOTeGiv7P9ZX%2FdDyfL3Kn9k13GSEYpFC%2FsSKgE8%2BQZkUuAFdTvOGcgwpTQ6MZEIPC4tyqzSndslnaYm5K6t5fFD0%2FvHxf9QXTSMxqOFCNuEqoU5AFOsxi4YXaddyKJLsO3%2F65Lr5KprhHLw%2BDGK2hafdccTPKbX4PntnO935U6NWtiNkv8r6Kg99w6LjaPrV0x2Gt7Sk2QYX%2FioncYxWmWv3PtoHWGALbSTgGAupNN2PSCyEjfvjlXcSBT%2B3qfYX69oUBfVXm6IvDyYfLUnZXNpHMBhJA%2Fh6PnN%2B1FODmjDhpyAR97WKTgWMtkGltt20iuBiTt4qKAJDTc1%2BBpCkVlddKlQNlKeslT9YdTxuUHYcSQK5KBEb8kgmwZUOtykkkurBPgcGWjVPeMWcXHTnkpjuHbvdbulEx%2BBBqpvbYJJa59VD6Yh30119MA3anghxYzgee6kkuDKmXmsyWFeRBfJYMuqTJTUwn%2FRzChveu%2BBjqkARMQooTo%2BUHTgh8GuyvMBferyat0golTk11lfHPosrvksZgY8vZ5VVyiiNk1%2FEqUGbKm2L12IAQ1MO%2B6lX6ybcV38WAj5FsUDuNtI%2F6I0nVqMwWKaT6WsLVgZy1DvxvXdsF%2BXQ9oPpXzF6WgFY7YKL93gZlwY9O%2B8ZBtoscFJNfyQtnf%2FQxFEzmzf1MMDpjmLrfjmur%2FcDCODGnZrs%2FOwX1aqpIY&X-Amz-Signature=d2b64cd3349cae95df1207676009f263e806a2a46ed3a50a342608e98ecc72ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6RGVBI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7INVXpKcSdvDNkFiDFPYzuJVP667FgyE09o4m373RJQIhAPBftK9rre05z%2BgVO9H7vDATBifKzTfKTUbOJbdDeBo%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxP9Mwe5e17XJZCIisq3AMZLpiqSVvi5e%2BoyFqTsoqMqxhySXsH%2B2QPF%2FyjsN39IBh0cJ8qoOK0OtXsuJGp90yv73OOA%2F7UufkkWC7M4ATeWicyn7DUnsZutUoPhYv%2BID0qXM8qYvOCN0uBLA9yOSquR5dj0Q%2BwPqpxVQZpw3gZWfqOTeGiv7P9ZX%2FdDyfL3Kn9k13GSEYpFC%2FsSKgE8%2BQZkUuAFdTvOGcgwpTQ6MZEIPC4tyqzSndslnaYm5K6t5fFD0%2FvHxf9QXTSMxqOFCNuEqoU5AFOsxi4YXaddyKJLsO3%2F65Lr5KprhHLw%2BDGK2hafdccTPKbX4PntnO935U6NWtiNkv8r6Kg99w6LjaPrV0x2Gt7Sk2QYX%2FioncYxWmWv3PtoHWGALbSTgGAupNN2PSCyEjfvjlXcSBT%2B3qfYX69oUBfVXm6IvDyYfLUnZXNpHMBhJA%2Fh6PnN%2B1FODmjDhpyAR97WKTgWMtkGltt20iuBiTt4qKAJDTc1%2BBpCkVlddKlQNlKeslT9YdTxuUHYcSQK5KBEb8kgmwZUOtykkkurBPgcGWjVPeMWcXHTnkpjuHbvdbulEx%2BBBqpvbYJJa59VD6Yh30119MA3anghxYzgee6kkuDKmXmsyWFeRBfJYMuqTJTUwn%2FRzChveu%2BBjqkARMQooTo%2BUHTgh8GuyvMBferyat0golTk11lfHPosrvksZgY8vZ5VVyiiNk1%2FEqUGbKm2L12IAQ1MO%2B6lX6ybcV38WAj5FsUDuNtI%2F6I0nVqMwWKaT6WsLVgZy1DvxvXdsF%2BXQ9oPpXzF6WgFY7YKL93gZlwY9O%2B8ZBtoscFJNfyQtnf%2FQxFEzmzf1MMDpjmLrfjmur%2FcDCODGnZrs%2FOwX1aqpIY&X-Amz-Signature=c4ba326350146784c38334d809b6c48a0fd180e5196a577a5d45c32dfb2c85c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6RGVBI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7INVXpKcSdvDNkFiDFPYzuJVP667FgyE09o4m373RJQIhAPBftK9rre05z%2BgVO9H7vDATBifKzTfKTUbOJbdDeBo%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxP9Mwe5e17XJZCIisq3AMZLpiqSVvi5e%2BoyFqTsoqMqxhySXsH%2B2QPF%2FyjsN39IBh0cJ8qoOK0OtXsuJGp90yv73OOA%2F7UufkkWC7M4ATeWicyn7DUnsZutUoPhYv%2BID0qXM8qYvOCN0uBLA9yOSquR5dj0Q%2BwPqpxVQZpw3gZWfqOTeGiv7P9ZX%2FdDyfL3Kn9k13GSEYpFC%2FsSKgE8%2BQZkUuAFdTvOGcgwpTQ6MZEIPC4tyqzSndslnaYm5K6t5fFD0%2FvHxf9QXTSMxqOFCNuEqoU5AFOsxi4YXaddyKJLsO3%2F65Lr5KprhHLw%2BDGK2hafdccTPKbX4PntnO935U6NWtiNkv8r6Kg99w6LjaPrV0x2Gt7Sk2QYX%2FioncYxWmWv3PtoHWGALbSTgGAupNN2PSCyEjfvjlXcSBT%2B3qfYX69oUBfVXm6IvDyYfLUnZXNpHMBhJA%2Fh6PnN%2B1FODmjDhpyAR97WKTgWMtkGltt20iuBiTt4qKAJDTc1%2BBpCkVlddKlQNlKeslT9YdTxuUHYcSQK5KBEb8kgmwZUOtykkkurBPgcGWjVPeMWcXHTnkpjuHbvdbulEx%2BBBqpvbYJJa59VD6Yh30119MA3anghxYzgee6kkuDKmXmsyWFeRBfJYMuqTJTUwn%2FRzChveu%2BBjqkARMQooTo%2BUHTgh8GuyvMBferyat0golTk11lfHPosrvksZgY8vZ5VVyiiNk1%2FEqUGbKm2L12IAQ1MO%2B6lX6ybcV38WAj5FsUDuNtI%2F6I0nVqMwWKaT6WsLVgZy1DvxvXdsF%2BXQ9oPpXzF6WgFY7YKL93gZlwY9O%2B8ZBtoscFJNfyQtnf%2FQxFEzmzf1MMDpjmLrfjmur%2FcDCODGnZrs%2FOwX1aqpIY&X-Amz-Signature=d1f54d75f8dcec31d2c8949635fee79886917bbf16e258031ffee8d619c43248&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6RGVBI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7INVXpKcSdvDNkFiDFPYzuJVP667FgyE09o4m373RJQIhAPBftK9rre05z%2BgVO9H7vDATBifKzTfKTUbOJbdDeBo%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxP9Mwe5e17XJZCIisq3AMZLpiqSVvi5e%2BoyFqTsoqMqxhySXsH%2B2QPF%2FyjsN39IBh0cJ8qoOK0OtXsuJGp90yv73OOA%2F7UufkkWC7M4ATeWicyn7DUnsZutUoPhYv%2BID0qXM8qYvOCN0uBLA9yOSquR5dj0Q%2BwPqpxVQZpw3gZWfqOTeGiv7P9ZX%2FdDyfL3Kn9k13GSEYpFC%2FsSKgE8%2BQZkUuAFdTvOGcgwpTQ6MZEIPC4tyqzSndslnaYm5K6t5fFD0%2FvHxf9QXTSMxqOFCNuEqoU5AFOsxi4YXaddyKJLsO3%2F65Lr5KprhHLw%2BDGK2hafdccTPKbX4PntnO935U6NWtiNkv8r6Kg99w6LjaPrV0x2Gt7Sk2QYX%2FioncYxWmWv3PtoHWGALbSTgGAupNN2PSCyEjfvjlXcSBT%2B3qfYX69oUBfVXm6IvDyYfLUnZXNpHMBhJA%2Fh6PnN%2B1FODmjDhpyAR97WKTgWMtkGltt20iuBiTt4qKAJDTc1%2BBpCkVlddKlQNlKeslT9YdTxuUHYcSQK5KBEb8kgmwZUOtykkkurBPgcGWjVPeMWcXHTnkpjuHbvdbulEx%2BBBqpvbYJJa59VD6Yh30119MA3anghxYzgee6kkuDKmXmsyWFeRBfJYMuqTJTUwn%2FRzChveu%2BBjqkARMQooTo%2BUHTgh8GuyvMBferyat0golTk11lfHPosrvksZgY8vZ5VVyiiNk1%2FEqUGbKm2L12IAQ1MO%2B6lX6ybcV38WAj5FsUDuNtI%2F6I0nVqMwWKaT6WsLVgZy1DvxvXdsF%2BXQ9oPpXzF6WgFY7YKL93gZlwY9O%2B8ZBtoscFJNfyQtnf%2FQxFEzmzf1MMDpjmLrfjmur%2FcDCODGnZrs%2FOwX1aqpIY&X-Amz-Signature=8f040e275a87345e831b85f0d294b044f4ca040494f4b924410fbc6170203c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K6RGVBI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC7INVXpKcSdvDNkFiDFPYzuJVP667FgyE09o4m373RJQIhAPBftK9rre05z%2BgVO9H7vDATBifKzTfKTUbOJbdDeBo%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxP9Mwe5e17XJZCIisq3AMZLpiqSVvi5e%2BoyFqTsoqMqxhySXsH%2B2QPF%2FyjsN39IBh0cJ8qoOK0OtXsuJGp90yv73OOA%2F7UufkkWC7M4ATeWicyn7DUnsZutUoPhYv%2BID0qXM8qYvOCN0uBLA9yOSquR5dj0Q%2BwPqpxVQZpw3gZWfqOTeGiv7P9ZX%2FdDyfL3Kn9k13GSEYpFC%2FsSKgE8%2BQZkUuAFdTvOGcgwpTQ6MZEIPC4tyqzSndslnaYm5K6t5fFD0%2FvHxf9QXTSMxqOFCNuEqoU5AFOsxi4YXaddyKJLsO3%2F65Lr5KprhHLw%2BDGK2hafdccTPKbX4PntnO935U6NWtiNkv8r6Kg99w6LjaPrV0x2Gt7Sk2QYX%2FioncYxWmWv3PtoHWGALbSTgGAupNN2PSCyEjfvjlXcSBT%2B3qfYX69oUBfVXm6IvDyYfLUnZXNpHMBhJA%2Fh6PnN%2B1FODmjDhpyAR97WKTgWMtkGltt20iuBiTt4qKAJDTc1%2BBpCkVlddKlQNlKeslT9YdTxuUHYcSQK5KBEb8kgmwZUOtykkkurBPgcGWjVPeMWcXHTnkpjuHbvdbulEx%2BBBqpvbYJJa59VD6Yh30119MA3anghxYzgee6kkuDKmXmsyWFeRBfJYMuqTJTUwn%2FRzChveu%2BBjqkARMQooTo%2BUHTgh8GuyvMBferyat0golTk11lfHPosrvksZgY8vZ5VVyiiNk1%2FEqUGbKm2L12IAQ1MO%2B6lX6ybcV38WAj5FsUDuNtI%2F6I0nVqMwWKaT6WsLVgZy1DvxvXdsF%2BXQ9oPpXzF6WgFY7YKL93gZlwY9O%2B8ZBtoscFJNfyQtnf%2FQxFEzmzf1MMDpjmLrfjmur%2FcDCODGnZrs%2FOwX1aqpIY&X-Amz-Signature=e637e6fb3e76d48c004cb5d77f0242608d02c7fc4fdf35c3f9cb668389f287da&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
