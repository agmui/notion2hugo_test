---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU7MVUV2%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfPJIPykj7TIlpkUzajvTFPKCcsX3qnMP7JyX0MwsUmAiAKKlf6WFyYaCMTjbm7R3ITQBqhfm3R3A8iu0XC%2FsoxGCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMd%2FWHIv2rS027rCz%2FKtwDkOoRMxi743aItQWUtghVnzMpugcKr0PAVm71IFIbBYII%2FrELDOvqiDNr0daFlJ1VE3dHr1ReDFxrJvbLFDt2%2BMBSzL2YHQsvp8K07l5OhWYg8I0POJfDZUIp%2FAuiUBVHY85arGaSQzlQa3WQh9p77UelS9Xc8MCash6IgvUn1PzIsrd43go7RqYn4cXxU35bbVLfZ28ucBuobVg6AJha2WpgukpiyAxCyq0HrRPGUGJ69tABPpN%2FHQx%2FK4%2Bnxx4T40adKiaqGp3H5vnaMpAFwsbGOc%2F%2Bfmk1hjPWNCoIeiBgjCxyUckdv9q484J7Ahmi7riFbQUEu1VgycOhJOraxirCdu54yqiVXkGgc8e00ad9uHX8Loa6Ysc0ezgCUl5klupWzy4E9KIKEJvQOFL3DrQF891KSqCI95QLQQldm41wYXVsSSz6Fg9AEJLn2ZOibsSJEwCKuOoEJWBeItGrjIB6YOR9dq%2FC0y2kjIxSTsObtTYdN4dcofDULzYWJF%2BRUIiQtY9yt1Y7g4HJszjRXpQnNtEU%2BI3Alxq09J9SR2Z8hC%2Fq48mc0MOLU5wcgI04i8CQgNPtr9ismzcT5hq3fOb6TZUPaIaMKzTZFLnqKZhjQwCfb1WT2Q6EMgMwi5b4yQY6pgGR%2F1FOrGEhgTpskQHga7BkTvmO%2BikKvJTEVKLtqmFTe7Z%2BET%2BXpn0JJ6hpjekHf0j972CHbzaAjF2GWylbK%2FGjloP0fL79zU0JRthXKStSVs7a9Xp1nnYniCDHvYNjd%2Fl8bxyuN2afzEOaQ5nJJpv%2FtDzAxKsBbwSOgifLtebwAYVqfR9QyBplXHatDMZTVEfo%2FKLqAOBiHynns5azAHUkfCKuw5dg&X-Amz-Signature=3769df521a2dc544f29fde1a8728dd2d93404931d90e645e63024355e966e390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU7MVUV2%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfPJIPykj7TIlpkUzajvTFPKCcsX3qnMP7JyX0MwsUmAiAKKlf6WFyYaCMTjbm7R3ITQBqhfm3R3A8iu0XC%2FsoxGCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMd%2FWHIv2rS027rCz%2FKtwDkOoRMxi743aItQWUtghVnzMpugcKr0PAVm71IFIbBYII%2FrELDOvqiDNr0daFlJ1VE3dHr1ReDFxrJvbLFDt2%2BMBSzL2YHQsvp8K07l5OhWYg8I0POJfDZUIp%2FAuiUBVHY85arGaSQzlQa3WQh9p77UelS9Xc8MCash6IgvUn1PzIsrd43go7RqYn4cXxU35bbVLfZ28ucBuobVg6AJha2WpgukpiyAxCyq0HrRPGUGJ69tABPpN%2FHQx%2FK4%2Bnxx4T40adKiaqGp3H5vnaMpAFwsbGOc%2F%2Bfmk1hjPWNCoIeiBgjCxyUckdv9q484J7Ahmi7riFbQUEu1VgycOhJOraxirCdu54yqiVXkGgc8e00ad9uHX8Loa6Ysc0ezgCUl5klupWzy4E9KIKEJvQOFL3DrQF891KSqCI95QLQQldm41wYXVsSSz6Fg9AEJLn2ZOibsSJEwCKuOoEJWBeItGrjIB6YOR9dq%2FC0y2kjIxSTsObtTYdN4dcofDULzYWJF%2BRUIiQtY9yt1Y7g4HJszjRXpQnNtEU%2BI3Alxq09J9SR2Z8hC%2Fq48mc0MOLU5wcgI04i8CQgNPtr9ismzcT5hq3fOb6TZUPaIaMKzTZFLnqKZhjQwCfb1WT2Q6EMgMwi5b4yQY6pgGR%2F1FOrGEhgTpskQHga7BkTvmO%2BikKvJTEVKLtqmFTe7Z%2BET%2BXpn0JJ6hpjekHf0j972CHbzaAjF2GWylbK%2FGjloP0fL79zU0JRthXKStSVs7a9Xp1nnYniCDHvYNjd%2Fl8bxyuN2afzEOaQ5nJJpv%2FtDzAxKsBbwSOgifLtebwAYVqfR9QyBplXHatDMZTVEfo%2FKLqAOBiHynns5azAHUkfCKuw5dg&X-Amz-Signature=bc99cbe446a12a3c9c8a3f20a5655598e4412735fae36593512612fefec657a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU7MVUV2%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDfPJIPykj7TIlpkUzajvTFPKCcsX3qnMP7JyX0MwsUmAiAKKlf6WFyYaCMTjbm7R3ITQBqhfm3R3A8iu0XC%2FsoxGCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMd%2FWHIv2rS027rCz%2FKtwDkOoRMxi743aItQWUtghVnzMpugcKr0PAVm71IFIbBYII%2FrELDOvqiDNr0daFlJ1VE3dHr1ReDFxrJvbLFDt2%2BMBSzL2YHQsvp8K07l5OhWYg8I0POJfDZUIp%2FAuiUBVHY85arGaSQzlQa3WQh9p77UelS9Xc8MCash6IgvUn1PzIsrd43go7RqYn4cXxU35bbVLfZ28ucBuobVg6AJha2WpgukpiyAxCyq0HrRPGUGJ69tABPpN%2FHQx%2FK4%2Bnxx4T40adKiaqGp3H5vnaMpAFwsbGOc%2F%2Bfmk1hjPWNCoIeiBgjCxyUckdv9q484J7Ahmi7riFbQUEu1VgycOhJOraxirCdu54yqiVXkGgc8e00ad9uHX8Loa6Ysc0ezgCUl5klupWzy4E9KIKEJvQOFL3DrQF891KSqCI95QLQQldm41wYXVsSSz6Fg9AEJLn2ZOibsSJEwCKuOoEJWBeItGrjIB6YOR9dq%2FC0y2kjIxSTsObtTYdN4dcofDULzYWJF%2BRUIiQtY9yt1Y7g4HJszjRXpQnNtEU%2BI3Alxq09J9SR2Z8hC%2Fq48mc0MOLU5wcgI04i8CQgNPtr9ismzcT5hq3fOb6TZUPaIaMKzTZFLnqKZhjQwCfb1WT2Q6EMgMwi5b4yQY6pgGR%2F1FOrGEhgTpskQHga7BkTvmO%2BikKvJTEVKLtqmFTe7Z%2BET%2BXpn0JJ6hpjekHf0j972CHbzaAjF2GWylbK%2FGjloP0fL79zU0JRthXKStSVs7a9Xp1nnYniCDHvYNjd%2Fl8bxyuN2afzEOaQ5nJJpv%2FtDzAxKsBbwSOgifLtebwAYVqfR9QyBplXHatDMZTVEfo%2FKLqAOBiHynns5azAHUkfCKuw5dg&X-Amz-Signature=6f9da0c9a667263f2fb5ee232178081dfcb1493974e1cbd72cbe3b8d118db1e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
