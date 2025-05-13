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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6R2A47V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD7R7wpA3d48RB9Pj26Xal%2F%2Bw%2BiGGtKFIvBy6v9kx0t%2FAIgfI1k2pRNyK7VDB0554%2BVVyFZd6ifJWCssCxRL7dmEl8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXdxUVvo8NeDLNRHSrcA5Zn5dqWprcL8k7K%2FOK0k7wiLC97ac69x%2FLV8j1yTdinfcZSpRzLSUn2E9n6QXblxci6JqYielEWwFQoFVBLDpOndWfKbNBb0E7G798YCpe0nZkU8LJNKFyptW2dGDkD1v0t52VRvkSvLS4ulozmRKZUCr%2BxzesCrRKL2vg0RQQ5CqG0UKAoRuYy6wCAkjPSj%2BQMGcVtxijLMIKUODrmmprwpjnIbfTfR%2FHH936f1GeIftwpYV4lZ2qJviBDn4St2U1m%2Bi1SEDBa1deY%2BFH5mihXPmQFADyRwCHCqbkJrR64r371ZGtnd5VtVar4t%2FmvOeHVeAaQhXs%2BKR1d2YHh0Hp0brsfvTRu%2BFbfZXPflmPKjv%2BFyOwwfL3q%2BHNO8Dw%2F6vZGeD%2BMzCMDbxIS%2B72GnPm9qoLbRWQ2jqcFHbYdU3KJx2N9GXTuarwVwWdgREmaXqNpup4Lmd%2BxpkV3rwxFr028tSmQhIbYs0w26Suiy%2B9yhmVfQiLXVJN2XNeL8oyr%2F1k3%2BGuAu1L2y42Vz83iK%2Bsw2AnFr%2BL%2FKa8gFWD42AyL0dbGPJUM4Ow7d5rtb%2B9twrGEpFsm1Z2XUw9f5rjLqx9md4fXQJfnknCHlvWyP1r2lDz8AXxpKWuHF1cmMNKpjsEGOqUBMRAp2qzxtvvnzWmxE96xVd3mSmcl%2F79n0FlpE1amTbN5DlhRDZBWN0WuHlMQj17IHN4FN3JaC5zadzQI%2BoXlG5UKftakogCEb%2FEUfjftPCYXmHp5XKT8Grv5OUHOTkpwFAUYZulN%2FczhYVIkgejNSNcolA0SCRv2Pe5J2sxXW8qO10F0bBkAmfqWIxDc4%2FryuN0dXrRoS22CYLJi%2Br294%2F0I65qt&X-Amz-Signature=dc84f70cc2fa83bb86574f19e2d57ec928ee7b703afa07195fb4a47268c17dab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6R2A47V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD7R7wpA3d48RB9Pj26Xal%2F%2Bw%2BiGGtKFIvBy6v9kx0t%2FAIgfI1k2pRNyK7VDB0554%2BVVyFZd6ifJWCssCxRL7dmEl8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXdxUVvo8NeDLNRHSrcA5Zn5dqWprcL8k7K%2FOK0k7wiLC97ac69x%2FLV8j1yTdinfcZSpRzLSUn2E9n6QXblxci6JqYielEWwFQoFVBLDpOndWfKbNBb0E7G798YCpe0nZkU8LJNKFyptW2dGDkD1v0t52VRvkSvLS4ulozmRKZUCr%2BxzesCrRKL2vg0RQQ5CqG0UKAoRuYy6wCAkjPSj%2BQMGcVtxijLMIKUODrmmprwpjnIbfTfR%2FHH936f1GeIftwpYV4lZ2qJviBDn4St2U1m%2Bi1SEDBa1deY%2BFH5mihXPmQFADyRwCHCqbkJrR64r371ZGtnd5VtVar4t%2FmvOeHVeAaQhXs%2BKR1d2YHh0Hp0brsfvTRu%2BFbfZXPflmPKjv%2BFyOwwfL3q%2BHNO8Dw%2F6vZGeD%2BMzCMDbxIS%2B72GnPm9qoLbRWQ2jqcFHbYdU3KJx2N9GXTuarwVwWdgREmaXqNpup4Lmd%2BxpkV3rwxFr028tSmQhIbYs0w26Suiy%2B9yhmVfQiLXVJN2XNeL8oyr%2F1k3%2BGuAu1L2y42Vz83iK%2Bsw2AnFr%2BL%2FKa8gFWD42AyL0dbGPJUM4Ow7d5rtb%2B9twrGEpFsm1Z2XUw9f5rjLqx9md4fXQJfnknCHlvWyP1r2lDz8AXxpKWuHF1cmMNKpjsEGOqUBMRAp2qzxtvvnzWmxE96xVd3mSmcl%2F79n0FlpE1amTbN5DlhRDZBWN0WuHlMQj17IHN4FN3JaC5zadzQI%2BoXlG5UKftakogCEb%2FEUfjftPCYXmHp5XKT8Grv5OUHOTkpwFAUYZulN%2FczhYVIkgejNSNcolA0SCRv2Pe5J2sxXW8qO10F0bBkAmfqWIxDc4%2FryuN0dXrRoS22CYLJi%2Br294%2F0I65qt&X-Amz-Signature=5b8474a545f455eb134bdf87d9fb8d3482b906487b1c1dddf4cac8c8f9ae8105&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6R2A47V%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD7R7wpA3d48RB9Pj26Xal%2F%2Bw%2BiGGtKFIvBy6v9kx0t%2FAIgfI1k2pRNyK7VDB0554%2BVVyFZd6ifJWCssCxRL7dmEl8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXdxUVvo8NeDLNRHSrcA5Zn5dqWprcL8k7K%2FOK0k7wiLC97ac69x%2FLV8j1yTdinfcZSpRzLSUn2E9n6QXblxci6JqYielEWwFQoFVBLDpOndWfKbNBb0E7G798YCpe0nZkU8LJNKFyptW2dGDkD1v0t52VRvkSvLS4ulozmRKZUCr%2BxzesCrRKL2vg0RQQ5CqG0UKAoRuYy6wCAkjPSj%2BQMGcVtxijLMIKUODrmmprwpjnIbfTfR%2FHH936f1GeIftwpYV4lZ2qJviBDn4St2U1m%2Bi1SEDBa1deY%2BFH5mihXPmQFADyRwCHCqbkJrR64r371ZGtnd5VtVar4t%2FmvOeHVeAaQhXs%2BKR1d2YHh0Hp0brsfvTRu%2BFbfZXPflmPKjv%2BFyOwwfL3q%2BHNO8Dw%2F6vZGeD%2BMzCMDbxIS%2B72GnPm9qoLbRWQ2jqcFHbYdU3KJx2N9GXTuarwVwWdgREmaXqNpup4Lmd%2BxpkV3rwxFr028tSmQhIbYs0w26Suiy%2B9yhmVfQiLXVJN2XNeL8oyr%2F1k3%2BGuAu1L2y42Vz83iK%2Bsw2AnFr%2BL%2FKa8gFWD42AyL0dbGPJUM4Ow7d5rtb%2B9twrGEpFsm1Z2XUw9f5rjLqx9md4fXQJfnknCHlvWyP1r2lDz8AXxpKWuHF1cmMNKpjsEGOqUBMRAp2qzxtvvnzWmxE96xVd3mSmcl%2F79n0FlpE1amTbN5DlhRDZBWN0WuHlMQj17IHN4FN3JaC5zadzQI%2BoXlG5UKftakogCEb%2FEUfjftPCYXmHp5XKT8Grv5OUHOTkpwFAUYZulN%2FczhYVIkgejNSNcolA0SCRv2Pe5J2sxXW8qO10F0bBkAmfqWIxDc4%2FryuN0dXrRoS22CYLJi%2Br294%2F0I65qt&X-Amz-Signature=981ed0064193125d5626cb9345ad58b2c34422e62134c945b6e97702495983bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
