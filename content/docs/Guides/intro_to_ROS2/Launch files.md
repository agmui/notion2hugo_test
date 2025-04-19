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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUQVGGA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkLczl5GyxWuSfzU2vqH8BePwwLD0YGMKZJKvhDp0sQIhAKQFbGFgF1jJkaEvuccaDt9%2B1th3Q5fqgT4z8bGkT5AfKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1U%2BPf%2BSJiPHYgvoYq3AOwwFyCbGa9hb0JsrOxg%2BRzVUHoA9PjMsJ1xb1fjA0KLALwGnsnOnYfRywi8u2x1xZm8hQWYt%2Bv1OS950f8nX9GesjB3i5odfZDK36MYc32J9fr1SyW8wx33SWdlePvAEi9U%2FqNhhG9J%2FrTrWt2AUYriaYKkPTF9EIueYphh7Yhj%2B6NJT9dSENN0dIBeAwV6YuUZy61dIyFlwB5GyS2o0CHcAMFd%2FyeXoXPljI%2BMSt6QCea4KQsw35JeGWsmolziRRUaIU%2BBf8TeYYwy%2FoSmEo6PKOv5DWDzKOV0638i4gip1xY560O%2FXmUsxWPMT%2BW6OTg9VZv6VlVIjLN01%2F0EXZrRINO2WMVvMKG4SPldjRHmMCVRE5JZHqZLiB7ewjA%2BVpx6%2Fd1Y5%2BKzn%2FtASY3q2QysnKNAPd%2FXvlZRuubZTHq3rHEU%2FEtebhwhbW%2BUm6s3Oldd%2BVw2lt5qdMFtnIvAEslDc3OaVa8VizjLtJzYbfEno8YCWvjq40NSNRiOoeHvoIQv2Mxnk9Ge0BoGDI07gLXbQHeUfNQpGpteLRY0Nv7iyv0rvdDQuCPPxCIIQI%2BoM0883NRgMLmgtcHnQoen%2FZJi6XPIL13wyDHbzSP8y5JnnRSYXIs%2ByM9o3VjrDDF%2FIzABjqkAQE9Bw27i02FZ64rErakx6srM3bAnjrhqmGoykeJRJCxCBNd05gZEE3o0mBjD%2BardstG5cwtv74GjJkw2VRDjE3NvbByHV6uhE%2F1yAX4FDrAAGV7VeBbsggVrAgeQm%2FrMjvyMd3enkEfmQNYU92pO3X2RFHpmcj7RPMx7lN2hVN%2BkKPnnJiA997jYCsARS8ZCCo4sUAtP33B%2FhZjr6DkrVj%2Bk%2FpH&X-Amz-Signature=a707b25ee66f5eba1888c8961219fdfdd0999951e55a19b58347b7e018907926&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUQVGGA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkLczl5GyxWuSfzU2vqH8BePwwLD0YGMKZJKvhDp0sQIhAKQFbGFgF1jJkaEvuccaDt9%2B1th3Q5fqgT4z8bGkT5AfKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1U%2BPf%2BSJiPHYgvoYq3AOwwFyCbGa9hb0JsrOxg%2BRzVUHoA9PjMsJ1xb1fjA0KLALwGnsnOnYfRywi8u2x1xZm8hQWYt%2Bv1OS950f8nX9GesjB3i5odfZDK36MYc32J9fr1SyW8wx33SWdlePvAEi9U%2FqNhhG9J%2FrTrWt2AUYriaYKkPTF9EIueYphh7Yhj%2B6NJT9dSENN0dIBeAwV6YuUZy61dIyFlwB5GyS2o0CHcAMFd%2FyeXoXPljI%2BMSt6QCea4KQsw35JeGWsmolziRRUaIU%2BBf8TeYYwy%2FoSmEo6PKOv5DWDzKOV0638i4gip1xY560O%2FXmUsxWPMT%2BW6OTg9VZv6VlVIjLN01%2F0EXZrRINO2WMVvMKG4SPldjRHmMCVRE5JZHqZLiB7ewjA%2BVpx6%2Fd1Y5%2BKzn%2FtASY3q2QysnKNAPd%2FXvlZRuubZTHq3rHEU%2FEtebhwhbW%2BUm6s3Oldd%2BVw2lt5qdMFtnIvAEslDc3OaVa8VizjLtJzYbfEno8YCWvjq40NSNRiOoeHvoIQv2Mxnk9Ge0BoGDI07gLXbQHeUfNQpGpteLRY0Nv7iyv0rvdDQuCPPxCIIQI%2BoM0883NRgMLmgtcHnQoen%2FZJi6XPIL13wyDHbzSP8y5JnnRSYXIs%2ByM9o3VjrDDF%2FIzABjqkAQE9Bw27i02FZ64rErakx6srM3bAnjrhqmGoykeJRJCxCBNd05gZEE3o0mBjD%2BardstG5cwtv74GjJkw2VRDjE3NvbByHV6uhE%2F1yAX4FDrAAGV7VeBbsggVrAgeQm%2FrMjvyMd3enkEfmQNYU92pO3X2RFHpmcj7RPMx7lN2hVN%2BkKPnnJiA997jYCsARS8ZCCo4sUAtP33B%2FhZjr6DkrVj%2Bk%2FpH&X-Amz-Signature=10270bae4bf4c2b19b722ea70f2b0f1b7fdf44d9eca6609dc391a7d7629c9361&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUQVGGA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkLczl5GyxWuSfzU2vqH8BePwwLD0YGMKZJKvhDp0sQIhAKQFbGFgF1jJkaEvuccaDt9%2B1th3Q5fqgT4z8bGkT5AfKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1U%2BPf%2BSJiPHYgvoYq3AOwwFyCbGa9hb0JsrOxg%2BRzVUHoA9PjMsJ1xb1fjA0KLALwGnsnOnYfRywi8u2x1xZm8hQWYt%2Bv1OS950f8nX9GesjB3i5odfZDK36MYc32J9fr1SyW8wx33SWdlePvAEi9U%2FqNhhG9J%2FrTrWt2AUYriaYKkPTF9EIueYphh7Yhj%2B6NJT9dSENN0dIBeAwV6YuUZy61dIyFlwB5GyS2o0CHcAMFd%2FyeXoXPljI%2BMSt6QCea4KQsw35JeGWsmolziRRUaIU%2BBf8TeYYwy%2FoSmEo6PKOv5DWDzKOV0638i4gip1xY560O%2FXmUsxWPMT%2BW6OTg9VZv6VlVIjLN01%2F0EXZrRINO2WMVvMKG4SPldjRHmMCVRE5JZHqZLiB7ewjA%2BVpx6%2Fd1Y5%2BKzn%2FtASY3q2QysnKNAPd%2FXvlZRuubZTHq3rHEU%2FEtebhwhbW%2BUm6s3Oldd%2BVw2lt5qdMFtnIvAEslDc3OaVa8VizjLtJzYbfEno8YCWvjq40NSNRiOoeHvoIQv2Mxnk9Ge0BoGDI07gLXbQHeUfNQpGpteLRY0Nv7iyv0rvdDQuCPPxCIIQI%2BoM0883NRgMLmgtcHnQoen%2FZJi6XPIL13wyDHbzSP8y5JnnRSYXIs%2ByM9o3VjrDDF%2FIzABjqkAQE9Bw27i02FZ64rErakx6srM3bAnjrhqmGoykeJRJCxCBNd05gZEE3o0mBjD%2BardstG5cwtv74GjJkw2VRDjE3NvbByHV6uhE%2F1yAX4FDrAAGV7VeBbsggVrAgeQm%2FrMjvyMd3enkEfmQNYU92pO3X2RFHpmcj7RPMx7lN2hVN%2BkKPnnJiA997jYCsARS8ZCCo4sUAtP33B%2FhZjr6DkrVj%2Bk%2FpH&X-Amz-Signature=3ccdc49a5da4c580043d4ac5612e179d4d1d3d3863f6eddfb352d8833523b587&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
