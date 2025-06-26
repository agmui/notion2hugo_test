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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EI6RJB5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDeIFiaTGa1SfVjUmW8WLXIjpH7MGgQmfzO1ZzTsAllBQIhAPdxCSXmMr1iUTa2oeoFjInRIgos3L1xl%2F%2BGiswznQB0Kv8DCGQQABoMNjM3NDIzMTgzODA1IgwE2VJp4lCa0lk44vIq3AOIyGy7HxJmCrd%2FnE3Jxn%2BLR6pS7jIFwkiiSnobO1%2BTS4V5WY6B0yjJH7LUTpnl%2BAQdTdzVHKbn4Zb%2FfLUkWr0X0ToYE6k3zaHtaWD7H5%2BlPU5%2BDcV7UJMDvrwq1%2BepONBiyqwcFIVKUNniyV9rFCdyjlWm69klmeOgTcD8yTGk%2BJLX9EzfZ0YUWvpiuZNKYML75eOVNr%2BmtE6L76yHJe3Y%2B4bmS4IuCcPbul24wp4YM1N0dK3qbg%2FF2vb3DwR4czM4NY6m2yXRUQ5DISaAQXZXOmKZ%2FliDNFPQsF5XMDEihibaTG%2FFF26D8wL5HWGXZJ69zZ%2FibIpXlr9WotWcQVXaoe4%2BHM24xzmiXBnW2GAyYooL1QuFGEzZD7wDKxiaQvYyVhWkcCgR6vbF%2BcJh82P9%2BwaeitgGPmyXCl5kCen18Bh50t82UA2CVyBnoSw29Ex9YayBj0INXa8yCBXrCbPZzDT57RDt%2FQLBg6WLOngZ1Op3B%2FxYNij4gYLaQ1w5r0laz4sPXW%2Br%2F3k%2Bl%2Fgy3C8IQH5cjxRZTmmHfZL%2FouOyg3pryeo5jjc4tXRDYyHwsD16kocNPhWWV8UqVd1FU4wu%2Fy7%2Fzgr2e%2FV5vpZiwLTJKxemXyeFgrwHjaQQCzCfq%2FbCBjqkAS9xQG1Ly%2BjZOJDtf0OwPcb7xxrjn8gm%2BaXPKTeeYIwOXj7zAm%2FYJms0ZqcanKINMiQ1OWD9YcafZaGAkCkzD3%2BMyrBpERi6GcU9R2vfqxz79yBYk71JhIZvXyciXugdP8YflCTPpyHOO0NAfaf2H4ytOtFEsTDmrcy2rlU0gpgINLsvHLlrBccAPNgPkCttf47z7nNHh5pVlAdXIuOke1ifywie&X-Amz-Signature=78348a50320102c0542a7d0dd0f906fe34aa58b63ac02054ac95c29f5e5360af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EI6RJB5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDeIFiaTGa1SfVjUmW8WLXIjpH7MGgQmfzO1ZzTsAllBQIhAPdxCSXmMr1iUTa2oeoFjInRIgos3L1xl%2F%2BGiswznQB0Kv8DCGQQABoMNjM3NDIzMTgzODA1IgwE2VJp4lCa0lk44vIq3AOIyGy7HxJmCrd%2FnE3Jxn%2BLR6pS7jIFwkiiSnobO1%2BTS4V5WY6B0yjJH7LUTpnl%2BAQdTdzVHKbn4Zb%2FfLUkWr0X0ToYE6k3zaHtaWD7H5%2BlPU5%2BDcV7UJMDvrwq1%2BepONBiyqwcFIVKUNniyV9rFCdyjlWm69klmeOgTcD8yTGk%2BJLX9EzfZ0YUWvpiuZNKYML75eOVNr%2BmtE6L76yHJe3Y%2B4bmS4IuCcPbul24wp4YM1N0dK3qbg%2FF2vb3DwR4czM4NY6m2yXRUQ5DISaAQXZXOmKZ%2FliDNFPQsF5XMDEihibaTG%2FFF26D8wL5HWGXZJ69zZ%2FibIpXlr9WotWcQVXaoe4%2BHM24xzmiXBnW2GAyYooL1QuFGEzZD7wDKxiaQvYyVhWkcCgR6vbF%2BcJh82P9%2BwaeitgGPmyXCl5kCen18Bh50t82UA2CVyBnoSw29Ex9YayBj0INXa8yCBXrCbPZzDT57RDt%2FQLBg6WLOngZ1Op3B%2FxYNij4gYLaQ1w5r0laz4sPXW%2Br%2F3k%2Bl%2Fgy3C8IQH5cjxRZTmmHfZL%2FouOyg3pryeo5jjc4tXRDYyHwsD16kocNPhWWV8UqVd1FU4wu%2Fy7%2Fzgr2e%2FV5vpZiwLTJKxemXyeFgrwHjaQQCzCfq%2FbCBjqkAS9xQG1Ly%2BjZOJDtf0OwPcb7xxrjn8gm%2BaXPKTeeYIwOXj7zAm%2FYJms0ZqcanKINMiQ1OWD9YcafZaGAkCkzD3%2BMyrBpERi6GcU9R2vfqxz79yBYk71JhIZvXyciXugdP8YflCTPpyHOO0NAfaf2H4ytOtFEsTDmrcy2rlU0gpgINLsvHLlrBccAPNgPkCttf47z7nNHh5pVlAdXIuOke1ifywie&X-Amz-Signature=2c7cf3de7ee4f3fdfc80d863eac659ae7549394d61db4807318f39c9ca52491f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EI6RJB5%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDeIFiaTGa1SfVjUmW8WLXIjpH7MGgQmfzO1ZzTsAllBQIhAPdxCSXmMr1iUTa2oeoFjInRIgos3L1xl%2F%2BGiswznQB0Kv8DCGQQABoMNjM3NDIzMTgzODA1IgwE2VJp4lCa0lk44vIq3AOIyGy7HxJmCrd%2FnE3Jxn%2BLR6pS7jIFwkiiSnobO1%2BTS4V5WY6B0yjJH7LUTpnl%2BAQdTdzVHKbn4Zb%2FfLUkWr0X0ToYE6k3zaHtaWD7H5%2BlPU5%2BDcV7UJMDvrwq1%2BepONBiyqwcFIVKUNniyV9rFCdyjlWm69klmeOgTcD8yTGk%2BJLX9EzfZ0YUWvpiuZNKYML75eOVNr%2BmtE6L76yHJe3Y%2B4bmS4IuCcPbul24wp4YM1N0dK3qbg%2FF2vb3DwR4czM4NY6m2yXRUQ5DISaAQXZXOmKZ%2FliDNFPQsF5XMDEihibaTG%2FFF26D8wL5HWGXZJ69zZ%2FibIpXlr9WotWcQVXaoe4%2BHM24xzmiXBnW2GAyYooL1QuFGEzZD7wDKxiaQvYyVhWkcCgR6vbF%2BcJh82P9%2BwaeitgGPmyXCl5kCen18Bh50t82UA2CVyBnoSw29Ex9YayBj0INXa8yCBXrCbPZzDT57RDt%2FQLBg6WLOngZ1Op3B%2FxYNij4gYLaQ1w5r0laz4sPXW%2Br%2F3k%2Bl%2Fgy3C8IQH5cjxRZTmmHfZL%2FouOyg3pryeo5jjc4tXRDYyHwsD16kocNPhWWV8UqVd1FU4wu%2Fy7%2Fzgr2e%2FV5vpZiwLTJKxemXyeFgrwHjaQQCzCfq%2FbCBjqkAS9xQG1Ly%2BjZOJDtf0OwPcb7xxrjn8gm%2BaXPKTeeYIwOXj7zAm%2FYJms0ZqcanKINMiQ1OWD9YcafZaGAkCkzD3%2BMyrBpERi6GcU9R2vfqxz79yBYk71JhIZvXyciXugdP8YflCTPpyHOO0NAfaf2H4ytOtFEsTDmrcy2rlU0gpgINLsvHLlrBccAPNgPkCttf47z7nNHh5pVlAdXIuOke1ifywie&X-Amz-Signature=bb3761608842a3bbc0995554c55a5000a9ac3d84aeee1dddd2df19c32a055fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
