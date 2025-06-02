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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMY4VYRC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH0YY3%2BGy%2FVHjzPNKR05iQsfddGnT%2Fiep99%2FBIn%2BbJqDAiAVFAj%2FMphAKimmpleFBctvyd4QNtnZfKVgmFzOJ5RLFiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FlFzfWtsCMJ6rqQ1KtwDl4eJO46OBC503QrXaN8Q17tssSBUmZMQsydAeyK55wnBmg6uqU5TPMoKpVBM6Ebn78pTIyQZondeyer7TYZ9UKNiOKMOvIv0FS2KM7pMkqxYZ6f9gdWOgneTGmGJkUPdNJ6crjPPRDH26%2F%2B0OarAFiWpex1J88xFFFzdJl2Xg6avJe3X8q5zcu54ohjf%2FoGZ5xpHFN9O1x16IDw4Vkgb6VM9Evr0RBnUvrZZxVig8wUkvrVGGTbCHRZ%2BdUpVJrHiyXwP3LEmA63puOqlTvcrTokEnVyz1n7OMQTzXVnqBFBZQ9wAlUeUwSOuq84ucei8k8laqH3CXrdLxgqnhiPlagLbYmFzgLMxtilKZgLArzXEloJrDHCLRrBSXXGEUM2o6L6MHbgwgT7WlFG1%2B9iP0NCSoLT07ORknWwQ92q2wvSSNfkWgKZVFK9%2FjpEXQmB5B3tk19kMHwRGYMI7AAZTxR%2BRjAMEUuRM2F23zf%2F20CWkE8kXZQYkcpB%2BZWZzbXgEIz6sJza1b5J%2FMp4lBzuA3MA4JNrUpD8sLHybIJ3e3gj5TNJdmd1HE8uDKvl7HgTxIdu4Dzsiol1TviLU6w2qOfAoqHOdRAgVacJCdSoNfIatAa3ZGS438vwjEuQw2K%2F0wQY6pgGBC0WoWCjt3Ak6YvADwPtpZlN%2Bk67SEqloHaBrZr3qiahH2iH9RkvAQCB2RSlLXLXQxw2%2F3umsXJOWRK%2FeTrRoa052%2BgjnmlEMMEvVcNyJMqh1aul%2B2O3mnZgbxeFly02TRY%2FKdw6qznRnyyTJR6Hn5rCT7QKUUfS%2Bsa4ZAphrhS7xncEDPeo39rgvb56AtzC9p%2B6uU%2B6E1kM%2FAP7a%2Bf5PFDPMqb0L&X-Amz-Signature=1f283f09ccbedfc0ac17010ca9d49038a66064f0c26c2bde6e656fa38103740c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMY4VYRC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH0YY3%2BGy%2FVHjzPNKR05iQsfddGnT%2Fiep99%2FBIn%2BbJqDAiAVFAj%2FMphAKimmpleFBctvyd4QNtnZfKVgmFzOJ5RLFiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FlFzfWtsCMJ6rqQ1KtwDl4eJO46OBC503QrXaN8Q17tssSBUmZMQsydAeyK55wnBmg6uqU5TPMoKpVBM6Ebn78pTIyQZondeyer7TYZ9UKNiOKMOvIv0FS2KM7pMkqxYZ6f9gdWOgneTGmGJkUPdNJ6crjPPRDH26%2F%2B0OarAFiWpex1J88xFFFzdJl2Xg6avJe3X8q5zcu54ohjf%2FoGZ5xpHFN9O1x16IDw4Vkgb6VM9Evr0RBnUvrZZxVig8wUkvrVGGTbCHRZ%2BdUpVJrHiyXwP3LEmA63puOqlTvcrTokEnVyz1n7OMQTzXVnqBFBZQ9wAlUeUwSOuq84ucei8k8laqH3CXrdLxgqnhiPlagLbYmFzgLMxtilKZgLArzXEloJrDHCLRrBSXXGEUM2o6L6MHbgwgT7WlFG1%2B9iP0NCSoLT07ORknWwQ92q2wvSSNfkWgKZVFK9%2FjpEXQmB5B3tk19kMHwRGYMI7AAZTxR%2BRjAMEUuRM2F23zf%2F20CWkE8kXZQYkcpB%2BZWZzbXgEIz6sJza1b5J%2FMp4lBzuA3MA4JNrUpD8sLHybIJ3e3gj5TNJdmd1HE8uDKvl7HgTxIdu4Dzsiol1TviLU6w2qOfAoqHOdRAgVacJCdSoNfIatAa3ZGS438vwjEuQw2K%2F0wQY6pgGBC0WoWCjt3Ak6YvADwPtpZlN%2Bk67SEqloHaBrZr3qiahH2iH9RkvAQCB2RSlLXLXQxw2%2F3umsXJOWRK%2FeTrRoa052%2BgjnmlEMMEvVcNyJMqh1aul%2B2O3mnZgbxeFly02TRY%2FKdw6qznRnyyTJR6Hn5rCT7QKUUfS%2Bsa4ZAphrhS7xncEDPeo39rgvb56AtzC9p%2B6uU%2B6E1kM%2FAP7a%2Bf5PFDPMqb0L&X-Amz-Signature=e02bc484135c0fa541a1caebd0f567f173baea1290ad96ceb06a4139f03175b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMY4VYRC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T042033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH0YY3%2BGy%2FVHjzPNKR05iQsfddGnT%2Fiep99%2FBIn%2BbJqDAiAVFAj%2FMphAKimmpleFBctvyd4QNtnZfKVgmFzOJ5RLFiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FlFzfWtsCMJ6rqQ1KtwDl4eJO46OBC503QrXaN8Q17tssSBUmZMQsydAeyK55wnBmg6uqU5TPMoKpVBM6Ebn78pTIyQZondeyer7TYZ9UKNiOKMOvIv0FS2KM7pMkqxYZ6f9gdWOgneTGmGJkUPdNJ6crjPPRDH26%2F%2B0OarAFiWpex1J88xFFFzdJl2Xg6avJe3X8q5zcu54ohjf%2FoGZ5xpHFN9O1x16IDw4Vkgb6VM9Evr0RBnUvrZZxVig8wUkvrVGGTbCHRZ%2BdUpVJrHiyXwP3LEmA63puOqlTvcrTokEnVyz1n7OMQTzXVnqBFBZQ9wAlUeUwSOuq84ucei8k8laqH3CXrdLxgqnhiPlagLbYmFzgLMxtilKZgLArzXEloJrDHCLRrBSXXGEUM2o6L6MHbgwgT7WlFG1%2B9iP0NCSoLT07ORknWwQ92q2wvSSNfkWgKZVFK9%2FjpEXQmB5B3tk19kMHwRGYMI7AAZTxR%2BRjAMEUuRM2F23zf%2F20CWkE8kXZQYkcpB%2BZWZzbXgEIz6sJza1b5J%2FMp4lBzuA3MA4JNrUpD8sLHybIJ3e3gj5TNJdmd1HE8uDKvl7HgTxIdu4Dzsiol1TviLU6w2qOfAoqHOdRAgVacJCdSoNfIatAa3ZGS438vwjEuQw2K%2F0wQY6pgGBC0WoWCjt3Ak6YvADwPtpZlN%2Bk67SEqloHaBrZr3qiahH2iH9RkvAQCB2RSlLXLXQxw2%2F3umsXJOWRK%2FeTrRoa052%2BgjnmlEMMEvVcNyJMqh1aul%2B2O3mnZgbxeFly02TRY%2FKdw6qznRnyyTJR6Hn5rCT7QKUUfS%2Bsa4ZAphrhS7xncEDPeo39rgvb56AtzC9p%2B6uU%2B6E1kM%2FAP7a%2Bf5PFDPMqb0L&X-Amz-Signature=89b641d10873031f63a67138c900b70f06238af0f240f0f8bc54a0f3de9e0226&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
