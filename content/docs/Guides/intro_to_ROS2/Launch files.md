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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2W2T47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFswa7cG9alRYTiE9SNKvMS81Wb%2FRtcp0jQ%2Fz7UQpZAqAiEAkdkQhTEQto1sp5T7%2Fgb%2BMnwWxx9XOpCl0jTAcSKDEZ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxw5UWxCpLtF1zHfSrcA6njfpXDYZbmS80LyXNlxzbuGZ8oiNgF5R5PPQ4Ikp0t0aCbbRpGmQGDm8cmRGijERRMnR0FeT2fuf64ycXiW4ygSO7ZK8hZ8fgr7QImljPOG8ovihfEhoQx3orcnrDXN8fk1Pq4BcGf4RmpqZ%2FuR7sdS2KRyeRDjq2YBNbR3CGjxIPYvgD7gOxmTGvbQP1atRa%2BzudYl5E7TS4nXXCeV2CKoHF7nIHOZb32Fja2uUSRpacjxGq5EczPymClUS7HvOQJYjwyKDWLD5NzXY3Lt8SwnVUupuxXnHNvYCb9xoVRnVALMvwGEGhZ8nshcpo8d0cB6vC2yZBYTO4s22%2BwoihyAybdKw%2BFvS6vnW48GWpHNsPK9wQCZDKR9hhD7rWTbRPUtVKjYruR6cpMA03LeOc9%2BB%2BmFDMiuODct2rYBjn1e5EjyWYulexm51kklbszVZsqoTAwR54w0hARIHSBHqbmwQo64wdC6LXtzralgmQvgkZfAILJ13MOrswMK0%2B9zIS6RG0Nda3Ktmx5ooVRjtrGUbas4638eeKEQi1Vc4ptr9gAMg39kl2dhkh%2Ft%2B8QRZymIiWNHvFn7jhEfSr53NRbkwXrPCizTflZlbU1aOK3jKqz64lR3IAsEcuhMO714MQGOqUBFANkdiBMwg1nn0m%2BLuGTO%2BNpE1VdAWVAqeyVVDOVtLHeBoxlLrRr%2FPM2Ou9sQvW%2BrPCL3b%2Bs8tbkzNNNEUsnsAk7u2AIkOlmnUgB2uneEeud5fsbJZchFD0qSWk3oqOJZgGs7lkdWlO%2BzTvBUsvc33yES50exTpquoRFQP%2BTiGSO%2FP5HETMxvqSyJEIdw%2F6XZLhOx8nSnWK1nJgZMX18U26cTDn%2B&X-Amz-Signature=9f669ff1f2546e98ad5f765559ea3e3e873a479dbabd109578c401f5f4290d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2W2T47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFswa7cG9alRYTiE9SNKvMS81Wb%2FRtcp0jQ%2Fz7UQpZAqAiEAkdkQhTEQto1sp5T7%2Fgb%2BMnwWxx9XOpCl0jTAcSKDEZ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxw5UWxCpLtF1zHfSrcA6njfpXDYZbmS80LyXNlxzbuGZ8oiNgF5R5PPQ4Ikp0t0aCbbRpGmQGDm8cmRGijERRMnR0FeT2fuf64ycXiW4ygSO7ZK8hZ8fgr7QImljPOG8ovihfEhoQx3orcnrDXN8fk1Pq4BcGf4RmpqZ%2FuR7sdS2KRyeRDjq2YBNbR3CGjxIPYvgD7gOxmTGvbQP1atRa%2BzudYl5E7TS4nXXCeV2CKoHF7nIHOZb32Fja2uUSRpacjxGq5EczPymClUS7HvOQJYjwyKDWLD5NzXY3Lt8SwnVUupuxXnHNvYCb9xoVRnVALMvwGEGhZ8nshcpo8d0cB6vC2yZBYTO4s22%2BwoihyAybdKw%2BFvS6vnW48GWpHNsPK9wQCZDKR9hhD7rWTbRPUtVKjYruR6cpMA03LeOc9%2BB%2BmFDMiuODct2rYBjn1e5EjyWYulexm51kklbszVZsqoTAwR54w0hARIHSBHqbmwQo64wdC6LXtzralgmQvgkZfAILJ13MOrswMK0%2B9zIS6RG0Nda3Ktmx5ooVRjtrGUbas4638eeKEQi1Vc4ptr9gAMg39kl2dhkh%2Ft%2B8QRZymIiWNHvFn7jhEfSr53NRbkwXrPCizTflZlbU1aOK3jKqz64lR3IAsEcuhMO714MQGOqUBFANkdiBMwg1nn0m%2BLuGTO%2BNpE1VdAWVAqeyVVDOVtLHeBoxlLrRr%2FPM2Ou9sQvW%2BrPCL3b%2Bs8tbkzNNNEUsnsAk7u2AIkOlmnUgB2uneEeud5fsbJZchFD0qSWk3oqOJZgGs7lkdWlO%2BzTvBUsvc33yES50exTpquoRFQP%2BTiGSO%2FP5HETMxvqSyJEIdw%2F6XZLhOx8nSnWK1nJgZMX18U26cTDn%2B&X-Amz-Signature=96b9ab11535e8104857f0fc82bc24278d22cc97ddda018435444cd9f7ddd0d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS2W2T47%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFswa7cG9alRYTiE9SNKvMS81Wb%2FRtcp0jQ%2Fz7UQpZAqAiEAkdkQhTEQto1sp5T7%2Fgb%2BMnwWxx9XOpCl0jTAcSKDEZ8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxw5UWxCpLtF1zHfSrcA6njfpXDYZbmS80LyXNlxzbuGZ8oiNgF5R5PPQ4Ikp0t0aCbbRpGmQGDm8cmRGijERRMnR0FeT2fuf64ycXiW4ygSO7ZK8hZ8fgr7QImljPOG8ovihfEhoQx3orcnrDXN8fk1Pq4BcGf4RmpqZ%2FuR7sdS2KRyeRDjq2YBNbR3CGjxIPYvgD7gOxmTGvbQP1atRa%2BzudYl5E7TS4nXXCeV2CKoHF7nIHOZb32Fja2uUSRpacjxGq5EczPymClUS7HvOQJYjwyKDWLD5NzXY3Lt8SwnVUupuxXnHNvYCb9xoVRnVALMvwGEGhZ8nshcpo8d0cB6vC2yZBYTO4s22%2BwoihyAybdKw%2BFvS6vnW48GWpHNsPK9wQCZDKR9hhD7rWTbRPUtVKjYruR6cpMA03LeOc9%2BB%2BmFDMiuODct2rYBjn1e5EjyWYulexm51kklbszVZsqoTAwR54w0hARIHSBHqbmwQo64wdC6LXtzralgmQvgkZfAILJ13MOrswMK0%2B9zIS6RG0Nda3Ktmx5ooVRjtrGUbas4638eeKEQi1Vc4ptr9gAMg39kl2dhkh%2Ft%2B8QRZymIiWNHvFn7jhEfSr53NRbkwXrPCizTflZlbU1aOK3jKqz64lR3IAsEcuhMO714MQGOqUBFANkdiBMwg1nn0m%2BLuGTO%2BNpE1VdAWVAqeyVVDOVtLHeBoxlLrRr%2FPM2Ou9sQvW%2BrPCL3b%2Bs8tbkzNNNEUsnsAk7u2AIkOlmnUgB2uneEeud5fsbJZchFD0qSWk3oqOJZgGs7lkdWlO%2BzTvBUsvc33yES50exTpquoRFQP%2BTiGSO%2FP5HETMxvqSyJEIdw%2F6XZLhOx8nSnWK1nJgZMX18U26cTDn%2B&X-Amz-Signature=bb9e9b80805e90739dfd03361da03c49313cb01bdaee14077288ab2c83bd0fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
