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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255G7B4C%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOhtNZcLVk47p32L7rNh%2Fz%2BibmcibpPJopgdvGrn2L5AiEA%2FelsyD9vTO5iPtqCbFAC86UYmL9mYBmh8aX49gLMCiQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDD%2Fzn3Ur95xU2qmvPyrcA2t6h0zAlR0449lH9QuSwQY1CwD8gy7lgqpCFMMHaUfZ1r78ZZ0Ct399ZRtwGQzWqCKDPyXJT8jhwCgbIt2frOPeRlttozrHmwrpeVLx3y11ut%2FrvgFHAYhYdpl1OHD12YZIyVzqPDWhRYHioApKeUVoNwuGw5QzDq8UUkPkN1YnfFz2WkGdiFwKK1NqdhOi7LjPSNbZfkpgXzsaH2HZsqk5WQS3LgZxckAI8XuXTsRiobwMNoGPpnnHQKcjvDeRH%2F%2F9WwgcCDgS3bGu1TZ7WJobTioRuS0YhFRxIk9TVQb3SNRD45CtOgDkMpmvhy8p%2BKx%2BT%2BM7Si1VxLwmu1uzzPYo8jeEaaX0LYgARRVQjPueyhaVuR57iaKYz53MvZwj7eE3l1%2FyRvQd%2FGsPRMHzrzLM5Z9qnexZmuMcHQ5gjgzMzMS%2FRs%2BZze21N1%2BkE4fvKtp4jTGImk8Xmfj1SJds4YFxQMquIpzB2VLZU38sdF0X5LEvlwh3swgA6cWNOcBhZxPoDN2tBdp9DdSF1MHi%2BMsbLESFbSE7%2Fx61hLsB3ANNCqImNMDtVYkZYKf%2FoGFsOoXZd4MJSklna40PHUKOlVQipP1invaECKRo0WbKXYYXSz%2BAxbqVd4O7u9tnMPS83r4GOqUBzXnEVjUsxhP9FPtGVh2KIjJD72A5QQ%2BB9dv3UDZsMvAWMEmLPt6cX4TknHaoEqxe2xTR%2FFRWY%2FL%2FqB5%2Fvb31PICsqxZUwnoOoWkffH55dIG1m%2B8Ya5cBSSCcxK2wHGBRGL%2BZ8cJBjsMevFTafzatd%2Bzyu6otvzz8uD0NjUi6c97QTwQvPeXhQGvYUlVxpIo%2Fk%2Fzc7JS%2FEeLT7Mk%2FrLG5q2z2iLgM&X-Amz-Signature=3ae8581a67e0c250d4cc57e6c1ac5f2030a36a20ce9886c077173a6596f7de04&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255G7B4C%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOhtNZcLVk47p32L7rNh%2Fz%2BibmcibpPJopgdvGrn2L5AiEA%2FelsyD9vTO5iPtqCbFAC86UYmL9mYBmh8aX49gLMCiQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDD%2Fzn3Ur95xU2qmvPyrcA2t6h0zAlR0449lH9QuSwQY1CwD8gy7lgqpCFMMHaUfZ1r78ZZ0Ct399ZRtwGQzWqCKDPyXJT8jhwCgbIt2frOPeRlttozrHmwrpeVLx3y11ut%2FrvgFHAYhYdpl1OHD12YZIyVzqPDWhRYHioApKeUVoNwuGw5QzDq8UUkPkN1YnfFz2WkGdiFwKK1NqdhOi7LjPSNbZfkpgXzsaH2HZsqk5WQS3LgZxckAI8XuXTsRiobwMNoGPpnnHQKcjvDeRH%2F%2F9WwgcCDgS3bGu1TZ7WJobTioRuS0YhFRxIk9TVQb3SNRD45CtOgDkMpmvhy8p%2BKx%2BT%2BM7Si1VxLwmu1uzzPYo8jeEaaX0LYgARRVQjPueyhaVuR57iaKYz53MvZwj7eE3l1%2FyRvQd%2FGsPRMHzrzLM5Z9qnexZmuMcHQ5gjgzMzMS%2FRs%2BZze21N1%2BkE4fvKtp4jTGImk8Xmfj1SJds4YFxQMquIpzB2VLZU38sdF0X5LEvlwh3swgA6cWNOcBhZxPoDN2tBdp9DdSF1MHi%2BMsbLESFbSE7%2Fx61hLsB3ANNCqImNMDtVYkZYKf%2FoGFsOoXZd4MJSklna40PHUKOlVQipP1invaECKRo0WbKXYYXSz%2BAxbqVd4O7u9tnMPS83r4GOqUBzXnEVjUsxhP9FPtGVh2KIjJD72A5QQ%2BB9dv3UDZsMvAWMEmLPt6cX4TknHaoEqxe2xTR%2FFRWY%2FL%2FqB5%2Fvb31PICsqxZUwnoOoWkffH55dIG1m%2B8Ya5cBSSCcxK2wHGBRGL%2BZ8cJBjsMevFTafzatd%2Bzyu6otvzz8uD0NjUi6c97QTwQvPeXhQGvYUlVxpIo%2Fk%2Fzc7JS%2FEeLT7Mk%2FrLG5q2z2iLgM&X-Amz-Signature=0d656ee9f144997c79b699710d08a292db7ec79fd86e66d46278fe7e485cb1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255G7B4C%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOhtNZcLVk47p32L7rNh%2Fz%2BibmcibpPJopgdvGrn2L5AiEA%2FelsyD9vTO5iPtqCbFAC86UYmL9mYBmh8aX49gLMCiQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDD%2Fzn3Ur95xU2qmvPyrcA2t6h0zAlR0449lH9QuSwQY1CwD8gy7lgqpCFMMHaUfZ1r78ZZ0Ct399ZRtwGQzWqCKDPyXJT8jhwCgbIt2frOPeRlttozrHmwrpeVLx3y11ut%2FrvgFHAYhYdpl1OHD12YZIyVzqPDWhRYHioApKeUVoNwuGw5QzDq8UUkPkN1YnfFz2WkGdiFwKK1NqdhOi7LjPSNbZfkpgXzsaH2HZsqk5WQS3LgZxckAI8XuXTsRiobwMNoGPpnnHQKcjvDeRH%2F%2F9WwgcCDgS3bGu1TZ7WJobTioRuS0YhFRxIk9TVQb3SNRD45CtOgDkMpmvhy8p%2BKx%2BT%2BM7Si1VxLwmu1uzzPYo8jeEaaX0LYgARRVQjPueyhaVuR57iaKYz53MvZwj7eE3l1%2FyRvQd%2FGsPRMHzrzLM5Z9qnexZmuMcHQ5gjgzMzMS%2FRs%2BZze21N1%2BkE4fvKtp4jTGImk8Xmfj1SJds4YFxQMquIpzB2VLZU38sdF0X5LEvlwh3swgA6cWNOcBhZxPoDN2tBdp9DdSF1MHi%2BMsbLESFbSE7%2Fx61hLsB3ANNCqImNMDtVYkZYKf%2FoGFsOoXZd4MJSklna40PHUKOlVQipP1invaECKRo0WbKXYYXSz%2BAxbqVd4O7u9tnMPS83r4GOqUBzXnEVjUsxhP9FPtGVh2KIjJD72A5QQ%2BB9dv3UDZsMvAWMEmLPt6cX4TknHaoEqxe2xTR%2FFRWY%2FL%2FqB5%2Fvb31PICsqxZUwnoOoWkffH55dIG1m%2B8Ya5cBSSCcxK2wHGBRGL%2BZ8cJBjsMevFTafzatd%2Bzyu6otvzz8uD0NjUi6c97QTwQvPeXhQGvYUlVxpIo%2Fk%2Fzc7JS%2FEeLT7Mk%2FrLG5q2z2iLgM&X-Amz-Signature=fb232145b3e0519de0a3bd127b592319f1c1a37a34341f700a2e755672eb8686&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
