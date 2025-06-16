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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W5PTVU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCV0nI5JJqgoSNyQnl1eW14%2B6icOMuS%2FfvNvvl1v%2F8N9wIgT9qkoGoSvTtSROCUMuocraCS314fP0OMBu%2BDRFn9O1Iq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAOSKOLOBmdv7VLZXSrcAxL0tzbqRC7KXfPQ27%2FzlcYTerinaApvM4JRJ%2BLPSA5YERYrzhdIraGjGZ6eYjKj4WkrbTpW%2FNliL%2FnmTjYprH1cmakpVCtmXa6hsP%2FV7qAzdd3hjxzPXwD8YYeywkvCX9nWy1S7semGSvL1h0KoYikYMNq%2FeKlf6uO8%2Bh1AZeqW5P0LkdY6mju8t%2FWLWfmzVRZ%2FB9GRCm6duA9L3Qzo5%2FC6WNXdfnGT0%2BDyT2CObWhcZWHEYO0pjKBkAhIrQ4%2Fzy1v75uoq0tVs66Isem2j6fYuHjbic%2BtFw%2FaLDh8dmj32sMHczsgr0NKKxjVS5rsjd9uIEAlwpuAWnoB6YXai4lSQTH6iK7UK%2BfA1r8pv87meo2oXctUqtqs8Ld7TJO6Ph2qR3x1u7j%2BU2uKYfMwj9A5Vn2FJh82Vo7rmhNGeRnm18xt0bz%2FTjq%2BBpXpDEbgQMHGBwVEOooxdeSKu3rOYQ50hK%2FNPGzJp6sTIauwyuOUKXdgChHE1SKy4sVXfufGxulHJGnAhB0A2tjd6Byfc5S8wnMMR0we16KPxlC9CehjamC6IXZ3Ek0z07UeZi2nG8OC8s%2F6QPvRGwxqjt0S3UwMAZViLNabqcR0mCPs0yUUbEUEsZUByhY5wOYv7MLqOwsIGOqUBR%2B%2Fv%2F0J%2FEd9yzOgsr0OvHrG2USjrXekw1qPEfc1tSSarUQVBteHv9edEXFMKEernOMflk%2FlIsR3izbbnvAjsD7Ug8k9e1zqFNu0BK3G9OelBxzQJBPFM7QOEOvPMkZT6EnJmg2KjGzVsVHPDoLO7a%2BsULC3%2BRZhecttzmf3SEAbZZMWw0oAc4U6Kr3VzqnNOhVss7YbpILD0ir1IGZOJ3MWgZuid&X-Amz-Signature=fa56ba8d3e8b944f8eff34d2837ea8c887cd97d466aadd5017bf3c2f5af1acfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W5PTVU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCV0nI5JJqgoSNyQnl1eW14%2B6icOMuS%2FfvNvvl1v%2F8N9wIgT9qkoGoSvTtSROCUMuocraCS314fP0OMBu%2BDRFn9O1Iq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAOSKOLOBmdv7VLZXSrcAxL0tzbqRC7KXfPQ27%2FzlcYTerinaApvM4JRJ%2BLPSA5YERYrzhdIraGjGZ6eYjKj4WkrbTpW%2FNliL%2FnmTjYprH1cmakpVCtmXa6hsP%2FV7qAzdd3hjxzPXwD8YYeywkvCX9nWy1S7semGSvL1h0KoYikYMNq%2FeKlf6uO8%2Bh1AZeqW5P0LkdY6mju8t%2FWLWfmzVRZ%2FB9GRCm6duA9L3Qzo5%2FC6WNXdfnGT0%2BDyT2CObWhcZWHEYO0pjKBkAhIrQ4%2Fzy1v75uoq0tVs66Isem2j6fYuHjbic%2BtFw%2FaLDh8dmj32sMHczsgr0NKKxjVS5rsjd9uIEAlwpuAWnoB6YXai4lSQTH6iK7UK%2BfA1r8pv87meo2oXctUqtqs8Ld7TJO6Ph2qR3x1u7j%2BU2uKYfMwj9A5Vn2FJh82Vo7rmhNGeRnm18xt0bz%2FTjq%2BBpXpDEbgQMHGBwVEOooxdeSKu3rOYQ50hK%2FNPGzJp6sTIauwyuOUKXdgChHE1SKy4sVXfufGxulHJGnAhB0A2tjd6Byfc5S8wnMMR0we16KPxlC9CehjamC6IXZ3Ek0z07UeZi2nG8OC8s%2F6QPvRGwxqjt0S3UwMAZViLNabqcR0mCPs0yUUbEUEsZUByhY5wOYv7MLqOwsIGOqUBR%2B%2Fv%2F0J%2FEd9yzOgsr0OvHrG2USjrXekw1qPEfc1tSSarUQVBteHv9edEXFMKEernOMflk%2FlIsR3izbbnvAjsD7Ug8k9e1zqFNu0BK3G9OelBxzQJBPFM7QOEOvPMkZT6EnJmg2KjGzVsVHPDoLO7a%2BsULC3%2BRZhecttzmf3SEAbZZMWw0oAc4U6Kr3VzqnNOhVss7YbpILD0ir1IGZOJ3MWgZuid&X-Amz-Signature=9d83e32fcafc8192f3bc4a0901d0bbc2b551763d88f39dcd3529dc1840fd5295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3W5PTVU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCV0nI5JJqgoSNyQnl1eW14%2B6icOMuS%2FfvNvvl1v%2F8N9wIgT9qkoGoSvTtSROCUMuocraCS314fP0OMBu%2BDRFn9O1Iq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAOSKOLOBmdv7VLZXSrcAxL0tzbqRC7KXfPQ27%2FzlcYTerinaApvM4JRJ%2BLPSA5YERYrzhdIraGjGZ6eYjKj4WkrbTpW%2FNliL%2FnmTjYprH1cmakpVCtmXa6hsP%2FV7qAzdd3hjxzPXwD8YYeywkvCX9nWy1S7semGSvL1h0KoYikYMNq%2FeKlf6uO8%2Bh1AZeqW5P0LkdY6mju8t%2FWLWfmzVRZ%2FB9GRCm6duA9L3Qzo5%2FC6WNXdfnGT0%2BDyT2CObWhcZWHEYO0pjKBkAhIrQ4%2Fzy1v75uoq0tVs66Isem2j6fYuHjbic%2BtFw%2FaLDh8dmj32sMHczsgr0NKKxjVS5rsjd9uIEAlwpuAWnoB6YXai4lSQTH6iK7UK%2BfA1r8pv87meo2oXctUqtqs8Ld7TJO6Ph2qR3x1u7j%2BU2uKYfMwj9A5Vn2FJh82Vo7rmhNGeRnm18xt0bz%2FTjq%2BBpXpDEbgQMHGBwVEOooxdeSKu3rOYQ50hK%2FNPGzJp6sTIauwyuOUKXdgChHE1SKy4sVXfufGxulHJGnAhB0A2tjd6Byfc5S8wnMMR0we16KPxlC9CehjamC6IXZ3Ek0z07UeZi2nG8OC8s%2F6QPvRGwxqjt0S3UwMAZViLNabqcR0mCPs0yUUbEUEsZUByhY5wOYv7MLqOwsIGOqUBR%2B%2Fv%2F0J%2FEd9yzOgsr0OvHrG2USjrXekw1qPEfc1tSSarUQVBteHv9edEXFMKEernOMflk%2FlIsR3izbbnvAjsD7Ug8k9e1zqFNu0BK3G9OelBxzQJBPFM7QOEOvPMkZT6EnJmg2KjGzVsVHPDoLO7a%2BsULC3%2BRZhecttzmf3SEAbZZMWw0oAc4U6Kr3VzqnNOhVss7YbpILD0ir1IGZOJ3MWgZuid&X-Amz-Signature=7d6af12c5185c58b45578d6ba9c1a295060d119c2f376c3c838cef4708037e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
