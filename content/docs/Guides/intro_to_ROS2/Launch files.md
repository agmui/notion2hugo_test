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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TSHAVW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGNdFhRRJ65j1IqC%2BXD%2FAvLN%2BZRrTYURMKIPxlmzSikGAiEAqSl3SjGD97UjSp0eqYUjMPWJ%2FNKWJNgB5C4iPKNbwG0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCRLRrji%2BQhe7BHjsircA4dTIrW6lrXlWqyZwoDod69mRZW9VQGVKOO0JvIQJu5YbjZFHsdKG4%2BJTw4n0kEQ3%2B10%2Bq0kjVcXHF0MfbIe1O2tAYDTy7QWuy%2F1vpf95zVoma13JM4A5rzMRTk3Ehxu9N4VjLaNybpfJRlSkks2VP0Z6q5hzS84rvNY8WTjX58L4o9YCpk5V8BcySDCRBH2gNHI73B05q6ptBsOxlBqRXNGkwSgM7zDvyezYKiCP4KoWjDwY45j0PS2jYJKvgkayIhkLM9ldoIxfwZ7HjAphK2ZJRLy38PP2JVivj4FoE%2BxR3ITxeO1MS3NK5k5pdIf%2FEdPktfDKzo64xKjAMZHH4rOw2ZjqDicYQnfuPx2dlbEKfsTs4seqJpRXSI3ozR22o7htp22k%2BJCge9UJJ75ltbpIYnH1MWKOPJV%2BoKupereqWXBt2qIyBChsTUKYXIT67A2dSnF5crzobYuGjdPsKlWZ15Q8uXCllNcbP%2FkSKMbDhjBa3MapQQ8FXL6KQtlaiY5Qb54RH1axOWoDS6ew2aSdvWQvGscZ0VYYDAPIWVEd9KVcRdRoe2o5nXknCL4GQhHCvC1s142AONRLr1FqPT3Ouop%2Bi%2BU4yNZc0jllcfjE070lkjVICmt04riMLbFkr0GOqUBO8T7q%2FjEYl8kD%2B%2FidRNrXzSafgA7fbWwQzlp7pUTicbMhv4HYeTwX8vfRcojvnDuntXaAwHhwrMfL6sCOa4axmOgSX%2BeupurkWie3FwpWbrYsDBkJHiJ0gu6%2FxZt2sqE2vzRHMEXK5Cu4xRPiaF1pmmHGKNZvdI%2BOqm5J7WREHefEBufOyHizRxNFnL7bOPy3OaOXm8YijyeFDVan5aVNrmc3WM%2F&X-Amz-Signature=b26895e481ea09ba2a0082979a3c67e7109b614c84adb5244e98197777be0b11&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TSHAVW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGNdFhRRJ65j1IqC%2BXD%2FAvLN%2BZRrTYURMKIPxlmzSikGAiEAqSl3SjGD97UjSp0eqYUjMPWJ%2FNKWJNgB5C4iPKNbwG0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCRLRrji%2BQhe7BHjsircA4dTIrW6lrXlWqyZwoDod69mRZW9VQGVKOO0JvIQJu5YbjZFHsdKG4%2BJTw4n0kEQ3%2B10%2Bq0kjVcXHF0MfbIe1O2tAYDTy7QWuy%2F1vpf95zVoma13JM4A5rzMRTk3Ehxu9N4VjLaNybpfJRlSkks2VP0Z6q5hzS84rvNY8WTjX58L4o9YCpk5V8BcySDCRBH2gNHI73B05q6ptBsOxlBqRXNGkwSgM7zDvyezYKiCP4KoWjDwY45j0PS2jYJKvgkayIhkLM9ldoIxfwZ7HjAphK2ZJRLy38PP2JVivj4FoE%2BxR3ITxeO1MS3NK5k5pdIf%2FEdPktfDKzo64xKjAMZHH4rOw2ZjqDicYQnfuPx2dlbEKfsTs4seqJpRXSI3ozR22o7htp22k%2BJCge9UJJ75ltbpIYnH1MWKOPJV%2BoKupereqWXBt2qIyBChsTUKYXIT67A2dSnF5crzobYuGjdPsKlWZ15Q8uXCllNcbP%2FkSKMbDhjBa3MapQQ8FXL6KQtlaiY5Qb54RH1axOWoDS6ew2aSdvWQvGscZ0VYYDAPIWVEd9KVcRdRoe2o5nXknCL4GQhHCvC1s142AONRLr1FqPT3Ouop%2Bi%2BU4yNZc0jllcfjE070lkjVICmt04riMLbFkr0GOqUBO8T7q%2FjEYl8kD%2B%2FidRNrXzSafgA7fbWwQzlp7pUTicbMhv4HYeTwX8vfRcojvnDuntXaAwHhwrMfL6sCOa4axmOgSX%2BeupurkWie3FwpWbrYsDBkJHiJ0gu6%2FxZt2sqE2vzRHMEXK5Cu4xRPiaF1pmmHGKNZvdI%2BOqm5J7WREHefEBufOyHizRxNFnL7bOPy3OaOXm8YijyeFDVan5aVNrmc3WM%2F&X-Amz-Signature=35e23db9ee1e572f58fcd68368e4368611d32b25dd9c1990bda73104c70879b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TSHAVW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGNdFhRRJ65j1IqC%2BXD%2FAvLN%2BZRrTYURMKIPxlmzSikGAiEAqSl3SjGD97UjSp0eqYUjMPWJ%2FNKWJNgB5C4iPKNbwG0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCRLRrji%2BQhe7BHjsircA4dTIrW6lrXlWqyZwoDod69mRZW9VQGVKOO0JvIQJu5YbjZFHsdKG4%2BJTw4n0kEQ3%2B10%2Bq0kjVcXHF0MfbIe1O2tAYDTy7QWuy%2F1vpf95zVoma13JM4A5rzMRTk3Ehxu9N4VjLaNybpfJRlSkks2VP0Z6q5hzS84rvNY8WTjX58L4o9YCpk5V8BcySDCRBH2gNHI73B05q6ptBsOxlBqRXNGkwSgM7zDvyezYKiCP4KoWjDwY45j0PS2jYJKvgkayIhkLM9ldoIxfwZ7HjAphK2ZJRLy38PP2JVivj4FoE%2BxR3ITxeO1MS3NK5k5pdIf%2FEdPktfDKzo64xKjAMZHH4rOw2ZjqDicYQnfuPx2dlbEKfsTs4seqJpRXSI3ozR22o7htp22k%2BJCge9UJJ75ltbpIYnH1MWKOPJV%2BoKupereqWXBt2qIyBChsTUKYXIT67A2dSnF5crzobYuGjdPsKlWZ15Q8uXCllNcbP%2FkSKMbDhjBa3MapQQ8FXL6KQtlaiY5Qb54RH1axOWoDS6ew2aSdvWQvGscZ0VYYDAPIWVEd9KVcRdRoe2o5nXknCL4GQhHCvC1s142AONRLr1FqPT3Ouop%2Bi%2BU4yNZc0jllcfjE070lkjVICmt04riMLbFkr0GOqUBO8T7q%2FjEYl8kD%2B%2FidRNrXzSafgA7fbWwQzlp7pUTicbMhv4HYeTwX8vfRcojvnDuntXaAwHhwrMfL6sCOa4axmOgSX%2BeupurkWie3FwpWbrYsDBkJHiJ0gu6%2FxZt2sqE2vzRHMEXK5Cu4xRPiaF1pmmHGKNZvdI%2BOqm5J7WREHefEBufOyHizRxNFnL7bOPy3OaOXm8YijyeFDVan5aVNrmc3WM%2F&X-Amz-Signature=e62a5ab288e58877a7eaf930012a111aa214709ad98874f3eae91bc65d9f5864&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
