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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSYPZII%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICMAD440NUapHYm0WrE2XxvtKnWK3eBn8KgFVaQjbriLAiEAp9o%2B4G7FpwBho1n3L82wTNNxWPN7%2F3KTJWtkqZ4KInIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfUkR%2Fbq6FqvJEuPCrcA8JA9Gyty%2B%2B9Uxvi54v29ofMjf%2BQupJpdgTukhgDot%2FKVU7jOfXQMCIg%2BF1kpXYa2xhxvXScsrVl3sPQuknW1Xs%2B3ak%2F2%2BQwoIlWQvPFZ6CB7a7DF58QSr7oT8pVpNBa8c3rjau0nLki9UB2YSKrpiazw8Bc32Y4bS4DzOTQwshfYUGDRuyog3gVgc8Y2Y7AWbosPBuTDbhwr0DgqShbqTfslpt40TmRptwGUn4dh5p%2BSYVkvgAZYkqVjEX%2BvmETxaP6Pa%2BSuGwj%2B2SMEYeIfa482E%2FshkGsCzy5uQ7tWtYnLAogDKZEaoWUGON8q9NliFqKWd7YLA43ioee%2Ff2FVKYP7MCd5a%2Fj2X4kZ5uIj0s99qn5Td1mUAgdCLwsUYBpYuhIjfKtpIRtt7nwKbHkj6Od35P86j7UQBVhihx0nGhp07Hme0wiLqJyekwAbvRZBYNEfQkc4ZpP08kampAldcyd3jMKtlQoNAANEkwLo7FNwS%2FlKMHLSmx1w%2BLkg25n4XFw1l%2BvA904lHE1Q53wlFkVzLkATwQaK0eG2aW3iAO2oPW2x3lHIWjnUVf3ZvZEVUuIwRXe6jDEqAR4n5NVidcY%2FTOly7Uw8LO0H8l4Wc6FvTqSuG8hEHHxF4eFMNeB8sEGOqUBnglGky%2FS5R50NrzQQCk3QkAnx3SdhBZ1XhwRgxCCbHxiYG9Eg4dtbiDXvgHFtelXqRGGxOiI4i9063F%2Fe8pJQsCo3Nz7SQ7fq7eV2c2Pyh2j0XLXSDXq8N8vm3ds45DRctK%2BVE8vB79bNIZy2hGXDHFxeWWZsaeUME0z6Y5rEweZX5CZyMHm3qUExBHWaiQZycXj3peOr7CeGPk7zQYzScv%2BTOyA&X-Amz-Signature=66b55f5e39e213537ec23d0fd24033392063db3c5701c30b3ee384be235063d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSYPZII%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICMAD440NUapHYm0WrE2XxvtKnWK3eBn8KgFVaQjbriLAiEAp9o%2B4G7FpwBho1n3L82wTNNxWPN7%2F3KTJWtkqZ4KInIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfUkR%2Fbq6FqvJEuPCrcA8JA9Gyty%2B%2B9Uxvi54v29ofMjf%2BQupJpdgTukhgDot%2FKVU7jOfXQMCIg%2BF1kpXYa2xhxvXScsrVl3sPQuknW1Xs%2B3ak%2F2%2BQwoIlWQvPFZ6CB7a7DF58QSr7oT8pVpNBa8c3rjau0nLki9UB2YSKrpiazw8Bc32Y4bS4DzOTQwshfYUGDRuyog3gVgc8Y2Y7AWbosPBuTDbhwr0DgqShbqTfslpt40TmRptwGUn4dh5p%2BSYVkvgAZYkqVjEX%2BvmETxaP6Pa%2BSuGwj%2B2SMEYeIfa482E%2FshkGsCzy5uQ7tWtYnLAogDKZEaoWUGON8q9NliFqKWd7YLA43ioee%2Ff2FVKYP7MCd5a%2Fj2X4kZ5uIj0s99qn5Td1mUAgdCLwsUYBpYuhIjfKtpIRtt7nwKbHkj6Od35P86j7UQBVhihx0nGhp07Hme0wiLqJyekwAbvRZBYNEfQkc4ZpP08kampAldcyd3jMKtlQoNAANEkwLo7FNwS%2FlKMHLSmx1w%2BLkg25n4XFw1l%2BvA904lHE1Q53wlFkVzLkATwQaK0eG2aW3iAO2oPW2x3lHIWjnUVf3ZvZEVUuIwRXe6jDEqAR4n5NVidcY%2FTOly7Uw8LO0H8l4Wc6FvTqSuG8hEHHxF4eFMNeB8sEGOqUBnglGky%2FS5R50NrzQQCk3QkAnx3SdhBZ1XhwRgxCCbHxiYG9Eg4dtbiDXvgHFtelXqRGGxOiI4i9063F%2Fe8pJQsCo3Nz7SQ7fq7eV2c2Pyh2j0XLXSDXq8N8vm3ds45DRctK%2BVE8vB79bNIZy2hGXDHFxeWWZsaeUME0z6Y5rEweZX5CZyMHm3qUExBHWaiQZycXj3peOr7CeGPk7zQYzScv%2BTOyA&X-Amz-Signature=bb0733215122f5dd30ab85cf3d7d638b07cf257ad3804eacbaebb2caeaf22477&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSYPZII%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICMAD440NUapHYm0WrE2XxvtKnWK3eBn8KgFVaQjbriLAiEAp9o%2B4G7FpwBho1n3L82wTNNxWPN7%2F3KTJWtkqZ4KInIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfUkR%2Fbq6FqvJEuPCrcA8JA9Gyty%2B%2B9Uxvi54v29ofMjf%2BQupJpdgTukhgDot%2FKVU7jOfXQMCIg%2BF1kpXYa2xhxvXScsrVl3sPQuknW1Xs%2B3ak%2F2%2BQwoIlWQvPFZ6CB7a7DF58QSr7oT8pVpNBa8c3rjau0nLki9UB2YSKrpiazw8Bc32Y4bS4DzOTQwshfYUGDRuyog3gVgc8Y2Y7AWbosPBuTDbhwr0DgqShbqTfslpt40TmRptwGUn4dh5p%2BSYVkvgAZYkqVjEX%2BvmETxaP6Pa%2BSuGwj%2B2SMEYeIfa482E%2FshkGsCzy5uQ7tWtYnLAogDKZEaoWUGON8q9NliFqKWd7YLA43ioee%2Ff2FVKYP7MCd5a%2Fj2X4kZ5uIj0s99qn5Td1mUAgdCLwsUYBpYuhIjfKtpIRtt7nwKbHkj6Od35P86j7UQBVhihx0nGhp07Hme0wiLqJyekwAbvRZBYNEfQkc4ZpP08kampAldcyd3jMKtlQoNAANEkwLo7FNwS%2FlKMHLSmx1w%2BLkg25n4XFw1l%2BvA904lHE1Q53wlFkVzLkATwQaK0eG2aW3iAO2oPW2x3lHIWjnUVf3ZvZEVUuIwRXe6jDEqAR4n5NVidcY%2FTOly7Uw8LO0H8l4Wc6FvTqSuG8hEHHxF4eFMNeB8sEGOqUBnglGky%2FS5R50NrzQQCk3QkAnx3SdhBZ1XhwRgxCCbHxiYG9Eg4dtbiDXvgHFtelXqRGGxOiI4i9063F%2Fe8pJQsCo3Nz7SQ7fq7eV2c2Pyh2j0XLXSDXq8N8vm3ds45DRctK%2BVE8vB79bNIZy2hGXDHFxeWWZsaeUME0z6Y5rEweZX5CZyMHm3qUExBHWaiQZycXj3peOr7CeGPk7zQYzScv%2BTOyA&X-Amz-Signature=f16b735dc5f0b79dfaebc915f58493e63cf70b125b46cee7798f5708a5835f60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
