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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E43FBKA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFL5GWX5tBHj6RcdZOUbRngqe0ozR0TcpYE59s07mW1%2BAiEAt3QZdvIEXxOp6FPdjIsWoAk6Ui1GVPSTIybY0LmgaTYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdTKd8NCUii9UaPaircAzXipHJ4A35usxGGHcQb3%2FTiEHln5ZI8w7d8Sh9UxRLYXB0fWGEvGynSfsn8Raxeapy82wvgVfbzVJXy%2FUeAK7mJvRFuRfRmtvmunXvMEOom4D5YE5MC4HfxxXGJ6Cn1BXG2Jw6X8mPaIilw4naRRLfnLN7h8JTCIG0ZcRSCxNbowPoachA8ZfbywEuXb6YcCCcAQ1mGGYRdxZ6RhQdgbhvhD4M4pXx7FG0zJ8T4lqIqU8BIJSLdP2nmvS7pEBKPHfL3ZYdCL0%2Foj2dLh4G2Zo2MPmYfxOSaEXZI9Z7KYgli%2Fo6FaMIaD0u7n7qabHYBgAf4sgkQowQnPIbXR3RN7D9jG6zaFwMbd%2B8suFxTsFsR9AX3ApQ09b3X5Rf8d5I7Ph%2F8BBo728ipxKrrDj%2BtVVgKQn%2BrJbpa9D3LnFWrOuhw3Qp2imuGY1hq8z9JtGsp5DgVVKOAWP4QFBoRQRI%2BhLWcp9fmKFiWoWugKAhcJWkGF7xYEpv%2BRGn3RLa%2FvnCX%2FnvngOkMwzx05A7S73xm1vmXpNDDx4df6mkG%2BqzuUiZ9HjwLUo7sw3KJYf6aR4RT6LQz05xDV4b2h%2BkhKbPiKU0J7nmWvndyzWwkor9vLeMfP43nVH9L9URz6Kb1MLDShL4GOqUBWj2AwhTVBGs5x9d1%2Fd6wA98GfQwbGhvjeUDi6w5pRbXAqz9I8NAvbVYujAXlGmKLVZhxb2lar0ZH0roYGBxPWI7unFBuBYU4zCO0udgZ9bzgXV4DQTYWBotaDibdjxySMs5JGnrro3uHfQkv5JxABuXgCi%2BAmTIro99hI5Y0s2vd2ptoAyoXhYdBl8AUj%2B0dew00v0n%2BCDmiuY%2FKvD9Z1YHkMeuR&X-Amz-Signature=aa7322146d438beb2ddfdde66c5cae2d3c5c4772458afff4b8fd9585767f5039&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E43FBKA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFL5GWX5tBHj6RcdZOUbRngqe0ozR0TcpYE59s07mW1%2BAiEAt3QZdvIEXxOp6FPdjIsWoAk6Ui1GVPSTIybY0LmgaTYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdTKd8NCUii9UaPaircAzXipHJ4A35usxGGHcQb3%2FTiEHln5ZI8w7d8Sh9UxRLYXB0fWGEvGynSfsn8Raxeapy82wvgVfbzVJXy%2FUeAK7mJvRFuRfRmtvmunXvMEOom4D5YE5MC4HfxxXGJ6Cn1BXG2Jw6X8mPaIilw4naRRLfnLN7h8JTCIG0ZcRSCxNbowPoachA8ZfbywEuXb6YcCCcAQ1mGGYRdxZ6RhQdgbhvhD4M4pXx7FG0zJ8T4lqIqU8BIJSLdP2nmvS7pEBKPHfL3ZYdCL0%2Foj2dLh4G2Zo2MPmYfxOSaEXZI9Z7KYgli%2Fo6FaMIaD0u7n7qabHYBgAf4sgkQowQnPIbXR3RN7D9jG6zaFwMbd%2B8suFxTsFsR9AX3ApQ09b3X5Rf8d5I7Ph%2F8BBo728ipxKrrDj%2BtVVgKQn%2BrJbpa9D3LnFWrOuhw3Qp2imuGY1hq8z9JtGsp5DgVVKOAWP4QFBoRQRI%2BhLWcp9fmKFiWoWugKAhcJWkGF7xYEpv%2BRGn3RLa%2FvnCX%2FnvngOkMwzx05A7S73xm1vmXpNDDx4df6mkG%2BqzuUiZ9HjwLUo7sw3KJYf6aR4RT6LQz05xDV4b2h%2BkhKbPiKU0J7nmWvndyzWwkor9vLeMfP43nVH9L9URz6Kb1MLDShL4GOqUBWj2AwhTVBGs5x9d1%2Fd6wA98GfQwbGhvjeUDi6w5pRbXAqz9I8NAvbVYujAXlGmKLVZhxb2lar0ZH0roYGBxPWI7unFBuBYU4zCO0udgZ9bzgXV4DQTYWBotaDibdjxySMs5JGnrro3uHfQkv5JxABuXgCi%2BAmTIro99hI5Y0s2vd2ptoAyoXhYdBl8AUj%2B0dew00v0n%2BCDmiuY%2FKvD9Z1YHkMeuR&X-Amz-Signature=273511b7588d58119adf2d765fd2b262d5d9c5f5ab0926f797735c0ae3710934&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E43FBKA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFL5GWX5tBHj6RcdZOUbRngqe0ozR0TcpYE59s07mW1%2BAiEAt3QZdvIEXxOp6FPdjIsWoAk6Ui1GVPSTIybY0LmgaTYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdTKd8NCUii9UaPaircAzXipHJ4A35usxGGHcQb3%2FTiEHln5ZI8w7d8Sh9UxRLYXB0fWGEvGynSfsn8Raxeapy82wvgVfbzVJXy%2FUeAK7mJvRFuRfRmtvmunXvMEOom4D5YE5MC4HfxxXGJ6Cn1BXG2Jw6X8mPaIilw4naRRLfnLN7h8JTCIG0ZcRSCxNbowPoachA8ZfbywEuXb6YcCCcAQ1mGGYRdxZ6RhQdgbhvhD4M4pXx7FG0zJ8T4lqIqU8BIJSLdP2nmvS7pEBKPHfL3ZYdCL0%2Foj2dLh4G2Zo2MPmYfxOSaEXZI9Z7KYgli%2Fo6FaMIaD0u7n7qabHYBgAf4sgkQowQnPIbXR3RN7D9jG6zaFwMbd%2B8suFxTsFsR9AX3ApQ09b3X5Rf8d5I7Ph%2F8BBo728ipxKrrDj%2BtVVgKQn%2BrJbpa9D3LnFWrOuhw3Qp2imuGY1hq8z9JtGsp5DgVVKOAWP4QFBoRQRI%2BhLWcp9fmKFiWoWugKAhcJWkGF7xYEpv%2BRGn3RLa%2FvnCX%2FnvngOkMwzx05A7S73xm1vmXpNDDx4df6mkG%2BqzuUiZ9HjwLUo7sw3KJYf6aR4RT6LQz05xDV4b2h%2BkhKbPiKU0J7nmWvndyzWwkor9vLeMfP43nVH9L9URz6Kb1MLDShL4GOqUBWj2AwhTVBGs5x9d1%2Fd6wA98GfQwbGhvjeUDi6w5pRbXAqz9I8NAvbVYujAXlGmKLVZhxb2lar0ZH0roYGBxPWI7unFBuBYU4zCO0udgZ9bzgXV4DQTYWBotaDibdjxySMs5JGnrro3uHfQkv5JxABuXgCi%2BAmTIro99hI5Y0s2vd2ptoAyoXhYdBl8AUj%2B0dew00v0n%2BCDmiuY%2FKvD9Z1YHkMeuR&X-Amz-Signature=4676f61c16b3b4d65c7056a2d93ab809496507e8d5774caef067ea1db94e41a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
