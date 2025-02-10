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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCA5K6Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnHWlRQYG85kW6LXOBYPuF79H3dip88CHY2zgcBK2vwIgGhhgAGMtesZCsiKPnBYutvMv1xCe4Aoq2abNKXD%2FMVcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNS%2Bl3f8DmX%2Be8QGircAzZh%2BwAMUBiv06z9TP1VpZWD5HWEFGEIdtt63h9CAi3ZDdZnHFZ%2F3XsDJXFzzpqzi7fjMxptPUuLlDtfj0%2BKIShd4BlxzSwYVupDOr9vKo4EimoROkzZ8537sn6Vj%2BcfsUaDQ3f%2B0azORlVjpJTB9XxhSqY0dqrhOUJzCsHEBhzBE%2FpMTgmoGSx4X0E%2BQXCBsU3ilVvQXj6N0ciOFuBiQ8%2B95DuC4mQ42G%2FBMuV3%2Fj%2F3Ik3DFkvoH7HPNVEBtA31v7lTnMTCi9T1zn7N9EvLJkwlYqPJk%2Be47eMO%2Bu%2F%2BEWzx4eqkUtFrvnP4M559pmKWlP8y2PEzHjFze8h1uga9LcFeZKdTkRCdnt70f6cn%2ByTp%2FIDk6bPa9nXYGhNfJ3Db6%2BA0r7YexDapXfzMRjRp3DJqqUwvb1DC0d9uLBJcs7d0UEYhkxX5e%2B0oVkK8wGyVU5VJJEXbXWlIvsE2kBpvQhNzOqiDIWIFRueNzFBJoDyqYN5kan%2BLuwCbHE9YtVuHdNa%2F8wQn%2BW5meM5X9WevhFDuTNYCBooBNmmzj1WaakIgvrbkuNfgwjAjuESg7ovP3mxwWmNFE9%2BWv4K5QjFqQyUrkHRnBwZ81hdr9fobMi8nQewLLdqRgrE0Pid4MKP6pb0GOqUB%2BPCecX4ChCu5y%2Bd0lms6sj3ecxjFvBDRGjoJTG%2FTfRXdWxii7ydWwUyXakC0REF1RlfXDkCMi4OBeOcasoNOef2i8jv6IqDgKeemQ7%2FC7HFuNR4p%2BnY2FjN55exckI1oFaGDlBXv54wll3d3MFAhoIu2Ks%2F%2FHbUHn9yvXv1DlyX6iLl0qOp2d5nIv3obMyqpCs5p8aYBg3v0EXNS5ZpoSQDkluMK&X-Amz-Signature=577a7a82acca1a41500dbfaaa7f52c8658e354e4399e26e9fd3d2ca29dfbd952&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCA5K6Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnHWlRQYG85kW6LXOBYPuF79H3dip88CHY2zgcBK2vwIgGhhgAGMtesZCsiKPnBYutvMv1xCe4Aoq2abNKXD%2FMVcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNS%2Bl3f8DmX%2Be8QGircAzZh%2BwAMUBiv06z9TP1VpZWD5HWEFGEIdtt63h9CAi3ZDdZnHFZ%2F3XsDJXFzzpqzi7fjMxptPUuLlDtfj0%2BKIShd4BlxzSwYVupDOr9vKo4EimoROkzZ8537sn6Vj%2BcfsUaDQ3f%2B0azORlVjpJTB9XxhSqY0dqrhOUJzCsHEBhzBE%2FpMTgmoGSx4X0E%2BQXCBsU3ilVvQXj6N0ciOFuBiQ8%2B95DuC4mQ42G%2FBMuV3%2Fj%2F3Ik3DFkvoH7HPNVEBtA31v7lTnMTCi9T1zn7N9EvLJkwlYqPJk%2Be47eMO%2Bu%2F%2BEWzx4eqkUtFrvnP4M559pmKWlP8y2PEzHjFze8h1uga9LcFeZKdTkRCdnt70f6cn%2ByTp%2FIDk6bPa9nXYGhNfJ3Db6%2BA0r7YexDapXfzMRjRp3DJqqUwvb1DC0d9uLBJcs7d0UEYhkxX5e%2B0oVkK8wGyVU5VJJEXbXWlIvsE2kBpvQhNzOqiDIWIFRueNzFBJoDyqYN5kan%2BLuwCbHE9YtVuHdNa%2F8wQn%2BW5meM5X9WevhFDuTNYCBooBNmmzj1WaakIgvrbkuNfgwjAjuESg7ovP3mxwWmNFE9%2BWv4K5QjFqQyUrkHRnBwZ81hdr9fobMi8nQewLLdqRgrE0Pid4MKP6pb0GOqUB%2BPCecX4ChCu5y%2Bd0lms6sj3ecxjFvBDRGjoJTG%2FTfRXdWxii7ydWwUyXakC0REF1RlfXDkCMi4OBeOcasoNOef2i8jv6IqDgKeemQ7%2FC7HFuNR4p%2BnY2FjN55exckI1oFaGDlBXv54wll3d3MFAhoIu2Ks%2F%2FHbUHn9yvXv1DlyX6iLl0qOp2d5nIv3obMyqpCs5p8aYBg3v0EXNS5ZpoSQDkluMK&X-Amz-Signature=17fc28ce85e5a366cbac53410a722019c0c6dc596d7e0f74d3e1c8c78e3ed8c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCA5K6Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnHWlRQYG85kW6LXOBYPuF79H3dip88CHY2zgcBK2vwIgGhhgAGMtesZCsiKPnBYutvMv1xCe4Aoq2abNKXD%2FMVcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNS%2Bl3f8DmX%2Be8QGircAzZh%2BwAMUBiv06z9TP1VpZWD5HWEFGEIdtt63h9CAi3ZDdZnHFZ%2F3XsDJXFzzpqzi7fjMxptPUuLlDtfj0%2BKIShd4BlxzSwYVupDOr9vKo4EimoROkzZ8537sn6Vj%2BcfsUaDQ3f%2B0azORlVjpJTB9XxhSqY0dqrhOUJzCsHEBhzBE%2FpMTgmoGSx4X0E%2BQXCBsU3ilVvQXj6N0ciOFuBiQ8%2B95DuC4mQ42G%2FBMuV3%2Fj%2F3Ik3DFkvoH7HPNVEBtA31v7lTnMTCi9T1zn7N9EvLJkwlYqPJk%2Be47eMO%2Bu%2F%2BEWzx4eqkUtFrvnP4M559pmKWlP8y2PEzHjFze8h1uga9LcFeZKdTkRCdnt70f6cn%2ByTp%2FIDk6bPa9nXYGhNfJ3Db6%2BA0r7YexDapXfzMRjRp3DJqqUwvb1DC0d9uLBJcs7d0UEYhkxX5e%2B0oVkK8wGyVU5VJJEXbXWlIvsE2kBpvQhNzOqiDIWIFRueNzFBJoDyqYN5kan%2BLuwCbHE9YtVuHdNa%2F8wQn%2BW5meM5X9WevhFDuTNYCBooBNmmzj1WaakIgvrbkuNfgwjAjuESg7ovP3mxwWmNFE9%2BWv4K5QjFqQyUrkHRnBwZ81hdr9fobMi8nQewLLdqRgrE0Pid4MKP6pb0GOqUB%2BPCecX4ChCu5y%2Bd0lms6sj3ecxjFvBDRGjoJTG%2FTfRXdWxii7ydWwUyXakC0REF1RlfXDkCMi4OBeOcasoNOef2i8jv6IqDgKeemQ7%2FC7HFuNR4p%2BnY2FjN55exckI1oFaGDlBXv54wll3d3MFAhoIu2Ks%2F%2FHbUHn9yvXv1DlyX6iLl0qOp2d5nIv3obMyqpCs5p8aYBg3v0EXNS5ZpoSQDkluMK&X-Amz-Signature=70d4194ebad63632bb69c516cd587d26b1f476357aa6df79d3680f5761bfe4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCA5K6Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnHWlRQYG85kW6LXOBYPuF79H3dip88CHY2zgcBK2vwIgGhhgAGMtesZCsiKPnBYutvMv1xCe4Aoq2abNKXD%2FMVcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNS%2Bl3f8DmX%2Be8QGircAzZh%2BwAMUBiv06z9TP1VpZWD5HWEFGEIdtt63h9CAi3ZDdZnHFZ%2F3XsDJXFzzpqzi7fjMxptPUuLlDtfj0%2BKIShd4BlxzSwYVupDOr9vKo4EimoROkzZ8537sn6Vj%2BcfsUaDQ3f%2B0azORlVjpJTB9XxhSqY0dqrhOUJzCsHEBhzBE%2FpMTgmoGSx4X0E%2BQXCBsU3ilVvQXj6N0ciOFuBiQ8%2B95DuC4mQ42G%2FBMuV3%2Fj%2F3Ik3DFkvoH7HPNVEBtA31v7lTnMTCi9T1zn7N9EvLJkwlYqPJk%2Be47eMO%2Bu%2F%2BEWzx4eqkUtFrvnP4M559pmKWlP8y2PEzHjFze8h1uga9LcFeZKdTkRCdnt70f6cn%2ByTp%2FIDk6bPa9nXYGhNfJ3Db6%2BA0r7YexDapXfzMRjRp3DJqqUwvb1DC0d9uLBJcs7d0UEYhkxX5e%2B0oVkK8wGyVU5VJJEXbXWlIvsE2kBpvQhNzOqiDIWIFRueNzFBJoDyqYN5kan%2BLuwCbHE9YtVuHdNa%2F8wQn%2BW5meM5X9WevhFDuTNYCBooBNmmzj1WaakIgvrbkuNfgwjAjuESg7ovP3mxwWmNFE9%2BWv4K5QjFqQyUrkHRnBwZ81hdr9fobMi8nQewLLdqRgrE0Pid4MKP6pb0GOqUB%2BPCecX4ChCu5y%2Bd0lms6sj3ecxjFvBDRGjoJTG%2FTfRXdWxii7ydWwUyXakC0REF1RlfXDkCMi4OBeOcasoNOef2i8jv6IqDgKeemQ7%2FC7HFuNR4p%2BnY2FjN55exckI1oFaGDlBXv54wll3d3MFAhoIu2Ks%2F%2FHbUHn9yvXv1DlyX6iLl0qOp2d5nIv3obMyqpCs5p8aYBg3v0EXNS5ZpoSQDkluMK&X-Amz-Signature=0c7d5b30a194c7a97d779632b3d0d74a1792aac7abdd5aeecfb42f0937c88bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCA5K6Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnHWlRQYG85kW6LXOBYPuF79H3dip88CHY2zgcBK2vwIgGhhgAGMtesZCsiKPnBYutvMv1xCe4Aoq2abNKXD%2FMVcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNS%2Bl3f8DmX%2Be8QGircAzZh%2BwAMUBiv06z9TP1VpZWD5HWEFGEIdtt63h9CAi3ZDdZnHFZ%2F3XsDJXFzzpqzi7fjMxptPUuLlDtfj0%2BKIShd4BlxzSwYVupDOr9vKo4EimoROkzZ8537sn6Vj%2BcfsUaDQ3f%2B0azORlVjpJTB9XxhSqY0dqrhOUJzCsHEBhzBE%2FpMTgmoGSx4X0E%2BQXCBsU3ilVvQXj6N0ciOFuBiQ8%2B95DuC4mQ42G%2FBMuV3%2Fj%2F3Ik3DFkvoH7HPNVEBtA31v7lTnMTCi9T1zn7N9EvLJkwlYqPJk%2Be47eMO%2Bu%2F%2BEWzx4eqkUtFrvnP4M559pmKWlP8y2PEzHjFze8h1uga9LcFeZKdTkRCdnt70f6cn%2ByTp%2FIDk6bPa9nXYGhNfJ3Db6%2BA0r7YexDapXfzMRjRp3DJqqUwvb1DC0d9uLBJcs7d0UEYhkxX5e%2B0oVkK8wGyVU5VJJEXbXWlIvsE2kBpvQhNzOqiDIWIFRueNzFBJoDyqYN5kan%2BLuwCbHE9YtVuHdNa%2F8wQn%2BW5meM5X9WevhFDuTNYCBooBNmmzj1WaakIgvrbkuNfgwjAjuESg7ovP3mxwWmNFE9%2BWv4K5QjFqQyUrkHRnBwZ81hdr9fobMi8nQewLLdqRgrE0Pid4MKP6pb0GOqUB%2BPCecX4ChCu5y%2Bd0lms6sj3ecxjFvBDRGjoJTG%2FTfRXdWxii7ydWwUyXakC0REF1RlfXDkCMi4OBeOcasoNOef2i8jv6IqDgKeemQ7%2FC7HFuNR4p%2BnY2FjN55exckI1oFaGDlBXv54wll3d3MFAhoIu2Ks%2F%2FHbUHn9yvXv1DlyX6iLl0qOp2d5nIv3obMyqpCs5p8aYBg3v0EXNS5ZpoSQDkluMK&X-Amz-Signature=4a1e4ee1ae208903fac143ad91b1aec199090b1bf76a11457133fa9a332785f6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCA5K6Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnHWlRQYG85kW6LXOBYPuF79H3dip88CHY2zgcBK2vwIgGhhgAGMtesZCsiKPnBYutvMv1xCe4Aoq2abNKXD%2FMVcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNS%2Bl3f8DmX%2Be8QGircAzZh%2BwAMUBiv06z9TP1VpZWD5HWEFGEIdtt63h9CAi3ZDdZnHFZ%2F3XsDJXFzzpqzi7fjMxptPUuLlDtfj0%2BKIShd4BlxzSwYVupDOr9vKo4EimoROkzZ8537sn6Vj%2BcfsUaDQ3f%2B0azORlVjpJTB9XxhSqY0dqrhOUJzCsHEBhzBE%2FpMTgmoGSx4X0E%2BQXCBsU3ilVvQXj6N0ciOFuBiQ8%2B95DuC4mQ42G%2FBMuV3%2Fj%2F3Ik3DFkvoH7HPNVEBtA31v7lTnMTCi9T1zn7N9EvLJkwlYqPJk%2Be47eMO%2Bu%2F%2BEWzx4eqkUtFrvnP4M559pmKWlP8y2PEzHjFze8h1uga9LcFeZKdTkRCdnt70f6cn%2ByTp%2FIDk6bPa9nXYGhNfJ3Db6%2BA0r7YexDapXfzMRjRp3DJqqUwvb1DC0d9uLBJcs7d0UEYhkxX5e%2B0oVkK8wGyVU5VJJEXbXWlIvsE2kBpvQhNzOqiDIWIFRueNzFBJoDyqYN5kan%2BLuwCbHE9YtVuHdNa%2F8wQn%2BW5meM5X9WevhFDuTNYCBooBNmmzj1WaakIgvrbkuNfgwjAjuESg7ovP3mxwWmNFE9%2BWv4K5QjFqQyUrkHRnBwZ81hdr9fobMi8nQewLLdqRgrE0Pid4MKP6pb0GOqUB%2BPCecX4ChCu5y%2Bd0lms6sj3ecxjFvBDRGjoJTG%2FTfRXdWxii7ydWwUyXakC0REF1RlfXDkCMi4OBeOcasoNOef2i8jv6IqDgKeemQ7%2FC7HFuNR4p%2BnY2FjN55exckI1oFaGDlBXv54wll3d3MFAhoIu2Ks%2F%2FHbUHn9yvXv1DlyX6iLl0qOp2d5nIv3obMyqpCs5p8aYBg3v0EXNS5ZpoSQDkluMK&X-Amz-Signature=1ce77197fc25cc0bb2d75ab233cf7a9913d2233e44a04a8f0abc8fb35530a8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCA5K6Q%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnHWlRQYG85kW6LXOBYPuF79H3dip88CHY2zgcBK2vwIgGhhgAGMtesZCsiKPnBYutvMv1xCe4Aoq2abNKXD%2FMVcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNS%2Bl3f8DmX%2Be8QGircAzZh%2BwAMUBiv06z9TP1VpZWD5HWEFGEIdtt63h9CAi3ZDdZnHFZ%2F3XsDJXFzzpqzi7fjMxptPUuLlDtfj0%2BKIShd4BlxzSwYVupDOr9vKo4EimoROkzZ8537sn6Vj%2BcfsUaDQ3f%2B0azORlVjpJTB9XxhSqY0dqrhOUJzCsHEBhzBE%2FpMTgmoGSx4X0E%2BQXCBsU3ilVvQXj6N0ciOFuBiQ8%2B95DuC4mQ42G%2FBMuV3%2Fj%2F3Ik3DFkvoH7HPNVEBtA31v7lTnMTCi9T1zn7N9EvLJkwlYqPJk%2Be47eMO%2Bu%2F%2BEWzx4eqkUtFrvnP4M559pmKWlP8y2PEzHjFze8h1uga9LcFeZKdTkRCdnt70f6cn%2ByTp%2FIDk6bPa9nXYGhNfJ3Db6%2BA0r7YexDapXfzMRjRp3DJqqUwvb1DC0d9uLBJcs7d0UEYhkxX5e%2B0oVkK8wGyVU5VJJEXbXWlIvsE2kBpvQhNzOqiDIWIFRueNzFBJoDyqYN5kan%2BLuwCbHE9YtVuHdNa%2F8wQn%2BW5meM5X9WevhFDuTNYCBooBNmmzj1WaakIgvrbkuNfgwjAjuESg7ovP3mxwWmNFE9%2BWv4K5QjFqQyUrkHRnBwZ81hdr9fobMi8nQewLLdqRgrE0Pid4MKP6pb0GOqUB%2BPCecX4ChCu5y%2Bd0lms6sj3ecxjFvBDRGjoJTG%2FTfRXdWxii7ydWwUyXakC0REF1RlfXDkCMi4OBeOcasoNOef2i8jv6IqDgKeemQ7%2FC7HFuNR4p%2BnY2FjN55exckI1oFaGDlBXv54wll3d3MFAhoIu2Ks%2F%2FHbUHn9yvXv1DlyX6iLl0qOp2d5nIv3obMyqpCs5p8aYBg3v0EXNS5ZpoSQDkluMK&X-Amz-Signature=7bf78cf087e3e66d12f2d2589a22a8c7935123ca4661ed6d6b2b305e720258ed&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
