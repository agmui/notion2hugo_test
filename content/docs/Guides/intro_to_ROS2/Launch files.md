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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6M2XD6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD1Iep1HylcAfLbH9qtrfGEB6FFiFWsqHd8CZJx8luE9QIgOnKFPG8q742tqx8hZHYjKKdNiy3nRHfDQEjAKBOqWSMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeKi2BuevnldCSuKircA84fuiSGmn9b0oGrlv5PitdWGMJi05cPp0PCz7ttaLEO8Qopw%2FQ1yx%2FlDvw8ct7YicgWrGNc4HTbeDvVDQ%2FBp4DtHnEmRWy2Xrny7dKgJGffvU5KJalKPoO9HX9RzWeWrwYrQuQ1yBxaYUKXbc9VJLZooFKleTVdHlGyJ1RAeEU77C0U%2BDqQpL6d0VUCNYy%2BjY7OyRcDg%2FxsBXdTb%2F55s2p0jGMFkSyfQe62Aln2UZ%2F%2FbX8PqO61X1g8egy5n90S1Zb21q9%2FwOYSUqWscDuI2K4pVNm2qyc%2FdRF%2B3g%2BA%2B%2Fj%2FsFUz4JSX4No01HncFdCbiO7sfBAlErbMQ3q%2B1btBTiHuE4SPYkarHkfa5PfTGFHNjj7NlboIlAfn00WwGozJ1e241uxqU02StLnGgMi6rj0S7Egjo5vbPNvcfNsrD%2FRib3lEu8PR0k%2FNsYUKovtVHCZU96qmLKFuo9MI%2FRep5J2jEVWJKwVO1zNRuuY4Hb%2FWu7IKJNulXlQEeHStvp%2Bo%2F9YaKWTw1vgTLvTfWEvDGW4RnUFZmZRUH6SuYeSqamCznxBM1IYZ8znEQJNRgl%2F7JZRxbo1ueouI%2FZ5Wu%2FYGqo1BIrQT3qBYDe1L%2Fc%2BJy4E9Zww1iUG3w5anMTXEMI7Wm70GOqUBHgJV%2FhE17ITF1eL1PFQcbSi6qWDW785JwXOUxYy2KX%2F1o92VVtTsLZdxQ8TjMSHTVehK6FM%2BkLcJKUYRErBZ24HkPt2HzAeHY5iAYT6OHd%2F8oFtNiGtz%2BYlDRmAbNnR6ItrUXPMKC1dO1LOG%2F4vcyORN1h2UL6zYLW%2BzdH5IluzQbpDBNmh7wl9Juakflk4ej5gEY0Y1m2t7vMUdut3hsxi27fi3&X-Amz-Signature=0b3e8cddcef2d792065e0365711f1dc7202b74997eb4098a0d1e6811398ca2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6M2XD6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD1Iep1HylcAfLbH9qtrfGEB6FFiFWsqHd8CZJx8luE9QIgOnKFPG8q742tqx8hZHYjKKdNiy3nRHfDQEjAKBOqWSMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeKi2BuevnldCSuKircA84fuiSGmn9b0oGrlv5PitdWGMJi05cPp0PCz7ttaLEO8Qopw%2FQ1yx%2FlDvw8ct7YicgWrGNc4HTbeDvVDQ%2FBp4DtHnEmRWy2Xrny7dKgJGffvU5KJalKPoO9HX9RzWeWrwYrQuQ1yBxaYUKXbc9VJLZooFKleTVdHlGyJ1RAeEU77C0U%2BDqQpL6d0VUCNYy%2BjY7OyRcDg%2FxsBXdTb%2F55s2p0jGMFkSyfQe62Aln2UZ%2F%2FbX8PqO61X1g8egy5n90S1Zb21q9%2FwOYSUqWscDuI2K4pVNm2qyc%2FdRF%2B3g%2BA%2B%2Fj%2FsFUz4JSX4No01HncFdCbiO7sfBAlErbMQ3q%2B1btBTiHuE4SPYkarHkfa5PfTGFHNjj7NlboIlAfn00WwGozJ1e241uxqU02StLnGgMi6rj0S7Egjo5vbPNvcfNsrD%2FRib3lEu8PR0k%2FNsYUKovtVHCZU96qmLKFuo9MI%2FRep5J2jEVWJKwVO1zNRuuY4Hb%2FWu7IKJNulXlQEeHStvp%2Bo%2F9YaKWTw1vgTLvTfWEvDGW4RnUFZmZRUH6SuYeSqamCznxBM1IYZ8znEQJNRgl%2F7JZRxbo1ueouI%2FZ5Wu%2FYGqo1BIrQT3qBYDe1L%2Fc%2BJy4E9Zww1iUG3w5anMTXEMI7Wm70GOqUBHgJV%2FhE17ITF1eL1PFQcbSi6qWDW785JwXOUxYy2KX%2F1o92VVtTsLZdxQ8TjMSHTVehK6FM%2BkLcJKUYRErBZ24HkPt2HzAeHY5iAYT6OHd%2F8oFtNiGtz%2BYlDRmAbNnR6ItrUXPMKC1dO1LOG%2F4vcyORN1h2UL6zYLW%2BzdH5IluzQbpDBNmh7wl9Juakflk4ej5gEY0Y1m2t7vMUdut3hsxi27fi3&X-Amz-Signature=e500e802bdc6fef18691ff5c42ead1d61b038218da61616132eb0e4bea1ab230&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6M2XD6%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD1Iep1HylcAfLbH9qtrfGEB6FFiFWsqHd8CZJx8luE9QIgOnKFPG8q742tqx8hZHYjKKdNiy3nRHfDQEjAKBOqWSMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeKi2BuevnldCSuKircA84fuiSGmn9b0oGrlv5PitdWGMJi05cPp0PCz7ttaLEO8Qopw%2FQ1yx%2FlDvw8ct7YicgWrGNc4HTbeDvVDQ%2FBp4DtHnEmRWy2Xrny7dKgJGffvU5KJalKPoO9HX9RzWeWrwYrQuQ1yBxaYUKXbc9VJLZooFKleTVdHlGyJ1RAeEU77C0U%2BDqQpL6d0VUCNYy%2BjY7OyRcDg%2FxsBXdTb%2F55s2p0jGMFkSyfQe62Aln2UZ%2F%2FbX8PqO61X1g8egy5n90S1Zb21q9%2FwOYSUqWscDuI2K4pVNm2qyc%2FdRF%2B3g%2BA%2B%2Fj%2FsFUz4JSX4No01HncFdCbiO7sfBAlErbMQ3q%2B1btBTiHuE4SPYkarHkfa5PfTGFHNjj7NlboIlAfn00WwGozJ1e241uxqU02StLnGgMi6rj0S7Egjo5vbPNvcfNsrD%2FRib3lEu8PR0k%2FNsYUKovtVHCZU96qmLKFuo9MI%2FRep5J2jEVWJKwVO1zNRuuY4Hb%2FWu7IKJNulXlQEeHStvp%2Bo%2F9YaKWTw1vgTLvTfWEvDGW4RnUFZmZRUH6SuYeSqamCznxBM1IYZ8znEQJNRgl%2F7JZRxbo1ueouI%2FZ5Wu%2FYGqo1BIrQT3qBYDe1L%2Fc%2BJy4E9Zww1iUG3w5anMTXEMI7Wm70GOqUBHgJV%2FhE17ITF1eL1PFQcbSi6qWDW785JwXOUxYy2KX%2F1o92VVtTsLZdxQ8TjMSHTVehK6FM%2BkLcJKUYRErBZ24HkPt2HzAeHY5iAYT6OHd%2F8oFtNiGtz%2BYlDRmAbNnR6ItrUXPMKC1dO1LOG%2F4vcyORN1h2UL6zYLW%2BzdH5IluzQbpDBNmh7wl9Juakflk4ej5gEY0Y1m2t7vMUdut3hsxi27fi3&X-Amz-Signature=49eed9102946b394dffd0c62fc1fb6fc12f7f5ecb4a3c26559f070bfe0411646&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
