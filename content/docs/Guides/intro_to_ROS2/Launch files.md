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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHXOK64%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD20h9S2a7US0w%2Fcj%2FNiANKEzy1hXha8m3uW7pz%2BenGswIhAIO8geSIIkYxIKIvzQ3%2B6n04qPUwyLeI0MpgRdYXS0AiKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BWtFGKbmgsVE72c8q3AOzBI0tfYoc1mRfIy%2FAPQqG5QcK%2FWw0rovM2D2jWbxQbiP7XNF8DdlB%2BCCg7HdnA02znUYhNJSLxfUmhUrFLWRVMlXV5sEBviTFBFnecCqCkkg6PZztKw%2Be6BdSMHoSy6L5PBKWaJ8K8nsji%2BX5Kb0npU4SOfdmFceSAnJZOZqq5Udz6DmkrRvTgesk%2FJMRjmgeM1XpdHnB5yD4pQnlq4%2BRkXyAImdmz7WmJnu6K6ZY6BmxuxAbpnEdF6qqmfvJIGvNBmw8uWUj82ER7EzZ0pR8DrVNwahV3kaFCCZ64sZkGJmL05p20qvPWLfDXGq%2BHv%2FYSOXOBNMMY5A9P7s0sWu%2FoIbvdUkm4uwUvlXlCVuItWfx6oscRsCKKl4sNIfYujBSNdRFYX%2FwQ%2BP8KK4k%2FXi0nsvJidUNaAHsAIzIqy0pB2NY24YNb4iuzh4uC6Nq4HN0HRi3DeMhBSg0cYJoBqxlbXvhQ5hKZ72bklKsu1Qe0jx3lQAxZIAY7O%2BvFCslQ8Ul0O0xvv06IS2j4kXCnCZgoJ3NgxACwIxB5usuu7V8RkL3xRlCgq3i9lRBfLVm7TlgvwcdW8UNYoDSTXdmCCm7feEDGcB%2BIuV%2F1ctmVh53Hff3bf1BdpFSXlxQTDDalPHDBjqkAat78LkbrbrJZpZMFvwvY7SYuWPrfskXqg%2BCpNla7hx30BLC%2FsZDxPUdW5hXq5ZphO5WX13dk6L1Srdy%2FkYHEV8acz2vu%2BvtAMZ9DsK7s91LcbVloYqCh8cxtVyzMmsNvkuSa6IXViSbxpjYqkf0CjhU40pjvjm18PQIyBojWZ%2Bs845pMSS4g1jtarQPdJuaBeDiHis%2FP13mLvprTRWEgcJ7qg4T&X-Amz-Signature=1146a0b101109bbacaa2b29c644668c093d72aa4eb78968e82f1c0f4be7ecbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHXOK64%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD20h9S2a7US0w%2Fcj%2FNiANKEzy1hXha8m3uW7pz%2BenGswIhAIO8geSIIkYxIKIvzQ3%2B6n04qPUwyLeI0MpgRdYXS0AiKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BWtFGKbmgsVE72c8q3AOzBI0tfYoc1mRfIy%2FAPQqG5QcK%2FWw0rovM2D2jWbxQbiP7XNF8DdlB%2BCCg7HdnA02znUYhNJSLxfUmhUrFLWRVMlXV5sEBviTFBFnecCqCkkg6PZztKw%2Be6BdSMHoSy6L5PBKWaJ8K8nsji%2BX5Kb0npU4SOfdmFceSAnJZOZqq5Udz6DmkrRvTgesk%2FJMRjmgeM1XpdHnB5yD4pQnlq4%2BRkXyAImdmz7WmJnu6K6ZY6BmxuxAbpnEdF6qqmfvJIGvNBmw8uWUj82ER7EzZ0pR8DrVNwahV3kaFCCZ64sZkGJmL05p20qvPWLfDXGq%2BHv%2FYSOXOBNMMY5A9P7s0sWu%2FoIbvdUkm4uwUvlXlCVuItWfx6oscRsCKKl4sNIfYujBSNdRFYX%2FwQ%2BP8KK4k%2FXi0nsvJidUNaAHsAIzIqy0pB2NY24YNb4iuzh4uC6Nq4HN0HRi3DeMhBSg0cYJoBqxlbXvhQ5hKZ72bklKsu1Qe0jx3lQAxZIAY7O%2BvFCslQ8Ul0O0xvv06IS2j4kXCnCZgoJ3NgxACwIxB5usuu7V8RkL3xRlCgq3i9lRBfLVm7TlgvwcdW8UNYoDSTXdmCCm7feEDGcB%2BIuV%2F1ctmVh53Hff3bf1BdpFSXlxQTDDalPHDBjqkAat78LkbrbrJZpZMFvwvY7SYuWPrfskXqg%2BCpNla7hx30BLC%2FsZDxPUdW5hXq5ZphO5WX13dk6L1Srdy%2FkYHEV8acz2vu%2BvtAMZ9DsK7s91LcbVloYqCh8cxtVyzMmsNvkuSa6IXViSbxpjYqkf0CjhU40pjvjm18PQIyBojWZ%2Bs845pMSS4g1jtarQPdJuaBeDiHis%2FP13mLvprTRWEgcJ7qg4T&X-Amz-Signature=d56d860d5dafbcdec5340d68c947e37c8907700fc248b3cd819febb620d95025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHXOK64%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD20h9S2a7US0w%2Fcj%2FNiANKEzy1hXha8m3uW7pz%2BenGswIhAIO8geSIIkYxIKIvzQ3%2B6n04qPUwyLeI0MpgRdYXS0AiKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BWtFGKbmgsVE72c8q3AOzBI0tfYoc1mRfIy%2FAPQqG5QcK%2FWw0rovM2D2jWbxQbiP7XNF8DdlB%2BCCg7HdnA02znUYhNJSLxfUmhUrFLWRVMlXV5sEBviTFBFnecCqCkkg6PZztKw%2Be6BdSMHoSy6L5PBKWaJ8K8nsji%2BX5Kb0npU4SOfdmFceSAnJZOZqq5Udz6DmkrRvTgesk%2FJMRjmgeM1XpdHnB5yD4pQnlq4%2BRkXyAImdmz7WmJnu6K6ZY6BmxuxAbpnEdF6qqmfvJIGvNBmw8uWUj82ER7EzZ0pR8DrVNwahV3kaFCCZ64sZkGJmL05p20qvPWLfDXGq%2BHv%2FYSOXOBNMMY5A9P7s0sWu%2FoIbvdUkm4uwUvlXlCVuItWfx6oscRsCKKl4sNIfYujBSNdRFYX%2FwQ%2BP8KK4k%2FXi0nsvJidUNaAHsAIzIqy0pB2NY24YNb4iuzh4uC6Nq4HN0HRi3DeMhBSg0cYJoBqxlbXvhQ5hKZ72bklKsu1Qe0jx3lQAxZIAY7O%2BvFCslQ8Ul0O0xvv06IS2j4kXCnCZgoJ3NgxACwIxB5usuu7V8RkL3xRlCgq3i9lRBfLVm7TlgvwcdW8UNYoDSTXdmCCm7feEDGcB%2BIuV%2F1ctmVh53Hff3bf1BdpFSXlxQTDDalPHDBjqkAat78LkbrbrJZpZMFvwvY7SYuWPrfskXqg%2BCpNla7hx30BLC%2FsZDxPUdW5hXq5ZphO5WX13dk6L1Srdy%2FkYHEV8acz2vu%2BvtAMZ9DsK7s91LcbVloYqCh8cxtVyzMmsNvkuSa6IXViSbxpjYqkf0CjhU40pjvjm18PQIyBojWZ%2Bs845pMSS4g1jtarQPdJuaBeDiHis%2FP13mLvprTRWEgcJ7qg4T&X-Amz-Signature=c4a3c0f97c9a2dbf764f092818bcb5ca69338adc9b1fbbcc1e36cd44954c7c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
