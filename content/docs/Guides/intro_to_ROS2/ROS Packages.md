---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFJRX2Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAlOURy4WdndepLeXjr3EuRvTXSxHwL2xOSa5NWUwSQQAiEAlvdm5QYvIkYwBvHdbw2SbX92SZhbhJm3MmGef3%2FtPo0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF4S%2Bt4fNK3rZlnXhSrcA%2FGGDB9oBpk42mVv%2B6Nw68WD6aidjByRGqCBQ89mqDh2pmjiwqS%2B02vp6tAR7fdk7tE1GwDdCmcyfQGTf4oXUq9Bm%2B9QHU78kWBgFVC37MY3uuyXmJiKBFkRmphSI2bs0LI%2Bf407fOi2CBpYeRe1xNhzmKrS8RRIIhSg3q43XtV5sOsDqeBb3ZHAc88d8kUSKnzX3I31DSS%2BYlZrIGgt3qEvex8XRu7PnISr84JNumc3kFrWPTrHfekUyK0qQqH5NLRgK2D1xrVeTzr58S0GiHxwirTn9xI%2BmD6t4PdgrbNR24xkiZkV20wwHBAcPB4w7osIRhUW0S9hJOA6vCtLFgzOhFF7HlvpuM2i1U%2F2XePeUWKtQ0f7YzyNM%2BvBy4tSOUyL%2Bil3fiBh38%2FwuesxhafMflY77p2AnQOXsmVmF95Y2lvgr5Qy9gluLDIhdGp0KLpKFqg4i%2FR0%2BLscf%2FE7Sq0MNd7619l0r8Qdr89y80ay4P4U0GwqZgHM74MtlnUWviLbQ%2FbjmimBFfl0qd1DTDIqyY5HVwBB%2BVSAKvFMVANI3C%2BTqqx7LSMmVVRBwzPEopk2A%2F7m4FtjOiX9mcXgZjb8YrELYCaJtjJrP1YrEQnydmnXtVZNLkEP%2B8VUMMza%2FcQGOqUBgMgZN2eg5TPw9w4U6wDTwPvWdRETQ6VzjYyQ6KQ%2B%2F3tLVeXgaATULwO2t4NwPQjCu7XtGO9L6%2BY2B8%2F42%2BKgBl%2FCruCoIWxi5fBfbJhKPbZAa4y%2BytIacFhJYi2aNKJUKMfYU5lIKI0BscU5R2b7r2JsQbCI%2Fhrp3jpYMSYHBDsPiyBp1gZ4AIXopBRlP2HaoJ5nQ48oHtBmDd7cVqQRUdvPDqSe&X-Amz-Signature=aef49f5685a204ddc3f80a145baa88f9771975c4d5ea284832f31f09eca3edb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFJRX2Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAlOURy4WdndepLeXjr3EuRvTXSxHwL2xOSa5NWUwSQQAiEAlvdm5QYvIkYwBvHdbw2SbX92SZhbhJm3MmGef3%2FtPo0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF4S%2Bt4fNK3rZlnXhSrcA%2FGGDB9oBpk42mVv%2B6Nw68WD6aidjByRGqCBQ89mqDh2pmjiwqS%2B02vp6tAR7fdk7tE1GwDdCmcyfQGTf4oXUq9Bm%2B9QHU78kWBgFVC37MY3uuyXmJiKBFkRmphSI2bs0LI%2Bf407fOi2CBpYeRe1xNhzmKrS8RRIIhSg3q43XtV5sOsDqeBb3ZHAc88d8kUSKnzX3I31DSS%2BYlZrIGgt3qEvex8XRu7PnISr84JNumc3kFrWPTrHfekUyK0qQqH5NLRgK2D1xrVeTzr58S0GiHxwirTn9xI%2BmD6t4PdgrbNR24xkiZkV20wwHBAcPB4w7osIRhUW0S9hJOA6vCtLFgzOhFF7HlvpuM2i1U%2F2XePeUWKtQ0f7YzyNM%2BvBy4tSOUyL%2Bil3fiBh38%2FwuesxhafMflY77p2AnQOXsmVmF95Y2lvgr5Qy9gluLDIhdGp0KLpKFqg4i%2FR0%2BLscf%2FE7Sq0MNd7619l0r8Qdr89y80ay4P4U0GwqZgHM74MtlnUWviLbQ%2FbjmimBFfl0qd1DTDIqyY5HVwBB%2BVSAKvFMVANI3C%2BTqqx7LSMmVVRBwzPEopk2A%2F7m4FtjOiX9mcXgZjb8YrELYCaJtjJrP1YrEQnydmnXtVZNLkEP%2B8VUMMza%2FcQGOqUBgMgZN2eg5TPw9w4U6wDTwPvWdRETQ6VzjYyQ6KQ%2B%2F3tLVeXgaATULwO2t4NwPQjCu7XtGO9L6%2BY2B8%2F42%2BKgBl%2FCruCoIWxi5fBfbJhKPbZAa4y%2BytIacFhJYi2aNKJUKMfYU5lIKI0BscU5R2b7r2JsQbCI%2Fhrp3jpYMSYHBDsPiyBp1gZ4AIXopBRlP2HaoJ5nQ48oHtBmDd7cVqQRUdvPDqSe&X-Amz-Signature=90e22e189b1cabb02bb121cc4ba645cfdd302ff2137fd5ef65265fc63adceb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFJRX2Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAlOURy4WdndepLeXjr3EuRvTXSxHwL2xOSa5NWUwSQQAiEAlvdm5QYvIkYwBvHdbw2SbX92SZhbhJm3MmGef3%2FtPo0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF4S%2Bt4fNK3rZlnXhSrcA%2FGGDB9oBpk42mVv%2B6Nw68WD6aidjByRGqCBQ89mqDh2pmjiwqS%2B02vp6tAR7fdk7tE1GwDdCmcyfQGTf4oXUq9Bm%2B9QHU78kWBgFVC37MY3uuyXmJiKBFkRmphSI2bs0LI%2Bf407fOi2CBpYeRe1xNhzmKrS8RRIIhSg3q43XtV5sOsDqeBb3ZHAc88d8kUSKnzX3I31DSS%2BYlZrIGgt3qEvex8XRu7PnISr84JNumc3kFrWPTrHfekUyK0qQqH5NLRgK2D1xrVeTzr58S0GiHxwirTn9xI%2BmD6t4PdgrbNR24xkiZkV20wwHBAcPB4w7osIRhUW0S9hJOA6vCtLFgzOhFF7HlvpuM2i1U%2F2XePeUWKtQ0f7YzyNM%2BvBy4tSOUyL%2Bil3fiBh38%2FwuesxhafMflY77p2AnQOXsmVmF95Y2lvgr5Qy9gluLDIhdGp0KLpKFqg4i%2FR0%2BLscf%2FE7Sq0MNd7619l0r8Qdr89y80ay4P4U0GwqZgHM74MtlnUWviLbQ%2FbjmimBFfl0qd1DTDIqyY5HVwBB%2BVSAKvFMVANI3C%2BTqqx7LSMmVVRBwzPEopk2A%2F7m4FtjOiX9mcXgZjb8YrELYCaJtjJrP1YrEQnydmnXtVZNLkEP%2B8VUMMza%2FcQGOqUBgMgZN2eg5TPw9w4U6wDTwPvWdRETQ6VzjYyQ6KQ%2B%2F3tLVeXgaATULwO2t4NwPQjCu7XtGO9L6%2BY2B8%2F42%2BKgBl%2FCruCoIWxi5fBfbJhKPbZAa4y%2BytIacFhJYi2aNKJUKMfYU5lIKI0BscU5R2b7r2JsQbCI%2Fhrp3jpYMSYHBDsPiyBp1gZ4AIXopBRlP2HaoJ5nQ48oHtBmDd7cVqQRUdvPDqSe&X-Amz-Signature=307339cfe802e3da2f4eb639bad6a12d782c841ae29d6d5bcd865fc2aeb3a032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFJRX2Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAlOURy4WdndepLeXjr3EuRvTXSxHwL2xOSa5NWUwSQQAiEAlvdm5QYvIkYwBvHdbw2SbX92SZhbhJm3MmGef3%2FtPo0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF4S%2Bt4fNK3rZlnXhSrcA%2FGGDB9oBpk42mVv%2B6Nw68WD6aidjByRGqCBQ89mqDh2pmjiwqS%2B02vp6tAR7fdk7tE1GwDdCmcyfQGTf4oXUq9Bm%2B9QHU78kWBgFVC37MY3uuyXmJiKBFkRmphSI2bs0LI%2Bf407fOi2CBpYeRe1xNhzmKrS8RRIIhSg3q43XtV5sOsDqeBb3ZHAc88d8kUSKnzX3I31DSS%2BYlZrIGgt3qEvex8XRu7PnISr84JNumc3kFrWPTrHfekUyK0qQqH5NLRgK2D1xrVeTzr58S0GiHxwirTn9xI%2BmD6t4PdgrbNR24xkiZkV20wwHBAcPB4w7osIRhUW0S9hJOA6vCtLFgzOhFF7HlvpuM2i1U%2F2XePeUWKtQ0f7YzyNM%2BvBy4tSOUyL%2Bil3fiBh38%2FwuesxhafMflY77p2AnQOXsmVmF95Y2lvgr5Qy9gluLDIhdGp0KLpKFqg4i%2FR0%2BLscf%2FE7Sq0MNd7619l0r8Qdr89y80ay4P4U0GwqZgHM74MtlnUWviLbQ%2FbjmimBFfl0qd1DTDIqyY5HVwBB%2BVSAKvFMVANI3C%2BTqqx7LSMmVVRBwzPEopk2A%2F7m4FtjOiX9mcXgZjb8YrELYCaJtjJrP1YrEQnydmnXtVZNLkEP%2B8VUMMza%2FcQGOqUBgMgZN2eg5TPw9w4U6wDTwPvWdRETQ6VzjYyQ6KQ%2B%2F3tLVeXgaATULwO2t4NwPQjCu7XtGO9L6%2BY2B8%2F42%2BKgBl%2FCruCoIWxi5fBfbJhKPbZAa4y%2BytIacFhJYi2aNKJUKMfYU5lIKI0BscU5R2b7r2JsQbCI%2Fhrp3jpYMSYHBDsPiyBp1gZ4AIXopBRlP2HaoJ5nQ48oHtBmDd7cVqQRUdvPDqSe&X-Amz-Signature=a8c4244d0c4e109b0a06ce361c1a4788f5142001f0da3e0da5c41e827f0237c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFJRX2Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAlOURy4WdndepLeXjr3EuRvTXSxHwL2xOSa5NWUwSQQAiEAlvdm5QYvIkYwBvHdbw2SbX92SZhbhJm3MmGef3%2FtPo0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF4S%2Bt4fNK3rZlnXhSrcA%2FGGDB9oBpk42mVv%2B6Nw68WD6aidjByRGqCBQ89mqDh2pmjiwqS%2B02vp6tAR7fdk7tE1GwDdCmcyfQGTf4oXUq9Bm%2B9QHU78kWBgFVC37MY3uuyXmJiKBFkRmphSI2bs0LI%2Bf407fOi2CBpYeRe1xNhzmKrS8RRIIhSg3q43XtV5sOsDqeBb3ZHAc88d8kUSKnzX3I31DSS%2BYlZrIGgt3qEvex8XRu7PnISr84JNumc3kFrWPTrHfekUyK0qQqH5NLRgK2D1xrVeTzr58S0GiHxwirTn9xI%2BmD6t4PdgrbNR24xkiZkV20wwHBAcPB4w7osIRhUW0S9hJOA6vCtLFgzOhFF7HlvpuM2i1U%2F2XePeUWKtQ0f7YzyNM%2BvBy4tSOUyL%2Bil3fiBh38%2FwuesxhafMflY77p2AnQOXsmVmF95Y2lvgr5Qy9gluLDIhdGp0KLpKFqg4i%2FR0%2BLscf%2FE7Sq0MNd7619l0r8Qdr89y80ay4P4U0GwqZgHM74MtlnUWviLbQ%2FbjmimBFfl0qd1DTDIqyY5HVwBB%2BVSAKvFMVANI3C%2BTqqx7LSMmVVRBwzPEopk2A%2F7m4FtjOiX9mcXgZjb8YrELYCaJtjJrP1YrEQnydmnXtVZNLkEP%2B8VUMMza%2FcQGOqUBgMgZN2eg5TPw9w4U6wDTwPvWdRETQ6VzjYyQ6KQ%2B%2F3tLVeXgaATULwO2t4NwPQjCu7XtGO9L6%2BY2B8%2F42%2BKgBl%2FCruCoIWxi5fBfbJhKPbZAa4y%2BytIacFhJYi2aNKJUKMfYU5lIKI0BscU5R2b7r2JsQbCI%2Fhrp3jpYMSYHBDsPiyBp1gZ4AIXopBRlP2HaoJ5nQ48oHtBmDd7cVqQRUdvPDqSe&X-Amz-Signature=a1d6011bd476af880de75951e4041c801e306b9664c35bcc6dc9b7c61f7c349a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFJRX2Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAlOURy4WdndepLeXjr3EuRvTXSxHwL2xOSa5NWUwSQQAiEAlvdm5QYvIkYwBvHdbw2SbX92SZhbhJm3MmGef3%2FtPo0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF4S%2Bt4fNK3rZlnXhSrcA%2FGGDB9oBpk42mVv%2B6Nw68WD6aidjByRGqCBQ89mqDh2pmjiwqS%2B02vp6tAR7fdk7tE1GwDdCmcyfQGTf4oXUq9Bm%2B9QHU78kWBgFVC37MY3uuyXmJiKBFkRmphSI2bs0LI%2Bf407fOi2CBpYeRe1xNhzmKrS8RRIIhSg3q43XtV5sOsDqeBb3ZHAc88d8kUSKnzX3I31DSS%2BYlZrIGgt3qEvex8XRu7PnISr84JNumc3kFrWPTrHfekUyK0qQqH5NLRgK2D1xrVeTzr58S0GiHxwirTn9xI%2BmD6t4PdgrbNR24xkiZkV20wwHBAcPB4w7osIRhUW0S9hJOA6vCtLFgzOhFF7HlvpuM2i1U%2F2XePeUWKtQ0f7YzyNM%2BvBy4tSOUyL%2Bil3fiBh38%2FwuesxhafMflY77p2AnQOXsmVmF95Y2lvgr5Qy9gluLDIhdGp0KLpKFqg4i%2FR0%2BLscf%2FE7Sq0MNd7619l0r8Qdr89y80ay4P4U0GwqZgHM74MtlnUWviLbQ%2FbjmimBFfl0qd1DTDIqyY5HVwBB%2BVSAKvFMVANI3C%2BTqqx7LSMmVVRBwzPEopk2A%2F7m4FtjOiX9mcXgZjb8YrELYCaJtjJrP1YrEQnydmnXtVZNLkEP%2B8VUMMza%2FcQGOqUBgMgZN2eg5TPw9w4U6wDTwPvWdRETQ6VzjYyQ6KQ%2B%2F3tLVeXgaATULwO2t4NwPQjCu7XtGO9L6%2BY2B8%2F42%2BKgBl%2FCruCoIWxi5fBfbJhKPbZAa4y%2BytIacFhJYi2aNKJUKMfYU5lIKI0BscU5R2b7r2JsQbCI%2Fhrp3jpYMSYHBDsPiyBp1gZ4AIXopBRlP2HaoJ5nQ48oHtBmDd7cVqQRUdvPDqSe&X-Amz-Signature=1881382054c041d3c6bfe4ebe675b923c48f51bea3bdc5cc6ef4a98ea5ebe38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFJRX2Y%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAlOURy4WdndepLeXjr3EuRvTXSxHwL2xOSa5NWUwSQQAiEAlvdm5QYvIkYwBvHdbw2SbX92SZhbhJm3MmGef3%2FtPo0q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDF4S%2Bt4fNK3rZlnXhSrcA%2FGGDB9oBpk42mVv%2B6Nw68WD6aidjByRGqCBQ89mqDh2pmjiwqS%2B02vp6tAR7fdk7tE1GwDdCmcyfQGTf4oXUq9Bm%2B9QHU78kWBgFVC37MY3uuyXmJiKBFkRmphSI2bs0LI%2Bf407fOi2CBpYeRe1xNhzmKrS8RRIIhSg3q43XtV5sOsDqeBb3ZHAc88d8kUSKnzX3I31DSS%2BYlZrIGgt3qEvex8XRu7PnISr84JNumc3kFrWPTrHfekUyK0qQqH5NLRgK2D1xrVeTzr58S0GiHxwirTn9xI%2BmD6t4PdgrbNR24xkiZkV20wwHBAcPB4w7osIRhUW0S9hJOA6vCtLFgzOhFF7HlvpuM2i1U%2F2XePeUWKtQ0f7YzyNM%2BvBy4tSOUyL%2Bil3fiBh38%2FwuesxhafMflY77p2AnQOXsmVmF95Y2lvgr5Qy9gluLDIhdGp0KLpKFqg4i%2FR0%2BLscf%2FE7Sq0MNd7619l0r8Qdr89y80ay4P4U0GwqZgHM74MtlnUWviLbQ%2FbjmimBFfl0qd1DTDIqyY5HVwBB%2BVSAKvFMVANI3C%2BTqqx7LSMmVVRBwzPEopk2A%2F7m4FtjOiX9mcXgZjb8YrELYCaJtjJrP1YrEQnydmnXtVZNLkEP%2B8VUMMza%2FcQGOqUBgMgZN2eg5TPw9w4U6wDTwPvWdRETQ6VzjYyQ6KQ%2B%2F3tLVeXgaATULwO2t4NwPQjCu7XtGO9L6%2BY2B8%2F42%2BKgBl%2FCruCoIWxi5fBfbJhKPbZAa4y%2BytIacFhJYi2aNKJUKMfYU5lIKI0BscU5R2b7r2JsQbCI%2Fhrp3jpYMSYHBDsPiyBp1gZ4AIXopBRlP2HaoJ5nQ48oHtBmDd7cVqQRUdvPDqSe&X-Amz-Signature=6e7920e344555720fb176de15c4100e180030ae034100ebf991d3ed770782ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
