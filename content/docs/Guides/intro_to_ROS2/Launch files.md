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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZKLKYF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDlCR4M15EVVqplcdfEv81QqOOONG89u9q%2BSL9HMKEUIgIhAMiL6dRubQlO4eEjkWAgKVQf%2Ba8KcjFHOyR5%2Byvmc3U5KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo0N5fXhNEVPM9fLYq3AMlgJ8Z9XviV4bKL6Zpq6pfJ76I8bd7MwzoUvQsJy1ZPPAR9xhWcLRfT3QFEHkAjekwxWDcA%2B7ONyngQloCJ%2FUcoG8hxA%2BaFHbGER1olwpi9wt0oOmc3e1uGz0OK6s1zweYdz%2BBj9JOg%2FqDhpYd9UkWua8MEK5ECp1dfRwrSBjqEMtonyEO8C066TNYi7H1hN70f%2FAdZ0WbGhIx%2B9ABDe6fNhEzsYEyD%2BWIyq1%2BWLcQcOUWe3FPyaNL92TTGNsNTgqyAch0EPeRGLTAgdpu78FX7X%2FyrneKGMDGoVxdqqDnZ2pwxSNEh2Wz3dGSYYc7iKoc3oZZ7kDpWAoGFkDFCVBqaSufR%2FtLQOaCmyYaa3Vvc8hAgRDdTIJGTniHmwR3QB0ODOfYPZYadWxkOUSqI%2BFVsNqtDQI12i%2B1KDtgdZvXdlYiAFkiBn%2BlLkAwXcdLxNSFioUsyD8NXw%2FlcYbB3IV%2FJDdLVxCd1zg%2F%2BZFL6vO%2Bcdo2yTiHQt0dWfNAJ0RTDuW%2BtoJ%2F578N42mr01KkwsfRGMf9j0LyO3rPaofvhEqdOrm5mKQlH9XzoG06mSrvhuKxIFHwly72hFzdtQKvPMeEtzw6o7hGZR9vNHfAgFHrNnXgTUzOZuLmd8wJNTCL8uS%2FBjqkAY1p3utdcVM4ZfuTXFXsfYgqhOconbLZtlnZBlsUmSHynnTaDQUesOcAZSEAOnWj0K5rWW54pyTf5OLqSaYzuz2gYi%2B2Nw%2B%2Fg1MH7Obbi0uygxUi3wqA9PtolQ6cF2xsXDCGD046Flc2szgSg0VtjiL3zUE3cP7Papbx9JDaPCXhfCDcmB8qQYRu6xT48U%2BH6L371ZFS5hsJrhkP3xR6%2FDeHiz8c&X-Amz-Signature=d39016407d919cb0ee4dcf6eaffa3d0ec585d1b81872e7e5f6f2f1063e6d2fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZKLKYF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDlCR4M15EVVqplcdfEv81QqOOONG89u9q%2BSL9HMKEUIgIhAMiL6dRubQlO4eEjkWAgKVQf%2Ba8KcjFHOyR5%2Byvmc3U5KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo0N5fXhNEVPM9fLYq3AMlgJ8Z9XviV4bKL6Zpq6pfJ76I8bd7MwzoUvQsJy1ZPPAR9xhWcLRfT3QFEHkAjekwxWDcA%2B7ONyngQloCJ%2FUcoG8hxA%2BaFHbGER1olwpi9wt0oOmc3e1uGz0OK6s1zweYdz%2BBj9JOg%2FqDhpYd9UkWua8MEK5ECp1dfRwrSBjqEMtonyEO8C066TNYi7H1hN70f%2FAdZ0WbGhIx%2B9ABDe6fNhEzsYEyD%2BWIyq1%2BWLcQcOUWe3FPyaNL92TTGNsNTgqyAch0EPeRGLTAgdpu78FX7X%2FyrneKGMDGoVxdqqDnZ2pwxSNEh2Wz3dGSYYc7iKoc3oZZ7kDpWAoGFkDFCVBqaSufR%2FtLQOaCmyYaa3Vvc8hAgRDdTIJGTniHmwR3QB0ODOfYPZYadWxkOUSqI%2BFVsNqtDQI12i%2B1KDtgdZvXdlYiAFkiBn%2BlLkAwXcdLxNSFioUsyD8NXw%2FlcYbB3IV%2FJDdLVxCd1zg%2F%2BZFL6vO%2Bcdo2yTiHQt0dWfNAJ0RTDuW%2BtoJ%2F578N42mr01KkwsfRGMf9j0LyO3rPaofvhEqdOrm5mKQlH9XzoG06mSrvhuKxIFHwly72hFzdtQKvPMeEtzw6o7hGZR9vNHfAgFHrNnXgTUzOZuLmd8wJNTCL8uS%2FBjqkAY1p3utdcVM4ZfuTXFXsfYgqhOconbLZtlnZBlsUmSHynnTaDQUesOcAZSEAOnWj0K5rWW54pyTf5OLqSaYzuz2gYi%2B2Nw%2B%2Fg1MH7Obbi0uygxUi3wqA9PtolQ6cF2xsXDCGD046Flc2szgSg0VtjiL3zUE3cP7Papbx9JDaPCXhfCDcmB8qQYRu6xT48U%2BH6L371ZFS5hsJrhkP3xR6%2FDeHiz8c&X-Amz-Signature=1fd2c3734a9f0a184e3b9fbf7b3875e4ed68b31ae7b104a61090e3076df5b92e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZKLKYF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDlCR4M15EVVqplcdfEv81QqOOONG89u9q%2BSL9HMKEUIgIhAMiL6dRubQlO4eEjkWAgKVQf%2Ba8KcjFHOyR5%2Byvmc3U5KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo0N5fXhNEVPM9fLYq3AMlgJ8Z9XviV4bKL6Zpq6pfJ76I8bd7MwzoUvQsJy1ZPPAR9xhWcLRfT3QFEHkAjekwxWDcA%2B7ONyngQloCJ%2FUcoG8hxA%2BaFHbGER1olwpi9wt0oOmc3e1uGz0OK6s1zweYdz%2BBj9JOg%2FqDhpYd9UkWua8MEK5ECp1dfRwrSBjqEMtonyEO8C066TNYi7H1hN70f%2FAdZ0WbGhIx%2B9ABDe6fNhEzsYEyD%2BWIyq1%2BWLcQcOUWe3FPyaNL92TTGNsNTgqyAch0EPeRGLTAgdpu78FX7X%2FyrneKGMDGoVxdqqDnZ2pwxSNEh2Wz3dGSYYc7iKoc3oZZ7kDpWAoGFkDFCVBqaSufR%2FtLQOaCmyYaa3Vvc8hAgRDdTIJGTniHmwR3QB0ODOfYPZYadWxkOUSqI%2BFVsNqtDQI12i%2B1KDtgdZvXdlYiAFkiBn%2BlLkAwXcdLxNSFioUsyD8NXw%2FlcYbB3IV%2FJDdLVxCd1zg%2F%2BZFL6vO%2Bcdo2yTiHQt0dWfNAJ0RTDuW%2BtoJ%2F578N42mr01KkwsfRGMf9j0LyO3rPaofvhEqdOrm5mKQlH9XzoG06mSrvhuKxIFHwly72hFzdtQKvPMeEtzw6o7hGZR9vNHfAgFHrNnXgTUzOZuLmd8wJNTCL8uS%2FBjqkAY1p3utdcVM4ZfuTXFXsfYgqhOconbLZtlnZBlsUmSHynnTaDQUesOcAZSEAOnWj0K5rWW54pyTf5OLqSaYzuz2gYi%2B2Nw%2B%2Fg1MH7Obbi0uygxUi3wqA9PtolQ6cF2xsXDCGD046Flc2szgSg0VtjiL3zUE3cP7Papbx9JDaPCXhfCDcmB8qQYRu6xT48U%2BH6L371ZFS5hsJrhkP3xR6%2FDeHiz8c&X-Amz-Signature=67af339477147cf80bbd2fba891a286c66e66c51b5c560a3a5915ba9c6b0530b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
