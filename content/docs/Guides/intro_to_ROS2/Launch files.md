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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ5VXFLU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF572SJsLz6O003Bpv%2BlYWzMSlstcLHPBVv%2BlLUo4ZIQIgPoEQZzOl5gZRpjQQGH0Zo%2BfLLhUQUP8ePLS46FVgRXcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBUcNgMCOnnozz1JECrcAwYPEUh7iKVlWgBBGDDgtx%2FA1J1OqFaAaAagYGwpH0EJ6gMKrg46ZOVXOX0Wuq4yVI5OGjba3Jato1p0MdFa3c90hf6ZtTcc85PGmWs14BUz8g3zjdFPQdxKx9FW%2FUEFvoict2lVnfRU%2BQit8%2Fqg52LzLr8htnNNCTw36HnX0QkJ3KItT9dFyYCC2Gm6jKvNKCxtGmzvk08TNoDwyluG0RfNut7x2FoX2n8rQRWuIcNFNmNKliowxQR8CAOEiOnXL6eQ3VV5yr9gO1MFyMJfG6Y870IY4Pln1jlrdPKCnIaa%2FUmA9LnTuJKHJ8zP5qrWlVjOpFO17IrnXJcBr4t38fg8praHSYe4siIjxC95RhP4X0XY6yZw8cXKS3qHEyj8QYRq6n5%2ByELST1II3WFolq4Qp2LUmfGDf5M0%2BaTLJBigwxPqJBW%2FUFkRgwu0lokXDdOxZFgErO2CJafpd9CoSib%2F92znKah4IhrKR6rMhaShD4U06pgUelvm9YIq3%2Bl3mCkN68qGJj5cH%2BYyzaC3FQSIQmErW1%2B5LQ%2BmX7GWweEKs2VujW5ToMjl%2BKOUNFmzhsFTRpfgme2%2BjYn7GiHWRiZFnn9sMpPezKCyM%2Fw7%2FGsU3w9uu0o%2FYsFWGqLEML%2BcrcAGOqUBvU4zv89d9S%2FB7A7V5JeG2oGDp68m6YtrkovqJJJPacVPobLMn4Rrwd3eiLfE3k37DSetfhS1TjQI1RkuGYYPoQ5kIPZD6AWmlL80bZjziX9zNwVKtkLNadgKiXP4ROpp%2FNhdjV6YGfg3CkhEzpRI562D4yiKvVOwsqXUy1APX%2FO5BrF3RxBlkbySYlTyMAaGLLWynLHYN3RbyjlOZ8yZ9MNhlIET&X-Amz-Signature=b1ab78117f66ee7b02ff2c2d00c8cd4d2118b91f997526d3ea0c07cd54bda402&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ5VXFLU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF572SJsLz6O003Bpv%2BlYWzMSlstcLHPBVv%2BlLUo4ZIQIgPoEQZzOl5gZRpjQQGH0Zo%2BfLLhUQUP8ePLS46FVgRXcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBUcNgMCOnnozz1JECrcAwYPEUh7iKVlWgBBGDDgtx%2FA1J1OqFaAaAagYGwpH0EJ6gMKrg46ZOVXOX0Wuq4yVI5OGjba3Jato1p0MdFa3c90hf6ZtTcc85PGmWs14BUz8g3zjdFPQdxKx9FW%2FUEFvoict2lVnfRU%2BQit8%2Fqg52LzLr8htnNNCTw36HnX0QkJ3KItT9dFyYCC2Gm6jKvNKCxtGmzvk08TNoDwyluG0RfNut7x2FoX2n8rQRWuIcNFNmNKliowxQR8CAOEiOnXL6eQ3VV5yr9gO1MFyMJfG6Y870IY4Pln1jlrdPKCnIaa%2FUmA9LnTuJKHJ8zP5qrWlVjOpFO17IrnXJcBr4t38fg8praHSYe4siIjxC95RhP4X0XY6yZw8cXKS3qHEyj8QYRq6n5%2ByELST1II3WFolq4Qp2LUmfGDf5M0%2BaTLJBigwxPqJBW%2FUFkRgwu0lokXDdOxZFgErO2CJafpd9CoSib%2F92znKah4IhrKR6rMhaShD4U06pgUelvm9YIq3%2Bl3mCkN68qGJj5cH%2BYyzaC3FQSIQmErW1%2B5LQ%2BmX7GWweEKs2VujW5ToMjl%2BKOUNFmzhsFTRpfgme2%2BjYn7GiHWRiZFnn9sMpPezKCyM%2Fw7%2FGsU3w9uu0o%2FYsFWGqLEML%2BcrcAGOqUBvU4zv89d9S%2FB7A7V5JeG2oGDp68m6YtrkovqJJJPacVPobLMn4Rrwd3eiLfE3k37DSetfhS1TjQI1RkuGYYPoQ5kIPZD6AWmlL80bZjziX9zNwVKtkLNadgKiXP4ROpp%2FNhdjV6YGfg3CkhEzpRI562D4yiKvVOwsqXUy1APX%2FO5BrF3RxBlkbySYlTyMAaGLLWynLHYN3RbyjlOZ8yZ9MNhlIET&X-Amz-Signature=ba2ab84d9ccc49dadfa78dab9ffda47947ea333a2da6499e6c5634352c2efc2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ5VXFLU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF572SJsLz6O003Bpv%2BlYWzMSlstcLHPBVv%2BlLUo4ZIQIgPoEQZzOl5gZRpjQQGH0Zo%2BfLLhUQUP8ePLS46FVgRXcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBUcNgMCOnnozz1JECrcAwYPEUh7iKVlWgBBGDDgtx%2FA1J1OqFaAaAagYGwpH0EJ6gMKrg46ZOVXOX0Wuq4yVI5OGjba3Jato1p0MdFa3c90hf6ZtTcc85PGmWs14BUz8g3zjdFPQdxKx9FW%2FUEFvoict2lVnfRU%2BQit8%2Fqg52LzLr8htnNNCTw36HnX0QkJ3KItT9dFyYCC2Gm6jKvNKCxtGmzvk08TNoDwyluG0RfNut7x2FoX2n8rQRWuIcNFNmNKliowxQR8CAOEiOnXL6eQ3VV5yr9gO1MFyMJfG6Y870IY4Pln1jlrdPKCnIaa%2FUmA9LnTuJKHJ8zP5qrWlVjOpFO17IrnXJcBr4t38fg8praHSYe4siIjxC95RhP4X0XY6yZw8cXKS3qHEyj8QYRq6n5%2ByELST1II3WFolq4Qp2LUmfGDf5M0%2BaTLJBigwxPqJBW%2FUFkRgwu0lokXDdOxZFgErO2CJafpd9CoSib%2F92znKah4IhrKR6rMhaShD4U06pgUelvm9YIq3%2Bl3mCkN68qGJj5cH%2BYyzaC3FQSIQmErW1%2B5LQ%2BmX7GWweEKs2VujW5ToMjl%2BKOUNFmzhsFTRpfgme2%2BjYn7GiHWRiZFnn9sMpPezKCyM%2Fw7%2FGsU3w9uu0o%2FYsFWGqLEML%2BcrcAGOqUBvU4zv89d9S%2FB7A7V5JeG2oGDp68m6YtrkovqJJJPacVPobLMn4Rrwd3eiLfE3k37DSetfhS1TjQI1RkuGYYPoQ5kIPZD6AWmlL80bZjziX9zNwVKtkLNadgKiXP4ROpp%2FNhdjV6YGfg3CkhEzpRI562D4yiKvVOwsqXUy1APX%2FO5BrF3RxBlkbySYlTyMAaGLLWynLHYN3RbyjlOZ8yZ9MNhlIET&X-Amz-Signature=04fcbd6847473bd94808a06feebc008ce20558266a306913e2ab4cfe32f95a19&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
