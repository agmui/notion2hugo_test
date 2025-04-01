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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SXSYD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID%2Br0sLRX9zD%2Br8oP%2FT4XwpHIbUbYpn6nnT3D28u7AxyAiBKtodIOuBnQWAtpRJHR9iMzWrpYf1cn4q%2FT7WxUtNFQyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6hsWyCWZo5JCayhQKtwDZLtoW9NqHYvtfkCGppmL0EZVjBi2ndHoZonqfyLJGTk03JXpM5esNhIJk4hs687Ba92nZB24zq%2BRuNNUl%2BK1CMsDmX2LWGrulX%2BGL2PVK5CoF6MnVkFL8In30dAkewQWQV8FqlxtAewNoPy8l3pZOEKJ%2FM5vwBq4vFyRAREpPQ7TIEzyyCvYPITlO2AeeCSe2J1ciTw62TqqQq90s%2FdubQkjfOEVckbOVA2OABPHSpFawPOA0ulYuOooElXRx0DOZ6oJGpFOKbE9BuSKpQwlGjMYzn7LJsTqFFkehPRruyyHjeyefAcO9qRuLnA6oUGh6054ts0CpNMVTcn2VZqYScWOQqTWSD49oP2Mmlehlzy2Xpjn1eEc8KdLDvsSnd2V9PP7EBWVfZpM08cbPW9UlP7FcgclBCqxFVHivsV5uxKAoMhGQNypaY0iQxTKq9mmW7jh6lPbHTkzoMqzTOmQT40Ioxghuc1WHN3NGHGxg8cLyp6npYpM6vQRgeyNjnjLOkNpqgRAktMCAoovEjHWRVnJLHe5DdSDK%2Fcq3hHc5O%2BDhjwsCPNcK8EkMLwDC0gbyqNv25Pka%2B70M1VQ%2B8g%2Bpafc6SWQH%2BJyRtOtG1Le5UolFfhy1g%2BTjR6b%2BdAwv4ewvwY6pgFKKRN31Jlp1b0MFWQCsZofMusk5g1ZHOx1pQGaVAE5O8ztxjY1zy8qh2xL90OVpJlJOeJhKheYRo31RLfpGwHlxjKEkKls9m8m%2ByEDWU4wsFcv8jvOSLfxBb4zc2KNgEEZMzVvYk0nzvDfsJlACY8RJyFAyQi7CRyfT0YScXY%2Bl4u19uJPQbXhRNj5cLDVfj1FN4reioLfHrChlXEia06cEcLm5cR5&X-Amz-Signature=6ea0057de261279475e5e48264c44f0a99c3cf83c2182278225c8fea79cdc0fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SXSYD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID%2Br0sLRX9zD%2Br8oP%2FT4XwpHIbUbYpn6nnT3D28u7AxyAiBKtodIOuBnQWAtpRJHR9iMzWrpYf1cn4q%2FT7WxUtNFQyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6hsWyCWZo5JCayhQKtwDZLtoW9NqHYvtfkCGppmL0EZVjBi2ndHoZonqfyLJGTk03JXpM5esNhIJk4hs687Ba92nZB24zq%2BRuNNUl%2BK1CMsDmX2LWGrulX%2BGL2PVK5CoF6MnVkFL8In30dAkewQWQV8FqlxtAewNoPy8l3pZOEKJ%2FM5vwBq4vFyRAREpPQ7TIEzyyCvYPITlO2AeeCSe2J1ciTw62TqqQq90s%2FdubQkjfOEVckbOVA2OABPHSpFawPOA0ulYuOooElXRx0DOZ6oJGpFOKbE9BuSKpQwlGjMYzn7LJsTqFFkehPRruyyHjeyefAcO9qRuLnA6oUGh6054ts0CpNMVTcn2VZqYScWOQqTWSD49oP2Mmlehlzy2Xpjn1eEc8KdLDvsSnd2V9PP7EBWVfZpM08cbPW9UlP7FcgclBCqxFVHivsV5uxKAoMhGQNypaY0iQxTKq9mmW7jh6lPbHTkzoMqzTOmQT40Ioxghuc1WHN3NGHGxg8cLyp6npYpM6vQRgeyNjnjLOkNpqgRAktMCAoovEjHWRVnJLHe5DdSDK%2Fcq3hHc5O%2BDhjwsCPNcK8EkMLwDC0gbyqNv25Pka%2B70M1VQ%2B8g%2Bpafc6SWQH%2BJyRtOtG1Le5UolFfhy1g%2BTjR6b%2BdAwv4ewvwY6pgFKKRN31Jlp1b0MFWQCsZofMusk5g1ZHOx1pQGaVAE5O8ztxjY1zy8qh2xL90OVpJlJOeJhKheYRo31RLfpGwHlxjKEkKls9m8m%2ByEDWU4wsFcv8jvOSLfxBb4zc2KNgEEZMzVvYk0nzvDfsJlACY8RJyFAyQi7CRyfT0YScXY%2Bl4u19uJPQbXhRNj5cLDVfj1FN4reioLfHrChlXEia06cEcLm5cR5&X-Amz-Signature=33851abf71bf692b575ab5391ee2dd993df84d98a8cc3ae87a1b87a535102d28&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SXSYD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID%2Br0sLRX9zD%2Br8oP%2FT4XwpHIbUbYpn6nnT3D28u7AxyAiBKtodIOuBnQWAtpRJHR9iMzWrpYf1cn4q%2FT7WxUtNFQyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6hsWyCWZo5JCayhQKtwDZLtoW9NqHYvtfkCGppmL0EZVjBi2ndHoZonqfyLJGTk03JXpM5esNhIJk4hs687Ba92nZB24zq%2BRuNNUl%2BK1CMsDmX2LWGrulX%2BGL2PVK5CoF6MnVkFL8In30dAkewQWQV8FqlxtAewNoPy8l3pZOEKJ%2FM5vwBq4vFyRAREpPQ7TIEzyyCvYPITlO2AeeCSe2J1ciTw62TqqQq90s%2FdubQkjfOEVckbOVA2OABPHSpFawPOA0ulYuOooElXRx0DOZ6oJGpFOKbE9BuSKpQwlGjMYzn7LJsTqFFkehPRruyyHjeyefAcO9qRuLnA6oUGh6054ts0CpNMVTcn2VZqYScWOQqTWSD49oP2Mmlehlzy2Xpjn1eEc8KdLDvsSnd2V9PP7EBWVfZpM08cbPW9UlP7FcgclBCqxFVHivsV5uxKAoMhGQNypaY0iQxTKq9mmW7jh6lPbHTkzoMqzTOmQT40Ioxghuc1WHN3NGHGxg8cLyp6npYpM6vQRgeyNjnjLOkNpqgRAktMCAoovEjHWRVnJLHe5DdSDK%2Fcq3hHc5O%2BDhjwsCPNcK8EkMLwDC0gbyqNv25Pka%2B70M1VQ%2B8g%2Bpafc6SWQH%2BJyRtOtG1Le5UolFfhy1g%2BTjR6b%2BdAwv4ewvwY6pgFKKRN31Jlp1b0MFWQCsZofMusk5g1ZHOx1pQGaVAE5O8ztxjY1zy8qh2xL90OVpJlJOeJhKheYRo31RLfpGwHlxjKEkKls9m8m%2ByEDWU4wsFcv8jvOSLfxBb4zc2KNgEEZMzVvYk0nzvDfsJlACY8RJyFAyQi7CRyfT0YScXY%2Bl4u19uJPQbXhRNj5cLDVfj1FN4reioLfHrChlXEia06cEcLm5cR5&X-Amz-Signature=76993396985b53b50e20ae18ade030301a139831a59f9de8e7754d152466c488&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SXSYD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID%2Br0sLRX9zD%2Br8oP%2FT4XwpHIbUbYpn6nnT3D28u7AxyAiBKtodIOuBnQWAtpRJHR9iMzWrpYf1cn4q%2FT7WxUtNFQyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6hsWyCWZo5JCayhQKtwDZLtoW9NqHYvtfkCGppmL0EZVjBi2ndHoZonqfyLJGTk03JXpM5esNhIJk4hs687Ba92nZB24zq%2BRuNNUl%2BK1CMsDmX2LWGrulX%2BGL2PVK5CoF6MnVkFL8In30dAkewQWQV8FqlxtAewNoPy8l3pZOEKJ%2FM5vwBq4vFyRAREpPQ7TIEzyyCvYPITlO2AeeCSe2J1ciTw62TqqQq90s%2FdubQkjfOEVckbOVA2OABPHSpFawPOA0ulYuOooElXRx0DOZ6oJGpFOKbE9BuSKpQwlGjMYzn7LJsTqFFkehPRruyyHjeyefAcO9qRuLnA6oUGh6054ts0CpNMVTcn2VZqYScWOQqTWSD49oP2Mmlehlzy2Xpjn1eEc8KdLDvsSnd2V9PP7EBWVfZpM08cbPW9UlP7FcgclBCqxFVHivsV5uxKAoMhGQNypaY0iQxTKq9mmW7jh6lPbHTkzoMqzTOmQT40Ioxghuc1WHN3NGHGxg8cLyp6npYpM6vQRgeyNjnjLOkNpqgRAktMCAoovEjHWRVnJLHe5DdSDK%2Fcq3hHc5O%2BDhjwsCPNcK8EkMLwDC0gbyqNv25Pka%2B70M1VQ%2B8g%2Bpafc6SWQH%2BJyRtOtG1Le5UolFfhy1g%2BTjR6b%2BdAwv4ewvwY6pgFKKRN31Jlp1b0MFWQCsZofMusk5g1ZHOx1pQGaVAE5O8ztxjY1zy8qh2xL90OVpJlJOeJhKheYRo31RLfpGwHlxjKEkKls9m8m%2ByEDWU4wsFcv8jvOSLfxBb4zc2KNgEEZMzVvYk0nzvDfsJlACY8RJyFAyQi7CRyfT0YScXY%2Bl4u19uJPQbXhRNj5cLDVfj1FN4reioLfHrChlXEia06cEcLm5cR5&X-Amz-Signature=21ad135e9af6d1420c41400e41138d44049a42e0bc7014fee5e9061b47e877bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SXSYD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID%2Br0sLRX9zD%2Br8oP%2FT4XwpHIbUbYpn6nnT3D28u7AxyAiBKtodIOuBnQWAtpRJHR9iMzWrpYf1cn4q%2FT7WxUtNFQyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6hsWyCWZo5JCayhQKtwDZLtoW9NqHYvtfkCGppmL0EZVjBi2ndHoZonqfyLJGTk03JXpM5esNhIJk4hs687Ba92nZB24zq%2BRuNNUl%2BK1CMsDmX2LWGrulX%2BGL2PVK5CoF6MnVkFL8In30dAkewQWQV8FqlxtAewNoPy8l3pZOEKJ%2FM5vwBq4vFyRAREpPQ7TIEzyyCvYPITlO2AeeCSe2J1ciTw62TqqQq90s%2FdubQkjfOEVckbOVA2OABPHSpFawPOA0ulYuOooElXRx0DOZ6oJGpFOKbE9BuSKpQwlGjMYzn7LJsTqFFkehPRruyyHjeyefAcO9qRuLnA6oUGh6054ts0CpNMVTcn2VZqYScWOQqTWSD49oP2Mmlehlzy2Xpjn1eEc8KdLDvsSnd2V9PP7EBWVfZpM08cbPW9UlP7FcgclBCqxFVHivsV5uxKAoMhGQNypaY0iQxTKq9mmW7jh6lPbHTkzoMqzTOmQT40Ioxghuc1WHN3NGHGxg8cLyp6npYpM6vQRgeyNjnjLOkNpqgRAktMCAoovEjHWRVnJLHe5DdSDK%2Fcq3hHc5O%2BDhjwsCPNcK8EkMLwDC0gbyqNv25Pka%2B70M1VQ%2B8g%2Bpafc6SWQH%2BJyRtOtG1Le5UolFfhy1g%2BTjR6b%2BdAwv4ewvwY6pgFKKRN31Jlp1b0MFWQCsZofMusk5g1ZHOx1pQGaVAE5O8ztxjY1zy8qh2xL90OVpJlJOeJhKheYRo31RLfpGwHlxjKEkKls9m8m%2ByEDWU4wsFcv8jvOSLfxBb4zc2KNgEEZMzVvYk0nzvDfsJlACY8RJyFAyQi7CRyfT0YScXY%2Bl4u19uJPQbXhRNj5cLDVfj1FN4reioLfHrChlXEia06cEcLm5cR5&X-Amz-Signature=2596a0f0d7e977f26ae6b7bb1f293f03f55daab429486be9cc14d59208776960&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SXSYD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID%2Br0sLRX9zD%2Br8oP%2FT4XwpHIbUbYpn6nnT3D28u7AxyAiBKtodIOuBnQWAtpRJHR9iMzWrpYf1cn4q%2FT7WxUtNFQyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6hsWyCWZo5JCayhQKtwDZLtoW9NqHYvtfkCGppmL0EZVjBi2ndHoZonqfyLJGTk03JXpM5esNhIJk4hs687Ba92nZB24zq%2BRuNNUl%2BK1CMsDmX2LWGrulX%2BGL2PVK5CoF6MnVkFL8In30dAkewQWQV8FqlxtAewNoPy8l3pZOEKJ%2FM5vwBq4vFyRAREpPQ7TIEzyyCvYPITlO2AeeCSe2J1ciTw62TqqQq90s%2FdubQkjfOEVckbOVA2OABPHSpFawPOA0ulYuOooElXRx0DOZ6oJGpFOKbE9BuSKpQwlGjMYzn7LJsTqFFkehPRruyyHjeyefAcO9qRuLnA6oUGh6054ts0CpNMVTcn2VZqYScWOQqTWSD49oP2Mmlehlzy2Xpjn1eEc8KdLDvsSnd2V9PP7EBWVfZpM08cbPW9UlP7FcgclBCqxFVHivsV5uxKAoMhGQNypaY0iQxTKq9mmW7jh6lPbHTkzoMqzTOmQT40Ioxghuc1WHN3NGHGxg8cLyp6npYpM6vQRgeyNjnjLOkNpqgRAktMCAoovEjHWRVnJLHe5DdSDK%2Fcq3hHc5O%2BDhjwsCPNcK8EkMLwDC0gbyqNv25Pka%2B70M1VQ%2B8g%2Bpafc6SWQH%2BJyRtOtG1Le5UolFfhy1g%2BTjR6b%2BdAwv4ewvwY6pgFKKRN31Jlp1b0MFWQCsZofMusk5g1ZHOx1pQGaVAE5O8ztxjY1zy8qh2xL90OVpJlJOeJhKheYRo31RLfpGwHlxjKEkKls9m8m%2ByEDWU4wsFcv8jvOSLfxBb4zc2KNgEEZMzVvYk0nzvDfsJlACY8RJyFAyQi7CRyfT0YScXY%2Bl4u19uJPQbXhRNj5cLDVfj1FN4reioLfHrChlXEia06cEcLm5cR5&X-Amz-Signature=08336e2186c6098c9183d959dc7598c4b963b9fe6785b080f8fae27d0b6fd434&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B4SXSYD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCID%2Br0sLRX9zD%2Br8oP%2FT4XwpHIbUbYpn6nnT3D28u7AxyAiBKtodIOuBnQWAtpRJHR9iMzWrpYf1cn4q%2FT7WxUtNFQyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6hsWyCWZo5JCayhQKtwDZLtoW9NqHYvtfkCGppmL0EZVjBi2ndHoZonqfyLJGTk03JXpM5esNhIJk4hs687Ba92nZB24zq%2BRuNNUl%2BK1CMsDmX2LWGrulX%2BGL2PVK5CoF6MnVkFL8In30dAkewQWQV8FqlxtAewNoPy8l3pZOEKJ%2FM5vwBq4vFyRAREpPQ7TIEzyyCvYPITlO2AeeCSe2J1ciTw62TqqQq90s%2FdubQkjfOEVckbOVA2OABPHSpFawPOA0ulYuOooElXRx0DOZ6oJGpFOKbE9BuSKpQwlGjMYzn7LJsTqFFkehPRruyyHjeyefAcO9qRuLnA6oUGh6054ts0CpNMVTcn2VZqYScWOQqTWSD49oP2Mmlehlzy2Xpjn1eEc8KdLDvsSnd2V9PP7EBWVfZpM08cbPW9UlP7FcgclBCqxFVHivsV5uxKAoMhGQNypaY0iQxTKq9mmW7jh6lPbHTkzoMqzTOmQT40Ioxghuc1WHN3NGHGxg8cLyp6npYpM6vQRgeyNjnjLOkNpqgRAktMCAoovEjHWRVnJLHe5DdSDK%2Fcq3hHc5O%2BDhjwsCPNcK8EkMLwDC0gbyqNv25Pka%2B70M1VQ%2B8g%2Bpafc6SWQH%2BJyRtOtG1Le5UolFfhy1g%2BTjR6b%2BdAwv4ewvwY6pgFKKRN31Jlp1b0MFWQCsZofMusk5g1ZHOx1pQGaVAE5O8ztxjY1zy8qh2xL90OVpJlJOeJhKheYRo31RLfpGwHlxjKEkKls9m8m%2ByEDWU4wsFcv8jvOSLfxBb4zc2KNgEEZMzVvYk0nzvDfsJlACY8RJyFAyQi7CRyfT0YScXY%2Bl4u19uJPQbXhRNj5cLDVfj1FN4reioLfHrChlXEia06cEcLm5cR5&X-Amz-Signature=615aa675aa12448eb129c47d846d8432f79b881266a04c86939c1e9b4b2346b1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
