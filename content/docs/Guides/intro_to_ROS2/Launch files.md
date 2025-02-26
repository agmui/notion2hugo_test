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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXMBVOL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDRdwu8U4g2F4zct7iW0Mi%2BkShZOh2gbjNwCdZ6mT2QKAiBNEvXNXdDxC6NA0eVXU5D%2BvhXjP7YKLU2iNnQ0dTkhZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMiigkVi7%2FVLtSS1ShKtwDZn4I9Mmynp%2FzVj5EB%2FrNdMq2iGFVM0ISoHn%2BPU4U5LjVFU1M0ukKrXQNxpo2hBVUYFVvkEINZQCp%2Bb6Nvu%2FI%2BFGFPvv1bX2hCWEdqQAA2EG2Ox5GV3rAja6qrugBR3eGoM8VvWT6asR8Y4fLMDPZsa1BYp7Cm3GRdFyFlTiP%2FzACgabT3jx5vyQDmwqDjmIwOmCzjy2eScU%2F7sQ2mXx%2BmnjDcMsTekD%2BILocXMBm1sxZerOMjbmNcCeGm3i3M2TkvMqE5nDyhfHTnfJtEd1AhehFkrX1BRuC1MqrytVpjtJJM%2FPDeDPv5XN%2F6PGEo42SQjH9478BHdW%2FL0uQLhOytxDQzfpA5EkveQGC9aJIIM%2BYkdh5zulrT%2BjqX%2FiUQ108yy9jC3JpVvdnElGc5lVbr6lb%2Fm22gHX5ta0rlHmHCcQuhg%2FtPdh31OeWB0gR%2FN7u34tKnnoNedliIhDl5my%2FOv63WyKfCUEVPDvspQ85WQQHuC1GDTHRZi48neobiwRu5H19zSz7QP6W4s040LUqiDeFarbdm5u0HOsK4ENqJo6mGey8tUTACnQJCBAYPzkCWk5b0ygfDUO7C2a3zofv26KM1Tu4TkLKPJ52cXXEadUxxvVxI%2Bd%2FatYRQPYwsb35vQY6pgFVzXGxx0Zq8g%2FjGzQgOpgf6pA2%2FwaC2AlHIYLIYmlKRu%2B4XVRfQ%2Bw450S2686fKuZKXr%2F%2BgXJocaYYKg5kRjoAo%2Fh2fgyzGrKrhBkE8USfPvNvKxeVqtlHOwqVYmVVpbF4%2FyxPsRb6%2FIK%2FGTdIRezfqhFKQMgyKDj3F%2BYT%2BCRXBoUnXp36TS0Yb6DKiDNJ4LUk6dN9LRRn20nH7VaiylhHRH8%2FjGqk&X-Amz-Signature=7ce65edb7c770a26fe2cb1afaaf6c3a4d93f540ebe8defdaa3056101ec6e7d47&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXMBVOL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDRdwu8U4g2F4zct7iW0Mi%2BkShZOh2gbjNwCdZ6mT2QKAiBNEvXNXdDxC6NA0eVXU5D%2BvhXjP7YKLU2iNnQ0dTkhZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMiigkVi7%2FVLtSS1ShKtwDZn4I9Mmynp%2FzVj5EB%2FrNdMq2iGFVM0ISoHn%2BPU4U5LjVFU1M0ukKrXQNxpo2hBVUYFVvkEINZQCp%2Bb6Nvu%2FI%2BFGFPvv1bX2hCWEdqQAA2EG2Ox5GV3rAja6qrugBR3eGoM8VvWT6asR8Y4fLMDPZsa1BYp7Cm3GRdFyFlTiP%2FzACgabT3jx5vyQDmwqDjmIwOmCzjy2eScU%2F7sQ2mXx%2BmnjDcMsTekD%2BILocXMBm1sxZerOMjbmNcCeGm3i3M2TkvMqE5nDyhfHTnfJtEd1AhehFkrX1BRuC1MqrytVpjtJJM%2FPDeDPv5XN%2F6PGEo42SQjH9478BHdW%2FL0uQLhOytxDQzfpA5EkveQGC9aJIIM%2BYkdh5zulrT%2BjqX%2FiUQ108yy9jC3JpVvdnElGc5lVbr6lb%2Fm22gHX5ta0rlHmHCcQuhg%2FtPdh31OeWB0gR%2FN7u34tKnnoNedliIhDl5my%2FOv63WyKfCUEVPDvspQ85WQQHuC1GDTHRZi48neobiwRu5H19zSz7QP6W4s040LUqiDeFarbdm5u0HOsK4ENqJo6mGey8tUTACnQJCBAYPzkCWk5b0ygfDUO7C2a3zofv26KM1Tu4TkLKPJ52cXXEadUxxvVxI%2Bd%2FatYRQPYwsb35vQY6pgFVzXGxx0Zq8g%2FjGzQgOpgf6pA2%2FwaC2AlHIYLIYmlKRu%2B4XVRfQ%2Bw450S2686fKuZKXr%2F%2BgXJocaYYKg5kRjoAo%2Fh2fgyzGrKrhBkE8USfPvNvKxeVqtlHOwqVYmVVpbF4%2FyxPsRb6%2FIK%2FGTdIRezfqhFKQMgyKDj3F%2BYT%2BCRXBoUnXp36TS0Yb6DKiDNJ4LUk6dN9LRRn20nH7VaiylhHRH8%2FjGqk&X-Amz-Signature=95f1621e8455f4abd97840305bbca60c5393ad5d921311d3c5d234d8c9e1e3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXMBVOL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDRdwu8U4g2F4zct7iW0Mi%2BkShZOh2gbjNwCdZ6mT2QKAiBNEvXNXdDxC6NA0eVXU5D%2BvhXjP7YKLU2iNnQ0dTkhZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMiigkVi7%2FVLtSS1ShKtwDZn4I9Mmynp%2FzVj5EB%2FrNdMq2iGFVM0ISoHn%2BPU4U5LjVFU1M0ukKrXQNxpo2hBVUYFVvkEINZQCp%2Bb6Nvu%2FI%2BFGFPvv1bX2hCWEdqQAA2EG2Ox5GV3rAja6qrugBR3eGoM8VvWT6asR8Y4fLMDPZsa1BYp7Cm3GRdFyFlTiP%2FzACgabT3jx5vyQDmwqDjmIwOmCzjy2eScU%2F7sQ2mXx%2BmnjDcMsTekD%2BILocXMBm1sxZerOMjbmNcCeGm3i3M2TkvMqE5nDyhfHTnfJtEd1AhehFkrX1BRuC1MqrytVpjtJJM%2FPDeDPv5XN%2F6PGEo42SQjH9478BHdW%2FL0uQLhOytxDQzfpA5EkveQGC9aJIIM%2BYkdh5zulrT%2BjqX%2FiUQ108yy9jC3JpVvdnElGc5lVbr6lb%2Fm22gHX5ta0rlHmHCcQuhg%2FtPdh31OeWB0gR%2FN7u34tKnnoNedliIhDl5my%2FOv63WyKfCUEVPDvspQ85WQQHuC1GDTHRZi48neobiwRu5H19zSz7QP6W4s040LUqiDeFarbdm5u0HOsK4ENqJo6mGey8tUTACnQJCBAYPzkCWk5b0ygfDUO7C2a3zofv26KM1Tu4TkLKPJ52cXXEadUxxvVxI%2Bd%2FatYRQPYwsb35vQY6pgFVzXGxx0Zq8g%2FjGzQgOpgf6pA2%2FwaC2AlHIYLIYmlKRu%2B4XVRfQ%2Bw450S2686fKuZKXr%2F%2BgXJocaYYKg5kRjoAo%2Fh2fgyzGrKrhBkE8USfPvNvKxeVqtlHOwqVYmVVpbF4%2FyxPsRb6%2FIK%2FGTdIRezfqhFKQMgyKDj3F%2BYT%2BCRXBoUnXp36TS0Yb6DKiDNJ4LUk6dN9LRRn20nH7VaiylhHRH8%2FjGqk&X-Amz-Signature=437da631091958d6ea5e1e8da06b814ad653a1970566a1d050b905efcea24760&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
