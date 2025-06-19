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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMZBE76%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsjfwIpm5P5V3x3tt04BKAQ8mQg0ypuKGUSWmoZPfgTgIgQJjXEM8NnOoPLPjKvduKWpmzMhXQq0l%2BdvZQjj1st6sqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6n9H2V6H%2FlEUv5EircA5CpB68cVmzd0YltFmy9LefkQIVC3NQgwF8ExVaKZAqhDoLPE2%2Fyw5raH9KgySd23ogeQogrJqA6XA70eN3NJQlgIq9pt5nUcifvYWgDWdOCNHYHvr7SYAyMU5wfUpJjZ0iCfbhX7lrJYlwtGZSYDO5JBWI9Kq2umORuLe0S0TjtQzAs2woa40ISZneGixjDSmIX4SguKTxFs3VT2%2B7M5j5WAuLG9WMLbfBKTLOmh3blg2%2Bpa%2FJilZITQHamB1BQmlB4GrfiVkvpudD8ViWWnmb0kRtRutQkV6%2B6p0wIRBcbpWiZ95XSz%2F%2BsgLBN0wjxnL8rPGBEdyLsFRtdv2nn6l2JvIMs1fky%2BkNWMaqn8C7iqqjnkQC%2FxgpHopv0Dvu8Ju%2F8aFQS89LFa%2FQHfMiF95ewHcOFL1s8TKkfSu9%2B0KLcPZjnyEwVbW%2Ba88XcqXRMcoxAif0J9cv52giyTjfDKK4BGiZDfvoK4JxC%2BS%2B7CvHsR7R2azbbnAiJ8va1dOR1dqqMmq7uqaOBk%2Bq5atVXuBHSp8hOr1VYDhzB1ycZjLYWao3MwG2bdxEQgC8kRcI4fUP89pIfwFr2oFe169mPh9%2BrJIHO5CjCC7gY8eyRCeYDQbN7NThwEwO74hnvMPne0MIGOqUBHOL3nxkyzfp3m%2BZV5OTCf3E1JRsi06LGxDNu%2BnLsUMkocV%2F0r33FZCnNZvHJPq694xBOvBC7%2BgCi%2F7I2KJLtmAhwEv9M7WO%2FrBkHbv%2BYO1GeCHA3X%2BU3hZuNbpTZEDA57mXKj%2Fv9LcYvSn0elTwDyt1f40atGPAsChPKe7aYJrmCr%2BkOIcgNGonWTRwMl7ReceTcSr%2F3BupkEOBBe5aqhNkvLONQ&X-Amz-Signature=69dc91f2b18041efd5d3bbd38ee66c776e58b35e5f99de34d3c8a5918075448b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMZBE76%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsjfwIpm5P5V3x3tt04BKAQ8mQg0ypuKGUSWmoZPfgTgIgQJjXEM8NnOoPLPjKvduKWpmzMhXQq0l%2BdvZQjj1st6sqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6n9H2V6H%2FlEUv5EircA5CpB68cVmzd0YltFmy9LefkQIVC3NQgwF8ExVaKZAqhDoLPE2%2Fyw5raH9KgySd23ogeQogrJqA6XA70eN3NJQlgIq9pt5nUcifvYWgDWdOCNHYHvr7SYAyMU5wfUpJjZ0iCfbhX7lrJYlwtGZSYDO5JBWI9Kq2umORuLe0S0TjtQzAs2woa40ISZneGixjDSmIX4SguKTxFs3VT2%2B7M5j5WAuLG9WMLbfBKTLOmh3blg2%2Bpa%2FJilZITQHamB1BQmlB4GrfiVkvpudD8ViWWnmb0kRtRutQkV6%2B6p0wIRBcbpWiZ95XSz%2F%2BsgLBN0wjxnL8rPGBEdyLsFRtdv2nn6l2JvIMs1fky%2BkNWMaqn8C7iqqjnkQC%2FxgpHopv0Dvu8Ju%2F8aFQS89LFa%2FQHfMiF95ewHcOFL1s8TKkfSu9%2B0KLcPZjnyEwVbW%2Ba88XcqXRMcoxAif0J9cv52giyTjfDKK4BGiZDfvoK4JxC%2BS%2B7CvHsR7R2azbbnAiJ8va1dOR1dqqMmq7uqaOBk%2Bq5atVXuBHSp8hOr1VYDhzB1ycZjLYWao3MwG2bdxEQgC8kRcI4fUP89pIfwFr2oFe169mPh9%2BrJIHO5CjCC7gY8eyRCeYDQbN7NThwEwO74hnvMPne0MIGOqUBHOL3nxkyzfp3m%2BZV5OTCf3E1JRsi06LGxDNu%2BnLsUMkocV%2F0r33FZCnNZvHJPq694xBOvBC7%2BgCi%2F7I2KJLtmAhwEv9M7WO%2FrBkHbv%2BYO1GeCHA3X%2BU3hZuNbpTZEDA57mXKj%2Fv9LcYvSn0elTwDyt1f40atGPAsChPKe7aYJrmCr%2BkOIcgNGonWTRwMl7ReceTcSr%2F3BupkEOBBe5aqhNkvLONQ&X-Amz-Signature=b765d971a8adbfabad037aaca97074ad7cfc6039717bee360b9e93693ca4aa60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLMZBE76%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsjfwIpm5P5V3x3tt04BKAQ8mQg0ypuKGUSWmoZPfgTgIgQJjXEM8NnOoPLPjKvduKWpmzMhXQq0l%2BdvZQjj1st6sqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6n9H2V6H%2FlEUv5EircA5CpB68cVmzd0YltFmy9LefkQIVC3NQgwF8ExVaKZAqhDoLPE2%2Fyw5raH9KgySd23ogeQogrJqA6XA70eN3NJQlgIq9pt5nUcifvYWgDWdOCNHYHvr7SYAyMU5wfUpJjZ0iCfbhX7lrJYlwtGZSYDO5JBWI9Kq2umORuLe0S0TjtQzAs2woa40ISZneGixjDSmIX4SguKTxFs3VT2%2B7M5j5WAuLG9WMLbfBKTLOmh3blg2%2Bpa%2FJilZITQHamB1BQmlB4GrfiVkvpudD8ViWWnmb0kRtRutQkV6%2B6p0wIRBcbpWiZ95XSz%2F%2BsgLBN0wjxnL8rPGBEdyLsFRtdv2nn6l2JvIMs1fky%2BkNWMaqn8C7iqqjnkQC%2FxgpHopv0Dvu8Ju%2F8aFQS89LFa%2FQHfMiF95ewHcOFL1s8TKkfSu9%2B0KLcPZjnyEwVbW%2Ba88XcqXRMcoxAif0J9cv52giyTjfDKK4BGiZDfvoK4JxC%2BS%2B7CvHsR7R2azbbnAiJ8va1dOR1dqqMmq7uqaOBk%2Bq5atVXuBHSp8hOr1VYDhzB1ycZjLYWao3MwG2bdxEQgC8kRcI4fUP89pIfwFr2oFe169mPh9%2BrJIHO5CjCC7gY8eyRCeYDQbN7NThwEwO74hnvMPne0MIGOqUBHOL3nxkyzfp3m%2BZV5OTCf3E1JRsi06LGxDNu%2BnLsUMkocV%2F0r33FZCnNZvHJPq694xBOvBC7%2BgCi%2F7I2KJLtmAhwEv9M7WO%2FrBkHbv%2BYO1GeCHA3X%2BU3hZuNbpTZEDA57mXKj%2Fv9LcYvSn0elTwDyt1f40atGPAsChPKe7aYJrmCr%2BkOIcgNGonWTRwMl7ReceTcSr%2F3BupkEOBBe5aqhNkvLONQ&X-Amz-Signature=fd398d4bc652ef70a412512febde67ea66ed6609aed76e1535a1ee3a451d6fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
