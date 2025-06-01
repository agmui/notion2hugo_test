---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIXRWMYS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDTi3keKNe2%2BTj2mpa0j3yf0%2BzRHvrwc%2Fej507GOISGUAiBxlqcNU43QgmLGDznEuyT37586N6r9BqCxiMOhL6nXRCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwus59iLQx1MWr6mbKtwD6y6NovhN46QkXoY1o2bLXiv312HYBXC6%2FO2x71dztbwgl5SPbTSq%2FAHL11Gyiv%2BFn02wQE7ax771TRGo28CSollkaBDTYF%2BKb2yMilgOYfybAqLxBWAZApWtyX4TjQBIAHsqdmziLK4BLWoODKmHlMWIeDZSSacswZ8cKMn5HHVUMw4VjNSiNGYNTjokruPXycW5VRXDMZbglE%2FuZZ2CYEFBSuH9PSr7ry08PeLxZvRFiGVYxp5BEUUMRHWjgPmgUclvNBWe2MM%2BV7l0Dzq5eJoWySzY3gREIs9J4v2Qr32w8r2eyfxBtAzUAtUuxLwu%2Fx%2FKRAZ1CHGxcjiYUxfS5qDLbH89NmGUHTMXs5U1MzsX%2FQESb3Slz2jH1WPK%2BaWuZeGLziYCqpG%2BeuQrYoYrAOX780AB9flvs2goh%2Flc6LZvkC%2Fzlfl8msQ1pfFRRg6XR5m3beSK3%2FUulc8l8jvSSS1ITdzX8%2BWjzp0ABijrvvGUQQVHJE9z4bqZ7JFkrd19Yni7RYOQ5TrQm%2BBIFKLTUE8h2B7ldPa80jjsU6I5MWBeSZJhlEPsMjcG%2BN9Zj%2FIMDMy4mzMsgi4U8w%2Fu49oAtlcwRmVkFFzFG8meYrEWw0sAEkg5FnNHdaljraowjfHuwQY6pgFV3oYTJtb6L2%2BdFg%2F9yrV6aUEmJbGaN23tWYglG5CI7YHr%2BzTq1SX1F%2FhzLfWrxeoON6HlLg5oKRSL4RhIXYIwqU41JlxA2rCVjBTXMdarQeT4yz75S3NUfk5dXaiHMJsk7LjN8E4N%2BzodM%2Fw4zGDxwvlnhAQBiC%2FfK1RcEEafiQmwlGsBb4hPU7uEOBS6KRcZ2RkSoruAoM%2F%2BRCIsyC54EXm84dLe&X-Amz-Signature=28052f02746491759ee6edf67e937ce45e55973a01a943dbfec6d480befc1cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIXRWMYS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDTi3keKNe2%2BTj2mpa0j3yf0%2BzRHvrwc%2Fej507GOISGUAiBxlqcNU43QgmLGDznEuyT37586N6r9BqCxiMOhL6nXRCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwus59iLQx1MWr6mbKtwD6y6NovhN46QkXoY1o2bLXiv312HYBXC6%2FO2x71dztbwgl5SPbTSq%2FAHL11Gyiv%2BFn02wQE7ax771TRGo28CSollkaBDTYF%2BKb2yMilgOYfybAqLxBWAZApWtyX4TjQBIAHsqdmziLK4BLWoODKmHlMWIeDZSSacswZ8cKMn5HHVUMw4VjNSiNGYNTjokruPXycW5VRXDMZbglE%2FuZZ2CYEFBSuH9PSr7ry08PeLxZvRFiGVYxp5BEUUMRHWjgPmgUclvNBWe2MM%2BV7l0Dzq5eJoWySzY3gREIs9J4v2Qr32w8r2eyfxBtAzUAtUuxLwu%2Fx%2FKRAZ1CHGxcjiYUxfS5qDLbH89NmGUHTMXs5U1MzsX%2FQESb3Slz2jH1WPK%2BaWuZeGLziYCqpG%2BeuQrYoYrAOX780AB9flvs2goh%2Flc6LZvkC%2Fzlfl8msQ1pfFRRg6XR5m3beSK3%2FUulc8l8jvSSS1ITdzX8%2BWjzp0ABijrvvGUQQVHJE9z4bqZ7JFkrd19Yni7RYOQ5TrQm%2BBIFKLTUE8h2B7ldPa80jjsU6I5MWBeSZJhlEPsMjcG%2BN9Zj%2FIMDMy4mzMsgi4U8w%2Fu49oAtlcwRmVkFFzFG8meYrEWw0sAEkg5FnNHdaljraowjfHuwQY6pgFV3oYTJtb6L2%2BdFg%2F9yrV6aUEmJbGaN23tWYglG5CI7YHr%2BzTq1SX1F%2FhzLfWrxeoON6HlLg5oKRSL4RhIXYIwqU41JlxA2rCVjBTXMdarQeT4yz75S3NUfk5dXaiHMJsk7LjN8E4N%2BzodM%2Fw4zGDxwvlnhAQBiC%2FfK1RcEEafiQmwlGsBb4hPU7uEOBS6KRcZ2RkSoruAoM%2F%2BRCIsyC54EXm84dLe&X-Amz-Signature=d1e1f087e02de799bc9cd3d70dc54cd241ce3e5159505aabb2752974b0cfdf2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIXRWMYS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T042639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDTi3keKNe2%2BTj2mpa0j3yf0%2BzRHvrwc%2Fej507GOISGUAiBxlqcNU43QgmLGDznEuyT37586N6r9BqCxiMOhL6nXRCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwus59iLQx1MWr6mbKtwD6y6NovhN46QkXoY1o2bLXiv312HYBXC6%2FO2x71dztbwgl5SPbTSq%2FAHL11Gyiv%2BFn02wQE7ax771TRGo28CSollkaBDTYF%2BKb2yMilgOYfybAqLxBWAZApWtyX4TjQBIAHsqdmziLK4BLWoODKmHlMWIeDZSSacswZ8cKMn5HHVUMw4VjNSiNGYNTjokruPXycW5VRXDMZbglE%2FuZZ2CYEFBSuH9PSr7ry08PeLxZvRFiGVYxp5BEUUMRHWjgPmgUclvNBWe2MM%2BV7l0Dzq5eJoWySzY3gREIs9J4v2Qr32w8r2eyfxBtAzUAtUuxLwu%2Fx%2FKRAZ1CHGxcjiYUxfS5qDLbH89NmGUHTMXs5U1MzsX%2FQESb3Slz2jH1WPK%2BaWuZeGLziYCqpG%2BeuQrYoYrAOX780AB9flvs2goh%2Flc6LZvkC%2Fzlfl8msQ1pfFRRg6XR5m3beSK3%2FUulc8l8jvSSS1ITdzX8%2BWjzp0ABijrvvGUQQVHJE9z4bqZ7JFkrd19Yni7RYOQ5TrQm%2BBIFKLTUE8h2B7ldPa80jjsU6I5MWBeSZJhlEPsMjcG%2BN9Zj%2FIMDMy4mzMsgi4U8w%2Fu49oAtlcwRmVkFFzFG8meYrEWw0sAEkg5FnNHdaljraowjfHuwQY6pgFV3oYTJtb6L2%2BdFg%2F9yrV6aUEmJbGaN23tWYglG5CI7YHr%2BzTq1SX1F%2FhzLfWrxeoON6HlLg5oKRSL4RhIXYIwqU41JlxA2rCVjBTXMdarQeT4yz75S3NUfk5dXaiHMJsk7LjN8E4N%2BzodM%2Fw4zGDxwvlnhAQBiC%2FfK1RcEEafiQmwlGsBb4hPU7uEOBS6KRcZ2RkSoruAoM%2F%2BRCIsyC54EXm84dLe&X-Amz-Signature=0494a807c30e52b4ba81c0854df41d64d06fdd3e2b019f916d33a30d2bb4a30f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
