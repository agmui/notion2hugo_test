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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7734MVL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHICRMScD4imx9Ly%2B%2BueSiuDuB0YKVwEF1Co4OoqHc8AIgZ8qGToTu6ZX%2FMLTXj2jwz2eYU1703o74RhB3%2BoYE9cMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLTNVDhsLZkAEjbaircA8I1l%2B%2Fi4rKNE70U8KQVLQwOVhyamldVy5ac8enMA22c3q1U5FTFgvNZKOjLloNKEq0qNfNFyGh4kRuK7i7RDtfWbr6DeHSCJ3UZXr07eZ5k1uoM34OFna9AAbzB7%2FuPZ%2BitcNR%2FGMXur7RVBk%2Fsx4DasbBbkzWMuO0xHqGmgQIfO%2FdabtS0O%2BsvbgZ26vPDFM2l%2Bjqp14QDugzfgU3iVXQihtB%2Bw8gYPb6s%2F1y3WLvehpSoqL8ejL9qSNxLf1F86A7rzAhEg3%2BvE9YPtGBUo7ithbUcjrxO7ryvb1IWQ15I%2BhWbbVy7Frl4DVN2S%2FBRzqhhe7xmZWj9C27H8Nku5uXYI4UuYZJayEBMfGK%2BswkwKTsJfktK3AZ6PtFFsjIFBLDd%2Fu2q4L5tAQzkpwYJ2MkN1n02VaxT6TH8SsYRlpomrNxRDt81z%2BnUjCe5xB9b2jSwhAi0sBUs1htXdLT%2BmiXPTMVfgKlAj7g%2F7BqUL5bq9pIXsuLI8gtSbUurQedo2cDJ7GSysWTngRZAk1pBZ%2B5eJezBAmAsmS%2FOZb9L8N8AzMCPwAIMzXNChlKVsVVcF95EGF8pxQxklCOt5kJ8zNXElBbC0xlFoEx7OzHnrgUVguaI%2BY6Z271JJoufMOrAyL4GOqUBrNlGD67y55hAGDW3eQ1Pp5%2FbiaUUCVTNzIIVpl7rnK%2BKJUwxG0ovDQY1Pq2J6YkY4h%2FkXgN0LfWHJjsV3Rx5fhFVroY3os8xfo%2Bh0uvmXtOqN1rrccJfamDZp8kzNp3uuDmHLk%2BM7rPfT4LNIOlGXdfs2idlFxkBIB7fT74zdf%2FGZOhuo%2B32mbLuU3HdQoxSmGcxfAGIJHvQNjZHDK9EYMMlbkVR&X-Amz-Signature=e142ae080ffcb823e4625542debbb2366df645e6d5b0abf9b98e1971c127b3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7734MVL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHICRMScD4imx9Ly%2B%2BueSiuDuB0YKVwEF1Co4OoqHc8AIgZ8qGToTu6ZX%2FMLTXj2jwz2eYU1703o74RhB3%2BoYE9cMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLTNVDhsLZkAEjbaircA8I1l%2B%2Fi4rKNE70U8KQVLQwOVhyamldVy5ac8enMA22c3q1U5FTFgvNZKOjLloNKEq0qNfNFyGh4kRuK7i7RDtfWbr6DeHSCJ3UZXr07eZ5k1uoM34OFna9AAbzB7%2FuPZ%2BitcNR%2FGMXur7RVBk%2Fsx4DasbBbkzWMuO0xHqGmgQIfO%2FdabtS0O%2BsvbgZ26vPDFM2l%2Bjqp14QDugzfgU3iVXQihtB%2Bw8gYPb6s%2F1y3WLvehpSoqL8ejL9qSNxLf1F86A7rzAhEg3%2BvE9YPtGBUo7ithbUcjrxO7ryvb1IWQ15I%2BhWbbVy7Frl4DVN2S%2FBRzqhhe7xmZWj9C27H8Nku5uXYI4UuYZJayEBMfGK%2BswkwKTsJfktK3AZ6PtFFsjIFBLDd%2Fu2q4L5tAQzkpwYJ2MkN1n02VaxT6TH8SsYRlpomrNxRDt81z%2BnUjCe5xB9b2jSwhAi0sBUs1htXdLT%2BmiXPTMVfgKlAj7g%2F7BqUL5bq9pIXsuLI8gtSbUurQedo2cDJ7GSysWTngRZAk1pBZ%2B5eJezBAmAsmS%2FOZb9L8N8AzMCPwAIMzXNChlKVsVVcF95EGF8pxQxklCOt5kJ8zNXElBbC0xlFoEx7OzHnrgUVguaI%2BY6Z271JJoufMOrAyL4GOqUBrNlGD67y55hAGDW3eQ1Pp5%2FbiaUUCVTNzIIVpl7rnK%2BKJUwxG0ovDQY1Pq2J6YkY4h%2FkXgN0LfWHJjsV3Rx5fhFVroY3os8xfo%2Bh0uvmXtOqN1rrccJfamDZp8kzNp3uuDmHLk%2BM7rPfT4LNIOlGXdfs2idlFxkBIB7fT74zdf%2FGZOhuo%2B32mbLuU3HdQoxSmGcxfAGIJHvQNjZHDK9EYMMlbkVR&X-Amz-Signature=c10d45f8168afb3323070a0f86436fd8933bbe81fbdb1018f6fcef43395f2964&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7734MVL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHICRMScD4imx9Ly%2B%2BueSiuDuB0YKVwEF1Co4OoqHc8AIgZ8qGToTu6ZX%2FMLTXj2jwz2eYU1703o74RhB3%2BoYE9cMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLTNVDhsLZkAEjbaircA8I1l%2B%2Fi4rKNE70U8KQVLQwOVhyamldVy5ac8enMA22c3q1U5FTFgvNZKOjLloNKEq0qNfNFyGh4kRuK7i7RDtfWbr6DeHSCJ3UZXr07eZ5k1uoM34OFna9AAbzB7%2FuPZ%2BitcNR%2FGMXur7RVBk%2Fsx4DasbBbkzWMuO0xHqGmgQIfO%2FdabtS0O%2BsvbgZ26vPDFM2l%2Bjqp14QDugzfgU3iVXQihtB%2Bw8gYPb6s%2F1y3WLvehpSoqL8ejL9qSNxLf1F86A7rzAhEg3%2BvE9YPtGBUo7ithbUcjrxO7ryvb1IWQ15I%2BhWbbVy7Frl4DVN2S%2FBRzqhhe7xmZWj9C27H8Nku5uXYI4UuYZJayEBMfGK%2BswkwKTsJfktK3AZ6PtFFsjIFBLDd%2Fu2q4L5tAQzkpwYJ2MkN1n02VaxT6TH8SsYRlpomrNxRDt81z%2BnUjCe5xB9b2jSwhAi0sBUs1htXdLT%2BmiXPTMVfgKlAj7g%2F7BqUL5bq9pIXsuLI8gtSbUurQedo2cDJ7GSysWTngRZAk1pBZ%2B5eJezBAmAsmS%2FOZb9L8N8AzMCPwAIMzXNChlKVsVVcF95EGF8pxQxklCOt5kJ8zNXElBbC0xlFoEx7OzHnrgUVguaI%2BY6Z271JJoufMOrAyL4GOqUBrNlGD67y55hAGDW3eQ1Pp5%2FbiaUUCVTNzIIVpl7rnK%2BKJUwxG0ovDQY1Pq2J6YkY4h%2FkXgN0LfWHJjsV3Rx5fhFVroY3os8xfo%2Bh0uvmXtOqN1rrccJfamDZp8kzNp3uuDmHLk%2BM7rPfT4LNIOlGXdfs2idlFxkBIB7fT74zdf%2FGZOhuo%2B32mbLuU3HdQoxSmGcxfAGIJHvQNjZHDK9EYMMlbkVR&X-Amz-Signature=52a8d1e01ee293e627a4896b6a8281556a31b5731ac4e2ccc95ef61faee34129&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7734MVL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHICRMScD4imx9Ly%2B%2BueSiuDuB0YKVwEF1Co4OoqHc8AIgZ8qGToTu6ZX%2FMLTXj2jwz2eYU1703o74RhB3%2BoYE9cMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLTNVDhsLZkAEjbaircA8I1l%2B%2Fi4rKNE70U8KQVLQwOVhyamldVy5ac8enMA22c3q1U5FTFgvNZKOjLloNKEq0qNfNFyGh4kRuK7i7RDtfWbr6DeHSCJ3UZXr07eZ5k1uoM34OFna9AAbzB7%2FuPZ%2BitcNR%2FGMXur7RVBk%2Fsx4DasbBbkzWMuO0xHqGmgQIfO%2FdabtS0O%2BsvbgZ26vPDFM2l%2Bjqp14QDugzfgU3iVXQihtB%2Bw8gYPb6s%2F1y3WLvehpSoqL8ejL9qSNxLf1F86A7rzAhEg3%2BvE9YPtGBUo7ithbUcjrxO7ryvb1IWQ15I%2BhWbbVy7Frl4DVN2S%2FBRzqhhe7xmZWj9C27H8Nku5uXYI4UuYZJayEBMfGK%2BswkwKTsJfktK3AZ6PtFFsjIFBLDd%2Fu2q4L5tAQzkpwYJ2MkN1n02VaxT6TH8SsYRlpomrNxRDt81z%2BnUjCe5xB9b2jSwhAi0sBUs1htXdLT%2BmiXPTMVfgKlAj7g%2F7BqUL5bq9pIXsuLI8gtSbUurQedo2cDJ7GSysWTngRZAk1pBZ%2B5eJezBAmAsmS%2FOZb9L8N8AzMCPwAIMzXNChlKVsVVcF95EGF8pxQxklCOt5kJ8zNXElBbC0xlFoEx7OzHnrgUVguaI%2BY6Z271JJoufMOrAyL4GOqUBrNlGD67y55hAGDW3eQ1Pp5%2FbiaUUCVTNzIIVpl7rnK%2BKJUwxG0ovDQY1Pq2J6YkY4h%2FkXgN0LfWHJjsV3Rx5fhFVroY3os8xfo%2Bh0uvmXtOqN1rrccJfamDZp8kzNp3uuDmHLk%2BM7rPfT4LNIOlGXdfs2idlFxkBIB7fT74zdf%2FGZOhuo%2B32mbLuU3HdQoxSmGcxfAGIJHvQNjZHDK9EYMMlbkVR&X-Amz-Signature=f80659aa17c10ee71c4aefeedb257e9db3606ddd5e3b6280f4c9cabacc0af7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7734MVL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHICRMScD4imx9Ly%2B%2BueSiuDuB0YKVwEF1Co4OoqHc8AIgZ8qGToTu6ZX%2FMLTXj2jwz2eYU1703o74RhB3%2BoYE9cMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLTNVDhsLZkAEjbaircA8I1l%2B%2Fi4rKNE70U8KQVLQwOVhyamldVy5ac8enMA22c3q1U5FTFgvNZKOjLloNKEq0qNfNFyGh4kRuK7i7RDtfWbr6DeHSCJ3UZXr07eZ5k1uoM34OFna9AAbzB7%2FuPZ%2BitcNR%2FGMXur7RVBk%2Fsx4DasbBbkzWMuO0xHqGmgQIfO%2FdabtS0O%2BsvbgZ26vPDFM2l%2Bjqp14QDugzfgU3iVXQihtB%2Bw8gYPb6s%2F1y3WLvehpSoqL8ejL9qSNxLf1F86A7rzAhEg3%2BvE9YPtGBUo7ithbUcjrxO7ryvb1IWQ15I%2BhWbbVy7Frl4DVN2S%2FBRzqhhe7xmZWj9C27H8Nku5uXYI4UuYZJayEBMfGK%2BswkwKTsJfktK3AZ6PtFFsjIFBLDd%2Fu2q4L5tAQzkpwYJ2MkN1n02VaxT6TH8SsYRlpomrNxRDt81z%2BnUjCe5xB9b2jSwhAi0sBUs1htXdLT%2BmiXPTMVfgKlAj7g%2F7BqUL5bq9pIXsuLI8gtSbUurQedo2cDJ7GSysWTngRZAk1pBZ%2B5eJezBAmAsmS%2FOZb9L8N8AzMCPwAIMzXNChlKVsVVcF95EGF8pxQxklCOt5kJ8zNXElBbC0xlFoEx7OzHnrgUVguaI%2BY6Z271JJoufMOrAyL4GOqUBrNlGD67y55hAGDW3eQ1Pp5%2FbiaUUCVTNzIIVpl7rnK%2BKJUwxG0ovDQY1Pq2J6YkY4h%2FkXgN0LfWHJjsV3Rx5fhFVroY3os8xfo%2Bh0uvmXtOqN1rrccJfamDZp8kzNp3uuDmHLk%2BM7rPfT4LNIOlGXdfs2idlFxkBIB7fT74zdf%2FGZOhuo%2B32mbLuU3HdQoxSmGcxfAGIJHvQNjZHDK9EYMMlbkVR&X-Amz-Signature=8b53a6197636e53a5be040101042386dd1496767b736a62d1aacc564b9310166&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7734MVL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHICRMScD4imx9Ly%2B%2BueSiuDuB0YKVwEF1Co4OoqHc8AIgZ8qGToTu6ZX%2FMLTXj2jwz2eYU1703o74RhB3%2BoYE9cMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLTNVDhsLZkAEjbaircA8I1l%2B%2Fi4rKNE70U8KQVLQwOVhyamldVy5ac8enMA22c3q1U5FTFgvNZKOjLloNKEq0qNfNFyGh4kRuK7i7RDtfWbr6DeHSCJ3UZXr07eZ5k1uoM34OFna9AAbzB7%2FuPZ%2BitcNR%2FGMXur7RVBk%2Fsx4DasbBbkzWMuO0xHqGmgQIfO%2FdabtS0O%2BsvbgZ26vPDFM2l%2Bjqp14QDugzfgU3iVXQihtB%2Bw8gYPb6s%2F1y3WLvehpSoqL8ejL9qSNxLf1F86A7rzAhEg3%2BvE9YPtGBUo7ithbUcjrxO7ryvb1IWQ15I%2BhWbbVy7Frl4DVN2S%2FBRzqhhe7xmZWj9C27H8Nku5uXYI4UuYZJayEBMfGK%2BswkwKTsJfktK3AZ6PtFFsjIFBLDd%2Fu2q4L5tAQzkpwYJ2MkN1n02VaxT6TH8SsYRlpomrNxRDt81z%2BnUjCe5xB9b2jSwhAi0sBUs1htXdLT%2BmiXPTMVfgKlAj7g%2F7BqUL5bq9pIXsuLI8gtSbUurQedo2cDJ7GSysWTngRZAk1pBZ%2B5eJezBAmAsmS%2FOZb9L8N8AzMCPwAIMzXNChlKVsVVcF95EGF8pxQxklCOt5kJ8zNXElBbC0xlFoEx7OzHnrgUVguaI%2BY6Z271JJoufMOrAyL4GOqUBrNlGD67y55hAGDW3eQ1Pp5%2FbiaUUCVTNzIIVpl7rnK%2BKJUwxG0ovDQY1Pq2J6YkY4h%2FkXgN0LfWHJjsV3Rx5fhFVroY3os8xfo%2Bh0uvmXtOqN1rrccJfamDZp8kzNp3uuDmHLk%2BM7rPfT4LNIOlGXdfs2idlFxkBIB7fT74zdf%2FGZOhuo%2B32mbLuU3HdQoxSmGcxfAGIJHvQNjZHDK9EYMMlbkVR&X-Amz-Signature=a51dc549b9a8cb18b224913d7e6851ad8f5614895683879edb727a87f1215138&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7734MVL%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHICRMScD4imx9Ly%2B%2BueSiuDuB0YKVwEF1Co4OoqHc8AIgZ8qGToTu6ZX%2FMLTXj2jwz2eYU1703o74RhB3%2BoYE9cMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLTNVDhsLZkAEjbaircA8I1l%2B%2Fi4rKNE70U8KQVLQwOVhyamldVy5ac8enMA22c3q1U5FTFgvNZKOjLloNKEq0qNfNFyGh4kRuK7i7RDtfWbr6DeHSCJ3UZXr07eZ5k1uoM34OFna9AAbzB7%2FuPZ%2BitcNR%2FGMXur7RVBk%2Fsx4DasbBbkzWMuO0xHqGmgQIfO%2FdabtS0O%2BsvbgZ26vPDFM2l%2Bjqp14QDugzfgU3iVXQihtB%2Bw8gYPb6s%2F1y3WLvehpSoqL8ejL9qSNxLf1F86A7rzAhEg3%2BvE9YPtGBUo7ithbUcjrxO7ryvb1IWQ15I%2BhWbbVy7Frl4DVN2S%2FBRzqhhe7xmZWj9C27H8Nku5uXYI4UuYZJayEBMfGK%2BswkwKTsJfktK3AZ6PtFFsjIFBLDd%2Fu2q4L5tAQzkpwYJ2MkN1n02VaxT6TH8SsYRlpomrNxRDt81z%2BnUjCe5xB9b2jSwhAi0sBUs1htXdLT%2BmiXPTMVfgKlAj7g%2F7BqUL5bq9pIXsuLI8gtSbUurQedo2cDJ7GSysWTngRZAk1pBZ%2B5eJezBAmAsmS%2FOZb9L8N8AzMCPwAIMzXNChlKVsVVcF95EGF8pxQxklCOt5kJ8zNXElBbC0xlFoEx7OzHnrgUVguaI%2BY6Z271JJoufMOrAyL4GOqUBrNlGD67y55hAGDW3eQ1Pp5%2FbiaUUCVTNzIIVpl7rnK%2BKJUwxG0ovDQY1Pq2J6YkY4h%2FkXgN0LfWHJjsV3Rx5fhFVroY3os8xfo%2Bh0uvmXtOqN1rrccJfamDZp8kzNp3uuDmHLk%2BM7rPfT4LNIOlGXdfs2idlFxkBIB7fT74zdf%2FGZOhuo%2B32mbLuU3HdQoxSmGcxfAGIJHvQNjZHDK9EYMMlbkVR&X-Amz-Signature=1adab6b7df9f02a773933dd767b3f164e268290abf0fcac5dac549159334e6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
