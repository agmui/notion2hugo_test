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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOFQPZ6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DddCkjgO90Il5MD4m%2Bg5jB17FZsYgcYNsCdCiU%2F3iwIhANjy%2Bx70fs9cSvvPFGEF6AeP71Jf8nYNnIcJE5AU7Rz0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwhXhz%2BEFlrICGwVPEq3AO8KEF7%2Fld7peNfgDqs%2F%2FcQyPZSsyz%2FCBUG9cmd%2BF9omPaBjAQAcQKznocI6ZdA9IDWNGmaa2pBMIVqqyr%2FEOgsrNyZz1ibN3eGlbFtflZaSp1lUm2ptNv%2FaG7%2BKOttipMf%2FTthoumKitKvVatljSqrZWHB1ETRuAvxFLbekxtFqydsz045Iaxq5vVpJfRavoX9AuE9cxCapG3jPiDgqQag61b3d7Et1BsTcuebypz7FFvLfpg3K0b%2BfYuzxyftsEkPUoaGg60bhPD%2BhOs0RXreosIrBTYOMKKNXHEEXczBh2FZEuSUg7QZzRRgRMOMLDV0pcfqEvN0vQRicWq8mehG0q5RgsYjXH3rmA0jvmTzNlF9ULtomt7PuT5VFQna2wkz%2Fut4wCK6FwI%2Be3Qc4Sqjmm%2BPZZ8mNUUqjOg5JRwNp34izw99XCiou5mY0WLAcR6zmB8kTUT3cAOuB98mVmhGWCliCaoVvurDMBsCvneSW6c9a%2BnS9rE6cyQ7ILvtIt98%2BNmTF1jYyHwuudPXWXMfnE46%2FNpgIALPGJJX5kYelD9F6%2F99%2FL1tHyV%2BZI1W4Nq0jVyU0%2FEitx7O1VcDxdP9ooALUpn%2FB7z%2F%2FYBLhHjN8aJP0DCnmfaOV%2FAoCjCTrI6%2FBjqkAQV5kBymOA2WfWbHO5vCB%2F2OKfkBnSCl4U9MpAiRNKdOgWfFp7tJ3r1ESl4IFN9Kk1kXAccB0MMo6zT16p8UvAVcyLx1fPQ2IWmIhW6GzLvNRPTTTbC9cEGv%2FDX9gbzDXjWg7HWCz%2B24P%2F43Smsuk9JmUMsZL6kt3Zx%2B7PXn%2FKX39k86iWPS9dod9RP0Ehs1z%2BTrJcE5PVLHMsu4z%2Fa%2F9%2FlFtwGt&X-Amz-Signature=04a8c3366f88f9d8f73373e205b55dbc400ff58c7d551d50f4c8772c4ed53580&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOFQPZ6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DddCkjgO90Il5MD4m%2Bg5jB17FZsYgcYNsCdCiU%2F3iwIhANjy%2Bx70fs9cSvvPFGEF6AeP71Jf8nYNnIcJE5AU7Rz0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwhXhz%2BEFlrICGwVPEq3AO8KEF7%2Fld7peNfgDqs%2F%2FcQyPZSsyz%2FCBUG9cmd%2BF9omPaBjAQAcQKznocI6ZdA9IDWNGmaa2pBMIVqqyr%2FEOgsrNyZz1ibN3eGlbFtflZaSp1lUm2ptNv%2FaG7%2BKOttipMf%2FTthoumKitKvVatljSqrZWHB1ETRuAvxFLbekxtFqydsz045Iaxq5vVpJfRavoX9AuE9cxCapG3jPiDgqQag61b3d7Et1BsTcuebypz7FFvLfpg3K0b%2BfYuzxyftsEkPUoaGg60bhPD%2BhOs0RXreosIrBTYOMKKNXHEEXczBh2FZEuSUg7QZzRRgRMOMLDV0pcfqEvN0vQRicWq8mehG0q5RgsYjXH3rmA0jvmTzNlF9ULtomt7PuT5VFQna2wkz%2Fut4wCK6FwI%2Be3Qc4Sqjmm%2BPZZ8mNUUqjOg5JRwNp34izw99XCiou5mY0WLAcR6zmB8kTUT3cAOuB98mVmhGWCliCaoVvurDMBsCvneSW6c9a%2BnS9rE6cyQ7ILvtIt98%2BNmTF1jYyHwuudPXWXMfnE46%2FNpgIALPGJJX5kYelD9F6%2F99%2FL1tHyV%2BZI1W4Nq0jVyU0%2FEitx7O1VcDxdP9ooALUpn%2FB7z%2F%2FYBLhHjN8aJP0DCnmfaOV%2FAoCjCTrI6%2FBjqkAQV5kBymOA2WfWbHO5vCB%2F2OKfkBnSCl4U9MpAiRNKdOgWfFp7tJ3r1ESl4IFN9Kk1kXAccB0MMo6zT16p8UvAVcyLx1fPQ2IWmIhW6GzLvNRPTTTbC9cEGv%2FDX9gbzDXjWg7HWCz%2B24P%2F43Smsuk9JmUMsZL6kt3Zx%2B7PXn%2FKX39k86iWPS9dod9RP0Ehs1z%2BTrJcE5PVLHMsu4z%2Fa%2F9%2FlFtwGt&X-Amz-Signature=ea74ebdf4d7746b546f3974406ce1a689cf25287a287401a6f775d9b81563bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOFQPZ6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DddCkjgO90Il5MD4m%2Bg5jB17FZsYgcYNsCdCiU%2F3iwIhANjy%2Bx70fs9cSvvPFGEF6AeP71Jf8nYNnIcJE5AU7Rz0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwhXhz%2BEFlrICGwVPEq3AO8KEF7%2Fld7peNfgDqs%2F%2FcQyPZSsyz%2FCBUG9cmd%2BF9omPaBjAQAcQKznocI6ZdA9IDWNGmaa2pBMIVqqyr%2FEOgsrNyZz1ibN3eGlbFtflZaSp1lUm2ptNv%2FaG7%2BKOttipMf%2FTthoumKitKvVatljSqrZWHB1ETRuAvxFLbekxtFqydsz045Iaxq5vVpJfRavoX9AuE9cxCapG3jPiDgqQag61b3d7Et1BsTcuebypz7FFvLfpg3K0b%2BfYuzxyftsEkPUoaGg60bhPD%2BhOs0RXreosIrBTYOMKKNXHEEXczBh2FZEuSUg7QZzRRgRMOMLDV0pcfqEvN0vQRicWq8mehG0q5RgsYjXH3rmA0jvmTzNlF9ULtomt7PuT5VFQna2wkz%2Fut4wCK6FwI%2Be3Qc4Sqjmm%2BPZZ8mNUUqjOg5JRwNp34izw99XCiou5mY0WLAcR6zmB8kTUT3cAOuB98mVmhGWCliCaoVvurDMBsCvneSW6c9a%2BnS9rE6cyQ7ILvtIt98%2BNmTF1jYyHwuudPXWXMfnE46%2FNpgIALPGJJX5kYelD9F6%2F99%2FL1tHyV%2BZI1W4Nq0jVyU0%2FEitx7O1VcDxdP9ooALUpn%2FB7z%2F%2FYBLhHjN8aJP0DCnmfaOV%2FAoCjCTrI6%2FBjqkAQV5kBymOA2WfWbHO5vCB%2F2OKfkBnSCl4U9MpAiRNKdOgWfFp7tJ3r1ESl4IFN9Kk1kXAccB0MMo6zT16p8UvAVcyLx1fPQ2IWmIhW6GzLvNRPTTTbC9cEGv%2FDX9gbzDXjWg7HWCz%2B24P%2F43Smsuk9JmUMsZL6kt3Zx%2B7PXn%2FKX39k86iWPS9dod9RP0Ehs1z%2BTrJcE5PVLHMsu4z%2Fa%2F9%2FlFtwGt&X-Amz-Signature=e9e66b73b467610e6f24ad6538f13da711d43db20352dc06174f71707ca93e79&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOFQPZ6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DddCkjgO90Il5MD4m%2Bg5jB17FZsYgcYNsCdCiU%2F3iwIhANjy%2Bx70fs9cSvvPFGEF6AeP71Jf8nYNnIcJE5AU7Rz0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwhXhz%2BEFlrICGwVPEq3AO8KEF7%2Fld7peNfgDqs%2F%2FcQyPZSsyz%2FCBUG9cmd%2BF9omPaBjAQAcQKznocI6ZdA9IDWNGmaa2pBMIVqqyr%2FEOgsrNyZz1ibN3eGlbFtflZaSp1lUm2ptNv%2FaG7%2BKOttipMf%2FTthoumKitKvVatljSqrZWHB1ETRuAvxFLbekxtFqydsz045Iaxq5vVpJfRavoX9AuE9cxCapG3jPiDgqQag61b3d7Et1BsTcuebypz7FFvLfpg3K0b%2BfYuzxyftsEkPUoaGg60bhPD%2BhOs0RXreosIrBTYOMKKNXHEEXczBh2FZEuSUg7QZzRRgRMOMLDV0pcfqEvN0vQRicWq8mehG0q5RgsYjXH3rmA0jvmTzNlF9ULtomt7PuT5VFQna2wkz%2Fut4wCK6FwI%2Be3Qc4Sqjmm%2BPZZ8mNUUqjOg5JRwNp34izw99XCiou5mY0WLAcR6zmB8kTUT3cAOuB98mVmhGWCliCaoVvurDMBsCvneSW6c9a%2BnS9rE6cyQ7ILvtIt98%2BNmTF1jYyHwuudPXWXMfnE46%2FNpgIALPGJJX5kYelD9F6%2F99%2FL1tHyV%2BZI1W4Nq0jVyU0%2FEitx7O1VcDxdP9ooALUpn%2FB7z%2F%2FYBLhHjN8aJP0DCnmfaOV%2FAoCjCTrI6%2FBjqkAQV5kBymOA2WfWbHO5vCB%2F2OKfkBnSCl4U9MpAiRNKdOgWfFp7tJ3r1ESl4IFN9Kk1kXAccB0MMo6zT16p8UvAVcyLx1fPQ2IWmIhW6GzLvNRPTTTbC9cEGv%2FDX9gbzDXjWg7HWCz%2B24P%2F43Smsuk9JmUMsZL6kt3Zx%2B7PXn%2FKX39k86iWPS9dod9RP0Ehs1z%2BTrJcE5PVLHMsu4z%2Fa%2F9%2FlFtwGt&X-Amz-Signature=abb56fef65b85fee2320951a3fe6e7bbc339ad68a4b8c9936687bdc1b579b6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOFQPZ6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DddCkjgO90Il5MD4m%2Bg5jB17FZsYgcYNsCdCiU%2F3iwIhANjy%2Bx70fs9cSvvPFGEF6AeP71Jf8nYNnIcJE5AU7Rz0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwhXhz%2BEFlrICGwVPEq3AO8KEF7%2Fld7peNfgDqs%2F%2FcQyPZSsyz%2FCBUG9cmd%2BF9omPaBjAQAcQKznocI6ZdA9IDWNGmaa2pBMIVqqyr%2FEOgsrNyZz1ibN3eGlbFtflZaSp1lUm2ptNv%2FaG7%2BKOttipMf%2FTthoumKitKvVatljSqrZWHB1ETRuAvxFLbekxtFqydsz045Iaxq5vVpJfRavoX9AuE9cxCapG3jPiDgqQag61b3d7Et1BsTcuebypz7FFvLfpg3K0b%2BfYuzxyftsEkPUoaGg60bhPD%2BhOs0RXreosIrBTYOMKKNXHEEXczBh2FZEuSUg7QZzRRgRMOMLDV0pcfqEvN0vQRicWq8mehG0q5RgsYjXH3rmA0jvmTzNlF9ULtomt7PuT5VFQna2wkz%2Fut4wCK6FwI%2Be3Qc4Sqjmm%2BPZZ8mNUUqjOg5JRwNp34izw99XCiou5mY0WLAcR6zmB8kTUT3cAOuB98mVmhGWCliCaoVvurDMBsCvneSW6c9a%2BnS9rE6cyQ7ILvtIt98%2BNmTF1jYyHwuudPXWXMfnE46%2FNpgIALPGJJX5kYelD9F6%2F99%2FL1tHyV%2BZI1W4Nq0jVyU0%2FEitx7O1VcDxdP9ooALUpn%2FB7z%2F%2FYBLhHjN8aJP0DCnmfaOV%2FAoCjCTrI6%2FBjqkAQV5kBymOA2WfWbHO5vCB%2F2OKfkBnSCl4U9MpAiRNKdOgWfFp7tJ3r1ESl4IFN9Kk1kXAccB0MMo6zT16p8UvAVcyLx1fPQ2IWmIhW6GzLvNRPTTTbC9cEGv%2FDX9gbzDXjWg7HWCz%2B24P%2F43Smsuk9JmUMsZL6kt3Zx%2B7PXn%2FKX39k86iWPS9dod9RP0Ehs1z%2BTrJcE5PVLHMsu4z%2Fa%2F9%2FlFtwGt&X-Amz-Signature=cdfb14790f0ca490c7fb94ecda71f98e8e563f8a315bec6266037bcd2c0cfed6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOFQPZ6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DddCkjgO90Il5MD4m%2Bg5jB17FZsYgcYNsCdCiU%2F3iwIhANjy%2Bx70fs9cSvvPFGEF6AeP71Jf8nYNnIcJE5AU7Rz0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwhXhz%2BEFlrICGwVPEq3AO8KEF7%2Fld7peNfgDqs%2F%2FcQyPZSsyz%2FCBUG9cmd%2BF9omPaBjAQAcQKznocI6ZdA9IDWNGmaa2pBMIVqqyr%2FEOgsrNyZz1ibN3eGlbFtflZaSp1lUm2ptNv%2FaG7%2BKOttipMf%2FTthoumKitKvVatljSqrZWHB1ETRuAvxFLbekxtFqydsz045Iaxq5vVpJfRavoX9AuE9cxCapG3jPiDgqQag61b3d7Et1BsTcuebypz7FFvLfpg3K0b%2BfYuzxyftsEkPUoaGg60bhPD%2BhOs0RXreosIrBTYOMKKNXHEEXczBh2FZEuSUg7QZzRRgRMOMLDV0pcfqEvN0vQRicWq8mehG0q5RgsYjXH3rmA0jvmTzNlF9ULtomt7PuT5VFQna2wkz%2Fut4wCK6FwI%2Be3Qc4Sqjmm%2BPZZ8mNUUqjOg5JRwNp34izw99XCiou5mY0WLAcR6zmB8kTUT3cAOuB98mVmhGWCliCaoVvurDMBsCvneSW6c9a%2BnS9rE6cyQ7ILvtIt98%2BNmTF1jYyHwuudPXWXMfnE46%2FNpgIALPGJJX5kYelD9F6%2F99%2FL1tHyV%2BZI1W4Nq0jVyU0%2FEitx7O1VcDxdP9ooALUpn%2FB7z%2F%2FYBLhHjN8aJP0DCnmfaOV%2FAoCjCTrI6%2FBjqkAQV5kBymOA2WfWbHO5vCB%2F2OKfkBnSCl4U9MpAiRNKdOgWfFp7tJ3r1ESl4IFN9Kk1kXAccB0MMo6zT16p8UvAVcyLx1fPQ2IWmIhW6GzLvNRPTTTbC9cEGv%2FDX9gbzDXjWg7HWCz%2B24P%2F43Smsuk9JmUMsZL6kt3Zx%2B7PXn%2FKX39k86iWPS9dod9RP0Ehs1z%2BTrJcE5PVLHMsu4z%2Fa%2F9%2FlFtwGt&X-Amz-Signature=b7653ceb0e89c7a87a6726434fef6b829c77e194fa64da4ec1fb2ba2827c5149&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVOFQPZ6%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3DddCkjgO90Il5MD4m%2Bg5jB17FZsYgcYNsCdCiU%2F3iwIhANjy%2Bx70fs9cSvvPFGEF6AeP71Jf8nYNnIcJE5AU7Rz0Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwhXhz%2BEFlrICGwVPEq3AO8KEF7%2Fld7peNfgDqs%2F%2FcQyPZSsyz%2FCBUG9cmd%2BF9omPaBjAQAcQKznocI6ZdA9IDWNGmaa2pBMIVqqyr%2FEOgsrNyZz1ibN3eGlbFtflZaSp1lUm2ptNv%2FaG7%2BKOttipMf%2FTthoumKitKvVatljSqrZWHB1ETRuAvxFLbekxtFqydsz045Iaxq5vVpJfRavoX9AuE9cxCapG3jPiDgqQag61b3d7Et1BsTcuebypz7FFvLfpg3K0b%2BfYuzxyftsEkPUoaGg60bhPD%2BhOs0RXreosIrBTYOMKKNXHEEXczBh2FZEuSUg7QZzRRgRMOMLDV0pcfqEvN0vQRicWq8mehG0q5RgsYjXH3rmA0jvmTzNlF9ULtomt7PuT5VFQna2wkz%2Fut4wCK6FwI%2Be3Qc4Sqjmm%2BPZZ8mNUUqjOg5JRwNp34izw99XCiou5mY0WLAcR6zmB8kTUT3cAOuB98mVmhGWCliCaoVvurDMBsCvneSW6c9a%2BnS9rE6cyQ7ILvtIt98%2BNmTF1jYyHwuudPXWXMfnE46%2FNpgIALPGJJX5kYelD9F6%2F99%2FL1tHyV%2BZI1W4Nq0jVyU0%2FEitx7O1VcDxdP9ooALUpn%2FB7z%2F%2FYBLhHjN8aJP0DCnmfaOV%2FAoCjCTrI6%2FBjqkAQV5kBymOA2WfWbHO5vCB%2F2OKfkBnSCl4U9MpAiRNKdOgWfFp7tJ3r1ESl4IFN9Kk1kXAccB0MMo6zT16p8UvAVcyLx1fPQ2IWmIhW6GzLvNRPTTTbC9cEGv%2FDX9gbzDXjWg7HWCz%2B24P%2F43Smsuk9JmUMsZL6kt3Zx%2B7PXn%2FKX39k86iWPS9dod9RP0Ehs1z%2BTrJcE5PVLHMsu4z%2Fa%2F9%2FlFtwGt&X-Amz-Signature=1963a43d6ffc2dad1be6bf9e2781ec737ca3f0e66f1dd79ad40dce5db3e7b7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
