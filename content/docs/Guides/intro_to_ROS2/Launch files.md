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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3VWF7U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFd6RpsyiIfMVv1iDivylu5z8zzS2zGEIHh3z0f5eKFAIgC%2B9z%2FCCUqJD17MiFcoLUE9tATIn%2BgzZytqOeSLktF3gqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQc46eP%2B6%2BGo4TPIircA2BnMbD6R37jh7HU8x%2FHP7nz0PeU01PrvuH%2FI79kJDl1Y3k%2BB04Lp4qLtWjdNezFANjJFCnOk2678P5Vu2YSL1gtK3oZCG%2BBvDT3vXIThdhJN5wvgDBLZ0b2xB%2BG4VAnryHXeCVguKgAaL78j5alk%2FxY6DVNALoNJ7CPaMjnZVLle%2BSiCzc2lU6Uq2JY9JXm%2BG48qhDsFmYlt9j7w2B7iVBIwkHGEfqbErXkWh%2F79NjZxyv0h7yQ50h3pjErQtoFVy%2F6R8t4IFOgLttqgjV%2FU6C94Pn5xkXOYVc1YCp4NQW2ZN%2BOGXa6Yt3ro4kLpoiDom7C11BZVNJZvPjhdSXw9F5E2TbuPDP%2B8d%2FhTi0I2OfHA9hRPqimdPEfBqXezzMRRAIvhqnpbJLvLe1q%2F9thyMqSaM8rayAywO2ZiiWUeWb8HN%2FbBP5Fe2ch467ryHMVY71T3de%2FfDWR%2BcZzdTz3ezAXGuHTiiUFk6txr%2F%2B65DobeBO9QE0mLoTHC7QyR8E%2FInfWrp92UOo28qGccugtDc9kpKgTbVvnCgQK7jej5ZyV8ttzbccOqcsN8VNGW8b8BRQ6OVJjeekd8A8yySrt6IdY6wGPjIbmLAirhDKHu0CvFqcqHvCa0rNbIF7mMIbL%2FsIGOqUBFD8%2FQ2oRjDpYp3%2BQy5YN9iJ75H2PvTAXCR9kXSAm7L%2FHaSQR%2FVUyBm2Ylm%2BtW1DGz8%2Bd9%2BQcIysLgU7CiX0LVW1HSz3AHjaI8eUivRi6LnCQ0SicgSJm%2B2R3Wq16B9BKH%2BUcTqX2rhXDMHYrmfYP8Uf5nmTvVFX9IB%2FWeGWqB7EZskYLOpVyJRVriNnJ2EAEmXl%2B7h3TmWOOQI%2Bi91iDwll8Ybsc&X-Amz-Signature=b08f9562d3da156c6e5e7dd77a7b29b439ff2d84d713871db9535b25f98eb06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3VWF7U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFd6RpsyiIfMVv1iDivylu5z8zzS2zGEIHh3z0f5eKFAIgC%2B9z%2FCCUqJD17MiFcoLUE9tATIn%2BgzZytqOeSLktF3gqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQc46eP%2B6%2BGo4TPIircA2BnMbD6R37jh7HU8x%2FHP7nz0PeU01PrvuH%2FI79kJDl1Y3k%2BB04Lp4qLtWjdNezFANjJFCnOk2678P5Vu2YSL1gtK3oZCG%2BBvDT3vXIThdhJN5wvgDBLZ0b2xB%2BG4VAnryHXeCVguKgAaL78j5alk%2FxY6DVNALoNJ7CPaMjnZVLle%2BSiCzc2lU6Uq2JY9JXm%2BG48qhDsFmYlt9j7w2B7iVBIwkHGEfqbErXkWh%2F79NjZxyv0h7yQ50h3pjErQtoFVy%2F6R8t4IFOgLttqgjV%2FU6C94Pn5xkXOYVc1YCp4NQW2ZN%2BOGXa6Yt3ro4kLpoiDom7C11BZVNJZvPjhdSXw9F5E2TbuPDP%2B8d%2FhTi0I2OfHA9hRPqimdPEfBqXezzMRRAIvhqnpbJLvLe1q%2F9thyMqSaM8rayAywO2ZiiWUeWb8HN%2FbBP5Fe2ch467ryHMVY71T3de%2FfDWR%2BcZzdTz3ezAXGuHTiiUFk6txr%2F%2B65DobeBO9QE0mLoTHC7QyR8E%2FInfWrp92UOo28qGccugtDc9kpKgTbVvnCgQK7jej5ZyV8ttzbccOqcsN8VNGW8b8BRQ6OVJjeekd8A8yySrt6IdY6wGPjIbmLAirhDKHu0CvFqcqHvCa0rNbIF7mMIbL%2FsIGOqUBFD8%2FQ2oRjDpYp3%2BQy5YN9iJ75H2PvTAXCR9kXSAm7L%2FHaSQR%2FVUyBm2Ylm%2BtW1DGz8%2Bd9%2BQcIysLgU7CiX0LVW1HSz3AHjaI8eUivRi6LnCQ0SicgSJm%2B2R3Wq16B9BKH%2BUcTqX2rhXDMHYrmfYP8Uf5nmTvVFX9IB%2FWeGWqB7EZskYLOpVyJRVriNnJ2EAEmXl%2B7h3TmWOOQI%2Bi91iDwll8Ybsc&X-Amz-Signature=f2995f26bc4c26b9ddb0db1b297099e2adf50abe5fd71ef4fe79ffa7b9a45431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3VWF7U%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFd6RpsyiIfMVv1iDivylu5z8zzS2zGEIHh3z0f5eKFAIgC%2B9z%2FCCUqJD17MiFcoLUE9tATIn%2BgzZytqOeSLktF3gqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQc46eP%2B6%2BGo4TPIircA2BnMbD6R37jh7HU8x%2FHP7nz0PeU01PrvuH%2FI79kJDl1Y3k%2BB04Lp4qLtWjdNezFANjJFCnOk2678P5Vu2YSL1gtK3oZCG%2BBvDT3vXIThdhJN5wvgDBLZ0b2xB%2BG4VAnryHXeCVguKgAaL78j5alk%2FxY6DVNALoNJ7CPaMjnZVLle%2BSiCzc2lU6Uq2JY9JXm%2BG48qhDsFmYlt9j7w2B7iVBIwkHGEfqbErXkWh%2F79NjZxyv0h7yQ50h3pjErQtoFVy%2F6R8t4IFOgLttqgjV%2FU6C94Pn5xkXOYVc1YCp4NQW2ZN%2BOGXa6Yt3ro4kLpoiDom7C11BZVNJZvPjhdSXw9F5E2TbuPDP%2B8d%2FhTi0I2OfHA9hRPqimdPEfBqXezzMRRAIvhqnpbJLvLe1q%2F9thyMqSaM8rayAywO2ZiiWUeWb8HN%2FbBP5Fe2ch467ryHMVY71T3de%2FfDWR%2BcZzdTz3ezAXGuHTiiUFk6txr%2F%2B65DobeBO9QE0mLoTHC7QyR8E%2FInfWrp92UOo28qGccugtDc9kpKgTbVvnCgQK7jej5ZyV8ttzbccOqcsN8VNGW8b8BRQ6OVJjeekd8A8yySrt6IdY6wGPjIbmLAirhDKHu0CvFqcqHvCa0rNbIF7mMIbL%2FsIGOqUBFD8%2FQ2oRjDpYp3%2BQy5YN9iJ75H2PvTAXCR9kXSAm7L%2FHaSQR%2FVUyBm2Ylm%2BtW1DGz8%2Bd9%2BQcIysLgU7CiX0LVW1HSz3AHjaI8eUivRi6LnCQ0SicgSJm%2B2R3Wq16B9BKH%2BUcTqX2rhXDMHYrmfYP8Uf5nmTvVFX9IB%2FWeGWqB7EZskYLOpVyJRVriNnJ2EAEmXl%2B7h3TmWOOQI%2Bi91iDwll8Ybsc&X-Amz-Signature=e186320e534d0c6a334a162c546d2c6309e242e3832057ffb6d5b2e67579bf0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
