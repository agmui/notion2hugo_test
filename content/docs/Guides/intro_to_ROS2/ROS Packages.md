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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKL4G3K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUoVge8cbmS7TcOUDa16oApUWaKNFsHP%2Bp9fIrWlsHYAiEAxHW%2BrdAlVttZCgIoVsa%2BcaHdFtBtRdmdWFFtp70XcvEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkU%2B44QA0h%2BHH5mTCrcA9RAHcWMVIrlR0H2xnjqNFnsjJQjrjwhMut06g3vCFDa2daprMHjYXdHWnneCVaXi4KwMRdCSCwYveHrtmC8TgrDvdOn9azFBB6lSJy%2BW3m%2BTF%2FNyDX1qjM2ioX0wynjURKCjDLC5Wk1EsBmc%2FxNiPkFPQDGTJzBbRUugg0tWSaAGi%2F8Zth91T0DZ64yV6XeQ5wusrWnw7qT%2FsOzlaEzzD6CbHDky0QCMFqYi0GSD3UM%2B4NMN5jEQGUU00qWsEl64xU%2FjMCaeBpxrzgE20mw3myTO2bVgg6h5tvS5eKPizXCqw924kXEti285HgIp4SZ%2Fm6ubDjg%2F6JOcUCYD2nE0s8NOSqvig6QZi%2FjYd%2F%2BZcH8A%2BZfUupmvyn%2FZg3xij06rDIkTRVnO%2BBOnLCVplm6s3o0PXtcd2NvSEkv%2BrQA2h8iG2%2BDwWTCgFa8PdBjeFIPuUnYmr23ipvp9E6dVYND%2BE9qrw20lmMBerSAdIW3gYDOHJZJcGBvs2mOKN5e%2BXcgrAIoZXV0GL7MMyhBr1Hayzd2cjGg52fU%2BqETjYoD0Xlxry2Pe0U4hccaOdATtyzF6cygVA083hDi9Z5Ie2yKFU9smbYKAdB9OdwbQe9rvUbEpfznm8RcA3MAk5kMMJqy4cEGOqUBo1fp%2Bo%2BIyhmAO6%2BzM8OEhglvuGmny00chHnOYrXaGZFpHL8lnmbCRKk7C4CIdU%2BADdoxYxD%2BtPiS71P%2F6f%2FbtoDs0BWB6A95myZK4uxGi6dVb%2BKrNKohSQrl25wM0h8gsJhZ6kRPm%2BMIzOKS3ZPwB%2B4dcNiZE4S60gaj0yKrQxEvOhBvf5eFCeGQWKZavxSSjXDiQ%2Bmf%2By5g9PexxLINEAR44skj&X-Amz-Signature=ca4144ef42e462fbbe24c922405f6851538a023155faae1c966296e65505ba08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKL4G3K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUoVge8cbmS7TcOUDa16oApUWaKNFsHP%2Bp9fIrWlsHYAiEAxHW%2BrdAlVttZCgIoVsa%2BcaHdFtBtRdmdWFFtp70XcvEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkU%2B44QA0h%2BHH5mTCrcA9RAHcWMVIrlR0H2xnjqNFnsjJQjrjwhMut06g3vCFDa2daprMHjYXdHWnneCVaXi4KwMRdCSCwYveHrtmC8TgrDvdOn9azFBB6lSJy%2BW3m%2BTF%2FNyDX1qjM2ioX0wynjURKCjDLC5Wk1EsBmc%2FxNiPkFPQDGTJzBbRUugg0tWSaAGi%2F8Zth91T0DZ64yV6XeQ5wusrWnw7qT%2FsOzlaEzzD6CbHDky0QCMFqYi0GSD3UM%2B4NMN5jEQGUU00qWsEl64xU%2FjMCaeBpxrzgE20mw3myTO2bVgg6h5tvS5eKPizXCqw924kXEti285HgIp4SZ%2Fm6ubDjg%2F6JOcUCYD2nE0s8NOSqvig6QZi%2FjYd%2F%2BZcH8A%2BZfUupmvyn%2FZg3xij06rDIkTRVnO%2BBOnLCVplm6s3o0PXtcd2NvSEkv%2BrQA2h8iG2%2BDwWTCgFa8PdBjeFIPuUnYmr23ipvp9E6dVYND%2BE9qrw20lmMBerSAdIW3gYDOHJZJcGBvs2mOKN5e%2BXcgrAIoZXV0GL7MMyhBr1Hayzd2cjGg52fU%2BqETjYoD0Xlxry2Pe0U4hccaOdATtyzF6cygVA083hDi9Z5Ie2yKFU9smbYKAdB9OdwbQe9rvUbEpfznm8RcA3MAk5kMMJqy4cEGOqUBo1fp%2Bo%2BIyhmAO6%2BzM8OEhglvuGmny00chHnOYrXaGZFpHL8lnmbCRKk7C4CIdU%2BADdoxYxD%2BtPiS71P%2F6f%2FbtoDs0BWB6A95myZK4uxGi6dVb%2BKrNKohSQrl25wM0h8gsJhZ6kRPm%2BMIzOKS3ZPwB%2B4dcNiZE4S60gaj0yKrQxEvOhBvf5eFCeGQWKZavxSSjXDiQ%2Bmf%2By5g9PexxLINEAR44skj&X-Amz-Signature=de1c5efe55203b6da5b3c5cfd69c3882f537b8d5d7888ca38714524072d5ab74&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKL4G3K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUoVge8cbmS7TcOUDa16oApUWaKNFsHP%2Bp9fIrWlsHYAiEAxHW%2BrdAlVttZCgIoVsa%2BcaHdFtBtRdmdWFFtp70XcvEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkU%2B44QA0h%2BHH5mTCrcA9RAHcWMVIrlR0H2xnjqNFnsjJQjrjwhMut06g3vCFDa2daprMHjYXdHWnneCVaXi4KwMRdCSCwYveHrtmC8TgrDvdOn9azFBB6lSJy%2BW3m%2BTF%2FNyDX1qjM2ioX0wynjURKCjDLC5Wk1EsBmc%2FxNiPkFPQDGTJzBbRUugg0tWSaAGi%2F8Zth91T0DZ64yV6XeQ5wusrWnw7qT%2FsOzlaEzzD6CbHDky0QCMFqYi0GSD3UM%2B4NMN5jEQGUU00qWsEl64xU%2FjMCaeBpxrzgE20mw3myTO2bVgg6h5tvS5eKPizXCqw924kXEti285HgIp4SZ%2Fm6ubDjg%2F6JOcUCYD2nE0s8NOSqvig6QZi%2FjYd%2F%2BZcH8A%2BZfUupmvyn%2FZg3xij06rDIkTRVnO%2BBOnLCVplm6s3o0PXtcd2NvSEkv%2BrQA2h8iG2%2BDwWTCgFa8PdBjeFIPuUnYmr23ipvp9E6dVYND%2BE9qrw20lmMBerSAdIW3gYDOHJZJcGBvs2mOKN5e%2BXcgrAIoZXV0GL7MMyhBr1Hayzd2cjGg52fU%2BqETjYoD0Xlxry2Pe0U4hccaOdATtyzF6cygVA083hDi9Z5Ie2yKFU9smbYKAdB9OdwbQe9rvUbEpfznm8RcA3MAk5kMMJqy4cEGOqUBo1fp%2Bo%2BIyhmAO6%2BzM8OEhglvuGmny00chHnOYrXaGZFpHL8lnmbCRKk7C4CIdU%2BADdoxYxD%2BtPiS71P%2F6f%2FbtoDs0BWB6A95myZK4uxGi6dVb%2BKrNKohSQrl25wM0h8gsJhZ6kRPm%2BMIzOKS3ZPwB%2B4dcNiZE4S60gaj0yKrQxEvOhBvf5eFCeGQWKZavxSSjXDiQ%2Bmf%2By5g9PexxLINEAR44skj&X-Amz-Signature=e1dc576e9a52eafed36a218f916dd4a18f938098fdb7c2c7e2ccdf4e49b4d7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKL4G3K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUoVge8cbmS7TcOUDa16oApUWaKNFsHP%2Bp9fIrWlsHYAiEAxHW%2BrdAlVttZCgIoVsa%2BcaHdFtBtRdmdWFFtp70XcvEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkU%2B44QA0h%2BHH5mTCrcA9RAHcWMVIrlR0H2xnjqNFnsjJQjrjwhMut06g3vCFDa2daprMHjYXdHWnneCVaXi4KwMRdCSCwYveHrtmC8TgrDvdOn9azFBB6lSJy%2BW3m%2BTF%2FNyDX1qjM2ioX0wynjURKCjDLC5Wk1EsBmc%2FxNiPkFPQDGTJzBbRUugg0tWSaAGi%2F8Zth91T0DZ64yV6XeQ5wusrWnw7qT%2FsOzlaEzzD6CbHDky0QCMFqYi0GSD3UM%2B4NMN5jEQGUU00qWsEl64xU%2FjMCaeBpxrzgE20mw3myTO2bVgg6h5tvS5eKPizXCqw924kXEti285HgIp4SZ%2Fm6ubDjg%2F6JOcUCYD2nE0s8NOSqvig6QZi%2FjYd%2F%2BZcH8A%2BZfUupmvyn%2FZg3xij06rDIkTRVnO%2BBOnLCVplm6s3o0PXtcd2NvSEkv%2BrQA2h8iG2%2BDwWTCgFa8PdBjeFIPuUnYmr23ipvp9E6dVYND%2BE9qrw20lmMBerSAdIW3gYDOHJZJcGBvs2mOKN5e%2BXcgrAIoZXV0GL7MMyhBr1Hayzd2cjGg52fU%2BqETjYoD0Xlxry2Pe0U4hccaOdATtyzF6cygVA083hDi9Z5Ie2yKFU9smbYKAdB9OdwbQe9rvUbEpfznm8RcA3MAk5kMMJqy4cEGOqUBo1fp%2Bo%2BIyhmAO6%2BzM8OEhglvuGmny00chHnOYrXaGZFpHL8lnmbCRKk7C4CIdU%2BADdoxYxD%2BtPiS71P%2F6f%2FbtoDs0BWB6A95myZK4uxGi6dVb%2BKrNKohSQrl25wM0h8gsJhZ6kRPm%2BMIzOKS3ZPwB%2B4dcNiZE4S60gaj0yKrQxEvOhBvf5eFCeGQWKZavxSSjXDiQ%2Bmf%2By5g9PexxLINEAR44skj&X-Amz-Signature=30e41bc3d55f9633f25bad5ffc9a79a6643963884cb018ed7271b09dd0ba3b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKL4G3K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUoVge8cbmS7TcOUDa16oApUWaKNFsHP%2Bp9fIrWlsHYAiEAxHW%2BrdAlVttZCgIoVsa%2BcaHdFtBtRdmdWFFtp70XcvEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkU%2B44QA0h%2BHH5mTCrcA9RAHcWMVIrlR0H2xnjqNFnsjJQjrjwhMut06g3vCFDa2daprMHjYXdHWnneCVaXi4KwMRdCSCwYveHrtmC8TgrDvdOn9azFBB6lSJy%2BW3m%2BTF%2FNyDX1qjM2ioX0wynjURKCjDLC5Wk1EsBmc%2FxNiPkFPQDGTJzBbRUugg0tWSaAGi%2F8Zth91T0DZ64yV6XeQ5wusrWnw7qT%2FsOzlaEzzD6CbHDky0QCMFqYi0GSD3UM%2B4NMN5jEQGUU00qWsEl64xU%2FjMCaeBpxrzgE20mw3myTO2bVgg6h5tvS5eKPizXCqw924kXEti285HgIp4SZ%2Fm6ubDjg%2F6JOcUCYD2nE0s8NOSqvig6QZi%2FjYd%2F%2BZcH8A%2BZfUupmvyn%2FZg3xij06rDIkTRVnO%2BBOnLCVplm6s3o0PXtcd2NvSEkv%2BrQA2h8iG2%2BDwWTCgFa8PdBjeFIPuUnYmr23ipvp9E6dVYND%2BE9qrw20lmMBerSAdIW3gYDOHJZJcGBvs2mOKN5e%2BXcgrAIoZXV0GL7MMyhBr1Hayzd2cjGg52fU%2BqETjYoD0Xlxry2Pe0U4hccaOdATtyzF6cygVA083hDi9Z5Ie2yKFU9smbYKAdB9OdwbQe9rvUbEpfznm8RcA3MAk5kMMJqy4cEGOqUBo1fp%2Bo%2BIyhmAO6%2BzM8OEhglvuGmny00chHnOYrXaGZFpHL8lnmbCRKk7C4CIdU%2BADdoxYxD%2BtPiS71P%2F6f%2FbtoDs0BWB6A95myZK4uxGi6dVb%2BKrNKohSQrl25wM0h8gsJhZ6kRPm%2BMIzOKS3ZPwB%2B4dcNiZE4S60gaj0yKrQxEvOhBvf5eFCeGQWKZavxSSjXDiQ%2Bmf%2By5g9PexxLINEAR44skj&X-Amz-Signature=27b2fffed4fb75e2c6b2997819c764f656a735808f104ee0b9f492e56dc57166&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKL4G3K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUoVge8cbmS7TcOUDa16oApUWaKNFsHP%2Bp9fIrWlsHYAiEAxHW%2BrdAlVttZCgIoVsa%2BcaHdFtBtRdmdWFFtp70XcvEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkU%2B44QA0h%2BHH5mTCrcA9RAHcWMVIrlR0H2xnjqNFnsjJQjrjwhMut06g3vCFDa2daprMHjYXdHWnneCVaXi4KwMRdCSCwYveHrtmC8TgrDvdOn9azFBB6lSJy%2BW3m%2BTF%2FNyDX1qjM2ioX0wynjURKCjDLC5Wk1EsBmc%2FxNiPkFPQDGTJzBbRUugg0tWSaAGi%2F8Zth91T0DZ64yV6XeQ5wusrWnw7qT%2FsOzlaEzzD6CbHDky0QCMFqYi0GSD3UM%2B4NMN5jEQGUU00qWsEl64xU%2FjMCaeBpxrzgE20mw3myTO2bVgg6h5tvS5eKPizXCqw924kXEti285HgIp4SZ%2Fm6ubDjg%2F6JOcUCYD2nE0s8NOSqvig6QZi%2FjYd%2F%2BZcH8A%2BZfUupmvyn%2FZg3xij06rDIkTRVnO%2BBOnLCVplm6s3o0PXtcd2NvSEkv%2BrQA2h8iG2%2BDwWTCgFa8PdBjeFIPuUnYmr23ipvp9E6dVYND%2BE9qrw20lmMBerSAdIW3gYDOHJZJcGBvs2mOKN5e%2BXcgrAIoZXV0GL7MMyhBr1Hayzd2cjGg52fU%2BqETjYoD0Xlxry2Pe0U4hccaOdATtyzF6cygVA083hDi9Z5Ie2yKFU9smbYKAdB9OdwbQe9rvUbEpfznm8RcA3MAk5kMMJqy4cEGOqUBo1fp%2Bo%2BIyhmAO6%2BzM8OEhglvuGmny00chHnOYrXaGZFpHL8lnmbCRKk7C4CIdU%2BADdoxYxD%2BtPiS71P%2F6f%2FbtoDs0BWB6A95myZK4uxGi6dVb%2BKrNKohSQrl25wM0h8gsJhZ6kRPm%2BMIzOKS3ZPwB%2B4dcNiZE4S60gaj0yKrQxEvOhBvf5eFCeGQWKZavxSSjXDiQ%2Bmf%2By5g9PexxLINEAR44skj&X-Amz-Signature=581f080b55d94eec1f9a0c74a914dee79934c5901d1a291f7623cbe65cb4e6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKL4G3K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUoVge8cbmS7TcOUDa16oApUWaKNFsHP%2Bp9fIrWlsHYAiEAxHW%2BrdAlVttZCgIoVsa%2BcaHdFtBtRdmdWFFtp70XcvEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkU%2B44QA0h%2BHH5mTCrcA9RAHcWMVIrlR0H2xnjqNFnsjJQjrjwhMut06g3vCFDa2daprMHjYXdHWnneCVaXi4KwMRdCSCwYveHrtmC8TgrDvdOn9azFBB6lSJy%2BW3m%2BTF%2FNyDX1qjM2ioX0wynjURKCjDLC5Wk1EsBmc%2FxNiPkFPQDGTJzBbRUugg0tWSaAGi%2F8Zth91T0DZ64yV6XeQ5wusrWnw7qT%2FsOzlaEzzD6CbHDky0QCMFqYi0GSD3UM%2B4NMN5jEQGUU00qWsEl64xU%2FjMCaeBpxrzgE20mw3myTO2bVgg6h5tvS5eKPizXCqw924kXEti285HgIp4SZ%2Fm6ubDjg%2F6JOcUCYD2nE0s8NOSqvig6QZi%2FjYd%2F%2BZcH8A%2BZfUupmvyn%2FZg3xij06rDIkTRVnO%2BBOnLCVplm6s3o0PXtcd2NvSEkv%2BrQA2h8iG2%2BDwWTCgFa8PdBjeFIPuUnYmr23ipvp9E6dVYND%2BE9qrw20lmMBerSAdIW3gYDOHJZJcGBvs2mOKN5e%2BXcgrAIoZXV0GL7MMyhBr1Hayzd2cjGg52fU%2BqETjYoD0Xlxry2Pe0U4hccaOdATtyzF6cygVA083hDi9Z5Ie2yKFU9smbYKAdB9OdwbQe9rvUbEpfznm8RcA3MAk5kMMJqy4cEGOqUBo1fp%2Bo%2BIyhmAO6%2BzM8OEhglvuGmny00chHnOYrXaGZFpHL8lnmbCRKk7C4CIdU%2BADdoxYxD%2BtPiS71P%2F6f%2FbtoDs0BWB6A95myZK4uxGi6dVb%2BKrNKohSQrl25wM0h8gsJhZ6kRPm%2BMIzOKS3ZPwB%2B4dcNiZE4S60gaj0yKrQxEvOhBvf5eFCeGQWKZavxSSjXDiQ%2Bmf%2By5g9PexxLINEAR44skj&X-Amz-Signature=5633c1c865041f2e033441ed57c131824ec01e270b6d638642eab07d033054e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
