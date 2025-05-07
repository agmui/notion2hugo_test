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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MIAXCM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN73xN1UDrCPxh5l8U9dZUZignvq45w72FDyO7PI5rYAiEApSPAAKATbQZ91M7HKCGRrmbFqbkxb75D6HKHxlmFlBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP%2BBQcfMrzqR9a5HACrcAymSy%2B02X7fL8clwZOEXSZohacnfQz4%2Bb6%2By7%2F1PEVb4wf7885Al6I1Wrd1XILxagcGiToqJkQYccD9nEVwa%2BL9bPZ%2B%2FvTSRRmixNbMMOcSPJ%2BJPTaXAlE9WqG28JOzyfsWwbhZ7aSla4ThFFuPhZEcvUzgNV%2BKJ1EGSu7zH6RjLjs%2BQc9lVdUNF8sB3rEvuPQNWEcEbtuH5SqBFSST3KC6ijxRbiBGMopbOl9dAhIiA0QmOMfrFJi8QeTmerW25%2FQnJyaugPanqtRR5UemESuVFBDO8mkqS3iuzHAYjH4OWEvdQKIavs4OyukqHYbnfxHh8fg96tvFP19lpTVcVeQIGg4biURcsmzCBaLcHOgH1ppPaKT9Mj8T%2BLLv9DyrlnXb8ctiSw2nZjRcNawPabrnsVdXwWt8mI%2BshFnI6A%2BGzlm%2F%2B2GjpC8LO%2FWqeWeB%2BxOhY8MsqEd%2Bh4vos7%2FooCJU93im%2B%2BjmVfhmNE3C5dwJcbh77yqxeM68dG0EdtcclU26WslqUEOcuO1IvybSjYYk4lI3LEsKXyQOj%2BKNYNYzKZlbIT8OE3aNb2SLMpxskJWTloql8hgwiHahI5O6GI7Z2aWoz9aNO98Z1qZZJVFTIl9CPaxKn9ndP6es%2BMPbP7cAGOqUBvqZewzo%2FltaUzop%2FdsBEuqKYK4txppU%2BaOH1m8aBfCc%2BfOzvfrEGGJHBtJca8e7ze8u8mDxLNgIPzFrZUv7%2FLvCuR4%2BaLpmwOMWgxGsbrZw%2FqAdqcl0Ah%2BL4qVMWs%2B6Hxstw2mBybKeeoyS7oTg8qRNN%2B1LKSL8cPu2xkKED9atF%2Bx3HWSduI4WYzZCOYgOeo2Yec262RjSZDNG%2FPZL4mEFgoRU5&X-Amz-Signature=e1879e9c3341dda61d0dd4abafe07219cacf834f1a985bb3f16a7d018733fdc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MIAXCM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN73xN1UDrCPxh5l8U9dZUZignvq45w72FDyO7PI5rYAiEApSPAAKATbQZ91M7HKCGRrmbFqbkxb75D6HKHxlmFlBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP%2BBQcfMrzqR9a5HACrcAymSy%2B02X7fL8clwZOEXSZohacnfQz4%2Bb6%2By7%2F1PEVb4wf7885Al6I1Wrd1XILxagcGiToqJkQYccD9nEVwa%2BL9bPZ%2B%2FvTSRRmixNbMMOcSPJ%2BJPTaXAlE9WqG28JOzyfsWwbhZ7aSla4ThFFuPhZEcvUzgNV%2BKJ1EGSu7zH6RjLjs%2BQc9lVdUNF8sB3rEvuPQNWEcEbtuH5SqBFSST3KC6ijxRbiBGMopbOl9dAhIiA0QmOMfrFJi8QeTmerW25%2FQnJyaugPanqtRR5UemESuVFBDO8mkqS3iuzHAYjH4OWEvdQKIavs4OyukqHYbnfxHh8fg96tvFP19lpTVcVeQIGg4biURcsmzCBaLcHOgH1ppPaKT9Mj8T%2BLLv9DyrlnXb8ctiSw2nZjRcNawPabrnsVdXwWt8mI%2BshFnI6A%2BGzlm%2F%2B2GjpC8LO%2FWqeWeB%2BxOhY8MsqEd%2Bh4vos7%2FooCJU93im%2B%2BjmVfhmNE3C5dwJcbh77yqxeM68dG0EdtcclU26WslqUEOcuO1IvybSjYYk4lI3LEsKXyQOj%2BKNYNYzKZlbIT8OE3aNb2SLMpxskJWTloql8hgwiHahI5O6GI7Z2aWoz9aNO98Z1qZZJVFTIl9CPaxKn9ndP6es%2BMPbP7cAGOqUBvqZewzo%2FltaUzop%2FdsBEuqKYK4txppU%2BaOH1m8aBfCc%2BfOzvfrEGGJHBtJca8e7ze8u8mDxLNgIPzFrZUv7%2FLvCuR4%2BaLpmwOMWgxGsbrZw%2FqAdqcl0Ah%2BL4qVMWs%2B6Hxstw2mBybKeeoyS7oTg8qRNN%2B1LKSL8cPu2xkKED9atF%2Bx3HWSduI4WYzZCOYgOeo2Yec262RjSZDNG%2FPZL4mEFgoRU5&X-Amz-Signature=72fdcc2b39f108d5a96fc6d55545cc90085dfa08903dd9c0c9d3203ca4dda345&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MIAXCM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN73xN1UDrCPxh5l8U9dZUZignvq45w72FDyO7PI5rYAiEApSPAAKATbQZ91M7HKCGRrmbFqbkxb75D6HKHxlmFlBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP%2BBQcfMrzqR9a5HACrcAymSy%2B02X7fL8clwZOEXSZohacnfQz4%2Bb6%2By7%2F1PEVb4wf7885Al6I1Wrd1XILxagcGiToqJkQYccD9nEVwa%2BL9bPZ%2B%2FvTSRRmixNbMMOcSPJ%2BJPTaXAlE9WqG28JOzyfsWwbhZ7aSla4ThFFuPhZEcvUzgNV%2BKJ1EGSu7zH6RjLjs%2BQc9lVdUNF8sB3rEvuPQNWEcEbtuH5SqBFSST3KC6ijxRbiBGMopbOl9dAhIiA0QmOMfrFJi8QeTmerW25%2FQnJyaugPanqtRR5UemESuVFBDO8mkqS3iuzHAYjH4OWEvdQKIavs4OyukqHYbnfxHh8fg96tvFP19lpTVcVeQIGg4biURcsmzCBaLcHOgH1ppPaKT9Mj8T%2BLLv9DyrlnXb8ctiSw2nZjRcNawPabrnsVdXwWt8mI%2BshFnI6A%2BGzlm%2F%2B2GjpC8LO%2FWqeWeB%2BxOhY8MsqEd%2Bh4vos7%2FooCJU93im%2B%2BjmVfhmNE3C5dwJcbh77yqxeM68dG0EdtcclU26WslqUEOcuO1IvybSjYYk4lI3LEsKXyQOj%2BKNYNYzKZlbIT8OE3aNb2SLMpxskJWTloql8hgwiHahI5O6GI7Z2aWoz9aNO98Z1qZZJVFTIl9CPaxKn9ndP6es%2BMPbP7cAGOqUBvqZewzo%2FltaUzop%2FdsBEuqKYK4txppU%2BaOH1m8aBfCc%2BfOzvfrEGGJHBtJca8e7ze8u8mDxLNgIPzFrZUv7%2FLvCuR4%2BaLpmwOMWgxGsbrZw%2FqAdqcl0Ah%2BL4qVMWs%2B6Hxstw2mBybKeeoyS7oTg8qRNN%2B1LKSL8cPu2xkKED9atF%2Bx3HWSduI4WYzZCOYgOeo2Yec262RjSZDNG%2FPZL4mEFgoRU5&X-Amz-Signature=39b01648cf1e5eca6d5fddf5a88fc562dfee95f90bbb089395dd91f9eced1cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MIAXCM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN73xN1UDrCPxh5l8U9dZUZignvq45w72FDyO7PI5rYAiEApSPAAKATbQZ91M7HKCGRrmbFqbkxb75D6HKHxlmFlBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP%2BBQcfMrzqR9a5HACrcAymSy%2B02X7fL8clwZOEXSZohacnfQz4%2Bb6%2By7%2F1PEVb4wf7885Al6I1Wrd1XILxagcGiToqJkQYccD9nEVwa%2BL9bPZ%2B%2FvTSRRmixNbMMOcSPJ%2BJPTaXAlE9WqG28JOzyfsWwbhZ7aSla4ThFFuPhZEcvUzgNV%2BKJ1EGSu7zH6RjLjs%2BQc9lVdUNF8sB3rEvuPQNWEcEbtuH5SqBFSST3KC6ijxRbiBGMopbOl9dAhIiA0QmOMfrFJi8QeTmerW25%2FQnJyaugPanqtRR5UemESuVFBDO8mkqS3iuzHAYjH4OWEvdQKIavs4OyukqHYbnfxHh8fg96tvFP19lpTVcVeQIGg4biURcsmzCBaLcHOgH1ppPaKT9Mj8T%2BLLv9DyrlnXb8ctiSw2nZjRcNawPabrnsVdXwWt8mI%2BshFnI6A%2BGzlm%2F%2B2GjpC8LO%2FWqeWeB%2BxOhY8MsqEd%2Bh4vos7%2FooCJU93im%2B%2BjmVfhmNE3C5dwJcbh77yqxeM68dG0EdtcclU26WslqUEOcuO1IvybSjYYk4lI3LEsKXyQOj%2BKNYNYzKZlbIT8OE3aNb2SLMpxskJWTloql8hgwiHahI5O6GI7Z2aWoz9aNO98Z1qZZJVFTIl9CPaxKn9ndP6es%2BMPbP7cAGOqUBvqZewzo%2FltaUzop%2FdsBEuqKYK4txppU%2BaOH1m8aBfCc%2BfOzvfrEGGJHBtJca8e7ze8u8mDxLNgIPzFrZUv7%2FLvCuR4%2BaLpmwOMWgxGsbrZw%2FqAdqcl0Ah%2BL4qVMWs%2B6Hxstw2mBybKeeoyS7oTg8qRNN%2B1LKSL8cPu2xkKED9atF%2Bx3HWSduI4WYzZCOYgOeo2Yec262RjSZDNG%2FPZL4mEFgoRU5&X-Amz-Signature=19c719833b676f0fcfeb59413a29ca35aebb5558896700738d574239c62f35e4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MIAXCM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN73xN1UDrCPxh5l8U9dZUZignvq45w72FDyO7PI5rYAiEApSPAAKATbQZ91M7HKCGRrmbFqbkxb75D6HKHxlmFlBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP%2BBQcfMrzqR9a5HACrcAymSy%2B02X7fL8clwZOEXSZohacnfQz4%2Bb6%2By7%2F1PEVb4wf7885Al6I1Wrd1XILxagcGiToqJkQYccD9nEVwa%2BL9bPZ%2B%2FvTSRRmixNbMMOcSPJ%2BJPTaXAlE9WqG28JOzyfsWwbhZ7aSla4ThFFuPhZEcvUzgNV%2BKJ1EGSu7zH6RjLjs%2BQc9lVdUNF8sB3rEvuPQNWEcEbtuH5SqBFSST3KC6ijxRbiBGMopbOl9dAhIiA0QmOMfrFJi8QeTmerW25%2FQnJyaugPanqtRR5UemESuVFBDO8mkqS3iuzHAYjH4OWEvdQKIavs4OyukqHYbnfxHh8fg96tvFP19lpTVcVeQIGg4biURcsmzCBaLcHOgH1ppPaKT9Mj8T%2BLLv9DyrlnXb8ctiSw2nZjRcNawPabrnsVdXwWt8mI%2BshFnI6A%2BGzlm%2F%2B2GjpC8LO%2FWqeWeB%2BxOhY8MsqEd%2Bh4vos7%2FooCJU93im%2B%2BjmVfhmNE3C5dwJcbh77yqxeM68dG0EdtcclU26WslqUEOcuO1IvybSjYYk4lI3LEsKXyQOj%2BKNYNYzKZlbIT8OE3aNb2SLMpxskJWTloql8hgwiHahI5O6GI7Z2aWoz9aNO98Z1qZZJVFTIl9CPaxKn9ndP6es%2BMPbP7cAGOqUBvqZewzo%2FltaUzop%2FdsBEuqKYK4txppU%2BaOH1m8aBfCc%2BfOzvfrEGGJHBtJca8e7ze8u8mDxLNgIPzFrZUv7%2FLvCuR4%2BaLpmwOMWgxGsbrZw%2FqAdqcl0Ah%2BL4qVMWs%2B6Hxstw2mBybKeeoyS7oTg8qRNN%2B1LKSL8cPu2xkKED9atF%2Bx3HWSduI4WYzZCOYgOeo2Yec262RjSZDNG%2FPZL4mEFgoRU5&X-Amz-Signature=4e1d1b3ad50fcdeddd704a8af0d1ccc1f05df93a3b0e6924f389bd687209baef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MIAXCM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN73xN1UDrCPxh5l8U9dZUZignvq45w72FDyO7PI5rYAiEApSPAAKATbQZ91M7HKCGRrmbFqbkxb75D6HKHxlmFlBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP%2BBQcfMrzqR9a5HACrcAymSy%2B02X7fL8clwZOEXSZohacnfQz4%2Bb6%2By7%2F1PEVb4wf7885Al6I1Wrd1XILxagcGiToqJkQYccD9nEVwa%2BL9bPZ%2B%2FvTSRRmixNbMMOcSPJ%2BJPTaXAlE9WqG28JOzyfsWwbhZ7aSla4ThFFuPhZEcvUzgNV%2BKJ1EGSu7zH6RjLjs%2BQc9lVdUNF8sB3rEvuPQNWEcEbtuH5SqBFSST3KC6ijxRbiBGMopbOl9dAhIiA0QmOMfrFJi8QeTmerW25%2FQnJyaugPanqtRR5UemESuVFBDO8mkqS3iuzHAYjH4OWEvdQKIavs4OyukqHYbnfxHh8fg96tvFP19lpTVcVeQIGg4biURcsmzCBaLcHOgH1ppPaKT9Mj8T%2BLLv9DyrlnXb8ctiSw2nZjRcNawPabrnsVdXwWt8mI%2BshFnI6A%2BGzlm%2F%2B2GjpC8LO%2FWqeWeB%2BxOhY8MsqEd%2Bh4vos7%2FooCJU93im%2B%2BjmVfhmNE3C5dwJcbh77yqxeM68dG0EdtcclU26WslqUEOcuO1IvybSjYYk4lI3LEsKXyQOj%2BKNYNYzKZlbIT8OE3aNb2SLMpxskJWTloql8hgwiHahI5O6GI7Z2aWoz9aNO98Z1qZZJVFTIl9CPaxKn9ndP6es%2BMPbP7cAGOqUBvqZewzo%2FltaUzop%2FdsBEuqKYK4txppU%2BaOH1m8aBfCc%2BfOzvfrEGGJHBtJca8e7ze8u8mDxLNgIPzFrZUv7%2FLvCuR4%2BaLpmwOMWgxGsbrZw%2FqAdqcl0Ah%2BL4qVMWs%2B6Hxstw2mBybKeeoyS7oTg8qRNN%2B1LKSL8cPu2xkKED9atF%2Bx3HWSduI4WYzZCOYgOeo2Yec262RjSZDNG%2FPZL4mEFgoRU5&X-Amz-Signature=c5d8bcfe7c8b235931ec44f8736c8ed3cf0e39a08aff0c14f2a6d9a7076ac868&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MIAXCM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN73xN1UDrCPxh5l8U9dZUZignvq45w72FDyO7PI5rYAiEApSPAAKATbQZ91M7HKCGRrmbFqbkxb75D6HKHxlmFlBIq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP%2BBQcfMrzqR9a5HACrcAymSy%2B02X7fL8clwZOEXSZohacnfQz4%2Bb6%2By7%2F1PEVb4wf7885Al6I1Wrd1XILxagcGiToqJkQYccD9nEVwa%2BL9bPZ%2B%2FvTSRRmixNbMMOcSPJ%2BJPTaXAlE9WqG28JOzyfsWwbhZ7aSla4ThFFuPhZEcvUzgNV%2BKJ1EGSu7zH6RjLjs%2BQc9lVdUNF8sB3rEvuPQNWEcEbtuH5SqBFSST3KC6ijxRbiBGMopbOl9dAhIiA0QmOMfrFJi8QeTmerW25%2FQnJyaugPanqtRR5UemESuVFBDO8mkqS3iuzHAYjH4OWEvdQKIavs4OyukqHYbnfxHh8fg96tvFP19lpTVcVeQIGg4biURcsmzCBaLcHOgH1ppPaKT9Mj8T%2BLLv9DyrlnXb8ctiSw2nZjRcNawPabrnsVdXwWt8mI%2BshFnI6A%2BGzlm%2F%2B2GjpC8LO%2FWqeWeB%2BxOhY8MsqEd%2Bh4vos7%2FooCJU93im%2B%2BjmVfhmNE3C5dwJcbh77yqxeM68dG0EdtcclU26WslqUEOcuO1IvybSjYYk4lI3LEsKXyQOj%2BKNYNYzKZlbIT8OE3aNb2SLMpxskJWTloql8hgwiHahI5O6GI7Z2aWoz9aNO98Z1qZZJVFTIl9CPaxKn9ndP6es%2BMPbP7cAGOqUBvqZewzo%2FltaUzop%2FdsBEuqKYK4txppU%2BaOH1m8aBfCc%2BfOzvfrEGGJHBtJca8e7ze8u8mDxLNgIPzFrZUv7%2FLvCuR4%2BaLpmwOMWgxGsbrZw%2FqAdqcl0Ah%2BL4qVMWs%2B6Hxstw2mBybKeeoyS7oTg8qRNN%2B1LKSL8cPu2xkKED9atF%2Bx3HWSduI4WYzZCOYgOeo2Yec262RjSZDNG%2FPZL4mEFgoRU5&X-Amz-Signature=240497c417b3be36312d9e99851cce0f64a712708840ad83f25b54b0a3d19a30&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
