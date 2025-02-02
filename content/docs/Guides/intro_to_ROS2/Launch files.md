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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGNYSP5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCC0TYS0ysLiZh4Hi1wDNulNT%2Fk5VSV4fD37mbL7Gy3AiBgAyuywpkUJZHlI37LVHK8AlhOLq%2Biqz2c9mb4gqN8PSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSDa%2FBwvIMGrggP9KtwDaVUOsLgb2IuAxcBogLD0nrWLE1dM97aJThxrMEyVL%2FrRyAlv7Y%2BaVpxDRQrqBLqX4ALoje7nZTf2T48fJTAGZ8sXG0vkx7fql30WAxNoMXdvv1V8ZlwWHb6COROPpSQfQ0rrVIXOI9LeSyUBJgV1iuQaDgTDBFgFbvCABhxzjerhijo0mMf4KsxA5KLmAol3FVWLCwHppEeE%2FIGlsqwzldP3JjcLfOM0YfyJgZO%2BVCCiWh7pzBzkGaCeBQg86ff3v96EK%2Fla4SYWD2UqD9w3R6cHQCN1N70hkWfoRoVgDXNYCVJJBsrTJYOAEZgiqfDaSE31zrEnzIp6XUSIoKZbmFUEDAh5aX9FX1ETNVxGXw0G7xQ1k3fI8uoqspDPSuKht4ZGVZLKwHN5AsMhfh1YbjVKycmu0ogTovKRA197zw%2BtwBbkcmzCxTba2C9QZoB4jJzd1ps5HqrAO2o0jWYVVo%2FmI2ZFsls2CoaeHw1PCyYiwBChkrSEnsfFRmBrpVnDMpdRsyEhP5t5vxtKdQKUSZSV4GBrwU7JLK59yUeyg9%2BbdjeVDelFsNy6MVxoH%2FSePN3vpqbbdtkb0eRYcK2n2gN0SCqss990QT%2Fj4f598XjAx58WJlavgYKxbqgwjr79vAY6pgHtuifWoZt5roMq0BoH6CWdrJSGtwNLHgauQI42t353mVAvODHMv17jt6su5FmcxeoHbjabaaxp9A%2Fxdej9qKdeaSPSY5LZbHUWfrbhICZ%2BqM%2Bb%2FzEHVdRYtsARJgcLAEx8aby0%2FZOjD2tBwtGJBTFuH3fMUIpfQaiKP52dVlTwB2REfWO86YlwrAxqmq43o8rXBZ%2FB1z3HNNR%2FYoXJZKf7XuWoqAKK&X-Amz-Signature=7b59df194e76e1a8c2a3ffaadcc47009b6695b67d0afeba9a1f6bdfbbea7c0db&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGNYSP5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCC0TYS0ysLiZh4Hi1wDNulNT%2Fk5VSV4fD37mbL7Gy3AiBgAyuywpkUJZHlI37LVHK8AlhOLq%2Biqz2c9mb4gqN8PSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSDa%2FBwvIMGrggP9KtwDaVUOsLgb2IuAxcBogLD0nrWLE1dM97aJThxrMEyVL%2FrRyAlv7Y%2BaVpxDRQrqBLqX4ALoje7nZTf2T48fJTAGZ8sXG0vkx7fql30WAxNoMXdvv1V8ZlwWHb6COROPpSQfQ0rrVIXOI9LeSyUBJgV1iuQaDgTDBFgFbvCABhxzjerhijo0mMf4KsxA5KLmAol3FVWLCwHppEeE%2FIGlsqwzldP3JjcLfOM0YfyJgZO%2BVCCiWh7pzBzkGaCeBQg86ff3v96EK%2Fla4SYWD2UqD9w3R6cHQCN1N70hkWfoRoVgDXNYCVJJBsrTJYOAEZgiqfDaSE31zrEnzIp6XUSIoKZbmFUEDAh5aX9FX1ETNVxGXw0G7xQ1k3fI8uoqspDPSuKht4ZGVZLKwHN5AsMhfh1YbjVKycmu0ogTovKRA197zw%2BtwBbkcmzCxTba2C9QZoB4jJzd1ps5HqrAO2o0jWYVVo%2FmI2ZFsls2CoaeHw1PCyYiwBChkrSEnsfFRmBrpVnDMpdRsyEhP5t5vxtKdQKUSZSV4GBrwU7JLK59yUeyg9%2BbdjeVDelFsNy6MVxoH%2FSePN3vpqbbdtkb0eRYcK2n2gN0SCqss990QT%2Fj4f598XjAx58WJlavgYKxbqgwjr79vAY6pgHtuifWoZt5roMq0BoH6CWdrJSGtwNLHgauQI42t353mVAvODHMv17jt6su5FmcxeoHbjabaaxp9A%2Fxdej9qKdeaSPSY5LZbHUWfrbhICZ%2BqM%2Bb%2FzEHVdRYtsARJgcLAEx8aby0%2FZOjD2tBwtGJBTFuH3fMUIpfQaiKP52dVlTwB2REfWO86YlwrAxqmq43o8rXBZ%2FB1z3HNNR%2FYoXJZKf7XuWoqAKK&X-Amz-Signature=cdfcb0edb9e2ddddee34c3c62dd9c02c79ee3527405d9f46683b98b8e6c0f0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOGNYSP5%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T160710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCC0TYS0ysLiZh4Hi1wDNulNT%2Fk5VSV4fD37mbL7Gy3AiBgAyuywpkUJZHlI37LVHK8AlhOLq%2Biqz2c9mb4gqN8PSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FSDa%2FBwvIMGrggP9KtwDaVUOsLgb2IuAxcBogLD0nrWLE1dM97aJThxrMEyVL%2FrRyAlv7Y%2BaVpxDRQrqBLqX4ALoje7nZTf2T48fJTAGZ8sXG0vkx7fql30WAxNoMXdvv1V8ZlwWHb6COROPpSQfQ0rrVIXOI9LeSyUBJgV1iuQaDgTDBFgFbvCABhxzjerhijo0mMf4KsxA5KLmAol3FVWLCwHppEeE%2FIGlsqwzldP3JjcLfOM0YfyJgZO%2BVCCiWh7pzBzkGaCeBQg86ff3v96EK%2Fla4SYWD2UqD9w3R6cHQCN1N70hkWfoRoVgDXNYCVJJBsrTJYOAEZgiqfDaSE31zrEnzIp6XUSIoKZbmFUEDAh5aX9FX1ETNVxGXw0G7xQ1k3fI8uoqspDPSuKht4ZGVZLKwHN5AsMhfh1YbjVKycmu0ogTovKRA197zw%2BtwBbkcmzCxTba2C9QZoB4jJzd1ps5HqrAO2o0jWYVVo%2FmI2ZFsls2CoaeHw1PCyYiwBChkrSEnsfFRmBrpVnDMpdRsyEhP5t5vxtKdQKUSZSV4GBrwU7JLK59yUeyg9%2BbdjeVDelFsNy6MVxoH%2FSePN3vpqbbdtkb0eRYcK2n2gN0SCqss990QT%2Fj4f598XjAx58WJlavgYKxbqgwjr79vAY6pgHtuifWoZt5roMq0BoH6CWdrJSGtwNLHgauQI42t353mVAvODHMv17jt6su5FmcxeoHbjabaaxp9A%2Fxdej9qKdeaSPSY5LZbHUWfrbhICZ%2BqM%2Bb%2FzEHVdRYtsARJgcLAEx8aby0%2FZOjD2tBwtGJBTFuH3fMUIpfQaiKP52dVlTwB2REfWO86YlwrAxqmq43o8rXBZ%2FB1z3HNNR%2FYoXJZKf7XuWoqAKK&X-Amz-Signature=4c5a172418e3f92bd058b9e8aefa390bc605e03645aa4eb733853555efd17f27&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
