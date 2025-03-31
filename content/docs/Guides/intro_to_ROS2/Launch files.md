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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GVOAEF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFzz83qT0seogTIkehry4pOPsdDKgQmdl1xo8d4rWc%2BRAiEA33mrHmSfsn5Hjv7cVb%2FNTWkk9BfXqFUNPPLUs5VRzawqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FelkC2C4Zc%2BmBlMyrcA3Oi4RsVt1dtE0lg0c0h8YBYhliJKMHW5maW5fEI9G%2B0kizKY2fxG14Ta%2Blovwu1zm%2FaY34PV9HaOwXiDuyY34TjOB6%2F%2F2W2viqbYlff6q%2FCdqiZhVcGaQCLx17fds1x7sI3xMHj9X8C6TGL0d45a2PXjUo26a%2BU0pc2ZdowIuM9KUnHMvc825tos0lyGtY1e8TsMdgAH5sCsPa568JCNn1sJSpjnBXs%2BJLytRIrE1wCXjxlWTVoRmZ60%2Bu56RDf6jxZ%2B2nisWH6I54pjx8ik1CDSxuvgXFxbCYWI8UEikcU1GcvqyVmG9c%2BVCtnc9%2FQgYy2wjFgjnEGJygDaHfLalbZvwDY53owKfOLQ1dHyY0tpX6Q37c8yF%2FFB0kbXhWCVTpvnBB7zgVNmMBIBh4wrLfIoriFLJcZyWbdTaHSr%2Fh4ShubnrzLgKDcAjewad%2BVLKml8sP6V7MhF%2Be%2FtOvGn4OX0THfrxNQeP3Yv7Uqp1KZJlNDba%2F2tegs10u9p3N%2B7lEyHOVoFbGph826y77IhD37EE%2F%2B4pK1ldqYXGFjCG5JY4DzKnvsxNCXYrl11RijTUOSJt1akA1UWAdq0w53DUrM6eDxvxNXZTsdokR1c3msp4lqd9nkviNamAYJMInmqb8GOqUBTlQ8jluyAsOigINfE35Yp2FO80AkAK2hbgdiaFrgXqhgzu7xaGqfy%2BYVJHHE0UzJVGWNJ2V2lWRSSMYLC2fYt947BdXz7qSWjjB6JeC9VF%2BfSgrbiwLAHMzMSd41nTDqSZVnVWO%2By4yd0eRZV6UF2AIiL%2Fdwnw%2BFBb8Q9G5uEuOc%2FtIfxmiZN9qKZArHBHs%2FarTC3BqpXj77csBgxxPdGXzp8jhX&X-Amz-Signature=bcf356ef35bf2a4588823470cb7b4909c40f5be7b9a0ca00464e244ed20117ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GVOAEF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFzz83qT0seogTIkehry4pOPsdDKgQmdl1xo8d4rWc%2BRAiEA33mrHmSfsn5Hjv7cVb%2FNTWkk9BfXqFUNPPLUs5VRzawqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FelkC2C4Zc%2BmBlMyrcA3Oi4RsVt1dtE0lg0c0h8YBYhliJKMHW5maW5fEI9G%2B0kizKY2fxG14Ta%2Blovwu1zm%2FaY34PV9HaOwXiDuyY34TjOB6%2F%2F2W2viqbYlff6q%2FCdqiZhVcGaQCLx17fds1x7sI3xMHj9X8C6TGL0d45a2PXjUo26a%2BU0pc2ZdowIuM9KUnHMvc825tos0lyGtY1e8TsMdgAH5sCsPa568JCNn1sJSpjnBXs%2BJLytRIrE1wCXjxlWTVoRmZ60%2Bu56RDf6jxZ%2B2nisWH6I54pjx8ik1CDSxuvgXFxbCYWI8UEikcU1GcvqyVmG9c%2BVCtnc9%2FQgYy2wjFgjnEGJygDaHfLalbZvwDY53owKfOLQ1dHyY0tpX6Q37c8yF%2FFB0kbXhWCVTpvnBB7zgVNmMBIBh4wrLfIoriFLJcZyWbdTaHSr%2Fh4ShubnrzLgKDcAjewad%2BVLKml8sP6V7MhF%2Be%2FtOvGn4OX0THfrxNQeP3Yv7Uqp1KZJlNDba%2F2tegs10u9p3N%2B7lEyHOVoFbGph826y77IhD37EE%2F%2B4pK1ldqYXGFjCG5JY4DzKnvsxNCXYrl11RijTUOSJt1akA1UWAdq0w53DUrM6eDxvxNXZTsdokR1c3msp4lqd9nkviNamAYJMInmqb8GOqUBTlQ8jluyAsOigINfE35Yp2FO80AkAK2hbgdiaFrgXqhgzu7xaGqfy%2BYVJHHE0UzJVGWNJ2V2lWRSSMYLC2fYt947BdXz7qSWjjB6JeC9VF%2BfSgrbiwLAHMzMSd41nTDqSZVnVWO%2By4yd0eRZV6UF2AIiL%2Fdwnw%2BFBb8Q9G5uEuOc%2FtIfxmiZN9qKZArHBHs%2FarTC3BqpXj77csBgxxPdGXzp8jhX&X-Amz-Signature=bd125f7cdc4e9030669f39c16a4b284fe68e36a0b4f099493afc9e0ce0a9fa67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GVOAEF%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFzz83qT0seogTIkehry4pOPsdDKgQmdl1xo8d4rWc%2BRAiEA33mrHmSfsn5Hjv7cVb%2FNTWkk9BfXqFUNPPLUs5VRzawqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FelkC2C4Zc%2BmBlMyrcA3Oi4RsVt1dtE0lg0c0h8YBYhliJKMHW5maW5fEI9G%2B0kizKY2fxG14Ta%2Blovwu1zm%2FaY34PV9HaOwXiDuyY34TjOB6%2F%2F2W2viqbYlff6q%2FCdqiZhVcGaQCLx17fds1x7sI3xMHj9X8C6TGL0d45a2PXjUo26a%2BU0pc2ZdowIuM9KUnHMvc825tos0lyGtY1e8TsMdgAH5sCsPa568JCNn1sJSpjnBXs%2BJLytRIrE1wCXjxlWTVoRmZ60%2Bu56RDf6jxZ%2B2nisWH6I54pjx8ik1CDSxuvgXFxbCYWI8UEikcU1GcvqyVmG9c%2BVCtnc9%2FQgYy2wjFgjnEGJygDaHfLalbZvwDY53owKfOLQ1dHyY0tpX6Q37c8yF%2FFB0kbXhWCVTpvnBB7zgVNmMBIBh4wrLfIoriFLJcZyWbdTaHSr%2Fh4ShubnrzLgKDcAjewad%2BVLKml8sP6V7MhF%2Be%2FtOvGn4OX0THfrxNQeP3Yv7Uqp1KZJlNDba%2F2tegs10u9p3N%2B7lEyHOVoFbGph826y77IhD37EE%2F%2B4pK1ldqYXGFjCG5JY4DzKnvsxNCXYrl11RijTUOSJt1akA1UWAdq0w53DUrM6eDxvxNXZTsdokR1c3msp4lqd9nkviNamAYJMInmqb8GOqUBTlQ8jluyAsOigINfE35Yp2FO80AkAK2hbgdiaFrgXqhgzu7xaGqfy%2BYVJHHE0UzJVGWNJ2V2lWRSSMYLC2fYt947BdXz7qSWjjB6JeC9VF%2BfSgrbiwLAHMzMSd41nTDqSZVnVWO%2By4yd0eRZV6UF2AIiL%2Fdwnw%2BFBb8Q9G5uEuOc%2FtIfxmiZN9qKZArHBHs%2FarTC3BqpXj77csBgxxPdGXzp8jhX&X-Amz-Signature=e75cf18c887b1bd1ca421ef52e77f9c687f102d0f61e6e1bdee4535565f58b21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
