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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZWDPL47%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDsfspn2no1z8JwUS7yMOIR1MJxSwNwsS9ukxAsAQ0SAgIgU9tAGImJEgVuLUetRmmK%2FVluoWeOc8T%2BrtNNuKjcNTwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMerH4dgSss6pIc9UCrcA1awlXv9YVP8M%2BKBLHWGsuhma7nR%2BiOta3LKgg8O2gpPlT%2BD0rNYTl1JjAM%2BwWAmwaIYw6fin7cePcOk1JiB91I4Jezowdg%2BvpGQFavi2PWYg448Y14Y6LBM3TzGoWwhTViwbO%2BqNpwuYDYFuYx2yhzzpo6WCuGr4nzRCW8kqJ%2BCva7qC8fdPLbJzzQnObZ4lJ2xZr%2BObW2C75Ni6mQR21iu7qVr9el%2BiqXUqac04cHZsEbjJev%2BqHPShgeoTL3D6vIDWV%2F3upksMeqjm7mTvVJirz4cbH3q9qI1VY1t1xfyJ9JwcE%2BOyyonOZPve1ZO1n6Pm2MHr0Ny5p%2F7v2qgvL4ynpH78qTRrA5yoQh2bFsB1kaYOD618tSMW7VKFUkYGEcFz76Ep67ZnyNLkF5HKpkxyaE%2B4m2rFJWOYUn4iFLusmBAslEksTpTbWdoo8I1MMjbSc17Tfn13I2Dt3Mb%2FP8P%2FtbKsrMeQw%2BvYjIs%2FaPtMgO%2BmuBg8l1UDEGFp1COiMrZAhinq7lzCULvPpn6w5bEo5YDiWzn2arTxNvxVgYwuwCAhwwgjsUd7sOykc2Fy1J38ObbQJY3YYptRblpg01Sawx6jZR7%2BEWw5HzcsWRO12fcxtF8VrP0R4wSMMmmz70GOqUB1muNuyj611eH3a7%2B2pq0NsLbWehp1itpXtNl6WhyVGjIaaDXeftlY%2FslwGkxYDZ85UH5IFy8QRllksty3wHK7WUuJc1%2F%2FuUjpuiWVoWGp50p9zza%2BcrcfQT%2Bouoqy45coWmHUzeCRVnp9HcnKvRFmDaggyIefzbg4BA%2FFxlV%2Bk36ZL1DXdT%2F5s3%2FJK4Z1rVQBtqVw0hyU8gBW5lR05Uf4p5q1asv&X-Amz-Signature=d267eb4474b6da0cbc4e2cc92122a0ea0bb95bdcf828dcf314897b866dab28ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZWDPL47%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDsfspn2no1z8JwUS7yMOIR1MJxSwNwsS9ukxAsAQ0SAgIgU9tAGImJEgVuLUetRmmK%2FVluoWeOc8T%2BrtNNuKjcNTwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMerH4dgSss6pIc9UCrcA1awlXv9YVP8M%2BKBLHWGsuhma7nR%2BiOta3LKgg8O2gpPlT%2BD0rNYTl1JjAM%2BwWAmwaIYw6fin7cePcOk1JiB91I4Jezowdg%2BvpGQFavi2PWYg448Y14Y6LBM3TzGoWwhTViwbO%2BqNpwuYDYFuYx2yhzzpo6WCuGr4nzRCW8kqJ%2BCva7qC8fdPLbJzzQnObZ4lJ2xZr%2BObW2C75Ni6mQR21iu7qVr9el%2BiqXUqac04cHZsEbjJev%2BqHPShgeoTL3D6vIDWV%2F3upksMeqjm7mTvVJirz4cbH3q9qI1VY1t1xfyJ9JwcE%2BOyyonOZPve1ZO1n6Pm2MHr0Ny5p%2F7v2qgvL4ynpH78qTRrA5yoQh2bFsB1kaYOD618tSMW7VKFUkYGEcFz76Ep67ZnyNLkF5HKpkxyaE%2B4m2rFJWOYUn4iFLusmBAslEksTpTbWdoo8I1MMjbSc17Tfn13I2Dt3Mb%2FP8P%2FtbKsrMeQw%2BvYjIs%2FaPtMgO%2BmuBg8l1UDEGFp1COiMrZAhinq7lzCULvPpn6w5bEo5YDiWzn2arTxNvxVgYwuwCAhwwgjsUd7sOykc2Fy1J38ObbQJY3YYptRblpg01Sawx6jZR7%2BEWw5HzcsWRO12fcxtF8VrP0R4wSMMmmz70GOqUB1muNuyj611eH3a7%2B2pq0NsLbWehp1itpXtNl6WhyVGjIaaDXeftlY%2FslwGkxYDZ85UH5IFy8QRllksty3wHK7WUuJc1%2F%2FuUjpuiWVoWGp50p9zza%2BcrcfQT%2Bouoqy45coWmHUzeCRVnp9HcnKvRFmDaggyIefzbg4BA%2FFxlV%2Bk36ZL1DXdT%2F5s3%2FJK4Z1rVQBtqVw0hyU8gBW5lR05Uf4p5q1asv&X-Amz-Signature=3ccbf3c150e0e4715e476243f7223eaea68ece57a71de8580399f3218f2899ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZWDPL47%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDsfspn2no1z8JwUS7yMOIR1MJxSwNwsS9ukxAsAQ0SAgIgU9tAGImJEgVuLUetRmmK%2FVluoWeOc8T%2BrtNNuKjcNTwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMerH4dgSss6pIc9UCrcA1awlXv9YVP8M%2BKBLHWGsuhma7nR%2BiOta3LKgg8O2gpPlT%2BD0rNYTl1JjAM%2BwWAmwaIYw6fin7cePcOk1JiB91I4Jezowdg%2BvpGQFavi2PWYg448Y14Y6LBM3TzGoWwhTViwbO%2BqNpwuYDYFuYx2yhzzpo6WCuGr4nzRCW8kqJ%2BCva7qC8fdPLbJzzQnObZ4lJ2xZr%2BObW2C75Ni6mQR21iu7qVr9el%2BiqXUqac04cHZsEbjJev%2BqHPShgeoTL3D6vIDWV%2F3upksMeqjm7mTvVJirz4cbH3q9qI1VY1t1xfyJ9JwcE%2BOyyonOZPve1ZO1n6Pm2MHr0Ny5p%2F7v2qgvL4ynpH78qTRrA5yoQh2bFsB1kaYOD618tSMW7VKFUkYGEcFz76Ep67ZnyNLkF5HKpkxyaE%2B4m2rFJWOYUn4iFLusmBAslEksTpTbWdoo8I1MMjbSc17Tfn13I2Dt3Mb%2FP8P%2FtbKsrMeQw%2BvYjIs%2FaPtMgO%2BmuBg8l1UDEGFp1COiMrZAhinq7lzCULvPpn6w5bEo5YDiWzn2arTxNvxVgYwuwCAhwwgjsUd7sOykc2Fy1J38ObbQJY3YYptRblpg01Sawx6jZR7%2BEWw5HzcsWRO12fcxtF8VrP0R4wSMMmmz70GOqUB1muNuyj611eH3a7%2B2pq0NsLbWehp1itpXtNl6WhyVGjIaaDXeftlY%2FslwGkxYDZ85UH5IFy8QRllksty3wHK7WUuJc1%2F%2FuUjpuiWVoWGp50p9zza%2BcrcfQT%2Bouoqy45coWmHUzeCRVnp9HcnKvRFmDaggyIefzbg4BA%2FFxlV%2Bk36ZL1DXdT%2F5s3%2FJK4Z1rVQBtqVw0hyU8gBW5lR05Uf4p5q1asv&X-Amz-Signature=72845d71e8fdb5b5ef96d104b282d09ba383545fa14d9fb2e243c14f891d8c26&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
