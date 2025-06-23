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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=e179b06b8e42753450d101f0bde28e428c7b3c5134700b0af63823e6d9752212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=4d5bf61707d9576c46fcdd96eec247734e662a26601a81cac147767832aceab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=9a652ec8e07b8ebb1384c436dbb6db49599c59a0f4a94f5781e2a35072ecc64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
