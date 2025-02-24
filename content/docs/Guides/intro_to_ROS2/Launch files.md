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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKVOT74%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyC9DgkDiLlb9yT%2FiGeFZpRwNP7IpkneKfEdfPgDgHQAiEA5qwk6PKbTBOw4D12bQhH%2F4XsJhjOratAYhs1Ec9W%2F%2FIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCaA6I%2FuxzFEfQ%2FZGSrcA8Fw1%2FsmMYAHeGWYTYLdGYBA8jjIniXu1ojKCra0cbHtwUHk65w1%2B2dXZDPFHQXAZQtQBetS%2F%2FwOOFJ%2BoJxIfy8PE7HN7kHIi%2FH7Bawpz9PJZyCQAnLLDvmL%2F%2F59g%2B8E68sBz33qkPGgpCqGAevKd%2BDWc3C7Y0J0OyPDS2GJv2Jf8nhBTiGoEGbfrTi4JOg30UuhBQ2poOIz7N7jJ7AVQhzjjENBvT663Yq3Erg40e4T82OMV3LKfMANtwvJUoguA6k8DAAc%2BEvmcMxt6P%2FYYCPEpP%2B41xBaf8QWeoFS9qkNr0odAgjtZZm2C67HiisQdYT55gvRWWxdJQXsWNfBKI5S7n0xi8bwkqT2rASb4NKahE8LqHme%2Bc7fBv4xs%2BNnK5pmSwwafdM5zSWLBJRw2SDPY9mLBK%2F8bRefTwhI7JITTI87m80s8IzNnVLQFcAjJqzkpUPyO2i2wAtLZG4P9yNr6RvibOzJYAG0%2FJ9X%2FNV2R6UwsURI%2BXQhgJFc1NUqn1mN24iBw3BCZx3UiYvRnfV%2BYDW2wUZhhqpAdEEpqOlmF5nProuQKhJVAM9XpurBHoLuQpnZzME7ydpy9Q1DJ96bqLlxQmSRvaGetUh%2Ff9mymgeincsr6g7qAAR%2BMLnd8r0GOqUBDm%2FZakSmsIXyQOgmb6BDnXQvD%2BqB017rLElwM9RxVop0%2FMGCUs%2B3VfJRtyVG09vHK%2BF7ZQvv5q9pb0E1wJEFy%2FVIa9%2BNXhV%2B8Anvr6kiBgIdyamWgKlB3kdxbqQ681knEH9EGLeGJqsw5pDKVzCO7QQIhvPihhf5xvBlmAi3ZOif2PPIkrUTmg2cR7SbAHxTPdl%2FqU7ON6naSLYwfkhTTWWS1Fa3&X-Amz-Signature=d38485bafd92830dccc64ef427648caf23fcbb719f2248c81ddee05b151c49e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKVOT74%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyC9DgkDiLlb9yT%2FiGeFZpRwNP7IpkneKfEdfPgDgHQAiEA5qwk6PKbTBOw4D12bQhH%2F4XsJhjOratAYhs1Ec9W%2F%2FIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCaA6I%2FuxzFEfQ%2FZGSrcA8Fw1%2FsmMYAHeGWYTYLdGYBA8jjIniXu1ojKCra0cbHtwUHk65w1%2B2dXZDPFHQXAZQtQBetS%2F%2FwOOFJ%2BoJxIfy8PE7HN7kHIi%2FH7Bawpz9PJZyCQAnLLDvmL%2F%2F59g%2B8E68sBz33qkPGgpCqGAevKd%2BDWc3C7Y0J0OyPDS2GJv2Jf8nhBTiGoEGbfrTi4JOg30UuhBQ2poOIz7N7jJ7AVQhzjjENBvT663Yq3Erg40e4T82OMV3LKfMANtwvJUoguA6k8DAAc%2BEvmcMxt6P%2FYYCPEpP%2B41xBaf8QWeoFS9qkNr0odAgjtZZm2C67HiisQdYT55gvRWWxdJQXsWNfBKI5S7n0xi8bwkqT2rASb4NKahE8LqHme%2Bc7fBv4xs%2BNnK5pmSwwafdM5zSWLBJRw2SDPY9mLBK%2F8bRefTwhI7JITTI87m80s8IzNnVLQFcAjJqzkpUPyO2i2wAtLZG4P9yNr6RvibOzJYAG0%2FJ9X%2FNV2R6UwsURI%2BXQhgJFc1NUqn1mN24iBw3BCZx3UiYvRnfV%2BYDW2wUZhhqpAdEEpqOlmF5nProuQKhJVAM9XpurBHoLuQpnZzME7ydpy9Q1DJ96bqLlxQmSRvaGetUh%2Ff9mymgeincsr6g7qAAR%2BMLnd8r0GOqUBDm%2FZakSmsIXyQOgmb6BDnXQvD%2BqB017rLElwM9RxVop0%2FMGCUs%2B3VfJRtyVG09vHK%2BF7ZQvv5q9pb0E1wJEFy%2FVIa9%2BNXhV%2B8Anvr6kiBgIdyamWgKlB3kdxbqQ681knEH9EGLeGJqsw5pDKVzCO7QQIhvPihhf5xvBlmAi3ZOif2PPIkrUTmg2cR7SbAHxTPdl%2FqU7ON6naSLYwfkhTTWWS1Fa3&X-Amz-Signature=d0bc16b25fc9d377d1d8ae4dd00992596920618e8d08ba9dc0c6340b845bc861&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKVOT74%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyC9DgkDiLlb9yT%2FiGeFZpRwNP7IpkneKfEdfPgDgHQAiEA5qwk6PKbTBOw4D12bQhH%2F4XsJhjOratAYhs1Ec9W%2F%2FIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCaA6I%2FuxzFEfQ%2FZGSrcA8Fw1%2FsmMYAHeGWYTYLdGYBA8jjIniXu1ojKCra0cbHtwUHk65w1%2B2dXZDPFHQXAZQtQBetS%2F%2FwOOFJ%2BoJxIfy8PE7HN7kHIi%2FH7Bawpz9PJZyCQAnLLDvmL%2F%2F59g%2B8E68sBz33qkPGgpCqGAevKd%2BDWc3C7Y0J0OyPDS2GJv2Jf8nhBTiGoEGbfrTi4JOg30UuhBQ2poOIz7N7jJ7AVQhzjjENBvT663Yq3Erg40e4T82OMV3LKfMANtwvJUoguA6k8DAAc%2BEvmcMxt6P%2FYYCPEpP%2B41xBaf8QWeoFS9qkNr0odAgjtZZm2C67HiisQdYT55gvRWWxdJQXsWNfBKI5S7n0xi8bwkqT2rASb4NKahE8LqHme%2Bc7fBv4xs%2BNnK5pmSwwafdM5zSWLBJRw2SDPY9mLBK%2F8bRefTwhI7JITTI87m80s8IzNnVLQFcAjJqzkpUPyO2i2wAtLZG4P9yNr6RvibOzJYAG0%2FJ9X%2FNV2R6UwsURI%2BXQhgJFc1NUqn1mN24iBw3BCZx3UiYvRnfV%2BYDW2wUZhhqpAdEEpqOlmF5nProuQKhJVAM9XpurBHoLuQpnZzME7ydpy9Q1DJ96bqLlxQmSRvaGetUh%2Ff9mymgeincsr6g7qAAR%2BMLnd8r0GOqUBDm%2FZakSmsIXyQOgmb6BDnXQvD%2BqB017rLElwM9RxVop0%2FMGCUs%2B3VfJRtyVG09vHK%2BF7ZQvv5q9pb0E1wJEFy%2FVIa9%2BNXhV%2B8Anvr6kiBgIdyamWgKlB3kdxbqQ681knEH9EGLeGJqsw5pDKVzCO7QQIhvPihhf5xvBlmAi3ZOif2PPIkrUTmg2cR7SbAHxTPdl%2FqU7ON6naSLYwfkhTTWWS1Fa3&X-Amz-Signature=7edc373455a8220359ab3886465c1377338dae92ae68cb1427b5a21f20651e11&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
