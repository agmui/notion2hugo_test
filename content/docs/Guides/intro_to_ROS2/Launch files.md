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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPCJXKQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNEBV7I5l3iiXMYtuAJgLJpfkZ1tHx7QLgX38xF8jQ8wIhAMuv%2FK5t7QyZCR%2Bu0B3ofT%2Fqg8QS9AgOnxAFYYXcFlVHKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNlO052%2BktuxtDsM0q3AMORc3y8VrOmwi3YRoT5gIuWbgCetAmU%2FMatBzLgfdU1ATlQvHb9JlrLMb89Q2ebAJWkFZUJagtUA5%2FMGC6o6417OSFtSWNIyPUSH9SZk%2BMjtXtf4RAMoJ2GZ43pEaIEFuXDj7Iorsit91zkz1HhdvvSzQXf0ixv%2Bh7rD9PR3TIAsUss9q%2F4wW%2Bubklgupm58kaw41aG6sg%2FLlr0egpIAsd%2B89lUVKMTsHYREKHyf7VWem8JaJdiP%2BAhSCD7gRDs06SPIn0CjYwWghfwIY5g%2FIQ6p8s3CWCCsngtW486exHvBjlrtVcx6X53IWnb%2FMd1KYwKPTlY%2F9mB9FwEcU%2FBAd%2FQ7rRAZhh9OkrQEsdJR8en3oFPgyuZV2Q7FA9TBOl7bSlyky1MGx89Fb89GzGqCG84e6%2F08TERrGMmUV127jdT6bOa5djc4gCpEiJvLVBRuZPFr8GZNEGjfvlAzFoI%2FgS2M50Du81m1YpTOinkN7oIbUnfEGmnSq4LeaTv2%2B33h2hbpwtvrmNOjnrLOYZ1tn4pjh0%2FmJA2ns6Gnemv2S25U7TjwgfZJYLg3gnM1zolQoXB8u81X4tY1Vb1%2FN9d%2B1xiuzymFmCLqVdy9oscox5ZqWUPevTjK8rmtD8lDC%2B8PjABjqkAcW9C4iVXpyss1L93cXUa4Yxza%2Bw13DbgnJGfzEsE75Ev41Df5iGMB2tBnFhss0M4liQExMjB6PYPKU3BCJC1UnqCkhGGQ8oPnBq%2FHpqCriejoTmPn4X2gFwtJgeBSACUT5kchBjhXwAPujboKP8e7iT%2BM8MZ6ZtOpsa9taaGdqomimUcl02pl8Z5LxY1KGtFhy6EZPAoEMydqn8MJw8En5%2B3b%2Fa&X-Amz-Signature=1a7ee326964ff6833e55d3f3d1db5f7e4d5f79f57f5c5fc39eae94cc48c4c603&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPCJXKQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNEBV7I5l3iiXMYtuAJgLJpfkZ1tHx7QLgX38xF8jQ8wIhAMuv%2FK5t7QyZCR%2Bu0B3ofT%2Fqg8QS9AgOnxAFYYXcFlVHKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNlO052%2BktuxtDsM0q3AMORc3y8VrOmwi3YRoT5gIuWbgCetAmU%2FMatBzLgfdU1ATlQvHb9JlrLMb89Q2ebAJWkFZUJagtUA5%2FMGC6o6417OSFtSWNIyPUSH9SZk%2BMjtXtf4RAMoJ2GZ43pEaIEFuXDj7Iorsit91zkz1HhdvvSzQXf0ixv%2Bh7rD9PR3TIAsUss9q%2F4wW%2Bubklgupm58kaw41aG6sg%2FLlr0egpIAsd%2B89lUVKMTsHYREKHyf7VWem8JaJdiP%2BAhSCD7gRDs06SPIn0CjYwWghfwIY5g%2FIQ6p8s3CWCCsngtW486exHvBjlrtVcx6X53IWnb%2FMd1KYwKPTlY%2F9mB9FwEcU%2FBAd%2FQ7rRAZhh9OkrQEsdJR8en3oFPgyuZV2Q7FA9TBOl7bSlyky1MGx89Fb89GzGqCG84e6%2F08TERrGMmUV127jdT6bOa5djc4gCpEiJvLVBRuZPFr8GZNEGjfvlAzFoI%2FgS2M50Du81m1YpTOinkN7oIbUnfEGmnSq4LeaTv2%2B33h2hbpwtvrmNOjnrLOYZ1tn4pjh0%2FmJA2ns6Gnemv2S25U7TjwgfZJYLg3gnM1zolQoXB8u81X4tY1Vb1%2FN9d%2B1xiuzymFmCLqVdy9oscox5ZqWUPevTjK8rmtD8lDC%2B8PjABjqkAcW9C4iVXpyss1L93cXUa4Yxza%2Bw13DbgnJGfzEsE75Ev41Df5iGMB2tBnFhss0M4liQExMjB6PYPKU3BCJC1UnqCkhGGQ8oPnBq%2FHpqCriejoTmPn4X2gFwtJgeBSACUT5kchBjhXwAPujboKP8e7iT%2BM8MZ6ZtOpsa9taaGdqomimUcl02pl8Z5LxY1KGtFhy6EZPAoEMydqn8MJw8En5%2B3b%2Fa&X-Amz-Signature=3356ac6a9deaee75d2234ccf736853498913ccac3bf779bf1ee80326d6223652&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPCJXKQ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNEBV7I5l3iiXMYtuAJgLJpfkZ1tHx7QLgX38xF8jQ8wIhAMuv%2FK5t7QyZCR%2Bu0B3ofT%2Fqg8QS9AgOnxAFYYXcFlVHKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNlO052%2BktuxtDsM0q3AMORc3y8VrOmwi3YRoT5gIuWbgCetAmU%2FMatBzLgfdU1ATlQvHb9JlrLMb89Q2ebAJWkFZUJagtUA5%2FMGC6o6417OSFtSWNIyPUSH9SZk%2BMjtXtf4RAMoJ2GZ43pEaIEFuXDj7Iorsit91zkz1HhdvvSzQXf0ixv%2Bh7rD9PR3TIAsUss9q%2F4wW%2Bubklgupm58kaw41aG6sg%2FLlr0egpIAsd%2B89lUVKMTsHYREKHyf7VWem8JaJdiP%2BAhSCD7gRDs06SPIn0CjYwWghfwIY5g%2FIQ6p8s3CWCCsngtW486exHvBjlrtVcx6X53IWnb%2FMd1KYwKPTlY%2F9mB9FwEcU%2FBAd%2FQ7rRAZhh9OkrQEsdJR8en3oFPgyuZV2Q7FA9TBOl7bSlyky1MGx89Fb89GzGqCG84e6%2F08TERrGMmUV127jdT6bOa5djc4gCpEiJvLVBRuZPFr8GZNEGjfvlAzFoI%2FgS2M50Du81m1YpTOinkN7oIbUnfEGmnSq4LeaTv2%2B33h2hbpwtvrmNOjnrLOYZ1tn4pjh0%2FmJA2ns6Gnemv2S25U7TjwgfZJYLg3gnM1zolQoXB8u81X4tY1Vb1%2FN9d%2B1xiuzymFmCLqVdy9oscox5ZqWUPevTjK8rmtD8lDC%2B8PjABjqkAcW9C4iVXpyss1L93cXUa4Yxza%2Bw13DbgnJGfzEsE75Ev41Df5iGMB2tBnFhss0M4liQExMjB6PYPKU3BCJC1UnqCkhGGQ8oPnBq%2FHpqCriejoTmPn4X2gFwtJgeBSACUT5kchBjhXwAPujboKP8e7iT%2BM8MZ6ZtOpsa9taaGdqomimUcl02pl8Z5LxY1KGtFhy6EZPAoEMydqn8MJw8En5%2B3b%2Fa&X-Amz-Signature=1861550a10f563d458f7d856066c6f939e2563274fbb8137ef452d833a327138&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
