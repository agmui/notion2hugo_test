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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTMO7QT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5sqv%2BG7Uo6C8skGjaGywnLCXDa20wnoFWco%2BwpkbqgIgUgrse85qRknbx%2BjTMnhvz%2FHtDX9M7%2BKsvZNjVpKpA1Uq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGJMha3m18orslPTcCrcA2iSebAIKc6tH8KbHZBDwa68T9Te60gu5gFLhZrCFGcGSn%2BhgtKcdR0zVRia%2B07Lck6iC11IbsFfVYF69ssg1sLhR%2FxDPCW2%2Fc2Ik6qzodUc1rq4Dtnr1UMoHRQa56pOTGEyIDW9EhrlEn5nLg25R%2F0mQbijhvZ%2BKkEsdj8RHB0fXW5iA%2BMXqiA3wycbafMw%2BCVj8b0Ws3BBu%2FUI4%2Fx7ghv6etW7vz1jUBO0c%2Bvwp5cDtFiUqLLN5R9QCrsqq%2FArYB%2BpW6XHC%2FjvRuZJz3rQbUmJOsI865dPUX3ffrJUtxAGRNWuY2cBNd8%2FhjR8dbyw6g%2FMR%2F6DI3VbSYuQcIqMGjjrXlGUU9ydXP7PScL9Y7nGbrGHF85%2BCjik6T5meLLB9pUOknyq3gV6Lcryoe6chXTJDHcD9WjuZo5jCkCjz40%2BCZa4CPnkyxilUarrw%2FTcKWYs56wFTY61QbKg5g8VFvO2N5nRzmUI70h%2FoRlz5Nj0J6CTg%2B%2BhUU8EHhkaGpQRVj3CAliWVDkAQGEQUqPnWVyPxrF7PE3eO65syguIsImhgS3BZrF9lirpRC4i3D9KguQxEO5cpdSKmscRtcIXMPTX2Kw7JlzjXgSwyb1l70676DtdGWFzRc2h1LEAMNbNp74GOqUBCnQpfue%2FGucFtAf1S%2B0tO0IoMBKRZrLXh3TxTs%2BJ7OTK%2B7J2CizZwcjf3Eii7BrG%2FCDj3Q0KkdI7A3X2pF5uxBpdK5MROxWhnE%2BYQVG9YrX4DPxvKr61%2BzGCk1Ek5Opmd0h%2BL8w6wS96K28YR%2F4vH1ggCgkb2JnmC0CA1nx9cohjFME%2FJ0kfdm5byXHUXi5ZzMNKpXXf8k97KbkhEQg%2BgrNx4Ly7&X-Amz-Signature=0a2f7c1e217ed11304662c9f7011c45df48007138e4622c7018f3bc6c2cf3908&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTMO7QT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5sqv%2BG7Uo6C8skGjaGywnLCXDa20wnoFWco%2BwpkbqgIgUgrse85qRknbx%2BjTMnhvz%2FHtDX9M7%2BKsvZNjVpKpA1Uq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGJMha3m18orslPTcCrcA2iSebAIKc6tH8KbHZBDwa68T9Te60gu5gFLhZrCFGcGSn%2BhgtKcdR0zVRia%2B07Lck6iC11IbsFfVYF69ssg1sLhR%2FxDPCW2%2Fc2Ik6qzodUc1rq4Dtnr1UMoHRQa56pOTGEyIDW9EhrlEn5nLg25R%2F0mQbijhvZ%2BKkEsdj8RHB0fXW5iA%2BMXqiA3wycbafMw%2BCVj8b0Ws3BBu%2FUI4%2Fx7ghv6etW7vz1jUBO0c%2Bvwp5cDtFiUqLLN5R9QCrsqq%2FArYB%2BpW6XHC%2FjvRuZJz3rQbUmJOsI865dPUX3ffrJUtxAGRNWuY2cBNd8%2FhjR8dbyw6g%2FMR%2F6DI3VbSYuQcIqMGjjrXlGUU9ydXP7PScL9Y7nGbrGHF85%2BCjik6T5meLLB9pUOknyq3gV6Lcryoe6chXTJDHcD9WjuZo5jCkCjz40%2BCZa4CPnkyxilUarrw%2FTcKWYs56wFTY61QbKg5g8VFvO2N5nRzmUI70h%2FoRlz5Nj0J6CTg%2B%2BhUU8EHhkaGpQRVj3CAliWVDkAQGEQUqPnWVyPxrF7PE3eO65syguIsImhgS3BZrF9lirpRC4i3D9KguQxEO5cpdSKmscRtcIXMPTX2Kw7JlzjXgSwyb1l70676DtdGWFzRc2h1LEAMNbNp74GOqUBCnQpfue%2FGucFtAf1S%2B0tO0IoMBKRZrLXh3TxTs%2BJ7OTK%2B7J2CizZwcjf3Eii7BrG%2FCDj3Q0KkdI7A3X2pF5uxBpdK5MROxWhnE%2BYQVG9YrX4DPxvKr61%2BzGCk1Ek5Opmd0h%2BL8w6wS96K28YR%2F4vH1ggCgkb2JnmC0CA1nx9cohjFME%2FJ0kfdm5byXHUXi5ZzMNKpXXf8k97KbkhEQg%2BgrNx4Ly7&X-Amz-Signature=a7f9d159d81b6a836816494e984fff8392b800d0464376a72f06b4829582cb03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTMO7QT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM5sqv%2BG7Uo6C8skGjaGywnLCXDa20wnoFWco%2BwpkbqgIgUgrse85qRknbx%2BjTMnhvz%2FHtDX9M7%2BKsvZNjVpKpA1Uq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGJMha3m18orslPTcCrcA2iSebAIKc6tH8KbHZBDwa68T9Te60gu5gFLhZrCFGcGSn%2BhgtKcdR0zVRia%2B07Lck6iC11IbsFfVYF69ssg1sLhR%2FxDPCW2%2Fc2Ik6qzodUc1rq4Dtnr1UMoHRQa56pOTGEyIDW9EhrlEn5nLg25R%2F0mQbijhvZ%2BKkEsdj8RHB0fXW5iA%2BMXqiA3wycbafMw%2BCVj8b0Ws3BBu%2FUI4%2Fx7ghv6etW7vz1jUBO0c%2Bvwp5cDtFiUqLLN5R9QCrsqq%2FArYB%2BpW6XHC%2FjvRuZJz3rQbUmJOsI865dPUX3ffrJUtxAGRNWuY2cBNd8%2FhjR8dbyw6g%2FMR%2F6DI3VbSYuQcIqMGjjrXlGUU9ydXP7PScL9Y7nGbrGHF85%2BCjik6T5meLLB9pUOknyq3gV6Lcryoe6chXTJDHcD9WjuZo5jCkCjz40%2BCZa4CPnkyxilUarrw%2FTcKWYs56wFTY61QbKg5g8VFvO2N5nRzmUI70h%2FoRlz5Nj0J6CTg%2B%2BhUU8EHhkaGpQRVj3CAliWVDkAQGEQUqPnWVyPxrF7PE3eO65syguIsImhgS3BZrF9lirpRC4i3D9KguQxEO5cpdSKmscRtcIXMPTX2Kw7JlzjXgSwyb1l70676DtdGWFzRc2h1LEAMNbNp74GOqUBCnQpfue%2FGucFtAf1S%2B0tO0IoMBKRZrLXh3TxTs%2BJ7OTK%2B7J2CizZwcjf3Eii7BrG%2FCDj3Q0KkdI7A3X2pF5uxBpdK5MROxWhnE%2BYQVG9YrX4DPxvKr61%2BzGCk1Ek5Opmd0h%2BL8w6wS96K28YR%2F4vH1ggCgkb2JnmC0CA1nx9cohjFME%2FJ0kfdm5byXHUXi5ZzMNKpXXf8k97KbkhEQg%2BgrNx4Ly7&X-Amz-Signature=7ec3eac0eab1bebea0fd377677f73b5179d22770ca5e68c80284462cf3157f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
