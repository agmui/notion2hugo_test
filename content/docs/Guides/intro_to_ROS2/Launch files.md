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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOTFEO6Z%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUoaAJr3sznVT59pX6BCdLDZDt%2F%2Fzkqnit%2F85fMjzNZAiEAsQQ4yyALZTEwPPCGG8w2JE1kqfCCTiQES0j0Qm%2Bv9F0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHF8%2B9RzuIbkc0tC0CrcAzWuBZ6PzV0DNRdmnlplhZ%2F9IQXnFdiAFI6yuUjf18ujwWB91RQxnPnzRrNSv1Oi%2Fg3QEwxfyivB7%2BtQpdO6FChjIpeKmL57aXhw0RVOwgtLFVUfmphu8sO0MLoJniN8HZ4cZJx%2BS9VQSFydphjiKAtw%2FLURG3wK39%2B34X8Wc77W4k0%2BbrtQd0vh29Fq5sjj2%2FfzN5ube%2BibhT9AdtqMW9uNUlyB%2BmKcJmanxH7U3W%2BJy0Fs8PEuvtlBZP9dR%2BECPE08tnNBL6TvuzHitkytAamb%2BgP%2BNRRn%2BCJVzRae1Q0dSF3MLlEXYksA63GNpCqH9mTjyWp7GErc%2F5VKSmumSu5bzke2zSpBkN7IF8B2JNt2MFreUGkcpi51S52WeSAKA%2FtLhErCVl%2FsLdEhw%2FMd3HPu%2BkcyzkoQl%2FhgifuG6zrfRmt9a6xnvIjowdn7%2BwdzGlMu0ToB1NmESz%2BXHzQ%2FU0RVCHRjjog9WEuJ8eOyJuw1gwDnaMCFTGTKKjyuDS77k9jI0uOfxyRlkv1QQbGiNrggRVjtQ8%2Fu2u8%2B46XwlmixsxvVP%2B5yTHCjDT%2BQz0h78vCY6esSvwqQuOtKjC%2BSI53UjgFg5w%2BQfsMgkaBddDhpJUhQRLHlv%2BvJkXu%2BMO32388GOqUBHrjk0iAq3z5I6BzjwrRRwF9fKpeCgRLDsfMHM3Niq9sw346P4oGtnMkTmMDMeqX8emqb80e%2BEyLBYJpemAzPMjvrjBKmKVpbETacxWaaJVnRc8jxMwCroe3okToGhaL3iPBqM%2BLtom5O4jw8lMNjyaX2HhAYLTrx%2BS%2FZWtrFFvJ2qH63RXr5zFSO7rb5N%2B9osi57xkmpVFm4ob9HlAf2KscsdLG6&X-Amz-Signature=97e2e75f485813507e992f222c1c6332d25c93e532ffc12a3723ce8d7d5fbc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOTFEO6Z%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUoaAJr3sznVT59pX6BCdLDZDt%2F%2Fzkqnit%2F85fMjzNZAiEAsQQ4yyALZTEwPPCGG8w2JE1kqfCCTiQES0j0Qm%2Bv9F0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHF8%2B9RzuIbkc0tC0CrcAzWuBZ6PzV0DNRdmnlplhZ%2F9IQXnFdiAFI6yuUjf18ujwWB91RQxnPnzRrNSv1Oi%2Fg3QEwxfyivB7%2BtQpdO6FChjIpeKmL57aXhw0RVOwgtLFVUfmphu8sO0MLoJniN8HZ4cZJx%2BS9VQSFydphjiKAtw%2FLURG3wK39%2B34X8Wc77W4k0%2BbrtQd0vh29Fq5sjj2%2FfzN5ube%2BibhT9AdtqMW9uNUlyB%2BmKcJmanxH7U3W%2BJy0Fs8PEuvtlBZP9dR%2BECPE08tnNBL6TvuzHitkytAamb%2BgP%2BNRRn%2BCJVzRae1Q0dSF3MLlEXYksA63GNpCqH9mTjyWp7GErc%2F5VKSmumSu5bzke2zSpBkN7IF8B2JNt2MFreUGkcpi51S52WeSAKA%2FtLhErCVl%2FsLdEhw%2FMd3HPu%2BkcyzkoQl%2FhgifuG6zrfRmt9a6xnvIjowdn7%2BwdzGlMu0ToB1NmESz%2BXHzQ%2FU0RVCHRjjog9WEuJ8eOyJuw1gwDnaMCFTGTKKjyuDS77k9jI0uOfxyRlkv1QQbGiNrggRVjtQ8%2Fu2u8%2B46XwlmixsxvVP%2B5yTHCjDT%2BQz0h78vCY6esSvwqQuOtKjC%2BSI53UjgFg5w%2BQfsMgkaBddDhpJUhQRLHlv%2BvJkXu%2BMO32388GOqUBHrjk0iAq3z5I6BzjwrRRwF9fKpeCgRLDsfMHM3Niq9sw346P4oGtnMkTmMDMeqX8emqb80e%2BEyLBYJpemAzPMjvrjBKmKVpbETacxWaaJVnRc8jxMwCroe3okToGhaL3iPBqM%2BLtom5O4jw8lMNjyaX2HhAYLTrx%2BS%2FZWtrFFvJ2qH63RXr5zFSO7rb5N%2B9osi57xkmpVFm4ob9HlAf2KscsdLG6&X-Amz-Signature=39de701c97afb3bcbe0d3bebc68cd1532fb9805e488e6c9a04fc37f58d901a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOTFEO6Z%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUoaAJr3sznVT59pX6BCdLDZDt%2F%2Fzkqnit%2F85fMjzNZAiEAsQQ4yyALZTEwPPCGG8w2JE1kqfCCTiQES0j0Qm%2Bv9F0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHF8%2B9RzuIbkc0tC0CrcAzWuBZ6PzV0DNRdmnlplhZ%2F9IQXnFdiAFI6yuUjf18ujwWB91RQxnPnzRrNSv1Oi%2Fg3QEwxfyivB7%2BtQpdO6FChjIpeKmL57aXhw0RVOwgtLFVUfmphu8sO0MLoJniN8HZ4cZJx%2BS9VQSFydphjiKAtw%2FLURG3wK39%2B34X8Wc77W4k0%2BbrtQd0vh29Fq5sjj2%2FfzN5ube%2BibhT9AdtqMW9uNUlyB%2BmKcJmanxH7U3W%2BJy0Fs8PEuvtlBZP9dR%2BECPE08tnNBL6TvuzHitkytAamb%2BgP%2BNRRn%2BCJVzRae1Q0dSF3MLlEXYksA63GNpCqH9mTjyWp7GErc%2F5VKSmumSu5bzke2zSpBkN7IF8B2JNt2MFreUGkcpi51S52WeSAKA%2FtLhErCVl%2FsLdEhw%2FMd3HPu%2BkcyzkoQl%2FhgifuG6zrfRmt9a6xnvIjowdn7%2BwdzGlMu0ToB1NmESz%2BXHzQ%2FU0RVCHRjjog9WEuJ8eOyJuw1gwDnaMCFTGTKKjyuDS77k9jI0uOfxyRlkv1QQbGiNrggRVjtQ8%2Fu2u8%2B46XwlmixsxvVP%2B5yTHCjDT%2BQz0h78vCY6esSvwqQuOtKjC%2BSI53UjgFg5w%2BQfsMgkaBddDhpJUhQRLHlv%2BvJkXu%2BMO32388GOqUBHrjk0iAq3z5I6BzjwrRRwF9fKpeCgRLDsfMHM3Niq9sw346P4oGtnMkTmMDMeqX8emqb80e%2BEyLBYJpemAzPMjvrjBKmKVpbETacxWaaJVnRc8jxMwCroe3okToGhaL3iPBqM%2BLtom5O4jw8lMNjyaX2HhAYLTrx%2BS%2FZWtrFFvJ2qH63RXr5zFSO7rb5N%2B9osi57xkmpVFm4ob9HlAf2KscsdLG6&X-Amz-Signature=ee19538fb83b136ca9a482ed2af34cc3927812422a9a1889f07e990e6c54cd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
