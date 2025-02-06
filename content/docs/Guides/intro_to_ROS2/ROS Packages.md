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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDA6WQI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICgRjU4Es2Tc%2FcxGP2lVhQ00OKJTO%2BbUP0L%2FpLkM4uM7AiEAhB1F2fYgGcKBY8e1Cib%2FIpm%2Ff1S%2FX%2Ft6tRC4qDsDAgIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvhT%2BkuO2nsQtdFbSrcA5tfJg1P9StPH6%2B%2Fu179xuiXeaNFRhgFoOgodg9q2%2BANAUeXBXN1xwpnH%2BoEDNtAWfINsbWgk5YJznkYNToWrVnGfG2v1s8vMSbqDEcsykBbd7kdWBmThzerAu1ggUkYFdBUIKAVZTcutETbx3RNGZCG2S63iYFpDM1dD7So7hN%2F2g5%2B%2BMAReiGkEXkdE85l%2FLJ8jbtJ3ZftffIcAG3tECmVCVD8Jik%2F3GApZU1rtFSH5SXOMF4oV%2BHf0w6q2KfvlK0gGLOWe%2B2iUC6VioZk3wmV7zm4sHf3OpttA0AnSKHUHClQ4L2HSkJDJRkt1333R5xDVoaQnTKtSH%2BE5Xc%2FWHyPBrvpGuMujsFwmb4Yisz1xI%2B6ZUZw%2FY9AemNMydrRNtrxeIpjJktkknLZYFttiAAeRdzZnuKGOuDsAh7Oa%2FAxe2vSzd3f7sPcQJq3P65mAMPIaOS6wo2DgnqyNoSHGka3RQ6JYz5mdurra1YYCNjQHsbO5Zz9PFLdoHBg6qmkQPlkjRnJcTFnZDfvRMLUuVSMccFF6GvjACcjokqaM7XO7%2BXyojYCiRfFOQETSI52w8Im3NkOUb8nIL%2Bb%2BLRMCoo2IUfg2TusprBkkGHxeNBkIFnfDNzk9vvGFkD9MOCdk70GOqUBBz3ZavjcPxm%2BhFtK2NcIM2kr1B7by3sjCzcghAk7y%2FRuKeRomIzibW0FJHhgbjq%2BvEvzBlX8k1Cx2gQV9TyhFqwk2XjLWdbZSF5KM8LfwIqeOs4NMCKNCqrv1n6rQ5PBwrsKCXtOhq3CY8YKClwOyAE9k1L3nsxcI48Ifl7O4LS3Iz8JlDYN9giHG6%2Fx6h0fKSrwFLMniDU7p7C9wNdKXH%2B4TmMJ&X-Amz-Signature=8db5c32a3f87af1f1efe54ec99ffcb64cdd1fe34cee944c10bc2029c91066579&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDA6WQI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICgRjU4Es2Tc%2FcxGP2lVhQ00OKJTO%2BbUP0L%2FpLkM4uM7AiEAhB1F2fYgGcKBY8e1Cib%2FIpm%2Ff1S%2FX%2Ft6tRC4qDsDAgIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvhT%2BkuO2nsQtdFbSrcA5tfJg1P9StPH6%2B%2Fu179xuiXeaNFRhgFoOgodg9q2%2BANAUeXBXN1xwpnH%2BoEDNtAWfINsbWgk5YJznkYNToWrVnGfG2v1s8vMSbqDEcsykBbd7kdWBmThzerAu1ggUkYFdBUIKAVZTcutETbx3RNGZCG2S63iYFpDM1dD7So7hN%2F2g5%2B%2BMAReiGkEXkdE85l%2FLJ8jbtJ3ZftffIcAG3tECmVCVD8Jik%2F3GApZU1rtFSH5SXOMF4oV%2BHf0w6q2KfvlK0gGLOWe%2B2iUC6VioZk3wmV7zm4sHf3OpttA0AnSKHUHClQ4L2HSkJDJRkt1333R5xDVoaQnTKtSH%2BE5Xc%2FWHyPBrvpGuMujsFwmb4Yisz1xI%2B6ZUZw%2FY9AemNMydrRNtrxeIpjJktkknLZYFttiAAeRdzZnuKGOuDsAh7Oa%2FAxe2vSzd3f7sPcQJq3P65mAMPIaOS6wo2DgnqyNoSHGka3RQ6JYz5mdurra1YYCNjQHsbO5Zz9PFLdoHBg6qmkQPlkjRnJcTFnZDfvRMLUuVSMccFF6GvjACcjokqaM7XO7%2BXyojYCiRfFOQETSI52w8Im3NkOUb8nIL%2Bb%2BLRMCoo2IUfg2TusprBkkGHxeNBkIFnfDNzk9vvGFkD9MOCdk70GOqUBBz3ZavjcPxm%2BhFtK2NcIM2kr1B7by3sjCzcghAk7y%2FRuKeRomIzibW0FJHhgbjq%2BvEvzBlX8k1Cx2gQV9TyhFqwk2XjLWdbZSF5KM8LfwIqeOs4NMCKNCqrv1n6rQ5PBwrsKCXtOhq3CY8YKClwOyAE9k1L3nsxcI48Ifl7O4LS3Iz8JlDYN9giHG6%2Fx6h0fKSrwFLMniDU7p7C9wNdKXH%2B4TmMJ&X-Amz-Signature=7164e9cdb56a9a3acdd07c5d6648e4833d22a765da4854e82963ae29aba4eb8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDA6WQI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICgRjU4Es2Tc%2FcxGP2lVhQ00OKJTO%2BbUP0L%2FpLkM4uM7AiEAhB1F2fYgGcKBY8e1Cib%2FIpm%2Ff1S%2FX%2Ft6tRC4qDsDAgIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvhT%2BkuO2nsQtdFbSrcA5tfJg1P9StPH6%2B%2Fu179xuiXeaNFRhgFoOgodg9q2%2BANAUeXBXN1xwpnH%2BoEDNtAWfINsbWgk5YJznkYNToWrVnGfG2v1s8vMSbqDEcsykBbd7kdWBmThzerAu1ggUkYFdBUIKAVZTcutETbx3RNGZCG2S63iYFpDM1dD7So7hN%2F2g5%2B%2BMAReiGkEXkdE85l%2FLJ8jbtJ3ZftffIcAG3tECmVCVD8Jik%2F3GApZU1rtFSH5SXOMF4oV%2BHf0w6q2KfvlK0gGLOWe%2B2iUC6VioZk3wmV7zm4sHf3OpttA0AnSKHUHClQ4L2HSkJDJRkt1333R5xDVoaQnTKtSH%2BE5Xc%2FWHyPBrvpGuMujsFwmb4Yisz1xI%2B6ZUZw%2FY9AemNMydrRNtrxeIpjJktkknLZYFttiAAeRdzZnuKGOuDsAh7Oa%2FAxe2vSzd3f7sPcQJq3P65mAMPIaOS6wo2DgnqyNoSHGka3RQ6JYz5mdurra1YYCNjQHsbO5Zz9PFLdoHBg6qmkQPlkjRnJcTFnZDfvRMLUuVSMccFF6GvjACcjokqaM7XO7%2BXyojYCiRfFOQETSI52w8Im3NkOUb8nIL%2Bb%2BLRMCoo2IUfg2TusprBkkGHxeNBkIFnfDNzk9vvGFkD9MOCdk70GOqUBBz3ZavjcPxm%2BhFtK2NcIM2kr1B7by3sjCzcghAk7y%2FRuKeRomIzibW0FJHhgbjq%2BvEvzBlX8k1Cx2gQV9TyhFqwk2XjLWdbZSF5KM8LfwIqeOs4NMCKNCqrv1n6rQ5PBwrsKCXtOhq3CY8YKClwOyAE9k1L3nsxcI48Ifl7O4LS3Iz8JlDYN9giHG6%2Fx6h0fKSrwFLMniDU7p7C9wNdKXH%2B4TmMJ&X-Amz-Signature=d8149b8ce7d622be75af817b1df23a8768537e45df4c8005528c55eb90276d77&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDA6WQI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICgRjU4Es2Tc%2FcxGP2lVhQ00OKJTO%2BbUP0L%2FpLkM4uM7AiEAhB1F2fYgGcKBY8e1Cib%2FIpm%2Ff1S%2FX%2Ft6tRC4qDsDAgIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvhT%2BkuO2nsQtdFbSrcA5tfJg1P9StPH6%2B%2Fu179xuiXeaNFRhgFoOgodg9q2%2BANAUeXBXN1xwpnH%2BoEDNtAWfINsbWgk5YJznkYNToWrVnGfG2v1s8vMSbqDEcsykBbd7kdWBmThzerAu1ggUkYFdBUIKAVZTcutETbx3RNGZCG2S63iYFpDM1dD7So7hN%2F2g5%2B%2BMAReiGkEXkdE85l%2FLJ8jbtJ3ZftffIcAG3tECmVCVD8Jik%2F3GApZU1rtFSH5SXOMF4oV%2BHf0w6q2KfvlK0gGLOWe%2B2iUC6VioZk3wmV7zm4sHf3OpttA0AnSKHUHClQ4L2HSkJDJRkt1333R5xDVoaQnTKtSH%2BE5Xc%2FWHyPBrvpGuMujsFwmb4Yisz1xI%2B6ZUZw%2FY9AemNMydrRNtrxeIpjJktkknLZYFttiAAeRdzZnuKGOuDsAh7Oa%2FAxe2vSzd3f7sPcQJq3P65mAMPIaOS6wo2DgnqyNoSHGka3RQ6JYz5mdurra1YYCNjQHsbO5Zz9PFLdoHBg6qmkQPlkjRnJcTFnZDfvRMLUuVSMccFF6GvjACcjokqaM7XO7%2BXyojYCiRfFOQETSI52w8Im3NkOUb8nIL%2Bb%2BLRMCoo2IUfg2TusprBkkGHxeNBkIFnfDNzk9vvGFkD9MOCdk70GOqUBBz3ZavjcPxm%2BhFtK2NcIM2kr1B7by3sjCzcghAk7y%2FRuKeRomIzibW0FJHhgbjq%2BvEvzBlX8k1Cx2gQV9TyhFqwk2XjLWdbZSF5KM8LfwIqeOs4NMCKNCqrv1n6rQ5PBwrsKCXtOhq3CY8YKClwOyAE9k1L3nsxcI48Ifl7O4LS3Iz8JlDYN9giHG6%2Fx6h0fKSrwFLMniDU7p7C9wNdKXH%2B4TmMJ&X-Amz-Signature=4ecc3dcbe1a164f497db29389c895b279322a51560cd1bdd3151c0e6750d5fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDA6WQI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICgRjU4Es2Tc%2FcxGP2lVhQ00OKJTO%2BbUP0L%2FpLkM4uM7AiEAhB1F2fYgGcKBY8e1Cib%2FIpm%2Ff1S%2FX%2Ft6tRC4qDsDAgIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvhT%2BkuO2nsQtdFbSrcA5tfJg1P9StPH6%2B%2Fu179xuiXeaNFRhgFoOgodg9q2%2BANAUeXBXN1xwpnH%2BoEDNtAWfINsbWgk5YJznkYNToWrVnGfG2v1s8vMSbqDEcsykBbd7kdWBmThzerAu1ggUkYFdBUIKAVZTcutETbx3RNGZCG2S63iYFpDM1dD7So7hN%2F2g5%2B%2BMAReiGkEXkdE85l%2FLJ8jbtJ3ZftffIcAG3tECmVCVD8Jik%2F3GApZU1rtFSH5SXOMF4oV%2BHf0w6q2KfvlK0gGLOWe%2B2iUC6VioZk3wmV7zm4sHf3OpttA0AnSKHUHClQ4L2HSkJDJRkt1333R5xDVoaQnTKtSH%2BE5Xc%2FWHyPBrvpGuMujsFwmb4Yisz1xI%2B6ZUZw%2FY9AemNMydrRNtrxeIpjJktkknLZYFttiAAeRdzZnuKGOuDsAh7Oa%2FAxe2vSzd3f7sPcQJq3P65mAMPIaOS6wo2DgnqyNoSHGka3RQ6JYz5mdurra1YYCNjQHsbO5Zz9PFLdoHBg6qmkQPlkjRnJcTFnZDfvRMLUuVSMccFF6GvjACcjokqaM7XO7%2BXyojYCiRfFOQETSI52w8Im3NkOUb8nIL%2Bb%2BLRMCoo2IUfg2TusprBkkGHxeNBkIFnfDNzk9vvGFkD9MOCdk70GOqUBBz3ZavjcPxm%2BhFtK2NcIM2kr1B7by3sjCzcghAk7y%2FRuKeRomIzibW0FJHhgbjq%2BvEvzBlX8k1Cx2gQV9TyhFqwk2XjLWdbZSF5KM8LfwIqeOs4NMCKNCqrv1n6rQ5PBwrsKCXtOhq3CY8YKClwOyAE9k1L3nsxcI48Ifl7O4LS3Iz8JlDYN9giHG6%2Fx6h0fKSrwFLMniDU7p7C9wNdKXH%2B4TmMJ&X-Amz-Signature=fe175d657cb12d8847c6a0d0009f9de202ca562d099f90640740b5e9625ba994&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDA6WQI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICgRjU4Es2Tc%2FcxGP2lVhQ00OKJTO%2BbUP0L%2FpLkM4uM7AiEAhB1F2fYgGcKBY8e1Cib%2FIpm%2Ff1S%2FX%2Ft6tRC4qDsDAgIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvhT%2BkuO2nsQtdFbSrcA5tfJg1P9StPH6%2B%2Fu179xuiXeaNFRhgFoOgodg9q2%2BANAUeXBXN1xwpnH%2BoEDNtAWfINsbWgk5YJznkYNToWrVnGfG2v1s8vMSbqDEcsykBbd7kdWBmThzerAu1ggUkYFdBUIKAVZTcutETbx3RNGZCG2S63iYFpDM1dD7So7hN%2F2g5%2B%2BMAReiGkEXkdE85l%2FLJ8jbtJ3ZftffIcAG3tECmVCVD8Jik%2F3GApZU1rtFSH5SXOMF4oV%2BHf0w6q2KfvlK0gGLOWe%2B2iUC6VioZk3wmV7zm4sHf3OpttA0AnSKHUHClQ4L2HSkJDJRkt1333R5xDVoaQnTKtSH%2BE5Xc%2FWHyPBrvpGuMujsFwmb4Yisz1xI%2B6ZUZw%2FY9AemNMydrRNtrxeIpjJktkknLZYFttiAAeRdzZnuKGOuDsAh7Oa%2FAxe2vSzd3f7sPcQJq3P65mAMPIaOS6wo2DgnqyNoSHGka3RQ6JYz5mdurra1YYCNjQHsbO5Zz9PFLdoHBg6qmkQPlkjRnJcTFnZDfvRMLUuVSMccFF6GvjACcjokqaM7XO7%2BXyojYCiRfFOQETSI52w8Im3NkOUb8nIL%2Bb%2BLRMCoo2IUfg2TusprBkkGHxeNBkIFnfDNzk9vvGFkD9MOCdk70GOqUBBz3ZavjcPxm%2BhFtK2NcIM2kr1B7by3sjCzcghAk7y%2FRuKeRomIzibW0FJHhgbjq%2BvEvzBlX8k1Cx2gQV9TyhFqwk2XjLWdbZSF5KM8LfwIqeOs4NMCKNCqrv1n6rQ5PBwrsKCXtOhq3CY8YKClwOyAE9k1L3nsxcI48Ifl7O4LS3Iz8JlDYN9giHG6%2Fx6h0fKSrwFLMniDU7p7C9wNdKXH%2B4TmMJ&X-Amz-Signature=f484e608d28ea9d8372a617ba77a5c62d13a8d36f5b5da59abb061d85e8c4fda&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDA6WQI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICgRjU4Es2Tc%2FcxGP2lVhQ00OKJTO%2BbUP0L%2FpLkM4uM7AiEAhB1F2fYgGcKBY8e1Cib%2FIpm%2Ff1S%2FX%2Ft6tRC4qDsDAgIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvhT%2BkuO2nsQtdFbSrcA5tfJg1P9StPH6%2B%2Fu179xuiXeaNFRhgFoOgodg9q2%2BANAUeXBXN1xwpnH%2BoEDNtAWfINsbWgk5YJznkYNToWrVnGfG2v1s8vMSbqDEcsykBbd7kdWBmThzerAu1ggUkYFdBUIKAVZTcutETbx3RNGZCG2S63iYFpDM1dD7So7hN%2F2g5%2B%2BMAReiGkEXkdE85l%2FLJ8jbtJ3ZftffIcAG3tECmVCVD8Jik%2F3GApZU1rtFSH5SXOMF4oV%2BHf0w6q2KfvlK0gGLOWe%2B2iUC6VioZk3wmV7zm4sHf3OpttA0AnSKHUHClQ4L2HSkJDJRkt1333R5xDVoaQnTKtSH%2BE5Xc%2FWHyPBrvpGuMujsFwmb4Yisz1xI%2B6ZUZw%2FY9AemNMydrRNtrxeIpjJktkknLZYFttiAAeRdzZnuKGOuDsAh7Oa%2FAxe2vSzd3f7sPcQJq3P65mAMPIaOS6wo2DgnqyNoSHGka3RQ6JYz5mdurra1YYCNjQHsbO5Zz9PFLdoHBg6qmkQPlkjRnJcTFnZDfvRMLUuVSMccFF6GvjACcjokqaM7XO7%2BXyojYCiRfFOQETSI52w8Im3NkOUb8nIL%2Bb%2BLRMCoo2IUfg2TusprBkkGHxeNBkIFnfDNzk9vvGFkD9MOCdk70GOqUBBz3ZavjcPxm%2BhFtK2NcIM2kr1B7by3sjCzcghAk7y%2FRuKeRomIzibW0FJHhgbjq%2BvEvzBlX8k1Cx2gQV9TyhFqwk2XjLWdbZSF5KM8LfwIqeOs4NMCKNCqrv1n6rQ5PBwrsKCXtOhq3CY8YKClwOyAE9k1L3nsxcI48Ifl7O4LS3Iz8JlDYN9giHG6%2Fx6h0fKSrwFLMniDU7p7C9wNdKXH%2B4TmMJ&X-Amz-Signature=0304c6b3602f945df03ce274b9ac4f906e1d623d2d5f307d22411f77c8314261&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
