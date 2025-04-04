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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SKLJJN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbPr%2FlopwxNOZvZ3uiLPJEE3mquytJ1B69MVHn%2FAhT8AiEAxIbIFn43655MhBLBBzZ73hzvIcSZ8LPe2jz23v%2Bz338q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIrmgVPys8vLTxW0eSrcA5P%2FkUpf8sOlatagu3E9PvpISjN9KrSCGcpwigCG7FlIEFrDsz4IfMCfuZ6yBs16JmdB%2BP%2BQP5Yrn4jQc4UA%2FXUla91cYsOFco8ukCDdSBTb61bexsoj3yKS%2B%2FoWTLfGdj%2Bc1LYayqcSLkfJeIGZ6X0%2F4UI8VMhFM52xahpdMcTdPj0PF0MgHXbTX8wmFiOqh30JO6enbYnp6CHU6oJAtHwsQctWdfgtBF07wYXuqqsDsIICO6nu9MCjYBCfCOOJDZkjKIlUTWfGTrbzsp%2F4qcDM8aaCW76baPeAahKV0AYYpCd6NwquBOkDJfqWezIONMyn0yo28FEDDgiermIjAhrI%2FwL9eH0kqSUElMcYuBNQh%2BQpwg2wNAbvParc3MASSljWgJzbNq0G0T0vX6axCJoIA21WyPxz7kClf97q5kGMefpbko%2Fr1Jjjd87alZw%2FoO3FA47tC1fq4%2BS6gb4yn%2FrZGbzcIPk4XyKH6HqGDl90%2FhgOSU8fsBvbilOclZRaeQjiPpZ6eAy%2BFi62ReZpxmYl79kB6qUER5XQKdRU0b1%2BBxI05cPqj63bQKDHI7TFNc%2FYgldCUFQRTYPEz4t9IMNCeq1DZCz6AK2A2d5%2FanvzebA4jzkJRjAbrCFDMMChwb8GOqUBkYbgJnuJwA5BmFNiEdZK%2BHCM56A4BDDXet31Hwr6HPN8yk4%2BBMLZgC9O8spR%2BWq3ZvX7SkHW1nwgBgrPEJwMKKTYgUrvcqhJ3UwvK9y951AT2EDWSQH%2FGRws%2FzXYAroEiP4zVuBUQY%2B%2BTuIni6%2F8Wa%2B400lDXKUUKq6oBosHJ6WJVIpjv7v%2FKrW2VfgVtm2ffBF%2FL%2BrnbxN%2Fyvvd%2FzwW%2F1rYZrOq&X-Amz-Signature=4b381739c6a635473dd54a755cb0a7016e3774b5f7ec04183a023509637fdff7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SKLJJN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbPr%2FlopwxNOZvZ3uiLPJEE3mquytJ1B69MVHn%2FAhT8AiEAxIbIFn43655MhBLBBzZ73hzvIcSZ8LPe2jz23v%2Bz338q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIrmgVPys8vLTxW0eSrcA5P%2FkUpf8sOlatagu3E9PvpISjN9KrSCGcpwigCG7FlIEFrDsz4IfMCfuZ6yBs16JmdB%2BP%2BQP5Yrn4jQc4UA%2FXUla91cYsOFco8ukCDdSBTb61bexsoj3yKS%2B%2FoWTLfGdj%2Bc1LYayqcSLkfJeIGZ6X0%2F4UI8VMhFM52xahpdMcTdPj0PF0MgHXbTX8wmFiOqh30JO6enbYnp6CHU6oJAtHwsQctWdfgtBF07wYXuqqsDsIICO6nu9MCjYBCfCOOJDZkjKIlUTWfGTrbzsp%2F4qcDM8aaCW76baPeAahKV0AYYpCd6NwquBOkDJfqWezIONMyn0yo28FEDDgiermIjAhrI%2FwL9eH0kqSUElMcYuBNQh%2BQpwg2wNAbvParc3MASSljWgJzbNq0G0T0vX6axCJoIA21WyPxz7kClf97q5kGMefpbko%2Fr1Jjjd87alZw%2FoO3FA47tC1fq4%2BS6gb4yn%2FrZGbzcIPk4XyKH6HqGDl90%2FhgOSU8fsBvbilOclZRaeQjiPpZ6eAy%2BFi62ReZpxmYl79kB6qUER5XQKdRU0b1%2BBxI05cPqj63bQKDHI7TFNc%2FYgldCUFQRTYPEz4t9IMNCeq1DZCz6AK2A2d5%2FanvzebA4jzkJRjAbrCFDMMChwb8GOqUBkYbgJnuJwA5BmFNiEdZK%2BHCM56A4BDDXet31Hwr6HPN8yk4%2BBMLZgC9O8spR%2BWq3ZvX7SkHW1nwgBgrPEJwMKKTYgUrvcqhJ3UwvK9y951AT2EDWSQH%2FGRws%2FzXYAroEiP4zVuBUQY%2B%2BTuIni6%2F8Wa%2B400lDXKUUKq6oBosHJ6WJVIpjv7v%2FKrW2VfgVtm2ffBF%2FL%2BrnbxN%2Fyvvd%2FzwW%2F1rYZrOq&X-Amz-Signature=7716dee90fa8c66e511c7f9449c1fcbcdcce2935877095208aafa5ec6c7e8884&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SKLJJN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbPr%2FlopwxNOZvZ3uiLPJEE3mquytJ1B69MVHn%2FAhT8AiEAxIbIFn43655MhBLBBzZ73hzvIcSZ8LPe2jz23v%2Bz338q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIrmgVPys8vLTxW0eSrcA5P%2FkUpf8sOlatagu3E9PvpISjN9KrSCGcpwigCG7FlIEFrDsz4IfMCfuZ6yBs16JmdB%2BP%2BQP5Yrn4jQc4UA%2FXUla91cYsOFco8ukCDdSBTb61bexsoj3yKS%2B%2FoWTLfGdj%2Bc1LYayqcSLkfJeIGZ6X0%2F4UI8VMhFM52xahpdMcTdPj0PF0MgHXbTX8wmFiOqh30JO6enbYnp6CHU6oJAtHwsQctWdfgtBF07wYXuqqsDsIICO6nu9MCjYBCfCOOJDZkjKIlUTWfGTrbzsp%2F4qcDM8aaCW76baPeAahKV0AYYpCd6NwquBOkDJfqWezIONMyn0yo28FEDDgiermIjAhrI%2FwL9eH0kqSUElMcYuBNQh%2BQpwg2wNAbvParc3MASSljWgJzbNq0G0T0vX6axCJoIA21WyPxz7kClf97q5kGMefpbko%2Fr1Jjjd87alZw%2FoO3FA47tC1fq4%2BS6gb4yn%2FrZGbzcIPk4XyKH6HqGDl90%2FhgOSU8fsBvbilOclZRaeQjiPpZ6eAy%2BFi62ReZpxmYl79kB6qUER5XQKdRU0b1%2BBxI05cPqj63bQKDHI7TFNc%2FYgldCUFQRTYPEz4t9IMNCeq1DZCz6AK2A2d5%2FanvzebA4jzkJRjAbrCFDMMChwb8GOqUBkYbgJnuJwA5BmFNiEdZK%2BHCM56A4BDDXet31Hwr6HPN8yk4%2BBMLZgC9O8spR%2BWq3ZvX7SkHW1nwgBgrPEJwMKKTYgUrvcqhJ3UwvK9y951AT2EDWSQH%2FGRws%2FzXYAroEiP4zVuBUQY%2B%2BTuIni6%2F8Wa%2B400lDXKUUKq6oBosHJ6WJVIpjv7v%2FKrW2VfgVtm2ffBF%2FL%2BrnbxN%2Fyvvd%2FzwW%2F1rYZrOq&X-Amz-Signature=d3805145bf6d75a091f5fb6bb6282dbf7e0c752810ad4f9a35752cb93cd364d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SKLJJN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbPr%2FlopwxNOZvZ3uiLPJEE3mquytJ1B69MVHn%2FAhT8AiEAxIbIFn43655MhBLBBzZ73hzvIcSZ8LPe2jz23v%2Bz338q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIrmgVPys8vLTxW0eSrcA5P%2FkUpf8sOlatagu3E9PvpISjN9KrSCGcpwigCG7FlIEFrDsz4IfMCfuZ6yBs16JmdB%2BP%2BQP5Yrn4jQc4UA%2FXUla91cYsOFco8ukCDdSBTb61bexsoj3yKS%2B%2FoWTLfGdj%2Bc1LYayqcSLkfJeIGZ6X0%2F4UI8VMhFM52xahpdMcTdPj0PF0MgHXbTX8wmFiOqh30JO6enbYnp6CHU6oJAtHwsQctWdfgtBF07wYXuqqsDsIICO6nu9MCjYBCfCOOJDZkjKIlUTWfGTrbzsp%2F4qcDM8aaCW76baPeAahKV0AYYpCd6NwquBOkDJfqWezIONMyn0yo28FEDDgiermIjAhrI%2FwL9eH0kqSUElMcYuBNQh%2BQpwg2wNAbvParc3MASSljWgJzbNq0G0T0vX6axCJoIA21WyPxz7kClf97q5kGMefpbko%2Fr1Jjjd87alZw%2FoO3FA47tC1fq4%2BS6gb4yn%2FrZGbzcIPk4XyKH6HqGDl90%2FhgOSU8fsBvbilOclZRaeQjiPpZ6eAy%2BFi62ReZpxmYl79kB6qUER5XQKdRU0b1%2BBxI05cPqj63bQKDHI7TFNc%2FYgldCUFQRTYPEz4t9IMNCeq1DZCz6AK2A2d5%2FanvzebA4jzkJRjAbrCFDMMChwb8GOqUBkYbgJnuJwA5BmFNiEdZK%2BHCM56A4BDDXet31Hwr6HPN8yk4%2BBMLZgC9O8spR%2BWq3ZvX7SkHW1nwgBgrPEJwMKKTYgUrvcqhJ3UwvK9y951AT2EDWSQH%2FGRws%2FzXYAroEiP4zVuBUQY%2B%2BTuIni6%2F8Wa%2B400lDXKUUKq6oBosHJ6WJVIpjv7v%2FKrW2VfgVtm2ffBF%2FL%2BrnbxN%2Fyvvd%2FzwW%2F1rYZrOq&X-Amz-Signature=0055bd01b81cbd7c347e8b1ee2d8b060cdd16de196a6a05a23416c359a1ae3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SKLJJN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbPr%2FlopwxNOZvZ3uiLPJEE3mquytJ1B69MVHn%2FAhT8AiEAxIbIFn43655MhBLBBzZ73hzvIcSZ8LPe2jz23v%2Bz338q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIrmgVPys8vLTxW0eSrcA5P%2FkUpf8sOlatagu3E9PvpISjN9KrSCGcpwigCG7FlIEFrDsz4IfMCfuZ6yBs16JmdB%2BP%2BQP5Yrn4jQc4UA%2FXUla91cYsOFco8ukCDdSBTb61bexsoj3yKS%2B%2FoWTLfGdj%2Bc1LYayqcSLkfJeIGZ6X0%2F4UI8VMhFM52xahpdMcTdPj0PF0MgHXbTX8wmFiOqh30JO6enbYnp6CHU6oJAtHwsQctWdfgtBF07wYXuqqsDsIICO6nu9MCjYBCfCOOJDZkjKIlUTWfGTrbzsp%2F4qcDM8aaCW76baPeAahKV0AYYpCd6NwquBOkDJfqWezIONMyn0yo28FEDDgiermIjAhrI%2FwL9eH0kqSUElMcYuBNQh%2BQpwg2wNAbvParc3MASSljWgJzbNq0G0T0vX6axCJoIA21WyPxz7kClf97q5kGMefpbko%2Fr1Jjjd87alZw%2FoO3FA47tC1fq4%2BS6gb4yn%2FrZGbzcIPk4XyKH6HqGDl90%2FhgOSU8fsBvbilOclZRaeQjiPpZ6eAy%2BFi62ReZpxmYl79kB6qUER5XQKdRU0b1%2BBxI05cPqj63bQKDHI7TFNc%2FYgldCUFQRTYPEz4t9IMNCeq1DZCz6AK2A2d5%2FanvzebA4jzkJRjAbrCFDMMChwb8GOqUBkYbgJnuJwA5BmFNiEdZK%2BHCM56A4BDDXet31Hwr6HPN8yk4%2BBMLZgC9O8spR%2BWq3ZvX7SkHW1nwgBgrPEJwMKKTYgUrvcqhJ3UwvK9y951AT2EDWSQH%2FGRws%2FzXYAroEiP4zVuBUQY%2B%2BTuIni6%2F8Wa%2B400lDXKUUKq6oBosHJ6WJVIpjv7v%2FKrW2VfgVtm2ffBF%2FL%2BrnbxN%2Fyvvd%2FzwW%2F1rYZrOq&X-Amz-Signature=6d845f48bd4959dbd9985cf035c1f6f1c29254233d90d31227c70a3102438476&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SKLJJN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbPr%2FlopwxNOZvZ3uiLPJEE3mquytJ1B69MVHn%2FAhT8AiEAxIbIFn43655MhBLBBzZ73hzvIcSZ8LPe2jz23v%2Bz338q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIrmgVPys8vLTxW0eSrcA5P%2FkUpf8sOlatagu3E9PvpISjN9KrSCGcpwigCG7FlIEFrDsz4IfMCfuZ6yBs16JmdB%2BP%2BQP5Yrn4jQc4UA%2FXUla91cYsOFco8ukCDdSBTb61bexsoj3yKS%2B%2FoWTLfGdj%2Bc1LYayqcSLkfJeIGZ6X0%2F4UI8VMhFM52xahpdMcTdPj0PF0MgHXbTX8wmFiOqh30JO6enbYnp6CHU6oJAtHwsQctWdfgtBF07wYXuqqsDsIICO6nu9MCjYBCfCOOJDZkjKIlUTWfGTrbzsp%2F4qcDM8aaCW76baPeAahKV0AYYpCd6NwquBOkDJfqWezIONMyn0yo28FEDDgiermIjAhrI%2FwL9eH0kqSUElMcYuBNQh%2BQpwg2wNAbvParc3MASSljWgJzbNq0G0T0vX6axCJoIA21WyPxz7kClf97q5kGMefpbko%2Fr1Jjjd87alZw%2FoO3FA47tC1fq4%2BS6gb4yn%2FrZGbzcIPk4XyKH6HqGDl90%2FhgOSU8fsBvbilOclZRaeQjiPpZ6eAy%2BFi62ReZpxmYl79kB6qUER5XQKdRU0b1%2BBxI05cPqj63bQKDHI7TFNc%2FYgldCUFQRTYPEz4t9IMNCeq1DZCz6AK2A2d5%2FanvzebA4jzkJRjAbrCFDMMChwb8GOqUBkYbgJnuJwA5BmFNiEdZK%2BHCM56A4BDDXet31Hwr6HPN8yk4%2BBMLZgC9O8spR%2BWq3ZvX7SkHW1nwgBgrPEJwMKKTYgUrvcqhJ3UwvK9y951AT2EDWSQH%2FGRws%2FzXYAroEiP4zVuBUQY%2B%2BTuIni6%2F8Wa%2B400lDXKUUKq6oBosHJ6WJVIpjv7v%2FKrW2VfgVtm2ffBF%2FL%2BrnbxN%2Fyvvd%2FzwW%2F1rYZrOq&X-Amz-Signature=60eb79b02df7927b59407be1f58d02b49e47a443a1ac018251baafad9cf36a21&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3SKLJJN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbPr%2FlopwxNOZvZ3uiLPJEE3mquytJ1B69MVHn%2FAhT8AiEAxIbIFn43655MhBLBBzZ73hzvIcSZ8LPe2jz23v%2Bz338q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIrmgVPys8vLTxW0eSrcA5P%2FkUpf8sOlatagu3E9PvpISjN9KrSCGcpwigCG7FlIEFrDsz4IfMCfuZ6yBs16JmdB%2BP%2BQP5Yrn4jQc4UA%2FXUla91cYsOFco8ukCDdSBTb61bexsoj3yKS%2B%2FoWTLfGdj%2Bc1LYayqcSLkfJeIGZ6X0%2F4UI8VMhFM52xahpdMcTdPj0PF0MgHXbTX8wmFiOqh30JO6enbYnp6CHU6oJAtHwsQctWdfgtBF07wYXuqqsDsIICO6nu9MCjYBCfCOOJDZkjKIlUTWfGTrbzsp%2F4qcDM8aaCW76baPeAahKV0AYYpCd6NwquBOkDJfqWezIONMyn0yo28FEDDgiermIjAhrI%2FwL9eH0kqSUElMcYuBNQh%2BQpwg2wNAbvParc3MASSljWgJzbNq0G0T0vX6axCJoIA21WyPxz7kClf97q5kGMefpbko%2Fr1Jjjd87alZw%2FoO3FA47tC1fq4%2BS6gb4yn%2FrZGbzcIPk4XyKH6HqGDl90%2FhgOSU8fsBvbilOclZRaeQjiPpZ6eAy%2BFi62ReZpxmYl79kB6qUER5XQKdRU0b1%2BBxI05cPqj63bQKDHI7TFNc%2FYgldCUFQRTYPEz4t9IMNCeq1DZCz6AK2A2d5%2FanvzebA4jzkJRjAbrCFDMMChwb8GOqUBkYbgJnuJwA5BmFNiEdZK%2BHCM56A4BDDXet31Hwr6HPN8yk4%2BBMLZgC9O8spR%2BWq3ZvX7SkHW1nwgBgrPEJwMKKTYgUrvcqhJ3UwvK9y951AT2EDWSQH%2FGRws%2FzXYAroEiP4zVuBUQY%2B%2BTuIni6%2F8Wa%2B400lDXKUUKq6oBosHJ6WJVIpjv7v%2FKrW2VfgVtm2ffBF%2FL%2BrnbxN%2Fyvvd%2FzwW%2F1rYZrOq&X-Amz-Signature=58d6b950734d02fd34ec244ad5dd6e9d502efab58ae64d868875eb73afa8aaa4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
