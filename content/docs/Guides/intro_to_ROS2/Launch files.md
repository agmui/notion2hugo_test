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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDWQMXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkt89eRuG%2B%2BokrGqgMa9Myp%2BsO6Dl0PCyM%2FQlcyNVPVAiBae5aQHdlnYsrATD83t5ReGlkXCF%2Bv7W5a6wjfnwDuiyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1qIePHD622oosBAgKtwDk%2Bq0wk4SHv9ucHXBWHLPUG5BREF4vxqEYmX%2B3k2bTNs7WoFV50Xfql%2FJde04deB5qU4Owu6b9DAKff2mhVjYUtN5blwUZ7lySt9V5SZr7OAi49ULdwKD5IFkJaYqZyEPk3sm8dPVLL7TW1JHNwWGJl5OVJeFYtPwEtXrw%2FF%2BaCxGwFcxN%2Bz2NuINvGrzJwHRePUKwQr2iAFjUd4mbWxY6IPJf7GJORGHzZkX28SBGLWmvdngkgWp%2FuJWKC8pbA0Tr3lR0NwMgLVdjukAkeRV1MAdrhnlAhRKiuVM5AaiHo5kFm277EawNgSVZ7GUNHH6ErgNhjST2P415qnen2HmlqeTjxTU1xRGv5meKUMTbTHw9TgnYhUhhGfJv4gGLOFFEtOF%2Bzr9ACSXALkMJ9Br4MwfYl7StctGVh8BMn7OWHujGtLC97GmrEXkBqZ6A%2FJ%2B2Yr8%2FdHNUV67vyIHjx7vzY1ql86q62TqZJNaaEkR7cmtZ5EuPkHsuaZr%2BLwHiaOzGKZ%2BLnpVHlsxDVEX0U%2B5aaEuDp5F38eXUOydDs8Ld11YwI%2FgZ1hGlaJFLoiFFZiqpbWkcRRXUjQzwCTcrMMI5tsP%2FQcyktDp9szSdl72YR1nveZUGhRH8rIp%2BeIw3q7nvAY6pgH4%2BmQDsCmMynlyIrBoyq%2FCu3CmHvpm7MRi39r%2FJwoin10rAPH6paKYjpzVe13jVLfFdjpcFJ92lqFl%2FIuPVMCnvVMEMSDwrO9599ULeKs4WwfwkKMFwxPi3fDaqVs4bDlnAqWRiogjJI5TWr4fwVwBTLDKhdl2hBbq%2FNaXClxkNVNMS3aFrlZtxB6fcy7FmN%2Bpq9kcdn1s%2FTH%2F%2BncXwvrUL%2FdzSq4y&X-Amz-Signature=348e9c9d1dca29ce966158a8213e517012ebf11446b2a7363681c65d8679b26c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDWQMXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkt89eRuG%2B%2BokrGqgMa9Myp%2BsO6Dl0PCyM%2FQlcyNVPVAiBae5aQHdlnYsrATD83t5ReGlkXCF%2Bv7W5a6wjfnwDuiyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1qIePHD622oosBAgKtwDk%2Bq0wk4SHv9ucHXBWHLPUG5BREF4vxqEYmX%2B3k2bTNs7WoFV50Xfql%2FJde04deB5qU4Owu6b9DAKff2mhVjYUtN5blwUZ7lySt9V5SZr7OAi49ULdwKD5IFkJaYqZyEPk3sm8dPVLL7TW1JHNwWGJl5OVJeFYtPwEtXrw%2FF%2BaCxGwFcxN%2Bz2NuINvGrzJwHRePUKwQr2iAFjUd4mbWxY6IPJf7GJORGHzZkX28SBGLWmvdngkgWp%2FuJWKC8pbA0Tr3lR0NwMgLVdjukAkeRV1MAdrhnlAhRKiuVM5AaiHo5kFm277EawNgSVZ7GUNHH6ErgNhjST2P415qnen2HmlqeTjxTU1xRGv5meKUMTbTHw9TgnYhUhhGfJv4gGLOFFEtOF%2Bzr9ACSXALkMJ9Br4MwfYl7StctGVh8BMn7OWHujGtLC97GmrEXkBqZ6A%2FJ%2B2Yr8%2FdHNUV67vyIHjx7vzY1ql86q62TqZJNaaEkR7cmtZ5EuPkHsuaZr%2BLwHiaOzGKZ%2BLnpVHlsxDVEX0U%2B5aaEuDp5F38eXUOydDs8Ld11YwI%2FgZ1hGlaJFLoiFFZiqpbWkcRRXUjQzwCTcrMMI5tsP%2FQcyktDp9szSdl72YR1nveZUGhRH8rIp%2BeIw3q7nvAY6pgH4%2BmQDsCmMynlyIrBoyq%2FCu3CmHvpm7MRi39r%2FJwoin10rAPH6paKYjpzVe13jVLfFdjpcFJ92lqFl%2FIuPVMCnvVMEMSDwrO9599ULeKs4WwfwkKMFwxPi3fDaqVs4bDlnAqWRiogjJI5TWr4fwVwBTLDKhdl2hBbq%2FNaXClxkNVNMS3aFrlZtxB6fcy7FmN%2Bpq9kcdn1s%2FTH%2F%2BncXwvrUL%2FdzSq4y&X-Amz-Signature=c93dbbc69786cf10cc7af35386191537d8e8b6410c81410cd213b7f39482f1cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDWQMXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkt89eRuG%2B%2BokrGqgMa9Myp%2BsO6Dl0PCyM%2FQlcyNVPVAiBae5aQHdlnYsrATD83t5ReGlkXCF%2Bv7W5a6wjfnwDuiyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1qIePHD622oosBAgKtwDk%2Bq0wk4SHv9ucHXBWHLPUG5BREF4vxqEYmX%2B3k2bTNs7WoFV50Xfql%2FJde04deB5qU4Owu6b9DAKff2mhVjYUtN5blwUZ7lySt9V5SZr7OAi49ULdwKD5IFkJaYqZyEPk3sm8dPVLL7TW1JHNwWGJl5OVJeFYtPwEtXrw%2FF%2BaCxGwFcxN%2Bz2NuINvGrzJwHRePUKwQr2iAFjUd4mbWxY6IPJf7GJORGHzZkX28SBGLWmvdngkgWp%2FuJWKC8pbA0Tr3lR0NwMgLVdjukAkeRV1MAdrhnlAhRKiuVM5AaiHo5kFm277EawNgSVZ7GUNHH6ErgNhjST2P415qnen2HmlqeTjxTU1xRGv5meKUMTbTHw9TgnYhUhhGfJv4gGLOFFEtOF%2Bzr9ACSXALkMJ9Br4MwfYl7StctGVh8BMn7OWHujGtLC97GmrEXkBqZ6A%2FJ%2B2Yr8%2FdHNUV67vyIHjx7vzY1ql86q62TqZJNaaEkR7cmtZ5EuPkHsuaZr%2BLwHiaOzGKZ%2BLnpVHlsxDVEX0U%2B5aaEuDp5F38eXUOydDs8Ld11YwI%2FgZ1hGlaJFLoiFFZiqpbWkcRRXUjQzwCTcrMMI5tsP%2FQcyktDp9szSdl72YR1nveZUGhRH8rIp%2BeIw3q7nvAY6pgH4%2BmQDsCmMynlyIrBoyq%2FCu3CmHvpm7MRi39r%2FJwoin10rAPH6paKYjpzVe13jVLfFdjpcFJ92lqFl%2FIuPVMCnvVMEMSDwrO9599ULeKs4WwfwkKMFwxPi3fDaqVs4bDlnAqWRiogjJI5TWr4fwVwBTLDKhdl2hBbq%2FNaXClxkNVNMS3aFrlZtxB6fcy7FmN%2Bpq9kcdn1s%2FTH%2F%2BncXwvrUL%2FdzSq4y&X-Amz-Signature=a3adb2a9f7b48e12792aeb06c3d9e074175bf38d2859bbef5d0ceb63b07334e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
