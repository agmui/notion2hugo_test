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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGD2Q7AV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhwmIuVEnXJquuN1X7xrwfouR%2F3%2FnGHxSH4KYaWD9I9AiBNdht8XGXaorECfMIRV0iF5rhvZwe%2BREtAUY%2BvIr%2BjFSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMneHGqMDnGfl%2Ft9EIKtwDo1xwk2xfXxdl6w23%2Fs55kRt1BNO6VFycSNM9ZMgld2SPYzvcJ10lRzAsDzTEj%2FDlA%2BFm%2FDvKI169KPyM88b6psh5Rp%2FwpVU3aqhxI8SFcfF0vwK0EEva%2FUO5ce63OvYRzBGDbIw6GKizft%2BK2iIe5HVjzWYGhyhcrBMANp47EkmA80gvx1HvVC89V%2BaV%2Beqk9En9FrGdjXe9vDvzDxfQVChoatNntGjHJIOnhIf3kTRs%2Brh1mqr30NsEQeOUv9Ur8FdcZzcR68yAK1XVGNj8rMLSfF8ocbvvtg5Zylo6vz34l88v3FItk%2FkHK%2F%2FVkW83fsCdIzJhhTndwEFN4NnM23JCOyNN1huvkaajXVFYLrIhXA%2B7aOBRhNy3Ck6jpKN%2BlSf9UzPQmz6r0TV8lmlMIEQVh2G0cSt7k2T05c%2BnMP7fmx9qfa%2FxTEZabK0N4iWf45dteuktplCUwO7JYKLcB3VkpmB0OPH%2BJ%2FsUWfRP8UkBmNDZu7KCv0bsPye%2FZ7jFuMf0ekWHb0%2B%2BypZdBma2OPDyxkTTCHfqP09zZ2w%2BGeeufS3r2EaXHe%2B50PDPvEmOYzazulxNHtp1i%2BJoVwaO03UKgUgx2MNggvA%2FBxjSJ%2BGUUdI%2BLuIuzKER0CEw9uTDvwY6pgEolEX4GpXDUhychO%2FJJsFtaVZoA15pyo%2FzwcnA5HRt1y%2BBYH%2BvQN1R7tDGKCyzbXnsQbl0xWa%2Fyv1yltE6qJvggdBjQ5RjzodAjzV4NX2y9MiECP4MEy9Ak4v1s9oAa3oqFho988tUr1BOJakqjkF%2BlLJoPoDfiYb4XszrWRWpdLb9eajS1POjwDvTMwxyku6M6jDIBz3mjfLxY4uMvY%2BQ6wq%2BIaYj&X-Amz-Signature=108f24d852c24a66ffbd09dd153130b23f60f0583942d8e3fc5b772b2127a5de&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGD2Q7AV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhwmIuVEnXJquuN1X7xrwfouR%2F3%2FnGHxSH4KYaWD9I9AiBNdht8XGXaorECfMIRV0iF5rhvZwe%2BREtAUY%2BvIr%2BjFSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMneHGqMDnGfl%2Ft9EIKtwDo1xwk2xfXxdl6w23%2Fs55kRt1BNO6VFycSNM9ZMgld2SPYzvcJ10lRzAsDzTEj%2FDlA%2BFm%2FDvKI169KPyM88b6psh5Rp%2FwpVU3aqhxI8SFcfF0vwK0EEva%2FUO5ce63OvYRzBGDbIw6GKizft%2BK2iIe5HVjzWYGhyhcrBMANp47EkmA80gvx1HvVC89V%2BaV%2Beqk9En9FrGdjXe9vDvzDxfQVChoatNntGjHJIOnhIf3kTRs%2Brh1mqr30NsEQeOUv9Ur8FdcZzcR68yAK1XVGNj8rMLSfF8ocbvvtg5Zylo6vz34l88v3FItk%2FkHK%2F%2FVkW83fsCdIzJhhTndwEFN4NnM23JCOyNN1huvkaajXVFYLrIhXA%2B7aOBRhNy3Ck6jpKN%2BlSf9UzPQmz6r0TV8lmlMIEQVh2G0cSt7k2T05c%2BnMP7fmx9qfa%2FxTEZabK0N4iWf45dteuktplCUwO7JYKLcB3VkpmB0OPH%2BJ%2FsUWfRP8UkBmNDZu7KCv0bsPye%2FZ7jFuMf0ekWHb0%2B%2BypZdBma2OPDyxkTTCHfqP09zZ2w%2BGeeufS3r2EaXHe%2B50PDPvEmOYzazulxNHtp1i%2BJoVwaO03UKgUgx2MNggvA%2FBxjSJ%2BGUUdI%2BLuIuzKER0CEw9uTDvwY6pgEolEX4GpXDUhychO%2FJJsFtaVZoA15pyo%2FzwcnA5HRt1y%2BBYH%2BvQN1R7tDGKCyzbXnsQbl0xWa%2Fyv1yltE6qJvggdBjQ5RjzodAjzV4NX2y9MiECP4MEy9Ak4v1s9oAa3oqFho988tUr1BOJakqjkF%2BlLJoPoDfiYb4XszrWRWpdLb9eajS1POjwDvTMwxyku6M6jDIBz3mjfLxY4uMvY%2BQ6wq%2BIaYj&X-Amz-Signature=4f1f9fd6cd2d6cc08f3aa2605adbe998049bde5708124154184d91aba901e30b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGD2Q7AV%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhwmIuVEnXJquuN1X7xrwfouR%2F3%2FnGHxSH4KYaWD9I9AiBNdht8XGXaorECfMIRV0iF5rhvZwe%2BREtAUY%2BvIr%2BjFSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMneHGqMDnGfl%2Ft9EIKtwDo1xwk2xfXxdl6w23%2Fs55kRt1BNO6VFycSNM9ZMgld2SPYzvcJ10lRzAsDzTEj%2FDlA%2BFm%2FDvKI169KPyM88b6psh5Rp%2FwpVU3aqhxI8SFcfF0vwK0EEva%2FUO5ce63OvYRzBGDbIw6GKizft%2BK2iIe5HVjzWYGhyhcrBMANp47EkmA80gvx1HvVC89V%2BaV%2Beqk9En9FrGdjXe9vDvzDxfQVChoatNntGjHJIOnhIf3kTRs%2Brh1mqr30NsEQeOUv9Ur8FdcZzcR68yAK1XVGNj8rMLSfF8ocbvvtg5Zylo6vz34l88v3FItk%2FkHK%2F%2FVkW83fsCdIzJhhTndwEFN4NnM23JCOyNN1huvkaajXVFYLrIhXA%2B7aOBRhNy3Ck6jpKN%2BlSf9UzPQmz6r0TV8lmlMIEQVh2G0cSt7k2T05c%2BnMP7fmx9qfa%2FxTEZabK0N4iWf45dteuktplCUwO7JYKLcB3VkpmB0OPH%2BJ%2FsUWfRP8UkBmNDZu7KCv0bsPye%2FZ7jFuMf0ekWHb0%2B%2BypZdBma2OPDyxkTTCHfqP09zZ2w%2BGeeufS3r2EaXHe%2B50PDPvEmOYzazulxNHtp1i%2BJoVwaO03UKgUgx2MNggvA%2FBxjSJ%2BGUUdI%2BLuIuzKER0CEw9uTDvwY6pgEolEX4GpXDUhychO%2FJJsFtaVZoA15pyo%2FzwcnA5HRt1y%2BBYH%2BvQN1R7tDGKCyzbXnsQbl0xWa%2Fyv1yltE6qJvggdBjQ5RjzodAjzV4NX2y9MiECP4MEy9Ak4v1s9oAa3oqFho988tUr1BOJakqjkF%2BlLJoPoDfiYb4XszrWRWpdLb9eajS1POjwDvTMwxyku6M6jDIBz3mjfLxY4uMvY%2BQ6wq%2BIaYj&X-Amz-Signature=e18ef893438e8295d462d63251bf2fa41131f6fa99123be1842a5061b432bb31&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
