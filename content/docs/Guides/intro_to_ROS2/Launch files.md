---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIZZBDP%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCz14y57Jw2PA5rui8mJsJ2p%2FGCCuW79pVJ3fbD9qc1cQIhAJcvMKsBhoyRd9zBnW073i5sb93IAr0FH1h5LfElfouQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGzN5KpHlA7r0pXxYq3AOYT0auWNcuzH%2F2%2Bm4WTn8cbWS5mVp8tF23Xe7ruTMiZFnbtCLsxfC13QoV6CzeA1%2FhslEiK6Hy%2BBplqrs3XX8trLc2qINsB3febI%2FgPIavJ%2ByG2M7tXgy8ok4VibTf5cpM5AkyBXkPJtT9LCu3P%2FOp5xmVF5b06LGsiCtHD8hu10941n%2BXRThrSTQfNWUOHbdJPvhzd8eO%2Bxw3cagzgKEKLj3rOkxiepCxkzgYxx1eAWdxr2zL0EoSrwpUKYJa0hYhHVH7B1ZNF%2FzA8H%2F1E0rB8ELPai4n10hPFyW08i8u5kEdKKPfU%2Frx5LdsbUkl1A%2BamDfwss9yfczcUqyZOgypBpwrN1MncKSDB4KCXMVJFPzrYqm%2Bm7Z9HeQgTQCA13Tj1lkjz43K6RkbNHe9GAxsZxnC1MjX7DVq9Ss3LxoHXBo3Ir4RizK6JA7MYVF%2BBVI3JnaIRja9x3%2Bwm7ChwxtwHe2pIOSikk%2FUyLF8MVsxoqfwutL41Qm0eNwKuZG1%2FYRHdDFtlHsCxlthQ4VExonJTbsdhDS17%2BDbFaHoCrpXBHxmlLsEHLrUtE1377yVxzxOSLctGfenqegKrdf4IISG1NkigV32sp%2Bu9I%2BOZBqcbC0lusdIZZm2TjSXATDm6K3NBjqkAUrEJIFWmgpcZ7xkKSeVTvSeKZm6bkADzrawPqj7u0i4yqh0nJ7D2cnbIQGXkkDBbekiZN5UT7Q%2FGN5IUgXclRTm7ENEIt%2FmG%2B92%2B2N%2FXWgW9e98cNdpH8fjhjj2Zc3c%2BCqOHclaRrEMOHtpjdbujeNxi3drulYC1XDHFVjTr3fEeC9cYWA0kKTuuEGzF7O%2BF1BPAlIgzUs0qhyu5yauBNIYlc21&X-Amz-Signature=69c179f7ac7649553175f06867f1dd1590db5cbae3936849894831562fc46a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIZZBDP%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCz14y57Jw2PA5rui8mJsJ2p%2FGCCuW79pVJ3fbD9qc1cQIhAJcvMKsBhoyRd9zBnW073i5sb93IAr0FH1h5LfElfouQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGzN5KpHlA7r0pXxYq3AOYT0auWNcuzH%2F2%2Bm4WTn8cbWS5mVp8tF23Xe7ruTMiZFnbtCLsxfC13QoV6CzeA1%2FhslEiK6Hy%2BBplqrs3XX8trLc2qINsB3febI%2FgPIavJ%2ByG2M7tXgy8ok4VibTf5cpM5AkyBXkPJtT9LCu3P%2FOp5xmVF5b06LGsiCtHD8hu10941n%2BXRThrSTQfNWUOHbdJPvhzd8eO%2Bxw3cagzgKEKLj3rOkxiepCxkzgYxx1eAWdxr2zL0EoSrwpUKYJa0hYhHVH7B1ZNF%2FzA8H%2F1E0rB8ELPai4n10hPFyW08i8u5kEdKKPfU%2Frx5LdsbUkl1A%2BamDfwss9yfczcUqyZOgypBpwrN1MncKSDB4KCXMVJFPzrYqm%2Bm7Z9HeQgTQCA13Tj1lkjz43K6RkbNHe9GAxsZxnC1MjX7DVq9Ss3LxoHXBo3Ir4RizK6JA7MYVF%2BBVI3JnaIRja9x3%2Bwm7ChwxtwHe2pIOSikk%2FUyLF8MVsxoqfwutL41Qm0eNwKuZG1%2FYRHdDFtlHsCxlthQ4VExonJTbsdhDS17%2BDbFaHoCrpXBHxmlLsEHLrUtE1377yVxzxOSLctGfenqegKrdf4IISG1NkigV32sp%2Bu9I%2BOZBqcbC0lusdIZZm2TjSXATDm6K3NBjqkAUrEJIFWmgpcZ7xkKSeVTvSeKZm6bkADzrawPqj7u0i4yqh0nJ7D2cnbIQGXkkDBbekiZN5UT7Q%2FGN5IUgXclRTm7ENEIt%2FmG%2B92%2B2N%2FXWgW9e98cNdpH8fjhjj2Zc3c%2BCqOHclaRrEMOHtpjdbujeNxi3drulYC1XDHFVjTr3fEeC9cYWA0kKTuuEGzF7O%2BF1BPAlIgzUs0qhyu5yauBNIYlc21&X-Amz-Signature=4722472423106c4c669892ca00a4358bbd4dc22cf70c1002e184bebf62b6c99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIZZBDP%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCz14y57Jw2PA5rui8mJsJ2p%2FGCCuW79pVJ3fbD9qc1cQIhAJcvMKsBhoyRd9zBnW073i5sb93IAr0FH1h5LfElfouQKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGzN5KpHlA7r0pXxYq3AOYT0auWNcuzH%2F2%2Bm4WTn8cbWS5mVp8tF23Xe7ruTMiZFnbtCLsxfC13QoV6CzeA1%2FhslEiK6Hy%2BBplqrs3XX8trLc2qINsB3febI%2FgPIavJ%2ByG2M7tXgy8ok4VibTf5cpM5AkyBXkPJtT9LCu3P%2FOp5xmVF5b06LGsiCtHD8hu10941n%2BXRThrSTQfNWUOHbdJPvhzd8eO%2Bxw3cagzgKEKLj3rOkxiepCxkzgYxx1eAWdxr2zL0EoSrwpUKYJa0hYhHVH7B1ZNF%2FzA8H%2F1E0rB8ELPai4n10hPFyW08i8u5kEdKKPfU%2Frx5LdsbUkl1A%2BamDfwss9yfczcUqyZOgypBpwrN1MncKSDB4KCXMVJFPzrYqm%2Bm7Z9HeQgTQCA13Tj1lkjz43K6RkbNHe9GAxsZxnC1MjX7DVq9Ss3LxoHXBo3Ir4RizK6JA7MYVF%2BBVI3JnaIRja9x3%2Bwm7ChwxtwHe2pIOSikk%2FUyLF8MVsxoqfwutL41Qm0eNwKuZG1%2FYRHdDFtlHsCxlthQ4VExonJTbsdhDS17%2BDbFaHoCrpXBHxmlLsEHLrUtE1377yVxzxOSLctGfenqegKrdf4IISG1NkigV32sp%2Bu9I%2BOZBqcbC0lusdIZZm2TjSXATDm6K3NBjqkAUrEJIFWmgpcZ7xkKSeVTvSeKZm6bkADzrawPqj7u0i4yqh0nJ7D2cnbIQGXkkDBbekiZN5UT7Q%2FGN5IUgXclRTm7ENEIt%2FmG%2B92%2B2N%2FXWgW9e98cNdpH8fjhjj2Zc3c%2BCqOHclaRrEMOHtpjdbujeNxi3drulYC1XDHFVjTr3fEeC9cYWA0kKTuuEGzF7O%2BF1BPAlIgzUs0qhyu5yauBNIYlc21&X-Amz-Signature=dbaa5bc3b25584866cd0f36a3edc468ae5eeb5c745f9d73ef1cc78318e3c372c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
