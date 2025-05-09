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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZF3EOY6%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpZ0mjIu3pZ9vPg4gqi4mLZnK6xLjf%2FM2ouQdnJDvgYAiEA%2FtwLGTAswpV8pckXFFFec90N4PnDyzdhJjmRvn%2BF2%2BUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOAgrx5NyUYNcY0ZSrcAyapCO5aQpiFizbUA%2FZrVVQJAfaO6hsSgC66nNU5%2Fz82KcPgiQm37pDJvsw4d0deiVi%2B3SQ%2BeaRoyVSTLdpQpSgi9ZDzP0SMsjCQPBPBAid25xhrCm9rIqQAABjLY43snynyhjUJdB49%2FO1fiQv03jHpnXXZlGgzGTH%2Ba0i%2FxgsEFrLr3NZ%2Fi1qHaK87qJQfZnx2EcKCKVXsZATrmQEwQmEK8QzVIegiW%2FWJOKMmBxUNpE2FC1M7IT%2FHj1Au8J1YeeDR48UBjzx22zeudK7LDjfp6x%2Ft%2ByVLXeNgNTc8I1PAUJybivTCtSeeobGuz92PQoi9N22DW4HfRESuO0k4EGY5oe%2BqDxE%2FFN6297K%2Bnedd6vfmTv%2FuGk3D%2BNH7ZngDeIagJb198cRBG%2BlVP0Sv9%2BuC47w6vSOMVPpd8wXCQ2N7u8zoH0Ctb7oXq9dUXIadu1CpfjLLSMBmfc98OZzLCjmd9YAApL3UjUNLYrLLCv1BShdwilrPBiC5PE0c%2FLAbiLZ7vJNxuvXUZT78EpoUAxwRrEVO%2BfWeszFqjweRf%2B0FFjK26pFwLXZVtPRjc6gq5NRGE2o9%2Fnr6fhEgfqx8kEPM1DJcOhjbfgagoTWNpNAvj4OrKRALZy4dG19IMMOs98AGOqUBkTFnBFnPqvXqEJ%2FeRyHeBpkZCd%2F9VfwpzchKNiU6hFGec3UDEf63DKR30ghJ6WA8Q7wgGddIf3ecjTykqRTdGVkteP14SNewtnU60a0bYCMdK%2F1kj5yLHQfqa0t7XU%2BneTktkrT074daaWXbre5v6jhK%2Fvw16HtISP1Rf0SkMH7zGlL%2FaySSlwNsJtufVMmrIWFsAWr9GQbub%2BNGvsJRlRHk0t7S&X-Amz-Signature=cf05b117fcf67ee3993e47c273a58f50f6f793dfecdf69d6bc5abfc08918838d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZF3EOY6%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpZ0mjIu3pZ9vPg4gqi4mLZnK6xLjf%2FM2ouQdnJDvgYAiEA%2FtwLGTAswpV8pckXFFFec90N4PnDyzdhJjmRvn%2BF2%2BUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOAgrx5NyUYNcY0ZSrcAyapCO5aQpiFizbUA%2FZrVVQJAfaO6hsSgC66nNU5%2Fz82KcPgiQm37pDJvsw4d0deiVi%2B3SQ%2BeaRoyVSTLdpQpSgi9ZDzP0SMsjCQPBPBAid25xhrCm9rIqQAABjLY43snynyhjUJdB49%2FO1fiQv03jHpnXXZlGgzGTH%2Ba0i%2FxgsEFrLr3NZ%2Fi1qHaK87qJQfZnx2EcKCKVXsZATrmQEwQmEK8QzVIegiW%2FWJOKMmBxUNpE2FC1M7IT%2FHj1Au8J1YeeDR48UBjzx22zeudK7LDjfp6x%2Ft%2ByVLXeNgNTc8I1PAUJybivTCtSeeobGuz92PQoi9N22DW4HfRESuO0k4EGY5oe%2BqDxE%2FFN6297K%2Bnedd6vfmTv%2FuGk3D%2BNH7ZngDeIagJb198cRBG%2BlVP0Sv9%2BuC47w6vSOMVPpd8wXCQ2N7u8zoH0Ctb7oXq9dUXIadu1CpfjLLSMBmfc98OZzLCjmd9YAApL3UjUNLYrLLCv1BShdwilrPBiC5PE0c%2FLAbiLZ7vJNxuvXUZT78EpoUAxwRrEVO%2BfWeszFqjweRf%2B0FFjK26pFwLXZVtPRjc6gq5NRGE2o9%2Fnr6fhEgfqx8kEPM1DJcOhjbfgagoTWNpNAvj4OrKRALZy4dG19IMMOs98AGOqUBkTFnBFnPqvXqEJ%2FeRyHeBpkZCd%2F9VfwpzchKNiU6hFGec3UDEf63DKR30ghJ6WA8Q7wgGddIf3ecjTykqRTdGVkteP14SNewtnU60a0bYCMdK%2F1kj5yLHQfqa0t7XU%2BneTktkrT074daaWXbre5v6jhK%2Fvw16HtISP1Rf0SkMH7zGlL%2FaySSlwNsJtufVMmrIWFsAWr9GQbub%2BNGvsJRlRHk0t7S&X-Amz-Signature=f134f60e1b51cb47aa921058bf46458fb4ea18ced4667c4acd3ba2fb0784e969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZF3EOY6%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpZ0mjIu3pZ9vPg4gqi4mLZnK6xLjf%2FM2ouQdnJDvgYAiEA%2FtwLGTAswpV8pckXFFFec90N4PnDyzdhJjmRvn%2BF2%2BUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOAgrx5NyUYNcY0ZSrcAyapCO5aQpiFizbUA%2FZrVVQJAfaO6hsSgC66nNU5%2Fz82KcPgiQm37pDJvsw4d0deiVi%2B3SQ%2BeaRoyVSTLdpQpSgi9ZDzP0SMsjCQPBPBAid25xhrCm9rIqQAABjLY43snynyhjUJdB49%2FO1fiQv03jHpnXXZlGgzGTH%2Ba0i%2FxgsEFrLr3NZ%2Fi1qHaK87qJQfZnx2EcKCKVXsZATrmQEwQmEK8QzVIegiW%2FWJOKMmBxUNpE2FC1M7IT%2FHj1Au8J1YeeDR48UBjzx22zeudK7LDjfp6x%2Ft%2ByVLXeNgNTc8I1PAUJybivTCtSeeobGuz92PQoi9N22DW4HfRESuO0k4EGY5oe%2BqDxE%2FFN6297K%2Bnedd6vfmTv%2FuGk3D%2BNH7ZngDeIagJb198cRBG%2BlVP0Sv9%2BuC47w6vSOMVPpd8wXCQ2N7u8zoH0Ctb7oXq9dUXIadu1CpfjLLSMBmfc98OZzLCjmd9YAApL3UjUNLYrLLCv1BShdwilrPBiC5PE0c%2FLAbiLZ7vJNxuvXUZT78EpoUAxwRrEVO%2BfWeszFqjweRf%2B0FFjK26pFwLXZVtPRjc6gq5NRGE2o9%2Fnr6fhEgfqx8kEPM1DJcOhjbfgagoTWNpNAvj4OrKRALZy4dG19IMMOs98AGOqUBkTFnBFnPqvXqEJ%2FeRyHeBpkZCd%2F9VfwpzchKNiU6hFGec3UDEf63DKR30ghJ6WA8Q7wgGddIf3ecjTykqRTdGVkteP14SNewtnU60a0bYCMdK%2F1kj5yLHQfqa0t7XU%2BneTktkrT074daaWXbre5v6jhK%2Fvw16HtISP1Rf0SkMH7zGlL%2FaySSlwNsJtufVMmrIWFsAWr9GQbub%2BNGvsJRlRHk0t7S&X-Amz-Signature=05c09403492c72b4576fc887b12b33109c00b312808a4859d4105169cdf7d029&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
