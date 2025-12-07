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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYF5GJI6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5w7qqNk4U65AxbK%2BVRUYsafE4Lj87R%2Fj3soU3g1pIKAiATKv%2Bf66vB9whCJEHsdPGnM8N1kdb%2Fdv60d6kNCtCBNCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2L%2FaWDHlTRLNKKcKtwDk8kz2fDd2ui1lUJrBUYlqo1nGKtdb9alksGsLLBJTcVL6WPASZDMroYD6FNWY%2FHfUlXCASO4NJo%2BzPhYFgYa%2B93QxmVoiUyy4keteFtqGcuMVOajzEAjhSHW96cFwlq9OsrUcyiRSCNo2zMdT0T74fG0BZOXtBrh%2BUiIV3udLlGKQHrQJH7cgvxJpOePbYBOVYSavsyLg3Zu2PZnks9aYRaqP%2FVQ0l1qXdjFNWxGZRkpsO0%2Fi6Ts3%2BR47qQSdSGFfRenjw8ALLSzYLPNGDE64kU6fulrgCRefZTzminGShSIfYHjC%2B81hiqI9MAhrUrd%2BNtNH6e4CqZ8GgaHOhVodYMUE7pde38UuAsBsFhQY2T4GLXBfEkjSmUFfEAsVosE77TJQQU%2F0n5iJUQNPr7%2FENj%2BpreacRaSKNt5w6f1SuvMUgarwPlXfgI7cSepjE9aI6tSuzsOVjqBd91NRyWXmtgCqoeua%2B7Ly8PPFQ1l564jDOXAlpGjKA%2Bhrpt61uubCjy2TupxrT0JjetQBl%2B2vjLiAs%2FN9EYC3i0OAkfj5ZPjJya6BQEHJGj9JUwPhJs7Y3lttu1DQG1k2jAzo7EmqEGdsDRSVK73A7A9duXpaGt%2BgKkSk9PlC7rNiX4wsP7SyQY6pgGLUnntk34AbTPVGFXOobJBaNEDD2%2FeV8LI1MG2xYk5fBRcE%2BiKQYltndtwS6jUP3d04XPdsTi7D95mAm5%2B9sel%2BxpgclHpu5wFE9Qi4bYf8MjHY4FDVwHc4qQTZ7NSzuVn4uYQV6MwFQaL1QTvnw2c6mfO32%2BMKXgRy7vPkS8YbLlsJHDoOKkr497O4%2BDECE9UgltovItTh9QeIG3UBlIIKrGzvGHX&X-Amz-Signature=fd824a1eb528140d65058da1f19780e9f89a16df2aee41b27926fcc361dd69e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYF5GJI6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5w7qqNk4U65AxbK%2BVRUYsafE4Lj87R%2Fj3soU3g1pIKAiATKv%2Bf66vB9whCJEHsdPGnM8N1kdb%2Fdv60d6kNCtCBNCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2L%2FaWDHlTRLNKKcKtwDk8kz2fDd2ui1lUJrBUYlqo1nGKtdb9alksGsLLBJTcVL6WPASZDMroYD6FNWY%2FHfUlXCASO4NJo%2BzPhYFgYa%2B93QxmVoiUyy4keteFtqGcuMVOajzEAjhSHW96cFwlq9OsrUcyiRSCNo2zMdT0T74fG0BZOXtBrh%2BUiIV3udLlGKQHrQJH7cgvxJpOePbYBOVYSavsyLg3Zu2PZnks9aYRaqP%2FVQ0l1qXdjFNWxGZRkpsO0%2Fi6Ts3%2BR47qQSdSGFfRenjw8ALLSzYLPNGDE64kU6fulrgCRefZTzminGShSIfYHjC%2B81hiqI9MAhrUrd%2BNtNH6e4CqZ8GgaHOhVodYMUE7pde38UuAsBsFhQY2T4GLXBfEkjSmUFfEAsVosE77TJQQU%2F0n5iJUQNPr7%2FENj%2BpreacRaSKNt5w6f1SuvMUgarwPlXfgI7cSepjE9aI6tSuzsOVjqBd91NRyWXmtgCqoeua%2B7Ly8PPFQ1l564jDOXAlpGjKA%2Bhrpt61uubCjy2TupxrT0JjetQBl%2B2vjLiAs%2FN9EYC3i0OAkfj5ZPjJya6BQEHJGj9JUwPhJs7Y3lttu1DQG1k2jAzo7EmqEGdsDRSVK73A7A9duXpaGt%2BgKkSk9PlC7rNiX4wsP7SyQY6pgGLUnntk34AbTPVGFXOobJBaNEDD2%2FeV8LI1MG2xYk5fBRcE%2BiKQYltndtwS6jUP3d04XPdsTi7D95mAm5%2B9sel%2BxpgclHpu5wFE9Qi4bYf8MjHY4FDVwHc4qQTZ7NSzuVn4uYQV6MwFQaL1QTvnw2c6mfO32%2BMKXgRy7vPkS8YbLlsJHDoOKkr497O4%2BDECE9UgltovItTh9QeIG3UBlIIKrGzvGHX&X-Amz-Signature=3670d95457eec24059ce740decdb3af45a36afbe1263698f3089becf69888a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYF5GJI6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5w7qqNk4U65AxbK%2BVRUYsafE4Lj87R%2Fj3soU3g1pIKAiATKv%2Bf66vB9whCJEHsdPGnM8N1kdb%2Fdv60d6kNCtCBNCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2L%2FaWDHlTRLNKKcKtwDk8kz2fDd2ui1lUJrBUYlqo1nGKtdb9alksGsLLBJTcVL6WPASZDMroYD6FNWY%2FHfUlXCASO4NJo%2BzPhYFgYa%2B93QxmVoiUyy4keteFtqGcuMVOajzEAjhSHW96cFwlq9OsrUcyiRSCNo2zMdT0T74fG0BZOXtBrh%2BUiIV3udLlGKQHrQJH7cgvxJpOePbYBOVYSavsyLg3Zu2PZnks9aYRaqP%2FVQ0l1qXdjFNWxGZRkpsO0%2Fi6Ts3%2BR47qQSdSGFfRenjw8ALLSzYLPNGDE64kU6fulrgCRefZTzminGShSIfYHjC%2B81hiqI9MAhrUrd%2BNtNH6e4CqZ8GgaHOhVodYMUE7pde38UuAsBsFhQY2T4GLXBfEkjSmUFfEAsVosE77TJQQU%2F0n5iJUQNPr7%2FENj%2BpreacRaSKNt5w6f1SuvMUgarwPlXfgI7cSepjE9aI6tSuzsOVjqBd91NRyWXmtgCqoeua%2B7Ly8PPFQ1l564jDOXAlpGjKA%2Bhrpt61uubCjy2TupxrT0JjetQBl%2B2vjLiAs%2FN9EYC3i0OAkfj5ZPjJya6BQEHJGj9JUwPhJs7Y3lttu1DQG1k2jAzo7EmqEGdsDRSVK73A7A9duXpaGt%2BgKkSk9PlC7rNiX4wsP7SyQY6pgGLUnntk34AbTPVGFXOobJBaNEDD2%2FeV8LI1MG2xYk5fBRcE%2BiKQYltndtwS6jUP3d04XPdsTi7D95mAm5%2B9sel%2BxpgclHpu5wFE9Qi4bYf8MjHY4FDVwHc4qQTZ7NSzuVn4uYQV6MwFQaL1QTvnw2c6mfO32%2BMKXgRy7vPkS8YbLlsJHDoOKkr497O4%2BDECE9UgltovItTh9QeIG3UBlIIKrGzvGHX&X-Amz-Signature=1051fe8f477b71551304cc50ee9ab3029d80760c24fd9a77d163e95533541b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
