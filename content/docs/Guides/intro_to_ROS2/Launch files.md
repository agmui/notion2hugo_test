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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M33C7LS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1woS%2FdlhAhdwv%2FmHL0CEmLdd5Vknx%2BFP6SXtW65EgIQIgI27riKCjLaLtu03cRZGLDiFItcwvtPF6UEuAiAvCdgQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzGq9FkrRuemlokMSrcA%2FiM0rXoJhodIzW0ucoHcLlZQbni%2BlnUeg889SONXOliT7CYbgIUQ9MnFh%2BGe%2FHcbqIMf6uDZ070SLfQoTUFKL%2FzfQNO6qfP8ZrqDB3xPBUl8VjJAytzWdEnpant1Pw2sq9Cz254tTJgs8gtRA5ZHrGT7WaWOlRNe54w7kb4AAwvudjAIw%2BJ9KSQO%2FGR7w%2Fw6NqICdRr2Tc%2FL2rysUPGA8KSoCRECUZKA6lqXe6NCuVPSkHWEzOaYdagzC6MnW3wPC53H8DMUg7YNgAeWaqzfrAhoWVekHONwS47qbXidtMMJLkX2q3GRR%2FvO1WHa%2FFelDaAGTbCxeeVPLEkDvn3smvHSAY93UUgs%2FVWlC%2FGYZR5pYEAD5cubbIjLs1rsPV0ZBlDyk7g1ClXAoxeEHd2DP55GVvtxnPhlL13XdgVSb7F0kVBJjEomDoR2Ijgxk1INKUSdM0UXheEOKQ3Pg%2B%2FqL736oOswy9OUVoZVhcB5oTdKSPPI39UV9NULm5Pwddp4P3J7bwGInpXpKwIbfkbtHTteYRg8JcMLU6Uvl7onD9uYRBLevaPw7CBlNpcdoiwD2TcgSAV1N4w%2B2gsT%2F6B3KeZp0trsJ%2BKCrUQ1blJ2Lf7eIlNfs%2BFesBOJqvdMJbNqb0GOqUB8VaAEXKfayWhjqB1kiYmbtRyc%2FH0FkepoSP1Sas0he7LSltLy0iv457flUS65KOmJ5MpIwR2%2BuPZWR4PLpsODcy4idat%2FZvGHgI89fO9ssoRFQ8BJ5hSU2AI%2B%2Bre2Li1Qsj829Nu4T0q0EMve5cQeR8HtfQbaUFiFVOocDnyh%2FeXkWhbUYjJXmJ2MTCV04OYB45ZVs3zm0V2cYYy6%2F5q0LOB6cRv&X-Amz-Signature=d4de5a4f423d8f0821be8cd848912e8b73a995360b90854be22ee0eda53cd87f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M33C7LS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1woS%2FdlhAhdwv%2FmHL0CEmLdd5Vknx%2BFP6SXtW65EgIQIgI27riKCjLaLtu03cRZGLDiFItcwvtPF6UEuAiAvCdgQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzGq9FkrRuemlokMSrcA%2FiM0rXoJhodIzW0ucoHcLlZQbni%2BlnUeg889SONXOliT7CYbgIUQ9MnFh%2BGe%2FHcbqIMf6uDZ070SLfQoTUFKL%2FzfQNO6qfP8ZrqDB3xPBUl8VjJAytzWdEnpant1Pw2sq9Cz254tTJgs8gtRA5ZHrGT7WaWOlRNe54w7kb4AAwvudjAIw%2BJ9KSQO%2FGR7w%2Fw6NqICdRr2Tc%2FL2rysUPGA8KSoCRECUZKA6lqXe6NCuVPSkHWEzOaYdagzC6MnW3wPC53H8DMUg7YNgAeWaqzfrAhoWVekHONwS47qbXidtMMJLkX2q3GRR%2FvO1WHa%2FFelDaAGTbCxeeVPLEkDvn3smvHSAY93UUgs%2FVWlC%2FGYZR5pYEAD5cubbIjLs1rsPV0ZBlDyk7g1ClXAoxeEHd2DP55GVvtxnPhlL13XdgVSb7F0kVBJjEomDoR2Ijgxk1INKUSdM0UXheEOKQ3Pg%2B%2FqL736oOswy9OUVoZVhcB5oTdKSPPI39UV9NULm5Pwddp4P3J7bwGInpXpKwIbfkbtHTteYRg8JcMLU6Uvl7onD9uYRBLevaPw7CBlNpcdoiwD2TcgSAV1N4w%2B2gsT%2F6B3KeZp0trsJ%2BKCrUQ1blJ2Lf7eIlNfs%2BFesBOJqvdMJbNqb0GOqUB8VaAEXKfayWhjqB1kiYmbtRyc%2FH0FkepoSP1Sas0he7LSltLy0iv457flUS65KOmJ5MpIwR2%2BuPZWR4PLpsODcy4idat%2FZvGHgI89fO9ssoRFQ8BJ5hSU2AI%2B%2Bre2Li1Qsj829Nu4T0q0EMve5cQeR8HtfQbaUFiFVOocDnyh%2FeXkWhbUYjJXmJ2MTCV04OYB45ZVs3zm0V2cYYy6%2F5q0LOB6cRv&X-Amz-Signature=b40616474e20d7b508827b7f1fa8ccdf45a934228c6dd9f2a916c6aad789998e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M33C7LS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1woS%2FdlhAhdwv%2FmHL0CEmLdd5Vknx%2BFP6SXtW65EgIQIgI27riKCjLaLtu03cRZGLDiFItcwvtPF6UEuAiAvCdgQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzGq9FkrRuemlokMSrcA%2FiM0rXoJhodIzW0ucoHcLlZQbni%2BlnUeg889SONXOliT7CYbgIUQ9MnFh%2BGe%2FHcbqIMf6uDZ070SLfQoTUFKL%2FzfQNO6qfP8ZrqDB3xPBUl8VjJAytzWdEnpant1Pw2sq9Cz254tTJgs8gtRA5ZHrGT7WaWOlRNe54w7kb4AAwvudjAIw%2BJ9KSQO%2FGR7w%2Fw6NqICdRr2Tc%2FL2rysUPGA8KSoCRECUZKA6lqXe6NCuVPSkHWEzOaYdagzC6MnW3wPC53H8DMUg7YNgAeWaqzfrAhoWVekHONwS47qbXidtMMJLkX2q3GRR%2FvO1WHa%2FFelDaAGTbCxeeVPLEkDvn3smvHSAY93UUgs%2FVWlC%2FGYZR5pYEAD5cubbIjLs1rsPV0ZBlDyk7g1ClXAoxeEHd2DP55GVvtxnPhlL13XdgVSb7F0kVBJjEomDoR2Ijgxk1INKUSdM0UXheEOKQ3Pg%2B%2FqL736oOswy9OUVoZVhcB5oTdKSPPI39UV9NULm5Pwddp4P3J7bwGInpXpKwIbfkbtHTteYRg8JcMLU6Uvl7onD9uYRBLevaPw7CBlNpcdoiwD2TcgSAV1N4w%2B2gsT%2F6B3KeZp0trsJ%2BKCrUQ1blJ2Lf7eIlNfs%2BFesBOJqvdMJbNqb0GOqUB8VaAEXKfayWhjqB1kiYmbtRyc%2FH0FkepoSP1Sas0he7LSltLy0iv457flUS65KOmJ5MpIwR2%2BuPZWR4PLpsODcy4idat%2FZvGHgI89fO9ssoRFQ8BJ5hSU2AI%2B%2Bre2Li1Qsj829Nu4T0q0EMve5cQeR8HtfQbaUFiFVOocDnyh%2FeXkWhbUYjJXmJ2MTCV04OYB45ZVs3zm0V2cYYy6%2F5q0LOB6cRv&X-Amz-Signature=a028973227e402e686dadd0d112a0403dd390eb89e24414f6e47d8edb10ae2db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
