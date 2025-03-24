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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WBTZPHY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCywBIaIeui37tYAM6kM3CC8ZEN1oQmWzBJOcCG5XLRCAIgcFgULPSq4f6XZaf76XeXiXFv9AZGXMf0qCAUiRqgtI4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdY9LprG7RFumQhaircA6rQMbB4jMwUlwsh7uKrjocZFmWcFLOBAXwZgQ%2F%2BEdGkKOpNNk0PC6zqN%2Fr1v%2BXHh9jfMyDkBoLlRDtWdj8RxgZC5%2B%2B81sQ7O2g2o4fInDsYh9KkQatUsXyMp3hNppAFXlGL%2BJPkNWBfvOeMCU13nTrGb%2FQ81LZ3TWiu25yntIO8nYTVgDSvhQLl%2FDwQD1QhrZhsoVS%2FE0SUKFyjBZrfyA3r%2FQTFDKcGHHT%2B%2BjVB%2BGmL3iE6eGDLbBlNd503w8qunBuIjxVaVaFkI9wbFNj%2FRLdwdhY7GIIOLwvrOMUAzVjwCFtkJYPJY1Zu9DRMl7%2FIeA70aUzqkWLifECMZ8G15SWiTS16sxyLytjL2laDWm7RbcUg1dpTElsxVreUcNs%2BhDNhMVSpWya2ASnvMPW6O3jAGUlGK7t%2FbC3G2qU3uyfCO5RP3hNcJc5rpAJIL7berKcQUCAUs1phPpKlqr3jgjdsfGo18c4Tl3esPKoqnpa%2FbhY1SOpbdw426aTQg8ynKF%2FM8BucdEcen80FgoEauR%2Bdm7XeSitU0Gk6HbtIVJQ7J6Aww1iYwkACQ75SxXv5nc9sySxCczoMp9%2B%2FFVR6Hf4yCIkVvUmx9uk4mSWIYBeDlwRSLYR%2Bub%2BgLWJiMJL%2Bhb8GOqUB5fG30J9VMipcqOeAiMn5RoSqDWJ3QgiYu0pAgrVDRBVP3qzvtwR0dT8KEAptD0gnIcNWNmeU9VdAh1GuLteb1N90xTgRRD8AMjTnmF4bVI%2F9PhLfP1G1PhpbWuHeCJiakSjvfKU1nreB%2BSElnubVlcqMTmpHJBshs49joVUxUqBEAlJ1NKuYLk8TEzDxJKaz0et2WVI7nDLlg%2BLNOswmob7FLwzJ&X-Amz-Signature=430b261d8ac6269be468eb002862bfe2f71cd3a6598ee900ef758f30729a1eed&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WBTZPHY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCywBIaIeui37tYAM6kM3CC8ZEN1oQmWzBJOcCG5XLRCAIgcFgULPSq4f6XZaf76XeXiXFv9AZGXMf0qCAUiRqgtI4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdY9LprG7RFumQhaircA6rQMbB4jMwUlwsh7uKrjocZFmWcFLOBAXwZgQ%2F%2BEdGkKOpNNk0PC6zqN%2Fr1v%2BXHh9jfMyDkBoLlRDtWdj8RxgZC5%2B%2B81sQ7O2g2o4fInDsYh9KkQatUsXyMp3hNppAFXlGL%2BJPkNWBfvOeMCU13nTrGb%2FQ81LZ3TWiu25yntIO8nYTVgDSvhQLl%2FDwQD1QhrZhsoVS%2FE0SUKFyjBZrfyA3r%2FQTFDKcGHHT%2B%2BjVB%2BGmL3iE6eGDLbBlNd503w8qunBuIjxVaVaFkI9wbFNj%2FRLdwdhY7GIIOLwvrOMUAzVjwCFtkJYPJY1Zu9DRMl7%2FIeA70aUzqkWLifECMZ8G15SWiTS16sxyLytjL2laDWm7RbcUg1dpTElsxVreUcNs%2BhDNhMVSpWya2ASnvMPW6O3jAGUlGK7t%2FbC3G2qU3uyfCO5RP3hNcJc5rpAJIL7berKcQUCAUs1phPpKlqr3jgjdsfGo18c4Tl3esPKoqnpa%2FbhY1SOpbdw426aTQg8ynKF%2FM8BucdEcen80FgoEauR%2Bdm7XeSitU0Gk6HbtIVJQ7J6Aww1iYwkACQ75SxXv5nc9sySxCczoMp9%2B%2FFVR6Hf4yCIkVvUmx9uk4mSWIYBeDlwRSLYR%2Bub%2BgLWJiMJL%2Bhb8GOqUB5fG30J9VMipcqOeAiMn5RoSqDWJ3QgiYu0pAgrVDRBVP3qzvtwR0dT8KEAptD0gnIcNWNmeU9VdAh1GuLteb1N90xTgRRD8AMjTnmF4bVI%2F9PhLfP1G1PhpbWuHeCJiakSjvfKU1nreB%2BSElnubVlcqMTmpHJBshs49joVUxUqBEAlJ1NKuYLk8TEzDxJKaz0et2WVI7nDLlg%2BLNOswmob7FLwzJ&X-Amz-Signature=d03726f2e028fb9b2453bd1a901111e75aeec14434fceb1c48c18fa7c19be3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WBTZPHY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCywBIaIeui37tYAM6kM3CC8ZEN1oQmWzBJOcCG5XLRCAIgcFgULPSq4f6XZaf76XeXiXFv9AZGXMf0qCAUiRqgtI4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdY9LprG7RFumQhaircA6rQMbB4jMwUlwsh7uKrjocZFmWcFLOBAXwZgQ%2F%2BEdGkKOpNNk0PC6zqN%2Fr1v%2BXHh9jfMyDkBoLlRDtWdj8RxgZC5%2B%2B81sQ7O2g2o4fInDsYh9KkQatUsXyMp3hNppAFXlGL%2BJPkNWBfvOeMCU13nTrGb%2FQ81LZ3TWiu25yntIO8nYTVgDSvhQLl%2FDwQD1QhrZhsoVS%2FE0SUKFyjBZrfyA3r%2FQTFDKcGHHT%2B%2BjVB%2BGmL3iE6eGDLbBlNd503w8qunBuIjxVaVaFkI9wbFNj%2FRLdwdhY7GIIOLwvrOMUAzVjwCFtkJYPJY1Zu9DRMl7%2FIeA70aUzqkWLifECMZ8G15SWiTS16sxyLytjL2laDWm7RbcUg1dpTElsxVreUcNs%2BhDNhMVSpWya2ASnvMPW6O3jAGUlGK7t%2FbC3G2qU3uyfCO5RP3hNcJc5rpAJIL7berKcQUCAUs1phPpKlqr3jgjdsfGo18c4Tl3esPKoqnpa%2FbhY1SOpbdw426aTQg8ynKF%2FM8BucdEcen80FgoEauR%2Bdm7XeSitU0Gk6HbtIVJQ7J6Aww1iYwkACQ75SxXv5nc9sySxCczoMp9%2B%2FFVR6Hf4yCIkVvUmx9uk4mSWIYBeDlwRSLYR%2Bub%2BgLWJiMJL%2Bhb8GOqUB5fG30J9VMipcqOeAiMn5RoSqDWJ3QgiYu0pAgrVDRBVP3qzvtwR0dT8KEAptD0gnIcNWNmeU9VdAh1GuLteb1N90xTgRRD8AMjTnmF4bVI%2F9PhLfP1G1PhpbWuHeCJiakSjvfKU1nreB%2BSElnubVlcqMTmpHJBshs49joVUxUqBEAlJ1NKuYLk8TEzDxJKaz0et2WVI7nDLlg%2BLNOswmob7FLwzJ&X-Amz-Signature=369cbed53aa51103a90eb88342fe5f2393e4cee08bc931ef13fde28a4284e355&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
