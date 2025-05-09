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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TKIDJIO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSb8AJQ9UjhWkArZ0E0nWowBJfpxHujGYrcm%2FWcR5g2gIhAOAz6TGxSCx%2FNZ5ri3pHhyU6MjT8xS6KacDoxS17IzfLKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztmdYjK33ev3zsoYYq3AOtNB9JzDZyep6p1QdhLHN0cOobFRDQ1qAZ%2FWVuCIxl91zoWKubWDeiYv04d8HT4dMn3mOEjyNyUioBwm6MCIG0W3os28W7xir8st%2F7tBkYrb7aWh2V9d5BIX25cmOyCmAFFuEThTgN24JAl0%2FqOV3Hw3y%2B92y2wBRszbMv5fNGnZ%2FhNe7%2Bb7KBY%2B9VDt0E54wDvDpEKnm2CdPJdG9a4Vkx7T%2Bh%2F1ABJej8RIqgUyjuQJ6eUf2D7EXNM1y7m%2BOdEsDqVQjX1czuYfIM1O74OUic%2BI%2FjI36O8rPx%2Fq6bgwquztU0Tvy2fEx3pQZScDxLJEbLDql84UcBwC6K0OKDgXt37UY2cRc%2BUCepXBgiKGnm5q3E57USKVu0TFXVN%2B8jG7uSNDQ6RZaaABItkQFNRMg5QN40miLNY%2B%2B7FrtG6We6L3qI0DimlJoU3HyxHAIFD63MqEWpba58pOiyNZwf46ObwWb28LUsyPfYbfSXDA92CG2cWGwwY%2FnRWTxoQbLiz4Eh8j3%2FqRNahuhCyB%2Fz11sn2LYWQBcdqUxGlyV6vkCBTDTSw1zMglHBuZQyFCxrNJRMHxHfSnXHgoODVXqVUbYZbQFainBNpd7YSfXro36OIOHx0yrzz%2F74gIGKLDCtxPnABjqkAb7RYjUGXWmB8GH1gT4m9v96CC8Yj4AF4F2SSUjWUhEoojnk8mNuOktMNXh7zKs1EsMJ%2FUSrJepvp20pJvXiuTg0txHiaxSicsKkDTC%2FGN1GuO1AJsaiPleYwh%2BjXan9fblyCCPWsOTBak1WHLYC4CxO%2BWODSDLkM32bqX7ntMfpsxAGL5RwYxySV5Qb7pGGCUZ%2BhnSkFUjjKx%2FHzIwseBxwXkzI&X-Amz-Signature=27d760d652dacfb40438f27d89fd549f402608077bfe4ea9ac0d559f01370bf6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TKIDJIO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSb8AJQ9UjhWkArZ0E0nWowBJfpxHujGYrcm%2FWcR5g2gIhAOAz6TGxSCx%2FNZ5ri3pHhyU6MjT8xS6KacDoxS17IzfLKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztmdYjK33ev3zsoYYq3AOtNB9JzDZyep6p1QdhLHN0cOobFRDQ1qAZ%2FWVuCIxl91zoWKubWDeiYv04d8HT4dMn3mOEjyNyUioBwm6MCIG0W3os28W7xir8st%2F7tBkYrb7aWh2V9d5BIX25cmOyCmAFFuEThTgN24JAl0%2FqOV3Hw3y%2B92y2wBRszbMv5fNGnZ%2FhNe7%2Bb7KBY%2B9VDt0E54wDvDpEKnm2CdPJdG9a4Vkx7T%2Bh%2F1ABJej8RIqgUyjuQJ6eUf2D7EXNM1y7m%2BOdEsDqVQjX1czuYfIM1O74OUic%2BI%2FjI36O8rPx%2Fq6bgwquztU0Tvy2fEx3pQZScDxLJEbLDql84UcBwC6K0OKDgXt37UY2cRc%2BUCepXBgiKGnm5q3E57USKVu0TFXVN%2B8jG7uSNDQ6RZaaABItkQFNRMg5QN40miLNY%2B%2B7FrtG6We6L3qI0DimlJoU3HyxHAIFD63MqEWpba58pOiyNZwf46ObwWb28LUsyPfYbfSXDA92CG2cWGwwY%2FnRWTxoQbLiz4Eh8j3%2FqRNahuhCyB%2Fz11sn2LYWQBcdqUxGlyV6vkCBTDTSw1zMglHBuZQyFCxrNJRMHxHfSnXHgoODVXqVUbYZbQFainBNpd7YSfXro36OIOHx0yrzz%2F74gIGKLDCtxPnABjqkAb7RYjUGXWmB8GH1gT4m9v96CC8Yj4AF4F2SSUjWUhEoojnk8mNuOktMNXh7zKs1EsMJ%2FUSrJepvp20pJvXiuTg0txHiaxSicsKkDTC%2FGN1GuO1AJsaiPleYwh%2BjXan9fblyCCPWsOTBak1WHLYC4CxO%2BWODSDLkM32bqX7ntMfpsxAGL5RwYxySV5Qb7pGGCUZ%2BhnSkFUjjKx%2FHzIwseBxwXkzI&X-Amz-Signature=a86726d2c3a7ff70f8d5e63a94398fb4a9422b4c82c6c99d47b0ec0067d904b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TKIDJIO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSb8AJQ9UjhWkArZ0E0nWowBJfpxHujGYrcm%2FWcR5g2gIhAOAz6TGxSCx%2FNZ5ri3pHhyU6MjT8xS6KacDoxS17IzfLKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztmdYjK33ev3zsoYYq3AOtNB9JzDZyep6p1QdhLHN0cOobFRDQ1qAZ%2FWVuCIxl91zoWKubWDeiYv04d8HT4dMn3mOEjyNyUioBwm6MCIG0W3os28W7xir8st%2F7tBkYrb7aWh2V9d5BIX25cmOyCmAFFuEThTgN24JAl0%2FqOV3Hw3y%2B92y2wBRszbMv5fNGnZ%2FhNe7%2Bb7KBY%2B9VDt0E54wDvDpEKnm2CdPJdG9a4Vkx7T%2Bh%2F1ABJej8RIqgUyjuQJ6eUf2D7EXNM1y7m%2BOdEsDqVQjX1czuYfIM1O74OUic%2BI%2FjI36O8rPx%2Fq6bgwquztU0Tvy2fEx3pQZScDxLJEbLDql84UcBwC6K0OKDgXt37UY2cRc%2BUCepXBgiKGnm5q3E57USKVu0TFXVN%2B8jG7uSNDQ6RZaaABItkQFNRMg5QN40miLNY%2B%2B7FrtG6We6L3qI0DimlJoU3HyxHAIFD63MqEWpba58pOiyNZwf46ObwWb28LUsyPfYbfSXDA92CG2cWGwwY%2FnRWTxoQbLiz4Eh8j3%2FqRNahuhCyB%2Fz11sn2LYWQBcdqUxGlyV6vkCBTDTSw1zMglHBuZQyFCxrNJRMHxHfSnXHgoODVXqVUbYZbQFainBNpd7YSfXro36OIOHx0yrzz%2F74gIGKLDCtxPnABjqkAb7RYjUGXWmB8GH1gT4m9v96CC8Yj4AF4F2SSUjWUhEoojnk8mNuOktMNXh7zKs1EsMJ%2FUSrJepvp20pJvXiuTg0txHiaxSicsKkDTC%2FGN1GuO1AJsaiPleYwh%2BjXan9fblyCCPWsOTBak1WHLYC4CxO%2BWODSDLkM32bqX7ntMfpsxAGL5RwYxySV5Qb7pGGCUZ%2BhnSkFUjjKx%2FHzIwseBxwXkzI&X-Amz-Signature=9f202ff847496a5c0b7c959b0aefd0aeb271bfa849e12ab308dc48419541b396&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
