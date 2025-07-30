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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7KC2TB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8E7UmoDjr0TIXjU6j0bUlnawGTWkkCUScoOfTQQyIgwIhAIf6Y0Su5%2BnTQ5xuhAWgj9%2Bi3qtQY9Wtlwdf1Zh8Pnl6KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxokyd16h6u0bTtxjEq3AO2grhGNGR3AwiQvUjwcRfZEbPmAXmBhA9f%2F5QDlnUkY88mDM2pVIyff88f6ggZpVDX8nlMV%2Ftcn96Dr%2BnHENPQ5QBhaNqhV%2FtBsgb5RQ9BRroxCkOFH%2FhYtrAignU9b%2BHNqwBOG3CM5Ta2coGCTMUhEJfphF5PUmQrInubmk7O5ld9RNt6gBfO92Lr8I6pMiPVPOeMngMNizFPp7ArLXqt6P9x4xfdtI3Dtn%2BpvKCiAiIOBmPzciscKA%2FXeI04PdO6dXkaTXTHcYuYFq1PsV%2B2xPLlSw%2F9n7iPkFa2OQSJ3Cn9K8QcxcB8Px0144bf%2BrOtNi2ymzGCTKUMgsawDo%2BGxWAdoQl4W2QwPw8DY5HWk9jH1dU%2FJOlmZkTh3CzLD9SWs2ca3LrsVi7sKqmTXLSxbo8%2BVNtNLtuOB%2BVkgUtC1cbZaLVizp5Z%2BoJAbIkRLEtr6uQCYrm0oyekZygiL986T87Hp8iiGfItOrzBP2RJCwaoeZkJFQqWdl6iHQA25IbZ5eiM7mxPV1oZ5iKAr85JmcjXHzEtik%2BqhmW3a35F4WjMrE5H%2BKQItVKvzr8MuAbBQa6Nh48R7UCyaHIfo%2FrXO0MO5nXhyXlORrexAIzL07OtaTGV9Iup3RTpCzDGwKfEBjqkAQ4KvfVZsjqZp5b%2BgojnDPXtvEZcuPA3nXp23mBVdSxgSbTUr2F%2BfCGcyWKL4RrZD71r4qWC05KignvVTz2cSBGTWoQ1GaEK%2FCOaO%2FydWUkX6m26wrnXwoDr5I8LAiNUJ2e9ZhapSBMgzNGxkXA4EptC0zoqxK2mELfcgGz44uYctPhHilE%2FfYQCXGiFCiZ50HZPt9ivw9aR97g49azkT%2FIJpNlE&X-Amz-Signature=1ddae45cb026a858f38d1e7d8dcb7dee44e4bb583544a68687383967f639de4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7KC2TB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8E7UmoDjr0TIXjU6j0bUlnawGTWkkCUScoOfTQQyIgwIhAIf6Y0Su5%2BnTQ5xuhAWgj9%2Bi3qtQY9Wtlwdf1Zh8Pnl6KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxokyd16h6u0bTtxjEq3AO2grhGNGR3AwiQvUjwcRfZEbPmAXmBhA9f%2F5QDlnUkY88mDM2pVIyff88f6ggZpVDX8nlMV%2Ftcn96Dr%2BnHENPQ5QBhaNqhV%2FtBsgb5RQ9BRroxCkOFH%2FhYtrAignU9b%2BHNqwBOG3CM5Ta2coGCTMUhEJfphF5PUmQrInubmk7O5ld9RNt6gBfO92Lr8I6pMiPVPOeMngMNizFPp7ArLXqt6P9x4xfdtI3Dtn%2BpvKCiAiIOBmPzciscKA%2FXeI04PdO6dXkaTXTHcYuYFq1PsV%2B2xPLlSw%2F9n7iPkFa2OQSJ3Cn9K8QcxcB8Px0144bf%2BrOtNi2ymzGCTKUMgsawDo%2BGxWAdoQl4W2QwPw8DY5HWk9jH1dU%2FJOlmZkTh3CzLD9SWs2ca3LrsVi7sKqmTXLSxbo8%2BVNtNLtuOB%2BVkgUtC1cbZaLVizp5Z%2BoJAbIkRLEtr6uQCYrm0oyekZygiL986T87Hp8iiGfItOrzBP2RJCwaoeZkJFQqWdl6iHQA25IbZ5eiM7mxPV1oZ5iKAr85JmcjXHzEtik%2BqhmW3a35F4WjMrE5H%2BKQItVKvzr8MuAbBQa6Nh48R7UCyaHIfo%2FrXO0MO5nXhyXlORrexAIzL07OtaTGV9Iup3RTpCzDGwKfEBjqkAQ4KvfVZsjqZp5b%2BgojnDPXtvEZcuPA3nXp23mBVdSxgSbTUr2F%2BfCGcyWKL4RrZD71r4qWC05KignvVTz2cSBGTWoQ1GaEK%2FCOaO%2FydWUkX6m26wrnXwoDr5I8LAiNUJ2e9ZhapSBMgzNGxkXA4EptC0zoqxK2mELfcgGz44uYctPhHilE%2FfYQCXGiFCiZ50HZPt9ivw9aR97g49azkT%2FIJpNlE&X-Amz-Signature=1d1a8b86318f00b4a90750e7a28ad1f7af1b3fb58a362f7ab4a33c3cd156b945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7KC2TB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8E7UmoDjr0TIXjU6j0bUlnawGTWkkCUScoOfTQQyIgwIhAIf6Y0Su5%2BnTQ5xuhAWgj9%2Bi3qtQY9Wtlwdf1Zh8Pnl6KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxokyd16h6u0bTtxjEq3AO2grhGNGR3AwiQvUjwcRfZEbPmAXmBhA9f%2F5QDlnUkY88mDM2pVIyff88f6ggZpVDX8nlMV%2Ftcn96Dr%2BnHENPQ5QBhaNqhV%2FtBsgb5RQ9BRroxCkOFH%2FhYtrAignU9b%2BHNqwBOG3CM5Ta2coGCTMUhEJfphF5PUmQrInubmk7O5ld9RNt6gBfO92Lr8I6pMiPVPOeMngMNizFPp7ArLXqt6P9x4xfdtI3Dtn%2BpvKCiAiIOBmPzciscKA%2FXeI04PdO6dXkaTXTHcYuYFq1PsV%2B2xPLlSw%2F9n7iPkFa2OQSJ3Cn9K8QcxcB8Px0144bf%2BrOtNi2ymzGCTKUMgsawDo%2BGxWAdoQl4W2QwPw8DY5HWk9jH1dU%2FJOlmZkTh3CzLD9SWs2ca3LrsVi7sKqmTXLSxbo8%2BVNtNLtuOB%2BVkgUtC1cbZaLVizp5Z%2BoJAbIkRLEtr6uQCYrm0oyekZygiL986T87Hp8iiGfItOrzBP2RJCwaoeZkJFQqWdl6iHQA25IbZ5eiM7mxPV1oZ5iKAr85JmcjXHzEtik%2BqhmW3a35F4WjMrE5H%2BKQItVKvzr8MuAbBQa6Nh48R7UCyaHIfo%2FrXO0MO5nXhyXlORrexAIzL07OtaTGV9Iup3RTpCzDGwKfEBjqkAQ4KvfVZsjqZp5b%2BgojnDPXtvEZcuPA3nXp23mBVdSxgSbTUr2F%2BfCGcyWKL4RrZD71r4qWC05KignvVTz2cSBGTWoQ1GaEK%2FCOaO%2FydWUkX6m26wrnXwoDr5I8LAiNUJ2e9ZhapSBMgzNGxkXA4EptC0zoqxK2mELfcgGz44uYctPhHilE%2FfYQCXGiFCiZ50HZPt9ivw9aR97g49azkT%2FIJpNlE&X-Amz-Signature=ce3397ba70e863cb76b209952c31ade326a747f243abe8e258daee3b50fa6bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
