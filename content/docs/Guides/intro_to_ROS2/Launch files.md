---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTB47CQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD9ZSvuMD1pocGqEbYO9dyXad6i%2FHHfgRfx3Tva8q08BgIgTd2LvgpAvBRYX%2BK%2Bo32JgwRS8ichUjrrQLLjNaippzQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEPbzxwtEcB6SJZmSCrcA49xTjWM99xf%2FYObcLCGNOZgcOAMTB3%2Bwj1YsveeYu6kB9ES5rlmgLiAyHOJQRaW5LHMlhry5ikQ%2BCb8bgeLV4%2BGD7Bi%2F059wRFNmvoMgM2fcntmlbwks9DjaJO9ow8O1iEFEQz0K%2B%2FpwTBsmwOfs1P0jerzoIQHlfVWhBqwOYZpaGtzbuwAlpgYvoYwXvpzHAfwOssw7ADTozR1q%2Bz%2BOaOjjWMNCSdttZruURwSjBWXa9j6Qk8cqiSEeA3w9ozxyoty4f9wFxo1ikkXHAa2t7IxbL0RJMVTBuM0mWJDngZqaAAQq0soL4bcefzIy1W%2FKJ8ThJjgQJ3OaMJcdyi3YB2XRjTapsVekLLg8dWwy1mWe4aKwQfdkKqGp13HfjcTw0%2BgUjMu%2FLsR%2BzrURG1SPCjWT2QaNQ1eD2zglOlHI9BWCU9xpQINYe%2Fup1kZsKcbcfQ0zBoigT22j1pWDziH6n4DWMwM0f9AIoD60eZXmxxHbW2sWe%2BDO8M0Duo1i5%2FNv8dIZkcLVHOZmAmuZKY71o3xcV8%2BY1aZ%2BoRoL2GWHeImKh1fp%2BP6DE42ZN3LMmHABEN85kZl4C0zruTL6lqDDtPzzaW72ijjFhHd%2FQg8EkoAjVtFr9pDszgp1ERkMJ7ZiMQGOqUBM%2FNH0Z1YajJNipyYZFeRfb8r7kRHggIkVHW3Ww8w9aASI7PeLOlZrF5itMdJkOsFoz1t7yLGcd9yQaYE5ozm1VYNo2x7lYrIuVi5%2FF9YoTXzsNQSPO0vw9WvWr8wiQ%2FlZCi930DBsbj6tfsqjOa1N4Ybgo77vfvJZamMXg8OIUx7JBf2oqjDXHIdf2hrNVhya9admvniASSKHTJgf2eeb%2Bq5N%2BuP&X-Amz-Signature=7bb52012be1f83fecb5f60194bdbdae40e93cc7c355e60476c52f1550a6087e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTB47CQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD9ZSvuMD1pocGqEbYO9dyXad6i%2FHHfgRfx3Tva8q08BgIgTd2LvgpAvBRYX%2BK%2Bo32JgwRS8ichUjrrQLLjNaippzQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEPbzxwtEcB6SJZmSCrcA49xTjWM99xf%2FYObcLCGNOZgcOAMTB3%2Bwj1YsveeYu6kB9ES5rlmgLiAyHOJQRaW5LHMlhry5ikQ%2BCb8bgeLV4%2BGD7Bi%2F059wRFNmvoMgM2fcntmlbwks9DjaJO9ow8O1iEFEQz0K%2B%2FpwTBsmwOfs1P0jerzoIQHlfVWhBqwOYZpaGtzbuwAlpgYvoYwXvpzHAfwOssw7ADTozR1q%2Bz%2BOaOjjWMNCSdttZruURwSjBWXa9j6Qk8cqiSEeA3w9ozxyoty4f9wFxo1ikkXHAa2t7IxbL0RJMVTBuM0mWJDngZqaAAQq0soL4bcefzIy1W%2FKJ8ThJjgQJ3OaMJcdyi3YB2XRjTapsVekLLg8dWwy1mWe4aKwQfdkKqGp13HfjcTw0%2BgUjMu%2FLsR%2BzrURG1SPCjWT2QaNQ1eD2zglOlHI9BWCU9xpQINYe%2Fup1kZsKcbcfQ0zBoigT22j1pWDziH6n4DWMwM0f9AIoD60eZXmxxHbW2sWe%2BDO8M0Duo1i5%2FNv8dIZkcLVHOZmAmuZKY71o3xcV8%2BY1aZ%2BoRoL2GWHeImKh1fp%2BP6DE42ZN3LMmHABEN85kZl4C0zruTL6lqDDtPzzaW72ijjFhHd%2FQg8EkoAjVtFr9pDszgp1ERkMJ7ZiMQGOqUBM%2FNH0Z1YajJNipyYZFeRfb8r7kRHggIkVHW3Ww8w9aASI7PeLOlZrF5itMdJkOsFoz1t7yLGcd9yQaYE5ozm1VYNo2x7lYrIuVi5%2FF9YoTXzsNQSPO0vw9WvWr8wiQ%2FlZCi930DBsbj6tfsqjOa1N4Ybgo77vfvJZamMXg8OIUx7JBf2oqjDXHIdf2hrNVhya9admvniASSKHTJgf2eeb%2Bq5N%2BuP&X-Amz-Signature=db8ee7aa4d7e93364653a45ce5fe504f6a26d9cace22a80224de55f43392a91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFTB47CQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD9ZSvuMD1pocGqEbYO9dyXad6i%2FHHfgRfx3Tva8q08BgIgTd2LvgpAvBRYX%2BK%2Bo32JgwRS8ichUjrrQLLjNaippzQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDEPbzxwtEcB6SJZmSCrcA49xTjWM99xf%2FYObcLCGNOZgcOAMTB3%2Bwj1YsveeYu6kB9ES5rlmgLiAyHOJQRaW5LHMlhry5ikQ%2BCb8bgeLV4%2BGD7Bi%2F059wRFNmvoMgM2fcntmlbwks9DjaJO9ow8O1iEFEQz0K%2B%2FpwTBsmwOfs1P0jerzoIQHlfVWhBqwOYZpaGtzbuwAlpgYvoYwXvpzHAfwOssw7ADTozR1q%2Bz%2BOaOjjWMNCSdttZruURwSjBWXa9j6Qk8cqiSEeA3w9ozxyoty4f9wFxo1ikkXHAa2t7IxbL0RJMVTBuM0mWJDngZqaAAQq0soL4bcefzIy1W%2FKJ8ThJjgQJ3OaMJcdyi3YB2XRjTapsVekLLg8dWwy1mWe4aKwQfdkKqGp13HfjcTw0%2BgUjMu%2FLsR%2BzrURG1SPCjWT2QaNQ1eD2zglOlHI9BWCU9xpQINYe%2Fup1kZsKcbcfQ0zBoigT22j1pWDziH6n4DWMwM0f9AIoD60eZXmxxHbW2sWe%2BDO8M0Duo1i5%2FNv8dIZkcLVHOZmAmuZKY71o3xcV8%2BY1aZ%2BoRoL2GWHeImKh1fp%2BP6DE42ZN3LMmHABEN85kZl4C0zruTL6lqDDtPzzaW72ijjFhHd%2FQg8EkoAjVtFr9pDszgp1ERkMJ7ZiMQGOqUBM%2FNH0Z1YajJNipyYZFeRfb8r7kRHggIkVHW3Ww8w9aASI7PeLOlZrF5itMdJkOsFoz1t7yLGcd9yQaYE5ozm1VYNo2x7lYrIuVi5%2FF9YoTXzsNQSPO0vw9WvWr8wiQ%2FlZCi930DBsbj6tfsqjOa1N4Ybgo77vfvJZamMXg8OIUx7JBf2oqjDXHIdf2hrNVhya9admvniASSKHTJgf2eeb%2Bq5N%2BuP&X-Amz-Signature=b90051ec34d1454b83f7a7bea6bf74eff029be13e4e2376b0688e8ef05f4c6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
