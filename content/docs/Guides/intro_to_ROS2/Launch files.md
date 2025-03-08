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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3IIMVQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBcJrSCEw6pWfWFUYcMVlHgKXpf7fq0PNzEmcqe4gNCdAiAlvDEIcJK1FqhsYLshQU6tAZKxkgzOzkw%2FFvH3BlZ2hSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMzaSnq1T%2Bt7C3QBhQKtwDCtM86Uc9fVTv2eyqDijgjJj1Uf2Uoxy%2BB6%2F0aCcMy%2FRnHnkG%2FulS89xoVyhiC7640usCSf17uLdGOMoHlfUV35dCv1VgivuKO1PKDDkztjtrMWsZAN1m7OGb3GDnyFrX%2BZh6FLIi9SOQWCoBHNZZ77hkec2qZvoFjXpIBMQXbU%2BEq1DMYl4I%2FDfamX4iev1nFJKpSfsSlkDAP7g1ImZO2MbV7PR%2Bv8zKoR%2Byfj8%2B%2B73W59BKAsNuz6Sjv7B5GJjaFe4qOxn%2Fw7kfIS6dsRyFplgi7ACl%2BkojH0DIVgVSQYFz%2Byi%2FRSH1aS9srmnpE%2FyhUeEQ1hzlTDNTFJ6SQW7Z0a7e%2B1uc4lNe1Ol9WxeDdvO2O4%2BX4SzG%2FmuTWUW3%2FdsYWizyRNq%2F0J3p%2Bc%2FWKNHgemmdzRyEZC91cmSxYSBHPyPcfjb36YTKtkAX8eddVSkDpwyYbh5sZd%2BeJ25Wns2Q06M640K%2B0uZshaB4ZKg%2BZA67PfSSXvDjEi7swLwlViDNdQ4XD9hk3zX1t3q1QBWE1VFFC4EN37lwDkMXXIUdtcc2t0UELHxHA6Fh1UhOW1UWbwUoL1%2F77wg6xa%2FKXw1ZPat9LGN%2BdURxIDirdiBhaUdKdjaZ6H0Q2xQ6Flkw74WxvgY6pgF5Ia0Cxe48IDOh%2Fkgb6uC9U5cGuVqgnkTvhMq5K8EM1psvMW%2BIDYbSU1%2BnH4uLwtZqNqpyBzkSHI%2BkhHV3al0NQQJcOrQrvgqKOaMvBL8%2FTo0F6o5%2BfUKt%2FxZIZh%2FSX07ajhdyCff%2BtnacpvC49Ot79nm4hmBkpGVitlNriAeV3vzj24LZGRFsevNFWfPyQACz2YzEl6yPWaJm%2FO16BjmC3Bm54L%2FY&X-Amz-Signature=815da5e600452afd5656bf393e05e653425aa0e153948b1d51b6c6025921f3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3IIMVQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBcJrSCEw6pWfWFUYcMVlHgKXpf7fq0PNzEmcqe4gNCdAiAlvDEIcJK1FqhsYLshQU6tAZKxkgzOzkw%2FFvH3BlZ2hSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMzaSnq1T%2Bt7C3QBhQKtwDCtM86Uc9fVTv2eyqDijgjJj1Uf2Uoxy%2BB6%2F0aCcMy%2FRnHnkG%2FulS89xoVyhiC7640usCSf17uLdGOMoHlfUV35dCv1VgivuKO1PKDDkztjtrMWsZAN1m7OGb3GDnyFrX%2BZh6FLIi9SOQWCoBHNZZ77hkec2qZvoFjXpIBMQXbU%2BEq1DMYl4I%2FDfamX4iev1nFJKpSfsSlkDAP7g1ImZO2MbV7PR%2Bv8zKoR%2Byfj8%2B%2B73W59BKAsNuz6Sjv7B5GJjaFe4qOxn%2Fw7kfIS6dsRyFplgi7ACl%2BkojH0DIVgVSQYFz%2Byi%2FRSH1aS9srmnpE%2FyhUeEQ1hzlTDNTFJ6SQW7Z0a7e%2B1uc4lNe1Ol9WxeDdvO2O4%2BX4SzG%2FmuTWUW3%2FdsYWizyRNq%2F0J3p%2Bc%2FWKNHgemmdzRyEZC91cmSxYSBHPyPcfjb36YTKtkAX8eddVSkDpwyYbh5sZd%2BeJ25Wns2Q06M640K%2B0uZshaB4ZKg%2BZA67PfSSXvDjEi7swLwlViDNdQ4XD9hk3zX1t3q1QBWE1VFFC4EN37lwDkMXXIUdtcc2t0UELHxHA6Fh1UhOW1UWbwUoL1%2F77wg6xa%2FKXw1ZPat9LGN%2BdURxIDirdiBhaUdKdjaZ6H0Q2xQ6Flkw74WxvgY6pgF5Ia0Cxe48IDOh%2Fkgb6uC9U5cGuVqgnkTvhMq5K8EM1psvMW%2BIDYbSU1%2BnH4uLwtZqNqpyBzkSHI%2BkhHV3al0NQQJcOrQrvgqKOaMvBL8%2FTo0F6o5%2BfUKt%2FxZIZh%2FSX07ajhdyCff%2BtnacpvC49Ot79nm4hmBkpGVitlNriAeV3vzj24LZGRFsevNFWfPyQACz2YzEl6yPWaJm%2FO16BjmC3Bm54L%2FY&X-Amz-Signature=1e68bc8a3f97046272a54d816d524ae0b98c7ca67e3cfb339222dc35ba4719bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3IIMVQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBcJrSCEw6pWfWFUYcMVlHgKXpf7fq0PNzEmcqe4gNCdAiAlvDEIcJK1FqhsYLshQU6tAZKxkgzOzkw%2FFvH3BlZ2hSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMzaSnq1T%2Bt7C3QBhQKtwDCtM86Uc9fVTv2eyqDijgjJj1Uf2Uoxy%2BB6%2F0aCcMy%2FRnHnkG%2FulS89xoVyhiC7640usCSf17uLdGOMoHlfUV35dCv1VgivuKO1PKDDkztjtrMWsZAN1m7OGb3GDnyFrX%2BZh6FLIi9SOQWCoBHNZZ77hkec2qZvoFjXpIBMQXbU%2BEq1DMYl4I%2FDfamX4iev1nFJKpSfsSlkDAP7g1ImZO2MbV7PR%2Bv8zKoR%2Byfj8%2B%2B73W59BKAsNuz6Sjv7B5GJjaFe4qOxn%2Fw7kfIS6dsRyFplgi7ACl%2BkojH0DIVgVSQYFz%2Byi%2FRSH1aS9srmnpE%2FyhUeEQ1hzlTDNTFJ6SQW7Z0a7e%2B1uc4lNe1Ol9WxeDdvO2O4%2BX4SzG%2FmuTWUW3%2FdsYWizyRNq%2F0J3p%2Bc%2FWKNHgemmdzRyEZC91cmSxYSBHPyPcfjb36YTKtkAX8eddVSkDpwyYbh5sZd%2BeJ25Wns2Q06M640K%2B0uZshaB4ZKg%2BZA67PfSSXvDjEi7swLwlViDNdQ4XD9hk3zX1t3q1QBWE1VFFC4EN37lwDkMXXIUdtcc2t0UELHxHA6Fh1UhOW1UWbwUoL1%2F77wg6xa%2FKXw1ZPat9LGN%2BdURxIDirdiBhaUdKdjaZ6H0Q2xQ6Flkw74WxvgY6pgF5Ia0Cxe48IDOh%2Fkgb6uC9U5cGuVqgnkTvhMq5K8EM1psvMW%2BIDYbSU1%2BnH4uLwtZqNqpyBzkSHI%2BkhHV3al0NQQJcOrQrvgqKOaMvBL8%2FTo0F6o5%2BfUKt%2FxZIZh%2FSX07ajhdyCff%2BtnacpvC49Ot79nm4hmBkpGVitlNriAeV3vzj24LZGRFsevNFWfPyQACz2YzEl6yPWaJm%2FO16BjmC3Bm54L%2FY&X-Amz-Signature=bd253a7a75a08c61a6af5252ba995a88e448422ae322cd321d5a986f432a6425&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
