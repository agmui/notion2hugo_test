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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5EWVP3%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaYgcOXB4kqa0XR3KFb4gPq6rhZ1jdXAl8WBRnxKXWUwIgbHOuHoXOGULMy4KknCqiulXQr40ltQ79fyMYH5HfB%2FgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrJDMd7OQKqBEVJXyrcAwuhPPu%2FBqn09O3zsoJyOhJYXb5OiGTqa8fyVn%2BVAqkZcMQ9oEM40HbBJfXz2moLcGBPrWl4QVjc79sEEek4CNIhCcX3nq8V2x2i0LFFaDemDB4MZG5XkuK0Q8Ku3O7WIbTeL1wGAUiHZ8joeuy6vsRKcYJOetet1qCuTrYvr1o3QjptrqoZ29xOW6fjvv%2FGUgoPUoOhgm5eI3fWfLuC8HPAbxT48hmivNCEu8m5WkQKZrLX69vQEdqmcMpXGnQHlresv23OQKxH6%2B3Ccq6MC%2BNRa5wybeOndZNz2uJnCmE%2BpUG032B9g0FQwniMOz%2BA%2FVEAumO962i28AZoUj9%2B8QPbodUj3fAevdPG6xZIdA6N6VcAglzsh%2Be2SjX6P3414Jspi2S1NjKfjeZqIwYY0idf4RPscJjkjpKnatgWJu%2F%2FmCShLdv1hn8Pl9jC%2BHzH4PmKVsdBkaJxPM1TY%2Bpg2S7LmKBwgseI8SgpX1KRwBm5FO2fgHHTKXQcuJzSv6YcogeCXkASjNgqm0VmUByOX587Gqpl5%2BwTUihjXAbJynpqTL9Oe7zzf%2Bf8gciuR9dBGSgo0STi4%2FeiiOAM0IzRQuuqjzPvCkVDwrSgvXQfxRn13A6iL4RuyvPqM5zoMNbd5MEGOqUB0rR8jObkDUDRnzUmCwnq79%2FI%2FVGPqjeg062qm%2BPGdJqmpGrmSCw0tTum%2B70esi8Deyg%2BzQFQltDLItP3g63cGyEveqs02EJ7SsJu%2B7XaOBZE8lrN%2BMexF9IzdxOp%2B5uNNVEl4yJQ%2FefHqfd9jnx49nQRT%2FqwsOg1jLthJW3AINM4gekTXwuVC%2FkzDtUbF45p2Vp3Acx%2BAwrItehFFOH%2BVmG9Z%2FcS&X-Amz-Signature=56d07a064c243a3b4e880b76f73c35f663d9bc31df8ee0a27117c2b58d20859f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5EWVP3%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaYgcOXB4kqa0XR3KFb4gPq6rhZ1jdXAl8WBRnxKXWUwIgbHOuHoXOGULMy4KknCqiulXQr40ltQ79fyMYH5HfB%2FgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrJDMd7OQKqBEVJXyrcAwuhPPu%2FBqn09O3zsoJyOhJYXb5OiGTqa8fyVn%2BVAqkZcMQ9oEM40HbBJfXz2moLcGBPrWl4QVjc79sEEek4CNIhCcX3nq8V2x2i0LFFaDemDB4MZG5XkuK0Q8Ku3O7WIbTeL1wGAUiHZ8joeuy6vsRKcYJOetet1qCuTrYvr1o3QjptrqoZ29xOW6fjvv%2FGUgoPUoOhgm5eI3fWfLuC8HPAbxT48hmivNCEu8m5WkQKZrLX69vQEdqmcMpXGnQHlresv23OQKxH6%2B3Ccq6MC%2BNRa5wybeOndZNz2uJnCmE%2BpUG032B9g0FQwniMOz%2BA%2FVEAumO962i28AZoUj9%2B8QPbodUj3fAevdPG6xZIdA6N6VcAglzsh%2Be2SjX6P3414Jspi2S1NjKfjeZqIwYY0idf4RPscJjkjpKnatgWJu%2F%2FmCShLdv1hn8Pl9jC%2BHzH4PmKVsdBkaJxPM1TY%2Bpg2S7LmKBwgseI8SgpX1KRwBm5FO2fgHHTKXQcuJzSv6YcogeCXkASjNgqm0VmUByOX587Gqpl5%2BwTUihjXAbJynpqTL9Oe7zzf%2Bf8gciuR9dBGSgo0STi4%2FeiiOAM0IzRQuuqjzPvCkVDwrSgvXQfxRn13A6iL4RuyvPqM5zoMNbd5MEGOqUB0rR8jObkDUDRnzUmCwnq79%2FI%2FVGPqjeg062qm%2BPGdJqmpGrmSCw0tTum%2B70esi8Deyg%2BzQFQltDLItP3g63cGyEveqs02EJ7SsJu%2B7XaOBZE8lrN%2BMexF9IzdxOp%2B5uNNVEl4yJQ%2FefHqfd9jnx49nQRT%2FqwsOg1jLthJW3AINM4gekTXwuVC%2FkzDtUbF45p2Vp3Acx%2BAwrItehFFOH%2BVmG9Z%2FcS&X-Amz-Signature=8d03058a93d1530803dc9b8cd34522f6a996be115d88dcfef3be4ea7d1132eff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5EWVP3%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaYgcOXB4kqa0XR3KFb4gPq6rhZ1jdXAl8WBRnxKXWUwIgbHOuHoXOGULMy4KknCqiulXQr40ltQ79fyMYH5HfB%2FgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrJDMd7OQKqBEVJXyrcAwuhPPu%2FBqn09O3zsoJyOhJYXb5OiGTqa8fyVn%2BVAqkZcMQ9oEM40HbBJfXz2moLcGBPrWl4QVjc79sEEek4CNIhCcX3nq8V2x2i0LFFaDemDB4MZG5XkuK0Q8Ku3O7WIbTeL1wGAUiHZ8joeuy6vsRKcYJOetet1qCuTrYvr1o3QjptrqoZ29xOW6fjvv%2FGUgoPUoOhgm5eI3fWfLuC8HPAbxT48hmivNCEu8m5WkQKZrLX69vQEdqmcMpXGnQHlresv23OQKxH6%2B3Ccq6MC%2BNRa5wybeOndZNz2uJnCmE%2BpUG032B9g0FQwniMOz%2BA%2FVEAumO962i28AZoUj9%2B8QPbodUj3fAevdPG6xZIdA6N6VcAglzsh%2Be2SjX6P3414Jspi2S1NjKfjeZqIwYY0idf4RPscJjkjpKnatgWJu%2F%2FmCShLdv1hn8Pl9jC%2BHzH4PmKVsdBkaJxPM1TY%2Bpg2S7LmKBwgseI8SgpX1KRwBm5FO2fgHHTKXQcuJzSv6YcogeCXkASjNgqm0VmUByOX587Gqpl5%2BwTUihjXAbJynpqTL9Oe7zzf%2Bf8gciuR9dBGSgo0STi4%2FeiiOAM0IzRQuuqjzPvCkVDwrSgvXQfxRn13A6iL4RuyvPqM5zoMNbd5MEGOqUB0rR8jObkDUDRnzUmCwnq79%2FI%2FVGPqjeg062qm%2BPGdJqmpGrmSCw0tTum%2B70esi8Deyg%2BzQFQltDLItP3g63cGyEveqs02EJ7SsJu%2B7XaOBZE8lrN%2BMexF9IzdxOp%2B5uNNVEl4yJQ%2FefHqfd9jnx49nQRT%2FqwsOg1jLthJW3AINM4gekTXwuVC%2FkzDtUbF45p2Vp3Acx%2BAwrItehFFOH%2BVmG9Z%2FcS&X-Amz-Signature=e69cbdaa48ddcf47630c1388861d9ccfdafe569d9bbafdb7a29a6aae185258df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
