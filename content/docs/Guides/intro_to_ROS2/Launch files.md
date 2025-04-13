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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWZJS6X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqEpM%2FWD5XLd3gUc5zQHH9E%2FXHbP88Yr1jTHrUBRNOtAIgR7mu0lq9bXqF4kpBe8%2BIwh0AdJJnhJmvwVjbchm%2FTfcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHEh8mgsZfa%2BwtJXircAzCjBTpvXKTYbct02MkzfdZWctcIlcfkFNOh2SQyNTdGOx6Pp30YQFQJfhN%2BNnsnRyQBxBNHl2N9eqsJavqpg%2Bnq7jEjHctVWfmt4BNWuk4DbgUVQWeTN9MGhJWVamQE8z6stGG7Y0qINn3%2F6pI21GFffBM3bK9VchZFze0DHL8KKv5acTIEh8aHDvcZL2KwwVXUB2ymGLXVSLDLZ8It57X%2BahuxB79%2F1fqZ838D6ZEJPQmNEcZ3%2FbRNlZ4G5eh3YASBILHOZOp%2F1SLRfFX4W3pWWbQ8UElbRfzhDHn0jGFZAw%2FHFQWsLP87bDJjIR%2BqtAy4smHyocCdARknbD6eCib7s3TXHmg%2F4HY8K3YVtVgmpxMc7yFQyz4Csv6b4HjZFCk7I%2B0h9iWkSI8xcTQUY%2F6Ke6nHXH5dCpNXLaXueKMQdUxC%2BtJY92gTzeyJdaGcd3ld7zm64FyOSgYHN1w%2Fwk8gkgqaSaev0fMRBrCs4jq3Adx4ug9%2BKY5tFvfWJFmOPs8FgjmVA0xM6Jg6%2BB6JBzNCZ6U8UfuL%2F5gfbvtHuLinaIWfW8AbsKnSW4wEwCCWeiIAMBMMdckE7DwhX4KIpWNTSLQBJnOW0NY5AFo7uOqRjV36e7UIXO5BOqq%2BMJGC8b8GOqUBxDGx%2BOvTUs31Hu5jfrgTEXrgBMdO7gIY5cSarHHfNvyx8E00tTS%2FCLgvP6eT%2BnuvvhtMN7U%2BJHciDrPlZrAqDVoPFBSGu0%2BsYFxwPxV%2BVjqeWeiL0T0%2F66ZlFmuEOH9i2wXqu8cJhaUAJ2P83rKp%2B3dcebUMELKIniPBlydels3w52KMrjalewp9tZua2eoRRpp8Gsvdi5Hx27PWGZFyAoj41PTQ&X-Amz-Signature=342c338d89b7eedac3223302d152b25db5c06401750775b1613ae6ffd0182360&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWZJS6X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqEpM%2FWD5XLd3gUc5zQHH9E%2FXHbP88Yr1jTHrUBRNOtAIgR7mu0lq9bXqF4kpBe8%2BIwh0AdJJnhJmvwVjbchm%2FTfcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHEh8mgsZfa%2BwtJXircAzCjBTpvXKTYbct02MkzfdZWctcIlcfkFNOh2SQyNTdGOx6Pp30YQFQJfhN%2BNnsnRyQBxBNHl2N9eqsJavqpg%2Bnq7jEjHctVWfmt4BNWuk4DbgUVQWeTN9MGhJWVamQE8z6stGG7Y0qINn3%2F6pI21GFffBM3bK9VchZFze0DHL8KKv5acTIEh8aHDvcZL2KwwVXUB2ymGLXVSLDLZ8It57X%2BahuxB79%2F1fqZ838D6ZEJPQmNEcZ3%2FbRNlZ4G5eh3YASBILHOZOp%2F1SLRfFX4W3pWWbQ8UElbRfzhDHn0jGFZAw%2FHFQWsLP87bDJjIR%2BqtAy4smHyocCdARknbD6eCib7s3TXHmg%2F4HY8K3YVtVgmpxMc7yFQyz4Csv6b4HjZFCk7I%2B0h9iWkSI8xcTQUY%2F6Ke6nHXH5dCpNXLaXueKMQdUxC%2BtJY92gTzeyJdaGcd3ld7zm64FyOSgYHN1w%2Fwk8gkgqaSaev0fMRBrCs4jq3Adx4ug9%2BKY5tFvfWJFmOPs8FgjmVA0xM6Jg6%2BB6JBzNCZ6U8UfuL%2F5gfbvtHuLinaIWfW8AbsKnSW4wEwCCWeiIAMBMMdckE7DwhX4KIpWNTSLQBJnOW0NY5AFo7uOqRjV36e7UIXO5BOqq%2BMJGC8b8GOqUBxDGx%2BOvTUs31Hu5jfrgTEXrgBMdO7gIY5cSarHHfNvyx8E00tTS%2FCLgvP6eT%2BnuvvhtMN7U%2BJHciDrPlZrAqDVoPFBSGu0%2BsYFxwPxV%2BVjqeWeiL0T0%2F66ZlFmuEOH9i2wXqu8cJhaUAJ2P83rKp%2B3dcebUMELKIniPBlydels3w52KMrjalewp9tZua2eoRRpp8Gsvdi5Hx27PWGZFyAoj41PTQ&X-Amz-Signature=3ba9f2fea16154b9a31ad0b90fbcca4b859e69aa7a7514ce822d2c6e5bc2fc89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWZJS6X%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCqEpM%2FWD5XLd3gUc5zQHH9E%2FXHbP88Yr1jTHrUBRNOtAIgR7mu0lq9bXqF4kpBe8%2BIwh0AdJJnhJmvwVjbchm%2FTfcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHEh8mgsZfa%2BwtJXircAzCjBTpvXKTYbct02MkzfdZWctcIlcfkFNOh2SQyNTdGOx6Pp30YQFQJfhN%2BNnsnRyQBxBNHl2N9eqsJavqpg%2Bnq7jEjHctVWfmt4BNWuk4DbgUVQWeTN9MGhJWVamQE8z6stGG7Y0qINn3%2F6pI21GFffBM3bK9VchZFze0DHL8KKv5acTIEh8aHDvcZL2KwwVXUB2ymGLXVSLDLZ8It57X%2BahuxB79%2F1fqZ838D6ZEJPQmNEcZ3%2FbRNlZ4G5eh3YASBILHOZOp%2F1SLRfFX4W3pWWbQ8UElbRfzhDHn0jGFZAw%2FHFQWsLP87bDJjIR%2BqtAy4smHyocCdARknbD6eCib7s3TXHmg%2F4HY8K3YVtVgmpxMc7yFQyz4Csv6b4HjZFCk7I%2B0h9iWkSI8xcTQUY%2F6Ke6nHXH5dCpNXLaXueKMQdUxC%2BtJY92gTzeyJdaGcd3ld7zm64FyOSgYHN1w%2Fwk8gkgqaSaev0fMRBrCs4jq3Adx4ug9%2BKY5tFvfWJFmOPs8FgjmVA0xM6Jg6%2BB6JBzNCZ6U8UfuL%2F5gfbvtHuLinaIWfW8AbsKnSW4wEwCCWeiIAMBMMdckE7DwhX4KIpWNTSLQBJnOW0NY5AFo7uOqRjV36e7UIXO5BOqq%2BMJGC8b8GOqUBxDGx%2BOvTUs31Hu5jfrgTEXrgBMdO7gIY5cSarHHfNvyx8E00tTS%2FCLgvP6eT%2BnuvvhtMN7U%2BJHciDrPlZrAqDVoPFBSGu0%2BsYFxwPxV%2BVjqeWeiL0T0%2F66ZlFmuEOH9i2wXqu8cJhaUAJ2P83rKp%2B3dcebUMELKIniPBlydels3w52KMrjalewp9tZua2eoRRpp8Gsvdi5Hx27PWGZFyAoj41PTQ&X-Amz-Signature=c906dab3c744d2a61b044c582c22a536cf6a1a6677bc098a90351e50c6a28a81&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
