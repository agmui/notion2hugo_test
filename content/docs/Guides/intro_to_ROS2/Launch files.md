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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWSGZ3L%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNqbZlC%2Bc811rRaPEdwemM%2Bl34LKezRw%2BMnL53oaPqmAiEA8JWqR%2FrkPUhEwL%2FCUGazd4avm8eRo7ps4%2BeuAqoJROcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5SU1mPQoEX84ExECrcA5TjuP7qLFPa2lQhQyBZTo%2FjGU1PAmXLSYRO8VPzD3iU7cBWzwdxFGXb2xkhtjT%2FDbjjMSvQ6ovidLm5WDmFF5Qn%2BsvZj%2FKtWogZe%2BBB%2BD0q2n9QZ5bqOgYXP1llx%2FlLcmFiYOQFJyQB3A%2FV6HtuOq9OqJg%2F9U5CY6j%2B23%2F7NVeh1FqinP6hATc9QqglgBTGUFi2pvjInxfQYsAPKA2DmaF9vltB5dey73KBneQRp9rGJ%2F2%2FbUcgySP5OUprAumNN%2FrlvGe0lhS8GFAtklSpUTW7CWD1yvba0FC%2BnaEdby19kOVbaceE6XUIlqrakSGDxmvLTQ4S8j4%2F%2F7%2BXcScgLGajx6%2BdKevkFaW7RSDe5eounNgVDDs9muRnMPJfaA3qRzKjqyXIorvcO%2BZ9qF11u5pmtRdxhcPNYI6GvBN7S7a7Ej7ZZCGmk2cpFMbTi9ff4LmTmyLIPT22ZbksELwxQvnavECrENTPfCL9FaUmmndncCoq%2Bd6%2FrA7V4bKUGj4pQR%2FwhHgYfJf9BO39%2BTdSCUUjYSWYILWOzC0QA8reX8v8SfPinTQQqnNi4c0M4jTKxQ6gNC6wsUA4BiPH%2FoYecxv8rG95ww8%2BNgCsFamy4k8I05FyYBdskvRlzIkKMJS16b0GOqUBZeD92hftYZdL3Z4EIOxl8gs6aqPsaFGd%2FTCNAx7CIYPDKxNya2mcqOkb%2Bw6BgtmZcdrDEJcavhJ%2B2wVa3HYutYqZ29o1m2jiXunSkhRyZJLiFZz%2Beg9iHW7VTHK1538oGLHouyzgLJkoVdZXoCVjFMclFUa7xtQirDa1rXTzkWIBzb54fl%2FBx%2Bl%2FQxmfyvKHx3C%2Fwg2YTtZi2cshGfrakYTf%2BVw3&X-Amz-Signature=d6f353428e2fcbb5cdcd8f95685166e2f7c2bbc0d6a5c5cce897f24e15749f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWSGZ3L%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNqbZlC%2Bc811rRaPEdwemM%2Bl34LKezRw%2BMnL53oaPqmAiEA8JWqR%2FrkPUhEwL%2FCUGazd4avm8eRo7ps4%2BeuAqoJROcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5SU1mPQoEX84ExECrcA5TjuP7qLFPa2lQhQyBZTo%2FjGU1PAmXLSYRO8VPzD3iU7cBWzwdxFGXb2xkhtjT%2FDbjjMSvQ6ovidLm5WDmFF5Qn%2BsvZj%2FKtWogZe%2BBB%2BD0q2n9QZ5bqOgYXP1llx%2FlLcmFiYOQFJyQB3A%2FV6HtuOq9OqJg%2F9U5CY6j%2B23%2F7NVeh1FqinP6hATc9QqglgBTGUFi2pvjInxfQYsAPKA2DmaF9vltB5dey73KBneQRp9rGJ%2F2%2FbUcgySP5OUprAumNN%2FrlvGe0lhS8GFAtklSpUTW7CWD1yvba0FC%2BnaEdby19kOVbaceE6XUIlqrakSGDxmvLTQ4S8j4%2F%2F7%2BXcScgLGajx6%2BdKevkFaW7RSDe5eounNgVDDs9muRnMPJfaA3qRzKjqyXIorvcO%2BZ9qF11u5pmtRdxhcPNYI6GvBN7S7a7Ej7ZZCGmk2cpFMbTi9ff4LmTmyLIPT22ZbksELwxQvnavECrENTPfCL9FaUmmndncCoq%2Bd6%2FrA7V4bKUGj4pQR%2FwhHgYfJf9BO39%2BTdSCUUjYSWYILWOzC0QA8reX8v8SfPinTQQqnNi4c0M4jTKxQ6gNC6wsUA4BiPH%2FoYecxv8rG95ww8%2BNgCsFamy4k8I05FyYBdskvRlzIkKMJS16b0GOqUBZeD92hftYZdL3Z4EIOxl8gs6aqPsaFGd%2FTCNAx7CIYPDKxNya2mcqOkb%2Bw6BgtmZcdrDEJcavhJ%2B2wVa3HYutYqZ29o1m2jiXunSkhRyZJLiFZz%2Beg9iHW7VTHK1538oGLHouyzgLJkoVdZXoCVjFMclFUa7xtQirDa1rXTzkWIBzb54fl%2FBx%2Bl%2FQxmfyvKHx3C%2Fwg2YTtZi2cshGfrakYTf%2BVw3&X-Amz-Signature=b15041f41f1e731b16e2503345788d0df435e1a76c7de8012a556d636c68b31e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UWSGZ3L%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNqbZlC%2Bc811rRaPEdwemM%2Bl34LKezRw%2BMnL53oaPqmAiEA8JWqR%2FrkPUhEwL%2FCUGazd4avm8eRo7ps4%2BeuAqoJROcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5SU1mPQoEX84ExECrcA5TjuP7qLFPa2lQhQyBZTo%2FjGU1PAmXLSYRO8VPzD3iU7cBWzwdxFGXb2xkhtjT%2FDbjjMSvQ6ovidLm5WDmFF5Qn%2BsvZj%2FKtWogZe%2BBB%2BD0q2n9QZ5bqOgYXP1llx%2FlLcmFiYOQFJyQB3A%2FV6HtuOq9OqJg%2F9U5CY6j%2B23%2F7NVeh1FqinP6hATc9QqglgBTGUFi2pvjInxfQYsAPKA2DmaF9vltB5dey73KBneQRp9rGJ%2F2%2FbUcgySP5OUprAumNN%2FrlvGe0lhS8GFAtklSpUTW7CWD1yvba0FC%2BnaEdby19kOVbaceE6XUIlqrakSGDxmvLTQ4S8j4%2F%2F7%2BXcScgLGajx6%2BdKevkFaW7RSDe5eounNgVDDs9muRnMPJfaA3qRzKjqyXIorvcO%2BZ9qF11u5pmtRdxhcPNYI6GvBN7S7a7Ej7ZZCGmk2cpFMbTi9ff4LmTmyLIPT22ZbksELwxQvnavECrENTPfCL9FaUmmndncCoq%2Bd6%2FrA7V4bKUGj4pQR%2FwhHgYfJf9BO39%2BTdSCUUjYSWYILWOzC0QA8reX8v8SfPinTQQqnNi4c0M4jTKxQ6gNC6wsUA4BiPH%2FoYecxv8rG95ww8%2BNgCsFamy4k8I05FyYBdskvRlzIkKMJS16b0GOqUBZeD92hftYZdL3Z4EIOxl8gs6aqPsaFGd%2FTCNAx7CIYPDKxNya2mcqOkb%2Bw6BgtmZcdrDEJcavhJ%2B2wVa3HYutYqZ29o1m2jiXunSkhRyZJLiFZz%2Beg9iHW7VTHK1538oGLHouyzgLJkoVdZXoCVjFMclFUa7xtQirDa1rXTzkWIBzb54fl%2FBx%2Bl%2FQxmfyvKHx3C%2Fwg2YTtZi2cshGfrakYTf%2BVw3&X-Amz-Signature=55e8bfa9c0478af68440e209969c9c5862b32234d3ceb12f36c2307e51fc3b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
