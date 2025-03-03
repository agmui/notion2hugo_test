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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOAH4JV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICo5ITJ%2BpKVbP0jNutJinmJlG0n5%2BVgxvY8aCsnKqUDiAiEAvaTa5k%2FUF7%2Bj6r23myzljrH0kjKTDLnqNkq8zvyjDmMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX0mVdtkX24Wf8zIyrcA4J%2FeVv1HD1rSD1PpCJzX3u3ruVZOQbayLrCoMklgphen5fth%2BUV3CYtCS6dagvxQWhyPQUYRYAd6iwBuGB%2Brnve8mociR3ijJAFfsgOZUvzTCGMb4GVTdlV%2Bbp49DDcgcHAc99FNXOv1IvMRRtQv%2F7a07BF6fdRRv2PGJ6GqVskyKm9D0pK8VxJMYOCBSfJQonEvFBcagszaT4DBcJaEcZG2mssLIQ0FKn5UB3k%2FopTwxhCqblhL7GS1UxA7wetkVmNh4t4Mab7vlPC8TdwasFk88Gb0gjv3ZYLviUrgwQ1QWQDMNawewnZCBVCld8H2VKBVZIz7GwmRY6Y9Mx7k3v%2FM66sspLyvVQosANpA4Gn9jHwxcPm9VXoaTwMlMca22kmjLqkYlUyENUvu3I1FdjO6qSwmHPr%2BNti4g9rv9JO0HIkitHsdJsMNGuLpsNUP7ipdFAS8sYjEkJfITqHGXIiIQKSQg4WuGYSyqsCLt%2Brt9VrnKhpU2HdpVZ8cb7aCv%2Fhg8lRnmo4ME038nK14R6wGzL5cjSUHDALOzQCaAJoi1XL118eRe%2F2LfeSD6HdZU7FB4TIJe%2F%2FF42cMOhu6WOdFmKviyS7325uFMsIRvT6a1u8B6BZ6K2hyY9pMJqWlb4GOqUB1UcuhExVhaVQr0u2XfWGx99fI8n2GWx4HsuBf86%2F3Fo90UsObIXHlCQkg09Cd%2BpEwYvYwS4NgPV6FDFoV4NM9YLMw9x5tRswNvXYwRDmfn1w5yGOYHSzAZ%2B2jxzKPMbqfyfynuQEDsXRmR5j3AdYKwTi9Fdg0ujdwMSc50wa3KAcoi75%2Fj2QNv9%2F4YDj9dkDjuMfksSElaHfW4ewXYwoNout%2FIGe&X-Amz-Signature=dec011ea002de2932ab469ba8b6a8d4d4a1db149f2491304de7bae18b4e357ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOAH4JV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICo5ITJ%2BpKVbP0jNutJinmJlG0n5%2BVgxvY8aCsnKqUDiAiEAvaTa5k%2FUF7%2Bj6r23myzljrH0kjKTDLnqNkq8zvyjDmMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX0mVdtkX24Wf8zIyrcA4J%2FeVv1HD1rSD1PpCJzX3u3ruVZOQbayLrCoMklgphen5fth%2BUV3CYtCS6dagvxQWhyPQUYRYAd6iwBuGB%2Brnve8mociR3ijJAFfsgOZUvzTCGMb4GVTdlV%2Bbp49DDcgcHAc99FNXOv1IvMRRtQv%2F7a07BF6fdRRv2PGJ6GqVskyKm9D0pK8VxJMYOCBSfJQonEvFBcagszaT4DBcJaEcZG2mssLIQ0FKn5UB3k%2FopTwxhCqblhL7GS1UxA7wetkVmNh4t4Mab7vlPC8TdwasFk88Gb0gjv3ZYLviUrgwQ1QWQDMNawewnZCBVCld8H2VKBVZIz7GwmRY6Y9Mx7k3v%2FM66sspLyvVQosANpA4Gn9jHwxcPm9VXoaTwMlMca22kmjLqkYlUyENUvu3I1FdjO6qSwmHPr%2BNti4g9rv9JO0HIkitHsdJsMNGuLpsNUP7ipdFAS8sYjEkJfITqHGXIiIQKSQg4WuGYSyqsCLt%2Brt9VrnKhpU2HdpVZ8cb7aCv%2Fhg8lRnmo4ME038nK14R6wGzL5cjSUHDALOzQCaAJoi1XL118eRe%2F2LfeSD6HdZU7FB4TIJe%2F%2FF42cMOhu6WOdFmKviyS7325uFMsIRvT6a1u8B6BZ6K2hyY9pMJqWlb4GOqUB1UcuhExVhaVQr0u2XfWGx99fI8n2GWx4HsuBf86%2F3Fo90UsObIXHlCQkg09Cd%2BpEwYvYwS4NgPV6FDFoV4NM9YLMw9x5tRswNvXYwRDmfn1w5yGOYHSzAZ%2B2jxzKPMbqfyfynuQEDsXRmR5j3AdYKwTi9Fdg0ujdwMSc50wa3KAcoi75%2Fj2QNv9%2F4YDj9dkDjuMfksSElaHfW4ewXYwoNout%2FIGe&X-Amz-Signature=9c26b4a739ce7c4a5f28bd4a8adac8dda9398fc717445a2071c719e46945cf8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOAH4JV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICo5ITJ%2BpKVbP0jNutJinmJlG0n5%2BVgxvY8aCsnKqUDiAiEAvaTa5k%2FUF7%2Bj6r23myzljrH0kjKTDLnqNkq8zvyjDmMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX0mVdtkX24Wf8zIyrcA4J%2FeVv1HD1rSD1PpCJzX3u3ruVZOQbayLrCoMklgphen5fth%2BUV3CYtCS6dagvxQWhyPQUYRYAd6iwBuGB%2Brnve8mociR3ijJAFfsgOZUvzTCGMb4GVTdlV%2Bbp49DDcgcHAc99FNXOv1IvMRRtQv%2F7a07BF6fdRRv2PGJ6GqVskyKm9D0pK8VxJMYOCBSfJQonEvFBcagszaT4DBcJaEcZG2mssLIQ0FKn5UB3k%2FopTwxhCqblhL7GS1UxA7wetkVmNh4t4Mab7vlPC8TdwasFk88Gb0gjv3ZYLviUrgwQ1QWQDMNawewnZCBVCld8H2VKBVZIz7GwmRY6Y9Mx7k3v%2FM66sspLyvVQosANpA4Gn9jHwxcPm9VXoaTwMlMca22kmjLqkYlUyENUvu3I1FdjO6qSwmHPr%2BNti4g9rv9JO0HIkitHsdJsMNGuLpsNUP7ipdFAS8sYjEkJfITqHGXIiIQKSQg4WuGYSyqsCLt%2Brt9VrnKhpU2HdpVZ8cb7aCv%2Fhg8lRnmo4ME038nK14R6wGzL5cjSUHDALOzQCaAJoi1XL118eRe%2F2LfeSD6HdZU7FB4TIJe%2F%2FF42cMOhu6WOdFmKviyS7325uFMsIRvT6a1u8B6BZ6K2hyY9pMJqWlb4GOqUB1UcuhExVhaVQr0u2XfWGx99fI8n2GWx4HsuBf86%2F3Fo90UsObIXHlCQkg09Cd%2BpEwYvYwS4NgPV6FDFoV4NM9YLMw9x5tRswNvXYwRDmfn1w5yGOYHSzAZ%2B2jxzKPMbqfyfynuQEDsXRmR5j3AdYKwTi9Fdg0ujdwMSc50wa3KAcoi75%2Fj2QNv9%2F4YDj9dkDjuMfksSElaHfW4ewXYwoNout%2FIGe&X-Amz-Signature=f0cbc31de145257bdd0fe34adae37cfbbc3c172a49667bb4597f5defb3475dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
