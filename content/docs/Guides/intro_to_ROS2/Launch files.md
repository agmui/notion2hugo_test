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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2KEJ25E%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6lokrvsHaP%2FliB%2Bo8a6Folz59xF26pUCzu1uFzIyQIAiAQ3NDmhzkW8omk%2FK0%2FSoyq%2BwXpqoyKnVlrdDKJjxskWSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ1gk0wkiVc8EsZO3KtwDD6%2BjoRKmTWq9nd%2BnKVwwckg3m%2FwE4IjosDP%2BrWU3NBx6YmP1dZaSAeK%2B5C4yaUQTsBlUuSl8G%2BgAk4Am8K5ixoeZh4gHRP9mLcI0pzWjvW3F6sxYq%2BqZgyfSx9MHqAAJfeganugc4liXKgvezGO6dgVo7fzMHa1BJ96lH3sUa%2Bhl%2BkncKaXauJ0cllRahnAHApBP2om3n9vB7t%2FhPl3PlwfNoauYgvO4AB%2BOEnXKoeS%2FbCYSeI6fXNOFDJJRZKSd%2FCGo4JvMJoX%2BYB3GKUQ8I7ybQFkViuEQ%2Ff758cSN5c9ePv7Hrod5UlLMinvzyon9QnTWMVV6%2F9e5oH1DYFGeyIL%2BELPGuTjLwKddFNuneM7hOQKnOE1vYWmqhSGNKtZbeqG1RgGpLWTUXC3GO8UzZzAoRWoqMEP3IxEso48rlGtjM%2FLLkMAQRc1KRJobsx18PPlNE1uisBJ2%2B66JCY0F7v8S2UepT0Xs3OEvfgkKByy2IQYx48tIwTxtJ8mawu%2BYuFeSR1H1to3%2BLONqz4zKU%2BKiMol9V5UIxO7SJjkQaOzadCDD8evJPA36ucHkefQYqNy1c8EEFfQjHdu%2FuaERo%2F49%2FV0i4GRv4veABezWkDjJ9pGgO1onBZTGakUw17PqwQY6pgHO2Yedm9jUj8DY1CqAgx1QCdKcWTCbhGAh%2F6GiFL5FwepCYS2wi06G0ydOisGrhPMzw8cdOFOsOLn8vrWWWQH2o2D5lQat05M6OHWvxWM4xqiR1MSoGE1TMy%2Byp9KZKmTxM9NzkSP3Yq9huSKwgTM1iIOVMHNtIKPmC%2Fzvvi%2FUhJ8VL9G%2FK2SsBbrzdQ1x6plpx7mHDqSM2F%2BvazlYiBOVUTHL%2FSiH&X-Amz-Signature=7d4f9e07e981bc8110d9d04a80d23874c014a8030ef055bceeb056bc1b434ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2KEJ25E%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6lokrvsHaP%2FliB%2Bo8a6Folz59xF26pUCzu1uFzIyQIAiAQ3NDmhzkW8omk%2FK0%2FSoyq%2BwXpqoyKnVlrdDKJjxskWSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ1gk0wkiVc8EsZO3KtwDD6%2BjoRKmTWq9nd%2BnKVwwckg3m%2FwE4IjosDP%2BrWU3NBx6YmP1dZaSAeK%2B5C4yaUQTsBlUuSl8G%2BgAk4Am8K5ixoeZh4gHRP9mLcI0pzWjvW3F6sxYq%2BqZgyfSx9MHqAAJfeganugc4liXKgvezGO6dgVo7fzMHa1BJ96lH3sUa%2Bhl%2BkncKaXauJ0cllRahnAHApBP2om3n9vB7t%2FhPl3PlwfNoauYgvO4AB%2BOEnXKoeS%2FbCYSeI6fXNOFDJJRZKSd%2FCGo4JvMJoX%2BYB3GKUQ8I7ybQFkViuEQ%2Ff758cSN5c9ePv7Hrod5UlLMinvzyon9QnTWMVV6%2F9e5oH1DYFGeyIL%2BELPGuTjLwKddFNuneM7hOQKnOE1vYWmqhSGNKtZbeqG1RgGpLWTUXC3GO8UzZzAoRWoqMEP3IxEso48rlGtjM%2FLLkMAQRc1KRJobsx18PPlNE1uisBJ2%2B66JCY0F7v8S2UepT0Xs3OEvfgkKByy2IQYx48tIwTxtJ8mawu%2BYuFeSR1H1to3%2BLONqz4zKU%2BKiMol9V5UIxO7SJjkQaOzadCDD8evJPA36ucHkefQYqNy1c8EEFfQjHdu%2FuaERo%2F49%2FV0i4GRv4veABezWkDjJ9pGgO1onBZTGakUw17PqwQY6pgHO2Yedm9jUj8DY1CqAgx1QCdKcWTCbhGAh%2F6GiFL5FwepCYS2wi06G0ydOisGrhPMzw8cdOFOsOLn8vrWWWQH2o2D5lQat05M6OHWvxWM4xqiR1MSoGE1TMy%2Byp9KZKmTxM9NzkSP3Yq9huSKwgTM1iIOVMHNtIKPmC%2Fzvvi%2FUhJ8VL9G%2FK2SsBbrzdQ1x6plpx7mHDqSM2F%2BvazlYiBOVUTHL%2FSiH&X-Amz-Signature=4ff38a9939b0c629cadf41d27027514ef201903dcf2bcb795adae6c6dc4f8a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2KEJ25E%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6lokrvsHaP%2FliB%2Bo8a6Folz59xF26pUCzu1uFzIyQIAiAQ3NDmhzkW8omk%2FK0%2FSoyq%2BwXpqoyKnVlrdDKJjxskWSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ1gk0wkiVc8EsZO3KtwDD6%2BjoRKmTWq9nd%2BnKVwwckg3m%2FwE4IjosDP%2BrWU3NBx6YmP1dZaSAeK%2B5C4yaUQTsBlUuSl8G%2BgAk4Am8K5ixoeZh4gHRP9mLcI0pzWjvW3F6sxYq%2BqZgyfSx9MHqAAJfeganugc4liXKgvezGO6dgVo7fzMHa1BJ96lH3sUa%2Bhl%2BkncKaXauJ0cllRahnAHApBP2om3n9vB7t%2FhPl3PlwfNoauYgvO4AB%2BOEnXKoeS%2FbCYSeI6fXNOFDJJRZKSd%2FCGo4JvMJoX%2BYB3GKUQ8I7ybQFkViuEQ%2Ff758cSN5c9ePv7Hrod5UlLMinvzyon9QnTWMVV6%2F9e5oH1DYFGeyIL%2BELPGuTjLwKddFNuneM7hOQKnOE1vYWmqhSGNKtZbeqG1RgGpLWTUXC3GO8UzZzAoRWoqMEP3IxEso48rlGtjM%2FLLkMAQRc1KRJobsx18PPlNE1uisBJ2%2B66JCY0F7v8S2UepT0Xs3OEvfgkKByy2IQYx48tIwTxtJ8mawu%2BYuFeSR1H1to3%2BLONqz4zKU%2BKiMol9V5UIxO7SJjkQaOzadCDD8evJPA36ucHkefQYqNy1c8EEFfQjHdu%2FuaERo%2F49%2FV0i4GRv4veABezWkDjJ9pGgO1onBZTGakUw17PqwQY6pgHO2Yedm9jUj8DY1CqAgx1QCdKcWTCbhGAh%2F6GiFL5FwepCYS2wi06G0ydOisGrhPMzw8cdOFOsOLn8vrWWWQH2o2D5lQat05M6OHWvxWM4xqiR1MSoGE1TMy%2Byp9KZKmTxM9NzkSP3Yq9huSKwgTM1iIOVMHNtIKPmC%2Fzvvi%2FUhJ8VL9G%2FK2SsBbrzdQ1x6plpx7mHDqSM2F%2BvazlYiBOVUTHL%2FSiH&X-Amz-Signature=1043c8c68b13c3d6fab6d5faceeb9d3e760c9e3bd91c06f740f174605fddef5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
