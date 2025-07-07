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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2Y25C5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD6wOS1uOKt%2BgUx%2BqLLlTpY4ykB6tn71yig2XvF6%2BCmHAIhAK8bIbAZmivCWLEnNMv%2BG0aJysZA0yEg%2Bmn6K8lfiOD%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4ytynOpd9SC46x58q3AN888WP6oxLN1wDOboC7wW8II%2FFMLvuJgXU8dsoukZ3iqrXQf6aHamrXKtTkXKBKoR7SrunG%2Bt3bXlwK5X%2Fy0t92NiBseSKGr9gp6E1B1BbRhDsnrDtVNBjyol31nCgdRtDO%2BVYxCtuxsENTw2rT82FySljVSNrELkHfWAMORpW2219sdUK%2F2LjnJI%2FCopYcC%2BGp%2FCUmTx12h2rBptjaKxRuqSoVM2zeSfw0YNpfDFitCxmuiyV%2Fd5vdusFA9C5ddrtPOFmoHHXNU%2B0Ooy1JAYMtu7e1wIdQWB3VKgPQAaYzusjTe5pkPdMKWBKlH3Z%2BcEybFGskwsiLsoQuUYxcyArteFuEXkXeTcg3rOvVT8lOqqwEPtNxQkb7aBP3s3pRE3RhNSe6%2Fpa9JjSsHsjVuQARIrlRPSVgZxZH1kRQqONKLtJGDNXHJdheFioRtM0ALdTz4fYX61KOG9hOrJj60mTPMo3cUOqjnkGwWohJRfowx8l%2FXp%2B7w5A7tNNw8hlKbiPyukRQfJgpbYbKTeW4lGLhqjfBKY7H5Fvphdod7xmEY%2FcP%2F%2FhurkQ0d3E57UMUzVI40Qz%2FQLXZkRnXAR%2B%2F2XUa1MUcRMdzrepKKUb4HU7GHnyn7GN%2B%2BepNjAD3DDTuK%2FDBjqkAX9ai8DKS%2FlhMHrVW0kXPW%2Fes6vbXK59myS8en9kN0bM4wMc3sxmwUzLlil28etkOXrRgVD5MDCCsSBrhZo7njhL8%2BngDMBBHaSGQv9zjGClivcFnO0ysDbnlEUgQ0d9y7aA5CjbYMLaFoxdcjqIv4%2FHvmJe8yKTM6WWP3zZc4zc61l3x8nsLZYRDkJjJ4%2BWdN93CUJ4wxFwLyIbnpIoixl3hBSt&X-Amz-Signature=4c2759c11e87d16ac74e6ad4a9240add674bad9f2c32b0b4593852dd05a70e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2Y25C5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD6wOS1uOKt%2BgUx%2BqLLlTpY4ykB6tn71yig2XvF6%2BCmHAIhAK8bIbAZmivCWLEnNMv%2BG0aJysZA0yEg%2Bmn6K8lfiOD%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4ytynOpd9SC46x58q3AN888WP6oxLN1wDOboC7wW8II%2FFMLvuJgXU8dsoukZ3iqrXQf6aHamrXKtTkXKBKoR7SrunG%2Bt3bXlwK5X%2Fy0t92NiBseSKGr9gp6E1B1BbRhDsnrDtVNBjyol31nCgdRtDO%2BVYxCtuxsENTw2rT82FySljVSNrELkHfWAMORpW2219sdUK%2F2LjnJI%2FCopYcC%2BGp%2FCUmTx12h2rBptjaKxRuqSoVM2zeSfw0YNpfDFitCxmuiyV%2Fd5vdusFA9C5ddrtPOFmoHHXNU%2B0Ooy1JAYMtu7e1wIdQWB3VKgPQAaYzusjTe5pkPdMKWBKlH3Z%2BcEybFGskwsiLsoQuUYxcyArteFuEXkXeTcg3rOvVT8lOqqwEPtNxQkb7aBP3s3pRE3RhNSe6%2Fpa9JjSsHsjVuQARIrlRPSVgZxZH1kRQqONKLtJGDNXHJdheFioRtM0ALdTz4fYX61KOG9hOrJj60mTPMo3cUOqjnkGwWohJRfowx8l%2FXp%2B7w5A7tNNw8hlKbiPyukRQfJgpbYbKTeW4lGLhqjfBKY7H5Fvphdod7xmEY%2FcP%2F%2FhurkQ0d3E57UMUzVI40Qz%2FQLXZkRnXAR%2B%2F2XUa1MUcRMdzrepKKUb4HU7GHnyn7GN%2B%2BepNjAD3DDTuK%2FDBjqkAX9ai8DKS%2FlhMHrVW0kXPW%2Fes6vbXK59myS8en9kN0bM4wMc3sxmwUzLlil28etkOXrRgVD5MDCCsSBrhZo7njhL8%2BngDMBBHaSGQv9zjGClivcFnO0ysDbnlEUgQ0d9y7aA5CjbYMLaFoxdcjqIv4%2FHvmJe8yKTM6WWP3zZc4zc61l3x8nsLZYRDkJjJ4%2BWdN93CUJ4wxFwLyIbnpIoixl3hBSt&X-Amz-Signature=3a3cbd55a7c79848120ed49a2a3c503a2822b0ab9f9571b829239eb9e83bd97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2Y25C5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD6wOS1uOKt%2BgUx%2BqLLlTpY4ykB6tn71yig2XvF6%2BCmHAIhAK8bIbAZmivCWLEnNMv%2BG0aJysZA0yEg%2Bmn6K8lfiOD%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4ytynOpd9SC46x58q3AN888WP6oxLN1wDOboC7wW8II%2FFMLvuJgXU8dsoukZ3iqrXQf6aHamrXKtTkXKBKoR7SrunG%2Bt3bXlwK5X%2Fy0t92NiBseSKGr9gp6E1B1BbRhDsnrDtVNBjyol31nCgdRtDO%2BVYxCtuxsENTw2rT82FySljVSNrELkHfWAMORpW2219sdUK%2F2LjnJI%2FCopYcC%2BGp%2FCUmTx12h2rBptjaKxRuqSoVM2zeSfw0YNpfDFitCxmuiyV%2Fd5vdusFA9C5ddrtPOFmoHHXNU%2B0Ooy1JAYMtu7e1wIdQWB3VKgPQAaYzusjTe5pkPdMKWBKlH3Z%2BcEybFGskwsiLsoQuUYxcyArteFuEXkXeTcg3rOvVT8lOqqwEPtNxQkb7aBP3s3pRE3RhNSe6%2Fpa9JjSsHsjVuQARIrlRPSVgZxZH1kRQqONKLtJGDNXHJdheFioRtM0ALdTz4fYX61KOG9hOrJj60mTPMo3cUOqjnkGwWohJRfowx8l%2FXp%2B7w5A7tNNw8hlKbiPyukRQfJgpbYbKTeW4lGLhqjfBKY7H5Fvphdod7xmEY%2FcP%2F%2FhurkQ0d3E57UMUzVI40Qz%2FQLXZkRnXAR%2B%2F2XUa1MUcRMdzrepKKUb4HU7GHnyn7GN%2B%2BepNjAD3DDTuK%2FDBjqkAX9ai8DKS%2FlhMHrVW0kXPW%2Fes6vbXK59myS8en9kN0bM4wMc3sxmwUzLlil28etkOXrRgVD5MDCCsSBrhZo7njhL8%2BngDMBBHaSGQv9zjGClivcFnO0ysDbnlEUgQ0d9y7aA5CjbYMLaFoxdcjqIv4%2FHvmJe8yKTM6WWP3zZc4zc61l3x8nsLZYRDkJjJ4%2BWdN93CUJ4wxFwLyIbnpIoixl3hBSt&X-Amz-Signature=73b45a422593cccdff4abce752e282df13c73c17e51f0ab539a402c061bdc98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2Y25C5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD6wOS1uOKt%2BgUx%2BqLLlTpY4ykB6tn71yig2XvF6%2BCmHAIhAK8bIbAZmivCWLEnNMv%2BG0aJysZA0yEg%2Bmn6K8lfiOD%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4ytynOpd9SC46x58q3AN888WP6oxLN1wDOboC7wW8II%2FFMLvuJgXU8dsoukZ3iqrXQf6aHamrXKtTkXKBKoR7SrunG%2Bt3bXlwK5X%2Fy0t92NiBseSKGr9gp6E1B1BbRhDsnrDtVNBjyol31nCgdRtDO%2BVYxCtuxsENTw2rT82FySljVSNrELkHfWAMORpW2219sdUK%2F2LjnJI%2FCopYcC%2BGp%2FCUmTx12h2rBptjaKxRuqSoVM2zeSfw0YNpfDFitCxmuiyV%2Fd5vdusFA9C5ddrtPOFmoHHXNU%2B0Ooy1JAYMtu7e1wIdQWB3VKgPQAaYzusjTe5pkPdMKWBKlH3Z%2BcEybFGskwsiLsoQuUYxcyArteFuEXkXeTcg3rOvVT8lOqqwEPtNxQkb7aBP3s3pRE3RhNSe6%2Fpa9JjSsHsjVuQARIrlRPSVgZxZH1kRQqONKLtJGDNXHJdheFioRtM0ALdTz4fYX61KOG9hOrJj60mTPMo3cUOqjnkGwWohJRfowx8l%2FXp%2B7w5A7tNNw8hlKbiPyukRQfJgpbYbKTeW4lGLhqjfBKY7H5Fvphdod7xmEY%2FcP%2F%2FhurkQ0d3E57UMUzVI40Qz%2FQLXZkRnXAR%2B%2F2XUa1MUcRMdzrepKKUb4HU7GHnyn7GN%2B%2BepNjAD3DDTuK%2FDBjqkAX9ai8DKS%2FlhMHrVW0kXPW%2Fes6vbXK59myS8en9kN0bM4wMc3sxmwUzLlil28etkOXrRgVD5MDCCsSBrhZo7njhL8%2BngDMBBHaSGQv9zjGClivcFnO0ysDbnlEUgQ0d9y7aA5CjbYMLaFoxdcjqIv4%2FHvmJe8yKTM6WWP3zZc4zc61l3x8nsLZYRDkJjJ4%2BWdN93CUJ4wxFwLyIbnpIoixl3hBSt&X-Amz-Signature=624f2b8f41cc66d46baf86a10fc3218c0d1e959bd8967d488c1f1f2882549bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2Y25C5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD6wOS1uOKt%2BgUx%2BqLLlTpY4ykB6tn71yig2XvF6%2BCmHAIhAK8bIbAZmivCWLEnNMv%2BG0aJysZA0yEg%2Bmn6K8lfiOD%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4ytynOpd9SC46x58q3AN888WP6oxLN1wDOboC7wW8II%2FFMLvuJgXU8dsoukZ3iqrXQf6aHamrXKtTkXKBKoR7SrunG%2Bt3bXlwK5X%2Fy0t92NiBseSKGr9gp6E1B1BbRhDsnrDtVNBjyol31nCgdRtDO%2BVYxCtuxsENTw2rT82FySljVSNrELkHfWAMORpW2219sdUK%2F2LjnJI%2FCopYcC%2BGp%2FCUmTx12h2rBptjaKxRuqSoVM2zeSfw0YNpfDFitCxmuiyV%2Fd5vdusFA9C5ddrtPOFmoHHXNU%2B0Ooy1JAYMtu7e1wIdQWB3VKgPQAaYzusjTe5pkPdMKWBKlH3Z%2BcEybFGskwsiLsoQuUYxcyArteFuEXkXeTcg3rOvVT8lOqqwEPtNxQkb7aBP3s3pRE3RhNSe6%2Fpa9JjSsHsjVuQARIrlRPSVgZxZH1kRQqONKLtJGDNXHJdheFioRtM0ALdTz4fYX61KOG9hOrJj60mTPMo3cUOqjnkGwWohJRfowx8l%2FXp%2B7w5A7tNNw8hlKbiPyukRQfJgpbYbKTeW4lGLhqjfBKY7H5Fvphdod7xmEY%2FcP%2F%2FhurkQ0d3E57UMUzVI40Qz%2FQLXZkRnXAR%2B%2F2XUa1MUcRMdzrepKKUb4HU7GHnyn7GN%2B%2BepNjAD3DDTuK%2FDBjqkAX9ai8DKS%2FlhMHrVW0kXPW%2Fes6vbXK59myS8en9kN0bM4wMc3sxmwUzLlil28etkOXrRgVD5MDCCsSBrhZo7njhL8%2BngDMBBHaSGQv9zjGClivcFnO0ysDbnlEUgQ0d9y7aA5CjbYMLaFoxdcjqIv4%2FHvmJe8yKTM6WWP3zZc4zc61l3x8nsLZYRDkJjJ4%2BWdN93CUJ4wxFwLyIbnpIoixl3hBSt&X-Amz-Signature=45218b5cc6b2c5ef9d61515692c5227f1c3b34b980107df81aae34e6b279340d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2Y25C5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD6wOS1uOKt%2BgUx%2BqLLlTpY4ykB6tn71yig2XvF6%2BCmHAIhAK8bIbAZmivCWLEnNMv%2BG0aJysZA0yEg%2Bmn6K8lfiOD%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4ytynOpd9SC46x58q3AN888WP6oxLN1wDOboC7wW8II%2FFMLvuJgXU8dsoukZ3iqrXQf6aHamrXKtTkXKBKoR7SrunG%2Bt3bXlwK5X%2Fy0t92NiBseSKGr9gp6E1B1BbRhDsnrDtVNBjyol31nCgdRtDO%2BVYxCtuxsENTw2rT82FySljVSNrELkHfWAMORpW2219sdUK%2F2LjnJI%2FCopYcC%2BGp%2FCUmTx12h2rBptjaKxRuqSoVM2zeSfw0YNpfDFitCxmuiyV%2Fd5vdusFA9C5ddrtPOFmoHHXNU%2B0Ooy1JAYMtu7e1wIdQWB3VKgPQAaYzusjTe5pkPdMKWBKlH3Z%2BcEybFGskwsiLsoQuUYxcyArteFuEXkXeTcg3rOvVT8lOqqwEPtNxQkb7aBP3s3pRE3RhNSe6%2Fpa9JjSsHsjVuQARIrlRPSVgZxZH1kRQqONKLtJGDNXHJdheFioRtM0ALdTz4fYX61KOG9hOrJj60mTPMo3cUOqjnkGwWohJRfowx8l%2FXp%2B7w5A7tNNw8hlKbiPyukRQfJgpbYbKTeW4lGLhqjfBKY7H5Fvphdod7xmEY%2FcP%2F%2FhurkQ0d3E57UMUzVI40Qz%2FQLXZkRnXAR%2B%2F2XUa1MUcRMdzrepKKUb4HU7GHnyn7GN%2B%2BepNjAD3DDTuK%2FDBjqkAX9ai8DKS%2FlhMHrVW0kXPW%2Fes6vbXK59myS8en9kN0bM4wMc3sxmwUzLlil28etkOXrRgVD5MDCCsSBrhZo7njhL8%2BngDMBBHaSGQv9zjGClivcFnO0ysDbnlEUgQ0d9y7aA5CjbYMLaFoxdcjqIv4%2FHvmJe8yKTM6WWP3zZc4zc61l3x8nsLZYRDkJjJ4%2BWdN93CUJ4wxFwLyIbnpIoixl3hBSt&X-Amz-Signature=727cc19234161f564acfeaeef12b9c0f4f8aa1d4d3877a9ced0e4d796f0a92ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y2Y25C5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD6wOS1uOKt%2BgUx%2BqLLlTpY4ykB6tn71yig2XvF6%2BCmHAIhAK8bIbAZmivCWLEnNMv%2BG0aJysZA0yEg%2Bmn6K8lfiOD%2FKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4ytynOpd9SC46x58q3AN888WP6oxLN1wDOboC7wW8II%2FFMLvuJgXU8dsoukZ3iqrXQf6aHamrXKtTkXKBKoR7SrunG%2Bt3bXlwK5X%2Fy0t92NiBseSKGr9gp6E1B1BbRhDsnrDtVNBjyol31nCgdRtDO%2BVYxCtuxsENTw2rT82FySljVSNrELkHfWAMORpW2219sdUK%2F2LjnJI%2FCopYcC%2BGp%2FCUmTx12h2rBptjaKxRuqSoVM2zeSfw0YNpfDFitCxmuiyV%2Fd5vdusFA9C5ddrtPOFmoHHXNU%2B0Ooy1JAYMtu7e1wIdQWB3VKgPQAaYzusjTe5pkPdMKWBKlH3Z%2BcEybFGskwsiLsoQuUYxcyArteFuEXkXeTcg3rOvVT8lOqqwEPtNxQkb7aBP3s3pRE3RhNSe6%2Fpa9JjSsHsjVuQARIrlRPSVgZxZH1kRQqONKLtJGDNXHJdheFioRtM0ALdTz4fYX61KOG9hOrJj60mTPMo3cUOqjnkGwWohJRfowx8l%2FXp%2B7w5A7tNNw8hlKbiPyukRQfJgpbYbKTeW4lGLhqjfBKY7H5Fvphdod7xmEY%2FcP%2F%2FhurkQ0d3E57UMUzVI40Qz%2FQLXZkRnXAR%2B%2F2XUa1MUcRMdzrepKKUb4HU7GHnyn7GN%2B%2BepNjAD3DDTuK%2FDBjqkAX9ai8DKS%2FlhMHrVW0kXPW%2Fes6vbXK59myS8en9kN0bM4wMc3sxmwUzLlil28etkOXrRgVD5MDCCsSBrhZo7njhL8%2BngDMBBHaSGQv9zjGClivcFnO0ysDbnlEUgQ0d9y7aA5CjbYMLaFoxdcjqIv4%2FHvmJe8yKTM6WWP3zZc4zc61l3x8nsLZYRDkJjJ4%2BWdN93CUJ4wxFwLyIbnpIoixl3hBSt&X-Amz-Signature=4a0c0f3e830fdcbc55cdacca8420366352202779ff49eb6a221ce415dc6ac4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
