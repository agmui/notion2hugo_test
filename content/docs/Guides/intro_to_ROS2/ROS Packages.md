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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=64576225ab3b3aebc6e972d6c664bee03c2fb7b6688838f788f39b1b14a078ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=36aa93a40cdfbfbeafb7a86fbd8ddff3cc75cf9abfa7771d54b15ba51776669f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=3b7c652cabf1f9ee5c47df4ec1162078015e195c0ea8927d361276d4168769a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=b77f206b021b15b12e95fc30a8f568c1e6b8936fa29b777bdd6231dddf4db6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=7df711fa431d8758d7cc5bcf38514630cfb6ab9092826b7ca28b3ad85a1e1127&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=88d2b8b1cf5811b0df03d30bc43fe2809c707f98e15c47dbb7c926233d089a97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUANHXWN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHAIQgo5tj3G2pS1t7t4ha92VJyzKUm1ggCJWiCD8SQIgcarlROAyB%2BN%2BL5f1uGkuEylct2JHnllgM6FKPjT7rQwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEofitohWcIKHaOBMCrcAyWUQfSLlIvYUzRrHjsZQvy9qblu6N9kM7ocX3QDSlsImTVD8IxfVmk74K1KpZa%2B8Tt%2BB2vBol%2BOvicfTLfXwdXx7G5dv%2BPCxcXOyyJlvL2EvdeBwmHKInecoMyBJCtD3wNzCGnAThyKStFeKb0pM%2BDKFb5g1NUvEYZDmm8Yt9LIDpjgRWZowKEy2MAtnKCNeaTOfRZxRCH2MBtmfw%2BcMsXLPock%2FbJQZAMpXw7ZhIxMOAArrlmCUXOx2fVfZI5ttf1fojxbbyQ7Rrk8Y06dXyBkxVrP8vROGDrT9MDqsYgAH%2B0S%2BoAJWLMaYck%2BxlhgHMxjXG%2BjHZbalm74miDssai930Csts0TrTIw0WA34GFT57xw39Nt8MK0zzjIqI7RJNVn%2FfgR%2BwK2FJmbnvl9hNvFAGeN14WV%2FYIvtI0YbYbEpAFHC9zZTW9eE0uZMf%2BY9AeCrebsmHn5HN1mhjx7dDZYnKmbjNv2KrGKti1Bxzezme9TqZRKVIGaujbEP1i5v%2B9hMEFzr03iuFIakYKAL%2FtXAECsJNxiHYjTzCKjCFd9lTsGQ4uJrNwa%2FgaN71XL66pxvDbRxKvd4oYiDL45Bq%2BoYH3KGQt8klG32mrSsE%2BNQR7zLZ%2BblpyBUG2tML3dlr8GOqUBB5Avo1cKpghXxjmyP5BxwgtbH5jhu1Nzv3eL7OMB9mqkcpfAr9t4i7FwHFU1bZdizHWvJouPJc4VyWRCURtBk%2BmR%2FG%2FZ0u4jiH0d4fB7xh%2BIxqfxplCWO4fm%2Bf9iIKXgS6fpSAUtKbhQm3dz8OqMB%2FEN2CNapv%2FH4vyARzBTa%2FPJGoJgbMFxaZirtxJLQcNBeWGEMNXyzGKiOkwsRQGt8InXDFUr&X-Amz-Signature=2a1ccbe30d22505a0944b751d095a58ccf6106ab3cb21b6fdfd5dbb5f81254e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
