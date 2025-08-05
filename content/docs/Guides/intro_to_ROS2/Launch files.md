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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZFYV7R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFX9E3jtNH9cmDdOpenNAjETtc495MSbWt0ZpMdeM2eeAiB9DJP%2Ff5DCvTpCmV1GWFug367gBnu267nyNypgjj975Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMhdeMlsKD5h50lCHuKtwDBoo%2FL%2FqPXK3hCaTDzENusbVa19vFn8vqTE2vMcFHxeiPbPN3Qqtp05gYORMQBaVfXEiDPy5zhk3pxwOjvVHExI3a1ospdjMfj0OusHZWjh7x%2F6WAfuM860cU1iwJ9Xu6Q8v5kr9IRZ986P9cwNqAyt4M6RSzUpOIFQNRnn0ceu7re5lz%2B%2F%2FFS8g9O87b3vVjmvLHCDV%2FbmX0yRhaZtKOP3IMLsLELRuZMi3hHFyVBMa6vRFh8cLYTZuixWqvWJ4UN3hKUA4UwqYyIM7sM%2FXodpNJE6k8XMUjgJ0uNtIP83HR15WMeD6gd1iQl4mqopAvZwF1Y9TNXipyPbuC9qTymCc2Y0iJn0IJGVoRgKpMikQPjjDFeKALpDQ4esDhjCAoBZK65WPwGSI6B0HVuLyYLBaYMCFYFnP0AvbTQhyAvl6Eqoqisw5W8HkSPOC3J6j%2F9mNqkVUYY5E%2FH6x%2B0gZGTqXappGLMSyZOQl4ZR1AoT6RrDl1YUalzpYEc8poMklVj9FBq8wHLSukT6Up2RJjfxFUzPiztxFP9COeFwbw4aPbgQr3E50cbDkNKw8s5OFCfU9ZMa0fvqvrkeLe6zsnsk3dT5q8eswaNDXnszA%2FKt1aVcg9woLkla0klZUw3tnGxAY6pgHfhQTUlXVlgPj47i3bsC%2BVMbMugdhDlrin2%2BZj8D01N9s5JVTF4ruETmhix2kyNFowzY002D6YJxPqFBp5HE1F%2FF8jlO0YqD%2BP9pp6PCWSYpAMYeS5wj7DYUJWEYsICSPudJu08O4QNvJQxK70ooJG9iPlIqb8FyNrCQfzCBaFDqkSNrtXPAfKzPrYmwGWsA9KuGzheBkaMMUZ%2Fv6GQ4fw2734c3Z1&X-Amz-Signature=8e065b4125c00a8f7027f14c35e98541e9ff4130ce6759159e61a6f3369612fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZFYV7R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFX9E3jtNH9cmDdOpenNAjETtc495MSbWt0ZpMdeM2eeAiB9DJP%2Ff5DCvTpCmV1GWFug367gBnu267nyNypgjj975Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMhdeMlsKD5h50lCHuKtwDBoo%2FL%2FqPXK3hCaTDzENusbVa19vFn8vqTE2vMcFHxeiPbPN3Qqtp05gYORMQBaVfXEiDPy5zhk3pxwOjvVHExI3a1ospdjMfj0OusHZWjh7x%2F6WAfuM860cU1iwJ9Xu6Q8v5kr9IRZ986P9cwNqAyt4M6RSzUpOIFQNRnn0ceu7re5lz%2B%2F%2FFS8g9O87b3vVjmvLHCDV%2FbmX0yRhaZtKOP3IMLsLELRuZMi3hHFyVBMa6vRFh8cLYTZuixWqvWJ4UN3hKUA4UwqYyIM7sM%2FXodpNJE6k8XMUjgJ0uNtIP83HR15WMeD6gd1iQl4mqopAvZwF1Y9TNXipyPbuC9qTymCc2Y0iJn0IJGVoRgKpMikQPjjDFeKALpDQ4esDhjCAoBZK65WPwGSI6B0HVuLyYLBaYMCFYFnP0AvbTQhyAvl6Eqoqisw5W8HkSPOC3J6j%2F9mNqkVUYY5E%2FH6x%2B0gZGTqXappGLMSyZOQl4ZR1AoT6RrDl1YUalzpYEc8poMklVj9FBq8wHLSukT6Up2RJjfxFUzPiztxFP9COeFwbw4aPbgQr3E50cbDkNKw8s5OFCfU9ZMa0fvqvrkeLe6zsnsk3dT5q8eswaNDXnszA%2FKt1aVcg9woLkla0klZUw3tnGxAY6pgHfhQTUlXVlgPj47i3bsC%2BVMbMugdhDlrin2%2BZj8D01N9s5JVTF4ruETmhix2kyNFowzY002D6YJxPqFBp5HE1F%2FF8jlO0YqD%2BP9pp6PCWSYpAMYeS5wj7DYUJWEYsICSPudJu08O4QNvJQxK70ooJG9iPlIqb8FyNrCQfzCBaFDqkSNrtXPAfKzPrYmwGWsA9KuGzheBkaMMUZ%2Fv6GQ4fw2734c3Z1&X-Amz-Signature=f07c1331f13ce41716e6faf50ff6b1acecef966260fa841295cdc812f39911ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZFYV7R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFX9E3jtNH9cmDdOpenNAjETtc495MSbWt0ZpMdeM2eeAiB9DJP%2Ff5DCvTpCmV1GWFug367gBnu267nyNypgjj975Sr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMhdeMlsKD5h50lCHuKtwDBoo%2FL%2FqPXK3hCaTDzENusbVa19vFn8vqTE2vMcFHxeiPbPN3Qqtp05gYORMQBaVfXEiDPy5zhk3pxwOjvVHExI3a1ospdjMfj0OusHZWjh7x%2F6WAfuM860cU1iwJ9Xu6Q8v5kr9IRZ986P9cwNqAyt4M6RSzUpOIFQNRnn0ceu7re5lz%2B%2F%2FFS8g9O87b3vVjmvLHCDV%2FbmX0yRhaZtKOP3IMLsLELRuZMi3hHFyVBMa6vRFh8cLYTZuixWqvWJ4UN3hKUA4UwqYyIM7sM%2FXodpNJE6k8XMUjgJ0uNtIP83HR15WMeD6gd1iQl4mqopAvZwF1Y9TNXipyPbuC9qTymCc2Y0iJn0IJGVoRgKpMikQPjjDFeKALpDQ4esDhjCAoBZK65WPwGSI6B0HVuLyYLBaYMCFYFnP0AvbTQhyAvl6Eqoqisw5W8HkSPOC3J6j%2F9mNqkVUYY5E%2FH6x%2B0gZGTqXappGLMSyZOQl4ZR1AoT6RrDl1YUalzpYEc8poMklVj9FBq8wHLSukT6Up2RJjfxFUzPiztxFP9COeFwbw4aPbgQr3E50cbDkNKw8s5OFCfU9ZMa0fvqvrkeLe6zsnsk3dT5q8eswaNDXnszA%2FKt1aVcg9woLkla0klZUw3tnGxAY6pgHfhQTUlXVlgPj47i3bsC%2BVMbMugdhDlrin2%2BZj8D01N9s5JVTF4ruETmhix2kyNFowzY002D6YJxPqFBp5HE1F%2FF8jlO0YqD%2BP9pp6PCWSYpAMYeS5wj7DYUJWEYsICSPudJu08O4QNvJQxK70ooJG9iPlIqb8FyNrCQfzCBaFDqkSNrtXPAfKzPrYmwGWsA9KuGzheBkaMMUZ%2Fv6GQ4fw2734c3Z1&X-Amz-Signature=4993c00e6758c20a726958f78b0e2022bdf939b6345f006a85213912ef130fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
