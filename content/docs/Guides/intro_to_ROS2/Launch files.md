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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBPHMDR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRRRKkYxtoRcVgp4%2FkAI7z7p3zNwZCJL8UCQcmmhdBSAiEA0LVi0jJ2gmJ93hcXaVeF8eC%2FN5zqPx7S9zf07ZqlRjwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcZESWbuoK8FdwVHyrcA5oDjaaUFabaCG%2FoNSS1Es5V0fjMhVdv93Hd4xnCVqF7Hq8IPKvtFpr4NQo%2BTnSbup4tJ0u0l2rbV71Pw3%2FHUr4EtL3GT3gQ9TP%2FLvn%2FG9iC4W%2BGc7C%2Fe9nhjPc2NuLSSPdeCmd%2F8FzrnLInINclhZH5SnzZ2zG9opH8UcnN4eeV5Ir48LsNJZ4dYPsvpZ%2BXywNogoQmFJAAdSjrWiwuFLLtYYwjwxkU2Xm9R0z3%2BgZkQIoHqiCrApIeWM%2Fuh2Cau30PRCN1Sj5voFl4KO8r%2BAG0Y1loAXIhdy72nd%2BvdhcwQDkpMSLQtngooEHUfSeg1JwYcj7yqKTZMh%2BvrF07DByo7L3IzRZrHclmsOlFZjuOf5oBY4gtnctX9iiVjZ699EhY%2F4%2BNZ8%2FbnDG%2Fa%2B7chFhPzZe4zK8cBTTq8NWsMumq7M4enZ9DG6k2LgxtiuWR%2BJ4wmrvsJj0IhNBfSc88%2F%2BnNxaNbkhKqgX%2B5t3%2BzNxpr5Eosr%2B%2FPdI8q9fMePpDDQc%2FGrD1Tua2ugKeEW3QbHPAn9Yk6lONe6WtLYvE7wZ0Sl%2Bu6XRAVtmHxjyO9YV8hA7jeF44MhaiTJCxgNguG9i8pRX%2Bqq0OXdXCGQyIa2Tqcoa2i4%2FnRNxd3MMeVMPSck8IGOqUBssiToG5euFhbf1SneENd1mX%2BRgt49PJT%2BKwc%2FyhO6qEOgeUtfSyfU%2BBMGdJ907bDxdmj%2FJoG1kC%2BHtKN6rgx37Gc5P5z4iuaTZW1GqCT3Gi2oyj1l9I7v%2BBh1lEjbEbVP%2FKKalDZwhHS%2B%2FiIaVlt2kmgArOlc4E%2BYrY3xI0TfHP3vQ1mR%2FGVGrRDx4VxWwloUODG5gwWJrsBDeam%2FHx5jVd%2B3ohp&X-Amz-Signature=ef6894697af09a2abba85bc959b706c3e596473d18adf4a45e655ee6d9937444&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBPHMDR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRRRKkYxtoRcVgp4%2FkAI7z7p3zNwZCJL8UCQcmmhdBSAiEA0LVi0jJ2gmJ93hcXaVeF8eC%2FN5zqPx7S9zf07ZqlRjwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcZESWbuoK8FdwVHyrcA5oDjaaUFabaCG%2FoNSS1Es5V0fjMhVdv93Hd4xnCVqF7Hq8IPKvtFpr4NQo%2BTnSbup4tJ0u0l2rbV71Pw3%2FHUr4EtL3GT3gQ9TP%2FLvn%2FG9iC4W%2BGc7C%2Fe9nhjPc2NuLSSPdeCmd%2F8FzrnLInINclhZH5SnzZ2zG9opH8UcnN4eeV5Ir48LsNJZ4dYPsvpZ%2BXywNogoQmFJAAdSjrWiwuFLLtYYwjwxkU2Xm9R0z3%2BgZkQIoHqiCrApIeWM%2Fuh2Cau30PRCN1Sj5voFl4KO8r%2BAG0Y1loAXIhdy72nd%2BvdhcwQDkpMSLQtngooEHUfSeg1JwYcj7yqKTZMh%2BvrF07DByo7L3IzRZrHclmsOlFZjuOf5oBY4gtnctX9iiVjZ699EhY%2F4%2BNZ8%2FbnDG%2Fa%2B7chFhPzZe4zK8cBTTq8NWsMumq7M4enZ9DG6k2LgxtiuWR%2BJ4wmrvsJj0IhNBfSc88%2F%2BnNxaNbkhKqgX%2B5t3%2BzNxpr5Eosr%2B%2FPdI8q9fMePpDDQc%2FGrD1Tua2ugKeEW3QbHPAn9Yk6lONe6WtLYvE7wZ0Sl%2Bu6XRAVtmHxjyO9YV8hA7jeF44MhaiTJCxgNguG9i8pRX%2Bqq0OXdXCGQyIa2Tqcoa2i4%2FnRNxd3MMeVMPSck8IGOqUBssiToG5euFhbf1SneENd1mX%2BRgt49PJT%2BKwc%2FyhO6qEOgeUtfSyfU%2BBMGdJ907bDxdmj%2FJoG1kC%2BHtKN6rgx37Gc5P5z4iuaTZW1GqCT3Gi2oyj1l9I7v%2BBh1lEjbEbVP%2FKKalDZwhHS%2B%2FiIaVlt2kmgArOlc4E%2BYrY3xI0TfHP3vQ1mR%2FGVGrRDx4VxWwloUODG5gwWJrsBDeam%2FHx5jVd%2B3ohp&X-Amz-Signature=fa3c84a18b616884405475a4a3c422e85bd0285f2fb8aa1b48302b6f088839b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCBPHMDR%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRRRKkYxtoRcVgp4%2FkAI7z7p3zNwZCJL8UCQcmmhdBSAiEA0LVi0jJ2gmJ93hcXaVeF8eC%2FN5zqPx7S9zf07ZqlRjwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcZESWbuoK8FdwVHyrcA5oDjaaUFabaCG%2FoNSS1Es5V0fjMhVdv93Hd4xnCVqF7Hq8IPKvtFpr4NQo%2BTnSbup4tJ0u0l2rbV71Pw3%2FHUr4EtL3GT3gQ9TP%2FLvn%2FG9iC4W%2BGc7C%2Fe9nhjPc2NuLSSPdeCmd%2F8FzrnLInINclhZH5SnzZ2zG9opH8UcnN4eeV5Ir48LsNJZ4dYPsvpZ%2BXywNogoQmFJAAdSjrWiwuFLLtYYwjwxkU2Xm9R0z3%2BgZkQIoHqiCrApIeWM%2Fuh2Cau30PRCN1Sj5voFl4KO8r%2BAG0Y1loAXIhdy72nd%2BvdhcwQDkpMSLQtngooEHUfSeg1JwYcj7yqKTZMh%2BvrF07DByo7L3IzRZrHclmsOlFZjuOf5oBY4gtnctX9iiVjZ699EhY%2F4%2BNZ8%2FbnDG%2Fa%2B7chFhPzZe4zK8cBTTq8NWsMumq7M4enZ9DG6k2LgxtiuWR%2BJ4wmrvsJj0IhNBfSc88%2F%2BnNxaNbkhKqgX%2B5t3%2BzNxpr5Eosr%2B%2FPdI8q9fMePpDDQc%2FGrD1Tua2ugKeEW3QbHPAn9Yk6lONe6WtLYvE7wZ0Sl%2Bu6XRAVtmHxjyO9YV8hA7jeF44MhaiTJCxgNguG9i8pRX%2Bqq0OXdXCGQyIa2Tqcoa2i4%2FnRNxd3MMeVMPSck8IGOqUBssiToG5euFhbf1SneENd1mX%2BRgt49PJT%2BKwc%2FyhO6qEOgeUtfSyfU%2BBMGdJ907bDxdmj%2FJoG1kC%2BHtKN6rgx37Gc5P5z4iuaTZW1GqCT3Gi2oyj1l9I7v%2BBh1lEjbEbVP%2FKKalDZwhHS%2B%2FiIaVlt2kmgArOlc4E%2BYrY3xI0TfHP3vQ1mR%2FGVGrRDx4VxWwloUODG5gwWJrsBDeam%2FHx5jVd%2B3ohp&X-Amz-Signature=d6827fcd8e410dbb54430412bef73a127245bb9a4ddb5d592d794949dd4d77d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
