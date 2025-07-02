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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5YCUN6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF%2F5JaxjHkVF3%2Fwp8G9YrlBfgIPQ%2FZrnfhRbuNMdY4CAiAlYWz3K3Pb8CXRG%2BtyKt8sP2yb6fYRRVkQu1zT5z4HgCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c11d9Pq%2BrI4LyOyKtwDDj2KIG2R%2Fcz93umMEYYPDFG%2Fa9lZCcyv9hNMYdcZblEYnvZdn%2BsBUTTgByrwrYxF%2FwLAMaaiBypXIR5YkcyutdenZscCzmzjc2ESJK5P%2F35yUiLW2OXWBxjvvNB8AtgdNvxJ28thTzDarIJCJxSk3L9gVcbiAc0%2FVB%2Bp5d92WsckOFBecBTkoLBKdfbPVkFjrKBhtvPY%2BKDsz4%2F3E6IhbFrzyW4ZQKfms2BgF9Lus%2B2C3XQZZEELbun786JantNYFGvxestNac5L08tEnyT4CbTs4j6So5dz6hNJuMeqmBtVSbiIP2EGyaah%2Fv5pBFaW%2FnDOLr9FLPRxVVKgw8AwnsX4rL7V2hdp13FOcX7Kmv4wa7IKCs9QbQZxISAr11FQ6coHzARar%2BnUf8wmeLDKrRaeFe%2FtaNMUJY%2BFhWjMrFgcwDii1PSIqQ91Xl1k%2BVjq3HPcCsjlMui2Ecq%2FGuauOtPfaiZRaTCqhuCSr%2BY45ukqouggk%2F2MFfzKB3PPl0Ix%2F0ZJyJRp2qLy%2FnGzIpXoq%2F9kiIpVfAid83DpS7%2BkCWxVm8QVlhdzFitliKXBT%2F9OAIq7l2lcC2XkKitvmZaLqQ0o2L9iR4kDtlqv8FIbBxDLJbjbUlLHxMnPfYcw07yWwwY6pgEja7cLY7HeEPay4MM0emhbA3SDa8liSdvL9LSxxNQQeDqxMxFpLOimYGTdhSj1QFPfEUAl5VI40wRvbw8QoG3g2GQITg1sK0iWxOpA4RD1BfD5kjS4uU1rAHVhunJqPTfAybvLninffnOhD0KiX0vWrjyY3MAPjbhMLPWuXTcThzKroYe8cPrQtjZSgXXtUgwE3FWCMZARi7C0%2Bg1U1xF7bbCrU6Ys&X-Amz-Signature=96e32964f7a813a6309099357526c6dc8bc5840fe79bb0b6cbe8d33561d7a626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5YCUN6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF%2F5JaxjHkVF3%2Fwp8G9YrlBfgIPQ%2FZrnfhRbuNMdY4CAiAlYWz3K3Pb8CXRG%2BtyKt8sP2yb6fYRRVkQu1zT5z4HgCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c11d9Pq%2BrI4LyOyKtwDDj2KIG2R%2Fcz93umMEYYPDFG%2Fa9lZCcyv9hNMYdcZblEYnvZdn%2BsBUTTgByrwrYxF%2FwLAMaaiBypXIR5YkcyutdenZscCzmzjc2ESJK5P%2F35yUiLW2OXWBxjvvNB8AtgdNvxJ28thTzDarIJCJxSk3L9gVcbiAc0%2FVB%2Bp5d92WsckOFBecBTkoLBKdfbPVkFjrKBhtvPY%2BKDsz4%2F3E6IhbFrzyW4ZQKfms2BgF9Lus%2B2C3XQZZEELbun786JantNYFGvxestNac5L08tEnyT4CbTs4j6So5dz6hNJuMeqmBtVSbiIP2EGyaah%2Fv5pBFaW%2FnDOLr9FLPRxVVKgw8AwnsX4rL7V2hdp13FOcX7Kmv4wa7IKCs9QbQZxISAr11FQ6coHzARar%2BnUf8wmeLDKrRaeFe%2FtaNMUJY%2BFhWjMrFgcwDii1PSIqQ91Xl1k%2BVjq3HPcCsjlMui2Ecq%2FGuauOtPfaiZRaTCqhuCSr%2BY45ukqouggk%2F2MFfzKB3PPl0Ix%2F0ZJyJRp2qLy%2FnGzIpXoq%2F9kiIpVfAid83DpS7%2BkCWxVm8QVlhdzFitliKXBT%2F9OAIq7l2lcC2XkKitvmZaLqQ0o2L9iR4kDtlqv8FIbBxDLJbjbUlLHxMnPfYcw07yWwwY6pgEja7cLY7HeEPay4MM0emhbA3SDa8liSdvL9LSxxNQQeDqxMxFpLOimYGTdhSj1QFPfEUAl5VI40wRvbw8QoG3g2GQITg1sK0iWxOpA4RD1BfD5kjS4uU1rAHVhunJqPTfAybvLninffnOhD0KiX0vWrjyY3MAPjbhMLPWuXTcThzKroYe8cPrQtjZSgXXtUgwE3FWCMZARi7C0%2Bg1U1xF7bbCrU6Ys&X-Amz-Signature=2dd2e1f68b91da1420faa549968fba19dd5ddb79eb59f34b359963303f8ba6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5YCUN6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEF%2F5JaxjHkVF3%2Fwp8G9YrlBfgIPQ%2FZrnfhRbuNMdY4CAiAlYWz3K3Pb8CXRG%2BtyKt8sP2yb6fYRRVkQu1zT5z4HgCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c11d9Pq%2BrI4LyOyKtwDDj2KIG2R%2Fcz93umMEYYPDFG%2Fa9lZCcyv9hNMYdcZblEYnvZdn%2BsBUTTgByrwrYxF%2FwLAMaaiBypXIR5YkcyutdenZscCzmzjc2ESJK5P%2F35yUiLW2OXWBxjvvNB8AtgdNvxJ28thTzDarIJCJxSk3L9gVcbiAc0%2FVB%2Bp5d92WsckOFBecBTkoLBKdfbPVkFjrKBhtvPY%2BKDsz4%2F3E6IhbFrzyW4ZQKfms2BgF9Lus%2B2C3XQZZEELbun786JantNYFGvxestNac5L08tEnyT4CbTs4j6So5dz6hNJuMeqmBtVSbiIP2EGyaah%2Fv5pBFaW%2FnDOLr9FLPRxVVKgw8AwnsX4rL7V2hdp13FOcX7Kmv4wa7IKCs9QbQZxISAr11FQ6coHzARar%2BnUf8wmeLDKrRaeFe%2FtaNMUJY%2BFhWjMrFgcwDii1PSIqQ91Xl1k%2BVjq3HPcCsjlMui2Ecq%2FGuauOtPfaiZRaTCqhuCSr%2BY45ukqouggk%2F2MFfzKB3PPl0Ix%2F0ZJyJRp2qLy%2FnGzIpXoq%2F9kiIpVfAid83DpS7%2BkCWxVm8QVlhdzFitliKXBT%2F9OAIq7l2lcC2XkKitvmZaLqQ0o2L9iR4kDtlqv8FIbBxDLJbjbUlLHxMnPfYcw07yWwwY6pgEja7cLY7HeEPay4MM0emhbA3SDa8liSdvL9LSxxNQQeDqxMxFpLOimYGTdhSj1QFPfEUAl5VI40wRvbw8QoG3g2GQITg1sK0iWxOpA4RD1BfD5kjS4uU1rAHVhunJqPTfAybvLninffnOhD0KiX0vWrjyY3MAPjbhMLPWuXTcThzKroYe8cPrQtjZSgXXtUgwE3FWCMZARi7C0%2Bg1U1xF7bbCrU6Ys&X-Amz-Signature=284779aede01c8e68e0fbd3e56ee4924348884e71a72badc3053be218743f582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
