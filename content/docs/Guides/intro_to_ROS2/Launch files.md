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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FUDKHJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC3d5mpKjJOY4Glqd7L5z71pOQA6kLyZOFXCxlhUkq31wIhAIhMqALtbN8drEvqcY6zfGhd6Alm6Rlck8cbMUZWo8jlKv8DCEgQABoMNjM3NDIzMTgzODA1Igw2CvHY3EyfKSNSk58q3APHLnSQvLCOCR6TnYiGh%2FdKq3XU3zBZu9TqvH69vLt3u6nsmeSn7AI%2Bo0fr%2Fa%2B37hGrcsV3nFKnJyYpRj1hClN9%2Bb1WY4b5gjX3Gb0ViFibY0CHzeFH0R09tn0MYqlnOZEuoX262ty%2F%2F81ulW24mVcBB4cA7ZnnEoCrJHng5jjbRTcokumgGFidrhzqjI0uLFJscR0Wya8IMflN%2FqRTrDeqSwCDt%2FXmKTo4CRiChDe%2F%2B2PMuvwilGBBqjKcLzNadkwy2GsvoRojjPZvmL8sywUgEku4v36XLfx280kP95ZBwzdCE%2Bx7%2F13vQLkdq%2BWcsmM%2Fndml1ie5GBaEyVmjKu6dgnZcF4iCaV07Qk7tk3LjhdKDPAwxdIeq8f41VlcqJZXc2WdamTWyK8l73Xg7B4sSD6kjdXnFmjvcarrUv10Ud0%2BoXLHqLRn%2FmN44mK5ajigZPR8iRQ%2F8JgyDVwGfUYtmN8ihln%2FdvhSseMDxSaHkhkfe1Zc1fKOJvRYaFrCojZPjZcT3O61iC%2F%2FtlEM5FaYXiIT4d2a8RFIP4GJnHqYqHqI%2BsJvJW9WuexvOp5ZnFBR0qiwmbeI%2F6KX73Nz14sMvDqzUnuop0dSDEAJBZnyfxCkkFfHhhVGnTfrxVjC2n6y%2BBjqkAQ9Huf2SUuGKHsnVrNBYfDVjsr279XN4kGn%2B49G0%2F7%2BHJrqu8s2g0xQun0QaNpd10OudwDN96HobXduGb%2Fb5jnVA6d7e03ji%2FWkpVz94QvcX0mIu8YL5nfIhYdgtGCKf3Uay8TxIkvM8eT5c2yOlmknsXo6JBQnwTcQnMoQ%2FjnXRPccTmpudFZn90W9F2JNTQam962gGvQpQ5bK17UIwkmzlVwZv&X-Amz-Signature=f37b402df5d2ed5de7d0683c9b308bc20980f6d82cc5017160b85f09373f96a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FUDKHJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC3d5mpKjJOY4Glqd7L5z71pOQA6kLyZOFXCxlhUkq31wIhAIhMqALtbN8drEvqcY6zfGhd6Alm6Rlck8cbMUZWo8jlKv8DCEgQABoMNjM3NDIzMTgzODA1Igw2CvHY3EyfKSNSk58q3APHLnSQvLCOCR6TnYiGh%2FdKq3XU3zBZu9TqvH69vLt3u6nsmeSn7AI%2Bo0fr%2Fa%2B37hGrcsV3nFKnJyYpRj1hClN9%2Bb1WY4b5gjX3Gb0ViFibY0CHzeFH0R09tn0MYqlnOZEuoX262ty%2F%2F81ulW24mVcBB4cA7ZnnEoCrJHng5jjbRTcokumgGFidrhzqjI0uLFJscR0Wya8IMflN%2FqRTrDeqSwCDt%2FXmKTo4CRiChDe%2F%2B2PMuvwilGBBqjKcLzNadkwy2GsvoRojjPZvmL8sywUgEku4v36XLfx280kP95ZBwzdCE%2Bx7%2F13vQLkdq%2BWcsmM%2Fndml1ie5GBaEyVmjKu6dgnZcF4iCaV07Qk7tk3LjhdKDPAwxdIeq8f41VlcqJZXc2WdamTWyK8l73Xg7B4sSD6kjdXnFmjvcarrUv10Ud0%2BoXLHqLRn%2FmN44mK5ajigZPR8iRQ%2F8JgyDVwGfUYtmN8ihln%2FdvhSseMDxSaHkhkfe1Zc1fKOJvRYaFrCojZPjZcT3O61iC%2F%2FtlEM5FaYXiIT4d2a8RFIP4GJnHqYqHqI%2BsJvJW9WuexvOp5ZnFBR0qiwmbeI%2F6KX73Nz14sMvDqzUnuop0dSDEAJBZnyfxCkkFfHhhVGnTfrxVjC2n6y%2BBjqkAQ9Huf2SUuGKHsnVrNBYfDVjsr279XN4kGn%2B49G0%2F7%2BHJrqu8s2g0xQun0QaNpd10OudwDN96HobXduGb%2Fb5jnVA6d7e03ji%2FWkpVz94QvcX0mIu8YL5nfIhYdgtGCKf3Uay8TxIkvM8eT5c2yOlmknsXo6JBQnwTcQnMoQ%2FjnXRPccTmpudFZn90W9F2JNTQam962gGvQpQ5bK17UIwkmzlVwZv&X-Amz-Signature=70b66ae3d82af96b59257c2e7c46cafcba879c266e09dd90a8fbb819f9e392ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FUDKHJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC3d5mpKjJOY4Glqd7L5z71pOQA6kLyZOFXCxlhUkq31wIhAIhMqALtbN8drEvqcY6zfGhd6Alm6Rlck8cbMUZWo8jlKv8DCEgQABoMNjM3NDIzMTgzODA1Igw2CvHY3EyfKSNSk58q3APHLnSQvLCOCR6TnYiGh%2FdKq3XU3zBZu9TqvH69vLt3u6nsmeSn7AI%2Bo0fr%2Fa%2B37hGrcsV3nFKnJyYpRj1hClN9%2Bb1WY4b5gjX3Gb0ViFibY0CHzeFH0R09tn0MYqlnOZEuoX262ty%2F%2F81ulW24mVcBB4cA7ZnnEoCrJHng5jjbRTcokumgGFidrhzqjI0uLFJscR0Wya8IMflN%2FqRTrDeqSwCDt%2FXmKTo4CRiChDe%2F%2B2PMuvwilGBBqjKcLzNadkwy2GsvoRojjPZvmL8sywUgEku4v36XLfx280kP95ZBwzdCE%2Bx7%2F13vQLkdq%2BWcsmM%2Fndml1ie5GBaEyVmjKu6dgnZcF4iCaV07Qk7tk3LjhdKDPAwxdIeq8f41VlcqJZXc2WdamTWyK8l73Xg7B4sSD6kjdXnFmjvcarrUv10Ud0%2BoXLHqLRn%2FmN44mK5ajigZPR8iRQ%2F8JgyDVwGfUYtmN8ihln%2FdvhSseMDxSaHkhkfe1Zc1fKOJvRYaFrCojZPjZcT3O61iC%2F%2FtlEM5FaYXiIT4d2a8RFIP4GJnHqYqHqI%2BsJvJW9WuexvOp5ZnFBR0qiwmbeI%2F6KX73Nz14sMvDqzUnuop0dSDEAJBZnyfxCkkFfHhhVGnTfrxVjC2n6y%2BBjqkAQ9Huf2SUuGKHsnVrNBYfDVjsr279XN4kGn%2B49G0%2F7%2BHJrqu8s2g0xQun0QaNpd10OudwDN96HobXduGb%2Fb5jnVA6d7e03ji%2FWkpVz94QvcX0mIu8YL5nfIhYdgtGCKf3Uay8TxIkvM8eT5c2yOlmknsXo6JBQnwTcQnMoQ%2FjnXRPccTmpudFZn90W9F2JNTQam962gGvQpQ5bK17UIwkmzlVwZv&X-Amz-Signature=f552fd167361020a4c50fcaff818e846f45f7267fa50eefcccc94783998989a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
