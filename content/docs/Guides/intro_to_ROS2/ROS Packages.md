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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXIBLC4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDxUERExBAG87D4yYiJsorgNUhFNEoNQhIU%2FZ9blgJ1dQIhAJwFjYJJEKoZw%2FSho%2Ba9A1WHkDP4TqFchxmUVZpbuTtFKv8DCEUQABoMNjM3NDIzMTgzODA1IgyWCyWbT7x5%2FV6HBo4q3ANEAC1ff29DSyOEHdnZW8duAq4cLunCJWsrUvsbOkUPB2kpIiuqfIyAzHcDFToxh53Nii4JZTP1iJ2%2FKEzvYoGqVDejyG%2FqAYdZ%2BvlpvhzDvPANghDQA3X%2FIDa%2FuGooaxxFCGQUgsGwiYOG8dXUNQbU8lzLi6cx3SClZrVoJMlTFxQTCLiwAxSKWUubhTfJk6cBc8%2BLbWuKK1lPWKPuvk87DeLXy5XjwXeQ%2FwarzRtnbxHPhWk3JiZ94xM%2FHs9rutU%2BmouZTTj6%2FDsV3NGTR8l8KalNsV0ws6yVUj8WKDhe4uhrAXpaQggrJhtCuUNi0m%2F%2F6LYLPJFEV7GMIZUurZeH%2FYNZePZgGllFlYbw7Uc5kEjvHlGyYrKjFi60VC1yK%2F%2FJgtNRTd5OthGtsIFk4zesBsw04x14SbqLqvFAZIhzmEeQ9JIam97cisCjxnFYOieY0XzYQxiev5JSn226cGtLWfbPphGFIWv4XWljqr57DGaVZH4qKFb8LYBVzoXmGpA%2BGI3Jle9pqqKKDG4srifyrQcsz6pEtT5J3thX37XRj6rm8kf7yp79ny7xD7kS05EgH5DkjUu6%2BiFrY8q0QC2WXhYCFVk%2FjxXWUbCfs9YBJXaQu9q32TFwE4EO8TCRhNnDBjqkAfM3M%2B8a35xZCmRRh4nP8AJcDAR4Dv59IiOebE5Vx%2BpmuhJZA6qYlbxaq1HPbO%2FShv7mMnrqfSFL6%2Fm%2B2VSocF4IdpNftfJYN7mljCW4D3bJ5kjv0A37Mt%2BZOeupd3iuHh4i9EOXCLPg9kMWF5LcrG3yE2XCioR8lDIJScZyavFG6mOyD2sr0yTvvuROEHftwloH0u0G8monieQeNKcVyMAC5uDi&X-Amz-Signature=743ca6729dc60f830d8d077c9313b9400f56ff73ca89906ff7178f01d7be07e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXIBLC4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDxUERExBAG87D4yYiJsorgNUhFNEoNQhIU%2FZ9blgJ1dQIhAJwFjYJJEKoZw%2FSho%2Ba9A1WHkDP4TqFchxmUVZpbuTtFKv8DCEUQABoMNjM3NDIzMTgzODA1IgyWCyWbT7x5%2FV6HBo4q3ANEAC1ff29DSyOEHdnZW8duAq4cLunCJWsrUvsbOkUPB2kpIiuqfIyAzHcDFToxh53Nii4JZTP1iJ2%2FKEzvYoGqVDejyG%2FqAYdZ%2BvlpvhzDvPANghDQA3X%2FIDa%2FuGooaxxFCGQUgsGwiYOG8dXUNQbU8lzLi6cx3SClZrVoJMlTFxQTCLiwAxSKWUubhTfJk6cBc8%2BLbWuKK1lPWKPuvk87DeLXy5XjwXeQ%2FwarzRtnbxHPhWk3JiZ94xM%2FHs9rutU%2BmouZTTj6%2FDsV3NGTR8l8KalNsV0ws6yVUj8WKDhe4uhrAXpaQggrJhtCuUNi0m%2F%2F6LYLPJFEV7GMIZUurZeH%2FYNZePZgGllFlYbw7Uc5kEjvHlGyYrKjFi60VC1yK%2F%2FJgtNRTd5OthGtsIFk4zesBsw04x14SbqLqvFAZIhzmEeQ9JIam97cisCjxnFYOieY0XzYQxiev5JSn226cGtLWfbPphGFIWv4XWljqr57DGaVZH4qKFb8LYBVzoXmGpA%2BGI3Jle9pqqKKDG4srifyrQcsz6pEtT5J3thX37XRj6rm8kf7yp79ny7xD7kS05EgH5DkjUu6%2BiFrY8q0QC2WXhYCFVk%2FjxXWUbCfs9YBJXaQu9q32TFwE4EO8TCRhNnDBjqkAfM3M%2B8a35xZCmRRh4nP8AJcDAR4Dv59IiOebE5Vx%2BpmuhJZA6qYlbxaq1HPbO%2FShv7mMnrqfSFL6%2Fm%2B2VSocF4IdpNftfJYN7mljCW4D3bJ5kjv0A37Mt%2BZOeupd3iuHh4i9EOXCLPg9kMWF5LcrG3yE2XCioR8lDIJScZyavFG6mOyD2sr0yTvvuROEHftwloH0u0G8monieQeNKcVyMAC5uDi&X-Amz-Signature=88b70390e7b09b972fa7148bd2b8f7305e4cdd3b6ec4b67c7bfb17cc75a3a38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXIBLC4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDxUERExBAG87D4yYiJsorgNUhFNEoNQhIU%2FZ9blgJ1dQIhAJwFjYJJEKoZw%2FSho%2Ba9A1WHkDP4TqFchxmUVZpbuTtFKv8DCEUQABoMNjM3NDIzMTgzODA1IgyWCyWbT7x5%2FV6HBo4q3ANEAC1ff29DSyOEHdnZW8duAq4cLunCJWsrUvsbOkUPB2kpIiuqfIyAzHcDFToxh53Nii4JZTP1iJ2%2FKEzvYoGqVDejyG%2FqAYdZ%2BvlpvhzDvPANghDQA3X%2FIDa%2FuGooaxxFCGQUgsGwiYOG8dXUNQbU8lzLi6cx3SClZrVoJMlTFxQTCLiwAxSKWUubhTfJk6cBc8%2BLbWuKK1lPWKPuvk87DeLXy5XjwXeQ%2FwarzRtnbxHPhWk3JiZ94xM%2FHs9rutU%2BmouZTTj6%2FDsV3NGTR8l8KalNsV0ws6yVUj8WKDhe4uhrAXpaQggrJhtCuUNi0m%2F%2F6LYLPJFEV7GMIZUurZeH%2FYNZePZgGllFlYbw7Uc5kEjvHlGyYrKjFi60VC1yK%2F%2FJgtNRTd5OthGtsIFk4zesBsw04x14SbqLqvFAZIhzmEeQ9JIam97cisCjxnFYOieY0XzYQxiev5JSn226cGtLWfbPphGFIWv4XWljqr57DGaVZH4qKFb8LYBVzoXmGpA%2BGI3Jle9pqqKKDG4srifyrQcsz6pEtT5J3thX37XRj6rm8kf7yp79ny7xD7kS05EgH5DkjUu6%2BiFrY8q0QC2WXhYCFVk%2FjxXWUbCfs9YBJXaQu9q32TFwE4EO8TCRhNnDBjqkAfM3M%2B8a35xZCmRRh4nP8AJcDAR4Dv59IiOebE5Vx%2BpmuhJZA6qYlbxaq1HPbO%2FShv7mMnrqfSFL6%2Fm%2B2VSocF4IdpNftfJYN7mljCW4D3bJ5kjv0A37Mt%2BZOeupd3iuHh4i9EOXCLPg9kMWF5LcrG3yE2XCioR8lDIJScZyavFG6mOyD2sr0yTvvuROEHftwloH0u0G8monieQeNKcVyMAC5uDi&X-Amz-Signature=4d93eaea9f7c1c8ec00250d7534072ddfb2f0e016194cd0ff3d46958eb91e434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXIBLC4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDxUERExBAG87D4yYiJsorgNUhFNEoNQhIU%2FZ9blgJ1dQIhAJwFjYJJEKoZw%2FSho%2Ba9A1WHkDP4TqFchxmUVZpbuTtFKv8DCEUQABoMNjM3NDIzMTgzODA1IgyWCyWbT7x5%2FV6HBo4q3ANEAC1ff29DSyOEHdnZW8duAq4cLunCJWsrUvsbOkUPB2kpIiuqfIyAzHcDFToxh53Nii4JZTP1iJ2%2FKEzvYoGqVDejyG%2FqAYdZ%2BvlpvhzDvPANghDQA3X%2FIDa%2FuGooaxxFCGQUgsGwiYOG8dXUNQbU8lzLi6cx3SClZrVoJMlTFxQTCLiwAxSKWUubhTfJk6cBc8%2BLbWuKK1lPWKPuvk87DeLXy5XjwXeQ%2FwarzRtnbxHPhWk3JiZ94xM%2FHs9rutU%2BmouZTTj6%2FDsV3NGTR8l8KalNsV0ws6yVUj8WKDhe4uhrAXpaQggrJhtCuUNi0m%2F%2F6LYLPJFEV7GMIZUurZeH%2FYNZePZgGllFlYbw7Uc5kEjvHlGyYrKjFi60VC1yK%2F%2FJgtNRTd5OthGtsIFk4zesBsw04x14SbqLqvFAZIhzmEeQ9JIam97cisCjxnFYOieY0XzYQxiev5JSn226cGtLWfbPphGFIWv4XWljqr57DGaVZH4qKFb8LYBVzoXmGpA%2BGI3Jle9pqqKKDG4srifyrQcsz6pEtT5J3thX37XRj6rm8kf7yp79ny7xD7kS05EgH5DkjUu6%2BiFrY8q0QC2WXhYCFVk%2FjxXWUbCfs9YBJXaQu9q32TFwE4EO8TCRhNnDBjqkAfM3M%2B8a35xZCmRRh4nP8AJcDAR4Dv59IiOebE5Vx%2BpmuhJZA6qYlbxaq1HPbO%2FShv7mMnrqfSFL6%2Fm%2B2VSocF4IdpNftfJYN7mljCW4D3bJ5kjv0A37Mt%2BZOeupd3iuHh4i9EOXCLPg9kMWF5LcrG3yE2XCioR8lDIJScZyavFG6mOyD2sr0yTvvuROEHftwloH0u0G8monieQeNKcVyMAC5uDi&X-Amz-Signature=900c69472e9ad5dd0a661016283feb0b8e4a393bc76551f938b562e95699e307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXIBLC4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDxUERExBAG87D4yYiJsorgNUhFNEoNQhIU%2FZ9blgJ1dQIhAJwFjYJJEKoZw%2FSho%2Ba9A1WHkDP4TqFchxmUVZpbuTtFKv8DCEUQABoMNjM3NDIzMTgzODA1IgyWCyWbT7x5%2FV6HBo4q3ANEAC1ff29DSyOEHdnZW8duAq4cLunCJWsrUvsbOkUPB2kpIiuqfIyAzHcDFToxh53Nii4JZTP1iJ2%2FKEzvYoGqVDejyG%2FqAYdZ%2BvlpvhzDvPANghDQA3X%2FIDa%2FuGooaxxFCGQUgsGwiYOG8dXUNQbU8lzLi6cx3SClZrVoJMlTFxQTCLiwAxSKWUubhTfJk6cBc8%2BLbWuKK1lPWKPuvk87DeLXy5XjwXeQ%2FwarzRtnbxHPhWk3JiZ94xM%2FHs9rutU%2BmouZTTj6%2FDsV3NGTR8l8KalNsV0ws6yVUj8WKDhe4uhrAXpaQggrJhtCuUNi0m%2F%2F6LYLPJFEV7GMIZUurZeH%2FYNZePZgGllFlYbw7Uc5kEjvHlGyYrKjFi60VC1yK%2F%2FJgtNRTd5OthGtsIFk4zesBsw04x14SbqLqvFAZIhzmEeQ9JIam97cisCjxnFYOieY0XzYQxiev5JSn226cGtLWfbPphGFIWv4XWljqr57DGaVZH4qKFb8LYBVzoXmGpA%2BGI3Jle9pqqKKDG4srifyrQcsz6pEtT5J3thX37XRj6rm8kf7yp79ny7xD7kS05EgH5DkjUu6%2BiFrY8q0QC2WXhYCFVk%2FjxXWUbCfs9YBJXaQu9q32TFwE4EO8TCRhNnDBjqkAfM3M%2B8a35xZCmRRh4nP8AJcDAR4Dv59IiOebE5Vx%2BpmuhJZA6qYlbxaq1HPbO%2FShv7mMnrqfSFL6%2Fm%2B2VSocF4IdpNftfJYN7mljCW4D3bJ5kjv0A37Mt%2BZOeupd3iuHh4i9EOXCLPg9kMWF5LcrG3yE2XCioR8lDIJScZyavFG6mOyD2sr0yTvvuROEHftwloH0u0G8monieQeNKcVyMAC5uDi&X-Amz-Signature=d778ff39b3d7a4300ada2bfb3a457b5417b667d70185f13367c06a9a9c04f935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXIBLC4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDxUERExBAG87D4yYiJsorgNUhFNEoNQhIU%2FZ9blgJ1dQIhAJwFjYJJEKoZw%2FSho%2Ba9A1WHkDP4TqFchxmUVZpbuTtFKv8DCEUQABoMNjM3NDIzMTgzODA1IgyWCyWbT7x5%2FV6HBo4q3ANEAC1ff29DSyOEHdnZW8duAq4cLunCJWsrUvsbOkUPB2kpIiuqfIyAzHcDFToxh53Nii4JZTP1iJ2%2FKEzvYoGqVDejyG%2FqAYdZ%2BvlpvhzDvPANghDQA3X%2FIDa%2FuGooaxxFCGQUgsGwiYOG8dXUNQbU8lzLi6cx3SClZrVoJMlTFxQTCLiwAxSKWUubhTfJk6cBc8%2BLbWuKK1lPWKPuvk87DeLXy5XjwXeQ%2FwarzRtnbxHPhWk3JiZ94xM%2FHs9rutU%2BmouZTTj6%2FDsV3NGTR8l8KalNsV0ws6yVUj8WKDhe4uhrAXpaQggrJhtCuUNi0m%2F%2F6LYLPJFEV7GMIZUurZeH%2FYNZePZgGllFlYbw7Uc5kEjvHlGyYrKjFi60VC1yK%2F%2FJgtNRTd5OthGtsIFk4zesBsw04x14SbqLqvFAZIhzmEeQ9JIam97cisCjxnFYOieY0XzYQxiev5JSn226cGtLWfbPphGFIWv4XWljqr57DGaVZH4qKFb8LYBVzoXmGpA%2BGI3Jle9pqqKKDG4srifyrQcsz6pEtT5J3thX37XRj6rm8kf7yp79ny7xD7kS05EgH5DkjUu6%2BiFrY8q0QC2WXhYCFVk%2FjxXWUbCfs9YBJXaQu9q32TFwE4EO8TCRhNnDBjqkAfM3M%2B8a35xZCmRRh4nP8AJcDAR4Dv59IiOebE5Vx%2BpmuhJZA6qYlbxaq1HPbO%2FShv7mMnrqfSFL6%2Fm%2B2VSocF4IdpNftfJYN7mljCW4D3bJ5kjv0A37Mt%2BZOeupd3iuHh4i9EOXCLPg9kMWF5LcrG3yE2XCioR8lDIJScZyavFG6mOyD2sr0yTvvuROEHftwloH0u0G8monieQeNKcVyMAC5uDi&X-Amz-Signature=3f250161c7d0c2d4922200c8c3aecd3e632bce7f957a4d2cf71e8a0b72eb41ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXIBLC4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDxUERExBAG87D4yYiJsorgNUhFNEoNQhIU%2FZ9blgJ1dQIhAJwFjYJJEKoZw%2FSho%2Ba9A1WHkDP4TqFchxmUVZpbuTtFKv8DCEUQABoMNjM3NDIzMTgzODA1IgyWCyWbT7x5%2FV6HBo4q3ANEAC1ff29DSyOEHdnZW8duAq4cLunCJWsrUvsbOkUPB2kpIiuqfIyAzHcDFToxh53Nii4JZTP1iJ2%2FKEzvYoGqVDejyG%2FqAYdZ%2BvlpvhzDvPANghDQA3X%2FIDa%2FuGooaxxFCGQUgsGwiYOG8dXUNQbU8lzLi6cx3SClZrVoJMlTFxQTCLiwAxSKWUubhTfJk6cBc8%2BLbWuKK1lPWKPuvk87DeLXy5XjwXeQ%2FwarzRtnbxHPhWk3JiZ94xM%2FHs9rutU%2BmouZTTj6%2FDsV3NGTR8l8KalNsV0ws6yVUj8WKDhe4uhrAXpaQggrJhtCuUNi0m%2F%2F6LYLPJFEV7GMIZUurZeH%2FYNZePZgGllFlYbw7Uc5kEjvHlGyYrKjFi60VC1yK%2F%2FJgtNRTd5OthGtsIFk4zesBsw04x14SbqLqvFAZIhzmEeQ9JIam97cisCjxnFYOieY0XzYQxiev5JSn226cGtLWfbPphGFIWv4XWljqr57DGaVZH4qKFb8LYBVzoXmGpA%2BGI3Jle9pqqKKDG4srifyrQcsz6pEtT5J3thX37XRj6rm8kf7yp79ny7xD7kS05EgH5DkjUu6%2BiFrY8q0QC2WXhYCFVk%2FjxXWUbCfs9YBJXaQu9q32TFwE4EO8TCRhNnDBjqkAfM3M%2B8a35xZCmRRh4nP8AJcDAR4Dv59IiOebE5Vx%2BpmuhJZA6qYlbxaq1HPbO%2FShv7mMnrqfSFL6%2Fm%2B2VSocF4IdpNftfJYN7mljCW4D3bJ5kjv0A37Mt%2BZOeupd3iuHh4i9EOXCLPg9kMWF5LcrG3yE2XCioR8lDIJScZyavFG6mOyD2sr0yTvvuROEHftwloH0u0G8monieQeNKcVyMAC5uDi&X-Amz-Signature=a7ec11ee585fa7925e6587f8ee32b5f369f77612d303316442ca42380da67e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
