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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWF7HLPD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEf%2Bcv6iuDjqBDGEAAw6tXaVuEBLaSXzll1sv7RVfDyFAiARJr3s5ZOM7UqH7qgEBhXkQauqYw9myq4uLUap%2FDyLYCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMqA%2B5j84BVXGbE2EYKtwDfojC6SAMozKug2KshT8CUc7AQyUQU%2FYc0eJxzXb6qfQoiFrWdUH%2FTMr41WNWQ48PRzDgCTFiB5K29CWMl9wZ1qQVhXznKDd7IDjWFNmih0g6%2Fu6Zuqt3TWG%2F8Kb0KJH9H6FQqOz0YgzTAHxhRFqoz8sVCcbfl2HE2QAPevw5TqVkPO8a65hakDcnM9SB7%2FFLiW4RaR2PaCQmbkiIDKQrA4t%2BO8Lqt7mEdMbOLPebfQtf6jd%2FH4Hp22oYksyxQ0RYx3COs4LRwRkHNcUIgIw7koL10OWfeQXdmN894ONZVLBs81LFIAOAHfPROZlNSxYNS7g1vR1JqmYg7qMf7vjwYRRQ8eo4SKopn2osDj3snoK7KyWxVX3JB0Y5oQojP75%2FE9fsqIA3vWL20mG3nKrVNqoQOtYJKSd1GyTHkeon38zQKOP5mtl9sMNw4uhGe3UaZYHU0Vgw%2FQSFT8BaBTWK%2ByaGRlO0zwCwNGI5Z1xTY%2BYMFi4fehGXp5SHxP%2B4MGvUNLaeOH6w2S901YaiMxp6mHSZX9Ul5IsFELGrpef%2FjXLjqzjLJC%2FeQZ1HGubI5G%2FTlv5pZAf7U6MrbF0VKLHPMgQU2L8hT9aRRG4Godhaej0gIkah4sWvmY5foU0wj8OEwgY6pgFp%2BVnebvIxIPkrR%2B%2FlOUH1vQ%2FREPSxviobGQWOtsSEnhuZybo3PYLNjqNxB4OsulxwkLdAbUTmwmOTUwwYFG1SgVPM%2BWqng98SxpzAdg6CXrBcfLKLIms4wNAN%2BGNIBKcFuSHGqcw2emFmJeS%2BkJT%2B2AwmJQqF9TFxTjbzWZS897wvvlql2Pxv%2BhS71GIGrcmJp0tDk%2BZEWhhh1zKvIcRru2%2FYFyJZ&X-Amz-Signature=77b35fe53bca2c4c2d9c504e5b20d0939e3ade8060377e1bd4b6db0aa40293e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWF7HLPD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEf%2Bcv6iuDjqBDGEAAw6tXaVuEBLaSXzll1sv7RVfDyFAiARJr3s5ZOM7UqH7qgEBhXkQauqYw9myq4uLUap%2FDyLYCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMqA%2B5j84BVXGbE2EYKtwDfojC6SAMozKug2KshT8CUc7AQyUQU%2FYc0eJxzXb6qfQoiFrWdUH%2FTMr41WNWQ48PRzDgCTFiB5K29CWMl9wZ1qQVhXznKDd7IDjWFNmih0g6%2Fu6Zuqt3TWG%2F8Kb0KJH9H6FQqOz0YgzTAHxhRFqoz8sVCcbfl2HE2QAPevw5TqVkPO8a65hakDcnM9SB7%2FFLiW4RaR2PaCQmbkiIDKQrA4t%2BO8Lqt7mEdMbOLPebfQtf6jd%2FH4Hp22oYksyxQ0RYx3COs4LRwRkHNcUIgIw7koL10OWfeQXdmN894ONZVLBs81LFIAOAHfPROZlNSxYNS7g1vR1JqmYg7qMf7vjwYRRQ8eo4SKopn2osDj3snoK7KyWxVX3JB0Y5oQojP75%2FE9fsqIA3vWL20mG3nKrVNqoQOtYJKSd1GyTHkeon38zQKOP5mtl9sMNw4uhGe3UaZYHU0Vgw%2FQSFT8BaBTWK%2ByaGRlO0zwCwNGI5Z1xTY%2BYMFi4fehGXp5SHxP%2B4MGvUNLaeOH6w2S901YaiMxp6mHSZX9Ul5IsFELGrpef%2FjXLjqzjLJC%2FeQZ1HGubI5G%2FTlv5pZAf7U6MrbF0VKLHPMgQU2L8hT9aRRG4Godhaej0gIkah4sWvmY5foU0wj8OEwgY6pgFp%2BVnebvIxIPkrR%2B%2FlOUH1vQ%2FREPSxviobGQWOtsSEnhuZybo3PYLNjqNxB4OsulxwkLdAbUTmwmOTUwwYFG1SgVPM%2BWqng98SxpzAdg6CXrBcfLKLIms4wNAN%2BGNIBKcFuSHGqcw2emFmJeS%2BkJT%2B2AwmJQqF9TFxTjbzWZS897wvvlql2Pxv%2BhS71GIGrcmJp0tDk%2BZEWhhh1zKvIcRru2%2FYFyJZ&X-Amz-Signature=f734a5144f84d4b05f7826b985fe354f28d540466acf13e074b0d357afa8ac7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWF7HLPD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEf%2Bcv6iuDjqBDGEAAw6tXaVuEBLaSXzll1sv7RVfDyFAiARJr3s5ZOM7UqH7qgEBhXkQauqYw9myq4uLUap%2FDyLYCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMqA%2B5j84BVXGbE2EYKtwDfojC6SAMozKug2KshT8CUc7AQyUQU%2FYc0eJxzXb6qfQoiFrWdUH%2FTMr41WNWQ48PRzDgCTFiB5K29CWMl9wZ1qQVhXznKDd7IDjWFNmih0g6%2Fu6Zuqt3TWG%2F8Kb0KJH9H6FQqOz0YgzTAHxhRFqoz8sVCcbfl2HE2QAPevw5TqVkPO8a65hakDcnM9SB7%2FFLiW4RaR2PaCQmbkiIDKQrA4t%2BO8Lqt7mEdMbOLPebfQtf6jd%2FH4Hp22oYksyxQ0RYx3COs4LRwRkHNcUIgIw7koL10OWfeQXdmN894ONZVLBs81LFIAOAHfPROZlNSxYNS7g1vR1JqmYg7qMf7vjwYRRQ8eo4SKopn2osDj3snoK7KyWxVX3JB0Y5oQojP75%2FE9fsqIA3vWL20mG3nKrVNqoQOtYJKSd1GyTHkeon38zQKOP5mtl9sMNw4uhGe3UaZYHU0Vgw%2FQSFT8BaBTWK%2ByaGRlO0zwCwNGI5Z1xTY%2BYMFi4fehGXp5SHxP%2B4MGvUNLaeOH6w2S901YaiMxp6mHSZX9Ul5IsFELGrpef%2FjXLjqzjLJC%2FeQZ1HGubI5G%2FTlv5pZAf7U6MrbF0VKLHPMgQU2L8hT9aRRG4Godhaej0gIkah4sWvmY5foU0wj8OEwgY6pgFp%2BVnebvIxIPkrR%2B%2FlOUH1vQ%2FREPSxviobGQWOtsSEnhuZybo3PYLNjqNxB4OsulxwkLdAbUTmwmOTUwwYFG1SgVPM%2BWqng98SxpzAdg6CXrBcfLKLIms4wNAN%2BGNIBKcFuSHGqcw2emFmJeS%2BkJT%2B2AwmJQqF9TFxTjbzWZS897wvvlql2Pxv%2BhS71GIGrcmJp0tDk%2BZEWhhh1zKvIcRru2%2FYFyJZ&X-Amz-Signature=bc0c8aec3e0bdb50f0e8c9733dd66b1c5ab5b8ee6c85eb0b1f5ca8a68d975aed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
