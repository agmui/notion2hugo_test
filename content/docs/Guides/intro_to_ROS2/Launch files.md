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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ635CLW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDhiXwvFSJDp2zMdUs%2B3nRdaIoZNiuRWQ%2B1carb4YprVQIgaq3tIQAmuTyzjJrg9j52FbbwSN%2B71iTqe9pr4Jk9NYoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoIfyCtmI%2Fo1VXKLircA5Z3Qp2ZpUaL8%2FUZ4L5tVqwbrsDmmf1q0Um39T0wS3NmJsRokwcuxQz8oMtaoMGh8oMdlCW4CHND34cPq63thBoP1GsbVa4wNB%2B2yNMW%2FFCAAFH%2FUtnamcjsAxeC7AFgngdM0Lr4xlDE2bVeisVM2kWGkJsOzAnFe53cor0Ce2PG3U83B19wg1UeZcCBt2FQ1o%2B2Z%2BpaI34yVOCIr3jeyvdh5%2BYMU542rH4Zg5K5FJxnqV%2Bu3XnjJBrmcyPUL3jIXZE6qmD7qiaHH3UHA%2BQT7wYwou7YigEJav449%2FBJV4DyxRTBO3d2uctzGxUotY%2F0C%2B0izkKjL0xqzP%2BvbRKjegnzoR1uIfHvHSQs3ycTmRhdVs9aKyKrKDPLr8d6AyAXGdo4Gz8NhhcDyvBn4JAsvThKvJM8iRebzBzK4FWO%2BXO6cZuqjniQtpGPMHXwlj7UKVlGXMfWcNEODUIn03KYdTWuuuvod7UdGUMIUmgi8YZF9aC2ZeME%2FlcIbSkCC8ADiD1hU7U1q%2B0ETOTufCZp208w0ROXvk7KoKR13T20SaTsjTf6Q5P6JDFi1Pl5GSZGug%2Br8K7TW0uTtpotq7EgcsGZaHbJWAcGF7gkUk4umnIZ8BC9Fh5W5ySUEmcsMJHxl8AGOqUBOgieueovA8EKmlusQ%2FpGvsN2vXIHBFk7J1AGszZrb9k8l%2F%2BegockHtgpWkRUdANm6kQ2CfH7YJ73zGBGqBXfHvJ%2Bd%2BLrXelKReIwIig%2B%2FBixbfXja31k%2Fyapq7VF3%2Byi7vTOFjeoKgFfCO95P2GkAQ7zNqc3fuVTqGJSsaEtIaiV1PgRjf2tT53%2F6Aiv33kEijdKM2JnyYOvY6NicT35qgGmvjd1&X-Amz-Signature=1667fc97c67146502cd7b9a5f75b2c494c0ffa9b4145bcccc120b2bf2001b60b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ635CLW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDhiXwvFSJDp2zMdUs%2B3nRdaIoZNiuRWQ%2B1carb4YprVQIgaq3tIQAmuTyzjJrg9j52FbbwSN%2B71iTqe9pr4Jk9NYoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoIfyCtmI%2Fo1VXKLircA5Z3Qp2ZpUaL8%2FUZ4L5tVqwbrsDmmf1q0Um39T0wS3NmJsRokwcuxQz8oMtaoMGh8oMdlCW4CHND34cPq63thBoP1GsbVa4wNB%2B2yNMW%2FFCAAFH%2FUtnamcjsAxeC7AFgngdM0Lr4xlDE2bVeisVM2kWGkJsOzAnFe53cor0Ce2PG3U83B19wg1UeZcCBt2FQ1o%2B2Z%2BpaI34yVOCIr3jeyvdh5%2BYMU542rH4Zg5K5FJxnqV%2Bu3XnjJBrmcyPUL3jIXZE6qmD7qiaHH3UHA%2BQT7wYwou7YigEJav449%2FBJV4DyxRTBO3d2uctzGxUotY%2F0C%2B0izkKjL0xqzP%2BvbRKjegnzoR1uIfHvHSQs3ycTmRhdVs9aKyKrKDPLr8d6AyAXGdo4Gz8NhhcDyvBn4JAsvThKvJM8iRebzBzK4FWO%2BXO6cZuqjniQtpGPMHXwlj7UKVlGXMfWcNEODUIn03KYdTWuuuvod7UdGUMIUmgi8YZF9aC2ZeME%2FlcIbSkCC8ADiD1hU7U1q%2B0ETOTufCZp208w0ROXvk7KoKR13T20SaTsjTf6Q5P6JDFi1Pl5GSZGug%2Br8K7TW0uTtpotq7EgcsGZaHbJWAcGF7gkUk4umnIZ8BC9Fh5W5ySUEmcsMJHxl8AGOqUBOgieueovA8EKmlusQ%2FpGvsN2vXIHBFk7J1AGszZrb9k8l%2F%2BegockHtgpWkRUdANm6kQ2CfH7YJ73zGBGqBXfHvJ%2Bd%2BLrXelKReIwIig%2B%2FBixbfXja31k%2Fyapq7VF3%2Byi7vTOFjeoKgFfCO95P2GkAQ7zNqc3fuVTqGJSsaEtIaiV1PgRjf2tT53%2F6Aiv33kEijdKM2JnyYOvY6NicT35qgGmvjd1&X-Amz-Signature=e79c7a7a573baa140e78c2e88db2e2caffbc9ea0001afc1441d6ad03ae6ec287&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ635CLW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDhiXwvFSJDp2zMdUs%2B3nRdaIoZNiuRWQ%2B1carb4YprVQIgaq3tIQAmuTyzjJrg9j52FbbwSN%2B71iTqe9pr4Jk9NYoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoIfyCtmI%2Fo1VXKLircA5Z3Qp2ZpUaL8%2FUZ4L5tVqwbrsDmmf1q0Um39T0wS3NmJsRokwcuxQz8oMtaoMGh8oMdlCW4CHND34cPq63thBoP1GsbVa4wNB%2B2yNMW%2FFCAAFH%2FUtnamcjsAxeC7AFgngdM0Lr4xlDE2bVeisVM2kWGkJsOzAnFe53cor0Ce2PG3U83B19wg1UeZcCBt2FQ1o%2B2Z%2BpaI34yVOCIr3jeyvdh5%2BYMU542rH4Zg5K5FJxnqV%2Bu3XnjJBrmcyPUL3jIXZE6qmD7qiaHH3UHA%2BQT7wYwou7YigEJav449%2FBJV4DyxRTBO3d2uctzGxUotY%2F0C%2B0izkKjL0xqzP%2BvbRKjegnzoR1uIfHvHSQs3ycTmRhdVs9aKyKrKDPLr8d6AyAXGdo4Gz8NhhcDyvBn4JAsvThKvJM8iRebzBzK4FWO%2BXO6cZuqjniQtpGPMHXwlj7UKVlGXMfWcNEODUIn03KYdTWuuuvod7UdGUMIUmgi8YZF9aC2ZeME%2FlcIbSkCC8ADiD1hU7U1q%2B0ETOTufCZp208w0ROXvk7KoKR13T20SaTsjTf6Q5P6JDFi1Pl5GSZGug%2Br8K7TW0uTtpotq7EgcsGZaHbJWAcGF7gkUk4umnIZ8BC9Fh5W5ySUEmcsMJHxl8AGOqUBOgieueovA8EKmlusQ%2FpGvsN2vXIHBFk7J1AGszZrb9k8l%2F%2BegockHtgpWkRUdANm6kQ2CfH7YJ73zGBGqBXfHvJ%2Bd%2BLrXelKReIwIig%2B%2FBixbfXja31k%2Fyapq7VF3%2Byi7vTOFjeoKgFfCO95P2GkAQ7zNqc3fuVTqGJSsaEtIaiV1PgRjf2tT53%2F6Aiv33kEijdKM2JnyYOvY6NicT35qgGmvjd1&X-Amz-Signature=f11c55a3f25e2f8c8e8ad782e6ea12b8b53eade91f435cc056e9a712bb365d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
