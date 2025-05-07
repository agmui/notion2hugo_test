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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQOJHEI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgWPbt7G49AB%2FTFlv3M1eg%2Bmqiu7mPp%2B4CHuZXmK41%2BAiEA3HqkOxdvvjWcbjzOcfEvdKkvzizTLcoeGh5skTp%2BH0Uq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIiBSlvxDOg8too5TCrcA4XuA2tdXa8pBFddmt%2FYEUyK%2FstHHOE9qzfSGGhmbKvuCnG8ktxkB8bt96shBK%2F2WubPm0DHy4eiKi0nARMIu8alLz9spZqGTo0dRmLK%2F9c1H8HqqhyJhYmW7WTuW%2B1wx9Wvyw%2FF9n5RcNTb%2BWG%2Fw0CLFGYkFa7iiVac0j6qLAeDzl2Zq7%2FJGb1bum3Sn0vCVrs%2Bmp%2Fr%2BxROmtPUrsaPIYaIarAcFqHurv202wOLn0q%2BBnnzOBdtayHqVWNXEr0j4LB0K4%2FZHsuVyM4%2FGt7NvgD4x4tuzFQJrSHRq2OBI732fnhQqN3%2F9w2kjxMGE826qVbb38VotK1eG41VkF2sESWDiGCwYrw4FhwqwMgBffGMlYohXX4%2F0ula%2FQSBqarwGwiFsncONFIVvtrVm%2FyLETx%2Fq7Kyl%2Bn1SwcQHLT6Ki1JfBXiSnPcKU9XownsZVGKQH%2BsPdWzsHEELepAtkHBurIw%2BIHXjFYJJGZux1dcefmpU9kWhV6fciFYeVt%2FXb91JHM0wWLBi9%2FM2k3qSNfeUlok%2BmGiVcO3GLbJKmNiZJCdw6tf7qxDrK56niV30qscWgfWWyTKRTF1%2FxzW%2FqgXWJqq%2FkWtGHp23JNBYDgL8OkO1HLHi2PW9suva%2Fn3MN%2BR68AGOqUBGkfB8c8O%2FNEAWk5LIdbl3TtTLGpH7khnX52qlVMG63zZZBDZnZBeRzBF%2BVsErXyKeGpYPWhe6lXs49y5OkuS%2F5vULa3zDBjf%2BCgRwv7uN%2BF928G3nWP469HJXqv8c%2Ft7uknkEgAC%2BUxWG4G180R%2BWbvNrBzvtpAnD98aW%2BbCLkg1WVo08g%2Fize2QcjBTeHasFpqc4tqQqJ6GAiLnPTwSLduu6453&X-Amz-Signature=def659c264591d0ce7867e6c8182be77e866f0d6a32b5d13d1a98a780219e207&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQOJHEI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgWPbt7G49AB%2FTFlv3M1eg%2Bmqiu7mPp%2B4CHuZXmK41%2BAiEA3HqkOxdvvjWcbjzOcfEvdKkvzizTLcoeGh5skTp%2BH0Uq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIiBSlvxDOg8too5TCrcA4XuA2tdXa8pBFddmt%2FYEUyK%2FstHHOE9qzfSGGhmbKvuCnG8ktxkB8bt96shBK%2F2WubPm0DHy4eiKi0nARMIu8alLz9spZqGTo0dRmLK%2F9c1H8HqqhyJhYmW7WTuW%2B1wx9Wvyw%2FF9n5RcNTb%2BWG%2Fw0CLFGYkFa7iiVac0j6qLAeDzl2Zq7%2FJGb1bum3Sn0vCVrs%2Bmp%2Fr%2BxROmtPUrsaPIYaIarAcFqHurv202wOLn0q%2BBnnzOBdtayHqVWNXEr0j4LB0K4%2FZHsuVyM4%2FGt7NvgD4x4tuzFQJrSHRq2OBI732fnhQqN3%2F9w2kjxMGE826qVbb38VotK1eG41VkF2sESWDiGCwYrw4FhwqwMgBffGMlYohXX4%2F0ula%2FQSBqarwGwiFsncONFIVvtrVm%2FyLETx%2Fq7Kyl%2Bn1SwcQHLT6Ki1JfBXiSnPcKU9XownsZVGKQH%2BsPdWzsHEELepAtkHBurIw%2BIHXjFYJJGZux1dcefmpU9kWhV6fciFYeVt%2FXb91JHM0wWLBi9%2FM2k3qSNfeUlok%2BmGiVcO3GLbJKmNiZJCdw6tf7qxDrK56niV30qscWgfWWyTKRTF1%2FxzW%2FqgXWJqq%2FkWtGHp23JNBYDgL8OkO1HLHi2PW9suva%2Fn3MN%2BR68AGOqUBGkfB8c8O%2FNEAWk5LIdbl3TtTLGpH7khnX52qlVMG63zZZBDZnZBeRzBF%2BVsErXyKeGpYPWhe6lXs49y5OkuS%2F5vULa3zDBjf%2BCgRwv7uN%2BF928G3nWP469HJXqv8c%2Ft7uknkEgAC%2BUxWG4G180R%2BWbvNrBzvtpAnD98aW%2BbCLkg1WVo08g%2Fize2QcjBTeHasFpqc4tqQqJ6GAiLnPTwSLduu6453&X-Amz-Signature=c02738b82ee7b5571cc6ea5533324b6042d18966ce949bf85dd03e3e05d5579b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQOJHEI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgWPbt7G49AB%2FTFlv3M1eg%2Bmqiu7mPp%2B4CHuZXmK41%2BAiEA3HqkOxdvvjWcbjzOcfEvdKkvzizTLcoeGh5skTp%2BH0Uq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIiBSlvxDOg8too5TCrcA4XuA2tdXa8pBFddmt%2FYEUyK%2FstHHOE9qzfSGGhmbKvuCnG8ktxkB8bt96shBK%2F2WubPm0DHy4eiKi0nARMIu8alLz9spZqGTo0dRmLK%2F9c1H8HqqhyJhYmW7WTuW%2B1wx9Wvyw%2FF9n5RcNTb%2BWG%2Fw0CLFGYkFa7iiVac0j6qLAeDzl2Zq7%2FJGb1bum3Sn0vCVrs%2Bmp%2Fr%2BxROmtPUrsaPIYaIarAcFqHurv202wOLn0q%2BBnnzOBdtayHqVWNXEr0j4LB0K4%2FZHsuVyM4%2FGt7NvgD4x4tuzFQJrSHRq2OBI732fnhQqN3%2F9w2kjxMGE826qVbb38VotK1eG41VkF2sESWDiGCwYrw4FhwqwMgBffGMlYohXX4%2F0ula%2FQSBqarwGwiFsncONFIVvtrVm%2FyLETx%2Fq7Kyl%2Bn1SwcQHLT6Ki1JfBXiSnPcKU9XownsZVGKQH%2BsPdWzsHEELepAtkHBurIw%2BIHXjFYJJGZux1dcefmpU9kWhV6fciFYeVt%2FXb91JHM0wWLBi9%2FM2k3qSNfeUlok%2BmGiVcO3GLbJKmNiZJCdw6tf7qxDrK56niV30qscWgfWWyTKRTF1%2FxzW%2FqgXWJqq%2FkWtGHp23JNBYDgL8OkO1HLHi2PW9suva%2Fn3MN%2BR68AGOqUBGkfB8c8O%2FNEAWk5LIdbl3TtTLGpH7khnX52qlVMG63zZZBDZnZBeRzBF%2BVsErXyKeGpYPWhe6lXs49y5OkuS%2F5vULa3zDBjf%2BCgRwv7uN%2BF928G3nWP469HJXqv8c%2Ft7uknkEgAC%2BUxWG4G180R%2BWbvNrBzvtpAnD98aW%2BbCLkg1WVo08g%2Fize2QcjBTeHasFpqc4tqQqJ6GAiLnPTwSLduu6453&X-Amz-Signature=e6b77ac4f102de219cf6b894e078f01b64a19c807a6bf606b5309ba62272d362&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
