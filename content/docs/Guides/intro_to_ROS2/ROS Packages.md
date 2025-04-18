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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB7X4VS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4183frwwfkXf0gRi5nZfp7y66os1XP5EWTPurvYpVQIgAaZC2Rg7rw2WCGNAP0diAwnUq%2FuPWFfn60pQEseMcg8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLwNiFWT%2BQYKPiAmLSrcA1Np%2FMN1iZ8ty1IKJl6BWfMuR8%2Fgv%2FR0nX9Mh17pB4B7CfrXAnTBFfSgd46ESdPvSgL8dthBeeQgP3Ro47Ogmgap23Sb8PQnJhI4bwBcGVeTUnmoPXaKGWwacZdDkKUR1PvevMlKdV3Ddr1mIKl%2BEiBw1HTV%2FSjlfzBMA7lASenNz5Z44R48aIUjzPFD5ZCZIXVxm0kOAmVC4IQWRPUZsIS7BJQtUYGWllMOkZdfwDDKjCbbds2rv6W1Y7QyVa6DhtbEDIuPoC%2BZThBfeJuKaEkKbZ6Fc47Xk5yvEDDKaBtnj2NQZkCB9qCyA0k0BxuYl1RixVJKBgl1OeaPl4oulSSevsdri0xUTZhDzRCGzU2WAhHz1FskKiLeL%2BZs%2BspF%2FXe7d4mArldZfI3ARALMmGCpVnopZoGAy5rr5oO0ZcaacxmRrl9oz1SD1Z8fBxLRjl9tmSSoUMYO3txFLM73kllFUDm1dvIKEqcbz3LU2Knthd1pb9xAf0EDGm0b7bNjRzg%2B25S8E1pl4HEmVtx%2FsV6aESwSXYeZDysTjGjLAQDof9odNgOGd%2FJadYSkbBYY%2FRdCmCxzWdJlrugFIXbeg%2BYCi%2FnvxfmRo4e61uI24vlYelGmf%2FRLiGPqd5CgMOTDicAGOqUBlSXBxp0b4lrKHhkC1X8QVpawiuH1JXI5mD3tw5eBXk8%2BhriisVw3i96V7%2F7T3CJ274cOuv0yWRR4kAoUv9zzDZMgozfnfeWsqusmSEPlp0PtHfBM4KL83wOLJfDxnGd1ZOvs7lAmG0kE2WRosKqns9X5i%2BNMr%2B4566yogBZlYNIAkg1%2FBaENyaJcIBBtUMTSlzYoUvAb7qyvC3%2BWJcmep1n2VL7k&X-Amz-Signature=2656f5a6a36004843a9a5ed77e0b7b68b6ef1ff345568cd47c3237882ffe2c70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB7X4VS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4183frwwfkXf0gRi5nZfp7y66os1XP5EWTPurvYpVQIgAaZC2Rg7rw2WCGNAP0diAwnUq%2FuPWFfn60pQEseMcg8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLwNiFWT%2BQYKPiAmLSrcA1Np%2FMN1iZ8ty1IKJl6BWfMuR8%2Fgv%2FR0nX9Mh17pB4B7CfrXAnTBFfSgd46ESdPvSgL8dthBeeQgP3Ro47Ogmgap23Sb8PQnJhI4bwBcGVeTUnmoPXaKGWwacZdDkKUR1PvevMlKdV3Ddr1mIKl%2BEiBw1HTV%2FSjlfzBMA7lASenNz5Z44R48aIUjzPFD5ZCZIXVxm0kOAmVC4IQWRPUZsIS7BJQtUYGWllMOkZdfwDDKjCbbds2rv6W1Y7QyVa6DhtbEDIuPoC%2BZThBfeJuKaEkKbZ6Fc47Xk5yvEDDKaBtnj2NQZkCB9qCyA0k0BxuYl1RixVJKBgl1OeaPl4oulSSevsdri0xUTZhDzRCGzU2WAhHz1FskKiLeL%2BZs%2BspF%2FXe7d4mArldZfI3ARALMmGCpVnopZoGAy5rr5oO0ZcaacxmRrl9oz1SD1Z8fBxLRjl9tmSSoUMYO3txFLM73kllFUDm1dvIKEqcbz3LU2Knthd1pb9xAf0EDGm0b7bNjRzg%2B25S8E1pl4HEmVtx%2FsV6aESwSXYeZDysTjGjLAQDof9odNgOGd%2FJadYSkbBYY%2FRdCmCxzWdJlrugFIXbeg%2BYCi%2FnvxfmRo4e61uI24vlYelGmf%2FRLiGPqd5CgMOTDicAGOqUBlSXBxp0b4lrKHhkC1X8QVpawiuH1JXI5mD3tw5eBXk8%2BhriisVw3i96V7%2F7T3CJ274cOuv0yWRR4kAoUv9zzDZMgozfnfeWsqusmSEPlp0PtHfBM4KL83wOLJfDxnGd1ZOvs7lAmG0kE2WRosKqns9X5i%2BNMr%2B4566yogBZlYNIAkg1%2FBaENyaJcIBBtUMTSlzYoUvAb7qyvC3%2BWJcmep1n2VL7k&X-Amz-Signature=1b67d8747237fde700af6eada29adf0c69a3208bb0da6bf211ef6ab596229822&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB7X4VS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4183frwwfkXf0gRi5nZfp7y66os1XP5EWTPurvYpVQIgAaZC2Rg7rw2WCGNAP0diAwnUq%2FuPWFfn60pQEseMcg8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLwNiFWT%2BQYKPiAmLSrcA1Np%2FMN1iZ8ty1IKJl6BWfMuR8%2Fgv%2FR0nX9Mh17pB4B7CfrXAnTBFfSgd46ESdPvSgL8dthBeeQgP3Ro47Ogmgap23Sb8PQnJhI4bwBcGVeTUnmoPXaKGWwacZdDkKUR1PvevMlKdV3Ddr1mIKl%2BEiBw1HTV%2FSjlfzBMA7lASenNz5Z44R48aIUjzPFD5ZCZIXVxm0kOAmVC4IQWRPUZsIS7BJQtUYGWllMOkZdfwDDKjCbbds2rv6W1Y7QyVa6DhtbEDIuPoC%2BZThBfeJuKaEkKbZ6Fc47Xk5yvEDDKaBtnj2NQZkCB9qCyA0k0BxuYl1RixVJKBgl1OeaPl4oulSSevsdri0xUTZhDzRCGzU2WAhHz1FskKiLeL%2BZs%2BspF%2FXe7d4mArldZfI3ARALMmGCpVnopZoGAy5rr5oO0ZcaacxmRrl9oz1SD1Z8fBxLRjl9tmSSoUMYO3txFLM73kllFUDm1dvIKEqcbz3LU2Knthd1pb9xAf0EDGm0b7bNjRzg%2B25S8E1pl4HEmVtx%2FsV6aESwSXYeZDysTjGjLAQDof9odNgOGd%2FJadYSkbBYY%2FRdCmCxzWdJlrugFIXbeg%2BYCi%2FnvxfmRo4e61uI24vlYelGmf%2FRLiGPqd5CgMOTDicAGOqUBlSXBxp0b4lrKHhkC1X8QVpawiuH1JXI5mD3tw5eBXk8%2BhriisVw3i96V7%2F7T3CJ274cOuv0yWRR4kAoUv9zzDZMgozfnfeWsqusmSEPlp0PtHfBM4KL83wOLJfDxnGd1ZOvs7lAmG0kE2WRosKqns9X5i%2BNMr%2B4566yogBZlYNIAkg1%2FBaENyaJcIBBtUMTSlzYoUvAb7qyvC3%2BWJcmep1n2VL7k&X-Amz-Signature=973f1c3d3ba6fc6afa96a78056c005c15ceb3c075d3b12a5748a8a5416788b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB7X4VS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4183frwwfkXf0gRi5nZfp7y66os1XP5EWTPurvYpVQIgAaZC2Rg7rw2WCGNAP0diAwnUq%2FuPWFfn60pQEseMcg8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLwNiFWT%2BQYKPiAmLSrcA1Np%2FMN1iZ8ty1IKJl6BWfMuR8%2Fgv%2FR0nX9Mh17pB4B7CfrXAnTBFfSgd46ESdPvSgL8dthBeeQgP3Ro47Ogmgap23Sb8PQnJhI4bwBcGVeTUnmoPXaKGWwacZdDkKUR1PvevMlKdV3Ddr1mIKl%2BEiBw1HTV%2FSjlfzBMA7lASenNz5Z44R48aIUjzPFD5ZCZIXVxm0kOAmVC4IQWRPUZsIS7BJQtUYGWllMOkZdfwDDKjCbbds2rv6W1Y7QyVa6DhtbEDIuPoC%2BZThBfeJuKaEkKbZ6Fc47Xk5yvEDDKaBtnj2NQZkCB9qCyA0k0BxuYl1RixVJKBgl1OeaPl4oulSSevsdri0xUTZhDzRCGzU2WAhHz1FskKiLeL%2BZs%2BspF%2FXe7d4mArldZfI3ARALMmGCpVnopZoGAy5rr5oO0ZcaacxmRrl9oz1SD1Z8fBxLRjl9tmSSoUMYO3txFLM73kllFUDm1dvIKEqcbz3LU2Knthd1pb9xAf0EDGm0b7bNjRzg%2B25S8E1pl4HEmVtx%2FsV6aESwSXYeZDysTjGjLAQDof9odNgOGd%2FJadYSkbBYY%2FRdCmCxzWdJlrugFIXbeg%2BYCi%2FnvxfmRo4e61uI24vlYelGmf%2FRLiGPqd5CgMOTDicAGOqUBlSXBxp0b4lrKHhkC1X8QVpawiuH1JXI5mD3tw5eBXk8%2BhriisVw3i96V7%2F7T3CJ274cOuv0yWRR4kAoUv9zzDZMgozfnfeWsqusmSEPlp0PtHfBM4KL83wOLJfDxnGd1ZOvs7lAmG0kE2WRosKqns9X5i%2BNMr%2B4566yogBZlYNIAkg1%2FBaENyaJcIBBtUMTSlzYoUvAb7qyvC3%2BWJcmep1n2VL7k&X-Amz-Signature=fbffb87d05e8995b2eccf52f00055e4e034e0121dceedb17673db50e36250767&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB7X4VS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4183frwwfkXf0gRi5nZfp7y66os1XP5EWTPurvYpVQIgAaZC2Rg7rw2WCGNAP0diAwnUq%2FuPWFfn60pQEseMcg8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLwNiFWT%2BQYKPiAmLSrcA1Np%2FMN1iZ8ty1IKJl6BWfMuR8%2Fgv%2FR0nX9Mh17pB4B7CfrXAnTBFfSgd46ESdPvSgL8dthBeeQgP3Ro47Ogmgap23Sb8PQnJhI4bwBcGVeTUnmoPXaKGWwacZdDkKUR1PvevMlKdV3Ddr1mIKl%2BEiBw1HTV%2FSjlfzBMA7lASenNz5Z44R48aIUjzPFD5ZCZIXVxm0kOAmVC4IQWRPUZsIS7BJQtUYGWllMOkZdfwDDKjCbbds2rv6W1Y7QyVa6DhtbEDIuPoC%2BZThBfeJuKaEkKbZ6Fc47Xk5yvEDDKaBtnj2NQZkCB9qCyA0k0BxuYl1RixVJKBgl1OeaPl4oulSSevsdri0xUTZhDzRCGzU2WAhHz1FskKiLeL%2BZs%2BspF%2FXe7d4mArldZfI3ARALMmGCpVnopZoGAy5rr5oO0ZcaacxmRrl9oz1SD1Z8fBxLRjl9tmSSoUMYO3txFLM73kllFUDm1dvIKEqcbz3LU2Knthd1pb9xAf0EDGm0b7bNjRzg%2B25S8E1pl4HEmVtx%2FsV6aESwSXYeZDysTjGjLAQDof9odNgOGd%2FJadYSkbBYY%2FRdCmCxzWdJlrugFIXbeg%2BYCi%2FnvxfmRo4e61uI24vlYelGmf%2FRLiGPqd5CgMOTDicAGOqUBlSXBxp0b4lrKHhkC1X8QVpawiuH1JXI5mD3tw5eBXk8%2BhriisVw3i96V7%2F7T3CJ274cOuv0yWRR4kAoUv9zzDZMgozfnfeWsqusmSEPlp0PtHfBM4KL83wOLJfDxnGd1ZOvs7lAmG0kE2WRosKqns9X5i%2BNMr%2B4566yogBZlYNIAkg1%2FBaENyaJcIBBtUMTSlzYoUvAb7qyvC3%2BWJcmep1n2VL7k&X-Amz-Signature=6ee0b838b64acf43b7cd73056b967194efbe050f29d1de807913c989b114e324&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB7X4VS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4183frwwfkXf0gRi5nZfp7y66os1XP5EWTPurvYpVQIgAaZC2Rg7rw2WCGNAP0diAwnUq%2FuPWFfn60pQEseMcg8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLwNiFWT%2BQYKPiAmLSrcA1Np%2FMN1iZ8ty1IKJl6BWfMuR8%2Fgv%2FR0nX9Mh17pB4B7CfrXAnTBFfSgd46ESdPvSgL8dthBeeQgP3Ro47Ogmgap23Sb8PQnJhI4bwBcGVeTUnmoPXaKGWwacZdDkKUR1PvevMlKdV3Ddr1mIKl%2BEiBw1HTV%2FSjlfzBMA7lASenNz5Z44R48aIUjzPFD5ZCZIXVxm0kOAmVC4IQWRPUZsIS7BJQtUYGWllMOkZdfwDDKjCbbds2rv6W1Y7QyVa6DhtbEDIuPoC%2BZThBfeJuKaEkKbZ6Fc47Xk5yvEDDKaBtnj2NQZkCB9qCyA0k0BxuYl1RixVJKBgl1OeaPl4oulSSevsdri0xUTZhDzRCGzU2WAhHz1FskKiLeL%2BZs%2BspF%2FXe7d4mArldZfI3ARALMmGCpVnopZoGAy5rr5oO0ZcaacxmRrl9oz1SD1Z8fBxLRjl9tmSSoUMYO3txFLM73kllFUDm1dvIKEqcbz3LU2Knthd1pb9xAf0EDGm0b7bNjRzg%2B25S8E1pl4HEmVtx%2FsV6aESwSXYeZDysTjGjLAQDof9odNgOGd%2FJadYSkbBYY%2FRdCmCxzWdJlrugFIXbeg%2BYCi%2FnvxfmRo4e61uI24vlYelGmf%2FRLiGPqd5CgMOTDicAGOqUBlSXBxp0b4lrKHhkC1X8QVpawiuH1JXI5mD3tw5eBXk8%2BhriisVw3i96V7%2F7T3CJ274cOuv0yWRR4kAoUv9zzDZMgozfnfeWsqusmSEPlp0PtHfBM4KL83wOLJfDxnGd1ZOvs7lAmG0kE2WRosKqns9X5i%2BNMr%2B4566yogBZlYNIAkg1%2FBaENyaJcIBBtUMTSlzYoUvAb7qyvC3%2BWJcmep1n2VL7k&X-Amz-Signature=135405d0de1471dee2dc9450c3dcb9c7275205e2e120059796e8bc8832c94c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB7X4VS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4183frwwfkXf0gRi5nZfp7y66os1XP5EWTPurvYpVQIgAaZC2Rg7rw2WCGNAP0diAwnUq%2FuPWFfn60pQEseMcg8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLwNiFWT%2BQYKPiAmLSrcA1Np%2FMN1iZ8ty1IKJl6BWfMuR8%2Fgv%2FR0nX9Mh17pB4B7CfrXAnTBFfSgd46ESdPvSgL8dthBeeQgP3Ro47Ogmgap23Sb8PQnJhI4bwBcGVeTUnmoPXaKGWwacZdDkKUR1PvevMlKdV3Ddr1mIKl%2BEiBw1HTV%2FSjlfzBMA7lASenNz5Z44R48aIUjzPFD5ZCZIXVxm0kOAmVC4IQWRPUZsIS7BJQtUYGWllMOkZdfwDDKjCbbds2rv6W1Y7QyVa6DhtbEDIuPoC%2BZThBfeJuKaEkKbZ6Fc47Xk5yvEDDKaBtnj2NQZkCB9qCyA0k0BxuYl1RixVJKBgl1OeaPl4oulSSevsdri0xUTZhDzRCGzU2WAhHz1FskKiLeL%2BZs%2BspF%2FXe7d4mArldZfI3ARALMmGCpVnopZoGAy5rr5oO0ZcaacxmRrl9oz1SD1Z8fBxLRjl9tmSSoUMYO3txFLM73kllFUDm1dvIKEqcbz3LU2Knthd1pb9xAf0EDGm0b7bNjRzg%2B25S8E1pl4HEmVtx%2FsV6aESwSXYeZDysTjGjLAQDof9odNgOGd%2FJadYSkbBYY%2FRdCmCxzWdJlrugFIXbeg%2BYCi%2FnvxfmRo4e61uI24vlYelGmf%2FRLiGPqd5CgMOTDicAGOqUBlSXBxp0b4lrKHhkC1X8QVpawiuH1JXI5mD3tw5eBXk8%2BhriisVw3i96V7%2F7T3CJ274cOuv0yWRR4kAoUv9zzDZMgozfnfeWsqusmSEPlp0PtHfBM4KL83wOLJfDxnGd1ZOvs7lAmG0kE2WRosKqns9X5i%2BNMr%2B4566yogBZlYNIAkg1%2FBaENyaJcIBBtUMTSlzYoUvAb7qyvC3%2BWJcmep1n2VL7k&X-Amz-Signature=4375d49fafd8d0fd3dfdcfaeb6f520e9265bf1dedff5171a47ae9f158274323c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
