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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5NJYHE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB7iUmHMNeH%2FgNpLNZXqB%2BglWNCiqy5clodiNWHBUCOgIgP%2FsKKTpML6c9OqUDPdMcGw%2BJtH6O138066YPKClp1UAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmWiBY%2Fm7s6GZF0eyrcAzp4TvwGX0poFGoW%2BQBPV0C6EcgxWLBeX%2BWaSC31mmqG2%2FrcovMx%2FExqMDC97reJQ6D2r2nvh2mG7f8%2FINWFBhLjzq4GAqqhqUtS97Rk3XqBlBT7Q5rNOpnD3cy9Go9V2UEbWbhsULkLOJKyeDzDpbmIbW9ZuhNs%2FNt9gP5rj3n7sFyKlMagLPIV31A0ugfqVV94%2FdGvokN86DZZM8jerGSrcl1PByUesk994KdbBkvUT%2BR%2BuSNAIq72o%2FqEBJg8yefRFGSS4snf2GM1LHIjTtklqJBPFNbXNKi%2FKWXDMPByPJLeSdMVgncUU9Yedchx%2BppVEg5iZWv437KBe1YSA2LkpnCutlxqHemkR4ZukEyvoqg15S3KEb8iiXd6einFzI3yuRWWa7mErbs421qaS7hbOx4%2Fa8GiK9rJ6PYg%2BFA2JZe%2FM0oXA2moh2v742cmGWiINRYpsZXtDVSu5km3gXc8MSNvPt%2F7wEhbZTeco2rMENEC%2FcvXpftOuY9Eh1TpLjLdrH23ikG6K0XqwvQaRO64lJyzLXOAOwFP%2FHf%2B%2Bfvul7Q9qm8vI1qSobVBOeIIwtlJ5tjm6R4Ygj40BJ5BQZ7UfeI4kSVF5Iu4ih8LgalmjCU%2BNQA5n0Odb4f9MP7B9LwGOqUBV%2BGTnKEc%2FOdsBJ0CD0EBhjwWddJsfTmpKjAyOU0qcoNhnjjTLh1nErefEc5x6TdfiV%2BzETeFHeFRnVK0Jp7opyduP%2BuBhI%2F5u9QzH4wldWckgyNtZJTaAH8eSSMwkD%2FI8gbqJTuXVutVmGd86v0HryC6TIT2D5Kgantl7UXpnh0QxyX2mWwhfq6rRJtutsJ%2BZBWfunk5hxqkAJH%2BDLRm2p10PeIe&X-Amz-Signature=b2f7aabd552f44694942ff095caf35e871e71da5ab42a1c45133174e286f8548&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5NJYHE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB7iUmHMNeH%2FgNpLNZXqB%2BglWNCiqy5clodiNWHBUCOgIgP%2FsKKTpML6c9OqUDPdMcGw%2BJtH6O138066YPKClp1UAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmWiBY%2Fm7s6GZF0eyrcAzp4TvwGX0poFGoW%2BQBPV0C6EcgxWLBeX%2BWaSC31mmqG2%2FrcovMx%2FExqMDC97reJQ6D2r2nvh2mG7f8%2FINWFBhLjzq4GAqqhqUtS97Rk3XqBlBT7Q5rNOpnD3cy9Go9V2UEbWbhsULkLOJKyeDzDpbmIbW9ZuhNs%2FNt9gP5rj3n7sFyKlMagLPIV31A0ugfqVV94%2FdGvokN86DZZM8jerGSrcl1PByUesk994KdbBkvUT%2BR%2BuSNAIq72o%2FqEBJg8yefRFGSS4snf2GM1LHIjTtklqJBPFNbXNKi%2FKWXDMPByPJLeSdMVgncUU9Yedchx%2BppVEg5iZWv437KBe1YSA2LkpnCutlxqHemkR4ZukEyvoqg15S3KEb8iiXd6einFzI3yuRWWa7mErbs421qaS7hbOx4%2Fa8GiK9rJ6PYg%2BFA2JZe%2FM0oXA2moh2v742cmGWiINRYpsZXtDVSu5km3gXc8MSNvPt%2F7wEhbZTeco2rMENEC%2FcvXpftOuY9Eh1TpLjLdrH23ikG6K0XqwvQaRO64lJyzLXOAOwFP%2FHf%2B%2Bfvul7Q9qm8vI1qSobVBOeIIwtlJ5tjm6R4Ygj40BJ5BQZ7UfeI4kSVF5Iu4ih8LgalmjCU%2BNQA5n0Odb4f9MP7B9LwGOqUBV%2BGTnKEc%2FOdsBJ0CD0EBhjwWddJsfTmpKjAyOU0qcoNhnjjTLh1nErefEc5x6TdfiV%2BzETeFHeFRnVK0Jp7opyduP%2BuBhI%2F5u9QzH4wldWckgyNtZJTaAH8eSSMwkD%2FI8gbqJTuXVutVmGd86v0HryC6TIT2D5Kgantl7UXpnh0QxyX2mWwhfq6rRJtutsJ%2BZBWfunk5hxqkAJH%2BDLRm2p10PeIe&X-Amz-Signature=a4ca6720d963949fe0923c2e8a83d26a2564029a6b3dc75bb03bdf76a5386229&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5NJYHE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB7iUmHMNeH%2FgNpLNZXqB%2BglWNCiqy5clodiNWHBUCOgIgP%2FsKKTpML6c9OqUDPdMcGw%2BJtH6O138066YPKClp1UAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmWiBY%2Fm7s6GZF0eyrcAzp4TvwGX0poFGoW%2BQBPV0C6EcgxWLBeX%2BWaSC31mmqG2%2FrcovMx%2FExqMDC97reJQ6D2r2nvh2mG7f8%2FINWFBhLjzq4GAqqhqUtS97Rk3XqBlBT7Q5rNOpnD3cy9Go9V2UEbWbhsULkLOJKyeDzDpbmIbW9ZuhNs%2FNt9gP5rj3n7sFyKlMagLPIV31A0ugfqVV94%2FdGvokN86DZZM8jerGSrcl1PByUesk994KdbBkvUT%2BR%2BuSNAIq72o%2FqEBJg8yefRFGSS4snf2GM1LHIjTtklqJBPFNbXNKi%2FKWXDMPByPJLeSdMVgncUU9Yedchx%2BppVEg5iZWv437KBe1YSA2LkpnCutlxqHemkR4ZukEyvoqg15S3KEb8iiXd6einFzI3yuRWWa7mErbs421qaS7hbOx4%2Fa8GiK9rJ6PYg%2BFA2JZe%2FM0oXA2moh2v742cmGWiINRYpsZXtDVSu5km3gXc8MSNvPt%2F7wEhbZTeco2rMENEC%2FcvXpftOuY9Eh1TpLjLdrH23ikG6K0XqwvQaRO64lJyzLXOAOwFP%2FHf%2B%2Bfvul7Q9qm8vI1qSobVBOeIIwtlJ5tjm6R4Ygj40BJ5BQZ7UfeI4kSVF5Iu4ih8LgalmjCU%2BNQA5n0Odb4f9MP7B9LwGOqUBV%2BGTnKEc%2FOdsBJ0CD0EBhjwWddJsfTmpKjAyOU0qcoNhnjjTLh1nErefEc5x6TdfiV%2BzETeFHeFRnVK0Jp7opyduP%2BuBhI%2F5u9QzH4wldWckgyNtZJTaAH8eSSMwkD%2FI8gbqJTuXVutVmGd86v0HryC6TIT2D5Kgantl7UXpnh0QxyX2mWwhfq6rRJtutsJ%2BZBWfunk5hxqkAJH%2BDLRm2p10PeIe&X-Amz-Signature=943e393cba19df048d8bf4f0c838d77d04a66a45e22825812bae0be6c874a5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
