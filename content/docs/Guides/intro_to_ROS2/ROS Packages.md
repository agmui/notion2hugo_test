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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L5FKCY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI2woOkMAfXMLHqlFhtOrVUM2vjzD3xGEsZAdKnraZQwIhANpQnytw94F0niCqXS1ccWBoUaLcUwfGOIoTmDNYwy0OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxORocY7raXOOAV8nwq3AOdakdcNIY%2FhHlxGH3nhqGvlI%2FwNU0ckaH0yDTgew%2FLl7YzSTlbyWZf5gYEeY8SgjifLrqOb2rH6SQzLjWfhsuWtazzN8zrcUO4MU7qlVzfJuksp21EKY59oCO%2BC7GroavVjOgS7ZiiweprciMw%2Bq46nteO2l2v7eP70x9PU%2FYbibx%2Bp%2FIu8SnGvnSHNtfussaafS43jj9Ng4qU8affkDrlG0ubLu5eoje3ibh2gm%2BJXRZk5tuCtdDnfdHXNUzoKp%2BL630c6m1ICqv6XUw4mDIJUhg3kjIWPj3K2I6QZoFKESF6ajA3yLUBpYdx2%2F4pAByX9dJU%2BwxpQyN6tAKpJHnzF83X1ia1JrtDAo43m8wE891WP%2BLY1%2FTqYMOu2r5BnCuMV4sDoJ5dYZtt2WHLHjsGfm%2FvgAyFX6nyGYmkeB1zzmGi4MjTNt8pLuzHU5om8QzRDBgnioRmGizwNn89pjXIlyYJTCcfoogPUPT82II79b%2B6WPcmYKY3UVbcUME%2Fvl0UV9OD476DmlPOe%2FsLhDO8DCM9Qz0a45dji7nlwV6Ovg8KFEf2u5zj4ciS2F3MQI68oXd6283ANWP9XQpJ7EmCR8nbGR1xcGN54YZjVtfIrBn9q%2F%2B4711OXrI92DCVvdPCBjqkAQSul2HM9fYIvQ3N97BDowc%2FF%2F8%2FtPkJNtvj0km8zdgYuiFRGyVOTR0frI3R2TTNsrKYyyzAvJXz4MXSZ0ILCYRRUDR2SmiVqrU0ZeA3VMweVpxl1t2FyIiRSQUjOYZTY%2FpwUL%2B%2FCLeSsnnw5zUUEqWAJEnij6jNFqy2yJOuCUXXD3UEfbtaPZ9bo4ypF4%2F9wE3X7KoqSueUFOWqw%2BX7w%2FdfwpxG&X-Amz-Signature=a5783c602220499f6e0b10a15eaa9c8cb2074f89e1a853bb741e253346e8b443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L5FKCY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI2woOkMAfXMLHqlFhtOrVUM2vjzD3xGEsZAdKnraZQwIhANpQnytw94F0niCqXS1ccWBoUaLcUwfGOIoTmDNYwy0OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxORocY7raXOOAV8nwq3AOdakdcNIY%2FhHlxGH3nhqGvlI%2FwNU0ckaH0yDTgew%2FLl7YzSTlbyWZf5gYEeY8SgjifLrqOb2rH6SQzLjWfhsuWtazzN8zrcUO4MU7qlVzfJuksp21EKY59oCO%2BC7GroavVjOgS7ZiiweprciMw%2Bq46nteO2l2v7eP70x9PU%2FYbibx%2Bp%2FIu8SnGvnSHNtfussaafS43jj9Ng4qU8affkDrlG0ubLu5eoje3ibh2gm%2BJXRZk5tuCtdDnfdHXNUzoKp%2BL630c6m1ICqv6XUw4mDIJUhg3kjIWPj3K2I6QZoFKESF6ajA3yLUBpYdx2%2F4pAByX9dJU%2BwxpQyN6tAKpJHnzF83X1ia1JrtDAo43m8wE891WP%2BLY1%2FTqYMOu2r5BnCuMV4sDoJ5dYZtt2WHLHjsGfm%2FvgAyFX6nyGYmkeB1zzmGi4MjTNt8pLuzHU5om8QzRDBgnioRmGizwNn89pjXIlyYJTCcfoogPUPT82II79b%2B6WPcmYKY3UVbcUME%2Fvl0UV9OD476DmlPOe%2FsLhDO8DCM9Qz0a45dji7nlwV6Ovg8KFEf2u5zj4ciS2F3MQI68oXd6283ANWP9XQpJ7EmCR8nbGR1xcGN54YZjVtfIrBn9q%2F%2B4711OXrI92DCVvdPCBjqkAQSul2HM9fYIvQ3N97BDowc%2FF%2F8%2FtPkJNtvj0km8zdgYuiFRGyVOTR0frI3R2TTNsrKYyyzAvJXz4MXSZ0ILCYRRUDR2SmiVqrU0ZeA3VMweVpxl1t2FyIiRSQUjOYZTY%2FpwUL%2B%2FCLeSsnnw5zUUEqWAJEnij6jNFqy2yJOuCUXXD3UEfbtaPZ9bo4ypF4%2F9wE3X7KoqSueUFOWqw%2BX7w%2FdfwpxG&X-Amz-Signature=bccd55e2fed310bc901b9b17a4fc9ab989d613ca2aeba42d32c495f68cb8be42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L5FKCY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI2woOkMAfXMLHqlFhtOrVUM2vjzD3xGEsZAdKnraZQwIhANpQnytw94F0niCqXS1ccWBoUaLcUwfGOIoTmDNYwy0OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxORocY7raXOOAV8nwq3AOdakdcNIY%2FhHlxGH3nhqGvlI%2FwNU0ckaH0yDTgew%2FLl7YzSTlbyWZf5gYEeY8SgjifLrqOb2rH6SQzLjWfhsuWtazzN8zrcUO4MU7qlVzfJuksp21EKY59oCO%2BC7GroavVjOgS7ZiiweprciMw%2Bq46nteO2l2v7eP70x9PU%2FYbibx%2Bp%2FIu8SnGvnSHNtfussaafS43jj9Ng4qU8affkDrlG0ubLu5eoje3ibh2gm%2BJXRZk5tuCtdDnfdHXNUzoKp%2BL630c6m1ICqv6XUw4mDIJUhg3kjIWPj3K2I6QZoFKESF6ajA3yLUBpYdx2%2F4pAByX9dJU%2BwxpQyN6tAKpJHnzF83X1ia1JrtDAo43m8wE891WP%2BLY1%2FTqYMOu2r5BnCuMV4sDoJ5dYZtt2WHLHjsGfm%2FvgAyFX6nyGYmkeB1zzmGi4MjTNt8pLuzHU5om8QzRDBgnioRmGizwNn89pjXIlyYJTCcfoogPUPT82II79b%2B6WPcmYKY3UVbcUME%2Fvl0UV9OD476DmlPOe%2FsLhDO8DCM9Qz0a45dji7nlwV6Ovg8KFEf2u5zj4ciS2F3MQI68oXd6283ANWP9XQpJ7EmCR8nbGR1xcGN54YZjVtfIrBn9q%2F%2B4711OXrI92DCVvdPCBjqkAQSul2HM9fYIvQ3N97BDowc%2FF%2F8%2FtPkJNtvj0km8zdgYuiFRGyVOTR0frI3R2TTNsrKYyyzAvJXz4MXSZ0ILCYRRUDR2SmiVqrU0ZeA3VMweVpxl1t2FyIiRSQUjOYZTY%2FpwUL%2B%2FCLeSsnnw5zUUEqWAJEnij6jNFqy2yJOuCUXXD3UEfbtaPZ9bo4ypF4%2F9wE3X7KoqSueUFOWqw%2BX7w%2FdfwpxG&X-Amz-Signature=b0b9b383ffb81e98bc30a969eafc152bda671bb6b88188aa0569cf818fab591f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L5FKCY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI2woOkMAfXMLHqlFhtOrVUM2vjzD3xGEsZAdKnraZQwIhANpQnytw94F0niCqXS1ccWBoUaLcUwfGOIoTmDNYwy0OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxORocY7raXOOAV8nwq3AOdakdcNIY%2FhHlxGH3nhqGvlI%2FwNU0ckaH0yDTgew%2FLl7YzSTlbyWZf5gYEeY8SgjifLrqOb2rH6SQzLjWfhsuWtazzN8zrcUO4MU7qlVzfJuksp21EKY59oCO%2BC7GroavVjOgS7ZiiweprciMw%2Bq46nteO2l2v7eP70x9PU%2FYbibx%2Bp%2FIu8SnGvnSHNtfussaafS43jj9Ng4qU8affkDrlG0ubLu5eoje3ibh2gm%2BJXRZk5tuCtdDnfdHXNUzoKp%2BL630c6m1ICqv6XUw4mDIJUhg3kjIWPj3K2I6QZoFKESF6ajA3yLUBpYdx2%2F4pAByX9dJU%2BwxpQyN6tAKpJHnzF83X1ia1JrtDAo43m8wE891WP%2BLY1%2FTqYMOu2r5BnCuMV4sDoJ5dYZtt2WHLHjsGfm%2FvgAyFX6nyGYmkeB1zzmGi4MjTNt8pLuzHU5om8QzRDBgnioRmGizwNn89pjXIlyYJTCcfoogPUPT82II79b%2B6WPcmYKY3UVbcUME%2Fvl0UV9OD476DmlPOe%2FsLhDO8DCM9Qz0a45dji7nlwV6Ovg8KFEf2u5zj4ciS2F3MQI68oXd6283ANWP9XQpJ7EmCR8nbGR1xcGN54YZjVtfIrBn9q%2F%2B4711OXrI92DCVvdPCBjqkAQSul2HM9fYIvQ3N97BDowc%2FF%2F8%2FtPkJNtvj0km8zdgYuiFRGyVOTR0frI3R2TTNsrKYyyzAvJXz4MXSZ0ILCYRRUDR2SmiVqrU0ZeA3VMweVpxl1t2FyIiRSQUjOYZTY%2FpwUL%2B%2FCLeSsnnw5zUUEqWAJEnij6jNFqy2yJOuCUXXD3UEfbtaPZ9bo4ypF4%2F9wE3X7KoqSueUFOWqw%2BX7w%2FdfwpxG&X-Amz-Signature=3cd381ff5a1cfe5a0501ef322deb9fde81fee8adfb51cd1a097660de26fe3929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L5FKCY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI2woOkMAfXMLHqlFhtOrVUM2vjzD3xGEsZAdKnraZQwIhANpQnytw94F0niCqXS1ccWBoUaLcUwfGOIoTmDNYwy0OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxORocY7raXOOAV8nwq3AOdakdcNIY%2FhHlxGH3nhqGvlI%2FwNU0ckaH0yDTgew%2FLl7YzSTlbyWZf5gYEeY8SgjifLrqOb2rH6SQzLjWfhsuWtazzN8zrcUO4MU7qlVzfJuksp21EKY59oCO%2BC7GroavVjOgS7ZiiweprciMw%2Bq46nteO2l2v7eP70x9PU%2FYbibx%2Bp%2FIu8SnGvnSHNtfussaafS43jj9Ng4qU8affkDrlG0ubLu5eoje3ibh2gm%2BJXRZk5tuCtdDnfdHXNUzoKp%2BL630c6m1ICqv6XUw4mDIJUhg3kjIWPj3K2I6QZoFKESF6ajA3yLUBpYdx2%2F4pAByX9dJU%2BwxpQyN6tAKpJHnzF83X1ia1JrtDAo43m8wE891WP%2BLY1%2FTqYMOu2r5BnCuMV4sDoJ5dYZtt2WHLHjsGfm%2FvgAyFX6nyGYmkeB1zzmGi4MjTNt8pLuzHU5om8QzRDBgnioRmGizwNn89pjXIlyYJTCcfoogPUPT82II79b%2B6WPcmYKY3UVbcUME%2Fvl0UV9OD476DmlPOe%2FsLhDO8DCM9Qz0a45dji7nlwV6Ovg8KFEf2u5zj4ciS2F3MQI68oXd6283ANWP9XQpJ7EmCR8nbGR1xcGN54YZjVtfIrBn9q%2F%2B4711OXrI92DCVvdPCBjqkAQSul2HM9fYIvQ3N97BDowc%2FF%2F8%2FtPkJNtvj0km8zdgYuiFRGyVOTR0frI3R2TTNsrKYyyzAvJXz4MXSZ0ILCYRRUDR2SmiVqrU0ZeA3VMweVpxl1t2FyIiRSQUjOYZTY%2FpwUL%2B%2FCLeSsnnw5zUUEqWAJEnij6jNFqy2yJOuCUXXD3UEfbtaPZ9bo4ypF4%2F9wE3X7KoqSueUFOWqw%2BX7w%2FdfwpxG&X-Amz-Signature=6652519d051766f6320de5c3fe5d6aee022d296f644acdd73fac292eff31d9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L5FKCY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI2woOkMAfXMLHqlFhtOrVUM2vjzD3xGEsZAdKnraZQwIhANpQnytw94F0niCqXS1ccWBoUaLcUwfGOIoTmDNYwy0OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxORocY7raXOOAV8nwq3AOdakdcNIY%2FhHlxGH3nhqGvlI%2FwNU0ckaH0yDTgew%2FLl7YzSTlbyWZf5gYEeY8SgjifLrqOb2rH6SQzLjWfhsuWtazzN8zrcUO4MU7qlVzfJuksp21EKY59oCO%2BC7GroavVjOgS7ZiiweprciMw%2Bq46nteO2l2v7eP70x9PU%2FYbibx%2Bp%2FIu8SnGvnSHNtfussaafS43jj9Ng4qU8affkDrlG0ubLu5eoje3ibh2gm%2BJXRZk5tuCtdDnfdHXNUzoKp%2BL630c6m1ICqv6XUw4mDIJUhg3kjIWPj3K2I6QZoFKESF6ajA3yLUBpYdx2%2F4pAByX9dJU%2BwxpQyN6tAKpJHnzF83X1ia1JrtDAo43m8wE891WP%2BLY1%2FTqYMOu2r5BnCuMV4sDoJ5dYZtt2WHLHjsGfm%2FvgAyFX6nyGYmkeB1zzmGi4MjTNt8pLuzHU5om8QzRDBgnioRmGizwNn89pjXIlyYJTCcfoogPUPT82II79b%2B6WPcmYKY3UVbcUME%2Fvl0UV9OD476DmlPOe%2FsLhDO8DCM9Qz0a45dji7nlwV6Ovg8KFEf2u5zj4ciS2F3MQI68oXd6283ANWP9XQpJ7EmCR8nbGR1xcGN54YZjVtfIrBn9q%2F%2B4711OXrI92DCVvdPCBjqkAQSul2HM9fYIvQ3N97BDowc%2FF%2F8%2FtPkJNtvj0km8zdgYuiFRGyVOTR0frI3R2TTNsrKYyyzAvJXz4MXSZ0ILCYRRUDR2SmiVqrU0ZeA3VMweVpxl1t2FyIiRSQUjOYZTY%2FpwUL%2B%2FCLeSsnnw5zUUEqWAJEnij6jNFqy2yJOuCUXXD3UEfbtaPZ9bo4ypF4%2F9wE3X7KoqSueUFOWqw%2BX7w%2FdfwpxG&X-Amz-Signature=f7371dd63a2aebab83fe49dac395cf46d860c1c30cef174d6722f66e20ea7f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643L5FKCY%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI2woOkMAfXMLHqlFhtOrVUM2vjzD3xGEsZAdKnraZQwIhANpQnytw94F0niCqXS1ccWBoUaLcUwfGOIoTmDNYwy0OKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxORocY7raXOOAV8nwq3AOdakdcNIY%2FhHlxGH3nhqGvlI%2FwNU0ckaH0yDTgew%2FLl7YzSTlbyWZf5gYEeY8SgjifLrqOb2rH6SQzLjWfhsuWtazzN8zrcUO4MU7qlVzfJuksp21EKY59oCO%2BC7GroavVjOgS7ZiiweprciMw%2Bq46nteO2l2v7eP70x9PU%2FYbibx%2Bp%2FIu8SnGvnSHNtfussaafS43jj9Ng4qU8affkDrlG0ubLu5eoje3ibh2gm%2BJXRZk5tuCtdDnfdHXNUzoKp%2BL630c6m1ICqv6XUw4mDIJUhg3kjIWPj3K2I6QZoFKESF6ajA3yLUBpYdx2%2F4pAByX9dJU%2BwxpQyN6tAKpJHnzF83X1ia1JrtDAo43m8wE891WP%2BLY1%2FTqYMOu2r5BnCuMV4sDoJ5dYZtt2WHLHjsGfm%2FvgAyFX6nyGYmkeB1zzmGi4MjTNt8pLuzHU5om8QzRDBgnioRmGizwNn89pjXIlyYJTCcfoogPUPT82II79b%2B6WPcmYKY3UVbcUME%2Fvl0UV9OD476DmlPOe%2FsLhDO8DCM9Qz0a45dji7nlwV6Ovg8KFEf2u5zj4ciS2F3MQI68oXd6283ANWP9XQpJ7EmCR8nbGR1xcGN54YZjVtfIrBn9q%2F%2B4711OXrI92DCVvdPCBjqkAQSul2HM9fYIvQ3N97BDowc%2FF%2F8%2FtPkJNtvj0km8zdgYuiFRGyVOTR0frI3R2TTNsrKYyyzAvJXz4MXSZ0ILCYRRUDR2SmiVqrU0ZeA3VMweVpxl1t2FyIiRSQUjOYZTY%2FpwUL%2B%2FCLeSsnnw5zUUEqWAJEnij6jNFqy2yJOuCUXXD3UEfbtaPZ9bo4ypF4%2F9wE3X7KoqSueUFOWqw%2BX7w%2FdfwpxG&X-Amz-Signature=4efd686bce340eaf3dc4f0a435e1027193225c415d74465bfc6be85c0565e694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
