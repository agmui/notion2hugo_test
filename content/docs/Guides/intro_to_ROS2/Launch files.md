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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LQKG5G%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Bt8A%2FWAwFUfU%2B%2Bmgy%2BTLA%2Fhctkl%2FmVwO5WZ%2BWeiIbgIgfK6jwb7paJayLVQXgTr110aaVNwIpcri8PMw79gTH3Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCejZ%2BGHkhUMlhqYpircA3U9%2BpF6ZBEZohEzsEbZhPCe%2Fuu%2Fzx%2F0Dtb%2BXmiWq3VO9pCFO6kbzPHVdpP9eYrOQY50G64j740gTiMA6hMcqCx0eLcDXDIttUgFCe6IiPR7ONv5yooqDUDdyYgvJ8%2FTLnqy4P9NFIYbeHZ1JSfWgS2PXqsY8T9hygXUQrbn0pAR5wemdbEnMPIOVwVNoRXpOzjwz0KDfqbQSVyaEBHfBXKbzpUvpMN3Lt3jEx50a0FSRAOwioMLNJCTMDkrLtlsbhVh9CvPgbnDQ5XcyhnxDVtACggPHVMe1s3AtutB9QXXtOBZNrHjX4sMwNeNDFv2uz0TEsDvLvnpWRw2YFRKoW7%2BwMKeKxc%2BLDM95Ce1jCP8U61ihUrMscRonxU2WAyWQ63o7Bfxwk5Tj7cNfBsEIMnPaeFM3uwVMuPQgKScLT5n9wsVu8NT57vmrN1uye0hKDX0qZfetWTZ1bhqyUWbdQc5gqFpOkzZkyY1lJ0dklTGe8RlZgAe8c%2FYZDpX2Cb5%2BGRYjTq8%2FjAlCbY4mleK8MUs8rzYteqcwoi8BXYj4yS6Sl1pZakrHXVo7MZdeau53lv3y9rv759u2NkgH2lbnQhci6gXmvwuxUz3C48TD1BlZsET0hXnk9IPEAMNMLzy5sAGOqUBBvDdqmlXNwLYpkrGckWQ%2BX319LdDYSm8c%2BJ20spY8na6omiRCFHARt2Yp4bfNMu1cXGq2Z0yiiXNnSIJK8caSRsSO%2BepCZZ81F0MxwIOzdvPlo24TFfb28DTtovizalDqEorFHSZOGbF3Nu3%2FfWKdVm5XHlEGSQg4kEOlLCDHir1dAMNcCXZ1Ss7P3aZKdgjvG6TDzxsFWq%2BkfbLYPun3GAemeBN&X-Amz-Signature=9253884cf1109ac318588b9634b891c1f1b448f3357a93ecf997b15da5028111&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LQKG5G%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Bt8A%2FWAwFUfU%2B%2Bmgy%2BTLA%2Fhctkl%2FmVwO5WZ%2BWeiIbgIgfK6jwb7paJayLVQXgTr110aaVNwIpcri8PMw79gTH3Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCejZ%2BGHkhUMlhqYpircA3U9%2BpF6ZBEZohEzsEbZhPCe%2Fuu%2Fzx%2F0Dtb%2BXmiWq3VO9pCFO6kbzPHVdpP9eYrOQY50G64j740gTiMA6hMcqCx0eLcDXDIttUgFCe6IiPR7ONv5yooqDUDdyYgvJ8%2FTLnqy4P9NFIYbeHZ1JSfWgS2PXqsY8T9hygXUQrbn0pAR5wemdbEnMPIOVwVNoRXpOzjwz0KDfqbQSVyaEBHfBXKbzpUvpMN3Lt3jEx50a0FSRAOwioMLNJCTMDkrLtlsbhVh9CvPgbnDQ5XcyhnxDVtACggPHVMe1s3AtutB9QXXtOBZNrHjX4sMwNeNDFv2uz0TEsDvLvnpWRw2YFRKoW7%2BwMKeKxc%2BLDM95Ce1jCP8U61ihUrMscRonxU2WAyWQ63o7Bfxwk5Tj7cNfBsEIMnPaeFM3uwVMuPQgKScLT5n9wsVu8NT57vmrN1uye0hKDX0qZfetWTZ1bhqyUWbdQc5gqFpOkzZkyY1lJ0dklTGe8RlZgAe8c%2FYZDpX2Cb5%2BGRYjTq8%2FjAlCbY4mleK8MUs8rzYteqcwoi8BXYj4yS6Sl1pZakrHXVo7MZdeau53lv3y9rv759u2NkgH2lbnQhci6gXmvwuxUz3C48TD1BlZsET0hXnk9IPEAMNMLzy5sAGOqUBBvDdqmlXNwLYpkrGckWQ%2BX319LdDYSm8c%2BJ20spY8na6omiRCFHARt2Yp4bfNMu1cXGq2Z0yiiXNnSIJK8caSRsSO%2BepCZZ81F0MxwIOzdvPlo24TFfb28DTtovizalDqEorFHSZOGbF3Nu3%2FfWKdVm5XHlEGSQg4kEOlLCDHir1dAMNcCXZ1Ss7P3aZKdgjvG6TDzxsFWq%2BkfbLYPun3GAemeBN&X-Amz-Signature=61b70fb16c83f70e05dbb34bff0e1a031af3ec7e78830824395e0ebacbc29fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LQKG5G%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Bt8A%2FWAwFUfU%2B%2Bmgy%2BTLA%2Fhctkl%2FmVwO5WZ%2BWeiIbgIgfK6jwb7paJayLVQXgTr110aaVNwIpcri8PMw79gTH3Aq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCejZ%2BGHkhUMlhqYpircA3U9%2BpF6ZBEZohEzsEbZhPCe%2Fuu%2Fzx%2F0Dtb%2BXmiWq3VO9pCFO6kbzPHVdpP9eYrOQY50G64j740gTiMA6hMcqCx0eLcDXDIttUgFCe6IiPR7ONv5yooqDUDdyYgvJ8%2FTLnqy4P9NFIYbeHZ1JSfWgS2PXqsY8T9hygXUQrbn0pAR5wemdbEnMPIOVwVNoRXpOzjwz0KDfqbQSVyaEBHfBXKbzpUvpMN3Lt3jEx50a0FSRAOwioMLNJCTMDkrLtlsbhVh9CvPgbnDQ5XcyhnxDVtACggPHVMe1s3AtutB9QXXtOBZNrHjX4sMwNeNDFv2uz0TEsDvLvnpWRw2YFRKoW7%2BwMKeKxc%2BLDM95Ce1jCP8U61ihUrMscRonxU2WAyWQ63o7Bfxwk5Tj7cNfBsEIMnPaeFM3uwVMuPQgKScLT5n9wsVu8NT57vmrN1uye0hKDX0qZfetWTZ1bhqyUWbdQc5gqFpOkzZkyY1lJ0dklTGe8RlZgAe8c%2FYZDpX2Cb5%2BGRYjTq8%2FjAlCbY4mleK8MUs8rzYteqcwoi8BXYj4yS6Sl1pZakrHXVo7MZdeau53lv3y9rv759u2NkgH2lbnQhci6gXmvwuxUz3C48TD1BlZsET0hXnk9IPEAMNMLzy5sAGOqUBBvDdqmlXNwLYpkrGckWQ%2BX319LdDYSm8c%2BJ20spY8na6omiRCFHARt2Yp4bfNMu1cXGq2Z0yiiXNnSIJK8caSRsSO%2BepCZZ81F0MxwIOzdvPlo24TFfb28DTtovizalDqEorFHSZOGbF3Nu3%2FfWKdVm5XHlEGSQg4kEOlLCDHir1dAMNcCXZ1Ss7P3aZKdgjvG6TDzxsFWq%2BkfbLYPun3GAemeBN&X-Amz-Signature=6be3c08a4fb291c616d880a8cc74b3f623e5b360aa6e73bdadd0ad9abd9a9a59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
