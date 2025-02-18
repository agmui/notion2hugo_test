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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSYYRG5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDate45m8P5n69ZKKk9iCvpMdsntgKc1oj7RrYjYG5jJAIhALGSShq3IMRVRfEn9%2BWS2vq4rlZM6sZgvq1g%2FHLb85fLKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJFPwP%2BOkyKgdlsOIq3AOB4PsOFpo47YaRDauvRE1eQpJGGO1zp8Vz41BgpkgBt9EP%2Bsp3WPyCoExKB%2BqMDQzCjzg4%2B0axkULwFf3h8Qi0JVVf8oNN1LdSmlPix6EFwavBfp25b%2BUMwmTWINIEDEEwpAs1IKn0OWqfbKH3BPMTZzZkPX8yNcKY1LlVHPGBSvnU6oXj%2FqLEv9F7sdbJlUq4dNlsqSIE2QseOvYeutIU9j24qw2cqD8BJSlhbEmjpdRCSjg06HL6SF%2FozsPfCAjz9pKHOvXAzmdITgmXnDVWyhApT%2Fw%2FcotTvqA6JZDseS41rilNaycL0l8P0sDh%2B%2FSx%2FHCETvKRpZJ3T1wRBKYON7gnEgmDHP2fe5q2IE8rXGMPo21k%2BGiLMQ6UAzTxq8%2BL9cpAudnjpOqbs09xT7%2Bgn%2BA2F%2FFNaItORZQpjG0FKf7MHSjj1TH%2Bh9optWg6gZvkHCAJnExtuw%2B1AGZRqzk9EeAa7ZJFBQpwd%2Boxql1bvlJ%2BlGPf3CWS2wIb9NoN5%2BrfrGknPPz8pcm8QI5J43sSJcMc0ti50zINTd2hRnzX4nXH26w6YEEVTwkjocyAGuE8AVLjWfLCL5WyrwAsH0ec1ZJScMrqY5sRr69trNh2brBxHTLZ%2FJXlW7%2BWADDvsdK9BjqkAST5OqJoMCmxaihgRlyeF%2FNwekEuPzs13PbbNQ%2BK8RauOrS2h2HBP0mAj5Fyvz006XMU6e48cEJ1NhlEBHLTZiPIwxtz0hwA3pK9NdJ1IREsfTWrbHhUeoXrnqpSZf2i5BZjEd1J08tTdBvbkretJxL8A%2B1WkNymajXQYKNTDOvHx%2Fgg3KRdSv6rmvImXD4qk2DN1GL0H0iXEY8aQA%2FVBlAUwMxO&X-Amz-Signature=8c11ddad5b92421c04b6b2cb59bc7a573a7231e89eed67b59e976aed31b72a35&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSYYRG5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDate45m8P5n69ZKKk9iCvpMdsntgKc1oj7RrYjYG5jJAIhALGSShq3IMRVRfEn9%2BWS2vq4rlZM6sZgvq1g%2FHLb85fLKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJFPwP%2BOkyKgdlsOIq3AOB4PsOFpo47YaRDauvRE1eQpJGGO1zp8Vz41BgpkgBt9EP%2Bsp3WPyCoExKB%2BqMDQzCjzg4%2B0axkULwFf3h8Qi0JVVf8oNN1LdSmlPix6EFwavBfp25b%2BUMwmTWINIEDEEwpAs1IKn0OWqfbKH3BPMTZzZkPX8yNcKY1LlVHPGBSvnU6oXj%2FqLEv9F7sdbJlUq4dNlsqSIE2QseOvYeutIU9j24qw2cqD8BJSlhbEmjpdRCSjg06HL6SF%2FozsPfCAjz9pKHOvXAzmdITgmXnDVWyhApT%2Fw%2FcotTvqA6JZDseS41rilNaycL0l8P0sDh%2B%2FSx%2FHCETvKRpZJ3T1wRBKYON7gnEgmDHP2fe5q2IE8rXGMPo21k%2BGiLMQ6UAzTxq8%2BL9cpAudnjpOqbs09xT7%2Bgn%2BA2F%2FFNaItORZQpjG0FKf7MHSjj1TH%2Bh9optWg6gZvkHCAJnExtuw%2B1AGZRqzk9EeAa7ZJFBQpwd%2Boxql1bvlJ%2BlGPf3CWS2wIb9NoN5%2BrfrGknPPz8pcm8QI5J43sSJcMc0ti50zINTd2hRnzX4nXH26w6YEEVTwkjocyAGuE8AVLjWfLCL5WyrwAsH0ec1ZJScMrqY5sRr69trNh2brBxHTLZ%2FJXlW7%2BWADDvsdK9BjqkAST5OqJoMCmxaihgRlyeF%2FNwekEuPzs13PbbNQ%2BK8RauOrS2h2HBP0mAj5Fyvz006XMU6e48cEJ1NhlEBHLTZiPIwxtz0hwA3pK9NdJ1IREsfTWrbHhUeoXrnqpSZf2i5BZjEd1J08tTdBvbkretJxL8A%2B1WkNymajXQYKNTDOvHx%2Fgg3KRdSv6rmvImXD4qk2DN1GL0H0iXEY8aQA%2FVBlAUwMxO&X-Amz-Signature=8b2eaa68e8321709895456890119c67d6cc12ae24e041601a86cd53dc7ea372c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSYYRG5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDate45m8P5n69ZKKk9iCvpMdsntgKc1oj7RrYjYG5jJAIhALGSShq3IMRVRfEn9%2BWS2vq4rlZM6sZgvq1g%2FHLb85fLKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJFPwP%2BOkyKgdlsOIq3AOB4PsOFpo47YaRDauvRE1eQpJGGO1zp8Vz41BgpkgBt9EP%2Bsp3WPyCoExKB%2BqMDQzCjzg4%2B0axkULwFf3h8Qi0JVVf8oNN1LdSmlPix6EFwavBfp25b%2BUMwmTWINIEDEEwpAs1IKn0OWqfbKH3BPMTZzZkPX8yNcKY1LlVHPGBSvnU6oXj%2FqLEv9F7sdbJlUq4dNlsqSIE2QseOvYeutIU9j24qw2cqD8BJSlhbEmjpdRCSjg06HL6SF%2FozsPfCAjz9pKHOvXAzmdITgmXnDVWyhApT%2Fw%2FcotTvqA6JZDseS41rilNaycL0l8P0sDh%2B%2FSx%2FHCETvKRpZJ3T1wRBKYON7gnEgmDHP2fe5q2IE8rXGMPo21k%2BGiLMQ6UAzTxq8%2BL9cpAudnjpOqbs09xT7%2Bgn%2BA2F%2FFNaItORZQpjG0FKf7MHSjj1TH%2Bh9optWg6gZvkHCAJnExtuw%2B1AGZRqzk9EeAa7ZJFBQpwd%2Boxql1bvlJ%2BlGPf3CWS2wIb9NoN5%2BrfrGknPPz8pcm8QI5J43sSJcMc0ti50zINTd2hRnzX4nXH26w6YEEVTwkjocyAGuE8AVLjWfLCL5WyrwAsH0ec1ZJScMrqY5sRr69trNh2brBxHTLZ%2FJXlW7%2BWADDvsdK9BjqkAST5OqJoMCmxaihgRlyeF%2FNwekEuPzs13PbbNQ%2BK8RauOrS2h2HBP0mAj5Fyvz006XMU6e48cEJ1NhlEBHLTZiPIwxtz0hwA3pK9NdJ1IREsfTWrbHhUeoXrnqpSZf2i5BZjEd1J08tTdBvbkretJxL8A%2B1WkNymajXQYKNTDOvHx%2Fgg3KRdSv6rmvImXD4qk2DN1GL0H0iXEY8aQA%2FVBlAUwMxO&X-Amz-Signature=3b25cb7e1e44cb2171fcd88cc2a94eb3283052adea32e7a65182c6d1ee7e7c22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
