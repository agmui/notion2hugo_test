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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X4YBPXE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIseNekNSgwKCKwG9tVp9QJtBb1lAws%2BZBNDOhPVZDyAIgV3z3G1Rr8otjYW6lU8SIHtbhsO%2BvGBOUSkBQrcOrrG4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCMylZwIAt%2BLarn18CrcA5GCWRWMjYmF5C7M0kDmJmqVRAm4ULMXsy49hFR3pN6AIKR0E8wq0RenXLOp%2B0GLSGD90my3NqOgxceOC1aeSRk6kblyVt2alR9FRqU4FP%2B5OkxXOkihEBfO%2BsLE8E%2FGcAQPvKopusaZbqYZ%2FIFd%2B011%2F1MGQNgjVGjgHKCO%2BSkY3PkY237f4TO%2FeSRjuvPOQSOGjprQMonlOU5x8sRuFE1EeHfmQ797F4eDk3Wr8VRi4N9xSKJ8ahSfkldlZXAEifiYu4cRHeupoCrgzgqrNcwQg1jvFEtnmO3l%2FuHgkio2uUAaDhCiYi%2FDBFZ2C1h2hkkjtX1QgGWrNq%2BFk70rmacHSPa1kBqE%2BhMQF1%2FPE6WNgWjSNUGh9OSGDGG0SiC8lIFEj5Cnz5fPD3JSZSl6W5G4kd6Ac9zmjDW6FITAqgp4Cvi20fzvSFYoqqMfClDEnVQ%2BmaT2TQBb0Ll882H7PzzNf%2B1hQkX297GPjBtKTi%2FybrOFn0hSvagv5iU4km7lcz%2FC0J4D5u76f4EJfjT4CgTPmU95rRwpWcOi2h5DKeDv7LaYLMvzC4DudwzeLaPrr5z7TK%2F%2FexmpNrJmKbncjQ1kTMq%2BtQdQuGTaEsdrtU%2FnwpXdbzyE%2Bmlv9WV9MOWZyMEGOqUBg0b9bQLqHNAq0IUQmCt%2BbKSa3kMz3MgDym3xQ1TrbRk5qkJgHWPoh2YbbiHyAhRGbOat7rxHrSZ1op49IF9jnBwv%2FkZi0LtzL79ByIOtic73%2FPW8znGYzCjfvUGayzJHvVz9jUzqHkr8QDK2fihkHoR%2FY7d3QtObQv3klZy5ZZZ7jeLjXjXD9ckH58zRQ3Y92QLReJdhOACkcLBj8QRpTQzI%2Fdah&X-Amz-Signature=59f6c5845302fbd5dfd49c8d14491f7c5066e806ebf6aba084b7e93134bfe527&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X4YBPXE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIseNekNSgwKCKwG9tVp9QJtBb1lAws%2BZBNDOhPVZDyAIgV3z3G1Rr8otjYW6lU8SIHtbhsO%2BvGBOUSkBQrcOrrG4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCMylZwIAt%2BLarn18CrcA5GCWRWMjYmF5C7M0kDmJmqVRAm4ULMXsy49hFR3pN6AIKR0E8wq0RenXLOp%2B0GLSGD90my3NqOgxceOC1aeSRk6kblyVt2alR9FRqU4FP%2B5OkxXOkihEBfO%2BsLE8E%2FGcAQPvKopusaZbqYZ%2FIFd%2B011%2F1MGQNgjVGjgHKCO%2BSkY3PkY237f4TO%2FeSRjuvPOQSOGjprQMonlOU5x8sRuFE1EeHfmQ797F4eDk3Wr8VRi4N9xSKJ8ahSfkldlZXAEifiYu4cRHeupoCrgzgqrNcwQg1jvFEtnmO3l%2FuHgkio2uUAaDhCiYi%2FDBFZ2C1h2hkkjtX1QgGWrNq%2BFk70rmacHSPa1kBqE%2BhMQF1%2FPE6WNgWjSNUGh9OSGDGG0SiC8lIFEj5Cnz5fPD3JSZSl6W5G4kd6Ac9zmjDW6FITAqgp4Cvi20fzvSFYoqqMfClDEnVQ%2BmaT2TQBb0Ll882H7PzzNf%2B1hQkX297GPjBtKTi%2FybrOFn0hSvagv5iU4km7lcz%2FC0J4D5u76f4EJfjT4CgTPmU95rRwpWcOi2h5DKeDv7LaYLMvzC4DudwzeLaPrr5z7TK%2F%2FexmpNrJmKbncjQ1kTMq%2BtQdQuGTaEsdrtU%2FnwpXdbzyE%2Bmlv9WV9MOWZyMEGOqUBg0b9bQLqHNAq0IUQmCt%2BbKSa3kMz3MgDym3xQ1TrbRk5qkJgHWPoh2YbbiHyAhRGbOat7rxHrSZ1op49IF9jnBwv%2FkZi0LtzL79ByIOtic73%2FPW8znGYzCjfvUGayzJHvVz9jUzqHkr8QDK2fihkHoR%2FY7d3QtObQv3klZy5ZZZ7jeLjXjXD9ckH58zRQ3Y92QLReJdhOACkcLBj8QRpTQzI%2Fdah&X-Amz-Signature=2ccfc811a11e0fccacac7018ebfd768d368e09aa0a4be6eab8faffdbf3229978&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X4YBPXE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDIseNekNSgwKCKwG9tVp9QJtBb1lAws%2BZBNDOhPVZDyAIgV3z3G1Rr8otjYW6lU8SIHtbhsO%2BvGBOUSkBQrcOrrG4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCMylZwIAt%2BLarn18CrcA5GCWRWMjYmF5C7M0kDmJmqVRAm4ULMXsy49hFR3pN6AIKR0E8wq0RenXLOp%2B0GLSGD90my3NqOgxceOC1aeSRk6kblyVt2alR9FRqU4FP%2B5OkxXOkihEBfO%2BsLE8E%2FGcAQPvKopusaZbqYZ%2FIFd%2B011%2F1MGQNgjVGjgHKCO%2BSkY3PkY237f4TO%2FeSRjuvPOQSOGjprQMonlOU5x8sRuFE1EeHfmQ797F4eDk3Wr8VRi4N9xSKJ8ahSfkldlZXAEifiYu4cRHeupoCrgzgqrNcwQg1jvFEtnmO3l%2FuHgkio2uUAaDhCiYi%2FDBFZ2C1h2hkkjtX1QgGWrNq%2BFk70rmacHSPa1kBqE%2BhMQF1%2FPE6WNgWjSNUGh9OSGDGG0SiC8lIFEj5Cnz5fPD3JSZSl6W5G4kd6Ac9zmjDW6FITAqgp4Cvi20fzvSFYoqqMfClDEnVQ%2BmaT2TQBb0Ll882H7PzzNf%2B1hQkX297GPjBtKTi%2FybrOFn0hSvagv5iU4km7lcz%2FC0J4D5u76f4EJfjT4CgTPmU95rRwpWcOi2h5DKeDv7LaYLMvzC4DudwzeLaPrr5z7TK%2F%2FexmpNrJmKbncjQ1kTMq%2BtQdQuGTaEsdrtU%2FnwpXdbzyE%2Bmlv9WV9MOWZyMEGOqUBg0b9bQLqHNAq0IUQmCt%2BbKSa3kMz3MgDym3xQ1TrbRk5qkJgHWPoh2YbbiHyAhRGbOat7rxHrSZ1op49IF9jnBwv%2FkZi0LtzL79ByIOtic73%2FPW8znGYzCjfvUGayzJHvVz9jUzqHkr8QDK2fihkHoR%2FY7d3QtObQv3klZy5ZZZ7jeLjXjXD9ckH58zRQ3Y92QLReJdhOACkcLBj8QRpTQzI%2Fdah&X-Amz-Signature=6356500bd200690cb8837511670558614de4e3b893a5329957325ed2dc2c7299&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
