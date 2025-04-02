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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L5VYHDB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCRVJH964Ld0sI8%2B4cJN%2BuCGRJ8nAVdLOE59O%2FmAYof8QIgFQcSAS063WX7jQkvmcxOLZ98NxLND1fc9Tvj%2BVfnrEUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWIbSX6fB49%2FmNkYSrcA2f9lYdYIjwDXiLC129lUySQzKsQfex3rqVMYnNi920xJf%2BjiTxHHUPL9ZyQr7dreVU0x56e1frjWeQhKouvKyFQlonOnjlbf3QAwBxaGFVxXBQCN%2BoSE%2FQbNhBl4w8siTB92aCjCX5cgVp3sjfJkaE6t%2FOEirt%2Bf4%2BlcMRurcDnpTpnhghWVefntzkC0AIQa6o4i5%2BEaxNPY0W6kYmIx1uhMAlC4Gj6dHWeMsuMFnnPUL73kPF5BNn0tdMaYqui%2FzxuWwojjuq1aPgZ3kKwHkoV%2FVclCLnFRrkTxSjL4XBZZL3CscgLgSINmTgG6whBxE0qkcqARk7Hh9OoQFf30wP0s3pHLxWzYAnHC2XoJMux0ipSbwKG9PBkdExwVQU%2Fwaiz3701ATozuRSK1M4E1knqWDXqTvJs59tSpm8p9A4d51e5ojQNajofb6PgAGiOEclcXWOchcYlm%2FaknYS8Ub7zeaMfbBnQx8hfPMi3MrDDob6E2Ui3Q2Yg0w8R7pAx6g4xkDYteuqgcd1hxX%2F2ol0fHZNU%2FHuDT7ZosTeXhrh933Elt21UdOZlFcvGnOqvmFHniMKgxzZ2En3YYX91hXgjfwI80FCDtHjs6nRVYA6zXjO9edOYrINWNu5GMOy4sr8GOqUB2JL6w3EcVpob104%2FGUbPXN2tD1St6cb4FqKuQxe1%2FtZv2kArca69Bh6goJgOJxNB7SKwLg%2Bm4lyXGWM6QEQCO8gBDTxpoqvSrplAjfVp3lhLyYJWV1ioRq5L5pZajs4AcFuXwsj8YZVZIE1ivzLxwL%2BS8TJ5wECKZujOyHLuPxBr9sa5DyPnBx9Nx7Z%2F7JClANZaPQODS7vxV%2BXKFUhoqyMg%2BJBP&X-Amz-Signature=53f0f30a0441357f176c4dc0fe3b904345546dba3ab91ccfa17bed6ff2660844&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L5VYHDB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCRVJH964Ld0sI8%2B4cJN%2BuCGRJ8nAVdLOE59O%2FmAYof8QIgFQcSAS063WX7jQkvmcxOLZ98NxLND1fc9Tvj%2BVfnrEUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWIbSX6fB49%2FmNkYSrcA2f9lYdYIjwDXiLC129lUySQzKsQfex3rqVMYnNi920xJf%2BjiTxHHUPL9ZyQr7dreVU0x56e1frjWeQhKouvKyFQlonOnjlbf3QAwBxaGFVxXBQCN%2BoSE%2FQbNhBl4w8siTB92aCjCX5cgVp3sjfJkaE6t%2FOEirt%2Bf4%2BlcMRurcDnpTpnhghWVefntzkC0AIQa6o4i5%2BEaxNPY0W6kYmIx1uhMAlC4Gj6dHWeMsuMFnnPUL73kPF5BNn0tdMaYqui%2FzxuWwojjuq1aPgZ3kKwHkoV%2FVclCLnFRrkTxSjL4XBZZL3CscgLgSINmTgG6whBxE0qkcqARk7Hh9OoQFf30wP0s3pHLxWzYAnHC2XoJMux0ipSbwKG9PBkdExwVQU%2Fwaiz3701ATozuRSK1M4E1knqWDXqTvJs59tSpm8p9A4d51e5ojQNajofb6PgAGiOEclcXWOchcYlm%2FaknYS8Ub7zeaMfbBnQx8hfPMi3MrDDob6E2Ui3Q2Yg0w8R7pAx6g4xkDYteuqgcd1hxX%2F2ol0fHZNU%2FHuDT7ZosTeXhrh933Elt21UdOZlFcvGnOqvmFHniMKgxzZ2En3YYX91hXgjfwI80FCDtHjs6nRVYA6zXjO9edOYrINWNu5GMOy4sr8GOqUB2JL6w3EcVpob104%2FGUbPXN2tD1St6cb4FqKuQxe1%2FtZv2kArca69Bh6goJgOJxNB7SKwLg%2Bm4lyXGWM6QEQCO8gBDTxpoqvSrplAjfVp3lhLyYJWV1ioRq5L5pZajs4AcFuXwsj8YZVZIE1ivzLxwL%2BS8TJ5wECKZujOyHLuPxBr9sa5DyPnBx9Nx7Z%2F7JClANZaPQODS7vxV%2BXKFUhoqyMg%2BJBP&X-Amz-Signature=1fd583a3d0d4e54ed5abe7771d9ea6efbb55942fa08216619b33b011ab851c98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L5VYHDB%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCRVJH964Ld0sI8%2B4cJN%2BuCGRJ8nAVdLOE59O%2FmAYof8QIgFQcSAS063WX7jQkvmcxOLZ98NxLND1fc9Tvj%2BVfnrEUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWIbSX6fB49%2FmNkYSrcA2f9lYdYIjwDXiLC129lUySQzKsQfex3rqVMYnNi920xJf%2BjiTxHHUPL9ZyQr7dreVU0x56e1frjWeQhKouvKyFQlonOnjlbf3QAwBxaGFVxXBQCN%2BoSE%2FQbNhBl4w8siTB92aCjCX5cgVp3sjfJkaE6t%2FOEirt%2Bf4%2BlcMRurcDnpTpnhghWVefntzkC0AIQa6o4i5%2BEaxNPY0W6kYmIx1uhMAlC4Gj6dHWeMsuMFnnPUL73kPF5BNn0tdMaYqui%2FzxuWwojjuq1aPgZ3kKwHkoV%2FVclCLnFRrkTxSjL4XBZZL3CscgLgSINmTgG6whBxE0qkcqARk7Hh9OoQFf30wP0s3pHLxWzYAnHC2XoJMux0ipSbwKG9PBkdExwVQU%2Fwaiz3701ATozuRSK1M4E1knqWDXqTvJs59tSpm8p9A4d51e5ojQNajofb6PgAGiOEclcXWOchcYlm%2FaknYS8Ub7zeaMfbBnQx8hfPMi3MrDDob6E2Ui3Q2Yg0w8R7pAx6g4xkDYteuqgcd1hxX%2F2ol0fHZNU%2FHuDT7ZosTeXhrh933Elt21UdOZlFcvGnOqvmFHniMKgxzZ2En3YYX91hXgjfwI80FCDtHjs6nRVYA6zXjO9edOYrINWNu5GMOy4sr8GOqUB2JL6w3EcVpob104%2FGUbPXN2tD1St6cb4FqKuQxe1%2FtZv2kArca69Bh6goJgOJxNB7SKwLg%2Bm4lyXGWM6QEQCO8gBDTxpoqvSrplAjfVp3lhLyYJWV1ioRq5L5pZajs4AcFuXwsj8YZVZIE1ivzLxwL%2BS8TJ5wECKZujOyHLuPxBr9sa5DyPnBx9Nx7Z%2F7JClANZaPQODS7vxV%2BXKFUhoqyMg%2BJBP&X-Amz-Signature=1acc86d0c345850443ff57fa3016ca05e53da9062dc372dd7551a3f5e9c7cdc8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
