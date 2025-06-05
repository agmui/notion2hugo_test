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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJ3ZQKX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCHJDdFH9QImUgnDCu5aobDy88KtfSpUs6%2BK1o83VxfzAIgTEI%2BMJdpNW40D7XkUBhWDGLAXkZDTeU4vD%2BGXMld0BYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMSl6DE0b5I77lzGHSrcA882tQG3PJAwnCGJl7qFYeVSZ4fWMgFQUCG%2FmzUEjeZ%2FohLjyS0xOzFMB2KaK%2FSFsVfDw8M89ic1Iuub0DlScBlIHQnAtl%2FAidNLAAq3p4o3GJQPqrSUAoEeVMzt4e2oYVluzTaM8I9yrmGGkShqQT1KYEb%2BYtsLaCMzZUFpyHn2BCcvng%2BK%2FbXoNZalrwyAJwS1ZFp5%2FMxSENvzsfnBxYyUONhv53NVvMWux77tkrScqxucafzDumwHlGP2AEzP1T2OxPO1HOFSRdzQuQzR6A9yxK3cBvGL7SIGBwv3JzaYEJHVswOmZuHNFXAH%2BZL%2FmLeZhX3bKFWudjR3jAg1raaZBxVbBK29C%2FOG0QDEIdRbRkP1aMfZuZ2EfQ0WabtifHAYrW1dLlzqnJthOxmPougAsC8VTuhn%2FswN89Ko2NPXEkvqeQXIU3z8Zvje2t%2Bfh%2FA4wZOu3hmQabxEdJTPD0cpg9AgC%2F%2B%2FFHHyEvfjO6ZBYmigPcQwbqO78ojGQCDuUYdC1NifsVRjEGdyPGHAeyjt0WkMS9wmv93LpH8jiCVKr1UrQJOMl0E%2FtQThf7L0ZLABTRFrOrIQZTEO0Jfye0jVdCNmMAsGQQg%2B6eaZHk8XojaHpv90ovW9C7bqMLfEhsIGOqUBD%2F2GQjfrlV1BG4C6dABYUpnVSslpc6WyKXGjXmQkb8P4I2Xgi90X1%2BCKd7KLkMnuCZ%2Fyo7y28v9bjOAPjaZhZhiVbOMtJFlfoIA5T5ypNYMZG4XQ3VhjHL9SZ9NErmqkv1fQ5lmQPvQ2nloOks0VGsBQGvvVtXUaV9S3RB8E%2Bem4QXzt9UDdboc4%2BpazwUy8wUXkjx9eGkVyFvf73NyKbjq3QZqi&X-Amz-Signature=c73fce89c1ba20988674d8b4db9844350b2da3f7dedda8f2626452be22011aba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJ3ZQKX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCHJDdFH9QImUgnDCu5aobDy88KtfSpUs6%2BK1o83VxfzAIgTEI%2BMJdpNW40D7XkUBhWDGLAXkZDTeU4vD%2BGXMld0BYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMSl6DE0b5I77lzGHSrcA882tQG3PJAwnCGJl7qFYeVSZ4fWMgFQUCG%2FmzUEjeZ%2FohLjyS0xOzFMB2KaK%2FSFsVfDw8M89ic1Iuub0DlScBlIHQnAtl%2FAidNLAAq3p4o3GJQPqrSUAoEeVMzt4e2oYVluzTaM8I9yrmGGkShqQT1KYEb%2BYtsLaCMzZUFpyHn2BCcvng%2BK%2FbXoNZalrwyAJwS1ZFp5%2FMxSENvzsfnBxYyUONhv53NVvMWux77tkrScqxucafzDumwHlGP2AEzP1T2OxPO1HOFSRdzQuQzR6A9yxK3cBvGL7SIGBwv3JzaYEJHVswOmZuHNFXAH%2BZL%2FmLeZhX3bKFWudjR3jAg1raaZBxVbBK29C%2FOG0QDEIdRbRkP1aMfZuZ2EfQ0WabtifHAYrW1dLlzqnJthOxmPougAsC8VTuhn%2FswN89Ko2NPXEkvqeQXIU3z8Zvje2t%2Bfh%2FA4wZOu3hmQabxEdJTPD0cpg9AgC%2F%2B%2FFHHyEvfjO6ZBYmigPcQwbqO78ojGQCDuUYdC1NifsVRjEGdyPGHAeyjt0WkMS9wmv93LpH8jiCVKr1UrQJOMl0E%2FtQThf7L0ZLABTRFrOrIQZTEO0Jfye0jVdCNmMAsGQQg%2B6eaZHk8XojaHpv90ovW9C7bqMLfEhsIGOqUBD%2F2GQjfrlV1BG4C6dABYUpnVSslpc6WyKXGjXmQkb8P4I2Xgi90X1%2BCKd7KLkMnuCZ%2Fyo7y28v9bjOAPjaZhZhiVbOMtJFlfoIA5T5ypNYMZG4XQ3VhjHL9SZ9NErmqkv1fQ5lmQPvQ2nloOks0VGsBQGvvVtXUaV9S3RB8E%2Bem4QXzt9UDdboc4%2BpazwUy8wUXkjx9eGkVyFvf73NyKbjq3QZqi&X-Amz-Signature=c85b605a754e26c63de766c8264b9b358d8e2cc9f327525958cf9a594d938181&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJ3ZQKX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCHJDdFH9QImUgnDCu5aobDy88KtfSpUs6%2BK1o83VxfzAIgTEI%2BMJdpNW40D7XkUBhWDGLAXkZDTeU4vD%2BGXMld0BYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMSl6DE0b5I77lzGHSrcA882tQG3PJAwnCGJl7qFYeVSZ4fWMgFQUCG%2FmzUEjeZ%2FohLjyS0xOzFMB2KaK%2FSFsVfDw8M89ic1Iuub0DlScBlIHQnAtl%2FAidNLAAq3p4o3GJQPqrSUAoEeVMzt4e2oYVluzTaM8I9yrmGGkShqQT1KYEb%2BYtsLaCMzZUFpyHn2BCcvng%2BK%2FbXoNZalrwyAJwS1ZFp5%2FMxSENvzsfnBxYyUONhv53NVvMWux77tkrScqxucafzDumwHlGP2AEzP1T2OxPO1HOFSRdzQuQzR6A9yxK3cBvGL7SIGBwv3JzaYEJHVswOmZuHNFXAH%2BZL%2FmLeZhX3bKFWudjR3jAg1raaZBxVbBK29C%2FOG0QDEIdRbRkP1aMfZuZ2EfQ0WabtifHAYrW1dLlzqnJthOxmPougAsC8VTuhn%2FswN89Ko2NPXEkvqeQXIU3z8Zvje2t%2Bfh%2FA4wZOu3hmQabxEdJTPD0cpg9AgC%2F%2B%2FFHHyEvfjO6ZBYmigPcQwbqO78ojGQCDuUYdC1NifsVRjEGdyPGHAeyjt0WkMS9wmv93LpH8jiCVKr1UrQJOMl0E%2FtQThf7L0ZLABTRFrOrIQZTEO0Jfye0jVdCNmMAsGQQg%2B6eaZHk8XojaHpv90ovW9C7bqMLfEhsIGOqUBD%2F2GQjfrlV1BG4C6dABYUpnVSslpc6WyKXGjXmQkb8P4I2Xgi90X1%2BCKd7KLkMnuCZ%2Fyo7y28v9bjOAPjaZhZhiVbOMtJFlfoIA5T5ypNYMZG4XQ3VhjHL9SZ9NErmqkv1fQ5lmQPvQ2nloOks0VGsBQGvvVtXUaV9S3RB8E%2Bem4QXzt9UDdboc4%2BpazwUy8wUXkjx9eGkVyFvf73NyKbjq3QZqi&X-Amz-Signature=bc40cb429380de7c3f23d5c2270b49a24e482213e886ce536e3b513a8df87ace&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
