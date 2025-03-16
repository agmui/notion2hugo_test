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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7RLY2VJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfEmGGPmuh%2B6%2FCoBlGlC6LoLCSIXBeZ2JztF1%2BT4DSxAiBMGPi2kkPisbDxz2zXX4gHgBZtAGq8PunbR5v%2BpRYX9ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMs68q8AkrzIxtH3LGKtwDeHTmG6mpi8GCigBaIqRe8%2FfeZ31gfvxE6jaPSY6CLDZehTTSfdyOCindT8NGVPd7A9d80GZ1SWrnLv7x9fdXBaOySYUWHHVsMBm5c2HQFDUAhj5QzEz8hvjE5ooDQoO7ywGwtK%2BrSi4ZA69URcwkQ9nXDPmupQZH347ODCBHgmBDBZTK3qvs25x6SCY9DQ5CdC1bsf0vjKgZ3Or5ULH98qTPa8Y2szdVW9Fq8S7HWxv5v%2BYo4YtJFeKHnTTnSZyNwtt76Mi3TbJGQzxleDhRoSt8nRM360VusVFlUw6k0zzJTv0bEfX9eUKAjlpN4Ww8OcsSMg8amTDxXoqgvcGxSbvYgDMIiTjBiY598wuhTiXxrgRkp0RiJI7AXWQ1X%2BTlATI2HVa4ogO38ETzpm%2FE5YYKF32XnfXMdaK5WReIjw4JroSWTlWt9HzK4e4tR4swaaeDEZHnnAvHGa8Eux0kzCBHQpMVruGQYq%2Ffrnd7GUHPsWNKqpy1xJGio6ks8f3yN%2Fb2Tmw5lG9o9rDPu6XBwOwTJELT6fAFa9S64PyU2IwQqgmUWLuQppZGgfcKb8PP9UJNKS%2B7MRPrSKHwLUGyOcyxzpXQd6dPtc9uI7Vjwo9K%2F8dvIxfKxci8pagw5t7bvgY6pgEhcIucOr61OrZL8aaxnRvnXqFJMC03K%2FbD8kvyP6Ro2Vbh7uCaxCM5Qvvb5KTo2SbZqjKLMGMyivL9mhd4zI%2FQH8%2BVBlc%2B0EVWbBeP%2BeNekD7V3fLrDNaUom%2FNJh5H%2FpEyqcQw%2BnQDWnuUoHJVYv8RAnDuJ0XZSKEQQyGcORCLgkBJfD2rvBhxYVVL8gD7qV7nJlGWcXsSiOcWH9Gw1PgzOtHJjUZF&X-Amz-Signature=f780e716cefcd9e6c5358570d693dc57a15c97d52d6eb23e90fcc65ff9a9df1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7RLY2VJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfEmGGPmuh%2B6%2FCoBlGlC6LoLCSIXBeZ2JztF1%2BT4DSxAiBMGPi2kkPisbDxz2zXX4gHgBZtAGq8PunbR5v%2BpRYX9ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMs68q8AkrzIxtH3LGKtwDeHTmG6mpi8GCigBaIqRe8%2FfeZ31gfvxE6jaPSY6CLDZehTTSfdyOCindT8NGVPd7A9d80GZ1SWrnLv7x9fdXBaOySYUWHHVsMBm5c2HQFDUAhj5QzEz8hvjE5ooDQoO7ywGwtK%2BrSi4ZA69URcwkQ9nXDPmupQZH347ODCBHgmBDBZTK3qvs25x6SCY9DQ5CdC1bsf0vjKgZ3Or5ULH98qTPa8Y2szdVW9Fq8S7HWxv5v%2BYo4YtJFeKHnTTnSZyNwtt76Mi3TbJGQzxleDhRoSt8nRM360VusVFlUw6k0zzJTv0bEfX9eUKAjlpN4Ww8OcsSMg8amTDxXoqgvcGxSbvYgDMIiTjBiY598wuhTiXxrgRkp0RiJI7AXWQ1X%2BTlATI2HVa4ogO38ETzpm%2FE5YYKF32XnfXMdaK5WReIjw4JroSWTlWt9HzK4e4tR4swaaeDEZHnnAvHGa8Eux0kzCBHQpMVruGQYq%2Ffrnd7GUHPsWNKqpy1xJGio6ks8f3yN%2Fb2Tmw5lG9o9rDPu6XBwOwTJELT6fAFa9S64PyU2IwQqgmUWLuQppZGgfcKb8PP9UJNKS%2B7MRPrSKHwLUGyOcyxzpXQd6dPtc9uI7Vjwo9K%2F8dvIxfKxci8pagw5t7bvgY6pgEhcIucOr61OrZL8aaxnRvnXqFJMC03K%2FbD8kvyP6Ro2Vbh7uCaxCM5Qvvb5KTo2SbZqjKLMGMyivL9mhd4zI%2FQH8%2BVBlc%2B0EVWbBeP%2BeNekD7V3fLrDNaUom%2FNJh5H%2FpEyqcQw%2BnQDWnuUoHJVYv8RAnDuJ0XZSKEQQyGcORCLgkBJfD2rvBhxYVVL8gD7qV7nJlGWcXsSiOcWH9Gw1PgzOtHJjUZF&X-Amz-Signature=80240678d8554952dc539624ed95ab64adb15da398e2ef5e5633d6c5161793bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7RLY2VJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfEmGGPmuh%2B6%2FCoBlGlC6LoLCSIXBeZ2JztF1%2BT4DSxAiBMGPi2kkPisbDxz2zXX4gHgBZtAGq8PunbR5v%2BpRYX9ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMs68q8AkrzIxtH3LGKtwDeHTmG6mpi8GCigBaIqRe8%2FfeZ31gfvxE6jaPSY6CLDZehTTSfdyOCindT8NGVPd7A9d80GZ1SWrnLv7x9fdXBaOySYUWHHVsMBm5c2HQFDUAhj5QzEz8hvjE5ooDQoO7ywGwtK%2BrSi4ZA69URcwkQ9nXDPmupQZH347ODCBHgmBDBZTK3qvs25x6SCY9DQ5CdC1bsf0vjKgZ3Or5ULH98qTPa8Y2szdVW9Fq8S7HWxv5v%2BYo4YtJFeKHnTTnSZyNwtt76Mi3TbJGQzxleDhRoSt8nRM360VusVFlUw6k0zzJTv0bEfX9eUKAjlpN4Ww8OcsSMg8amTDxXoqgvcGxSbvYgDMIiTjBiY598wuhTiXxrgRkp0RiJI7AXWQ1X%2BTlATI2HVa4ogO38ETzpm%2FE5YYKF32XnfXMdaK5WReIjw4JroSWTlWt9HzK4e4tR4swaaeDEZHnnAvHGa8Eux0kzCBHQpMVruGQYq%2Ffrnd7GUHPsWNKqpy1xJGio6ks8f3yN%2Fb2Tmw5lG9o9rDPu6XBwOwTJELT6fAFa9S64PyU2IwQqgmUWLuQppZGgfcKb8PP9UJNKS%2B7MRPrSKHwLUGyOcyxzpXQd6dPtc9uI7Vjwo9K%2F8dvIxfKxci8pagw5t7bvgY6pgEhcIucOr61OrZL8aaxnRvnXqFJMC03K%2FbD8kvyP6Ro2Vbh7uCaxCM5Qvvb5KTo2SbZqjKLMGMyivL9mhd4zI%2FQH8%2BVBlc%2B0EVWbBeP%2BeNekD7V3fLrDNaUom%2FNJh5H%2FpEyqcQw%2BnQDWnuUoHJVYv8RAnDuJ0XZSKEQQyGcORCLgkBJfD2rvBhxYVVL8gD7qV7nJlGWcXsSiOcWH9Gw1PgzOtHJjUZF&X-Amz-Signature=6ea0f16a1fa47d7946f0674cd542faecba23a423009ab6c6ad1d60fdef4d77df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
