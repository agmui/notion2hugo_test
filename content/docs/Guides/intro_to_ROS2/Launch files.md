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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPG7IIX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsKuo28gFdGOX9ZTdSe55BH9IQC9CPARvjyD0wvC9OaAiEAue2ZBL2fbnxkrOzlP3pxIQ3%2B8TjLhf2d3OEyNxxHpqsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPMu9mJCYzpu7Y1PfCrcA6cfw70JBaMl00UJSK26fHCPbrMmbrzNR8fSUk%2Bzxu8dKWz%2B1fDdJdYjIVod4SzSxh55462svX5gnxkAhUtUPanI8nUaZup661mZN52oZg42z7EhzYSxtjNJvFhDpIyg0ISxMA39ef4Yxxqecl6zG%2FR%2BrSD5PkElSP5kJ%2BdCAACe1LL%2FbBUDASq7P2evG6OT1B0tzR18YXmUGWZGRoHjUNCBKFqUFy0UBPahjEBBO3gMBg6gn3i5rFbi8a3mGJ0E%2B92pQnHGa%2BeXDeBj2hZXCIMJeScnAzoJC8lIRhmEK3QVpD2bneBSRUaq5Bea3qCxppXCGKHGb81siAV0969vB0yoZF26b%2BiTxE%2Blx4Djv5gKYZtFH1lVJPsCXNzFcWNHSH4gas8FOjjGJHH3jqhFJn2RIADfkVULFhTm6Mcs4LhVEtjdIqk4g2iRxoqxSb2iGVq3Abusvmn9Jii8JTPZPFne6jFUrKjVNkOPat7LegqsYsOxbiJWVOmOO6h2YJqeqjh%2FXXgrTuyxIUmhK2apVjYayrU2lkTiMw3ZAx99vG4oSs415B%2FypFKIscWjuVIoe2ozC9s1C%2BbsqQMllJEQgpPI2%2BV9PvcLoLFxVgVCe%2B26EGlWY9NMN3mOC5GhMPKA1sEGOqUBmRq1M39SgM%2BR0I2b%2Bv6uVfxcD5S%2BOrRbHCAs77JY6X211sJLw2zAg79%2B7pRU5xs9CfgWz%2BPzqcAT%2F8%2F1v%2FbxxSiv7iqdyagHYrx7ATeZZguvPbiEa5TUGn3I2yralhfHZtyie%2BMuHcjVUgi%2FMhUhyD5TmRVcS7%2BiPw9X97NjeboAd3fqPqYZ%2BKKeO2uD2xld9uX1m2Wkcq437weBBDM3c1vUKov9&X-Amz-Signature=b588a69d4b1d4fcb9908a4a099b4dfbde9715365c11a1f8c6d5cf98c09270ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPG7IIX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsKuo28gFdGOX9ZTdSe55BH9IQC9CPARvjyD0wvC9OaAiEAue2ZBL2fbnxkrOzlP3pxIQ3%2B8TjLhf2d3OEyNxxHpqsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPMu9mJCYzpu7Y1PfCrcA6cfw70JBaMl00UJSK26fHCPbrMmbrzNR8fSUk%2Bzxu8dKWz%2B1fDdJdYjIVod4SzSxh55462svX5gnxkAhUtUPanI8nUaZup661mZN52oZg42z7EhzYSxtjNJvFhDpIyg0ISxMA39ef4Yxxqecl6zG%2FR%2BrSD5PkElSP5kJ%2BdCAACe1LL%2FbBUDASq7P2evG6OT1B0tzR18YXmUGWZGRoHjUNCBKFqUFy0UBPahjEBBO3gMBg6gn3i5rFbi8a3mGJ0E%2B92pQnHGa%2BeXDeBj2hZXCIMJeScnAzoJC8lIRhmEK3QVpD2bneBSRUaq5Bea3qCxppXCGKHGb81siAV0969vB0yoZF26b%2BiTxE%2Blx4Djv5gKYZtFH1lVJPsCXNzFcWNHSH4gas8FOjjGJHH3jqhFJn2RIADfkVULFhTm6Mcs4LhVEtjdIqk4g2iRxoqxSb2iGVq3Abusvmn9Jii8JTPZPFne6jFUrKjVNkOPat7LegqsYsOxbiJWVOmOO6h2YJqeqjh%2FXXgrTuyxIUmhK2apVjYayrU2lkTiMw3ZAx99vG4oSs415B%2FypFKIscWjuVIoe2ozC9s1C%2BbsqQMllJEQgpPI2%2BV9PvcLoLFxVgVCe%2B26EGlWY9NMN3mOC5GhMPKA1sEGOqUBmRq1M39SgM%2BR0I2b%2Bv6uVfxcD5S%2BOrRbHCAs77JY6X211sJLw2zAg79%2B7pRU5xs9CfgWz%2BPzqcAT%2F8%2F1v%2FbxxSiv7iqdyagHYrx7ATeZZguvPbiEa5TUGn3I2yralhfHZtyie%2BMuHcjVUgi%2FMhUhyD5TmRVcS7%2BiPw9X97NjeboAd3fqPqYZ%2BKKeO2uD2xld9uX1m2Wkcq437weBBDM3c1vUKov9&X-Amz-Signature=90e7a09572f752301dd4815dcf8dc6fcb3845953da5444e7ca995c8dda20ae94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPG7IIX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsKuo28gFdGOX9ZTdSe55BH9IQC9CPARvjyD0wvC9OaAiEAue2ZBL2fbnxkrOzlP3pxIQ3%2B8TjLhf2d3OEyNxxHpqsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPMu9mJCYzpu7Y1PfCrcA6cfw70JBaMl00UJSK26fHCPbrMmbrzNR8fSUk%2Bzxu8dKWz%2B1fDdJdYjIVod4SzSxh55462svX5gnxkAhUtUPanI8nUaZup661mZN52oZg42z7EhzYSxtjNJvFhDpIyg0ISxMA39ef4Yxxqecl6zG%2FR%2BrSD5PkElSP5kJ%2BdCAACe1LL%2FbBUDASq7P2evG6OT1B0tzR18YXmUGWZGRoHjUNCBKFqUFy0UBPahjEBBO3gMBg6gn3i5rFbi8a3mGJ0E%2B92pQnHGa%2BeXDeBj2hZXCIMJeScnAzoJC8lIRhmEK3QVpD2bneBSRUaq5Bea3qCxppXCGKHGb81siAV0969vB0yoZF26b%2BiTxE%2Blx4Djv5gKYZtFH1lVJPsCXNzFcWNHSH4gas8FOjjGJHH3jqhFJn2RIADfkVULFhTm6Mcs4LhVEtjdIqk4g2iRxoqxSb2iGVq3Abusvmn9Jii8JTPZPFne6jFUrKjVNkOPat7LegqsYsOxbiJWVOmOO6h2YJqeqjh%2FXXgrTuyxIUmhK2apVjYayrU2lkTiMw3ZAx99vG4oSs415B%2FypFKIscWjuVIoe2ozC9s1C%2BbsqQMllJEQgpPI2%2BV9PvcLoLFxVgVCe%2B26EGlWY9NMN3mOC5GhMPKA1sEGOqUBmRq1M39SgM%2BR0I2b%2Bv6uVfxcD5S%2BOrRbHCAs77JY6X211sJLw2zAg79%2B7pRU5xs9CfgWz%2BPzqcAT%2F8%2F1v%2FbxxSiv7iqdyagHYrx7ATeZZguvPbiEa5TUGn3I2yralhfHZtyie%2BMuHcjVUgi%2FMhUhyD5TmRVcS7%2BiPw9X97NjeboAd3fqPqYZ%2BKKeO2uD2xld9uX1m2Wkcq437weBBDM3c1vUKov9&X-Amz-Signature=aea5a01bb4729872698b040ad8ab8f9dec6f10e9b0e43750934e7cc5e54a048c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
