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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZRVS2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICrCeL8fdS2FKdH9wDnv5qQO0TtXKirqqlUwb09hqY6%2FAiBs0aFxmVqxSC4CakrHBltxqSP2tTG5CK9WWxzcMar9nCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVwzLySgxyW96O3QKtwDwsD%2FDrqc1gVZdzy8ofteW4kFBliClsE0pmGaUuJhxVyas2gw4X1cYJIrTkGvqwpfD61g%2FAHqqoLBdoymbI1m9K5w%2BMDIZvZKthCRIly6IFU7Y7v76QKHVDBqyFOeR3LZgszskapPt1mp%2B6h4sxyZJdL8nZC%2FWGXh2D5XFUL8GXZSE5bsUGmNlTIsbvSCNzdy0YtjxkiFs%2BwAJ4hQ%2F6vUTTIEakC7KebT4%2B1Z01aYSm4OcrcX7bGEQEHSBBehG85UWJK8wjT0mpMpZvsGkESURXsPrJPjdK4m1xg0xJVWWeoRia%2FFR353XmsbTjLxrYACtWWey3OwqjEClmxnPYHcrMFabAbweP9A7bC4oH2FMak6sT0UvoMbhwl0xulkAdOW8LXkT36OPbH9nOIcf0R5OWNC%2FfUF7me3aryQoalS3Qr84AR7PAm%2B6iLN5m0mVfEG8Nl2Kuncpy5zFQwGX3kS0cJd9MUN8lz%2FNJTNjstVNGQ03zDk%2F2uODi%2BOR9mHtJWJGzSKp%2FHwI6dg0PKREDGwwFdZkQuyKhlRbXDjOZVhlZvtVXfOM1VF5J9Vaal6%2Bey5kJYeAMOeVoEkQOK%2BM3Jg0zknXK8FrcfPqcT2JxcbH2xZYuYoYHFO3%2FogZSQw6qOuwgY6pgHT2mAoEKM8hT626FaDRYNk5FproZm0W01BOKQ53pxf%2BCFwEMuapN9uIPwGJ8uCuHRXwUBtS224mOwHVo9FHrKEQohoNLrFzNdoV5uuGydmzdFHC74%2BKRiGUT%2FYBDfsNcCKOwjfFAxcKnRsysLzz%2FKnXKRQzgJmcoghcpxPlfhS8hAUaL%2FzHVS52Rh7IezBKYHf2w7ap7HyRxi8a%2FLm4NGRS4FsZgGM&X-Amz-Signature=21173928ba65c8cfe47122853e3d8658df8bb33f5f4b8d8100248434fd650808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZRVS2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICrCeL8fdS2FKdH9wDnv5qQO0TtXKirqqlUwb09hqY6%2FAiBs0aFxmVqxSC4CakrHBltxqSP2tTG5CK9WWxzcMar9nCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVwzLySgxyW96O3QKtwDwsD%2FDrqc1gVZdzy8ofteW4kFBliClsE0pmGaUuJhxVyas2gw4X1cYJIrTkGvqwpfD61g%2FAHqqoLBdoymbI1m9K5w%2BMDIZvZKthCRIly6IFU7Y7v76QKHVDBqyFOeR3LZgszskapPt1mp%2B6h4sxyZJdL8nZC%2FWGXh2D5XFUL8GXZSE5bsUGmNlTIsbvSCNzdy0YtjxkiFs%2BwAJ4hQ%2F6vUTTIEakC7KebT4%2B1Z01aYSm4OcrcX7bGEQEHSBBehG85UWJK8wjT0mpMpZvsGkESURXsPrJPjdK4m1xg0xJVWWeoRia%2FFR353XmsbTjLxrYACtWWey3OwqjEClmxnPYHcrMFabAbweP9A7bC4oH2FMak6sT0UvoMbhwl0xulkAdOW8LXkT36OPbH9nOIcf0R5OWNC%2FfUF7me3aryQoalS3Qr84AR7PAm%2B6iLN5m0mVfEG8Nl2Kuncpy5zFQwGX3kS0cJd9MUN8lz%2FNJTNjstVNGQ03zDk%2F2uODi%2BOR9mHtJWJGzSKp%2FHwI6dg0PKREDGwwFdZkQuyKhlRbXDjOZVhlZvtVXfOM1VF5J9Vaal6%2Bey5kJYeAMOeVoEkQOK%2BM3Jg0zknXK8FrcfPqcT2JxcbH2xZYuYoYHFO3%2FogZSQw6qOuwgY6pgHT2mAoEKM8hT626FaDRYNk5FproZm0W01BOKQ53pxf%2BCFwEMuapN9uIPwGJ8uCuHRXwUBtS224mOwHVo9FHrKEQohoNLrFzNdoV5uuGydmzdFHC74%2BKRiGUT%2FYBDfsNcCKOwjfFAxcKnRsysLzz%2FKnXKRQzgJmcoghcpxPlfhS8hAUaL%2FzHVS52Rh7IezBKYHf2w7ap7HyRxi8a%2FLm4NGRS4FsZgGM&X-Amz-Signature=73db8169b3bab852ace16393fdfb0a8c0d6fa07bb6f14bd76d803dc546696761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZRVS2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICrCeL8fdS2FKdH9wDnv5qQO0TtXKirqqlUwb09hqY6%2FAiBs0aFxmVqxSC4CakrHBltxqSP2tTG5CK9WWxzcMar9nCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVwzLySgxyW96O3QKtwDwsD%2FDrqc1gVZdzy8ofteW4kFBliClsE0pmGaUuJhxVyas2gw4X1cYJIrTkGvqwpfD61g%2FAHqqoLBdoymbI1m9K5w%2BMDIZvZKthCRIly6IFU7Y7v76QKHVDBqyFOeR3LZgszskapPt1mp%2B6h4sxyZJdL8nZC%2FWGXh2D5XFUL8GXZSE5bsUGmNlTIsbvSCNzdy0YtjxkiFs%2BwAJ4hQ%2F6vUTTIEakC7KebT4%2B1Z01aYSm4OcrcX7bGEQEHSBBehG85UWJK8wjT0mpMpZvsGkESURXsPrJPjdK4m1xg0xJVWWeoRia%2FFR353XmsbTjLxrYACtWWey3OwqjEClmxnPYHcrMFabAbweP9A7bC4oH2FMak6sT0UvoMbhwl0xulkAdOW8LXkT36OPbH9nOIcf0R5OWNC%2FfUF7me3aryQoalS3Qr84AR7PAm%2B6iLN5m0mVfEG8Nl2Kuncpy5zFQwGX3kS0cJd9MUN8lz%2FNJTNjstVNGQ03zDk%2F2uODi%2BOR9mHtJWJGzSKp%2FHwI6dg0PKREDGwwFdZkQuyKhlRbXDjOZVhlZvtVXfOM1VF5J9Vaal6%2Bey5kJYeAMOeVoEkQOK%2BM3Jg0zknXK8FrcfPqcT2JxcbH2xZYuYoYHFO3%2FogZSQw6qOuwgY6pgHT2mAoEKM8hT626FaDRYNk5FproZm0W01BOKQ53pxf%2BCFwEMuapN9uIPwGJ8uCuHRXwUBtS224mOwHVo9FHrKEQohoNLrFzNdoV5uuGydmzdFHC74%2BKRiGUT%2FYBDfsNcCKOwjfFAxcKnRsysLzz%2FKnXKRQzgJmcoghcpxPlfhS8hAUaL%2FzHVS52Rh7IezBKYHf2w7ap7HyRxi8a%2FLm4NGRS4FsZgGM&X-Amz-Signature=6e164f6c0acd7a6e715b7dffdd74fefee1d6688b84e4e3a5d587beb7840d8418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZRVS2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICrCeL8fdS2FKdH9wDnv5qQO0TtXKirqqlUwb09hqY6%2FAiBs0aFxmVqxSC4CakrHBltxqSP2tTG5CK9WWxzcMar9nCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVwzLySgxyW96O3QKtwDwsD%2FDrqc1gVZdzy8ofteW4kFBliClsE0pmGaUuJhxVyas2gw4X1cYJIrTkGvqwpfD61g%2FAHqqoLBdoymbI1m9K5w%2BMDIZvZKthCRIly6IFU7Y7v76QKHVDBqyFOeR3LZgszskapPt1mp%2B6h4sxyZJdL8nZC%2FWGXh2D5XFUL8GXZSE5bsUGmNlTIsbvSCNzdy0YtjxkiFs%2BwAJ4hQ%2F6vUTTIEakC7KebT4%2B1Z01aYSm4OcrcX7bGEQEHSBBehG85UWJK8wjT0mpMpZvsGkESURXsPrJPjdK4m1xg0xJVWWeoRia%2FFR353XmsbTjLxrYACtWWey3OwqjEClmxnPYHcrMFabAbweP9A7bC4oH2FMak6sT0UvoMbhwl0xulkAdOW8LXkT36OPbH9nOIcf0R5OWNC%2FfUF7me3aryQoalS3Qr84AR7PAm%2B6iLN5m0mVfEG8Nl2Kuncpy5zFQwGX3kS0cJd9MUN8lz%2FNJTNjstVNGQ03zDk%2F2uODi%2BOR9mHtJWJGzSKp%2FHwI6dg0PKREDGwwFdZkQuyKhlRbXDjOZVhlZvtVXfOM1VF5J9Vaal6%2Bey5kJYeAMOeVoEkQOK%2BM3Jg0zknXK8FrcfPqcT2JxcbH2xZYuYoYHFO3%2FogZSQw6qOuwgY6pgHT2mAoEKM8hT626FaDRYNk5FproZm0W01BOKQ53pxf%2BCFwEMuapN9uIPwGJ8uCuHRXwUBtS224mOwHVo9FHrKEQohoNLrFzNdoV5uuGydmzdFHC74%2BKRiGUT%2FYBDfsNcCKOwjfFAxcKnRsysLzz%2FKnXKRQzgJmcoghcpxPlfhS8hAUaL%2FzHVS52Rh7IezBKYHf2w7ap7HyRxi8a%2FLm4NGRS4FsZgGM&X-Amz-Signature=baeeb3fee911ca1607a2fd7a57a2d0814f773b91e368fdf498fe70b32bcb6243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZRVS2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICrCeL8fdS2FKdH9wDnv5qQO0TtXKirqqlUwb09hqY6%2FAiBs0aFxmVqxSC4CakrHBltxqSP2tTG5CK9WWxzcMar9nCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVwzLySgxyW96O3QKtwDwsD%2FDrqc1gVZdzy8ofteW4kFBliClsE0pmGaUuJhxVyas2gw4X1cYJIrTkGvqwpfD61g%2FAHqqoLBdoymbI1m9K5w%2BMDIZvZKthCRIly6IFU7Y7v76QKHVDBqyFOeR3LZgszskapPt1mp%2B6h4sxyZJdL8nZC%2FWGXh2D5XFUL8GXZSE5bsUGmNlTIsbvSCNzdy0YtjxkiFs%2BwAJ4hQ%2F6vUTTIEakC7KebT4%2B1Z01aYSm4OcrcX7bGEQEHSBBehG85UWJK8wjT0mpMpZvsGkESURXsPrJPjdK4m1xg0xJVWWeoRia%2FFR353XmsbTjLxrYACtWWey3OwqjEClmxnPYHcrMFabAbweP9A7bC4oH2FMak6sT0UvoMbhwl0xulkAdOW8LXkT36OPbH9nOIcf0R5OWNC%2FfUF7me3aryQoalS3Qr84AR7PAm%2B6iLN5m0mVfEG8Nl2Kuncpy5zFQwGX3kS0cJd9MUN8lz%2FNJTNjstVNGQ03zDk%2F2uODi%2BOR9mHtJWJGzSKp%2FHwI6dg0PKREDGwwFdZkQuyKhlRbXDjOZVhlZvtVXfOM1VF5J9Vaal6%2Bey5kJYeAMOeVoEkQOK%2BM3Jg0zknXK8FrcfPqcT2JxcbH2xZYuYoYHFO3%2FogZSQw6qOuwgY6pgHT2mAoEKM8hT626FaDRYNk5FproZm0W01BOKQ53pxf%2BCFwEMuapN9uIPwGJ8uCuHRXwUBtS224mOwHVo9FHrKEQohoNLrFzNdoV5uuGydmzdFHC74%2BKRiGUT%2FYBDfsNcCKOwjfFAxcKnRsysLzz%2FKnXKRQzgJmcoghcpxPlfhS8hAUaL%2FzHVS52Rh7IezBKYHf2w7ap7HyRxi8a%2FLm4NGRS4FsZgGM&X-Amz-Signature=c7ed14d31e137d54f8be27fba025c424ee4120f2d3f0830b9d93e1d0b903e320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZRVS2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICrCeL8fdS2FKdH9wDnv5qQO0TtXKirqqlUwb09hqY6%2FAiBs0aFxmVqxSC4CakrHBltxqSP2tTG5CK9WWxzcMar9nCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVwzLySgxyW96O3QKtwDwsD%2FDrqc1gVZdzy8ofteW4kFBliClsE0pmGaUuJhxVyas2gw4X1cYJIrTkGvqwpfD61g%2FAHqqoLBdoymbI1m9K5w%2BMDIZvZKthCRIly6IFU7Y7v76QKHVDBqyFOeR3LZgszskapPt1mp%2B6h4sxyZJdL8nZC%2FWGXh2D5XFUL8GXZSE5bsUGmNlTIsbvSCNzdy0YtjxkiFs%2BwAJ4hQ%2F6vUTTIEakC7KebT4%2B1Z01aYSm4OcrcX7bGEQEHSBBehG85UWJK8wjT0mpMpZvsGkESURXsPrJPjdK4m1xg0xJVWWeoRia%2FFR353XmsbTjLxrYACtWWey3OwqjEClmxnPYHcrMFabAbweP9A7bC4oH2FMak6sT0UvoMbhwl0xulkAdOW8LXkT36OPbH9nOIcf0R5OWNC%2FfUF7me3aryQoalS3Qr84AR7PAm%2B6iLN5m0mVfEG8Nl2Kuncpy5zFQwGX3kS0cJd9MUN8lz%2FNJTNjstVNGQ03zDk%2F2uODi%2BOR9mHtJWJGzSKp%2FHwI6dg0PKREDGwwFdZkQuyKhlRbXDjOZVhlZvtVXfOM1VF5J9Vaal6%2Bey5kJYeAMOeVoEkQOK%2BM3Jg0zknXK8FrcfPqcT2JxcbH2xZYuYoYHFO3%2FogZSQw6qOuwgY6pgHT2mAoEKM8hT626FaDRYNk5FproZm0W01BOKQ53pxf%2BCFwEMuapN9uIPwGJ8uCuHRXwUBtS224mOwHVo9FHrKEQohoNLrFzNdoV5uuGydmzdFHC74%2BKRiGUT%2FYBDfsNcCKOwjfFAxcKnRsysLzz%2FKnXKRQzgJmcoghcpxPlfhS8hAUaL%2FzHVS52Rh7IezBKYHf2w7ap7HyRxi8a%2FLm4NGRS4FsZgGM&X-Amz-Signature=e2ff1a070e773bed1d7ed13ae123ca3eaa166bd4570d77055fbda83762cdbeab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZRVS2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICrCeL8fdS2FKdH9wDnv5qQO0TtXKirqqlUwb09hqY6%2FAiBs0aFxmVqxSC4CakrHBltxqSP2tTG5CK9WWxzcMar9nCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVwzLySgxyW96O3QKtwDwsD%2FDrqc1gVZdzy8ofteW4kFBliClsE0pmGaUuJhxVyas2gw4X1cYJIrTkGvqwpfD61g%2FAHqqoLBdoymbI1m9K5w%2BMDIZvZKthCRIly6IFU7Y7v76QKHVDBqyFOeR3LZgszskapPt1mp%2B6h4sxyZJdL8nZC%2FWGXh2D5XFUL8GXZSE5bsUGmNlTIsbvSCNzdy0YtjxkiFs%2BwAJ4hQ%2F6vUTTIEakC7KebT4%2B1Z01aYSm4OcrcX7bGEQEHSBBehG85UWJK8wjT0mpMpZvsGkESURXsPrJPjdK4m1xg0xJVWWeoRia%2FFR353XmsbTjLxrYACtWWey3OwqjEClmxnPYHcrMFabAbweP9A7bC4oH2FMak6sT0UvoMbhwl0xulkAdOW8LXkT36OPbH9nOIcf0R5OWNC%2FfUF7me3aryQoalS3Qr84AR7PAm%2B6iLN5m0mVfEG8Nl2Kuncpy5zFQwGX3kS0cJd9MUN8lz%2FNJTNjstVNGQ03zDk%2F2uODi%2BOR9mHtJWJGzSKp%2FHwI6dg0PKREDGwwFdZkQuyKhlRbXDjOZVhlZvtVXfOM1VF5J9Vaal6%2Bey5kJYeAMOeVoEkQOK%2BM3Jg0zknXK8FrcfPqcT2JxcbH2xZYuYoYHFO3%2FogZSQw6qOuwgY6pgHT2mAoEKM8hT626FaDRYNk5FproZm0W01BOKQ53pxf%2BCFwEMuapN9uIPwGJ8uCuHRXwUBtS224mOwHVo9FHrKEQohoNLrFzNdoV5uuGydmzdFHC74%2BKRiGUT%2FYBDfsNcCKOwjfFAxcKnRsysLzz%2FKnXKRQzgJmcoghcpxPlfhS8hAUaL%2FzHVS52Rh7IezBKYHf2w7ap7HyRxi8a%2FLm4NGRS4FsZgGM&X-Amz-Signature=9f19dabef27995ba459abd865f3abd86da6887062e72a9421c75e62bd5b5e37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
