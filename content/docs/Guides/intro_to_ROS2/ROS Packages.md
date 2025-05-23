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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3HTXLM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGGVvoAya3XfOboxw%2BLd4vf6b3QVg5%2B%2Bi6TM%2BfO3s9gMAiA5fnkL8JuUqap%2BRtReqKrkVpWAV%2BoIJF2B4YnqYY10AiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QYyY%2B8%2BX5x7sBlkKtwDfLYdKg2HuJbtk6Qt2cMIXDkF3VSd8fUtnoWWk%2FQpboE0KkuXzLXc83ZMzQI4iOSLfKjRkLZdREUqKGJMqmTxSjW%2FiTTzPgBAx2g2oAxOgAavtPjPGj%2Fw2t5N%2Bb6lbqWyRjslIwODF7cTJOXAdm05U9hWvIrTlLclb3rQsNc41koObFUfPIpWBJ8%2FUoJ%2BM0b%2F26e2NvwIVx%2F%2Fh7GH75rX5IoPcNFO9vXL44Un4R56MBiYajsfogUmP2xWsIWNnXUpbFoq1pRJjw%2BdlWJZHAWFSd%2FXlBrIIA4Lq81BnwxKD6M%2FGrNnoCVeP2D1%2FPIakI%2FUCdI1K3%2BgfRGAhuJU3GbAgI5ESaPhLLe1pHJczFnmXxk1%2FE8RyLPGH9R2nHLykYmLWkxsgCsR5PFQt3S0Kyx52P4pdVFI6pvwcl3jG9xskQgxMgCEJiHedO5eHbVhh7DKUUowfEHgTUzxKvo6RgeoAlXz%2BsOUmIF1fqKxzzzaD3Q20gkUEPxGFL6glx95OX3OVyktPTDWDtEzgbJITWz2751OuK9WsawXqZBC64QoKE9dYA6FtvnsjbaVnw1oz%2FbQGWvBnSpa8%2BE7pFx1cMuGN7Ck3w98NP%2F8UgvRGr3RwHVJdQ9ZX0wZ80eXLBUw0vHBwQY6pgFK82Dc04reXJ%2B3VKktA6AWfUgI4Zs1IsSrv6acWAjCtPAsk%2BwFVUwJ4PpAG3hTltoUye61u0%2BfjrvMW2vKovqZp4dC5ooABwCeVmi6WBy1jHJ%2FIsno4UJ9MFNl6XuOa0ormlvSxDZyNUsQGb0LOTTGwjbqZYSfKRpoEh3uxAVCKhGfztovRUVkwM7ZP887J1b4Y1qYm7hhaBQyqmIxDywtWqseJ8xS&X-Amz-Signature=a3eaca670f01d4ca47b30b33b177b26e2d62dc03dcfb54be21d749b68416d0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3HTXLM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGGVvoAya3XfOboxw%2BLd4vf6b3QVg5%2B%2Bi6TM%2BfO3s9gMAiA5fnkL8JuUqap%2BRtReqKrkVpWAV%2BoIJF2B4YnqYY10AiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QYyY%2B8%2BX5x7sBlkKtwDfLYdKg2HuJbtk6Qt2cMIXDkF3VSd8fUtnoWWk%2FQpboE0KkuXzLXc83ZMzQI4iOSLfKjRkLZdREUqKGJMqmTxSjW%2FiTTzPgBAx2g2oAxOgAavtPjPGj%2Fw2t5N%2Bb6lbqWyRjslIwODF7cTJOXAdm05U9hWvIrTlLclb3rQsNc41koObFUfPIpWBJ8%2FUoJ%2BM0b%2F26e2NvwIVx%2F%2Fh7GH75rX5IoPcNFO9vXL44Un4R56MBiYajsfogUmP2xWsIWNnXUpbFoq1pRJjw%2BdlWJZHAWFSd%2FXlBrIIA4Lq81BnwxKD6M%2FGrNnoCVeP2D1%2FPIakI%2FUCdI1K3%2BgfRGAhuJU3GbAgI5ESaPhLLe1pHJczFnmXxk1%2FE8RyLPGH9R2nHLykYmLWkxsgCsR5PFQt3S0Kyx52P4pdVFI6pvwcl3jG9xskQgxMgCEJiHedO5eHbVhh7DKUUowfEHgTUzxKvo6RgeoAlXz%2BsOUmIF1fqKxzzzaD3Q20gkUEPxGFL6glx95OX3OVyktPTDWDtEzgbJITWz2751OuK9WsawXqZBC64QoKE9dYA6FtvnsjbaVnw1oz%2FbQGWvBnSpa8%2BE7pFx1cMuGN7Ck3w98NP%2F8UgvRGr3RwHVJdQ9ZX0wZ80eXLBUw0vHBwQY6pgFK82Dc04reXJ%2B3VKktA6AWfUgI4Zs1IsSrv6acWAjCtPAsk%2BwFVUwJ4PpAG3hTltoUye61u0%2BfjrvMW2vKovqZp4dC5ooABwCeVmi6WBy1jHJ%2FIsno4UJ9MFNl6XuOa0ormlvSxDZyNUsQGb0LOTTGwjbqZYSfKRpoEh3uxAVCKhGfztovRUVkwM7ZP887J1b4Y1qYm7hhaBQyqmIxDywtWqseJ8xS&X-Amz-Signature=dc3b02beeb262bff7109d804b53eb871499c57d5514681734c0db9a4f47107ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3HTXLM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGGVvoAya3XfOboxw%2BLd4vf6b3QVg5%2B%2Bi6TM%2BfO3s9gMAiA5fnkL8JuUqap%2BRtReqKrkVpWAV%2BoIJF2B4YnqYY10AiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QYyY%2B8%2BX5x7sBlkKtwDfLYdKg2HuJbtk6Qt2cMIXDkF3VSd8fUtnoWWk%2FQpboE0KkuXzLXc83ZMzQI4iOSLfKjRkLZdREUqKGJMqmTxSjW%2FiTTzPgBAx2g2oAxOgAavtPjPGj%2Fw2t5N%2Bb6lbqWyRjslIwODF7cTJOXAdm05U9hWvIrTlLclb3rQsNc41koObFUfPIpWBJ8%2FUoJ%2BM0b%2F26e2NvwIVx%2F%2Fh7GH75rX5IoPcNFO9vXL44Un4R56MBiYajsfogUmP2xWsIWNnXUpbFoq1pRJjw%2BdlWJZHAWFSd%2FXlBrIIA4Lq81BnwxKD6M%2FGrNnoCVeP2D1%2FPIakI%2FUCdI1K3%2BgfRGAhuJU3GbAgI5ESaPhLLe1pHJczFnmXxk1%2FE8RyLPGH9R2nHLykYmLWkxsgCsR5PFQt3S0Kyx52P4pdVFI6pvwcl3jG9xskQgxMgCEJiHedO5eHbVhh7DKUUowfEHgTUzxKvo6RgeoAlXz%2BsOUmIF1fqKxzzzaD3Q20gkUEPxGFL6glx95OX3OVyktPTDWDtEzgbJITWz2751OuK9WsawXqZBC64QoKE9dYA6FtvnsjbaVnw1oz%2FbQGWvBnSpa8%2BE7pFx1cMuGN7Ck3w98NP%2F8UgvRGr3RwHVJdQ9ZX0wZ80eXLBUw0vHBwQY6pgFK82Dc04reXJ%2B3VKktA6AWfUgI4Zs1IsSrv6acWAjCtPAsk%2BwFVUwJ4PpAG3hTltoUye61u0%2BfjrvMW2vKovqZp4dC5ooABwCeVmi6WBy1jHJ%2FIsno4UJ9MFNl6XuOa0ormlvSxDZyNUsQGb0LOTTGwjbqZYSfKRpoEh3uxAVCKhGfztovRUVkwM7ZP887J1b4Y1qYm7hhaBQyqmIxDywtWqseJ8xS&X-Amz-Signature=dd203e1c3f3f2e67deab56bba398e11aa6787159a9778d085c27952886546976&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3HTXLM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGGVvoAya3XfOboxw%2BLd4vf6b3QVg5%2B%2Bi6TM%2BfO3s9gMAiA5fnkL8JuUqap%2BRtReqKrkVpWAV%2BoIJF2B4YnqYY10AiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QYyY%2B8%2BX5x7sBlkKtwDfLYdKg2HuJbtk6Qt2cMIXDkF3VSd8fUtnoWWk%2FQpboE0KkuXzLXc83ZMzQI4iOSLfKjRkLZdREUqKGJMqmTxSjW%2FiTTzPgBAx2g2oAxOgAavtPjPGj%2Fw2t5N%2Bb6lbqWyRjslIwODF7cTJOXAdm05U9hWvIrTlLclb3rQsNc41koObFUfPIpWBJ8%2FUoJ%2BM0b%2F26e2NvwIVx%2F%2Fh7GH75rX5IoPcNFO9vXL44Un4R56MBiYajsfogUmP2xWsIWNnXUpbFoq1pRJjw%2BdlWJZHAWFSd%2FXlBrIIA4Lq81BnwxKD6M%2FGrNnoCVeP2D1%2FPIakI%2FUCdI1K3%2BgfRGAhuJU3GbAgI5ESaPhLLe1pHJczFnmXxk1%2FE8RyLPGH9R2nHLykYmLWkxsgCsR5PFQt3S0Kyx52P4pdVFI6pvwcl3jG9xskQgxMgCEJiHedO5eHbVhh7DKUUowfEHgTUzxKvo6RgeoAlXz%2BsOUmIF1fqKxzzzaD3Q20gkUEPxGFL6glx95OX3OVyktPTDWDtEzgbJITWz2751OuK9WsawXqZBC64QoKE9dYA6FtvnsjbaVnw1oz%2FbQGWvBnSpa8%2BE7pFx1cMuGN7Ck3w98NP%2F8UgvRGr3RwHVJdQ9ZX0wZ80eXLBUw0vHBwQY6pgFK82Dc04reXJ%2B3VKktA6AWfUgI4Zs1IsSrv6acWAjCtPAsk%2BwFVUwJ4PpAG3hTltoUye61u0%2BfjrvMW2vKovqZp4dC5ooABwCeVmi6WBy1jHJ%2FIsno4UJ9MFNl6XuOa0ormlvSxDZyNUsQGb0LOTTGwjbqZYSfKRpoEh3uxAVCKhGfztovRUVkwM7ZP887J1b4Y1qYm7hhaBQyqmIxDywtWqseJ8xS&X-Amz-Signature=00e488e06fa0c83f727d3788c43c6d9bccdd97a1a2c6fd3cf9c2f4952e6b1684&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3HTXLM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGGVvoAya3XfOboxw%2BLd4vf6b3QVg5%2B%2Bi6TM%2BfO3s9gMAiA5fnkL8JuUqap%2BRtReqKrkVpWAV%2BoIJF2B4YnqYY10AiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QYyY%2B8%2BX5x7sBlkKtwDfLYdKg2HuJbtk6Qt2cMIXDkF3VSd8fUtnoWWk%2FQpboE0KkuXzLXc83ZMzQI4iOSLfKjRkLZdREUqKGJMqmTxSjW%2FiTTzPgBAx2g2oAxOgAavtPjPGj%2Fw2t5N%2Bb6lbqWyRjslIwODF7cTJOXAdm05U9hWvIrTlLclb3rQsNc41koObFUfPIpWBJ8%2FUoJ%2BM0b%2F26e2NvwIVx%2F%2Fh7GH75rX5IoPcNFO9vXL44Un4R56MBiYajsfogUmP2xWsIWNnXUpbFoq1pRJjw%2BdlWJZHAWFSd%2FXlBrIIA4Lq81BnwxKD6M%2FGrNnoCVeP2D1%2FPIakI%2FUCdI1K3%2BgfRGAhuJU3GbAgI5ESaPhLLe1pHJczFnmXxk1%2FE8RyLPGH9R2nHLykYmLWkxsgCsR5PFQt3S0Kyx52P4pdVFI6pvwcl3jG9xskQgxMgCEJiHedO5eHbVhh7DKUUowfEHgTUzxKvo6RgeoAlXz%2BsOUmIF1fqKxzzzaD3Q20gkUEPxGFL6glx95OX3OVyktPTDWDtEzgbJITWz2751OuK9WsawXqZBC64QoKE9dYA6FtvnsjbaVnw1oz%2FbQGWvBnSpa8%2BE7pFx1cMuGN7Ck3w98NP%2F8UgvRGr3RwHVJdQ9ZX0wZ80eXLBUw0vHBwQY6pgFK82Dc04reXJ%2B3VKktA6AWfUgI4Zs1IsSrv6acWAjCtPAsk%2BwFVUwJ4PpAG3hTltoUye61u0%2BfjrvMW2vKovqZp4dC5ooABwCeVmi6WBy1jHJ%2FIsno4UJ9MFNl6XuOa0ormlvSxDZyNUsQGb0LOTTGwjbqZYSfKRpoEh3uxAVCKhGfztovRUVkwM7ZP887J1b4Y1qYm7hhaBQyqmIxDywtWqseJ8xS&X-Amz-Signature=6fc9df2400b24762a4395a894ea580a465b8815e8d387542d2832593932f6374&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3HTXLM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGGVvoAya3XfOboxw%2BLd4vf6b3QVg5%2B%2Bi6TM%2BfO3s9gMAiA5fnkL8JuUqap%2BRtReqKrkVpWAV%2BoIJF2B4YnqYY10AiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QYyY%2B8%2BX5x7sBlkKtwDfLYdKg2HuJbtk6Qt2cMIXDkF3VSd8fUtnoWWk%2FQpboE0KkuXzLXc83ZMzQI4iOSLfKjRkLZdREUqKGJMqmTxSjW%2FiTTzPgBAx2g2oAxOgAavtPjPGj%2Fw2t5N%2Bb6lbqWyRjslIwODF7cTJOXAdm05U9hWvIrTlLclb3rQsNc41koObFUfPIpWBJ8%2FUoJ%2BM0b%2F26e2NvwIVx%2F%2Fh7GH75rX5IoPcNFO9vXL44Un4R56MBiYajsfogUmP2xWsIWNnXUpbFoq1pRJjw%2BdlWJZHAWFSd%2FXlBrIIA4Lq81BnwxKD6M%2FGrNnoCVeP2D1%2FPIakI%2FUCdI1K3%2BgfRGAhuJU3GbAgI5ESaPhLLe1pHJczFnmXxk1%2FE8RyLPGH9R2nHLykYmLWkxsgCsR5PFQt3S0Kyx52P4pdVFI6pvwcl3jG9xskQgxMgCEJiHedO5eHbVhh7DKUUowfEHgTUzxKvo6RgeoAlXz%2BsOUmIF1fqKxzzzaD3Q20gkUEPxGFL6glx95OX3OVyktPTDWDtEzgbJITWz2751OuK9WsawXqZBC64QoKE9dYA6FtvnsjbaVnw1oz%2FbQGWvBnSpa8%2BE7pFx1cMuGN7Ck3w98NP%2F8UgvRGr3RwHVJdQ9ZX0wZ80eXLBUw0vHBwQY6pgFK82Dc04reXJ%2B3VKktA6AWfUgI4Zs1IsSrv6acWAjCtPAsk%2BwFVUwJ4PpAG3hTltoUye61u0%2BfjrvMW2vKovqZp4dC5ooABwCeVmi6WBy1jHJ%2FIsno4UJ9MFNl6XuOa0ormlvSxDZyNUsQGb0LOTTGwjbqZYSfKRpoEh3uxAVCKhGfztovRUVkwM7ZP887J1b4Y1qYm7hhaBQyqmIxDywtWqseJ8xS&X-Amz-Signature=95b41479e01e4f8185b16eb50a04c32b4e97b8e7e9689e8961643941c627170f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3HTXLM%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGGVvoAya3XfOboxw%2BLd4vf6b3QVg5%2B%2Bi6TM%2BfO3s9gMAiA5fnkL8JuUqap%2BRtReqKrkVpWAV%2BoIJF2B4YnqYY10AiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1QYyY%2B8%2BX5x7sBlkKtwDfLYdKg2HuJbtk6Qt2cMIXDkF3VSd8fUtnoWWk%2FQpboE0KkuXzLXc83ZMzQI4iOSLfKjRkLZdREUqKGJMqmTxSjW%2FiTTzPgBAx2g2oAxOgAavtPjPGj%2Fw2t5N%2Bb6lbqWyRjslIwODF7cTJOXAdm05U9hWvIrTlLclb3rQsNc41koObFUfPIpWBJ8%2FUoJ%2BM0b%2F26e2NvwIVx%2F%2Fh7GH75rX5IoPcNFO9vXL44Un4R56MBiYajsfogUmP2xWsIWNnXUpbFoq1pRJjw%2BdlWJZHAWFSd%2FXlBrIIA4Lq81BnwxKD6M%2FGrNnoCVeP2D1%2FPIakI%2FUCdI1K3%2BgfRGAhuJU3GbAgI5ESaPhLLe1pHJczFnmXxk1%2FE8RyLPGH9R2nHLykYmLWkxsgCsR5PFQt3S0Kyx52P4pdVFI6pvwcl3jG9xskQgxMgCEJiHedO5eHbVhh7DKUUowfEHgTUzxKvo6RgeoAlXz%2BsOUmIF1fqKxzzzaD3Q20gkUEPxGFL6glx95OX3OVyktPTDWDtEzgbJITWz2751OuK9WsawXqZBC64QoKE9dYA6FtvnsjbaVnw1oz%2FbQGWvBnSpa8%2BE7pFx1cMuGN7Ck3w98NP%2F8UgvRGr3RwHVJdQ9ZX0wZ80eXLBUw0vHBwQY6pgFK82Dc04reXJ%2B3VKktA6AWfUgI4Zs1IsSrv6acWAjCtPAsk%2BwFVUwJ4PpAG3hTltoUye61u0%2BfjrvMW2vKovqZp4dC5ooABwCeVmi6WBy1jHJ%2FIsno4UJ9MFNl6XuOa0ormlvSxDZyNUsQGb0LOTTGwjbqZYSfKRpoEh3uxAVCKhGfztovRUVkwM7ZP887J1b4Y1qYm7hhaBQyqmIxDywtWqseJ8xS&X-Amz-Signature=0947fa361ba7188a091820ca98f7c389a8c5627fb430ffbdaae1d4a96a5a03c2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
