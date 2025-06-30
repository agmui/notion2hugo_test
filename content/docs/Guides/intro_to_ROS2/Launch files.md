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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDF4PAK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChkSkT51Kgj4NC7rHtgmnxZLuf9pqYPUl2CIbhInvYLwIhAMyXyTGUUe3ok%2FKInAmZIitu4w9Ipwfw1QFfHxxs3LvfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8kCumTIk%2BjN9GYKwq3APYQ0Yakp9eWX9MpxbW8jZnAD8Mr4tgOroF5I%2BGUTdNvbbaYWtwswATxD74mH6qjiKWMnJv4BifJ5N%2Fbpl%2BYqQjS78rXIdGey7D1bUqDcVTENoVXeKU3yyPthKssl6VOvvzNZ20gkqJ5SWaVTxC6hXJrQJuFfAi4heIUAasHH07qCKPp5%2Fov%2F2jeV7NNufNkkGQk8uXhEMWrORJhIjCwo5Nu2T%2BeqJ38ytrABEWr0hilqGLGiA9T8iO70jMXe9%2F4aQlfCIM4IyloggQOGxsjbBnWo%2FxWi%2FVY3Cm1%2Bi9mMuvlWHw8kU0UqqjYalSFlAOwsOccX2zhHGjNMBDZSDur73u07gvn9nk52CUXjzH0wtdyHvzTnc23mc%2FtB%2BakYQEhK3q5M%2FACq9mR2qxvo%2FfHoml0xlCC9VLsBoHEKdHgwPi19R0gsJyA5tD7bTJXvDiA31bOgOcwCvyPU14B6Hf2qRieegL3ZlBsgKHBXZBerLXD0d03Yn6ZNTfvth89ugGs%2BMX7etV7f%2Fl3bziKPqyr0IQS6OH482BILAHTkPCkaQ9DhyHq%2FLQvIR7DzorycEx9x5sPc9Mj6389CzeyJfNwK9KojcW6evcatts%2F5CMzD%2BR4onc%2BOayvNIvXzlnkjCTzYbDBjqkAQyfaedVt2Ra2FOodKUdi8C4ABF2wf4KOtVVPhxKcuOIaoQnFQy0ehDUnaLJZAyxvTaomvU9ftyNhFXTRJXG%2FqRfs%2Fh8vRUCStDC2VvB0KBnzy2yfowHjP5SP6ccDrvQ%2BMlp14weHrBtmH7HSiRtbIVS1WIKPorKloxTdnMNGRPPUqdImleucaA1hkyPwkpqWBfHDPogd7PTOaoGnCWPeOL1tTVz&X-Amz-Signature=ffcaad84c96d9773607f9b0a72815340f68a6b740bb1b96bee33bad072389d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDF4PAK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChkSkT51Kgj4NC7rHtgmnxZLuf9pqYPUl2CIbhInvYLwIhAMyXyTGUUe3ok%2FKInAmZIitu4w9Ipwfw1QFfHxxs3LvfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8kCumTIk%2BjN9GYKwq3APYQ0Yakp9eWX9MpxbW8jZnAD8Mr4tgOroF5I%2BGUTdNvbbaYWtwswATxD74mH6qjiKWMnJv4BifJ5N%2Fbpl%2BYqQjS78rXIdGey7D1bUqDcVTENoVXeKU3yyPthKssl6VOvvzNZ20gkqJ5SWaVTxC6hXJrQJuFfAi4heIUAasHH07qCKPp5%2Fov%2F2jeV7NNufNkkGQk8uXhEMWrORJhIjCwo5Nu2T%2BeqJ38ytrABEWr0hilqGLGiA9T8iO70jMXe9%2F4aQlfCIM4IyloggQOGxsjbBnWo%2FxWi%2FVY3Cm1%2Bi9mMuvlWHw8kU0UqqjYalSFlAOwsOccX2zhHGjNMBDZSDur73u07gvn9nk52CUXjzH0wtdyHvzTnc23mc%2FtB%2BakYQEhK3q5M%2FACq9mR2qxvo%2FfHoml0xlCC9VLsBoHEKdHgwPi19R0gsJyA5tD7bTJXvDiA31bOgOcwCvyPU14B6Hf2qRieegL3ZlBsgKHBXZBerLXD0d03Yn6ZNTfvth89ugGs%2BMX7etV7f%2Fl3bziKPqyr0IQS6OH482BILAHTkPCkaQ9DhyHq%2FLQvIR7DzorycEx9x5sPc9Mj6389CzeyJfNwK9KojcW6evcatts%2F5CMzD%2BR4onc%2BOayvNIvXzlnkjCTzYbDBjqkAQyfaedVt2Ra2FOodKUdi8C4ABF2wf4KOtVVPhxKcuOIaoQnFQy0ehDUnaLJZAyxvTaomvU9ftyNhFXTRJXG%2FqRfs%2Fh8vRUCStDC2VvB0KBnzy2yfowHjP5SP6ccDrvQ%2BMlp14weHrBtmH7HSiRtbIVS1WIKPorKloxTdnMNGRPPUqdImleucaA1hkyPwkpqWBfHDPogd7PTOaoGnCWPeOL1tTVz&X-Amz-Signature=409d687a7ecff89e6c2bc7590128c26a59b4be7eb0379c8e00af3f2fcadbcdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDF4PAK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChkSkT51Kgj4NC7rHtgmnxZLuf9pqYPUl2CIbhInvYLwIhAMyXyTGUUe3ok%2FKInAmZIitu4w9Ipwfw1QFfHxxs3LvfKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8kCumTIk%2BjN9GYKwq3APYQ0Yakp9eWX9MpxbW8jZnAD8Mr4tgOroF5I%2BGUTdNvbbaYWtwswATxD74mH6qjiKWMnJv4BifJ5N%2Fbpl%2BYqQjS78rXIdGey7D1bUqDcVTENoVXeKU3yyPthKssl6VOvvzNZ20gkqJ5SWaVTxC6hXJrQJuFfAi4heIUAasHH07qCKPp5%2Fov%2F2jeV7NNufNkkGQk8uXhEMWrORJhIjCwo5Nu2T%2BeqJ38ytrABEWr0hilqGLGiA9T8iO70jMXe9%2F4aQlfCIM4IyloggQOGxsjbBnWo%2FxWi%2FVY3Cm1%2Bi9mMuvlWHw8kU0UqqjYalSFlAOwsOccX2zhHGjNMBDZSDur73u07gvn9nk52CUXjzH0wtdyHvzTnc23mc%2FtB%2BakYQEhK3q5M%2FACq9mR2qxvo%2FfHoml0xlCC9VLsBoHEKdHgwPi19R0gsJyA5tD7bTJXvDiA31bOgOcwCvyPU14B6Hf2qRieegL3ZlBsgKHBXZBerLXD0d03Yn6ZNTfvth89ugGs%2BMX7etV7f%2Fl3bziKPqyr0IQS6OH482BILAHTkPCkaQ9DhyHq%2FLQvIR7DzorycEx9x5sPc9Mj6389CzeyJfNwK9KojcW6evcatts%2F5CMzD%2BR4onc%2BOayvNIvXzlnkjCTzYbDBjqkAQyfaedVt2Ra2FOodKUdi8C4ABF2wf4KOtVVPhxKcuOIaoQnFQy0ehDUnaLJZAyxvTaomvU9ftyNhFXTRJXG%2FqRfs%2Fh8vRUCStDC2VvB0KBnzy2yfowHjP5SP6ccDrvQ%2BMlp14weHrBtmH7HSiRtbIVS1WIKPorKloxTdnMNGRPPUqdImleucaA1hkyPwkpqWBfHDPogd7PTOaoGnCWPeOL1tTVz&X-Amz-Signature=b9441ddf76be965869383bad7382848e4be5b9ff1bfc17bfd472636d80d9e9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
