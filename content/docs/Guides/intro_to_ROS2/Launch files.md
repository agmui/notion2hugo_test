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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C34RIZ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFAhjWQBJoIF%2B%2BVmZhW3saVipNtC4L0ywRW0r4rYgc7IAiATeiWdkZM0dP7WqQ9cedBd17b2%2BlVcIV2GAKMjX5oVYiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8%2FpqkSFfbL%2BR0ZyKtwDBMyVlWoipJw2iGmB3VIfPLRKXkZ%2B%2BJJ2E%2FIo4Cb6dAW3Bv2kMUEu7d%2Bm3FHB1IUxLZIZ6J3e9UEPbzDZ5IjQlDXdQFi67xFgk0sk84l2O0ntFMtxG2zpPL2A9BCS48shOD8XC%2ByL8E4EW093tm0AMQ7D41At2118QF0eP6t16vSQ208YGPviIdlaSp%2FbyKMZAz46yXhHAQ5e0lomtM9ojA3ezvJWyroDMEHZpcx%2Bma3peRDz0RkT0qgCNkyNQbo5CeTAGoTEz9vyIrMq9IpPC0%2FXdCTF0mBoe46xZc0SlYJWnHA5DT7ckIMJtCTMvKKgqnt2kYgHERdKHKPe%2FLDbMvpZzOCGR%2BKrzwCvPRHpkGolf9fRsij%2Fp0wZTd3WmSwlwk2iHX%2Br6aUj3xxiA%2Bj%2BBB5ukIMfrREptnYGvDiykrdOjeQUCxJn%2F949BzZfvhAOf3oZXKMqLx1u927yJMhJ2OgWYHTJrAOHZZl5rX6kE4buGXsXS4%2Bw8YW4JdYsiO%2B74sK4kp8bhKWvpIhr37Z8mDK2TxoSsJJf4%2FEuoXWzrt%2FBs09XxRIQXlZuERgZXdDCb%2BiT2c%2B1OPGZ6zWQj3%2F91G6FuTv3uey%2Fdbdle3QmyyoN%2FHJBvN%2F83xhI1mcwyKiLwQY6pgEDDP8WwGv9%2BUXkeo37xJcUX6rHkUB%2BV7uwJk3YdFUsQxYV9wUVivSwgu8Q09TGeUq6a5j3SIt4RFleAEyveXb25LHrP5%2B50kyYmPpJ1cRDn2zyeqQAPvj52SkAHcbAmSLCmBenY0QXnCWRevW25SFDiC5%2FbkzE18G10q85ZS2nuqC6WMYrbS2dEg5By4Q3GCueZRyXSi2waDVIA5BZhfFjlNRkdeSA&X-Amz-Signature=b3891a3f368b6b6fef0f81568610c8a77c3a3f15cd69618a76bfb75fda0de49a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C34RIZ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFAhjWQBJoIF%2B%2BVmZhW3saVipNtC4L0ywRW0r4rYgc7IAiATeiWdkZM0dP7WqQ9cedBd17b2%2BlVcIV2GAKMjX5oVYiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8%2FpqkSFfbL%2BR0ZyKtwDBMyVlWoipJw2iGmB3VIfPLRKXkZ%2B%2BJJ2E%2FIo4Cb6dAW3Bv2kMUEu7d%2Bm3FHB1IUxLZIZ6J3e9UEPbzDZ5IjQlDXdQFi67xFgk0sk84l2O0ntFMtxG2zpPL2A9BCS48shOD8XC%2ByL8E4EW093tm0AMQ7D41At2118QF0eP6t16vSQ208YGPviIdlaSp%2FbyKMZAz46yXhHAQ5e0lomtM9ojA3ezvJWyroDMEHZpcx%2Bma3peRDz0RkT0qgCNkyNQbo5CeTAGoTEz9vyIrMq9IpPC0%2FXdCTF0mBoe46xZc0SlYJWnHA5DT7ckIMJtCTMvKKgqnt2kYgHERdKHKPe%2FLDbMvpZzOCGR%2BKrzwCvPRHpkGolf9fRsij%2Fp0wZTd3WmSwlwk2iHX%2Br6aUj3xxiA%2Bj%2BBB5ukIMfrREptnYGvDiykrdOjeQUCxJn%2F949BzZfvhAOf3oZXKMqLx1u927yJMhJ2OgWYHTJrAOHZZl5rX6kE4buGXsXS4%2Bw8YW4JdYsiO%2B74sK4kp8bhKWvpIhr37Z8mDK2TxoSsJJf4%2FEuoXWzrt%2FBs09XxRIQXlZuERgZXdDCb%2BiT2c%2B1OPGZ6zWQj3%2F91G6FuTv3uey%2Fdbdle3QmyyoN%2FHJBvN%2F83xhI1mcwyKiLwQY6pgEDDP8WwGv9%2BUXkeo37xJcUX6rHkUB%2BV7uwJk3YdFUsQxYV9wUVivSwgu8Q09TGeUq6a5j3SIt4RFleAEyveXb25LHrP5%2B50kyYmPpJ1cRDn2zyeqQAPvj52SkAHcbAmSLCmBenY0QXnCWRevW25SFDiC5%2FbkzE18G10q85ZS2nuqC6WMYrbS2dEg5By4Q3GCueZRyXSi2waDVIA5BZhfFjlNRkdeSA&X-Amz-Signature=6078fb04dff9807f34c48e32802cb0d4db8ced190665e9baf0d6b42c470aced7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C34RIZ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFAhjWQBJoIF%2B%2BVmZhW3saVipNtC4L0ywRW0r4rYgc7IAiATeiWdkZM0dP7WqQ9cedBd17b2%2BlVcIV2GAKMjX5oVYiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8%2FpqkSFfbL%2BR0ZyKtwDBMyVlWoipJw2iGmB3VIfPLRKXkZ%2B%2BJJ2E%2FIo4Cb6dAW3Bv2kMUEu7d%2Bm3FHB1IUxLZIZ6J3e9UEPbzDZ5IjQlDXdQFi67xFgk0sk84l2O0ntFMtxG2zpPL2A9BCS48shOD8XC%2ByL8E4EW093tm0AMQ7D41At2118QF0eP6t16vSQ208YGPviIdlaSp%2FbyKMZAz46yXhHAQ5e0lomtM9ojA3ezvJWyroDMEHZpcx%2Bma3peRDz0RkT0qgCNkyNQbo5CeTAGoTEz9vyIrMq9IpPC0%2FXdCTF0mBoe46xZc0SlYJWnHA5DT7ckIMJtCTMvKKgqnt2kYgHERdKHKPe%2FLDbMvpZzOCGR%2BKrzwCvPRHpkGolf9fRsij%2Fp0wZTd3WmSwlwk2iHX%2Br6aUj3xxiA%2Bj%2BBB5ukIMfrREptnYGvDiykrdOjeQUCxJn%2F949BzZfvhAOf3oZXKMqLx1u927yJMhJ2OgWYHTJrAOHZZl5rX6kE4buGXsXS4%2Bw8YW4JdYsiO%2B74sK4kp8bhKWvpIhr37Z8mDK2TxoSsJJf4%2FEuoXWzrt%2FBs09XxRIQXlZuERgZXdDCb%2BiT2c%2B1OPGZ6zWQj3%2F91G6FuTv3uey%2Fdbdle3QmyyoN%2FHJBvN%2F83xhI1mcwyKiLwQY6pgEDDP8WwGv9%2BUXkeo37xJcUX6rHkUB%2BV7uwJk3YdFUsQxYV9wUVivSwgu8Q09TGeUq6a5j3SIt4RFleAEyveXb25LHrP5%2B50kyYmPpJ1cRDn2zyeqQAPvj52SkAHcbAmSLCmBenY0QXnCWRevW25SFDiC5%2FbkzE18G10q85ZS2nuqC6WMYrbS2dEg5By4Q3GCueZRyXSi2waDVIA5BZhfFjlNRkdeSA&X-Amz-Signature=a227ffd916a7caff5e90af1fe22aca4fbc4c19a93ad09699dd8381976376f54e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
