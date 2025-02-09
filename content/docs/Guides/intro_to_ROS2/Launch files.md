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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHEXDLP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFiPIjIu7EUbMt0XVge3EzWrC1dnd0xvk8uoRBYH0EdAIhAJeFEoGBfpurHyA5nrzSmJrdnxy%2BKYOPul3weyL%2FkLLDKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLUDwmRRZofHmlhu0q3AOMJG9cHeHUNXL0m%2FvoWOTiuoWpUPM9mIceeod7h4pEdzOSepJejYJM8JnSWlzniLzQffjKLy1CQ6A5DanfAO2WrbvjHxU45rHthC66db3ot3Cr%2B4PynusNoCIjKTOEoeNyElt5YtH%2Fn8b7T%2BPjQlf9kFOLlxz48XZ9T431K7L19S%2FNwXh%2BNxfZ%2Bt7Yc6ZfHOeBps5Efz%2FiJovFikxPQCOZhy2%2BwJ1KW%2BrZN4vv8lINP6ga4ShpxmBGmHGQ5U%2BRCkRhoH20VDhX5tjF%2B%2FuHNJ95qSYJJ3PvW3mPcB1W9NVXmk4SndwMLJYr7UwZB7T%2FZcfxsQ3vo5R%2BOxGxKqHXdwmy68pvemW%2FAVLW4z%2B%2B1KixCuf36vDE1cy29WpQ5oinpkcn6GSj%2B2cM2D655hoRCj1yjBFSxjMoKWMgvisJ70aoZCatH1sfYDutL4X5iZX9n4fbarObL6SkQ2IcjgIodZddnulMNjEcnZaBWtBvE6n1LqyLgZzyYNn06sRna5nUQHLXxTRWVZK04NE7GN0LUqTNvwvhEUdEj6MoO8PI76nrYZrtuKnzweyOmLZlOQ1uMJYkLeVV3fFbUUdZTqb6Z19v1t%2F3PSjnSfY9u0j86f%2FBvyyWz908ik98PAT8rzD1j6S9BjqkARDtknI6LyOuOFb601ULGR6Xc4zpifVQJFBo4vjew6B81kCS3D2hi0uU%2B%2Bcrdj7euzE7Hp%2Fl3POBQ2oyjuqlitEtqJ3%2F4%2BpqhD1Kt8FCWJ0UyfBiVkIwQfi2RUPaD5tOuMhsIawiiZCZDsxyGE32xl%2BNjUczbWpWv2mP0Xnd%2BIeQ4bedK0wcTbBgMjRfZvSwoR9B%2Bzr16VSY24uAB6u04hR%2FY%2F%2F0&X-Amz-Signature=b85b945a09c00bbff1318ce9d5a7294cf2903a82a8ec11543e283b83cb38a904&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHEXDLP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFiPIjIu7EUbMt0XVge3EzWrC1dnd0xvk8uoRBYH0EdAIhAJeFEoGBfpurHyA5nrzSmJrdnxy%2BKYOPul3weyL%2FkLLDKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLUDwmRRZofHmlhu0q3AOMJG9cHeHUNXL0m%2FvoWOTiuoWpUPM9mIceeod7h4pEdzOSepJejYJM8JnSWlzniLzQffjKLy1CQ6A5DanfAO2WrbvjHxU45rHthC66db3ot3Cr%2B4PynusNoCIjKTOEoeNyElt5YtH%2Fn8b7T%2BPjQlf9kFOLlxz48XZ9T431K7L19S%2FNwXh%2BNxfZ%2Bt7Yc6ZfHOeBps5Efz%2FiJovFikxPQCOZhy2%2BwJ1KW%2BrZN4vv8lINP6ga4ShpxmBGmHGQ5U%2BRCkRhoH20VDhX5tjF%2B%2FuHNJ95qSYJJ3PvW3mPcB1W9NVXmk4SndwMLJYr7UwZB7T%2FZcfxsQ3vo5R%2BOxGxKqHXdwmy68pvemW%2FAVLW4z%2B%2B1KixCuf36vDE1cy29WpQ5oinpkcn6GSj%2B2cM2D655hoRCj1yjBFSxjMoKWMgvisJ70aoZCatH1sfYDutL4X5iZX9n4fbarObL6SkQ2IcjgIodZddnulMNjEcnZaBWtBvE6n1LqyLgZzyYNn06sRna5nUQHLXxTRWVZK04NE7GN0LUqTNvwvhEUdEj6MoO8PI76nrYZrtuKnzweyOmLZlOQ1uMJYkLeVV3fFbUUdZTqb6Z19v1t%2F3PSjnSfY9u0j86f%2FBvyyWz908ik98PAT8rzD1j6S9BjqkARDtknI6LyOuOFb601ULGR6Xc4zpifVQJFBo4vjew6B81kCS3D2hi0uU%2B%2Bcrdj7euzE7Hp%2Fl3POBQ2oyjuqlitEtqJ3%2F4%2BpqhD1Kt8FCWJ0UyfBiVkIwQfi2RUPaD5tOuMhsIawiiZCZDsxyGE32xl%2BNjUczbWpWv2mP0Xnd%2BIeQ4bedK0wcTbBgMjRfZvSwoR9B%2Bzr16VSY24uAB6u04hR%2FY%2F%2F0&X-Amz-Signature=26596461f121198e89005538c5bb7cc1689758275ec75c7dcde52a172014c08a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRHEXDLP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFiPIjIu7EUbMt0XVge3EzWrC1dnd0xvk8uoRBYH0EdAIhAJeFEoGBfpurHyA5nrzSmJrdnxy%2BKYOPul3weyL%2FkLLDKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLUDwmRRZofHmlhu0q3AOMJG9cHeHUNXL0m%2FvoWOTiuoWpUPM9mIceeod7h4pEdzOSepJejYJM8JnSWlzniLzQffjKLy1CQ6A5DanfAO2WrbvjHxU45rHthC66db3ot3Cr%2B4PynusNoCIjKTOEoeNyElt5YtH%2Fn8b7T%2BPjQlf9kFOLlxz48XZ9T431K7L19S%2FNwXh%2BNxfZ%2Bt7Yc6ZfHOeBps5Efz%2FiJovFikxPQCOZhy2%2BwJ1KW%2BrZN4vv8lINP6ga4ShpxmBGmHGQ5U%2BRCkRhoH20VDhX5tjF%2B%2FuHNJ95qSYJJ3PvW3mPcB1W9NVXmk4SndwMLJYr7UwZB7T%2FZcfxsQ3vo5R%2BOxGxKqHXdwmy68pvemW%2FAVLW4z%2B%2B1KixCuf36vDE1cy29WpQ5oinpkcn6GSj%2B2cM2D655hoRCj1yjBFSxjMoKWMgvisJ70aoZCatH1sfYDutL4X5iZX9n4fbarObL6SkQ2IcjgIodZddnulMNjEcnZaBWtBvE6n1LqyLgZzyYNn06sRna5nUQHLXxTRWVZK04NE7GN0LUqTNvwvhEUdEj6MoO8PI76nrYZrtuKnzweyOmLZlOQ1uMJYkLeVV3fFbUUdZTqb6Z19v1t%2F3PSjnSfY9u0j86f%2FBvyyWz908ik98PAT8rzD1j6S9BjqkARDtknI6LyOuOFb601ULGR6Xc4zpifVQJFBo4vjew6B81kCS3D2hi0uU%2B%2Bcrdj7euzE7Hp%2Fl3POBQ2oyjuqlitEtqJ3%2F4%2BpqhD1Kt8FCWJ0UyfBiVkIwQfi2RUPaD5tOuMhsIawiiZCZDsxyGE32xl%2BNjUczbWpWv2mP0Xnd%2BIeQ4bedK0wcTbBgMjRfZvSwoR9B%2Bzr16VSY24uAB6u04hR%2FY%2F%2F0&X-Amz-Signature=261f088ec0e099ceaf66cc5fd678087fb51f97dc3c728e5e9abc348b8159c0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
