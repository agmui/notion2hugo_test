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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW37B7U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHk9gJBHs35vttuCnF4qqhZ6Gr7%2BzQWlGwPnp3HumvKAiEAvLXTJFs1BGZCKgfMTRo%2B9KiAmJu6bZTdasuJaJxqo7Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNq5sJ8jgCwLWnRYdyrcA%2Fw7qCbJmnBPTFieolWF7uZyBbS11Ca6JmCmhdQjxPX3Mcu%2BjZvnDhtcMzbhwJX5IgIMXjt2le2e4FPT8F%2BYAgT7fWMY0owEmg8haqkd%2B9sr7Rzlm7PbEnHXedwmBacOkIYRBfnQm7ftQHArnRyVsk6liZjYP9CbG1Uhl2%2FtvFZ3bn3QBfNvSUqtlo9%2FoQSnRoxPh%2FNalIrmYXM7EUS3OGIMSyUOYN7U4o4iwcYmYug2caYRAsaoZ3IGFh%2Bp36ZcqAUvS1NjVLkPnhT9SMs5%2BZT%2Fo44yH4yD5ejB9kk%2BhLjBjf1hAkC2qIeCBFh9%2FPCdOiNckRKEdy9LoCyCUO%2Bdid4VykVwUwvQA5RKM9mADJeoJxj9kXuAONktNp1Ca5N6Qbb6s%2FtykROudIO97vfTmWeSqBI3u0ecmSv5oBxlwUcMJpsycxBRKQudLG2fhkgBunrB7ckoyEPUpacW1iioqVAIppe9EiBWXy5FuW04IDIL9%2F4pCt0%2FMjWn4SoIEcb30JY2T%2FYb8XGtE7%2FWTZm%2B5IvsVqVj2BOZI0vPqNJAtaAkKH7vV79dX89e1ZwN0hdS6QjYRfhmtoMvb8bnje%2BJSOdaXwcUTnZPjtXHk%2FKlnJvOxoDjYiG8n5aDkSAMMJLJqL4GOqUBAeINTAGxUNQMQDbZhulrpnOUsY9yIIJjYslzkatwMRVid2BInP5UeQyo0n452weRqmdvW0djGjvkfPiukEjwMqbh5V5pB9sQ4VQR4gwi2Rj%2BsY%2FdZlflnFM5vmG1rYHbvKSAvISPT3ANf1UTBP0xEGKDhcWsnJGHB47tS%2BK3Nko00GYN2DlYnZbx%2Bu5gOoYkxB5tpUkFdwqp9gK4NEQUdIlbFR9%2F&X-Amz-Signature=32b911b1d39ae8587521e2a20cc60b39df5f2d39cd65a9408424ce7d86d1fdff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW37B7U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHk9gJBHs35vttuCnF4qqhZ6Gr7%2BzQWlGwPnp3HumvKAiEAvLXTJFs1BGZCKgfMTRo%2B9KiAmJu6bZTdasuJaJxqo7Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNq5sJ8jgCwLWnRYdyrcA%2Fw7qCbJmnBPTFieolWF7uZyBbS11Ca6JmCmhdQjxPX3Mcu%2BjZvnDhtcMzbhwJX5IgIMXjt2le2e4FPT8F%2BYAgT7fWMY0owEmg8haqkd%2B9sr7Rzlm7PbEnHXedwmBacOkIYRBfnQm7ftQHArnRyVsk6liZjYP9CbG1Uhl2%2FtvFZ3bn3QBfNvSUqtlo9%2FoQSnRoxPh%2FNalIrmYXM7EUS3OGIMSyUOYN7U4o4iwcYmYug2caYRAsaoZ3IGFh%2Bp36ZcqAUvS1NjVLkPnhT9SMs5%2BZT%2Fo44yH4yD5ejB9kk%2BhLjBjf1hAkC2qIeCBFh9%2FPCdOiNckRKEdy9LoCyCUO%2Bdid4VykVwUwvQA5RKM9mADJeoJxj9kXuAONktNp1Ca5N6Qbb6s%2FtykROudIO97vfTmWeSqBI3u0ecmSv5oBxlwUcMJpsycxBRKQudLG2fhkgBunrB7ckoyEPUpacW1iioqVAIppe9EiBWXy5FuW04IDIL9%2F4pCt0%2FMjWn4SoIEcb30JY2T%2FYb8XGtE7%2FWTZm%2B5IvsVqVj2BOZI0vPqNJAtaAkKH7vV79dX89e1ZwN0hdS6QjYRfhmtoMvb8bnje%2BJSOdaXwcUTnZPjtXHk%2FKlnJvOxoDjYiG8n5aDkSAMMJLJqL4GOqUBAeINTAGxUNQMQDbZhulrpnOUsY9yIIJjYslzkatwMRVid2BInP5UeQyo0n452weRqmdvW0djGjvkfPiukEjwMqbh5V5pB9sQ4VQR4gwi2Rj%2BsY%2FdZlflnFM5vmG1rYHbvKSAvISPT3ANf1UTBP0xEGKDhcWsnJGHB47tS%2BK3Nko00GYN2DlYnZbx%2Bu5gOoYkxB5tpUkFdwqp9gK4NEQUdIlbFR9%2F&X-Amz-Signature=7966dfe0b0ce7149c2b9dc12e5ae2fc8df44b8adf383b211f60fb27c75befa7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LW37B7U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T041038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHk9gJBHs35vttuCnF4qqhZ6Gr7%2BzQWlGwPnp3HumvKAiEAvLXTJFs1BGZCKgfMTRo%2B9KiAmJu6bZTdasuJaJxqo7Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNq5sJ8jgCwLWnRYdyrcA%2Fw7qCbJmnBPTFieolWF7uZyBbS11Ca6JmCmhdQjxPX3Mcu%2BjZvnDhtcMzbhwJX5IgIMXjt2le2e4FPT8F%2BYAgT7fWMY0owEmg8haqkd%2B9sr7Rzlm7PbEnHXedwmBacOkIYRBfnQm7ftQHArnRyVsk6liZjYP9CbG1Uhl2%2FtvFZ3bn3QBfNvSUqtlo9%2FoQSnRoxPh%2FNalIrmYXM7EUS3OGIMSyUOYN7U4o4iwcYmYug2caYRAsaoZ3IGFh%2Bp36ZcqAUvS1NjVLkPnhT9SMs5%2BZT%2Fo44yH4yD5ejB9kk%2BhLjBjf1hAkC2qIeCBFh9%2FPCdOiNckRKEdy9LoCyCUO%2Bdid4VykVwUwvQA5RKM9mADJeoJxj9kXuAONktNp1Ca5N6Qbb6s%2FtykROudIO97vfTmWeSqBI3u0ecmSv5oBxlwUcMJpsycxBRKQudLG2fhkgBunrB7ckoyEPUpacW1iioqVAIppe9EiBWXy5FuW04IDIL9%2F4pCt0%2FMjWn4SoIEcb30JY2T%2FYb8XGtE7%2FWTZm%2B5IvsVqVj2BOZI0vPqNJAtaAkKH7vV79dX89e1ZwN0hdS6QjYRfhmtoMvb8bnje%2BJSOdaXwcUTnZPjtXHk%2FKlnJvOxoDjYiG8n5aDkSAMMJLJqL4GOqUBAeINTAGxUNQMQDbZhulrpnOUsY9yIIJjYslzkatwMRVid2BInP5UeQyo0n452weRqmdvW0djGjvkfPiukEjwMqbh5V5pB9sQ4VQR4gwi2Rj%2BsY%2FdZlflnFM5vmG1rYHbvKSAvISPT3ANf1UTBP0xEGKDhcWsnJGHB47tS%2BK3Nko00GYN2DlYnZbx%2Bu5gOoYkxB5tpUkFdwqp9gK4NEQUdIlbFR9%2F&X-Amz-Signature=48676d849a959bc5b3d88a045446ffee7b021dc9c96a657bb673b4c01b821823&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
