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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBEHNPIS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCID9rxfAUVwMGMcHUiI%2Bt%2FEF55YWaxP%2FFWM3wHZO%2F9sAFAiB3D8cnJcy14ENM7cUb%2BpA92shCitECp1Gh1rfGgXrJoyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZQuIq5Orv2Zl9pyMKtwDLsrwjS1ZhFqEs2mqzaUt8R%2Fd7X6DuZUzFutZwEDkU9KROrVtgzePPT1Ysf1IOAixt1O7zxW%2FO%2FKXc7V7EcBig34zkXS8%2F2%2Bcp9AmqloH7lVqM5h2v8wTvhWbSyprwGtKTY2F93mCVAO56BKhM2kTNEclKYndhGbLsU3hHst7w%2BWz1URB8d5xQ%2BAcJV7QeHdWeGrWmodk2%2FzlSVHCL519dSukfdthZtaVqyQZga92thKbX3Cx26YsHareGgjbRt33gDne9qcBAR81tWur6NaZH0201ALgTpngBbw%2BVH3G8I0iMkybnOKcJBg71yJJ5gby3md8Ho2%2Bzpo2hWqvx5KP3dTqO%2Bf8%2Fw7IrME%2FM1tCtFP6mUL41CnFqj%2Fw%2FpwAQRZJZe3hdBlem9tBhQDDoe6WTL%2FKlziJdQqPdM2TjCQQwOaq%2Bsn6aChAKo3NzAAQzrnvE7H7gnVzvDVP7R9eVv8EJj2esWY7dWc1Bdiqlf93HDoDH94SHmp1Tpg77gB2L4zygOQ7Avk16cEQRitpw1o5OeSNDPAwG1XfzkqyFlQfKJ5UAqgqr6KP%2FMsHArxD8%2BW3pYJvstUr%2FMi%2BoQrrVNGqgOEuLsIbl%2BwGvsbN3TpHkhJrPt5UXzBWjhN39WUwnJ%2BIvQY6pgEmrATZ9JKr88usuowVTvjhnudrMkLbk93VPb8Ew9q5cUwET76DyyOfj5QHKtQ5Exbyab08oWC9UdbaZYzB81a%2BinC989WWTImUpjjeTA0yohRsEPXX7hTk%2BtkUTf908hClicH0uJOLLShIEHhweK7Nq%2F1qTjEDliDT7E6bcpd4jb0UwUlbpF6DhzfJ1kMJy4Mzn5d6qhpZ%2Fo%2B9FH6rk49alyKntCuZ&X-Amz-Signature=b0305a162c59849fc6f7a9c2f85591dc889ab2665631ed452917513477021d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBEHNPIS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCID9rxfAUVwMGMcHUiI%2Bt%2FEF55YWaxP%2FFWM3wHZO%2F9sAFAiB3D8cnJcy14ENM7cUb%2BpA92shCitECp1Gh1rfGgXrJoyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZQuIq5Orv2Zl9pyMKtwDLsrwjS1ZhFqEs2mqzaUt8R%2Fd7X6DuZUzFutZwEDkU9KROrVtgzePPT1Ysf1IOAixt1O7zxW%2FO%2FKXc7V7EcBig34zkXS8%2F2%2Bcp9AmqloH7lVqM5h2v8wTvhWbSyprwGtKTY2F93mCVAO56BKhM2kTNEclKYndhGbLsU3hHst7w%2BWz1URB8d5xQ%2BAcJV7QeHdWeGrWmodk2%2FzlSVHCL519dSukfdthZtaVqyQZga92thKbX3Cx26YsHareGgjbRt33gDne9qcBAR81tWur6NaZH0201ALgTpngBbw%2BVH3G8I0iMkybnOKcJBg71yJJ5gby3md8Ho2%2Bzpo2hWqvx5KP3dTqO%2Bf8%2Fw7IrME%2FM1tCtFP6mUL41CnFqj%2Fw%2FpwAQRZJZe3hdBlem9tBhQDDoe6WTL%2FKlziJdQqPdM2TjCQQwOaq%2Bsn6aChAKo3NzAAQzrnvE7H7gnVzvDVP7R9eVv8EJj2esWY7dWc1Bdiqlf93HDoDH94SHmp1Tpg77gB2L4zygOQ7Avk16cEQRitpw1o5OeSNDPAwG1XfzkqyFlQfKJ5UAqgqr6KP%2FMsHArxD8%2BW3pYJvstUr%2FMi%2BoQrrVNGqgOEuLsIbl%2BwGvsbN3TpHkhJrPt5UXzBWjhN39WUwnJ%2BIvQY6pgEmrATZ9JKr88usuowVTvjhnudrMkLbk93VPb8Ew9q5cUwET76DyyOfj5QHKtQ5Exbyab08oWC9UdbaZYzB81a%2BinC989WWTImUpjjeTA0yohRsEPXX7hTk%2BtkUTf908hClicH0uJOLLShIEHhweK7Nq%2F1qTjEDliDT7E6bcpd4jb0UwUlbpF6DhzfJ1kMJy4Mzn5d6qhpZ%2Fo%2B9FH6rk49alyKntCuZ&X-Amz-Signature=8e344d67ede5cc9cc639411a58e4e4dcc037a2a4593aaa8c4af168493fc9bf7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBEHNPIS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCID9rxfAUVwMGMcHUiI%2Bt%2FEF55YWaxP%2FFWM3wHZO%2F9sAFAiB3D8cnJcy14ENM7cUb%2BpA92shCitECp1Gh1rfGgXrJoyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZQuIq5Orv2Zl9pyMKtwDLsrwjS1ZhFqEs2mqzaUt8R%2Fd7X6DuZUzFutZwEDkU9KROrVtgzePPT1Ysf1IOAixt1O7zxW%2FO%2FKXc7V7EcBig34zkXS8%2F2%2Bcp9AmqloH7lVqM5h2v8wTvhWbSyprwGtKTY2F93mCVAO56BKhM2kTNEclKYndhGbLsU3hHst7w%2BWz1URB8d5xQ%2BAcJV7QeHdWeGrWmodk2%2FzlSVHCL519dSukfdthZtaVqyQZga92thKbX3Cx26YsHareGgjbRt33gDne9qcBAR81tWur6NaZH0201ALgTpngBbw%2BVH3G8I0iMkybnOKcJBg71yJJ5gby3md8Ho2%2Bzpo2hWqvx5KP3dTqO%2Bf8%2Fw7IrME%2FM1tCtFP6mUL41CnFqj%2Fw%2FpwAQRZJZe3hdBlem9tBhQDDoe6WTL%2FKlziJdQqPdM2TjCQQwOaq%2Bsn6aChAKo3NzAAQzrnvE7H7gnVzvDVP7R9eVv8EJj2esWY7dWc1Bdiqlf93HDoDH94SHmp1Tpg77gB2L4zygOQ7Avk16cEQRitpw1o5OeSNDPAwG1XfzkqyFlQfKJ5UAqgqr6KP%2FMsHArxD8%2BW3pYJvstUr%2FMi%2BoQrrVNGqgOEuLsIbl%2BwGvsbN3TpHkhJrPt5UXzBWjhN39WUwnJ%2BIvQY6pgEmrATZ9JKr88usuowVTvjhnudrMkLbk93VPb8Ew9q5cUwET76DyyOfj5QHKtQ5Exbyab08oWC9UdbaZYzB81a%2BinC989WWTImUpjjeTA0yohRsEPXX7hTk%2BtkUTf908hClicH0uJOLLShIEHhweK7Nq%2F1qTjEDliDT7E6bcpd4jb0UwUlbpF6DhzfJ1kMJy4Mzn5d6qhpZ%2Fo%2B9FH6rk49alyKntCuZ&X-Amz-Signature=75940af7c26dff11222547f07058cdf0869bb88c2adc2a9261f0c05f3becf4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
