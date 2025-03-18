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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWYNBUH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKS2c9LPTjHY7vAKBndycGH43v1DjwQA%2BiQZH2koMRLAiEAtSwhrE4qbo4mowdDaW9WHbz5XNYenyvnPlpdgxbsNJUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAGWJUCx0GE9gLt5ESrcAxqll6GlgmKXsmPbjnXFHjnOWdB1ZSdVcQ3tpvH%2FMb5ILTGdnpZcZgYI016k3LUPBFZft7V7QKG57NaAjy2hIIo%2FePEpWtJqMt%2B6wHaGNZoKsNpA3kvCBfwgy0mltrqzMOgZk0Rwv4GgP9199%2Bn1H5m5PKdLBt4g8i%2FkKECHJqjGtWBbDsFaIRjqQVsx1Bt8q2ObwK1fowSHznuzlbBYuLNGYb%2F9xmxMiT3va5rC3KssyRrHUExt3uje0ULIuW48N25VCDeJhQ%2B3sD3niI3wRao%2B4t3cfGRJ0XP%2FZjcYKPXZPv9mthl0TO2mMwa0lm7duudRl6jMk8eU%2BSWF3Vi6M4bFSktCOm4%2FXwGmz6lSZcaFKQfa0HZtxFSTw82g5mThiD2LylFu%2BVnaZNihNju4RzgOpGY1LefEjCJauxe4lIiKdARn9juJP9Y7Kp%2FmRjEKlDywXT8Kr2Eaa3MkQVZqmyeDK86VNMzLa6leriAbgySVR%2F7Hjw7idiG4L0gBDpa7yI72QScY%2F3oWAi5I73kORWoAGWmHWCm31rcufKl1qFbPPgBpj83sSbAQbjgZ8VmAY1FX5BoG5G9sii1AOqjVxCYkeNpiFYgavkM%2BzPxax6K8a0ro%2FuP0U1B01ZGrMPa25L4GOqUBiFT%2F5KIZPPd%2FwsNP%2FL8G4QlzSHCNW4zi9Io5HeLvzAmv5kuI0HuNgel1iTlP26EA88c%2Bqfz7u2BFaKR8TAolduQVKrrFIF3bcHucGDzB3%2B1B2Lh8qtNzjzfF6FWA9RqXbu%2FgWSWH0WOi6sCwIWaATao6q7m8sRDEz0kYHE39wZxDTUDQXqRp4NpA%2FHrmyDug562N9QUzd3QCdezpP51SghK9ccnQ&X-Amz-Signature=85128d0c5a636166835d98e5e0eae20bdc0c68dd731ffb5661b3bc4b124a1b60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWYNBUH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKS2c9LPTjHY7vAKBndycGH43v1DjwQA%2BiQZH2koMRLAiEAtSwhrE4qbo4mowdDaW9WHbz5XNYenyvnPlpdgxbsNJUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAGWJUCx0GE9gLt5ESrcAxqll6GlgmKXsmPbjnXFHjnOWdB1ZSdVcQ3tpvH%2FMb5ILTGdnpZcZgYI016k3LUPBFZft7V7QKG57NaAjy2hIIo%2FePEpWtJqMt%2B6wHaGNZoKsNpA3kvCBfwgy0mltrqzMOgZk0Rwv4GgP9199%2Bn1H5m5PKdLBt4g8i%2FkKECHJqjGtWBbDsFaIRjqQVsx1Bt8q2ObwK1fowSHznuzlbBYuLNGYb%2F9xmxMiT3va5rC3KssyRrHUExt3uje0ULIuW48N25VCDeJhQ%2B3sD3niI3wRao%2B4t3cfGRJ0XP%2FZjcYKPXZPv9mthl0TO2mMwa0lm7duudRl6jMk8eU%2BSWF3Vi6M4bFSktCOm4%2FXwGmz6lSZcaFKQfa0HZtxFSTw82g5mThiD2LylFu%2BVnaZNihNju4RzgOpGY1LefEjCJauxe4lIiKdARn9juJP9Y7Kp%2FmRjEKlDywXT8Kr2Eaa3MkQVZqmyeDK86VNMzLa6leriAbgySVR%2F7Hjw7idiG4L0gBDpa7yI72QScY%2F3oWAi5I73kORWoAGWmHWCm31rcufKl1qFbPPgBpj83sSbAQbjgZ8VmAY1FX5BoG5G9sii1AOqjVxCYkeNpiFYgavkM%2BzPxax6K8a0ro%2FuP0U1B01ZGrMPa25L4GOqUBiFT%2F5KIZPPd%2FwsNP%2FL8G4QlzSHCNW4zi9Io5HeLvzAmv5kuI0HuNgel1iTlP26EA88c%2Bqfz7u2BFaKR8TAolduQVKrrFIF3bcHucGDzB3%2B1B2Lh8qtNzjzfF6FWA9RqXbu%2FgWSWH0WOi6sCwIWaATao6q7m8sRDEz0kYHE39wZxDTUDQXqRp4NpA%2FHrmyDug562N9QUzd3QCdezpP51SghK9ccnQ&X-Amz-Signature=aafbd1ff20a67c841bf9c1f9067c5812838bad0f39a077af53f0850c45dc3d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWYNBUH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKS2c9LPTjHY7vAKBndycGH43v1DjwQA%2BiQZH2koMRLAiEAtSwhrE4qbo4mowdDaW9WHbz5XNYenyvnPlpdgxbsNJUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAGWJUCx0GE9gLt5ESrcAxqll6GlgmKXsmPbjnXFHjnOWdB1ZSdVcQ3tpvH%2FMb5ILTGdnpZcZgYI016k3LUPBFZft7V7QKG57NaAjy2hIIo%2FePEpWtJqMt%2B6wHaGNZoKsNpA3kvCBfwgy0mltrqzMOgZk0Rwv4GgP9199%2Bn1H5m5PKdLBt4g8i%2FkKECHJqjGtWBbDsFaIRjqQVsx1Bt8q2ObwK1fowSHznuzlbBYuLNGYb%2F9xmxMiT3va5rC3KssyRrHUExt3uje0ULIuW48N25VCDeJhQ%2B3sD3niI3wRao%2B4t3cfGRJ0XP%2FZjcYKPXZPv9mthl0TO2mMwa0lm7duudRl6jMk8eU%2BSWF3Vi6M4bFSktCOm4%2FXwGmz6lSZcaFKQfa0HZtxFSTw82g5mThiD2LylFu%2BVnaZNihNju4RzgOpGY1LefEjCJauxe4lIiKdARn9juJP9Y7Kp%2FmRjEKlDywXT8Kr2Eaa3MkQVZqmyeDK86VNMzLa6leriAbgySVR%2F7Hjw7idiG4L0gBDpa7yI72QScY%2F3oWAi5I73kORWoAGWmHWCm31rcufKl1qFbPPgBpj83sSbAQbjgZ8VmAY1FX5BoG5G9sii1AOqjVxCYkeNpiFYgavkM%2BzPxax6K8a0ro%2FuP0U1B01ZGrMPa25L4GOqUBiFT%2F5KIZPPd%2FwsNP%2FL8G4QlzSHCNW4zi9Io5HeLvzAmv5kuI0HuNgel1iTlP26EA88c%2Bqfz7u2BFaKR8TAolduQVKrrFIF3bcHucGDzB3%2B1B2Lh8qtNzjzfF6FWA9RqXbu%2FgWSWH0WOi6sCwIWaATao6q7m8sRDEz0kYHE39wZxDTUDQXqRp4NpA%2FHrmyDug562N9QUzd3QCdezpP51SghK9ccnQ&X-Amz-Signature=d3f529053de0d3087b9eb8add11e48470c62eab5f2097c3f0e4fee0f5e81111c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWYNBUH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKS2c9LPTjHY7vAKBndycGH43v1DjwQA%2BiQZH2koMRLAiEAtSwhrE4qbo4mowdDaW9WHbz5XNYenyvnPlpdgxbsNJUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAGWJUCx0GE9gLt5ESrcAxqll6GlgmKXsmPbjnXFHjnOWdB1ZSdVcQ3tpvH%2FMb5ILTGdnpZcZgYI016k3LUPBFZft7V7QKG57NaAjy2hIIo%2FePEpWtJqMt%2B6wHaGNZoKsNpA3kvCBfwgy0mltrqzMOgZk0Rwv4GgP9199%2Bn1H5m5PKdLBt4g8i%2FkKECHJqjGtWBbDsFaIRjqQVsx1Bt8q2ObwK1fowSHznuzlbBYuLNGYb%2F9xmxMiT3va5rC3KssyRrHUExt3uje0ULIuW48N25VCDeJhQ%2B3sD3niI3wRao%2B4t3cfGRJ0XP%2FZjcYKPXZPv9mthl0TO2mMwa0lm7duudRl6jMk8eU%2BSWF3Vi6M4bFSktCOm4%2FXwGmz6lSZcaFKQfa0HZtxFSTw82g5mThiD2LylFu%2BVnaZNihNju4RzgOpGY1LefEjCJauxe4lIiKdARn9juJP9Y7Kp%2FmRjEKlDywXT8Kr2Eaa3MkQVZqmyeDK86VNMzLa6leriAbgySVR%2F7Hjw7idiG4L0gBDpa7yI72QScY%2F3oWAi5I73kORWoAGWmHWCm31rcufKl1qFbPPgBpj83sSbAQbjgZ8VmAY1FX5BoG5G9sii1AOqjVxCYkeNpiFYgavkM%2BzPxax6K8a0ro%2FuP0U1B01ZGrMPa25L4GOqUBiFT%2F5KIZPPd%2FwsNP%2FL8G4QlzSHCNW4zi9Io5HeLvzAmv5kuI0HuNgel1iTlP26EA88c%2Bqfz7u2BFaKR8TAolduQVKrrFIF3bcHucGDzB3%2B1B2Lh8qtNzjzfF6FWA9RqXbu%2FgWSWH0WOi6sCwIWaATao6q7m8sRDEz0kYHE39wZxDTUDQXqRp4NpA%2FHrmyDug562N9QUzd3QCdezpP51SghK9ccnQ&X-Amz-Signature=31d445c4df99e4e63c69ab4c11c16f22170f48006be106ab14b3249a844b76e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWYNBUH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKS2c9LPTjHY7vAKBndycGH43v1DjwQA%2BiQZH2koMRLAiEAtSwhrE4qbo4mowdDaW9WHbz5XNYenyvnPlpdgxbsNJUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAGWJUCx0GE9gLt5ESrcAxqll6GlgmKXsmPbjnXFHjnOWdB1ZSdVcQ3tpvH%2FMb5ILTGdnpZcZgYI016k3LUPBFZft7V7QKG57NaAjy2hIIo%2FePEpWtJqMt%2B6wHaGNZoKsNpA3kvCBfwgy0mltrqzMOgZk0Rwv4GgP9199%2Bn1H5m5PKdLBt4g8i%2FkKECHJqjGtWBbDsFaIRjqQVsx1Bt8q2ObwK1fowSHznuzlbBYuLNGYb%2F9xmxMiT3va5rC3KssyRrHUExt3uje0ULIuW48N25VCDeJhQ%2B3sD3niI3wRao%2B4t3cfGRJ0XP%2FZjcYKPXZPv9mthl0TO2mMwa0lm7duudRl6jMk8eU%2BSWF3Vi6M4bFSktCOm4%2FXwGmz6lSZcaFKQfa0HZtxFSTw82g5mThiD2LylFu%2BVnaZNihNju4RzgOpGY1LefEjCJauxe4lIiKdARn9juJP9Y7Kp%2FmRjEKlDywXT8Kr2Eaa3MkQVZqmyeDK86VNMzLa6leriAbgySVR%2F7Hjw7idiG4L0gBDpa7yI72QScY%2F3oWAi5I73kORWoAGWmHWCm31rcufKl1qFbPPgBpj83sSbAQbjgZ8VmAY1FX5BoG5G9sii1AOqjVxCYkeNpiFYgavkM%2BzPxax6K8a0ro%2FuP0U1B01ZGrMPa25L4GOqUBiFT%2F5KIZPPd%2FwsNP%2FL8G4QlzSHCNW4zi9Io5HeLvzAmv5kuI0HuNgel1iTlP26EA88c%2Bqfz7u2BFaKR8TAolduQVKrrFIF3bcHucGDzB3%2B1B2Lh8qtNzjzfF6FWA9RqXbu%2FgWSWH0WOi6sCwIWaATao6q7m8sRDEz0kYHE39wZxDTUDQXqRp4NpA%2FHrmyDug562N9QUzd3QCdezpP51SghK9ccnQ&X-Amz-Signature=3e547f9e45f235c04c3b081ec7eec3a61df7c24a72123f22938f995e75228933&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWYNBUH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKS2c9LPTjHY7vAKBndycGH43v1DjwQA%2BiQZH2koMRLAiEAtSwhrE4qbo4mowdDaW9WHbz5XNYenyvnPlpdgxbsNJUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAGWJUCx0GE9gLt5ESrcAxqll6GlgmKXsmPbjnXFHjnOWdB1ZSdVcQ3tpvH%2FMb5ILTGdnpZcZgYI016k3LUPBFZft7V7QKG57NaAjy2hIIo%2FePEpWtJqMt%2B6wHaGNZoKsNpA3kvCBfwgy0mltrqzMOgZk0Rwv4GgP9199%2Bn1H5m5PKdLBt4g8i%2FkKECHJqjGtWBbDsFaIRjqQVsx1Bt8q2ObwK1fowSHznuzlbBYuLNGYb%2F9xmxMiT3va5rC3KssyRrHUExt3uje0ULIuW48N25VCDeJhQ%2B3sD3niI3wRao%2B4t3cfGRJ0XP%2FZjcYKPXZPv9mthl0TO2mMwa0lm7duudRl6jMk8eU%2BSWF3Vi6M4bFSktCOm4%2FXwGmz6lSZcaFKQfa0HZtxFSTw82g5mThiD2LylFu%2BVnaZNihNju4RzgOpGY1LefEjCJauxe4lIiKdARn9juJP9Y7Kp%2FmRjEKlDywXT8Kr2Eaa3MkQVZqmyeDK86VNMzLa6leriAbgySVR%2F7Hjw7idiG4L0gBDpa7yI72QScY%2F3oWAi5I73kORWoAGWmHWCm31rcufKl1qFbPPgBpj83sSbAQbjgZ8VmAY1FX5BoG5G9sii1AOqjVxCYkeNpiFYgavkM%2BzPxax6K8a0ro%2FuP0U1B01ZGrMPa25L4GOqUBiFT%2F5KIZPPd%2FwsNP%2FL8G4QlzSHCNW4zi9Io5HeLvzAmv5kuI0HuNgel1iTlP26EA88c%2Bqfz7u2BFaKR8TAolduQVKrrFIF3bcHucGDzB3%2B1B2Lh8qtNzjzfF6FWA9RqXbu%2FgWSWH0WOi6sCwIWaATao6q7m8sRDEz0kYHE39wZxDTUDQXqRp4NpA%2FHrmyDug562N9QUzd3QCdezpP51SghK9ccnQ&X-Amz-Signature=bd04461ebe71f7bdeb9223947a10352104b87f6796c16ab799eafb1dcd132359&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWYNBUH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKS2c9LPTjHY7vAKBndycGH43v1DjwQA%2BiQZH2koMRLAiEAtSwhrE4qbo4mowdDaW9WHbz5XNYenyvnPlpdgxbsNJUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAGWJUCx0GE9gLt5ESrcAxqll6GlgmKXsmPbjnXFHjnOWdB1ZSdVcQ3tpvH%2FMb5ILTGdnpZcZgYI016k3LUPBFZft7V7QKG57NaAjy2hIIo%2FePEpWtJqMt%2B6wHaGNZoKsNpA3kvCBfwgy0mltrqzMOgZk0Rwv4GgP9199%2Bn1H5m5PKdLBt4g8i%2FkKECHJqjGtWBbDsFaIRjqQVsx1Bt8q2ObwK1fowSHznuzlbBYuLNGYb%2F9xmxMiT3va5rC3KssyRrHUExt3uje0ULIuW48N25VCDeJhQ%2B3sD3niI3wRao%2B4t3cfGRJ0XP%2FZjcYKPXZPv9mthl0TO2mMwa0lm7duudRl6jMk8eU%2BSWF3Vi6M4bFSktCOm4%2FXwGmz6lSZcaFKQfa0HZtxFSTw82g5mThiD2LylFu%2BVnaZNihNju4RzgOpGY1LefEjCJauxe4lIiKdARn9juJP9Y7Kp%2FmRjEKlDywXT8Kr2Eaa3MkQVZqmyeDK86VNMzLa6leriAbgySVR%2F7Hjw7idiG4L0gBDpa7yI72QScY%2F3oWAi5I73kORWoAGWmHWCm31rcufKl1qFbPPgBpj83sSbAQbjgZ8VmAY1FX5BoG5G9sii1AOqjVxCYkeNpiFYgavkM%2BzPxax6K8a0ro%2FuP0U1B01ZGrMPa25L4GOqUBiFT%2F5KIZPPd%2FwsNP%2FL8G4QlzSHCNW4zi9Io5HeLvzAmv5kuI0HuNgel1iTlP26EA88c%2Bqfz7u2BFaKR8TAolduQVKrrFIF3bcHucGDzB3%2B1B2Lh8qtNzjzfF6FWA9RqXbu%2FgWSWH0WOi6sCwIWaATao6q7m8sRDEz0kYHE39wZxDTUDQXqRp4NpA%2FHrmyDug562N9QUzd3QCdezpP51SghK9ccnQ&X-Amz-Signature=0cc6bfa364a5792a68c7b55084d1daa144f7680efab09c27e913c231b35f29f0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
