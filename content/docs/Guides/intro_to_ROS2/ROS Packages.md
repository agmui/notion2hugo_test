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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGCRH4V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKoOEVlN4FTXKAMNjGdojyqt8WuG3fYdvxdCWImY3RgIhAMWiCP5%2FD0UwUkhTi0Xi4NXPg%2FQBJsThxVGuNs4cAUZ7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzNVerJONz0gPLTpD4q3AMXejHU2ZV7tGqjyIGRkObI50HxKo6YyBWf7Y7pSKe7V0iJ5Q5zJmhaiB0hpekvgqmRA9kAVyAPd%2B5yTeV7geLbianvdOBHoNFWXuBLh0Qz3E4xhDVXq64nr1is%2BnP3cboGEXBUHw%2BQsWWlgPAR%2FTsnE1Xss5uTZp%2Ff2LU2naOTQz2apTlGceZq2YoSeDwYFYmtt2CGbepIjgQL6bKXt80Dk8F0BAxA3ktBJGfiE0ODYOe2dYCs6nFf4lVzW76mEgwwHdgLf%2BKYOSVT%2Bp%2BJ4B5qc7P2%2Bx7h1HkZVlBoo79RwoAN10Pyh8GP84%2BSa0WMPwffc4c3cRsmetanC86pCiKl1mYZdo2EXJpQzMav0qyP1adFn1K4jbHX63Tgb3HR20LtvcPNRiwXe8m4LDZTln6T8n4zthN3S5emut33FgSXH0JOeCJbeB3YSoDviqk7cCXF4yGBdgni4r50MVg8K5n%2BQquO35Onzm4EU9vrgxbi2C7jy%2Bq40m1l7iJnJ%2FemkmijrTaaQ81Iqxl2wPvjjW76oCtLqH4Dew0jLAZk83v%2BEh2o642mJWU7%2BOZcJ3k%2FZ7m6JwR51Mw0lNOoumpmO%2BTYOmA3R0CySglJmzRKkQdR5%2FOnAaTyI4zo3DCWtDDmvNnBBjqkAZdbxVMLlHP5AOV1X7bm6ZVCbu7En192IhZc1AZTGvf96dy%2FQXtvbn%2FHWHmDJgQqZrbXCUqKQwsQEw4B0AfJI9DqMk2DVpXbGNhwkEAm%2Ff%2Bi77b9DyGT4W%2B8abXAyH3y94XLXpw0ecAl10OLKDm6zGA6CNvrz2JxgPry6UxCUfW8owNKIQqRRZGBpW5GAWdOuf6NzqwDyMQ6xq7UtOukKk2wNSNV&X-Amz-Signature=b656f6a22bb29b23b4eb3d92dbf0a11c75dddc79a4b0ae682c0d89e132a89ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGCRH4V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKoOEVlN4FTXKAMNjGdojyqt8WuG3fYdvxdCWImY3RgIhAMWiCP5%2FD0UwUkhTi0Xi4NXPg%2FQBJsThxVGuNs4cAUZ7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzNVerJONz0gPLTpD4q3AMXejHU2ZV7tGqjyIGRkObI50HxKo6YyBWf7Y7pSKe7V0iJ5Q5zJmhaiB0hpekvgqmRA9kAVyAPd%2B5yTeV7geLbianvdOBHoNFWXuBLh0Qz3E4xhDVXq64nr1is%2BnP3cboGEXBUHw%2BQsWWlgPAR%2FTsnE1Xss5uTZp%2Ff2LU2naOTQz2apTlGceZq2YoSeDwYFYmtt2CGbepIjgQL6bKXt80Dk8F0BAxA3ktBJGfiE0ODYOe2dYCs6nFf4lVzW76mEgwwHdgLf%2BKYOSVT%2Bp%2BJ4B5qc7P2%2Bx7h1HkZVlBoo79RwoAN10Pyh8GP84%2BSa0WMPwffc4c3cRsmetanC86pCiKl1mYZdo2EXJpQzMav0qyP1adFn1K4jbHX63Tgb3HR20LtvcPNRiwXe8m4LDZTln6T8n4zthN3S5emut33FgSXH0JOeCJbeB3YSoDviqk7cCXF4yGBdgni4r50MVg8K5n%2BQquO35Onzm4EU9vrgxbi2C7jy%2Bq40m1l7iJnJ%2FemkmijrTaaQ81Iqxl2wPvjjW76oCtLqH4Dew0jLAZk83v%2BEh2o642mJWU7%2BOZcJ3k%2FZ7m6JwR51Mw0lNOoumpmO%2BTYOmA3R0CySglJmzRKkQdR5%2FOnAaTyI4zo3DCWtDDmvNnBBjqkAZdbxVMLlHP5AOV1X7bm6ZVCbu7En192IhZc1AZTGvf96dy%2FQXtvbn%2FHWHmDJgQqZrbXCUqKQwsQEw4B0AfJI9DqMk2DVpXbGNhwkEAm%2Ff%2Bi77b9DyGT4W%2B8abXAyH3y94XLXpw0ecAl10OLKDm6zGA6CNvrz2JxgPry6UxCUfW8owNKIQqRRZGBpW5GAWdOuf6NzqwDyMQ6xq7UtOukKk2wNSNV&X-Amz-Signature=688a972066ea489536d1488cb41229ae38e6860b99eb1e0cd81f8ffad7234d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGCRH4V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKoOEVlN4FTXKAMNjGdojyqt8WuG3fYdvxdCWImY3RgIhAMWiCP5%2FD0UwUkhTi0Xi4NXPg%2FQBJsThxVGuNs4cAUZ7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzNVerJONz0gPLTpD4q3AMXejHU2ZV7tGqjyIGRkObI50HxKo6YyBWf7Y7pSKe7V0iJ5Q5zJmhaiB0hpekvgqmRA9kAVyAPd%2B5yTeV7geLbianvdOBHoNFWXuBLh0Qz3E4xhDVXq64nr1is%2BnP3cboGEXBUHw%2BQsWWlgPAR%2FTsnE1Xss5uTZp%2Ff2LU2naOTQz2apTlGceZq2YoSeDwYFYmtt2CGbepIjgQL6bKXt80Dk8F0BAxA3ktBJGfiE0ODYOe2dYCs6nFf4lVzW76mEgwwHdgLf%2BKYOSVT%2Bp%2BJ4B5qc7P2%2Bx7h1HkZVlBoo79RwoAN10Pyh8GP84%2BSa0WMPwffc4c3cRsmetanC86pCiKl1mYZdo2EXJpQzMav0qyP1adFn1K4jbHX63Tgb3HR20LtvcPNRiwXe8m4LDZTln6T8n4zthN3S5emut33FgSXH0JOeCJbeB3YSoDviqk7cCXF4yGBdgni4r50MVg8K5n%2BQquO35Onzm4EU9vrgxbi2C7jy%2Bq40m1l7iJnJ%2FemkmijrTaaQ81Iqxl2wPvjjW76oCtLqH4Dew0jLAZk83v%2BEh2o642mJWU7%2BOZcJ3k%2FZ7m6JwR51Mw0lNOoumpmO%2BTYOmA3R0CySglJmzRKkQdR5%2FOnAaTyI4zo3DCWtDDmvNnBBjqkAZdbxVMLlHP5AOV1X7bm6ZVCbu7En192IhZc1AZTGvf96dy%2FQXtvbn%2FHWHmDJgQqZrbXCUqKQwsQEw4B0AfJI9DqMk2DVpXbGNhwkEAm%2Ff%2Bi77b9DyGT4W%2B8abXAyH3y94XLXpw0ecAl10OLKDm6zGA6CNvrz2JxgPry6UxCUfW8owNKIQqRRZGBpW5GAWdOuf6NzqwDyMQ6xq7UtOukKk2wNSNV&X-Amz-Signature=b2e9dcc723d6745688d09f5620deedfb4bcf7fd036740ea74f15807529c456b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGCRH4V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKoOEVlN4FTXKAMNjGdojyqt8WuG3fYdvxdCWImY3RgIhAMWiCP5%2FD0UwUkhTi0Xi4NXPg%2FQBJsThxVGuNs4cAUZ7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzNVerJONz0gPLTpD4q3AMXejHU2ZV7tGqjyIGRkObI50HxKo6YyBWf7Y7pSKe7V0iJ5Q5zJmhaiB0hpekvgqmRA9kAVyAPd%2B5yTeV7geLbianvdOBHoNFWXuBLh0Qz3E4xhDVXq64nr1is%2BnP3cboGEXBUHw%2BQsWWlgPAR%2FTsnE1Xss5uTZp%2Ff2LU2naOTQz2apTlGceZq2YoSeDwYFYmtt2CGbepIjgQL6bKXt80Dk8F0BAxA3ktBJGfiE0ODYOe2dYCs6nFf4lVzW76mEgwwHdgLf%2BKYOSVT%2Bp%2BJ4B5qc7P2%2Bx7h1HkZVlBoo79RwoAN10Pyh8GP84%2BSa0WMPwffc4c3cRsmetanC86pCiKl1mYZdo2EXJpQzMav0qyP1adFn1K4jbHX63Tgb3HR20LtvcPNRiwXe8m4LDZTln6T8n4zthN3S5emut33FgSXH0JOeCJbeB3YSoDviqk7cCXF4yGBdgni4r50MVg8K5n%2BQquO35Onzm4EU9vrgxbi2C7jy%2Bq40m1l7iJnJ%2FemkmijrTaaQ81Iqxl2wPvjjW76oCtLqH4Dew0jLAZk83v%2BEh2o642mJWU7%2BOZcJ3k%2FZ7m6JwR51Mw0lNOoumpmO%2BTYOmA3R0CySglJmzRKkQdR5%2FOnAaTyI4zo3DCWtDDmvNnBBjqkAZdbxVMLlHP5AOV1X7bm6ZVCbu7En192IhZc1AZTGvf96dy%2FQXtvbn%2FHWHmDJgQqZrbXCUqKQwsQEw4B0AfJI9DqMk2DVpXbGNhwkEAm%2Ff%2Bi77b9DyGT4W%2B8abXAyH3y94XLXpw0ecAl10OLKDm6zGA6CNvrz2JxgPry6UxCUfW8owNKIQqRRZGBpW5GAWdOuf6NzqwDyMQ6xq7UtOukKk2wNSNV&X-Amz-Signature=2622c722bd6f50cf1acafc89fcad0213f557fbe7cd8291726da9d44d3b339079&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGCRH4V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKoOEVlN4FTXKAMNjGdojyqt8WuG3fYdvxdCWImY3RgIhAMWiCP5%2FD0UwUkhTi0Xi4NXPg%2FQBJsThxVGuNs4cAUZ7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzNVerJONz0gPLTpD4q3AMXejHU2ZV7tGqjyIGRkObI50HxKo6YyBWf7Y7pSKe7V0iJ5Q5zJmhaiB0hpekvgqmRA9kAVyAPd%2B5yTeV7geLbianvdOBHoNFWXuBLh0Qz3E4xhDVXq64nr1is%2BnP3cboGEXBUHw%2BQsWWlgPAR%2FTsnE1Xss5uTZp%2Ff2LU2naOTQz2apTlGceZq2YoSeDwYFYmtt2CGbepIjgQL6bKXt80Dk8F0BAxA3ktBJGfiE0ODYOe2dYCs6nFf4lVzW76mEgwwHdgLf%2BKYOSVT%2Bp%2BJ4B5qc7P2%2Bx7h1HkZVlBoo79RwoAN10Pyh8GP84%2BSa0WMPwffc4c3cRsmetanC86pCiKl1mYZdo2EXJpQzMav0qyP1adFn1K4jbHX63Tgb3HR20LtvcPNRiwXe8m4LDZTln6T8n4zthN3S5emut33FgSXH0JOeCJbeB3YSoDviqk7cCXF4yGBdgni4r50MVg8K5n%2BQquO35Onzm4EU9vrgxbi2C7jy%2Bq40m1l7iJnJ%2FemkmijrTaaQ81Iqxl2wPvjjW76oCtLqH4Dew0jLAZk83v%2BEh2o642mJWU7%2BOZcJ3k%2FZ7m6JwR51Mw0lNOoumpmO%2BTYOmA3R0CySglJmzRKkQdR5%2FOnAaTyI4zo3DCWtDDmvNnBBjqkAZdbxVMLlHP5AOV1X7bm6ZVCbu7En192IhZc1AZTGvf96dy%2FQXtvbn%2FHWHmDJgQqZrbXCUqKQwsQEw4B0AfJI9DqMk2DVpXbGNhwkEAm%2Ff%2Bi77b9DyGT4W%2B8abXAyH3y94XLXpw0ecAl10OLKDm6zGA6CNvrz2JxgPry6UxCUfW8owNKIQqRRZGBpW5GAWdOuf6NzqwDyMQ6xq7UtOukKk2wNSNV&X-Amz-Signature=a99e7d7e6a708148d8127bd3cf8902cc960fa002cf73c67faf691340be0978d4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGCRH4V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKoOEVlN4FTXKAMNjGdojyqt8WuG3fYdvxdCWImY3RgIhAMWiCP5%2FD0UwUkhTi0Xi4NXPg%2FQBJsThxVGuNs4cAUZ7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzNVerJONz0gPLTpD4q3AMXejHU2ZV7tGqjyIGRkObI50HxKo6YyBWf7Y7pSKe7V0iJ5Q5zJmhaiB0hpekvgqmRA9kAVyAPd%2B5yTeV7geLbianvdOBHoNFWXuBLh0Qz3E4xhDVXq64nr1is%2BnP3cboGEXBUHw%2BQsWWlgPAR%2FTsnE1Xss5uTZp%2Ff2LU2naOTQz2apTlGceZq2YoSeDwYFYmtt2CGbepIjgQL6bKXt80Dk8F0BAxA3ktBJGfiE0ODYOe2dYCs6nFf4lVzW76mEgwwHdgLf%2BKYOSVT%2Bp%2BJ4B5qc7P2%2Bx7h1HkZVlBoo79RwoAN10Pyh8GP84%2BSa0WMPwffc4c3cRsmetanC86pCiKl1mYZdo2EXJpQzMav0qyP1adFn1K4jbHX63Tgb3HR20LtvcPNRiwXe8m4LDZTln6T8n4zthN3S5emut33FgSXH0JOeCJbeB3YSoDviqk7cCXF4yGBdgni4r50MVg8K5n%2BQquO35Onzm4EU9vrgxbi2C7jy%2Bq40m1l7iJnJ%2FemkmijrTaaQ81Iqxl2wPvjjW76oCtLqH4Dew0jLAZk83v%2BEh2o642mJWU7%2BOZcJ3k%2FZ7m6JwR51Mw0lNOoumpmO%2BTYOmA3R0CySglJmzRKkQdR5%2FOnAaTyI4zo3DCWtDDmvNnBBjqkAZdbxVMLlHP5AOV1X7bm6ZVCbu7En192IhZc1AZTGvf96dy%2FQXtvbn%2FHWHmDJgQqZrbXCUqKQwsQEw4B0AfJI9DqMk2DVpXbGNhwkEAm%2Ff%2Bi77b9DyGT4W%2B8abXAyH3y94XLXpw0ecAl10OLKDm6zGA6CNvrz2JxgPry6UxCUfW8owNKIQqRRZGBpW5GAWdOuf6NzqwDyMQ6xq7UtOukKk2wNSNV&X-Amz-Signature=bd077280bab0237cacfa7476d5412d9e676e5a219c22f4a6745f54287b1da641&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXGCRH4V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxKoOEVlN4FTXKAMNjGdojyqt8WuG3fYdvxdCWImY3RgIhAMWiCP5%2FD0UwUkhTi0Xi4NXPg%2FQBJsThxVGuNs4cAUZ7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzNVerJONz0gPLTpD4q3AMXejHU2ZV7tGqjyIGRkObI50HxKo6YyBWf7Y7pSKe7V0iJ5Q5zJmhaiB0hpekvgqmRA9kAVyAPd%2B5yTeV7geLbianvdOBHoNFWXuBLh0Qz3E4xhDVXq64nr1is%2BnP3cboGEXBUHw%2BQsWWlgPAR%2FTsnE1Xss5uTZp%2Ff2LU2naOTQz2apTlGceZq2YoSeDwYFYmtt2CGbepIjgQL6bKXt80Dk8F0BAxA3ktBJGfiE0ODYOe2dYCs6nFf4lVzW76mEgwwHdgLf%2BKYOSVT%2Bp%2BJ4B5qc7P2%2Bx7h1HkZVlBoo79RwoAN10Pyh8GP84%2BSa0WMPwffc4c3cRsmetanC86pCiKl1mYZdo2EXJpQzMav0qyP1adFn1K4jbHX63Tgb3HR20LtvcPNRiwXe8m4LDZTln6T8n4zthN3S5emut33FgSXH0JOeCJbeB3YSoDviqk7cCXF4yGBdgni4r50MVg8K5n%2BQquO35Onzm4EU9vrgxbi2C7jy%2Bq40m1l7iJnJ%2FemkmijrTaaQ81Iqxl2wPvjjW76oCtLqH4Dew0jLAZk83v%2BEh2o642mJWU7%2BOZcJ3k%2FZ7m6JwR51Mw0lNOoumpmO%2BTYOmA3R0CySglJmzRKkQdR5%2FOnAaTyI4zo3DCWtDDmvNnBBjqkAZdbxVMLlHP5AOV1X7bm6ZVCbu7En192IhZc1AZTGvf96dy%2FQXtvbn%2FHWHmDJgQqZrbXCUqKQwsQEw4B0AfJI9DqMk2DVpXbGNhwkEAm%2Ff%2Bi77b9DyGT4W%2B8abXAyH3y94XLXpw0ecAl10OLKDm6zGA6CNvrz2JxgPry6UxCUfW8owNKIQqRRZGBpW5GAWdOuf6NzqwDyMQ6xq7UtOukKk2wNSNV&X-Amz-Signature=8873045d12008cba92f18b0b8d9c861b2d12b4dada7e5e059d9ac0e7297bc4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
