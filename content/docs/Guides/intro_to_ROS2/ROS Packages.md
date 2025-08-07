---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TJ743W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCzmgjEQjmKqgcoCIl%2FBQIMxVNBHNsslHiwgOfKECPyLgIgXkquD2BolxuBAm8oTC3FAES4heoXn8ThIuFRONccNkwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXDnFeWRdaveVE3aircA5PRaeH4lJLFCtRGccveVmtTlDqVT1xeCkRCGxS6zSBStW4JfgJRifFQ1g252hsP4PgKJOc8xO%2FFgMkGK%2BhOH8c5hfUC2U9Q8QSMhdtS23rOw0M6hGGf%2B5lEOnoHTN2gjLtidCkLo1nXLir7w1IcD9HEk4FvwNrxHqborZo1NLPI7uuSqvG8cPPIAFuz8gWYU5W5RAcW%2F8VX8PStiAvlfEi9WTz6ocBaoA12U%2B8DOYkA7NA07b4K2lEge9WR%2F5A%2F1cRK7hCo5WiqSnNGYJuZ%2F%2B7aBk6TakiBHBiWr5h9nMTOO2v8Ejh%2FysiNx1C%2FgCDqfJ%2BugCM0INTXvb%2BvIgKUjGNu9cR5ZJrFBJYfjAWP%2FTUD5D3qyhOg8YmmBGj2wQ5JEWfl%2BL8SRYj01vHyoox7GPGAFswlcyb1XQDKXuubZ4ZebAYcMZAeizwT4UsIFdi5T7jZ9umDCaOfQN0TF8W1Me40FFHNj7ZjFlEBSJxx7RZVYH%2FjwqKIi1bdde8QbU4YCgHwJRX3uLuX96qgmVVx8oMn7sF5yv7T4wtc%2FoO9KE6r0t%2BgGVHE7odR7HqGgrYSEOkqa%2BwpTfFcKPQZOYd81h3AjbaDd2%2FHglwh7hqSRJztsT%2Bk67MB%2FntR4VfzMJ%2F50sQGOqUB%2FR8ftKHjpjvHzCbcXDX0dx7F8pR%2FFzfVng%2BkHAG9Ez6yp5su8cSHnLliWgOeKwvyaRzWuVjpQuLC5aG38z1PRzkzCy1ANNL1PXaP19JKcfRARygb29bj4a2GHwPDzOFzINUdAkDI8N9BWcjiqfpzMfHhmRFRaL0e6mQOIcaa%2FszTI8H%2FTRAsiXkr15p6Ak10qJk2PARuSpX4aLc6NWeH4UekWkcr&X-Amz-Signature=56463ee00e4f5e435503c23ec687703bd89c5a0c21c6572cc7f877355be84082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TJ743W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCzmgjEQjmKqgcoCIl%2FBQIMxVNBHNsslHiwgOfKECPyLgIgXkquD2BolxuBAm8oTC3FAES4heoXn8ThIuFRONccNkwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXDnFeWRdaveVE3aircA5PRaeH4lJLFCtRGccveVmtTlDqVT1xeCkRCGxS6zSBStW4JfgJRifFQ1g252hsP4PgKJOc8xO%2FFgMkGK%2BhOH8c5hfUC2U9Q8QSMhdtS23rOw0M6hGGf%2B5lEOnoHTN2gjLtidCkLo1nXLir7w1IcD9HEk4FvwNrxHqborZo1NLPI7uuSqvG8cPPIAFuz8gWYU5W5RAcW%2F8VX8PStiAvlfEi9WTz6ocBaoA12U%2B8DOYkA7NA07b4K2lEge9WR%2F5A%2F1cRK7hCo5WiqSnNGYJuZ%2F%2B7aBk6TakiBHBiWr5h9nMTOO2v8Ejh%2FysiNx1C%2FgCDqfJ%2BugCM0INTXvb%2BvIgKUjGNu9cR5ZJrFBJYfjAWP%2FTUD5D3qyhOg8YmmBGj2wQ5JEWfl%2BL8SRYj01vHyoox7GPGAFswlcyb1XQDKXuubZ4ZebAYcMZAeizwT4UsIFdi5T7jZ9umDCaOfQN0TF8W1Me40FFHNj7ZjFlEBSJxx7RZVYH%2FjwqKIi1bdde8QbU4YCgHwJRX3uLuX96qgmVVx8oMn7sF5yv7T4wtc%2FoO9KE6r0t%2BgGVHE7odR7HqGgrYSEOkqa%2BwpTfFcKPQZOYd81h3AjbaDd2%2FHglwh7hqSRJztsT%2Bk67MB%2FntR4VfzMJ%2F50sQGOqUB%2FR8ftKHjpjvHzCbcXDX0dx7F8pR%2FFzfVng%2BkHAG9Ez6yp5su8cSHnLliWgOeKwvyaRzWuVjpQuLC5aG38z1PRzkzCy1ANNL1PXaP19JKcfRARygb29bj4a2GHwPDzOFzINUdAkDI8N9BWcjiqfpzMfHhmRFRaL0e6mQOIcaa%2FszTI8H%2FTRAsiXkr15p6Ak10qJk2PARuSpX4aLc6NWeH4UekWkcr&X-Amz-Signature=9551e3a7da9b066b2d0abb35657b9935a4267031f613247431ff50ebfa1176fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TJ743W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCzmgjEQjmKqgcoCIl%2FBQIMxVNBHNsslHiwgOfKECPyLgIgXkquD2BolxuBAm8oTC3FAES4heoXn8ThIuFRONccNkwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXDnFeWRdaveVE3aircA5PRaeH4lJLFCtRGccveVmtTlDqVT1xeCkRCGxS6zSBStW4JfgJRifFQ1g252hsP4PgKJOc8xO%2FFgMkGK%2BhOH8c5hfUC2U9Q8QSMhdtS23rOw0M6hGGf%2B5lEOnoHTN2gjLtidCkLo1nXLir7w1IcD9HEk4FvwNrxHqborZo1NLPI7uuSqvG8cPPIAFuz8gWYU5W5RAcW%2F8VX8PStiAvlfEi9WTz6ocBaoA12U%2B8DOYkA7NA07b4K2lEge9WR%2F5A%2F1cRK7hCo5WiqSnNGYJuZ%2F%2B7aBk6TakiBHBiWr5h9nMTOO2v8Ejh%2FysiNx1C%2FgCDqfJ%2BugCM0INTXvb%2BvIgKUjGNu9cR5ZJrFBJYfjAWP%2FTUD5D3qyhOg8YmmBGj2wQ5JEWfl%2BL8SRYj01vHyoox7GPGAFswlcyb1XQDKXuubZ4ZebAYcMZAeizwT4UsIFdi5T7jZ9umDCaOfQN0TF8W1Me40FFHNj7ZjFlEBSJxx7RZVYH%2FjwqKIi1bdde8QbU4YCgHwJRX3uLuX96qgmVVx8oMn7sF5yv7T4wtc%2FoO9KE6r0t%2BgGVHE7odR7HqGgrYSEOkqa%2BwpTfFcKPQZOYd81h3AjbaDd2%2FHglwh7hqSRJztsT%2Bk67MB%2FntR4VfzMJ%2F50sQGOqUB%2FR8ftKHjpjvHzCbcXDX0dx7F8pR%2FFzfVng%2BkHAG9Ez6yp5su8cSHnLliWgOeKwvyaRzWuVjpQuLC5aG38z1PRzkzCy1ANNL1PXaP19JKcfRARygb29bj4a2GHwPDzOFzINUdAkDI8N9BWcjiqfpzMfHhmRFRaL0e6mQOIcaa%2FszTI8H%2FTRAsiXkr15p6Ak10qJk2PARuSpX4aLc6NWeH4UekWkcr&X-Amz-Signature=3a9173bd2d524c4cdd5d9474f1a3864990fe2eeb8903a5d8430e9df42e9f0545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TJ743W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCzmgjEQjmKqgcoCIl%2FBQIMxVNBHNsslHiwgOfKECPyLgIgXkquD2BolxuBAm8oTC3FAES4heoXn8ThIuFRONccNkwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXDnFeWRdaveVE3aircA5PRaeH4lJLFCtRGccveVmtTlDqVT1xeCkRCGxS6zSBStW4JfgJRifFQ1g252hsP4PgKJOc8xO%2FFgMkGK%2BhOH8c5hfUC2U9Q8QSMhdtS23rOw0M6hGGf%2B5lEOnoHTN2gjLtidCkLo1nXLir7w1IcD9HEk4FvwNrxHqborZo1NLPI7uuSqvG8cPPIAFuz8gWYU5W5RAcW%2F8VX8PStiAvlfEi9WTz6ocBaoA12U%2B8DOYkA7NA07b4K2lEge9WR%2F5A%2F1cRK7hCo5WiqSnNGYJuZ%2F%2B7aBk6TakiBHBiWr5h9nMTOO2v8Ejh%2FysiNx1C%2FgCDqfJ%2BugCM0INTXvb%2BvIgKUjGNu9cR5ZJrFBJYfjAWP%2FTUD5D3qyhOg8YmmBGj2wQ5JEWfl%2BL8SRYj01vHyoox7GPGAFswlcyb1XQDKXuubZ4ZebAYcMZAeizwT4UsIFdi5T7jZ9umDCaOfQN0TF8W1Me40FFHNj7ZjFlEBSJxx7RZVYH%2FjwqKIi1bdde8QbU4YCgHwJRX3uLuX96qgmVVx8oMn7sF5yv7T4wtc%2FoO9KE6r0t%2BgGVHE7odR7HqGgrYSEOkqa%2BwpTfFcKPQZOYd81h3AjbaDd2%2FHglwh7hqSRJztsT%2Bk67MB%2FntR4VfzMJ%2F50sQGOqUB%2FR8ftKHjpjvHzCbcXDX0dx7F8pR%2FFzfVng%2BkHAG9Ez6yp5su8cSHnLliWgOeKwvyaRzWuVjpQuLC5aG38z1PRzkzCy1ANNL1PXaP19JKcfRARygb29bj4a2GHwPDzOFzINUdAkDI8N9BWcjiqfpzMfHhmRFRaL0e6mQOIcaa%2FszTI8H%2FTRAsiXkr15p6Ak10qJk2PARuSpX4aLc6NWeH4UekWkcr&X-Amz-Signature=991fc3c0ce5d0e53509cbb54240f21d72074c13b1c7736af115a5ccea02e921b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TJ743W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCzmgjEQjmKqgcoCIl%2FBQIMxVNBHNsslHiwgOfKECPyLgIgXkquD2BolxuBAm8oTC3FAES4heoXn8ThIuFRONccNkwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXDnFeWRdaveVE3aircA5PRaeH4lJLFCtRGccveVmtTlDqVT1xeCkRCGxS6zSBStW4JfgJRifFQ1g252hsP4PgKJOc8xO%2FFgMkGK%2BhOH8c5hfUC2U9Q8QSMhdtS23rOw0M6hGGf%2B5lEOnoHTN2gjLtidCkLo1nXLir7w1IcD9HEk4FvwNrxHqborZo1NLPI7uuSqvG8cPPIAFuz8gWYU5W5RAcW%2F8VX8PStiAvlfEi9WTz6ocBaoA12U%2B8DOYkA7NA07b4K2lEge9WR%2F5A%2F1cRK7hCo5WiqSnNGYJuZ%2F%2B7aBk6TakiBHBiWr5h9nMTOO2v8Ejh%2FysiNx1C%2FgCDqfJ%2BugCM0INTXvb%2BvIgKUjGNu9cR5ZJrFBJYfjAWP%2FTUD5D3qyhOg8YmmBGj2wQ5JEWfl%2BL8SRYj01vHyoox7GPGAFswlcyb1XQDKXuubZ4ZebAYcMZAeizwT4UsIFdi5T7jZ9umDCaOfQN0TF8W1Me40FFHNj7ZjFlEBSJxx7RZVYH%2FjwqKIi1bdde8QbU4YCgHwJRX3uLuX96qgmVVx8oMn7sF5yv7T4wtc%2FoO9KE6r0t%2BgGVHE7odR7HqGgrYSEOkqa%2BwpTfFcKPQZOYd81h3AjbaDd2%2FHglwh7hqSRJztsT%2Bk67MB%2FntR4VfzMJ%2F50sQGOqUB%2FR8ftKHjpjvHzCbcXDX0dx7F8pR%2FFzfVng%2BkHAG9Ez6yp5su8cSHnLliWgOeKwvyaRzWuVjpQuLC5aG38z1PRzkzCy1ANNL1PXaP19JKcfRARygb29bj4a2GHwPDzOFzINUdAkDI8N9BWcjiqfpzMfHhmRFRaL0e6mQOIcaa%2FszTI8H%2FTRAsiXkr15p6Ak10qJk2PARuSpX4aLc6NWeH4UekWkcr&X-Amz-Signature=ad3928352f1c1e1f53793caa5fa2ff207eebe568ba022ad69b9a075dd7646719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TJ743W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCzmgjEQjmKqgcoCIl%2FBQIMxVNBHNsslHiwgOfKECPyLgIgXkquD2BolxuBAm8oTC3FAES4heoXn8ThIuFRONccNkwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXDnFeWRdaveVE3aircA5PRaeH4lJLFCtRGccveVmtTlDqVT1xeCkRCGxS6zSBStW4JfgJRifFQ1g252hsP4PgKJOc8xO%2FFgMkGK%2BhOH8c5hfUC2U9Q8QSMhdtS23rOw0M6hGGf%2B5lEOnoHTN2gjLtidCkLo1nXLir7w1IcD9HEk4FvwNrxHqborZo1NLPI7uuSqvG8cPPIAFuz8gWYU5W5RAcW%2F8VX8PStiAvlfEi9WTz6ocBaoA12U%2B8DOYkA7NA07b4K2lEge9WR%2F5A%2F1cRK7hCo5WiqSnNGYJuZ%2F%2B7aBk6TakiBHBiWr5h9nMTOO2v8Ejh%2FysiNx1C%2FgCDqfJ%2BugCM0INTXvb%2BvIgKUjGNu9cR5ZJrFBJYfjAWP%2FTUD5D3qyhOg8YmmBGj2wQ5JEWfl%2BL8SRYj01vHyoox7GPGAFswlcyb1XQDKXuubZ4ZebAYcMZAeizwT4UsIFdi5T7jZ9umDCaOfQN0TF8W1Me40FFHNj7ZjFlEBSJxx7RZVYH%2FjwqKIi1bdde8QbU4YCgHwJRX3uLuX96qgmVVx8oMn7sF5yv7T4wtc%2FoO9KE6r0t%2BgGVHE7odR7HqGgrYSEOkqa%2BwpTfFcKPQZOYd81h3AjbaDd2%2FHglwh7hqSRJztsT%2Bk67MB%2FntR4VfzMJ%2F50sQGOqUB%2FR8ftKHjpjvHzCbcXDX0dx7F8pR%2FFzfVng%2BkHAG9Ez6yp5su8cSHnLliWgOeKwvyaRzWuVjpQuLC5aG38z1PRzkzCy1ANNL1PXaP19JKcfRARygb29bj4a2GHwPDzOFzINUdAkDI8N9BWcjiqfpzMfHhmRFRaL0e6mQOIcaa%2FszTI8H%2FTRAsiXkr15p6Ak10qJk2PARuSpX4aLc6NWeH4UekWkcr&X-Amz-Signature=3d4e64a3cfc502cfbd36505a947fb775759b045063ef6e60bf5af654abd31b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TJ743W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCzmgjEQjmKqgcoCIl%2FBQIMxVNBHNsslHiwgOfKECPyLgIgXkquD2BolxuBAm8oTC3FAES4heoXn8ThIuFRONccNkwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXDnFeWRdaveVE3aircA5PRaeH4lJLFCtRGccveVmtTlDqVT1xeCkRCGxS6zSBStW4JfgJRifFQ1g252hsP4PgKJOc8xO%2FFgMkGK%2BhOH8c5hfUC2U9Q8QSMhdtS23rOw0M6hGGf%2B5lEOnoHTN2gjLtidCkLo1nXLir7w1IcD9HEk4FvwNrxHqborZo1NLPI7uuSqvG8cPPIAFuz8gWYU5W5RAcW%2F8VX8PStiAvlfEi9WTz6ocBaoA12U%2B8DOYkA7NA07b4K2lEge9WR%2F5A%2F1cRK7hCo5WiqSnNGYJuZ%2F%2B7aBk6TakiBHBiWr5h9nMTOO2v8Ejh%2FysiNx1C%2FgCDqfJ%2BugCM0INTXvb%2BvIgKUjGNu9cR5ZJrFBJYfjAWP%2FTUD5D3qyhOg8YmmBGj2wQ5JEWfl%2BL8SRYj01vHyoox7GPGAFswlcyb1XQDKXuubZ4ZebAYcMZAeizwT4UsIFdi5T7jZ9umDCaOfQN0TF8W1Me40FFHNj7ZjFlEBSJxx7RZVYH%2FjwqKIi1bdde8QbU4YCgHwJRX3uLuX96qgmVVx8oMn7sF5yv7T4wtc%2FoO9KE6r0t%2BgGVHE7odR7HqGgrYSEOkqa%2BwpTfFcKPQZOYd81h3AjbaDd2%2FHglwh7hqSRJztsT%2Bk67MB%2FntR4VfzMJ%2F50sQGOqUB%2FR8ftKHjpjvHzCbcXDX0dx7F8pR%2FFzfVng%2BkHAG9Ez6yp5su8cSHnLliWgOeKwvyaRzWuVjpQuLC5aG38z1PRzkzCy1ANNL1PXaP19JKcfRARygb29bj4a2GHwPDzOFzINUdAkDI8N9BWcjiqfpzMfHhmRFRaL0e6mQOIcaa%2FszTI8H%2FTRAsiXkr15p6Ak10qJk2PARuSpX4aLc6NWeH4UekWkcr&X-Amz-Signature=985418467a4da5c4eec3e71ee6752f3556a1174c43c33b811fafeed129c7200e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
