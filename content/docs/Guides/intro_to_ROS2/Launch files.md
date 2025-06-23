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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAVQK3N%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQD7JmsYvuYEQehrUt%2Fxm6ckIoKzdok11DY6xhl%2FEygH8QIgWuwy%2B9aWMr72enFy2aJ2ihYAGlCtrSXDZm5wTtGoVwkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOy1r6xxLJ1ntntS%2FSrcA7sqaK6YmV5ocZaVnCGqz7ENTzMzmGEmpYErIqoAsVbGgy11xmd5E3RV7XSrJip6em1EMKZg87Ls4eTuMf8GqN99hpjZLZRzV7HerjZY5wkwNQLNbEprymUYbbhCBDxmv%2FLVBpmcSXb85OLsoVFVKtZYd5rtMZLGUFBjvBr%2FELLkLKjToYGGAwr6Zo4VmiDQ3z1Ssu3f3rNCMdmOEgUCUWeMr0zluQLmGo7InUoIXjP%2B6H%2BYYiNwLXjsN1DZ7qe9JnyOZ2l5Bgic0zM6U4W%2FN8HclZ9hVDLW0La%2FSa4qMRRpjUtX9zKwcnK4FnTFD4XYPW8LXKhRfft75JJWN37ul7WsHHynGGRxgaNSbk4BYl68pW5yn3fsFfx95mMBbZVf5KzDduVml710H0uUQXF%2Bwn1DAggLmX1pYjsQTWQmMNuddXlzO0ooMdAkF4iDrTPKHJAEXC5e61F%2FaNWXR9s%2BmSDqLMRnQ6RNGlmaR8Rd%2Fc0ntCPKgNuN5HamM6ORWhv8GNDaOPjNAiQzOgdhjtFRT5%2BZ%2B9Uz4%2FiomqPdaJbIyFBR%2BgoYRhuIEOrGfrTCC0oQ%2Fv%2FzZlw69%2Fc%2FMLBTAKoDZMKZ1a%2B%2FlGktOqkwd4SscCFFp7AWmK9RFayc7wL5MKT04sIGOqUBtUnc%2BrklkLqXjbV%2BTdc1oVbCS7vZecUw7T5ZkBjn6FSyDLY6i7fb%2F8bl5HGL1cbdvQjb2zzQmbxPK6fOcud8hvii3Ii9OEz6DcS5g%2FOX1n%2BVrSzFCIPZc3nIN1pPT2AZO7ZhVR8b0U0MlaDIXJVQ3NRK0oZ0cIUtbZQbHDDWtwBzQ3pDIuQqfCGSbuPjhiRv4Kj9SMGIXoRMBmi9czzAQ8%2Bb59yT&X-Amz-Signature=9fcd88321bf59c9645db95c912b4cabfca8a5d4558db0e714b1a49754de25ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAVQK3N%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQD7JmsYvuYEQehrUt%2Fxm6ckIoKzdok11DY6xhl%2FEygH8QIgWuwy%2B9aWMr72enFy2aJ2ihYAGlCtrSXDZm5wTtGoVwkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOy1r6xxLJ1ntntS%2FSrcA7sqaK6YmV5ocZaVnCGqz7ENTzMzmGEmpYErIqoAsVbGgy11xmd5E3RV7XSrJip6em1EMKZg87Ls4eTuMf8GqN99hpjZLZRzV7HerjZY5wkwNQLNbEprymUYbbhCBDxmv%2FLVBpmcSXb85OLsoVFVKtZYd5rtMZLGUFBjvBr%2FELLkLKjToYGGAwr6Zo4VmiDQ3z1Ssu3f3rNCMdmOEgUCUWeMr0zluQLmGo7InUoIXjP%2B6H%2BYYiNwLXjsN1DZ7qe9JnyOZ2l5Bgic0zM6U4W%2FN8HclZ9hVDLW0La%2FSa4qMRRpjUtX9zKwcnK4FnTFD4XYPW8LXKhRfft75JJWN37ul7WsHHynGGRxgaNSbk4BYl68pW5yn3fsFfx95mMBbZVf5KzDduVml710H0uUQXF%2Bwn1DAggLmX1pYjsQTWQmMNuddXlzO0ooMdAkF4iDrTPKHJAEXC5e61F%2FaNWXR9s%2BmSDqLMRnQ6RNGlmaR8Rd%2Fc0ntCPKgNuN5HamM6ORWhv8GNDaOPjNAiQzOgdhjtFRT5%2BZ%2B9Uz4%2FiomqPdaJbIyFBR%2BgoYRhuIEOrGfrTCC0oQ%2Fv%2FzZlw69%2Fc%2FMLBTAKoDZMKZ1a%2B%2FlGktOqkwd4SscCFFp7AWmK9RFayc7wL5MKT04sIGOqUBtUnc%2BrklkLqXjbV%2BTdc1oVbCS7vZecUw7T5ZkBjn6FSyDLY6i7fb%2F8bl5HGL1cbdvQjb2zzQmbxPK6fOcud8hvii3Ii9OEz6DcS5g%2FOX1n%2BVrSzFCIPZc3nIN1pPT2AZO7ZhVR8b0U0MlaDIXJVQ3NRK0oZ0cIUtbZQbHDDWtwBzQ3pDIuQqfCGSbuPjhiRv4Kj9SMGIXoRMBmi9czzAQ8%2Bb59yT&X-Amz-Signature=7b50c84bbab726c9af9d33218f55423eeaad1840736c5ec23cf3c7f28cee31e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVAVQK3N%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQD7JmsYvuYEQehrUt%2Fxm6ckIoKzdok11DY6xhl%2FEygH8QIgWuwy%2B9aWMr72enFy2aJ2ihYAGlCtrSXDZm5wTtGoVwkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOy1r6xxLJ1ntntS%2FSrcA7sqaK6YmV5ocZaVnCGqz7ENTzMzmGEmpYErIqoAsVbGgy11xmd5E3RV7XSrJip6em1EMKZg87Ls4eTuMf8GqN99hpjZLZRzV7HerjZY5wkwNQLNbEprymUYbbhCBDxmv%2FLVBpmcSXb85OLsoVFVKtZYd5rtMZLGUFBjvBr%2FELLkLKjToYGGAwr6Zo4VmiDQ3z1Ssu3f3rNCMdmOEgUCUWeMr0zluQLmGo7InUoIXjP%2B6H%2BYYiNwLXjsN1DZ7qe9JnyOZ2l5Bgic0zM6U4W%2FN8HclZ9hVDLW0La%2FSa4qMRRpjUtX9zKwcnK4FnTFD4XYPW8LXKhRfft75JJWN37ul7WsHHynGGRxgaNSbk4BYl68pW5yn3fsFfx95mMBbZVf5KzDduVml710H0uUQXF%2Bwn1DAggLmX1pYjsQTWQmMNuddXlzO0ooMdAkF4iDrTPKHJAEXC5e61F%2FaNWXR9s%2BmSDqLMRnQ6RNGlmaR8Rd%2Fc0ntCPKgNuN5HamM6ORWhv8GNDaOPjNAiQzOgdhjtFRT5%2BZ%2B9Uz4%2FiomqPdaJbIyFBR%2BgoYRhuIEOrGfrTCC0oQ%2Fv%2FzZlw69%2Fc%2FMLBTAKoDZMKZ1a%2B%2FlGktOqkwd4SscCFFp7AWmK9RFayc7wL5MKT04sIGOqUBtUnc%2BrklkLqXjbV%2BTdc1oVbCS7vZecUw7T5ZkBjn6FSyDLY6i7fb%2F8bl5HGL1cbdvQjb2zzQmbxPK6fOcud8hvii3Ii9OEz6DcS5g%2FOX1n%2BVrSzFCIPZc3nIN1pPT2AZO7ZhVR8b0U0MlaDIXJVQ3NRK0oZ0cIUtbZQbHDDWtwBzQ3pDIuQqfCGSbuPjhiRv4Kj9SMGIXoRMBmi9czzAQ8%2Bb59yT&X-Amz-Signature=6a8b42b25b5713702f0c81aaaef882e3b4c80d83d3380b5fd7668029c78385c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
