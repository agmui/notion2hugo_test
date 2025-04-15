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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT6LQQE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbJ7DhdB0oXv7LzfhCx6L04z%2BeAIPzQKTK0%2BnRC12mwAiBgsl1MvzLtbCZmO9OZvCw2joIxtbil%2F6gKNxuUDSgkRyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMg82KWouq191tfY6RKtwDG4DLq5Z3qD9L0CFX%2FNuxlb6gaKp8cL4IgYDE8xsH23fGGyPOfs3fvKqW5xhYUkampdmjTQs2bpO6ClZSskOw0m21I7XqUuWJQOb9bXNHZ6MWTdj7BF6jZFA%2BydKUBNfRqpzoTqZef3wMtXYFndLeK%2BaX4J5t3gveCC5lbHCDJB5sx0%2BxriVhzQFD%2FQDM%2BOOmOFWPKRwLDg3PiR1y%2BGZihFWvizXdXniS3L2uQCPDnR9b5Ou48yBS992VRocMHqsSTL82qfjfhK0pVeIQ%2B1xJiBlhbJqyCaKegBnyoy4Lc%2BFSbeNwKg4S6%2FcamVQJtjxL5kze9HHILhaIEIRmCev6Czg80ca4DiiChfLK4kK85XwW8n9gjjBCOzTlT3aM7ycUSMmCd5lXDbgpV%2FjTz%2B8jm%2BJGeNKdthbQS8RlgwfUpVyaqRkafkATVZTTlTZlk5bV%2F9Kj2pzGH7p%2BhtumlS%2BuzSaWqn%2FZb%2BB50%2BWAUcTrJRWmiPZhJxIqK7JutzDhRWCywt%2BAsfGpfWaz48yVnrrUszypmO3PKgTVfMOG3fGVphHie5KyO6XDdA%2F3eOBbfalDZsJfb36BWuPfY5Cm5PRwzDE6tHwV3RGlL4Q1d1RafF7G5m1cXQ%2FGJwVxZrYwpdD3vwY6pgHtkpLzbePfqMdaJfmDCW9ce5LKrb%2FJvv37yHcv%2F2WJYWJZVnPueS39Ex3Wq3H17YFwA7rOIc6oKzZ9WY5wroAEluZVlu7BkxHh%2B4FV6FrluQ4wwt2ThwO7FzS5wxyGEm5%2F0SGEp%2BsY%2Bql97mzXvh8O7cngIS7s2BcnKQrbFYF%2BoR1MQN2SM7zcjR88pmmnKj6xKS%2Bmu6GEHgR9tlxGv6nqpY1VtNK%2B&X-Amz-Signature=99c9a8de17faca8d2cebbf752b1fbd3d30294c9e22d73ce6a5f296cd8908b503&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT6LQQE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbJ7DhdB0oXv7LzfhCx6L04z%2BeAIPzQKTK0%2BnRC12mwAiBgsl1MvzLtbCZmO9OZvCw2joIxtbil%2F6gKNxuUDSgkRyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMg82KWouq191tfY6RKtwDG4DLq5Z3qD9L0CFX%2FNuxlb6gaKp8cL4IgYDE8xsH23fGGyPOfs3fvKqW5xhYUkampdmjTQs2bpO6ClZSskOw0m21I7XqUuWJQOb9bXNHZ6MWTdj7BF6jZFA%2BydKUBNfRqpzoTqZef3wMtXYFndLeK%2BaX4J5t3gveCC5lbHCDJB5sx0%2BxriVhzQFD%2FQDM%2BOOmOFWPKRwLDg3PiR1y%2BGZihFWvizXdXniS3L2uQCPDnR9b5Ou48yBS992VRocMHqsSTL82qfjfhK0pVeIQ%2B1xJiBlhbJqyCaKegBnyoy4Lc%2BFSbeNwKg4S6%2FcamVQJtjxL5kze9HHILhaIEIRmCev6Czg80ca4DiiChfLK4kK85XwW8n9gjjBCOzTlT3aM7ycUSMmCd5lXDbgpV%2FjTz%2B8jm%2BJGeNKdthbQS8RlgwfUpVyaqRkafkATVZTTlTZlk5bV%2F9Kj2pzGH7p%2BhtumlS%2BuzSaWqn%2FZb%2BB50%2BWAUcTrJRWmiPZhJxIqK7JutzDhRWCywt%2BAsfGpfWaz48yVnrrUszypmO3PKgTVfMOG3fGVphHie5KyO6XDdA%2F3eOBbfalDZsJfb36BWuPfY5Cm5PRwzDE6tHwV3RGlL4Q1d1RafF7G5m1cXQ%2FGJwVxZrYwpdD3vwY6pgHtkpLzbePfqMdaJfmDCW9ce5LKrb%2FJvv37yHcv%2F2WJYWJZVnPueS39Ex3Wq3H17YFwA7rOIc6oKzZ9WY5wroAEluZVlu7BkxHh%2B4FV6FrluQ4wwt2ThwO7FzS5wxyGEm5%2F0SGEp%2BsY%2Bql97mzXvh8O7cngIS7s2BcnKQrbFYF%2BoR1MQN2SM7zcjR88pmmnKj6xKS%2Bmu6GEHgR9tlxGv6nqpY1VtNK%2B&X-Amz-Signature=a182ebb9e0f4dcd141c5496132f0b273a8982bff389d20e13c188bc1a6cf95d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT6LQQE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbJ7DhdB0oXv7LzfhCx6L04z%2BeAIPzQKTK0%2BnRC12mwAiBgsl1MvzLtbCZmO9OZvCw2joIxtbil%2F6gKNxuUDSgkRyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMg82KWouq191tfY6RKtwDG4DLq5Z3qD9L0CFX%2FNuxlb6gaKp8cL4IgYDE8xsH23fGGyPOfs3fvKqW5xhYUkampdmjTQs2bpO6ClZSskOw0m21I7XqUuWJQOb9bXNHZ6MWTdj7BF6jZFA%2BydKUBNfRqpzoTqZef3wMtXYFndLeK%2BaX4J5t3gveCC5lbHCDJB5sx0%2BxriVhzQFD%2FQDM%2BOOmOFWPKRwLDg3PiR1y%2BGZihFWvizXdXniS3L2uQCPDnR9b5Ou48yBS992VRocMHqsSTL82qfjfhK0pVeIQ%2B1xJiBlhbJqyCaKegBnyoy4Lc%2BFSbeNwKg4S6%2FcamVQJtjxL5kze9HHILhaIEIRmCev6Czg80ca4DiiChfLK4kK85XwW8n9gjjBCOzTlT3aM7ycUSMmCd5lXDbgpV%2FjTz%2B8jm%2BJGeNKdthbQS8RlgwfUpVyaqRkafkATVZTTlTZlk5bV%2F9Kj2pzGH7p%2BhtumlS%2BuzSaWqn%2FZb%2BB50%2BWAUcTrJRWmiPZhJxIqK7JutzDhRWCywt%2BAsfGpfWaz48yVnrrUszypmO3PKgTVfMOG3fGVphHie5KyO6XDdA%2F3eOBbfalDZsJfb36BWuPfY5Cm5PRwzDE6tHwV3RGlL4Q1d1RafF7G5m1cXQ%2FGJwVxZrYwpdD3vwY6pgHtkpLzbePfqMdaJfmDCW9ce5LKrb%2FJvv37yHcv%2F2WJYWJZVnPueS39Ex3Wq3H17YFwA7rOIc6oKzZ9WY5wroAEluZVlu7BkxHh%2B4FV6FrluQ4wwt2ThwO7FzS5wxyGEm5%2F0SGEp%2BsY%2Bql97mzXvh8O7cngIS7s2BcnKQrbFYF%2BoR1MQN2SM7zcjR88pmmnKj6xKS%2Bmu6GEHgR9tlxGv6nqpY1VtNK%2B&X-Amz-Signature=69cac110fa6092de0c12bf6e6aa7591ba60ba2a8d5ba737d4ed785418e5f616a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
