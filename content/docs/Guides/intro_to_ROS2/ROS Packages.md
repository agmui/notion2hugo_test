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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656J6V3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH8w0JpdbheP9CkMV12Tnhap9UOvkqijsUX0K%2Bmm7lf%2BAiEAjpky%2FWTYKLF7lt5%2B0NKfrzBhQsEEJjvs9vTIvVqRI9sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHLuidlcqMn3P%2FfPFCrcA5qXGf4lVRVN27HQYIinSO0s8GPjFztr0hjJJBzLnJkmCjk9i5KBvWWluayZhzuQwx94n0DQMwOOy3rdV0DHZw0tzpjrRR0WUOY%2FFXvLPII9%2FsibOOygh4qput2q%2FZftzE%2Bt5zRxNOqyuUSzpKPY%2FsYtKsun%2FQd8RNoiZxOiwDBBtzC7tnhh2D6xntrvuwro%2BlbmoCKCT67tqH3LWZCA7GC2hKyZXWU4ID8T7ueNcchEv5E4%2BkIEWvKmyLyK21pBvdK8XdQ88xDVSf4eOMRKpL6l4rjeCNmi9RMVdti%2BZ6GtJxt2WhiSpFBChzJwxNfOl4ewTMC%2F6QFWdovqJ8sQgwYoyKBBP6Mg9HEoUcQRGW1xtdvBpbYAzYbxJTP89yEGlnnNAFOWegN2iaZLXeXiNzNMnXksYe7y8e0TWuE8AsdU%2Fyndk41Uy9LWvHb3JlN3k3rKoyXU86POZ9e6%2FX1MaPZjkeGjd6mdofeZEAT3IklhjAYJPSunMyp1CXgFL3jHlkUitWeJeeiuqPxvUhfB6p4otfT2%2F%2FguT9zlYulV7Wh51fQyeMVzgaOME%2BuUmq1%2BylDER4HIQokSwSci3wkrCoFuoTlfh60u6fLhDwdK36EUwUN9f%2BqJqzZo3ReoMOGy%2BcQGOqUBOl0uNkfcsQUKrUsyFtpyFa7Z3E3J5lJjTUBhEpKLYN4qoXXNN4XN3AcuIL1UCAIk78ACv5Rs5NcXSYhGjcotBM6Ifskvl5qqIYI2JKzizRv%2Bp1GW0yLAaec%2BZ2H7E4WHqxZCP62OuagUNo6%2B6PCuw0uCKZkuiEZ4lle5Y73fNXrRwgCLbFcVwY116SlFU65Jne0HssfCmGLFcpi0uagHbXoIjZn1&X-Amz-Signature=75c15b4c9e4140b8a5242df19f6c1a681d9f99ac95ff45e581763d9f6a23a905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656J6V3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH8w0JpdbheP9CkMV12Tnhap9UOvkqijsUX0K%2Bmm7lf%2BAiEAjpky%2FWTYKLF7lt5%2B0NKfrzBhQsEEJjvs9vTIvVqRI9sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHLuidlcqMn3P%2FfPFCrcA5qXGf4lVRVN27HQYIinSO0s8GPjFztr0hjJJBzLnJkmCjk9i5KBvWWluayZhzuQwx94n0DQMwOOy3rdV0DHZw0tzpjrRR0WUOY%2FFXvLPII9%2FsibOOygh4qput2q%2FZftzE%2Bt5zRxNOqyuUSzpKPY%2FsYtKsun%2FQd8RNoiZxOiwDBBtzC7tnhh2D6xntrvuwro%2BlbmoCKCT67tqH3LWZCA7GC2hKyZXWU4ID8T7ueNcchEv5E4%2BkIEWvKmyLyK21pBvdK8XdQ88xDVSf4eOMRKpL6l4rjeCNmi9RMVdti%2BZ6GtJxt2WhiSpFBChzJwxNfOl4ewTMC%2F6QFWdovqJ8sQgwYoyKBBP6Mg9HEoUcQRGW1xtdvBpbYAzYbxJTP89yEGlnnNAFOWegN2iaZLXeXiNzNMnXksYe7y8e0TWuE8AsdU%2Fyndk41Uy9LWvHb3JlN3k3rKoyXU86POZ9e6%2FX1MaPZjkeGjd6mdofeZEAT3IklhjAYJPSunMyp1CXgFL3jHlkUitWeJeeiuqPxvUhfB6p4otfT2%2F%2FguT9zlYulV7Wh51fQyeMVzgaOME%2BuUmq1%2BylDER4HIQokSwSci3wkrCoFuoTlfh60u6fLhDwdK36EUwUN9f%2BqJqzZo3ReoMOGy%2BcQGOqUBOl0uNkfcsQUKrUsyFtpyFa7Z3E3J5lJjTUBhEpKLYN4qoXXNN4XN3AcuIL1UCAIk78ACv5Rs5NcXSYhGjcotBM6Ifskvl5qqIYI2JKzizRv%2Bp1GW0yLAaec%2BZ2H7E4WHqxZCP62OuagUNo6%2B6PCuw0uCKZkuiEZ4lle5Y73fNXrRwgCLbFcVwY116SlFU65Jne0HssfCmGLFcpi0uagHbXoIjZn1&X-Amz-Signature=98a0c3ef966bbba21a677af32db8180c0661f130afb61d3415b109155f356c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656J6V3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH8w0JpdbheP9CkMV12Tnhap9UOvkqijsUX0K%2Bmm7lf%2BAiEAjpky%2FWTYKLF7lt5%2B0NKfrzBhQsEEJjvs9vTIvVqRI9sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHLuidlcqMn3P%2FfPFCrcA5qXGf4lVRVN27HQYIinSO0s8GPjFztr0hjJJBzLnJkmCjk9i5KBvWWluayZhzuQwx94n0DQMwOOy3rdV0DHZw0tzpjrRR0WUOY%2FFXvLPII9%2FsibOOygh4qput2q%2FZftzE%2Bt5zRxNOqyuUSzpKPY%2FsYtKsun%2FQd8RNoiZxOiwDBBtzC7tnhh2D6xntrvuwro%2BlbmoCKCT67tqH3LWZCA7GC2hKyZXWU4ID8T7ueNcchEv5E4%2BkIEWvKmyLyK21pBvdK8XdQ88xDVSf4eOMRKpL6l4rjeCNmi9RMVdti%2BZ6GtJxt2WhiSpFBChzJwxNfOl4ewTMC%2F6QFWdovqJ8sQgwYoyKBBP6Mg9HEoUcQRGW1xtdvBpbYAzYbxJTP89yEGlnnNAFOWegN2iaZLXeXiNzNMnXksYe7y8e0TWuE8AsdU%2Fyndk41Uy9LWvHb3JlN3k3rKoyXU86POZ9e6%2FX1MaPZjkeGjd6mdofeZEAT3IklhjAYJPSunMyp1CXgFL3jHlkUitWeJeeiuqPxvUhfB6p4otfT2%2F%2FguT9zlYulV7Wh51fQyeMVzgaOME%2BuUmq1%2BylDER4HIQokSwSci3wkrCoFuoTlfh60u6fLhDwdK36EUwUN9f%2BqJqzZo3ReoMOGy%2BcQGOqUBOl0uNkfcsQUKrUsyFtpyFa7Z3E3J5lJjTUBhEpKLYN4qoXXNN4XN3AcuIL1UCAIk78ACv5Rs5NcXSYhGjcotBM6Ifskvl5qqIYI2JKzizRv%2Bp1GW0yLAaec%2BZ2H7E4WHqxZCP62OuagUNo6%2B6PCuw0uCKZkuiEZ4lle5Y73fNXrRwgCLbFcVwY116SlFU65Jne0HssfCmGLFcpi0uagHbXoIjZn1&X-Amz-Signature=6f21ea349384f18f9726fb0c478d4e48b9cb9deee79c0e12f5a20b9d67e8dd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656J6V3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH8w0JpdbheP9CkMV12Tnhap9UOvkqijsUX0K%2Bmm7lf%2BAiEAjpky%2FWTYKLF7lt5%2B0NKfrzBhQsEEJjvs9vTIvVqRI9sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHLuidlcqMn3P%2FfPFCrcA5qXGf4lVRVN27HQYIinSO0s8GPjFztr0hjJJBzLnJkmCjk9i5KBvWWluayZhzuQwx94n0DQMwOOy3rdV0DHZw0tzpjrRR0WUOY%2FFXvLPII9%2FsibOOygh4qput2q%2FZftzE%2Bt5zRxNOqyuUSzpKPY%2FsYtKsun%2FQd8RNoiZxOiwDBBtzC7tnhh2D6xntrvuwro%2BlbmoCKCT67tqH3LWZCA7GC2hKyZXWU4ID8T7ueNcchEv5E4%2BkIEWvKmyLyK21pBvdK8XdQ88xDVSf4eOMRKpL6l4rjeCNmi9RMVdti%2BZ6GtJxt2WhiSpFBChzJwxNfOl4ewTMC%2F6QFWdovqJ8sQgwYoyKBBP6Mg9HEoUcQRGW1xtdvBpbYAzYbxJTP89yEGlnnNAFOWegN2iaZLXeXiNzNMnXksYe7y8e0TWuE8AsdU%2Fyndk41Uy9LWvHb3JlN3k3rKoyXU86POZ9e6%2FX1MaPZjkeGjd6mdofeZEAT3IklhjAYJPSunMyp1CXgFL3jHlkUitWeJeeiuqPxvUhfB6p4otfT2%2F%2FguT9zlYulV7Wh51fQyeMVzgaOME%2BuUmq1%2BylDER4HIQokSwSci3wkrCoFuoTlfh60u6fLhDwdK36EUwUN9f%2BqJqzZo3ReoMOGy%2BcQGOqUBOl0uNkfcsQUKrUsyFtpyFa7Z3E3J5lJjTUBhEpKLYN4qoXXNN4XN3AcuIL1UCAIk78ACv5Rs5NcXSYhGjcotBM6Ifskvl5qqIYI2JKzizRv%2Bp1GW0yLAaec%2BZ2H7E4WHqxZCP62OuagUNo6%2B6PCuw0uCKZkuiEZ4lle5Y73fNXrRwgCLbFcVwY116SlFU65Jne0HssfCmGLFcpi0uagHbXoIjZn1&X-Amz-Signature=39e05ec22318f2907186f90d57298b6d2c7f983d6b93c5849decc64438668e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656J6V3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH8w0JpdbheP9CkMV12Tnhap9UOvkqijsUX0K%2Bmm7lf%2BAiEAjpky%2FWTYKLF7lt5%2B0NKfrzBhQsEEJjvs9vTIvVqRI9sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHLuidlcqMn3P%2FfPFCrcA5qXGf4lVRVN27HQYIinSO0s8GPjFztr0hjJJBzLnJkmCjk9i5KBvWWluayZhzuQwx94n0DQMwOOy3rdV0DHZw0tzpjrRR0WUOY%2FFXvLPII9%2FsibOOygh4qput2q%2FZftzE%2Bt5zRxNOqyuUSzpKPY%2FsYtKsun%2FQd8RNoiZxOiwDBBtzC7tnhh2D6xntrvuwro%2BlbmoCKCT67tqH3LWZCA7GC2hKyZXWU4ID8T7ueNcchEv5E4%2BkIEWvKmyLyK21pBvdK8XdQ88xDVSf4eOMRKpL6l4rjeCNmi9RMVdti%2BZ6GtJxt2WhiSpFBChzJwxNfOl4ewTMC%2F6QFWdovqJ8sQgwYoyKBBP6Mg9HEoUcQRGW1xtdvBpbYAzYbxJTP89yEGlnnNAFOWegN2iaZLXeXiNzNMnXksYe7y8e0TWuE8AsdU%2Fyndk41Uy9LWvHb3JlN3k3rKoyXU86POZ9e6%2FX1MaPZjkeGjd6mdofeZEAT3IklhjAYJPSunMyp1CXgFL3jHlkUitWeJeeiuqPxvUhfB6p4otfT2%2F%2FguT9zlYulV7Wh51fQyeMVzgaOME%2BuUmq1%2BylDER4HIQokSwSci3wkrCoFuoTlfh60u6fLhDwdK36EUwUN9f%2BqJqzZo3ReoMOGy%2BcQGOqUBOl0uNkfcsQUKrUsyFtpyFa7Z3E3J5lJjTUBhEpKLYN4qoXXNN4XN3AcuIL1UCAIk78ACv5Rs5NcXSYhGjcotBM6Ifskvl5qqIYI2JKzizRv%2Bp1GW0yLAaec%2BZ2H7E4WHqxZCP62OuagUNo6%2B6PCuw0uCKZkuiEZ4lle5Y73fNXrRwgCLbFcVwY116SlFU65Jne0HssfCmGLFcpi0uagHbXoIjZn1&X-Amz-Signature=f64e8b8855e31c33e5fbe7d1e3358dc1b97cdbbdaf16c40ce35ee67237ead891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656J6V3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH8w0JpdbheP9CkMV12Tnhap9UOvkqijsUX0K%2Bmm7lf%2BAiEAjpky%2FWTYKLF7lt5%2B0NKfrzBhQsEEJjvs9vTIvVqRI9sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHLuidlcqMn3P%2FfPFCrcA5qXGf4lVRVN27HQYIinSO0s8GPjFztr0hjJJBzLnJkmCjk9i5KBvWWluayZhzuQwx94n0DQMwOOy3rdV0DHZw0tzpjrRR0WUOY%2FFXvLPII9%2FsibOOygh4qput2q%2FZftzE%2Bt5zRxNOqyuUSzpKPY%2FsYtKsun%2FQd8RNoiZxOiwDBBtzC7tnhh2D6xntrvuwro%2BlbmoCKCT67tqH3LWZCA7GC2hKyZXWU4ID8T7ueNcchEv5E4%2BkIEWvKmyLyK21pBvdK8XdQ88xDVSf4eOMRKpL6l4rjeCNmi9RMVdti%2BZ6GtJxt2WhiSpFBChzJwxNfOl4ewTMC%2F6QFWdovqJ8sQgwYoyKBBP6Mg9HEoUcQRGW1xtdvBpbYAzYbxJTP89yEGlnnNAFOWegN2iaZLXeXiNzNMnXksYe7y8e0TWuE8AsdU%2Fyndk41Uy9LWvHb3JlN3k3rKoyXU86POZ9e6%2FX1MaPZjkeGjd6mdofeZEAT3IklhjAYJPSunMyp1CXgFL3jHlkUitWeJeeiuqPxvUhfB6p4otfT2%2F%2FguT9zlYulV7Wh51fQyeMVzgaOME%2BuUmq1%2BylDER4HIQokSwSci3wkrCoFuoTlfh60u6fLhDwdK36EUwUN9f%2BqJqzZo3ReoMOGy%2BcQGOqUBOl0uNkfcsQUKrUsyFtpyFa7Z3E3J5lJjTUBhEpKLYN4qoXXNN4XN3AcuIL1UCAIk78ACv5Rs5NcXSYhGjcotBM6Ifskvl5qqIYI2JKzizRv%2Bp1GW0yLAaec%2BZ2H7E4WHqxZCP62OuagUNo6%2B6PCuw0uCKZkuiEZ4lle5Y73fNXrRwgCLbFcVwY116SlFU65Jne0HssfCmGLFcpi0uagHbXoIjZn1&X-Amz-Signature=bcd04611d8bc87fd5a9fc0dd82b4f60875b33f70f9547e5275d298467ce024a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656J6V3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIH8w0JpdbheP9CkMV12Tnhap9UOvkqijsUX0K%2Bmm7lf%2BAiEAjpky%2FWTYKLF7lt5%2B0NKfrzBhQsEEJjvs9vTIvVqRI9sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHLuidlcqMn3P%2FfPFCrcA5qXGf4lVRVN27HQYIinSO0s8GPjFztr0hjJJBzLnJkmCjk9i5KBvWWluayZhzuQwx94n0DQMwOOy3rdV0DHZw0tzpjrRR0WUOY%2FFXvLPII9%2FsibOOygh4qput2q%2FZftzE%2Bt5zRxNOqyuUSzpKPY%2FsYtKsun%2FQd8RNoiZxOiwDBBtzC7tnhh2D6xntrvuwro%2BlbmoCKCT67tqH3LWZCA7GC2hKyZXWU4ID8T7ueNcchEv5E4%2BkIEWvKmyLyK21pBvdK8XdQ88xDVSf4eOMRKpL6l4rjeCNmi9RMVdti%2BZ6GtJxt2WhiSpFBChzJwxNfOl4ewTMC%2F6QFWdovqJ8sQgwYoyKBBP6Mg9HEoUcQRGW1xtdvBpbYAzYbxJTP89yEGlnnNAFOWegN2iaZLXeXiNzNMnXksYe7y8e0TWuE8AsdU%2Fyndk41Uy9LWvHb3JlN3k3rKoyXU86POZ9e6%2FX1MaPZjkeGjd6mdofeZEAT3IklhjAYJPSunMyp1CXgFL3jHlkUitWeJeeiuqPxvUhfB6p4otfT2%2F%2FguT9zlYulV7Wh51fQyeMVzgaOME%2BuUmq1%2BylDER4HIQokSwSci3wkrCoFuoTlfh60u6fLhDwdK36EUwUN9f%2BqJqzZo3ReoMOGy%2BcQGOqUBOl0uNkfcsQUKrUsyFtpyFa7Z3E3J5lJjTUBhEpKLYN4qoXXNN4XN3AcuIL1UCAIk78ACv5Rs5NcXSYhGjcotBM6Ifskvl5qqIYI2JKzizRv%2Bp1GW0yLAaec%2BZ2H7E4WHqxZCP62OuagUNo6%2B6PCuw0uCKZkuiEZ4lle5Y73fNXrRwgCLbFcVwY116SlFU65Jne0HssfCmGLFcpi0uagHbXoIjZn1&X-Amz-Signature=5f4a01961254418f7984095bf23007ceb94bfe619587e1897be3cf029c3d27c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
