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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGJ4ADY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCSsjH%2BJj5m7rsDWlBuNz3Pfr3gWqzYougVY4ll2vG%2BagIgD6WlGW5WUhkeVPMogf0yGDpP%2FPNW3neERrK%2FPfbzaf4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE443XKJkNbml2MHJCrcA2JUpNFGAaBTsvx6dw8MhH1UaE0GapXMsGmNc3vHCBQ4yJThBC8OwoaX%2BPj3fXm7b19EF53D4yqOHcfp3qApdp3mETqwfJ9IMlI1SNQ4PQkqKPCjolE0N42NALpsqzXuH89vUYetNtajwjnwTRJPUi2NhVgrXIXkyW56wEVuroGxtKyj8eEN6c1WAeP%2Fq7WdfPbxs6OgJgefGk8kUH7yZk9q9jhtIDRp%2FurOI8u2JlIG%2F%2Fry%2FRX2XrbYNhYeSc3cZxq0Zu22n4%2FGRXEITZqUkDeGD2dZ3%2BV%2FwDv0JncIsm3RpFP7K3q9eSN1Dv0GrdpzB68%2BSP%2Fl14wfzKPL7d%2BOfh8BYbgQqDCU0bFw6O09cjO8wGcWu%2F%2B7atOEXxL%2BE5eYGWYaK6Xww0DcVxVy0jKFMMLy27NheVSQI38%2B7UqEBT1g2I1JRdEd3e01XUT1b3%2FrBVfXmuI7JEYEYsib2Yax3Vpc7WTThZuXDxiu7ZNnpdh%2FthP%2FQkzBFnq0uwlY2X8zNTuYCJQA%2BVn%2FMNjviW7jV%2F69quHMqOFdYIlcjY4eBRa9rUcPwWYQuNFv%2Faor8dvpumoXFxHaoBlKTkvKXjwXrOAZbRjAepdOPOEmvf72U8KM0DClXkBKsfyyfnLbMICNjcEGOqUBytV9aDN9goUmNTA1n8ScqvgQxe3vPDxvKeoveSpr02mqH8%2BsacZJCRHurwWBfe1sJIUty5OQnjdUOj4FWbyYa6aqffzrj6iMpET8jQOkk0O87a%2FwoF7K3aSoItZe64p26ezUPnD4%2FO7wi8eGIS%2FT6qIhhJ%2BnHB1dUweXXUNCQwhahJvcY6pPabTkr7oIJStIphbE3BkMFctG8zLtwI0lcbW9nzbH&X-Amz-Signature=d1d4720d3d47b08ffbe37d378a4af6be3be61c2f95e66a252182e30de38bd680&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGJ4ADY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCSsjH%2BJj5m7rsDWlBuNz3Pfr3gWqzYougVY4ll2vG%2BagIgD6WlGW5WUhkeVPMogf0yGDpP%2FPNW3neERrK%2FPfbzaf4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE443XKJkNbml2MHJCrcA2JUpNFGAaBTsvx6dw8MhH1UaE0GapXMsGmNc3vHCBQ4yJThBC8OwoaX%2BPj3fXm7b19EF53D4yqOHcfp3qApdp3mETqwfJ9IMlI1SNQ4PQkqKPCjolE0N42NALpsqzXuH89vUYetNtajwjnwTRJPUi2NhVgrXIXkyW56wEVuroGxtKyj8eEN6c1WAeP%2Fq7WdfPbxs6OgJgefGk8kUH7yZk9q9jhtIDRp%2FurOI8u2JlIG%2F%2Fry%2FRX2XrbYNhYeSc3cZxq0Zu22n4%2FGRXEITZqUkDeGD2dZ3%2BV%2FwDv0JncIsm3RpFP7K3q9eSN1Dv0GrdpzB68%2BSP%2Fl14wfzKPL7d%2BOfh8BYbgQqDCU0bFw6O09cjO8wGcWu%2F%2B7atOEXxL%2BE5eYGWYaK6Xww0DcVxVy0jKFMMLy27NheVSQI38%2B7UqEBT1g2I1JRdEd3e01XUT1b3%2FrBVfXmuI7JEYEYsib2Yax3Vpc7WTThZuXDxiu7ZNnpdh%2FthP%2FQkzBFnq0uwlY2X8zNTuYCJQA%2BVn%2FMNjviW7jV%2F69quHMqOFdYIlcjY4eBRa9rUcPwWYQuNFv%2Faor8dvpumoXFxHaoBlKTkvKXjwXrOAZbRjAepdOPOEmvf72U8KM0DClXkBKsfyyfnLbMICNjcEGOqUBytV9aDN9goUmNTA1n8ScqvgQxe3vPDxvKeoveSpr02mqH8%2BsacZJCRHurwWBfe1sJIUty5OQnjdUOj4FWbyYa6aqffzrj6iMpET8jQOkk0O87a%2FwoF7K3aSoItZe64p26ezUPnD4%2FO7wi8eGIS%2FT6qIhhJ%2BnHB1dUweXXUNCQwhahJvcY6pPabTkr7oIJStIphbE3BkMFctG8zLtwI0lcbW9nzbH&X-Amz-Signature=413cd45a61b7f608886d7f231dd6fa07f0a4d838920a54317da8f412544e7406&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGJ4ADY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCSsjH%2BJj5m7rsDWlBuNz3Pfr3gWqzYougVY4ll2vG%2BagIgD6WlGW5WUhkeVPMogf0yGDpP%2FPNW3neERrK%2FPfbzaf4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE443XKJkNbml2MHJCrcA2JUpNFGAaBTsvx6dw8MhH1UaE0GapXMsGmNc3vHCBQ4yJThBC8OwoaX%2BPj3fXm7b19EF53D4yqOHcfp3qApdp3mETqwfJ9IMlI1SNQ4PQkqKPCjolE0N42NALpsqzXuH89vUYetNtajwjnwTRJPUi2NhVgrXIXkyW56wEVuroGxtKyj8eEN6c1WAeP%2Fq7WdfPbxs6OgJgefGk8kUH7yZk9q9jhtIDRp%2FurOI8u2JlIG%2F%2Fry%2FRX2XrbYNhYeSc3cZxq0Zu22n4%2FGRXEITZqUkDeGD2dZ3%2BV%2FwDv0JncIsm3RpFP7K3q9eSN1Dv0GrdpzB68%2BSP%2Fl14wfzKPL7d%2BOfh8BYbgQqDCU0bFw6O09cjO8wGcWu%2F%2B7atOEXxL%2BE5eYGWYaK6Xww0DcVxVy0jKFMMLy27NheVSQI38%2B7UqEBT1g2I1JRdEd3e01XUT1b3%2FrBVfXmuI7JEYEYsib2Yax3Vpc7WTThZuXDxiu7ZNnpdh%2FthP%2FQkzBFnq0uwlY2X8zNTuYCJQA%2BVn%2FMNjviW7jV%2F69quHMqOFdYIlcjY4eBRa9rUcPwWYQuNFv%2Faor8dvpumoXFxHaoBlKTkvKXjwXrOAZbRjAepdOPOEmvf72U8KM0DClXkBKsfyyfnLbMICNjcEGOqUBytV9aDN9goUmNTA1n8ScqvgQxe3vPDxvKeoveSpr02mqH8%2BsacZJCRHurwWBfe1sJIUty5OQnjdUOj4FWbyYa6aqffzrj6iMpET8jQOkk0O87a%2FwoF7K3aSoItZe64p26ezUPnD4%2FO7wi8eGIS%2FT6qIhhJ%2BnHB1dUweXXUNCQwhahJvcY6pPabTkr7oIJStIphbE3BkMFctG8zLtwI0lcbW9nzbH&X-Amz-Signature=afeb5e9de61d046be0070e3077bfabe6b5bd49a3e453b5b0fdde38041b2be73a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
