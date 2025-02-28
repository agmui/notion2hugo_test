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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INPAJUE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDCMNYkA7BJ24qk44kQBB8jZ1eR2pcaJjHWh6mc1sFJCAIgLiFMlhVjhAuMLUz1kXaBPXyCskFTILDHayAs%2FZ1W5XUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAabbHrX7SHQnUmOCrcAzSwg4Y%2FWgZrbqKPUsK1M%2Bj%2FhY%2F2LccbiXEXimjfsAqzsJIXe8od26%2FckSETnsgH%2BMViFFgSSk1t9p%2Fd981J4w8ltOk0iwFfc8vaxnjBobttwQPiYkNzZhAkc%2BTbM6hDz750tcIGaB1YhEwt0ruEHWo2kP6B7QlruL%2FWnXTakFxUNUwANHPMuDYQIyucJ2%2But6piDwpoYtRjBAb2pXeDzZqQQ4fwcm%2F2bNGTddsRfEFzzlEZUB7M%2FVEc9fYyN2O5Ec3S7mJez84Fslluabv9e8kjfvS1HDY3mJkw875nfBYDukwyc7MgvRAGbu5OgBJ11dowpbFG4Mj3%2BoN5MWW8nRIVm5xfZ2IiuYFMH%2FWIp5QR0pvJqktn14lBpUiIENQkvncTZSVfe%2FQonlKBoaN0Vl4gxv9EttJ0isbYhzgTQaIvSapXe8tSjqvSBUigHDj4g6utSzxokpJ3sIs8ug%2BZadjYaP0rJFOxnDzPNo8kj%2FYSkMYxR2%2Bn1%2FbHuVdb0a2i8uY7LgEUfeA6D2h37J5sLFO3q1aGq1FHkcFoyJ6D%2FEUQX%2BBgGhTRz8V%2FEoVUQ7YJQIEwiDD3Aj7AKWlC%2BcDyZBfzd6Gi2SeHKshr1g7tKrwIBYXz%2BoLdIQbJF8HBMNuLiL4GOqUB34CT3bOy%2F1JRJCVt5PE4MvAchX%2BGs%2BaAOSbOQC7z4a2PgNMUPngwZzyTsp%2BG4ChTaCZpzJdN3qW%2BjMuF6GQ4etGEb7mZTMmgytxqOSOWq89KGYlHbedcVrv5dJzr3%2F5dqM9PZ75226%2BmsBW1CFqWv%2F%2FT%2FJy49io77uWJKNWZOEgiqWHsHYB8AW21KqEabekwMNPWDT2CP0jeOIInb7YOqvcQBxgT&X-Amz-Signature=93cbabded6777a3733deeb893d83eda589818b5da06452e26c7c3e0f7c27cabf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INPAJUE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDCMNYkA7BJ24qk44kQBB8jZ1eR2pcaJjHWh6mc1sFJCAIgLiFMlhVjhAuMLUz1kXaBPXyCskFTILDHayAs%2FZ1W5XUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAabbHrX7SHQnUmOCrcAzSwg4Y%2FWgZrbqKPUsK1M%2Bj%2FhY%2F2LccbiXEXimjfsAqzsJIXe8od26%2FckSETnsgH%2BMViFFgSSk1t9p%2Fd981J4w8ltOk0iwFfc8vaxnjBobttwQPiYkNzZhAkc%2BTbM6hDz750tcIGaB1YhEwt0ruEHWo2kP6B7QlruL%2FWnXTakFxUNUwANHPMuDYQIyucJ2%2But6piDwpoYtRjBAb2pXeDzZqQQ4fwcm%2F2bNGTddsRfEFzzlEZUB7M%2FVEc9fYyN2O5Ec3S7mJez84Fslluabv9e8kjfvS1HDY3mJkw875nfBYDukwyc7MgvRAGbu5OgBJ11dowpbFG4Mj3%2BoN5MWW8nRIVm5xfZ2IiuYFMH%2FWIp5QR0pvJqktn14lBpUiIENQkvncTZSVfe%2FQonlKBoaN0Vl4gxv9EttJ0isbYhzgTQaIvSapXe8tSjqvSBUigHDj4g6utSzxokpJ3sIs8ug%2BZadjYaP0rJFOxnDzPNo8kj%2FYSkMYxR2%2Bn1%2FbHuVdb0a2i8uY7LgEUfeA6D2h37J5sLFO3q1aGq1FHkcFoyJ6D%2FEUQX%2BBgGhTRz8V%2FEoVUQ7YJQIEwiDD3Aj7AKWlC%2BcDyZBfzd6Gi2SeHKshr1g7tKrwIBYXz%2BoLdIQbJF8HBMNuLiL4GOqUB34CT3bOy%2F1JRJCVt5PE4MvAchX%2BGs%2BaAOSbOQC7z4a2PgNMUPngwZzyTsp%2BG4ChTaCZpzJdN3qW%2BjMuF6GQ4etGEb7mZTMmgytxqOSOWq89KGYlHbedcVrv5dJzr3%2F5dqM9PZ75226%2BmsBW1CFqWv%2F%2FT%2FJy49io77uWJKNWZOEgiqWHsHYB8AW21KqEabekwMNPWDT2CP0jeOIInb7YOqvcQBxgT&X-Amz-Signature=21780231f7c6113be2208d0a79fb63eb5bb600632b4715dff2c77b688054cda7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INPAJUE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDCMNYkA7BJ24qk44kQBB8jZ1eR2pcaJjHWh6mc1sFJCAIgLiFMlhVjhAuMLUz1kXaBPXyCskFTILDHayAs%2FZ1W5XUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAabbHrX7SHQnUmOCrcAzSwg4Y%2FWgZrbqKPUsK1M%2Bj%2FhY%2F2LccbiXEXimjfsAqzsJIXe8od26%2FckSETnsgH%2BMViFFgSSk1t9p%2Fd981J4w8ltOk0iwFfc8vaxnjBobttwQPiYkNzZhAkc%2BTbM6hDz750tcIGaB1YhEwt0ruEHWo2kP6B7QlruL%2FWnXTakFxUNUwANHPMuDYQIyucJ2%2But6piDwpoYtRjBAb2pXeDzZqQQ4fwcm%2F2bNGTddsRfEFzzlEZUB7M%2FVEc9fYyN2O5Ec3S7mJez84Fslluabv9e8kjfvS1HDY3mJkw875nfBYDukwyc7MgvRAGbu5OgBJ11dowpbFG4Mj3%2BoN5MWW8nRIVm5xfZ2IiuYFMH%2FWIp5QR0pvJqktn14lBpUiIENQkvncTZSVfe%2FQonlKBoaN0Vl4gxv9EttJ0isbYhzgTQaIvSapXe8tSjqvSBUigHDj4g6utSzxokpJ3sIs8ug%2BZadjYaP0rJFOxnDzPNo8kj%2FYSkMYxR2%2Bn1%2FbHuVdb0a2i8uY7LgEUfeA6D2h37J5sLFO3q1aGq1FHkcFoyJ6D%2FEUQX%2BBgGhTRz8V%2FEoVUQ7YJQIEwiDD3Aj7AKWlC%2BcDyZBfzd6Gi2SeHKshr1g7tKrwIBYXz%2BoLdIQbJF8HBMNuLiL4GOqUB34CT3bOy%2F1JRJCVt5PE4MvAchX%2BGs%2BaAOSbOQC7z4a2PgNMUPngwZzyTsp%2BG4ChTaCZpzJdN3qW%2BjMuF6GQ4etGEb7mZTMmgytxqOSOWq89KGYlHbedcVrv5dJzr3%2F5dqM9PZ75226%2BmsBW1CFqWv%2F%2FT%2FJy49io77uWJKNWZOEgiqWHsHYB8AW21KqEabekwMNPWDT2CP0jeOIInb7YOqvcQBxgT&X-Amz-Signature=971322a6dbe450861292a439fecff9d8b4069b33428213f9d21ccbaf52a285f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
