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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6XNZWL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFRRny2uMFxwQf7B47aqS4BmzUkhKeToazOWpMklleJnAiBbdYE1pfiHD05%2FgBJqfcG%2Fk1rroJiOfzcojofODw%2Bzhir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMPJLtJtuANIFHVEAAKtwDVKWkUDRt5aEtf60y283BhUxNljcqDNnwIbYGAWiCULk%2BSizLrfNcqVDcCPI5974girvdxKAf1qOali3QxFALEgr5NQ2Vw4HBBEjyzsYOZQC2dSoPYj1ShemSWIRDkdBxAFhr%2BjC64wnhpLcW%2FisRaLcWSRdGnwZsbqlP6dmqdtDCi9nso6rt%2BBJVIqJVMkKhjKoefNTm6n4IVI2HIY7zZSzCP1R0NUn3Fq3gjKYmZvKyuknEoOyvajaziy8VMHYei5V5894xBGnX59ubBeMg7u8zJrM2EYxzGCtJ6eQ9yNrpX6Fxodw%2FIFw811B0ENiwLEezGqxjHH1qy4tOaWoSzzZPdQfNxYR5pgLwqVUOX8aOJvixOBpEXTXQwvNl7p8r5VzZQJuc%2BCN4xOadFDMCLdDQlVl7HpFMMNDmk7RoSx7sAzfxGYjmErE21gbtYbuFKq9PgRh4W3MNLArrr%2BXRFzayiAvSAmv6saRWgSyT1H02v3ZnQVgP%2F2I0z0yubwpW1%2BPoK5pvLdPrITl5bCEmTsznN%2B%2FzRN6IFmfYVLncvJpKkOkP5A%2FM6vEcbvsJyxhLimTUvBTt4rW613bKDpP1CRKtxIXA0knchnfS26bcHafFKRjssaVzV2ItBtYwuqzfwAY6pgGXCL%2FuEApUz1qIZCnrH%2FVQ1di2TaAg36FOdBno9L5FWpGg6VZgwn56xpXenzVp%2FVvY7zFc8C1fa4XXHMZENQe7vfqJfGqzG7gT1ZrcTe2dO1iZ5pZdUG5nknTRTbirdSn5xeaD%2Fc3DZXulsatKJsItXRx4wQulBzWuM%2FdLfoaDQdl2d1cZAnz1136%2FC%2FVa27PMXRa10e7YXFjTdmI2LaQjOKXE2dCG&X-Amz-Signature=bfc6c5dc359e421e5ee08a97890b227d2fb74e880129d2bf60b71755ad0e2083&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6XNZWL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFRRny2uMFxwQf7B47aqS4BmzUkhKeToazOWpMklleJnAiBbdYE1pfiHD05%2FgBJqfcG%2Fk1rroJiOfzcojofODw%2Bzhir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMPJLtJtuANIFHVEAAKtwDVKWkUDRt5aEtf60y283BhUxNljcqDNnwIbYGAWiCULk%2BSizLrfNcqVDcCPI5974girvdxKAf1qOali3QxFALEgr5NQ2Vw4HBBEjyzsYOZQC2dSoPYj1ShemSWIRDkdBxAFhr%2BjC64wnhpLcW%2FisRaLcWSRdGnwZsbqlP6dmqdtDCi9nso6rt%2BBJVIqJVMkKhjKoefNTm6n4IVI2HIY7zZSzCP1R0NUn3Fq3gjKYmZvKyuknEoOyvajaziy8VMHYei5V5894xBGnX59ubBeMg7u8zJrM2EYxzGCtJ6eQ9yNrpX6Fxodw%2FIFw811B0ENiwLEezGqxjHH1qy4tOaWoSzzZPdQfNxYR5pgLwqVUOX8aOJvixOBpEXTXQwvNl7p8r5VzZQJuc%2BCN4xOadFDMCLdDQlVl7HpFMMNDmk7RoSx7sAzfxGYjmErE21gbtYbuFKq9PgRh4W3MNLArrr%2BXRFzayiAvSAmv6saRWgSyT1H02v3ZnQVgP%2F2I0z0yubwpW1%2BPoK5pvLdPrITl5bCEmTsznN%2B%2FzRN6IFmfYVLncvJpKkOkP5A%2FM6vEcbvsJyxhLimTUvBTt4rW613bKDpP1CRKtxIXA0knchnfS26bcHafFKRjssaVzV2ItBtYwuqzfwAY6pgGXCL%2FuEApUz1qIZCnrH%2FVQ1di2TaAg36FOdBno9L5FWpGg6VZgwn56xpXenzVp%2FVvY7zFc8C1fa4XXHMZENQe7vfqJfGqzG7gT1ZrcTe2dO1iZ5pZdUG5nknTRTbirdSn5xeaD%2Fc3DZXulsatKJsItXRx4wQulBzWuM%2FdLfoaDQdl2d1cZAnz1136%2FC%2FVa27PMXRa10e7YXFjTdmI2LaQjOKXE2dCG&X-Amz-Signature=94498a6cc8dfb4520f4076a7606a2359767641cade44d1363695a3c9207c49b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6XNZWL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFRRny2uMFxwQf7B47aqS4BmzUkhKeToazOWpMklleJnAiBbdYE1pfiHD05%2FgBJqfcG%2Fk1rroJiOfzcojofODw%2Bzhir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMPJLtJtuANIFHVEAAKtwDVKWkUDRt5aEtf60y283BhUxNljcqDNnwIbYGAWiCULk%2BSizLrfNcqVDcCPI5974girvdxKAf1qOali3QxFALEgr5NQ2Vw4HBBEjyzsYOZQC2dSoPYj1ShemSWIRDkdBxAFhr%2BjC64wnhpLcW%2FisRaLcWSRdGnwZsbqlP6dmqdtDCi9nso6rt%2BBJVIqJVMkKhjKoefNTm6n4IVI2HIY7zZSzCP1R0NUn3Fq3gjKYmZvKyuknEoOyvajaziy8VMHYei5V5894xBGnX59ubBeMg7u8zJrM2EYxzGCtJ6eQ9yNrpX6Fxodw%2FIFw811B0ENiwLEezGqxjHH1qy4tOaWoSzzZPdQfNxYR5pgLwqVUOX8aOJvixOBpEXTXQwvNl7p8r5VzZQJuc%2BCN4xOadFDMCLdDQlVl7HpFMMNDmk7RoSx7sAzfxGYjmErE21gbtYbuFKq9PgRh4W3MNLArrr%2BXRFzayiAvSAmv6saRWgSyT1H02v3ZnQVgP%2F2I0z0yubwpW1%2BPoK5pvLdPrITl5bCEmTsznN%2B%2FzRN6IFmfYVLncvJpKkOkP5A%2FM6vEcbvsJyxhLimTUvBTt4rW613bKDpP1CRKtxIXA0knchnfS26bcHafFKRjssaVzV2ItBtYwuqzfwAY6pgGXCL%2FuEApUz1qIZCnrH%2FVQ1di2TaAg36FOdBno9L5FWpGg6VZgwn56xpXenzVp%2FVvY7zFc8C1fa4XXHMZENQe7vfqJfGqzG7gT1ZrcTe2dO1iZ5pZdUG5nknTRTbirdSn5xeaD%2Fc3DZXulsatKJsItXRx4wQulBzWuM%2FdLfoaDQdl2d1cZAnz1136%2FC%2FVa27PMXRa10e7YXFjTdmI2LaQjOKXE2dCG&X-Amz-Signature=bc6a64a9174a8bdf11334b6cc672f6f7d6530d7af8a4ef358a5c6503a6eab657&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
