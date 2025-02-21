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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDOXVY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNlxqCSryZM6c46acCb17vtVA1z8I6wC9OmW20nVfMLgIgbBR%2Bn168vgsy3RzypTXNENi1h86hC7k00EC7LmmkxEQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT4hgrrFOujN3f8lyrcA5A6Ei5M4UoItgBkLOw%2BgAkEcYhFDrmIAx0y5WPMzrIKDkcRYL%2Biew1gVisG0Z2uQWlWUvrOt8Z2W6twhWYLpFKHKw0jgjUDJD3jkguzQUiRg1I166WK2IEQjiRNyMuDuciOCP3XTKdI7aEaysOMW1GX4S9PW%2BZo%2Bs%2BzGU2f49CTY9AhGL9%2BZJkO9gtlvYro4mk8pYMJ%2FBY1NDXsDdZl6ei4adfViGz6oDzMxse6ueIp9sr%2FkL5GI9BeUg7if%2FNvx0jIrTTAbAKS8DWhnl61Sf50ARglpEmZ6bzrKw%2F7PDCsPCWnLkbbfsBlFMDoKQuG59Xjh3Fj5Y3xpK0VcdkxiF23CSE2IDd2LTfbE%2B1zSUXIUhtFebsISDwyRATJtFsTN7lAOgc3Xqj7%2FENTNCzC8zAtSBmdEAJBn84vczF5HxjG7OdMoKkSmEosoVTb7jD%2B6RNVf7RyNlDLaPs9XJFrSrr%2BnNIGYVLuwc1OXlur%2Ft17krarHofRtG6KXbL0K7MKyopfw48bgDsxToMHifwnK5fAxskIpD9z6C8DMzmKzTxqILx20QU34ALLoofJBfnMu4QxX6Enk6xUMLE8XaAFBPlcifoyTvTX42%2BHRZbeXmD0faIgx5%2FHamJJeQh7MPDn370GOqUBQ6jrl8K4d7tQXoOfSAlNaW43qncg8szj06lT%2B3wbrWf%2FmdpIVWNPI38QaEcF%2FnmFb5Nc5BvhPY%2FfaZchAnOkyERYY1moZxazlyUyMlQ9M3zfk6GEayy1U2lg3O97bLGcYFfcHN6axNi%2FD2uVolpw4DGj9lSYNomf%2FjDGBMM4BMXb%2BK1jk7bIHaJIYDOMAOidss5uelYTVeBNF9T%2Fa2FZYID2%2FNaF&X-Amz-Signature=1ed7df6a3860dcb530c9db067de67de4a8fc588a3e25aad755dae45a56f93894&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDOXVY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNlxqCSryZM6c46acCb17vtVA1z8I6wC9OmW20nVfMLgIgbBR%2Bn168vgsy3RzypTXNENi1h86hC7k00EC7LmmkxEQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT4hgrrFOujN3f8lyrcA5A6Ei5M4UoItgBkLOw%2BgAkEcYhFDrmIAx0y5WPMzrIKDkcRYL%2Biew1gVisG0Z2uQWlWUvrOt8Z2W6twhWYLpFKHKw0jgjUDJD3jkguzQUiRg1I166WK2IEQjiRNyMuDuciOCP3XTKdI7aEaysOMW1GX4S9PW%2BZo%2Bs%2BzGU2f49CTY9AhGL9%2BZJkO9gtlvYro4mk8pYMJ%2FBY1NDXsDdZl6ei4adfViGz6oDzMxse6ueIp9sr%2FkL5GI9BeUg7if%2FNvx0jIrTTAbAKS8DWhnl61Sf50ARglpEmZ6bzrKw%2F7PDCsPCWnLkbbfsBlFMDoKQuG59Xjh3Fj5Y3xpK0VcdkxiF23CSE2IDd2LTfbE%2B1zSUXIUhtFebsISDwyRATJtFsTN7lAOgc3Xqj7%2FENTNCzC8zAtSBmdEAJBn84vczF5HxjG7OdMoKkSmEosoVTb7jD%2B6RNVf7RyNlDLaPs9XJFrSrr%2BnNIGYVLuwc1OXlur%2Ft17krarHofRtG6KXbL0K7MKyopfw48bgDsxToMHifwnK5fAxskIpD9z6C8DMzmKzTxqILx20QU34ALLoofJBfnMu4QxX6Enk6xUMLE8XaAFBPlcifoyTvTX42%2BHRZbeXmD0faIgx5%2FHamJJeQh7MPDn370GOqUBQ6jrl8K4d7tQXoOfSAlNaW43qncg8szj06lT%2B3wbrWf%2FmdpIVWNPI38QaEcF%2FnmFb5Nc5BvhPY%2FfaZchAnOkyERYY1moZxazlyUyMlQ9M3zfk6GEayy1U2lg3O97bLGcYFfcHN6axNi%2FD2uVolpw4DGj9lSYNomf%2FjDGBMM4BMXb%2BK1jk7bIHaJIYDOMAOidss5uelYTVeBNF9T%2Fa2FZYID2%2FNaF&X-Amz-Signature=ad67443b9a9df5ab56ac64611b148309f8721b23874fc69d4aa85255c93122e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDOXVY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNlxqCSryZM6c46acCb17vtVA1z8I6wC9OmW20nVfMLgIgbBR%2Bn168vgsy3RzypTXNENi1h86hC7k00EC7LmmkxEQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT4hgrrFOujN3f8lyrcA5A6Ei5M4UoItgBkLOw%2BgAkEcYhFDrmIAx0y5WPMzrIKDkcRYL%2Biew1gVisG0Z2uQWlWUvrOt8Z2W6twhWYLpFKHKw0jgjUDJD3jkguzQUiRg1I166WK2IEQjiRNyMuDuciOCP3XTKdI7aEaysOMW1GX4S9PW%2BZo%2Bs%2BzGU2f49CTY9AhGL9%2BZJkO9gtlvYro4mk8pYMJ%2FBY1NDXsDdZl6ei4adfViGz6oDzMxse6ueIp9sr%2FkL5GI9BeUg7if%2FNvx0jIrTTAbAKS8DWhnl61Sf50ARglpEmZ6bzrKw%2F7PDCsPCWnLkbbfsBlFMDoKQuG59Xjh3Fj5Y3xpK0VcdkxiF23CSE2IDd2LTfbE%2B1zSUXIUhtFebsISDwyRATJtFsTN7lAOgc3Xqj7%2FENTNCzC8zAtSBmdEAJBn84vczF5HxjG7OdMoKkSmEosoVTb7jD%2B6RNVf7RyNlDLaPs9XJFrSrr%2BnNIGYVLuwc1OXlur%2Ft17krarHofRtG6KXbL0K7MKyopfw48bgDsxToMHifwnK5fAxskIpD9z6C8DMzmKzTxqILx20QU34ALLoofJBfnMu4QxX6Enk6xUMLE8XaAFBPlcifoyTvTX42%2BHRZbeXmD0faIgx5%2FHamJJeQh7MPDn370GOqUBQ6jrl8K4d7tQXoOfSAlNaW43qncg8szj06lT%2B3wbrWf%2FmdpIVWNPI38QaEcF%2FnmFb5Nc5BvhPY%2FfaZchAnOkyERYY1moZxazlyUyMlQ9M3zfk6GEayy1U2lg3O97bLGcYFfcHN6axNi%2FD2uVolpw4DGj9lSYNomf%2FjDGBMM4BMXb%2BK1jk7bIHaJIYDOMAOidss5uelYTVeBNF9T%2Fa2FZYID2%2FNaF&X-Amz-Signature=2a974cef75f148f24391dfd409ce3b17f38cf36ab9a8ecd6e34c46723b89c851&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
