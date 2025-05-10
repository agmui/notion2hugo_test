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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKY5AGD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl5QkW4H1xe3zVfOae2AefNvf9TJljqNeq2q6qx7sfKgIgXQQp8m0bEvRK%2FcrJuaTXxssjvUYb9t%2BspfEQmUq88JoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZn%2FpMmRdUAYq0eeircA4CPTU6pTWbPpTEWND7VZRYqjDRKMPt4si8tqMdnyTRsIB0R0%2F95YpruzHnl2k1%2Bj1edXKSoyxI1iatP%2B1M4ufEQBtnQf6DStMgCOEviAvQJg3VHgoMmCz%2BmNNyGeRwxrOtD9bhUG9Ff6gQQyB0pSDKTG8es0QOPp4SJzr%2BuEmEAsa%2F1q6Qs2Xkt40deYBFyF23V%2F8SS0Cy0qX0HQTXMrh2e9w9S4I2LqG8Qg6lSw5NexICId%2BzlNejNSlcVf5Q22EJNxCdUa7qBW8GLAAFGPHVTVzUyjZH5ryrej7rgEmjmSMK5NqBVayBhLDmvgrNti8bTm7Y23ifgSpqfKYkXvL2DODepvGGmuqC9TwRme014RbWO%2FXywmFZtadPhwKhnSIget8AlPqM5FD72EHicGlC4tWVwDJ9FRFr9N150qpxU0xJTWi0EQ5x3q9taXXCC6QKiSEKzlMHsbusikAzbN8qFyFxKocR0fUYPfRpZQV2%2BZGXviB6tyJbRSLimZKdA3q9kwhFBMDBNqn9HucZR6wd7f4qs5xrqtR5B1Vc0AsfXaqs6xTkwA9coLwpwzjada01rXYrxfWtMvyqTOGrDDFQLvbWcHgUmZAfWBhumVhQY7EMR0R5OxjRpE7xmMJzW%2B8AGOqUBxdR51h5062lVfR5QsfsG3wEqg1Hz5FRFP2BtItLfSjpZV19TwYD5hhtUHMpZ5pK1vx%2Fu4PLUpoUKLp7hPCsIG4aDdMO5rZ0H7mryUeZFGIR1V%2FJ3dBe%2F6jUuxxyzrC60eLpmH77Ag8PVxTunQ70IMesPVpl7KBzARmFti%2FzkXsdUDA%2BqAFPImgf6aPM5v3ty86k%2FK1%2FtVob4QRPYcrdTqsmQOzUV&X-Amz-Signature=d2e9a37f0a2e4973f29d4fcdd3252e3853e34b4345f140ac8b28febe27c5fbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKY5AGD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl5QkW4H1xe3zVfOae2AefNvf9TJljqNeq2q6qx7sfKgIgXQQp8m0bEvRK%2FcrJuaTXxssjvUYb9t%2BspfEQmUq88JoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZn%2FpMmRdUAYq0eeircA4CPTU6pTWbPpTEWND7VZRYqjDRKMPt4si8tqMdnyTRsIB0R0%2F95YpruzHnl2k1%2Bj1edXKSoyxI1iatP%2B1M4ufEQBtnQf6DStMgCOEviAvQJg3VHgoMmCz%2BmNNyGeRwxrOtD9bhUG9Ff6gQQyB0pSDKTG8es0QOPp4SJzr%2BuEmEAsa%2F1q6Qs2Xkt40deYBFyF23V%2F8SS0Cy0qX0HQTXMrh2e9w9S4I2LqG8Qg6lSw5NexICId%2BzlNejNSlcVf5Q22EJNxCdUa7qBW8GLAAFGPHVTVzUyjZH5ryrej7rgEmjmSMK5NqBVayBhLDmvgrNti8bTm7Y23ifgSpqfKYkXvL2DODepvGGmuqC9TwRme014RbWO%2FXywmFZtadPhwKhnSIget8AlPqM5FD72EHicGlC4tWVwDJ9FRFr9N150qpxU0xJTWi0EQ5x3q9taXXCC6QKiSEKzlMHsbusikAzbN8qFyFxKocR0fUYPfRpZQV2%2BZGXviB6tyJbRSLimZKdA3q9kwhFBMDBNqn9HucZR6wd7f4qs5xrqtR5B1Vc0AsfXaqs6xTkwA9coLwpwzjada01rXYrxfWtMvyqTOGrDDFQLvbWcHgUmZAfWBhumVhQY7EMR0R5OxjRpE7xmMJzW%2B8AGOqUBxdR51h5062lVfR5QsfsG3wEqg1Hz5FRFP2BtItLfSjpZV19TwYD5hhtUHMpZ5pK1vx%2Fu4PLUpoUKLp7hPCsIG4aDdMO5rZ0H7mryUeZFGIR1V%2FJ3dBe%2F6jUuxxyzrC60eLpmH77Ag8PVxTunQ70IMesPVpl7KBzARmFti%2FzkXsdUDA%2BqAFPImgf6aPM5v3ty86k%2FK1%2FtVob4QRPYcrdTqsmQOzUV&X-Amz-Signature=55b0c360134ea5110347bb17527cc409273405731b5706e56fea93a7bf2441a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKY5AGD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl5QkW4H1xe3zVfOae2AefNvf9TJljqNeq2q6qx7sfKgIgXQQp8m0bEvRK%2FcrJuaTXxssjvUYb9t%2BspfEQmUq88JoqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZn%2FpMmRdUAYq0eeircA4CPTU6pTWbPpTEWND7VZRYqjDRKMPt4si8tqMdnyTRsIB0R0%2F95YpruzHnl2k1%2Bj1edXKSoyxI1iatP%2B1M4ufEQBtnQf6DStMgCOEviAvQJg3VHgoMmCz%2BmNNyGeRwxrOtD9bhUG9Ff6gQQyB0pSDKTG8es0QOPp4SJzr%2BuEmEAsa%2F1q6Qs2Xkt40deYBFyF23V%2F8SS0Cy0qX0HQTXMrh2e9w9S4I2LqG8Qg6lSw5NexICId%2BzlNejNSlcVf5Q22EJNxCdUa7qBW8GLAAFGPHVTVzUyjZH5ryrej7rgEmjmSMK5NqBVayBhLDmvgrNti8bTm7Y23ifgSpqfKYkXvL2DODepvGGmuqC9TwRme014RbWO%2FXywmFZtadPhwKhnSIget8AlPqM5FD72EHicGlC4tWVwDJ9FRFr9N150qpxU0xJTWi0EQ5x3q9taXXCC6QKiSEKzlMHsbusikAzbN8qFyFxKocR0fUYPfRpZQV2%2BZGXviB6tyJbRSLimZKdA3q9kwhFBMDBNqn9HucZR6wd7f4qs5xrqtR5B1Vc0AsfXaqs6xTkwA9coLwpwzjada01rXYrxfWtMvyqTOGrDDFQLvbWcHgUmZAfWBhumVhQY7EMR0R5OxjRpE7xmMJzW%2B8AGOqUBxdR51h5062lVfR5QsfsG3wEqg1Hz5FRFP2BtItLfSjpZV19TwYD5hhtUHMpZ5pK1vx%2Fu4PLUpoUKLp7hPCsIG4aDdMO5rZ0H7mryUeZFGIR1V%2FJ3dBe%2F6jUuxxyzrC60eLpmH77Ag8PVxTunQ70IMesPVpl7KBzARmFti%2FzkXsdUDA%2BqAFPImgf6aPM5v3ty86k%2FK1%2FtVob4QRPYcrdTqsmQOzUV&X-Amz-Signature=ea20a0030f89a823cd8f8d8f7c58cb3ce60a2614ce5b2b18abe31d834d28dd1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
