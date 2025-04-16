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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6H5QYV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVVHDDPmoSJ957Pf%2FvMXe6K9it1h2LG0R234xS%2FA%2FOyAIhANE8mOgBZq57r5djRqWZkkRCGsi%2FASW4enhtiJNpaJjYKv8DCEcQABoMNjM3NDIzMTgzODA1Igx%2BrgVkcF%2Bd%2BX46TFAq3AP5e6VijYjBtyfPXe1JjgNy8AO%2FwKWGepp6lYCeWUHRJTevNkuoxgn%2BFMFV0Gdf%2BaqNCzC9vXiknn0q8CH%2BKOBpxUyrijn4%2B%2FDi29sFen%2FaimIN%2FqOoz9DrJqPDQ929%2Bh0zTYHZ6jwi%2FOV%2BTuaigcoke%2BevOglpf9zClD5eTBMZKMuKvgfD2gSA%2FwjhXaeBPpez3Zljuhonu9xGo3pFVnD87azZhuaR22lnnNmikv4lp0TEcAccNc5Le2uwfnvWfxkzdekXAgPirncksJFt4Yl87vlpGE7ovBYKCbVczaEbYJNCUsV4Hf%2BpggzWILz0kF6H2NfaOrtdp8y0HyrUTVpz70eN82fTU9clpLpacLQxMuFPQthcklGgICeQIf1f9z9mYOozSE9TASHd8n3r6tdTRaotJQtj1EsIYkSw289IMIMk1OP1jJU4ievRCybP3ws3oN2q4AiQwkWWlFoP6gQ0K5Azq7CMqXFVDvI%2B1iI3kfaAgNCl2XSmc%2B8iJ80D7ncEK81QKhefiaQuXZmJ%2B8X9R8Xevx%2Fi%2BOZzqcdjuMieFB%2BVRAH%2BFpqRfxv%2F3ZsRFdQvmMPidEPpKPeeW3vmX2Q%2FKAqcvo%2BMPGMTCSnTy8%2BVIzDYYp5O8tMBeC1y2jD0%2BP6%2FBjqkARaHJju1I3s7AbejpYt%2BOH8ODD6B3pTicmxpAhgQZE%2FSWSGfOquFWE8y4fjKXL2reE3v0TyYjbnWV4yaRCQRv%2BTibPEy0WoYbexf41HC6lbq9I%2B729pGPvL06zQ62olY9WxxnjMNlOu4G5EVfkAg6UfyItWAGvuVbDRu%2FhcRYHHir3i3Gxl9FTv%2F446FNENQi3cjWbySZJK1vs2DeWzZyTcAMss0&X-Amz-Signature=e492c926a5d923d9ff18857baeb1d80c8ff6caf2f9fd90fd6d8c42ee3dd9bd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6H5QYV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVVHDDPmoSJ957Pf%2FvMXe6K9it1h2LG0R234xS%2FA%2FOyAIhANE8mOgBZq57r5djRqWZkkRCGsi%2FASW4enhtiJNpaJjYKv8DCEcQABoMNjM3NDIzMTgzODA1Igx%2BrgVkcF%2Bd%2BX46TFAq3AP5e6VijYjBtyfPXe1JjgNy8AO%2FwKWGepp6lYCeWUHRJTevNkuoxgn%2BFMFV0Gdf%2BaqNCzC9vXiknn0q8CH%2BKOBpxUyrijn4%2B%2FDi29sFen%2FaimIN%2FqOoz9DrJqPDQ929%2Bh0zTYHZ6jwi%2FOV%2BTuaigcoke%2BevOglpf9zClD5eTBMZKMuKvgfD2gSA%2FwjhXaeBPpez3Zljuhonu9xGo3pFVnD87azZhuaR22lnnNmikv4lp0TEcAccNc5Le2uwfnvWfxkzdekXAgPirncksJFt4Yl87vlpGE7ovBYKCbVczaEbYJNCUsV4Hf%2BpggzWILz0kF6H2NfaOrtdp8y0HyrUTVpz70eN82fTU9clpLpacLQxMuFPQthcklGgICeQIf1f9z9mYOozSE9TASHd8n3r6tdTRaotJQtj1EsIYkSw289IMIMk1OP1jJU4ievRCybP3ws3oN2q4AiQwkWWlFoP6gQ0K5Azq7CMqXFVDvI%2B1iI3kfaAgNCl2XSmc%2B8iJ80D7ncEK81QKhefiaQuXZmJ%2B8X9R8Xevx%2Fi%2BOZzqcdjuMieFB%2BVRAH%2BFpqRfxv%2F3ZsRFdQvmMPidEPpKPeeW3vmX2Q%2FKAqcvo%2BMPGMTCSnTy8%2BVIzDYYp5O8tMBeC1y2jD0%2BP6%2FBjqkARaHJju1I3s7AbejpYt%2BOH8ODD6B3pTicmxpAhgQZE%2FSWSGfOquFWE8y4fjKXL2reE3v0TyYjbnWV4yaRCQRv%2BTibPEy0WoYbexf41HC6lbq9I%2B729pGPvL06zQ62olY9WxxnjMNlOu4G5EVfkAg6UfyItWAGvuVbDRu%2FhcRYHHir3i3Gxl9FTv%2F446FNENQi3cjWbySZJK1vs2DeWzZyTcAMss0&X-Amz-Signature=624d8dc34568a240717b685bef867cc6d1bd52477767ff8fa323229c46918b54&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6H5QYV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVVHDDPmoSJ957Pf%2FvMXe6K9it1h2LG0R234xS%2FA%2FOyAIhANE8mOgBZq57r5djRqWZkkRCGsi%2FASW4enhtiJNpaJjYKv8DCEcQABoMNjM3NDIzMTgzODA1Igx%2BrgVkcF%2Bd%2BX46TFAq3AP5e6VijYjBtyfPXe1JjgNy8AO%2FwKWGepp6lYCeWUHRJTevNkuoxgn%2BFMFV0Gdf%2BaqNCzC9vXiknn0q8CH%2BKOBpxUyrijn4%2B%2FDi29sFen%2FaimIN%2FqOoz9DrJqPDQ929%2Bh0zTYHZ6jwi%2FOV%2BTuaigcoke%2BevOglpf9zClD5eTBMZKMuKvgfD2gSA%2FwjhXaeBPpez3Zljuhonu9xGo3pFVnD87azZhuaR22lnnNmikv4lp0TEcAccNc5Le2uwfnvWfxkzdekXAgPirncksJFt4Yl87vlpGE7ovBYKCbVczaEbYJNCUsV4Hf%2BpggzWILz0kF6H2NfaOrtdp8y0HyrUTVpz70eN82fTU9clpLpacLQxMuFPQthcklGgICeQIf1f9z9mYOozSE9TASHd8n3r6tdTRaotJQtj1EsIYkSw289IMIMk1OP1jJU4ievRCybP3ws3oN2q4AiQwkWWlFoP6gQ0K5Azq7CMqXFVDvI%2B1iI3kfaAgNCl2XSmc%2B8iJ80D7ncEK81QKhefiaQuXZmJ%2B8X9R8Xevx%2Fi%2BOZzqcdjuMieFB%2BVRAH%2BFpqRfxv%2F3ZsRFdQvmMPidEPpKPeeW3vmX2Q%2FKAqcvo%2BMPGMTCSnTy8%2BVIzDYYp5O8tMBeC1y2jD0%2BP6%2FBjqkARaHJju1I3s7AbejpYt%2BOH8ODD6B3pTicmxpAhgQZE%2FSWSGfOquFWE8y4fjKXL2reE3v0TyYjbnWV4yaRCQRv%2BTibPEy0WoYbexf41HC6lbq9I%2B729pGPvL06zQ62olY9WxxnjMNlOu4G5EVfkAg6UfyItWAGvuVbDRu%2FhcRYHHir3i3Gxl9FTv%2F446FNENQi3cjWbySZJK1vs2DeWzZyTcAMss0&X-Amz-Signature=88657afbb7289568ca30964c131e91a2d268fe118c5eded28f97752d2b18f35e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6H5QYV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVVHDDPmoSJ957Pf%2FvMXe6K9it1h2LG0R234xS%2FA%2FOyAIhANE8mOgBZq57r5djRqWZkkRCGsi%2FASW4enhtiJNpaJjYKv8DCEcQABoMNjM3NDIzMTgzODA1Igx%2BrgVkcF%2Bd%2BX46TFAq3AP5e6VijYjBtyfPXe1JjgNy8AO%2FwKWGepp6lYCeWUHRJTevNkuoxgn%2BFMFV0Gdf%2BaqNCzC9vXiknn0q8CH%2BKOBpxUyrijn4%2B%2FDi29sFen%2FaimIN%2FqOoz9DrJqPDQ929%2Bh0zTYHZ6jwi%2FOV%2BTuaigcoke%2BevOglpf9zClD5eTBMZKMuKvgfD2gSA%2FwjhXaeBPpez3Zljuhonu9xGo3pFVnD87azZhuaR22lnnNmikv4lp0TEcAccNc5Le2uwfnvWfxkzdekXAgPirncksJFt4Yl87vlpGE7ovBYKCbVczaEbYJNCUsV4Hf%2BpggzWILz0kF6H2NfaOrtdp8y0HyrUTVpz70eN82fTU9clpLpacLQxMuFPQthcklGgICeQIf1f9z9mYOozSE9TASHd8n3r6tdTRaotJQtj1EsIYkSw289IMIMk1OP1jJU4ievRCybP3ws3oN2q4AiQwkWWlFoP6gQ0K5Azq7CMqXFVDvI%2B1iI3kfaAgNCl2XSmc%2B8iJ80D7ncEK81QKhefiaQuXZmJ%2B8X9R8Xevx%2Fi%2BOZzqcdjuMieFB%2BVRAH%2BFpqRfxv%2F3ZsRFdQvmMPidEPpKPeeW3vmX2Q%2FKAqcvo%2BMPGMTCSnTy8%2BVIzDYYp5O8tMBeC1y2jD0%2BP6%2FBjqkARaHJju1I3s7AbejpYt%2BOH8ODD6B3pTicmxpAhgQZE%2FSWSGfOquFWE8y4fjKXL2reE3v0TyYjbnWV4yaRCQRv%2BTibPEy0WoYbexf41HC6lbq9I%2B729pGPvL06zQ62olY9WxxnjMNlOu4G5EVfkAg6UfyItWAGvuVbDRu%2FhcRYHHir3i3Gxl9FTv%2F446FNENQi3cjWbySZJK1vs2DeWzZyTcAMss0&X-Amz-Signature=2e0eb83bb18f9c2b05ee16640c1cce362ba0d3f830d3919d7d175321078003c1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6H5QYV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVVHDDPmoSJ957Pf%2FvMXe6K9it1h2LG0R234xS%2FA%2FOyAIhANE8mOgBZq57r5djRqWZkkRCGsi%2FASW4enhtiJNpaJjYKv8DCEcQABoMNjM3NDIzMTgzODA1Igx%2BrgVkcF%2Bd%2BX46TFAq3AP5e6VijYjBtyfPXe1JjgNy8AO%2FwKWGepp6lYCeWUHRJTevNkuoxgn%2BFMFV0Gdf%2BaqNCzC9vXiknn0q8CH%2BKOBpxUyrijn4%2B%2FDi29sFen%2FaimIN%2FqOoz9DrJqPDQ929%2Bh0zTYHZ6jwi%2FOV%2BTuaigcoke%2BevOglpf9zClD5eTBMZKMuKvgfD2gSA%2FwjhXaeBPpez3Zljuhonu9xGo3pFVnD87azZhuaR22lnnNmikv4lp0TEcAccNc5Le2uwfnvWfxkzdekXAgPirncksJFt4Yl87vlpGE7ovBYKCbVczaEbYJNCUsV4Hf%2BpggzWILz0kF6H2NfaOrtdp8y0HyrUTVpz70eN82fTU9clpLpacLQxMuFPQthcklGgICeQIf1f9z9mYOozSE9TASHd8n3r6tdTRaotJQtj1EsIYkSw289IMIMk1OP1jJU4ievRCybP3ws3oN2q4AiQwkWWlFoP6gQ0K5Azq7CMqXFVDvI%2B1iI3kfaAgNCl2XSmc%2B8iJ80D7ncEK81QKhefiaQuXZmJ%2B8X9R8Xevx%2Fi%2BOZzqcdjuMieFB%2BVRAH%2BFpqRfxv%2F3ZsRFdQvmMPidEPpKPeeW3vmX2Q%2FKAqcvo%2BMPGMTCSnTy8%2BVIzDYYp5O8tMBeC1y2jD0%2BP6%2FBjqkARaHJju1I3s7AbejpYt%2BOH8ODD6B3pTicmxpAhgQZE%2FSWSGfOquFWE8y4fjKXL2reE3v0TyYjbnWV4yaRCQRv%2BTibPEy0WoYbexf41HC6lbq9I%2B729pGPvL06zQ62olY9WxxnjMNlOu4G5EVfkAg6UfyItWAGvuVbDRu%2FhcRYHHir3i3Gxl9FTv%2F446FNENQi3cjWbySZJK1vs2DeWzZyTcAMss0&X-Amz-Signature=754edf6c6b13a5421445826911927820a15af12f82e7ecd489f459d21131712b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6H5QYV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVVHDDPmoSJ957Pf%2FvMXe6K9it1h2LG0R234xS%2FA%2FOyAIhANE8mOgBZq57r5djRqWZkkRCGsi%2FASW4enhtiJNpaJjYKv8DCEcQABoMNjM3NDIzMTgzODA1Igx%2BrgVkcF%2Bd%2BX46TFAq3AP5e6VijYjBtyfPXe1JjgNy8AO%2FwKWGepp6lYCeWUHRJTevNkuoxgn%2BFMFV0Gdf%2BaqNCzC9vXiknn0q8CH%2BKOBpxUyrijn4%2B%2FDi29sFen%2FaimIN%2FqOoz9DrJqPDQ929%2Bh0zTYHZ6jwi%2FOV%2BTuaigcoke%2BevOglpf9zClD5eTBMZKMuKvgfD2gSA%2FwjhXaeBPpez3Zljuhonu9xGo3pFVnD87azZhuaR22lnnNmikv4lp0TEcAccNc5Le2uwfnvWfxkzdekXAgPirncksJFt4Yl87vlpGE7ovBYKCbVczaEbYJNCUsV4Hf%2BpggzWILz0kF6H2NfaOrtdp8y0HyrUTVpz70eN82fTU9clpLpacLQxMuFPQthcklGgICeQIf1f9z9mYOozSE9TASHd8n3r6tdTRaotJQtj1EsIYkSw289IMIMk1OP1jJU4ievRCybP3ws3oN2q4AiQwkWWlFoP6gQ0K5Azq7CMqXFVDvI%2B1iI3kfaAgNCl2XSmc%2B8iJ80D7ncEK81QKhefiaQuXZmJ%2B8X9R8Xevx%2Fi%2BOZzqcdjuMieFB%2BVRAH%2BFpqRfxv%2F3ZsRFdQvmMPidEPpKPeeW3vmX2Q%2FKAqcvo%2BMPGMTCSnTy8%2BVIzDYYp5O8tMBeC1y2jD0%2BP6%2FBjqkARaHJju1I3s7AbejpYt%2BOH8ODD6B3pTicmxpAhgQZE%2FSWSGfOquFWE8y4fjKXL2reE3v0TyYjbnWV4yaRCQRv%2BTibPEy0WoYbexf41HC6lbq9I%2B729pGPvL06zQ62olY9WxxnjMNlOu4G5EVfkAg6UfyItWAGvuVbDRu%2FhcRYHHir3i3Gxl9FTv%2F446FNENQi3cjWbySZJK1vs2DeWzZyTcAMss0&X-Amz-Signature=a211f0e716edeff4743b5672622eecdb76447efc4ed030eacb7b3a2c03cc86c6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6H5QYV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVVHDDPmoSJ957Pf%2FvMXe6K9it1h2LG0R234xS%2FA%2FOyAIhANE8mOgBZq57r5djRqWZkkRCGsi%2FASW4enhtiJNpaJjYKv8DCEcQABoMNjM3NDIzMTgzODA1Igx%2BrgVkcF%2Bd%2BX46TFAq3AP5e6VijYjBtyfPXe1JjgNy8AO%2FwKWGepp6lYCeWUHRJTevNkuoxgn%2BFMFV0Gdf%2BaqNCzC9vXiknn0q8CH%2BKOBpxUyrijn4%2B%2FDi29sFen%2FaimIN%2FqOoz9DrJqPDQ929%2Bh0zTYHZ6jwi%2FOV%2BTuaigcoke%2BevOglpf9zClD5eTBMZKMuKvgfD2gSA%2FwjhXaeBPpez3Zljuhonu9xGo3pFVnD87azZhuaR22lnnNmikv4lp0TEcAccNc5Le2uwfnvWfxkzdekXAgPirncksJFt4Yl87vlpGE7ovBYKCbVczaEbYJNCUsV4Hf%2BpggzWILz0kF6H2NfaOrtdp8y0HyrUTVpz70eN82fTU9clpLpacLQxMuFPQthcklGgICeQIf1f9z9mYOozSE9TASHd8n3r6tdTRaotJQtj1EsIYkSw289IMIMk1OP1jJU4ievRCybP3ws3oN2q4AiQwkWWlFoP6gQ0K5Azq7CMqXFVDvI%2B1iI3kfaAgNCl2XSmc%2B8iJ80D7ncEK81QKhefiaQuXZmJ%2B8X9R8Xevx%2Fi%2BOZzqcdjuMieFB%2BVRAH%2BFpqRfxv%2F3ZsRFdQvmMPidEPpKPeeW3vmX2Q%2FKAqcvo%2BMPGMTCSnTy8%2BVIzDYYp5O8tMBeC1y2jD0%2BP6%2FBjqkARaHJju1I3s7AbejpYt%2BOH8ODD6B3pTicmxpAhgQZE%2FSWSGfOquFWE8y4fjKXL2reE3v0TyYjbnWV4yaRCQRv%2BTibPEy0WoYbexf41HC6lbq9I%2B729pGPvL06zQ62olY9WxxnjMNlOu4G5EVfkAg6UfyItWAGvuVbDRu%2FhcRYHHir3i3Gxl9FTv%2F446FNENQi3cjWbySZJK1vs2DeWzZyTcAMss0&X-Amz-Signature=345e0a0cb84912d223e525f934c66ec6c84690b2e0ac8f5d9e8346dc01694b18&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
