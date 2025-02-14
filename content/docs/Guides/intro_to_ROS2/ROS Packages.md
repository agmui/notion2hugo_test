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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6JUMFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG1kfy4AUSxYquSX6WZBAFtlkIj4LFjSnsCLr99rTgWqAiEAhGWRZe5msbRx0Nz9Uz7TQlTsdZlkYuDw3dMmji3rUV4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJ8LudGP0zJGau5MSrcA6i5QhW%2FErpUtU%2FcqoCMeD%2B%2F8KVUsfVToDzA8vl73Kx4HZjXF%2B6gnD7dKC3a10Ez1lc4Xc3lqpApEMnm2rmdN4%2BoD101M3Qe5PGqbXBv2bs352y%2BInZfEKk8sFTF35FCYt8MT%2BP35cxwErMa0Z%2FiTmVw2RuFGGmtoXEBMkVgVSwHCA9NRIzmrHEHb%2BJ208V%2FaaBb%2B0v9gs7NuZk4Q%2BNG6i2wfNbpUYjr3xtTlMhvxc6u2D%2BVbuDc10LbjgXlTNy2f%2FEMgF3mgud5pKZpdSn3OBs%2B4BHaPE%2F0s7Nng%2BhQg4DRtEw%2FCysyKZkJvHvw8znp8qVoGuYKrwHGlpP%2FkdF78xz4cL9UdZEVhRPJXKKr5Pcdg5OvoUzokeiS5zqccwFqzW9YuuKQ6Y7Npysda3a7tKiwMQ7zlRMld1hY0dTRhVCv6w0GvUmb%2B%2F16v8auBeD53tiNnuvHi5WcFWZhC14xqfhqcO22F6yeiGfWuV60ovH%2ByTO1TGwTFVh3HuklHGuPJRNw1ge60uzo3l5GVH6knrTHv15RhVUVPbRJmNpxNFNOIH6EYka6n6V58omqAH0kGskcK1GgHp7KqjJchxUJWxzbc18oNLYZP2%2F1lc0HBPvu%2BmJCxx8Up%2Fo7vWKdMIDqvL0GOqUBjHd8UHeSaTfUNXsVMRyL3sJMjbACdYLwFmyGsHeEVpNXjRRrbR0BWLmo04a7of0NhjByAQ%2BXDXw8F3l7lbwl4vVbXz7EYlBakJUa0RYfBymOptkeBTmTQIxOXDXhsYDJotG7Gu6AB04QIPq29DLer8WV2NMCiE3JRx2zeXqDSzwNgYQVwMLagsIyyhi6W5iIN1wuj9byUby9fsR%2F2mymIdfhgEzt&X-Amz-Signature=b7e082073b3eac83a83356c5d4ee19f123b28bfff24df51ef28cc864f481fcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6JUMFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG1kfy4AUSxYquSX6WZBAFtlkIj4LFjSnsCLr99rTgWqAiEAhGWRZe5msbRx0Nz9Uz7TQlTsdZlkYuDw3dMmji3rUV4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJ8LudGP0zJGau5MSrcA6i5QhW%2FErpUtU%2FcqoCMeD%2B%2F8KVUsfVToDzA8vl73Kx4HZjXF%2B6gnD7dKC3a10Ez1lc4Xc3lqpApEMnm2rmdN4%2BoD101M3Qe5PGqbXBv2bs352y%2BInZfEKk8sFTF35FCYt8MT%2BP35cxwErMa0Z%2FiTmVw2RuFGGmtoXEBMkVgVSwHCA9NRIzmrHEHb%2BJ208V%2FaaBb%2B0v9gs7NuZk4Q%2BNG6i2wfNbpUYjr3xtTlMhvxc6u2D%2BVbuDc10LbjgXlTNy2f%2FEMgF3mgud5pKZpdSn3OBs%2B4BHaPE%2F0s7Nng%2BhQg4DRtEw%2FCysyKZkJvHvw8znp8qVoGuYKrwHGlpP%2FkdF78xz4cL9UdZEVhRPJXKKr5Pcdg5OvoUzokeiS5zqccwFqzW9YuuKQ6Y7Npysda3a7tKiwMQ7zlRMld1hY0dTRhVCv6w0GvUmb%2B%2F16v8auBeD53tiNnuvHi5WcFWZhC14xqfhqcO22F6yeiGfWuV60ovH%2ByTO1TGwTFVh3HuklHGuPJRNw1ge60uzo3l5GVH6knrTHv15RhVUVPbRJmNpxNFNOIH6EYka6n6V58omqAH0kGskcK1GgHp7KqjJchxUJWxzbc18oNLYZP2%2F1lc0HBPvu%2BmJCxx8Up%2Fo7vWKdMIDqvL0GOqUBjHd8UHeSaTfUNXsVMRyL3sJMjbACdYLwFmyGsHeEVpNXjRRrbR0BWLmo04a7of0NhjByAQ%2BXDXw8F3l7lbwl4vVbXz7EYlBakJUa0RYfBymOptkeBTmTQIxOXDXhsYDJotG7Gu6AB04QIPq29DLer8WV2NMCiE3JRx2zeXqDSzwNgYQVwMLagsIyyhi6W5iIN1wuj9byUby9fsR%2F2mymIdfhgEzt&X-Amz-Signature=965d33f46d5252ade57fcd765419ac1a5cdc18bbdc630a4ccc38054f84413329&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6JUMFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG1kfy4AUSxYquSX6WZBAFtlkIj4LFjSnsCLr99rTgWqAiEAhGWRZe5msbRx0Nz9Uz7TQlTsdZlkYuDw3dMmji3rUV4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJ8LudGP0zJGau5MSrcA6i5QhW%2FErpUtU%2FcqoCMeD%2B%2F8KVUsfVToDzA8vl73Kx4HZjXF%2B6gnD7dKC3a10Ez1lc4Xc3lqpApEMnm2rmdN4%2BoD101M3Qe5PGqbXBv2bs352y%2BInZfEKk8sFTF35FCYt8MT%2BP35cxwErMa0Z%2FiTmVw2RuFGGmtoXEBMkVgVSwHCA9NRIzmrHEHb%2BJ208V%2FaaBb%2B0v9gs7NuZk4Q%2BNG6i2wfNbpUYjr3xtTlMhvxc6u2D%2BVbuDc10LbjgXlTNy2f%2FEMgF3mgud5pKZpdSn3OBs%2B4BHaPE%2F0s7Nng%2BhQg4DRtEw%2FCysyKZkJvHvw8znp8qVoGuYKrwHGlpP%2FkdF78xz4cL9UdZEVhRPJXKKr5Pcdg5OvoUzokeiS5zqccwFqzW9YuuKQ6Y7Npysda3a7tKiwMQ7zlRMld1hY0dTRhVCv6w0GvUmb%2B%2F16v8auBeD53tiNnuvHi5WcFWZhC14xqfhqcO22F6yeiGfWuV60ovH%2ByTO1TGwTFVh3HuklHGuPJRNw1ge60uzo3l5GVH6knrTHv15RhVUVPbRJmNpxNFNOIH6EYka6n6V58omqAH0kGskcK1GgHp7KqjJchxUJWxzbc18oNLYZP2%2F1lc0HBPvu%2BmJCxx8Up%2Fo7vWKdMIDqvL0GOqUBjHd8UHeSaTfUNXsVMRyL3sJMjbACdYLwFmyGsHeEVpNXjRRrbR0BWLmo04a7of0NhjByAQ%2BXDXw8F3l7lbwl4vVbXz7EYlBakJUa0RYfBymOptkeBTmTQIxOXDXhsYDJotG7Gu6AB04QIPq29DLer8WV2NMCiE3JRx2zeXqDSzwNgYQVwMLagsIyyhi6W5iIN1wuj9byUby9fsR%2F2mymIdfhgEzt&X-Amz-Signature=2c009f1a94c84237bfa21bab8c0ffb4e39b676029e9e34c1b9bfcdfd611e6fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6JUMFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG1kfy4AUSxYquSX6WZBAFtlkIj4LFjSnsCLr99rTgWqAiEAhGWRZe5msbRx0Nz9Uz7TQlTsdZlkYuDw3dMmji3rUV4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJ8LudGP0zJGau5MSrcA6i5QhW%2FErpUtU%2FcqoCMeD%2B%2F8KVUsfVToDzA8vl73Kx4HZjXF%2B6gnD7dKC3a10Ez1lc4Xc3lqpApEMnm2rmdN4%2BoD101M3Qe5PGqbXBv2bs352y%2BInZfEKk8sFTF35FCYt8MT%2BP35cxwErMa0Z%2FiTmVw2RuFGGmtoXEBMkVgVSwHCA9NRIzmrHEHb%2BJ208V%2FaaBb%2B0v9gs7NuZk4Q%2BNG6i2wfNbpUYjr3xtTlMhvxc6u2D%2BVbuDc10LbjgXlTNy2f%2FEMgF3mgud5pKZpdSn3OBs%2B4BHaPE%2F0s7Nng%2BhQg4DRtEw%2FCysyKZkJvHvw8znp8qVoGuYKrwHGlpP%2FkdF78xz4cL9UdZEVhRPJXKKr5Pcdg5OvoUzokeiS5zqccwFqzW9YuuKQ6Y7Npysda3a7tKiwMQ7zlRMld1hY0dTRhVCv6w0GvUmb%2B%2F16v8auBeD53tiNnuvHi5WcFWZhC14xqfhqcO22F6yeiGfWuV60ovH%2ByTO1TGwTFVh3HuklHGuPJRNw1ge60uzo3l5GVH6knrTHv15RhVUVPbRJmNpxNFNOIH6EYka6n6V58omqAH0kGskcK1GgHp7KqjJchxUJWxzbc18oNLYZP2%2F1lc0HBPvu%2BmJCxx8Up%2Fo7vWKdMIDqvL0GOqUBjHd8UHeSaTfUNXsVMRyL3sJMjbACdYLwFmyGsHeEVpNXjRRrbR0BWLmo04a7of0NhjByAQ%2BXDXw8F3l7lbwl4vVbXz7EYlBakJUa0RYfBymOptkeBTmTQIxOXDXhsYDJotG7Gu6AB04QIPq29DLer8WV2NMCiE3JRx2zeXqDSzwNgYQVwMLagsIyyhi6W5iIN1wuj9byUby9fsR%2F2mymIdfhgEzt&X-Amz-Signature=ecd110a6bcf5d39d23bf354ff5921e1f160b5b28df359557fe5e52d52f1ae26f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6JUMFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG1kfy4AUSxYquSX6WZBAFtlkIj4LFjSnsCLr99rTgWqAiEAhGWRZe5msbRx0Nz9Uz7TQlTsdZlkYuDw3dMmji3rUV4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJ8LudGP0zJGau5MSrcA6i5QhW%2FErpUtU%2FcqoCMeD%2B%2F8KVUsfVToDzA8vl73Kx4HZjXF%2B6gnD7dKC3a10Ez1lc4Xc3lqpApEMnm2rmdN4%2BoD101M3Qe5PGqbXBv2bs352y%2BInZfEKk8sFTF35FCYt8MT%2BP35cxwErMa0Z%2FiTmVw2RuFGGmtoXEBMkVgVSwHCA9NRIzmrHEHb%2BJ208V%2FaaBb%2B0v9gs7NuZk4Q%2BNG6i2wfNbpUYjr3xtTlMhvxc6u2D%2BVbuDc10LbjgXlTNy2f%2FEMgF3mgud5pKZpdSn3OBs%2B4BHaPE%2F0s7Nng%2BhQg4DRtEw%2FCysyKZkJvHvw8znp8qVoGuYKrwHGlpP%2FkdF78xz4cL9UdZEVhRPJXKKr5Pcdg5OvoUzokeiS5zqccwFqzW9YuuKQ6Y7Npysda3a7tKiwMQ7zlRMld1hY0dTRhVCv6w0GvUmb%2B%2F16v8auBeD53tiNnuvHi5WcFWZhC14xqfhqcO22F6yeiGfWuV60ovH%2ByTO1TGwTFVh3HuklHGuPJRNw1ge60uzo3l5GVH6knrTHv15RhVUVPbRJmNpxNFNOIH6EYka6n6V58omqAH0kGskcK1GgHp7KqjJchxUJWxzbc18oNLYZP2%2F1lc0HBPvu%2BmJCxx8Up%2Fo7vWKdMIDqvL0GOqUBjHd8UHeSaTfUNXsVMRyL3sJMjbACdYLwFmyGsHeEVpNXjRRrbR0BWLmo04a7of0NhjByAQ%2BXDXw8F3l7lbwl4vVbXz7EYlBakJUa0RYfBymOptkeBTmTQIxOXDXhsYDJotG7Gu6AB04QIPq29DLer8WV2NMCiE3JRx2zeXqDSzwNgYQVwMLagsIyyhi6W5iIN1wuj9byUby9fsR%2F2mymIdfhgEzt&X-Amz-Signature=acdc1907665ec5ab4df7cc3331255e14df469457eb7de6fa00b0a286cf24832b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6JUMFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG1kfy4AUSxYquSX6WZBAFtlkIj4LFjSnsCLr99rTgWqAiEAhGWRZe5msbRx0Nz9Uz7TQlTsdZlkYuDw3dMmji3rUV4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJ8LudGP0zJGau5MSrcA6i5QhW%2FErpUtU%2FcqoCMeD%2B%2F8KVUsfVToDzA8vl73Kx4HZjXF%2B6gnD7dKC3a10Ez1lc4Xc3lqpApEMnm2rmdN4%2BoD101M3Qe5PGqbXBv2bs352y%2BInZfEKk8sFTF35FCYt8MT%2BP35cxwErMa0Z%2FiTmVw2RuFGGmtoXEBMkVgVSwHCA9NRIzmrHEHb%2BJ208V%2FaaBb%2B0v9gs7NuZk4Q%2BNG6i2wfNbpUYjr3xtTlMhvxc6u2D%2BVbuDc10LbjgXlTNy2f%2FEMgF3mgud5pKZpdSn3OBs%2B4BHaPE%2F0s7Nng%2BhQg4DRtEw%2FCysyKZkJvHvw8znp8qVoGuYKrwHGlpP%2FkdF78xz4cL9UdZEVhRPJXKKr5Pcdg5OvoUzokeiS5zqccwFqzW9YuuKQ6Y7Npysda3a7tKiwMQ7zlRMld1hY0dTRhVCv6w0GvUmb%2B%2F16v8auBeD53tiNnuvHi5WcFWZhC14xqfhqcO22F6yeiGfWuV60ovH%2ByTO1TGwTFVh3HuklHGuPJRNw1ge60uzo3l5GVH6knrTHv15RhVUVPbRJmNpxNFNOIH6EYka6n6V58omqAH0kGskcK1GgHp7KqjJchxUJWxzbc18oNLYZP2%2F1lc0HBPvu%2BmJCxx8Up%2Fo7vWKdMIDqvL0GOqUBjHd8UHeSaTfUNXsVMRyL3sJMjbACdYLwFmyGsHeEVpNXjRRrbR0BWLmo04a7of0NhjByAQ%2BXDXw8F3l7lbwl4vVbXz7EYlBakJUa0RYfBymOptkeBTmTQIxOXDXhsYDJotG7Gu6AB04QIPq29DLer8WV2NMCiE3JRx2zeXqDSzwNgYQVwMLagsIyyhi6W5iIN1wuj9byUby9fsR%2F2mymIdfhgEzt&X-Amz-Signature=715d4f02974d9d2226b4b4110b3eafcac63c7d6bfb3c3db5e77f823bc3022acd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6JUMFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG1kfy4AUSxYquSX6WZBAFtlkIj4LFjSnsCLr99rTgWqAiEAhGWRZe5msbRx0Nz9Uz7TQlTsdZlkYuDw3dMmji3rUV4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJ8LudGP0zJGau5MSrcA6i5QhW%2FErpUtU%2FcqoCMeD%2B%2F8KVUsfVToDzA8vl73Kx4HZjXF%2B6gnD7dKC3a10Ez1lc4Xc3lqpApEMnm2rmdN4%2BoD101M3Qe5PGqbXBv2bs352y%2BInZfEKk8sFTF35FCYt8MT%2BP35cxwErMa0Z%2FiTmVw2RuFGGmtoXEBMkVgVSwHCA9NRIzmrHEHb%2BJ208V%2FaaBb%2B0v9gs7NuZk4Q%2BNG6i2wfNbpUYjr3xtTlMhvxc6u2D%2BVbuDc10LbjgXlTNy2f%2FEMgF3mgud5pKZpdSn3OBs%2B4BHaPE%2F0s7Nng%2BhQg4DRtEw%2FCysyKZkJvHvw8znp8qVoGuYKrwHGlpP%2FkdF78xz4cL9UdZEVhRPJXKKr5Pcdg5OvoUzokeiS5zqccwFqzW9YuuKQ6Y7Npysda3a7tKiwMQ7zlRMld1hY0dTRhVCv6w0GvUmb%2B%2F16v8auBeD53tiNnuvHi5WcFWZhC14xqfhqcO22F6yeiGfWuV60ovH%2ByTO1TGwTFVh3HuklHGuPJRNw1ge60uzo3l5GVH6knrTHv15RhVUVPbRJmNpxNFNOIH6EYka6n6V58omqAH0kGskcK1GgHp7KqjJchxUJWxzbc18oNLYZP2%2F1lc0HBPvu%2BmJCxx8Up%2Fo7vWKdMIDqvL0GOqUBjHd8UHeSaTfUNXsVMRyL3sJMjbACdYLwFmyGsHeEVpNXjRRrbR0BWLmo04a7of0NhjByAQ%2BXDXw8F3l7lbwl4vVbXz7EYlBakJUa0RYfBymOptkeBTmTQIxOXDXhsYDJotG7Gu6AB04QIPq29DLer8WV2NMCiE3JRx2zeXqDSzwNgYQVwMLagsIyyhi6W5iIN1wuj9byUby9fsR%2F2mymIdfhgEzt&X-Amz-Signature=6908b9377ba3a01341d4c696e777c8477da0cb906eda36e7df016d5522307a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
