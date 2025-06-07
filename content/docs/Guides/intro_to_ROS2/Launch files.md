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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQEOMWZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58ArFiEEpNvx%2F3f3OHhQgjjdJZAniNjgzI5qEOuFO3wIhAP%2BtMHY26KFEu5mVHXxP7U57ohLfXxZnCt6OqGQFFvzmKv8DCHUQABoMNjM3NDIzMTgzODA1IgyIUL1fPaQfcFlLjSwq3APHQAUW3Zs5ylmjvJlMaSKPknKGwt1rsY9cuJVAXuwfSALWIMoNXCWZ4aXZDEMVUO%2B7GIfFVphw%2FnPazOv106BKOlQGQ9Mr1PNktC9PQsOMXi7N1JAjJVdnms49d0S57QqWxjZQPOiP92zoPqPLK4yWvQ08T%2B1ZJsDYmvOfrcJIC%2BfPDHmBvbR%2F10eUwkJ75%2BipzXOKroj%2FdG%2F1EVyxVBGgyvlCxwgu9ZPwCFQbFxQxxQUNl%2FfIYUOsCZjkD28hRdu8qDymAodazIopt%2FSht9KcqOqauKOUqQYX%2BxOti7UYWCo0H3RVRTgKjW0hOg8wNB1gfPtqmMF4FktH8ubRfmvlT1i%2FApW1kdDozIMMzPsXdsp%2Bg8cJEiw6ycDiwrx6hQ9iC41wkqN1loteDwLr4dBnMAweLYWYo7aJigutyJ6GfKDsilmEatCLZLYYvqp4I1DYyfa%2FEZMm5hdoqX7tqqWKfuZg6X3lw8Axv34C8KUJfw3DaRx5IEB1DHS4w9UGCXwquTU%2FRbYQ6TZcCrNwn5wc7mKGc8Os8%2BQZMU21KlFgh2VH%2FC%2FOIfpRJvMVtmvt9kQqYPrV5hI1YDzhXpYa2QgKprV%2F9680ODqXaOkHlKBdD9hiZB7SozfxKaEWNjDzw5DCBjqkAb%2BHdICK5iCK4bdSwv1pErCo9qKfIC2Lw7IhxE6lQgaX4UGSqwA7s%2FKeJ1%2BISYYjU%2FKeLN%2FGF8zTrNSxqVV4hWwoP1EtZPUct%2FxiQdsZOPPNwxomslIYWJ47fDc%2FDxhRuoojeaFibwlgpIPyituHK9Q7vbSAilPahsdeSPaQHaxuBpAMQGzafed6Vy2%2F9%2BsdfeHewMkYeYgpfL%2BmPCfa3Q2otQBW&X-Amz-Signature=d72080abfc9d7f7d2a4e7209b8c7596942f007a956ff9b3730d4428bd5768ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQEOMWZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58ArFiEEpNvx%2F3f3OHhQgjjdJZAniNjgzI5qEOuFO3wIhAP%2BtMHY26KFEu5mVHXxP7U57ohLfXxZnCt6OqGQFFvzmKv8DCHUQABoMNjM3NDIzMTgzODA1IgyIUL1fPaQfcFlLjSwq3APHQAUW3Zs5ylmjvJlMaSKPknKGwt1rsY9cuJVAXuwfSALWIMoNXCWZ4aXZDEMVUO%2B7GIfFVphw%2FnPazOv106BKOlQGQ9Mr1PNktC9PQsOMXi7N1JAjJVdnms49d0S57QqWxjZQPOiP92zoPqPLK4yWvQ08T%2B1ZJsDYmvOfrcJIC%2BfPDHmBvbR%2F10eUwkJ75%2BipzXOKroj%2FdG%2F1EVyxVBGgyvlCxwgu9ZPwCFQbFxQxxQUNl%2FfIYUOsCZjkD28hRdu8qDymAodazIopt%2FSht9KcqOqauKOUqQYX%2BxOti7UYWCo0H3RVRTgKjW0hOg8wNB1gfPtqmMF4FktH8ubRfmvlT1i%2FApW1kdDozIMMzPsXdsp%2Bg8cJEiw6ycDiwrx6hQ9iC41wkqN1loteDwLr4dBnMAweLYWYo7aJigutyJ6GfKDsilmEatCLZLYYvqp4I1DYyfa%2FEZMm5hdoqX7tqqWKfuZg6X3lw8Axv34C8KUJfw3DaRx5IEB1DHS4w9UGCXwquTU%2FRbYQ6TZcCrNwn5wc7mKGc8Os8%2BQZMU21KlFgh2VH%2FC%2FOIfpRJvMVtmvt9kQqYPrV5hI1YDzhXpYa2QgKprV%2F9680ODqXaOkHlKBdD9hiZB7SozfxKaEWNjDzw5DCBjqkAb%2BHdICK5iCK4bdSwv1pErCo9qKfIC2Lw7IhxE6lQgaX4UGSqwA7s%2FKeJ1%2BISYYjU%2FKeLN%2FGF8zTrNSxqVV4hWwoP1EtZPUct%2FxiQdsZOPPNwxomslIYWJ47fDc%2FDxhRuoojeaFibwlgpIPyituHK9Q7vbSAilPahsdeSPaQHaxuBpAMQGzafed6Vy2%2F9%2BsdfeHewMkYeYgpfL%2BmPCfa3Q2otQBW&X-Amz-Signature=dd16085ca79e0c396a7f8e752a27b2422d8a978c400742c0daa105c4f477feac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQEOMWZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD58ArFiEEpNvx%2F3f3OHhQgjjdJZAniNjgzI5qEOuFO3wIhAP%2BtMHY26KFEu5mVHXxP7U57ohLfXxZnCt6OqGQFFvzmKv8DCHUQABoMNjM3NDIzMTgzODA1IgyIUL1fPaQfcFlLjSwq3APHQAUW3Zs5ylmjvJlMaSKPknKGwt1rsY9cuJVAXuwfSALWIMoNXCWZ4aXZDEMVUO%2B7GIfFVphw%2FnPazOv106BKOlQGQ9Mr1PNktC9PQsOMXi7N1JAjJVdnms49d0S57QqWxjZQPOiP92zoPqPLK4yWvQ08T%2B1ZJsDYmvOfrcJIC%2BfPDHmBvbR%2F10eUwkJ75%2BipzXOKroj%2FdG%2F1EVyxVBGgyvlCxwgu9ZPwCFQbFxQxxQUNl%2FfIYUOsCZjkD28hRdu8qDymAodazIopt%2FSht9KcqOqauKOUqQYX%2BxOti7UYWCo0H3RVRTgKjW0hOg8wNB1gfPtqmMF4FktH8ubRfmvlT1i%2FApW1kdDozIMMzPsXdsp%2Bg8cJEiw6ycDiwrx6hQ9iC41wkqN1loteDwLr4dBnMAweLYWYo7aJigutyJ6GfKDsilmEatCLZLYYvqp4I1DYyfa%2FEZMm5hdoqX7tqqWKfuZg6X3lw8Axv34C8KUJfw3DaRx5IEB1DHS4w9UGCXwquTU%2FRbYQ6TZcCrNwn5wc7mKGc8Os8%2BQZMU21KlFgh2VH%2FC%2FOIfpRJvMVtmvt9kQqYPrV5hI1YDzhXpYa2QgKprV%2F9680ODqXaOkHlKBdD9hiZB7SozfxKaEWNjDzw5DCBjqkAb%2BHdICK5iCK4bdSwv1pErCo9qKfIC2Lw7IhxE6lQgaX4UGSqwA7s%2FKeJ1%2BISYYjU%2FKeLN%2FGF8zTrNSxqVV4hWwoP1EtZPUct%2FxiQdsZOPPNwxomslIYWJ47fDc%2FDxhRuoojeaFibwlgpIPyituHK9Q7vbSAilPahsdeSPaQHaxuBpAMQGzafed6Vy2%2F9%2BsdfeHewMkYeYgpfL%2BmPCfa3Q2otQBW&X-Amz-Signature=89d3da927884ad973c1f2b235b34708e3940b3956fd1f20476ebe4b029a1def3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
