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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDNUPE5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnzWDbu69zfKS110Q7mlOAd%2BcMXmZ8rL03P9WPHPyJ1gIhAIE%2BFEtEQBJ4yacdSDQLwnaC1lmi%2FiavaF1aKJO9RotQKv8DCDIQABoMNjM3NDIzMTgzODA1IgzKWO46IxxrUum%2BJ0gq3AN%2BM9fRf1ArjexMKOkavpv0VWHnZnyfWrIf1IuqSMeMSQjWTCCntzvUXfellnBqKNpYtRILxj%2BoH44CKSN8snvleKHvoO7yY9Vd5vLdKPrLux6UAFS40v2WHnTLVibQLSXsC9tyql%2Bf7%2BK5ZbrJPFz7blPFwxso5TKDqIe1X%2BdfIH4x2l%2BFf3Wvjgfnl%2BP3oBSo%2FSB5F83cdIC3m2oj7b%2FeBzvzQTIM3rDcire5srCpsZvn1KBVbiMp4sfmPW2XHc62ZRLbVSqmXBdzMAsashZconc6DoSvgT7ifbBRCZSL8LzZrUcpgLC%2F03kUHyb3wLKktBekXH9mz7c8yJtc1RECRdEAobzGg1LYccg4Yr0MZ5OkznFBLKglXw10BhCH6B3OlH2D7RPeurouXOio%2Fh%2BLltpeQVTdDjO1Sir4nOGpHFsEswaWl5nPZfrETpTySbGAu%2BYF0WHUmySx%2FLQwNEMoqOP%2Bs2oMTgNZkdc5QEvBHs%2Bf%2BufgDMCpXbAwZSVhTcMUva7aeQS821srNaQ%2B6t7xHLoec1naNbTIyBk7ZSF%2FW70DKeiaPyg21jr%2FWgutuCYlsa6MIIGj7Ds2JMIPcmJ5SaB7X0iqkWTtrMk40LIY4H5tVM3qDZbOr5s4EzCmyMW%2FBjqkAX4KZ3PTVPFc0AREEgF6ZnvIsxO4br9wDaDp4w%2F9nIFvOJVqgG0syX7xI7o2a8kjb4htpwS0MIBro6W4LTd45uTkTJt%2FHCqt0ls6rNFCxGSHMtHXAx4Mo1UZ1PgVWJ2SvMhVbbq5VazBw%2FHbzje31sea69%2BRqTUovOjv6eEFzquk4jetzuChEEvgMNkLHyrdFaxfrM4JAZHHjZaj8q0ddyv9XJnW&X-Amz-Signature=e5c1f8f4702de7e4fd74a760cddb53ace07ba0181782f6af5f665bcc53ee7e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDNUPE5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnzWDbu69zfKS110Q7mlOAd%2BcMXmZ8rL03P9WPHPyJ1gIhAIE%2BFEtEQBJ4yacdSDQLwnaC1lmi%2FiavaF1aKJO9RotQKv8DCDIQABoMNjM3NDIzMTgzODA1IgzKWO46IxxrUum%2BJ0gq3AN%2BM9fRf1ArjexMKOkavpv0VWHnZnyfWrIf1IuqSMeMSQjWTCCntzvUXfellnBqKNpYtRILxj%2BoH44CKSN8snvleKHvoO7yY9Vd5vLdKPrLux6UAFS40v2WHnTLVibQLSXsC9tyql%2Bf7%2BK5ZbrJPFz7blPFwxso5TKDqIe1X%2BdfIH4x2l%2BFf3Wvjgfnl%2BP3oBSo%2FSB5F83cdIC3m2oj7b%2FeBzvzQTIM3rDcire5srCpsZvn1KBVbiMp4sfmPW2XHc62ZRLbVSqmXBdzMAsashZconc6DoSvgT7ifbBRCZSL8LzZrUcpgLC%2F03kUHyb3wLKktBekXH9mz7c8yJtc1RECRdEAobzGg1LYccg4Yr0MZ5OkznFBLKglXw10BhCH6B3OlH2D7RPeurouXOio%2Fh%2BLltpeQVTdDjO1Sir4nOGpHFsEswaWl5nPZfrETpTySbGAu%2BYF0WHUmySx%2FLQwNEMoqOP%2Bs2oMTgNZkdc5QEvBHs%2Bf%2BufgDMCpXbAwZSVhTcMUva7aeQS821srNaQ%2B6t7xHLoec1naNbTIyBk7ZSF%2FW70DKeiaPyg21jr%2FWgutuCYlsa6MIIGj7Ds2JMIPcmJ5SaB7X0iqkWTtrMk40LIY4H5tVM3qDZbOr5s4EzCmyMW%2FBjqkAX4KZ3PTVPFc0AREEgF6ZnvIsxO4br9wDaDp4w%2F9nIFvOJVqgG0syX7xI7o2a8kjb4htpwS0MIBro6W4LTd45uTkTJt%2FHCqt0ls6rNFCxGSHMtHXAx4Mo1UZ1PgVWJ2SvMhVbbq5VazBw%2FHbzje31sea69%2BRqTUovOjv6eEFzquk4jetzuChEEvgMNkLHyrdFaxfrM4JAZHHjZaj8q0ddyv9XJnW&X-Amz-Signature=049da1a5fbdea5f0de03b43c4060c9551e271968cd5366c2635f935244a21d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDNUPE5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnzWDbu69zfKS110Q7mlOAd%2BcMXmZ8rL03P9WPHPyJ1gIhAIE%2BFEtEQBJ4yacdSDQLwnaC1lmi%2FiavaF1aKJO9RotQKv8DCDIQABoMNjM3NDIzMTgzODA1IgzKWO46IxxrUum%2BJ0gq3AN%2BM9fRf1ArjexMKOkavpv0VWHnZnyfWrIf1IuqSMeMSQjWTCCntzvUXfellnBqKNpYtRILxj%2BoH44CKSN8snvleKHvoO7yY9Vd5vLdKPrLux6UAFS40v2WHnTLVibQLSXsC9tyql%2Bf7%2BK5ZbrJPFz7blPFwxso5TKDqIe1X%2BdfIH4x2l%2BFf3Wvjgfnl%2BP3oBSo%2FSB5F83cdIC3m2oj7b%2FeBzvzQTIM3rDcire5srCpsZvn1KBVbiMp4sfmPW2XHc62ZRLbVSqmXBdzMAsashZconc6DoSvgT7ifbBRCZSL8LzZrUcpgLC%2F03kUHyb3wLKktBekXH9mz7c8yJtc1RECRdEAobzGg1LYccg4Yr0MZ5OkznFBLKglXw10BhCH6B3OlH2D7RPeurouXOio%2Fh%2BLltpeQVTdDjO1Sir4nOGpHFsEswaWl5nPZfrETpTySbGAu%2BYF0WHUmySx%2FLQwNEMoqOP%2Bs2oMTgNZkdc5QEvBHs%2Bf%2BufgDMCpXbAwZSVhTcMUva7aeQS821srNaQ%2B6t7xHLoec1naNbTIyBk7ZSF%2FW70DKeiaPyg21jr%2FWgutuCYlsa6MIIGj7Ds2JMIPcmJ5SaB7X0iqkWTtrMk40LIY4H5tVM3qDZbOr5s4EzCmyMW%2FBjqkAX4KZ3PTVPFc0AREEgF6ZnvIsxO4br9wDaDp4w%2F9nIFvOJVqgG0syX7xI7o2a8kjb4htpwS0MIBro6W4LTd45uTkTJt%2FHCqt0ls6rNFCxGSHMtHXAx4Mo1UZ1PgVWJ2SvMhVbbq5VazBw%2FHbzje31sea69%2BRqTUovOjv6eEFzquk4jetzuChEEvgMNkLHyrdFaxfrM4JAZHHjZaj8q0ddyv9XJnW&X-Amz-Signature=816f00dbde966e8a31d6d0b97f6b56de2768c69bac19c671897c9abbcb8493e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
