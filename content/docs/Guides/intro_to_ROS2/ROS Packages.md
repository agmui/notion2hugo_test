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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX3FX5H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDJk4AGgUSvLD%2Bb%2BdAuF42VmY9Gu6zbtIkyGDw2wmCL9gIgKBegm3VpeNnLBNFjHzrQq7jOxoQcRod6oqSvJMVG4hYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgvImLpw0WR1PGVoyrcA51fCtVwiv4wD%2B1CQqMjT4BSgGHGx3HY%2F4ivHKjMG7alM6DwRaJH1rLgc24OJy5lAUiBF%2F2Hqq88qcnYR35dpADJqfqU7BozFVrejnN%2FWS9c33Y83ooXqYblGElzJLFXkjew7HRFAuIfIBM1SdtPnXlwKMmKvwYsH0mnOSgiFWaEdeUh3bbiyO6LjVfkNJStKB5KCiQJtUzsiuwLJFV9GiUTyEhcYLVS5R9lKp%2FwC6uCakQqRGOBQuvZPQQNbLICtzP7GmP9hBAIyXJORJtqfFsd7OHs2r2UdlEHEDZQua7UsbDLELCIzI%2FlkE9ED%2BRTsbBOKA0P5TCkfXihqWEEt55%2FJBGK6nz3X9sFxrYG%2F7zJijFiyOSLj3ZwV9i%2FfU2pst4i6WiY%2BMGr%2FdXfbcOMWJucSbeZMWD1YYC3tgqs9KU6JBbo6c1YtWt0PuV%2BO4kLsIaSw6DVkUBi8DAJK1x4pHTqHUS9uj8MNpYz4j2p5nQDIwaGIyUBFmhjYDL80D0KLkzIRcCuLGkoKxiIC3vZsew%2FRXMDTeM08r15MqqFjwlakmcqHgYd9AMz5sgljp3AEa55XHZ7vH2E1S0e69vvILbHmJ3FqNQGPxLnF708Opi3HOMrUfCQPrDhJeFhMOmcr78GOqUBYXe1kxPqrbX8RixkohW96omo1ElkHCqA0wNSzPyIZoGlmRlNP2pfuQpYkQ9OQLxUWI6ssdCJmHBzZFSu6h4TtrDaZPOJ5W7AoiNNBRVt3SR7JQ94xDctJ5jRpPhQo8kf61MI4wV4xNjm%2BqDfnasLHcGyujtlKrLPTw%2Bkf0vnnTfnXPA8AqgY6OHoyZ6WJhPd70UtJGdZFZdCJjErk0OAgWw0jwaa&X-Amz-Signature=f80fc94c28662f52c40a68d7b6b34e81df0026478d1eb9a5edd8c7a1cb5bfc3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX3FX5H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDJk4AGgUSvLD%2Bb%2BdAuF42VmY9Gu6zbtIkyGDw2wmCL9gIgKBegm3VpeNnLBNFjHzrQq7jOxoQcRod6oqSvJMVG4hYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgvImLpw0WR1PGVoyrcA51fCtVwiv4wD%2B1CQqMjT4BSgGHGx3HY%2F4ivHKjMG7alM6DwRaJH1rLgc24OJy5lAUiBF%2F2Hqq88qcnYR35dpADJqfqU7BozFVrejnN%2FWS9c33Y83ooXqYblGElzJLFXkjew7HRFAuIfIBM1SdtPnXlwKMmKvwYsH0mnOSgiFWaEdeUh3bbiyO6LjVfkNJStKB5KCiQJtUzsiuwLJFV9GiUTyEhcYLVS5R9lKp%2FwC6uCakQqRGOBQuvZPQQNbLICtzP7GmP9hBAIyXJORJtqfFsd7OHs2r2UdlEHEDZQua7UsbDLELCIzI%2FlkE9ED%2BRTsbBOKA0P5TCkfXihqWEEt55%2FJBGK6nz3X9sFxrYG%2F7zJijFiyOSLj3ZwV9i%2FfU2pst4i6WiY%2BMGr%2FdXfbcOMWJucSbeZMWD1YYC3tgqs9KU6JBbo6c1YtWt0PuV%2BO4kLsIaSw6DVkUBi8DAJK1x4pHTqHUS9uj8MNpYz4j2p5nQDIwaGIyUBFmhjYDL80D0KLkzIRcCuLGkoKxiIC3vZsew%2FRXMDTeM08r15MqqFjwlakmcqHgYd9AMz5sgljp3AEa55XHZ7vH2E1S0e69vvILbHmJ3FqNQGPxLnF708Opi3HOMrUfCQPrDhJeFhMOmcr78GOqUBYXe1kxPqrbX8RixkohW96omo1ElkHCqA0wNSzPyIZoGlmRlNP2pfuQpYkQ9OQLxUWI6ssdCJmHBzZFSu6h4TtrDaZPOJ5W7AoiNNBRVt3SR7JQ94xDctJ5jRpPhQo8kf61MI4wV4xNjm%2BqDfnasLHcGyujtlKrLPTw%2Bkf0vnnTfnXPA8AqgY6OHoyZ6WJhPd70UtJGdZFZdCJjErk0OAgWw0jwaa&X-Amz-Signature=ee16febb4a6bd1e5e3f1e59b6d3d746ca773f9fdc23e1306df665512a9ed8c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX3FX5H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDJk4AGgUSvLD%2Bb%2BdAuF42VmY9Gu6zbtIkyGDw2wmCL9gIgKBegm3VpeNnLBNFjHzrQq7jOxoQcRod6oqSvJMVG4hYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgvImLpw0WR1PGVoyrcA51fCtVwiv4wD%2B1CQqMjT4BSgGHGx3HY%2F4ivHKjMG7alM6DwRaJH1rLgc24OJy5lAUiBF%2F2Hqq88qcnYR35dpADJqfqU7BozFVrejnN%2FWS9c33Y83ooXqYblGElzJLFXkjew7HRFAuIfIBM1SdtPnXlwKMmKvwYsH0mnOSgiFWaEdeUh3bbiyO6LjVfkNJStKB5KCiQJtUzsiuwLJFV9GiUTyEhcYLVS5R9lKp%2FwC6uCakQqRGOBQuvZPQQNbLICtzP7GmP9hBAIyXJORJtqfFsd7OHs2r2UdlEHEDZQua7UsbDLELCIzI%2FlkE9ED%2BRTsbBOKA0P5TCkfXihqWEEt55%2FJBGK6nz3X9sFxrYG%2F7zJijFiyOSLj3ZwV9i%2FfU2pst4i6WiY%2BMGr%2FdXfbcOMWJucSbeZMWD1YYC3tgqs9KU6JBbo6c1YtWt0PuV%2BO4kLsIaSw6DVkUBi8DAJK1x4pHTqHUS9uj8MNpYz4j2p5nQDIwaGIyUBFmhjYDL80D0KLkzIRcCuLGkoKxiIC3vZsew%2FRXMDTeM08r15MqqFjwlakmcqHgYd9AMz5sgljp3AEa55XHZ7vH2E1S0e69vvILbHmJ3FqNQGPxLnF708Opi3HOMrUfCQPrDhJeFhMOmcr78GOqUBYXe1kxPqrbX8RixkohW96omo1ElkHCqA0wNSzPyIZoGlmRlNP2pfuQpYkQ9OQLxUWI6ssdCJmHBzZFSu6h4TtrDaZPOJ5W7AoiNNBRVt3SR7JQ94xDctJ5jRpPhQo8kf61MI4wV4xNjm%2BqDfnasLHcGyujtlKrLPTw%2Bkf0vnnTfnXPA8AqgY6OHoyZ6WJhPd70UtJGdZFZdCJjErk0OAgWw0jwaa&X-Amz-Signature=44547828c48cd0ce4aef6a7582c0b3de69cdf9a3f19fc4496d37815c73542f78&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX3FX5H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDJk4AGgUSvLD%2Bb%2BdAuF42VmY9Gu6zbtIkyGDw2wmCL9gIgKBegm3VpeNnLBNFjHzrQq7jOxoQcRod6oqSvJMVG4hYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgvImLpw0WR1PGVoyrcA51fCtVwiv4wD%2B1CQqMjT4BSgGHGx3HY%2F4ivHKjMG7alM6DwRaJH1rLgc24OJy5lAUiBF%2F2Hqq88qcnYR35dpADJqfqU7BozFVrejnN%2FWS9c33Y83ooXqYblGElzJLFXkjew7HRFAuIfIBM1SdtPnXlwKMmKvwYsH0mnOSgiFWaEdeUh3bbiyO6LjVfkNJStKB5KCiQJtUzsiuwLJFV9GiUTyEhcYLVS5R9lKp%2FwC6uCakQqRGOBQuvZPQQNbLICtzP7GmP9hBAIyXJORJtqfFsd7OHs2r2UdlEHEDZQua7UsbDLELCIzI%2FlkE9ED%2BRTsbBOKA0P5TCkfXihqWEEt55%2FJBGK6nz3X9sFxrYG%2F7zJijFiyOSLj3ZwV9i%2FfU2pst4i6WiY%2BMGr%2FdXfbcOMWJucSbeZMWD1YYC3tgqs9KU6JBbo6c1YtWt0PuV%2BO4kLsIaSw6DVkUBi8DAJK1x4pHTqHUS9uj8MNpYz4j2p5nQDIwaGIyUBFmhjYDL80D0KLkzIRcCuLGkoKxiIC3vZsew%2FRXMDTeM08r15MqqFjwlakmcqHgYd9AMz5sgljp3AEa55XHZ7vH2E1S0e69vvILbHmJ3FqNQGPxLnF708Opi3HOMrUfCQPrDhJeFhMOmcr78GOqUBYXe1kxPqrbX8RixkohW96omo1ElkHCqA0wNSzPyIZoGlmRlNP2pfuQpYkQ9OQLxUWI6ssdCJmHBzZFSu6h4TtrDaZPOJ5W7AoiNNBRVt3SR7JQ94xDctJ5jRpPhQo8kf61MI4wV4xNjm%2BqDfnasLHcGyujtlKrLPTw%2Bkf0vnnTfnXPA8AqgY6OHoyZ6WJhPd70UtJGdZFZdCJjErk0OAgWw0jwaa&X-Amz-Signature=0957145ba769dcd3bb0a2abf9c582e544fd494fef284c12bce34aff6a1b5e8fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX3FX5H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDJk4AGgUSvLD%2Bb%2BdAuF42VmY9Gu6zbtIkyGDw2wmCL9gIgKBegm3VpeNnLBNFjHzrQq7jOxoQcRod6oqSvJMVG4hYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgvImLpw0WR1PGVoyrcA51fCtVwiv4wD%2B1CQqMjT4BSgGHGx3HY%2F4ivHKjMG7alM6DwRaJH1rLgc24OJy5lAUiBF%2F2Hqq88qcnYR35dpADJqfqU7BozFVrejnN%2FWS9c33Y83ooXqYblGElzJLFXkjew7HRFAuIfIBM1SdtPnXlwKMmKvwYsH0mnOSgiFWaEdeUh3bbiyO6LjVfkNJStKB5KCiQJtUzsiuwLJFV9GiUTyEhcYLVS5R9lKp%2FwC6uCakQqRGOBQuvZPQQNbLICtzP7GmP9hBAIyXJORJtqfFsd7OHs2r2UdlEHEDZQua7UsbDLELCIzI%2FlkE9ED%2BRTsbBOKA0P5TCkfXihqWEEt55%2FJBGK6nz3X9sFxrYG%2F7zJijFiyOSLj3ZwV9i%2FfU2pst4i6WiY%2BMGr%2FdXfbcOMWJucSbeZMWD1YYC3tgqs9KU6JBbo6c1YtWt0PuV%2BO4kLsIaSw6DVkUBi8DAJK1x4pHTqHUS9uj8MNpYz4j2p5nQDIwaGIyUBFmhjYDL80D0KLkzIRcCuLGkoKxiIC3vZsew%2FRXMDTeM08r15MqqFjwlakmcqHgYd9AMz5sgljp3AEa55XHZ7vH2E1S0e69vvILbHmJ3FqNQGPxLnF708Opi3HOMrUfCQPrDhJeFhMOmcr78GOqUBYXe1kxPqrbX8RixkohW96omo1ElkHCqA0wNSzPyIZoGlmRlNP2pfuQpYkQ9OQLxUWI6ssdCJmHBzZFSu6h4TtrDaZPOJ5W7AoiNNBRVt3SR7JQ94xDctJ5jRpPhQo8kf61MI4wV4xNjm%2BqDfnasLHcGyujtlKrLPTw%2Bkf0vnnTfnXPA8AqgY6OHoyZ6WJhPd70UtJGdZFZdCJjErk0OAgWw0jwaa&X-Amz-Signature=3526b34053129cd3756abe8c9555cea1cd558c05d4b89717ecfa49f6585dc1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX3FX5H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDJk4AGgUSvLD%2Bb%2BdAuF42VmY9Gu6zbtIkyGDw2wmCL9gIgKBegm3VpeNnLBNFjHzrQq7jOxoQcRod6oqSvJMVG4hYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgvImLpw0WR1PGVoyrcA51fCtVwiv4wD%2B1CQqMjT4BSgGHGx3HY%2F4ivHKjMG7alM6DwRaJH1rLgc24OJy5lAUiBF%2F2Hqq88qcnYR35dpADJqfqU7BozFVrejnN%2FWS9c33Y83ooXqYblGElzJLFXkjew7HRFAuIfIBM1SdtPnXlwKMmKvwYsH0mnOSgiFWaEdeUh3bbiyO6LjVfkNJStKB5KCiQJtUzsiuwLJFV9GiUTyEhcYLVS5R9lKp%2FwC6uCakQqRGOBQuvZPQQNbLICtzP7GmP9hBAIyXJORJtqfFsd7OHs2r2UdlEHEDZQua7UsbDLELCIzI%2FlkE9ED%2BRTsbBOKA0P5TCkfXihqWEEt55%2FJBGK6nz3X9sFxrYG%2F7zJijFiyOSLj3ZwV9i%2FfU2pst4i6WiY%2BMGr%2FdXfbcOMWJucSbeZMWD1YYC3tgqs9KU6JBbo6c1YtWt0PuV%2BO4kLsIaSw6DVkUBi8DAJK1x4pHTqHUS9uj8MNpYz4j2p5nQDIwaGIyUBFmhjYDL80D0KLkzIRcCuLGkoKxiIC3vZsew%2FRXMDTeM08r15MqqFjwlakmcqHgYd9AMz5sgljp3AEa55XHZ7vH2E1S0e69vvILbHmJ3FqNQGPxLnF708Opi3HOMrUfCQPrDhJeFhMOmcr78GOqUBYXe1kxPqrbX8RixkohW96omo1ElkHCqA0wNSzPyIZoGlmRlNP2pfuQpYkQ9OQLxUWI6ssdCJmHBzZFSu6h4TtrDaZPOJ5W7AoiNNBRVt3SR7JQ94xDctJ5jRpPhQo8kf61MI4wV4xNjm%2BqDfnasLHcGyujtlKrLPTw%2Bkf0vnnTfnXPA8AqgY6OHoyZ6WJhPd70UtJGdZFZdCJjErk0OAgWw0jwaa&X-Amz-Signature=aa47ca3a4667a0cc758f570783a0b29ab2214527212bdfe7c3e70d0d7c7b514e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HX3FX5H%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDJk4AGgUSvLD%2Bb%2BdAuF42VmY9Gu6zbtIkyGDw2wmCL9gIgKBegm3VpeNnLBNFjHzrQq7jOxoQcRod6oqSvJMVG4hYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgvImLpw0WR1PGVoyrcA51fCtVwiv4wD%2B1CQqMjT4BSgGHGx3HY%2F4ivHKjMG7alM6DwRaJH1rLgc24OJy5lAUiBF%2F2Hqq88qcnYR35dpADJqfqU7BozFVrejnN%2FWS9c33Y83ooXqYblGElzJLFXkjew7HRFAuIfIBM1SdtPnXlwKMmKvwYsH0mnOSgiFWaEdeUh3bbiyO6LjVfkNJStKB5KCiQJtUzsiuwLJFV9GiUTyEhcYLVS5R9lKp%2FwC6uCakQqRGOBQuvZPQQNbLICtzP7GmP9hBAIyXJORJtqfFsd7OHs2r2UdlEHEDZQua7UsbDLELCIzI%2FlkE9ED%2BRTsbBOKA0P5TCkfXihqWEEt55%2FJBGK6nz3X9sFxrYG%2F7zJijFiyOSLj3ZwV9i%2FfU2pst4i6WiY%2BMGr%2FdXfbcOMWJucSbeZMWD1YYC3tgqs9KU6JBbo6c1YtWt0PuV%2BO4kLsIaSw6DVkUBi8DAJK1x4pHTqHUS9uj8MNpYz4j2p5nQDIwaGIyUBFmhjYDL80D0KLkzIRcCuLGkoKxiIC3vZsew%2FRXMDTeM08r15MqqFjwlakmcqHgYd9AMz5sgljp3AEa55XHZ7vH2E1S0e69vvILbHmJ3FqNQGPxLnF708Opi3HOMrUfCQPrDhJeFhMOmcr78GOqUBYXe1kxPqrbX8RixkohW96omo1ElkHCqA0wNSzPyIZoGlmRlNP2pfuQpYkQ9OQLxUWI6ssdCJmHBzZFSu6h4TtrDaZPOJ5W7AoiNNBRVt3SR7JQ94xDctJ5jRpPhQo8kf61MI4wV4xNjm%2BqDfnasLHcGyujtlKrLPTw%2Bkf0vnnTfnXPA8AqgY6OHoyZ6WJhPd70UtJGdZFZdCJjErk0OAgWw0jwaa&X-Amz-Signature=7668b9798035f8b249fac1eb4bc99f73fcb7569bef499c0a199a4d2f8d347b09&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
