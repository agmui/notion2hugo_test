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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V65H3S7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJsCGn7zsjH%2BurKhhyFie03PThzlK8dMMUjKAsoBEgAAiA5noTAeyzaK4eSgcwbAvH05InnOwu1gjHcnFB2M5QJ6yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX2Ta51eJN3c2YxFHKtwDSdNcAeTF%2BbeWxKdrxP7Yvsh6FFd8AnfqB5Fddx7u1rSrVD3YNErnZuhOw%2FO9wGhh3BkPT91THwUu4oXtBBdk3ZNf9o%2FQRtgmJ%2Fosh5WeetwLwvAUNDn09RrJHrL6rU48wIjOWMYWTERba7B6VWWIxrzXQz%2BKW9g%2B18xrHdcBQLppi4TW8%2FznibMrdbyl%2BnPvLYdWk7zxNW3ZEQ1SY0gznIXJMU6UDSAt%2Fp9HyMTpWQM6PHJz6NyuiI5BdTLVjwZbPxvQ9NyZTbu4esjQl81bWtFsRVnCAEDs6PwoxoWobmtSdqC80mrrRHU2NMXt4zk5Y6yE2ccPe2BpcTHE22pYjhXTrrpuCA7de5DgwoEgha%2BGVfqbSgTJd%2F4s7hbExHnHx42YlQIdS2ssLV6cUis3BKe4IoMS71KGGrgcobr%2FD0up6DA%2FPILFArrIHRW0jkhzjWu7dBD529vFG8VagZihMWqM0c9jyYP7nsyPZSUsd%2FqNsPF0SJNXY7IJhNo1G%2B8xuMxyWV7hhYKPnTLqj2IcD5dH%2Fs4FHd3EUq3mQ3X2%2FXamMUtCVar5OKT3QndM9LFwTAlXqaxGPHRmacOuSAO7%2Fj50UEtMgw%2BTJF%2BjwFXFQKizqv3ZFTIL5IT3lp4wv5iLwAY6pgGHgs5mtqRupKSkoGBWoYs3bJHGQgFElbOxevJlN1fGE6ynqT8ZBUxAqVhMnqIO5FMfavV80CIrJpW%2BsI5aHna5akMZtin1UUuXCeeKHnb7RMvI9MBgDW60ZApvVL%2BfIFAL6KS%2BO1iAwKaK%2BQpyGdDv%2Ft2Ve3F4JDkyAKaEcXgPxVkOkZFGQUheBQzdlo4s6LXnHOGNsemp6q7NfunwkGTSswxQ57JK&X-Amz-Signature=1556e654eaf54933f84b6d49241e265c426709a5b734cce51dfeb70344710d95&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V65H3S7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJsCGn7zsjH%2BurKhhyFie03PThzlK8dMMUjKAsoBEgAAiA5noTAeyzaK4eSgcwbAvH05InnOwu1gjHcnFB2M5QJ6yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX2Ta51eJN3c2YxFHKtwDSdNcAeTF%2BbeWxKdrxP7Yvsh6FFd8AnfqB5Fddx7u1rSrVD3YNErnZuhOw%2FO9wGhh3BkPT91THwUu4oXtBBdk3ZNf9o%2FQRtgmJ%2Fosh5WeetwLwvAUNDn09RrJHrL6rU48wIjOWMYWTERba7B6VWWIxrzXQz%2BKW9g%2B18xrHdcBQLppi4TW8%2FznibMrdbyl%2BnPvLYdWk7zxNW3ZEQ1SY0gznIXJMU6UDSAt%2Fp9HyMTpWQM6PHJz6NyuiI5BdTLVjwZbPxvQ9NyZTbu4esjQl81bWtFsRVnCAEDs6PwoxoWobmtSdqC80mrrRHU2NMXt4zk5Y6yE2ccPe2BpcTHE22pYjhXTrrpuCA7de5DgwoEgha%2BGVfqbSgTJd%2F4s7hbExHnHx42YlQIdS2ssLV6cUis3BKe4IoMS71KGGrgcobr%2FD0up6DA%2FPILFArrIHRW0jkhzjWu7dBD529vFG8VagZihMWqM0c9jyYP7nsyPZSUsd%2FqNsPF0SJNXY7IJhNo1G%2B8xuMxyWV7hhYKPnTLqj2IcD5dH%2Fs4FHd3EUq3mQ3X2%2FXamMUtCVar5OKT3QndM9LFwTAlXqaxGPHRmacOuSAO7%2Fj50UEtMgw%2BTJF%2BjwFXFQKizqv3ZFTIL5IT3lp4wv5iLwAY6pgGHgs5mtqRupKSkoGBWoYs3bJHGQgFElbOxevJlN1fGE6ynqT8ZBUxAqVhMnqIO5FMfavV80CIrJpW%2BsI5aHna5akMZtin1UUuXCeeKHnb7RMvI9MBgDW60ZApvVL%2BfIFAL6KS%2BO1iAwKaK%2BQpyGdDv%2Ft2Ve3F4JDkyAKaEcXgPxVkOkZFGQUheBQzdlo4s6LXnHOGNsemp6q7NfunwkGTSswxQ57JK&X-Amz-Signature=842796d31088fcb8cd773dee07e53c273a16831947cc7f849058e0d1ddca3317&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V65H3S7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJsCGn7zsjH%2BurKhhyFie03PThzlK8dMMUjKAsoBEgAAiA5noTAeyzaK4eSgcwbAvH05InnOwu1gjHcnFB2M5QJ6yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX2Ta51eJN3c2YxFHKtwDSdNcAeTF%2BbeWxKdrxP7Yvsh6FFd8AnfqB5Fddx7u1rSrVD3YNErnZuhOw%2FO9wGhh3BkPT91THwUu4oXtBBdk3ZNf9o%2FQRtgmJ%2Fosh5WeetwLwvAUNDn09RrJHrL6rU48wIjOWMYWTERba7B6VWWIxrzXQz%2BKW9g%2B18xrHdcBQLppi4TW8%2FznibMrdbyl%2BnPvLYdWk7zxNW3ZEQ1SY0gznIXJMU6UDSAt%2Fp9HyMTpWQM6PHJz6NyuiI5BdTLVjwZbPxvQ9NyZTbu4esjQl81bWtFsRVnCAEDs6PwoxoWobmtSdqC80mrrRHU2NMXt4zk5Y6yE2ccPe2BpcTHE22pYjhXTrrpuCA7de5DgwoEgha%2BGVfqbSgTJd%2F4s7hbExHnHx42YlQIdS2ssLV6cUis3BKe4IoMS71KGGrgcobr%2FD0up6DA%2FPILFArrIHRW0jkhzjWu7dBD529vFG8VagZihMWqM0c9jyYP7nsyPZSUsd%2FqNsPF0SJNXY7IJhNo1G%2B8xuMxyWV7hhYKPnTLqj2IcD5dH%2Fs4FHd3EUq3mQ3X2%2FXamMUtCVar5OKT3QndM9LFwTAlXqaxGPHRmacOuSAO7%2Fj50UEtMgw%2BTJF%2BjwFXFQKizqv3ZFTIL5IT3lp4wv5iLwAY6pgGHgs5mtqRupKSkoGBWoYs3bJHGQgFElbOxevJlN1fGE6ynqT8ZBUxAqVhMnqIO5FMfavV80CIrJpW%2BsI5aHna5akMZtin1UUuXCeeKHnb7RMvI9MBgDW60ZApvVL%2BfIFAL6KS%2BO1iAwKaK%2BQpyGdDv%2Ft2Ve3F4JDkyAKaEcXgPxVkOkZFGQUheBQzdlo4s6LXnHOGNsemp6q7NfunwkGTSswxQ57JK&X-Amz-Signature=e69f577da20b20136468248d784c5be1552f61a5ca73fe4f5f20ae3d0012af85&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
