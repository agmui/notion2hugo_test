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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAGEXD2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc0WTywzPOuOTY2ylxxe6oRtW8%2FZ0l09wmLP%2BAuvph3QIhAKbycrsDRJCUaOVLsKQg1JjBi6AmQ7MxS7xH3LnOoPIpKv8DCBIQABoMNjM3NDIzMTgzODA1IgyYTLyHCFi5Fxedwloq3AOLrlTndZZagVaGK6cMq7BlzI2qUcHU02Ml3dcrWfub49yUF4SVsNRub6ii5vLkJubmwdkoNBOUNhetFSP%2Flbf1oJoS50pfHizi3OV6%2BcL0SmlEQogv%2FLToPVngRSGWB5%2BPTGiEnIsvEe8hc9ffPPOS3WW5RHe9d04Y09BQ%2Fz%2Fc8mZU9paAEYmnopoyuiEziTcTk7kCVHJBv%2F72MxMSn3cl6QbpsHDH2UDCDCbLu1QVzI50aUfhDB0QGqxBWahSyeH3eqsoTgxahA7mnQMhMVY9Y80sTbbODho0VmvbzlRjncamtUsNKEMu3v7bXm3tg1%2BCgbuH6mG%2F5y1FaE2hsc8dAa5wd7vtyWSv9xX7lPRJfiUnVyOpt%2Fp%2FltzaHva%2FmaKjLlBxMXb%2Fxpo4AzNQVZrqW3qGJqY0po36hAKxxdbyN%2FfqQEmvMcLYdZ8cY%2B19e9EdQwJ6qZDH8yDUwWd9vlp%2F9kMj%2FhIkR%2F06mbXvsgyGrnYARTI49e1iXA0Uxi5YM5nLPnfdNaOvfnICaRya1CBd9%2FdQP2b337pJSV37r0Mi7LMNG8eOJda9UIj7TNE5ErQ%2FN8LYLJSV1g0dpEX48EOOFqh3ay0Mq%2FVnQw7PdKsmpLq8TqnqxQAkPyUTcjCT7Ym%2FBjqkAXH80Cs4JY%2BixlkHnDiqITL9AnPOOqaleqeOzUZ6G2avge0DQFOYEnDhg4LtMHGcEMKNE5NWiXWFVOHLlhvWkRztNbNJ5H06aUAiT2pOVfDMf8zpjN5vIK%2ByAtLV1WXM7Tucem76OWGNMJVVVUvpzJ4TSkGaZ%2FCLb5iZ1PR2QcmPUDMsVga9j%2BqXpYC7vo8I%2BvAr09V%2BOkHGbbull6uCc46P4JMh&X-Amz-Signature=da899a041740ba7651e59158acf9c291332f577642d4d3c62d76381524a63cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAGEXD2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc0WTywzPOuOTY2ylxxe6oRtW8%2FZ0l09wmLP%2BAuvph3QIhAKbycrsDRJCUaOVLsKQg1JjBi6AmQ7MxS7xH3LnOoPIpKv8DCBIQABoMNjM3NDIzMTgzODA1IgyYTLyHCFi5Fxedwloq3AOLrlTndZZagVaGK6cMq7BlzI2qUcHU02Ml3dcrWfub49yUF4SVsNRub6ii5vLkJubmwdkoNBOUNhetFSP%2Flbf1oJoS50pfHizi3OV6%2BcL0SmlEQogv%2FLToPVngRSGWB5%2BPTGiEnIsvEe8hc9ffPPOS3WW5RHe9d04Y09BQ%2Fz%2Fc8mZU9paAEYmnopoyuiEziTcTk7kCVHJBv%2F72MxMSn3cl6QbpsHDH2UDCDCbLu1QVzI50aUfhDB0QGqxBWahSyeH3eqsoTgxahA7mnQMhMVY9Y80sTbbODho0VmvbzlRjncamtUsNKEMu3v7bXm3tg1%2BCgbuH6mG%2F5y1FaE2hsc8dAa5wd7vtyWSv9xX7lPRJfiUnVyOpt%2Fp%2FltzaHva%2FmaKjLlBxMXb%2Fxpo4AzNQVZrqW3qGJqY0po36hAKxxdbyN%2FfqQEmvMcLYdZ8cY%2B19e9EdQwJ6qZDH8yDUwWd9vlp%2F9kMj%2FhIkR%2F06mbXvsgyGrnYARTI49e1iXA0Uxi5YM5nLPnfdNaOvfnICaRya1CBd9%2FdQP2b337pJSV37r0Mi7LMNG8eOJda9UIj7TNE5ErQ%2FN8LYLJSV1g0dpEX48EOOFqh3ay0Mq%2FVnQw7PdKsmpLq8TqnqxQAkPyUTcjCT7Ym%2FBjqkAXH80Cs4JY%2BixlkHnDiqITL9AnPOOqaleqeOzUZ6G2avge0DQFOYEnDhg4LtMHGcEMKNE5NWiXWFVOHLlhvWkRztNbNJ5H06aUAiT2pOVfDMf8zpjN5vIK%2ByAtLV1WXM7Tucem76OWGNMJVVVUvpzJ4TSkGaZ%2FCLb5iZ1PR2QcmPUDMsVga9j%2BqXpYC7vo8I%2BvAr09V%2BOkHGbbull6uCc46P4JMh&X-Amz-Signature=9018861bcff9a2503e8081f50bb761534ab9e73d3d83a1bd0f3e88a9d79ff737&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAGEXD2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc0WTywzPOuOTY2ylxxe6oRtW8%2FZ0l09wmLP%2BAuvph3QIhAKbycrsDRJCUaOVLsKQg1JjBi6AmQ7MxS7xH3LnOoPIpKv8DCBIQABoMNjM3NDIzMTgzODA1IgyYTLyHCFi5Fxedwloq3AOLrlTndZZagVaGK6cMq7BlzI2qUcHU02Ml3dcrWfub49yUF4SVsNRub6ii5vLkJubmwdkoNBOUNhetFSP%2Flbf1oJoS50pfHizi3OV6%2BcL0SmlEQogv%2FLToPVngRSGWB5%2BPTGiEnIsvEe8hc9ffPPOS3WW5RHe9d04Y09BQ%2Fz%2Fc8mZU9paAEYmnopoyuiEziTcTk7kCVHJBv%2F72MxMSn3cl6QbpsHDH2UDCDCbLu1QVzI50aUfhDB0QGqxBWahSyeH3eqsoTgxahA7mnQMhMVY9Y80sTbbODho0VmvbzlRjncamtUsNKEMu3v7bXm3tg1%2BCgbuH6mG%2F5y1FaE2hsc8dAa5wd7vtyWSv9xX7lPRJfiUnVyOpt%2Fp%2FltzaHva%2FmaKjLlBxMXb%2Fxpo4AzNQVZrqW3qGJqY0po36hAKxxdbyN%2FfqQEmvMcLYdZ8cY%2B19e9EdQwJ6qZDH8yDUwWd9vlp%2F9kMj%2FhIkR%2F06mbXvsgyGrnYARTI49e1iXA0Uxi5YM5nLPnfdNaOvfnICaRya1CBd9%2FdQP2b337pJSV37r0Mi7LMNG8eOJda9UIj7TNE5ErQ%2FN8LYLJSV1g0dpEX48EOOFqh3ay0Mq%2FVnQw7PdKsmpLq8TqnqxQAkPyUTcjCT7Ym%2FBjqkAXH80Cs4JY%2BixlkHnDiqITL9AnPOOqaleqeOzUZ6G2avge0DQFOYEnDhg4LtMHGcEMKNE5NWiXWFVOHLlhvWkRztNbNJ5H06aUAiT2pOVfDMf8zpjN5vIK%2ByAtLV1WXM7Tucem76OWGNMJVVVUvpzJ4TSkGaZ%2FCLb5iZ1PR2QcmPUDMsVga9j%2BqXpYC7vo8I%2BvAr09V%2BOkHGbbull6uCc46P4JMh&X-Amz-Signature=342f396bb549690e0222f52f97a8c3b8ddbe8f7983d0b6b6ac23b981320977aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
