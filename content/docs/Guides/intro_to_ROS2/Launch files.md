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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLHNUAZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOTrP2C3jCGMxaVISYW7I1SpM2DUEtlN8Pj3QH00kBaAiBk9FQ2DN7uhbf%2FJuBiNCwUoakJasOtFIc%2FWgJhdIM6vSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZuAfJQlgd2h3YKCDKtwDX4d%2BT0OC%2F%2FgkiVsxkZlB9T2D3mEuU7lErEopKwZl4PylyIuItX0HvdVYpBgSBQRmJh3wUx9Dz0k%2Bba5hxEWzvcWCSQGgutODahzCMhhUjhhZOB%2Bj8XmDzPvctVXh8iDWq3edg6uNuwlQfa%2B8difCKou45XtOTa%2FzXaj%2F%2B4hRbzD05NG3iXuYbMgHIEC0%2BiE7IEFxxFmUo0W1zv4gdAk7E1uuvGz91HiqQwFDcSRb82vROKAGU4%2BG15wTza1Y98tsBUF8T87kaOm8x1zTSGQ25jXPkoni5Ih583r2x9oPgDeWKsMYBc3rY4g5wgpXKKs%2BampIFgX%2FGKUocq%2B3mnFxtTiR4nBJEIg0TiLaOKTavZw2BdZJ7uyn8TKV%2FisNcUrvPyIPCCNDYuhLu%2BSJSPpSkdG3OjHWywlpMYTSClT2lwgjRytrbj8LITrII2%2F9xGlf2dnmozayHOnBuafqvWw3mjwxWR5rkGRqoR%2FVrAEgGe2u0WcZH%2BV2ztdma7huqYVYU3wuwsEggnwMz0aQY63lboV%2FvnsjjiT0odxtoEfP7nan36tW%2BhEYQk2G5ZaQ5%2FHplliLJ6EUUgoDaaUBNRYvwHgRC6kvSu%2B36Qo%2Fwxvp26uhtLXAovy21FOSIRgwwsbxxAY6pgEvKjjbbnFCoqXyp%2BtQM5KojXnXOKKcziKTVlF8ag0jfW63E1RNEKGEXxlfBcE8a2TfpxMZhoGjwib4QeGF2P0zz3o6dbcCfchJ2ML%2BFILb0SsaQD4kJXknmmvfxQjsg7sZYL%2FioIGTPnH0HfJCvTSvJFirA8Sittp%2BwcYFAfvlhAl%2FJuOFbMo18rk%2F8Kr1nnAGXDz%2FH9Iw0XHE0IuttIgeI19lEdOC&X-Amz-Signature=3a6be6c66c09c66dcc471bc4fb8b40752dc5556cf991e819712d1250157a9751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLHNUAZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOTrP2C3jCGMxaVISYW7I1SpM2DUEtlN8Pj3QH00kBaAiBk9FQ2DN7uhbf%2FJuBiNCwUoakJasOtFIc%2FWgJhdIM6vSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZuAfJQlgd2h3YKCDKtwDX4d%2BT0OC%2F%2FgkiVsxkZlB9T2D3mEuU7lErEopKwZl4PylyIuItX0HvdVYpBgSBQRmJh3wUx9Dz0k%2Bba5hxEWzvcWCSQGgutODahzCMhhUjhhZOB%2Bj8XmDzPvctVXh8iDWq3edg6uNuwlQfa%2B8difCKou45XtOTa%2FzXaj%2F%2B4hRbzD05NG3iXuYbMgHIEC0%2BiE7IEFxxFmUo0W1zv4gdAk7E1uuvGz91HiqQwFDcSRb82vROKAGU4%2BG15wTza1Y98tsBUF8T87kaOm8x1zTSGQ25jXPkoni5Ih583r2x9oPgDeWKsMYBc3rY4g5wgpXKKs%2BampIFgX%2FGKUocq%2B3mnFxtTiR4nBJEIg0TiLaOKTavZw2BdZJ7uyn8TKV%2FisNcUrvPyIPCCNDYuhLu%2BSJSPpSkdG3OjHWywlpMYTSClT2lwgjRytrbj8LITrII2%2F9xGlf2dnmozayHOnBuafqvWw3mjwxWR5rkGRqoR%2FVrAEgGe2u0WcZH%2BV2ztdma7huqYVYU3wuwsEggnwMz0aQY63lboV%2FvnsjjiT0odxtoEfP7nan36tW%2BhEYQk2G5ZaQ5%2FHplliLJ6EUUgoDaaUBNRYvwHgRC6kvSu%2B36Qo%2Fwxvp26uhtLXAovy21FOSIRgwwsbxxAY6pgEvKjjbbnFCoqXyp%2BtQM5KojXnXOKKcziKTVlF8ag0jfW63E1RNEKGEXxlfBcE8a2TfpxMZhoGjwib4QeGF2P0zz3o6dbcCfchJ2ML%2BFILb0SsaQD4kJXknmmvfxQjsg7sZYL%2FioIGTPnH0HfJCvTSvJFirA8Sittp%2BwcYFAfvlhAl%2FJuOFbMo18rk%2F8Kr1nnAGXDz%2FH9Iw0XHE0IuttIgeI19lEdOC&X-Amz-Signature=f751ab8d8615d2cffeff02faaa92a5d2468c4874f71bb3540a261806e384b22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLHNUAZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOTrP2C3jCGMxaVISYW7I1SpM2DUEtlN8Pj3QH00kBaAiBk9FQ2DN7uhbf%2FJuBiNCwUoakJasOtFIc%2FWgJhdIM6vSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZuAfJQlgd2h3YKCDKtwDX4d%2BT0OC%2F%2FgkiVsxkZlB9T2D3mEuU7lErEopKwZl4PylyIuItX0HvdVYpBgSBQRmJh3wUx9Dz0k%2Bba5hxEWzvcWCSQGgutODahzCMhhUjhhZOB%2Bj8XmDzPvctVXh8iDWq3edg6uNuwlQfa%2B8difCKou45XtOTa%2FzXaj%2F%2B4hRbzD05NG3iXuYbMgHIEC0%2BiE7IEFxxFmUo0W1zv4gdAk7E1uuvGz91HiqQwFDcSRb82vROKAGU4%2BG15wTza1Y98tsBUF8T87kaOm8x1zTSGQ25jXPkoni5Ih583r2x9oPgDeWKsMYBc3rY4g5wgpXKKs%2BampIFgX%2FGKUocq%2B3mnFxtTiR4nBJEIg0TiLaOKTavZw2BdZJ7uyn8TKV%2FisNcUrvPyIPCCNDYuhLu%2BSJSPpSkdG3OjHWywlpMYTSClT2lwgjRytrbj8LITrII2%2F9xGlf2dnmozayHOnBuafqvWw3mjwxWR5rkGRqoR%2FVrAEgGe2u0WcZH%2BV2ztdma7huqYVYU3wuwsEggnwMz0aQY63lboV%2FvnsjjiT0odxtoEfP7nan36tW%2BhEYQk2G5ZaQ5%2FHplliLJ6EUUgoDaaUBNRYvwHgRC6kvSu%2B36Qo%2Fwxvp26uhtLXAovy21FOSIRgwwsbxxAY6pgEvKjjbbnFCoqXyp%2BtQM5KojXnXOKKcziKTVlF8ag0jfW63E1RNEKGEXxlfBcE8a2TfpxMZhoGjwib4QeGF2P0zz3o6dbcCfchJ2ML%2BFILb0SsaQD4kJXknmmvfxQjsg7sZYL%2FioIGTPnH0HfJCvTSvJFirA8Sittp%2BwcYFAfvlhAl%2FJuOFbMo18rk%2F8Kr1nnAGXDz%2FH9Iw0XHE0IuttIgeI19lEdOC&X-Amz-Signature=57bc09c000ec9aee35c808b24c6c0d05907bfc017d88afc25ccf0a719c097e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
