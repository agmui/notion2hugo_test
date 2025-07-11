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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLHGAH7Q%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRM7M2a4GC4hB6cMwQbz9R0Q9fn07HrQ4g5AGjaYjN0wIgCyhCBkNl%2B2B9uj7fGcml40Uvfb3kg2ZRvNeQZLJ%2BV2QqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCTS9z9g1PtoJVgiSrcAy3wUQ3%2FB6xw2fTVYDNFQsC2dwVWLU8WxaLKyxkR4X5Ajhda8mAzLKPknSOg77xLI%2BU9fVo28YZSWq%2BJaDG%2Fx34h%2FxcOmhv27d7SaCymjzH%2BTDXwRJ6NE%2FFB3j9SVZEkMKJewRMBhxQQgsQ5PFpLvzZgZciK4tG6pAb2VklGFoHS4mJ%2BigmI5GxaMAnNIf%2BholhE5IFKabsZV9epl8X8ssapIWACfCy%2Bclzi1PDVLeEkdIvsF%2FS9FPfYOVtlx%2B78iXI8LbVkQwEYQVTOcu3gY5JeKLzYljVbvf2IMYYYPn3Z56QzY0QhT1%2BNPSdSXBeGtwHiJXT7mQVcxKWL0jyyGDJmebWImTddA%2FVGzBr3u9WM%2BJHRUPFjVG9n46ct9YBRrQ7ebbZx%2BH5zyzgUTG%2BcHcsu6VLOxjA5EWDM5tElI9NGjMSUnZZp2NDckg%2FXO1S6nDmvyeMSGD9Tz%2Bf8dxoHkSX0ZAgAN6e%2F%2BurwHiOT60xAWKTXGOpVv%2FiufDLRs6QFpOV3ktK0XMBSkO2hwR%2FPIPrmJ9X4sh48ZmXxYza1GGo7umX3XsrhcsOuwXc4IdZzVFnlO%2BZQkhbcuaAsIIoBTrLDQ57%2BAH0Ltn4oOqAYq2ECsQ1O1CQpd0mHNTmfMLXTwsMGOqUBNGbMT7lIylDgHBvJVR8%2BjgHuIA7WQGUNhCufRKl5f%2FXbMY4bY%2FZzMonI4bO9YRSWJXvhnD3yvFyhQ1T8XsMAQIenrCjHKUvAb1k3QhlzZJXOGnzEQ20VJFSvPCvUwD7WJLTgHZWjKmvG3QzRlHyNtg8BuyXoRXVMnMM8KwMFKiuzH3U%2FuAobjFC00gzLGzCpA7VMdv01Tkclh5U9LuTko5HACM5m&X-Amz-Signature=444da9412ac599d9d77fc1b1594ca9b453b99c4d20be71e91f91d0d0601b748c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLHGAH7Q%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRM7M2a4GC4hB6cMwQbz9R0Q9fn07HrQ4g5AGjaYjN0wIgCyhCBkNl%2B2B9uj7fGcml40Uvfb3kg2ZRvNeQZLJ%2BV2QqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCTS9z9g1PtoJVgiSrcAy3wUQ3%2FB6xw2fTVYDNFQsC2dwVWLU8WxaLKyxkR4X5Ajhda8mAzLKPknSOg77xLI%2BU9fVo28YZSWq%2BJaDG%2Fx34h%2FxcOmhv27d7SaCymjzH%2BTDXwRJ6NE%2FFB3j9SVZEkMKJewRMBhxQQgsQ5PFpLvzZgZciK4tG6pAb2VklGFoHS4mJ%2BigmI5GxaMAnNIf%2BholhE5IFKabsZV9epl8X8ssapIWACfCy%2Bclzi1PDVLeEkdIvsF%2FS9FPfYOVtlx%2B78iXI8LbVkQwEYQVTOcu3gY5JeKLzYljVbvf2IMYYYPn3Z56QzY0QhT1%2BNPSdSXBeGtwHiJXT7mQVcxKWL0jyyGDJmebWImTddA%2FVGzBr3u9WM%2BJHRUPFjVG9n46ct9YBRrQ7ebbZx%2BH5zyzgUTG%2BcHcsu6VLOxjA5EWDM5tElI9NGjMSUnZZp2NDckg%2FXO1S6nDmvyeMSGD9Tz%2Bf8dxoHkSX0ZAgAN6e%2F%2BurwHiOT60xAWKTXGOpVv%2FiufDLRs6QFpOV3ktK0XMBSkO2hwR%2FPIPrmJ9X4sh48ZmXxYza1GGo7umX3XsrhcsOuwXc4IdZzVFnlO%2BZQkhbcuaAsIIoBTrLDQ57%2BAH0Ltn4oOqAYq2ECsQ1O1CQpd0mHNTmfMLXTwsMGOqUBNGbMT7lIylDgHBvJVR8%2BjgHuIA7WQGUNhCufRKl5f%2FXbMY4bY%2FZzMonI4bO9YRSWJXvhnD3yvFyhQ1T8XsMAQIenrCjHKUvAb1k3QhlzZJXOGnzEQ20VJFSvPCvUwD7WJLTgHZWjKmvG3QzRlHyNtg8BuyXoRXVMnMM8KwMFKiuzH3U%2FuAobjFC00gzLGzCpA7VMdv01Tkclh5U9LuTko5HACM5m&X-Amz-Signature=03e55f3e65b6da845a04c942058d4c8def679e884b0313f181a200371733ea39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLHGAH7Q%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRM7M2a4GC4hB6cMwQbz9R0Q9fn07HrQ4g5AGjaYjN0wIgCyhCBkNl%2B2B9uj7fGcml40Uvfb3kg2ZRvNeQZLJ%2BV2QqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCTS9z9g1PtoJVgiSrcAy3wUQ3%2FB6xw2fTVYDNFQsC2dwVWLU8WxaLKyxkR4X5Ajhda8mAzLKPknSOg77xLI%2BU9fVo28YZSWq%2BJaDG%2Fx34h%2FxcOmhv27d7SaCymjzH%2BTDXwRJ6NE%2FFB3j9SVZEkMKJewRMBhxQQgsQ5PFpLvzZgZciK4tG6pAb2VklGFoHS4mJ%2BigmI5GxaMAnNIf%2BholhE5IFKabsZV9epl8X8ssapIWACfCy%2Bclzi1PDVLeEkdIvsF%2FS9FPfYOVtlx%2B78iXI8LbVkQwEYQVTOcu3gY5JeKLzYljVbvf2IMYYYPn3Z56QzY0QhT1%2BNPSdSXBeGtwHiJXT7mQVcxKWL0jyyGDJmebWImTddA%2FVGzBr3u9WM%2BJHRUPFjVG9n46ct9YBRrQ7ebbZx%2BH5zyzgUTG%2BcHcsu6VLOxjA5EWDM5tElI9NGjMSUnZZp2NDckg%2FXO1S6nDmvyeMSGD9Tz%2Bf8dxoHkSX0ZAgAN6e%2F%2BurwHiOT60xAWKTXGOpVv%2FiufDLRs6QFpOV3ktK0XMBSkO2hwR%2FPIPrmJ9X4sh48ZmXxYza1GGo7umX3XsrhcsOuwXc4IdZzVFnlO%2BZQkhbcuaAsIIoBTrLDQ57%2BAH0Ltn4oOqAYq2ECsQ1O1CQpd0mHNTmfMLXTwsMGOqUBNGbMT7lIylDgHBvJVR8%2BjgHuIA7WQGUNhCufRKl5f%2FXbMY4bY%2FZzMonI4bO9YRSWJXvhnD3yvFyhQ1T8XsMAQIenrCjHKUvAb1k3QhlzZJXOGnzEQ20VJFSvPCvUwD7WJLTgHZWjKmvG3QzRlHyNtg8BuyXoRXVMnMM8KwMFKiuzH3U%2FuAobjFC00gzLGzCpA7VMdv01Tkclh5U9LuTko5HACM5m&X-Amz-Signature=0d3e3dd187d1c953f00f9374c7e140236031dad60d0e462a5ff8d15e4c3e187b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
