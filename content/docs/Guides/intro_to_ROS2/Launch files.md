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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZNUEWP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEWX9JwJjcF5hRcq2BYsIIC%2F12teVVrN%2FGRp020EUekoAiEAz5H2PawuCuKQXCtRxsJ%2B0uRKYkxEN2QFAczKkXA9N7Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNGGF6qb4fBQ5S7fWyrcA3h8YKJiE7aSEF09917fyFfnDk6A933X73WKIas7ojxXq%2F4Ew3P8q%2FpaLqzW1Jr43XKKAIWXP2z7oo7gGvzLQbEt8pYHyRT%2B5lj0l6AkPRKoaUWd9JcHB5NbbjMZw7nVMehPpZGKNdeGabrgh%2BU%2BPWq0aPY9Fh5QMRPmtCakoUOVFLaMl3Nsew9bZqOytZOOx8k9C%2Bb4js1YZ2NJu72QGvrMdqtHy5L6WiUGKESvaBpQcyeKgAiXqh1sNHLyDxuixdj9t2s6pBuSODqfM3YxK%2FacWPYt9E3cHEMmZH0aNKcYx%2FcRxEf7fNQNgtKowzw78OT4a1Tm%2BwtDQ6H9SqJ9G8DlXSsEiIZ7an1lkFVmt7xh%2Fnq6%2BMN9DgYCT9GJ3URJrZLzITXAvvCDNpFqllN6lC2vuJuGH2TD%2BPwI8NKtC%2Fh2T9WdNDpjersABAiTq4Rn4z6uel7schpUe9QqnM4GWtEeTWWOQAJeoVc8gXC%2FnbBsP61dZChNui6IGKMeRQXZAww7uQFTwP8dF55pudlOwe75%2FYFGfyT5fq3oyIkhTcysJ%2B12KHO4rTbDwuCY25xn5jZ9A4hmoZHnH7giXTZZLZdHdGD6tiLJEjX3tQ1QnUONp8zK6WetH%2B6KCyktMOzcsL4GOqUBpIwklEOFnXh%2F%2Bp3hKBOqu4LxnPxhmG%2F%2Bkc4o%2FuSOp9f9OgWDDZqcKvx%2B%2Fq6uOFrciTu4oJ09u9WI3ZOzJJtptMcTBEU4HKnE8QcDmRTLzJ%2F%2Bx%2Fny3ipPzkHKEYb9lixJuC7ObtSgM2yTcM8vtav%2BgUHZ46oJFuWDBRrTuauMJ4OMHSKTfWIkRkA3uxQ3BHQZZMPy3xeZJQDratjKgxr3wZQjR9%2Fp&X-Amz-Signature=1f1b4edbc40617bca97d7505b1deb485d762aab34564ac0fce4aa9c80164edd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZNUEWP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEWX9JwJjcF5hRcq2BYsIIC%2F12teVVrN%2FGRp020EUekoAiEAz5H2PawuCuKQXCtRxsJ%2B0uRKYkxEN2QFAczKkXA9N7Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNGGF6qb4fBQ5S7fWyrcA3h8YKJiE7aSEF09917fyFfnDk6A933X73WKIas7ojxXq%2F4Ew3P8q%2FpaLqzW1Jr43XKKAIWXP2z7oo7gGvzLQbEt8pYHyRT%2B5lj0l6AkPRKoaUWd9JcHB5NbbjMZw7nVMehPpZGKNdeGabrgh%2BU%2BPWq0aPY9Fh5QMRPmtCakoUOVFLaMl3Nsew9bZqOytZOOx8k9C%2Bb4js1YZ2NJu72QGvrMdqtHy5L6WiUGKESvaBpQcyeKgAiXqh1sNHLyDxuixdj9t2s6pBuSODqfM3YxK%2FacWPYt9E3cHEMmZH0aNKcYx%2FcRxEf7fNQNgtKowzw78OT4a1Tm%2BwtDQ6H9SqJ9G8DlXSsEiIZ7an1lkFVmt7xh%2Fnq6%2BMN9DgYCT9GJ3URJrZLzITXAvvCDNpFqllN6lC2vuJuGH2TD%2BPwI8NKtC%2Fh2T9WdNDpjersABAiTq4Rn4z6uel7schpUe9QqnM4GWtEeTWWOQAJeoVc8gXC%2FnbBsP61dZChNui6IGKMeRQXZAww7uQFTwP8dF55pudlOwe75%2FYFGfyT5fq3oyIkhTcysJ%2B12KHO4rTbDwuCY25xn5jZ9A4hmoZHnH7giXTZZLZdHdGD6tiLJEjX3tQ1QnUONp8zK6WetH%2B6KCyktMOzcsL4GOqUBpIwklEOFnXh%2F%2Bp3hKBOqu4LxnPxhmG%2F%2Bkc4o%2FuSOp9f9OgWDDZqcKvx%2B%2Fq6uOFrciTu4oJ09u9WI3ZOzJJtptMcTBEU4HKnE8QcDmRTLzJ%2F%2Bx%2Fny3ipPzkHKEYb9lixJuC7ObtSgM2yTcM8vtav%2BgUHZ46oJFuWDBRrTuauMJ4OMHSKTfWIkRkA3uxQ3BHQZZMPy3xeZJQDratjKgxr3wZQjR9%2Fp&X-Amz-Signature=d9717fb8a0e1c4dbdf39a0c31829845ddc5e385a26a38de3e22575f9a352f19b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRZNUEWP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEWX9JwJjcF5hRcq2BYsIIC%2F12teVVrN%2FGRp020EUekoAiEAz5H2PawuCuKQXCtRxsJ%2B0uRKYkxEN2QFAczKkXA9N7Aq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNGGF6qb4fBQ5S7fWyrcA3h8YKJiE7aSEF09917fyFfnDk6A933X73WKIas7ojxXq%2F4Ew3P8q%2FpaLqzW1Jr43XKKAIWXP2z7oo7gGvzLQbEt8pYHyRT%2B5lj0l6AkPRKoaUWd9JcHB5NbbjMZw7nVMehPpZGKNdeGabrgh%2BU%2BPWq0aPY9Fh5QMRPmtCakoUOVFLaMl3Nsew9bZqOytZOOx8k9C%2Bb4js1YZ2NJu72QGvrMdqtHy5L6WiUGKESvaBpQcyeKgAiXqh1sNHLyDxuixdj9t2s6pBuSODqfM3YxK%2FacWPYt9E3cHEMmZH0aNKcYx%2FcRxEf7fNQNgtKowzw78OT4a1Tm%2BwtDQ6H9SqJ9G8DlXSsEiIZ7an1lkFVmt7xh%2Fnq6%2BMN9DgYCT9GJ3URJrZLzITXAvvCDNpFqllN6lC2vuJuGH2TD%2BPwI8NKtC%2Fh2T9WdNDpjersABAiTq4Rn4z6uel7schpUe9QqnM4GWtEeTWWOQAJeoVc8gXC%2FnbBsP61dZChNui6IGKMeRQXZAww7uQFTwP8dF55pudlOwe75%2FYFGfyT5fq3oyIkhTcysJ%2B12KHO4rTbDwuCY25xn5jZ9A4hmoZHnH7giXTZZLZdHdGD6tiLJEjX3tQ1QnUONp8zK6WetH%2B6KCyktMOzcsL4GOqUBpIwklEOFnXh%2F%2Bp3hKBOqu4LxnPxhmG%2F%2Bkc4o%2FuSOp9f9OgWDDZqcKvx%2B%2Fq6uOFrciTu4oJ09u9WI3ZOzJJtptMcTBEU4HKnE8QcDmRTLzJ%2F%2Bx%2Fny3ipPzkHKEYb9lixJuC7ObtSgM2yTcM8vtav%2BgUHZ46oJFuWDBRrTuauMJ4OMHSKTfWIkRkA3uxQ3BHQZZMPy3xeZJQDratjKgxr3wZQjR9%2Fp&X-Amz-Signature=93517d1f7526837dc741d4f74f64a459d3592fa7ce0869fc72301985e7ce8052&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
