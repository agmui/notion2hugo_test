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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP5OBVG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBR7HxUU5RTojtaTPI0G0UMo1Kc2burohSTyn109W%2BmAiAOgFjhZy7mUA0r96BoQG2IGWIMyjYFQlAwN3nXLUpUnSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCqZ4xvSx1GnV9AWNKtwD8iejQko7TTnuG1u1FKBNzahETu%2BOxmAPYSyFM3LLZ%2BA6dJZcbRsudhHUZmdoyOwlITUx7L2watHzY%2BXSFPCYrFfs9er%2BS%2BiUftTRrCNrVdGezvEmcnzi8ZYbiYcckIYLMWD3ZPzwRsu15w%2BT3hZlJlb9iS3jggeyH3qh2eE%2FM%2BeluYzR3KUcs0F6w79oO3Q8VrWrKzViRF5%2Bgi1BEWKcdjU47s8FUdmDKMdL3RYrv%2FfN4UxcEvacNT2kK%2BeW%2FnSrzoNE6evPCI0vEbgVrcMUKETe0Wh40DqUo6MaTBO%2F14b%2BkmetkL%2FUJZz%2F2iYLWSS1%2B00hzljjenB%2Ffp75Ug4UD3ZY%2FrorQ97oam7xV9hnO3UF0UlExkS8r5dTtjeHx9JisEYBxY%2BrjfgS06TfTi5O4pK28NmkUd7fTbUam1Y69HD7fIdaQ0Mzg5gLsUdMVl7dC92BlUiJFv7%2BXp0WgQDp%2FjKMekeN2oJP2rwdYzXm%2F2b%2Bah8aV6qyHcxIPQ7agQaYof7UuTSzjybo4NMccjam8MAXGrkisdfPMCUEi8OOYEI18rN5Q%2FGdXNdgHChrazI6ncpNXe%2BuhRZNL6x6CHn%2Bwphj54UskTDNmcF05NZ9iktDIqp%2FiSFkAtrTToww%2FdDVvgY6pgEK%2FfLdBFqIpaae2p0KXSlzYBxN6EbA91sAedVv%2BOdSaZSmKEfV1pUteOXfybjtOiA3Gb1GOj7QTrUO%2BUocSMh5pzXldmceuzlAXr3bzs22w8ZoK3PO8jojfhNxXAEZ260zoLhUdu861XR426wr7w%2BpJTPFw0mVZx9nWt9DPj%2BLNndnvParMdD%2BEBcg3QhUnVTEnn4pxdCHNkGHpXtCMTRV6rSspsNH&X-Amz-Signature=ebd977db9a63a2b3c98e56c077307a469ff1564accc01cebcef6551220d407cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP5OBVG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBR7HxUU5RTojtaTPI0G0UMo1Kc2burohSTyn109W%2BmAiAOgFjhZy7mUA0r96BoQG2IGWIMyjYFQlAwN3nXLUpUnSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCqZ4xvSx1GnV9AWNKtwD8iejQko7TTnuG1u1FKBNzahETu%2BOxmAPYSyFM3LLZ%2BA6dJZcbRsudhHUZmdoyOwlITUx7L2watHzY%2BXSFPCYrFfs9er%2BS%2BiUftTRrCNrVdGezvEmcnzi8ZYbiYcckIYLMWD3ZPzwRsu15w%2BT3hZlJlb9iS3jggeyH3qh2eE%2FM%2BeluYzR3KUcs0F6w79oO3Q8VrWrKzViRF5%2Bgi1BEWKcdjU47s8FUdmDKMdL3RYrv%2FfN4UxcEvacNT2kK%2BeW%2FnSrzoNE6evPCI0vEbgVrcMUKETe0Wh40DqUo6MaTBO%2F14b%2BkmetkL%2FUJZz%2F2iYLWSS1%2B00hzljjenB%2Ffp75Ug4UD3ZY%2FrorQ97oam7xV9hnO3UF0UlExkS8r5dTtjeHx9JisEYBxY%2BrjfgS06TfTi5O4pK28NmkUd7fTbUam1Y69HD7fIdaQ0Mzg5gLsUdMVl7dC92BlUiJFv7%2BXp0WgQDp%2FjKMekeN2oJP2rwdYzXm%2F2b%2Bah8aV6qyHcxIPQ7agQaYof7UuTSzjybo4NMccjam8MAXGrkisdfPMCUEi8OOYEI18rN5Q%2FGdXNdgHChrazI6ncpNXe%2BuhRZNL6x6CHn%2Bwphj54UskTDNmcF05NZ9iktDIqp%2FiSFkAtrTToww%2FdDVvgY6pgEK%2FfLdBFqIpaae2p0KXSlzYBxN6EbA91sAedVv%2BOdSaZSmKEfV1pUteOXfybjtOiA3Gb1GOj7QTrUO%2BUocSMh5pzXldmceuzlAXr3bzs22w8ZoK3PO8jojfhNxXAEZ260zoLhUdu861XR426wr7w%2BpJTPFw0mVZx9nWt9DPj%2BLNndnvParMdD%2BEBcg3QhUnVTEnn4pxdCHNkGHpXtCMTRV6rSspsNH&X-Amz-Signature=c79205f65f22236497626d8ac78014a0cdec65a4dca44b7d0290ebb6859a50c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP5OBVG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBR7HxUU5RTojtaTPI0G0UMo1Kc2burohSTyn109W%2BmAiAOgFjhZy7mUA0r96BoQG2IGWIMyjYFQlAwN3nXLUpUnSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCqZ4xvSx1GnV9AWNKtwD8iejQko7TTnuG1u1FKBNzahETu%2BOxmAPYSyFM3LLZ%2BA6dJZcbRsudhHUZmdoyOwlITUx7L2watHzY%2BXSFPCYrFfs9er%2BS%2BiUftTRrCNrVdGezvEmcnzi8ZYbiYcckIYLMWD3ZPzwRsu15w%2BT3hZlJlb9iS3jggeyH3qh2eE%2FM%2BeluYzR3KUcs0F6w79oO3Q8VrWrKzViRF5%2Bgi1BEWKcdjU47s8FUdmDKMdL3RYrv%2FfN4UxcEvacNT2kK%2BeW%2FnSrzoNE6evPCI0vEbgVrcMUKETe0Wh40DqUo6MaTBO%2F14b%2BkmetkL%2FUJZz%2F2iYLWSS1%2B00hzljjenB%2Ffp75Ug4UD3ZY%2FrorQ97oam7xV9hnO3UF0UlExkS8r5dTtjeHx9JisEYBxY%2BrjfgS06TfTi5O4pK28NmkUd7fTbUam1Y69HD7fIdaQ0Mzg5gLsUdMVl7dC92BlUiJFv7%2BXp0WgQDp%2FjKMekeN2oJP2rwdYzXm%2F2b%2Bah8aV6qyHcxIPQ7agQaYof7UuTSzjybo4NMccjam8MAXGrkisdfPMCUEi8OOYEI18rN5Q%2FGdXNdgHChrazI6ncpNXe%2BuhRZNL6x6CHn%2Bwphj54UskTDNmcF05NZ9iktDIqp%2FiSFkAtrTToww%2FdDVvgY6pgEK%2FfLdBFqIpaae2p0KXSlzYBxN6EbA91sAedVv%2BOdSaZSmKEfV1pUteOXfybjtOiA3Gb1GOj7QTrUO%2BUocSMh5pzXldmceuzlAXr3bzs22w8ZoK3PO8jojfhNxXAEZ260zoLhUdu861XR426wr7w%2BpJTPFw0mVZx9nWt9DPj%2BLNndnvParMdD%2BEBcg3QhUnVTEnn4pxdCHNkGHpXtCMTRV6rSspsNH&X-Amz-Signature=038ae7896ca29b12de6abca9d542f2772595c35eeb1f33320ca61445af766d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP5OBVG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBR7HxUU5RTojtaTPI0G0UMo1Kc2burohSTyn109W%2BmAiAOgFjhZy7mUA0r96BoQG2IGWIMyjYFQlAwN3nXLUpUnSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCqZ4xvSx1GnV9AWNKtwD8iejQko7TTnuG1u1FKBNzahETu%2BOxmAPYSyFM3LLZ%2BA6dJZcbRsudhHUZmdoyOwlITUx7L2watHzY%2BXSFPCYrFfs9er%2BS%2BiUftTRrCNrVdGezvEmcnzi8ZYbiYcckIYLMWD3ZPzwRsu15w%2BT3hZlJlb9iS3jggeyH3qh2eE%2FM%2BeluYzR3KUcs0F6w79oO3Q8VrWrKzViRF5%2Bgi1BEWKcdjU47s8FUdmDKMdL3RYrv%2FfN4UxcEvacNT2kK%2BeW%2FnSrzoNE6evPCI0vEbgVrcMUKETe0Wh40DqUo6MaTBO%2F14b%2BkmetkL%2FUJZz%2F2iYLWSS1%2B00hzljjenB%2Ffp75Ug4UD3ZY%2FrorQ97oam7xV9hnO3UF0UlExkS8r5dTtjeHx9JisEYBxY%2BrjfgS06TfTi5O4pK28NmkUd7fTbUam1Y69HD7fIdaQ0Mzg5gLsUdMVl7dC92BlUiJFv7%2BXp0WgQDp%2FjKMekeN2oJP2rwdYzXm%2F2b%2Bah8aV6qyHcxIPQ7agQaYof7UuTSzjybo4NMccjam8MAXGrkisdfPMCUEi8OOYEI18rN5Q%2FGdXNdgHChrazI6ncpNXe%2BuhRZNL6x6CHn%2Bwphj54UskTDNmcF05NZ9iktDIqp%2FiSFkAtrTToww%2FdDVvgY6pgEK%2FfLdBFqIpaae2p0KXSlzYBxN6EbA91sAedVv%2BOdSaZSmKEfV1pUteOXfybjtOiA3Gb1GOj7QTrUO%2BUocSMh5pzXldmceuzlAXr3bzs22w8ZoK3PO8jojfhNxXAEZ260zoLhUdu861XR426wr7w%2BpJTPFw0mVZx9nWt9DPj%2BLNndnvParMdD%2BEBcg3QhUnVTEnn4pxdCHNkGHpXtCMTRV6rSspsNH&X-Amz-Signature=6ec23e6434a4c3419f6bf18d8e0ea06a8af8da946e1d4cce64a17df1f6f83b69&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP5OBVG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBR7HxUU5RTojtaTPI0G0UMo1Kc2burohSTyn109W%2BmAiAOgFjhZy7mUA0r96BoQG2IGWIMyjYFQlAwN3nXLUpUnSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCqZ4xvSx1GnV9AWNKtwD8iejQko7TTnuG1u1FKBNzahETu%2BOxmAPYSyFM3LLZ%2BA6dJZcbRsudhHUZmdoyOwlITUx7L2watHzY%2BXSFPCYrFfs9er%2BS%2BiUftTRrCNrVdGezvEmcnzi8ZYbiYcckIYLMWD3ZPzwRsu15w%2BT3hZlJlb9iS3jggeyH3qh2eE%2FM%2BeluYzR3KUcs0F6w79oO3Q8VrWrKzViRF5%2Bgi1BEWKcdjU47s8FUdmDKMdL3RYrv%2FfN4UxcEvacNT2kK%2BeW%2FnSrzoNE6evPCI0vEbgVrcMUKETe0Wh40DqUo6MaTBO%2F14b%2BkmetkL%2FUJZz%2F2iYLWSS1%2B00hzljjenB%2Ffp75Ug4UD3ZY%2FrorQ97oam7xV9hnO3UF0UlExkS8r5dTtjeHx9JisEYBxY%2BrjfgS06TfTi5O4pK28NmkUd7fTbUam1Y69HD7fIdaQ0Mzg5gLsUdMVl7dC92BlUiJFv7%2BXp0WgQDp%2FjKMekeN2oJP2rwdYzXm%2F2b%2Bah8aV6qyHcxIPQ7agQaYof7UuTSzjybo4NMccjam8MAXGrkisdfPMCUEi8OOYEI18rN5Q%2FGdXNdgHChrazI6ncpNXe%2BuhRZNL6x6CHn%2Bwphj54UskTDNmcF05NZ9iktDIqp%2FiSFkAtrTToww%2FdDVvgY6pgEK%2FfLdBFqIpaae2p0KXSlzYBxN6EbA91sAedVv%2BOdSaZSmKEfV1pUteOXfybjtOiA3Gb1GOj7QTrUO%2BUocSMh5pzXldmceuzlAXr3bzs22w8ZoK3PO8jojfhNxXAEZ260zoLhUdu861XR426wr7w%2BpJTPFw0mVZx9nWt9DPj%2BLNndnvParMdD%2BEBcg3QhUnVTEnn4pxdCHNkGHpXtCMTRV6rSspsNH&X-Amz-Signature=2965c192168c19a6100c5a8f1035ecd20846e7e6b3d65b5284c00d3532181ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP5OBVG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBR7HxUU5RTojtaTPI0G0UMo1Kc2burohSTyn109W%2BmAiAOgFjhZy7mUA0r96BoQG2IGWIMyjYFQlAwN3nXLUpUnSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCqZ4xvSx1GnV9AWNKtwD8iejQko7TTnuG1u1FKBNzahETu%2BOxmAPYSyFM3LLZ%2BA6dJZcbRsudhHUZmdoyOwlITUx7L2watHzY%2BXSFPCYrFfs9er%2BS%2BiUftTRrCNrVdGezvEmcnzi8ZYbiYcckIYLMWD3ZPzwRsu15w%2BT3hZlJlb9iS3jggeyH3qh2eE%2FM%2BeluYzR3KUcs0F6w79oO3Q8VrWrKzViRF5%2Bgi1BEWKcdjU47s8FUdmDKMdL3RYrv%2FfN4UxcEvacNT2kK%2BeW%2FnSrzoNE6evPCI0vEbgVrcMUKETe0Wh40DqUo6MaTBO%2F14b%2BkmetkL%2FUJZz%2F2iYLWSS1%2B00hzljjenB%2Ffp75Ug4UD3ZY%2FrorQ97oam7xV9hnO3UF0UlExkS8r5dTtjeHx9JisEYBxY%2BrjfgS06TfTi5O4pK28NmkUd7fTbUam1Y69HD7fIdaQ0Mzg5gLsUdMVl7dC92BlUiJFv7%2BXp0WgQDp%2FjKMekeN2oJP2rwdYzXm%2F2b%2Bah8aV6qyHcxIPQ7agQaYof7UuTSzjybo4NMccjam8MAXGrkisdfPMCUEi8OOYEI18rN5Q%2FGdXNdgHChrazI6ncpNXe%2BuhRZNL6x6CHn%2Bwphj54UskTDNmcF05NZ9iktDIqp%2FiSFkAtrTToww%2FdDVvgY6pgEK%2FfLdBFqIpaae2p0KXSlzYBxN6EbA91sAedVv%2BOdSaZSmKEfV1pUteOXfybjtOiA3Gb1GOj7QTrUO%2BUocSMh5pzXldmceuzlAXr3bzs22w8ZoK3PO8jojfhNxXAEZ260zoLhUdu861XR426wr7w%2BpJTPFw0mVZx9nWt9DPj%2BLNndnvParMdD%2BEBcg3QhUnVTEnn4pxdCHNkGHpXtCMTRV6rSspsNH&X-Amz-Signature=0a03172bbcac8b75200c56667f9eeb4931f1e3ac0266e6c4b3d26804fec0f2e2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJP5OBVG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBR7HxUU5RTojtaTPI0G0UMo1Kc2burohSTyn109W%2BmAiAOgFjhZy7mUA0r96BoQG2IGWIMyjYFQlAwN3nXLUpUnSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCqZ4xvSx1GnV9AWNKtwD8iejQko7TTnuG1u1FKBNzahETu%2BOxmAPYSyFM3LLZ%2BA6dJZcbRsudhHUZmdoyOwlITUx7L2watHzY%2BXSFPCYrFfs9er%2BS%2BiUftTRrCNrVdGezvEmcnzi8ZYbiYcckIYLMWD3ZPzwRsu15w%2BT3hZlJlb9iS3jggeyH3qh2eE%2FM%2BeluYzR3KUcs0F6w79oO3Q8VrWrKzViRF5%2Bgi1BEWKcdjU47s8FUdmDKMdL3RYrv%2FfN4UxcEvacNT2kK%2BeW%2FnSrzoNE6evPCI0vEbgVrcMUKETe0Wh40DqUo6MaTBO%2F14b%2BkmetkL%2FUJZz%2F2iYLWSS1%2B00hzljjenB%2Ffp75Ug4UD3ZY%2FrorQ97oam7xV9hnO3UF0UlExkS8r5dTtjeHx9JisEYBxY%2BrjfgS06TfTi5O4pK28NmkUd7fTbUam1Y69HD7fIdaQ0Mzg5gLsUdMVl7dC92BlUiJFv7%2BXp0WgQDp%2FjKMekeN2oJP2rwdYzXm%2F2b%2Bah8aV6qyHcxIPQ7agQaYof7UuTSzjybo4NMccjam8MAXGrkisdfPMCUEi8OOYEI18rN5Q%2FGdXNdgHChrazI6ncpNXe%2BuhRZNL6x6CHn%2Bwphj54UskTDNmcF05NZ9iktDIqp%2FiSFkAtrTToww%2FdDVvgY6pgEK%2FfLdBFqIpaae2p0KXSlzYBxN6EbA91sAedVv%2BOdSaZSmKEfV1pUteOXfybjtOiA3Gb1GOj7QTrUO%2BUocSMh5pzXldmceuzlAXr3bzs22w8ZoK3PO8jojfhNxXAEZ260zoLhUdu861XR426wr7w%2BpJTPFw0mVZx9nWt9DPj%2BLNndnvParMdD%2BEBcg3QhUnVTEnn4pxdCHNkGHpXtCMTRV6rSspsNH&X-Amz-Signature=d955f9b80a99c0b2843755287fc48d0cb97267cee8b4317d9c6c6aa8e0864796&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
