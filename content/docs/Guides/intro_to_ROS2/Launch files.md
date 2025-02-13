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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWPCHZ2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmlp6Z3%2BDrTadF5z7xyldDiyuW37hTFnVEt60ymRROLAiAyMCuG4fwNCCn5lHr%2F4gHtEM%2FH0gR93oEbFuAYbcJaqSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnoATTRT%2FOuYX02yYKtwDhrCnrcAZzQAIuNwdhmsV6UQIBeXLgDgt4%2Fzrhu5HRj2YdbIwHHYLXdUNyIwXWQWVsv1c59MyWa4h33RLhk%2B902Ih6RDQL5fR28RJyVyvPOdsR1HCJ0KUFFTtMdcfi%2BOGmLch0ocDilSwBbXYzu1WOY6UXtaXr8gu94e29yyjxkmyu7Bdo51jdBK7NOHvRVhUvokNefe%2FJlDGdDYbUi%2BJAPOQXV1J3UjUBH8DGkbvMhDHXTcxpjWJe7Mt6cbOk5N27yZAnxl9cL1GhdCj61AIRlWAsfdrhvmL4wruuGV0fEpFcUB4M%2Fee7CwT77eHgRAsdzcUcCkz1uxP86KElfPZ3XSwRcf8Onm5sWsKPNSyVLf7kg8GJBFYWQsTW0ywTIktupiVf%2BxyCSR0an4%2FZ3yr43BrZGxyiAhPAsP9MAz7G3E6m3AKV9psXtd0Xs9ThwzIId3N4ImRR7UsWwwsCoxDSA0C02dE6QaGxS6nZJ8g8Xu%2BH7BPNQi%2BudEZxpJNbWSM9ZbQs5JAPzwkxB8BrBS2Hk0mC1jm9v1LS%2BnPMJE49u1GDS5wrQ6i2ipagw4Au7HKafff38QzgpnNsEscmKIbiJCOTgf%2FmUrrI9OvtADOJUhyEKxebupAD88iJPAw55i1vQY6pgHO0evRXsD05GYe5qhkBU0Ln83exrXTttbDLzCn8HC789ycJY1QAQoWOr0z6Vd8XE0ni%2F7pALWCH7sgb3ZaZ9i796To%2FL8jMCZxkzlwpb%2FBee3Ip7aICy88dsAJtDtSm4vlei3Z0UvWp19FGdVOqhB2brL7AMpYB6TN%2BUY6sIdci6%2FX5x3oJ10bSLRLOPsM4cb%2BBrJHFCed3dZmoPsGcLeoLOjdPjN8&X-Amz-Signature=d8c6178a669dc0164b995f4ea9f54f3b57260dd513ef22d302b52335190dfd43&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWPCHZ2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmlp6Z3%2BDrTadF5z7xyldDiyuW37hTFnVEt60ymRROLAiAyMCuG4fwNCCn5lHr%2F4gHtEM%2FH0gR93oEbFuAYbcJaqSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnoATTRT%2FOuYX02yYKtwDhrCnrcAZzQAIuNwdhmsV6UQIBeXLgDgt4%2Fzrhu5HRj2YdbIwHHYLXdUNyIwXWQWVsv1c59MyWa4h33RLhk%2B902Ih6RDQL5fR28RJyVyvPOdsR1HCJ0KUFFTtMdcfi%2BOGmLch0ocDilSwBbXYzu1WOY6UXtaXr8gu94e29yyjxkmyu7Bdo51jdBK7NOHvRVhUvokNefe%2FJlDGdDYbUi%2BJAPOQXV1J3UjUBH8DGkbvMhDHXTcxpjWJe7Mt6cbOk5N27yZAnxl9cL1GhdCj61AIRlWAsfdrhvmL4wruuGV0fEpFcUB4M%2Fee7CwT77eHgRAsdzcUcCkz1uxP86KElfPZ3XSwRcf8Onm5sWsKPNSyVLf7kg8GJBFYWQsTW0ywTIktupiVf%2BxyCSR0an4%2FZ3yr43BrZGxyiAhPAsP9MAz7G3E6m3AKV9psXtd0Xs9ThwzIId3N4ImRR7UsWwwsCoxDSA0C02dE6QaGxS6nZJ8g8Xu%2BH7BPNQi%2BudEZxpJNbWSM9ZbQs5JAPzwkxB8BrBS2Hk0mC1jm9v1LS%2BnPMJE49u1GDS5wrQ6i2ipagw4Au7HKafff38QzgpnNsEscmKIbiJCOTgf%2FmUrrI9OvtADOJUhyEKxebupAD88iJPAw55i1vQY6pgHO0evRXsD05GYe5qhkBU0Ln83exrXTttbDLzCn8HC789ycJY1QAQoWOr0z6Vd8XE0ni%2F7pALWCH7sgb3ZaZ9i796To%2FL8jMCZxkzlwpb%2FBee3Ip7aICy88dsAJtDtSm4vlei3Z0UvWp19FGdVOqhB2brL7AMpYB6TN%2BUY6sIdci6%2FX5x3oJ10bSLRLOPsM4cb%2BBrJHFCed3dZmoPsGcLeoLOjdPjN8&X-Amz-Signature=2a50ae5bf8cddd41e245c263adffc29b5c734d30428012aa31369d6a4d4554f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWPCHZ2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmlp6Z3%2BDrTadF5z7xyldDiyuW37hTFnVEt60ymRROLAiAyMCuG4fwNCCn5lHr%2F4gHtEM%2FH0gR93oEbFuAYbcJaqSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnoATTRT%2FOuYX02yYKtwDhrCnrcAZzQAIuNwdhmsV6UQIBeXLgDgt4%2Fzrhu5HRj2YdbIwHHYLXdUNyIwXWQWVsv1c59MyWa4h33RLhk%2B902Ih6RDQL5fR28RJyVyvPOdsR1HCJ0KUFFTtMdcfi%2BOGmLch0ocDilSwBbXYzu1WOY6UXtaXr8gu94e29yyjxkmyu7Bdo51jdBK7NOHvRVhUvokNefe%2FJlDGdDYbUi%2BJAPOQXV1J3UjUBH8DGkbvMhDHXTcxpjWJe7Mt6cbOk5N27yZAnxl9cL1GhdCj61AIRlWAsfdrhvmL4wruuGV0fEpFcUB4M%2Fee7CwT77eHgRAsdzcUcCkz1uxP86KElfPZ3XSwRcf8Onm5sWsKPNSyVLf7kg8GJBFYWQsTW0ywTIktupiVf%2BxyCSR0an4%2FZ3yr43BrZGxyiAhPAsP9MAz7G3E6m3AKV9psXtd0Xs9ThwzIId3N4ImRR7UsWwwsCoxDSA0C02dE6QaGxS6nZJ8g8Xu%2BH7BPNQi%2BudEZxpJNbWSM9ZbQs5JAPzwkxB8BrBS2Hk0mC1jm9v1LS%2BnPMJE49u1GDS5wrQ6i2ipagw4Au7HKafff38QzgpnNsEscmKIbiJCOTgf%2FmUrrI9OvtADOJUhyEKxebupAD88iJPAw55i1vQY6pgHO0evRXsD05GYe5qhkBU0Ln83exrXTttbDLzCn8HC789ycJY1QAQoWOr0z6Vd8XE0ni%2F7pALWCH7sgb3ZaZ9i796To%2FL8jMCZxkzlwpb%2FBee3Ip7aICy88dsAJtDtSm4vlei3Z0UvWp19FGdVOqhB2brL7AMpYB6TN%2BUY6sIdci6%2FX5x3oJ10bSLRLOPsM4cb%2BBrJHFCed3dZmoPsGcLeoLOjdPjN8&X-Amz-Signature=59fc689c2d5f7e302006bb2ba66f3bccef46febb07f029fcfbf75a24267b9ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
