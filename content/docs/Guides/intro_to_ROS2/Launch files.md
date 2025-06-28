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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XPP45P%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkJ7Qc17KIEcHVJpjUKyBiCiZDJFSUDje%2F1xfwkDAvOgIgeYTPZOxIf%2FZLUv0IUlmUilxZnMb7YNTpWyYZNuBIa2YqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq0N9KOuVyZ6qUfhSrcA2PQ0FAL0iccXjnPzCxhiKa3CXP9Sg6OXu3EcnBpUjyciDBOi7pNw0bB4vENsgzmhQ6X%2B8gB4E91K94PePaGE7EYDsBxmy2Lk7fZtmO4b42%2FhO4mqy%2FNW8dSqHTdtuBLHsJg4n5SfIe1didjQj7uYWarO4TILLoc%2B%2FwFFUdaiCED01r0Zl9gnqT0ZHqrA%2FiPyqfXf7JkG4jxl43WHhCnPL8q%2Fl8UMOjnEZj8M68DMScvQM27JjR9yMx9mTV2EUaTc%2BzYEUUx2XlmRDy1raxqpVqi2hdFanbTFYE5kHTZedwR9BUN1Rf4dS8FoaQ7%2Bs%2BL6DKX%2FxcwR%2BpyKhANgsX%2FOaD7SlmSeShJsdzzLOUha%2BGRzpnsluuOlRpt2pomVPrJy4PPoSTbJS5KnPb7BvZF0Xk%2FcUQquW%2BHeM9Oiv3xdntUbnJGeuNunUiWyIWxVS99KUdiXv%2Bg%2FYFrrPNCDZ3NcGo3mwwMz8%2BblmVI4if2Z4Ck3KByaq18Zq0embWZw%2BzzPEhjn%2BlQ5IOJCLiLHBLahPEYM6BIaTfBVks2cCwcvWfqkht6FMqS%2FsWOXB61j2ZLL9b%2BBlOLath9xF8qxmGrpLtDQq0thv4Jct6jfbnF8%2Fn0EKfgNHF1%2FRiWAVyKMOvMgMMGOqUB0CUuSthTai%2FGMkr0XTsEzJ6DzcML1tF63KgUZkwEtodv2KM%2Fa4dsYGOMpcupuFdtr6LeiugQLel3wyAbaM3CDmlAa26Q4GeG3c7g8pPg7Aq6ls31L8USgGdnTIYZ%2BPu8DhYoGJnbFdOmKPbotpSStwxf6qoV44YEnr1cCG4J36Tf%2B8ZQeAcxvG3rkWmLZI8iC6tmyp4em1AzxFYRgZfzdxZk46Q9&X-Amz-Signature=40527fa79790b8f47343828f0f05170d88beb3bc4ced08c88dbb1448a9282b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XPP45P%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkJ7Qc17KIEcHVJpjUKyBiCiZDJFSUDje%2F1xfwkDAvOgIgeYTPZOxIf%2FZLUv0IUlmUilxZnMb7YNTpWyYZNuBIa2YqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq0N9KOuVyZ6qUfhSrcA2PQ0FAL0iccXjnPzCxhiKa3CXP9Sg6OXu3EcnBpUjyciDBOi7pNw0bB4vENsgzmhQ6X%2B8gB4E91K94PePaGE7EYDsBxmy2Lk7fZtmO4b42%2FhO4mqy%2FNW8dSqHTdtuBLHsJg4n5SfIe1didjQj7uYWarO4TILLoc%2B%2FwFFUdaiCED01r0Zl9gnqT0ZHqrA%2FiPyqfXf7JkG4jxl43WHhCnPL8q%2Fl8UMOjnEZj8M68DMScvQM27JjR9yMx9mTV2EUaTc%2BzYEUUx2XlmRDy1raxqpVqi2hdFanbTFYE5kHTZedwR9BUN1Rf4dS8FoaQ7%2Bs%2BL6DKX%2FxcwR%2BpyKhANgsX%2FOaD7SlmSeShJsdzzLOUha%2BGRzpnsluuOlRpt2pomVPrJy4PPoSTbJS5KnPb7BvZF0Xk%2FcUQquW%2BHeM9Oiv3xdntUbnJGeuNunUiWyIWxVS99KUdiXv%2Bg%2FYFrrPNCDZ3NcGo3mwwMz8%2BblmVI4if2Z4Ck3KByaq18Zq0embWZw%2BzzPEhjn%2BlQ5IOJCLiLHBLahPEYM6BIaTfBVks2cCwcvWfqkht6FMqS%2FsWOXB61j2ZLL9b%2BBlOLath9xF8qxmGrpLtDQq0thv4Jct6jfbnF8%2Fn0EKfgNHF1%2FRiWAVyKMOvMgMMGOqUB0CUuSthTai%2FGMkr0XTsEzJ6DzcML1tF63KgUZkwEtodv2KM%2Fa4dsYGOMpcupuFdtr6LeiugQLel3wyAbaM3CDmlAa26Q4GeG3c7g8pPg7Aq6ls31L8USgGdnTIYZ%2BPu8DhYoGJnbFdOmKPbotpSStwxf6qoV44YEnr1cCG4J36Tf%2B8ZQeAcxvG3rkWmLZI8iC6tmyp4em1AzxFYRgZfzdxZk46Q9&X-Amz-Signature=3e3e15ded6cd7308527dff423d6d2d5b0a7ba8273f69cbdaf8f382802b68e073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XPP45P%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkJ7Qc17KIEcHVJpjUKyBiCiZDJFSUDje%2F1xfwkDAvOgIgeYTPZOxIf%2FZLUv0IUlmUilxZnMb7YNTpWyYZNuBIa2YqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq0N9KOuVyZ6qUfhSrcA2PQ0FAL0iccXjnPzCxhiKa3CXP9Sg6OXu3EcnBpUjyciDBOi7pNw0bB4vENsgzmhQ6X%2B8gB4E91K94PePaGE7EYDsBxmy2Lk7fZtmO4b42%2FhO4mqy%2FNW8dSqHTdtuBLHsJg4n5SfIe1didjQj7uYWarO4TILLoc%2B%2FwFFUdaiCED01r0Zl9gnqT0ZHqrA%2FiPyqfXf7JkG4jxl43WHhCnPL8q%2Fl8UMOjnEZj8M68DMScvQM27JjR9yMx9mTV2EUaTc%2BzYEUUx2XlmRDy1raxqpVqi2hdFanbTFYE5kHTZedwR9BUN1Rf4dS8FoaQ7%2Bs%2BL6DKX%2FxcwR%2BpyKhANgsX%2FOaD7SlmSeShJsdzzLOUha%2BGRzpnsluuOlRpt2pomVPrJy4PPoSTbJS5KnPb7BvZF0Xk%2FcUQquW%2BHeM9Oiv3xdntUbnJGeuNunUiWyIWxVS99KUdiXv%2Bg%2FYFrrPNCDZ3NcGo3mwwMz8%2BblmVI4if2Z4Ck3KByaq18Zq0embWZw%2BzzPEhjn%2BlQ5IOJCLiLHBLahPEYM6BIaTfBVks2cCwcvWfqkht6FMqS%2FsWOXB61j2ZLL9b%2BBlOLath9xF8qxmGrpLtDQq0thv4Jct6jfbnF8%2Fn0EKfgNHF1%2FRiWAVyKMOvMgMMGOqUB0CUuSthTai%2FGMkr0XTsEzJ6DzcML1tF63KgUZkwEtodv2KM%2Fa4dsYGOMpcupuFdtr6LeiugQLel3wyAbaM3CDmlAa26Q4GeG3c7g8pPg7Aq6ls31L8USgGdnTIYZ%2BPu8DhYoGJnbFdOmKPbotpSStwxf6qoV44YEnr1cCG4J36Tf%2B8ZQeAcxvG3rkWmLZI8iC6tmyp4em1AzxFYRgZfzdxZk46Q9&X-Amz-Signature=2df49e9603ef3ac573da9cb90e9d5e177c66908a329399ae1ee47e0244afb27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
