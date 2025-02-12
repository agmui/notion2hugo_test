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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBKXZ7X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhGJAgesh1mpMUYMt0ovh27yDFZGZjzJ3dzdVSI5pY1AiEA%2FPOxUWBJt8lyMKLMYTus74ol9ft1ZyysgHBQPPEpZbcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsDFae6hPE5JMR01CrcA%2BS6%2B%2BcrNncblp3NHkfhvCh1%2B7dch3Eq9tL%2BUeZGkYW4kJn4UmG4OT6GVvaFox%2FuN4%2BukD67rj%2BkfEtDCEXzqK3P0sx56WnAN0Ds8jrIIjdQJmmjKwKML6GjbZuHBiB%2FE6LmoRvbbt7v9FD9QOkCxDeZLvyin%2F%2FrkbqhENSQmujdiHnv4XTjEobEUTahhhCC3ZS8xDlyLVqbcrS0g3UI%2BRBlwcHaJV8RRKeluFbWG5x4OtC5D6i%2FqLIpCZICzuTTBfW7zv%2FIb3v0FFUIcVW9xqERoJeB1B1GQtYRJEnVIuVdzkH7%2FpkJxeRXsEZCB47IKS8%2FbVq7MRMx%2FveOOC6TCDxNvhjLMJ4MU8yttKLtzhFxZyqA7jKYchhhCpsUHo8VRFCWBbnjpKwRKl2latKI3PZMFdRyHOwVhs5Ksdu0T2FjqzjFlt4JhMSaFEPwKQxqq9MEtOEvP6pwqbmSoXwhYcnRR2W1%2BEbXjqzpEa0glUkLc0Cu1UCKwCMT%2BaWGyLujXdnK%2BigKctM9oHLE1b1QRleF2aVX7aUzI3HV1HeKxVhm3ViO%2Bou1uf2EwGc0bGKj9%2FQ9B48twhrp3rtUmi3J2NI9hCaj%2B0AzPTeFnHZz%2B78a9ysU3yvVW3u0M4FyMPjys70GOqUBCJOYyCVTe5DoYvprnJt6B4ssIUjEPs5eNrDsHfFGrqeZBVYhKya0WmaqFcaVF9dkilQBIqQlSnGAF5NDySqJBgu17vpO8%2BiglimqiiOJPvvtfHGrBqJwlGPJDmB9cU0WQdclV24k7mjoD3Dh0wQnSEVq23H8pZeQQrO0iTBGKviM7UEY8%2FgunQYa59qlgBjY9NEzxE9yB2GAzc9vq%2BUgIXsJ63NS&X-Amz-Signature=04b8e91dc8d45cc98a59af2b315bccae70f63b777c2327894928a9a2fdcc9685&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBKXZ7X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhGJAgesh1mpMUYMt0ovh27yDFZGZjzJ3dzdVSI5pY1AiEA%2FPOxUWBJt8lyMKLMYTus74ol9ft1ZyysgHBQPPEpZbcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsDFae6hPE5JMR01CrcA%2BS6%2B%2BcrNncblp3NHkfhvCh1%2B7dch3Eq9tL%2BUeZGkYW4kJn4UmG4OT6GVvaFox%2FuN4%2BukD67rj%2BkfEtDCEXzqK3P0sx56WnAN0Ds8jrIIjdQJmmjKwKML6GjbZuHBiB%2FE6LmoRvbbt7v9FD9QOkCxDeZLvyin%2F%2FrkbqhENSQmujdiHnv4XTjEobEUTahhhCC3ZS8xDlyLVqbcrS0g3UI%2BRBlwcHaJV8RRKeluFbWG5x4OtC5D6i%2FqLIpCZICzuTTBfW7zv%2FIb3v0FFUIcVW9xqERoJeB1B1GQtYRJEnVIuVdzkH7%2FpkJxeRXsEZCB47IKS8%2FbVq7MRMx%2FveOOC6TCDxNvhjLMJ4MU8yttKLtzhFxZyqA7jKYchhhCpsUHo8VRFCWBbnjpKwRKl2latKI3PZMFdRyHOwVhs5Ksdu0T2FjqzjFlt4JhMSaFEPwKQxqq9MEtOEvP6pwqbmSoXwhYcnRR2W1%2BEbXjqzpEa0glUkLc0Cu1UCKwCMT%2BaWGyLujXdnK%2BigKctM9oHLE1b1QRleF2aVX7aUzI3HV1HeKxVhm3ViO%2Bou1uf2EwGc0bGKj9%2FQ9B48twhrp3rtUmi3J2NI9hCaj%2B0AzPTeFnHZz%2B78a9ysU3yvVW3u0M4FyMPjys70GOqUBCJOYyCVTe5DoYvprnJt6B4ssIUjEPs5eNrDsHfFGrqeZBVYhKya0WmaqFcaVF9dkilQBIqQlSnGAF5NDySqJBgu17vpO8%2BiglimqiiOJPvvtfHGrBqJwlGPJDmB9cU0WQdclV24k7mjoD3Dh0wQnSEVq23H8pZeQQrO0iTBGKviM7UEY8%2FgunQYa59qlgBjY9NEzxE9yB2GAzc9vq%2BUgIXsJ63NS&X-Amz-Signature=afead1b6d61a17ca6832d7557516b45de814e71d7969d87c249cf6aa348c2725&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DBKXZ7X%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhGJAgesh1mpMUYMt0ovh27yDFZGZjzJ3dzdVSI5pY1AiEA%2FPOxUWBJt8lyMKLMYTus74ol9ft1ZyysgHBQPPEpZbcqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsDFae6hPE5JMR01CrcA%2BS6%2B%2BcrNncblp3NHkfhvCh1%2B7dch3Eq9tL%2BUeZGkYW4kJn4UmG4OT6GVvaFox%2FuN4%2BukD67rj%2BkfEtDCEXzqK3P0sx56WnAN0Ds8jrIIjdQJmmjKwKML6GjbZuHBiB%2FE6LmoRvbbt7v9FD9QOkCxDeZLvyin%2F%2FrkbqhENSQmujdiHnv4XTjEobEUTahhhCC3ZS8xDlyLVqbcrS0g3UI%2BRBlwcHaJV8RRKeluFbWG5x4OtC5D6i%2FqLIpCZICzuTTBfW7zv%2FIb3v0FFUIcVW9xqERoJeB1B1GQtYRJEnVIuVdzkH7%2FpkJxeRXsEZCB47IKS8%2FbVq7MRMx%2FveOOC6TCDxNvhjLMJ4MU8yttKLtzhFxZyqA7jKYchhhCpsUHo8VRFCWBbnjpKwRKl2latKI3PZMFdRyHOwVhs5Ksdu0T2FjqzjFlt4JhMSaFEPwKQxqq9MEtOEvP6pwqbmSoXwhYcnRR2W1%2BEbXjqzpEa0glUkLc0Cu1UCKwCMT%2BaWGyLujXdnK%2BigKctM9oHLE1b1QRleF2aVX7aUzI3HV1HeKxVhm3ViO%2Bou1uf2EwGc0bGKj9%2FQ9B48twhrp3rtUmi3J2NI9hCaj%2B0AzPTeFnHZz%2B78a9ysU3yvVW3u0M4FyMPjys70GOqUBCJOYyCVTe5DoYvprnJt6B4ssIUjEPs5eNrDsHfFGrqeZBVYhKya0WmaqFcaVF9dkilQBIqQlSnGAF5NDySqJBgu17vpO8%2BiglimqiiOJPvvtfHGrBqJwlGPJDmB9cU0WQdclV24k7mjoD3Dh0wQnSEVq23H8pZeQQrO0iTBGKviM7UEY8%2FgunQYa59qlgBjY9NEzxE9yB2GAzc9vq%2BUgIXsJ63NS&X-Amz-Signature=c06d5d66d45f818a1eb9bc99fef1a556dce33557a2e1ecf63f1451afe204ba01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
