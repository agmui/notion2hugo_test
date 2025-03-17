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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCETRRX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu%2B09q84wZ8stys3zgFA4jniaYmnbXM0z0Gb9O7vbt%2FAiEAp4khKk8IvNjobRs2sR76Umq0jx33PTF2%2FRX93XHfqc0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDExQdnC7VqDF2adyPircA7oHKbD53jHu2nGGmoOjmaTby0rt7hBNvSGANMa%2FRcy6Mpx7%2FtrWwhil3queH7FZVnN4xt8fCMeMkYqLP%2FzhdzCOmDWfziXlk9lR0ADz9Bulp3%2FqmTLwzQxwDcl5Exo7FE8YwLBGSSinsPXRj2Ivwh4ma4OwbW8YHPshx2RE4ZwRy%2Fza22blm1YWwUeMMiMLcdl9D%2BgAUEbIhTzPjD3WXQYGWvUf0Zu5smjbuC0Fqaqpt5zoiE%2F5Yf7SPxwnkKYldkc%2BGfdn5%2BYMitD%2F3gZqNdKxUZtel%2FWzYrXon9D2c%2BPN7KXEMZyK5Sq7ymWJ%2Bc%2BBrGgBjS6Uc2M6pwFpY%2FM67IdJ27tXKHs%2FZSsttLKi1bJK4kAHJs7M6nTcWzOYpcGpkVJSzpbzS1fxtK%2BQg24afKx2L128E4S7%2BF9SRisk0dhYlOOvR3g1eJVCusNtRZIIXohsE9uD31Ne86IWVpKaEvJFQggmFe8Edyp0HEfuQX7w%2FiIoTwdjwBDI3f9D0RtPt5Q8JeEni3ieb6BDPjQxDSh54Mfl9owvoh5VrrMjvtcn7SXl0S38E%2FXMk9I1TWnrVHesoUzld0yLbyTigPR2Xhx0KJa6e21J%2BnC%2FIxd%2FRWT86Q7yaiDo3CIX%2FH%2FKMKKb3r4GOqUBukz1pr0DoFF%2F%2Bit%2FHDf0dN%2F5wpZRb4rUN%2FHRfCD1w5XpGSIhSvPQ9jsGK3YtLXNM%2ByQOW3WV8TZnsXveDmQb6DayBtn52Wb%2BerO2ZE6D7mjIo07YKMNpAoj7mEogBwjb8Afp2v5duObtBLg%2BX1J9QsGnC5AM26LIOOsZilLUsa6HiC97%2FBNatpFjnC4htc%2FSCwuAhhhUkByaByLfg%2FALgnNRJqhH&X-Amz-Signature=8d0c753e0630520fded7aa181dc32c3afc8d2ec6ae6e87c3bef6f29160cee22f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCETRRX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu%2B09q84wZ8stys3zgFA4jniaYmnbXM0z0Gb9O7vbt%2FAiEAp4khKk8IvNjobRs2sR76Umq0jx33PTF2%2FRX93XHfqc0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDExQdnC7VqDF2adyPircA7oHKbD53jHu2nGGmoOjmaTby0rt7hBNvSGANMa%2FRcy6Mpx7%2FtrWwhil3queH7FZVnN4xt8fCMeMkYqLP%2FzhdzCOmDWfziXlk9lR0ADz9Bulp3%2FqmTLwzQxwDcl5Exo7FE8YwLBGSSinsPXRj2Ivwh4ma4OwbW8YHPshx2RE4ZwRy%2Fza22blm1YWwUeMMiMLcdl9D%2BgAUEbIhTzPjD3WXQYGWvUf0Zu5smjbuC0Fqaqpt5zoiE%2F5Yf7SPxwnkKYldkc%2BGfdn5%2BYMitD%2F3gZqNdKxUZtel%2FWzYrXon9D2c%2BPN7KXEMZyK5Sq7ymWJ%2Bc%2BBrGgBjS6Uc2M6pwFpY%2FM67IdJ27tXKHs%2FZSsttLKi1bJK4kAHJs7M6nTcWzOYpcGpkVJSzpbzS1fxtK%2BQg24afKx2L128E4S7%2BF9SRisk0dhYlOOvR3g1eJVCusNtRZIIXohsE9uD31Ne86IWVpKaEvJFQggmFe8Edyp0HEfuQX7w%2FiIoTwdjwBDI3f9D0RtPt5Q8JeEni3ieb6BDPjQxDSh54Mfl9owvoh5VrrMjvtcn7SXl0S38E%2FXMk9I1TWnrVHesoUzld0yLbyTigPR2Xhx0KJa6e21J%2BnC%2FIxd%2FRWT86Q7yaiDo3CIX%2FH%2FKMKKb3r4GOqUBukz1pr0DoFF%2F%2Bit%2FHDf0dN%2F5wpZRb4rUN%2FHRfCD1w5XpGSIhSvPQ9jsGK3YtLXNM%2ByQOW3WV8TZnsXveDmQb6DayBtn52Wb%2BerO2ZE6D7mjIo07YKMNpAoj7mEogBwjb8Afp2v5duObtBLg%2BX1J9QsGnC5AM26LIOOsZilLUsa6HiC97%2FBNatpFjnC4htc%2FSCwuAhhhUkByaByLfg%2FALgnNRJqhH&X-Amz-Signature=064e52309270b1fc9a3757b79b763107a0601fac383b4331bbc3128aa350bf76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCETRRX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu%2B09q84wZ8stys3zgFA4jniaYmnbXM0z0Gb9O7vbt%2FAiEAp4khKk8IvNjobRs2sR76Umq0jx33PTF2%2FRX93XHfqc0q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDExQdnC7VqDF2adyPircA7oHKbD53jHu2nGGmoOjmaTby0rt7hBNvSGANMa%2FRcy6Mpx7%2FtrWwhil3queH7FZVnN4xt8fCMeMkYqLP%2FzhdzCOmDWfziXlk9lR0ADz9Bulp3%2FqmTLwzQxwDcl5Exo7FE8YwLBGSSinsPXRj2Ivwh4ma4OwbW8YHPshx2RE4ZwRy%2Fza22blm1YWwUeMMiMLcdl9D%2BgAUEbIhTzPjD3WXQYGWvUf0Zu5smjbuC0Fqaqpt5zoiE%2F5Yf7SPxwnkKYldkc%2BGfdn5%2BYMitD%2F3gZqNdKxUZtel%2FWzYrXon9D2c%2BPN7KXEMZyK5Sq7ymWJ%2Bc%2BBrGgBjS6Uc2M6pwFpY%2FM67IdJ27tXKHs%2FZSsttLKi1bJK4kAHJs7M6nTcWzOYpcGpkVJSzpbzS1fxtK%2BQg24afKx2L128E4S7%2BF9SRisk0dhYlOOvR3g1eJVCusNtRZIIXohsE9uD31Ne86IWVpKaEvJFQggmFe8Edyp0HEfuQX7w%2FiIoTwdjwBDI3f9D0RtPt5Q8JeEni3ieb6BDPjQxDSh54Mfl9owvoh5VrrMjvtcn7SXl0S38E%2FXMk9I1TWnrVHesoUzld0yLbyTigPR2Xhx0KJa6e21J%2BnC%2FIxd%2FRWT86Q7yaiDo3CIX%2FH%2FKMKKb3r4GOqUBukz1pr0DoFF%2F%2Bit%2FHDf0dN%2F5wpZRb4rUN%2FHRfCD1w5XpGSIhSvPQ9jsGK3YtLXNM%2ByQOW3WV8TZnsXveDmQb6DayBtn52Wb%2BerO2ZE6D7mjIo07YKMNpAoj7mEogBwjb8Afp2v5duObtBLg%2BX1J9QsGnC5AM26LIOOsZilLUsa6HiC97%2FBNatpFjnC4htc%2FSCwuAhhhUkByaByLfg%2FALgnNRJqhH&X-Amz-Signature=3f7c7e655224ee5a9f9982e16baa5ab6defe4e51602215fbd71d321f63fbb2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
