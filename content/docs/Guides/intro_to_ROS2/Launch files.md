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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DD47RO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC%2BBFFv2v3i9J1lfNHznCSzN48sJ%2FGjEOwxbrHd9snJ2gIgQfRNlgCqO4M04fCV8NXJAxYuv73HGZju4Mk%2BgCuDY0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKc4NqrfclfpLlKOjSrcA7Ww7L66PVZ7gqVNlcl7Ra3iK%2BXbFYtuWc7r7OK78gFGbUBtUE1LEuo6IdfOrnW61AWFW1ILB19y2oDCnEOV9WHsTMGrpVw5duyj3Rw2AQxYY0u2348krdIgLPllX%2FQBeEwktBGN1NgrCYgRppZSsK5EGBGGOy3Z%2BT5QmgNTAq9mLOpgCAgm5p1KoAVK2ysq4rBa5aLq%2FhQ8yXUO2uesgfkcR2x82dGebQ7Tmc9hwYaxH4bb29coBZUjQlpHHgl5c3zOWxrjzGa%2B54GklC9ETy4RyO5m51%2FidcHt78%2B%2BRvytZZlDfC5Yjdit3pipP3Ln0aSkOJkJIgRdvAIN263UIssJu8i3ERbfhpWH0cQe9TpLcUBJtCe5GtpSznO1fut5kS6RjWkiF9kAUgl1G%2FkOo3CAFRUuguDpXhGtKWVf1OB7da%2BudKrY9kj%2FwQhDL5ONuo6Y6B3%2Btfsfum6TqXdwIf%2FkSXvQ72Cic6BzMV4pHrXDmQTrs5UBnpnja5tOY%2Bo7nEnTkxcP3BMTv4BKoRsuYrDFBWjaO2Su8KJ0xaSnIwOqlfp5fDuD3el1iVfSPo7zHNmqRde3VQHKFnLLwtW3L9YKWkhdwtRcNitWw253rL%2FznVI%2B8k0WLMy4%2BG0OMPS%2B4sMGOqUBUC8mSZoAARcUPeGeWzfF%2FRlaDvOZkRe8PoWvVqxWMPpe%2FdQXOn7AmRTlzkH0II9O7ZJERDG8Z2D%2B37M4uKdsQf5qQMmxphZTvluTcPeU4S4ojPUAhNj8kJTbZJwDVdDumqkAaQbIs%2Fgi34u4qXdo3LrGntWOD0AihA%2BTeeUg%2BG7XqloMx%2FfdSm751OjbXEnfAb%2FwSnwu9KEHnKBMYc%2Fzsfn6md%2BV&X-Amz-Signature=1ac58fe4aae14cf8d0c9622a8ecce70f0ecfbfebe60793ee59756fd156d9463f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DD47RO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC%2BBFFv2v3i9J1lfNHznCSzN48sJ%2FGjEOwxbrHd9snJ2gIgQfRNlgCqO4M04fCV8NXJAxYuv73HGZju4Mk%2BgCuDY0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKc4NqrfclfpLlKOjSrcA7Ww7L66PVZ7gqVNlcl7Ra3iK%2BXbFYtuWc7r7OK78gFGbUBtUE1LEuo6IdfOrnW61AWFW1ILB19y2oDCnEOV9WHsTMGrpVw5duyj3Rw2AQxYY0u2348krdIgLPllX%2FQBeEwktBGN1NgrCYgRppZSsK5EGBGGOy3Z%2BT5QmgNTAq9mLOpgCAgm5p1KoAVK2ysq4rBa5aLq%2FhQ8yXUO2uesgfkcR2x82dGebQ7Tmc9hwYaxH4bb29coBZUjQlpHHgl5c3zOWxrjzGa%2B54GklC9ETy4RyO5m51%2FidcHt78%2B%2BRvytZZlDfC5Yjdit3pipP3Ln0aSkOJkJIgRdvAIN263UIssJu8i3ERbfhpWH0cQe9TpLcUBJtCe5GtpSznO1fut5kS6RjWkiF9kAUgl1G%2FkOo3CAFRUuguDpXhGtKWVf1OB7da%2BudKrY9kj%2FwQhDL5ONuo6Y6B3%2Btfsfum6TqXdwIf%2FkSXvQ72Cic6BzMV4pHrXDmQTrs5UBnpnja5tOY%2Bo7nEnTkxcP3BMTv4BKoRsuYrDFBWjaO2Su8KJ0xaSnIwOqlfp5fDuD3el1iVfSPo7zHNmqRde3VQHKFnLLwtW3L9YKWkhdwtRcNitWw253rL%2FznVI%2B8k0WLMy4%2BG0OMPS%2B4sMGOqUBUC8mSZoAARcUPeGeWzfF%2FRlaDvOZkRe8PoWvVqxWMPpe%2FdQXOn7AmRTlzkH0II9O7ZJERDG8Z2D%2B37M4uKdsQf5qQMmxphZTvluTcPeU4S4ojPUAhNj8kJTbZJwDVdDumqkAaQbIs%2Fgi34u4qXdo3LrGntWOD0AihA%2BTeeUg%2BG7XqloMx%2FfdSm751OjbXEnfAb%2FwSnwu9KEHnKBMYc%2Fzsfn6md%2BV&X-Amz-Signature=d1eb9599366d934718db0608b4ee11f773384c341e0e7a5e87928ff85a50df75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4DD47RO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC%2BBFFv2v3i9J1lfNHznCSzN48sJ%2FGjEOwxbrHd9snJ2gIgQfRNlgCqO4M04fCV8NXJAxYuv73HGZju4Mk%2BgCuDY0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKc4NqrfclfpLlKOjSrcA7Ww7L66PVZ7gqVNlcl7Ra3iK%2BXbFYtuWc7r7OK78gFGbUBtUE1LEuo6IdfOrnW61AWFW1ILB19y2oDCnEOV9WHsTMGrpVw5duyj3Rw2AQxYY0u2348krdIgLPllX%2FQBeEwktBGN1NgrCYgRppZSsK5EGBGGOy3Z%2BT5QmgNTAq9mLOpgCAgm5p1KoAVK2ysq4rBa5aLq%2FhQ8yXUO2uesgfkcR2x82dGebQ7Tmc9hwYaxH4bb29coBZUjQlpHHgl5c3zOWxrjzGa%2B54GklC9ETy4RyO5m51%2FidcHt78%2B%2BRvytZZlDfC5Yjdit3pipP3Ln0aSkOJkJIgRdvAIN263UIssJu8i3ERbfhpWH0cQe9TpLcUBJtCe5GtpSznO1fut5kS6RjWkiF9kAUgl1G%2FkOo3CAFRUuguDpXhGtKWVf1OB7da%2BudKrY9kj%2FwQhDL5ONuo6Y6B3%2Btfsfum6TqXdwIf%2FkSXvQ72Cic6BzMV4pHrXDmQTrs5UBnpnja5tOY%2Bo7nEnTkxcP3BMTv4BKoRsuYrDFBWjaO2Su8KJ0xaSnIwOqlfp5fDuD3el1iVfSPo7zHNmqRde3VQHKFnLLwtW3L9YKWkhdwtRcNitWw253rL%2FznVI%2B8k0WLMy4%2BG0OMPS%2B4sMGOqUBUC8mSZoAARcUPeGeWzfF%2FRlaDvOZkRe8PoWvVqxWMPpe%2FdQXOn7AmRTlzkH0II9O7ZJERDG8Z2D%2B37M4uKdsQf5qQMmxphZTvluTcPeU4S4ojPUAhNj8kJTbZJwDVdDumqkAaQbIs%2Fgi34u4qXdo3LrGntWOD0AihA%2BTeeUg%2BG7XqloMx%2FfdSm751OjbXEnfAb%2FwSnwu9KEHnKBMYc%2Fzsfn6md%2BV&X-Amz-Signature=098fdbbab2b9e495d90eab0c8da1afa052b3b3b9e0d9bbc869937bb3124c0927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
