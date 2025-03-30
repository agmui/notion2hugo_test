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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHCESD7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDFo6qbEXyoVpmcjGTcDTsOI%2FN%2Ftv1lyzHRxLEg%2BvGL4AIhAP9rcOXokIio32fnLZwRBwG04yU4bbWwMTo0DAiCgxfTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxrar%2FVRWJ2Hn7pUEq3AMQSiGxPSt%2F1hSBKaXezh8tg5BbO7LkmS4uVg5dq%2B6Q8%2F92AW%2BkiTtlNGYSrWdrnqHnzShSR6Z%2F3Lh1f4BkPwxg1PafS9ldndz%2Bq4pCjOVU%2F72VzjEfVaCaQSubUGVMLIUynipPMWvA0sOrK%2BbLTQPBPZNI4UMF81iwRE0xmZvcugQo1xuIPkUJxOhiqLC%2FdC174R5sX7wZAfxKOeY9xOYABduq%2Bcc%2FYsSrjd4P3k%2BlfWVbrQjm%2B3iWvZ9e15EHC%2BaXMBj5zZR2D2AvjpYnVZZRn7vNxYta6E2yMBFPGHoiEIOmz4WPLceJuTKPnxdGPoAQqy9AfnRwuHKhW%2F4ubVnNJMcWzS3sqtqnssoufEGELBVxjtN%2FuCGZwmIvTxBl35MHAizxIDjWkkDwXPSSjVfNpqdX3NX2NTZ1qtiVE7dBPH0UrLx7e9m60HHiSka8ESYa%2FS0GDlM3RXRSuYSjuK4GNZ9RsJtFV4unw5WyVEvUICMa5VzXN4UjQDlTx9CI4V0Vi5uswkvh04%2FEDL%2Bk6brfu84ajDvEcGJNzrBVKfa7A8UHzUVWcukmzYIZaiXlSVCa28Nc5M9DDSqYnYNdRUXj0%2FFn%2FOPEUiyulI3d39lWS44y0EH0uRabjcCgDTCO7qW%2FBjqkAWBPcU%2Fe0SlQEx0WlNIIlnqYxk8VRceiFYHWLeSbsxSJXxbgq6H7FEMPZBeHjY6S0n9RZgOF0eDrAIKhFPrUqWzxIrFLhwLH852d3AT%2FD5R2Jpsu4jjQhFW%2FoLCn5jADf1Qbq0n8B%2BIUoC3mlFmibDNeiywtFeRGk8o0T7MhPFwBhKfH0in%2BGHJ8ETrW4YhLNCPKoVLBxW2h%2FDgGcvJRbULdUxgI&X-Amz-Signature=60c3007dd8e5adeb5659453ffdf44dc077778a2efc162679aff51aecff9c644f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHCESD7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDFo6qbEXyoVpmcjGTcDTsOI%2FN%2Ftv1lyzHRxLEg%2BvGL4AIhAP9rcOXokIio32fnLZwRBwG04yU4bbWwMTo0DAiCgxfTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxrar%2FVRWJ2Hn7pUEq3AMQSiGxPSt%2F1hSBKaXezh8tg5BbO7LkmS4uVg5dq%2B6Q8%2F92AW%2BkiTtlNGYSrWdrnqHnzShSR6Z%2F3Lh1f4BkPwxg1PafS9ldndz%2Bq4pCjOVU%2F72VzjEfVaCaQSubUGVMLIUynipPMWvA0sOrK%2BbLTQPBPZNI4UMF81iwRE0xmZvcugQo1xuIPkUJxOhiqLC%2FdC174R5sX7wZAfxKOeY9xOYABduq%2Bcc%2FYsSrjd4P3k%2BlfWVbrQjm%2B3iWvZ9e15EHC%2BaXMBj5zZR2D2AvjpYnVZZRn7vNxYta6E2yMBFPGHoiEIOmz4WPLceJuTKPnxdGPoAQqy9AfnRwuHKhW%2F4ubVnNJMcWzS3sqtqnssoufEGELBVxjtN%2FuCGZwmIvTxBl35MHAizxIDjWkkDwXPSSjVfNpqdX3NX2NTZ1qtiVE7dBPH0UrLx7e9m60HHiSka8ESYa%2FS0GDlM3RXRSuYSjuK4GNZ9RsJtFV4unw5WyVEvUICMa5VzXN4UjQDlTx9CI4V0Vi5uswkvh04%2FEDL%2Bk6brfu84ajDvEcGJNzrBVKfa7A8UHzUVWcukmzYIZaiXlSVCa28Nc5M9DDSqYnYNdRUXj0%2FFn%2FOPEUiyulI3d39lWS44y0EH0uRabjcCgDTCO7qW%2FBjqkAWBPcU%2Fe0SlQEx0WlNIIlnqYxk8VRceiFYHWLeSbsxSJXxbgq6H7FEMPZBeHjY6S0n9RZgOF0eDrAIKhFPrUqWzxIrFLhwLH852d3AT%2FD5R2Jpsu4jjQhFW%2FoLCn5jADf1Qbq0n8B%2BIUoC3mlFmibDNeiywtFeRGk8o0T7MhPFwBhKfH0in%2BGHJ8ETrW4YhLNCPKoVLBxW2h%2FDgGcvJRbULdUxgI&X-Amz-Signature=f31b6cdf69c30c016e45d0611a1f665b5443e820f9bba4eed3cfe9374e1e2992&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHCESD7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDFo6qbEXyoVpmcjGTcDTsOI%2FN%2Ftv1lyzHRxLEg%2BvGL4AIhAP9rcOXokIio32fnLZwRBwG04yU4bbWwMTo0DAiCgxfTKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxrar%2FVRWJ2Hn7pUEq3AMQSiGxPSt%2F1hSBKaXezh8tg5BbO7LkmS4uVg5dq%2B6Q8%2F92AW%2BkiTtlNGYSrWdrnqHnzShSR6Z%2F3Lh1f4BkPwxg1PafS9ldndz%2Bq4pCjOVU%2F72VzjEfVaCaQSubUGVMLIUynipPMWvA0sOrK%2BbLTQPBPZNI4UMF81iwRE0xmZvcugQo1xuIPkUJxOhiqLC%2FdC174R5sX7wZAfxKOeY9xOYABduq%2Bcc%2FYsSrjd4P3k%2BlfWVbrQjm%2B3iWvZ9e15EHC%2BaXMBj5zZR2D2AvjpYnVZZRn7vNxYta6E2yMBFPGHoiEIOmz4WPLceJuTKPnxdGPoAQqy9AfnRwuHKhW%2F4ubVnNJMcWzS3sqtqnssoufEGELBVxjtN%2FuCGZwmIvTxBl35MHAizxIDjWkkDwXPSSjVfNpqdX3NX2NTZ1qtiVE7dBPH0UrLx7e9m60HHiSka8ESYa%2FS0GDlM3RXRSuYSjuK4GNZ9RsJtFV4unw5WyVEvUICMa5VzXN4UjQDlTx9CI4V0Vi5uswkvh04%2FEDL%2Bk6brfu84ajDvEcGJNzrBVKfa7A8UHzUVWcukmzYIZaiXlSVCa28Nc5M9DDSqYnYNdRUXj0%2FFn%2FOPEUiyulI3d39lWS44y0EH0uRabjcCgDTCO7qW%2FBjqkAWBPcU%2Fe0SlQEx0WlNIIlnqYxk8VRceiFYHWLeSbsxSJXxbgq6H7FEMPZBeHjY6S0n9RZgOF0eDrAIKhFPrUqWzxIrFLhwLH852d3AT%2FD5R2Jpsu4jjQhFW%2FoLCn5jADf1Qbq0n8B%2BIUoC3mlFmibDNeiywtFeRGk8o0T7MhPFwBhKfH0in%2BGHJ8ETrW4YhLNCPKoVLBxW2h%2FDgGcvJRbULdUxgI&X-Amz-Signature=a5f47c3db5e7450cb87d18da1eeec106eb21eeabaf3574be332ec31f0c0df399&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
