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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XMBCO6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJKnneC2pzZmFgYlRiZFjG%2FEzIGFBkmSjo4iKpjBNsQIhAM0oodV%2BM38hWlRpSbMpKP0mERVz1OSr2OViR4jSPCsvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwWEJA1kf%2BH9VdLCIMq3AMHzTMWSy%2FRvBoCn0fYgviu7Br%2BuPt8NmzPnIY4pJCSuoxm4X3Q07PQjzCMAm5qVyrwT7SszSKP34LV9ermrZazSnarQXWg%2BPpgsoVQaTJ%2Bh16vJmqM7xmsOLz3D1fSD1f4x%2Be%2FkFPFUcPZP15uGSIO3QjSULZG3pO2YjHxSfoO1quFX9C%2FI39ACdcvrBe2FL4mHcUtbp9U8gq5p%2BmGQm4UyFyZYFpUK8B%2FYs6HDS%2FCKMG94%2BqzRDrnmflm9AA1zj%2FhKH4O0Ix%2BNWjigDTNSIIP3QdA2bo58vBcKoM5Cp2Syy12nnYvMdkTZTxyKO6b7x04GGtTDJxu9os7ROZ9fh4TnhkLah0tVpZ8G%2F%2FqmUm2dTBJ07CmbAjvjHBfLEbCDiQE42Z1VGFhFqjasS5yizJblhauieIutXc8JL5JPu7RF%2B0%2BXCLm1AKSyce5RU3kjLjH5XSDSw4EhuSMHIklH1HJC7shBxdUQoDgUMlthgYRXoauVQ%2BRb6Fmrc6pcLIzDIAmDHo1k50j2Y1G3erGQQ9HFV%2BpORoLIMGcmvh6Ypyx5JlSv3UVrRgAL2dlMr8IiRLgmN0zGRIOfGa%2Fh%2Fi58hApSATqnVifOAEAWQOaHsdp3g9U6W66coVSMtvehzCn%2FI%2B%2FBjqkAXZOppRVGbdUdbWtbWH5Q9NezahYTMa1YIyECZqL46FSKD2lQE6G6g9wOm14q6Z7QAATvi1E3Eb0vuD5DRJQcCnlt9Zk%2FiSIHD%2FqtKsNSTM4P%2Fnk7Hx4Ak7R0q8iguujHc19fO4J1BQHz0vDT1H9bWatFNsZIjQtHN34oDjRt%2FB6jUEPnybgnxJxcyHRSyiaHGE6LunqGdM3x8bbBwOANlu1gxPA&X-Amz-Signature=1b954c39a221b615e6d716d9eefe751e82b4e3e300663f3a100564da4e6d7e07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XMBCO6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJKnneC2pzZmFgYlRiZFjG%2FEzIGFBkmSjo4iKpjBNsQIhAM0oodV%2BM38hWlRpSbMpKP0mERVz1OSr2OViR4jSPCsvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwWEJA1kf%2BH9VdLCIMq3AMHzTMWSy%2FRvBoCn0fYgviu7Br%2BuPt8NmzPnIY4pJCSuoxm4X3Q07PQjzCMAm5qVyrwT7SszSKP34LV9ermrZazSnarQXWg%2BPpgsoVQaTJ%2Bh16vJmqM7xmsOLz3D1fSD1f4x%2Be%2FkFPFUcPZP15uGSIO3QjSULZG3pO2YjHxSfoO1quFX9C%2FI39ACdcvrBe2FL4mHcUtbp9U8gq5p%2BmGQm4UyFyZYFpUK8B%2FYs6HDS%2FCKMG94%2BqzRDrnmflm9AA1zj%2FhKH4O0Ix%2BNWjigDTNSIIP3QdA2bo58vBcKoM5Cp2Syy12nnYvMdkTZTxyKO6b7x04GGtTDJxu9os7ROZ9fh4TnhkLah0tVpZ8G%2F%2FqmUm2dTBJ07CmbAjvjHBfLEbCDiQE42Z1VGFhFqjasS5yizJblhauieIutXc8JL5JPu7RF%2B0%2BXCLm1AKSyce5RU3kjLjH5XSDSw4EhuSMHIklH1HJC7shBxdUQoDgUMlthgYRXoauVQ%2BRb6Fmrc6pcLIzDIAmDHo1k50j2Y1G3erGQQ9HFV%2BpORoLIMGcmvh6Ypyx5JlSv3UVrRgAL2dlMr8IiRLgmN0zGRIOfGa%2Fh%2Fi58hApSATqnVifOAEAWQOaHsdp3g9U6W66coVSMtvehzCn%2FI%2B%2FBjqkAXZOppRVGbdUdbWtbWH5Q9NezahYTMa1YIyECZqL46FSKD2lQE6G6g9wOm14q6Z7QAATvi1E3Eb0vuD5DRJQcCnlt9Zk%2FiSIHD%2FqtKsNSTM4P%2Fnk7Hx4Ak7R0q8iguujHc19fO4J1BQHz0vDT1H9bWatFNsZIjQtHN34oDjRt%2FB6jUEPnybgnxJxcyHRSyiaHGE6LunqGdM3x8bbBwOANlu1gxPA&X-Amz-Signature=dc0baf871050747f1bf4132190d05e26d3d8180a31ddb3fd21b752570469aefe&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XMBCO6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJKnneC2pzZmFgYlRiZFjG%2FEzIGFBkmSjo4iKpjBNsQIhAM0oodV%2BM38hWlRpSbMpKP0mERVz1OSr2OViR4jSPCsvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwWEJA1kf%2BH9VdLCIMq3AMHzTMWSy%2FRvBoCn0fYgviu7Br%2BuPt8NmzPnIY4pJCSuoxm4X3Q07PQjzCMAm5qVyrwT7SszSKP34LV9ermrZazSnarQXWg%2BPpgsoVQaTJ%2Bh16vJmqM7xmsOLz3D1fSD1f4x%2Be%2FkFPFUcPZP15uGSIO3QjSULZG3pO2YjHxSfoO1quFX9C%2FI39ACdcvrBe2FL4mHcUtbp9U8gq5p%2BmGQm4UyFyZYFpUK8B%2FYs6HDS%2FCKMG94%2BqzRDrnmflm9AA1zj%2FhKH4O0Ix%2BNWjigDTNSIIP3QdA2bo58vBcKoM5Cp2Syy12nnYvMdkTZTxyKO6b7x04GGtTDJxu9os7ROZ9fh4TnhkLah0tVpZ8G%2F%2FqmUm2dTBJ07CmbAjvjHBfLEbCDiQE42Z1VGFhFqjasS5yizJblhauieIutXc8JL5JPu7RF%2B0%2BXCLm1AKSyce5RU3kjLjH5XSDSw4EhuSMHIklH1HJC7shBxdUQoDgUMlthgYRXoauVQ%2BRb6Fmrc6pcLIzDIAmDHo1k50j2Y1G3erGQQ9HFV%2BpORoLIMGcmvh6Ypyx5JlSv3UVrRgAL2dlMr8IiRLgmN0zGRIOfGa%2Fh%2Fi58hApSATqnVifOAEAWQOaHsdp3g9U6W66coVSMtvehzCn%2FI%2B%2FBjqkAXZOppRVGbdUdbWtbWH5Q9NezahYTMa1YIyECZqL46FSKD2lQE6G6g9wOm14q6Z7QAATvi1E3Eb0vuD5DRJQcCnlt9Zk%2FiSIHD%2FqtKsNSTM4P%2Fnk7Hx4Ak7R0q8iguujHc19fO4J1BQHz0vDT1H9bWatFNsZIjQtHN34oDjRt%2FB6jUEPnybgnxJxcyHRSyiaHGE6LunqGdM3x8bbBwOANlu1gxPA&X-Amz-Signature=0d5bd3cfd8be41f163bb2c2ce25ef0bc4af8382ce781039e16d7db3b194e3e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XMBCO6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJKnneC2pzZmFgYlRiZFjG%2FEzIGFBkmSjo4iKpjBNsQIhAM0oodV%2BM38hWlRpSbMpKP0mERVz1OSr2OViR4jSPCsvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwWEJA1kf%2BH9VdLCIMq3AMHzTMWSy%2FRvBoCn0fYgviu7Br%2BuPt8NmzPnIY4pJCSuoxm4X3Q07PQjzCMAm5qVyrwT7SszSKP34LV9ermrZazSnarQXWg%2BPpgsoVQaTJ%2Bh16vJmqM7xmsOLz3D1fSD1f4x%2Be%2FkFPFUcPZP15uGSIO3QjSULZG3pO2YjHxSfoO1quFX9C%2FI39ACdcvrBe2FL4mHcUtbp9U8gq5p%2BmGQm4UyFyZYFpUK8B%2FYs6HDS%2FCKMG94%2BqzRDrnmflm9AA1zj%2FhKH4O0Ix%2BNWjigDTNSIIP3QdA2bo58vBcKoM5Cp2Syy12nnYvMdkTZTxyKO6b7x04GGtTDJxu9os7ROZ9fh4TnhkLah0tVpZ8G%2F%2FqmUm2dTBJ07CmbAjvjHBfLEbCDiQE42Z1VGFhFqjasS5yizJblhauieIutXc8JL5JPu7RF%2B0%2BXCLm1AKSyce5RU3kjLjH5XSDSw4EhuSMHIklH1HJC7shBxdUQoDgUMlthgYRXoauVQ%2BRb6Fmrc6pcLIzDIAmDHo1k50j2Y1G3erGQQ9HFV%2BpORoLIMGcmvh6Ypyx5JlSv3UVrRgAL2dlMr8IiRLgmN0zGRIOfGa%2Fh%2Fi58hApSATqnVifOAEAWQOaHsdp3g9U6W66coVSMtvehzCn%2FI%2B%2FBjqkAXZOppRVGbdUdbWtbWH5Q9NezahYTMa1YIyECZqL46FSKD2lQE6G6g9wOm14q6Z7QAATvi1E3Eb0vuD5DRJQcCnlt9Zk%2FiSIHD%2FqtKsNSTM4P%2Fnk7Hx4Ak7R0q8iguujHc19fO4J1BQHz0vDT1H9bWatFNsZIjQtHN34oDjRt%2FB6jUEPnybgnxJxcyHRSyiaHGE6LunqGdM3x8bbBwOANlu1gxPA&X-Amz-Signature=25630e68574d15d7af360e8682eddcb0cd653318eb620ca3dcaf0d001fa170f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XMBCO6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJKnneC2pzZmFgYlRiZFjG%2FEzIGFBkmSjo4iKpjBNsQIhAM0oodV%2BM38hWlRpSbMpKP0mERVz1OSr2OViR4jSPCsvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwWEJA1kf%2BH9VdLCIMq3AMHzTMWSy%2FRvBoCn0fYgviu7Br%2BuPt8NmzPnIY4pJCSuoxm4X3Q07PQjzCMAm5qVyrwT7SszSKP34LV9ermrZazSnarQXWg%2BPpgsoVQaTJ%2Bh16vJmqM7xmsOLz3D1fSD1f4x%2Be%2FkFPFUcPZP15uGSIO3QjSULZG3pO2YjHxSfoO1quFX9C%2FI39ACdcvrBe2FL4mHcUtbp9U8gq5p%2BmGQm4UyFyZYFpUK8B%2FYs6HDS%2FCKMG94%2BqzRDrnmflm9AA1zj%2FhKH4O0Ix%2BNWjigDTNSIIP3QdA2bo58vBcKoM5Cp2Syy12nnYvMdkTZTxyKO6b7x04GGtTDJxu9os7ROZ9fh4TnhkLah0tVpZ8G%2F%2FqmUm2dTBJ07CmbAjvjHBfLEbCDiQE42Z1VGFhFqjasS5yizJblhauieIutXc8JL5JPu7RF%2B0%2BXCLm1AKSyce5RU3kjLjH5XSDSw4EhuSMHIklH1HJC7shBxdUQoDgUMlthgYRXoauVQ%2BRb6Fmrc6pcLIzDIAmDHo1k50j2Y1G3erGQQ9HFV%2BpORoLIMGcmvh6Ypyx5JlSv3UVrRgAL2dlMr8IiRLgmN0zGRIOfGa%2Fh%2Fi58hApSATqnVifOAEAWQOaHsdp3g9U6W66coVSMtvehzCn%2FI%2B%2FBjqkAXZOppRVGbdUdbWtbWH5Q9NezahYTMa1YIyECZqL46FSKD2lQE6G6g9wOm14q6Z7QAATvi1E3Eb0vuD5DRJQcCnlt9Zk%2FiSIHD%2FqtKsNSTM4P%2Fnk7Hx4Ak7R0q8iguujHc19fO4J1BQHz0vDT1H9bWatFNsZIjQtHN34oDjRt%2FB6jUEPnybgnxJxcyHRSyiaHGE6LunqGdM3x8bbBwOANlu1gxPA&X-Amz-Signature=be90073f6c440373845cd97b0641a17d2109daf4ff9f1e50ec35cf59810576d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XMBCO6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJKnneC2pzZmFgYlRiZFjG%2FEzIGFBkmSjo4iKpjBNsQIhAM0oodV%2BM38hWlRpSbMpKP0mERVz1OSr2OViR4jSPCsvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwWEJA1kf%2BH9VdLCIMq3AMHzTMWSy%2FRvBoCn0fYgviu7Br%2BuPt8NmzPnIY4pJCSuoxm4X3Q07PQjzCMAm5qVyrwT7SszSKP34LV9ermrZazSnarQXWg%2BPpgsoVQaTJ%2Bh16vJmqM7xmsOLz3D1fSD1f4x%2Be%2FkFPFUcPZP15uGSIO3QjSULZG3pO2YjHxSfoO1quFX9C%2FI39ACdcvrBe2FL4mHcUtbp9U8gq5p%2BmGQm4UyFyZYFpUK8B%2FYs6HDS%2FCKMG94%2BqzRDrnmflm9AA1zj%2FhKH4O0Ix%2BNWjigDTNSIIP3QdA2bo58vBcKoM5Cp2Syy12nnYvMdkTZTxyKO6b7x04GGtTDJxu9os7ROZ9fh4TnhkLah0tVpZ8G%2F%2FqmUm2dTBJ07CmbAjvjHBfLEbCDiQE42Z1VGFhFqjasS5yizJblhauieIutXc8JL5JPu7RF%2B0%2BXCLm1AKSyce5RU3kjLjH5XSDSw4EhuSMHIklH1HJC7shBxdUQoDgUMlthgYRXoauVQ%2BRb6Fmrc6pcLIzDIAmDHo1k50j2Y1G3erGQQ9HFV%2BpORoLIMGcmvh6Ypyx5JlSv3UVrRgAL2dlMr8IiRLgmN0zGRIOfGa%2Fh%2Fi58hApSATqnVifOAEAWQOaHsdp3g9U6W66coVSMtvehzCn%2FI%2B%2FBjqkAXZOppRVGbdUdbWtbWH5Q9NezahYTMa1YIyECZqL46FSKD2lQE6G6g9wOm14q6Z7QAATvi1E3Eb0vuD5DRJQcCnlt9Zk%2FiSIHD%2FqtKsNSTM4P%2Fnk7Hx4Ak7R0q8iguujHc19fO4J1BQHz0vDT1H9bWatFNsZIjQtHN34oDjRt%2FB6jUEPnybgnxJxcyHRSyiaHGE6LunqGdM3x8bbBwOANlu1gxPA&X-Amz-Signature=42d1602f03062a011a602219092aa99c45164375dffc80b5aa65545f61ca810f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XMBCO6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkJKnneC2pzZmFgYlRiZFjG%2FEzIGFBkmSjo4iKpjBNsQIhAM0oodV%2BM38hWlRpSbMpKP0mERVz1OSr2OViR4jSPCsvKv8DCC4QABoMNjM3NDIzMTgzODA1IgwWEJA1kf%2BH9VdLCIMq3AMHzTMWSy%2FRvBoCn0fYgviu7Br%2BuPt8NmzPnIY4pJCSuoxm4X3Q07PQjzCMAm5qVyrwT7SszSKP34LV9ermrZazSnarQXWg%2BPpgsoVQaTJ%2Bh16vJmqM7xmsOLz3D1fSD1f4x%2Be%2FkFPFUcPZP15uGSIO3QjSULZG3pO2YjHxSfoO1quFX9C%2FI39ACdcvrBe2FL4mHcUtbp9U8gq5p%2BmGQm4UyFyZYFpUK8B%2FYs6HDS%2FCKMG94%2BqzRDrnmflm9AA1zj%2FhKH4O0Ix%2BNWjigDTNSIIP3QdA2bo58vBcKoM5Cp2Syy12nnYvMdkTZTxyKO6b7x04GGtTDJxu9os7ROZ9fh4TnhkLah0tVpZ8G%2F%2FqmUm2dTBJ07CmbAjvjHBfLEbCDiQE42Z1VGFhFqjasS5yizJblhauieIutXc8JL5JPu7RF%2B0%2BXCLm1AKSyce5RU3kjLjH5XSDSw4EhuSMHIklH1HJC7shBxdUQoDgUMlthgYRXoauVQ%2BRb6Fmrc6pcLIzDIAmDHo1k50j2Y1G3erGQQ9HFV%2BpORoLIMGcmvh6Ypyx5JlSv3UVrRgAL2dlMr8IiRLgmN0zGRIOfGa%2Fh%2Fi58hApSATqnVifOAEAWQOaHsdp3g9U6W66coVSMtvehzCn%2FI%2B%2FBjqkAXZOppRVGbdUdbWtbWH5Q9NezahYTMa1YIyECZqL46FSKD2lQE6G6g9wOm14q6Z7QAATvi1E3Eb0vuD5DRJQcCnlt9Zk%2FiSIHD%2FqtKsNSTM4P%2Fnk7Hx4Ak7R0q8iguujHc19fO4J1BQHz0vDT1H9bWatFNsZIjQtHN34oDjRt%2FB6jUEPnybgnxJxcyHRSyiaHGE6LunqGdM3x8bbBwOANlu1gxPA&X-Amz-Signature=4948f3cef4ce1669033f37e17ff14bd294d3b82f4a29cfb0b95226869528c1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
