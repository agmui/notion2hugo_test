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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZK4U4O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHZ4TwRvXhOTpmQL5FcZbAPKjkZiuRdGzPQdpY%2B%2BB24AiEA1c9iRbOKndiNlaYL06PIU0fYUF6PMljIfivcXqWqgMUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAI4pTNtCd1ufOH0kyrcA9Aj2WgDwih1dpm6l%2BLjOnH7Fhnuv6z8uz3ed6InHTIg9CKlxPi34oJ9Ox0FFIRZgxjYelxQzLSKt%2Bj%2F7SdLScP16wLk85tvuCDaVGo2jMMryeJOL6qJcuMMuH7dZCAHK%2FXCFnHLqgmYLMMKXgnTs%2BgUCr%2BjDj9ZOXqfbyYOwYjFzF5gJ2Mmv3Sn1oG5fyRyeDxTYQvTdLXPCciWpw7Zpr%2Fye47aP6hm9iFskFz8vaWxGqNmNRKNnBZjBqGNzgafVPG461%2FEdIbp6HrBLxG%2FU8R1CB2HJCA70nxqE5FuelT%2BiEwpqdmaSAOkxUC%2BYjmp9zZiWHfUUgh7JqjUv8zYT6SuLlGCz2GJ93xxCaRPm0kDmRFXz%2FV3Pe6zn1gWvoJXReo4ZIQ4mDJj9y7IU2Alwe9BgctHanr5Gqd2p2KprzkFVDjGFqoa72iGUezkrO3%2BxTuB0BAbFxa9gl4HNWZkeTvKrhb4VK3x00bSOTSLSCKccr8t4iGJELmynaCe93dHoH1bUIUVacz6DtqJgYfWO4LSy0%2F%2FXgN3s5MYjDo%2BSWBq8Gm7fpBKNAaRwAH9snB1ozbBGPY1sls3ACncBJj6ccre2WhyCB2T2OOFUcUR9D5aZZB4m8NozqBMFWmlMO%2Fl88AGOqUBLBodPMCjcxYUsPL%2F7FwYUf8jSQ8eNW%2FCO2f%2BpMZB7zcpGY4e%2FUafxD7n9HipBAiK2JhOPUWhjfrBxE2GFRo3ZtOHRXP12hbn4XrFGfyg9ReSZwKd4VtnmFXfar34hsJChOP53N4ISEaVecD%2FcimHErVyhVUOjXsxnfoxZ5GEVeA%2BgDj24OogAG2Nnlb4DMfhh2g2xIFa4t8R1T9JGT15qjSpprVL&X-Amz-Signature=651e6b05167969d6f100ba074480d4915bde2dcd89acc60a0d9013e29eee8f04&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZK4U4O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHZ4TwRvXhOTpmQL5FcZbAPKjkZiuRdGzPQdpY%2B%2BB24AiEA1c9iRbOKndiNlaYL06PIU0fYUF6PMljIfivcXqWqgMUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAI4pTNtCd1ufOH0kyrcA9Aj2WgDwih1dpm6l%2BLjOnH7Fhnuv6z8uz3ed6InHTIg9CKlxPi34oJ9Ox0FFIRZgxjYelxQzLSKt%2Bj%2F7SdLScP16wLk85tvuCDaVGo2jMMryeJOL6qJcuMMuH7dZCAHK%2FXCFnHLqgmYLMMKXgnTs%2BgUCr%2BjDj9ZOXqfbyYOwYjFzF5gJ2Mmv3Sn1oG5fyRyeDxTYQvTdLXPCciWpw7Zpr%2Fye47aP6hm9iFskFz8vaWxGqNmNRKNnBZjBqGNzgafVPG461%2FEdIbp6HrBLxG%2FU8R1CB2HJCA70nxqE5FuelT%2BiEwpqdmaSAOkxUC%2BYjmp9zZiWHfUUgh7JqjUv8zYT6SuLlGCz2GJ93xxCaRPm0kDmRFXz%2FV3Pe6zn1gWvoJXReo4ZIQ4mDJj9y7IU2Alwe9BgctHanr5Gqd2p2KprzkFVDjGFqoa72iGUezkrO3%2BxTuB0BAbFxa9gl4HNWZkeTvKrhb4VK3x00bSOTSLSCKccr8t4iGJELmynaCe93dHoH1bUIUVacz6DtqJgYfWO4LSy0%2F%2FXgN3s5MYjDo%2BSWBq8Gm7fpBKNAaRwAH9snB1ozbBGPY1sls3ACncBJj6ccre2WhyCB2T2OOFUcUR9D5aZZB4m8NozqBMFWmlMO%2Fl88AGOqUBLBodPMCjcxYUsPL%2F7FwYUf8jSQ8eNW%2FCO2f%2BpMZB7zcpGY4e%2FUafxD7n9HipBAiK2JhOPUWhjfrBxE2GFRo3ZtOHRXP12hbn4XrFGfyg9ReSZwKd4VtnmFXfar34hsJChOP53N4ISEaVecD%2FcimHErVyhVUOjXsxnfoxZ5GEVeA%2BgDj24OogAG2Nnlb4DMfhh2g2xIFa4t8R1T9JGT15qjSpprVL&X-Amz-Signature=9586761e570d9400a8fa64216c0f2cca3ca3f0a855a4e512e296608f3f7229e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZK4U4O%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHZ4TwRvXhOTpmQL5FcZbAPKjkZiuRdGzPQdpY%2B%2BB24AiEA1c9iRbOKndiNlaYL06PIU0fYUF6PMljIfivcXqWqgMUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAI4pTNtCd1ufOH0kyrcA9Aj2WgDwih1dpm6l%2BLjOnH7Fhnuv6z8uz3ed6InHTIg9CKlxPi34oJ9Ox0FFIRZgxjYelxQzLSKt%2Bj%2F7SdLScP16wLk85tvuCDaVGo2jMMryeJOL6qJcuMMuH7dZCAHK%2FXCFnHLqgmYLMMKXgnTs%2BgUCr%2BjDj9ZOXqfbyYOwYjFzF5gJ2Mmv3Sn1oG5fyRyeDxTYQvTdLXPCciWpw7Zpr%2Fye47aP6hm9iFskFz8vaWxGqNmNRKNnBZjBqGNzgafVPG461%2FEdIbp6HrBLxG%2FU8R1CB2HJCA70nxqE5FuelT%2BiEwpqdmaSAOkxUC%2BYjmp9zZiWHfUUgh7JqjUv8zYT6SuLlGCz2GJ93xxCaRPm0kDmRFXz%2FV3Pe6zn1gWvoJXReo4ZIQ4mDJj9y7IU2Alwe9BgctHanr5Gqd2p2KprzkFVDjGFqoa72iGUezkrO3%2BxTuB0BAbFxa9gl4HNWZkeTvKrhb4VK3x00bSOTSLSCKccr8t4iGJELmynaCe93dHoH1bUIUVacz6DtqJgYfWO4LSy0%2F%2FXgN3s5MYjDo%2BSWBq8Gm7fpBKNAaRwAH9snB1ozbBGPY1sls3ACncBJj6ccre2WhyCB2T2OOFUcUR9D5aZZB4m8NozqBMFWmlMO%2Fl88AGOqUBLBodPMCjcxYUsPL%2F7FwYUf8jSQ8eNW%2FCO2f%2BpMZB7zcpGY4e%2FUafxD7n9HipBAiK2JhOPUWhjfrBxE2GFRo3ZtOHRXP12hbn4XrFGfyg9ReSZwKd4VtnmFXfar34hsJChOP53N4ISEaVecD%2FcimHErVyhVUOjXsxnfoxZ5GEVeA%2BgDj24OogAG2Nnlb4DMfhh2g2xIFa4t8R1T9JGT15qjSpprVL&X-Amz-Signature=d3951665c2ad57dce0b1b8d03887b63ec0cb82a556d2c19a7c341e03e36b51ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
