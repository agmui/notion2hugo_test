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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4EOWFKJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDA2W9Ahmmb4krfhiyjGaxSBcVaZyHY9TQvoHCrz5ZgqAiEA7u7hDEXqExNt31Hx3TIOqV5GQOXM5pa1CFc3ElXJ%2FvcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjW6L2jQmYVAE8%2FyyrcA88wSxv9UpRCQh%2Bmb7auK5FXN908z1du4ncFc95ouTlyfMQU1d4NKoC5W99q6FUQIn2CCdzHnYrX1uOG1c5vqx8vaRMPPMPF8BWgQ%2BEmXT%2FYv9K0Ju3shoua40iqSZO6dErynlUxqXV8GlVZkjuoCmVxd4TVNqhD9LLz41Tz4tIkBSis7NjchKRZjvwc1uHDuhC1fBGk%2FWwsEjKdN7f0W9WBMPBfCGKhXN%2F32g8iBC6O5nnpyKUpepHXkTnRf7ST2895ut3eauVOFawVB4zXu9J8Y4DKou0G7IOJ7XwrAR6PTG9s4FEv2fiznnCveAQ4T4Mb4Zz0e0ema%2F6T3KvhbHOZGjJpZYY0w2qWGEfccMUVA8s1vUU5wxzOap0gPSLTyOX0B%2FpelYiOGFo6dE08W7oYdSQUUeDLfEELW7grbOgCvO%2FYY3caxw%2F27parGOkrxDrdjCSASd8rS7odIn83BTVBETxwfWlg6sMYqJF4uEc1r9ThLtUq5%2Ftwlur3Tz3XNOPkNCCMaLutC5kHjtXxHaM242I9Rg5wU9TdePk0wlHGDQf61j4drI29Tcij86PKg5kj4fgNFXua47cphfL9WnX1C2%2BAOQb0UlBgTi3U3uzWFiGbbCab7%2BXgWGvoMKfnqL8GOqUBNXY3z98dOtFJUDNBSgnUVLAcLrq6GK2iOU03hwZTE8qsRhbhkvhlLzvtlQIaIZHmRN182K7VyG4aUdPqB1iThVFJuGm%2F7SljUkSkaAyh93IcnFcQy9LROfe%2FOebLAWoJe84vawgOO%2B0wBby1vtxvWdhSwJrglln86sp9p%2Bf62D4bPFjK8%2BN%2FCc4LKMpiVAdzjBqrc19ZcgEfYdJTYUFXl3f%2FFChL&X-Amz-Signature=fd5c7cd8a29bc6cd73ba1db7f2b0abd44519f2742aeda1e41e4b5b404650f2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4EOWFKJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDA2W9Ahmmb4krfhiyjGaxSBcVaZyHY9TQvoHCrz5ZgqAiEA7u7hDEXqExNt31Hx3TIOqV5GQOXM5pa1CFc3ElXJ%2FvcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjW6L2jQmYVAE8%2FyyrcA88wSxv9UpRCQh%2Bmb7auK5FXN908z1du4ncFc95ouTlyfMQU1d4NKoC5W99q6FUQIn2CCdzHnYrX1uOG1c5vqx8vaRMPPMPF8BWgQ%2BEmXT%2FYv9K0Ju3shoua40iqSZO6dErynlUxqXV8GlVZkjuoCmVxd4TVNqhD9LLz41Tz4tIkBSis7NjchKRZjvwc1uHDuhC1fBGk%2FWwsEjKdN7f0W9WBMPBfCGKhXN%2F32g8iBC6O5nnpyKUpepHXkTnRf7ST2895ut3eauVOFawVB4zXu9J8Y4DKou0G7IOJ7XwrAR6PTG9s4FEv2fiznnCveAQ4T4Mb4Zz0e0ema%2F6T3KvhbHOZGjJpZYY0w2qWGEfccMUVA8s1vUU5wxzOap0gPSLTyOX0B%2FpelYiOGFo6dE08W7oYdSQUUeDLfEELW7grbOgCvO%2FYY3caxw%2F27parGOkrxDrdjCSASd8rS7odIn83BTVBETxwfWlg6sMYqJF4uEc1r9ThLtUq5%2Ftwlur3Tz3XNOPkNCCMaLutC5kHjtXxHaM242I9Rg5wU9TdePk0wlHGDQf61j4drI29Tcij86PKg5kj4fgNFXua47cphfL9WnX1C2%2BAOQb0UlBgTi3U3uzWFiGbbCab7%2BXgWGvoMKfnqL8GOqUBNXY3z98dOtFJUDNBSgnUVLAcLrq6GK2iOU03hwZTE8qsRhbhkvhlLzvtlQIaIZHmRN182K7VyG4aUdPqB1iThVFJuGm%2F7SljUkSkaAyh93IcnFcQy9LROfe%2FOebLAWoJe84vawgOO%2B0wBby1vtxvWdhSwJrglln86sp9p%2Bf62D4bPFjK8%2BN%2FCc4LKMpiVAdzjBqrc19ZcgEfYdJTYUFXl3f%2FFChL&X-Amz-Signature=9d7dc5192aefca26be6a859a4aaeea6bae28b79e38933d95c64dd4b5cf083d90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4EOWFKJ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDA2W9Ahmmb4krfhiyjGaxSBcVaZyHY9TQvoHCrz5ZgqAiEA7u7hDEXqExNt31Hx3TIOqV5GQOXM5pa1CFc3ElXJ%2FvcqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjW6L2jQmYVAE8%2FyyrcA88wSxv9UpRCQh%2Bmb7auK5FXN908z1du4ncFc95ouTlyfMQU1d4NKoC5W99q6FUQIn2CCdzHnYrX1uOG1c5vqx8vaRMPPMPF8BWgQ%2BEmXT%2FYv9K0Ju3shoua40iqSZO6dErynlUxqXV8GlVZkjuoCmVxd4TVNqhD9LLz41Tz4tIkBSis7NjchKRZjvwc1uHDuhC1fBGk%2FWwsEjKdN7f0W9WBMPBfCGKhXN%2F32g8iBC6O5nnpyKUpepHXkTnRf7ST2895ut3eauVOFawVB4zXu9J8Y4DKou0G7IOJ7XwrAR6PTG9s4FEv2fiznnCveAQ4T4Mb4Zz0e0ema%2F6T3KvhbHOZGjJpZYY0w2qWGEfccMUVA8s1vUU5wxzOap0gPSLTyOX0B%2FpelYiOGFo6dE08W7oYdSQUUeDLfEELW7grbOgCvO%2FYY3caxw%2F27parGOkrxDrdjCSASd8rS7odIn83BTVBETxwfWlg6sMYqJF4uEc1r9ThLtUq5%2Ftwlur3Tz3XNOPkNCCMaLutC5kHjtXxHaM242I9Rg5wU9TdePk0wlHGDQf61j4drI29Tcij86PKg5kj4fgNFXua47cphfL9WnX1C2%2BAOQb0UlBgTi3U3uzWFiGbbCab7%2BXgWGvoMKfnqL8GOqUBNXY3z98dOtFJUDNBSgnUVLAcLrq6GK2iOU03hwZTE8qsRhbhkvhlLzvtlQIaIZHmRN182K7VyG4aUdPqB1iThVFJuGm%2F7SljUkSkaAyh93IcnFcQy9LROfe%2FOebLAWoJe84vawgOO%2B0wBby1vtxvWdhSwJrglln86sp9p%2Bf62D4bPFjK8%2BN%2FCc4LKMpiVAdzjBqrc19ZcgEfYdJTYUFXl3f%2FFChL&X-Amz-Signature=6dfe87d11e6c8dd2026429bca3a6219cc56216fe946f6d7f18b263fb80207815&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
