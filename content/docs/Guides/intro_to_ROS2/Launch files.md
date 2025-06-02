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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2D2556M%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHQKa9EYioh89lgOb3T4D1CIQpAhSb7QEbNNcq8FwyQ%2FAiA3Z4AkwhgSybK7pc1B9ZH8%2FOPCI3adrQZ%2FSbINMyt6XyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnDA2Vdm0O6HHZAfKtwD6j2o6pKyexP5RxgELoJlUSjT%2BE9N7hnraAdM9AZXYTJlWW4kkGTm0BwrAgbFN6wSEuz63w0qnKxePFQBgyAs10wyiLq7RSZHwzOI8Dm8Sibb9O1OkAlm%2BLA38UPuhoMulPNrQhjKFT5mO8pS3J2fOM%2FvEm67eTJGLML%2B6GoryJ5hAQ02Du96QyfbEdU23xZY6uy0fYMuk991klIwnbR%2FwLAiUXNQ8A4HIofqjeQ0%2BYfOmfSfe1%2F3E5%2Bz%2Fd0kXqMi2xRVV3TcTD7pg%2B3roJKwrlS4AnfjGW4Myj4BndWgOyfRbdo485o6ujRV5r3zjH0C%2BM87P61wPeRx0jxXSzL84zKPxzhdkJcM0FZ%2F1%2B%2Bu%2FKH1KOFZ6jvcoxmaJdlhHz1Xubt06lCfiH%2BtxBIgskkB0P8HHprWJa8ubxocJtNyc8f7xsnUc4Mpc01Dkcp1iRZJBQ4AL5kmuyzc3q7PRIwY%2FlN5ybIx7zsTzL6pjiHeiJXzhoeVdWtBQqGzmmHmagmJounuPYpnc2AwlJuxhltz9%2BcwYR7G%2B0qobNHmQrW2Iw1cSdX2Er%2Biwlu%2F1x%2FtTLY%2BwMqH1VgcuPYyVfTCT5GYjYesBXBFKASwAN%2BzYR8r8slGLGNqDml7A0PdWKwwluL3wQY6pgEWXNPvi%2BwSbQGJouVFKOsHAVy3GyPgcDWD52GYnU4eonhNKc32BXX8uADZ0eXdMeCiyosjg%2BIVe9PHDOABAtV8RR%2BOYGfDNVgG%2FdYZIoLXRo1ArktedmrxvysXmBTRQoR8CSxyldDxLwYqwtHPmAfntx%2BFzbfph8rC%2FIxG%2BjIkCRcg9%2BQEhGbo4g3v9ZVMRSVBeV6VXMO4rhK1JcSlJb8QwzS8MpvJ&X-Amz-Signature=4c219fab75d9b93174e6489856f45d1dba12a5c418499f056477c19f8ad1197b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2D2556M%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHQKa9EYioh89lgOb3T4D1CIQpAhSb7QEbNNcq8FwyQ%2FAiA3Z4AkwhgSybK7pc1B9ZH8%2FOPCI3adrQZ%2FSbINMyt6XyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnDA2Vdm0O6HHZAfKtwD6j2o6pKyexP5RxgELoJlUSjT%2BE9N7hnraAdM9AZXYTJlWW4kkGTm0BwrAgbFN6wSEuz63w0qnKxePFQBgyAs10wyiLq7RSZHwzOI8Dm8Sibb9O1OkAlm%2BLA38UPuhoMulPNrQhjKFT5mO8pS3J2fOM%2FvEm67eTJGLML%2B6GoryJ5hAQ02Du96QyfbEdU23xZY6uy0fYMuk991klIwnbR%2FwLAiUXNQ8A4HIofqjeQ0%2BYfOmfSfe1%2F3E5%2Bz%2Fd0kXqMi2xRVV3TcTD7pg%2B3roJKwrlS4AnfjGW4Myj4BndWgOyfRbdo485o6ujRV5r3zjH0C%2BM87P61wPeRx0jxXSzL84zKPxzhdkJcM0FZ%2F1%2B%2Bu%2FKH1KOFZ6jvcoxmaJdlhHz1Xubt06lCfiH%2BtxBIgskkB0P8HHprWJa8ubxocJtNyc8f7xsnUc4Mpc01Dkcp1iRZJBQ4AL5kmuyzc3q7PRIwY%2FlN5ybIx7zsTzL6pjiHeiJXzhoeVdWtBQqGzmmHmagmJounuPYpnc2AwlJuxhltz9%2BcwYR7G%2B0qobNHmQrW2Iw1cSdX2Er%2Biwlu%2F1x%2FtTLY%2BwMqH1VgcuPYyVfTCT5GYjYesBXBFKASwAN%2BzYR8r8slGLGNqDml7A0PdWKwwluL3wQY6pgEWXNPvi%2BwSbQGJouVFKOsHAVy3GyPgcDWD52GYnU4eonhNKc32BXX8uADZ0eXdMeCiyosjg%2BIVe9PHDOABAtV8RR%2BOYGfDNVgG%2FdYZIoLXRo1ArktedmrxvysXmBTRQoR8CSxyldDxLwYqwtHPmAfntx%2BFzbfph8rC%2FIxG%2BjIkCRcg9%2BQEhGbo4g3v9ZVMRSVBeV6VXMO4rhK1JcSlJb8QwzS8MpvJ&X-Amz-Signature=ee056ec4610f6b7c58efebf306d0f8024dddd5c2f76e22a9168fa24a1c055990&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2D2556M%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHQKa9EYioh89lgOb3T4D1CIQpAhSb7QEbNNcq8FwyQ%2FAiA3Z4AkwhgSybK7pc1B9ZH8%2FOPCI3adrQZ%2FSbINMyt6XyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXnDA2Vdm0O6HHZAfKtwD6j2o6pKyexP5RxgELoJlUSjT%2BE9N7hnraAdM9AZXYTJlWW4kkGTm0BwrAgbFN6wSEuz63w0qnKxePFQBgyAs10wyiLq7RSZHwzOI8Dm8Sibb9O1OkAlm%2BLA38UPuhoMulPNrQhjKFT5mO8pS3J2fOM%2FvEm67eTJGLML%2B6GoryJ5hAQ02Du96QyfbEdU23xZY6uy0fYMuk991klIwnbR%2FwLAiUXNQ8A4HIofqjeQ0%2BYfOmfSfe1%2F3E5%2Bz%2Fd0kXqMi2xRVV3TcTD7pg%2B3roJKwrlS4AnfjGW4Myj4BndWgOyfRbdo485o6ujRV5r3zjH0C%2BM87P61wPeRx0jxXSzL84zKPxzhdkJcM0FZ%2F1%2B%2Bu%2FKH1KOFZ6jvcoxmaJdlhHz1Xubt06lCfiH%2BtxBIgskkB0P8HHprWJa8ubxocJtNyc8f7xsnUc4Mpc01Dkcp1iRZJBQ4AL5kmuyzc3q7PRIwY%2FlN5ybIx7zsTzL6pjiHeiJXzhoeVdWtBQqGzmmHmagmJounuPYpnc2AwlJuxhltz9%2BcwYR7G%2B0qobNHmQrW2Iw1cSdX2Er%2Biwlu%2F1x%2FtTLY%2BwMqH1VgcuPYyVfTCT5GYjYesBXBFKASwAN%2BzYR8r8slGLGNqDml7A0PdWKwwluL3wQY6pgEWXNPvi%2BwSbQGJouVFKOsHAVy3GyPgcDWD52GYnU4eonhNKc32BXX8uADZ0eXdMeCiyosjg%2BIVe9PHDOABAtV8RR%2BOYGfDNVgG%2FdYZIoLXRo1ArktedmrxvysXmBTRQoR8CSxyldDxLwYqwtHPmAfntx%2BFzbfph8rC%2FIxG%2BjIkCRcg9%2BQEhGbo4g3v9ZVMRSVBeV6VXMO4rhK1JcSlJb8QwzS8MpvJ&X-Amz-Signature=1658d8c61887dceafd8741f94940b43eba632990fff302f5df707e53d3ff7c60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
