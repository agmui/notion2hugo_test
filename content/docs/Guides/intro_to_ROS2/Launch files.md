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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YKNJJ45%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDTLiAUTSg3AuvZrOCV10uOFUunfNOfNSZGXFZCgvZMwAIgeuNjs8W%2B1vgtnEyNwofwvgnHCOYHmEYBSm6%2BR7cXLQgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLV9h8gc3fdfuG1LMCrcA4Z%2FSsel9uXUenCkQsxovkDXXV2x71inDLWOiZDwtI5jzxLKkshNLWaLCCuI8rjHuLPNH5mKGc%2BQJi1YmqsOup%2FO0lilFMLSefMaoafyZKrkWa7DzBcZYWObp5sXgso69b59WyHGf68qacTFRr0G1o2RkOhuxvy8EEG4l4Lbhvn36XHqj6CEb17%2F384Wy3h%2BclILQA2Dq1Z8kvMMMBpf0QJKBgWgv%2FmB9RFITp2F44GyCB%2BqlHjk0bwHq1j2a6g%2F5B7JgFFW2oSPI%2Big8l1dIWWaYLP106QjQ%2ByytecP5jlWnYYN8dAYdRKrv3ioA6ivsPi5QwE3J3HsKJH3VmLWd7Qe6GpoJcjTWJmflOfEmWW6J7cwUnCFogZFj9YNUZcHwaXcOkM8IilHneFlUUbqqYNTZqXMEzCyya1dlj3yDKlcF3R%2FfjK2ioNZICATUcNUvZFyUCodTXcua%2F7mSnupr84rtPvACn%2BHPamC7lEaMQP9CphdbNoUmBJ7eci1v50TbQIQHV2rTcdeIylbGrrRLi0zhb8r1xDfIlNC4dzC%2BA5eJ6qC%2B5mbxd%2BKUK7Gu%2BHi844E2ltdvAUSBJr4oQb0uVPkK1YaRH1vnHpgPC4mUoafOFRX8nk6EIaJH7bcMJOcw70GOqUBQHqzlTpYQU%2BVzo13ABbCJmzHQgzdKpJfrL1GJILqPItO20ANr6W2WrKhMywOuhV3vL6nvVyDQoZyLlQI3WgPIiivL%2FD7R3ph4uSU5qiQ3deenp0MKAwfBlc7vZ%2Fc2%2Fiz0w2FzNJlyDpTkJu6aywRV%2FLjsW25HPf1BT9fZkD6DQmzEzojLznkFs%2FL77xRYFuDIfif0cAC65yoYWVs5MQPj4dw2pO8&X-Amz-Signature=596c63a8e3f223446423a8a9babb629171e511b890ea4b29d30e84bbf408008e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YKNJJ45%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDTLiAUTSg3AuvZrOCV10uOFUunfNOfNSZGXFZCgvZMwAIgeuNjs8W%2B1vgtnEyNwofwvgnHCOYHmEYBSm6%2BR7cXLQgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLV9h8gc3fdfuG1LMCrcA4Z%2FSsel9uXUenCkQsxovkDXXV2x71inDLWOiZDwtI5jzxLKkshNLWaLCCuI8rjHuLPNH5mKGc%2BQJi1YmqsOup%2FO0lilFMLSefMaoafyZKrkWa7DzBcZYWObp5sXgso69b59WyHGf68qacTFRr0G1o2RkOhuxvy8EEG4l4Lbhvn36XHqj6CEb17%2F384Wy3h%2BclILQA2Dq1Z8kvMMMBpf0QJKBgWgv%2FmB9RFITp2F44GyCB%2BqlHjk0bwHq1j2a6g%2F5B7JgFFW2oSPI%2Big8l1dIWWaYLP106QjQ%2ByytecP5jlWnYYN8dAYdRKrv3ioA6ivsPi5QwE3J3HsKJH3VmLWd7Qe6GpoJcjTWJmflOfEmWW6J7cwUnCFogZFj9YNUZcHwaXcOkM8IilHneFlUUbqqYNTZqXMEzCyya1dlj3yDKlcF3R%2FfjK2ioNZICATUcNUvZFyUCodTXcua%2F7mSnupr84rtPvACn%2BHPamC7lEaMQP9CphdbNoUmBJ7eci1v50TbQIQHV2rTcdeIylbGrrRLi0zhb8r1xDfIlNC4dzC%2BA5eJ6qC%2B5mbxd%2BKUK7Gu%2BHi844E2ltdvAUSBJr4oQb0uVPkK1YaRH1vnHpgPC4mUoafOFRX8nk6EIaJH7bcMJOcw70GOqUBQHqzlTpYQU%2BVzo13ABbCJmzHQgzdKpJfrL1GJILqPItO20ANr6W2WrKhMywOuhV3vL6nvVyDQoZyLlQI3WgPIiivL%2FD7R3ph4uSU5qiQ3deenp0MKAwfBlc7vZ%2Fc2%2Fiz0w2FzNJlyDpTkJu6aywRV%2FLjsW25HPf1BT9fZkD6DQmzEzojLznkFs%2FL77xRYFuDIfif0cAC65yoYWVs5MQPj4dw2pO8&X-Amz-Signature=f7b72026797036b132054901a1aa1ffb5bec916480671324e0bbd336ff896501&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YKNJJ45%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDTLiAUTSg3AuvZrOCV10uOFUunfNOfNSZGXFZCgvZMwAIgeuNjs8W%2B1vgtnEyNwofwvgnHCOYHmEYBSm6%2BR7cXLQgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLV9h8gc3fdfuG1LMCrcA4Z%2FSsel9uXUenCkQsxovkDXXV2x71inDLWOiZDwtI5jzxLKkshNLWaLCCuI8rjHuLPNH5mKGc%2BQJi1YmqsOup%2FO0lilFMLSefMaoafyZKrkWa7DzBcZYWObp5sXgso69b59WyHGf68qacTFRr0G1o2RkOhuxvy8EEG4l4Lbhvn36XHqj6CEb17%2F384Wy3h%2BclILQA2Dq1Z8kvMMMBpf0QJKBgWgv%2FmB9RFITp2F44GyCB%2BqlHjk0bwHq1j2a6g%2F5B7JgFFW2oSPI%2Big8l1dIWWaYLP106QjQ%2ByytecP5jlWnYYN8dAYdRKrv3ioA6ivsPi5QwE3J3HsKJH3VmLWd7Qe6GpoJcjTWJmflOfEmWW6J7cwUnCFogZFj9YNUZcHwaXcOkM8IilHneFlUUbqqYNTZqXMEzCyya1dlj3yDKlcF3R%2FfjK2ioNZICATUcNUvZFyUCodTXcua%2F7mSnupr84rtPvACn%2BHPamC7lEaMQP9CphdbNoUmBJ7eci1v50TbQIQHV2rTcdeIylbGrrRLi0zhb8r1xDfIlNC4dzC%2BA5eJ6qC%2B5mbxd%2BKUK7Gu%2BHi844E2ltdvAUSBJr4oQb0uVPkK1YaRH1vnHpgPC4mUoafOFRX8nk6EIaJH7bcMJOcw70GOqUBQHqzlTpYQU%2BVzo13ABbCJmzHQgzdKpJfrL1GJILqPItO20ANr6W2WrKhMywOuhV3vL6nvVyDQoZyLlQI3WgPIiivL%2FD7R3ph4uSU5qiQ3deenp0MKAwfBlc7vZ%2Fc2%2Fiz0w2FzNJlyDpTkJu6aywRV%2FLjsW25HPf1BT9fZkD6DQmzEzojLznkFs%2FL77xRYFuDIfif0cAC65yoYWVs5MQPj4dw2pO8&X-Amz-Signature=293f17acabe155dea584238a0f9bf4a2e40c5e64c5653223b232c3b2871988cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
