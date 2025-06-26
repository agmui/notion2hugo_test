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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWRZUBG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCQi%2B2FZgVtREE6JtaJzoabhbjDX70Fhr%2Fqk9l%2FXUcf7AIgcN4uppcjDG4sZqIk%2BMK3ngJC21tjGrCb2IwlJuwaNjwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDA8TCdpdc6VXBFTnSSrcA1%2Fci1tGK7drvdLkWGlmRY9E3r4Y9xL5pKYJeZCfb5lzfXnukU%2Fos4x5NX72L70fPAr6lbcsqOuRqMQw38T5HO5tHofKmnWtdN0W1mnX1r3hvoO2AlrLfRfrt1f5Zk%2FQsyxvwIe4%2FwnvWCdR1kaSw1l6lgK5fyKSXIB784xUAA0E4jStCRtr4Dt0PSM736zUF0nsvlZppBUAAT9V37dffEZkUDcGfqEhpiXCOUClKNXxV%2BeiSr4reFb1mqwQfC1cFOlXvZzjGi5FPHpJkGNyxxfv3EKBL2M07E1KmWHf4yJpBFYuJD34RRyXg9ad6bOGTeb%2B687nR5Hg0DeyGjObHIdWhNwhUKMfd%2Bb%2FhuFNhMUu9DTT7eHubSwodrw9U3NzXcZfbwVUbdEunCUfV5qXtIlXeZ4t0f%2F3ME6YqE6am1b0ue%2BeVA3BhbnMW%2BkBTposxxBWmYUBX%2BsUzHZy9rj%2FpdWeEH5UPoKVzbjTKdnd%2FDzht5ZbSyowjQzAnFhDxMguYarWsOw07heINkFTagEhVScYwwMyk1Z9zZ%2BmYQ8uCU2PkTxzpJxu6mflIr4Y6oOiCtk91E3TuxP3Uuf2bs8il4syyHOwD5FEFQBlUnsDM4NOJllt32l7UQFqzmZ1MM3y9MIGOqUBIpvCpHfWZuWGptXJMeJ8NsawCA%2BJmfRMbXjwE27tHIgt9AIok2opUDEVGRqkw6ahBfoU3A4zS%2FeLAR32XJZGM0QQO%2FUd%2BsnvTHdnf1OqLXrkuj8%2Bl0II8PTlK%2FFpXbcE7bLidYpmJW5zziJvaCwvttBsLBe8nX4ElD%2BSoJTVaumQ%2F19NSH3cm%2F9BcvCb0kEhzLl4f91elI9NtVmXifGqarR5L6Ug&X-Amz-Signature=5dc29ab216c04f4ca833dce40e435f7d834e723f07a8decf46152c0f1e7f04df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWRZUBG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCQi%2B2FZgVtREE6JtaJzoabhbjDX70Fhr%2Fqk9l%2FXUcf7AIgcN4uppcjDG4sZqIk%2BMK3ngJC21tjGrCb2IwlJuwaNjwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDA8TCdpdc6VXBFTnSSrcA1%2Fci1tGK7drvdLkWGlmRY9E3r4Y9xL5pKYJeZCfb5lzfXnukU%2Fos4x5NX72L70fPAr6lbcsqOuRqMQw38T5HO5tHofKmnWtdN0W1mnX1r3hvoO2AlrLfRfrt1f5Zk%2FQsyxvwIe4%2FwnvWCdR1kaSw1l6lgK5fyKSXIB784xUAA0E4jStCRtr4Dt0PSM736zUF0nsvlZppBUAAT9V37dffEZkUDcGfqEhpiXCOUClKNXxV%2BeiSr4reFb1mqwQfC1cFOlXvZzjGi5FPHpJkGNyxxfv3EKBL2M07E1KmWHf4yJpBFYuJD34RRyXg9ad6bOGTeb%2B687nR5Hg0DeyGjObHIdWhNwhUKMfd%2Bb%2FhuFNhMUu9DTT7eHubSwodrw9U3NzXcZfbwVUbdEunCUfV5qXtIlXeZ4t0f%2F3ME6YqE6am1b0ue%2BeVA3BhbnMW%2BkBTposxxBWmYUBX%2BsUzHZy9rj%2FpdWeEH5UPoKVzbjTKdnd%2FDzht5ZbSyowjQzAnFhDxMguYarWsOw07heINkFTagEhVScYwwMyk1Z9zZ%2BmYQ8uCU2PkTxzpJxu6mflIr4Y6oOiCtk91E3TuxP3Uuf2bs8il4syyHOwD5FEFQBlUnsDM4NOJllt32l7UQFqzmZ1MM3y9MIGOqUBIpvCpHfWZuWGptXJMeJ8NsawCA%2BJmfRMbXjwE27tHIgt9AIok2opUDEVGRqkw6ahBfoU3A4zS%2FeLAR32XJZGM0QQO%2FUd%2BsnvTHdnf1OqLXrkuj8%2Bl0II8PTlK%2FFpXbcE7bLidYpmJW5zziJvaCwvttBsLBe8nX4ElD%2BSoJTVaumQ%2F19NSH3cm%2F9BcvCb0kEhzLl4f91elI9NtVmXifGqarR5L6Ug&X-Amz-Signature=2e22b298b408daffaf7149ae0f3b1968ec1809297045d3d9b3c6ce7f1e385b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWRZUBG%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCQi%2B2FZgVtREE6JtaJzoabhbjDX70Fhr%2Fqk9l%2FXUcf7AIgcN4uppcjDG4sZqIk%2BMK3ngJC21tjGrCb2IwlJuwaNjwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDA8TCdpdc6VXBFTnSSrcA1%2Fci1tGK7drvdLkWGlmRY9E3r4Y9xL5pKYJeZCfb5lzfXnukU%2Fos4x5NX72L70fPAr6lbcsqOuRqMQw38T5HO5tHofKmnWtdN0W1mnX1r3hvoO2AlrLfRfrt1f5Zk%2FQsyxvwIe4%2FwnvWCdR1kaSw1l6lgK5fyKSXIB784xUAA0E4jStCRtr4Dt0PSM736zUF0nsvlZppBUAAT9V37dffEZkUDcGfqEhpiXCOUClKNXxV%2BeiSr4reFb1mqwQfC1cFOlXvZzjGi5FPHpJkGNyxxfv3EKBL2M07E1KmWHf4yJpBFYuJD34RRyXg9ad6bOGTeb%2B687nR5Hg0DeyGjObHIdWhNwhUKMfd%2Bb%2FhuFNhMUu9DTT7eHubSwodrw9U3NzXcZfbwVUbdEunCUfV5qXtIlXeZ4t0f%2F3ME6YqE6am1b0ue%2BeVA3BhbnMW%2BkBTposxxBWmYUBX%2BsUzHZy9rj%2FpdWeEH5UPoKVzbjTKdnd%2FDzht5ZbSyowjQzAnFhDxMguYarWsOw07heINkFTagEhVScYwwMyk1Z9zZ%2BmYQ8uCU2PkTxzpJxu6mflIr4Y6oOiCtk91E3TuxP3Uuf2bs8il4syyHOwD5FEFQBlUnsDM4NOJllt32l7UQFqzmZ1MM3y9MIGOqUBIpvCpHfWZuWGptXJMeJ8NsawCA%2BJmfRMbXjwE27tHIgt9AIok2opUDEVGRqkw6ahBfoU3A4zS%2FeLAR32XJZGM0QQO%2FUd%2BsnvTHdnf1OqLXrkuj8%2Bl0II8PTlK%2FFpXbcE7bLidYpmJW5zziJvaCwvttBsLBe8nX4ElD%2BSoJTVaumQ%2F19NSH3cm%2F9BcvCb0kEhzLl4f91elI9NtVmXifGqarR5L6Ug&X-Amz-Signature=0b7775db77b4f7711aff616bbfed7ed3e3b92a9048ff69dca1d4d693f6bfb960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
