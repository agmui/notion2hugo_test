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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6T6RLKK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID445OfS0ZvLiV%2B9M%2B7mJRwEOzKu9V0Xz70WwM2%2FyBLIAiBP5zjJlJY%2BIbgqkXkEnzHXC0UKlEb35iVt%2F6s9gS0EoSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMLEWam1O6Ih72lYHWKtwDa1WCFDr1Y3tYipIUP0cGVP1C1G2PrO6JAs7u0TE%2FwpmdrILg%2Ff2OqdFjiFMMfsonpeJ2mlbewFXciIlkDVn6f6PgTevtOYJeewH1SLOQUP76fEDqOs8XzorQK9VXvn7q7qpMvWZM8mhX1Z%2BYtxIlUO1l5byVFP7lC0tNb2jR1Bwu9dSpXrQY5KSaTL%2BLi44nF1XqG2dmL57IcHwm%2FHHjcKFEmL0%2BpSb4cnEbiTsWfMO4pL2f7%2BiZlQu3q3JrreyA9LUfjL1%2BxSvNapxkLKD9BluoR%2BHoLcgdSzdbTjYUOX1frJAsKhzEbIlCuwV49j3fXZr%2FXTmo0Ckwa3%2FMs%2BXuTnS9sGeJGff%2F3g3%2B%2BTtuW2GAH%2Byfc8uEMsMYYOAShb6Tc50hL9NeyerQPeuO73GuGVVg7ayBj3sC0I%2BqB5ScO7Kedz3d2CFFfllr1Z6KGc%2BrNEnHQGWSan43%2B9CmeroT8bm4F3XJEFSH2Pu91gL8CpeWN%2B3qIjG8a%2FYBI9croBXiNek59OyRmUFg0%2Bi5SGjubuJ9ZZ%2BGufxAVRDgYP0C%2FnYh4aU6SoxZZ%2B000MmoMp1tn3j9ff%2FUmLnXNremgvFPXyQz%2BBq%2B8HHQW3VvIdQpLdesj%2BxybkQPIqODNdsw0IyzwgY6pgEGUxAH5%2FkemSdDzOXgH5O1oFkL%2B9PFF5qyU5V41v9qooeXDkFj9EvdB6IuiKiwaTEVYAhbvBj%2B1m7yJtWFsAcaAA94Qlfx4MCoalbAwBY%2FInjghvEChC7FjCZ3jgqCava14kByrxNL2ojFsmP5efKicUIoZ0T3Dvz0Yv0xE2qgbI1%2BX4IqIJX5VzqJVFS2o7DCRtN4FDiJDCePprKUy0SQCDyG81A8&X-Amz-Signature=61b9458c63fbf54496bd37ef46f2f130a53e57cfd5747a0bd2ba7fe37cbef2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6T6RLKK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID445OfS0ZvLiV%2B9M%2B7mJRwEOzKu9V0Xz70WwM2%2FyBLIAiBP5zjJlJY%2BIbgqkXkEnzHXC0UKlEb35iVt%2F6s9gS0EoSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMLEWam1O6Ih72lYHWKtwDa1WCFDr1Y3tYipIUP0cGVP1C1G2PrO6JAs7u0TE%2FwpmdrILg%2Ff2OqdFjiFMMfsonpeJ2mlbewFXciIlkDVn6f6PgTevtOYJeewH1SLOQUP76fEDqOs8XzorQK9VXvn7q7qpMvWZM8mhX1Z%2BYtxIlUO1l5byVFP7lC0tNb2jR1Bwu9dSpXrQY5KSaTL%2BLi44nF1XqG2dmL57IcHwm%2FHHjcKFEmL0%2BpSb4cnEbiTsWfMO4pL2f7%2BiZlQu3q3JrreyA9LUfjL1%2BxSvNapxkLKD9BluoR%2BHoLcgdSzdbTjYUOX1frJAsKhzEbIlCuwV49j3fXZr%2FXTmo0Ckwa3%2FMs%2BXuTnS9sGeJGff%2F3g3%2B%2BTtuW2GAH%2Byfc8uEMsMYYOAShb6Tc50hL9NeyerQPeuO73GuGVVg7ayBj3sC0I%2BqB5ScO7Kedz3d2CFFfllr1Z6KGc%2BrNEnHQGWSan43%2B9CmeroT8bm4F3XJEFSH2Pu91gL8CpeWN%2B3qIjG8a%2FYBI9croBXiNek59OyRmUFg0%2Bi5SGjubuJ9ZZ%2BGufxAVRDgYP0C%2FnYh4aU6SoxZZ%2B000MmoMp1tn3j9ff%2FUmLnXNremgvFPXyQz%2BBq%2B8HHQW3VvIdQpLdesj%2BxybkQPIqODNdsw0IyzwgY6pgEGUxAH5%2FkemSdDzOXgH5O1oFkL%2B9PFF5qyU5V41v9qooeXDkFj9EvdB6IuiKiwaTEVYAhbvBj%2B1m7yJtWFsAcaAA94Qlfx4MCoalbAwBY%2FInjghvEChC7FjCZ3jgqCava14kByrxNL2ojFsmP5efKicUIoZ0T3Dvz0Yv0xE2qgbI1%2BX4IqIJX5VzqJVFS2o7DCRtN4FDiJDCePprKUy0SQCDyG81A8&X-Amz-Signature=853d95d71752e08b5973212a5bcc92c586bb407526712b9093c8924831f24220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6T6RLKK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCID445OfS0ZvLiV%2B9M%2B7mJRwEOzKu9V0Xz70WwM2%2FyBLIAiBP5zjJlJY%2BIbgqkXkEnzHXC0UKlEb35iVt%2F6s9gS0EoSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMLEWam1O6Ih72lYHWKtwDa1WCFDr1Y3tYipIUP0cGVP1C1G2PrO6JAs7u0TE%2FwpmdrILg%2Ff2OqdFjiFMMfsonpeJ2mlbewFXciIlkDVn6f6PgTevtOYJeewH1SLOQUP76fEDqOs8XzorQK9VXvn7q7qpMvWZM8mhX1Z%2BYtxIlUO1l5byVFP7lC0tNb2jR1Bwu9dSpXrQY5KSaTL%2BLi44nF1XqG2dmL57IcHwm%2FHHjcKFEmL0%2BpSb4cnEbiTsWfMO4pL2f7%2BiZlQu3q3JrreyA9LUfjL1%2BxSvNapxkLKD9BluoR%2BHoLcgdSzdbTjYUOX1frJAsKhzEbIlCuwV49j3fXZr%2FXTmo0Ckwa3%2FMs%2BXuTnS9sGeJGff%2F3g3%2B%2BTtuW2GAH%2Byfc8uEMsMYYOAShb6Tc50hL9NeyerQPeuO73GuGVVg7ayBj3sC0I%2BqB5ScO7Kedz3d2CFFfllr1Z6KGc%2BrNEnHQGWSan43%2B9CmeroT8bm4F3XJEFSH2Pu91gL8CpeWN%2B3qIjG8a%2FYBI9croBXiNek59OyRmUFg0%2Bi5SGjubuJ9ZZ%2BGufxAVRDgYP0C%2FnYh4aU6SoxZZ%2B000MmoMp1tn3j9ff%2FUmLnXNremgvFPXyQz%2BBq%2B8HHQW3VvIdQpLdesj%2BxybkQPIqODNdsw0IyzwgY6pgEGUxAH5%2FkemSdDzOXgH5O1oFkL%2B9PFF5qyU5V41v9qooeXDkFj9EvdB6IuiKiwaTEVYAhbvBj%2B1m7yJtWFsAcaAA94Qlfx4MCoalbAwBY%2FInjghvEChC7FjCZ3jgqCava14kByrxNL2ojFsmP5efKicUIoZ0T3Dvz0Yv0xE2qgbI1%2BX4IqIJX5VzqJVFS2o7DCRtN4FDiJDCePprKUy0SQCDyG81A8&X-Amz-Signature=9ec26dcd9049edaf41a85d174ae68791c2c11ef7b4afcf216e9316b04f72d450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
