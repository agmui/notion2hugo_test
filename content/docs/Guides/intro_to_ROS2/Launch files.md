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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQAI3UG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCVqJiJGkPzO8YLM6XviqFB5Xr5TZyHIxpEGKv5AU0CygIgaJNDTg%2FUFKxMe7PDgWP5PVrmfq0NKGMT%2Fq7e%2BznMAcEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxq5C3FHrp4GT%2BV%2FSrcA9iR9bMHpZxC0SxQ86bUxaxgKevEORSE6RfCLr3w9xLqeOCC%2FkQSbykZ3Q0Ml8kIVkFN2LjaMB1S%2BroAZdgizoQxoSqsHAxqjmHUEv0wK4XzK0woILUscpAUIh8OQr%2BEP7z1Ncx4belwuiYVSF0emkFhTggTOcWY3KTnTyCpDUzlXOEACKTtnsGs4TPjru6XcIYFY5yU%2FdSKJbawVofAOo9U%2Fh3gw0N%2FglwEqlRuYSpbg6eiV0AYwWAAXgBxiViKJBLqQn%2B%2BLtEbMBrsFQTductd3rUlxRPy1ZVlmbCti5r76i3l%2FpIDappYICfbPUw0rnioXOSbCg%2FFqT1L1dcUexV3VDgI%2B6PPyg6ho31B3zg1Q04hZfiHHXZHP8b%2BbPvyymKJ%2FBHtf61cfZibj9exc46kDJqPQK64DLvXrmabPIrn1dqauseyDzQCdM14grfx54%2Fe5Lo2lWiEs7JGk%2Fx04cjCjhRXqJPbO3egwMyyOyDrT%2BEcmTVRk8nnl0p5bEgy2o6v2PN6GkoUyIOakKollJpy2Wgl%2FsSX5eH20Pl8jgY8cQbha15%2Fqp8a1wJ9%2Fm3PObqGhUBVowux18Vv4xIDxP4ZME%2Fiw%2F0pGYOsGodMlKlGOq%2BM15MEr4C8G4JNMLH22sQGOqUBVw5iJIpA41TnR2mQwjy%2FzkqzDlbSeoyf6YU6pq3f803oBui4Cb3ZNx7NgF6%2FJeEAAwQZjAoDEsU2GuRS7OBYWwUhjQsNWmerVJfEZ9mhqJcXT4ArP0X3z477dhQ74qzI4wUxanNHsIdK31Wqo%2FXuYJJ%2FXbadMuOdltSTEmySogB472RvzvDkgY64W72wx34dvZudBPmfCKakRqVZEWCbBCZ%2FWXh8&X-Amz-Signature=c4f1bd8f180655032e12a1230b49203ae70b938629b9c84e27d5dac59e1decfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQAI3UG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCVqJiJGkPzO8YLM6XviqFB5Xr5TZyHIxpEGKv5AU0CygIgaJNDTg%2FUFKxMe7PDgWP5PVrmfq0NKGMT%2Fq7e%2BznMAcEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxq5C3FHrp4GT%2BV%2FSrcA9iR9bMHpZxC0SxQ86bUxaxgKevEORSE6RfCLr3w9xLqeOCC%2FkQSbykZ3Q0Ml8kIVkFN2LjaMB1S%2BroAZdgizoQxoSqsHAxqjmHUEv0wK4XzK0woILUscpAUIh8OQr%2BEP7z1Ncx4belwuiYVSF0emkFhTggTOcWY3KTnTyCpDUzlXOEACKTtnsGs4TPjru6XcIYFY5yU%2FdSKJbawVofAOo9U%2Fh3gw0N%2FglwEqlRuYSpbg6eiV0AYwWAAXgBxiViKJBLqQn%2B%2BLtEbMBrsFQTductd3rUlxRPy1ZVlmbCti5r76i3l%2FpIDappYICfbPUw0rnioXOSbCg%2FFqT1L1dcUexV3VDgI%2B6PPyg6ho31B3zg1Q04hZfiHHXZHP8b%2BbPvyymKJ%2FBHtf61cfZibj9exc46kDJqPQK64DLvXrmabPIrn1dqauseyDzQCdM14grfx54%2Fe5Lo2lWiEs7JGk%2Fx04cjCjhRXqJPbO3egwMyyOyDrT%2BEcmTVRk8nnl0p5bEgy2o6v2PN6GkoUyIOakKollJpy2Wgl%2FsSX5eH20Pl8jgY8cQbha15%2Fqp8a1wJ9%2Fm3PObqGhUBVowux18Vv4xIDxP4ZME%2Fiw%2F0pGYOsGodMlKlGOq%2BM15MEr4C8G4JNMLH22sQGOqUBVw5iJIpA41TnR2mQwjy%2FzkqzDlbSeoyf6YU6pq3f803oBui4Cb3ZNx7NgF6%2FJeEAAwQZjAoDEsU2GuRS7OBYWwUhjQsNWmerVJfEZ9mhqJcXT4ArP0X3z477dhQ74qzI4wUxanNHsIdK31Wqo%2FXuYJJ%2FXbadMuOdltSTEmySogB472RvzvDkgY64W72wx34dvZudBPmfCKakRqVZEWCbBCZ%2FWXh8&X-Amz-Signature=d58973b930a90114059359b53de80777a4594f5490a1c9227020197aa05b9828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQAI3UG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCVqJiJGkPzO8YLM6XviqFB5Xr5TZyHIxpEGKv5AU0CygIgaJNDTg%2FUFKxMe7PDgWP5PVrmfq0NKGMT%2Fq7e%2BznMAcEqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxq5C3FHrp4GT%2BV%2FSrcA9iR9bMHpZxC0SxQ86bUxaxgKevEORSE6RfCLr3w9xLqeOCC%2FkQSbykZ3Q0Ml8kIVkFN2LjaMB1S%2BroAZdgizoQxoSqsHAxqjmHUEv0wK4XzK0woILUscpAUIh8OQr%2BEP7z1Ncx4belwuiYVSF0emkFhTggTOcWY3KTnTyCpDUzlXOEACKTtnsGs4TPjru6XcIYFY5yU%2FdSKJbawVofAOo9U%2Fh3gw0N%2FglwEqlRuYSpbg6eiV0AYwWAAXgBxiViKJBLqQn%2B%2BLtEbMBrsFQTductd3rUlxRPy1ZVlmbCti5r76i3l%2FpIDappYICfbPUw0rnioXOSbCg%2FFqT1L1dcUexV3VDgI%2B6PPyg6ho31B3zg1Q04hZfiHHXZHP8b%2BbPvyymKJ%2FBHtf61cfZibj9exc46kDJqPQK64DLvXrmabPIrn1dqauseyDzQCdM14grfx54%2Fe5Lo2lWiEs7JGk%2Fx04cjCjhRXqJPbO3egwMyyOyDrT%2BEcmTVRk8nnl0p5bEgy2o6v2PN6GkoUyIOakKollJpy2Wgl%2FsSX5eH20Pl8jgY8cQbha15%2Fqp8a1wJ9%2Fm3PObqGhUBVowux18Vv4xIDxP4ZME%2Fiw%2F0pGYOsGodMlKlGOq%2BM15MEr4C8G4JNMLH22sQGOqUBVw5iJIpA41TnR2mQwjy%2FzkqzDlbSeoyf6YU6pq3f803oBui4Cb3ZNx7NgF6%2FJeEAAwQZjAoDEsU2GuRS7OBYWwUhjQsNWmerVJfEZ9mhqJcXT4ArP0X3z477dhQ74qzI4wUxanNHsIdK31Wqo%2FXuYJJ%2FXbadMuOdltSTEmySogB472RvzvDkgY64W72wx34dvZudBPmfCKakRqVZEWCbBCZ%2FWXh8&X-Amz-Signature=aa052b2642f4c62d805f54987982d18bd498f3cad5668b6b0c8b1d5b533ac7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
