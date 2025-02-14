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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGWB7EZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQC6TNQES9yNd2WtuR9f4Ck5nPG6CxHLbufo%2BmykxDognAIhANt4Yr5nA%2BV99WAK%2BDglWftrL%2BrbN5EwZporwIeFzzzVKv8DCDgQABoMNjM3NDIzMTgzODA1Igzf0FeVan31yiUOygEq3AOT07S1VOUPKQ8xAFscLnJgcPBdZVFtAF14KvXLYgFhbZCgXUIy3%2FAepkVuIjB%2BgEhn8ADsFbW7I4L3y8jEbjpzZ2BHIEm%2Fx7yEIzpeq1eXuxY5hn5V45UKe1tIDUyMDFOWIBiiA6ccVj6aqofa4kDl9B08u1XbGwJ5C89Zv7y5lJBcaFO1%2B3UPyzyI2VQUDdUq0BqYiDQGIlS2%2BD%2BLlBXrm7JnPB4DjIEI3ECKg13FbcwMlrTHz0xhg7AaFCmLROYCOBHn4xzlj1KItzDqGvXydtKnQFHrhKvpQ%2FwSqPHIlQfPVbdIFHCGZIF9WD%2Bu0LD1LIdKIPWldcA86xkqK6uBSW9q%2BPVTb4DorfdUTaitjqmuAy%2BGk8KX%2F0HggGPVFpn5B2YNV6%2B4SZk55ds9%2F1mkoq9wZT5NZ1ZCQyJdItM6awhqHYVrgpn0MQcMNvxZccDarUsllJPmoyDE4lPLaKBZZIowf0i%2BvLQS%2FGeIIReEHtCZ6leORQ9Z4WtgxRgOciMtk%2BVZrjBXhSGcbKyU5cmvnQoy9rlRggh3aHbZLbo0c6UrCtfJa8tXtEtv%2Fc5%2BAhzNa03KckE4OEvnooAA6OM7PR6MVmE4pOlPCDHWBCEzVOR8%2B62B8JQbp66s1DDWlL%2B9BjqkAUXtxuSVhys3Y67eDsv8IaFUbKyskgmORpsW0PhM8efudTr1ZClQHpBpsJBpESCa%2FWtaSRcIy4LSYQmiEiaKso5JIeF1hrgsvXVlVCZV%2FJdzxvnbztglowR3zfAMP%2FXUqHviFoMgh1Xmxx6VkEFNq69nB9r4T75ifwyD4%2FrsZvTDxGCaq9UgOAN2bDjrvic6zj%2BHr35o0rEnZJCX0H%2BWFPmbGyfc&X-Amz-Signature=7005a5308a105c5c3888e77082a5e5a6dd1bacb95d0447c2432be7a870a24f34&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGWB7EZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQC6TNQES9yNd2WtuR9f4Ck5nPG6CxHLbufo%2BmykxDognAIhANt4Yr5nA%2BV99WAK%2BDglWftrL%2BrbN5EwZporwIeFzzzVKv8DCDgQABoMNjM3NDIzMTgzODA1Igzf0FeVan31yiUOygEq3AOT07S1VOUPKQ8xAFscLnJgcPBdZVFtAF14KvXLYgFhbZCgXUIy3%2FAepkVuIjB%2BgEhn8ADsFbW7I4L3y8jEbjpzZ2BHIEm%2Fx7yEIzpeq1eXuxY5hn5V45UKe1tIDUyMDFOWIBiiA6ccVj6aqofa4kDl9B08u1XbGwJ5C89Zv7y5lJBcaFO1%2B3UPyzyI2VQUDdUq0BqYiDQGIlS2%2BD%2BLlBXrm7JnPB4DjIEI3ECKg13FbcwMlrTHz0xhg7AaFCmLROYCOBHn4xzlj1KItzDqGvXydtKnQFHrhKvpQ%2FwSqPHIlQfPVbdIFHCGZIF9WD%2Bu0LD1LIdKIPWldcA86xkqK6uBSW9q%2BPVTb4DorfdUTaitjqmuAy%2BGk8KX%2F0HggGPVFpn5B2YNV6%2B4SZk55ds9%2F1mkoq9wZT5NZ1ZCQyJdItM6awhqHYVrgpn0MQcMNvxZccDarUsllJPmoyDE4lPLaKBZZIowf0i%2BvLQS%2FGeIIReEHtCZ6leORQ9Z4WtgxRgOciMtk%2BVZrjBXhSGcbKyU5cmvnQoy9rlRggh3aHbZLbo0c6UrCtfJa8tXtEtv%2Fc5%2BAhzNa03KckE4OEvnooAA6OM7PR6MVmE4pOlPCDHWBCEzVOR8%2B62B8JQbp66s1DDWlL%2B9BjqkAUXtxuSVhys3Y67eDsv8IaFUbKyskgmORpsW0PhM8efudTr1ZClQHpBpsJBpESCa%2FWtaSRcIy4LSYQmiEiaKso5JIeF1hrgsvXVlVCZV%2FJdzxvnbztglowR3zfAMP%2FXUqHviFoMgh1Xmxx6VkEFNq69nB9r4T75ifwyD4%2FrsZvTDxGCaq9UgOAN2bDjrvic6zj%2BHr35o0rEnZJCX0H%2BWFPmbGyfc&X-Amz-Signature=a7149c67807a556eb1f5f0818c13b8a7396eae13a7b4696b5eeaabc01214fa50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGWB7EZ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQC6TNQES9yNd2WtuR9f4Ck5nPG6CxHLbufo%2BmykxDognAIhANt4Yr5nA%2BV99WAK%2BDglWftrL%2BrbN5EwZporwIeFzzzVKv8DCDgQABoMNjM3NDIzMTgzODA1Igzf0FeVan31yiUOygEq3AOT07S1VOUPKQ8xAFscLnJgcPBdZVFtAF14KvXLYgFhbZCgXUIy3%2FAepkVuIjB%2BgEhn8ADsFbW7I4L3y8jEbjpzZ2BHIEm%2Fx7yEIzpeq1eXuxY5hn5V45UKe1tIDUyMDFOWIBiiA6ccVj6aqofa4kDl9B08u1XbGwJ5C89Zv7y5lJBcaFO1%2B3UPyzyI2VQUDdUq0BqYiDQGIlS2%2BD%2BLlBXrm7JnPB4DjIEI3ECKg13FbcwMlrTHz0xhg7AaFCmLROYCOBHn4xzlj1KItzDqGvXydtKnQFHrhKvpQ%2FwSqPHIlQfPVbdIFHCGZIF9WD%2Bu0LD1LIdKIPWldcA86xkqK6uBSW9q%2BPVTb4DorfdUTaitjqmuAy%2BGk8KX%2F0HggGPVFpn5B2YNV6%2B4SZk55ds9%2F1mkoq9wZT5NZ1ZCQyJdItM6awhqHYVrgpn0MQcMNvxZccDarUsllJPmoyDE4lPLaKBZZIowf0i%2BvLQS%2FGeIIReEHtCZ6leORQ9Z4WtgxRgOciMtk%2BVZrjBXhSGcbKyU5cmvnQoy9rlRggh3aHbZLbo0c6UrCtfJa8tXtEtv%2Fc5%2BAhzNa03KckE4OEvnooAA6OM7PR6MVmE4pOlPCDHWBCEzVOR8%2B62B8JQbp66s1DDWlL%2B9BjqkAUXtxuSVhys3Y67eDsv8IaFUbKyskgmORpsW0PhM8efudTr1ZClQHpBpsJBpESCa%2FWtaSRcIy4LSYQmiEiaKso5JIeF1hrgsvXVlVCZV%2FJdzxvnbztglowR3zfAMP%2FXUqHviFoMgh1Xmxx6VkEFNq69nB9r4T75ifwyD4%2FrsZvTDxGCaq9UgOAN2bDjrvic6zj%2BHr35o0rEnZJCX0H%2BWFPmbGyfc&X-Amz-Signature=b6876edfdd961ca1264965f7e316c14690fbaaf6170636816b1227436639ad72&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
