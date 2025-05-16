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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVLJ54G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2crnvrxWBfSWonnq7jdpNbzSYlAx45JdE1CeyNrRPVAiAInb%2FK3Mwu26GtkBf4pp44%2FUKlESBsqx6ZQQFWM2gKLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsGjW31utfCNqvat5KtwDwC83r9sVl7k2Du9czF8SyuyCpI7TrJvK9kCRW1H6bojZsRJhQKw9IK7W735rmhz3tvxDS8WrGk7M%2FC8VU6SmbA%2FON74GQsMrHoQhKh0AyFJOUAfWdAItziUMJm4cprCI0wBwc5IP%2BDRbagTdn%2FlW7MFEaXRlYvZEzs9SWSYaPZDsoEjCvLY2Py5RuZRZIeA8Yp2s%2BJp26JC%2FbuRgF9o1AgjcO44n9SykPx6VpwM%2BQu4ybmCOJtVChG3pWo28L93dOo9Y9wY6wD3t14H2k6ksLZtzIRTZOTBvnBpst4GUIpS6s7F%2BklhFxn3XkAKOug9TRQu2fUsp7SMJ1YhK9VAlj%2FPVIQJTKyedZJvz5sP1uVuEhtbCAIMJYqjdTvmWKLgcyQtUBqENxEX2DjgoIguN648Ki1eR0HaqBV7t%2FaK1L%2BHD1AE0eoxOi4nXZJE96R9JuGnKizwRRphLZLccmO3atcLsnQ0SmNoCb9e4M3Kwp2xrw%2By0Y7gFm5CXM7HUo%2BQlp2eiysCvC9camXeN1sLlKhEqaYv2U3m7fPq7RxT%2BbeUO9z%2B7%2FxbP2%2B%2BcI2rC2%2F52qMv9THuBi%2Fa9yCrsrV%2FtpGGmj15e1Ut5eFF3Vmi%2FsmH%2Fu2ondCgJ8QcynlYwjvmewQY6pgGi9NOHtrL5F47OMgAbzHlIvkTCfqVq7kOncvMX8kgR8Z4lo6AQqvRvUAVW946rAikpk%2FsFjAiz%2Fme9hwGHepsvg1%2Fx570AAHMQFrHoM3R2Q%2FPpLgRw6IkYq5B0C8z%2BVZxrIlIU%2F9yAsP2OqaUmF08DXM%2BaRgX0D0bS21uwFFqoitmt2o6u%2FHDzSQZJE6vVkNs4prujUjq3YJAaNrWyEx9ZjZWzjZnk&X-Amz-Signature=7e4e3f0450ff0fbd57bb7b11c5a6f140899024db14747475d339eef3968ef38b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVLJ54G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2crnvrxWBfSWonnq7jdpNbzSYlAx45JdE1CeyNrRPVAiAInb%2FK3Mwu26GtkBf4pp44%2FUKlESBsqx6ZQQFWM2gKLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsGjW31utfCNqvat5KtwDwC83r9sVl7k2Du9czF8SyuyCpI7TrJvK9kCRW1H6bojZsRJhQKw9IK7W735rmhz3tvxDS8WrGk7M%2FC8VU6SmbA%2FON74GQsMrHoQhKh0AyFJOUAfWdAItziUMJm4cprCI0wBwc5IP%2BDRbagTdn%2FlW7MFEaXRlYvZEzs9SWSYaPZDsoEjCvLY2Py5RuZRZIeA8Yp2s%2BJp26JC%2FbuRgF9o1AgjcO44n9SykPx6VpwM%2BQu4ybmCOJtVChG3pWo28L93dOo9Y9wY6wD3t14H2k6ksLZtzIRTZOTBvnBpst4GUIpS6s7F%2BklhFxn3XkAKOug9TRQu2fUsp7SMJ1YhK9VAlj%2FPVIQJTKyedZJvz5sP1uVuEhtbCAIMJYqjdTvmWKLgcyQtUBqENxEX2DjgoIguN648Ki1eR0HaqBV7t%2FaK1L%2BHD1AE0eoxOi4nXZJE96R9JuGnKizwRRphLZLccmO3atcLsnQ0SmNoCb9e4M3Kwp2xrw%2By0Y7gFm5CXM7HUo%2BQlp2eiysCvC9camXeN1sLlKhEqaYv2U3m7fPq7RxT%2BbeUO9z%2B7%2FxbP2%2B%2BcI2rC2%2F52qMv9THuBi%2Fa9yCrsrV%2FtpGGmj15e1Ut5eFF3Vmi%2FsmH%2Fu2ondCgJ8QcynlYwjvmewQY6pgGi9NOHtrL5F47OMgAbzHlIvkTCfqVq7kOncvMX8kgR8Z4lo6AQqvRvUAVW946rAikpk%2FsFjAiz%2Fme9hwGHepsvg1%2Fx570AAHMQFrHoM3R2Q%2FPpLgRw6IkYq5B0C8z%2BVZxrIlIU%2F9yAsP2OqaUmF08DXM%2BaRgX0D0bS21uwFFqoitmt2o6u%2FHDzSQZJE6vVkNs4prujUjq3YJAaNrWyEx9ZjZWzjZnk&X-Amz-Signature=54d734c0b808d93210b424961aa8440b30e3816af0abbc3bc6478dbc6b938128&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVLJ54G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2crnvrxWBfSWonnq7jdpNbzSYlAx45JdE1CeyNrRPVAiAInb%2FK3Mwu26GtkBf4pp44%2FUKlESBsqx6ZQQFWM2gKLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsGjW31utfCNqvat5KtwDwC83r9sVl7k2Du9czF8SyuyCpI7TrJvK9kCRW1H6bojZsRJhQKw9IK7W735rmhz3tvxDS8WrGk7M%2FC8VU6SmbA%2FON74GQsMrHoQhKh0AyFJOUAfWdAItziUMJm4cprCI0wBwc5IP%2BDRbagTdn%2FlW7MFEaXRlYvZEzs9SWSYaPZDsoEjCvLY2Py5RuZRZIeA8Yp2s%2BJp26JC%2FbuRgF9o1AgjcO44n9SykPx6VpwM%2BQu4ybmCOJtVChG3pWo28L93dOo9Y9wY6wD3t14H2k6ksLZtzIRTZOTBvnBpst4GUIpS6s7F%2BklhFxn3XkAKOug9TRQu2fUsp7SMJ1YhK9VAlj%2FPVIQJTKyedZJvz5sP1uVuEhtbCAIMJYqjdTvmWKLgcyQtUBqENxEX2DjgoIguN648Ki1eR0HaqBV7t%2FaK1L%2BHD1AE0eoxOi4nXZJE96R9JuGnKizwRRphLZLccmO3atcLsnQ0SmNoCb9e4M3Kwp2xrw%2By0Y7gFm5CXM7HUo%2BQlp2eiysCvC9camXeN1sLlKhEqaYv2U3m7fPq7RxT%2BbeUO9z%2B7%2FxbP2%2B%2BcI2rC2%2F52qMv9THuBi%2Fa9yCrsrV%2FtpGGmj15e1Ut5eFF3Vmi%2FsmH%2Fu2ondCgJ8QcynlYwjvmewQY6pgGi9NOHtrL5F47OMgAbzHlIvkTCfqVq7kOncvMX8kgR8Z4lo6AQqvRvUAVW946rAikpk%2FsFjAiz%2Fme9hwGHepsvg1%2Fx570AAHMQFrHoM3R2Q%2FPpLgRw6IkYq5B0C8z%2BVZxrIlIU%2F9yAsP2OqaUmF08DXM%2BaRgX0D0bS21uwFFqoitmt2o6u%2FHDzSQZJE6vVkNs4prujUjq3YJAaNrWyEx9ZjZWzjZnk&X-Amz-Signature=147a1867e223eaea623560e1328083c7c1bfa2d27cd51a0d011c90e105b3ebb8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVLJ54G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2crnvrxWBfSWonnq7jdpNbzSYlAx45JdE1CeyNrRPVAiAInb%2FK3Mwu26GtkBf4pp44%2FUKlESBsqx6ZQQFWM2gKLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsGjW31utfCNqvat5KtwDwC83r9sVl7k2Du9czF8SyuyCpI7TrJvK9kCRW1H6bojZsRJhQKw9IK7W735rmhz3tvxDS8WrGk7M%2FC8VU6SmbA%2FON74GQsMrHoQhKh0AyFJOUAfWdAItziUMJm4cprCI0wBwc5IP%2BDRbagTdn%2FlW7MFEaXRlYvZEzs9SWSYaPZDsoEjCvLY2Py5RuZRZIeA8Yp2s%2BJp26JC%2FbuRgF9o1AgjcO44n9SykPx6VpwM%2BQu4ybmCOJtVChG3pWo28L93dOo9Y9wY6wD3t14H2k6ksLZtzIRTZOTBvnBpst4GUIpS6s7F%2BklhFxn3XkAKOug9TRQu2fUsp7SMJ1YhK9VAlj%2FPVIQJTKyedZJvz5sP1uVuEhtbCAIMJYqjdTvmWKLgcyQtUBqENxEX2DjgoIguN648Ki1eR0HaqBV7t%2FaK1L%2BHD1AE0eoxOi4nXZJE96R9JuGnKizwRRphLZLccmO3atcLsnQ0SmNoCb9e4M3Kwp2xrw%2By0Y7gFm5CXM7HUo%2BQlp2eiysCvC9camXeN1sLlKhEqaYv2U3m7fPq7RxT%2BbeUO9z%2B7%2FxbP2%2B%2BcI2rC2%2F52qMv9THuBi%2Fa9yCrsrV%2FtpGGmj15e1Ut5eFF3Vmi%2FsmH%2Fu2ondCgJ8QcynlYwjvmewQY6pgGi9NOHtrL5F47OMgAbzHlIvkTCfqVq7kOncvMX8kgR8Z4lo6AQqvRvUAVW946rAikpk%2FsFjAiz%2Fme9hwGHepsvg1%2Fx570AAHMQFrHoM3R2Q%2FPpLgRw6IkYq5B0C8z%2BVZxrIlIU%2F9yAsP2OqaUmF08DXM%2BaRgX0D0bS21uwFFqoitmt2o6u%2FHDzSQZJE6vVkNs4prujUjq3YJAaNrWyEx9ZjZWzjZnk&X-Amz-Signature=fe6b8fd2d1387937ae3542c0bf0b64aa346b1c88626c989da325bba1a41f7af4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVLJ54G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2crnvrxWBfSWonnq7jdpNbzSYlAx45JdE1CeyNrRPVAiAInb%2FK3Mwu26GtkBf4pp44%2FUKlESBsqx6ZQQFWM2gKLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsGjW31utfCNqvat5KtwDwC83r9sVl7k2Du9czF8SyuyCpI7TrJvK9kCRW1H6bojZsRJhQKw9IK7W735rmhz3tvxDS8WrGk7M%2FC8VU6SmbA%2FON74GQsMrHoQhKh0AyFJOUAfWdAItziUMJm4cprCI0wBwc5IP%2BDRbagTdn%2FlW7MFEaXRlYvZEzs9SWSYaPZDsoEjCvLY2Py5RuZRZIeA8Yp2s%2BJp26JC%2FbuRgF9o1AgjcO44n9SykPx6VpwM%2BQu4ybmCOJtVChG3pWo28L93dOo9Y9wY6wD3t14H2k6ksLZtzIRTZOTBvnBpst4GUIpS6s7F%2BklhFxn3XkAKOug9TRQu2fUsp7SMJ1YhK9VAlj%2FPVIQJTKyedZJvz5sP1uVuEhtbCAIMJYqjdTvmWKLgcyQtUBqENxEX2DjgoIguN648Ki1eR0HaqBV7t%2FaK1L%2BHD1AE0eoxOi4nXZJE96R9JuGnKizwRRphLZLccmO3atcLsnQ0SmNoCb9e4M3Kwp2xrw%2By0Y7gFm5CXM7HUo%2BQlp2eiysCvC9camXeN1sLlKhEqaYv2U3m7fPq7RxT%2BbeUO9z%2B7%2FxbP2%2B%2BcI2rC2%2F52qMv9THuBi%2Fa9yCrsrV%2FtpGGmj15e1Ut5eFF3Vmi%2FsmH%2Fu2ondCgJ8QcynlYwjvmewQY6pgGi9NOHtrL5F47OMgAbzHlIvkTCfqVq7kOncvMX8kgR8Z4lo6AQqvRvUAVW946rAikpk%2FsFjAiz%2Fme9hwGHepsvg1%2Fx570AAHMQFrHoM3R2Q%2FPpLgRw6IkYq5B0C8z%2BVZxrIlIU%2F9yAsP2OqaUmF08DXM%2BaRgX0D0bS21uwFFqoitmt2o6u%2FHDzSQZJE6vVkNs4prujUjq3YJAaNrWyEx9ZjZWzjZnk&X-Amz-Signature=c3bed58c5e48703e1ed4a6e175b0fb020c14fe50a167de31aed6a9cde37778ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVLJ54G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2crnvrxWBfSWonnq7jdpNbzSYlAx45JdE1CeyNrRPVAiAInb%2FK3Mwu26GtkBf4pp44%2FUKlESBsqx6ZQQFWM2gKLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsGjW31utfCNqvat5KtwDwC83r9sVl7k2Du9czF8SyuyCpI7TrJvK9kCRW1H6bojZsRJhQKw9IK7W735rmhz3tvxDS8WrGk7M%2FC8VU6SmbA%2FON74GQsMrHoQhKh0AyFJOUAfWdAItziUMJm4cprCI0wBwc5IP%2BDRbagTdn%2FlW7MFEaXRlYvZEzs9SWSYaPZDsoEjCvLY2Py5RuZRZIeA8Yp2s%2BJp26JC%2FbuRgF9o1AgjcO44n9SykPx6VpwM%2BQu4ybmCOJtVChG3pWo28L93dOo9Y9wY6wD3t14H2k6ksLZtzIRTZOTBvnBpst4GUIpS6s7F%2BklhFxn3XkAKOug9TRQu2fUsp7SMJ1YhK9VAlj%2FPVIQJTKyedZJvz5sP1uVuEhtbCAIMJYqjdTvmWKLgcyQtUBqENxEX2DjgoIguN648Ki1eR0HaqBV7t%2FaK1L%2BHD1AE0eoxOi4nXZJE96R9JuGnKizwRRphLZLccmO3atcLsnQ0SmNoCb9e4M3Kwp2xrw%2By0Y7gFm5CXM7HUo%2BQlp2eiysCvC9camXeN1sLlKhEqaYv2U3m7fPq7RxT%2BbeUO9z%2B7%2FxbP2%2B%2BcI2rC2%2F52qMv9THuBi%2Fa9yCrsrV%2FtpGGmj15e1Ut5eFF3Vmi%2FsmH%2Fu2ondCgJ8QcynlYwjvmewQY6pgGi9NOHtrL5F47OMgAbzHlIvkTCfqVq7kOncvMX8kgR8Z4lo6AQqvRvUAVW946rAikpk%2FsFjAiz%2Fme9hwGHepsvg1%2Fx570AAHMQFrHoM3R2Q%2FPpLgRw6IkYq5B0C8z%2BVZxrIlIU%2F9yAsP2OqaUmF08DXM%2BaRgX0D0bS21uwFFqoitmt2o6u%2FHDzSQZJE6vVkNs4prujUjq3YJAaNrWyEx9ZjZWzjZnk&X-Amz-Signature=f166aabb7bb9c3f1977bf1597aed726cb2bb71af0039ebafd3f4e16eff2e0932&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVLJ54G%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2crnvrxWBfSWonnq7jdpNbzSYlAx45JdE1CeyNrRPVAiAInb%2FK3Mwu26GtkBf4pp44%2FUKlESBsqx6ZQQFWM2gKLyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsGjW31utfCNqvat5KtwDwC83r9sVl7k2Du9czF8SyuyCpI7TrJvK9kCRW1H6bojZsRJhQKw9IK7W735rmhz3tvxDS8WrGk7M%2FC8VU6SmbA%2FON74GQsMrHoQhKh0AyFJOUAfWdAItziUMJm4cprCI0wBwc5IP%2BDRbagTdn%2FlW7MFEaXRlYvZEzs9SWSYaPZDsoEjCvLY2Py5RuZRZIeA8Yp2s%2BJp26JC%2FbuRgF9o1AgjcO44n9SykPx6VpwM%2BQu4ybmCOJtVChG3pWo28L93dOo9Y9wY6wD3t14H2k6ksLZtzIRTZOTBvnBpst4GUIpS6s7F%2BklhFxn3XkAKOug9TRQu2fUsp7SMJ1YhK9VAlj%2FPVIQJTKyedZJvz5sP1uVuEhtbCAIMJYqjdTvmWKLgcyQtUBqENxEX2DjgoIguN648Ki1eR0HaqBV7t%2FaK1L%2BHD1AE0eoxOi4nXZJE96R9JuGnKizwRRphLZLccmO3atcLsnQ0SmNoCb9e4M3Kwp2xrw%2By0Y7gFm5CXM7HUo%2BQlp2eiysCvC9camXeN1sLlKhEqaYv2U3m7fPq7RxT%2BbeUO9z%2B7%2FxbP2%2B%2BcI2rC2%2F52qMv9THuBi%2Fa9yCrsrV%2FtpGGmj15e1Ut5eFF3Vmi%2FsmH%2Fu2ondCgJ8QcynlYwjvmewQY6pgGi9NOHtrL5F47OMgAbzHlIvkTCfqVq7kOncvMX8kgR8Z4lo6AQqvRvUAVW946rAikpk%2FsFjAiz%2Fme9hwGHepsvg1%2Fx570AAHMQFrHoM3R2Q%2FPpLgRw6IkYq5B0C8z%2BVZxrIlIU%2F9yAsP2OqaUmF08DXM%2BaRgX0D0bS21uwFFqoitmt2o6u%2FHDzSQZJE6vVkNs4prujUjq3YJAaNrWyEx9ZjZWzjZnk&X-Amz-Signature=de1a7316d00c605b991b9bdc21caa15fcdf5dd0eb267d8e35c5a9b2c69e0f546&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
