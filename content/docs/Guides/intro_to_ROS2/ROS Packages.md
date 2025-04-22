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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7H3YJP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIA%2BnCH3Kg%2B2BGSc%2FQWWqTRRP6Rh0M%2BNN8fvHarjj6slTAiAvkeM5oAQUxRnOU0UE6wk1cmeGprWgTIfnEeb62bQgViqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMMa4EZqpl2e%2BCnmKtwDKJQdn%2Bd6aa%2BfzMYCB1zRUdJu%2FqEOKTXwk7YSZJ5WhJVO4PDvLZQ0lheZabms0stp%2FF%2B8NJ3rOxkJlAyJqyiXUWwykY30JF7srVGv5z7FfS11YgjQzBBnAGlZ6%2BtL%2F2ZKnrUJj0XsSHbNWPE13BRmpiBGXx4KM3im4LzK8pH8ng69v%2FBjeeiS7q8id9sfAMZos5EXX9jVb2ragezwkQ8IPQp39Hyth7qZidlDC3qK0i5PM%2FuCro0eErFWAlKG6EGErbz1mKF7dO2bSHnBk90p2aGmrYbLKMQ6GwH5PqoFAkxq9b25mr7rZIW%2F7O4OtG8zdjIsYVarqSkd6j1gM5QL34PgGe9sFX6TsuaHlsKRLmF2s7%2FOwFtWi4WURkFVI806boYlKLs80RDjkS0gnK%2FcdwMnGd9qDei%2B5bc50urEkA9gC48qZ7TLwIDAqf1HHGK6%2B7LxT38wWHPWyU0RQNwrIt7%2FGVtZ7CSJeKkVvkWrv8vEWaP8cpg2%2FpgTbZ32dBsHpfO4lrsLKvjy4Y2uV89YfZoUnX0qK%2F7PXwUkO9Tw0S9yH%2FYDU1pTuSu9kOtrqp81KY3vbJGCNnpOguC3tpo8mmy9fHhUNYntwyIo719jPF95Jm49s77seOsx3IUw7bqbwAY6pgHArORxJTE2j%2FuI3CPQbKZXGDw0f%2B4nM6JuuelULkvqmNTPPxcpG%2Fe8ex7fhUzpBPKRdpJe4g9ynAc8R6wJeld8YiV715AhGAoNPCVgr%2FoydpzVYcy44uPU5WCScmvNL6NHTfnobjLXYuHLQb6to%2BBYDJ6SxPBX7wR0hbLSonW%2B5oZCL8JYvIXE6anp45vMnN2%2FA7zmIta5G%2FV6GyMCb2lMi3%2BgLQdP&X-Amz-Signature=06f3df5897880cdbb8cda7864f3fe46b36f87f9bec7385acfbd58677b6afd819&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7H3YJP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIA%2BnCH3Kg%2B2BGSc%2FQWWqTRRP6Rh0M%2BNN8fvHarjj6slTAiAvkeM5oAQUxRnOU0UE6wk1cmeGprWgTIfnEeb62bQgViqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMMa4EZqpl2e%2BCnmKtwDKJQdn%2Bd6aa%2BfzMYCB1zRUdJu%2FqEOKTXwk7YSZJ5WhJVO4PDvLZQ0lheZabms0stp%2FF%2B8NJ3rOxkJlAyJqyiXUWwykY30JF7srVGv5z7FfS11YgjQzBBnAGlZ6%2BtL%2F2ZKnrUJj0XsSHbNWPE13BRmpiBGXx4KM3im4LzK8pH8ng69v%2FBjeeiS7q8id9sfAMZos5EXX9jVb2ragezwkQ8IPQp39Hyth7qZidlDC3qK0i5PM%2FuCro0eErFWAlKG6EGErbz1mKF7dO2bSHnBk90p2aGmrYbLKMQ6GwH5PqoFAkxq9b25mr7rZIW%2F7O4OtG8zdjIsYVarqSkd6j1gM5QL34PgGe9sFX6TsuaHlsKRLmF2s7%2FOwFtWi4WURkFVI806boYlKLs80RDjkS0gnK%2FcdwMnGd9qDei%2B5bc50urEkA9gC48qZ7TLwIDAqf1HHGK6%2B7LxT38wWHPWyU0RQNwrIt7%2FGVtZ7CSJeKkVvkWrv8vEWaP8cpg2%2FpgTbZ32dBsHpfO4lrsLKvjy4Y2uV89YfZoUnX0qK%2F7PXwUkO9Tw0S9yH%2FYDU1pTuSu9kOtrqp81KY3vbJGCNnpOguC3tpo8mmy9fHhUNYntwyIo719jPF95Jm49s77seOsx3IUw7bqbwAY6pgHArORxJTE2j%2FuI3CPQbKZXGDw0f%2B4nM6JuuelULkvqmNTPPxcpG%2Fe8ex7fhUzpBPKRdpJe4g9ynAc8R6wJeld8YiV715AhGAoNPCVgr%2FoydpzVYcy44uPU5WCScmvNL6NHTfnobjLXYuHLQb6to%2BBYDJ6SxPBX7wR0hbLSonW%2B5oZCL8JYvIXE6anp45vMnN2%2FA7zmIta5G%2FV6GyMCb2lMi3%2BgLQdP&X-Amz-Signature=2f849bd32ba045a41a8f341d837a5e4ea17b17f1cf04e72199df53bff3ff2193&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7H3YJP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIA%2BnCH3Kg%2B2BGSc%2FQWWqTRRP6Rh0M%2BNN8fvHarjj6slTAiAvkeM5oAQUxRnOU0UE6wk1cmeGprWgTIfnEeb62bQgViqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMMa4EZqpl2e%2BCnmKtwDKJQdn%2Bd6aa%2BfzMYCB1zRUdJu%2FqEOKTXwk7YSZJ5WhJVO4PDvLZQ0lheZabms0stp%2FF%2B8NJ3rOxkJlAyJqyiXUWwykY30JF7srVGv5z7FfS11YgjQzBBnAGlZ6%2BtL%2F2ZKnrUJj0XsSHbNWPE13BRmpiBGXx4KM3im4LzK8pH8ng69v%2FBjeeiS7q8id9sfAMZos5EXX9jVb2ragezwkQ8IPQp39Hyth7qZidlDC3qK0i5PM%2FuCro0eErFWAlKG6EGErbz1mKF7dO2bSHnBk90p2aGmrYbLKMQ6GwH5PqoFAkxq9b25mr7rZIW%2F7O4OtG8zdjIsYVarqSkd6j1gM5QL34PgGe9sFX6TsuaHlsKRLmF2s7%2FOwFtWi4WURkFVI806boYlKLs80RDjkS0gnK%2FcdwMnGd9qDei%2B5bc50urEkA9gC48qZ7TLwIDAqf1HHGK6%2B7LxT38wWHPWyU0RQNwrIt7%2FGVtZ7CSJeKkVvkWrv8vEWaP8cpg2%2FpgTbZ32dBsHpfO4lrsLKvjy4Y2uV89YfZoUnX0qK%2F7PXwUkO9Tw0S9yH%2FYDU1pTuSu9kOtrqp81KY3vbJGCNnpOguC3tpo8mmy9fHhUNYntwyIo719jPF95Jm49s77seOsx3IUw7bqbwAY6pgHArORxJTE2j%2FuI3CPQbKZXGDw0f%2B4nM6JuuelULkvqmNTPPxcpG%2Fe8ex7fhUzpBPKRdpJe4g9ynAc8R6wJeld8YiV715AhGAoNPCVgr%2FoydpzVYcy44uPU5WCScmvNL6NHTfnobjLXYuHLQb6to%2BBYDJ6SxPBX7wR0hbLSonW%2B5oZCL8JYvIXE6anp45vMnN2%2FA7zmIta5G%2FV6GyMCb2lMi3%2BgLQdP&X-Amz-Signature=4f42cb2539fa21fcfcfd3ad04d092825b94a075908e3c7784c50f1deb5eadbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7H3YJP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIA%2BnCH3Kg%2B2BGSc%2FQWWqTRRP6Rh0M%2BNN8fvHarjj6slTAiAvkeM5oAQUxRnOU0UE6wk1cmeGprWgTIfnEeb62bQgViqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMMa4EZqpl2e%2BCnmKtwDKJQdn%2Bd6aa%2BfzMYCB1zRUdJu%2FqEOKTXwk7YSZJ5WhJVO4PDvLZQ0lheZabms0stp%2FF%2B8NJ3rOxkJlAyJqyiXUWwykY30JF7srVGv5z7FfS11YgjQzBBnAGlZ6%2BtL%2F2ZKnrUJj0XsSHbNWPE13BRmpiBGXx4KM3im4LzK8pH8ng69v%2FBjeeiS7q8id9sfAMZos5EXX9jVb2ragezwkQ8IPQp39Hyth7qZidlDC3qK0i5PM%2FuCro0eErFWAlKG6EGErbz1mKF7dO2bSHnBk90p2aGmrYbLKMQ6GwH5PqoFAkxq9b25mr7rZIW%2F7O4OtG8zdjIsYVarqSkd6j1gM5QL34PgGe9sFX6TsuaHlsKRLmF2s7%2FOwFtWi4WURkFVI806boYlKLs80RDjkS0gnK%2FcdwMnGd9qDei%2B5bc50urEkA9gC48qZ7TLwIDAqf1HHGK6%2B7LxT38wWHPWyU0RQNwrIt7%2FGVtZ7CSJeKkVvkWrv8vEWaP8cpg2%2FpgTbZ32dBsHpfO4lrsLKvjy4Y2uV89YfZoUnX0qK%2F7PXwUkO9Tw0S9yH%2FYDU1pTuSu9kOtrqp81KY3vbJGCNnpOguC3tpo8mmy9fHhUNYntwyIo719jPF95Jm49s77seOsx3IUw7bqbwAY6pgHArORxJTE2j%2FuI3CPQbKZXGDw0f%2B4nM6JuuelULkvqmNTPPxcpG%2Fe8ex7fhUzpBPKRdpJe4g9ynAc8R6wJeld8YiV715AhGAoNPCVgr%2FoydpzVYcy44uPU5WCScmvNL6NHTfnobjLXYuHLQb6to%2BBYDJ6SxPBX7wR0hbLSonW%2B5oZCL8JYvIXE6anp45vMnN2%2FA7zmIta5G%2FV6GyMCb2lMi3%2BgLQdP&X-Amz-Signature=f30da4d6f43c5148ca1e9dcedd9439c87613ca8c9c80963b0c2edb8214d62c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7H3YJP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIA%2BnCH3Kg%2B2BGSc%2FQWWqTRRP6Rh0M%2BNN8fvHarjj6slTAiAvkeM5oAQUxRnOU0UE6wk1cmeGprWgTIfnEeb62bQgViqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMMa4EZqpl2e%2BCnmKtwDKJQdn%2Bd6aa%2BfzMYCB1zRUdJu%2FqEOKTXwk7YSZJ5WhJVO4PDvLZQ0lheZabms0stp%2FF%2B8NJ3rOxkJlAyJqyiXUWwykY30JF7srVGv5z7FfS11YgjQzBBnAGlZ6%2BtL%2F2ZKnrUJj0XsSHbNWPE13BRmpiBGXx4KM3im4LzK8pH8ng69v%2FBjeeiS7q8id9sfAMZos5EXX9jVb2ragezwkQ8IPQp39Hyth7qZidlDC3qK0i5PM%2FuCro0eErFWAlKG6EGErbz1mKF7dO2bSHnBk90p2aGmrYbLKMQ6GwH5PqoFAkxq9b25mr7rZIW%2F7O4OtG8zdjIsYVarqSkd6j1gM5QL34PgGe9sFX6TsuaHlsKRLmF2s7%2FOwFtWi4WURkFVI806boYlKLs80RDjkS0gnK%2FcdwMnGd9qDei%2B5bc50urEkA9gC48qZ7TLwIDAqf1HHGK6%2B7LxT38wWHPWyU0RQNwrIt7%2FGVtZ7CSJeKkVvkWrv8vEWaP8cpg2%2FpgTbZ32dBsHpfO4lrsLKvjy4Y2uV89YfZoUnX0qK%2F7PXwUkO9Tw0S9yH%2FYDU1pTuSu9kOtrqp81KY3vbJGCNnpOguC3tpo8mmy9fHhUNYntwyIo719jPF95Jm49s77seOsx3IUw7bqbwAY6pgHArORxJTE2j%2FuI3CPQbKZXGDw0f%2B4nM6JuuelULkvqmNTPPxcpG%2Fe8ex7fhUzpBPKRdpJe4g9ynAc8R6wJeld8YiV715AhGAoNPCVgr%2FoydpzVYcy44uPU5WCScmvNL6NHTfnobjLXYuHLQb6to%2BBYDJ6SxPBX7wR0hbLSonW%2B5oZCL8JYvIXE6anp45vMnN2%2FA7zmIta5G%2FV6GyMCb2lMi3%2BgLQdP&X-Amz-Signature=2bf90afed8543f99e60735b8f0c222515d8a6d8e3758cf80a6ed21f20fc8e37d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7H3YJP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIA%2BnCH3Kg%2B2BGSc%2FQWWqTRRP6Rh0M%2BNN8fvHarjj6slTAiAvkeM5oAQUxRnOU0UE6wk1cmeGprWgTIfnEeb62bQgViqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMMa4EZqpl2e%2BCnmKtwDKJQdn%2Bd6aa%2BfzMYCB1zRUdJu%2FqEOKTXwk7YSZJ5WhJVO4PDvLZQ0lheZabms0stp%2FF%2B8NJ3rOxkJlAyJqyiXUWwykY30JF7srVGv5z7FfS11YgjQzBBnAGlZ6%2BtL%2F2ZKnrUJj0XsSHbNWPE13BRmpiBGXx4KM3im4LzK8pH8ng69v%2FBjeeiS7q8id9sfAMZos5EXX9jVb2ragezwkQ8IPQp39Hyth7qZidlDC3qK0i5PM%2FuCro0eErFWAlKG6EGErbz1mKF7dO2bSHnBk90p2aGmrYbLKMQ6GwH5PqoFAkxq9b25mr7rZIW%2F7O4OtG8zdjIsYVarqSkd6j1gM5QL34PgGe9sFX6TsuaHlsKRLmF2s7%2FOwFtWi4WURkFVI806boYlKLs80RDjkS0gnK%2FcdwMnGd9qDei%2B5bc50urEkA9gC48qZ7TLwIDAqf1HHGK6%2B7LxT38wWHPWyU0RQNwrIt7%2FGVtZ7CSJeKkVvkWrv8vEWaP8cpg2%2FpgTbZ32dBsHpfO4lrsLKvjy4Y2uV89YfZoUnX0qK%2F7PXwUkO9Tw0S9yH%2FYDU1pTuSu9kOtrqp81KY3vbJGCNnpOguC3tpo8mmy9fHhUNYntwyIo719jPF95Jm49s77seOsx3IUw7bqbwAY6pgHArORxJTE2j%2FuI3CPQbKZXGDw0f%2B4nM6JuuelULkvqmNTPPxcpG%2Fe8ex7fhUzpBPKRdpJe4g9ynAc8R6wJeld8YiV715AhGAoNPCVgr%2FoydpzVYcy44uPU5WCScmvNL6NHTfnobjLXYuHLQb6to%2BBYDJ6SxPBX7wR0hbLSonW%2B5oZCL8JYvIXE6anp45vMnN2%2FA7zmIta5G%2FV6GyMCb2lMi3%2BgLQdP&X-Amz-Signature=1639c5907e4282f329bcce5a97e94bfa25d673f559a110b11e6432d52a2be591&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7H3YJP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIA%2BnCH3Kg%2B2BGSc%2FQWWqTRRP6Rh0M%2BNN8fvHarjj6slTAiAvkeM5oAQUxRnOU0UE6wk1cmeGprWgTIfnEeb62bQgViqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMMa4EZqpl2e%2BCnmKtwDKJQdn%2Bd6aa%2BfzMYCB1zRUdJu%2FqEOKTXwk7YSZJ5WhJVO4PDvLZQ0lheZabms0stp%2FF%2B8NJ3rOxkJlAyJqyiXUWwykY30JF7srVGv5z7FfS11YgjQzBBnAGlZ6%2BtL%2F2ZKnrUJj0XsSHbNWPE13BRmpiBGXx4KM3im4LzK8pH8ng69v%2FBjeeiS7q8id9sfAMZos5EXX9jVb2ragezwkQ8IPQp39Hyth7qZidlDC3qK0i5PM%2FuCro0eErFWAlKG6EGErbz1mKF7dO2bSHnBk90p2aGmrYbLKMQ6GwH5PqoFAkxq9b25mr7rZIW%2F7O4OtG8zdjIsYVarqSkd6j1gM5QL34PgGe9sFX6TsuaHlsKRLmF2s7%2FOwFtWi4WURkFVI806boYlKLs80RDjkS0gnK%2FcdwMnGd9qDei%2B5bc50urEkA9gC48qZ7TLwIDAqf1HHGK6%2B7LxT38wWHPWyU0RQNwrIt7%2FGVtZ7CSJeKkVvkWrv8vEWaP8cpg2%2FpgTbZ32dBsHpfO4lrsLKvjy4Y2uV89YfZoUnX0qK%2F7PXwUkO9Tw0S9yH%2FYDU1pTuSu9kOtrqp81KY3vbJGCNnpOguC3tpo8mmy9fHhUNYntwyIo719jPF95Jm49s77seOsx3IUw7bqbwAY6pgHArORxJTE2j%2FuI3CPQbKZXGDw0f%2B4nM6JuuelULkvqmNTPPxcpG%2Fe8ex7fhUzpBPKRdpJe4g9ynAc8R6wJeld8YiV715AhGAoNPCVgr%2FoydpzVYcy44uPU5WCScmvNL6NHTfnobjLXYuHLQb6to%2BBYDJ6SxPBX7wR0hbLSonW%2B5oZCL8JYvIXE6anp45vMnN2%2FA7zmIta5G%2FV6GyMCb2lMi3%2BgLQdP&X-Amz-Signature=1f850431f5096f2d66ac923a5d8e95d557cbf70b5c12d90b3b2d0af79c106e52&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
