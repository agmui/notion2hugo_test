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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFZMNY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuNybxR3BoqlRKcMa1SVAQ%2FSI%2B0T8rZeoF0Qvg4XkqAIhAORvoSJYvupSWtUS2JVXNAdeUn14etVD04B3zLFNCjgqKv8DCBAQABoMNjM3NDIzMTgzODA1IgybJK2ZYyINlqWamyUq3ANCMAyc5ptVHnPYDpJSlI86v0IJu2NRHL%2B%2FZCmO5EapU%2FD3CJEO1O4d8xNvHNXJoNc0LQXau%2FZBYeytUFm3b9D%2FdJDsSRhB2grTkbSw6oyRhTq1ne1zO3gwuBXMQNvIrrY59nufC8FIYBCa8DKirpuOuKvvamkWZxiwrP7UP0hWF87QNs6fMOVPhTyAnn4JOiKDBG1I8ibZ7NeavM5hirZp9tE18hGu0mcX1Gs0v5X2e6nxlC4aALnxY273zr4DdPtJu8rPUuq0uBvaD9tUy1ekyHERYfmBGm7E0ZTfsc5YcOsw0wphIopxPTax0YepKCBFQTzCZqmrbzOeGeVoDHAZ4InfJj4vnLU92wlxaTL%2BvicjgjDCJVTb%2BOuG2R%2B%2FkSdwHYqaSVWI6d%2B5kQUuS4LF7e3VsTVDO5hjs5AdEzyxeeP2%2F95a0i%2FO8p7cTsJYZYEcDYosr1G6bWH7e%2Bt0RtsQXjX8%2FPLwrJumimK84tD94huHGRyVgoaOGxQx9NzZ9R81eP6%2F9yuxDJJnDiI1VRd8s4WQ%2BAM0%2FSGxKzCeWtchAuraUGl2EJYly%2BmsKMRziF6KotwSQ18CwLcHdg7zQZwqbPZ6l3iUwV76en%2FacSPkDMuhP%2BHmPMNGbpzKnzCn8LbEBjqkAZ3BXarIvcG8j1Qv6lp5UcyKAfzvDxQVx6TSW2ggjp7EjGS6Sl7Mtg15YfFyUYq91bxGZQ8tV1ydk4eXhoBCA0z%2FL7lvXghlQaTKeFJESatRMnLIOUnkFF4OP1P%2Fj1OqSTHFxpFRI2Tn8%2FQYGACP2hmh3sbIltAilLX0EqJ2ZFF55CQM07riwNhPviphIIPIcgtmh4xjbG0v6mEoQpfNb1vZ%2B7dp&X-Amz-Signature=ecde07b3e0cd31b19db061f0ef6f39af60669f5fcfd3a4be62fa1056883b1461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFZMNY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuNybxR3BoqlRKcMa1SVAQ%2FSI%2B0T8rZeoF0Qvg4XkqAIhAORvoSJYvupSWtUS2JVXNAdeUn14etVD04B3zLFNCjgqKv8DCBAQABoMNjM3NDIzMTgzODA1IgybJK2ZYyINlqWamyUq3ANCMAyc5ptVHnPYDpJSlI86v0IJu2NRHL%2B%2FZCmO5EapU%2FD3CJEO1O4d8xNvHNXJoNc0LQXau%2FZBYeytUFm3b9D%2FdJDsSRhB2grTkbSw6oyRhTq1ne1zO3gwuBXMQNvIrrY59nufC8FIYBCa8DKirpuOuKvvamkWZxiwrP7UP0hWF87QNs6fMOVPhTyAnn4JOiKDBG1I8ibZ7NeavM5hirZp9tE18hGu0mcX1Gs0v5X2e6nxlC4aALnxY273zr4DdPtJu8rPUuq0uBvaD9tUy1ekyHERYfmBGm7E0ZTfsc5YcOsw0wphIopxPTax0YepKCBFQTzCZqmrbzOeGeVoDHAZ4InfJj4vnLU92wlxaTL%2BvicjgjDCJVTb%2BOuG2R%2B%2FkSdwHYqaSVWI6d%2B5kQUuS4LF7e3VsTVDO5hjs5AdEzyxeeP2%2F95a0i%2FO8p7cTsJYZYEcDYosr1G6bWH7e%2Bt0RtsQXjX8%2FPLwrJumimK84tD94huHGRyVgoaOGxQx9NzZ9R81eP6%2F9yuxDJJnDiI1VRd8s4WQ%2BAM0%2FSGxKzCeWtchAuraUGl2EJYly%2BmsKMRziF6KotwSQ18CwLcHdg7zQZwqbPZ6l3iUwV76en%2FacSPkDMuhP%2BHmPMNGbpzKnzCn8LbEBjqkAZ3BXarIvcG8j1Qv6lp5UcyKAfzvDxQVx6TSW2ggjp7EjGS6Sl7Mtg15YfFyUYq91bxGZQ8tV1ydk4eXhoBCA0z%2FL7lvXghlQaTKeFJESatRMnLIOUnkFF4OP1P%2Fj1OqSTHFxpFRI2Tn8%2FQYGACP2hmh3sbIltAilLX0EqJ2ZFF55CQM07riwNhPviphIIPIcgtmh4xjbG0v6mEoQpfNb1vZ%2B7dp&X-Amz-Signature=faee2e2fe599bd1c876d4910e693e43a364d49a733d41e8d04fa659f58313df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFZMNY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuNybxR3BoqlRKcMa1SVAQ%2FSI%2B0T8rZeoF0Qvg4XkqAIhAORvoSJYvupSWtUS2JVXNAdeUn14etVD04B3zLFNCjgqKv8DCBAQABoMNjM3NDIzMTgzODA1IgybJK2ZYyINlqWamyUq3ANCMAyc5ptVHnPYDpJSlI86v0IJu2NRHL%2B%2FZCmO5EapU%2FD3CJEO1O4d8xNvHNXJoNc0LQXau%2FZBYeytUFm3b9D%2FdJDsSRhB2grTkbSw6oyRhTq1ne1zO3gwuBXMQNvIrrY59nufC8FIYBCa8DKirpuOuKvvamkWZxiwrP7UP0hWF87QNs6fMOVPhTyAnn4JOiKDBG1I8ibZ7NeavM5hirZp9tE18hGu0mcX1Gs0v5X2e6nxlC4aALnxY273zr4DdPtJu8rPUuq0uBvaD9tUy1ekyHERYfmBGm7E0ZTfsc5YcOsw0wphIopxPTax0YepKCBFQTzCZqmrbzOeGeVoDHAZ4InfJj4vnLU92wlxaTL%2BvicjgjDCJVTb%2BOuG2R%2B%2FkSdwHYqaSVWI6d%2B5kQUuS4LF7e3VsTVDO5hjs5AdEzyxeeP2%2F95a0i%2FO8p7cTsJYZYEcDYosr1G6bWH7e%2Bt0RtsQXjX8%2FPLwrJumimK84tD94huHGRyVgoaOGxQx9NzZ9R81eP6%2F9yuxDJJnDiI1VRd8s4WQ%2BAM0%2FSGxKzCeWtchAuraUGl2EJYly%2BmsKMRziF6KotwSQ18CwLcHdg7zQZwqbPZ6l3iUwV76en%2FacSPkDMuhP%2BHmPMNGbpzKnzCn8LbEBjqkAZ3BXarIvcG8j1Qv6lp5UcyKAfzvDxQVx6TSW2ggjp7EjGS6Sl7Mtg15YfFyUYq91bxGZQ8tV1ydk4eXhoBCA0z%2FL7lvXghlQaTKeFJESatRMnLIOUnkFF4OP1P%2Fj1OqSTHFxpFRI2Tn8%2FQYGACP2hmh3sbIltAilLX0EqJ2ZFF55CQM07riwNhPviphIIPIcgtmh4xjbG0v6mEoQpfNb1vZ%2B7dp&X-Amz-Signature=001e14af0c4d0989723f84414861cae31cf7b3c5ca9ccb3778e320fb9c5fdd20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFZMNY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuNybxR3BoqlRKcMa1SVAQ%2FSI%2B0T8rZeoF0Qvg4XkqAIhAORvoSJYvupSWtUS2JVXNAdeUn14etVD04B3zLFNCjgqKv8DCBAQABoMNjM3NDIzMTgzODA1IgybJK2ZYyINlqWamyUq3ANCMAyc5ptVHnPYDpJSlI86v0IJu2NRHL%2B%2FZCmO5EapU%2FD3CJEO1O4d8xNvHNXJoNc0LQXau%2FZBYeytUFm3b9D%2FdJDsSRhB2grTkbSw6oyRhTq1ne1zO3gwuBXMQNvIrrY59nufC8FIYBCa8DKirpuOuKvvamkWZxiwrP7UP0hWF87QNs6fMOVPhTyAnn4JOiKDBG1I8ibZ7NeavM5hirZp9tE18hGu0mcX1Gs0v5X2e6nxlC4aALnxY273zr4DdPtJu8rPUuq0uBvaD9tUy1ekyHERYfmBGm7E0ZTfsc5YcOsw0wphIopxPTax0YepKCBFQTzCZqmrbzOeGeVoDHAZ4InfJj4vnLU92wlxaTL%2BvicjgjDCJVTb%2BOuG2R%2B%2FkSdwHYqaSVWI6d%2B5kQUuS4LF7e3VsTVDO5hjs5AdEzyxeeP2%2F95a0i%2FO8p7cTsJYZYEcDYosr1G6bWH7e%2Bt0RtsQXjX8%2FPLwrJumimK84tD94huHGRyVgoaOGxQx9NzZ9R81eP6%2F9yuxDJJnDiI1VRd8s4WQ%2BAM0%2FSGxKzCeWtchAuraUGl2EJYly%2BmsKMRziF6KotwSQ18CwLcHdg7zQZwqbPZ6l3iUwV76en%2FacSPkDMuhP%2BHmPMNGbpzKnzCn8LbEBjqkAZ3BXarIvcG8j1Qv6lp5UcyKAfzvDxQVx6TSW2ggjp7EjGS6Sl7Mtg15YfFyUYq91bxGZQ8tV1ydk4eXhoBCA0z%2FL7lvXghlQaTKeFJESatRMnLIOUnkFF4OP1P%2Fj1OqSTHFxpFRI2Tn8%2FQYGACP2hmh3sbIltAilLX0EqJ2ZFF55CQM07riwNhPviphIIPIcgtmh4xjbG0v6mEoQpfNb1vZ%2B7dp&X-Amz-Signature=2119a1beb93f3970c21b74fc528b9b0d9f7686620d05971233b9f78ed2eeae8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFZMNY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuNybxR3BoqlRKcMa1SVAQ%2FSI%2B0T8rZeoF0Qvg4XkqAIhAORvoSJYvupSWtUS2JVXNAdeUn14etVD04B3zLFNCjgqKv8DCBAQABoMNjM3NDIzMTgzODA1IgybJK2ZYyINlqWamyUq3ANCMAyc5ptVHnPYDpJSlI86v0IJu2NRHL%2B%2FZCmO5EapU%2FD3CJEO1O4d8xNvHNXJoNc0LQXau%2FZBYeytUFm3b9D%2FdJDsSRhB2grTkbSw6oyRhTq1ne1zO3gwuBXMQNvIrrY59nufC8FIYBCa8DKirpuOuKvvamkWZxiwrP7UP0hWF87QNs6fMOVPhTyAnn4JOiKDBG1I8ibZ7NeavM5hirZp9tE18hGu0mcX1Gs0v5X2e6nxlC4aALnxY273zr4DdPtJu8rPUuq0uBvaD9tUy1ekyHERYfmBGm7E0ZTfsc5YcOsw0wphIopxPTax0YepKCBFQTzCZqmrbzOeGeVoDHAZ4InfJj4vnLU92wlxaTL%2BvicjgjDCJVTb%2BOuG2R%2B%2FkSdwHYqaSVWI6d%2B5kQUuS4LF7e3VsTVDO5hjs5AdEzyxeeP2%2F95a0i%2FO8p7cTsJYZYEcDYosr1G6bWH7e%2Bt0RtsQXjX8%2FPLwrJumimK84tD94huHGRyVgoaOGxQx9NzZ9R81eP6%2F9yuxDJJnDiI1VRd8s4WQ%2BAM0%2FSGxKzCeWtchAuraUGl2EJYly%2BmsKMRziF6KotwSQ18CwLcHdg7zQZwqbPZ6l3iUwV76en%2FacSPkDMuhP%2BHmPMNGbpzKnzCn8LbEBjqkAZ3BXarIvcG8j1Qv6lp5UcyKAfzvDxQVx6TSW2ggjp7EjGS6Sl7Mtg15YfFyUYq91bxGZQ8tV1ydk4eXhoBCA0z%2FL7lvXghlQaTKeFJESatRMnLIOUnkFF4OP1P%2Fj1OqSTHFxpFRI2Tn8%2FQYGACP2hmh3sbIltAilLX0EqJ2ZFF55CQM07riwNhPviphIIPIcgtmh4xjbG0v6mEoQpfNb1vZ%2B7dp&X-Amz-Signature=d0c84608b9f9fc0e95b5d7e879d5b26d9e1aee72bca0be306fa924187a12965e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFZMNY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuNybxR3BoqlRKcMa1SVAQ%2FSI%2B0T8rZeoF0Qvg4XkqAIhAORvoSJYvupSWtUS2JVXNAdeUn14etVD04B3zLFNCjgqKv8DCBAQABoMNjM3NDIzMTgzODA1IgybJK2ZYyINlqWamyUq3ANCMAyc5ptVHnPYDpJSlI86v0IJu2NRHL%2B%2FZCmO5EapU%2FD3CJEO1O4d8xNvHNXJoNc0LQXau%2FZBYeytUFm3b9D%2FdJDsSRhB2grTkbSw6oyRhTq1ne1zO3gwuBXMQNvIrrY59nufC8FIYBCa8DKirpuOuKvvamkWZxiwrP7UP0hWF87QNs6fMOVPhTyAnn4JOiKDBG1I8ibZ7NeavM5hirZp9tE18hGu0mcX1Gs0v5X2e6nxlC4aALnxY273zr4DdPtJu8rPUuq0uBvaD9tUy1ekyHERYfmBGm7E0ZTfsc5YcOsw0wphIopxPTax0YepKCBFQTzCZqmrbzOeGeVoDHAZ4InfJj4vnLU92wlxaTL%2BvicjgjDCJVTb%2BOuG2R%2B%2FkSdwHYqaSVWI6d%2B5kQUuS4LF7e3VsTVDO5hjs5AdEzyxeeP2%2F95a0i%2FO8p7cTsJYZYEcDYosr1G6bWH7e%2Bt0RtsQXjX8%2FPLwrJumimK84tD94huHGRyVgoaOGxQx9NzZ9R81eP6%2F9yuxDJJnDiI1VRd8s4WQ%2BAM0%2FSGxKzCeWtchAuraUGl2EJYly%2BmsKMRziF6KotwSQ18CwLcHdg7zQZwqbPZ6l3iUwV76en%2FacSPkDMuhP%2BHmPMNGbpzKnzCn8LbEBjqkAZ3BXarIvcG8j1Qv6lp5UcyKAfzvDxQVx6TSW2ggjp7EjGS6Sl7Mtg15YfFyUYq91bxGZQ8tV1ydk4eXhoBCA0z%2FL7lvXghlQaTKeFJESatRMnLIOUnkFF4OP1P%2Fj1OqSTHFxpFRI2Tn8%2FQYGACP2hmh3sbIltAilLX0EqJ2ZFF55CQM07riwNhPviphIIPIcgtmh4xjbG0v6mEoQpfNb1vZ%2B7dp&X-Amz-Signature=96b070487c85b1e99afd980475975d9888495cb24a18fb749a502ac58b05f6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFZMNY2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUuNybxR3BoqlRKcMa1SVAQ%2FSI%2B0T8rZeoF0Qvg4XkqAIhAORvoSJYvupSWtUS2JVXNAdeUn14etVD04B3zLFNCjgqKv8DCBAQABoMNjM3NDIzMTgzODA1IgybJK2ZYyINlqWamyUq3ANCMAyc5ptVHnPYDpJSlI86v0IJu2NRHL%2B%2FZCmO5EapU%2FD3CJEO1O4d8xNvHNXJoNc0LQXau%2FZBYeytUFm3b9D%2FdJDsSRhB2grTkbSw6oyRhTq1ne1zO3gwuBXMQNvIrrY59nufC8FIYBCa8DKirpuOuKvvamkWZxiwrP7UP0hWF87QNs6fMOVPhTyAnn4JOiKDBG1I8ibZ7NeavM5hirZp9tE18hGu0mcX1Gs0v5X2e6nxlC4aALnxY273zr4DdPtJu8rPUuq0uBvaD9tUy1ekyHERYfmBGm7E0ZTfsc5YcOsw0wphIopxPTax0YepKCBFQTzCZqmrbzOeGeVoDHAZ4InfJj4vnLU92wlxaTL%2BvicjgjDCJVTb%2BOuG2R%2B%2FkSdwHYqaSVWI6d%2B5kQUuS4LF7e3VsTVDO5hjs5AdEzyxeeP2%2F95a0i%2FO8p7cTsJYZYEcDYosr1G6bWH7e%2Bt0RtsQXjX8%2FPLwrJumimK84tD94huHGRyVgoaOGxQx9NzZ9R81eP6%2F9yuxDJJnDiI1VRd8s4WQ%2BAM0%2FSGxKzCeWtchAuraUGl2EJYly%2BmsKMRziF6KotwSQ18CwLcHdg7zQZwqbPZ6l3iUwV76en%2FacSPkDMuhP%2BHmPMNGbpzKnzCn8LbEBjqkAZ3BXarIvcG8j1Qv6lp5UcyKAfzvDxQVx6TSW2ggjp7EjGS6Sl7Mtg15YfFyUYq91bxGZQ8tV1ydk4eXhoBCA0z%2FL7lvXghlQaTKeFJESatRMnLIOUnkFF4OP1P%2Fj1OqSTHFxpFRI2Tn8%2FQYGACP2hmh3sbIltAilLX0EqJ2ZFF55CQM07riwNhPviphIIPIcgtmh4xjbG0v6mEoQpfNb1vZ%2B7dp&X-Amz-Signature=ad14656c54f33d6b75ef449fd462ba76757a012c27f595a196f1bd45650d6435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
