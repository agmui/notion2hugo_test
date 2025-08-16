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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTBQK4Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAyXdtKsQoSD9VZvHkYMRyIkXc18q1gCnL0H2e74WCiiAiBRkUTWg4V0YuDJvgJvhN8lGLP33Qt5qdQf9e%2Fk1iYmqSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2FGCnFaRhbGvRs6cnKtwDLOdP%2BCwSjE4kY5cDKzStx8WyR3J%2BhL32500%2FARqyla6JVkLauucmQU9I%2BrxK%2FarIJrGIFYk%2FnLW9%2BQ9Y8MfSoBGrzkdTrzOtO2QnEba%2B%2B4qw8sFPDF%2BQAso84%2BZpNBC2kQ%2BZ5DsDtVP09l4qnyTYGxGjfvkL%2BT4ucVRIkR9kAF4Ek2HDvOR%2B3r3jFY%2B1yy0IUq0szYjFVq7Y2jex%2BmPI2GwLY5wj%2BDOCjILZhcrXSbMbTzAg868J2oLMIzpnNlC7VxB7YAMDX08XedXgUq0MxENFR488Re3JqQ9bEM5MbnV0%2FFsgodkaSEGc9cd%2FcIUrYq436sLPI7LH2w8nyp4SWNCBVHQvcO9gArDFlfAuMhJlgX%2BypTzuB6RfWUxSRrSU1AapUkMKiqgFsKksPmKmWuPvIUfypZORNJnBWdnq0OmyPk1N%2FejveCJSHfHgHmn9BnDiv2SiDXHxuswUq%2FxZ9MLDXx3zbKWu15XvC8zSeddbAOOmhMnFcJKtNu7zCJot6xZw4sHK6q1a7%2FPCrs9KJ27g3RbBtu5F1Ppzj3dM5q%2FmJS4Tny0eeop7bJVAPcW%2FdbkKhrdPGcaV%2B7chJNaXoLgQV%2BFCqjS%2F%2FjmQEL10iyNKGpD9lTRah1umYaMwxfeAxQY6pgG%2BiEVy6KEIwZuZCn5a%2Fh%2FiR1%2FpDMnyajKGmI0dEo1mP92o9utnS9v8sARLzcfVzW9bp%2Bkhb4SuaA4%2BImeJ3HaQIDd%2FxFJ2CGHap72zWpFN467SkB995zbYSbE0%2BLFWrW0ilsHk5weEcm10QWVOXOSjZ%2FrxyoGfkVMo77ppzVv2HCJO9PzFcXYl4BhenX2C2nU3EuVQqTy%2FIaw64YDQ3tPDbOilOTMe&X-Amz-Signature=aec362c51460c8e22068ff8971b3ab50d5efabe3ba4db3ebe77e672da7dba7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTBQK4Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAyXdtKsQoSD9VZvHkYMRyIkXc18q1gCnL0H2e74WCiiAiBRkUTWg4V0YuDJvgJvhN8lGLP33Qt5qdQf9e%2Fk1iYmqSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2FGCnFaRhbGvRs6cnKtwDLOdP%2BCwSjE4kY5cDKzStx8WyR3J%2BhL32500%2FARqyla6JVkLauucmQU9I%2BrxK%2FarIJrGIFYk%2FnLW9%2BQ9Y8MfSoBGrzkdTrzOtO2QnEba%2B%2B4qw8sFPDF%2BQAso84%2BZpNBC2kQ%2BZ5DsDtVP09l4qnyTYGxGjfvkL%2BT4ucVRIkR9kAF4Ek2HDvOR%2B3r3jFY%2B1yy0IUq0szYjFVq7Y2jex%2BmPI2GwLY5wj%2BDOCjILZhcrXSbMbTzAg868J2oLMIzpnNlC7VxB7YAMDX08XedXgUq0MxENFR488Re3JqQ9bEM5MbnV0%2FFsgodkaSEGc9cd%2FcIUrYq436sLPI7LH2w8nyp4SWNCBVHQvcO9gArDFlfAuMhJlgX%2BypTzuB6RfWUxSRrSU1AapUkMKiqgFsKksPmKmWuPvIUfypZORNJnBWdnq0OmyPk1N%2FejveCJSHfHgHmn9BnDiv2SiDXHxuswUq%2FxZ9MLDXx3zbKWu15XvC8zSeddbAOOmhMnFcJKtNu7zCJot6xZw4sHK6q1a7%2FPCrs9KJ27g3RbBtu5F1Ppzj3dM5q%2FmJS4Tny0eeop7bJVAPcW%2FdbkKhrdPGcaV%2B7chJNaXoLgQV%2BFCqjS%2F%2FjmQEL10iyNKGpD9lTRah1umYaMwxfeAxQY6pgG%2BiEVy6KEIwZuZCn5a%2Fh%2FiR1%2FpDMnyajKGmI0dEo1mP92o9utnS9v8sARLzcfVzW9bp%2Bkhb4SuaA4%2BImeJ3HaQIDd%2FxFJ2CGHap72zWpFN467SkB995zbYSbE0%2BLFWrW0ilsHk5weEcm10QWVOXOSjZ%2FrxyoGfkVMo77ppzVv2HCJO9PzFcXYl4BhenX2C2nU3EuVQqTy%2FIaw64YDQ3tPDbOilOTMe&X-Amz-Signature=16c91e4bc5d9633c127141d0f3199f22807d734283d79618ffd4e6414d16123a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTBQK4Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAyXdtKsQoSD9VZvHkYMRyIkXc18q1gCnL0H2e74WCiiAiBRkUTWg4V0YuDJvgJvhN8lGLP33Qt5qdQf9e%2Fk1iYmqSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2FGCnFaRhbGvRs6cnKtwDLOdP%2BCwSjE4kY5cDKzStx8WyR3J%2BhL32500%2FARqyla6JVkLauucmQU9I%2BrxK%2FarIJrGIFYk%2FnLW9%2BQ9Y8MfSoBGrzkdTrzOtO2QnEba%2B%2B4qw8sFPDF%2BQAso84%2BZpNBC2kQ%2BZ5DsDtVP09l4qnyTYGxGjfvkL%2BT4ucVRIkR9kAF4Ek2HDvOR%2B3r3jFY%2B1yy0IUq0szYjFVq7Y2jex%2BmPI2GwLY5wj%2BDOCjILZhcrXSbMbTzAg868J2oLMIzpnNlC7VxB7YAMDX08XedXgUq0MxENFR488Re3JqQ9bEM5MbnV0%2FFsgodkaSEGc9cd%2FcIUrYq436sLPI7LH2w8nyp4SWNCBVHQvcO9gArDFlfAuMhJlgX%2BypTzuB6RfWUxSRrSU1AapUkMKiqgFsKksPmKmWuPvIUfypZORNJnBWdnq0OmyPk1N%2FejveCJSHfHgHmn9BnDiv2SiDXHxuswUq%2FxZ9MLDXx3zbKWu15XvC8zSeddbAOOmhMnFcJKtNu7zCJot6xZw4sHK6q1a7%2FPCrs9KJ27g3RbBtu5F1Ppzj3dM5q%2FmJS4Tny0eeop7bJVAPcW%2FdbkKhrdPGcaV%2B7chJNaXoLgQV%2BFCqjS%2F%2FjmQEL10iyNKGpD9lTRah1umYaMwxfeAxQY6pgG%2BiEVy6KEIwZuZCn5a%2Fh%2FiR1%2FpDMnyajKGmI0dEo1mP92o9utnS9v8sARLzcfVzW9bp%2Bkhb4SuaA4%2BImeJ3HaQIDd%2FxFJ2CGHap72zWpFN467SkB995zbYSbE0%2BLFWrW0ilsHk5weEcm10QWVOXOSjZ%2FrxyoGfkVMo77ppzVv2HCJO9PzFcXYl4BhenX2C2nU3EuVQqTy%2FIaw64YDQ3tPDbOilOTMe&X-Amz-Signature=4474871982c3a9a4536c8e40adddd21f6237209ce9214b044d346d2d8dc733e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
