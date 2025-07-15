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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKLVNTSP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDtl5lkVbnNTd42vZH40YYjE10Cey39fP44gizr6cSkUAiB0ntZ3JyYW39SsAyJ6APIbOZxnrFzMlhhDNyFK9YnaXyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUpFVakxU2q%2BlH0tyKtwD9d9yGcT6f6hpv4lIRNwZNl9tRxme%2BwYvm9T3YXzTXjmzLEnwpZU12Ca4nkSnAOUr1Xy1rWfJGdCI%2FcGnrVRRqfLk%2F%2BkSdpgwX6bj4NgH3bKhCRLZCKNH7erjfG4wQQVWc8XDv3HjB6iSW5CJQdmsdpMfJsTRXbTh%2BnBv1TTrhlN4IaEEAXclctQfciDUx8O0x1p8XX77iYdWhN4ukQ2ddlNiwtmaaxXwfiBGn3PvH5jylnXspV%2F9aRcRrfPyHFoO9qtaxp7k5deXJQSEcWbAzpkErqTjvBiRPJ8n7v9YVn7ALzZzyA8DIiKRxMs7ISrK2eR9GDFAKYgZVkXRxzUuwXV3y29CoWUilt6BT8lGHOosLi6UKbOeroVm4xH%2BPMxP%2Fe9KG02ATxgGajSe5CIFaxcR08zVWsjE85zUQO%2BsHivJ5CYLa%2Fh4M3hZO6k3%2BSEgWDIdFRCC7l32rdgRqqaGvnLTQzRzV8KMUFENIDeHP6%2BrzUM5VmuERoj8vR04SreLI7kUdmOzW9shs5iur8cqPVaAC8rnr7KLMHGfJ%2BJwmsRP5jVXqXXDcbpy84w%2FCiR5q4MBlAJcXd%2Fkh2jizXjUucp7gJ4V79zk0Syw7y0%2FttEVAElVy50EFi97lPQwntnYwwY6pgF2Woo8pkzqGQPkaIfpzAEr5tqYE0v4QL3pcqzUn%2Fw5C7h0b5T08BVGZWhki0HJXPWbJWrdWMb0GX2mVhUlIhWsD0wb1%2BmojTMM%2BHC0JmUu0YPAiBsupb1VJ7pPo%2FOrb%2BWEBsV1Fl%2BSL5Nzg9iRvKzcRrkwvnJQ3XcUTBiW%2B7EjTPmbBBhh9YgmBIrxXGo2dgDmGw2fy6Ww9qu3HzPLNLZrBXm6NmJz&X-Amz-Signature=a9c865e62f06cf1f2446da41fb182048d1cc92b8fdaf8e08ba10a27919a621b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKLVNTSP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDtl5lkVbnNTd42vZH40YYjE10Cey39fP44gizr6cSkUAiB0ntZ3JyYW39SsAyJ6APIbOZxnrFzMlhhDNyFK9YnaXyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUpFVakxU2q%2BlH0tyKtwD9d9yGcT6f6hpv4lIRNwZNl9tRxme%2BwYvm9T3YXzTXjmzLEnwpZU12Ca4nkSnAOUr1Xy1rWfJGdCI%2FcGnrVRRqfLk%2F%2BkSdpgwX6bj4NgH3bKhCRLZCKNH7erjfG4wQQVWc8XDv3HjB6iSW5CJQdmsdpMfJsTRXbTh%2BnBv1TTrhlN4IaEEAXclctQfciDUx8O0x1p8XX77iYdWhN4ukQ2ddlNiwtmaaxXwfiBGn3PvH5jylnXspV%2F9aRcRrfPyHFoO9qtaxp7k5deXJQSEcWbAzpkErqTjvBiRPJ8n7v9YVn7ALzZzyA8DIiKRxMs7ISrK2eR9GDFAKYgZVkXRxzUuwXV3y29CoWUilt6BT8lGHOosLi6UKbOeroVm4xH%2BPMxP%2Fe9KG02ATxgGajSe5CIFaxcR08zVWsjE85zUQO%2BsHivJ5CYLa%2Fh4M3hZO6k3%2BSEgWDIdFRCC7l32rdgRqqaGvnLTQzRzV8KMUFENIDeHP6%2BrzUM5VmuERoj8vR04SreLI7kUdmOzW9shs5iur8cqPVaAC8rnr7KLMHGfJ%2BJwmsRP5jVXqXXDcbpy84w%2FCiR5q4MBlAJcXd%2Fkh2jizXjUucp7gJ4V79zk0Syw7y0%2FttEVAElVy50EFi97lPQwntnYwwY6pgF2Woo8pkzqGQPkaIfpzAEr5tqYE0v4QL3pcqzUn%2Fw5C7h0b5T08BVGZWhki0HJXPWbJWrdWMb0GX2mVhUlIhWsD0wb1%2BmojTMM%2BHC0JmUu0YPAiBsupb1VJ7pPo%2FOrb%2BWEBsV1Fl%2BSL5Nzg9iRvKzcRrkwvnJQ3XcUTBiW%2B7EjTPmbBBhh9YgmBIrxXGo2dgDmGw2fy6Ww9qu3HzPLNLZrBXm6NmJz&X-Amz-Signature=4bd0d648b3ffd5603890e0f66d5f8cd0ac0c2898224104286080bf7eed8d5a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKLVNTSP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDtl5lkVbnNTd42vZH40YYjE10Cey39fP44gizr6cSkUAiB0ntZ3JyYW39SsAyJ6APIbOZxnrFzMlhhDNyFK9YnaXyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMUpFVakxU2q%2BlH0tyKtwD9d9yGcT6f6hpv4lIRNwZNl9tRxme%2BwYvm9T3YXzTXjmzLEnwpZU12Ca4nkSnAOUr1Xy1rWfJGdCI%2FcGnrVRRqfLk%2F%2BkSdpgwX6bj4NgH3bKhCRLZCKNH7erjfG4wQQVWc8XDv3HjB6iSW5CJQdmsdpMfJsTRXbTh%2BnBv1TTrhlN4IaEEAXclctQfciDUx8O0x1p8XX77iYdWhN4ukQ2ddlNiwtmaaxXwfiBGn3PvH5jylnXspV%2F9aRcRrfPyHFoO9qtaxp7k5deXJQSEcWbAzpkErqTjvBiRPJ8n7v9YVn7ALzZzyA8DIiKRxMs7ISrK2eR9GDFAKYgZVkXRxzUuwXV3y29CoWUilt6BT8lGHOosLi6UKbOeroVm4xH%2BPMxP%2Fe9KG02ATxgGajSe5CIFaxcR08zVWsjE85zUQO%2BsHivJ5CYLa%2Fh4M3hZO6k3%2BSEgWDIdFRCC7l32rdgRqqaGvnLTQzRzV8KMUFENIDeHP6%2BrzUM5VmuERoj8vR04SreLI7kUdmOzW9shs5iur8cqPVaAC8rnr7KLMHGfJ%2BJwmsRP5jVXqXXDcbpy84w%2FCiR5q4MBlAJcXd%2Fkh2jizXjUucp7gJ4V79zk0Syw7y0%2FttEVAElVy50EFi97lPQwntnYwwY6pgF2Woo8pkzqGQPkaIfpzAEr5tqYE0v4QL3pcqzUn%2Fw5C7h0b5T08BVGZWhki0HJXPWbJWrdWMb0GX2mVhUlIhWsD0wb1%2BmojTMM%2BHC0JmUu0YPAiBsupb1VJ7pPo%2FOrb%2BWEBsV1Fl%2BSL5Nzg9iRvKzcRrkwvnJQ3XcUTBiW%2B7EjTPmbBBhh9YgmBIrxXGo2dgDmGw2fy6Ww9qu3HzPLNLZrBXm6NmJz&X-Amz-Signature=68c403b747a214071232ec48e288fa14f9106a91270b6dfd654e1d47da3d0f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
