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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YJVUJG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDN4msFkS5eQh%2FBbdtGOwah1XKH396g0ts%2BfYRa1TfVPQIhAMboQYDh2q%2F0qUtS4HVmdY6vPWxNmLQ3GXv5TXmwMz%2BVKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyFSBb1gOKlis9UP8q3AM8K18vSTK2vuf61NjnBaxNSyW4ab5XiFcNiSPbCYsY1wEcZ%2FltvrO7vFjVuythCnlML0QNE%2FQJHp2X8OdjIweOTfu8j%2BkWHzTOKW1vS80qzF8MkZSW4%2FXdoQI9KRjyWDtcwmz5aBUDpCQdNmCI74tc7%2BZ1o5IgPSjz0vLIZK6aD6hcM%2Ba5XjQe0SIWkZXpQYuUs%2FqNRZLgx4NGMZH3q6TMSngZ1s%2BEA50bQZpYnx%2BUlaFCP%2BoxhjocqcQuEQ97WrFlsMS%2FUrNQTklYG1VJ5xaQHVa2tj92p7fKx2oloZn3fLLI4bp566NM5u0CWx0WDm%2BN7fL1PXd15%2BAe2aVNYu3W5ti84y3EZZ5bqDM8S%2FfezzbWg78FLRTak4F4Nb9sjNRYyAP8AmQS1cpXd%2BXsK9%2FFZLkzsKsnqNFUnilGWO5Ko83GfulgoLkV7o3lvMxwnL9Ok34sKYx2F7q%2FS%2FRHq5uLlc3QUkU2jUEx5J%2BVheLTakp5GWP0n8Z0tko%2FUfjWERIylSKXXYKeVLNNoNFQzzNM1xXHAKM9JsXk5VA5058WOsfo%2BIyT5L6tuN0rsr5t6mXjHvBmXBk9QFd0A6gj6Tutfx%2Bo5aU9SG8SeN3BDrOBghC6IFm3ihh4LLpSaDCEmOO%2FBjqkATOvJLjUDhfupbOcelw%2Fwtjvjn0NxPVP%2BNEKPGXuqFhHHmTNKeEL2NHnAV%2FvRrL3oV80eapgiJBlyRut1rIbzESOjHEIoeTGosVlu5povnJL3tmrM0hPR%2FQPBYotYlTGBzstQ85lijehc9AquMKiD1an19P%2BUMl3wEvsRsASmiw3HQ%2Bt6wbjIlcOxtmZo3DtYnOm0q09iaYqf8vVYZfbcDq9Dh2l&X-Amz-Signature=5705f7fa403f6e801eb5b275eec5c4bbdadafc49ad3fb0e2230153836cfb4339&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YJVUJG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDN4msFkS5eQh%2FBbdtGOwah1XKH396g0ts%2BfYRa1TfVPQIhAMboQYDh2q%2F0qUtS4HVmdY6vPWxNmLQ3GXv5TXmwMz%2BVKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyFSBb1gOKlis9UP8q3AM8K18vSTK2vuf61NjnBaxNSyW4ab5XiFcNiSPbCYsY1wEcZ%2FltvrO7vFjVuythCnlML0QNE%2FQJHp2X8OdjIweOTfu8j%2BkWHzTOKW1vS80qzF8MkZSW4%2FXdoQI9KRjyWDtcwmz5aBUDpCQdNmCI74tc7%2BZ1o5IgPSjz0vLIZK6aD6hcM%2Ba5XjQe0SIWkZXpQYuUs%2FqNRZLgx4NGMZH3q6TMSngZ1s%2BEA50bQZpYnx%2BUlaFCP%2BoxhjocqcQuEQ97WrFlsMS%2FUrNQTklYG1VJ5xaQHVa2tj92p7fKx2oloZn3fLLI4bp566NM5u0CWx0WDm%2BN7fL1PXd15%2BAe2aVNYu3W5ti84y3EZZ5bqDM8S%2FfezzbWg78FLRTak4F4Nb9sjNRYyAP8AmQS1cpXd%2BXsK9%2FFZLkzsKsnqNFUnilGWO5Ko83GfulgoLkV7o3lvMxwnL9Ok34sKYx2F7q%2FS%2FRHq5uLlc3QUkU2jUEx5J%2BVheLTakp5GWP0n8Z0tko%2FUfjWERIylSKXXYKeVLNNoNFQzzNM1xXHAKM9JsXk5VA5058WOsfo%2BIyT5L6tuN0rsr5t6mXjHvBmXBk9QFd0A6gj6Tutfx%2Bo5aU9SG8SeN3BDrOBghC6IFm3ihh4LLpSaDCEmOO%2FBjqkATOvJLjUDhfupbOcelw%2Fwtjvjn0NxPVP%2BNEKPGXuqFhHHmTNKeEL2NHnAV%2FvRrL3oV80eapgiJBlyRut1rIbzESOjHEIoeTGosVlu5povnJL3tmrM0hPR%2FQPBYotYlTGBzstQ85lijehc9AquMKiD1an19P%2BUMl3wEvsRsASmiw3HQ%2Bt6wbjIlcOxtmZo3DtYnOm0q09iaYqf8vVYZfbcDq9Dh2l&X-Amz-Signature=ec33177d0fb0b94d616991c32fc95bb14ab38d9d0d9ecfe2788ebe437a73eced&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YJVUJG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDN4msFkS5eQh%2FBbdtGOwah1XKH396g0ts%2BfYRa1TfVPQIhAMboQYDh2q%2F0qUtS4HVmdY6vPWxNmLQ3GXv5TXmwMz%2BVKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyFSBb1gOKlis9UP8q3AM8K18vSTK2vuf61NjnBaxNSyW4ab5XiFcNiSPbCYsY1wEcZ%2FltvrO7vFjVuythCnlML0QNE%2FQJHp2X8OdjIweOTfu8j%2BkWHzTOKW1vS80qzF8MkZSW4%2FXdoQI9KRjyWDtcwmz5aBUDpCQdNmCI74tc7%2BZ1o5IgPSjz0vLIZK6aD6hcM%2Ba5XjQe0SIWkZXpQYuUs%2FqNRZLgx4NGMZH3q6TMSngZ1s%2BEA50bQZpYnx%2BUlaFCP%2BoxhjocqcQuEQ97WrFlsMS%2FUrNQTklYG1VJ5xaQHVa2tj92p7fKx2oloZn3fLLI4bp566NM5u0CWx0WDm%2BN7fL1PXd15%2BAe2aVNYu3W5ti84y3EZZ5bqDM8S%2FfezzbWg78FLRTak4F4Nb9sjNRYyAP8AmQS1cpXd%2BXsK9%2FFZLkzsKsnqNFUnilGWO5Ko83GfulgoLkV7o3lvMxwnL9Ok34sKYx2F7q%2FS%2FRHq5uLlc3QUkU2jUEx5J%2BVheLTakp5GWP0n8Z0tko%2FUfjWERIylSKXXYKeVLNNoNFQzzNM1xXHAKM9JsXk5VA5058WOsfo%2BIyT5L6tuN0rsr5t6mXjHvBmXBk9QFd0A6gj6Tutfx%2Bo5aU9SG8SeN3BDrOBghC6IFm3ihh4LLpSaDCEmOO%2FBjqkATOvJLjUDhfupbOcelw%2Fwtjvjn0NxPVP%2BNEKPGXuqFhHHmTNKeEL2NHnAV%2FvRrL3oV80eapgiJBlyRut1rIbzESOjHEIoeTGosVlu5povnJL3tmrM0hPR%2FQPBYotYlTGBzstQ85lijehc9AquMKiD1an19P%2BUMl3wEvsRsASmiw3HQ%2Bt6wbjIlcOxtmZo3DtYnOm0q09iaYqf8vVYZfbcDq9Dh2l&X-Amz-Signature=0cdc0718baa669dd8c9fec21827c0d32d4010f2c9ac88d406dc5259e320409df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
