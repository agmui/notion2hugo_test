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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2U6RU7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCevGgRVlXr8KyDSbYdKpi%2B7Yagz041gfwdZnCZ1%2BuY1gIgZVq5cilnV64sLm7GHzTtNZztcw%2FdMP5fgRHJGuvXjHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAcjK53cMK5Kx3VlrCrcA4%2F2MXTi5H0%2Fiv62NpXk6bqWN4yWbcrOstDgd%2BzpHFfWdGih7ivrUghufFB%2BGhtFIHGbmJQr3Q8sBqQW4%2B%2FaMK7zK6skTY6V8I40iho3ti6XOQYqsIS5nY1zcfyAxTKEW%2B5Ctg8t54iN7VvrtKGgR%2BrChk0UQmS8%2BW0VqBnLe6W2MumXtnlW%2BtNi8b%2F2JCrEDr4rP65RFm%2F1Hm6NF6%2Be8rXv9O%2BecPN%2BZEjQSouc1cND81jvBtFiw69kJ3PYeoYs%2BQ%2BgxvXQNMbPWin5O3PWrbtqRgOSeg5UMMGBt%2FCL4T7TiKbYFTdE5OpmDqaBxh4I0FMAW8RHAspf9V83WHuLdeYm%2B0CR6p2vsp4Iql3%2B%2FDB5IE%2FVIdRx2%2Fcc%2FqVVG0S%2BobXj%2BHtxFnl6mcaqlrZHzb6atFU7p%2BJ%2B%2Fpw092jdJsiK9cBB9zT94mwy%2Flx8thljUDrw1lMTqbp0gtsghl%2FvnqX3%2B6KvXz9Dix9LD4sQMllqDePvnLG6g72HLAclrhvwn15X9hDTwrNvlV8l7ekasOKqK1dAf4196oZN%2BdRYd5HrbrYNxwFwVpwNOqoGgSF9qQsk2SYywyFaREO99Hxz6jyFAtd%2F4lddODFASa9QUsUjy8xEBymXf8xFkmqfMJfpy70GOqUB8Te2nCBNvl3I98sdnqR0LrMPbX8rdOdmh0ppU0nX%2FRXWXuXEgCoT3hlCd2r%2FcG9hCSCM8G574KwiOc9vkUXoaW9LT810ttg2PEIEcqKV4PvUMzsrX1ucrTm%2FHaIcFZB7dluPXN0vz%2Fu366EsPMPGSBNbn2Ggr%2F1bJOqkPELw8O0nvkQEoBL6r39GSW8AJc6sP8Pekv%2BQQ8cNA2vlMo%2B5E0%2F846M6&X-Amz-Signature=df4b28c2ba8d6d6710edcf86c7714fc1a9c14cf6f53fcb9bc73a324b7c27c473&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2U6RU7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCevGgRVlXr8KyDSbYdKpi%2B7Yagz041gfwdZnCZ1%2BuY1gIgZVq5cilnV64sLm7GHzTtNZztcw%2FdMP5fgRHJGuvXjHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAcjK53cMK5Kx3VlrCrcA4%2F2MXTi5H0%2Fiv62NpXk6bqWN4yWbcrOstDgd%2BzpHFfWdGih7ivrUghufFB%2BGhtFIHGbmJQr3Q8sBqQW4%2B%2FaMK7zK6skTY6V8I40iho3ti6XOQYqsIS5nY1zcfyAxTKEW%2B5Ctg8t54iN7VvrtKGgR%2BrChk0UQmS8%2BW0VqBnLe6W2MumXtnlW%2BtNi8b%2F2JCrEDr4rP65RFm%2F1Hm6NF6%2Be8rXv9O%2BecPN%2BZEjQSouc1cND81jvBtFiw69kJ3PYeoYs%2BQ%2BgxvXQNMbPWin5O3PWrbtqRgOSeg5UMMGBt%2FCL4T7TiKbYFTdE5OpmDqaBxh4I0FMAW8RHAspf9V83WHuLdeYm%2B0CR6p2vsp4Iql3%2B%2FDB5IE%2FVIdRx2%2Fcc%2FqVVG0S%2BobXj%2BHtxFnl6mcaqlrZHzb6atFU7p%2BJ%2B%2Fpw092jdJsiK9cBB9zT94mwy%2Flx8thljUDrw1lMTqbp0gtsghl%2FvnqX3%2B6KvXz9Dix9LD4sQMllqDePvnLG6g72HLAclrhvwn15X9hDTwrNvlV8l7ekasOKqK1dAf4196oZN%2BdRYd5HrbrYNxwFwVpwNOqoGgSF9qQsk2SYywyFaREO99Hxz6jyFAtd%2F4lddODFASa9QUsUjy8xEBymXf8xFkmqfMJfpy70GOqUB8Te2nCBNvl3I98sdnqR0LrMPbX8rdOdmh0ppU0nX%2FRXWXuXEgCoT3hlCd2r%2FcG9hCSCM8G574KwiOc9vkUXoaW9LT810ttg2PEIEcqKV4PvUMzsrX1ucrTm%2FHaIcFZB7dluPXN0vz%2Fu366EsPMPGSBNbn2Ggr%2F1bJOqkPELw8O0nvkQEoBL6r39GSW8AJc6sP8Pekv%2BQQ8cNA2vlMo%2B5E0%2F846M6&X-Amz-Signature=fd93aa8c7a9a9824f3a45d4b6035586ef48f2e4ba3df80067f2c37ac9fc2289f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2U6RU7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCevGgRVlXr8KyDSbYdKpi%2B7Yagz041gfwdZnCZ1%2BuY1gIgZVq5cilnV64sLm7GHzTtNZztcw%2FdMP5fgRHJGuvXjHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAcjK53cMK5Kx3VlrCrcA4%2F2MXTi5H0%2Fiv62NpXk6bqWN4yWbcrOstDgd%2BzpHFfWdGih7ivrUghufFB%2BGhtFIHGbmJQr3Q8sBqQW4%2B%2FaMK7zK6skTY6V8I40iho3ti6XOQYqsIS5nY1zcfyAxTKEW%2B5Ctg8t54iN7VvrtKGgR%2BrChk0UQmS8%2BW0VqBnLe6W2MumXtnlW%2BtNi8b%2F2JCrEDr4rP65RFm%2F1Hm6NF6%2Be8rXv9O%2BecPN%2BZEjQSouc1cND81jvBtFiw69kJ3PYeoYs%2BQ%2BgxvXQNMbPWin5O3PWrbtqRgOSeg5UMMGBt%2FCL4T7TiKbYFTdE5OpmDqaBxh4I0FMAW8RHAspf9V83WHuLdeYm%2B0CR6p2vsp4Iql3%2B%2FDB5IE%2FVIdRx2%2Fcc%2FqVVG0S%2BobXj%2BHtxFnl6mcaqlrZHzb6atFU7p%2BJ%2B%2Fpw092jdJsiK9cBB9zT94mwy%2Flx8thljUDrw1lMTqbp0gtsghl%2FvnqX3%2B6KvXz9Dix9LD4sQMllqDePvnLG6g72HLAclrhvwn15X9hDTwrNvlV8l7ekasOKqK1dAf4196oZN%2BdRYd5HrbrYNxwFwVpwNOqoGgSF9qQsk2SYywyFaREO99Hxz6jyFAtd%2F4lddODFASa9QUsUjy8xEBymXf8xFkmqfMJfpy70GOqUB8Te2nCBNvl3I98sdnqR0LrMPbX8rdOdmh0ppU0nX%2FRXWXuXEgCoT3hlCd2r%2FcG9hCSCM8G574KwiOc9vkUXoaW9LT810ttg2PEIEcqKV4PvUMzsrX1ucrTm%2FHaIcFZB7dluPXN0vz%2Fu366EsPMPGSBNbn2Ggr%2F1bJOqkPELw8O0nvkQEoBL6r39GSW8AJc6sP8Pekv%2BQQ8cNA2vlMo%2B5E0%2F846M6&X-Amz-Signature=1f410324b1bcb20bd36d7c23cfbc5326c6da78899b0753c1ffbd04688c90b2e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2U6RU7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCevGgRVlXr8KyDSbYdKpi%2B7Yagz041gfwdZnCZ1%2BuY1gIgZVq5cilnV64sLm7GHzTtNZztcw%2FdMP5fgRHJGuvXjHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAcjK53cMK5Kx3VlrCrcA4%2F2MXTi5H0%2Fiv62NpXk6bqWN4yWbcrOstDgd%2BzpHFfWdGih7ivrUghufFB%2BGhtFIHGbmJQr3Q8sBqQW4%2B%2FaMK7zK6skTY6V8I40iho3ti6XOQYqsIS5nY1zcfyAxTKEW%2B5Ctg8t54iN7VvrtKGgR%2BrChk0UQmS8%2BW0VqBnLe6W2MumXtnlW%2BtNi8b%2F2JCrEDr4rP65RFm%2F1Hm6NF6%2Be8rXv9O%2BecPN%2BZEjQSouc1cND81jvBtFiw69kJ3PYeoYs%2BQ%2BgxvXQNMbPWin5O3PWrbtqRgOSeg5UMMGBt%2FCL4T7TiKbYFTdE5OpmDqaBxh4I0FMAW8RHAspf9V83WHuLdeYm%2B0CR6p2vsp4Iql3%2B%2FDB5IE%2FVIdRx2%2Fcc%2FqVVG0S%2BobXj%2BHtxFnl6mcaqlrZHzb6atFU7p%2BJ%2B%2Fpw092jdJsiK9cBB9zT94mwy%2Flx8thljUDrw1lMTqbp0gtsghl%2FvnqX3%2B6KvXz9Dix9LD4sQMllqDePvnLG6g72HLAclrhvwn15X9hDTwrNvlV8l7ekasOKqK1dAf4196oZN%2BdRYd5HrbrYNxwFwVpwNOqoGgSF9qQsk2SYywyFaREO99Hxz6jyFAtd%2F4lddODFASa9QUsUjy8xEBymXf8xFkmqfMJfpy70GOqUB8Te2nCBNvl3I98sdnqR0LrMPbX8rdOdmh0ppU0nX%2FRXWXuXEgCoT3hlCd2r%2FcG9hCSCM8G574KwiOc9vkUXoaW9LT810ttg2PEIEcqKV4PvUMzsrX1ucrTm%2FHaIcFZB7dluPXN0vz%2Fu366EsPMPGSBNbn2Ggr%2F1bJOqkPELw8O0nvkQEoBL6r39GSW8AJc6sP8Pekv%2BQQ8cNA2vlMo%2B5E0%2F846M6&X-Amz-Signature=6d93fa29d1b39aa678b4218bd6fa7c50aa7bb41ebe112b7b6ecda1a10805acab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2U6RU7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCevGgRVlXr8KyDSbYdKpi%2B7Yagz041gfwdZnCZ1%2BuY1gIgZVq5cilnV64sLm7GHzTtNZztcw%2FdMP5fgRHJGuvXjHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAcjK53cMK5Kx3VlrCrcA4%2F2MXTi5H0%2Fiv62NpXk6bqWN4yWbcrOstDgd%2BzpHFfWdGih7ivrUghufFB%2BGhtFIHGbmJQr3Q8sBqQW4%2B%2FaMK7zK6skTY6V8I40iho3ti6XOQYqsIS5nY1zcfyAxTKEW%2B5Ctg8t54iN7VvrtKGgR%2BrChk0UQmS8%2BW0VqBnLe6W2MumXtnlW%2BtNi8b%2F2JCrEDr4rP65RFm%2F1Hm6NF6%2Be8rXv9O%2BecPN%2BZEjQSouc1cND81jvBtFiw69kJ3PYeoYs%2BQ%2BgxvXQNMbPWin5O3PWrbtqRgOSeg5UMMGBt%2FCL4T7TiKbYFTdE5OpmDqaBxh4I0FMAW8RHAspf9V83WHuLdeYm%2B0CR6p2vsp4Iql3%2B%2FDB5IE%2FVIdRx2%2Fcc%2FqVVG0S%2BobXj%2BHtxFnl6mcaqlrZHzb6atFU7p%2BJ%2B%2Fpw092jdJsiK9cBB9zT94mwy%2Flx8thljUDrw1lMTqbp0gtsghl%2FvnqX3%2B6KvXz9Dix9LD4sQMllqDePvnLG6g72HLAclrhvwn15X9hDTwrNvlV8l7ekasOKqK1dAf4196oZN%2BdRYd5HrbrYNxwFwVpwNOqoGgSF9qQsk2SYywyFaREO99Hxz6jyFAtd%2F4lddODFASa9QUsUjy8xEBymXf8xFkmqfMJfpy70GOqUB8Te2nCBNvl3I98sdnqR0LrMPbX8rdOdmh0ppU0nX%2FRXWXuXEgCoT3hlCd2r%2FcG9hCSCM8G574KwiOc9vkUXoaW9LT810ttg2PEIEcqKV4PvUMzsrX1ucrTm%2FHaIcFZB7dluPXN0vz%2Fu366EsPMPGSBNbn2Ggr%2F1bJOqkPELw8O0nvkQEoBL6r39GSW8AJc6sP8Pekv%2BQQ8cNA2vlMo%2B5E0%2F846M6&X-Amz-Signature=96bded175946d9c9e2d30888b00cdc4529d7fba0d939a8d21fa070d0fe817d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2U6RU7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCevGgRVlXr8KyDSbYdKpi%2B7Yagz041gfwdZnCZ1%2BuY1gIgZVq5cilnV64sLm7GHzTtNZztcw%2FdMP5fgRHJGuvXjHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAcjK53cMK5Kx3VlrCrcA4%2F2MXTi5H0%2Fiv62NpXk6bqWN4yWbcrOstDgd%2BzpHFfWdGih7ivrUghufFB%2BGhtFIHGbmJQr3Q8sBqQW4%2B%2FaMK7zK6skTY6V8I40iho3ti6XOQYqsIS5nY1zcfyAxTKEW%2B5Ctg8t54iN7VvrtKGgR%2BrChk0UQmS8%2BW0VqBnLe6W2MumXtnlW%2BtNi8b%2F2JCrEDr4rP65RFm%2F1Hm6NF6%2Be8rXv9O%2BecPN%2BZEjQSouc1cND81jvBtFiw69kJ3PYeoYs%2BQ%2BgxvXQNMbPWin5O3PWrbtqRgOSeg5UMMGBt%2FCL4T7TiKbYFTdE5OpmDqaBxh4I0FMAW8RHAspf9V83WHuLdeYm%2B0CR6p2vsp4Iql3%2B%2FDB5IE%2FVIdRx2%2Fcc%2FqVVG0S%2BobXj%2BHtxFnl6mcaqlrZHzb6atFU7p%2BJ%2B%2Fpw092jdJsiK9cBB9zT94mwy%2Flx8thljUDrw1lMTqbp0gtsghl%2FvnqX3%2B6KvXz9Dix9LD4sQMllqDePvnLG6g72HLAclrhvwn15X9hDTwrNvlV8l7ekasOKqK1dAf4196oZN%2BdRYd5HrbrYNxwFwVpwNOqoGgSF9qQsk2SYywyFaREO99Hxz6jyFAtd%2F4lddODFASa9QUsUjy8xEBymXf8xFkmqfMJfpy70GOqUB8Te2nCBNvl3I98sdnqR0LrMPbX8rdOdmh0ppU0nX%2FRXWXuXEgCoT3hlCd2r%2FcG9hCSCM8G574KwiOc9vkUXoaW9LT810ttg2PEIEcqKV4PvUMzsrX1ucrTm%2FHaIcFZB7dluPXN0vz%2Fu366EsPMPGSBNbn2Ggr%2F1bJOqkPELw8O0nvkQEoBL6r39GSW8AJc6sP8Pekv%2BQQ8cNA2vlMo%2B5E0%2F846M6&X-Amz-Signature=6d4b1b32b4a75828946fdf49c61f61e7c39e42db85aff8486ce7bc590f85494a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2U6RU7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCevGgRVlXr8KyDSbYdKpi%2B7Yagz041gfwdZnCZ1%2BuY1gIgZVq5cilnV64sLm7GHzTtNZztcw%2FdMP5fgRHJGuvXjHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAcjK53cMK5Kx3VlrCrcA4%2F2MXTi5H0%2Fiv62NpXk6bqWN4yWbcrOstDgd%2BzpHFfWdGih7ivrUghufFB%2BGhtFIHGbmJQr3Q8sBqQW4%2B%2FaMK7zK6skTY6V8I40iho3ti6XOQYqsIS5nY1zcfyAxTKEW%2B5Ctg8t54iN7VvrtKGgR%2BrChk0UQmS8%2BW0VqBnLe6W2MumXtnlW%2BtNi8b%2F2JCrEDr4rP65RFm%2F1Hm6NF6%2Be8rXv9O%2BecPN%2BZEjQSouc1cND81jvBtFiw69kJ3PYeoYs%2BQ%2BgxvXQNMbPWin5O3PWrbtqRgOSeg5UMMGBt%2FCL4T7TiKbYFTdE5OpmDqaBxh4I0FMAW8RHAspf9V83WHuLdeYm%2B0CR6p2vsp4Iql3%2B%2FDB5IE%2FVIdRx2%2Fcc%2FqVVG0S%2BobXj%2BHtxFnl6mcaqlrZHzb6atFU7p%2BJ%2B%2Fpw092jdJsiK9cBB9zT94mwy%2Flx8thljUDrw1lMTqbp0gtsghl%2FvnqX3%2B6KvXz9Dix9LD4sQMllqDePvnLG6g72HLAclrhvwn15X9hDTwrNvlV8l7ekasOKqK1dAf4196oZN%2BdRYd5HrbrYNxwFwVpwNOqoGgSF9qQsk2SYywyFaREO99Hxz6jyFAtd%2F4lddODFASa9QUsUjy8xEBymXf8xFkmqfMJfpy70GOqUB8Te2nCBNvl3I98sdnqR0LrMPbX8rdOdmh0ppU0nX%2FRXWXuXEgCoT3hlCd2r%2FcG9hCSCM8G574KwiOc9vkUXoaW9LT810ttg2PEIEcqKV4PvUMzsrX1ucrTm%2FHaIcFZB7dluPXN0vz%2Fu366EsPMPGSBNbn2Ggr%2F1bJOqkPELw8O0nvkQEoBL6r39GSW8AJc6sP8Pekv%2BQQ8cNA2vlMo%2B5E0%2F846M6&X-Amz-Signature=c4adc8594a919cb09f5aa7ff3614955f6954b66f107f473de1f745ff06d52e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
