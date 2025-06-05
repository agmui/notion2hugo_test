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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LFFCXJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFsvX6zryrJB%2FXkRkt4PbTwikx5EE3LYFG5rwrrgsWpgIgJ4c8J5UMLVtQcsKwGNZKl%2BgkFfW8Je5U%2B6RAFYdcq9Eq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC1WehgjaXfE3J9JVCrcA8uvf%2F%2F%2FRXBkILyOQ8ClkEcG9z33CNNVzZm07Tpi%2BuI4VNWz62OwjdsX9C76U8bXggsEOGOvqEzjd%2F2ebj2%2Fw0OjbI%2F1DqVyA6zGP%2BnDFgvFnadzwFN0ui%2BsFPZU7Gu5ubarcYatDsmM6TKB%2FxqmHGErEcG%2FTtd71M3R6hf6r0oF09%2Fw1V4H1WLc6dCSjfM4liEoi%2ByGLIiozkpJeQ3gzplJXTSQkjN6AaqlNd6%2B6Qov2jNnUuLBuPOk%2Fdt%2FWcP6ISnsefFHcAJG4u5o562Tno77eLILsw0ysum5Tak5cVCtgqSh1uy%2Fqg5%2BAknvZQhpjUN9gw4B6NuABS9D0g7US6HMzrx1QrhTS5Sg%2Byu2NRVDeHnplSyHNV67xNm%2BhsvbRX%2FEuYfByziDbNQAh0Q%2Fi2N3GI%2BqZPCCVlbakYFtKNcOCu2Aa0g7IcJGcDJag%2BQD%2FS4zBRPbLTRBJuiY5DJ6AEJ2pbIK27Lp9DxWcl45HmC4Qq5JSLT2%2FYcpf%2B1Tm3AZ0nTfBW%2BhnyZ9KFI0j7fRL4n2NJS0gJVqZ31eGYleJLkQqLsC91omFb%2Fb%2Bm6QxcPCMPoRtFtA2d1kb8aAOnukIKSA4ZHl%2Fn0ekj%2FMkjffh4cmTt5nCQz0fSqdQXemMM%2FlhMIGOqUBEDREgOY87NiWEiWctBOVCj7LDzEse2EmLwIxUZZWGlx2%2FydBQOuF1x1n6BPUEa8IFzQijOxT8nI8XASWdbUvgoQC4gsixGIeWN77jRY71ZQqzDn4OyeBpP1QoBFArTz83JFqta6fPuruHF5NwLPKQP9Dwg51G5f9HBBKNBvYPOf5BadKdSrBXP7FCuK2oseGYgEFRuFtuzvkf2z7je65WQBrkyfv&X-Amz-Signature=09337d7c3b627cf9082fa3de06e4322ede1c3e8ae454d1cea5ce319f39c172b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LFFCXJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFsvX6zryrJB%2FXkRkt4PbTwikx5EE3LYFG5rwrrgsWpgIgJ4c8J5UMLVtQcsKwGNZKl%2BgkFfW8Je5U%2B6RAFYdcq9Eq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC1WehgjaXfE3J9JVCrcA8uvf%2F%2F%2FRXBkILyOQ8ClkEcG9z33CNNVzZm07Tpi%2BuI4VNWz62OwjdsX9C76U8bXggsEOGOvqEzjd%2F2ebj2%2Fw0OjbI%2F1DqVyA6zGP%2BnDFgvFnadzwFN0ui%2BsFPZU7Gu5ubarcYatDsmM6TKB%2FxqmHGErEcG%2FTtd71M3R6hf6r0oF09%2Fw1V4H1WLc6dCSjfM4liEoi%2ByGLIiozkpJeQ3gzplJXTSQkjN6AaqlNd6%2B6Qov2jNnUuLBuPOk%2Fdt%2FWcP6ISnsefFHcAJG4u5o562Tno77eLILsw0ysum5Tak5cVCtgqSh1uy%2Fqg5%2BAknvZQhpjUN9gw4B6NuABS9D0g7US6HMzrx1QrhTS5Sg%2Byu2NRVDeHnplSyHNV67xNm%2BhsvbRX%2FEuYfByziDbNQAh0Q%2Fi2N3GI%2BqZPCCVlbakYFtKNcOCu2Aa0g7IcJGcDJag%2BQD%2FS4zBRPbLTRBJuiY5DJ6AEJ2pbIK27Lp9DxWcl45HmC4Qq5JSLT2%2FYcpf%2B1Tm3AZ0nTfBW%2BhnyZ9KFI0j7fRL4n2NJS0gJVqZ31eGYleJLkQqLsC91omFb%2Fb%2Bm6QxcPCMPoRtFtA2d1kb8aAOnukIKSA4ZHl%2Fn0ekj%2FMkjffh4cmTt5nCQz0fSqdQXemMM%2FlhMIGOqUBEDREgOY87NiWEiWctBOVCj7LDzEse2EmLwIxUZZWGlx2%2FydBQOuF1x1n6BPUEa8IFzQijOxT8nI8XASWdbUvgoQC4gsixGIeWN77jRY71ZQqzDn4OyeBpP1QoBFArTz83JFqta6fPuruHF5NwLPKQP9Dwg51G5f9HBBKNBvYPOf5BadKdSrBXP7FCuK2oseGYgEFRuFtuzvkf2z7je65WQBrkyfv&X-Amz-Signature=721a07d14bb853c128d7f58dd3bf3e9c808ce2f46c1ed6e3e40764ab39d0fad5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LFFCXJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFsvX6zryrJB%2FXkRkt4PbTwikx5EE3LYFG5rwrrgsWpgIgJ4c8J5UMLVtQcsKwGNZKl%2BgkFfW8Je5U%2B6RAFYdcq9Eq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC1WehgjaXfE3J9JVCrcA8uvf%2F%2F%2FRXBkILyOQ8ClkEcG9z33CNNVzZm07Tpi%2BuI4VNWz62OwjdsX9C76U8bXggsEOGOvqEzjd%2F2ebj2%2Fw0OjbI%2F1DqVyA6zGP%2BnDFgvFnadzwFN0ui%2BsFPZU7Gu5ubarcYatDsmM6TKB%2FxqmHGErEcG%2FTtd71M3R6hf6r0oF09%2Fw1V4H1WLc6dCSjfM4liEoi%2ByGLIiozkpJeQ3gzplJXTSQkjN6AaqlNd6%2B6Qov2jNnUuLBuPOk%2Fdt%2FWcP6ISnsefFHcAJG4u5o562Tno77eLILsw0ysum5Tak5cVCtgqSh1uy%2Fqg5%2BAknvZQhpjUN9gw4B6NuABS9D0g7US6HMzrx1QrhTS5Sg%2Byu2NRVDeHnplSyHNV67xNm%2BhsvbRX%2FEuYfByziDbNQAh0Q%2Fi2N3GI%2BqZPCCVlbakYFtKNcOCu2Aa0g7IcJGcDJag%2BQD%2FS4zBRPbLTRBJuiY5DJ6AEJ2pbIK27Lp9DxWcl45HmC4Qq5JSLT2%2FYcpf%2B1Tm3AZ0nTfBW%2BhnyZ9KFI0j7fRL4n2NJS0gJVqZ31eGYleJLkQqLsC91omFb%2Fb%2Bm6QxcPCMPoRtFtA2d1kb8aAOnukIKSA4ZHl%2Fn0ekj%2FMkjffh4cmTt5nCQz0fSqdQXemMM%2FlhMIGOqUBEDREgOY87NiWEiWctBOVCj7LDzEse2EmLwIxUZZWGlx2%2FydBQOuF1x1n6BPUEa8IFzQijOxT8nI8XASWdbUvgoQC4gsixGIeWN77jRY71ZQqzDn4OyeBpP1QoBFArTz83JFqta6fPuruHF5NwLPKQP9Dwg51G5f9HBBKNBvYPOf5BadKdSrBXP7FCuK2oseGYgEFRuFtuzvkf2z7je65WQBrkyfv&X-Amz-Signature=2134bc697cbd92b4a1bc604b6591c9ba44fedc7f34199db433e12a3a44dc3e61&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LFFCXJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFsvX6zryrJB%2FXkRkt4PbTwikx5EE3LYFG5rwrrgsWpgIgJ4c8J5UMLVtQcsKwGNZKl%2BgkFfW8Je5U%2B6RAFYdcq9Eq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC1WehgjaXfE3J9JVCrcA8uvf%2F%2F%2FRXBkILyOQ8ClkEcG9z33CNNVzZm07Tpi%2BuI4VNWz62OwjdsX9C76U8bXggsEOGOvqEzjd%2F2ebj2%2Fw0OjbI%2F1DqVyA6zGP%2BnDFgvFnadzwFN0ui%2BsFPZU7Gu5ubarcYatDsmM6TKB%2FxqmHGErEcG%2FTtd71M3R6hf6r0oF09%2Fw1V4H1WLc6dCSjfM4liEoi%2ByGLIiozkpJeQ3gzplJXTSQkjN6AaqlNd6%2B6Qov2jNnUuLBuPOk%2Fdt%2FWcP6ISnsefFHcAJG4u5o562Tno77eLILsw0ysum5Tak5cVCtgqSh1uy%2Fqg5%2BAknvZQhpjUN9gw4B6NuABS9D0g7US6HMzrx1QrhTS5Sg%2Byu2NRVDeHnplSyHNV67xNm%2BhsvbRX%2FEuYfByziDbNQAh0Q%2Fi2N3GI%2BqZPCCVlbakYFtKNcOCu2Aa0g7IcJGcDJag%2BQD%2FS4zBRPbLTRBJuiY5DJ6AEJ2pbIK27Lp9DxWcl45HmC4Qq5JSLT2%2FYcpf%2B1Tm3AZ0nTfBW%2BhnyZ9KFI0j7fRL4n2NJS0gJVqZ31eGYleJLkQqLsC91omFb%2Fb%2Bm6QxcPCMPoRtFtA2d1kb8aAOnukIKSA4ZHl%2Fn0ekj%2FMkjffh4cmTt5nCQz0fSqdQXemMM%2FlhMIGOqUBEDREgOY87NiWEiWctBOVCj7LDzEse2EmLwIxUZZWGlx2%2FydBQOuF1x1n6BPUEa8IFzQijOxT8nI8XASWdbUvgoQC4gsixGIeWN77jRY71ZQqzDn4OyeBpP1QoBFArTz83JFqta6fPuruHF5NwLPKQP9Dwg51G5f9HBBKNBvYPOf5BadKdSrBXP7FCuK2oseGYgEFRuFtuzvkf2z7je65WQBrkyfv&X-Amz-Signature=a4a2eae4054fb59e692a9b344d0438f91e4ddf7f5ac01f9af7d36e92a01ffc43&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LFFCXJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFsvX6zryrJB%2FXkRkt4PbTwikx5EE3LYFG5rwrrgsWpgIgJ4c8J5UMLVtQcsKwGNZKl%2BgkFfW8Je5U%2B6RAFYdcq9Eq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC1WehgjaXfE3J9JVCrcA8uvf%2F%2F%2FRXBkILyOQ8ClkEcG9z33CNNVzZm07Tpi%2BuI4VNWz62OwjdsX9C76U8bXggsEOGOvqEzjd%2F2ebj2%2Fw0OjbI%2F1DqVyA6zGP%2BnDFgvFnadzwFN0ui%2BsFPZU7Gu5ubarcYatDsmM6TKB%2FxqmHGErEcG%2FTtd71M3R6hf6r0oF09%2Fw1V4H1WLc6dCSjfM4liEoi%2ByGLIiozkpJeQ3gzplJXTSQkjN6AaqlNd6%2B6Qov2jNnUuLBuPOk%2Fdt%2FWcP6ISnsefFHcAJG4u5o562Tno77eLILsw0ysum5Tak5cVCtgqSh1uy%2Fqg5%2BAknvZQhpjUN9gw4B6NuABS9D0g7US6HMzrx1QrhTS5Sg%2Byu2NRVDeHnplSyHNV67xNm%2BhsvbRX%2FEuYfByziDbNQAh0Q%2Fi2N3GI%2BqZPCCVlbakYFtKNcOCu2Aa0g7IcJGcDJag%2BQD%2FS4zBRPbLTRBJuiY5DJ6AEJ2pbIK27Lp9DxWcl45HmC4Qq5JSLT2%2FYcpf%2B1Tm3AZ0nTfBW%2BhnyZ9KFI0j7fRL4n2NJS0gJVqZ31eGYleJLkQqLsC91omFb%2Fb%2Bm6QxcPCMPoRtFtA2d1kb8aAOnukIKSA4ZHl%2Fn0ekj%2FMkjffh4cmTt5nCQz0fSqdQXemMM%2FlhMIGOqUBEDREgOY87NiWEiWctBOVCj7LDzEse2EmLwIxUZZWGlx2%2FydBQOuF1x1n6BPUEa8IFzQijOxT8nI8XASWdbUvgoQC4gsixGIeWN77jRY71ZQqzDn4OyeBpP1QoBFArTz83JFqta6fPuruHF5NwLPKQP9Dwg51G5f9HBBKNBvYPOf5BadKdSrBXP7FCuK2oseGYgEFRuFtuzvkf2z7je65WQBrkyfv&X-Amz-Signature=007a4b6a53808bb6efd0df6a0abe6b105aebb0bbf735caf94418d4fc936ad730&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LFFCXJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFsvX6zryrJB%2FXkRkt4PbTwikx5EE3LYFG5rwrrgsWpgIgJ4c8J5UMLVtQcsKwGNZKl%2BgkFfW8Je5U%2B6RAFYdcq9Eq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC1WehgjaXfE3J9JVCrcA8uvf%2F%2F%2FRXBkILyOQ8ClkEcG9z33CNNVzZm07Tpi%2BuI4VNWz62OwjdsX9C76U8bXggsEOGOvqEzjd%2F2ebj2%2Fw0OjbI%2F1DqVyA6zGP%2BnDFgvFnadzwFN0ui%2BsFPZU7Gu5ubarcYatDsmM6TKB%2FxqmHGErEcG%2FTtd71M3R6hf6r0oF09%2Fw1V4H1WLc6dCSjfM4liEoi%2ByGLIiozkpJeQ3gzplJXTSQkjN6AaqlNd6%2B6Qov2jNnUuLBuPOk%2Fdt%2FWcP6ISnsefFHcAJG4u5o562Tno77eLILsw0ysum5Tak5cVCtgqSh1uy%2Fqg5%2BAknvZQhpjUN9gw4B6NuABS9D0g7US6HMzrx1QrhTS5Sg%2Byu2NRVDeHnplSyHNV67xNm%2BhsvbRX%2FEuYfByziDbNQAh0Q%2Fi2N3GI%2BqZPCCVlbakYFtKNcOCu2Aa0g7IcJGcDJag%2BQD%2FS4zBRPbLTRBJuiY5DJ6AEJ2pbIK27Lp9DxWcl45HmC4Qq5JSLT2%2FYcpf%2B1Tm3AZ0nTfBW%2BhnyZ9KFI0j7fRL4n2NJS0gJVqZ31eGYleJLkQqLsC91omFb%2Fb%2Bm6QxcPCMPoRtFtA2d1kb8aAOnukIKSA4ZHl%2Fn0ekj%2FMkjffh4cmTt5nCQz0fSqdQXemMM%2FlhMIGOqUBEDREgOY87NiWEiWctBOVCj7LDzEse2EmLwIxUZZWGlx2%2FydBQOuF1x1n6BPUEa8IFzQijOxT8nI8XASWdbUvgoQC4gsixGIeWN77jRY71ZQqzDn4OyeBpP1QoBFArTz83JFqta6fPuruHF5NwLPKQP9Dwg51G5f9HBBKNBvYPOf5BadKdSrBXP7FCuK2oseGYgEFRuFtuzvkf2z7je65WQBrkyfv&X-Amz-Signature=5e95ed3ca4ce97c81fec0f4f82e9c0751df229366d2a532868b47d87ee6d3214&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LFFCXJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFsvX6zryrJB%2FXkRkt4PbTwikx5EE3LYFG5rwrrgsWpgIgJ4c8J5UMLVtQcsKwGNZKl%2BgkFfW8Je5U%2B6RAFYdcq9Eq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC1WehgjaXfE3J9JVCrcA8uvf%2F%2F%2FRXBkILyOQ8ClkEcG9z33CNNVzZm07Tpi%2BuI4VNWz62OwjdsX9C76U8bXggsEOGOvqEzjd%2F2ebj2%2Fw0OjbI%2F1DqVyA6zGP%2BnDFgvFnadzwFN0ui%2BsFPZU7Gu5ubarcYatDsmM6TKB%2FxqmHGErEcG%2FTtd71M3R6hf6r0oF09%2Fw1V4H1WLc6dCSjfM4liEoi%2ByGLIiozkpJeQ3gzplJXTSQkjN6AaqlNd6%2B6Qov2jNnUuLBuPOk%2Fdt%2FWcP6ISnsefFHcAJG4u5o562Tno77eLILsw0ysum5Tak5cVCtgqSh1uy%2Fqg5%2BAknvZQhpjUN9gw4B6NuABS9D0g7US6HMzrx1QrhTS5Sg%2Byu2NRVDeHnplSyHNV67xNm%2BhsvbRX%2FEuYfByziDbNQAh0Q%2Fi2N3GI%2BqZPCCVlbakYFtKNcOCu2Aa0g7IcJGcDJag%2BQD%2FS4zBRPbLTRBJuiY5DJ6AEJ2pbIK27Lp9DxWcl45HmC4Qq5JSLT2%2FYcpf%2B1Tm3AZ0nTfBW%2BhnyZ9KFI0j7fRL4n2NJS0gJVqZ31eGYleJLkQqLsC91omFb%2Fb%2Bm6QxcPCMPoRtFtA2d1kb8aAOnukIKSA4ZHl%2Fn0ekj%2FMkjffh4cmTt5nCQz0fSqdQXemMM%2FlhMIGOqUBEDREgOY87NiWEiWctBOVCj7LDzEse2EmLwIxUZZWGlx2%2FydBQOuF1x1n6BPUEa8IFzQijOxT8nI8XASWdbUvgoQC4gsixGIeWN77jRY71ZQqzDn4OyeBpP1QoBFArTz83JFqta6fPuruHF5NwLPKQP9Dwg51G5f9HBBKNBvYPOf5BadKdSrBXP7FCuK2oseGYgEFRuFtuzvkf2z7je65WQBrkyfv&X-Amz-Signature=312210f9c38d345b5342f2f775003304bb8a002e893cc1d585b9ddd235f9c818&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
