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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSINDVO2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMHQgjre7WC37P0HlPy1nP9CSD7WKTYL2J1BvB6qH5jAiBEayinRZ45n%2BIAGpj0Hc2cOkMpZ748Yvixb3hbo%2FYy5yr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMceBg7%2BCUYC44PxCSKtwD9OCg5Qpqmdy7umcatZCyNqY5kJkdEKRRjstC5dxyMrefRIIxyZUcy%2B57pKn2Avp7GFW1eSjYUDA8EhVxVipb98v4Hyg8cHOxppBHrRt8lZ1iSUmHGQ7myPKrQcip2ffzSqA%2F%2BDPuU0Oyc9EAaMoJ09V3P9JVkRMfNlSjFLrQNeyzlWlBVjBHa8RgcenMEMBjtc5LcYw6i5K5ZQahqWjoNfR2uUiOaBF7RVQ4hWSFgJk4YjWfaIQ3bJPM4d4j4v02HpdEH%2FmwliN4Z%2F6i67ZCa3tN8GPeejQDNCTIJRkf2zt9uopdPlXEQXML888PxdE5VsdsELm31i2Y3BVUGCRwIp4AT4JyeYulUXCm3ifnp%2FCDFRNGLH6CxGvRB7meBAJYf8HNjYt9Ob9%2B%2Bj7Zv5Zg0iFYmrGl3WfcOrObk3RiT1xJnUkaLdD5W1xd9rtFKJi8J%2BKN8tDpVeGGx5JxgCXQAYehqAlLtDLTdJJKjY%2FLkzaxK8s2gIr9M104Yj4fCHEWiKdLEdKqBRHyQ3Vh7%2FJxbrdb7TIewSopdz%2BxFd5sv2rqhQKQYm4EYsQCR7pG%2B1Cd0Y0sY%2FkjdogU4nHt182%2B9RM9p5UE7%2B8LxWgt4K%2F6Dx0NPVJpAd0N%2Fh4jUx8wgpfYwQY6pgGC%2BwqE9N7wQcD5vYJr0tjhZ69XlZIt5KhtzNFGxTa54Ni8IW7r3wRyI9JuCvGyWhxxsOnaginTsV2PUP1hEavzQ1tM6G%2BxQJSvJd%2Bcguhg8cwIS%2FMzsHNctNHJvXjmEeeI6nhAN1jXjK8m9zYHof80WPIrCaL9D%2FYnwSH5L7mRWfjBfwmb9lvKOqlbOoBW3Iwop6n%2BfQAaIkSG%2BQKU9x8uiMq6fnMB&X-Amz-Signature=6fcb743230237c2749d6947030f73106344ec0a8753b36353703fafdfe2839db&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSINDVO2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMHQgjre7WC37P0HlPy1nP9CSD7WKTYL2J1BvB6qH5jAiBEayinRZ45n%2BIAGpj0Hc2cOkMpZ748Yvixb3hbo%2FYy5yr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMceBg7%2BCUYC44PxCSKtwD9OCg5Qpqmdy7umcatZCyNqY5kJkdEKRRjstC5dxyMrefRIIxyZUcy%2B57pKn2Avp7GFW1eSjYUDA8EhVxVipb98v4Hyg8cHOxppBHrRt8lZ1iSUmHGQ7myPKrQcip2ffzSqA%2F%2BDPuU0Oyc9EAaMoJ09V3P9JVkRMfNlSjFLrQNeyzlWlBVjBHa8RgcenMEMBjtc5LcYw6i5K5ZQahqWjoNfR2uUiOaBF7RVQ4hWSFgJk4YjWfaIQ3bJPM4d4j4v02HpdEH%2FmwliN4Z%2F6i67ZCa3tN8GPeejQDNCTIJRkf2zt9uopdPlXEQXML888PxdE5VsdsELm31i2Y3BVUGCRwIp4AT4JyeYulUXCm3ifnp%2FCDFRNGLH6CxGvRB7meBAJYf8HNjYt9Ob9%2B%2Bj7Zv5Zg0iFYmrGl3WfcOrObk3RiT1xJnUkaLdD5W1xd9rtFKJi8J%2BKN8tDpVeGGx5JxgCXQAYehqAlLtDLTdJJKjY%2FLkzaxK8s2gIr9M104Yj4fCHEWiKdLEdKqBRHyQ3Vh7%2FJxbrdb7TIewSopdz%2BxFd5sv2rqhQKQYm4EYsQCR7pG%2B1Cd0Y0sY%2FkjdogU4nHt182%2B9RM9p5UE7%2B8LxWgt4K%2F6Dx0NPVJpAd0N%2Fh4jUx8wgpfYwQY6pgGC%2BwqE9N7wQcD5vYJr0tjhZ69XlZIt5KhtzNFGxTa54Ni8IW7r3wRyI9JuCvGyWhxxsOnaginTsV2PUP1hEavzQ1tM6G%2BxQJSvJd%2Bcguhg8cwIS%2FMzsHNctNHJvXjmEeeI6nhAN1jXjK8m9zYHof80WPIrCaL9D%2FYnwSH5L7mRWfjBfwmb9lvKOqlbOoBW3Iwop6n%2BfQAaIkSG%2BQKU9x8uiMq6fnMB&X-Amz-Signature=75fdc64f365f23deaf10f4d897937a7e814e8b5d02002927cc102da55f214e86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSINDVO2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMHQgjre7WC37P0HlPy1nP9CSD7WKTYL2J1BvB6qH5jAiBEayinRZ45n%2BIAGpj0Hc2cOkMpZ748Yvixb3hbo%2FYy5yr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMceBg7%2BCUYC44PxCSKtwD9OCg5Qpqmdy7umcatZCyNqY5kJkdEKRRjstC5dxyMrefRIIxyZUcy%2B57pKn2Avp7GFW1eSjYUDA8EhVxVipb98v4Hyg8cHOxppBHrRt8lZ1iSUmHGQ7myPKrQcip2ffzSqA%2F%2BDPuU0Oyc9EAaMoJ09V3P9JVkRMfNlSjFLrQNeyzlWlBVjBHa8RgcenMEMBjtc5LcYw6i5K5ZQahqWjoNfR2uUiOaBF7RVQ4hWSFgJk4YjWfaIQ3bJPM4d4j4v02HpdEH%2FmwliN4Z%2F6i67ZCa3tN8GPeejQDNCTIJRkf2zt9uopdPlXEQXML888PxdE5VsdsELm31i2Y3BVUGCRwIp4AT4JyeYulUXCm3ifnp%2FCDFRNGLH6CxGvRB7meBAJYf8HNjYt9Ob9%2B%2Bj7Zv5Zg0iFYmrGl3WfcOrObk3RiT1xJnUkaLdD5W1xd9rtFKJi8J%2BKN8tDpVeGGx5JxgCXQAYehqAlLtDLTdJJKjY%2FLkzaxK8s2gIr9M104Yj4fCHEWiKdLEdKqBRHyQ3Vh7%2FJxbrdb7TIewSopdz%2BxFd5sv2rqhQKQYm4EYsQCR7pG%2B1Cd0Y0sY%2FkjdogU4nHt182%2B9RM9p5UE7%2B8LxWgt4K%2F6Dx0NPVJpAd0N%2Fh4jUx8wgpfYwQY6pgGC%2BwqE9N7wQcD5vYJr0tjhZ69XlZIt5KhtzNFGxTa54Ni8IW7r3wRyI9JuCvGyWhxxsOnaginTsV2PUP1hEavzQ1tM6G%2BxQJSvJd%2Bcguhg8cwIS%2FMzsHNctNHJvXjmEeeI6nhAN1jXjK8m9zYHof80WPIrCaL9D%2FYnwSH5L7mRWfjBfwmb9lvKOqlbOoBW3Iwop6n%2BfQAaIkSG%2BQKU9x8uiMq6fnMB&X-Amz-Signature=1fb5aac4fd98d5ae16b780c3bfe5ceae97c9d8359f4b94fb1919e1ed64900d22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
