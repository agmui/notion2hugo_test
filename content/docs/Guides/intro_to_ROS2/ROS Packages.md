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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRUR4QY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCXLhebZQ%2B2xKPKgXBGg42tt6xueuAiGKCc012j%2BkAoUwIhAPMjO5dNzh5aGij1iR9LFm3qlwAG%2B45P8Et95sCrDwnFKv8DCGQQABoMNjM3NDIzMTgzODA1IgwODgSJOyOisxQx6wUq3APQWmAmhfsWMG%2Fovu0peYoKtlFmv86tJoDynzscpAnVwGUXGsKaIMNcl51nRTr19dJj6%2BMJswM5sY0QAR%2FQ5uWy2ySpb8zbMOHV031HCSPu3OhVGpwPuTEv89Wm4%2Fd0MIg6o9S1EpoNQ%2BvB3kyGpDMt%2BSieD2aZb7Y9iInHqL0PGTmrM7aTb8knG%2F2EKU6lD20OYjMjKqsMYmRfOFAIfkirHrVn4nm%2BCS7Lr6dvwZffXZqzZrwLs9J16AS1PAAel8j%2FOYd3k4HUpMLt4iH0Z8cVFIwrJVf3qAANUznSgKPum5z4xwPGb31gmtkQ%2BzBY2robizX%2FxFiO8unq9%2F5%2BYmYLn8sUeqTLrGtLTlPm9%2FgmatgHD4okkSGyW2fRiaSAB%2FiTMC15Ohn4nBrUFIeFhoaf9R0AVmB84A%2BY%2FIGECjD9KaVeD60Y5yKZ2Db%2BWkeWzDTtZPYGV6DWbi6stOLkpFwdnJZirbHj5r6HOH8Z2vhutY7x%2FY6cjXFKC7t3Ya9zub2oIjZXdFgb09p34FPT%2BIvbS7F55p3S14QBA%2BZUshgws1KrQ%2B%2FhrWS5qOpLh8a0AmFs2eZh6UgA8Ci230gShCYnonjAkxsw%2F6fAg5p2lcycmQJsPu6mJEW3RZrA3jCd%2F6rDBjqkAQMrhJ78cKbdLK1FmlnL9u%2Fh24%2B%2B2VOu2DNH3rhbRrYir6ULAXipuS%2B3%2F7aJOSv103XI%2BGrrphncUxmRGN5v9dWd0I9FFkxWq8fimhz9%2FOtZ4nS3skDVjp0JreytOUqDB98BjU8n3He8ZrxGUdkYNL6nOzvapsxrRPwxN5sv9%2FKtEdPYh9CZVIWyY4aIywntm%2FAxVgjIxeNjWthv09mgoDHvLBXK&X-Amz-Signature=37b9aaa54eeb3774b42fde674c59576a66e491b60d5d0f4845f697421db597b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRUR4QY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCXLhebZQ%2B2xKPKgXBGg42tt6xueuAiGKCc012j%2BkAoUwIhAPMjO5dNzh5aGij1iR9LFm3qlwAG%2B45P8Et95sCrDwnFKv8DCGQQABoMNjM3NDIzMTgzODA1IgwODgSJOyOisxQx6wUq3APQWmAmhfsWMG%2Fovu0peYoKtlFmv86tJoDynzscpAnVwGUXGsKaIMNcl51nRTr19dJj6%2BMJswM5sY0QAR%2FQ5uWy2ySpb8zbMOHV031HCSPu3OhVGpwPuTEv89Wm4%2Fd0MIg6o9S1EpoNQ%2BvB3kyGpDMt%2BSieD2aZb7Y9iInHqL0PGTmrM7aTb8knG%2F2EKU6lD20OYjMjKqsMYmRfOFAIfkirHrVn4nm%2BCS7Lr6dvwZffXZqzZrwLs9J16AS1PAAel8j%2FOYd3k4HUpMLt4iH0Z8cVFIwrJVf3qAANUznSgKPum5z4xwPGb31gmtkQ%2BzBY2robizX%2FxFiO8unq9%2F5%2BYmYLn8sUeqTLrGtLTlPm9%2FgmatgHD4okkSGyW2fRiaSAB%2FiTMC15Ohn4nBrUFIeFhoaf9R0AVmB84A%2BY%2FIGECjD9KaVeD60Y5yKZ2Db%2BWkeWzDTtZPYGV6DWbi6stOLkpFwdnJZirbHj5r6HOH8Z2vhutY7x%2FY6cjXFKC7t3Ya9zub2oIjZXdFgb09p34FPT%2BIvbS7F55p3S14QBA%2BZUshgws1KrQ%2B%2FhrWS5qOpLh8a0AmFs2eZh6UgA8Ci230gShCYnonjAkxsw%2F6fAg5p2lcycmQJsPu6mJEW3RZrA3jCd%2F6rDBjqkAQMrhJ78cKbdLK1FmlnL9u%2Fh24%2B%2B2VOu2DNH3rhbRrYir6ULAXipuS%2B3%2F7aJOSv103XI%2BGrrphncUxmRGN5v9dWd0I9FFkxWq8fimhz9%2FOtZ4nS3skDVjp0JreytOUqDB98BjU8n3He8ZrxGUdkYNL6nOzvapsxrRPwxN5sv9%2FKtEdPYh9CZVIWyY4aIywntm%2FAxVgjIxeNjWthv09mgoDHvLBXK&X-Amz-Signature=0f3329b20276066e87eff19dc87c52c975f278b3442007452741600ddecbd31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRUR4QY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCXLhebZQ%2B2xKPKgXBGg42tt6xueuAiGKCc012j%2BkAoUwIhAPMjO5dNzh5aGij1iR9LFm3qlwAG%2B45P8Et95sCrDwnFKv8DCGQQABoMNjM3NDIzMTgzODA1IgwODgSJOyOisxQx6wUq3APQWmAmhfsWMG%2Fovu0peYoKtlFmv86tJoDynzscpAnVwGUXGsKaIMNcl51nRTr19dJj6%2BMJswM5sY0QAR%2FQ5uWy2ySpb8zbMOHV031HCSPu3OhVGpwPuTEv89Wm4%2Fd0MIg6o9S1EpoNQ%2BvB3kyGpDMt%2BSieD2aZb7Y9iInHqL0PGTmrM7aTb8knG%2F2EKU6lD20OYjMjKqsMYmRfOFAIfkirHrVn4nm%2BCS7Lr6dvwZffXZqzZrwLs9J16AS1PAAel8j%2FOYd3k4HUpMLt4iH0Z8cVFIwrJVf3qAANUznSgKPum5z4xwPGb31gmtkQ%2BzBY2robizX%2FxFiO8unq9%2F5%2BYmYLn8sUeqTLrGtLTlPm9%2FgmatgHD4okkSGyW2fRiaSAB%2FiTMC15Ohn4nBrUFIeFhoaf9R0AVmB84A%2BY%2FIGECjD9KaVeD60Y5yKZ2Db%2BWkeWzDTtZPYGV6DWbi6stOLkpFwdnJZirbHj5r6HOH8Z2vhutY7x%2FY6cjXFKC7t3Ya9zub2oIjZXdFgb09p34FPT%2BIvbS7F55p3S14QBA%2BZUshgws1KrQ%2B%2FhrWS5qOpLh8a0AmFs2eZh6UgA8Ci230gShCYnonjAkxsw%2F6fAg5p2lcycmQJsPu6mJEW3RZrA3jCd%2F6rDBjqkAQMrhJ78cKbdLK1FmlnL9u%2Fh24%2B%2B2VOu2DNH3rhbRrYir6ULAXipuS%2B3%2F7aJOSv103XI%2BGrrphncUxmRGN5v9dWd0I9FFkxWq8fimhz9%2FOtZ4nS3skDVjp0JreytOUqDB98BjU8n3He8ZrxGUdkYNL6nOzvapsxrRPwxN5sv9%2FKtEdPYh9CZVIWyY4aIywntm%2FAxVgjIxeNjWthv09mgoDHvLBXK&X-Amz-Signature=f846f80549f32e4bf28586187a33cf9882f7cd969b99f332c374a013c35bdb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRUR4QY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCXLhebZQ%2B2xKPKgXBGg42tt6xueuAiGKCc012j%2BkAoUwIhAPMjO5dNzh5aGij1iR9LFm3qlwAG%2B45P8Et95sCrDwnFKv8DCGQQABoMNjM3NDIzMTgzODA1IgwODgSJOyOisxQx6wUq3APQWmAmhfsWMG%2Fovu0peYoKtlFmv86tJoDynzscpAnVwGUXGsKaIMNcl51nRTr19dJj6%2BMJswM5sY0QAR%2FQ5uWy2ySpb8zbMOHV031HCSPu3OhVGpwPuTEv89Wm4%2Fd0MIg6o9S1EpoNQ%2BvB3kyGpDMt%2BSieD2aZb7Y9iInHqL0PGTmrM7aTb8knG%2F2EKU6lD20OYjMjKqsMYmRfOFAIfkirHrVn4nm%2BCS7Lr6dvwZffXZqzZrwLs9J16AS1PAAel8j%2FOYd3k4HUpMLt4iH0Z8cVFIwrJVf3qAANUznSgKPum5z4xwPGb31gmtkQ%2BzBY2robizX%2FxFiO8unq9%2F5%2BYmYLn8sUeqTLrGtLTlPm9%2FgmatgHD4okkSGyW2fRiaSAB%2FiTMC15Ohn4nBrUFIeFhoaf9R0AVmB84A%2BY%2FIGECjD9KaVeD60Y5yKZ2Db%2BWkeWzDTtZPYGV6DWbi6stOLkpFwdnJZirbHj5r6HOH8Z2vhutY7x%2FY6cjXFKC7t3Ya9zub2oIjZXdFgb09p34FPT%2BIvbS7F55p3S14QBA%2BZUshgws1KrQ%2B%2FhrWS5qOpLh8a0AmFs2eZh6UgA8Ci230gShCYnonjAkxsw%2F6fAg5p2lcycmQJsPu6mJEW3RZrA3jCd%2F6rDBjqkAQMrhJ78cKbdLK1FmlnL9u%2Fh24%2B%2B2VOu2DNH3rhbRrYir6ULAXipuS%2B3%2F7aJOSv103XI%2BGrrphncUxmRGN5v9dWd0I9FFkxWq8fimhz9%2FOtZ4nS3skDVjp0JreytOUqDB98BjU8n3He8ZrxGUdkYNL6nOzvapsxrRPwxN5sv9%2FKtEdPYh9CZVIWyY4aIywntm%2FAxVgjIxeNjWthv09mgoDHvLBXK&X-Amz-Signature=c67c5e2b9a59df55ef87932c4565d961262f72d691645960da2305ff59a3f762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRUR4QY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCXLhebZQ%2B2xKPKgXBGg42tt6xueuAiGKCc012j%2BkAoUwIhAPMjO5dNzh5aGij1iR9LFm3qlwAG%2B45P8Et95sCrDwnFKv8DCGQQABoMNjM3NDIzMTgzODA1IgwODgSJOyOisxQx6wUq3APQWmAmhfsWMG%2Fovu0peYoKtlFmv86tJoDynzscpAnVwGUXGsKaIMNcl51nRTr19dJj6%2BMJswM5sY0QAR%2FQ5uWy2ySpb8zbMOHV031HCSPu3OhVGpwPuTEv89Wm4%2Fd0MIg6o9S1EpoNQ%2BvB3kyGpDMt%2BSieD2aZb7Y9iInHqL0PGTmrM7aTb8knG%2F2EKU6lD20OYjMjKqsMYmRfOFAIfkirHrVn4nm%2BCS7Lr6dvwZffXZqzZrwLs9J16AS1PAAel8j%2FOYd3k4HUpMLt4iH0Z8cVFIwrJVf3qAANUznSgKPum5z4xwPGb31gmtkQ%2BzBY2robizX%2FxFiO8unq9%2F5%2BYmYLn8sUeqTLrGtLTlPm9%2FgmatgHD4okkSGyW2fRiaSAB%2FiTMC15Ohn4nBrUFIeFhoaf9R0AVmB84A%2BY%2FIGECjD9KaVeD60Y5yKZ2Db%2BWkeWzDTtZPYGV6DWbi6stOLkpFwdnJZirbHj5r6HOH8Z2vhutY7x%2FY6cjXFKC7t3Ya9zub2oIjZXdFgb09p34FPT%2BIvbS7F55p3S14QBA%2BZUshgws1KrQ%2B%2FhrWS5qOpLh8a0AmFs2eZh6UgA8Ci230gShCYnonjAkxsw%2F6fAg5p2lcycmQJsPu6mJEW3RZrA3jCd%2F6rDBjqkAQMrhJ78cKbdLK1FmlnL9u%2Fh24%2B%2B2VOu2DNH3rhbRrYir6ULAXipuS%2B3%2F7aJOSv103XI%2BGrrphncUxmRGN5v9dWd0I9FFkxWq8fimhz9%2FOtZ4nS3skDVjp0JreytOUqDB98BjU8n3He8ZrxGUdkYNL6nOzvapsxrRPwxN5sv9%2FKtEdPYh9CZVIWyY4aIywntm%2FAxVgjIxeNjWthv09mgoDHvLBXK&X-Amz-Signature=7f4d5d4da1e7fe20bc121e76768f61b0e3a2c0bc236794e3a179cc782a0be67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRUR4QY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCXLhebZQ%2B2xKPKgXBGg42tt6xueuAiGKCc012j%2BkAoUwIhAPMjO5dNzh5aGij1iR9LFm3qlwAG%2B45P8Et95sCrDwnFKv8DCGQQABoMNjM3NDIzMTgzODA1IgwODgSJOyOisxQx6wUq3APQWmAmhfsWMG%2Fovu0peYoKtlFmv86tJoDynzscpAnVwGUXGsKaIMNcl51nRTr19dJj6%2BMJswM5sY0QAR%2FQ5uWy2ySpb8zbMOHV031HCSPu3OhVGpwPuTEv89Wm4%2Fd0MIg6o9S1EpoNQ%2BvB3kyGpDMt%2BSieD2aZb7Y9iInHqL0PGTmrM7aTb8knG%2F2EKU6lD20OYjMjKqsMYmRfOFAIfkirHrVn4nm%2BCS7Lr6dvwZffXZqzZrwLs9J16AS1PAAel8j%2FOYd3k4HUpMLt4iH0Z8cVFIwrJVf3qAANUznSgKPum5z4xwPGb31gmtkQ%2BzBY2robizX%2FxFiO8unq9%2F5%2BYmYLn8sUeqTLrGtLTlPm9%2FgmatgHD4okkSGyW2fRiaSAB%2FiTMC15Ohn4nBrUFIeFhoaf9R0AVmB84A%2BY%2FIGECjD9KaVeD60Y5yKZ2Db%2BWkeWzDTtZPYGV6DWbi6stOLkpFwdnJZirbHj5r6HOH8Z2vhutY7x%2FY6cjXFKC7t3Ya9zub2oIjZXdFgb09p34FPT%2BIvbS7F55p3S14QBA%2BZUshgws1KrQ%2B%2FhrWS5qOpLh8a0AmFs2eZh6UgA8Ci230gShCYnonjAkxsw%2F6fAg5p2lcycmQJsPu6mJEW3RZrA3jCd%2F6rDBjqkAQMrhJ78cKbdLK1FmlnL9u%2Fh24%2B%2B2VOu2DNH3rhbRrYir6ULAXipuS%2B3%2F7aJOSv103XI%2BGrrphncUxmRGN5v9dWd0I9FFkxWq8fimhz9%2FOtZ4nS3skDVjp0JreytOUqDB98BjU8n3He8ZrxGUdkYNL6nOzvapsxrRPwxN5sv9%2FKtEdPYh9CZVIWyY4aIywntm%2FAxVgjIxeNjWthv09mgoDHvLBXK&X-Amz-Signature=0496d34a5381f479de01976cafdcc37eb6709943f8d4890306b612a072777793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRUR4QY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCXLhebZQ%2B2xKPKgXBGg42tt6xueuAiGKCc012j%2BkAoUwIhAPMjO5dNzh5aGij1iR9LFm3qlwAG%2B45P8Et95sCrDwnFKv8DCGQQABoMNjM3NDIzMTgzODA1IgwODgSJOyOisxQx6wUq3APQWmAmhfsWMG%2Fovu0peYoKtlFmv86tJoDynzscpAnVwGUXGsKaIMNcl51nRTr19dJj6%2BMJswM5sY0QAR%2FQ5uWy2ySpb8zbMOHV031HCSPu3OhVGpwPuTEv89Wm4%2Fd0MIg6o9S1EpoNQ%2BvB3kyGpDMt%2BSieD2aZb7Y9iInHqL0PGTmrM7aTb8knG%2F2EKU6lD20OYjMjKqsMYmRfOFAIfkirHrVn4nm%2BCS7Lr6dvwZffXZqzZrwLs9J16AS1PAAel8j%2FOYd3k4HUpMLt4iH0Z8cVFIwrJVf3qAANUznSgKPum5z4xwPGb31gmtkQ%2BzBY2robizX%2FxFiO8unq9%2F5%2BYmYLn8sUeqTLrGtLTlPm9%2FgmatgHD4okkSGyW2fRiaSAB%2FiTMC15Ohn4nBrUFIeFhoaf9R0AVmB84A%2BY%2FIGECjD9KaVeD60Y5yKZ2Db%2BWkeWzDTtZPYGV6DWbi6stOLkpFwdnJZirbHj5r6HOH8Z2vhutY7x%2FY6cjXFKC7t3Ya9zub2oIjZXdFgb09p34FPT%2BIvbS7F55p3S14QBA%2BZUshgws1KrQ%2B%2FhrWS5qOpLh8a0AmFs2eZh6UgA8Ci230gShCYnonjAkxsw%2F6fAg5p2lcycmQJsPu6mJEW3RZrA3jCd%2F6rDBjqkAQMrhJ78cKbdLK1FmlnL9u%2Fh24%2B%2B2VOu2DNH3rhbRrYir6ULAXipuS%2B3%2F7aJOSv103XI%2BGrrphncUxmRGN5v9dWd0I9FFkxWq8fimhz9%2FOtZ4nS3skDVjp0JreytOUqDB98BjU8n3He8ZrxGUdkYNL6nOzvapsxrRPwxN5sv9%2FKtEdPYh9CZVIWyY4aIywntm%2FAxVgjIxeNjWthv09mgoDHvLBXK&X-Amz-Signature=410d2942bc760e02f7ad02dcc792d1ce937b17b38044fd07eec1333cfdd6bed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
