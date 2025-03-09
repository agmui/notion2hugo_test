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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHCHSHP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIE9f1tDDBsOAbyZJHabVs3yy4ifT0dkGz9mJGRjx7%2FovAiEAtv9jhuPHJ%2BKiTQwAduma9S%2F7lZ1HjnNjqqojZNfQK1Aq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFrWaz%2F0OMWkp3VQjCrcA%2F42Qg2U7TrlizP6sp%2BlpSpUEcwCaWk%2F2nD4%2B%2FniZE0celjCaTKJKB1wUdta%2Bv5X271g%2FAczN4cmHSXSnQWke5d3XJPmGaGejTRfkIxky%2BQxwr20QUHNByfRBrpl0bG1N1bUZU7ddgBq%2FS3oez2t5YoJ%2FhNOhVnXvOTIwprBs2sOKVZeELDk34gVdAUyTdGop4eYJbmG%2BijO9ITm4Vov04r7eVgvAqXjCP9KI4QZfZ1NxOM7qLnqmQxQf%2B2sglBm1czysuLE5YWmFFwnP6zpuWHpboiF6zW9s8lS3E%2BBc%2BATkXGk%2FUytAPqjk6ePpU2DJO8qcwOCcjGP74K53tL4GrMl6Q7x5Twh%2BKyaMOVbbODeQY%2B%2BpD%2Ffx2Z9AZPYCW727v0XdUXwAiLpwfwXpEZNrDkcVvr0c3%2B90A%2FKTtkT6Xt20oO1BNTktcbwOLN66v4iz5hLSzKoxCOovDR9VHic8B8eyotPzHsDHIOssCXBopPS5fY5xl6evFqPOcrqdzFM31mA9OWTvvnoI8ywkUdiTrpY9DZQbxG%2Bz1xs5zP26wMEeTkxqAgwh3woam06sMBr6GHH1T0nJmiHb8a0TIz0OmgVoLkL%2FvJ6beiMixz%2B6t9aC%2BETBPgyxNmX7MCBMO%2Bwt74GOqUBwTMUgn9YiAz8gv2NOX%2BgY0hqAULkRELiaTa%2B2krAxRFk9BAb47Vvworc22Gu3JPVAp3ax2WBCtMvowI9Z0QcFUokQWK22rFdy%2F4OnjDa%2FVGz3tSecfymhES%2FmRJaJWS%2Bn8zRKfSJimR1Zduq2PCJdUTl77%2FPQBQkjADJipn6250FYycBSXbjbsr1YKFYTg4%2FomiNXnBM%2Bvjt7bUMV7RLW0v53AHn&X-Amz-Signature=f9ffa2a7138fe6afb3f264bb0a2076b8beec3b2e43550bcbf6c1282e880c95d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHCHSHP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIE9f1tDDBsOAbyZJHabVs3yy4ifT0dkGz9mJGRjx7%2FovAiEAtv9jhuPHJ%2BKiTQwAduma9S%2F7lZ1HjnNjqqojZNfQK1Aq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFrWaz%2F0OMWkp3VQjCrcA%2F42Qg2U7TrlizP6sp%2BlpSpUEcwCaWk%2F2nD4%2B%2FniZE0celjCaTKJKB1wUdta%2Bv5X271g%2FAczN4cmHSXSnQWke5d3XJPmGaGejTRfkIxky%2BQxwr20QUHNByfRBrpl0bG1N1bUZU7ddgBq%2FS3oez2t5YoJ%2FhNOhVnXvOTIwprBs2sOKVZeELDk34gVdAUyTdGop4eYJbmG%2BijO9ITm4Vov04r7eVgvAqXjCP9KI4QZfZ1NxOM7qLnqmQxQf%2B2sglBm1czysuLE5YWmFFwnP6zpuWHpboiF6zW9s8lS3E%2BBc%2BATkXGk%2FUytAPqjk6ePpU2DJO8qcwOCcjGP74K53tL4GrMl6Q7x5Twh%2BKyaMOVbbODeQY%2B%2BpD%2Ffx2Z9AZPYCW727v0XdUXwAiLpwfwXpEZNrDkcVvr0c3%2B90A%2FKTtkT6Xt20oO1BNTktcbwOLN66v4iz5hLSzKoxCOovDR9VHic8B8eyotPzHsDHIOssCXBopPS5fY5xl6evFqPOcrqdzFM31mA9OWTvvnoI8ywkUdiTrpY9DZQbxG%2Bz1xs5zP26wMEeTkxqAgwh3woam06sMBr6GHH1T0nJmiHb8a0TIz0OmgVoLkL%2FvJ6beiMixz%2B6t9aC%2BETBPgyxNmX7MCBMO%2Bwt74GOqUBwTMUgn9YiAz8gv2NOX%2BgY0hqAULkRELiaTa%2B2krAxRFk9BAb47Vvworc22Gu3JPVAp3ax2WBCtMvowI9Z0QcFUokQWK22rFdy%2F4OnjDa%2FVGz3tSecfymhES%2FmRJaJWS%2Bn8zRKfSJimR1Zduq2PCJdUTl77%2FPQBQkjADJipn6250FYycBSXbjbsr1YKFYTg4%2FomiNXnBM%2Bvjt7bUMV7RLW0v53AHn&X-Amz-Signature=5e1ea4b184d6684e4b55f3330b54e62fc5ad6617853ecab1daba46c57b6a7ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHCHSHP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIE9f1tDDBsOAbyZJHabVs3yy4ifT0dkGz9mJGRjx7%2FovAiEAtv9jhuPHJ%2BKiTQwAduma9S%2F7lZ1HjnNjqqojZNfQK1Aq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFrWaz%2F0OMWkp3VQjCrcA%2F42Qg2U7TrlizP6sp%2BlpSpUEcwCaWk%2F2nD4%2B%2FniZE0celjCaTKJKB1wUdta%2Bv5X271g%2FAczN4cmHSXSnQWke5d3XJPmGaGejTRfkIxky%2BQxwr20QUHNByfRBrpl0bG1N1bUZU7ddgBq%2FS3oez2t5YoJ%2FhNOhVnXvOTIwprBs2sOKVZeELDk34gVdAUyTdGop4eYJbmG%2BijO9ITm4Vov04r7eVgvAqXjCP9KI4QZfZ1NxOM7qLnqmQxQf%2B2sglBm1czysuLE5YWmFFwnP6zpuWHpboiF6zW9s8lS3E%2BBc%2BATkXGk%2FUytAPqjk6ePpU2DJO8qcwOCcjGP74K53tL4GrMl6Q7x5Twh%2BKyaMOVbbODeQY%2B%2BpD%2Ffx2Z9AZPYCW727v0XdUXwAiLpwfwXpEZNrDkcVvr0c3%2B90A%2FKTtkT6Xt20oO1BNTktcbwOLN66v4iz5hLSzKoxCOovDR9VHic8B8eyotPzHsDHIOssCXBopPS5fY5xl6evFqPOcrqdzFM31mA9OWTvvnoI8ywkUdiTrpY9DZQbxG%2Bz1xs5zP26wMEeTkxqAgwh3woam06sMBr6GHH1T0nJmiHb8a0TIz0OmgVoLkL%2FvJ6beiMixz%2B6t9aC%2BETBPgyxNmX7MCBMO%2Bwt74GOqUBwTMUgn9YiAz8gv2NOX%2BgY0hqAULkRELiaTa%2B2krAxRFk9BAb47Vvworc22Gu3JPVAp3ax2WBCtMvowI9Z0QcFUokQWK22rFdy%2F4OnjDa%2FVGz3tSecfymhES%2FmRJaJWS%2Bn8zRKfSJimR1Zduq2PCJdUTl77%2FPQBQkjADJipn6250FYycBSXbjbsr1YKFYTg4%2FomiNXnBM%2Bvjt7bUMV7RLW0v53AHn&X-Amz-Signature=ced44bac94b35dfca6a02cb75499da56cef1ab9833288444616df7f763c7b2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
