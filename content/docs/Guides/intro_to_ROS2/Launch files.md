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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7V226C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCshgXL9FVz0X508HHIkz%2F2kYCiTzxC4MJSiSEXZRBV0QIhAPMcQgEjYdrKdSoRgvMLIeAtag%2BsdABxXwgTyEVeNZxEKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLdRq3%2BiMT9PlPDm4q3AN0%2F2boJ5MzZgW8ii%2BWgzrvQxlNPJcCV378h2gnaNI3coM29JcOcnwELimaQL5AVTdtRpU5Hjol7iaR4zlOmPBye4MN59loRGPks6j%2BlpeXyQOJ2kHlfW62sRGy7iTf0sG9M3Z47zoz39iOZJdMLt7Uy3uFk47EgJjbskb79QBAox78y%2B0ZHPwN1z3J6xWUZm40AG6%2BwrMhX%2FZxlm3xdwCB4w6nDu3imayHHw2sDxop7dH3FWNfK%2FuLgur25KIRKrAKvXSjYULgZRMHRo45mBjzEjEifpROO%2FE80VI4nniWWGyW%2FHewAr2R0Lu%2FE3%2BGV23S7VQg0sWeoYG3rBvNnKYYkzG2Uf27evxk1aPudQRPMS96dWCj3uq4PBsXSHhMW%2BgAeaNl%2FTtTj2iI6yC16eOjNEngDUpjRtQukGk4mbe%2FviDAjGTjM0mVJftvZdJEQjTylM%2F%2BMyHuHPPodYTqjPZjqC1A4u%2BIa4sUwJaVfb6SzqFnZsALOQdGeoBZUWs5tF8rH4qYQx4a9yDAp0UCxYHgcnnT7mYhldcVHpQHFSWbKvVZvxDctQpJ8Bio36i5Catvmx245JtDxJRewaJNPZWM6onw1MXxLZ%2BHwDp3oCLt5gzOmjdSBtraQX6vHDDYg6%2B%2FBjqkAbzfF1khaa33wj1ZPMRu7GyLM5GMpD00FxjFn9puwOE5nLQim8hnSTxghPiC2lF69YSTSLcrtvMd13GrC4nVTZp2YxOzjF3eulZpYiDAygO1cOLYP9iM2Azyojk0jWOxnH6S5o8JEdw2RzxuagQ5SPJPH9oEoEZnLtFkN3K5b7RuR83v39OAH4Y%2BA%2BuyvGUBQ%2BDgH%2Bw%2F%2F%2FzUzx9WkP7ZQXGFCF9O&X-Amz-Signature=943fc88f5eb29923e7141bc75af80bfe6cd4442457d1769a6b29a4c601c43703&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7V226C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCshgXL9FVz0X508HHIkz%2F2kYCiTzxC4MJSiSEXZRBV0QIhAPMcQgEjYdrKdSoRgvMLIeAtag%2BsdABxXwgTyEVeNZxEKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLdRq3%2BiMT9PlPDm4q3AN0%2F2boJ5MzZgW8ii%2BWgzrvQxlNPJcCV378h2gnaNI3coM29JcOcnwELimaQL5AVTdtRpU5Hjol7iaR4zlOmPBye4MN59loRGPks6j%2BlpeXyQOJ2kHlfW62sRGy7iTf0sG9M3Z47zoz39iOZJdMLt7Uy3uFk47EgJjbskb79QBAox78y%2B0ZHPwN1z3J6xWUZm40AG6%2BwrMhX%2FZxlm3xdwCB4w6nDu3imayHHw2sDxop7dH3FWNfK%2FuLgur25KIRKrAKvXSjYULgZRMHRo45mBjzEjEifpROO%2FE80VI4nniWWGyW%2FHewAr2R0Lu%2FE3%2BGV23S7VQg0sWeoYG3rBvNnKYYkzG2Uf27evxk1aPudQRPMS96dWCj3uq4PBsXSHhMW%2BgAeaNl%2FTtTj2iI6yC16eOjNEngDUpjRtQukGk4mbe%2FviDAjGTjM0mVJftvZdJEQjTylM%2F%2BMyHuHPPodYTqjPZjqC1A4u%2BIa4sUwJaVfb6SzqFnZsALOQdGeoBZUWs5tF8rH4qYQx4a9yDAp0UCxYHgcnnT7mYhldcVHpQHFSWbKvVZvxDctQpJ8Bio36i5Catvmx245JtDxJRewaJNPZWM6onw1MXxLZ%2BHwDp3oCLt5gzOmjdSBtraQX6vHDDYg6%2B%2FBjqkAbzfF1khaa33wj1ZPMRu7GyLM5GMpD00FxjFn9puwOE5nLQim8hnSTxghPiC2lF69YSTSLcrtvMd13GrC4nVTZp2YxOzjF3eulZpYiDAygO1cOLYP9iM2Azyojk0jWOxnH6S5o8JEdw2RzxuagQ5SPJPH9oEoEZnLtFkN3K5b7RuR83v39OAH4Y%2BA%2BuyvGUBQ%2BDgH%2Bw%2F%2F%2FzUzx9WkP7ZQXGFCF9O&X-Amz-Signature=3f36806f31dd92f1416f1666d61a7e34b68993e745ab480fe567a0e6d5b01fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R7V226C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCshgXL9FVz0X508HHIkz%2F2kYCiTzxC4MJSiSEXZRBV0QIhAPMcQgEjYdrKdSoRgvMLIeAtag%2BsdABxXwgTyEVeNZxEKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLdRq3%2BiMT9PlPDm4q3AN0%2F2boJ5MzZgW8ii%2BWgzrvQxlNPJcCV378h2gnaNI3coM29JcOcnwELimaQL5AVTdtRpU5Hjol7iaR4zlOmPBye4MN59loRGPks6j%2BlpeXyQOJ2kHlfW62sRGy7iTf0sG9M3Z47zoz39iOZJdMLt7Uy3uFk47EgJjbskb79QBAox78y%2B0ZHPwN1z3J6xWUZm40AG6%2BwrMhX%2FZxlm3xdwCB4w6nDu3imayHHw2sDxop7dH3FWNfK%2FuLgur25KIRKrAKvXSjYULgZRMHRo45mBjzEjEifpROO%2FE80VI4nniWWGyW%2FHewAr2R0Lu%2FE3%2BGV23S7VQg0sWeoYG3rBvNnKYYkzG2Uf27evxk1aPudQRPMS96dWCj3uq4PBsXSHhMW%2BgAeaNl%2FTtTj2iI6yC16eOjNEngDUpjRtQukGk4mbe%2FviDAjGTjM0mVJftvZdJEQjTylM%2F%2BMyHuHPPodYTqjPZjqC1A4u%2BIa4sUwJaVfb6SzqFnZsALOQdGeoBZUWs5tF8rH4qYQx4a9yDAp0UCxYHgcnnT7mYhldcVHpQHFSWbKvVZvxDctQpJ8Bio36i5Catvmx245JtDxJRewaJNPZWM6onw1MXxLZ%2BHwDp3oCLt5gzOmjdSBtraQX6vHDDYg6%2B%2FBjqkAbzfF1khaa33wj1ZPMRu7GyLM5GMpD00FxjFn9puwOE5nLQim8hnSTxghPiC2lF69YSTSLcrtvMd13GrC4nVTZp2YxOzjF3eulZpYiDAygO1cOLYP9iM2Azyojk0jWOxnH6S5o8JEdw2RzxuagQ5SPJPH9oEoEZnLtFkN3K5b7RuR83v39OAH4Y%2BA%2BuyvGUBQ%2BDgH%2Bw%2F%2F%2FzUzx9WkP7ZQXGFCF9O&X-Amz-Signature=6d54dd192be759f704a5ecbb43e6477a5c4ff789ef20296a35de24b2d9277064&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
