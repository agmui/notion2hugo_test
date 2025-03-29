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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSQEQZJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDwYpVFa6NjEvvsQ%2Fsrpu%2BCgUohxcvCZhLXrnQqKfGOIQIgSJYGKAOoyvSiNyM4ykALJReL8LCwXkMMRhvM9Peumo4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBTH4RvfpdYt85TFwCrcAyXY%2BXYv43w%2FPZcT2JsGikrxcgXdt72tWy7EF5oMLDTMkmvDqkTXpjTonCN4One0l0f9gqyOvmAeEnjIaK4EsMEeo3liNqRlnsCEOAFmME2%2F9Z532JsTZ8uAK12F56stHECuorpU6JbhR%2BxiP6wpJvZTSGyeqBqB66c4KRUUd%2BkeUnZGKtBNezFjIVRmYoFUAqv8Mto1v5KAcLWOR0eVCclY68VtjKjOPIGCruqfthGF8IGcobiKWYkK%2BARnfTVVoy6qI0XhhfbH2LQLleblRuaBM15UOReMCwQRgyThhJdrjsQtBkp7I67Kz96dg0fASvGb6H%2B9cYK3hEWNhij7BQBewJgllMnDHw8uz3FEdgGyit%2Bgw4yisizNsr0OsOV0MWbDcZ2l4LQKWwW2DbXpBVNjyBj0qZTKXYMwGEeyRJUE4ugzKM%2BwQHLXlPhuVmuzIsb7H9%2FHMaP826RNpTHhY6FsJp%2FiPyXfrRwe6lTdtktO66QIWm2ENQ1lVR%2BFGhipUolQCbwzcoQaT3su5iM3EJRAswLeGpa%2FllbISh4xhpVyPh9JYsbJ76jQ3HSyf3qef%2Fvs%2F3HfYBFgM%2BeL%2FjjfZ9%2BXVk8Y6WDRcs%2Fqnk%2BZD6GhUWi0AdDqNnnvKW87MK7inr8GOqUBd7tKdvGk7ZpCQbV%2F56K4B4zVLxv%2Bb0Su%2Bu4ndZFlTXabDg3tup7i8HVHaYi0cf%2F1DTFuWkXGVCOghJjdrojKxfxyk7%2FMN9qxsJwaRB91oXNH4vlG3GXpGHmOyKqtLauojtneFi4GHg0T29Kb5XRB8ipCPctl7wboydaiJkWtFydtvpuUpXm1xjcFoMs8ieOF%2BVI41rmW56eeu%2FSv5i1DGKhPzvn0&X-Amz-Signature=999dec47ca54ba76766ae3ce82f87a1ab0ee7b392fbe7a017bac14480083366b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSQEQZJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDwYpVFa6NjEvvsQ%2Fsrpu%2BCgUohxcvCZhLXrnQqKfGOIQIgSJYGKAOoyvSiNyM4ykALJReL8LCwXkMMRhvM9Peumo4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBTH4RvfpdYt85TFwCrcAyXY%2BXYv43w%2FPZcT2JsGikrxcgXdt72tWy7EF5oMLDTMkmvDqkTXpjTonCN4One0l0f9gqyOvmAeEnjIaK4EsMEeo3liNqRlnsCEOAFmME2%2F9Z532JsTZ8uAK12F56stHECuorpU6JbhR%2BxiP6wpJvZTSGyeqBqB66c4KRUUd%2BkeUnZGKtBNezFjIVRmYoFUAqv8Mto1v5KAcLWOR0eVCclY68VtjKjOPIGCruqfthGF8IGcobiKWYkK%2BARnfTVVoy6qI0XhhfbH2LQLleblRuaBM15UOReMCwQRgyThhJdrjsQtBkp7I67Kz96dg0fASvGb6H%2B9cYK3hEWNhij7BQBewJgllMnDHw8uz3FEdgGyit%2Bgw4yisizNsr0OsOV0MWbDcZ2l4LQKWwW2DbXpBVNjyBj0qZTKXYMwGEeyRJUE4ugzKM%2BwQHLXlPhuVmuzIsb7H9%2FHMaP826RNpTHhY6FsJp%2FiPyXfrRwe6lTdtktO66QIWm2ENQ1lVR%2BFGhipUolQCbwzcoQaT3su5iM3EJRAswLeGpa%2FllbISh4xhpVyPh9JYsbJ76jQ3HSyf3qef%2Fvs%2F3HfYBFgM%2BeL%2FjjfZ9%2BXVk8Y6WDRcs%2Fqnk%2BZD6GhUWi0AdDqNnnvKW87MK7inr8GOqUBd7tKdvGk7ZpCQbV%2F56K4B4zVLxv%2Bb0Su%2Bu4ndZFlTXabDg3tup7i8HVHaYi0cf%2F1DTFuWkXGVCOghJjdrojKxfxyk7%2FMN9qxsJwaRB91oXNH4vlG3GXpGHmOyKqtLauojtneFi4GHg0T29Kb5XRB8ipCPctl7wboydaiJkWtFydtvpuUpXm1xjcFoMs8ieOF%2BVI41rmW56eeu%2FSv5i1DGKhPzvn0&X-Amz-Signature=18af7c4edc385357c6220bb3d8a33952f2265477655283d1e9552d0880c121a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSQEQZJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDwYpVFa6NjEvvsQ%2Fsrpu%2BCgUohxcvCZhLXrnQqKfGOIQIgSJYGKAOoyvSiNyM4ykALJReL8LCwXkMMRhvM9Peumo4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBTH4RvfpdYt85TFwCrcAyXY%2BXYv43w%2FPZcT2JsGikrxcgXdt72tWy7EF5oMLDTMkmvDqkTXpjTonCN4One0l0f9gqyOvmAeEnjIaK4EsMEeo3liNqRlnsCEOAFmME2%2F9Z532JsTZ8uAK12F56stHECuorpU6JbhR%2BxiP6wpJvZTSGyeqBqB66c4KRUUd%2BkeUnZGKtBNezFjIVRmYoFUAqv8Mto1v5KAcLWOR0eVCclY68VtjKjOPIGCruqfthGF8IGcobiKWYkK%2BARnfTVVoy6qI0XhhfbH2LQLleblRuaBM15UOReMCwQRgyThhJdrjsQtBkp7I67Kz96dg0fASvGb6H%2B9cYK3hEWNhij7BQBewJgllMnDHw8uz3FEdgGyit%2Bgw4yisizNsr0OsOV0MWbDcZ2l4LQKWwW2DbXpBVNjyBj0qZTKXYMwGEeyRJUE4ugzKM%2BwQHLXlPhuVmuzIsb7H9%2FHMaP826RNpTHhY6FsJp%2FiPyXfrRwe6lTdtktO66QIWm2ENQ1lVR%2BFGhipUolQCbwzcoQaT3su5iM3EJRAswLeGpa%2FllbISh4xhpVyPh9JYsbJ76jQ3HSyf3qef%2Fvs%2F3HfYBFgM%2BeL%2FjjfZ9%2BXVk8Y6WDRcs%2Fqnk%2BZD6GhUWi0AdDqNnnvKW87MK7inr8GOqUBd7tKdvGk7ZpCQbV%2F56K4B4zVLxv%2Bb0Su%2Bu4ndZFlTXabDg3tup7i8HVHaYi0cf%2F1DTFuWkXGVCOghJjdrojKxfxyk7%2FMN9qxsJwaRB91oXNH4vlG3GXpGHmOyKqtLauojtneFi4GHg0T29Kb5XRB8ipCPctl7wboydaiJkWtFydtvpuUpXm1xjcFoMs8ieOF%2BVI41rmW56eeu%2FSv5i1DGKhPzvn0&X-Amz-Signature=09b46c44f3bd2e239bffff98dbb162e18e7d71a9ab001f021ab1e28ce3b80c34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
