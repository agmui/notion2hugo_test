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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDZN4QO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDixlTMhvkJQ9OCHjBBX0U0e82091t8O31CgnoWopFGRAIhAOshCI0QYpBJ%2B6kiXs7hxy%2BRL4nBgrB2W3nJu2Mn9uoQKv8DCHYQABoMNjM3NDIzMTgzODA1IgwvvxHfYDvX48YeEB8q3AMTrQ1j9r8mOk65ydsw03wa%2BHot%2B8C5lAg0qxes0y1oOkgvjH26kV5Gt5ysN5qdW%2Bt2DRbPs6ZUAGMmgZeNNPCJDto8i82RT4f17oey2Ju4csJkKSEvs%2BgB7n0PPZgvzvUvEBSfhvB%2B91g9E2bFe3pybfX%2FASzWKJwMm10YttYsi6H9A4THwOspZnfGlNLZaMiO%2BNDkd6Sz2sVv%2FI2Su5A8ILIOrJhQQj2w9PzhvT%2Fg6YAwC%2BtP0da0ti5%2BfenQHnxdo%2FN9tH7UqRjwmf1MnWUFzlcf4bQ5ut3jOw3cMgUdj7lcXyNOELJcjEC1DuWS5PxC09ZZZ6psF89GESwzMq4rAGENu01P831Wy74nd9OJ9J%2BJ6BXTQRbKPwV8FupPHsk9GKYsu4CdkaE9DC2ozGxxJgA0s1ZxVH4xjMtDvq73K%2FPNu8rpCxh%2FN1ZTFaCTW6egEjhNOTyp0pzbysdWIm3Qyr1u%2F5yJ1cVbFEOeK31J11Dm%2BdI6%2B%2BPmC1zeYialKKvqqhY1a%2B6vSF7T0VVNL3HRe9bnL4TiBHRXOdm%2FkVqSlt35boFrhQXwxu3CHHAgGSDutWfUYYafvSXR18ZaFmN0hzlCJZf15jidoZfQakdAMiD2C7IHiGs1hVUieTCljonABjqkAYXLeT8mPPEeGSMfyPR7uflf8TjZxhOOrSq%2Ffwt%2Bqyrk2GLWLTVoVH5rYTeW%2FP3Kw7tfPNwhbi%2FrFwf3GeCNvq3TAcgqPxxvho0bNfWjkIL4cRgtbb234jvVFyb44KP3xJBF4d0v%2Bke%2BNacFI6YjG6PkuOyTA0ipL%2FP1JbXH4W6N9diWDuP%2F%2FLaCNlJC0COCGUNVzAZCZifORIWmqkxEog8m%2FDsq&X-Amz-Signature=5a977514e69d5588d84105969c911a8e9d9d4b9cf7b43f836f4d565a08103d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDZN4QO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDixlTMhvkJQ9OCHjBBX0U0e82091t8O31CgnoWopFGRAIhAOshCI0QYpBJ%2B6kiXs7hxy%2BRL4nBgrB2W3nJu2Mn9uoQKv8DCHYQABoMNjM3NDIzMTgzODA1IgwvvxHfYDvX48YeEB8q3AMTrQ1j9r8mOk65ydsw03wa%2BHot%2B8C5lAg0qxes0y1oOkgvjH26kV5Gt5ysN5qdW%2Bt2DRbPs6ZUAGMmgZeNNPCJDto8i82RT4f17oey2Ju4csJkKSEvs%2BgB7n0PPZgvzvUvEBSfhvB%2B91g9E2bFe3pybfX%2FASzWKJwMm10YttYsi6H9A4THwOspZnfGlNLZaMiO%2BNDkd6Sz2sVv%2FI2Su5A8ILIOrJhQQj2w9PzhvT%2Fg6YAwC%2BtP0da0ti5%2BfenQHnxdo%2FN9tH7UqRjwmf1MnWUFzlcf4bQ5ut3jOw3cMgUdj7lcXyNOELJcjEC1DuWS5PxC09ZZZ6psF89GESwzMq4rAGENu01P831Wy74nd9OJ9J%2BJ6BXTQRbKPwV8FupPHsk9GKYsu4CdkaE9DC2ozGxxJgA0s1ZxVH4xjMtDvq73K%2FPNu8rpCxh%2FN1ZTFaCTW6egEjhNOTyp0pzbysdWIm3Qyr1u%2F5yJ1cVbFEOeK31J11Dm%2BdI6%2B%2BPmC1zeYialKKvqqhY1a%2B6vSF7T0VVNL3HRe9bnL4TiBHRXOdm%2FkVqSlt35boFrhQXwxu3CHHAgGSDutWfUYYafvSXR18ZaFmN0hzlCJZf15jidoZfQakdAMiD2C7IHiGs1hVUieTCljonABjqkAYXLeT8mPPEeGSMfyPR7uflf8TjZxhOOrSq%2Ffwt%2Bqyrk2GLWLTVoVH5rYTeW%2FP3Kw7tfPNwhbi%2FrFwf3GeCNvq3TAcgqPxxvho0bNfWjkIL4cRgtbb234jvVFyb44KP3xJBF4d0v%2Bke%2BNacFI6YjG6PkuOyTA0ipL%2FP1JbXH4W6N9diWDuP%2F%2FLaCNlJC0COCGUNVzAZCZifORIWmqkxEog8m%2FDsq&X-Amz-Signature=c867957abecd265663755f6dbb4bdf6741438548266e8a51d7d369a7fb8bdbca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDZN4QO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDixlTMhvkJQ9OCHjBBX0U0e82091t8O31CgnoWopFGRAIhAOshCI0QYpBJ%2B6kiXs7hxy%2BRL4nBgrB2W3nJu2Mn9uoQKv8DCHYQABoMNjM3NDIzMTgzODA1IgwvvxHfYDvX48YeEB8q3AMTrQ1j9r8mOk65ydsw03wa%2BHot%2B8C5lAg0qxes0y1oOkgvjH26kV5Gt5ysN5qdW%2Bt2DRbPs6ZUAGMmgZeNNPCJDto8i82RT4f17oey2Ju4csJkKSEvs%2BgB7n0PPZgvzvUvEBSfhvB%2B91g9E2bFe3pybfX%2FASzWKJwMm10YttYsi6H9A4THwOspZnfGlNLZaMiO%2BNDkd6Sz2sVv%2FI2Su5A8ILIOrJhQQj2w9PzhvT%2Fg6YAwC%2BtP0da0ti5%2BfenQHnxdo%2FN9tH7UqRjwmf1MnWUFzlcf4bQ5ut3jOw3cMgUdj7lcXyNOELJcjEC1DuWS5PxC09ZZZ6psF89GESwzMq4rAGENu01P831Wy74nd9OJ9J%2BJ6BXTQRbKPwV8FupPHsk9GKYsu4CdkaE9DC2ozGxxJgA0s1ZxVH4xjMtDvq73K%2FPNu8rpCxh%2FN1ZTFaCTW6egEjhNOTyp0pzbysdWIm3Qyr1u%2F5yJ1cVbFEOeK31J11Dm%2BdI6%2B%2BPmC1zeYialKKvqqhY1a%2B6vSF7T0VVNL3HRe9bnL4TiBHRXOdm%2FkVqSlt35boFrhQXwxu3CHHAgGSDutWfUYYafvSXR18ZaFmN0hzlCJZf15jidoZfQakdAMiD2C7IHiGs1hVUieTCljonABjqkAYXLeT8mPPEeGSMfyPR7uflf8TjZxhOOrSq%2Ffwt%2Bqyrk2GLWLTVoVH5rYTeW%2FP3Kw7tfPNwhbi%2FrFwf3GeCNvq3TAcgqPxxvho0bNfWjkIL4cRgtbb234jvVFyb44KP3xJBF4d0v%2Bke%2BNacFI6YjG6PkuOyTA0ipL%2FP1JbXH4W6N9diWDuP%2F%2FLaCNlJC0COCGUNVzAZCZifORIWmqkxEog8m%2FDsq&X-Amz-Signature=b7eb7fb4a40035916dd95a9459cbebe1791be86daf74c5f5d104c7a2aa7e4221&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
