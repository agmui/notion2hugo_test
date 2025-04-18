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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65BWAOQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxa9%2B1fwAj34LS8cvOhEnZWhTDSmbfG62FUY6L2ZQMFAiEA%2Bc0%2FhKYYQdEzN28PSN%2FFEnptiHr5cETZ%2BI%2FHXRfPggAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDbTObkkZ%2FcFyj7NfyrcAzIURy8ZtYeMJ5wpsUwNtFSE5VXFM0b%2B9lqYCojOni2ToMD0Huc7ypraRfqWd7iHljLu2TEE4biVcA%2BCCaTLY71iQz5dlbIIjF2nKvpnck5BYlSMRdM5ehB3f5k0CGMWMOjpjt8w0QaWGbJt8mOnqP6BcfkSlMddEhASJzfvJyC4KkM8mLhyODpeSyn%2B8VvEKrSxu1gXGzSbysRkZM8uqlgE%2ByUAWFyLFc0TyrxrITZvE75xP9vZCq%2FWFtIQxiHkYeKwK8PKUouNB25uK3zJwW7B2Ft6QLJiBP37X5tzFvXYL5yiH8e9pZG1SeuOiMxjE6IVPUuz7IvliU8%2Fybr%2F32nEnksmNwlycASrKzBpRmKtuhpuo4vecWRRxlxOrR7uRBrlz34FfsJ%2F1%2F9QoeNpbcefhRwC3aeLpzXDlH0MqYna6u%2FrJoeKKEptwb0ZfjlTVB92FqqEnxIOamk0wE72JoDupMb9n0T2xVffVV5AxrtVaBcZ%2FpgHFrjJELKzOs%2Bjm%2FzBfi59CRnQjPMvWoeOivHhkepho7E7U7BYXx%2BpjGasRUqQ5kg07ttcPIsq47lKIoy55TAs7jteD1l0nKYhRcIM%2FbwCGaPc0XEAKdYvjUjkZ8vi5rfizWMrZA%2BXMPP2h8AGOqUBhbISELYiFuGpl8kFwYcC3bFZEz746R3YpjnJIg1jLflK0ISE8plBB0F0W3bYM6TcLKrlV3JMC6Low09clVX9mf63oiLUuCxwhHQbxGnSKiQg9C3gP1BIZlyb7Rlx7Sebt%2F0snB%2BC%2BF5n0VFb9SJXgHaDL0MQo1XSM8H1oTLFZGaPBjwedB%2FszCdGUMaCugGDV8VGUxJaYfm8w1zlDiSNgJpSdG8p&X-Amz-Signature=bfb5567e2a33b96b009c490014aef539db2450e58c98091bbe7629a71d8be6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65BWAOQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxa9%2B1fwAj34LS8cvOhEnZWhTDSmbfG62FUY6L2ZQMFAiEA%2Bc0%2FhKYYQdEzN28PSN%2FFEnptiHr5cETZ%2BI%2FHXRfPggAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDbTObkkZ%2FcFyj7NfyrcAzIURy8ZtYeMJ5wpsUwNtFSE5VXFM0b%2B9lqYCojOni2ToMD0Huc7ypraRfqWd7iHljLu2TEE4biVcA%2BCCaTLY71iQz5dlbIIjF2nKvpnck5BYlSMRdM5ehB3f5k0CGMWMOjpjt8w0QaWGbJt8mOnqP6BcfkSlMddEhASJzfvJyC4KkM8mLhyODpeSyn%2B8VvEKrSxu1gXGzSbysRkZM8uqlgE%2ByUAWFyLFc0TyrxrITZvE75xP9vZCq%2FWFtIQxiHkYeKwK8PKUouNB25uK3zJwW7B2Ft6QLJiBP37X5tzFvXYL5yiH8e9pZG1SeuOiMxjE6IVPUuz7IvliU8%2Fybr%2F32nEnksmNwlycASrKzBpRmKtuhpuo4vecWRRxlxOrR7uRBrlz34FfsJ%2F1%2F9QoeNpbcefhRwC3aeLpzXDlH0MqYna6u%2FrJoeKKEptwb0ZfjlTVB92FqqEnxIOamk0wE72JoDupMb9n0T2xVffVV5AxrtVaBcZ%2FpgHFrjJELKzOs%2Bjm%2FzBfi59CRnQjPMvWoeOivHhkepho7E7U7BYXx%2BpjGasRUqQ5kg07ttcPIsq47lKIoy55TAs7jteD1l0nKYhRcIM%2FbwCGaPc0XEAKdYvjUjkZ8vi5rfizWMrZA%2BXMPP2h8AGOqUBhbISELYiFuGpl8kFwYcC3bFZEz746R3YpjnJIg1jLflK0ISE8plBB0F0W3bYM6TcLKrlV3JMC6Low09clVX9mf63oiLUuCxwhHQbxGnSKiQg9C3gP1BIZlyb7Rlx7Sebt%2F0snB%2BC%2BF5n0VFb9SJXgHaDL0MQo1XSM8H1oTLFZGaPBjwedB%2FszCdGUMaCugGDV8VGUxJaYfm8w1zlDiSNgJpSdG8p&X-Amz-Signature=96eaa38436704d98b6a4e299bd6ec2d2b168a7d6430464ad13603bd6d5b0e31a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65BWAOQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxa9%2B1fwAj34LS8cvOhEnZWhTDSmbfG62FUY6L2ZQMFAiEA%2Bc0%2FhKYYQdEzN28PSN%2FFEnptiHr5cETZ%2BI%2FHXRfPggAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDbTObkkZ%2FcFyj7NfyrcAzIURy8ZtYeMJ5wpsUwNtFSE5VXFM0b%2B9lqYCojOni2ToMD0Huc7ypraRfqWd7iHljLu2TEE4biVcA%2BCCaTLY71iQz5dlbIIjF2nKvpnck5BYlSMRdM5ehB3f5k0CGMWMOjpjt8w0QaWGbJt8mOnqP6BcfkSlMddEhASJzfvJyC4KkM8mLhyODpeSyn%2B8VvEKrSxu1gXGzSbysRkZM8uqlgE%2ByUAWFyLFc0TyrxrITZvE75xP9vZCq%2FWFtIQxiHkYeKwK8PKUouNB25uK3zJwW7B2Ft6QLJiBP37X5tzFvXYL5yiH8e9pZG1SeuOiMxjE6IVPUuz7IvliU8%2Fybr%2F32nEnksmNwlycASrKzBpRmKtuhpuo4vecWRRxlxOrR7uRBrlz34FfsJ%2F1%2F9QoeNpbcefhRwC3aeLpzXDlH0MqYna6u%2FrJoeKKEptwb0ZfjlTVB92FqqEnxIOamk0wE72JoDupMb9n0T2xVffVV5AxrtVaBcZ%2FpgHFrjJELKzOs%2Bjm%2FzBfi59CRnQjPMvWoeOivHhkepho7E7U7BYXx%2BpjGasRUqQ5kg07ttcPIsq47lKIoy55TAs7jteD1l0nKYhRcIM%2FbwCGaPc0XEAKdYvjUjkZ8vi5rfizWMrZA%2BXMPP2h8AGOqUBhbISELYiFuGpl8kFwYcC3bFZEz746R3YpjnJIg1jLflK0ISE8plBB0F0W3bYM6TcLKrlV3JMC6Low09clVX9mf63oiLUuCxwhHQbxGnSKiQg9C3gP1BIZlyb7Rlx7Sebt%2F0snB%2BC%2BF5n0VFb9SJXgHaDL0MQo1XSM8H1oTLFZGaPBjwedB%2FszCdGUMaCugGDV8VGUxJaYfm8w1zlDiSNgJpSdG8p&X-Amz-Signature=f6b1ac7fc00d4b734ea22955989a9a6708adfaee99fbda19b173d0c69afe91b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
