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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJHYTTU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC6Tb5axycm%2Bx6ZkPFsPiqxH5TOy963XkK6%2FRQyWLPAeAIgROwCc8UnlAsq4vwKTecH3nehVkXM6RrZ%2BEPFv3ozKHEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDPike6PtUopJVdcX3ircA3QA%2FsUiveg75IS058nc4hloG2NjfwlK1%2FTKF4N%2FFQZ9LaKoV96BO7edw%2BQfEeMuiF6iChs8d0BqPagP194Cvy8OhAFqK6PuWk5X71eqb0eeMycyDnVrqsoIlJgZaw7WR%2BdUqJxLORYPcpHRUCt2BfcBQ9MKyEJm%2FEW8RenhZ8eVWGzEzP8ancqVdB9uDtWMcjduReGc3Mb02fb96x9pvPC6yiChsa7xjRNyBsImEl9d0ugkjn0tDTwGmfuxogNsExmyUNQJbC2bos%2Bg9A0ylg7Au%2Fan3ITUFfy6pojZqacrk4vg3aEkvprBJVW1G4HbgZwRggFX%2FY6vdwoy9%2BoI8Mv816BNukRA7ZVC7AnsCo61zo1njWaTZR4SDD89AmfVD1xgi6Y1LCg2nmDJJhUHbbscrYEHv4uDDf1r5m%2B8lS02XK70yt%2F5L0pak80M6tyAAr%2BjV8yCcNz%2FWjxiOx8tXdDhzqxpowLtYTN7dU5Mf8ly2fTZ9gGSClzz0K7XjmyUAG0fWIylxaVyjpelKP5oeTe8rvjX8dLdv8dbExhFdYhy6df2Sxp92boIGm10rBKj001DUVXlRUxTWsOaK1OR0QKQMXWW0SyQbQt%2BBxYN5w4ZrNgPlHi%2Bu2rhLNGdMMzop8AGOqUBGplcmlgTkYFQRhyZa6UcmWOH2i2IzfjE22kNJC%2B0AsFwAvtZX6RzTHQW%2Bzdi9ooSZq%2BJRU1Wt1dbnFv%2Fy3LZJIiqIZr56hBWK45ftw386TbHRk%2FVpaZ3WFGCOD9Olnix8ywCOTw28fzBFZa0f1pNmibWl16qCT%2BRX21P0jqe%2F6GHC%2BkuLtKaMvnkM63%2FIgtk6y1JTYnC7CY%2FSmnW3VqAmwb7TSwf&X-Amz-Signature=07065619cbe07db9f3de2ad9e68c48ceb34bc6543f27942c4bed0938349e15f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJHYTTU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC6Tb5axycm%2Bx6ZkPFsPiqxH5TOy963XkK6%2FRQyWLPAeAIgROwCc8UnlAsq4vwKTecH3nehVkXM6RrZ%2BEPFv3ozKHEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDPike6PtUopJVdcX3ircA3QA%2FsUiveg75IS058nc4hloG2NjfwlK1%2FTKF4N%2FFQZ9LaKoV96BO7edw%2BQfEeMuiF6iChs8d0BqPagP194Cvy8OhAFqK6PuWk5X71eqb0eeMycyDnVrqsoIlJgZaw7WR%2BdUqJxLORYPcpHRUCt2BfcBQ9MKyEJm%2FEW8RenhZ8eVWGzEzP8ancqVdB9uDtWMcjduReGc3Mb02fb96x9pvPC6yiChsa7xjRNyBsImEl9d0ugkjn0tDTwGmfuxogNsExmyUNQJbC2bos%2Bg9A0ylg7Au%2Fan3ITUFfy6pojZqacrk4vg3aEkvprBJVW1G4HbgZwRggFX%2FY6vdwoy9%2BoI8Mv816BNukRA7ZVC7AnsCo61zo1njWaTZR4SDD89AmfVD1xgi6Y1LCg2nmDJJhUHbbscrYEHv4uDDf1r5m%2B8lS02XK70yt%2F5L0pak80M6tyAAr%2BjV8yCcNz%2FWjxiOx8tXdDhzqxpowLtYTN7dU5Mf8ly2fTZ9gGSClzz0K7XjmyUAG0fWIylxaVyjpelKP5oeTe8rvjX8dLdv8dbExhFdYhy6df2Sxp92boIGm10rBKj001DUVXlRUxTWsOaK1OR0QKQMXWW0SyQbQt%2BBxYN5w4ZrNgPlHi%2Bu2rhLNGdMMzop8AGOqUBGplcmlgTkYFQRhyZa6UcmWOH2i2IzfjE22kNJC%2B0AsFwAvtZX6RzTHQW%2Bzdi9ooSZq%2BJRU1Wt1dbnFv%2Fy3LZJIiqIZr56hBWK45ftw386TbHRk%2FVpaZ3WFGCOD9Olnix8ywCOTw28fzBFZa0f1pNmibWl16qCT%2BRX21P0jqe%2F6GHC%2BkuLtKaMvnkM63%2FIgtk6y1JTYnC7CY%2FSmnW3VqAmwb7TSwf&X-Amz-Signature=203be09e816b27efb377d0fe71b00e272996cc8e55f231a24421a3723a9cf552&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJHYTTU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC6Tb5axycm%2Bx6ZkPFsPiqxH5TOy963XkK6%2FRQyWLPAeAIgROwCc8UnlAsq4vwKTecH3nehVkXM6RrZ%2BEPFv3ozKHEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDPike6PtUopJVdcX3ircA3QA%2FsUiveg75IS058nc4hloG2NjfwlK1%2FTKF4N%2FFQZ9LaKoV96BO7edw%2BQfEeMuiF6iChs8d0BqPagP194Cvy8OhAFqK6PuWk5X71eqb0eeMycyDnVrqsoIlJgZaw7WR%2BdUqJxLORYPcpHRUCt2BfcBQ9MKyEJm%2FEW8RenhZ8eVWGzEzP8ancqVdB9uDtWMcjduReGc3Mb02fb96x9pvPC6yiChsa7xjRNyBsImEl9d0ugkjn0tDTwGmfuxogNsExmyUNQJbC2bos%2Bg9A0ylg7Au%2Fan3ITUFfy6pojZqacrk4vg3aEkvprBJVW1G4HbgZwRggFX%2FY6vdwoy9%2BoI8Mv816BNukRA7ZVC7AnsCo61zo1njWaTZR4SDD89AmfVD1xgi6Y1LCg2nmDJJhUHbbscrYEHv4uDDf1r5m%2B8lS02XK70yt%2F5L0pak80M6tyAAr%2BjV8yCcNz%2FWjxiOx8tXdDhzqxpowLtYTN7dU5Mf8ly2fTZ9gGSClzz0K7XjmyUAG0fWIylxaVyjpelKP5oeTe8rvjX8dLdv8dbExhFdYhy6df2Sxp92boIGm10rBKj001DUVXlRUxTWsOaK1OR0QKQMXWW0SyQbQt%2BBxYN5w4ZrNgPlHi%2Bu2rhLNGdMMzop8AGOqUBGplcmlgTkYFQRhyZa6UcmWOH2i2IzfjE22kNJC%2B0AsFwAvtZX6RzTHQW%2Bzdi9ooSZq%2BJRU1Wt1dbnFv%2Fy3LZJIiqIZr56hBWK45ftw386TbHRk%2FVpaZ3WFGCOD9Olnix8ywCOTw28fzBFZa0f1pNmibWl16qCT%2BRX21P0jqe%2F6GHC%2BkuLtKaMvnkM63%2FIgtk6y1JTYnC7CY%2FSmnW3VqAmwb7TSwf&X-Amz-Signature=82c0004dafa3304b0d08c2f89d961afadaf76d76a7d2484de01b4c5831332146&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
