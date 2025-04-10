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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DMECHZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEoK41L8Uxk2vM0w%2FrO0PECIA6ZxQHWlcUWiK55PHz16AiEAsZ2mJxyct6s3SCnakmpPJWNs00GS8XV1JS%2Bt27uyqkkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHHtaKbUWkcvaYZayrcAwc5BUbtCs8a9dkBexBI4kVUcsgqNHwmpKIoh3ytGE8sreyMxstKWEDuq0eqCW54Sjpb1vLxI%2FZtKOpctVaPHhTGV%2FQ4ywOAKEZU5DzVLn77bTk3n9YZb2i%2B7kuNY2vwVpdnSJoFxNDG0Rjz8%2FqgIlkTAPvKrrFAlEMSGqC69v3z0%2FW1Ip2B1ZMB6v8%2B30kxH45XBQ1OsVI0U3N0q8bUXchpZcglt7C02McgXGitjmfdMWqxsPX2MxuzsPn1dAwVc0MQOhuZb%2Fo%2BOibHeEevq0EWnn627UucHIY8cHnHcBtRbhGbfy3%2Bn%2Bd9a8PfG%2FmXcMS4sHHo5iO5%2BeCnLjEvP5iort0OFgEBFxQJeRUxGMNfmclPkHZhYD89OMsr%2BM8VHpMEOoqV29MFIUx3AjxIe9PUDzA3FbFR0Psq8%2FX%2BhEkuVNn1AbZq%2BG4eNvmqlKAzBDVq0FQ%2B7YEAl0V7FC3fltE2Fbl%2FAFGgVtEJNasgwsCYi7HjdMpkt%2BqXHFTtoroGznnic4kDuZyC1U9vlCfiT20A65ukrgGoLJ8DU9dfjp9KdaejNBFRDlHn1Ov5FZ8ZnmdD4kDYH4z62s89out4Fi%2FCnpHDk9ecIIFcR0qYerq12MRU4%2FSutjmywXENMNLd3L8GOqUB6nXoCDXgqIFD8BymP1aDFCIxNJRk3adMKLHh9CWe6gQF0%2FVffr5BpuC1pP6KHu8EfYGChKA2QzyLWA6EOGzhU4Pg6R2Ih%2BVE2jxKaJtknI4596Zb9h8aRNUdyIwnsFjYrRDnteST3%2BMA%2BcMCfXwCZGwMhl0qrRUhfsDiO9SjX%2BL9nQ%2BAiRDqUtHvKZPJeg1uVsFpE7RH7b3MYSg9uLqWcgOhU8B%2F&X-Amz-Signature=f601f3e6da58a03269cdfdf92213ea4d72bbb3cb02bf3c07deb8e2ca1b56b1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DMECHZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEoK41L8Uxk2vM0w%2FrO0PECIA6ZxQHWlcUWiK55PHz16AiEAsZ2mJxyct6s3SCnakmpPJWNs00GS8XV1JS%2Bt27uyqkkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHHtaKbUWkcvaYZayrcAwc5BUbtCs8a9dkBexBI4kVUcsgqNHwmpKIoh3ytGE8sreyMxstKWEDuq0eqCW54Sjpb1vLxI%2FZtKOpctVaPHhTGV%2FQ4ywOAKEZU5DzVLn77bTk3n9YZb2i%2B7kuNY2vwVpdnSJoFxNDG0Rjz8%2FqgIlkTAPvKrrFAlEMSGqC69v3z0%2FW1Ip2B1ZMB6v8%2B30kxH45XBQ1OsVI0U3N0q8bUXchpZcglt7C02McgXGitjmfdMWqxsPX2MxuzsPn1dAwVc0MQOhuZb%2Fo%2BOibHeEevq0EWnn627UucHIY8cHnHcBtRbhGbfy3%2Bn%2Bd9a8PfG%2FmXcMS4sHHo5iO5%2BeCnLjEvP5iort0OFgEBFxQJeRUxGMNfmclPkHZhYD89OMsr%2BM8VHpMEOoqV29MFIUx3AjxIe9PUDzA3FbFR0Psq8%2FX%2BhEkuVNn1AbZq%2BG4eNvmqlKAzBDVq0FQ%2B7YEAl0V7FC3fltE2Fbl%2FAFGgVtEJNasgwsCYi7HjdMpkt%2BqXHFTtoroGznnic4kDuZyC1U9vlCfiT20A65ukrgGoLJ8DU9dfjp9KdaejNBFRDlHn1Ov5FZ8ZnmdD4kDYH4z62s89out4Fi%2FCnpHDk9ecIIFcR0qYerq12MRU4%2FSutjmywXENMNLd3L8GOqUB6nXoCDXgqIFD8BymP1aDFCIxNJRk3adMKLHh9CWe6gQF0%2FVffr5BpuC1pP6KHu8EfYGChKA2QzyLWA6EOGzhU4Pg6R2Ih%2BVE2jxKaJtknI4596Zb9h8aRNUdyIwnsFjYrRDnteST3%2BMA%2BcMCfXwCZGwMhl0qrRUhfsDiO9SjX%2BL9nQ%2BAiRDqUtHvKZPJeg1uVsFpE7RH7b3MYSg9uLqWcgOhU8B%2F&X-Amz-Signature=4555fcd0437d98780b374f7fb1fe08241ad88616721b2ea75d83a7cbbb4b188a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DMECHZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEoK41L8Uxk2vM0w%2FrO0PECIA6ZxQHWlcUWiK55PHz16AiEAsZ2mJxyct6s3SCnakmpPJWNs00GS8XV1JS%2Bt27uyqkkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHHtaKbUWkcvaYZayrcAwc5BUbtCs8a9dkBexBI4kVUcsgqNHwmpKIoh3ytGE8sreyMxstKWEDuq0eqCW54Sjpb1vLxI%2FZtKOpctVaPHhTGV%2FQ4ywOAKEZU5DzVLn77bTk3n9YZb2i%2B7kuNY2vwVpdnSJoFxNDG0Rjz8%2FqgIlkTAPvKrrFAlEMSGqC69v3z0%2FW1Ip2B1ZMB6v8%2B30kxH45XBQ1OsVI0U3N0q8bUXchpZcglt7C02McgXGitjmfdMWqxsPX2MxuzsPn1dAwVc0MQOhuZb%2Fo%2BOibHeEevq0EWnn627UucHIY8cHnHcBtRbhGbfy3%2Bn%2Bd9a8PfG%2FmXcMS4sHHo5iO5%2BeCnLjEvP5iort0OFgEBFxQJeRUxGMNfmclPkHZhYD89OMsr%2BM8VHpMEOoqV29MFIUx3AjxIe9PUDzA3FbFR0Psq8%2FX%2BhEkuVNn1AbZq%2BG4eNvmqlKAzBDVq0FQ%2B7YEAl0V7FC3fltE2Fbl%2FAFGgVtEJNasgwsCYi7HjdMpkt%2BqXHFTtoroGznnic4kDuZyC1U9vlCfiT20A65ukrgGoLJ8DU9dfjp9KdaejNBFRDlHn1Ov5FZ8ZnmdD4kDYH4z62s89out4Fi%2FCnpHDk9ecIIFcR0qYerq12MRU4%2FSutjmywXENMNLd3L8GOqUB6nXoCDXgqIFD8BymP1aDFCIxNJRk3adMKLHh9CWe6gQF0%2FVffr5BpuC1pP6KHu8EfYGChKA2QzyLWA6EOGzhU4Pg6R2Ih%2BVE2jxKaJtknI4596Zb9h8aRNUdyIwnsFjYrRDnteST3%2BMA%2BcMCfXwCZGwMhl0qrRUhfsDiO9SjX%2BL9nQ%2BAiRDqUtHvKZPJeg1uVsFpE7RH7b3MYSg9uLqWcgOhU8B%2F&X-Amz-Signature=ab733b78e0c3d025989c99abc2d0b14217a873a453774284fde73e6537031896&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
