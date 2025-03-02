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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RATYYXC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE3WIqoIcGm2RDBi4UmN2qkxgA0rOwOTHZx%2FllgqOHRGAiEAvRw4LYRBediBqu%2BUeAN%2FURLvfqeTIpCtUFEqpKH11rgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQc%2Bh2TjR96rVxYRyrcA%2BgFQeMi4EO5u5iZ%2Bl2%2BXV8FekeSZHsn229lShehA4L6xKJNtKHBng7yi5DyATWeqLe%2B7e8OhRNDp%2FR4oUHxI7nJ%2B6SfDvkR4napdldg01JaWSjWYjrCSEQ0YZlgBVMpj9zz69lWgit0E8At5trAB0U3RrQylXeTKHEnSvaLCGXi1kQAXFip7PvxyGXCKkIIqNPYawkwQk%2FuoD4ILjYbx6h%2BRnrjqFJt83zL3Oh5EbSHgPVFPyZI9Unsx5KlhPZDTqJO9YPfL7ERocpNhJmzcEmK9chHoKhQ6zMzhrXhP1pJMdVhXiahcbPlkW6NrkQQxg4A64fl8AbpS2HTmbbUFmOAeIgTGKwnMrM%2BTS3dKzEuc6IGR0GY44InLZYtbtL2O6c8CSLxhKz8LTMlftdNe8R1495XLTa43UOlbtNgeg%2BoAquFBaHdqhChhZvGvksTnMcUj%2BywMxJ9t2C7Xt%2FdObnCZnhIcoiGw704lK%2FBnMW%2F0RtGUOYDUVHn8I5clGADG45jECWG3q6DyM4SkwqfW9EWWdTcgpRRCc5FeDq2bIHw6wefjYD4ohW2pRPDCagcCSqo31VuXPxX2moQJhYL7jgUGn95Xkn8gzH0%2Flg4lcuLhr4BsobE6yAFd37vMLO3j74GOqUBT9eaKfCmEJ26lcksFhV5fxCBau5cR77BpqyyaVRnWMI2hgZPhfJHVG0SH0gxQ6DES8xalqNT%2BUjFmDrij8eO9AZ%2FAQDF%2FQ0Ajwbf2pwSyXmgeBP1mVI%2BwC3%2BHv3jQXJw6c0Q576t5yAveG7jys0BoXOU4Sn8QtfJB3FHl7nnmsSx3%2Fq4B5tMZzliYCOBzV3W0WeVeA%2Bo4FXiWnnF2BRW%2F%2B%2Fkqtao&X-Amz-Signature=12b2d4bb03db23a22310ee73ad569e941d7735cfb3b8db5ea555429957b9be93&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RATYYXC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE3WIqoIcGm2RDBi4UmN2qkxgA0rOwOTHZx%2FllgqOHRGAiEAvRw4LYRBediBqu%2BUeAN%2FURLvfqeTIpCtUFEqpKH11rgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQc%2Bh2TjR96rVxYRyrcA%2BgFQeMi4EO5u5iZ%2Bl2%2BXV8FekeSZHsn229lShehA4L6xKJNtKHBng7yi5DyATWeqLe%2B7e8OhRNDp%2FR4oUHxI7nJ%2B6SfDvkR4napdldg01JaWSjWYjrCSEQ0YZlgBVMpj9zz69lWgit0E8At5trAB0U3RrQylXeTKHEnSvaLCGXi1kQAXFip7PvxyGXCKkIIqNPYawkwQk%2FuoD4ILjYbx6h%2BRnrjqFJt83zL3Oh5EbSHgPVFPyZI9Unsx5KlhPZDTqJO9YPfL7ERocpNhJmzcEmK9chHoKhQ6zMzhrXhP1pJMdVhXiahcbPlkW6NrkQQxg4A64fl8AbpS2HTmbbUFmOAeIgTGKwnMrM%2BTS3dKzEuc6IGR0GY44InLZYtbtL2O6c8CSLxhKz8LTMlftdNe8R1495XLTa43UOlbtNgeg%2BoAquFBaHdqhChhZvGvksTnMcUj%2BywMxJ9t2C7Xt%2FdObnCZnhIcoiGw704lK%2FBnMW%2F0RtGUOYDUVHn8I5clGADG45jECWG3q6DyM4SkwqfW9EWWdTcgpRRCc5FeDq2bIHw6wefjYD4ohW2pRPDCagcCSqo31VuXPxX2moQJhYL7jgUGn95Xkn8gzH0%2Flg4lcuLhr4BsobE6yAFd37vMLO3j74GOqUBT9eaKfCmEJ26lcksFhV5fxCBau5cR77BpqyyaVRnWMI2hgZPhfJHVG0SH0gxQ6DES8xalqNT%2BUjFmDrij8eO9AZ%2FAQDF%2FQ0Ajwbf2pwSyXmgeBP1mVI%2BwC3%2BHv3jQXJw6c0Q576t5yAveG7jys0BoXOU4Sn8QtfJB3FHl7nnmsSx3%2Fq4B5tMZzliYCOBzV3W0WeVeA%2Bo4FXiWnnF2BRW%2F%2B%2Fkqtao&X-Amz-Signature=01865d290a1fdb4651a132cc08e758a27b6bbb5b3d213e6222f71a9e9967b9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RATYYXC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE3WIqoIcGm2RDBi4UmN2qkxgA0rOwOTHZx%2FllgqOHRGAiEAvRw4LYRBediBqu%2BUeAN%2FURLvfqeTIpCtUFEqpKH11rgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQc%2Bh2TjR96rVxYRyrcA%2BgFQeMi4EO5u5iZ%2Bl2%2BXV8FekeSZHsn229lShehA4L6xKJNtKHBng7yi5DyATWeqLe%2B7e8OhRNDp%2FR4oUHxI7nJ%2B6SfDvkR4napdldg01JaWSjWYjrCSEQ0YZlgBVMpj9zz69lWgit0E8At5trAB0U3RrQylXeTKHEnSvaLCGXi1kQAXFip7PvxyGXCKkIIqNPYawkwQk%2FuoD4ILjYbx6h%2BRnrjqFJt83zL3Oh5EbSHgPVFPyZI9Unsx5KlhPZDTqJO9YPfL7ERocpNhJmzcEmK9chHoKhQ6zMzhrXhP1pJMdVhXiahcbPlkW6NrkQQxg4A64fl8AbpS2HTmbbUFmOAeIgTGKwnMrM%2BTS3dKzEuc6IGR0GY44InLZYtbtL2O6c8CSLxhKz8LTMlftdNe8R1495XLTa43UOlbtNgeg%2BoAquFBaHdqhChhZvGvksTnMcUj%2BywMxJ9t2C7Xt%2FdObnCZnhIcoiGw704lK%2FBnMW%2F0RtGUOYDUVHn8I5clGADG45jECWG3q6DyM4SkwqfW9EWWdTcgpRRCc5FeDq2bIHw6wefjYD4ohW2pRPDCagcCSqo31VuXPxX2moQJhYL7jgUGn95Xkn8gzH0%2Flg4lcuLhr4BsobE6yAFd37vMLO3j74GOqUBT9eaKfCmEJ26lcksFhV5fxCBau5cR77BpqyyaVRnWMI2hgZPhfJHVG0SH0gxQ6DES8xalqNT%2BUjFmDrij8eO9AZ%2FAQDF%2FQ0Ajwbf2pwSyXmgeBP1mVI%2BwC3%2BHv3jQXJw6c0Q576t5yAveG7jys0BoXOU4Sn8QtfJB3FHl7nnmsSx3%2Fq4B5tMZzliYCOBzV3W0WeVeA%2Bo4FXiWnnF2BRW%2F%2B%2Fkqtao&X-Amz-Signature=b3091bf8b5ffad8737a7b5768bdf13601eb9bc703db72fe310cf2095ba305794&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
