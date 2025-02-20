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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBUJCQZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHj9yHHXUWva7H4%2BY4rZU%2Fk2JyNm6ieU4NuDT2o1s48AIhAN21c2J1JVUczsFaCCz1A61Dnx%2B1%2Fp5pGmCnblvURrbIKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvKITen3uz0BIXHuoq3ANfO%2FFZljno3miqFB010mqtATTVVoqqea8GTlz%2FjRQbcKw5XHHLMQ3dJYNKmoJZGnKC39IGjq0QLW7BXOS2ofbos8ZaIWl8g5ZBT5WSDm5j84r5AOBD%2B43223mffImvTuZJjfoFr8HJbMUdDzKlyd7eep8UueJBBBOSXxbpFjKsh6XpqyGE2hBs9SQ0OWnCGzoueOiUM14%2FtCLcwVDDNq5oPqLdzY22dgjO2%2FaXWECjwB5safaPvY%2B%2Bhgm2UD%2FBM%2Fo9qWmkI32%2BBiI3ont16mB0LKr7afO4H0WsUorZ5OUtyMNwygvToNxWEUtoF4XZ0bCpmXQeG53z36o%2Fu%2FPO5vssQABVKOX1r6xmsuhCD7CxuUOXqeiRjCxvj%2FJjSNjPP26%2F%2FWkLtIFHg3QRQaLfs3PAM4KMoyhoPLsr8f8abmwehHU%2B%2FC6sHJhZVa5OElLs0egSOaljIjCaJa9yGfkNmB2tGgYirwafRgTs6%2BgkKyqdms7O4cFpz%2FsoWt1owKeU6UMzfI11EvVS8rf5zPgojnLiQypWEZ%2BxsPPeojkkrUHN%2BksZ3xj0wHbj4voFrdwx7s4b5G34YosEV5tQSEjfbKsVbJ69P%2BnarmZfdl%2B%2Fw30qLhnOWmdnjbQI1h8WzTDh%2Ftq9BjqkAXmC9yO3RLsLgohuk3UjxV5XBkWqOyi7ph1EhDHbbKReYoaBo8GP67b1hyfExSEbaA0LOmHJT6txocGJBieNrVuTZfRPHTbIjE28cMsBXRnmityBCY8mkFk4XTr4%2FWjn%2FCrfT35aA%2F%2FJ%2BY6zt6vovPPqRllTKV9OObMpOVrFW2A7ufyWpAczKXUGIkOsXtlZ%2B%2FQ2HQoxR5FK9HK9xbirpIIIFxBT&X-Amz-Signature=d3e8784d4051487559dd59c8fdef55c44df9ba2cf9a989220377a2590df1eda9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBUJCQZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHj9yHHXUWva7H4%2BY4rZU%2Fk2JyNm6ieU4NuDT2o1s48AIhAN21c2J1JVUczsFaCCz1A61Dnx%2B1%2Fp5pGmCnblvURrbIKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvKITen3uz0BIXHuoq3ANfO%2FFZljno3miqFB010mqtATTVVoqqea8GTlz%2FjRQbcKw5XHHLMQ3dJYNKmoJZGnKC39IGjq0QLW7BXOS2ofbos8ZaIWl8g5ZBT5WSDm5j84r5AOBD%2B43223mffImvTuZJjfoFr8HJbMUdDzKlyd7eep8UueJBBBOSXxbpFjKsh6XpqyGE2hBs9SQ0OWnCGzoueOiUM14%2FtCLcwVDDNq5oPqLdzY22dgjO2%2FaXWECjwB5safaPvY%2B%2Bhgm2UD%2FBM%2Fo9qWmkI32%2BBiI3ont16mB0LKr7afO4H0WsUorZ5OUtyMNwygvToNxWEUtoF4XZ0bCpmXQeG53z36o%2Fu%2FPO5vssQABVKOX1r6xmsuhCD7CxuUOXqeiRjCxvj%2FJjSNjPP26%2F%2FWkLtIFHg3QRQaLfs3PAM4KMoyhoPLsr8f8abmwehHU%2B%2FC6sHJhZVa5OElLs0egSOaljIjCaJa9yGfkNmB2tGgYirwafRgTs6%2BgkKyqdms7O4cFpz%2FsoWt1owKeU6UMzfI11EvVS8rf5zPgojnLiQypWEZ%2BxsPPeojkkrUHN%2BksZ3xj0wHbj4voFrdwx7s4b5G34YosEV5tQSEjfbKsVbJ69P%2BnarmZfdl%2B%2Fw30qLhnOWmdnjbQI1h8WzTDh%2Ftq9BjqkAXmC9yO3RLsLgohuk3UjxV5XBkWqOyi7ph1EhDHbbKReYoaBo8GP67b1hyfExSEbaA0LOmHJT6txocGJBieNrVuTZfRPHTbIjE28cMsBXRnmityBCY8mkFk4XTr4%2FWjn%2FCrfT35aA%2F%2FJ%2BY6zt6vovPPqRllTKV9OObMpOVrFW2A7ufyWpAczKXUGIkOsXtlZ%2B%2FQ2HQoxR5FK9HK9xbirpIIIFxBT&X-Amz-Signature=34b1fd3aa25baf42997c7e15d8fae8c3e2e1fc229d615c499445b0742f27b694&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBUJCQZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHj9yHHXUWva7H4%2BY4rZU%2Fk2JyNm6ieU4NuDT2o1s48AIhAN21c2J1JVUczsFaCCz1A61Dnx%2B1%2Fp5pGmCnblvURrbIKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvKITen3uz0BIXHuoq3ANfO%2FFZljno3miqFB010mqtATTVVoqqea8GTlz%2FjRQbcKw5XHHLMQ3dJYNKmoJZGnKC39IGjq0QLW7BXOS2ofbos8ZaIWl8g5ZBT5WSDm5j84r5AOBD%2B43223mffImvTuZJjfoFr8HJbMUdDzKlyd7eep8UueJBBBOSXxbpFjKsh6XpqyGE2hBs9SQ0OWnCGzoueOiUM14%2FtCLcwVDDNq5oPqLdzY22dgjO2%2FaXWECjwB5safaPvY%2B%2Bhgm2UD%2FBM%2Fo9qWmkI32%2BBiI3ont16mB0LKr7afO4H0WsUorZ5OUtyMNwygvToNxWEUtoF4XZ0bCpmXQeG53z36o%2Fu%2FPO5vssQABVKOX1r6xmsuhCD7CxuUOXqeiRjCxvj%2FJjSNjPP26%2F%2FWkLtIFHg3QRQaLfs3PAM4KMoyhoPLsr8f8abmwehHU%2B%2FC6sHJhZVa5OElLs0egSOaljIjCaJa9yGfkNmB2tGgYirwafRgTs6%2BgkKyqdms7O4cFpz%2FsoWt1owKeU6UMzfI11EvVS8rf5zPgojnLiQypWEZ%2BxsPPeojkkrUHN%2BksZ3xj0wHbj4voFrdwx7s4b5G34YosEV5tQSEjfbKsVbJ69P%2BnarmZfdl%2B%2Fw30qLhnOWmdnjbQI1h8WzTDh%2Ftq9BjqkAXmC9yO3RLsLgohuk3UjxV5XBkWqOyi7ph1EhDHbbKReYoaBo8GP67b1hyfExSEbaA0LOmHJT6txocGJBieNrVuTZfRPHTbIjE28cMsBXRnmityBCY8mkFk4XTr4%2FWjn%2FCrfT35aA%2F%2FJ%2BY6zt6vovPPqRllTKV9OObMpOVrFW2A7ufyWpAczKXUGIkOsXtlZ%2B%2FQ2HQoxR5FK9HK9xbirpIIIFxBT&X-Amz-Signature=938f90fcfcc5cbb67a3ec2a62e7a92f9b3459f5fa272259225e12ae43847a205&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
