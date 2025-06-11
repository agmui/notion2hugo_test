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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQAYOY6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkeC4PvH1d9NNktosCiO4Pi4RV6I0DJeakTrep7CMaRAIhAMAL0bEh05AyW2hVJVHZ1oq%2BBSsMKLG5YWyy4leFsTL9KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ8roftn1EesSSjGkq3ANghOE4zYMWcqGHgLLSWePKcR6r3iFGmgwFdTMXrZJcHmCH%2BSuM2wBqupWSVfA09dUqTNd86XrANc2vgxLuZlxcOr7udRirNtN4AEIPDr7Q7mqHUdJm1ETMvfQdQvJXMhHATuVJ4QTpDWrSCOoR3%2Be9WHNy6ryDcjOAPhh3I4HZIAdseaS7jGTqJmssObbboKpRnjIQEW4%2FbAFlxU%2BXeDS4yywvvOrWNqvKijCvVZnQXpMdGkmP5rnC2%2F1BBIYOZ%2BDOeGbRqPICjqMJ4sjmWXRdsollrnrlizoN77ZTL4pqnfgxJoHRMXcrCBGSfQ9R89Q3VGytry2iDJBPF9XYw9mEisfKM2I5%2BFhhljyqLA2k4R1bHH2%2BoezG1MvHkm7H1moa2CxgGf1BCJxioQZHijB6SCWCTksw1dyVA%2FdRcgWTkc%2FaDXMx8%2BRKlmdwBIrGOvcls81uzBtePzkndBowlf25eLSZCe9g%2BB1AIKQlo%2BfUtVs6vziSRzIVOXjFsQhRMhtAew71AyhK5Mj6r2ozNG183yYFg3XiBYv6kyQJFBWnQ7IUipOHHQKnanTsCJNIJ0qk%2FuHIT6d6Euchq1UjI5e4O51tI2%2F%2FQlwwfYbaPLLpbRnwpHyyWMb1pCH5PDCQ5aLCBjqkAaAhcDSwjIm4DjV1dTHY4MYbV3H3qsG%2FsM4pqDG2jFRrVRNBMGcbmW6MP0DBYXxg%2Bih4eqLShjqu%2Bn0h%2FbUDC4%2FMsXOprxiH5Y%2BrW6D%2FUaDC0RUXfpi7ilzyjF%2B7j%2F1FOcqepi9CClmREtFtfpsuoXPcURXzArwnqSqB7glNlFGqRZvWbee7y%2FB5KMQesstzZT640tYqa7z6jxRKiWPcfSdbBQRf&X-Amz-Signature=9d175fa7ba9c3db29c28eb63e419ecbc37a0d226cea8e91ab2cb5b6f0471731a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQAYOY6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkeC4PvH1d9NNktosCiO4Pi4RV6I0DJeakTrep7CMaRAIhAMAL0bEh05AyW2hVJVHZ1oq%2BBSsMKLG5YWyy4leFsTL9KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ8roftn1EesSSjGkq3ANghOE4zYMWcqGHgLLSWePKcR6r3iFGmgwFdTMXrZJcHmCH%2BSuM2wBqupWSVfA09dUqTNd86XrANc2vgxLuZlxcOr7udRirNtN4AEIPDr7Q7mqHUdJm1ETMvfQdQvJXMhHATuVJ4QTpDWrSCOoR3%2Be9WHNy6ryDcjOAPhh3I4HZIAdseaS7jGTqJmssObbboKpRnjIQEW4%2FbAFlxU%2BXeDS4yywvvOrWNqvKijCvVZnQXpMdGkmP5rnC2%2F1BBIYOZ%2BDOeGbRqPICjqMJ4sjmWXRdsollrnrlizoN77ZTL4pqnfgxJoHRMXcrCBGSfQ9R89Q3VGytry2iDJBPF9XYw9mEisfKM2I5%2BFhhljyqLA2k4R1bHH2%2BoezG1MvHkm7H1moa2CxgGf1BCJxioQZHijB6SCWCTksw1dyVA%2FdRcgWTkc%2FaDXMx8%2BRKlmdwBIrGOvcls81uzBtePzkndBowlf25eLSZCe9g%2BB1AIKQlo%2BfUtVs6vziSRzIVOXjFsQhRMhtAew71AyhK5Mj6r2ozNG183yYFg3XiBYv6kyQJFBWnQ7IUipOHHQKnanTsCJNIJ0qk%2FuHIT6d6Euchq1UjI5e4O51tI2%2F%2FQlwwfYbaPLLpbRnwpHyyWMb1pCH5PDCQ5aLCBjqkAaAhcDSwjIm4DjV1dTHY4MYbV3H3qsG%2FsM4pqDG2jFRrVRNBMGcbmW6MP0DBYXxg%2Bih4eqLShjqu%2Bn0h%2FbUDC4%2FMsXOprxiH5Y%2BrW6D%2FUaDC0RUXfpi7ilzyjF%2B7j%2F1FOcqepi9CClmREtFtfpsuoXPcURXzArwnqSqB7glNlFGqRZvWbee7y%2FB5KMQesstzZT640tYqa7z6jxRKiWPcfSdbBQRf&X-Amz-Signature=d74b84e228f624d6fbf96b68b5f7f2fc9598d64e7f898e674722fdbeaf3e26f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQAYOY6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkeC4PvH1d9NNktosCiO4Pi4RV6I0DJeakTrep7CMaRAIhAMAL0bEh05AyW2hVJVHZ1oq%2BBSsMKLG5YWyy4leFsTL9KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ8roftn1EesSSjGkq3ANghOE4zYMWcqGHgLLSWePKcR6r3iFGmgwFdTMXrZJcHmCH%2BSuM2wBqupWSVfA09dUqTNd86XrANc2vgxLuZlxcOr7udRirNtN4AEIPDr7Q7mqHUdJm1ETMvfQdQvJXMhHATuVJ4QTpDWrSCOoR3%2Be9WHNy6ryDcjOAPhh3I4HZIAdseaS7jGTqJmssObbboKpRnjIQEW4%2FbAFlxU%2BXeDS4yywvvOrWNqvKijCvVZnQXpMdGkmP5rnC2%2F1BBIYOZ%2BDOeGbRqPICjqMJ4sjmWXRdsollrnrlizoN77ZTL4pqnfgxJoHRMXcrCBGSfQ9R89Q3VGytry2iDJBPF9XYw9mEisfKM2I5%2BFhhljyqLA2k4R1bHH2%2BoezG1MvHkm7H1moa2CxgGf1BCJxioQZHijB6SCWCTksw1dyVA%2FdRcgWTkc%2FaDXMx8%2BRKlmdwBIrGOvcls81uzBtePzkndBowlf25eLSZCe9g%2BB1AIKQlo%2BfUtVs6vziSRzIVOXjFsQhRMhtAew71AyhK5Mj6r2ozNG183yYFg3XiBYv6kyQJFBWnQ7IUipOHHQKnanTsCJNIJ0qk%2FuHIT6d6Euchq1UjI5e4O51tI2%2F%2FQlwwfYbaPLLpbRnwpHyyWMb1pCH5PDCQ5aLCBjqkAaAhcDSwjIm4DjV1dTHY4MYbV3H3qsG%2FsM4pqDG2jFRrVRNBMGcbmW6MP0DBYXxg%2Bih4eqLShjqu%2Bn0h%2FbUDC4%2FMsXOprxiH5Y%2BrW6D%2FUaDC0RUXfpi7ilzyjF%2B7j%2F1FOcqepi9CClmREtFtfpsuoXPcURXzArwnqSqB7glNlFGqRZvWbee7y%2FB5KMQesstzZT640tYqa7z6jxRKiWPcfSdbBQRf&X-Amz-Signature=1f27f6fba1951adace30f8f1fda2833abce843632690e619cf213b32467781c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
