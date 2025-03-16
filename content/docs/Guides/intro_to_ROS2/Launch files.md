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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WM3V2PR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqqFaDrELgT8PZluDpix%2FwSfyLcYCSD8LZ%2BrXAiTvTrgIgZWkhimEPG7vh6z6KJecb0JTZzmwEUsdsEa5x2L1dGIsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGSdvIIiuSgGoobIeyrcA%2Bl6G3cn82S2shaBtT3bZFsuFiM%2B2A3t%2B5TagEPSqbcfCwodTu4Ycp5%2Fu7D%2BeJtRv3DnZZc6juupXnTlpFncoOPSWLQusodzqil%2FMiLlcTKHNwg1wFS1wf19isddlgb%2FiVqe1N8FuGCV5yDw3qkwkj6xu0zPXxluil7wwHHml30%2FfSKtPZ51mcgrWGLWf7ZqmcJMLEAAgyUiWnq4FoX0bGXn1Finxpbay6rtXzNSmZ%2FTwEq9TVdbzqcSvrUr9npNFgOzXzJSrJdYqDatxCJCHTp02eDSgkT5CBubkRCbNzuxDoKve45eKGfFbp5LQKl2pRYcXbBKXjVpZybeBMvXymzJwIDeAdzOnrC7fCjk8eYXl0f2Xo224oMTh7zDVW3Hpg6tikJ5OetSBSEE8K8TMRUBRXkU%2BmX6J32MgWeLJS9OHRPMPduTHLGSHxc4EPDXG8u9QO%2FzLKU5Y2UZ3UuAwfccw3C1DIE%2FG7j2g48Rmvz%2BqJJPqlaik8X7XOkRO%2FiwXYYFXt6JZH%2BFGg734Bfp%2FuhN4tEmeW2ZU019ZlUazx6g8By%2BPwjJZGtr735GJRTFsYY6J6ml5RHr6P%2BTM7wxySOwMRGJS1BAwUAcwjn55aFVwoPxLS8ma5yigNybMKOd3b4GOqUBZiEAFGfIY3dqpZmnS2YT7MwRVR4WcRILenzswoR7PwQ%2FyItww53TCX4AfriBMRho3LuyuhMXH5xCVtjMI3ZCI6X4r%2FW12MSEgT68F4geMAaDdqzCB%2FKQ7b%2BrnXESbIfEWP9uL7O994nkrMU20WfYMQGOakIvf2C0DqsAZSc13JaEsiMWirYSwlq8yJtEEYOWjJMurz77A1g5j27RMjLZGCEl6d4T&X-Amz-Signature=88c56ea1677231afa96ede121a2efcd26aff563d5a5714c74a77517d0bb1a91b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WM3V2PR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqqFaDrELgT8PZluDpix%2FwSfyLcYCSD8LZ%2BrXAiTvTrgIgZWkhimEPG7vh6z6KJecb0JTZzmwEUsdsEa5x2L1dGIsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGSdvIIiuSgGoobIeyrcA%2Bl6G3cn82S2shaBtT3bZFsuFiM%2B2A3t%2B5TagEPSqbcfCwodTu4Ycp5%2Fu7D%2BeJtRv3DnZZc6juupXnTlpFncoOPSWLQusodzqil%2FMiLlcTKHNwg1wFS1wf19isddlgb%2FiVqe1N8FuGCV5yDw3qkwkj6xu0zPXxluil7wwHHml30%2FfSKtPZ51mcgrWGLWf7ZqmcJMLEAAgyUiWnq4FoX0bGXn1Finxpbay6rtXzNSmZ%2FTwEq9TVdbzqcSvrUr9npNFgOzXzJSrJdYqDatxCJCHTp02eDSgkT5CBubkRCbNzuxDoKve45eKGfFbp5LQKl2pRYcXbBKXjVpZybeBMvXymzJwIDeAdzOnrC7fCjk8eYXl0f2Xo224oMTh7zDVW3Hpg6tikJ5OetSBSEE8K8TMRUBRXkU%2BmX6J32MgWeLJS9OHRPMPduTHLGSHxc4EPDXG8u9QO%2FzLKU5Y2UZ3UuAwfccw3C1DIE%2FG7j2g48Rmvz%2BqJJPqlaik8X7XOkRO%2FiwXYYFXt6JZH%2BFGg734Bfp%2FuhN4tEmeW2ZU019ZlUazx6g8By%2BPwjJZGtr735GJRTFsYY6J6ml5RHr6P%2BTM7wxySOwMRGJS1BAwUAcwjn55aFVwoPxLS8ma5yigNybMKOd3b4GOqUBZiEAFGfIY3dqpZmnS2YT7MwRVR4WcRILenzswoR7PwQ%2FyItww53TCX4AfriBMRho3LuyuhMXH5xCVtjMI3ZCI6X4r%2FW12MSEgT68F4geMAaDdqzCB%2FKQ7b%2BrnXESbIfEWP9uL7O994nkrMU20WfYMQGOakIvf2C0DqsAZSc13JaEsiMWirYSwlq8yJtEEYOWjJMurz77A1g5j27RMjLZGCEl6d4T&X-Amz-Signature=02ff3b5d762d26d2e8ab1c11fdef9031d6981f33c2985bd00d6c7d90be8cb619&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WM3V2PR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqqFaDrELgT8PZluDpix%2FwSfyLcYCSD8LZ%2BrXAiTvTrgIgZWkhimEPG7vh6z6KJecb0JTZzmwEUsdsEa5x2L1dGIsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGSdvIIiuSgGoobIeyrcA%2Bl6G3cn82S2shaBtT3bZFsuFiM%2B2A3t%2B5TagEPSqbcfCwodTu4Ycp5%2Fu7D%2BeJtRv3DnZZc6juupXnTlpFncoOPSWLQusodzqil%2FMiLlcTKHNwg1wFS1wf19isddlgb%2FiVqe1N8FuGCV5yDw3qkwkj6xu0zPXxluil7wwHHml30%2FfSKtPZ51mcgrWGLWf7ZqmcJMLEAAgyUiWnq4FoX0bGXn1Finxpbay6rtXzNSmZ%2FTwEq9TVdbzqcSvrUr9npNFgOzXzJSrJdYqDatxCJCHTp02eDSgkT5CBubkRCbNzuxDoKve45eKGfFbp5LQKl2pRYcXbBKXjVpZybeBMvXymzJwIDeAdzOnrC7fCjk8eYXl0f2Xo224oMTh7zDVW3Hpg6tikJ5OetSBSEE8K8TMRUBRXkU%2BmX6J32MgWeLJS9OHRPMPduTHLGSHxc4EPDXG8u9QO%2FzLKU5Y2UZ3UuAwfccw3C1DIE%2FG7j2g48Rmvz%2BqJJPqlaik8X7XOkRO%2FiwXYYFXt6JZH%2BFGg734Bfp%2FuhN4tEmeW2ZU019ZlUazx6g8By%2BPwjJZGtr735GJRTFsYY6J6ml5RHr6P%2BTM7wxySOwMRGJS1BAwUAcwjn55aFVwoPxLS8ma5yigNybMKOd3b4GOqUBZiEAFGfIY3dqpZmnS2YT7MwRVR4WcRILenzswoR7PwQ%2FyItww53TCX4AfriBMRho3LuyuhMXH5xCVtjMI3ZCI6X4r%2FW12MSEgT68F4geMAaDdqzCB%2FKQ7b%2BrnXESbIfEWP9uL7O994nkrMU20WfYMQGOakIvf2C0DqsAZSc13JaEsiMWirYSwlq8yJtEEYOWjJMurz77A1g5j27RMjLZGCEl6d4T&X-Amz-Signature=84e2c61aff1c5f0e504387cbbff5d43d03265198c35d7ed24ff21d2b7924928a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
