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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7SLG3P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCtmQA2DfoTFzi9%2F7B3vqQbzJYvPtJhIYx2GXxLgxSXmQIgOguvLPRBW%2BuR2rOyJ3nPUT5jn43C6GQpkCaxaF6%2Fc0kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN1vVzsNdcOtWyOg3yrcA9tUTI0nZqGruLKqnUv59MzzzVLGpp%2Bc0APLslgh0Zj8m7SILTu%2BoOZVU5lCPVSu5IccjEEWII9jj%2FpV45ddPmxU5I%2FEaNF0NQKv976GPrW1B1IHY%2F%2BQPzqWPPRFWkY4OyObHr9x7tUZMG6NHkC6gMkXql0ARhzo6FXnorbOF5YV%2BiO4PaGn41vsSxZTUotA8aeuDYOY8E6wXYvRXqQjvVzvlnPUQ6KIAXDM1jL%2FPQ51f33AOWz4kRLaOy4ju1Ly0v0WdwmXttDko%2FPBNLVOW67nO24svGKgfjzady3Kj71bySzGhfdYw69X5SKiQTUtd0lApD%2BR9OWhi6wjfJgNz8oHTFXDe2s2Bw65wotP26okpYZayM5ts8OC8glCPm6%2BmPPu%2B7jYHBzO8EBaPCDysSo3Eb%2BETNO7uy5pTaRFpwUDvjEzVVvK1CFqRCECLlBYacB4O5HuNFt0iJzWS0O3V9vOeuGv4eTvaRmQeTNbHjaTexbJ57JHIymwNz34DlCc8ZAJAgFLsW8VOCDoKFWdPnkA0dIIQ%2BbdJXARzS842SFR9bLhUQs%2BMpRpBz5ggB5ltKON3E4v07727xuNhV7rUI5GlQppgISmyp47I6LhqAubb713%2Bg35vTvz3cYNMMCHosMGOqUB%2BcUExTt6OuMyH%2FfVyMR58xuKYm9KNVlTiAmy8ZhYr9tFdE8XznFHOTWjKXgxXhjKF0GdenUcWDzRDWFdj2BKrFxVdu8t%2BAsqGShqS83hcmsXczgz52BWS2%2B0nVuNcko6t%2B0bqtVJMvYtj7lCkfSaWVk0Z06sLvnDJYu3sFE2WjgCrYbcVYZCcji5xmrMoHKTsJywEfPzbYMoDPvM1AXCs3pWHCL5&X-Amz-Signature=ba4fe305fd3de80c5cde7094b0ab83e68ab2901ce2d8dd8d67f84cd4bbed903a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7SLG3P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCtmQA2DfoTFzi9%2F7B3vqQbzJYvPtJhIYx2GXxLgxSXmQIgOguvLPRBW%2BuR2rOyJ3nPUT5jn43C6GQpkCaxaF6%2Fc0kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN1vVzsNdcOtWyOg3yrcA9tUTI0nZqGruLKqnUv59MzzzVLGpp%2Bc0APLslgh0Zj8m7SILTu%2BoOZVU5lCPVSu5IccjEEWII9jj%2FpV45ddPmxU5I%2FEaNF0NQKv976GPrW1B1IHY%2F%2BQPzqWPPRFWkY4OyObHr9x7tUZMG6NHkC6gMkXql0ARhzo6FXnorbOF5YV%2BiO4PaGn41vsSxZTUotA8aeuDYOY8E6wXYvRXqQjvVzvlnPUQ6KIAXDM1jL%2FPQ51f33AOWz4kRLaOy4ju1Ly0v0WdwmXttDko%2FPBNLVOW67nO24svGKgfjzady3Kj71bySzGhfdYw69X5SKiQTUtd0lApD%2BR9OWhi6wjfJgNz8oHTFXDe2s2Bw65wotP26okpYZayM5ts8OC8glCPm6%2BmPPu%2B7jYHBzO8EBaPCDysSo3Eb%2BETNO7uy5pTaRFpwUDvjEzVVvK1CFqRCECLlBYacB4O5HuNFt0iJzWS0O3V9vOeuGv4eTvaRmQeTNbHjaTexbJ57JHIymwNz34DlCc8ZAJAgFLsW8VOCDoKFWdPnkA0dIIQ%2BbdJXARzS842SFR9bLhUQs%2BMpRpBz5ggB5ltKON3E4v07727xuNhV7rUI5GlQppgISmyp47I6LhqAubb713%2Bg35vTvz3cYNMMCHosMGOqUB%2BcUExTt6OuMyH%2FfVyMR58xuKYm9KNVlTiAmy8ZhYr9tFdE8XznFHOTWjKXgxXhjKF0GdenUcWDzRDWFdj2BKrFxVdu8t%2BAsqGShqS83hcmsXczgz52BWS2%2B0nVuNcko6t%2B0bqtVJMvYtj7lCkfSaWVk0Z06sLvnDJYu3sFE2WjgCrYbcVYZCcji5xmrMoHKTsJywEfPzbYMoDPvM1AXCs3pWHCL5&X-Amz-Signature=aa3d2b89bffd3e9ed9b4085e3548222749e5ce3061e80aa8a893e7db7245bb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7SLG3P%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCtmQA2DfoTFzi9%2F7B3vqQbzJYvPtJhIYx2GXxLgxSXmQIgOguvLPRBW%2BuR2rOyJ3nPUT5jn43C6GQpkCaxaF6%2Fc0kq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDN1vVzsNdcOtWyOg3yrcA9tUTI0nZqGruLKqnUv59MzzzVLGpp%2Bc0APLslgh0Zj8m7SILTu%2BoOZVU5lCPVSu5IccjEEWII9jj%2FpV45ddPmxU5I%2FEaNF0NQKv976GPrW1B1IHY%2F%2BQPzqWPPRFWkY4OyObHr9x7tUZMG6NHkC6gMkXql0ARhzo6FXnorbOF5YV%2BiO4PaGn41vsSxZTUotA8aeuDYOY8E6wXYvRXqQjvVzvlnPUQ6KIAXDM1jL%2FPQ51f33AOWz4kRLaOy4ju1Ly0v0WdwmXttDko%2FPBNLVOW67nO24svGKgfjzady3Kj71bySzGhfdYw69X5SKiQTUtd0lApD%2BR9OWhi6wjfJgNz8oHTFXDe2s2Bw65wotP26okpYZayM5ts8OC8glCPm6%2BmPPu%2B7jYHBzO8EBaPCDysSo3Eb%2BETNO7uy5pTaRFpwUDvjEzVVvK1CFqRCECLlBYacB4O5HuNFt0iJzWS0O3V9vOeuGv4eTvaRmQeTNbHjaTexbJ57JHIymwNz34DlCc8ZAJAgFLsW8VOCDoKFWdPnkA0dIIQ%2BbdJXARzS842SFR9bLhUQs%2BMpRpBz5ggB5ltKON3E4v07727xuNhV7rUI5GlQppgISmyp47I6LhqAubb713%2Bg35vTvz3cYNMMCHosMGOqUB%2BcUExTt6OuMyH%2FfVyMR58xuKYm9KNVlTiAmy8ZhYr9tFdE8XznFHOTWjKXgxXhjKF0GdenUcWDzRDWFdj2BKrFxVdu8t%2BAsqGShqS83hcmsXczgz52BWS2%2B0nVuNcko6t%2B0bqtVJMvYtj7lCkfSaWVk0Z06sLvnDJYu3sFE2WjgCrYbcVYZCcji5xmrMoHKTsJywEfPzbYMoDPvM1AXCs3pWHCL5&X-Amz-Signature=f26a3352cd41ea32d18586e16081fe5abe743af786a9788b924b8095ca49713d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
