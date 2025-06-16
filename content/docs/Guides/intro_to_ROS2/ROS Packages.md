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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64FFL5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICfQALlvGgSH5bS9SVY8IXz5fOSddbXRVdDl5OlWKsXNAiEA38HWyQ%2BzEgCkOQ4OqRYrE0sGYyZ7ROg8ZNoj7E%2F2Oo0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCJVsCdfjRr73Ok%2FrCrcAzl8yukW9h8gtAb5ht%2Bo8lU1e2vLLPgZeCTSFu6aZp5SJrXKw5cJTtSZHH7Eif8iJ1iSGshAZNZEZhtM3o8UJV2CG7RRd5wd0IQxAlAldHCpg2uqBHeFDMVy9%2FJAB6I9BXvogQPaTBdwtUO7D5CmFO4sqcGoW11gO1TrgaM9X3RIU42mG%2B4nCe%2B1AbCECJFpjSUTd3rrsnxxvynJFYOR%2B9%2Bpu1xaEmj16TEmMjxdB33pN7LiV435Q7tdNX0OF7wIQoAKBPB5XksPnlI8ZHmtuEszS2buNU6Oj18FwuJw8fH7vMFsGKZBZkOjNNzubsf4mrz7%2FxQdUq332hsRGf4Srq5E37rG5WXBx9Uc5gJLAGbmphUKzVxWCxuhHSR1KDByaD1mpYYS7eivEXp3nVQzxoFKp%2BP15wBSRriPdNsWzRvln0XEYgWbEgR3FKMFZBQ3VUv2bRrMOztKpcPv6WXASYB%2B4K4AwEyOr5ktfo3sS4kxI0ShodMcffIQ%2FyBZhDp4AH2YL3DK0EqJs3Y55Otbra0DqEcCUDd6pmqQqjKDUTd%2FFwfxaZIeVRKmzsXPYqlhgE%2BESPDWvziQOX11e9%2BPFUBXO0C8dlbnAQPs7ppHZ0NPA0apXLPCmdvp1p3nMJivvcIGOqUBjOxfS7a7GR%2B0rqiUA44dlTLXbTk9u%2FDnrnrBUqpmGivYzXnBAxfD29Pj2OYN8r4lbq0J2RwWwKDVi7mTtVcghsZxhuF%2FX4ABJssHJX5Y6TPwj6qCAFvpYkV8MiO%2BUs%2Fdp0qBuyXglbmPjf9RyYsEQLmHhQuI7GdMtJxGmKTH75r9l%2FmYfQSUjWhAUZmD6n%2FdMvkZ6s5g1MgTHGvUlUoznzqftGPB&X-Amz-Signature=bd8e9f8ea60a24eb500c8e70f48e667f9c75922b5796bdc3ec954fb7753c337f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64FFL5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICfQALlvGgSH5bS9SVY8IXz5fOSddbXRVdDl5OlWKsXNAiEA38HWyQ%2BzEgCkOQ4OqRYrE0sGYyZ7ROg8ZNoj7E%2F2Oo0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCJVsCdfjRr73Ok%2FrCrcAzl8yukW9h8gtAb5ht%2Bo8lU1e2vLLPgZeCTSFu6aZp5SJrXKw5cJTtSZHH7Eif8iJ1iSGshAZNZEZhtM3o8UJV2CG7RRd5wd0IQxAlAldHCpg2uqBHeFDMVy9%2FJAB6I9BXvogQPaTBdwtUO7D5CmFO4sqcGoW11gO1TrgaM9X3RIU42mG%2B4nCe%2B1AbCECJFpjSUTd3rrsnxxvynJFYOR%2B9%2Bpu1xaEmj16TEmMjxdB33pN7LiV435Q7tdNX0OF7wIQoAKBPB5XksPnlI8ZHmtuEszS2buNU6Oj18FwuJw8fH7vMFsGKZBZkOjNNzubsf4mrz7%2FxQdUq332hsRGf4Srq5E37rG5WXBx9Uc5gJLAGbmphUKzVxWCxuhHSR1KDByaD1mpYYS7eivEXp3nVQzxoFKp%2BP15wBSRriPdNsWzRvln0XEYgWbEgR3FKMFZBQ3VUv2bRrMOztKpcPv6WXASYB%2B4K4AwEyOr5ktfo3sS4kxI0ShodMcffIQ%2FyBZhDp4AH2YL3DK0EqJs3Y55Otbra0DqEcCUDd6pmqQqjKDUTd%2FFwfxaZIeVRKmzsXPYqlhgE%2BESPDWvziQOX11e9%2BPFUBXO0C8dlbnAQPs7ppHZ0NPA0apXLPCmdvp1p3nMJivvcIGOqUBjOxfS7a7GR%2B0rqiUA44dlTLXbTk9u%2FDnrnrBUqpmGivYzXnBAxfD29Pj2OYN8r4lbq0J2RwWwKDVi7mTtVcghsZxhuF%2FX4ABJssHJX5Y6TPwj6qCAFvpYkV8MiO%2BUs%2Fdp0qBuyXglbmPjf9RyYsEQLmHhQuI7GdMtJxGmKTH75r9l%2FmYfQSUjWhAUZmD6n%2FdMvkZ6s5g1MgTHGvUlUoznzqftGPB&X-Amz-Signature=79618c76ba17082ff3b5cfb09526b9af50f31e1177c58c5594e051527f0677c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64FFL5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICfQALlvGgSH5bS9SVY8IXz5fOSddbXRVdDl5OlWKsXNAiEA38HWyQ%2BzEgCkOQ4OqRYrE0sGYyZ7ROg8ZNoj7E%2F2Oo0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCJVsCdfjRr73Ok%2FrCrcAzl8yukW9h8gtAb5ht%2Bo8lU1e2vLLPgZeCTSFu6aZp5SJrXKw5cJTtSZHH7Eif8iJ1iSGshAZNZEZhtM3o8UJV2CG7RRd5wd0IQxAlAldHCpg2uqBHeFDMVy9%2FJAB6I9BXvogQPaTBdwtUO7D5CmFO4sqcGoW11gO1TrgaM9X3RIU42mG%2B4nCe%2B1AbCECJFpjSUTd3rrsnxxvynJFYOR%2B9%2Bpu1xaEmj16TEmMjxdB33pN7LiV435Q7tdNX0OF7wIQoAKBPB5XksPnlI8ZHmtuEszS2buNU6Oj18FwuJw8fH7vMFsGKZBZkOjNNzubsf4mrz7%2FxQdUq332hsRGf4Srq5E37rG5WXBx9Uc5gJLAGbmphUKzVxWCxuhHSR1KDByaD1mpYYS7eivEXp3nVQzxoFKp%2BP15wBSRriPdNsWzRvln0XEYgWbEgR3FKMFZBQ3VUv2bRrMOztKpcPv6WXASYB%2B4K4AwEyOr5ktfo3sS4kxI0ShodMcffIQ%2FyBZhDp4AH2YL3DK0EqJs3Y55Otbra0DqEcCUDd6pmqQqjKDUTd%2FFwfxaZIeVRKmzsXPYqlhgE%2BESPDWvziQOX11e9%2BPFUBXO0C8dlbnAQPs7ppHZ0NPA0apXLPCmdvp1p3nMJivvcIGOqUBjOxfS7a7GR%2B0rqiUA44dlTLXbTk9u%2FDnrnrBUqpmGivYzXnBAxfD29Pj2OYN8r4lbq0J2RwWwKDVi7mTtVcghsZxhuF%2FX4ABJssHJX5Y6TPwj6qCAFvpYkV8MiO%2BUs%2Fdp0qBuyXglbmPjf9RyYsEQLmHhQuI7GdMtJxGmKTH75r9l%2FmYfQSUjWhAUZmD6n%2FdMvkZ6s5g1MgTHGvUlUoznzqftGPB&X-Amz-Signature=5ccdade0e1e31c584cffd1e899aa0ea29bf51535d46113378dec89edb778730e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64FFL5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICfQALlvGgSH5bS9SVY8IXz5fOSddbXRVdDl5OlWKsXNAiEA38HWyQ%2BzEgCkOQ4OqRYrE0sGYyZ7ROg8ZNoj7E%2F2Oo0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCJVsCdfjRr73Ok%2FrCrcAzl8yukW9h8gtAb5ht%2Bo8lU1e2vLLPgZeCTSFu6aZp5SJrXKw5cJTtSZHH7Eif8iJ1iSGshAZNZEZhtM3o8UJV2CG7RRd5wd0IQxAlAldHCpg2uqBHeFDMVy9%2FJAB6I9BXvogQPaTBdwtUO7D5CmFO4sqcGoW11gO1TrgaM9X3RIU42mG%2B4nCe%2B1AbCECJFpjSUTd3rrsnxxvynJFYOR%2B9%2Bpu1xaEmj16TEmMjxdB33pN7LiV435Q7tdNX0OF7wIQoAKBPB5XksPnlI8ZHmtuEszS2buNU6Oj18FwuJw8fH7vMFsGKZBZkOjNNzubsf4mrz7%2FxQdUq332hsRGf4Srq5E37rG5WXBx9Uc5gJLAGbmphUKzVxWCxuhHSR1KDByaD1mpYYS7eivEXp3nVQzxoFKp%2BP15wBSRriPdNsWzRvln0XEYgWbEgR3FKMFZBQ3VUv2bRrMOztKpcPv6WXASYB%2B4K4AwEyOr5ktfo3sS4kxI0ShodMcffIQ%2FyBZhDp4AH2YL3DK0EqJs3Y55Otbra0DqEcCUDd6pmqQqjKDUTd%2FFwfxaZIeVRKmzsXPYqlhgE%2BESPDWvziQOX11e9%2BPFUBXO0C8dlbnAQPs7ppHZ0NPA0apXLPCmdvp1p3nMJivvcIGOqUBjOxfS7a7GR%2B0rqiUA44dlTLXbTk9u%2FDnrnrBUqpmGivYzXnBAxfD29Pj2OYN8r4lbq0J2RwWwKDVi7mTtVcghsZxhuF%2FX4ABJssHJX5Y6TPwj6qCAFvpYkV8MiO%2BUs%2Fdp0qBuyXglbmPjf9RyYsEQLmHhQuI7GdMtJxGmKTH75r9l%2FmYfQSUjWhAUZmD6n%2FdMvkZ6s5g1MgTHGvUlUoznzqftGPB&X-Amz-Signature=e080c2b98f4124888caa0e2e7dadad0dd07d1b25b6cb60d19c17a5db8935be5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64FFL5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICfQALlvGgSH5bS9SVY8IXz5fOSddbXRVdDl5OlWKsXNAiEA38HWyQ%2BzEgCkOQ4OqRYrE0sGYyZ7ROg8ZNoj7E%2F2Oo0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCJVsCdfjRr73Ok%2FrCrcAzl8yukW9h8gtAb5ht%2Bo8lU1e2vLLPgZeCTSFu6aZp5SJrXKw5cJTtSZHH7Eif8iJ1iSGshAZNZEZhtM3o8UJV2CG7RRd5wd0IQxAlAldHCpg2uqBHeFDMVy9%2FJAB6I9BXvogQPaTBdwtUO7D5CmFO4sqcGoW11gO1TrgaM9X3RIU42mG%2B4nCe%2B1AbCECJFpjSUTd3rrsnxxvynJFYOR%2B9%2Bpu1xaEmj16TEmMjxdB33pN7LiV435Q7tdNX0OF7wIQoAKBPB5XksPnlI8ZHmtuEszS2buNU6Oj18FwuJw8fH7vMFsGKZBZkOjNNzubsf4mrz7%2FxQdUq332hsRGf4Srq5E37rG5WXBx9Uc5gJLAGbmphUKzVxWCxuhHSR1KDByaD1mpYYS7eivEXp3nVQzxoFKp%2BP15wBSRriPdNsWzRvln0XEYgWbEgR3FKMFZBQ3VUv2bRrMOztKpcPv6WXASYB%2B4K4AwEyOr5ktfo3sS4kxI0ShodMcffIQ%2FyBZhDp4AH2YL3DK0EqJs3Y55Otbra0DqEcCUDd6pmqQqjKDUTd%2FFwfxaZIeVRKmzsXPYqlhgE%2BESPDWvziQOX11e9%2BPFUBXO0C8dlbnAQPs7ppHZ0NPA0apXLPCmdvp1p3nMJivvcIGOqUBjOxfS7a7GR%2B0rqiUA44dlTLXbTk9u%2FDnrnrBUqpmGivYzXnBAxfD29Pj2OYN8r4lbq0J2RwWwKDVi7mTtVcghsZxhuF%2FX4ABJssHJX5Y6TPwj6qCAFvpYkV8MiO%2BUs%2Fdp0qBuyXglbmPjf9RyYsEQLmHhQuI7GdMtJxGmKTH75r9l%2FmYfQSUjWhAUZmD6n%2FdMvkZ6s5g1MgTHGvUlUoznzqftGPB&X-Amz-Signature=c300723af84efc6d5f93d10f019e614cb6b156d21b76157de13703a1dd79f5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64FFL5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICfQALlvGgSH5bS9SVY8IXz5fOSddbXRVdDl5OlWKsXNAiEA38HWyQ%2BzEgCkOQ4OqRYrE0sGYyZ7ROg8ZNoj7E%2F2Oo0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCJVsCdfjRr73Ok%2FrCrcAzl8yukW9h8gtAb5ht%2Bo8lU1e2vLLPgZeCTSFu6aZp5SJrXKw5cJTtSZHH7Eif8iJ1iSGshAZNZEZhtM3o8UJV2CG7RRd5wd0IQxAlAldHCpg2uqBHeFDMVy9%2FJAB6I9BXvogQPaTBdwtUO7D5CmFO4sqcGoW11gO1TrgaM9X3RIU42mG%2B4nCe%2B1AbCECJFpjSUTd3rrsnxxvynJFYOR%2B9%2Bpu1xaEmj16TEmMjxdB33pN7LiV435Q7tdNX0OF7wIQoAKBPB5XksPnlI8ZHmtuEszS2buNU6Oj18FwuJw8fH7vMFsGKZBZkOjNNzubsf4mrz7%2FxQdUq332hsRGf4Srq5E37rG5WXBx9Uc5gJLAGbmphUKzVxWCxuhHSR1KDByaD1mpYYS7eivEXp3nVQzxoFKp%2BP15wBSRriPdNsWzRvln0XEYgWbEgR3FKMFZBQ3VUv2bRrMOztKpcPv6WXASYB%2B4K4AwEyOr5ktfo3sS4kxI0ShodMcffIQ%2FyBZhDp4AH2YL3DK0EqJs3Y55Otbra0DqEcCUDd6pmqQqjKDUTd%2FFwfxaZIeVRKmzsXPYqlhgE%2BESPDWvziQOX11e9%2BPFUBXO0C8dlbnAQPs7ppHZ0NPA0apXLPCmdvp1p3nMJivvcIGOqUBjOxfS7a7GR%2B0rqiUA44dlTLXbTk9u%2FDnrnrBUqpmGivYzXnBAxfD29Pj2OYN8r4lbq0J2RwWwKDVi7mTtVcghsZxhuF%2FX4ABJssHJX5Y6TPwj6qCAFvpYkV8MiO%2BUs%2Fdp0qBuyXglbmPjf9RyYsEQLmHhQuI7GdMtJxGmKTH75r9l%2FmYfQSUjWhAUZmD6n%2FdMvkZ6s5g1MgTHGvUlUoznzqftGPB&X-Amz-Signature=854dac884ef9e0cbfa59b20fc728a7d3015376a34cd79449b92176e9e460a3fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX64FFL5%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICfQALlvGgSH5bS9SVY8IXz5fOSddbXRVdDl5OlWKsXNAiEA38HWyQ%2BzEgCkOQ4OqRYrE0sGYyZ7ROg8ZNoj7E%2F2Oo0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCJVsCdfjRr73Ok%2FrCrcAzl8yukW9h8gtAb5ht%2Bo8lU1e2vLLPgZeCTSFu6aZp5SJrXKw5cJTtSZHH7Eif8iJ1iSGshAZNZEZhtM3o8UJV2CG7RRd5wd0IQxAlAldHCpg2uqBHeFDMVy9%2FJAB6I9BXvogQPaTBdwtUO7D5CmFO4sqcGoW11gO1TrgaM9X3RIU42mG%2B4nCe%2B1AbCECJFpjSUTd3rrsnxxvynJFYOR%2B9%2Bpu1xaEmj16TEmMjxdB33pN7LiV435Q7tdNX0OF7wIQoAKBPB5XksPnlI8ZHmtuEszS2buNU6Oj18FwuJw8fH7vMFsGKZBZkOjNNzubsf4mrz7%2FxQdUq332hsRGf4Srq5E37rG5WXBx9Uc5gJLAGbmphUKzVxWCxuhHSR1KDByaD1mpYYS7eivEXp3nVQzxoFKp%2BP15wBSRriPdNsWzRvln0XEYgWbEgR3FKMFZBQ3VUv2bRrMOztKpcPv6WXASYB%2B4K4AwEyOr5ktfo3sS4kxI0ShodMcffIQ%2FyBZhDp4AH2YL3DK0EqJs3Y55Otbra0DqEcCUDd6pmqQqjKDUTd%2FFwfxaZIeVRKmzsXPYqlhgE%2BESPDWvziQOX11e9%2BPFUBXO0C8dlbnAQPs7ppHZ0NPA0apXLPCmdvp1p3nMJivvcIGOqUBjOxfS7a7GR%2B0rqiUA44dlTLXbTk9u%2FDnrnrBUqpmGivYzXnBAxfD29Pj2OYN8r4lbq0J2RwWwKDVi7mTtVcghsZxhuF%2FX4ABJssHJX5Y6TPwj6qCAFvpYkV8MiO%2BUs%2Fdp0qBuyXglbmPjf9RyYsEQLmHhQuI7GdMtJxGmKTH75r9l%2FmYfQSUjWhAUZmD6n%2FdMvkZ6s5g1MgTHGvUlUoznzqftGPB&X-Amz-Signature=802770f3acaf58f1dc4dab4be5b7621bc702534b269524dd2fa98fa9e904d934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
