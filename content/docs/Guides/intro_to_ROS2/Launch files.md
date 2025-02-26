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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTTJDP5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAobDhIHJaYCfxfGEdQLhkgl61prZrHZOrenQzViN2DaAiEAu%2B96DFlHMoIP6NypeMGstAbzd%2F5mOzLuRwzIfivlVXsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyyHvF9fwOdr7MjZyrcA5Mocy75nW9j35oyZjNhYSsqNxgJ4c4wmp8mG9zbHjwrX7WTOsfcH2Qxr5DLHY5uHWw8HB5CoDCJeLrmNHKk69sV0jO%2F5bsZS5Vz2LHHLrGAxbJca33REXTgX2EKhMTMllTaUW%2B2vm3azhn9IqxSBTBaV3O%2BsiUGr0DSQeemXfgMfI26Dv2oCWvxsoFcxVZcWR3fRooLXShE3paoRrbKjz4P2fE%2BwMOfwq0gfWpup9H%2Fe4ZiCHwidGA7%2FKwhRX0qtskQVW034x%2FBRmq1t6Ndd%2FLrp5%2FbJ%2FKAkPB15%2Brv2IsWiFEFC%2BXHcSQ3JqlEmLCKwahGLTF2d3l2uJ1xERofb7uAMfFhq74%2FGb7gXhqO6%2Bo%2B5MB41E48ROe2jpYn%2FZ1G%2BBaKzY1OUzl6pVvt2RoWn1lBQm2PLcEloWmj9UEb6fchGdPgZrCxJ2gvrMuJbcR5R2B7PoP24I0dHpafQmNWOjLmNztCyYwvrilo49m5rllFFvg2R2gk01xGWerPxoeAAhfGWiVVJLLQlvnsqHmblgX%2FObALysoa%2Fn3QERlawVidD1W5PrbQiH3OlkSKRnv%2FvVrSyy3k%2F0lyHeyBmtx3F6X4olaq1NBWWkRsllcVrLjGPiSxgH%2Fcna6dyMnZMLK7%2Fr0GOqUBHMBWt4qwfGKCQhYFcdh733gthqxjeVequgYjfQxnhmcLNmWgsjNNf5ra2OgBbIsPhdl6OHzJhfQF81L7D5BbWIVcF4XFghbLQM7ftQnKeO84RBLjJC4Mxlm9W9T9k1SDOnCznXWU4jv9q7KM11sk%2BY9ovjkfgfF0LNY95WiHii6UH1crkuWoTmfdUvEkNJSJt1yhv3%2Ff7Kq20Dwh9wlGZUV8zIku&X-Amz-Signature=cc67c044aca86e4d60529abe30f706937c6bc4aef9cba0ab0580005fc3c97d64&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTTJDP5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAobDhIHJaYCfxfGEdQLhkgl61prZrHZOrenQzViN2DaAiEAu%2B96DFlHMoIP6NypeMGstAbzd%2F5mOzLuRwzIfivlVXsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyyHvF9fwOdr7MjZyrcA5Mocy75nW9j35oyZjNhYSsqNxgJ4c4wmp8mG9zbHjwrX7WTOsfcH2Qxr5DLHY5uHWw8HB5CoDCJeLrmNHKk69sV0jO%2F5bsZS5Vz2LHHLrGAxbJca33REXTgX2EKhMTMllTaUW%2B2vm3azhn9IqxSBTBaV3O%2BsiUGr0DSQeemXfgMfI26Dv2oCWvxsoFcxVZcWR3fRooLXShE3paoRrbKjz4P2fE%2BwMOfwq0gfWpup9H%2Fe4ZiCHwidGA7%2FKwhRX0qtskQVW034x%2FBRmq1t6Ndd%2FLrp5%2FbJ%2FKAkPB15%2Brv2IsWiFEFC%2BXHcSQ3JqlEmLCKwahGLTF2d3l2uJ1xERofb7uAMfFhq74%2FGb7gXhqO6%2Bo%2B5MB41E48ROe2jpYn%2FZ1G%2BBaKzY1OUzl6pVvt2RoWn1lBQm2PLcEloWmj9UEb6fchGdPgZrCxJ2gvrMuJbcR5R2B7PoP24I0dHpafQmNWOjLmNztCyYwvrilo49m5rllFFvg2R2gk01xGWerPxoeAAhfGWiVVJLLQlvnsqHmblgX%2FObALysoa%2Fn3QERlawVidD1W5PrbQiH3OlkSKRnv%2FvVrSyy3k%2F0lyHeyBmtx3F6X4olaq1NBWWkRsllcVrLjGPiSxgH%2Fcna6dyMnZMLK7%2Fr0GOqUBHMBWt4qwfGKCQhYFcdh733gthqxjeVequgYjfQxnhmcLNmWgsjNNf5ra2OgBbIsPhdl6OHzJhfQF81L7D5BbWIVcF4XFghbLQM7ftQnKeO84RBLjJC4Mxlm9W9T9k1SDOnCznXWU4jv9q7KM11sk%2BY9ovjkfgfF0LNY95WiHii6UH1crkuWoTmfdUvEkNJSJt1yhv3%2Ff7Kq20Dwh9wlGZUV8zIku&X-Amz-Signature=25dce20f3053d8654cbbf39236f77aa13a44e4d41a83acec6eb8aa49c37d0539&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTTJDP5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAobDhIHJaYCfxfGEdQLhkgl61prZrHZOrenQzViN2DaAiEAu%2B96DFlHMoIP6NypeMGstAbzd%2F5mOzLuRwzIfivlVXsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDyyHvF9fwOdr7MjZyrcA5Mocy75nW9j35oyZjNhYSsqNxgJ4c4wmp8mG9zbHjwrX7WTOsfcH2Qxr5DLHY5uHWw8HB5CoDCJeLrmNHKk69sV0jO%2F5bsZS5Vz2LHHLrGAxbJca33REXTgX2EKhMTMllTaUW%2B2vm3azhn9IqxSBTBaV3O%2BsiUGr0DSQeemXfgMfI26Dv2oCWvxsoFcxVZcWR3fRooLXShE3paoRrbKjz4P2fE%2BwMOfwq0gfWpup9H%2Fe4ZiCHwidGA7%2FKwhRX0qtskQVW034x%2FBRmq1t6Ndd%2FLrp5%2FbJ%2FKAkPB15%2Brv2IsWiFEFC%2BXHcSQ3JqlEmLCKwahGLTF2d3l2uJ1xERofb7uAMfFhq74%2FGb7gXhqO6%2Bo%2B5MB41E48ROe2jpYn%2FZ1G%2BBaKzY1OUzl6pVvt2RoWn1lBQm2PLcEloWmj9UEb6fchGdPgZrCxJ2gvrMuJbcR5R2B7PoP24I0dHpafQmNWOjLmNztCyYwvrilo49m5rllFFvg2R2gk01xGWerPxoeAAhfGWiVVJLLQlvnsqHmblgX%2FObALysoa%2Fn3QERlawVidD1W5PrbQiH3OlkSKRnv%2FvVrSyy3k%2F0lyHeyBmtx3F6X4olaq1NBWWkRsllcVrLjGPiSxgH%2Fcna6dyMnZMLK7%2Fr0GOqUBHMBWt4qwfGKCQhYFcdh733gthqxjeVequgYjfQxnhmcLNmWgsjNNf5ra2OgBbIsPhdl6OHzJhfQF81L7D5BbWIVcF4XFghbLQM7ftQnKeO84RBLjJC4Mxlm9W9T9k1SDOnCznXWU4jv9q7KM11sk%2BY9ovjkfgfF0LNY95WiHii6UH1crkuWoTmfdUvEkNJSJt1yhv3%2Ff7Kq20Dwh9wlGZUV8zIku&X-Amz-Signature=fa4cdf283b58eeba23e74a46e18c933faece35d30d0508e20532762e5d21cc10&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
