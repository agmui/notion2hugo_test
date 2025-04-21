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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XSI6NS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDNChodU1slfRR8T1GD21EvJNimuhSCjBPjHDfbeMt6hwIgSb2z%2F%2BMAVWAARocoGASZg6ISL2MNP9ZqcOqQQfqRcjUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPIJVG0J6ffkyukrCrcA8%2Fh6XJ%2BV4oU7b0mqcnf%2BzFxxDWH1%2BHREfige2WkFXAURZYCose5WKyIYmqsb2%2B3CbhPaf2lAzwBxjOKmLrHOr81VAhWRcFQiW6GqBH3FGL2uWLDbEzb1jkAO9pMSUux7zTT%2FpaUzkjl8yOu5fqnhc4BV9GxSXPQCpTikvHMMJe3xIM45VkWrdW6ZsG6gvOlUW7I0b9XDILxNFL0bLegH5AQgf3zMAX9c6Nes8PCyypJ%2BAI%2BJQHX%2FpHw4w0JaSNWAZih1P3LuGrgtrMX%2BhnMFv4wQywI%2FPdBGV3Lg678oipeG00j%2BRCA9UQ%2BkWq5yB%2Bq6uou4AJ%2BG%2Bm4lDv1WacLA6BznT5VbqB84Kh%2FIGsbYKhAO8rPh2CJPCHKP6mhA4%2F%2FouKrfkR5j3IFzQsvHauDXrru1TkjaG8L77Apc6yj8nxYQJ%2BNt08E%2F%2BbbqFyBPS0uFNUy1%2FRJ7%2FoR1rWkcjGP2yYiEQaY3ZaXSxc%2FuKnRYvqrhGoV3F2Khn3HcngIKXujQGRncT%2FoCqrFpcD0FWQeHBl0ADZsJW%2BbPyo2GyWXmdk%2FcIxx5UB%2F3XjjoTZoNrPXyl21fz8dKZ6QkJo9ZsSVBZ%2BjuOG7AsM9enyMPuNJaGzsPx0i2o1Up8n6gvL8MOP5lsAGOqUBToPEbM03bfr4bxzsQwUEn8qB0eo49xDtViPSuhyn%2F8%2BTtjzXgHRu%2FWCdXEkfvkxrFrTjkp%2BiYJv05rWCpZrbF27O07ecwXExwk45NsK4lesY03V7D%2FlpTqVr8CgyTefl8ZGb5v7D2qnyclJZnxJ9PZo18y0hSeQp%2Fl3vKfcNfqooB7TOtfT1%2BYQKGXjF8nvXDh2%2FqFNO7%2BWvWvn9xY4VhgaF6jPG&X-Amz-Signature=cbfdcc57a88967fbff79ab34dc79d2a53f21a96c62720803bc918986ea06b5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XSI6NS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDNChodU1slfRR8T1GD21EvJNimuhSCjBPjHDfbeMt6hwIgSb2z%2F%2BMAVWAARocoGASZg6ISL2MNP9ZqcOqQQfqRcjUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPIJVG0J6ffkyukrCrcA8%2Fh6XJ%2BV4oU7b0mqcnf%2BzFxxDWH1%2BHREfige2WkFXAURZYCose5WKyIYmqsb2%2B3CbhPaf2lAzwBxjOKmLrHOr81VAhWRcFQiW6GqBH3FGL2uWLDbEzb1jkAO9pMSUux7zTT%2FpaUzkjl8yOu5fqnhc4BV9GxSXPQCpTikvHMMJe3xIM45VkWrdW6ZsG6gvOlUW7I0b9XDILxNFL0bLegH5AQgf3zMAX9c6Nes8PCyypJ%2BAI%2BJQHX%2FpHw4w0JaSNWAZih1P3LuGrgtrMX%2BhnMFv4wQywI%2FPdBGV3Lg678oipeG00j%2BRCA9UQ%2BkWq5yB%2Bq6uou4AJ%2BG%2Bm4lDv1WacLA6BznT5VbqB84Kh%2FIGsbYKhAO8rPh2CJPCHKP6mhA4%2F%2FouKrfkR5j3IFzQsvHauDXrru1TkjaG8L77Apc6yj8nxYQJ%2BNt08E%2F%2BbbqFyBPS0uFNUy1%2FRJ7%2FoR1rWkcjGP2yYiEQaY3ZaXSxc%2FuKnRYvqrhGoV3F2Khn3HcngIKXujQGRncT%2FoCqrFpcD0FWQeHBl0ADZsJW%2BbPyo2GyWXmdk%2FcIxx5UB%2F3XjjoTZoNrPXyl21fz8dKZ6QkJo9ZsSVBZ%2BjuOG7AsM9enyMPuNJaGzsPx0i2o1Up8n6gvL8MOP5lsAGOqUBToPEbM03bfr4bxzsQwUEn8qB0eo49xDtViPSuhyn%2F8%2BTtjzXgHRu%2FWCdXEkfvkxrFrTjkp%2BiYJv05rWCpZrbF27O07ecwXExwk45NsK4lesY03V7D%2FlpTqVr8CgyTefl8ZGb5v7D2qnyclJZnxJ9PZo18y0hSeQp%2Fl3vKfcNfqooB7TOtfT1%2BYQKGXjF8nvXDh2%2FqFNO7%2BWvWvn9xY4VhgaF6jPG&X-Amz-Signature=429b8e3e7ac284b6372f8d9e5499353c9170d45ae36e2548e5b6d7658d4b63c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XSI6NS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDNChodU1slfRR8T1GD21EvJNimuhSCjBPjHDfbeMt6hwIgSb2z%2F%2BMAVWAARocoGASZg6ISL2MNP9ZqcOqQQfqRcjUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPIJVG0J6ffkyukrCrcA8%2Fh6XJ%2BV4oU7b0mqcnf%2BzFxxDWH1%2BHREfige2WkFXAURZYCose5WKyIYmqsb2%2B3CbhPaf2lAzwBxjOKmLrHOr81VAhWRcFQiW6GqBH3FGL2uWLDbEzb1jkAO9pMSUux7zTT%2FpaUzkjl8yOu5fqnhc4BV9GxSXPQCpTikvHMMJe3xIM45VkWrdW6ZsG6gvOlUW7I0b9XDILxNFL0bLegH5AQgf3zMAX9c6Nes8PCyypJ%2BAI%2BJQHX%2FpHw4w0JaSNWAZih1P3LuGrgtrMX%2BhnMFv4wQywI%2FPdBGV3Lg678oipeG00j%2BRCA9UQ%2BkWq5yB%2Bq6uou4AJ%2BG%2Bm4lDv1WacLA6BznT5VbqB84Kh%2FIGsbYKhAO8rPh2CJPCHKP6mhA4%2F%2FouKrfkR5j3IFzQsvHauDXrru1TkjaG8L77Apc6yj8nxYQJ%2BNt08E%2F%2BbbqFyBPS0uFNUy1%2FRJ7%2FoR1rWkcjGP2yYiEQaY3ZaXSxc%2FuKnRYvqrhGoV3F2Khn3HcngIKXujQGRncT%2FoCqrFpcD0FWQeHBl0ADZsJW%2BbPyo2GyWXmdk%2FcIxx5UB%2F3XjjoTZoNrPXyl21fz8dKZ6QkJo9ZsSVBZ%2BjuOG7AsM9enyMPuNJaGzsPx0i2o1Up8n6gvL8MOP5lsAGOqUBToPEbM03bfr4bxzsQwUEn8qB0eo49xDtViPSuhyn%2F8%2BTtjzXgHRu%2FWCdXEkfvkxrFrTjkp%2BiYJv05rWCpZrbF27O07ecwXExwk45NsK4lesY03V7D%2FlpTqVr8CgyTefl8ZGb5v7D2qnyclJZnxJ9PZo18y0hSeQp%2Fl3vKfcNfqooB7TOtfT1%2BYQKGXjF8nvXDh2%2FqFNO7%2BWvWvn9xY4VhgaF6jPG&X-Amz-Signature=da8540e8888fe7ec72752687ad5f009d176ae8228700c8119fe3c83e93830676&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XSI6NS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDNChodU1slfRR8T1GD21EvJNimuhSCjBPjHDfbeMt6hwIgSb2z%2F%2BMAVWAARocoGASZg6ISL2MNP9ZqcOqQQfqRcjUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPIJVG0J6ffkyukrCrcA8%2Fh6XJ%2BV4oU7b0mqcnf%2BzFxxDWH1%2BHREfige2WkFXAURZYCose5WKyIYmqsb2%2B3CbhPaf2lAzwBxjOKmLrHOr81VAhWRcFQiW6GqBH3FGL2uWLDbEzb1jkAO9pMSUux7zTT%2FpaUzkjl8yOu5fqnhc4BV9GxSXPQCpTikvHMMJe3xIM45VkWrdW6ZsG6gvOlUW7I0b9XDILxNFL0bLegH5AQgf3zMAX9c6Nes8PCyypJ%2BAI%2BJQHX%2FpHw4w0JaSNWAZih1P3LuGrgtrMX%2BhnMFv4wQywI%2FPdBGV3Lg678oipeG00j%2BRCA9UQ%2BkWq5yB%2Bq6uou4AJ%2BG%2Bm4lDv1WacLA6BznT5VbqB84Kh%2FIGsbYKhAO8rPh2CJPCHKP6mhA4%2F%2FouKrfkR5j3IFzQsvHauDXrru1TkjaG8L77Apc6yj8nxYQJ%2BNt08E%2F%2BbbqFyBPS0uFNUy1%2FRJ7%2FoR1rWkcjGP2yYiEQaY3ZaXSxc%2FuKnRYvqrhGoV3F2Khn3HcngIKXujQGRncT%2FoCqrFpcD0FWQeHBl0ADZsJW%2BbPyo2GyWXmdk%2FcIxx5UB%2F3XjjoTZoNrPXyl21fz8dKZ6QkJo9ZsSVBZ%2BjuOG7AsM9enyMPuNJaGzsPx0i2o1Up8n6gvL8MOP5lsAGOqUBToPEbM03bfr4bxzsQwUEn8qB0eo49xDtViPSuhyn%2F8%2BTtjzXgHRu%2FWCdXEkfvkxrFrTjkp%2BiYJv05rWCpZrbF27O07ecwXExwk45NsK4lesY03V7D%2FlpTqVr8CgyTefl8ZGb5v7D2qnyclJZnxJ9PZo18y0hSeQp%2Fl3vKfcNfqooB7TOtfT1%2BYQKGXjF8nvXDh2%2FqFNO7%2BWvWvn9xY4VhgaF6jPG&X-Amz-Signature=fd62f391ab9af34388c9509a1f0186a182a3a8e1ed1736f40bab4e095215e5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XSI6NS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDNChodU1slfRR8T1GD21EvJNimuhSCjBPjHDfbeMt6hwIgSb2z%2F%2BMAVWAARocoGASZg6ISL2MNP9ZqcOqQQfqRcjUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPIJVG0J6ffkyukrCrcA8%2Fh6XJ%2BV4oU7b0mqcnf%2BzFxxDWH1%2BHREfige2WkFXAURZYCose5WKyIYmqsb2%2B3CbhPaf2lAzwBxjOKmLrHOr81VAhWRcFQiW6GqBH3FGL2uWLDbEzb1jkAO9pMSUux7zTT%2FpaUzkjl8yOu5fqnhc4BV9GxSXPQCpTikvHMMJe3xIM45VkWrdW6ZsG6gvOlUW7I0b9XDILxNFL0bLegH5AQgf3zMAX9c6Nes8PCyypJ%2BAI%2BJQHX%2FpHw4w0JaSNWAZih1P3LuGrgtrMX%2BhnMFv4wQywI%2FPdBGV3Lg678oipeG00j%2BRCA9UQ%2BkWq5yB%2Bq6uou4AJ%2BG%2Bm4lDv1WacLA6BznT5VbqB84Kh%2FIGsbYKhAO8rPh2CJPCHKP6mhA4%2F%2FouKrfkR5j3IFzQsvHauDXrru1TkjaG8L77Apc6yj8nxYQJ%2BNt08E%2F%2BbbqFyBPS0uFNUy1%2FRJ7%2FoR1rWkcjGP2yYiEQaY3ZaXSxc%2FuKnRYvqrhGoV3F2Khn3HcngIKXujQGRncT%2FoCqrFpcD0FWQeHBl0ADZsJW%2BbPyo2GyWXmdk%2FcIxx5UB%2F3XjjoTZoNrPXyl21fz8dKZ6QkJo9ZsSVBZ%2BjuOG7AsM9enyMPuNJaGzsPx0i2o1Up8n6gvL8MOP5lsAGOqUBToPEbM03bfr4bxzsQwUEn8qB0eo49xDtViPSuhyn%2F8%2BTtjzXgHRu%2FWCdXEkfvkxrFrTjkp%2BiYJv05rWCpZrbF27O07ecwXExwk45NsK4lesY03V7D%2FlpTqVr8CgyTefl8ZGb5v7D2qnyclJZnxJ9PZo18y0hSeQp%2Fl3vKfcNfqooB7TOtfT1%2BYQKGXjF8nvXDh2%2FqFNO7%2BWvWvn9xY4VhgaF6jPG&X-Amz-Signature=2ca1d7db7386125d045bf7372e83c73b7b5304d1905d976f703f982ef6977e46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XSI6NS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDNChodU1slfRR8T1GD21EvJNimuhSCjBPjHDfbeMt6hwIgSb2z%2F%2BMAVWAARocoGASZg6ISL2MNP9ZqcOqQQfqRcjUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPIJVG0J6ffkyukrCrcA8%2Fh6XJ%2BV4oU7b0mqcnf%2BzFxxDWH1%2BHREfige2WkFXAURZYCose5WKyIYmqsb2%2B3CbhPaf2lAzwBxjOKmLrHOr81VAhWRcFQiW6GqBH3FGL2uWLDbEzb1jkAO9pMSUux7zTT%2FpaUzkjl8yOu5fqnhc4BV9GxSXPQCpTikvHMMJe3xIM45VkWrdW6ZsG6gvOlUW7I0b9XDILxNFL0bLegH5AQgf3zMAX9c6Nes8PCyypJ%2BAI%2BJQHX%2FpHw4w0JaSNWAZih1P3LuGrgtrMX%2BhnMFv4wQywI%2FPdBGV3Lg678oipeG00j%2BRCA9UQ%2BkWq5yB%2Bq6uou4AJ%2BG%2Bm4lDv1WacLA6BznT5VbqB84Kh%2FIGsbYKhAO8rPh2CJPCHKP6mhA4%2F%2FouKrfkR5j3IFzQsvHauDXrru1TkjaG8L77Apc6yj8nxYQJ%2BNt08E%2F%2BbbqFyBPS0uFNUy1%2FRJ7%2FoR1rWkcjGP2yYiEQaY3ZaXSxc%2FuKnRYvqrhGoV3F2Khn3HcngIKXujQGRncT%2FoCqrFpcD0FWQeHBl0ADZsJW%2BbPyo2GyWXmdk%2FcIxx5UB%2F3XjjoTZoNrPXyl21fz8dKZ6QkJo9ZsSVBZ%2BjuOG7AsM9enyMPuNJaGzsPx0i2o1Up8n6gvL8MOP5lsAGOqUBToPEbM03bfr4bxzsQwUEn8qB0eo49xDtViPSuhyn%2F8%2BTtjzXgHRu%2FWCdXEkfvkxrFrTjkp%2BiYJv05rWCpZrbF27O07ecwXExwk45NsK4lesY03V7D%2FlpTqVr8CgyTefl8ZGb5v7D2qnyclJZnxJ9PZo18y0hSeQp%2Fl3vKfcNfqooB7TOtfT1%2BYQKGXjF8nvXDh2%2FqFNO7%2BWvWvn9xY4VhgaF6jPG&X-Amz-Signature=07a458c125e283fdb056c53d668ca1eb40ea6041b58931387191040bca62b1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XSI6NS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDNChodU1slfRR8T1GD21EvJNimuhSCjBPjHDfbeMt6hwIgSb2z%2F%2BMAVWAARocoGASZg6ISL2MNP9ZqcOqQQfqRcjUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPIJVG0J6ffkyukrCrcA8%2Fh6XJ%2BV4oU7b0mqcnf%2BzFxxDWH1%2BHREfige2WkFXAURZYCose5WKyIYmqsb2%2B3CbhPaf2lAzwBxjOKmLrHOr81VAhWRcFQiW6GqBH3FGL2uWLDbEzb1jkAO9pMSUux7zTT%2FpaUzkjl8yOu5fqnhc4BV9GxSXPQCpTikvHMMJe3xIM45VkWrdW6ZsG6gvOlUW7I0b9XDILxNFL0bLegH5AQgf3zMAX9c6Nes8PCyypJ%2BAI%2BJQHX%2FpHw4w0JaSNWAZih1P3LuGrgtrMX%2BhnMFv4wQywI%2FPdBGV3Lg678oipeG00j%2BRCA9UQ%2BkWq5yB%2Bq6uou4AJ%2BG%2Bm4lDv1WacLA6BznT5VbqB84Kh%2FIGsbYKhAO8rPh2CJPCHKP6mhA4%2F%2FouKrfkR5j3IFzQsvHauDXrru1TkjaG8L77Apc6yj8nxYQJ%2BNt08E%2F%2BbbqFyBPS0uFNUy1%2FRJ7%2FoR1rWkcjGP2yYiEQaY3ZaXSxc%2FuKnRYvqrhGoV3F2Khn3HcngIKXujQGRncT%2FoCqrFpcD0FWQeHBl0ADZsJW%2BbPyo2GyWXmdk%2FcIxx5UB%2F3XjjoTZoNrPXyl21fz8dKZ6QkJo9ZsSVBZ%2BjuOG7AsM9enyMPuNJaGzsPx0i2o1Up8n6gvL8MOP5lsAGOqUBToPEbM03bfr4bxzsQwUEn8qB0eo49xDtViPSuhyn%2F8%2BTtjzXgHRu%2FWCdXEkfvkxrFrTjkp%2BiYJv05rWCpZrbF27O07ecwXExwk45NsK4lesY03V7D%2FlpTqVr8CgyTefl8ZGb5v7D2qnyclJZnxJ9PZo18y0hSeQp%2Fl3vKfcNfqooB7TOtfT1%2BYQKGXjF8nvXDh2%2FqFNO7%2BWvWvn9xY4VhgaF6jPG&X-Amz-Signature=b1c0ca3c74efbd136f25a281d57012b79b5838905f8c835b8070fde941297de7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
