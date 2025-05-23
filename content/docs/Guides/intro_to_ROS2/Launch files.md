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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDZCXXI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDWx1GzGEDKz8jvOl%2BR4elkRrh0ARGXygHIFAC4e0e5QAIhANju7%2FWXYqJm3D5t3rG9sUeGWYAUUslcn3MJj2o9NCdhKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJaOmYi7Bu2YFvSCUq3ANSLzvDvGz0gKpibMbdd4ZawHbr4R5%2B%2B9HVwDC07lfWR5%2Ba2%2FAvW2gYqoXaPKQPmYfnJZp6%2BKqy9sM8NA65Cex6paXMSF6w%2BpUmX3hbkwD4V%2BA9Y4xgQoizsK79uU%2BFGoCtg8zG4ICY12bltwnlwSnnnLsVzZ062pVC4DHw3U%2BKgE6iIo2IFTazqhBFyNx6nKc9vbIyHzkEbuy8bZ0srzL%2FUwUsAESZkcUOEQ0WHVH9%2FIzYtggOvcJk7P6RB4TUO5r%2FRVE1UMeokm8mdcQeAKUJcHJl5Mhy1Pkg1m%2FP4%2BA89ab1gnNfbugVFOnpuBZ0uLyplZtStcJmAH0lVxTDBCsVITphHXv9cZ6axE2jnsF8SQrvqWXmgruWdvQYfeahqI5Gsdic0uv5E7WF2U7D9IAGfSldxt2jvTKM76WoDIMPAvFQAulDlGVa7junNcTMRMqWkOvO8aRr%2BcmzydNwL8jsxqdGKoEMxbV8LUuiP2J1ztri%2Blqeyn9wehacVT%2BKA4%2BOEJLZw2rPQaV7obWeohYBoZhN5aHCtxKvYL%2FKf0yOg6lCU7zTWLzIiiZCkPuMdXViEPZyFiBhnhxCwvzhhM7TLrVG8YTlYJfz2eTB%2BBzfDMLHQ5vdIGT4G3%2FqKDCmocPBBjqkAeA1kfqa9mVOofG%2FMMPx8thnr6YIBtQkyQ2d7TNEncJzt03j%2F9IVLPvGCBrheTP%2F5xAAeLoy6xXMARRZrXR%2FJ2PiXu8IUjq5bD8hM351brY%2F4KgB74KlToy09HP4FEmdjVVWtGU2AJOZegS9YMCN%2FvnCTg1uD%2B5L%2BNChft9eGb0DZGZPxb9EtGa2ZKLKd%2FA1hzQumTtpbcZv5zbf6Q9%2FXRg4yUJi&X-Amz-Signature=6ed3559839e56df16182d6635c69c346aa02b7c27fb63e549af3150db011d443&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDZCXXI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDWx1GzGEDKz8jvOl%2BR4elkRrh0ARGXygHIFAC4e0e5QAIhANju7%2FWXYqJm3D5t3rG9sUeGWYAUUslcn3MJj2o9NCdhKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJaOmYi7Bu2YFvSCUq3ANSLzvDvGz0gKpibMbdd4ZawHbr4R5%2B%2B9HVwDC07lfWR5%2Ba2%2FAvW2gYqoXaPKQPmYfnJZp6%2BKqy9sM8NA65Cex6paXMSF6w%2BpUmX3hbkwD4V%2BA9Y4xgQoizsK79uU%2BFGoCtg8zG4ICY12bltwnlwSnnnLsVzZ062pVC4DHw3U%2BKgE6iIo2IFTazqhBFyNx6nKc9vbIyHzkEbuy8bZ0srzL%2FUwUsAESZkcUOEQ0WHVH9%2FIzYtggOvcJk7P6RB4TUO5r%2FRVE1UMeokm8mdcQeAKUJcHJl5Mhy1Pkg1m%2FP4%2BA89ab1gnNfbugVFOnpuBZ0uLyplZtStcJmAH0lVxTDBCsVITphHXv9cZ6axE2jnsF8SQrvqWXmgruWdvQYfeahqI5Gsdic0uv5E7WF2U7D9IAGfSldxt2jvTKM76WoDIMPAvFQAulDlGVa7junNcTMRMqWkOvO8aRr%2BcmzydNwL8jsxqdGKoEMxbV8LUuiP2J1ztri%2Blqeyn9wehacVT%2BKA4%2BOEJLZw2rPQaV7obWeohYBoZhN5aHCtxKvYL%2FKf0yOg6lCU7zTWLzIiiZCkPuMdXViEPZyFiBhnhxCwvzhhM7TLrVG8YTlYJfz2eTB%2BBzfDMLHQ5vdIGT4G3%2FqKDCmocPBBjqkAeA1kfqa9mVOofG%2FMMPx8thnr6YIBtQkyQ2d7TNEncJzt03j%2F9IVLPvGCBrheTP%2F5xAAeLoy6xXMARRZrXR%2FJ2PiXu8IUjq5bD8hM351brY%2F4KgB74KlToy09HP4FEmdjVVWtGU2AJOZegS9YMCN%2FvnCTg1uD%2B5L%2BNChft9eGb0DZGZPxb9EtGa2ZKLKd%2FA1hzQumTtpbcZv5zbf6Q9%2FXRg4yUJi&X-Amz-Signature=4aea35e2d5bfb56b802582b89f313d5719ec3f96b91cd3e40bc8bc7b0b545c39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDZCXXI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDWx1GzGEDKz8jvOl%2BR4elkRrh0ARGXygHIFAC4e0e5QAIhANju7%2FWXYqJm3D5t3rG9sUeGWYAUUslcn3MJj2o9NCdhKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJaOmYi7Bu2YFvSCUq3ANSLzvDvGz0gKpibMbdd4ZawHbr4R5%2B%2B9HVwDC07lfWR5%2Ba2%2FAvW2gYqoXaPKQPmYfnJZp6%2BKqy9sM8NA65Cex6paXMSF6w%2BpUmX3hbkwD4V%2BA9Y4xgQoizsK79uU%2BFGoCtg8zG4ICY12bltwnlwSnnnLsVzZ062pVC4DHw3U%2BKgE6iIo2IFTazqhBFyNx6nKc9vbIyHzkEbuy8bZ0srzL%2FUwUsAESZkcUOEQ0WHVH9%2FIzYtggOvcJk7P6RB4TUO5r%2FRVE1UMeokm8mdcQeAKUJcHJl5Mhy1Pkg1m%2FP4%2BA89ab1gnNfbugVFOnpuBZ0uLyplZtStcJmAH0lVxTDBCsVITphHXv9cZ6axE2jnsF8SQrvqWXmgruWdvQYfeahqI5Gsdic0uv5E7WF2U7D9IAGfSldxt2jvTKM76WoDIMPAvFQAulDlGVa7junNcTMRMqWkOvO8aRr%2BcmzydNwL8jsxqdGKoEMxbV8LUuiP2J1ztri%2Blqeyn9wehacVT%2BKA4%2BOEJLZw2rPQaV7obWeohYBoZhN5aHCtxKvYL%2FKf0yOg6lCU7zTWLzIiiZCkPuMdXViEPZyFiBhnhxCwvzhhM7TLrVG8YTlYJfz2eTB%2BBzfDMLHQ5vdIGT4G3%2FqKDCmocPBBjqkAeA1kfqa9mVOofG%2FMMPx8thnr6YIBtQkyQ2d7TNEncJzt03j%2F9IVLPvGCBrheTP%2F5xAAeLoy6xXMARRZrXR%2FJ2PiXu8IUjq5bD8hM351brY%2F4KgB74KlToy09HP4FEmdjVVWtGU2AJOZegS9YMCN%2FvnCTg1uD%2B5L%2BNChft9eGb0DZGZPxb9EtGa2ZKLKd%2FA1hzQumTtpbcZv5zbf6Q9%2FXRg4yUJi&X-Amz-Signature=2f10907fc04396a167aba9682650e4fb0b77b1a15a9e2502d6b5bba1695803df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
