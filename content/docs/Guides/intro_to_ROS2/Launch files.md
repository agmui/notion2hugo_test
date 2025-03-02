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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2QT5QY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFfUrEHBNZpM9c%2B9nvJhtUizX6%2B5dngXtF1ruERg2Va8AiAYxR0YtEMX0RK6VyCq4y3IhvXNLQEzHseRmMVqDPsj3yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlDyNPPOVJ8DTuor4KtwDQkp4zqOPzsGRRZgSTFFrnyw6WljxKfmLpNPqsyB%2B7EiVhPUqIe%2FOrjO5w9NZ57ua3%2FZLdhsytag%2BTUsshpZIaeqjqc%2Ba63nMUorkuQYGOEq0%2BaP4HIGaptUl9hiMwIBinTIp0vSa557gcNqzNPb7LdIfv%2BXgxYPZfkXsDZfDEa6gFcYDUlc%2FQqqWLSASgp9eUoz%2BK8566podanmbJeDLZgBC4fSlKbMNThHz1k759yC1nSGaLfyDHZhSRYdT0PHpV9%2BKMdxOsnm%2FF0ng4OoyvzJPiB%2Fw%2BTQYL7HEgGQNA76pmCwaOqxiUbNSYCa8ZaJt%2F9HYdHRpZxltDeg12gJgmOxXJswQjJg8FBjgtza9%2FctoNgqxm7Dc0rAGWFCGsrL55EyY5xzLGo2PEJTCUWnf6Nrb1QIIypQxtk64FbQJQ3UeXLyRHo5R%2BJqKhDKibwpAFT2ljZ7NNv%2Bbgx6rsK%2F9Ep8To90rk4ME0KpVAKSjObQ9gE7%2BtlGS7oqtQZx6U1ZQAqW0N51IP1%2FGtwxL%2BBp8L%2BawL8%2BjI8LTxrG7Kjt3aWrWQB9v1gpLZcsB0BOUQVOec2X6ji%2BqKVsc5DKvNOlGD37aXAzQMt6ePXkYSsI%2F3B%2BK0PFlklbDIsEm85sw89ePvgY6pgGao7NtItxuy9g6KJ%2BL8oV4BO1ZrAAUNXlaAGhLpQ9sbrhuUNMTY2CZVKVakWHupwETkYfLSmQ6coSMJLZnDD3aYCDVBnqQm%2BZsSXGYhfBu9RV59STbgyCsdpa9CzUBv3hRnBQW1AcmtTAhuxB8f88tFe%2BzF0dbtvmhWuxOgqHs42npWBNAUqE8s8FLuor4syVcICRzmtO%2BbIJVBOjFAwEzkt57zadc&X-Amz-Signature=66c8db507163fa1b7e65498a38b6dfd07b407e789fe87df6857ceb6fb0691b63&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2QT5QY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFfUrEHBNZpM9c%2B9nvJhtUizX6%2B5dngXtF1ruERg2Va8AiAYxR0YtEMX0RK6VyCq4y3IhvXNLQEzHseRmMVqDPsj3yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlDyNPPOVJ8DTuor4KtwDQkp4zqOPzsGRRZgSTFFrnyw6WljxKfmLpNPqsyB%2B7EiVhPUqIe%2FOrjO5w9NZ57ua3%2FZLdhsytag%2BTUsshpZIaeqjqc%2Ba63nMUorkuQYGOEq0%2BaP4HIGaptUl9hiMwIBinTIp0vSa557gcNqzNPb7LdIfv%2BXgxYPZfkXsDZfDEa6gFcYDUlc%2FQqqWLSASgp9eUoz%2BK8566podanmbJeDLZgBC4fSlKbMNThHz1k759yC1nSGaLfyDHZhSRYdT0PHpV9%2BKMdxOsnm%2FF0ng4OoyvzJPiB%2Fw%2BTQYL7HEgGQNA76pmCwaOqxiUbNSYCa8ZaJt%2F9HYdHRpZxltDeg12gJgmOxXJswQjJg8FBjgtza9%2FctoNgqxm7Dc0rAGWFCGsrL55EyY5xzLGo2PEJTCUWnf6Nrb1QIIypQxtk64FbQJQ3UeXLyRHo5R%2BJqKhDKibwpAFT2ljZ7NNv%2Bbgx6rsK%2F9Ep8To90rk4ME0KpVAKSjObQ9gE7%2BtlGS7oqtQZx6U1ZQAqW0N51IP1%2FGtwxL%2BBp8L%2BawL8%2BjI8LTxrG7Kjt3aWrWQB9v1gpLZcsB0BOUQVOec2X6ji%2BqKVsc5DKvNOlGD37aXAzQMt6ePXkYSsI%2F3B%2BK0PFlklbDIsEm85sw89ePvgY6pgGao7NtItxuy9g6KJ%2BL8oV4BO1ZrAAUNXlaAGhLpQ9sbrhuUNMTY2CZVKVakWHupwETkYfLSmQ6coSMJLZnDD3aYCDVBnqQm%2BZsSXGYhfBu9RV59STbgyCsdpa9CzUBv3hRnBQW1AcmtTAhuxB8f88tFe%2BzF0dbtvmhWuxOgqHs42npWBNAUqE8s8FLuor4syVcICRzmtO%2BbIJVBOjFAwEzkt57zadc&X-Amz-Signature=a982f7df49d13ed191fce644fa49c5ba2577e5d4d12c92be2979787da866b79e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2QT5QY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFfUrEHBNZpM9c%2B9nvJhtUizX6%2B5dngXtF1ruERg2Va8AiAYxR0YtEMX0RK6VyCq4y3IhvXNLQEzHseRmMVqDPsj3yqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlDyNPPOVJ8DTuor4KtwDQkp4zqOPzsGRRZgSTFFrnyw6WljxKfmLpNPqsyB%2B7EiVhPUqIe%2FOrjO5w9NZ57ua3%2FZLdhsytag%2BTUsshpZIaeqjqc%2Ba63nMUorkuQYGOEq0%2BaP4HIGaptUl9hiMwIBinTIp0vSa557gcNqzNPb7LdIfv%2BXgxYPZfkXsDZfDEa6gFcYDUlc%2FQqqWLSASgp9eUoz%2BK8566podanmbJeDLZgBC4fSlKbMNThHz1k759yC1nSGaLfyDHZhSRYdT0PHpV9%2BKMdxOsnm%2FF0ng4OoyvzJPiB%2Fw%2BTQYL7HEgGQNA76pmCwaOqxiUbNSYCa8ZaJt%2F9HYdHRpZxltDeg12gJgmOxXJswQjJg8FBjgtza9%2FctoNgqxm7Dc0rAGWFCGsrL55EyY5xzLGo2PEJTCUWnf6Nrb1QIIypQxtk64FbQJQ3UeXLyRHo5R%2BJqKhDKibwpAFT2ljZ7NNv%2Bbgx6rsK%2F9Ep8To90rk4ME0KpVAKSjObQ9gE7%2BtlGS7oqtQZx6U1ZQAqW0N51IP1%2FGtwxL%2BBp8L%2BawL8%2BjI8LTxrG7Kjt3aWrWQB9v1gpLZcsB0BOUQVOec2X6ji%2BqKVsc5DKvNOlGD37aXAzQMt6ePXkYSsI%2F3B%2BK0PFlklbDIsEm85sw89ePvgY6pgGao7NtItxuy9g6KJ%2BL8oV4BO1ZrAAUNXlaAGhLpQ9sbrhuUNMTY2CZVKVakWHupwETkYfLSmQ6coSMJLZnDD3aYCDVBnqQm%2BZsSXGYhfBu9RV59STbgyCsdpa9CzUBv3hRnBQW1AcmtTAhuxB8f88tFe%2BzF0dbtvmhWuxOgqHs42npWBNAUqE8s8FLuor4syVcICRzmtO%2BbIJVBOjFAwEzkt57zadc&X-Amz-Signature=b8bc5a68b4249451fb65cc06dd5cb2b21a20442cce37f7b44e4e5163212d0022&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
