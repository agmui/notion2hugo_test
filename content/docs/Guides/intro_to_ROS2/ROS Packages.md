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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4ZKVAL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGQeLUs3G9CFrEg090BVEHw%2Fera%2B7Vqudl5M%2BsY2QcFhAiB2bza8T%2FL3brMXHD%2FUU3DxWWo6h7XF3MgcYZWPBBqS5yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94EqbOgBQBMW%2F%2BzjKtwDComft3C2s9CcyCjH0SQ0wlOMHI1V42y4GcTAZEEii3U76t0xySFl2qwzVKWw9SiVj4hCyfw7syILKFem99KBx5zM94D%2B1UeWjaf%2BleqykblhkkgTfpbsTOGyA1YEBzEH2zAPxmVj8M0p0qvrTSam5Eo6gHydzeXt5syxnYtopahQheXEfFI1qP%2B0FlFUmxrD6hUjCarWBI1hdHlb4%2FnzEjst4DNjIF1DowvyKZvgSjCj2VUAHql0%2FdKVtj1U4HkkP5p4vcspq9KUG7AveFJDGGEbseKEnuDFsQu%2BtvpfodlVKGfZRdif6RnDKYgsj9LSlzPIVs4m66e2NGqVq3tpmArr%2B6%2FKV9d8%2B5drx1%2BGVJDaR01swnmFhZ2spK5LE0qDm14aMz4NXGBgAJTACUYh2xMXHM9Mq%2BWPJgKKyCiY0VtqJ6e0H9RQQGvWPkGUoBENW7DB121r9Is%2FSRNPtcMyjvDZGuBQPkYStGBdMPF5B3lCLeq07%2Bq0gcUXETCRS4Ghm9tRXzMWmeFa0tN%2FOdzCU1w9LFX3wbU8Zx3oWf460g0oTj1bwIeTNAUq7w5seEtjxnqtiym98Nnej8DkLCn6HvTUN2o2cMarcz%2BbUhLZE1Y5JDH7juW6FtTz1hwwgM3%2FvgY6pgFPGk%2Fh%2Fz6TAhRw8rYxKEQgbm83QJt2NQZgOyIIUQ5TVMgDdpcq%2FIOh%2Bqi%2FXxrx7lzsO6vbIJ6VCmvtJ32z%2BhFIJyorDHGt8Ble3IkOBiQT2Fbzk3eYs9NCPTLao3coN422yCctVN26nLyDy%2F05P4pJ5rZdycj2xmJl%2BALWb7ql%2Bo%2FbbXwE0r42rQqizrcTwNEzFSfhxCq2z%2Brh40AkVOGcX8p58BZT&X-Amz-Signature=b07f842e276b82419673857c80420545de7e3c65ed4ff6b73bf74af9e165bcdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4ZKVAL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGQeLUs3G9CFrEg090BVEHw%2Fera%2B7Vqudl5M%2BsY2QcFhAiB2bza8T%2FL3brMXHD%2FUU3DxWWo6h7XF3MgcYZWPBBqS5yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94EqbOgBQBMW%2F%2BzjKtwDComft3C2s9CcyCjH0SQ0wlOMHI1V42y4GcTAZEEii3U76t0xySFl2qwzVKWw9SiVj4hCyfw7syILKFem99KBx5zM94D%2B1UeWjaf%2BleqykblhkkgTfpbsTOGyA1YEBzEH2zAPxmVj8M0p0qvrTSam5Eo6gHydzeXt5syxnYtopahQheXEfFI1qP%2B0FlFUmxrD6hUjCarWBI1hdHlb4%2FnzEjst4DNjIF1DowvyKZvgSjCj2VUAHql0%2FdKVtj1U4HkkP5p4vcspq9KUG7AveFJDGGEbseKEnuDFsQu%2BtvpfodlVKGfZRdif6RnDKYgsj9LSlzPIVs4m66e2NGqVq3tpmArr%2B6%2FKV9d8%2B5drx1%2BGVJDaR01swnmFhZ2spK5LE0qDm14aMz4NXGBgAJTACUYh2xMXHM9Mq%2BWPJgKKyCiY0VtqJ6e0H9RQQGvWPkGUoBENW7DB121r9Is%2FSRNPtcMyjvDZGuBQPkYStGBdMPF5B3lCLeq07%2Bq0gcUXETCRS4Ghm9tRXzMWmeFa0tN%2FOdzCU1w9LFX3wbU8Zx3oWf460g0oTj1bwIeTNAUq7w5seEtjxnqtiym98Nnej8DkLCn6HvTUN2o2cMarcz%2BbUhLZE1Y5JDH7juW6FtTz1hwwgM3%2FvgY6pgFPGk%2Fh%2Fz6TAhRw8rYxKEQgbm83QJt2NQZgOyIIUQ5TVMgDdpcq%2FIOh%2Bqi%2FXxrx7lzsO6vbIJ6VCmvtJ32z%2BhFIJyorDHGt8Ble3IkOBiQT2Fbzk3eYs9NCPTLao3coN422yCctVN26nLyDy%2F05P4pJ5rZdycj2xmJl%2BALWb7ql%2Bo%2FbbXwE0r42rQqizrcTwNEzFSfhxCq2z%2Brh40AkVOGcX8p58BZT&X-Amz-Signature=2ee0c5771604d0b82bbb977aa71295eb40b12cb2e17b62ff0373d7e6cece3403&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4ZKVAL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGQeLUs3G9CFrEg090BVEHw%2Fera%2B7Vqudl5M%2BsY2QcFhAiB2bza8T%2FL3brMXHD%2FUU3DxWWo6h7XF3MgcYZWPBBqS5yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94EqbOgBQBMW%2F%2BzjKtwDComft3C2s9CcyCjH0SQ0wlOMHI1V42y4GcTAZEEii3U76t0xySFl2qwzVKWw9SiVj4hCyfw7syILKFem99KBx5zM94D%2B1UeWjaf%2BleqykblhkkgTfpbsTOGyA1YEBzEH2zAPxmVj8M0p0qvrTSam5Eo6gHydzeXt5syxnYtopahQheXEfFI1qP%2B0FlFUmxrD6hUjCarWBI1hdHlb4%2FnzEjst4DNjIF1DowvyKZvgSjCj2VUAHql0%2FdKVtj1U4HkkP5p4vcspq9KUG7AveFJDGGEbseKEnuDFsQu%2BtvpfodlVKGfZRdif6RnDKYgsj9LSlzPIVs4m66e2NGqVq3tpmArr%2B6%2FKV9d8%2B5drx1%2BGVJDaR01swnmFhZ2spK5LE0qDm14aMz4NXGBgAJTACUYh2xMXHM9Mq%2BWPJgKKyCiY0VtqJ6e0H9RQQGvWPkGUoBENW7DB121r9Is%2FSRNPtcMyjvDZGuBQPkYStGBdMPF5B3lCLeq07%2Bq0gcUXETCRS4Ghm9tRXzMWmeFa0tN%2FOdzCU1w9LFX3wbU8Zx3oWf460g0oTj1bwIeTNAUq7w5seEtjxnqtiym98Nnej8DkLCn6HvTUN2o2cMarcz%2BbUhLZE1Y5JDH7juW6FtTz1hwwgM3%2FvgY6pgFPGk%2Fh%2Fz6TAhRw8rYxKEQgbm83QJt2NQZgOyIIUQ5TVMgDdpcq%2FIOh%2Bqi%2FXxrx7lzsO6vbIJ6VCmvtJ32z%2BhFIJyorDHGt8Ble3IkOBiQT2Fbzk3eYs9NCPTLao3coN422yCctVN26nLyDy%2F05P4pJ5rZdycj2xmJl%2BALWb7ql%2Bo%2FbbXwE0r42rQqizrcTwNEzFSfhxCq2z%2Brh40AkVOGcX8p58BZT&X-Amz-Signature=524c5e6011d2f6b6162765248c5612a5bbc2b631ee3b559b0600bfbef73b5c23&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4ZKVAL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGQeLUs3G9CFrEg090BVEHw%2Fera%2B7Vqudl5M%2BsY2QcFhAiB2bza8T%2FL3brMXHD%2FUU3DxWWo6h7XF3MgcYZWPBBqS5yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94EqbOgBQBMW%2F%2BzjKtwDComft3C2s9CcyCjH0SQ0wlOMHI1V42y4GcTAZEEii3U76t0xySFl2qwzVKWw9SiVj4hCyfw7syILKFem99KBx5zM94D%2B1UeWjaf%2BleqykblhkkgTfpbsTOGyA1YEBzEH2zAPxmVj8M0p0qvrTSam5Eo6gHydzeXt5syxnYtopahQheXEfFI1qP%2B0FlFUmxrD6hUjCarWBI1hdHlb4%2FnzEjst4DNjIF1DowvyKZvgSjCj2VUAHql0%2FdKVtj1U4HkkP5p4vcspq9KUG7AveFJDGGEbseKEnuDFsQu%2BtvpfodlVKGfZRdif6RnDKYgsj9LSlzPIVs4m66e2NGqVq3tpmArr%2B6%2FKV9d8%2B5drx1%2BGVJDaR01swnmFhZ2spK5LE0qDm14aMz4NXGBgAJTACUYh2xMXHM9Mq%2BWPJgKKyCiY0VtqJ6e0H9RQQGvWPkGUoBENW7DB121r9Is%2FSRNPtcMyjvDZGuBQPkYStGBdMPF5B3lCLeq07%2Bq0gcUXETCRS4Ghm9tRXzMWmeFa0tN%2FOdzCU1w9LFX3wbU8Zx3oWf460g0oTj1bwIeTNAUq7w5seEtjxnqtiym98Nnej8DkLCn6HvTUN2o2cMarcz%2BbUhLZE1Y5JDH7juW6FtTz1hwwgM3%2FvgY6pgFPGk%2Fh%2Fz6TAhRw8rYxKEQgbm83QJt2NQZgOyIIUQ5TVMgDdpcq%2FIOh%2Bqi%2FXxrx7lzsO6vbIJ6VCmvtJ32z%2BhFIJyorDHGt8Ble3IkOBiQT2Fbzk3eYs9NCPTLao3coN422yCctVN26nLyDy%2F05P4pJ5rZdycj2xmJl%2BALWb7ql%2Bo%2FbbXwE0r42rQqizrcTwNEzFSfhxCq2z%2Brh40AkVOGcX8p58BZT&X-Amz-Signature=ff14e08ce8ca832ead7e949be53c5e7ff4956243bf81d7092e9af66e54fe6683&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4ZKVAL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGQeLUs3G9CFrEg090BVEHw%2Fera%2B7Vqudl5M%2BsY2QcFhAiB2bza8T%2FL3brMXHD%2FUU3DxWWo6h7XF3MgcYZWPBBqS5yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94EqbOgBQBMW%2F%2BzjKtwDComft3C2s9CcyCjH0SQ0wlOMHI1V42y4GcTAZEEii3U76t0xySFl2qwzVKWw9SiVj4hCyfw7syILKFem99KBx5zM94D%2B1UeWjaf%2BleqykblhkkgTfpbsTOGyA1YEBzEH2zAPxmVj8M0p0qvrTSam5Eo6gHydzeXt5syxnYtopahQheXEfFI1qP%2B0FlFUmxrD6hUjCarWBI1hdHlb4%2FnzEjst4DNjIF1DowvyKZvgSjCj2VUAHql0%2FdKVtj1U4HkkP5p4vcspq9KUG7AveFJDGGEbseKEnuDFsQu%2BtvpfodlVKGfZRdif6RnDKYgsj9LSlzPIVs4m66e2NGqVq3tpmArr%2B6%2FKV9d8%2B5drx1%2BGVJDaR01swnmFhZ2spK5LE0qDm14aMz4NXGBgAJTACUYh2xMXHM9Mq%2BWPJgKKyCiY0VtqJ6e0H9RQQGvWPkGUoBENW7DB121r9Is%2FSRNPtcMyjvDZGuBQPkYStGBdMPF5B3lCLeq07%2Bq0gcUXETCRS4Ghm9tRXzMWmeFa0tN%2FOdzCU1w9LFX3wbU8Zx3oWf460g0oTj1bwIeTNAUq7w5seEtjxnqtiym98Nnej8DkLCn6HvTUN2o2cMarcz%2BbUhLZE1Y5JDH7juW6FtTz1hwwgM3%2FvgY6pgFPGk%2Fh%2Fz6TAhRw8rYxKEQgbm83QJt2NQZgOyIIUQ5TVMgDdpcq%2FIOh%2Bqi%2FXxrx7lzsO6vbIJ6VCmvtJ32z%2BhFIJyorDHGt8Ble3IkOBiQT2Fbzk3eYs9NCPTLao3coN422yCctVN26nLyDy%2F05P4pJ5rZdycj2xmJl%2BALWb7ql%2Bo%2FbbXwE0r42rQqizrcTwNEzFSfhxCq2z%2Brh40AkVOGcX8p58BZT&X-Amz-Signature=a3311166eae916374639bcd864dbd27024fe0659bb88b5a6a1c7e65a5a8afe9f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4ZKVAL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGQeLUs3G9CFrEg090BVEHw%2Fera%2B7Vqudl5M%2BsY2QcFhAiB2bza8T%2FL3brMXHD%2FUU3DxWWo6h7XF3MgcYZWPBBqS5yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94EqbOgBQBMW%2F%2BzjKtwDComft3C2s9CcyCjH0SQ0wlOMHI1V42y4GcTAZEEii3U76t0xySFl2qwzVKWw9SiVj4hCyfw7syILKFem99KBx5zM94D%2B1UeWjaf%2BleqykblhkkgTfpbsTOGyA1YEBzEH2zAPxmVj8M0p0qvrTSam5Eo6gHydzeXt5syxnYtopahQheXEfFI1qP%2B0FlFUmxrD6hUjCarWBI1hdHlb4%2FnzEjst4DNjIF1DowvyKZvgSjCj2VUAHql0%2FdKVtj1U4HkkP5p4vcspq9KUG7AveFJDGGEbseKEnuDFsQu%2BtvpfodlVKGfZRdif6RnDKYgsj9LSlzPIVs4m66e2NGqVq3tpmArr%2B6%2FKV9d8%2B5drx1%2BGVJDaR01swnmFhZ2spK5LE0qDm14aMz4NXGBgAJTACUYh2xMXHM9Mq%2BWPJgKKyCiY0VtqJ6e0H9RQQGvWPkGUoBENW7DB121r9Is%2FSRNPtcMyjvDZGuBQPkYStGBdMPF5B3lCLeq07%2Bq0gcUXETCRS4Ghm9tRXzMWmeFa0tN%2FOdzCU1w9LFX3wbU8Zx3oWf460g0oTj1bwIeTNAUq7w5seEtjxnqtiym98Nnej8DkLCn6HvTUN2o2cMarcz%2BbUhLZE1Y5JDH7juW6FtTz1hwwgM3%2FvgY6pgFPGk%2Fh%2Fz6TAhRw8rYxKEQgbm83QJt2NQZgOyIIUQ5TVMgDdpcq%2FIOh%2Bqi%2FXxrx7lzsO6vbIJ6VCmvtJ32z%2BhFIJyorDHGt8Ble3IkOBiQT2Fbzk3eYs9NCPTLao3coN422yCctVN26nLyDy%2F05P4pJ5rZdycj2xmJl%2BALWb7ql%2Bo%2FbbXwE0r42rQqizrcTwNEzFSfhxCq2z%2Brh40AkVOGcX8p58BZT&X-Amz-Signature=452ceda87a006fc9df31689db90dd16e38ad1132755b5f26b034785f92be2815&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4ZKVAL%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGQeLUs3G9CFrEg090BVEHw%2Fera%2B7Vqudl5M%2BsY2QcFhAiB2bza8T%2FL3brMXHD%2FUU3DxWWo6h7XF3MgcYZWPBBqS5yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94EqbOgBQBMW%2F%2BzjKtwDComft3C2s9CcyCjH0SQ0wlOMHI1V42y4GcTAZEEii3U76t0xySFl2qwzVKWw9SiVj4hCyfw7syILKFem99KBx5zM94D%2B1UeWjaf%2BleqykblhkkgTfpbsTOGyA1YEBzEH2zAPxmVj8M0p0qvrTSam5Eo6gHydzeXt5syxnYtopahQheXEfFI1qP%2B0FlFUmxrD6hUjCarWBI1hdHlb4%2FnzEjst4DNjIF1DowvyKZvgSjCj2VUAHql0%2FdKVtj1U4HkkP5p4vcspq9KUG7AveFJDGGEbseKEnuDFsQu%2BtvpfodlVKGfZRdif6RnDKYgsj9LSlzPIVs4m66e2NGqVq3tpmArr%2B6%2FKV9d8%2B5drx1%2BGVJDaR01swnmFhZ2spK5LE0qDm14aMz4NXGBgAJTACUYh2xMXHM9Mq%2BWPJgKKyCiY0VtqJ6e0H9RQQGvWPkGUoBENW7DB121r9Is%2FSRNPtcMyjvDZGuBQPkYStGBdMPF5B3lCLeq07%2Bq0gcUXETCRS4Ghm9tRXzMWmeFa0tN%2FOdzCU1w9LFX3wbU8Zx3oWf460g0oTj1bwIeTNAUq7w5seEtjxnqtiym98Nnej8DkLCn6HvTUN2o2cMarcz%2BbUhLZE1Y5JDH7juW6FtTz1hwwgM3%2FvgY6pgFPGk%2Fh%2Fz6TAhRw8rYxKEQgbm83QJt2NQZgOyIIUQ5TVMgDdpcq%2FIOh%2Bqi%2FXxrx7lzsO6vbIJ6VCmvtJ32z%2BhFIJyorDHGt8Ble3IkOBiQT2Fbzk3eYs9NCPTLao3coN422yCctVN26nLyDy%2F05P4pJ5rZdycj2xmJl%2BALWb7ql%2Bo%2FbbXwE0r42rQqizrcTwNEzFSfhxCq2z%2Brh40AkVOGcX8p58BZT&X-Amz-Signature=28f097c2b1d4f07da9ce8b81d02cf6df466fca777a16876754e56a5eea0895dd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
