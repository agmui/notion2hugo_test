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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM35DDW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ20hJaM9FjAtcaJB9SvSr494deCEp5IPChN%2FRnnid5AiEApsyQuTFD%2F0WsFvmhD%2FmqQFsDdeJR9cjvJL0D1IdTTbAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmc0sXi9Cl6X945CrcA838fhVbH%2FevDkdp4asQNHkzMPmxwznzluSVP%2F7Z4F3FrHwk7mk%2B7lODr8JAmv1KdPPoOn2vGI7U4rLnBUmFbSK%2FA7Nuumo%2BbotFsL1XQHKJLSnDCqo7gRpJM2yClSP9XZHyyTvS7Ebxt46j2a7%2Bk11Hkd93mDgulY%2Bs8X1aFygsB%2BFKTXtfuk4rJisMmZokwXWsAFkbumRh74rudPOfATunObnjzPNg3tEyUmoW34dWTcWYV7PcJDBe2p6T2l87ewP3n7XGK0IHPRNcyTAQTjFhfC2qx3a7HRy78o0rHuIT6QcwEvuzfGdWPRPKhuqGhaKKz6KMmmz%2FE6hjUK0xd0%2FyFEbyuZlB%2BNYHGHBp0kBlfSuSo%2FBhJiuCA%2FnJE8pKPCI5EPlyprGDBPBjFIn6F1zHH2Z4yDfAM%2B%2BPHTlwb4ZCdbRZyPStSHQkCf082MCfhz77qVCEr0rT6dXV5BC8bhfcyuzpuGx4isigNbPfTXXdZDu74NbBhhg8q4LFr8RliJAo4x4%2FeUGV7OOkci%2BE5L6%2BjTz8S0dg16%2FLJmea1fHaBqw6nC%2BfMfQ%2BYgaEcuf%2FaossF5RqQ8d0K1J6E8LmIZI6qwXoI8xJ%2B%2FtPeXFgdq6wUl9ty2IhE60hmAL5MNvp7cMGOqUBycRJADwEAZc0kfuj4cQaLVOJaflzNpfp7tteNX%2B%2FuK8E%2BaUMBP4rTWD8cfio32qJFuFj4umtPewSexDhdNffljHAHbgFALy9J2dhahfF5STX65mT%2FcvA8kncMLTby8IDXqfQL2EUdGMpmTo5ADkvKJzYuxdJA2e5SLYy6%2FGSqP3Gb6KcCSnFUFIzcG%2FIuVxqnzdXusRm6VKk9hb7YxJ3heWopirx&X-Amz-Signature=021c3f2d8b829375436196d6f341d75e9dd253301b5e782b935058869935e9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM35DDW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ20hJaM9FjAtcaJB9SvSr494deCEp5IPChN%2FRnnid5AiEApsyQuTFD%2F0WsFvmhD%2FmqQFsDdeJR9cjvJL0D1IdTTbAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmc0sXi9Cl6X945CrcA838fhVbH%2FevDkdp4asQNHkzMPmxwznzluSVP%2F7Z4F3FrHwk7mk%2B7lODr8JAmv1KdPPoOn2vGI7U4rLnBUmFbSK%2FA7Nuumo%2BbotFsL1XQHKJLSnDCqo7gRpJM2yClSP9XZHyyTvS7Ebxt46j2a7%2Bk11Hkd93mDgulY%2Bs8X1aFygsB%2BFKTXtfuk4rJisMmZokwXWsAFkbumRh74rudPOfATunObnjzPNg3tEyUmoW34dWTcWYV7PcJDBe2p6T2l87ewP3n7XGK0IHPRNcyTAQTjFhfC2qx3a7HRy78o0rHuIT6QcwEvuzfGdWPRPKhuqGhaKKz6KMmmz%2FE6hjUK0xd0%2FyFEbyuZlB%2BNYHGHBp0kBlfSuSo%2FBhJiuCA%2FnJE8pKPCI5EPlyprGDBPBjFIn6F1zHH2Z4yDfAM%2B%2BPHTlwb4ZCdbRZyPStSHQkCf082MCfhz77qVCEr0rT6dXV5BC8bhfcyuzpuGx4isigNbPfTXXdZDu74NbBhhg8q4LFr8RliJAo4x4%2FeUGV7OOkci%2BE5L6%2BjTz8S0dg16%2FLJmea1fHaBqw6nC%2BfMfQ%2BYgaEcuf%2FaossF5RqQ8d0K1J6E8LmIZI6qwXoI8xJ%2B%2FtPeXFgdq6wUl9ty2IhE60hmAL5MNvp7cMGOqUBycRJADwEAZc0kfuj4cQaLVOJaflzNpfp7tteNX%2B%2FuK8E%2BaUMBP4rTWD8cfio32qJFuFj4umtPewSexDhdNffljHAHbgFALy9J2dhahfF5STX65mT%2FcvA8kncMLTby8IDXqfQL2EUdGMpmTo5ADkvKJzYuxdJA2e5SLYy6%2FGSqP3Gb6KcCSnFUFIzcG%2FIuVxqnzdXusRm6VKk9hb7YxJ3heWopirx&X-Amz-Signature=a84e4686b5c854d9baf1bd07c3262af9f53eafa8c383069d6958de3b01eeb213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM35DDW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ20hJaM9FjAtcaJB9SvSr494deCEp5IPChN%2FRnnid5AiEApsyQuTFD%2F0WsFvmhD%2FmqQFsDdeJR9cjvJL0D1IdTTbAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmc0sXi9Cl6X945CrcA838fhVbH%2FevDkdp4asQNHkzMPmxwznzluSVP%2F7Z4F3FrHwk7mk%2B7lODr8JAmv1KdPPoOn2vGI7U4rLnBUmFbSK%2FA7Nuumo%2BbotFsL1XQHKJLSnDCqo7gRpJM2yClSP9XZHyyTvS7Ebxt46j2a7%2Bk11Hkd93mDgulY%2Bs8X1aFygsB%2BFKTXtfuk4rJisMmZokwXWsAFkbumRh74rudPOfATunObnjzPNg3tEyUmoW34dWTcWYV7PcJDBe2p6T2l87ewP3n7XGK0IHPRNcyTAQTjFhfC2qx3a7HRy78o0rHuIT6QcwEvuzfGdWPRPKhuqGhaKKz6KMmmz%2FE6hjUK0xd0%2FyFEbyuZlB%2BNYHGHBp0kBlfSuSo%2FBhJiuCA%2FnJE8pKPCI5EPlyprGDBPBjFIn6F1zHH2Z4yDfAM%2B%2BPHTlwb4ZCdbRZyPStSHQkCf082MCfhz77qVCEr0rT6dXV5BC8bhfcyuzpuGx4isigNbPfTXXdZDu74NbBhhg8q4LFr8RliJAo4x4%2FeUGV7OOkci%2BE5L6%2BjTz8S0dg16%2FLJmea1fHaBqw6nC%2BfMfQ%2BYgaEcuf%2FaossF5RqQ8d0K1J6E8LmIZI6qwXoI8xJ%2B%2FtPeXFgdq6wUl9ty2IhE60hmAL5MNvp7cMGOqUBycRJADwEAZc0kfuj4cQaLVOJaflzNpfp7tteNX%2B%2FuK8E%2BaUMBP4rTWD8cfio32qJFuFj4umtPewSexDhdNffljHAHbgFALy9J2dhahfF5STX65mT%2FcvA8kncMLTby8IDXqfQL2EUdGMpmTo5ADkvKJzYuxdJA2e5SLYy6%2FGSqP3Gb6KcCSnFUFIzcG%2FIuVxqnzdXusRm6VKk9hb7YxJ3heWopirx&X-Amz-Signature=b27edbcee4b48a145d2f92105b1d449d7907346b10cfb585fd9a9a2718bdd61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM35DDW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ20hJaM9FjAtcaJB9SvSr494deCEp5IPChN%2FRnnid5AiEApsyQuTFD%2F0WsFvmhD%2FmqQFsDdeJR9cjvJL0D1IdTTbAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmc0sXi9Cl6X945CrcA838fhVbH%2FevDkdp4asQNHkzMPmxwznzluSVP%2F7Z4F3FrHwk7mk%2B7lODr8JAmv1KdPPoOn2vGI7U4rLnBUmFbSK%2FA7Nuumo%2BbotFsL1XQHKJLSnDCqo7gRpJM2yClSP9XZHyyTvS7Ebxt46j2a7%2Bk11Hkd93mDgulY%2Bs8X1aFygsB%2BFKTXtfuk4rJisMmZokwXWsAFkbumRh74rudPOfATunObnjzPNg3tEyUmoW34dWTcWYV7PcJDBe2p6T2l87ewP3n7XGK0IHPRNcyTAQTjFhfC2qx3a7HRy78o0rHuIT6QcwEvuzfGdWPRPKhuqGhaKKz6KMmmz%2FE6hjUK0xd0%2FyFEbyuZlB%2BNYHGHBp0kBlfSuSo%2FBhJiuCA%2FnJE8pKPCI5EPlyprGDBPBjFIn6F1zHH2Z4yDfAM%2B%2BPHTlwb4ZCdbRZyPStSHQkCf082MCfhz77qVCEr0rT6dXV5BC8bhfcyuzpuGx4isigNbPfTXXdZDu74NbBhhg8q4LFr8RliJAo4x4%2FeUGV7OOkci%2BE5L6%2BjTz8S0dg16%2FLJmea1fHaBqw6nC%2BfMfQ%2BYgaEcuf%2FaossF5RqQ8d0K1J6E8LmIZI6qwXoI8xJ%2B%2FtPeXFgdq6wUl9ty2IhE60hmAL5MNvp7cMGOqUBycRJADwEAZc0kfuj4cQaLVOJaflzNpfp7tteNX%2B%2FuK8E%2BaUMBP4rTWD8cfio32qJFuFj4umtPewSexDhdNffljHAHbgFALy9J2dhahfF5STX65mT%2FcvA8kncMLTby8IDXqfQL2EUdGMpmTo5ADkvKJzYuxdJA2e5SLYy6%2FGSqP3Gb6KcCSnFUFIzcG%2FIuVxqnzdXusRm6VKk9hb7YxJ3heWopirx&X-Amz-Signature=abaa910de13ccaaae061b38363467185bd221f28f19b8a2a8f014353710fa11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM35DDW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ20hJaM9FjAtcaJB9SvSr494deCEp5IPChN%2FRnnid5AiEApsyQuTFD%2F0WsFvmhD%2FmqQFsDdeJR9cjvJL0D1IdTTbAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmc0sXi9Cl6X945CrcA838fhVbH%2FevDkdp4asQNHkzMPmxwznzluSVP%2F7Z4F3FrHwk7mk%2B7lODr8JAmv1KdPPoOn2vGI7U4rLnBUmFbSK%2FA7Nuumo%2BbotFsL1XQHKJLSnDCqo7gRpJM2yClSP9XZHyyTvS7Ebxt46j2a7%2Bk11Hkd93mDgulY%2Bs8X1aFygsB%2BFKTXtfuk4rJisMmZokwXWsAFkbumRh74rudPOfATunObnjzPNg3tEyUmoW34dWTcWYV7PcJDBe2p6T2l87ewP3n7XGK0IHPRNcyTAQTjFhfC2qx3a7HRy78o0rHuIT6QcwEvuzfGdWPRPKhuqGhaKKz6KMmmz%2FE6hjUK0xd0%2FyFEbyuZlB%2BNYHGHBp0kBlfSuSo%2FBhJiuCA%2FnJE8pKPCI5EPlyprGDBPBjFIn6F1zHH2Z4yDfAM%2B%2BPHTlwb4ZCdbRZyPStSHQkCf082MCfhz77qVCEr0rT6dXV5BC8bhfcyuzpuGx4isigNbPfTXXdZDu74NbBhhg8q4LFr8RliJAo4x4%2FeUGV7OOkci%2BE5L6%2BjTz8S0dg16%2FLJmea1fHaBqw6nC%2BfMfQ%2BYgaEcuf%2FaossF5RqQ8d0K1J6E8LmIZI6qwXoI8xJ%2B%2FtPeXFgdq6wUl9ty2IhE60hmAL5MNvp7cMGOqUBycRJADwEAZc0kfuj4cQaLVOJaflzNpfp7tteNX%2B%2FuK8E%2BaUMBP4rTWD8cfio32qJFuFj4umtPewSexDhdNffljHAHbgFALy9J2dhahfF5STX65mT%2FcvA8kncMLTby8IDXqfQL2EUdGMpmTo5ADkvKJzYuxdJA2e5SLYy6%2FGSqP3Gb6KcCSnFUFIzcG%2FIuVxqnzdXusRm6VKk9hb7YxJ3heWopirx&X-Amz-Signature=b989240a4fb32716af9863cd9a019b59a79e852f88776cccd6f5422b7a077ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM35DDW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ20hJaM9FjAtcaJB9SvSr494deCEp5IPChN%2FRnnid5AiEApsyQuTFD%2F0WsFvmhD%2FmqQFsDdeJR9cjvJL0D1IdTTbAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmc0sXi9Cl6X945CrcA838fhVbH%2FevDkdp4asQNHkzMPmxwznzluSVP%2F7Z4F3FrHwk7mk%2B7lODr8JAmv1KdPPoOn2vGI7U4rLnBUmFbSK%2FA7Nuumo%2BbotFsL1XQHKJLSnDCqo7gRpJM2yClSP9XZHyyTvS7Ebxt46j2a7%2Bk11Hkd93mDgulY%2Bs8X1aFygsB%2BFKTXtfuk4rJisMmZokwXWsAFkbumRh74rudPOfATunObnjzPNg3tEyUmoW34dWTcWYV7PcJDBe2p6T2l87ewP3n7XGK0IHPRNcyTAQTjFhfC2qx3a7HRy78o0rHuIT6QcwEvuzfGdWPRPKhuqGhaKKz6KMmmz%2FE6hjUK0xd0%2FyFEbyuZlB%2BNYHGHBp0kBlfSuSo%2FBhJiuCA%2FnJE8pKPCI5EPlyprGDBPBjFIn6F1zHH2Z4yDfAM%2B%2BPHTlwb4ZCdbRZyPStSHQkCf082MCfhz77qVCEr0rT6dXV5BC8bhfcyuzpuGx4isigNbPfTXXdZDu74NbBhhg8q4LFr8RliJAo4x4%2FeUGV7OOkci%2BE5L6%2BjTz8S0dg16%2FLJmea1fHaBqw6nC%2BfMfQ%2BYgaEcuf%2FaossF5RqQ8d0K1J6E8LmIZI6qwXoI8xJ%2B%2FtPeXFgdq6wUl9ty2IhE60hmAL5MNvp7cMGOqUBycRJADwEAZc0kfuj4cQaLVOJaflzNpfp7tteNX%2B%2FuK8E%2BaUMBP4rTWD8cfio32qJFuFj4umtPewSexDhdNffljHAHbgFALy9J2dhahfF5STX65mT%2FcvA8kncMLTby8IDXqfQL2EUdGMpmTo5ADkvKJzYuxdJA2e5SLYy6%2FGSqP3Gb6KcCSnFUFIzcG%2FIuVxqnzdXusRm6VKk9hb7YxJ3heWopirx&X-Amz-Signature=d4065c66ecf75ca40a7c3b96de46b821bd5d898c5806dcadf748d020d4938a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM35DDW%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ20hJaM9FjAtcaJB9SvSr494deCEp5IPChN%2FRnnid5AiEApsyQuTFD%2F0WsFvmhD%2FmqQFsDdeJR9cjvJL0D1IdTTbAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkmc0sXi9Cl6X945CrcA838fhVbH%2FevDkdp4asQNHkzMPmxwznzluSVP%2F7Z4F3FrHwk7mk%2B7lODr8JAmv1KdPPoOn2vGI7U4rLnBUmFbSK%2FA7Nuumo%2BbotFsL1XQHKJLSnDCqo7gRpJM2yClSP9XZHyyTvS7Ebxt46j2a7%2Bk11Hkd93mDgulY%2Bs8X1aFygsB%2BFKTXtfuk4rJisMmZokwXWsAFkbumRh74rudPOfATunObnjzPNg3tEyUmoW34dWTcWYV7PcJDBe2p6T2l87ewP3n7XGK0IHPRNcyTAQTjFhfC2qx3a7HRy78o0rHuIT6QcwEvuzfGdWPRPKhuqGhaKKz6KMmmz%2FE6hjUK0xd0%2FyFEbyuZlB%2BNYHGHBp0kBlfSuSo%2FBhJiuCA%2FnJE8pKPCI5EPlyprGDBPBjFIn6F1zHH2Z4yDfAM%2B%2BPHTlwb4ZCdbRZyPStSHQkCf082MCfhz77qVCEr0rT6dXV5BC8bhfcyuzpuGx4isigNbPfTXXdZDu74NbBhhg8q4LFr8RliJAo4x4%2FeUGV7OOkci%2BE5L6%2BjTz8S0dg16%2FLJmea1fHaBqw6nC%2BfMfQ%2BYgaEcuf%2FaossF5RqQ8d0K1J6E8LmIZI6qwXoI8xJ%2B%2FtPeXFgdq6wUl9ty2IhE60hmAL5MNvp7cMGOqUBycRJADwEAZc0kfuj4cQaLVOJaflzNpfp7tteNX%2B%2FuK8E%2BaUMBP4rTWD8cfio32qJFuFj4umtPewSexDhdNffljHAHbgFALy9J2dhahfF5STX65mT%2FcvA8kncMLTby8IDXqfQL2EUdGMpmTo5ADkvKJzYuxdJA2e5SLYy6%2FGSqP3Gb6KcCSnFUFIzcG%2FIuVxqnzdXusRm6VKk9hb7YxJ3heWopirx&X-Amz-Signature=8de9300b0f6b9940489fd2dd7393c124ab2ba790de54df3bd779bcc86cf1c446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
