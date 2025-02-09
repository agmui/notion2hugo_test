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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFARGLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1M13ustQiaS3uYK5fhHOA5qJW5sC9NDfe%2B8pwggxzwIhAOPfRug5EhgDzQyskOch2uBVI6PZTYmn4iu9geaJK9OKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNfF%2BUoTR%2F2BNmPbUq3APmax5qXYJ8iU2BIZN9igxSRSxVtscnyIGeUfVuEPXAYzXe93YoT46438Rsf8ncKxXL9IVUa6QSYT2u8xpYkm%2FqofIVfRI0xx4g4HzLf7Dh8ImiW7eIkYjV9PrfNXU8879s89yqfXhA1KPrLGg5woz16Zt0iU19eiYor3mC49MxpzhEmZqozgMDpdIAq5w1j2gU%2FbdW7mpdkgZhXbOdkpYTXlj7l7Pn8tb8RqPj9zp%2BLsOftOLapo9VfdRJSaS2tEU1pDnHIoQ7XFOoNYtbdf8n19HoayZHwjst3MUPC14%2Fs1q8Q4qhGXhBVltcv6hR%2FXGdl5RKLBw%2BlgTFMir6U2YDqYu86gOrVaivk9ObEjy72NjVE5m7vOLxEeSM3UuYwwu5crofzfep9cthnBT0JgGd5TIZfJFx%2BHOzAJKu896V6gKUNikxT6NH2qak3L1QiyF7EPMNHxDz0fF5pqm8V%2BjFiF7LC4GltKAJBXazkw0r1mh8uRmPp7Fd3FACcDG8ukkGp5iKeCMHftUTNsuWR3kkTBVx08DjL15l5AnUGEKf32BHNEL7fbRibZApXwr5DfvBvhk3AdDVJFT0eBur7zhIyvKoVAKI6bi09OoOdA%2BKAS0Er4j5xz5lkq8e4zDu46G9BjqkAYlL2pVRtmhB%2BM%2BwJ6bkkVgd1CmIXX%2FvDTqA1veyTlNaStbjpqvLVoGh77IV59vOznKvvDbw8USgHIrmFDEBllbCfxwEu6XXeks3K41QgTn8eRvOKA%2BtHK8IvqkPJcCie4PaP4x8fiKNuA4aGcH4t5E%2FDwsH6uw%2BZKWiXcA%2BQTtQVVZTxHS3hj6loRQHY6kmEUujwnFRxSX8XolQeDFJeIBmlvC0&X-Amz-Signature=8c3442f0e0fe37db7e40346f5d23faecf2a8e152e04520181db2be16c8c11bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFARGLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1M13ustQiaS3uYK5fhHOA5qJW5sC9NDfe%2B8pwggxzwIhAOPfRug5EhgDzQyskOch2uBVI6PZTYmn4iu9geaJK9OKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNfF%2BUoTR%2F2BNmPbUq3APmax5qXYJ8iU2BIZN9igxSRSxVtscnyIGeUfVuEPXAYzXe93YoT46438Rsf8ncKxXL9IVUa6QSYT2u8xpYkm%2FqofIVfRI0xx4g4HzLf7Dh8ImiW7eIkYjV9PrfNXU8879s89yqfXhA1KPrLGg5woz16Zt0iU19eiYor3mC49MxpzhEmZqozgMDpdIAq5w1j2gU%2FbdW7mpdkgZhXbOdkpYTXlj7l7Pn8tb8RqPj9zp%2BLsOftOLapo9VfdRJSaS2tEU1pDnHIoQ7XFOoNYtbdf8n19HoayZHwjst3MUPC14%2Fs1q8Q4qhGXhBVltcv6hR%2FXGdl5RKLBw%2BlgTFMir6U2YDqYu86gOrVaivk9ObEjy72NjVE5m7vOLxEeSM3UuYwwu5crofzfep9cthnBT0JgGd5TIZfJFx%2BHOzAJKu896V6gKUNikxT6NH2qak3L1QiyF7EPMNHxDz0fF5pqm8V%2BjFiF7LC4GltKAJBXazkw0r1mh8uRmPp7Fd3FACcDG8ukkGp5iKeCMHftUTNsuWR3kkTBVx08DjL15l5AnUGEKf32BHNEL7fbRibZApXwr5DfvBvhk3AdDVJFT0eBur7zhIyvKoVAKI6bi09OoOdA%2BKAS0Er4j5xz5lkq8e4zDu46G9BjqkAYlL2pVRtmhB%2BM%2BwJ6bkkVgd1CmIXX%2FvDTqA1veyTlNaStbjpqvLVoGh77IV59vOznKvvDbw8USgHIrmFDEBllbCfxwEu6XXeks3K41QgTn8eRvOKA%2BtHK8IvqkPJcCie4PaP4x8fiKNuA4aGcH4t5E%2FDwsH6uw%2BZKWiXcA%2BQTtQVVZTxHS3hj6loRQHY6kmEUujwnFRxSX8XolQeDFJeIBmlvC0&X-Amz-Signature=aeac6862f499f58a01dd7cb9c8171a2b33a3dbb8ed28a6e49fd3b63239980cac&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFARGLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1M13ustQiaS3uYK5fhHOA5qJW5sC9NDfe%2B8pwggxzwIhAOPfRug5EhgDzQyskOch2uBVI6PZTYmn4iu9geaJK9OKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNfF%2BUoTR%2F2BNmPbUq3APmax5qXYJ8iU2BIZN9igxSRSxVtscnyIGeUfVuEPXAYzXe93YoT46438Rsf8ncKxXL9IVUa6QSYT2u8xpYkm%2FqofIVfRI0xx4g4HzLf7Dh8ImiW7eIkYjV9PrfNXU8879s89yqfXhA1KPrLGg5woz16Zt0iU19eiYor3mC49MxpzhEmZqozgMDpdIAq5w1j2gU%2FbdW7mpdkgZhXbOdkpYTXlj7l7Pn8tb8RqPj9zp%2BLsOftOLapo9VfdRJSaS2tEU1pDnHIoQ7XFOoNYtbdf8n19HoayZHwjst3MUPC14%2Fs1q8Q4qhGXhBVltcv6hR%2FXGdl5RKLBw%2BlgTFMir6U2YDqYu86gOrVaivk9ObEjy72NjVE5m7vOLxEeSM3UuYwwu5crofzfep9cthnBT0JgGd5TIZfJFx%2BHOzAJKu896V6gKUNikxT6NH2qak3L1QiyF7EPMNHxDz0fF5pqm8V%2BjFiF7LC4GltKAJBXazkw0r1mh8uRmPp7Fd3FACcDG8ukkGp5iKeCMHftUTNsuWR3kkTBVx08DjL15l5AnUGEKf32BHNEL7fbRibZApXwr5DfvBvhk3AdDVJFT0eBur7zhIyvKoVAKI6bi09OoOdA%2BKAS0Er4j5xz5lkq8e4zDu46G9BjqkAYlL2pVRtmhB%2BM%2BwJ6bkkVgd1CmIXX%2FvDTqA1veyTlNaStbjpqvLVoGh77IV59vOznKvvDbw8USgHIrmFDEBllbCfxwEu6XXeks3K41QgTn8eRvOKA%2BtHK8IvqkPJcCie4PaP4x8fiKNuA4aGcH4t5E%2FDwsH6uw%2BZKWiXcA%2BQTtQVVZTxHS3hj6loRQHY6kmEUujwnFRxSX8XolQeDFJeIBmlvC0&X-Amz-Signature=3c244af93dbaf26d249bc0b76def3cab0b631fce229140fd08f2510ad098f1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFARGLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1M13ustQiaS3uYK5fhHOA5qJW5sC9NDfe%2B8pwggxzwIhAOPfRug5EhgDzQyskOch2uBVI6PZTYmn4iu9geaJK9OKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNfF%2BUoTR%2F2BNmPbUq3APmax5qXYJ8iU2BIZN9igxSRSxVtscnyIGeUfVuEPXAYzXe93YoT46438Rsf8ncKxXL9IVUa6QSYT2u8xpYkm%2FqofIVfRI0xx4g4HzLf7Dh8ImiW7eIkYjV9PrfNXU8879s89yqfXhA1KPrLGg5woz16Zt0iU19eiYor3mC49MxpzhEmZqozgMDpdIAq5w1j2gU%2FbdW7mpdkgZhXbOdkpYTXlj7l7Pn8tb8RqPj9zp%2BLsOftOLapo9VfdRJSaS2tEU1pDnHIoQ7XFOoNYtbdf8n19HoayZHwjst3MUPC14%2Fs1q8Q4qhGXhBVltcv6hR%2FXGdl5RKLBw%2BlgTFMir6U2YDqYu86gOrVaivk9ObEjy72NjVE5m7vOLxEeSM3UuYwwu5crofzfep9cthnBT0JgGd5TIZfJFx%2BHOzAJKu896V6gKUNikxT6NH2qak3L1QiyF7EPMNHxDz0fF5pqm8V%2BjFiF7LC4GltKAJBXazkw0r1mh8uRmPp7Fd3FACcDG8ukkGp5iKeCMHftUTNsuWR3kkTBVx08DjL15l5AnUGEKf32BHNEL7fbRibZApXwr5DfvBvhk3AdDVJFT0eBur7zhIyvKoVAKI6bi09OoOdA%2BKAS0Er4j5xz5lkq8e4zDu46G9BjqkAYlL2pVRtmhB%2BM%2BwJ6bkkVgd1CmIXX%2FvDTqA1veyTlNaStbjpqvLVoGh77IV59vOznKvvDbw8USgHIrmFDEBllbCfxwEu6XXeks3K41QgTn8eRvOKA%2BtHK8IvqkPJcCie4PaP4x8fiKNuA4aGcH4t5E%2FDwsH6uw%2BZKWiXcA%2BQTtQVVZTxHS3hj6loRQHY6kmEUujwnFRxSX8XolQeDFJeIBmlvC0&X-Amz-Signature=7f15650f3ed7bf206778e20a47e9652713b975db16be21c83b2cee785ec3b7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFARGLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1M13ustQiaS3uYK5fhHOA5qJW5sC9NDfe%2B8pwggxzwIhAOPfRug5EhgDzQyskOch2uBVI6PZTYmn4iu9geaJK9OKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNfF%2BUoTR%2F2BNmPbUq3APmax5qXYJ8iU2BIZN9igxSRSxVtscnyIGeUfVuEPXAYzXe93YoT46438Rsf8ncKxXL9IVUa6QSYT2u8xpYkm%2FqofIVfRI0xx4g4HzLf7Dh8ImiW7eIkYjV9PrfNXU8879s89yqfXhA1KPrLGg5woz16Zt0iU19eiYor3mC49MxpzhEmZqozgMDpdIAq5w1j2gU%2FbdW7mpdkgZhXbOdkpYTXlj7l7Pn8tb8RqPj9zp%2BLsOftOLapo9VfdRJSaS2tEU1pDnHIoQ7XFOoNYtbdf8n19HoayZHwjst3MUPC14%2Fs1q8Q4qhGXhBVltcv6hR%2FXGdl5RKLBw%2BlgTFMir6U2YDqYu86gOrVaivk9ObEjy72NjVE5m7vOLxEeSM3UuYwwu5crofzfep9cthnBT0JgGd5TIZfJFx%2BHOzAJKu896V6gKUNikxT6NH2qak3L1QiyF7EPMNHxDz0fF5pqm8V%2BjFiF7LC4GltKAJBXazkw0r1mh8uRmPp7Fd3FACcDG8ukkGp5iKeCMHftUTNsuWR3kkTBVx08DjL15l5AnUGEKf32BHNEL7fbRibZApXwr5DfvBvhk3AdDVJFT0eBur7zhIyvKoVAKI6bi09OoOdA%2BKAS0Er4j5xz5lkq8e4zDu46G9BjqkAYlL2pVRtmhB%2BM%2BwJ6bkkVgd1CmIXX%2FvDTqA1veyTlNaStbjpqvLVoGh77IV59vOznKvvDbw8USgHIrmFDEBllbCfxwEu6XXeks3K41QgTn8eRvOKA%2BtHK8IvqkPJcCie4PaP4x8fiKNuA4aGcH4t5E%2FDwsH6uw%2BZKWiXcA%2BQTtQVVZTxHS3hj6loRQHY6kmEUujwnFRxSX8XolQeDFJeIBmlvC0&X-Amz-Signature=7dc9d3a1f62f82008c61eede07efd9a0b97b725b54a477fa0b6b98ce64db16da&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFARGLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1M13ustQiaS3uYK5fhHOA5qJW5sC9NDfe%2B8pwggxzwIhAOPfRug5EhgDzQyskOch2uBVI6PZTYmn4iu9geaJK9OKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNfF%2BUoTR%2F2BNmPbUq3APmax5qXYJ8iU2BIZN9igxSRSxVtscnyIGeUfVuEPXAYzXe93YoT46438Rsf8ncKxXL9IVUa6QSYT2u8xpYkm%2FqofIVfRI0xx4g4HzLf7Dh8ImiW7eIkYjV9PrfNXU8879s89yqfXhA1KPrLGg5woz16Zt0iU19eiYor3mC49MxpzhEmZqozgMDpdIAq5w1j2gU%2FbdW7mpdkgZhXbOdkpYTXlj7l7Pn8tb8RqPj9zp%2BLsOftOLapo9VfdRJSaS2tEU1pDnHIoQ7XFOoNYtbdf8n19HoayZHwjst3MUPC14%2Fs1q8Q4qhGXhBVltcv6hR%2FXGdl5RKLBw%2BlgTFMir6U2YDqYu86gOrVaivk9ObEjy72NjVE5m7vOLxEeSM3UuYwwu5crofzfep9cthnBT0JgGd5TIZfJFx%2BHOzAJKu896V6gKUNikxT6NH2qak3L1QiyF7EPMNHxDz0fF5pqm8V%2BjFiF7LC4GltKAJBXazkw0r1mh8uRmPp7Fd3FACcDG8ukkGp5iKeCMHftUTNsuWR3kkTBVx08DjL15l5AnUGEKf32BHNEL7fbRibZApXwr5DfvBvhk3AdDVJFT0eBur7zhIyvKoVAKI6bi09OoOdA%2BKAS0Er4j5xz5lkq8e4zDu46G9BjqkAYlL2pVRtmhB%2BM%2BwJ6bkkVgd1CmIXX%2FvDTqA1veyTlNaStbjpqvLVoGh77IV59vOznKvvDbw8USgHIrmFDEBllbCfxwEu6XXeks3K41QgTn8eRvOKA%2BtHK8IvqkPJcCie4PaP4x8fiKNuA4aGcH4t5E%2FDwsH6uw%2BZKWiXcA%2BQTtQVVZTxHS3hj6loRQHY6kmEUujwnFRxSX8XolQeDFJeIBmlvC0&X-Amz-Signature=424b5d32c957dca92abba46957a057ce4afe4c426edca0b16b90c944075b87b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFARGLH%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1M13ustQiaS3uYK5fhHOA5qJW5sC9NDfe%2B8pwggxzwIhAOPfRug5EhgDzQyskOch2uBVI6PZTYmn4iu9geaJK9OKKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNfF%2BUoTR%2F2BNmPbUq3APmax5qXYJ8iU2BIZN9igxSRSxVtscnyIGeUfVuEPXAYzXe93YoT46438Rsf8ncKxXL9IVUa6QSYT2u8xpYkm%2FqofIVfRI0xx4g4HzLf7Dh8ImiW7eIkYjV9PrfNXU8879s89yqfXhA1KPrLGg5woz16Zt0iU19eiYor3mC49MxpzhEmZqozgMDpdIAq5w1j2gU%2FbdW7mpdkgZhXbOdkpYTXlj7l7Pn8tb8RqPj9zp%2BLsOftOLapo9VfdRJSaS2tEU1pDnHIoQ7XFOoNYtbdf8n19HoayZHwjst3MUPC14%2Fs1q8Q4qhGXhBVltcv6hR%2FXGdl5RKLBw%2BlgTFMir6U2YDqYu86gOrVaivk9ObEjy72NjVE5m7vOLxEeSM3UuYwwu5crofzfep9cthnBT0JgGd5TIZfJFx%2BHOzAJKu896V6gKUNikxT6NH2qak3L1QiyF7EPMNHxDz0fF5pqm8V%2BjFiF7LC4GltKAJBXazkw0r1mh8uRmPp7Fd3FACcDG8ukkGp5iKeCMHftUTNsuWR3kkTBVx08DjL15l5AnUGEKf32BHNEL7fbRibZApXwr5DfvBvhk3AdDVJFT0eBur7zhIyvKoVAKI6bi09OoOdA%2BKAS0Er4j5xz5lkq8e4zDu46G9BjqkAYlL2pVRtmhB%2BM%2BwJ6bkkVgd1CmIXX%2FvDTqA1veyTlNaStbjpqvLVoGh77IV59vOznKvvDbw8USgHIrmFDEBllbCfxwEu6XXeks3K41QgTn8eRvOKA%2BtHK8IvqkPJcCie4PaP4x8fiKNuA4aGcH4t5E%2FDwsH6uw%2BZKWiXcA%2BQTtQVVZTxHS3hj6loRQHY6kmEUujwnFRxSX8XolQeDFJeIBmlvC0&X-Amz-Signature=10d4f9e90c1f8a0c8820df2b830c05d8e97f1f00cc6aa3e3b2b36f981a8406e1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
