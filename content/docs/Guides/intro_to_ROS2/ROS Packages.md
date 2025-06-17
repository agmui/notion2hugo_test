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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBGLESV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETFFxbWrZCgZZXspELfm0MbBRUoVpcq19YR4ueH4mngAiB5rqyDjTQWgiyjHIEn2GYxEfWD6vglTDJnnpbOAYCxiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMgVpDy4z3KuZdmflxKtwD3AM4d%2BNrz7X23KlCFXgMzW8YMovVa6SX4TlC1L7YMCQVihelU4wGk2I3LRK9IlfcRiCIOpu4ZxqwQrz0eZT5%2BtLV6TVIRkJopj4L5Ip7%2BMTEPCzirBWzcM0l%2BvzhXtK8Dw0a6Ncz4KC%2FxVhIA9KipuNl%2Bd4AktoVChP73xLiPwfF4ZSB2F5V5P0ywW7b7NNcd86DiVmu32lDwEvAUWXm6Z4t0wRuH8bwdGqdO8GOlv3eHXj%2FqYaLF952HCJle6RHsWHw%2Fd4g96hTwKL57HVfFP03fdL7GwqmTePf885gasGThWZD8rhMmmza77GfAmDVRVURRowDKruz6HMPtKO0PZ5Sea%2Fo%2Fl7bL9MV2%2Fl0dgy%2BEO5DqitGjxABpSKOFiyCLYoXihTrtOUkpQ4rljFgdpxc9%2BDcNkf1yrksC0cVGdVGJBRFmNUCbwABohyJ3Fg6hw6G0OaNM4b7A%2FEJ8j5yl9u7PdqN014RFWMMHJFGAmAeCODlHpWP4iZVJAiWabMHlG5SzUEOKe8hKDwmxkAkQ2DJHbDcf7hv8KJjXLYRFKdMAotGHj80pjfelr6QWInsac9fCStEa%2BXc0LlHWWumK%2B1oFZ3t%2Bg5MEPjQZ8mK9Q49MW%2F26DYQLZAYVD0w9sHDwgY6pgHtcO9SC52gzVI4GgL3eU4iQK8zZ1n3FbaOIg8PyLeRJrgfG%2BTthUs6v%2BZx38uTUHg%2BGW50ITIXLyFC6cESQd9lOioThwSlYA5d2076AaEYBY%2BU3nmHF7EasaOd4O%2F32ZeKvPKVy7rtJyIBBc4%2FlDzhIewpN%2BsJDnRX9IWugYxFXnMXQb6SAd6CIBln0ZTGeZvUinTI%2FgtxyMNNKbFYlDLaYcEt3t71&X-Amz-Signature=9781e5d7834fbdc35b09bcafa38a0645d43f2ca16308364fa65d9444934a31f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBGLESV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETFFxbWrZCgZZXspELfm0MbBRUoVpcq19YR4ueH4mngAiB5rqyDjTQWgiyjHIEn2GYxEfWD6vglTDJnnpbOAYCxiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMgVpDy4z3KuZdmflxKtwD3AM4d%2BNrz7X23KlCFXgMzW8YMovVa6SX4TlC1L7YMCQVihelU4wGk2I3LRK9IlfcRiCIOpu4ZxqwQrz0eZT5%2BtLV6TVIRkJopj4L5Ip7%2BMTEPCzirBWzcM0l%2BvzhXtK8Dw0a6Ncz4KC%2FxVhIA9KipuNl%2Bd4AktoVChP73xLiPwfF4ZSB2F5V5P0ywW7b7NNcd86DiVmu32lDwEvAUWXm6Z4t0wRuH8bwdGqdO8GOlv3eHXj%2FqYaLF952HCJle6RHsWHw%2Fd4g96hTwKL57HVfFP03fdL7GwqmTePf885gasGThWZD8rhMmmza77GfAmDVRVURRowDKruz6HMPtKO0PZ5Sea%2Fo%2Fl7bL9MV2%2Fl0dgy%2BEO5DqitGjxABpSKOFiyCLYoXihTrtOUkpQ4rljFgdpxc9%2BDcNkf1yrksC0cVGdVGJBRFmNUCbwABohyJ3Fg6hw6G0OaNM4b7A%2FEJ8j5yl9u7PdqN014RFWMMHJFGAmAeCODlHpWP4iZVJAiWabMHlG5SzUEOKe8hKDwmxkAkQ2DJHbDcf7hv8KJjXLYRFKdMAotGHj80pjfelr6QWInsac9fCStEa%2BXc0LlHWWumK%2B1oFZ3t%2Bg5MEPjQZ8mK9Q49MW%2F26DYQLZAYVD0w9sHDwgY6pgHtcO9SC52gzVI4GgL3eU4iQK8zZ1n3FbaOIg8PyLeRJrgfG%2BTthUs6v%2BZx38uTUHg%2BGW50ITIXLyFC6cESQd9lOioThwSlYA5d2076AaEYBY%2BU3nmHF7EasaOd4O%2F32ZeKvPKVy7rtJyIBBc4%2FlDzhIewpN%2BsJDnRX9IWugYxFXnMXQb6SAd6CIBln0ZTGeZvUinTI%2FgtxyMNNKbFYlDLaYcEt3t71&X-Amz-Signature=48b0502084a3c7176e75b54c8feaf50b5744fd0b7ec0c58eb029830d9c2296de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBGLESV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETFFxbWrZCgZZXspELfm0MbBRUoVpcq19YR4ueH4mngAiB5rqyDjTQWgiyjHIEn2GYxEfWD6vglTDJnnpbOAYCxiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMgVpDy4z3KuZdmflxKtwD3AM4d%2BNrz7X23KlCFXgMzW8YMovVa6SX4TlC1L7YMCQVihelU4wGk2I3LRK9IlfcRiCIOpu4ZxqwQrz0eZT5%2BtLV6TVIRkJopj4L5Ip7%2BMTEPCzirBWzcM0l%2BvzhXtK8Dw0a6Ncz4KC%2FxVhIA9KipuNl%2Bd4AktoVChP73xLiPwfF4ZSB2F5V5P0ywW7b7NNcd86DiVmu32lDwEvAUWXm6Z4t0wRuH8bwdGqdO8GOlv3eHXj%2FqYaLF952HCJle6RHsWHw%2Fd4g96hTwKL57HVfFP03fdL7GwqmTePf885gasGThWZD8rhMmmza77GfAmDVRVURRowDKruz6HMPtKO0PZ5Sea%2Fo%2Fl7bL9MV2%2Fl0dgy%2BEO5DqitGjxABpSKOFiyCLYoXihTrtOUkpQ4rljFgdpxc9%2BDcNkf1yrksC0cVGdVGJBRFmNUCbwABohyJ3Fg6hw6G0OaNM4b7A%2FEJ8j5yl9u7PdqN014RFWMMHJFGAmAeCODlHpWP4iZVJAiWabMHlG5SzUEOKe8hKDwmxkAkQ2DJHbDcf7hv8KJjXLYRFKdMAotGHj80pjfelr6QWInsac9fCStEa%2BXc0LlHWWumK%2B1oFZ3t%2Bg5MEPjQZ8mK9Q49MW%2F26DYQLZAYVD0w9sHDwgY6pgHtcO9SC52gzVI4GgL3eU4iQK8zZ1n3FbaOIg8PyLeRJrgfG%2BTthUs6v%2BZx38uTUHg%2BGW50ITIXLyFC6cESQd9lOioThwSlYA5d2076AaEYBY%2BU3nmHF7EasaOd4O%2F32ZeKvPKVy7rtJyIBBc4%2FlDzhIewpN%2BsJDnRX9IWugYxFXnMXQb6SAd6CIBln0ZTGeZvUinTI%2FgtxyMNNKbFYlDLaYcEt3t71&X-Amz-Signature=7aaf957c2c976bd6c3aadb61dbce4e38a9c75cd952a44b1d34eacf9d9d924f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBGLESV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETFFxbWrZCgZZXspELfm0MbBRUoVpcq19YR4ueH4mngAiB5rqyDjTQWgiyjHIEn2GYxEfWD6vglTDJnnpbOAYCxiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMgVpDy4z3KuZdmflxKtwD3AM4d%2BNrz7X23KlCFXgMzW8YMovVa6SX4TlC1L7YMCQVihelU4wGk2I3LRK9IlfcRiCIOpu4ZxqwQrz0eZT5%2BtLV6TVIRkJopj4L5Ip7%2BMTEPCzirBWzcM0l%2BvzhXtK8Dw0a6Ncz4KC%2FxVhIA9KipuNl%2Bd4AktoVChP73xLiPwfF4ZSB2F5V5P0ywW7b7NNcd86DiVmu32lDwEvAUWXm6Z4t0wRuH8bwdGqdO8GOlv3eHXj%2FqYaLF952HCJle6RHsWHw%2Fd4g96hTwKL57HVfFP03fdL7GwqmTePf885gasGThWZD8rhMmmza77GfAmDVRVURRowDKruz6HMPtKO0PZ5Sea%2Fo%2Fl7bL9MV2%2Fl0dgy%2BEO5DqitGjxABpSKOFiyCLYoXihTrtOUkpQ4rljFgdpxc9%2BDcNkf1yrksC0cVGdVGJBRFmNUCbwABohyJ3Fg6hw6G0OaNM4b7A%2FEJ8j5yl9u7PdqN014RFWMMHJFGAmAeCODlHpWP4iZVJAiWabMHlG5SzUEOKe8hKDwmxkAkQ2DJHbDcf7hv8KJjXLYRFKdMAotGHj80pjfelr6QWInsac9fCStEa%2BXc0LlHWWumK%2B1oFZ3t%2Bg5MEPjQZ8mK9Q49MW%2F26DYQLZAYVD0w9sHDwgY6pgHtcO9SC52gzVI4GgL3eU4iQK8zZ1n3FbaOIg8PyLeRJrgfG%2BTthUs6v%2BZx38uTUHg%2BGW50ITIXLyFC6cESQd9lOioThwSlYA5d2076AaEYBY%2BU3nmHF7EasaOd4O%2F32ZeKvPKVy7rtJyIBBc4%2FlDzhIewpN%2BsJDnRX9IWugYxFXnMXQb6SAd6CIBln0ZTGeZvUinTI%2FgtxyMNNKbFYlDLaYcEt3t71&X-Amz-Signature=1d8309e0dcc813f6999574e7a9e9f2c2583d25496cd92a4548baa00b3360852b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBGLESV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETFFxbWrZCgZZXspELfm0MbBRUoVpcq19YR4ueH4mngAiB5rqyDjTQWgiyjHIEn2GYxEfWD6vglTDJnnpbOAYCxiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMgVpDy4z3KuZdmflxKtwD3AM4d%2BNrz7X23KlCFXgMzW8YMovVa6SX4TlC1L7YMCQVihelU4wGk2I3LRK9IlfcRiCIOpu4ZxqwQrz0eZT5%2BtLV6TVIRkJopj4L5Ip7%2BMTEPCzirBWzcM0l%2BvzhXtK8Dw0a6Ncz4KC%2FxVhIA9KipuNl%2Bd4AktoVChP73xLiPwfF4ZSB2F5V5P0ywW7b7NNcd86DiVmu32lDwEvAUWXm6Z4t0wRuH8bwdGqdO8GOlv3eHXj%2FqYaLF952HCJle6RHsWHw%2Fd4g96hTwKL57HVfFP03fdL7GwqmTePf885gasGThWZD8rhMmmza77GfAmDVRVURRowDKruz6HMPtKO0PZ5Sea%2Fo%2Fl7bL9MV2%2Fl0dgy%2BEO5DqitGjxABpSKOFiyCLYoXihTrtOUkpQ4rljFgdpxc9%2BDcNkf1yrksC0cVGdVGJBRFmNUCbwABohyJ3Fg6hw6G0OaNM4b7A%2FEJ8j5yl9u7PdqN014RFWMMHJFGAmAeCODlHpWP4iZVJAiWabMHlG5SzUEOKe8hKDwmxkAkQ2DJHbDcf7hv8KJjXLYRFKdMAotGHj80pjfelr6QWInsac9fCStEa%2BXc0LlHWWumK%2B1oFZ3t%2Bg5MEPjQZ8mK9Q49MW%2F26DYQLZAYVD0w9sHDwgY6pgHtcO9SC52gzVI4GgL3eU4iQK8zZ1n3FbaOIg8PyLeRJrgfG%2BTthUs6v%2BZx38uTUHg%2BGW50ITIXLyFC6cESQd9lOioThwSlYA5d2076AaEYBY%2BU3nmHF7EasaOd4O%2F32ZeKvPKVy7rtJyIBBc4%2FlDzhIewpN%2BsJDnRX9IWugYxFXnMXQb6SAd6CIBln0ZTGeZvUinTI%2FgtxyMNNKbFYlDLaYcEt3t71&X-Amz-Signature=d0140cf8a7adb1c60419f416c8bb7677f51fbb2c174b052ff774dfc9208ec14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBGLESV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETFFxbWrZCgZZXspELfm0MbBRUoVpcq19YR4ueH4mngAiB5rqyDjTQWgiyjHIEn2GYxEfWD6vglTDJnnpbOAYCxiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMgVpDy4z3KuZdmflxKtwD3AM4d%2BNrz7X23KlCFXgMzW8YMovVa6SX4TlC1L7YMCQVihelU4wGk2I3LRK9IlfcRiCIOpu4ZxqwQrz0eZT5%2BtLV6TVIRkJopj4L5Ip7%2BMTEPCzirBWzcM0l%2BvzhXtK8Dw0a6Ncz4KC%2FxVhIA9KipuNl%2Bd4AktoVChP73xLiPwfF4ZSB2F5V5P0ywW7b7NNcd86DiVmu32lDwEvAUWXm6Z4t0wRuH8bwdGqdO8GOlv3eHXj%2FqYaLF952HCJle6RHsWHw%2Fd4g96hTwKL57HVfFP03fdL7GwqmTePf885gasGThWZD8rhMmmza77GfAmDVRVURRowDKruz6HMPtKO0PZ5Sea%2Fo%2Fl7bL9MV2%2Fl0dgy%2BEO5DqitGjxABpSKOFiyCLYoXihTrtOUkpQ4rljFgdpxc9%2BDcNkf1yrksC0cVGdVGJBRFmNUCbwABohyJ3Fg6hw6G0OaNM4b7A%2FEJ8j5yl9u7PdqN014RFWMMHJFGAmAeCODlHpWP4iZVJAiWabMHlG5SzUEOKe8hKDwmxkAkQ2DJHbDcf7hv8KJjXLYRFKdMAotGHj80pjfelr6QWInsac9fCStEa%2BXc0LlHWWumK%2B1oFZ3t%2Bg5MEPjQZ8mK9Q49MW%2F26DYQLZAYVD0w9sHDwgY6pgHtcO9SC52gzVI4GgL3eU4iQK8zZ1n3FbaOIg8PyLeRJrgfG%2BTthUs6v%2BZx38uTUHg%2BGW50ITIXLyFC6cESQd9lOioThwSlYA5d2076AaEYBY%2BU3nmHF7EasaOd4O%2F32ZeKvPKVy7rtJyIBBc4%2FlDzhIewpN%2BsJDnRX9IWugYxFXnMXQb6SAd6CIBln0ZTGeZvUinTI%2FgtxyMNNKbFYlDLaYcEt3t71&X-Amz-Signature=549f4b0027313c018f79bd6136f38edfe22937a1044520fdfe0f63522f3dc5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBGLESV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETFFxbWrZCgZZXspELfm0MbBRUoVpcq19YR4ueH4mngAiB5rqyDjTQWgiyjHIEn2GYxEfWD6vglTDJnnpbOAYCxiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMgVpDy4z3KuZdmflxKtwD3AM4d%2BNrz7X23KlCFXgMzW8YMovVa6SX4TlC1L7YMCQVihelU4wGk2I3LRK9IlfcRiCIOpu4ZxqwQrz0eZT5%2BtLV6TVIRkJopj4L5Ip7%2BMTEPCzirBWzcM0l%2BvzhXtK8Dw0a6Ncz4KC%2FxVhIA9KipuNl%2Bd4AktoVChP73xLiPwfF4ZSB2F5V5P0ywW7b7NNcd86DiVmu32lDwEvAUWXm6Z4t0wRuH8bwdGqdO8GOlv3eHXj%2FqYaLF952HCJle6RHsWHw%2Fd4g96hTwKL57HVfFP03fdL7GwqmTePf885gasGThWZD8rhMmmza77GfAmDVRVURRowDKruz6HMPtKO0PZ5Sea%2Fo%2Fl7bL9MV2%2Fl0dgy%2BEO5DqitGjxABpSKOFiyCLYoXihTrtOUkpQ4rljFgdpxc9%2BDcNkf1yrksC0cVGdVGJBRFmNUCbwABohyJ3Fg6hw6G0OaNM4b7A%2FEJ8j5yl9u7PdqN014RFWMMHJFGAmAeCODlHpWP4iZVJAiWabMHlG5SzUEOKe8hKDwmxkAkQ2DJHbDcf7hv8KJjXLYRFKdMAotGHj80pjfelr6QWInsac9fCStEa%2BXc0LlHWWumK%2B1oFZ3t%2Bg5MEPjQZ8mK9Q49MW%2F26DYQLZAYVD0w9sHDwgY6pgHtcO9SC52gzVI4GgL3eU4iQK8zZ1n3FbaOIg8PyLeRJrgfG%2BTthUs6v%2BZx38uTUHg%2BGW50ITIXLyFC6cESQd9lOioThwSlYA5d2076AaEYBY%2BU3nmHF7EasaOd4O%2F32ZeKvPKVy7rtJyIBBc4%2FlDzhIewpN%2BsJDnRX9IWugYxFXnMXQb6SAd6CIBln0ZTGeZvUinTI%2FgtxyMNNKbFYlDLaYcEt3t71&X-Amz-Signature=d1209bb0d3151de4ce418a28a0020f03d059b292f63898bef2aa40f95b754d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
