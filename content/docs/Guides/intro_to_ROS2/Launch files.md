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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ746MN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoyEneO0q46hB%2BO7EQm5rrYyGRY%2FFjTyWEn9dt7erf5AiEAlgA8RMLUH48YJFFf%2B7xkMdgQcJ%2BMVMHeoP9K26niYpoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAfPqVhuQA70mO7pPSrcA9yFQOx3QpyLvXQa9o5N4TTu2G3ndPzo0Ai2EOwD0LE6dWLxXipgs7yBs0rwJp2VarOPFVxgBNQvLkG47zbVJBOA%2FP11YMuQK0TW5ROTuymAQVAC8mKDC9EPNzkEa%2BH0jDwlhEp0gKZm5s7i%2BY7nBbspZsr%2BSfY1qj6iNrR13xDAq%2BRWm60is91aD4%2B5RCFqR7oaGfaTVA88PsrF8xJSm9mFNaTJyDfZMzNi%2FvDTA3vCkt38STJfSRABbva1m6Etja4stjnpuqEhNkBV3tFBkgKxEuYDyW%2FMIICmfktJXyfp0%2FNNQaEGSaKxicV0vIrnVkiswiENm3QqjMh0HM0UiS7jd17YC140HizQLfPpQ4mUCAcSrxpOfiI%2BhKFAUMHm%2BCVHHGGakMHDFtzuY5jcLmWanClvEgd9lj%2B9K9sECFf%2F3f8WvlAyKCzLEdc%2Fc8YjvLUPL4rBOlVRj88XKvW%2F99a0YQcb5RAS1Kp0fJ2hNHoEa4%2FcPGgMmP7rqrlHJSgT8vFmM3n6KGqLy8SsCCHghxUjcV8lojh%2By0Ih%2BZgew7npXwS8id%2FANYPq%2BVCE911ne6Fp69lFAKNBnJArvqqCmJkbkgxCH0c9%2B8%2FjxrUab2gyl4YXn%2Br3OrkgLkLpMILigsAGOqUBCUrk2L8t4BOV7BFHGTNxHAAD%2BCKURO1Ssq%2BcBsJVwWfAAleilo21ZawicVjAg6y5Rnc2YhsD4vGbGtNuBFBqOEyZB5UCmeaAcyeDLvWtTIiSn1uMvAFBQ9elRWqLiGFwyyHWPubJzvlONr9lbgT3QvhT1IUUv4z037X%2FX2ZD5wrz3cddzhgowKG9x3BNVTnw9cwsVo56%2BN3CMdQn0KE%2Bgorvn5sI&X-Amz-Signature=1e3a95b4c274872c0b205463faa48d04c7f1ac49839f0124d3a5409c19865194&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ746MN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoyEneO0q46hB%2BO7EQm5rrYyGRY%2FFjTyWEn9dt7erf5AiEAlgA8RMLUH48YJFFf%2B7xkMdgQcJ%2BMVMHeoP9K26niYpoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAfPqVhuQA70mO7pPSrcA9yFQOx3QpyLvXQa9o5N4TTu2G3ndPzo0Ai2EOwD0LE6dWLxXipgs7yBs0rwJp2VarOPFVxgBNQvLkG47zbVJBOA%2FP11YMuQK0TW5ROTuymAQVAC8mKDC9EPNzkEa%2BH0jDwlhEp0gKZm5s7i%2BY7nBbspZsr%2BSfY1qj6iNrR13xDAq%2BRWm60is91aD4%2B5RCFqR7oaGfaTVA88PsrF8xJSm9mFNaTJyDfZMzNi%2FvDTA3vCkt38STJfSRABbva1m6Etja4stjnpuqEhNkBV3tFBkgKxEuYDyW%2FMIICmfktJXyfp0%2FNNQaEGSaKxicV0vIrnVkiswiENm3QqjMh0HM0UiS7jd17YC140HizQLfPpQ4mUCAcSrxpOfiI%2BhKFAUMHm%2BCVHHGGakMHDFtzuY5jcLmWanClvEgd9lj%2B9K9sECFf%2F3f8WvlAyKCzLEdc%2Fc8YjvLUPL4rBOlVRj88XKvW%2F99a0YQcb5RAS1Kp0fJ2hNHoEa4%2FcPGgMmP7rqrlHJSgT8vFmM3n6KGqLy8SsCCHghxUjcV8lojh%2By0Ih%2BZgew7npXwS8id%2FANYPq%2BVCE911ne6Fp69lFAKNBnJArvqqCmJkbkgxCH0c9%2B8%2FjxrUab2gyl4YXn%2Br3OrkgLkLpMILigsAGOqUBCUrk2L8t4BOV7BFHGTNxHAAD%2BCKURO1Ssq%2BcBsJVwWfAAleilo21ZawicVjAg6y5Rnc2YhsD4vGbGtNuBFBqOEyZB5UCmeaAcyeDLvWtTIiSn1uMvAFBQ9elRWqLiGFwyyHWPubJzvlONr9lbgT3QvhT1IUUv4z037X%2FX2ZD5wrz3cddzhgowKG9x3BNVTnw9cwsVo56%2BN3CMdQn0KE%2Bgorvn5sI&X-Amz-Signature=8465e483a1cbbca81aa4a1d52a4562c2a3e725c02b1633ca0562b6c9a2f779b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZ746MN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoyEneO0q46hB%2BO7EQm5rrYyGRY%2FFjTyWEn9dt7erf5AiEAlgA8RMLUH48YJFFf%2B7xkMdgQcJ%2BMVMHeoP9K26niYpoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDAfPqVhuQA70mO7pPSrcA9yFQOx3QpyLvXQa9o5N4TTu2G3ndPzo0Ai2EOwD0LE6dWLxXipgs7yBs0rwJp2VarOPFVxgBNQvLkG47zbVJBOA%2FP11YMuQK0TW5ROTuymAQVAC8mKDC9EPNzkEa%2BH0jDwlhEp0gKZm5s7i%2BY7nBbspZsr%2BSfY1qj6iNrR13xDAq%2BRWm60is91aD4%2B5RCFqR7oaGfaTVA88PsrF8xJSm9mFNaTJyDfZMzNi%2FvDTA3vCkt38STJfSRABbva1m6Etja4stjnpuqEhNkBV3tFBkgKxEuYDyW%2FMIICmfktJXyfp0%2FNNQaEGSaKxicV0vIrnVkiswiENm3QqjMh0HM0UiS7jd17YC140HizQLfPpQ4mUCAcSrxpOfiI%2BhKFAUMHm%2BCVHHGGakMHDFtzuY5jcLmWanClvEgd9lj%2B9K9sECFf%2F3f8WvlAyKCzLEdc%2Fc8YjvLUPL4rBOlVRj88XKvW%2F99a0YQcb5RAS1Kp0fJ2hNHoEa4%2FcPGgMmP7rqrlHJSgT8vFmM3n6KGqLy8SsCCHghxUjcV8lojh%2By0Ih%2BZgew7npXwS8id%2FANYPq%2BVCE911ne6Fp69lFAKNBnJArvqqCmJkbkgxCH0c9%2B8%2FjxrUab2gyl4YXn%2Br3OrkgLkLpMILigsAGOqUBCUrk2L8t4BOV7BFHGTNxHAAD%2BCKURO1Ssq%2BcBsJVwWfAAleilo21ZawicVjAg6y5Rnc2YhsD4vGbGtNuBFBqOEyZB5UCmeaAcyeDLvWtTIiSn1uMvAFBQ9elRWqLiGFwyyHWPubJzvlONr9lbgT3QvhT1IUUv4z037X%2FX2ZD5wrz3cddzhgowKG9x3BNVTnw9cwsVo56%2BN3CMdQn0KE%2Bgorvn5sI&X-Amz-Signature=5921cec9f013d70a40bc704f9bb813b42021b170bb8df1561179c1571526ca0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
