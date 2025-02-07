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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HL3FGBP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAYXiq%2F3WWtGHD7O9FY12nhwTD3qk7Mhx1JkdSBkcC4bAiBSROPxZfQ8k2U74OnEaPPH%2FBRq%2B09nWH1akjmlNcelTir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMK%2BP3XVBxXQY%2B7NrZKtwDoAzrBdUQdOEvCz81NFTQfVkecPmcZMUPCA4EQY4R1ui7XHCqSMQmtzO%2BJK9miVr3ImlnVKcTBmm9LN22RQLV6qykebKL9NjKiL8oqByq8VUha%2Fz3GFGTvxui7SSvbQNsfSIH0UDyCpC6cuHF97erj6dClhNGlVyWbFmud74u2MzFoMItzEYIdRGGTe%2BpLZ8GQ%2FcUMZRR1UV%2Bhxx2Lk9VdaCQTPpOGqqlYMJbz53b%2B%2FEBS4dtWh68q%2FveRYLPWSb4C3c3eJ3aghfJZG7COVkoZ5TCD2rWJUFo4uvAeK2v6pA3ucxF%2Bqs4ccxgNMk%2Br5cVREiHZ2Iil1qurxJZApDk8%2BjI7tqI4XJuf%2FGfQZ6RiB4RttVxUkPw3Udmdo8tQYEw0y%2B1z7mMicx7PPBqvjWbr7bT%2BomPwtykKiEQVmoTB8TZh3fZH1USo%2FRGOXsbttuKzh0%2FfEFCPuNzIrXTZ4%2BHWM72HIHrFMfq7IpgbKw08CgnZC%2BOozLiGmloj04O4%2Fnpa7iQlCXNRnRdbPjz2EEWZO4st3Qqd3OE9Nkx%2BASiZFjE3pTm3m2xHcalH4NByYNbT1rk%2BJDh8NF327r3fy0wpaNaJVsciSYJ6ZGroXT3h1mrcB94LgTKcX7eoIYwqJuVvQY6pgEqbXlNGhqnmtcah0UBS3iRBw0NjolBs8ZRuxJu9fE3aDKjUDGI47L8pf8r1Bi%2Bdh2Aqzcsqy5K4P2d%2FKgMIimb%2BMhb17mUXAEZfmbxQUuL%2BTIa9q3Jx1Y%2F4aicmOxbfZhsQ9HeTexDFYI07l7BkgC5pc5%2FSgQtGBXWABsj1DDMGSchPG1SQcAp4UdNnLlWFWrRVjg20VQmeBnIRgIROnMuEbMPcOoO&X-Amz-Signature=564fc6a801242cf59ed58afa5e23f5c4cc69918ee9e24e686cf79333725e98f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HL3FGBP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAYXiq%2F3WWtGHD7O9FY12nhwTD3qk7Mhx1JkdSBkcC4bAiBSROPxZfQ8k2U74OnEaPPH%2FBRq%2B09nWH1akjmlNcelTir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMK%2BP3XVBxXQY%2B7NrZKtwDoAzrBdUQdOEvCz81NFTQfVkecPmcZMUPCA4EQY4R1ui7XHCqSMQmtzO%2BJK9miVr3ImlnVKcTBmm9LN22RQLV6qykebKL9NjKiL8oqByq8VUha%2Fz3GFGTvxui7SSvbQNsfSIH0UDyCpC6cuHF97erj6dClhNGlVyWbFmud74u2MzFoMItzEYIdRGGTe%2BpLZ8GQ%2FcUMZRR1UV%2Bhxx2Lk9VdaCQTPpOGqqlYMJbz53b%2B%2FEBS4dtWh68q%2FveRYLPWSb4C3c3eJ3aghfJZG7COVkoZ5TCD2rWJUFo4uvAeK2v6pA3ucxF%2Bqs4ccxgNMk%2Br5cVREiHZ2Iil1qurxJZApDk8%2BjI7tqI4XJuf%2FGfQZ6RiB4RttVxUkPw3Udmdo8tQYEw0y%2B1z7mMicx7PPBqvjWbr7bT%2BomPwtykKiEQVmoTB8TZh3fZH1USo%2FRGOXsbttuKzh0%2FfEFCPuNzIrXTZ4%2BHWM72HIHrFMfq7IpgbKw08CgnZC%2BOozLiGmloj04O4%2Fnpa7iQlCXNRnRdbPjz2EEWZO4st3Qqd3OE9Nkx%2BASiZFjE3pTm3m2xHcalH4NByYNbT1rk%2BJDh8NF327r3fy0wpaNaJVsciSYJ6ZGroXT3h1mrcB94LgTKcX7eoIYwqJuVvQY6pgEqbXlNGhqnmtcah0UBS3iRBw0NjolBs8ZRuxJu9fE3aDKjUDGI47L8pf8r1Bi%2Bdh2Aqzcsqy5K4P2d%2FKgMIimb%2BMhb17mUXAEZfmbxQUuL%2BTIa9q3Jx1Y%2F4aicmOxbfZhsQ9HeTexDFYI07l7BkgC5pc5%2FSgQtGBXWABsj1DDMGSchPG1SQcAp4UdNnLlWFWrRVjg20VQmeBnIRgIROnMuEbMPcOoO&X-Amz-Signature=e55e7f8335cde8f47cb9c25462371f4f51511d977ad1eacbd5577553e56c76d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HL3FGBP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAYXiq%2F3WWtGHD7O9FY12nhwTD3qk7Mhx1JkdSBkcC4bAiBSROPxZfQ8k2U74OnEaPPH%2FBRq%2B09nWH1akjmlNcelTir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMK%2BP3XVBxXQY%2B7NrZKtwDoAzrBdUQdOEvCz81NFTQfVkecPmcZMUPCA4EQY4R1ui7XHCqSMQmtzO%2BJK9miVr3ImlnVKcTBmm9LN22RQLV6qykebKL9NjKiL8oqByq8VUha%2Fz3GFGTvxui7SSvbQNsfSIH0UDyCpC6cuHF97erj6dClhNGlVyWbFmud74u2MzFoMItzEYIdRGGTe%2BpLZ8GQ%2FcUMZRR1UV%2Bhxx2Lk9VdaCQTPpOGqqlYMJbz53b%2B%2FEBS4dtWh68q%2FveRYLPWSb4C3c3eJ3aghfJZG7COVkoZ5TCD2rWJUFo4uvAeK2v6pA3ucxF%2Bqs4ccxgNMk%2Br5cVREiHZ2Iil1qurxJZApDk8%2BjI7tqI4XJuf%2FGfQZ6RiB4RttVxUkPw3Udmdo8tQYEw0y%2B1z7mMicx7PPBqvjWbr7bT%2BomPwtykKiEQVmoTB8TZh3fZH1USo%2FRGOXsbttuKzh0%2FfEFCPuNzIrXTZ4%2BHWM72HIHrFMfq7IpgbKw08CgnZC%2BOozLiGmloj04O4%2Fnpa7iQlCXNRnRdbPjz2EEWZO4st3Qqd3OE9Nkx%2BASiZFjE3pTm3m2xHcalH4NByYNbT1rk%2BJDh8NF327r3fy0wpaNaJVsciSYJ6ZGroXT3h1mrcB94LgTKcX7eoIYwqJuVvQY6pgEqbXlNGhqnmtcah0UBS3iRBw0NjolBs8ZRuxJu9fE3aDKjUDGI47L8pf8r1Bi%2Bdh2Aqzcsqy5K4P2d%2FKgMIimb%2BMhb17mUXAEZfmbxQUuL%2BTIa9q3Jx1Y%2F4aicmOxbfZhsQ9HeTexDFYI07l7BkgC5pc5%2FSgQtGBXWABsj1DDMGSchPG1SQcAp4UdNnLlWFWrRVjg20VQmeBnIRgIROnMuEbMPcOoO&X-Amz-Signature=a3d59d2bf11b82fa8700dd2029b2dc063330bf39890a63a8d95284c67473a5a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
