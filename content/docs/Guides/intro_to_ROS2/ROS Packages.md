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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUY5HYZR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErv8QMBkhQTJX%2FS36%2F4anjVCp0pMFtWzPc4JwpqSZwGAiAvDO3IdnKMLT6cV1zSuheyFumy4OR4GAXFHJjxJdpZ0yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeawAmok%2BPLB80hntKtwDbjxK8GkAxfw9zgJ60jx1vkXF3YPZTuK1DWGkVGfwqJmEflMzLcQBqXEEZDOmHVH2nEwBwa4QIURbwiNcK84%2Fng77fZ7Kh4P58C6I39xsjxm8YfZ1BafjSU8Z6TNHeiNjZOJoWGYBMl0zTRPQekx7ljom%2FDbChDofDHik2Y%2F0e3GRJIGCe9D727Rp8X3jNWEfjtPVr%2BiI2r%2BkMzqX%2B6PmQoNFfKtLDdYUirLyMPZYBghimwdk%2BtoXsbmIfKzFrzKPCjQoAVHf8iJxr3yJtvzxQ8zYM1mW4KQEWfVGQXN5n0KbGIhPknO8JBvb%2BIjw9ymGUeVJLNSncz%2FJT6XKbjbk%2B1m7VXb3KVjKHa6CSHULPITGsC4d17pwElgo40Sk3bMe5iJrPon9RzIZED0jVqeqtZduyZN3KLZaokOZ6Se0Wo7gyO0WhQ9xU0bxA8uW0l%2F7NE4HJfIXUIhGm%2FO%2BUON7DNDkRryjdhsf610CKSgWDMxsTv5cSK6I6bSFTRWkiFVKi5cjnTFlFegPBcLJ4e8Cxk3iqGAV1wRO01CMpjendZ49Iv76BKVY2A7Wt3EPVYdiUTf9US4HTfkO6jDJt3kdZXJwqKcpwiD2Jjy6cov5N2SGeDkVoYlX3UyvpzgwlqPgvQY6pgEwFXn35a1%2F6nAwoLVN1Pi1ZOTyxfNIC6Tk7GsiKWGrgJ8ecIouIYX0KGwG0lkR%2F71t5xFu6Sfi1oqEeEksK7g1xZWnKJNUTWPX2ZXY1vY2F9ViHjPi%2FXV795ma5BfLSv9BMmg%2F7v5IplUd0maMVrRCLPvBO97JVwwK00iqakkDNN6HOCpzpDr3C%2B%2BrqJrRRIrTPqtBy%2BXaircg6wCfzkk6rqMJ99ie&X-Amz-Signature=b8fff0663672adc25fb078e3181671376f4440c643462ff5ab3e7e4e1e7b60e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUY5HYZR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErv8QMBkhQTJX%2FS36%2F4anjVCp0pMFtWzPc4JwpqSZwGAiAvDO3IdnKMLT6cV1zSuheyFumy4OR4GAXFHJjxJdpZ0yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeawAmok%2BPLB80hntKtwDbjxK8GkAxfw9zgJ60jx1vkXF3YPZTuK1DWGkVGfwqJmEflMzLcQBqXEEZDOmHVH2nEwBwa4QIURbwiNcK84%2Fng77fZ7Kh4P58C6I39xsjxm8YfZ1BafjSU8Z6TNHeiNjZOJoWGYBMl0zTRPQekx7ljom%2FDbChDofDHik2Y%2F0e3GRJIGCe9D727Rp8X3jNWEfjtPVr%2BiI2r%2BkMzqX%2B6PmQoNFfKtLDdYUirLyMPZYBghimwdk%2BtoXsbmIfKzFrzKPCjQoAVHf8iJxr3yJtvzxQ8zYM1mW4KQEWfVGQXN5n0KbGIhPknO8JBvb%2BIjw9ymGUeVJLNSncz%2FJT6XKbjbk%2B1m7VXb3KVjKHa6CSHULPITGsC4d17pwElgo40Sk3bMe5iJrPon9RzIZED0jVqeqtZduyZN3KLZaokOZ6Se0Wo7gyO0WhQ9xU0bxA8uW0l%2F7NE4HJfIXUIhGm%2FO%2BUON7DNDkRryjdhsf610CKSgWDMxsTv5cSK6I6bSFTRWkiFVKi5cjnTFlFegPBcLJ4e8Cxk3iqGAV1wRO01CMpjendZ49Iv76BKVY2A7Wt3EPVYdiUTf9US4HTfkO6jDJt3kdZXJwqKcpwiD2Jjy6cov5N2SGeDkVoYlX3UyvpzgwlqPgvQY6pgEwFXn35a1%2F6nAwoLVN1Pi1ZOTyxfNIC6Tk7GsiKWGrgJ8ecIouIYX0KGwG0lkR%2F71t5xFu6Sfi1oqEeEksK7g1xZWnKJNUTWPX2ZXY1vY2F9ViHjPi%2FXV795ma5BfLSv9BMmg%2F7v5IplUd0maMVrRCLPvBO97JVwwK00iqakkDNN6HOCpzpDr3C%2B%2BrqJrRRIrTPqtBy%2BXaircg6wCfzkk6rqMJ99ie&X-Amz-Signature=2b122e6524bcf53aca51a7c5a4c0aa555d3a6bd4063b910cf28fe582a1ba122f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUY5HYZR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErv8QMBkhQTJX%2FS36%2F4anjVCp0pMFtWzPc4JwpqSZwGAiAvDO3IdnKMLT6cV1zSuheyFumy4OR4GAXFHJjxJdpZ0yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeawAmok%2BPLB80hntKtwDbjxK8GkAxfw9zgJ60jx1vkXF3YPZTuK1DWGkVGfwqJmEflMzLcQBqXEEZDOmHVH2nEwBwa4QIURbwiNcK84%2Fng77fZ7Kh4P58C6I39xsjxm8YfZ1BafjSU8Z6TNHeiNjZOJoWGYBMl0zTRPQekx7ljom%2FDbChDofDHik2Y%2F0e3GRJIGCe9D727Rp8X3jNWEfjtPVr%2BiI2r%2BkMzqX%2B6PmQoNFfKtLDdYUirLyMPZYBghimwdk%2BtoXsbmIfKzFrzKPCjQoAVHf8iJxr3yJtvzxQ8zYM1mW4KQEWfVGQXN5n0KbGIhPknO8JBvb%2BIjw9ymGUeVJLNSncz%2FJT6XKbjbk%2B1m7VXb3KVjKHa6CSHULPITGsC4d17pwElgo40Sk3bMe5iJrPon9RzIZED0jVqeqtZduyZN3KLZaokOZ6Se0Wo7gyO0WhQ9xU0bxA8uW0l%2F7NE4HJfIXUIhGm%2FO%2BUON7DNDkRryjdhsf610CKSgWDMxsTv5cSK6I6bSFTRWkiFVKi5cjnTFlFegPBcLJ4e8Cxk3iqGAV1wRO01CMpjendZ49Iv76BKVY2A7Wt3EPVYdiUTf9US4HTfkO6jDJt3kdZXJwqKcpwiD2Jjy6cov5N2SGeDkVoYlX3UyvpzgwlqPgvQY6pgEwFXn35a1%2F6nAwoLVN1Pi1ZOTyxfNIC6Tk7GsiKWGrgJ8ecIouIYX0KGwG0lkR%2F71t5xFu6Sfi1oqEeEksK7g1xZWnKJNUTWPX2ZXY1vY2F9ViHjPi%2FXV795ma5BfLSv9BMmg%2F7v5IplUd0maMVrRCLPvBO97JVwwK00iqakkDNN6HOCpzpDr3C%2B%2BrqJrRRIrTPqtBy%2BXaircg6wCfzkk6rqMJ99ie&X-Amz-Signature=cc33f91c4753240e0da5b54d0104b83d8bccccc0316e100332c05da13988e8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUY5HYZR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErv8QMBkhQTJX%2FS36%2F4anjVCp0pMFtWzPc4JwpqSZwGAiAvDO3IdnKMLT6cV1zSuheyFumy4OR4GAXFHJjxJdpZ0yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeawAmok%2BPLB80hntKtwDbjxK8GkAxfw9zgJ60jx1vkXF3YPZTuK1DWGkVGfwqJmEflMzLcQBqXEEZDOmHVH2nEwBwa4QIURbwiNcK84%2Fng77fZ7Kh4P58C6I39xsjxm8YfZ1BafjSU8Z6TNHeiNjZOJoWGYBMl0zTRPQekx7ljom%2FDbChDofDHik2Y%2F0e3GRJIGCe9D727Rp8X3jNWEfjtPVr%2BiI2r%2BkMzqX%2B6PmQoNFfKtLDdYUirLyMPZYBghimwdk%2BtoXsbmIfKzFrzKPCjQoAVHf8iJxr3yJtvzxQ8zYM1mW4KQEWfVGQXN5n0KbGIhPknO8JBvb%2BIjw9ymGUeVJLNSncz%2FJT6XKbjbk%2B1m7VXb3KVjKHa6CSHULPITGsC4d17pwElgo40Sk3bMe5iJrPon9RzIZED0jVqeqtZduyZN3KLZaokOZ6Se0Wo7gyO0WhQ9xU0bxA8uW0l%2F7NE4HJfIXUIhGm%2FO%2BUON7DNDkRryjdhsf610CKSgWDMxsTv5cSK6I6bSFTRWkiFVKi5cjnTFlFegPBcLJ4e8Cxk3iqGAV1wRO01CMpjendZ49Iv76BKVY2A7Wt3EPVYdiUTf9US4HTfkO6jDJt3kdZXJwqKcpwiD2Jjy6cov5N2SGeDkVoYlX3UyvpzgwlqPgvQY6pgEwFXn35a1%2F6nAwoLVN1Pi1ZOTyxfNIC6Tk7GsiKWGrgJ8ecIouIYX0KGwG0lkR%2F71t5xFu6Sfi1oqEeEksK7g1xZWnKJNUTWPX2ZXY1vY2F9ViHjPi%2FXV795ma5BfLSv9BMmg%2F7v5IplUd0maMVrRCLPvBO97JVwwK00iqakkDNN6HOCpzpDr3C%2B%2BrqJrRRIrTPqtBy%2BXaircg6wCfzkk6rqMJ99ie&X-Amz-Signature=4a8e73df47c45a4a86332e6fd6207bdcf362bbf40d45ddf25ca03794fe93e68a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUY5HYZR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErv8QMBkhQTJX%2FS36%2F4anjVCp0pMFtWzPc4JwpqSZwGAiAvDO3IdnKMLT6cV1zSuheyFumy4OR4GAXFHJjxJdpZ0yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeawAmok%2BPLB80hntKtwDbjxK8GkAxfw9zgJ60jx1vkXF3YPZTuK1DWGkVGfwqJmEflMzLcQBqXEEZDOmHVH2nEwBwa4QIURbwiNcK84%2Fng77fZ7Kh4P58C6I39xsjxm8YfZ1BafjSU8Z6TNHeiNjZOJoWGYBMl0zTRPQekx7ljom%2FDbChDofDHik2Y%2F0e3GRJIGCe9D727Rp8X3jNWEfjtPVr%2BiI2r%2BkMzqX%2B6PmQoNFfKtLDdYUirLyMPZYBghimwdk%2BtoXsbmIfKzFrzKPCjQoAVHf8iJxr3yJtvzxQ8zYM1mW4KQEWfVGQXN5n0KbGIhPknO8JBvb%2BIjw9ymGUeVJLNSncz%2FJT6XKbjbk%2B1m7VXb3KVjKHa6CSHULPITGsC4d17pwElgo40Sk3bMe5iJrPon9RzIZED0jVqeqtZduyZN3KLZaokOZ6Se0Wo7gyO0WhQ9xU0bxA8uW0l%2F7NE4HJfIXUIhGm%2FO%2BUON7DNDkRryjdhsf610CKSgWDMxsTv5cSK6I6bSFTRWkiFVKi5cjnTFlFegPBcLJ4e8Cxk3iqGAV1wRO01CMpjendZ49Iv76BKVY2A7Wt3EPVYdiUTf9US4HTfkO6jDJt3kdZXJwqKcpwiD2Jjy6cov5N2SGeDkVoYlX3UyvpzgwlqPgvQY6pgEwFXn35a1%2F6nAwoLVN1Pi1ZOTyxfNIC6Tk7GsiKWGrgJ8ecIouIYX0KGwG0lkR%2F71t5xFu6Sfi1oqEeEksK7g1xZWnKJNUTWPX2ZXY1vY2F9ViHjPi%2FXV795ma5BfLSv9BMmg%2F7v5IplUd0maMVrRCLPvBO97JVwwK00iqakkDNN6HOCpzpDr3C%2B%2BrqJrRRIrTPqtBy%2BXaircg6wCfzkk6rqMJ99ie&X-Amz-Signature=0222571970cb317970000484f3845c0b930dbd2d22670cf2ac2d58f5819d8aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUY5HYZR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErv8QMBkhQTJX%2FS36%2F4anjVCp0pMFtWzPc4JwpqSZwGAiAvDO3IdnKMLT6cV1zSuheyFumy4OR4GAXFHJjxJdpZ0yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeawAmok%2BPLB80hntKtwDbjxK8GkAxfw9zgJ60jx1vkXF3YPZTuK1DWGkVGfwqJmEflMzLcQBqXEEZDOmHVH2nEwBwa4QIURbwiNcK84%2Fng77fZ7Kh4P58C6I39xsjxm8YfZ1BafjSU8Z6TNHeiNjZOJoWGYBMl0zTRPQekx7ljom%2FDbChDofDHik2Y%2F0e3GRJIGCe9D727Rp8X3jNWEfjtPVr%2BiI2r%2BkMzqX%2B6PmQoNFfKtLDdYUirLyMPZYBghimwdk%2BtoXsbmIfKzFrzKPCjQoAVHf8iJxr3yJtvzxQ8zYM1mW4KQEWfVGQXN5n0KbGIhPknO8JBvb%2BIjw9ymGUeVJLNSncz%2FJT6XKbjbk%2B1m7VXb3KVjKHa6CSHULPITGsC4d17pwElgo40Sk3bMe5iJrPon9RzIZED0jVqeqtZduyZN3KLZaokOZ6Se0Wo7gyO0WhQ9xU0bxA8uW0l%2F7NE4HJfIXUIhGm%2FO%2BUON7DNDkRryjdhsf610CKSgWDMxsTv5cSK6I6bSFTRWkiFVKi5cjnTFlFegPBcLJ4e8Cxk3iqGAV1wRO01CMpjendZ49Iv76BKVY2A7Wt3EPVYdiUTf9US4HTfkO6jDJt3kdZXJwqKcpwiD2Jjy6cov5N2SGeDkVoYlX3UyvpzgwlqPgvQY6pgEwFXn35a1%2F6nAwoLVN1Pi1ZOTyxfNIC6Tk7GsiKWGrgJ8ecIouIYX0KGwG0lkR%2F71t5xFu6Sfi1oqEeEksK7g1xZWnKJNUTWPX2ZXY1vY2F9ViHjPi%2FXV795ma5BfLSv9BMmg%2F7v5IplUd0maMVrRCLPvBO97JVwwK00iqakkDNN6HOCpzpDr3C%2B%2BrqJrRRIrTPqtBy%2BXaircg6wCfzkk6rqMJ99ie&X-Amz-Signature=346c92ccc9040e8b95ecb15b5d60f687f9eb87b6556962860f22290e3e0cf21d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUY5HYZR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErv8QMBkhQTJX%2FS36%2F4anjVCp0pMFtWzPc4JwpqSZwGAiAvDO3IdnKMLT6cV1zSuheyFumy4OR4GAXFHJjxJdpZ0yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeawAmok%2BPLB80hntKtwDbjxK8GkAxfw9zgJ60jx1vkXF3YPZTuK1DWGkVGfwqJmEflMzLcQBqXEEZDOmHVH2nEwBwa4QIURbwiNcK84%2Fng77fZ7Kh4P58C6I39xsjxm8YfZ1BafjSU8Z6TNHeiNjZOJoWGYBMl0zTRPQekx7ljom%2FDbChDofDHik2Y%2F0e3GRJIGCe9D727Rp8X3jNWEfjtPVr%2BiI2r%2BkMzqX%2B6PmQoNFfKtLDdYUirLyMPZYBghimwdk%2BtoXsbmIfKzFrzKPCjQoAVHf8iJxr3yJtvzxQ8zYM1mW4KQEWfVGQXN5n0KbGIhPknO8JBvb%2BIjw9ymGUeVJLNSncz%2FJT6XKbjbk%2B1m7VXb3KVjKHa6CSHULPITGsC4d17pwElgo40Sk3bMe5iJrPon9RzIZED0jVqeqtZduyZN3KLZaokOZ6Se0Wo7gyO0WhQ9xU0bxA8uW0l%2F7NE4HJfIXUIhGm%2FO%2BUON7DNDkRryjdhsf610CKSgWDMxsTv5cSK6I6bSFTRWkiFVKi5cjnTFlFegPBcLJ4e8Cxk3iqGAV1wRO01CMpjendZ49Iv76BKVY2A7Wt3EPVYdiUTf9US4HTfkO6jDJt3kdZXJwqKcpwiD2Jjy6cov5N2SGeDkVoYlX3UyvpzgwlqPgvQY6pgEwFXn35a1%2F6nAwoLVN1Pi1ZOTyxfNIC6Tk7GsiKWGrgJ8ecIouIYX0KGwG0lkR%2F71t5xFu6Sfi1oqEeEksK7g1xZWnKJNUTWPX2ZXY1vY2F9ViHjPi%2FXV795ma5BfLSv9BMmg%2F7v5IplUd0maMVrRCLPvBO97JVwwK00iqakkDNN6HOCpzpDr3C%2B%2BrqJrRRIrTPqtBy%2BXaircg6wCfzkk6rqMJ99ie&X-Amz-Signature=843e26dee9c9e8daf0cb9ef7bbc250fa8ce90c0772a1c25830be27c75314ec1d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
