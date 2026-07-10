---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFP6H4UF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGa7eh11xTUjRoa5bc0AqfB%2BKs0acrocfuD8SIGsTJMzAiAP5eieWlS4Mb%2BWYWQejFm%2BcQ3nOzyzy%2B9MDSU2%2B1L8cCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bs0x4CqD03gP6VFjKtwDQhti%2FjjDeBj5iUhHAyxtj3WA8xkM5B5Yfnvp9jhnhriCB1GZDgLbm%2Bf21Zs%2BVI9d7BmkZD6k%2FTURsLFx44Eo8FgPzBoPbRrYzxqN5WVkAvXKN%2FDv7teed%2By8GbeSYj3qP7PPl4rzolbUgyJ%2B%2FmWSj8Qi2RjohSR12RHvSAriZfVXgdqDQnxNoubhXxU2cVW90P9vxgVrVtwIdBf3S6zsiM1slIHxhAR0evTsv%2BWqCSrBZjImrwYy%2FzIrc2X4IMBL9GdzQjMMNf4e6JedNxK1C6jcs9q79%2BbAybfFCCKAoiKSL3eiRAcT5gniqCiA7nh7STCx%2BcFViJNq7krMwAFGUoYlRKNURfl9yT%2BXguLa8TxMNt0vhWjP3rd5kpOEAyNBR3fD4I5OasfSchjJLuDIL6INnbUSJST2IM%2FIERxHpF2FDzHovExFkcgwk5SYCiYe5A4wZO0xpcGcZr3Cfu7to2Yqww3pFHZali%2BqJqDda6a7BSr6c0mDilh72h0VTemEqgxkWln1jtfIhf0Pff5ZclLl5NoPYsHlZdmKAEi9jXdjZr9KGb6tkDVf4dq3QiTOtqfkLzA6LcZ3fhES5bk%2Brpi%2Budwd7xv%2BbuIroxGM5OQST%2FNLcZu6Xuzcf8ow0LXB0gY6pgGPgwIc%2FAnFr3937wS8jFOsUk2tOBf4bUTMA%2BDu5tvd8PSvhLrLQIgSXdTR84nTamBYiomnvyZ7JmabhVyDG63GUnSDgQ4eoFEjN8agadTpZJU6vmCe3PK23bh7uoIfqX%2BZ1JgGonZliASRNbK2nAVzWlAK5cXxVOv6NvSOnOoFRTC8BmmzhCaMkCmZ7WwdHVYk1Lp1rkkE2iG9aUJ0PpiYB59F7d4z&X-Amz-Signature=661834728cfc11f8ce885ed5bdc7d9c4192cbb79985d87173c809936ef2f7e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFP6H4UF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGa7eh11xTUjRoa5bc0AqfB%2BKs0acrocfuD8SIGsTJMzAiAP5eieWlS4Mb%2BWYWQejFm%2BcQ3nOzyzy%2B9MDSU2%2B1L8cCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bs0x4CqD03gP6VFjKtwDQhti%2FjjDeBj5iUhHAyxtj3WA8xkM5B5Yfnvp9jhnhriCB1GZDgLbm%2Bf21Zs%2BVI9d7BmkZD6k%2FTURsLFx44Eo8FgPzBoPbRrYzxqN5WVkAvXKN%2FDv7teed%2By8GbeSYj3qP7PPl4rzolbUgyJ%2B%2FmWSj8Qi2RjohSR12RHvSAriZfVXgdqDQnxNoubhXxU2cVW90P9vxgVrVtwIdBf3S6zsiM1slIHxhAR0evTsv%2BWqCSrBZjImrwYy%2FzIrc2X4IMBL9GdzQjMMNf4e6JedNxK1C6jcs9q79%2BbAybfFCCKAoiKSL3eiRAcT5gniqCiA7nh7STCx%2BcFViJNq7krMwAFGUoYlRKNURfl9yT%2BXguLa8TxMNt0vhWjP3rd5kpOEAyNBR3fD4I5OasfSchjJLuDIL6INnbUSJST2IM%2FIERxHpF2FDzHovExFkcgwk5SYCiYe5A4wZO0xpcGcZr3Cfu7to2Yqww3pFHZali%2BqJqDda6a7BSr6c0mDilh72h0VTemEqgxkWln1jtfIhf0Pff5ZclLl5NoPYsHlZdmKAEi9jXdjZr9KGb6tkDVf4dq3QiTOtqfkLzA6LcZ3fhES5bk%2Brpi%2Budwd7xv%2BbuIroxGM5OQST%2FNLcZu6Xuzcf8ow0LXB0gY6pgGPgwIc%2FAnFr3937wS8jFOsUk2tOBf4bUTMA%2BDu5tvd8PSvhLrLQIgSXdTR84nTamBYiomnvyZ7JmabhVyDG63GUnSDgQ4eoFEjN8agadTpZJU6vmCe3PK23bh7uoIfqX%2BZ1JgGonZliASRNbK2nAVzWlAK5cXxVOv6NvSOnOoFRTC8BmmzhCaMkCmZ7WwdHVYk1Lp1rkkE2iG9aUJ0PpiYB59F7d4z&X-Amz-Signature=5345b21527a240bf8ba1a7dbbea30654d6071360757840102e8da3f057e6de8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFP6H4UF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGa7eh11xTUjRoa5bc0AqfB%2BKs0acrocfuD8SIGsTJMzAiAP5eieWlS4Mb%2BWYWQejFm%2BcQ3nOzyzy%2B9MDSU2%2B1L8cCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bs0x4CqD03gP6VFjKtwDQhti%2FjjDeBj5iUhHAyxtj3WA8xkM5B5Yfnvp9jhnhriCB1GZDgLbm%2Bf21Zs%2BVI9d7BmkZD6k%2FTURsLFx44Eo8FgPzBoPbRrYzxqN5WVkAvXKN%2FDv7teed%2By8GbeSYj3qP7PPl4rzolbUgyJ%2B%2FmWSj8Qi2RjohSR12RHvSAriZfVXgdqDQnxNoubhXxU2cVW90P9vxgVrVtwIdBf3S6zsiM1slIHxhAR0evTsv%2BWqCSrBZjImrwYy%2FzIrc2X4IMBL9GdzQjMMNf4e6JedNxK1C6jcs9q79%2BbAybfFCCKAoiKSL3eiRAcT5gniqCiA7nh7STCx%2BcFViJNq7krMwAFGUoYlRKNURfl9yT%2BXguLa8TxMNt0vhWjP3rd5kpOEAyNBR3fD4I5OasfSchjJLuDIL6INnbUSJST2IM%2FIERxHpF2FDzHovExFkcgwk5SYCiYe5A4wZO0xpcGcZr3Cfu7to2Yqww3pFHZali%2BqJqDda6a7BSr6c0mDilh72h0VTemEqgxkWln1jtfIhf0Pff5ZclLl5NoPYsHlZdmKAEi9jXdjZr9KGb6tkDVf4dq3QiTOtqfkLzA6LcZ3fhES5bk%2Brpi%2Budwd7xv%2BbuIroxGM5OQST%2FNLcZu6Xuzcf8ow0LXB0gY6pgGPgwIc%2FAnFr3937wS8jFOsUk2tOBf4bUTMA%2BDu5tvd8PSvhLrLQIgSXdTR84nTamBYiomnvyZ7JmabhVyDG63GUnSDgQ4eoFEjN8agadTpZJU6vmCe3PK23bh7uoIfqX%2BZ1JgGonZliASRNbK2nAVzWlAK5cXxVOv6NvSOnOoFRTC8BmmzhCaMkCmZ7WwdHVYk1Lp1rkkE2iG9aUJ0PpiYB59F7d4z&X-Amz-Signature=f88b0fd3e89a86455a01fbd063425602c939848df142d1a95594a0f188f07dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
