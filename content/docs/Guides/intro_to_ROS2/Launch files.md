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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IGYWFK7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCADGj4vqv8yE9Y3O%2FwHVa5ceGP6LzZofQTkEBdQ%2BFj1QIhAK3bic4oij5im0gX8cJjZAW8%2FlZ7CPSthmY0mZUtWmciKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx82bGOcJygYRuaVV0q3ANb1Km%2FWNeZZV4XqT6oekr7Xj8mZGDm5dAPllWUKW%2FhFrVSFD91HNDZwv1mXXobFrh2ACeE9bGybCUmV9TmcH44tahMO7OMNsju0lRUVd%2FhlyKDJsOKuU7baQu2AltOKJUBxRuWFurq4D%2FK%2FPNCuYveGgv0gdZs3fz4dSXI%2F3zlUGqah8EbYV2%2BCY6MSb5hIEiMqPvQkkRvsIEjfHhaS7aKO24ZcKXBB2mlF3Zo7c703uofuHS7h4G7SfKXB%2B%2FM3Qsg0eb3QzFrROReu60gWIGCEBQn3dkFAOkDQiUUHN6jqNFdNoCN%2FdjOfWDG9pwsyhB3aGGOwCEzoZ0%2BNcdiQzn9FNamquvu9vPMJJ6STmgyL5yOvd8jppzFzL8CBEeTawPUwBmO31S8fK2a9pL0X4w3cMBfcmkSQyhgjigwTF6Ympsyp0ZQsLQO8fK%2FSNcdUNYGEzYBAzja7KGwrQglqq8Uv%2FYBF9aVi3%2B%2FYkGHqgs4QbnVMsVg8q2qC3Q4Vgr9hxZDlHL7gnpfPGMFa5V%2BCccLmvkdBGmdrMjc9yt7k4vKEmQURISDIXGwTitUR6ddsoB7WikUM611AU34adx%2FphKFqogO3ukyCMkmmK8iRNQRzQqLATAqzCZoKlhPNTC57K%2B%2FBjqkATslaNkUSJMOFgAP1BNgyn5nc0OZ3x3yjwRglG6QD6rTtJ9cbt%2BFQoUJP0z6tmpnhqh11Ju%2BUCYnuwYhku9id1c6sFJlqZ%2BQdGn9WJ3SfKJROMHZTgic5S5x4gA4JiNw6VtTjM4dY%2Bv0D4iOWLelpgY12%2FdRtWssrmqxjoSuYzGN6ftaSFgWjynFqdSkFWvZwdxKNZLjigj%2Bpu0aHlWwo8a1wBq2&X-Amz-Signature=75fb9ad6df34e45e0e21c24c53384bad58536d86400e53a4857b9ac7146a769d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IGYWFK7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCADGj4vqv8yE9Y3O%2FwHVa5ceGP6LzZofQTkEBdQ%2BFj1QIhAK3bic4oij5im0gX8cJjZAW8%2FlZ7CPSthmY0mZUtWmciKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx82bGOcJygYRuaVV0q3ANb1Km%2FWNeZZV4XqT6oekr7Xj8mZGDm5dAPllWUKW%2FhFrVSFD91HNDZwv1mXXobFrh2ACeE9bGybCUmV9TmcH44tahMO7OMNsju0lRUVd%2FhlyKDJsOKuU7baQu2AltOKJUBxRuWFurq4D%2FK%2FPNCuYveGgv0gdZs3fz4dSXI%2F3zlUGqah8EbYV2%2BCY6MSb5hIEiMqPvQkkRvsIEjfHhaS7aKO24ZcKXBB2mlF3Zo7c703uofuHS7h4G7SfKXB%2B%2FM3Qsg0eb3QzFrROReu60gWIGCEBQn3dkFAOkDQiUUHN6jqNFdNoCN%2FdjOfWDG9pwsyhB3aGGOwCEzoZ0%2BNcdiQzn9FNamquvu9vPMJJ6STmgyL5yOvd8jppzFzL8CBEeTawPUwBmO31S8fK2a9pL0X4w3cMBfcmkSQyhgjigwTF6Ympsyp0ZQsLQO8fK%2FSNcdUNYGEzYBAzja7KGwrQglqq8Uv%2FYBF9aVi3%2B%2FYkGHqgs4QbnVMsVg8q2qC3Q4Vgr9hxZDlHL7gnpfPGMFa5V%2BCccLmvkdBGmdrMjc9yt7k4vKEmQURISDIXGwTitUR6ddsoB7WikUM611AU34adx%2FphKFqogO3ukyCMkmmK8iRNQRzQqLATAqzCZoKlhPNTC57K%2B%2FBjqkATslaNkUSJMOFgAP1BNgyn5nc0OZ3x3yjwRglG6QD6rTtJ9cbt%2BFQoUJP0z6tmpnhqh11Ju%2BUCYnuwYhku9id1c6sFJlqZ%2BQdGn9WJ3SfKJROMHZTgic5S5x4gA4JiNw6VtTjM4dY%2Bv0D4iOWLelpgY12%2FdRtWssrmqxjoSuYzGN6ftaSFgWjynFqdSkFWvZwdxKNZLjigj%2Bpu0aHlWwo8a1wBq2&X-Amz-Signature=57ef378f64087aebfff19e988af974263570137a366dc0e0ce166acc6a1fbdab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IGYWFK7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCADGj4vqv8yE9Y3O%2FwHVa5ceGP6LzZofQTkEBdQ%2BFj1QIhAK3bic4oij5im0gX8cJjZAW8%2FlZ7CPSthmY0mZUtWmciKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx82bGOcJygYRuaVV0q3ANb1Km%2FWNeZZV4XqT6oekr7Xj8mZGDm5dAPllWUKW%2FhFrVSFD91HNDZwv1mXXobFrh2ACeE9bGybCUmV9TmcH44tahMO7OMNsju0lRUVd%2FhlyKDJsOKuU7baQu2AltOKJUBxRuWFurq4D%2FK%2FPNCuYveGgv0gdZs3fz4dSXI%2F3zlUGqah8EbYV2%2BCY6MSb5hIEiMqPvQkkRvsIEjfHhaS7aKO24ZcKXBB2mlF3Zo7c703uofuHS7h4G7SfKXB%2B%2FM3Qsg0eb3QzFrROReu60gWIGCEBQn3dkFAOkDQiUUHN6jqNFdNoCN%2FdjOfWDG9pwsyhB3aGGOwCEzoZ0%2BNcdiQzn9FNamquvu9vPMJJ6STmgyL5yOvd8jppzFzL8CBEeTawPUwBmO31S8fK2a9pL0X4w3cMBfcmkSQyhgjigwTF6Ympsyp0ZQsLQO8fK%2FSNcdUNYGEzYBAzja7KGwrQglqq8Uv%2FYBF9aVi3%2B%2FYkGHqgs4QbnVMsVg8q2qC3Q4Vgr9hxZDlHL7gnpfPGMFa5V%2BCccLmvkdBGmdrMjc9yt7k4vKEmQURISDIXGwTitUR6ddsoB7WikUM611AU34adx%2FphKFqogO3ukyCMkmmK8iRNQRzQqLATAqzCZoKlhPNTC57K%2B%2FBjqkATslaNkUSJMOFgAP1BNgyn5nc0OZ3x3yjwRglG6QD6rTtJ9cbt%2BFQoUJP0z6tmpnhqh11Ju%2BUCYnuwYhku9id1c6sFJlqZ%2BQdGn9WJ3SfKJROMHZTgic5S5x4gA4JiNw6VtTjM4dY%2Bv0D4iOWLelpgY12%2FdRtWssrmqxjoSuYzGN6ftaSFgWjynFqdSkFWvZwdxKNZLjigj%2Bpu0aHlWwo8a1wBq2&X-Amz-Signature=55641c1a83db8821b052f0360d27b49eb4c346ba6509604b0bf501448d38561d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
