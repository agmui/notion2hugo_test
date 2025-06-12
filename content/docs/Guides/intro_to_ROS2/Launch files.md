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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEZT63G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCrR%2FOq%2B%2FCj0RBQBR3ZedXp7LNg4263ALuDOJydPhp63gIgaFec9KJNU9t%2Fe6Hpq%2BjnuZ4ZCIYUUwfqpCu5Ow4fKj4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDG7SCEdkZADBE3IECrcA%2FPsdzO4NbXSovcKbY1bMPX2SGLBZgsuwdkkQbxFK3COygiGyE%2B2ZNedP8knduIeaxs24P3JgFh%2BUg44r37xiUpSuGpBUxMMc1aHGnBeVikaCJ52HL1DEGM1NJL4kAkmfhz2dcWsksSO3WxQcqcj%2FsAO2Vb%2FmmYX%2F4n8fBNGJATG2IB4cHJuSWDvxsWrlBeau3CB6h5x1JiCd0fQL2t6T3CQ80pGM1yeFpB%2FLuSFcxrTCySkT07FJYPin%2BCgcstu3ky7yJUSkZ%2F8mDrxXI3duDdlldU%2Fkj9F76PK%2B4q75qWVn%2FPyX6HKHwoIxK3UQIese8WzZ1KjtajLCs%2FB5bPwtlVKCD8%2FQeSSF4MCWbqZy%2FbiF6PK%2FIxyngvYsrSA0nQRQ5dDbkSMNlz3GQeEjwM0xg5m1tkTstNsB%2B0UhSb%2FsYO3Ut8%2BIZwLyLl6q%2B9gQmxS3W6qgu85XaYFQoWlD3Cv619mErEDKvfM64LK67so9%2F0v%2BBFBs27TUOsbtTJVDqrTvlWcYSDJbj%2BtNi9Oyt7GDugRNmDYrWjHmPzSvSl4cg6d0MvhF%2B2rMJmjSgvBN2XOIIemYolSgbWqxyzN7VYM%2FjMJ2HEBZSrA%2BVmPPf8moxEDFr78mGcXQ7HPlaVOML%2BJqsIGOqUBY2xYyhi0Exqob7aeiEAsrKDshBqpH6wOQRcJc2WrABE5jpPTZuP%2BxguUxmsplXt%2FP2BLujHnxro0t9fBwJWz%2Bro09xsC5XzcbjT8%2F%2BiXG2x1oAeY584tsoSh817Nqm9WjMDu4JZRgzPvYlopt15Pk7FBvlsI2pENZpS4kb4zKxsBQ54ahKfmcZv8EIbor2NNUevg%2FZoh%2Fb4Ik%2Bzm93mgZo3actJz&X-Amz-Signature=f1563699abb3a4c04f910ab9a936416e5a264af542acff17d6e503cbf54c49d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEZT63G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCrR%2FOq%2B%2FCj0RBQBR3ZedXp7LNg4263ALuDOJydPhp63gIgaFec9KJNU9t%2Fe6Hpq%2BjnuZ4ZCIYUUwfqpCu5Ow4fKj4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDG7SCEdkZADBE3IECrcA%2FPsdzO4NbXSovcKbY1bMPX2SGLBZgsuwdkkQbxFK3COygiGyE%2B2ZNedP8knduIeaxs24P3JgFh%2BUg44r37xiUpSuGpBUxMMc1aHGnBeVikaCJ52HL1DEGM1NJL4kAkmfhz2dcWsksSO3WxQcqcj%2FsAO2Vb%2FmmYX%2F4n8fBNGJATG2IB4cHJuSWDvxsWrlBeau3CB6h5x1JiCd0fQL2t6T3CQ80pGM1yeFpB%2FLuSFcxrTCySkT07FJYPin%2BCgcstu3ky7yJUSkZ%2F8mDrxXI3duDdlldU%2Fkj9F76PK%2B4q75qWVn%2FPyX6HKHwoIxK3UQIese8WzZ1KjtajLCs%2FB5bPwtlVKCD8%2FQeSSF4MCWbqZy%2FbiF6PK%2FIxyngvYsrSA0nQRQ5dDbkSMNlz3GQeEjwM0xg5m1tkTstNsB%2B0UhSb%2FsYO3Ut8%2BIZwLyLl6q%2B9gQmxS3W6qgu85XaYFQoWlD3Cv619mErEDKvfM64LK67so9%2F0v%2BBFBs27TUOsbtTJVDqrTvlWcYSDJbj%2BtNi9Oyt7GDugRNmDYrWjHmPzSvSl4cg6d0MvhF%2B2rMJmjSgvBN2XOIIemYolSgbWqxyzN7VYM%2FjMJ2HEBZSrA%2BVmPPf8moxEDFr78mGcXQ7HPlaVOML%2BJqsIGOqUBY2xYyhi0Exqob7aeiEAsrKDshBqpH6wOQRcJc2WrABE5jpPTZuP%2BxguUxmsplXt%2FP2BLujHnxro0t9fBwJWz%2Bro09xsC5XzcbjT8%2F%2BiXG2x1oAeY584tsoSh817Nqm9WjMDu4JZRgzPvYlopt15Pk7FBvlsI2pENZpS4kb4zKxsBQ54ahKfmcZv8EIbor2NNUevg%2FZoh%2Fb4Ik%2Bzm93mgZo3actJz&X-Amz-Signature=9c4a8c476505b28eae323f53493f3dcce8aa5a7582b9fc1602e7ac0f2a757489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEZT63G%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCrR%2FOq%2B%2FCj0RBQBR3ZedXp7LNg4263ALuDOJydPhp63gIgaFec9KJNU9t%2Fe6Hpq%2BjnuZ4ZCIYUUwfqpCu5Ow4fKj4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDG7SCEdkZADBE3IECrcA%2FPsdzO4NbXSovcKbY1bMPX2SGLBZgsuwdkkQbxFK3COygiGyE%2B2ZNedP8knduIeaxs24P3JgFh%2BUg44r37xiUpSuGpBUxMMc1aHGnBeVikaCJ52HL1DEGM1NJL4kAkmfhz2dcWsksSO3WxQcqcj%2FsAO2Vb%2FmmYX%2F4n8fBNGJATG2IB4cHJuSWDvxsWrlBeau3CB6h5x1JiCd0fQL2t6T3CQ80pGM1yeFpB%2FLuSFcxrTCySkT07FJYPin%2BCgcstu3ky7yJUSkZ%2F8mDrxXI3duDdlldU%2Fkj9F76PK%2B4q75qWVn%2FPyX6HKHwoIxK3UQIese8WzZ1KjtajLCs%2FB5bPwtlVKCD8%2FQeSSF4MCWbqZy%2FbiF6PK%2FIxyngvYsrSA0nQRQ5dDbkSMNlz3GQeEjwM0xg5m1tkTstNsB%2B0UhSb%2FsYO3Ut8%2BIZwLyLl6q%2B9gQmxS3W6qgu85XaYFQoWlD3Cv619mErEDKvfM64LK67so9%2F0v%2BBFBs27TUOsbtTJVDqrTvlWcYSDJbj%2BtNi9Oyt7GDugRNmDYrWjHmPzSvSl4cg6d0MvhF%2B2rMJmjSgvBN2XOIIemYolSgbWqxyzN7VYM%2FjMJ2HEBZSrA%2BVmPPf8moxEDFr78mGcXQ7HPlaVOML%2BJqsIGOqUBY2xYyhi0Exqob7aeiEAsrKDshBqpH6wOQRcJc2WrABE5jpPTZuP%2BxguUxmsplXt%2FP2BLujHnxro0t9fBwJWz%2Bro09xsC5XzcbjT8%2F%2BiXG2x1oAeY584tsoSh817Nqm9WjMDu4JZRgzPvYlopt15Pk7FBvlsI2pENZpS4kb4zKxsBQ54ahKfmcZv8EIbor2NNUevg%2FZoh%2Fb4Ik%2Bzm93mgZo3actJz&X-Amz-Signature=332d3437b9e1335047c904edf5fd5cc97414aa69df3efd0d82c9fcd05930cf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
