---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DNIULE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQs1JbfSiPGEQVfKk0xSTomuQORwya6%2BEub7Jouc9wgIhAOQXvUX0suI84c18y%2BCuS3SbTV5MRFopmiV4OZK9wk%2FOKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Z84SQ0mbPMsn4EYq3ANe16Zm9zkPq5IMIi6vFTXXu4ti%2FG7klnay1lqKuRirVWtMCe%2F%2Fb%2Fbi8ha5ury%2BQNcQEBn%2BuASftZYaNKlMucDnYqam9EA%2B944yBC3bONejV1vYvOMMPPVEnIj1XERfbwHpXjqoU62wrkM2bc7g3n9jbvjzskTTynA04M9E95JO66yiNxeaq2UPmwIWUJFWWaL8g4DLwPfMwIvuaiTOVHYdApc1lg2NW7ssifR3F7Dq9qE4od50gc7uWh10QnmN5NlsN5BeT1rogtjZEzDgYV%2BJ5qKQo7v08UwfQsH5XBQYdtYLRmBbxWah70128I18GLPjGE8NYWWEaRKjk0PPRXiKx%2FLEVC%2BBjwUU67aqLJ0IK8FM9xUU19O8jlk3x%2BCNGGLPb4gPpadIbT5y1h6j1Ov8s80TBFvqVHMD04iNRldZFDp%2Fnw%2FbmQFWxYQIBwDFUPozxh%2FSiaWWfYvy8ujwxpYzF9jTuBzAZLk%2BgnpqdhGmMsLjafz4PsetLN25YOzpEfvokLegMazNNHD3qiqPLXcHzye6s7NfSUBxqBvtF%2FGY%2Bty2OoViVYFv%2BOMW%2F4qLgRkU1q0FIt0Ar3Nd43qAXyGqahSD5ScxdFUgFRSfx6G%2FZvmA510MkyHUrvoFGTCVu6nEBjqkAbTG7aP%2FJi5ziX7du0OfUzrABbL3kJLgFh5ACtrcSZ%2B%2BASoXCGIAFM8osz2FZTg8eXakq4R1fjwV7TrDKC4tNV9iRu2IL8f20vrJzRL%2BKiQsMemC0NYhCRrHsx9qTx%2BTWXY6j4klbLmTp6dgU0d8bXkkEZk0Ef5gvJQwR9B%2FutO8bExuwPWyPVq%2BX5CgrIIudFq62kbCGRO1A3zTC%2BUrqqumqBpe&X-Amz-Signature=03e28fd5a209c337a36f57fa68dff901c33d608d624e39efffb3bc611a60fecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DNIULE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQs1JbfSiPGEQVfKk0xSTomuQORwya6%2BEub7Jouc9wgIhAOQXvUX0suI84c18y%2BCuS3SbTV5MRFopmiV4OZK9wk%2FOKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Z84SQ0mbPMsn4EYq3ANe16Zm9zkPq5IMIi6vFTXXu4ti%2FG7klnay1lqKuRirVWtMCe%2F%2Fb%2Fbi8ha5ury%2BQNcQEBn%2BuASftZYaNKlMucDnYqam9EA%2B944yBC3bONejV1vYvOMMPPVEnIj1XERfbwHpXjqoU62wrkM2bc7g3n9jbvjzskTTynA04M9E95JO66yiNxeaq2UPmwIWUJFWWaL8g4DLwPfMwIvuaiTOVHYdApc1lg2NW7ssifR3F7Dq9qE4od50gc7uWh10QnmN5NlsN5BeT1rogtjZEzDgYV%2BJ5qKQo7v08UwfQsH5XBQYdtYLRmBbxWah70128I18GLPjGE8NYWWEaRKjk0PPRXiKx%2FLEVC%2BBjwUU67aqLJ0IK8FM9xUU19O8jlk3x%2BCNGGLPb4gPpadIbT5y1h6j1Ov8s80TBFvqVHMD04iNRldZFDp%2Fnw%2FbmQFWxYQIBwDFUPozxh%2FSiaWWfYvy8ujwxpYzF9jTuBzAZLk%2BgnpqdhGmMsLjafz4PsetLN25YOzpEfvokLegMazNNHD3qiqPLXcHzye6s7NfSUBxqBvtF%2FGY%2Bty2OoViVYFv%2BOMW%2F4qLgRkU1q0FIt0Ar3Nd43qAXyGqahSD5ScxdFUgFRSfx6G%2FZvmA510MkyHUrvoFGTCVu6nEBjqkAbTG7aP%2FJi5ziX7du0OfUzrABbL3kJLgFh5ACtrcSZ%2B%2BASoXCGIAFM8osz2FZTg8eXakq4R1fjwV7TrDKC4tNV9iRu2IL8f20vrJzRL%2BKiQsMemC0NYhCRrHsx9qTx%2BTWXY6j4klbLmTp6dgU0d8bXkkEZk0Ef5gvJQwR9B%2FutO8bExuwPWyPVq%2BX5CgrIIudFq62kbCGRO1A3zTC%2BUrqqumqBpe&X-Amz-Signature=1733021571d4212def4ae100e17d0c290f682425c33214ee318f58c70692a6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DNIULE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQs1JbfSiPGEQVfKk0xSTomuQORwya6%2BEub7Jouc9wgIhAOQXvUX0suI84c18y%2BCuS3SbTV5MRFopmiV4OZK9wk%2FOKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Z84SQ0mbPMsn4EYq3ANe16Zm9zkPq5IMIi6vFTXXu4ti%2FG7klnay1lqKuRirVWtMCe%2F%2Fb%2Fbi8ha5ury%2BQNcQEBn%2BuASftZYaNKlMucDnYqam9EA%2B944yBC3bONejV1vYvOMMPPVEnIj1XERfbwHpXjqoU62wrkM2bc7g3n9jbvjzskTTynA04M9E95JO66yiNxeaq2UPmwIWUJFWWaL8g4DLwPfMwIvuaiTOVHYdApc1lg2NW7ssifR3F7Dq9qE4od50gc7uWh10QnmN5NlsN5BeT1rogtjZEzDgYV%2BJ5qKQo7v08UwfQsH5XBQYdtYLRmBbxWah70128I18GLPjGE8NYWWEaRKjk0PPRXiKx%2FLEVC%2BBjwUU67aqLJ0IK8FM9xUU19O8jlk3x%2BCNGGLPb4gPpadIbT5y1h6j1Ov8s80TBFvqVHMD04iNRldZFDp%2Fnw%2FbmQFWxYQIBwDFUPozxh%2FSiaWWfYvy8ujwxpYzF9jTuBzAZLk%2BgnpqdhGmMsLjafz4PsetLN25YOzpEfvokLegMazNNHD3qiqPLXcHzye6s7NfSUBxqBvtF%2FGY%2Bty2OoViVYFv%2BOMW%2F4qLgRkU1q0FIt0Ar3Nd43qAXyGqahSD5ScxdFUgFRSfx6G%2FZvmA510MkyHUrvoFGTCVu6nEBjqkAbTG7aP%2FJi5ziX7du0OfUzrABbL3kJLgFh5ACtrcSZ%2B%2BASoXCGIAFM8osz2FZTg8eXakq4R1fjwV7TrDKC4tNV9iRu2IL8f20vrJzRL%2BKiQsMemC0NYhCRrHsx9qTx%2BTWXY6j4klbLmTp6dgU0d8bXkkEZk0Ef5gvJQwR9B%2FutO8bExuwPWyPVq%2BX5CgrIIudFq62kbCGRO1A3zTC%2BUrqqumqBpe&X-Amz-Signature=926ab970710a87817a79386ab566bc7b74fa068ee7ab3c1f4619031e5969ca55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DNIULE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQs1JbfSiPGEQVfKk0xSTomuQORwya6%2BEub7Jouc9wgIhAOQXvUX0suI84c18y%2BCuS3SbTV5MRFopmiV4OZK9wk%2FOKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Z84SQ0mbPMsn4EYq3ANe16Zm9zkPq5IMIi6vFTXXu4ti%2FG7klnay1lqKuRirVWtMCe%2F%2Fb%2Fbi8ha5ury%2BQNcQEBn%2BuASftZYaNKlMucDnYqam9EA%2B944yBC3bONejV1vYvOMMPPVEnIj1XERfbwHpXjqoU62wrkM2bc7g3n9jbvjzskTTynA04M9E95JO66yiNxeaq2UPmwIWUJFWWaL8g4DLwPfMwIvuaiTOVHYdApc1lg2NW7ssifR3F7Dq9qE4od50gc7uWh10QnmN5NlsN5BeT1rogtjZEzDgYV%2BJ5qKQo7v08UwfQsH5XBQYdtYLRmBbxWah70128I18GLPjGE8NYWWEaRKjk0PPRXiKx%2FLEVC%2BBjwUU67aqLJ0IK8FM9xUU19O8jlk3x%2BCNGGLPb4gPpadIbT5y1h6j1Ov8s80TBFvqVHMD04iNRldZFDp%2Fnw%2FbmQFWxYQIBwDFUPozxh%2FSiaWWfYvy8ujwxpYzF9jTuBzAZLk%2BgnpqdhGmMsLjafz4PsetLN25YOzpEfvokLegMazNNHD3qiqPLXcHzye6s7NfSUBxqBvtF%2FGY%2Bty2OoViVYFv%2BOMW%2F4qLgRkU1q0FIt0Ar3Nd43qAXyGqahSD5ScxdFUgFRSfx6G%2FZvmA510MkyHUrvoFGTCVu6nEBjqkAbTG7aP%2FJi5ziX7du0OfUzrABbL3kJLgFh5ACtrcSZ%2B%2BASoXCGIAFM8osz2FZTg8eXakq4R1fjwV7TrDKC4tNV9iRu2IL8f20vrJzRL%2BKiQsMemC0NYhCRrHsx9qTx%2BTWXY6j4klbLmTp6dgU0d8bXkkEZk0Ef5gvJQwR9B%2FutO8bExuwPWyPVq%2BX5CgrIIudFq62kbCGRO1A3zTC%2BUrqqumqBpe&X-Amz-Signature=ad19186a2a6dbb3573037aad387864d635c0895212bd07d2d0614af5a4b8d4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DNIULE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQs1JbfSiPGEQVfKk0xSTomuQORwya6%2BEub7Jouc9wgIhAOQXvUX0suI84c18y%2BCuS3SbTV5MRFopmiV4OZK9wk%2FOKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Z84SQ0mbPMsn4EYq3ANe16Zm9zkPq5IMIi6vFTXXu4ti%2FG7klnay1lqKuRirVWtMCe%2F%2Fb%2Fbi8ha5ury%2BQNcQEBn%2BuASftZYaNKlMucDnYqam9EA%2B944yBC3bONejV1vYvOMMPPVEnIj1XERfbwHpXjqoU62wrkM2bc7g3n9jbvjzskTTynA04M9E95JO66yiNxeaq2UPmwIWUJFWWaL8g4DLwPfMwIvuaiTOVHYdApc1lg2NW7ssifR3F7Dq9qE4od50gc7uWh10QnmN5NlsN5BeT1rogtjZEzDgYV%2BJ5qKQo7v08UwfQsH5XBQYdtYLRmBbxWah70128I18GLPjGE8NYWWEaRKjk0PPRXiKx%2FLEVC%2BBjwUU67aqLJ0IK8FM9xUU19O8jlk3x%2BCNGGLPb4gPpadIbT5y1h6j1Ov8s80TBFvqVHMD04iNRldZFDp%2Fnw%2FbmQFWxYQIBwDFUPozxh%2FSiaWWfYvy8ujwxpYzF9jTuBzAZLk%2BgnpqdhGmMsLjafz4PsetLN25YOzpEfvokLegMazNNHD3qiqPLXcHzye6s7NfSUBxqBvtF%2FGY%2Bty2OoViVYFv%2BOMW%2F4qLgRkU1q0FIt0Ar3Nd43qAXyGqahSD5ScxdFUgFRSfx6G%2FZvmA510MkyHUrvoFGTCVu6nEBjqkAbTG7aP%2FJi5ziX7du0OfUzrABbL3kJLgFh5ACtrcSZ%2B%2BASoXCGIAFM8osz2FZTg8eXakq4R1fjwV7TrDKC4tNV9iRu2IL8f20vrJzRL%2BKiQsMemC0NYhCRrHsx9qTx%2BTWXY6j4klbLmTp6dgU0d8bXkkEZk0Ef5gvJQwR9B%2FutO8bExuwPWyPVq%2BX5CgrIIudFq62kbCGRO1A3zTC%2BUrqqumqBpe&X-Amz-Signature=d6f0b4fd30753609f94f9d44a5aedac796d284233e9a1301b2a836a299798e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DNIULE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQs1JbfSiPGEQVfKk0xSTomuQORwya6%2BEub7Jouc9wgIhAOQXvUX0suI84c18y%2BCuS3SbTV5MRFopmiV4OZK9wk%2FOKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Z84SQ0mbPMsn4EYq3ANe16Zm9zkPq5IMIi6vFTXXu4ti%2FG7klnay1lqKuRirVWtMCe%2F%2Fb%2Fbi8ha5ury%2BQNcQEBn%2BuASftZYaNKlMucDnYqam9EA%2B944yBC3bONejV1vYvOMMPPVEnIj1XERfbwHpXjqoU62wrkM2bc7g3n9jbvjzskTTynA04M9E95JO66yiNxeaq2UPmwIWUJFWWaL8g4DLwPfMwIvuaiTOVHYdApc1lg2NW7ssifR3F7Dq9qE4od50gc7uWh10QnmN5NlsN5BeT1rogtjZEzDgYV%2BJ5qKQo7v08UwfQsH5XBQYdtYLRmBbxWah70128I18GLPjGE8NYWWEaRKjk0PPRXiKx%2FLEVC%2BBjwUU67aqLJ0IK8FM9xUU19O8jlk3x%2BCNGGLPb4gPpadIbT5y1h6j1Ov8s80TBFvqVHMD04iNRldZFDp%2Fnw%2FbmQFWxYQIBwDFUPozxh%2FSiaWWfYvy8ujwxpYzF9jTuBzAZLk%2BgnpqdhGmMsLjafz4PsetLN25YOzpEfvokLegMazNNHD3qiqPLXcHzye6s7NfSUBxqBvtF%2FGY%2Bty2OoViVYFv%2BOMW%2F4qLgRkU1q0FIt0Ar3Nd43qAXyGqahSD5ScxdFUgFRSfx6G%2FZvmA510MkyHUrvoFGTCVu6nEBjqkAbTG7aP%2FJi5ziX7du0OfUzrABbL3kJLgFh5ACtrcSZ%2B%2BASoXCGIAFM8osz2FZTg8eXakq4R1fjwV7TrDKC4tNV9iRu2IL8f20vrJzRL%2BKiQsMemC0NYhCRrHsx9qTx%2BTWXY6j4klbLmTp6dgU0d8bXkkEZk0Ef5gvJQwR9B%2FutO8bExuwPWyPVq%2BX5CgrIIudFq62kbCGRO1A3zTC%2BUrqqumqBpe&X-Amz-Signature=324bbc31bd2a0e99c4d2f95b7131a0fc951decaa7e3902a7278a269b963b18bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DNIULE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQs1JbfSiPGEQVfKk0xSTomuQORwya6%2BEub7Jouc9wgIhAOQXvUX0suI84c18y%2BCuS3SbTV5MRFopmiV4OZK9wk%2FOKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Z84SQ0mbPMsn4EYq3ANe16Zm9zkPq5IMIi6vFTXXu4ti%2FG7klnay1lqKuRirVWtMCe%2F%2Fb%2Fbi8ha5ury%2BQNcQEBn%2BuASftZYaNKlMucDnYqam9EA%2B944yBC3bONejV1vYvOMMPPVEnIj1XERfbwHpXjqoU62wrkM2bc7g3n9jbvjzskTTynA04M9E95JO66yiNxeaq2UPmwIWUJFWWaL8g4DLwPfMwIvuaiTOVHYdApc1lg2NW7ssifR3F7Dq9qE4od50gc7uWh10QnmN5NlsN5BeT1rogtjZEzDgYV%2BJ5qKQo7v08UwfQsH5XBQYdtYLRmBbxWah70128I18GLPjGE8NYWWEaRKjk0PPRXiKx%2FLEVC%2BBjwUU67aqLJ0IK8FM9xUU19O8jlk3x%2BCNGGLPb4gPpadIbT5y1h6j1Ov8s80TBFvqVHMD04iNRldZFDp%2Fnw%2FbmQFWxYQIBwDFUPozxh%2FSiaWWfYvy8ujwxpYzF9jTuBzAZLk%2BgnpqdhGmMsLjafz4PsetLN25YOzpEfvokLegMazNNHD3qiqPLXcHzye6s7NfSUBxqBvtF%2FGY%2Bty2OoViVYFv%2BOMW%2F4qLgRkU1q0FIt0Ar3Nd43qAXyGqahSD5ScxdFUgFRSfx6G%2FZvmA510MkyHUrvoFGTCVu6nEBjqkAbTG7aP%2FJi5ziX7du0OfUzrABbL3kJLgFh5ACtrcSZ%2B%2BASoXCGIAFM8osz2FZTg8eXakq4R1fjwV7TrDKC4tNV9iRu2IL8f20vrJzRL%2BKiQsMemC0NYhCRrHsx9qTx%2BTWXY6j4klbLmTp6dgU0d8bXkkEZk0Ef5gvJQwR9B%2FutO8bExuwPWyPVq%2BX5CgrIIudFq62kbCGRO1A3zTC%2BUrqqumqBpe&X-Amz-Signature=cad250f9ce042ffddf42207a4a8c675361873f54d2aeef961bb1aeeb23f916a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
