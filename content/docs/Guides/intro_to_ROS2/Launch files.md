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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFN3K6MF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICScPZ4fUS3UsxoQn6mHibDuS968osVyonNgaq2rGf4cAiAqIVlceNy9423wdkvnlY1dobxQbAUAPyuvm1k6UGvCkyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPDn6oRTi793MV7%2FvKtwDIevqIXH51fyVXI3UcZLglBeNFDQTtW%2B8%2FhjMf%2FvKXhCDy3ulJ%2FKGq%2F9ZXsYCWeEqdjN6vWerm2JZAeDK%2FihtG45wHXPU8dga7WfHjoDE9hOlI2R3RJgFvv7Qf4%2FMowG5ZAFZTkGy6%2BGB0A1pt8CpwCbJe8gY4Gb6eJ6ZmAgBvdTAq0iKBN6twBVtqJgqsxYnuZnvhW%2Fj1%2F%2B006M3sLhn6sma7JwVhWIlmwYuipqBcF1c35Zky1dqIR8O7bAmkPtOsIjlhINHYCL6VkiTjAF%2Fl4%2FnTIi9kQ2fnEsHa%2BLhKzAB4khYFUWo1nktgN%2FreRdT%2F%2F%2Fz46U3YSa3SXoFPZ1dC7w4JKlGJzN2f8%2BqQA7nPTi4KwDj%2BmMkVW6ZftCPrtHYBNCuQHiDoOm95OQdNwFSHJBIiLcL5kxyNuLl0lBG3lrAUHLyipaUfIsENuPGCchlHUMR07990xaOb8e5%2F6tQXn%2FAEKpvK2aiazIynU9teWRYg%2Br2QkpA4crmmF58VsU9VPRJbzDQxRGv9At3Y74ynIXYhC2Vc3ti%2FU6bkT4%2BmkwIOaGrPkL2G%2F%2Bnwhp%2FNNAPtjMLYFm0VWc1PTxmcdptuKLG%2BgO9IQxCFsDYh6fxrVXGlDvmHp500p94u1gw9ueMxAY6pgHivOL%2Fat8Z22j1RsrE%2BDCID1Gm8BulxIwg7BQM19o7anShIZ6joepcUGp5dU7UetNahoxPh0KTm%2BervXHSgdBW9uPpscaLGplKVMprk3LCpaYWEsYnSA0YAGBv8Lve%2BMuGgW9yE%2BgAJ%2FcCm8m7%2BKyvtwvRt8ZPIDaBSm2lRKt5N86u9LOwyr8GTqTzCVDDrQKd%2FRZmfPA4lq4YhjmPNX2%2BsiTlg1KR&X-Amz-Signature=f1475bdad6df0fb60d1731df777ebb6749aacc19a0094281e66c7c9969fd2eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFN3K6MF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICScPZ4fUS3UsxoQn6mHibDuS968osVyonNgaq2rGf4cAiAqIVlceNy9423wdkvnlY1dobxQbAUAPyuvm1k6UGvCkyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPDn6oRTi793MV7%2FvKtwDIevqIXH51fyVXI3UcZLglBeNFDQTtW%2B8%2FhjMf%2FvKXhCDy3ulJ%2FKGq%2F9ZXsYCWeEqdjN6vWerm2JZAeDK%2FihtG45wHXPU8dga7WfHjoDE9hOlI2R3RJgFvv7Qf4%2FMowG5ZAFZTkGy6%2BGB0A1pt8CpwCbJe8gY4Gb6eJ6ZmAgBvdTAq0iKBN6twBVtqJgqsxYnuZnvhW%2Fj1%2F%2B006M3sLhn6sma7JwVhWIlmwYuipqBcF1c35Zky1dqIR8O7bAmkPtOsIjlhINHYCL6VkiTjAF%2Fl4%2FnTIi9kQ2fnEsHa%2BLhKzAB4khYFUWo1nktgN%2FreRdT%2F%2F%2Fz46U3YSa3SXoFPZ1dC7w4JKlGJzN2f8%2BqQA7nPTi4KwDj%2BmMkVW6ZftCPrtHYBNCuQHiDoOm95OQdNwFSHJBIiLcL5kxyNuLl0lBG3lrAUHLyipaUfIsENuPGCchlHUMR07990xaOb8e5%2F6tQXn%2FAEKpvK2aiazIynU9teWRYg%2Br2QkpA4crmmF58VsU9VPRJbzDQxRGv9At3Y74ynIXYhC2Vc3ti%2FU6bkT4%2BmkwIOaGrPkL2G%2F%2Bnwhp%2FNNAPtjMLYFm0VWc1PTxmcdptuKLG%2BgO9IQxCFsDYh6fxrVXGlDvmHp500p94u1gw9ueMxAY6pgHivOL%2Fat8Z22j1RsrE%2BDCID1Gm8BulxIwg7BQM19o7anShIZ6joepcUGp5dU7UetNahoxPh0KTm%2BervXHSgdBW9uPpscaLGplKVMprk3LCpaYWEsYnSA0YAGBv8Lve%2BMuGgW9yE%2BgAJ%2FcCm8m7%2BKyvtwvRt8ZPIDaBSm2lRKt5N86u9LOwyr8GTqTzCVDDrQKd%2FRZmfPA4lq4YhjmPNX2%2BsiTlg1KR&X-Amz-Signature=0cceeef491ebcf1fbab30c44f6b8f75007635ad311feee64896db89ad98e8f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFN3K6MF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICScPZ4fUS3UsxoQn6mHibDuS968osVyonNgaq2rGf4cAiAqIVlceNy9423wdkvnlY1dobxQbAUAPyuvm1k6UGvCkyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMPDn6oRTi793MV7%2FvKtwDIevqIXH51fyVXI3UcZLglBeNFDQTtW%2B8%2FhjMf%2FvKXhCDy3ulJ%2FKGq%2F9ZXsYCWeEqdjN6vWerm2JZAeDK%2FihtG45wHXPU8dga7WfHjoDE9hOlI2R3RJgFvv7Qf4%2FMowG5ZAFZTkGy6%2BGB0A1pt8CpwCbJe8gY4Gb6eJ6ZmAgBvdTAq0iKBN6twBVtqJgqsxYnuZnvhW%2Fj1%2F%2B006M3sLhn6sma7JwVhWIlmwYuipqBcF1c35Zky1dqIR8O7bAmkPtOsIjlhINHYCL6VkiTjAF%2Fl4%2FnTIi9kQ2fnEsHa%2BLhKzAB4khYFUWo1nktgN%2FreRdT%2F%2F%2Fz46U3YSa3SXoFPZ1dC7w4JKlGJzN2f8%2BqQA7nPTi4KwDj%2BmMkVW6ZftCPrtHYBNCuQHiDoOm95OQdNwFSHJBIiLcL5kxyNuLl0lBG3lrAUHLyipaUfIsENuPGCchlHUMR07990xaOb8e5%2F6tQXn%2FAEKpvK2aiazIynU9teWRYg%2Br2QkpA4crmmF58VsU9VPRJbzDQxRGv9At3Y74ynIXYhC2Vc3ti%2FU6bkT4%2BmkwIOaGrPkL2G%2F%2Bnwhp%2FNNAPtjMLYFm0VWc1PTxmcdptuKLG%2BgO9IQxCFsDYh6fxrVXGlDvmHp500p94u1gw9ueMxAY6pgHivOL%2Fat8Z22j1RsrE%2BDCID1Gm8BulxIwg7BQM19o7anShIZ6joepcUGp5dU7UetNahoxPh0KTm%2BervXHSgdBW9uPpscaLGplKVMprk3LCpaYWEsYnSA0YAGBv8Lve%2BMuGgW9yE%2BgAJ%2FcCm8m7%2BKyvtwvRt8ZPIDaBSm2lRKt5N86u9LOwyr8GTqTzCVDDrQKd%2FRZmfPA4lq4YhjmPNX2%2BsiTlg1KR&X-Amz-Signature=ddb13c494bc2c3e17641bd6cada6466aec4cb543b14826b0eccfa42cc6bf59d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
