---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQWSRO3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC9bq0E7uKek%2F0isJIYuH%2FHASwtts0Szmg1HOjiftW5fAiEAsR06Ndn6BKuFc58CXu%2FBkrT60fLv1%2B3XuBMTAasaZ7gqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDPX1uMpvWPxD26hSrcA7m9tb%2BCM5NQqrZXweL%2Bkgkw%2BfkouFiJivujfTtEWhu38x4YwVXocB3UEHmIbzkHMD9Sz%2FJbKztMo55Ikc9zTJMBKaF1o%2FGGcKkG3noo89B%2BURotuXT0eusRUBSANObLbVfoLayYFmlEySyTBd%2FbZIZ%2BeD%2FH9OS8GEsssLw9MWIYgRjYBmDuX%2BtltPBxMEkHq1Xgw7x3xikrROPciWLjVeRnDXQx%2FUnJYfbq%2F5ZDORwACAnuKjNl18lbrP4pbiziYeP9TO5Z5Jbj%2BYSaQtcx8fxNNGSzNSrCriR4SgS5%2Bl6h4%2BiV4UtWTxbmuDHkIp4l%2FzJDna0PwJL5R9GpObo9DQNnQ3GS%2Bl4koDh4vHEsMmK%2FmlTNN74xA44depEsxeAn%2BV9xdPJmpWcsU2OxWGZ39M191okX3PdTEkzvh0lpcGjzm%2BvExZtwG4KOvdbuh%2F5QSBJ%2BctiE1r6c3lEeuqqF6VN9ZPAEluY15E8DizMIfRrAL4e3a2VoyHHCNi0hB%2FCwknwiktza8HasqekdZSx4a9pjsvzBH1R7cu01b%2BrKDyS%2FR0%2Bo2Uv4F%2BKuOQM8lwlFDHnHx5y5XwwSEguqvo44oiZwSel%2BTNT4RB%2BYKDFWI%2BDMXVyfzeDXreKbpEokMKaI0sQGOqUBx7V%2Fg7YCAkg8aNkS%2FQABW%2FPDId6a%2BxIrcDWIkle0f8wX6U6%2FJFuitzhYqRLFMLflJi56sDwHzhrBhJR652CjVUGuBZGHZAD6K2hJ%2FPpIlGmzxp0WKIjKKm1CSw8ftV71FiByAcgYU6KirvMVcfqnvPY4D73LmyFhRrQuQkTBa%2BmoVdN1%2Fog2PbVsyFZariJN5q1HTXHv2H3travWPP3%2BALaROA1%2F&X-Amz-Signature=2e3a4ba32ac2939f3250db8e10110fb2583bf99e4b2ee61c2ba164e2f1916e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQWSRO3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC9bq0E7uKek%2F0isJIYuH%2FHASwtts0Szmg1HOjiftW5fAiEAsR06Ndn6BKuFc58CXu%2FBkrT60fLv1%2B3XuBMTAasaZ7gqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDPX1uMpvWPxD26hSrcA7m9tb%2BCM5NQqrZXweL%2Bkgkw%2BfkouFiJivujfTtEWhu38x4YwVXocB3UEHmIbzkHMD9Sz%2FJbKztMo55Ikc9zTJMBKaF1o%2FGGcKkG3noo89B%2BURotuXT0eusRUBSANObLbVfoLayYFmlEySyTBd%2FbZIZ%2BeD%2FH9OS8GEsssLw9MWIYgRjYBmDuX%2BtltPBxMEkHq1Xgw7x3xikrROPciWLjVeRnDXQx%2FUnJYfbq%2F5ZDORwACAnuKjNl18lbrP4pbiziYeP9TO5Z5Jbj%2BYSaQtcx8fxNNGSzNSrCriR4SgS5%2Bl6h4%2BiV4UtWTxbmuDHkIp4l%2FzJDna0PwJL5R9GpObo9DQNnQ3GS%2Bl4koDh4vHEsMmK%2FmlTNN74xA44depEsxeAn%2BV9xdPJmpWcsU2OxWGZ39M191okX3PdTEkzvh0lpcGjzm%2BvExZtwG4KOvdbuh%2F5QSBJ%2BctiE1r6c3lEeuqqF6VN9ZPAEluY15E8DizMIfRrAL4e3a2VoyHHCNi0hB%2FCwknwiktza8HasqekdZSx4a9pjsvzBH1R7cu01b%2BrKDyS%2FR0%2Bo2Uv4F%2BKuOQM8lwlFDHnHx5y5XwwSEguqvo44oiZwSel%2BTNT4RB%2BYKDFWI%2BDMXVyfzeDXreKbpEokMKaI0sQGOqUBx7V%2Fg7YCAkg8aNkS%2FQABW%2FPDId6a%2BxIrcDWIkle0f8wX6U6%2FJFuitzhYqRLFMLflJi56sDwHzhrBhJR652CjVUGuBZGHZAD6K2hJ%2FPpIlGmzxp0WKIjKKm1CSw8ftV71FiByAcgYU6KirvMVcfqnvPY4D73LmyFhRrQuQkTBa%2BmoVdN1%2Fog2PbVsyFZariJN5q1HTXHv2H3travWPP3%2BALaROA1%2F&X-Amz-Signature=1c3999ecc7901ee5dbe732f4c202ac5ba70c06e9683b928cd159bfafb7fb246f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHQWSRO3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC9bq0E7uKek%2F0isJIYuH%2FHASwtts0Szmg1HOjiftW5fAiEAsR06Ndn6BKuFc58CXu%2FBkrT60fLv1%2B3XuBMTAasaZ7gqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDPX1uMpvWPxD26hSrcA7m9tb%2BCM5NQqrZXweL%2Bkgkw%2BfkouFiJivujfTtEWhu38x4YwVXocB3UEHmIbzkHMD9Sz%2FJbKztMo55Ikc9zTJMBKaF1o%2FGGcKkG3noo89B%2BURotuXT0eusRUBSANObLbVfoLayYFmlEySyTBd%2FbZIZ%2BeD%2FH9OS8GEsssLw9MWIYgRjYBmDuX%2BtltPBxMEkHq1Xgw7x3xikrROPciWLjVeRnDXQx%2FUnJYfbq%2F5ZDORwACAnuKjNl18lbrP4pbiziYeP9TO5Z5Jbj%2BYSaQtcx8fxNNGSzNSrCriR4SgS5%2Bl6h4%2BiV4UtWTxbmuDHkIp4l%2FzJDna0PwJL5R9GpObo9DQNnQ3GS%2Bl4koDh4vHEsMmK%2FmlTNN74xA44depEsxeAn%2BV9xdPJmpWcsU2OxWGZ39M191okX3PdTEkzvh0lpcGjzm%2BvExZtwG4KOvdbuh%2F5QSBJ%2BctiE1r6c3lEeuqqF6VN9ZPAEluY15E8DizMIfRrAL4e3a2VoyHHCNi0hB%2FCwknwiktza8HasqekdZSx4a9pjsvzBH1R7cu01b%2BrKDyS%2FR0%2Bo2Uv4F%2BKuOQM8lwlFDHnHx5y5XwwSEguqvo44oiZwSel%2BTNT4RB%2BYKDFWI%2BDMXVyfzeDXreKbpEokMKaI0sQGOqUBx7V%2Fg7YCAkg8aNkS%2FQABW%2FPDId6a%2BxIrcDWIkle0f8wX6U6%2FJFuitzhYqRLFMLflJi56sDwHzhrBhJR652CjVUGuBZGHZAD6K2hJ%2FPpIlGmzxp0WKIjKKm1CSw8ftV71FiByAcgYU6KirvMVcfqnvPY4D73LmyFhRrQuQkTBa%2BmoVdN1%2Fog2PbVsyFZariJN5q1HTXHv2H3travWPP3%2BALaROA1%2F&X-Amz-Signature=df5ebd082946b46bf2d66118a87b8bb7517e2c8f7cb49f02a5e24b95b9281a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
