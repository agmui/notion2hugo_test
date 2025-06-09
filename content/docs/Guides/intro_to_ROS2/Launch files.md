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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVLPNVB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2BBVfLnvz0qLxRgK%2BpQ9LHuTBGxlaEztO7eH55ZQv%2BgIhAMEDJNf7As96KJPowZFq7LmdepB333R4NvQQdlSnw32uKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMwRu5klz7lY0T1OAq3AMBuOvgx%2Ftmy0YK5CrgfFCEtoQWsyuauID3viBAXp6%2B%2BcNQv3dlufiCOD9rxHFAlO8BTRFA6n3Ma%2BI3wD4sLh22m2DDD2nhf0cgvbA6j3Qibsxqd8j4APfzgShYuFrGxxFO8n1%2BpFFElnVsNA3hURtYKKNum4HhEiUw7Xo6DPKTA79PnANBHGTbdtEaE2TBv0B4zIBnJMZikdGT1ngtP0bKTrc8PqgbtjKB9CsEBCmbd6xBJEArN7P3kR%2FLXyHZh8GA1%2Fgfb8aLC8v8RNVOQWD11Fz2lGQ4s7SHOCgONq%2BfXMazPEmczTBaR8Az4EUW6e2eJJt2wb2lf9UCWm5yBu68YbsuwHdgWbT%2BS3WPyuQikivi0GvOS1xsI6pdl%2FnUJFhOhJxNPMKI1eMz9vwNdjHLIgj%2FxMotD3Ds5qZuMWA%2FXo5GmcLcb%2FPNEaO%2BJx%2BYGmsH8UgbtiZYN7RHfv9ZQLCS%2FbhDDr3DU4kyACkPIwfFjQn3W81H%2F4qiySjYAad85OUaW3QFIDm0CU3Puk0FXwrGpK3x4gYGYfQb2Tz5FRLJrC8zLssFi6J3ndVgIGC0N%2F9Q0zKdk1FOiatOfW5fEkdFHCOEge6nXZfWlAZnfLaflZohqLU0lhTBc5ku5TCC7pnCBjqkARim8zpvLOmMTfSb8krXFwx8bP%2BcEyqcVWMbiHwqtN11gAE5wkvFGGLPEAn%2FJWfITKTNHTGtXN3KywPyXnMIenujfkNLhd8qXoXkn0LPtfylQE05BXVMGMyRWmNAeGfepvOKIqEfLsE3WhXJ9aoVSixP0yojNCYnvP5lOPuyodoUTq8UX7Nf7cS%2FIlFUhyTQ1KRqegDBltzE9e9sciXPPzwM6%2FxY&X-Amz-Signature=37f32a073dc042d4fa41fc1f2003d7b7278e29c35dd7155bdb4b2e7a62bd1832&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVLPNVB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2BBVfLnvz0qLxRgK%2BpQ9LHuTBGxlaEztO7eH55ZQv%2BgIhAMEDJNf7As96KJPowZFq7LmdepB333R4NvQQdlSnw32uKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMwRu5klz7lY0T1OAq3AMBuOvgx%2Ftmy0YK5CrgfFCEtoQWsyuauID3viBAXp6%2B%2BcNQv3dlufiCOD9rxHFAlO8BTRFA6n3Ma%2BI3wD4sLh22m2DDD2nhf0cgvbA6j3Qibsxqd8j4APfzgShYuFrGxxFO8n1%2BpFFElnVsNA3hURtYKKNum4HhEiUw7Xo6DPKTA79PnANBHGTbdtEaE2TBv0B4zIBnJMZikdGT1ngtP0bKTrc8PqgbtjKB9CsEBCmbd6xBJEArN7P3kR%2FLXyHZh8GA1%2Fgfb8aLC8v8RNVOQWD11Fz2lGQ4s7SHOCgONq%2BfXMazPEmczTBaR8Az4EUW6e2eJJt2wb2lf9UCWm5yBu68YbsuwHdgWbT%2BS3WPyuQikivi0GvOS1xsI6pdl%2FnUJFhOhJxNPMKI1eMz9vwNdjHLIgj%2FxMotD3Ds5qZuMWA%2FXo5GmcLcb%2FPNEaO%2BJx%2BYGmsH8UgbtiZYN7RHfv9ZQLCS%2FbhDDr3DU4kyACkPIwfFjQn3W81H%2F4qiySjYAad85OUaW3QFIDm0CU3Puk0FXwrGpK3x4gYGYfQb2Tz5FRLJrC8zLssFi6J3ndVgIGC0N%2F9Q0zKdk1FOiatOfW5fEkdFHCOEge6nXZfWlAZnfLaflZohqLU0lhTBc5ku5TCC7pnCBjqkARim8zpvLOmMTfSb8krXFwx8bP%2BcEyqcVWMbiHwqtN11gAE5wkvFGGLPEAn%2FJWfITKTNHTGtXN3KywPyXnMIenujfkNLhd8qXoXkn0LPtfylQE05BXVMGMyRWmNAeGfepvOKIqEfLsE3WhXJ9aoVSixP0yojNCYnvP5lOPuyodoUTq8UX7Nf7cS%2FIlFUhyTQ1KRqegDBltzE9e9sciXPPzwM6%2FxY&X-Amz-Signature=ba3ee73856906fb10e587e8ee2953171a134683270121e804519421621bf4990&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVLPNVB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE%2BBVfLnvz0qLxRgK%2BpQ9LHuTBGxlaEztO7eH55ZQv%2BgIhAMEDJNf7As96KJPowZFq7LmdepB333R4NvQQdlSnw32uKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMwRu5klz7lY0T1OAq3AMBuOvgx%2Ftmy0YK5CrgfFCEtoQWsyuauID3viBAXp6%2B%2BcNQv3dlufiCOD9rxHFAlO8BTRFA6n3Ma%2BI3wD4sLh22m2DDD2nhf0cgvbA6j3Qibsxqd8j4APfzgShYuFrGxxFO8n1%2BpFFElnVsNA3hURtYKKNum4HhEiUw7Xo6DPKTA79PnANBHGTbdtEaE2TBv0B4zIBnJMZikdGT1ngtP0bKTrc8PqgbtjKB9CsEBCmbd6xBJEArN7P3kR%2FLXyHZh8GA1%2Fgfb8aLC8v8RNVOQWD11Fz2lGQ4s7SHOCgONq%2BfXMazPEmczTBaR8Az4EUW6e2eJJt2wb2lf9UCWm5yBu68YbsuwHdgWbT%2BS3WPyuQikivi0GvOS1xsI6pdl%2FnUJFhOhJxNPMKI1eMz9vwNdjHLIgj%2FxMotD3Ds5qZuMWA%2FXo5GmcLcb%2FPNEaO%2BJx%2BYGmsH8UgbtiZYN7RHfv9ZQLCS%2FbhDDr3DU4kyACkPIwfFjQn3W81H%2F4qiySjYAad85OUaW3QFIDm0CU3Puk0FXwrGpK3x4gYGYfQb2Tz5FRLJrC8zLssFi6J3ndVgIGC0N%2F9Q0zKdk1FOiatOfW5fEkdFHCOEge6nXZfWlAZnfLaflZohqLU0lhTBc5ku5TCC7pnCBjqkARim8zpvLOmMTfSb8krXFwx8bP%2BcEyqcVWMbiHwqtN11gAE5wkvFGGLPEAn%2FJWfITKTNHTGtXN3KywPyXnMIenujfkNLhd8qXoXkn0LPtfylQE05BXVMGMyRWmNAeGfepvOKIqEfLsE3WhXJ9aoVSixP0yojNCYnvP5lOPuyodoUTq8UX7Nf7cS%2FIlFUhyTQ1KRqegDBltzE9e9sciXPPzwM6%2FxY&X-Amz-Signature=f6830268ac287f87852e510350e8db91b9225e4be354b18583b5a77952475c67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
