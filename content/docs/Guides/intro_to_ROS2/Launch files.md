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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IBEN2MQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDYHI6g%2BWjkLOqJfEqRZShxUnVXBkP4f0TGp5XVgKw70AiEAmgIU3Gfqg8sZmqVQEr4hYdG3mb%2FIyZYwevnXvkL14Koq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAcFYzPZd9U2hdIBQSrcAxuC0mexREYgtwOgQmXYR1fwqOa3snitvjdJXMCOGJhaJh4I48jMYPQStjaq90IYrtVC%2FpyR9xxczDSefj9wXEFe1Pip%2BQ9EKoCxkepfFYZzjQMG4Gz1uZyz5El1uPvhSINLTjXqiwlCIFlsgFe98QO3DnGmUM8rz%2BEGVjLdP6C0Kq6xPPEL5zaCgzRigdf%2FfOyU163Rw2YiB9AJKbf9lXC1uYEPE2xUxmYTgtbq%2FBmYKCsqbmHvWBgKXyoKUO8qH1%2Fs1hJAQJKgtsse92%2Bs8bS5uJLD%2FP2nM5LlgRCBYI4A187DnYm9CMoX0YUrvqo9VcGCbgUxxeLdVbnbekp2yIRvIFhgfdKvDYa70jlbcH2AOdOIOjmXP0KNCXJnE4u%2BNtmlVRQLyki1hIIroHNad2c3hZ5g8sTFObh8h8QpkcxaYC6ziqaO2LKjN0nyzHgOlLTNBQjjRFGy9c4ETYqgs6BYxkz4hegwXrRH%2BwHZKxfKkhVgZJGfbhTRJXXFyu8cQfI4%2Feh8pARx8PJDqj9Tdzhx27KKpXkC%2FzIwwo2DKMYy%2BoKhZZuDjMDC153jcICt5qxpGBxRi0vikzbhyvTrBBZvhf02Y3Fa%2Fc5KN%2Ft4byUplJKtKPNgZnhbbzsmMMXwoL8GOqUBEo%2FSGhaw7eDx6ysn6%2FYVsFv58RoGbqUpjqBqCOKBDaQERomXb%2B9uwmLt8iIXh7Jj3Cucv8WQAQX%2FOf9tVR4EFcMLp4NPRcOgEdFCLd4SfbTEaudYb5gaZwbov9MrlxC01nPjZ9zR1yylUr%2FsT%2F5mpb7%2BeFKdiO38FFziiMxs%2Fq%2FXF9uVKQ5%2BP5isD6WRRuDBSTFHC1dGTM43xs37%2Frp2iw0xxatM&X-Amz-Signature=2e801dba426324c7b9102332011f708b96dc788aa839f9cf3a8500d0f4a58dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IBEN2MQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDYHI6g%2BWjkLOqJfEqRZShxUnVXBkP4f0TGp5XVgKw70AiEAmgIU3Gfqg8sZmqVQEr4hYdG3mb%2FIyZYwevnXvkL14Koq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAcFYzPZd9U2hdIBQSrcAxuC0mexREYgtwOgQmXYR1fwqOa3snitvjdJXMCOGJhaJh4I48jMYPQStjaq90IYrtVC%2FpyR9xxczDSefj9wXEFe1Pip%2BQ9EKoCxkepfFYZzjQMG4Gz1uZyz5El1uPvhSINLTjXqiwlCIFlsgFe98QO3DnGmUM8rz%2BEGVjLdP6C0Kq6xPPEL5zaCgzRigdf%2FfOyU163Rw2YiB9AJKbf9lXC1uYEPE2xUxmYTgtbq%2FBmYKCsqbmHvWBgKXyoKUO8qH1%2Fs1hJAQJKgtsse92%2Bs8bS5uJLD%2FP2nM5LlgRCBYI4A187DnYm9CMoX0YUrvqo9VcGCbgUxxeLdVbnbekp2yIRvIFhgfdKvDYa70jlbcH2AOdOIOjmXP0KNCXJnE4u%2BNtmlVRQLyki1hIIroHNad2c3hZ5g8sTFObh8h8QpkcxaYC6ziqaO2LKjN0nyzHgOlLTNBQjjRFGy9c4ETYqgs6BYxkz4hegwXrRH%2BwHZKxfKkhVgZJGfbhTRJXXFyu8cQfI4%2Feh8pARx8PJDqj9Tdzhx27KKpXkC%2FzIwwo2DKMYy%2BoKhZZuDjMDC153jcICt5qxpGBxRi0vikzbhyvTrBBZvhf02Y3Fa%2Fc5KN%2Ft4byUplJKtKPNgZnhbbzsmMMXwoL8GOqUBEo%2FSGhaw7eDx6ysn6%2FYVsFv58RoGbqUpjqBqCOKBDaQERomXb%2B9uwmLt8iIXh7Jj3Cucv8WQAQX%2FOf9tVR4EFcMLp4NPRcOgEdFCLd4SfbTEaudYb5gaZwbov9MrlxC01nPjZ9zR1yylUr%2FsT%2F5mpb7%2BeFKdiO38FFziiMxs%2Fq%2FXF9uVKQ5%2BP5isD6WRRuDBSTFHC1dGTM43xs37%2Frp2iw0xxatM&X-Amz-Signature=7ac8a5ca2f939d300691536f4e920e15956140024d1efe6cf6b324411dca210d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IBEN2MQ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDYHI6g%2BWjkLOqJfEqRZShxUnVXBkP4f0TGp5XVgKw70AiEAmgIU3Gfqg8sZmqVQEr4hYdG3mb%2FIyZYwevnXvkL14Koq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAcFYzPZd9U2hdIBQSrcAxuC0mexREYgtwOgQmXYR1fwqOa3snitvjdJXMCOGJhaJh4I48jMYPQStjaq90IYrtVC%2FpyR9xxczDSefj9wXEFe1Pip%2BQ9EKoCxkepfFYZzjQMG4Gz1uZyz5El1uPvhSINLTjXqiwlCIFlsgFe98QO3DnGmUM8rz%2BEGVjLdP6C0Kq6xPPEL5zaCgzRigdf%2FfOyU163Rw2YiB9AJKbf9lXC1uYEPE2xUxmYTgtbq%2FBmYKCsqbmHvWBgKXyoKUO8qH1%2Fs1hJAQJKgtsse92%2Bs8bS5uJLD%2FP2nM5LlgRCBYI4A187DnYm9CMoX0YUrvqo9VcGCbgUxxeLdVbnbekp2yIRvIFhgfdKvDYa70jlbcH2AOdOIOjmXP0KNCXJnE4u%2BNtmlVRQLyki1hIIroHNad2c3hZ5g8sTFObh8h8QpkcxaYC6ziqaO2LKjN0nyzHgOlLTNBQjjRFGy9c4ETYqgs6BYxkz4hegwXrRH%2BwHZKxfKkhVgZJGfbhTRJXXFyu8cQfI4%2Feh8pARx8PJDqj9Tdzhx27KKpXkC%2FzIwwo2DKMYy%2BoKhZZuDjMDC153jcICt5qxpGBxRi0vikzbhyvTrBBZvhf02Y3Fa%2Fc5KN%2Ft4byUplJKtKPNgZnhbbzsmMMXwoL8GOqUBEo%2FSGhaw7eDx6ysn6%2FYVsFv58RoGbqUpjqBqCOKBDaQERomXb%2B9uwmLt8iIXh7Jj3Cucv8WQAQX%2FOf9tVR4EFcMLp4NPRcOgEdFCLd4SfbTEaudYb5gaZwbov9MrlxC01nPjZ9zR1yylUr%2FsT%2F5mpb7%2BeFKdiO38FFziiMxs%2Fq%2FXF9uVKQ5%2BP5isD6WRRuDBSTFHC1dGTM43xs37%2Frp2iw0xxatM&X-Amz-Signature=2726b7aee88bcc1a2a16cde51e608897ec2ec8e86ca2f68e85568dc1ca571be8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
