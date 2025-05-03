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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMF5ZDSC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDwY6lrb7JzRh%2FPFDNkSkyg3VDRkBTvMTsJimc1wzegdwIgZWvl%2FDf0fCfyZoTrsI%2FCABbHDpKDfTxETCOYzV9Ip2wqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8%2Bdggwv3aCoyVFNircAxy3n%2B3x0kO3567RPTxq1usud6k0cDVNrHoqbi5pdHtZ3bZyti2JwpWsJsEEAGbe6Ca8fxcD8BRlKg8GU%2BW37N2RjZOFR2BQMOaGJiKYXvsawlKtzVrF%2FanAgKSWfgKcKro6zSNAqD9qsceif5ux%2BtPdhaXjglIu3gJmT6iUV146Xe6BLvxWsCbzCvYjma8R8%2FCTCAXC8SHP9KeJBFRkE1CPz72VKvK6JIoquPO5nL28IUO2Y2jtPikzUMkc1LMQIjqsvOMqq5djUFppIbBf4xJ2c%2F1gTwJE3ZBMM3DXsjEj%2FHpc%2Bevj8cKQQYBO%2F2d5X4gKc0FWipvC15OqwCpUWhe8Ajx3zXU3uQU4a8dJd6FjYuIew5lYGVVAhWhpEf1OUBRBjuWafW9QqWkStbf4BC9zNMwfgaPQ9xqogOW0xKl%2Fej%2BPXfEI0MZ%2FE4Nfaubd27vJ4Mkp%2B6ABYGHA9DEfPsFCcQb4kHmEUQPqPr505P%2Bo4m62Csb0BT%2BNX%2BMz%2FWEwfe1PYOpYLJ1hiC1BlEGB2yNbmRJwi9O2VZlpHmXKn14aagNtVOCvqpr4Fwq9mDet0gVs6sebyCMQ717ktjdrFdj4KSjmYJxd6VPu8CclJI3mt7GYmiSh7SaGEQ9LMKu%2F1sAGOqUBvSXCMmCNbsSZGzI6oJLfkPc58Wzuza3btgw8y4DDpgIuBWO0K1RyEGWn%2BaYMXqFoTUlBJprxVcJ9HGgdgOCGCGwk7YTFdzl%2BAMrzgxyAqY2%2BImYKNRb%2F%2FVWAK8FdXOlIBqR%2Fpe7RuRRoi5%2FgHVTAxcgPFefAfKNu5MSGTCvtmnLEx1y5SfN3jKq5cRYBxyNo9WgQpbkmwPU3fBa2tv9ZUkRQTsbs&X-Amz-Signature=57b3157b41a832ebeffed6c187403b712abadae556e953bfc8738fea01c0cbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMF5ZDSC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDwY6lrb7JzRh%2FPFDNkSkyg3VDRkBTvMTsJimc1wzegdwIgZWvl%2FDf0fCfyZoTrsI%2FCABbHDpKDfTxETCOYzV9Ip2wqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8%2Bdggwv3aCoyVFNircAxy3n%2B3x0kO3567RPTxq1usud6k0cDVNrHoqbi5pdHtZ3bZyti2JwpWsJsEEAGbe6Ca8fxcD8BRlKg8GU%2BW37N2RjZOFR2BQMOaGJiKYXvsawlKtzVrF%2FanAgKSWfgKcKro6zSNAqD9qsceif5ux%2BtPdhaXjglIu3gJmT6iUV146Xe6BLvxWsCbzCvYjma8R8%2FCTCAXC8SHP9KeJBFRkE1CPz72VKvK6JIoquPO5nL28IUO2Y2jtPikzUMkc1LMQIjqsvOMqq5djUFppIbBf4xJ2c%2F1gTwJE3ZBMM3DXsjEj%2FHpc%2Bevj8cKQQYBO%2F2d5X4gKc0FWipvC15OqwCpUWhe8Ajx3zXU3uQU4a8dJd6FjYuIew5lYGVVAhWhpEf1OUBRBjuWafW9QqWkStbf4BC9zNMwfgaPQ9xqogOW0xKl%2Fej%2BPXfEI0MZ%2FE4Nfaubd27vJ4Mkp%2B6ABYGHA9DEfPsFCcQb4kHmEUQPqPr505P%2Bo4m62Csb0BT%2BNX%2BMz%2FWEwfe1PYOpYLJ1hiC1BlEGB2yNbmRJwi9O2VZlpHmXKn14aagNtVOCvqpr4Fwq9mDet0gVs6sebyCMQ717ktjdrFdj4KSjmYJxd6VPu8CclJI3mt7GYmiSh7SaGEQ9LMKu%2F1sAGOqUBvSXCMmCNbsSZGzI6oJLfkPc58Wzuza3btgw8y4DDpgIuBWO0K1RyEGWn%2BaYMXqFoTUlBJprxVcJ9HGgdgOCGCGwk7YTFdzl%2BAMrzgxyAqY2%2BImYKNRb%2F%2FVWAK8FdXOlIBqR%2Fpe7RuRRoi5%2FgHVTAxcgPFefAfKNu5MSGTCvtmnLEx1y5SfN3jKq5cRYBxyNo9WgQpbkmwPU3fBa2tv9ZUkRQTsbs&X-Amz-Signature=36405b35e435f5bf5b1abf660a16b1a05415a419c5518d71b2b2e9725a947f00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMF5ZDSC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDwY6lrb7JzRh%2FPFDNkSkyg3VDRkBTvMTsJimc1wzegdwIgZWvl%2FDf0fCfyZoTrsI%2FCABbHDpKDfTxETCOYzV9Ip2wqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8%2Bdggwv3aCoyVFNircAxy3n%2B3x0kO3567RPTxq1usud6k0cDVNrHoqbi5pdHtZ3bZyti2JwpWsJsEEAGbe6Ca8fxcD8BRlKg8GU%2BW37N2RjZOFR2BQMOaGJiKYXvsawlKtzVrF%2FanAgKSWfgKcKro6zSNAqD9qsceif5ux%2BtPdhaXjglIu3gJmT6iUV146Xe6BLvxWsCbzCvYjma8R8%2FCTCAXC8SHP9KeJBFRkE1CPz72VKvK6JIoquPO5nL28IUO2Y2jtPikzUMkc1LMQIjqsvOMqq5djUFppIbBf4xJ2c%2F1gTwJE3ZBMM3DXsjEj%2FHpc%2Bevj8cKQQYBO%2F2d5X4gKc0FWipvC15OqwCpUWhe8Ajx3zXU3uQU4a8dJd6FjYuIew5lYGVVAhWhpEf1OUBRBjuWafW9QqWkStbf4BC9zNMwfgaPQ9xqogOW0xKl%2Fej%2BPXfEI0MZ%2FE4Nfaubd27vJ4Mkp%2B6ABYGHA9DEfPsFCcQb4kHmEUQPqPr505P%2Bo4m62Csb0BT%2BNX%2BMz%2FWEwfe1PYOpYLJ1hiC1BlEGB2yNbmRJwi9O2VZlpHmXKn14aagNtVOCvqpr4Fwq9mDet0gVs6sebyCMQ717ktjdrFdj4KSjmYJxd6VPu8CclJI3mt7GYmiSh7SaGEQ9LMKu%2F1sAGOqUBvSXCMmCNbsSZGzI6oJLfkPc58Wzuza3btgw8y4DDpgIuBWO0K1RyEGWn%2BaYMXqFoTUlBJprxVcJ9HGgdgOCGCGwk7YTFdzl%2BAMrzgxyAqY2%2BImYKNRb%2F%2FVWAK8FdXOlIBqR%2Fpe7RuRRoi5%2FgHVTAxcgPFefAfKNu5MSGTCvtmnLEx1y5SfN3jKq5cRYBxyNo9WgQpbkmwPU3fBa2tv9ZUkRQTsbs&X-Amz-Signature=e91f29c5e9c3962b5daa546152257b15fd718b7dde39acee87cd81e7a75ab071&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
