---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZJV3VE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFAH%2FTqz8DAQ3NDaBU2f3JZZtZ9g2q1C4tyONeV2R78pAiEA%2B%2BTc38%2BnLWbOHZYUvQaZ3Hz2WNUDLTNc2L33clxOqiMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNEcyO2tCoHqGxbN%2BircAxaaz58%2Fbbf%2FUtwxOLFkhu3t3XCb5CK8qlUcP%2FauL4qxjl8FDrxNorFR7myLJzWSlBECtRutAgAZwmspSc6ndFXp6AulQ9mPoA8sJ2%2Fn4U%2Fwl%2FLWcLiwdIV7XB3xauTMs3Gnq2%2BFryTp3qxN%2B5S6iA%2BLcwWV5BlIOJw1AFu94fnoaad%2BliAdEmzVQlrxwX3snB5gGXHPyRcBfOnYrP5LtY6unwqrvstCwkzshYjrpYZ5jkZdi3%2B2FZsHt5qsB%2FesI%2FiPOzzl8hm%2FX6RZ3z2V2s4F5JPFIizZg7J0wj%2FSPzrqQqPw78ITILYFsPTTyAmb%2BFxpabM6zT75DzkOkvqGY4TOBulpW0Wvrd%2ByJWfedbDa4SuJZAcxn8XN3mO%2B%2B614tXiYtlO8Tif0HmPnpzhy%2BHHFVul3AWqra8OHpZGj5phYIJTuSDgfxq7AIpWjB%2Ft%2FPHsMtiqI0EEPlQihzaiNv9PF7CIKf6iAkQSWwe79kKPEWADObjWI9beYZnD1w897bFyOeeNZEeYyZH4fCBqce7Y1nK9hAwzP1ea2x9TeLdvYlB%2FmIcFJDNua2IjQ%2FIbWJUQss8doTH6qierkMK7fM3O5KzaazG%2F0MFeRaxaaeI%2BqMTIo7WvjMdfEEO%2FaMJb0xMQGOqUBDcQk6qXbXaXqwABbaved%2F84x%2Bgm3WIHBoOW42sHRb5ZSWM4LOsvZRVDAxwgMGMnkEzqt40uzot00%2F8jopP5G0oXesUM8nyH4%2FBR4ElXXOvlLquE3Z5FvKZIgwCOb9Iz5kdmv0Stw4ELKKUFz2vxFmuoAhSLPRuittrhZ00R%2FqvoduPlc0mStbTWB8ByWJmXIWwFiSJUCwYks8toMABbfZD5JU%2F9u&X-Amz-Signature=10e10e59dbcea2c8606c950a0df6b614f42c732f72fc5d9cc8e85d09c46e1d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZJV3VE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFAH%2FTqz8DAQ3NDaBU2f3JZZtZ9g2q1C4tyONeV2R78pAiEA%2B%2BTc38%2BnLWbOHZYUvQaZ3Hz2WNUDLTNc2L33clxOqiMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNEcyO2tCoHqGxbN%2BircAxaaz58%2Fbbf%2FUtwxOLFkhu3t3XCb5CK8qlUcP%2FauL4qxjl8FDrxNorFR7myLJzWSlBECtRutAgAZwmspSc6ndFXp6AulQ9mPoA8sJ2%2Fn4U%2Fwl%2FLWcLiwdIV7XB3xauTMs3Gnq2%2BFryTp3qxN%2B5S6iA%2BLcwWV5BlIOJw1AFu94fnoaad%2BliAdEmzVQlrxwX3snB5gGXHPyRcBfOnYrP5LtY6unwqrvstCwkzshYjrpYZ5jkZdi3%2B2FZsHt5qsB%2FesI%2FiPOzzl8hm%2FX6RZ3z2V2s4F5JPFIizZg7J0wj%2FSPzrqQqPw78ITILYFsPTTyAmb%2BFxpabM6zT75DzkOkvqGY4TOBulpW0Wvrd%2ByJWfedbDa4SuJZAcxn8XN3mO%2B%2B614tXiYtlO8Tif0HmPnpzhy%2BHHFVul3AWqra8OHpZGj5phYIJTuSDgfxq7AIpWjB%2Ft%2FPHsMtiqI0EEPlQihzaiNv9PF7CIKf6iAkQSWwe79kKPEWADObjWI9beYZnD1w897bFyOeeNZEeYyZH4fCBqce7Y1nK9hAwzP1ea2x9TeLdvYlB%2FmIcFJDNua2IjQ%2FIbWJUQss8doTH6qierkMK7fM3O5KzaazG%2F0MFeRaxaaeI%2BqMTIo7WvjMdfEEO%2FaMJb0xMQGOqUBDcQk6qXbXaXqwABbaved%2F84x%2Bgm3WIHBoOW42sHRb5ZSWM4LOsvZRVDAxwgMGMnkEzqt40uzot00%2F8jopP5G0oXesUM8nyH4%2FBR4ElXXOvlLquE3Z5FvKZIgwCOb9Iz5kdmv0Stw4ELKKUFz2vxFmuoAhSLPRuittrhZ00R%2FqvoduPlc0mStbTWB8ByWJmXIWwFiSJUCwYks8toMABbfZD5JU%2F9u&X-Amz-Signature=dc86dc79df1e2b7e068c9a9ed2a13dab1ffeabae806a2d350c0082fe22ebdc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZJV3VE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFAH%2FTqz8DAQ3NDaBU2f3JZZtZ9g2q1C4tyONeV2R78pAiEA%2B%2BTc38%2BnLWbOHZYUvQaZ3Hz2WNUDLTNc2L33clxOqiMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNEcyO2tCoHqGxbN%2BircAxaaz58%2Fbbf%2FUtwxOLFkhu3t3XCb5CK8qlUcP%2FauL4qxjl8FDrxNorFR7myLJzWSlBECtRutAgAZwmspSc6ndFXp6AulQ9mPoA8sJ2%2Fn4U%2Fwl%2FLWcLiwdIV7XB3xauTMs3Gnq2%2BFryTp3qxN%2B5S6iA%2BLcwWV5BlIOJw1AFu94fnoaad%2BliAdEmzVQlrxwX3snB5gGXHPyRcBfOnYrP5LtY6unwqrvstCwkzshYjrpYZ5jkZdi3%2B2FZsHt5qsB%2FesI%2FiPOzzl8hm%2FX6RZ3z2V2s4F5JPFIizZg7J0wj%2FSPzrqQqPw78ITILYFsPTTyAmb%2BFxpabM6zT75DzkOkvqGY4TOBulpW0Wvrd%2ByJWfedbDa4SuJZAcxn8XN3mO%2B%2B614tXiYtlO8Tif0HmPnpzhy%2BHHFVul3AWqra8OHpZGj5phYIJTuSDgfxq7AIpWjB%2Ft%2FPHsMtiqI0EEPlQihzaiNv9PF7CIKf6iAkQSWwe79kKPEWADObjWI9beYZnD1w897bFyOeeNZEeYyZH4fCBqce7Y1nK9hAwzP1ea2x9TeLdvYlB%2FmIcFJDNua2IjQ%2FIbWJUQss8doTH6qierkMK7fM3O5KzaazG%2F0MFeRaxaaeI%2BqMTIo7WvjMdfEEO%2FaMJb0xMQGOqUBDcQk6qXbXaXqwABbaved%2F84x%2Bgm3WIHBoOW42sHRb5ZSWM4LOsvZRVDAxwgMGMnkEzqt40uzot00%2F8jopP5G0oXesUM8nyH4%2FBR4ElXXOvlLquE3Z5FvKZIgwCOb9Iz5kdmv0Stw4ELKKUFz2vxFmuoAhSLPRuittrhZ00R%2FqvoduPlc0mStbTWB8ByWJmXIWwFiSJUCwYks8toMABbfZD5JU%2F9u&X-Amz-Signature=ae8da3d391485602aa101718a323553dfb6129e7f9512854cfdfb988fd801930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
