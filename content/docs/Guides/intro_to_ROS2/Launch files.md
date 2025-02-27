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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EWPR4E%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGoaH55OHxTfTGmkAjvpDhKLPA1DGrwKas6N3elv1ciYAiAm7BuTRJMdxxXrFKPAzORHkwrsQJfNYndNfasWMxsSnSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM1%2F5528nFwJ2P17sgKtwD4nxsDMnw5nuXus5heWlFHXuRZvxaM2lZ3jCmnG11tt1ePIVgmDaUDM4E6Zz9qQhWS0Uwgbt5VeSjZ3rYu0BYi8Vb64r4q98Z9ixdd5HBvUV%2Fcs%2BNInbaejhpAGUDnqoemcNOca10ZQDZI1lKz4fuY6WXOoshtZJchZXDIdnrgrEXVCbEVvezB3ngu9AYkD82uZuXMC%2BI3nezEhT3Lm8aXpb6ypU4CVk585a4tmOA6lwkWia0gX4LZ0cbyV%2FLaDj6N1FMQVbxcnibS26aJRqffsDHd5FGUG1RDABmCtfkHJH5HbW7HsMSD9dRGKIGLAwHgwM7A97%2BYigX4lcqvjOhO%2F1JA8vAts84tmNn4163w1fKFnNYT2hhWQUbuC7OYk2I22SgX0ObPBiyUcr%2FcfPvhU%2BhDFQIpsVM%2Fn%2F1lG4mUHUrW2Ub4ozznNLZ6LrJg1WtvJnHDtoW3OFWkzyDGn0cIfurgwS%2F2McnFSkrLgtCOBkzhENZA0LR35%2BO512UEBvUBEEgixbVoKwxB%2F82Dpm8AQvd1AQRwoAxe%2BqzTpMQA0Fg2EcBip%2B%2FLiaF%2FTfVJF3%2Bz6YBn2SRK0ie2GE1KevulLayreqQ%2B23z4%2Ffrl33hlI%2F3AtYXvBK2aNx7RGEwjtKCvgY6pgGodqD2Fjky5wL1pRjDJcfXT6nl9ZycWdOIeb2nEFVhGjKcoayw8qNm8gh%2FMlrmAqlLzARTU0kToJ0OBNh7BZNiqi9JUejpeZ%2FKIkWFFQ3FpePW86GSxAHuttl8zQmN5dke8zU0esv0%2FgDtam2llLsKkjeYeqnIm2UwMXa2RMLCwRL4X5c9uS%2BvZmp7CynS2lyWmV4H%2Bq9Pd%2Fz7y1epXry9oaE0YYPW&X-Amz-Signature=5e014905e780d999af41f81f6fc6b5d338c98f09c6f250b2e4ec5fc4688b60b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EWPR4E%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGoaH55OHxTfTGmkAjvpDhKLPA1DGrwKas6N3elv1ciYAiAm7BuTRJMdxxXrFKPAzORHkwrsQJfNYndNfasWMxsSnSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM1%2F5528nFwJ2P17sgKtwD4nxsDMnw5nuXus5heWlFHXuRZvxaM2lZ3jCmnG11tt1ePIVgmDaUDM4E6Zz9qQhWS0Uwgbt5VeSjZ3rYu0BYi8Vb64r4q98Z9ixdd5HBvUV%2Fcs%2BNInbaejhpAGUDnqoemcNOca10ZQDZI1lKz4fuY6WXOoshtZJchZXDIdnrgrEXVCbEVvezB3ngu9AYkD82uZuXMC%2BI3nezEhT3Lm8aXpb6ypU4CVk585a4tmOA6lwkWia0gX4LZ0cbyV%2FLaDj6N1FMQVbxcnibS26aJRqffsDHd5FGUG1RDABmCtfkHJH5HbW7HsMSD9dRGKIGLAwHgwM7A97%2BYigX4lcqvjOhO%2F1JA8vAts84tmNn4163w1fKFnNYT2hhWQUbuC7OYk2I22SgX0ObPBiyUcr%2FcfPvhU%2BhDFQIpsVM%2Fn%2F1lG4mUHUrW2Ub4ozznNLZ6LrJg1WtvJnHDtoW3OFWkzyDGn0cIfurgwS%2F2McnFSkrLgtCOBkzhENZA0LR35%2BO512UEBvUBEEgixbVoKwxB%2F82Dpm8AQvd1AQRwoAxe%2BqzTpMQA0Fg2EcBip%2B%2FLiaF%2FTfVJF3%2Bz6YBn2SRK0ie2GE1KevulLayreqQ%2B23z4%2Ffrl33hlI%2F3AtYXvBK2aNx7RGEwjtKCvgY6pgGodqD2Fjky5wL1pRjDJcfXT6nl9ZycWdOIeb2nEFVhGjKcoayw8qNm8gh%2FMlrmAqlLzARTU0kToJ0OBNh7BZNiqi9JUejpeZ%2FKIkWFFQ3FpePW86GSxAHuttl8zQmN5dke8zU0esv0%2FgDtam2llLsKkjeYeqnIm2UwMXa2RMLCwRL4X5c9uS%2BvZmp7CynS2lyWmV4H%2Bq9Pd%2Fz7y1epXry9oaE0YYPW&X-Amz-Signature=5bff0f512a71207d87f4434a1d40dd2a43b73e6d06d0f7a0abf0cc96fc01bf24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EWPR4E%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGoaH55OHxTfTGmkAjvpDhKLPA1DGrwKas6N3elv1ciYAiAm7BuTRJMdxxXrFKPAzORHkwrsQJfNYndNfasWMxsSnSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM1%2F5528nFwJ2P17sgKtwD4nxsDMnw5nuXus5heWlFHXuRZvxaM2lZ3jCmnG11tt1ePIVgmDaUDM4E6Zz9qQhWS0Uwgbt5VeSjZ3rYu0BYi8Vb64r4q98Z9ixdd5HBvUV%2Fcs%2BNInbaejhpAGUDnqoemcNOca10ZQDZI1lKz4fuY6WXOoshtZJchZXDIdnrgrEXVCbEVvezB3ngu9AYkD82uZuXMC%2BI3nezEhT3Lm8aXpb6ypU4CVk585a4tmOA6lwkWia0gX4LZ0cbyV%2FLaDj6N1FMQVbxcnibS26aJRqffsDHd5FGUG1RDABmCtfkHJH5HbW7HsMSD9dRGKIGLAwHgwM7A97%2BYigX4lcqvjOhO%2F1JA8vAts84tmNn4163w1fKFnNYT2hhWQUbuC7OYk2I22SgX0ObPBiyUcr%2FcfPvhU%2BhDFQIpsVM%2Fn%2F1lG4mUHUrW2Ub4ozznNLZ6LrJg1WtvJnHDtoW3OFWkzyDGn0cIfurgwS%2F2McnFSkrLgtCOBkzhENZA0LR35%2BO512UEBvUBEEgixbVoKwxB%2F82Dpm8AQvd1AQRwoAxe%2BqzTpMQA0Fg2EcBip%2B%2FLiaF%2FTfVJF3%2Bz6YBn2SRK0ie2GE1KevulLayreqQ%2B23z4%2Ffrl33hlI%2F3AtYXvBK2aNx7RGEwjtKCvgY6pgGodqD2Fjky5wL1pRjDJcfXT6nl9ZycWdOIeb2nEFVhGjKcoayw8qNm8gh%2FMlrmAqlLzARTU0kToJ0OBNh7BZNiqi9JUejpeZ%2FKIkWFFQ3FpePW86GSxAHuttl8zQmN5dke8zU0esv0%2FgDtam2llLsKkjeYeqnIm2UwMXa2RMLCwRL4X5c9uS%2BvZmp7CynS2lyWmV4H%2Bq9Pd%2Fz7y1epXry9oaE0YYPW&X-Amz-Signature=6ca549bb5a088c65433dbfcb9673d2adc68ed3f03f30b4beb30be9d4f689218a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
