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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJBWO54%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVSOrnLerlHwpo709SrdjNZgjFkGgs5JyW3ZlMRhC%2FQIgCsweNfGL2dzYFq1tfjZJkScCT5OLEQibVFz5101HPu0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F0nRS3FMWTW%2B6hySrcA0opUoh%2FAXYkwbvi2VWH5GfwR5LP54eLQE5NZPxsIaKiKt1h68oN7Q2ni%2BQKZN%2BWvxS%2Fu5km2lNO6NZunsR4ryG7JBIdisWRBpYb2hTh5jl4NcL95nL5ZDubsPFvJRVHpA2rDc5IcItjvZfAbXW78HDdmZSVvevdNBkpjtGt8asOQ2hjFI9NXRCn3s%2FWg4EBC6CE%2Ft9%2FArKa%2BTXFPdDlfIun8TQ%2F6ah0DuyGt3k4E9jlL6KbMEnKDYr%2BTc6WS3nZEiLmRwvXCsvjpvKf3CmXN5CG6hQX7SY9DqAS%2F43N5XvN%2FDxqVb9KAv8KvmmiadOMH4r5%2Bh6Drcu%2BuRCwJHCdZ4hJe5p6ZHx4F8422itzq3W178BWVlt443HqlwMj8591m%2BqDOO1pZjFb4gk%2FHHwHOwvxxmF%2Fga8B7M7SDL3%2FdeJYe1ud7cJPVK3bZDlnlQ%2FWmjnFy5WTJZz%2FmU0Bn0uUvNTOLDadjbyUfELF7fz1MN0%2F6YBJpd4D1a15YvCkVc6DRipcpD9uq11F7zk6Op8%2BJWCzXonMf5%2BretII5N4b40QtHVOQIZyOb6G3Gcf4CnYXYd0WPfCJF0BvxoIyrPKhyMKaHi0JiA2L0MYrOoZKvCygwI5Z1dJ%2FCCuzyzIkMKn008IGOqUB9wSsPiufWRDeHCltgqDw%2FDzPCZIWs7xvfugzH%2FurGi9hIqN1VeQTNWhsBbIhmKjpOhOOqTtZ9mxDmNoVljSHVMZ2NroOXt0lyEzWpHC5%2Fw7Da6fWXBHSJM5%2FF88AIs5pVlGjqy6FyvxDo%2FmJNJwiJB08rLVRdVeLGw2Pnlz75LWQp0bsOIoo%2ByDJ4UgUJqqrsAJ8cZIs8pBobaotwAtQjQRwP7ta&X-Amz-Signature=2f9c31d949cae45955fa091689f8f524c146d5c466812bbe0e173e5a7f583595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJBWO54%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVSOrnLerlHwpo709SrdjNZgjFkGgs5JyW3ZlMRhC%2FQIgCsweNfGL2dzYFq1tfjZJkScCT5OLEQibVFz5101HPu0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F0nRS3FMWTW%2B6hySrcA0opUoh%2FAXYkwbvi2VWH5GfwR5LP54eLQE5NZPxsIaKiKt1h68oN7Q2ni%2BQKZN%2BWvxS%2Fu5km2lNO6NZunsR4ryG7JBIdisWRBpYb2hTh5jl4NcL95nL5ZDubsPFvJRVHpA2rDc5IcItjvZfAbXW78HDdmZSVvevdNBkpjtGt8asOQ2hjFI9NXRCn3s%2FWg4EBC6CE%2Ft9%2FArKa%2BTXFPdDlfIun8TQ%2F6ah0DuyGt3k4E9jlL6KbMEnKDYr%2BTc6WS3nZEiLmRwvXCsvjpvKf3CmXN5CG6hQX7SY9DqAS%2F43N5XvN%2FDxqVb9KAv8KvmmiadOMH4r5%2Bh6Drcu%2BuRCwJHCdZ4hJe5p6ZHx4F8422itzq3W178BWVlt443HqlwMj8591m%2BqDOO1pZjFb4gk%2FHHwHOwvxxmF%2Fga8B7M7SDL3%2FdeJYe1ud7cJPVK3bZDlnlQ%2FWmjnFy5WTJZz%2FmU0Bn0uUvNTOLDadjbyUfELF7fz1MN0%2F6YBJpd4D1a15YvCkVc6DRipcpD9uq11F7zk6Op8%2BJWCzXonMf5%2BretII5N4b40QtHVOQIZyOb6G3Gcf4CnYXYd0WPfCJF0BvxoIyrPKhyMKaHi0JiA2L0MYrOoZKvCygwI5Z1dJ%2FCCuzyzIkMKn008IGOqUB9wSsPiufWRDeHCltgqDw%2FDzPCZIWs7xvfugzH%2FurGi9hIqN1VeQTNWhsBbIhmKjpOhOOqTtZ9mxDmNoVljSHVMZ2NroOXt0lyEzWpHC5%2Fw7Da6fWXBHSJM5%2FF88AIs5pVlGjqy6FyvxDo%2FmJNJwiJB08rLVRdVeLGw2Pnlz75LWQp0bsOIoo%2ByDJ4UgUJqqrsAJ8cZIs8pBobaotwAtQjQRwP7ta&X-Amz-Signature=e24f85ce0d0ab808a18b5cf936ff37a81051376b3f3847ba8fcd38abf343c10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJBWO54%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTVSOrnLerlHwpo709SrdjNZgjFkGgs5JyW3ZlMRhC%2FQIgCsweNfGL2dzYFq1tfjZJkScCT5OLEQibVFz5101HPu0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F0nRS3FMWTW%2B6hySrcA0opUoh%2FAXYkwbvi2VWH5GfwR5LP54eLQE5NZPxsIaKiKt1h68oN7Q2ni%2BQKZN%2BWvxS%2Fu5km2lNO6NZunsR4ryG7JBIdisWRBpYb2hTh5jl4NcL95nL5ZDubsPFvJRVHpA2rDc5IcItjvZfAbXW78HDdmZSVvevdNBkpjtGt8asOQ2hjFI9NXRCn3s%2FWg4EBC6CE%2Ft9%2FArKa%2BTXFPdDlfIun8TQ%2F6ah0DuyGt3k4E9jlL6KbMEnKDYr%2BTc6WS3nZEiLmRwvXCsvjpvKf3CmXN5CG6hQX7SY9DqAS%2F43N5XvN%2FDxqVb9KAv8KvmmiadOMH4r5%2Bh6Drcu%2BuRCwJHCdZ4hJe5p6ZHx4F8422itzq3W178BWVlt443HqlwMj8591m%2BqDOO1pZjFb4gk%2FHHwHOwvxxmF%2Fga8B7M7SDL3%2FdeJYe1ud7cJPVK3bZDlnlQ%2FWmjnFy5WTJZz%2FmU0Bn0uUvNTOLDadjbyUfELF7fz1MN0%2F6YBJpd4D1a15YvCkVc6DRipcpD9uq11F7zk6Op8%2BJWCzXonMf5%2BretII5N4b40QtHVOQIZyOb6G3Gcf4CnYXYd0WPfCJF0BvxoIyrPKhyMKaHi0JiA2L0MYrOoZKvCygwI5Z1dJ%2FCCuzyzIkMKn008IGOqUB9wSsPiufWRDeHCltgqDw%2FDzPCZIWs7xvfugzH%2FurGi9hIqN1VeQTNWhsBbIhmKjpOhOOqTtZ9mxDmNoVljSHVMZ2NroOXt0lyEzWpHC5%2Fw7Da6fWXBHSJM5%2FF88AIs5pVlGjqy6FyvxDo%2FmJNJwiJB08rLVRdVeLGw2Pnlz75LWQp0bsOIoo%2ByDJ4UgUJqqrsAJ8cZIs8pBobaotwAtQjQRwP7ta&X-Amz-Signature=aba858d591a713251ef4317c1870cd0909f3eda43f1a8adc7a07eeb240928067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
