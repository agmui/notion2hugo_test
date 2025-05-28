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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDMYWWH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIn9NCgYqFUR5D15tKfn%2BBRLRFWOkRmATKh4djB0I9pgIhAIbSfO1ViyQ3tkUPl4CPtB7UuvlOyPVsj4Qkj2hI9X%2BiKv8DCHQQABoMNjM3NDIzMTgzODA1IgzYIJtitewiQZ12q%2FMq3AMyt4pE1haz%2FgeHiztfQjg%2BpfV0DoGMIaihG5cvzmJzztCAzU6HzV%2BmAUoSGoWmYWJM0R0kXCURJJ0%2BnwxH7E3itOfRYjs6Iclr6KZRYHzSqveOBvH7iCJw4RL7r21sS0%2F%2BZ3YBXhFehz8qG4nAoZh9PfakHfFmx%2F2jdMiaIWG5t9vOQfBP067BFAdbj0qvJXGAIrg2Ma4nOVuiKEmyBfN%2BTEguOC%2BsOxO5wfuYFRVkiY0DtncPSm%2FCj36CyFFE8j3JthYB0WQkYRhpYRaiPLnLn7Fh8UHGk3v1e7nvSpWvx%2FWbfXdaCnR2f08yHetjdGaF2UXVUF3Ee3WujNcrAOlMtGKzVivFI3rfozJOL%2BKc05%2Fniu6Kv8gdIU%2FKxdCGlX9rDOhgcBB108MLsJPg3GWcFq4y%2BhnxO1KU9vtQcivInMJutMJiz1uQ7qp%2FI%2FYtmxspA8%2FmV3Qdy%2BokLm1kWKow%2BZpSyC3v0fc8msOXW0k10cMDh2JvHxgYIR2jZuTPyub8iQA9LZFoy5biLjXWuHbEstJB44E7oVFDeSubpz%2BfI4xt2ojWEECz4K%2FIJruDpPUtagZIN9R6XJz9p359fZCcToQ3gGLG8%2FvQadKHMs90SKHfZdYBvIDPcg9W5zCU5NvBBjqkAeelGC0ryNBZPjh4ypdWju9I9%2FPH0CPOTsCF9DlGGU6njICQin083PsYqqvrhff0O1gaPSkkhs9AQZjrVE0sC8%2F2sfO%2FBjKABnuk3L6p9ECkb9XIXiDWmU1aOkCq%2B8auT1ASvc%2B89aJ8MvfMtuBZxuEbw53ljAgLEmULB%2Bo2hsIvOcivCwS%2FlzPE3BZAGTSeRtwDxeKxkG%2FzUTudFNJpbeHXZrLa&X-Amz-Signature=ae21db0cb9ccbbafee65a96e392ba03ebde639898db1b3bf4405e780fbfc8cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDMYWWH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIn9NCgYqFUR5D15tKfn%2BBRLRFWOkRmATKh4djB0I9pgIhAIbSfO1ViyQ3tkUPl4CPtB7UuvlOyPVsj4Qkj2hI9X%2BiKv8DCHQQABoMNjM3NDIzMTgzODA1IgzYIJtitewiQZ12q%2FMq3AMyt4pE1haz%2FgeHiztfQjg%2BpfV0DoGMIaihG5cvzmJzztCAzU6HzV%2BmAUoSGoWmYWJM0R0kXCURJJ0%2BnwxH7E3itOfRYjs6Iclr6KZRYHzSqveOBvH7iCJw4RL7r21sS0%2F%2BZ3YBXhFehz8qG4nAoZh9PfakHfFmx%2F2jdMiaIWG5t9vOQfBP067BFAdbj0qvJXGAIrg2Ma4nOVuiKEmyBfN%2BTEguOC%2BsOxO5wfuYFRVkiY0DtncPSm%2FCj36CyFFE8j3JthYB0WQkYRhpYRaiPLnLn7Fh8UHGk3v1e7nvSpWvx%2FWbfXdaCnR2f08yHetjdGaF2UXVUF3Ee3WujNcrAOlMtGKzVivFI3rfozJOL%2BKc05%2Fniu6Kv8gdIU%2FKxdCGlX9rDOhgcBB108MLsJPg3GWcFq4y%2BhnxO1KU9vtQcivInMJutMJiz1uQ7qp%2FI%2FYtmxspA8%2FmV3Qdy%2BokLm1kWKow%2BZpSyC3v0fc8msOXW0k10cMDh2JvHxgYIR2jZuTPyub8iQA9LZFoy5biLjXWuHbEstJB44E7oVFDeSubpz%2BfI4xt2ojWEECz4K%2FIJruDpPUtagZIN9R6XJz9p359fZCcToQ3gGLG8%2FvQadKHMs90SKHfZdYBvIDPcg9W5zCU5NvBBjqkAeelGC0ryNBZPjh4ypdWju9I9%2FPH0CPOTsCF9DlGGU6njICQin083PsYqqvrhff0O1gaPSkkhs9AQZjrVE0sC8%2F2sfO%2FBjKABnuk3L6p9ECkb9XIXiDWmU1aOkCq%2B8auT1ASvc%2B89aJ8MvfMtuBZxuEbw53ljAgLEmULB%2Bo2hsIvOcivCwS%2FlzPE3BZAGTSeRtwDxeKxkG%2FzUTudFNJpbeHXZrLa&X-Amz-Signature=fc8c32e0314e6b400e51e0cc921509d453ebf87d600eecbc8f8013751ca12839&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDMYWWH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIn9NCgYqFUR5D15tKfn%2BBRLRFWOkRmATKh4djB0I9pgIhAIbSfO1ViyQ3tkUPl4CPtB7UuvlOyPVsj4Qkj2hI9X%2BiKv8DCHQQABoMNjM3NDIzMTgzODA1IgzYIJtitewiQZ12q%2FMq3AMyt4pE1haz%2FgeHiztfQjg%2BpfV0DoGMIaihG5cvzmJzztCAzU6HzV%2BmAUoSGoWmYWJM0R0kXCURJJ0%2BnwxH7E3itOfRYjs6Iclr6KZRYHzSqveOBvH7iCJw4RL7r21sS0%2F%2BZ3YBXhFehz8qG4nAoZh9PfakHfFmx%2F2jdMiaIWG5t9vOQfBP067BFAdbj0qvJXGAIrg2Ma4nOVuiKEmyBfN%2BTEguOC%2BsOxO5wfuYFRVkiY0DtncPSm%2FCj36CyFFE8j3JthYB0WQkYRhpYRaiPLnLn7Fh8UHGk3v1e7nvSpWvx%2FWbfXdaCnR2f08yHetjdGaF2UXVUF3Ee3WujNcrAOlMtGKzVivFI3rfozJOL%2BKc05%2Fniu6Kv8gdIU%2FKxdCGlX9rDOhgcBB108MLsJPg3GWcFq4y%2BhnxO1KU9vtQcivInMJutMJiz1uQ7qp%2FI%2FYtmxspA8%2FmV3Qdy%2BokLm1kWKow%2BZpSyC3v0fc8msOXW0k10cMDh2JvHxgYIR2jZuTPyub8iQA9LZFoy5biLjXWuHbEstJB44E7oVFDeSubpz%2BfI4xt2ojWEECz4K%2FIJruDpPUtagZIN9R6XJz9p359fZCcToQ3gGLG8%2FvQadKHMs90SKHfZdYBvIDPcg9W5zCU5NvBBjqkAeelGC0ryNBZPjh4ypdWju9I9%2FPH0CPOTsCF9DlGGU6njICQin083PsYqqvrhff0O1gaPSkkhs9AQZjrVE0sC8%2F2sfO%2FBjKABnuk3L6p9ECkb9XIXiDWmU1aOkCq%2B8auT1ASvc%2B89aJ8MvfMtuBZxuEbw53ljAgLEmULB%2Bo2hsIvOcivCwS%2FlzPE3BZAGTSeRtwDxeKxkG%2FzUTudFNJpbeHXZrLa&X-Amz-Signature=85711a78c0c619d120c0ee0635090dbd1fbcb0b055b3bd62c32ee52b0ca90d16&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
