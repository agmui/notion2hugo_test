---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Launch files.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WDY7SS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvSzawz%2B0UE5Cf5I%2BQ1puJuf2CU5se5D8zjD%2BkjrRKjQIhAPHRR4DbIashkYBcOl9%2Bz%2Boc%2BlPx6PdwY1FfiIbcGy3iKv8DCD4QABoMNjM3NDIzMTgzODA1IgzC72Mn8y8ilf3i6CYq3AN5UPt282V3oHi2HHIsGnXZ5rN2FuTmcbGNs4%2Fx0dW7e6i%2BsCFABCrt5O5zjf7fvsf6AcQSS4bNkiGxWPwdXyQueb3%2Bpj01ug%2BtNzSsfabW0SAsjAROb%2FAzaUo0I5RwGOnatkQJHA%2FUS29F3%2FD2iewb60cPGj7xCAY2eIUbJFMWz4eAQiEUBofIv5SNOL25CZLuFixYXZymAu%2FZNRPOfnayd7xO4nKSI6b2ynVC%2BmEOR1gr1IZeWzVPwt9VScZigY4fSkySKcIycqp8BK%2BCD8FPMGpPywmvcr9lybaVVMT4ehh9Ulwl9maReTEZIUUz%2BX0cuHH080EfBaKfbPScK5ata1ic6B%2BGlEOkqpR9CaygKPsAmKQLHDkIArsjL6iwa8iVGqSLvdyBoM5hUFQMR1UASr2%2FmiFt1piJ0sPQLWZvrQsdD3%2FLyx7UHVHF4siJAj%2B2vAFjDMwpJrOVWV%2B738JfYXS6YFK4Fm4%2FA1g5xvmK2AQfubPUZqP10A%2F1AzS1iayUoPUE4yA0ltlNG5KgqLcYfad%2BeFPSoGOuQh4onTD8RxkP4AVDHic3HmXBFFny8dmM0MQD52cKcrFvRlsf%2Fel9PKrbOku0IPHbkoBxybWXdylpiSrpcOhERoFvqjDf34u9BjqkAVLVWEQuuf8ldIWXy0Uosto%2FWfZy0fiUFEm4nryOQEa6X2Um5PyJ81UulwJzHzyhXaBPwEHsGz9IYBGTZ82uYRlEMBBjnMsFqyd0ZulI8TlsjNpyk%2FoSs2yrWeU%2B%2B0T1Q7WnNE5ppVCuwltpetSsNufPOjPoH73qCNID4ss1t6yNphPAeHuBXuV8zepfm68%2Fetc4cALl20dVQSjczRODqlKoCv6b&X-Amz-Signature=b402916ec03758a50a78ccb9a3d2ced30f3b6532918dd56139273a07dfc7dc91&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WDY7SS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvSzawz%2B0UE5Cf5I%2BQ1puJuf2CU5se5D8zjD%2BkjrRKjQIhAPHRR4DbIashkYBcOl9%2Bz%2Boc%2BlPx6PdwY1FfiIbcGy3iKv8DCD4QABoMNjM3NDIzMTgzODA1IgzC72Mn8y8ilf3i6CYq3AN5UPt282V3oHi2HHIsGnXZ5rN2FuTmcbGNs4%2Fx0dW7e6i%2BsCFABCrt5O5zjf7fvsf6AcQSS4bNkiGxWPwdXyQueb3%2Bpj01ug%2BtNzSsfabW0SAsjAROb%2FAzaUo0I5RwGOnatkQJHA%2FUS29F3%2FD2iewb60cPGj7xCAY2eIUbJFMWz4eAQiEUBofIv5SNOL25CZLuFixYXZymAu%2FZNRPOfnayd7xO4nKSI6b2ynVC%2BmEOR1gr1IZeWzVPwt9VScZigY4fSkySKcIycqp8BK%2BCD8FPMGpPywmvcr9lybaVVMT4ehh9Ulwl9maReTEZIUUz%2BX0cuHH080EfBaKfbPScK5ata1ic6B%2BGlEOkqpR9CaygKPsAmKQLHDkIArsjL6iwa8iVGqSLvdyBoM5hUFQMR1UASr2%2FmiFt1piJ0sPQLWZvrQsdD3%2FLyx7UHVHF4siJAj%2B2vAFjDMwpJrOVWV%2B738JfYXS6YFK4Fm4%2FA1g5xvmK2AQfubPUZqP10A%2F1AzS1iayUoPUE4yA0ltlNG5KgqLcYfad%2BeFPSoGOuQh4onTD8RxkP4AVDHic3HmXBFFny8dmM0MQD52cKcrFvRlsf%2Fel9PKrbOku0IPHbkoBxybWXdylpiSrpcOhERoFvqjDf34u9BjqkAVLVWEQuuf8ldIWXy0Uosto%2FWfZy0fiUFEm4nryOQEa6X2Um5PyJ81UulwJzHzyhXaBPwEHsGz9IYBGTZ82uYRlEMBBjnMsFqyd0ZulI8TlsjNpyk%2FoSs2yrWeU%2B%2B0T1Q7WnNE5ppVCuwltpetSsNufPOjPoH73qCNID4ss1t6yNphPAeHuBXuV8zepfm68%2Fetc4cALl20dVQSjczRODqlKoCv6b&X-Amz-Signature=0bdcf48819854142891c07398a84f40f1b10392a72130885342749548ffa7cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WDY7SS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCvSzawz%2B0UE5Cf5I%2BQ1puJuf2CU5se5D8zjD%2BkjrRKjQIhAPHRR4DbIashkYBcOl9%2Bz%2Boc%2BlPx6PdwY1FfiIbcGy3iKv8DCD4QABoMNjM3NDIzMTgzODA1IgzC72Mn8y8ilf3i6CYq3AN5UPt282V3oHi2HHIsGnXZ5rN2FuTmcbGNs4%2Fx0dW7e6i%2BsCFABCrt5O5zjf7fvsf6AcQSS4bNkiGxWPwdXyQueb3%2Bpj01ug%2BtNzSsfabW0SAsjAROb%2FAzaUo0I5RwGOnatkQJHA%2FUS29F3%2FD2iewb60cPGj7xCAY2eIUbJFMWz4eAQiEUBofIv5SNOL25CZLuFixYXZymAu%2FZNRPOfnayd7xO4nKSI6b2ynVC%2BmEOR1gr1IZeWzVPwt9VScZigY4fSkySKcIycqp8BK%2BCD8FPMGpPywmvcr9lybaVVMT4ehh9Ulwl9maReTEZIUUz%2BX0cuHH080EfBaKfbPScK5ata1ic6B%2BGlEOkqpR9CaygKPsAmKQLHDkIArsjL6iwa8iVGqSLvdyBoM5hUFQMR1UASr2%2FmiFt1piJ0sPQLWZvrQsdD3%2FLyx7UHVHF4siJAj%2B2vAFjDMwpJrOVWV%2B738JfYXS6YFK4Fm4%2FA1g5xvmK2AQfubPUZqP10A%2F1AzS1iayUoPUE4yA0ltlNG5KgqLcYfad%2BeFPSoGOuQh4onTD8RxkP4AVDHic3HmXBFFny8dmM0MQD52cKcrFvRlsf%2Fel9PKrbOku0IPHbkoBxybWXdylpiSrpcOhERoFvqjDf34u9BjqkAVLVWEQuuf8ldIWXy0Uosto%2FWfZy0fiUFEm4nryOQEa6X2Um5PyJ81UulwJzHzyhXaBPwEHsGz9IYBGTZ82uYRlEMBBjnMsFqyd0ZulI8TlsjNpyk%2FoSs2yrWeU%2B%2B0T1Q7WnNE5ppVCuwltpetSsNufPOjPoH73qCNID4ss1t6yNphPAeHuBXuV8zepfm68%2Fetc4cALl20dVQSjczRODqlKoCv6b&X-Amz-Signature=d4034b7e7207741b36d5669435097685d4e812618653ed01489da27baf648401&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
