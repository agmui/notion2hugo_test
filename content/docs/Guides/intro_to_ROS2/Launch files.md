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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255FVYFF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIF5AkhgjizUTJ5RgGHQe5SyRc9gKCG7T198N9MfQ6DTbAiEA5y3mk9%2BWyDGAvbUU%2BtdpzVHS5ewJKl9dCI%2F6H79baNUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJF35mb2CUSD3HIyBCrcA%2BJSXclazg9ul2gD%2FiZSdLD%2BttUL2WJigS6219ZVLkZW4zrJ4e75adwxSuWnLPmWzUoWXCl2Xnf3fQDQWGPad12klCSldw2tLAClciY602IaaYeotmCFUNWkkGUz8w4mtdsywmUtpfd4USgdJtp12f%2F7NTc0sQ%2FsXnc9VFG55s22ViyEKu3ZWv0dRnZrOkGBayx5ZUKhAQG6MSSgE93Gf0wGMnJwGLNM7W1D3aXll2cET%2FHoA%2F4npqqSASGmEy5rn1%2BaCQrXytaFy2OCTtF4q6sTnNQhe48F%2FSgkHgMbEsUTDSiSKGHp2ZAjOsz3ap8QFtbzgBIZ%2Fun0YE%2FYMbVUhEB23IJ9m1WdOqdbtWMQScjQxrZVfQ8F9esOhNqPVvN7fzv7SEyFeiM168beaEoy4L3BFzsmuQiRNWO8L%2Fnt4fnqQBaGfU4tJN86san7MwP4d0Rjs1jTr9dFI166Pct2%2BbXHLG23V%2BqhaKMoXfcIsmzvtRnzFL7smVt8jP9B331GHrJhpEIn61bwpKz6f9t%2FAbpoTeMBmDCNPsIPT4vmB6VzzeWRH2Q7ij54HB64sJh99HOnIPp9RlvyLOmJGqZXYE31UpCspg3SVeyAdd2Coi5fzjaKLV6aZVElxmy1MN%2Bjx70GOqUBlmoYnkciLZHQ%2B5ftKIIXfGCSCHFIyJM67UsmZVYOz%2BaEcG6Nqvs8DEQ4ODVfuTCARUN%2Bnib1%2FkWLMlbqDsV%2FOhq%2BXMnaDPDvGFNum7X0jdaoGz2YNAZywWFQRfgZ4LOP4n4R27T%2FPnxY9kP2EY9KN53B8ghqsy%2Bne1E7uF%2BeclioPJpVJtntC5MT1KPyElGZphIaZ1MBa4O%2Bk6D6F7pRCfynLxd8&X-Amz-Signature=e1983b45b96c602f148276d9095685c45fa04bb46deaa7b271f9cbed47538901&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255FVYFF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIF5AkhgjizUTJ5RgGHQe5SyRc9gKCG7T198N9MfQ6DTbAiEA5y3mk9%2BWyDGAvbUU%2BtdpzVHS5ewJKl9dCI%2F6H79baNUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJF35mb2CUSD3HIyBCrcA%2BJSXclazg9ul2gD%2FiZSdLD%2BttUL2WJigS6219ZVLkZW4zrJ4e75adwxSuWnLPmWzUoWXCl2Xnf3fQDQWGPad12klCSldw2tLAClciY602IaaYeotmCFUNWkkGUz8w4mtdsywmUtpfd4USgdJtp12f%2F7NTc0sQ%2FsXnc9VFG55s22ViyEKu3ZWv0dRnZrOkGBayx5ZUKhAQG6MSSgE93Gf0wGMnJwGLNM7W1D3aXll2cET%2FHoA%2F4npqqSASGmEy5rn1%2BaCQrXytaFy2OCTtF4q6sTnNQhe48F%2FSgkHgMbEsUTDSiSKGHp2ZAjOsz3ap8QFtbzgBIZ%2Fun0YE%2FYMbVUhEB23IJ9m1WdOqdbtWMQScjQxrZVfQ8F9esOhNqPVvN7fzv7SEyFeiM168beaEoy4L3BFzsmuQiRNWO8L%2Fnt4fnqQBaGfU4tJN86san7MwP4d0Rjs1jTr9dFI166Pct2%2BbXHLG23V%2BqhaKMoXfcIsmzvtRnzFL7smVt8jP9B331GHrJhpEIn61bwpKz6f9t%2FAbpoTeMBmDCNPsIPT4vmB6VzzeWRH2Q7ij54HB64sJh99HOnIPp9RlvyLOmJGqZXYE31UpCspg3SVeyAdd2Coi5fzjaKLV6aZVElxmy1MN%2Bjx70GOqUBlmoYnkciLZHQ%2B5ftKIIXfGCSCHFIyJM67UsmZVYOz%2BaEcG6Nqvs8DEQ4ODVfuTCARUN%2Bnib1%2FkWLMlbqDsV%2FOhq%2BXMnaDPDvGFNum7X0jdaoGz2YNAZywWFQRfgZ4LOP4n4R27T%2FPnxY9kP2EY9KN53B8ghqsy%2Bne1E7uF%2BeclioPJpVJtntC5MT1KPyElGZphIaZ1MBa4O%2Bk6D6F7pRCfynLxd8&X-Amz-Signature=f41a48d4f78a3215b5aa450d1aebcf8379a5d7d946c3d50928ebd54882680a06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255FVYFF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIF5AkhgjizUTJ5RgGHQe5SyRc9gKCG7T198N9MfQ6DTbAiEA5y3mk9%2BWyDGAvbUU%2BtdpzVHS5ewJKl9dCI%2F6H79baNUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJF35mb2CUSD3HIyBCrcA%2BJSXclazg9ul2gD%2FiZSdLD%2BttUL2WJigS6219ZVLkZW4zrJ4e75adwxSuWnLPmWzUoWXCl2Xnf3fQDQWGPad12klCSldw2tLAClciY602IaaYeotmCFUNWkkGUz8w4mtdsywmUtpfd4USgdJtp12f%2F7NTc0sQ%2FsXnc9VFG55s22ViyEKu3ZWv0dRnZrOkGBayx5ZUKhAQG6MSSgE93Gf0wGMnJwGLNM7W1D3aXll2cET%2FHoA%2F4npqqSASGmEy5rn1%2BaCQrXytaFy2OCTtF4q6sTnNQhe48F%2FSgkHgMbEsUTDSiSKGHp2ZAjOsz3ap8QFtbzgBIZ%2Fun0YE%2FYMbVUhEB23IJ9m1WdOqdbtWMQScjQxrZVfQ8F9esOhNqPVvN7fzv7SEyFeiM168beaEoy4L3BFzsmuQiRNWO8L%2Fnt4fnqQBaGfU4tJN86san7MwP4d0Rjs1jTr9dFI166Pct2%2BbXHLG23V%2BqhaKMoXfcIsmzvtRnzFL7smVt8jP9B331GHrJhpEIn61bwpKz6f9t%2FAbpoTeMBmDCNPsIPT4vmB6VzzeWRH2Q7ij54HB64sJh99HOnIPp9RlvyLOmJGqZXYE31UpCspg3SVeyAdd2Coi5fzjaKLV6aZVElxmy1MN%2Bjx70GOqUBlmoYnkciLZHQ%2B5ftKIIXfGCSCHFIyJM67UsmZVYOz%2BaEcG6Nqvs8DEQ4ODVfuTCARUN%2Bnib1%2FkWLMlbqDsV%2FOhq%2BXMnaDPDvGFNum7X0jdaoGz2YNAZywWFQRfgZ4LOP4n4R27T%2FPnxY9kP2EY9KN53B8ghqsy%2Bne1E7uF%2BeclioPJpVJtntC5MT1KPyElGZphIaZ1MBa4O%2Bk6D6F7pRCfynLxd8&X-Amz-Signature=230b46a055d1a9895b0fbf8289d2608dc0f52285eb011d2243d117db1553cd8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
