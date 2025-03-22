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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXL3HNP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEhQaXWqetZLUltYAjrvICaPTFHzGSxt7W5OwYhAbujhAiEAyRe%2FmHjTylckBzT1QpmC1L31cqf%2F4GwOW%2Bw8P3ApkgcqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP26gqsMneQw6%2Bk1GyrcAw7DIG1lFf4cPTwsX5BiI65zh%2FJTlqhGYH94tv96SvwQ%2Bfs3pbzv1Ex8uUYD1dlu5EX7TU%2FDmcujInQqaPEQl7hf4gZpkxQKngtmh%2BXESq8Q%2B4EeC2zSdXfeGzriPD9VUveLzYKI47yPc37DvFJbPLmvlBm7hjywl5jZrM5ARCzkD%2FHt86zTS1W%2BAySryL7wzKTbp%2Br6JLRtPmkq5eExC6zoUUW8AMU9Hy7S8sHg2sxfb3ShbYfYAbN55E%2Bjqx2fpVVdngCxBeCA0R0E9Cdd7v5G5tQyHEfVPGRL9T1He81WQ1S%2BNoSCD9PlvKABjRcD20wZQuh%2BfiVBt2vm7clej%2FbC9dphjBo7VGn6ERL2XGcTgyqQZxQy6V2iw%2FXuDoPNf%2F%2F4PH1%2FARNWnpE5MvRKrDQgGwCeZ47vytgypgyo%2FQiLaPJAtiA4qMzpcKgzdhhTqN%2BFMx1vShXJgwJhlf%2B9zjgn2Ak8XcTICmZre8vEW08poUGnY7GAAXRopCjqosGl22%2BugitRC%2B7jx4P4cQLV%2BluZPunAhG4%2BtqqfdPM1USDzKHw%2B9es4CyhVBjneUd%2FRmLgu9uwB2vOJpmTHmIoQ5aQT2VedzbDSXyMMwxbchXRJATCtwHeGJPQ7k6phMOju%2B74GOqUB9X1ujQABBjRwcGxCfT7w7jPYrTn6vXx6agNln7Ni9ahXYkhh%2Bci%2Bj1OPKZhIk%2FQDzoObcZY2E3TQLQ%2FFe243OUAtiO0GtSZ6d6UXs%2ByMUm4zu2GNLuuTvylNjLNXpfzi1ERlLEIudl7iq1A63QwyJZejDpC6Nv9VfeL%2FvUuVgL%2BUY7i%2Bx3LvDboSY8HjG2AMHqdtF0ZOx5WgxXc0T3xJOIhZY%2BsE&X-Amz-Signature=ca71e8de2a9b4b752ea8c80b29f6976a5e1637f012c411ef0ef85f2560167c34&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXL3HNP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEhQaXWqetZLUltYAjrvICaPTFHzGSxt7W5OwYhAbujhAiEAyRe%2FmHjTylckBzT1QpmC1L31cqf%2F4GwOW%2Bw8P3ApkgcqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP26gqsMneQw6%2Bk1GyrcAw7DIG1lFf4cPTwsX5BiI65zh%2FJTlqhGYH94tv96SvwQ%2Bfs3pbzv1Ex8uUYD1dlu5EX7TU%2FDmcujInQqaPEQl7hf4gZpkxQKngtmh%2BXESq8Q%2B4EeC2zSdXfeGzriPD9VUveLzYKI47yPc37DvFJbPLmvlBm7hjywl5jZrM5ARCzkD%2FHt86zTS1W%2BAySryL7wzKTbp%2Br6JLRtPmkq5eExC6zoUUW8AMU9Hy7S8sHg2sxfb3ShbYfYAbN55E%2Bjqx2fpVVdngCxBeCA0R0E9Cdd7v5G5tQyHEfVPGRL9T1He81WQ1S%2BNoSCD9PlvKABjRcD20wZQuh%2BfiVBt2vm7clej%2FbC9dphjBo7VGn6ERL2XGcTgyqQZxQy6V2iw%2FXuDoPNf%2F%2F4PH1%2FARNWnpE5MvRKrDQgGwCeZ47vytgypgyo%2FQiLaPJAtiA4qMzpcKgzdhhTqN%2BFMx1vShXJgwJhlf%2B9zjgn2Ak8XcTICmZre8vEW08poUGnY7GAAXRopCjqosGl22%2BugitRC%2B7jx4P4cQLV%2BluZPunAhG4%2BtqqfdPM1USDzKHw%2B9es4CyhVBjneUd%2FRmLgu9uwB2vOJpmTHmIoQ5aQT2VedzbDSXyMMwxbchXRJATCtwHeGJPQ7k6phMOju%2B74GOqUB9X1ujQABBjRwcGxCfT7w7jPYrTn6vXx6agNln7Ni9ahXYkhh%2Bci%2Bj1OPKZhIk%2FQDzoObcZY2E3TQLQ%2FFe243OUAtiO0GtSZ6d6UXs%2ByMUm4zu2GNLuuTvylNjLNXpfzi1ERlLEIudl7iq1A63QwyJZejDpC6Nv9VfeL%2FvUuVgL%2BUY7i%2Bx3LvDboSY8HjG2AMHqdtF0ZOx5WgxXc0T3xJOIhZY%2BsE&X-Amz-Signature=83159a990864b4f137ebff493343a121c4e906e15767af8061358b86eb637e10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXL3HNP%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEhQaXWqetZLUltYAjrvICaPTFHzGSxt7W5OwYhAbujhAiEAyRe%2FmHjTylckBzT1QpmC1L31cqf%2F4GwOW%2Bw8P3ApkgcqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP26gqsMneQw6%2Bk1GyrcAw7DIG1lFf4cPTwsX5BiI65zh%2FJTlqhGYH94tv96SvwQ%2Bfs3pbzv1Ex8uUYD1dlu5EX7TU%2FDmcujInQqaPEQl7hf4gZpkxQKngtmh%2BXESq8Q%2B4EeC2zSdXfeGzriPD9VUveLzYKI47yPc37DvFJbPLmvlBm7hjywl5jZrM5ARCzkD%2FHt86zTS1W%2BAySryL7wzKTbp%2Br6JLRtPmkq5eExC6zoUUW8AMU9Hy7S8sHg2sxfb3ShbYfYAbN55E%2Bjqx2fpVVdngCxBeCA0R0E9Cdd7v5G5tQyHEfVPGRL9T1He81WQ1S%2BNoSCD9PlvKABjRcD20wZQuh%2BfiVBt2vm7clej%2FbC9dphjBo7VGn6ERL2XGcTgyqQZxQy6V2iw%2FXuDoPNf%2F%2F4PH1%2FARNWnpE5MvRKrDQgGwCeZ47vytgypgyo%2FQiLaPJAtiA4qMzpcKgzdhhTqN%2BFMx1vShXJgwJhlf%2B9zjgn2Ak8XcTICmZre8vEW08poUGnY7GAAXRopCjqosGl22%2BugitRC%2B7jx4P4cQLV%2BluZPunAhG4%2BtqqfdPM1USDzKHw%2B9es4CyhVBjneUd%2FRmLgu9uwB2vOJpmTHmIoQ5aQT2VedzbDSXyMMwxbchXRJATCtwHeGJPQ7k6phMOju%2B74GOqUB9X1ujQABBjRwcGxCfT7w7jPYrTn6vXx6agNln7Ni9ahXYkhh%2Bci%2Bj1OPKZhIk%2FQDzoObcZY2E3TQLQ%2FFe243OUAtiO0GtSZ6d6UXs%2ByMUm4zu2GNLuuTvylNjLNXpfzi1ERlLEIudl7iq1A63QwyJZejDpC6Nv9VfeL%2FvUuVgL%2BUY7i%2Bx3LvDboSY8HjG2AMHqdtF0ZOx5WgxXc0T3xJOIhZY%2BsE&X-Amz-Signature=8270336e2f64de9fcbba919c059a0cdb51bc7dc23d75fea37bf23fdbe7eaaf69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
