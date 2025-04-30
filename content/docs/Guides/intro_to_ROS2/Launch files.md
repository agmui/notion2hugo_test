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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNMEHBI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA0345ir6fGk7KalJeOMJmPpflmQje93AE9GGOqVt7hOAiAtgRxOwcNIzHk5K0NsHTpaRKq1E%2FzHQJzEwLXsd3qdTSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIAf3tEMCf2od0EfKtwDenDz%2ByH2zEw2j6Lc4t9ZaxVtCpbctptnfuHJrAaTLhTO4Aa7GDLNDDzsOjh%2FWfPt1Ol6YfttCQTYFUk8uRvls57GNkhFHEvYLel8D7JBuzHR4dPUK1phaRlk05TvW6Eq8zRn2KiYWqabsWk4yX0zXSg5zJ5N8iMadKH1CZcGDN4CG9ApGIQZ%2BbLC46YQjovB93N9F1lhmjmdLKqOps6SX6dCIyqS0%2FZZhnjAP7jjZZ9BZyupCCZCd%2BSr2OeMxga8lhNf5O5C63TP%2B%2FuPdXPl0UNIiv%2BtqB6DbtVATFq4Av4EDl6kNjpDeobieEVyQgBqJ5d7w6xZigyhs5SBsf3LKh%2B5P%2F%2BHn6dm3mAplx%2BXWm1itw9VDG2m3IJV87T4MU5hg3nWowHnPxLkfJebV6CxRFiN%2B8KdsHQMoiFKFhOoayKEEWHpRNG%2Fxm57djmNh8NZUhFInak4S7EY9A4ZRVsHWYuQoO%2FNH1yI8hZSQ3r%2BS9rsAwajE4V5CWpHwBt0aoIoGdCrOxNdprod9DZPZzVRTGHWUuW0aTCnINfAzxSUivp5dcgcKstFld8Z5gvCtNiA5HPdY%2Fo6kZvn6J9edHtX4uI0sDGj6njyqgNkd0KZAQOqi0TDSgadZ04UrPUw0r%2FGwAY6pgHkcKvq8%2BU1%2FtCYLwRM6%2B2RUW6ewk7iyMpXRwRkK8DIQKqB7SGVsUiD9SWNycDx4wH97bpKB8lyNDVqaBwO5aPI4ROn93DUM4M2%2BH0vVa6UIr0Ejbgczmcdq7GKjazsq5ZgynXB1GS2HMSFeHpXv2EqEkV18MI2Zu3G6KIp5brQ9GBw5DaCcAZhJI3FoHGZ5OthyfuR0nUKlB%2B9rFsKx3jbepLNNLse&X-Amz-Signature=4dd4107244d8ff2964c94302baa6d35a1d3201dc7273f37cd0a3f9842c4c083d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNMEHBI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA0345ir6fGk7KalJeOMJmPpflmQje93AE9GGOqVt7hOAiAtgRxOwcNIzHk5K0NsHTpaRKq1E%2FzHQJzEwLXsd3qdTSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIAf3tEMCf2od0EfKtwDenDz%2ByH2zEw2j6Lc4t9ZaxVtCpbctptnfuHJrAaTLhTO4Aa7GDLNDDzsOjh%2FWfPt1Ol6YfttCQTYFUk8uRvls57GNkhFHEvYLel8D7JBuzHR4dPUK1phaRlk05TvW6Eq8zRn2KiYWqabsWk4yX0zXSg5zJ5N8iMadKH1CZcGDN4CG9ApGIQZ%2BbLC46YQjovB93N9F1lhmjmdLKqOps6SX6dCIyqS0%2FZZhnjAP7jjZZ9BZyupCCZCd%2BSr2OeMxga8lhNf5O5C63TP%2B%2FuPdXPl0UNIiv%2BtqB6DbtVATFq4Av4EDl6kNjpDeobieEVyQgBqJ5d7w6xZigyhs5SBsf3LKh%2B5P%2F%2BHn6dm3mAplx%2BXWm1itw9VDG2m3IJV87T4MU5hg3nWowHnPxLkfJebV6CxRFiN%2B8KdsHQMoiFKFhOoayKEEWHpRNG%2Fxm57djmNh8NZUhFInak4S7EY9A4ZRVsHWYuQoO%2FNH1yI8hZSQ3r%2BS9rsAwajE4V5CWpHwBt0aoIoGdCrOxNdprod9DZPZzVRTGHWUuW0aTCnINfAzxSUivp5dcgcKstFld8Z5gvCtNiA5HPdY%2Fo6kZvn6J9edHtX4uI0sDGj6njyqgNkd0KZAQOqi0TDSgadZ04UrPUw0r%2FGwAY6pgHkcKvq8%2BU1%2FtCYLwRM6%2B2RUW6ewk7iyMpXRwRkK8DIQKqB7SGVsUiD9SWNycDx4wH97bpKB8lyNDVqaBwO5aPI4ROn93DUM4M2%2BH0vVa6UIr0Ejbgczmcdq7GKjazsq5ZgynXB1GS2HMSFeHpXv2EqEkV18MI2Zu3G6KIp5brQ9GBw5DaCcAZhJI3FoHGZ5OthyfuR0nUKlB%2B9rFsKx3jbepLNNLse&X-Amz-Signature=e5751f9ebc810bbd13ce4227acca13a5b28bcdd7e82bd6186c987230a20f5bea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNMEHBI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA0345ir6fGk7KalJeOMJmPpflmQje93AE9GGOqVt7hOAiAtgRxOwcNIzHk5K0NsHTpaRKq1E%2FzHQJzEwLXsd3qdTSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQIAf3tEMCf2od0EfKtwDenDz%2ByH2zEw2j6Lc4t9ZaxVtCpbctptnfuHJrAaTLhTO4Aa7GDLNDDzsOjh%2FWfPt1Ol6YfttCQTYFUk8uRvls57GNkhFHEvYLel8D7JBuzHR4dPUK1phaRlk05TvW6Eq8zRn2KiYWqabsWk4yX0zXSg5zJ5N8iMadKH1CZcGDN4CG9ApGIQZ%2BbLC46YQjovB93N9F1lhmjmdLKqOps6SX6dCIyqS0%2FZZhnjAP7jjZZ9BZyupCCZCd%2BSr2OeMxga8lhNf5O5C63TP%2B%2FuPdXPl0UNIiv%2BtqB6DbtVATFq4Av4EDl6kNjpDeobieEVyQgBqJ5d7w6xZigyhs5SBsf3LKh%2B5P%2F%2BHn6dm3mAplx%2BXWm1itw9VDG2m3IJV87T4MU5hg3nWowHnPxLkfJebV6CxRFiN%2B8KdsHQMoiFKFhOoayKEEWHpRNG%2Fxm57djmNh8NZUhFInak4S7EY9A4ZRVsHWYuQoO%2FNH1yI8hZSQ3r%2BS9rsAwajE4V5CWpHwBt0aoIoGdCrOxNdprod9DZPZzVRTGHWUuW0aTCnINfAzxSUivp5dcgcKstFld8Z5gvCtNiA5HPdY%2Fo6kZvn6J9edHtX4uI0sDGj6njyqgNkd0KZAQOqi0TDSgadZ04UrPUw0r%2FGwAY6pgHkcKvq8%2BU1%2FtCYLwRM6%2B2RUW6ewk7iyMpXRwRkK8DIQKqB7SGVsUiD9SWNycDx4wH97bpKB8lyNDVqaBwO5aPI4ROn93DUM4M2%2BH0vVa6UIr0Ejbgczmcdq7GKjazsq5ZgynXB1GS2HMSFeHpXv2EqEkV18MI2Zu3G6KIp5brQ9GBw5DaCcAZhJI3FoHGZ5OthyfuR0nUKlB%2B9rFsKx3jbepLNNLse&X-Amz-Signature=d47bdfb96e4a9abd1f8b7ac8cc25921af461de602a2d3154c52424fb7bb16bda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
