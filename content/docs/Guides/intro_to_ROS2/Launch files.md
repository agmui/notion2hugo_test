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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYKDJMI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3GfsmOgwFEGc1N7j0HTytxG6lpyrtolLTC76K9WkMzAiBFBo5H%2F3JDqyS9poCSFSb9TWPv6eqV%2Bt1vHRId9OVLAyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMTX8OlA3Auh78SB8vKtwDUMgbesxzjPU4a8iYrEsRM20ThUaDgAoEN%2BCZaN18Xcu2aUTcPa3PdAvDqj5T8F%2B4173PESkRZyufmBR3Riqi8hZDGgybZvRX42NQXmMqq8wTXUf6pwqG%2BqzbAhTKSLcQrVmiYX0VE5tshwmgMjFm2iU1b2X9wU5WzeFu%2F5zZbLviHQpSFlOOS%2FaRZDDeUYz%2FLglVxvx%2FBTWJOgf%2BEOlhVvRAfWKXsk%2FexJZl%2FwuMhY1aOSUJ4BihGypIKg8GgFa9YZisdFNzhCeTYxykDTsIq0punQNb4mDVRFDiwGCgJju00CwLijWI0vvBlBqoLLXzw4moakbV8kizCmA7TMqgds%2BTrvNW7yN22wrm4rXfth3aW2JADzMDft6yMfalv%2F1ZnBCCPh68FUMQBWoug7r5m%2B%2FTRJJRUf%2Fd4s4MfgJJS4AtM9EKfo4fnQCxNrvk2Re00rvPsZXYE9BH63oK8jMZtT2VBk9NhnqQUwWJao5ax3w1LV1pqtq5RgprD0FKQm3Sbk8rW0hOqxU%2BnDRuWSWMeeSxGLsf6QqS60YS2QDT%2FOoRFHTPyhHW0ZsDzvIBlxPP1gm44JACpv2b%2BiViVLbp96Zz0c8H%2BtP3JuTTFUKgXyoz2wZn2KtWvqUS6gMwoPqPwgY6pgGROR%2BYSH7hZkvpC7Z2Qqf4F6I8M9s1W1yoxGcRmrMCmw0jsEfjVBDTKmCk77xNF8lFnwBk7XzBmnCo6ATMp3L6edKMAsVtwMTS%2Fx%2FVFRDwTR%2BAEqBczdDQLyGK4xZJIWINtbNSsHXij2poSorn%2BbTMm9uOWBCl2ncYey8ozCsQFQelTsy2UFo4Cj0f5ncQAPQVNu9LG7%2BgvoXQ%2By8cl7eRUgW3FcUQ&X-Amz-Signature=f94c19733f093d66534a725cd7dc61f740517fcb655178defe0934cd4708a1b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYKDJMI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3GfsmOgwFEGc1N7j0HTytxG6lpyrtolLTC76K9WkMzAiBFBo5H%2F3JDqyS9poCSFSb9TWPv6eqV%2Bt1vHRId9OVLAyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMTX8OlA3Auh78SB8vKtwDUMgbesxzjPU4a8iYrEsRM20ThUaDgAoEN%2BCZaN18Xcu2aUTcPa3PdAvDqj5T8F%2B4173PESkRZyufmBR3Riqi8hZDGgybZvRX42NQXmMqq8wTXUf6pwqG%2BqzbAhTKSLcQrVmiYX0VE5tshwmgMjFm2iU1b2X9wU5WzeFu%2F5zZbLviHQpSFlOOS%2FaRZDDeUYz%2FLglVxvx%2FBTWJOgf%2BEOlhVvRAfWKXsk%2FexJZl%2FwuMhY1aOSUJ4BihGypIKg8GgFa9YZisdFNzhCeTYxykDTsIq0punQNb4mDVRFDiwGCgJju00CwLijWI0vvBlBqoLLXzw4moakbV8kizCmA7TMqgds%2BTrvNW7yN22wrm4rXfth3aW2JADzMDft6yMfalv%2F1ZnBCCPh68FUMQBWoug7r5m%2B%2FTRJJRUf%2Fd4s4MfgJJS4AtM9EKfo4fnQCxNrvk2Re00rvPsZXYE9BH63oK8jMZtT2VBk9NhnqQUwWJao5ax3w1LV1pqtq5RgprD0FKQm3Sbk8rW0hOqxU%2BnDRuWSWMeeSxGLsf6QqS60YS2QDT%2FOoRFHTPyhHW0ZsDzvIBlxPP1gm44JACpv2b%2BiViVLbp96Zz0c8H%2BtP3JuTTFUKgXyoz2wZn2KtWvqUS6gMwoPqPwgY6pgGROR%2BYSH7hZkvpC7Z2Qqf4F6I8M9s1W1yoxGcRmrMCmw0jsEfjVBDTKmCk77xNF8lFnwBk7XzBmnCo6ATMp3L6edKMAsVtwMTS%2Fx%2FVFRDwTR%2BAEqBczdDQLyGK4xZJIWINtbNSsHXij2poSorn%2BbTMm9uOWBCl2ncYey8ozCsQFQelTsy2UFo4Cj0f5ncQAPQVNu9LG7%2BgvoXQ%2By8cl7eRUgW3FcUQ&X-Amz-Signature=e7b3b3d82b340a73f0990a8baa5010c06c655a7627bc7c61be9431fcdb8c3974&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYKDJMI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3GfsmOgwFEGc1N7j0HTytxG6lpyrtolLTC76K9WkMzAiBFBo5H%2F3JDqyS9poCSFSb9TWPv6eqV%2Bt1vHRId9OVLAyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMTX8OlA3Auh78SB8vKtwDUMgbesxzjPU4a8iYrEsRM20ThUaDgAoEN%2BCZaN18Xcu2aUTcPa3PdAvDqj5T8F%2B4173PESkRZyufmBR3Riqi8hZDGgybZvRX42NQXmMqq8wTXUf6pwqG%2BqzbAhTKSLcQrVmiYX0VE5tshwmgMjFm2iU1b2X9wU5WzeFu%2F5zZbLviHQpSFlOOS%2FaRZDDeUYz%2FLglVxvx%2FBTWJOgf%2BEOlhVvRAfWKXsk%2FexJZl%2FwuMhY1aOSUJ4BihGypIKg8GgFa9YZisdFNzhCeTYxykDTsIq0punQNb4mDVRFDiwGCgJju00CwLijWI0vvBlBqoLLXzw4moakbV8kizCmA7TMqgds%2BTrvNW7yN22wrm4rXfth3aW2JADzMDft6yMfalv%2F1ZnBCCPh68FUMQBWoug7r5m%2B%2FTRJJRUf%2Fd4s4MfgJJS4AtM9EKfo4fnQCxNrvk2Re00rvPsZXYE9BH63oK8jMZtT2VBk9NhnqQUwWJao5ax3w1LV1pqtq5RgprD0FKQm3Sbk8rW0hOqxU%2BnDRuWSWMeeSxGLsf6QqS60YS2QDT%2FOoRFHTPyhHW0ZsDzvIBlxPP1gm44JACpv2b%2BiViVLbp96Zz0c8H%2BtP3JuTTFUKgXyoz2wZn2KtWvqUS6gMwoPqPwgY6pgGROR%2BYSH7hZkvpC7Z2Qqf4F6I8M9s1W1yoxGcRmrMCmw0jsEfjVBDTKmCk77xNF8lFnwBk7XzBmnCo6ATMp3L6edKMAsVtwMTS%2Fx%2FVFRDwTR%2BAEqBczdDQLyGK4xZJIWINtbNSsHXij2poSorn%2BbTMm9uOWBCl2ncYey8ozCsQFQelTsy2UFo4Cj0f5ncQAPQVNu9LG7%2BgvoXQ%2By8cl7eRUgW3FcUQ&X-Amz-Signature=aaca9a52aeff38c38198d2190f5bb396dd25a20e8bf36168845b03b12658fc07&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
