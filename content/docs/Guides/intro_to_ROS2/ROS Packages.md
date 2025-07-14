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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZM4QO2K%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyNQwZc6O0XG1liccrgpbNNdEjOLNU7M8jwYRXRbrIQQIgCvFsyBpeCaYMkowo8ei5yR8O4rWfvm5RJ5ZiYr1e3Qgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHN0hnJUeY0FQ0IhYSrcA%2FMaWv0D3M8MlZwb7OkVmWbtZpKq2Nbfmqu%2BXuYXdbiEFIsrRi%2FtxJ5b86NfK%2BWpD5W7VfYQKmflxNpzuqjbvXWFvb4x1cN9QVnkpiewkgt3%2F56hgeIsQ3eCQ%2FdKejDa%2F%2BFY0A01iKnebY3Y%2Bg9tyog2DFfih5Mszunmo2RWcST%2Bg4Djg0nbuWBRKacQAOhSNzPHz44ZyVwyJb2rRmpTN6LxDHMpTgLXiHaMX63kmP9Jhmo7XqrbLiST1AcyYLfbh7C%2Bfy4MdLRIPyc0gnP00MelbGJo%2F6%2BvGOabVtKmDuQXqB71zG4WImN0yysap%2BTEjq2gab906WBSOo%2B5mQesIZvV9JH3XqIMDjim8DPq7UQKHteR5trWYNzaU6s0EAlKgaenWEXsN1xArac3wzr%2FAwGfouJ5%2BXVlDsuVYG%2BpdBPSk6vlCfJsGzrI9sqm3kCd9Npf2BM3oDLTgUaFOZJ8W92EP9PUybOje9YNHj%2FLLlP1fKo0P7K%2Fwqvu33R%2FdL%2BgNuBD1lrUCfxXvNFb1A%2BBKL%2B5jXc4Yvwsq0u4NjXByPCuZrRj%2BzLp2Lzw5W5fAQUbhnfIfBVnbNWZvc%2B9frx2fqMjnlb0Qk3rpIO51z8QxVCb%2BBgC%2BszY9C5FzNddMICk1cMGOqUBdsTsbVc9h2svQZvXl9LDPoUs%2FTUIdYnIyJywgVUN4AFYB64ukx%2FdChhEi4W%2FZT5LEE0DmFvE4uNQ3BJ9V4imLURe5xYjuWaIXQqDAt3QlFWPbYJu1jBvtA7%2Fbau0hMLG%2B5IVdLs3X2BzmBY%2FLR66iIfMNg4gQMu4JS3ABzPHGb%2Bg83O1GDa%2B9wK4gYjCrmKFoLzqNxdnBVSa143amL40IcAEx3gJ&X-Amz-Signature=df60d8b2faaf28f6476e8eb74f4b16da8f73f9c36a9d95c9cfad9bcc6ea3ea23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZM4QO2K%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyNQwZc6O0XG1liccrgpbNNdEjOLNU7M8jwYRXRbrIQQIgCvFsyBpeCaYMkowo8ei5yR8O4rWfvm5RJ5ZiYr1e3Qgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHN0hnJUeY0FQ0IhYSrcA%2FMaWv0D3M8MlZwb7OkVmWbtZpKq2Nbfmqu%2BXuYXdbiEFIsrRi%2FtxJ5b86NfK%2BWpD5W7VfYQKmflxNpzuqjbvXWFvb4x1cN9QVnkpiewkgt3%2F56hgeIsQ3eCQ%2FdKejDa%2F%2BFY0A01iKnebY3Y%2Bg9tyog2DFfih5Mszunmo2RWcST%2Bg4Djg0nbuWBRKacQAOhSNzPHz44ZyVwyJb2rRmpTN6LxDHMpTgLXiHaMX63kmP9Jhmo7XqrbLiST1AcyYLfbh7C%2Bfy4MdLRIPyc0gnP00MelbGJo%2F6%2BvGOabVtKmDuQXqB71zG4WImN0yysap%2BTEjq2gab906WBSOo%2B5mQesIZvV9JH3XqIMDjim8DPq7UQKHteR5trWYNzaU6s0EAlKgaenWEXsN1xArac3wzr%2FAwGfouJ5%2BXVlDsuVYG%2BpdBPSk6vlCfJsGzrI9sqm3kCd9Npf2BM3oDLTgUaFOZJ8W92EP9PUybOje9YNHj%2FLLlP1fKo0P7K%2Fwqvu33R%2FdL%2BgNuBD1lrUCfxXvNFb1A%2BBKL%2B5jXc4Yvwsq0u4NjXByPCuZrRj%2BzLp2Lzw5W5fAQUbhnfIfBVnbNWZvc%2B9frx2fqMjnlb0Qk3rpIO51z8QxVCb%2BBgC%2BszY9C5FzNddMICk1cMGOqUBdsTsbVc9h2svQZvXl9LDPoUs%2FTUIdYnIyJywgVUN4AFYB64ukx%2FdChhEi4W%2FZT5LEE0DmFvE4uNQ3BJ9V4imLURe5xYjuWaIXQqDAt3QlFWPbYJu1jBvtA7%2Fbau0hMLG%2B5IVdLs3X2BzmBY%2FLR66iIfMNg4gQMu4JS3ABzPHGb%2Bg83O1GDa%2B9wK4gYjCrmKFoLzqNxdnBVSa143amL40IcAEx3gJ&X-Amz-Signature=dd33d4b2b9e6a413ceeffb69d50038566a780b1d938c301d2f3ab39ab01817c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZM4QO2K%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyNQwZc6O0XG1liccrgpbNNdEjOLNU7M8jwYRXRbrIQQIgCvFsyBpeCaYMkowo8ei5yR8O4rWfvm5RJ5ZiYr1e3Qgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHN0hnJUeY0FQ0IhYSrcA%2FMaWv0D3M8MlZwb7OkVmWbtZpKq2Nbfmqu%2BXuYXdbiEFIsrRi%2FtxJ5b86NfK%2BWpD5W7VfYQKmflxNpzuqjbvXWFvb4x1cN9QVnkpiewkgt3%2F56hgeIsQ3eCQ%2FdKejDa%2F%2BFY0A01iKnebY3Y%2Bg9tyog2DFfih5Mszunmo2RWcST%2Bg4Djg0nbuWBRKacQAOhSNzPHz44ZyVwyJb2rRmpTN6LxDHMpTgLXiHaMX63kmP9Jhmo7XqrbLiST1AcyYLfbh7C%2Bfy4MdLRIPyc0gnP00MelbGJo%2F6%2BvGOabVtKmDuQXqB71zG4WImN0yysap%2BTEjq2gab906WBSOo%2B5mQesIZvV9JH3XqIMDjim8DPq7UQKHteR5trWYNzaU6s0EAlKgaenWEXsN1xArac3wzr%2FAwGfouJ5%2BXVlDsuVYG%2BpdBPSk6vlCfJsGzrI9sqm3kCd9Npf2BM3oDLTgUaFOZJ8W92EP9PUybOje9YNHj%2FLLlP1fKo0P7K%2Fwqvu33R%2FdL%2BgNuBD1lrUCfxXvNFb1A%2BBKL%2B5jXc4Yvwsq0u4NjXByPCuZrRj%2BzLp2Lzw5W5fAQUbhnfIfBVnbNWZvc%2B9frx2fqMjnlb0Qk3rpIO51z8QxVCb%2BBgC%2BszY9C5FzNddMICk1cMGOqUBdsTsbVc9h2svQZvXl9LDPoUs%2FTUIdYnIyJywgVUN4AFYB64ukx%2FdChhEi4W%2FZT5LEE0DmFvE4uNQ3BJ9V4imLURe5xYjuWaIXQqDAt3QlFWPbYJu1jBvtA7%2Fbau0hMLG%2B5IVdLs3X2BzmBY%2FLR66iIfMNg4gQMu4JS3ABzPHGb%2Bg83O1GDa%2B9wK4gYjCrmKFoLzqNxdnBVSa143amL40IcAEx3gJ&X-Amz-Signature=8e4d6c576345d768dfe53842715cdb5c18f65feb9a64abe6f73ea8d0e4dadbcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZM4QO2K%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyNQwZc6O0XG1liccrgpbNNdEjOLNU7M8jwYRXRbrIQQIgCvFsyBpeCaYMkowo8ei5yR8O4rWfvm5RJ5ZiYr1e3Qgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHN0hnJUeY0FQ0IhYSrcA%2FMaWv0D3M8MlZwb7OkVmWbtZpKq2Nbfmqu%2BXuYXdbiEFIsrRi%2FtxJ5b86NfK%2BWpD5W7VfYQKmflxNpzuqjbvXWFvb4x1cN9QVnkpiewkgt3%2F56hgeIsQ3eCQ%2FdKejDa%2F%2BFY0A01iKnebY3Y%2Bg9tyog2DFfih5Mszunmo2RWcST%2Bg4Djg0nbuWBRKacQAOhSNzPHz44ZyVwyJb2rRmpTN6LxDHMpTgLXiHaMX63kmP9Jhmo7XqrbLiST1AcyYLfbh7C%2Bfy4MdLRIPyc0gnP00MelbGJo%2F6%2BvGOabVtKmDuQXqB71zG4WImN0yysap%2BTEjq2gab906WBSOo%2B5mQesIZvV9JH3XqIMDjim8DPq7UQKHteR5trWYNzaU6s0EAlKgaenWEXsN1xArac3wzr%2FAwGfouJ5%2BXVlDsuVYG%2BpdBPSk6vlCfJsGzrI9sqm3kCd9Npf2BM3oDLTgUaFOZJ8W92EP9PUybOje9YNHj%2FLLlP1fKo0P7K%2Fwqvu33R%2FdL%2BgNuBD1lrUCfxXvNFb1A%2BBKL%2B5jXc4Yvwsq0u4NjXByPCuZrRj%2BzLp2Lzw5W5fAQUbhnfIfBVnbNWZvc%2B9frx2fqMjnlb0Qk3rpIO51z8QxVCb%2BBgC%2BszY9C5FzNddMICk1cMGOqUBdsTsbVc9h2svQZvXl9LDPoUs%2FTUIdYnIyJywgVUN4AFYB64ukx%2FdChhEi4W%2FZT5LEE0DmFvE4uNQ3BJ9V4imLURe5xYjuWaIXQqDAt3QlFWPbYJu1jBvtA7%2Fbau0hMLG%2B5IVdLs3X2BzmBY%2FLR66iIfMNg4gQMu4JS3ABzPHGb%2Bg83O1GDa%2B9wK4gYjCrmKFoLzqNxdnBVSa143amL40IcAEx3gJ&X-Amz-Signature=4b2202c12e1997ec89cb48ebdd9370b709c0611b5981459246c0ad30946e1a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZM4QO2K%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyNQwZc6O0XG1liccrgpbNNdEjOLNU7M8jwYRXRbrIQQIgCvFsyBpeCaYMkowo8ei5yR8O4rWfvm5RJ5ZiYr1e3Qgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHN0hnJUeY0FQ0IhYSrcA%2FMaWv0D3M8MlZwb7OkVmWbtZpKq2Nbfmqu%2BXuYXdbiEFIsrRi%2FtxJ5b86NfK%2BWpD5W7VfYQKmflxNpzuqjbvXWFvb4x1cN9QVnkpiewkgt3%2F56hgeIsQ3eCQ%2FdKejDa%2F%2BFY0A01iKnebY3Y%2Bg9tyog2DFfih5Mszunmo2RWcST%2Bg4Djg0nbuWBRKacQAOhSNzPHz44ZyVwyJb2rRmpTN6LxDHMpTgLXiHaMX63kmP9Jhmo7XqrbLiST1AcyYLfbh7C%2Bfy4MdLRIPyc0gnP00MelbGJo%2F6%2BvGOabVtKmDuQXqB71zG4WImN0yysap%2BTEjq2gab906WBSOo%2B5mQesIZvV9JH3XqIMDjim8DPq7UQKHteR5trWYNzaU6s0EAlKgaenWEXsN1xArac3wzr%2FAwGfouJ5%2BXVlDsuVYG%2BpdBPSk6vlCfJsGzrI9sqm3kCd9Npf2BM3oDLTgUaFOZJ8W92EP9PUybOje9YNHj%2FLLlP1fKo0P7K%2Fwqvu33R%2FdL%2BgNuBD1lrUCfxXvNFb1A%2BBKL%2B5jXc4Yvwsq0u4NjXByPCuZrRj%2BzLp2Lzw5W5fAQUbhnfIfBVnbNWZvc%2B9frx2fqMjnlb0Qk3rpIO51z8QxVCb%2BBgC%2BszY9C5FzNddMICk1cMGOqUBdsTsbVc9h2svQZvXl9LDPoUs%2FTUIdYnIyJywgVUN4AFYB64ukx%2FdChhEi4W%2FZT5LEE0DmFvE4uNQ3BJ9V4imLURe5xYjuWaIXQqDAt3QlFWPbYJu1jBvtA7%2Fbau0hMLG%2B5IVdLs3X2BzmBY%2FLR66iIfMNg4gQMu4JS3ABzPHGb%2Bg83O1GDa%2B9wK4gYjCrmKFoLzqNxdnBVSa143amL40IcAEx3gJ&X-Amz-Signature=c5b4a98044608a98841bac2ad532bec107f32b438ed48b9b008d0e2d5ca9a4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZM4QO2K%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyNQwZc6O0XG1liccrgpbNNdEjOLNU7M8jwYRXRbrIQQIgCvFsyBpeCaYMkowo8ei5yR8O4rWfvm5RJ5ZiYr1e3Qgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHN0hnJUeY0FQ0IhYSrcA%2FMaWv0D3M8MlZwb7OkVmWbtZpKq2Nbfmqu%2BXuYXdbiEFIsrRi%2FtxJ5b86NfK%2BWpD5W7VfYQKmflxNpzuqjbvXWFvb4x1cN9QVnkpiewkgt3%2F56hgeIsQ3eCQ%2FdKejDa%2F%2BFY0A01iKnebY3Y%2Bg9tyog2DFfih5Mszunmo2RWcST%2Bg4Djg0nbuWBRKacQAOhSNzPHz44ZyVwyJb2rRmpTN6LxDHMpTgLXiHaMX63kmP9Jhmo7XqrbLiST1AcyYLfbh7C%2Bfy4MdLRIPyc0gnP00MelbGJo%2F6%2BvGOabVtKmDuQXqB71zG4WImN0yysap%2BTEjq2gab906WBSOo%2B5mQesIZvV9JH3XqIMDjim8DPq7UQKHteR5trWYNzaU6s0EAlKgaenWEXsN1xArac3wzr%2FAwGfouJ5%2BXVlDsuVYG%2BpdBPSk6vlCfJsGzrI9sqm3kCd9Npf2BM3oDLTgUaFOZJ8W92EP9PUybOje9YNHj%2FLLlP1fKo0P7K%2Fwqvu33R%2FdL%2BgNuBD1lrUCfxXvNFb1A%2BBKL%2B5jXc4Yvwsq0u4NjXByPCuZrRj%2BzLp2Lzw5W5fAQUbhnfIfBVnbNWZvc%2B9frx2fqMjnlb0Qk3rpIO51z8QxVCb%2BBgC%2BszY9C5FzNddMICk1cMGOqUBdsTsbVc9h2svQZvXl9LDPoUs%2FTUIdYnIyJywgVUN4AFYB64ukx%2FdChhEi4W%2FZT5LEE0DmFvE4uNQ3BJ9V4imLURe5xYjuWaIXQqDAt3QlFWPbYJu1jBvtA7%2Fbau0hMLG%2B5IVdLs3X2BzmBY%2FLR66iIfMNg4gQMu4JS3ABzPHGb%2Bg83O1GDa%2B9wK4gYjCrmKFoLzqNxdnBVSa143amL40IcAEx3gJ&X-Amz-Signature=f5d96168738989d84752794a9748e220ca614b84d50b96eb09ff9581c1f4ed9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZM4QO2K%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDyNQwZc6O0XG1liccrgpbNNdEjOLNU7M8jwYRXRbrIQQIgCvFsyBpeCaYMkowo8ei5yR8O4rWfvm5RJ5ZiYr1e3Qgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHN0hnJUeY0FQ0IhYSrcA%2FMaWv0D3M8MlZwb7OkVmWbtZpKq2Nbfmqu%2BXuYXdbiEFIsrRi%2FtxJ5b86NfK%2BWpD5W7VfYQKmflxNpzuqjbvXWFvb4x1cN9QVnkpiewkgt3%2F56hgeIsQ3eCQ%2FdKejDa%2F%2BFY0A01iKnebY3Y%2Bg9tyog2DFfih5Mszunmo2RWcST%2Bg4Djg0nbuWBRKacQAOhSNzPHz44ZyVwyJb2rRmpTN6LxDHMpTgLXiHaMX63kmP9Jhmo7XqrbLiST1AcyYLfbh7C%2Bfy4MdLRIPyc0gnP00MelbGJo%2F6%2BvGOabVtKmDuQXqB71zG4WImN0yysap%2BTEjq2gab906WBSOo%2B5mQesIZvV9JH3XqIMDjim8DPq7UQKHteR5trWYNzaU6s0EAlKgaenWEXsN1xArac3wzr%2FAwGfouJ5%2BXVlDsuVYG%2BpdBPSk6vlCfJsGzrI9sqm3kCd9Npf2BM3oDLTgUaFOZJ8W92EP9PUybOje9YNHj%2FLLlP1fKo0P7K%2Fwqvu33R%2FdL%2BgNuBD1lrUCfxXvNFb1A%2BBKL%2B5jXc4Yvwsq0u4NjXByPCuZrRj%2BzLp2Lzw5W5fAQUbhnfIfBVnbNWZvc%2B9frx2fqMjnlb0Qk3rpIO51z8QxVCb%2BBgC%2BszY9C5FzNddMICk1cMGOqUBdsTsbVc9h2svQZvXl9LDPoUs%2FTUIdYnIyJywgVUN4AFYB64ukx%2FdChhEi4W%2FZT5LEE0DmFvE4uNQ3BJ9V4imLURe5xYjuWaIXQqDAt3QlFWPbYJu1jBvtA7%2Fbau0hMLG%2B5IVdLs3X2BzmBY%2FLR66iIfMNg4gQMu4JS3ABzPHGb%2Bg83O1GDa%2B9wK4gYjCrmKFoLzqNxdnBVSa143amL40IcAEx3gJ&X-Amz-Signature=1f1c14bd375cc696c05ee2ced31ee4bb9797423e379c9cdabf13931d168b5f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
