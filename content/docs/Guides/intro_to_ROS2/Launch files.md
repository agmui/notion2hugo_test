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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGJ5BRJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCAZgdW7FCJnRnwVjx%2BQ0IbMP%2FOEI5Wyvz9vUchjJeYcQIgBtUYqqRtihwCjlhq3Oa10iMfHL0s8%2FpF1eKjWBdg%2BpMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCLll72OVDtw5VBhqyrcAyFmTX%2BTS8xQiv6tlELiOd%2BMU98FxCSOWUmSd5Kb%2BDzD0DpRlYsZ6SF4m1M9o0tBoLYwWUartni3P8hABinx1mJMNp%2FkfHxfKktJ0k6%2ButTceDNyweCGa9ELMhI3KPVuBfyW%2BPgm05OKJ%2F4Qp%2FZQxZ8bmyugfR%2FzvkI%2FT5OJkw5LJmWwbRzsGx45q7ogW62na%2BhoIkmilKElu72hEDJJp5JrFEQdW1jXOPjBWWpXsyKeE2g82d7HKCpcqa1uoKn%2BJjB%2BdYSHP4tUFBp6zagj52mO5W3WVH4cBI0MzZ4XI9rKQrnczdsraDFlSjYVntU1esVZgzdKqWCHRIxdI98NOsPan%2BYeubP69ot4EhRKX7vQoZvgYcKppg2do5pUAiwrMVZ%2FqSN8NLCDPT3Q6La7s8%2FcPlrDhr7ydc%2BTBbi9uB37Sh7iWPODyz3KYZyitGVcwtoycBuwOBmwNR6IKJDQdPNlLY%2B5adVAbZo2UrARUQ%2FTRs2wC0qF4EKQaHheaOTU0qFm4V%2B13EYm1MeKvtpCOX0ewNEfAxXNH6jo9PsQRK79Ye9FmucMkuHW%2FgA0WXPBKxbaRFzjX38Ym0Nr45nacT71YxakfFM06mtkuvaXAs2siTvxxfQWYm9j1nmnMKeM%2BcQGOqUBt4FtBu%2FVGWnt12MGjI2QDfbTu6MhGnZ%2Ft7q0hykQXJTek7vy7L2j5kSo2l0QMeMHw07D%2FuE2I5lMg2aBxSlmhpl5Oxd22CMoVQkfqqasqB7mtWeKtz4wwmTYUJAPN8K%2F%2FI7qV1P0f2KCAKbzkJIwz46Muser4V0bUX6W15Uva14F6jzMLRyfWI325zEjF4AiMvpD8ahVYZb64uj0DclYP9DbRehM&X-Amz-Signature=f9ebf3b30430845b1f0049991214c3ec07b37d2c2fdf4021f8c1f96d9d9fb02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGJ5BRJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCAZgdW7FCJnRnwVjx%2BQ0IbMP%2FOEI5Wyvz9vUchjJeYcQIgBtUYqqRtihwCjlhq3Oa10iMfHL0s8%2FpF1eKjWBdg%2BpMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCLll72OVDtw5VBhqyrcAyFmTX%2BTS8xQiv6tlELiOd%2BMU98FxCSOWUmSd5Kb%2BDzD0DpRlYsZ6SF4m1M9o0tBoLYwWUartni3P8hABinx1mJMNp%2FkfHxfKktJ0k6%2ButTceDNyweCGa9ELMhI3KPVuBfyW%2BPgm05OKJ%2F4Qp%2FZQxZ8bmyugfR%2FzvkI%2FT5OJkw5LJmWwbRzsGx45q7ogW62na%2BhoIkmilKElu72hEDJJp5JrFEQdW1jXOPjBWWpXsyKeE2g82d7HKCpcqa1uoKn%2BJjB%2BdYSHP4tUFBp6zagj52mO5W3WVH4cBI0MzZ4XI9rKQrnczdsraDFlSjYVntU1esVZgzdKqWCHRIxdI98NOsPan%2BYeubP69ot4EhRKX7vQoZvgYcKppg2do5pUAiwrMVZ%2FqSN8NLCDPT3Q6La7s8%2FcPlrDhr7ydc%2BTBbi9uB37Sh7iWPODyz3KYZyitGVcwtoycBuwOBmwNR6IKJDQdPNlLY%2B5adVAbZo2UrARUQ%2FTRs2wC0qF4EKQaHheaOTU0qFm4V%2B13EYm1MeKvtpCOX0ewNEfAxXNH6jo9PsQRK79Ye9FmucMkuHW%2FgA0WXPBKxbaRFzjX38Ym0Nr45nacT71YxakfFM06mtkuvaXAs2siTvxxfQWYm9j1nmnMKeM%2BcQGOqUBt4FtBu%2FVGWnt12MGjI2QDfbTu6MhGnZ%2Ft7q0hykQXJTek7vy7L2j5kSo2l0QMeMHw07D%2FuE2I5lMg2aBxSlmhpl5Oxd22CMoVQkfqqasqB7mtWeKtz4wwmTYUJAPN8K%2F%2FI7qV1P0f2KCAKbzkJIwz46Muser4V0bUX6W15Uva14F6jzMLRyfWI325zEjF4AiMvpD8ahVYZb64uj0DclYP9DbRehM&X-Amz-Signature=e3bd3eb488079af2d64cf57aa23099e0479be9785351ba45235ebdfc77be1137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTGJ5BRJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCAZgdW7FCJnRnwVjx%2BQ0IbMP%2FOEI5Wyvz9vUchjJeYcQIgBtUYqqRtihwCjlhq3Oa10iMfHL0s8%2FpF1eKjWBdg%2BpMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDCLll72OVDtw5VBhqyrcAyFmTX%2BTS8xQiv6tlELiOd%2BMU98FxCSOWUmSd5Kb%2BDzD0DpRlYsZ6SF4m1M9o0tBoLYwWUartni3P8hABinx1mJMNp%2FkfHxfKktJ0k6%2ButTceDNyweCGa9ELMhI3KPVuBfyW%2BPgm05OKJ%2F4Qp%2FZQxZ8bmyugfR%2FzvkI%2FT5OJkw5LJmWwbRzsGx45q7ogW62na%2BhoIkmilKElu72hEDJJp5JrFEQdW1jXOPjBWWpXsyKeE2g82d7HKCpcqa1uoKn%2BJjB%2BdYSHP4tUFBp6zagj52mO5W3WVH4cBI0MzZ4XI9rKQrnczdsraDFlSjYVntU1esVZgzdKqWCHRIxdI98NOsPan%2BYeubP69ot4EhRKX7vQoZvgYcKppg2do5pUAiwrMVZ%2FqSN8NLCDPT3Q6La7s8%2FcPlrDhr7ydc%2BTBbi9uB37Sh7iWPODyz3KYZyitGVcwtoycBuwOBmwNR6IKJDQdPNlLY%2B5adVAbZo2UrARUQ%2FTRs2wC0qF4EKQaHheaOTU0qFm4V%2B13EYm1MeKvtpCOX0ewNEfAxXNH6jo9PsQRK79Ye9FmucMkuHW%2FgA0WXPBKxbaRFzjX38Ym0Nr45nacT71YxakfFM06mtkuvaXAs2siTvxxfQWYm9j1nmnMKeM%2BcQGOqUBt4FtBu%2FVGWnt12MGjI2QDfbTu6MhGnZ%2Ft7q0hykQXJTek7vy7L2j5kSo2l0QMeMHw07D%2FuE2I5lMg2aBxSlmhpl5Oxd22CMoVQkfqqasqB7mtWeKtz4wwmTYUJAPN8K%2F%2FI7qV1P0f2KCAKbzkJIwz46Muser4V0bUX6W15Uva14F6jzMLRyfWI325zEjF4AiMvpD8ahVYZb64uj0DclYP9DbRehM&X-Amz-Signature=ff91330b13a7d230a4f314442a93fbeca0ba5cf638540c684bb6cd8cf502384c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
