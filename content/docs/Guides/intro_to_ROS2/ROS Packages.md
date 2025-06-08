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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4ML4JR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgo2Uu5ljslYGgx1AT2vHt2rOHkv4VgNnaFwtsYlP3OQIhAJynkQ9KptWdRYvABs0WQdAzY66Cmtr1OtD5zO4IKXRvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiBreCL1N5iAC9HKQq3AM6%2FYwFOcWlNoWRR9KkcVnNPqA2aS%2FoEpLB0NAY9pP2QIuOouDrY1bAHL%2B9Y7OATtJ6nbcGNXjkT1c6yOX2gwrgCIgmfch4NCn%2BAl%2BHmZ8v25pTSdNU0OKORu%2FnnYu%2BBFEot3tnxAH2Y3877D7XH6Gobx0oBpNjoKzguknJ4dMm%2BxGB8zJQqxxIQ8Xop51rPUFpOz7ThzY29qdrlWoYpUmOqlTkJW8ECnNI2fPAjVQemf0oy5geVbX7KYUHR4zTeD3qfxGMRFzKIcq7%2F53Zl9cNb0ZifzYBfejUpqLLWd84lkiJsMC9U9fA6N35UFRXuydz5muzvOoEneAJjbOfhcERPU9%2BuDIbWSiGVSzIuXQ2x5UMZMflIXFJGtxORDyKa9fEt6tisP3D%2BuBed6AQyu5hUG9TcFUjx6bYQT%2FVNJBD8pNzPs8%2FbGHxVxkZJE7%2Fuix6cUOBJFraN8xPks6BmK55%2B%2BNnJi%2Fm4UIY1RW%2FIA6srEEzaEV9HBNEhkEZISzNdjkyQ3ZU%2Fxl%2FdmaWFyKoi%2B3GlZ6oDfXiJL1jS%2B9Rv8ZZIamfnkxAeXCQg%2F60zfpW4g%2BBrVLH0KpXstEYc1%2BTtPrtEpP4UpvXrPgrw%2FS26WkPb2VP3axIBGu6c3lT%2BTCltZPCBjqkAWCfTVwDXaKE6%2BhEbc8%2B%2F78sdhqVNC37B3gCIVI0CdydGc%2Fy2twWTPYWttDnNGflTHn5lKj1ecZJ%2BnTuujeT55P5Y5oBlT60dLjslerh%2FWxmVonLfk79baitaPrjC4Px9NoIde0yAKr7wH0WrgqParD4%2FyqX4TX0iuTAf%2BtYbjMpo5g8qCE3OZuQHYvMIuPCFRD1R6ykfhjh52iFqe0EvNHN3Rs%2B&X-Amz-Signature=0f2166bd68e40ccb04d2ba8707738a1407524a13f13bdb5ec7b19facf1df0ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4ML4JR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgo2Uu5ljslYGgx1AT2vHt2rOHkv4VgNnaFwtsYlP3OQIhAJynkQ9KptWdRYvABs0WQdAzY66Cmtr1OtD5zO4IKXRvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiBreCL1N5iAC9HKQq3AM6%2FYwFOcWlNoWRR9KkcVnNPqA2aS%2FoEpLB0NAY9pP2QIuOouDrY1bAHL%2B9Y7OATtJ6nbcGNXjkT1c6yOX2gwrgCIgmfch4NCn%2BAl%2BHmZ8v25pTSdNU0OKORu%2FnnYu%2BBFEot3tnxAH2Y3877D7XH6Gobx0oBpNjoKzguknJ4dMm%2BxGB8zJQqxxIQ8Xop51rPUFpOz7ThzY29qdrlWoYpUmOqlTkJW8ECnNI2fPAjVQemf0oy5geVbX7KYUHR4zTeD3qfxGMRFzKIcq7%2F53Zl9cNb0ZifzYBfejUpqLLWd84lkiJsMC9U9fA6N35UFRXuydz5muzvOoEneAJjbOfhcERPU9%2BuDIbWSiGVSzIuXQ2x5UMZMflIXFJGtxORDyKa9fEt6tisP3D%2BuBed6AQyu5hUG9TcFUjx6bYQT%2FVNJBD8pNzPs8%2FbGHxVxkZJE7%2Fuix6cUOBJFraN8xPks6BmK55%2B%2BNnJi%2Fm4UIY1RW%2FIA6srEEzaEV9HBNEhkEZISzNdjkyQ3ZU%2Fxl%2FdmaWFyKoi%2B3GlZ6oDfXiJL1jS%2B9Rv8ZZIamfnkxAeXCQg%2F60zfpW4g%2BBrVLH0KpXstEYc1%2BTtPrtEpP4UpvXrPgrw%2FS26WkPb2VP3axIBGu6c3lT%2BTCltZPCBjqkAWCfTVwDXaKE6%2BhEbc8%2B%2F78sdhqVNC37B3gCIVI0CdydGc%2Fy2twWTPYWttDnNGflTHn5lKj1ecZJ%2BnTuujeT55P5Y5oBlT60dLjslerh%2FWxmVonLfk79baitaPrjC4Px9NoIde0yAKr7wH0WrgqParD4%2FyqX4TX0iuTAf%2BtYbjMpo5g8qCE3OZuQHYvMIuPCFRD1R6ykfhjh52iFqe0EvNHN3Rs%2B&X-Amz-Signature=e13cca17d6c85b77530c2aac5038df53d3ae65c21a5fc9df8b65f957ebda8123&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4ML4JR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgo2Uu5ljslYGgx1AT2vHt2rOHkv4VgNnaFwtsYlP3OQIhAJynkQ9KptWdRYvABs0WQdAzY66Cmtr1OtD5zO4IKXRvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiBreCL1N5iAC9HKQq3AM6%2FYwFOcWlNoWRR9KkcVnNPqA2aS%2FoEpLB0NAY9pP2QIuOouDrY1bAHL%2B9Y7OATtJ6nbcGNXjkT1c6yOX2gwrgCIgmfch4NCn%2BAl%2BHmZ8v25pTSdNU0OKORu%2FnnYu%2BBFEot3tnxAH2Y3877D7XH6Gobx0oBpNjoKzguknJ4dMm%2BxGB8zJQqxxIQ8Xop51rPUFpOz7ThzY29qdrlWoYpUmOqlTkJW8ECnNI2fPAjVQemf0oy5geVbX7KYUHR4zTeD3qfxGMRFzKIcq7%2F53Zl9cNb0ZifzYBfejUpqLLWd84lkiJsMC9U9fA6N35UFRXuydz5muzvOoEneAJjbOfhcERPU9%2BuDIbWSiGVSzIuXQ2x5UMZMflIXFJGtxORDyKa9fEt6tisP3D%2BuBed6AQyu5hUG9TcFUjx6bYQT%2FVNJBD8pNzPs8%2FbGHxVxkZJE7%2Fuix6cUOBJFraN8xPks6BmK55%2B%2BNnJi%2Fm4UIY1RW%2FIA6srEEzaEV9HBNEhkEZISzNdjkyQ3ZU%2Fxl%2FdmaWFyKoi%2B3GlZ6oDfXiJL1jS%2B9Rv8ZZIamfnkxAeXCQg%2F60zfpW4g%2BBrVLH0KpXstEYc1%2BTtPrtEpP4UpvXrPgrw%2FS26WkPb2VP3axIBGu6c3lT%2BTCltZPCBjqkAWCfTVwDXaKE6%2BhEbc8%2B%2F78sdhqVNC37B3gCIVI0CdydGc%2Fy2twWTPYWttDnNGflTHn5lKj1ecZJ%2BnTuujeT55P5Y5oBlT60dLjslerh%2FWxmVonLfk79baitaPrjC4Px9NoIde0yAKr7wH0WrgqParD4%2FyqX4TX0iuTAf%2BtYbjMpo5g8qCE3OZuQHYvMIuPCFRD1R6ykfhjh52iFqe0EvNHN3Rs%2B&X-Amz-Signature=3bae61f9bd38f5300920358de709d144594a04559bb1f28f71cebdaa80c18b67&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4ML4JR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgo2Uu5ljslYGgx1AT2vHt2rOHkv4VgNnaFwtsYlP3OQIhAJynkQ9KptWdRYvABs0WQdAzY66Cmtr1OtD5zO4IKXRvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiBreCL1N5iAC9HKQq3AM6%2FYwFOcWlNoWRR9KkcVnNPqA2aS%2FoEpLB0NAY9pP2QIuOouDrY1bAHL%2B9Y7OATtJ6nbcGNXjkT1c6yOX2gwrgCIgmfch4NCn%2BAl%2BHmZ8v25pTSdNU0OKORu%2FnnYu%2BBFEot3tnxAH2Y3877D7XH6Gobx0oBpNjoKzguknJ4dMm%2BxGB8zJQqxxIQ8Xop51rPUFpOz7ThzY29qdrlWoYpUmOqlTkJW8ECnNI2fPAjVQemf0oy5geVbX7KYUHR4zTeD3qfxGMRFzKIcq7%2F53Zl9cNb0ZifzYBfejUpqLLWd84lkiJsMC9U9fA6N35UFRXuydz5muzvOoEneAJjbOfhcERPU9%2BuDIbWSiGVSzIuXQ2x5UMZMflIXFJGtxORDyKa9fEt6tisP3D%2BuBed6AQyu5hUG9TcFUjx6bYQT%2FVNJBD8pNzPs8%2FbGHxVxkZJE7%2Fuix6cUOBJFraN8xPks6BmK55%2B%2BNnJi%2Fm4UIY1RW%2FIA6srEEzaEV9HBNEhkEZISzNdjkyQ3ZU%2Fxl%2FdmaWFyKoi%2B3GlZ6oDfXiJL1jS%2B9Rv8ZZIamfnkxAeXCQg%2F60zfpW4g%2BBrVLH0KpXstEYc1%2BTtPrtEpP4UpvXrPgrw%2FS26WkPb2VP3axIBGu6c3lT%2BTCltZPCBjqkAWCfTVwDXaKE6%2BhEbc8%2B%2F78sdhqVNC37B3gCIVI0CdydGc%2Fy2twWTPYWttDnNGflTHn5lKj1ecZJ%2BnTuujeT55P5Y5oBlT60dLjslerh%2FWxmVonLfk79baitaPrjC4Px9NoIde0yAKr7wH0WrgqParD4%2FyqX4TX0iuTAf%2BtYbjMpo5g8qCE3OZuQHYvMIuPCFRD1R6ykfhjh52iFqe0EvNHN3Rs%2B&X-Amz-Signature=3b8046a278be91084079d21caf4e20c69906d266f22418ccc43accae89cf19f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4ML4JR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgo2Uu5ljslYGgx1AT2vHt2rOHkv4VgNnaFwtsYlP3OQIhAJynkQ9KptWdRYvABs0WQdAzY66Cmtr1OtD5zO4IKXRvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiBreCL1N5iAC9HKQq3AM6%2FYwFOcWlNoWRR9KkcVnNPqA2aS%2FoEpLB0NAY9pP2QIuOouDrY1bAHL%2B9Y7OATtJ6nbcGNXjkT1c6yOX2gwrgCIgmfch4NCn%2BAl%2BHmZ8v25pTSdNU0OKORu%2FnnYu%2BBFEot3tnxAH2Y3877D7XH6Gobx0oBpNjoKzguknJ4dMm%2BxGB8zJQqxxIQ8Xop51rPUFpOz7ThzY29qdrlWoYpUmOqlTkJW8ECnNI2fPAjVQemf0oy5geVbX7KYUHR4zTeD3qfxGMRFzKIcq7%2F53Zl9cNb0ZifzYBfejUpqLLWd84lkiJsMC9U9fA6N35UFRXuydz5muzvOoEneAJjbOfhcERPU9%2BuDIbWSiGVSzIuXQ2x5UMZMflIXFJGtxORDyKa9fEt6tisP3D%2BuBed6AQyu5hUG9TcFUjx6bYQT%2FVNJBD8pNzPs8%2FbGHxVxkZJE7%2Fuix6cUOBJFraN8xPks6BmK55%2B%2BNnJi%2Fm4UIY1RW%2FIA6srEEzaEV9HBNEhkEZISzNdjkyQ3ZU%2Fxl%2FdmaWFyKoi%2B3GlZ6oDfXiJL1jS%2B9Rv8ZZIamfnkxAeXCQg%2F60zfpW4g%2BBrVLH0KpXstEYc1%2BTtPrtEpP4UpvXrPgrw%2FS26WkPb2VP3axIBGu6c3lT%2BTCltZPCBjqkAWCfTVwDXaKE6%2BhEbc8%2B%2F78sdhqVNC37B3gCIVI0CdydGc%2Fy2twWTPYWttDnNGflTHn5lKj1ecZJ%2BnTuujeT55P5Y5oBlT60dLjslerh%2FWxmVonLfk79baitaPrjC4Px9NoIde0yAKr7wH0WrgqParD4%2FyqX4TX0iuTAf%2BtYbjMpo5g8qCE3OZuQHYvMIuPCFRD1R6ykfhjh52iFqe0EvNHN3Rs%2B&X-Amz-Signature=84db5fbcf6833d20c08108391fd2373becb6a32b091e7cfa68911856fad8469d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4ML4JR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgo2Uu5ljslYGgx1AT2vHt2rOHkv4VgNnaFwtsYlP3OQIhAJynkQ9KptWdRYvABs0WQdAzY66Cmtr1OtD5zO4IKXRvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiBreCL1N5iAC9HKQq3AM6%2FYwFOcWlNoWRR9KkcVnNPqA2aS%2FoEpLB0NAY9pP2QIuOouDrY1bAHL%2B9Y7OATtJ6nbcGNXjkT1c6yOX2gwrgCIgmfch4NCn%2BAl%2BHmZ8v25pTSdNU0OKORu%2FnnYu%2BBFEot3tnxAH2Y3877D7XH6Gobx0oBpNjoKzguknJ4dMm%2BxGB8zJQqxxIQ8Xop51rPUFpOz7ThzY29qdrlWoYpUmOqlTkJW8ECnNI2fPAjVQemf0oy5geVbX7KYUHR4zTeD3qfxGMRFzKIcq7%2F53Zl9cNb0ZifzYBfejUpqLLWd84lkiJsMC9U9fA6N35UFRXuydz5muzvOoEneAJjbOfhcERPU9%2BuDIbWSiGVSzIuXQ2x5UMZMflIXFJGtxORDyKa9fEt6tisP3D%2BuBed6AQyu5hUG9TcFUjx6bYQT%2FVNJBD8pNzPs8%2FbGHxVxkZJE7%2Fuix6cUOBJFraN8xPks6BmK55%2B%2BNnJi%2Fm4UIY1RW%2FIA6srEEzaEV9HBNEhkEZISzNdjkyQ3ZU%2Fxl%2FdmaWFyKoi%2B3GlZ6oDfXiJL1jS%2B9Rv8ZZIamfnkxAeXCQg%2F60zfpW4g%2BBrVLH0KpXstEYc1%2BTtPrtEpP4UpvXrPgrw%2FS26WkPb2VP3axIBGu6c3lT%2BTCltZPCBjqkAWCfTVwDXaKE6%2BhEbc8%2B%2F78sdhqVNC37B3gCIVI0CdydGc%2Fy2twWTPYWttDnNGflTHn5lKj1ecZJ%2BnTuujeT55P5Y5oBlT60dLjslerh%2FWxmVonLfk79baitaPrjC4Px9NoIde0yAKr7wH0WrgqParD4%2FyqX4TX0iuTAf%2BtYbjMpo5g8qCE3OZuQHYvMIuPCFRD1R6ykfhjh52iFqe0EvNHN3Rs%2B&X-Amz-Signature=996664f21ab9170762651bb1809e4df1a39c8f143f9295d766b08442b866338a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4ML4JR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgo2Uu5ljslYGgx1AT2vHt2rOHkv4VgNnaFwtsYlP3OQIhAJynkQ9KptWdRYvABs0WQdAzY66Cmtr1OtD5zO4IKXRvKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiBreCL1N5iAC9HKQq3AM6%2FYwFOcWlNoWRR9KkcVnNPqA2aS%2FoEpLB0NAY9pP2QIuOouDrY1bAHL%2B9Y7OATtJ6nbcGNXjkT1c6yOX2gwrgCIgmfch4NCn%2BAl%2BHmZ8v25pTSdNU0OKORu%2FnnYu%2BBFEot3tnxAH2Y3877D7XH6Gobx0oBpNjoKzguknJ4dMm%2BxGB8zJQqxxIQ8Xop51rPUFpOz7ThzY29qdrlWoYpUmOqlTkJW8ECnNI2fPAjVQemf0oy5geVbX7KYUHR4zTeD3qfxGMRFzKIcq7%2F53Zl9cNb0ZifzYBfejUpqLLWd84lkiJsMC9U9fA6N35UFRXuydz5muzvOoEneAJjbOfhcERPU9%2BuDIbWSiGVSzIuXQ2x5UMZMflIXFJGtxORDyKa9fEt6tisP3D%2BuBed6AQyu5hUG9TcFUjx6bYQT%2FVNJBD8pNzPs8%2FbGHxVxkZJE7%2Fuix6cUOBJFraN8xPks6BmK55%2B%2BNnJi%2Fm4UIY1RW%2FIA6srEEzaEV9HBNEhkEZISzNdjkyQ3ZU%2Fxl%2FdmaWFyKoi%2B3GlZ6oDfXiJL1jS%2B9Rv8ZZIamfnkxAeXCQg%2F60zfpW4g%2BBrVLH0KpXstEYc1%2BTtPrtEpP4UpvXrPgrw%2FS26WkPb2VP3axIBGu6c3lT%2BTCltZPCBjqkAWCfTVwDXaKE6%2BhEbc8%2B%2F78sdhqVNC37B3gCIVI0CdydGc%2Fy2twWTPYWttDnNGflTHn5lKj1ecZJ%2BnTuujeT55P5Y5oBlT60dLjslerh%2FWxmVonLfk79baitaPrjC4Px9NoIde0yAKr7wH0WrgqParD4%2FyqX4TX0iuTAf%2BtYbjMpo5g8qCE3OZuQHYvMIuPCFRD1R6ykfhjh52iFqe0EvNHN3Rs%2B&X-Amz-Signature=01283d6c699771c34c0cb6e609d3f95f2a69dd0142ef9b286202749e3f7f64c6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
