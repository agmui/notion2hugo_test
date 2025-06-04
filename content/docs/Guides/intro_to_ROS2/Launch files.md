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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLLS77Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHDSkGn5iTipq4%2BF1mV2MvkTf%2B7jSwSZdaH2ybY%2BtTlKAiEAm2c3YaGvR7RPc3R08wf6ktyM3bmUCPpP69AES4L4Ks4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHvKFw9hqQ5nFnaWHyrcA1zAQRor1yPc%2BAV%2BeganaJeB2FUrpmIv8%2BSacNipM%2Fe%2B6lsq8%2BS%2F7CFDIHeH%2BE0qbZXxYW3ZDLXkwJcoIxQY%2BQd%2BkZXKknAlXJICK2MAFJEwS056oVWYykU2nLK%2FP73AK%2F1XTj7z9OBm5bMBuEZgn35xpxzBR7TZW1iKuxECmxRfCumCEd4xooXki619kFEe373XfqBZ9Wst8zoLzc976CC%2B%2BpAN0JLY3iYAHzQ0fKt9b%2Bpe64gY7pnBtrC%2B7Wp6Aq0SlavvG%2BJUcPgk%2ByOK%2BZ0cQPOqGEi8foK3f2veykmAb4IJPpVsNOmDWYwbwUlxVqpcl2LUCP1eI1YIdPbk%2BXiAczO%2BwYq5QE%2FUH761ks42rYFp%2Flem1PgmiIpNzGEjwszQzPDUzltSdIc6VX9a6FS6bervV5dooP%2Bh%2BVsEH9T6pGFYRp7W1MWIwNZnqr4hQ%2FTeZjE3ovBitm50ttxcffFj1zF%2BvdqbaUf8IPym9u0n7bC4QzSqAMmx%2FW5sVuQmn%2BfbuSHSW0ElsbinknNXRwvnprxMoOl7%2B%2FlWXp%2BWW%2FEaBUM1Zs%2BxgxJ4%2BcHKFEJ73yP9Xez5R5khdvcmB%2B7jnPh0RACQlOyQe1uRtjcDxJ5jG7Do%2FfUweC95pfdKMJOAgcIGOqUBDbdLOYVHlAi1RirzNsCYS1zcSlzJCjcwm3MkOJaiTmx%2FudwPA6SRmLELO8QF0VVsglz06LMUHJo%2FyKKozWdE2YynfBadGGc%2BkL%2FDneiO7fbNxdDLKDCrFh7lvhZiDpqsJPmNd%2BmIU6q5CaB7Wy1V%2BhQbU%2BQaDfePJqE49Ispyn5rVcaFIbvpL3WHdReAEmwFwPXYHu0%2BNwAWm6L5BNYDpFi70FwP&X-Amz-Signature=ac6c746a46eda01c3f02494739e8c628bae1a2aab9b9b0290eeeab9ca160e42f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLLS77Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHDSkGn5iTipq4%2BF1mV2MvkTf%2B7jSwSZdaH2ybY%2BtTlKAiEAm2c3YaGvR7RPc3R08wf6ktyM3bmUCPpP69AES4L4Ks4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHvKFw9hqQ5nFnaWHyrcA1zAQRor1yPc%2BAV%2BeganaJeB2FUrpmIv8%2BSacNipM%2Fe%2B6lsq8%2BS%2F7CFDIHeH%2BE0qbZXxYW3ZDLXkwJcoIxQY%2BQd%2BkZXKknAlXJICK2MAFJEwS056oVWYykU2nLK%2FP73AK%2F1XTj7z9OBm5bMBuEZgn35xpxzBR7TZW1iKuxECmxRfCumCEd4xooXki619kFEe373XfqBZ9Wst8zoLzc976CC%2B%2BpAN0JLY3iYAHzQ0fKt9b%2Bpe64gY7pnBtrC%2B7Wp6Aq0SlavvG%2BJUcPgk%2ByOK%2BZ0cQPOqGEi8foK3f2veykmAb4IJPpVsNOmDWYwbwUlxVqpcl2LUCP1eI1YIdPbk%2BXiAczO%2BwYq5QE%2FUH761ks42rYFp%2Flem1PgmiIpNzGEjwszQzPDUzltSdIc6VX9a6FS6bervV5dooP%2Bh%2BVsEH9T6pGFYRp7W1MWIwNZnqr4hQ%2FTeZjE3ovBitm50ttxcffFj1zF%2BvdqbaUf8IPym9u0n7bC4QzSqAMmx%2FW5sVuQmn%2BfbuSHSW0ElsbinknNXRwvnprxMoOl7%2B%2FlWXp%2BWW%2FEaBUM1Zs%2BxgxJ4%2BcHKFEJ73yP9Xez5R5khdvcmB%2B7jnPh0RACQlOyQe1uRtjcDxJ5jG7Do%2FfUweC95pfdKMJOAgcIGOqUBDbdLOYVHlAi1RirzNsCYS1zcSlzJCjcwm3MkOJaiTmx%2FudwPA6SRmLELO8QF0VVsglz06LMUHJo%2FyKKozWdE2YynfBadGGc%2BkL%2FDneiO7fbNxdDLKDCrFh7lvhZiDpqsJPmNd%2BmIU6q5CaB7Wy1V%2BhQbU%2BQaDfePJqE49Ispyn5rVcaFIbvpL3WHdReAEmwFwPXYHu0%2BNwAWm6L5BNYDpFi70FwP&X-Amz-Signature=90cbbab9ebbd621367289e2bfc2dc22e7a70f2fb9309d4cddb1b60a167312f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLLS77Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHDSkGn5iTipq4%2BF1mV2MvkTf%2B7jSwSZdaH2ybY%2BtTlKAiEAm2c3YaGvR7RPc3R08wf6ktyM3bmUCPpP69AES4L4Ks4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHvKFw9hqQ5nFnaWHyrcA1zAQRor1yPc%2BAV%2BeganaJeB2FUrpmIv8%2BSacNipM%2Fe%2B6lsq8%2BS%2F7CFDIHeH%2BE0qbZXxYW3ZDLXkwJcoIxQY%2BQd%2BkZXKknAlXJICK2MAFJEwS056oVWYykU2nLK%2FP73AK%2F1XTj7z9OBm5bMBuEZgn35xpxzBR7TZW1iKuxECmxRfCumCEd4xooXki619kFEe373XfqBZ9Wst8zoLzc976CC%2B%2BpAN0JLY3iYAHzQ0fKt9b%2Bpe64gY7pnBtrC%2B7Wp6Aq0SlavvG%2BJUcPgk%2ByOK%2BZ0cQPOqGEi8foK3f2veykmAb4IJPpVsNOmDWYwbwUlxVqpcl2LUCP1eI1YIdPbk%2BXiAczO%2BwYq5QE%2FUH761ks42rYFp%2Flem1PgmiIpNzGEjwszQzPDUzltSdIc6VX9a6FS6bervV5dooP%2Bh%2BVsEH9T6pGFYRp7W1MWIwNZnqr4hQ%2FTeZjE3ovBitm50ttxcffFj1zF%2BvdqbaUf8IPym9u0n7bC4QzSqAMmx%2FW5sVuQmn%2BfbuSHSW0ElsbinknNXRwvnprxMoOl7%2B%2FlWXp%2BWW%2FEaBUM1Zs%2BxgxJ4%2BcHKFEJ73yP9Xez5R5khdvcmB%2B7jnPh0RACQlOyQe1uRtjcDxJ5jG7Do%2FfUweC95pfdKMJOAgcIGOqUBDbdLOYVHlAi1RirzNsCYS1zcSlzJCjcwm3MkOJaiTmx%2FudwPA6SRmLELO8QF0VVsglz06LMUHJo%2FyKKozWdE2YynfBadGGc%2BkL%2FDneiO7fbNxdDLKDCrFh7lvhZiDpqsJPmNd%2BmIU6q5CaB7Wy1V%2BhQbU%2BQaDfePJqE49Ispyn5rVcaFIbvpL3WHdReAEmwFwPXYHu0%2BNwAWm6L5BNYDpFi70FwP&X-Amz-Signature=85ad06c4c4a852256a954e70d6ff488588f0bb1f4d31e5a14421e21b6a4cab3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
