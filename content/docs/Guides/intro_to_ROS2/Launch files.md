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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWESQNRT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhNlEoNj80MESijiOExhwyQfXai%2B7KVgkmOUmN%2F%2BHnHAiEA%2FVpd1WSTj8RH5xMW8yKpDCKPIOgyGVIgf3dwg1c3F7YqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJN8V0IWqTgWfZSrSrcA0uXpLYF6js4ll%2FVF24HPk3jTZARwfW%2BxBXKVEU5g9EfcVihrCsqZe4u3aYppg6LYSqXWeSlhXx6wjgw1%2Fd32AhbWqkjpNrfgvLrRw81XEpcvJuFoe%2F7BPTtJ9%2FVELdEK35b418a3h0l%2FLp9NxLANfW%2Bk6K3uLLvhVep6y1imW9bDOsBDzLSRlVNd%2BkFFY1hwdtiIv8SOnAeU6KqVjjR7JKUQw1lpdBUqSm3As%2BMq0ilry1l%2FCDKYW2NJqCkE5g8WRYEvsjfoi7vPcBYrBZmVh0aDVdoIsTXXS0Gz4wk%2FtTYj9NHkb%2FEdVzev3UpD%2FgR5IUItDuC40rpNoAn7kgClAQ3Fh7DhEzP3V88xFvQ%2BDuUkTqcDQAHxtk5TuO%2F%2Bv18tJFHWW2zkezY1ttpAOdLA1c3DlaA%2BnCkwoTEhOxDEE8DHqOuxczEh6NdPSfzfbukouUMPkskv%2B%2BlpxdRyhUtp8kWFgAbqpFXT94OcSmY9d1iIrcQVVm2TBlrQIP1Er%2BYG9gOhaBqr7rd8QYUIxZovp8sQHJgaUpoemEm0n5BgO%2Bf6EQsNttx9BwDBtsB71aEPZNSzOx4D%2FsWQqSyC57QiG26XqOQP3wx9SIiBeVa3GxgQFfwY1ybn5hdi%2B7KMKPh9sAGOqUBSGkGGxbx3Q5orqQdOsD%2FavD33DckNWURgj4bCGshpIhIxjqlTZjfgaBWL4O1UOWSicsV%2Br%2BBZ1qpuYiD3VHNO%2BIkGWiEkIwNVyTl1SJ0eez%2Fm7GoxU9lgBKw3xCft42Dz6TLzXfAp5XtnwW2NLVQ9h3S9pmbwYkR3r8z0f6Fd%2FNqRoHo9NSn9UoFGXS3WQ7L25iPCQjsqWtkVkEh345QdBQ5%2B%2BCu&X-Amz-Signature=2bd79722971ce0818f4a988bcbce3f5ed43e637641ce278139f69113f5bb493f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWESQNRT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhNlEoNj80MESijiOExhwyQfXai%2B7KVgkmOUmN%2F%2BHnHAiEA%2FVpd1WSTj8RH5xMW8yKpDCKPIOgyGVIgf3dwg1c3F7YqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJN8V0IWqTgWfZSrSrcA0uXpLYF6js4ll%2FVF24HPk3jTZARwfW%2BxBXKVEU5g9EfcVihrCsqZe4u3aYppg6LYSqXWeSlhXx6wjgw1%2Fd32AhbWqkjpNrfgvLrRw81XEpcvJuFoe%2F7BPTtJ9%2FVELdEK35b418a3h0l%2FLp9NxLANfW%2Bk6K3uLLvhVep6y1imW9bDOsBDzLSRlVNd%2BkFFY1hwdtiIv8SOnAeU6KqVjjR7JKUQw1lpdBUqSm3As%2BMq0ilry1l%2FCDKYW2NJqCkE5g8WRYEvsjfoi7vPcBYrBZmVh0aDVdoIsTXXS0Gz4wk%2FtTYj9NHkb%2FEdVzev3UpD%2FgR5IUItDuC40rpNoAn7kgClAQ3Fh7DhEzP3V88xFvQ%2BDuUkTqcDQAHxtk5TuO%2F%2Bv18tJFHWW2zkezY1ttpAOdLA1c3DlaA%2BnCkwoTEhOxDEE8DHqOuxczEh6NdPSfzfbukouUMPkskv%2B%2BlpxdRyhUtp8kWFgAbqpFXT94OcSmY9d1iIrcQVVm2TBlrQIP1Er%2BYG9gOhaBqr7rd8QYUIxZovp8sQHJgaUpoemEm0n5BgO%2Bf6EQsNttx9BwDBtsB71aEPZNSzOx4D%2FsWQqSyC57QiG26XqOQP3wx9SIiBeVa3GxgQFfwY1ybn5hdi%2B7KMKPh9sAGOqUBSGkGGxbx3Q5orqQdOsD%2FavD33DckNWURgj4bCGshpIhIxjqlTZjfgaBWL4O1UOWSicsV%2Br%2BBZ1qpuYiD3VHNO%2BIkGWiEkIwNVyTl1SJ0eez%2Fm7GoxU9lgBKw3xCft42Dz6TLzXfAp5XtnwW2NLVQ9h3S9pmbwYkR3r8z0f6Fd%2FNqRoHo9NSn9UoFGXS3WQ7L25iPCQjsqWtkVkEh345QdBQ5%2B%2BCu&X-Amz-Signature=8ef0a53fd721c0bca9f1880e1d4ca0497a4668239e6cf2400e3876942cda5aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWESQNRT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhNlEoNj80MESijiOExhwyQfXai%2B7KVgkmOUmN%2F%2BHnHAiEA%2FVpd1WSTj8RH5xMW8yKpDCKPIOgyGVIgf3dwg1c3F7YqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJN8V0IWqTgWfZSrSrcA0uXpLYF6js4ll%2FVF24HPk3jTZARwfW%2BxBXKVEU5g9EfcVihrCsqZe4u3aYppg6LYSqXWeSlhXx6wjgw1%2Fd32AhbWqkjpNrfgvLrRw81XEpcvJuFoe%2F7BPTtJ9%2FVELdEK35b418a3h0l%2FLp9NxLANfW%2Bk6K3uLLvhVep6y1imW9bDOsBDzLSRlVNd%2BkFFY1hwdtiIv8SOnAeU6KqVjjR7JKUQw1lpdBUqSm3As%2BMq0ilry1l%2FCDKYW2NJqCkE5g8WRYEvsjfoi7vPcBYrBZmVh0aDVdoIsTXXS0Gz4wk%2FtTYj9NHkb%2FEdVzev3UpD%2FgR5IUItDuC40rpNoAn7kgClAQ3Fh7DhEzP3V88xFvQ%2BDuUkTqcDQAHxtk5TuO%2F%2Bv18tJFHWW2zkezY1ttpAOdLA1c3DlaA%2BnCkwoTEhOxDEE8DHqOuxczEh6NdPSfzfbukouUMPkskv%2B%2BlpxdRyhUtp8kWFgAbqpFXT94OcSmY9d1iIrcQVVm2TBlrQIP1Er%2BYG9gOhaBqr7rd8QYUIxZovp8sQHJgaUpoemEm0n5BgO%2Bf6EQsNttx9BwDBtsB71aEPZNSzOx4D%2FsWQqSyC57QiG26XqOQP3wx9SIiBeVa3GxgQFfwY1ybn5hdi%2B7KMKPh9sAGOqUBSGkGGxbx3Q5orqQdOsD%2FavD33DckNWURgj4bCGshpIhIxjqlTZjfgaBWL4O1UOWSicsV%2Br%2BBZ1qpuYiD3VHNO%2BIkGWiEkIwNVyTl1SJ0eez%2Fm7GoxU9lgBKw3xCft42Dz6TLzXfAp5XtnwW2NLVQ9h3S9pmbwYkR3r8z0f6Fd%2FNqRoHo9NSn9UoFGXS3WQ7L25iPCQjsqWtkVkEh345QdBQ5%2B%2BCu&X-Amz-Signature=c06170ed0c81d453ad37bc66fc66a67ac809ce70251b6625528a7a45c230a6db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
