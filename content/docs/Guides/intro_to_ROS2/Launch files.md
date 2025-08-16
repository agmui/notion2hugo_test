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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J2MK3E3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCOC18UsHwgl3Z%2BMfjDCNCWEax9VbnQJlZypU3nWuNnYgIgcssu8N8QtSpDquxi%2Bfu7tRtWfDmmsrExPR8mn6MGBXwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJg5R2w%2BBgxOnkJPdircA%2FlDGOQrNq3SK%2B%2BvQhwmexP%2Ba5MRIZR0IhCclt2UN9PolQFdsvcPYuHgvPGC3IGJ%2BOVyYuyajUuN4IClna4KJhlGmhGWbkpWEBslEsD%2BJ9Dp0DxGTb%2BtDPRyVmvffq%2FH4qCt%2FC54LDXZJopYeU0Zx7wqGjt6mnyOFLusrFeTASygF1eHxL4lyVptErttRFeO2eci1zogp6yvqbtPbG0rrm0ZVV1jJyijOuwm%2FR1L%2B2ag1RmqxUfzX3BKH23RtkDjlOeXYTcU4pMMA0TKgXN4FbNv4eSynZNCFXn6qMYZSKjLMB4dub8tMtgNmrlIz8iWygkz08%2FnXPDnqpKNi8uVllc7AGsATxKWmbsaL9OiK%2FeqnZfxQIZ7tj78MPjtT6ni1Ayo9xQbvndweVheLY0OMwdWT3lrtndSHmSR%2BJs76R21N7wuP0L6eCbVEhZdg2mnGrWgPybYe06p%2BQiSM9NrO9vGJSQ6rdBZ6WefDaLRhZQx5uzl9vn7nJZqX16LR1YpdpU759fFE0i0zXuJoL8V4WJQMQ4ujXj%2FxpuGzGe0bqLj2VIhJSCinQbodrcZkHnGHqH0l%2BegmrPbZMKQ6wga7FmkMwLUkmp3XWe7HV0P8vW6NFz8PianA%2BBS4xyuMPOKgMUGOqUBBok2V878Fr8ybRzH%2BgG3F8mC2bdDTAPxVj65qLuVPHxOdIfHj0Mu%2F7Pm8vUhDOkJYl3ecO5D9OuH69sWQz3B2MnVNJRfPJIh085oMIvjRldP0CjUDIWcb9m5x9u%2F70LnFK655Gc1OeoqgdtdeRMOUV8DwP1BBSKn0yFlUMRi27HlsvBM8uzcEr%2Fm%2FEKW7bqywErp7nH%2BGAS504A%2BhUDve3f269DK&X-Amz-Signature=0f2957d8922dd35848ca1cdd05cf92ff6c6501ac4e3950865a1f78b5057e8f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J2MK3E3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCOC18UsHwgl3Z%2BMfjDCNCWEax9VbnQJlZypU3nWuNnYgIgcssu8N8QtSpDquxi%2Bfu7tRtWfDmmsrExPR8mn6MGBXwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJg5R2w%2BBgxOnkJPdircA%2FlDGOQrNq3SK%2B%2BvQhwmexP%2Ba5MRIZR0IhCclt2UN9PolQFdsvcPYuHgvPGC3IGJ%2BOVyYuyajUuN4IClna4KJhlGmhGWbkpWEBslEsD%2BJ9Dp0DxGTb%2BtDPRyVmvffq%2FH4qCt%2FC54LDXZJopYeU0Zx7wqGjt6mnyOFLusrFeTASygF1eHxL4lyVptErttRFeO2eci1zogp6yvqbtPbG0rrm0ZVV1jJyijOuwm%2FR1L%2B2ag1RmqxUfzX3BKH23RtkDjlOeXYTcU4pMMA0TKgXN4FbNv4eSynZNCFXn6qMYZSKjLMB4dub8tMtgNmrlIz8iWygkz08%2FnXPDnqpKNi8uVllc7AGsATxKWmbsaL9OiK%2FeqnZfxQIZ7tj78MPjtT6ni1Ayo9xQbvndweVheLY0OMwdWT3lrtndSHmSR%2BJs76R21N7wuP0L6eCbVEhZdg2mnGrWgPybYe06p%2BQiSM9NrO9vGJSQ6rdBZ6WefDaLRhZQx5uzl9vn7nJZqX16LR1YpdpU759fFE0i0zXuJoL8V4WJQMQ4ujXj%2FxpuGzGe0bqLj2VIhJSCinQbodrcZkHnGHqH0l%2BegmrPbZMKQ6wga7FmkMwLUkmp3XWe7HV0P8vW6NFz8PianA%2BBS4xyuMPOKgMUGOqUBBok2V878Fr8ybRzH%2BgG3F8mC2bdDTAPxVj65qLuVPHxOdIfHj0Mu%2F7Pm8vUhDOkJYl3ecO5D9OuH69sWQz3B2MnVNJRfPJIh085oMIvjRldP0CjUDIWcb9m5x9u%2F70LnFK655Gc1OeoqgdtdeRMOUV8DwP1BBSKn0yFlUMRi27HlsvBM8uzcEr%2Fm%2FEKW7bqywErp7nH%2BGAS504A%2BhUDve3f269DK&X-Amz-Signature=d649a074cfcf1452e2be7901c640d429cdde8a36d0acfe9ed4e650b57c07d171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J2MK3E3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCOC18UsHwgl3Z%2BMfjDCNCWEax9VbnQJlZypU3nWuNnYgIgcssu8N8QtSpDquxi%2Bfu7tRtWfDmmsrExPR8mn6MGBXwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJg5R2w%2BBgxOnkJPdircA%2FlDGOQrNq3SK%2B%2BvQhwmexP%2Ba5MRIZR0IhCclt2UN9PolQFdsvcPYuHgvPGC3IGJ%2BOVyYuyajUuN4IClna4KJhlGmhGWbkpWEBslEsD%2BJ9Dp0DxGTb%2BtDPRyVmvffq%2FH4qCt%2FC54LDXZJopYeU0Zx7wqGjt6mnyOFLusrFeTASygF1eHxL4lyVptErttRFeO2eci1zogp6yvqbtPbG0rrm0ZVV1jJyijOuwm%2FR1L%2B2ag1RmqxUfzX3BKH23RtkDjlOeXYTcU4pMMA0TKgXN4FbNv4eSynZNCFXn6qMYZSKjLMB4dub8tMtgNmrlIz8iWygkz08%2FnXPDnqpKNi8uVllc7AGsATxKWmbsaL9OiK%2FeqnZfxQIZ7tj78MPjtT6ni1Ayo9xQbvndweVheLY0OMwdWT3lrtndSHmSR%2BJs76R21N7wuP0L6eCbVEhZdg2mnGrWgPybYe06p%2BQiSM9NrO9vGJSQ6rdBZ6WefDaLRhZQx5uzl9vn7nJZqX16LR1YpdpU759fFE0i0zXuJoL8V4WJQMQ4ujXj%2FxpuGzGe0bqLj2VIhJSCinQbodrcZkHnGHqH0l%2BegmrPbZMKQ6wga7FmkMwLUkmp3XWe7HV0P8vW6NFz8PianA%2BBS4xyuMPOKgMUGOqUBBok2V878Fr8ybRzH%2BgG3F8mC2bdDTAPxVj65qLuVPHxOdIfHj0Mu%2F7Pm8vUhDOkJYl3ecO5D9OuH69sWQz3B2MnVNJRfPJIh085oMIvjRldP0CjUDIWcb9m5x9u%2F70LnFK655Gc1OeoqgdtdeRMOUV8DwP1BBSKn0yFlUMRi27HlsvBM8uzcEr%2Fm%2FEKW7bqywErp7nH%2BGAS504A%2BhUDve3f269DK&X-Amz-Signature=491b3a1d09a90b06f0aadfe9e0faa95cc30ea2de65c44a635a11644cc7fb5aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
