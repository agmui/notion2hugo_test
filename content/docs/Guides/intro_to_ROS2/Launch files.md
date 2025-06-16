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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLYJGFP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBT%2BQM%2FSRRjcySpGMHNttZPJ0MMMicrtBF2gDckrkHfmAiEA7qGkhNlE0MZj7ST9dREGiCwLqDfLpEIlFl6dA3opYMEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKHgIP5pgLx%2BX2iB4ircAxb7Z7tkuVHdRDYxO46STICaOYjptWphImF60QZWDGmyMgd4CqxgLHpqsVuSJAluEkv%2B5zmMNd1F9Tgf7E6TES29MEQlQ%2BONHG3x05wY8Qui0jgj1oRBnlfeoj2j3yVSuIJ926f1lrp%2FW27DScAuG5mAyoXQPjPyUyzIAZkLsHxQH2prC0mFvVVvBihRqWkhZRQvu3B%2BQ5kCzEhmIBXKOA7UyWi%2FodmkqI9KvuITcE57kGJpRbndJX%2BldrWqaGs%2BB%2FP%2B4WORusbgPP%2BQSlXSB1TTBTDuLPEZGrpukjAU9ypMRiRocNWe8l%2BWt9UHv6D2gwN4m9322jjBh4qNiZNV5q4zvicQBLhBYmwqIgoR%2FQEaJ145SK4eeTZtd6XpAcV2%2ByPyYxBd9r1vPIQKIB0mEoYivl%2BpLVsW8mrtCyh3O0C5HzxAJV82vQ670HE3bGlCDO9dZoixdaTEMZlVNJmWa1AiTy%2FvSTw9mD0FokaIEm0z8TLRnf9SjqVh5mgJjfcD3GrFVoZeI%2FakmTTiB2uPb1gS0ji8Uq%2BpgnI5PrBLHRVE7FfnOSwh5Npn5q%2BdUgg8jAGiGWatiMPRVy5hlDri1jEPspFrH63tQ9KACttPh%2BFNYciWmFMEpYlSdpTZMN%2BvvcIGOqUBSkJpTVMY7lUDgeBA8fPLd8nt1fVeYMBNxxziXZHVASOnlFuae%2Be2KrxAJFLO4QPNgdVEJ%2FkCZ5p3AWQ%2Flt8E1mLgy0LRoTQGKQcNjOZeDRrdIuIre4V5neprfObplzK%2Fpw%2BQVvAoZ787bX%2BG6wEab9EyOYdRKVfha2ETrJNNjR9Smfvd3E5vQE6j3olFaUB1BdV0tFY8IjoTSsh3JHWxo94fIEDl&X-Amz-Signature=e36f5ea13272fb78bd2d87d9a8deb5a17e3385ae46eabe116fd492caae73e004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLYJGFP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBT%2BQM%2FSRRjcySpGMHNttZPJ0MMMicrtBF2gDckrkHfmAiEA7qGkhNlE0MZj7ST9dREGiCwLqDfLpEIlFl6dA3opYMEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKHgIP5pgLx%2BX2iB4ircAxb7Z7tkuVHdRDYxO46STICaOYjptWphImF60QZWDGmyMgd4CqxgLHpqsVuSJAluEkv%2B5zmMNd1F9Tgf7E6TES29MEQlQ%2BONHG3x05wY8Qui0jgj1oRBnlfeoj2j3yVSuIJ926f1lrp%2FW27DScAuG5mAyoXQPjPyUyzIAZkLsHxQH2prC0mFvVVvBihRqWkhZRQvu3B%2BQ5kCzEhmIBXKOA7UyWi%2FodmkqI9KvuITcE57kGJpRbndJX%2BldrWqaGs%2BB%2FP%2B4WORusbgPP%2BQSlXSB1TTBTDuLPEZGrpukjAU9ypMRiRocNWe8l%2BWt9UHv6D2gwN4m9322jjBh4qNiZNV5q4zvicQBLhBYmwqIgoR%2FQEaJ145SK4eeTZtd6XpAcV2%2ByPyYxBd9r1vPIQKIB0mEoYivl%2BpLVsW8mrtCyh3O0C5HzxAJV82vQ670HE3bGlCDO9dZoixdaTEMZlVNJmWa1AiTy%2FvSTw9mD0FokaIEm0z8TLRnf9SjqVh5mgJjfcD3GrFVoZeI%2FakmTTiB2uPb1gS0ji8Uq%2BpgnI5PrBLHRVE7FfnOSwh5Npn5q%2BdUgg8jAGiGWatiMPRVy5hlDri1jEPspFrH63tQ9KACttPh%2BFNYciWmFMEpYlSdpTZMN%2BvvcIGOqUBSkJpTVMY7lUDgeBA8fPLd8nt1fVeYMBNxxziXZHVASOnlFuae%2Be2KrxAJFLO4QPNgdVEJ%2FkCZ5p3AWQ%2Flt8E1mLgy0LRoTQGKQcNjOZeDRrdIuIre4V5neprfObplzK%2Fpw%2BQVvAoZ787bX%2BG6wEab9EyOYdRKVfha2ETrJNNjR9Smfvd3E5vQE6j3olFaUB1BdV0tFY8IjoTSsh3JHWxo94fIEDl&X-Amz-Signature=009dd00ea84cd777cdb3c1119fa3ee80c996f7f15178b8ef4e06cc35ba4b98c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLYJGFP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBT%2BQM%2FSRRjcySpGMHNttZPJ0MMMicrtBF2gDckrkHfmAiEA7qGkhNlE0MZj7ST9dREGiCwLqDfLpEIlFl6dA3opYMEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKHgIP5pgLx%2BX2iB4ircAxb7Z7tkuVHdRDYxO46STICaOYjptWphImF60QZWDGmyMgd4CqxgLHpqsVuSJAluEkv%2B5zmMNd1F9Tgf7E6TES29MEQlQ%2BONHG3x05wY8Qui0jgj1oRBnlfeoj2j3yVSuIJ926f1lrp%2FW27DScAuG5mAyoXQPjPyUyzIAZkLsHxQH2prC0mFvVVvBihRqWkhZRQvu3B%2BQ5kCzEhmIBXKOA7UyWi%2FodmkqI9KvuITcE57kGJpRbndJX%2BldrWqaGs%2BB%2FP%2B4WORusbgPP%2BQSlXSB1TTBTDuLPEZGrpukjAU9ypMRiRocNWe8l%2BWt9UHv6D2gwN4m9322jjBh4qNiZNV5q4zvicQBLhBYmwqIgoR%2FQEaJ145SK4eeTZtd6XpAcV2%2ByPyYxBd9r1vPIQKIB0mEoYivl%2BpLVsW8mrtCyh3O0C5HzxAJV82vQ670HE3bGlCDO9dZoixdaTEMZlVNJmWa1AiTy%2FvSTw9mD0FokaIEm0z8TLRnf9SjqVh5mgJjfcD3GrFVoZeI%2FakmTTiB2uPb1gS0ji8Uq%2BpgnI5PrBLHRVE7FfnOSwh5Npn5q%2BdUgg8jAGiGWatiMPRVy5hlDri1jEPspFrH63tQ9KACttPh%2BFNYciWmFMEpYlSdpTZMN%2BvvcIGOqUBSkJpTVMY7lUDgeBA8fPLd8nt1fVeYMBNxxziXZHVASOnlFuae%2Be2KrxAJFLO4QPNgdVEJ%2FkCZ5p3AWQ%2Flt8E1mLgy0LRoTQGKQcNjOZeDRrdIuIre4V5neprfObplzK%2Fpw%2BQVvAoZ787bX%2BG6wEab9EyOYdRKVfha2ETrJNNjR9Smfvd3E5vQE6j3olFaUB1BdV0tFY8IjoTSsh3JHWxo94fIEDl&X-Amz-Signature=50cbf0c84bf5987e15980cb0ba7f40265af2f9ab7869ffa143765d3a15eb1638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
