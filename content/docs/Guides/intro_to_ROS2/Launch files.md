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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBPJX2Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHnySkiMDUP94pJ%2BSBcUZhQ03p4vagTKN98QWhh9d4CWAiBnEtfXbkEBUUtcYu2lyNtJm3QAcUoQiGYNJ%2F4S9v%2BVtSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM45xbvNyzwJS%2FRR5fKtwDueXMTWhoMTPZfmSa8xR2xny83OC8RN1DMhwEkeBU%2B3SzVp50Qsp2uTCmU4auzKIahhj5qvtWyipvSI%2Bf13iHRl%2FOR1Ls32G9WxDYuCfaI3Ykp4QuiwQVAYvJ8pXSaOCzsZHEEcwaFRtISM9tdeOmSNMgqqc3UnTguek7dW3KAZum1B2M03wj6yJhJsI55H8v65tn9vYpSVvShhvH82%2FaWdHeYtfj5K%2FCLSGG8kRZW6WYJKZSEudhU2PEK9NkB6xYfcKKDaxjn%2BQjE4mP1pgcbVSN6NFZn6Inu7ZR0psat2kKZaSaOWYNearVuzBBiV40PFGiVKmozlXVUtN%2BkcCjmRwXooTap5xcAeLQtPaQCpTbMiK8Dni3pLOPN%2BmJnQIWYgY0%2BeqT5SwLZOCMF8YJpnXnIs%2FHvXaLgZxZfxsyBZL0olYo%2BG%2FA%2Fnz0iBuUBOFFfZMgLCY3weQinso2o4iClyHM93AWC6xu7bj8YIowKADg92Qt0t%2BG4rCuIHETMjQyGLDRx3eskkd21bZzxPpCIw385KpfwuQca2vEGcAQKDKMA4JTG%2FfBKExEa5uJzEh7U%2Fe1VgzHw50hS6EDvaVtlP6VF%2F054BdY%2F27KQf6YAUdk2R9pkP4YNlOaYxYwk%2BPpvgY6pgEXkcNZU2gGERRbAZ1H4%2FTn9lQmTmDVLEWVeqFLrtFivgPEtNcOy8iuP2wP4tVA39fsIwq6Ntsjmpm2AJV7U2bzC1FXCpmx2Xoh9KHc7jHFkCgP6%2FAgdskmgI6Z78hHxy1fY3Teqa5YnWmIuUnclsv1AKe4qRXv%2Fhaf3Nx100pItupEFuFxPAAi67vGtYWHYr3Au1V4BiwrsU0PWklTrFkxm5L7z5Qf&X-Amz-Signature=d29574ae8717319a313ee5b8cfb1a3536f1cfb10e085851168059f0a2456e5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBPJX2Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHnySkiMDUP94pJ%2BSBcUZhQ03p4vagTKN98QWhh9d4CWAiBnEtfXbkEBUUtcYu2lyNtJm3QAcUoQiGYNJ%2F4S9v%2BVtSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM45xbvNyzwJS%2FRR5fKtwDueXMTWhoMTPZfmSa8xR2xny83OC8RN1DMhwEkeBU%2B3SzVp50Qsp2uTCmU4auzKIahhj5qvtWyipvSI%2Bf13iHRl%2FOR1Ls32G9WxDYuCfaI3Ykp4QuiwQVAYvJ8pXSaOCzsZHEEcwaFRtISM9tdeOmSNMgqqc3UnTguek7dW3KAZum1B2M03wj6yJhJsI55H8v65tn9vYpSVvShhvH82%2FaWdHeYtfj5K%2FCLSGG8kRZW6WYJKZSEudhU2PEK9NkB6xYfcKKDaxjn%2BQjE4mP1pgcbVSN6NFZn6Inu7ZR0psat2kKZaSaOWYNearVuzBBiV40PFGiVKmozlXVUtN%2BkcCjmRwXooTap5xcAeLQtPaQCpTbMiK8Dni3pLOPN%2BmJnQIWYgY0%2BeqT5SwLZOCMF8YJpnXnIs%2FHvXaLgZxZfxsyBZL0olYo%2BG%2FA%2Fnz0iBuUBOFFfZMgLCY3weQinso2o4iClyHM93AWC6xu7bj8YIowKADg92Qt0t%2BG4rCuIHETMjQyGLDRx3eskkd21bZzxPpCIw385KpfwuQca2vEGcAQKDKMA4JTG%2FfBKExEa5uJzEh7U%2Fe1VgzHw50hS6EDvaVtlP6VF%2F054BdY%2F27KQf6YAUdk2R9pkP4YNlOaYxYwk%2BPpvgY6pgEXkcNZU2gGERRbAZ1H4%2FTn9lQmTmDVLEWVeqFLrtFivgPEtNcOy8iuP2wP4tVA39fsIwq6Ntsjmpm2AJV7U2bzC1FXCpmx2Xoh9KHc7jHFkCgP6%2FAgdskmgI6Z78hHxy1fY3Teqa5YnWmIuUnclsv1AKe4qRXv%2Fhaf3Nx100pItupEFuFxPAAi67vGtYWHYr3Au1V4BiwrsU0PWklTrFkxm5L7z5Qf&X-Amz-Signature=f0088a3d40246ad22f8772adaacb13f4143cd06af48d473b962a22276b4c3a76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBPJX2Q%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHnySkiMDUP94pJ%2BSBcUZhQ03p4vagTKN98QWhh9d4CWAiBnEtfXbkEBUUtcYu2lyNtJm3QAcUoQiGYNJ%2F4S9v%2BVtSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM45xbvNyzwJS%2FRR5fKtwDueXMTWhoMTPZfmSa8xR2xny83OC8RN1DMhwEkeBU%2B3SzVp50Qsp2uTCmU4auzKIahhj5qvtWyipvSI%2Bf13iHRl%2FOR1Ls32G9WxDYuCfaI3Ykp4QuiwQVAYvJ8pXSaOCzsZHEEcwaFRtISM9tdeOmSNMgqqc3UnTguek7dW3KAZum1B2M03wj6yJhJsI55H8v65tn9vYpSVvShhvH82%2FaWdHeYtfj5K%2FCLSGG8kRZW6WYJKZSEudhU2PEK9NkB6xYfcKKDaxjn%2BQjE4mP1pgcbVSN6NFZn6Inu7ZR0psat2kKZaSaOWYNearVuzBBiV40PFGiVKmozlXVUtN%2BkcCjmRwXooTap5xcAeLQtPaQCpTbMiK8Dni3pLOPN%2BmJnQIWYgY0%2BeqT5SwLZOCMF8YJpnXnIs%2FHvXaLgZxZfxsyBZL0olYo%2BG%2FA%2Fnz0iBuUBOFFfZMgLCY3weQinso2o4iClyHM93AWC6xu7bj8YIowKADg92Qt0t%2BG4rCuIHETMjQyGLDRx3eskkd21bZzxPpCIw385KpfwuQca2vEGcAQKDKMA4JTG%2FfBKExEa5uJzEh7U%2Fe1VgzHw50hS6EDvaVtlP6VF%2F054BdY%2F27KQf6YAUdk2R9pkP4YNlOaYxYwk%2BPpvgY6pgEXkcNZU2gGERRbAZ1H4%2FTn9lQmTmDVLEWVeqFLrtFivgPEtNcOy8iuP2wP4tVA39fsIwq6Ntsjmpm2AJV7U2bzC1FXCpmx2Xoh9KHc7jHFkCgP6%2FAgdskmgI6Z78hHxy1fY3Teqa5YnWmIuUnclsv1AKe4qRXv%2Fhaf3Nx100pItupEFuFxPAAi67vGtYWHYr3Au1V4BiwrsU0PWklTrFkxm5L7z5Qf&X-Amz-Signature=70d5ad241bfd81746b646f675848fa89ce0b5f519b29bdbd8b9055463f52cd22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
