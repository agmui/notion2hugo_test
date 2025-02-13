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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPNRCAS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVcRyAsBfK1VNEEcskj8%2B%2F7KGVj8VSRKlSunTrlMhjtAiEA%2BJnAVTvOiw35mXXTv%2B2ElB2sqhwuSyrlDhEWoUqWW%2Bsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI0rFtQMmJSO8iBq1SrcAzfCaFs6txYT%2FJ8TVEvBR5BWCzCYaxRScjl3h%2FFi9UupGjjXOhQbc2CUdoKCZXj1LzW8m8x%2F%2FQ9fsJx8JEzdutFiIg89zRRXCMv9ClV6eMsfzcTLC%2BAal4Bq%2FO1XVBOmmAtsGMkfNxqXbF%2BZ9NdkrYakfj4oJOGE6z69pPTJbV5Y8yH42ZudciUr6e1ewqvL6T04ZJfBgHWC2mO0LxKr3mzWxQd%2F8kx%2FPoCUFjJU8PllqMivGNC%2BsKf3RaxtxcaXouG84EUpCdm4JeAP6k38nYDvYIWRCjSHO%2BUk%2BXciK0qpfhXEMEAFH0I64jMm2ertpgGGudz2qCfzgk5TtfBIU4uh3N%2FE58YrIz8LeQ6AOrnYi3myF%2B3M4PTNw%2BGG6QoC9zKCkNweSMVdHitBXq9xQ%2BbNcva%2B%2BruitdGmZ5upDVNR49IPsmZSDcoqHky0u9ATp37IfvZOal%2BF7XHfZ68HBR4VmYrbzELb1S6YTxkHAsWiOnBulzCDwpEhmAllNqoZ1DqBSXRrVtMhjY1ZozVIhswGucwC%2BKwQOJHmyHV6dFunLSpTNdWyg4dWc4II2MTQ7MPqzIrR0PtrK9%2BRLbNdgWNDjAcxo1bPLCqcQm%2FQWss%2B3o0dngS0%2F7R0TIo8MOC%2BuL0GOqUBzNhCVyHJVqrAv5%2BjYS1J4qnm20ctNB5o46KI0vZAX3oaJ%2BjhN%2FAVQ0D%2BsUC8sKCXENmCTLGDrtoXRzcjcf25L3P2TIzm1qpS0WggfZ%2B1%2BqlllkM69zdcXiaNvJ9wT%2BR3c7%2FaKjs93EQb3hGqQx3jG3HZ554sg2%2Bg0RL2CaQ6OMgq2luDBdDq1Gn5YcPw9W%2B9HLecjcvCuwFhRmE0jtrW2HlaUZUS&X-Amz-Signature=a0e8b84ee4ec6b092fbbc3f9355b3af223545e44f5714ebe8a2b18c0f5bc4645&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPNRCAS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVcRyAsBfK1VNEEcskj8%2B%2F7KGVj8VSRKlSunTrlMhjtAiEA%2BJnAVTvOiw35mXXTv%2B2ElB2sqhwuSyrlDhEWoUqWW%2Bsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI0rFtQMmJSO8iBq1SrcAzfCaFs6txYT%2FJ8TVEvBR5BWCzCYaxRScjl3h%2FFi9UupGjjXOhQbc2CUdoKCZXj1LzW8m8x%2F%2FQ9fsJx8JEzdutFiIg89zRRXCMv9ClV6eMsfzcTLC%2BAal4Bq%2FO1XVBOmmAtsGMkfNxqXbF%2BZ9NdkrYakfj4oJOGE6z69pPTJbV5Y8yH42ZudciUr6e1ewqvL6T04ZJfBgHWC2mO0LxKr3mzWxQd%2F8kx%2FPoCUFjJU8PllqMivGNC%2BsKf3RaxtxcaXouG84EUpCdm4JeAP6k38nYDvYIWRCjSHO%2BUk%2BXciK0qpfhXEMEAFH0I64jMm2ertpgGGudz2qCfzgk5TtfBIU4uh3N%2FE58YrIz8LeQ6AOrnYi3myF%2B3M4PTNw%2BGG6QoC9zKCkNweSMVdHitBXq9xQ%2BbNcva%2B%2BruitdGmZ5upDVNR49IPsmZSDcoqHky0u9ATp37IfvZOal%2BF7XHfZ68HBR4VmYrbzELb1S6YTxkHAsWiOnBulzCDwpEhmAllNqoZ1DqBSXRrVtMhjY1ZozVIhswGucwC%2BKwQOJHmyHV6dFunLSpTNdWyg4dWc4II2MTQ7MPqzIrR0PtrK9%2BRLbNdgWNDjAcxo1bPLCqcQm%2FQWss%2B3o0dngS0%2F7R0TIo8MOC%2BuL0GOqUBzNhCVyHJVqrAv5%2BjYS1J4qnm20ctNB5o46KI0vZAX3oaJ%2BjhN%2FAVQ0D%2BsUC8sKCXENmCTLGDrtoXRzcjcf25L3P2TIzm1qpS0WggfZ%2B1%2BqlllkM69zdcXiaNvJ9wT%2BR3c7%2FaKjs93EQb3hGqQx3jG3HZ554sg2%2Bg0RL2CaQ6OMgq2luDBdDq1Gn5YcPw9W%2B9HLecjcvCuwFhRmE0jtrW2HlaUZUS&X-Amz-Signature=9d9e10d3674dd9550cc8072848d5e869d47870d96619b79c78bf1ccb180cce2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLPNRCAS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVcRyAsBfK1VNEEcskj8%2B%2F7KGVj8VSRKlSunTrlMhjtAiEA%2BJnAVTvOiw35mXXTv%2B2ElB2sqhwuSyrlDhEWoUqWW%2Bsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI0rFtQMmJSO8iBq1SrcAzfCaFs6txYT%2FJ8TVEvBR5BWCzCYaxRScjl3h%2FFi9UupGjjXOhQbc2CUdoKCZXj1LzW8m8x%2F%2FQ9fsJx8JEzdutFiIg89zRRXCMv9ClV6eMsfzcTLC%2BAal4Bq%2FO1XVBOmmAtsGMkfNxqXbF%2BZ9NdkrYakfj4oJOGE6z69pPTJbV5Y8yH42ZudciUr6e1ewqvL6T04ZJfBgHWC2mO0LxKr3mzWxQd%2F8kx%2FPoCUFjJU8PllqMivGNC%2BsKf3RaxtxcaXouG84EUpCdm4JeAP6k38nYDvYIWRCjSHO%2BUk%2BXciK0qpfhXEMEAFH0I64jMm2ertpgGGudz2qCfzgk5TtfBIU4uh3N%2FE58YrIz8LeQ6AOrnYi3myF%2B3M4PTNw%2BGG6QoC9zKCkNweSMVdHitBXq9xQ%2BbNcva%2B%2BruitdGmZ5upDVNR49IPsmZSDcoqHky0u9ATp37IfvZOal%2BF7XHfZ68HBR4VmYrbzELb1S6YTxkHAsWiOnBulzCDwpEhmAllNqoZ1DqBSXRrVtMhjY1ZozVIhswGucwC%2BKwQOJHmyHV6dFunLSpTNdWyg4dWc4II2MTQ7MPqzIrR0PtrK9%2BRLbNdgWNDjAcxo1bPLCqcQm%2FQWss%2B3o0dngS0%2F7R0TIo8MOC%2BuL0GOqUBzNhCVyHJVqrAv5%2BjYS1J4qnm20ctNB5o46KI0vZAX3oaJ%2BjhN%2FAVQ0D%2BsUC8sKCXENmCTLGDrtoXRzcjcf25L3P2TIzm1qpS0WggfZ%2B1%2BqlllkM69zdcXiaNvJ9wT%2BR3c7%2FaKjs93EQb3hGqQx3jG3HZ554sg2%2Bg0RL2CaQ6OMgq2luDBdDq1Gn5YcPw9W%2B9HLecjcvCuwFhRmE0jtrW2HlaUZUS&X-Amz-Signature=afc5ba75004380491c1d55a72cb852799d45e18f21484b4a4e5330ceb45e05b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
