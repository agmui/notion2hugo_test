---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYYZ7GO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUVzKWQ5t2SGjx145UAEV2V6DG%2FUexoByv%2B%2BZYMNusgIgeiaA14iLVguibKkLyYayY%2FBZEpuerk4Ha2UqvzSZqAUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBD3tjTxIOpZZtHtbCrcAyzw5tR8%2B6nf%2FLVXHJn5%2BfLZQr3Ap4%2B1pn1IKbYE8eSvyi8rjRdFsT1Hn7BmFgcmY4e3R5ysuVAFBTBew9ajn7st8z87yH5IcXGf80seo5%2F8WFP%2B%2Fp4x2utDxWtXaNdfd%2FJ2j%2BgaOjDwsCTNbL82BBbN%2FHJ1a%2FXAhCuOcSicENc5%2BWGLU1CeRgaFoPAzDu5a8rYD8Dt1KqP6gfWSVFISY0nhzHmO5rC5yTxy5GH4ctqXQvdVdDHIw5esiGwnY52Czs3BoVwoAe87fhvsGEiDF3c0NANyc58jxSVUkF0nZ2%2FVBapLuM4T7qRXoy4h1wJncnS1tvdHCvx%2B4CSa6A%2BqhHKZTJaQuN0cBVyudZM8U%2BQ%2BLXZCVk%2B4cuc1%2Burs4AFZq5827nq8ixAYZGkNy%2BNcE17e8XaP4gnIeqUHbCX7KQypUrRn%2FGK%2Bbv6xZgfjxQoFuBABPYwsEA9CiQJy42xuaNCUjxrt486qwCXEHcj8lfBTy75djRDSUvgvHTwinHHU4ArigQje5n6CqZZ%2Bu8SctXIZQlvSlEkxItebymNclN8iTR%2BoBc%2B4H4M4seZgQYd2Bc2oXF9Lw4pE0M6y9QsHervCWKh1SAUdE4ffYZjRgi6oYXMDsQ6xaYw6NxUMMIHavsQGOqUB7E%2B27q%2Bh5q5OxjoRvDCiH9uTHsn9D%2BthazxT8PSQ6nJ1W4I11%2F2irij8k9nz8DPH00Q7A5Biwi1fQKp69hGhfspOASggn%2FhdCt9Y4BQtq2Mi2lvmO1q9IGAs0WVQ5f2jaN0oLX8x2XrGYzpMtOQWVXXwvqD%2FXz3YLy9f%2B4qdKGus9VGffo1GgO7x7lqFqmWcZUYskMK%2BKCashBLjJKaLx55bTTuA&X-Amz-Signature=b534fd46f788d50c86b2eed7af7ad5cfa9c46038f4ce7eacca780684f71af414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYYZ7GO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUVzKWQ5t2SGjx145UAEV2V6DG%2FUexoByv%2B%2BZYMNusgIgeiaA14iLVguibKkLyYayY%2FBZEpuerk4Ha2UqvzSZqAUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBD3tjTxIOpZZtHtbCrcAyzw5tR8%2B6nf%2FLVXHJn5%2BfLZQr3Ap4%2B1pn1IKbYE8eSvyi8rjRdFsT1Hn7BmFgcmY4e3R5ysuVAFBTBew9ajn7st8z87yH5IcXGf80seo5%2F8WFP%2B%2Fp4x2utDxWtXaNdfd%2FJ2j%2BgaOjDwsCTNbL82BBbN%2FHJ1a%2FXAhCuOcSicENc5%2BWGLU1CeRgaFoPAzDu5a8rYD8Dt1KqP6gfWSVFISY0nhzHmO5rC5yTxy5GH4ctqXQvdVdDHIw5esiGwnY52Czs3BoVwoAe87fhvsGEiDF3c0NANyc58jxSVUkF0nZ2%2FVBapLuM4T7qRXoy4h1wJncnS1tvdHCvx%2B4CSa6A%2BqhHKZTJaQuN0cBVyudZM8U%2BQ%2BLXZCVk%2B4cuc1%2Burs4AFZq5827nq8ixAYZGkNy%2BNcE17e8XaP4gnIeqUHbCX7KQypUrRn%2FGK%2Bbv6xZgfjxQoFuBABPYwsEA9CiQJy42xuaNCUjxrt486qwCXEHcj8lfBTy75djRDSUvgvHTwinHHU4ArigQje5n6CqZZ%2Bu8SctXIZQlvSlEkxItebymNclN8iTR%2BoBc%2B4H4M4seZgQYd2Bc2oXF9Lw4pE0M6y9QsHervCWKh1SAUdE4ffYZjRgi6oYXMDsQ6xaYw6NxUMMIHavsQGOqUB7E%2B27q%2Bh5q5OxjoRvDCiH9uTHsn9D%2BthazxT8PSQ6nJ1W4I11%2F2irij8k9nz8DPH00Q7A5Biwi1fQKp69hGhfspOASggn%2FhdCt9Y4BQtq2Mi2lvmO1q9IGAs0WVQ5f2jaN0oLX8x2XrGYzpMtOQWVXXwvqD%2FXz3YLy9f%2B4qdKGus9VGffo1GgO7x7lqFqmWcZUYskMK%2BKCashBLjJKaLx55bTTuA&X-Amz-Signature=b176e90a75dae3a2de750967b3984077195c44ed9ba1e56cd260794c3fad8756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYYZ7GO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUVzKWQ5t2SGjx145UAEV2V6DG%2FUexoByv%2B%2BZYMNusgIgeiaA14iLVguibKkLyYayY%2FBZEpuerk4Ha2UqvzSZqAUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBD3tjTxIOpZZtHtbCrcAyzw5tR8%2B6nf%2FLVXHJn5%2BfLZQr3Ap4%2B1pn1IKbYE8eSvyi8rjRdFsT1Hn7BmFgcmY4e3R5ysuVAFBTBew9ajn7st8z87yH5IcXGf80seo5%2F8WFP%2B%2Fp4x2utDxWtXaNdfd%2FJ2j%2BgaOjDwsCTNbL82BBbN%2FHJ1a%2FXAhCuOcSicENc5%2BWGLU1CeRgaFoPAzDu5a8rYD8Dt1KqP6gfWSVFISY0nhzHmO5rC5yTxy5GH4ctqXQvdVdDHIw5esiGwnY52Czs3BoVwoAe87fhvsGEiDF3c0NANyc58jxSVUkF0nZ2%2FVBapLuM4T7qRXoy4h1wJncnS1tvdHCvx%2B4CSa6A%2BqhHKZTJaQuN0cBVyudZM8U%2BQ%2BLXZCVk%2B4cuc1%2Burs4AFZq5827nq8ixAYZGkNy%2BNcE17e8XaP4gnIeqUHbCX7KQypUrRn%2FGK%2Bbv6xZgfjxQoFuBABPYwsEA9CiQJy42xuaNCUjxrt486qwCXEHcj8lfBTy75djRDSUvgvHTwinHHU4ArigQje5n6CqZZ%2Bu8SctXIZQlvSlEkxItebymNclN8iTR%2BoBc%2B4H4M4seZgQYd2Bc2oXF9Lw4pE0M6y9QsHervCWKh1SAUdE4ffYZjRgi6oYXMDsQ6xaYw6NxUMMIHavsQGOqUB7E%2B27q%2Bh5q5OxjoRvDCiH9uTHsn9D%2BthazxT8PSQ6nJ1W4I11%2F2irij8k9nz8DPH00Q7A5Biwi1fQKp69hGhfspOASggn%2FhdCt9Y4BQtq2Mi2lvmO1q9IGAs0WVQ5f2jaN0oLX8x2XrGYzpMtOQWVXXwvqD%2FXz3YLy9f%2B4qdKGus9VGffo1GgO7x7lqFqmWcZUYskMK%2BKCashBLjJKaLx55bTTuA&X-Amz-Signature=7238c736d7f3b606f9f92cb216457ba1a84c1c9118c8e1278cc04b2c44b72e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
