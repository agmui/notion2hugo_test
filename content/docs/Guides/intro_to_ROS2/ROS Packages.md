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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMTVLT2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1V%2FCylG0c%2FrlAYGdOXy9N2yMDGy5qbhgxsgnIf05IgIhAJL6hvCzz2uaQl27L4ULxIie61G08ptLkhsprg0w6cfrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzezwvT104QlprmpxMq3AO4z7qUOMX2rwpf6DiJU8YZj%2FJeRt3CeGeCZcuB%2BRanciTiC%2BtuysdBWqSlDT34RbPVF%2BRm43dDKf7DE%2B2yPCHBmg%2BhFApY0dvx8a%2FoX3CpfJBVbw0AfzCEcaClg9yiESqUxq00SO4zkLrunBrGicMvdgLvYZReblIyMLpOzdlG2CAc%2BncjqhZPR8IfGcoXTSE1WCC4TEchEt%2B0n5MheQBliAoQ965wP0X4spJRdwjAbFGsQJzGClcXaxqh4mNjCODKJ6u%2BgpPZDzeyQW%2BAzMhi6YzqYIm1Odcfxtupgmuad%2B1jpAXUuoBA%2FNhP5pRbxiGAMkUlNF3Qd59g4hPDDMkqUOcJN%2FmG%2BGjJBxXbFN64tx6J12TRXHarXQkvJRcOcBdjj%2BSBtEjIHxaOCaipmDafAUaxnpBBeAQ8D1qN14CgF8LJOOLMGtyXzKPujl4PR7UzEoUMl7sUlIo739K9vOXcIIuOVVDyTkMjTQAEDk6AB66QEZUYmEOAJCOnKzocwqD72Oxt%2BZtXIaGIOlEPLhXRzHSGo7IR6i18RuovFMKWzlgHNFu18imBozQf6OyefxdznLMNRZmvRBs3fivgtlRBbxfLtWmznFsikThQU7j1ak%2B5CpCGLNEyPVMKIzDu7tW%2BBjqkAdMwmaXUrcbKV77ZZmivq96izQn4R43uZrztJ3lJLBLF1EfkR5KQsKETda%2FXEuhsPMonK5s8XpDxqXE6O7RWHEAoVDFU7qxXCLSqgBtS99XPosMgnr2GUxJMOF5LiQywq3IM%2FhsUthYnWC2qlVN4As9zubwyz31ITZ2nWJVBw8mTv5BUKobLAPWK0KEaAT%2FkNm6L%2BgPqgXGMIHk45ZvVl6ZDocer&X-Amz-Signature=7c19cbdbfad040e605fd538c97b1988210b1a1128514e36f764a385bca26ebda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMTVLT2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1V%2FCylG0c%2FrlAYGdOXy9N2yMDGy5qbhgxsgnIf05IgIhAJL6hvCzz2uaQl27L4ULxIie61G08ptLkhsprg0w6cfrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzezwvT104QlprmpxMq3AO4z7qUOMX2rwpf6DiJU8YZj%2FJeRt3CeGeCZcuB%2BRanciTiC%2BtuysdBWqSlDT34RbPVF%2BRm43dDKf7DE%2B2yPCHBmg%2BhFApY0dvx8a%2FoX3CpfJBVbw0AfzCEcaClg9yiESqUxq00SO4zkLrunBrGicMvdgLvYZReblIyMLpOzdlG2CAc%2BncjqhZPR8IfGcoXTSE1WCC4TEchEt%2B0n5MheQBliAoQ965wP0X4spJRdwjAbFGsQJzGClcXaxqh4mNjCODKJ6u%2BgpPZDzeyQW%2BAzMhi6YzqYIm1Odcfxtupgmuad%2B1jpAXUuoBA%2FNhP5pRbxiGAMkUlNF3Qd59g4hPDDMkqUOcJN%2FmG%2BGjJBxXbFN64tx6J12TRXHarXQkvJRcOcBdjj%2BSBtEjIHxaOCaipmDafAUaxnpBBeAQ8D1qN14CgF8LJOOLMGtyXzKPujl4PR7UzEoUMl7sUlIo739K9vOXcIIuOVVDyTkMjTQAEDk6AB66QEZUYmEOAJCOnKzocwqD72Oxt%2BZtXIaGIOlEPLhXRzHSGo7IR6i18RuovFMKWzlgHNFu18imBozQf6OyefxdznLMNRZmvRBs3fivgtlRBbxfLtWmznFsikThQU7j1ak%2B5CpCGLNEyPVMKIzDu7tW%2BBjqkAdMwmaXUrcbKV77ZZmivq96izQn4R43uZrztJ3lJLBLF1EfkR5KQsKETda%2FXEuhsPMonK5s8XpDxqXE6O7RWHEAoVDFU7qxXCLSqgBtS99XPosMgnr2GUxJMOF5LiQywq3IM%2FhsUthYnWC2qlVN4As9zubwyz31ITZ2nWJVBw8mTv5BUKobLAPWK0KEaAT%2FkNm6L%2BgPqgXGMIHk45ZvVl6ZDocer&X-Amz-Signature=4607f16cf8772d1ac6342489c5b9a04bf56912448a5c3bdd3d9258759e5f3d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMTVLT2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1V%2FCylG0c%2FrlAYGdOXy9N2yMDGy5qbhgxsgnIf05IgIhAJL6hvCzz2uaQl27L4ULxIie61G08ptLkhsprg0w6cfrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzezwvT104QlprmpxMq3AO4z7qUOMX2rwpf6DiJU8YZj%2FJeRt3CeGeCZcuB%2BRanciTiC%2BtuysdBWqSlDT34RbPVF%2BRm43dDKf7DE%2B2yPCHBmg%2BhFApY0dvx8a%2FoX3CpfJBVbw0AfzCEcaClg9yiESqUxq00SO4zkLrunBrGicMvdgLvYZReblIyMLpOzdlG2CAc%2BncjqhZPR8IfGcoXTSE1WCC4TEchEt%2B0n5MheQBliAoQ965wP0X4spJRdwjAbFGsQJzGClcXaxqh4mNjCODKJ6u%2BgpPZDzeyQW%2BAzMhi6YzqYIm1Odcfxtupgmuad%2B1jpAXUuoBA%2FNhP5pRbxiGAMkUlNF3Qd59g4hPDDMkqUOcJN%2FmG%2BGjJBxXbFN64tx6J12TRXHarXQkvJRcOcBdjj%2BSBtEjIHxaOCaipmDafAUaxnpBBeAQ8D1qN14CgF8LJOOLMGtyXzKPujl4PR7UzEoUMl7sUlIo739K9vOXcIIuOVVDyTkMjTQAEDk6AB66QEZUYmEOAJCOnKzocwqD72Oxt%2BZtXIaGIOlEPLhXRzHSGo7IR6i18RuovFMKWzlgHNFu18imBozQf6OyefxdznLMNRZmvRBs3fivgtlRBbxfLtWmznFsikThQU7j1ak%2B5CpCGLNEyPVMKIzDu7tW%2BBjqkAdMwmaXUrcbKV77ZZmivq96izQn4R43uZrztJ3lJLBLF1EfkR5KQsKETda%2FXEuhsPMonK5s8XpDxqXE6O7RWHEAoVDFU7qxXCLSqgBtS99XPosMgnr2GUxJMOF5LiQywq3IM%2FhsUthYnWC2qlVN4As9zubwyz31ITZ2nWJVBw8mTv5BUKobLAPWK0KEaAT%2FkNm6L%2BgPqgXGMIHk45ZvVl6ZDocer&X-Amz-Signature=a1f6ce527941db984181402a94b854b1147294a445a90137ae546f92809901f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMTVLT2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1V%2FCylG0c%2FrlAYGdOXy9N2yMDGy5qbhgxsgnIf05IgIhAJL6hvCzz2uaQl27L4ULxIie61G08ptLkhsprg0w6cfrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzezwvT104QlprmpxMq3AO4z7qUOMX2rwpf6DiJU8YZj%2FJeRt3CeGeCZcuB%2BRanciTiC%2BtuysdBWqSlDT34RbPVF%2BRm43dDKf7DE%2B2yPCHBmg%2BhFApY0dvx8a%2FoX3CpfJBVbw0AfzCEcaClg9yiESqUxq00SO4zkLrunBrGicMvdgLvYZReblIyMLpOzdlG2CAc%2BncjqhZPR8IfGcoXTSE1WCC4TEchEt%2B0n5MheQBliAoQ965wP0X4spJRdwjAbFGsQJzGClcXaxqh4mNjCODKJ6u%2BgpPZDzeyQW%2BAzMhi6YzqYIm1Odcfxtupgmuad%2B1jpAXUuoBA%2FNhP5pRbxiGAMkUlNF3Qd59g4hPDDMkqUOcJN%2FmG%2BGjJBxXbFN64tx6J12TRXHarXQkvJRcOcBdjj%2BSBtEjIHxaOCaipmDafAUaxnpBBeAQ8D1qN14CgF8LJOOLMGtyXzKPujl4PR7UzEoUMl7sUlIo739K9vOXcIIuOVVDyTkMjTQAEDk6AB66QEZUYmEOAJCOnKzocwqD72Oxt%2BZtXIaGIOlEPLhXRzHSGo7IR6i18RuovFMKWzlgHNFu18imBozQf6OyefxdznLMNRZmvRBs3fivgtlRBbxfLtWmznFsikThQU7j1ak%2B5CpCGLNEyPVMKIzDu7tW%2BBjqkAdMwmaXUrcbKV77ZZmivq96izQn4R43uZrztJ3lJLBLF1EfkR5KQsKETda%2FXEuhsPMonK5s8XpDxqXE6O7RWHEAoVDFU7qxXCLSqgBtS99XPosMgnr2GUxJMOF5LiQywq3IM%2FhsUthYnWC2qlVN4As9zubwyz31ITZ2nWJVBw8mTv5BUKobLAPWK0KEaAT%2FkNm6L%2BgPqgXGMIHk45ZvVl6ZDocer&X-Amz-Signature=e62c361d2a60e67d9b05837ec83df4ee99d9a3aae896a0a6ed4175921cbd3e49&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMTVLT2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1V%2FCylG0c%2FrlAYGdOXy9N2yMDGy5qbhgxsgnIf05IgIhAJL6hvCzz2uaQl27L4ULxIie61G08ptLkhsprg0w6cfrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzezwvT104QlprmpxMq3AO4z7qUOMX2rwpf6DiJU8YZj%2FJeRt3CeGeCZcuB%2BRanciTiC%2BtuysdBWqSlDT34RbPVF%2BRm43dDKf7DE%2B2yPCHBmg%2BhFApY0dvx8a%2FoX3CpfJBVbw0AfzCEcaClg9yiESqUxq00SO4zkLrunBrGicMvdgLvYZReblIyMLpOzdlG2CAc%2BncjqhZPR8IfGcoXTSE1WCC4TEchEt%2B0n5MheQBliAoQ965wP0X4spJRdwjAbFGsQJzGClcXaxqh4mNjCODKJ6u%2BgpPZDzeyQW%2BAzMhi6YzqYIm1Odcfxtupgmuad%2B1jpAXUuoBA%2FNhP5pRbxiGAMkUlNF3Qd59g4hPDDMkqUOcJN%2FmG%2BGjJBxXbFN64tx6J12TRXHarXQkvJRcOcBdjj%2BSBtEjIHxaOCaipmDafAUaxnpBBeAQ8D1qN14CgF8LJOOLMGtyXzKPujl4PR7UzEoUMl7sUlIo739K9vOXcIIuOVVDyTkMjTQAEDk6AB66QEZUYmEOAJCOnKzocwqD72Oxt%2BZtXIaGIOlEPLhXRzHSGo7IR6i18RuovFMKWzlgHNFu18imBozQf6OyefxdznLMNRZmvRBs3fivgtlRBbxfLtWmznFsikThQU7j1ak%2B5CpCGLNEyPVMKIzDu7tW%2BBjqkAdMwmaXUrcbKV77ZZmivq96izQn4R43uZrztJ3lJLBLF1EfkR5KQsKETda%2FXEuhsPMonK5s8XpDxqXE6O7RWHEAoVDFU7qxXCLSqgBtS99XPosMgnr2GUxJMOF5LiQywq3IM%2FhsUthYnWC2qlVN4As9zubwyz31ITZ2nWJVBw8mTv5BUKobLAPWK0KEaAT%2FkNm6L%2BgPqgXGMIHk45ZvVl6ZDocer&X-Amz-Signature=3498c42aa2f8bf5d1aeb6406af5acd16cfeea424bf92415f115108d07671261e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMTVLT2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1V%2FCylG0c%2FrlAYGdOXy9N2yMDGy5qbhgxsgnIf05IgIhAJL6hvCzz2uaQl27L4ULxIie61G08ptLkhsprg0w6cfrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzezwvT104QlprmpxMq3AO4z7qUOMX2rwpf6DiJU8YZj%2FJeRt3CeGeCZcuB%2BRanciTiC%2BtuysdBWqSlDT34RbPVF%2BRm43dDKf7DE%2B2yPCHBmg%2BhFApY0dvx8a%2FoX3CpfJBVbw0AfzCEcaClg9yiESqUxq00SO4zkLrunBrGicMvdgLvYZReblIyMLpOzdlG2CAc%2BncjqhZPR8IfGcoXTSE1WCC4TEchEt%2B0n5MheQBliAoQ965wP0X4spJRdwjAbFGsQJzGClcXaxqh4mNjCODKJ6u%2BgpPZDzeyQW%2BAzMhi6YzqYIm1Odcfxtupgmuad%2B1jpAXUuoBA%2FNhP5pRbxiGAMkUlNF3Qd59g4hPDDMkqUOcJN%2FmG%2BGjJBxXbFN64tx6J12TRXHarXQkvJRcOcBdjj%2BSBtEjIHxaOCaipmDafAUaxnpBBeAQ8D1qN14CgF8LJOOLMGtyXzKPujl4PR7UzEoUMl7sUlIo739K9vOXcIIuOVVDyTkMjTQAEDk6AB66QEZUYmEOAJCOnKzocwqD72Oxt%2BZtXIaGIOlEPLhXRzHSGo7IR6i18RuovFMKWzlgHNFu18imBozQf6OyefxdznLMNRZmvRBs3fivgtlRBbxfLtWmznFsikThQU7j1ak%2B5CpCGLNEyPVMKIzDu7tW%2BBjqkAdMwmaXUrcbKV77ZZmivq96izQn4R43uZrztJ3lJLBLF1EfkR5KQsKETda%2FXEuhsPMonK5s8XpDxqXE6O7RWHEAoVDFU7qxXCLSqgBtS99XPosMgnr2GUxJMOF5LiQywq3IM%2FhsUthYnWC2qlVN4As9zubwyz31ITZ2nWJVBw8mTv5BUKobLAPWK0KEaAT%2FkNm6L%2BgPqgXGMIHk45ZvVl6ZDocer&X-Amz-Signature=ff6b8ca7ff8956614d7da0e05b1200ea4e51c763f6a0821af76a434a8cacadd9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMTVLT2%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw1V%2FCylG0c%2FrlAYGdOXy9N2yMDGy5qbhgxsgnIf05IgIhAJL6hvCzz2uaQl27L4ULxIie61G08ptLkhsprg0w6cfrKv8DCBYQABoMNjM3NDIzMTgzODA1IgzezwvT104QlprmpxMq3AO4z7qUOMX2rwpf6DiJU8YZj%2FJeRt3CeGeCZcuB%2BRanciTiC%2BtuysdBWqSlDT34RbPVF%2BRm43dDKf7DE%2B2yPCHBmg%2BhFApY0dvx8a%2FoX3CpfJBVbw0AfzCEcaClg9yiESqUxq00SO4zkLrunBrGicMvdgLvYZReblIyMLpOzdlG2CAc%2BncjqhZPR8IfGcoXTSE1WCC4TEchEt%2B0n5MheQBliAoQ965wP0X4spJRdwjAbFGsQJzGClcXaxqh4mNjCODKJ6u%2BgpPZDzeyQW%2BAzMhi6YzqYIm1Odcfxtupgmuad%2B1jpAXUuoBA%2FNhP5pRbxiGAMkUlNF3Qd59g4hPDDMkqUOcJN%2FmG%2BGjJBxXbFN64tx6J12TRXHarXQkvJRcOcBdjj%2BSBtEjIHxaOCaipmDafAUaxnpBBeAQ8D1qN14CgF8LJOOLMGtyXzKPujl4PR7UzEoUMl7sUlIo739K9vOXcIIuOVVDyTkMjTQAEDk6AB66QEZUYmEOAJCOnKzocwqD72Oxt%2BZtXIaGIOlEPLhXRzHSGo7IR6i18RuovFMKWzlgHNFu18imBozQf6OyefxdznLMNRZmvRBs3fivgtlRBbxfLtWmznFsikThQU7j1ak%2B5CpCGLNEyPVMKIzDu7tW%2BBjqkAdMwmaXUrcbKV77ZZmivq96izQn4R43uZrztJ3lJLBLF1EfkR5KQsKETda%2FXEuhsPMonK5s8XpDxqXE6O7RWHEAoVDFU7qxXCLSqgBtS99XPosMgnr2GUxJMOF5LiQywq3IM%2FhsUthYnWC2qlVN4As9zubwyz31ITZ2nWJVBw8mTv5BUKobLAPWK0KEaAT%2FkNm6L%2BgPqgXGMIHk45ZvVl6ZDocer&X-Amz-Signature=7d5a5da9c29adb1a43417b8295aeff1458e309e44ef224e8dde09e580ec57503&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
