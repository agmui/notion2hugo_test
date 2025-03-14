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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDZE2V7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1pi8%2FIL2vhbuZIuUmGajMZ9SVAc63GRlTDgHiW22lOgIhAPx0V8cG%2BZ%2Fdp9Yjwk%2FdlYOCDlP8OYALFfxs5yh70Fr%2FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9VdGTe5Pwtv2Ugsq3AOus2fpfdqvgaev8ABi7VRoOFoRVmFvkiO5VgvsBRPMKbIrMhyauDKaqbjzZZQZSxQSXTAdXoFB%2Bw5%2FsvZVDelqp%2FWi%2FXoBi3steVlQNSAO1vle5meMGZoYvlvc96vX3pVrZZZdHiniT%2BJx9keIDx%2FqtD9L43OLPKE1ft1AzeuSljeL94t563dMUaVrKMPIkOnxVFWYsOy2wwDnmfBV5BiHBcPSEcbfNGAgIXF2nz4wb2M0u4fWB2HCJr5JEANTAwF6S8vWfk4iPsXikrTvfmZiocmIlbmvGv6DBJSasTOU9fKg9tD%2FiWxi2s7YzAdd1xl%2B7Qsevk3WK7pjBIv7f%2BiwH7KsFIVdGRg3lnJByLHnQtyUUz%2BQBrcSOcdd93oBk7%2FP9pQAO8bAxZXV13gaq27WqW03YvQ%2Fy5MIIcr1ANuIBLAK%2FvEBllQfVGpJw2djuwYR7O50fnWrVP2go23n5mlGXkbBHHmWwWRi5qBOGddNbEXZyCVdTnagDDdsDKGE0ci7RqetbKy4HVxkx8QKIz4xiU4mmm13zv80u8Wo2w70WXmr9jMgMbVNvxyligj%2FYcLwLwmm%2Bt6fvWz6IJD36i%2BTwLRIoHSTnBJ5zLLEZRHTWuWudIGVdEdWd9ZVEjCfrs6%2BBjqkAagLyFboBQNGLF93iW5G2MjFCnlObxHuB9DdkCCFvkRTbX%2BP9iXJKlteIDX6kLZe45OexhDfZsGRuzH%2F0owUObR2tunU3ml1Vw8kr21i4Dw%2BaHVsRmPhUMMdpHBSMyoCPLmG%2FZck4VS%2BnHbXyoDuTbi20gLI%2BDWUP9XUeIJayLgQOGXN1hK2EOFHGgXgcmwOUByV%2BnAyPI9imxo%2BKVBh37kylM8h&X-Amz-Signature=e398a5192d1ca0b2407363155c5794124772a3a15893fa8521cd7eeaceb02787&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDZE2V7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1pi8%2FIL2vhbuZIuUmGajMZ9SVAc63GRlTDgHiW22lOgIhAPx0V8cG%2BZ%2Fdp9Yjwk%2FdlYOCDlP8OYALFfxs5yh70Fr%2FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9VdGTe5Pwtv2Ugsq3AOus2fpfdqvgaev8ABi7VRoOFoRVmFvkiO5VgvsBRPMKbIrMhyauDKaqbjzZZQZSxQSXTAdXoFB%2Bw5%2FsvZVDelqp%2FWi%2FXoBi3steVlQNSAO1vle5meMGZoYvlvc96vX3pVrZZZdHiniT%2BJx9keIDx%2FqtD9L43OLPKE1ft1AzeuSljeL94t563dMUaVrKMPIkOnxVFWYsOy2wwDnmfBV5BiHBcPSEcbfNGAgIXF2nz4wb2M0u4fWB2HCJr5JEANTAwF6S8vWfk4iPsXikrTvfmZiocmIlbmvGv6DBJSasTOU9fKg9tD%2FiWxi2s7YzAdd1xl%2B7Qsevk3WK7pjBIv7f%2BiwH7KsFIVdGRg3lnJByLHnQtyUUz%2BQBrcSOcdd93oBk7%2FP9pQAO8bAxZXV13gaq27WqW03YvQ%2Fy5MIIcr1ANuIBLAK%2FvEBllQfVGpJw2djuwYR7O50fnWrVP2go23n5mlGXkbBHHmWwWRi5qBOGddNbEXZyCVdTnagDDdsDKGE0ci7RqetbKy4HVxkx8QKIz4xiU4mmm13zv80u8Wo2w70WXmr9jMgMbVNvxyligj%2FYcLwLwmm%2Bt6fvWz6IJD36i%2BTwLRIoHSTnBJ5zLLEZRHTWuWudIGVdEdWd9ZVEjCfrs6%2BBjqkAagLyFboBQNGLF93iW5G2MjFCnlObxHuB9DdkCCFvkRTbX%2BP9iXJKlteIDX6kLZe45OexhDfZsGRuzH%2F0owUObR2tunU3ml1Vw8kr21i4Dw%2BaHVsRmPhUMMdpHBSMyoCPLmG%2FZck4VS%2BnHbXyoDuTbi20gLI%2BDWUP9XUeIJayLgQOGXN1hK2EOFHGgXgcmwOUByV%2BnAyPI9imxo%2BKVBh37kylM8h&X-Amz-Signature=6b88162302bab452edd205841b6b9dac9c1231ddf6327e46df9dbcead3245792&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDZE2V7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1pi8%2FIL2vhbuZIuUmGajMZ9SVAc63GRlTDgHiW22lOgIhAPx0V8cG%2BZ%2Fdp9Yjwk%2FdlYOCDlP8OYALFfxs5yh70Fr%2FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9VdGTe5Pwtv2Ugsq3AOus2fpfdqvgaev8ABi7VRoOFoRVmFvkiO5VgvsBRPMKbIrMhyauDKaqbjzZZQZSxQSXTAdXoFB%2Bw5%2FsvZVDelqp%2FWi%2FXoBi3steVlQNSAO1vle5meMGZoYvlvc96vX3pVrZZZdHiniT%2BJx9keIDx%2FqtD9L43OLPKE1ft1AzeuSljeL94t563dMUaVrKMPIkOnxVFWYsOy2wwDnmfBV5BiHBcPSEcbfNGAgIXF2nz4wb2M0u4fWB2HCJr5JEANTAwF6S8vWfk4iPsXikrTvfmZiocmIlbmvGv6DBJSasTOU9fKg9tD%2FiWxi2s7YzAdd1xl%2B7Qsevk3WK7pjBIv7f%2BiwH7KsFIVdGRg3lnJByLHnQtyUUz%2BQBrcSOcdd93oBk7%2FP9pQAO8bAxZXV13gaq27WqW03YvQ%2Fy5MIIcr1ANuIBLAK%2FvEBllQfVGpJw2djuwYR7O50fnWrVP2go23n5mlGXkbBHHmWwWRi5qBOGddNbEXZyCVdTnagDDdsDKGE0ci7RqetbKy4HVxkx8QKIz4xiU4mmm13zv80u8Wo2w70WXmr9jMgMbVNvxyligj%2FYcLwLwmm%2Bt6fvWz6IJD36i%2BTwLRIoHSTnBJ5zLLEZRHTWuWudIGVdEdWd9ZVEjCfrs6%2BBjqkAagLyFboBQNGLF93iW5G2MjFCnlObxHuB9DdkCCFvkRTbX%2BP9iXJKlteIDX6kLZe45OexhDfZsGRuzH%2F0owUObR2tunU3ml1Vw8kr21i4Dw%2BaHVsRmPhUMMdpHBSMyoCPLmG%2FZck4VS%2BnHbXyoDuTbi20gLI%2BDWUP9XUeIJayLgQOGXN1hK2EOFHGgXgcmwOUByV%2BnAyPI9imxo%2BKVBh37kylM8h&X-Amz-Signature=2a04d15c5ce9bdba17d3eb87f06ab4160be5d3ba5a8d42eaefa1a84b24918dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDZE2V7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1pi8%2FIL2vhbuZIuUmGajMZ9SVAc63GRlTDgHiW22lOgIhAPx0V8cG%2BZ%2Fdp9Yjwk%2FdlYOCDlP8OYALFfxs5yh70Fr%2FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9VdGTe5Pwtv2Ugsq3AOus2fpfdqvgaev8ABi7VRoOFoRVmFvkiO5VgvsBRPMKbIrMhyauDKaqbjzZZQZSxQSXTAdXoFB%2Bw5%2FsvZVDelqp%2FWi%2FXoBi3steVlQNSAO1vle5meMGZoYvlvc96vX3pVrZZZdHiniT%2BJx9keIDx%2FqtD9L43OLPKE1ft1AzeuSljeL94t563dMUaVrKMPIkOnxVFWYsOy2wwDnmfBV5BiHBcPSEcbfNGAgIXF2nz4wb2M0u4fWB2HCJr5JEANTAwF6S8vWfk4iPsXikrTvfmZiocmIlbmvGv6DBJSasTOU9fKg9tD%2FiWxi2s7YzAdd1xl%2B7Qsevk3WK7pjBIv7f%2BiwH7KsFIVdGRg3lnJByLHnQtyUUz%2BQBrcSOcdd93oBk7%2FP9pQAO8bAxZXV13gaq27WqW03YvQ%2Fy5MIIcr1ANuIBLAK%2FvEBllQfVGpJw2djuwYR7O50fnWrVP2go23n5mlGXkbBHHmWwWRi5qBOGddNbEXZyCVdTnagDDdsDKGE0ci7RqetbKy4HVxkx8QKIz4xiU4mmm13zv80u8Wo2w70WXmr9jMgMbVNvxyligj%2FYcLwLwmm%2Bt6fvWz6IJD36i%2BTwLRIoHSTnBJ5zLLEZRHTWuWudIGVdEdWd9ZVEjCfrs6%2BBjqkAagLyFboBQNGLF93iW5G2MjFCnlObxHuB9DdkCCFvkRTbX%2BP9iXJKlteIDX6kLZe45OexhDfZsGRuzH%2F0owUObR2tunU3ml1Vw8kr21i4Dw%2BaHVsRmPhUMMdpHBSMyoCPLmG%2FZck4VS%2BnHbXyoDuTbi20gLI%2BDWUP9XUeIJayLgQOGXN1hK2EOFHGgXgcmwOUByV%2BnAyPI9imxo%2BKVBh37kylM8h&X-Amz-Signature=12b32d84e99df717b06da2c0f8ddfb1af7cd65931540904a8f2fab5fb3dbf872&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDZE2V7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1pi8%2FIL2vhbuZIuUmGajMZ9SVAc63GRlTDgHiW22lOgIhAPx0V8cG%2BZ%2Fdp9Yjwk%2FdlYOCDlP8OYALFfxs5yh70Fr%2FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9VdGTe5Pwtv2Ugsq3AOus2fpfdqvgaev8ABi7VRoOFoRVmFvkiO5VgvsBRPMKbIrMhyauDKaqbjzZZQZSxQSXTAdXoFB%2Bw5%2FsvZVDelqp%2FWi%2FXoBi3steVlQNSAO1vle5meMGZoYvlvc96vX3pVrZZZdHiniT%2BJx9keIDx%2FqtD9L43OLPKE1ft1AzeuSljeL94t563dMUaVrKMPIkOnxVFWYsOy2wwDnmfBV5BiHBcPSEcbfNGAgIXF2nz4wb2M0u4fWB2HCJr5JEANTAwF6S8vWfk4iPsXikrTvfmZiocmIlbmvGv6DBJSasTOU9fKg9tD%2FiWxi2s7YzAdd1xl%2B7Qsevk3WK7pjBIv7f%2BiwH7KsFIVdGRg3lnJByLHnQtyUUz%2BQBrcSOcdd93oBk7%2FP9pQAO8bAxZXV13gaq27WqW03YvQ%2Fy5MIIcr1ANuIBLAK%2FvEBllQfVGpJw2djuwYR7O50fnWrVP2go23n5mlGXkbBHHmWwWRi5qBOGddNbEXZyCVdTnagDDdsDKGE0ci7RqetbKy4HVxkx8QKIz4xiU4mmm13zv80u8Wo2w70WXmr9jMgMbVNvxyligj%2FYcLwLwmm%2Bt6fvWz6IJD36i%2BTwLRIoHSTnBJ5zLLEZRHTWuWudIGVdEdWd9ZVEjCfrs6%2BBjqkAagLyFboBQNGLF93iW5G2MjFCnlObxHuB9DdkCCFvkRTbX%2BP9iXJKlteIDX6kLZe45OexhDfZsGRuzH%2F0owUObR2tunU3ml1Vw8kr21i4Dw%2BaHVsRmPhUMMdpHBSMyoCPLmG%2FZck4VS%2BnHbXyoDuTbi20gLI%2BDWUP9XUeIJayLgQOGXN1hK2EOFHGgXgcmwOUByV%2BnAyPI9imxo%2BKVBh37kylM8h&X-Amz-Signature=5b6cf1c9c7a292e23bcf4c5f1b77b9985af174f438c4e722a27936ff6e8f9ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDZE2V7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1pi8%2FIL2vhbuZIuUmGajMZ9SVAc63GRlTDgHiW22lOgIhAPx0V8cG%2BZ%2Fdp9Yjwk%2FdlYOCDlP8OYALFfxs5yh70Fr%2FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9VdGTe5Pwtv2Ugsq3AOus2fpfdqvgaev8ABi7VRoOFoRVmFvkiO5VgvsBRPMKbIrMhyauDKaqbjzZZQZSxQSXTAdXoFB%2Bw5%2FsvZVDelqp%2FWi%2FXoBi3steVlQNSAO1vle5meMGZoYvlvc96vX3pVrZZZdHiniT%2BJx9keIDx%2FqtD9L43OLPKE1ft1AzeuSljeL94t563dMUaVrKMPIkOnxVFWYsOy2wwDnmfBV5BiHBcPSEcbfNGAgIXF2nz4wb2M0u4fWB2HCJr5JEANTAwF6S8vWfk4iPsXikrTvfmZiocmIlbmvGv6DBJSasTOU9fKg9tD%2FiWxi2s7YzAdd1xl%2B7Qsevk3WK7pjBIv7f%2BiwH7KsFIVdGRg3lnJByLHnQtyUUz%2BQBrcSOcdd93oBk7%2FP9pQAO8bAxZXV13gaq27WqW03YvQ%2Fy5MIIcr1ANuIBLAK%2FvEBllQfVGpJw2djuwYR7O50fnWrVP2go23n5mlGXkbBHHmWwWRi5qBOGddNbEXZyCVdTnagDDdsDKGE0ci7RqetbKy4HVxkx8QKIz4xiU4mmm13zv80u8Wo2w70WXmr9jMgMbVNvxyligj%2FYcLwLwmm%2Bt6fvWz6IJD36i%2BTwLRIoHSTnBJ5zLLEZRHTWuWudIGVdEdWd9ZVEjCfrs6%2BBjqkAagLyFboBQNGLF93iW5G2MjFCnlObxHuB9DdkCCFvkRTbX%2BP9iXJKlteIDX6kLZe45OexhDfZsGRuzH%2F0owUObR2tunU3ml1Vw8kr21i4Dw%2BaHVsRmPhUMMdpHBSMyoCPLmG%2FZck4VS%2BnHbXyoDuTbi20gLI%2BDWUP9XUeIJayLgQOGXN1hK2EOFHGgXgcmwOUByV%2BnAyPI9imxo%2BKVBh37kylM8h&X-Amz-Signature=fc704309e955ecf0b3e7aee448eb9e3e03a85ce8a0e0f43cbf1bf6aec3e20951&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDZE2V7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1pi8%2FIL2vhbuZIuUmGajMZ9SVAc63GRlTDgHiW22lOgIhAPx0V8cG%2BZ%2Fdp9Yjwk%2FdlYOCDlP8OYALFfxs5yh70Fr%2FKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN9VdGTe5Pwtv2Ugsq3AOus2fpfdqvgaev8ABi7VRoOFoRVmFvkiO5VgvsBRPMKbIrMhyauDKaqbjzZZQZSxQSXTAdXoFB%2Bw5%2FsvZVDelqp%2FWi%2FXoBi3steVlQNSAO1vle5meMGZoYvlvc96vX3pVrZZZdHiniT%2BJx9keIDx%2FqtD9L43OLPKE1ft1AzeuSljeL94t563dMUaVrKMPIkOnxVFWYsOy2wwDnmfBV5BiHBcPSEcbfNGAgIXF2nz4wb2M0u4fWB2HCJr5JEANTAwF6S8vWfk4iPsXikrTvfmZiocmIlbmvGv6DBJSasTOU9fKg9tD%2FiWxi2s7YzAdd1xl%2B7Qsevk3WK7pjBIv7f%2BiwH7KsFIVdGRg3lnJByLHnQtyUUz%2BQBrcSOcdd93oBk7%2FP9pQAO8bAxZXV13gaq27WqW03YvQ%2Fy5MIIcr1ANuIBLAK%2FvEBllQfVGpJw2djuwYR7O50fnWrVP2go23n5mlGXkbBHHmWwWRi5qBOGddNbEXZyCVdTnagDDdsDKGE0ci7RqetbKy4HVxkx8QKIz4xiU4mmm13zv80u8Wo2w70WXmr9jMgMbVNvxyligj%2FYcLwLwmm%2Bt6fvWz6IJD36i%2BTwLRIoHSTnBJ5zLLEZRHTWuWudIGVdEdWd9ZVEjCfrs6%2BBjqkAagLyFboBQNGLF93iW5G2MjFCnlObxHuB9DdkCCFvkRTbX%2BP9iXJKlteIDX6kLZe45OexhDfZsGRuzH%2F0owUObR2tunU3ml1Vw8kr21i4Dw%2BaHVsRmPhUMMdpHBSMyoCPLmG%2FZck4VS%2BnHbXyoDuTbi20gLI%2BDWUP9XUeIJayLgQOGXN1hK2EOFHGgXgcmwOUByV%2BnAyPI9imxo%2BKVBh37kylM8h&X-Amz-Signature=c68c065cc6949703008eea5dba31ab16846cbee215d9bb9975a5f3ceb5fccaa0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
