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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PBZ37Q%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfcvD6spKQepCunkU7gSDGTGBGC%2Fj4CwfvphncgvKwGAiEAoEyUc5WNZ9n65e8GeWQLYvAYtVO%2BEX4NCbG9T%2Fz9yrEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOFOF7MeSD0NXd3l%2FSrcAxPFczP8j3M0WzXjvIH2yY%2F1PuksUOZfyPrVMBem%2BFD20oz6qA0GBwLUpltW%2Fmy39PpWMhoKOmSjqH2r4a5ZLBLK%2F%2FHTnxTFvIYEARgQHrLLOfCvXBeDJbZkBTRkql%2BnIECK5n%2Bghpl5tRb6f81mhrkc3q1nN9QIimn26nHRDGjUTNOamQ6PpCVarfqYWmVCqgz9ABLiuaw8xLOsOCdN2kbsKaMOZ%2FK9%2F2XuzMMr2o%2FXPhBAgw4r752uv1UpJKxpo8dDMaujVbPu4kcTQzeJUTZ0q2NGDXJO%2FZkbqC%2BG1uu4KA77yVGGQN7N2ym68p%2B2CipdvYEstQL4Dh9jEUyTCQaau0ASyZ%2Fc9meeElIYzitFWYttuGj1kcfKp1kEnadCwHjSsStKSOViM9D7uh3Egaqgy5mXEl1uBFNdjUz%2F5RZwM0LO%2BH67mDNEp3tRmzhXNyC6FoCsuLD5tCfJ0rMklwvJ4%2Bbx3vsWMeTGJc5ex5lgew4hsSLgP4nVPpmMRvoy1RNpHTw%2BxkYaxZBK9a6BCFl3zu42%2FiIdFGsIKAePIMduo2F7dGIthZrR%2FruV7VqZKH2IxEjyX9Py%2FGyjVxNTdxvZLQBZr1JRONWP9oo%2F9BhzGPwscOdkxWkv%2FtY%2FMNaA6cAGOqUBHAfDf8YRdXywU0%2BNKq%2B4h2bJ1kHaK7%2BMqVqbcYnzjnqeA3a%2FaRuDH2mwDPq7SrA9rKCpdYssx7XpDrqtqI5hlzXKS9UZXS1dCzS0Q%2Bj6rlfFlOVKsjroFxyhCA%2FL0GlxsA3Znm%2Bf%2FSlIhxdhKK2x79ElisQnqIBotDy28EdXZQ6ek38nJH2VU2C71S%2BjABAyCk73ivXBinv2OBYMxrIbwEpGzdzq&X-Amz-Signature=adbf2a695fb2057854e5a614015f621debb4b6c694a3983801c1d806a150e6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PBZ37Q%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfcvD6spKQepCunkU7gSDGTGBGC%2Fj4CwfvphncgvKwGAiEAoEyUc5WNZ9n65e8GeWQLYvAYtVO%2BEX4NCbG9T%2Fz9yrEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOFOF7MeSD0NXd3l%2FSrcAxPFczP8j3M0WzXjvIH2yY%2F1PuksUOZfyPrVMBem%2BFD20oz6qA0GBwLUpltW%2Fmy39PpWMhoKOmSjqH2r4a5ZLBLK%2F%2FHTnxTFvIYEARgQHrLLOfCvXBeDJbZkBTRkql%2BnIECK5n%2Bghpl5tRb6f81mhrkc3q1nN9QIimn26nHRDGjUTNOamQ6PpCVarfqYWmVCqgz9ABLiuaw8xLOsOCdN2kbsKaMOZ%2FK9%2F2XuzMMr2o%2FXPhBAgw4r752uv1UpJKxpo8dDMaujVbPu4kcTQzeJUTZ0q2NGDXJO%2FZkbqC%2BG1uu4KA77yVGGQN7N2ym68p%2B2CipdvYEstQL4Dh9jEUyTCQaau0ASyZ%2Fc9meeElIYzitFWYttuGj1kcfKp1kEnadCwHjSsStKSOViM9D7uh3Egaqgy5mXEl1uBFNdjUz%2F5RZwM0LO%2BH67mDNEp3tRmzhXNyC6FoCsuLD5tCfJ0rMklwvJ4%2Bbx3vsWMeTGJc5ex5lgew4hsSLgP4nVPpmMRvoy1RNpHTw%2BxkYaxZBK9a6BCFl3zu42%2FiIdFGsIKAePIMduo2F7dGIthZrR%2FruV7VqZKH2IxEjyX9Py%2FGyjVxNTdxvZLQBZr1JRONWP9oo%2F9BhzGPwscOdkxWkv%2FtY%2FMNaA6cAGOqUBHAfDf8YRdXywU0%2BNKq%2B4h2bJ1kHaK7%2BMqVqbcYnzjnqeA3a%2FaRuDH2mwDPq7SrA9rKCpdYssx7XpDrqtqI5hlzXKS9UZXS1dCzS0Q%2Bj6rlfFlOVKsjroFxyhCA%2FL0GlxsA3Znm%2Bf%2FSlIhxdhKK2x79ElisQnqIBotDy28EdXZQ6ek38nJH2VU2C71S%2BjABAyCk73ivXBinv2OBYMxrIbwEpGzdzq&X-Amz-Signature=97798ad3c31a7ed68fbeaf2482846ad1c82c448c6afc8aa428fa01690cf59a39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PBZ37Q%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfcvD6spKQepCunkU7gSDGTGBGC%2Fj4CwfvphncgvKwGAiEAoEyUc5WNZ9n65e8GeWQLYvAYtVO%2BEX4NCbG9T%2Fz9yrEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOFOF7MeSD0NXd3l%2FSrcAxPFczP8j3M0WzXjvIH2yY%2F1PuksUOZfyPrVMBem%2BFD20oz6qA0GBwLUpltW%2Fmy39PpWMhoKOmSjqH2r4a5ZLBLK%2F%2FHTnxTFvIYEARgQHrLLOfCvXBeDJbZkBTRkql%2BnIECK5n%2Bghpl5tRb6f81mhrkc3q1nN9QIimn26nHRDGjUTNOamQ6PpCVarfqYWmVCqgz9ABLiuaw8xLOsOCdN2kbsKaMOZ%2FK9%2F2XuzMMr2o%2FXPhBAgw4r752uv1UpJKxpo8dDMaujVbPu4kcTQzeJUTZ0q2NGDXJO%2FZkbqC%2BG1uu4KA77yVGGQN7N2ym68p%2B2CipdvYEstQL4Dh9jEUyTCQaau0ASyZ%2Fc9meeElIYzitFWYttuGj1kcfKp1kEnadCwHjSsStKSOViM9D7uh3Egaqgy5mXEl1uBFNdjUz%2F5RZwM0LO%2BH67mDNEp3tRmzhXNyC6FoCsuLD5tCfJ0rMklwvJ4%2Bbx3vsWMeTGJc5ex5lgew4hsSLgP4nVPpmMRvoy1RNpHTw%2BxkYaxZBK9a6BCFl3zu42%2FiIdFGsIKAePIMduo2F7dGIthZrR%2FruV7VqZKH2IxEjyX9Py%2FGyjVxNTdxvZLQBZr1JRONWP9oo%2F9BhzGPwscOdkxWkv%2FtY%2FMNaA6cAGOqUBHAfDf8YRdXywU0%2BNKq%2B4h2bJ1kHaK7%2BMqVqbcYnzjnqeA3a%2FaRuDH2mwDPq7SrA9rKCpdYssx7XpDrqtqI5hlzXKS9UZXS1dCzS0Q%2Bj6rlfFlOVKsjroFxyhCA%2FL0GlxsA3Znm%2Bf%2FSlIhxdhKK2x79ElisQnqIBotDy28EdXZQ6ek38nJH2VU2C71S%2BjABAyCk73ivXBinv2OBYMxrIbwEpGzdzq&X-Amz-Signature=05ff344eb46691b0da8db660238e81e21f6d854bdb8a689c130df2c6681c6d68&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
