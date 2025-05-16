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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SEWQW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu4rZHfWg1goVziN01pEdCQdXLS21FQxPz6dlFPRUOjQIgUHzOss%2BJ0%2BO85u17pmP1KYRh9BN2Ojmoa3vg9oqvJqoq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGuwa03hLAY6VvAZRCrcAxJ7Vyh8JZaLR%2B2GFr6P6YoU5wUQsEN4N6%2BEWT%2BorD9GJs4ZjB5dLrz9rR8GNbK3QOyk4rHlMTHJ%2FZ%2F3kFILmu6uP%2FD6%2FWl%2FOw6fbB5oK3Q%2BSqMMze8BdFuNJk08NWmcOitKpoqMZcCcP%2FspOcz4tyuZftKGQfMQBsjrmYhsbbJSaoaVWOrRLYChII7fjQnTkJooTdx71U87sqMSBHO2%2FuxH84xeLAAWXfBCsC9kuvQ9vctTTvhrWbggezuDY%2FiATrZepm5SsyVdJ%2FrNIUbjKpxonH%2Fxp9EYVVBnUt9KbUPDmyY1JihPJbArIGcGXBxxwAc4Z56NmoyAY%2F0dLLyMQKtarWpzRIGKdrnYgBTdts%2FD9eZ%2F5bkN3NchI1Oy7Jo5zWs5o57cVta%2Fs26Tegyk4MAeqjYSxqmaUrfWRrdt5euK0QZPKhkA6WmIWeMKQqT3vbUlCxmfWLyhP8mBoHrHwU6oqqBkdPAynqfmWzyIyLW%2F6ozGsO6q8X2taZwIn678fAX3AqUDeCyTQhWRBN7EKKyHZDn0kz18rhkbnO%2BORwxgPXRNskb17dPfaPEk4h%2Bt0oxNrJyj2BmrFp%2FMCGb%2Fb2i9%2BgEpDD%2BxZBXE6e2B3FZZkLiJkPHn246j5uVAMLTEnsEGOqUBukk0R7tsNQUPao4AP611s8SzZi5fkA9xWGHQeFPFdaF6uHStZ4swbu9WTnCVCpeu9D7einP0TF5NRpulxxLkmjlN%2FFnjquQOEdfVWCH2DktDJ2GP2SRbHsgNK3ovh0upqY3cJcH5nPJXLEC2u53jZiD4vhSlTwYl6ovFx%2FqIQ2cTvkBzO6gcaqwfEfRE0NH0%2FDfAuh3zvIqvzrjRsbbeSmS5Edxu&X-Amz-Signature=14d73e277404ef133f2d35b9224cb4db9efaeca0a2ede1318c44ab3a20cd7b50&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SEWQW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu4rZHfWg1goVziN01pEdCQdXLS21FQxPz6dlFPRUOjQIgUHzOss%2BJ0%2BO85u17pmP1KYRh9BN2Ojmoa3vg9oqvJqoq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGuwa03hLAY6VvAZRCrcAxJ7Vyh8JZaLR%2B2GFr6P6YoU5wUQsEN4N6%2BEWT%2BorD9GJs4ZjB5dLrz9rR8GNbK3QOyk4rHlMTHJ%2FZ%2F3kFILmu6uP%2FD6%2FWl%2FOw6fbB5oK3Q%2BSqMMze8BdFuNJk08NWmcOitKpoqMZcCcP%2FspOcz4tyuZftKGQfMQBsjrmYhsbbJSaoaVWOrRLYChII7fjQnTkJooTdx71U87sqMSBHO2%2FuxH84xeLAAWXfBCsC9kuvQ9vctTTvhrWbggezuDY%2FiATrZepm5SsyVdJ%2FrNIUbjKpxonH%2Fxp9EYVVBnUt9KbUPDmyY1JihPJbArIGcGXBxxwAc4Z56NmoyAY%2F0dLLyMQKtarWpzRIGKdrnYgBTdts%2FD9eZ%2F5bkN3NchI1Oy7Jo5zWs5o57cVta%2Fs26Tegyk4MAeqjYSxqmaUrfWRrdt5euK0QZPKhkA6WmIWeMKQqT3vbUlCxmfWLyhP8mBoHrHwU6oqqBkdPAynqfmWzyIyLW%2F6ozGsO6q8X2taZwIn678fAX3AqUDeCyTQhWRBN7EKKyHZDn0kz18rhkbnO%2BORwxgPXRNskb17dPfaPEk4h%2Bt0oxNrJyj2BmrFp%2FMCGb%2Fb2i9%2BgEpDD%2BxZBXE6e2B3FZZkLiJkPHn246j5uVAMLTEnsEGOqUBukk0R7tsNQUPao4AP611s8SzZi5fkA9xWGHQeFPFdaF6uHStZ4swbu9WTnCVCpeu9D7einP0TF5NRpulxxLkmjlN%2FFnjquQOEdfVWCH2DktDJ2GP2SRbHsgNK3ovh0upqY3cJcH5nPJXLEC2u53jZiD4vhSlTwYl6ovFx%2FqIQ2cTvkBzO6gcaqwfEfRE0NH0%2FDfAuh3zvIqvzrjRsbbeSmS5Edxu&X-Amz-Signature=24ef2a71756a5bc7afd01c35ebf63b63fef0a97dcf5c26b9c2b61a2b5ac005e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6SEWQW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu4rZHfWg1goVziN01pEdCQdXLS21FQxPz6dlFPRUOjQIgUHzOss%2BJ0%2BO85u17pmP1KYRh9BN2Ojmoa3vg9oqvJqoq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGuwa03hLAY6VvAZRCrcAxJ7Vyh8JZaLR%2B2GFr6P6YoU5wUQsEN4N6%2BEWT%2BorD9GJs4ZjB5dLrz9rR8GNbK3QOyk4rHlMTHJ%2FZ%2F3kFILmu6uP%2FD6%2FWl%2FOw6fbB5oK3Q%2BSqMMze8BdFuNJk08NWmcOitKpoqMZcCcP%2FspOcz4tyuZftKGQfMQBsjrmYhsbbJSaoaVWOrRLYChII7fjQnTkJooTdx71U87sqMSBHO2%2FuxH84xeLAAWXfBCsC9kuvQ9vctTTvhrWbggezuDY%2FiATrZepm5SsyVdJ%2FrNIUbjKpxonH%2Fxp9EYVVBnUt9KbUPDmyY1JihPJbArIGcGXBxxwAc4Z56NmoyAY%2F0dLLyMQKtarWpzRIGKdrnYgBTdts%2FD9eZ%2F5bkN3NchI1Oy7Jo5zWs5o57cVta%2Fs26Tegyk4MAeqjYSxqmaUrfWRrdt5euK0QZPKhkA6WmIWeMKQqT3vbUlCxmfWLyhP8mBoHrHwU6oqqBkdPAynqfmWzyIyLW%2F6ozGsO6q8X2taZwIn678fAX3AqUDeCyTQhWRBN7EKKyHZDn0kz18rhkbnO%2BORwxgPXRNskb17dPfaPEk4h%2Bt0oxNrJyj2BmrFp%2FMCGb%2Fb2i9%2BgEpDD%2BxZBXE6e2B3FZZkLiJkPHn246j5uVAMLTEnsEGOqUBukk0R7tsNQUPao4AP611s8SzZi5fkA9xWGHQeFPFdaF6uHStZ4swbu9WTnCVCpeu9D7einP0TF5NRpulxxLkmjlN%2FFnjquQOEdfVWCH2DktDJ2GP2SRbHsgNK3ovh0upqY3cJcH5nPJXLEC2u53jZiD4vhSlTwYl6ovFx%2FqIQ2cTvkBzO6gcaqwfEfRE0NH0%2FDfAuh3zvIqvzrjRsbbeSmS5Edxu&X-Amz-Signature=669a644338935185591f5b6882f1681a79724ab15ba55e50b67ca2f8c88410aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
