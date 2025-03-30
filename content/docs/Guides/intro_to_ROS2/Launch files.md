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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6ZPWDT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDBg36aDsQlbgb03VabUTo7dYAIR2%2BlTKEaUjIr1kZlsQIgIVuos1mq678jgSmGEIV%2FzDGlZb%2BFThuEHgVcx2ZtWM0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FVITPC6XU%2BHx74FircA93k3nAuqz6oHlwNzQrYjAmMsx8dOkIs2Ix%2FkjeTpP66MFg%2F1rD19d9KmgcI75yYgAAXI37UVvoQlmP5vYog7j5d0dsJa%2FI95bXzpo0EXs85lpu1FwJ7iocTUfrmj6yxPrJUkB63StEGfxZW3yvYvz6Ms7d5Yf3oqfvW1TbK7Sb6ybiqUcQa2xJtGl3yptWNXOfR9WsCIrH90%2BxyqvcTJryN3QnrxeOVlroVmTotzf97GgwgkheRrKf0BMiuwIo1ezaDY19syuWaZlIDq9CxVG0sGwXc4lWhfJUIl707Ka1QZlHqxW1OyjvaK5FKv8MUApByphMM%2FSD7LjKoXT1%2FWExJSFjjROL%2BRj1xeSakAG7h0XtaRUGbm29E5osDiOjODU43%2BxowQYw1a1evCGDP%2BsAnYt9xZDEy8Qcj7kd3UwiLSwywByFOobYZaYszHrzoZ48qDrYvod07fQFuRNez9n0g5mRbmwjmrcsFAdLwAbukG2EiRF1EBFOPdYQKzb7jF5uO9QPMP09XNAl2No%2BCpnCqI%2FrRy4WURoug1KitWEidZ5lLSnh21Aorq%2FXAtkixiFDByaE9Qkv4GN4LYYi1UNcjcWROrTmMF6TIAdNxlWXT2eWIy%2BMCn4MJcNFDMIPwo78GOqUBHb86JY2pe5%2FvsKdWP7bjC58ov%2FI5E%2BoDj6wWdYkTiWbM0vHfWIkzTSInkDI8sXwvlTuOXA6JPitexzt31oFZgcucrtWtIJb%2FhRsAk3dtsPK%2FPTzU%2BUM6Oq%2Fbupu00NMHZQaerpsbLFwDZ2S8m9epBRO3A%2FmLO8eyofN41Rkar0qjp5z8%2BxbOv1P2C701wFm7W3sqY8ieSZt%2B%2F1NkcUK6lHfBs95E&X-Amz-Signature=d12a6c56f185a4e6946bb71d6f28b3ca4f0cff821aaa02726e8f5436c80821bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6ZPWDT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDBg36aDsQlbgb03VabUTo7dYAIR2%2BlTKEaUjIr1kZlsQIgIVuos1mq678jgSmGEIV%2FzDGlZb%2BFThuEHgVcx2ZtWM0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FVITPC6XU%2BHx74FircA93k3nAuqz6oHlwNzQrYjAmMsx8dOkIs2Ix%2FkjeTpP66MFg%2F1rD19d9KmgcI75yYgAAXI37UVvoQlmP5vYog7j5d0dsJa%2FI95bXzpo0EXs85lpu1FwJ7iocTUfrmj6yxPrJUkB63StEGfxZW3yvYvz6Ms7d5Yf3oqfvW1TbK7Sb6ybiqUcQa2xJtGl3yptWNXOfR9WsCIrH90%2BxyqvcTJryN3QnrxeOVlroVmTotzf97GgwgkheRrKf0BMiuwIo1ezaDY19syuWaZlIDq9CxVG0sGwXc4lWhfJUIl707Ka1QZlHqxW1OyjvaK5FKv8MUApByphMM%2FSD7LjKoXT1%2FWExJSFjjROL%2BRj1xeSakAG7h0XtaRUGbm29E5osDiOjODU43%2BxowQYw1a1evCGDP%2BsAnYt9xZDEy8Qcj7kd3UwiLSwywByFOobYZaYszHrzoZ48qDrYvod07fQFuRNez9n0g5mRbmwjmrcsFAdLwAbukG2EiRF1EBFOPdYQKzb7jF5uO9QPMP09XNAl2No%2BCpnCqI%2FrRy4WURoug1KitWEidZ5lLSnh21Aorq%2FXAtkixiFDByaE9Qkv4GN4LYYi1UNcjcWROrTmMF6TIAdNxlWXT2eWIy%2BMCn4MJcNFDMIPwo78GOqUBHb86JY2pe5%2FvsKdWP7bjC58ov%2FI5E%2BoDj6wWdYkTiWbM0vHfWIkzTSInkDI8sXwvlTuOXA6JPitexzt31oFZgcucrtWtIJb%2FhRsAk3dtsPK%2FPTzU%2BUM6Oq%2Fbupu00NMHZQaerpsbLFwDZ2S8m9epBRO3A%2FmLO8eyofN41Rkar0qjp5z8%2BxbOv1P2C701wFm7W3sqY8ieSZt%2B%2F1NkcUK6lHfBs95E&X-Amz-Signature=2df19ba731ffd1b3aedf6122cca79e39b0272fe72b1ef49fa56b848716ad93ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6ZPWDT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDBg36aDsQlbgb03VabUTo7dYAIR2%2BlTKEaUjIr1kZlsQIgIVuos1mq678jgSmGEIV%2FzDGlZb%2BFThuEHgVcx2ZtWM0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FVITPC6XU%2BHx74FircA93k3nAuqz6oHlwNzQrYjAmMsx8dOkIs2Ix%2FkjeTpP66MFg%2F1rD19d9KmgcI75yYgAAXI37UVvoQlmP5vYog7j5d0dsJa%2FI95bXzpo0EXs85lpu1FwJ7iocTUfrmj6yxPrJUkB63StEGfxZW3yvYvz6Ms7d5Yf3oqfvW1TbK7Sb6ybiqUcQa2xJtGl3yptWNXOfR9WsCIrH90%2BxyqvcTJryN3QnrxeOVlroVmTotzf97GgwgkheRrKf0BMiuwIo1ezaDY19syuWaZlIDq9CxVG0sGwXc4lWhfJUIl707Ka1QZlHqxW1OyjvaK5FKv8MUApByphMM%2FSD7LjKoXT1%2FWExJSFjjROL%2BRj1xeSakAG7h0XtaRUGbm29E5osDiOjODU43%2BxowQYw1a1evCGDP%2BsAnYt9xZDEy8Qcj7kd3UwiLSwywByFOobYZaYszHrzoZ48qDrYvod07fQFuRNez9n0g5mRbmwjmrcsFAdLwAbukG2EiRF1EBFOPdYQKzb7jF5uO9QPMP09XNAl2No%2BCpnCqI%2FrRy4WURoug1KitWEidZ5lLSnh21Aorq%2FXAtkixiFDByaE9Qkv4GN4LYYi1UNcjcWROrTmMF6TIAdNxlWXT2eWIy%2BMCn4MJcNFDMIPwo78GOqUBHb86JY2pe5%2FvsKdWP7bjC58ov%2FI5E%2BoDj6wWdYkTiWbM0vHfWIkzTSInkDI8sXwvlTuOXA6JPitexzt31oFZgcucrtWtIJb%2FhRsAk3dtsPK%2FPTzU%2BUM6Oq%2Fbupu00NMHZQaerpsbLFwDZ2S8m9epBRO3A%2FmLO8eyofN41Rkar0qjp5z8%2BxbOv1P2C701wFm7W3sqY8ieSZt%2B%2F1NkcUK6lHfBs95E&X-Amz-Signature=29fe061b787f992c6c54195e7b7d0aad0ba66d38b0def706011a818dc96b67ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
