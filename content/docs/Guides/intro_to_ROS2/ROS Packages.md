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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSZNBBA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCsBY6v%2B%2BvtR%2BaYbjdvmcFBM93P5gk7Xzrnv%2F5z3m8LAiEA02ME2fcaf3AplmAGujBkF1JtHyKiVizjOilGadLj6tcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISA7xyUKNo241JhZyrcA57tBk0lEKAvT7pDSnIKJeK7e%2BNnVODFpmarIXFaCgcMN5H23cP1J1LaN9LpSC8VKYowH%2FZ3mTxDAFczafB2Z%2BmrBp6vpQDJ79UJiaLm7wGnw1RGhfixUxI%2FFUuicBOldEV4J566oK14KxPRYIlIYiiegYPL11ubXeGpuiDDkqM%2B1rgTRwnnGXGrwhy2ER1ML8OPZwE0kNHkhA8e0OvXvjPC1hBVFrXw7ECtdGsIfQqC5C%2FFFzF6LZnk3g041rQSK8lckWfK%2FIHWksnwIwhE%2BaHXaTXm3Zq0uuuRMrIr3yLuZULFwylnycntqRlr0ST7jaFVFOvGs%2F9Tlo%2FxrFlXwsNGjnMPnwazUIWHr%2FTtsbv1dONAY8vFs6lixtV50zm56W%2FWgSwOT09Ws4hQutvKeJRLRWis3DBxX7SVunK5lt%2FkzIzGn3pBmEzSdneDJ6LzNST%2FTxl7CvDvMgw70CU3pz1hWQOvr4jF8NY2HuOT9v%2BRNhImsPtU2AWJ68Siqu%2BLW1eoelKp1asdUHq6UVpgQxYpf8phfQ%2Bm1BK1IZJwcKhJiUTr0eGNi4JXcyfKcNILS6KctMZ6zTIV63W8VBtyZ%2BBOTJ3t%2BUNHNM5kdmHxpu8AAK%2FvCgpKx8oI%2BiWRMK3YzMMGOqUB6yBUWOzXPTY6jy%2BjT13u4v4UxHQIc8VQFXjah4VWZmnB1oZILmwKcPKsAgfJzO254WZl7MoqyY%2FmFrMFbQLBP4zYb1oYZZGyXJPthgovOrpS7NvSBRcFOgqv41Z7%2BH0x5CDNYhGvFr0K8hCY%2BBZ4iLzNL8KHH4r0W3SMoiTnojfjRNp5zJznYJsE94Nrph8lObnaDaylpb2nITMev1AIseHbuv31&X-Amz-Signature=1261a6dcacd852e98ae5c370503a831f83526db526ee3fc6927b66489d77d47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSZNBBA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCsBY6v%2B%2BvtR%2BaYbjdvmcFBM93P5gk7Xzrnv%2F5z3m8LAiEA02ME2fcaf3AplmAGujBkF1JtHyKiVizjOilGadLj6tcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISA7xyUKNo241JhZyrcA57tBk0lEKAvT7pDSnIKJeK7e%2BNnVODFpmarIXFaCgcMN5H23cP1J1LaN9LpSC8VKYowH%2FZ3mTxDAFczafB2Z%2BmrBp6vpQDJ79UJiaLm7wGnw1RGhfixUxI%2FFUuicBOldEV4J566oK14KxPRYIlIYiiegYPL11ubXeGpuiDDkqM%2B1rgTRwnnGXGrwhy2ER1ML8OPZwE0kNHkhA8e0OvXvjPC1hBVFrXw7ECtdGsIfQqC5C%2FFFzF6LZnk3g041rQSK8lckWfK%2FIHWksnwIwhE%2BaHXaTXm3Zq0uuuRMrIr3yLuZULFwylnycntqRlr0ST7jaFVFOvGs%2F9Tlo%2FxrFlXwsNGjnMPnwazUIWHr%2FTtsbv1dONAY8vFs6lixtV50zm56W%2FWgSwOT09Ws4hQutvKeJRLRWis3DBxX7SVunK5lt%2FkzIzGn3pBmEzSdneDJ6LzNST%2FTxl7CvDvMgw70CU3pz1hWQOvr4jF8NY2HuOT9v%2BRNhImsPtU2AWJ68Siqu%2BLW1eoelKp1asdUHq6UVpgQxYpf8phfQ%2Bm1BK1IZJwcKhJiUTr0eGNi4JXcyfKcNILS6KctMZ6zTIV63W8VBtyZ%2BBOTJ3t%2BUNHNM5kdmHxpu8AAK%2FvCgpKx8oI%2BiWRMK3YzMMGOqUB6yBUWOzXPTY6jy%2BjT13u4v4UxHQIc8VQFXjah4VWZmnB1oZILmwKcPKsAgfJzO254WZl7MoqyY%2FmFrMFbQLBP4zYb1oYZZGyXJPthgovOrpS7NvSBRcFOgqv41Z7%2BH0x5CDNYhGvFr0K8hCY%2BBZ4iLzNL8KHH4r0W3SMoiTnojfjRNp5zJznYJsE94Nrph8lObnaDaylpb2nITMev1AIseHbuv31&X-Amz-Signature=11e5fbc9ee6d5584a4b614c7b605b0aed6b89d2eac683faf9d2bbb99dfde1448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSZNBBA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCsBY6v%2B%2BvtR%2BaYbjdvmcFBM93P5gk7Xzrnv%2F5z3m8LAiEA02ME2fcaf3AplmAGujBkF1JtHyKiVizjOilGadLj6tcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISA7xyUKNo241JhZyrcA57tBk0lEKAvT7pDSnIKJeK7e%2BNnVODFpmarIXFaCgcMN5H23cP1J1LaN9LpSC8VKYowH%2FZ3mTxDAFczafB2Z%2BmrBp6vpQDJ79UJiaLm7wGnw1RGhfixUxI%2FFUuicBOldEV4J566oK14KxPRYIlIYiiegYPL11ubXeGpuiDDkqM%2B1rgTRwnnGXGrwhy2ER1ML8OPZwE0kNHkhA8e0OvXvjPC1hBVFrXw7ECtdGsIfQqC5C%2FFFzF6LZnk3g041rQSK8lckWfK%2FIHWksnwIwhE%2BaHXaTXm3Zq0uuuRMrIr3yLuZULFwylnycntqRlr0ST7jaFVFOvGs%2F9Tlo%2FxrFlXwsNGjnMPnwazUIWHr%2FTtsbv1dONAY8vFs6lixtV50zm56W%2FWgSwOT09Ws4hQutvKeJRLRWis3DBxX7SVunK5lt%2FkzIzGn3pBmEzSdneDJ6LzNST%2FTxl7CvDvMgw70CU3pz1hWQOvr4jF8NY2HuOT9v%2BRNhImsPtU2AWJ68Siqu%2BLW1eoelKp1asdUHq6UVpgQxYpf8phfQ%2Bm1BK1IZJwcKhJiUTr0eGNi4JXcyfKcNILS6KctMZ6zTIV63W8VBtyZ%2BBOTJ3t%2BUNHNM5kdmHxpu8AAK%2FvCgpKx8oI%2BiWRMK3YzMMGOqUB6yBUWOzXPTY6jy%2BjT13u4v4UxHQIc8VQFXjah4VWZmnB1oZILmwKcPKsAgfJzO254WZl7MoqyY%2FmFrMFbQLBP4zYb1oYZZGyXJPthgovOrpS7NvSBRcFOgqv41Z7%2BH0x5CDNYhGvFr0K8hCY%2BBZ4iLzNL8KHH4r0W3SMoiTnojfjRNp5zJznYJsE94Nrph8lObnaDaylpb2nITMev1AIseHbuv31&X-Amz-Signature=8764d1a58a875b8651e0166b58f2bff6e277c31f06a7c560b914ed03d5315635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSZNBBA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCsBY6v%2B%2BvtR%2BaYbjdvmcFBM93P5gk7Xzrnv%2F5z3m8LAiEA02ME2fcaf3AplmAGujBkF1JtHyKiVizjOilGadLj6tcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISA7xyUKNo241JhZyrcA57tBk0lEKAvT7pDSnIKJeK7e%2BNnVODFpmarIXFaCgcMN5H23cP1J1LaN9LpSC8VKYowH%2FZ3mTxDAFczafB2Z%2BmrBp6vpQDJ79UJiaLm7wGnw1RGhfixUxI%2FFUuicBOldEV4J566oK14KxPRYIlIYiiegYPL11ubXeGpuiDDkqM%2B1rgTRwnnGXGrwhy2ER1ML8OPZwE0kNHkhA8e0OvXvjPC1hBVFrXw7ECtdGsIfQqC5C%2FFFzF6LZnk3g041rQSK8lckWfK%2FIHWksnwIwhE%2BaHXaTXm3Zq0uuuRMrIr3yLuZULFwylnycntqRlr0ST7jaFVFOvGs%2F9Tlo%2FxrFlXwsNGjnMPnwazUIWHr%2FTtsbv1dONAY8vFs6lixtV50zm56W%2FWgSwOT09Ws4hQutvKeJRLRWis3DBxX7SVunK5lt%2FkzIzGn3pBmEzSdneDJ6LzNST%2FTxl7CvDvMgw70CU3pz1hWQOvr4jF8NY2HuOT9v%2BRNhImsPtU2AWJ68Siqu%2BLW1eoelKp1asdUHq6UVpgQxYpf8phfQ%2Bm1BK1IZJwcKhJiUTr0eGNi4JXcyfKcNILS6KctMZ6zTIV63W8VBtyZ%2BBOTJ3t%2BUNHNM5kdmHxpu8AAK%2FvCgpKx8oI%2BiWRMK3YzMMGOqUB6yBUWOzXPTY6jy%2BjT13u4v4UxHQIc8VQFXjah4VWZmnB1oZILmwKcPKsAgfJzO254WZl7MoqyY%2FmFrMFbQLBP4zYb1oYZZGyXJPthgovOrpS7NvSBRcFOgqv41Z7%2BH0x5CDNYhGvFr0K8hCY%2BBZ4iLzNL8KHH4r0W3SMoiTnojfjRNp5zJznYJsE94Nrph8lObnaDaylpb2nITMev1AIseHbuv31&X-Amz-Signature=9ec11db09722c594492e12a5ccf2268518af9c2084ccc3b848ea919a1801055e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSZNBBA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCsBY6v%2B%2BvtR%2BaYbjdvmcFBM93P5gk7Xzrnv%2F5z3m8LAiEA02ME2fcaf3AplmAGujBkF1JtHyKiVizjOilGadLj6tcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISA7xyUKNo241JhZyrcA57tBk0lEKAvT7pDSnIKJeK7e%2BNnVODFpmarIXFaCgcMN5H23cP1J1LaN9LpSC8VKYowH%2FZ3mTxDAFczafB2Z%2BmrBp6vpQDJ79UJiaLm7wGnw1RGhfixUxI%2FFUuicBOldEV4J566oK14KxPRYIlIYiiegYPL11ubXeGpuiDDkqM%2B1rgTRwnnGXGrwhy2ER1ML8OPZwE0kNHkhA8e0OvXvjPC1hBVFrXw7ECtdGsIfQqC5C%2FFFzF6LZnk3g041rQSK8lckWfK%2FIHWksnwIwhE%2BaHXaTXm3Zq0uuuRMrIr3yLuZULFwylnycntqRlr0ST7jaFVFOvGs%2F9Tlo%2FxrFlXwsNGjnMPnwazUIWHr%2FTtsbv1dONAY8vFs6lixtV50zm56W%2FWgSwOT09Ws4hQutvKeJRLRWis3DBxX7SVunK5lt%2FkzIzGn3pBmEzSdneDJ6LzNST%2FTxl7CvDvMgw70CU3pz1hWQOvr4jF8NY2HuOT9v%2BRNhImsPtU2AWJ68Siqu%2BLW1eoelKp1asdUHq6UVpgQxYpf8phfQ%2Bm1BK1IZJwcKhJiUTr0eGNi4JXcyfKcNILS6KctMZ6zTIV63W8VBtyZ%2BBOTJ3t%2BUNHNM5kdmHxpu8AAK%2FvCgpKx8oI%2BiWRMK3YzMMGOqUB6yBUWOzXPTY6jy%2BjT13u4v4UxHQIc8VQFXjah4VWZmnB1oZILmwKcPKsAgfJzO254WZl7MoqyY%2FmFrMFbQLBP4zYb1oYZZGyXJPthgovOrpS7NvSBRcFOgqv41Z7%2BH0x5CDNYhGvFr0K8hCY%2BBZ4iLzNL8KHH4r0W3SMoiTnojfjRNp5zJznYJsE94Nrph8lObnaDaylpb2nITMev1AIseHbuv31&X-Amz-Signature=0352d0fbc40b57e3c8f1d8d993f7f879e4f7786424083125b9897b59eece866f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSZNBBA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCsBY6v%2B%2BvtR%2BaYbjdvmcFBM93P5gk7Xzrnv%2F5z3m8LAiEA02ME2fcaf3AplmAGujBkF1JtHyKiVizjOilGadLj6tcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISA7xyUKNo241JhZyrcA57tBk0lEKAvT7pDSnIKJeK7e%2BNnVODFpmarIXFaCgcMN5H23cP1J1LaN9LpSC8VKYowH%2FZ3mTxDAFczafB2Z%2BmrBp6vpQDJ79UJiaLm7wGnw1RGhfixUxI%2FFUuicBOldEV4J566oK14KxPRYIlIYiiegYPL11ubXeGpuiDDkqM%2B1rgTRwnnGXGrwhy2ER1ML8OPZwE0kNHkhA8e0OvXvjPC1hBVFrXw7ECtdGsIfQqC5C%2FFFzF6LZnk3g041rQSK8lckWfK%2FIHWksnwIwhE%2BaHXaTXm3Zq0uuuRMrIr3yLuZULFwylnycntqRlr0ST7jaFVFOvGs%2F9Tlo%2FxrFlXwsNGjnMPnwazUIWHr%2FTtsbv1dONAY8vFs6lixtV50zm56W%2FWgSwOT09Ws4hQutvKeJRLRWis3DBxX7SVunK5lt%2FkzIzGn3pBmEzSdneDJ6LzNST%2FTxl7CvDvMgw70CU3pz1hWQOvr4jF8NY2HuOT9v%2BRNhImsPtU2AWJ68Siqu%2BLW1eoelKp1asdUHq6UVpgQxYpf8phfQ%2Bm1BK1IZJwcKhJiUTr0eGNi4JXcyfKcNILS6KctMZ6zTIV63W8VBtyZ%2BBOTJ3t%2BUNHNM5kdmHxpu8AAK%2FvCgpKx8oI%2BiWRMK3YzMMGOqUB6yBUWOzXPTY6jy%2BjT13u4v4UxHQIc8VQFXjah4VWZmnB1oZILmwKcPKsAgfJzO254WZl7MoqyY%2FmFrMFbQLBP4zYb1oYZZGyXJPthgovOrpS7NvSBRcFOgqv41Z7%2BH0x5CDNYhGvFr0K8hCY%2BBZ4iLzNL8KHH4r0W3SMoiTnojfjRNp5zJznYJsE94Nrph8lObnaDaylpb2nITMev1AIseHbuv31&X-Amz-Signature=dd0b3cdaa13ba2f676bc6f93c590ad242453c52ba04d36350cb398170b8c61c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSZNBBA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCsBY6v%2B%2BvtR%2BaYbjdvmcFBM93P5gk7Xzrnv%2F5z3m8LAiEA02ME2fcaf3AplmAGujBkF1JtHyKiVizjOilGadLj6tcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISA7xyUKNo241JhZyrcA57tBk0lEKAvT7pDSnIKJeK7e%2BNnVODFpmarIXFaCgcMN5H23cP1J1LaN9LpSC8VKYowH%2FZ3mTxDAFczafB2Z%2BmrBp6vpQDJ79UJiaLm7wGnw1RGhfixUxI%2FFUuicBOldEV4J566oK14KxPRYIlIYiiegYPL11ubXeGpuiDDkqM%2B1rgTRwnnGXGrwhy2ER1ML8OPZwE0kNHkhA8e0OvXvjPC1hBVFrXw7ECtdGsIfQqC5C%2FFFzF6LZnk3g041rQSK8lckWfK%2FIHWksnwIwhE%2BaHXaTXm3Zq0uuuRMrIr3yLuZULFwylnycntqRlr0ST7jaFVFOvGs%2F9Tlo%2FxrFlXwsNGjnMPnwazUIWHr%2FTtsbv1dONAY8vFs6lixtV50zm56W%2FWgSwOT09Ws4hQutvKeJRLRWis3DBxX7SVunK5lt%2FkzIzGn3pBmEzSdneDJ6LzNST%2FTxl7CvDvMgw70CU3pz1hWQOvr4jF8NY2HuOT9v%2BRNhImsPtU2AWJ68Siqu%2BLW1eoelKp1asdUHq6UVpgQxYpf8phfQ%2Bm1BK1IZJwcKhJiUTr0eGNi4JXcyfKcNILS6KctMZ6zTIV63W8VBtyZ%2BBOTJ3t%2BUNHNM5kdmHxpu8AAK%2FvCgpKx8oI%2BiWRMK3YzMMGOqUB6yBUWOzXPTY6jy%2BjT13u4v4UxHQIc8VQFXjah4VWZmnB1oZILmwKcPKsAgfJzO254WZl7MoqyY%2FmFrMFbQLBP4zYb1oYZZGyXJPthgovOrpS7NvSBRcFOgqv41Z7%2BH0x5CDNYhGvFr0K8hCY%2BBZ4iLzNL8KHH4r0W3SMoiTnojfjRNp5zJznYJsE94Nrph8lObnaDaylpb2nITMev1AIseHbuv31&X-Amz-Signature=82dd5a7e80b5239fa59619afc544e3fe6fee0215cc8ec7634fea5e026dcd25ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
