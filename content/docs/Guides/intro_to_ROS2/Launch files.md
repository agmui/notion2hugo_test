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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQWJJ2X%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVOUicTV3BBmERpgfOdc092%2B4KcAzAZTgU7CToSLmHgIgQ1Iodq8VDdLnvnXt7JnQT4VN56jQSDFRmVGVGQhL%2FRMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4mHQ0zc8iHYr7X4CrcA6pk2BEptHC6iZQhaKPlTxnDENSw0sQOVIhoAhAVEjzs6PXf82UF08%2Bo4lh20XIvekM4zCYikP24CBseOpTqYrHiXK%2Fr3KFWlVq0%2FVouweJLYzbsuvKYmf34FnF9cldq6AnVL%2BnwcUB3H%2Fk92niGtGh28b%2FaVmGHDRqa186iyaTYqLZ66GWGe3D%2FTnviinNE3AiVSxzkjGrRLtB7snUOkWJqAvhMZEKyUz3srCeJtWI7VJnqQZbF7nvodoFkPnsJUnMvRMChAIAuFpYPRyY9OrNtlWfvjTWKBOk9giCNKR0om%2BBJ%2Fps9Mo2%2Feq7yu2RWYHpsLeledU%2Bb4WUMi9Be7YlKSUHxT6SqUwDYFoVSV4voq%2FDDwxhaaLFROEOBdVliIRKmzN6yp9e6cVBNhNJOqApQN9Wo%2F9Dezu5bQSyT9y664nYF3cjC12mpkHoHgS4EdnBXSvklDqzyFG2UJYLzT1EPUFG78%2BcmRXqMdKGp8pzGA%2FFIRrIVahxLciTAGWSH0mcheYQeIAb4xhTWQNOYxgRUaYCphqyxoPEnnrdaWm2o8LlOKA%2B2LQCtSvJclD2gFslYVBMDHZ%2FAifcOHFPa5CGlpf8ulCeBCtBkjWuk8xmVzuF4kx7t79ehvxICMI%2Bw2MIGOqUBluweDv7I7a3vwRmFZR1wGu8HyvEbTLNfjWLfidRFZzK%2F1rRpAwsVdjT3L6F5oSOPWNoH8Z6GkQY64W%2F8trnTHxIvcwqdvyM8qP9hoWset2AzfvfwvcikVqdhFpGrb0CceQ04F7mtHiHnNO036xy1D8YfcneUM3EfVmsfp7ebA6%2Fce%2Fcc7fK9LK7XsBOYCwpat0hubV4wvutyntuLX2Owd2ZGTcws&X-Amz-Signature=866564ce877ceed8ae5e874aa9dea09ecb2b263cbf4c495829b29c56a888c8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQWJJ2X%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVOUicTV3BBmERpgfOdc092%2B4KcAzAZTgU7CToSLmHgIgQ1Iodq8VDdLnvnXt7JnQT4VN56jQSDFRmVGVGQhL%2FRMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4mHQ0zc8iHYr7X4CrcA6pk2BEptHC6iZQhaKPlTxnDENSw0sQOVIhoAhAVEjzs6PXf82UF08%2Bo4lh20XIvekM4zCYikP24CBseOpTqYrHiXK%2Fr3KFWlVq0%2FVouweJLYzbsuvKYmf34FnF9cldq6AnVL%2BnwcUB3H%2Fk92niGtGh28b%2FaVmGHDRqa186iyaTYqLZ66GWGe3D%2FTnviinNE3AiVSxzkjGrRLtB7snUOkWJqAvhMZEKyUz3srCeJtWI7VJnqQZbF7nvodoFkPnsJUnMvRMChAIAuFpYPRyY9OrNtlWfvjTWKBOk9giCNKR0om%2BBJ%2Fps9Mo2%2Feq7yu2RWYHpsLeledU%2Bb4WUMi9Be7YlKSUHxT6SqUwDYFoVSV4voq%2FDDwxhaaLFROEOBdVliIRKmzN6yp9e6cVBNhNJOqApQN9Wo%2F9Dezu5bQSyT9y664nYF3cjC12mpkHoHgS4EdnBXSvklDqzyFG2UJYLzT1EPUFG78%2BcmRXqMdKGp8pzGA%2FFIRrIVahxLciTAGWSH0mcheYQeIAb4xhTWQNOYxgRUaYCphqyxoPEnnrdaWm2o8LlOKA%2B2LQCtSvJclD2gFslYVBMDHZ%2FAifcOHFPa5CGlpf8ulCeBCtBkjWuk8xmVzuF4kx7t79ehvxICMI%2Bw2MIGOqUBluweDv7I7a3vwRmFZR1wGu8HyvEbTLNfjWLfidRFZzK%2F1rRpAwsVdjT3L6F5oSOPWNoH8Z6GkQY64W%2F8trnTHxIvcwqdvyM8qP9hoWset2AzfvfwvcikVqdhFpGrb0CceQ04F7mtHiHnNO036xy1D8YfcneUM3EfVmsfp7ebA6%2Fce%2Fcc7fK9LK7XsBOYCwpat0hubV4wvutyntuLX2Owd2ZGTcws&X-Amz-Signature=63e430b0e48f584180a6526c0a701f1233449c01ee8eeacdb17694bb59a60f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQWJJ2X%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVOUicTV3BBmERpgfOdc092%2B4KcAzAZTgU7CToSLmHgIgQ1Iodq8VDdLnvnXt7JnQT4VN56jQSDFRmVGVGQhL%2FRMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4mHQ0zc8iHYr7X4CrcA6pk2BEptHC6iZQhaKPlTxnDENSw0sQOVIhoAhAVEjzs6PXf82UF08%2Bo4lh20XIvekM4zCYikP24CBseOpTqYrHiXK%2Fr3KFWlVq0%2FVouweJLYzbsuvKYmf34FnF9cldq6AnVL%2BnwcUB3H%2Fk92niGtGh28b%2FaVmGHDRqa186iyaTYqLZ66GWGe3D%2FTnviinNE3AiVSxzkjGrRLtB7snUOkWJqAvhMZEKyUz3srCeJtWI7VJnqQZbF7nvodoFkPnsJUnMvRMChAIAuFpYPRyY9OrNtlWfvjTWKBOk9giCNKR0om%2BBJ%2Fps9Mo2%2Feq7yu2RWYHpsLeledU%2Bb4WUMi9Be7YlKSUHxT6SqUwDYFoVSV4voq%2FDDwxhaaLFROEOBdVliIRKmzN6yp9e6cVBNhNJOqApQN9Wo%2F9Dezu5bQSyT9y664nYF3cjC12mpkHoHgS4EdnBXSvklDqzyFG2UJYLzT1EPUFG78%2BcmRXqMdKGp8pzGA%2FFIRrIVahxLciTAGWSH0mcheYQeIAb4xhTWQNOYxgRUaYCphqyxoPEnnrdaWm2o8LlOKA%2B2LQCtSvJclD2gFslYVBMDHZ%2FAifcOHFPa5CGlpf8ulCeBCtBkjWuk8xmVzuF4kx7t79ehvxICMI%2Bw2MIGOqUBluweDv7I7a3vwRmFZR1wGu8HyvEbTLNfjWLfidRFZzK%2F1rRpAwsVdjT3L6F5oSOPWNoH8Z6GkQY64W%2F8trnTHxIvcwqdvyM8qP9hoWset2AzfvfwvcikVqdhFpGrb0CceQ04F7mtHiHnNO036xy1D8YfcneUM3EfVmsfp7ebA6%2Fce%2Fcc7fK9LK7XsBOYCwpat0hubV4wvutyntuLX2Owd2ZGTcws&X-Amz-Signature=18aa9197733616d8961cab5ec3db20316e66e22a7b147372c7b5c8ea9ae19a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
