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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOKGM2Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXL7a%2Fm9qp%2FY1%2Fq6IIu31Cgkl1U1iV%2FceeXp1IL%2B%2BfBAiBdACGd4tVpXTSs2HJ0A6ebuGNnmPaLqSUHvjOmyjfR0yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbR7bWV1OMVTHjLCKtwDjO%2F55x8gAkJ%2BQHzDjL7GbdZtNUmBGIQnlQeA5JAkV1ETwsdOXYPIi0bcu0yhMwxYaN7jRJpQ6uOPjzs3zw%2FsuDg8ApK92efAsG1bocl955BODxvsJeWQ5dIS%2BF2IwHDIOtiai0xcteHgZxmr8H3gpcJbgJfncuqV5nGkGQMKqSZTXEOIcuF4ryIF59NgG6%2Fc9jsH6ZONgrsmaDofJUqLYJIqTKPXIGLt9skaWdKfVNCLkjPWnrSaLNmpBx1rMCgJ%2FloLYrczcO%2FZbB0FPs%2BHtTwNqhUIjaiZeHmBj1E7S%2BdQp5dBX3uRp3esSIyO0eUtFJagHdUU5fOp6CGaCwvoS235xS%2B%2B%2BR17AgwpS1Tsqgdk%2Fzv2au7XSCHwuUOQex%2BQJPBU11UryuS61fw3eAOqUDLrI76cGwPfwPfL63IAC5w3OAhp3eoUyXvyFyBIMhsZZfIE0EzdCkKv3xaU2HAbkrTXu%2BJ5Vrh5K5d%2FyDchjA%2BAFfenXM%2B0%2FfSKUIozzLCJgB%2FrUY0hrfKnnvGqg7R7wrGIGxw3w4ntPbWirHt3puleTs1xq8OxPADwKuYRM8OCisqTsL42tINvCbQ6RkAVnjOPI9sm9GroXU7banqFOG1oCPatvBfeoTUgRl8wtoqlxAY6pgFCP%2B9YW%2F0IBi6rb%2FJqxrsAYrsZrFEZHnMmJT9iNJtaDegT8XDByDF%2FOjo9%2FytTBpGC0qENMJcgzzvoMcNNjXbl8Za5w%2FKaUusJDkD8ucInPopCTL%2BrANh1LVHo7NULsNEE51kVenjB%2FPM%2BuWy1322AyXkV8rGURySbidaf228fbbGBG%2BLMLJtudX6PyO1t6PIecGunkqDKDJviD5creq8KqISXD9HA&X-Amz-Signature=f3d2a44c377acd13ba4083bd52e83865b054be7472b12f7657654c1186076d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOKGM2Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXL7a%2Fm9qp%2FY1%2Fq6IIu31Cgkl1U1iV%2FceeXp1IL%2B%2BfBAiBdACGd4tVpXTSs2HJ0A6ebuGNnmPaLqSUHvjOmyjfR0yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbR7bWV1OMVTHjLCKtwDjO%2F55x8gAkJ%2BQHzDjL7GbdZtNUmBGIQnlQeA5JAkV1ETwsdOXYPIi0bcu0yhMwxYaN7jRJpQ6uOPjzs3zw%2FsuDg8ApK92efAsG1bocl955BODxvsJeWQ5dIS%2BF2IwHDIOtiai0xcteHgZxmr8H3gpcJbgJfncuqV5nGkGQMKqSZTXEOIcuF4ryIF59NgG6%2Fc9jsH6ZONgrsmaDofJUqLYJIqTKPXIGLt9skaWdKfVNCLkjPWnrSaLNmpBx1rMCgJ%2FloLYrczcO%2FZbB0FPs%2BHtTwNqhUIjaiZeHmBj1E7S%2BdQp5dBX3uRp3esSIyO0eUtFJagHdUU5fOp6CGaCwvoS235xS%2B%2B%2BR17AgwpS1Tsqgdk%2Fzv2au7XSCHwuUOQex%2BQJPBU11UryuS61fw3eAOqUDLrI76cGwPfwPfL63IAC5w3OAhp3eoUyXvyFyBIMhsZZfIE0EzdCkKv3xaU2HAbkrTXu%2BJ5Vrh5K5d%2FyDchjA%2BAFfenXM%2B0%2FfSKUIozzLCJgB%2FrUY0hrfKnnvGqg7R7wrGIGxw3w4ntPbWirHt3puleTs1xq8OxPADwKuYRM8OCisqTsL42tINvCbQ6RkAVnjOPI9sm9GroXU7banqFOG1oCPatvBfeoTUgRl8wtoqlxAY6pgFCP%2B9YW%2F0IBi6rb%2FJqxrsAYrsZrFEZHnMmJT9iNJtaDegT8XDByDF%2FOjo9%2FytTBpGC0qENMJcgzzvoMcNNjXbl8Za5w%2FKaUusJDkD8ucInPopCTL%2BrANh1LVHo7NULsNEE51kVenjB%2FPM%2BuWy1322AyXkV8rGURySbidaf228fbbGBG%2BLMLJtudX6PyO1t6PIecGunkqDKDJviD5creq8KqISXD9HA&X-Amz-Signature=1608d41b2a9335d363fe4f66ae40a36908ab45c8d944e46a50df4309c55b3ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOKGM2Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXL7a%2Fm9qp%2FY1%2Fq6IIu31Cgkl1U1iV%2FceeXp1IL%2B%2BfBAiBdACGd4tVpXTSs2HJ0A6ebuGNnmPaLqSUHvjOmyjfR0yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbR7bWV1OMVTHjLCKtwDjO%2F55x8gAkJ%2BQHzDjL7GbdZtNUmBGIQnlQeA5JAkV1ETwsdOXYPIi0bcu0yhMwxYaN7jRJpQ6uOPjzs3zw%2FsuDg8ApK92efAsG1bocl955BODxvsJeWQ5dIS%2BF2IwHDIOtiai0xcteHgZxmr8H3gpcJbgJfncuqV5nGkGQMKqSZTXEOIcuF4ryIF59NgG6%2Fc9jsH6ZONgrsmaDofJUqLYJIqTKPXIGLt9skaWdKfVNCLkjPWnrSaLNmpBx1rMCgJ%2FloLYrczcO%2FZbB0FPs%2BHtTwNqhUIjaiZeHmBj1E7S%2BdQp5dBX3uRp3esSIyO0eUtFJagHdUU5fOp6CGaCwvoS235xS%2B%2B%2BR17AgwpS1Tsqgdk%2Fzv2au7XSCHwuUOQex%2BQJPBU11UryuS61fw3eAOqUDLrI76cGwPfwPfL63IAC5w3OAhp3eoUyXvyFyBIMhsZZfIE0EzdCkKv3xaU2HAbkrTXu%2BJ5Vrh5K5d%2FyDchjA%2BAFfenXM%2B0%2FfSKUIozzLCJgB%2FrUY0hrfKnnvGqg7R7wrGIGxw3w4ntPbWirHt3puleTs1xq8OxPADwKuYRM8OCisqTsL42tINvCbQ6RkAVnjOPI9sm9GroXU7banqFOG1oCPatvBfeoTUgRl8wtoqlxAY6pgFCP%2B9YW%2F0IBi6rb%2FJqxrsAYrsZrFEZHnMmJT9iNJtaDegT8XDByDF%2FOjo9%2FytTBpGC0qENMJcgzzvoMcNNjXbl8Za5w%2FKaUusJDkD8ucInPopCTL%2BrANh1LVHo7NULsNEE51kVenjB%2FPM%2BuWy1322AyXkV8rGURySbidaf228fbbGBG%2BLMLJtudX6PyO1t6PIecGunkqDKDJviD5creq8KqISXD9HA&X-Amz-Signature=0ce201ee14b425508c6b706f78edcb1653e1ecef697ea7f933aac73e61621fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOKGM2Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXL7a%2Fm9qp%2FY1%2Fq6IIu31Cgkl1U1iV%2FceeXp1IL%2B%2BfBAiBdACGd4tVpXTSs2HJ0A6ebuGNnmPaLqSUHvjOmyjfR0yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbR7bWV1OMVTHjLCKtwDjO%2F55x8gAkJ%2BQHzDjL7GbdZtNUmBGIQnlQeA5JAkV1ETwsdOXYPIi0bcu0yhMwxYaN7jRJpQ6uOPjzs3zw%2FsuDg8ApK92efAsG1bocl955BODxvsJeWQ5dIS%2BF2IwHDIOtiai0xcteHgZxmr8H3gpcJbgJfncuqV5nGkGQMKqSZTXEOIcuF4ryIF59NgG6%2Fc9jsH6ZONgrsmaDofJUqLYJIqTKPXIGLt9skaWdKfVNCLkjPWnrSaLNmpBx1rMCgJ%2FloLYrczcO%2FZbB0FPs%2BHtTwNqhUIjaiZeHmBj1E7S%2BdQp5dBX3uRp3esSIyO0eUtFJagHdUU5fOp6CGaCwvoS235xS%2B%2B%2BR17AgwpS1Tsqgdk%2Fzv2au7XSCHwuUOQex%2BQJPBU11UryuS61fw3eAOqUDLrI76cGwPfwPfL63IAC5w3OAhp3eoUyXvyFyBIMhsZZfIE0EzdCkKv3xaU2HAbkrTXu%2BJ5Vrh5K5d%2FyDchjA%2BAFfenXM%2B0%2FfSKUIozzLCJgB%2FrUY0hrfKnnvGqg7R7wrGIGxw3w4ntPbWirHt3puleTs1xq8OxPADwKuYRM8OCisqTsL42tINvCbQ6RkAVnjOPI9sm9GroXU7banqFOG1oCPatvBfeoTUgRl8wtoqlxAY6pgFCP%2B9YW%2F0IBi6rb%2FJqxrsAYrsZrFEZHnMmJT9iNJtaDegT8XDByDF%2FOjo9%2FytTBpGC0qENMJcgzzvoMcNNjXbl8Za5w%2FKaUusJDkD8ucInPopCTL%2BrANh1LVHo7NULsNEE51kVenjB%2FPM%2BuWy1322AyXkV8rGURySbidaf228fbbGBG%2BLMLJtudX6PyO1t6PIecGunkqDKDJviD5creq8KqISXD9HA&X-Amz-Signature=a567571bdf555d543cabbf7a82f03fbe95c0614449ff8d99e4a57882fdc9e918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOKGM2Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXL7a%2Fm9qp%2FY1%2Fq6IIu31Cgkl1U1iV%2FceeXp1IL%2B%2BfBAiBdACGd4tVpXTSs2HJ0A6ebuGNnmPaLqSUHvjOmyjfR0yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbR7bWV1OMVTHjLCKtwDjO%2F55x8gAkJ%2BQHzDjL7GbdZtNUmBGIQnlQeA5JAkV1ETwsdOXYPIi0bcu0yhMwxYaN7jRJpQ6uOPjzs3zw%2FsuDg8ApK92efAsG1bocl955BODxvsJeWQ5dIS%2BF2IwHDIOtiai0xcteHgZxmr8H3gpcJbgJfncuqV5nGkGQMKqSZTXEOIcuF4ryIF59NgG6%2Fc9jsH6ZONgrsmaDofJUqLYJIqTKPXIGLt9skaWdKfVNCLkjPWnrSaLNmpBx1rMCgJ%2FloLYrczcO%2FZbB0FPs%2BHtTwNqhUIjaiZeHmBj1E7S%2BdQp5dBX3uRp3esSIyO0eUtFJagHdUU5fOp6CGaCwvoS235xS%2B%2B%2BR17AgwpS1Tsqgdk%2Fzv2au7XSCHwuUOQex%2BQJPBU11UryuS61fw3eAOqUDLrI76cGwPfwPfL63IAC5w3OAhp3eoUyXvyFyBIMhsZZfIE0EzdCkKv3xaU2HAbkrTXu%2BJ5Vrh5K5d%2FyDchjA%2BAFfenXM%2B0%2FfSKUIozzLCJgB%2FrUY0hrfKnnvGqg7R7wrGIGxw3w4ntPbWirHt3puleTs1xq8OxPADwKuYRM8OCisqTsL42tINvCbQ6RkAVnjOPI9sm9GroXU7banqFOG1oCPatvBfeoTUgRl8wtoqlxAY6pgFCP%2B9YW%2F0IBi6rb%2FJqxrsAYrsZrFEZHnMmJT9iNJtaDegT8XDByDF%2FOjo9%2FytTBpGC0qENMJcgzzvoMcNNjXbl8Za5w%2FKaUusJDkD8ucInPopCTL%2BrANh1LVHo7NULsNEE51kVenjB%2FPM%2BuWy1322AyXkV8rGURySbidaf228fbbGBG%2BLMLJtudX6PyO1t6PIecGunkqDKDJviD5creq8KqISXD9HA&X-Amz-Signature=f7995161b149751ea8733c9b074f2c24bf024da9f193086014efdaf9a74a6f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOKGM2Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXL7a%2Fm9qp%2FY1%2Fq6IIu31Cgkl1U1iV%2FceeXp1IL%2B%2BfBAiBdACGd4tVpXTSs2HJ0A6ebuGNnmPaLqSUHvjOmyjfR0yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbR7bWV1OMVTHjLCKtwDjO%2F55x8gAkJ%2BQHzDjL7GbdZtNUmBGIQnlQeA5JAkV1ETwsdOXYPIi0bcu0yhMwxYaN7jRJpQ6uOPjzs3zw%2FsuDg8ApK92efAsG1bocl955BODxvsJeWQ5dIS%2BF2IwHDIOtiai0xcteHgZxmr8H3gpcJbgJfncuqV5nGkGQMKqSZTXEOIcuF4ryIF59NgG6%2Fc9jsH6ZONgrsmaDofJUqLYJIqTKPXIGLt9skaWdKfVNCLkjPWnrSaLNmpBx1rMCgJ%2FloLYrczcO%2FZbB0FPs%2BHtTwNqhUIjaiZeHmBj1E7S%2BdQp5dBX3uRp3esSIyO0eUtFJagHdUU5fOp6CGaCwvoS235xS%2B%2B%2BR17AgwpS1Tsqgdk%2Fzv2au7XSCHwuUOQex%2BQJPBU11UryuS61fw3eAOqUDLrI76cGwPfwPfL63IAC5w3OAhp3eoUyXvyFyBIMhsZZfIE0EzdCkKv3xaU2HAbkrTXu%2BJ5Vrh5K5d%2FyDchjA%2BAFfenXM%2B0%2FfSKUIozzLCJgB%2FrUY0hrfKnnvGqg7R7wrGIGxw3w4ntPbWirHt3puleTs1xq8OxPADwKuYRM8OCisqTsL42tINvCbQ6RkAVnjOPI9sm9GroXU7banqFOG1oCPatvBfeoTUgRl8wtoqlxAY6pgFCP%2B9YW%2F0IBi6rb%2FJqxrsAYrsZrFEZHnMmJT9iNJtaDegT8XDByDF%2FOjo9%2FytTBpGC0qENMJcgzzvoMcNNjXbl8Za5w%2FKaUusJDkD8ucInPopCTL%2BrANh1LVHo7NULsNEE51kVenjB%2FPM%2BuWy1322AyXkV8rGURySbidaf228fbbGBG%2BLMLJtudX6PyO1t6PIecGunkqDKDJviD5creq8KqISXD9HA&X-Amz-Signature=4c32a2db0f5f284bce7885835d52f33ee4f0e0f58f3b2e9bddd9047da3b27f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOKGM2Q%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXL7a%2Fm9qp%2FY1%2Fq6IIu31Cgkl1U1iV%2FceeXp1IL%2B%2BfBAiBdACGd4tVpXTSs2HJ0A6ebuGNnmPaLqSUHvjOmyjfR0yqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbR7bWV1OMVTHjLCKtwDjO%2F55x8gAkJ%2BQHzDjL7GbdZtNUmBGIQnlQeA5JAkV1ETwsdOXYPIi0bcu0yhMwxYaN7jRJpQ6uOPjzs3zw%2FsuDg8ApK92efAsG1bocl955BODxvsJeWQ5dIS%2BF2IwHDIOtiai0xcteHgZxmr8H3gpcJbgJfncuqV5nGkGQMKqSZTXEOIcuF4ryIF59NgG6%2Fc9jsH6ZONgrsmaDofJUqLYJIqTKPXIGLt9skaWdKfVNCLkjPWnrSaLNmpBx1rMCgJ%2FloLYrczcO%2FZbB0FPs%2BHtTwNqhUIjaiZeHmBj1E7S%2BdQp5dBX3uRp3esSIyO0eUtFJagHdUU5fOp6CGaCwvoS235xS%2B%2B%2BR17AgwpS1Tsqgdk%2Fzv2au7XSCHwuUOQex%2BQJPBU11UryuS61fw3eAOqUDLrI76cGwPfwPfL63IAC5w3OAhp3eoUyXvyFyBIMhsZZfIE0EzdCkKv3xaU2HAbkrTXu%2BJ5Vrh5K5d%2FyDchjA%2BAFfenXM%2B0%2FfSKUIozzLCJgB%2FrUY0hrfKnnvGqg7R7wrGIGxw3w4ntPbWirHt3puleTs1xq8OxPADwKuYRM8OCisqTsL42tINvCbQ6RkAVnjOPI9sm9GroXU7banqFOG1oCPatvBfeoTUgRl8wtoqlxAY6pgFCP%2B9YW%2F0IBi6rb%2FJqxrsAYrsZrFEZHnMmJT9iNJtaDegT8XDByDF%2FOjo9%2FytTBpGC0qENMJcgzzvoMcNNjXbl8Za5w%2FKaUusJDkD8ucInPopCTL%2BrANh1LVHo7NULsNEE51kVenjB%2FPM%2BuWy1322AyXkV8rGURySbidaf228fbbGBG%2BLMLJtudX6PyO1t6PIecGunkqDKDJviD5creq8KqISXD9HA&X-Amz-Signature=2cbf3515541fa446790c73749a8924669f2d4bcbc520b15149f581518f159a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
