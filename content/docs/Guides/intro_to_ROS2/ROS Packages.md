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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVVQBHV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSYsBpodSnpDhI8KsZMIgueUSgIIcz3%2FnYQkC8PJLqAiEA100LAVLYZC3vNIecaLmF5sCRZBfwGuhAmG792b5%2Bd%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDP4W6yLA7tjFzJOfrCrcA%2FZ5RYPP2gNI5wwxFnzMd093Ss8mtYTQ%2FD6eayQ3t0cn%2BV2Y5BEdHcsxzlViygzGlKItHtdWs9MWu31UT46jg3XVuR7M9qiPibFE5sN2fv9fJ%2B6wP4bOtRzchZiU7OfwbXN3ABgLZ5uGapHDOObfaykPeQxVNmgtW8mYMZZVv6v0MK4AtMxJ5mYBJnigYISOe9zKkS8aqkmENJ7gtmoad8QnMfA2ZtMea4gotiUN7PB8WkSTOMQI%2F%2FsLWmn%2BaFrjG%2BsxPdrsEmvvWWmvfqJ1Q8yLkALvdfd2nZWt%2B%2FMdLWuKOIN1T60FkEdn5liwLzyP7czv4Abx6981vTxjpxAxkx%2FzTq8sdJsjmKVt0ruqGwROyo4pb2U81wwUzwsKO2RT2YVTbciqQQPchuXRnFM%2BVfZ6OhVxJ6r1jzapxT6PwJo%2BkE1LU4xJ29IGdf3jcCgtTOvS9VKqrlLLi4gob5zTuxiLmojTr%2BYEMfzlkxWGp3VGK%2BEiEd6H4de4Ycc2G%2FsxMO0TpDfEW%2Bw6wV8%2B%2Bvyf7JhCVElraI3HEzTPQD7b%2FSVDR4MzxFqVdW0o6aAcLqaf9nP05%2Buu6Di7d7pEap%2BWJKvk7W65lAFAR%2BFqfW2CD6I%2BQj2vHD0iD8qH8%2Bq0MPGK7b0GOqUBSPoZ80Sr5NyptaQhCAD83vVcFfaLBuZ1ctjZgEo3EavuOnNukadq259pdKi97vqVpuCKTFFRbWDKjemZgisTrDRUaNHYlVpJxce%2F1idBK79DD9NgxqLfuEfutKrlMC5ijTYtjuDi0np7PPnEZNoOL4oDAKR7fzGugrVizwVilGF0zW1QMM4p4K5RozysaYdWcFGyeXy43HG2mA%2FO5RqEUtM0h%2B0c&X-Amz-Signature=caac1d42d5978985b5aaa5371440a8397c03a9deb7a7c99104a066ec878c1e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVVQBHV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSYsBpodSnpDhI8KsZMIgueUSgIIcz3%2FnYQkC8PJLqAiEA100LAVLYZC3vNIecaLmF5sCRZBfwGuhAmG792b5%2Bd%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDP4W6yLA7tjFzJOfrCrcA%2FZ5RYPP2gNI5wwxFnzMd093Ss8mtYTQ%2FD6eayQ3t0cn%2BV2Y5BEdHcsxzlViygzGlKItHtdWs9MWu31UT46jg3XVuR7M9qiPibFE5sN2fv9fJ%2B6wP4bOtRzchZiU7OfwbXN3ABgLZ5uGapHDOObfaykPeQxVNmgtW8mYMZZVv6v0MK4AtMxJ5mYBJnigYISOe9zKkS8aqkmENJ7gtmoad8QnMfA2ZtMea4gotiUN7PB8WkSTOMQI%2F%2FsLWmn%2BaFrjG%2BsxPdrsEmvvWWmvfqJ1Q8yLkALvdfd2nZWt%2B%2FMdLWuKOIN1T60FkEdn5liwLzyP7czv4Abx6981vTxjpxAxkx%2FzTq8sdJsjmKVt0ruqGwROyo4pb2U81wwUzwsKO2RT2YVTbciqQQPchuXRnFM%2BVfZ6OhVxJ6r1jzapxT6PwJo%2BkE1LU4xJ29IGdf3jcCgtTOvS9VKqrlLLi4gob5zTuxiLmojTr%2BYEMfzlkxWGp3VGK%2BEiEd6H4de4Ycc2G%2FsxMO0TpDfEW%2Bw6wV8%2B%2Bvyf7JhCVElraI3HEzTPQD7b%2FSVDR4MzxFqVdW0o6aAcLqaf9nP05%2Buu6Di7d7pEap%2BWJKvk7W65lAFAR%2BFqfW2CD6I%2BQj2vHD0iD8qH8%2Bq0MPGK7b0GOqUBSPoZ80Sr5NyptaQhCAD83vVcFfaLBuZ1ctjZgEo3EavuOnNukadq259pdKi97vqVpuCKTFFRbWDKjemZgisTrDRUaNHYlVpJxce%2F1idBK79DD9NgxqLfuEfutKrlMC5ijTYtjuDi0np7PPnEZNoOL4oDAKR7fzGugrVizwVilGF0zW1QMM4p4K5RozysaYdWcFGyeXy43HG2mA%2FO5RqEUtM0h%2B0c&X-Amz-Signature=0289f3348f18640b080213c68f8818de0ecc68092c5dec5cab76e3abe3963a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVVQBHV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSYsBpodSnpDhI8KsZMIgueUSgIIcz3%2FnYQkC8PJLqAiEA100LAVLYZC3vNIecaLmF5sCRZBfwGuhAmG792b5%2Bd%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDP4W6yLA7tjFzJOfrCrcA%2FZ5RYPP2gNI5wwxFnzMd093Ss8mtYTQ%2FD6eayQ3t0cn%2BV2Y5BEdHcsxzlViygzGlKItHtdWs9MWu31UT46jg3XVuR7M9qiPibFE5sN2fv9fJ%2B6wP4bOtRzchZiU7OfwbXN3ABgLZ5uGapHDOObfaykPeQxVNmgtW8mYMZZVv6v0MK4AtMxJ5mYBJnigYISOe9zKkS8aqkmENJ7gtmoad8QnMfA2ZtMea4gotiUN7PB8WkSTOMQI%2F%2FsLWmn%2BaFrjG%2BsxPdrsEmvvWWmvfqJ1Q8yLkALvdfd2nZWt%2B%2FMdLWuKOIN1T60FkEdn5liwLzyP7czv4Abx6981vTxjpxAxkx%2FzTq8sdJsjmKVt0ruqGwROyo4pb2U81wwUzwsKO2RT2YVTbciqQQPchuXRnFM%2BVfZ6OhVxJ6r1jzapxT6PwJo%2BkE1LU4xJ29IGdf3jcCgtTOvS9VKqrlLLi4gob5zTuxiLmojTr%2BYEMfzlkxWGp3VGK%2BEiEd6H4de4Ycc2G%2FsxMO0TpDfEW%2Bw6wV8%2B%2Bvyf7JhCVElraI3HEzTPQD7b%2FSVDR4MzxFqVdW0o6aAcLqaf9nP05%2Buu6Di7d7pEap%2BWJKvk7W65lAFAR%2BFqfW2CD6I%2BQj2vHD0iD8qH8%2Bq0MPGK7b0GOqUBSPoZ80Sr5NyptaQhCAD83vVcFfaLBuZ1ctjZgEo3EavuOnNukadq259pdKi97vqVpuCKTFFRbWDKjemZgisTrDRUaNHYlVpJxce%2F1idBK79DD9NgxqLfuEfutKrlMC5ijTYtjuDi0np7PPnEZNoOL4oDAKR7fzGugrVizwVilGF0zW1QMM4p4K5RozysaYdWcFGyeXy43HG2mA%2FO5RqEUtM0h%2B0c&X-Amz-Signature=c76c7b4d5a5308a558e5666f091d334d4712ee2d518703bb0d91687ebf781196&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVVQBHV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSYsBpodSnpDhI8KsZMIgueUSgIIcz3%2FnYQkC8PJLqAiEA100LAVLYZC3vNIecaLmF5sCRZBfwGuhAmG792b5%2Bd%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDP4W6yLA7tjFzJOfrCrcA%2FZ5RYPP2gNI5wwxFnzMd093Ss8mtYTQ%2FD6eayQ3t0cn%2BV2Y5BEdHcsxzlViygzGlKItHtdWs9MWu31UT46jg3XVuR7M9qiPibFE5sN2fv9fJ%2B6wP4bOtRzchZiU7OfwbXN3ABgLZ5uGapHDOObfaykPeQxVNmgtW8mYMZZVv6v0MK4AtMxJ5mYBJnigYISOe9zKkS8aqkmENJ7gtmoad8QnMfA2ZtMea4gotiUN7PB8WkSTOMQI%2F%2FsLWmn%2BaFrjG%2BsxPdrsEmvvWWmvfqJ1Q8yLkALvdfd2nZWt%2B%2FMdLWuKOIN1T60FkEdn5liwLzyP7czv4Abx6981vTxjpxAxkx%2FzTq8sdJsjmKVt0ruqGwROyo4pb2U81wwUzwsKO2RT2YVTbciqQQPchuXRnFM%2BVfZ6OhVxJ6r1jzapxT6PwJo%2BkE1LU4xJ29IGdf3jcCgtTOvS9VKqrlLLi4gob5zTuxiLmojTr%2BYEMfzlkxWGp3VGK%2BEiEd6H4de4Ycc2G%2FsxMO0TpDfEW%2Bw6wV8%2B%2Bvyf7JhCVElraI3HEzTPQD7b%2FSVDR4MzxFqVdW0o6aAcLqaf9nP05%2Buu6Di7d7pEap%2BWJKvk7W65lAFAR%2BFqfW2CD6I%2BQj2vHD0iD8qH8%2Bq0MPGK7b0GOqUBSPoZ80Sr5NyptaQhCAD83vVcFfaLBuZ1ctjZgEo3EavuOnNukadq259pdKi97vqVpuCKTFFRbWDKjemZgisTrDRUaNHYlVpJxce%2F1idBK79DD9NgxqLfuEfutKrlMC5ijTYtjuDi0np7PPnEZNoOL4oDAKR7fzGugrVizwVilGF0zW1QMM4p4K5RozysaYdWcFGyeXy43HG2mA%2FO5RqEUtM0h%2B0c&X-Amz-Signature=7f14b443969a1f42a23d15941f872a0a76013de38722d6ea30529d2cd54d6fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVVQBHV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSYsBpodSnpDhI8KsZMIgueUSgIIcz3%2FnYQkC8PJLqAiEA100LAVLYZC3vNIecaLmF5sCRZBfwGuhAmG792b5%2Bd%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDP4W6yLA7tjFzJOfrCrcA%2FZ5RYPP2gNI5wwxFnzMd093Ss8mtYTQ%2FD6eayQ3t0cn%2BV2Y5BEdHcsxzlViygzGlKItHtdWs9MWu31UT46jg3XVuR7M9qiPibFE5sN2fv9fJ%2B6wP4bOtRzchZiU7OfwbXN3ABgLZ5uGapHDOObfaykPeQxVNmgtW8mYMZZVv6v0MK4AtMxJ5mYBJnigYISOe9zKkS8aqkmENJ7gtmoad8QnMfA2ZtMea4gotiUN7PB8WkSTOMQI%2F%2FsLWmn%2BaFrjG%2BsxPdrsEmvvWWmvfqJ1Q8yLkALvdfd2nZWt%2B%2FMdLWuKOIN1T60FkEdn5liwLzyP7czv4Abx6981vTxjpxAxkx%2FzTq8sdJsjmKVt0ruqGwROyo4pb2U81wwUzwsKO2RT2YVTbciqQQPchuXRnFM%2BVfZ6OhVxJ6r1jzapxT6PwJo%2BkE1LU4xJ29IGdf3jcCgtTOvS9VKqrlLLi4gob5zTuxiLmojTr%2BYEMfzlkxWGp3VGK%2BEiEd6H4de4Ycc2G%2FsxMO0TpDfEW%2Bw6wV8%2B%2Bvyf7JhCVElraI3HEzTPQD7b%2FSVDR4MzxFqVdW0o6aAcLqaf9nP05%2Buu6Di7d7pEap%2BWJKvk7W65lAFAR%2BFqfW2CD6I%2BQj2vHD0iD8qH8%2Bq0MPGK7b0GOqUBSPoZ80Sr5NyptaQhCAD83vVcFfaLBuZ1ctjZgEo3EavuOnNukadq259pdKi97vqVpuCKTFFRbWDKjemZgisTrDRUaNHYlVpJxce%2F1idBK79DD9NgxqLfuEfutKrlMC5ijTYtjuDi0np7PPnEZNoOL4oDAKR7fzGugrVizwVilGF0zW1QMM4p4K5RozysaYdWcFGyeXy43HG2mA%2FO5RqEUtM0h%2B0c&X-Amz-Signature=779ce0e3b2f857160b80d6a08197a832e1dd9ab32042ecf57de37d23f93344ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVVQBHV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSYsBpodSnpDhI8KsZMIgueUSgIIcz3%2FnYQkC8PJLqAiEA100LAVLYZC3vNIecaLmF5sCRZBfwGuhAmG792b5%2Bd%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDP4W6yLA7tjFzJOfrCrcA%2FZ5RYPP2gNI5wwxFnzMd093Ss8mtYTQ%2FD6eayQ3t0cn%2BV2Y5BEdHcsxzlViygzGlKItHtdWs9MWu31UT46jg3XVuR7M9qiPibFE5sN2fv9fJ%2B6wP4bOtRzchZiU7OfwbXN3ABgLZ5uGapHDOObfaykPeQxVNmgtW8mYMZZVv6v0MK4AtMxJ5mYBJnigYISOe9zKkS8aqkmENJ7gtmoad8QnMfA2ZtMea4gotiUN7PB8WkSTOMQI%2F%2FsLWmn%2BaFrjG%2BsxPdrsEmvvWWmvfqJ1Q8yLkALvdfd2nZWt%2B%2FMdLWuKOIN1T60FkEdn5liwLzyP7czv4Abx6981vTxjpxAxkx%2FzTq8sdJsjmKVt0ruqGwROyo4pb2U81wwUzwsKO2RT2YVTbciqQQPchuXRnFM%2BVfZ6OhVxJ6r1jzapxT6PwJo%2BkE1LU4xJ29IGdf3jcCgtTOvS9VKqrlLLi4gob5zTuxiLmojTr%2BYEMfzlkxWGp3VGK%2BEiEd6H4de4Ycc2G%2FsxMO0TpDfEW%2Bw6wV8%2B%2Bvyf7JhCVElraI3HEzTPQD7b%2FSVDR4MzxFqVdW0o6aAcLqaf9nP05%2Buu6Di7d7pEap%2BWJKvk7W65lAFAR%2BFqfW2CD6I%2BQj2vHD0iD8qH8%2Bq0MPGK7b0GOqUBSPoZ80Sr5NyptaQhCAD83vVcFfaLBuZ1ctjZgEo3EavuOnNukadq259pdKi97vqVpuCKTFFRbWDKjemZgisTrDRUaNHYlVpJxce%2F1idBK79DD9NgxqLfuEfutKrlMC5ijTYtjuDi0np7PPnEZNoOL4oDAKR7fzGugrVizwVilGF0zW1QMM4p4K5RozysaYdWcFGyeXy43HG2mA%2FO5RqEUtM0h%2B0c&X-Amz-Signature=2ef6dc4c4d7fc1d71f9c4cae3604956a11ecbbe129fd3653daf073f7c5edbd9c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVVQBHV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSYsBpodSnpDhI8KsZMIgueUSgIIcz3%2FnYQkC8PJLqAiEA100LAVLYZC3vNIecaLmF5sCRZBfwGuhAmG792b5%2Bd%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDP4W6yLA7tjFzJOfrCrcA%2FZ5RYPP2gNI5wwxFnzMd093Ss8mtYTQ%2FD6eayQ3t0cn%2BV2Y5BEdHcsxzlViygzGlKItHtdWs9MWu31UT46jg3XVuR7M9qiPibFE5sN2fv9fJ%2B6wP4bOtRzchZiU7OfwbXN3ABgLZ5uGapHDOObfaykPeQxVNmgtW8mYMZZVv6v0MK4AtMxJ5mYBJnigYISOe9zKkS8aqkmENJ7gtmoad8QnMfA2ZtMea4gotiUN7PB8WkSTOMQI%2F%2FsLWmn%2BaFrjG%2BsxPdrsEmvvWWmvfqJ1Q8yLkALvdfd2nZWt%2B%2FMdLWuKOIN1T60FkEdn5liwLzyP7czv4Abx6981vTxjpxAxkx%2FzTq8sdJsjmKVt0ruqGwROyo4pb2U81wwUzwsKO2RT2YVTbciqQQPchuXRnFM%2BVfZ6OhVxJ6r1jzapxT6PwJo%2BkE1LU4xJ29IGdf3jcCgtTOvS9VKqrlLLi4gob5zTuxiLmojTr%2BYEMfzlkxWGp3VGK%2BEiEd6H4de4Ycc2G%2FsxMO0TpDfEW%2Bw6wV8%2B%2Bvyf7JhCVElraI3HEzTPQD7b%2FSVDR4MzxFqVdW0o6aAcLqaf9nP05%2Buu6Di7d7pEap%2BWJKvk7W65lAFAR%2BFqfW2CD6I%2BQj2vHD0iD8qH8%2Bq0MPGK7b0GOqUBSPoZ80Sr5NyptaQhCAD83vVcFfaLBuZ1ctjZgEo3EavuOnNukadq259pdKi97vqVpuCKTFFRbWDKjemZgisTrDRUaNHYlVpJxce%2F1idBK79DD9NgxqLfuEfutKrlMC5ijTYtjuDi0np7PPnEZNoOL4oDAKR7fzGugrVizwVilGF0zW1QMM4p4K5RozysaYdWcFGyeXy43HG2mA%2FO5RqEUtM0h%2B0c&X-Amz-Signature=52965884bd1252f6f85ad6a9720e342d10a6d1d0a6f5fcb3de3f234477e92b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
