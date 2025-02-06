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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34AMRPK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDk4zu24hG2oFifE%2F2HmFslWnJ9cA%2FgHfJRfxKkwShWfgIhAJi%2BJQH6KnfOs7o2UJX8PQk63%2BTrkJi8u4fC9G1tPJDdKv8DCFEQABoMNjM3NDIzMTgzODA1IgxaE5CiuesDRQVW8KUq3AM%2FAXW%2F3%2BmealiKbblegX8WKH4SVQTg03VL43EbSGsJbxZdJ8nEApqOqoCgtRd%2FeWG6V7lzLgUARJL3hNEh7%2ByWFe%2B98hVadIntlO8XLp73Yvzu91oUyQ6y%2B1NKOnUXwg8%2FjWY33jL%2FFu9K7S6LmvjpZldr0uWbURnW%2BvAqEpJhfCS4gD7NFBFGwf8V2U3okGfGq9G49gnOx1FGoqqbldj4VeHqtSwlJPl7esRvzNI3Wbu4GEIs%2FUbYZK7h0vYrJV1QFfK4Ji6qrHcol%2FpkpDD%2FsdWmty%2BOpOtv7i%2Bh0zRgbizJXfA62ZhR%2BaF4vZJXkaHlLK44r2FKrLHoeWab6szA5SKO7L6jb%2BWTw75uohI4vnm8XyAkcG4FYzSUg6Uem%2Bgmb8zoTL1bSe8h2z0HpIcT0%2BomYY0atA1kwqvsIXoOR86CAf5gSEsQt8tMn6yf4Bein78bR6c%2BpX%2FB5ZosNzpV60yh2NQIVMTkee5WwSVOwu6PFpKEUzXZQjwC8wAbutIv0OrRv4m5HSSB8omMBnjOyKGjbDfOaL9pMhmPYhKNp9tV4SUW8KEmCXuolEr9a3wb5g4%2BXKeR7RaQrrqYeOXJrZCZfK9ox6MxvV2%2F2lqrpTelLcnwp5BC%2F992hDDQ7I%2B9BjqkAXl6uqnjbReGqI%2BiIdy8sKToggM3GLf456RpZJcVyFhcDRTIbG0YbnXZx%2ByJACaW%2FT7zdVqtt%2B0V17QkL%2F8vjE5pIdTszF%2BNT5QQF7L26yo4P%2FtCoQh8KnDFa1IoRlObZT7olSLP4rpCGz6OGDOCcL1jbXDghpXe0h4nhT9x%2Bp3SJEnGue5xtGoFUCFgdCXXydm9KLNrAWlGUBC6WQIjXAe8TcQ8&X-Amz-Signature=77b6c5dc97361ed79dc339177a754c90638e4fae3a841a0cb2fe7958b9360c02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34AMRPK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDk4zu24hG2oFifE%2F2HmFslWnJ9cA%2FgHfJRfxKkwShWfgIhAJi%2BJQH6KnfOs7o2UJX8PQk63%2BTrkJi8u4fC9G1tPJDdKv8DCFEQABoMNjM3NDIzMTgzODA1IgxaE5CiuesDRQVW8KUq3AM%2FAXW%2F3%2BmealiKbblegX8WKH4SVQTg03VL43EbSGsJbxZdJ8nEApqOqoCgtRd%2FeWG6V7lzLgUARJL3hNEh7%2ByWFe%2B98hVadIntlO8XLp73Yvzu91oUyQ6y%2B1NKOnUXwg8%2FjWY33jL%2FFu9K7S6LmvjpZldr0uWbURnW%2BvAqEpJhfCS4gD7NFBFGwf8V2U3okGfGq9G49gnOx1FGoqqbldj4VeHqtSwlJPl7esRvzNI3Wbu4GEIs%2FUbYZK7h0vYrJV1QFfK4Ji6qrHcol%2FpkpDD%2FsdWmty%2BOpOtv7i%2Bh0zRgbizJXfA62ZhR%2BaF4vZJXkaHlLK44r2FKrLHoeWab6szA5SKO7L6jb%2BWTw75uohI4vnm8XyAkcG4FYzSUg6Uem%2Bgmb8zoTL1bSe8h2z0HpIcT0%2BomYY0atA1kwqvsIXoOR86CAf5gSEsQt8tMn6yf4Bein78bR6c%2BpX%2FB5ZosNzpV60yh2NQIVMTkee5WwSVOwu6PFpKEUzXZQjwC8wAbutIv0OrRv4m5HSSB8omMBnjOyKGjbDfOaL9pMhmPYhKNp9tV4SUW8KEmCXuolEr9a3wb5g4%2BXKeR7RaQrrqYeOXJrZCZfK9ox6MxvV2%2F2lqrpTelLcnwp5BC%2F992hDDQ7I%2B9BjqkAXl6uqnjbReGqI%2BiIdy8sKToggM3GLf456RpZJcVyFhcDRTIbG0YbnXZx%2ByJACaW%2FT7zdVqtt%2B0V17QkL%2F8vjE5pIdTszF%2BNT5QQF7L26yo4P%2FtCoQh8KnDFa1IoRlObZT7olSLP4rpCGz6OGDOCcL1jbXDghpXe0h4nhT9x%2Bp3SJEnGue5xtGoFUCFgdCXXydm9KLNrAWlGUBC6WQIjXAe8TcQ8&X-Amz-Signature=13c11e0c76a348270f931ee0d65e6226f689e3981cc4c53a63381dc383ae1575&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34AMRPK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDk4zu24hG2oFifE%2F2HmFslWnJ9cA%2FgHfJRfxKkwShWfgIhAJi%2BJQH6KnfOs7o2UJX8PQk63%2BTrkJi8u4fC9G1tPJDdKv8DCFEQABoMNjM3NDIzMTgzODA1IgxaE5CiuesDRQVW8KUq3AM%2FAXW%2F3%2BmealiKbblegX8WKH4SVQTg03VL43EbSGsJbxZdJ8nEApqOqoCgtRd%2FeWG6V7lzLgUARJL3hNEh7%2ByWFe%2B98hVadIntlO8XLp73Yvzu91oUyQ6y%2B1NKOnUXwg8%2FjWY33jL%2FFu9K7S6LmvjpZldr0uWbURnW%2BvAqEpJhfCS4gD7NFBFGwf8V2U3okGfGq9G49gnOx1FGoqqbldj4VeHqtSwlJPl7esRvzNI3Wbu4GEIs%2FUbYZK7h0vYrJV1QFfK4Ji6qrHcol%2FpkpDD%2FsdWmty%2BOpOtv7i%2Bh0zRgbizJXfA62ZhR%2BaF4vZJXkaHlLK44r2FKrLHoeWab6szA5SKO7L6jb%2BWTw75uohI4vnm8XyAkcG4FYzSUg6Uem%2Bgmb8zoTL1bSe8h2z0HpIcT0%2BomYY0atA1kwqvsIXoOR86CAf5gSEsQt8tMn6yf4Bein78bR6c%2BpX%2FB5ZosNzpV60yh2NQIVMTkee5WwSVOwu6PFpKEUzXZQjwC8wAbutIv0OrRv4m5HSSB8omMBnjOyKGjbDfOaL9pMhmPYhKNp9tV4SUW8KEmCXuolEr9a3wb5g4%2BXKeR7RaQrrqYeOXJrZCZfK9ox6MxvV2%2F2lqrpTelLcnwp5BC%2F992hDDQ7I%2B9BjqkAXl6uqnjbReGqI%2BiIdy8sKToggM3GLf456RpZJcVyFhcDRTIbG0YbnXZx%2ByJACaW%2FT7zdVqtt%2B0V17QkL%2F8vjE5pIdTszF%2BNT5QQF7L26yo4P%2FtCoQh8KnDFa1IoRlObZT7olSLP4rpCGz6OGDOCcL1jbXDghpXe0h4nhT9x%2Bp3SJEnGue5xtGoFUCFgdCXXydm9KLNrAWlGUBC6WQIjXAe8TcQ8&X-Amz-Signature=6b9f93bb141e58bd068786a4f13c27b26f1c57dfac7c63a0ab3ebb8748a2d503&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34AMRPK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDk4zu24hG2oFifE%2F2HmFslWnJ9cA%2FgHfJRfxKkwShWfgIhAJi%2BJQH6KnfOs7o2UJX8PQk63%2BTrkJi8u4fC9G1tPJDdKv8DCFEQABoMNjM3NDIzMTgzODA1IgxaE5CiuesDRQVW8KUq3AM%2FAXW%2F3%2BmealiKbblegX8WKH4SVQTg03VL43EbSGsJbxZdJ8nEApqOqoCgtRd%2FeWG6V7lzLgUARJL3hNEh7%2ByWFe%2B98hVadIntlO8XLp73Yvzu91oUyQ6y%2B1NKOnUXwg8%2FjWY33jL%2FFu9K7S6LmvjpZldr0uWbURnW%2BvAqEpJhfCS4gD7NFBFGwf8V2U3okGfGq9G49gnOx1FGoqqbldj4VeHqtSwlJPl7esRvzNI3Wbu4GEIs%2FUbYZK7h0vYrJV1QFfK4Ji6qrHcol%2FpkpDD%2FsdWmty%2BOpOtv7i%2Bh0zRgbizJXfA62ZhR%2BaF4vZJXkaHlLK44r2FKrLHoeWab6szA5SKO7L6jb%2BWTw75uohI4vnm8XyAkcG4FYzSUg6Uem%2Bgmb8zoTL1bSe8h2z0HpIcT0%2BomYY0atA1kwqvsIXoOR86CAf5gSEsQt8tMn6yf4Bein78bR6c%2BpX%2FB5ZosNzpV60yh2NQIVMTkee5WwSVOwu6PFpKEUzXZQjwC8wAbutIv0OrRv4m5HSSB8omMBnjOyKGjbDfOaL9pMhmPYhKNp9tV4SUW8KEmCXuolEr9a3wb5g4%2BXKeR7RaQrrqYeOXJrZCZfK9ox6MxvV2%2F2lqrpTelLcnwp5BC%2F992hDDQ7I%2B9BjqkAXl6uqnjbReGqI%2BiIdy8sKToggM3GLf456RpZJcVyFhcDRTIbG0YbnXZx%2ByJACaW%2FT7zdVqtt%2B0V17QkL%2F8vjE5pIdTszF%2BNT5QQF7L26yo4P%2FtCoQh8KnDFa1IoRlObZT7olSLP4rpCGz6OGDOCcL1jbXDghpXe0h4nhT9x%2Bp3SJEnGue5xtGoFUCFgdCXXydm9KLNrAWlGUBC6WQIjXAe8TcQ8&X-Amz-Signature=6de0983058ad504857546caa5a4a318b42af6a3c6de93254e97d18691a9176f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34AMRPK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDk4zu24hG2oFifE%2F2HmFslWnJ9cA%2FgHfJRfxKkwShWfgIhAJi%2BJQH6KnfOs7o2UJX8PQk63%2BTrkJi8u4fC9G1tPJDdKv8DCFEQABoMNjM3NDIzMTgzODA1IgxaE5CiuesDRQVW8KUq3AM%2FAXW%2F3%2BmealiKbblegX8WKH4SVQTg03VL43EbSGsJbxZdJ8nEApqOqoCgtRd%2FeWG6V7lzLgUARJL3hNEh7%2ByWFe%2B98hVadIntlO8XLp73Yvzu91oUyQ6y%2B1NKOnUXwg8%2FjWY33jL%2FFu9K7S6LmvjpZldr0uWbURnW%2BvAqEpJhfCS4gD7NFBFGwf8V2U3okGfGq9G49gnOx1FGoqqbldj4VeHqtSwlJPl7esRvzNI3Wbu4GEIs%2FUbYZK7h0vYrJV1QFfK4Ji6qrHcol%2FpkpDD%2FsdWmty%2BOpOtv7i%2Bh0zRgbizJXfA62ZhR%2BaF4vZJXkaHlLK44r2FKrLHoeWab6szA5SKO7L6jb%2BWTw75uohI4vnm8XyAkcG4FYzSUg6Uem%2Bgmb8zoTL1bSe8h2z0HpIcT0%2BomYY0atA1kwqvsIXoOR86CAf5gSEsQt8tMn6yf4Bein78bR6c%2BpX%2FB5ZosNzpV60yh2NQIVMTkee5WwSVOwu6PFpKEUzXZQjwC8wAbutIv0OrRv4m5HSSB8omMBnjOyKGjbDfOaL9pMhmPYhKNp9tV4SUW8KEmCXuolEr9a3wb5g4%2BXKeR7RaQrrqYeOXJrZCZfK9ox6MxvV2%2F2lqrpTelLcnwp5BC%2F992hDDQ7I%2B9BjqkAXl6uqnjbReGqI%2BiIdy8sKToggM3GLf456RpZJcVyFhcDRTIbG0YbnXZx%2ByJACaW%2FT7zdVqtt%2B0V17QkL%2F8vjE5pIdTszF%2BNT5QQF7L26yo4P%2FtCoQh8KnDFa1IoRlObZT7olSLP4rpCGz6OGDOCcL1jbXDghpXe0h4nhT9x%2Bp3SJEnGue5xtGoFUCFgdCXXydm9KLNrAWlGUBC6WQIjXAe8TcQ8&X-Amz-Signature=1fb22de986d30c50ec34b23b741eb2e8b892244b28dfff8b2ebc4706d6a6f7c4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34AMRPK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDk4zu24hG2oFifE%2F2HmFslWnJ9cA%2FgHfJRfxKkwShWfgIhAJi%2BJQH6KnfOs7o2UJX8PQk63%2BTrkJi8u4fC9G1tPJDdKv8DCFEQABoMNjM3NDIzMTgzODA1IgxaE5CiuesDRQVW8KUq3AM%2FAXW%2F3%2BmealiKbblegX8WKH4SVQTg03VL43EbSGsJbxZdJ8nEApqOqoCgtRd%2FeWG6V7lzLgUARJL3hNEh7%2ByWFe%2B98hVadIntlO8XLp73Yvzu91oUyQ6y%2B1NKOnUXwg8%2FjWY33jL%2FFu9K7S6LmvjpZldr0uWbURnW%2BvAqEpJhfCS4gD7NFBFGwf8V2U3okGfGq9G49gnOx1FGoqqbldj4VeHqtSwlJPl7esRvzNI3Wbu4GEIs%2FUbYZK7h0vYrJV1QFfK4Ji6qrHcol%2FpkpDD%2FsdWmty%2BOpOtv7i%2Bh0zRgbizJXfA62ZhR%2BaF4vZJXkaHlLK44r2FKrLHoeWab6szA5SKO7L6jb%2BWTw75uohI4vnm8XyAkcG4FYzSUg6Uem%2Bgmb8zoTL1bSe8h2z0HpIcT0%2BomYY0atA1kwqvsIXoOR86CAf5gSEsQt8tMn6yf4Bein78bR6c%2BpX%2FB5ZosNzpV60yh2NQIVMTkee5WwSVOwu6PFpKEUzXZQjwC8wAbutIv0OrRv4m5HSSB8omMBnjOyKGjbDfOaL9pMhmPYhKNp9tV4SUW8KEmCXuolEr9a3wb5g4%2BXKeR7RaQrrqYeOXJrZCZfK9ox6MxvV2%2F2lqrpTelLcnwp5BC%2F992hDDQ7I%2B9BjqkAXl6uqnjbReGqI%2BiIdy8sKToggM3GLf456RpZJcVyFhcDRTIbG0YbnXZx%2ByJACaW%2FT7zdVqtt%2B0V17QkL%2F8vjE5pIdTszF%2BNT5QQF7L26yo4P%2FtCoQh8KnDFa1IoRlObZT7olSLP4rpCGz6OGDOCcL1jbXDghpXe0h4nhT9x%2Bp3SJEnGue5xtGoFUCFgdCXXydm9KLNrAWlGUBC6WQIjXAe8TcQ8&X-Amz-Signature=6e5cc50de8124eb2555117931428ad7ef489c2f9f4f27d299bfe11ca291a94f8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34AMRPK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDk4zu24hG2oFifE%2F2HmFslWnJ9cA%2FgHfJRfxKkwShWfgIhAJi%2BJQH6KnfOs7o2UJX8PQk63%2BTrkJi8u4fC9G1tPJDdKv8DCFEQABoMNjM3NDIzMTgzODA1IgxaE5CiuesDRQVW8KUq3AM%2FAXW%2F3%2BmealiKbblegX8WKH4SVQTg03VL43EbSGsJbxZdJ8nEApqOqoCgtRd%2FeWG6V7lzLgUARJL3hNEh7%2ByWFe%2B98hVadIntlO8XLp73Yvzu91oUyQ6y%2B1NKOnUXwg8%2FjWY33jL%2FFu9K7S6LmvjpZldr0uWbURnW%2BvAqEpJhfCS4gD7NFBFGwf8V2U3okGfGq9G49gnOx1FGoqqbldj4VeHqtSwlJPl7esRvzNI3Wbu4GEIs%2FUbYZK7h0vYrJV1QFfK4Ji6qrHcol%2FpkpDD%2FsdWmty%2BOpOtv7i%2Bh0zRgbizJXfA62ZhR%2BaF4vZJXkaHlLK44r2FKrLHoeWab6szA5SKO7L6jb%2BWTw75uohI4vnm8XyAkcG4FYzSUg6Uem%2Bgmb8zoTL1bSe8h2z0HpIcT0%2BomYY0atA1kwqvsIXoOR86CAf5gSEsQt8tMn6yf4Bein78bR6c%2BpX%2FB5ZosNzpV60yh2NQIVMTkee5WwSVOwu6PFpKEUzXZQjwC8wAbutIv0OrRv4m5HSSB8omMBnjOyKGjbDfOaL9pMhmPYhKNp9tV4SUW8KEmCXuolEr9a3wb5g4%2BXKeR7RaQrrqYeOXJrZCZfK9ox6MxvV2%2F2lqrpTelLcnwp5BC%2F992hDDQ7I%2B9BjqkAXl6uqnjbReGqI%2BiIdy8sKToggM3GLf456RpZJcVyFhcDRTIbG0YbnXZx%2ByJACaW%2FT7zdVqtt%2B0V17QkL%2F8vjE5pIdTszF%2BNT5QQF7L26yo4P%2FtCoQh8KnDFa1IoRlObZT7olSLP4rpCGz6OGDOCcL1jbXDghpXe0h4nhT9x%2Bp3SJEnGue5xtGoFUCFgdCXXydm9KLNrAWlGUBC6WQIjXAe8TcQ8&X-Amz-Signature=04e467d61c223eb27abf1c9e6e04145bf89accb8eafa97229c3e97c068936d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
