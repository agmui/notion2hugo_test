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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZDISPR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPyPEzwOjltLDpCYtO0765tzNxKpXCbL%2Bb5JE5K%2B1YzAIgHyYKkr%2FEE0HqcyclouoHiW8Ws%2FHycWlO9aew8YgKnSQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbwidhe%2FL00y78HFyrcAwsvYsN5gkxrj7d8oyXqsQD1QiN9uvyYKXgPFDPBvN5XKM%2FW2eN2FMovI2VGBaRmByeqpu2gKlLNrjxdOdWZ4pRLqtWP%2Bp4i5hsLhqrk%2BLfu9zIirWiyU4tBizvkp%2BOfvYThTkU9U8jXsw068dVtK9%2BpaCDxJEA%2Bnqri%2BhvLezCn8jyVmh1whOnkIKETxl%2FDOsdEiImbUNvtS469jVTYZrgrCXO7tft7uwXssW73CKFyG%2BzCvedLYLn7BHgYBxAMafInYwHeaRU7nApEyOLHXqd5lTHWI1PCUc021vsNokO4uynEoSn3bYO0WkR5JfMsAlGeHr7VkGTFLQ%2BXMfI078SdMrW9qcnbbRqI1jlXoWK252pEdTpuWctC%2F11JzNF6jht%2BmB5JrFaOM4RUSzqLdyrgELit81Euq0Y95TIk0ueg5uRSW50ik6g%2FubFECzGFzt7%2FWCSfzAOYVh%2FB7g%2B%2F%2FIPda9JPZJ2SxkcT%2FW33vfx6hY2%2BIZBI8OBsRVNbXVGBOKrJbSzYONm4UiZUsSqt3M%2F4ZCCfsIbybXqfz4IMmaQLCq%2F%2BvTYmBHxnAuUb2986RtC0uO7PqZRFTIkrOMTi%2F%2FHZ5t2Fd9aTJYwox0YduhZQ%2FbDoEZlW1QWOy7O%2FMNyajsAGOqUB5UZsUL1EpOE0%2BExS6u1oaR0LDU0vuJIMsSFLv%2FleztuDKjFw2rGDY5Wk9fodnGtKzKFUFVWkAVEGXkfPN9WJkbF9gEgpwlkezq2sgXrUTlQ5fENzHXjWcqmOUgGzmWuP1ME5XydRzCnJ6wWbQXqQlhG2BrSWL2qPU8Ds0MHrHXEBR0kL6i7j%2FOhHUHiwL%2BE%2Fw2t3Nc%2BSJX42XgB54DEdgNBNX7vg&X-Amz-Signature=b25ff96bee9451dd4dab1009e2f42131685c2eb153c4edf57fd065d9a82caac7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZDISPR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPyPEzwOjltLDpCYtO0765tzNxKpXCbL%2Bb5JE5K%2B1YzAIgHyYKkr%2FEE0HqcyclouoHiW8Ws%2FHycWlO9aew8YgKnSQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbwidhe%2FL00y78HFyrcAwsvYsN5gkxrj7d8oyXqsQD1QiN9uvyYKXgPFDPBvN5XKM%2FW2eN2FMovI2VGBaRmByeqpu2gKlLNrjxdOdWZ4pRLqtWP%2Bp4i5hsLhqrk%2BLfu9zIirWiyU4tBizvkp%2BOfvYThTkU9U8jXsw068dVtK9%2BpaCDxJEA%2Bnqri%2BhvLezCn8jyVmh1whOnkIKETxl%2FDOsdEiImbUNvtS469jVTYZrgrCXO7tft7uwXssW73CKFyG%2BzCvedLYLn7BHgYBxAMafInYwHeaRU7nApEyOLHXqd5lTHWI1PCUc021vsNokO4uynEoSn3bYO0WkR5JfMsAlGeHr7VkGTFLQ%2BXMfI078SdMrW9qcnbbRqI1jlXoWK252pEdTpuWctC%2F11JzNF6jht%2BmB5JrFaOM4RUSzqLdyrgELit81Euq0Y95TIk0ueg5uRSW50ik6g%2FubFECzGFzt7%2FWCSfzAOYVh%2FB7g%2B%2F%2FIPda9JPZJ2SxkcT%2FW33vfx6hY2%2BIZBI8OBsRVNbXVGBOKrJbSzYONm4UiZUsSqt3M%2F4ZCCfsIbybXqfz4IMmaQLCq%2F%2BvTYmBHxnAuUb2986RtC0uO7PqZRFTIkrOMTi%2F%2FHZ5t2Fd9aTJYwox0YduhZQ%2FbDoEZlW1QWOy7O%2FMNyajsAGOqUB5UZsUL1EpOE0%2BExS6u1oaR0LDU0vuJIMsSFLv%2FleztuDKjFw2rGDY5Wk9fodnGtKzKFUFVWkAVEGXkfPN9WJkbF9gEgpwlkezq2sgXrUTlQ5fENzHXjWcqmOUgGzmWuP1ME5XydRzCnJ6wWbQXqQlhG2BrSWL2qPU8Ds0MHrHXEBR0kL6i7j%2FOhHUHiwL%2BE%2Fw2t3Nc%2BSJX42XgB54DEdgNBNX7vg&X-Amz-Signature=e405074dc080b663652f0e91c33f4783baac7a75a08a62d2c1b45511a00bb708&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZDISPR%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPyPEzwOjltLDpCYtO0765tzNxKpXCbL%2Bb5JE5K%2B1YzAIgHyYKkr%2FEE0HqcyclouoHiW8Ws%2FHycWlO9aew8YgKnSQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbwidhe%2FL00y78HFyrcAwsvYsN5gkxrj7d8oyXqsQD1QiN9uvyYKXgPFDPBvN5XKM%2FW2eN2FMovI2VGBaRmByeqpu2gKlLNrjxdOdWZ4pRLqtWP%2Bp4i5hsLhqrk%2BLfu9zIirWiyU4tBizvkp%2BOfvYThTkU9U8jXsw068dVtK9%2BpaCDxJEA%2Bnqri%2BhvLezCn8jyVmh1whOnkIKETxl%2FDOsdEiImbUNvtS469jVTYZrgrCXO7tft7uwXssW73CKFyG%2BzCvedLYLn7BHgYBxAMafInYwHeaRU7nApEyOLHXqd5lTHWI1PCUc021vsNokO4uynEoSn3bYO0WkR5JfMsAlGeHr7VkGTFLQ%2BXMfI078SdMrW9qcnbbRqI1jlXoWK252pEdTpuWctC%2F11JzNF6jht%2BmB5JrFaOM4RUSzqLdyrgELit81Euq0Y95TIk0ueg5uRSW50ik6g%2FubFECzGFzt7%2FWCSfzAOYVh%2FB7g%2B%2F%2FIPda9JPZJ2SxkcT%2FW33vfx6hY2%2BIZBI8OBsRVNbXVGBOKrJbSzYONm4UiZUsSqt3M%2F4ZCCfsIbybXqfz4IMmaQLCq%2F%2BvTYmBHxnAuUb2986RtC0uO7PqZRFTIkrOMTi%2F%2FHZ5t2Fd9aTJYwox0YduhZQ%2FbDoEZlW1QWOy7O%2FMNyajsAGOqUB5UZsUL1EpOE0%2BExS6u1oaR0LDU0vuJIMsSFLv%2FleztuDKjFw2rGDY5Wk9fodnGtKzKFUFVWkAVEGXkfPN9WJkbF9gEgpwlkezq2sgXrUTlQ5fENzHXjWcqmOUgGzmWuP1ME5XydRzCnJ6wWbQXqQlhG2BrSWL2qPU8Ds0MHrHXEBR0kL6i7j%2FOhHUHiwL%2BE%2Fw2t3Nc%2BSJX42XgB54DEdgNBNX7vg&X-Amz-Signature=2ae16329f1d1f593f30f0713823d9de91879633e3fb475c1145f50ad8a862af7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
