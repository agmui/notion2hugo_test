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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IADXV5F%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDr670YvkcliLEGWzk720NffSWZEP7w%2BILNwdRfgpM%2F2AiEAgA0U9nKZvd04BfcQYJUHZSFnsyavM8W%2FIyX%2BA%2FwgCwIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDs688sMKcS8jS3wUircA9g%2Bs%2FhlQqqy9jrOfwjyZXYCe5yCcaqO4u99e1OTJFePTnLtQPhqWybJnhSCCIPgmX73MAngzV%2Fizyo9JuhmaucN2KkEWxRZev6ZRhmTMWTXAURoU0XLSl5sAKoa0PsxfVHh5mPeG1Q4oSQS52UEXoq%2Fad%2BgMmYTW5a3k34k%2FUKLXJXziU%2F20gfRXJ2L0l8ZOWEAlaRyRUrI562SWKnc%2FOCBN6ow7Xmbq6owwsDh9W6xcOMfAHVsbHZjpFXyyWiust%2BCs0xzr4ultEQo7HNC6Fvx63Iut5q4R44IQJvsu9TDGs%2F%2BhvlFUHzunvJyuHsIRmm%2Fy626otkHm3Owdc0tU7vCh7G2NTdXmqmYr3HPphZpR7ZTP%2FU%2Bh4Cm2IZopdaPEpaVfdAe%2BKq%2BBlqibHRNpNc8jPVI%2FBBDa%2FOhkR8DVsWUb%2BkKerEIZ0ZVfRn%2FiCQgWV3MWEEbdWA76gB1ZHuw5fD7thQdJm5C%2FArrNddtSHrTVKM1t4myqr7FxCpkG5M7oobDCbJI0YwpGGa%2BrfVu%2FYHtIv9tN%2Flwrb2EUK4a2FeK45PU02ZShC1DqdOva4b1ig8%2B5cDpB7eSmXBb8NQAnNXiNjvbtFtupxuI9dmOywIxwcIVjKdrpJLhKIW4MJTqvL0GOqUBZhDgROH0BaX%2BC3wQI8%2FxgYu%2FB6xbr%2FgMdtQFowiswAoKKoDS5CJLvzxS%2F%2BcB%2BkV1IVPETuCRsPmeM18QLQeQo16CCTcKrlp8VPXDW08X0aeyNKjA2vlrRXh6xFeXGM8Iu3VzPST%2B%2B%2FOod26YNPCTXc7Ikh8BlVZb9gI7AGX5aGSDtgrCAYcpuD3nDUncO9mJ%2FWCXNeu4Rtqs%2BTgFXssTc2RS7I9i&X-Amz-Signature=02f85e2200efadcdf2ae520e991ef55838a657143b844ed63a73881ef2a7235d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IADXV5F%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDr670YvkcliLEGWzk720NffSWZEP7w%2BILNwdRfgpM%2F2AiEAgA0U9nKZvd04BfcQYJUHZSFnsyavM8W%2FIyX%2BA%2FwgCwIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDs688sMKcS8jS3wUircA9g%2Bs%2FhlQqqy9jrOfwjyZXYCe5yCcaqO4u99e1OTJFePTnLtQPhqWybJnhSCCIPgmX73MAngzV%2Fizyo9JuhmaucN2KkEWxRZev6ZRhmTMWTXAURoU0XLSl5sAKoa0PsxfVHh5mPeG1Q4oSQS52UEXoq%2Fad%2BgMmYTW5a3k34k%2FUKLXJXziU%2F20gfRXJ2L0l8ZOWEAlaRyRUrI562SWKnc%2FOCBN6ow7Xmbq6owwsDh9W6xcOMfAHVsbHZjpFXyyWiust%2BCs0xzr4ultEQo7HNC6Fvx63Iut5q4R44IQJvsu9TDGs%2F%2BhvlFUHzunvJyuHsIRmm%2Fy626otkHm3Owdc0tU7vCh7G2NTdXmqmYr3HPphZpR7ZTP%2FU%2Bh4Cm2IZopdaPEpaVfdAe%2BKq%2BBlqibHRNpNc8jPVI%2FBBDa%2FOhkR8DVsWUb%2BkKerEIZ0ZVfRn%2FiCQgWV3MWEEbdWA76gB1ZHuw5fD7thQdJm5C%2FArrNddtSHrTVKM1t4myqr7FxCpkG5M7oobDCbJI0YwpGGa%2BrfVu%2FYHtIv9tN%2Flwrb2EUK4a2FeK45PU02ZShC1DqdOva4b1ig8%2B5cDpB7eSmXBb8NQAnNXiNjvbtFtupxuI9dmOywIxwcIVjKdrpJLhKIW4MJTqvL0GOqUBZhDgROH0BaX%2BC3wQI8%2FxgYu%2FB6xbr%2FgMdtQFowiswAoKKoDS5CJLvzxS%2F%2BcB%2BkV1IVPETuCRsPmeM18QLQeQo16CCTcKrlp8VPXDW08X0aeyNKjA2vlrRXh6xFeXGM8Iu3VzPST%2B%2B%2FOod26YNPCTXc7Ikh8BlVZb9gI7AGX5aGSDtgrCAYcpuD3nDUncO9mJ%2FWCXNeu4Rtqs%2BTgFXssTc2RS7I9i&X-Amz-Signature=29677db75e26766ef695b5e0f242cc338ba73d7991dbb93a40e592d03e667ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IADXV5F%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDr670YvkcliLEGWzk720NffSWZEP7w%2BILNwdRfgpM%2F2AiEAgA0U9nKZvd04BfcQYJUHZSFnsyavM8W%2FIyX%2BA%2FwgCwIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDDs688sMKcS8jS3wUircA9g%2Bs%2FhlQqqy9jrOfwjyZXYCe5yCcaqO4u99e1OTJFePTnLtQPhqWybJnhSCCIPgmX73MAngzV%2Fizyo9JuhmaucN2KkEWxRZev6ZRhmTMWTXAURoU0XLSl5sAKoa0PsxfVHh5mPeG1Q4oSQS52UEXoq%2Fad%2BgMmYTW5a3k34k%2FUKLXJXziU%2F20gfRXJ2L0l8ZOWEAlaRyRUrI562SWKnc%2FOCBN6ow7Xmbq6owwsDh9W6xcOMfAHVsbHZjpFXyyWiust%2BCs0xzr4ultEQo7HNC6Fvx63Iut5q4R44IQJvsu9TDGs%2F%2BhvlFUHzunvJyuHsIRmm%2Fy626otkHm3Owdc0tU7vCh7G2NTdXmqmYr3HPphZpR7ZTP%2FU%2Bh4Cm2IZopdaPEpaVfdAe%2BKq%2BBlqibHRNpNc8jPVI%2FBBDa%2FOhkR8DVsWUb%2BkKerEIZ0ZVfRn%2FiCQgWV3MWEEbdWA76gB1ZHuw5fD7thQdJm5C%2FArrNddtSHrTVKM1t4myqr7FxCpkG5M7oobDCbJI0YwpGGa%2BrfVu%2FYHtIv9tN%2Flwrb2EUK4a2FeK45PU02ZShC1DqdOva4b1ig8%2B5cDpB7eSmXBb8NQAnNXiNjvbtFtupxuI9dmOywIxwcIVjKdrpJLhKIW4MJTqvL0GOqUBZhDgROH0BaX%2BC3wQI8%2FxgYu%2FB6xbr%2FgMdtQFowiswAoKKoDS5CJLvzxS%2F%2BcB%2BkV1IVPETuCRsPmeM18QLQeQo16CCTcKrlp8VPXDW08X0aeyNKjA2vlrRXh6xFeXGM8Iu3VzPST%2B%2B%2FOod26YNPCTXc7Ikh8BlVZb9gI7AGX5aGSDtgrCAYcpuD3nDUncO9mJ%2FWCXNeu4Rtqs%2BTgFXssTc2RS7I9i&X-Amz-Signature=888c461a82acae0d3405b5e2b338aa6e6ebd5bfd688fa58408566c0a847bdd88&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
