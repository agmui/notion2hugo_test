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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJTCNHP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFj7yIpF0Iy6wGgIDITlFL7wI4M4VBk9tAc%2FKJu%2F3CBaAiAj5w1%2Bl%2BdTxYWsM4kKTzmIgBlXwC3KvkJtNWDrthOzpiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8XjGeMN0yncHAYZEKtwDXXblS8fjfZChZXNnn7p3n0KScVg9DRxzVcEsevLlou1v27X7DYW7h%2FTxiLBAged5MwC5Gd5%2FtIBQg%2BreW3NMD%2FxcJZ1Sr6nStb2THBf7Q1TOfB2x9OyEve6ZoON3ZwnA4yvrX0jqklZ8SbBO9MNwd%2FVlABXQ%2B19gk4T%2Bl86NyqLdnPB%2BpRaQ16Rw96AEDidtf0Dvp7Yjahm2KYxQflYxXYVUPn%2BCN6ZahoONanoyoWPzcvN6XOuEefHJ44SxI2Xn%2BdjFTs0PiwYayDw5HV8%2BUYTRa%2Bpmd%2FxaYVrJ4S1IgOAjBK45cxpdqCSSSe4dDLt8M%2BJhW4uJzLRaE9IiQI6XGyaUvSSpJOKtMe2ADQqQVfNr9froEJAgyVk%2FYK5ZB%2B6kVU6XKj5QnDm5mN0tX6H22awaZK%2BfUHSm9ks1IE3ieZzWh%2BXn4Ett0tRyRIbIArIbEtvat%2F6jp9p%2FAtEuSmHR0c6sWHnb%2FvVJEdTsewsE38qTgJfF8znWLnNnspuUhrAfOxPt3HQiBT3sZiEAEv128V8MBgs71z0GOpfBIejqn4s0cQXGl27rZlwjOqj%2BjDHfKvWju5yC5DdiEwuIhVCL2mRi0SEbsPcYdKk7%2Fz0rWz%2BdOC059lxcAZklel4w38mrvQY6pgGTIr8FkFaEBk1ca9TBV9t02xUV9TOc23JUtblCtuL%2FV41ouGEVSfWvj1xG%2Fpu5RcmJr8F4zA2F0f30z%2BpeFH6mlE6bAoBV1hIjbOZQ6K9TA14baaocr3sftK6hWH%2BjFHqVOdPLAib%2FJNSE5vQ92Zp7Rh9Subz0zQfveAjbCfPIUZo6Zuw%2BdaiJ1mbFmEtzM7BUTarH4yeL4Uw%2BLiodabkUQyR0CT3x&X-Amz-Signature=a63fc7461a517a994fbb469c3cf3b17b0576000a4c10754590d10dac1ced723b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJTCNHP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFj7yIpF0Iy6wGgIDITlFL7wI4M4VBk9tAc%2FKJu%2F3CBaAiAj5w1%2Bl%2BdTxYWsM4kKTzmIgBlXwC3KvkJtNWDrthOzpiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8XjGeMN0yncHAYZEKtwDXXblS8fjfZChZXNnn7p3n0KScVg9DRxzVcEsevLlou1v27X7DYW7h%2FTxiLBAged5MwC5Gd5%2FtIBQg%2BreW3NMD%2FxcJZ1Sr6nStb2THBf7Q1TOfB2x9OyEve6ZoON3ZwnA4yvrX0jqklZ8SbBO9MNwd%2FVlABXQ%2B19gk4T%2Bl86NyqLdnPB%2BpRaQ16Rw96AEDidtf0Dvp7Yjahm2KYxQflYxXYVUPn%2BCN6ZahoONanoyoWPzcvN6XOuEefHJ44SxI2Xn%2BdjFTs0PiwYayDw5HV8%2BUYTRa%2Bpmd%2FxaYVrJ4S1IgOAjBK45cxpdqCSSSe4dDLt8M%2BJhW4uJzLRaE9IiQI6XGyaUvSSpJOKtMe2ADQqQVfNr9froEJAgyVk%2FYK5ZB%2B6kVU6XKj5QnDm5mN0tX6H22awaZK%2BfUHSm9ks1IE3ieZzWh%2BXn4Ett0tRyRIbIArIbEtvat%2F6jp9p%2FAtEuSmHR0c6sWHnb%2FvVJEdTsewsE38qTgJfF8znWLnNnspuUhrAfOxPt3HQiBT3sZiEAEv128V8MBgs71z0GOpfBIejqn4s0cQXGl27rZlwjOqj%2BjDHfKvWju5yC5DdiEwuIhVCL2mRi0SEbsPcYdKk7%2Fz0rWz%2BdOC059lxcAZklel4w38mrvQY6pgGTIr8FkFaEBk1ca9TBV9t02xUV9TOc23JUtblCtuL%2FV41ouGEVSfWvj1xG%2Fpu5RcmJr8F4zA2F0f30z%2BpeFH6mlE6bAoBV1hIjbOZQ6K9TA14baaocr3sftK6hWH%2BjFHqVOdPLAib%2FJNSE5vQ92Zp7Rh9Subz0zQfveAjbCfPIUZo6Zuw%2BdaiJ1mbFmEtzM7BUTarH4yeL4Uw%2BLiodabkUQyR0CT3x&X-Amz-Signature=c473bc25844fcd490b4744cbff30e6f71f34b6d801b80f4d52d6d7432ceb0892&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJTCNHP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFj7yIpF0Iy6wGgIDITlFL7wI4M4VBk9tAc%2FKJu%2F3CBaAiAj5w1%2Bl%2BdTxYWsM4kKTzmIgBlXwC3KvkJtNWDrthOzpiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8XjGeMN0yncHAYZEKtwDXXblS8fjfZChZXNnn7p3n0KScVg9DRxzVcEsevLlou1v27X7DYW7h%2FTxiLBAged5MwC5Gd5%2FtIBQg%2BreW3NMD%2FxcJZ1Sr6nStb2THBf7Q1TOfB2x9OyEve6ZoON3ZwnA4yvrX0jqklZ8SbBO9MNwd%2FVlABXQ%2B19gk4T%2Bl86NyqLdnPB%2BpRaQ16Rw96AEDidtf0Dvp7Yjahm2KYxQflYxXYVUPn%2BCN6ZahoONanoyoWPzcvN6XOuEefHJ44SxI2Xn%2BdjFTs0PiwYayDw5HV8%2BUYTRa%2Bpmd%2FxaYVrJ4S1IgOAjBK45cxpdqCSSSe4dDLt8M%2BJhW4uJzLRaE9IiQI6XGyaUvSSpJOKtMe2ADQqQVfNr9froEJAgyVk%2FYK5ZB%2B6kVU6XKj5QnDm5mN0tX6H22awaZK%2BfUHSm9ks1IE3ieZzWh%2BXn4Ett0tRyRIbIArIbEtvat%2F6jp9p%2FAtEuSmHR0c6sWHnb%2FvVJEdTsewsE38qTgJfF8znWLnNnspuUhrAfOxPt3HQiBT3sZiEAEv128V8MBgs71z0GOpfBIejqn4s0cQXGl27rZlwjOqj%2BjDHfKvWju5yC5DdiEwuIhVCL2mRi0SEbsPcYdKk7%2Fz0rWz%2BdOC059lxcAZklel4w38mrvQY6pgGTIr8FkFaEBk1ca9TBV9t02xUV9TOc23JUtblCtuL%2FV41ouGEVSfWvj1xG%2Fpu5RcmJr8F4zA2F0f30z%2BpeFH6mlE6bAoBV1hIjbOZQ6K9TA14baaocr3sftK6hWH%2BjFHqVOdPLAib%2FJNSE5vQ92Zp7Rh9Subz0zQfveAjbCfPIUZo6Zuw%2BdaiJ1mbFmEtzM7BUTarH4yeL4Uw%2BLiodabkUQyR0CT3x&X-Amz-Signature=3437172edaac7b2419adad53bab7c7200b6cc62b166c528dc97952d3d27aaef5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
