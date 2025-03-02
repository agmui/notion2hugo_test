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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEVNC22%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDvNcWB77TwPeQGCnANyutkv20%2BNTMg2tKGApMhpCME4AIgAJ2eC9U6wHJ8pZ6zbUy0F8mMvoEdFEwddWC3%2FwIFnDsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeXVzx%2BC6Zboyl3yircA4QShgMbHyuCUvP%2B%2BKxzOy7QAoA8pOKiOd9f%2FiibnRZ5sKKnrVe96c50LhJMrE1WMKWDgrfxqOjvZl4h%2BJaiBaqX89GiiVy%2FG9K9rU6tTd7usQSF7G98izfMZfiHmuk7AoNuT3M2nQf2yA3P9koVBhedHM%2BQpIgDPhWlY6F%2Fkj3LdYeE6Sj%2B1sCWKMUgcoIaYasSMl952TsQnPRhVgCK5Zzi71AhK2OJs6TH5K9Hdi2XPPJ3waduD3RP%2BtNiWtRBgznjQZf5R4jMBNXWN%2BPT3Tj51Nl%2F1HW0eCu7jJTUmSE9Ht7w20%2BFLC8A4alvybWGwhBqU787rSlCfdGvfHe24niy6oRZVnKfEmozOijoXHyHAbSOvh%2BGbdSbyTxz92tMvn4cq1Bz9yqf3%2FZK3xwtH7e2NmUioAhTisKxlStc6Q6%2B%2FWF%2F3dKLkJWalQDZZKeEiLYd6SHV4gBxZELeQ7ck6s8cgjHVCgOuPlWS23hlLf4D95ycywFwMt%2B%2FDNDtc43fWz817zbi0yItdO%2FTJ3nb2wEXh1t0UYCrTHYlsEHLqc4sxnnAulofrG2JitoLGNUchLWEMX5p2ZILv%2F58xexneSYMGvmDIS2jIdIseljUXJLgoMQqSMRDgpL4SILNMM3Xj74GOqUB9YkcuyMiVHM%2BvnC4t%2FKcxRgXAhE5Yara7i7ej9xpJgfXx75VN1qGd0hLxlAnm1%2BV%2BZnpwZUypBghVw2t1xnE7xpGYYjCHdHsVeJDmuOn6j4%2BTMHzMWDkGAGgaSP9LE%2F2MhCSes7eaEmAQuyhyYJz%2BT%2FH5IPP79%2B%2Fz4BS0yowTQ%2F8O6qR%2BzqGperwyaqWxNlriVXqrl9camUNJmTUi99DRNY2tRa4&X-Amz-Signature=406df4e6ad502935cd6bd3dfdbedfceb0373bb4bab5ec5c5e8880ceb8ea12399&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEVNC22%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDvNcWB77TwPeQGCnANyutkv20%2BNTMg2tKGApMhpCME4AIgAJ2eC9U6wHJ8pZ6zbUy0F8mMvoEdFEwddWC3%2FwIFnDsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeXVzx%2BC6Zboyl3yircA4QShgMbHyuCUvP%2B%2BKxzOy7QAoA8pOKiOd9f%2FiibnRZ5sKKnrVe96c50LhJMrE1WMKWDgrfxqOjvZl4h%2BJaiBaqX89GiiVy%2FG9K9rU6tTd7usQSF7G98izfMZfiHmuk7AoNuT3M2nQf2yA3P9koVBhedHM%2BQpIgDPhWlY6F%2Fkj3LdYeE6Sj%2B1sCWKMUgcoIaYasSMl952TsQnPRhVgCK5Zzi71AhK2OJs6TH5K9Hdi2XPPJ3waduD3RP%2BtNiWtRBgznjQZf5R4jMBNXWN%2BPT3Tj51Nl%2F1HW0eCu7jJTUmSE9Ht7w20%2BFLC8A4alvybWGwhBqU787rSlCfdGvfHe24niy6oRZVnKfEmozOijoXHyHAbSOvh%2BGbdSbyTxz92tMvn4cq1Bz9yqf3%2FZK3xwtH7e2NmUioAhTisKxlStc6Q6%2B%2FWF%2F3dKLkJWalQDZZKeEiLYd6SHV4gBxZELeQ7ck6s8cgjHVCgOuPlWS23hlLf4D95ycywFwMt%2B%2FDNDtc43fWz817zbi0yItdO%2FTJ3nb2wEXh1t0UYCrTHYlsEHLqc4sxnnAulofrG2JitoLGNUchLWEMX5p2ZILv%2F58xexneSYMGvmDIS2jIdIseljUXJLgoMQqSMRDgpL4SILNMM3Xj74GOqUB9YkcuyMiVHM%2BvnC4t%2FKcxRgXAhE5Yara7i7ej9xpJgfXx75VN1qGd0hLxlAnm1%2BV%2BZnpwZUypBghVw2t1xnE7xpGYYjCHdHsVeJDmuOn6j4%2BTMHzMWDkGAGgaSP9LE%2F2MhCSes7eaEmAQuyhyYJz%2BT%2FH5IPP79%2B%2Fz4BS0yowTQ%2F8O6qR%2BzqGperwyaqWxNlriVXqrl9camUNJmTUi99DRNY2tRa4&X-Amz-Signature=a00f2584266f76575b0983ef1c0ba64ee2653e81ccf532fd287573444355b7da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MEVNC22%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDvNcWB77TwPeQGCnANyutkv20%2BNTMg2tKGApMhpCME4AIgAJ2eC9U6wHJ8pZ6zbUy0F8mMvoEdFEwddWC3%2FwIFnDsqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeXVzx%2BC6Zboyl3yircA4QShgMbHyuCUvP%2B%2BKxzOy7QAoA8pOKiOd9f%2FiibnRZ5sKKnrVe96c50LhJMrE1WMKWDgrfxqOjvZl4h%2BJaiBaqX89GiiVy%2FG9K9rU6tTd7usQSF7G98izfMZfiHmuk7AoNuT3M2nQf2yA3P9koVBhedHM%2BQpIgDPhWlY6F%2Fkj3LdYeE6Sj%2B1sCWKMUgcoIaYasSMl952TsQnPRhVgCK5Zzi71AhK2OJs6TH5K9Hdi2XPPJ3waduD3RP%2BtNiWtRBgznjQZf5R4jMBNXWN%2BPT3Tj51Nl%2F1HW0eCu7jJTUmSE9Ht7w20%2BFLC8A4alvybWGwhBqU787rSlCfdGvfHe24niy6oRZVnKfEmozOijoXHyHAbSOvh%2BGbdSbyTxz92tMvn4cq1Bz9yqf3%2FZK3xwtH7e2NmUioAhTisKxlStc6Q6%2B%2FWF%2F3dKLkJWalQDZZKeEiLYd6SHV4gBxZELeQ7ck6s8cgjHVCgOuPlWS23hlLf4D95ycywFwMt%2B%2FDNDtc43fWz817zbi0yItdO%2FTJ3nb2wEXh1t0UYCrTHYlsEHLqc4sxnnAulofrG2JitoLGNUchLWEMX5p2ZILv%2F58xexneSYMGvmDIS2jIdIseljUXJLgoMQqSMRDgpL4SILNMM3Xj74GOqUB9YkcuyMiVHM%2BvnC4t%2FKcxRgXAhE5Yara7i7ej9xpJgfXx75VN1qGd0hLxlAnm1%2BV%2BZnpwZUypBghVw2t1xnE7xpGYYjCHdHsVeJDmuOn6j4%2BTMHzMWDkGAGgaSP9LE%2F2MhCSes7eaEmAQuyhyYJz%2BT%2FH5IPP79%2B%2Fz4BS0yowTQ%2F8O6qR%2BzqGperwyaqWxNlriVXqrl9camUNJmTUi99DRNY2tRa4&X-Amz-Signature=a25fb0da3ef3f95ea707c9ae9493326c64b4dda9de7dc7131fb8018819ceb5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
