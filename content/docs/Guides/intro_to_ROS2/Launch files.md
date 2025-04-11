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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZEJ3YG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGrhGZ89kTQqYV4vHt6iu3g1pQ%2FRHgBKUHejVMgogChVAiEAmEM5bh9qVU6sBwT0733G9b1Apkmdwzn0fkrc5H6R4GEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtwntIBdbbZgUAIbyrcA13TU2mhJjj0eY4LLRO952S6g9oFzXrdOBeJCzejFyaedb8nR5ofC7gUZwOeLn3YqcKWqxLYU1nolETV3mPsojbdv2kPP5TEky2nk%2BV57lCZPluAkUBS7RQ5uvyQcD9spPZC4OAYuFPr1D7n%2BmkyPuXwvG0uI5G7HP2eo2r6WxEMXXcXQtTGIip6uXelsZczVLvVj%2BcVfF0dkOhSt1Lsa98VOrmFzgZ6tEoWIti0udu0PKDtIZBmBJyV974EIE82HSVlXOaoRzyLiIybLa%2FqqrjIpVelNGjcQR1oRviKfneR3a1pHav6LBjEgXp4lmFRCWVmsOVIE4tqY9uHmUM9guWfmjl1QGQd5gvI031dLGurPJJnekeN%2Bl9XEs7iuS%2FxG7XwsDY7xwOiwSK89duBKvfyZwYMIt%2BVdM3DNVPNVQ3Z%2B27RShWfa9lkJGDui%2F9XeiWKiKVarOCGbVshphPE5PyymtLpS3UO5srvsqkHP9nx99tlkIrJbE9xcQLb4eJYx067UfLjnxZOENnXvmg4T9c2rJArDqoeNTSAEgTyRgfi41ABII%2Bsw513PSGq0CG%2B7XxodSiBGl87bowN%2Far0oqjiACdwfYqRjLwgSNA9zhzYFcv%2BWn3O92pJjEklMPnY5b8GOqUBPGQ6K5KD5WOkDunrJ%2F4p4%2B2lUxKYjKHoiY7cUgO3T5VReAvBIPcn0jhenrD3ZIKobEZX%2B%2Fg9RawSnXIXlnrJ29ls3gquVhhKHTRBp2KxjGwWffVOY1tBbfDOdK0iozTgBkpFEYQr6EytWMSFF%2BD144gbTpW0oei86yFayFnVet1Jqs9%2FIGs65OzT5A7Y45WkNiR0IRmWFpw7MtvJS2gBDadkwOQa&X-Amz-Signature=10adb7fac4951715a7ff42a124a8d24d2737a08971609a5d3ef8cac60a6918c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZEJ3YG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGrhGZ89kTQqYV4vHt6iu3g1pQ%2FRHgBKUHejVMgogChVAiEAmEM5bh9qVU6sBwT0733G9b1Apkmdwzn0fkrc5H6R4GEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtwntIBdbbZgUAIbyrcA13TU2mhJjj0eY4LLRO952S6g9oFzXrdOBeJCzejFyaedb8nR5ofC7gUZwOeLn3YqcKWqxLYU1nolETV3mPsojbdv2kPP5TEky2nk%2BV57lCZPluAkUBS7RQ5uvyQcD9spPZC4OAYuFPr1D7n%2BmkyPuXwvG0uI5G7HP2eo2r6WxEMXXcXQtTGIip6uXelsZczVLvVj%2BcVfF0dkOhSt1Lsa98VOrmFzgZ6tEoWIti0udu0PKDtIZBmBJyV974EIE82HSVlXOaoRzyLiIybLa%2FqqrjIpVelNGjcQR1oRviKfneR3a1pHav6LBjEgXp4lmFRCWVmsOVIE4tqY9uHmUM9guWfmjl1QGQd5gvI031dLGurPJJnekeN%2Bl9XEs7iuS%2FxG7XwsDY7xwOiwSK89duBKvfyZwYMIt%2BVdM3DNVPNVQ3Z%2B27RShWfa9lkJGDui%2F9XeiWKiKVarOCGbVshphPE5PyymtLpS3UO5srvsqkHP9nx99tlkIrJbE9xcQLb4eJYx067UfLjnxZOENnXvmg4T9c2rJArDqoeNTSAEgTyRgfi41ABII%2Bsw513PSGq0CG%2B7XxodSiBGl87bowN%2Far0oqjiACdwfYqRjLwgSNA9zhzYFcv%2BWn3O92pJjEklMPnY5b8GOqUBPGQ6K5KD5WOkDunrJ%2F4p4%2B2lUxKYjKHoiY7cUgO3T5VReAvBIPcn0jhenrD3ZIKobEZX%2B%2Fg9RawSnXIXlnrJ29ls3gquVhhKHTRBp2KxjGwWffVOY1tBbfDOdK0iozTgBkpFEYQr6EytWMSFF%2BD144gbTpW0oei86yFayFnVet1Jqs9%2FIGs65OzT5A7Y45WkNiR0IRmWFpw7MtvJS2gBDadkwOQa&X-Amz-Signature=a95171a0694e0cf99182fcfb5fd84dbde645f2c0211250c9aa4f555b3cf67c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZEJ3YG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGrhGZ89kTQqYV4vHt6iu3g1pQ%2FRHgBKUHejVMgogChVAiEAmEM5bh9qVU6sBwT0733G9b1Apkmdwzn0fkrc5H6R4GEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtwntIBdbbZgUAIbyrcA13TU2mhJjj0eY4LLRO952S6g9oFzXrdOBeJCzejFyaedb8nR5ofC7gUZwOeLn3YqcKWqxLYU1nolETV3mPsojbdv2kPP5TEky2nk%2BV57lCZPluAkUBS7RQ5uvyQcD9spPZC4OAYuFPr1D7n%2BmkyPuXwvG0uI5G7HP2eo2r6WxEMXXcXQtTGIip6uXelsZczVLvVj%2BcVfF0dkOhSt1Lsa98VOrmFzgZ6tEoWIti0udu0PKDtIZBmBJyV974EIE82HSVlXOaoRzyLiIybLa%2FqqrjIpVelNGjcQR1oRviKfneR3a1pHav6LBjEgXp4lmFRCWVmsOVIE4tqY9uHmUM9guWfmjl1QGQd5gvI031dLGurPJJnekeN%2Bl9XEs7iuS%2FxG7XwsDY7xwOiwSK89duBKvfyZwYMIt%2BVdM3DNVPNVQ3Z%2B27RShWfa9lkJGDui%2F9XeiWKiKVarOCGbVshphPE5PyymtLpS3UO5srvsqkHP9nx99tlkIrJbE9xcQLb4eJYx067UfLjnxZOENnXvmg4T9c2rJArDqoeNTSAEgTyRgfi41ABII%2Bsw513PSGq0CG%2B7XxodSiBGl87bowN%2Far0oqjiACdwfYqRjLwgSNA9zhzYFcv%2BWn3O92pJjEklMPnY5b8GOqUBPGQ6K5KD5WOkDunrJ%2F4p4%2B2lUxKYjKHoiY7cUgO3T5VReAvBIPcn0jhenrD3ZIKobEZX%2B%2Fg9RawSnXIXlnrJ29ls3gquVhhKHTRBp2KxjGwWffVOY1tBbfDOdK0iozTgBkpFEYQr6EytWMSFF%2BD144gbTpW0oei86yFayFnVet1Jqs9%2FIGs65OzT5A7Y45WkNiR0IRmWFpw7MtvJS2gBDadkwOQa&X-Amz-Signature=846367fd66b8e5dc31624d3272ee3a9eb0214fb2c1217db8a603d7acafdfcc61&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
