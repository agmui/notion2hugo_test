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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RIFVD6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC6zKn6GC%2BtJhihKjCo0MPROAknrOqcJkkB%2FzhLY0TW7AIgCjNw5nSu66%2FNBZWjcuS4Llbk3N2WGXND7WQEi0Wn%2FLsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMIPBvRC2d3H0UuNjyrcAwI4n7CRT%2FJax56ytkujveOIEBoJqxAOdSkNBc2NhASZbaTjgrKPvoJKFdX5%2BYBgkER540kVCngQ4nyheKUw6GhpOaNsXHZcflLxOFIGclAruA5B%2BeNNUZ33Pg6ieTYilEg0HeRRLK6DTZ8slMc596W0P85A7hO82efTD%2BOXyN0ohxCTi6dEgdp9hI1L3l%2Fe6AGJ06xDvkihdhLbgpA0wUW3FU8aQ2Jq3P5qoeP4dH%2BCgQfmIl2uIW2kZIMYtla0HN33Gk7ChzN8l0v4PVCR3wiXYNxCJeIVQe02EA72xGSFRlzfW3%2B6pEfjgHuqdCInRez9ttu2S0L%2Fa4qgaXYauRiVvbwpw%2BVErBxB1E5fsnIBz1EIk06dVL0rZBJ%2FqbYSoF93mD5usLFH9au04AcjE%2BKVXhCWDH1xFTY6mqxdTRQxsnVYi5%2B4Pr6VmCASfRdscOc0l6z%2FVJaBG4nC1tkn1oO3eNtjrffVkPQnrAd7B%2FC0fv4ZO%2BXp5SdHxHveYY77ede2oy%2FUjILqUH8A2blM%2B8aKhzuCtdvYwRQ8wbJZfB6zzQO%2FRsSRKFanRZ4QsXByuQvxLf6Q7oYo0QpamWCH5A%2Fz7qlJD8VV7QrWo6RLVxtS1wk2oXkkOhdYP%2FnnMOLricIGOqUB8zROZVY3vYrY3qf0nE9qO3wHGzn19vhPvMirTSqMxRsaGB32csUs7owxRdOeHU%2FJAVVSwJnO7%2BnMS6p%2FhL%2BZmGz1NOV%2FGMdEWBYICgzWWUxeiqotIDXu6GWY4TakCtOCp1JcwnGFZrSYmdTg3uzfzwQ%2FxoO0csl%2FFFI4CoY5wIWfdlgfdyGnYsgjjNSFJOfT1AkBur1YK%2BvYnDwlFoNYcEPIhauu&X-Amz-Signature=49c36cdcb935e0759c36f625cda4d5da5c37d8f86d11e979ac5f25a30d9ea830&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RIFVD6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC6zKn6GC%2BtJhihKjCo0MPROAknrOqcJkkB%2FzhLY0TW7AIgCjNw5nSu66%2FNBZWjcuS4Llbk3N2WGXND7WQEi0Wn%2FLsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMIPBvRC2d3H0UuNjyrcAwI4n7CRT%2FJax56ytkujveOIEBoJqxAOdSkNBc2NhASZbaTjgrKPvoJKFdX5%2BYBgkER540kVCngQ4nyheKUw6GhpOaNsXHZcflLxOFIGclAruA5B%2BeNNUZ33Pg6ieTYilEg0HeRRLK6DTZ8slMc596W0P85A7hO82efTD%2BOXyN0ohxCTi6dEgdp9hI1L3l%2Fe6AGJ06xDvkihdhLbgpA0wUW3FU8aQ2Jq3P5qoeP4dH%2BCgQfmIl2uIW2kZIMYtla0HN33Gk7ChzN8l0v4PVCR3wiXYNxCJeIVQe02EA72xGSFRlzfW3%2B6pEfjgHuqdCInRez9ttu2S0L%2Fa4qgaXYauRiVvbwpw%2BVErBxB1E5fsnIBz1EIk06dVL0rZBJ%2FqbYSoF93mD5usLFH9au04AcjE%2BKVXhCWDH1xFTY6mqxdTRQxsnVYi5%2B4Pr6VmCASfRdscOc0l6z%2FVJaBG4nC1tkn1oO3eNtjrffVkPQnrAd7B%2FC0fv4ZO%2BXp5SdHxHveYY77ede2oy%2FUjILqUH8A2blM%2B8aKhzuCtdvYwRQ8wbJZfB6zzQO%2FRsSRKFanRZ4QsXByuQvxLf6Q7oYo0QpamWCH5A%2Fz7qlJD8VV7QrWo6RLVxtS1wk2oXkkOhdYP%2FnnMOLricIGOqUB8zROZVY3vYrY3qf0nE9qO3wHGzn19vhPvMirTSqMxRsaGB32csUs7owxRdOeHU%2FJAVVSwJnO7%2BnMS6p%2FhL%2BZmGz1NOV%2FGMdEWBYICgzWWUxeiqotIDXu6GWY4TakCtOCp1JcwnGFZrSYmdTg3uzfzwQ%2FxoO0csl%2FFFI4CoY5wIWfdlgfdyGnYsgjjNSFJOfT1AkBur1YK%2BvYnDwlFoNYcEPIhauu&X-Amz-Signature=9e5671d23a0dac0f8396069ff2d6b55866ed3e1ca2eae28d5e71c63c833a9666&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RIFVD6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC6zKn6GC%2BtJhihKjCo0MPROAknrOqcJkkB%2FzhLY0TW7AIgCjNw5nSu66%2FNBZWjcuS4Llbk3N2WGXND7WQEi0Wn%2FLsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMIPBvRC2d3H0UuNjyrcAwI4n7CRT%2FJax56ytkujveOIEBoJqxAOdSkNBc2NhASZbaTjgrKPvoJKFdX5%2BYBgkER540kVCngQ4nyheKUw6GhpOaNsXHZcflLxOFIGclAruA5B%2BeNNUZ33Pg6ieTYilEg0HeRRLK6DTZ8slMc596W0P85A7hO82efTD%2BOXyN0ohxCTi6dEgdp9hI1L3l%2Fe6AGJ06xDvkihdhLbgpA0wUW3FU8aQ2Jq3P5qoeP4dH%2BCgQfmIl2uIW2kZIMYtla0HN33Gk7ChzN8l0v4PVCR3wiXYNxCJeIVQe02EA72xGSFRlzfW3%2B6pEfjgHuqdCInRez9ttu2S0L%2Fa4qgaXYauRiVvbwpw%2BVErBxB1E5fsnIBz1EIk06dVL0rZBJ%2FqbYSoF93mD5usLFH9au04AcjE%2BKVXhCWDH1xFTY6mqxdTRQxsnVYi5%2B4Pr6VmCASfRdscOc0l6z%2FVJaBG4nC1tkn1oO3eNtjrffVkPQnrAd7B%2FC0fv4ZO%2BXp5SdHxHveYY77ede2oy%2FUjILqUH8A2blM%2B8aKhzuCtdvYwRQ8wbJZfB6zzQO%2FRsSRKFanRZ4QsXByuQvxLf6Q7oYo0QpamWCH5A%2Fz7qlJD8VV7QrWo6RLVxtS1wk2oXkkOhdYP%2FnnMOLricIGOqUB8zROZVY3vYrY3qf0nE9qO3wHGzn19vhPvMirTSqMxRsaGB32csUs7owxRdOeHU%2FJAVVSwJnO7%2BnMS6p%2FhL%2BZmGz1NOV%2FGMdEWBYICgzWWUxeiqotIDXu6GWY4TakCtOCp1JcwnGFZrSYmdTg3uzfzwQ%2FxoO0csl%2FFFI4CoY5wIWfdlgfdyGnYsgjjNSFJOfT1AkBur1YK%2BvYnDwlFoNYcEPIhauu&X-Amz-Signature=bee46787942bc6ec3013d6e54a4a4a018a76d752fc345aad3cd29cf2917517b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
