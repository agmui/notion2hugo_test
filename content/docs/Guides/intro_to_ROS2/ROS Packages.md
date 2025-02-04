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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KSKYJI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVQyaLOIVfQSPC63xg3LKo0DTkUm%2F2o0wpV342aIvnTwIgWfsY%2BAanowDVCNWRBrAotK0yo51s%2BZUgBo2BlXeVdeIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQgE1N8aP6YDocBpSrcA85OUVTj4Q%2FMnJL4VWCOkQB%2BnziEXruGXKVCvSuxf5YResJ%2B7fMWWe5IRoSD52D%2BR3zgc9rg%2BiazvIf0vyEHPhKO548PwTf83U6q6iitVEwqTAyx4j%2BbZPQ4pGttrwqBEMI6j90yRz%2FtE3uA7Bb2VgqCsTtq1Gb0xkkniVPT3DsxIpBNUt8M5eYRB4Q4nI36vN3GLyZ4wxDchbDbZ%2BiUaUfahDW0JnMaAspslriBGCfsfVxijMjUSxFXUmZjUTnM7rMQLFPL6YOgxDnTCuO4PpsRvSzHFPNSrHw7oVzpVHdAF%2BnRFv%2FiPsK97ykRTMoDqkqCsPRJlAVKwsjdCFQHtsAMWz7GRJNK7jhiwyeEYhmyc4XforUk1Mj2xSIEAtkiBLIobl8hliKX4A106IIRErJypYmFQ9BBPwcigOlrsZStCD7ZsyejzW0LcoAfVxBFATWOfSXmhCbLINMUV7XQVIBi4HAl1TzidVXW2F%2Bx9pXuSGy9%2FAwQS50qH6Vdu0%2BhzCgUiChOtO6lhfx%2BnmDNzvge7Q%2FefvP5vdZIKul5U3UtkwFkt3gH8QVdsaKHggyd86lBaijlpElX1F91IP3PRbVoY3%2BPjZKDtjrqm4h%2FSS9PQaUjxh%2Bl8rNjDbVgMI%2Bjhr0GOqUBTe%2FaNWZ5RYfUtTcP7qO2sVVa8a6c1Pb2EHjeaD7YDXtSqM4%2Bv4wAXuQhc7sXAtGqCoQqtNE7LhCRZZDXR%2Fk2shGz3DF8CJ36RfI81pZoAECO%2FkgqG7gqMR%2BgOLlO46n2H2mseGbshXT37ZVDDjHlMI%2BVtychMrZJaTE3sVT0lnWRrjQWAg4sDnrbQwtIqfRUfbWGMBiFumnnA4OvZLITwpVghBb9&X-Amz-Signature=41850ee9617625a790d1e9b97b294cba29432641e0b3f68d8cb71a0a241ee905&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KSKYJI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVQyaLOIVfQSPC63xg3LKo0DTkUm%2F2o0wpV342aIvnTwIgWfsY%2BAanowDVCNWRBrAotK0yo51s%2BZUgBo2BlXeVdeIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQgE1N8aP6YDocBpSrcA85OUVTj4Q%2FMnJL4VWCOkQB%2BnziEXruGXKVCvSuxf5YResJ%2B7fMWWe5IRoSD52D%2BR3zgc9rg%2BiazvIf0vyEHPhKO548PwTf83U6q6iitVEwqTAyx4j%2BbZPQ4pGttrwqBEMI6j90yRz%2FtE3uA7Bb2VgqCsTtq1Gb0xkkniVPT3DsxIpBNUt8M5eYRB4Q4nI36vN3GLyZ4wxDchbDbZ%2BiUaUfahDW0JnMaAspslriBGCfsfVxijMjUSxFXUmZjUTnM7rMQLFPL6YOgxDnTCuO4PpsRvSzHFPNSrHw7oVzpVHdAF%2BnRFv%2FiPsK97ykRTMoDqkqCsPRJlAVKwsjdCFQHtsAMWz7GRJNK7jhiwyeEYhmyc4XforUk1Mj2xSIEAtkiBLIobl8hliKX4A106IIRErJypYmFQ9BBPwcigOlrsZStCD7ZsyejzW0LcoAfVxBFATWOfSXmhCbLINMUV7XQVIBi4HAl1TzidVXW2F%2Bx9pXuSGy9%2FAwQS50qH6Vdu0%2BhzCgUiChOtO6lhfx%2BnmDNzvge7Q%2FefvP5vdZIKul5U3UtkwFkt3gH8QVdsaKHggyd86lBaijlpElX1F91IP3PRbVoY3%2BPjZKDtjrqm4h%2FSS9PQaUjxh%2Bl8rNjDbVgMI%2Bjhr0GOqUBTe%2FaNWZ5RYfUtTcP7qO2sVVa8a6c1Pb2EHjeaD7YDXtSqM4%2Bv4wAXuQhc7sXAtGqCoQqtNE7LhCRZZDXR%2Fk2shGz3DF8CJ36RfI81pZoAECO%2FkgqG7gqMR%2BgOLlO46n2H2mseGbshXT37ZVDDjHlMI%2BVtychMrZJaTE3sVT0lnWRrjQWAg4sDnrbQwtIqfRUfbWGMBiFumnnA4OvZLITwpVghBb9&X-Amz-Signature=392cc41e8dbf333046aa3df1869996b76b7b4152563c3fb07f67ddc7a580b208&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KSKYJI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVQyaLOIVfQSPC63xg3LKo0DTkUm%2F2o0wpV342aIvnTwIgWfsY%2BAanowDVCNWRBrAotK0yo51s%2BZUgBo2BlXeVdeIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQgE1N8aP6YDocBpSrcA85OUVTj4Q%2FMnJL4VWCOkQB%2BnziEXruGXKVCvSuxf5YResJ%2B7fMWWe5IRoSD52D%2BR3zgc9rg%2BiazvIf0vyEHPhKO548PwTf83U6q6iitVEwqTAyx4j%2BbZPQ4pGttrwqBEMI6j90yRz%2FtE3uA7Bb2VgqCsTtq1Gb0xkkniVPT3DsxIpBNUt8M5eYRB4Q4nI36vN3GLyZ4wxDchbDbZ%2BiUaUfahDW0JnMaAspslriBGCfsfVxijMjUSxFXUmZjUTnM7rMQLFPL6YOgxDnTCuO4PpsRvSzHFPNSrHw7oVzpVHdAF%2BnRFv%2FiPsK97ykRTMoDqkqCsPRJlAVKwsjdCFQHtsAMWz7GRJNK7jhiwyeEYhmyc4XforUk1Mj2xSIEAtkiBLIobl8hliKX4A106IIRErJypYmFQ9BBPwcigOlrsZStCD7ZsyejzW0LcoAfVxBFATWOfSXmhCbLINMUV7XQVIBi4HAl1TzidVXW2F%2Bx9pXuSGy9%2FAwQS50qH6Vdu0%2BhzCgUiChOtO6lhfx%2BnmDNzvge7Q%2FefvP5vdZIKul5U3UtkwFkt3gH8QVdsaKHggyd86lBaijlpElX1F91IP3PRbVoY3%2BPjZKDtjrqm4h%2FSS9PQaUjxh%2Bl8rNjDbVgMI%2Bjhr0GOqUBTe%2FaNWZ5RYfUtTcP7qO2sVVa8a6c1Pb2EHjeaD7YDXtSqM4%2Bv4wAXuQhc7sXAtGqCoQqtNE7LhCRZZDXR%2Fk2shGz3DF8CJ36RfI81pZoAECO%2FkgqG7gqMR%2BgOLlO46n2H2mseGbshXT37ZVDDjHlMI%2BVtychMrZJaTE3sVT0lnWRrjQWAg4sDnrbQwtIqfRUfbWGMBiFumnnA4OvZLITwpVghBb9&X-Amz-Signature=556f3f4309a1580b0e6b1cacd882f5860178fc9748369a34bb26a8c2143ea7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KSKYJI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVQyaLOIVfQSPC63xg3LKo0DTkUm%2F2o0wpV342aIvnTwIgWfsY%2BAanowDVCNWRBrAotK0yo51s%2BZUgBo2BlXeVdeIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQgE1N8aP6YDocBpSrcA85OUVTj4Q%2FMnJL4VWCOkQB%2BnziEXruGXKVCvSuxf5YResJ%2B7fMWWe5IRoSD52D%2BR3zgc9rg%2BiazvIf0vyEHPhKO548PwTf83U6q6iitVEwqTAyx4j%2BbZPQ4pGttrwqBEMI6j90yRz%2FtE3uA7Bb2VgqCsTtq1Gb0xkkniVPT3DsxIpBNUt8M5eYRB4Q4nI36vN3GLyZ4wxDchbDbZ%2BiUaUfahDW0JnMaAspslriBGCfsfVxijMjUSxFXUmZjUTnM7rMQLFPL6YOgxDnTCuO4PpsRvSzHFPNSrHw7oVzpVHdAF%2BnRFv%2FiPsK97ykRTMoDqkqCsPRJlAVKwsjdCFQHtsAMWz7GRJNK7jhiwyeEYhmyc4XforUk1Mj2xSIEAtkiBLIobl8hliKX4A106IIRErJypYmFQ9BBPwcigOlrsZStCD7ZsyejzW0LcoAfVxBFATWOfSXmhCbLINMUV7XQVIBi4HAl1TzidVXW2F%2Bx9pXuSGy9%2FAwQS50qH6Vdu0%2BhzCgUiChOtO6lhfx%2BnmDNzvge7Q%2FefvP5vdZIKul5U3UtkwFkt3gH8QVdsaKHggyd86lBaijlpElX1F91IP3PRbVoY3%2BPjZKDtjrqm4h%2FSS9PQaUjxh%2Bl8rNjDbVgMI%2Bjhr0GOqUBTe%2FaNWZ5RYfUtTcP7qO2sVVa8a6c1Pb2EHjeaD7YDXtSqM4%2Bv4wAXuQhc7sXAtGqCoQqtNE7LhCRZZDXR%2Fk2shGz3DF8CJ36RfI81pZoAECO%2FkgqG7gqMR%2BgOLlO46n2H2mseGbshXT37ZVDDjHlMI%2BVtychMrZJaTE3sVT0lnWRrjQWAg4sDnrbQwtIqfRUfbWGMBiFumnnA4OvZLITwpVghBb9&X-Amz-Signature=8038a29b39a7d1d237a6ba403de405253d1ecbf13b9b2d4a297c8790476d7f34&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KSKYJI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVQyaLOIVfQSPC63xg3LKo0DTkUm%2F2o0wpV342aIvnTwIgWfsY%2BAanowDVCNWRBrAotK0yo51s%2BZUgBo2BlXeVdeIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQgE1N8aP6YDocBpSrcA85OUVTj4Q%2FMnJL4VWCOkQB%2BnziEXruGXKVCvSuxf5YResJ%2B7fMWWe5IRoSD52D%2BR3zgc9rg%2BiazvIf0vyEHPhKO548PwTf83U6q6iitVEwqTAyx4j%2BbZPQ4pGttrwqBEMI6j90yRz%2FtE3uA7Bb2VgqCsTtq1Gb0xkkniVPT3DsxIpBNUt8M5eYRB4Q4nI36vN3GLyZ4wxDchbDbZ%2BiUaUfahDW0JnMaAspslriBGCfsfVxijMjUSxFXUmZjUTnM7rMQLFPL6YOgxDnTCuO4PpsRvSzHFPNSrHw7oVzpVHdAF%2BnRFv%2FiPsK97ykRTMoDqkqCsPRJlAVKwsjdCFQHtsAMWz7GRJNK7jhiwyeEYhmyc4XforUk1Mj2xSIEAtkiBLIobl8hliKX4A106IIRErJypYmFQ9BBPwcigOlrsZStCD7ZsyejzW0LcoAfVxBFATWOfSXmhCbLINMUV7XQVIBi4HAl1TzidVXW2F%2Bx9pXuSGy9%2FAwQS50qH6Vdu0%2BhzCgUiChOtO6lhfx%2BnmDNzvge7Q%2FefvP5vdZIKul5U3UtkwFkt3gH8QVdsaKHggyd86lBaijlpElX1F91IP3PRbVoY3%2BPjZKDtjrqm4h%2FSS9PQaUjxh%2Bl8rNjDbVgMI%2Bjhr0GOqUBTe%2FaNWZ5RYfUtTcP7qO2sVVa8a6c1Pb2EHjeaD7YDXtSqM4%2Bv4wAXuQhc7sXAtGqCoQqtNE7LhCRZZDXR%2Fk2shGz3DF8CJ36RfI81pZoAECO%2FkgqG7gqMR%2BgOLlO46n2H2mseGbshXT37ZVDDjHlMI%2BVtychMrZJaTE3sVT0lnWRrjQWAg4sDnrbQwtIqfRUfbWGMBiFumnnA4OvZLITwpVghBb9&X-Amz-Signature=0a3c17e4551d16c7be4b6dbbb8d06f89f0c960c66b00c3e79a8b473b74e20125&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KSKYJI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVQyaLOIVfQSPC63xg3LKo0DTkUm%2F2o0wpV342aIvnTwIgWfsY%2BAanowDVCNWRBrAotK0yo51s%2BZUgBo2BlXeVdeIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQgE1N8aP6YDocBpSrcA85OUVTj4Q%2FMnJL4VWCOkQB%2BnziEXruGXKVCvSuxf5YResJ%2B7fMWWe5IRoSD52D%2BR3zgc9rg%2BiazvIf0vyEHPhKO548PwTf83U6q6iitVEwqTAyx4j%2BbZPQ4pGttrwqBEMI6j90yRz%2FtE3uA7Bb2VgqCsTtq1Gb0xkkniVPT3DsxIpBNUt8M5eYRB4Q4nI36vN3GLyZ4wxDchbDbZ%2BiUaUfahDW0JnMaAspslriBGCfsfVxijMjUSxFXUmZjUTnM7rMQLFPL6YOgxDnTCuO4PpsRvSzHFPNSrHw7oVzpVHdAF%2BnRFv%2FiPsK97ykRTMoDqkqCsPRJlAVKwsjdCFQHtsAMWz7GRJNK7jhiwyeEYhmyc4XforUk1Mj2xSIEAtkiBLIobl8hliKX4A106IIRErJypYmFQ9BBPwcigOlrsZStCD7ZsyejzW0LcoAfVxBFATWOfSXmhCbLINMUV7XQVIBi4HAl1TzidVXW2F%2Bx9pXuSGy9%2FAwQS50qH6Vdu0%2BhzCgUiChOtO6lhfx%2BnmDNzvge7Q%2FefvP5vdZIKul5U3UtkwFkt3gH8QVdsaKHggyd86lBaijlpElX1F91IP3PRbVoY3%2BPjZKDtjrqm4h%2FSS9PQaUjxh%2Bl8rNjDbVgMI%2Bjhr0GOqUBTe%2FaNWZ5RYfUtTcP7qO2sVVa8a6c1Pb2EHjeaD7YDXtSqM4%2Bv4wAXuQhc7sXAtGqCoQqtNE7LhCRZZDXR%2Fk2shGz3DF8CJ36RfI81pZoAECO%2FkgqG7gqMR%2BgOLlO46n2H2mseGbshXT37ZVDDjHlMI%2BVtychMrZJaTE3sVT0lnWRrjQWAg4sDnrbQwtIqfRUfbWGMBiFumnnA4OvZLITwpVghBb9&X-Amz-Signature=9d4a77258ffcfc65568abf9bb0a4bd225e9d81a530aa531396c5711a886609a3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KSKYJI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDVQyaLOIVfQSPC63xg3LKo0DTkUm%2F2o0wpV342aIvnTwIgWfsY%2BAanowDVCNWRBrAotK0yo51s%2BZUgBo2BlXeVdeIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQgE1N8aP6YDocBpSrcA85OUVTj4Q%2FMnJL4VWCOkQB%2BnziEXruGXKVCvSuxf5YResJ%2B7fMWWe5IRoSD52D%2BR3zgc9rg%2BiazvIf0vyEHPhKO548PwTf83U6q6iitVEwqTAyx4j%2BbZPQ4pGttrwqBEMI6j90yRz%2FtE3uA7Bb2VgqCsTtq1Gb0xkkniVPT3DsxIpBNUt8M5eYRB4Q4nI36vN3GLyZ4wxDchbDbZ%2BiUaUfahDW0JnMaAspslriBGCfsfVxijMjUSxFXUmZjUTnM7rMQLFPL6YOgxDnTCuO4PpsRvSzHFPNSrHw7oVzpVHdAF%2BnRFv%2FiPsK97ykRTMoDqkqCsPRJlAVKwsjdCFQHtsAMWz7GRJNK7jhiwyeEYhmyc4XforUk1Mj2xSIEAtkiBLIobl8hliKX4A106IIRErJypYmFQ9BBPwcigOlrsZStCD7ZsyejzW0LcoAfVxBFATWOfSXmhCbLINMUV7XQVIBi4HAl1TzidVXW2F%2Bx9pXuSGy9%2FAwQS50qH6Vdu0%2BhzCgUiChOtO6lhfx%2BnmDNzvge7Q%2FefvP5vdZIKul5U3UtkwFkt3gH8QVdsaKHggyd86lBaijlpElX1F91IP3PRbVoY3%2BPjZKDtjrqm4h%2FSS9PQaUjxh%2Bl8rNjDbVgMI%2Bjhr0GOqUBTe%2FaNWZ5RYfUtTcP7qO2sVVa8a6c1Pb2EHjeaD7YDXtSqM4%2Bv4wAXuQhc7sXAtGqCoQqtNE7LhCRZZDXR%2Fk2shGz3DF8CJ36RfI81pZoAECO%2FkgqG7gqMR%2BgOLlO46n2H2mseGbshXT37ZVDDjHlMI%2BVtychMrZJaTE3sVT0lnWRrjQWAg4sDnrbQwtIqfRUfbWGMBiFumnnA4OvZLITwpVghBb9&X-Amz-Signature=fc0a372bc33de5072bf7aab5b658cadec0f9740d24dcd493bacaa3e4c83cc115&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
