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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGPAJXA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYkgyoaL6uneCwEW1vRREaLy%2Byd3A6s%2F72P5%2FwcWIUHQIhAK%2BkBUrJIxXYegixjvYi2j%2FMwwQZMW5eAIv6q5Q%2FUVWGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTrJAt3T2V4x7lTrMq3AOsuYATe7tWgjaoN2yAiA9r2vupdH5hsDtVRpWtAerqixvn4sGYJI8v%2BWHKoLaGscrWHIwNRlBTqJWBytv8IOf4FuUQZKYZLEgzr%2BKzSjvmdn5%2BPJ2%2B3e6uMnagQt1zbJ3xxbBfzpLMcozRy%2FzElDDy2sKtqjiDHQzRctiugu4JiI5kGTLE4VEVJIBUgd%2BQ%2BYJoyR%2FvdcU827%2FErYCJu0VeD%2Fsb4XvYPE8fAlMNs2VL5JU%2F06EhcC7BeVL%2FvPtoYum3OkV8k7zpjGogdQgygmFZzKbYCspw%2FWwjRnHan%2B7GUdyi%2FEZaw9d4BA0GvcGlpQW5YupVWYQjyuGXt0zWsS5no0yV3fl1%2FDgsOIvxJ5%2Fv8RfYdTiMv4tqaxuwaAhp%2BfjfFlrFu%2B%2BYJZgbz752%2Bn7dg0TYu%2FpbCwmXy7cWoIAZl9piw9z60oXMIXozeMsEa5msqWpWgnWNueoROYSpUQ4fBiUSiZDyE22%2BiWzTmqWZPoYPDwimdoCw933lRCy%2FSPGwhvZkVsuOriGEJ3BaAE03ntchFr2Ffff%2Bffi0MeWpfCBCU0UAl5gf2v5G5WnSwBvbDbcMqOQioxMdbojjOqDipToVysLUHl9rE%2FEkOx0LrCOxTssG5884hoDTnTCDh8m%2BBjqkAQmeEsixJ4iSNf090KrODPNGnKPK%2BZG1PrLwmtZ0yqzCtMEvVcZSeE%2BDYXkxxcTheaTsac05MADHthWizOpDsnCkvMgninbpGK%2FJ9H8XPRNnfi0lXuhGQhm1%2Fj2BZWgJ5FOpG7gPzOThMVLEolje%2FgHaGSd1EMcahUKhhV4jx1miYmXpn34v5GL05JOyeNrJnBIJNheASyX%2BkUAQwNBOHqX8ybAd&X-Amz-Signature=9aabc8f4b0942065757b88f28f31f59524ee2ecde9cee42e7a32cc14ef326edd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGPAJXA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYkgyoaL6uneCwEW1vRREaLy%2Byd3A6s%2F72P5%2FwcWIUHQIhAK%2BkBUrJIxXYegixjvYi2j%2FMwwQZMW5eAIv6q5Q%2FUVWGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTrJAt3T2V4x7lTrMq3AOsuYATe7tWgjaoN2yAiA9r2vupdH5hsDtVRpWtAerqixvn4sGYJI8v%2BWHKoLaGscrWHIwNRlBTqJWBytv8IOf4FuUQZKYZLEgzr%2BKzSjvmdn5%2BPJ2%2B3e6uMnagQt1zbJ3xxbBfzpLMcozRy%2FzElDDy2sKtqjiDHQzRctiugu4JiI5kGTLE4VEVJIBUgd%2BQ%2BYJoyR%2FvdcU827%2FErYCJu0VeD%2Fsb4XvYPE8fAlMNs2VL5JU%2F06EhcC7BeVL%2FvPtoYum3OkV8k7zpjGogdQgygmFZzKbYCspw%2FWwjRnHan%2B7GUdyi%2FEZaw9d4BA0GvcGlpQW5YupVWYQjyuGXt0zWsS5no0yV3fl1%2FDgsOIvxJ5%2Fv8RfYdTiMv4tqaxuwaAhp%2BfjfFlrFu%2B%2BYJZgbz752%2Bn7dg0TYu%2FpbCwmXy7cWoIAZl9piw9z60oXMIXozeMsEa5msqWpWgnWNueoROYSpUQ4fBiUSiZDyE22%2BiWzTmqWZPoYPDwimdoCw933lRCy%2FSPGwhvZkVsuOriGEJ3BaAE03ntchFr2Ffff%2Bffi0MeWpfCBCU0UAl5gf2v5G5WnSwBvbDbcMqOQioxMdbojjOqDipToVysLUHl9rE%2FEkOx0LrCOxTssG5884hoDTnTCDh8m%2BBjqkAQmeEsixJ4iSNf090KrODPNGnKPK%2BZG1PrLwmtZ0yqzCtMEvVcZSeE%2BDYXkxxcTheaTsac05MADHthWizOpDsnCkvMgninbpGK%2FJ9H8XPRNnfi0lXuhGQhm1%2Fj2BZWgJ5FOpG7gPzOThMVLEolje%2FgHaGSd1EMcahUKhhV4jx1miYmXpn34v5GL05JOyeNrJnBIJNheASyX%2BkUAQwNBOHqX8ybAd&X-Amz-Signature=0bf2c28a5a7a5a0f9784ba31760850aa506ce62e21e29738c7704c159909dd0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FGPAJXA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYkgyoaL6uneCwEW1vRREaLy%2Byd3A6s%2F72P5%2FwcWIUHQIhAK%2BkBUrJIxXYegixjvYi2j%2FMwwQZMW5eAIv6q5Q%2FUVWGKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTrJAt3T2V4x7lTrMq3AOsuYATe7tWgjaoN2yAiA9r2vupdH5hsDtVRpWtAerqixvn4sGYJI8v%2BWHKoLaGscrWHIwNRlBTqJWBytv8IOf4FuUQZKYZLEgzr%2BKzSjvmdn5%2BPJ2%2B3e6uMnagQt1zbJ3xxbBfzpLMcozRy%2FzElDDy2sKtqjiDHQzRctiugu4JiI5kGTLE4VEVJIBUgd%2BQ%2BYJoyR%2FvdcU827%2FErYCJu0VeD%2Fsb4XvYPE8fAlMNs2VL5JU%2F06EhcC7BeVL%2FvPtoYum3OkV8k7zpjGogdQgygmFZzKbYCspw%2FWwjRnHan%2B7GUdyi%2FEZaw9d4BA0GvcGlpQW5YupVWYQjyuGXt0zWsS5no0yV3fl1%2FDgsOIvxJ5%2Fv8RfYdTiMv4tqaxuwaAhp%2BfjfFlrFu%2B%2BYJZgbz752%2Bn7dg0TYu%2FpbCwmXy7cWoIAZl9piw9z60oXMIXozeMsEa5msqWpWgnWNueoROYSpUQ4fBiUSiZDyE22%2BiWzTmqWZPoYPDwimdoCw933lRCy%2FSPGwhvZkVsuOriGEJ3BaAE03ntchFr2Ffff%2Bffi0MeWpfCBCU0UAl5gf2v5G5WnSwBvbDbcMqOQioxMdbojjOqDipToVysLUHl9rE%2FEkOx0LrCOxTssG5884hoDTnTCDh8m%2BBjqkAQmeEsixJ4iSNf090KrODPNGnKPK%2BZG1PrLwmtZ0yqzCtMEvVcZSeE%2BDYXkxxcTheaTsac05MADHthWizOpDsnCkvMgninbpGK%2FJ9H8XPRNnfi0lXuhGQhm1%2Fj2BZWgJ5FOpG7gPzOThMVLEolje%2FgHaGSd1EMcahUKhhV4jx1miYmXpn34v5GL05JOyeNrJnBIJNheASyX%2BkUAQwNBOHqX8ybAd&X-Amz-Signature=4f9f2d87dcb88bbf44e1066015d255ba14c54d5eae0b8aa67f62b9777c3df6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
