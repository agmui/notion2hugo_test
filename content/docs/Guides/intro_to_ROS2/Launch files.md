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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OO43COO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCTD18bSR%2FUW1FcQGZaRtYKsx6Eti5UTO5lR0LYmViULAIhAJi25kHBJpH10iwZ3iAKl0Yc3Y6p%2BoXgeHqL%2FR1JZH6JKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl0%2FgylgPpLGorGeYq3AMiJEUxdCf35jqNDrwGgGOq4TpfHRb6R5tuh41ESG6ruPEieZAqNsQoldUjrgOZLhT4JkkSDKQRCTjJkctHfghHI6tJaXQTr78ZP392h9hwwZtVIYCxpfWVyzcp8AYYp0dkMhh8DaUVQ6E7EnJgjLmk6wLDGSkiDWVEF9LayY%2B6%2FEeM4dKd3N8Sww7RPZxS4jVUFYX%2BISHYbBPPsFHBouHZMIVQPccuVsGFsyo52N7UdBGYd9yIkMt5TqPjIO7ylnDr%2Fx6rxIkmmJZqkGeKUHRpxZaU4X0%2FUCCvLetm9lx9gAkb8v5Q2JDsfzIYH8FmUE9YumJSkwAL63rWzEgk1Sbt6LXJp3%2BFG0Pc%2FjHH4BoX67HIqKWKrDTtXF%2Fo5nbp2jfphGyqASKf%2F0AXIqss0uUhCAZ9sCyZ%2BqAV310WhCLUr4nPiNMJm9Pn5fbCBjWhIcFG7BBYPzBZBW%2FD9Wab16DtIioT7Ret9XN7npNEst1vqYzUfjZYNKAuFEP6nRC0GwgqOCBgX8SXS6FpGpi5hpLbrc%2B03EID%2FU8y6kNP7FVewH1zPDCW%2BS2s6oqPXnTo9nSVJzeG0ZjtTa%2F2ZyFdhAvRuzfg%2BhcgtVhNxYbXywQCt73kN7dDUZCdWQdN0DCiv%2BrDBjqkAaCwK%2F0waVr1I%2BSHw%2FkcDcperEsNoibsD%2Fmimc7LamOvfA4SbZLfeK%2FROlj4UljJMHP439hWLVqtx39eXkFeOqPyqqk4brBea1l78jErryOEjvxxAf1UwAh7R4lw90ZHPCTOoTe2Kw4h9g8Yy%2B5q7tMEurSfuRxfVEBprHUhq%2B09YU%2BW6wfUwTp%2BZg5UD92AqQwZ9OAgEKFv4ie4SP1Xa706ht4r&X-Amz-Signature=019e7b83fe1cf862837b6905735a6c8aa34be24c9d6c10ca8e548de5351a1ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OO43COO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCTD18bSR%2FUW1FcQGZaRtYKsx6Eti5UTO5lR0LYmViULAIhAJi25kHBJpH10iwZ3iAKl0Yc3Y6p%2BoXgeHqL%2FR1JZH6JKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl0%2FgylgPpLGorGeYq3AMiJEUxdCf35jqNDrwGgGOq4TpfHRb6R5tuh41ESG6ruPEieZAqNsQoldUjrgOZLhT4JkkSDKQRCTjJkctHfghHI6tJaXQTr78ZP392h9hwwZtVIYCxpfWVyzcp8AYYp0dkMhh8DaUVQ6E7EnJgjLmk6wLDGSkiDWVEF9LayY%2B6%2FEeM4dKd3N8Sww7RPZxS4jVUFYX%2BISHYbBPPsFHBouHZMIVQPccuVsGFsyo52N7UdBGYd9yIkMt5TqPjIO7ylnDr%2Fx6rxIkmmJZqkGeKUHRpxZaU4X0%2FUCCvLetm9lx9gAkb8v5Q2JDsfzIYH8FmUE9YumJSkwAL63rWzEgk1Sbt6LXJp3%2BFG0Pc%2FjHH4BoX67HIqKWKrDTtXF%2Fo5nbp2jfphGyqASKf%2F0AXIqss0uUhCAZ9sCyZ%2BqAV310WhCLUr4nPiNMJm9Pn5fbCBjWhIcFG7BBYPzBZBW%2FD9Wab16DtIioT7Ret9XN7npNEst1vqYzUfjZYNKAuFEP6nRC0GwgqOCBgX8SXS6FpGpi5hpLbrc%2B03EID%2FU8y6kNP7FVewH1zPDCW%2BS2s6oqPXnTo9nSVJzeG0ZjtTa%2F2ZyFdhAvRuzfg%2BhcgtVhNxYbXywQCt73kN7dDUZCdWQdN0DCiv%2BrDBjqkAaCwK%2F0waVr1I%2BSHw%2FkcDcperEsNoibsD%2Fmimc7LamOvfA4SbZLfeK%2FROlj4UljJMHP439hWLVqtx39eXkFeOqPyqqk4brBea1l78jErryOEjvxxAf1UwAh7R4lw90ZHPCTOoTe2Kw4h9g8Yy%2B5q7tMEurSfuRxfVEBprHUhq%2B09YU%2BW6wfUwTp%2BZg5UD92AqQwZ9OAgEKFv4ie4SP1Xa706ht4r&X-Amz-Signature=c2a89a23731f4196f4d3421874bf0f8f0eb48c6d46811f8b7aa3b9f1a1840d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OO43COO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCTD18bSR%2FUW1FcQGZaRtYKsx6Eti5UTO5lR0LYmViULAIhAJi25kHBJpH10iwZ3iAKl0Yc3Y6p%2BoXgeHqL%2FR1JZH6JKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl0%2FgylgPpLGorGeYq3AMiJEUxdCf35jqNDrwGgGOq4TpfHRb6R5tuh41ESG6ruPEieZAqNsQoldUjrgOZLhT4JkkSDKQRCTjJkctHfghHI6tJaXQTr78ZP392h9hwwZtVIYCxpfWVyzcp8AYYp0dkMhh8DaUVQ6E7EnJgjLmk6wLDGSkiDWVEF9LayY%2B6%2FEeM4dKd3N8Sww7RPZxS4jVUFYX%2BISHYbBPPsFHBouHZMIVQPccuVsGFsyo52N7UdBGYd9yIkMt5TqPjIO7ylnDr%2Fx6rxIkmmJZqkGeKUHRpxZaU4X0%2FUCCvLetm9lx9gAkb8v5Q2JDsfzIYH8FmUE9YumJSkwAL63rWzEgk1Sbt6LXJp3%2BFG0Pc%2FjHH4BoX67HIqKWKrDTtXF%2Fo5nbp2jfphGyqASKf%2F0AXIqss0uUhCAZ9sCyZ%2BqAV310WhCLUr4nPiNMJm9Pn5fbCBjWhIcFG7BBYPzBZBW%2FD9Wab16DtIioT7Ret9XN7npNEst1vqYzUfjZYNKAuFEP6nRC0GwgqOCBgX8SXS6FpGpi5hpLbrc%2B03EID%2FU8y6kNP7FVewH1zPDCW%2BS2s6oqPXnTo9nSVJzeG0ZjtTa%2F2ZyFdhAvRuzfg%2BhcgtVhNxYbXywQCt73kN7dDUZCdWQdN0DCiv%2BrDBjqkAaCwK%2F0waVr1I%2BSHw%2FkcDcperEsNoibsD%2Fmimc7LamOvfA4SbZLfeK%2FROlj4UljJMHP439hWLVqtx39eXkFeOqPyqqk4brBea1l78jErryOEjvxxAf1UwAh7R4lw90ZHPCTOoTe2Kw4h9g8Yy%2B5q7tMEurSfuRxfVEBprHUhq%2B09YU%2BW6wfUwTp%2BZg5UD92AqQwZ9OAgEKFv4ie4SP1Xa706ht4r&X-Amz-Signature=5ef12794c8af144ba6f6f00ba62776f4a6e974e31a0cbfea2ed7db4da45feb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
