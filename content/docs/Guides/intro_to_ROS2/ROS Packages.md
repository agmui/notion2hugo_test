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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V4LZUG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICTSdSM8Htny8Zr6RMEyO8fI4M6hrA8e2DQhjSzSzP2cAiEA54HnE7GX3FDHoNB6iZxZVF2W3Cq9Ru%2FA25AOTQkPmtUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDImnugp99k9zZ5zRQCrcA%2Fx0GiafVxXbGmp05kfg8X4LMiEbwWd8uZfMMyJi%2Bmu9HQNBvmWs835bv0hWs02xxJi%2FaO0u%2BZQ1dkfMXzLvXKyUOYGZhDkSIO1L6FIavuTB6VLap%2BHNMUGabDraDjb6cVg0Df80WxMm7GVLeZ%2BiFgEPEOjgoVpz0xtNf6b%2FCQN7U3ivwKqBYyAvH2K1yelHLrKk%2BfFAa%2FfVhi1hMVS4VCJk%2FriF4N64wp9uwxNBb6p6IQmVTkStj%2FIpV4UnfOvIoS99SQggB29oUu7K0ggpSI4JIPVK3hqAIwc3aRJOc2m6PB0Ys4XeEHbXGvo2XA2JI%2FBEMVkSWQkU87qLAbTf0yUJCX0nmDkNvXUUANVvnbS%2B1J%2BmIFD1saUIiT6PZL4EqMY5YyXjNPmzsTBOXAUFHMjBM9%2Bm2BokndOEcbjsK7U05Xh712oP8c77cNdwBAEWA0x1DqVmC%2FSJa7mbO%2FO5c%2ByclxBTltfDiB5lauAaDhRcJca8LtDaScqG5VYJzkuxmM7J9RkROxldRkyps6perVJV7w7bYddKpw%2FyQoMZMoUPqvgbgSfWlCXj7yvg0OGy4FVbqfc%2F9icEtFqtrKF9LqRWRyROYuO0ABg2BHZ%2FTdvoG%2FWjRrytfnwWHQq6MPfehcIGOqUBMHuapV5OKaHv4q0fQVnRjuM%2F5MxEe7DnLg1HHqCUUuUF7LIv3hgDo7OXFT23J99iYz5SEp3bhv%2BxcgKeVtoaxD0dN3Ca1fBpYCPx7ekDjANnNMvoj8QE5hKAxizM76vrTbUtnXLjQOUeelEftL8XQ4q9akmt9K1J1cjAAitIXkgyduLqZLReaE2re5UaxU6RS9datYHb2T4iPbiyH1%2BoJqcGOtNF&X-Amz-Signature=d8670c654b846d89ac6344b5135a1bc0015cd9ab31a7953ebb3a5a4962598de3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V4LZUG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICTSdSM8Htny8Zr6RMEyO8fI4M6hrA8e2DQhjSzSzP2cAiEA54HnE7GX3FDHoNB6iZxZVF2W3Cq9Ru%2FA25AOTQkPmtUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDImnugp99k9zZ5zRQCrcA%2Fx0GiafVxXbGmp05kfg8X4LMiEbwWd8uZfMMyJi%2Bmu9HQNBvmWs835bv0hWs02xxJi%2FaO0u%2BZQ1dkfMXzLvXKyUOYGZhDkSIO1L6FIavuTB6VLap%2BHNMUGabDraDjb6cVg0Df80WxMm7GVLeZ%2BiFgEPEOjgoVpz0xtNf6b%2FCQN7U3ivwKqBYyAvH2K1yelHLrKk%2BfFAa%2FfVhi1hMVS4VCJk%2FriF4N64wp9uwxNBb6p6IQmVTkStj%2FIpV4UnfOvIoS99SQggB29oUu7K0ggpSI4JIPVK3hqAIwc3aRJOc2m6PB0Ys4XeEHbXGvo2XA2JI%2FBEMVkSWQkU87qLAbTf0yUJCX0nmDkNvXUUANVvnbS%2B1J%2BmIFD1saUIiT6PZL4EqMY5YyXjNPmzsTBOXAUFHMjBM9%2Bm2BokndOEcbjsK7U05Xh712oP8c77cNdwBAEWA0x1DqVmC%2FSJa7mbO%2FO5c%2ByclxBTltfDiB5lauAaDhRcJca8LtDaScqG5VYJzkuxmM7J9RkROxldRkyps6perVJV7w7bYddKpw%2FyQoMZMoUPqvgbgSfWlCXj7yvg0OGy4FVbqfc%2F9icEtFqtrKF9LqRWRyROYuO0ABg2BHZ%2FTdvoG%2FWjRrytfnwWHQq6MPfehcIGOqUBMHuapV5OKaHv4q0fQVnRjuM%2F5MxEe7DnLg1HHqCUUuUF7LIv3hgDo7OXFT23J99iYz5SEp3bhv%2BxcgKeVtoaxD0dN3Ca1fBpYCPx7ekDjANnNMvoj8QE5hKAxizM76vrTbUtnXLjQOUeelEftL8XQ4q9akmt9K1J1cjAAitIXkgyduLqZLReaE2re5UaxU6RS9datYHb2T4iPbiyH1%2BoJqcGOtNF&X-Amz-Signature=defb206986fee079ab8b561838674a8ee9115193a89283ce1bf04efe3e4cf34d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V4LZUG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICTSdSM8Htny8Zr6RMEyO8fI4M6hrA8e2DQhjSzSzP2cAiEA54HnE7GX3FDHoNB6iZxZVF2W3Cq9Ru%2FA25AOTQkPmtUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDImnugp99k9zZ5zRQCrcA%2Fx0GiafVxXbGmp05kfg8X4LMiEbwWd8uZfMMyJi%2Bmu9HQNBvmWs835bv0hWs02xxJi%2FaO0u%2BZQ1dkfMXzLvXKyUOYGZhDkSIO1L6FIavuTB6VLap%2BHNMUGabDraDjb6cVg0Df80WxMm7GVLeZ%2BiFgEPEOjgoVpz0xtNf6b%2FCQN7U3ivwKqBYyAvH2K1yelHLrKk%2BfFAa%2FfVhi1hMVS4VCJk%2FriF4N64wp9uwxNBb6p6IQmVTkStj%2FIpV4UnfOvIoS99SQggB29oUu7K0ggpSI4JIPVK3hqAIwc3aRJOc2m6PB0Ys4XeEHbXGvo2XA2JI%2FBEMVkSWQkU87qLAbTf0yUJCX0nmDkNvXUUANVvnbS%2B1J%2BmIFD1saUIiT6PZL4EqMY5YyXjNPmzsTBOXAUFHMjBM9%2Bm2BokndOEcbjsK7U05Xh712oP8c77cNdwBAEWA0x1DqVmC%2FSJa7mbO%2FO5c%2ByclxBTltfDiB5lauAaDhRcJca8LtDaScqG5VYJzkuxmM7J9RkROxldRkyps6perVJV7w7bYddKpw%2FyQoMZMoUPqvgbgSfWlCXj7yvg0OGy4FVbqfc%2F9icEtFqtrKF9LqRWRyROYuO0ABg2BHZ%2FTdvoG%2FWjRrytfnwWHQq6MPfehcIGOqUBMHuapV5OKaHv4q0fQVnRjuM%2F5MxEe7DnLg1HHqCUUuUF7LIv3hgDo7OXFT23J99iYz5SEp3bhv%2BxcgKeVtoaxD0dN3Ca1fBpYCPx7ekDjANnNMvoj8QE5hKAxizM76vrTbUtnXLjQOUeelEftL8XQ4q9akmt9K1J1cjAAitIXkgyduLqZLReaE2re5UaxU6RS9datYHb2T4iPbiyH1%2BoJqcGOtNF&X-Amz-Signature=1987843f87969ba7609eaf15e80741a6d4ca6f3dc67ce15d2aaf1c8d5439488e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V4LZUG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICTSdSM8Htny8Zr6RMEyO8fI4M6hrA8e2DQhjSzSzP2cAiEA54HnE7GX3FDHoNB6iZxZVF2W3Cq9Ru%2FA25AOTQkPmtUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDImnugp99k9zZ5zRQCrcA%2Fx0GiafVxXbGmp05kfg8X4LMiEbwWd8uZfMMyJi%2Bmu9HQNBvmWs835bv0hWs02xxJi%2FaO0u%2BZQ1dkfMXzLvXKyUOYGZhDkSIO1L6FIavuTB6VLap%2BHNMUGabDraDjb6cVg0Df80WxMm7GVLeZ%2BiFgEPEOjgoVpz0xtNf6b%2FCQN7U3ivwKqBYyAvH2K1yelHLrKk%2BfFAa%2FfVhi1hMVS4VCJk%2FriF4N64wp9uwxNBb6p6IQmVTkStj%2FIpV4UnfOvIoS99SQggB29oUu7K0ggpSI4JIPVK3hqAIwc3aRJOc2m6PB0Ys4XeEHbXGvo2XA2JI%2FBEMVkSWQkU87qLAbTf0yUJCX0nmDkNvXUUANVvnbS%2B1J%2BmIFD1saUIiT6PZL4EqMY5YyXjNPmzsTBOXAUFHMjBM9%2Bm2BokndOEcbjsK7U05Xh712oP8c77cNdwBAEWA0x1DqVmC%2FSJa7mbO%2FO5c%2ByclxBTltfDiB5lauAaDhRcJca8LtDaScqG5VYJzkuxmM7J9RkROxldRkyps6perVJV7w7bYddKpw%2FyQoMZMoUPqvgbgSfWlCXj7yvg0OGy4FVbqfc%2F9icEtFqtrKF9LqRWRyROYuO0ABg2BHZ%2FTdvoG%2FWjRrytfnwWHQq6MPfehcIGOqUBMHuapV5OKaHv4q0fQVnRjuM%2F5MxEe7DnLg1HHqCUUuUF7LIv3hgDo7OXFT23J99iYz5SEp3bhv%2BxcgKeVtoaxD0dN3Ca1fBpYCPx7ekDjANnNMvoj8QE5hKAxizM76vrTbUtnXLjQOUeelEftL8XQ4q9akmt9K1J1cjAAitIXkgyduLqZLReaE2re5UaxU6RS9datYHb2T4iPbiyH1%2BoJqcGOtNF&X-Amz-Signature=601d55f13237c1b002f9ffcdf5714d293be27a8599ff54dd67b99cc12af74b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V4LZUG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICTSdSM8Htny8Zr6RMEyO8fI4M6hrA8e2DQhjSzSzP2cAiEA54HnE7GX3FDHoNB6iZxZVF2W3Cq9Ru%2FA25AOTQkPmtUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDImnugp99k9zZ5zRQCrcA%2Fx0GiafVxXbGmp05kfg8X4LMiEbwWd8uZfMMyJi%2Bmu9HQNBvmWs835bv0hWs02xxJi%2FaO0u%2BZQ1dkfMXzLvXKyUOYGZhDkSIO1L6FIavuTB6VLap%2BHNMUGabDraDjb6cVg0Df80WxMm7GVLeZ%2BiFgEPEOjgoVpz0xtNf6b%2FCQN7U3ivwKqBYyAvH2K1yelHLrKk%2BfFAa%2FfVhi1hMVS4VCJk%2FriF4N64wp9uwxNBb6p6IQmVTkStj%2FIpV4UnfOvIoS99SQggB29oUu7K0ggpSI4JIPVK3hqAIwc3aRJOc2m6PB0Ys4XeEHbXGvo2XA2JI%2FBEMVkSWQkU87qLAbTf0yUJCX0nmDkNvXUUANVvnbS%2B1J%2BmIFD1saUIiT6PZL4EqMY5YyXjNPmzsTBOXAUFHMjBM9%2Bm2BokndOEcbjsK7U05Xh712oP8c77cNdwBAEWA0x1DqVmC%2FSJa7mbO%2FO5c%2ByclxBTltfDiB5lauAaDhRcJca8LtDaScqG5VYJzkuxmM7J9RkROxldRkyps6perVJV7w7bYddKpw%2FyQoMZMoUPqvgbgSfWlCXj7yvg0OGy4FVbqfc%2F9icEtFqtrKF9LqRWRyROYuO0ABg2BHZ%2FTdvoG%2FWjRrytfnwWHQq6MPfehcIGOqUBMHuapV5OKaHv4q0fQVnRjuM%2F5MxEe7DnLg1HHqCUUuUF7LIv3hgDo7OXFT23J99iYz5SEp3bhv%2BxcgKeVtoaxD0dN3Ca1fBpYCPx7ekDjANnNMvoj8QE5hKAxizM76vrTbUtnXLjQOUeelEftL8XQ4q9akmt9K1J1cjAAitIXkgyduLqZLReaE2re5UaxU6RS9datYHb2T4iPbiyH1%2BoJqcGOtNF&X-Amz-Signature=441e768302c3785d8a6cb13e056333706a5ef95c65b03a0bcd326a56001d3e79&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V4LZUG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICTSdSM8Htny8Zr6RMEyO8fI4M6hrA8e2DQhjSzSzP2cAiEA54HnE7GX3FDHoNB6iZxZVF2W3Cq9Ru%2FA25AOTQkPmtUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDImnugp99k9zZ5zRQCrcA%2Fx0GiafVxXbGmp05kfg8X4LMiEbwWd8uZfMMyJi%2Bmu9HQNBvmWs835bv0hWs02xxJi%2FaO0u%2BZQ1dkfMXzLvXKyUOYGZhDkSIO1L6FIavuTB6VLap%2BHNMUGabDraDjb6cVg0Df80WxMm7GVLeZ%2BiFgEPEOjgoVpz0xtNf6b%2FCQN7U3ivwKqBYyAvH2K1yelHLrKk%2BfFAa%2FfVhi1hMVS4VCJk%2FriF4N64wp9uwxNBb6p6IQmVTkStj%2FIpV4UnfOvIoS99SQggB29oUu7K0ggpSI4JIPVK3hqAIwc3aRJOc2m6PB0Ys4XeEHbXGvo2XA2JI%2FBEMVkSWQkU87qLAbTf0yUJCX0nmDkNvXUUANVvnbS%2B1J%2BmIFD1saUIiT6PZL4EqMY5YyXjNPmzsTBOXAUFHMjBM9%2Bm2BokndOEcbjsK7U05Xh712oP8c77cNdwBAEWA0x1DqVmC%2FSJa7mbO%2FO5c%2ByclxBTltfDiB5lauAaDhRcJca8LtDaScqG5VYJzkuxmM7J9RkROxldRkyps6perVJV7w7bYddKpw%2FyQoMZMoUPqvgbgSfWlCXj7yvg0OGy4FVbqfc%2F9icEtFqtrKF9LqRWRyROYuO0ABg2BHZ%2FTdvoG%2FWjRrytfnwWHQq6MPfehcIGOqUBMHuapV5OKaHv4q0fQVnRjuM%2F5MxEe7DnLg1HHqCUUuUF7LIv3hgDo7OXFT23J99iYz5SEp3bhv%2BxcgKeVtoaxD0dN3Ca1fBpYCPx7ekDjANnNMvoj8QE5hKAxizM76vrTbUtnXLjQOUeelEftL8XQ4q9akmt9K1J1cjAAitIXkgyduLqZLReaE2re5UaxU6RS9datYHb2T4iPbiyH1%2BoJqcGOtNF&X-Amz-Signature=d20cbe5cb88459008699e22072884962d8d18a8018bd6d995a2d66e66547e316&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V4LZUG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCICTSdSM8Htny8Zr6RMEyO8fI4M6hrA8e2DQhjSzSzP2cAiEA54HnE7GX3FDHoNB6iZxZVF2W3Cq9Ru%2FA25AOTQkPmtUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDImnugp99k9zZ5zRQCrcA%2Fx0GiafVxXbGmp05kfg8X4LMiEbwWd8uZfMMyJi%2Bmu9HQNBvmWs835bv0hWs02xxJi%2FaO0u%2BZQ1dkfMXzLvXKyUOYGZhDkSIO1L6FIavuTB6VLap%2BHNMUGabDraDjb6cVg0Df80WxMm7GVLeZ%2BiFgEPEOjgoVpz0xtNf6b%2FCQN7U3ivwKqBYyAvH2K1yelHLrKk%2BfFAa%2FfVhi1hMVS4VCJk%2FriF4N64wp9uwxNBb6p6IQmVTkStj%2FIpV4UnfOvIoS99SQggB29oUu7K0ggpSI4JIPVK3hqAIwc3aRJOc2m6PB0Ys4XeEHbXGvo2XA2JI%2FBEMVkSWQkU87qLAbTf0yUJCX0nmDkNvXUUANVvnbS%2B1J%2BmIFD1saUIiT6PZL4EqMY5YyXjNPmzsTBOXAUFHMjBM9%2Bm2BokndOEcbjsK7U05Xh712oP8c77cNdwBAEWA0x1DqVmC%2FSJa7mbO%2FO5c%2ByclxBTltfDiB5lauAaDhRcJca8LtDaScqG5VYJzkuxmM7J9RkROxldRkyps6perVJV7w7bYddKpw%2FyQoMZMoUPqvgbgSfWlCXj7yvg0OGy4FVbqfc%2F9icEtFqtrKF9LqRWRyROYuO0ABg2BHZ%2FTdvoG%2FWjRrytfnwWHQq6MPfehcIGOqUBMHuapV5OKaHv4q0fQVnRjuM%2F5MxEe7DnLg1HHqCUUuUF7LIv3hgDo7OXFT23J99iYz5SEp3bhv%2BxcgKeVtoaxD0dN3Ca1fBpYCPx7ekDjANnNMvoj8QE5hKAxizM76vrTbUtnXLjQOUeelEftL8XQ4q9akmt9K1J1cjAAitIXkgyduLqZLReaE2re5UaxU6RS9datYHb2T4iPbiyH1%2BoJqcGOtNF&X-Amz-Signature=ba97b0475f653a00c2a7673e99ad4e401432a891f4d4b8294e60b457d6a17f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
