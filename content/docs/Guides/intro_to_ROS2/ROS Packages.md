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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDG2A22S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ%2Bg1jOtHd0WMwrlrP42QZUjdpX7jfb%2FWkgP3FWhDt0AiEArDSar6spEaDLn3bVHmMMBLp%2B2HHlz3VffQipD3N92hQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGgV6wIeo3WKd8AAvircAwFtAFhG9anBOne0z3gu9IR2FiLSqE%2FoP%2BH5tpicCdr%2BefpD8Asqa7oJpe3xpoLRd1d3p1zkqA1lrAwHMg%2FimhXwkxZZFOfSZ%2BOZ6eAwVUkQCzfO8M8VqrzLVr0rAFgUna0lYPJV7m3SthiT36pPAGGwaiPkt31RXMRg20zHs3WdshHGipibE%2F%2ByQpdvp6yjPC9EBv2E0%2BpJ4ddDTR%2BoFQAdBW85fWfkgDog96Ia%2F9HAp1W4JUf6C5qH32QgKz4FoLDDG3BsfNo5%2FtXQFc7flZbiE7cCRRM14nkz3UDN91huHK8dWh%2Bex7wAsLs9EvPw4qXc9DBLGBSPEpAf1K69UDXhBjQrTa96tnUySUky6VIlbtvrp8bXsioLFF11Pj9v9hFs%2BoyKe%2FVsejJIUdSV%2B%2BAO6BG32pBf2AwyMd7SY3LeA9quVyKgPQaWdX%2BcjGMmlhRuM%2FOl1HFi3oxM4ouiukZULLi3RElLaBB9uaADQFNy1qn43A9jkiqBPUFmDvAN7gERnUvCFjmxmm3bq4eSWhnXMQ0vk0pDac3Da0h7PQxIi3FPE2ZgJ8DsNCjU6XowxK9Rad3fYertl%2BjpMDCdEYtab9XmvIjP%2BG0x3Iev5xN3DUqiWijsVKmKx4WuMKqL58AGOqUBxNZwsfqEy0JKxBpuukLaBCFsPGng35VMeXMCSmpiIyH3o%2F4hgLlIWEAagSWQ8AR2qSrCE9OQjPwjMvo3INe56JzcazYvuISuckhIopvE5HYwprpbW%2BhUYZRmC08%2Bp0wZtNOexUPloph1BhWwTZqIcMJdX2GErikamKTi7BeJ2wkmC67rTdHwSUEaerORClFuJqZLK7GKynugQ6Yg8ataoegZb2y8&X-Amz-Signature=f3f2981e844e01d0c4814e9afe5fd5ef383f6a11e130e6eb27e6ffa84b688b10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDG2A22S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ%2Bg1jOtHd0WMwrlrP42QZUjdpX7jfb%2FWkgP3FWhDt0AiEArDSar6spEaDLn3bVHmMMBLp%2B2HHlz3VffQipD3N92hQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGgV6wIeo3WKd8AAvircAwFtAFhG9anBOne0z3gu9IR2FiLSqE%2FoP%2BH5tpicCdr%2BefpD8Asqa7oJpe3xpoLRd1d3p1zkqA1lrAwHMg%2FimhXwkxZZFOfSZ%2BOZ6eAwVUkQCzfO8M8VqrzLVr0rAFgUna0lYPJV7m3SthiT36pPAGGwaiPkt31RXMRg20zHs3WdshHGipibE%2F%2ByQpdvp6yjPC9EBv2E0%2BpJ4ddDTR%2BoFQAdBW85fWfkgDog96Ia%2F9HAp1W4JUf6C5qH32QgKz4FoLDDG3BsfNo5%2FtXQFc7flZbiE7cCRRM14nkz3UDN91huHK8dWh%2Bex7wAsLs9EvPw4qXc9DBLGBSPEpAf1K69UDXhBjQrTa96tnUySUky6VIlbtvrp8bXsioLFF11Pj9v9hFs%2BoyKe%2FVsejJIUdSV%2B%2BAO6BG32pBf2AwyMd7SY3LeA9quVyKgPQaWdX%2BcjGMmlhRuM%2FOl1HFi3oxM4ouiukZULLi3RElLaBB9uaADQFNy1qn43A9jkiqBPUFmDvAN7gERnUvCFjmxmm3bq4eSWhnXMQ0vk0pDac3Da0h7PQxIi3FPE2ZgJ8DsNCjU6XowxK9Rad3fYertl%2BjpMDCdEYtab9XmvIjP%2BG0x3Iev5xN3DUqiWijsVKmKx4WuMKqL58AGOqUBxNZwsfqEy0JKxBpuukLaBCFsPGng35VMeXMCSmpiIyH3o%2F4hgLlIWEAagSWQ8AR2qSrCE9OQjPwjMvo3INe56JzcazYvuISuckhIopvE5HYwprpbW%2BhUYZRmC08%2Bp0wZtNOexUPloph1BhWwTZqIcMJdX2GErikamKTi7BeJ2wkmC67rTdHwSUEaerORClFuJqZLK7GKynugQ6Yg8ataoegZb2y8&X-Amz-Signature=f4e69b49e7edd66279ac6ef60d737414a231f4097812de1172468798b8dac6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDG2A22S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ%2Bg1jOtHd0WMwrlrP42QZUjdpX7jfb%2FWkgP3FWhDt0AiEArDSar6spEaDLn3bVHmMMBLp%2B2HHlz3VffQipD3N92hQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGgV6wIeo3WKd8AAvircAwFtAFhG9anBOne0z3gu9IR2FiLSqE%2FoP%2BH5tpicCdr%2BefpD8Asqa7oJpe3xpoLRd1d3p1zkqA1lrAwHMg%2FimhXwkxZZFOfSZ%2BOZ6eAwVUkQCzfO8M8VqrzLVr0rAFgUna0lYPJV7m3SthiT36pPAGGwaiPkt31RXMRg20zHs3WdshHGipibE%2F%2ByQpdvp6yjPC9EBv2E0%2BpJ4ddDTR%2BoFQAdBW85fWfkgDog96Ia%2F9HAp1W4JUf6C5qH32QgKz4FoLDDG3BsfNo5%2FtXQFc7flZbiE7cCRRM14nkz3UDN91huHK8dWh%2Bex7wAsLs9EvPw4qXc9DBLGBSPEpAf1K69UDXhBjQrTa96tnUySUky6VIlbtvrp8bXsioLFF11Pj9v9hFs%2BoyKe%2FVsejJIUdSV%2B%2BAO6BG32pBf2AwyMd7SY3LeA9quVyKgPQaWdX%2BcjGMmlhRuM%2FOl1HFi3oxM4ouiukZULLi3RElLaBB9uaADQFNy1qn43A9jkiqBPUFmDvAN7gERnUvCFjmxmm3bq4eSWhnXMQ0vk0pDac3Da0h7PQxIi3FPE2ZgJ8DsNCjU6XowxK9Rad3fYertl%2BjpMDCdEYtab9XmvIjP%2BG0x3Iev5xN3DUqiWijsVKmKx4WuMKqL58AGOqUBxNZwsfqEy0JKxBpuukLaBCFsPGng35VMeXMCSmpiIyH3o%2F4hgLlIWEAagSWQ8AR2qSrCE9OQjPwjMvo3INe56JzcazYvuISuckhIopvE5HYwprpbW%2BhUYZRmC08%2Bp0wZtNOexUPloph1BhWwTZqIcMJdX2GErikamKTi7BeJ2wkmC67rTdHwSUEaerORClFuJqZLK7GKynugQ6Yg8ataoegZb2y8&X-Amz-Signature=1002e7b3f50cd0c2d51dbfdee9d04e1b599de55d3e2bc33fb03b509fa73dc544&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDG2A22S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ%2Bg1jOtHd0WMwrlrP42QZUjdpX7jfb%2FWkgP3FWhDt0AiEArDSar6spEaDLn3bVHmMMBLp%2B2HHlz3VffQipD3N92hQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGgV6wIeo3WKd8AAvircAwFtAFhG9anBOne0z3gu9IR2FiLSqE%2FoP%2BH5tpicCdr%2BefpD8Asqa7oJpe3xpoLRd1d3p1zkqA1lrAwHMg%2FimhXwkxZZFOfSZ%2BOZ6eAwVUkQCzfO8M8VqrzLVr0rAFgUna0lYPJV7m3SthiT36pPAGGwaiPkt31RXMRg20zHs3WdshHGipibE%2F%2ByQpdvp6yjPC9EBv2E0%2BpJ4ddDTR%2BoFQAdBW85fWfkgDog96Ia%2F9HAp1W4JUf6C5qH32QgKz4FoLDDG3BsfNo5%2FtXQFc7flZbiE7cCRRM14nkz3UDN91huHK8dWh%2Bex7wAsLs9EvPw4qXc9DBLGBSPEpAf1K69UDXhBjQrTa96tnUySUky6VIlbtvrp8bXsioLFF11Pj9v9hFs%2BoyKe%2FVsejJIUdSV%2B%2BAO6BG32pBf2AwyMd7SY3LeA9quVyKgPQaWdX%2BcjGMmlhRuM%2FOl1HFi3oxM4ouiukZULLi3RElLaBB9uaADQFNy1qn43A9jkiqBPUFmDvAN7gERnUvCFjmxmm3bq4eSWhnXMQ0vk0pDac3Da0h7PQxIi3FPE2ZgJ8DsNCjU6XowxK9Rad3fYertl%2BjpMDCdEYtab9XmvIjP%2BG0x3Iev5xN3DUqiWijsVKmKx4WuMKqL58AGOqUBxNZwsfqEy0JKxBpuukLaBCFsPGng35VMeXMCSmpiIyH3o%2F4hgLlIWEAagSWQ8AR2qSrCE9OQjPwjMvo3INe56JzcazYvuISuckhIopvE5HYwprpbW%2BhUYZRmC08%2Bp0wZtNOexUPloph1BhWwTZqIcMJdX2GErikamKTi7BeJ2wkmC67rTdHwSUEaerORClFuJqZLK7GKynugQ6Yg8ataoegZb2y8&X-Amz-Signature=296b39f2022025e6b29033287f725e8d8e887521865edeeed05c482b4f70024d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDG2A22S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ%2Bg1jOtHd0WMwrlrP42QZUjdpX7jfb%2FWkgP3FWhDt0AiEArDSar6spEaDLn3bVHmMMBLp%2B2HHlz3VffQipD3N92hQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGgV6wIeo3WKd8AAvircAwFtAFhG9anBOne0z3gu9IR2FiLSqE%2FoP%2BH5tpicCdr%2BefpD8Asqa7oJpe3xpoLRd1d3p1zkqA1lrAwHMg%2FimhXwkxZZFOfSZ%2BOZ6eAwVUkQCzfO8M8VqrzLVr0rAFgUna0lYPJV7m3SthiT36pPAGGwaiPkt31RXMRg20zHs3WdshHGipibE%2F%2ByQpdvp6yjPC9EBv2E0%2BpJ4ddDTR%2BoFQAdBW85fWfkgDog96Ia%2F9HAp1W4JUf6C5qH32QgKz4FoLDDG3BsfNo5%2FtXQFc7flZbiE7cCRRM14nkz3UDN91huHK8dWh%2Bex7wAsLs9EvPw4qXc9DBLGBSPEpAf1K69UDXhBjQrTa96tnUySUky6VIlbtvrp8bXsioLFF11Pj9v9hFs%2BoyKe%2FVsejJIUdSV%2B%2BAO6BG32pBf2AwyMd7SY3LeA9quVyKgPQaWdX%2BcjGMmlhRuM%2FOl1HFi3oxM4ouiukZULLi3RElLaBB9uaADQFNy1qn43A9jkiqBPUFmDvAN7gERnUvCFjmxmm3bq4eSWhnXMQ0vk0pDac3Da0h7PQxIi3FPE2ZgJ8DsNCjU6XowxK9Rad3fYertl%2BjpMDCdEYtab9XmvIjP%2BG0x3Iev5xN3DUqiWijsVKmKx4WuMKqL58AGOqUBxNZwsfqEy0JKxBpuukLaBCFsPGng35VMeXMCSmpiIyH3o%2F4hgLlIWEAagSWQ8AR2qSrCE9OQjPwjMvo3INe56JzcazYvuISuckhIopvE5HYwprpbW%2BhUYZRmC08%2Bp0wZtNOexUPloph1BhWwTZqIcMJdX2GErikamKTi7BeJ2wkmC67rTdHwSUEaerORClFuJqZLK7GKynugQ6Yg8ataoegZb2y8&X-Amz-Signature=b26d348f9a5e1ebf9b760769e19e833f16c7d6557d19dbe83d5cf91d8235990b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDG2A22S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ%2Bg1jOtHd0WMwrlrP42QZUjdpX7jfb%2FWkgP3FWhDt0AiEArDSar6spEaDLn3bVHmMMBLp%2B2HHlz3VffQipD3N92hQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGgV6wIeo3WKd8AAvircAwFtAFhG9anBOne0z3gu9IR2FiLSqE%2FoP%2BH5tpicCdr%2BefpD8Asqa7oJpe3xpoLRd1d3p1zkqA1lrAwHMg%2FimhXwkxZZFOfSZ%2BOZ6eAwVUkQCzfO8M8VqrzLVr0rAFgUna0lYPJV7m3SthiT36pPAGGwaiPkt31RXMRg20zHs3WdshHGipibE%2F%2ByQpdvp6yjPC9EBv2E0%2BpJ4ddDTR%2BoFQAdBW85fWfkgDog96Ia%2F9HAp1W4JUf6C5qH32QgKz4FoLDDG3BsfNo5%2FtXQFc7flZbiE7cCRRM14nkz3UDN91huHK8dWh%2Bex7wAsLs9EvPw4qXc9DBLGBSPEpAf1K69UDXhBjQrTa96tnUySUky6VIlbtvrp8bXsioLFF11Pj9v9hFs%2BoyKe%2FVsejJIUdSV%2B%2BAO6BG32pBf2AwyMd7SY3LeA9quVyKgPQaWdX%2BcjGMmlhRuM%2FOl1HFi3oxM4ouiukZULLi3RElLaBB9uaADQFNy1qn43A9jkiqBPUFmDvAN7gERnUvCFjmxmm3bq4eSWhnXMQ0vk0pDac3Da0h7PQxIi3FPE2ZgJ8DsNCjU6XowxK9Rad3fYertl%2BjpMDCdEYtab9XmvIjP%2BG0x3Iev5xN3DUqiWijsVKmKx4WuMKqL58AGOqUBxNZwsfqEy0JKxBpuukLaBCFsPGng35VMeXMCSmpiIyH3o%2F4hgLlIWEAagSWQ8AR2qSrCE9OQjPwjMvo3INe56JzcazYvuISuckhIopvE5HYwprpbW%2BhUYZRmC08%2Bp0wZtNOexUPloph1BhWwTZqIcMJdX2GErikamKTi7BeJ2wkmC67rTdHwSUEaerORClFuJqZLK7GKynugQ6Yg8ataoegZb2y8&X-Amz-Signature=5dd50d1fe3dedc02c28cef98dcdb0308a8879af1a27cdf4ed6d8bf7311adb030&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDG2A22S%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ%2Bg1jOtHd0WMwrlrP42QZUjdpX7jfb%2FWkgP3FWhDt0AiEArDSar6spEaDLn3bVHmMMBLp%2B2HHlz3VffQipD3N92hQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDGgV6wIeo3WKd8AAvircAwFtAFhG9anBOne0z3gu9IR2FiLSqE%2FoP%2BH5tpicCdr%2BefpD8Asqa7oJpe3xpoLRd1d3p1zkqA1lrAwHMg%2FimhXwkxZZFOfSZ%2BOZ6eAwVUkQCzfO8M8VqrzLVr0rAFgUna0lYPJV7m3SthiT36pPAGGwaiPkt31RXMRg20zHs3WdshHGipibE%2F%2ByQpdvp6yjPC9EBv2E0%2BpJ4ddDTR%2BoFQAdBW85fWfkgDog96Ia%2F9HAp1W4JUf6C5qH32QgKz4FoLDDG3BsfNo5%2FtXQFc7flZbiE7cCRRM14nkz3UDN91huHK8dWh%2Bex7wAsLs9EvPw4qXc9DBLGBSPEpAf1K69UDXhBjQrTa96tnUySUky6VIlbtvrp8bXsioLFF11Pj9v9hFs%2BoyKe%2FVsejJIUdSV%2B%2BAO6BG32pBf2AwyMd7SY3LeA9quVyKgPQaWdX%2BcjGMmlhRuM%2FOl1HFi3oxM4ouiukZULLi3RElLaBB9uaADQFNy1qn43A9jkiqBPUFmDvAN7gERnUvCFjmxmm3bq4eSWhnXMQ0vk0pDac3Da0h7PQxIi3FPE2ZgJ8DsNCjU6XowxK9Rad3fYertl%2BjpMDCdEYtab9XmvIjP%2BG0x3Iev5xN3DUqiWijsVKmKx4WuMKqL58AGOqUBxNZwsfqEy0JKxBpuukLaBCFsPGng35VMeXMCSmpiIyH3o%2F4hgLlIWEAagSWQ8AR2qSrCE9OQjPwjMvo3INe56JzcazYvuISuckhIopvE5HYwprpbW%2BhUYZRmC08%2Bp0wZtNOexUPloph1BhWwTZqIcMJdX2GErikamKTi7BeJ2wkmC67rTdHwSUEaerORClFuJqZLK7GKynugQ6Yg8ataoegZb2y8&X-Amz-Signature=7c9561bd34144d981a9e4a2e181bb89558da5271b4b242f036fd2feb8054cde3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
