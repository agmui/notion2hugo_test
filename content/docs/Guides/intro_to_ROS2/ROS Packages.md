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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMIISH4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Okyqe8BlQJhIvKhUpNOl%2B7hw7ljefXRc2P0dKrtBzAiEAm0DKc%2FjlGbBNotESd3tsvpIxf7HY41VVlXfGgILnPWQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGSSCdvXG3HvDUNYCrcAwFJSaFNt5RGLWBrnaDkVrDGj%2BtqsY%2BfyYqEbG88G3kmg3NX2Zya5%2Bu%2BjgGT5FBPeR6CV9B8Da2ECNEdur0XdNgeyXDcRNu1jYeQhFCG9sz1YDLs7kkmT886HDnpjzbhqOMFhd0XogE4YC0pKps3zg9UF8b%2BNLZhPN19Nf%2Ba%2FUkiwJhd8bYxUI2eAY2mOTNzC08OlM3vYSd%2FdPc8q3zVp4sIrzIolWKrz77U6nNp%2FcOh43mAHfNnxb84XuLg%2FSnwEGFZ7FRViBJc7BVpz0CiJbVtrNZYjFAZGvOWEjKwL9a5wOgdKEqBtCAJe%2BFVzClZOASysZ8j844TBb5zJ1Fxdh3DAHmmqZ9kEHyem1hVwMYL4zo0sLiLFkvLDYKL85KwiDZLAYYLAiHy6QpSIOQgFNqvbadAJcpu%2FEefexcrjRJxVnU%2F16CTipymtQ1FEQQXYTlprsOtR8QpfFVKirZQQN2d2bXJ%2BpbU5YVAb8wrLN8TTalg3jwMQGYEyE67%2FmejKBG%2BbDr734HlI1gajc6LDbN3%2B8sTwNlKx3mk936chuvmbOIaBJvmFxa1P%2F7aizQQYUZCn7viQtNkNHarDe9k%2Fb2GkN5cAivgf83T9HCunU7JgXnRNjMUdgX0two%2FMJjlmcIGOqUBMkTgPaWA397HPr3YeczywT0%2FD8UI1PQk1roOF%2FGtIxPuLOEu6VrMizgAoFkl9b1jaUmM2Txjh3Gz2l8MOiEjZVdxIpd41eCfVOZc6jHHZsNKwYBUg%2BkI2taVnZ9PkTtyJl%2BN4oGlkoMzawYx6bjeCOZI6kQjTgIGims1mCOu40oaGtrMcXiUcsSAD8O6CkjglbImXbtq%2F%2BFSHi5%2BRh5calSj1DfS&X-Amz-Signature=fcd8b731e3e10f2c23f3ee5c312d75b60c98998a4fe499025ec4ce6b8d180362&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMIISH4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Okyqe8BlQJhIvKhUpNOl%2B7hw7ljefXRc2P0dKrtBzAiEAm0DKc%2FjlGbBNotESd3tsvpIxf7HY41VVlXfGgILnPWQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGSSCdvXG3HvDUNYCrcAwFJSaFNt5RGLWBrnaDkVrDGj%2BtqsY%2BfyYqEbG88G3kmg3NX2Zya5%2Bu%2BjgGT5FBPeR6CV9B8Da2ECNEdur0XdNgeyXDcRNu1jYeQhFCG9sz1YDLs7kkmT886HDnpjzbhqOMFhd0XogE4YC0pKps3zg9UF8b%2BNLZhPN19Nf%2Ba%2FUkiwJhd8bYxUI2eAY2mOTNzC08OlM3vYSd%2FdPc8q3zVp4sIrzIolWKrz77U6nNp%2FcOh43mAHfNnxb84XuLg%2FSnwEGFZ7FRViBJc7BVpz0CiJbVtrNZYjFAZGvOWEjKwL9a5wOgdKEqBtCAJe%2BFVzClZOASysZ8j844TBb5zJ1Fxdh3DAHmmqZ9kEHyem1hVwMYL4zo0sLiLFkvLDYKL85KwiDZLAYYLAiHy6QpSIOQgFNqvbadAJcpu%2FEefexcrjRJxVnU%2F16CTipymtQ1FEQQXYTlprsOtR8QpfFVKirZQQN2d2bXJ%2BpbU5YVAb8wrLN8TTalg3jwMQGYEyE67%2FmejKBG%2BbDr734HlI1gajc6LDbN3%2B8sTwNlKx3mk936chuvmbOIaBJvmFxa1P%2F7aizQQYUZCn7viQtNkNHarDe9k%2Fb2GkN5cAivgf83T9HCunU7JgXnRNjMUdgX0two%2FMJjlmcIGOqUBMkTgPaWA397HPr3YeczywT0%2FD8UI1PQk1roOF%2FGtIxPuLOEu6VrMizgAoFkl9b1jaUmM2Txjh3Gz2l8MOiEjZVdxIpd41eCfVOZc6jHHZsNKwYBUg%2BkI2taVnZ9PkTtyJl%2BN4oGlkoMzawYx6bjeCOZI6kQjTgIGims1mCOu40oaGtrMcXiUcsSAD8O6CkjglbImXbtq%2F%2BFSHi5%2BRh5calSj1DfS&X-Amz-Signature=dcbc0afd18f94c51ae3327a613167138aa16e9fada812758ad27675b9dad5997&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMIISH4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Okyqe8BlQJhIvKhUpNOl%2B7hw7ljefXRc2P0dKrtBzAiEAm0DKc%2FjlGbBNotESd3tsvpIxf7HY41VVlXfGgILnPWQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGSSCdvXG3HvDUNYCrcAwFJSaFNt5RGLWBrnaDkVrDGj%2BtqsY%2BfyYqEbG88G3kmg3NX2Zya5%2Bu%2BjgGT5FBPeR6CV9B8Da2ECNEdur0XdNgeyXDcRNu1jYeQhFCG9sz1YDLs7kkmT886HDnpjzbhqOMFhd0XogE4YC0pKps3zg9UF8b%2BNLZhPN19Nf%2Ba%2FUkiwJhd8bYxUI2eAY2mOTNzC08OlM3vYSd%2FdPc8q3zVp4sIrzIolWKrz77U6nNp%2FcOh43mAHfNnxb84XuLg%2FSnwEGFZ7FRViBJc7BVpz0CiJbVtrNZYjFAZGvOWEjKwL9a5wOgdKEqBtCAJe%2BFVzClZOASysZ8j844TBb5zJ1Fxdh3DAHmmqZ9kEHyem1hVwMYL4zo0sLiLFkvLDYKL85KwiDZLAYYLAiHy6QpSIOQgFNqvbadAJcpu%2FEefexcrjRJxVnU%2F16CTipymtQ1FEQQXYTlprsOtR8QpfFVKirZQQN2d2bXJ%2BpbU5YVAb8wrLN8TTalg3jwMQGYEyE67%2FmejKBG%2BbDr734HlI1gajc6LDbN3%2B8sTwNlKx3mk936chuvmbOIaBJvmFxa1P%2F7aizQQYUZCn7viQtNkNHarDe9k%2Fb2GkN5cAivgf83T9HCunU7JgXnRNjMUdgX0two%2FMJjlmcIGOqUBMkTgPaWA397HPr3YeczywT0%2FD8UI1PQk1roOF%2FGtIxPuLOEu6VrMizgAoFkl9b1jaUmM2Txjh3Gz2l8MOiEjZVdxIpd41eCfVOZc6jHHZsNKwYBUg%2BkI2taVnZ9PkTtyJl%2BN4oGlkoMzawYx6bjeCOZI6kQjTgIGims1mCOu40oaGtrMcXiUcsSAD8O6CkjglbImXbtq%2F%2BFSHi5%2BRh5calSj1DfS&X-Amz-Signature=6320521af49ba54fd3d7520bb5cf5eb0f24b891c9d6d756708f27ff32bc6a15a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMIISH4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Okyqe8BlQJhIvKhUpNOl%2B7hw7ljefXRc2P0dKrtBzAiEAm0DKc%2FjlGbBNotESd3tsvpIxf7HY41VVlXfGgILnPWQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGSSCdvXG3HvDUNYCrcAwFJSaFNt5RGLWBrnaDkVrDGj%2BtqsY%2BfyYqEbG88G3kmg3NX2Zya5%2Bu%2BjgGT5FBPeR6CV9B8Da2ECNEdur0XdNgeyXDcRNu1jYeQhFCG9sz1YDLs7kkmT886HDnpjzbhqOMFhd0XogE4YC0pKps3zg9UF8b%2BNLZhPN19Nf%2Ba%2FUkiwJhd8bYxUI2eAY2mOTNzC08OlM3vYSd%2FdPc8q3zVp4sIrzIolWKrz77U6nNp%2FcOh43mAHfNnxb84XuLg%2FSnwEGFZ7FRViBJc7BVpz0CiJbVtrNZYjFAZGvOWEjKwL9a5wOgdKEqBtCAJe%2BFVzClZOASysZ8j844TBb5zJ1Fxdh3DAHmmqZ9kEHyem1hVwMYL4zo0sLiLFkvLDYKL85KwiDZLAYYLAiHy6QpSIOQgFNqvbadAJcpu%2FEefexcrjRJxVnU%2F16CTipymtQ1FEQQXYTlprsOtR8QpfFVKirZQQN2d2bXJ%2BpbU5YVAb8wrLN8TTalg3jwMQGYEyE67%2FmejKBG%2BbDr734HlI1gajc6LDbN3%2B8sTwNlKx3mk936chuvmbOIaBJvmFxa1P%2F7aizQQYUZCn7viQtNkNHarDe9k%2Fb2GkN5cAivgf83T9HCunU7JgXnRNjMUdgX0two%2FMJjlmcIGOqUBMkTgPaWA397HPr3YeczywT0%2FD8UI1PQk1roOF%2FGtIxPuLOEu6VrMizgAoFkl9b1jaUmM2Txjh3Gz2l8MOiEjZVdxIpd41eCfVOZc6jHHZsNKwYBUg%2BkI2taVnZ9PkTtyJl%2BN4oGlkoMzawYx6bjeCOZI6kQjTgIGims1mCOu40oaGtrMcXiUcsSAD8O6CkjglbImXbtq%2F%2BFSHi5%2BRh5calSj1DfS&X-Amz-Signature=21ee8c91d2a56111ca1651ca7aeb74273b855dd699a79d0c324dc1bb15972165&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMIISH4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Okyqe8BlQJhIvKhUpNOl%2B7hw7ljefXRc2P0dKrtBzAiEAm0DKc%2FjlGbBNotESd3tsvpIxf7HY41VVlXfGgILnPWQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGSSCdvXG3HvDUNYCrcAwFJSaFNt5RGLWBrnaDkVrDGj%2BtqsY%2BfyYqEbG88G3kmg3NX2Zya5%2Bu%2BjgGT5FBPeR6CV9B8Da2ECNEdur0XdNgeyXDcRNu1jYeQhFCG9sz1YDLs7kkmT886HDnpjzbhqOMFhd0XogE4YC0pKps3zg9UF8b%2BNLZhPN19Nf%2Ba%2FUkiwJhd8bYxUI2eAY2mOTNzC08OlM3vYSd%2FdPc8q3zVp4sIrzIolWKrz77U6nNp%2FcOh43mAHfNnxb84XuLg%2FSnwEGFZ7FRViBJc7BVpz0CiJbVtrNZYjFAZGvOWEjKwL9a5wOgdKEqBtCAJe%2BFVzClZOASysZ8j844TBb5zJ1Fxdh3DAHmmqZ9kEHyem1hVwMYL4zo0sLiLFkvLDYKL85KwiDZLAYYLAiHy6QpSIOQgFNqvbadAJcpu%2FEefexcrjRJxVnU%2F16CTipymtQ1FEQQXYTlprsOtR8QpfFVKirZQQN2d2bXJ%2BpbU5YVAb8wrLN8TTalg3jwMQGYEyE67%2FmejKBG%2BbDr734HlI1gajc6LDbN3%2B8sTwNlKx3mk936chuvmbOIaBJvmFxa1P%2F7aizQQYUZCn7viQtNkNHarDe9k%2Fb2GkN5cAivgf83T9HCunU7JgXnRNjMUdgX0two%2FMJjlmcIGOqUBMkTgPaWA397HPr3YeczywT0%2FD8UI1PQk1roOF%2FGtIxPuLOEu6VrMizgAoFkl9b1jaUmM2Txjh3Gz2l8MOiEjZVdxIpd41eCfVOZc6jHHZsNKwYBUg%2BkI2taVnZ9PkTtyJl%2BN4oGlkoMzawYx6bjeCOZI6kQjTgIGims1mCOu40oaGtrMcXiUcsSAD8O6CkjglbImXbtq%2F%2BFSHi5%2BRh5calSj1DfS&X-Amz-Signature=c6778e3522ab89f400067c615260a745a64d01d9abb0387d357398d730719c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMIISH4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Okyqe8BlQJhIvKhUpNOl%2B7hw7ljefXRc2P0dKrtBzAiEAm0DKc%2FjlGbBNotESd3tsvpIxf7HY41VVlXfGgILnPWQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGSSCdvXG3HvDUNYCrcAwFJSaFNt5RGLWBrnaDkVrDGj%2BtqsY%2BfyYqEbG88G3kmg3NX2Zya5%2Bu%2BjgGT5FBPeR6CV9B8Da2ECNEdur0XdNgeyXDcRNu1jYeQhFCG9sz1YDLs7kkmT886HDnpjzbhqOMFhd0XogE4YC0pKps3zg9UF8b%2BNLZhPN19Nf%2Ba%2FUkiwJhd8bYxUI2eAY2mOTNzC08OlM3vYSd%2FdPc8q3zVp4sIrzIolWKrz77U6nNp%2FcOh43mAHfNnxb84XuLg%2FSnwEGFZ7FRViBJc7BVpz0CiJbVtrNZYjFAZGvOWEjKwL9a5wOgdKEqBtCAJe%2BFVzClZOASysZ8j844TBb5zJ1Fxdh3DAHmmqZ9kEHyem1hVwMYL4zo0sLiLFkvLDYKL85KwiDZLAYYLAiHy6QpSIOQgFNqvbadAJcpu%2FEefexcrjRJxVnU%2F16CTipymtQ1FEQQXYTlprsOtR8QpfFVKirZQQN2d2bXJ%2BpbU5YVAb8wrLN8TTalg3jwMQGYEyE67%2FmejKBG%2BbDr734HlI1gajc6LDbN3%2B8sTwNlKx3mk936chuvmbOIaBJvmFxa1P%2F7aizQQYUZCn7viQtNkNHarDe9k%2Fb2GkN5cAivgf83T9HCunU7JgXnRNjMUdgX0two%2FMJjlmcIGOqUBMkTgPaWA397HPr3YeczywT0%2FD8UI1PQk1roOF%2FGtIxPuLOEu6VrMizgAoFkl9b1jaUmM2Txjh3Gz2l8MOiEjZVdxIpd41eCfVOZc6jHHZsNKwYBUg%2BkI2taVnZ9PkTtyJl%2BN4oGlkoMzawYx6bjeCOZI6kQjTgIGims1mCOu40oaGtrMcXiUcsSAD8O6CkjglbImXbtq%2F%2BFSHi5%2BRh5calSj1DfS&X-Amz-Signature=3ea55303e5802707dcb511ba2180ebc6ea569f42de4e5c1be4c55647a515ea81&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMIISH4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1Okyqe8BlQJhIvKhUpNOl%2B7hw7ljefXRc2P0dKrtBzAiEAm0DKc%2FjlGbBNotESd3tsvpIxf7HY41VVlXfGgILnPWQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGSSCdvXG3HvDUNYCrcAwFJSaFNt5RGLWBrnaDkVrDGj%2BtqsY%2BfyYqEbG88G3kmg3NX2Zya5%2Bu%2BjgGT5FBPeR6CV9B8Da2ECNEdur0XdNgeyXDcRNu1jYeQhFCG9sz1YDLs7kkmT886HDnpjzbhqOMFhd0XogE4YC0pKps3zg9UF8b%2BNLZhPN19Nf%2Ba%2FUkiwJhd8bYxUI2eAY2mOTNzC08OlM3vYSd%2FdPc8q3zVp4sIrzIolWKrz77U6nNp%2FcOh43mAHfNnxb84XuLg%2FSnwEGFZ7FRViBJc7BVpz0CiJbVtrNZYjFAZGvOWEjKwL9a5wOgdKEqBtCAJe%2BFVzClZOASysZ8j844TBb5zJ1Fxdh3DAHmmqZ9kEHyem1hVwMYL4zo0sLiLFkvLDYKL85KwiDZLAYYLAiHy6QpSIOQgFNqvbadAJcpu%2FEefexcrjRJxVnU%2F16CTipymtQ1FEQQXYTlprsOtR8QpfFVKirZQQN2d2bXJ%2BpbU5YVAb8wrLN8TTalg3jwMQGYEyE67%2FmejKBG%2BbDr734HlI1gajc6LDbN3%2B8sTwNlKx3mk936chuvmbOIaBJvmFxa1P%2F7aizQQYUZCn7viQtNkNHarDe9k%2Fb2GkN5cAivgf83T9HCunU7JgXnRNjMUdgX0two%2FMJjlmcIGOqUBMkTgPaWA397HPr3YeczywT0%2FD8UI1PQk1roOF%2FGtIxPuLOEu6VrMizgAoFkl9b1jaUmM2Txjh3Gz2l8MOiEjZVdxIpd41eCfVOZc6jHHZsNKwYBUg%2BkI2taVnZ9PkTtyJl%2BN4oGlkoMzawYx6bjeCOZI6kQjTgIGims1mCOu40oaGtrMcXiUcsSAD8O6CkjglbImXbtq%2F%2BFSHi5%2BRh5calSj1DfS&X-Amz-Signature=9c50bee8e5188f1d4eab108ec2cc3ef4d0ab216d84c8136436b48bdc858cd98e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
