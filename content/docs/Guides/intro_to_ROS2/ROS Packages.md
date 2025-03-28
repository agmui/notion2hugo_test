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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZDVRT4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbRx8SS0LwbZrDagzA3m39Lu4SIFCmgp7ANYHSYnpsgIgZespG85wxZQU3DH8Wj20Kgbh3x05tu%2FqV26FuBmfcfMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA%2Biwf8fMB%2FMgM9f6ircA96qEP5KvScron9zWs7kf67XI52znKj%2FjiwhRyJKjYr9Sr%2B99OjzTabMR9jYvBdjv8bg14F08B4ok0TWRGQi6JRhcN8ZYrp%2F6sFgkE02hTKwwU7CmsjU08dULSB1ME%2BHhIj6zWHvph4MNal9zrHC%2BLSmCku3QGCpxGl6Jj87L59mZsvrJCisFdUTXWYLnXmLDkSIQQWMnznAP17sYPDdRioinNSEFACNltsAzCqw5IZRJsYiEzj8ornwP6bioRvJUlKAknJRs%2FyPWhwcGRBR6RnwfwDBouGTEsbTArG4QAD08Rjf6CUZUt%2FSbS4qMO4nNKs%2F5MrHdXU9gHxfT8bFEcGYBnqv1fZGSSITuul1UHxxrt6wgKmYzEzh3RcEOaauvmrVMF7tIRFG9uCf12RMetJnqgC8Fu5qN9UnIkw070W%2FmOCGYgWJhiXKzYmdQckMSJ1hyB6NKCUL8Ozf%2Frb4N34%2BWZEHdr29jxJkbbhGLbzRDk7MyMUhZHE2GwR6Z1n2g09IlfhdhTss7ifYleiawqvzznTfh8uu7OlsZsj8pnPyxVq61scx5WgZfJCGqgguo4q%2FBP4BXraoH3SrDdx2NdP69aJKFc94HnNxAd0OpEjikF2HgUUiw3QUAYG%2FMLfZm78GOqUBLT%2FDyEzVJpHcQrmUytBwi6Bqm7z1DnzCqgU%2BiCytlD632r4tGRUTiunG5pk7E5Ak1dVdH6YQTej7Hj3%2BhgLe5T6i%2FjKXJ6Vfm38WY1My3oSIKdgfp8SXTXKNk4vev466lthpqceqAk8XbyVI%2FReZFRYNtfFo5wN8A6zT9wseYtG5NskHz9%2Fdnv4aWbJKZPfmUCbdejLHAr2TkZZpDKSZlcGgasro&X-Amz-Signature=5c3bdc7f23a9c0fe3efec9f5b1f87e9548e087e2f0d860d10f04ef3daefa4b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZDVRT4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbRx8SS0LwbZrDagzA3m39Lu4SIFCmgp7ANYHSYnpsgIgZespG85wxZQU3DH8Wj20Kgbh3x05tu%2FqV26FuBmfcfMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA%2Biwf8fMB%2FMgM9f6ircA96qEP5KvScron9zWs7kf67XI52znKj%2FjiwhRyJKjYr9Sr%2B99OjzTabMR9jYvBdjv8bg14F08B4ok0TWRGQi6JRhcN8ZYrp%2F6sFgkE02hTKwwU7CmsjU08dULSB1ME%2BHhIj6zWHvph4MNal9zrHC%2BLSmCku3QGCpxGl6Jj87L59mZsvrJCisFdUTXWYLnXmLDkSIQQWMnznAP17sYPDdRioinNSEFACNltsAzCqw5IZRJsYiEzj8ornwP6bioRvJUlKAknJRs%2FyPWhwcGRBR6RnwfwDBouGTEsbTArG4QAD08Rjf6CUZUt%2FSbS4qMO4nNKs%2F5MrHdXU9gHxfT8bFEcGYBnqv1fZGSSITuul1UHxxrt6wgKmYzEzh3RcEOaauvmrVMF7tIRFG9uCf12RMetJnqgC8Fu5qN9UnIkw070W%2FmOCGYgWJhiXKzYmdQckMSJ1hyB6NKCUL8Ozf%2Frb4N34%2BWZEHdr29jxJkbbhGLbzRDk7MyMUhZHE2GwR6Z1n2g09IlfhdhTss7ifYleiawqvzznTfh8uu7OlsZsj8pnPyxVq61scx5WgZfJCGqgguo4q%2FBP4BXraoH3SrDdx2NdP69aJKFc94HnNxAd0OpEjikF2HgUUiw3QUAYG%2FMLfZm78GOqUBLT%2FDyEzVJpHcQrmUytBwi6Bqm7z1DnzCqgU%2BiCytlD632r4tGRUTiunG5pk7E5Ak1dVdH6YQTej7Hj3%2BhgLe5T6i%2FjKXJ6Vfm38WY1My3oSIKdgfp8SXTXKNk4vev466lthpqceqAk8XbyVI%2FReZFRYNtfFo5wN8A6zT9wseYtG5NskHz9%2Fdnv4aWbJKZPfmUCbdejLHAr2TkZZpDKSZlcGgasro&X-Amz-Signature=88a469d3cda1a4f84bbdd651bb03d172a194873558de63f63c76189cb5921903&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZDVRT4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbRx8SS0LwbZrDagzA3m39Lu4SIFCmgp7ANYHSYnpsgIgZespG85wxZQU3DH8Wj20Kgbh3x05tu%2FqV26FuBmfcfMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA%2Biwf8fMB%2FMgM9f6ircA96qEP5KvScron9zWs7kf67XI52znKj%2FjiwhRyJKjYr9Sr%2B99OjzTabMR9jYvBdjv8bg14F08B4ok0TWRGQi6JRhcN8ZYrp%2F6sFgkE02hTKwwU7CmsjU08dULSB1ME%2BHhIj6zWHvph4MNal9zrHC%2BLSmCku3QGCpxGl6Jj87L59mZsvrJCisFdUTXWYLnXmLDkSIQQWMnznAP17sYPDdRioinNSEFACNltsAzCqw5IZRJsYiEzj8ornwP6bioRvJUlKAknJRs%2FyPWhwcGRBR6RnwfwDBouGTEsbTArG4QAD08Rjf6CUZUt%2FSbS4qMO4nNKs%2F5MrHdXU9gHxfT8bFEcGYBnqv1fZGSSITuul1UHxxrt6wgKmYzEzh3RcEOaauvmrVMF7tIRFG9uCf12RMetJnqgC8Fu5qN9UnIkw070W%2FmOCGYgWJhiXKzYmdQckMSJ1hyB6NKCUL8Ozf%2Frb4N34%2BWZEHdr29jxJkbbhGLbzRDk7MyMUhZHE2GwR6Z1n2g09IlfhdhTss7ifYleiawqvzznTfh8uu7OlsZsj8pnPyxVq61scx5WgZfJCGqgguo4q%2FBP4BXraoH3SrDdx2NdP69aJKFc94HnNxAd0OpEjikF2HgUUiw3QUAYG%2FMLfZm78GOqUBLT%2FDyEzVJpHcQrmUytBwi6Bqm7z1DnzCqgU%2BiCytlD632r4tGRUTiunG5pk7E5Ak1dVdH6YQTej7Hj3%2BhgLe5T6i%2FjKXJ6Vfm38WY1My3oSIKdgfp8SXTXKNk4vev466lthpqceqAk8XbyVI%2FReZFRYNtfFo5wN8A6zT9wseYtG5NskHz9%2Fdnv4aWbJKZPfmUCbdejLHAr2TkZZpDKSZlcGgasro&X-Amz-Signature=56d6992df15d39f7be31daffa344e4be405d08ce6947cd90ab819de72895fe1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZDVRT4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbRx8SS0LwbZrDagzA3m39Lu4SIFCmgp7ANYHSYnpsgIgZespG85wxZQU3DH8Wj20Kgbh3x05tu%2FqV26FuBmfcfMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA%2Biwf8fMB%2FMgM9f6ircA96qEP5KvScron9zWs7kf67XI52znKj%2FjiwhRyJKjYr9Sr%2B99OjzTabMR9jYvBdjv8bg14F08B4ok0TWRGQi6JRhcN8ZYrp%2F6sFgkE02hTKwwU7CmsjU08dULSB1ME%2BHhIj6zWHvph4MNal9zrHC%2BLSmCku3QGCpxGl6Jj87L59mZsvrJCisFdUTXWYLnXmLDkSIQQWMnznAP17sYPDdRioinNSEFACNltsAzCqw5IZRJsYiEzj8ornwP6bioRvJUlKAknJRs%2FyPWhwcGRBR6RnwfwDBouGTEsbTArG4QAD08Rjf6CUZUt%2FSbS4qMO4nNKs%2F5MrHdXU9gHxfT8bFEcGYBnqv1fZGSSITuul1UHxxrt6wgKmYzEzh3RcEOaauvmrVMF7tIRFG9uCf12RMetJnqgC8Fu5qN9UnIkw070W%2FmOCGYgWJhiXKzYmdQckMSJ1hyB6NKCUL8Ozf%2Frb4N34%2BWZEHdr29jxJkbbhGLbzRDk7MyMUhZHE2GwR6Z1n2g09IlfhdhTss7ifYleiawqvzznTfh8uu7OlsZsj8pnPyxVq61scx5WgZfJCGqgguo4q%2FBP4BXraoH3SrDdx2NdP69aJKFc94HnNxAd0OpEjikF2HgUUiw3QUAYG%2FMLfZm78GOqUBLT%2FDyEzVJpHcQrmUytBwi6Bqm7z1DnzCqgU%2BiCytlD632r4tGRUTiunG5pk7E5Ak1dVdH6YQTej7Hj3%2BhgLe5T6i%2FjKXJ6Vfm38WY1My3oSIKdgfp8SXTXKNk4vev466lthpqceqAk8XbyVI%2FReZFRYNtfFo5wN8A6zT9wseYtG5NskHz9%2Fdnv4aWbJKZPfmUCbdejLHAr2TkZZpDKSZlcGgasro&X-Amz-Signature=141e8b4ccc1883d456f599a547bf0df9806f1e26c1ef53b6012b03ed181a16fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZDVRT4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbRx8SS0LwbZrDagzA3m39Lu4SIFCmgp7ANYHSYnpsgIgZespG85wxZQU3DH8Wj20Kgbh3x05tu%2FqV26FuBmfcfMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA%2Biwf8fMB%2FMgM9f6ircA96qEP5KvScron9zWs7kf67XI52znKj%2FjiwhRyJKjYr9Sr%2B99OjzTabMR9jYvBdjv8bg14F08B4ok0TWRGQi6JRhcN8ZYrp%2F6sFgkE02hTKwwU7CmsjU08dULSB1ME%2BHhIj6zWHvph4MNal9zrHC%2BLSmCku3QGCpxGl6Jj87L59mZsvrJCisFdUTXWYLnXmLDkSIQQWMnznAP17sYPDdRioinNSEFACNltsAzCqw5IZRJsYiEzj8ornwP6bioRvJUlKAknJRs%2FyPWhwcGRBR6RnwfwDBouGTEsbTArG4QAD08Rjf6CUZUt%2FSbS4qMO4nNKs%2F5MrHdXU9gHxfT8bFEcGYBnqv1fZGSSITuul1UHxxrt6wgKmYzEzh3RcEOaauvmrVMF7tIRFG9uCf12RMetJnqgC8Fu5qN9UnIkw070W%2FmOCGYgWJhiXKzYmdQckMSJ1hyB6NKCUL8Ozf%2Frb4N34%2BWZEHdr29jxJkbbhGLbzRDk7MyMUhZHE2GwR6Z1n2g09IlfhdhTss7ifYleiawqvzznTfh8uu7OlsZsj8pnPyxVq61scx5WgZfJCGqgguo4q%2FBP4BXraoH3SrDdx2NdP69aJKFc94HnNxAd0OpEjikF2HgUUiw3QUAYG%2FMLfZm78GOqUBLT%2FDyEzVJpHcQrmUytBwi6Bqm7z1DnzCqgU%2BiCytlD632r4tGRUTiunG5pk7E5Ak1dVdH6YQTej7Hj3%2BhgLe5T6i%2FjKXJ6Vfm38WY1My3oSIKdgfp8SXTXKNk4vev466lthpqceqAk8XbyVI%2FReZFRYNtfFo5wN8A6zT9wseYtG5NskHz9%2Fdnv4aWbJKZPfmUCbdejLHAr2TkZZpDKSZlcGgasro&X-Amz-Signature=104b7f2600f16dcfe539bebaead8ba559acc3d12e82c794f70d15a3a5d3a6f00&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZDVRT4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbRx8SS0LwbZrDagzA3m39Lu4SIFCmgp7ANYHSYnpsgIgZespG85wxZQU3DH8Wj20Kgbh3x05tu%2FqV26FuBmfcfMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA%2Biwf8fMB%2FMgM9f6ircA96qEP5KvScron9zWs7kf67XI52znKj%2FjiwhRyJKjYr9Sr%2B99OjzTabMR9jYvBdjv8bg14F08B4ok0TWRGQi6JRhcN8ZYrp%2F6sFgkE02hTKwwU7CmsjU08dULSB1ME%2BHhIj6zWHvph4MNal9zrHC%2BLSmCku3QGCpxGl6Jj87L59mZsvrJCisFdUTXWYLnXmLDkSIQQWMnznAP17sYPDdRioinNSEFACNltsAzCqw5IZRJsYiEzj8ornwP6bioRvJUlKAknJRs%2FyPWhwcGRBR6RnwfwDBouGTEsbTArG4QAD08Rjf6CUZUt%2FSbS4qMO4nNKs%2F5MrHdXU9gHxfT8bFEcGYBnqv1fZGSSITuul1UHxxrt6wgKmYzEzh3RcEOaauvmrVMF7tIRFG9uCf12RMetJnqgC8Fu5qN9UnIkw070W%2FmOCGYgWJhiXKzYmdQckMSJ1hyB6NKCUL8Ozf%2Frb4N34%2BWZEHdr29jxJkbbhGLbzRDk7MyMUhZHE2GwR6Z1n2g09IlfhdhTss7ifYleiawqvzznTfh8uu7OlsZsj8pnPyxVq61scx5WgZfJCGqgguo4q%2FBP4BXraoH3SrDdx2NdP69aJKFc94HnNxAd0OpEjikF2HgUUiw3QUAYG%2FMLfZm78GOqUBLT%2FDyEzVJpHcQrmUytBwi6Bqm7z1DnzCqgU%2BiCytlD632r4tGRUTiunG5pk7E5Ak1dVdH6YQTej7Hj3%2BhgLe5T6i%2FjKXJ6Vfm38WY1My3oSIKdgfp8SXTXKNk4vev466lthpqceqAk8XbyVI%2FReZFRYNtfFo5wN8A6zT9wseYtG5NskHz9%2Fdnv4aWbJKZPfmUCbdejLHAr2TkZZpDKSZlcGgasro&X-Amz-Signature=f76302e81486080597269efad8aa42d981d5dd2ef2491597ee04fcdcf5beae7f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZDVRT4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbRx8SS0LwbZrDagzA3m39Lu4SIFCmgp7ANYHSYnpsgIgZespG85wxZQU3DH8Wj20Kgbh3x05tu%2FqV26FuBmfcfMq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDA%2Biwf8fMB%2FMgM9f6ircA96qEP5KvScron9zWs7kf67XI52znKj%2FjiwhRyJKjYr9Sr%2B99OjzTabMR9jYvBdjv8bg14F08B4ok0TWRGQi6JRhcN8ZYrp%2F6sFgkE02hTKwwU7CmsjU08dULSB1ME%2BHhIj6zWHvph4MNal9zrHC%2BLSmCku3QGCpxGl6Jj87L59mZsvrJCisFdUTXWYLnXmLDkSIQQWMnznAP17sYPDdRioinNSEFACNltsAzCqw5IZRJsYiEzj8ornwP6bioRvJUlKAknJRs%2FyPWhwcGRBR6RnwfwDBouGTEsbTArG4QAD08Rjf6CUZUt%2FSbS4qMO4nNKs%2F5MrHdXU9gHxfT8bFEcGYBnqv1fZGSSITuul1UHxxrt6wgKmYzEzh3RcEOaauvmrVMF7tIRFG9uCf12RMetJnqgC8Fu5qN9UnIkw070W%2FmOCGYgWJhiXKzYmdQckMSJ1hyB6NKCUL8Ozf%2Frb4N34%2BWZEHdr29jxJkbbhGLbzRDk7MyMUhZHE2GwR6Z1n2g09IlfhdhTss7ifYleiawqvzznTfh8uu7OlsZsj8pnPyxVq61scx5WgZfJCGqgguo4q%2FBP4BXraoH3SrDdx2NdP69aJKFc94HnNxAd0OpEjikF2HgUUiw3QUAYG%2FMLfZm78GOqUBLT%2FDyEzVJpHcQrmUytBwi6Bqm7z1DnzCqgU%2BiCytlD632r4tGRUTiunG5pk7E5Ak1dVdH6YQTej7Hj3%2BhgLe5T6i%2FjKXJ6Vfm38WY1My3oSIKdgfp8SXTXKNk4vev466lthpqceqAk8XbyVI%2FReZFRYNtfFo5wN8A6zT9wseYtG5NskHz9%2Fdnv4aWbJKZPfmUCbdejLHAr2TkZZpDKSZlcGgasro&X-Amz-Signature=d7a53ce64b16f01c15124b692284ef1896e62ce6a19b2d27d32abedc62053629&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
