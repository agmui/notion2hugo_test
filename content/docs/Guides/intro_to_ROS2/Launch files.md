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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINZ5DBW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7L39KSBPvW0ikug3a0LUwRRMvjeIFE6U4NPZrkTUr0AiBGXldt5Zj2rqkoVlaPRUxQG4mI9xpT6O6COAoGcVA08Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMcz1r9lLuEg1T2DKeKtwDQEPlL7iIY0SbiN72FLRwlBp8q3zin7rcCstN5SHnGuG2%2Bywh%2Fw41mKAbgIVOhCOEvV1D8kTut8WdH%2BCcpvFYhWh6zrgCy0eQoOWjQqIb1k%2FVgNCcHt4CHe4G3oDR%2BHZ8MGZk6oWDLDTQYRFN2D8Q6kGWCrf7iFfEvfM%2Fv4%2BjwihQmITB9IqlZCwI1NQy2ZSZ2sKXSrnBb3KhTDWuAQojD6Zo%2BSgLp9bolscDlw1T%2F6oputC5lGDqlQ9DCZm0lgt3uWwKTWrmBiJJUxJrhMtnvkCLkOVeqPy7aU%2BvTeVomPnIWvoAdDY8aNDMLcIO2aAPfswwsIPK%2BmEpA%2FeKAwCcJ%2FrA51%2FlilXOzsFqSe84sfYzdt92%2BUR2bhSLnF%2Ft55vMAb8Y2ATN3ZANAKgAQcjEx7kpO59jijhhMSuSwvVGf0RsRVeUkRO7JSYwK7KASgWIgTw8t7O%2BnqBhEoGkqQbrYQeKwZmD7PCXPBsBq0UAP06wjnnis5c%2FFwtehFBmX2awjRxbruNJQdhHB4uxd2VcApPiVH4MIRdtJZG5dxGNF1ZF%2BkfLA2PjDE%2BaW%2B9nFIrSVamijx1B%2ForV4lNmyrr6%2B2dMtYbVJycPpqwRp2j1Gz7tJheO%2FlC0%2BsJneXQwzIaLwgY6pgFno8ZKCa3ru1Veb2QyfXdKWVHthbQiSOacrTVGJULZ3aceByVi3CDvSlHSUyqRk2mwOkJ%2FLEVh5Q2ilJoILFMIP2wLUFXErrrtHQcCfwHIgYUJ0UuWj2zMnrsJy%2FQlu%2FPu76lT6O7i5qVssFCcqLtA%2FIINmGVLbfVKqu%2BjHlILTAW2DOW2kph7VbR%2Bc8aTIItuZReapssTkJhvQy114pWJeKgHrzHs&X-Amz-Signature=d40e56b5615014c7c625d060a75733e219e84c9eb568a993908dc053843b526d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINZ5DBW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7L39KSBPvW0ikug3a0LUwRRMvjeIFE6U4NPZrkTUr0AiBGXldt5Zj2rqkoVlaPRUxQG4mI9xpT6O6COAoGcVA08Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMcz1r9lLuEg1T2DKeKtwDQEPlL7iIY0SbiN72FLRwlBp8q3zin7rcCstN5SHnGuG2%2Bywh%2Fw41mKAbgIVOhCOEvV1D8kTut8WdH%2BCcpvFYhWh6zrgCy0eQoOWjQqIb1k%2FVgNCcHt4CHe4G3oDR%2BHZ8MGZk6oWDLDTQYRFN2D8Q6kGWCrf7iFfEvfM%2Fv4%2BjwihQmITB9IqlZCwI1NQy2ZSZ2sKXSrnBb3KhTDWuAQojD6Zo%2BSgLp9bolscDlw1T%2F6oputC5lGDqlQ9DCZm0lgt3uWwKTWrmBiJJUxJrhMtnvkCLkOVeqPy7aU%2BvTeVomPnIWvoAdDY8aNDMLcIO2aAPfswwsIPK%2BmEpA%2FeKAwCcJ%2FrA51%2FlilXOzsFqSe84sfYzdt92%2BUR2bhSLnF%2Ft55vMAb8Y2ATN3ZANAKgAQcjEx7kpO59jijhhMSuSwvVGf0RsRVeUkRO7JSYwK7KASgWIgTw8t7O%2BnqBhEoGkqQbrYQeKwZmD7PCXPBsBq0UAP06wjnnis5c%2FFwtehFBmX2awjRxbruNJQdhHB4uxd2VcApPiVH4MIRdtJZG5dxGNF1ZF%2BkfLA2PjDE%2BaW%2B9nFIrSVamijx1B%2ForV4lNmyrr6%2B2dMtYbVJycPpqwRp2j1Gz7tJheO%2FlC0%2BsJneXQwzIaLwgY6pgFno8ZKCa3ru1Veb2QyfXdKWVHthbQiSOacrTVGJULZ3aceByVi3CDvSlHSUyqRk2mwOkJ%2FLEVh5Q2ilJoILFMIP2wLUFXErrrtHQcCfwHIgYUJ0UuWj2zMnrsJy%2FQlu%2FPu76lT6O7i5qVssFCcqLtA%2FIINmGVLbfVKqu%2BjHlILTAW2DOW2kph7VbR%2Bc8aTIItuZReapssTkJhvQy114pWJeKgHrzHs&X-Amz-Signature=0719639a8b29e0f5a30985d92f24ed8233c4dd8c92d772a285cb0934e507292c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINZ5DBW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7L39KSBPvW0ikug3a0LUwRRMvjeIFE6U4NPZrkTUr0AiBGXldt5Zj2rqkoVlaPRUxQG4mI9xpT6O6COAoGcVA08Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMcz1r9lLuEg1T2DKeKtwDQEPlL7iIY0SbiN72FLRwlBp8q3zin7rcCstN5SHnGuG2%2Bywh%2Fw41mKAbgIVOhCOEvV1D8kTut8WdH%2BCcpvFYhWh6zrgCy0eQoOWjQqIb1k%2FVgNCcHt4CHe4G3oDR%2BHZ8MGZk6oWDLDTQYRFN2D8Q6kGWCrf7iFfEvfM%2Fv4%2BjwihQmITB9IqlZCwI1NQy2ZSZ2sKXSrnBb3KhTDWuAQojD6Zo%2BSgLp9bolscDlw1T%2F6oputC5lGDqlQ9DCZm0lgt3uWwKTWrmBiJJUxJrhMtnvkCLkOVeqPy7aU%2BvTeVomPnIWvoAdDY8aNDMLcIO2aAPfswwsIPK%2BmEpA%2FeKAwCcJ%2FrA51%2FlilXOzsFqSe84sfYzdt92%2BUR2bhSLnF%2Ft55vMAb8Y2ATN3ZANAKgAQcjEx7kpO59jijhhMSuSwvVGf0RsRVeUkRO7JSYwK7KASgWIgTw8t7O%2BnqBhEoGkqQbrYQeKwZmD7PCXPBsBq0UAP06wjnnis5c%2FFwtehFBmX2awjRxbruNJQdhHB4uxd2VcApPiVH4MIRdtJZG5dxGNF1ZF%2BkfLA2PjDE%2BaW%2B9nFIrSVamijx1B%2ForV4lNmyrr6%2B2dMtYbVJycPpqwRp2j1Gz7tJheO%2FlC0%2BsJneXQwzIaLwgY6pgFno8ZKCa3ru1Veb2QyfXdKWVHthbQiSOacrTVGJULZ3aceByVi3CDvSlHSUyqRk2mwOkJ%2FLEVh5Q2ilJoILFMIP2wLUFXErrrtHQcCfwHIgYUJ0UuWj2zMnrsJy%2FQlu%2FPu76lT6O7i5qVssFCcqLtA%2FIINmGVLbfVKqu%2BjHlILTAW2DOW2kph7VbR%2Bc8aTIItuZReapssTkJhvQy114pWJeKgHrzHs&X-Amz-Signature=ede045263f58af960a316c1dbd36d7ffbccf594105972a94a6ce61a040eedda1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
