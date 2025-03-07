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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G7ZSQJE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMTfQ6xEHAxUugIFML1z1G3eKo7tkeNShmp6cxjbl5DwIhAKx80JhQL%2BfktE7WRUx02xUWmc9lh%2BVfNhdu49wKW%2BATKv8DCD8QABoMNjM3NDIzMTgzODA1Igxi561a4Jjd4ljP1VAq3AMgtVh1DbMfIt1Xro6YXQo3H5V0zjlKSDvkZ3TPefaFkgy9IuoUTmLBq4z%2FEv44xtD7zHbb7Ap7huBsFE62hHd1PdI%2FeiGvDJW8koUAazu03OrQ5ZXd1jaL%2F9EzSIUI3J%2BG09oiynpYNYm6eiLT25Vd8JxdVt4pI1T8nkScIZdr28Jx2orUJwc9nNkVxbzJOh92xlSESYr5BK%2BMN9%2Bpg2rLwZizcoT%2B8d2FGv2cRssb6TPuz%2BfD6yGPO7zi1VffcJralJFpbe4X1qEZvZGuJ2XY9OU9KOiO7A12lXij2nd82Fgm0qScdZPHawqInMwf6M4p0aTLqNX40VPGCosqchIbueccUGSkUIQjr2saXwMP4X%2FEfiTazmuDp2oyDE4WWcLFjTgC6opeurzpa%2F4lr2iRbIQSvuqCpCXaAS88d1%2Bo1lPK3DdRbDGFQAwZVHmG4Ny2xzDdp6hVHlkZpLVCLkhiYUKLSnVdDVcY3SZ3%2BsjsRnZUY2kVHIsP4z1PJhCs9DrIcUU6YexflDjJdPeimVNopvBVeDBR5zcqNKjSOH50e3ii%2FdeO8mUPb9XFvN2dz8isJ6c3EQITtSX4JlLJiD2URoMeFYlpoPABfsyaFOJZXRfKjHWuMSbRdqtOcjCOh6q%2BBjqkAU91LK2VNpWAwykeCb1RjPdk0K8P0Y8U9hAJyTwzZN3Ubthwc4TFvAax0OQCjfo4hLSVzSlUOd1XlI5dqDQDOhDKsvEaDcn4xZzAbN5Wr7RvZyvNbkmRP1gw6SFxKY2XOgNxP7akA%2FssJUNPZ6A2%2F5VVwVzbm69CANgN09dsHM8lvOPAGrYUhuLYAGM%2FIr7iPg6gGzvUD3lxY3cZ2l3no82vafv8&X-Amz-Signature=2a4171fe86a3cc8a9cf2330e2ea7e66ecbe9ce458ab19b124e8dc2874870c973&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G7ZSQJE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMTfQ6xEHAxUugIFML1z1G3eKo7tkeNShmp6cxjbl5DwIhAKx80JhQL%2BfktE7WRUx02xUWmc9lh%2BVfNhdu49wKW%2BATKv8DCD8QABoMNjM3NDIzMTgzODA1Igxi561a4Jjd4ljP1VAq3AMgtVh1DbMfIt1Xro6YXQo3H5V0zjlKSDvkZ3TPefaFkgy9IuoUTmLBq4z%2FEv44xtD7zHbb7Ap7huBsFE62hHd1PdI%2FeiGvDJW8koUAazu03OrQ5ZXd1jaL%2F9EzSIUI3J%2BG09oiynpYNYm6eiLT25Vd8JxdVt4pI1T8nkScIZdr28Jx2orUJwc9nNkVxbzJOh92xlSESYr5BK%2BMN9%2Bpg2rLwZizcoT%2B8d2FGv2cRssb6TPuz%2BfD6yGPO7zi1VffcJralJFpbe4X1qEZvZGuJ2XY9OU9KOiO7A12lXij2nd82Fgm0qScdZPHawqInMwf6M4p0aTLqNX40VPGCosqchIbueccUGSkUIQjr2saXwMP4X%2FEfiTazmuDp2oyDE4WWcLFjTgC6opeurzpa%2F4lr2iRbIQSvuqCpCXaAS88d1%2Bo1lPK3DdRbDGFQAwZVHmG4Ny2xzDdp6hVHlkZpLVCLkhiYUKLSnVdDVcY3SZ3%2BsjsRnZUY2kVHIsP4z1PJhCs9DrIcUU6YexflDjJdPeimVNopvBVeDBR5zcqNKjSOH50e3ii%2FdeO8mUPb9XFvN2dz8isJ6c3EQITtSX4JlLJiD2URoMeFYlpoPABfsyaFOJZXRfKjHWuMSbRdqtOcjCOh6q%2BBjqkAU91LK2VNpWAwykeCb1RjPdk0K8P0Y8U9hAJyTwzZN3Ubthwc4TFvAax0OQCjfo4hLSVzSlUOd1XlI5dqDQDOhDKsvEaDcn4xZzAbN5Wr7RvZyvNbkmRP1gw6SFxKY2XOgNxP7akA%2FssJUNPZ6A2%2F5VVwVzbm69CANgN09dsHM8lvOPAGrYUhuLYAGM%2FIr7iPg6gGzvUD3lxY3cZ2l3no82vafv8&X-Amz-Signature=95f0c278b9aff2b714237187503e5e0e2e2306735549f13615a78e7d5c8a3311&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G7ZSQJE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMTfQ6xEHAxUugIFML1z1G3eKo7tkeNShmp6cxjbl5DwIhAKx80JhQL%2BfktE7WRUx02xUWmc9lh%2BVfNhdu49wKW%2BATKv8DCD8QABoMNjM3NDIzMTgzODA1Igxi561a4Jjd4ljP1VAq3AMgtVh1DbMfIt1Xro6YXQo3H5V0zjlKSDvkZ3TPefaFkgy9IuoUTmLBq4z%2FEv44xtD7zHbb7Ap7huBsFE62hHd1PdI%2FeiGvDJW8koUAazu03OrQ5ZXd1jaL%2F9EzSIUI3J%2BG09oiynpYNYm6eiLT25Vd8JxdVt4pI1T8nkScIZdr28Jx2orUJwc9nNkVxbzJOh92xlSESYr5BK%2BMN9%2Bpg2rLwZizcoT%2B8d2FGv2cRssb6TPuz%2BfD6yGPO7zi1VffcJralJFpbe4X1qEZvZGuJ2XY9OU9KOiO7A12lXij2nd82Fgm0qScdZPHawqInMwf6M4p0aTLqNX40VPGCosqchIbueccUGSkUIQjr2saXwMP4X%2FEfiTazmuDp2oyDE4WWcLFjTgC6opeurzpa%2F4lr2iRbIQSvuqCpCXaAS88d1%2Bo1lPK3DdRbDGFQAwZVHmG4Ny2xzDdp6hVHlkZpLVCLkhiYUKLSnVdDVcY3SZ3%2BsjsRnZUY2kVHIsP4z1PJhCs9DrIcUU6YexflDjJdPeimVNopvBVeDBR5zcqNKjSOH50e3ii%2FdeO8mUPb9XFvN2dz8isJ6c3EQITtSX4JlLJiD2URoMeFYlpoPABfsyaFOJZXRfKjHWuMSbRdqtOcjCOh6q%2BBjqkAU91LK2VNpWAwykeCb1RjPdk0K8P0Y8U9hAJyTwzZN3Ubthwc4TFvAax0OQCjfo4hLSVzSlUOd1XlI5dqDQDOhDKsvEaDcn4xZzAbN5Wr7RvZyvNbkmRP1gw6SFxKY2XOgNxP7akA%2FssJUNPZ6A2%2F5VVwVzbm69CANgN09dsHM8lvOPAGrYUhuLYAGM%2FIr7iPg6gGzvUD3lxY3cZ2l3no82vafv8&X-Amz-Signature=876e85aa5da2a7b48e28aacc25b93e9bc30af410d6c95a0cd7e234b8d4133e77&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
