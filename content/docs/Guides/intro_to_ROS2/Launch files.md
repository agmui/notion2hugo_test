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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBMVD22B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFJsttei9180xeAaAzfzLOr6IpOn1vsS7T%2F8738WksKUAiEAvEC1v%2BtLRaCbCPYO8zCcJPdgAGlSyfYieAYZzRg8QnIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5KTmS5vwPlNzgvPCrcA3NJacrWEESHpzzLj9XJbM3IGMgpl9Wa52N%2FBjeKWfIeCQsSWASToLVQ%2BBLGlXAupUa8RWJXVLfudVFO1IwXBDSglkKygxAXBJ8vDYPMGJ1vxIIlYAQQErohIREcCWX7%2F0BhE1SNU3ZyRehbiAL13Zgn3CQ8ypw9uy80EeRaGB0gT3i8JABKzXPQqO1oTlOEMfjERGb%2B8iEEl5DMVCpFTdk1PS6OsxIKPLPLGCbmDcNZ%2BGYG%2B5uDM%2BCgHkzD7gDzroJpD0TT3a9qemM8gFYn8XB6r%2BG25KfIU7RbQqGpSReG9MKCTS%2BBRSa%2Bel0f7xtVSbvB1iMe1zOvRfWHUUchryCvEfNK4J6L2iWUobmoZ27%2FJgdMxRS09RDMvTut6OAEXylp8c8V75BM5OH5uqiO11quDl%2FR7oCBO1H1jYRnMEXycVl%2Bm47Vrhb4LZIr9dNNpvys76DEphjaHUiJrmZdPbS0N0dMWzcgEgyyCy%2BHjZpyZisyBCZTe4YPCdYJjyE2zbEdSux3YtAAbKRJSfn5p1otvrzAuxULAB%2BYR0Pd1lvCyPpSOqBDGXDiL8UdZEQu6Xy5IoMV6cDKJxlYb4Wmo%2FqTzQ1zKYQAtRw3VdSFamGFq4GfHE3KE%2FM%2B9hIJMOuB%2BsEGOqUBj3750c%2BJsS3wgCTdTHwgJ0m4wHa7LLHLDfl%2BqtvP5EAtgwSMJcyw%2B3SOpDiXHNTvwDc1Z3M51MK9qL3NUwqBPzEMj0CG7igAKAtPzfAKmt34uhgj6Ahwu2SQJjCRzMKtP0w5r4cwFq%2BqkXK1W4xwvr2%2FzRAP%2BwQxjwKw0w0gW%2Fc3LZVBwui6VD3zVXsSAL11fmHURLwKe9CK6eUQoPyDTOAf8sgG&X-Amz-Signature=132c9d0fc80b48e740bee59f9a9f91d819f89271fac36e32564476980593c771&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBMVD22B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFJsttei9180xeAaAzfzLOr6IpOn1vsS7T%2F8738WksKUAiEAvEC1v%2BtLRaCbCPYO8zCcJPdgAGlSyfYieAYZzRg8QnIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5KTmS5vwPlNzgvPCrcA3NJacrWEESHpzzLj9XJbM3IGMgpl9Wa52N%2FBjeKWfIeCQsSWASToLVQ%2BBLGlXAupUa8RWJXVLfudVFO1IwXBDSglkKygxAXBJ8vDYPMGJ1vxIIlYAQQErohIREcCWX7%2F0BhE1SNU3ZyRehbiAL13Zgn3CQ8ypw9uy80EeRaGB0gT3i8JABKzXPQqO1oTlOEMfjERGb%2B8iEEl5DMVCpFTdk1PS6OsxIKPLPLGCbmDcNZ%2BGYG%2B5uDM%2BCgHkzD7gDzroJpD0TT3a9qemM8gFYn8XB6r%2BG25KfIU7RbQqGpSReG9MKCTS%2BBRSa%2Bel0f7xtVSbvB1iMe1zOvRfWHUUchryCvEfNK4J6L2iWUobmoZ27%2FJgdMxRS09RDMvTut6OAEXylp8c8V75BM5OH5uqiO11quDl%2FR7oCBO1H1jYRnMEXycVl%2Bm47Vrhb4LZIr9dNNpvys76DEphjaHUiJrmZdPbS0N0dMWzcgEgyyCy%2BHjZpyZisyBCZTe4YPCdYJjyE2zbEdSux3YtAAbKRJSfn5p1otvrzAuxULAB%2BYR0Pd1lvCyPpSOqBDGXDiL8UdZEQu6Xy5IoMV6cDKJxlYb4Wmo%2FqTzQ1zKYQAtRw3VdSFamGFq4GfHE3KE%2FM%2B9hIJMOuB%2BsEGOqUBj3750c%2BJsS3wgCTdTHwgJ0m4wHa7LLHLDfl%2BqtvP5EAtgwSMJcyw%2B3SOpDiXHNTvwDc1Z3M51MK9qL3NUwqBPzEMj0CG7igAKAtPzfAKmt34uhgj6Ahwu2SQJjCRzMKtP0w5r4cwFq%2BqkXK1W4xwvr2%2FzRAP%2BwQxjwKw0w0gW%2Fc3LZVBwui6VD3zVXsSAL11fmHURLwKe9CK6eUQoPyDTOAf8sgG&X-Amz-Signature=279e2dfc06b5cc45e0054a1e27978802612e01094dc7a99df03f94c47f299cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBMVD22B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFJsttei9180xeAaAzfzLOr6IpOn1vsS7T%2F8738WksKUAiEAvEC1v%2BtLRaCbCPYO8zCcJPdgAGlSyfYieAYZzRg8QnIqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5KTmS5vwPlNzgvPCrcA3NJacrWEESHpzzLj9XJbM3IGMgpl9Wa52N%2FBjeKWfIeCQsSWASToLVQ%2BBLGlXAupUa8RWJXVLfudVFO1IwXBDSglkKygxAXBJ8vDYPMGJ1vxIIlYAQQErohIREcCWX7%2F0BhE1SNU3ZyRehbiAL13Zgn3CQ8ypw9uy80EeRaGB0gT3i8JABKzXPQqO1oTlOEMfjERGb%2B8iEEl5DMVCpFTdk1PS6OsxIKPLPLGCbmDcNZ%2BGYG%2B5uDM%2BCgHkzD7gDzroJpD0TT3a9qemM8gFYn8XB6r%2BG25KfIU7RbQqGpSReG9MKCTS%2BBRSa%2Bel0f7xtVSbvB1iMe1zOvRfWHUUchryCvEfNK4J6L2iWUobmoZ27%2FJgdMxRS09RDMvTut6OAEXylp8c8V75BM5OH5uqiO11quDl%2FR7oCBO1H1jYRnMEXycVl%2Bm47Vrhb4LZIr9dNNpvys76DEphjaHUiJrmZdPbS0N0dMWzcgEgyyCy%2BHjZpyZisyBCZTe4YPCdYJjyE2zbEdSux3YtAAbKRJSfn5p1otvrzAuxULAB%2BYR0Pd1lvCyPpSOqBDGXDiL8UdZEQu6Xy5IoMV6cDKJxlYb4Wmo%2FqTzQ1zKYQAtRw3VdSFamGFq4GfHE3KE%2FM%2B9hIJMOuB%2BsEGOqUBj3750c%2BJsS3wgCTdTHwgJ0m4wHa7LLHLDfl%2BqtvP5EAtgwSMJcyw%2B3SOpDiXHNTvwDc1Z3M51MK9qL3NUwqBPzEMj0CG7igAKAtPzfAKmt34uhgj6Ahwu2SQJjCRzMKtP0w5r4cwFq%2BqkXK1W4xwvr2%2FzRAP%2BwQxjwKw0w0gW%2Fc3LZVBwui6VD3zVXsSAL11fmHURLwKe9CK6eUQoPyDTOAf8sgG&X-Amz-Signature=24f6bd695462862f7fea41dcb601076ebf22ddc586a560aadbd60f03e1031310&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
