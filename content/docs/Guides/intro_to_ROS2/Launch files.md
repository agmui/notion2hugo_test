---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWGZGUYI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfLyRC3xdlvONikWffgqngmUIymIAY57JDH1eHnlcfmAiBExs5w3IsrM4ays%2FyrneIuydVhTMFopi7RrkAFAYSIuyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo6HE%2BR6t%2Bvh3ih3jKtwDQDtrzEZ%2BA2yKsDTagjKkDoYDUwgkIVctQKiGGsuF9Wxi5ZsWK62D2bnEX7OzJeHh%2BFdmuhJFN9YuydCnDVHEU0aqsroO2dbKVZj%2F3vlGEoAmPSXpy6IPZO6w674Te2OCu4U8oXPhSaKddkmHqJXIfjgbvSXUUH9baXyjsGF%2BAUoaC%2FgciQaM%2BPSzEg%2BDmH8KbNf2Nzdnno9uIecaksXzmmX4pTnVf%2B6nIrKQg%2BjbbMfISUqf2MBfaBZWH5eCeT9Xv2KMthmM4InZbN8kKQAJVKPacRSw9Y54z3kq5QaampPejV9W63DhCppVzw34AM6rjbFjcH5bDy3LDFpd1TBFPXWIya%2BR77TCo4r9oJoEDYwBV34M3zp5HffFeUymoue3TbZf5UOKdYNQnT5NCtOnA62k1VgIRrup46Kl1rPOKbR6GsEJ25lv56Y3Ks%2Fd4O9ZApF8Bu3bEjgPwkN4I8bUhVQfIoKJIK8tMWWty0OSQqbKJapsKrUM%2BNlhrlZyBp0rArj9HrtZbkAPnO4kYkKdY%2FFTCQMuG9OXg%2BuvLFu7H673W2unUrzC6dvOQQ%2BnViw9UPKDgVT3E0Mlc8l%2Bm8wf18c2rtnvLhtrF5CQKefujIQwX0aCrNreCJfLgRAw8%2BipxAY6pgHFKaCpT3da3mwIGqOrFVf81gUjT34%2Fb7nWzrzptMxoMVVXVKHrMUvyyMqDX8REIJK7MHsi1HLu9L9jznulATwST9Ma2jDYbuW8rN1GPS9IN7aoWLfFcw5k%2Bf%2FgDiQ9xkyT9zWT%2BXvO4M0FNSHtybhs8WmEoui9OPQjVZpp%2FeNf6uLBohyzLdhx7tbsMVVDRD%2B%2BXr423iNuxeKsjc%2FDbwbtOu%2B%2B6%2FQK&X-Amz-Signature=b93fd1e72c94c4477fad622117f3ee4205482cfa2ef035b51cf3435134ec9d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWGZGUYI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfLyRC3xdlvONikWffgqngmUIymIAY57JDH1eHnlcfmAiBExs5w3IsrM4ays%2FyrneIuydVhTMFopi7RrkAFAYSIuyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo6HE%2BR6t%2Bvh3ih3jKtwDQDtrzEZ%2BA2yKsDTagjKkDoYDUwgkIVctQKiGGsuF9Wxi5ZsWK62D2bnEX7OzJeHh%2BFdmuhJFN9YuydCnDVHEU0aqsroO2dbKVZj%2F3vlGEoAmPSXpy6IPZO6w674Te2OCu4U8oXPhSaKddkmHqJXIfjgbvSXUUH9baXyjsGF%2BAUoaC%2FgciQaM%2BPSzEg%2BDmH8KbNf2Nzdnno9uIecaksXzmmX4pTnVf%2B6nIrKQg%2BjbbMfISUqf2MBfaBZWH5eCeT9Xv2KMthmM4InZbN8kKQAJVKPacRSw9Y54z3kq5QaampPejV9W63DhCppVzw34AM6rjbFjcH5bDy3LDFpd1TBFPXWIya%2BR77TCo4r9oJoEDYwBV34M3zp5HffFeUymoue3TbZf5UOKdYNQnT5NCtOnA62k1VgIRrup46Kl1rPOKbR6GsEJ25lv56Y3Ks%2Fd4O9ZApF8Bu3bEjgPwkN4I8bUhVQfIoKJIK8tMWWty0OSQqbKJapsKrUM%2BNlhrlZyBp0rArj9HrtZbkAPnO4kYkKdY%2FFTCQMuG9OXg%2BuvLFu7H673W2unUrzC6dvOQQ%2BnViw9UPKDgVT3E0Mlc8l%2Bm8wf18c2rtnvLhtrF5CQKefujIQwX0aCrNreCJfLgRAw8%2BipxAY6pgHFKaCpT3da3mwIGqOrFVf81gUjT34%2Fb7nWzrzptMxoMVVXVKHrMUvyyMqDX8REIJK7MHsi1HLu9L9jznulATwST9Ma2jDYbuW8rN1GPS9IN7aoWLfFcw5k%2Bf%2FgDiQ9xkyT9zWT%2BXvO4M0FNSHtybhs8WmEoui9OPQjVZpp%2FeNf6uLBohyzLdhx7tbsMVVDRD%2B%2BXr423iNuxeKsjc%2FDbwbtOu%2B%2B6%2FQK&X-Amz-Signature=65cdf256908411e92bdb2ad7db1fcc50eed7799a601d29489a27bc3fb234fabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWGZGUYI%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfLyRC3xdlvONikWffgqngmUIymIAY57JDH1eHnlcfmAiBExs5w3IsrM4ays%2FyrneIuydVhTMFopi7RrkAFAYSIuyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo6HE%2BR6t%2Bvh3ih3jKtwDQDtrzEZ%2BA2yKsDTagjKkDoYDUwgkIVctQKiGGsuF9Wxi5ZsWK62D2bnEX7OzJeHh%2BFdmuhJFN9YuydCnDVHEU0aqsroO2dbKVZj%2F3vlGEoAmPSXpy6IPZO6w674Te2OCu4U8oXPhSaKddkmHqJXIfjgbvSXUUH9baXyjsGF%2BAUoaC%2FgciQaM%2BPSzEg%2BDmH8KbNf2Nzdnno9uIecaksXzmmX4pTnVf%2B6nIrKQg%2BjbbMfISUqf2MBfaBZWH5eCeT9Xv2KMthmM4InZbN8kKQAJVKPacRSw9Y54z3kq5QaampPejV9W63DhCppVzw34AM6rjbFjcH5bDy3LDFpd1TBFPXWIya%2BR77TCo4r9oJoEDYwBV34M3zp5HffFeUymoue3TbZf5UOKdYNQnT5NCtOnA62k1VgIRrup46Kl1rPOKbR6GsEJ25lv56Y3Ks%2Fd4O9ZApF8Bu3bEjgPwkN4I8bUhVQfIoKJIK8tMWWty0OSQqbKJapsKrUM%2BNlhrlZyBp0rArj9HrtZbkAPnO4kYkKdY%2FFTCQMuG9OXg%2BuvLFu7H673W2unUrzC6dvOQQ%2BnViw9UPKDgVT3E0Mlc8l%2Bm8wf18c2rtnvLhtrF5CQKefujIQwX0aCrNreCJfLgRAw8%2BipxAY6pgHFKaCpT3da3mwIGqOrFVf81gUjT34%2Fb7nWzrzptMxoMVVXVKHrMUvyyMqDX8REIJK7MHsi1HLu9L9jznulATwST9Ma2jDYbuW8rN1GPS9IN7aoWLfFcw5k%2Bf%2FgDiQ9xkyT9zWT%2BXvO4M0FNSHtybhs8WmEoui9OPQjVZpp%2FeNf6uLBohyzLdhx7tbsMVVDRD%2B%2BXr423iNuxeKsjc%2FDbwbtOu%2B%2B6%2FQK&X-Amz-Signature=9bbac334a18cc55f9f26180d209d1a36088228fd5f804c9a3f589e021b00a5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
