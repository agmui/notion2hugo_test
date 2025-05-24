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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIPDMWK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGGgzWIURkpU0%2FRuV58SpQDrIH6TEVuhYO59QAmwnaQmAiEAuR1lHWqI%2B089WDHgQl8cYTVEN%2BJZrh%2B2zGKFNRsnZmwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMRX%2BduGzD4%2BCTJCeCrcAy%2F00DZ%2FI%2FXMZ6MBzZzHDjSCzmShBG0D%2B4NCVw5T2ASptFbfMzApjOMk1DsKwfCikorxZASXxkIS9p5nRBTtq5IQfJtLsc33bUsk0F8i1vtiJFOFW65YAy5UOrT%2FBU34VEYnt%2F4v2vkjIs7oQUJ1p%2BFxCSz9gttiN9q3dlkzZGse8Z%2BJV%2BxpLe9NbeTaeCpGuLwmUDWEmx1fckVHdd5xdgelgrJifG%2FdnARfEB41XpUaQJxOCqlPGXe8cS7TuAzRpttU5nFyaMjwNnASF7Nus9VDbQ1CCO8DWiK9dcpoRwaJxYA%2Fpq3pbg9b4NQyUCM23W5RFyQ%2FHqPRS7knXQ7I4jlhP6GC8AnuR1NiLqtCNoYjI3n97OPH0rbyocpxVQlSZu%2FkACpoZK5adxdKUdxmrxZgKuW2ca0bEPN8mXbSM6ekTijQ09oRJynjxO6gEbje%2FxFbMpZrAyo9Pi5fG6dY%2FnnYogWvO9teT48UVlldDNlzEh%2F4XWrpPeuhFustmjiKfL3EDdRkxqTqgvaBg0VnQRo62UlsvwSZzvhjChGywqeuJPHt2mdSTumPsnneMq4oJWiZeK67rIxurFpcvCx%2BlCldUN4NeKerG1wXAHoHn2XVcFwIjqG7KE4GA332MNHfxcEGOqUBcday6VJ2YhbFI1NptUl7VDuox8n0cNAcXV5iGU%2BI4ovCunJJbpPAG%2B8gV0P0Ck172vzol7%2FQsqDmfCl0UfQqta2MKKCTvknzpw5i7wK3L0r%2FwEbNrj%2BybX06kVo31KZ6UkAI2v3mBvoxm6bq%2Bcb8zXuX2ZCTx9foUNQfvmcwKTQpcvQNrQ%2Ba5jK%2FtWgmqp5kNTJViuQQ4AjOkpebTuiOmn7Ovg00&X-Amz-Signature=9fa0962a22410ae04a3ab31fb516352ef3923ee799b04198f521431f1ed88bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIPDMWK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGGgzWIURkpU0%2FRuV58SpQDrIH6TEVuhYO59QAmwnaQmAiEAuR1lHWqI%2B089WDHgQl8cYTVEN%2BJZrh%2B2zGKFNRsnZmwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMRX%2BduGzD4%2BCTJCeCrcAy%2F00DZ%2FI%2FXMZ6MBzZzHDjSCzmShBG0D%2B4NCVw5T2ASptFbfMzApjOMk1DsKwfCikorxZASXxkIS9p5nRBTtq5IQfJtLsc33bUsk0F8i1vtiJFOFW65YAy5UOrT%2FBU34VEYnt%2F4v2vkjIs7oQUJ1p%2BFxCSz9gttiN9q3dlkzZGse8Z%2BJV%2BxpLe9NbeTaeCpGuLwmUDWEmx1fckVHdd5xdgelgrJifG%2FdnARfEB41XpUaQJxOCqlPGXe8cS7TuAzRpttU5nFyaMjwNnASF7Nus9VDbQ1CCO8DWiK9dcpoRwaJxYA%2Fpq3pbg9b4NQyUCM23W5RFyQ%2FHqPRS7knXQ7I4jlhP6GC8AnuR1NiLqtCNoYjI3n97OPH0rbyocpxVQlSZu%2FkACpoZK5adxdKUdxmrxZgKuW2ca0bEPN8mXbSM6ekTijQ09oRJynjxO6gEbje%2FxFbMpZrAyo9Pi5fG6dY%2FnnYogWvO9teT48UVlldDNlzEh%2F4XWrpPeuhFustmjiKfL3EDdRkxqTqgvaBg0VnQRo62UlsvwSZzvhjChGywqeuJPHt2mdSTumPsnneMq4oJWiZeK67rIxurFpcvCx%2BlCldUN4NeKerG1wXAHoHn2XVcFwIjqG7KE4GA332MNHfxcEGOqUBcday6VJ2YhbFI1NptUl7VDuox8n0cNAcXV5iGU%2BI4ovCunJJbpPAG%2B8gV0P0Ck172vzol7%2FQsqDmfCl0UfQqta2MKKCTvknzpw5i7wK3L0r%2FwEbNrj%2BybX06kVo31KZ6UkAI2v3mBvoxm6bq%2Bcb8zXuX2ZCTx9foUNQfvmcwKTQpcvQNrQ%2Ba5jK%2FtWgmqp5kNTJViuQQ4AjOkpebTuiOmn7Ovg00&X-Amz-Signature=2c6113cfd6f2449130748ed58f185b25bc48c08f5cd1ee3338f929f0db341dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JIPDMWK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGGgzWIURkpU0%2FRuV58SpQDrIH6TEVuhYO59QAmwnaQmAiEAuR1lHWqI%2B089WDHgQl8cYTVEN%2BJZrh%2B2zGKFNRsnZmwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMRX%2BduGzD4%2BCTJCeCrcAy%2F00DZ%2FI%2FXMZ6MBzZzHDjSCzmShBG0D%2B4NCVw5T2ASptFbfMzApjOMk1DsKwfCikorxZASXxkIS9p5nRBTtq5IQfJtLsc33bUsk0F8i1vtiJFOFW65YAy5UOrT%2FBU34VEYnt%2F4v2vkjIs7oQUJ1p%2BFxCSz9gttiN9q3dlkzZGse8Z%2BJV%2BxpLe9NbeTaeCpGuLwmUDWEmx1fckVHdd5xdgelgrJifG%2FdnARfEB41XpUaQJxOCqlPGXe8cS7TuAzRpttU5nFyaMjwNnASF7Nus9VDbQ1CCO8DWiK9dcpoRwaJxYA%2Fpq3pbg9b4NQyUCM23W5RFyQ%2FHqPRS7knXQ7I4jlhP6GC8AnuR1NiLqtCNoYjI3n97OPH0rbyocpxVQlSZu%2FkACpoZK5adxdKUdxmrxZgKuW2ca0bEPN8mXbSM6ekTijQ09oRJynjxO6gEbje%2FxFbMpZrAyo9Pi5fG6dY%2FnnYogWvO9teT48UVlldDNlzEh%2F4XWrpPeuhFustmjiKfL3EDdRkxqTqgvaBg0VnQRo62UlsvwSZzvhjChGywqeuJPHt2mdSTumPsnneMq4oJWiZeK67rIxurFpcvCx%2BlCldUN4NeKerG1wXAHoHn2XVcFwIjqG7KE4GA332MNHfxcEGOqUBcday6VJ2YhbFI1NptUl7VDuox8n0cNAcXV5iGU%2BI4ovCunJJbpPAG%2B8gV0P0Ck172vzol7%2FQsqDmfCl0UfQqta2MKKCTvknzpw5i7wK3L0r%2FwEbNrj%2BybX06kVo31KZ6UkAI2v3mBvoxm6bq%2Bcb8zXuX2ZCTx9foUNQfvmcwKTQpcvQNrQ%2Ba5jK%2FtWgmqp5kNTJViuQQ4AjOkpebTuiOmn7Ovg00&X-Amz-Signature=0cedd77b36eaf2b2117ebbddd7b960120df5cf49f1686870f2ed072382c35278&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
