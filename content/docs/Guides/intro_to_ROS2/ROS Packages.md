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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSNNQKK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq9Fh3tHildvmrlyULYwlmYKivC4qt8sArRJVtP%2BrOpAiBks2YCIxAYWsaqOCwCjDF%2FyXEtUVewvb35x9DLqMRbJyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgOqVpuVwkMtC2jRKtwDqgiJ04ECniJYPP7ACje83tLLf8oOlcrNmqG19iwct7DwKeuUSufQeReWFn5VU0Lutl0IYX6h6qSCUpda36A8Vn6COH6T09fszpamARn8Nv11KfOltdGnGsFaQ%2Bs5xKqaWqkvbIGSwwjj1JJ0X9J5Hk%2BSOxF97PipdWJc8u5q%2B8%2F1Wkh3Qgs1VN4xjUNtXwlGo4d8eyk%2BY%2BTJnxzxuJdv9KGsBuS0EiXzTxqK2v51MfWJSQ8%2FZBTaM9Nn8r%2BzwpjCFMstKUhJDIkgIlEtfJe59KfhIhRfZ7vUtzwxFxQOaxRMK%2FH73Mm7M0baE0SD7GP7yQDIhQxOdK5NLF35EOl7K44QmSVxX7HYIZ7oby48AUKjyrV6qco7faCqPD%2FkyOZ3u%2B0c1hPie0t7yR%2F6TNJJx8qtnMsOA7fhI0QXfHjzWLcqylqh4LHdP65xSRY%2Fo%2FjfSu%2BCD%2F4lGQwDWeHRq7jIiZwl00B3lFlT95Dc5Nln0zTjAbNtBs19IUyf1a%2B5HdLzghSYq02clejyjRifI8wR2W%2FMY8iPFXOqUXe0BT2enPp2BBvUUz4tVH0OApMBKWVL97Nemxr3YNGPoeAL5Dp6yxuK9DDzRhvfh5JFxwNJRDz%2FlJZ9yLxZOLojBmcw3%2FzIwwY6pgEf2lqU0QE76SDGokqUUWJmbIc4bvlYHVh%2FPie4Bgo%2BJ6YQs3d%2BHezF9RO%2BrkwJBjUPYf4nOzfsMdH4qfoWxiW4pWI5sW9w8S2ruoVnDCLubAQQuOU2gf%2B8QewmAvE6As%2FY4VYle4KFzjjM94Iw5%2BFTktDrsu7M7b48bjaYlMpHBQf3cD%2FKZGsyWMs9BZwYPaqY3uPN8urbYd5XsNuGAkFDDuXkTqgH&X-Amz-Signature=c30c6f70158f0314dcf4d056b494242adee679b17f32be451460237973d38b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSNNQKK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq9Fh3tHildvmrlyULYwlmYKivC4qt8sArRJVtP%2BrOpAiBks2YCIxAYWsaqOCwCjDF%2FyXEtUVewvb35x9DLqMRbJyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgOqVpuVwkMtC2jRKtwDqgiJ04ECniJYPP7ACje83tLLf8oOlcrNmqG19iwct7DwKeuUSufQeReWFn5VU0Lutl0IYX6h6qSCUpda36A8Vn6COH6T09fszpamARn8Nv11KfOltdGnGsFaQ%2Bs5xKqaWqkvbIGSwwjj1JJ0X9J5Hk%2BSOxF97PipdWJc8u5q%2B8%2F1Wkh3Qgs1VN4xjUNtXwlGo4d8eyk%2BY%2BTJnxzxuJdv9KGsBuS0EiXzTxqK2v51MfWJSQ8%2FZBTaM9Nn8r%2BzwpjCFMstKUhJDIkgIlEtfJe59KfhIhRfZ7vUtzwxFxQOaxRMK%2FH73Mm7M0baE0SD7GP7yQDIhQxOdK5NLF35EOl7K44QmSVxX7HYIZ7oby48AUKjyrV6qco7faCqPD%2FkyOZ3u%2B0c1hPie0t7yR%2F6TNJJx8qtnMsOA7fhI0QXfHjzWLcqylqh4LHdP65xSRY%2Fo%2FjfSu%2BCD%2F4lGQwDWeHRq7jIiZwl00B3lFlT95Dc5Nln0zTjAbNtBs19IUyf1a%2B5HdLzghSYq02clejyjRifI8wR2W%2FMY8iPFXOqUXe0BT2enPp2BBvUUz4tVH0OApMBKWVL97Nemxr3YNGPoeAL5Dp6yxuK9DDzRhvfh5JFxwNJRDz%2FlJZ9yLxZOLojBmcw3%2FzIwwY6pgEf2lqU0QE76SDGokqUUWJmbIc4bvlYHVh%2FPie4Bgo%2BJ6YQs3d%2BHezF9RO%2BrkwJBjUPYf4nOzfsMdH4qfoWxiW4pWI5sW9w8S2ruoVnDCLubAQQuOU2gf%2B8QewmAvE6As%2FY4VYle4KFzjjM94Iw5%2BFTktDrsu7M7b48bjaYlMpHBQf3cD%2FKZGsyWMs9BZwYPaqY3uPN8urbYd5XsNuGAkFDDuXkTqgH&X-Amz-Signature=0c0db356527c4043617a5e3e9692ea2a610fb74b017c9fb74deb31e855b5e8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSNNQKK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq9Fh3tHildvmrlyULYwlmYKivC4qt8sArRJVtP%2BrOpAiBks2YCIxAYWsaqOCwCjDF%2FyXEtUVewvb35x9DLqMRbJyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgOqVpuVwkMtC2jRKtwDqgiJ04ECniJYPP7ACje83tLLf8oOlcrNmqG19iwct7DwKeuUSufQeReWFn5VU0Lutl0IYX6h6qSCUpda36A8Vn6COH6T09fszpamARn8Nv11KfOltdGnGsFaQ%2Bs5xKqaWqkvbIGSwwjj1JJ0X9J5Hk%2BSOxF97PipdWJc8u5q%2B8%2F1Wkh3Qgs1VN4xjUNtXwlGo4d8eyk%2BY%2BTJnxzxuJdv9KGsBuS0EiXzTxqK2v51MfWJSQ8%2FZBTaM9Nn8r%2BzwpjCFMstKUhJDIkgIlEtfJe59KfhIhRfZ7vUtzwxFxQOaxRMK%2FH73Mm7M0baE0SD7GP7yQDIhQxOdK5NLF35EOl7K44QmSVxX7HYIZ7oby48AUKjyrV6qco7faCqPD%2FkyOZ3u%2B0c1hPie0t7yR%2F6TNJJx8qtnMsOA7fhI0QXfHjzWLcqylqh4LHdP65xSRY%2Fo%2FjfSu%2BCD%2F4lGQwDWeHRq7jIiZwl00B3lFlT95Dc5Nln0zTjAbNtBs19IUyf1a%2B5HdLzghSYq02clejyjRifI8wR2W%2FMY8iPFXOqUXe0BT2enPp2BBvUUz4tVH0OApMBKWVL97Nemxr3YNGPoeAL5Dp6yxuK9DDzRhvfh5JFxwNJRDz%2FlJZ9yLxZOLojBmcw3%2FzIwwY6pgEf2lqU0QE76SDGokqUUWJmbIc4bvlYHVh%2FPie4Bgo%2BJ6YQs3d%2BHezF9RO%2BrkwJBjUPYf4nOzfsMdH4qfoWxiW4pWI5sW9w8S2ruoVnDCLubAQQuOU2gf%2B8QewmAvE6As%2FY4VYle4KFzjjM94Iw5%2BFTktDrsu7M7b48bjaYlMpHBQf3cD%2FKZGsyWMs9BZwYPaqY3uPN8urbYd5XsNuGAkFDDuXkTqgH&X-Amz-Signature=4d3ff59a19f4b166370fc1ff9d645b8aef46cea872da34e0e2da302701b2f181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSNNQKK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq9Fh3tHildvmrlyULYwlmYKivC4qt8sArRJVtP%2BrOpAiBks2YCIxAYWsaqOCwCjDF%2FyXEtUVewvb35x9DLqMRbJyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgOqVpuVwkMtC2jRKtwDqgiJ04ECniJYPP7ACje83tLLf8oOlcrNmqG19iwct7DwKeuUSufQeReWFn5VU0Lutl0IYX6h6qSCUpda36A8Vn6COH6T09fszpamARn8Nv11KfOltdGnGsFaQ%2Bs5xKqaWqkvbIGSwwjj1JJ0X9J5Hk%2BSOxF97PipdWJc8u5q%2B8%2F1Wkh3Qgs1VN4xjUNtXwlGo4d8eyk%2BY%2BTJnxzxuJdv9KGsBuS0EiXzTxqK2v51MfWJSQ8%2FZBTaM9Nn8r%2BzwpjCFMstKUhJDIkgIlEtfJe59KfhIhRfZ7vUtzwxFxQOaxRMK%2FH73Mm7M0baE0SD7GP7yQDIhQxOdK5NLF35EOl7K44QmSVxX7HYIZ7oby48AUKjyrV6qco7faCqPD%2FkyOZ3u%2B0c1hPie0t7yR%2F6TNJJx8qtnMsOA7fhI0QXfHjzWLcqylqh4LHdP65xSRY%2Fo%2FjfSu%2BCD%2F4lGQwDWeHRq7jIiZwl00B3lFlT95Dc5Nln0zTjAbNtBs19IUyf1a%2B5HdLzghSYq02clejyjRifI8wR2W%2FMY8iPFXOqUXe0BT2enPp2BBvUUz4tVH0OApMBKWVL97Nemxr3YNGPoeAL5Dp6yxuK9DDzRhvfh5JFxwNJRDz%2FlJZ9yLxZOLojBmcw3%2FzIwwY6pgEf2lqU0QE76SDGokqUUWJmbIc4bvlYHVh%2FPie4Bgo%2BJ6YQs3d%2BHezF9RO%2BrkwJBjUPYf4nOzfsMdH4qfoWxiW4pWI5sW9w8S2ruoVnDCLubAQQuOU2gf%2B8QewmAvE6As%2FY4VYle4KFzjjM94Iw5%2BFTktDrsu7M7b48bjaYlMpHBQf3cD%2FKZGsyWMs9BZwYPaqY3uPN8urbYd5XsNuGAkFDDuXkTqgH&X-Amz-Signature=7a50737ee6650c4d8c8c442b41352d1b462d3ad6c92e3ebc61b5b8cf1a5e9039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSNNQKK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq9Fh3tHildvmrlyULYwlmYKivC4qt8sArRJVtP%2BrOpAiBks2YCIxAYWsaqOCwCjDF%2FyXEtUVewvb35x9DLqMRbJyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgOqVpuVwkMtC2jRKtwDqgiJ04ECniJYPP7ACje83tLLf8oOlcrNmqG19iwct7DwKeuUSufQeReWFn5VU0Lutl0IYX6h6qSCUpda36A8Vn6COH6T09fszpamARn8Nv11KfOltdGnGsFaQ%2Bs5xKqaWqkvbIGSwwjj1JJ0X9J5Hk%2BSOxF97PipdWJc8u5q%2B8%2F1Wkh3Qgs1VN4xjUNtXwlGo4d8eyk%2BY%2BTJnxzxuJdv9KGsBuS0EiXzTxqK2v51MfWJSQ8%2FZBTaM9Nn8r%2BzwpjCFMstKUhJDIkgIlEtfJe59KfhIhRfZ7vUtzwxFxQOaxRMK%2FH73Mm7M0baE0SD7GP7yQDIhQxOdK5NLF35EOl7K44QmSVxX7HYIZ7oby48AUKjyrV6qco7faCqPD%2FkyOZ3u%2B0c1hPie0t7yR%2F6TNJJx8qtnMsOA7fhI0QXfHjzWLcqylqh4LHdP65xSRY%2Fo%2FjfSu%2BCD%2F4lGQwDWeHRq7jIiZwl00B3lFlT95Dc5Nln0zTjAbNtBs19IUyf1a%2B5HdLzghSYq02clejyjRifI8wR2W%2FMY8iPFXOqUXe0BT2enPp2BBvUUz4tVH0OApMBKWVL97Nemxr3YNGPoeAL5Dp6yxuK9DDzRhvfh5JFxwNJRDz%2FlJZ9yLxZOLojBmcw3%2FzIwwY6pgEf2lqU0QE76SDGokqUUWJmbIc4bvlYHVh%2FPie4Bgo%2BJ6YQs3d%2BHezF9RO%2BrkwJBjUPYf4nOzfsMdH4qfoWxiW4pWI5sW9w8S2ruoVnDCLubAQQuOU2gf%2B8QewmAvE6As%2FY4VYle4KFzjjM94Iw5%2BFTktDrsu7M7b48bjaYlMpHBQf3cD%2FKZGsyWMs9BZwYPaqY3uPN8urbYd5XsNuGAkFDDuXkTqgH&X-Amz-Signature=7fcec64b37098f40a453ea34d9163925a574740556a627a61c9b9e3052f78541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSNNQKK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq9Fh3tHildvmrlyULYwlmYKivC4qt8sArRJVtP%2BrOpAiBks2YCIxAYWsaqOCwCjDF%2FyXEtUVewvb35x9DLqMRbJyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgOqVpuVwkMtC2jRKtwDqgiJ04ECniJYPP7ACje83tLLf8oOlcrNmqG19iwct7DwKeuUSufQeReWFn5VU0Lutl0IYX6h6qSCUpda36A8Vn6COH6T09fszpamARn8Nv11KfOltdGnGsFaQ%2Bs5xKqaWqkvbIGSwwjj1JJ0X9J5Hk%2BSOxF97PipdWJc8u5q%2B8%2F1Wkh3Qgs1VN4xjUNtXwlGo4d8eyk%2BY%2BTJnxzxuJdv9KGsBuS0EiXzTxqK2v51MfWJSQ8%2FZBTaM9Nn8r%2BzwpjCFMstKUhJDIkgIlEtfJe59KfhIhRfZ7vUtzwxFxQOaxRMK%2FH73Mm7M0baE0SD7GP7yQDIhQxOdK5NLF35EOl7K44QmSVxX7HYIZ7oby48AUKjyrV6qco7faCqPD%2FkyOZ3u%2B0c1hPie0t7yR%2F6TNJJx8qtnMsOA7fhI0QXfHjzWLcqylqh4LHdP65xSRY%2Fo%2FjfSu%2BCD%2F4lGQwDWeHRq7jIiZwl00B3lFlT95Dc5Nln0zTjAbNtBs19IUyf1a%2B5HdLzghSYq02clejyjRifI8wR2W%2FMY8iPFXOqUXe0BT2enPp2BBvUUz4tVH0OApMBKWVL97Nemxr3YNGPoeAL5Dp6yxuK9DDzRhvfh5JFxwNJRDz%2FlJZ9yLxZOLojBmcw3%2FzIwwY6pgEf2lqU0QE76SDGokqUUWJmbIc4bvlYHVh%2FPie4Bgo%2BJ6YQs3d%2BHezF9RO%2BrkwJBjUPYf4nOzfsMdH4qfoWxiW4pWI5sW9w8S2ruoVnDCLubAQQuOU2gf%2B8QewmAvE6As%2FY4VYle4KFzjjM94Iw5%2BFTktDrsu7M7b48bjaYlMpHBQf3cD%2FKZGsyWMs9BZwYPaqY3uPN8urbYd5XsNuGAkFDDuXkTqgH&X-Amz-Signature=342c275c71c14efdbc6b77b9bf76ab622e307a42b37b55db6f182a0f50d041bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSNNQKK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq9Fh3tHildvmrlyULYwlmYKivC4qt8sArRJVtP%2BrOpAiBks2YCIxAYWsaqOCwCjDF%2FyXEtUVewvb35x9DLqMRbJyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgOqVpuVwkMtC2jRKtwDqgiJ04ECniJYPP7ACje83tLLf8oOlcrNmqG19iwct7DwKeuUSufQeReWFn5VU0Lutl0IYX6h6qSCUpda36A8Vn6COH6T09fszpamARn8Nv11KfOltdGnGsFaQ%2Bs5xKqaWqkvbIGSwwjj1JJ0X9J5Hk%2BSOxF97PipdWJc8u5q%2B8%2F1Wkh3Qgs1VN4xjUNtXwlGo4d8eyk%2BY%2BTJnxzxuJdv9KGsBuS0EiXzTxqK2v51MfWJSQ8%2FZBTaM9Nn8r%2BzwpjCFMstKUhJDIkgIlEtfJe59KfhIhRfZ7vUtzwxFxQOaxRMK%2FH73Mm7M0baE0SD7GP7yQDIhQxOdK5NLF35EOl7K44QmSVxX7HYIZ7oby48AUKjyrV6qco7faCqPD%2FkyOZ3u%2B0c1hPie0t7yR%2F6TNJJx8qtnMsOA7fhI0QXfHjzWLcqylqh4LHdP65xSRY%2Fo%2FjfSu%2BCD%2F4lGQwDWeHRq7jIiZwl00B3lFlT95Dc5Nln0zTjAbNtBs19IUyf1a%2B5HdLzghSYq02clejyjRifI8wR2W%2FMY8iPFXOqUXe0BT2enPp2BBvUUz4tVH0OApMBKWVL97Nemxr3YNGPoeAL5Dp6yxuK9DDzRhvfh5JFxwNJRDz%2FlJZ9yLxZOLojBmcw3%2FzIwwY6pgEf2lqU0QE76SDGokqUUWJmbIc4bvlYHVh%2FPie4Bgo%2BJ6YQs3d%2BHezF9RO%2BrkwJBjUPYf4nOzfsMdH4qfoWxiW4pWI5sW9w8S2ruoVnDCLubAQQuOU2gf%2B8QewmAvE6As%2FY4VYle4KFzjjM94Iw5%2BFTktDrsu7M7b48bjaYlMpHBQf3cD%2FKZGsyWMs9BZwYPaqY3uPN8urbYd5XsNuGAkFDDuXkTqgH&X-Amz-Signature=c1d0fac16ae806a97e1f5328aa1d7ca16b5bfbd245afc528b099621de4d430c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
