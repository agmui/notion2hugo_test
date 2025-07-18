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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWVX7L4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEnWgFJTO2dvX6S91kkV3atRpygPwSO%2BNt5Sf1Hp9Yc7AiAZvdHpcmCFWV0UrRD2kB4vzTvT9DMZefTdL3NAqkBwqiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOJ%2FazVk1De%2B9h%2FEKtwDfESYppA9uboopQPUJHImrylw7nS0esjLUwAMB0lW35Iwi4b1rUK3beei3g7ncZwuLXRMAEKbLlNZcIS6zB%2FnGz6nBFZ8Irz2suWUBoV89JwZ1QBOcMcoJoEwfm1Ec4%2F23Bjz6CVJT2YVVjUeVzGQrF44EMas%2FFFPamUCymvDGqO9WOBk%2FbGA21Xo8PJo5QHu%2BK5K3TQIhuuW%2BMGlQ1LT3%2B3jgadOfgx8zS6oNM6ioCYcJJ4AK4bL6EACdGKfn5s3OHebwqYlVRtyOcRcXezpi%2B%2BzrnA7QT64fMLO6aHsw1JwW%2F%2BFso5PNqnnAaGpxj9v0A1T6heF0ivMYOolZjPyFSA5NIyNyUE2Aaw5NFLn%2F5Usz%2FbnCxjzMq1yAttqfI4RkjbggVdERv4icIYYbm9bYEqL9W7ETR15NxIabGmlNGMJlH6G5KDiH00MOLvM%2Fqluopv%2FND0SqiSZ8Exot7WjJeotNwfx47bECatTHYlDeyBy7ezDVBHc4aULD8cLrEJisBmgo%2Fvl0DKHlsEEOObZjSad4UZLlWQAaUMzI1qXPCvZns1lgpPJAh28TelUW27NWaFiAVkju7tnqZxds0CFF8CGRB3%2Frw2jKgh4Jbd3W5K3fEWpbU8JtGIdepMwkfvlwwY6pgHY0oNKR8hP2mgm3odwZUrde4oYbEFY9uKV8AzR8JVqV5PUi7cEZoD2C%2F48MzEgzgktem2%2Bu73y%2BJ0HYKMXOSizBaZz7Fwr3hPMbroj7p3lBHSZ0OzU02VfZdcVioqAzdF8b%2FkD5ot3drDrwjq1AMoPGB5cBJRIvEzq7xyLZmp07cI0IAbZ%2FaManDm4%2Feg%2BCxQQ34njGTuoRGwZ6UOxunR2TNXj%2BWV2&X-Amz-Signature=087c90ef0b7883d2d4cac0e079440970779022a14b94a942b179d36b3ba22351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWVX7L4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEnWgFJTO2dvX6S91kkV3atRpygPwSO%2BNt5Sf1Hp9Yc7AiAZvdHpcmCFWV0UrRD2kB4vzTvT9DMZefTdL3NAqkBwqiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOJ%2FazVk1De%2B9h%2FEKtwDfESYppA9uboopQPUJHImrylw7nS0esjLUwAMB0lW35Iwi4b1rUK3beei3g7ncZwuLXRMAEKbLlNZcIS6zB%2FnGz6nBFZ8Irz2suWUBoV89JwZ1QBOcMcoJoEwfm1Ec4%2F23Bjz6CVJT2YVVjUeVzGQrF44EMas%2FFFPamUCymvDGqO9WOBk%2FbGA21Xo8PJo5QHu%2BK5K3TQIhuuW%2BMGlQ1LT3%2B3jgadOfgx8zS6oNM6ioCYcJJ4AK4bL6EACdGKfn5s3OHebwqYlVRtyOcRcXezpi%2B%2BzrnA7QT64fMLO6aHsw1JwW%2F%2BFso5PNqnnAaGpxj9v0A1T6heF0ivMYOolZjPyFSA5NIyNyUE2Aaw5NFLn%2F5Usz%2FbnCxjzMq1yAttqfI4RkjbggVdERv4icIYYbm9bYEqL9W7ETR15NxIabGmlNGMJlH6G5KDiH00MOLvM%2Fqluopv%2FND0SqiSZ8Exot7WjJeotNwfx47bECatTHYlDeyBy7ezDVBHc4aULD8cLrEJisBmgo%2Fvl0DKHlsEEOObZjSad4UZLlWQAaUMzI1qXPCvZns1lgpPJAh28TelUW27NWaFiAVkju7tnqZxds0CFF8CGRB3%2Frw2jKgh4Jbd3W5K3fEWpbU8JtGIdepMwkfvlwwY6pgHY0oNKR8hP2mgm3odwZUrde4oYbEFY9uKV8AzR8JVqV5PUi7cEZoD2C%2F48MzEgzgktem2%2Bu73y%2BJ0HYKMXOSizBaZz7Fwr3hPMbroj7p3lBHSZ0OzU02VfZdcVioqAzdF8b%2FkD5ot3drDrwjq1AMoPGB5cBJRIvEzq7xyLZmp07cI0IAbZ%2FaManDm4%2Feg%2BCxQQ34njGTuoRGwZ6UOxunR2TNXj%2BWV2&X-Amz-Signature=341bebfc7a4dd6029f0595317257268bab77ed35197b4df92abfd203d517648f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWVX7L4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEnWgFJTO2dvX6S91kkV3atRpygPwSO%2BNt5Sf1Hp9Yc7AiAZvdHpcmCFWV0UrRD2kB4vzTvT9DMZefTdL3NAqkBwqiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXOJ%2FazVk1De%2B9h%2FEKtwDfESYppA9uboopQPUJHImrylw7nS0esjLUwAMB0lW35Iwi4b1rUK3beei3g7ncZwuLXRMAEKbLlNZcIS6zB%2FnGz6nBFZ8Irz2suWUBoV89JwZ1QBOcMcoJoEwfm1Ec4%2F23Bjz6CVJT2YVVjUeVzGQrF44EMas%2FFFPamUCymvDGqO9WOBk%2FbGA21Xo8PJo5QHu%2BK5K3TQIhuuW%2BMGlQ1LT3%2B3jgadOfgx8zS6oNM6ioCYcJJ4AK4bL6EACdGKfn5s3OHebwqYlVRtyOcRcXezpi%2B%2BzrnA7QT64fMLO6aHsw1JwW%2F%2BFso5PNqnnAaGpxj9v0A1T6heF0ivMYOolZjPyFSA5NIyNyUE2Aaw5NFLn%2F5Usz%2FbnCxjzMq1yAttqfI4RkjbggVdERv4icIYYbm9bYEqL9W7ETR15NxIabGmlNGMJlH6G5KDiH00MOLvM%2Fqluopv%2FND0SqiSZ8Exot7WjJeotNwfx47bECatTHYlDeyBy7ezDVBHc4aULD8cLrEJisBmgo%2Fvl0DKHlsEEOObZjSad4UZLlWQAaUMzI1qXPCvZns1lgpPJAh28TelUW27NWaFiAVkju7tnqZxds0CFF8CGRB3%2Frw2jKgh4Jbd3W5K3fEWpbU8JtGIdepMwkfvlwwY6pgHY0oNKR8hP2mgm3odwZUrde4oYbEFY9uKV8AzR8JVqV5PUi7cEZoD2C%2F48MzEgzgktem2%2Bu73y%2BJ0HYKMXOSizBaZz7Fwr3hPMbroj7p3lBHSZ0OzU02VfZdcVioqAzdF8b%2FkD5ot3drDrwjq1AMoPGB5cBJRIvEzq7xyLZmp07cI0IAbZ%2FaManDm4%2Feg%2BCxQQ34njGTuoRGwZ6UOxunR2TNXj%2BWV2&X-Amz-Signature=db110f639a9a06b03085dab970dbc561d8e94621a631a8f89b581a1eb810430d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
