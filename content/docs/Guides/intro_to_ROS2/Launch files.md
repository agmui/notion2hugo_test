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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOQFFOM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BOGkCwLWzfgrtN5zcoSguPjZcfrtCQYFTBtOYNoSQWgIhAPresNh9geDZh%2BUsk%2B4H3IoJ0oL4VAQ7hcDxClkO3s5%2FKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb06UPElO4bpyXnmYq3ANpqb39sqkDbTipCji%2BulKbV3UqSrMayuZXXzDJOZIq9uuYASJN%2BkK7vYxo7%2FHTzvt3cQXdHQv4z6PNcA39k76RRYzwaVGUgtNAdvDYRi2ePT45YMsJcAt4%2BTJXpWhPI2lO%2BahZzQlWCd666xPWdVgVbqMduKPijTRqpWTEun0La2YydotCX023elb8BlC1k%2FbYMFaTstamyBmARGfCN%2BIXBRqA7zKOfB%2BSZbE574f04ezRdF08laAyRYb%2FF1POhIoiKJGhTwX3O1uXNnM2R0vKpe%2FgGC1ZbCihbDg3ME0JuHRNWwp1Z7mpmVJlkOM8J7jSKFgVBHmBhhWh4lw3HS00jyPSWi%2BmgQVO6U1%2BdkRqdgSR%2FVvjJQui3gI7jMr8mzaXX9e8q2EzK38535WCCykDye%2BycE%2FugYQItqiBnOE95dbkCMJ9NfM0ELrUn1l0T11eMcZxtBmf4%2B0Gq6mVmpWfl9bUGhTsdFHG6Z%2Fc8fvCfQXkxzYZaQRcQj89oZrZBDq7nS7ibobrWIH0fNLGhfVLr6eTIY5fMqmVv5cB%2FVdflHmZKp3GxRVz0G3zHGaAhgkBoQIfpDmpExjkwpdU5zLNJFo%2Bz820J%2Bt%2BrBfD4YShGVtTJa1zby4XZmLB1DDDkqu9BjqkAc7uQu1cl66eNAcnYfbKcpSrKNEp4OZAHPh55dRvDIOUft5HSq78g5WIseQv1fhSxWHD0EnW9sibtrITuyyC6z%2BhTBD9Q%2BS4DGxz68zsNxHUebL073oOSxanMC8qq56bmkJVraxmTPt88KszmYYPhCSao3H0X2AIQ8laAlW6JxaLt8TEqC%2B6olmDXQrAaxkPUxtikpw%2FOkneXtOlzvu%2BIjtrzIkm&X-Amz-Signature=b1b0b80f5e097c8d558756d658f11f0b3d4230a8d0db70a11069d09dff68eae6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOQFFOM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BOGkCwLWzfgrtN5zcoSguPjZcfrtCQYFTBtOYNoSQWgIhAPresNh9geDZh%2BUsk%2B4H3IoJ0oL4VAQ7hcDxClkO3s5%2FKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb06UPElO4bpyXnmYq3ANpqb39sqkDbTipCji%2BulKbV3UqSrMayuZXXzDJOZIq9uuYASJN%2BkK7vYxo7%2FHTzvt3cQXdHQv4z6PNcA39k76RRYzwaVGUgtNAdvDYRi2ePT45YMsJcAt4%2BTJXpWhPI2lO%2BahZzQlWCd666xPWdVgVbqMduKPijTRqpWTEun0La2YydotCX023elb8BlC1k%2FbYMFaTstamyBmARGfCN%2BIXBRqA7zKOfB%2BSZbE574f04ezRdF08laAyRYb%2FF1POhIoiKJGhTwX3O1uXNnM2R0vKpe%2FgGC1ZbCihbDg3ME0JuHRNWwp1Z7mpmVJlkOM8J7jSKFgVBHmBhhWh4lw3HS00jyPSWi%2BmgQVO6U1%2BdkRqdgSR%2FVvjJQui3gI7jMr8mzaXX9e8q2EzK38535WCCykDye%2BycE%2FugYQItqiBnOE95dbkCMJ9NfM0ELrUn1l0T11eMcZxtBmf4%2B0Gq6mVmpWfl9bUGhTsdFHG6Z%2Fc8fvCfQXkxzYZaQRcQj89oZrZBDq7nS7ibobrWIH0fNLGhfVLr6eTIY5fMqmVv5cB%2FVdflHmZKp3GxRVz0G3zHGaAhgkBoQIfpDmpExjkwpdU5zLNJFo%2Bz820J%2Bt%2BrBfD4YShGVtTJa1zby4XZmLB1DDDkqu9BjqkAc7uQu1cl66eNAcnYfbKcpSrKNEp4OZAHPh55dRvDIOUft5HSq78g5WIseQv1fhSxWHD0EnW9sibtrITuyyC6z%2BhTBD9Q%2BS4DGxz68zsNxHUebL073oOSxanMC8qq56bmkJVraxmTPt88KszmYYPhCSao3H0X2AIQ8laAlW6JxaLt8TEqC%2B6olmDXQrAaxkPUxtikpw%2FOkneXtOlzvu%2BIjtrzIkm&X-Amz-Signature=8ada0066467beee50fa909160f1045e2e01db34750d2b08a11f13b94d488a3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOQFFOM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BOGkCwLWzfgrtN5zcoSguPjZcfrtCQYFTBtOYNoSQWgIhAPresNh9geDZh%2BUsk%2B4H3IoJ0oL4VAQ7hcDxClkO3s5%2FKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb06UPElO4bpyXnmYq3ANpqb39sqkDbTipCji%2BulKbV3UqSrMayuZXXzDJOZIq9uuYASJN%2BkK7vYxo7%2FHTzvt3cQXdHQv4z6PNcA39k76RRYzwaVGUgtNAdvDYRi2ePT45YMsJcAt4%2BTJXpWhPI2lO%2BahZzQlWCd666xPWdVgVbqMduKPijTRqpWTEun0La2YydotCX023elb8BlC1k%2FbYMFaTstamyBmARGfCN%2BIXBRqA7zKOfB%2BSZbE574f04ezRdF08laAyRYb%2FF1POhIoiKJGhTwX3O1uXNnM2R0vKpe%2FgGC1ZbCihbDg3ME0JuHRNWwp1Z7mpmVJlkOM8J7jSKFgVBHmBhhWh4lw3HS00jyPSWi%2BmgQVO6U1%2BdkRqdgSR%2FVvjJQui3gI7jMr8mzaXX9e8q2EzK38535WCCykDye%2BycE%2FugYQItqiBnOE95dbkCMJ9NfM0ELrUn1l0T11eMcZxtBmf4%2B0Gq6mVmpWfl9bUGhTsdFHG6Z%2Fc8fvCfQXkxzYZaQRcQj89oZrZBDq7nS7ibobrWIH0fNLGhfVLr6eTIY5fMqmVv5cB%2FVdflHmZKp3GxRVz0G3zHGaAhgkBoQIfpDmpExjkwpdU5zLNJFo%2Bz820J%2Bt%2BrBfD4YShGVtTJa1zby4XZmLB1DDDkqu9BjqkAc7uQu1cl66eNAcnYfbKcpSrKNEp4OZAHPh55dRvDIOUft5HSq78g5WIseQv1fhSxWHD0EnW9sibtrITuyyC6z%2BhTBD9Q%2BS4DGxz68zsNxHUebL073oOSxanMC8qq56bmkJVraxmTPt88KszmYYPhCSao3H0X2AIQ8laAlW6JxaLt8TEqC%2B6olmDXQrAaxkPUxtikpw%2FOkneXtOlzvu%2BIjtrzIkm&X-Amz-Signature=4df687ea3cc19cd186c0267c51b9164f5d9ccab1cfe85d8d75e25fac98d5c618&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
