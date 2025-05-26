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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIR5YBFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHlpdfSN02%2F3i%2BHws2aOBcEunfGdgjEORZXkIVu34ADYAiEA4f3aSjvtWYJn%2BSOtSVFYogADbehLSn%2FU5jHJkKnXa4Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGGn8RbsQJk3lJatNSrcA8U8NQ6yVslETMdmkXC0o9oHH%2FzwKVQLVbL6NgZcsm5J4QLUGT6INoTTn3jIpesgPFFb4jeuu%2BvHqr6l8jn0jx%2Bq6qKSLmE9ZUYRgj2qtO%2F22r2R9ejBMXbGvgrVahOE5oAf%2Fz5Tza9zZFN2zSA4KBpJrm%2B1S6wYZEIsUi0CSptDVG9osSeli41%2FRDhVyfj3tOVXjg62gbX7hNInYCWA%2BcszXKMgJAF6Nk2PS6ptVtChnAllwJ2l0uNVDjh%2FjRVj%2B20i6OHpM5kc%2BJrqXmdh%2BiGSrbiWYA25uNI0K0XpoacaYWICrLnNyDmYRVsl6bgXzrL3zWEtCbRUIfcC9NR4nWsmq9XidaMqE0MwFvXcdHJ97qCFBQvivWxyUG2PP2z5%2B%2BVh0nQwG5F6S0hGexCxNiHDFHE0J8ir9EZVbWMk3HaeqRhRgwvDHea%2BBMwZVaaOeW%2FC3XWxGkwbyC80r6pMjrVz73wC67mlx3E7Ub2KJLhjvHe7LyW5X9qy%2FhTCC14QVK0XcyISxxwFvdiGisYPiQnnW9pCHuts5wuTH6kwAKQMSUomRFUiDS45%2FrGhef9qagyDsB2UTNfDa8j%2FfCt7FmpkdNvyQT8YHB1hbam1HgYQGohCiafwBr1BJ%2F0GMODX0MEGOqUBp5i2g8MPhItNB09k9rPlK3asFIjRJFAOL51IsUGgPd4PKeN0%2BhZ%2F2quGS8dAp042d00Nlom5Su5Emdo%2FRUdDubdMUpN8PqjDeWB9Og8c2NHCjYQHnUHupApuRsZo2iiGTrZOlvOqdL71AodTx%2Bmnrg99DDqOALvoA1Dg1oPpnd2YFWqc%2Fy%2B%2BNmfPfuoLONlVHz4ScJB4ugNHi8ZFzy0WIePVlSMe&X-Amz-Signature=22622ce2fab6510de7389e861eb052054bd5c034e7b3f8d7d9c84635caf1d0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIR5YBFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHlpdfSN02%2F3i%2BHws2aOBcEunfGdgjEORZXkIVu34ADYAiEA4f3aSjvtWYJn%2BSOtSVFYogADbehLSn%2FU5jHJkKnXa4Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGGn8RbsQJk3lJatNSrcA8U8NQ6yVslETMdmkXC0o9oHH%2FzwKVQLVbL6NgZcsm5J4QLUGT6INoTTn3jIpesgPFFb4jeuu%2BvHqr6l8jn0jx%2Bq6qKSLmE9ZUYRgj2qtO%2F22r2R9ejBMXbGvgrVahOE5oAf%2Fz5Tza9zZFN2zSA4KBpJrm%2B1S6wYZEIsUi0CSptDVG9osSeli41%2FRDhVyfj3tOVXjg62gbX7hNInYCWA%2BcszXKMgJAF6Nk2PS6ptVtChnAllwJ2l0uNVDjh%2FjRVj%2B20i6OHpM5kc%2BJrqXmdh%2BiGSrbiWYA25uNI0K0XpoacaYWICrLnNyDmYRVsl6bgXzrL3zWEtCbRUIfcC9NR4nWsmq9XidaMqE0MwFvXcdHJ97qCFBQvivWxyUG2PP2z5%2B%2BVh0nQwG5F6S0hGexCxNiHDFHE0J8ir9EZVbWMk3HaeqRhRgwvDHea%2BBMwZVaaOeW%2FC3XWxGkwbyC80r6pMjrVz73wC67mlx3E7Ub2KJLhjvHe7LyW5X9qy%2FhTCC14QVK0XcyISxxwFvdiGisYPiQnnW9pCHuts5wuTH6kwAKQMSUomRFUiDS45%2FrGhef9qagyDsB2UTNfDa8j%2FfCt7FmpkdNvyQT8YHB1hbam1HgYQGohCiafwBr1BJ%2F0GMODX0MEGOqUBp5i2g8MPhItNB09k9rPlK3asFIjRJFAOL51IsUGgPd4PKeN0%2BhZ%2F2quGS8dAp042d00Nlom5Su5Emdo%2FRUdDubdMUpN8PqjDeWB9Og8c2NHCjYQHnUHupApuRsZo2iiGTrZOlvOqdL71AodTx%2Bmnrg99DDqOALvoA1Dg1oPpnd2YFWqc%2Fy%2B%2BNmfPfuoLONlVHz4ScJB4ugNHi8ZFzy0WIePVlSMe&X-Amz-Signature=1d16f557cb43004c7470926a92a36891089d570e31014602b8898502a592ed6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIR5YBFG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHlpdfSN02%2F3i%2BHws2aOBcEunfGdgjEORZXkIVu34ADYAiEA4f3aSjvtWYJn%2BSOtSVFYogADbehLSn%2FU5jHJkKnXa4Qq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGGn8RbsQJk3lJatNSrcA8U8NQ6yVslETMdmkXC0o9oHH%2FzwKVQLVbL6NgZcsm5J4QLUGT6INoTTn3jIpesgPFFb4jeuu%2BvHqr6l8jn0jx%2Bq6qKSLmE9ZUYRgj2qtO%2F22r2R9ejBMXbGvgrVahOE5oAf%2Fz5Tza9zZFN2zSA4KBpJrm%2B1S6wYZEIsUi0CSptDVG9osSeli41%2FRDhVyfj3tOVXjg62gbX7hNInYCWA%2BcszXKMgJAF6Nk2PS6ptVtChnAllwJ2l0uNVDjh%2FjRVj%2B20i6OHpM5kc%2BJrqXmdh%2BiGSrbiWYA25uNI0K0XpoacaYWICrLnNyDmYRVsl6bgXzrL3zWEtCbRUIfcC9NR4nWsmq9XidaMqE0MwFvXcdHJ97qCFBQvivWxyUG2PP2z5%2B%2BVh0nQwG5F6S0hGexCxNiHDFHE0J8ir9EZVbWMk3HaeqRhRgwvDHea%2BBMwZVaaOeW%2FC3XWxGkwbyC80r6pMjrVz73wC67mlx3E7Ub2KJLhjvHe7LyW5X9qy%2FhTCC14QVK0XcyISxxwFvdiGisYPiQnnW9pCHuts5wuTH6kwAKQMSUomRFUiDS45%2FrGhef9qagyDsB2UTNfDa8j%2FfCt7FmpkdNvyQT8YHB1hbam1HgYQGohCiafwBr1BJ%2F0GMODX0MEGOqUBp5i2g8MPhItNB09k9rPlK3asFIjRJFAOL51IsUGgPd4PKeN0%2BhZ%2F2quGS8dAp042d00Nlom5Su5Emdo%2FRUdDubdMUpN8PqjDeWB9Og8c2NHCjYQHnUHupApuRsZo2iiGTrZOlvOqdL71AodTx%2Bmnrg99DDqOALvoA1Dg1oPpnd2YFWqc%2Fy%2B%2BNmfPfuoLONlVHz4ScJB4ugNHi8ZFzy0WIePVlSMe&X-Amz-Signature=d1ca0e6bf2a9e0a30bb918d61b2e95018de99c32cb92f96192f333813e1abd66&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
