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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TLGBCF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0v26yBRxujFcNuqSvKUw4OFoK7HT0D80kVTTThUqdZAiA07hnmpmqi1OGIaA%2BApJIpkjTkUaeEtaPkaij%2FaeE%2Fkir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYCNDZxbHYv9YMba7KtwDEe2GtHU8Cnlj7052T32orLAYP12UmShR%2F8F1QvR2AIns2DyqXxptZvdPkSKWE8dKCk5l90Wr1ojt5H1YBnjTq4ZfN1aUn4j3ZQ1zNrRTW%2BJy3ApxZRBNdVJ0yXiE2ihZhv7th%2F8fIWiOVgysqDfAgvzMQlUVRhsceyvngzHWFl3oU8TyG6N0ou4z63jUaSbxm4lG9v93THeFAeXF9yltAAdNV5V%2BxP7zYpQbd%2FkfsIr8X86iXDda61MPW%2BkOaA18OAQeiQmcbzl8zI5T%2FWENirOOtrekLCNz5v77wO45HbxrqOMoD1HVTMB8AnAKo%2Bcu9F5pZKcJQBgbZw5YcYNm7MqLr3hszesagxxtAsWZiJRI9rAi064atJN%2FNtIXOlROi%2FdN71Sgm7%2BO%2FR%2BQK597P2OM8N8CKgeC24zr7XNMHMCqfqzhRX2qDoPnvOPiVDPZP6MbLLJ%2BtXCSxR6iiBM01wJYfVR9Mlu5pKBPhMXwCZR8I7JCh5R0Q8zjampmVWr3nN4P1x0DniZIN8JZJ5TLqX99CcSqdiLP5eIaUrwUX5iPa2vADQYyZRxk59aY%2ByVyj5QLgZegDDMUafFWSgGCMNSKRDM%2BcX0MSs7WntbNQd1uK7uVJMKxVht0VaIwwcOQwgY6pgGW%2BtnD49r8%2Fdpgc9wZiTgbAdZamXPlyarTUjW1hx3UvAuYp8C6avm1wqnT4VkqTri5xivWbkPXe7yQQD8JMLCl55O7c3ToZ0PxJFNGfaIf3byNSrHd3xgxy6PYwKavXgE1ndhjPSbhweI6mYsWfv9aBSDYx9bRrOrMxHfaTDQeVmhBo1%2F%2B6dhHBPCD1bz2sChuYGioULXZUaoHo9RJZAb%2Bw6%2FOACYR&X-Amz-Signature=a3ca47fb5079bd7c495eab5d091456dc3c7b2ed5b5886d8e2b4f48bbd7638343&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TLGBCF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0v26yBRxujFcNuqSvKUw4OFoK7HT0D80kVTTThUqdZAiA07hnmpmqi1OGIaA%2BApJIpkjTkUaeEtaPkaij%2FaeE%2Fkir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYCNDZxbHYv9YMba7KtwDEe2GtHU8Cnlj7052T32orLAYP12UmShR%2F8F1QvR2AIns2DyqXxptZvdPkSKWE8dKCk5l90Wr1ojt5H1YBnjTq4ZfN1aUn4j3ZQ1zNrRTW%2BJy3ApxZRBNdVJ0yXiE2ihZhv7th%2F8fIWiOVgysqDfAgvzMQlUVRhsceyvngzHWFl3oU8TyG6N0ou4z63jUaSbxm4lG9v93THeFAeXF9yltAAdNV5V%2BxP7zYpQbd%2FkfsIr8X86iXDda61MPW%2BkOaA18OAQeiQmcbzl8zI5T%2FWENirOOtrekLCNz5v77wO45HbxrqOMoD1HVTMB8AnAKo%2Bcu9F5pZKcJQBgbZw5YcYNm7MqLr3hszesagxxtAsWZiJRI9rAi064atJN%2FNtIXOlROi%2FdN71Sgm7%2BO%2FR%2BQK597P2OM8N8CKgeC24zr7XNMHMCqfqzhRX2qDoPnvOPiVDPZP6MbLLJ%2BtXCSxR6iiBM01wJYfVR9Mlu5pKBPhMXwCZR8I7JCh5R0Q8zjampmVWr3nN4P1x0DniZIN8JZJ5TLqX99CcSqdiLP5eIaUrwUX5iPa2vADQYyZRxk59aY%2ByVyj5QLgZegDDMUafFWSgGCMNSKRDM%2BcX0MSs7WntbNQd1uK7uVJMKxVht0VaIwwcOQwgY6pgGW%2BtnD49r8%2Fdpgc9wZiTgbAdZamXPlyarTUjW1hx3UvAuYp8C6avm1wqnT4VkqTri5xivWbkPXe7yQQD8JMLCl55O7c3ToZ0PxJFNGfaIf3byNSrHd3xgxy6PYwKavXgE1ndhjPSbhweI6mYsWfv9aBSDYx9bRrOrMxHfaTDQeVmhBo1%2F%2B6dhHBPCD1bz2sChuYGioULXZUaoHo9RJZAb%2Bw6%2FOACYR&X-Amz-Signature=54fff7b81c8628a60e67356e32e2b25c83b0ac19b887f072377d3fa637cfa0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TLGBCF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0v26yBRxujFcNuqSvKUw4OFoK7HT0D80kVTTThUqdZAiA07hnmpmqi1OGIaA%2BApJIpkjTkUaeEtaPkaij%2FaeE%2Fkir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYCNDZxbHYv9YMba7KtwDEe2GtHU8Cnlj7052T32orLAYP12UmShR%2F8F1QvR2AIns2DyqXxptZvdPkSKWE8dKCk5l90Wr1ojt5H1YBnjTq4ZfN1aUn4j3ZQ1zNrRTW%2BJy3ApxZRBNdVJ0yXiE2ihZhv7th%2F8fIWiOVgysqDfAgvzMQlUVRhsceyvngzHWFl3oU8TyG6N0ou4z63jUaSbxm4lG9v93THeFAeXF9yltAAdNV5V%2BxP7zYpQbd%2FkfsIr8X86iXDda61MPW%2BkOaA18OAQeiQmcbzl8zI5T%2FWENirOOtrekLCNz5v77wO45HbxrqOMoD1HVTMB8AnAKo%2Bcu9F5pZKcJQBgbZw5YcYNm7MqLr3hszesagxxtAsWZiJRI9rAi064atJN%2FNtIXOlROi%2FdN71Sgm7%2BO%2FR%2BQK597P2OM8N8CKgeC24zr7XNMHMCqfqzhRX2qDoPnvOPiVDPZP6MbLLJ%2BtXCSxR6iiBM01wJYfVR9Mlu5pKBPhMXwCZR8I7JCh5R0Q8zjampmVWr3nN4P1x0DniZIN8JZJ5TLqX99CcSqdiLP5eIaUrwUX5iPa2vADQYyZRxk59aY%2ByVyj5QLgZegDDMUafFWSgGCMNSKRDM%2BcX0MSs7WntbNQd1uK7uVJMKxVht0VaIwwcOQwgY6pgGW%2BtnD49r8%2Fdpgc9wZiTgbAdZamXPlyarTUjW1hx3UvAuYp8C6avm1wqnT4VkqTri5xivWbkPXe7yQQD8JMLCl55O7c3ToZ0PxJFNGfaIf3byNSrHd3xgxy6PYwKavXgE1ndhjPSbhweI6mYsWfv9aBSDYx9bRrOrMxHfaTDQeVmhBo1%2F%2B6dhHBPCD1bz2sChuYGioULXZUaoHo9RJZAb%2Bw6%2FOACYR&X-Amz-Signature=33696fc318eae260f951f2984e7c625ef8b49dbb5024992e8a294bf99c569391&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
