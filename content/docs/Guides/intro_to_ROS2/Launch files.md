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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642R7NOU5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEgnb3vHTjDjx0ZDbvX9y%2FID2gGaKJNEhd66yf%2B%2FUodrAiBC3xv4MQxV74JnP8BS8YIEzwOT%2B9B8k7OSWRTY34reGiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG49lVF3mp2%2B6HdgKtwDqaW4t3F8%2Fi1nGfgMgA%2FdFRKqG0IqQ60rGBeb61nxpbonkT4HwRCblbcGFsUetg%2FZlzfSiWwaBt2mXboekNb2yDMSFszujMYGqrusO6FLiYdivAw%2BBKyYd8cjffwhONyDCBUasryZPp9MDpkMmx2Y7hAyCm1cOG7P2b5jaepFf8NPOVGCErAEamToknEh7YYsIsNA2svd0upZHUh0oqL9t2ftYaqTPALx40W83iEImt6JtISMGCQsZ6geuRzh9kgeJ2m1G8L7gq%2FYhLYDfk0UgAqvHbMB7oPMpoeM0ZzwHycFi6pw1J3DYkyzlBnXD33%2BaFFCAZ9HnrruRBwEEapy%2ByV0vBZd1r0mj4%2FuMyNwIShIB4h6i8vruSEN8GEa8T9N2LMJdT%2BZokE%2F3WJWjWU6%2FKIU8C2mhkCYpIsRYUr2EG5q%2FxhpiiJBWnVZejCl19YmZsp8s1t8htL%2FbPXMqKHTUpBPMzeYOgVDpFSXaabbSjmyEPYcXFSww2%2FojqnD3LFVjeN5eps6Sa%2BQHR%2F3LKE4j4CTq0YQnMZkhNvZpoyphpGBBqvqcW%2BRdpPFtxjXgyllL8S7oYrCBpSgRmXYjN6GHaPTdPf23AIFHKxrb0Tvt3omAHfm%2BWq0I98Yyy8w6Kq0vwY6pgHJA14wTiksIL%2F%2Bxcq%2BH9TRiZs093vTTmW6e%2B4J2DRKqP8LCmGUve1e9jHbVYK2ygQDO2rzEcypGWeWHNxxtdl1l4Q2lzCvrOM3GWPKPJbAqcD%2BVf5szHdLtGGxvO59NR815Qkte2sngS%2BskR9qPmdeZ708ULFMndDvRjOpHTZEjz5EX8CMtFrPBym8duS04VWFzk74VDyuoUbNcThzlNFB1Xd5CqQI&X-Amz-Signature=62b3689b073f52e1708924d5dfefe447711306fe9294df4c9d998d4ba3503d44&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642R7NOU5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEgnb3vHTjDjx0ZDbvX9y%2FID2gGaKJNEhd66yf%2B%2FUodrAiBC3xv4MQxV74JnP8BS8YIEzwOT%2B9B8k7OSWRTY34reGiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG49lVF3mp2%2B6HdgKtwDqaW4t3F8%2Fi1nGfgMgA%2FdFRKqG0IqQ60rGBeb61nxpbonkT4HwRCblbcGFsUetg%2FZlzfSiWwaBt2mXboekNb2yDMSFszujMYGqrusO6FLiYdivAw%2BBKyYd8cjffwhONyDCBUasryZPp9MDpkMmx2Y7hAyCm1cOG7P2b5jaepFf8NPOVGCErAEamToknEh7YYsIsNA2svd0upZHUh0oqL9t2ftYaqTPALx40W83iEImt6JtISMGCQsZ6geuRzh9kgeJ2m1G8L7gq%2FYhLYDfk0UgAqvHbMB7oPMpoeM0ZzwHycFi6pw1J3DYkyzlBnXD33%2BaFFCAZ9HnrruRBwEEapy%2ByV0vBZd1r0mj4%2FuMyNwIShIB4h6i8vruSEN8GEa8T9N2LMJdT%2BZokE%2F3WJWjWU6%2FKIU8C2mhkCYpIsRYUr2EG5q%2FxhpiiJBWnVZejCl19YmZsp8s1t8htL%2FbPXMqKHTUpBPMzeYOgVDpFSXaabbSjmyEPYcXFSww2%2FojqnD3LFVjeN5eps6Sa%2BQHR%2F3LKE4j4CTq0YQnMZkhNvZpoyphpGBBqvqcW%2BRdpPFtxjXgyllL8S7oYrCBpSgRmXYjN6GHaPTdPf23AIFHKxrb0Tvt3omAHfm%2BWq0I98Yyy8w6Kq0vwY6pgHJA14wTiksIL%2F%2Bxcq%2BH9TRiZs093vTTmW6e%2B4J2DRKqP8LCmGUve1e9jHbVYK2ygQDO2rzEcypGWeWHNxxtdl1l4Q2lzCvrOM3GWPKPJbAqcD%2BVf5szHdLtGGxvO59NR815Qkte2sngS%2BskR9qPmdeZ708ULFMndDvRjOpHTZEjz5EX8CMtFrPBym8duS04VWFzk74VDyuoUbNcThzlNFB1Xd5CqQI&X-Amz-Signature=49237990c896e18e2bc75dceba1ceb4a8ce7659378d15dc34967c612bc4badbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642R7NOU5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEgnb3vHTjDjx0ZDbvX9y%2FID2gGaKJNEhd66yf%2B%2FUodrAiBC3xv4MQxV74JnP8BS8YIEzwOT%2B9B8k7OSWRTY34reGiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaG49lVF3mp2%2B6HdgKtwDqaW4t3F8%2Fi1nGfgMgA%2FdFRKqG0IqQ60rGBeb61nxpbonkT4HwRCblbcGFsUetg%2FZlzfSiWwaBt2mXboekNb2yDMSFszujMYGqrusO6FLiYdivAw%2BBKyYd8cjffwhONyDCBUasryZPp9MDpkMmx2Y7hAyCm1cOG7P2b5jaepFf8NPOVGCErAEamToknEh7YYsIsNA2svd0upZHUh0oqL9t2ftYaqTPALx40W83iEImt6JtISMGCQsZ6geuRzh9kgeJ2m1G8L7gq%2FYhLYDfk0UgAqvHbMB7oPMpoeM0ZzwHycFi6pw1J3DYkyzlBnXD33%2BaFFCAZ9HnrruRBwEEapy%2ByV0vBZd1r0mj4%2FuMyNwIShIB4h6i8vruSEN8GEa8T9N2LMJdT%2BZokE%2F3WJWjWU6%2FKIU8C2mhkCYpIsRYUr2EG5q%2FxhpiiJBWnVZejCl19YmZsp8s1t8htL%2FbPXMqKHTUpBPMzeYOgVDpFSXaabbSjmyEPYcXFSww2%2FojqnD3LFVjeN5eps6Sa%2BQHR%2F3LKE4j4CTq0YQnMZkhNvZpoyphpGBBqvqcW%2BRdpPFtxjXgyllL8S7oYrCBpSgRmXYjN6GHaPTdPf23AIFHKxrb0Tvt3omAHfm%2BWq0I98Yyy8w6Kq0vwY6pgHJA14wTiksIL%2F%2Bxcq%2BH9TRiZs093vTTmW6e%2B4J2DRKqP8LCmGUve1e9jHbVYK2ygQDO2rzEcypGWeWHNxxtdl1l4Q2lzCvrOM3GWPKPJbAqcD%2BVf5szHdLtGGxvO59NR815Qkte2sngS%2BskR9qPmdeZ708ULFMndDvRjOpHTZEjz5EX8CMtFrPBym8duS04VWFzk74VDyuoUbNcThzlNFB1Xd5CqQI&X-Amz-Signature=a141b7cd7d59fb8926996c2affbf456ae5eb0d1cb9a3a95dac1de09ba6065ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
