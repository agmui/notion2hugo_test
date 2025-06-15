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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAAFTWF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFXZuPZUNk8Nb6LPqjbTeEKFJf7qD0d2E%2FL7RAejutiIAiAiPLRGdHvU78SeqBgfXr5iycJglBkoOK2D8Fuhmm7zcCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMBBZaB2OO6X4fOrnrKtwDgRVdJ8NL4JdQ0eA%2BSI%2FiybtoV7PuXVBAnBhHcsHmB2%2FZYixV%2BM0QDjXI1%2Bzz1hm3PwdjTXkFtdjqTJKawSciyykTOJUHm3q8q2SdpNyc1qxpOSLg%2FVMRv4ylQeIO2eG3SHwGranemaqnRJqXDET%2B9gsdZGWg%2Fb0vStBN1cqAltiXNMgQUOf5BVgbmubCjIb%2FWXttBe%2BVXm1PORV2I2u7k43h%2Be%2Ft79r%2FaWffq0OLqQLo54HYmyZtrjJBsj3VV38z1lh6X6JJEfjMf6IQNURYLlRpIp7lysR5TDuSHKKFPcpfep%2BD9b59jnsSGFCuzy6ztaami%2BpV7LMIMMWE9h9w2DVMtyiOw2pZITjMDlDwzBYyEDCJq0Sc2U32HbnhmcP6HebxibJiy3SvzoGi3LShvyHindlHDSt37ZvhgUbh%2F1NLZoz2dqAqcdNKZmaxqD%2BiIKZHWpqSc5uMtsPshCaBsEzAp5wdpUxE7Hr4%2FvUvE534TXAEDWdSpkaThVLWulU18cTLNQBXNE9D8utDI%2FB9%2FSBPgT5VCR5%2BQqro%2BLeEr3pvV8tSkawxHMMujzC9d3lqR13DhXlLPPpyaCA1jNyaBG7BEX31wgfne86uhkGUsOLAzA%2F66nGeWrxVzKow96a8wgY6pgElI1a2sxd%2BRc9nSsO1h6WgvJSH96TqDBoqb16xWmNJF2E81%2BkDUh99fvdgv4289577Bcamgaq5XjOwRSJF%2BqqnuOjzUSeioj4GFeWRCCkTybaxf4wThyARerMRV7DMoKKF9AEFzkvLrns1eZ0keUekuXZv9rSJYvtkc3cQ1MXDFJ1yjP5Lfuo59iBeUCoID0iZap%2B6%2F7XB524P6ywf0DrtMnE611vm&X-Amz-Signature=403db1eb596888b5c626c1f2ceff92b6f239276cd8b61896119abbebe7777829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAAFTWF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFXZuPZUNk8Nb6LPqjbTeEKFJf7qD0d2E%2FL7RAejutiIAiAiPLRGdHvU78SeqBgfXr5iycJglBkoOK2D8Fuhmm7zcCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMBBZaB2OO6X4fOrnrKtwDgRVdJ8NL4JdQ0eA%2BSI%2FiybtoV7PuXVBAnBhHcsHmB2%2FZYixV%2BM0QDjXI1%2Bzz1hm3PwdjTXkFtdjqTJKawSciyykTOJUHm3q8q2SdpNyc1qxpOSLg%2FVMRv4ylQeIO2eG3SHwGranemaqnRJqXDET%2B9gsdZGWg%2Fb0vStBN1cqAltiXNMgQUOf5BVgbmubCjIb%2FWXttBe%2BVXm1PORV2I2u7k43h%2Be%2Ft79r%2FaWffq0OLqQLo54HYmyZtrjJBsj3VV38z1lh6X6JJEfjMf6IQNURYLlRpIp7lysR5TDuSHKKFPcpfep%2BD9b59jnsSGFCuzy6ztaami%2BpV7LMIMMWE9h9w2DVMtyiOw2pZITjMDlDwzBYyEDCJq0Sc2U32HbnhmcP6HebxibJiy3SvzoGi3LShvyHindlHDSt37ZvhgUbh%2F1NLZoz2dqAqcdNKZmaxqD%2BiIKZHWpqSc5uMtsPshCaBsEzAp5wdpUxE7Hr4%2FvUvE534TXAEDWdSpkaThVLWulU18cTLNQBXNE9D8utDI%2FB9%2FSBPgT5VCR5%2BQqro%2BLeEr3pvV8tSkawxHMMujzC9d3lqR13DhXlLPPpyaCA1jNyaBG7BEX31wgfne86uhkGUsOLAzA%2F66nGeWrxVzKow96a8wgY6pgElI1a2sxd%2BRc9nSsO1h6WgvJSH96TqDBoqb16xWmNJF2E81%2BkDUh99fvdgv4289577Bcamgaq5XjOwRSJF%2BqqnuOjzUSeioj4GFeWRCCkTybaxf4wThyARerMRV7DMoKKF9AEFzkvLrns1eZ0keUekuXZv9rSJYvtkc3cQ1MXDFJ1yjP5Lfuo59iBeUCoID0iZap%2B6%2F7XB524P6ywf0DrtMnE611vm&X-Amz-Signature=1e6f1907b2e6649397857d2f91c3369f9ef15b2ee7423c5ec3b9c14090d7e630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAAFTWF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFXZuPZUNk8Nb6LPqjbTeEKFJf7qD0d2E%2FL7RAejutiIAiAiPLRGdHvU78SeqBgfXr5iycJglBkoOK2D8Fuhmm7zcCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMBBZaB2OO6X4fOrnrKtwDgRVdJ8NL4JdQ0eA%2BSI%2FiybtoV7PuXVBAnBhHcsHmB2%2FZYixV%2BM0QDjXI1%2Bzz1hm3PwdjTXkFtdjqTJKawSciyykTOJUHm3q8q2SdpNyc1qxpOSLg%2FVMRv4ylQeIO2eG3SHwGranemaqnRJqXDET%2B9gsdZGWg%2Fb0vStBN1cqAltiXNMgQUOf5BVgbmubCjIb%2FWXttBe%2BVXm1PORV2I2u7k43h%2Be%2Ft79r%2FaWffq0OLqQLo54HYmyZtrjJBsj3VV38z1lh6X6JJEfjMf6IQNURYLlRpIp7lysR5TDuSHKKFPcpfep%2BD9b59jnsSGFCuzy6ztaami%2BpV7LMIMMWE9h9w2DVMtyiOw2pZITjMDlDwzBYyEDCJq0Sc2U32HbnhmcP6HebxibJiy3SvzoGi3LShvyHindlHDSt37ZvhgUbh%2F1NLZoz2dqAqcdNKZmaxqD%2BiIKZHWpqSc5uMtsPshCaBsEzAp5wdpUxE7Hr4%2FvUvE534TXAEDWdSpkaThVLWulU18cTLNQBXNE9D8utDI%2FB9%2FSBPgT5VCR5%2BQqro%2BLeEr3pvV8tSkawxHMMujzC9d3lqR13DhXlLPPpyaCA1jNyaBG7BEX31wgfne86uhkGUsOLAzA%2F66nGeWrxVzKow96a8wgY6pgElI1a2sxd%2BRc9nSsO1h6WgvJSH96TqDBoqb16xWmNJF2E81%2BkDUh99fvdgv4289577Bcamgaq5XjOwRSJF%2BqqnuOjzUSeioj4GFeWRCCkTybaxf4wThyARerMRV7DMoKKF9AEFzkvLrns1eZ0keUekuXZv9rSJYvtkc3cQ1MXDFJ1yjP5Lfuo59iBeUCoID0iZap%2B6%2F7XB524P6ywf0DrtMnE611vm&X-Amz-Signature=3a806459b1f87c472c3212f29aca08fc8c173560fa98efa52bc9175623fd2e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
