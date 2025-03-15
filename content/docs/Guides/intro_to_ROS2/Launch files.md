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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6PN5PH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQdbZbkZ7wjW4W%2BCLCX9zVk6QtJ36pOzUQNUWA2UCZKAiAyHPunzP4eqgcNEIqPG7PIvaXQF99XfpT9Gj1Xxx9%2FiSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMOW7YojFrfg6pGTUpKtwDdPt7xu7NQziifJnXCR13p5nvaSYVI7YPEOxSjD7%2BRkt2fdZgAPDAU9g5G5V5AOF%2BlDRXzBMyiCVMyQTFI8qc9T%2FBIiwUNtFpfuPG6NPDJMYE4sAilVLp56L20%2Fz2beuyaLjTGJ7ScRuYOai9gMd399QbmQT2L4fu5ZcksVL5vyGosw7d9vs2EdLKw8TfkU%2BZmRmJY%2FpcuugXBPEwE7od69vLmQaQqWZNI6MTT%2F2CZgqf7D9F0BZUghk%2FoSkMLJX8HRpn3Xv3N08ce1rBaRCnLyxSOGaI9rQ4iO%2BFilRFs2MWJ1h8Hbq6S8Fbp5tdeVN4%2FWfo%2BoXQJAFvEVFx14fX2VJwzuzrESEeVNTyjlRNs0QXOAhj%2FTV8NKsJ%2F63f%2Fm%2BTcpaZi1Jk5CuNQ727lK0AbyxDMQKE8X9o%2F0SlqN6uuShmOunbRGvOPwv1CAOKIdOePA25g5taU7paI3isFXkIiLnE%2FYlzRSWCDJvzQ4vMVdy0PoJDGcb0aN%2FC1xFmBdqRshPMhdq81FE5%2Bv0UKSjxcdsoWo1UfSGAsvufnBMXzBuSoFgm%2B77JBpDCxJF19bYbYmiygOnZ6cB3r6IZ7rGe637zz8aa2x8t%2F%2F7zxN4a%2FAG0NKOmqv5LcGZBTQ4woe%2FVvgY6pgFI%2FIF9YizCtC9wIYTOshfZpRkTrvsFdxV3QR4JqRgtUTO%2ByAuv3QO3a2cwzXs6m4g7fzxQkVMm4tumsIp1r%2B783QdMzP6gVP2eVEYPAcX6dWQidzYLYPjUHip6AhKFDJGlxzDbrqODKxcoT1ML3KDed1X7aAhX69%2BhQqhc92dy3FVIuruIDYbiPaz3NbzC3O8jR2YMZLQtf7B3rkp0QKYEKdl4maZG&X-Amz-Signature=b50070a2a625c5ff265a19f051e828e53aed385ec6bcab1afd3a34369b092e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6PN5PH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQdbZbkZ7wjW4W%2BCLCX9zVk6QtJ36pOzUQNUWA2UCZKAiAyHPunzP4eqgcNEIqPG7PIvaXQF99XfpT9Gj1Xxx9%2FiSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMOW7YojFrfg6pGTUpKtwDdPt7xu7NQziifJnXCR13p5nvaSYVI7YPEOxSjD7%2BRkt2fdZgAPDAU9g5G5V5AOF%2BlDRXzBMyiCVMyQTFI8qc9T%2FBIiwUNtFpfuPG6NPDJMYE4sAilVLp56L20%2Fz2beuyaLjTGJ7ScRuYOai9gMd399QbmQT2L4fu5ZcksVL5vyGosw7d9vs2EdLKw8TfkU%2BZmRmJY%2FpcuugXBPEwE7od69vLmQaQqWZNI6MTT%2F2CZgqf7D9F0BZUghk%2FoSkMLJX8HRpn3Xv3N08ce1rBaRCnLyxSOGaI9rQ4iO%2BFilRFs2MWJ1h8Hbq6S8Fbp5tdeVN4%2FWfo%2BoXQJAFvEVFx14fX2VJwzuzrESEeVNTyjlRNs0QXOAhj%2FTV8NKsJ%2F63f%2Fm%2BTcpaZi1Jk5CuNQ727lK0AbyxDMQKE8X9o%2F0SlqN6uuShmOunbRGvOPwv1CAOKIdOePA25g5taU7paI3isFXkIiLnE%2FYlzRSWCDJvzQ4vMVdy0PoJDGcb0aN%2FC1xFmBdqRshPMhdq81FE5%2Bv0UKSjxcdsoWo1UfSGAsvufnBMXzBuSoFgm%2B77JBpDCxJF19bYbYmiygOnZ6cB3r6IZ7rGe637zz8aa2x8t%2F%2F7zxN4a%2FAG0NKOmqv5LcGZBTQ4woe%2FVvgY6pgFI%2FIF9YizCtC9wIYTOshfZpRkTrvsFdxV3QR4JqRgtUTO%2ByAuv3QO3a2cwzXs6m4g7fzxQkVMm4tumsIp1r%2B783QdMzP6gVP2eVEYPAcX6dWQidzYLYPjUHip6AhKFDJGlxzDbrqODKxcoT1ML3KDed1X7aAhX69%2BhQqhc92dy3FVIuruIDYbiPaz3NbzC3O8jR2YMZLQtf7B3rkp0QKYEKdl4maZG&X-Amz-Signature=51ccd63e737714ac9486b9e89009846a55ee82b1eb369e207dac66c6a41691b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6PN5PH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQdbZbkZ7wjW4W%2BCLCX9zVk6QtJ36pOzUQNUWA2UCZKAiAyHPunzP4eqgcNEIqPG7PIvaXQF99XfpT9Gj1Xxx9%2FiSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMOW7YojFrfg6pGTUpKtwDdPt7xu7NQziifJnXCR13p5nvaSYVI7YPEOxSjD7%2BRkt2fdZgAPDAU9g5G5V5AOF%2BlDRXzBMyiCVMyQTFI8qc9T%2FBIiwUNtFpfuPG6NPDJMYE4sAilVLp56L20%2Fz2beuyaLjTGJ7ScRuYOai9gMd399QbmQT2L4fu5ZcksVL5vyGosw7d9vs2EdLKw8TfkU%2BZmRmJY%2FpcuugXBPEwE7od69vLmQaQqWZNI6MTT%2F2CZgqf7D9F0BZUghk%2FoSkMLJX8HRpn3Xv3N08ce1rBaRCnLyxSOGaI9rQ4iO%2BFilRFs2MWJ1h8Hbq6S8Fbp5tdeVN4%2FWfo%2BoXQJAFvEVFx14fX2VJwzuzrESEeVNTyjlRNs0QXOAhj%2FTV8NKsJ%2F63f%2Fm%2BTcpaZi1Jk5CuNQ727lK0AbyxDMQKE8X9o%2F0SlqN6uuShmOunbRGvOPwv1CAOKIdOePA25g5taU7paI3isFXkIiLnE%2FYlzRSWCDJvzQ4vMVdy0PoJDGcb0aN%2FC1xFmBdqRshPMhdq81FE5%2Bv0UKSjxcdsoWo1UfSGAsvufnBMXzBuSoFgm%2B77JBpDCxJF19bYbYmiygOnZ6cB3r6IZ7rGe637zz8aa2x8t%2F%2F7zxN4a%2FAG0NKOmqv5LcGZBTQ4woe%2FVvgY6pgFI%2FIF9YizCtC9wIYTOshfZpRkTrvsFdxV3QR4JqRgtUTO%2ByAuv3QO3a2cwzXs6m4g7fzxQkVMm4tumsIp1r%2B783QdMzP6gVP2eVEYPAcX6dWQidzYLYPjUHip6AhKFDJGlxzDbrqODKxcoT1ML3KDed1X7aAhX69%2BhQqhc92dy3FVIuruIDYbiPaz3NbzC3O8jR2YMZLQtf7B3rkp0QKYEKdl4maZG&X-Amz-Signature=58ab150bd06954839f653d1a1852415f0923d0e466784fab18fd1f9f769b247e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
