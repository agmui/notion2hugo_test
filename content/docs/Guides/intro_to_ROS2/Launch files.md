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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MW5TN6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDuyzQhDyzpIebcwhyjokgOz%2F5r05jymfjGJb%2FEIxiZwIgbSiK9yc5rEN9n4XF059JD%2FS6mbTWHwutZMLSWgnDquQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHl7yj1rfi9KHpiDCrcA6YDxc7MZ0GBL9oDbD2zqMVKCScoH7spRtulKSHuEq2rCmSXZMzKP6yj7Q0oHmpaf6v9PRtF6WUk26bHBe2dS4fWO5qw9D9WiL0Y%2FEXT88sAHRsKvMgqb9zAn8ZvEN%2FtXOLAUCMuN9gL8isnGqHJIawc1eufUfsDCdcoo9cQBLbh%2BPBMW7bdq1RcbnLASkc2ZsVa6XzepCYYUL25SP%2B7fadDWBxjncXzDulqSNPDywasny4VUEs8A0pzyKHwvsp8t5kNyLFhtN5B9P29YY9q5XeJETgp4YmmqYWzyH1A3%2FIsPPM1nvNLmjdTX0DZfpMdMBjdNG4gOzQHaX%2BZEnERyvAblGTlyIW7gM%2BWmGXHnbNZgT48haPuqV0TObn%2Bm%2B%2B%2Bt5vkgZvNsQvrfw3WtrWgVvmyRhI%2BxVgtbDJp%2FsSyC%2BSlGo0DvlFF9EnQqbi0rMXZzjK%2BOSzDBfEluwT9MWO0mwFsebxzKM1drJe2Y1pkqvl7EVeyhM9xCT8Lb3ubwzqHwY1ry7LxZPj7WwAtq%2B5pdcmM%2BqPT4KPyxKzJIuB1Bh%2BrhChDCJdyoH60VymCJOR24jZRxQ5Rz9R7FUQh%2FF%2B4hj%2Fs6I2%2F0cYUxgrdJOP%2B8Qq3b3b2OMUlMQIJ93ESMJuYtb0GOqUBZ5Gl%2FA0E684BGX9u3IVVnESYXJpfhbK4HJpw5hGiqc8ZU09gBWxhbg9Esz8AwThkGaNeYs2r7%2FlmGJlZdgbofOLZrfzgIcn0N1%2BiU1jHAlxWGCHMc0c7j0IjaohARG9cBJZ2VRG24YUafmzTj1OQs1CFQ7rrXNdOGPrufb3L1x3maTe6Nel%2BiDjq6xa%2BquC7FSGZJ%2BEu5L0wixyBG26ADDHYztkY&X-Amz-Signature=3a6ae9efdc20d75acd597f5388becb121d6208d029ef7ea048c28e9ce08a54ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MW5TN6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDuyzQhDyzpIebcwhyjokgOz%2F5r05jymfjGJb%2FEIxiZwIgbSiK9yc5rEN9n4XF059JD%2FS6mbTWHwutZMLSWgnDquQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHl7yj1rfi9KHpiDCrcA6YDxc7MZ0GBL9oDbD2zqMVKCScoH7spRtulKSHuEq2rCmSXZMzKP6yj7Q0oHmpaf6v9PRtF6WUk26bHBe2dS4fWO5qw9D9WiL0Y%2FEXT88sAHRsKvMgqb9zAn8ZvEN%2FtXOLAUCMuN9gL8isnGqHJIawc1eufUfsDCdcoo9cQBLbh%2BPBMW7bdq1RcbnLASkc2ZsVa6XzepCYYUL25SP%2B7fadDWBxjncXzDulqSNPDywasny4VUEs8A0pzyKHwvsp8t5kNyLFhtN5B9P29YY9q5XeJETgp4YmmqYWzyH1A3%2FIsPPM1nvNLmjdTX0DZfpMdMBjdNG4gOzQHaX%2BZEnERyvAblGTlyIW7gM%2BWmGXHnbNZgT48haPuqV0TObn%2Bm%2B%2B%2Bt5vkgZvNsQvrfw3WtrWgVvmyRhI%2BxVgtbDJp%2FsSyC%2BSlGo0DvlFF9EnQqbi0rMXZzjK%2BOSzDBfEluwT9MWO0mwFsebxzKM1drJe2Y1pkqvl7EVeyhM9xCT8Lb3ubwzqHwY1ry7LxZPj7WwAtq%2B5pdcmM%2BqPT4KPyxKzJIuB1Bh%2BrhChDCJdyoH60VymCJOR24jZRxQ5Rz9R7FUQh%2FF%2B4hj%2Fs6I2%2F0cYUxgrdJOP%2B8Qq3b3b2OMUlMQIJ93ESMJuYtb0GOqUBZ5Gl%2FA0E684BGX9u3IVVnESYXJpfhbK4HJpw5hGiqc8ZU09gBWxhbg9Esz8AwThkGaNeYs2r7%2FlmGJlZdgbofOLZrfzgIcn0N1%2BiU1jHAlxWGCHMc0c7j0IjaohARG9cBJZ2VRG24YUafmzTj1OQs1CFQ7rrXNdOGPrufb3L1x3maTe6Nel%2BiDjq6xa%2BquC7FSGZJ%2BEu5L0wixyBG26ADDHYztkY&X-Amz-Signature=f0f78c9377efb3dcf710a65b100abb7577c5e41785fa84e3f4f8ea688f5d7fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5MW5TN6%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDuyzQhDyzpIebcwhyjokgOz%2F5r05jymfjGJb%2FEIxiZwIgbSiK9yc5rEN9n4XF059JD%2FS6mbTWHwutZMLSWgnDquQqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHl7yj1rfi9KHpiDCrcA6YDxc7MZ0GBL9oDbD2zqMVKCScoH7spRtulKSHuEq2rCmSXZMzKP6yj7Q0oHmpaf6v9PRtF6WUk26bHBe2dS4fWO5qw9D9WiL0Y%2FEXT88sAHRsKvMgqb9zAn8ZvEN%2FtXOLAUCMuN9gL8isnGqHJIawc1eufUfsDCdcoo9cQBLbh%2BPBMW7bdq1RcbnLASkc2ZsVa6XzepCYYUL25SP%2B7fadDWBxjncXzDulqSNPDywasny4VUEs8A0pzyKHwvsp8t5kNyLFhtN5B9P29YY9q5XeJETgp4YmmqYWzyH1A3%2FIsPPM1nvNLmjdTX0DZfpMdMBjdNG4gOzQHaX%2BZEnERyvAblGTlyIW7gM%2BWmGXHnbNZgT48haPuqV0TObn%2Bm%2B%2B%2Bt5vkgZvNsQvrfw3WtrWgVvmyRhI%2BxVgtbDJp%2FsSyC%2BSlGo0DvlFF9EnQqbi0rMXZzjK%2BOSzDBfEluwT9MWO0mwFsebxzKM1drJe2Y1pkqvl7EVeyhM9xCT8Lb3ubwzqHwY1ry7LxZPj7WwAtq%2B5pdcmM%2BqPT4KPyxKzJIuB1Bh%2BrhChDCJdyoH60VymCJOR24jZRxQ5Rz9R7FUQh%2FF%2B4hj%2Fs6I2%2F0cYUxgrdJOP%2B8Qq3b3b2OMUlMQIJ93ESMJuYtb0GOqUBZ5Gl%2FA0E684BGX9u3IVVnESYXJpfhbK4HJpw5hGiqc8ZU09gBWxhbg9Esz8AwThkGaNeYs2r7%2FlmGJlZdgbofOLZrfzgIcn0N1%2BiU1jHAlxWGCHMc0c7j0IjaohARG9cBJZ2VRG24YUafmzTj1OQs1CFQ7rrXNdOGPrufb3L1x3maTe6Nel%2BiDjq6xa%2BquC7FSGZJ%2BEu5L0wixyBG26ADDHYztkY&X-Amz-Signature=a2ff7fd5d1af138810436123984f0a3131162cdbbf29c6d984471df0b2a9dff6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
