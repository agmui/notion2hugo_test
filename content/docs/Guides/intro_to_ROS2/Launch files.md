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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6W47IP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfFZsMRfuzT4lZDxrh%2BtkEx%2Bt22hWBUmYZJvpB3sp25AiEApEX1Swa4eUjbRh84pnHmfeqO9iahYQCgdRXBw%2BCeKWcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPBIcMkPp0m3Yd9%2FOircA3kONXVI84WDj2qKsAZHjlRJKbEKV99ISOeZKXItvLqLcJpw1IOQmYNo9sQGIjmfMllSU%2BmAcJk61RhBNas5Zi%2BPBVDhU3wvhC73CAsETSTEUoYLMgATXb9zYxMFfimABJe%2BAo4t7FvzdUS1%2B7FbTL%2BDZtsp0qR%2F%2FCpmp5OOvS02foQVMBf5rRFueV9%2Btdx4MKnDKTvoGvmG0ZZGOzffSDeFT1rMZ75U%2FwFnlbhv1K1YEwn102omOp6zbl4r4%2BdSPkkbMAtIooxnKopdrHsKjrAggwi%2F3ho1WZay%2BSWVtfI%2F0J5XoSmFXBKDZSguriVz8AKdmiPAGW5H8ibfAPTSbCQotOl2rqqsmFg9%2Bzr0foYYb%2FcJIuIB8IPaPOW74FKJUN%2BtJLleuvZ5irypYrlkXKOfUzRMS6jeU%2BqkQ7k36H3kATD%2BNUXQ2YEvnIwBEsQjnSCmNX2bRESw3bfccksQGuAnmRA3R2enLauCWck2XnwaFNeSerY03kO7913s7XEGD8WC2s61c4AxUaJ35daRnhkMrNfWeY%2B6z8W86LZp5miGXJvJ1YvKfHRUoQC2Iy%2Frza6pzvEub4f89dsOnE0TODsoJQNNtBj0UkXsqOYdLDaqPBzjgpEooamouJv2MJ3W%2Br8GOqUBwrNRmOQRRlroWQ0dJRrHWxrcldXhdAxm5uRqYy9oFTcI46TUtyoa3wT%2BB%2FbgxNxqujyt8pMdf2Kl2LZzM%2Bh6omOn3FOaYmNqzgamXiaEOO%2B6lQj827qtKa2ebJGoCXBtT2hjOOIxjQrWiNMRUDOEVGVrUQ3gmg7N%2BeMjUQA5Mj3EEGqeh47bjtCV3Im2Aw563%2FGG13k50eyMZGKBV6akIvIW75Z2&X-Amz-Signature=72ca4749aa03d44493a073dd01bba639c1a934e997c93b8516911b4f05c5d985&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6W47IP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfFZsMRfuzT4lZDxrh%2BtkEx%2Bt22hWBUmYZJvpB3sp25AiEApEX1Swa4eUjbRh84pnHmfeqO9iahYQCgdRXBw%2BCeKWcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPBIcMkPp0m3Yd9%2FOircA3kONXVI84WDj2qKsAZHjlRJKbEKV99ISOeZKXItvLqLcJpw1IOQmYNo9sQGIjmfMllSU%2BmAcJk61RhBNas5Zi%2BPBVDhU3wvhC73CAsETSTEUoYLMgATXb9zYxMFfimABJe%2BAo4t7FvzdUS1%2B7FbTL%2BDZtsp0qR%2F%2FCpmp5OOvS02foQVMBf5rRFueV9%2Btdx4MKnDKTvoGvmG0ZZGOzffSDeFT1rMZ75U%2FwFnlbhv1K1YEwn102omOp6zbl4r4%2BdSPkkbMAtIooxnKopdrHsKjrAggwi%2F3ho1WZay%2BSWVtfI%2F0J5XoSmFXBKDZSguriVz8AKdmiPAGW5H8ibfAPTSbCQotOl2rqqsmFg9%2Bzr0foYYb%2FcJIuIB8IPaPOW74FKJUN%2BtJLleuvZ5irypYrlkXKOfUzRMS6jeU%2BqkQ7k36H3kATD%2BNUXQ2YEvnIwBEsQjnSCmNX2bRESw3bfccksQGuAnmRA3R2enLauCWck2XnwaFNeSerY03kO7913s7XEGD8WC2s61c4AxUaJ35daRnhkMrNfWeY%2B6z8W86LZp5miGXJvJ1YvKfHRUoQC2Iy%2Frza6pzvEub4f89dsOnE0TODsoJQNNtBj0UkXsqOYdLDaqPBzjgpEooamouJv2MJ3W%2Br8GOqUBwrNRmOQRRlroWQ0dJRrHWxrcldXhdAxm5uRqYy9oFTcI46TUtyoa3wT%2BB%2FbgxNxqujyt8pMdf2Kl2LZzM%2Bh6omOn3FOaYmNqzgamXiaEOO%2B6lQj827qtKa2ebJGoCXBtT2hjOOIxjQrWiNMRUDOEVGVrUQ3gmg7N%2BeMjUQA5Mj3EEGqeh47bjtCV3Im2Aw563%2FGG13k50eyMZGKBV6akIvIW75Z2&X-Amz-Signature=b6f63d50b0650e01821f3e1fbb08d3eccaf2d1271889fe8ec263ca203ec82921&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6W47IP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfFZsMRfuzT4lZDxrh%2BtkEx%2Bt22hWBUmYZJvpB3sp25AiEApEX1Swa4eUjbRh84pnHmfeqO9iahYQCgdRXBw%2BCeKWcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPBIcMkPp0m3Yd9%2FOircA3kONXVI84WDj2qKsAZHjlRJKbEKV99ISOeZKXItvLqLcJpw1IOQmYNo9sQGIjmfMllSU%2BmAcJk61RhBNas5Zi%2BPBVDhU3wvhC73CAsETSTEUoYLMgATXb9zYxMFfimABJe%2BAo4t7FvzdUS1%2B7FbTL%2BDZtsp0qR%2F%2FCpmp5OOvS02foQVMBf5rRFueV9%2Btdx4MKnDKTvoGvmG0ZZGOzffSDeFT1rMZ75U%2FwFnlbhv1K1YEwn102omOp6zbl4r4%2BdSPkkbMAtIooxnKopdrHsKjrAggwi%2F3ho1WZay%2BSWVtfI%2F0J5XoSmFXBKDZSguriVz8AKdmiPAGW5H8ibfAPTSbCQotOl2rqqsmFg9%2Bzr0foYYb%2FcJIuIB8IPaPOW74FKJUN%2BtJLleuvZ5irypYrlkXKOfUzRMS6jeU%2BqkQ7k36H3kATD%2BNUXQ2YEvnIwBEsQjnSCmNX2bRESw3bfccksQGuAnmRA3R2enLauCWck2XnwaFNeSerY03kO7913s7XEGD8WC2s61c4AxUaJ35daRnhkMrNfWeY%2B6z8W86LZp5miGXJvJ1YvKfHRUoQC2Iy%2Frza6pzvEub4f89dsOnE0TODsoJQNNtBj0UkXsqOYdLDaqPBzjgpEooamouJv2MJ3W%2Br8GOqUBwrNRmOQRRlroWQ0dJRrHWxrcldXhdAxm5uRqYy9oFTcI46TUtyoa3wT%2BB%2FbgxNxqujyt8pMdf2Kl2LZzM%2Bh6omOn3FOaYmNqzgamXiaEOO%2B6lQj827qtKa2ebJGoCXBtT2hjOOIxjQrWiNMRUDOEVGVrUQ3gmg7N%2BeMjUQA5Mj3EEGqeh47bjtCV3Im2Aw563%2FGG13k50eyMZGKBV6akIvIW75Z2&X-Amz-Signature=85c47ec211055835104ffdf83964bb2108411484bfdcbf301dbe687a222fa531&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
