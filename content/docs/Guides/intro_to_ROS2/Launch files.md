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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZXSZLC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9VCJwOskYCT7717QiQ6%2BpP9mmA04Ox%2F9U9LqeR4YyegIhAJ703dEi%2FSZCTw21Pf%2BdXM4LBy9weoyQRy%2BoqXNtUJr3KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtvKkjrWD8Ja6ybFUq3ANGP%2BMVZHCxmSl7mElz9qyyInok99AivYqzk7dG6TAyTE2RdnkwETHFUvPvb3AxNv8sYGTwulIC4ASIVAdWn9c6LfAT7DyYTozI0zxTmjJwKg9t2BMV%2B4Y7thdqEkioRh4VoJynJJ4ihe4xbtKPHyAz3HJAbekn0TFh2qCxTPGd5oPemFR68ZM5kTZzDlkrDNNrZksl0%2FC3D%2BM8MJfzhcyd1djfPIExhEY09R31OswPk6OBrQtkyMvrn8fXkKLB2t5v49Gv1mGs%2FkrNbKI9jzq3IXnZX7HbKjvP4ndMZ64%2BsWojb42Kl%2FasPiuude0xdAQcL%2BL8gSUPWPquUPoqKfVE5cH1Lyj3JzJ%2FrVs3iOOPb2x2kjGCSz%2FzUAxk0CB6lIhYyx4fXT5JVCH0eQdSCQiLwpUaFE3RDK5eAURmx%2Bij2YE607mWb3PlmeksZ2DiYImHoIS3LVH1OgCKWJZrgrYJCQrvB11WyFHlQ7kqctFslqB8R%2FrSVLZLWBnSXKaZ6tOe8weotNIKzA0CVvnATBDxhWqQQRWro8r%2F%2Bij%2FeXgseVIzMTf0HlkcdvbjM9OSlIKnqUqmMV0dBHUmmpAGmH2NQO%2BIYD1hMGZ9C0ssswimgTDTCnLXmSNFK1O31TDFj9vCBjqkAc6J3oKvIw5FRAuakIhGCGB4iNTpRL8ehtse6YpVeZ2whzmhbmD9Gkjyhj79Qb7EiHMmbjmpNww7%2BwHXSEEO3jitder3IkFOKAy%2FUZywKfIn6Yv2xCoUA3BBW5vgzZE8DYxWScCOEIopGo5Ocv9SBtlFfzEXBLEFVf6Uk%2FdOz88nd0Bd116vwp5BZRyFR3S5GUWXsUOctgnTh%2FyKhQ4MwkGlp6Vx&X-Amz-Signature=f399332364b83012fe74ce874f8b7cdff55405f8468cc11106a22094345e0755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZXSZLC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9VCJwOskYCT7717QiQ6%2BpP9mmA04Ox%2F9U9LqeR4YyegIhAJ703dEi%2FSZCTw21Pf%2BdXM4LBy9weoyQRy%2BoqXNtUJr3KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtvKkjrWD8Ja6ybFUq3ANGP%2BMVZHCxmSl7mElz9qyyInok99AivYqzk7dG6TAyTE2RdnkwETHFUvPvb3AxNv8sYGTwulIC4ASIVAdWn9c6LfAT7DyYTozI0zxTmjJwKg9t2BMV%2B4Y7thdqEkioRh4VoJynJJ4ihe4xbtKPHyAz3HJAbekn0TFh2qCxTPGd5oPemFR68ZM5kTZzDlkrDNNrZksl0%2FC3D%2BM8MJfzhcyd1djfPIExhEY09R31OswPk6OBrQtkyMvrn8fXkKLB2t5v49Gv1mGs%2FkrNbKI9jzq3IXnZX7HbKjvP4ndMZ64%2BsWojb42Kl%2FasPiuude0xdAQcL%2BL8gSUPWPquUPoqKfVE5cH1Lyj3JzJ%2FrVs3iOOPb2x2kjGCSz%2FzUAxk0CB6lIhYyx4fXT5JVCH0eQdSCQiLwpUaFE3RDK5eAURmx%2Bij2YE607mWb3PlmeksZ2DiYImHoIS3LVH1OgCKWJZrgrYJCQrvB11WyFHlQ7kqctFslqB8R%2FrSVLZLWBnSXKaZ6tOe8weotNIKzA0CVvnATBDxhWqQQRWro8r%2F%2Bij%2FeXgseVIzMTf0HlkcdvbjM9OSlIKnqUqmMV0dBHUmmpAGmH2NQO%2BIYD1hMGZ9C0ssswimgTDTCnLXmSNFK1O31TDFj9vCBjqkAc6J3oKvIw5FRAuakIhGCGB4iNTpRL8ehtse6YpVeZ2whzmhbmD9Gkjyhj79Qb7EiHMmbjmpNww7%2BwHXSEEO3jitder3IkFOKAy%2FUZywKfIn6Yv2xCoUA3BBW5vgzZE8DYxWScCOEIopGo5Ocv9SBtlFfzEXBLEFVf6Uk%2FdOz88nd0Bd116vwp5BZRyFR3S5GUWXsUOctgnTh%2FyKhQ4MwkGlp6Vx&X-Amz-Signature=42ee9c7cf76effbec6a479830e4e76e798ef51e3e671d73932988a54f83d468d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZXSZLC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9VCJwOskYCT7717QiQ6%2BpP9mmA04Ox%2F9U9LqeR4YyegIhAJ703dEi%2FSZCTw21Pf%2BdXM4LBy9weoyQRy%2BoqXNtUJr3KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtvKkjrWD8Ja6ybFUq3ANGP%2BMVZHCxmSl7mElz9qyyInok99AivYqzk7dG6TAyTE2RdnkwETHFUvPvb3AxNv8sYGTwulIC4ASIVAdWn9c6LfAT7DyYTozI0zxTmjJwKg9t2BMV%2B4Y7thdqEkioRh4VoJynJJ4ihe4xbtKPHyAz3HJAbekn0TFh2qCxTPGd5oPemFR68ZM5kTZzDlkrDNNrZksl0%2FC3D%2BM8MJfzhcyd1djfPIExhEY09R31OswPk6OBrQtkyMvrn8fXkKLB2t5v49Gv1mGs%2FkrNbKI9jzq3IXnZX7HbKjvP4ndMZ64%2BsWojb42Kl%2FasPiuude0xdAQcL%2BL8gSUPWPquUPoqKfVE5cH1Lyj3JzJ%2FrVs3iOOPb2x2kjGCSz%2FzUAxk0CB6lIhYyx4fXT5JVCH0eQdSCQiLwpUaFE3RDK5eAURmx%2Bij2YE607mWb3PlmeksZ2DiYImHoIS3LVH1OgCKWJZrgrYJCQrvB11WyFHlQ7kqctFslqB8R%2FrSVLZLWBnSXKaZ6tOe8weotNIKzA0CVvnATBDxhWqQQRWro8r%2F%2Bij%2FeXgseVIzMTf0HlkcdvbjM9OSlIKnqUqmMV0dBHUmmpAGmH2NQO%2BIYD1hMGZ9C0ssswimgTDTCnLXmSNFK1O31TDFj9vCBjqkAc6J3oKvIw5FRAuakIhGCGB4iNTpRL8ehtse6YpVeZ2whzmhbmD9Gkjyhj79Qb7EiHMmbjmpNww7%2BwHXSEEO3jitder3IkFOKAy%2FUZywKfIn6Yv2xCoUA3BBW5vgzZE8DYxWScCOEIopGo5Ocv9SBtlFfzEXBLEFVf6Uk%2FdOz88nd0Bd116vwp5BZRyFR3S5GUWXsUOctgnTh%2FyKhQ4MwkGlp6Vx&X-Amz-Signature=727cdf4e5e65392e982ca43568922163e4d27710294b64416c0df1e7b5eacf34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
