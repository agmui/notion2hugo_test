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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATMPFQL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIClcWn9kwlodo3pSG7HFKZS1aDfQnzON6yUeWo3YMkdbAiBaqF8uXSf%2BjfiGoClo5eAdOvKeM89zxm2sD8Jjxl%2FRSyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSdpu29PDHnW5T%2BzOKtwDbZZe5XfcNux5HwiowD0%2BfF7JKSg04o%2BnbAHoP94B29qAKekPU97dSykXZOOQ8AKpkIg6T9AETmHwI%2Fb3Zx34GiDdUK6djIF4JQM5JWYNl%2FCgcOkQOrvvGQbUdFSOaZEjIrZ8TxAmToUrfBtoepKc47SzDiAXwXrBQA5pfgBFis2p3vVm9ub63ex7xsb3kUaOWwJjYEdp9gVqgzbW8zJis9dklvl5K%2BKxVJ2jFgMECarHFcj2v6AjTWcwCtFCz5jc%2BcehSxgRD8CHYcXshG%2BcIuahFFP2xoaXzvHaoG7p6juSWOFI3zOeHuUtyg6dvjtLEaukvJo0HGs1%2FhJALPdevdiOb2Rt0zoO2ArnzNqIh3CxmjN62SP2eOO9ON9ma34nmuMep5%2B6a4ahW36lqsnats5yldyWiFqe15xAcLeKpnn1S%2F6Ddgmhn2HjRx0M33ZBt%2B7MIHh7wRhJ%2BpTIYioTLaXDiHeDsSCOb9J5V3x9RDdAArUYtgBvcEQc3O0EK2JCOpUOrdjSAStMG5Q7n9SZbwXLNMqjKbALlAodjY4LfA13BTIvJYI2pwMljWsG7qHRkQo8SkMI3yxdrLIfc2HOOqujPJ8oF1%2FPufZkqjPTKxswCktyoXRJvaUN3SIw4qCiwAY6pgG%2FVQ0ebmm8j%2BLXjzjcsOEg92xwpcdXnZ2oPW5M%2F1JELJ%2FoxhFUHsEvP5uoiAYWBjSCt%2Bg3PmFm59hbOOOfwpWeDQVwJ4A4xUklTp0IGQ%2B9OsFqdP8dxwLOn3zF3TDDUP2DedB5Vt8voQBiKu1PE1e34hy6CjcM6uqX8buU%2BANIYWtT2Zer%2F0Q532MVABXmisj8bx5LKhbU93RNyhftoLLlVrQyuWFm&X-Amz-Signature=8a9aab534a72b2cf28ea0897bddc5dca96fea42c618d9e8c8e5d4062f8985dec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATMPFQL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIClcWn9kwlodo3pSG7HFKZS1aDfQnzON6yUeWo3YMkdbAiBaqF8uXSf%2BjfiGoClo5eAdOvKeM89zxm2sD8Jjxl%2FRSyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSdpu29PDHnW5T%2BzOKtwDbZZe5XfcNux5HwiowD0%2BfF7JKSg04o%2BnbAHoP94B29qAKekPU97dSykXZOOQ8AKpkIg6T9AETmHwI%2Fb3Zx34GiDdUK6djIF4JQM5JWYNl%2FCgcOkQOrvvGQbUdFSOaZEjIrZ8TxAmToUrfBtoepKc47SzDiAXwXrBQA5pfgBFis2p3vVm9ub63ex7xsb3kUaOWwJjYEdp9gVqgzbW8zJis9dklvl5K%2BKxVJ2jFgMECarHFcj2v6AjTWcwCtFCz5jc%2BcehSxgRD8CHYcXshG%2BcIuahFFP2xoaXzvHaoG7p6juSWOFI3zOeHuUtyg6dvjtLEaukvJo0HGs1%2FhJALPdevdiOb2Rt0zoO2ArnzNqIh3CxmjN62SP2eOO9ON9ma34nmuMep5%2B6a4ahW36lqsnats5yldyWiFqe15xAcLeKpnn1S%2F6Ddgmhn2HjRx0M33ZBt%2B7MIHh7wRhJ%2BpTIYioTLaXDiHeDsSCOb9J5V3x9RDdAArUYtgBvcEQc3O0EK2JCOpUOrdjSAStMG5Q7n9SZbwXLNMqjKbALlAodjY4LfA13BTIvJYI2pwMljWsG7qHRkQo8SkMI3yxdrLIfc2HOOqujPJ8oF1%2FPufZkqjPTKxswCktyoXRJvaUN3SIw4qCiwAY6pgG%2FVQ0ebmm8j%2BLXjzjcsOEg92xwpcdXnZ2oPW5M%2F1JELJ%2FoxhFUHsEvP5uoiAYWBjSCt%2Bg3PmFm59hbOOOfwpWeDQVwJ4A4xUklTp0IGQ%2B9OsFqdP8dxwLOn3zF3TDDUP2DedB5Vt8voQBiKu1PE1e34hy6CjcM6uqX8buU%2BANIYWtT2Zer%2F0Q532MVABXmisj8bx5LKhbU93RNyhftoLLlVrQyuWFm&X-Amz-Signature=8361a70e1049ef5832c808e5d952180c99bc686a421cc602a8f8d69037e55ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATMPFQL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIClcWn9kwlodo3pSG7HFKZS1aDfQnzON6yUeWo3YMkdbAiBaqF8uXSf%2BjfiGoClo5eAdOvKeM89zxm2sD8Jjxl%2FRSyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSdpu29PDHnW5T%2BzOKtwDbZZe5XfcNux5HwiowD0%2BfF7JKSg04o%2BnbAHoP94B29qAKekPU97dSykXZOOQ8AKpkIg6T9AETmHwI%2Fb3Zx34GiDdUK6djIF4JQM5JWYNl%2FCgcOkQOrvvGQbUdFSOaZEjIrZ8TxAmToUrfBtoepKc47SzDiAXwXrBQA5pfgBFis2p3vVm9ub63ex7xsb3kUaOWwJjYEdp9gVqgzbW8zJis9dklvl5K%2BKxVJ2jFgMECarHFcj2v6AjTWcwCtFCz5jc%2BcehSxgRD8CHYcXshG%2BcIuahFFP2xoaXzvHaoG7p6juSWOFI3zOeHuUtyg6dvjtLEaukvJo0HGs1%2FhJALPdevdiOb2Rt0zoO2ArnzNqIh3CxmjN62SP2eOO9ON9ma34nmuMep5%2B6a4ahW36lqsnats5yldyWiFqe15xAcLeKpnn1S%2F6Ddgmhn2HjRx0M33ZBt%2B7MIHh7wRhJ%2BpTIYioTLaXDiHeDsSCOb9J5V3x9RDdAArUYtgBvcEQc3O0EK2JCOpUOrdjSAStMG5Q7n9SZbwXLNMqjKbALlAodjY4LfA13BTIvJYI2pwMljWsG7qHRkQo8SkMI3yxdrLIfc2HOOqujPJ8oF1%2FPufZkqjPTKxswCktyoXRJvaUN3SIw4qCiwAY6pgG%2FVQ0ebmm8j%2BLXjzjcsOEg92xwpcdXnZ2oPW5M%2F1JELJ%2FoxhFUHsEvP5uoiAYWBjSCt%2Bg3PmFm59hbOOOfwpWeDQVwJ4A4xUklTp0IGQ%2B9OsFqdP8dxwLOn3zF3TDDUP2DedB5Vt8voQBiKu1PE1e34hy6CjcM6uqX8buU%2BANIYWtT2Zer%2F0Q532MVABXmisj8bx5LKhbU93RNyhftoLLlVrQyuWFm&X-Amz-Signature=34c7b465eba176bd9d3c8793e33b84286c072e91d7045054fa8e5e0847f537c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
