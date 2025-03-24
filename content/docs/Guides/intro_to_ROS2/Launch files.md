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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6JDBRF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE5SKKP4gke8XTXyqrbqP1islSoleINBunKcsPR%2FTVbAiB62%2FazJcxK9XzDbEreM9XHfOvPWX%2BjGw18XExUJB9UDyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdg6L9W7R109%2B3hmhKtwDaKxDsgzXx7QMz505zQgG5Wvpfgj6aOdTGfhWFThBjTwMtlaec6GNqk8fciyQiBUEJUYYu207mmvRhkaDbYu1m3uGHceoe3WuDhklsbLh3EdSoMBlMfKqPiG38Qp62pGst6MABm6U6c%2B7%2Byvhse4Z68vrMlOiGq4xhB2EJuaU%2BzpF4mQwXwRKoz6vpfXLVNjBTFCh7HNrwPT0eHnjv5pKuGIcqrvaF5wLyBgb%2FyGKcmJAqxeeZU%2Blel1jzv%2Bar4xt6GiAe7GBLhimfSkem5rdomzd5OFfJGT40%2B4wipAlnJ6jPA7uyYqxGqI03Stqirs6nh5R3UGqtXUTrRTELO%2F%2BxtNL5Tw1wCXuDjid182%2Fk%2BWgqRfK4xVyI89isIixyBVRGfqbSL8d56y0pEPPMx2z6uCptz88ALdBqkoXgNCIzN%2BNVg0P0iwp%2B899MngFMYiSOWgsz36IPMW0rE5EiMvL7WwwiQX7og7Tu02Q%2F9a7Zv0xGSPZA2x7P3ZxIg8wj20FZFtmy%2BAJ3suyAoDLfbH7o7qraulEtt1lzl1IjeViuKaQbfVeiCWYFlpOpBYTJe2MTo1IXjNAD6f9dCT3FhlegwbBR9FjKqRLFnlE9DMmvPMnlPlLlBDeeCwlqYEwnf6FvwY6pgF6hDlxeNN0TItgCMGgmOJ1wFyCaClHlBcRDxwYSmLzzkgDRA5UvnA8fVisw3a%2Bg4giJ4L5QKHSsi5KxZc34m9Mp%2BmzIUGsPSHr%2Bo059NTWhOIYWop6WV2V6JJkDIz4RM28gQV7UxwlmaTQntlvC%2F8x%2FsXlJ0Zwi37cBCmyfbDrPG0o3dZLOTz2SCA%2FIoAYpd%2FwVXsAHdR9d4pL2zKbAf0RjNNqyTKx&X-Amz-Signature=6c262d6c371659c53bd361d5cca6f671f513f142589a89fead0276f14e743f49&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6JDBRF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE5SKKP4gke8XTXyqrbqP1islSoleINBunKcsPR%2FTVbAiB62%2FazJcxK9XzDbEreM9XHfOvPWX%2BjGw18XExUJB9UDyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdg6L9W7R109%2B3hmhKtwDaKxDsgzXx7QMz505zQgG5Wvpfgj6aOdTGfhWFThBjTwMtlaec6GNqk8fciyQiBUEJUYYu207mmvRhkaDbYu1m3uGHceoe3WuDhklsbLh3EdSoMBlMfKqPiG38Qp62pGst6MABm6U6c%2B7%2Byvhse4Z68vrMlOiGq4xhB2EJuaU%2BzpF4mQwXwRKoz6vpfXLVNjBTFCh7HNrwPT0eHnjv5pKuGIcqrvaF5wLyBgb%2FyGKcmJAqxeeZU%2Blel1jzv%2Bar4xt6GiAe7GBLhimfSkem5rdomzd5OFfJGT40%2B4wipAlnJ6jPA7uyYqxGqI03Stqirs6nh5R3UGqtXUTrRTELO%2F%2BxtNL5Tw1wCXuDjid182%2Fk%2BWgqRfK4xVyI89isIixyBVRGfqbSL8d56y0pEPPMx2z6uCptz88ALdBqkoXgNCIzN%2BNVg0P0iwp%2B899MngFMYiSOWgsz36IPMW0rE5EiMvL7WwwiQX7og7Tu02Q%2F9a7Zv0xGSPZA2x7P3ZxIg8wj20FZFtmy%2BAJ3suyAoDLfbH7o7qraulEtt1lzl1IjeViuKaQbfVeiCWYFlpOpBYTJe2MTo1IXjNAD6f9dCT3FhlegwbBR9FjKqRLFnlE9DMmvPMnlPlLlBDeeCwlqYEwnf6FvwY6pgF6hDlxeNN0TItgCMGgmOJ1wFyCaClHlBcRDxwYSmLzzkgDRA5UvnA8fVisw3a%2Bg4giJ4L5QKHSsi5KxZc34m9Mp%2BmzIUGsPSHr%2Bo059NTWhOIYWop6WV2V6JJkDIz4RM28gQV7UxwlmaTQntlvC%2F8x%2FsXlJ0Zwi37cBCmyfbDrPG0o3dZLOTz2SCA%2FIoAYpd%2FwVXsAHdR9d4pL2zKbAf0RjNNqyTKx&X-Amz-Signature=40c51ab1bcb113f42a89819d92cf31aba4eda17032a69d1ffc35372b2553d894&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6JDBRF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE5SKKP4gke8XTXyqrbqP1islSoleINBunKcsPR%2FTVbAiB62%2FazJcxK9XzDbEreM9XHfOvPWX%2BjGw18XExUJB9UDyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdg6L9W7R109%2B3hmhKtwDaKxDsgzXx7QMz505zQgG5Wvpfgj6aOdTGfhWFThBjTwMtlaec6GNqk8fciyQiBUEJUYYu207mmvRhkaDbYu1m3uGHceoe3WuDhklsbLh3EdSoMBlMfKqPiG38Qp62pGst6MABm6U6c%2B7%2Byvhse4Z68vrMlOiGq4xhB2EJuaU%2BzpF4mQwXwRKoz6vpfXLVNjBTFCh7HNrwPT0eHnjv5pKuGIcqrvaF5wLyBgb%2FyGKcmJAqxeeZU%2Blel1jzv%2Bar4xt6GiAe7GBLhimfSkem5rdomzd5OFfJGT40%2B4wipAlnJ6jPA7uyYqxGqI03Stqirs6nh5R3UGqtXUTrRTELO%2F%2BxtNL5Tw1wCXuDjid182%2Fk%2BWgqRfK4xVyI89isIixyBVRGfqbSL8d56y0pEPPMx2z6uCptz88ALdBqkoXgNCIzN%2BNVg0P0iwp%2B899MngFMYiSOWgsz36IPMW0rE5EiMvL7WwwiQX7og7Tu02Q%2F9a7Zv0xGSPZA2x7P3ZxIg8wj20FZFtmy%2BAJ3suyAoDLfbH7o7qraulEtt1lzl1IjeViuKaQbfVeiCWYFlpOpBYTJe2MTo1IXjNAD6f9dCT3FhlegwbBR9FjKqRLFnlE9DMmvPMnlPlLlBDeeCwlqYEwnf6FvwY6pgF6hDlxeNN0TItgCMGgmOJ1wFyCaClHlBcRDxwYSmLzzkgDRA5UvnA8fVisw3a%2Bg4giJ4L5QKHSsi5KxZc34m9Mp%2BmzIUGsPSHr%2Bo059NTWhOIYWop6WV2V6JJkDIz4RM28gQV7UxwlmaTQntlvC%2F8x%2FsXlJ0Zwi37cBCmyfbDrPG0o3dZLOTz2SCA%2FIoAYpd%2FwVXsAHdR9d4pL2zKbAf0RjNNqyTKx&X-Amz-Signature=8572faedac649647b8073ef827686426ad6dae8b237250ac5f422f10899c9073&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
