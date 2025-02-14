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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZUBLGL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCidaCkyhhH1%2F1l6VxAZcin6AgzEFDZ4tISAIddC6iOPAIgeW%2Bf%2BIC%2FP8Z4Ty8vr2mN0iQInjg4x3AuP%2BuosTwNztwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEyhKKpTIKIzKec95SrcAyBsgnu9qxrDo504fZ5WHvb2QihPztxYllrtMPOn3luj1zu8jJEXn4GavWdIpfNrsP2F5RrWRqCPag4cboZc8hAvVLD%2FnZEFsMCZLv7KwsMgID%2BqgTNuW2tHC%2Fx14IiMps57LjjOOYthCOqmuHHX2QOqrW9E883Oc3bOGAacu6e1m0VUL%2FNCUZeJt4HTI67nLO36cAS1F%2FxQSfiamInYxNH3rdKZ4PPcg4ZhPn8OKIVsgRYL6n8n%2FQVGrQXuJr0eFStTAnoH3SK5fMXKigysPS7v9BTU9lNAeS6eVxNOJb7RsgqfopTHsvhYm3KHiDqkG6Iw1xHexfUSB%2BG57E8rCcXdfDXqworkubzv8pCDLFIfKDQKPPlAtZ%2FGc338XQKUvEhSj%2BMwWnikupMBt92EQqh%2FvcxM57oeZkzIorQJZF8JyXiuchVi71utYXaW6EPTjkAO13H0MyanqY0N6ivzRKVlizw4FTQ%2FTkRYZMUSkx7YlVIXY7ug0KWgrmzXa8EGjhAqyqDbCHuKKR0kFGJ5xiRDjJ%2BBrhVGAxfFeGV5Hx1PwrDziHVD7EWo9JvjbtpEK8PRoeuApnSYV81DGjbCfiF%2FO8tw8CEcLl5crACVFViBZe%2BKWmeQC2QCuoWXMJbqu70GOqUB%2Bbk%2BHUnoMeKUc5kze%2FISEgWCKX5CSl1nM8p2nypUt11jEVXlA4rniwlOKmoiIcnald1rXehJvKSQkOXSh%2BfaH4Az6zh%2BM0XvtYwzKvRDCeDPSXqpSlQZINIFOacUVMTawYxnqI0nzX%2B5cadYHNptKzwWrc4GiiHBiVtk9%2BSeeypNsZpjNzTj8pL2%2FtnidckLCTsZbWdiRAe2GbXEaXklLrclJiOM&X-Amz-Signature=7c975551c525d2e786a2b7bc2db15b1988d74c082393bafbbd02ea49edc7b9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZUBLGL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCidaCkyhhH1%2F1l6VxAZcin6AgzEFDZ4tISAIddC6iOPAIgeW%2Bf%2BIC%2FP8Z4Ty8vr2mN0iQInjg4x3AuP%2BuosTwNztwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEyhKKpTIKIzKec95SrcAyBsgnu9qxrDo504fZ5WHvb2QihPztxYllrtMPOn3luj1zu8jJEXn4GavWdIpfNrsP2F5RrWRqCPag4cboZc8hAvVLD%2FnZEFsMCZLv7KwsMgID%2BqgTNuW2tHC%2Fx14IiMps57LjjOOYthCOqmuHHX2QOqrW9E883Oc3bOGAacu6e1m0VUL%2FNCUZeJt4HTI67nLO36cAS1F%2FxQSfiamInYxNH3rdKZ4PPcg4ZhPn8OKIVsgRYL6n8n%2FQVGrQXuJr0eFStTAnoH3SK5fMXKigysPS7v9BTU9lNAeS6eVxNOJb7RsgqfopTHsvhYm3KHiDqkG6Iw1xHexfUSB%2BG57E8rCcXdfDXqworkubzv8pCDLFIfKDQKPPlAtZ%2FGc338XQKUvEhSj%2BMwWnikupMBt92EQqh%2FvcxM57oeZkzIorQJZF8JyXiuchVi71utYXaW6EPTjkAO13H0MyanqY0N6ivzRKVlizw4FTQ%2FTkRYZMUSkx7YlVIXY7ug0KWgrmzXa8EGjhAqyqDbCHuKKR0kFGJ5xiRDjJ%2BBrhVGAxfFeGV5Hx1PwrDziHVD7EWo9JvjbtpEK8PRoeuApnSYV81DGjbCfiF%2FO8tw8CEcLl5crACVFViBZe%2BKWmeQC2QCuoWXMJbqu70GOqUB%2Bbk%2BHUnoMeKUc5kze%2FISEgWCKX5CSl1nM8p2nypUt11jEVXlA4rniwlOKmoiIcnald1rXehJvKSQkOXSh%2BfaH4Az6zh%2BM0XvtYwzKvRDCeDPSXqpSlQZINIFOacUVMTawYxnqI0nzX%2B5cadYHNptKzwWrc4GiiHBiVtk9%2BSeeypNsZpjNzTj8pL2%2FtnidckLCTsZbWdiRAe2GbXEaXklLrclJiOM&X-Amz-Signature=530df39760016f9a1a92b4649271aeec96831e8e53f83b1cff62f33108685a76&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZUBLGL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCidaCkyhhH1%2F1l6VxAZcin6AgzEFDZ4tISAIddC6iOPAIgeW%2Bf%2BIC%2FP8Z4Ty8vr2mN0iQInjg4x3AuP%2BuosTwNztwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEyhKKpTIKIzKec95SrcAyBsgnu9qxrDo504fZ5WHvb2QihPztxYllrtMPOn3luj1zu8jJEXn4GavWdIpfNrsP2F5RrWRqCPag4cboZc8hAvVLD%2FnZEFsMCZLv7KwsMgID%2BqgTNuW2tHC%2Fx14IiMps57LjjOOYthCOqmuHHX2QOqrW9E883Oc3bOGAacu6e1m0VUL%2FNCUZeJt4HTI67nLO36cAS1F%2FxQSfiamInYxNH3rdKZ4PPcg4ZhPn8OKIVsgRYL6n8n%2FQVGrQXuJr0eFStTAnoH3SK5fMXKigysPS7v9BTU9lNAeS6eVxNOJb7RsgqfopTHsvhYm3KHiDqkG6Iw1xHexfUSB%2BG57E8rCcXdfDXqworkubzv8pCDLFIfKDQKPPlAtZ%2FGc338XQKUvEhSj%2BMwWnikupMBt92EQqh%2FvcxM57oeZkzIorQJZF8JyXiuchVi71utYXaW6EPTjkAO13H0MyanqY0N6ivzRKVlizw4FTQ%2FTkRYZMUSkx7YlVIXY7ug0KWgrmzXa8EGjhAqyqDbCHuKKR0kFGJ5xiRDjJ%2BBrhVGAxfFeGV5Hx1PwrDziHVD7EWo9JvjbtpEK8PRoeuApnSYV81DGjbCfiF%2FO8tw8CEcLl5crACVFViBZe%2BKWmeQC2QCuoWXMJbqu70GOqUB%2Bbk%2BHUnoMeKUc5kze%2FISEgWCKX5CSl1nM8p2nypUt11jEVXlA4rniwlOKmoiIcnald1rXehJvKSQkOXSh%2BfaH4Az6zh%2BM0XvtYwzKvRDCeDPSXqpSlQZINIFOacUVMTawYxnqI0nzX%2B5cadYHNptKzwWrc4GiiHBiVtk9%2BSeeypNsZpjNzTj8pL2%2FtnidckLCTsZbWdiRAe2GbXEaXklLrclJiOM&X-Amz-Signature=349255762882642e226c2a54cddd005f9d5cfb922a5bc5e1708ae6dc08966e14&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZUBLGL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCidaCkyhhH1%2F1l6VxAZcin6AgzEFDZ4tISAIddC6iOPAIgeW%2Bf%2BIC%2FP8Z4Ty8vr2mN0iQInjg4x3AuP%2BuosTwNztwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEyhKKpTIKIzKec95SrcAyBsgnu9qxrDo504fZ5WHvb2QihPztxYllrtMPOn3luj1zu8jJEXn4GavWdIpfNrsP2F5RrWRqCPag4cboZc8hAvVLD%2FnZEFsMCZLv7KwsMgID%2BqgTNuW2tHC%2Fx14IiMps57LjjOOYthCOqmuHHX2QOqrW9E883Oc3bOGAacu6e1m0VUL%2FNCUZeJt4HTI67nLO36cAS1F%2FxQSfiamInYxNH3rdKZ4PPcg4ZhPn8OKIVsgRYL6n8n%2FQVGrQXuJr0eFStTAnoH3SK5fMXKigysPS7v9BTU9lNAeS6eVxNOJb7RsgqfopTHsvhYm3KHiDqkG6Iw1xHexfUSB%2BG57E8rCcXdfDXqworkubzv8pCDLFIfKDQKPPlAtZ%2FGc338XQKUvEhSj%2BMwWnikupMBt92EQqh%2FvcxM57oeZkzIorQJZF8JyXiuchVi71utYXaW6EPTjkAO13H0MyanqY0N6ivzRKVlizw4FTQ%2FTkRYZMUSkx7YlVIXY7ug0KWgrmzXa8EGjhAqyqDbCHuKKR0kFGJ5xiRDjJ%2BBrhVGAxfFeGV5Hx1PwrDziHVD7EWo9JvjbtpEK8PRoeuApnSYV81DGjbCfiF%2FO8tw8CEcLl5crACVFViBZe%2BKWmeQC2QCuoWXMJbqu70GOqUB%2Bbk%2BHUnoMeKUc5kze%2FISEgWCKX5CSl1nM8p2nypUt11jEVXlA4rniwlOKmoiIcnald1rXehJvKSQkOXSh%2BfaH4Az6zh%2BM0XvtYwzKvRDCeDPSXqpSlQZINIFOacUVMTawYxnqI0nzX%2B5cadYHNptKzwWrc4GiiHBiVtk9%2BSeeypNsZpjNzTj8pL2%2FtnidckLCTsZbWdiRAe2GbXEaXklLrclJiOM&X-Amz-Signature=762fdf9c5c8867be50b75e170cb23aa2fc3c49565f862202d2b07664d1197cec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZUBLGL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCidaCkyhhH1%2F1l6VxAZcin6AgzEFDZ4tISAIddC6iOPAIgeW%2Bf%2BIC%2FP8Z4Ty8vr2mN0iQInjg4x3AuP%2BuosTwNztwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEyhKKpTIKIzKec95SrcAyBsgnu9qxrDo504fZ5WHvb2QihPztxYllrtMPOn3luj1zu8jJEXn4GavWdIpfNrsP2F5RrWRqCPag4cboZc8hAvVLD%2FnZEFsMCZLv7KwsMgID%2BqgTNuW2tHC%2Fx14IiMps57LjjOOYthCOqmuHHX2QOqrW9E883Oc3bOGAacu6e1m0VUL%2FNCUZeJt4HTI67nLO36cAS1F%2FxQSfiamInYxNH3rdKZ4PPcg4ZhPn8OKIVsgRYL6n8n%2FQVGrQXuJr0eFStTAnoH3SK5fMXKigysPS7v9BTU9lNAeS6eVxNOJb7RsgqfopTHsvhYm3KHiDqkG6Iw1xHexfUSB%2BG57E8rCcXdfDXqworkubzv8pCDLFIfKDQKPPlAtZ%2FGc338XQKUvEhSj%2BMwWnikupMBt92EQqh%2FvcxM57oeZkzIorQJZF8JyXiuchVi71utYXaW6EPTjkAO13H0MyanqY0N6ivzRKVlizw4FTQ%2FTkRYZMUSkx7YlVIXY7ug0KWgrmzXa8EGjhAqyqDbCHuKKR0kFGJ5xiRDjJ%2BBrhVGAxfFeGV5Hx1PwrDziHVD7EWo9JvjbtpEK8PRoeuApnSYV81DGjbCfiF%2FO8tw8CEcLl5crACVFViBZe%2BKWmeQC2QCuoWXMJbqu70GOqUB%2Bbk%2BHUnoMeKUc5kze%2FISEgWCKX5CSl1nM8p2nypUt11jEVXlA4rniwlOKmoiIcnald1rXehJvKSQkOXSh%2BfaH4Az6zh%2BM0XvtYwzKvRDCeDPSXqpSlQZINIFOacUVMTawYxnqI0nzX%2B5cadYHNptKzwWrc4GiiHBiVtk9%2BSeeypNsZpjNzTj8pL2%2FtnidckLCTsZbWdiRAe2GbXEaXklLrclJiOM&X-Amz-Signature=c190cd9880b43d9a3719893a097e91ba0e39e2f326d001e4f29d41233eb1bacb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZUBLGL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCidaCkyhhH1%2F1l6VxAZcin6AgzEFDZ4tISAIddC6iOPAIgeW%2Bf%2BIC%2FP8Z4Ty8vr2mN0iQInjg4x3AuP%2BuosTwNztwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEyhKKpTIKIzKec95SrcAyBsgnu9qxrDo504fZ5WHvb2QihPztxYllrtMPOn3luj1zu8jJEXn4GavWdIpfNrsP2F5RrWRqCPag4cboZc8hAvVLD%2FnZEFsMCZLv7KwsMgID%2BqgTNuW2tHC%2Fx14IiMps57LjjOOYthCOqmuHHX2QOqrW9E883Oc3bOGAacu6e1m0VUL%2FNCUZeJt4HTI67nLO36cAS1F%2FxQSfiamInYxNH3rdKZ4PPcg4ZhPn8OKIVsgRYL6n8n%2FQVGrQXuJr0eFStTAnoH3SK5fMXKigysPS7v9BTU9lNAeS6eVxNOJb7RsgqfopTHsvhYm3KHiDqkG6Iw1xHexfUSB%2BG57E8rCcXdfDXqworkubzv8pCDLFIfKDQKPPlAtZ%2FGc338XQKUvEhSj%2BMwWnikupMBt92EQqh%2FvcxM57oeZkzIorQJZF8JyXiuchVi71utYXaW6EPTjkAO13H0MyanqY0N6ivzRKVlizw4FTQ%2FTkRYZMUSkx7YlVIXY7ug0KWgrmzXa8EGjhAqyqDbCHuKKR0kFGJ5xiRDjJ%2BBrhVGAxfFeGV5Hx1PwrDziHVD7EWo9JvjbtpEK8PRoeuApnSYV81DGjbCfiF%2FO8tw8CEcLl5crACVFViBZe%2BKWmeQC2QCuoWXMJbqu70GOqUB%2Bbk%2BHUnoMeKUc5kze%2FISEgWCKX5CSl1nM8p2nypUt11jEVXlA4rniwlOKmoiIcnald1rXehJvKSQkOXSh%2BfaH4Az6zh%2BM0XvtYwzKvRDCeDPSXqpSlQZINIFOacUVMTawYxnqI0nzX%2B5cadYHNptKzwWrc4GiiHBiVtk9%2BSeeypNsZpjNzTj8pL2%2FtnidckLCTsZbWdiRAe2GbXEaXklLrclJiOM&X-Amz-Signature=0a242ef5afce7ff99dd4c36f4277773d19c69a68b2707af9c41da94aff64e018&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZUBLGL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCidaCkyhhH1%2F1l6VxAZcin6AgzEFDZ4tISAIddC6iOPAIgeW%2Bf%2BIC%2FP8Z4Ty8vr2mN0iQInjg4x3AuP%2BuosTwNztwq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEyhKKpTIKIzKec95SrcAyBsgnu9qxrDo504fZ5WHvb2QihPztxYllrtMPOn3luj1zu8jJEXn4GavWdIpfNrsP2F5RrWRqCPag4cboZc8hAvVLD%2FnZEFsMCZLv7KwsMgID%2BqgTNuW2tHC%2Fx14IiMps57LjjOOYthCOqmuHHX2QOqrW9E883Oc3bOGAacu6e1m0VUL%2FNCUZeJt4HTI67nLO36cAS1F%2FxQSfiamInYxNH3rdKZ4PPcg4ZhPn8OKIVsgRYL6n8n%2FQVGrQXuJr0eFStTAnoH3SK5fMXKigysPS7v9BTU9lNAeS6eVxNOJb7RsgqfopTHsvhYm3KHiDqkG6Iw1xHexfUSB%2BG57E8rCcXdfDXqworkubzv8pCDLFIfKDQKPPlAtZ%2FGc338XQKUvEhSj%2BMwWnikupMBt92EQqh%2FvcxM57oeZkzIorQJZF8JyXiuchVi71utYXaW6EPTjkAO13H0MyanqY0N6ivzRKVlizw4FTQ%2FTkRYZMUSkx7YlVIXY7ug0KWgrmzXa8EGjhAqyqDbCHuKKR0kFGJ5xiRDjJ%2BBrhVGAxfFeGV5Hx1PwrDziHVD7EWo9JvjbtpEK8PRoeuApnSYV81DGjbCfiF%2FO8tw8CEcLl5crACVFViBZe%2BKWmeQC2QCuoWXMJbqu70GOqUB%2Bbk%2BHUnoMeKUc5kze%2FISEgWCKX5CSl1nM8p2nypUt11jEVXlA4rniwlOKmoiIcnald1rXehJvKSQkOXSh%2BfaH4Az6zh%2BM0XvtYwzKvRDCeDPSXqpSlQZINIFOacUVMTawYxnqI0nzX%2B5cadYHNptKzwWrc4GiiHBiVtk9%2BSeeypNsZpjNzTj8pL2%2FtnidckLCTsZbWdiRAe2GbXEaXklLrclJiOM&X-Amz-Signature=03537bbc66909ea67c85927b3a156b1791877548a0efe74e255ea4ef72c510fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
