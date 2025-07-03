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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3HM46Z%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCpo5tS1ajwkWl6Zi%2BD7ghewm8UZ8H12y4nMzpjCG8gUgIgcLWI7jR8OtdMsxH84wQr%2Bm5wHilSnEKJ1hyxtwmjCvsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FrNbrgs%2B0a30NdMyrcA%2BMipcM7wWuKp0utFWFVIRUL7VfBfDkp12ktHlxhYw8ERgPOIk1zVYytSjW%2FvIDmVwI4fRbpcuM9wi3T%2FwRvd%2FBzgvjLSYdySDqkaQynEuUYXmSLAQRqjGntLkv6cQO0K%2FmUc8TyQENEiMORrTLc6OZLKi1%2B1DR91Trwsvv7QkmCLL7mNNHGX36PPU%2Bec7R%2BDgJ0AbESldAXMxzSrXm%2B%2BVZmwbzOC24jhqH0npiA5xQmsxn3wnasUIWabW0joG4tlH0tIa64nVXv6c961KYotxPWBzxKGpVewWj0PFlzVGasoq0zUJXPBvT1s6xUAJXDcV06QFqfLIsFP2DwE3shAXrKySz607wO7CFASQAUiXbREWLVUi5KIrnaGgfv9ohet%2BTIN1wGslVby3331hUTtfmj1ydD%2FP%2FtQvfADDXFMex8IjcQ8zRWrUGrKRTQTRiQAq4WT21ME34ux%2B5qvd56yvwW2OLP8Av4B3IB75QHCOje1x%2BL9gWbTJbliTz3cJcr2Ledh0X9nlxdH2J7yzpkMvuXKcXMzBnoHI7ytyIPwTEuHCFtBVHhrugQoB6SsxwRdrnRFNIAmIb%2BinQfcraE%2BQ7vP90xMZvZLik2FoSrNROOAlN%2BRLcLf%2F%2BspD08MNbbl8MGOqUBhWfT%2FDbQw11Iu2tMBIlgnGhnnE48I0mnYrOuYP1%2FItNVioZTA%2BnNPkfKq2NAWUXklbcusDb5HziwaA3Dqtm8jcV4gekrLr8nT2sg38kAzBp4%2BTE1ZoIxmcTZKvhThlp38n268H%2FQa0kwMpMCmvqqwksmZTWcm4RJim8v5D2Zd8vULoIpZk1kKZlHHpcy%2BzDipDZciUAxLbhRw0%2By9ve%2B%2FkssJdI1&X-Amz-Signature=9391fcb38b0cca062dd1033cab9d2108c9137dffb597ee63309c2580f6ff4fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3HM46Z%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCpo5tS1ajwkWl6Zi%2BD7ghewm8UZ8H12y4nMzpjCG8gUgIgcLWI7jR8OtdMsxH84wQr%2Bm5wHilSnEKJ1hyxtwmjCvsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FrNbrgs%2B0a30NdMyrcA%2BMipcM7wWuKp0utFWFVIRUL7VfBfDkp12ktHlxhYw8ERgPOIk1zVYytSjW%2FvIDmVwI4fRbpcuM9wi3T%2FwRvd%2FBzgvjLSYdySDqkaQynEuUYXmSLAQRqjGntLkv6cQO0K%2FmUc8TyQENEiMORrTLc6OZLKi1%2B1DR91Trwsvv7QkmCLL7mNNHGX36PPU%2Bec7R%2BDgJ0AbESldAXMxzSrXm%2B%2BVZmwbzOC24jhqH0npiA5xQmsxn3wnasUIWabW0joG4tlH0tIa64nVXv6c961KYotxPWBzxKGpVewWj0PFlzVGasoq0zUJXPBvT1s6xUAJXDcV06QFqfLIsFP2DwE3shAXrKySz607wO7CFASQAUiXbREWLVUi5KIrnaGgfv9ohet%2BTIN1wGslVby3331hUTtfmj1ydD%2FP%2FtQvfADDXFMex8IjcQ8zRWrUGrKRTQTRiQAq4WT21ME34ux%2B5qvd56yvwW2OLP8Av4B3IB75QHCOje1x%2BL9gWbTJbliTz3cJcr2Ledh0X9nlxdH2J7yzpkMvuXKcXMzBnoHI7ytyIPwTEuHCFtBVHhrugQoB6SsxwRdrnRFNIAmIb%2BinQfcraE%2BQ7vP90xMZvZLik2FoSrNROOAlN%2BRLcLf%2F%2BspD08MNbbl8MGOqUBhWfT%2FDbQw11Iu2tMBIlgnGhnnE48I0mnYrOuYP1%2FItNVioZTA%2BnNPkfKq2NAWUXklbcusDb5HziwaA3Dqtm8jcV4gekrLr8nT2sg38kAzBp4%2BTE1ZoIxmcTZKvhThlp38n268H%2FQa0kwMpMCmvqqwksmZTWcm4RJim8v5D2Zd8vULoIpZk1kKZlHHpcy%2BzDipDZciUAxLbhRw0%2By9ve%2B%2FkssJdI1&X-Amz-Signature=e8e58ee8d3e0fb117bac580f218e037487c305f004f9322e222ed6b4fa6851a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3HM46Z%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCpo5tS1ajwkWl6Zi%2BD7ghewm8UZ8H12y4nMzpjCG8gUgIgcLWI7jR8OtdMsxH84wQr%2Bm5wHilSnEKJ1hyxtwmjCvsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FrNbrgs%2B0a30NdMyrcA%2BMipcM7wWuKp0utFWFVIRUL7VfBfDkp12ktHlxhYw8ERgPOIk1zVYytSjW%2FvIDmVwI4fRbpcuM9wi3T%2FwRvd%2FBzgvjLSYdySDqkaQynEuUYXmSLAQRqjGntLkv6cQO0K%2FmUc8TyQENEiMORrTLc6OZLKi1%2B1DR91Trwsvv7QkmCLL7mNNHGX36PPU%2Bec7R%2BDgJ0AbESldAXMxzSrXm%2B%2BVZmwbzOC24jhqH0npiA5xQmsxn3wnasUIWabW0joG4tlH0tIa64nVXv6c961KYotxPWBzxKGpVewWj0PFlzVGasoq0zUJXPBvT1s6xUAJXDcV06QFqfLIsFP2DwE3shAXrKySz607wO7CFASQAUiXbREWLVUi5KIrnaGgfv9ohet%2BTIN1wGslVby3331hUTtfmj1ydD%2FP%2FtQvfADDXFMex8IjcQ8zRWrUGrKRTQTRiQAq4WT21ME34ux%2B5qvd56yvwW2OLP8Av4B3IB75QHCOje1x%2BL9gWbTJbliTz3cJcr2Ledh0X9nlxdH2J7yzpkMvuXKcXMzBnoHI7ytyIPwTEuHCFtBVHhrugQoB6SsxwRdrnRFNIAmIb%2BinQfcraE%2BQ7vP90xMZvZLik2FoSrNROOAlN%2BRLcLf%2F%2BspD08MNbbl8MGOqUBhWfT%2FDbQw11Iu2tMBIlgnGhnnE48I0mnYrOuYP1%2FItNVioZTA%2BnNPkfKq2NAWUXklbcusDb5HziwaA3Dqtm8jcV4gekrLr8nT2sg38kAzBp4%2BTE1ZoIxmcTZKvhThlp38n268H%2FQa0kwMpMCmvqqwksmZTWcm4RJim8v5D2Zd8vULoIpZk1kKZlHHpcy%2BzDipDZciUAxLbhRw0%2By9ve%2B%2FkssJdI1&X-Amz-Signature=6829fb51d7ee48e3faddd1c24b4f3419245a229a11fed09d2c212274071869fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
