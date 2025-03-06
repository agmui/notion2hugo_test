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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKE5OYX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmnzMVf9QOR%2BOdD28d%2FlEkOoaRX5ZnwKrawQuMPwm0ZQIhANbfMCIpT4N7DPP02WRbowUERoR5hw2W%2B72Ouh0rts2MKv8DCCkQABoMNjM3NDIzMTgzODA1IgzgYFDX%2FHtmLHryXBMq3AO0SMNgIpVxfHyKiyndm8yzG5KkkcKqzIEfQAKHOabg9gaNiXfzot6foF56WPeDS%2BA7eVJYFm1ynU%2BYWjnqvhtjqFDbN1NmEfcCvNYrxLQgL0I5uDudb4yvBCOpyW%2FOpcL1NXxe9UCpsZduOo5cZ23V762uxVug3LRANZzScuVFyUtqYGWr9v%2B84CDaFaQdTm1oPCJpI3Ld7U%2FDPkzcbb5Ga15KCU0hf%2BeXqF%2BiBHRb%2FDXJChnVn1n4NhmpFHzE2V%2F2N1NtKaYVnQpWw%2FengO%2FNcVjRTPMzYXJxAmvIv6zBIjkayBfXgHthLjlmFLKCJ8FNIOXFyTJUfM2u5opm2Xj9DyYPObkrJj7GjlLdxHenErrJKRb9yEhw0r4ojs68IgPPU%2FCykvg1WI%2B4LWSH0UEUFFROd3ThNm9YVGhz%2Fz4aXAj2H7og%2BrVZK%2FXj4cdmePZzAbe4A%2Bz13ZOAS%2FU4WBNpcKIjiGZ8AfoY4L5EG3f9yJtSf0CbeCF%2FkLb8TKIhWb%2B2ZmfYKr5I7gZ6gAQEEkOF2rtqm9BavFt2F5NDK2uOH4%2BoaKkanute%2Bm8xL3P0ifY%2FRQWerymvjHpa6JgiUE%2FQAc1fCrEy9%2BcUvG%2F5sfm66rG095CfvVChzFYYyTD3tKW%2BBjqkAfJz%2FPAJ3ovmWMRchYTwGbxrt4QXQf%2BQO12MvTxKcVC68SXdRD0kDwTkKEqX2G7RXtYGe1YGiWBlCmW7qUiqO1hE0%2FBeIl9wohS1Ge8ok630LS0J%2FyffL322Im5jP0nrJWTbzY1wFR3E85bO8xuLOFDbIqnGlEqNWCjKmLly5PnE%2FMGjTH8gYi4OqEW%2Bhrrmnhuk6yc3tG3427vWfsV%2Frpy7q0HH&X-Amz-Signature=b6cb3677ef63737bfef92bc1c80e8e9e4c08d35d6fdfbd3f6052145625772cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKE5OYX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmnzMVf9QOR%2BOdD28d%2FlEkOoaRX5ZnwKrawQuMPwm0ZQIhANbfMCIpT4N7DPP02WRbowUERoR5hw2W%2B72Ouh0rts2MKv8DCCkQABoMNjM3NDIzMTgzODA1IgzgYFDX%2FHtmLHryXBMq3AO0SMNgIpVxfHyKiyndm8yzG5KkkcKqzIEfQAKHOabg9gaNiXfzot6foF56WPeDS%2BA7eVJYFm1ynU%2BYWjnqvhtjqFDbN1NmEfcCvNYrxLQgL0I5uDudb4yvBCOpyW%2FOpcL1NXxe9UCpsZduOo5cZ23V762uxVug3LRANZzScuVFyUtqYGWr9v%2B84CDaFaQdTm1oPCJpI3Ld7U%2FDPkzcbb5Ga15KCU0hf%2BeXqF%2BiBHRb%2FDXJChnVn1n4NhmpFHzE2V%2F2N1NtKaYVnQpWw%2FengO%2FNcVjRTPMzYXJxAmvIv6zBIjkayBfXgHthLjlmFLKCJ8FNIOXFyTJUfM2u5opm2Xj9DyYPObkrJj7GjlLdxHenErrJKRb9yEhw0r4ojs68IgPPU%2FCykvg1WI%2B4LWSH0UEUFFROd3ThNm9YVGhz%2Fz4aXAj2H7og%2BrVZK%2FXj4cdmePZzAbe4A%2Bz13ZOAS%2FU4WBNpcKIjiGZ8AfoY4L5EG3f9yJtSf0CbeCF%2FkLb8TKIhWb%2B2ZmfYKr5I7gZ6gAQEEkOF2rtqm9BavFt2F5NDK2uOH4%2BoaKkanute%2Bm8xL3P0ifY%2FRQWerymvjHpa6JgiUE%2FQAc1fCrEy9%2BcUvG%2F5sfm66rG095CfvVChzFYYyTD3tKW%2BBjqkAfJz%2FPAJ3ovmWMRchYTwGbxrt4QXQf%2BQO12MvTxKcVC68SXdRD0kDwTkKEqX2G7RXtYGe1YGiWBlCmW7qUiqO1hE0%2FBeIl9wohS1Ge8ok630LS0J%2FyffL322Im5jP0nrJWTbzY1wFR3E85bO8xuLOFDbIqnGlEqNWCjKmLly5PnE%2FMGjTH8gYi4OqEW%2Bhrrmnhuk6yc3tG3427vWfsV%2Frpy7q0HH&X-Amz-Signature=867c8f117607e9ce438f24879e4ca0ab6249c7f63133cb051878146a7cdff643&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKE5OYX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmnzMVf9QOR%2BOdD28d%2FlEkOoaRX5ZnwKrawQuMPwm0ZQIhANbfMCIpT4N7DPP02WRbowUERoR5hw2W%2B72Ouh0rts2MKv8DCCkQABoMNjM3NDIzMTgzODA1IgzgYFDX%2FHtmLHryXBMq3AO0SMNgIpVxfHyKiyndm8yzG5KkkcKqzIEfQAKHOabg9gaNiXfzot6foF56WPeDS%2BA7eVJYFm1ynU%2BYWjnqvhtjqFDbN1NmEfcCvNYrxLQgL0I5uDudb4yvBCOpyW%2FOpcL1NXxe9UCpsZduOo5cZ23V762uxVug3LRANZzScuVFyUtqYGWr9v%2B84CDaFaQdTm1oPCJpI3Ld7U%2FDPkzcbb5Ga15KCU0hf%2BeXqF%2BiBHRb%2FDXJChnVn1n4NhmpFHzE2V%2F2N1NtKaYVnQpWw%2FengO%2FNcVjRTPMzYXJxAmvIv6zBIjkayBfXgHthLjlmFLKCJ8FNIOXFyTJUfM2u5opm2Xj9DyYPObkrJj7GjlLdxHenErrJKRb9yEhw0r4ojs68IgPPU%2FCykvg1WI%2B4LWSH0UEUFFROd3ThNm9YVGhz%2Fz4aXAj2H7og%2BrVZK%2FXj4cdmePZzAbe4A%2Bz13ZOAS%2FU4WBNpcKIjiGZ8AfoY4L5EG3f9yJtSf0CbeCF%2FkLb8TKIhWb%2B2ZmfYKr5I7gZ6gAQEEkOF2rtqm9BavFt2F5NDK2uOH4%2BoaKkanute%2Bm8xL3P0ifY%2FRQWerymvjHpa6JgiUE%2FQAc1fCrEy9%2BcUvG%2F5sfm66rG095CfvVChzFYYyTD3tKW%2BBjqkAfJz%2FPAJ3ovmWMRchYTwGbxrt4QXQf%2BQO12MvTxKcVC68SXdRD0kDwTkKEqX2G7RXtYGe1YGiWBlCmW7qUiqO1hE0%2FBeIl9wohS1Ge8ok630LS0J%2FyffL322Im5jP0nrJWTbzY1wFR3E85bO8xuLOFDbIqnGlEqNWCjKmLly5PnE%2FMGjTH8gYi4OqEW%2Bhrrmnhuk6yc3tG3427vWfsV%2Frpy7q0HH&X-Amz-Signature=8688596e1bea4aeb513d0c489d4a7922f21b5dcd2a3c56413bfbae42324494b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
