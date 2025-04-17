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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIFL2Y3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZxUVD8SrcXAoab2qnWRO%2BEhrnA8mPX7ngHJ0iAahqAiBmPuA2J%2BiQBLXlj7g2gZpgHxQERXyCZffHFb9aUfRTqyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMO4Z7JJ%2F6VSKUnYMcKtwDgOLgFBCkyTHaxBM8%2FbzGf5qg3fJHyHBT4WcDk215RyGxwGEck%2Fkcf%2FJr1Yonj0RikSQoBBmiI%2FbPnvNy1%2Fnkj06VwqSqsqJHFwDoaBq8o1J3CZt3cbdoTSBWfrQOEQsPRffhOvRTTH5CZ0sN1HYiH2me27lbQp7h39ZN%2BNg7dUWA0aQO90staqzuyrOlUwxvxfnqay0GjtAKpUMds0cUuTD5G0ANfNmDAdjHxPl9xn0eMURbaD%2FNI3U6rAD0MUbQdjw7uKyHIXNsZkz2s3nRJwXO2tu%2BJ6MfdNSuIcIH%2Fb2JlGgnr95msJwZ8ljZPvIyc4l%2B9bMk6MTX5YhQErj%2FHM4e1eIJgJxO3NDaEopCJXYaEgaSJg3MD5UhKN6Y5s%2FWDXhI0Va2Dt4VZHgOwbVEp%2F2syfu%2FbJolvxHd9doPeDvRSRBF3f06T6qeiUmOMo0Irdr8hS1RC7dz1jmOOlPtggHF17Pu6QiNUrBiyIWp1Ljqs%2BIt9pJ9OWyGK1fgj26BG194Rg1xBalKJsyTycVZWOa8EzpX%2BtJgrsiuKJboFBdwo2cLAtVg8rPMrb5igrspRg%2BLkgnP2YOU5dDlvb6%2F2Fu06K26gzoeZIsxgSBs7HT%2BvpzouzlZRiqzuGgwtq%2BEwAY6pgE9WkZKpuYihOraTz5ogyKDoDFF2%2BBpRC8VmieMAVu2jjZmptEdL8tbAkkvOlL5aZg%2FLyWSPCgX5wSK1ItcB84p2tUqJE2qtOnOMU2fntWvNXYPK1Fhkh0BqQkKZ87UZLnlGleii5CxJgUtUUR%2FutlK1n576fJfc%2BXyA1PgRTtvMTE%2FGgST0RpeRKqBGwLFgOHRUrv9U4FL%2F48yV7GGuIZysnOfwEJQ&X-Amz-Signature=c5e9e968ae13496e80e0e36d083ac3b68890ccb47163ee7c50733278c9df3fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIFL2Y3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZxUVD8SrcXAoab2qnWRO%2BEhrnA8mPX7ngHJ0iAahqAiBmPuA2J%2BiQBLXlj7g2gZpgHxQERXyCZffHFb9aUfRTqyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMO4Z7JJ%2F6VSKUnYMcKtwDgOLgFBCkyTHaxBM8%2FbzGf5qg3fJHyHBT4WcDk215RyGxwGEck%2Fkcf%2FJr1Yonj0RikSQoBBmiI%2FbPnvNy1%2Fnkj06VwqSqsqJHFwDoaBq8o1J3CZt3cbdoTSBWfrQOEQsPRffhOvRTTH5CZ0sN1HYiH2me27lbQp7h39ZN%2BNg7dUWA0aQO90staqzuyrOlUwxvxfnqay0GjtAKpUMds0cUuTD5G0ANfNmDAdjHxPl9xn0eMURbaD%2FNI3U6rAD0MUbQdjw7uKyHIXNsZkz2s3nRJwXO2tu%2BJ6MfdNSuIcIH%2Fb2JlGgnr95msJwZ8ljZPvIyc4l%2B9bMk6MTX5YhQErj%2FHM4e1eIJgJxO3NDaEopCJXYaEgaSJg3MD5UhKN6Y5s%2FWDXhI0Va2Dt4VZHgOwbVEp%2F2syfu%2FbJolvxHd9doPeDvRSRBF3f06T6qeiUmOMo0Irdr8hS1RC7dz1jmOOlPtggHF17Pu6QiNUrBiyIWp1Ljqs%2BIt9pJ9OWyGK1fgj26BG194Rg1xBalKJsyTycVZWOa8EzpX%2BtJgrsiuKJboFBdwo2cLAtVg8rPMrb5igrspRg%2BLkgnP2YOU5dDlvb6%2F2Fu06K26gzoeZIsxgSBs7HT%2BvpzouzlZRiqzuGgwtq%2BEwAY6pgE9WkZKpuYihOraTz5ogyKDoDFF2%2BBpRC8VmieMAVu2jjZmptEdL8tbAkkvOlL5aZg%2FLyWSPCgX5wSK1ItcB84p2tUqJE2qtOnOMU2fntWvNXYPK1Fhkh0BqQkKZ87UZLnlGleii5CxJgUtUUR%2FutlK1n576fJfc%2BXyA1PgRTtvMTE%2FGgST0RpeRKqBGwLFgOHRUrv9U4FL%2F48yV7GGuIZysnOfwEJQ&X-Amz-Signature=3922102742c5329cd4724bd16d6b330402517b9986db198406c2ad0f21076f01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIFL2Y3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZxUVD8SrcXAoab2qnWRO%2BEhrnA8mPX7ngHJ0iAahqAiBmPuA2J%2BiQBLXlj7g2gZpgHxQERXyCZffHFb9aUfRTqyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMO4Z7JJ%2F6VSKUnYMcKtwDgOLgFBCkyTHaxBM8%2FbzGf5qg3fJHyHBT4WcDk215RyGxwGEck%2Fkcf%2FJr1Yonj0RikSQoBBmiI%2FbPnvNy1%2Fnkj06VwqSqsqJHFwDoaBq8o1J3CZt3cbdoTSBWfrQOEQsPRffhOvRTTH5CZ0sN1HYiH2me27lbQp7h39ZN%2BNg7dUWA0aQO90staqzuyrOlUwxvxfnqay0GjtAKpUMds0cUuTD5G0ANfNmDAdjHxPl9xn0eMURbaD%2FNI3U6rAD0MUbQdjw7uKyHIXNsZkz2s3nRJwXO2tu%2BJ6MfdNSuIcIH%2Fb2JlGgnr95msJwZ8ljZPvIyc4l%2B9bMk6MTX5YhQErj%2FHM4e1eIJgJxO3NDaEopCJXYaEgaSJg3MD5UhKN6Y5s%2FWDXhI0Va2Dt4VZHgOwbVEp%2F2syfu%2FbJolvxHd9doPeDvRSRBF3f06T6qeiUmOMo0Irdr8hS1RC7dz1jmOOlPtggHF17Pu6QiNUrBiyIWp1Ljqs%2BIt9pJ9OWyGK1fgj26BG194Rg1xBalKJsyTycVZWOa8EzpX%2BtJgrsiuKJboFBdwo2cLAtVg8rPMrb5igrspRg%2BLkgnP2YOU5dDlvb6%2F2Fu06K26gzoeZIsxgSBs7HT%2BvpzouzlZRiqzuGgwtq%2BEwAY6pgE9WkZKpuYihOraTz5ogyKDoDFF2%2BBpRC8VmieMAVu2jjZmptEdL8tbAkkvOlL5aZg%2FLyWSPCgX5wSK1ItcB84p2tUqJE2qtOnOMU2fntWvNXYPK1Fhkh0BqQkKZ87UZLnlGleii5CxJgUtUUR%2FutlK1n576fJfc%2BXyA1PgRTtvMTE%2FGgST0RpeRKqBGwLFgOHRUrv9U4FL%2F48yV7GGuIZysnOfwEJQ&X-Amz-Signature=4d41db92c65019acca4368e38ef18f0ea875e38e080469e0b920880f40cb0b96&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
