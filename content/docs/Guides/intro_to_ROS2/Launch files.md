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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQEVITIU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIH8lyFIUJG0JkKNL5vEOCnkyfvagKZVWhMw24wk8D%2FqBAiAoApVMIE%2B16yf3jMV12JHJOmYWG%2FtKmJ0EyxwyZu36lCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMGwyDOf4nMgNJp0O%2BKtwDg6JnKfbTn8NcD1pxhIT2bk30bLCayWM%2F%2FccFZZrDHiVd0hx4173bmEKCEcbsPdpibb9U%2ByJ0EGRLJktegvz8xXRAoSxSijceOOSXjGGeld8HNti3fnR4l6YQ%2Folp4JJ00RahJjuVttI7vqOm1rCVkCW6MscMrmMS1QcNeUvgEpw9RtW3PB%2BesXh5Vaj8O2RHS5Y4b4GgkuX5qLjrPbSW5N1m6b7tHcyWonGdZ0ed5jUTWN0d7qjfkqr%2BHNxYb4QbdXDIV7wgaLOebny9jO1euFdu79ASbfeA%2BMYHMovEAaOBcTBc5eIvcwMKhV2ufhhmZA%2FigCsr6hKDh77Ab6OOyGHewAj0bmZQetpwuyXZYEbNJEUbDlMy5EoWAownN4kbW%2FdpTCskTodQeCrttythuznWIIxH4N4GFks8nZNzF0cigjDYJ3XcGSaXaC07SNtdUO3FMQNpECGBamH02YS7p01Peanh7wSM8AY2p5ZnJDHzFm2Gmdlmp%2FHTZCtLhjQX0HItqv7d9KL%2FImDjOF5kNPXIeGqNLI7%2BQdNJUVlK4EKZSseQmbRxn6AwtEkugCVYAal4HCPU%2FolMlB5FmX3Yg%2BkSHGyyyMrMT3Od4%2BZXdGxrHwLYD1%2BJfZZqYtUwl%2Fb%2BvQY6pgHPwJ4TGVfFh6uXIsA7R1eZFk245sBvpWnQmNRfrys%2FBUNb9cZR5xWpkvakd%2FYlRiSZkcUnvYM%2FaLYw4gaFW4GotE4DMoOEuFsYa4mrG6DjJbZhv3cyUOLImI7NQEc74rpoU2ZZCLVMaKrjOwH7BEsNZ4awvXF6Rp6dgCXM2p5itaamCxP5fjTNE4godI%2BxU0rgxlKNNuVpx1XBlbnLvV5%2F6c0Qo%2Foi&X-Amz-Signature=59ee0db3c98d279c2a71db41fc28a6fd0690e8c38996a64606ff75e65d24e6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQEVITIU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIH8lyFIUJG0JkKNL5vEOCnkyfvagKZVWhMw24wk8D%2FqBAiAoApVMIE%2B16yf3jMV12JHJOmYWG%2FtKmJ0EyxwyZu36lCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMGwyDOf4nMgNJp0O%2BKtwDg6JnKfbTn8NcD1pxhIT2bk30bLCayWM%2F%2FccFZZrDHiVd0hx4173bmEKCEcbsPdpibb9U%2ByJ0EGRLJktegvz8xXRAoSxSijceOOSXjGGeld8HNti3fnR4l6YQ%2Folp4JJ00RahJjuVttI7vqOm1rCVkCW6MscMrmMS1QcNeUvgEpw9RtW3PB%2BesXh5Vaj8O2RHS5Y4b4GgkuX5qLjrPbSW5N1m6b7tHcyWonGdZ0ed5jUTWN0d7qjfkqr%2BHNxYb4QbdXDIV7wgaLOebny9jO1euFdu79ASbfeA%2BMYHMovEAaOBcTBc5eIvcwMKhV2ufhhmZA%2FigCsr6hKDh77Ab6OOyGHewAj0bmZQetpwuyXZYEbNJEUbDlMy5EoWAownN4kbW%2FdpTCskTodQeCrttythuznWIIxH4N4GFks8nZNzF0cigjDYJ3XcGSaXaC07SNtdUO3FMQNpECGBamH02YS7p01Peanh7wSM8AY2p5ZnJDHzFm2Gmdlmp%2FHTZCtLhjQX0HItqv7d9KL%2FImDjOF5kNPXIeGqNLI7%2BQdNJUVlK4EKZSseQmbRxn6AwtEkugCVYAal4HCPU%2FolMlB5FmX3Yg%2BkSHGyyyMrMT3Od4%2BZXdGxrHwLYD1%2BJfZZqYtUwl%2Fb%2BvQY6pgHPwJ4TGVfFh6uXIsA7R1eZFk245sBvpWnQmNRfrys%2FBUNb9cZR5xWpkvakd%2FYlRiSZkcUnvYM%2FaLYw4gaFW4GotE4DMoOEuFsYa4mrG6DjJbZhv3cyUOLImI7NQEc74rpoU2ZZCLVMaKrjOwH7BEsNZ4awvXF6Rp6dgCXM2p5itaamCxP5fjTNE4godI%2BxU0rgxlKNNuVpx1XBlbnLvV5%2F6c0Qo%2Foi&X-Amz-Signature=d0b3e9ad88ee2863bc7bf7fcee11467cb15db8518c1cfb5b67f8ba382c256de2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQEVITIU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIH8lyFIUJG0JkKNL5vEOCnkyfvagKZVWhMw24wk8D%2FqBAiAoApVMIE%2B16yf3jMV12JHJOmYWG%2FtKmJ0EyxwyZu36lCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMGwyDOf4nMgNJp0O%2BKtwDg6JnKfbTn8NcD1pxhIT2bk30bLCayWM%2F%2FccFZZrDHiVd0hx4173bmEKCEcbsPdpibb9U%2ByJ0EGRLJktegvz8xXRAoSxSijceOOSXjGGeld8HNti3fnR4l6YQ%2Folp4JJ00RahJjuVttI7vqOm1rCVkCW6MscMrmMS1QcNeUvgEpw9RtW3PB%2BesXh5Vaj8O2RHS5Y4b4GgkuX5qLjrPbSW5N1m6b7tHcyWonGdZ0ed5jUTWN0d7qjfkqr%2BHNxYb4QbdXDIV7wgaLOebny9jO1euFdu79ASbfeA%2BMYHMovEAaOBcTBc5eIvcwMKhV2ufhhmZA%2FigCsr6hKDh77Ab6OOyGHewAj0bmZQetpwuyXZYEbNJEUbDlMy5EoWAownN4kbW%2FdpTCskTodQeCrttythuznWIIxH4N4GFks8nZNzF0cigjDYJ3XcGSaXaC07SNtdUO3FMQNpECGBamH02YS7p01Peanh7wSM8AY2p5ZnJDHzFm2Gmdlmp%2FHTZCtLhjQX0HItqv7d9KL%2FImDjOF5kNPXIeGqNLI7%2BQdNJUVlK4EKZSseQmbRxn6AwtEkugCVYAal4HCPU%2FolMlB5FmX3Yg%2BkSHGyyyMrMT3Od4%2BZXdGxrHwLYD1%2BJfZZqYtUwl%2Fb%2BvQY6pgHPwJ4TGVfFh6uXIsA7R1eZFk245sBvpWnQmNRfrys%2FBUNb9cZR5xWpkvakd%2FYlRiSZkcUnvYM%2FaLYw4gaFW4GotE4DMoOEuFsYa4mrG6DjJbZhv3cyUOLImI7NQEc74rpoU2ZZCLVMaKrjOwH7BEsNZ4awvXF6Rp6dgCXM2p5itaamCxP5fjTNE4godI%2BxU0rgxlKNNuVpx1XBlbnLvV5%2F6c0Qo%2Foi&X-Amz-Signature=f0442052663b59dde6ab35524483d3bbe3586b40691e49569001312f51d9c47d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
