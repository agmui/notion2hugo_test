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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQZPY34%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGDqeGjXaFvjX8CzIzpFyfYe201Vk720LbHk9Y0t5jkvAiEAlvTEA4YO0hUKdudE4BZmz9SGD7KlQ6Ix8TLfIGjBYEoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58XBfXpRuFNAWu7CrcA3m0MKpI7O4ETrIccigRRHfycchbbqVgzKZL7u%2FbrmlEIxjXWvZyrJ0qf%2Fkf7RmryoZOvN6wwFRCGt%2FIwV%2BuvJN%2B4vSCohEiblIqVFDGL0TMRLgG2BcQPYpWXmkZHm%2FavMZz9XVQ%2FoWZVjcrWufTSQ6P2dmJaipb5aBEHGO%2Bp5N%2Bb5Kwdb2O8SRchf5kfq08pYLYOKEUa%2BSwwEKXl1zli2DxP6FuduUIIMjEXpmHMDZKQC4%2B6U9iIUXiuR6Ww%2BunUt315BVGDQTQzLE5aYFJ1cXpo7o1Hh74TW5dzsl8jKYS4nC5EoVpoKAtrU6TR44qsAzK5PKqXc4VYisHEsRrzzQzwYVPQzvTFnyve25kE8mM%2B0Jyj7UWGpDlUl1TTrkOzdhbE2wrfwcOwI5FyG%2Fk3n0M4JST6kv3LAitMMhSorZsKaYYCA2pQ8nWAG%2BzF%2Fh%2FSXcrY5bLpNZhHKPmPLy%2FZen4vqC9LpUQgFHU5eTw7F3%2Fm1BbYD33g6N2G8Hq9Q8gIOM1GaY%2BreKdoJ68eLEipQk2KvHcPp%2BhLybgqzNhb6%2B6F%2FYTXbSjKURxZpvhTyiFw532B23xW5RM6TaeFDLUob7ijM3Z9QuDtcywiARLWP%2FIyC8fw4FHNGUv3x%2B3MIb7tL8GOqUBWdmQB2xcS189b9%2B%2Fw0k3jIicMqf32Zxf1KesLq%2Bxst4hnTdn9Hhnq%2BhaKOEfs3JGe5uafeWpWnKzNptNCHdIj%2FFtjVG7B%2B%2F%2FYeedXVTaYLjUBYogluJ8rMTGjC8wzmyT%2FtZeZVeZV0BPtwZZueVL2wfEhXL%2B9%2FBu7ozpvsdbiAhpk7iRR%2BHZ8LYn5kotL9iMErYTwGuT2TBLV5MeLQ9tXDotdRLk&X-Amz-Signature=344193311f5985ac4c3344a8c7d19655b4553c71057f850c20bab1e5f429eef1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQZPY34%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGDqeGjXaFvjX8CzIzpFyfYe201Vk720LbHk9Y0t5jkvAiEAlvTEA4YO0hUKdudE4BZmz9SGD7KlQ6Ix8TLfIGjBYEoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58XBfXpRuFNAWu7CrcA3m0MKpI7O4ETrIccigRRHfycchbbqVgzKZL7u%2FbrmlEIxjXWvZyrJ0qf%2Fkf7RmryoZOvN6wwFRCGt%2FIwV%2BuvJN%2B4vSCohEiblIqVFDGL0TMRLgG2BcQPYpWXmkZHm%2FavMZz9XVQ%2FoWZVjcrWufTSQ6P2dmJaipb5aBEHGO%2Bp5N%2Bb5Kwdb2O8SRchf5kfq08pYLYOKEUa%2BSwwEKXl1zli2DxP6FuduUIIMjEXpmHMDZKQC4%2B6U9iIUXiuR6Ww%2BunUt315BVGDQTQzLE5aYFJ1cXpo7o1Hh74TW5dzsl8jKYS4nC5EoVpoKAtrU6TR44qsAzK5PKqXc4VYisHEsRrzzQzwYVPQzvTFnyve25kE8mM%2B0Jyj7UWGpDlUl1TTrkOzdhbE2wrfwcOwI5FyG%2Fk3n0M4JST6kv3LAitMMhSorZsKaYYCA2pQ8nWAG%2BzF%2Fh%2FSXcrY5bLpNZhHKPmPLy%2FZen4vqC9LpUQgFHU5eTw7F3%2Fm1BbYD33g6N2G8Hq9Q8gIOM1GaY%2BreKdoJ68eLEipQk2KvHcPp%2BhLybgqzNhb6%2B6F%2FYTXbSjKURxZpvhTyiFw532B23xW5RM6TaeFDLUob7ijM3Z9QuDtcywiARLWP%2FIyC8fw4FHNGUv3x%2B3MIb7tL8GOqUBWdmQB2xcS189b9%2B%2Fw0k3jIicMqf32Zxf1KesLq%2Bxst4hnTdn9Hhnq%2BhaKOEfs3JGe5uafeWpWnKzNptNCHdIj%2FFtjVG7B%2B%2F%2FYeedXVTaYLjUBYogluJ8rMTGjC8wzmyT%2FtZeZVeZV0BPtwZZueVL2wfEhXL%2B9%2FBu7ozpvsdbiAhpk7iRR%2BHZ8LYn5kotL9iMErYTwGuT2TBLV5MeLQ9tXDotdRLk&X-Amz-Signature=1f2c4bad73aff9b233c14e9390ad74ce69f3fa857a732f8428ac9914e82243d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQZPY34%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIGDqeGjXaFvjX8CzIzpFyfYe201Vk720LbHk9Y0t5jkvAiEAlvTEA4YO0hUKdudE4BZmz9SGD7KlQ6Ix8TLfIGjBYEoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD58XBfXpRuFNAWu7CrcA3m0MKpI7O4ETrIccigRRHfycchbbqVgzKZL7u%2FbrmlEIxjXWvZyrJ0qf%2Fkf7RmryoZOvN6wwFRCGt%2FIwV%2BuvJN%2B4vSCohEiblIqVFDGL0TMRLgG2BcQPYpWXmkZHm%2FavMZz9XVQ%2FoWZVjcrWufTSQ6P2dmJaipb5aBEHGO%2Bp5N%2Bb5Kwdb2O8SRchf5kfq08pYLYOKEUa%2BSwwEKXl1zli2DxP6FuduUIIMjEXpmHMDZKQC4%2B6U9iIUXiuR6Ww%2BunUt315BVGDQTQzLE5aYFJ1cXpo7o1Hh74TW5dzsl8jKYS4nC5EoVpoKAtrU6TR44qsAzK5PKqXc4VYisHEsRrzzQzwYVPQzvTFnyve25kE8mM%2B0Jyj7UWGpDlUl1TTrkOzdhbE2wrfwcOwI5FyG%2Fk3n0M4JST6kv3LAitMMhSorZsKaYYCA2pQ8nWAG%2BzF%2Fh%2FSXcrY5bLpNZhHKPmPLy%2FZen4vqC9LpUQgFHU5eTw7F3%2Fm1BbYD33g6N2G8Hq9Q8gIOM1GaY%2BreKdoJ68eLEipQk2KvHcPp%2BhLybgqzNhb6%2B6F%2FYTXbSjKURxZpvhTyiFw532B23xW5RM6TaeFDLUob7ijM3Z9QuDtcywiARLWP%2FIyC8fw4FHNGUv3x%2B3MIb7tL8GOqUBWdmQB2xcS189b9%2B%2Fw0k3jIicMqf32Zxf1KesLq%2Bxst4hnTdn9Hhnq%2BhaKOEfs3JGe5uafeWpWnKzNptNCHdIj%2FFtjVG7B%2B%2F%2FYeedXVTaYLjUBYogluJ8rMTGjC8wzmyT%2FtZeZVeZV0BPtwZZueVL2wfEhXL%2B9%2FBu7ozpvsdbiAhpk7iRR%2BHZ8LYn5kotL9iMErYTwGuT2TBLV5MeLQ9tXDotdRLk&X-Amz-Signature=cad4f5c5aee19ebacea8c7796157c32e88e2b64d474acf010cb01c39517792ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
