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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWAV2FU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDzxM%2FBHK3vUQLau3K3BWuRYHqU0yQn7pyUxWZwKVxj1gIhAMtip6Bm7PFv%2BJLwljEXaR%2Bvh6ogb%2F9VnvoU9xDXGNHjKv8DCCUQABoMNjM3NDIzMTgzODA1IgyFAlM9rqlVPCLEOKUq3AMn7PAcMSwV2VTcmWfMfPx%2Bk74ypIhSRfeuHxo5nuUb5iO98dcpugIFcrenJqLxJlHxxTx%2FzM1rnbYk4OuCtTWzK7e6RSmnRtNhTF5%2FG1bH3Xbr4Thh1BbC%2FkxcyjPOQpo7yK0FSIM9QxbxL8h%2FaDIECH4lADBwjTk1LLhLgvsLh%2Fv297oOgMEkKvCkTowUTrnKzNrTchHsd1hyRAB7uGOKRKfXWG8rXkB0JYO139foN4e6UpYSf12r682VmsBwvPt9C108dO3h%2F9lf0YdQEb23oj9H8bLhH4VW6v%2Fp15ejDHuf6pTp8MMC0YL0NWZxjAOn7DGUgjtAxbEKIgcVaKBzXrzU3AbkYbAtE8D5bAhi%2FHxZSmgZkgc3DUEZyNnRMCtmgBW54wzLXRYup%2FqczEgpHYpL1WR7ZsjaDHd%2BDDeakeO0%2B%2BFKlQoBT%2FGj90zJcR%2BRXlHu3CRawlS7UBmQP6sYk3pzbScKROQAKdVsABjVzKapClqtsTeqOeIFRhpAQegYxa41PI1Bx5yIHspZG3W6zUWYLA3WlAK%2F7HaX197vusZu2TZPO6kj%2BhIrgcOT0RTDb21ox1UcDV%2BciOhUftmsLhZh9MnXCAWYVKxMgdVVSNihGvxGt2tFF5gtgzD%2Fooa9BjqkAb5RyN9jQnQ9UyDE2runRUwvtrcy6XhX9FXvoQv9NohPhIQlFigH5f1sxAyqrSvMP3XRW61eBSUSKnQPOgs9U4QjxanicMnm8EIwLDFpAbv4Y1RvoKHUKo5Il%2FdfPjaTk13Z8y%2FShVWgrQuVwQHwH5FULJ2FNmxwPN3GXgr579byEWKmQLNLh9nGL%2BM3jYVkXW%2BCFl%2B6q8DkvK6FMbEK1EqUUoFa&X-Amz-Signature=c76eaae520abb04c1a081445a28147d4a3163e0bd7dd80390097c6df8f2f8a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWAV2FU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDzxM%2FBHK3vUQLau3K3BWuRYHqU0yQn7pyUxWZwKVxj1gIhAMtip6Bm7PFv%2BJLwljEXaR%2Bvh6ogb%2F9VnvoU9xDXGNHjKv8DCCUQABoMNjM3NDIzMTgzODA1IgyFAlM9rqlVPCLEOKUq3AMn7PAcMSwV2VTcmWfMfPx%2Bk74ypIhSRfeuHxo5nuUb5iO98dcpugIFcrenJqLxJlHxxTx%2FzM1rnbYk4OuCtTWzK7e6RSmnRtNhTF5%2FG1bH3Xbr4Thh1BbC%2FkxcyjPOQpo7yK0FSIM9QxbxL8h%2FaDIECH4lADBwjTk1LLhLgvsLh%2Fv297oOgMEkKvCkTowUTrnKzNrTchHsd1hyRAB7uGOKRKfXWG8rXkB0JYO139foN4e6UpYSf12r682VmsBwvPt9C108dO3h%2F9lf0YdQEb23oj9H8bLhH4VW6v%2Fp15ejDHuf6pTp8MMC0YL0NWZxjAOn7DGUgjtAxbEKIgcVaKBzXrzU3AbkYbAtE8D5bAhi%2FHxZSmgZkgc3DUEZyNnRMCtmgBW54wzLXRYup%2FqczEgpHYpL1WR7ZsjaDHd%2BDDeakeO0%2B%2BFKlQoBT%2FGj90zJcR%2BRXlHu3CRawlS7UBmQP6sYk3pzbScKROQAKdVsABjVzKapClqtsTeqOeIFRhpAQegYxa41PI1Bx5yIHspZG3W6zUWYLA3WlAK%2F7HaX197vusZu2TZPO6kj%2BhIrgcOT0RTDb21ox1UcDV%2BciOhUftmsLhZh9MnXCAWYVKxMgdVVSNihGvxGt2tFF5gtgzD%2Fooa9BjqkAb5RyN9jQnQ9UyDE2runRUwvtrcy6XhX9FXvoQv9NohPhIQlFigH5f1sxAyqrSvMP3XRW61eBSUSKnQPOgs9U4QjxanicMnm8EIwLDFpAbv4Y1RvoKHUKo5Il%2FdfPjaTk13Z8y%2FShVWgrQuVwQHwH5FULJ2FNmxwPN3GXgr579byEWKmQLNLh9nGL%2BM3jYVkXW%2BCFl%2B6q8DkvK6FMbEK1EqUUoFa&X-Amz-Signature=261395fbc930b2f1a563e93176d450bba0f412a83368781c01aa465070263df3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWAV2FU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDzxM%2FBHK3vUQLau3K3BWuRYHqU0yQn7pyUxWZwKVxj1gIhAMtip6Bm7PFv%2BJLwljEXaR%2Bvh6ogb%2F9VnvoU9xDXGNHjKv8DCCUQABoMNjM3NDIzMTgzODA1IgyFAlM9rqlVPCLEOKUq3AMn7PAcMSwV2VTcmWfMfPx%2Bk74ypIhSRfeuHxo5nuUb5iO98dcpugIFcrenJqLxJlHxxTx%2FzM1rnbYk4OuCtTWzK7e6RSmnRtNhTF5%2FG1bH3Xbr4Thh1BbC%2FkxcyjPOQpo7yK0FSIM9QxbxL8h%2FaDIECH4lADBwjTk1LLhLgvsLh%2Fv297oOgMEkKvCkTowUTrnKzNrTchHsd1hyRAB7uGOKRKfXWG8rXkB0JYO139foN4e6UpYSf12r682VmsBwvPt9C108dO3h%2F9lf0YdQEb23oj9H8bLhH4VW6v%2Fp15ejDHuf6pTp8MMC0YL0NWZxjAOn7DGUgjtAxbEKIgcVaKBzXrzU3AbkYbAtE8D5bAhi%2FHxZSmgZkgc3DUEZyNnRMCtmgBW54wzLXRYup%2FqczEgpHYpL1WR7ZsjaDHd%2BDDeakeO0%2B%2BFKlQoBT%2FGj90zJcR%2BRXlHu3CRawlS7UBmQP6sYk3pzbScKROQAKdVsABjVzKapClqtsTeqOeIFRhpAQegYxa41PI1Bx5yIHspZG3W6zUWYLA3WlAK%2F7HaX197vusZu2TZPO6kj%2BhIrgcOT0RTDb21ox1UcDV%2BciOhUftmsLhZh9MnXCAWYVKxMgdVVSNihGvxGt2tFF5gtgzD%2Fooa9BjqkAb5RyN9jQnQ9UyDE2runRUwvtrcy6XhX9FXvoQv9NohPhIQlFigH5f1sxAyqrSvMP3XRW61eBSUSKnQPOgs9U4QjxanicMnm8EIwLDFpAbv4Y1RvoKHUKo5Il%2FdfPjaTk13Z8y%2FShVWgrQuVwQHwH5FULJ2FNmxwPN3GXgr579byEWKmQLNLh9nGL%2BM3jYVkXW%2BCFl%2B6q8DkvK6FMbEK1EqUUoFa&X-Amz-Signature=e9d97befbc3ade373002570b93a21c229712787090df00c4f8b732d0842d6182&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
