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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECCOJCD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDrtJbzlOGqPi0ZQbc5vhCetfzItDLO84HqG0ZvVqiFOQIhAIlus4R8A0%2Bz2fJUVuzRZnNr73P8GlLOIOQtDPLEh9PrKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyme%2BamzysM1A0gwHgq3AM%2FCGVovJsGfGJKSZsGdL5SbkwCLYiB2cLYEdXCltY4OL6%2B04gNXOSqDdvk96iZwSB0RnZFblDNbn%2Bq%2BKBSi3sRMgzayeh3SwXo8VGoCyx8Z5G2yD08qvQKOv9jQOjQadycznH9Y9O4rm4cA93eqELFTBJZfW29Gd0g%2FqKVaWqZSeYgd4gNP%2FBr6OC8bWGjGqXo3wIX6haWAATIa4Gy2YllC%2BJMk%2Bdz8vXGPNH3nouKZA9jHbKeQaPlRl3ivFgcZ8UXkWtRAjiFgWCU%2BozdAItciImcj47jjMfWSM437Wb7cdWvd%2FWpL7dugAzfZyPsjckI59QeOKXXrmRPfWSfBouidFhB4Oqcp%2BscGd6iOYDOXSjeGfuaRnCvM%2B6Zh2gKHSVY50g%2B4hzQXiZJS6Yshlk12zHtHwWQ1x3WuJnZxk8HAI4uMEUzxDas8CTl4H91U3JE2lo6E1HsPEKZ2%2FofF1varDAGRoITTrX7ELMEQZcuVvvYe5ah0fJFb90yC5FRWO5l10GBdgk1ft6E%2BYSAm3ZFF9Sft5lItdoG824izz2Dc9eL1TegI%2BdnPqTqs%2Fxw5jG8%2BtCayVMViwp07xo1kHmbGtE%2FKYUGmN4%2BRP6CxGEGP5PeaFJIvZn7x%2Bhf%2FTDLuKu%2FBjqkASuk7vxtznPbEibdKD03P%2FD94%2FAwGjWb3OyScH1MavctIqZ4ysUeHXB%2F3Xn2x%2FVJ6LBm0aAsdx78R27j9nJ3JI17%2B2mWuGXdRiL9kMu7cAk4ZG73w%2BhRTDl8GenxWTDvmF45oC3Si5oud6CNB43n9I5zR9Y6e2uI0OGujixeoYeHYAOIJ2Ghx%2F7AGiO%2BePwW%2FjSvwP6FZdHrctDwD1feysg%2FbQY8&X-Amz-Signature=b65bcb2fd854c3d5b0954d8787d8f9ecec1cf81d75839fb3fd84a843303ce279&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECCOJCD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDrtJbzlOGqPi0ZQbc5vhCetfzItDLO84HqG0ZvVqiFOQIhAIlus4R8A0%2Bz2fJUVuzRZnNr73P8GlLOIOQtDPLEh9PrKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyme%2BamzysM1A0gwHgq3AM%2FCGVovJsGfGJKSZsGdL5SbkwCLYiB2cLYEdXCltY4OL6%2B04gNXOSqDdvk96iZwSB0RnZFblDNbn%2Bq%2BKBSi3sRMgzayeh3SwXo8VGoCyx8Z5G2yD08qvQKOv9jQOjQadycznH9Y9O4rm4cA93eqELFTBJZfW29Gd0g%2FqKVaWqZSeYgd4gNP%2FBr6OC8bWGjGqXo3wIX6haWAATIa4Gy2YllC%2BJMk%2Bdz8vXGPNH3nouKZA9jHbKeQaPlRl3ivFgcZ8UXkWtRAjiFgWCU%2BozdAItciImcj47jjMfWSM437Wb7cdWvd%2FWpL7dugAzfZyPsjckI59QeOKXXrmRPfWSfBouidFhB4Oqcp%2BscGd6iOYDOXSjeGfuaRnCvM%2B6Zh2gKHSVY50g%2B4hzQXiZJS6Yshlk12zHtHwWQ1x3WuJnZxk8HAI4uMEUzxDas8CTl4H91U3JE2lo6E1HsPEKZ2%2FofF1varDAGRoITTrX7ELMEQZcuVvvYe5ah0fJFb90yC5FRWO5l10GBdgk1ft6E%2BYSAm3ZFF9Sft5lItdoG824izz2Dc9eL1TegI%2BdnPqTqs%2Fxw5jG8%2BtCayVMViwp07xo1kHmbGtE%2FKYUGmN4%2BRP6CxGEGP5PeaFJIvZn7x%2Bhf%2FTDLuKu%2FBjqkASuk7vxtznPbEibdKD03P%2FD94%2FAwGjWb3OyScH1MavctIqZ4ysUeHXB%2F3Xn2x%2FVJ6LBm0aAsdx78R27j9nJ3JI17%2B2mWuGXdRiL9kMu7cAk4ZG73w%2BhRTDl8GenxWTDvmF45oC3Si5oud6CNB43n9I5zR9Y6e2uI0OGujixeoYeHYAOIJ2Ghx%2F7AGiO%2BePwW%2FjSvwP6FZdHrctDwD1feysg%2FbQY8&X-Amz-Signature=81508bb9987e6873386531c8a230150c862473bb927a2a4929dc13193c4c5010&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XECCOJCD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDrtJbzlOGqPi0ZQbc5vhCetfzItDLO84HqG0ZvVqiFOQIhAIlus4R8A0%2Bz2fJUVuzRZnNr73P8GlLOIOQtDPLEh9PrKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyme%2BamzysM1A0gwHgq3AM%2FCGVovJsGfGJKSZsGdL5SbkwCLYiB2cLYEdXCltY4OL6%2B04gNXOSqDdvk96iZwSB0RnZFblDNbn%2Bq%2BKBSi3sRMgzayeh3SwXo8VGoCyx8Z5G2yD08qvQKOv9jQOjQadycznH9Y9O4rm4cA93eqELFTBJZfW29Gd0g%2FqKVaWqZSeYgd4gNP%2FBr6OC8bWGjGqXo3wIX6haWAATIa4Gy2YllC%2BJMk%2Bdz8vXGPNH3nouKZA9jHbKeQaPlRl3ivFgcZ8UXkWtRAjiFgWCU%2BozdAItciImcj47jjMfWSM437Wb7cdWvd%2FWpL7dugAzfZyPsjckI59QeOKXXrmRPfWSfBouidFhB4Oqcp%2BscGd6iOYDOXSjeGfuaRnCvM%2B6Zh2gKHSVY50g%2B4hzQXiZJS6Yshlk12zHtHwWQ1x3WuJnZxk8HAI4uMEUzxDas8CTl4H91U3JE2lo6E1HsPEKZ2%2FofF1varDAGRoITTrX7ELMEQZcuVvvYe5ah0fJFb90yC5FRWO5l10GBdgk1ft6E%2BYSAm3ZFF9Sft5lItdoG824izz2Dc9eL1TegI%2BdnPqTqs%2Fxw5jG8%2BtCayVMViwp07xo1kHmbGtE%2FKYUGmN4%2BRP6CxGEGP5PeaFJIvZn7x%2Bhf%2FTDLuKu%2FBjqkASuk7vxtznPbEibdKD03P%2FD94%2FAwGjWb3OyScH1MavctIqZ4ysUeHXB%2F3Xn2x%2FVJ6LBm0aAsdx78R27j9nJ3JI17%2B2mWuGXdRiL9kMu7cAk4ZG73w%2BhRTDl8GenxWTDvmF45oC3Si5oud6CNB43n9I5zR9Y6e2uI0OGujixeoYeHYAOIJ2Ghx%2F7AGiO%2BePwW%2FjSvwP6FZdHrctDwD1feysg%2FbQY8&X-Amz-Signature=3cf35872e66e57484382cd72f873a240e1f2d5d40d213f82aa777797b857c592&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
