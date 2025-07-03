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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPLSSRG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDo3gObuDo%2BW3EOJx6GpJJzhfYXVLoWIsmlfau3TopLWgIhAJnQDjbC6xBzmapc5TU9GefnTw5rDD%2Fp0tCvdZcEcfzXKv8DCBoQABoMNjM3NDIzMTgzODA1IgwEcrUaQdmaNbzvgrwq3AN3iu2d%2FbDofqLFH9HBwPYmnnuYUyPoGurFf%2F1mMNlvhVtseH0mFoAywGo7E7%2FWF8rB6cCi2kDHtu0c%2BfU%2FVihblOVHGj8MIxf7N%2FMhN5a%2FySrXcT3rsRHzYXP9dMpakPylzqaWGQC3SUQhU%2Bi3TX1dnEgg4QOyuYd2UZPMv%2BN9JdRna6dwt32%2BTgs76uNgiw5PArvAsVuhEad4iccIkMenh0C2ugejfLezhguiqIjU9Wowi5iujXnBfrteDX9p08MkJyxK%2BEsfo4%2Bhh9iUfREwK9UWxNdXDX5fm5E066JU7zeZ33wUEuo3C%2BjqhsvViDy0J4yM%2BXqAInSMGJ2stgZIoi9V3FZsWiIXyLlwoE4kqqpc94CLNrtkanRpJD%2F9b00fM19MwgqDS17vzZe48ceNX02EV%2BVfP5MmMY5IyR0JFqL97PK%2FSOAFTMDyQY%2FzYMlEDM%2FgZD0fUHZPGmdY3tg96jM8Awx2m29ma4p9exCrmHc6GmQO86JDBKUA3x79YkHPRLigRz0mbcn4rXK0N6g8pM%2BqaxB9qsvv3q2h6umRFrNgvyQ9pcPplX7VpI57bTd47eZlJ8VeEnsSLFIWsqsNVWUwGuMZatTSszMkxb6q1EaLA8E7R7izujH6GzCX5prDBjqkAZaSxDKcDPMSs36JtlquDQpvPhRXTVwWb%2FERS3bnrJHj7gxKh5c5wZ%2FxK9DQFf9ftHyxBUIGBlvzroe6wQOevqwae92Mv212VebPc4WVARzEaDfu%2B3eJyePbfG0Pdlwvk9GCR%2BSd7lQ1IRbpFWMOmu6mvnvWzCQcuibTFpqwHIIEEnHsm%2BZxxJrs94N5wuj5NEIDgP0bA%2Bj4pQ1sCtrTO7Jy2wzH&X-Amz-Signature=5fa0596b4166a4b70442048dbdb61677c9662a1deca618163be68b2d24685902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPLSSRG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDo3gObuDo%2BW3EOJx6GpJJzhfYXVLoWIsmlfau3TopLWgIhAJnQDjbC6xBzmapc5TU9GefnTw5rDD%2Fp0tCvdZcEcfzXKv8DCBoQABoMNjM3NDIzMTgzODA1IgwEcrUaQdmaNbzvgrwq3AN3iu2d%2FbDofqLFH9HBwPYmnnuYUyPoGurFf%2F1mMNlvhVtseH0mFoAywGo7E7%2FWF8rB6cCi2kDHtu0c%2BfU%2FVihblOVHGj8MIxf7N%2FMhN5a%2FySrXcT3rsRHzYXP9dMpakPylzqaWGQC3SUQhU%2Bi3TX1dnEgg4QOyuYd2UZPMv%2BN9JdRna6dwt32%2BTgs76uNgiw5PArvAsVuhEad4iccIkMenh0C2ugejfLezhguiqIjU9Wowi5iujXnBfrteDX9p08MkJyxK%2BEsfo4%2Bhh9iUfREwK9UWxNdXDX5fm5E066JU7zeZ33wUEuo3C%2BjqhsvViDy0J4yM%2BXqAInSMGJ2stgZIoi9V3FZsWiIXyLlwoE4kqqpc94CLNrtkanRpJD%2F9b00fM19MwgqDS17vzZe48ceNX02EV%2BVfP5MmMY5IyR0JFqL97PK%2FSOAFTMDyQY%2FzYMlEDM%2FgZD0fUHZPGmdY3tg96jM8Awx2m29ma4p9exCrmHc6GmQO86JDBKUA3x79YkHPRLigRz0mbcn4rXK0N6g8pM%2BqaxB9qsvv3q2h6umRFrNgvyQ9pcPplX7VpI57bTd47eZlJ8VeEnsSLFIWsqsNVWUwGuMZatTSszMkxb6q1EaLA8E7R7izujH6GzCX5prDBjqkAZaSxDKcDPMSs36JtlquDQpvPhRXTVwWb%2FERS3bnrJHj7gxKh5c5wZ%2FxK9DQFf9ftHyxBUIGBlvzroe6wQOevqwae92Mv212VebPc4WVARzEaDfu%2B3eJyePbfG0Pdlwvk9GCR%2BSd7lQ1IRbpFWMOmu6mvnvWzCQcuibTFpqwHIIEEnHsm%2BZxxJrs94N5wuj5NEIDgP0bA%2Bj4pQ1sCtrTO7Jy2wzH&X-Amz-Signature=2d694ae5bbe8fa202755bc512cb3b91513fd12bf7e62b41fd7ffc38f168b6939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPLSSRG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDo3gObuDo%2BW3EOJx6GpJJzhfYXVLoWIsmlfau3TopLWgIhAJnQDjbC6xBzmapc5TU9GefnTw5rDD%2Fp0tCvdZcEcfzXKv8DCBoQABoMNjM3NDIzMTgzODA1IgwEcrUaQdmaNbzvgrwq3AN3iu2d%2FbDofqLFH9HBwPYmnnuYUyPoGurFf%2F1mMNlvhVtseH0mFoAywGo7E7%2FWF8rB6cCi2kDHtu0c%2BfU%2FVihblOVHGj8MIxf7N%2FMhN5a%2FySrXcT3rsRHzYXP9dMpakPylzqaWGQC3SUQhU%2Bi3TX1dnEgg4QOyuYd2UZPMv%2BN9JdRna6dwt32%2BTgs76uNgiw5PArvAsVuhEad4iccIkMenh0C2ugejfLezhguiqIjU9Wowi5iujXnBfrteDX9p08MkJyxK%2BEsfo4%2Bhh9iUfREwK9UWxNdXDX5fm5E066JU7zeZ33wUEuo3C%2BjqhsvViDy0J4yM%2BXqAInSMGJ2stgZIoi9V3FZsWiIXyLlwoE4kqqpc94CLNrtkanRpJD%2F9b00fM19MwgqDS17vzZe48ceNX02EV%2BVfP5MmMY5IyR0JFqL97PK%2FSOAFTMDyQY%2FzYMlEDM%2FgZD0fUHZPGmdY3tg96jM8Awx2m29ma4p9exCrmHc6GmQO86JDBKUA3x79YkHPRLigRz0mbcn4rXK0N6g8pM%2BqaxB9qsvv3q2h6umRFrNgvyQ9pcPplX7VpI57bTd47eZlJ8VeEnsSLFIWsqsNVWUwGuMZatTSszMkxb6q1EaLA8E7R7izujH6GzCX5prDBjqkAZaSxDKcDPMSs36JtlquDQpvPhRXTVwWb%2FERS3bnrJHj7gxKh5c5wZ%2FxK9DQFf9ftHyxBUIGBlvzroe6wQOevqwae92Mv212VebPc4WVARzEaDfu%2B3eJyePbfG0Pdlwvk9GCR%2BSd7lQ1IRbpFWMOmu6mvnvWzCQcuibTFpqwHIIEEnHsm%2BZxxJrs94N5wuj5NEIDgP0bA%2Bj4pQ1sCtrTO7Jy2wzH&X-Amz-Signature=3c3e497a21638b5364d068160bf02cd3d1da2bf8f10ef4b8c2a57ee4a805eb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
