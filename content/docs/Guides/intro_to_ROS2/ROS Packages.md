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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJBU2PL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfxR7KK5ARwZoBNkahBhoNUaVNjWqitgmXaGlk6plIwIhAO6nF48ruQV9NWyRwZRjk%2B5jKYh%2B6FA8F3TdFSVPliT8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPsTC0Ys10SHGPp%2BQq3AMplf1G5IzYrYJWfYYthHjK7JdYLBDzGYotA2qP%2BkLc7qktVQ8Fqhvd3snPvJMrplRZAGS4fJRvc0ZT5HESc0qmGYdLHKrwlsHcFlh8hEDnVwOZ863GMFS%2F8bhRT74OL9Gm6CmI4JjKVG2zAFyPEzNbrrUluBQ8huL%2Bi11Qa%2B0Zt7CeZAJ8ruzrAhF4l1oQ86oqC%2FxxsbWlq%2FExmI3wpiLaGzaGvv2NC%2FCIRK72M%2BPx4kkuSflf75lQ357lHSE83JiCLXGGcDO3x5uNB%2Bo1qylien%2FkSLrWRC4KQ%2FTils5xbdz7CceHyiQTn%2Bq42Mp9CM8CQU9wi2paqsOtPwi0vk04tLBKICmgoIMEvVGlJe9MaWisydQkxL0Vkb%2FQNUEBMIU5DR0K%2FY8X3ipoysr%2FRTknwcip5fQdunwD0s5MZ7KMwcz5I1YUw0VbxqckjeXXxw1i8a0L9ES99PkOyywxvM9SNHjCzlX0QrzHIFpgG8lO2seDcyICWjDnFNY%2BvKZXdkHnzltf4%2B2d1QehurXCX0HaJ60FZlUxXyuNhdFFnEqyz0hE6NRqlWAjdaZ8aiGVFJ0uyKu%2FNCNhcgYpFa2irtLakxL5cOQLrW6WnWK3myhyS2W8N8XvilgskMlHBTDjgazBBjqkAVUKVzhas6%2FJJV%2BPwOCFIIqU5DlRFhaEaZVj0vpFGWP1EVR2PCetcB77Taf18JHOifpuPb4oGC1KpNA%2FY%2BDIccnkM95pPvhxvGj5ept5i0iKAKHZkPldaBjeklGCE6toSIYpviBKmOiu0D2XmRYQKvjPB7GwokIL%2BhlPDvJOZINom0oetSeLhKPoVtPoY1PCiLS%2BVUNz3iuVibegVP44EMe4APKt&X-Amz-Signature=15dd823cdd246a2b5fc136fcb51b32ccdf952bbb6db09ab776000ea7d8ab9e35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJBU2PL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfxR7KK5ARwZoBNkahBhoNUaVNjWqitgmXaGlk6plIwIhAO6nF48ruQV9NWyRwZRjk%2B5jKYh%2B6FA8F3TdFSVPliT8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPsTC0Ys10SHGPp%2BQq3AMplf1G5IzYrYJWfYYthHjK7JdYLBDzGYotA2qP%2BkLc7qktVQ8Fqhvd3snPvJMrplRZAGS4fJRvc0ZT5HESc0qmGYdLHKrwlsHcFlh8hEDnVwOZ863GMFS%2F8bhRT74OL9Gm6CmI4JjKVG2zAFyPEzNbrrUluBQ8huL%2Bi11Qa%2B0Zt7CeZAJ8ruzrAhF4l1oQ86oqC%2FxxsbWlq%2FExmI3wpiLaGzaGvv2NC%2FCIRK72M%2BPx4kkuSflf75lQ357lHSE83JiCLXGGcDO3x5uNB%2Bo1qylien%2FkSLrWRC4KQ%2FTils5xbdz7CceHyiQTn%2Bq42Mp9CM8CQU9wi2paqsOtPwi0vk04tLBKICmgoIMEvVGlJe9MaWisydQkxL0Vkb%2FQNUEBMIU5DR0K%2FY8X3ipoysr%2FRTknwcip5fQdunwD0s5MZ7KMwcz5I1YUw0VbxqckjeXXxw1i8a0L9ES99PkOyywxvM9SNHjCzlX0QrzHIFpgG8lO2seDcyICWjDnFNY%2BvKZXdkHnzltf4%2B2d1QehurXCX0HaJ60FZlUxXyuNhdFFnEqyz0hE6NRqlWAjdaZ8aiGVFJ0uyKu%2FNCNhcgYpFa2irtLakxL5cOQLrW6WnWK3myhyS2W8N8XvilgskMlHBTDjgazBBjqkAVUKVzhas6%2FJJV%2BPwOCFIIqU5DlRFhaEaZVj0vpFGWP1EVR2PCetcB77Taf18JHOifpuPb4oGC1KpNA%2FY%2BDIccnkM95pPvhxvGj5ept5i0iKAKHZkPldaBjeklGCE6toSIYpviBKmOiu0D2XmRYQKvjPB7GwokIL%2BhlPDvJOZINom0oetSeLhKPoVtPoY1PCiLS%2BVUNz3iuVibegVP44EMe4APKt&X-Amz-Signature=f2690b5d58021ca4047ef8668d522dd4701af89322bd092b9d82390b3ef281de&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJBU2PL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfxR7KK5ARwZoBNkahBhoNUaVNjWqitgmXaGlk6plIwIhAO6nF48ruQV9NWyRwZRjk%2B5jKYh%2B6FA8F3TdFSVPliT8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPsTC0Ys10SHGPp%2BQq3AMplf1G5IzYrYJWfYYthHjK7JdYLBDzGYotA2qP%2BkLc7qktVQ8Fqhvd3snPvJMrplRZAGS4fJRvc0ZT5HESc0qmGYdLHKrwlsHcFlh8hEDnVwOZ863GMFS%2F8bhRT74OL9Gm6CmI4JjKVG2zAFyPEzNbrrUluBQ8huL%2Bi11Qa%2B0Zt7CeZAJ8ruzrAhF4l1oQ86oqC%2FxxsbWlq%2FExmI3wpiLaGzaGvv2NC%2FCIRK72M%2BPx4kkuSflf75lQ357lHSE83JiCLXGGcDO3x5uNB%2Bo1qylien%2FkSLrWRC4KQ%2FTils5xbdz7CceHyiQTn%2Bq42Mp9CM8CQU9wi2paqsOtPwi0vk04tLBKICmgoIMEvVGlJe9MaWisydQkxL0Vkb%2FQNUEBMIU5DR0K%2FY8X3ipoysr%2FRTknwcip5fQdunwD0s5MZ7KMwcz5I1YUw0VbxqckjeXXxw1i8a0L9ES99PkOyywxvM9SNHjCzlX0QrzHIFpgG8lO2seDcyICWjDnFNY%2BvKZXdkHnzltf4%2B2d1QehurXCX0HaJ60FZlUxXyuNhdFFnEqyz0hE6NRqlWAjdaZ8aiGVFJ0uyKu%2FNCNhcgYpFa2irtLakxL5cOQLrW6WnWK3myhyS2W8N8XvilgskMlHBTDjgazBBjqkAVUKVzhas6%2FJJV%2BPwOCFIIqU5DlRFhaEaZVj0vpFGWP1EVR2PCetcB77Taf18JHOifpuPb4oGC1KpNA%2FY%2BDIccnkM95pPvhxvGj5ept5i0iKAKHZkPldaBjeklGCE6toSIYpviBKmOiu0D2XmRYQKvjPB7GwokIL%2BhlPDvJOZINom0oetSeLhKPoVtPoY1PCiLS%2BVUNz3iuVibegVP44EMe4APKt&X-Amz-Signature=ccf562f087a26d13a7ceb6cf889d446293bd3429700054ce7b84307903bca5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJBU2PL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfxR7KK5ARwZoBNkahBhoNUaVNjWqitgmXaGlk6plIwIhAO6nF48ruQV9NWyRwZRjk%2B5jKYh%2B6FA8F3TdFSVPliT8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPsTC0Ys10SHGPp%2BQq3AMplf1G5IzYrYJWfYYthHjK7JdYLBDzGYotA2qP%2BkLc7qktVQ8Fqhvd3snPvJMrplRZAGS4fJRvc0ZT5HESc0qmGYdLHKrwlsHcFlh8hEDnVwOZ863GMFS%2F8bhRT74OL9Gm6CmI4JjKVG2zAFyPEzNbrrUluBQ8huL%2Bi11Qa%2B0Zt7CeZAJ8ruzrAhF4l1oQ86oqC%2FxxsbWlq%2FExmI3wpiLaGzaGvv2NC%2FCIRK72M%2BPx4kkuSflf75lQ357lHSE83JiCLXGGcDO3x5uNB%2Bo1qylien%2FkSLrWRC4KQ%2FTils5xbdz7CceHyiQTn%2Bq42Mp9CM8CQU9wi2paqsOtPwi0vk04tLBKICmgoIMEvVGlJe9MaWisydQkxL0Vkb%2FQNUEBMIU5DR0K%2FY8X3ipoysr%2FRTknwcip5fQdunwD0s5MZ7KMwcz5I1YUw0VbxqckjeXXxw1i8a0L9ES99PkOyywxvM9SNHjCzlX0QrzHIFpgG8lO2seDcyICWjDnFNY%2BvKZXdkHnzltf4%2B2d1QehurXCX0HaJ60FZlUxXyuNhdFFnEqyz0hE6NRqlWAjdaZ8aiGVFJ0uyKu%2FNCNhcgYpFa2irtLakxL5cOQLrW6WnWK3myhyS2W8N8XvilgskMlHBTDjgazBBjqkAVUKVzhas6%2FJJV%2BPwOCFIIqU5DlRFhaEaZVj0vpFGWP1EVR2PCetcB77Taf18JHOifpuPb4oGC1KpNA%2FY%2BDIccnkM95pPvhxvGj5ept5i0iKAKHZkPldaBjeklGCE6toSIYpviBKmOiu0D2XmRYQKvjPB7GwokIL%2BhlPDvJOZINom0oetSeLhKPoVtPoY1PCiLS%2BVUNz3iuVibegVP44EMe4APKt&X-Amz-Signature=1b0c605514bf10eee2371b09c41bc446ff53f7c78f6b121d1303371f0d72ce7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJBU2PL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfxR7KK5ARwZoBNkahBhoNUaVNjWqitgmXaGlk6plIwIhAO6nF48ruQV9NWyRwZRjk%2B5jKYh%2B6FA8F3TdFSVPliT8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPsTC0Ys10SHGPp%2BQq3AMplf1G5IzYrYJWfYYthHjK7JdYLBDzGYotA2qP%2BkLc7qktVQ8Fqhvd3snPvJMrplRZAGS4fJRvc0ZT5HESc0qmGYdLHKrwlsHcFlh8hEDnVwOZ863GMFS%2F8bhRT74OL9Gm6CmI4JjKVG2zAFyPEzNbrrUluBQ8huL%2Bi11Qa%2B0Zt7CeZAJ8ruzrAhF4l1oQ86oqC%2FxxsbWlq%2FExmI3wpiLaGzaGvv2NC%2FCIRK72M%2BPx4kkuSflf75lQ357lHSE83JiCLXGGcDO3x5uNB%2Bo1qylien%2FkSLrWRC4KQ%2FTils5xbdz7CceHyiQTn%2Bq42Mp9CM8CQU9wi2paqsOtPwi0vk04tLBKICmgoIMEvVGlJe9MaWisydQkxL0Vkb%2FQNUEBMIU5DR0K%2FY8X3ipoysr%2FRTknwcip5fQdunwD0s5MZ7KMwcz5I1YUw0VbxqckjeXXxw1i8a0L9ES99PkOyywxvM9SNHjCzlX0QrzHIFpgG8lO2seDcyICWjDnFNY%2BvKZXdkHnzltf4%2B2d1QehurXCX0HaJ60FZlUxXyuNhdFFnEqyz0hE6NRqlWAjdaZ8aiGVFJ0uyKu%2FNCNhcgYpFa2irtLakxL5cOQLrW6WnWK3myhyS2W8N8XvilgskMlHBTDjgazBBjqkAVUKVzhas6%2FJJV%2BPwOCFIIqU5DlRFhaEaZVj0vpFGWP1EVR2PCetcB77Taf18JHOifpuPb4oGC1KpNA%2FY%2BDIccnkM95pPvhxvGj5ept5i0iKAKHZkPldaBjeklGCE6toSIYpviBKmOiu0D2XmRYQKvjPB7GwokIL%2BhlPDvJOZINom0oetSeLhKPoVtPoY1PCiLS%2BVUNz3iuVibegVP44EMe4APKt&X-Amz-Signature=7a14823286a72df2f8a7fa1b83a53906b42cf7d1eb025262b053d2c1f0f0a232&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJBU2PL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfxR7KK5ARwZoBNkahBhoNUaVNjWqitgmXaGlk6plIwIhAO6nF48ruQV9NWyRwZRjk%2B5jKYh%2B6FA8F3TdFSVPliT8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPsTC0Ys10SHGPp%2BQq3AMplf1G5IzYrYJWfYYthHjK7JdYLBDzGYotA2qP%2BkLc7qktVQ8Fqhvd3snPvJMrplRZAGS4fJRvc0ZT5HESc0qmGYdLHKrwlsHcFlh8hEDnVwOZ863GMFS%2F8bhRT74OL9Gm6CmI4JjKVG2zAFyPEzNbrrUluBQ8huL%2Bi11Qa%2B0Zt7CeZAJ8ruzrAhF4l1oQ86oqC%2FxxsbWlq%2FExmI3wpiLaGzaGvv2NC%2FCIRK72M%2BPx4kkuSflf75lQ357lHSE83JiCLXGGcDO3x5uNB%2Bo1qylien%2FkSLrWRC4KQ%2FTils5xbdz7CceHyiQTn%2Bq42Mp9CM8CQU9wi2paqsOtPwi0vk04tLBKICmgoIMEvVGlJe9MaWisydQkxL0Vkb%2FQNUEBMIU5DR0K%2FY8X3ipoysr%2FRTknwcip5fQdunwD0s5MZ7KMwcz5I1YUw0VbxqckjeXXxw1i8a0L9ES99PkOyywxvM9SNHjCzlX0QrzHIFpgG8lO2seDcyICWjDnFNY%2BvKZXdkHnzltf4%2B2d1QehurXCX0HaJ60FZlUxXyuNhdFFnEqyz0hE6NRqlWAjdaZ8aiGVFJ0uyKu%2FNCNhcgYpFa2irtLakxL5cOQLrW6WnWK3myhyS2W8N8XvilgskMlHBTDjgazBBjqkAVUKVzhas6%2FJJV%2BPwOCFIIqU5DlRFhaEaZVj0vpFGWP1EVR2PCetcB77Taf18JHOifpuPb4oGC1KpNA%2FY%2BDIccnkM95pPvhxvGj5ept5i0iKAKHZkPldaBjeklGCE6toSIYpviBKmOiu0D2XmRYQKvjPB7GwokIL%2BhlPDvJOZINom0oetSeLhKPoVtPoY1PCiLS%2BVUNz3iuVibegVP44EMe4APKt&X-Amz-Signature=ae31eb8a19f334cf615d6727bbc29efcf24bd775a9d4ca1ba4f0c1827c1fe37b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJBU2PL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXfxR7KK5ARwZoBNkahBhoNUaVNjWqitgmXaGlk6plIwIhAO6nF48ruQV9NWyRwZRjk%2B5jKYh%2B6FA8F3TdFSVPliT8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPsTC0Ys10SHGPp%2BQq3AMplf1G5IzYrYJWfYYthHjK7JdYLBDzGYotA2qP%2BkLc7qktVQ8Fqhvd3snPvJMrplRZAGS4fJRvc0ZT5HESc0qmGYdLHKrwlsHcFlh8hEDnVwOZ863GMFS%2F8bhRT74OL9Gm6CmI4JjKVG2zAFyPEzNbrrUluBQ8huL%2Bi11Qa%2B0Zt7CeZAJ8ruzrAhF4l1oQ86oqC%2FxxsbWlq%2FExmI3wpiLaGzaGvv2NC%2FCIRK72M%2BPx4kkuSflf75lQ357lHSE83JiCLXGGcDO3x5uNB%2Bo1qylien%2FkSLrWRC4KQ%2FTils5xbdz7CceHyiQTn%2Bq42Mp9CM8CQU9wi2paqsOtPwi0vk04tLBKICmgoIMEvVGlJe9MaWisydQkxL0Vkb%2FQNUEBMIU5DR0K%2FY8X3ipoysr%2FRTknwcip5fQdunwD0s5MZ7KMwcz5I1YUw0VbxqckjeXXxw1i8a0L9ES99PkOyywxvM9SNHjCzlX0QrzHIFpgG8lO2seDcyICWjDnFNY%2BvKZXdkHnzltf4%2B2d1QehurXCX0HaJ60FZlUxXyuNhdFFnEqyz0hE6NRqlWAjdaZ8aiGVFJ0uyKu%2FNCNhcgYpFa2irtLakxL5cOQLrW6WnWK3myhyS2W8N8XvilgskMlHBTDjgazBBjqkAVUKVzhas6%2FJJV%2BPwOCFIIqU5DlRFhaEaZVj0vpFGWP1EVR2PCetcB77Taf18JHOifpuPb4oGC1KpNA%2FY%2BDIccnkM95pPvhxvGj5ept5i0iKAKHZkPldaBjeklGCE6toSIYpviBKmOiu0D2XmRYQKvjPB7GwokIL%2BhlPDvJOZINom0oetSeLhKPoVtPoY1PCiLS%2BVUNz3iuVibegVP44EMe4APKt&X-Amz-Signature=a449867cef790bd92f75c0f906b88ece70ff93594599f445bd9cbeb1e22ec644&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
