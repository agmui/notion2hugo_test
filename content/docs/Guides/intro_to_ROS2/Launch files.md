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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LT5UCVY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpPQmVNND4AEYCM%2F6dzMx8iy77lcrVhC1qvUwBWd2ntAiEAon1b224K%2B5PQ84FcVafzAsOiKITZke4MSsPp6zY1nGsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ypJge1xP23RKM6yrcA9EqjVE6BgxIUyKitFezJU7QOHssOPFf0LroFkLSGpYUoHP35PAfwe5xvYHHjw6vl4BZTN5KtnFuR28Zp1psAkR%2Fv5AIn6HUeytiBnSJwihCBblP7I3ggXA2VF9I3BxRnwmUtIPd39sXOYcN4s3V%2FiVBvQO%2FBlk4dt5AhwSR8eb6P%2Fykeg51mOZ6C%2B7bK8gnLUK505oDrstdY2I96BmSO8Fbxv%2Fe8yiY4LbMzllIBzQARnAOb5t%2F8Pk0g8Hj1MIBay9L576X51tAhnCkoZkCbi4E9%2Fu2CUsfwC1297cO2tnignkPuE7VlqTzbAbITnAeqolYzYREt%2BkbUqHHlV9zPwGobvaJITSxDsqDOulDwRodoIKClKK%2BtcQHvgI1aygYJ%2FrfFdQ%2BQhVePzwFVEP8K%2FY2bD3THwKgFQoJFbk2cQymCLf1voQNXIKD53iGlQwiHePcBFbCvjp%2ByGaBYD0gehqHFGbtItiHuFbWgS2BUcvllE5yK5yUzofwb2Q5QWQ2Xr9kD7gKE0GkVOvH7wl7vHygZgEdzuj2ioPUg7ZKVojq5WPafbNj%2BSPcGu1LGsAW4Av0lAJw4lAO%2Fc1zb6IRjZpynL%2F40VAwQiEpyUvyZ8MtoTu3%2BMf%2BppBBk6EAMNCZ4b0GOqUB11N8hv31mBCagRjzLwGnoi8eXOQfMoYnnR9Bz0ldYwFwekuU%2B6C%2Bh7dZu3RJKfT7TfipUKfLb%2B1ye7FwpIEoMRdpxXuswNMrSFM20bv5wsT%2FbqsY3tXsIs2MORFxGj5C%2FXUQTg11IKyt9CCy3bx5WwLMd9941aioYBxZlqjQNaiExT6DjdDf3NyhNgTcJV2l26X4Mh4GkQb4IOa%2F3WRYDRRp1aB1&X-Amz-Signature=57c7498850302b66663b0abc4e50a42abbb86cc054277e5e7fe5728cebd7a676&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LT5UCVY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpPQmVNND4AEYCM%2F6dzMx8iy77lcrVhC1qvUwBWd2ntAiEAon1b224K%2B5PQ84FcVafzAsOiKITZke4MSsPp6zY1nGsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ypJge1xP23RKM6yrcA9EqjVE6BgxIUyKitFezJU7QOHssOPFf0LroFkLSGpYUoHP35PAfwe5xvYHHjw6vl4BZTN5KtnFuR28Zp1psAkR%2Fv5AIn6HUeytiBnSJwihCBblP7I3ggXA2VF9I3BxRnwmUtIPd39sXOYcN4s3V%2FiVBvQO%2FBlk4dt5AhwSR8eb6P%2Fykeg51mOZ6C%2B7bK8gnLUK505oDrstdY2I96BmSO8Fbxv%2Fe8yiY4LbMzllIBzQARnAOb5t%2F8Pk0g8Hj1MIBay9L576X51tAhnCkoZkCbi4E9%2Fu2CUsfwC1297cO2tnignkPuE7VlqTzbAbITnAeqolYzYREt%2BkbUqHHlV9zPwGobvaJITSxDsqDOulDwRodoIKClKK%2BtcQHvgI1aygYJ%2FrfFdQ%2BQhVePzwFVEP8K%2FY2bD3THwKgFQoJFbk2cQymCLf1voQNXIKD53iGlQwiHePcBFbCvjp%2ByGaBYD0gehqHFGbtItiHuFbWgS2BUcvllE5yK5yUzofwb2Q5QWQ2Xr9kD7gKE0GkVOvH7wl7vHygZgEdzuj2ioPUg7ZKVojq5WPafbNj%2BSPcGu1LGsAW4Av0lAJw4lAO%2Fc1zb6IRjZpynL%2F40VAwQiEpyUvyZ8MtoTu3%2BMf%2BppBBk6EAMNCZ4b0GOqUB11N8hv31mBCagRjzLwGnoi8eXOQfMoYnnR9Bz0ldYwFwekuU%2B6C%2Bh7dZu3RJKfT7TfipUKfLb%2B1ye7FwpIEoMRdpxXuswNMrSFM20bv5wsT%2FbqsY3tXsIs2MORFxGj5C%2FXUQTg11IKyt9CCy3bx5WwLMd9941aioYBxZlqjQNaiExT6DjdDf3NyhNgTcJV2l26X4Mh4GkQb4IOa%2F3WRYDRRp1aB1&X-Amz-Signature=7d51cb4e3805c9104b5bc5d9e0c453e055fcdea9ef7e67bd9ba516d7c53666fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LT5UCVY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpPQmVNND4AEYCM%2F6dzMx8iy77lcrVhC1qvUwBWd2ntAiEAon1b224K%2B5PQ84FcVafzAsOiKITZke4MSsPp6zY1nGsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ypJge1xP23RKM6yrcA9EqjVE6BgxIUyKitFezJU7QOHssOPFf0LroFkLSGpYUoHP35PAfwe5xvYHHjw6vl4BZTN5KtnFuR28Zp1psAkR%2Fv5AIn6HUeytiBnSJwihCBblP7I3ggXA2VF9I3BxRnwmUtIPd39sXOYcN4s3V%2FiVBvQO%2FBlk4dt5AhwSR8eb6P%2Fykeg51mOZ6C%2B7bK8gnLUK505oDrstdY2I96BmSO8Fbxv%2Fe8yiY4LbMzllIBzQARnAOb5t%2F8Pk0g8Hj1MIBay9L576X51tAhnCkoZkCbi4E9%2Fu2CUsfwC1297cO2tnignkPuE7VlqTzbAbITnAeqolYzYREt%2BkbUqHHlV9zPwGobvaJITSxDsqDOulDwRodoIKClKK%2BtcQHvgI1aygYJ%2FrfFdQ%2BQhVePzwFVEP8K%2FY2bD3THwKgFQoJFbk2cQymCLf1voQNXIKD53iGlQwiHePcBFbCvjp%2ByGaBYD0gehqHFGbtItiHuFbWgS2BUcvllE5yK5yUzofwb2Q5QWQ2Xr9kD7gKE0GkVOvH7wl7vHygZgEdzuj2ioPUg7ZKVojq5WPafbNj%2BSPcGu1LGsAW4Av0lAJw4lAO%2Fc1zb6IRjZpynL%2F40VAwQiEpyUvyZ8MtoTu3%2BMf%2BppBBk6EAMNCZ4b0GOqUB11N8hv31mBCagRjzLwGnoi8eXOQfMoYnnR9Bz0ldYwFwekuU%2B6C%2Bh7dZu3RJKfT7TfipUKfLb%2B1ye7FwpIEoMRdpxXuswNMrSFM20bv5wsT%2FbqsY3tXsIs2MORFxGj5C%2FXUQTg11IKyt9CCy3bx5WwLMd9941aioYBxZlqjQNaiExT6DjdDf3NyhNgTcJV2l26X4Mh4GkQb4IOa%2F3WRYDRRp1aB1&X-Amz-Signature=62d27cabc1bbd61ce0c3bc05332a5221f8b333357a424ee76380a933a854edf1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
