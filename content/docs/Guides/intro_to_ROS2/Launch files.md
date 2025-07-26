---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEBMW56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC3u4pNwzmRdxRTvt%2B9A9VopHzEuChhWiiinv%2FwISTZZAIgULShZCVyD%2BMlXxVhffcKx6RTfBJjXBv%2BIH3FNZehgHkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIHwnK72Gk%2BZl%2By5PircA%2FQnWpoM5YyWjko8%2F4tlSCHNhcsPrCi5EMEJipwjiKZLXbnOJvqJnz1Tbv7p4ktDkniWT54%2FIiiNyRDb7NtBh%2F%2B0faDYZOF%2F6uprfMAxhVph2bqHz9pa9FTsb2VU1XO2VSEyrGnHJp7DP14ekmXE6dotC3ufEpFynxuBl8rUpD3LEholKcaBpRbXtzYMzfs2p%2BpW%2F%2BXgtFp1m6q4bYgDPh5e5qIh1z%2B56If4VqzKfyNAVYDzS1qX70iGbqYvJtcCEV%2Ff06M4FLl1ieXTutcEgnYHUJNTd28IKDSrhQWscIkDGt1u%2B23n1364ak4ROGoI1EO7hwl%2FpuywlvtIx08K1U6xf0opgbByOAI0AAxEHWIemh1J84mRtfstsByOGQZB8nDYwjekj3oRwGFjO7%2FApRvXHwnHdWzFr5l4AeHnrHwnsors2Hta3PZQUpGANHoWE9lY2Yz3E4rLsa0j62gcRnLZ87%2B6%2BKieN%2BKgq9FmjJY7PJ932odZSh8zt4O6Q886xZqljBIzVx45wRTFzpu0%2FCbmTIEQpFECwRQPaj5hShQDcIZ3SuxaMEiXdHkHcjLG72XqiKZfApmVwNdzwbRVScovu%2B8OP%2F8moQV47ZOWFGkMtTC6pNJ8wrDqaHDSMJ%2FukMQGOqUBfhXGjDjBVqRGPmru6AupsMqe6Wn8cE%2FaULKJf3oFizMqfLcBy5xeMYlpiLAr%2Fw5DEu%2FgqbJwGUFVS%2BMnkai%2FQDQDkLa7HimgKKpLel1VWv15iyzXLZ10ClpKsln3W1XpOTIbov1e%2BK1h0pVL1dXc7vas0%2Fu9XlivB61t5fcQqV%2B900wiKneejqtWqXMHlXJSsk4XQpHqvqbWlIblvFi6AUJ0bV02&X-Amz-Signature=443b4503f0b6bfccc13a3b7c9dd07d890005a7286962112460f133050b2385aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEBMW56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC3u4pNwzmRdxRTvt%2B9A9VopHzEuChhWiiinv%2FwISTZZAIgULShZCVyD%2BMlXxVhffcKx6RTfBJjXBv%2BIH3FNZehgHkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIHwnK72Gk%2BZl%2By5PircA%2FQnWpoM5YyWjko8%2F4tlSCHNhcsPrCi5EMEJipwjiKZLXbnOJvqJnz1Tbv7p4ktDkniWT54%2FIiiNyRDb7NtBh%2F%2B0faDYZOF%2F6uprfMAxhVph2bqHz9pa9FTsb2VU1XO2VSEyrGnHJp7DP14ekmXE6dotC3ufEpFynxuBl8rUpD3LEholKcaBpRbXtzYMzfs2p%2BpW%2F%2BXgtFp1m6q4bYgDPh5e5qIh1z%2B56If4VqzKfyNAVYDzS1qX70iGbqYvJtcCEV%2Ff06M4FLl1ieXTutcEgnYHUJNTd28IKDSrhQWscIkDGt1u%2B23n1364ak4ROGoI1EO7hwl%2FpuywlvtIx08K1U6xf0opgbByOAI0AAxEHWIemh1J84mRtfstsByOGQZB8nDYwjekj3oRwGFjO7%2FApRvXHwnHdWzFr5l4AeHnrHwnsors2Hta3PZQUpGANHoWE9lY2Yz3E4rLsa0j62gcRnLZ87%2B6%2BKieN%2BKgq9FmjJY7PJ932odZSh8zt4O6Q886xZqljBIzVx45wRTFzpu0%2FCbmTIEQpFECwRQPaj5hShQDcIZ3SuxaMEiXdHkHcjLG72XqiKZfApmVwNdzwbRVScovu%2B8OP%2F8moQV47ZOWFGkMtTC6pNJ8wrDqaHDSMJ%2FukMQGOqUBfhXGjDjBVqRGPmru6AupsMqe6Wn8cE%2FaULKJf3oFizMqfLcBy5xeMYlpiLAr%2Fw5DEu%2FgqbJwGUFVS%2BMnkai%2FQDQDkLa7HimgKKpLel1VWv15iyzXLZ10ClpKsln3W1XpOTIbov1e%2BK1h0pVL1dXc7vas0%2Fu9XlivB61t5fcQqV%2B900wiKneejqtWqXMHlXJSsk4XQpHqvqbWlIblvFi6AUJ0bV02&X-Amz-Signature=c2ccadb5b28e3679fb32eb0f568c05bd103dc1da667f7dc101fcbca625720b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEBMW56%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQC3u4pNwzmRdxRTvt%2B9A9VopHzEuChhWiiinv%2FwISTZZAIgULShZCVyD%2BMlXxVhffcKx6RTfBJjXBv%2BIH3FNZehgHkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIHwnK72Gk%2BZl%2By5PircA%2FQnWpoM5YyWjko8%2F4tlSCHNhcsPrCi5EMEJipwjiKZLXbnOJvqJnz1Tbv7p4ktDkniWT54%2FIiiNyRDb7NtBh%2F%2B0faDYZOF%2F6uprfMAxhVph2bqHz9pa9FTsb2VU1XO2VSEyrGnHJp7DP14ekmXE6dotC3ufEpFynxuBl8rUpD3LEholKcaBpRbXtzYMzfs2p%2BpW%2F%2BXgtFp1m6q4bYgDPh5e5qIh1z%2B56If4VqzKfyNAVYDzS1qX70iGbqYvJtcCEV%2Ff06M4FLl1ieXTutcEgnYHUJNTd28IKDSrhQWscIkDGt1u%2B23n1364ak4ROGoI1EO7hwl%2FpuywlvtIx08K1U6xf0opgbByOAI0AAxEHWIemh1J84mRtfstsByOGQZB8nDYwjekj3oRwGFjO7%2FApRvXHwnHdWzFr5l4AeHnrHwnsors2Hta3PZQUpGANHoWE9lY2Yz3E4rLsa0j62gcRnLZ87%2B6%2BKieN%2BKgq9FmjJY7PJ932odZSh8zt4O6Q886xZqljBIzVx45wRTFzpu0%2FCbmTIEQpFECwRQPaj5hShQDcIZ3SuxaMEiXdHkHcjLG72XqiKZfApmVwNdzwbRVScovu%2B8OP%2F8moQV47ZOWFGkMtTC6pNJ8wrDqaHDSMJ%2FukMQGOqUBfhXGjDjBVqRGPmru6AupsMqe6Wn8cE%2FaULKJf3oFizMqfLcBy5xeMYlpiLAr%2Fw5DEu%2FgqbJwGUFVS%2BMnkai%2FQDQDkLa7HimgKKpLel1VWv15iyzXLZ10ClpKsln3W1XpOTIbov1e%2BK1h0pVL1dXc7vas0%2Fu9XlivB61t5fcQqV%2B900wiKneejqtWqXMHlXJSsk4XQpHqvqbWlIblvFi6AUJ0bV02&X-Amz-Signature=d46b4be408edf6deaaf616775dd1622d5b2792709f2ebf3de18442cddf8c51a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
