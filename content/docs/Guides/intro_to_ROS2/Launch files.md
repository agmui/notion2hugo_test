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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LE5BP7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6fKBV5xotHVJSmqSDVtVuSntaXUMeKep2qk5zKVBVlAiA15G40qw4098o40uAt%2F6p5sbNoDxabD6zIszXWDZT1gir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM%2FtHhFbVCCMcyt8KxKtwD8kQk9pJgNc2nB%2F6M%2BpHS2pMdvolH0S41v%2F26JUxroFAYXeMjMdGvNCY9WjKqkwmF4ubjK%2BTDvRQVCCmfljI9R4QPodOjiPScTmaLod2EOA4eMRthls6DuhkXDwTqD9E6bbIyUCFJyyqkc3Y1B94C604FKWpoDy6FGep1R4iTQ%2BwIOPTaFEPaqm2w9PbUpyWqTvBotpbMr%2BXkQ4dKepi5TXvx6oGJ%2Fr6CboBqkUol713kHsxSeRVKsWTv5iLYKATctH3ssJHmKbaFphKCtdjdcnBGTqiGEgtLJijnVf0ZBbDC8HPkNUeVuVPEd9CuVWWW6IJZqv9RlleNVbdzFNXgobn3FgiNrmx%2F2PirCMhqKKbO%2BblwCoNUDT%2BulOqzGnRSRVQDclLPCLB8Itxwkbh9XDEPi7zbJoHwNGNgSVTWmBPbC5y%2FhEl540uu3BpQNf7b3SF7gXVuZiNax%2FSPTZbNIavp0cA3E%2B%2FQovf3y9Rk2KyPNbf6HDaHzhIQAdkMIbmrEs5Vs3RRlFamL6ArfKawi0MUEVVoZTjRUIuu8OnlhTTrdV7%2FSW4xQMlUovcia29LvcWm14uWl9md%2FXKq%2Fm%2FzbXCm7p9ABQMEl0gtiYuEwGbs%2FW653MR%2BzYvwL%2BgwpcScvwY6pgGhtabmvF0jc9yLYD5s4hv0ner14hcB7a%2B9lPq1ycZUmXFXy8lwlIIOhYKNc17TmP5OFemR6J7l%2F%2B%2FeWNXE8IT%2BqWzZYLYJh%2Fa%2FIkMIP1qtLpJwuClzZqZh5z5ruE59%2B0jpe04lLrgkZrukELjctEwjBNtn9O3mrv%2Fql45CRZwXVMIA2uMlsFNkbOglGEuWw9y5%2B4XDPYGmKlZgYgu56PrRMnZazFia&X-Amz-Signature=91e7bba944bafed8e82fdfba1453aab23830eb58b70b18706c35d726249ed3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LE5BP7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6fKBV5xotHVJSmqSDVtVuSntaXUMeKep2qk5zKVBVlAiA15G40qw4098o40uAt%2F6p5sbNoDxabD6zIszXWDZT1gir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM%2FtHhFbVCCMcyt8KxKtwD8kQk9pJgNc2nB%2F6M%2BpHS2pMdvolH0S41v%2F26JUxroFAYXeMjMdGvNCY9WjKqkwmF4ubjK%2BTDvRQVCCmfljI9R4QPodOjiPScTmaLod2EOA4eMRthls6DuhkXDwTqD9E6bbIyUCFJyyqkc3Y1B94C604FKWpoDy6FGep1R4iTQ%2BwIOPTaFEPaqm2w9PbUpyWqTvBotpbMr%2BXkQ4dKepi5TXvx6oGJ%2Fr6CboBqkUol713kHsxSeRVKsWTv5iLYKATctH3ssJHmKbaFphKCtdjdcnBGTqiGEgtLJijnVf0ZBbDC8HPkNUeVuVPEd9CuVWWW6IJZqv9RlleNVbdzFNXgobn3FgiNrmx%2F2PirCMhqKKbO%2BblwCoNUDT%2BulOqzGnRSRVQDclLPCLB8Itxwkbh9XDEPi7zbJoHwNGNgSVTWmBPbC5y%2FhEl540uu3BpQNf7b3SF7gXVuZiNax%2FSPTZbNIavp0cA3E%2B%2FQovf3y9Rk2KyPNbf6HDaHzhIQAdkMIbmrEs5Vs3RRlFamL6ArfKawi0MUEVVoZTjRUIuu8OnlhTTrdV7%2FSW4xQMlUovcia29LvcWm14uWl9md%2FXKq%2Fm%2FzbXCm7p9ABQMEl0gtiYuEwGbs%2FW653MR%2BzYvwL%2BgwpcScvwY6pgGhtabmvF0jc9yLYD5s4hv0ner14hcB7a%2B9lPq1ycZUmXFXy8lwlIIOhYKNc17TmP5OFemR6J7l%2F%2B%2FeWNXE8IT%2BqWzZYLYJh%2Fa%2FIkMIP1qtLpJwuClzZqZh5z5ruE59%2B0jpe04lLrgkZrukELjctEwjBNtn9O3mrv%2Fql45CRZwXVMIA2uMlsFNkbOglGEuWw9y5%2B4XDPYGmKlZgYgu56PrRMnZazFia&X-Amz-Signature=466b0dd79b82c427402272897b7b29dd062313fbfe8ce777f823e9d15642a50e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3LE5BP7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6fKBV5xotHVJSmqSDVtVuSntaXUMeKep2qk5zKVBVlAiA15G40qw4098o40uAt%2F6p5sbNoDxabD6zIszXWDZT1gir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM%2FtHhFbVCCMcyt8KxKtwD8kQk9pJgNc2nB%2F6M%2BpHS2pMdvolH0S41v%2F26JUxroFAYXeMjMdGvNCY9WjKqkwmF4ubjK%2BTDvRQVCCmfljI9R4QPodOjiPScTmaLod2EOA4eMRthls6DuhkXDwTqD9E6bbIyUCFJyyqkc3Y1B94C604FKWpoDy6FGep1R4iTQ%2BwIOPTaFEPaqm2w9PbUpyWqTvBotpbMr%2BXkQ4dKepi5TXvx6oGJ%2Fr6CboBqkUol713kHsxSeRVKsWTv5iLYKATctH3ssJHmKbaFphKCtdjdcnBGTqiGEgtLJijnVf0ZBbDC8HPkNUeVuVPEd9CuVWWW6IJZqv9RlleNVbdzFNXgobn3FgiNrmx%2F2PirCMhqKKbO%2BblwCoNUDT%2BulOqzGnRSRVQDclLPCLB8Itxwkbh9XDEPi7zbJoHwNGNgSVTWmBPbC5y%2FhEl540uu3BpQNf7b3SF7gXVuZiNax%2FSPTZbNIavp0cA3E%2B%2FQovf3y9Rk2KyPNbf6HDaHzhIQAdkMIbmrEs5Vs3RRlFamL6ArfKawi0MUEVVoZTjRUIuu8OnlhTTrdV7%2FSW4xQMlUovcia29LvcWm14uWl9md%2FXKq%2Fm%2FzbXCm7p9ABQMEl0gtiYuEwGbs%2FW653MR%2BzYvwL%2BgwpcScvwY6pgGhtabmvF0jc9yLYD5s4hv0ner14hcB7a%2B9lPq1ycZUmXFXy8lwlIIOhYKNc17TmP5OFemR6J7l%2F%2B%2FeWNXE8IT%2BqWzZYLYJh%2Fa%2FIkMIP1qtLpJwuClzZqZh5z5ruE59%2B0jpe04lLrgkZrukELjctEwjBNtn9O3mrv%2Fql45CRZwXVMIA2uMlsFNkbOglGEuWw9y5%2B4XDPYGmKlZgYgu56PrRMnZazFia&X-Amz-Signature=c0deb73d735369c82374e084c6c9392a1b6aa8024664d84d4854919a20b81aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
