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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MAPNR5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAHxq2c%2Baz35O3NwC%2FeMemWMjD45ra7izcrINCDUZ%2BmlAiA%2FOPoUzUnpdPI3qeJnpW9qFhyuH238gS6oCXjV7SL2LyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRG9mpz9XjwNiVzEwKtwD2RsP2jMSxZvL9UE27u7ESZyGLoLVK4oSoVsIDRROVbqwPSX873MRYkUbpGQL8tpJPkomLgZbyjXKAD4RXL72NQ%2BQA8GqjVixJdzhGhiZ0NE6Ab0m9%2F2%2Fit15OfhBxk71KlTSZzOAPvtFg7UP53PCX8ZWIrAR7Y%2BrNtMwyG%2BKzghthbWG%2FaGw5lTrOGHyQuvOeWlZuf9PZ8vLoqYDrVHYB9M6ylzfrFLniBVeAxyqBRYsuprY07MuFSfaLPlEnYNM5h1vNbFZ79%2FxDKkDUR4gJjFW8ACmv9RJ%2FcO9CGvi8FGrUcTOhEmi64KECzjftLNC3UWB8sq%2BILbWc1U%2BVJkym0WPvV0ZSeRs%2FM9NeW4fmxNGxJ312Ek2V5eMlqpe7rX1kufzPkFWnk0lh27VXnQyN1gVweVwa7URmUvW9T4nvBM%2F7NgqjWVBHqU37E6NV%2FvhyLsoX6f6o4eDJLXqNK21sDcDLT7g3zn1wlukUvcM4qcVF6E%2BHZnCcCEXw2JB2XCmREeLtfOHywDuKZkR0P5%2FJSTI1yg6vN0z0d5u5B9L7n1oNC4W7dpyIMvgaKnnTp3UYSIh0KR45yLYNLRz83EYearn1MI8Oyys0CGtuSYU%2BcxVeBNNH0Ys4IX6Tjkws67VxAY6pgHp2fIbt5gyQHAdDf0aSW%2F3mJi%2B9NuqOocBc4TY17kYM4TF0l44Swggt%2FU25nE4Z5QX0wBCLjFJBkFn2buXM6t%2BhXeHolL5Yr1pIUTrACTNn9uH1sKUwPZkbNARHOc6pKWnvdS6UMHjr1lFId65CsESYzxaEdZWzXhPmEu1WNl1ydagIAfLmv5mTqONQJNpblMuFXwoDmaU30wlmuO5R3%2FwgsEX5VwP&X-Amz-Signature=8dfe01757f578f656df1f21c1a077dd5e75626107481393435861354d95d0344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MAPNR5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAHxq2c%2Baz35O3NwC%2FeMemWMjD45ra7izcrINCDUZ%2BmlAiA%2FOPoUzUnpdPI3qeJnpW9qFhyuH238gS6oCXjV7SL2LyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRG9mpz9XjwNiVzEwKtwD2RsP2jMSxZvL9UE27u7ESZyGLoLVK4oSoVsIDRROVbqwPSX873MRYkUbpGQL8tpJPkomLgZbyjXKAD4RXL72NQ%2BQA8GqjVixJdzhGhiZ0NE6Ab0m9%2F2%2Fit15OfhBxk71KlTSZzOAPvtFg7UP53PCX8ZWIrAR7Y%2BrNtMwyG%2BKzghthbWG%2FaGw5lTrOGHyQuvOeWlZuf9PZ8vLoqYDrVHYB9M6ylzfrFLniBVeAxyqBRYsuprY07MuFSfaLPlEnYNM5h1vNbFZ79%2FxDKkDUR4gJjFW8ACmv9RJ%2FcO9CGvi8FGrUcTOhEmi64KECzjftLNC3UWB8sq%2BILbWc1U%2BVJkym0WPvV0ZSeRs%2FM9NeW4fmxNGxJ312Ek2V5eMlqpe7rX1kufzPkFWnk0lh27VXnQyN1gVweVwa7URmUvW9T4nvBM%2F7NgqjWVBHqU37E6NV%2FvhyLsoX6f6o4eDJLXqNK21sDcDLT7g3zn1wlukUvcM4qcVF6E%2BHZnCcCEXw2JB2XCmREeLtfOHywDuKZkR0P5%2FJSTI1yg6vN0z0d5u5B9L7n1oNC4W7dpyIMvgaKnnTp3UYSIh0KR45yLYNLRz83EYearn1MI8Oyys0CGtuSYU%2BcxVeBNNH0Ys4IX6Tjkws67VxAY6pgHp2fIbt5gyQHAdDf0aSW%2F3mJi%2B9NuqOocBc4TY17kYM4TF0l44Swggt%2FU25nE4Z5QX0wBCLjFJBkFn2buXM6t%2BhXeHolL5Yr1pIUTrACTNn9uH1sKUwPZkbNARHOc6pKWnvdS6UMHjr1lFId65CsESYzxaEdZWzXhPmEu1WNl1ydagIAfLmv5mTqONQJNpblMuFXwoDmaU30wlmuO5R3%2FwgsEX5VwP&X-Amz-Signature=f52d67c00ce802b960dee05f3cbb3d77d69fa903b249f19cfcfa43274c088bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MAPNR5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAHxq2c%2Baz35O3NwC%2FeMemWMjD45ra7izcrINCDUZ%2BmlAiA%2FOPoUzUnpdPI3qeJnpW9qFhyuH238gS6oCXjV7SL2LyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRG9mpz9XjwNiVzEwKtwD2RsP2jMSxZvL9UE27u7ESZyGLoLVK4oSoVsIDRROVbqwPSX873MRYkUbpGQL8tpJPkomLgZbyjXKAD4RXL72NQ%2BQA8GqjVixJdzhGhiZ0NE6Ab0m9%2F2%2Fit15OfhBxk71KlTSZzOAPvtFg7UP53PCX8ZWIrAR7Y%2BrNtMwyG%2BKzghthbWG%2FaGw5lTrOGHyQuvOeWlZuf9PZ8vLoqYDrVHYB9M6ylzfrFLniBVeAxyqBRYsuprY07MuFSfaLPlEnYNM5h1vNbFZ79%2FxDKkDUR4gJjFW8ACmv9RJ%2FcO9CGvi8FGrUcTOhEmi64KECzjftLNC3UWB8sq%2BILbWc1U%2BVJkym0WPvV0ZSeRs%2FM9NeW4fmxNGxJ312Ek2V5eMlqpe7rX1kufzPkFWnk0lh27VXnQyN1gVweVwa7URmUvW9T4nvBM%2F7NgqjWVBHqU37E6NV%2FvhyLsoX6f6o4eDJLXqNK21sDcDLT7g3zn1wlukUvcM4qcVF6E%2BHZnCcCEXw2JB2XCmREeLtfOHywDuKZkR0P5%2FJSTI1yg6vN0z0d5u5B9L7n1oNC4W7dpyIMvgaKnnTp3UYSIh0KR45yLYNLRz83EYearn1MI8Oyys0CGtuSYU%2BcxVeBNNH0Ys4IX6Tjkws67VxAY6pgHp2fIbt5gyQHAdDf0aSW%2F3mJi%2B9NuqOocBc4TY17kYM4TF0l44Swggt%2FU25nE4Z5QX0wBCLjFJBkFn2buXM6t%2BhXeHolL5Yr1pIUTrACTNn9uH1sKUwPZkbNARHOc6pKWnvdS6UMHjr1lFId65CsESYzxaEdZWzXhPmEu1WNl1ydagIAfLmv5mTqONQJNpblMuFXwoDmaU30wlmuO5R3%2FwgsEX5VwP&X-Amz-Signature=6693ad218775a94f95c78286d14e25f15b80d660c9b1f9d3b879dcd264537722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
