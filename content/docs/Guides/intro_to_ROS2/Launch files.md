---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBMRS35%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCh%2FBw%2BvFq%2FmvEuo6aIZWRWpqgj%2Fn0M%2BbZAeCHsnE8syAIhANciaOKxquhq7g3JlcCxufFoCSnA2tY1pPRpUgC0X1tLKv8DCGgQABoMNjM3NDIzMTgzODA1Igx1Xq%2BHW917KfZ2Ba4q3AMh0emhoo7cjhikkyHFk%2F9uzqrdef%2B143CV%2FCm2POqmgpkWHSsDXzVUHRz2rXH4JYxS4CzYO9nx%2BSAdpq7%2Ba2rupkx1eg1DSycTW7ps330hzxYXD1E0sPJJVhPIIlmB1LTc3Bt%2BxXAjq%2F8R1nFHgSEwl1gr8Aw%2Ba%2ByuO19uo6k2%2Fa%2BE6QyJQuBvQDPyZ4wvV0lbac1L2k1tj0ubDPtFEn4Z1u0yWqbVkHcCKWQSMu6BNa77rJyWCXgMty1qfxoqQ5knGB3K6dDaHCJkkzD3o7YW%2FQJnEx2wbL4KSEhYHk5nlTEqdM43ehCKTL0PupZrSHmv5n5OXXdi3cso2roo21QFEb5a1KXithD0dwHNenoHwnpDX%2BFhiKdVnaioYFPXquIVO1pEO3YlonXMa8SGSaLzBugwBD9kKoA0dPa6gLC8uhw114kcRqbdvFVInL%2FTqE2S8m8sPdWNvTKVaQeb%2Fy8H0wdo%2F9H2ylGwTeyN4%2FdxRbVkNU8Hfgvk%2FsQpVzI%2Fg0SbiCPJCKQRh28Fvp10AdMPQ7lGMSzJNTx6PW1KViGITCF%2BjAzCsoa2SvFOZUn6B6HZQzsYLoiHyxrvoskjq96c9MDKXB%2FQw2XRaMvYuzORkQe%2BkomlNdF7OJTE%2FjCFw5XEBjqkAfew0fgYiWNOxmDhLIe9zi0ro9ZPyn7uCFeMEv4H%2B1KmPh%2FYcYv8y8k5tjZDtn%2BTa0gzljyXiNrV0Rlh47%2F7GoHmyw4u1wBrpjV1%2Bb9zLXTwQM9fTcj%2Ba1u%2FWT1q7M0mtJg4mBZ%2Bj1y5yWUjyBwc6PrVyHH9dGr7oiJ33tuYVEXOm6k2h038UrdYgrq5gera5n7A0XZrPgnG14OzaZnsrEKCXhAi&X-Amz-Signature=af3dcbd1c73f2eb5c699ae67882c98166cae796efbd42d0ffcaf3177e1c1ccf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBMRS35%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCh%2FBw%2BvFq%2FmvEuo6aIZWRWpqgj%2Fn0M%2BbZAeCHsnE8syAIhANciaOKxquhq7g3JlcCxufFoCSnA2tY1pPRpUgC0X1tLKv8DCGgQABoMNjM3NDIzMTgzODA1Igx1Xq%2BHW917KfZ2Ba4q3AMh0emhoo7cjhikkyHFk%2F9uzqrdef%2B143CV%2FCm2POqmgpkWHSsDXzVUHRz2rXH4JYxS4CzYO9nx%2BSAdpq7%2Ba2rupkx1eg1DSycTW7ps330hzxYXD1E0sPJJVhPIIlmB1LTc3Bt%2BxXAjq%2F8R1nFHgSEwl1gr8Aw%2Ba%2ByuO19uo6k2%2Fa%2BE6QyJQuBvQDPyZ4wvV0lbac1L2k1tj0ubDPtFEn4Z1u0yWqbVkHcCKWQSMu6BNa77rJyWCXgMty1qfxoqQ5knGB3K6dDaHCJkkzD3o7YW%2FQJnEx2wbL4KSEhYHk5nlTEqdM43ehCKTL0PupZrSHmv5n5OXXdi3cso2roo21QFEb5a1KXithD0dwHNenoHwnpDX%2BFhiKdVnaioYFPXquIVO1pEO3YlonXMa8SGSaLzBugwBD9kKoA0dPa6gLC8uhw114kcRqbdvFVInL%2FTqE2S8m8sPdWNvTKVaQeb%2Fy8H0wdo%2F9H2ylGwTeyN4%2FdxRbVkNU8Hfgvk%2FsQpVzI%2Fg0SbiCPJCKQRh28Fvp10AdMPQ7lGMSzJNTx6PW1KViGITCF%2BjAzCsoa2SvFOZUn6B6HZQzsYLoiHyxrvoskjq96c9MDKXB%2FQw2XRaMvYuzORkQe%2BkomlNdF7OJTE%2FjCFw5XEBjqkAfew0fgYiWNOxmDhLIe9zi0ro9ZPyn7uCFeMEv4H%2B1KmPh%2FYcYv8y8k5tjZDtn%2BTa0gzljyXiNrV0Rlh47%2F7GoHmyw4u1wBrpjV1%2Bb9zLXTwQM9fTcj%2Ba1u%2FWT1q7M0mtJg4mBZ%2Bj1y5yWUjyBwc6PrVyHH9dGr7oiJ33tuYVEXOm6k2h038UrdYgrq5gera5n7A0XZrPgnG14OzaZnsrEKCXhAi&X-Amz-Signature=73b535f9368903e737e294a041e698c915dea1ad1d90ed3779a48c6076998dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBMRS35%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCh%2FBw%2BvFq%2FmvEuo6aIZWRWpqgj%2Fn0M%2BbZAeCHsnE8syAIhANciaOKxquhq7g3JlcCxufFoCSnA2tY1pPRpUgC0X1tLKv8DCGgQABoMNjM3NDIzMTgzODA1Igx1Xq%2BHW917KfZ2Ba4q3AMh0emhoo7cjhikkyHFk%2F9uzqrdef%2B143CV%2FCm2POqmgpkWHSsDXzVUHRz2rXH4JYxS4CzYO9nx%2BSAdpq7%2Ba2rupkx1eg1DSycTW7ps330hzxYXD1E0sPJJVhPIIlmB1LTc3Bt%2BxXAjq%2F8R1nFHgSEwl1gr8Aw%2Ba%2ByuO19uo6k2%2Fa%2BE6QyJQuBvQDPyZ4wvV0lbac1L2k1tj0ubDPtFEn4Z1u0yWqbVkHcCKWQSMu6BNa77rJyWCXgMty1qfxoqQ5knGB3K6dDaHCJkkzD3o7YW%2FQJnEx2wbL4KSEhYHk5nlTEqdM43ehCKTL0PupZrSHmv5n5OXXdi3cso2roo21QFEb5a1KXithD0dwHNenoHwnpDX%2BFhiKdVnaioYFPXquIVO1pEO3YlonXMa8SGSaLzBugwBD9kKoA0dPa6gLC8uhw114kcRqbdvFVInL%2FTqE2S8m8sPdWNvTKVaQeb%2Fy8H0wdo%2F9H2ylGwTeyN4%2FdxRbVkNU8Hfgvk%2FsQpVzI%2Fg0SbiCPJCKQRh28Fvp10AdMPQ7lGMSzJNTx6PW1KViGITCF%2BjAzCsoa2SvFOZUn6B6HZQzsYLoiHyxrvoskjq96c9MDKXB%2FQw2XRaMvYuzORkQe%2BkomlNdF7OJTE%2FjCFw5XEBjqkAfew0fgYiWNOxmDhLIe9zi0ro9ZPyn7uCFeMEv4H%2B1KmPh%2FYcYv8y8k5tjZDtn%2BTa0gzljyXiNrV0Rlh47%2F7GoHmyw4u1wBrpjV1%2Bb9zLXTwQM9fTcj%2Ba1u%2FWT1q7M0mtJg4mBZ%2Bj1y5yWUjyBwc6PrVyHH9dGr7oiJ33tuYVEXOm6k2h038UrdYgrq5gera5n7A0XZrPgnG14OzaZnsrEKCXhAi&X-Amz-Signature=0ec44ef1eef3ffb1ffab3e2fcffe1e5516fc91f0e03dd7d15f2a5317ee41f9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
