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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW357NQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAKJPRC56bAu6rxI7eJq%2FnCz0m0lZ9rfJGsHHZ%2B1sVDAiBWwk8UEHESCQ4ZaJKMAEukNVK0Ni%2FWI%2FEjjYXIH2TSuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpuK89LFPF8yTRR3KtwD65vwb8T8cpKCf3t0YGG4anpIU2GKY4s11KrAZJS58LAU2zn30hhoJta%2Bq93ARMnD8Yn4zxKjEhetYL4NEl8im5iiX9rZcOqdcwu%2FHSNvE%2FfOreJHoKGdyyxpq5O4xxOXHt78k5XdiSVnPkifG8mMtiMV5NoFaE4fnoVGZ4HrFLXFg6eRPQcz%2FJOHhcq4pjjK1IWe4HAgRJc4O4YR1ze99RjGkhzB5QDcmfw92XohAA6Zlgpt%2F2ZnlRjbtGeDcHPM9PD0MIcn6f%2FxVtvw%2FGTEryOsd%2B7wcCjQBKs1DXEYE%2BqOUZ9saZKNqtJjYkHvyBM4D5mV3xQuHM7nhGkhIngKK0jjR1m%2BtOdMx%2F7vw%2Bl0achNUSeRrupOjQn4nCI0hmcq2v8z3%2FPwNWxzug619ICQ0cDTxkMB2ZlHwNTvJL%2BWTA%2BGLa9yhY8LYX4l0p6z1KyosVrDKV7tlwtJIk1xlloPEswyY4kpx6lc3SNaAE24hCutDZlHPsc7yJ8FXV8ksjN%2B6Uv4kKbd53Dq%2FqrHDydlBI7BcZ2hDD7AxuoxzgfmqByMyWRW9U9inRFdfB4e%2FJL%2Frl5mxuyNUO3GDPj5LeAggRurw4wlG07Cd3%2BW4vOHYbbk5lSSDcNZO1y2G1IwpOKvwQY6pgECBSD3fJ%2Fkmx%2FMNukZKcFSZeWYLKvMc7EV8jPhBGTMgRGyaCF6erjWm9ZHABECRM1M7nWgNnbbge3OlwmEuGaZXY1jb%2BGKyYDl0RvQP5wBIsM0tFa%2BwiMTBeNs1BoCiuZhmnwNAMQ%2FO8E8IAW6YcFFaVGGgAo9zlJzK73m81BEnxD0RYAVdArB73dpqKbYTQi3SpL70Qz%2FhlgwWFSsuGE0BzhT7VVg&X-Amz-Signature=ca1a57b124356de5798dcd2859afb88f32af69bb3ef0e4fe80745be0a0777ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW357NQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAKJPRC56bAu6rxI7eJq%2FnCz0m0lZ9rfJGsHHZ%2B1sVDAiBWwk8UEHESCQ4ZaJKMAEukNVK0Ni%2FWI%2FEjjYXIH2TSuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpuK89LFPF8yTRR3KtwD65vwb8T8cpKCf3t0YGG4anpIU2GKY4s11KrAZJS58LAU2zn30hhoJta%2Bq93ARMnD8Yn4zxKjEhetYL4NEl8im5iiX9rZcOqdcwu%2FHSNvE%2FfOreJHoKGdyyxpq5O4xxOXHt78k5XdiSVnPkifG8mMtiMV5NoFaE4fnoVGZ4HrFLXFg6eRPQcz%2FJOHhcq4pjjK1IWe4HAgRJc4O4YR1ze99RjGkhzB5QDcmfw92XohAA6Zlgpt%2F2ZnlRjbtGeDcHPM9PD0MIcn6f%2FxVtvw%2FGTEryOsd%2B7wcCjQBKs1DXEYE%2BqOUZ9saZKNqtJjYkHvyBM4D5mV3xQuHM7nhGkhIngKK0jjR1m%2BtOdMx%2F7vw%2Bl0achNUSeRrupOjQn4nCI0hmcq2v8z3%2FPwNWxzug619ICQ0cDTxkMB2ZlHwNTvJL%2BWTA%2BGLa9yhY8LYX4l0p6z1KyosVrDKV7tlwtJIk1xlloPEswyY4kpx6lc3SNaAE24hCutDZlHPsc7yJ8FXV8ksjN%2B6Uv4kKbd53Dq%2FqrHDydlBI7BcZ2hDD7AxuoxzgfmqByMyWRW9U9inRFdfB4e%2FJL%2Frl5mxuyNUO3GDPj5LeAggRurw4wlG07Cd3%2BW4vOHYbbk5lSSDcNZO1y2G1IwpOKvwQY6pgECBSD3fJ%2Fkmx%2FMNukZKcFSZeWYLKvMc7EV8jPhBGTMgRGyaCF6erjWm9ZHABECRM1M7nWgNnbbge3OlwmEuGaZXY1jb%2BGKyYDl0RvQP5wBIsM0tFa%2BwiMTBeNs1BoCiuZhmnwNAMQ%2FO8E8IAW6YcFFaVGGgAo9zlJzK73m81BEnxD0RYAVdArB73dpqKbYTQi3SpL70Qz%2FhlgwWFSsuGE0BzhT7VVg&X-Amz-Signature=a5569cbdd4050418f3aa548c4bf5130287e55c30fcaeabb47d42e5d4945d457c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW357NQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAKJPRC56bAu6rxI7eJq%2FnCz0m0lZ9rfJGsHHZ%2B1sVDAiBWwk8UEHESCQ4ZaJKMAEukNVK0Ni%2FWI%2FEjjYXIH2TSuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpuK89LFPF8yTRR3KtwD65vwb8T8cpKCf3t0YGG4anpIU2GKY4s11KrAZJS58LAU2zn30hhoJta%2Bq93ARMnD8Yn4zxKjEhetYL4NEl8im5iiX9rZcOqdcwu%2FHSNvE%2FfOreJHoKGdyyxpq5O4xxOXHt78k5XdiSVnPkifG8mMtiMV5NoFaE4fnoVGZ4HrFLXFg6eRPQcz%2FJOHhcq4pjjK1IWe4HAgRJc4O4YR1ze99RjGkhzB5QDcmfw92XohAA6Zlgpt%2F2ZnlRjbtGeDcHPM9PD0MIcn6f%2FxVtvw%2FGTEryOsd%2B7wcCjQBKs1DXEYE%2BqOUZ9saZKNqtJjYkHvyBM4D5mV3xQuHM7nhGkhIngKK0jjR1m%2BtOdMx%2F7vw%2Bl0achNUSeRrupOjQn4nCI0hmcq2v8z3%2FPwNWxzug619ICQ0cDTxkMB2ZlHwNTvJL%2BWTA%2BGLa9yhY8LYX4l0p6z1KyosVrDKV7tlwtJIk1xlloPEswyY4kpx6lc3SNaAE24hCutDZlHPsc7yJ8FXV8ksjN%2B6Uv4kKbd53Dq%2FqrHDydlBI7BcZ2hDD7AxuoxzgfmqByMyWRW9U9inRFdfB4e%2FJL%2Frl5mxuyNUO3GDPj5LeAggRurw4wlG07Cd3%2BW4vOHYbbk5lSSDcNZO1y2G1IwpOKvwQY6pgECBSD3fJ%2Fkmx%2FMNukZKcFSZeWYLKvMc7EV8jPhBGTMgRGyaCF6erjWm9ZHABECRM1M7nWgNnbbge3OlwmEuGaZXY1jb%2BGKyYDl0RvQP5wBIsM0tFa%2BwiMTBeNs1BoCiuZhmnwNAMQ%2FO8E8IAW6YcFFaVGGgAo9zlJzK73m81BEnxD0RYAVdArB73dpqKbYTQi3SpL70Qz%2FhlgwWFSsuGE0BzhT7VVg&X-Amz-Signature=104f356a09457ca43311d27b966aa84e35ccd952a7c10962d83c6aa5c2c7d270&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW357NQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAKJPRC56bAu6rxI7eJq%2FnCz0m0lZ9rfJGsHHZ%2B1sVDAiBWwk8UEHESCQ4ZaJKMAEukNVK0Ni%2FWI%2FEjjYXIH2TSuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpuK89LFPF8yTRR3KtwD65vwb8T8cpKCf3t0YGG4anpIU2GKY4s11KrAZJS58LAU2zn30hhoJta%2Bq93ARMnD8Yn4zxKjEhetYL4NEl8im5iiX9rZcOqdcwu%2FHSNvE%2FfOreJHoKGdyyxpq5O4xxOXHt78k5XdiSVnPkifG8mMtiMV5NoFaE4fnoVGZ4HrFLXFg6eRPQcz%2FJOHhcq4pjjK1IWe4HAgRJc4O4YR1ze99RjGkhzB5QDcmfw92XohAA6Zlgpt%2F2ZnlRjbtGeDcHPM9PD0MIcn6f%2FxVtvw%2FGTEryOsd%2B7wcCjQBKs1DXEYE%2BqOUZ9saZKNqtJjYkHvyBM4D5mV3xQuHM7nhGkhIngKK0jjR1m%2BtOdMx%2F7vw%2Bl0achNUSeRrupOjQn4nCI0hmcq2v8z3%2FPwNWxzug619ICQ0cDTxkMB2ZlHwNTvJL%2BWTA%2BGLa9yhY8LYX4l0p6z1KyosVrDKV7tlwtJIk1xlloPEswyY4kpx6lc3SNaAE24hCutDZlHPsc7yJ8FXV8ksjN%2B6Uv4kKbd53Dq%2FqrHDydlBI7BcZ2hDD7AxuoxzgfmqByMyWRW9U9inRFdfB4e%2FJL%2Frl5mxuyNUO3GDPj5LeAggRurw4wlG07Cd3%2BW4vOHYbbk5lSSDcNZO1y2G1IwpOKvwQY6pgECBSD3fJ%2Fkmx%2FMNukZKcFSZeWYLKvMc7EV8jPhBGTMgRGyaCF6erjWm9ZHABECRM1M7nWgNnbbge3OlwmEuGaZXY1jb%2BGKyYDl0RvQP5wBIsM0tFa%2BwiMTBeNs1BoCiuZhmnwNAMQ%2FO8E8IAW6YcFFaVGGgAo9zlJzK73m81BEnxD0RYAVdArB73dpqKbYTQi3SpL70Qz%2FhlgwWFSsuGE0BzhT7VVg&X-Amz-Signature=6771868bce44904c36f34076d82f3270670cd61197b541145be0faba7490020d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW357NQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAKJPRC56bAu6rxI7eJq%2FnCz0m0lZ9rfJGsHHZ%2B1sVDAiBWwk8UEHESCQ4ZaJKMAEukNVK0Ni%2FWI%2FEjjYXIH2TSuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpuK89LFPF8yTRR3KtwD65vwb8T8cpKCf3t0YGG4anpIU2GKY4s11KrAZJS58LAU2zn30hhoJta%2Bq93ARMnD8Yn4zxKjEhetYL4NEl8im5iiX9rZcOqdcwu%2FHSNvE%2FfOreJHoKGdyyxpq5O4xxOXHt78k5XdiSVnPkifG8mMtiMV5NoFaE4fnoVGZ4HrFLXFg6eRPQcz%2FJOHhcq4pjjK1IWe4HAgRJc4O4YR1ze99RjGkhzB5QDcmfw92XohAA6Zlgpt%2F2ZnlRjbtGeDcHPM9PD0MIcn6f%2FxVtvw%2FGTEryOsd%2B7wcCjQBKs1DXEYE%2BqOUZ9saZKNqtJjYkHvyBM4D5mV3xQuHM7nhGkhIngKK0jjR1m%2BtOdMx%2F7vw%2Bl0achNUSeRrupOjQn4nCI0hmcq2v8z3%2FPwNWxzug619ICQ0cDTxkMB2ZlHwNTvJL%2BWTA%2BGLa9yhY8LYX4l0p6z1KyosVrDKV7tlwtJIk1xlloPEswyY4kpx6lc3SNaAE24hCutDZlHPsc7yJ8FXV8ksjN%2B6Uv4kKbd53Dq%2FqrHDydlBI7BcZ2hDD7AxuoxzgfmqByMyWRW9U9inRFdfB4e%2FJL%2Frl5mxuyNUO3GDPj5LeAggRurw4wlG07Cd3%2BW4vOHYbbk5lSSDcNZO1y2G1IwpOKvwQY6pgECBSD3fJ%2Fkmx%2FMNukZKcFSZeWYLKvMc7EV8jPhBGTMgRGyaCF6erjWm9ZHABECRM1M7nWgNnbbge3OlwmEuGaZXY1jb%2BGKyYDl0RvQP5wBIsM0tFa%2BwiMTBeNs1BoCiuZhmnwNAMQ%2FO8E8IAW6YcFFaVGGgAo9zlJzK73m81BEnxD0RYAVdArB73dpqKbYTQi3SpL70Qz%2FhlgwWFSsuGE0BzhT7VVg&X-Amz-Signature=afcda57fd8e756f3bf1ed5f70ce4a040daba7cbacb933f8e2995aa2e52f29994&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW357NQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAKJPRC56bAu6rxI7eJq%2FnCz0m0lZ9rfJGsHHZ%2B1sVDAiBWwk8UEHESCQ4ZaJKMAEukNVK0Ni%2FWI%2FEjjYXIH2TSuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpuK89LFPF8yTRR3KtwD65vwb8T8cpKCf3t0YGG4anpIU2GKY4s11KrAZJS58LAU2zn30hhoJta%2Bq93ARMnD8Yn4zxKjEhetYL4NEl8im5iiX9rZcOqdcwu%2FHSNvE%2FfOreJHoKGdyyxpq5O4xxOXHt78k5XdiSVnPkifG8mMtiMV5NoFaE4fnoVGZ4HrFLXFg6eRPQcz%2FJOHhcq4pjjK1IWe4HAgRJc4O4YR1ze99RjGkhzB5QDcmfw92XohAA6Zlgpt%2F2ZnlRjbtGeDcHPM9PD0MIcn6f%2FxVtvw%2FGTEryOsd%2B7wcCjQBKs1DXEYE%2BqOUZ9saZKNqtJjYkHvyBM4D5mV3xQuHM7nhGkhIngKK0jjR1m%2BtOdMx%2F7vw%2Bl0achNUSeRrupOjQn4nCI0hmcq2v8z3%2FPwNWxzug619ICQ0cDTxkMB2ZlHwNTvJL%2BWTA%2BGLa9yhY8LYX4l0p6z1KyosVrDKV7tlwtJIk1xlloPEswyY4kpx6lc3SNaAE24hCutDZlHPsc7yJ8FXV8ksjN%2B6Uv4kKbd53Dq%2FqrHDydlBI7BcZ2hDD7AxuoxzgfmqByMyWRW9U9inRFdfB4e%2FJL%2Frl5mxuyNUO3GDPj5LeAggRurw4wlG07Cd3%2BW4vOHYbbk5lSSDcNZO1y2G1IwpOKvwQY6pgECBSD3fJ%2Fkmx%2FMNukZKcFSZeWYLKvMc7EV8jPhBGTMgRGyaCF6erjWm9ZHABECRM1M7nWgNnbbge3OlwmEuGaZXY1jb%2BGKyYDl0RvQP5wBIsM0tFa%2BwiMTBeNs1BoCiuZhmnwNAMQ%2FO8E8IAW6YcFFaVGGgAo9zlJzK73m81BEnxD0RYAVdArB73dpqKbYTQi3SpL70Qz%2FhlgwWFSsuGE0BzhT7VVg&X-Amz-Signature=0af122f649b7c2317d8532093d31b949e3f4b11d5689bd9781e7fa1779f97688&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DW357NQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAKJPRC56bAu6rxI7eJq%2FnCz0m0lZ9rfJGsHHZ%2B1sVDAiBWwk8UEHESCQ4ZaJKMAEukNVK0Ni%2FWI%2FEjjYXIH2TSuiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpuK89LFPF8yTRR3KtwD65vwb8T8cpKCf3t0YGG4anpIU2GKY4s11KrAZJS58LAU2zn30hhoJta%2Bq93ARMnD8Yn4zxKjEhetYL4NEl8im5iiX9rZcOqdcwu%2FHSNvE%2FfOreJHoKGdyyxpq5O4xxOXHt78k5XdiSVnPkifG8mMtiMV5NoFaE4fnoVGZ4HrFLXFg6eRPQcz%2FJOHhcq4pjjK1IWe4HAgRJc4O4YR1ze99RjGkhzB5QDcmfw92XohAA6Zlgpt%2F2ZnlRjbtGeDcHPM9PD0MIcn6f%2FxVtvw%2FGTEryOsd%2B7wcCjQBKs1DXEYE%2BqOUZ9saZKNqtJjYkHvyBM4D5mV3xQuHM7nhGkhIngKK0jjR1m%2BtOdMx%2F7vw%2Bl0achNUSeRrupOjQn4nCI0hmcq2v8z3%2FPwNWxzug619ICQ0cDTxkMB2ZlHwNTvJL%2BWTA%2BGLa9yhY8LYX4l0p6z1KyosVrDKV7tlwtJIk1xlloPEswyY4kpx6lc3SNaAE24hCutDZlHPsc7yJ8FXV8ksjN%2B6Uv4kKbd53Dq%2FqrHDydlBI7BcZ2hDD7AxuoxzgfmqByMyWRW9U9inRFdfB4e%2FJL%2Frl5mxuyNUO3GDPj5LeAggRurw4wlG07Cd3%2BW4vOHYbbk5lSSDcNZO1y2G1IwpOKvwQY6pgECBSD3fJ%2Fkmx%2FMNukZKcFSZeWYLKvMc7EV8jPhBGTMgRGyaCF6erjWm9ZHABECRM1M7nWgNnbbge3OlwmEuGaZXY1jb%2BGKyYDl0RvQP5wBIsM0tFa%2BwiMTBeNs1BoCiuZhmnwNAMQ%2FO8E8IAW6YcFFaVGGgAo9zlJzK73m81BEnxD0RYAVdArB73dpqKbYTQi3SpL70Qz%2FhlgwWFSsuGE0BzhT7VVg&X-Amz-Signature=6fe471d32effb8b76f68351f993b18b30a39039c674bba1319097b22c2af411b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
