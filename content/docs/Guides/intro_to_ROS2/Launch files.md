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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQJDHUZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCHz1TzkMX45Ur3cop22h%2BfVuq9MwXd1LhC4agf%2FTj7C8CIQCfMxu6vFeiuS3OnD%2BX5rXT22hsyPx1Fuav6BNjviUaaSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMp8UhX7VImuodzARtKtwDm%2FMIf7VobddH6K1ZjvVphzMEMO%2B4lL1kuh%2FBu2x%2FD2JNCxKbc1L485yihXuZFAL29udNNa14wCsseETVX1wZw0TxLeYusdLVP8Aw5A8lrxTqAuUe7dllCCR2dknxvM842dJLX7lMK%2FznWcUvXA%2FJNPKbt50vZXQ8Z645soqOaTIu1PwIqqQMZU4I%2FyXvOM3rxgGelHcuKgi%2B4XlTion4H4pnUK3WbLoYHCW5zYeMchGnpPu7S4HKUdgC1K%2FuXD%2B92khUBRdsmFBKvJ1vY3Bc3ANGW2UjRZdfy7ENNKXv5MdWKKe%2BJApqn9sWQaFMnJZFoSJ7cHSLd8fpKXSv%2BPpMCVzULCRs3jxnYZgC1Kd5OKmoHsHKa%2BvMZQrNlDI5mBCZKggmw3rUrR1QLAP9JI7cjRVcLuUFHofPNEhyvx0kUu18WF1AVK7DjDkyhsghHgv8l9v7bksSlBzXho2%2FGKK%2F4muS%2BE%2BSxjC9YPFVh0GvY73bSny6JElLm4HrmPxTnEybemwaW1CpORE94L8atdg9Kc6p%2Fiur2qGpLRajODYin%2BYjC12QsZ6n42PBNPpzGfcvTyf4cVx8B9Syn0sV4cBzYe8n0HwvKPcwfnv29zQLZn7ksEtRVWirf8QL7rUw0KmBwgY6pgHotc%2FuU%2FWqi2pM7giM0fzlY4UZwu7Alfy4xkZcElWCmKkMryad2t0dBaDJH78lWnkk2mH3FYoJNKdHNH0CoHIr3MNab%2BKhLLGNxV1xgZbtvyiYFKD9HKKWCFmKKi6224n7X%2F%2BOQK8WVjqh4BFbGMv3OXIkNyDLzSDEakEtulZd1h0BJvj21rhf5wBbghoWy1Qrrx0%2B7jHxSZ13WvpSc3ycTLCO3Uc8&X-Amz-Signature=048516033d989d847c73f6e83d6be4ab9c09e4a03f526b38abd0a54b61a9fe62&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQJDHUZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCHz1TzkMX45Ur3cop22h%2BfVuq9MwXd1LhC4agf%2FTj7C8CIQCfMxu6vFeiuS3OnD%2BX5rXT22hsyPx1Fuav6BNjviUaaSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMp8UhX7VImuodzARtKtwDm%2FMIf7VobddH6K1ZjvVphzMEMO%2B4lL1kuh%2FBu2x%2FD2JNCxKbc1L485yihXuZFAL29udNNa14wCsseETVX1wZw0TxLeYusdLVP8Aw5A8lrxTqAuUe7dllCCR2dknxvM842dJLX7lMK%2FznWcUvXA%2FJNPKbt50vZXQ8Z645soqOaTIu1PwIqqQMZU4I%2FyXvOM3rxgGelHcuKgi%2B4XlTion4H4pnUK3WbLoYHCW5zYeMchGnpPu7S4HKUdgC1K%2FuXD%2B92khUBRdsmFBKvJ1vY3Bc3ANGW2UjRZdfy7ENNKXv5MdWKKe%2BJApqn9sWQaFMnJZFoSJ7cHSLd8fpKXSv%2BPpMCVzULCRs3jxnYZgC1Kd5OKmoHsHKa%2BvMZQrNlDI5mBCZKggmw3rUrR1QLAP9JI7cjRVcLuUFHofPNEhyvx0kUu18WF1AVK7DjDkyhsghHgv8l9v7bksSlBzXho2%2FGKK%2F4muS%2BE%2BSxjC9YPFVh0GvY73bSny6JElLm4HrmPxTnEybemwaW1CpORE94L8atdg9Kc6p%2Fiur2qGpLRajODYin%2BYjC12QsZ6n42PBNPpzGfcvTyf4cVx8B9Syn0sV4cBzYe8n0HwvKPcwfnv29zQLZn7ksEtRVWirf8QL7rUw0KmBwgY6pgHotc%2FuU%2FWqi2pM7giM0fzlY4UZwu7Alfy4xkZcElWCmKkMryad2t0dBaDJH78lWnkk2mH3FYoJNKdHNH0CoHIr3MNab%2BKhLLGNxV1xgZbtvyiYFKD9HKKWCFmKKi6224n7X%2F%2BOQK8WVjqh4BFbGMv3OXIkNyDLzSDEakEtulZd1h0BJvj21rhf5wBbghoWy1Qrrx0%2B7jHxSZ13WvpSc3ycTLCO3Uc8&X-Amz-Signature=99a05335feab563956b0abdd58508bd842bbd2c87d018ba161a8baea694c7d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQJDHUZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T153440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCHz1TzkMX45Ur3cop22h%2BfVuq9MwXd1LhC4agf%2FTj7C8CIQCfMxu6vFeiuS3OnD%2BX5rXT22hsyPx1Fuav6BNjviUaaSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMp8UhX7VImuodzARtKtwDm%2FMIf7VobddH6K1ZjvVphzMEMO%2B4lL1kuh%2FBu2x%2FD2JNCxKbc1L485yihXuZFAL29udNNa14wCsseETVX1wZw0TxLeYusdLVP8Aw5A8lrxTqAuUe7dllCCR2dknxvM842dJLX7lMK%2FznWcUvXA%2FJNPKbt50vZXQ8Z645soqOaTIu1PwIqqQMZU4I%2FyXvOM3rxgGelHcuKgi%2B4XlTion4H4pnUK3WbLoYHCW5zYeMchGnpPu7S4HKUdgC1K%2FuXD%2B92khUBRdsmFBKvJ1vY3Bc3ANGW2UjRZdfy7ENNKXv5MdWKKe%2BJApqn9sWQaFMnJZFoSJ7cHSLd8fpKXSv%2BPpMCVzULCRs3jxnYZgC1Kd5OKmoHsHKa%2BvMZQrNlDI5mBCZKggmw3rUrR1QLAP9JI7cjRVcLuUFHofPNEhyvx0kUu18WF1AVK7DjDkyhsghHgv8l9v7bksSlBzXho2%2FGKK%2F4muS%2BE%2BSxjC9YPFVh0GvY73bSny6JElLm4HrmPxTnEybemwaW1CpORE94L8atdg9Kc6p%2Fiur2qGpLRajODYin%2BYjC12QsZ6n42PBNPpzGfcvTyf4cVx8B9Syn0sV4cBzYe8n0HwvKPcwfnv29zQLZn7ksEtRVWirf8QL7rUw0KmBwgY6pgHotc%2FuU%2FWqi2pM7giM0fzlY4UZwu7Alfy4xkZcElWCmKkMryad2t0dBaDJH78lWnkk2mH3FYoJNKdHNH0CoHIr3MNab%2BKhLLGNxV1xgZbtvyiYFKD9HKKWCFmKKi6224n7X%2F%2BOQK8WVjqh4BFbGMv3OXIkNyDLzSDEakEtulZd1h0BJvj21rhf5wBbghoWy1Qrrx0%2B7jHxSZ13WvpSc3ycTLCO3Uc8&X-Amz-Signature=3534b524d0bd2b7264bab75c1473764d42e823fa433f3653cf1053e71a3afbfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
