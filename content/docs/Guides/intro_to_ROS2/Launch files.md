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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRC24YWJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeqQFBoOE5nZNj%2F3ayrK6U%2ByUTczuEzQ89XOpD9TTlSwIgZlt7aOTLRmUxJPEXHTcehGk%2BF4bTswkrx2i92BguhmIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAgsk0aO58V5jT9KPyrcA05j7TTo91K0%2Fytkmk3CpP8PkvJSHDVNLkkiV1dH7bdVCuXjXZzJLvQaOyBfFhIICBu%2BMe0icdLVspwenidzebGbMsjq%2BeGoIexWhtZfR39DFLp2FL4SDieX1R1%2FuhiU2oGF3XWkEn2Kryv5Jmnt9%2Fe9jsI11Nmc%2Bnhb8FQwjqHtBO88YkYcprw0eOwpXNpUyVtoQ%2Fha5wRmPxncwC5Fi3lIesZAEWoqHr8oZo6A3VJEW0zsx6pprMctWU7444N3x2EICPPovLnFd0WRx0%2FIo%2FP13AG%2FjdhquMp%2BqbVPxZOvYEzcLUvI9uEUPbkMndo0j3ROjWoKkp3w1%2FsmqkVGZ6FvKsEwriztpWNc0S0VaPyJWODWeQ9XFlbAG5OtdrQHOgRqepWPzF%2Bq%2BwjhFNdfuRc8CPgChzkHIMNSYsqSzO%2BJPm0VfYVN3rSy619KZLGYFrFmvwMElw4aTRnXB3DRkjPvM1NWuzGkvCFsHUSAzjbgxDUInnKFv0Sw5PChNFMgPRERqqlXw2t2BX76k8%2FlQk3rBwsZIe3g2jhuCYUhXsg0FvqnBbhkNR8VrKPhpoj5G7FI7KMIwU1X17yspwAPBPfAcloBlp57BGZVE1338OnCNW582HxVhQEGXizKMP7Aw8IGOqUBZVt1oTqOCTavk1TOb3O3h187cLMVde4BLU9VPq3%2Fmgmwg8XKLJHLq3mjYYrbkbTcXPKYsXblFxguVdPMXiAYrUfKwsN6tWQituGIxzF2vOpdTdzSWaA3J9Kw2JiX%2FtliwuSKMeWUeVzRAwNx9GvvQwuR7nNHjaJVeuUiRwg9UEBEoCqvl7KGyDXwDNkShifBLK6BqgSiLZCHoVrdnUgH1NskQztT&X-Amz-Signature=876910a61edaf6737ba12327951e69a4b9132dd2a1c4a51d84b670872ef2367e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRC24YWJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeqQFBoOE5nZNj%2F3ayrK6U%2ByUTczuEzQ89XOpD9TTlSwIgZlt7aOTLRmUxJPEXHTcehGk%2BF4bTswkrx2i92BguhmIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAgsk0aO58V5jT9KPyrcA05j7TTo91K0%2Fytkmk3CpP8PkvJSHDVNLkkiV1dH7bdVCuXjXZzJLvQaOyBfFhIICBu%2BMe0icdLVspwenidzebGbMsjq%2BeGoIexWhtZfR39DFLp2FL4SDieX1R1%2FuhiU2oGF3XWkEn2Kryv5Jmnt9%2Fe9jsI11Nmc%2Bnhb8FQwjqHtBO88YkYcprw0eOwpXNpUyVtoQ%2Fha5wRmPxncwC5Fi3lIesZAEWoqHr8oZo6A3VJEW0zsx6pprMctWU7444N3x2EICPPovLnFd0WRx0%2FIo%2FP13AG%2FjdhquMp%2BqbVPxZOvYEzcLUvI9uEUPbkMndo0j3ROjWoKkp3w1%2FsmqkVGZ6FvKsEwriztpWNc0S0VaPyJWODWeQ9XFlbAG5OtdrQHOgRqepWPzF%2Bq%2BwjhFNdfuRc8CPgChzkHIMNSYsqSzO%2BJPm0VfYVN3rSy619KZLGYFrFmvwMElw4aTRnXB3DRkjPvM1NWuzGkvCFsHUSAzjbgxDUInnKFv0Sw5PChNFMgPRERqqlXw2t2BX76k8%2FlQk3rBwsZIe3g2jhuCYUhXsg0FvqnBbhkNR8VrKPhpoj5G7FI7KMIwU1X17yspwAPBPfAcloBlp57BGZVE1338OnCNW582HxVhQEGXizKMP7Aw8IGOqUBZVt1oTqOCTavk1TOb3O3h187cLMVde4BLU9VPq3%2Fmgmwg8XKLJHLq3mjYYrbkbTcXPKYsXblFxguVdPMXiAYrUfKwsN6tWQituGIxzF2vOpdTdzSWaA3J9Kw2JiX%2FtliwuSKMeWUeVzRAwNx9GvvQwuR7nNHjaJVeuUiRwg9UEBEoCqvl7KGyDXwDNkShifBLK6BqgSiLZCHoVrdnUgH1NskQztT&X-Amz-Signature=c3c9bd3ba9eecbf218bd5477a34e97cb3189e74de59f4f786e1fddc5d04c71c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRC24YWJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeqQFBoOE5nZNj%2F3ayrK6U%2ByUTczuEzQ89XOpD9TTlSwIgZlt7aOTLRmUxJPEXHTcehGk%2BF4bTswkrx2i92BguhmIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDAgsk0aO58V5jT9KPyrcA05j7TTo91K0%2Fytkmk3CpP8PkvJSHDVNLkkiV1dH7bdVCuXjXZzJLvQaOyBfFhIICBu%2BMe0icdLVspwenidzebGbMsjq%2BeGoIexWhtZfR39DFLp2FL4SDieX1R1%2FuhiU2oGF3XWkEn2Kryv5Jmnt9%2Fe9jsI11Nmc%2Bnhb8FQwjqHtBO88YkYcprw0eOwpXNpUyVtoQ%2Fha5wRmPxncwC5Fi3lIesZAEWoqHr8oZo6A3VJEW0zsx6pprMctWU7444N3x2EICPPovLnFd0WRx0%2FIo%2FP13AG%2FjdhquMp%2BqbVPxZOvYEzcLUvI9uEUPbkMndo0j3ROjWoKkp3w1%2FsmqkVGZ6FvKsEwriztpWNc0S0VaPyJWODWeQ9XFlbAG5OtdrQHOgRqepWPzF%2Bq%2BwjhFNdfuRc8CPgChzkHIMNSYsqSzO%2BJPm0VfYVN3rSy619KZLGYFrFmvwMElw4aTRnXB3DRkjPvM1NWuzGkvCFsHUSAzjbgxDUInnKFv0Sw5PChNFMgPRERqqlXw2t2BX76k8%2FlQk3rBwsZIe3g2jhuCYUhXsg0FvqnBbhkNR8VrKPhpoj5G7FI7KMIwU1X17yspwAPBPfAcloBlp57BGZVE1338OnCNW582HxVhQEGXizKMP7Aw8IGOqUBZVt1oTqOCTavk1TOb3O3h187cLMVde4BLU9VPq3%2Fmgmwg8XKLJHLq3mjYYrbkbTcXPKYsXblFxguVdPMXiAYrUfKwsN6tWQituGIxzF2vOpdTdzSWaA3J9Kw2JiX%2FtliwuSKMeWUeVzRAwNx9GvvQwuR7nNHjaJVeuUiRwg9UEBEoCqvl7KGyDXwDNkShifBLK6BqgSiLZCHoVrdnUgH1NskQztT&X-Amz-Signature=b7f555eb121a95bbd7638e4e522b26be1597330dc920018cde624393dd682581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
