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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWFDKSK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ43NYazpcK4AVjQiQy60ZVNOx5lKsSA17%2FHuIhlq%2B8QIgYH4MFkKpyBhiJkTFmWxgNaPlTngdXY7KpT0%2BWhcVtDgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfc%2BAeUuc6uzB8XbCrcA9yVBNY86sSfvUmcmImScC35GMKQD6HuEH8yIQ0dAsvAf%2BHXEyeA0p%2Bpq2t94Xi6o7t2cOZjn85zcSTWalqPV36wHDqsPvSqiXfsJMsLmTbtNgqjaQwsa1909N%2BWKSvvL1x%2BGD0BZ36eIEeUJGULnAz0iARbEw1cVYKDb1aXMj4kZFZB6%2Frgtn8al4tWdF1Mn2PF8Ou8%2BhFe8k6URrofO2bB3%2F8OdH8lL625gWmdbXQt3SkVygaEy1O40hWVvZjgVomyO%2FlaGhGLPsKr%2BJ%2FjhxRfzJXE2YW6YoygEUjzHDoShZAPeML9KQVdBzOUBaAVJMnP%2FCCTnX9zqLU9RBizrx9XhRcXCaB8LCxjGo6ru5TbyMFxI91bcXtgu0zbHR5SJ20y6gcnaZyT%2FI75uNMZBdABJdiXOZKMHUdAIIO1TF2Bj%2FOa2JlxOz3rYxB2IjiR1QQYMLH72tGmqYE5wdM7MZ5%2F9Zeu7diAA8iWW5Bz0t8ZE5kci4W9yItQnJYmkO%2FZbeN3fboygfH2njyxwo5r13jfuJZslR91g7YlJIpXUdFj7xdcjKa8Eu%2Fea5tUbdfoSSwwAqiOJwF9PK%2Bp0NISU%2FsRAE4TrOPCx7O0XUMFcm95PbvSkkfdFIbbfLcDMNzUw8MGOqUBIeKGZ%2FMVvVnnricgy3CAka5lTZ2ADtkoLtVwaG%2FoNDuVaHq1XvotA90r6c6vkdy9rkA52F%2FsnLRcHkbx0ihf4xhe6J5jR7ZzpawyDWf8FQRt5CLFea2uWO7GeTtt3a1vNq0qVgk7J7jS2tlMV%2F5x8t1sgoEMBQpBoqzWHXQXuU2ShMIiIrQ59aijxm2cZVwiCW0XJOhoAzsBFZ4K7noXdO42x4Sg&X-Amz-Signature=0616164799a7b5ddc9eb39a66506c54b65d4a8b4c06239e3d80acf09e281e839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWFDKSK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ43NYazpcK4AVjQiQy60ZVNOx5lKsSA17%2FHuIhlq%2B8QIgYH4MFkKpyBhiJkTFmWxgNaPlTngdXY7KpT0%2BWhcVtDgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfc%2BAeUuc6uzB8XbCrcA9yVBNY86sSfvUmcmImScC35GMKQD6HuEH8yIQ0dAsvAf%2BHXEyeA0p%2Bpq2t94Xi6o7t2cOZjn85zcSTWalqPV36wHDqsPvSqiXfsJMsLmTbtNgqjaQwsa1909N%2BWKSvvL1x%2BGD0BZ36eIEeUJGULnAz0iARbEw1cVYKDb1aXMj4kZFZB6%2Frgtn8al4tWdF1Mn2PF8Ou8%2BhFe8k6URrofO2bB3%2F8OdH8lL625gWmdbXQt3SkVygaEy1O40hWVvZjgVomyO%2FlaGhGLPsKr%2BJ%2FjhxRfzJXE2YW6YoygEUjzHDoShZAPeML9KQVdBzOUBaAVJMnP%2FCCTnX9zqLU9RBizrx9XhRcXCaB8LCxjGo6ru5TbyMFxI91bcXtgu0zbHR5SJ20y6gcnaZyT%2FI75uNMZBdABJdiXOZKMHUdAIIO1TF2Bj%2FOa2JlxOz3rYxB2IjiR1QQYMLH72tGmqYE5wdM7MZ5%2F9Zeu7diAA8iWW5Bz0t8ZE5kci4W9yItQnJYmkO%2FZbeN3fboygfH2njyxwo5r13jfuJZslR91g7YlJIpXUdFj7xdcjKa8Eu%2Fea5tUbdfoSSwwAqiOJwF9PK%2Bp0NISU%2FsRAE4TrOPCx7O0XUMFcm95PbvSkkfdFIbbfLcDMNzUw8MGOqUBIeKGZ%2FMVvVnnricgy3CAka5lTZ2ADtkoLtVwaG%2FoNDuVaHq1XvotA90r6c6vkdy9rkA52F%2FsnLRcHkbx0ihf4xhe6J5jR7ZzpawyDWf8FQRt5CLFea2uWO7GeTtt3a1vNq0qVgk7J7jS2tlMV%2F5x8t1sgoEMBQpBoqzWHXQXuU2ShMIiIrQ59aijxm2cZVwiCW0XJOhoAzsBFZ4K7noXdO42x4Sg&X-Amz-Signature=50430f0ccdde681daed918f27f1c0fb45ec5053d5fde0057bfdfd0c9c0e5556b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWFDKSK%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ43NYazpcK4AVjQiQy60ZVNOx5lKsSA17%2FHuIhlq%2B8QIgYH4MFkKpyBhiJkTFmWxgNaPlTngdXY7KpT0%2BWhcVtDgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfc%2BAeUuc6uzB8XbCrcA9yVBNY86sSfvUmcmImScC35GMKQD6HuEH8yIQ0dAsvAf%2BHXEyeA0p%2Bpq2t94Xi6o7t2cOZjn85zcSTWalqPV36wHDqsPvSqiXfsJMsLmTbtNgqjaQwsa1909N%2BWKSvvL1x%2BGD0BZ36eIEeUJGULnAz0iARbEw1cVYKDb1aXMj4kZFZB6%2Frgtn8al4tWdF1Mn2PF8Ou8%2BhFe8k6URrofO2bB3%2F8OdH8lL625gWmdbXQt3SkVygaEy1O40hWVvZjgVomyO%2FlaGhGLPsKr%2BJ%2FjhxRfzJXE2YW6YoygEUjzHDoShZAPeML9KQVdBzOUBaAVJMnP%2FCCTnX9zqLU9RBizrx9XhRcXCaB8LCxjGo6ru5TbyMFxI91bcXtgu0zbHR5SJ20y6gcnaZyT%2FI75uNMZBdABJdiXOZKMHUdAIIO1TF2Bj%2FOa2JlxOz3rYxB2IjiR1QQYMLH72tGmqYE5wdM7MZ5%2F9Zeu7diAA8iWW5Bz0t8ZE5kci4W9yItQnJYmkO%2FZbeN3fboygfH2njyxwo5r13jfuJZslR91g7YlJIpXUdFj7xdcjKa8Eu%2Fea5tUbdfoSSwwAqiOJwF9PK%2Bp0NISU%2FsRAE4TrOPCx7O0XUMFcm95PbvSkkfdFIbbfLcDMNzUw8MGOqUBIeKGZ%2FMVvVnnricgy3CAka5lTZ2ADtkoLtVwaG%2FoNDuVaHq1XvotA90r6c6vkdy9rkA52F%2FsnLRcHkbx0ihf4xhe6J5jR7ZzpawyDWf8FQRt5CLFea2uWO7GeTtt3a1vNq0qVgk7J7jS2tlMV%2F5x8t1sgoEMBQpBoqzWHXQXuU2ShMIiIrQ59aijxm2cZVwiCW0XJOhoAzsBFZ4K7noXdO42x4Sg&X-Amz-Signature=fde52c84eef12a919f4df00cb87415c9eda70310ccf7f1c8d3d510fa0dd080e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
