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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WY2E65M%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuMcx3KfdbF4desaIUHvac3IRziN5pgup10pq4NajdaAiAc39dwAL45p8iBf29%2B1uuuijgshrjOvF15TZ9HZ51S3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMrIAmM6MOuDYyQ0urKtwDSBXoRIgvQRR%2F5lLK7tcnP2KmSRYEOLm6543PRVI6JZXlj9kVpfmg5006ZLn8QMHKsLchZ0SF%2B6stsntzh6pQ1DS9SCTAa89xLa3cL7iUbutzCxNosoY6y3haBa5Ptpi57H2iezCdGJ5pB8iaRMQWxZAbKkcb2MVsmd1CLthiV6YdyBkT6EXJqHVDhCfuuGYDRuzQhiEdGliwJsHvytwNQwAv8c2Z%2FStsjETaITEMUFtkNs2rAPQyyfbAnPFbe4YQP3LXNEhpCazMsxzuzgCsR4CzvrzVEa94JdRm1f4OmjCaMH5Km5H00jVykuaBVl17Wsfl%2Bf2LCNewwG7H6sC9va87mL12vMduOtx7AFC7Qkbz%2FgEgiibmO5ezB%2BNR2dUbZPuB33FcJ0tH7CySEZLEAlgImNeugM%2BP2aafyP1kQVwJIieJNDdvG6YQ6vBYVyLcFMd9xx1eVTDIe4CWmgC6M%2BGw0MGCySXqtjzijTVI24JHYNW9%2B9achKFUmNRKMS709PcONHBBd2cBwQyt4CQ0R9cy5xzlAJaLnyakWh70XFGKc6lPBqqlxYhqaZpibo9bL5eRHoi%2FqiE2cRUyLGRsoYIijAHFgHetyXTxZQ9wfczRtkkPKLp1FJDXW%2BIwsP2rvgY6pgGPLkT%2F56UD2zWnXtpz4Tz556FjdiUvzbz%2FkupcwDuxmFUYfmN0tdSEyhx2y%2BWqCCl4msHKIf1qSMmlrlIUq0AGO0iE%2FRA2U0k3eiu64JWi8WN7tENTZ2uCunZtMSMDoLwrzh6%2Bapjgq%2BgNR3bnk%2BOGHys0rqeuEqEF3xiYeDaUy0hUTnMtllgRRfqbtVsnc%2FBv9%2FgOruv%2BLATqP1u22bksviqdrMOp&X-Amz-Signature=f413a06dc965472bb3eb0856135673aebb9ac82ca41182e57dab7d6761781e02&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WY2E65M%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuMcx3KfdbF4desaIUHvac3IRziN5pgup10pq4NajdaAiAc39dwAL45p8iBf29%2B1uuuijgshrjOvF15TZ9HZ51S3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMrIAmM6MOuDYyQ0urKtwDSBXoRIgvQRR%2F5lLK7tcnP2KmSRYEOLm6543PRVI6JZXlj9kVpfmg5006ZLn8QMHKsLchZ0SF%2B6stsntzh6pQ1DS9SCTAa89xLa3cL7iUbutzCxNosoY6y3haBa5Ptpi57H2iezCdGJ5pB8iaRMQWxZAbKkcb2MVsmd1CLthiV6YdyBkT6EXJqHVDhCfuuGYDRuzQhiEdGliwJsHvytwNQwAv8c2Z%2FStsjETaITEMUFtkNs2rAPQyyfbAnPFbe4YQP3LXNEhpCazMsxzuzgCsR4CzvrzVEa94JdRm1f4OmjCaMH5Km5H00jVykuaBVl17Wsfl%2Bf2LCNewwG7H6sC9va87mL12vMduOtx7AFC7Qkbz%2FgEgiibmO5ezB%2BNR2dUbZPuB33FcJ0tH7CySEZLEAlgImNeugM%2BP2aafyP1kQVwJIieJNDdvG6YQ6vBYVyLcFMd9xx1eVTDIe4CWmgC6M%2BGw0MGCySXqtjzijTVI24JHYNW9%2B9achKFUmNRKMS709PcONHBBd2cBwQyt4CQ0R9cy5xzlAJaLnyakWh70XFGKc6lPBqqlxYhqaZpibo9bL5eRHoi%2FqiE2cRUyLGRsoYIijAHFgHetyXTxZQ9wfczRtkkPKLp1FJDXW%2BIwsP2rvgY6pgGPLkT%2F56UD2zWnXtpz4Tz556FjdiUvzbz%2FkupcwDuxmFUYfmN0tdSEyhx2y%2BWqCCl4msHKIf1qSMmlrlIUq0AGO0iE%2FRA2U0k3eiu64JWi8WN7tENTZ2uCunZtMSMDoLwrzh6%2Bapjgq%2BgNR3bnk%2BOGHys0rqeuEqEF3xiYeDaUy0hUTnMtllgRRfqbtVsnc%2FBv9%2FgOruv%2BLATqP1u22bksviqdrMOp&X-Amz-Signature=c1736781a2ebc6a4b1a26504525b0c947b8318dc9cff9ac201675c49d7ff8797&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WY2E65M%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuMcx3KfdbF4desaIUHvac3IRziN5pgup10pq4NajdaAiAc39dwAL45p8iBf29%2B1uuuijgshrjOvF15TZ9HZ51S3yr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMrIAmM6MOuDYyQ0urKtwDSBXoRIgvQRR%2F5lLK7tcnP2KmSRYEOLm6543PRVI6JZXlj9kVpfmg5006ZLn8QMHKsLchZ0SF%2B6stsntzh6pQ1DS9SCTAa89xLa3cL7iUbutzCxNosoY6y3haBa5Ptpi57H2iezCdGJ5pB8iaRMQWxZAbKkcb2MVsmd1CLthiV6YdyBkT6EXJqHVDhCfuuGYDRuzQhiEdGliwJsHvytwNQwAv8c2Z%2FStsjETaITEMUFtkNs2rAPQyyfbAnPFbe4YQP3LXNEhpCazMsxzuzgCsR4CzvrzVEa94JdRm1f4OmjCaMH5Km5H00jVykuaBVl17Wsfl%2Bf2LCNewwG7H6sC9va87mL12vMduOtx7AFC7Qkbz%2FgEgiibmO5ezB%2BNR2dUbZPuB33FcJ0tH7CySEZLEAlgImNeugM%2BP2aafyP1kQVwJIieJNDdvG6YQ6vBYVyLcFMd9xx1eVTDIe4CWmgC6M%2BGw0MGCySXqtjzijTVI24JHYNW9%2B9achKFUmNRKMS709PcONHBBd2cBwQyt4CQ0R9cy5xzlAJaLnyakWh70XFGKc6lPBqqlxYhqaZpibo9bL5eRHoi%2FqiE2cRUyLGRsoYIijAHFgHetyXTxZQ9wfczRtkkPKLp1FJDXW%2BIwsP2rvgY6pgGPLkT%2F56UD2zWnXtpz4Tz556FjdiUvzbz%2FkupcwDuxmFUYfmN0tdSEyhx2y%2BWqCCl4msHKIf1qSMmlrlIUq0AGO0iE%2FRA2U0k3eiu64JWi8WN7tENTZ2uCunZtMSMDoLwrzh6%2Bapjgq%2BgNR3bnk%2BOGHys0rqeuEqEF3xiYeDaUy0hUTnMtllgRRfqbtVsnc%2FBv9%2FgOruv%2BLATqP1u22bksviqdrMOp&X-Amz-Signature=6911d8bf7968c1671b1457cac91710629b80eee4c691ac66146308a70823d4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
