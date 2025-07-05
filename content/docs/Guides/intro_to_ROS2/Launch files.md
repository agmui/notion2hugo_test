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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSWPCMN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD27nDDHCChuCs5G5UaAZiq7A5JTwrCoe4DpIR2dqSsigIgP9yiFKAB%2Fz9wZqJ%2BKwJdZNFmMLDh1Wu2ssnTuClmFLoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDK%2FKnwCp1nMRZHdbeSrcA9801Q%2FxCeSZ56J65Zk9owJfDRqJ%2F8n4g1m9jc8TyBsnasDwjYxeXnH%2FiRrl1DERWpFfam%2FKgTkUQskTq4GLUphEf8%2BdME4tzksdJeNLSKsfdSuh072eZHTog0F7%2FENwy1zTMIQOWODLQAK9m6OlZNURqstzRbJRd0EfxCt%2FPkJaTjBmXed26Km9ninZjkevIBaG7FFbi5RKELeJzfi2ai%2Fay%2Fxus11R%2Br%2FbTXaui4AubGmZPo%2BI01TLOa1O%2BPVT2natRxMdq5fhbhi0FSQau2aoFlsEjU40ujDQSTQGCaCCYSJz9YfEOqf60kA2k%2BLZD5XZgRsFCPucjjmb4xEm%2BTc1AjgFy4QFt7kBqFWq%2BeU3WlaGoOuSKlt1CB4jVUHDQADozDUFAHRmub9mDZflgf2S4MSOv6gs4pwdzAgC5%2BNvoZyQyVEZx9YA5W6A8lXMemlbKIM4n790qJcrB5IYxEtmAYNEwNb%2BZFc40nh03IiyHNBFsQFc2vSGPpw1ZujJjWqoiU0fLSvh6OKXv7XnQNeLruXNXjvRou%2BTCgzVpleKhE6yE26%2B4Rgpvz1xdXHmowlLYhGMwcv%2BuDqoY%2BKk2F6D186agE6tR%2BZFLYpfDiMy3u9z9U2pw%2FObZ55qMLWFosMGOqUBdmQ46Ko%2FBp9j5bJxCPP0%2FAJkv9WXxOj6rudGzUzaiBzmneXco%2FxY3zrTqZEW7jgeY1u7So%2BzFgkMfEdRForROAmMDrTafNF9jTRys%2B7IXVwNR%2ByLo6IdToeL8%2Bkh%2BCdmpyj2hGk9Fb4WprPuzqUDgIyLOcEDe%2Bsh8S4E60R33ISPYNDsKeGOV1aKV6mObywhjAiCVueccdBqDOvabYUtSS9n73XV&X-Amz-Signature=9eecfcc9dc3278b3b5b048f19a93eb0338ff8a0a3016e9e04b21b2a9aa53ced3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSWPCMN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD27nDDHCChuCs5G5UaAZiq7A5JTwrCoe4DpIR2dqSsigIgP9yiFKAB%2Fz9wZqJ%2BKwJdZNFmMLDh1Wu2ssnTuClmFLoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDK%2FKnwCp1nMRZHdbeSrcA9801Q%2FxCeSZ56J65Zk9owJfDRqJ%2F8n4g1m9jc8TyBsnasDwjYxeXnH%2FiRrl1DERWpFfam%2FKgTkUQskTq4GLUphEf8%2BdME4tzksdJeNLSKsfdSuh072eZHTog0F7%2FENwy1zTMIQOWODLQAK9m6OlZNURqstzRbJRd0EfxCt%2FPkJaTjBmXed26Km9ninZjkevIBaG7FFbi5RKELeJzfi2ai%2Fay%2Fxus11R%2Br%2FbTXaui4AubGmZPo%2BI01TLOa1O%2BPVT2natRxMdq5fhbhi0FSQau2aoFlsEjU40ujDQSTQGCaCCYSJz9YfEOqf60kA2k%2BLZD5XZgRsFCPucjjmb4xEm%2BTc1AjgFy4QFt7kBqFWq%2BeU3WlaGoOuSKlt1CB4jVUHDQADozDUFAHRmub9mDZflgf2S4MSOv6gs4pwdzAgC5%2BNvoZyQyVEZx9YA5W6A8lXMemlbKIM4n790qJcrB5IYxEtmAYNEwNb%2BZFc40nh03IiyHNBFsQFc2vSGPpw1ZujJjWqoiU0fLSvh6OKXv7XnQNeLruXNXjvRou%2BTCgzVpleKhE6yE26%2B4Rgpvz1xdXHmowlLYhGMwcv%2BuDqoY%2BKk2F6D186agE6tR%2BZFLYpfDiMy3u9z9U2pw%2FObZ55qMLWFosMGOqUBdmQ46Ko%2FBp9j5bJxCPP0%2FAJkv9WXxOj6rudGzUzaiBzmneXco%2FxY3zrTqZEW7jgeY1u7So%2BzFgkMfEdRForROAmMDrTafNF9jTRys%2B7IXVwNR%2ByLo6IdToeL8%2Bkh%2BCdmpyj2hGk9Fb4WprPuzqUDgIyLOcEDe%2Bsh8S4E60R33ISPYNDsKeGOV1aKV6mObywhjAiCVueccdBqDOvabYUtSS9n73XV&X-Amz-Signature=87f60335591a86fd435dc186b99a619ae86731824e07d981859056701379bef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSWPCMN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD27nDDHCChuCs5G5UaAZiq7A5JTwrCoe4DpIR2dqSsigIgP9yiFKAB%2Fz9wZqJ%2BKwJdZNFmMLDh1Wu2ssnTuClmFLoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDK%2FKnwCp1nMRZHdbeSrcA9801Q%2FxCeSZ56J65Zk9owJfDRqJ%2F8n4g1m9jc8TyBsnasDwjYxeXnH%2FiRrl1DERWpFfam%2FKgTkUQskTq4GLUphEf8%2BdME4tzksdJeNLSKsfdSuh072eZHTog0F7%2FENwy1zTMIQOWODLQAK9m6OlZNURqstzRbJRd0EfxCt%2FPkJaTjBmXed26Km9ninZjkevIBaG7FFbi5RKELeJzfi2ai%2Fay%2Fxus11R%2Br%2FbTXaui4AubGmZPo%2BI01TLOa1O%2BPVT2natRxMdq5fhbhi0FSQau2aoFlsEjU40ujDQSTQGCaCCYSJz9YfEOqf60kA2k%2BLZD5XZgRsFCPucjjmb4xEm%2BTc1AjgFy4QFt7kBqFWq%2BeU3WlaGoOuSKlt1CB4jVUHDQADozDUFAHRmub9mDZflgf2S4MSOv6gs4pwdzAgC5%2BNvoZyQyVEZx9YA5W6A8lXMemlbKIM4n790qJcrB5IYxEtmAYNEwNb%2BZFc40nh03IiyHNBFsQFc2vSGPpw1ZujJjWqoiU0fLSvh6OKXv7XnQNeLruXNXjvRou%2BTCgzVpleKhE6yE26%2B4Rgpvz1xdXHmowlLYhGMwcv%2BuDqoY%2BKk2F6D186agE6tR%2BZFLYpfDiMy3u9z9U2pw%2FObZ55qMLWFosMGOqUBdmQ46Ko%2FBp9j5bJxCPP0%2FAJkv9WXxOj6rudGzUzaiBzmneXco%2FxY3zrTqZEW7jgeY1u7So%2BzFgkMfEdRForROAmMDrTafNF9jTRys%2B7IXVwNR%2ByLo6IdToeL8%2Bkh%2BCdmpyj2hGk9Fb4WprPuzqUDgIyLOcEDe%2Bsh8S4E60R33ISPYNDsKeGOV1aKV6mObywhjAiCVueccdBqDOvabYUtSS9n73XV&X-Amz-Signature=a3112c9fea9b16f7b4c8d8a23b3fedefdb56613800d1a13346aac29c02cac9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
