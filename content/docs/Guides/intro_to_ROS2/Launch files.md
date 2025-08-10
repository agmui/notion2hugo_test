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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAR5WHU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAkII2%2Fqz%2FqC6m79SMTxf2GFS%2BKQr7XGa5MShOYDakWwIgDB2aup91xQC2DkPrey62d51VfmTm0v4yfGKkkQ98dBcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHipqUTlH2Hn1x4DZircA0D3IdVT32VKjR46S2%2F4iyh579o9Gavf1qB%2Be%2BYZWuAzfEEdIU3h5T6F1JLnF4Tp4cP67utwm%2Br8NmxGzQ6zAzWlvPIx67as2nwYKBgqD6hYHsyLcBjsUQe5ElDJ9ZKBQdZzAREk32ZVjJwFvRL8VMxDr5vH%2Fz80HpZuNgkmbuLmRaQQuj3rM8t%2F47IToWerzA%2FVz8G04HgEpLMM5s2k1mB9fx%2BwEIxeCLtuxx22hCTHZ7qtmH%2Fv3OWGOECspTC%2ByN2RVnXydRP6GkM9Q%2BUfi5HWG%2B3nyT0jZ6vzkpcq8F%2Bus5RWsA32o%2BTcbO4C1GCE4QWo2jFk0HzOdw9qhISVHoLCLML7LXJQndTlTV1doe4DcgqlA4yNV%2BbeJlOBGVzM2QjBnHFY5WCZsTgyZL9zi6Kjq0sw1TWjWVj5RtX78JeIwWi2d590DstmaBQER5AakCfSOU4EJfLkBxA8kDyex6S8NKAKLdRu1seGH9YZxo%2FO4ucgOJ6st1Rows%2Fk%2FKT9%2Fh49MTT4ea7ujPNTJoy3u2pKY0N27CxmqnKI0rIC51NSNIDy8f%2BeP8YskOjqseYqccGGrDI8Jo0wVa21PqewvBqcnWSil37ykAiQXukBx0WpIOJLZYR2AL4eTGPzMLS%2F4sQGOqUBjQvtZrwv7%2FYOtqmSWQ%2F%2Bo3LUawAgrDSaOqhMGrxxZv8Lq5qEYGw5zQ4ZzuS3GQOwXBG7UsXIBsX17oYOqtrfFmA674fwR9sqf9Ur0x4FHygUI%2BW08UqI6%2FztEmAxOUOwe%2FRySxPG%2F3V37uJetyf3uAWAPXvkwHGA0Vq7vEnJ8RNQ09nWgy7xIo%2F4eDt9lrovcawkVRhHqom4t01x7YvwvGAjBiW4&X-Amz-Signature=c145739a39ef2799ab911295d1c57ee9c65799ef3ab48329893510f7022dc916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAR5WHU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAkII2%2Fqz%2FqC6m79SMTxf2GFS%2BKQr7XGa5MShOYDakWwIgDB2aup91xQC2DkPrey62d51VfmTm0v4yfGKkkQ98dBcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHipqUTlH2Hn1x4DZircA0D3IdVT32VKjR46S2%2F4iyh579o9Gavf1qB%2Be%2BYZWuAzfEEdIU3h5T6F1JLnF4Tp4cP67utwm%2Br8NmxGzQ6zAzWlvPIx67as2nwYKBgqD6hYHsyLcBjsUQe5ElDJ9ZKBQdZzAREk32ZVjJwFvRL8VMxDr5vH%2Fz80HpZuNgkmbuLmRaQQuj3rM8t%2F47IToWerzA%2FVz8G04HgEpLMM5s2k1mB9fx%2BwEIxeCLtuxx22hCTHZ7qtmH%2Fv3OWGOECspTC%2ByN2RVnXydRP6GkM9Q%2BUfi5HWG%2B3nyT0jZ6vzkpcq8F%2Bus5RWsA32o%2BTcbO4C1GCE4QWo2jFk0HzOdw9qhISVHoLCLML7LXJQndTlTV1doe4DcgqlA4yNV%2BbeJlOBGVzM2QjBnHFY5WCZsTgyZL9zi6Kjq0sw1TWjWVj5RtX78JeIwWi2d590DstmaBQER5AakCfSOU4EJfLkBxA8kDyex6S8NKAKLdRu1seGH9YZxo%2FO4ucgOJ6st1Rows%2Fk%2FKT9%2Fh49MTT4ea7ujPNTJoy3u2pKY0N27CxmqnKI0rIC51NSNIDy8f%2BeP8YskOjqseYqccGGrDI8Jo0wVa21PqewvBqcnWSil37ykAiQXukBx0WpIOJLZYR2AL4eTGPzMLS%2F4sQGOqUBjQvtZrwv7%2FYOtqmSWQ%2F%2Bo3LUawAgrDSaOqhMGrxxZv8Lq5qEYGw5zQ4ZzuS3GQOwXBG7UsXIBsX17oYOqtrfFmA674fwR9sqf9Ur0x4FHygUI%2BW08UqI6%2FztEmAxOUOwe%2FRySxPG%2F3V37uJetyf3uAWAPXvkwHGA0Vq7vEnJ8RNQ09nWgy7xIo%2F4eDt9lrovcawkVRhHqom4t01x7YvwvGAjBiW4&X-Amz-Signature=bfafae34db5b5cbb6d578461f0ea256e507032acac79d2976edaf33f6d968d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EAR5WHU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAkII2%2Fqz%2FqC6m79SMTxf2GFS%2BKQr7XGa5MShOYDakWwIgDB2aup91xQC2DkPrey62d51VfmTm0v4yfGKkkQ98dBcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHipqUTlH2Hn1x4DZircA0D3IdVT32VKjR46S2%2F4iyh579o9Gavf1qB%2Be%2BYZWuAzfEEdIU3h5T6F1JLnF4Tp4cP67utwm%2Br8NmxGzQ6zAzWlvPIx67as2nwYKBgqD6hYHsyLcBjsUQe5ElDJ9ZKBQdZzAREk32ZVjJwFvRL8VMxDr5vH%2Fz80HpZuNgkmbuLmRaQQuj3rM8t%2F47IToWerzA%2FVz8G04HgEpLMM5s2k1mB9fx%2BwEIxeCLtuxx22hCTHZ7qtmH%2Fv3OWGOECspTC%2ByN2RVnXydRP6GkM9Q%2BUfi5HWG%2B3nyT0jZ6vzkpcq8F%2Bus5RWsA32o%2BTcbO4C1GCE4QWo2jFk0HzOdw9qhISVHoLCLML7LXJQndTlTV1doe4DcgqlA4yNV%2BbeJlOBGVzM2QjBnHFY5WCZsTgyZL9zi6Kjq0sw1TWjWVj5RtX78JeIwWi2d590DstmaBQER5AakCfSOU4EJfLkBxA8kDyex6S8NKAKLdRu1seGH9YZxo%2FO4ucgOJ6st1Rows%2Fk%2FKT9%2Fh49MTT4ea7ujPNTJoy3u2pKY0N27CxmqnKI0rIC51NSNIDy8f%2BeP8YskOjqseYqccGGrDI8Jo0wVa21PqewvBqcnWSil37ykAiQXukBx0WpIOJLZYR2AL4eTGPzMLS%2F4sQGOqUBjQvtZrwv7%2FYOtqmSWQ%2F%2Bo3LUawAgrDSaOqhMGrxxZv8Lq5qEYGw5zQ4ZzuS3GQOwXBG7UsXIBsX17oYOqtrfFmA674fwR9sqf9Ur0x4FHygUI%2BW08UqI6%2FztEmAxOUOwe%2FRySxPG%2F3V37uJetyf3uAWAPXvkwHGA0Vq7vEnJ8RNQ09nWgy7xIo%2F4eDt9lrovcawkVRhHqom4t01x7YvwvGAjBiW4&X-Amz-Signature=a23a918be6a7f3ed16aabd928463005c43c1cdbad5e8526738ea0bbd649ec3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
