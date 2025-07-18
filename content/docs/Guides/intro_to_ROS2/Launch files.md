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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMME6BA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDHDxyGJ67N534AjhKg6UkKlp%2FhPNTF6xRmfOf6KtwWxgIhAKScnm1GtP4U8BJLmoxZL%2F8dBGWR0VKvnxgqguPHBuzqKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnDVy%2BtF%2Buo5JKqAYq3AN9gLNaQmiyrZ7CEIYCVswE%2FS7c9UiWKvUhFtr7hqmRNccxTwZFEjmSKmo7f8aBPxFmRcjTA%2BrNA0PQarPvRD%2FqUcnuU%2F0aKaXuB86b0iJ9GV1oJyNA3rWKiAJAO9KdE45fDfP56%2BxvbXv0fD6Z%2BaXseE51IeIDZ%2F9NpS5shbATAhB32hpJ52%2Bq9GukU5bUkbcnruinocc0b58JasWPqHe8BYD7%2Fcv%2FDLiUf7Euc1Iq4sBsC3PEsfP2XeEyA4kWf88TvAKS179pE179zpCytdrlVIPl5n23Q3qTn7um%2BH%2BWDBGXfRvNMhUBQI%2FZ6SkvUXX8cTx2o6dqyEjwCaOzP26l0aIP%2BlTti2%2BFzMLnexa0M%2F7Q2SEi6Fme2d8WVSubBPbZkdQXUNl8yv2FYi4o3sOaKahwRdILkVncBIoMlqVODRNwsjetIgGi3M90hpL4vN9tRSJM6RQs3%2Bg%2B278mU7XKH%2ByweYxOsb7xUxjZOzt3r32mJEBnRwYbMDsm5m38x0lTxbBOU%2BsngjTP9UyCggfxDl7cGKq9ctl%2BJE0yql3xLgELoJk5JpiXl1r8GUUxZT9xmB4KwOVV8H8V33hPKkf3mgGt6JiJaNpjsjTxsmOBHAlVbGTSQL4ggem%2BpjCiiOfDBjqkAWm4GbYsTn1%2FifjmtuvtOykYz4rPcqOmpjzEVhBlvZUlviF57n4Ds4zRCEyIJRyFPSHzLCwDdqbCKj5UC2k4AL%2BTNi34lg999vI2p1Y9jbm0gNkk9Jc03p21Abs8gwa6t3XdZYUipsKLzsVy2DJkYPTxbqLuQ1%2FPWbHKW1LEfXxrpiIDhIhKwTs7itGe8lUcCEW8wHAw8m8eYeDP5Fau0salMD24&X-Amz-Signature=ccb80c803d6efc425e1dcc5482f30c3fb41c0552fad964209c5b9dba69105179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMME6BA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDHDxyGJ67N534AjhKg6UkKlp%2FhPNTF6xRmfOf6KtwWxgIhAKScnm1GtP4U8BJLmoxZL%2F8dBGWR0VKvnxgqguPHBuzqKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnDVy%2BtF%2Buo5JKqAYq3AN9gLNaQmiyrZ7CEIYCVswE%2FS7c9UiWKvUhFtr7hqmRNccxTwZFEjmSKmo7f8aBPxFmRcjTA%2BrNA0PQarPvRD%2FqUcnuU%2F0aKaXuB86b0iJ9GV1oJyNA3rWKiAJAO9KdE45fDfP56%2BxvbXv0fD6Z%2BaXseE51IeIDZ%2F9NpS5shbATAhB32hpJ52%2Bq9GukU5bUkbcnruinocc0b58JasWPqHe8BYD7%2Fcv%2FDLiUf7Euc1Iq4sBsC3PEsfP2XeEyA4kWf88TvAKS179pE179zpCytdrlVIPl5n23Q3qTn7um%2BH%2BWDBGXfRvNMhUBQI%2FZ6SkvUXX8cTx2o6dqyEjwCaOzP26l0aIP%2BlTti2%2BFzMLnexa0M%2F7Q2SEi6Fme2d8WVSubBPbZkdQXUNl8yv2FYi4o3sOaKahwRdILkVncBIoMlqVODRNwsjetIgGi3M90hpL4vN9tRSJM6RQs3%2Bg%2B278mU7XKH%2ByweYxOsb7xUxjZOzt3r32mJEBnRwYbMDsm5m38x0lTxbBOU%2BsngjTP9UyCggfxDl7cGKq9ctl%2BJE0yql3xLgELoJk5JpiXl1r8GUUxZT9xmB4KwOVV8H8V33hPKkf3mgGt6JiJaNpjsjTxsmOBHAlVbGTSQL4ggem%2BpjCiiOfDBjqkAWm4GbYsTn1%2FifjmtuvtOykYz4rPcqOmpjzEVhBlvZUlviF57n4Ds4zRCEyIJRyFPSHzLCwDdqbCKj5UC2k4AL%2BTNi34lg999vI2p1Y9jbm0gNkk9Jc03p21Abs8gwa6t3XdZYUipsKLzsVy2DJkYPTxbqLuQ1%2FPWbHKW1LEfXxrpiIDhIhKwTs7itGe8lUcCEW8wHAw8m8eYeDP5Fau0salMD24&X-Amz-Signature=b1f129a2a2c64131fa32b6854491c2841c22ba6e8d46503b009fc0ac824481fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMME6BA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDHDxyGJ67N534AjhKg6UkKlp%2FhPNTF6xRmfOf6KtwWxgIhAKScnm1GtP4U8BJLmoxZL%2F8dBGWR0VKvnxgqguPHBuzqKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnDVy%2BtF%2Buo5JKqAYq3AN9gLNaQmiyrZ7CEIYCVswE%2FS7c9UiWKvUhFtr7hqmRNccxTwZFEjmSKmo7f8aBPxFmRcjTA%2BrNA0PQarPvRD%2FqUcnuU%2F0aKaXuB86b0iJ9GV1oJyNA3rWKiAJAO9KdE45fDfP56%2BxvbXv0fD6Z%2BaXseE51IeIDZ%2F9NpS5shbATAhB32hpJ52%2Bq9GukU5bUkbcnruinocc0b58JasWPqHe8BYD7%2Fcv%2FDLiUf7Euc1Iq4sBsC3PEsfP2XeEyA4kWf88TvAKS179pE179zpCytdrlVIPl5n23Q3qTn7um%2BH%2BWDBGXfRvNMhUBQI%2FZ6SkvUXX8cTx2o6dqyEjwCaOzP26l0aIP%2BlTti2%2BFzMLnexa0M%2F7Q2SEi6Fme2d8WVSubBPbZkdQXUNl8yv2FYi4o3sOaKahwRdILkVncBIoMlqVODRNwsjetIgGi3M90hpL4vN9tRSJM6RQs3%2Bg%2B278mU7XKH%2ByweYxOsb7xUxjZOzt3r32mJEBnRwYbMDsm5m38x0lTxbBOU%2BsngjTP9UyCggfxDl7cGKq9ctl%2BJE0yql3xLgELoJk5JpiXl1r8GUUxZT9xmB4KwOVV8H8V33hPKkf3mgGt6JiJaNpjsjTxsmOBHAlVbGTSQL4ggem%2BpjCiiOfDBjqkAWm4GbYsTn1%2FifjmtuvtOykYz4rPcqOmpjzEVhBlvZUlviF57n4Ds4zRCEyIJRyFPSHzLCwDdqbCKj5UC2k4AL%2BTNi34lg999vI2p1Y9jbm0gNkk9Jc03p21Abs8gwa6t3XdZYUipsKLzsVy2DJkYPTxbqLuQ1%2FPWbHKW1LEfXxrpiIDhIhKwTs7itGe8lUcCEW8wHAw8m8eYeDP5Fau0salMD24&X-Amz-Signature=ecbb3bf7a9ebdad4f4df430d1efb6f9c2eebb886fd38718d5b29e91fa74c0bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
