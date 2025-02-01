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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW6J673%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiNGHvbNeG9Dd%2BBfaLZ0dsUHHK8AOEAbysehQB3ti%2B3AiEAntCe9A0QQSpUZ9LOqiO0%2BDqKog%2FDZcFuD4IKLL63M6gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcCUs3qO1EVj9OEXyrcA2RnhBdELLcVWqxFol%2B6fVcz6vSCdcuppAXGsPMjgUeqv1H%2BeG4rclULIh5Gs56Nul8pw7f%2FfeR4qq%2FD6nN28wEx3FnbbkBYYyo0Jbaf52Zb7kqO%2B%2FLbyv3tLisrEJl0nGkLy8NS%2FPOW0FAreY1nUe8GRB693iDxgt8na1yDb7qMDhpuSRY2jWSXFgOBbTJwjXoCAw5M0HO9VUvObAKZdCj2OdtdipIS%2Ba75JtWD1v%2FjWFieD1F5%2Fd0wwE15wnX%2FKUoMFoKg3GqNZ4mBHDj%2BLz2M7pvbwXLmwPWlczmqcdRlHTUbm5AdWC9pb%2BXBhRBatXM1k35yu0nRBEd%2BsMAlKCzBVmbVPzKMH7A%2BSoXk94R5MbCKL%2F%2F0TpXTQvkP7NDF2Mpo03cewsSx6pGr3cs1ETu8g4fE7l7xl%2BTJJ0weAWg5Y%2B0NnHukrDU1e8TQ7RIPwASt5bZHSPx2ScfvubxQsgFuNqyoDAv8p7nTJYRzmcAPomV6nH2DaLOwsfe6oYIJh32yne5L%2FxO5KL5ycq5Pr1hK5QEn4OUz9FgOhwQyufsnvzR5OMMMYxhRKfZIWkAEgeqFeMLjK489zA7%2B%2B97bo3RFxQEZVVVnyF9S4IEshZsTFwwsCTs8jqnjvOqxMNOl97wGOqUB2Erue0jytd%2B8xo4UTml46hESClKb8651MVXkcMXnn67BkUf5ujchSyYtIYYS2SCwOSJpEBEjkmMJ4QqP5xTV4kpiqgsWCWhR7kLfvXa7R%2B%2BU%2Bu0uK%2BS9RvmZ3jXxpWLITSaOL3onG32UZtY%2BkarMeOxLzJhMmUiAgh6g%2FKGrZjbK2qhqpr%2F9CWtbqr3lPbIQS82ylSMDxWtvjjHb4X%2FhEGnfPVSP&X-Amz-Signature=399246a43b0ca510b3d42811aec516368b14b8e14041ae4418cad0b549419c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW6J673%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiNGHvbNeG9Dd%2BBfaLZ0dsUHHK8AOEAbysehQB3ti%2B3AiEAntCe9A0QQSpUZ9LOqiO0%2BDqKog%2FDZcFuD4IKLL63M6gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcCUs3qO1EVj9OEXyrcA2RnhBdELLcVWqxFol%2B6fVcz6vSCdcuppAXGsPMjgUeqv1H%2BeG4rclULIh5Gs56Nul8pw7f%2FfeR4qq%2FD6nN28wEx3FnbbkBYYyo0Jbaf52Zb7kqO%2B%2FLbyv3tLisrEJl0nGkLy8NS%2FPOW0FAreY1nUe8GRB693iDxgt8na1yDb7qMDhpuSRY2jWSXFgOBbTJwjXoCAw5M0HO9VUvObAKZdCj2OdtdipIS%2Ba75JtWD1v%2FjWFieD1F5%2Fd0wwE15wnX%2FKUoMFoKg3GqNZ4mBHDj%2BLz2M7pvbwXLmwPWlczmqcdRlHTUbm5AdWC9pb%2BXBhRBatXM1k35yu0nRBEd%2BsMAlKCzBVmbVPzKMH7A%2BSoXk94R5MbCKL%2F%2F0TpXTQvkP7NDF2Mpo03cewsSx6pGr3cs1ETu8g4fE7l7xl%2BTJJ0weAWg5Y%2B0NnHukrDU1e8TQ7RIPwASt5bZHSPx2ScfvubxQsgFuNqyoDAv8p7nTJYRzmcAPomV6nH2DaLOwsfe6oYIJh32yne5L%2FxO5KL5ycq5Pr1hK5QEn4OUz9FgOhwQyufsnvzR5OMMMYxhRKfZIWkAEgeqFeMLjK489zA7%2B%2B97bo3RFxQEZVVVnyF9S4IEshZsTFwwsCTs8jqnjvOqxMNOl97wGOqUB2Erue0jytd%2B8xo4UTml46hESClKb8651MVXkcMXnn67BkUf5ujchSyYtIYYS2SCwOSJpEBEjkmMJ4QqP5xTV4kpiqgsWCWhR7kLfvXa7R%2B%2BU%2Bu0uK%2BS9RvmZ3jXxpWLITSaOL3onG32UZtY%2BkarMeOxLzJhMmUiAgh6g%2FKGrZjbK2qhqpr%2F9CWtbqr3lPbIQS82ylSMDxWtvjjHb4X%2FhEGnfPVSP&X-Amz-Signature=a380d0b17474fbf42f7943b45d5ef2fac8a127dd661675f363b2aff78ab2525d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW6J673%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiNGHvbNeG9Dd%2BBfaLZ0dsUHHK8AOEAbysehQB3ti%2B3AiEAntCe9A0QQSpUZ9LOqiO0%2BDqKog%2FDZcFuD4IKLL63M6gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcCUs3qO1EVj9OEXyrcA2RnhBdELLcVWqxFol%2B6fVcz6vSCdcuppAXGsPMjgUeqv1H%2BeG4rclULIh5Gs56Nul8pw7f%2FfeR4qq%2FD6nN28wEx3FnbbkBYYyo0Jbaf52Zb7kqO%2B%2FLbyv3tLisrEJl0nGkLy8NS%2FPOW0FAreY1nUe8GRB693iDxgt8na1yDb7qMDhpuSRY2jWSXFgOBbTJwjXoCAw5M0HO9VUvObAKZdCj2OdtdipIS%2Ba75JtWD1v%2FjWFieD1F5%2Fd0wwE15wnX%2FKUoMFoKg3GqNZ4mBHDj%2BLz2M7pvbwXLmwPWlczmqcdRlHTUbm5AdWC9pb%2BXBhRBatXM1k35yu0nRBEd%2BsMAlKCzBVmbVPzKMH7A%2BSoXk94R5MbCKL%2F%2F0TpXTQvkP7NDF2Mpo03cewsSx6pGr3cs1ETu8g4fE7l7xl%2BTJJ0weAWg5Y%2B0NnHukrDU1e8TQ7RIPwASt5bZHSPx2ScfvubxQsgFuNqyoDAv8p7nTJYRzmcAPomV6nH2DaLOwsfe6oYIJh32yne5L%2FxO5KL5ycq5Pr1hK5QEn4OUz9FgOhwQyufsnvzR5OMMMYxhRKfZIWkAEgeqFeMLjK489zA7%2B%2B97bo3RFxQEZVVVnyF9S4IEshZsTFwwsCTs8jqnjvOqxMNOl97wGOqUB2Erue0jytd%2B8xo4UTml46hESClKb8651MVXkcMXnn67BkUf5ujchSyYtIYYS2SCwOSJpEBEjkmMJ4QqP5xTV4kpiqgsWCWhR7kLfvXa7R%2B%2BU%2Bu0uK%2BS9RvmZ3jXxpWLITSaOL3onG32UZtY%2BkarMeOxLzJhMmUiAgh6g%2FKGrZjbK2qhqpr%2F9CWtbqr3lPbIQS82ylSMDxWtvjjHb4X%2FhEGnfPVSP&X-Amz-Signature=672aa8ffdf0cdd663846621141f09c2f2dd8f6c3dc9571ca76d96c7fa79bac4c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
