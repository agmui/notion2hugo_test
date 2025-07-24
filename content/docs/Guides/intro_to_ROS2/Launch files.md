---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZB33RRG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDMSZJ48brBkNc9uQ1%2F3%2BjDPyOeuVnZ9nF9yhGn3IzJtAiA%2FijyjKpg6tD8Ke1t3irZCd%2BYJIE8dqzYQkCBLc17oySr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMzHRjWhwFSlU%2Fc%2BsWKtwDCJ722CvCVPpQmVg%2F9UlUeh3BKRYJDpV0DpwzU8LN%2BtMSWNGjeB2m0CJNExEvBzOKJZheXIvbp8iMEWXfQxLLE8it4l8zboIDQfI2DXWUafR%2F7Yj8lSpvmZ9N0xmCwNu6rUKDL4ZT9H0%2BSFo65wZdaMTrogHVnk%2FkDjNYUjK7lcNbwN9fA%2BunLxtdO3GH1z0xmakvxSLuZczQz9XzhNjOUDXs%2B2GSIvqsGxzww9zz2x7AY6ClNx8y9xeoKamj6BQmzsq64A%2BJs45EplpwiZMbCLm%2BwiXtSzRkmv1JdKE8m793PFO4gM2zBs%2B94oAo3ghbMxNR6VWr3rwy6Aegmm8m9bFATzajMAs%2BWFTUGsJqSWZLnVs0oOUY3diJLYsKwlyBEzbG5fcoHaDVuPdtag5PbFgStqpneWzf3hsYMjgoV88vxe9jFDGkkYh3R49viqLcfcUBvxUH0aNPI%2BPxANFSZCqICXqOqSLbvQ5eIGHadFq4svsd6tTRnetlL3X04ygyxJd6slVzAwC%2BoNS68G0jEH0%2FGUt51Gr4Me8dXYUJwLg9gUf6kqIK60eLNRjna2nGpd%2BwKlGlHmMOCKmOS5TJLWJ7EjEX%2FfVt2BiaBEjpuy44bufp%2FJiLnDHgfwcwpI%2BIxAY6pgEqZ9ph954JIHdUW9zHlKy76KZyPsilN4LhFXF4%2FnCFrGr3wSfwthi7qkVp6%2BUIV4f7iPqOdUy284KDV4Hn%2BpZyUFXaiZNLqqnEOWF3YoC%2F2cdaywrJWJOU9i7zaWUAD70w0tyV0pXIbmgPZMc4nQ02BOhwfSjrtTGj18iK%2BY5tk5AmBdu7bhiXVV4q8mONnnB90kNGD4o9EoVeNXXjNNoFnO%2FRoZyd&X-Amz-Signature=05aacf270767dec6c72b7f214bcfab9efcbbbc3b76db8ed6806774cd5db761e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZB33RRG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDMSZJ48brBkNc9uQ1%2F3%2BjDPyOeuVnZ9nF9yhGn3IzJtAiA%2FijyjKpg6tD8Ke1t3irZCd%2BYJIE8dqzYQkCBLc17oySr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMzHRjWhwFSlU%2Fc%2BsWKtwDCJ722CvCVPpQmVg%2F9UlUeh3BKRYJDpV0DpwzU8LN%2BtMSWNGjeB2m0CJNExEvBzOKJZheXIvbp8iMEWXfQxLLE8it4l8zboIDQfI2DXWUafR%2F7Yj8lSpvmZ9N0xmCwNu6rUKDL4ZT9H0%2BSFo65wZdaMTrogHVnk%2FkDjNYUjK7lcNbwN9fA%2BunLxtdO3GH1z0xmakvxSLuZczQz9XzhNjOUDXs%2B2GSIvqsGxzww9zz2x7AY6ClNx8y9xeoKamj6BQmzsq64A%2BJs45EplpwiZMbCLm%2BwiXtSzRkmv1JdKE8m793PFO4gM2zBs%2B94oAo3ghbMxNR6VWr3rwy6Aegmm8m9bFATzajMAs%2BWFTUGsJqSWZLnVs0oOUY3diJLYsKwlyBEzbG5fcoHaDVuPdtag5PbFgStqpneWzf3hsYMjgoV88vxe9jFDGkkYh3R49viqLcfcUBvxUH0aNPI%2BPxANFSZCqICXqOqSLbvQ5eIGHadFq4svsd6tTRnetlL3X04ygyxJd6slVzAwC%2BoNS68G0jEH0%2FGUt51Gr4Me8dXYUJwLg9gUf6kqIK60eLNRjna2nGpd%2BwKlGlHmMOCKmOS5TJLWJ7EjEX%2FfVt2BiaBEjpuy44bufp%2FJiLnDHgfwcwpI%2BIxAY6pgEqZ9ph954JIHdUW9zHlKy76KZyPsilN4LhFXF4%2FnCFrGr3wSfwthi7qkVp6%2BUIV4f7iPqOdUy284KDV4Hn%2BpZyUFXaiZNLqqnEOWF3YoC%2F2cdaywrJWJOU9i7zaWUAD70w0tyV0pXIbmgPZMc4nQ02BOhwfSjrtTGj18iK%2BY5tk5AmBdu7bhiXVV4q8mONnnB90kNGD4o9EoVeNXXjNNoFnO%2FRoZyd&X-Amz-Signature=8c4b90151f78d82377e59faa5d3866bee194b97128fd4354cd1c580e0c0dc0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZB33RRG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDMSZJ48brBkNc9uQ1%2F3%2BjDPyOeuVnZ9nF9yhGn3IzJtAiA%2FijyjKpg6tD8Ke1t3irZCd%2BYJIE8dqzYQkCBLc17oySr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMzHRjWhwFSlU%2Fc%2BsWKtwDCJ722CvCVPpQmVg%2F9UlUeh3BKRYJDpV0DpwzU8LN%2BtMSWNGjeB2m0CJNExEvBzOKJZheXIvbp8iMEWXfQxLLE8it4l8zboIDQfI2DXWUafR%2F7Yj8lSpvmZ9N0xmCwNu6rUKDL4ZT9H0%2BSFo65wZdaMTrogHVnk%2FkDjNYUjK7lcNbwN9fA%2BunLxtdO3GH1z0xmakvxSLuZczQz9XzhNjOUDXs%2B2GSIvqsGxzww9zz2x7AY6ClNx8y9xeoKamj6BQmzsq64A%2BJs45EplpwiZMbCLm%2BwiXtSzRkmv1JdKE8m793PFO4gM2zBs%2B94oAo3ghbMxNR6VWr3rwy6Aegmm8m9bFATzajMAs%2BWFTUGsJqSWZLnVs0oOUY3diJLYsKwlyBEzbG5fcoHaDVuPdtag5PbFgStqpneWzf3hsYMjgoV88vxe9jFDGkkYh3R49viqLcfcUBvxUH0aNPI%2BPxANFSZCqICXqOqSLbvQ5eIGHadFq4svsd6tTRnetlL3X04ygyxJd6slVzAwC%2BoNS68G0jEH0%2FGUt51Gr4Me8dXYUJwLg9gUf6kqIK60eLNRjna2nGpd%2BwKlGlHmMOCKmOS5TJLWJ7EjEX%2FfVt2BiaBEjpuy44bufp%2FJiLnDHgfwcwpI%2BIxAY6pgEqZ9ph954JIHdUW9zHlKy76KZyPsilN4LhFXF4%2FnCFrGr3wSfwthi7qkVp6%2BUIV4f7iPqOdUy284KDV4Hn%2BpZyUFXaiZNLqqnEOWF3YoC%2F2cdaywrJWJOU9i7zaWUAD70w0tyV0pXIbmgPZMc4nQ02BOhwfSjrtTGj18iK%2BY5tk5AmBdu7bhiXVV4q8mONnnB90kNGD4o9EoVeNXXjNNoFnO%2FRoZyd&X-Amz-Signature=a21a33200456d9dda1bc2bd88bf3b50da596eba247d3a9d98f5be12b76c77af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
