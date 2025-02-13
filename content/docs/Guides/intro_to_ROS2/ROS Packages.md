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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFI34ZFL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT0YrSxNf%2BLM9B4e%2FChtpHY9KCbii4QdmCc6W90rwEXwIhAOttF3s1nUlEn0iVsTAvePFFF828vPd17akH9tgSVD5WKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDDtkKF%2BtU93XHGjEq3ANYMMf%2FzvcUBxB3PepC95sUO3uRM8L%2FUwMhuOvuZUvh6srcvwNNtaPNJ7HZrFbY%2F%2FlBK5js67H6seCykc6s6pImb5Fa3NMHqOc3MdhEeMnueLaIcxw%2B065VMfAOFom9wCsD9X5wBICRjKGbSPjfSpenYlTdVPu622xIAogl7FTCLsA84KEiA3h4ulKiqVBUt7Dyhz0VW%2Fnhmj7GkDDVTFVEFKYwQjq8%2B75Jku5n2c0Dq1qRmzNUbQMHeMNNu0Iys8FG5GBenlv2bId2pxJIxjYqK%2FHecZYboj9GRrpOaZeC%2FzXlgT33hKwrDWHvjQDNq8fzBFVBVku5jBlscxPM4v97eWvk7DKcItBqVRTj3fK2igGSB%2FklUsQmaOe6QJ5uvUEA9LJGhpZ0Y3%2BBBE24UH5%2FO7azaNxoYePtbLU%2BDSF49ympQ9qGuiPrDpGh4T0Ba%2Fc0WLiVxdmycjcD8c1VDKP4lvxraZP0UV7FltnSAyTNXCp3Ms60CGO36c092ap3GJPcpLP3%2B2CJDn%2Br9MkHkH4QlI%2FLTZmhE9QGPDKx2LF2d2o01ddG8%2Bqb%2Bng78nMvALXardVSEicnG80tNaf7gJKH6gCgBKaUmUynhLzN%2BxGO%2Fs91VFdI3nO6Rt8ZSTDMmLW9BjqkAZ%2F2%2B6EcSlAh4jPwquDfUYXOliwpkqgRS00xT13IJSITb%2FKv%2F%2Fe7c67kUuZOGDV%2F6Fl5%2FUwsjHbdJCkljCE12FCbmr%2FMYQjJNb%2Fq%2FH19Lwju3TVQKe%2FNgsfm0ihRxSsE7%2B367cR7BqQXv%2F%2FndmIG4cxN6Z%2FydtHKJprTbP66saicqeDVK33u4b0t3qteNiXDzWonpLQu8KUzKrxu3ShExwTLkW9q&X-Amz-Signature=3e554f0db057cbb5ae3f723fab95d987725ec542327b8daca4e19dcda8fce4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFI34ZFL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT0YrSxNf%2BLM9B4e%2FChtpHY9KCbii4QdmCc6W90rwEXwIhAOttF3s1nUlEn0iVsTAvePFFF828vPd17akH9tgSVD5WKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDDtkKF%2BtU93XHGjEq3ANYMMf%2FzvcUBxB3PepC95sUO3uRM8L%2FUwMhuOvuZUvh6srcvwNNtaPNJ7HZrFbY%2F%2FlBK5js67H6seCykc6s6pImb5Fa3NMHqOc3MdhEeMnueLaIcxw%2B065VMfAOFom9wCsD9X5wBICRjKGbSPjfSpenYlTdVPu622xIAogl7FTCLsA84KEiA3h4ulKiqVBUt7Dyhz0VW%2Fnhmj7GkDDVTFVEFKYwQjq8%2B75Jku5n2c0Dq1qRmzNUbQMHeMNNu0Iys8FG5GBenlv2bId2pxJIxjYqK%2FHecZYboj9GRrpOaZeC%2FzXlgT33hKwrDWHvjQDNq8fzBFVBVku5jBlscxPM4v97eWvk7DKcItBqVRTj3fK2igGSB%2FklUsQmaOe6QJ5uvUEA9LJGhpZ0Y3%2BBBE24UH5%2FO7azaNxoYePtbLU%2BDSF49ympQ9qGuiPrDpGh4T0Ba%2Fc0WLiVxdmycjcD8c1VDKP4lvxraZP0UV7FltnSAyTNXCp3Ms60CGO36c092ap3GJPcpLP3%2B2CJDn%2Br9MkHkH4QlI%2FLTZmhE9QGPDKx2LF2d2o01ddG8%2Bqb%2Bng78nMvALXardVSEicnG80tNaf7gJKH6gCgBKaUmUynhLzN%2BxGO%2Fs91VFdI3nO6Rt8ZSTDMmLW9BjqkAZ%2F2%2B6EcSlAh4jPwquDfUYXOliwpkqgRS00xT13IJSITb%2FKv%2F%2Fe7c67kUuZOGDV%2F6Fl5%2FUwsjHbdJCkljCE12FCbmr%2FMYQjJNb%2Fq%2FH19Lwju3TVQKe%2FNgsfm0ihRxSsE7%2B367cR7BqQXv%2F%2FndmIG4cxN6Z%2FydtHKJprTbP66saicqeDVK33u4b0t3qteNiXDzWonpLQu8KUzKrxu3ShExwTLkW9q&X-Amz-Signature=f416bdb4a7893096b2682da27fefe3d3d1960fec3d32abdd3e022bfdabf324f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFI34ZFL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT0YrSxNf%2BLM9B4e%2FChtpHY9KCbii4QdmCc6W90rwEXwIhAOttF3s1nUlEn0iVsTAvePFFF828vPd17akH9tgSVD5WKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDDtkKF%2BtU93XHGjEq3ANYMMf%2FzvcUBxB3PepC95sUO3uRM8L%2FUwMhuOvuZUvh6srcvwNNtaPNJ7HZrFbY%2F%2FlBK5js67H6seCykc6s6pImb5Fa3NMHqOc3MdhEeMnueLaIcxw%2B065VMfAOFom9wCsD9X5wBICRjKGbSPjfSpenYlTdVPu622xIAogl7FTCLsA84KEiA3h4ulKiqVBUt7Dyhz0VW%2Fnhmj7GkDDVTFVEFKYwQjq8%2B75Jku5n2c0Dq1qRmzNUbQMHeMNNu0Iys8FG5GBenlv2bId2pxJIxjYqK%2FHecZYboj9GRrpOaZeC%2FzXlgT33hKwrDWHvjQDNq8fzBFVBVku5jBlscxPM4v97eWvk7DKcItBqVRTj3fK2igGSB%2FklUsQmaOe6QJ5uvUEA9LJGhpZ0Y3%2BBBE24UH5%2FO7azaNxoYePtbLU%2BDSF49ympQ9qGuiPrDpGh4T0Ba%2Fc0WLiVxdmycjcD8c1VDKP4lvxraZP0UV7FltnSAyTNXCp3Ms60CGO36c092ap3GJPcpLP3%2B2CJDn%2Br9MkHkH4QlI%2FLTZmhE9QGPDKx2LF2d2o01ddG8%2Bqb%2Bng78nMvALXardVSEicnG80tNaf7gJKH6gCgBKaUmUynhLzN%2BxGO%2Fs91VFdI3nO6Rt8ZSTDMmLW9BjqkAZ%2F2%2B6EcSlAh4jPwquDfUYXOliwpkqgRS00xT13IJSITb%2FKv%2F%2Fe7c67kUuZOGDV%2F6Fl5%2FUwsjHbdJCkljCE12FCbmr%2FMYQjJNb%2Fq%2FH19Lwju3TVQKe%2FNgsfm0ihRxSsE7%2B367cR7BqQXv%2F%2FndmIG4cxN6Z%2FydtHKJprTbP66saicqeDVK33u4b0t3qteNiXDzWonpLQu8KUzKrxu3ShExwTLkW9q&X-Amz-Signature=0be3b7fdfec3427933d4edcb4d63df61a3b722c3275597dada4a19b305448ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFI34ZFL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT0YrSxNf%2BLM9B4e%2FChtpHY9KCbii4QdmCc6W90rwEXwIhAOttF3s1nUlEn0iVsTAvePFFF828vPd17akH9tgSVD5WKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDDtkKF%2BtU93XHGjEq3ANYMMf%2FzvcUBxB3PepC95sUO3uRM8L%2FUwMhuOvuZUvh6srcvwNNtaPNJ7HZrFbY%2F%2FlBK5js67H6seCykc6s6pImb5Fa3NMHqOc3MdhEeMnueLaIcxw%2B065VMfAOFom9wCsD9X5wBICRjKGbSPjfSpenYlTdVPu622xIAogl7FTCLsA84KEiA3h4ulKiqVBUt7Dyhz0VW%2Fnhmj7GkDDVTFVEFKYwQjq8%2B75Jku5n2c0Dq1qRmzNUbQMHeMNNu0Iys8FG5GBenlv2bId2pxJIxjYqK%2FHecZYboj9GRrpOaZeC%2FzXlgT33hKwrDWHvjQDNq8fzBFVBVku5jBlscxPM4v97eWvk7DKcItBqVRTj3fK2igGSB%2FklUsQmaOe6QJ5uvUEA9LJGhpZ0Y3%2BBBE24UH5%2FO7azaNxoYePtbLU%2BDSF49ympQ9qGuiPrDpGh4T0Ba%2Fc0WLiVxdmycjcD8c1VDKP4lvxraZP0UV7FltnSAyTNXCp3Ms60CGO36c092ap3GJPcpLP3%2B2CJDn%2Br9MkHkH4QlI%2FLTZmhE9QGPDKx2LF2d2o01ddG8%2Bqb%2Bng78nMvALXardVSEicnG80tNaf7gJKH6gCgBKaUmUynhLzN%2BxGO%2Fs91VFdI3nO6Rt8ZSTDMmLW9BjqkAZ%2F2%2B6EcSlAh4jPwquDfUYXOliwpkqgRS00xT13IJSITb%2FKv%2F%2Fe7c67kUuZOGDV%2F6Fl5%2FUwsjHbdJCkljCE12FCbmr%2FMYQjJNb%2Fq%2FH19Lwju3TVQKe%2FNgsfm0ihRxSsE7%2B367cR7BqQXv%2F%2FndmIG4cxN6Z%2FydtHKJprTbP66saicqeDVK33u4b0t3qteNiXDzWonpLQu8KUzKrxu3ShExwTLkW9q&X-Amz-Signature=52b3db1f9bb7977730467f563cfa4dbaed6909654409395a4c3b4f3e30051edc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFI34ZFL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT0YrSxNf%2BLM9B4e%2FChtpHY9KCbii4QdmCc6W90rwEXwIhAOttF3s1nUlEn0iVsTAvePFFF828vPd17akH9tgSVD5WKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDDtkKF%2BtU93XHGjEq3ANYMMf%2FzvcUBxB3PepC95sUO3uRM8L%2FUwMhuOvuZUvh6srcvwNNtaPNJ7HZrFbY%2F%2FlBK5js67H6seCykc6s6pImb5Fa3NMHqOc3MdhEeMnueLaIcxw%2B065VMfAOFom9wCsD9X5wBICRjKGbSPjfSpenYlTdVPu622xIAogl7FTCLsA84KEiA3h4ulKiqVBUt7Dyhz0VW%2Fnhmj7GkDDVTFVEFKYwQjq8%2B75Jku5n2c0Dq1qRmzNUbQMHeMNNu0Iys8FG5GBenlv2bId2pxJIxjYqK%2FHecZYboj9GRrpOaZeC%2FzXlgT33hKwrDWHvjQDNq8fzBFVBVku5jBlscxPM4v97eWvk7DKcItBqVRTj3fK2igGSB%2FklUsQmaOe6QJ5uvUEA9LJGhpZ0Y3%2BBBE24UH5%2FO7azaNxoYePtbLU%2BDSF49ympQ9qGuiPrDpGh4T0Ba%2Fc0WLiVxdmycjcD8c1VDKP4lvxraZP0UV7FltnSAyTNXCp3Ms60CGO36c092ap3GJPcpLP3%2B2CJDn%2Br9MkHkH4QlI%2FLTZmhE9QGPDKx2LF2d2o01ddG8%2Bqb%2Bng78nMvALXardVSEicnG80tNaf7gJKH6gCgBKaUmUynhLzN%2BxGO%2Fs91VFdI3nO6Rt8ZSTDMmLW9BjqkAZ%2F2%2B6EcSlAh4jPwquDfUYXOliwpkqgRS00xT13IJSITb%2FKv%2F%2Fe7c67kUuZOGDV%2F6Fl5%2FUwsjHbdJCkljCE12FCbmr%2FMYQjJNb%2Fq%2FH19Lwju3TVQKe%2FNgsfm0ihRxSsE7%2B367cR7BqQXv%2F%2FndmIG4cxN6Z%2FydtHKJprTbP66saicqeDVK33u4b0t3qteNiXDzWonpLQu8KUzKrxu3ShExwTLkW9q&X-Amz-Signature=c3b5f10b446ac4bd5b62e5a92def824c9af5dbbd45ec881474470c437dc75f17&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFI34ZFL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT0YrSxNf%2BLM9B4e%2FChtpHY9KCbii4QdmCc6W90rwEXwIhAOttF3s1nUlEn0iVsTAvePFFF828vPd17akH9tgSVD5WKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDDtkKF%2BtU93XHGjEq3ANYMMf%2FzvcUBxB3PepC95sUO3uRM8L%2FUwMhuOvuZUvh6srcvwNNtaPNJ7HZrFbY%2F%2FlBK5js67H6seCykc6s6pImb5Fa3NMHqOc3MdhEeMnueLaIcxw%2B065VMfAOFom9wCsD9X5wBICRjKGbSPjfSpenYlTdVPu622xIAogl7FTCLsA84KEiA3h4ulKiqVBUt7Dyhz0VW%2Fnhmj7GkDDVTFVEFKYwQjq8%2B75Jku5n2c0Dq1qRmzNUbQMHeMNNu0Iys8FG5GBenlv2bId2pxJIxjYqK%2FHecZYboj9GRrpOaZeC%2FzXlgT33hKwrDWHvjQDNq8fzBFVBVku5jBlscxPM4v97eWvk7DKcItBqVRTj3fK2igGSB%2FklUsQmaOe6QJ5uvUEA9LJGhpZ0Y3%2BBBE24UH5%2FO7azaNxoYePtbLU%2BDSF49ympQ9qGuiPrDpGh4T0Ba%2Fc0WLiVxdmycjcD8c1VDKP4lvxraZP0UV7FltnSAyTNXCp3Ms60CGO36c092ap3GJPcpLP3%2B2CJDn%2Br9MkHkH4QlI%2FLTZmhE9QGPDKx2LF2d2o01ddG8%2Bqb%2Bng78nMvALXardVSEicnG80tNaf7gJKH6gCgBKaUmUynhLzN%2BxGO%2Fs91VFdI3nO6Rt8ZSTDMmLW9BjqkAZ%2F2%2B6EcSlAh4jPwquDfUYXOliwpkqgRS00xT13IJSITb%2FKv%2F%2Fe7c67kUuZOGDV%2F6Fl5%2FUwsjHbdJCkljCE12FCbmr%2FMYQjJNb%2Fq%2FH19Lwju3TVQKe%2FNgsfm0ihRxSsE7%2B367cR7BqQXv%2F%2FndmIG4cxN6Z%2FydtHKJprTbP66saicqeDVK33u4b0t3qteNiXDzWonpLQu8KUzKrxu3ShExwTLkW9q&X-Amz-Signature=0a1d462c82c2f72b7e5c27cae53590f181858abf5bae7987731fb5c31a544529&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFI34ZFL%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT0YrSxNf%2BLM9B4e%2FChtpHY9KCbii4QdmCc6W90rwEXwIhAOttF3s1nUlEn0iVsTAvePFFF828vPd17akH9tgSVD5WKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDDtkKF%2BtU93XHGjEq3ANYMMf%2FzvcUBxB3PepC95sUO3uRM8L%2FUwMhuOvuZUvh6srcvwNNtaPNJ7HZrFbY%2F%2FlBK5js67H6seCykc6s6pImb5Fa3NMHqOc3MdhEeMnueLaIcxw%2B065VMfAOFom9wCsD9X5wBICRjKGbSPjfSpenYlTdVPu622xIAogl7FTCLsA84KEiA3h4ulKiqVBUt7Dyhz0VW%2Fnhmj7GkDDVTFVEFKYwQjq8%2B75Jku5n2c0Dq1qRmzNUbQMHeMNNu0Iys8FG5GBenlv2bId2pxJIxjYqK%2FHecZYboj9GRrpOaZeC%2FzXlgT33hKwrDWHvjQDNq8fzBFVBVku5jBlscxPM4v97eWvk7DKcItBqVRTj3fK2igGSB%2FklUsQmaOe6QJ5uvUEA9LJGhpZ0Y3%2BBBE24UH5%2FO7azaNxoYePtbLU%2BDSF49ympQ9qGuiPrDpGh4T0Ba%2Fc0WLiVxdmycjcD8c1VDKP4lvxraZP0UV7FltnSAyTNXCp3Ms60CGO36c092ap3GJPcpLP3%2B2CJDn%2Br9MkHkH4QlI%2FLTZmhE9QGPDKx2LF2d2o01ddG8%2Bqb%2Bng78nMvALXardVSEicnG80tNaf7gJKH6gCgBKaUmUynhLzN%2BxGO%2Fs91VFdI3nO6Rt8ZSTDMmLW9BjqkAZ%2F2%2B6EcSlAh4jPwquDfUYXOliwpkqgRS00xT13IJSITb%2FKv%2F%2Fe7c67kUuZOGDV%2F6Fl5%2FUwsjHbdJCkljCE12FCbmr%2FMYQjJNb%2Fq%2FH19Lwju3TVQKe%2FNgsfm0ihRxSsE7%2B367cR7BqQXv%2F%2FndmIG4cxN6Z%2FydtHKJprTbP66saicqeDVK33u4b0t3qteNiXDzWonpLQu8KUzKrxu3ShExwTLkW9q&X-Amz-Signature=ebc9054ca2da277e9b9f75e1fb4d096c426e83b8c13e33630d2d7d1b1a28db29&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
