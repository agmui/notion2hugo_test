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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52QKI2S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN%2Fwoc9eVEyt24EoDida0XEWfwop7%2BAf136jNx%2FdeZUAiBXZwd76fQozlQ5bSBtnhI9oYDJk42xPFyHhdZta3EN%2FCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFxKgp0NRAYhgR5zKtwDwR0tsE3KFcDCDp0ahbD5IdeHBKJslsmVULfgRiNjXRIVNvs0oifUCWIFlwWsfgZg06uGYIWe6%2F4KCWXhPkwsrUoMKz7xqoZUM3UuJiqeEs3SmWo04p6wgF2TjuWZk53nYoHbNTwY7JHpaxXPFgg5AvM08mNoffqU3LRs4rxwtLgPtfyAQIX8wSyRtz2pA3j6vsKNPJ2s5t%2F%2BzUB2fHdXSZq1ZZEDjNUzpYkqyAeFV62ipi4yJsoSvQQWMxeIs%2F6rDAhusra9niF3tVMguMVpx%2BziDKFFzbVnqmAF0sujxbY%2B8POWHYvBja9nrpXcjvhq8wJYucV9YzY42FgJ6mz0yOcRb0203BvX9utU%2FU%2BtA8IgaZj12aI9f%2F74toFN8ht7%2FwGtUljOMGyGazZcu2UwwnCp6toen2yXuObq3RY%2FbR6QevWYQbmsvD481nHXom4ZA6VBVzAJ2Rz10M6310SBRCu2vOwUa9f6ci0E6bS7ohv7uq8pDHoq399h0zLQ%2B3vf7zUDNkq18a%2F6gb9QBGU2k7f%2B5EWwExrcjAyW9cg5MocPZwPvjOvyfnVvRkKi2ITMEDSvLO8eC7RQmfT9VqdzMVsrelPXA5QtenqMl3ur79CBKujna%2BwGJ%2Bk0wmQwj4D9wAY6pgGVU8ug%2Fjh95XUCTIQREirTBJkQBBbaJMXMS0wmugE9HAaJq3QgMBRqljYSjir20MoiDXvnetHFU3tt8%2FajHyXXh76zZYo5zhwyKQgA2sbkyrf5WHM%2FNatmta1lgpONZXFIIvw4597Tl5%2FcYACn1XnCg94QmtavXW%2FS03ukF4TiInvnccy%2BtR3vv6asjaVCbebrkc8BhyhXdqiDx9VK%2FRN1LXj6WAnO&X-Amz-Signature=f2ad4d46ab2cffcd458816d800c4cdf82160de124ea644d11a90b59e8dd223e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52QKI2S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN%2Fwoc9eVEyt24EoDida0XEWfwop7%2BAf136jNx%2FdeZUAiBXZwd76fQozlQ5bSBtnhI9oYDJk42xPFyHhdZta3EN%2FCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFxKgp0NRAYhgR5zKtwDwR0tsE3KFcDCDp0ahbD5IdeHBKJslsmVULfgRiNjXRIVNvs0oifUCWIFlwWsfgZg06uGYIWe6%2F4KCWXhPkwsrUoMKz7xqoZUM3UuJiqeEs3SmWo04p6wgF2TjuWZk53nYoHbNTwY7JHpaxXPFgg5AvM08mNoffqU3LRs4rxwtLgPtfyAQIX8wSyRtz2pA3j6vsKNPJ2s5t%2F%2BzUB2fHdXSZq1ZZEDjNUzpYkqyAeFV62ipi4yJsoSvQQWMxeIs%2F6rDAhusra9niF3tVMguMVpx%2BziDKFFzbVnqmAF0sujxbY%2B8POWHYvBja9nrpXcjvhq8wJYucV9YzY42FgJ6mz0yOcRb0203BvX9utU%2FU%2BtA8IgaZj12aI9f%2F74toFN8ht7%2FwGtUljOMGyGazZcu2UwwnCp6toen2yXuObq3RY%2FbR6QevWYQbmsvD481nHXom4ZA6VBVzAJ2Rz10M6310SBRCu2vOwUa9f6ci0E6bS7ohv7uq8pDHoq399h0zLQ%2B3vf7zUDNkq18a%2F6gb9QBGU2k7f%2B5EWwExrcjAyW9cg5MocPZwPvjOvyfnVvRkKi2ITMEDSvLO8eC7RQmfT9VqdzMVsrelPXA5QtenqMl3ur79CBKujna%2BwGJ%2Bk0wmQwj4D9wAY6pgGVU8ug%2Fjh95XUCTIQREirTBJkQBBbaJMXMS0wmugE9HAaJq3QgMBRqljYSjir20MoiDXvnetHFU3tt8%2FajHyXXh76zZYo5zhwyKQgA2sbkyrf5WHM%2FNatmta1lgpONZXFIIvw4597Tl5%2FcYACn1XnCg94QmtavXW%2FS03ukF4TiInvnccy%2BtR3vv6asjaVCbebrkc8BhyhXdqiDx9VK%2FRN1LXj6WAnO&X-Amz-Signature=ae81cb377a528d13ee968f8caed9ce724fdaba0da09bacc9f540125b36071153&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52QKI2S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN%2Fwoc9eVEyt24EoDida0XEWfwop7%2BAf136jNx%2FdeZUAiBXZwd76fQozlQ5bSBtnhI9oYDJk42xPFyHhdZta3EN%2FCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFxKgp0NRAYhgR5zKtwDwR0tsE3KFcDCDp0ahbD5IdeHBKJslsmVULfgRiNjXRIVNvs0oifUCWIFlwWsfgZg06uGYIWe6%2F4KCWXhPkwsrUoMKz7xqoZUM3UuJiqeEs3SmWo04p6wgF2TjuWZk53nYoHbNTwY7JHpaxXPFgg5AvM08mNoffqU3LRs4rxwtLgPtfyAQIX8wSyRtz2pA3j6vsKNPJ2s5t%2F%2BzUB2fHdXSZq1ZZEDjNUzpYkqyAeFV62ipi4yJsoSvQQWMxeIs%2F6rDAhusra9niF3tVMguMVpx%2BziDKFFzbVnqmAF0sujxbY%2B8POWHYvBja9nrpXcjvhq8wJYucV9YzY42FgJ6mz0yOcRb0203BvX9utU%2FU%2BtA8IgaZj12aI9f%2F74toFN8ht7%2FwGtUljOMGyGazZcu2UwwnCp6toen2yXuObq3RY%2FbR6QevWYQbmsvD481nHXom4ZA6VBVzAJ2Rz10M6310SBRCu2vOwUa9f6ci0E6bS7ohv7uq8pDHoq399h0zLQ%2B3vf7zUDNkq18a%2F6gb9QBGU2k7f%2B5EWwExrcjAyW9cg5MocPZwPvjOvyfnVvRkKi2ITMEDSvLO8eC7RQmfT9VqdzMVsrelPXA5QtenqMl3ur79CBKujna%2BwGJ%2Bk0wmQwj4D9wAY6pgGVU8ug%2Fjh95XUCTIQREirTBJkQBBbaJMXMS0wmugE9HAaJq3QgMBRqljYSjir20MoiDXvnetHFU3tt8%2FajHyXXh76zZYo5zhwyKQgA2sbkyrf5WHM%2FNatmta1lgpONZXFIIvw4597Tl5%2FcYACn1XnCg94QmtavXW%2FS03ukF4TiInvnccy%2BtR3vv6asjaVCbebrkc8BhyhXdqiDx9VK%2FRN1LXj6WAnO&X-Amz-Signature=0cf71596b749b7c6d5f4df8db25ebd5b525af115a8cc1a0923a63c008e6d3b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
