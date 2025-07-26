---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24I4QYW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDkeqWcVnx4pMaKB0SbugagLsd%2FAKTrUJRkQ1o43MB%2BXAIhAOkFTGa83Aznvj1MEQUR5OnChHSXvSQ1ClPlMOjdJK0pKv8DCFcQABoMNjM3NDIzMTgzODA1IgwqBdg%2BzL7sTjxS%2BnIq3AMZBXaKKgxI1LrVan0vpUInxGK6q%2FXX%2BYo8rtIDiJV%2B2REvUm0knZVc7XfhkZr%2B62nQ8d%2BVH%2B%2F5PXN5%2BIG34PxVxJ7Wk%2Fboj4dkNoTn%2FfB8J6vhJlny19VvZ7HvAdJxM18aqFx6fIvfuffvipqnePxBIsAQ39psxS0nighXHe%2FUinIrmllv%2F8hqkoYb0ONkhhvA%2BK%2BY1PC4W4T33K2xFKKqP6wZOb%2FOSxg0zJ%2BgzfFTwPHn7USBa6g0cGflTnX4X8rlOFDejpIy%2BHPpCd%2B39sunfgN%2BpsMPJuNO6xuR7mSjI9RxDlWlru8lgUavn8nbDU1wsWha%2FXQZbHF1FgOkb2CPMaAgUyBMQ3le4xHZ2%2BVnKTBodZqQwGoutT0e0m81gZQxntcP1n1XRANkyYvAlcPTu2FbiJkj9geBtpMsJBBdZ9EFlJDzAKhziItaw5uc9e1DKaC1bo2XOld6xfQ86HNFtyLRU%2Bxu95nBQF7tyYMviqxMIuLgPHIC%2FV9CqqKmU5To%2FdsiaOkC1RGW0FOGdkAt3B45fRRg1O4AMJwdqUYMduohMuYKv2OrdFhUHilxkyAE7DCUsF7v6%2FQ4R5Yw6XBBHhZhY7LsbjjaW5SxYIrMl5m1EEb4fxJMIdoDPzDv4pHEBjqkAWVwBkdS5pasnDbPUkxK6PR%2B7Xz2eNz0t9igOsGTna87hgjHAGmCi5hVuG1mlJT4u9pNuIwVWGAoqq7MOS8DD0LCudAuyRKMBIpCxuhvBb4PvbXtWtRu3z7Gq0uNqbH41Rv3MZIredhYcOVxbxBKfcY3GURXUnJL%2BlpGeig6bsypPeiQBiJGVy1Us3MgToaOJn0S2hILy0QJR470xeVF74%2BBh4rD&X-Amz-Signature=7e1624130e012a1c10d0481e0b0298ca8afc1aeef889ae74bb69ea12d03f283b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24I4QYW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDkeqWcVnx4pMaKB0SbugagLsd%2FAKTrUJRkQ1o43MB%2BXAIhAOkFTGa83Aznvj1MEQUR5OnChHSXvSQ1ClPlMOjdJK0pKv8DCFcQABoMNjM3NDIzMTgzODA1IgwqBdg%2BzL7sTjxS%2BnIq3AMZBXaKKgxI1LrVan0vpUInxGK6q%2FXX%2BYo8rtIDiJV%2B2REvUm0knZVc7XfhkZr%2B62nQ8d%2BVH%2B%2F5PXN5%2BIG34PxVxJ7Wk%2Fboj4dkNoTn%2FfB8J6vhJlny19VvZ7HvAdJxM18aqFx6fIvfuffvipqnePxBIsAQ39psxS0nighXHe%2FUinIrmllv%2F8hqkoYb0ONkhhvA%2BK%2BY1PC4W4T33K2xFKKqP6wZOb%2FOSxg0zJ%2BgzfFTwPHn7USBa6g0cGflTnX4X8rlOFDejpIy%2BHPpCd%2B39sunfgN%2BpsMPJuNO6xuR7mSjI9RxDlWlru8lgUavn8nbDU1wsWha%2FXQZbHF1FgOkb2CPMaAgUyBMQ3le4xHZ2%2BVnKTBodZqQwGoutT0e0m81gZQxntcP1n1XRANkyYvAlcPTu2FbiJkj9geBtpMsJBBdZ9EFlJDzAKhziItaw5uc9e1DKaC1bo2XOld6xfQ86HNFtyLRU%2Bxu95nBQF7tyYMviqxMIuLgPHIC%2FV9CqqKmU5To%2FdsiaOkC1RGW0FOGdkAt3B45fRRg1O4AMJwdqUYMduohMuYKv2OrdFhUHilxkyAE7DCUsF7v6%2FQ4R5Yw6XBBHhZhY7LsbjjaW5SxYIrMl5m1EEb4fxJMIdoDPzDv4pHEBjqkAWVwBkdS5pasnDbPUkxK6PR%2B7Xz2eNz0t9igOsGTna87hgjHAGmCi5hVuG1mlJT4u9pNuIwVWGAoqq7MOS8DD0LCudAuyRKMBIpCxuhvBb4PvbXtWtRu3z7Gq0uNqbH41Rv3MZIredhYcOVxbxBKfcY3GURXUnJL%2BlpGeig6bsypPeiQBiJGVy1Us3MgToaOJn0S2hILy0QJR470xeVF74%2BBh4rD&X-Amz-Signature=1e11365c6bafea5ae4865c16f9bc0926c4bff8538f73e5a8d91adb9550c05290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z24I4QYW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDkeqWcVnx4pMaKB0SbugagLsd%2FAKTrUJRkQ1o43MB%2BXAIhAOkFTGa83Aznvj1MEQUR5OnChHSXvSQ1ClPlMOjdJK0pKv8DCFcQABoMNjM3NDIzMTgzODA1IgwqBdg%2BzL7sTjxS%2BnIq3AMZBXaKKgxI1LrVan0vpUInxGK6q%2FXX%2BYo8rtIDiJV%2B2REvUm0knZVc7XfhkZr%2B62nQ8d%2BVH%2B%2F5PXN5%2BIG34PxVxJ7Wk%2Fboj4dkNoTn%2FfB8J6vhJlny19VvZ7HvAdJxM18aqFx6fIvfuffvipqnePxBIsAQ39psxS0nighXHe%2FUinIrmllv%2F8hqkoYb0ONkhhvA%2BK%2BY1PC4W4T33K2xFKKqP6wZOb%2FOSxg0zJ%2BgzfFTwPHn7USBa6g0cGflTnX4X8rlOFDejpIy%2BHPpCd%2B39sunfgN%2BpsMPJuNO6xuR7mSjI9RxDlWlru8lgUavn8nbDU1wsWha%2FXQZbHF1FgOkb2CPMaAgUyBMQ3le4xHZ2%2BVnKTBodZqQwGoutT0e0m81gZQxntcP1n1XRANkyYvAlcPTu2FbiJkj9geBtpMsJBBdZ9EFlJDzAKhziItaw5uc9e1DKaC1bo2XOld6xfQ86HNFtyLRU%2Bxu95nBQF7tyYMviqxMIuLgPHIC%2FV9CqqKmU5To%2FdsiaOkC1RGW0FOGdkAt3B45fRRg1O4AMJwdqUYMduohMuYKv2OrdFhUHilxkyAE7DCUsF7v6%2FQ4R5Yw6XBBHhZhY7LsbjjaW5SxYIrMl5m1EEb4fxJMIdoDPzDv4pHEBjqkAWVwBkdS5pasnDbPUkxK6PR%2B7Xz2eNz0t9igOsGTna87hgjHAGmCi5hVuG1mlJT4u9pNuIwVWGAoqq7MOS8DD0LCudAuyRKMBIpCxuhvBb4PvbXtWtRu3z7Gq0uNqbH41Rv3MZIredhYcOVxbxBKfcY3GURXUnJL%2BlpGeig6bsypPeiQBiJGVy1Us3MgToaOJn0S2hILy0QJR470xeVF74%2BBh4rD&X-Amz-Signature=4b3074cf1a3724623f2783ed7949d8fdbffa4dbd3bf06ab88edbd521ba6b0410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
