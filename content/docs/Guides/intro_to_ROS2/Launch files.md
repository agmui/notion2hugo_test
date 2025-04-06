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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWCQ3ES%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbwVDe5k7hqN3wwYZqjBr28MbFWkroLres9aiVoHxgAwIgE0UGteHk6aVbD8E0cIkXnZpUlkU%2BpsB0G0t8ktbTtDgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPGWe1uTl%2BScPjg%2FRircA9%2BX7Ffy01x3IxleoPjLW80NfIENK3uLH%2FuOLqtDRrz6UmJm88%2FAhBHD6FW%2B1ZOQWEOfxuTKd%2FcWDPvk1WrOnaA3%2BXyofYAb43POdkKckVUbuZrNyN1Kxe89EDqIZYOSu9ZfKvZX18dh7gxnbWDFSngOPPu1K68Y%2Bckxbr%2FC2q3nqaAWdaVEKqdTlCX9qq%2B%2BL1EIaFZpQ6yr6reOeSwaXwnPoi9BCQorAPL5e5%2F2yYNjnvzo5nJ1JCkU%2BL37rTBgcThsM4SEs%2FRoeCSXsdZvpYDx8ujML9YwsP73N6VNE9Ol1j7uJdELnGSegmKlQXmmsFzvv9Z2V065%2BSzxf66oWLn%2BLEaiTOjg5FVEBMUb3rRsuqHJTAGVm2I0B%2FlCmDc0qCrXNuu6ql91BV2nszx0NgG%2BYxvxQXsQ9RD3DgoQjeSZjX8MAsMFHzIB49%2BugWhPC4kiKKBmp%2F74uGevMtZsIJARsmI1Kba7GzviBi1v8FPA4NXBqCCTc7wz2UR%2FqWIhlIT0qbMDiPj%2FQOXGIWCw%2FmvFDZXuPmgC0iHYI5a2sNqRRgLdN6UqQ%2BZ%2Fm2NIuMTADa85S3gmAzBfcNS34KNCLPXQbJj30SPcm4Iw%2F9ziLapkr04H3HCA4gHZEI%2B1MOf%2FyL8GOqUBr50PFujI0NjAwMxx%2BBqRRw9ItmOwQaexKUggNhYdysj4HUeNo3WzRUbjaeOVsY1ZUBWOF7jcN%2B1%2Bn7o4jNTWFKgzPGcy9E2OWYclEf2ZK%2F0DyWeekUwrazkT0b1VJAGC%2Btt7w6Pqn1RAXJSGzy6aINW49DHN9sLvUTyPvKWICe7%2BSk5cv1UzT%2FBFLyRt3YFL88Fgw2rxv9EzJnH6T4%2FqHpCPBoz%2F&X-Amz-Signature=ab26b12da38cf6139ac2127364b61087839387c0353532d4b23a5a584d3d9257&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWCQ3ES%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbwVDe5k7hqN3wwYZqjBr28MbFWkroLres9aiVoHxgAwIgE0UGteHk6aVbD8E0cIkXnZpUlkU%2BpsB0G0t8ktbTtDgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPGWe1uTl%2BScPjg%2FRircA9%2BX7Ffy01x3IxleoPjLW80NfIENK3uLH%2FuOLqtDRrz6UmJm88%2FAhBHD6FW%2B1ZOQWEOfxuTKd%2FcWDPvk1WrOnaA3%2BXyofYAb43POdkKckVUbuZrNyN1Kxe89EDqIZYOSu9ZfKvZX18dh7gxnbWDFSngOPPu1K68Y%2Bckxbr%2FC2q3nqaAWdaVEKqdTlCX9qq%2B%2BL1EIaFZpQ6yr6reOeSwaXwnPoi9BCQorAPL5e5%2F2yYNjnvzo5nJ1JCkU%2BL37rTBgcThsM4SEs%2FRoeCSXsdZvpYDx8ujML9YwsP73N6VNE9Ol1j7uJdELnGSegmKlQXmmsFzvv9Z2V065%2BSzxf66oWLn%2BLEaiTOjg5FVEBMUb3rRsuqHJTAGVm2I0B%2FlCmDc0qCrXNuu6ql91BV2nszx0NgG%2BYxvxQXsQ9RD3DgoQjeSZjX8MAsMFHzIB49%2BugWhPC4kiKKBmp%2F74uGevMtZsIJARsmI1Kba7GzviBi1v8FPA4NXBqCCTc7wz2UR%2FqWIhlIT0qbMDiPj%2FQOXGIWCw%2FmvFDZXuPmgC0iHYI5a2sNqRRgLdN6UqQ%2BZ%2Fm2NIuMTADa85S3gmAzBfcNS34KNCLPXQbJj30SPcm4Iw%2F9ziLapkr04H3HCA4gHZEI%2B1MOf%2FyL8GOqUBr50PFujI0NjAwMxx%2BBqRRw9ItmOwQaexKUggNhYdysj4HUeNo3WzRUbjaeOVsY1ZUBWOF7jcN%2B1%2Bn7o4jNTWFKgzPGcy9E2OWYclEf2ZK%2F0DyWeekUwrazkT0b1VJAGC%2Btt7w6Pqn1RAXJSGzy6aINW49DHN9sLvUTyPvKWICe7%2BSk5cv1UzT%2FBFLyRt3YFL88Fgw2rxv9EzJnH6T4%2FqHpCPBoz%2F&X-Amz-Signature=63d48ca696edc502c29447b4a53b347a1b878e3213860272b964688fd0cbeae8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWCQ3ES%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbwVDe5k7hqN3wwYZqjBr28MbFWkroLres9aiVoHxgAwIgE0UGteHk6aVbD8E0cIkXnZpUlkU%2BpsB0G0t8ktbTtDgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPGWe1uTl%2BScPjg%2FRircA9%2BX7Ffy01x3IxleoPjLW80NfIENK3uLH%2FuOLqtDRrz6UmJm88%2FAhBHD6FW%2B1ZOQWEOfxuTKd%2FcWDPvk1WrOnaA3%2BXyofYAb43POdkKckVUbuZrNyN1Kxe89EDqIZYOSu9ZfKvZX18dh7gxnbWDFSngOPPu1K68Y%2Bckxbr%2FC2q3nqaAWdaVEKqdTlCX9qq%2B%2BL1EIaFZpQ6yr6reOeSwaXwnPoi9BCQorAPL5e5%2F2yYNjnvzo5nJ1JCkU%2BL37rTBgcThsM4SEs%2FRoeCSXsdZvpYDx8ujML9YwsP73N6VNE9Ol1j7uJdELnGSegmKlQXmmsFzvv9Z2V065%2BSzxf66oWLn%2BLEaiTOjg5FVEBMUb3rRsuqHJTAGVm2I0B%2FlCmDc0qCrXNuu6ql91BV2nszx0NgG%2BYxvxQXsQ9RD3DgoQjeSZjX8MAsMFHzIB49%2BugWhPC4kiKKBmp%2F74uGevMtZsIJARsmI1Kba7GzviBi1v8FPA4NXBqCCTc7wz2UR%2FqWIhlIT0qbMDiPj%2FQOXGIWCw%2FmvFDZXuPmgC0iHYI5a2sNqRRgLdN6UqQ%2BZ%2Fm2NIuMTADa85S3gmAzBfcNS34KNCLPXQbJj30SPcm4Iw%2F9ziLapkr04H3HCA4gHZEI%2B1MOf%2FyL8GOqUBr50PFujI0NjAwMxx%2BBqRRw9ItmOwQaexKUggNhYdysj4HUeNo3WzRUbjaeOVsY1ZUBWOF7jcN%2B1%2Bn7o4jNTWFKgzPGcy9E2OWYclEf2ZK%2F0DyWeekUwrazkT0b1VJAGC%2Btt7w6Pqn1RAXJSGzy6aINW49DHN9sLvUTyPvKWICe7%2BSk5cv1UzT%2FBFLyRt3YFL88Fgw2rxv9EzJnH6T4%2FqHpCPBoz%2F&X-Amz-Signature=68924e9b7edd0f823d55451fdc25f736d17af11fbb5ce7f633d755221c1923ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
