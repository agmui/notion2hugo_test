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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WMKVHV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuLgYfawoX55WFR7%2B1KogBkJuk9fjKVBQSm7%2FuQXO5TQIhAIGxXyUwjI3Voj8xY2FgF2NX1EsEqTg1iXcof6uHsbQLKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5GdYoqnsO4CfAfVYq3APQUNIL8YPfSVVO1VK0xeUw2SIQ%2BBqWjBNk4KWZoo0wTfJOp5JjmKPgk4X%2BUYtP6Y1YfusYvloDLWp63lqkQNC%2BkS%2FVjG4P71DubyRaqQXsC5rQVBR7cAjc8496HDTGl5%2FTzafEiFiK%2FN44lRUHjlSF%2Bm551BTwcrsNCDI7OTM5xBq%2BJNLuyy7OukDpnFaObtG4uiaUW6Na%2BTyQ%2BPae99enW1XPtCioiSuW0dhap7pThMqjKZ3%2FBHPnZosUHtah2Wa9BbBi%2Bukez3fdSqvZ6UXctMfH0ZfbILbaFr%2FrZEcNI7nk8f4AeJwVKW7Y0ojttrFPWosFQajLbCB5%2Fh2fLClpth62NpVloW1T%2BY83ASxVcGEWnsb0ATftlup9DqNbVC2quNlsrROrkeBj8BFyhOWgisFzaN4hzNzyJ7%2BSozw24JNApBhW1j2tNi7I6R4LwNuzmIQ5KDfooLU72siT21VbGlNXr0djc43tU07aHFBf6DEUE%2BRY7%2FLZa9ObTrz5SvZPcrJ3T5Wct2gcm4CENJ1bp9UmSBGr024B087O5PyHEfJc5NSxyqFpPGjBFokBx0MvESCI6O9xeJqs60nBDZq1sOFkN2v7pBhKBKcWx%2FZo1shjswne9w6DZV77ajC9mqzEBjqkAX696W01VnXjg34eTqNTAfBvWB3P12U7ZsSlsqAHlnHGJ%2B67umkKod6jr1yQ6FWLMFKZJTe3nEvyRMh10j2udicZfpRfXcowW7eBWvqwbscQs5Jp63PwkDFgxa2i%2FR9SHBVv1%2Bfvvruhv1TWveS6aM1sqSB7DqcGJ6PTJ1uoCdc4BxnxBPchUzim24D6dP0RRqL6KLuRbac6YshFUihq7qKX3IwI&X-Amz-Signature=8616b81eeaf0724dd99e67d1033c96bb132c0d62185728af71222b4350866cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WMKVHV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuLgYfawoX55WFR7%2B1KogBkJuk9fjKVBQSm7%2FuQXO5TQIhAIGxXyUwjI3Voj8xY2FgF2NX1EsEqTg1iXcof6uHsbQLKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5GdYoqnsO4CfAfVYq3APQUNIL8YPfSVVO1VK0xeUw2SIQ%2BBqWjBNk4KWZoo0wTfJOp5JjmKPgk4X%2BUYtP6Y1YfusYvloDLWp63lqkQNC%2BkS%2FVjG4P71DubyRaqQXsC5rQVBR7cAjc8496HDTGl5%2FTzafEiFiK%2FN44lRUHjlSF%2Bm551BTwcrsNCDI7OTM5xBq%2BJNLuyy7OukDpnFaObtG4uiaUW6Na%2BTyQ%2BPae99enW1XPtCioiSuW0dhap7pThMqjKZ3%2FBHPnZosUHtah2Wa9BbBi%2Bukez3fdSqvZ6UXctMfH0ZfbILbaFr%2FrZEcNI7nk8f4AeJwVKW7Y0ojttrFPWosFQajLbCB5%2Fh2fLClpth62NpVloW1T%2BY83ASxVcGEWnsb0ATftlup9DqNbVC2quNlsrROrkeBj8BFyhOWgisFzaN4hzNzyJ7%2BSozw24JNApBhW1j2tNi7I6R4LwNuzmIQ5KDfooLU72siT21VbGlNXr0djc43tU07aHFBf6DEUE%2BRY7%2FLZa9ObTrz5SvZPcrJ3T5Wct2gcm4CENJ1bp9UmSBGr024B087O5PyHEfJc5NSxyqFpPGjBFokBx0MvESCI6O9xeJqs60nBDZq1sOFkN2v7pBhKBKcWx%2FZo1shjswne9w6DZV77ajC9mqzEBjqkAX696W01VnXjg34eTqNTAfBvWB3P12U7ZsSlsqAHlnHGJ%2B67umkKod6jr1yQ6FWLMFKZJTe3nEvyRMh10j2udicZfpRfXcowW7eBWvqwbscQs5Jp63PwkDFgxa2i%2FR9SHBVv1%2Bfvvruhv1TWveS6aM1sqSB7DqcGJ6PTJ1uoCdc4BxnxBPchUzim24D6dP0RRqL6KLuRbac6YshFUihq7qKX3IwI&X-Amz-Signature=ff3d4b6c9d708484c50958a55b2c90cc10d4a3045890c72fe0df3d224c31453c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WMKVHV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuLgYfawoX55WFR7%2B1KogBkJuk9fjKVBQSm7%2FuQXO5TQIhAIGxXyUwjI3Voj8xY2FgF2NX1EsEqTg1iXcof6uHsbQLKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5GdYoqnsO4CfAfVYq3APQUNIL8YPfSVVO1VK0xeUw2SIQ%2BBqWjBNk4KWZoo0wTfJOp5JjmKPgk4X%2BUYtP6Y1YfusYvloDLWp63lqkQNC%2BkS%2FVjG4P71DubyRaqQXsC5rQVBR7cAjc8496HDTGl5%2FTzafEiFiK%2FN44lRUHjlSF%2Bm551BTwcrsNCDI7OTM5xBq%2BJNLuyy7OukDpnFaObtG4uiaUW6Na%2BTyQ%2BPae99enW1XPtCioiSuW0dhap7pThMqjKZ3%2FBHPnZosUHtah2Wa9BbBi%2Bukez3fdSqvZ6UXctMfH0ZfbILbaFr%2FrZEcNI7nk8f4AeJwVKW7Y0ojttrFPWosFQajLbCB5%2Fh2fLClpth62NpVloW1T%2BY83ASxVcGEWnsb0ATftlup9DqNbVC2quNlsrROrkeBj8BFyhOWgisFzaN4hzNzyJ7%2BSozw24JNApBhW1j2tNi7I6R4LwNuzmIQ5KDfooLU72siT21VbGlNXr0djc43tU07aHFBf6DEUE%2BRY7%2FLZa9ObTrz5SvZPcrJ3T5Wct2gcm4CENJ1bp9UmSBGr024B087O5PyHEfJc5NSxyqFpPGjBFokBx0MvESCI6O9xeJqs60nBDZq1sOFkN2v7pBhKBKcWx%2FZo1shjswne9w6DZV77ajC9mqzEBjqkAX696W01VnXjg34eTqNTAfBvWB3P12U7ZsSlsqAHlnHGJ%2B67umkKod6jr1yQ6FWLMFKZJTe3nEvyRMh10j2udicZfpRfXcowW7eBWvqwbscQs5Jp63PwkDFgxa2i%2FR9SHBVv1%2Bfvvruhv1TWveS6aM1sqSB7DqcGJ6PTJ1uoCdc4BxnxBPchUzim24D6dP0RRqL6KLuRbac6YshFUihq7qKX3IwI&X-Amz-Signature=e455d365bc539fb6956c91a4c5f61a3ca46825065d7c424dc11a491b14347dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
