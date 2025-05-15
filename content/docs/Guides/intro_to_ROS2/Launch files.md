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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYS4YWH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDH0L8G%2F7ngDwnX5nNX9iqfq9P7YierD%2FrWiQCQqblyMQIgBQnSIIncgYgJq6bqgdDhBmxcxWuGJCZqlcpd23P4pjwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGEvF0UKJ0zWsQFA8yrcA%2FpU7eIP%2F5btd7iRW4VonawjIyfPiaQ7r5O0NIx28iLXFZ6MeAyeaA%2BT%2FDhJTrMp9Tz1wAZ9zsijnxplRizcqZLm5Nvf4%2BD4Wo886%2Bl8b0Qqv5Fuc3%2BU1nTIYypfCGOx8qs9l7y6ZrOKdRY%2BZzE6%2FkYHpXBRBRy%2FbL3LFLCwVB%2BodwForgr3B%2F35zOMLTDWXBFnDAzx9y%2BGH%2BJWj%2BOmnV%2BIjqnjJAys3CE3mh774Z2Fv5IvUyhEfnSxNnAls7NueoPTvGdQ3GNA6UYgXlVl0Y3993yT8PcHDfVryGZ0z9qo4ljOeebhfPt1iJMahNno9UbNEfGWy9Ks69z11zCvvksac9FmrcwTG7Oewd6Xr2vI9hpzPQEos%2F5dhhmUe7EKTPj2XWozZj%2FDCTh%2B9Q3OGdIQfJp%2BTDb3I5g6LMB0JebBa%2BRRHLg3p%2B%2BJQ8usQMAtHKoq%2Fu%2B8a4iepjFmFvtYXqzZnam5e1pxDQkUEDCwVa08oNE2s6TMrUQbbPgMIVJDKAtheuzn7wO8imtRU3hla5O3j66xbmqf6fuQRp%2FvH09%2Fwlrf0P9oF7JKJY0VILd3fgS%2FMS3wszvL071QutUZbtiYTaiyQdjknsD%2FVeru1gzKhdI2oyBVGiqS7Qeh1MI3slsEGOqUBjAu%2FwAPs%2Bhs9GjeKUAONh9cKSCL6GZmLKJq%2FMEad1krNTDrqdb7qEpCPT%2Bfnhm44vUhi%2Bd3522r3TJnFq1Z64kcbxJ%2FdCfNCFBbeVpcyE%2F9GlM%2FJJ6lgtP8z%2BMoCqly6eBU7UjjD%2FDho0aYMw5hoXqKeVH8CB2sUJ5drS9lZDrn977tLTEti1aliWqQrgb25OGCjVYoCYCRbP6hNNIOO5KBkuM0U&X-Amz-Signature=0b1a343adbcbb415061db19d9fd08eb69d1f987407ff88f89f872b60381c1c87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYS4YWH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDH0L8G%2F7ngDwnX5nNX9iqfq9P7YierD%2FrWiQCQqblyMQIgBQnSIIncgYgJq6bqgdDhBmxcxWuGJCZqlcpd23P4pjwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGEvF0UKJ0zWsQFA8yrcA%2FpU7eIP%2F5btd7iRW4VonawjIyfPiaQ7r5O0NIx28iLXFZ6MeAyeaA%2BT%2FDhJTrMp9Tz1wAZ9zsijnxplRizcqZLm5Nvf4%2BD4Wo886%2Bl8b0Qqv5Fuc3%2BU1nTIYypfCGOx8qs9l7y6ZrOKdRY%2BZzE6%2FkYHpXBRBRy%2FbL3LFLCwVB%2BodwForgr3B%2F35zOMLTDWXBFnDAzx9y%2BGH%2BJWj%2BOmnV%2BIjqnjJAys3CE3mh774Z2Fv5IvUyhEfnSxNnAls7NueoPTvGdQ3GNA6UYgXlVl0Y3993yT8PcHDfVryGZ0z9qo4ljOeebhfPt1iJMahNno9UbNEfGWy9Ks69z11zCvvksac9FmrcwTG7Oewd6Xr2vI9hpzPQEos%2F5dhhmUe7EKTPj2XWozZj%2FDCTh%2B9Q3OGdIQfJp%2BTDb3I5g6LMB0JebBa%2BRRHLg3p%2B%2BJQ8usQMAtHKoq%2Fu%2B8a4iepjFmFvtYXqzZnam5e1pxDQkUEDCwVa08oNE2s6TMrUQbbPgMIVJDKAtheuzn7wO8imtRU3hla5O3j66xbmqf6fuQRp%2FvH09%2Fwlrf0P9oF7JKJY0VILd3fgS%2FMS3wszvL071QutUZbtiYTaiyQdjknsD%2FVeru1gzKhdI2oyBVGiqS7Qeh1MI3slsEGOqUBjAu%2FwAPs%2Bhs9GjeKUAONh9cKSCL6GZmLKJq%2FMEad1krNTDrqdb7qEpCPT%2Bfnhm44vUhi%2Bd3522r3TJnFq1Z64kcbxJ%2FdCfNCFBbeVpcyE%2F9GlM%2FJJ6lgtP8z%2BMoCqly6eBU7UjjD%2FDho0aYMw5hoXqKeVH8CB2sUJ5drS9lZDrn977tLTEti1aliWqQrgb25OGCjVYoCYCRbP6hNNIOO5KBkuM0U&X-Amz-Signature=fab8702d2becd1ea72432ba9d394193fb14d2419d9c2386c8e3a86060e2dd743&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYS4YWH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDH0L8G%2F7ngDwnX5nNX9iqfq9P7YierD%2FrWiQCQqblyMQIgBQnSIIncgYgJq6bqgdDhBmxcxWuGJCZqlcpd23P4pjwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGEvF0UKJ0zWsQFA8yrcA%2FpU7eIP%2F5btd7iRW4VonawjIyfPiaQ7r5O0NIx28iLXFZ6MeAyeaA%2BT%2FDhJTrMp9Tz1wAZ9zsijnxplRizcqZLm5Nvf4%2BD4Wo886%2Bl8b0Qqv5Fuc3%2BU1nTIYypfCGOx8qs9l7y6ZrOKdRY%2BZzE6%2FkYHpXBRBRy%2FbL3LFLCwVB%2BodwForgr3B%2F35zOMLTDWXBFnDAzx9y%2BGH%2BJWj%2BOmnV%2BIjqnjJAys3CE3mh774Z2Fv5IvUyhEfnSxNnAls7NueoPTvGdQ3GNA6UYgXlVl0Y3993yT8PcHDfVryGZ0z9qo4ljOeebhfPt1iJMahNno9UbNEfGWy9Ks69z11zCvvksac9FmrcwTG7Oewd6Xr2vI9hpzPQEos%2F5dhhmUe7EKTPj2XWozZj%2FDCTh%2B9Q3OGdIQfJp%2BTDb3I5g6LMB0JebBa%2BRRHLg3p%2B%2BJQ8usQMAtHKoq%2Fu%2B8a4iepjFmFvtYXqzZnam5e1pxDQkUEDCwVa08oNE2s6TMrUQbbPgMIVJDKAtheuzn7wO8imtRU3hla5O3j66xbmqf6fuQRp%2FvH09%2Fwlrf0P9oF7JKJY0VILd3fgS%2FMS3wszvL071QutUZbtiYTaiyQdjknsD%2FVeru1gzKhdI2oyBVGiqS7Qeh1MI3slsEGOqUBjAu%2FwAPs%2Bhs9GjeKUAONh9cKSCL6GZmLKJq%2FMEad1krNTDrqdb7qEpCPT%2Bfnhm44vUhi%2Bd3522r3TJnFq1Z64kcbxJ%2FdCfNCFBbeVpcyE%2F9GlM%2FJJ6lgtP8z%2BMoCqly6eBU7UjjD%2FDho0aYMw5hoXqKeVH8CB2sUJ5drS9lZDrn977tLTEti1aliWqQrgb25OGCjVYoCYCRbP6hNNIOO5KBkuM0U&X-Amz-Signature=ee1de5980ccba3cbe6015e3709b554d7da268bac3d0c612d268d89f14b39d478&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
