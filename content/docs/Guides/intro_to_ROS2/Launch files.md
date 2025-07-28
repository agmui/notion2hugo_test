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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KNY3L2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCH%2FVtn%2FQkTlVUK7AzfNDrRmCcUTD%2F5V29GqQahyyCQsQIge979UknoNBnwnsmrB5%2BeyL7iGiLBgUaZxiPdaZfF7FcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHQ1X%2F%2FX8wmgecDUyrcA7Ztl8CSCsUZPiNvjAPMAoPSAKtYGpA%2F%2BgKSIH8NbCIrXnbsXLlTCa8WRWLoaZsqJUCVgrJSZyOF82jc4%2FvXgkSPB2PWmxY9wy16IpE1fKmnpE4MZ%2BPERNg2bKj67KVigG6VsJGRr7MZkJc0RNBdQ4joYpbJJrwWlDFBl%2BNExENSRGx7CkrjVvN%2Flv1QS%2FzibjWDIjYioKlhWk3zoQnOmG1OYryBihUgs9SPr9q%2BXXw9m%2B2y8W4fccoAv5B3%2FuyPF3D7XBZzH4qIWNOfvdqAYN4vdWHMdmmvAaK0B2bZ5zAS7fNfVju4XNLRrFhVeBHraJabQ9ezJGZ2h9uvABtQFXxBt8cCJE6uqdEKXLpkMUMb5WerKYH76PKh4q6qBBd5egL7uYEhnMhs1Z314OrGm4h3VTmwiZjGcNv2CUupFDm6x7qmMY%2FCeL3iLzaGMsrvnyPp9FyZHnMwSYNOybpcSpoLEQ0rbsCpL%2FmGcY%2BWBs%2BqJ%2Bn6aozJ%2BXz9WqSS9Ya5gr9EzHn6OoKVHdkUZm50cdJxOQvGCBm7IIZxHJrHANqRVLRBKpiVp3%2BQcgb3TfaFOHyuf2taNNXzK1QhGNKl5WpdoicyxnuT3oJX2OfUyLcIelbcr6Davkyo5giRMMmOnMQGOqUBQnj%2Bwn8WV%2FvQta041t0BVS3Ty7srlsjiCXBt%2FI9YWsPSnRAORAHbAKRhYQ4t8AsOVFAKWusjxbCon1DO4KLc5RikERrkN7AFHl5X%2FNOMLM%2FWdrACGFmptIF6wp7IXKfGOCfuQfL7EZ8O3zl80%2FepoL4ofwMIUtmRm59Y%2FUigqESqy9Gwl%2FVg0gZ13YCzVDbkrErnZd7EOVdrDzVLFHuWcRpWmCNW&X-Amz-Signature=613249fbea306b35edc7b3724a3e07e654b6fe8b0732ac44b163faec5f522c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KNY3L2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCH%2FVtn%2FQkTlVUK7AzfNDrRmCcUTD%2F5V29GqQahyyCQsQIge979UknoNBnwnsmrB5%2BeyL7iGiLBgUaZxiPdaZfF7FcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHQ1X%2F%2FX8wmgecDUyrcA7Ztl8CSCsUZPiNvjAPMAoPSAKtYGpA%2F%2BgKSIH8NbCIrXnbsXLlTCa8WRWLoaZsqJUCVgrJSZyOF82jc4%2FvXgkSPB2PWmxY9wy16IpE1fKmnpE4MZ%2BPERNg2bKj67KVigG6VsJGRr7MZkJc0RNBdQ4joYpbJJrwWlDFBl%2BNExENSRGx7CkrjVvN%2Flv1QS%2FzibjWDIjYioKlhWk3zoQnOmG1OYryBihUgs9SPr9q%2BXXw9m%2B2y8W4fccoAv5B3%2FuyPF3D7XBZzH4qIWNOfvdqAYN4vdWHMdmmvAaK0B2bZ5zAS7fNfVju4XNLRrFhVeBHraJabQ9ezJGZ2h9uvABtQFXxBt8cCJE6uqdEKXLpkMUMb5WerKYH76PKh4q6qBBd5egL7uYEhnMhs1Z314OrGm4h3VTmwiZjGcNv2CUupFDm6x7qmMY%2FCeL3iLzaGMsrvnyPp9FyZHnMwSYNOybpcSpoLEQ0rbsCpL%2FmGcY%2BWBs%2BqJ%2Bn6aozJ%2BXz9WqSS9Ya5gr9EzHn6OoKVHdkUZm50cdJxOQvGCBm7IIZxHJrHANqRVLRBKpiVp3%2BQcgb3TfaFOHyuf2taNNXzK1QhGNKl5WpdoicyxnuT3oJX2OfUyLcIelbcr6Davkyo5giRMMmOnMQGOqUBQnj%2Bwn8WV%2FvQta041t0BVS3Ty7srlsjiCXBt%2FI9YWsPSnRAORAHbAKRhYQ4t8AsOVFAKWusjxbCon1DO4KLc5RikERrkN7AFHl5X%2FNOMLM%2FWdrACGFmptIF6wp7IXKfGOCfuQfL7EZ8O3zl80%2FepoL4ofwMIUtmRm59Y%2FUigqESqy9Gwl%2FVg0gZ13YCzVDbkrErnZd7EOVdrDzVLFHuWcRpWmCNW&X-Amz-Signature=b690be3129891db9d3f2ae0f15600e925e077a21e177bd7377bf9ef2071bd49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KNY3L2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCH%2FVtn%2FQkTlVUK7AzfNDrRmCcUTD%2F5V29GqQahyyCQsQIge979UknoNBnwnsmrB5%2BeyL7iGiLBgUaZxiPdaZfF7FcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHQ1X%2F%2FX8wmgecDUyrcA7Ztl8CSCsUZPiNvjAPMAoPSAKtYGpA%2F%2BgKSIH8NbCIrXnbsXLlTCa8WRWLoaZsqJUCVgrJSZyOF82jc4%2FvXgkSPB2PWmxY9wy16IpE1fKmnpE4MZ%2BPERNg2bKj67KVigG6VsJGRr7MZkJc0RNBdQ4joYpbJJrwWlDFBl%2BNExENSRGx7CkrjVvN%2Flv1QS%2FzibjWDIjYioKlhWk3zoQnOmG1OYryBihUgs9SPr9q%2BXXw9m%2B2y8W4fccoAv5B3%2FuyPF3D7XBZzH4qIWNOfvdqAYN4vdWHMdmmvAaK0B2bZ5zAS7fNfVju4XNLRrFhVeBHraJabQ9ezJGZ2h9uvABtQFXxBt8cCJE6uqdEKXLpkMUMb5WerKYH76PKh4q6qBBd5egL7uYEhnMhs1Z314OrGm4h3VTmwiZjGcNv2CUupFDm6x7qmMY%2FCeL3iLzaGMsrvnyPp9FyZHnMwSYNOybpcSpoLEQ0rbsCpL%2FmGcY%2BWBs%2BqJ%2Bn6aozJ%2BXz9WqSS9Ya5gr9EzHn6OoKVHdkUZm50cdJxOQvGCBm7IIZxHJrHANqRVLRBKpiVp3%2BQcgb3TfaFOHyuf2taNNXzK1QhGNKl5WpdoicyxnuT3oJX2OfUyLcIelbcr6Davkyo5giRMMmOnMQGOqUBQnj%2Bwn8WV%2FvQta041t0BVS3Ty7srlsjiCXBt%2FI9YWsPSnRAORAHbAKRhYQ4t8AsOVFAKWusjxbCon1DO4KLc5RikERrkN7AFHl5X%2FNOMLM%2FWdrACGFmptIF6wp7IXKfGOCfuQfL7EZ8O3zl80%2FepoL4ofwMIUtmRm59Y%2FUigqESqy9Gwl%2FVg0gZ13YCzVDbkrErnZd7EOVdrDzVLFHuWcRpWmCNW&X-Amz-Signature=393fedbec100fe2c8e25008d4c0d7f27f0e638e7f78e38a6091ce9122e9e0322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
