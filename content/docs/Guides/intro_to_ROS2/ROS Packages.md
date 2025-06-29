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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2Q5VGA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD6tt1sIDErRkD7U6BFBMy0rnym%2B3MfKrfF%2FQqB2KhmAiAXyjf%2F8ztJ7eIH872QxHPs5O9wi4IvL0nPSfzHvN7D2iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVMTrlmkL9PEZQ%2FeKtwDYmDsIR7Y8MjMHFJB7jAJJWtYluKbed2Z5U7%2BjfXn0954zg6I6Jl88BsUpGR3gczbVnYSEmbkp0bkYcrUrrxrb1U50TLSwreKkQ%2BIZOD14KhPSqHK2jFfEfsz3SLkmnf9Q8QzbbuDnqIio1io4yrvT4uda6t%2FTJy6tUHzMj20rrJSjh3dfed%2Bz3wn9FyZsfpOefZlOKl4cRGI0FpHBPLpBYInremUqH7dR8wx0Z%2B9KyRO7VMUgCTqic54ve9w67ywwvxWHn98F6KEMq6BaZumqoNYvmtdfQ41SHw3COGMXAjBm4wiG97pIc%2B%2BWFnZszkWCy6jaXFpmsiOjad122QbnrRkJOvjyZ14i4whEdk0dZpfzc8y3wqlPlMfxE%2BSf%2BtlNVGqWyxNaiSQ%2FocgLiy85C3hYDUfk%2FQEv0OjpsmyE5eA0J4E8%2B3ZfejrVDBlL5i7Te5GJnLTzeUZ%2BQcKLn7HxVlLelFeog4WJ2ARxxOLZhOQSfvhwTpsyGONZNwBusevj5JZqY%2F%2B6NeLjvJKtamajfs%2Fk4iPyTNiIhnWDVY4CuQkYzh6ytGDXHdIZDCaHtp0YKQci4fO2dVwIypD0oD3%2BiDurfTsNpAIxbcdUmcUYt8PleZjDUh6oAdddXYwtoGEwwY6pgE0jmJb9%2FuKK8h9bEvrI8lVlGqW9OAifV9oBZJJ3unyXXHH6ZYZuk%2BavPnOi%2FirUyUeD5NIV30MK%2FWCCdH2ePXrZxgU2vovniulFGArvULigXBto%2FIWXmJ0SlKHbCErEUjIkzGgNSL91vlATxwDE09rC99k7BXpa0HDNafLj3HE%2FzQy1Ij3rvvRB6YvyCwgeZP8zYeMg2D%2BpWYJolnqn%2BmWJVdN2cS1&X-Amz-Signature=e491531f20770b6e8021f96d120b12725cea3c8a568e5ea17e122e46ec3589fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2Q5VGA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD6tt1sIDErRkD7U6BFBMy0rnym%2B3MfKrfF%2FQqB2KhmAiAXyjf%2F8ztJ7eIH872QxHPs5O9wi4IvL0nPSfzHvN7D2iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVMTrlmkL9PEZQ%2FeKtwDYmDsIR7Y8MjMHFJB7jAJJWtYluKbed2Z5U7%2BjfXn0954zg6I6Jl88BsUpGR3gczbVnYSEmbkp0bkYcrUrrxrb1U50TLSwreKkQ%2BIZOD14KhPSqHK2jFfEfsz3SLkmnf9Q8QzbbuDnqIio1io4yrvT4uda6t%2FTJy6tUHzMj20rrJSjh3dfed%2Bz3wn9FyZsfpOefZlOKl4cRGI0FpHBPLpBYInremUqH7dR8wx0Z%2B9KyRO7VMUgCTqic54ve9w67ywwvxWHn98F6KEMq6BaZumqoNYvmtdfQ41SHw3COGMXAjBm4wiG97pIc%2B%2BWFnZszkWCy6jaXFpmsiOjad122QbnrRkJOvjyZ14i4whEdk0dZpfzc8y3wqlPlMfxE%2BSf%2BtlNVGqWyxNaiSQ%2FocgLiy85C3hYDUfk%2FQEv0OjpsmyE5eA0J4E8%2B3ZfejrVDBlL5i7Te5GJnLTzeUZ%2BQcKLn7HxVlLelFeog4WJ2ARxxOLZhOQSfvhwTpsyGONZNwBusevj5JZqY%2F%2B6NeLjvJKtamajfs%2Fk4iPyTNiIhnWDVY4CuQkYzh6ytGDXHdIZDCaHtp0YKQci4fO2dVwIypD0oD3%2BiDurfTsNpAIxbcdUmcUYt8PleZjDUh6oAdddXYwtoGEwwY6pgE0jmJb9%2FuKK8h9bEvrI8lVlGqW9OAifV9oBZJJ3unyXXHH6ZYZuk%2BavPnOi%2FirUyUeD5NIV30MK%2FWCCdH2ePXrZxgU2vovniulFGArvULigXBto%2FIWXmJ0SlKHbCErEUjIkzGgNSL91vlATxwDE09rC99k7BXpa0HDNafLj3HE%2FzQy1Ij3rvvRB6YvyCwgeZP8zYeMg2D%2BpWYJolnqn%2BmWJVdN2cS1&X-Amz-Signature=7cac7fff4443c111e5e98319a17a53a47ff80d39b6e674f72f41e0edf6083508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2Q5VGA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD6tt1sIDErRkD7U6BFBMy0rnym%2B3MfKrfF%2FQqB2KhmAiAXyjf%2F8ztJ7eIH872QxHPs5O9wi4IvL0nPSfzHvN7D2iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVMTrlmkL9PEZQ%2FeKtwDYmDsIR7Y8MjMHFJB7jAJJWtYluKbed2Z5U7%2BjfXn0954zg6I6Jl88BsUpGR3gczbVnYSEmbkp0bkYcrUrrxrb1U50TLSwreKkQ%2BIZOD14KhPSqHK2jFfEfsz3SLkmnf9Q8QzbbuDnqIio1io4yrvT4uda6t%2FTJy6tUHzMj20rrJSjh3dfed%2Bz3wn9FyZsfpOefZlOKl4cRGI0FpHBPLpBYInremUqH7dR8wx0Z%2B9KyRO7VMUgCTqic54ve9w67ywwvxWHn98F6KEMq6BaZumqoNYvmtdfQ41SHw3COGMXAjBm4wiG97pIc%2B%2BWFnZszkWCy6jaXFpmsiOjad122QbnrRkJOvjyZ14i4whEdk0dZpfzc8y3wqlPlMfxE%2BSf%2BtlNVGqWyxNaiSQ%2FocgLiy85C3hYDUfk%2FQEv0OjpsmyE5eA0J4E8%2B3ZfejrVDBlL5i7Te5GJnLTzeUZ%2BQcKLn7HxVlLelFeog4WJ2ARxxOLZhOQSfvhwTpsyGONZNwBusevj5JZqY%2F%2B6NeLjvJKtamajfs%2Fk4iPyTNiIhnWDVY4CuQkYzh6ytGDXHdIZDCaHtp0YKQci4fO2dVwIypD0oD3%2BiDurfTsNpAIxbcdUmcUYt8PleZjDUh6oAdddXYwtoGEwwY6pgE0jmJb9%2FuKK8h9bEvrI8lVlGqW9OAifV9oBZJJ3unyXXHH6ZYZuk%2BavPnOi%2FirUyUeD5NIV30MK%2FWCCdH2ePXrZxgU2vovniulFGArvULigXBto%2FIWXmJ0SlKHbCErEUjIkzGgNSL91vlATxwDE09rC99k7BXpa0HDNafLj3HE%2FzQy1Ij3rvvRB6YvyCwgeZP8zYeMg2D%2BpWYJolnqn%2BmWJVdN2cS1&X-Amz-Signature=0f8ab9c67e24da5b68616d13da0e4778a85f5348e6f664a43575897ca927da02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2Q5VGA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD6tt1sIDErRkD7U6BFBMy0rnym%2B3MfKrfF%2FQqB2KhmAiAXyjf%2F8ztJ7eIH872QxHPs5O9wi4IvL0nPSfzHvN7D2iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVMTrlmkL9PEZQ%2FeKtwDYmDsIR7Y8MjMHFJB7jAJJWtYluKbed2Z5U7%2BjfXn0954zg6I6Jl88BsUpGR3gczbVnYSEmbkp0bkYcrUrrxrb1U50TLSwreKkQ%2BIZOD14KhPSqHK2jFfEfsz3SLkmnf9Q8QzbbuDnqIio1io4yrvT4uda6t%2FTJy6tUHzMj20rrJSjh3dfed%2Bz3wn9FyZsfpOefZlOKl4cRGI0FpHBPLpBYInremUqH7dR8wx0Z%2B9KyRO7VMUgCTqic54ve9w67ywwvxWHn98F6KEMq6BaZumqoNYvmtdfQ41SHw3COGMXAjBm4wiG97pIc%2B%2BWFnZszkWCy6jaXFpmsiOjad122QbnrRkJOvjyZ14i4whEdk0dZpfzc8y3wqlPlMfxE%2BSf%2BtlNVGqWyxNaiSQ%2FocgLiy85C3hYDUfk%2FQEv0OjpsmyE5eA0J4E8%2B3ZfejrVDBlL5i7Te5GJnLTzeUZ%2BQcKLn7HxVlLelFeog4WJ2ARxxOLZhOQSfvhwTpsyGONZNwBusevj5JZqY%2F%2B6NeLjvJKtamajfs%2Fk4iPyTNiIhnWDVY4CuQkYzh6ytGDXHdIZDCaHtp0YKQci4fO2dVwIypD0oD3%2BiDurfTsNpAIxbcdUmcUYt8PleZjDUh6oAdddXYwtoGEwwY6pgE0jmJb9%2FuKK8h9bEvrI8lVlGqW9OAifV9oBZJJ3unyXXHH6ZYZuk%2BavPnOi%2FirUyUeD5NIV30MK%2FWCCdH2ePXrZxgU2vovniulFGArvULigXBto%2FIWXmJ0SlKHbCErEUjIkzGgNSL91vlATxwDE09rC99k7BXpa0HDNafLj3HE%2FzQy1Ij3rvvRB6YvyCwgeZP8zYeMg2D%2BpWYJolnqn%2BmWJVdN2cS1&X-Amz-Signature=f3e278a29d7036573d5ec7f371897fd28afae4e0e47d703011a97e47bd5ea1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2Q5VGA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD6tt1sIDErRkD7U6BFBMy0rnym%2B3MfKrfF%2FQqB2KhmAiAXyjf%2F8ztJ7eIH872QxHPs5O9wi4IvL0nPSfzHvN7D2iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVMTrlmkL9PEZQ%2FeKtwDYmDsIR7Y8MjMHFJB7jAJJWtYluKbed2Z5U7%2BjfXn0954zg6I6Jl88BsUpGR3gczbVnYSEmbkp0bkYcrUrrxrb1U50TLSwreKkQ%2BIZOD14KhPSqHK2jFfEfsz3SLkmnf9Q8QzbbuDnqIio1io4yrvT4uda6t%2FTJy6tUHzMj20rrJSjh3dfed%2Bz3wn9FyZsfpOefZlOKl4cRGI0FpHBPLpBYInremUqH7dR8wx0Z%2B9KyRO7VMUgCTqic54ve9w67ywwvxWHn98F6KEMq6BaZumqoNYvmtdfQ41SHw3COGMXAjBm4wiG97pIc%2B%2BWFnZszkWCy6jaXFpmsiOjad122QbnrRkJOvjyZ14i4whEdk0dZpfzc8y3wqlPlMfxE%2BSf%2BtlNVGqWyxNaiSQ%2FocgLiy85C3hYDUfk%2FQEv0OjpsmyE5eA0J4E8%2B3ZfejrVDBlL5i7Te5GJnLTzeUZ%2BQcKLn7HxVlLelFeog4WJ2ARxxOLZhOQSfvhwTpsyGONZNwBusevj5JZqY%2F%2B6NeLjvJKtamajfs%2Fk4iPyTNiIhnWDVY4CuQkYzh6ytGDXHdIZDCaHtp0YKQci4fO2dVwIypD0oD3%2BiDurfTsNpAIxbcdUmcUYt8PleZjDUh6oAdddXYwtoGEwwY6pgE0jmJb9%2FuKK8h9bEvrI8lVlGqW9OAifV9oBZJJ3unyXXHH6ZYZuk%2BavPnOi%2FirUyUeD5NIV30MK%2FWCCdH2ePXrZxgU2vovniulFGArvULigXBto%2FIWXmJ0SlKHbCErEUjIkzGgNSL91vlATxwDE09rC99k7BXpa0HDNafLj3HE%2FzQy1Ij3rvvRB6YvyCwgeZP8zYeMg2D%2BpWYJolnqn%2BmWJVdN2cS1&X-Amz-Signature=b0474449ce43cae0f35fedf329cf11de0a56970ae8a999be20451d71956cd700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2Q5VGA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD6tt1sIDErRkD7U6BFBMy0rnym%2B3MfKrfF%2FQqB2KhmAiAXyjf%2F8ztJ7eIH872QxHPs5O9wi4IvL0nPSfzHvN7D2iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVMTrlmkL9PEZQ%2FeKtwDYmDsIR7Y8MjMHFJB7jAJJWtYluKbed2Z5U7%2BjfXn0954zg6I6Jl88BsUpGR3gczbVnYSEmbkp0bkYcrUrrxrb1U50TLSwreKkQ%2BIZOD14KhPSqHK2jFfEfsz3SLkmnf9Q8QzbbuDnqIio1io4yrvT4uda6t%2FTJy6tUHzMj20rrJSjh3dfed%2Bz3wn9FyZsfpOefZlOKl4cRGI0FpHBPLpBYInremUqH7dR8wx0Z%2B9KyRO7VMUgCTqic54ve9w67ywwvxWHn98F6KEMq6BaZumqoNYvmtdfQ41SHw3COGMXAjBm4wiG97pIc%2B%2BWFnZszkWCy6jaXFpmsiOjad122QbnrRkJOvjyZ14i4whEdk0dZpfzc8y3wqlPlMfxE%2BSf%2BtlNVGqWyxNaiSQ%2FocgLiy85C3hYDUfk%2FQEv0OjpsmyE5eA0J4E8%2B3ZfejrVDBlL5i7Te5GJnLTzeUZ%2BQcKLn7HxVlLelFeog4WJ2ARxxOLZhOQSfvhwTpsyGONZNwBusevj5JZqY%2F%2B6NeLjvJKtamajfs%2Fk4iPyTNiIhnWDVY4CuQkYzh6ytGDXHdIZDCaHtp0YKQci4fO2dVwIypD0oD3%2BiDurfTsNpAIxbcdUmcUYt8PleZjDUh6oAdddXYwtoGEwwY6pgE0jmJb9%2FuKK8h9bEvrI8lVlGqW9OAifV9oBZJJ3unyXXHH6ZYZuk%2BavPnOi%2FirUyUeD5NIV30MK%2FWCCdH2ePXrZxgU2vovniulFGArvULigXBto%2FIWXmJ0SlKHbCErEUjIkzGgNSL91vlATxwDE09rC99k7BXpa0HDNafLj3HE%2FzQy1Ij3rvvRB6YvyCwgeZP8zYeMg2D%2BpWYJolnqn%2BmWJVdN2cS1&X-Amz-Signature=5ac826ebe8a1913b6e9a736a3caa320792d66e6026ddad0d8cac976703938147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2Q5VGA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICD6tt1sIDErRkD7U6BFBMy0rnym%2B3MfKrfF%2FQqB2KhmAiAXyjf%2F8ztJ7eIH872QxHPs5O9wi4IvL0nPSfzHvN7D2iqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJVMTrlmkL9PEZQ%2FeKtwDYmDsIR7Y8MjMHFJB7jAJJWtYluKbed2Z5U7%2BjfXn0954zg6I6Jl88BsUpGR3gczbVnYSEmbkp0bkYcrUrrxrb1U50TLSwreKkQ%2BIZOD14KhPSqHK2jFfEfsz3SLkmnf9Q8QzbbuDnqIio1io4yrvT4uda6t%2FTJy6tUHzMj20rrJSjh3dfed%2Bz3wn9FyZsfpOefZlOKl4cRGI0FpHBPLpBYInremUqH7dR8wx0Z%2B9KyRO7VMUgCTqic54ve9w67ywwvxWHn98F6KEMq6BaZumqoNYvmtdfQ41SHw3COGMXAjBm4wiG97pIc%2B%2BWFnZszkWCy6jaXFpmsiOjad122QbnrRkJOvjyZ14i4whEdk0dZpfzc8y3wqlPlMfxE%2BSf%2BtlNVGqWyxNaiSQ%2FocgLiy85C3hYDUfk%2FQEv0OjpsmyE5eA0J4E8%2B3ZfejrVDBlL5i7Te5GJnLTzeUZ%2BQcKLn7HxVlLelFeog4WJ2ARxxOLZhOQSfvhwTpsyGONZNwBusevj5JZqY%2F%2B6NeLjvJKtamajfs%2Fk4iPyTNiIhnWDVY4CuQkYzh6ytGDXHdIZDCaHtp0YKQci4fO2dVwIypD0oD3%2BiDurfTsNpAIxbcdUmcUYt8PleZjDUh6oAdddXYwtoGEwwY6pgE0jmJb9%2FuKK8h9bEvrI8lVlGqW9OAifV9oBZJJ3unyXXHH6ZYZuk%2BavPnOi%2FirUyUeD5NIV30MK%2FWCCdH2ePXrZxgU2vovniulFGArvULigXBto%2FIWXmJ0SlKHbCErEUjIkzGgNSL91vlATxwDE09rC99k7BXpa0HDNafLj3HE%2FzQy1Ij3rvvRB6YvyCwgeZP8zYeMg2D%2BpWYJolnqn%2BmWJVdN2cS1&X-Amz-Signature=1efe7aab84c51caae3f8bfb05871f2184fa44e7f73b6cc224fbcf9d4d4b7aa65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
