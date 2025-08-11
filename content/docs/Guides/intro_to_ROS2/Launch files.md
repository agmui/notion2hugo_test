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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLF73GB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4lS4C97BpGmC1jY8I5UzwoqOLejGQbtZiIdk6k11xxAiEA56uMxYg9fRT3nA7taq%2FFZeRJUKC56g25%2FjUOm6gxg0wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxMngbcWj2BgNJeZircA7TLW0hwiIAv7iGPHM2J7KBIp12MeBwgICiltomxACjnmP8Mx3qYFuautPXJHYqYfUDl%2FeQgMp7S3ODDKt0v0Qz3D5E0YMwQWNuGlKoDyvQMk3KmrPBCR%2BQ0TkfiEVkLVGvSNU6mgCfVFVdlVSYfiTlkIgzfKciW3tigQ9HaROtpZgNdUjD7tWDJfhpl9t%2BimQBdVYhEA%2FdXKSuX7R79M5shclhSnsnGprgdh%2BzWuHO6WAxw22htLgPEjNZz1a2u6rKx4TpnZLIZ%2B3fhIwWY7HJzRQDgU6zuuBWLNrrkTPBwhN%2BSW2I5S09WOrE3CELX4YoTR9Di0gbAjt8qk3OEm4HiW9aH2eGFJPIiUk4XabANqtL9clwhGA5%2FjJeXxxgvNye%2F61Fjclq6ic84%2FBHFLYecGIM0qPsfWbbZmbKsPHQP64SxxxZAM6WIUrCEFswI6kp6tRuTo9eC4YSkfrk0HFySkQXEmyj%2FBzXa6zb2EuLz0VbeKSUTIMpBLDTMkA%2FDa99vk6HPiU9Hnk3DwHhKxCw2ESh4026jOBjl10%2FPmHZmL2t0QZYR%2Fi050h2dCjqOFP6AizyMLhKJC8Ksav28jB8yHRFCQecFW292SG%2Bl1v8h8RuvrmY1C0fBtIoYMJOi6MQGOqUB9bS4yJ0j6xaEOnP%2Bw774OXUU98mofD%2BTqYaYsG2T24yR2tjUWUC6nnurl2wFLXyIJdmuQ6WD2vIoeck8a0xuHKyuV%2BBSahA9vXD9OZ%2BjrIEskOsaxrjnIceS7E1QviqFXsNFsWAEMm7rmyhCW1tYVJafDO1K0p2cRf2%2BnJYvE9UElaE9%2B0sa9x6cg7MtwdE3ZoAZ6qe8w2ql3N6OJaxIjn1X8%2Bzg&X-Amz-Signature=1e0204f3e3b1c0a0b9a1a123edea039397b04e0cc71f70fe61bf28d630caac13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLF73GB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4lS4C97BpGmC1jY8I5UzwoqOLejGQbtZiIdk6k11xxAiEA56uMxYg9fRT3nA7taq%2FFZeRJUKC56g25%2FjUOm6gxg0wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxMngbcWj2BgNJeZircA7TLW0hwiIAv7iGPHM2J7KBIp12MeBwgICiltomxACjnmP8Mx3qYFuautPXJHYqYfUDl%2FeQgMp7S3ODDKt0v0Qz3D5E0YMwQWNuGlKoDyvQMk3KmrPBCR%2BQ0TkfiEVkLVGvSNU6mgCfVFVdlVSYfiTlkIgzfKciW3tigQ9HaROtpZgNdUjD7tWDJfhpl9t%2BimQBdVYhEA%2FdXKSuX7R79M5shclhSnsnGprgdh%2BzWuHO6WAxw22htLgPEjNZz1a2u6rKx4TpnZLIZ%2B3fhIwWY7HJzRQDgU6zuuBWLNrrkTPBwhN%2BSW2I5S09WOrE3CELX4YoTR9Di0gbAjt8qk3OEm4HiW9aH2eGFJPIiUk4XabANqtL9clwhGA5%2FjJeXxxgvNye%2F61Fjclq6ic84%2FBHFLYecGIM0qPsfWbbZmbKsPHQP64SxxxZAM6WIUrCEFswI6kp6tRuTo9eC4YSkfrk0HFySkQXEmyj%2FBzXa6zb2EuLz0VbeKSUTIMpBLDTMkA%2FDa99vk6HPiU9Hnk3DwHhKxCw2ESh4026jOBjl10%2FPmHZmL2t0QZYR%2Fi050h2dCjqOFP6AizyMLhKJC8Ksav28jB8yHRFCQecFW292SG%2Bl1v8h8RuvrmY1C0fBtIoYMJOi6MQGOqUB9bS4yJ0j6xaEOnP%2Bw774OXUU98mofD%2BTqYaYsG2T24yR2tjUWUC6nnurl2wFLXyIJdmuQ6WD2vIoeck8a0xuHKyuV%2BBSahA9vXD9OZ%2BjrIEskOsaxrjnIceS7E1QviqFXsNFsWAEMm7rmyhCW1tYVJafDO1K0p2cRf2%2BnJYvE9UElaE9%2B0sa9x6cg7MtwdE3ZoAZ6qe8w2ql3N6OJaxIjn1X8%2Bzg&X-Amz-Signature=e22e6293df2dbffffc2717d8fe582b64f0055e5ff452fcd82d34d05dc5ba4927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLF73GB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4lS4C97BpGmC1jY8I5UzwoqOLejGQbtZiIdk6k11xxAiEA56uMxYg9fRT3nA7taq%2FFZeRJUKC56g25%2FjUOm6gxg0wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxMngbcWj2BgNJeZircA7TLW0hwiIAv7iGPHM2J7KBIp12MeBwgICiltomxACjnmP8Mx3qYFuautPXJHYqYfUDl%2FeQgMp7S3ODDKt0v0Qz3D5E0YMwQWNuGlKoDyvQMk3KmrPBCR%2BQ0TkfiEVkLVGvSNU6mgCfVFVdlVSYfiTlkIgzfKciW3tigQ9HaROtpZgNdUjD7tWDJfhpl9t%2BimQBdVYhEA%2FdXKSuX7R79M5shclhSnsnGprgdh%2BzWuHO6WAxw22htLgPEjNZz1a2u6rKx4TpnZLIZ%2B3fhIwWY7HJzRQDgU6zuuBWLNrrkTPBwhN%2BSW2I5S09WOrE3CELX4YoTR9Di0gbAjt8qk3OEm4HiW9aH2eGFJPIiUk4XabANqtL9clwhGA5%2FjJeXxxgvNye%2F61Fjclq6ic84%2FBHFLYecGIM0qPsfWbbZmbKsPHQP64SxxxZAM6WIUrCEFswI6kp6tRuTo9eC4YSkfrk0HFySkQXEmyj%2FBzXa6zb2EuLz0VbeKSUTIMpBLDTMkA%2FDa99vk6HPiU9Hnk3DwHhKxCw2ESh4026jOBjl10%2FPmHZmL2t0QZYR%2Fi050h2dCjqOFP6AizyMLhKJC8Ksav28jB8yHRFCQecFW292SG%2Bl1v8h8RuvrmY1C0fBtIoYMJOi6MQGOqUB9bS4yJ0j6xaEOnP%2Bw774OXUU98mofD%2BTqYaYsG2T24yR2tjUWUC6nnurl2wFLXyIJdmuQ6WD2vIoeck8a0xuHKyuV%2BBSahA9vXD9OZ%2BjrIEskOsaxrjnIceS7E1QviqFXsNFsWAEMm7rmyhCW1tYVJafDO1K0p2cRf2%2BnJYvE9UElaE9%2B0sa9x6cg7MtwdE3ZoAZ6qe8w2ql3N6OJaxIjn1X8%2Bzg&X-Amz-Signature=f5237e51226be88688b9612ce054aee8d0a465676b038e90c3866ee36306e20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
