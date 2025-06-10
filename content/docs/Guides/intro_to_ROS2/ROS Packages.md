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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEWTDUW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeskLcFiyhc2MQaXCszg8OdKjKGIyhCdd2X1Bb6WBmxgIgIT2g3M10ooKkEt3cqh66WLZHD0qMmVVKJFGTkOpkYE8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIIIq5TJfYfOMbnHyrcA81RcpRE17jL0JiAztPQH2AoHxZkuznpYmukp5vn7OjJeuTI7hYVz8gRlj4XsdjgGhN0%2Bix5HNyPI%2BLmYVtMM9nGsDdPVD2%2FBWqPdAMTVDDCjwnXTMf7T10Y%2B1%2FT%2FJOyAaxQfBIkje18SvRzfLMCkui%2BJTMTRIhcEfTJPmpQQtx6sRb%2BVtfXsiT9cpjM5CM4KK6Wewb%2F2wX%2BpafphjmC1sRinnGe%2BAFEXplYpZU3K8NCWeqQAPbop7%2B3Kxw9FGICvS%2B5MeAdRoDztSXY7KLfuWPlvPeg2T3%2F7G1Y4mmxq74BxnMR3nYALRySQ52FhLmO830OkyoE1LUG7IMPg0SRkCPrUJl4UVc%2BXQYViDe%2FSBuBpIhVEX8FSOyl7puTjeU9MKmB7Tc7J3caFrJXjHsf9RUR7WZ%2Fo%2BDVhGVLYdAn44fvPa%2F2U%2Fju9YdhWVm8ow04DeBPmdJsxXMATUBAXYo0gDSB01KmJRmYqM3NrNBuDfyICpV%2BX36xNPJn6Gf0LngKySvVTEmdtkucVg1Aox2gUobYy2cGfbrFnRSkNtnzAUltRyMkAfqy7gccuJucpmSOqXOGDW3PqpwHfC96VxGr%2Fd65OeRHiXOnM1cwPdS170oRSAgjVY1TZVHiLJ96MM2%2BoMIGOqUBEqZLGtgEv0eHl%2BiIxkAAhcAkPO8Ik2Hu1qSKxvJReJYKUfElt7SfMuvpPPH%2BRrZBLnydEshmFatbYi%2BHD4PjHLadBNj8KGB9KN6amp0di5cnTVZsjJh8Kx6TTRZZyDUvYjhHBjMa9ainLXUtHe14locpHdbVLYtexb6tR4LtxtuEpf2mGRuvQ9sTmo18SbWn4cdFrJaMLtUHnCIa5cM2aJ5bW6Wf&X-Amz-Signature=ff4efa3d94610fd2d1d72dcb5ec688c7e2fd7090041201a6092528c15d028728&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEWTDUW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeskLcFiyhc2MQaXCszg8OdKjKGIyhCdd2X1Bb6WBmxgIgIT2g3M10ooKkEt3cqh66WLZHD0qMmVVKJFGTkOpkYE8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIIIq5TJfYfOMbnHyrcA81RcpRE17jL0JiAztPQH2AoHxZkuznpYmukp5vn7OjJeuTI7hYVz8gRlj4XsdjgGhN0%2Bix5HNyPI%2BLmYVtMM9nGsDdPVD2%2FBWqPdAMTVDDCjwnXTMf7T10Y%2B1%2FT%2FJOyAaxQfBIkje18SvRzfLMCkui%2BJTMTRIhcEfTJPmpQQtx6sRb%2BVtfXsiT9cpjM5CM4KK6Wewb%2F2wX%2BpafphjmC1sRinnGe%2BAFEXplYpZU3K8NCWeqQAPbop7%2B3Kxw9FGICvS%2B5MeAdRoDztSXY7KLfuWPlvPeg2T3%2F7G1Y4mmxq74BxnMR3nYALRySQ52FhLmO830OkyoE1LUG7IMPg0SRkCPrUJl4UVc%2BXQYViDe%2FSBuBpIhVEX8FSOyl7puTjeU9MKmB7Tc7J3caFrJXjHsf9RUR7WZ%2Fo%2BDVhGVLYdAn44fvPa%2F2U%2Fju9YdhWVm8ow04DeBPmdJsxXMATUBAXYo0gDSB01KmJRmYqM3NrNBuDfyICpV%2BX36xNPJn6Gf0LngKySvVTEmdtkucVg1Aox2gUobYy2cGfbrFnRSkNtnzAUltRyMkAfqy7gccuJucpmSOqXOGDW3PqpwHfC96VxGr%2Fd65OeRHiXOnM1cwPdS170oRSAgjVY1TZVHiLJ96MM2%2BoMIGOqUBEqZLGtgEv0eHl%2BiIxkAAhcAkPO8Ik2Hu1qSKxvJReJYKUfElt7SfMuvpPPH%2BRrZBLnydEshmFatbYi%2BHD4PjHLadBNj8KGB9KN6amp0di5cnTVZsjJh8Kx6TTRZZyDUvYjhHBjMa9ainLXUtHe14locpHdbVLYtexb6tR4LtxtuEpf2mGRuvQ9sTmo18SbWn4cdFrJaMLtUHnCIa5cM2aJ5bW6Wf&X-Amz-Signature=5b465fcd385ea9d9d3f90c6b7fd4f1ebc71a026e497f1ba8e8c74cd710618879&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEWTDUW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeskLcFiyhc2MQaXCszg8OdKjKGIyhCdd2X1Bb6WBmxgIgIT2g3M10ooKkEt3cqh66WLZHD0qMmVVKJFGTkOpkYE8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIIIq5TJfYfOMbnHyrcA81RcpRE17jL0JiAztPQH2AoHxZkuznpYmukp5vn7OjJeuTI7hYVz8gRlj4XsdjgGhN0%2Bix5HNyPI%2BLmYVtMM9nGsDdPVD2%2FBWqPdAMTVDDCjwnXTMf7T10Y%2B1%2FT%2FJOyAaxQfBIkje18SvRzfLMCkui%2BJTMTRIhcEfTJPmpQQtx6sRb%2BVtfXsiT9cpjM5CM4KK6Wewb%2F2wX%2BpafphjmC1sRinnGe%2BAFEXplYpZU3K8NCWeqQAPbop7%2B3Kxw9FGICvS%2B5MeAdRoDztSXY7KLfuWPlvPeg2T3%2F7G1Y4mmxq74BxnMR3nYALRySQ52FhLmO830OkyoE1LUG7IMPg0SRkCPrUJl4UVc%2BXQYViDe%2FSBuBpIhVEX8FSOyl7puTjeU9MKmB7Tc7J3caFrJXjHsf9RUR7WZ%2Fo%2BDVhGVLYdAn44fvPa%2F2U%2Fju9YdhWVm8ow04DeBPmdJsxXMATUBAXYo0gDSB01KmJRmYqM3NrNBuDfyICpV%2BX36xNPJn6Gf0LngKySvVTEmdtkucVg1Aox2gUobYy2cGfbrFnRSkNtnzAUltRyMkAfqy7gccuJucpmSOqXOGDW3PqpwHfC96VxGr%2Fd65OeRHiXOnM1cwPdS170oRSAgjVY1TZVHiLJ96MM2%2BoMIGOqUBEqZLGtgEv0eHl%2BiIxkAAhcAkPO8Ik2Hu1qSKxvJReJYKUfElt7SfMuvpPPH%2BRrZBLnydEshmFatbYi%2BHD4PjHLadBNj8KGB9KN6amp0di5cnTVZsjJh8Kx6TTRZZyDUvYjhHBjMa9ainLXUtHe14locpHdbVLYtexb6tR4LtxtuEpf2mGRuvQ9sTmo18SbWn4cdFrJaMLtUHnCIa5cM2aJ5bW6Wf&X-Amz-Signature=9bee50969fce8a849e824343f1e86d41956dc4feea124c618e8ac020963dd7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEWTDUW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeskLcFiyhc2MQaXCszg8OdKjKGIyhCdd2X1Bb6WBmxgIgIT2g3M10ooKkEt3cqh66WLZHD0qMmVVKJFGTkOpkYE8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIIIq5TJfYfOMbnHyrcA81RcpRE17jL0JiAztPQH2AoHxZkuznpYmukp5vn7OjJeuTI7hYVz8gRlj4XsdjgGhN0%2Bix5HNyPI%2BLmYVtMM9nGsDdPVD2%2FBWqPdAMTVDDCjwnXTMf7T10Y%2B1%2FT%2FJOyAaxQfBIkje18SvRzfLMCkui%2BJTMTRIhcEfTJPmpQQtx6sRb%2BVtfXsiT9cpjM5CM4KK6Wewb%2F2wX%2BpafphjmC1sRinnGe%2BAFEXplYpZU3K8NCWeqQAPbop7%2B3Kxw9FGICvS%2B5MeAdRoDztSXY7KLfuWPlvPeg2T3%2F7G1Y4mmxq74BxnMR3nYALRySQ52FhLmO830OkyoE1LUG7IMPg0SRkCPrUJl4UVc%2BXQYViDe%2FSBuBpIhVEX8FSOyl7puTjeU9MKmB7Tc7J3caFrJXjHsf9RUR7WZ%2Fo%2BDVhGVLYdAn44fvPa%2F2U%2Fju9YdhWVm8ow04DeBPmdJsxXMATUBAXYo0gDSB01KmJRmYqM3NrNBuDfyICpV%2BX36xNPJn6Gf0LngKySvVTEmdtkucVg1Aox2gUobYy2cGfbrFnRSkNtnzAUltRyMkAfqy7gccuJucpmSOqXOGDW3PqpwHfC96VxGr%2Fd65OeRHiXOnM1cwPdS170oRSAgjVY1TZVHiLJ96MM2%2BoMIGOqUBEqZLGtgEv0eHl%2BiIxkAAhcAkPO8Ik2Hu1qSKxvJReJYKUfElt7SfMuvpPPH%2BRrZBLnydEshmFatbYi%2BHD4PjHLadBNj8KGB9KN6amp0di5cnTVZsjJh8Kx6TTRZZyDUvYjhHBjMa9ainLXUtHe14locpHdbVLYtexb6tR4LtxtuEpf2mGRuvQ9sTmo18SbWn4cdFrJaMLtUHnCIa5cM2aJ5bW6Wf&X-Amz-Signature=2f77abaad952bd71a373aca75c7255118b58611767216367274117a85de18391&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEWTDUW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeskLcFiyhc2MQaXCszg8OdKjKGIyhCdd2X1Bb6WBmxgIgIT2g3M10ooKkEt3cqh66WLZHD0qMmVVKJFGTkOpkYE8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIIIq5TJfYfOMbnHyrcA81RcpRE17jL0JiAztPQH2AoHxZkuznpYmukp5vn7OjJeuTI7hYVz8gRlj4XsdjgGhN0%2Bix5HNyPI%2BLmYVtMM9nGsDdPVD2%2FBWqPdAMTVDDCjwnXTMf7T10Y%2B1%2FT%2FJOyAaxQfBIkje18SvRzfLMCkui%2BJTMTRIhcEfTJPmpQQtx6sRb%2BVtfXsiT9cpjM5CM4KK6Wewb%2F2wX%2BpafphjmC1sRinnGe%2BAFEXplYpZU3K8NCWeqQAPbop7%2B3Kxw9FGICvS%2B5MeAdRoDztSXY7KLfuWPlvPeg2T3%2F7G1Y4mmxq74BxnMR3nYALRySQ52FhLmO830OkyoE1LUG7IMPg0SRkCPrUJl4UVc%2BXQYViDe%2FSBuBpIhVEX8FSOyl7puTjeU9MKmB7Tc7J3caFrJXjHsf9RUR7WZ%2Fo%2BDVhGVLYdAn44fvPa%2F2U%2Fju9YdhWVm8ow04DeBPmdJsxXMATUBAXYo0gDSB01KmJRmYqM3NrNBuDfyICpV%2BX36xNPJn6Gf0LngKySvVTEmdtkucVg1Aox2gUobYy2cGfbrFnRSkNtnzAUltRyMkAfqy7gccuJucpmSOqXOGDW3PqpwHfC96VxGr%2Fd65OeRHiXOnM1cwPdS170oRSAgjVY1TZVHiLJ96MM2%2BoMIGOqUBEqZLGtgEv0eHl%2BiIxkAAhcAkPO8Ik2Hu1qSKxvJReJYKUfElt7SfMuvpPPH%2BRrZBLnydEshmFatbYi%2BHD4PjHLadBNj8KGB9KN6amp0di5cnTVZsjJh8Kx6TTRZZyDUvYjhHBjMa9ainLXUtHe14locpHdbVLYtexb6tR4LtxtuEpf2mGRuvQ9sTmo18SbWn4cdFrJaMLtUHnCIa5cM2aJ5bW6Wf&X-Amz-Signature=a910148347383b8428341d271e3f49e76088963d457f6cf3a78286f86f84f67f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEWTDUW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeskLcFiyhc2MQaXCszg8OdKjKGIyhCdd2X1Bb6WBmxgIgIT2g3M10ooKkEt3cqh66WLZHD0qMmVVKJFGTkOpkYE8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIIIq5TJfYfOMbnHyrcA81RcpRE17jL0JiAztPQH2AoHxZkuznpYmukp5vn7OjJeuTI7hYVz8gRlj4XsdjgGhN0%2Bix5HNyPI%2BLmYVtMM9nGsDdPVD2%2FBWqPdAMTVDDCjwnXTMf7T10Y%2B1%2FT%2FJOyAaxQfBIkje18SvRzfLMCkui%2BJTMTRIhcEfTJPmpQQtx6sRb%2BVtfXsiT9cpjM5CM4KK6Wewb%2F2wX%2BpafphjmC1sRinnGe%2BAFEXplYpZU3K8NCWeqQAPbop7%2B3Kxw9FGICvS%2B5MeAdRoDztSXY7KLfuWPlvPeg2T3%2F7G1Y4mmxq74BxnMR3nYALRySQ52FhLmO830OkyoE1LUG7IMPg0SRkCPrUJl4UVc%2BXQYViDe%2FSBuBpIhVEX8FSOyl7puTjeU9MKmB7Tc7J3caFrJXjHsf9RUR7WZ%2Fo%2BDVhGVLYdAn44fvPa%2F2U%2Fju9YdhWVm8ow04DeBPmdJsxXMATUBAXYo0gDSB01KmJRmYqM3NrNBuDfyICpV%2BX36xNPJn6Gf0LngKySvVTEmdtkucVg1Aox2gUobYy2cGfbrFnRSkNtnzAUltRyMkAfqy7gccuJucpmSOqXOGDW3PqpwHfC96VxGr%2Fd65OeRHiXOnM1cwPdS170oRSAgjVY1TZVHiLJ96MM2%2BoMIGOqUBEqZLGtgEv0eHl%2BiIxkAAhcAkPO8Ik2Hu1qSKxvJReJYKUfElt7SfMuvpPPH%2BRrZBLnydEshmFatbYi%2BHD4PjHLadBNj8KGB9KN6amp0di5cnTVZsjJh8Kx6TTRZZyDUvYjhHBjMa9ainLXUtHe14locpHdbVLYtexb6tR4LtxtuEpf2mGRuvQ9sTmo18SbWn4cdFrJaMLtUHnCIa5cM2aJ5bW6Wf&X-Amz-Signature=8d5f63d6fc86e2b63b0d8d2115d5e31963c26cd27505c5ce5baa957c1e0a7af4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEWTDUW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeskLcFiyhc2MQaXCszg8OdKjKGIyhCdd2X1Bb6WBmxgIgIT2g3M10ooKkEt3cqh66WLZHD0qMmVVKJFGTkOpkYE8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIIIq5TJfYfOMbnHyrcA81RcpRE17jL0JiAztPQH2AoHxZkuznpYmukp5vn7OjJeuTI7hYVz8gRlj4XsdjgGhN0%2Bix5HNyPI%2BLmYVtMM9nGsDdPVD2%2FBWqPdAMTVDDCjwnXTMf7T10Y%2B1%2FT%2FJOyAaxQfBIkje18SvRzfLMCkui%2BJTMTRIhcEfTJPmpQQtx6sRb%2BVtfXsiT9cpjM5CM4KK6Wewb%2F2wX%2BpafphjmC1sRinnGe%2BAFEXplYpZU3K8NCWeqQAPbop7%2B3Kxw9FGICvS%2B5MeAdRoDztSXY7KLfuWPlvPeg2T3%2F7G1Y4mmxq74BxnMR3nYALRySQ52FhLmO830OkyoE1LUG7IMPg0SRkCPrUJl4UVc%2BXQYViDe%2FSBuBpIhVEX8FSOyl7puTjeU9MKmB7Tc7J3caFrJXjHsf9RUR7WZ%2Fo%2BDVhGVLYdAn44fvPa%2F2U%2Fju9YdhWVm8ow04DeBPmdJsxXMATUBAXYo0gDSB01KmJRmYqM3NrNBuDfyICpV%2BX36xNPJn6Gf0LngKySvVTEmdtkucVg1Aox2gUobYy2cGfbrFnRSkNtnzAUltRyMkAfqy7gccuJucpmSOqXOGDW3PqpwHfC96VxGr%2Fd65OeRHiXOnM1cwPdS170oRSAgjVY1TZVHiLJ96MM2%2BoMIGOqUBEqZLGtgEv0eHl%2BiIxkAAhcAkPO8Ik2Hu1qSKxvJReJYKUfElt7SfMuvpPPH%2BRrZBLnydEshmFatbYi%2BHD4PjHLadBNj8KGB9KN6amp0di5cnTVZsjJh8Kx6TTRZZyDUvYjhHBjMa9ainLXUtHe14locpHdbVLYtexb6tR4LtxtuEpf2mGRuvQ9sTmo18SbWn4cdFrJaMLtUHnCIa5cM2aJ5bW6Wf&X-Amz-Signature=f65bfed5e3f6b122a949536bdfa78a90dfd4400db9ca584f511d303e13cc33d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
