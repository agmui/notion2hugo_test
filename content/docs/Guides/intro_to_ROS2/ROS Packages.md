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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIJDJO4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW9eEH8V1fHQF3WC83jE7zzt1YjoIEh2O%2FdoaulTwp8AiAcwsyiETrCDQbN3iJ9F3A5y9Kwr4pKlOPqFhlFxVR93Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMgCrTbVY%2FBXAccIOKKtwDOu%2Bg%2F%2Br1PXJ6BE6%2BYS0bXTcbiXrY3%2BePaSookzM1orghOhLLmJbiVsWEvmbO6T2D4Mx9t5TtL7jdyVZ%2FYZArj4p4dpSqkNwUL1uzeEcH%2BvOAsPRrk2qNd1P2D%2FTOPDQP3UUBwcOZN48OYGM5vYfq%2Fo9PUnWv6iHYBBVd3DKvTedpkxJ9fvbXDwFMZOcykiaJdTH4BEqNMUtPMq%2BPgqb6mQ552ZKD36yOIHbCdQNqyEvcE2HBJa%2FP6FL6MYlJL7kY6QaoShdZ69yuQ3%2F1nYOWrj%2FAVifrS38l9kCTjlbVx6bb5CUBoVg1VZI4jCrKQEWmCuCB2myVCGs%2FWK2NcFUVtGg%2BGPNWkvfJtRkoufyzOveJ2Zslnonn5XkUiiehureLPQ1fUZSHrismqr%2FXNVH%2FeXmYz9Ng8GZHOHwCfak0lww4SmnmkW1oxZvw0%2FuETYaYamQjdaD0py0O3OXLZ0HGTnBVTScfQzpch1EtI5g8pGYQGRnLftHCcRFM69yU47BqFVCApPbWt9znnwiN%2FjWVhnaL%2BFp%2Bh6I5xx7UTjIR8r%2FkmnDO1JLXGHyfiOXDEMjWR4dxg0RKSEDwN5tzMNV7SEpLPS1hsA0CTaM7ANWBWwBzX0GLIhKScTlgYaIw0MC7vQY6pgGMf26Kluk1XK%2FwbZbAdVJr7oPPuH%2BWcPW14CPbBuKE4UzXIywozTdsdhnHXnzq4NpKXU6uGpjUheOw1SemA0vU3zRASokVlm1MRE9IDvW9GuwdWJmuJyjofJX3SxE4dWjNYaN6Bs49fUsrn%2B5AK%2BuZNRl2HS%2FwpP4o%2BF8QNCQL2jqJBXqZOSpWxj%2BSjRfGCP4aSdPyOb4lrfghRankBkrZJvxSPqTs&X-Amz-Signature=c3ba0682f3cecb1234d3654178ac8005b479790081520e801c35efbce19b9a57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIJDJO4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW9eEH8V1fHQF3WC83jE7zzt1YjoIEh2O%2FdoaulTwp8AiAcwsyiETrCDQbN3iJ9F3A5y9Kwr4pKlOPqFhlFxVR93Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMgCrTbVY%2FBXAccIOKKtwDOu%2Bg%2F%2Br1PXJ6BE6%2BYS0bXTcbiXrY3%2BePaSookzM1orghOhLLmJbiVsWEvmbO6T2D4Mx9t5TtL7jdyVZ%2FYZArj4p4dpSqkNwUL1uzeEcH%2BvOAsPRrk2qNd1P2D%2FTOPDQP3UUBwcOZN48OYGM5vYfq%2Fo9PUnWv6iHYBBVd3DKvTedpkxJ9fvbXDwFMZOcykiaJdTH4BEqNMUtPMq%2BPgqb6mQ552ZKD36yOIHbCdQNqyEvcE2HBJa%2FP6FL6MYlJL7kY6QaoShdZ69yuQ3%2F1nYOWrj%2FAVifrS38l9kCTjlbVx6bb5CUBoVg1VZI4jCrKQEWmCuCB2myVCGs%2FWK2NcFUVtGg%2BGPNWkvfJtRkoufyzOveJ2Zslnonn5XkUiiehureLPQ1fUZSHrismqr%2FXNVH%2FeXmYz9Ng8GZHOHwCfak0lww4SmnmkW1oxZvw0%2FuETYaYamQjdaD0py0O3OXLZ0HGTnBVTScfQzpch1EtI5g8pGYQGRnLftHCcRFM69yU47BqFVCApPbWt9znnwiN%2FjWVhnaL%2BFp%2Bh6I5xx7UTjIR8r%2FkmnDO1JLXGHyfiOXDEMjWR4dxg0RKSEDwN5tzMNV7SEpLPS1hsA0CTaM7ANWBWwBzX0GLIhKScTlgYaIw0MC7vQY6pgGMf26Kluk1XK%2FwbZbAdVJr7oPPuH%2BWcPW14CPbBuKE4UzXIywozTdsdhnHXnzq4NpKXU6uGpjUheOw1SemA0vU3zRASokVlm1MRE9IDvW9GuwdWJmuJyjofJX3SxE4dWjNYaN6Bs49fUsrn%2B5AK%2BuZNRl2HS%2FwpP4o%2BF8QNCQL2jqJBXqZOSpWxj%2BSjRfGCP4aSdPyOb4lrfghRankBkrZJvxSPqTs&X-Amz-Signature=644a50b1ada26505f3fcf9789b71935f553fe12c0f53cd841d13a77d6a83232d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIJDJO4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW9eEH8V1fHQF3WC83jE7zzt1YjoIEh2O%2FdoaulTwp8AiAcwsyiETrCDQbN3iJ9F3A5y9Kwr4pKlOPqFhlFxVR93Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMgCrTbVY%2FBXAccIOKKtwDOu%2Bg%2F%2Br1PXJ6BE6%2BYS0bXTcbiXrY3%2BePaSookzM1orghOhLLmJbiVsWEvmbO6T2D4Mx9t5TtL7jdyVZ%2FYZArj4p4dpSqkNwUL1uzeEcH%2BvOAsPRrk2qNd1P2D%2FTOPDQP3UUBwcOZN48OYGM5vYfq%2Fo9PUnWv6iHYBBVd3DKvTedpkxJ9fvbXDwFMZOcykiaJdTH4BEqNMUtPMq%2BPgqb6mQ552ZKD36yOIHbCdQNqyEvcE2HBJa%2FP6FL6MYlJL7kY6QaoShdZ69yuQ3%2F1nYOWrj%2FAVifrS38l9kCTjlbVx6bb5CUBoVg1VZI4jCrKQEWmCuCB2myVCGs%2FWK2NcFUVtGg%2BGPNWkvfJtRkoufyzOveJ2Zslnonn5XkUiiehureLPQ1fUZSHrismqr%2FXNVH%2FeXmYz9Ng8GZHOHwCfak0lww4SmnmkW1oxZvw0%2FuETYaYamQjdaD0py0O3OXLZ0HGTnBVTScfQzpch1EtI5g8pGYQGRnLftHCcRFM69yU47BqFVCApPbWt9znnwiN%2FjWVhnaL%2BFp%2Bh6I5xx7UTjIR8r%2FkmnDO1JLXGHyfiOXDEMjWR4dxg0RKSEDwN5tzMNV7SEpLPS1hsA0CTaM7ANWBWwBzX0GLIhKScTlgYaIw0MC7vQY6pgGMf26Kluk1XK%2FwbZbAdVJr7oPPuH%2BWcPW14CPbBuKE4UzXIywozTdsdhnHXnzq4NpKXU6uGpjUheOw1SemA0vU3zRASokVlm1MRE9IDvW9GuwdWJmuJyjofJX3SxE4dWjNYaN6Bs49fUsrn%2B5AK%2BuZNRl2HS%2FwpP4o%2BF8QNCQL2jqJBXqZOSpWxj%2BSjRfGCP4aSdPyOb4lrfghRankBkrZJvxSPqTs&X-Amz-Signature=e28ce4f1af7a0f3a67e83a8fafb181f721198f490758fd2c76a42f83be3e5048&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIJDJO4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW9eEH8V1fHQF3WC83jE7zzt1YjoIEh2O%2FdoaulTwp8AiAcwsyiETrCDQbN3iJ9F3A5y9Kwr4pKlOPqFhlFxVR93Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMgCrTbVY%2FBXAccIOKKtwDOu%2Bg%2F%2Br1PXJ6BE6%2BYS0bXTcbiXrY3%2BePaSookzM1orghOhLLmJbiVsWEvmbO6T2D4Mx9t5TtL7jdyVZ%2FYZArj4p4dpSqkNwUL1uzeEcH%2BvOAsPRrk2qNd1P2D%2FTOPDQP3UUBwcOZN48OYGM5vYfq%2Fo9PUnWv6iHYBBVd3DKvTedpkxJ9fvbXDwFMZOcykiaJdTH4BEqNMUtPMq%2BPgqb6mQ552ZKD36yOIHbCdQNqyEvcE2HBJa%2FP6FL6MYlJL7kY6QaoShdZ69yuQ3%2F1nYOWrj%2FAVifrS38l9kCTjlbVx6bb5CUBoVg1VZI4jCrKQEWmCuCB2myVCGs%2FWK2NcFUVtGg%2BGPNWkvfJtRkoufyzOveJ2Zslnonn5XkUiiehureLPQ1fUZSHrismqr%2FXNVH%2FeXmYz9Ng8GZHOHwCfak0lww4SmnmkW1oxZvw0%2FuETYaYamQjdaD0py0O3OXLZ0HGTnBVTScfQzpch1EtI5g8pGYQGRnLftHCcRFM69yU47BqFVCApPbWt9znnwiN%2FjWVhnaL%2BFp%2Bh6I5xx7UTjIR8r%2FkmnDO1JLXGHyfiOXDEMjWR4dxg0RKSEDwN5tzMNV7SEpLPS1hsA0CTaM7ANWBWwBzX0GLIhKScTlgYaIw0MC7vQY6pgGMf26Kluk1XK%2FwbZbAdVJr7oPPuH%2BWcPW14CPbBuKE4UzXIywozTdsdhnHXnzq4NpKXU6uGpjUheOw1SemA0vU3zRASokVlm1MRE9IDvW9GuwdWJmuJyjofJX3SxE4dWjNYaN6Bs49fUsrn%2B5AK%2BuZNRl2HS%2FwpP4o%2BF8QNCQL2jqJBXqZOSpWxj%2BSjRfGCP4aSdPyOb4lrfghRankBkrZJvxSPqTs&X-Amz-Signature=b8aa44ab80cc8bd438d6ff4295327284669dd53197fe3bb39990e7add7a9a501&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIJDJO4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW9eEH8V1fHQF3WC83jE7zzt1YjoIEh2O%2FdoaulTwp8AiAcwsyiETrCDQbN3iJ9F3A5y9Kwr4pKlOPqFhlFxVR93Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMgCrTbVY%2FBXAccIOKKtwDOu%2Bg%2F%2Br1PXJ6BE6%2BYS0bXTcbiXrY3%2BePaSookzM1orghOhLLmJbiVsWEvmbO6T2D4Mx9t5TtL7jdyVZ%2FYZArj4p4dpSqkNwUL1uzeEcH%2BvOAsPRrk2qNd1P2D%2FTOPDQP3UUBwcOZN48OYGM5vYfq%2Fo9PUnWv6iHYBBVd3DKvTedpkxJ9fvbXDwFMZOcykiaJdTH4BEqNMUtPMq%2BPgqb6mQ552ZKD36yOIHbCdQNqyEvcE2HBJa%2FP6FL6MYlJL7kY6QaoShdZ69yuQ3%2F1nYOWrj%2FAVifrS38l9kCTjlbVx6bb5CUBoVg1VZI4jCrKQEWmCuCB2myVCGs%2FWK2NcFUVtGg%2BGPNWkvfJtRkoufyzOveJ2Zslnonn5XkUiiehureLPQ1fUZSHrismqr%2FXNVH%2FeXmYz9Ng8GZHOHwCfak0lww4SmnmkW1oxZvw0%2FuETYaYamQjdaD0py0O3OXLZ0HGTnBVTScfQzpch1EtI5g8pGYQGRnLftHCcRFM69yU47BqFVCApPbWt9znnwiN%2FjWVhnaL%2BFp%2Bh6I5xx7UTjIR8r%2FkmnDO1JLXGHyfiOXDEMjWR4dxg0RKSEDwN5tzMNV7SEpLPS1hsA0CTaM7ANWBWwBzX0GLIhKScTlgYaIw0MC7vQY6pgGMf26Kluk1XK%2FwbZbAdVJr7oPPuH%2BWcPW14CPbBuKE4UzXIywozTdsdhnHXnzq4NpKXU6uGpjUheOw1SemA0vU3zRASokVlm1MRE9IDvW9GuwdWJmuJyjofJX3SxE4dWjNYaN6Bs49fUsrn%2B5AK%2BuZNRl2HS%2FwpP4o%2BF8QNCQL2jqJBXqZOSpWxj%2BSjRfGCP4aSdPyOb4lrfghRankBkrZJvxSPqTs&X-Amz-Signature=5b30ab27d36d3d75536927a13958c639ee5e71b2f42bf5131f6be9a78b464dae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIJDJO4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW9eEH8V1fHQF3WC83jE7zzt1YjoIEh2O%2FdoaulTwp8AiAcwsyiETrCDQbN3iJ9F3A5y9Kwr4pKlOPqFhlFxVR93Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMgCrTbVY%2FBXAccIOKKtwDOu%2Bg%2F%2Br1PXJ6BE6%2BYS0bXTcbiXrY3%2BePaSookzM1orghOhLLmJbiVsWEvmbO6T2D4Mx9t5TtL7jdyVZ%2FYZArj4p4dpSqkNwUL1uzeEcH%2BvOAsPRrk2qNd1P2D%2FTOPDQP3UUBwcOZN48OYGM5vYfq%2Fo9PUnWv6iHYBBVd3DKvTedpkxJ9fvbXDwFMZOcykiaJdTH4BEqNMUtPMq%2BPgqb6mQ552ZKD36yOIHbCdQNqyEvcE2HBJa%2FP6FL6MYlJL7kY6QaoShdZ69yuQ3%2F1nYOWrj%2FAVifrS38l9kCTjlbVx6bb5CUBoVg1VZI4jCrKQEWmCuCB2myVCGs%2FWK2NcFUVtGg%2BGPNWkvfJtRkoufyzOveJ2Zslnonn5XkUiiehureLPQ1fUZSHrismqr%2FXNVH%2FeXmYz9Ng8GZHOHwCfak0lww4SmnmkW1oxZvw0%2FuETYaYamQjdaD0py0O3OXLZ0HGTnBVTScfQzpch1EtI5g8pGYQGRnLftHCcRFM69yU47BqFVCApPbWt9znnwiN%2FjWVhnaL%2BFp%2Bh6I5xx7UTjIR8r%2FkmnDO1JLXGHyfiOXDEMjWR4dxg0RKSEDwN5tzMNV7SEpLPS1hsA0CTaM7ANWBWwBzX0GLIhKScTlgYaIw0MC7vQY6pgGMf26Kluk1XK%2FwbZbAdVJr7oPPuH%2BWcPW14CPbBuKE4UzXIywozTdsdhnHXnzq4NpKXU6uGpjUheOw1SemA0vU3zRASokVlm1MRE9IDvW9GuwdWJmuJyjofJX3SxE4dWjNYaN6Bs49fUsrn%2B5AK%2BuZNRl2HS%2FwpP4o%2BF8QNCQL2jqJBXqZOSpWxj%2BSjRfGCP4aSdPyOb4lrfghRankBkrZJvxSPqTs&X-Amz-Signature=fbbbf43e6f17ed21cc492706beaa4b3a190db9761a7defb3213fda25a0c7639e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPIJDJO4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW9eEH8V1fHQF3WC83jE7zzt1YjoIEh2O%2FdoaulTwp8AiAcwsyiETrCDQbN3iJ9F3A5y9Kwr4pKlOPqFhlFxVR93Sr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMgCrTbVY%2FBXAccIOKKtwDOu%2Bg%2F%2Br1PXJ6BE6%2BYS0bXTcbiXrY3%2BePaSookzM1orghOhLLmJbiVsWEvmbO6T2D4Mx9t5TtL7jdyVZ%2FYZArj4p4dpSqkNwUL1uzeEcH%2BvOAsPRrk2qNd1P2D%2FTOPDQP3UUBwcOZN48OYGM5vYfq%2Fo9PUnWv6iHYBBVd3DKvTedpkxJ9fvbXDwFMZOcykiaJdTH4BEqNMUtPMq%2BPgqb6mQ552ZKD36yOIHbCdQNqyEvcE2HBJa%2FP6FL6MYlJL7kY6QaoShdZ69yuQ3%2F1nYOWrj%2FAVifrS38l9kCTjlbVx6bb5CUBoVg1VZI4jCrKQEWmCuCB2myVCGs%2FWK2NcFUVtGg%2BGPNWkvfJtRkoufyzOveJ2Zslnonn5XkUiiehureLPQ1fUZSHrismqr%2FXNVH%2FeXmYz9Ng8GZHOHwCfak0lww4SmnmkW1oxZvw0%2FuETYaYamQjdaD0py0O3OXLZ0HGTnBVTScfQzpch1EtI5g8pGYQGRnLftHCcRFM69yU47BqFVCApPbWt9znnwiN%2FjWVhnaL%2BFp%2Bh6I5xx7UTjIR8r%2FkmnDO1JLXGHyfiOXDEMjWR4dxg0RKSEDwN5tzMNV7SEpLPS1hsA0CTaM7ANWBWwBzX0GLIhKScTlgYaIw0MC7vQY6pgGMf26Kluk1XK%2FwbZbAdVJr7oPPuH%2BWcPW14CPbBuKE4UzXIywozTdsdhnHXnzq4NpKXU6uGpjUheOw1SemA0vU3zRASokVlm1MRE9IDvW9GuwdWJmuJyjofJX3SxE4dWjNYaN6Bs49fUsrn%2B5AK%2BuZNRl2HS%2FwpP4o%2BF8QNCQL2jqJBXqZOSpWxj%2BSjRfGCP4aSdPyOb4lrfghRankBkrZJvxSPqTs&X-Amz-Signature=b6e68b4aa15c3a2ddddeb1c19116323cd38293ff812af622aa91b69c3129e5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
