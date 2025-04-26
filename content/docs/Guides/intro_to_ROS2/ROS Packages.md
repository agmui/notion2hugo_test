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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNAGNW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2BzAVEyWeDXDFasckr9BEpvvKdCYSWYZU2SFJOxyBaQIgSPfx2kC3KVRxtYIOxaq7RrR7IUY6khw7nAw%2BKtMRiKcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMf2fgGV2fJ%2BMdm%2FTircA71rIwLk9%2B9PLI8lKufKI3U%2FhrpbY%2F9Y2dyjI83trHiF6K5kxb5qNSVuPKyncf9jO9mry9Zs51PX%2BETWK%2BaZ%2BYZEMzzAC%2FZxwkJkvvE5uPk1n53Pvlx9GfTiRaYNA6Ny67AOmsbxTTRkTFeQJmzO3ZI0nmNlklknLXj%2Fs6YPYuNQbVfBLUiKIYXDPAEN8T%2BTzEaDCb8uEhLMyir83ExlmKEGGT20z2%2Bh69mOAqap9KZb0Bm8KIIfSNnhF8gov8j2aVMPyZBT0G9X%2B6KFj5%2BdT%2B%2BVqyRmrRaDUwpxfsFlNkUCW1ULthrAEf%2BgGD%2FPvX5Lwn0DhXLoYgUJOYdZ%2FZ%2BmmavpPemkn7f%2BlKJANelSty6xR1GMAZccDUQSkzbwQC5%2B1w4ucFnWWOd3ETp6BQ33OOPNQNxLrR2muXQrqUk%2Fvjt8wAvLIybOvWv5y%2F0JNwapZctiwMt9BYODj52fYFKlAbuqr5l6l0l6FK9dzcYLpuXwJY5Iz5VCDIyWbhgVEH9eYPuUsD7BReOHifK9zn8li3WAVM%2Fc8RnxCwDMFfBmC3ApZLelBeZUN1SKpiBh0WSJZ8DmJxRM1UWH0Y3%2BpYcY53DYKpKkQv75Y0TVyD8owIQfu59gTNdxh0rEZIJrMJvMs8AGOqUBRjH%2BuVA6vjkB3srANE9uStr3Pqih%2BOyVp7vxsTEvXQY3dz8T8HKvVSF2jNsMNFh53QJm9f5yI4hsCV1I2hE%2B34VPY6Kg2tkaj8ZMP9v0VDtidoj1VqquoiHEcrqUmAdF6VVox6Etrlyxe%2B8wFmFWhOND3kfjaJzbJd8LT0Tn%2FKr0QyASZuuYbcwPozOLSqsdvOufAeL%2BU0Af6%2FzDkjXuxLGquf3n&X-Amz-Signature=6ca00a82abac6a84aff43a30f15c5c0f973155a9c219a64d32d01766904269a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNAGNW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2BzAVEyWeDXDFasckr9BEpvvKdCYSWYZU2SFJOxyBaQIgSPfx2kC3KVRxtYIOxaq7RrR7IUY6khw7nAw%2BKtMRiKcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMf2fgGV2fJ%2BMdm%2FTircA71rIwLk9%2B9PLI8lKufKI3U%2FhrpbY%2F9Y2dyjI83trHiF6K5kxb5qNSVuPKyncf9jO9mry9Zs51PX%2BETWK%2BaZ%2BYZEMzzAC%2FZxwkJkvvE5uPk1n53Pvlx9GfTiRaYNA6Ny67AOmsbxTTRkTFeQJmzO3ZI0nmNlklknLXj%2Fs6YPYuNQbVfBLUiKIYXDPAEN8T%2BTzEaDCb8uEhLMyir83ExlmKEGGT20z2%2Bh69mOAqap9KZb0Bm8KIIfSNnhF8gov8j2aVMPyZBT0G9X%2B6KFj5%2BdT%2B%2BVqyRmrRaDUwpxfsFlNkUCW1ULthrAEf%2BgGD%2FPvX5Lwn0DhXLoYgUJOYdZ%2FZ%2BmmavpPemkn7f%2BlKJANelSty6xR1GMAZccDUQSkzbwQC5%2B1w4ucFnWWOd3ETp6BQ33OOPNQNxLrR2muXQrqUk%2Fvjt8wAvLIybOvWv5y%2F0JNwapZctiwMt9BYODj52fYFKlAbuqr5l6l0l6FK9dzcYLpuXwJY5Iz5VCDIyWbhgVEH9eYPuUsD7BReOHifK9zn8li3WAVM%2Fc8RnxCwDMFfBmC3ApZLelBeZUN1SKpiBh0WSJZ8DmJxRM1UWH0Y3%2BpYcY53DYKpKkQv75Y0TVyD8owIQfu59gTNdxh0rEZIJrMJvMs8AGOqUBRjH%2BuVA6vjkB3srANE9uStr3Pqih%2BOyVp7vxsTEvXQY3dz8T8HKvVSF2jNsMNFh53QJm9f5yI4hsCV1I2hE%2B34VPY6Kg2tkaj8ZMP9v0VDtidoj1VqquoiHEcrqUmAdF6VVox6Etrlyxe%2B8wFmFWhOND3kfjaJzbJd8LT0Tn%2FKr0QyASZuuYbcwPozOLSqsdvOufAeL%2BU0Af6%2FzDkjXuxLGquf3n&X-Amz-Signature=9800233d90499d5bb7323f17d9f8f2fcc9d752d1586cd271262ca4172444c3a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNAGNW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2BzAVEyWeDXDFasckr9BEpvvKdCYSWYZU2SFJOxyBaQIgSPfx2kC3KVRxtYIOxaq7RrR7IUY6khw7nAw%2BKtMRiKcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMf2fgGV2fJ%2BMdm%2FTircA71rIwLk9%2B9PLI8lKufKI3U%2FhrpbY%2F9Y2dyjI83trHiF6K5kxb5qNSVuPKyncf9jO9mry9Zs51PX%2BETWK%2BaZ%2BYZEMzzAC%2FZxwkJkvvE5uPk1n53Pvlx9GfTiRaYNA6Ny67AOmsbxTTRkTFeQJmzO3ZI0nmNlklknLXj%2Fs6YPYuNQbVfBLUiKIYXDPAEN8T%2BTzEaDCb8uEhLMyir83ExlmKEGGT20z2%2Bh69mOAqap9KZb0Bm8KIIfSNnhF8gov8j2aVMPyZBT0G9X%2B6KFj5%2BdT%2B%2BVqyRmrRaDUwpxfsFlNkUCW1ULthrAEf%2BgGD%2FPvX5Lwn0DhXLoYgUJOYdZ%2FZ%2BmmavpPemkn7f%2BlKJANelSty6xR1GMAZccDUQSkzbwQC5%2B1w4ucFnWWOd3ETp6BQ33OOPNQNxLrR2muXQrqUk%2Fvjt8wAvLIybOvWv5y%2F0JNwapZctiwMt9BYODj52fYFKlAbuqr5l6l0l6FK9dzcYLpuXwJY5Iz5VCDIyWbhgVEH9eYPuUsD7BReOHifK9zn8li3WAVM%2Fc8RnxCwDMFfBmC3ApZLelBeZUN1SKpiBh0WSJZ8DmJxRM1UWH0Y3%2BpYcY53DYKpKkQv75Y0TVyD8owIQfu59gTNdxh0rEZIJrMJvMs8AGOqUBRjH%2BuVA6vjkB3srANE9uStr3Pqih%2BOyVp7vxsTEvXQY3dz8T8HKvVSF2jNsMNFh53QJm9f5yI4hsCV1I2hE%2B34VPY6Kg2tkaj8ZMP9v0VDtidoj1VqquoiHEcrqUmAdF6VVox6Etrlyxe%2B8wFmFWhOND3kfjaJzbJd8LT0Tn%2FKr0QyASZuuYbcwPozOLSqsdvOufAeL%2BU0Af6%2FzDkjXuxLGquf3n&X-Amz-Signature=07b22847d9384a2493e3716b211d16f66ceea6864204de3b4fcfabbf3e5154b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNAGNW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2BzAVEyWeDXDFasckr9BEpvvKdCYSWYZU2SFJOxyBaQIgSPfx2kC3KVRxtYIOxaq7RrR7IUY6khw7nAw%2BKtMRiKcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMf2fgGV2fJ%2BMdm%2FTircA71rIwLk9%2B9PLI8lKufKI3U%2FhrpbY%2F9Y2dyjI83trHiF6K5kxb5qNSVuPKyncf9jO9mry9Zs51PX%2BETWK%2BaZ%2BYZEMzzAC%2FZxwkJkvvE5uPk1n53Pvlx9GfTiRaYNA6Ny67AOmsbxTTRkTFeQJmzO3ZI0nmNlklknLXj%2Fs6YPYuNQbVfBLUiKIYXDPAEN8T%2BTzEaDCb8uEhLMyir83ExlmKEGGT20z2%2Bh69mOAqap9KZb0Bm8KIIfSNnhF8gov8j2aVMPyZBT0G9X%2B6KFj5%2BdT%2B%2BVqyRmrRaDUwpxfsFlNkUCW1ULthrAEf%2BgGD%2FPvX5Lwn0DhXLoYgUJOYdZ%2FZ%2BmmavpPemkn7f%2BlKJANelSty6xR1GMAZccDUQSkzbwQC5%2B1w4ucFnWWOd3ETp6BQ33OOPNQNxLrR2muXQrqUk%2Fvjt8wAvLIybOvWv5y%2F0JNwapZctiwMt9BYODj52fYFKlAbuqr5l6l0l6FK9dzcYLpuXwJY5Iz5VCDIyWbhgVEH9eYPuUsD7BReOHifK9zn8li3WAVM%2Fc8RnxCwDMFfBmC3ApZLelBeZUN1SKpiBh0WSJZ8DmJxRM1UWH0Y3%2BpYcY53DYKpKkQv75Y0TVyD8owIQfu59gTNdxh0rEZIJrMJvMs8AGOqUBRjH%2BuVA6vjkB3srANE9uStr3Pqih%2BOyVp7vxsTEvXQY3dz8T8HKvVSF2jNsMNFh53QJm9f5yI4hsCV1I2hE%2B34VPY6Kg2tkaj8ZMP9v0VDtidoj1VqquoiHEcrqUmAdF6VVox6Etrlyxe%2B8wFmFWhOND3kfjaJzbJd8LT0Tn%2FKr0QyASZuuYbcwPozOLSqsdvOufAeL%2BU0Af6%2FzDkjXuxLGquf3n&X-Amz-Signature=33abfd14f034105285ff1ba14e0f83a7d7d85fac3a28ac9d42a04ce4bc2a3a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNAGNW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2BzAVEyWeDXDFasckr9BEpvvKdCYSWYZU2SFJOxyBaQIgSPfx2kC3KVRxtYIOxaq7RrR7IUY6khw7nAw%2BKtMRiKcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMf2fgGV2fJ%2BMdm%2FTircA71rIwLk9%2B9PLI8lKufKI3U%2FhrpbY%2F9Y2dyjI83trHiF6K5kxb5qNSVuPKyncf9jO9mry9Zs51PX%2BETWK%2BaZ%2BYZEMzzAC%2FZxwkJkvvE5uPk1n53Pvlx9GfTiRaYNA6Ny67AOmsbxTTRkTFeQJmzO3ZI0nmNlklknLXj%2Fs6YPYuNQbVfBLUiKIYXDPAEN8T%2BTzEaDCb8uEhLMyir83ExlmKEGGT20z2%2Bh69mOAqap9KZb0Bm8KIIfSNnhF8gov8j2aVMPyZBT0G9X%2B6KFj5%2BdT%2B%2BVqyRmrRaDUwpxfsFlNkUCW1ULthrAEf%2BgGD%2FPvX5Lwn0DhXLoYgUJOYdZ%2FZ%2BmmavpPemkn7f%2BlKJANelSty6xR1GMAZccDUQSkzbwQC5%2B1w4ucFnWWOd3ETp6BQ33OOPNQNxLrR2muXQrqUk%2Fvjt8wAvLIybOvWv5y%2F0JNwapZctiwMt9BYODj52fYFKlAbuqr5l6l0l6FK9dzcYLpuXwJY5Iz5VCDIyWbhgVEH9eYPuUsD7BReOHifK9zn8li3WAVM%2Fc8RnxCwDMFfBmC3ApZLelBeZUN1SKpiBh0WSJZ8DmJxRM1UWH0Y3%2BpYcY53DYKpKkQv75Y0TVyD8owIQfu59gTNdxh0rEZIJrMJvMs8AGOqUBRjH%2BuVA6vjkB3srANE9uStr3Pqih%2BOyVp7vxsTEvXQY3dz8T8HKvVSF2jNsMNFh53QJm9f5yI4hsCV1I2hE%2B34VPY6Kg2tkaj8ZMP9v0VDtidoj1VqquoiHEcrqUmAdF6VVox6Etrlyxe%2B8wFmFWhOND3kfjaJzbJd8LT0Tn%2FKr0QyASZuuYbcwPozOLSqsdvOufAeL%2BU0Af6%2FzDkjXuxLGquf3n&X-Amz-Signature=27a6be0f42ec3c10ff262c6930247199277a06ba590039de93f1c2ee439d269c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNAGNW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2BzAVEyWeDXDFasckr9BEpvvKdCYSWYZU2SFJOxyBaQIgSPfx2kC3KVRxtYIOxaq7RrR7IUY6khw7nAw%2BKtMRiKcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMf2fgGV2fJ%2BMdm%2FTircA71rIwLk9%2B9PLI8lKufKI3U%2FhrpbY%2F9Y2dyjI83trHiF6K5kxb5qNSVuPKyncf9jO9mry9Zs51PX%2BETWK%2BaZ%2BYZEMzzAC%2FZxwkJkvvE5uPk1n53Pvlx9GfTiRaYNA6Ny67AOmsbxTTRkTFeQJmzO3ZI0nmNlklknLXj%2Fs6YPYuNQbVfBLUiKIYXDPAEN8T%2BTzEaDCb8uEhLMyir83ExlmKEGGT20z2%2Bh69mOAqap9KZb0Bm8KIIfSNnhF8gov8j2aVMPyZBT0G9X%2B6KFj5%2BdT%2B%2BVqyRmrRaDUwpxfsFlNkUCW1ULthrAEf%2BgGD%2FPvX5Lwn0DhXLoYgUJOYdZ%2FZ%2BmmavpPemkn7f%2BlKJANelSty6xR1GMAZccDUQSkzbwQC5%2B1w4ucFnWWOd3ETp6BQ33OOPNQNxLrR2muXQrqUk%2Fvjt8wAvLIybOvWv5y%2F0JNwapZctiwMt9BYODj52fYFKlAbuqr5l6l0l6FK9dzcYLpuXwJY5Iz5VCDIyWbhgVEH9eYPuUsD7BReOHifK9zn8li3WAVM%2Fc8RnxCwDMFfBmC3ApZLelBeZUN1SKpiBh0WSJZ8DmJxRM1UWH0Y3%2BpYcY53DYKpKkQv75Y0TVyD8owIQfu59gTNdxh0rEZIJrMJvMs8AGOqUBRjH%2BuVA6vjkB3srANE9uStr3Pqih%2BOyVp7vxsTEvXQY3dz8T8HKvVSF2jNsMNFh53QJm9f5yI4hsCV1I2hE%2B34VPY6Kg2tkaj8ZMP9v0VDtidoj1VqquoiHEcrqUmAdF6VVox6Etrlyxe%2B8wFmFWhOND3kfjaJzbJd8LT0Tn%2FKr0QyASZuuYbcwPozOLSqsdvOufAeL%2BU0Af6%2FzDkjXuxLGquf3n&X-Amz-Signature=1adf041dbf1d36a52f7f0eaab785c8503c1cb40c714a87dcec03938ed31ddf57&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGNAGNW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2BzAVEyWeDXDFasckr9BEpvvKdCYSWYZU2SFJOxyBaQIgSPfx2kC3KVRxtYIOxaq7RrR7IUY6khw7nAw%2BKtMRiKcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMf2fgGV2fJ%2BMdm%2FTircA71rIwLk9%2B9PLI8lKufKI3U%2FhrpbY%2F9Y2dyjI83trHiF6K5kxb5qNSVuPKyncf9jO9mry9Zs51PX%2BETWK%2BaZ%2BYZEMzzAC%2FZxwkJkvvE5uPk1n53Pvlx9GfTiRaYNA6Ny67AOmsbxTTRkTFeQJmzO3ZI0nmNlklknLXj%2Fs6YPYuNQbVfBLUiKIYXDPAEN8T%2BTzEaDCb8uEhLMyir83ExlmKEGGT20z2%2Bh69mOAqap9KZb0Bm8KIIfSNnhF8gov8j2aVMPyZBT0G9X%2B6KFj5%2BdT%2B%2BVqyRmrRaDUwpxfsFlNkUCW1ULthrAEf%2BgGD%2FPvX5Lwn0DhXLoYgUJOYdZ%2FZ%2BmmavpPemkn7f%2BlKJANelSty6xR1GMAZccDUQSkzbwQC5%2B1w4ucFnWWOd3ETp6BQ33OOPNQNxLrR2muXQrqUk%2Fvjt8wAvLIybOvWv5y%2F0JNwapZctiwMt9BYODj52fYFKlAbuqr5l6l0l6FK9dzcYLpuXwJY5Iz5VCDIyWbhgVEH9eYPuUsD7BReOHifK9zn8li3WAVM%2Fc8RnxCwDMFfBmC3ApZLelBeZUN1SKpiBh0WSJZ8DmJxRM1UWH0Y3%2BpYcY53DYKpKkQv75Y0TVyD8owIQfu59gTNdxh0rEZIJrMJvMs8AGOqUBRjH%2BuVA6vjkB3srANE9uStr3Pqih%2BOyVp7vxsTEvXQY3dz8T8HKvVSF2jNsMNFh53QJm9f5yI4hsCV1I2hE%2B34VPY6Kg2tkaj8ZMP9v0VDtidoj1VqquoiHEcrqUmAdF6VVox6Etrlyxe%2B8wFmFWhOND3kfjaJzbJd8LT0Tn%2FKr0QyASZuuYbcwPozOLSqsdvOufAeL%2BU0Af6%2FzDkjXuxLGquf3n&X-Amz-Signature=eb8ed6d5ff52b1e64a615d0acec11b42c702ee14b0dbeead666aebaff27ca370&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
