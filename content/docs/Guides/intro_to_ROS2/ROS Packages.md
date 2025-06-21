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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADW33UO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mIAIBGGehqcmEzzWUa8D7iPgxko%2FlHeau1rEFgtrvAiEArRYysY1zomPSMMgOyAj7DOEKfpNVT019raOgMtXgxY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfjnk6Ck7s6UYCTVSrcA1L7tgm%2FLVquSK2SQrEz4mp%2BNshIOeypHMWOtU58%2FqYptX1gIBmRPwyzFQf2mbPSYy94naH75eNN0ClYWPm%2FVpMH0XaBi7uqbbdYzxlUVpuCW5MhyxMmz7kGTMrKw3%2BVm0eUN4DCLabKuPMs3rgaRZ0kv2Yr9N0kMPqbW63rOrK%2FjmllcbDTrGGNBuBI1wOShC8bV2OPUqIS7KvZZIg8KuV49rIJk9Uee%2B1EqkVmqWqvu4ShsXWGsSENtW8BYlN%2B4xJ2SY5Y37vYNM9uH8PolaAtq68cweHZJEn%2BTeAmz5mUBa2xSXZ1U%2BayMqjerntyYl8mzATZrntx4%2F2M5Sh%2BjElGjTGsrwaGcu1dd4pw1aBUz%2Fih7hoZw4sH0WnyvV5s%2FZ%2FCEMz%2B7IcanKdtx%2FBc2cOfC814cbBqVuxz4QwRk3dgC9V3VLfdup3mWnZd8G%2FrYjSFDdOxvYJ2doRSP3MRwtUX4DjmC3fPU5tUWHUJIMqKJHaDaW8SAwM%2Fd6Gke9jQgxD6LbxgSiB0syQQ7gouyEQ0g1cmOCeCjxPGx22mhoDul%2Fb91UCMh2fpfGQ8xMOmcym7Ur%2B5M2ZqiLOp%2B05UE4W2dkD%2BIy25ocEhF8X%2BENKCm76kBGbSoctQKDrzMKKP28IGOqUBdR8XKnFSQ%2Bh8%2BIMptKRtge3GM%2FlKLO0EQvkN36d4M3OoqXHC4bj2B5bIO31C310K70ovop64TvOdMg2062RcU%2FF1eAFRcIVLLlnS4BeCj%2FB2OGkiMb5QnuDTiR0CNO0yZcpg34XiNDad96MRSWNvnB5aKIYysS3PGs0mzWBh8kwk5uUssVMGk69IcXgOlCj20AVqpTv2QYAijdYd1UwcSn6ecV2r&X-Amz-Signature=5627ba14e0a8ded76679d0124f045f26ca56281e4fcf3b54012f410cd317f7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADW33UO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mIAIBGGehqcmEzzWUa8D7iPgxko%2FlHeau1rEFgtrvAiEArRYysY1zomPSMMgOyAj7DOEKfpNVT019raOgMtXgxY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfjnk6Ck7s6UYCTVSrcA1L7tgm%2FLVquSK2SQrEz4mp%2BNshIOeypHMWOtU58%2FqYptX1gIBmRPwyzFQf2mbPSYy94naH75eNN0ClYWPm%2FVpMH0XaBi7uqbbdYzxlUVpuCW5MhyxMmz7kGTMrKw3%2BVm0eUN4DCLabKuPMs3rgaRZ0kv2Yr9N0kMPqbW63rOrK%2FjmllcbDTrGGNBuBI1wOShC8bV2OPUqIS7KvZZIg8KuV49rIJk9Uee%2B1EqkVmqWqvu4ShsXWGsSENtW8BYlN%2B4xJ2SY5Y37vYNM9uH8PolaAtq68cweHZJEn%2BTeAmz5mUBa2xSXZ1U%2BayMqjerntyYl8mzATZrntx4%2F2M5Sh%2BjElGjTGsrwaGcu1dd4pw1aBUz%2Fih7hoZw4sH0WnyvV5s%2FZ%2FCEMz%2B7IcanKdtx%2FBc2cOfC814cbBqVuxz4QwRk3dgC9V3VLfdup3mWnZd8G%2FrYjSFDdOxvYJ2doRSP3MRwtUX4DjmC3fPU5tUWHUJIMqKJHaDaW8SAwM%2Fd6Gke9jQgxD6LbxgSiB0syQQ7gouyEQ0g1cmOCeCjxPGx22mhoDul%2Fb91UCMh2fpfGQ8xMOmcym7Ur%2B5M2ZqiLOp%2B05UE4W2dkD%2BIy25ocEhF8X%2BENKCm76kBGbSoctQKDrzMKKP28IGOqUBdR8XKnFSQ%2Bh8%2BIMptKRtge3GM%2FlKLO0EQvkN36d4M3OoqXHC4bj2B5bIO31C310K70ovop64TvOdMg2062RcU%2FF1eAFRcIVLLlnS4BeCj%2FB2OGkiMb5QnuDTiR0CNO0yZcpg34XiNDad96MRSWNvnB5aKIYysS3PGs0mzWBh8kwk5uUssVMGk69IcXgOlCj20AVqpTv2QYAijdYd1UwcSn6ecV2r&X-Amz-Signature=fad78ee4d0825a50eb25cfd055bc715b625027f24b7c99667d3b18a08dcd1c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADW33UO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mIAIBGGehqcmEzzWUa8D7iPgxko%2FlHeau1rEFgtrvAiEArRYysY1zomPSMMgOyAj7DOEKfpNVT019raOgMtXgxY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfjnk6Ck7s6UYCTVSrcA1L7tgm%2FLVquSK2SQrEz4mp%2BNshIOeypHMWOtU58%2FqYptX1gIBmRPwyzFQf2mbPSYy94naH75eNN0ClYWPm%2FVpMH0XaBi7uqbbdYzxlUVpuCW5MhyxMmz7kGTMrKw3%2BVm0eUN4DCLabKuPMs3rgaRZ0kv2Yr9N0kMPqbW63rOrK%2FjmllcbDTrGGNBuBI1wOShC8bV2OPUqIS7KvZZIg8KuV49rIJk9Uee%2B1EqkVmqWqvu4ShsXWGsSENtW8BYlN%2B4xJ2SY5Y37vYNM9uH8PolaAtq68cweHZJEn%2BTeAmz5mUBa2xSXZ1U%2BayMqjerntyYl8mzATZrntx4%2F2M5Sh%2BjElGjTGsrwaGcu1dd4pw1aBUz%2Fih7hoZw4sH0WnyvV5s%2FZ%2FCEMz%2B7IcanKdtx%2FBc2cOfC814cbBqVuxz4QwRk3dgC9V3VLfdup3mWnZd8G%2FrYjSFDdOxvYJ2doRSP3MRwtUX4DjmC3fPU5tUWHUJIMqKJHaDaW8SAwM%2Fd6Gke9jQgxD6LbxgSiB0syQQ7gouyEQ0g1cmOCeCjxPGx22mhoDul%2Fb91UCMh2fpfGQ8xMOmcym7Ur%2B5M2ZqiLOp%2B05UE4W2dkD%2BIy25ocEhF8X%2BENKCm76kBGbSoctQKDrzMKKP28IGOqUBdR8XKnFSQ%2Bh8%2BIMptKRtge3GM%2FlKLO0EQvkN36d4M3OoqXHC4bj2B5bIO31C310K70ovop64TvOdMg2062RcU%2FF1eAFRcIVLLlnS4BeCj%2FB2OGkiMb5QnuDTiR0CNO0yZcpg34XiNDad96MRSWNvnB5aKIYysS3PGs0mzWBh8kwk5uUssVMGk69IcXgOlCj20AVqpTv2QYAijdYd1UwcSn6ecV2r&X-Amz-Signature=539dca738a49a1b6960a97889407323d466402e5a59619a1375775956aacfcc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADW33UO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mIAIBGGehqcmEzzWUa8D7iPgxko%2FlHeau1rEFgtrvAiEArRYysY1zomPSMMgOyAj7DOEKfpNVT019raOgMtXgxY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfjnk6Ck7s6UYCTVSrcA1L7tgm%2FLVquSK2SQrEz4mp%2BNshIOeypHMWOtU58%2FqYptX1gIBmRPwyzFQf2mbPSYy94naH75eNN0ClYWPm%2FVpMH0XaBi7uqbbdYzxlUVpuCW5MhyxMmz7kGTMrKw3%2BVm0eUN4DCLabKuPMs3rgaRZ0kv2Yr9N0kMPqbW63rOrK%2FjmllcbDTrGGNBuBI1wOShC8bV2OPUqIS7KvZZIg8KuV49rIJk9Uee%2B1EqkVmqWqvu4ShsXWGsSENtW8BYlN%2B4xJ2SY5Y37vYNM9uH8PolaAtq68cweHZJEn%2BTeAmz5mUBa2xSXZ1U%2BayMqjerntyYl8mzATZrntx4%2F2M5Sh%2BjElGjTGsrwaGcu1dd4pw1aBUz%2Fih7hoZw4sH0WnyvV5s%2FZ%2FCEMz%2B7IcanKdtx%2FBc2cOfC814cbBqVuxz4QwRk3dgC9V3VLfdup3mWnZd8G%2FrYjSFDdOxvYJ2doRSP3MRwtUX4DjmC3fPU5tUWHUJIMqKJHaDaW8SAwM%2Fd6Gke9jQgxD6LbxgSiB0syQQ7gouyEQ0g1cmOCeCjxPGx22mhoDul%2Fb91UCMh2fpfGQ8xMOmcym7Ur%2B5M2ZqiLOp%2B05UE4W2dkD%2BIy25ocEhF8X%2BENKCm76kBGbSoctQKDrzMKKP28IGOqUBdR8XKnFSQ%2Bh8%2BIMptKRtge3GM%2FlKLO0EQvkN36d4M3OoqXHC4bj2B5bIO31C310K70ovop64TvOdMg2062RcU%2FF1eAFRcIVLLlnS4BeCj%2FB2OGkiMb5QnuDTiR0CNO0yZcpg34XiNDad96MRSWNvnB5aKIYysS3PGs0mzWBh8kwk5uUssVMGk69IcXgOlCj20AVqpTv2QYAijdYd1UwcSn6ecV2r&X-Amz-Signature=f6d27b926c66ec95b3fa168058821ccc2f77f28949f7558d769f6f2b6315f9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADW33UO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mIAIBGGehqcmEzzWUa8D7iPgxko%2FlHeau1rEFgtrvAiEArRYysY1zomPSMMgOyAj7DOEKfpNVT019raOgMtXgxY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfjnk6Ck7s6UYCTVSrcA1L7tgm%2FLVquSK2SQrEz4mp%2BNshIOeypHMWOtU58%2FqYptX1gIBmRPwyzFQf2mbPSYy94naH75eNN0ClYWPm%2FVpMH0XaBi7uqbbdYzxlUVpuCW5MhyxMmz7kGTMrKw3%2BVm0eUN4DCLabKuPMs3rgaRZ0kv2Yr9N0kMPqbW63rOrK%2FjmllcbDTrGGNBuBI1wOShC8bV2OPUqIS7KvZZIg8KuV49rIJk9Uee%2B1EqkVmqWqvu4ShsXWGsSENtW8BYlN%2B4xJ2SY5Y37vYNM9uH8PolaAtq68cweHZJEn%2BTeAmz5mUBa2xSXZ1U%2BayMqjerntyYl8mzATZrntx4%2F2M5Sh%2BjElGjTGsrwaGcu1dd4pw1aBUz%2Fih7hoZw4sH0WnyvV5s%2FZ%2FCEMz%2B7IcanKdtx%2FBc2cOfC814cbBqVuxz4QwRk3dgC9V3VLfdup3mWnZd8G%2FrYjSFDdOxvYJ2doRSP3MRwtUX4DjmC3fPU5tUWHUJIMqKJHaDaW8SAwM%2Fd6Gke9jQgxD6LbxgSiB0syQQ7gouyEQ0g1cmOCeCjxPGx22mhoDul%2Fb91UCMh2fpfGQ8xMOmcym7Ur%2B5M2ZqiLOp%2B05UE4W2dkD%2BIy25ocEhF8X%2BENKCm76kBGbSoctQKDrzMKKP28IGOqUBdR8XKnFSQ%2Bh8%2BIMptKRtge3GM%2FlKLO0EQvkN36d4M3OoqXHC4bj2B5bIO31C310K70ovop64TvOdMg2062RcU%2FF1eAFRcIVLLlnS4BeCj%2FB2OGkiMb5QnuDTiR0CNO0yZcpg34XiNDad96MRSWNvnB5aKIYysS3PGs0mzWBh8kwk5uUssVMGk69IcXgOlCj20AVqpTv2QYAijdYd1UwcSn6ecV2r&X-Amz-Signature=993936caa009fa52b050b15fc6918ccbac5d57c64e982a0d2cb4c8b43037d4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADW33UO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mIAIBGGehqcmEzzWUa8D7iPgxko%2FlHeau1rEFgtrvAiEArRYysY1zomPSMMgOyAj7DOEKfpNVT019raOgMtXgxY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfjnk6Ck7s6UYCTVSrcA1L7tgm%2FLVquSK2SQrEz4mp%2BNshIOeypHMWOtU58%2FqYptX1gIBmRPwyzFQf2mbPSYy94naH75eNN0ClYWPm%2FVpMH0XaBi7uqbbdYzxlUVpuCW5MhyxMmz7kGTMrKw3%2BVm0eUN4DCLabKuPMs3rgaRZ0kv2Yr9N0kMPqbW63rOrK%2FjmllcbDTrGGNBuBI1wOShC8bV2OPUqIS7KvZZIg8KuV49rIJk9Uee%2B1EqkVmqWqvu4ShsXWGsSENtW8BYlN%2B4xJ2SY5Y37vYNM9uH8PolaAtq68cweHZJEn%2BTeAmz5mUBa2xSXZ1U%2BayMqjerntyYl8mzATZrntx4%2F2M5Sh%2BjElGjTGsrwaGcu1dd4pw1aBUz%2Fih7hoZw4sH0WnyvV5s%2FZ%2FCEMz%2B7IcanKdtx%2FBc2cOfC814cbBqVuxz4QwRk3dgC9V3VLfdup3mWnZd8G%2FrYjSFDdOxvYJ2doRSP3MRwtUX4DjmC3fPU5tUWHUJIMqKJHaDaW8SAwM%2Fd6Gke9jQgxD6LbxgSiB0syQQ7gouyEQ0g1cmOCeCjxPGx22mhoDul%2Fb91UCMh2fpfGQ8xMOmcym7Ur%2B5M2ZqiLOp%2B05UE4W2dkD%2BIy25ocEhF8X%2BENKCm76kBGbSoctQKDrzMKKP28IGOqUBdR8XKnFSQ%2Bh8%2BIMptKRtge3GM%2FlKLO0EQvkN36d4M3OoqXHC4bj2B5bIO31C310K70ovop64TvOdMg2062RcU%2FF1eAFRcIVLLlnS4BeCj%2FB2OGkiMb5QnuDTiR0CNO0yZcpg34XiNDad96MRSWNvnB5aKIYysS3PGs0mzWBh8kwk5uUssVMGk69IcXgOlCj20AVqpTv2QYAijdYd1UwcSn6ecV2r&X-Amz-Signature=7b5d8b4fe2547e99479d2373f4741eaa87d35d44de90d3aa445e92fb2cef7764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ADW33UO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9mIAIBGGehqcmEzzWUa8D7iPgxko%2FlHeau1rEFgtrvAiEArRYysY1zomPSMMgOyAj7DOEKfpNVT019raOgMtXgxY8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfjnk6Ck7s6UYCTVSrcA1L7tgm%2FLVquSK2SQrEz4mp%2BNshIOeypHMWOtU58%2FqYptX1gIBmRPwyzFQf2mbPSYy94naH75eNN0ClYWPm%2FVpMH0XaBi7uqbbdYzxlUVpuCW5MhyxMmz7kGTMrKw3%2BVm0eUN4DCLabKuPMs3rgaRZ0kv2Yr9N0kMPqbW63rOrK%2FjmllcbDTrGGNBuBI1wOShC8bV2OPUqIS7KvZZIg8KuV49rIJk9Uee%2B1EqkVmqWqvu4ShsXWGsSENtW8BYlN%2B4xJ2SY5Y37vYNM9uH8PolaAtq68cweHZJEn%2BTeAmz5mUBa2xSXZ1U%2BayMqjerntyYl8mzATZrntx4%2F2M5Sh%2BjElGjTGsrwaGcu1dd4pw1aBUz%2Fih7hoZw4sH0WnyvV5s%2FZ%2FCEMz%2B7IcanKdtx%2FBc2cOfC814cbBqVuxz4QwRk3dgC9V3VLfdup3mWnZd8G%2FrYjSFDdOxvYJ2doRSP3MRwtUX4DjmC3fPU5tUWHUJIMqKJHaDaW8SAwM%2Fd6Gke9jQgxD6LbxgSiB0syQQ7gouyEQ0g1cmOCeCjxPGx22mhoDul%2Fb91UCMh2fpfGQ8xMOmcym7Ur%2B5M2ZqiLOp%2B05UE4W2dkD%2BIy25ocEhF8X%2BENKCm76kBGbSoctQKDrzMKKP28IGOqUBdR8XKnFSQ%2Bh8%2BIMptKRtge3GM%2FlKLO0EQvkN36d4M3OoqXHC4bj2B5bIO31C310K70ovop64TvOdMg2062RcU%2FF1eAFRcIVLLlnS4BeCj%2FB2OGkiMb5QnuDTiR0CNO0yZcpg34XiNDad96MRSWNvnB5aKIYysS3PGs0mzWBh8kwk5uUssVMGk69IcXgOlCj20AVqpTv2QYAijdYd1UwcSn6ecV2r&X-Amz-Signature=3744d9d3df99de0a1f438c86f2ec25d61f33d2a1ddebd98e0be9f55e8ff2c197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
