---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWYS373%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5RaYYSPWifjljlHjjHV29Z1US9In8dVlNyglP6IcFwgIgZS%2BDciX8e636Rv0cJW550RbHnoaX7iE%2FiFGd8uE1eooq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB81LEPvtBAb9Q0c8ircA%2B2wHlJfl0PMO5KZ8oOtqz2b2I2Tobp6%2BozeOGyLV29ywjNxe6d%2FIB3fAWiQWYBDIXu%2Fdm7PIOuU38QF1PXlHgddNST3XU%2FnT4qQhlBM3MqYHOwDDu%2BEfexf6oCmHBskCQGXZr%2BbX3Jb0zW4CqKLunHtPU9oL%2FVbdACSqZqWP9ecNTcUXwUxjaTrvYdiGeb3BxOoPxx5wN87lk0av8uNg5EVXvAYlSE5h1PH2hW4unDqQePa9KIFlfPcg3OUmKf3zpI4jjCdrpSVaP%2By%2F0Hrp8CbhJxTSVaQgwMv%2Bi2TC8Yzu6XuA9%2B2guIPtO28hVoCmNOGUhPW1pltYHJ75kyh7I%2FghLDe0oVHhRYfXrrZI0QtKAWo1rH1%2B5DG2NYC5av8C9K77IoUnn7gZj%2BXECmZ9niqE6AZUDgJIr9cbrWHtqJGo3lND5yIPm2xECqkOziDs%2BJC59z8CNGCPvfkzDWgsp8jneiU0NnZW6WbcNmIcqFdRtwxxRJBiUWpAF6P38xPxsHCG1bGyQ9m%2B8saw4WJlC9OBxTDqJhS%2Fc%2Bvhg5EW2MdmZNQsz3WWom5saCpFu84xSH7GFamzcMFJaFXRnPBH8NwMPDVviJw%2Btw5zlzJWPKZhHvijQGPJHykF0yJMJbv%2B8QGOqUBx0tkhTQCA7TvZFhnfOjo8NUXXfVe2aHdv2azfcaTRtkYTJfZtmItvJSKRkMonl8FqqeEkXotNzL3ph%2Bd%2FdpPBRzrGSG4CMq%2FGW5TgCxI7YSuPmyJJKlGVsPhmlriKr8lcxxNeb8nt7JjqjCiWfX0HT7wl7GVjpHqtlW7Qk77eM0kixfWi5T99jg%2F4HahQed7T7gWVbP60QchPiVPeeJTFfQ1l4E8&X-Amz-Signature=9cc3209bd297dec5a328c68ab594274a3489ce1ed0f1f8dbf3a3da18c225c9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWYS373%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5RaYYSPWifjljlHjjHV29Z1US9In8dVlNyglP6IcFwgIgZS%2BDciX8e636Rv0cJW550RbHnoaX7iE%2FiFGd8uE1eooq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB81LEPvtBAb9Q0c8ircA%2B2wHlJfl0PMO5KZ8oOtqz2b2I2Tobp6%2BozeOGyLV29ywjNxe6d%2FIB3fAWiQWYBDIXu%2Fdm7PIOuU38QF1PXlHgddNST3XU%2FnT4qQhlBM3MqYHOwDDu%2BEfexf6oCmHBskCQGXZr%2BbX3Jb0zW4CqKLunHtPU9oL%2FVbdACSqZqWP9ecNTcUXwUxjaTrvYdiGeb3BxOoPxx5wN87lk0av8uNg5EVXvAYlSE5h1PH2hW4unDqQePa9KIFlfPcg3OUmKf3zpI4jjCdrpSVaP%2By%2F0Hrp8CbhJxTSVaQgwMv%2Bi2TC8Yzu6XuA9%2B2guIPtO28hVoCmNOGUhPW1pltYHJ75kyh7I%2FghLDe0oVHhRYfXrrZI0QtKAWo1rH1%2B5DG2NYC5av8C9K77IoUnn7gZj%2BXECmZ9niqE6AZUDgJIr9cbrWHtqJGo3lND5yIPm2xECqkOziDs%2BJC59z8CNGCPvfkzDWgsp8jneiU0NnZW6WbcNmIcqFdRtwxxRJBiUWpAF6P38xPxsHCG1bGyQ9m%2B8saw4WJlC9OBxTDqJhS%2Fc%2Bvhg5EW2MdmZNQsz3WWom5saCpFu84xSH7GFamzcMFJaFXRnPBH8NwMPDVviJw%2Btw5zlzJWPKZhHvijQGPJHykF0yJMJbv%2B8QGOqUBx0tkhTQCA7TvZFhnfOjo8NUXXfVe2aHdv2azfcaTRtkYTJfZtmItvJSKRkMonl8FqqeEkXotNzL3ph%2Bd%2FdpPBRzrGSG4CMq%2FGW5TgCxI7YSuPmyJJKlGVsPhmlriKr8lcxxNeb8nt7JjqjCiWfX0HT7wl7GVjpHqtlW7Qk77eM0kixfWi5T99jg%2F4HahQed7T7gWVbP60QchPiVPeeJTFfQ1l4E8&X-Amz-Signature=163a304752bd89671f095226c36aafdbef8dce0950546facf8818647f992c342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWYS373%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5RaYYSPWifjljlHjjHV29Z1US9In8dVlNyglP6IcFwgIgZS%2BDciX8e636Rv0cJW550RbHnoaX7iE%2FiFGd8uE1eooq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB81LEPvtBAb9Q0c8ircA%2B2wHlJfl0PMO5KZ8oOtqz2b2I2Tobp6%2BozeOGyLV29ywjNxe6d%2FIB3fAWiQWYBDIXu%2Fdm7PIOuU38QF1PXlHgddNST3XU%2FnT4qQhlBM3MqYHOwDDu%2BEfexf6oCmHBskCQGXZr%2BbX3Jb0zW4CqKLunHtPU9oL%2FVbdACSqZqWP9ecNTcUXwUxjaTrvYdiGeb3BxOoPxx5wN87lk0av8uNg5EVXvAYlSE5h1PH2hW4unDqQePa9KIFlfPcg3OUmKf3zpI4jjCdrpSVaP%2By%2F0Hrp8CbhJxTSVaQgwMv%2Bi2TC8Yzu6XuA9%2B2guIPtO28hVoCmNOGUhPW1pltYHJ75kyh7I%2FghLDe0oVHhRYfXrrZI0QtKAWo1rH1%2B5DG2NYC5av8C9K77IoUnn7gZj%2BXECmZ9niqE6AZUDgJIr9cbrWHtqJGo3lND5yIPm2xECqkOziDs%2BJC59z8CNGCPvfkzDWgsp8jneiU0NnZW6WbcNmIcqFdRtwxxRJBiUWpAF6P38xPxsHCG1bGyQ9m%2B8saw4WJlC9OBxTDqJhS%2Fc%2Bvhg5EW2MdmZNQsz3WWom5saCpFu84xSH7GFamzcMFJaFXRnPBH8NwMPDVviJw%2Btw5zlzJWPKZhHvijQGPJHykF0yJMJbv%2B8QGOqUBx0tkhTQCA7TvZFhnfOjo8NUXXfVe2aHdv2azfcaTRtkYTJfZtmItvJSKRkMonl8FqqeEkXotNzL3ph%2Bd%2FdpPBRzrGSG4CMq%2FGW5TgCxI7YSuPmyJJKlGVsPhmlriKr8lcxxNeb8nt7JjqjCiWfX0HT7wl7GVjpHqtlW7Qk77eM0kixfWi5T99jg%2F4HahQed7T7gWVbP60QchPiVPeeJTFfQ1l4E8&X-Amz-Signature=192537b6a41b275671b24862bed665c29d4849e27f053d5de2a400b67f8bd83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWYS373%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5RaYYSPWifjljlHjjHV29Z1US9In8dVlNyglP6IcFwgIgZS%2BDciX8e636Rv0cJW550RbHnoaX7iE%2FiFGd8uE1eooq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB81LEPvtBAb9Q0c8ircA%2B2wHlJfl0PMO5KZ8oOtqz2b2I2Tobp6%2BozeOGyLV29ywjNxe6d%2FIB3fAWiQWYBDIXu%2Fdm7PIOuU38QF1PXlHgddNST3XU%2FnT4qQhlBM3MqYHOwDDu%2BEfexf6oCmHBskCQGXZr%2BbX3Jb0zW4CqKLunHtPU9oL%2FVbdACSqZqWP9ecNTcUXwUxjaTrvYdiGeb3BxOoPxx5wN87lk0av8uNg5EVXvAYlSE5h1PH2hW4unDqQePa9KIFlfPcg3OUmKf3zpI4jjCdrpSVaP%2By%2F0Hrp8CbhJxTSVaQgwMv%2Bi2TC8Yzu6XuA9%2B2guIPtO28hVoCmNOGUhPW1pltYHJ75kyh7I%2FghLDe0oVHhRYfXrrZI0QtKAWo1rH1%2B5DG2NYC5av8C9K77IoUnn7gZj%2BXECmZ9niqE6AZUDgJIr9cbrWHtqJGo3lND5yIPm2xECqkOziDs%2BJC59z8CNGCPvfkzDWgsp8jneiU0NnZW6WbcNmIcqFdRtwxxRJBiUWpAF6P38xPxsHCG1bGyQ9m%2B8saw4WJlC9OBxTDqJhS%2Fc%2Bvhg5EW2MdmZNQsz3WWom5saCpFu84xSH7GFamzcMFJaFXRnPBH8NwMPDVviJw%2Btw5zlzJWPKZhHvijQGPJHykF0yJMJbv%2B8QGOqUBx0tkhTQCA7TvZFhnfOjo8NUXXfVe2aHdv2azfcaTRtkYTJfZtmItvJSKRkMonl8FqqeEkXotNzL3ph%2Bd%2FdpPBRzrGSG4CMq%2FGW5TgCxI7YSuPmyJJKlGVsPhmlriKr8lcxxNeb8nt7JjqjCiWfX0HT7wl7GVjpHqtlW7Qk77eM0kixfWi5T99jg%2F4HahQed7T7gWVbP60QchPiVPeeJTFfQ1l4E8&X-Amz-Signature=9258b1876bea3844b4179378bb2e725a266dd30abb5aeb55009b841dc6b56238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWYS373%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5RaYYSPWifjljlHjjHV29Z1US9In8dVlNyglP6IcFwgIgZS%2BDciX8e636Rv0cJW550RbHnoaX7iE%2FiFGd8uE1eooq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB81LEPvtBAb9Q0c8ircA%2B2wHlJfl0PMO5KZ8oOtqz2b2I2Tobp6%2BozeOGyLV29ywjNxe6d%2FIB3fAWiQWYBDIXu%2Fdm7PIOuU38QF1PXlHgddNST3XU%2FnT4qQhlBM3MqYHOwDDu%2BEfexf6oCmHBskCQGXZr%2BbX3Jb0zW4CqKLunHtPU9oL%2FVbdACSqZqWP9ecNTcUXwUxjaTrvYdiGeb3BxOoPxx5wN87lk0av8uNg5EVXvAYlSE5h1PH2hW4unDqQePa9KIFlfPcg3OUmKf3zpI4jjCdrpSVaP%2By%2F0Hrp8CbhJxTSVaQgwMv%2Bi2TC8Yzu6XuA9%2B2guIPtO28hVoCmNOGUhPW1pltYHJ75kyh7I%2FghLDe0oVHhRYfXrrZI0QtKAWo1rH1%2B5DG2NYC5av8C9K77IoUnn7gZj%2BXECmZ9niqE6AZUDgJIr9cbrWHtqJGo3lND5yIPm2xECqkOziDs%2BJC59z8CNGCPvfkzDWgsp8jneiU0NnZW6WbcNmIcqFdRtwxxRJBiUWpAF6P38xPxsHCG1bGyQ9m%2B8saw4WJlC9OBxTDqJhS%2Fc%2Bvhg5EW2MdmZNQsz3WWom5saCpFu84xSH7GFamzcMFJaFXRnPBH8NwMPDVviJw%2Btw5zlzJWPKZhHvijQGPJHykF0yJMJbv%2B8QGOqUBx0tkhTQCA7TvZFhnfOjo8NUXXfVe2aHdv2azfcaTRtkYTJfZtmItvJSKRkMonl8FqqeEkXotNzL3ph%2Bd%2FdpPBRzrGSG4CMq%2FGW5TgCxI7YSuPmyJJKlGVsPhmlriKr8lcxxNeb8nt7JjqjCiWfX0HT7wl7GVjpHqtlW7Qk77eM0kixfWi5T99jg%2F4HahQed7T7gWVbP60QchPiVPeeJTFfQ1l4E8&X-Amz-Signature=45a23fbb2bffa51111f471ebbe45570024d943f3c1ce32c55ba32ba96e4da43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWYS373%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5RaYYSPWifjljlHjjHV29Z1US9In8dVlNyglP6IcFwgIgZS%2BDciX8e636Rv0cJW550RbHnoaX7iE%2FiFGd8uE1eooq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB81LEPvtBAb9Q0c8ircA%2B2wHlJfl0PMO5KZ8oOtqz2b2I2Tobp6%2BozeOGyLV29ywjNxe6d%2FIB3fAWiQWYBDIXu%2Fdm7PIOuU38QF1PXlHgddNST3XU%2FnT4qQhlBM3MqYHOwDDu%2BEfexf6oCmHBskCQGXZr%2BbX3Jb0zW4CqKLunHtPU9oL%2FVbdACSqZqWP9ecNTcUXwUxjaTrvYdiGeb3BxOoPxx5wN87lk0av8uNg5EVXvAYlSE5h1PH2hW4unDqQePa9KIFlfPcg3OUmKf3zpI4jjCdrpSVaP%2By%2F0Hrp8CbhJxTSVaQgwMv%2Bi2TC8Yzu6XuA9%2B2guIPtO28hVoCmNOGUhPW1pltYHJ75kyh7I%2FghLDe0oVHhRYfXrrZI0QtKAWo1rH1%2B5DG2NYC5av8C9K77IoUnn7gZj%2BXECmZ9niqE6AZUDgJIr9cbrWHtqJGo3lND5yIPm2xECqkOziDs%2BJC59z8CNGCPvfkzDWgsp8jneiU0NnZW6WbcNmIcqFdRtwxxRJBiUWpAF6P38xPxsHCG1bGyQ9m%2B8saw4WJlC9OBxTDqJhS%2Fc%2Bvhg5EW2MdmZNQsz3WWom5saCpFu84xSH7GFamzcMFJaFXRnPBH8NwMPDVviJw%2Btw5zlzJWPKZhHvijQGPJHykF0yJMJbv%2B8QGOqUBx0tkhTQCA7TvZFhnfOjo8NUXXfVe2aHdv2azfcaTRtkYTJfZtmItvJSKRkMonl8FqqeEkXotNzL3ph%2Bd%2FdpPBRzrGSG4CMq%2FGW5TgCxI7YSuPmyJJKlGVsPhmlriKr8lcxxNeb8nt7JjqjCiWfX0HT7wl7GVjpHqtlW7Qk77eM0kixfWi5T99jg%2F4HahQed7T7gWVbP60QchPiVPeeJTFfQ1l4E8&X-Amz-Signature=37ccf11a81fd9be89808e879f7c71aec2b768f6cef7b501cc995ed5cbc92432f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWYS373%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD5RaYYSPWifjljlHjjHV29Z1US9In8dVlNyglP6IcFwgIgZS%2BDciX8e636Rv0cJW550RbHnoaX7iE%2FiFGd8uE1eooq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB81LEPvtBAb9Q0c8ircA%2B2wHlJfl0PMO5KZ8oOtqz2b2I2Tobp6%2BozeOGyLV29ywjNxe6d%2FIB3fAWiQWYBDIXu%2Fdm7PIOuU38QF1PXlHgddNST3XU%2FnT4qQhlBM3MqYHOwDDu%2BEfexf6oCmHBskCQGXZr%2BbX3Jb0zW4CqKLunHtPU9oL%2FVbdACSqZqWP9ecNTcUXwUxjaTrvYdiGeb3BxOoPxx5wN87lk0av8uNg5EVXvAYlSE5h1PH2hW4unDqQePa9KIFlfPcg3OUmKf3zpI4jjCdrpSVaP%2By%2F0Hrp8CbhJxTSVaQgwMv%2Bi2TC8Yzu6XuA9%2B2guIPtO28hVoCmNOGUhPW1pltYHJ75kyh7I%2FghLDe0oVHhRYfXrrZI0QtKAWo1rH1%2B5DG2NYC5av8C9K77IoUnn7gZj%2BXECmZ9niqE6AZUDgJIr9cbrWHtqJGo3lND5yIPm2xECqkOziDs%2BJC59z8CNGCPvfkzDWgsp8jneiU0NnZW6WbcNmIcqFdRtwxxRJBiUWpAF6P38xPxsHCG1bGyQ9m%2B8saw4WJlC9OBxTDqJhS%2Fc%2Bvhg5EW2MdmZNQsz3WWom5saCpFu84xSH7GFamzcMFJaFXRnPBH8NwMPDVviJw%2Btw5zlzJWPKZhHvijQGPJHykF0yJMJbv%2B8QGOqUBx0tkhTQCA7TvZFhnfOjo8NUXXfVe2aHdv2azfcaTRtkYTJfZtmItvJSKRkMonl8FqqeEkXotNzL3ph%2Bd%2FdpPBRzrGSG4CMq%2FGW5TgCxI7YSuPmyJJKlGVsPhmlriKr8lcxxNeb8nt7JjqjCiWfX0HT7wl7GVjpHqtlW7Qk77eM0kixfWi5T99jg%2F4HahQed7T7gWVbP60QchPiVPeeJTFfQ1l4E8&X-Amz-Signature=57557505c01099c985ba12beae598e46faa7ea68712163d6461bc642ebcc5dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
