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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6J7ZSD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoa1I%2BldASLejFaih6xpBHFkWMICxhh1N%2Bb5niWv6SIAiBQjBTRs33PHqe8iSYk3Otp9OUPJ6cM2Yo8g53vI1x%2B8Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM4Kn0Ob%2Bnc1594rTXKtwDw36oGkyH22pPMAqRKah54INuukrSOgU2OY07gKA81rvb9qQ03A6%2FBcX4zPh9v%2BAhkrd5h1xCKEmGENhn5lzHsXJyzBWdSPof%2BNc5KzEeF3kG6%2Bf9286T2tk2oxsGUeSLFIWI5Qc29d727UUSbLRLKweUtmk9ubAgXQpr3X6b9Jr42iaqxGhT7HxY8t8iUJ3t3rEUc%2Fr5TRaO4f5dlT3RtStH2AXVYmkEqRqVvJtxvFewfIRgAuLu6%2Ft84K1STJgLmmJ4IqhzbIIMqERAecRXOQeUFQiyOj00droWY6FOsMB5ZeuPVUdD89DXYwkf5BezRSUg8l15FgT20yQPHcas%2FRwaYCniGV37R4QPVSXOP9pqjBBkAarXbuP6JjNvKVDW8B7FPlkNsl9B9KHS%2BgRktD91GXLDeAjrg0Ia5YDgNyxfnRZQLR%2Frob9aZcosaH8Uj1reeWB%2Bby6EgE7TKrLuOvs3IG8HIexAotlr%2BBqlKW0dHAYJKy7X4gz5yzfYKNbzSRcpb5JdQQGEl8kAWLdZn7XfrWxY7p%2FjR8RLPZFhfvqkch4KRJKH4ES1eR6guvSMzBrca8DGIdzin9ORCHQfvOP0O%2FP76k6Nut37EfHoxwIA27Xye0B%2BjT20icww3LzTvwY6pgEZUkPLu%2FfQpuI%2Bfvyn14H3cQxJiLB7rUWaDsYADLLGEsojiKtw643wbK3VrggM0rq2%2B6%2Fioq%2Fg2g9TwMw3cbGq37oajDzCqr6NI8V83VLXm8qGQx6K%2FN%2F90l1voO4P4ySlJ1AGggkpob2YYb8Aa1qLcTBHqFaEomBf9uzUnexSamK8c82dhf0WBbaUbWncexnz2CxNn73XnqKa1EIU4YGLndus%2FZ5G&X-Amz-Signature=68f7f803865d74298edaba5827d9f342f48179299c1e7e9bc31315c816f62d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6J7ZSD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoa1I%2BldASLejFaih6xpBHFkWMICxhh1N%2Bb5niWv6SIAiBQjBTRs33PHqe8iSYk3Otp9OUPJ6cM2Yo8g53vI1x%2B8Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM4Kn0Ob%2Bnc1594rTXKtwDw36oGkyH22pPMAqRKah54INuukrSOgU2OY07gKA81rvb9qQ03A6%2FBcX4zPh9v%2BAhkrd5h1xCKEmGENhn5lzHsXJyzBWdSPof%2BNc5KzEeF3kG6%2Bf9286T2tk2oxsGUeSLFIWI5Qc29d727UUSbLRLKweUtmk9ubAgXQpr3X6b9Jr42iaqxGhT7HxY8t8iUJ3t3rEUc%2Fr5TRaO4f5dlT3RtStH2AXVYmkEqRqVvJtxvFewfIRgAuLu6%2Ft84K1STJgLmmJ4IqhzbIIMqERAecRXOQeUFQiyOj00droWY6FOsMB5ZeuPVUdD89DXYwkf5BezRSUg8l15FgT20yQPHcas%2FRwaYCniGV37R4QPVSXOP9pqjBBkAarXbuP6JjNvKVDW8B7FPlkNsl9B9KHS%2BgRktD91GXLDeAjrg0Ia5YDgNyxfnRZQLR%2Frob9aZcosaH8Uj1reeWB%2Bby6EgE7TKrLuOvs3IG8HIexAotlr%2BBqlKW0dHAYJKy7X4gz5yzfYKNbzSRcpb5JdQQGEl8kAWLdZn7XfrWxY7p%2FjR8RLPZFhfvqkch4KRJKH4ES1eR6guvSMzBrca8DGIdzin9ORCHQfvOP0O%2FP76k6Nut37EfHoxwIA27Xye0B%2BjT20icww3LzTvwY6pgEZUkPLu%2FfQpuI%2Bfvyn14H3cQxJiLB7rUWaDsYADLLGEsojiKtw643wbK3VrggM0rq2%2B6%2Fioq%2Fg2g9TwMw3cbGq37oajDzCqr6NI8V83VLXm8qGQx6K%2FN%2F90l1voO4P4ySlJ1AGggkpob2YYb8Aa1qLcTBHqFaEomBf9uzUnexSamK8c82dhf0WBbaUbWncexnz2CxNn73XnqKa1EIU4YGLndus%2FZ5G&X-Amz-Signature=89128e0021464678825b4e511663ed21a1651fcc0c383f2a2950295b97ed27f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6J7ZSD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoa1I%2BldASLejFaih6xpBHFkWMICxhh1N%2Bb5niWv6SIAiBQjBTRs33PHqe8iSYk3Otp9OUPJ6cM2Yo8g53vI1x%2B8Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM4Kn0Ob%2Bnc1594rTXKtwDw36oGkyH22pPMAqRKah54INuukrSOgU2OY07gKA81rvb9qQ03A6%2FBcX4zPh9v%2BAhkrd5h1xCKEmGENhn5lzHsXJyzBWdSPof%2BNc5KzEeF3kG6%2Bf9286T2tk2oxsGUeSLFIWI5Qc29d727UUSbLRLKweUtmk9ubAgXQpr3X6b9Jr42iaqxGhT7HxY8t8iUJ3t3rEUc%2Fr5TRaO4f5dlT3RtStH2AXVYmkEqRqVvJtxvFewfIRgAuLu6%2Ft84K1STJgLmmJ4IqhzbIIMqERAecRXOQeUFQiyOj00droWY6FOsMB5ZeuPVUdD89DXYwkf5BezRSUg8l15FgT20yQPHcas%2FRwaYCniGV37R4QPVSXOP9pqjBBkAarXbuP6JjNvKVDW8B7FPlkNsl9B9KHS%2BgRktD91GXLDeAjrg0Ia5YDgNyxfnRZQLR%2Frob9aZcosaH8Uj1reeWB%2Bby6EgE7TKrLuOvs3IG8HIexAotlr%2BBqlKW0dHAYJKy7X4gz5yzfYKNbzSRcpb5JdQQGEl8kAWLdZn7XfrWxY7p%2FjR8RLPZFhfvqkch4KRJKH4ES1eR6guvSMzBrca8DGIdzin9ORCHQfvOP0O%2FP76k6Nut37EfHoxwIA27Xye0B%2BjT20icww3LzTvwY6pgEZUkPLu%2FfQpuI%2Bfvyn14H3cQxJiLB7rUWaDsYADLLGEsojiKtw643wbK3VrggM0rq2%2B6%2Fioq%2Fg2g9TwMw3cbGq37oajDzCqr6NI8V83VLXm8qGQx6K%2FN%2F90l1voO4P4ySlJ1AGggkpob2YYb8Aa1qLcTBHqFaEomBf9uzUnexSamK8c82dhf0WBbaUbWncexnz2CxNn73XnqKa1EIU4YGLndus%2FZ5G&X-Amz-Signature=6452507f74e771a0eae8917d397d36c97032d24dd49ac282aec853bfed826f96&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
