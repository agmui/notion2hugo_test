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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP45CFYY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDeG1ScHCXds3yQlr6mZvYaq%2F9HztA6U5ph8CYGT4FkdgIgNY3OKGH%2B1BbWIFyAQkRzzeiSalViLC5DgHM1Yham5eQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTwxMNG202JetWAuSrcAxVkicg8pDR54Jde8JyV3Q9yu7g87Ar08tcvxWR4WeDWzrzVy1yvF8uLlSIdPD0%2B6euGUabafx3M8mna0A8%2FlbNM16gBMoagnAhlS%2B3ntAVcGuGczcCH4LNN0tpdN%2F4i7t6G2Du2Hgy4Y7sm3TCCD5xP2BMfY3G6%2BR32hB%2BltEcajzocaEw9JTsFoxQNiW2emh3XUFAFgbwcgJf8loj1p1aYjDPpxn0VthSPn5XIA8KsHOoDuNLP71agyd5mKV6%2Bc6sVKnhXQAdXP6drt1ENNMzRR8GyZOTHsCk1RkftyHSc86prSHuxWqn8NGngP8Xwy3Cj5sQXH5MXNKvWC1yOvwb%2FffGEraAvVZ5Hahj6n4zE66hsf5N6zLY%2FH3%2FryfZpn9eOded1Zrc%2BzuaMeT2LaOzeofJkBR%2F0z1%2FBufEstJOlV6%2Fw8yQyDsK3Zxh0A%2F%2BoJ8R6vSIUxs%2FJ3NhStbrP4yeftPign3zKRZ%2B64ZZoBlnFkrjusV5%2Bo%2BlHjLBgzX7crD0Dn1AHdNw8rEm4TINsAw%2FhNv9VRHf8sw2CV82v2aNt4FbzFq4hpGiPMVIxG77Ttk%2FJYc9exCeQqA3gti9dUOzdfryO0QYeMVPOhxXZGIYeOvr3YqCKnSsGr7f%2FMI7gnsAGOqUBPfj4S8TnJoGuYLxlLv4V4LUqFJ6EmaX0%2BHV%2Bdg63xSZWCZJHbzhrV1UNLBGgJMSYAVx%2FvZ5%2FYP8bOE%2BHRgRx7z4sidmxbUcRvEy%2BuM1Q6cWEW42l8frvJNby6gU7DSOVLYbzz7eRDCnaBa%2FsCkwE%2BBx95ibEpbFM0C0t1ztVDv8SD36C6UPhXUejPi1R7IV13CYvgsAR8aknLsLohVnNZfLkjrnw&X-Amz-Signature=6700dd0bd81a8cc96e6085b1ee0fa793d677262eb8c6f3be635889ef88afd5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP45CFYY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDeG1ScHCXds3yQlr6mZvYaq%2F9HztA6U5ph8CYGT4FkdgIgNY3OKGH%2B1BbWIFyAQkRzzeiSalViLC5DgHM1Yham5eQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTwxMNG202JetWAuSrcAxVkicg8pDR54Jde8JyV3Q9yu7g87Ar08tcvxWR4WeDWzrzVy1yvF8uLlSIdPD0%2B6euGUabafx3M8mna0A8%2FlbNM16gBMoagnAhlS%2B3ntAVcGuGczcCH4LNN0tpdN%2F4i7t6G2Du2Hgy4Y7sm3TCCD5xP2BMfY3G6%2BR32hB%2BltEcajzocaEw9JTsFoxQNiW2emh3XUFAFgbwcgJf8loj1p1aYjDPpxn0VthSPn5XIA8KsHOoDuNLP71agyd5mKV6%2Bc6sVKnhXQAdXP6drt1ENNMzRR8GyZOTHsCk1RkftyHSc86prSHuxWqn8NGngP8Xwy3Cj5sQXH5MXNKvWC1yOvwb%2FffGEraAvVZ5Hahj6n4zE66hsf5N6zLY%2FH3%2FryfZpn9eOded1Zrc%2BzuaMeT2LaOzeofJkBR%2F0z1%2FBufEstJOlV6%2Fw8yQyDsK3Zxh0A%2F%2BoJ8R6vSIUxs%2FJ3NhStbrP4yeftPign3zKRZ%2B64ZZoBlnFkrjusV5%2Bo%2BlHjLBgzX7crD0Dn1AHdNw8rEm4TINsAw%2FhNv9VRHf8sw2CV82v2aNt4FbzFq4hpGiPMVIxG77Ttk%2FJYc9exCeQqA3gti9dUOzdfryO0QYeMVPOhxXZGIYeOvr3YqCKnSsGr7f%2FMI7gnsAGOqUBPfj4S8TnJoGuYLxlLv4V4LUqFJ6EmaX0%2BHV%2Bdg63xSZWCZJHbzhrV1UNLBGgJMSYAVx%2FvZ5%2FYP8bOE%2BHRgRx7z4sidmxbUcRvEy%2BuM1Q6cWEW42l8frvJNby6gU7DSOVLYbzz7eRDCnaBa%2FsCkwE%2BBx95ibEpbFM0C0t1ztVDv8SD36C6UPhXUejPi1R7IV13CYvgsAR8aknLsLohVnNZfLkjrnw&X-Amz-Signature=6d82ba000fd46d14d220e1476a24b5eff740ffee32788a6356a7fea35aa2eeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP45CFYY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDeG1ScHCXds3yQlr6mZvYaq%2F9HztA6U5ph8CYGT4FkdgIgNY3OKGH%2B1BbWIFyAQkRzzeiSalViLC5DgHM1Yham5eQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTwxMNG202JetWAuSrcAxVkicg8pDR54Jde8JyV3Q9yu7g87Ar08tcvxWR4WeDWzrzVy1yvF8uLlSIdPD0%2B6euGUabafx3M8mna0A8%2FlbNM16gBMoagnAhlS%2B3ntAVcGuGczcCH4LNN0tpdN%2F4i7t6G2Du2Hgy4Y7sm3TCCD5xP2BMfY3G6%2BR32hB%2BltEcajzocaEw9JTsFoxQNiW2emh3XUFAFgbwcgJf8loj1p1aYjDPpxn0VthSPn5XIA8KsHOoDuNLP71agyd5mKV6%2Bc6sVKnhXQAdXP6drt1ENNMzRR8GyZOTHsCk1RkftyHSc86prSHuxWqn8NGngP8Xwy3Cj5sQXH5MXNKvWC1yOvwb%2FffGEraAvVZ5Hahj6n4zE66hsf5N6zLY%2FH3%2FryfZpn9eOded1Zrc%2BzuaMeT2LaOzeofJkBR%2F0z1%2FBufEstJOlV6%2Fw8yQyDsK3Zxh0A%2F%2BoJ8R6vSIUxs%2FJ3NhStbrP4yeftPign3zKRZ%2B64ZZoBlnFkrjusV5%2Bo%2BlHjLBgzX7crD0Dn1AHdNw8rEm4TINsAw%2FhNv9VRHf8sw2CV82v2aNt4FbzFq4hpGiPMVIxG77Ttk%2FJYc9exCeQqA3gti9dUOzdfryO0QYeMVPOhxXZGIYeOvr3YqCKnSsGr7f%2FMI7gnsAGOqUBPfj4S8TnJoGuYLxlLv4V4LUqFJ6EmaX0%2BHV%2Bdg63xSZWCZJHbzhrV1UNLBGgJMSYAVx%2FvZ5%2FYP8bOE%2BHRgRx7z4sidmxbUcRvEy%2BuM1Q6cWEW42l8frvJNby6gU7DSOVLYbzz7eRDCnaBa%2FsCkwE%2BBx95ibEpbFM0C0t1ztVDv8SD36C6UPhXUejPi1R7IV13CYvgsAR8aknLsLohVnNZfLkjrnw&X-Amz-Signature=fbe9e2c2dfa214e07c07ef5bcfeb83466d0aef1eddc5116844acc2e9ccc1ea62&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
