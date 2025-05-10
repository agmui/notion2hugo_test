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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7HFM7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiPkFEeAHlb%2FmheKKIkono7xf8zBp4NYEjwRoRRCYUSAiBy5ZnAqo9itxxmYV0%2B4MKeXwEw3k1sjsXRjKCoMAmJxCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDXN7BtUBfB%2BxeCiOKtwD1p6sH%2BZzoSZLlqWxr30LtsoM5nWo1mi4HTCiFX4UPlTJcPL7LTRi0dpBK3S%2F6WPEYbmdjezFEqyZip35drIoh1IMpikWNnF2v1TBOMZq4DXpRnRzgQY%2B0YGvaggwWR6WUYuG2EzuoCTb9XoD8qLoMKKzg2yZutP6lFzJfMNTbU2kS8iNaZFS0WHAST%2FSjyrAbxU2DtUtZuROw2l%2Fkoaz2LYG0t5B%2Fy%2Fxr0QoVRHRly1AQdqQuvt8qbq0V5pS7f4WH5kpBcplQI013X8y70H2WxXxGqcSs%2BZGll8p3oLHLSBzQeNCe5g8vbag44XiQJHYC7JnlVIECefAloP5HLiSxMAfpJOr0KBe9%2Bhy%2B8OS4g6CZ8WPz5ZXi5cCbX%2FycrM5r7VcztSJXLxN%2BJWQlZ12GwDqe4zeOcmPDFjhsUgzOSJ3o%2FHUqIUCFl71V%2Br2ttjG9YUjOrlB5SLTZSmC8faVbwkTr5b4HJ6W%2B032UNYOUvjMuDbStyPucnFr6UqjnDiRUO%2FypCx393dHDm3O0uzN5F%2FUDXpt1wnK1QxpHYCLxBsp%2B%2FJ%2F1%2B4AtAVHD484ftP%2Bb4HfH0WeTRVV7xdU1NdsK4S4NrCCsnPCi8Mo1mIDup1oZoMR3odcdezl0RMwmYb7wAY6pgHUuNduV4xHp15TTr6aQO0rqM2lI%2FS91T%2BDtOR59np2bMOV0U66ASWjda3ChAwH7%2FP4KERqiT7Y4hjxrUiUoSsNKgx3frx7%2BVBDoYLZJOlgUoGUlm52%2F9VIcyUGADnknS1XPLk2sGnrlHlzKsr9X7q%2F0NDZCckRbq4gp2DkwFAxO4iKKHLUzGT4%2FeOsBfuwllGhIDxYcljgyVRWFdhgZcblvtS5zmcG&X-Amz-Signature=4fe425cba8357e1e9dcd9a2e36a5d5b951d2785ef0cef31718a0df26462db461&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7HFM7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiPkFEeAHlb%2FmheKKIkono7xf8zBp4NYEjwRoRRCYUSAiBy5ZnAqo9itxxmYV0%2B4MKeXwEw3k1sjsXRjKCoMAmJxCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDXN7BtUBfB%2BxeCiOKtwD1p6sH%2BZzoSZLlqWxr30LtsoM5nWo1mi4HTCiFX4UPlTJcPL7LTRi0dpBK3S%2F6WPEYbmdjezFEqyZip35drIoh1IMpikWNnF2v1TBOMZq4DXpRnRzgQY%2B0YGvaggwWR6WUYuG2EzuoCTb9XoD8qLoMKKzg2yZutP6lFzJfMNTbU2kS8iNaZFS0WHAST%2FSjyrAbxU2DtUtZuROw2l%2Fkoaz2LYG0t5B%2Fy%2Fxr0QoVRHRly1AQdqQuvt8qbq0V5pS7f4WH5kpBcplQI013X8y70H2WxXxGqcSs%2BZGll8p3oLHLSBzQeNCe5g8vbag44XiQJHYC7JnlVIECefAloP5HLiSxMAfpJOr0KBe9%2Bhy%2B8OS4g6CZ8WPz5ZXi5cCbX%2FycrM5r7VcztSJXLxN%2BJWQlZ12GwDqe4zeOcmPDFjhsUgzOSJ3o%2FHUqIUCFl71V%2Br2ttjG9YUjOrlB5SLTZSmC8faVbwkTr5b4HJ6W%2B032UNYOUvjMuDbStyPucnFr6UqjnDiRUO%2FypCx393dHDm3O0uzN5F%2FUDXpt1wnK1QxpHYCLxBsp%2B%2FJ%2F1%2B4AtAVHD484ftP%2Bb4HfH0WeTRVV7xdU1NdsK4S4NrCCsnPCi8Mo1mIDup1oZoMR3odcdezl0RMwmYb7wAY6pgHUuNduV4xHp15TTr6aQO0rqM2lI%2FS91T%2BDtOR59np2bMOV0U66ASWjda3ChAwH7%2FP4KERqiT7Y4hjxrUiUoSsNKgx3frx7%2BVBDoYLZJOlgUoGUlm52%2F9VIcyUGADnknS1XPLk2sGnrlHlzKsr9X7q%2F0NDZCckRbq4gp2DkwFAxO4iKKHLUzGT4%2FeOsBfuwllGhIDxYcljgyVRWFdhgZcblvtS5zmcG&X-Amz-Signature=3e76030e44a3f24c3fa514947046b057765fcc6fceaa9a2b1ae6bba0ed5836a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7HFM7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiPkFEeAHlb%2FmheKKIkono7xf8zBp4NYEjwRoRRCYUSAiBy5ZnAqo9itxxmYV0%2B4MKeXwEw3k1sjsXRjKCoMAmJxCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDXN7BtUBfB%2BxeCiOKtwD1p6sH%2BZzoSZLlqWxr30LtsoM5nWo1mi4HTCiFX4UPlTJcPL7LTRi0dpBK3S%2F6WPEYbmdjezFEqyZip35drIoh1IMpikWNnF2v1TBOMZq4DXpRnRzgQY%2B0YGvaggwWR6WUYuG2EzuoCTb9XoD8qLoMKKzg2yZutP6lFzJfMNTbU2kS8iNaZFS0WHAST%2FSjyrAbxU2DtUtZuROw2l%2Fkoaz2LYG0t5B%2Fy%2Fxr0QoVRHRly1AQdqQuvt8qbq0V5pS7f4WH5kpBcplQI013X8y70H2WxXxGqcSs%2BZGll8p3oLHLSBzQeNCe5g8vbag44XiQJHYC7JnlVIECefAloP5HLiSxMAfpJOr0KBe9%2Bhy%2B8OS4g6CZ8WPz5ZXi5cCbX%2FycrM5r7VcztSJXLxN%2BJWQlZ12GwDqe4zeOcmPDFjhsUgzOSJ3o%2FHUqIUCFl71V%2Br2ttjG9YUjOrlB5SLTZSmC8faVbwkTr5b4HJ6W%2B032UNYOUvjMuDbStyPucnFr6UqjnDiRUO%2FypCx393dHDm3O0uzN5F%2FUDXpt1wnK1QxpHYCLxBsp%2B%2FJ%2F1%2B4AtAVHD484ftP%2Bb4HfH0WeTRVV7xdU1NdsK4S4NrCCsnPCi8Mo1mIDup1oZoMR3odcdezl0RMwmYb7wAY6pgHUuNduV4xHp15TTr6aQO0rqM2lI%2FS91T%2BDtOR59np2bMOV0U66ASWjda3ChAwH7%2FP4KERqiT7Y4hjxrUiUoSsNKgx3frx7%2BVBDoYLZJOlgUoGUlm52%2F9VIcyUGADnknS1XPLk2sGnrlHlzKsr9X7q%2F0NDZCckRbq4gp2DkwFAxO4iKKHLUzGT4%2FeOsBfuwllGhIDxYcljgyVRWFdhgZcblvtS5zmcG&X-Amz-Signature=3037a61bdc500aa3a577a9224cae91e289a143d5c462ee1f2b10c32e425ca391&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
