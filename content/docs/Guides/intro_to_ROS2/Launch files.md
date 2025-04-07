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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSLW6QG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmJRrjo8GTkt2Bu9VTow1DtJdBIRWnw9D78DbfADKXNAiEA24Gqyaam9YLsiNKVUiShXUTsgHQWAN03wu7lgFVIH%2F0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFCk%2BaoaQH7NlsG2zCrcAzWzXgtHzYd6Q45zfs%2FZSDnGYvbm3le%2Bnt1k50UcmXmeys7eFzzdCzEd1EbHqMZ2ko2OLFfhcmVIVwMRlPj4FmGGu477P%2B3TvUk11Qo4QhRLCOVOaD7qICN9IYE4gMF12NtRCjK3v4t70yv3M0NDdKeT9ibYWkzJ2%2BTOL%2F4OgktZuDYHV7IRS%2B6qdMbx%2FzcH8vRwo6SqvzhJXa2tN4xkExMWEu5wx30PR5BZCTofTR%2BrWuEafZASajStP9Jb8G8DDB87n9TiUGrklCwcb7FqPzAf9FlwhGT4VVAjZiKs78QwDxc81mWbr4r202acly04ivyoqqmqBAYpzvBHfdp24MS%2BJ2hLF2LVYRti3RkXdlpWDrLazZEOz5SpiyRDYi7LgKKHRADXqwGHlB1IMp1A9iSqSEVKOI7UrHWegGWEZ%2FMRmMFOHO%2F7oefC%2BlnIQnaxwgAhJMueWUq%2BZICO8KEIRxrREtcxwwq%2BQt7IhT8yY07eR5ZOSZxwlKuhWnk3GdSSAiD8eUAi%2BZWtbn1y9Um3KT%2BGXq%2FWRWcXHoAbKdNtQhd2x2In2pzfQy5BpOsSsQPoejy1ptUuurKGVV5puI6oABobaNXU0s9doOy3lFigYj3WNUDERvWelJTEshpGMM6E0b8GOqUBhzm30h9M0nKgu7ESNx4gIQg%2FZ2NgsLH2hUvPxLkvLSHMLEpQCmY%2Bvm8p31eQV4qE3DR%2BryMjdxo56laBnmrgw5Om5MS5QdvacoqbgbfElcrvglUMosyWSf4eAuZUPtlXMhSJZojg0R2XGvNZkoaFqOWXLqFkwOemi9lg1wPLbArcsOZFUng6nd%2BmswaVquMbwPttceORIeGbjqarDzXazJC0veIZ&X-Amz-Signature=51d9ef11b7d84600070fa81cde5e893e1171b804d8199960eb442e525495439f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSLW6QG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmJRrjo8GTkt2Bu9VTow1DtJdBIRWnw9D78DbfADKXNAiEA24Gqyaam9YLsiNKVUiShXUTsgHQWAN03wu7lgFVIH%2F0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFCk%2BaoaQH7NlsG2zCrcAzWzXgtHzYd6Q45zfs%2FZSDnGYvbm3le%2Bnt1k50UcmXmeys7eFzzdCzEd1EbHqMZ2ko2OLFfhcmVIVwMRlPj4FmGGu477P%2B3TvUk11Qo4QhRLCOVOaD7qICN9IYE4gMF12NtRCjK3v4t70yv3M0NDdKeT9ibYWkzJ2%2BTOL%2F4OgktZuDYHV7IRS%2B6qdMbx%2FzcH8vRwo6SqvzhJXa2tN4xkExMWEu5wx30PR5BZCTofTR%2BrWuEafZASajStP9Jb8G8DDB87n9TiUGrklCwcb7FqPzAf9FlwhGT4VVAjZiKs78QwDxc81mWbr4r202acly04ivyoqqmqBAYpzvBHfdp24MS%2BJ2hLF2LVYRti3RkXdlpWDrLazZEOz5SpiyRDYi7LgKKHRADXqwGHlB1IMp1A9iSqSEVKOI7UrHWegGWEZ%2FMRmMFOHO%2F7oefC%2BlnIQnaxwgAhJMueWUq%2BZICO8KEIRxrREtcxwwq%2BQt7IhT8yY07eR5ZOSZxwlKuhWnk3GdSSAiD8eUAi%2BZWtbn1y9Um3KT%2BGXq%2FWRWcXHoAbKdNtQhd2x2In2pzfQy5BpOsSsQPoejy1ptUuurKGVV5puI6oABobaNXU0s9doOy3lFigYj3WNUDERvWelJTEshpGMM6E0b8GOqUBhzm30h9M0nKgu7ESNx4gIQg%2FZ2NgsLH2hUvPxLkvLSHMLEpQCmY%2Bvm8p31eQV4qE3DR%2BryMjdxo56laBnmrgw5Om5MS5QdvacoqbgbfElcrvglUMosyWSf4eAuZUPtlXMhSJZojg0R2XGvNZkoaFqOWXLqFkwOemi9lg1wPLbArcsOZFUng6nd%2BmswaVquMbwPttceORIeGbjqarDzXazJC0veIZ&X-Amz-Signature=8700e5784a81d8ca2a7eba5ce544671f2d7fba9644b79fd8d1e379c33ccf35bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSLW6QG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmJRrjo8GTkt2Bu9VTow1DtJdBIRWnw9D78DbfADKXNAiEA24Gqyaam9YLsiNKVUiShXUTsgHQWAN03wu7lgFVIH%2F0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFCk%2BaoaQH7NlsG2zCrcAzWzXgtHzYd6Q45zfs%2FZSDnGYvbm3le%2Bnt1k50UcmXmeys7eFzzdCzEd1EbHqMZ2ko2OLFfhcmVIVwMRlPj4FmGGu477P%2B3TvUk11Qo4QhRLCOVOaD7qICN9IYE4gMF12NtRCjK3v4t70yv3M0NDdKeT9ibYWkzJ2%2BTOL%2F4OgktZuDYHV7IRS%2B6qdMbx%2FzcH8vRwo6SqvzhJXa2tN4xkExMWEu5wx30PR5BZCTofTR%2BrWuEafZASajStP9Jb8G8DDB87n9TiUGrklCwcb7FqPzAf9FlwhGT4VVAjZiKs78QwDxc81mWbr4r202acly04ivyoqqmqBAYpzvBHfdp24MS%2BJ2hLF2LVYRti3RkXdlpWDrLazZEOz5SpiyRDYi7LgKKHRADXqwGHlB1IMp1A9iSqSEVKOI7UrHWegGWEZ%2FMRmMFOHO%2F7oefC%2BlnIQnaxwgAhJMueWUq%2BZICO8KEIRxrREtcxwwq%2BQt7IhT8yY07eR5ZOSZxwlKuhWnk3GdSSAiD8eUAi%2BZWtbn1y9Um3KT%2BGXq%2FWRWcXHoAbKdNtQhd2x2In2pzfQy5BpOsSsQPoejy1ptUuurKGVV5puI6oABobaNXU0s9doOy3lFigYj3WNUDERvWelJTEshpGMM6E0b8GOqUBhzm30h9M0nKgu7ESNx4gIQg%2FZ2NgsLH2hUvPxLkvLSHMLEpQCmY%2Bvm8p31eQV4qE3DR%2BryMjdxo56laBnmrgw5Om5MS5QdvacoqbgbfElcrvglUMosyWSf4eAuZUPtlXMhSJZojg0R2XGvNZkoaFqOWXLqFkwOemi9lg1wPLbArcsOZFUng6nd%2BmswaVquMbwPttceORIeGbjqarDzXazJC0veIZ&X-Amz-Signature=38959156499d1de8fe4b7a6c9e95c32235982f72f247aa2947c13052effb2852&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
