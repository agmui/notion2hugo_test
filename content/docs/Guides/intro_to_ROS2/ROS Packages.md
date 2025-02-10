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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGJ5F7Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBCgp73n064h%2Boup4VXVtRAjgfxpFCSTKxiEoxgFXaIAiBXv27gz7xeJChvnvr9P%2BirF5rP%2Bowt%2BfUJvf51ZvjuACqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl4UL59EV8KqqZaTKtwD%2Byi2v4eHeg9x6x7gZNOUTYAunGyefMqmPbGH5kqlhROBYEiliei%2BOl3Od02MrRBd9paPxgfjIUEo0gzcJJHzcX4W2ZT2uebGI5pgnqO3dI%2FfUTkDNMIQr4t2HOj1kcCU53MSq1INIBLOJ3Km6auZo%2FUeoEXahHoMv%2B2xUcKbYgs%2FHCqEbHWak3zCOMO5TuVT7Ixy1Ps%2Fy1WnOGRfu7QY0rnAmunwT9CxtGs9IISRIMgBYjeh8z1S2Wf%2Byzi2HqQ9rxYarGjvnPAo6UxR4vkcNalxVEuUyHN%2Ft%2BYQl7nu5wCgHFw333uICcnwdFarxoTqr4UQceAUQMhNUB0BR49vzEnlXRGl2zCs7rVNgxuQmTWa0N8gMIzsZgpXQA0OmWKnpB9Tmixdak1wZfYgFE6kakrtSA%2BOZhkCHrepp8b3tk7NUrUsZe%2B%2BYuY3acAwttJuc5CkU5KxS6KVSOAZ31SoVu%2F4zvZozPhFp3D7u%2BwBcvPUEG1AWHA5XKUXal0Edyu1j%2B%2FE6%2BOXdxfoi3Em3CS%2BUUvYRyKbp3P%2FHcPnn8vyMztZzQ0%2Fe7OFw3WxLY3%2FqkB1SrnRmMzmHk5jxNT6Izj7dFxupyof3xBR4MlVk1V3dk4cdEVpbqzZvQb7zXMwhK6nvQY6pgElQ%2BqFfVtKeziwTeq7QxLNBZfvwSRSee0VnDog3cCVb3TVVgYmLbt1OrcB4roVu2eyCcRcZIOx2nrHRKBjOFgCt%2Fvx8tGv9vE4grBgHoB02a5Wn5UMcfv3FvN5RB6iorfcgHBqmaVYW84WzY89HZRHjbUZPyVqwvGHGXIn6RSF5C3m2BlJwJoAIOA69piuVw9ByDKnogyoimiUmtiSZ0iKBRSfxb1Z&X-Amz-Signature=023e0425fb121b37199d21e38c898ebd7dc6810d851e9e1613bb9f35261fc73b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGJ5F7Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBCgp73n064h%2Boup4VXVtRAjgfxpFCSTKxiEoxgFXaIAiBXv27gz7xeJChvnvr9P%2BirF5rP%2Bowt%2BfUJvf51ZvjuACqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl4UL59EV8KqqZaTKtwD%2Byi2v4eHeg9x6x7gZNOUTYAunGyefMqmPbGH5kqlhROBYEiliei%2BOl3Od02MrRBd9paPxgfjIUEo0gzcJJHzcX4W2ZT2uebGI5pgnqO3dI%2FfUTkDNMIQr4t2HOj1kcCU53MSq1INIBLOJ3Km6auZo%2FUeoEXahHoMv%2B2xUcKbYgs%2FHCqEbHWak3zCOMO5TuVT7Ixy1Ps%2Fy1WnOGRfu7QY0rnAmunwT9CxtGs9IISRIMgBYjeh8z1S2Wf%2Byzi2HqQ9rxYarGjvnPAo6UxR4vkcNalxVEuUyHN%2Ft%2BYQl7nu5wCgHFw333uICcnwdFarxoTqr4UQceAUQMhNUB0BR49vzEnlXRGl2zCs7rVNgxuQmTWa0N8gMIzsZgpXQA0OmWKnpB9Tmixdak1wZfYgFE6kakrtSA%2BOZhkCHrepp8b3tk7NUrUsZe%2B%2BYuY3acAwttJuc5CkU5KxS6KVSOAZ31SoVu%2F4zvZozPhFp3D7u%2BwBcvPUEG1AWHA5XKUXal0Edyu1j%2B%2FE6%2BOXdxfoi3Em3CS%2BUUvYRyKbp3P%2FHcPnn8vyMztZzQ0%2Fe7OFw3WxLY3%2FqkB1SrnRmMzmHk5jxNT6Izj7dFxupyof3xBR4MlVk1V3dk4cdEVpbqzZvQb7zXMwhK6nvQY6pgElQ%2BqFfVtKeziwTeq7QxLNBZfvwSRSee0VnDog3cCVb3TVVgYmLbt1OrcB4roVu2eyCcRcZIOx2nrHRKBjOFgCt%2Fvx8tGv9vE4grBgHoB02a5Wn5UMcfv3FvN5RB6iorfcgHBqmaVYW84WzY89HZRHjbUZPyVqwvGHGXIn6RSF5C3m2BlJwJoAIOA69piuVw9ByDKnogyoimiUmtiSZ0iKBRSfxb1Z&X-Amz-Signature=0f1e53c22cdbe1f75864cf66f8418e9906f25427102db2fca586cc20a62e5e11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGJ5F7Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBCgp73n064h%2Boup4VXVtRAjgfxpFCSTKxiEoxgFXaIAiBXv27gz7xeJChvnvr9P%2BirF5rP%2Bowt%2BfUJvf51ZvjuACqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl4UL59EV8KqqZaTKtwD%2Byi2v4eHeg9x6x7gZNOUTYAunGyefMqmPbGH5kqlhROBYEiliei%2BOl3Od02MrRBd9paPxgfjIUEo0gzcJJHzcX4W2ZT2uebGI5pgnqO3dI%2FfUTkDNMIQr4t2HOj1kcCU53MSq1INIBLOJ3Km6auZo%2FUeoEXahHoMv%2B2xUcKbYgs%2FHCqEbHWak3zCOMO5TuVT7Ixy1Ps%2Fy1WnOGRfu7QY0rnAmunwT9CxtGs9IISRIMgBYjeh8z1S2Wf%2Byzi2HqQ9rxYarGjvnPAo6UxR4vkcNalxVEuUyHN%2Ft%2BYQl7nu5wCgHFw333uICcnwdFarxoTqr4UQceAUQMhNUB0BR49vzEnlXRGl2zCs7rVNgxuQmTWa0N8gMIzsZgpXQA0OmWKnpB9Tmixdak1wZfYgFE6kakrtSA%2BOZhkCHrepp8b3tk7NUrUsZe%2B%2BYuY3acAwttJuc5CkU5KxS6KVSOAZ31SoVu%2F4zvZozPhFp3D7u%2BwBcvPUEG1AWHA5XKUXal0Edyu1j%2B%2FE6%2BOXdxfoi3Em3CS%2BUUvYRyKbp3P%2FHcPnn8vyMztZzQ0%2Fe7OFw3WxLY3%2FqkB1SrnRmMzmHk5jxNT6Izj7dFxupyof3xBR4MlVk1V3dk4cdEVpbqzZvQb7zXMwhK6nvQY6pgElQ%2BqFfVtKeziwTeq7QxLNBZfvwSRSee0VnDog3cCVb3TVVgYmLbt1OrcB4roVu2eyCcRcZIOx2nrHRKBjOFgCt%2Fvx8tGv9vE4grBgHoB02a5Wn5UMcfv3FvN5RB6iorfcgHBqmaVYW84WzY89HZRHjbUZPyVqwvGHGXIn6RSF5C3m2BlJwJoAIOA69piuVw9ByDKnogyoimiUmtiSZ0iKBRSfxb1Z&X-Amz-Signature=354f354867a5e3a09b5726f966a7fb9ab9f27643c8bf8627bc9540ff25c969b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGJ5F7Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBCgp73n064h%2Boup4VXVtRAjgfxpFCSTKxiEoxgFXaIAiBXv27gz7xeJChvnvr9P%2BirF5rP%2Bowt%2BfUJvf51ZvjuACqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl4UL59EV8KqqZaTKtwD%2Byi2v4eHeg9x6x7gZNOUTYAunGyefMqmPbGH5kqlhROBYEiliei%2BOl3Od02MrRBd9paPxgfjIUEo0gzcJJHzcX4W2ZT2uebGI5pgnqO3dI%2FfUTkDNMIQr4t2HOj1kcCU53MSq1INIBLOJ3Km6auZo%2FUeoEXahHoMv%2B2xUcKbYgs%2FHCqEbHWak3zCOMO5TuVT7Ixy1Ps%2Fy1WnOGRfu7QY0rnAmunwT9CxtGs9IISRIMgBYjeh8z1S2Wf%2Byzi2HqQ9rxYarGjvnPAo6UxR4vkcNalxVEuUyHN%2Ft%2BYQl7nu5wCgHFw333uICcnwdFarxoTqr4UQceAUQMhNUB0BR49vzEnlXRGl2zCs7rVNgxuQmTWa0N8gMIzsZgpXQA0OmWKnpB9Tmixdak1wZfYgFE6kakrtSA%2BOZhkCHrepp8b3tk7NUrUsZe%2B%2BYuY3acAwttJuc5CkU5KxS6KVSOAZ31SoVu%2F4zvZozPhFp3D7u%2BwBcvPUEG1AWHA5XKUXal0Edyu1j%2B%2FE6%2BOXdxfoi3Em3CS%2BUUvYRyKbp3P%2FHcPnn8vyMztZzQ0%2Fe7OFw3WxLY3%2FqkB1SrnRmMzmHk5jxNT6Izj7dFxupyof3xBR4MlVk1V3dk4cdEVpbqzZvQb7zXMwhK6nvQY6pgElQ%2BqFfVtKeziwTeq7QxLNBZfvwSRSee0VnDog3cCVb3TVVgYmLbt1OrcB4roVu2eyCcRcZIOx2nrHRKBjOFgCt%2Fvx8tGv9vE4grBgHoB02a5Wn5UMcfv3FvN5RB6iorfcgHBqmaVYW84WzY89HZRHjbUZPyVqwvGHGXIn6RSF5C3m2BlJwJoAIOA69piuVw9ByDKnogyoimiUmtiSZ0iKBRSfxb1Z&X-Amz-Signature=2d9f49ecb7929a63b7f7a57df53e1d73850e62bd4ad992f5edde278a9879ad3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGJ5F7Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBCgp73n064h%2Boup4VXVtRAjgfxpFCSTKxiEoxgFXaIAiBXv27gz7xeJChvnvr9P%2BirF5rP%2Bowt%2BfUJvf51ZvjuACqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl4UL59EV8KqqZaTKtwD%2Byi2v4eHeg9x6x7gZNOUTYAunGyefMqmPbGH5kqlhROBYEiliei%2BOl3Od02MrRBd9paPxgfjIUEo0gzcJJHzcX4W2ZT2uebGI5pgnqO3dI%2FfUTkDNMIQr4t2HOj1kcCU53MSq1INIBLOJ3Km6auZo%2FUeoEXahHoMv%2B2xUcKbYgs%2FHCqEbHWak3zCOMO5TuVT7Ixy1Ps%2Fy1WnOGRfu7QY0rnAmunwT9CxtGs9IISRIMgBYjeh8z1S2Wf%2Byzi2HqQ9rxYarGjvnPAo6UxR4vkcNalxVEuUyHN%2Ft%2BYQl7nu5wCgHFw333uICcnwdFarxoTqr4UQceAUQMhNUB0BR49vzEnlXRGl2zCs7rVNgxuQmTWa0N8gMIzsZgpXQA0OmWKnpB9Tmixdak1wZfYgFE6kakrtSA%2BOZhkCHrepp8b3tk7NUrUsZe%2B%2BYuY3acAwttJuc5CkU5KxS6KVSOAZ31SoVu%2F4zvZozPhFp3D7u%2BwBcvPUEG1AWHA5XKUXal0Edyu1j%2B%2FE6%2BOXdxfoi3Em3CS%2BUUvYRyKbp3P%2FHcPnn8vyMztZzQ0%2Fe7OFw3WxLY3%2FqkB1SrnRmMzmHk5jxNT6Izj7dFxupyof3xBR4MlVk1V3dk4cdEVpbqzZvQb7zXMwhK6nvQY6pgElQ%2BqFfVtKeziwTeq7QxLNBZfvwSRSee0VnDog3cCVb3TVVgYmLbt1OrcB4roVu2eyCcRcZIOx2nrHRKBjOFgCt%2Fvx8tGv9vE4grBgHoB02a5Wn5UMcfv3FvN5RB6iorfcgHBqmaVYW84WzY89HZRHjbUZPyVqwvGHGXIn6RSF5C3m2BlJwJoAIOA69piuVw9ByDKnogyoimiUmtiSZ0iKBRSfxb1Z&X-Amz-Signature=57f58b78d860a9821d5bcf9fbf74da1d315bbe616e03b7f0e7b75e24c28f8083&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGJ5F7Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBCgp73n064h%2Boup4VXVtRAjgfxpFCSTKxiEoxgFXaIAiBXv27gz7xeJChvnvr9P%2BirF5rP%2Bowt%2BfUJvf51ZvjuACqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl4UL59EV8KqqZaTKtwD%2Byi2v4eHeg9x6x7gZNOUTYAunGyefMqmPbGH5kqlhROBYEiliei%2BOl3Od02MrRBd9paPxgfjIUEo0gzcJJHzcX4W2ZT2uebGI5pgnqO3dI%2FfUTkDNMIQr4t2HOj1kcCU53MSq1INIBLOJ3Km6auZo%2FUeoEXahHoMv%2B2xUcKbYgs%2FHCqEbHWak3zCOMO5TuVT7Ixy1Ps%2Fy1WnOGRfu7QY0rnAmunwT9CxtGs9IISRIMgBYjeh8z1S2Wf%2Byzi2HqQ9rxYarGjvnPAo6UxR4vkcNalxVEuUyHN%2Ft%2BYQl7nu5wCgHFw333uICcnwdFarxoTqr4UQceAUQMhNUB0BR49vzEnlXRGl2zCs7rVNgxuQmTWa0N8gMIzsZgpXQA0OmWKnpB9Tmixdak1wZfYgFE6kakrtSA%2BOZhkCHrepp8b3tk7NUrUsZe%2B%2BYuY3acAwttJuc5CkU5KxS6KVSOAZ31SoVu%2F4zvZozPhFp3D7u%2BwBcvPUEG1AWHA5XKUXal0Edyu1j%2B%2FE6%2BOXdxfoi3Em3CS%2BUUvYRyKbp3P%2FHcPnn8vyMztZzQ0%2Fe7OFw3WxLY3%2FqkB1SrnRmMzmHk5jxNT6Izj7dFxupyof3xBR4MlVk1V3dk4cdEVpbqzZvQb7zXMwhK6nvQY6pgElQ%2BqFfVtKeziwTeq7QxLNBZfvwSRSee0VnDog3cCVb3TVVgYmLbt1OrcB4roVu2eyCcRcZIOx2nrHRKBjOFgCt%2Fvx8tGv9vE4grBgHoB02a5Wn5UMcfv3FvN5RB6iorfcgHBqmaVYW84WzY89HZRHjbUZPyVqwvGHGXIn6RSF5C3m2BlJwJoAIOA69piuVw9ByDKnogyoimiUmtiSZ0iKBRSfxb1Z&X-Amz-Signature=648381bf21f12073f49b3635358acecfbe8e43adfac5b299a393ee2a0033493a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URGJ5F7Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBCgp73n064h%2Boup4VXVtRAjgfxpFCSTKxiEoxgFXaIAiBXv27gz7xeJChvnvr9P%2BirF5rP%2Bowt%2BfUJvf51ZvjuACqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwl4UL59EV8KqqZaTKtwD%2Byi2v4eHeg9x6x7gZNOUTYAunGyefMqmPbGH5kqlhROBYEiliei%2BOl3Od02MrRBd9paPxgfjIUEo0gzcJJHzcX4W2ZT2uebGI5pgnqO3dI%2FfUTkDNMIQr4t2HOj1kcCU53MSq1INIBLOJ3Km6auZo%2FUeoEXahHoMv%2B2xUcKbYgs%2FHCqEbHWak3zCOMO5TuVT7Ixy1Ps%2Fy1WnOGRfu7QY0rnAmunwT9CxtGs9IISRIMgBYjeh8z1S2Wf%2Byzi2HqQ9rxYarGjvnPAo6UxR4vkcNalxVEuUyHN%2Ft%2BYQl7nu5wCgHFw333uICcnwdFarxoTqr4UQceAUQMhNUB0BR49vzEnlXRGl2zCs7rVNgxuQmTWa0N8gMIzsZgpXQA0OmWKnpB9Tmixdak1wZfYgFE6kakrtSA%2BOZhkCHrepp8b3tk7NUrUsZe%2B%2BYuY3acAwttJuc5CkU5KxS6KVSOAZ31SoVu%2F4zvZozPhFp3D7u%2BwBcvPUEG1AWHA5XKUXal0Edyu1j%2B%2FE6%2BOXdxfoi3Em3CS%2BUUvYRyKbp3P%2FHcPnn8vyMztZzQ0%2Fe7OFw3WxLY3%2FqkB1SrnRmMzmHk5jxNT6Izj7dFxupyof3xBR4MlVk1V3dk4cdEVpbqzZvQb7zXMwhK6nvQY6pgElQ%2BqFfVtKeziwTeq7QxLNBZfvwSRSee0VnDog3cCVb3TVVgYmLbt1OrcB4roVu2eyCcRcZIOx2nrHRKBjOFgCt%2Fvx8tGv9vE4grBgHoB02a5Wn5UMcfv3FvN5RB6iorfcgHBqmaVYW84WzY89HZRHjbUZPyVqwvGHGXIn6RSF5C3m2BlJwJoAIOA69piuVw9ByDKnogyoimiUmtiSZ0iKBRSfxb1Z&X-Amz-Signature=664b3fbdd69912514f32988a0f6aacc55ccd20ebeabfcec85e969bca4a9d9454&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
