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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIY64RM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDRtoIWOMK%2FsQ97VO7fvDis%2Bxu1iechQvEwA%2B150%2F9tdQIhAMj80FQmiPpxU11WPQwjY%2FqFc%2B7Tx6msq8rzVjH02DZ0Kv8DCBUQABoMNjM3NDIzMTgzODA1IgzkV0Is3Vucmp9l3T8q3AO3%2B%2B2EtVjUNyLCZ2KwSRC9hgTrJQLKvAIFeAyhdxalZP0stblBzOXwOBBj5TrDCWfRcyZ9qqCPC0JOp5l7bcc0qseMMk8YXKdR62dCFBerLFKRqMpJaFblJ%2BwlcNeLIDMtDWV4bMZQhHxVfwKRtcRfGAIDtKxpBbvDONemkOH%2FhGiTasLxW6nHk9OEcMW8qDMO3yz2k%2BkoZ99%2BgCAoNX6fzJJotYZewv2IdKcf%2FX46av8glELgiSckmOlwz9vc7ZQZGLE0JMI4LIE1ymTYv0yTYvFElW5qfZnq062Xp179l9wbzVg78XTBhLdSDl2HQxa6j1Txf1DXBdD1S3Lq41PRwGKtpZ%2FaWe3AEcRUEGlyaXBrEl7urMxwFRJoZO4pzIgHv6fJgDLikoV%2FsiTKv%2BBoauHhXF4nqikMUa89ml9o%2BLlFWluiMe%2BX5GoBsZ9IjCzQwTzZhAdgSMOu0ZqtKinFUm51aCKkwEclK2qSIqtvf%2BrmBksIWN2vW089aZgO7pp7opLDmJV3926uKT4xuuVRgAaNdYvVhBC1mC58q4ZqO6cLWi0peYHOBJK6Vc7dhZNMRJUmLtaVgcsC6X7ANCL4ADgTxc%2Ftp%2B3YJcRb9m%2BC77YXk%2FG%2BYWv4Yh8Y6jDl4ZnDBjqkAZjZc5r13m6%2BXlWlloJECPi67GotG0jnr6rR%2FFNGtwRwwlx0r012L64yPmaeh%2B%2BBvNSu87V%2BUs9NDjDB4BfaQtBNj9GjN89WYAPEAyWNoJa%2Fr7gVXxKafsZN5tK8LABefd00RUKQ6tK3hSSwsIbmtfl6eKYn9bQlzv3vPDcGmmAWAykNSdCFK%2BWopSWDEz%2BBZ6BLpVHcE3wsomCCIWwoDAbsMeNn&X-Amz-Signature=a919a8fc40123c7f17ed216e0bacbdb6b3ea2a08bd65cc0e8cc891a4bd416fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIY64RM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDRtoIWOMK%2FsQ97VO7fvDis%2Bxu1iechQvEwA%2B150%2F9tdQIhAMj80FQmiPpxU11WPQwjY%2FqFc%2B7Tx6msq8rzVjH02DZ0Kv8DCBUQABoMNjM3NDIzMTgzODA1IgzkV0Is3Vucmp9l3T8q3AO3%2B%2B2EtVjUNyLCZ2KwSRC9hgTrJQLKvAIFeAyhdxalZP0stblBzOXwOBBj5TrDCWfRcyZ9qqCPC0JOp5l7bcc0qseMMk8YXKdR62dCFBerLFKRqMpJaFblJ%2BwlcNeLIDMtDWV4bMZQhHxVfwKRtcRfGAIDtKxpBbvDONemkOH%2FhGiTasLxW6nHk9OEcMW8qDMO3yz2k%2BkoZ99%2BgCAoNX6fzJJotYZewv2IdKcf%2FX46av8glELgiSckmOlwz9vc7ZQZGLE0JMI4LIE1ymTYv0yTYvFElW5qfZnq062Xp179l9wbzVg78XTBhLdSDl2HQxa6j1Txf1DXBdD1S3Lq41PRwGKtpZ%2FaWe3AEcRUEGlyaXBrEl7urMxwFRJoZO4pzIgHv6fJgDLikoV%2FsiTKv%2BBoauHhXF4nqikMUa89ml9o%2BLlFWluiMe%2BX5GoBsZ9IjCzQwTzZhAdgSMOu0ZqtKinFUm51aCKkwEclK2qSIqtvf%2BrmBksIWN2vW089aZgO7pp7opLDmJV3926uKT4xuuVRgAaNdYvVhBC1mC58q4ZqO6cLWi0peYHOBJK6Vc7dhZNMRJUmLtaVgcsC6X7ANCL4ADgTxc%2Ftp%2B3YJcRb9m%2BC77YXk%2FG%2BYWv4Yh8Y6jDl4ZnDBjqkAZjZc5r13m6%2BXlWlloJECPi67GotG0jnr6rR%2FFNGtwRwwlx0r012L64yPmaeh%2B%2BBvNSu87V%2BUs9NDjDB4BfaQtBNj9GjN89WYAPEAyWNoJa%2Fr7gVXxKafsZN5tK8LABefd00RUKQ6tK3hSSwsIbmtfl6eKYn9bQlzv3vPDcGmmAWAykNSdCFK%2BWopSWDEz%2BBZ6BLpVHcE3wsomCCIWwoDAbsMeNn&X-Amz-Signature=3fa2b09a25687c07eae934308261e2113857c6acfdce11eaef34891cd7258909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIY64RM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDRtoIWOMK%2FsQ97VO7fvDis%2Bxu1iechQvEwA%2B150%2F9tdQIhAMj80FQmiPpxU11WPQwjY%2FqFc%2B7Tx6msq8rzVjH02DZ0Kv8DCBUQABoMNjM3NDIzMTgzODA1IgzkV0Is3Vucmp9l3T8q3AO3%2B%2B2EtVjUNyLCZ2KwSRC9hgTrJQLKvAIFeAyhdxalZP0stblBzOXwOBBj5TrDCWfRcyZ9qqCPC0JOp5l7bcc0qseMMk8YXKdR62dCFBerLFKRqMpJaFblJ%2BwlcNeLIDMtDWV4bMZQhHxVfwKRtcRfGAIDtKxpBbvDONemkOH%2FhGiTasLxW6nHk9OEcMW8qDMO3yz2k%2BkoZ99%2BgCAoNX6fzJJotYZewv2IdKcf%2FX46av8glELgiSckmOlwz9vc7ZQZGLE0JMI4LIE1ymTYv0yTYvFElW5qfZnq062Xp179l9wbzVg78XTBhLdSDl2HQxa6j1Txf1DXBdD1S3Lq41PRwGKtpZ%2FaWe3AEcRUEGlyaXBrEl7urMxwFRJoZO4pzIgHv6fJgDLikoV%2FsiTKv%2BBoauHhXF4nqikMUa89ml9o%2BLlFWluiMe%2BX5GoBsZ9IjCzQwTzZhAdgSMOu0ZqtKinFUm51aCKkwEclK2qSIqtvf%2BrmBksIWN2vW089aZgO7pp7opLDmJV3926uKT4xuuVRgAaNdYvVhBC1mC58q4ZqO6cLWi0peYHOBJK6Vc7dhZNMRJUmLtaVgcsC6X7ANCL4ADgTxc%2Ftp%2B3YJcRb9m%2BC77YXk%2FG%2BYWv4Yh8Y6jDl4ZnDBjqkAZjZc5r13m6%2BXlWlloJECPi67GotG0jnr6rR%2FFNGtwRwwlx0r012L64yPmaeh%2B%2BBvNSu87V%2BUs9NDjDB4BfaQtBNj9GjN89WYAPEAyWNoJa%2Fr7gVXxKafsZN5tK8LABefd00RUKQ6tK3hSSwsIbmtfl6eKYn9bQlzv3vPDcGmmAWAykNSdCFK%2BWopSWDEz%2BBZ6BLpVHcE3wsomCCIWwoDAbsMeNn&X-Amz-Signature=3192d0ca0e872cd2a831f20c31d9a93a49584f5f00835866adc7a04d9d889e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
