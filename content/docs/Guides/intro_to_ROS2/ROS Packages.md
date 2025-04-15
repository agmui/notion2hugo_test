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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRLHRVJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0nAGV0pnRtdLu1bnkixVRFYLU8h9NuqBicVpjaiZTvwIhAK9E%2Fm2hy45EK8H18kKfUHDWPGSYua5DgE79ovVwuohrKv8DCDQQABoMNjM3NDIzMTgzODA1Igz%2FnKQf7SItiqN7he8q3ANFcAiO4AeOxpwsoRdvsi7oB%2Bu%2FrS7gIz%2FW8llumVo1KKZSKi%2FOq4A4ceZ4nYyDjhcVmHPQuev4GpdWPiMkD7Hqipocz03LRyFvHRDI%2FuvKBFNGggci7ycH4TPPQiDhLBUYOqAUHO3CPifaRHqi2T2jzLOt5dwXOgaJ5rqY%2FWU%2FQPgbOq%2FQd8uCicizxAOLDQ0JZbm8Vn9jLLEOhYqfqOAt9rXVzi0Mp7wEfk8Hd%2Fl7pva72Z8%2BoirAVq5csl6kcDjiaoJ9L7VQPqSPqZeGeR7gbhAFmTcAAq2tzoWK1vpXJg0LBHHozK39G%2BbbCYiL72UJ4jyYT49Wq%2FetDMW3imygv0MesQWp5Dk8ju0j%2FdJJrBSRbOiGFNNbFThPFnIRTBPHAYHcOW6VO8A95lBdj7rupB0WPTmOvtxpeWjMiWYxdG%2B0uGZQhm%2FUEsmJo2v3Mr8TruXtLiRrDY%2FicjbuJbEB5ROG0m7ZPuvl5dSjLRluGaZIMUsMYsP9uh17NHY%2FryxcsvixCIYLhN1%2FC%2Bp8ewDEnymGmZsdvfa6%2FMLCJBe9QZM6MhYc44M38d2MT5jdXY4tObMjqS66TvrOvgNTXjBSruaSpXBnk3PathuhSoE6Ks5LVpKUwJxWG%2FFAPDDC1vq%2FBjqkAbGwO1Wr%2Fiq%2BDurf44jHamJHcrD%2BznCbZctxvZ%2Fyhg0ekU4fTA1QPPMi5PWzG48eP%2Fv0VB9lDI%2FOPsfnUsK5X9Du%2FiRl7lKWEQlrWv6ycPhYl0wnYabP6TnoJTJJWlDTARNtzsNxUTpue%2FTdFroC0iopXyyCM57e%2BJwjJVUv6qrwht9t%2F2EwV%2BfIpehefQXGYN%2F2uOfUL9Gc0KgYArkVXgbZdgpb&X-Amz-Signature=dc898b604e76511179e16faa5f91dd672423ea44ab5144f3d11e578917eb9c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRLHRVJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0nAGV0pnRtdLu1bnkixVRFYLU8h9NuqBicVpjaiZTvwIhAK9E%2Fm2hy45EK8H18kKfUHDWPGSYua5DgE79ovVwuohrKv8DCDQQABoMNjM3NDIzMTgzODA1Igz%2FnKQf7SItiqN7he8q3ANFcAiO4AeOxpwsoRdvsi7oB%2Bu%2FrS7gIz%2FW8llumVo1KKZSKi%2FOq4A4ceZ4nYyDjhcVmHPQuev4GpdWPiMkD7Hqipocz03LRyFvHRDI%2FuvKBFNGggci7ycH4TPPQiDhLBUYOqAUHO3CPifaRHqi2T2jzLOt5dwXOgaJ5rqY%2FWU%2FQPgbOq%2FQd8uCicizxAOLDQ0JZbm8Vn9jLLEOhYqfqOAt9rXVzi0Mp7wEfk8Hd%2Fl7pva72Z8%2BoirAVq5csl6kcDjiaoJ9L7VQPqSPqZeGeR7gbhAFmTcAAq2tzoWK1vpXJg0LBHHozK39G%2BbbCYiL72UJ4jyYT49Wq%2FetDMW3imygv0MesQWp5Dk8ju0j%2FdJJrBSRbOiGFNNbFThPFnIRTBPHAYHcOW6VO8A95lBdj7rupB0WPTmOvtxpeWjMiWYxdG%2B0uGZQhm%2FUEsmJo2v3Mr8TruXtLiRrDY%2FicjbuJbEB5ROG0m7ZPuvl5dSjLRluGaZIMUsMYsP9uh17NHY%2FryxcsvixCIYLhN1%2FC%2Bp8ewDEnymGmZsdvfa6%2FMLCJBe9QZM6MhYc44M38d2MT5jdXY4tObMjqS66TvrOvgNTXjBSruaSpXBnk3PathuhSoE6Ks5LVpKUwJxWG%2FFAPDDC1vq%2FBjqkAbGwO1Wr%2Fiq%2BDurf44jHamJHcrD%2BznCbZctxvZ%2Fyhg0ekU4fTA1QPPMi5PWzG48eP%2Fv0VB9lDI%2FOPsfnUsK5X9Du%2FiRl7lKWEQlrWv6ycPhYl0wnYabP6TnoJTJJWlDTARNtzsNxUTpue%2FTdFroC0iopXyyCM57e%2BJwjJVUv6qrwht9t%2F2EwV%2BfIpehefQXGYN%2F2uOfUL9Gc0KgYArkVXgbZdgpb&X-Amz-Signature=8ecac4e9d1d4b075e9c4d699d6813fa7096371ed23fa4d9c8f65f54c0cf43453&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRLHRVJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0nAGV0pnRtdLu1bnkixVRFYLU8h9NuqBicVpjaiZTvwIhAK9E%2Fm2hy45EK8H18kKfUHDWPGSYua5DgE79ovVwuohrKv8DCDQQABoMNjM3NDIzMTgzODA1Igz%2FnKQf7SItiqN7he8q3ANFcAiO4AeOxpwsoRdvsi7oB%2Bu%2FrS7gIz%2FW8llumVo1KKZSKi%2FOq4A4ceZ4nYyDjhcVmHPQuev4GpdWPiMkD7Hqipocz03LRyFvHRDI%2FuvKBFNGggci7ycH4TPPQiDhLBUYOqAUHO3CPifaRHqi2T2jzLOt5dwXOgaJ5rqY%2FWU%2FQPgbOq%2FQd8uCicizxAOLDQ0JZbm8Vn9jLLEOhYqfqOAt9rXVzi0Mp7wEfk8Hd%2Fl7pva72Z8%2BoirAVq5csl6kcDjiaoJ9L7VQPqSPqZeGeR7gbhAFmTcAAq2tzoWK1vpXJg0LBHHozK39G%2BbbCYiL72UJ4jyYT49Wq%2FetDMW3imygv0MesQWp5Dk8ju0j%2FdJJrBSRbOiGFNNbFThPFnIRTBPHAYHcOW6VO8A95lBdj7rupB0WPTmOvtxpeWjMiWYxdG%2B0uGZQhm%2FUEsmJo2v3Mr8TruXtLiRrDY%2FicjbuJbEB5ROG0m7ZPuvl5dSjLRluGaZIMUsMYsP9uh17NHY%2FryxcsvixCIYLhN1%2FC%2Bp8ewDEnymGmZsdvfa6%2FMLCJBe9QZM6MhYc44M38d2MT5jdXY4tObMjqS66TvrOvgNTXjBSruaSpXBnk3PathuhSoE6Ks5LVpKUwJxWG%2FFAPDDC1vq%2FBjqkAbGwO1Wr%2Fiq%2BDurf44jHamJHcrD%2BznCbZctxvZ%2Fyhg0ekU4fTA1QPPMi5PWzG48eP%2Fv0VB9lDI%2FOPsfnUsK5X9Du%2FiRl7lKWEQlrWv6ycPhYl0wnYabP6TnoJTJJWlDTARNtzsNxUTpue%2FTdFroC0iopXyyCM57e%2BJwjJVUv6qrwht9t%2F2EwV%2BfIpehefQXGYN%2F2uOfUL9Gc0KgYArkVXgbZdgpb&X-Amz-Signature=521ce36a476c47f859073385ef959f1feecfb7318b642088afcfe6f4dd71681b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRLHRVJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0nAGV0pnRtdLu1bnkixVRFYLU8h9NuqBicVpjaiZTvwIhAK9E%2Fm2hy45EK8H18kKfUHDWPGSYua5DgE79ovVwuohrKv8DCDQQABoMNjM3NDIzMTgzODA1Igz%2FnKQf7SItiqN7he8q3ANFcAiO4AeOxpwsoRdvsi7oB%2Bu%2FrS7gIz%2FW8llumVo1KKZSKi%2FOq4A4ceZ4nYyDjhcVmHPQuev4GpdWPiMkD7Hqipocz03LRyFvHRDI%2FuvKBFNGggci7ycH4TPPQiDhLBUYOqAUHO3CPifaRHqi2T2jzLOt5dwXOgaJ5rqY%2FWU%2FQPgbOq%2FQd8uCicizxAOLDQ0JZbm8Vn9jLLEOhYqfqOAt9rXVzi0Mp7wEfk8Hd%2Fl7pva72Z8%2BoirAVq5csl6kcDjiaoJ9L7VQPqSPqZeGeR7gbhAFmTcAAq2tzoWK1vpXJg0LBHHozK39G%2BbbCYiL72UJ4jyYT49Wq%2FetDMW3imygv0MesQWp5Dk8ju0j%2FdJJrBSRbOiGFNNbFThPFnIRTBPHAYHcOW6VO8A95lBdj7rupB0WPTmOvtxpeWjMiWYxdG%2B0uGZQhm%2FUEsmJo2v3Mr8TruXtLiRrDY%2FicjbuJbEB5ROG0m7ZPuvl5dSjLRluGaZIMUsMYsP9uh17NHY%2FryxcsvixCIYLhN1%2FC%2Bp8ewDEnymGmZsdvfa6%2FMLCJBe9QZM6MhYc44M38d2MT5jdXY4tObMjqS66TvrOvgNTXjBSruaSpXBnk3PathuhSoE6Ks5LVpKUwJxWG%2FFAPDDC1vq%2FBjqkAbGwO1Wr%2Fiq%2BDurf44jHamJHcrD%2BznCbZctxvZ%2Fyhg0ekU4fTA1QPPMi5PWzG48eP%2Fv0VB9lDI%2FOPsfnUsK5X9Du%2FiRl7lKWEQlrWv6ycPhYl0wnYabP6TnoJTJJWlDTARNtzsNxUTpue%2FTdFroC0iopXyyCM57e%2BJwjJVUv6qrwht9t%2F2EwV%2BfIpehefQXGYN%2F2uOfUL9Gc0KgYArkVXgbZdgpb&X-Amz-Signature=af4e9f56de2f80128118463ed54546cfe7d5e51316580320c9607e66b97ed160&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRLHRVJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0nAGV0pnRtdLu1bnkixVRFYLU8h9NuqBicVpjaiZTvwIhAK9E%2Fm2hy45EK8H18kKfUHDWPGSYua5DgE79ovVwuohrKv8DCDQQABoMNjM3NDIzMTgzODA1Igz%2FnKQf7SItiqN7he8q3ANFcAiO4AeOxpwsoRdvsi7oB%2Bu%2FrS7gIz%2FW8llumVo1KKZSKi%2FOq4A4ceZ4nYyDjhcVmHPQuev4GpdWPiMkD7Hqipocz03LRyFvHRDI%2FuvKBFNGggci7ycH4TPPQiDhLBUYOqAUHO3CPifaRHqi2T2jzLOt5dwXOgaJ5rqY%2FWU%2FQPgbOq%2FQd8uCicizxAOLDQ0JZbm8Vn9jLLEOhYqfqOAt9rXVzi0Mp7wEfk8Hd%2Fl7pva72Z8%2BoirAVq5csl6kcDjiaoJ9L7VQPqSPqZeGeR7gbhAFmTcAAq2tzoWK1vpXJg0LBHHozK39G%2BbbCYiL72UJ4jyYT49Wq%2FetDMW3imygv0MesQWp5Dk8ju0j%2FdJJrBSRbOiGFNNbFThPFnIRTBPHAYHcOW6VO8A95lBdj7rupB0WPTmOvtxpeWjMiWYxdG%2B0uGZQhm%2FUEsmJo2v3Mr8TruXtLiRrDY%2FicjbuJbEB5ROG0m7ZPuvl5dSjLRluGaZIMUsMYsP9uh17NHY%2FryxcsvixCIYLhN1%2FC%2Bp8ewDEnymGmZsdvfa6%2FMLCJBe9QZM6MhYc44M38d2MT5jdXY4tObMjqS66TvrOvgNTXjBSruaSpXBnk3PathuhSoE6Ks5LVpKUwJxWG%2FFAPDDC1vq%2FBjqkAbGwO1Wr%2Fiq%2BDurf44jHamJHcrD%2BznCbZctxvZ%2Fyhg0ekU4fTA1QPPMi5PWzG48eP%2Fv0VB9lDI%2FOPsfnUsK5X9Du%2FiRl7lKWEQlrWv6ycPhYl0wnYabP6TnoJTJJWlDTARNtzsNxUTpue%2FTdFroC0iopXyyCM57e%2BJwjJVUv6qrwht9t%2F2EwV%2BfIpehefQXGYN%2F2uOfUL9Gc0KgYArkVXgbZdgpb&X-Amz-Signature=0b2163ed1b801518fb26e27fe80ae7465ff776fba3bbd581fbd380d2d5fbcb3d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRLHRVJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0nAGV0pnRtdLu1bnkixVRFYLU8h9NuqBicVpjaiZTvwIhAK9E%2Fm2hy45EK8H18kKfUHDWPGSYua5DgE79ovVwuohrKv8DCDQQABoMNjM3NDIzMTgzODA1Igz%2FnKQf7SItiqN7he8q3ANFcAiO4AeOxpwsoRdvsi7oB%2Bu%2FrS7gIz%2FW8llumVo1KKZSKi%2FOq4A4ceZ4nYyDjhcVmHPQuev4GpdWPiMkD7Hqipocz03LRyFvHRDI%2FuvKBFNGggci7ycH4TPPQiDhLBUYOqAUHO3CPifaRHqi2T2jzLOt5dwXOgaJ5rqY%2FWU%2FQPgbOq%2FQd8uCicizxAOLDQ0JZbm8Vn9jLLEOhYqfqOAt9rXVzi0Mp7wEfk8Hd%2Fl7pva72Z8%2BoirAVq5csl6kcDjiaoJ9L7VQPqSPqZeGeR7gbhAFmTcAAq2tzoWK1vpXJg0LBHHozK39G%2BbbCYiL72UJ4jyYT49Wq%2FetDMW3imygv0MesQWp5Dk8ju0j%2FdJJrBSRbOiGFNNbFThPFnIRTBPHAYHcOW6VO8A95lBdj7rupB0WPTmOvtxpeWjMiWYxdG%2B0uGZQhm%2FUEsmJo2v3Mr8TruXtLiRrDY%2FicjbuJbEB5ROG0m7ZPuvl5dSjLRluGaZIMUsMYsP9uh17NHY%2FryxcsvixCIYLhN1%2FC%2Bp8ewDEnymGmZsdvfa6%2FMLCJBe9QZM6MhYc44M38d2MT5jdXY4tObMjqS66TvrOvgNTXjBSruaSpXBnk3PathuhSoE6Ks5LVpKUwJxWG%2FFAPDDC1vq%2FBjqkAbGwO1Wr%2Fiq%2BDurf44jHamJHcrD%2BznCbZctxvZ%2Fyhg0ekU4fTA1QPPMi5PWzG48eP%2Fv0VB9lDI%2FOPsfnUsK5X9Du%2FiRl7lKWEQlrWv6ycPhYl0wnYabP6TnoJTJJWlDTARNtzsNxUTpue%2FTdFroC0iopXyyCM57e%2BJwjJVUv6qrwht9t%2F2EwV%2BfIpehefQXGYN%2F2uOfUL9Gc0KgYArkVXgbZdgpb&X-Amz-Signature=e68d72dede5aeea5e878616773520be2c66df995d3bcb5f8ea0029c840799c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HRLHRVJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0nAGV0pnRtdLu1bnkixVRFYLU8h9NuqBicVpjaiZTvwIhAK9E%2Fm2hy45EK8H18kKfUHDWPGSYua5DgE79ovVwuohrKv8DCDQQABoMNjM3NDIzMTgzODA1Igz%2FnKQf7SItiqN7he8q3ANFcAiO4AeOxpwsoRdvsi7oB%2Bu%2FrS7gIz%2FW8llumVo1KKZSKi%2FOq4A4ceZ4nYyDjhcVmHPQuev4GpdWPiMkD7Hqipocz03LRyFvHRDI%2FuvKBFNGggci7ycH4TPPQiDhLBUYOqAUHO3CPifaRHqi2T2jzLOt5dwXOgaJ5rqY%2FWU%2FQPgbOq%2FQd8uCicizxAOLDQ0JZbm8Vn9jLLEOhYqfqOAt9rXVzi0Mp7wEfk8Hd%2Fl7pva72Z8%2BoirAVq5csl6kcDjiaoJ9L7VQPqSPqZeGeR7gbhAFmTcAAq2tzoWK1vpXJg0LBHHozK39G%2BbbCYiL72UJ4jyYT49Wq%2FetDMW3imygv0MesQWp5Dk8ju0j%2FdJJrBSRbOiGFNNbFThPFnIRTBPHAYHcOW6VO8A95lBdj7rupB0WPTmOvtxpeWjMiWYxdG%2B0uGZQhm%2FUEsmJo2v3Mr8TruXtLiRrDY%2FicjbuJbEB5ROG0m7ZPuvl5dSjLRluGaZIMUsMYsP9uh17NHY%2FryxcsvixCIYLhN1%2FC%2Bp8ewDEnymGmZsdvfa6%2FMLCJBe9QZM6MhYc44M38d2MT5jdXY4tObMjqS66TvrOvgNTXjBSruaSpXBnk3PathuhSoE6Ks5LVpKUwJxWG%2FFAPDDC1vq%2FBjqkAbGwO1Wr%2Fiq%2BDurf44jHamJHcrD%2BznCbZctxvZ%2Fyhg0ekU4fTA1QPPMi5PWzG48eP%2Fv0VB9lDI%2FOPsfnUsK5X9Du%2FiRl7lKWEQlrWv6ycPhYl0wnYabP6TnoJTJJWlDTARNtzsNxUTpue%2FTdFroC0iopXyyCM57e%2BJwjJVUv6qrwht9t%2F2EwV%2BfIpehefQXGYN%2F2uOfUL9Gc0KgYArkVXgbZdgpb&X-Amz-Signature=459e20dfc2261f9aaa6a2f65ad5764f91c323b7e097e0e1e0f70cff9d735b9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
