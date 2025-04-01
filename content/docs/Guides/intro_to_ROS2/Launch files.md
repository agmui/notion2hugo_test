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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XFCR4N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAlDWcV2iiSQUuSVFbjevBoCxtlZ3NoBxPnWL2bTwfofAiEAzObRsD0kOuFOE5N62i0IfKtFsircpMjoyxPLCFmAkQMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6%2FQ16mldGW0dzEuyrcA%2FCJCjgRWFG2pgn4yKcxUUAwS6UWl%2Fy259EXiiVPVqmpT0NUSw3cyAdYC%2BmWGiokpafgMsCWDj5E9nxxVW5uO9XIaNLdxg8yg0ejPccfGbbJXrW%2BOml525pEoTR%2BC6OEB3BGrZ63wGDkY5eIeTAlTVdm1ftJ5llAD1AG1PQxoduT8kDxZF9s%2BzF7l%2FZ2S5PmytI4OuyxpaUrGCqgWMB%2FEThpAGcgxTO6H%2BMnhYhPq%2BqveJZf%2BBVv9Q7pkwUODuRYzU3kl1Je6T%2BuRxdTo0AKzdft%2BaP0h32VonAY3L9%2BhdtB1DdXJftnLBMBkRNtKf3C6l2cQM%2FanV4fY8ZQ42isck%2FHhNn0paphWRUH7XEnO45FF%2B12iq%2BNbC4%2B6EKNIbcPcixmWsq7pT3lyuxMJMzjKux6YDMT%2FwzrufFNS%2Br2xtY%2BQMAxw2O7sL5EvGhupeLxfVpyy0MUAM8OInV0FJAYHOgo1P4WTZBZQrjhkPny9nAEO%2FynUDduGNzHd1UZ6%2FtnInw1d8E2hQczPbl1PI37xDsIh8VGEFnz0w%2Bv7TQsJIk6AazLph8XV1jzWyX0QA%2Ff37y%2Beu8bb%2BYvTaeo2ie45iavCEsbTJp0totMyDvZj5GHc1wABqu3H7OohEwxMNGgsL8GOqUBcEKh7ZX5U4k%2BRUtwiOK4MiUINN4nOGg3CBn2U1%2Fkhf2LCDzaDMkzWMdT8NuVsScjPS9kBG70g72KNRBZbmVecfYd%2FLuuDkglQKZf6jhx%2FdwhnfjkR5T3yRAI%2B%2BsULreODmxLSINdePcPgj1Cru11ggJQoT7rdmnpgHEbvuuIPYpmn%2BDaY1AUDRrVv2Sth5eov5O44ujoa2bLbu%2FVYdcg8%2FoWIJNj&X-Amz-Signature=baa24ca65c1a4c7f876007b68e61f863f7e52083232d25dec3f03357b5525e29&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XFCR4N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAlDWcV2iiSQUuSVFbjevBoCxtlZ3NoBxPnWL2bTwfofAiEAzObRsD0kOuFOE5N62i0IfKtFsircpMjoyxPLCFmAkQMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6%2FQ16mldGW0dzEuyrcA%2FCJCjgRWFG2pgn4yKcxUUAwS6UWl%2Fy259EXiiVPVqmpT0NUSw3cyAdYC%2BmWGiokpafgMsCWDj5E9nxxVW5uO9XIaNLdxg8yg0ejPccfGbbJXrW%2BOml525pEoTR%2BC6OEB3BGrZ63wGDkY5eIeTAlTVdm1ftJ5llAD1AG1PQxoduT8kDxZF9s%2BzF7l%2FZ2S5PmytI4OuyxpaUrGCqgWMB%2FEThpAGcgxTO6H%2BMnhYhPq%2BqveJZf%2BBVv9Q7pkwUODuRYzU3kl1Je6T%2BuRxdTo0AKzdft%2BaP0h32VonAY3L9%2BhdtB1DdXJftnLBMBkRNtKf3C6l2cQM%2FanV4fY8ZQ42isck%2FHhNn0paphWRUH7XEnO45FF%2B12iq%2BNbC4%2B6EKNIbcPcixmWsq7pT3lyuxMJMzjKux6YDMT%2FwzrufFNS%2Br2xtY%2BQMAxw2O7sL5EvGhupeLxfVpyy0MUAM8OInV0FJAYHOgo1P4WTZBZQrjhkPny9nAEO%2FynUDduGNzHd1UZ6%2FtnInw1d8E2hQczPbl1PI37xDsIh8VGEFnz0w%2Bv7TQsJIk6AazLph8XV1jzWyX0QA%2Ff37y%2Beu8bb%2BYvTaeo2ie45iavCEsbTJp0totMyDvZj5GHc1wABqu3H7OohEwxMNGgsL8GOqUBcEKh7ZX5U4k%2BRUtwiOK4MiUINN4nOGg3CBn2U1%2Fkhf2LCDzaDMkzWMdT8NuVsScjPS9kBG70g72KNRBZbmVecfYd%2FLuuDkglQKZf6jhx%2FdwhnfjkR5T3yRAI%2B%2BsULreODmxLSINdePcPgj1Cru11ggJQoT7rdmnpgHEbvuuIPYpmn%2BDaY1AUDRrVv2Sth5eov5O44ujoa2bLbu%2FVYdcg8%2FoWIJNj&X-Amz-Signature=98e7286097f35dcfd67ee923dc6dec7395ec77d5c33f358f6f9bbe78977af16c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XFCR4N%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAlDWcV2iiSQUuSVFbjevBoCxtlZ3NoBxPnWL2bTwfofAiEAzObRsD0kOuFOE5N62i0IfKtFsircpMjoyxPLCFmAkQMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6%2FQ16mldGW0dzEuyrcA%2FCJCjgRWFG2pgn4yKcxUUAwS6UWl%2Fy259EXiiVPVqmpT0NUSw3cyAdYC%2BmWGiokpafgMsCWDj5E9nxxVW5uO9XIaNLdxg8yg0ejPccfGbbJXrW%2BOml525pEoTR%2BC6OEB3BGrZ63wGDkY5eIeTAlTVdm1ftJ5llAD1AG1PQxoduT8kDxZF9s%2BzF7l%2FZ2S5PmytI4OuyxpaUrGCqgWMB%2FEThpAGcgxTO6H%2BMnhYhPq%2BqveJZf%2BBVv9Q7pkwUODuRYzU3kl1Je6T%2BuRxdTo0AKzdft%2BaP0h32VonAY3L9%2BhdtB1DdXJftnLBMBkRNtKf3C6l2cQM%2FanV4fY8ZQ42isck%2FHhNn0paphWRUH7XEnO45FF%2B12iq%2BNbC4%2B6EKNIbcPcixmWsq7pT3lyuxMJMzjKux6YDMT%2FwzrufFNS%2Br2xtY%2BQMAxw2O7sL5EvGhupeLxfVpyy0MUAM8OInV0FJAYHOgo1P4WTZBZQrjhkPny9nAEO%2FynUDduGNzHd1UZ6%2FtnInw1d8E2hQczPbl1PI37xDsIh8VGEFnz0w%2Bv7TQsJIk6AazLph8XV1jzWyX0QA%2Ff37y%2Beu8bb%2BYvTaeo2ie45iavCEsbTJp0totMyDvZj5GHc1wABqu3H7OohEwxMNGgsL8GOqUBcEKh7ZX5U4k%2BRUtwiOK4MiUINN4nOGg3CBn2U1%2Fkhf2LCDzaDMkzWMdT8NuVsScjPS9kBG70g72KNRBZbmVecfYd%2FLuuDkglQKZf6jhx%2FdwhnfjkR5T3yRAI%2B%2BsULreODmxLSINdePcPgj1Cru11ggJQoT7rdmnpgHEbvuuIPYpmn%2BDaY1AUDRrVv2Sth5eov5O44ujoa2bLbu%2FVYdcg8%2FoWIJNj&X-Amz-Signature=5d2d2f1b2ca451cab5b7534ec50653ef06928b120f2af6e9267819070c064504&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
