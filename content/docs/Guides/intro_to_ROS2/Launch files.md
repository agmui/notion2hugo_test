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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKIBMDZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1NveN98a%2BXisBF8%2FVNJHJDPEXHXj6K0%2BqsFGz3zP7oAiEAhHXZ5L6SqyeTHPmtri2s1brIiNIU8g9OMB9LZlvcQAsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5vGyh5H7reyWgaByrcA87r1R846qqustkKySlp3Ip3X71DCFWCl%2FzVvYAqUA637UsvuCx0W%2FM7rN7tyVxW%2FxvPKWmIZgtLtRuRLumjC521tBP%2FG05VHv1rsUE57LsYmvyhLgCKuiwD8zu%2FmQpWG6LiqTbhKTGMYv38rBMOWqdYlwfEdgT8%2FykUOB5zb%2FQHPE2lijOdxxeenEqjk11kbZB8h2fG1GDEWLG7d6ZfOvfZUaoFi89awkXuEceOFpt80UZH4M%2Bx2PH%2BwLTiYhLwcnYIYIZcnS68PoLYTiKFSa7c9%2BR0dlMopwyfoJ3kt7tAfMDzAgTy1Gp6h8QjxeqPy%2BVbhatpqwbhfbdrntgj7YwMscXQ%2BujA4W2E5VWKiKdbD7UlBVWf9KY%2F5c8g6z57jb4wRFGCBjGjkNohBVYvwjCXOKTeYRq19pQd2FdlIifeiyue5Vr%2Bzy9PoM9XaA5fLhql%2BdyBeZZG4c4dh2ocsV5VfUypn6W6BIDJUC71f8VcwjHqYtUGnmCvxqgjmxc6JamsgjTSer79eKjfHH8yq8whbmwQ9yseChKP9QE1WxM2nFYQNwCnzkjKfCczpEuk4mVR9rOyjKrNpqj%2FaHg9YuZaALB9IBTZbhbSQcafZ%2BPEihyJQd01XCVedtOhMOKVnMIGOqUBZPddUSDGWEOfXMmXV%2FPPytY0%2FuQ%2BRSpSWjiShAIfjn8Sr8bP4Bubx68sjI%2B8lKHbp35urr9XMbLNfs%2FOPrmLgYERGY0BB24WDVzJde7F63oodCVHXmJg3tOJ1lFPJ9vxxmqGdczyUNEl4wzCbrNzd%2BYgqQ62b1fWAl2ONFAymUQnMYxUYPWFHaLNU0fNE48ev8UdkaAzX5JtqMuhVQimzJ5oa7cK&X-Amz-Signature=5cecd85c030b3c07bc09f012a1dc12f695b507153f93d2e3578a43909c10e6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKIBMDZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1NveN98a%2BXisBF8%2FVNJHJDPEXHXj6K0%2BqsFGz3zP7oAiEAhHXZ5L6SqyeTHPmtri2s1brIiNIU8g9OMB9LZlvcQAsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5vGyh5H7reyWgaByrcA87r1R846qqustkKySlp3Ip3X71DCFWCl%2FzVvYAqUA637UsvuCx0W%2FM7rN7tyVxW%2FxvPKWmIZgtLtRuRLumjC521tBP%2FG05VHv1rsUE57LsYmvyhLgCKuiwD8zu%2FmQpWG6LiqTbhKTGMYv38rBMOWqdYlwfEdgT8%2FykUOB5zb%2FQHPE2lijOdxxeenEqjk11kbZB8h2fG1GDEWLG7d6ZfOvfZUaoFi89awkXuEceOFpt80UZH4M%2Bx2PH%2BwLTiYhLwcnYIYIZcnS68PoLYTiKFSa7c9%2BR0dlMopwyfoJ3kt7tAfMDzAgTy1Gp6h8QjxeqPy%2BVbhatpqwbhfbdrntgj7YwMscXQ%2BujA4W2E5VWKiKdbD7UlBVWf9KY%2F5c8g6z57jb4wRFGCBjGjkNohBVYvwjCXOKTeYRq19pQd2FdlIifeiyue5Vr%2Bzy9PoM9XaA5fLhql%2BdyBeZZG4c4dh2ocsV5VfUypn6W6BIDJUC71f8VcwjHqYtUGnmCvxqgjmxc6JamsgjTSer79eKjfHH8yq8whbmwQ9yseChKP9QE1WxM2nFYQNwCnzkjKfCczpEuk4mVR9rOyjKrNpqj%2FaHg9YuZaALB9IBTZbhbSQcafZ%2BPEihyJQd01XCVedtOhMOKVnMIGOqUBZPddUSDGWEOfXMmXV%2FPPytY0%2FuQ%2BRSpSWjiShAIfjn8Sr8bP4Bubx68sjI%2B8lKHbp35urr9XMbLNfs%2FOPrmLgYERGY0BB24WDVzJde7F63oodCVHXmJg3tOJ1lFPJ9vxxmqGdczyUNEl4wzCbrNzd%2BYgqQ62b1fWAl2ONFAymUQnMYxUYPWFHaLNU0fNE48ev8UdkaAzX5JtqMuhVQimzJ5oa7cK&X-Amz-Signature=f5b5aa57d045d9cefb63af8ef26e9ca0cd1d698c5bb509e0035ae9693b9003dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKIBMDZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1NveN98a%2BXisBF8%2FVNJHJDPEXHXj6K0%2BqsFGz3zP7oAiEAhHXZ5L6SqyeTHPmtri2s1brIiNIU8g9OMB9LZlvcQAsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5vGyh5H7reyWgaByrcA87r1R846qqustkKySlp3Ip3X71DCFWCl%2FzVvYAqUA637UsvuCx0W%2FM7rN7tyVxW%2FxvPKWmIZgtLtRuRLumjC521tBP%2FG05VHv1rsUE57LsYmvyhLgCKuiwD8zu%2FmQpWG6LiqTbhKTGMYv38rBMOWqdYlwfEdgT8%2FykUOB5zb%2FQHPE2lijOdxxeenEqjk11kbZB8h2fG1GDEWLG7d6ZfOvfZUaoFi89awkXuEceOFpt80UZH4M%2Bx2PH%2BwLTiYhLwcnYIYIZcnS68PoLYTiKFSa7c9%2BR0dlMopwyfoJ3kt7tAfMDzAgTy1Gp6h8QjxeqPy%2BVbhatpqwbhfbdrntgj7YwMscXQ%2BujA4W2E5VWKiKdbD7UlBVWf9KY%2F5c8g6z57jb4wRFGCBjGjkNohBVYvwjCXOKTeYRq19pQd2FdlIifeiyue5Vr%2Bzy9PoM9XaA5fLhql%2BdyBeZZG4c4dh2ocsV5VfUypn6W6BIDJUC71f8VcwjHqYtUGnmCvxqgjmxc6JamsgjTSer79eKjfHH8yq8whbmwQ9yseChKP9QE1WxM2nFYQNwCnzkjKfCczpEuk4mVR9rOyjKrNpqj%2FaHg9YuZaALB9IBTZbhbSQcafZ%2BPEihyJQd01XCVedtOhMOKVnMIGOqUBZPddUSDGWEOfXMmXV%2FPPytY0%2FuQ%2BRSpSWjiShAIfjn8Sr8bP4Bubx68sjI%2B8lKHbp35urr9XMbLNfs%2FOPrmLgYERGY0BB24WDVzJde7F63oodCVHXmJg3tOJ1lFPJ9vxxmqGdczyUNEl4wzCbrNzd%2BYgqQ62b1fWAl2ONFAymUQnMYxUYPWFHaLNU0fNE48ev8UdkaAzX5JtqMuhVQimzJ5oa7cK&X-Amz-Signature=1c8e7df953f65dae535fc4b89148b9f690506cab69e00fff8cb1ad095a80e0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
