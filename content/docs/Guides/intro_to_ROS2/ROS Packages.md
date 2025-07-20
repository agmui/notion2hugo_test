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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PLUXHL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXBZgWXteOXqXDdJ8FyCt%2BPe3ZEXzzFEeWHJOuVt96JgIgaw04gzDyq19H1VmnF6Cu6BVlRVSX2ef9TwSj%2B0Uf3e4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBgykNpb6pnfJajFyrcAyZ8UGWgdqS3So12BZ5w6Phqo8pvsGxSgcd3l%2BW4xdO1uMtCaChM2HQ7W9TSudIDMO7fXzTyawChEC1WUvPD12WPY46Z%2FyBHklME3M8OVb0s63l36mojkQSTVyrgzecJDhsUb3T1VL155YQxoLG4ugcJwqpZbWTm5lvyxQv2ezt%2BqscmE%2FniXapoCz4nc5xZuXlc7%2BBLgBoKPKlCLRJTPzsnn8BpF3iNhzBeTba0xPIKtEJI5QL%2FHywEiDB1wIbbOtF4xi965tALogdDYnRCDKeGh9Py1rAIL8TtVbtDucDIIMBIoHHHa62IJJWBYGz3RdiKE5NGEflRMpDZrQSTcf137xuMDbzRoT%2BvhAfbo1Ustx9ur%2F58TW6ivKae3m3r2uP%2BIzcM8hx5ATQCUEF3ZDnX7XMy7EixcNU%2BOqWyIp8x2e6hr9u1Ka97Y5q0e7wcVwKp6j%2F7oxviwQ7bR9uPzf0yPkgY7kZdlLLOrL5iV%2BGNaN7sDOCskBCb1Ot9ti6cprEq01KNuRXOnwBM%2BGjlv5qmXHuTjMa8r822RGguHTgVFbRqoMMaeJ4lr0JwTWE2KyT2mO7I6yPt%2Bje9XP6%2BX6n1dVCOonHBpVHQQ7xrDtwPSAJbCKP7DaIwZ9RNMMDa88MGOqUB5KTEmiyRZpyiOaIXorR1LZ%2FUIQqhRNiR%2B1TPodjivSNh9%2BveCkS3sLz5xxW5X8mgGlQ%2BRNWM5VtrFl%2F6ov%2BCkjFv%2BOaiZVsgclQbUoIjxcqdB1h2WXHnW%2Fv21aUomG1WqITAqVsiO2M7wQ%2BlpRtimMYqXXoXowVSOY8QfTJ3ImqtVnvs0ZpFe3w6Qicvj%2BptDbcW%2F%2BWiOJzc4JOjgi%2Fmt5%2FVzcYA&X-Amz-Signature=2029bd4077f797b696fb02cf0a716ec18509d8982855f9c0dc634e7861d49c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PLUXHL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXBZgWXteOXqXDdJ8FyCt%2BPe3ZEXzzFEeWHJOuVt96JgIgaw04gzDyq19H1VmnF6Cu6BVlRVSX2ef9TwSj%2B0Uf3e4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBgykNpb6pnfJajFyrcAyZ8UGWgdqS3So12BZ5w6Phqo8pvsGxSgcd3l%2BW4xdO1uMtCaChM2HQ7W9TSudIDMO7fXzTyawChEC1WUvPD12WPY46Z%2FyBHklME3M8OVb0s63l36mojkQSTVyrgzecJDhsUb3T1VL155YQxoLG4ugcJwqpZbWTm5lvyxQv2ezt%2BqscmE%2FniXapoCz4nc5xZuXlc7%2BBLgBoKPKlCLRJTPzsnn8BpF3iNhzBeTba0xPIKtEJI5QL%2FHywEiDB1wIbbOtF4xi965tALogdDYnRCDKeGh9Py1rAIL8TtVbtDucDIIMBIoHHHa62IJJWBYGz3RdiKE5NGEflRMpDZrQSTcf137xuMDbzRoT%2BvhAfbo1Ustx9ur%2F58TW6ivKae3m3r2uP%2BIzcM8hx5ATQCUEF3ZDnX7XMy7EixcNU%2BOqWyIp8x2e6hr9u1Ka97Y5q0e7wcVwKp6j%2F7oxviwQ7bR9uPzf0yPkgY7kZdlLLOrL5iV%2BGNaN7sDOCskBCb1Ot9ti6cprEq01KNuRXOnwBM%2BGjlv5qmXHuTjMa8r822RGguHTgVFbRqoMMaeJ4lr0JwTWE2KyT2mO7I6yPt%2Bje9XP6%2BX6n1dVCOonHBpVHQQ7xrDtwPSAJbCKP7DaIwZ9RNMMDa88MGOqUB5KTEmiyRZpyiOaIXorR1LZ%2FUIQqhRNiR%2B1TPodjivSNh9%2BveCkS3sLz5xxW5X8mgGlQ%2BRNWM5VtrFl%2F6ov%2BCkjFv%2BOaiZVsgclQbUoIjxcqdB1h2WXHnW%2Fv21aUomG1WqITAqVsiO2M7wQ%2BlpRtimMYqXXoXowVSOY8QfTJ3ImqtVnvs0ZpFe3w6Qicvj%2BptDbcW%2F%2BWiOJzc4JOjgi%2Fmt5%2FVzcYA&X-Amz-Signature=0aa930c22a86048aa0a3ce4351bd3599df21d36c95d5dc55b830c13145fa7726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PLUXHL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXBZgWXteOXqXDdJ8FyCt%2BPe3ZEXzzFEeWHJOuVt96JgIgaw04gzDyq19H1VmnF6Cu6BVlRVSX2ef9TwSj%2B0Uf3e4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBgykNpb6pnfJajFyrcAyZ8UGWgdqS3So12BZ5w6Phqo8pvsGxSgcd3l%2BW4xdO1uMtCaChM2HQ7W9TSudIDMO7fXzTyawChEC1WUvPD12WPY46Z%2FyBHklME3M8OVb0s63l36mojkQSTVyrgzecJDhsUb3T1VL155YQxoLG4ugcJwqpZbWTm5lvyxQv2ezt%2BqscmE%2FniXapoCz4nc5xZuXlc7%2BBLgBoKPKlCLRJTPzsnn8BpF3iNhzBeTba0xPIKtEJI5QL%2FHywEiDB1wIbbOtF4xi965tALogdDYnRCDKeGh9Py1rAIL8TtVbtDucDIIMBIoHHHa62IJJWBYGz3RdiKE5NGEflRMpDZrQSTcf137xuMDbzRoT%2BvhAfbo1Ustx9ur%2F58TW6ivKae3m3r2uP%2BIzcM8hx5ATQCUEF3ZDnX7XMy7EixcNU%2BOqWyIp8x2e6hr9u1Ka97Y5q0e7wcVwKp6j%2F7oxviwQ7bR9uPzf0yPkgY7kZdlLLOrL5iV%2BGNaN7sDOCskBCb1Ot9ti6cprEq01KNuRXOnwBM%2BGjlv5qmXHuTjMa8r822RGguHTgVFbRqoMMaeJ4lr0JwTWE2KyT2mO7I6yPt%2Bje9XP6%2BX6n1dVCOonHBpVHQQ7xrDtwPSAJbCKP7DaIwZ9RNMMDa88MGOqUB5KTEmiyRZpyiOaIXorR1LZ%2FUIQqhRNiR%2B1TPodjivSNh9%2BveCkS3sLz5xxW5X8mgGlQ%2BRNWM5VtrFl%2F6ov%2BCkjFv%2BOaiZVsgclQbUoIjxcqdB1h2WXHnW%2Fv21aUomG1WqITAqVsiO2M7wQ%2BlpRtimMYqXXoXowVSOY8QfTJ3ImqtVnvs0ZpFe3w6Qicvj%2BptDbcW%2F%2BWiOJzc4JOjgi%2Fmt5%2FVzcYA&X-Amz-Signature=46e26eed615d23fe35d4e7195b8bd8c39832e7ea17f0b428809062845907942f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PLUXHL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXBZgWXteOXqXDdJ8FyCt%2BPe3ZEXzzFEeWHJOuVt96JgIgaw04gzDyq19H1VmnF6Cu6BVlRVSX2ef9TwSj%2B0Uf3e4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBgykNpb6pnfJajFyrcAyZ8UGWgdqS3So12BZ5w6Phqo8pvsGxSgcd3l%2BW4xdO1uMtCaChM2HQ7W9TSudIDMO7fXzTyawChEC1WUvPD12WPY46Z%2FyBHklME3M8OVb0s63l36mojkQSTVyrgzecJDhsUb3T1VL155YQxoLG4ugcJwqpZbWTm5lvyxQv2ezt%2BqscmE%2FniXapoCz4nc5xZuXlc7%2BBLgBoKPKlCLRJTPzsnn8BpF3iNhzBeTba0xPIKtEJI5QL%2FHywEiDB1wIbbOtF4xi965tALogdDYnRCDKeGh9Py1rAIL8TtVbtDucDIIMBIoHHHa62IJJWBYGz3RdiKE5NGEflRMpDZrQSTcf137xuMDbzRoT%2BvhAfbo1Ustx9ur%2F58TW6ivKae3m3r2uP%2BIzcM8hx5ATQCUEF3ZDnX7XMy7EixcNU%2BOqWyIp8x2e6hr9u1Ka97Y5q0e7wcVwKp6j%2F7oxviwQ7bR9uPzf0yPkgY7kZdlLLOrL5iV%2BGNaN7sDOCskBCb1Ot9ti6cprEq01KNuRXOnwBM%2BGjlv5qmXHuTjMa8r822RGguHTgVFbRqoMMaeJ4lr0JwTWE2KyT2mO7I6yPt%2Bje9XP6%2BX6n1dVCOonHBpVHQQ7xrDtwPSAJbCKP7DaIwZ9RNMMDa88MGOqUB5KTEmiyRZpyiOaIXorR1LZ%2FUIQqhRNiR%2B1TPodjivSNh9%2BveCkS3sLz5xxW5X8mgGlQ%2BRNWM5VtrFl%2F6ov%2BCkjFv%2BOaiZVsgclQbUoIjxcqdB1h2WXHnW%2Fv21aUomG1WqITAqVsiO2M7wQ%2BlpRtimMYqXXoXowVSOY8QfTJ3ImqtVnvs0ZpFe3w6Qicvj%2BptDbcW%2F%2BWiOJzc4JOjgi%2Fmt5%2FVzcYA&X-Amz-Signature=bc7ccbe48266903c8902ea66235edfea0cb77ddcff308e41b2ede321233405b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PLUXHL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXBZgWXteOXqXDdJ8FyCt%2BPe3ZEXzzFEeWHJOuVt96JgIgaw04gzDyq19H1VmnF6Cu6BVlRVSX2ef9TwSj%2B0Uf3e4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBgykNpb6pnfJajFyrcAyZ8UGWgdqS3So12BZ5w6Phqo8pvsGxSgcd3l%2BW4xdO1uMtCaChM2HQ7W9TSudIDMO7fXzTyawChEC1WUvPD12WPY46Z%2FyBHklME3M8OVb0s63l36mojkQSTVyrgzecJDhsUb3T1VL155YQxoLG4ugcJwqpZbWTm5lvyxQv2ezt%2BqscmE%2FniXapoCz4nc5xZuXlc7%2BBLgBoKPKlCLRJTPzsnn8BpF3iNhzBeTba0xPIKtEJI5QL%2FHywEiDB1wIbbOtF4xi965tALogdDYnRCDKeGh9Py1rAIL8TtVbtDucDIIMBIoHHHa62IJJWBYGz3RdiKE5NGEflRMpDZrQSTcf137xuMDbzRoT%2BvhAfbo1Ustx9ur%2F58TW6ivKae3m3r2uP%2BIzcM8hx5ATQCUEF3ZDnX7XMy7EixcNU%2BOqWyIp8x2e6hr9u1Ka97Y5q0e7wcVwKp6j%2F7oxviwQ7bR9uPzf0yPkgY7kZdlLLOrL5iV%2BGNaN7sDOCskBCb1Ot9ti6cprEq01KNuRXOnwBM%2BGjlv5qmXHuTjMa8r822RGguHTgVFbRqoMMaeJ4lr0JwTWE2KyT2mO7I6yPt%2Bje9XP6%2BX6n1dVCOonHBpVHQQ7xrDtwPSAJbCKP7DaIwZ9RNMMDa88MGOqUB5KTEmiyRZpyiOaIXorR1LZ%2FUIQqhRNiR%2B1TPodjivSNh9%2BveCkS3sLz5xxW5X8mgGlQ%2BRNWM5VtrFl%2F6ov%2BCkjFv%2BOaiZVsgclQbUoIjxcqdB1h2WXHnW%2Fv21aUomG1WqITAqVsiO2M7wQ%2BlpRtimMYqXXoXowVSOY8QfTJ3ImqtVnvs0ZpFe3w6Qicvj%2BptDbcW%2F%2BWiOJzc4JOjgi%2Fmt5%2FVzcYA&X-Amz-Signature=60a34da48fd49358378df521711095ba544d51775665df4910b305b5f97dbfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PLUXHL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXBZgWXteOXqXDdJ8FyCt%2BPe3ZEXzzFEeWHJOuVt96JgIgaw04gzDyq19H1VmnF6Cu6BVlRVSX2ef9TwSj%2B0Uf3e4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBgykNpb6pnfJajFyrcAyZ8UGWgdqS3So12BZ5w6Phqo8pvsGxSgcd3l%2BW4xdO1uMtCaChM2HQ7W9TSudIDMO7fXzTyawChEC1WUvPD12WPY46Z%2FyBHklME3M8OVb0s63l36mojkQSTVyrgzecJDhsUb3T1VL155YQxoLG4ugcJwqpZbWTm5lvyxQv2ezt%2BqscmE%2FniXapoCz4nc5xZuXlc7%2BBLgBoKPKlCLRJTPzsnn8BpF3iNhzBeTba0xPIKtEJI5QL%2FHywEiDB1wIbbOtF4xi965tALogdDYnRCDKeGh9Py1rAIL8TtVbtDucDIIMBIoHHHa62IJJWBYGz3RdiKE5NGEflRMpDZrQSTcf137xuMDbzRoT%2BvhAfbo1Ustx9ur%2F58TW6ivKae3m3r2uP%2BIzcM8hx5ATQCUEF3ZDnX7XMy7EixcNU%2BOqWyIp8x2e6hr9u1Ka97Y5q0e7wcVwKp6j%2F7oxviwQ7bR9uPzf0yPkgY7kZdlLLOrL5iV%2BGNaN7sDOCskBCb1Ot9ti6cprEq01KNuRXOnwBM%2BGjlv5qmXHuTjMa8r822RGguHTgVFbRqoMMaeJ4lr0JwTWE2KyT2mO7I6yPt%2Bje9XP6%2BX6n1dVCOonHBpVHQQ7xrDtwPSAJbCKP7DaIwZ9RNMMDa88MGOqUB5KTEmiyRZpyiOaIXorR1LZ%2FUIQqhRNiR%2B1TPodjivSNh9%2BveCkS3sLz5xxW5X8mgGlQ%2BRNWM5VtrFl%2F6ov%2BCkjFv%2BOaiZVsgclQbUoIjxcqdB1h2WXHnW%2Fv21aUomG1WqITAqVsiO2M7wQ%2BlpRtimMYqXXoXowVSOY8QfTJ3ImqtVnvs0ZpFe3w6Qicvj%2BptDbcW%2F%2BWiOJzc4JOjgi%2Fmt5%2FVzcYA&X-Amz-Signature=9ca23e91eac147453afdfbf87b4161e205462a62bc2c8dcefbc8c8f8c3975a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PLUXHL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXBZgWXteOXqXDdJ8FyCt%2BPe3ZEXzzFEeWHJOuVt96JgIgaw04gzDyq19H1VmnF6Cu6BVlRVSX2ef9TwSj%2B0Uf3e4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBgykNpb6pnfJajFyrcAyZ8UGWgdqS3So12BZ5w6Phqo8pvsGxSgcd3l%2BW4xdO1uMtCaChM2HQ7W9TSudIDMO7fXzTyawChEC1WUvPD12WPY46Z%2FyBHklME3M8OVb0s63l36mojkQSTVyrgzecJDhsUb3T1VL155YQxoLG4ugcJwqpZbWTm5lvyxQv2ezt%2BqscmE%2FniXapoCz4nc5xZuXlc7%2BBLgBoKPKlCLRJTPzsnn8BpF3iNhzBeTba0xPIKtEJI5QL%2FHywEiDB1wIbbOtF4xi965tALogdDYnRCDKeGh9Py1rAIL8TtVbtDucDIIMBIoHHHa62IJJWBYGz3RdiKE5NGEflRMpDZrQSTcf137xuMDbzRoT%2BvhAfbo1Ustx9ur%2F58TW6ivKae3m3r2uP%2BIzcM8hx5ATQCUEF3ZDnX7XMy7EixcNU%2BOqWyIp8x2e6hr9u1Ka97Y5q0e7wcVwKp6j%2F7oxviwQ7bR9uPzf0yPkgY7kZdlLLOrL5iV%2BGNaN7sDOCskBCb1Ot9ti6cprEq01KNuRXOnwBM%2BGjlv5qmXHuTjMa8r822RGguHTgVFbRqoMMaeJ4lr0JwTWE2KyT2mO7I6yPt%2Bje9XP6%2BX6n1dVCOonHBpVHQQ7xrDtwPSAJbCKP7DaIwZ9RNMMDa88MGOqUB5KTEmiyRZpyiOaIXorR1LZ%2FUIQqhRNiR%2B1TPodjivSNh9%2BveCkS3sLz5xxW5X8mgGlQ%2BRNWM5VtrFl%2F6ov%2BCkjFv%2BOaiZVsgclQbUoIjxcqdB1h2WXHnW%2Fv21aUomG1WqITAqVsiO2M7wQ%2BlpRtimMYqXXoXowVSOY8QfTJ3ImqtVnvs0ZpFe3w6Qicvj%2BptDbcW%2F%2BWiOJzc4JOjgi%2Fmt5%2FVzcYA&X-Amz-Signature=ceea999cd8fc03b44c07132a890549e46e86e48756dd6d4aa8de263f4a3b4121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
