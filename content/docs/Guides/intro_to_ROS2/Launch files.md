---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMJWRVX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqLCI4LGXQuBsfjIudjLj%2BjrbLxwzUwU6yrp1tQS7AoAiBDCB%2Fm8rpdHRslyMkWU4tuJi%2B0FlbSpBU9eUU%2FnAkMXSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWhmHpm6gJ7%2BxyAHoKtwDtwDb%2BHSQjGkgPt9QZJf0w9pQjbma9KaLCqFSvC%2F2lcOQ%2FSWRz%2BSZ%2FEuwGizg2VHGpSKKCgSC7uo97EpZc5wGjB0Jtwxg1wPaoep2MerkDl4eK12R2FkGBrtSTTStP7vyXnrhMyqcgTvnb2mogkMem6177b0Nnmc%2BIfyPQXTSesTsR%2BCCW11LW%2F0Ww6qxIlU3ZwKCk6%2F9voZYGq3XR6VP%2Bf7cpJ75oqt2BRTZobff42Rxru3ltzb%2BoDZWWiU%2FT39Uu1dfa%2FD3CGcRk8Ex0p44I0h1nXubj6Nqq6p%2FaAPgek5%2B8MKl%2F7K7wFLU82kvZaPIbuYBSTIcDW98wTzisGKiT16jGr%2BcoS5Ut8bMIbegApD%2Fi7lizzPw5qlMECxRWKcMWpp1IcnkTbHyH0jKEkTQJoxAGEVp%2FNX0Ri6CQMWIo%2FJVwQwZmVxuQlX4iEXbwUDF8evMnRMTy7LOixZiRVrQN9h9HbrIOdc1tS7sLAKb0mpM%2FiRtgLpZClqbFe%2B3LYAslM78YlWRpuH3Egj%2Bm0sXiQY%2FuDl%2FYw%2BlJpCNa0YfjQCOPj%2F3zLA6fAEdbN6yHeEsq3pm0b9PaDSNYZ2zGUU3OiVh4b0WJxbEtInCAuDByacXgu1DF7a7UjjQE%2B0w8uyxxAY6pgEVZ%2BlpElSIsriEVUdi4qn0kJjoK2jUgRCuOWPt61BdvhhkKu1sLHZ3Hd4J%2FapFyzvf3eXGd%2FUS5Ni3387ksx7Sl7MdB1d7GwxelIz8ZXKUAtd7v6y8MbDqARImL1q2qaE45BlMGNBcpu5QjAiKIbZ0aNxNtaIxu1P3nQR3L0RwyqneyBXP5L7bmQ8c3rErEyHvjyrfB6mR5%2FzHnEQKMZnOOpPZ%2Bj2B&X-Amz-Signature=b792c35c3a57b588f92ca8aafdd5b3f2abdfb8157169a520e292d1b548bb364d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMJWRVX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqLCI4LGXQuBsfjIudjLj%2BjrbLxwzUwU6yrp1tQS7AoAiBDCB%2Fm8rpdHRslyMkWU4tuJi%2B0FlbSpBU9eUU%2FnAkMXSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWhmHpm6gJ7%2BxyAHoKtwDtwDb%2BHSQjGkgPt9QZJf0w9pQjbma9KaLCqFSvC%2F2lcOQ%2FSWRz%2BSZ%2FEuwGizg2VHGpSKKCgSC7uo97EpZc5wGjB0Jtwxg1wPaoep2MerkDl4eK12R2FkGBrtSTTStP7vyXnrhMyqcgTvnb2mogkMem6177b0Nnmc%2BIfyPQXTSesTsR%2BCCW11LW%2F0Ww6qxIlU3ZwKCk6%2F9voZYGq3XR6VP%2Bf7cpJ75oqt2BRTZobff42Rxru3ltzb%2BoDZWWiU%2FT39Uu1dfa%2FD3CGcRk8Ex0p44I0h1nXubj6Nqq6p%2FaAPgek5%2B8MKl%2F7K7wFLU82kvZaPIbuYBSTIcDW98wTzisGKiT16jGr%2BcoS5Ut8bMIbegApD%2Fi7lizzPw5qlMECxRWKcMWpp1IcnkTbHyH0jKEkTQJoxAGEVp%2FNX0Ri6CQMWIo%2FJVwQwZmVxuQlX4iEXbwUDF8evMnRMTy7LOixZiRVrQN9h9HbrIOdc1tS7sLAKb0mpM%2FiRtgLpZClqbFe%2B3LYAslM78YlWRpuH3Egj%2Bm0sXiQY%2FuDl%2FYw%2BlJpCNa0YfjQCOPj%2F3zLA6fAEdbN6yHeEsq3pm0b9PaDSNYZ2zGUU3OiVh4b0WJxbEtInCAuDByacXgu1DF7a7UjjQE%2B0w8uyxxAY6pgEVZ%2BlpElSIsriEVUdi4qn0kJjoK2jUgRCuOWPt61BdvhhkKu1sLHZ3Hd4J%2FapFyzvf3eXGd%2FUS5Ni3387ksx7Sl7MdB1d7GwxelIz8ZXKUAtd7v6y8MbDqARImL1q2qaE45BlMGNBcpu5QjAiKIbZ0aNxNtaIxu1P3nQR3L0RwyqneyBXP5L7bmQ8c3rErEyHvjyrfB6mR5%2FzHnEQKMZnOOpPZ%2Bj2B&X-Amz-Signature=c5d859f010341b1499d9af9bb96139309a84047323c38f8ebee4a147e327aa38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMJWRVX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqLCI4LGXQuBsfjIudjLj%2BjrbLxwzUwU6yrp1tQS7AoAiBDCB%2Fm8rpdHRslyMkWU4tuJi%2B0FlbSpBU9eUU%2FnAkMXSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWhmHpm6gJ7%2BxyAHoKtwDtwDb%2BHSQjGkgPt9QZJf0w9pQjbma9KaLCqFSvC%2F2lcOQ%2FSWRz%2BSZ%2FEuwGizg2VHGpSKKCgSC7uo97EpZc5wGjB0Jtwxg1wPaoep2MerkDl4eK12R2FkGBrtSTTStP7vyXnrhMyqcgTvnb2mogkMem6177b0Nnmc%2BIfyPQXTSesTsR%2BCCW11LW%2F0Ww6qxIlU3ZwKCk6%2F9voZYGq3XR6VP%2Bf7cpJ75oqt2BRTZobff42Rxru3ltzb%2BoDZWWiU%2FT39Uu1dfa%2FD3CGcRk8Ex0p44I0h1nXubj6Nqq6p%2FaAPgek5%2B8MKl%2F7K7wFLU82kvZaPIbuYBSTIcDW98wTzisGKiT16jGr%2BcoS5Ut8bMIbegApD%2Fi7lizzPw5qlMECxRWKcMWpp1IcnkTbHyH0jKEkTQJoxAGEVp%2FNX0Ri6CQMWIo%2FJVwQwZmVxuQlX4iEXbwUDF8evMnRMTy7LOixZiRVrQN9h9HbrIOdc1tS7sLAKb0mpM%2FiRtgLpZClqbFe%2B3LYAslM78YlWRpuH3Egj%2Bm0sXiQY%2FuDl%2FYw%2BlJpCNa0YfjQCOPj%2F3zLA6fAEdbN6yHeEsq3pm0b9PaDSNYZ2zGUU3OiVh4b0WJxbEtInCAuDByacXgu1DF7a7UjjQE%2B0w8uyxxAY6pgEVZ%2BlpElSIsriEVUdi4qn0kJjoK2jUgRCuOWPt61BdvhhkKu1sLHZ3Hd4J%2FapFyzvf3eXGd%2FUS5Ni3387ksx7Sl7MdB1d7GwxelIz8ZXKUAtd7v6y8MbDqARImL1q2qaE45BlMGNBcpu5QjAiKIbZ0aNxNtaIxu1P3nQR3L0RwyqneyBXP5L7bmQ8c3rErEyHvjyrfB6mR5%2FzHnEQKMZnOOpPZ%2Bj2B&X-Amz-Signature=acb10b91e38e1b48df44a10c267557408bdc0bccabe13a1651ce95a5db84ead3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
