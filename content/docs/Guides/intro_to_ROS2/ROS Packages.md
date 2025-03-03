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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJAT7IF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaQgNcc9eRAU6rprvT9DH9l4z0CT7eDn3na4uv4xmPaAiEA4jVzzRc59lfOHqS%2FC4aMmxPADZdTB1VZLsVckQBQ%2BugqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6FQjZ8JunFF5a%2BWSrcA4TnJLdTWZIJalJQVi1TwakhFP8NLCimz9Xl6g26S%2FqzteOMYP4Pq0r35SZokza45w3apPyJjvYXpqbA9YOpwkn1TkAQEPrBMQmnjCYqESpymnq9tXHxucuz9VcmEuZTbJPI%2BzcJpZ9GhaP4rFbkeXdVKiyomVc9ujBn4zI967xi7iyFSa8kz8FspP%2FaIbpGtpl9V%2FBKrKjM8MRig%2Fosl2rP0U%2B4RnTXJPFsjXcD%2BqijhnuUFG2VrZ%2B%2BuCNKoJCQEWJUELG9ETyPgXv0%2Fi0gNP1ayfL5TIhKl4GQFHQn9JyG8hTAcI8oCrxsmCNAC4OSBCKsDFMKq2VAhCei8tJ6l5eZDvGAHZxbDXZcoq8ZKxUWDmMgTNEolYToWzQNHIXfDt7bQYCZcaZQPKRGJ4Ienh3ck7tFlQ%2BChmHeqgH6PVJFCY2BtE7mDC2URBcWvQ6KcvN3Pda2aot2l0kbGpcTTomzHBargbOzCr5BiyE9yEalzJ89YeA975lV1BuVfYGhau4uRhYgwyt2jv4sprHTqrGj8qeEtbzW8Y0aJYv%2FplWTqNpl1qkagwgJho08TGF%2BkVqMWhJS237iOsHylHbDyCQrV83c3NVQd8kVwZg1pdf%2ByrTUe70SUW%2BBiTmsMMyflL4GOqUBusEOm3xdEkSVN2HuyXc9WIZSpP5sbc92l6V01mFRAprBCg5uSDzo7bi4EmqBTGx12SPIKfa3w6MXquwc2tsjj4Y9owD5UacPYuGPbEGnN8RdUt0rlNfldRRy8Ox3hU8qs4LuYi3YvBH%2B7sO2kaDf27Ln6Ew1SvHK1Xo95FhGJ28JTelF%2B1%2FT6cB%2BUvY8v4fT4SmKJMs0ZV6uQ%2Ftz%2FBwz1695gluL&X-Amz-Signature=3752115762d0502ace61e08236901ee113b3fd7c97d9cd7b883d0990167824ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJAT7IF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaQgNcc9eRAU6rprvT9DH9l4z0CT7eDn3na4uv4xmPaAiEA4jVzzRc59lfOHqS%2FC4aMmxPADZdTB1VZLsVckQBQ%2BugqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6FQjZ8JunFF5a%2BWSrcA4TnJLdTWZIJalJQVi1TwakhFP8NLCimz9Xl6g26S%2FqzteOMYP4Pq0r35SZokza45w3apPyJjvYXpqbA9YOpwkn1TkAQEPrBMQmnjCYqESpymnq9tXHxucuz9VcmEuZTbJPI%2BzcJpZ9GhaP4rFbkeXdVKiyomVc9ujBn4zI967xi7iyFSa8kz8FspP%2FaIbpGtpl9V%2FBKrKjM8MRig%2Fosl2rP0U%2B4RnTXJPFsjXcD%2BqijhnuUFG2VrZ%2B%2BuCNKoJCQEWJUELG9ETyPgXv0%2Fi0gNP1ayfL5TIhKl4GQFHQn9JyG8hTAcI8oCrxsmCNAC4OSBCKsDFMKq2VAhCei8tJ6l5eZDvGAHZxbDXZcoq8ZKxUWDmMgTNEolYToWzQNHIXfDt7bQYCZcaZQPKRGJ4Ienh3ck7tFlQ%2BChmHeqgH6PVJFCY2BtE7mDC2URBcWvQ6KcvN3Pda2aot2l0kbGpcTTomzHBargbOzCr5BiyE9yEalzJ89YeA975lV1BuVfYGhau4uRhYgwyt2jv4sprHTqrGj8qeEtbzW8Y0aJYv%2FplWTqNpl1qkagwgJho08TGF%2BkVqMWhJS237iOsHylHbDyCQrV83c3NVQd8kVwZg1pdf%2ByrTUe70SUW%2BBiTmsMMyflL4GOqUBusEOm3xdEkSVN2HuyXc9WIZSpP5sbc92l6V01mFRAprBCg5uSDzo7bi4EmqBTGx12SPIKfa3w6MXquwc2tsjj4Y9owD5UacPYuGPbEGnN8RdUt0rlNfldRRy8Ox3hU8qs4LuYi3YvBH%2B7sO2kaDf27Ln6Ew1SvHK1Xo95FhGJ28JTelF%2B1%2FT6cB%2BUvY8v4fT4SmKJMs0ZV6uQ%2Ftz%2FBwz1695gluL&X-Amz-Signature=f6075f76c243a45aa9da660f0f4dff207cbc7f7331046e3cc542ad2d2471cac4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJAT7IF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaQgNcc9eRAU6rprvT9DH9l4z0CT7eDn3na4uv4xmPaAiEA4jVzzRc59lfOHqS%2FC4aMmxPADZdTB1VZLsVckQBQ%2BugqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6FQjZ8JunFF5a%2BWSrcA4TnJLdTWZIJalJQVi1TwakhFP8NLCimz9Xl6g26S%2FqzteOMYP4Pq0r35SZokza45w3apPyJjvYXpqbA9YOpwkn1TkAQEPrBMQmnjCYqESpymnq9tXHxucuz9VcmEuZTbJPI%2BzcJpZ9GhaP4rFbkeXdVKiyomVc9ujBn4zI967xi7iyFSa8kz8FspP%2FaIbpGtpl9V%2FBKrKjM8MRig%2Fosl2rP0U%2B4RnTXJPFsjXcD%2BqijhnuUFG2VrZ%2B%2BuCNKoJCQEWJUELG9ETyPgXv0%2Fi0gNP1ayfL5TIhKl4GQFHQn9JyG8hTAcI8oCrxsmCNAC4OSBCKsDFMKq2VAhCei8tJ6l5eZDvGAHZxbDXZcoq8ZKxUWDmMgTNEolYToWzQNHIXfDt7bQYCZcaZQPKRGJ4Ienh3ck7tFlQ%2BChmHeqgH6PVJFCY2BtE7mDC2URBcWvQ6KcvN3Pda2aot2l0kbGpcTTomzHBargbOzCr5BiyE9yEalzJ89YeA975lV1BuVfYGhau4uRhYgwyt2jv4sprHTqrGj8qeEtbzW8Y0aJYv%2FplWTqNpl1qkagwgJho08TGF%2BkVqMWhJS237iOsHylHbDyCQrV83c3NVQd8kVwZg1pdf%2ByrTUe70SUW%2BBiTmsMMyflL4GOqUBusEOm3xdEkSVN2HuyXc9WIZSpP5sbc92l6V01mFRAprBCg5uSDzo7bi4EmqBTGx12SPIKfa3w6MXquwc2tsjj4Y9owD5UacPYuGPbEGnN8RdUt0rlNfldRRy8Ox3hU8qs4LuYi3YvBH%2B7sO2kaDf27Ln6Ew1SvHK1Xo95FhGJ28JTelF%2B1%2FT6cB%2BUvY8v4fT4SmKJMs0ZV6uQ%2Ftz%2FBwz1695gluL&X-Amz-Signature=cf42742318c361308f74bb26e9997f5d9b84aaa97d4811d2163c05081b3068dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJAT7IF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaQgNcc9eRAU6rprvT9DH9l4z0CT7eDn3na4uv4xmPaAiEA4jVzzRc59lfOHqS%2FC4aMmxPADZdTB1VZLsVckQBQ%2BugqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6FQjZ8JunFF5a%2BWSrcA4TnJLdTWZIJalJQVi1TwakhFP8NLCimz9Xl6g26S%2FqzteOMYP4Pq0r35SZokza45w3apPyJjvYXpqbA9YOpwkn1TkAQEPrBMQmnjCYqESpymnq9tXHxucuz9VcmEuZTbJPI%2BzcJpZ9GhaP4rFbkeXdVKiyomVc9ujBn4zI967xi7iyFSa8kz8FspP%2FaIbpGtpl9V%2FBKrKjM8MRig%2Fosl2rP0U%2B4RnTXJPFsjXcD%2BqijhnuUFG2VrZ%2B%2BuCNKoJCQEWJUELG9ETyPgXv0%2Fi0gNP1ayfL5TIhKl4GQFHQn9JyG8hTAcI8oCrxsmCNAC4OSBCKsDFMKq2VAhCei8tJ6l5eZDvGAHZxbDXZcoq8ZKxUWDmMgTNEolYToWzQNHIXfDt7bQYCZcaZQPKRGJ4Ienh3ck7tFlQ%2BChmHeqgH6PVJFCY2BtE7mDC2URBcWvQ6KcvN3Pda2aot2l0kbGpcTTomzHBargbOzCr5BiyE9yEalzJ89YeA975lV1BuVfYGhau4uRhYgwyt2jv4sprHTqrGj8qeEtbzW8Y0aJYv%2FplWTqNpl1qkagwgJho08TGF%2BkVqMWhJS237iOsHylHbDyCQrV83c3NVQd8kVwZg1pdf%2ByrTUe70SUW%2BBiTmsMMyflL4GOqUBusEOm3xdEkSVN2HuyXc9WIZSpP5sbc92l6V01mFRAprBCg5uSDzo7bi4EmqBTGx12SPIKfa3w6MXquwc2tsjj4Y9owD5UacPYuGPbEGnN8RdUt0rlNfldRRy8Ox3hU8qs4LuYi3YvBH%2B7sO2kaDf27Ln6Ew1SvHK1Xo95FhGJ28JTelF%2B1%2FT6cB%2BUvY8v4fT4SmKJMs0ZV6uQ%2Ftz%2FBwz1695gluL&X-Amz-Signature=721d6454623c2fa4165c3606414c8c8f9eadc7735caadd865b1a75edc8c4baad&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJAT7IF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaQgNcc9eRAU6rprvT9DH9l4z0CT7eDn3na4uv4xmPaAiEA4jVzzRc59lfOHqS%2FC4aMmxPADZdTB1VZLsVckQBQ%2BugqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6FQjZ8JunFF5a%2BWSrcA4TnJLdTWZIJalJQVi1TwakhFP8NLCimz9Xl6g26S%2FqzteOMYP4Pq0r35SZokza45w3apPyJjvYXpqbA9YOpwkn1TkAQEPrBMQmnjCYqESpymnq9tXHxucuz9VcmEuZTbJPI%2BzcJpZ9GhaP4rFbkeXdVKiyomVc9ujBn4zI967xi7iyFSa8kz8FspP%2FaIbpGtpl9V%2FBKrKjM8MRig%2Fosl2rP0U%2B4RnTXJPFsjXcD%2BqijhnuUFG2VrZ%2B%2BuCNKoJCQEWJUELG9ETyPgXv0%2Fi0gNP1ayfL5TIhKl4GQFHQn9JyG8hTAcI8oCrxsmCNAC4OSBCKsDFMKq2VAhCei8tJ6l5eZDvGAHZxbDXZcoq8ZKxUWDmMgTNEolYToWzQNHIXfDt7bQYCZcaZQPKRGJ4Ienh3ck7tFlQ%2BChmHeqgH6PVJFCY2BtE7mDC2URBcWvQ6KcvN3Pda2aot2l0kbGpcTTomzHBargbOzCr5BiyE9yEalzJ89YeA975lV1BuVfYGhau4uRhYgwyt2jv4sprHTqrGj8qeEtbzW8Y0aJYv%2FplWTqNpl1qkagwgJho08TGF%2BkVqMWhJS237iOsHylHbDyCQrV83c3NVQd8kVwZg1pdf%2ByrTUe70SUW%2BBiTmsMMyflL4GOqUBusEOm3xdEkSVN2HuyXc9WIZSpP5sbc92l6V01mFRAprBCg5uSDzo7bi4EmqBTGx12SPIKfa3w6MXquwc2tsjj4Y9owD5UacPYuGPbEGnN8RdUt0rlNfldRRy8Ox3hU8qs4LuYi3YvBH%2B7sO2kaDf27Ln6Ew1SvHK1Xo95FhGJ28JTelF%2B1%2FT6cB%2BUvY8v4fT4SmKJMs0ZV6uQ%2Ftz%2FBwz1695gluL&X-Amz-Signature=f3eed09ef187839f8389de3ed45d45a2441c2c48b5d602b1ee8547f152d45027&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJAT7IF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaQgNcc9eRAU6rprvT9DH9l4z0CT7eDn3na4uv4xmPaAiEA4jVzzRc59lfOHqS%2FC4aMmxPADZdTB1VZLsVckQBQ%2BugqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6FQjZ8JunFF5a%2BWSrcA4TnJLdTWZIJalJQVi1TwakhFP8NLCimz9Xl6g26S%2FqzteOMYP4Pq0r35SZokza45w3apPyJjvYXpqbA9YOpwkn1TkAQEPrBMQmnjCYqESpymnq9tXHxucuz9VcmEuZTbJPI%2BzcJpZ9GhaP4rFbkeXdVKiyomVc9ujBn4zI967xi7iyFSa8kz8FspP%2FaIbpGtpl9V%2FBKrKjM8MRig%2Fosl2rP0U%2B4RnTXJPFsjXcD%2BqijhnuUFG2VrZ%2B%2BuCNKoJCQEWJUELG9ETyPgXv0%2Fi0gNP1ayfL5TIhKl4GQFHQn9JyG8hTAcI8oCrxsmCNAC4OSBCKsDFMKq2VAhCei8tJ6l5eZDvGAHZxbDXZcoq8ZKxUWDmMgTNEolYToWzQNHIXfDt7bQYCZcaZQPKRGJ4Ienh3ck7tFlQ%2BChmHeqgH6PVJFCY2BtE7mDC2URBcWvQ6KcvN3Pda2aot2l0kbGpcTTomzHBargbOzCr5BiyE9yEalzJ89YeA975lV1BuVfYGhau4uRhYgwyt2jv4sprHTqrGj8qeEtbzW8Y0aJYv%2FplWTqNpl1qkagwgJho08TGF%2BkVqMWhJS237iOsHylHbDyCQrV83c3NVQd8kVwZg1pdf%2ByrTUe70SUW%2BBiTmsMMyflL4GOqUBusEOm3xdEkSVN2HuyXc9WIZSpP5sbc92l6V01mFRAprBCg5uSDzo7bi4EmqBTGx12SPIKfa3w6MXquwc2tsjj4Y9owD5UacPYuGPbEGnN8RdUt0rlNfldRRy8Ox3hU8qs4LuYi3YvBH%2B7sO2kaDf27Ln6Ew1SvHK1Xo95FhGJ28JTelF%2B1%2FT6cB%2BUvY8v4fT4SmKJMs0ZV6uQ%2Ftz%2FBwz1695gluL&X-Amz-Signature=30b206013961a0f4bbae4c912a6bcf52a94b40a1d99205e1f001c034b2b740dc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJAT7IF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaQgNcc9eRAU6rprvT9DH9l4z0CT7eDn3na4uv4xmPaAiEA4jVzzRc59lfOHqS%2FC4aMmxPADZdTB1VZLsVckQBQ%2BugqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6FQjZ8JunFF5a%2BWSrcA4TnJLdTWZIJalJQVi1TwakhFP8NLCimz9Xl6g26S%2FqzteOMYP4Pq0r35SZokza45w3apPyJjvYXpqbA9YOpwkn1TkAQEPrBMQmnjCYqESpymnq9tXHxucuz9VcmEuZTbJPI%2BzcJpZ9GhaP4rFbkeXdVKiyomVc9ujBn4zI967xi7iyFSa8kz8FspP%2FaIbpGtpl9V%2FBKrKjM8MRig%2Fosl2rP0U%2B4RnTXJPFsjXcD%2BqijhnuUFG2VrZ%2B%2BuCNKoJCQEWJUELG9ETyPgXv0%2Fi0gNP1ayfL5TIhKl4GQFHQn9JyG8hTAcI8oCrxsmCNAC4OSBCKsDFMKq2VAhCei8tJ6l5eZDvGAHZxbDXZcoq8ZKxUWDmMgTNEolYToWzQNHIXfDt7bQYCZcaZQPKRGJ4Ienh3ck7tFlQ%2BChmHeqgH6PVJFCY2BtE7mDC2URBcWvQ6KcvN3Pda2aot2l0kbGpcTTomzHBargbOzCr5BiyE9yEalzJ89YeA975lV1BuVfYGhau4uRhYgwyt2jv4sprHTqrGj8qeEtbzW8Y0aJYv%2FplWTqNpl1qkagwgJho08TGF%2BkVqMWhJS237iOsHylHbDyCQrV83c3NVQd8kVwZg1pdf%2ByrTUe70SUW%2BBiTmsMMyflL4GOqUBusEOm3xdEkSVN2HuyXc9WIZSpP5sbc92l6V01mFRAprBCg5uSDzo7bi4EmqBTGx12SPIKfa3w6MXquwc2tsjj4Y9owD5UacPYuGPbEGnN8RdUt0rlNfldRRy8Ox3hU8qs4LuYi3YvBH%2B7sO2kaDf27Ln6Ew1SvHK1Xo95FhGJ28JTelF%2B1%2FT6cB%2BUvY8v4fT4SmKJMs0ZV6uQ%2Ftz%2FBwz1695gluL&X-Amz-Signature=a1de031a1c71b95ddd2d6888a08bb267bbb56b901c47cb3b987c2d9e8cd8f8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
