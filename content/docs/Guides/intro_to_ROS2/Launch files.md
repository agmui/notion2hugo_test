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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJI7IZW5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXb2woc3uxtZLDNH6k16L1VwQ9TsV%2Fo%2FA19e1i1ln29AiEAsgOaJPMkl6K9EkA1%2BvkWF%2F0bKWIazYbH2BnVo%2Bz48hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDMUbXlLVzIHFrZNkircA%2Blodcpy%2BUPPsBcbzs0HtDWJVO4ygkAcOUSIQmYfvR1W9yesWIT5uuHfwplaTysJfEk5kr1jw5JEF1%2Bu%2BtVSDguD6gq1l7ZyRc5wbF5GU%2Fezd95UEKdU83uozjD5Iz4VQjwTpMS1edm1jXq1XGX0OYnAMgiR835noj899WidzlutmLTbSVRrFVbd6CvijE4OCIOTxqIxnsHVlBJy0h4merWbot39XP8jkHT%2FM1wJ2792M9jZuGLQSxM64K22vuBjQvA9kAbY6T8y1TZcfRPq7bbG8MQ9j9KsV2rXNyr%2BDBj7yZM9fvVj01OOQefStrujDf2vAt2lwcqrZx6G96AX2D6TiKNmN10XzVNLW9XpDAzX7nl6uYxYuk1sjgJJoYVWmnFJapx7ivVUJtRV1wH0sis7D6SWfMFUtc%2FlpK1Cs4fJRgWRAUe9UE0rJMQxe5MuUQwyazKFB7q1Vhv3h994hCvMj%2B81nMM5MVuLjigWl%2FIHeZQn6xFI7EchIgVFi00ExB4ooq4X2le4bn5sFIe4quKa8z5FHH2TtgDpIwrTDtaayXTUq7zP0XtlmevgWwQn7hcmDUSYhM%2FxwDy3GvMbcjbs3hgYwcNh%2FVcWMxK7OMT3EVdOIp3GbIwkHK9cMM6%2FtcAGOqUBmKpSClWqr77svnf1ehBat%2F8EaGOJqDWrTbeKnZwlSHqD3ryo2nCuwWdQDz4LKpXdHdU7WG2C7PofihpA6MyM4X0g182m7sQ4bh6BLy9QbKMWz8OnCUVNgM2CW%2BSPd4aQXAGo%2FAasqABnMFL6O5Mg9d9riYTAfp0szez0nmgCGiNB3cbicZufMVE%2F1zlsc27l9yGkCTs1kt8GjB%2FAb5P2Ldel8DeQ&X-Amz-Signature=74991601fbc13f36b85b73d8593023c785d2cb9383934c7fb1693bdbecb7ef64&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJI7IZW5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXb2woc3uxtZLDNH6k16L1VwQ9TsV%2Fo%2FA19e1i1ln29AiEAsgOaJPMkl6K9EkA1%2BvkWF%2F0bKWIazYbH2BnVo%2Bz48hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDMUbXlLVzIHFrZNkircA%2Blodcpy%2BUPPsBcbzs0HtDWJVO4ygkAcOUSIQmYfvR1W9yesWIT5uuHfwplaTysJfEk5kr1jw5JEF1%2Bu%2BtVSDguD6gq1l7ZyRc5wbF5GU%2Fezd95UEKdU83uozjD5Iz4VQjwTpMS1edm1jXq1XGX0OYnAMgiR835noj899WidzlutmLTbSVRrFVbd6CvijE4OCIOTxqIxnsHVlBJy0h4merWbot39XP8jkHT%2FM1wJ2792M9jZuGLQSxM64K22vuBjQvA9kAbY6T8y1TZcfRPq7bbG8MQ9j9KsV2rXNyr%2BDBj7yZM9fvVj01OOQefStrujDf2vAt2lwcqrZx6G96AX2D6TiKNmN10XzVNLW9XpDAzX7nl6uYxYuk1sjgJJoYVWmnFJapx7ivVUJtRV1wH0sis7D6SWfMFUtc%2FlpK1Cs4fJRgWRAUe9UE0rJMQxe5MuUQwyazKFB7q1Vhv3h994hCvMj%2B81nMM5MVuLjigWl%2FIHeZQn6xFI7EchIgVFi00ExB4ooq4X2le4bn5sFIe4quKa8z5FHH2TtgDpIwrTDtaayXTUq7zP0XtlmevgWwQn7hcmDUSYhM%2FxwDy3GvMbcjbs3hgYwcNh%2FVcWMxK7OMT3EVdOIp3GbIwkHK9cMM6%2FtcAGOqUBmKpSClWqr77svnf1ehBat%2F8EaGOJqDWrTbeKnZwlSHqD3ryo2nCuwWdQDz4LKpXdHdU7WG2C7PofihpA6MyM4X0g182m7sQ4bh6BLy9QbKMWz8OnCUVNgM2CW%2BSPd4aQXAGo%2FAasqABnMFL6O5Mg9d9riYTAfp0szez0nmgCGiNB3cbicZufMVE%2F1zlsc27l9yGkCTs1kt8GjB%2FAb5P2Ldel8DeQ&X-Amz-Signature=815b9eb3f4c52f84d31f76ea27eb829e0e9498645e24de7eb7ad6f94f1dd060e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJI7IZW5%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXb2woc3uxtZLDNH6k16L1VwQ9TsV%2Fo%2FA19e1i1ln29AiEAsgOaJPMkl6K9EkA1%2BvkWF%2F0bKWIazYbH2BnVo%2Bz48hEq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDDMUbXlLVzIHFrZNkircA%2Blodcpy%2BUPPsBcbzs0HtDWJVO4ygkAcOUSIQmYfvR1W9yesWIT5uuHfwplaTysJfEk5kr1jw5JEF1%2Bu%2BtVSDguD6gq1l7ZyRc5wbF5GU%2Fezd95UEKdU83uozjD5Iz4VQjwTpMS1edm1jXq1XGX0OYnAMgiR835noj899WidzlutmLTbSVRrFVbd6CvijE4OCIOTxqIxnsHVlBJy0h4merWbot39XP8jkHT%2FM1wJ2792M9jZuGLQSxM64K22vuBjQvA9kAbY6T8y1TZcfRPq7bbG8MQ9j9KsV2rXNyr%2BDBj7yZM9fvVj01OOQefStrujDf2vAt2lwcqrZx6G96AX2D6TiKNmN10XzVNLW9XpDAzX7nl6uYxYuk1sjgJJoYVWmnFJapx7ivVUJtRV1wH0sis7D6SWfMFUtc%2FlpK1Cs4fJRgWRAUe9UE0rJMQxe5MuUQwyazKFB7q1Vhv3h994hCvMj%2B81nMM5MVuLjigWl%2FIHeZQn6xFI7EchIgVFi00ExB4ooq4X2le4bn5sFIe4quKa8z5FHH2TtgDpIwrTDtaayXTUq7zP0XtlmevgWwQn7hcmDUSYhM%2FxwDy3GvMbcjbs3hgYwcNh%2FVcWMxK7OMT3EVdOIp3GbIwkHK9cMM6%2FtcAGOqUBmKpSClWqr77svnf1ehBat%2F8EaGOJqDWrTbeKnZwlSHqD3ryo2nCuwWdQDz4LKpXdHdU7WG2C7PofihpA6MyM4X0g182m7sQ4bh6BLy9QbKMWz8OnCUVNgM2CW%2BSPd4aQXAGo%2FAasqABnMFL6O5Mg9d9riYTAfp0szez0nmgCGiNB3cbicZufMVE%2F1zlsc27l9yGkCTs1kt8GjB%2FAb5P2Ldel8DeQ&X-Amz-Signature=ef04e35d7e8fcbd4dd34e9590b59266f23218cf1699666212370baf034d1b105&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
