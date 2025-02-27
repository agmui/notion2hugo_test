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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGDAE2O4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD6U%2FZzb03%2F0QK5AqMzcAuduig3oQnanIStgaghauIPwAIhAJwhwmpPoXyNt6ltXX3ML4WQSbUSU%2BqPfOc9qYCiZiMVKv8DCGsQABoMNjM3NDIzMTgzODA1IgyJGrgIITKdSdNRV5Yq3AMu%2FSYwiXljfRwXb2YZE2amy2W6FaVm%2Bvza%2FjETv%2BCHGpu8NrAkSpyFkisl%2BRdLHAoFBzcD7msp3y7QAk0DRtPDUJOBQG3Qf82fhwQRfPBYIFPtf%2BGZYwdmL22ylVM14%2FsEWvz5jdlIl6Ri9EpzOsrH2zzZDC%2FrRdrkPdMoRvUoI5nMbsmNwnlaZl1%2Fu3XfE01Unu3QktQXKYQdmNx%2BbIGCJgkGRXeKA5YUb2%2Beu0PwZfhrWwZsx8TDR5xk8UbovqqRigVDWRqFpp7fTdKX5G%2FhFWJMVoPeGTkV3JOAyY3UklrU8UUEznT9zS4Z2IwSRhTccMV3WWMl7qun47uxb0ITMUPSoMQ3Kjzi3m6KGI0YWkCiYkw6wUV8SdahWUnpEmlgQeem9zX6NHcupHYn0BR5eV%2BtJ0OMmbzl2gW%2Fa0oqvY6KJRh2vSEQARFV9VPi65gczR4U6IRiZj6k4GvfhtvcZU8nEEdbFTat%2BQWTmkwtg5Y7KLyjTjqx2sBNc0x9oLUQr1X9FnBIsLwNH7yMUBWRv8aM9AUC7FfoG49NbLQJtXuIqv0NwDxxZnmGUMeSPWJvQ5AgGTI%2F2U25cIgLXplGIDeJdpUHk%2FoJe6tbwV1%2Fk0mRnsAqpfg%2FgPX5JDCzlP%2B9BjqkASiNJ3p0XvS%2BhM%2B6cug%2BqzDDdNZmx1vkn9IWN697EIyBHUm1yciNQGHR1io%2FIiDTMSEiX2zyrCNN9u1VsBbVtR9dpV77KZIUE67ojLfiP6kE%2BqrFYEFdugdPlUnTgeXuD876g5z1%2Bm%2FyEN5pxAL2bkQuPlonaqgvC7uF1dhH6EfBYpY%2FQY4grGE1OTgRiICggJZ8uCQGBBGqjUYCaf9Vv5kwdNnU&X-Amz-Signature=5a33564fcc9a82682425d68218affd06eaa90f7d8fa2a876934a9e80bf03eac9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGDAE2O4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD6U%2FZzb03%2F0QK5AqMzcAuduig3oQnanIStgaghauIPwAIhAJwhwmpPoXyNt6ltXX3ML4WQSbUSU%2BqPfOc9qYCiZiMVKv8DCGsQABoMNjM3NDIzMTgzODA1IgyJGrgIITKdSdNRV5Yq3AMu%2FSYwiXljfRwXb2YZE2amy2W6FaVm%2Bvza%2FjETv%2BCHGpu8NrAkSpyFkisl%2BRdLHAoFBzcD7msp3y7QAk0DRtPDUJOBQG3Qf82fhwQRfPBYIFPtf%2BGZYwdmL22ylVM14%2FsEWvz5jdlIl6Ri9EpzOsrH2zzZDC%2FrRdrkPdMoRvUoI5nMbsmNwnlaZl1%2Fu3XfE01Unu3QktQXKYQdmNx%2BbIGCJgkGRXeKA5YUb2%2Beu0PwZfhrWwZsx8TDR5xk8UbovqqRigVDWRqFpp7fTdKX5G%2FhFWJMVoPeGTkV3JOAyY3UklrU8UUEznT9zS4Z2IwSRhTccMV3WWMl7qun47uxb0ITMUPSoMQ3Kjzi3m6KGI0YWkCiYkw6wUV8SdahWUnpEmlgQeem9zX6NHcupHYn0BR5eV%2BtJ0OMmbzl2gW%2Fa0oqvY6KJRh2vSEQARFV9VPi65gczR4U6IRiZj6k4GvfhtvcZU8nEEdbFTat%2BQWTmkwtg5Y7KLyjTjqx2sBNc0x9oLUQr1X9FnBIsLwNH7yMUBWRv8aM9AUC7FfoG49NbLQJtXuIqv0NwDxxZnmGUMeSPWJvQ5AgGTI%2F2U25cIgLXplGIDeJdpUHk%2FoJe6tbwV1%2Fk0mRnsAqpfg%2FgPX5JDCzlP%2B9BjqkASiNJ3p0XvS%2BhM%2B6cug%2BqzDDdNZmx1vkn9IWN697EIyBHUm1yciNQGHR1io%2FIiDTMSEiX2zyrCNN9u1VsBbVtR9dpV77KZIUE67ojLfiP6kE%2BqrFYEFdugdPlUnTgeXuD876g5z1%2Bm%2FyEN5pxAL2bkQuPlonaqgvC7uF1dhH6EfBYpY%2FQY4grGE1OTgRiICggJZ8uCQGBBGqjUYCaf9Vv5kwdNnU&X-Amz-Signature=bc2edf8c468f1822d2e108a0367b3a7fcadbac9f2654805839d52e6ac4ab2792&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGDAE2O4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQD6U%2FZzb03%2F0QK5AqMzcAuduig3oQnanIStgaghauIPwAIhAJwhwmpPoXyNt6ltXX3ML4WQSbUSU%2BqPfOc9qYCiZiMVKv8DCGsQABoMNjM3NDIzMTgzODA1IgyJGrgIITKdSdNRV5Yq3AMu%2FSYwiXljfRwXb2YZE2amy2W6FaVm%2Bvza%2FjETv%2BCHGpu8NrAkSpyFkisl%2BRdLHAoFBzcD7msp3y7QAk0DRtPDUJOBQG3Qf82fhwQRfPBYIFPtf%2BGZYwdmL22ylVM14%2FsEWvz5jdlIl6Ri9EpzOsrH2zzZDC%2FrRdrkPdMoRvUoI5nMbsmNwnlaZl1%2Fu3XfE01Unu3QktQXKYQdmNx%2BbIGCJgkGRXeKA5YUb2%2Beu0PwZfhrWwZsx8TDR5xk8UbovqqRigVDWRqFpp7fTdKX5G%2FhFWJMVoPeGTkV3JOAyY3UklrU8UUEznT9zS4Z2IwSRhTccMV3WWMl7qun47uxb0ITMUPSoMQ3Kjzi3m6KGI0YWkCiYkw6wUV8SdahWUnpEmlgQeem9zX6NHcupHYn0BR5eV%2BtJ0OMmbzl2gW%2Fa0oqvY6KJRh2vSEQARFV9VPi65gczR4U6IRiZj6k4GvfhtvcZU8nEEdbFTat%2BQWTmkwtg5Y7KLyjTjqx2sBNc0x9oLUQr1X9FnBIsLwNH7yMUBWRv8aM9AUC7FfoG49NbLQJtXuIqv0NwDxxZnmGUMeSPWJvQ5AgGTI%2F2U25cIgLXplGIDeJdpUHk%2FoJe6tbwV1%2Fk0mRnsAqpfg%2FgPX5JDCzlP%2B9BjqkASiNJ3p0XvS%2BhM%2B6cug%2BqzDDdNZmx1vkn9IWN697EIyBHUm1yciNQGHR1io%2FIiDTMSEiX2zyrCNN9u1VsBbVtR9dpV77KZIUE67ojLfiP6kE%2BqrFYEFdugdPlUnTgeXuD876g5z1%2Bm%2FyEN5pxAL2bkQuPlonaqgvC7uF1dhH6EfBYpY%2FQY4grGE1OTgRiICggJZ8uCQGBBGqjUYCaf9Vv5kwdNnU&X-Amz-Signature=57846c9138396e59e9720490a426869fc3f3b073b398d5777361855acc1e2ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
