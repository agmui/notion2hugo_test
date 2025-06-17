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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGW7S6IR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUlGJwnw1p9Lh%2BQoZYhDUZ312IYbFZyiNzO5Vi4y4ZTQIgcGmar1wDRJ9buyeiO8efZRzxGNjpvhlrDbxWsnxV2Igq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAYC2rrqM%2BStXFzRHCrcAxyxErsoGuW0k3iZwwMsj5OgcMAHyTH6SUPOKvm3ihmNv%2B8BJYPIIF4TN4LctyLnDr9y%2FHtrPwpR4S05rAIqEd5ebrzALEsxr9Mp5F09CBiFTPSqlbgsATso7k9clkp9hNEfud0XnV0zeNG2%2FHubDOqxXLPrqVQMwl14tkvkSXRbwN1EcFbPulkZFdg143DaP6ZJcdvbogKL5D4lB8uSAzwdG4p%2Beb8ha3F07OeFqqWVrorBOm7UooOjQZgotXxXL%2FBMLBi2ukeRYosj4HFiZ8e07nHAfRRreAtBuFcjuXDTMfZJFDxta80%2F50CJsmyIdMCL3iQ9o6PV%2BJCtfp6zxCdcv0V1Ts4zwREuPacoLvxQRNyDcJWulVkr1Wz8%2BQG5Na1BmuV84i8e0Yz%2BVIOzh4pqi2rVHZYP1jsO%2FKWH6mrsTlN2bmh6jk%2BQ6vMG3p2tTlVh%2FIcNKN6%2F3a18TSTr9QbiNfiG%2Bmd8XgyruQT%2BPuvDEXulpe6DUM2IDYTCa3OeHYAJbPywnrayTbf1mbDWxuzTG5bOnhRhAdb29w0LKs76ghQ1epoaV3IJfR3Ilkx5w8fhi7XPEgvBMI7tBMpSLdx9mNoaPTntkhrXkZVxPtxDTbGCyymHiB5Y85uHMNGyxcIGOqUBhuQ9yaOvHY8luSHU%2Fn5vIqkF4T4hJ%2FcJMQEvWQyL0Oi4%2B21CHdnfmNOT%2BPZvaaIOZabmsrWMBsWgM4paTzoYRtjrYi1LR%2BjZwL29kGdfKR63AnMBtrLhMtw6eeIYbMIuyplZnulTAKVvu48HO%2FLXxnxxpIneKT%2BsNUTYTV56R6GX40mD5xuhStal57%2F3ohK%2FumZ5yu%2FSE58hFwyH%2F1LrC3a%2BxhJy&X-Amz-Signature=ab35da27ee50341a6d21caf74bc5fa9be9ed1dd0068b68d673b23113555f15ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGW7S6IR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUlGJwnw1p9Lh%2BQoZYhDUZ312IYbFZyiNzO5Vi4y4ZTQIgcGmar1wDRJ9buyeiO8efZRzxGNjpvhlrDbxWsnxV2Igq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAYC2rrqM%2BStXFzRHCrcAxyxErsoGuW0k3iZwwMsj5OgcMAHyTH6SUPOKvm3ihmNv%2B8BJYPIIF4TN4LctyLnDr9y%2FHtrPwpR4S05rAIqEd5ebrzALEsxr9Mp5F09CBiFTPSqlbgsATso7k9clkp9hNEfud0XnV0zeNG2%2FHubDOqxXLPrqVQMwl14tkvkSXRbwN1EcFbPulkZFdg143DaP6ZJcdvbogKL5D4lB8uSAzwdG4p%2Beb8ha3F07OeFqqWVrorBOm7UooOjQZgotXxXL%2FBMLBi2ukeRYosj4HFiZ8e07nHAfRRreAtBuFcjuXDTMfZJFDxta80%2F50CJsmyIdMCL3iQ9o6PV%2BJCtfp6zxCdcv0V1Ts4zwREuPacoLvxQRNyDcJWulVkr1Wz8%2BQG5Na1BmuV84i8e0Yz%2BVIOzh4pqi2rVHZYP1jsO%2FKWH6mrsTlN2bmh6jk%2BQ6vMG3p2tTlVh%2FIcNKN6%2F3a18TSTr9QbiNfiG%2Bmd8XgyruQT%2BPuvDEXulpe6DUM2IDYTCa3OeHYAJbPywnrayTbf1mbDWxuzTG5bOnhRhAdb29w0LKs76ghQ1epoaV3IJfR3Ilkx5w8fhi7XPEgvBMI7tBMpSLdx9mNoaPTntkhrXkZVxPtxDTbGCyymHiB5Y85uHMNGyxcIGOqUBhuQ9yaOvHY8luSHU%2Fn5vIqkF4T4hJ%2FcJMQEvWQyL0Oi4%2B21CHdnfmNOT%2BPZvaaIOZabmsrWMBsWgM4paTzoYRtjrYi1LR%2BjZwL29kGdfKR63AnMBtrLhMtw6eeIYbMIuyplZnulTAKVvu48HO%2FLXxnxxpIneKT%2BsNUTYTV56R6GX40mD5xuhStal57%2F3ohK%2FumZ5yu%2FSE58hFwyH%2F1LrC3a%2BxhJy&X-Amz-Signature=9670fa231c349277d4052a3f67aa908365bbc9b41fc3a76480d3dec0f71d50c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGW7S6IR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUlGJwnw1p9Lh%2BQoZYhDUZ312IYbFZyiNzO5Vi4y4ZTQIgcGmar1wDRJ9buyeiO8efZRzxGNjpvhlrDbxWsnxV2Igq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAYC2rrqM%2BStXFzRHCrcAxyxErsoGuW0k3iZwwMsj5OgcMAHyTH6SUPOKvm3ihmNv%2B8BJYPIIF4TN4LctyLnDr9y%2FHtrPwpR4S05rAIqEd5ebrzALEsxr9Mp5F09CBiFTPSqlbgsATso7k9clkp9hNEfud0XnV0zeNG2%2FHubDOqxXLPrqVQMwl14tkvkSXRbwN1EcFbPulkZFdg143DaP6ZJcdvbogKL5D4lB8uSAzwdG4p%2Beb8ha3F07OeFqqWVrorBOm7UooOjQZgotXxXL%2FBMLBi2ukeRYosj4HFiZ8e07nHAfRRreAtBuFcjuXDTMfZJFDxta80%2F50CJsmyIdMCL3iQ9o6PV%2BJCtfp6zxCdcv0V1Ts4zwREuPacoLvxQRNyDcJWulVkr1Wz8%2BQG5Na1BmuV84i8e0Yz%2BVIOzh4pqi2rVHZYP1jsO%2FKWH6mrsTlN2bmh6jk%2BQ6vMG3p2tTlVh%2FIcNKN6%2F3a18TSTr9QbiNfiG%2Bmd8XgyruQT%2BPuvDEXulpe6DUM2IDYTCa3OeHYAJbPywnrayTbf1mbDWxuzTG5bOnhRhAdb29w0LKs76ghQ1epoaV3IJfR3Ilkx5w8fhi7XPEgvBMI7tBMpSLdx9mNoaPTntkhrXkZVxPtxDTbGCyymHiB5Y85uHMNGyxcIGOqUBhuQ9yaOvHY8luSHU%2Fn5vIqkF4T4hJ%2FcJMQEvWQyL0Oi4%2B21CHdnfmNOT%2BPZvaaIOZabmsrWMBsWgM4paTzoYRtjrYi1LR%2BjZwL29kGdfKR63AnMBtrLhMtw6eeIYbMIuyplZnulTAKVvu48HO%2FLXxnxxpIneKT%2BsNUTYTV56R6GX40mD5xuhStal57%2F3ohK%2FumZ5yu%2FSE58hFwyH%2F1LrC3a%2BxhJy&X-Amz-Signature=4b9c4a5f7dc2413a10f28df304abf97bc8e2344fc6f75f2a9421b8f4dee0fbaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
