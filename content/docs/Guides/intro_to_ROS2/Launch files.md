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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNVIP4SJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDMUCeyax6MjDEbPQlkP5RX1L7vIl%2B5M0fc3mLzGOyJuAiEA78Q5fZbJ9gKDFerIYG2Sbmf%2B0CT1DEGRwCFLwGaXyE8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOQD0rE6fTN0He5PGCrcA6kQOUwiALajoGTrm5kQE3xcX%2FRrld31OXw0V50RQzUeQ1yfEfQoTRUskLIyvk1uanyuUGT6JTJIAvc1AXqiYA%2B%2BTahodngUnjJ9gjBx0qaQJZUFmvBjWJ0H2yDh4XZY0pn%2BYAJzbHCsWuWlFVN3vBv7kGYNoXNyRM%2F3nyndMyQuBDXsg%2FB63XmtSbZJZQ%2FqW3x9oZM7%2Bp6eEO%2Buhi%2FIJiQgtQoW4SAEqbtvzyaS2d2irH%2B5gKII%2BcPvwNmHxAG4qC%2FVF9iyagzzSUd%2FSKFdWb81mUYBZla%2FMCRMaKJ0EbVqqJswjRwWkL6KO%2Bt4baEDlq0tUfS1WJGLfjvq0Cywow9HOiRnAtx2F8ij6wpbXUvvFNZuZj13d6T%2F2qIQJenC9%2B8xs%2B9fVcOFMftok%2BnHc3NstrKBif3PZb7pX5ETST3huLQSPm4UzE9DfDp1EB%2FP360YnhZ9DvmxIvbyDwlVJ52vAMGD7%2BoCWW3yw6pnl7fyOwZeMSaKo39U8HUq3WNBt2OrUtMaMmjE6WnYJR9ZywaFa34mbiXcHN3Mpos7oUzfsmi4Jm72txxIzwC0Bez9AuhAxTA56CSE%2FEebhGvF8CCUPugdum6WSSkGUQPXTcoQ8EgsW4tXkqoR29GzMLDJmcEGOqUBGZJxDvl1NhF0lQhGsZBc6dbhch%2Fv1Te61VuVmcf7Pn5LkPVmsAvJvhI%2B7hbTwNljZjDmLolRpnwTZev40FkQPTqRr86%2FW8P0c9AcsAs10bFe%2BuX6oSdjx8x99KgX43Y0yXF6pbLQo34UR%2FUqWgOLl4Zasn6DStwIsb3RYHm9BZbhxoV2Q8hobzNHeNf5moHuEb95sTvCDJnWVj8%2FTOlykxQ54mMr&X-Amz-Signature=29fdbaebb99625f9e5db50b1de95a8f4b172c178e814a01d47e784a168897491&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNVIP4SJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDMUCeyax6MjDEbPQlkP5RX1L7vIl%2B5M0fc3mLzGOyJuAiEA78Q5fZbJ9gKDFerIYG2Sbmf%2B0CT1DEGRwCFLwGaXyE8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOQD0rE6fTN0He5PGCrcA6kQOUwiALajoGTrm5kQE3xcX%2FRrld31OXw0V50RQzUeQ1yfEfQoTRUskLIyvk1uanyuUGT6JTJIAvc1AXqiYA%2B%2BTahodngUnjJ9gjBx0qaQJZUFmvBjWJ0H2yDh4XZY0pn%2BYAJzbHCsWuWlFVN3vBv7kGYNoXNyRM%2F3nyndMyQuBDXsg%2FB63XmtSbZJZQ%2FqW3x9oZM7%2Bp6eEO%2Buhi%2FIJiQgtQoW4SAEqbtvzyaS2d2irH%2B5gKII%2BcPvwNmHxAG4qC%2FVF9iyagzzSUd%2FSKFdWb81mUYBZla%2FMCRMaKJ0EbVqqJswjRwWkL6KO%2Bt4baEDlq0tUfS1WJGLfjvq0Cywow9HOiRnAtx2F8ij6wpbXUvvFNZuZj13d6T%2F2qIQJenC9%2B8xs%2B9fVcOFMftok%2BnHc3NstrKBif3PZb7pX5ETST3huLQSPm4UzE9DfDp1EB%2FP360YnhZ9DvmxIvbyDwlVJ52vAMGD7%2BoCWW3yw6pnl7fyOwZeMSaKo39U8HUq3WNBt2OrUtMaMmjE6WnYJR9ZywaFa34mbiXcHN3Mpos7oUzfsmi4Jm72txxIzwC0Bez9AuhAxTA56CSE%2FEebhGvF8CCUPugdum6WSSkGUQPXTcoQ8EgsW4tXkqoR29GzMLDJmcEGOqUBGZJxDvl1NhF0lQhGsZBc6dbhch%2Fv1Te61VuVmcf7Pn5LkPVmsAvJvhI%2B7hbTwNljZjDmLolRpnwTZev40FkQPTqRr86%2FW8P0c9AcsAs10bFe%2BuX6oSdjx8x99KgX43Y0yXF6pbLQo34UR%2FUqWgOLl4Zasn6DStwIsb3RYHm9BZbhxoV2Q8hobzNHeNf5moHuEb95sTvCDJnWVj8%2FTOlykxQ54mMr&X-Amz-Signature=719f60df80b394a4595e337ed5891fdb8595c7089fad0605f872b5477d205c21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNVIP4SJ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDMUCeyax6MjDEbPQlkP5RX1L7vIl%2B5M0fc3mLzGOyJuAiEA78Q5fZbJ9gKDFerIYG2Sbmf%2B0CT1DEGRwCFLwGaXyE8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOQD0rE6fTN0He5PGCrcA6kQOUwiALajoGTrm5kQE3xcX%2FRrld31OXw0V50RQzUeQ1yfEfQoTRUskLIyvk1uanyuUGT6JTJIAvc1AXqiYA%2B%2BTahodngUnjJ9gjBx0qaQJZUFmvBjWJ0H2yDh4XZY0pn%2BYAJzbHCsWuWlFVN3vBv7kGYNoXNyRM%2F3nyndMyQuBDXsg%2FB63XmtSbZJZQ%2FqW3x9oZM7%2Bp6eEO%2Buhi%2FIJiQgtQoW4SAEqbtvzyaS2d2irH%2B5gKII%2BcPvwNmHxAG4qC%2FVF9iyagzzSUd%2FSKFdWb81mUYBZla%2FMCRMaKJ0EbVqqJswjRwWkL6KO%2Bt4baEDlq0tUfS1WJGLfjvq0Cywow9HOiRnAtx2F8ij6wpbXUvvFNZuZj13d6T%2F2qIQJenC9%2B8xs%2B9fVcOFMftok%2BnHc3NstrKBif3PZb7pX5ETST3huLQSPm4UzE9DfDp1EB%2FP360YnhZ9DvmxIvbyDwlVJ52vAMGD7%2BoCWW3yw6pnl7fyOwZeMSaKo39U8HUq3WNBt2OrUtMaMmjE6WnYJR9ZywaFa34mbiXcHN3Mpos7oUzfsmi4Jm72txxIzwC0Bez9AuhAxTA56CSE%2FEebhGvF8CCUPugdum6WSSkGUQPXTcoQ8EgsW4tXkqoR29GzMLDJmcEGOqUBGZJxDvl1NhF0lQhGsZBc6dbhch%2Fv1Te61VuVmcf7Pn5LkPVmsAvJvhI%2B7hbTwNljZjDmLolRpnwTZev40FkQPTqRr86%2FW8P0c9AcsAs10bFe%2BuX6oSdjx8x99KgX43Y0yXF6pbLQo34UR%2FUqWgOLl4Zasn6DStwIsb3RYHm9BZbhxoV2Q8hobzNHeNf5moHuEb95sTvCDJnWVj8%2FTOlykxQ54mMr&X-Amz-Signature=feada7e09e504557e7c0db340220346ae44744caaf76dd7e84f671217dc25047&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
