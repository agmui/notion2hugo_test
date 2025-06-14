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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWRFWU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG4ap8KFNxSmgU4mWzsKH2wpLH04TU2pY2DPEC8guPSiAiEAkoakawFB3%2FNPDjy6Mr3l18LawEpIkFOJHbvUcf8%2FQAEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDCd9rF%2B66KNNsc9QWircA0E7X6AdD6nWqhw2KSysujqdZji7%2BfP4IzLDI6y2ltigfB12nW5mXVGvEs%2BtwTOfAbDBW6G41urs6aGrUGHvX%2B4AeszBmdDJEOfBPlp6bsYJ4aOOD%2BgwddzbgVP62RLzcE%2BlUNbQXF%2BZhXkZCWdYWknTAhuGwVb5QRu%2BK%2BOvvXW%2BIeGCqZme8L3Hp9np%2B7B7jbdPgko4Q%2FrMvluXrFgbvboPbHEFn8VzUvfe7MGgPYLuleSzFA1In2f1dULMjHSDZU3mVtc2jRcyMmH73bFXketOMXrTBhORQkMtdzkGZJJEIOo8MCAmRB8qFy1%2BEaTOPPOvRr1bJJRv3jAJOHHNlDRKUmx%2BNt%2BV%2FzkASlJqBzWdok8wwXXrC%2FjIPST4yKB0vCb7LzM018W%2F2gzhJpEpUFBWVtpmZfyOVA22l9ltvQ3CaVhJpO%2F85lgWMzudDZOfJdDOAhPJoXhvS1XByR1pX6IBUmpIsHWpU5lGdVsA759UZ5eFvx9VR22vJv754RAqB8CLcsWIqt2w3Wgi9quag%2BOvivzhOr2tvuQaHjKlzPviA1nkL9xIItIN0BPcT9UmzkuGv06%2BWcByP5DTPz1IgXZpeywbZ9wf2H8R5gykgHNfe90lyaIChYlpDNYnMM7ss8IGOqUB7mtu7SbXkQUot0x8uNJj6WX4NquMg%2FFkHXlcYaGcb27fRZLYfXL1Ee4KbtZURB1qHPtZTwT3kLTNOBqO9hI%2BADMPG79UY%2F8J1vs6d9cHna%2Brv9VH9ZKxoXFEFzcJTOfvfB9aorTKM%2B7guLAJ4jF%2FNcqBoLVmb%2BXh5DqdphtS9iWnfp1nihXfLIqfJoPEjd0O%2FZvfVnmEZzLsbJu5LtRQs%2FbKjahS&X-Amz-Signature=07020e82d08aed1c575e998b03db62f104dcd94f1cc2ea4e6b992dbf2dfccfc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWRFWU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG4ap8KFNxSmgU4mWzsKH2wpLH04TU2pY2DPEC8guPSiAiEAkoakawFB3%2FNPDjy6Mr3l18LawEpIkFOJHbvUcf8%2FQAEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDCd9rF%2B66KNNsc9QWircA0E7X6AdD6nWqhw2KSysujqdZji7%2BfP4IzLDI6y2ltigfB12nW5mXVGvEs%2BtwTOfAbDBW6G41urs6aGrUGHvX%2B4AeszBmdDJEOfBPlp6bsYJ4aOOD%2BgwddzbgVP62RLzcE%2BlUNbQXF%2BZhXkZCWdYWknTAhuGwVb5QRu%2BK%2BOvvXW%2BIeGCqZme8L3Hp9np%2B7B7jbdPgko4Q%2FrMvluXrFgbvboPbHEFn8VzUvfe7MGgPYLuleSzFA1In2f1dULMjHSDZU3mVtc2jRcyMmH73bFXketOMXrTBhORQkMtdzkGZJJEIOo8MCAmRB8qFy1%2BEaTOPPOvRr1bJJRv3jAJOHHNlDRKUmx%2BNt%2BV%2FzkASlJqBzWdok8wwXXrC%2FjIPST4yKB0vCb7LzM018W%2F2gzhJpEpUFBWVtpmZfyOVA22l9ltvQ3CaVhJpO%2F85lgWMzudDZOfJdDOAhPJoXhvS1XByR1pX6IBUmpIsHWpU5lGdVsA759UZ5eFvx9VR22vJv754RAqB8CLcsWIqt2w3Wgi9quag%2BOvivzhOr2tvuQaHjKlzPviA1nkL9xIItIN0BPcT9UmzkuGv06%2BWcByP5DTPz1IgXZpeywbZ9wf2H8R5gykgHNfe90lyaIChYlpDNYnMM7ss8IGOqUB7mtu7SbXkQUot0x8uNJj6WX4NquMg%2FFkHXlcYaGcb27fRZLYfXL1Ee4KbtZURB1qHPtZTwT3kLTNOBqO9hI%2BADMPG79UY%2F8J1vs6d9cHna%2Brv9VH9ZKxoXFEFzcJTOfvfB9aorTKM%2B7guLAJ4jF%2FNcqBoLVmb%2BXh5DqdphtS9iWnfp1nihXfLIqfJoPEjd0O%2FZvfVnmEZzLsbJu5LtRQs%2FbKjahS&X-Amz-Signature=cdae8dfc6b4e4b2d4ad12c81ed5abcb98036156859e8949e6006f850acfd3ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MWRFWU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG4ap8KFNxSmgU4mWzsKH2wpLH04TU2pY2DPEC8guPSiAiEAkoakawFB3%2FNPDjy6Mr3l18LawEpIkFOJHbvUcf8%2FQAEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDCd9rF%2B66KNNsc9QWircA0E7X6AdD6nWqhw2KSysujqdZji7%2BfP4IzLDI6y2ltigfB12nW5mXVGvEs%2BtwTOfAbDBW6G41urs6aGrUGHvX%2B4AeszBmdDJEOfBPlp6bsYJ4aOOD%2BgwddzbgVP62RLzcE%2BlUNbQXF%2BZhXkZCWdYWknTAhuGwVb5QRu%2BK%2BOvvXW%2BIeGCqZme8L3Hp9np%2B7B7jbdPgko4Q%2FrMvluXrFgbvboPbHEFn8VzUvfe7MGgPYLuleSzFA1In2f1dULMjHSDZU3mVtc2jRcyMmH73bFXketOMXrTBhORQkMtdzkGZJJEIOo8MCAmRB8qFy1%2BEaTOPPOvRr1bJJRv3jAJOHHNlDRKUmx%2BNt%2BV%2FzkASlJqBzWdok8wwXXrC%2FjIPST4yKB0vCb7LzM018W%2F2gzhJpEpUFBWVtpmZfyOVA22l9ltvQ3CaVhJpO%2F85lgWMzudDZOfJdDOAhPJoXhvS1XByR1pX6IBUmpIsHWpU5lGdVsA759UZ5eFvx9VR22vJv754RAqB8CLcsWIqt2w3Wgi9quag%2BOvivzhOr2tvuQaHjKlzPviA1nkL9xIItIN0BPcT9UmzkuGv06%2BWcByP5DTPz1IgXZpeywbZ9wf2H8R5gykgHNfe90lyaIChYlpDNYnMM7ss8IGOqUB7mtu7SbXkQUot0x8uNJj6WX4NquMg%2FFkHXlcYaGcb27fRZLYfXL1Ee4KbtZURB1qHPtZTwT3kLTNOBqO9hI%2BADMPG79UY%2F8J1vs6d9cHna%2Brv9VH9ZKxoXFEFzcJTOfvfB9aorTKM%2B7guLAJ4jF%2FNcqBoLVmb%2BXh5DqdphtS9iWnfp1nihXfLIqfJoPEjd0O%2FZvfVnmEZzLsbJu5LtRQs%2FbKjahS&X-Amz-Signature=db79f65ab56904c05ca68446c60cac165324a1fce1b9a9a73e158c4c5f29fff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
