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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4FXGH4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCoJMprGGbc15y9Rct7RCtMSSEahSdx%2BBcZ9t9oNVWWnAIhALrfperblI66Lt0qW25etVlC0UT25GIrqsLIZYZI9DJnKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwktgrCklQ1yO5FIqsq3APD5h1r2bexCIUvZfeNdbNCyQo%2Bwz1fJyeTlN1DXjiZQP0k%2FN%2BbrRalOirjfdUtaXd%2FUojLgt2z%2Fjfsu%2FOmKPmw9QwKcOUqlyKW3%2BFrpuvOocS1%2FyIY79JGu4OHXAZsQG1lY8SWjyCfXNsvtV%2B1vVLFYBqZuMmFfNsSl0I8ZOMr3H8baZ7xMUgFdliongRmktvI9%2FZgqvc823JslcYc6I%2BNHneTqxmSKtT2JDKm2CfPVw6kKWJPMj7styjIV4Z8b1LXh2dGvnGagImmzyHN%2FvMfJ9KucrH3x9Tn8BSfxpPfpLJms%2F3Li8fYFsKkeK5ZhWGJkXpeamwLEQ1iTIe02LHDnwvk8rMYC%2B9pVgXJ4o%2B3uw5yPhDuS4jPkEL034PIitBzfEMGSvJUgywyW1nZQ%2BL6vuBVuma1sd5Oj7BD29IGpVSjTAOdnF9OJhXlFOFqSh1tSHEJGpABFyNdCRdMJT9bFxVrilBYmSf7XkC5ko3VOAWzrpPamIVxy9x75qfwnWBX52scx3UF2mZLsipk%2FKmHMoUTLcS3vjvEEdVlZSTcs0Cx7rFZ%2BbfiNVw11wn5GNGL8Mxtd5IZiCsvhrdlvcXzRBxcwC4kVlbJFyEHENS8gmkwq2mU5Rg9B0TRUjDc397CBjqkAUug5D12EjNz3xfHg%2FwixVXxAHnghyXi1WTw8sobfHInjNyTTN9WF2SiXdB4Th9iMfmrbdlDxqm%2BYpIoQatJrN%2BDwf7xJoxw%2FciEGVoZS2XUnrtMLW13%2FxmpQ66wc2MqI9Jgpi6xxp25hmoSl2HODqSQMNV19ZTG7rL4DVSBj8XYc7syKEE4d7kSWIzVGjbd%2B722gVt9z6p36vxpdRizzufwMEjq&X-Amz-Signature=8503ae4136ea63954772850ec143c6b9e591903142ccca639e7a86aefbfeb299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4FXGH4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCoJMprGGbc15y9Rct7RCtMSSEahSdx%2BBcZ9t9oNVWWnAIhALrfperblI66Lt0qW25etVlC0UT25GIrqsLIZYZI9DJnKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwktgrCklQ1yO5FIqsq3APD5h1r2bexCIUvZfeNdbNCyQo%2Bwz1fJyeTlN1DXjiZQP0k%2FN%2BbrRalOirjfdUtaXd%2FUojLgt2z%2Fjfsu%2FOmKPmw9QwKcOUqlyKW3%2BFrpuvOocS1%2FyIY79JGu4OHXAZsQG1lY8SWjyCfXNsvtV%2B1vVLFYBqZuMmFfNsSl0I8ZOMr3H8baZ7xMUgFdliongRmktvI9%2FZgqvc823JslcYc6I%2BNHneTqxmSKtT2JDKm2CfPVw6kKWJPMj7styjIV4Z8b1LXh2dGvnGagImmzyHN%2FvMfJ9KucrH3x9Tn8BSfxpPfpLJms%2F3Li8fYFsKkeK5ZhWGJkXpeamwLEQ1iTIe02LHDnwvk8rMYC%2B9pVgXJ4o%2B3uw5yPhDuS4jPkEL034PIitBzfEMGSvJUgywyW1nZQ%2BL6vuBVuma1sd5Oj7BD29IGpVSjTAOdnF9OJhXlFOFqSh1tSHEJGpABFyNdCRdMJT9bFxVrilBYmSf7XkC5ko3VOAWzrpPamIVxy9x75qfwnWBX52scx3UF2mZLsipk%2FKmHMoUTLcS3vjvEEdVlZSTcs0Cx7rFZ%2BbfiNVw11wn5GNGL8Mxtd5IZiCsvhrdlvcXzRBxcwC4kVlbJFyEHENS8gmkwq2mU5Rg9B0TRUjDc397CBjqkAUug5D12EjNz3xfHg%2FwixVXxAHnghyXi1WTw8sobfHInjNyTTN9WF2SiXdB4Th9iMfmrbdlDxqm%2BYpIoQatJrN%2BDwf7xJoxw%2FciEGVoZS2XUnrtMLW13%2FxmpQ66wc2MqI9Jgpi6xxp25hmoSl2HODqSQMNV19ZTG7rL4DVSBj8XYc7syKEE4d7kSWIzVGjbd%2B722gVt9z6p36vxpdRizzufwMEjq&X-Amz-Signature=885c6878684038ff654e4599a4ae8410e573a1e24a70387323ce9b2f78efa578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4FXGH4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCoJMprGGbc15y9Rct7RCtMSSEahSdx%2BBcZ9t9oNVWWnAIhALrfperblI66Lt0qW25etVlC0UT25GIrqsLIZYZI9DJnKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwktgrCklQ1yO5FIqsq3APD5h1r2bexCIUvZfeNdbNCyQo%2Bwz1fJyeTlN1DXjiZQP0k%2FN%2BbrRalOirjfdUtaXd%2FUojLgt2z%2Fjfsu%2FOmKPmw9QwKcOUqlyKW3%2BFrpuvOocS1%2FyIY79JGu4OHXAZsQG1lY8SWjyCfXNsvtV%2B1vVLFYBqZuMmFfNsSl0I8ZOMr3H8baZ7xMUgFdliongRmktvI9%2FZgqvc823JslcYc6I%2BNHneTqxmSKtT2JDKm2CfPVw6kKWJPMj7styjIV4Z8b1LXh2dGvnGagImmzyHN%2FvMfJ9KucrH3x9Tn8BSfxpPfpLJms%2F3Li8fYFsKkeK5ZhWGJkXpeamwLEQ1iTIe02LHDnwvk8rMYC%2B9pVgXJ4o%2B3uw5yPhDuS4jPkEL034PIitBzfEMGSvJUgywyW1nZQ%2BL6vuBVuma1sd5Oj7BD29IGpVSjTAOdnF9OJhXlFOFqSh1tSHEJGpABFyNdCRdMJT9bFxVrilBYmSf7XkC5ko3VOAWzrpPamIVxy9x75qfwnWBX52scx3UF2mZLsipk%2FKmHMoUTLcS3vjvEEdVlZSTcs0Cx7rFZ%2BbfiNVw11wn5GNGL8Mxtd5IZiCsvhrdlvcXzRBxcwC4kVlbJFyEHENS8gmkwq2mU5Rg9B0TRUjDc397CBjqkAUug5D12EjNz3xfHg%2FwixVXxAHnghyXi1WTw8sobfHInjNyTTN9WF2SiXdB4Th9iMfmrbdlDxqm%2BYpIoQatJrN%2BDwf7xJoxw%2FciEGVoZS2XUnrtMLW13%2FxmpQ66wc2MqI9Jgpi6xxp25hmoSl2HODqSQMNV19ZTG7rL4DVSBj8XYc7syKEE4d7kSWIzVGjbd%2B722gVt9z6p36vxpdRizzufwMEjq&X-Amz-Signature=25886029509bca8c9f4236b7f32a42dd5f7a416ad4913ae4d660cfacf9a598a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
