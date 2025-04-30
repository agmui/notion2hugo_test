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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKARRHV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCZhEvVQprdyAN2MtvuiDukUlS7fbN5UmWyiaE9fJPR0AIhAIKmB9vh8AkfGtb8Y5%2Blo73c7cy2XyWVabDX3NS3d6WwKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuCc7RWLP4fzLrwusq3APc%2B9FkQYr6O7WHuZeaTZ6b9aehZ8YXZmg7X8q7JFjIVOy8vRqzZChpszJYQTp8TVGYIwJd94OGQS6NWEVP9V4kcByGgPxhsZeO6KM%2BSs2DmVXLHLb075965AOas%2B14gwQZ6UcMz1mPO5taHtqZu8RnHRomV2nazBUfBtuXl9ayKibWFsSACTsuBu2b9di7SsX8zftHgASz5iQGUVImK2Aq%2BFdOprDk4Vj2NztxWcULbJQWsWjX%2BXZezOyU57%2Bum5tyKq%2BUUGgH0y37f3G7f7TyYfajtTXaWs%2BynI17tn2b4o1O2IEmuJvt%2BlZ%2BNFPIpotJleasers8mg5G4bBUm7nnSgWM78z%2BFFC5AbYjGvhzPwMlIr8Mo9YiNJcH6tyJEfRMPBpjtgafmHFP69ZNvZ%2FMR0YgBJKilF3%2BPmxud4N5OzcCUWhVmcnlTTZJHww1FKUdxdDGepPZ4p%2BYPfvUdkCEB2l7Vw73e3rYVwgA%2B%2Bil12MwA13HWpVt1oC7l84I9Euf5qdDXIZx7meYaCpQsRPf2iT0PxqvZJhLVos8ihc0aySzc3585rlAXJMCoF6i5W%2FNQ1IRzyA3h3cu0ehu0%2FzXv4B%2BPZHk8Zmttislt%2FtnOOgxJmHH2X1btUUAdzDeh8bABjqkASohbB77ohDZ3XiM5icdf3R8jVYwiepGTJWOJ0hGbE%2F6eAqRMxdP622yqgrNKsiSCkwOCW%2FhIt%2Bwz4eJ7TERmV5fpHkkrOFgXpyaoVOQ4x5wuf7UTIfFqNSVCDDl1o4HHLW2Q8N1bGxWG%2FkSi61IitDxTZ5frU2CnFfhAJzmJKnvQJHc33%2Fw5plcKzVzzOMDnv%2FWHgbJ0yHrtaVHO4rvJePTaOvi&X-Amz-Signature=20298d842602be5dafbe7c0d0c79a68e663703742ea0a7e0eb856a766d79b32a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKARRHV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCZhEvVQprdyAN2MtvuiDukUlS7fbN5UmWyiaE9fJPR0AIhAIKmB9vh8AkfGtb8Y5%2Blo73c7cy2XyWVabDX3NS3d6WwKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuCc7RWLP4fzLrwusq3APc%2B9FkQYr6O7WHuZeaTZ6b9aehZ8YXZmg7X8q7JFjIVOy8vRqzZChpszJYQTp8TVGYIwJd94OGQS6NWEVP9V4kcByGgPxhsZeO6KM%2BSs2DmVXLHLb075965AOas%2B14gwQZ6UcMz1mPO5taHtqZu8RnHRomV2nazBUfBtuXl9ayKibWFsSACTsuBu2b9di7SsX8zftHgASz5iQGUVImK2Aq%2BFdOprDk4Vj2NztxWcULbJQWsWjX%2BXZezOyU57%2Bum5tyKq%2BUUGgH0y37f3G7f7TyYfajtTXaWs%2BynI17tn2b4o1O2IEmuJvt%2BlZ%2BNFPIpotJleasers8mg5G4bBUm7nnSgWM78z%2BFFC5AbYjGvhzPwMlIr8Mo9YiNJcH6tyJEfRMPBpjtgafmHFP69ZNvZ%2FMR0YgBJKilF3%2BPmxud4N5OzcCUWhVmcnlTTZJHww1FKUdxdDGepPZ4p%2BYPfvUdkCEB2l7Vw73e3rYVwgA%2B%2Bil12MwA13HWpVt1oC7l84I9Euf5qdDXIZx7meYaCpQsRPf2iT0PxqvZJhLVos8ihc0aySzc3585rlAXJMCoF6i5W%2FNQ1IRzyA3h3cu0ehu0%2FzXv4B%2BPZHk8Zmttislt%2FtnOOgxJmHH2X1btUUAdzDeh8bABjqkASohbB77ohDZ3XiM5icdf3R8jVYwiepGTJWOJ0hGbE%2F6eAqRMxdP622yqgrNKsiSCkwOCW%2FhIt%2Bwz4eJ7TERmV5fpHkkrOFgXpyaoVOQ4x5wuf7UTIfFqNSVCDDl1o4HHLW2Q8N1bGxWG%2FkSi61IitDxTZ5frU2CnFfhAJzmJKnvQJHc33%2Fw5plcKzVzzOMDnv%2FWHgbJ0yHrtaVHO4rvJePTaOvi&X-Amz-Signature=f14097b44372c847c592e8e51ee4456c334e42f903b656d87bda03de14aa1d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKARRHV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCZhEvVQprdyAN2MtvuiDukUlS7fbN5UmWyiaE9fJPR0AIhAIKmB9vh8AkfGtb8Y5%2Blo73c7cy2XyWVabDX3NS3d6WwKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuCc7RWLP4fzLrwusq3APc%2B9FkQYr6O7WHuZeaTZ6b9aehZ8YXZmg7X8q7JFjIVOy8vRqzZChpszJYQTp8TVGYIwJd94OGQS6NWEVP9V4kcByGgPxhsZeO6KM%2BSs2DmVXLHLb075965AOas%2B14gwQZ6UcMz1mPO5taHtqZu8RnHRomV2nazBUfBtuXl9ayKibWFsSACTsuBu2b9di7SsX8zftHgASz5iQGUVImK2Aq%2BFdOprDk4Vj2NztxWcULbJQWsWjX%2BXZezOyU57%2Bum5tyKq%2BUUGgH0y37f3G7f7TyYfajtTXaWs%2BynI17tn2b4o1O2IEmuJvt%2BlZ%2BNFPIpotJleasers8mg5G4bBUm7nnSgWM78z%2BFFC5AbYjGvhzPwMlIr8Mo9YiNJcH6tyJEfRMPBpjtgafmHFP69ZNvZ%2FMR0YgBJKilF3%2BPmxud4N5OzcCUWhVmcnlTTZJHww1FKUdxdDGepPZ4p%2BYPfvUdkCEB2l7Vw73e3rYVwgA%2B%2Bil12MwA13HWpVt1oC7l84I9Euf5qdDXIZx7meYaCpQsRPf2iT0PxqvZJhLVos8ihc0aySzc3585rlAXJMCoF6i5W%2FNQ1IRzyA3h3cu0ehu0%2FzXv4B%2BPZHk8Zmttislt%2FtnOOgxJmHH2X1btUUAdzDeh8bABjqkASohbB77ohDZ3XiM5icdf3R8jVYwiepGTJWOJ0hGbE%2F6eAqRMxdP622yqgrNKsiSCkwOCW%2FhIt%2Bwz4eJ7TERmV5fpHkkrOFgXpyaoVOQ4x5wuf7UTIfFqNSVCDDl1o4HHLW2Q8N1bGxWG%2FkSi61IitDxTZ5frU2CnFfhAJzmJKnvQJHc33%2Fw5plcKzVzzOMDnv%2FWHgbJ0yHrtaVHO4rvJePTaOvi&X-Amz-Signature=e9d31f3b80b3e94e30371db78ebccd476cc09ab754f323463a5b93c69c601fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
