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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6R5Z7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0NE6stggywmxNJGnbE1QZYgjE0%2F%2B71Q%2BTdECu2n9UCAiB%2FxXEJOmjcMIuzAs5wcgXPcymJmuPtsQxGTrVuLD5J0ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM6pXzfwJUAzU8ao7cKtwD%2FVz1aDTd%2FsUb4vrDkiEFL817PU4SqlrXKQPJXu81lC24lMCaHFHJtmtmkALVcWYFmij9SO2kY5rkaQKuDW3ejiO3gScZdiuLaMG0MibkbDdNe2KEtama35X1Z2hJSlQCqfifZJrLk5wBgkWeHGej8fuv8kQGrezcPFcHFXEfUhpeqLELrQv40MlJweCoN5Fr%2BXj0FaCCpzT%2BPw5Z5ezy12kmC%2B8sSmmjW56XR1%2BVShfxE2o9tLASGpGYILRWRvdOCxdPia3R0eDjYzrcsTY%2Fuwg%2BdqxThgvDeWVO5gBwLLT6Xegx6dyWOOup8JE06JgMRViz8ZReq8o9TomDFXy15zJhMTTZT7I0uBMywadxQJl9ZM4subMYVVNfwWBh%2BzV0cfORcgIHJUvV01AIz62dcPr2VX104rtGrnjJVehIO8yEBQXwtoMjePkAYuUXHITboTUxV46HjkH554aNGUGpUkD5n3uqPuRTMk7X%2BmFOh4gi8%2BHZ2jZLLSGkMXRZwqV2RQlBOohfIHjEn0dSKVXXBD6%2BFgNSJ%2BLVLAutzztuEdhcUQ0DF%2B4YO0%2FiVB8ootYyhI1koVz%2FxEHueZ0fY5nA2cxdnxWJRZWEBy2lMauxwyCjXo9lzHHn5XFHMAMwk%2FWBvQY6pgFPG5zBWqER9N%2B9wfoIiNW6pcFAO%2Fau14tN%2FWHqbiFXw1UWxBmzQQWr67kL%2FFtb%2FNffG1f1XCUj7SwjGrUULTYP%2BlKFE3ngAKaXg7u9CM9VzzNkyodXWk59RNhdJGeAewxSeP6T1Disgp4auC1%2B3p%2FXBgDbk9E2NsGF%2FGZFKayTKRe4Y4ZFByvv3DC5LcegEVbl%2BU%2F2VhCJAgS01QuzBMBPtTKQqy5h&X-Amz-Signature=b08ff06c4ff0b10732b5aa1a9f2b2246eae60ba664893e71ae991818ad99529d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6R5Z7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0NE6stggywmxNJGnbE1QZYgjE0%2F%2B71Q%2BTdECu2n9UCAiB%2FxXEJOmjcMIuzAs5wcgXPcymJmuPtsQxGTrVuLD5J0ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM6pXzfwJUAzU8ao7cKtwD%2FVz1aDTd%2FsUb4vrDkiEFL817PU4SqlrXKQPJXu81lC24lMCaHFHJtmtmkALVcWYFmij9SO2kY5rkaQKuDW3ejiO3gScZdiuLaMG0MibkbDdNe2KEtama35X1Z2hJSlQCqfifZJrLk5wBgkWeHGej8fuv8kQGrezcPFcHFXEfUhpeqLELrQv40MlJweCoN5Fr%2BXj0FaCCpzT%2BPw5Z5ezy12kmC%2B8sSmmjW56XR1%2BVShfxE2o9tLASGpGYILRWRvdOCxdPia3R0eDjYzrcsTY%2Fuwg%2BdqxThgvDeWVO5gBwLLT6Xegx6dyWOOup8JE06JgMRViz8ZReq8o9TomDFXy15zJhMTTZT7I0uBMywadxQJl9ZM4subMYVVNfwWBh%2BzV0cfORcgIHJUvV01AIz62dcPr2VX104rtGrnjJVehIO8yEBQXwtoMjePkAYuUXHITboTUxV46HjkH554aNGUGpUkD5n3uqPuRTMk7X%2BmFOh4gi8%2BHZ2jZLLSGkMXRZwqV2RQlBOohfIHjEn0dSKVXXBD6%2BFgNSJ%2BLVLAutzztuEdhcUQ0DF%2B4YO0%2FiVB8ootYyhI1koVz%2FxEHueZ0fY5nA2cxdnxWJRZWEBy2lMauxwyCjXo9lzHHn5XFHMAMwk%2FWBvQY6pgFPG5zBWqER9N%2B9wfoIiNW6pcFAO%2Fau14tN%2FWHqbiFXw1UWxBmzQQWr67kL%2FFtb%2FNffG1f1XCUj7SwjGrUULTYP%2BlKFE3ngAKaXg7u9CM9VzzNkyodXWk59RNhdJGeAewxSeP6T1Disgp4auC1%2B3p%2FXBgDbk9E2NsGF%2FGZFKayTKRe4Y4ZFByvv3DC5LcegEVbl%2BU%2F2VhCJAgS01QuzBMBPtTKQqy5h&X-Amz-Signature=c3cb6e63cdfa9ced9f4fc951ae654f60a5f7ec0f771c3e0ef4b7c062fe19fc78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6R5Z7A%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0NE6stggywmxNJGnbE1QZYgjE0%2F%2B71Q%2BTdECu2n9UCAiB%2FxXEJOmjcMIuzAs5wcgXPcymJmuPtsQxGTrVuLD5J0ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM6pXzfwJUAzU8ao7cKtwD%2FVz1aDTd%2FsUb4vrDkiEFL817PU4SqlrXKQPJXu81lC24lMCaHFHJtmtmkALVcWYFmij9SO2kY5rkaQKuDW3ejiO3gScZdiuLaMG0MibkbDdNe2KEtama35X1Z2hJSlQCqfifZJrLk5wBgkWeHGej8fuv8kQGrezcPFcHFXEfUhpeqLELrQv40MlJweCoN5Fr%2BXj0FaCCpzT%2BPw5Z5ezy12kmC%2B8sSmmjW56XR1%2BVShfxE2o9tLASGpGYILRWRvdOCxdPia3R0eDjYzrcsTY%2Fuwg%2BdqxThgvDeWVO5gBwLLT6Xegx6dyWOOup8JE06JgMRViz8ZReq8o9TomDFXy15zJhMTTZT7I0uBMywadxQJl9ZM4subMYVVNfwWBh%2BzV0cfORcgIHJUvV01AIz62dcPr2VX104rtGrnjJVehIO8yEBQXwtoMjePkAYuUXHITboTUxV46HjkH554aNGUGpUkD5n3uqPuRTMk7X%2BmFOh4gi8%2BHZ2jZLLSGkMXRZwqV2RQlBOohfIHjEn0dSKVXXBD6%2BFgNSJ%2BLVLAutzztuEdhcUQ0DF%2B4YO0%2FiVB8ootYyhI1koVz%2FxEHueZ0fY5nA2cxdnxWJRZWEBy2lMauxwyCjXo9lzHHn5XFHMAMwk%2FWBvQY6pgFPG5zBWqER9N%2B9wfoIiNW6pcFAO%2Fau14tN%2FWHqbiFXw1UWxBmzQQWr67kL%2FFtb%2FNffG1f1XCUj7SwjGrUULTYP%2BlKFE3ngAKaXg7u9CM9VzzNkyodXWk59RNhdJGeAewxSeP6T1Disgp4auC1%2B3p%2FXBgDbk9E2NsGF%2FGZFKayTKRe4Y4ZFByvv3DC5LcegEVbl%2BU%2F2VhCJAgS01QuzBMBPtTKQqy5h&X-Amz-Signature=5cb4cba36a0e99c393816ff29285ab80013b46e160201d8b016950e64674c50c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
