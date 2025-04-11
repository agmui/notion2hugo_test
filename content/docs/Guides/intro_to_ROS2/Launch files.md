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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZQM5LJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDvsM61wZW8ERrdH8%2FFHQVtqq6FMgfy5X5loYSsdJ5APAIgdg1BiZ5Dtf30zS9JoXEBS6bvotfB7ml9bolAWAddcpYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3UQp6KKSA4P9y40ircAyRXJHW%2B%2FnfS1j1Nd5WeXQrB8T7iQTnZ60ikAxJz0Sif7vfJQ%2FTpMdRM1QpV1wOMB9YySWvYJZlay%2BOnYKgEzkP0ReBeKVfDRMPaHlbOAR5nkB%2F6TsNoCig1h3Z6hizIc9UN1uHRQzovNDUsGzo6VkPtxRxxSAgTzlweKGdCEU%2FmmdpuOgmidqad7L2LpK7NIJbWD1DA%2BtQiFAs1U%2Ftukh8ypqy9wj33Dh7VVqlSyNtScFkIN3ChzQbuLlC0LJ8ruPCM%2BeytwDxyqmaTfZSjwxBCQkmY6ADnLQxvKzgs7bcMzEw1%2BMne7C0qPN%2F4kUHpLyiOG3vLcI5r9E9eREQsLP63jDjqiV02%2FT8kYRtd%2BX8cc2dmDns7kENO3U%2BbH4LRlYJXsaRaXEnIw%2FCatvEWnu0pdK%2FbN1V6FsiT%2BQHgPvADQqccAx65am0Bau%2BMevNTfXYDGe7A5v9faGHh8EnnZ70Ii7lLj8GJugIFWOE%2FsnYuA0g8tb1NzPrYEFiD57DVikZblK4VBo%2FfMJBEbbleprUDKHVPKHbGMqdwPp%2FStS4At85NBKl01%2FVrWc3ZGWchw6pdGnidcTdAPt0mQZ2sstvLKcMVFa%2FraAONDzzhIpCGEveRs%2BxmjzN0g%2BVNMNn24r8GOqUBy8m1AMox559UYPj55SH1DqusFGpLAFTeAKFKPYieB4pAN8Nt15njBi83P0IDV2n%2BNbqKdEJLWVw9ilACKdn4zUJeTUB%2BnBNS7GMoJBh5z66G%2FMVlreNI8KbtpVttzpuPmh%2BM%2BYCHnMPmNCm5%2BjMNKdz33xQdsDuIQqVvKwQNeBtelw5fNN4au1UCO9mHCgoWYYZ2A4xngiddkUfembbscndFcKOx&X-Amz-Signature=19a76327557ddbaf455bb541a10f93098f5a53b99378ed952e27dcf0a102a080&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZQM5LJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDvsM61wZW8ERrdH8%2FFHQVtqq6FMgfy5X5loYSsdJ5APAIgdg1BiZ5Dtf30zS9JoXEBS6bvotfB7ml9bolAWAddcpYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3UQp6KKSA4P9y40ircAyRXJHW%2B%2FnfS1j1Nd5WeXQrB8T7iQTnZ60ikAxJz0Sif7vfJQ%2FTpMdRM1QpV1wOMB9YySWvYJZlay%2BOnYKgEzkP0ReBeKVfDRMPaHlbOAR5nkB%2F6TsNoCig1h3Z6hizIc9UN1uHRQzovNDUsGzo6VkPtxRxxSAgTzlweKGdCEU%2FmmdpuOgmidqad7L2LpK7NIJbWD1DA%2BtQiFAs1U%2Ftukh8ypqy9wj33Dh7VVqlSyNtScFkIN3ChzQbuLlC0LJ8ruPCM%2BeytwDxyqmaTfZSjwxBCQkmY6ADnLQxvKzgs7bcMzEw1%2BMne7C0qPN%2F4kUHpLyiOG3vLcI5r9E9eREQsLP63jDjqiV02%2FT8kYRtd%2BX8cc2dmDns7kENO3U%2BbH4LRlYJXsaRaXEnIw%2FCatvEWnu0pdK%2FbN1V6FsiT%2BQHgPvADQqccAx65am0Bau%2BMevNTfXYDGe7A5v9faGHh8EnnZ70Ii7lLj8GJugIFWOE%2FsnYuA0g8tb1NzPrYEFiD57DVikZblK4VBo%2FfMJBEbbleprUDKHVPKHbGMqdwPp%2FStS4At85NBKl01%2FVrWc3ZGWchw6pdGnidcTdAPt0mQZ2sstvLKcMVFa%2FraAONDzzhIpCGEveRs%2BxmjzN0g%2BVNMNn24r8GOqUBy8m1AMox559UYPj55SH1DqusFGpLAFTeAKFKPYieB4pAN8Nt15njBi83P0IDV2n%2BNbqKdEJLWVw9ilACKdn4zUJeTUB%2BnBNS7GMoJBh5z66G%2FMVlreNI8KbtpVttzpuPmh%2BM%2BYCHnMPmNCm5%2BjMNKdz33xQdsDuIQqVvKwQNeBtelw5fNN4au1UCO9mHCgoWYYZ2A4xngiddkUfembbscndFcKOx&X-Amz-Signature=a9950e60d2faa0bb4fba5b88da749450098308f8554baf796a561d4544e2fb1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZQM5LJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDvsM61wZW8ERrdH8%2FFHQVtqq6FMgfy5X5loYSsdJ5APAIgdg1BiZ5Dtf30zS9JoXEBS6bvotfB7ml9bolAWAddcpYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3UQp6KKSA4P9y40ircAyRXJHW%2B%2FnfS1j1Nd5WeXQrB8T7iQTnZ60ikAxJz0Sif7vfJQ%2FTpMdRM1QpV1wOMB9YySWvYJZlay%2BOnYKgEzkP0ReBeKVfDRMPaHlbOAR5nkB%2F6TsNoCig1h3Z6hizIc9UN1uHRQzovNDUsGzo6VkPtxRxxSAgTzlweKGdCEU%2FmmdpuOgmidqad7L2LpK7NIJbWD1DA%2BtQiFAs1U%2Ftukh8ypqy9wj33Dh7VVqlSyNtScFkIN3ChzQbuLlC0LJ8ruPCM%2BeytwDxyqmaTfZSjwxBCQkmY6ADnLQxvKzgs7bcMzEw1%2BMne7C0qPN%2F4kUHpLyiOG3vLcI5r9E9eREQsLP63jDjqiV02%2FT8kYRtd%2BX8cc2dmDns7kENO3U%2BbH4LRlYJXsaRaXEnIw%2FCatvEWnu0pdK%2FbN1V6FsiT%2BQHgPvADQqccAx65am0Bau%2BMevNTfXYDGe7A5v9faGHh8EnnZ70Ii7lLj8GJugIFWOE%2FsnYuA0g8tb1NzPrYEFiD57DVikZblK4VBo%2FfMJBEbbleprUDKHVPKHbGMqdwPp%2FStS4At85NBKl01%2FVrWc3ZGWchw6pdGnidcTdAPt0mQZ2sstvLKcMVFa%2FraAONDzzhIpCGEveRs%2BxmjzN0g%2BVNMNn24r8GOqUBy8m1AMox559UYPj55SH1DqusFGpLAFTeAKFKPYieB4pAN8Nt15njBi83P0IDV2n%2BNbqKdEJLWVw9ilACKdn4zUJeTUB%2BnBNS7GMoJBh5z66G%2FMVlreNI8KbtpVttzpuPmh%2BM%2BYCHnMPmNCm5%2BjMNKdz33xQdsDuIQqVvKwQNeBtelw5fNN4au1UCO9mHCgoWYYZ2A4xngiddkUfembbscndFcKOx&X-Amz-Signature=1eb1af1baaa9cd17aab2723098ba9a525284851ebfe9511d02d39c48ef4cfe91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
