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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=0412de696367dec2aebe0837d5cf8e326e02e6a534ba4ec5caabd8c01b3eb812&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=82c1978722025ca613a97de51075d1be32b7f00c061fff119f287f862846c51d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYCFVUQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2B5H5z0fzVONzTetblooJsGGngU46JcmLZDeA6n6%2FdAiEA77aFFyS2kY9bWPmfxRzw34mqHp6hMHSZg0lPzcYF%2FLMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLYa2%2BrNzMmcxLFHSSrcA24PcRP3DdmxUNI9N50HyCsAanG4VNwVS823SyZ0j1Ceasoe2AYiaR2My36rHVOwPi6jn49oimi6P9w3FrYmHwQ7gpvy4XXybze8EZInOKIHCUEMWIg%2BlXe5EyCPasyF7ZtlwUJ1nWZPNWRELuSAAZ2cUR4ND%2BxufGF%2FhD1W9U%2BUCT1oFuAvkl6iPVVNrjgggLlhO%2BUH2Vccs7PduKsYhWSRxdFAKcY3T%2BhFQTbC%2Fc0e9VUh0blnw9M%2BWVh%2FNikej8fM6pHTT%2FYxKJM2GV%2FQq%2F9SFiinXxIot2%2F2Nm3c36IUF85sfLe%2BUTze3GZdL2sQWmRTbGuXrEwSH0HLhHZwTt5OY4oUlY%2FJ61hG%2F7hSzewXTg7p9MBGJpHU9r73FFpBCs6pZuBHuA4c48WitDY7h2nnCM86UwQYL8xQyXpFd2neTcFYc4GcESssUb5k3mJ%2BvWm%2FhOGB6wd44rGV%2FUzJFvFqVfVAr5ZbTSGnV3oAVr2WePj%2BOJ%2B%2BtK3Vg4VKmSdszOJZaGmJmlgizq9JZ5eDOhmCBRDvG7Bgx%2BAHq9DfndX%2FK3Rz9sVAwpijGolTOyAdKHQqtua5G3EvRPUGd5QDLbyAsx5Zvm7hfeLT3q7nPYyXRzp6yXOtjHL0BF%2BeMJbv1b4GOqUB%2FEIVPZ2PVfT3tNWExHGCAUdOlNAuOGkj%2B1YbTIEQLGD0xa8o%2BrptgAz%2F5cHHby4ptLxWjdscpfR%2Fml3STzgGOYkXsoA9TfB%2FnNT6zs5N76hMvVS%2BR2lLGljuBo1zllVrPenjcOcXuRoWeJi5l9MKX8NItODqOWgP9gB2P7v%2FuLnztpZyqQt8irKOririTcoXdiUAzeEX%2B%2FDoHevE6aHeh4Chp1UL&X-Amz-Signature=ddb7b08497f720e0a3413b35a5f0e12eed30cfbab0a3a864aa3543dfc44bbb30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
