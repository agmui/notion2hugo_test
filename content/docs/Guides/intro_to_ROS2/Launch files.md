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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZVVE2E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnVy3ei7Pezzdik%2BbZag73bjFNxU3Jgk5a8v3q1pw6aAiBO1968RCqjzztwsffJnT8Wr4ECq2CYzrNDuVVJXWYt%2BCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2nelOfLs5w6VxS%2FyKtwD6QF2OnMmai%2Bt4awZoQo3eyuRu8XKeT9mfQPuIXWqwKMhtSjZqfi2WT%2Br26YwJUwJb7KsgQ0ZHSdgFdwndl2%2BCBGFs3mdlQSK0kxNFoLx4Ue0oaWrg0agkRsKM8u0Ox2B1w9PBJJGAwjYNApnMg7pK45D4sKzsR2RaezeDkVd5jrrg6AuKNk0M2ei1pQ1NpEWAaUMbV%2BPhcElX78dhz8AguRhv%2FB5%2B%2B44HWdmuHkIwYMchN%2FHl9QPhafpYjarY0YB6kMJve51SfXNO%2BzPTtnmceO0nkOy%2FEv8FwGLh3jX5cBr5BZT8ErIonHgHcfQPzPNrFgS0dwWo6cbt41gaN1jkHZ9xkvKjPEGIc9bz6Z2iGZLgVFRC0hckAPRTMCNcdVtdDTtPnxI1hFsxgyz9oZGRYZBKUO9zmi6%2FrrWgIiwQ4O1%2FpWD5cjCWZoKmi6ir8WLfbxBrG3X0oypUu7E29p1KYFf%2Bmrr%2Bd7sMmPin%2Bv%2BaqG5b7OI20YV90LXPpFUIZ5Dc5RU4MF3JQAOz4K1LaXU8ZuEXi5ucAb7dWU6%2BXptbLGFOn2M%2FjuGv2g97Tv%2F3WrV%2FkypWs5PlzFpsBYQky3iW1IxsIt%2BaIBOiFbWqOcZV7KTvg%2BtthvQMAevhsww1LyhwQY6pgEsMTOBh2tsuEPVTm4iu2hjaBkktknIAUCtpHfAsLqJcDVKkXHQhH5g%2BoD6FCOURUEhhneBs7Xa7iuQgwCHKlGXMON2Gm7R2zrLp2W5Uf%2BPPYb5fHkUjVmIwE7zXICTbHrEJo6wsBRolDu5urE5iw%2FLKpkuNqFDVsOyXK0GGBX1IALfQRzpsjYMstdRd1xyFDbmKwZX%2FSXEH%2FK7OGIIUfCeTvP8vZLI&X-Amz-Signature=b1f8c8a87b2e0710d2676701e17c750418aec93a99757c35f729d447ff703390&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZVVE2E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnVy3ei7Pezzdik%2BbZag73bjFNxU3Jgk5a8v3q1pw6aAiBO1968RCqjzztwsffJnT8Wr4ECq2CYzrNDuVVJXWYt%2BCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2nelOfLs5w6VxS%2FyKtwD6QF2OnMmai%2Bt4awZoQo3eyuRu8XKeT9mfQPuIXWqwKMhtSjZqfi2WT%2Br26YwJUwJb7KsgQ0ZHSdgFdwndl2%2BCBGFs3mdlQSK0kxNFoLx4Ue0oaWrg0agkRsKM8u0Ox2B1w9PBJJGAwjYNApnMg7pK45D4sKzsR2RaezeDkVd5jrrg6AuKNk0M2ei1pQ1NpEWAaUMbV%2BPhcElX78dhz8AguRhv%2FB5%2B%2B44HWdmuHkIwYMchN%2FHl9QPhafpYjarY0YB6kMJve51SfXNO%2BzPTtnmceO0nkOy%2FEv8FwGLh3jX5cBr5BZT8ErIonHgHcfQPzPNrFgS0dwWo6cbt41gaN1jkHZ9xkvKjPEGIc9bz6Z2iGZLgVFRC0hckAPRTMCNcdVtdDTtPnxI1hFsxgyz9oZGRYZBKUO9zmi6%2FrrWgIiwQ4O1%2FpWD5cjCWZoKmi6ir8WLfbxBrG3X0oypUu7E29p1KYFf%2Bmrr%2Bd7sMmPin%2Bv%2BaqG5b7OI20YV90LXPpFUIZ5Dc5RU4MF3JQAOz4K1LaXU8ZuEXi5ucAb7dWU6%2BXptbLGFOn2M%2FjuGv2g97Tv%2F3WrV%2FkypWs5PlzFpsBYQky3iW1IxsIt%2BaIBOiFbWqOcZV7KTvg%2BtthvQMAevhsww1LyhwQY6pgEsMTOBh2tsuEPVTm4iu2hjaBkktknIAUCtpHfAsLqJcDVKkXHQhH5g%2BoD6FCOURUEhhneBs7Xa7iuQgwCHKlGXMON2Gm7R2zrLp2W5Uf%2BPPYb5fHkUjVmIwE7zXICTbHrEJo6wsBRolDu5urE5iw%2FLKpkuNqFDVsOyXK0GGBX1IALfQRzpsjYMstdRd1xyFDbmKwZX%2FSXEH%2FK7OGIIUfCeTvP8vZLI&X-Amz-Signature=bcfa9201188baec8c67726308e3e5564f371be715d95e72f83d4efe13ea15958&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZVVE2E%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnVy3ei7Pezzdik%2BbZag73bjFNxU3Jgk5a8v3q1pw6aAiBO1968RCqjzztwsffJnT8Wr4ECq2CYzrNDuVVJXWYt%2BCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2nelOfLs5w6VxS%2FyKtwD6QF2OnMmai%2Bt4awZoQo3eyuRu8XKeT9mfQPuIXWqwKMhtSjZqfi2WT%2Br26YwJUwJb7KsgQ0ZHSdgFdwndl2%2BCBGFs3mdlQSK0kxNFoLx4Ue0oaWrg0agkRsKM8u0Ox2B1w9PBJJGAwjYNApnMg7pK45D4sKzsR2RaezeDkVd5jrrg6AuKNk0M2ei1pQ1NpEWAaUMbV%2BPhcElX78dhz8AguRhv%2FB5%2B%2B44HWdmuHkIwYMchN%2FHl9QPhafpYjarY0YB6kMJve51SfXNO%2BzPTtnmceO0nkOy%2FEv8FwGLh3jX5cBr5BZT8ErIonHgHcfQPzPNrFgS0dwWo6cbt41gaN1jkHZ9xkvKjPEGIc9bz6Z2iGZLgVFRC0hckAPRTMCNcdVtdDTtPnxI1hFsxgyz9oZGRYZBKUO9zmi6%2FrrWgIiwQ4O1%2FpWD5cjCWZoKmi6ir8WLfbxBrG3X0oypUu7E29p1KYFf%2Bmrr%2Bd7sMmPin%2Bv%2BaqG5b7OI20YV90LXPpFUIZ5Dc5RU4MF3JQAOz4K1LaXU8ZuEXi5ucAb7dWU6%2BXptbLGFOn2M%2FjuGv2g97Tv%2F3WrV%2FkypWs5PlzFpsBYQky3iW1IxsIt%2BaIBOiFbWqOcZV7KTvg%2BtthvQMAevhsww1LyhwQY6pgEsMTOBh2tsuEPVTm4iu2hjaBkktknIAUCtpHfAsLqJcDVKkXHQhH5g%2BoD6FCOURUEhhneBs7Xa7iuQgwCHKlGXMON2Gm7R2zrLp2W5Uf%2BPPYb5fHkUjVmIwE7zXICTbHrEJo6wsBRolDu5urE5iw%2FLKpkuNqFDVsOyXK0GGBX1IALfQRzpsjYMstdRd1xyFDbmKwZX%2FSXEH%2FK7OGIIUfCeTvP8vZLI&X-Amz-Signature=827fbb8c0c4cd33dd9021253e57414dd2a292debcffaab6ef69ac3b87aeb4510&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
