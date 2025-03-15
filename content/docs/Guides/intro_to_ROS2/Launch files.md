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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFVFGFX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpGT7GJfH24MgUeP6MUZF9N186pC5viADrzyhG4ljohAIgYRsClN2nuZCJG1C2CBzrzCrocuJ6nyKoVWHD5sd7%2F0Iq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIKUjbk2iSGZjeTbzircA%2BGr7YA0Z02DAi0vQ3vv%2B3zYStFMCa%2BIZ7SqVhTTii2rUnwJm60HMqnZwF3N03RhvBaRFvb%2B0XvNMvHSkXHL4nJbzVlZrV1aWR69Uhq%2FeRpEH1ooVzTWYQuYlCoKS4NyW0UeHm%2B%2FRqlM2RpgwH8stuOe4%2FKbpAQn6sfxZsM0yM1zMgZ4T64PkyiKYG%2BdEkjp5B7uxufS7Oz4Pokha4Q1FXMf8v9nOxx82K825jrZ4y3UfVHumh4S4%2F042bLrNsVPI7tSGsq%2FrXaJGV1T9y119pqzLM0XChKh0Da8cxISAvodzyMgxyzHHmZt82wzUNNwiGUu207AZlOlyeilHKwjU2U3PMe9WH1tqWV05qaIyRhUiWiJfA%2BA3VGUTAgLN1yCnSFCn8w%2BFa1hCTiFUaGzKYOIOXbNGEs4VONkhR9vZAE09WfNExr%2BzIHnryOE8Iq2qRPdLY20c3JmRxRdO76Wn3go16yGyciXoRmavTEryi%2FTvMWENPNMfybEYO2QH5Sud%2FfCX9iTEP6W9UG03elJ3ADWwyQ0jxS5n8SYgo0P7Sv7fRepbvmHnqrOTbYZ5SJYBGvF69d2DhmrbaDzcby5Tea%2B0OqPt2Zl7%2Bde7XT12A%2FDn3PlPobgYtaJv3gzMKfD174GOqUBWFLf3d%2FafWFPfzjtq63XYypxArGwuHHi9decqVHVwNTenfOuFFOODyIdvtzrk89L1VO2GHMotTlAhJ2XUkEE8YGhgOg4RW%2FLEvy215iDwiDAnLbsS320VV%2ByklsEuZLqnIVDhlSTPPrCbc4YjfxSUPS9ssYjmHFwLiSv9whgwcf6drVygPn3HzXJblQ80Soe16fZtGLuWGhFLJQMCFbfSti1wzDD&X-Amz-Signature=9f262312f0643a5e23b631fb7d18bb70a93c9feabe8c3b1c205ac2f996dcad49&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFVFGFX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpGT7GJfH24MgUeP6MUZF9N186pC5viADrzyhG4ljohAIgYRsClN2nuZCJG1C2CBzrzCrocuJ6nyKoVWHD5sd7%2F0Iq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIKUjbk2iSGZjeTbzircA%2BGr7YA0Z02DAi0vQ3vv%2B3zYStFMCa%2BIZ7SqVhTTii2rUnwJm60HMqnZwF3N03RhvBaRFvb%2B0XvNMvHSkXHL4nJbzVlZrV1aWR69Uhq%2FeRpEH1ooVzTWYQuYlCoKS4NyW0UeHm%2B%2FRqlM2RpgwH8stuOe4%2FKbpAQn6sfxZsM0yM1zMgZ4T64PkyiKYG%2BdEkjp5B7uxufS7Oz4Pokha4Q1FXMf8v9nOxx82K825jrZ4y3UfVHumh4S4%2F042bLrNsVPI7tSGsq%2FrXaJGV1T9y119pqzLM0XChKh0Da8cxISAvodzyMgxyzHHmZt82wzUNNwiGUu207AZlOlyeilHKwjU2U3PMe9WH1tqWV05qaIyRhUiWiJfA%2BA3VGUTAgLN1yCnSFCn8w%2BFa1hCTiFUaGzKYOIOXbNGEs4VONkhR9vZAE09WfNExr%2BzIHnryOE8Iq2qRPdLY20c3JmRxRdO76Wn3go16yGyciXoRmavTEryi%2FTvMWENPNMfybEYO2QH5Sud%2FfCX9iTEP6W9UG03elJ3ADWwyQ0jxS5n8SYgo0P7Sv7fRepbvmHnqrOTbYZ5SJYBGvF69d2DhmrbaDzcby5Tea%2B0OqPt2Zl7%2Bde7XT12A%2FDn3PlPobgYtaJv3gzMKfD174GOqUBWFLf3d%2FafWFPfzjtq63XYypxArGwuHHi9decqVHVwNTenfOuFFOODyIdvtzrk89L1VO2GHMotTlAhJ2XUkEE8YGhgOg4RW%2FLEvy215iDwiDAnLbsS320VV%2ByklsEuZLqnIVDhlSTPPrCbc4YjfxSUPS9ssYjmHFwLiSv9whgwcf6drVygPn3HzXJblQ80Soe16fZtGLuWGhFLJQMCFbfSti1wzDD&X-Amz-Signature=b76fb38656c95d1ca7736cb1d7da8cca456c284a153b886eb58e3bf9048b8adf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFVFGFX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpGT7GJfH24MgUeP6MUZF9N186pC5viADrzyhG4ljohAIgYRsClN2nuZCJG1C2CBzrzCrocuJ6nyKoVWHD5sd7%2F0Iq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIKUjbk2iSGZjeTbzircA%2BGr7YA0Z02DAi0vQ3vv%2B3zYStFMCa%2BIZ7SqVhTTii2rUnwJm60HMqnZwF3N03RhvBaRFvb%2B0XvNMvHSkXHL4nJbzVlZrV1aWR69Uhq%2FeRpEH1ooVzTWYQuYlCoKS4NyW0UeHm%2B%2FRqlM2RpgwH8stuOe4%2FKbpAQn6sfxZsM0yM1zMgZ4T64PkyiKYG%2BdEkjp5B7uxufS7Oz4Pokha4Q1FXMf8v9nOxx82K825jrZ4y3UfVHumh4S4%2F042bLrNsVPI7tSGsq%2FrXaJGV1T9y119pqzLM0XChKh0Da8cxISAvodzyMgxyzHHmZt82wzUNNwiGUu207AZlOlyeilHKwjU2U3PMe9WH1tqWV05qaIyRhUiWiJfA%2BA3VGUTAgLN1yCnSFCn8w%2BFa1hCTiFUaGzKYOIOXbNGEs4VONkhR9vZAE09WfNExr%2BzIHnryOE8Iq2qRPdLY20c3JmRxRdO76Wn3go16yGyciXoRmavTEryi%2FTvMWENPNMfybEYO2QH5Sud%2FfCX9iTEP6W9UG03elJ3ADWwyQ0jxS5n8SYgo0P7Sv7fRepbvmHnqrOTbYZ5SJYBGvF69d2DhmrbaDzcby5Tea%2B0OqPt2Zl7%2Bde7XT12A%2FDn3PlPobgYtaJv3gzMKfD174GOqUBWFLf3d%2FafWFPfzjtq63XYypxArGwuHHi9decqVHVwNTenfOuFFOODyIdvtzrk89L1VO2GHMotTlAhJ2XUkEE8YGhgOg4RW%2FLEvy215iDwiDAnLbsS320VV%2ByklsEuZLqnIVDhlSTPPrCbc4YjfxSUPS9ssYjmHFwLiSv9whgwcf6drVygPn3HzXJblQ80Soe16fZtGLuWGhFLJQMCFbfSti1wzDD&X-Amz-Signature=8d97d59d43e4f80687f27e17ee75cef632a22cf3abd60d622573cb06013f301d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
