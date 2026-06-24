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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P45VMPJ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHq69FBZZf9D4iQ%2BqpdR4ViY3nXpHQ2ssOJBp%2BZk4Q9qAiEAriNJpbapA711rLv624q78EIBljznULxKv3IrF0TAF4oq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDnrm%2Frc7peGpGV1hCrcAxN8CHHUWoLlr2ygxc25PC%2BplF%2B8ylhLRUzn%2FjQ1NXB7eRM%2B4jTsgkyhSD6YbNOqordHzPhfDVK2Jtv7r%2FX34RNBii8D0%2FUXheeXXcaT2hcla45HLXAMRNkzMUZRQIF8VwnnJJyJWsGsFdH6IBrmrZm%2FfAugNh0M3qz3izphJBqU%2BzSQiAmyeB5BLEd74f8zfHkC2czMXM5rlGqpCcXItgivE4MGf1boyxNRncnoYfX3PNzUYzMMGrxN42aquqDd1FWBf3jMPy0yZpPx76VsxuFKFw2b5dKsZKESKLwKkg8UDUSRWs8ll%2BbE5DFjaD6oeT%2FcBq%2F1Fd4fJjuXAs5U44XASgmQcrif9QDY8AS%2BLOTKvXishhdXktyWHYSvbICjbBOEoyy5%2BPitB%2B4QsO9L%2BBPxEv162WGgCIvwi1FwUxGNnC1p72ppAUQ4ASvD%2FQfwFAAksCFF6pcqMs6epkXfR6QCOY4y2fhZE%2F5IlMcJDEB41GFymmOpdr6HSTKrkr68SqJtCuIKSg%2BFXsIQzrvBvb%2BHDb%2FqPF5OxgInJrDCdiSPtBJat49U4%2BEbavn75YDJ11j9cnFOTEWMTnXUhThk5AkFPGiL8RNFh5T1tzNa3CKymmJWGyIsEWSat4NNMObv7NEGOqUBBeEd9ctMAdf7JjwawzH6hNJ%2F3t3ujlbq7ljIUxLiqaBrheFabwZ%2BgwDi59GUBVxif%2B5v35wE0TJe01mnCZTlacZs91QDhgLKuPB0HkRCxZ%2Bygb5KGck41b6VQddk1OuX3BySbB7ulv28iIAoKJS%2FY%2BjqKHUVkf2tNqICnaK%2BBd8JPj0YWxJ6UGYfUHdbOkDxSJr7qT1YvHtpOrVBh4usjdyv3kEr&X-Amz-Signature=e28948eb8228d3ae8df3652c8f60f18e819d96881f1dfd709c5130c814f87d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P45VMPJ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHq69FBZZf9D4iQ%2BqpdR4ViY3nXpHQ2ssOJBp%2BZk4Q9qAiEAriNJpbapA711rLv624q78EIBljznULxKv3IrF0TAF4oq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDnrm%2Frc7peGpGV1hCrcAxN8CHHUWoLlr2ygxc25PC%2BplF%2B8ylhLRUzn%2FjQ1NXB7eRM%2B4jTsgkyhSD6YbNOqordHzPhfDVK2Jtv7r%2FX34RNBii8D0%2FUXheeXXcaT2hcla45HLXAMRNkzMUZRQIF8VwnnJJyJWsGsFdH6IBrmrZm%2FfAugNh0M3qz3izphJBqU%2BzSQiAmyeB5BLEd74f8zfHkC2czMXM5rlGqpCcXItgivE4MGf1boyxNRncnoYfX3PNzUYzMMGrxN42aquqDd1FWBf3jMPy0yZpPx76VsxuFKFw2b5dKsZKESKLwKkg8UDUSRWs8ll%2BbE5DFjaD6oeT%2FcBq%2F1Fd4fJjuXAs5U44XASgmQcrif9QDY8AS%2BLOTKvXishhdXktyWHYSvbICjbBOEoyy5%2BPitB%2B4QsO9L%2BBPxEv162WGgCIvwi1FwUxGNnC1p72ppAUQ4ASvD%2FQfwFAAksCFF6pcqMs6epkXfR6QCOY4y2fhZE%2F5IlMcJDEB41GFymmOpdr6HSTKrkr68SqJtCuIKSg%2BFXsIQzrvBvb%2BHDb%2FqPF5OxgInJrDCdiSPtBJat49U4%2BEbavn75YDJ11j9cnFOTEWMTnXUhThk5AkFPGiL8RNFh5T1tzNa3CKymmJWGyIsEWSat4NNMObv7NEGOqUBBeEd9ctMAdf7JjwawzH6hNJ%2F3t3ujlbq7ljIUxLiqaBrheFabwZ%2BgwDi59GUBVxif%2B5v35wE0TJe01mnCZTlacZs91QDhgLKuPB0HkRCxZ%2Bygb5KGck41b6VQddk1OuX3BySbB7ulv28iIAoKJS%2FY%2BjqKHUVkf2tNqICnaK%2BBd8JPj0YWxJ6UGYfUHdbOkDxSJr7qT1YvHtpOrVBh4usjdyv3kEr&X-Amz-Signature=c1704985f30c062629dcb385f28349ab6e8cac4e7ff2db8fbdab784ea8400de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P45VMPJ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHq69FBZZf9D4iQ%2BqpdR4ViY3nXpHQ2ssOJBp%2BZk4Q9qAiEAriNJpbapA711rLv624q78EIBljznULxKv3IrF0TAF4oq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDnrm%2Frc7peGpGV1hCrcAxN8CHHUWoLlr2ygxc25PC%2BplF%2B8ylhLRUzn%2FjQ1NXB7eRM%2B4jTsgkyhSD6YbNOqordHzPhfDVK2Jtv7r%2FX34RNBii8D0%2FUXheeXXcaT2hcla45HLXAMRNkzMUZRQIF8VwnnJJyJWsGsFdH6IBrmrZm%2FfAugNh0M3qz3izphJBqU%2BzSQiAmyeB5BLEd74f8zfHkC2czMXM5rlGqpCcXItgivE4MGf1boyxNRncnoYfX3PNzUYzMMGrxN42aquqDd1FWBf3jMPy0yZpPx76VsxuFKFw2b5dKsZKESKLwKkg8UDUSRWs8ll%2BbE5DFjaD6oeT%2FcBq%2F1Fd4fJjuXAs5U44XASgmQcrif9QDY8AS%2BLOTKvXishhdXktyWHYSvbICjbBOEoyy5%2BPitB%2B4QsO9L%2BBPxEv162WGgCIvwi1FwUxGNnC1p72ppAUQ4ASvD%2FQfwFAAksCFF6pcqMs6epkXfR6QCOY4y2fhZE%2F5IlMcJDEB41GFymmOpdr6HSTKrkr68SqJtCuIKSg%2BFXsIQzrvBvb%2BHDb%2FqPF5OxgInJrDCdiSPtBJat49U4%2BEbavn75YDJ11j9cnFOTEWMTnXUhThk5AkFPGiL8RNFh5T1tzNa3CKymmJWGyIsEWSat4NNMObv7NEGOqUBBeEd9ctMAdf7JjwawzH6hNJ%2F3t3ujlbq7ljIUxLiqaBrheFabwZ%2BgwDi59GUBVxif%2B5v35wE0TJe01mnCZTlacZs91QDhgLKuPB0HkRCxZ%2Bygb5KGck41b6VQddk1OuX3BySbB7ulv28iIAoKJS%2FY%2BjqKHUVkf2tNqICnaK%2BBd8JPj0YWxJ6UGYfUHdbOkDxSJr7qT1YvHtpOrVBh4usjdyv3kEr&X-Amz-Signature=01546d5300aaca5d019362294076de8ccf94772d214650afd33d679399e89cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
