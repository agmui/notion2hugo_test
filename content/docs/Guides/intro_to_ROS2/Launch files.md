---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJ3W5VA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFm%2BkhcrryRx%2BNGiAUxOIOsrxa07HY9tXio%2B5FWYxrtAiA2pMrxDyQw1AJQuYrK3PAw%2BUHNAcUmeMXNR7XdT4MxGSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BE8g6lI7Y2sIFQzfKtwD4w9y%2FtzNZaOs%2BBb1K86vwAGMITpLUey2Tr1GXkogY7FVtb8VOVOuWh9L2kqCe5qyvmrWmtwpVacmsxEL47Fad4srMSUQRAYf%2BgWBpJfpww5vq66iHzcyACxb9G2lli8%2Bk%2F5461hYOqfSkGdg7450M%2BCogURqVRzsdI3vLBri9M5xfzHriadJ%2BnGBqowr4019KfoXsnHMLYhrThYPn49OILK7%2BPRMhwl2JZ%2BUzTUV0KUxVwv6dmGtnuyAvejAJYT0C8%2BtlZpY8PFoNbFdzS82ePR7a6smSzeWWfO0bTtgaTtKBIn68XsRLN%2BS3w0BNk0NTEaViPMohWpjqlqVQ3z%2FM68cOC429omV4lfPb7Q%2BOr%2FJTTQh5Fblthd%2BoOyNYHubzKRj8WLLSVt%2F%2Bakp7UdVOJnLqMWPLMYhI%2Bifb3or1x8iHjuEN9FisR20JoXKeTHOW7QDJk3Pd1p5LiWAFV7Q5lC%2BqL76Ze%2B6q61amuUrJRC%2FFP%2BkfrE98B8Ji46NCSnK%2FBriwHFgePyikQnUMZnCtxGnhiXFgxFeQbyRQRG3MfkBTvn51zCvp9OWQbnwAloNpjPXSw8C4D%2Fr%2FCE%2Bx%2F0ipUaX67J8rKQoQe6n7t1AKiw%2FZLrudHfDtHpmfNUwseipxAY6pgGrF2ysxqcFZV6BUKPkfkdbCbM9GNSTkvrH3uEjiL7%2BwpM0t9M35DtNyGicx6eGJfKPjtZZpMMsfuiG6FPOiyfdZAqD9ypX9xgNuostrp4F3HyTmmYHoK1%2BW9eEmtT57z8f93ybEm9p4FHThobpC7eDGhbh6vv0LhkU2hHhH%2F7y6V0N3GqgFabimtoWx5Y8%2F3wk21V%2FUZqU5Fm5hYdNhfjqoxwa886y&X-Amz-Signature=3463dc5b974e48905035f0da4dbf63605961b75d2e45da37580bb1a8215a020a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJ3W5VA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFm%2BkhcrryRx%2BNGiAUxOIOsrxa07HY9tXio%2B5FWYxrtAiA2pMrxDyQw1AJQuYrK3PAw%2BUHNAcUmeMXNR7XdT4MxGSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BE8g6lI7Y2sIFQzfKtwD4w9y%2FtzNZaOs%2BBb1K86vwAGMITpLUey2Tr1GXkogY7FVtb8VOVOuWh9L2kqCe5qyvmrWmtwpVacmsxEL47Fad4srMSUQRAYf%2BgWBpJfpww5vq66iHzcyACxb9G2lli8%2Bk%2F5461hYOqfSkGdg7450M%2BCogURqVRzsdI3vLBri9M5xfzHriadJ%2BnGBqowr4019KfoXsnHMLYhrThYPn49OILK7%2BPRMhwl2JZ%2BUzTUV0KUxVwv6dmGtnuyAvejAJYT0C8%2BtlZpY8PFoNbFdzS82ePR7a6smSzeWWfO0bTtgaTtKBIn68XsRLN%2BS3w0BNk0NTEaViPMohWpjqlqVQ3z%2FM68cOC429omV4lfPb7Q%2BOr%2FJTTQh5Fblthd%2BoOyNYHubzKRj8WLLSVt%2F%2Bakp7UdVOJnLqMWPLMYhI%2Bifb3or1x8iHjuEN9FisR20JoXKeTHOW7QDJk3Pd1p5LiWAFV7Q5lC%2BqL76Ze%2B6q61amuUrJRC%2FFP%2BkfrE98B8Ji46NCSnK%2FBriwHFgePyikQnUMZnCtxGnhiXFgxFeQbyRQRG3MfkBTvn51zCvp9OWQbnwAloNpjPXSw8C4D%2Fr%2FCE%2Bx%2F0ipUaX67J8rKQoQe6n7t1AKiw%2FZLrudHfDtHpmfNUwseipxAY6pgGrF2ysxqcFZV6BUKPkfkdbCbM9GNSTkvrH3uEjiL7%2BwpM0t9M35DtNyGicx6eGJfKPjtZZpMMsfuiG6FPOiyfdZAqD9ypX9xgNuostrp4F3HyTmmYHoK1%2BW9eEmtT57z8f93ybEm9p4FHThobpC7eDGhbh6vv0LhkU2hHhH%2F7y6V0N3GqgFabimtoWx5Y8%2F3wk21V%2FUZqU5Fm5hYdNhfjqoxwa886y&X-Amz-Signature=84d437a077ffc4d3005211608a242caf9e2a6e53b904f8a866498d81ff34d527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJ3W5VA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFm%2BkhcrryRx%2BNGiAUxOIOsrxa07HY9tXio%2B5FWYxrtAiA2pMrxDyQw1AJQuYrK3PAw%2BUHNAcUmeMXNR7XdT4MxGSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BE8g6lI7Y2sIFQzfKtwD4w9y%2FtzNZaOs%2BBb1K86vwAGMITpLUey2Tr1GXkogY7FVtb8VOVOuWh9L2kqCe5qyvmrWmtwpVacmsxEL47Fad4srMSUQRAYf%2BgWBpJfpww5vq66iHzcyACxb9G2lli8%2Bk%2F5461hYOqfSkGdg7450M%2BCogURqVRzsdI3vLBri9M5xfzHriadJ%2BnGBqowr4019KfoXsnHMLYhrThYPn49OILK7%2BPRMhwl2JZ%2BUzTUV0KUxVwv6dmGtnuyAvejAJYT0C8%2BtlZpY8PFoNbFdzS82ePR7a6smSzeWWfO0bTtgaTtKBIn68XsRLN%2BS3w0BNk0NTEaViPMohWpjqlqVQ3z%2FM68cOC429omV4lfPb7Q%2BOr%2FJTTQh5Fblthd%2BoOyNYHubzKRj8WLLSVt%2F%2Bakp7UdVOJnLqMWPLMYhI%2Bifb3or1x8iHjuEN9FisR20JoXKeTHOW7QDJk3Pd1p5LiWAFV7Q5lC%2BqL76Ze%2B6q61amuUrJRC%2FFP%2BkfrE98B8Ji46NCSnK%2FBriwHFgePyikQnUMZnCtxGnhiXFgxFeQbyRQRG3MfkBTvn51zCvp9OWQbnwAloNpjPXSw8C4D%2Fr%2FCE%2Bx%2F0ipUaX67J8rKQoQe6n7t1AKiw%2FZLrudHfDtHpmfNUwseipxAY6pgGrF2ysxqcFZV6BUKPkfkdbCbM9GNSTkvrH3uEjiL7%2BwpM0t9M35DtNyGicx6eGJfKPjtZZpMMsfuiG6FPOiyfdZAqD9ypX9xgNuostrp4F3HyTmmYHoK1%2BW9eEmtT57z8f93ybEm9p4FHThobpC7eDGhbh6vv0LhkU2hHhH%2F7y6V0N3GqgFabimtoWx5Y8%2F3wk21V%2FUZqU5Fm5hYdNhfjqoxwa886y&X-Amz-Signature=e572016fd7b4b1b81fdda71688f1529b56610b96ed3448650a78f4b4a8f6a685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
