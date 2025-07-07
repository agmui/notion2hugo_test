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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLCIPGCO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDz2N5zn4F7a8d6uvdLWZMiBF88Sd65tZwIE9%2BLf%2FnjUwIgaoOTIwY2sKpZMj0wdbFIc0JrSc5HvJ%2B%2BJsnU0qoDH7Yq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAOKqOW3avMOm7%2BUvircA1dWBEgNkDePOWDGZBn0wnXuhZ29LDAepyD0r%2FRiKJUQJdVDzW1seMXG3YUPx7koTARqJEfgidQr%2BwRiNyqYMS5vshmv0Z5r2furMpSKBcu2pj1Ajd4SUPcD7BdqNHDdyLJRfr7L%2Fuk1wAaGlGtBK8hFcNsS3m0hQ5K7BrnKMur1Y2uLx1B00ZfQNkVc03mNG7pl82Cs9a%2F2s82jCO1wRwxBuDJM%2FlxJzlPOFSB%2BJF0yKIaDD6ZLpCkRt5C%2B%2Fjl3xHLzkll58EenSA1AwDDBIw4vDArL61eKRBF0CgRbagFE0oUz7ZVcBFAfqwDjZ0ct803Lac9FvqnJa%2BCd%2FarLkndlD51z4dVkxR0ZHDjx2fPPWhH3Ce%2BLANapTkFL76RkEXQ5azIgnatLQobpAGVh0fNlgHKabiX3194BBdIuPzUh8xSRzM1xvQ99HN4o4mokYqIC8qwSO1Qhw3nSaw89u6cTJdEJg6UCuD030m%2B9iPpvWfh5MbjzKyfFlauC39bDdZh7F62jFwmQSWWeu2K41U6mAkCAdVoLi24msD7j5gUaZGB%2F7hBa%2F65rcxXJvGvNBNoVHPSqVXVWs7eUfrCKEU%2FcPDq%2Bnvg2cenoYb6QhTIMzoe6r4LGkNwUyHboMKSMr8MGOqUBfwuQRMFwIqdW3kBFT6s%2BCxUFtRvn8fed9sBifkkAyX%2Ff%2FbZye3zNbr6AaVjUQYDTf3oYrlXbVe5zLQe1ySVvzYa3QrOEglihMN2onjA5HPas2wlHonRdCes0K8HXH79qML4yWJq3aZY21ZnGFNk%2F2EvyPXU8eDmBUyPaY8kpz2mPMBqQQzwMM2oEdffO%2BnexhF1Tj6UgUxx420sPImREm7NpSClJ&X-Amz-Signature=4c45e73a42b11d7dce1d33564bd69868477efc697c73f95b04cdb68c81b154e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLCIPGCO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDz2N5zn4F7a8d6uvdLWZMiBF88Sd65tZwIE9%2BLf%2FnjUwIgaoOTIwY2sKpZMj0wdbFIc0JrSc5HvJ%2B%2BJsnU0qoDH7Yq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAOKqOW3avMOm7%2BUvircA1dWBEgNkDePOWDGZBn0wnXuhZ29LDAepyD0r%2FRiKJUQJdVDzW1seMXG3YUPx7koTARqJEfgidQr%2BwRiNyqYMS5vshmv0Z5r2furMpSKBcu2pj1Ajd4SUPcD7BdqNHDdyLJRfr7L%2Fuk1wAaGlGtBK8hFcNsS3m0hQ5K7BrnKMur1Y2uLx1B00ZfQNkVc03mNG7pl82Cs9a%2F2s82jCO1wRwxBuDJM%2FlxJzlPOFSB%2BJF0yKIaDD6ZLpCkRt5C%2B%2Fjl3xHLzkll58EenSA1AwDDBIw4vDArL61eKRBF0CgRbagFE0oUz7ZVcBFAfqwDjZ0ct803Lac9FvqnJa%2BCd%2FarLkndlD51z4dVkxR0ZHDjx2fPPWhH3Ce%2BLANapTkFL76RkEXQ5azIgnatLQobpAGVh0fNlgHKabiX3194BBdIuPzUh8xSRzM1xvQ99HN4o4mokYqIC8qwSO1Qhw3nSaw89u6cTJdEJg6UCuD030m%2B9iPpvWfh5MbjzKyfFlauC39bDdZh7F62jFwmQSWWeu2K41U6mAkCAdVoLi24msD7j5gUaZGB%2F7hBa%2F65rcxXJvGvNBNoVHPSqVXVWs7eUfrCKEU%2FcPDq%2Bnvg2cenoYb6QhTIMzoe6r4LGkNwUyHboMKSMr8MGOqUBfwuQRMFwIqdW3kBFT6s%2BCxUFtRvn8fed9sBifkkAyX%2Ff%2FbZye3zNbr6AaVjUQYDTf3oYrlXbVe5zLQe1ySVvzYa3QrOEglihMN2onjA5HPas2wlHonRdCes0K8HXH79qML4yWJq3aZY21ZnGFNk%2F2EvyPXU8eDmBUyPaY8kpz2mPMBqQQzwMM2oEdffO%2BnexhF1Tj6UgUxx420sPImREm7NpSClJ&X-Amz-Signature=e51f30d90098d5fb2562848d9aaa7f619c7e80cdc0b8d48f79515c7479dcf7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLCIPGCO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDz2N5zn4F7a8d6uvdLWZMiBF88Sd65tZwIE9%2BLf%2FnjUwIgaoOTIwY2sKpZMj0wdbFIc0JrSc5HvJ%2B%2BJsnU0qoDH7Yq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAOKqOW3avMOm7%2BUvircA1dWBEgNkDePOWDGZBn0wnXuhZ29LDAepyD0r%2FRiKJUQJdVDzW1seMXG3YUPx7koTARqJEfgidQr%2BwRiNyqYMS5vshmv0Z5r2furMpSKBcu2pj1Ajd4SUPcD7BdqNHDdyLJRfr7L%2Fuk1wAaGlGtBK8hFcNsS3m0hQ5K7BrnKMur1Y2uLx1B00ZfQNkVc03mNG7pl82Cs9a%2F2s82jCO1wRwxBuDJM%2FlxJzlPOFSB%2BJF0yKIaDD6ZLpCkRt5C%2B%2Fjl3xHLzkll58EenSA1AwDDBIw4vDArL61eKRBF0CgRbagFE0oUz7ZVcBFAfqwDjZ0ct803Lac9FvqnJa%2BCd%2FarLkndlD51z4dVkxR0ZHDjx2fPPWhH3Ce%2BLANapTkFL76RkEXQ5azIgnatLQobpAGVh0fNlgHKabiX3194BBdIuPzUh8xSRzM1xvQ99HN4o4mokYqIC8qwSO1Qhw3nSaw89u6cTJdEJg6UCuD030m%2B9iPpvWfh5MbjzKyfFlauC39bDdZh7F62jFwmQSWWeu2K41U6mAkCAdVoLi24msD7j5gUaZGB%2F7hBa%2F65rcxXJvGvNBNoVHPSqVXVWs7eUfrCKEU%2FcPDq%2Bnvg2cenoYb6QhTIMzoe6r4LGkNwUyHboMKSMr8MGOqUBfwuQRMFwIqdW3kBFT6s%2BCxUFtRvn8fed9sBifkkAyX%2Ff%2FbZye3zNbr6AaVjUQYDTf3oYrlXbVe5zLQe1ySVvzYa3QrOEglihMN2onjA5HPas2wlHonRdCes0K8HXH79qML4yWJq3aZY21ZnGFNk%2F2EvyPXU8eDmBUyPaY8kpz2mPMBqQQzwMM2oEdffO%2BnexhF1Tj6UgUxx420sPImREm7NpSClJ&X-Amz-Signature=0f765dd12b07e1c1edda372941325725c93045914adbb3e47eab2108f993394d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
