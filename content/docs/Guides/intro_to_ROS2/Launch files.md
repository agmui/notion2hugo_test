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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXXBBYN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZyqFUhGWTcsgr9fbZKt0%2ByaAoBmQwSs9%2F%2FinfpIJsmAiBJhJurdE%2B3ClPXqAjl6%2FJVrPOgNrFtUKif1jfvhNvZYiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMShp1iheyl3VNVyhFKtwDQJOnWUoKMycL9KSSl9qWqD71v85tfXJn81TvIlgcgk1dNxIZtQsYvTgCXaQQpIm2dXsDBvXW7wuCbTocE44kKpr4%2FKpnBu8vKOuQ9hD7lju%2BQdNfmggp%2FcMA5HhECoVP8hXA44yUaE54t7DbS5j%2FfBuRdDjfCxc%2FPIqPBy%2BOYglwGT4T73mSJ%2FdeskBTp%2FLd0a7orT7H%2F25E6m2Eq85Ra%2BHsACnjs3IbqgecYZE2vNvIeT51hVGnh%2F%2FfxDcUikhqRfYXP21XUnuhhwb3W7ZFBF%2BuJZw3XT%2B23m5Xqhk7L3aQNef9Muks7m3q7A1wxzyDDsYxr8soUyN%2BwGxrDhJ59eIrqbVJVbTDyAvZEhEKd9w6RnP6MX%2BT3LIoVisSaoIMYLDVr0%2BK1nJH%2Ft63YqyLpEqGqrrfB%2FLEGd6y2SJkKUjPdHGMRZILNH3L%2FCe9HRA%2FbL5wJPi0aZtiuDJ0cLDG7G0pUr8ag%2BirlwFzbMSJN6WFD4LAvdSNHQBAVhHTTRKRprNel0GDA0NCoXrdv2DPtpmbTyyVHdgBWFUST0ys%2FfdknY7AxnFBjTdnAfuw09ZO31rjm3b8L6F9VAalOKZCw%2BU6vXPlmy86bjOI7CgdCtH3JpcVO4T89mbxxl0wqprBwAY6pgGcpNd9pW8LOvzqwqIVXmQsasjHybOQk62shl68c8qrzTQhn5BON8iAOf9MLtWHH2wdXQg8iN7UP8j%2FCz8lJJMUaIpZuK%2F%2B1e%2BQf4jlG7CcV2IsHD3bkKSS9MAVc7N289PMMGdk1oMWohAAB3aE7lLAWk%2FOeUSr6FF%2FDnHGHJO8xz5%2FW3Zv3aPq2payus675dsxUQMo00321DSe9bMFNzqa1K45z4zs&X-Amz-Signature=6936c70393ff6448283dd10fdcfb2af03acaaf6adb3ae0af9fa5a2081841c08c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXXBBYN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZyqFUhGWTcsgr9fbZKt0%2ByaAoBmQwSs9%2F%2FinfpIJsmAiBJhJurdE%2B3ClPXqAjl6%2FJVrPOgNrFtUKif1jfvhNvZYiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMShp1iheyl3VNVyhFKtwDQJOnWUoKMycL9KSSl9qWqD71v85tfXJn81TvIlgcgk1dNxIZtQsYvTgCXaQQpIm2dXsDBvXW7wuCbTocE44kKpr4%2FKpnBu8vKOuQ9hD7lju%2BQdNfmggp%2FcMA5HhECoVP8hXA44yUaE54t7DbS5j%2FfBuRdDjfCxc%2FPIqPBy%2BOYglwGT4T73mSJ%2FdeskBTp%2FLd0a7orT7H%2F25E6m2Eq85Ra%2BHsACnjs3IbqgecYZE2vNvIeT51hVGnh%2F%2FfxDcUikhqRfYXP21XUnuhhwb3W7ZFBF%2BuJZw3XT%2B23m5Xqhk7L3aQNef9Muks7m3q7A1wxzyDDsYxr8soUyN%2BwGxrDhJ59eIrqbVJVbTDyAvZEhEKd9w6RnP6MX%2BT3LIoVisSaoIMYLDVr0%2BK1nJH%2Ft63YqyLpEqGqrrfB%2FLEGd6y2SJkKUjPdHGMRZILNH3L%2FCe9HRA%2FbL5wJPi0aZtiuDJ0cLDG7G0pUr8ag%2BirlwFzbMSJN6WFD4LAvdSNHQBAVhHTTRKRprNel0GDA0NCoXrdv2DPtpmbTyyVHdgBWFUST0ys%2FfdknY7AxnFBjTdnAfuw09ZO31rjm3b8L6F9VAalOKZCw%2BU6vXPlmy86bjOI7CgdCtH3JpcVO4T89mbxxl0wqprBwAY6pgGcpNd9pW8LOvzqwqIVXmQsasjHybOQk62shl68c8qrzTQhn5BON8iAOf9MLtWHH2wdXQg8iN7UP8j%2FCz8lJJMUaIpZuK%2F%2B1e%2BQf4jlG7CcV2IsHD3bkKSS9MAVc7N289PMMGdk1oMWohAAB3aE7lLAWk%2FOeUSr6FF%2FDnHGHJO8xz5%2FW3Zv3aPq2payus675dsxUQMo00321DSe9bMFNzqa1K45z4zs&X-Amz-Signature=ddfed8cd4c1d9c196805d95365a5a32bf106e3423822f697bcd38476b8901e78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXXBBYN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZyqFUhGWTcsgr9fbZKt0%2ByaAoBmQwSs9%2F%2FinfpIJsmAiBJhJurdE%2B3ClPXqAjl6%2FJVrPOgNrFtUKif1jfvhNvZYiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMShp1iheyl3VNVyhFKtwDQJOnWUoKMycL9KSSl9qWqD71v85tfXJn81TvIlgcgk1dNxIZtQsYvTgCXaQQpIm2dXsDBvXW7wuCbTocE44kKpr4%2FKpnBu8vKOuQ9hD7lju%2BQdNfmggp%2FcMA5HhECoVP8hXA44yUaE54t7DbS5j%2FfBuRdDjfCxc%2FPIqPBy%2BOYglwGT4T73mSJ%2FdeskBTp%2FLd0a7orT7H%2F25E6m2Eq85Ra%2BHsACnjs3IbqgecYZE2vNvIeT51hVGnh%2F%2FfxDcUikhqRfYXP21XUnuhhwb3W7ZFBF%2BuJZw3XT%2B23m5Xqhk7L3aQNef9Muks7m3q7A1wxzyDDsYxr8soUyN%2BwGxrDhJ59eIrqbVJVbTDyAvZEhEKd9w6RnP6MX%2BT3LIoVisSaoIMYLDVr0%2BK1nJH%2Ft63YqyLpEqGqrrfB%2FLEGd6y2SJkKUjPdHGMRZILNH3L%2FCe9HRA%2FbL5wJPi0aZtiuDJ0cLDG7G0pUr8ag%2BirlwFzbMSJN6WFD4LAvdSNHQBAVhHTTRKRprNel0GDA0NCoXrdv2DPtpmbTyyVHdgBWFUST0ys%2FfdknY7AxnFBjTdnAfuw09ZO31rjm3b8L6F9VAalOKZCw%2BU6vXPlmy86bjOI7CgdCtH3JpcVO4T89mbxxl0wqprBwAY6pgGcpNd9pW8LOvzqwqIVXmQsasjHybOQk62shl68c8qrzTQhn5BON8iAOf9MLtWHH2wdXQg8iN7UP8j%2FCz8lJJMUaIpZuK%2F%2B1e%2BQf4jlG7CcV2IsHD3bkKSS9MAVc7N289PMMGdk1oMWohAAB3aE7lLAWk%2FOeUSr6FF%2FDnHGHJO8xz5%2FW3Zv3aPq2payus675dsxUQMo00321DSe9bMFNzqa1K45z4zs&X-Amz-Signature=51fe0612466a0b4a1969eb109faa281c352cf46ac4d40cd3e04022c39aae27d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
