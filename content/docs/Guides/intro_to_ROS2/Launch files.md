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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MM267MW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8iSvz5rMGS97UeWXi817%2Fr5pijxgEM0z%2Bf0u5%2B9r5AiEAv2hEKySw9DU6ypA4R2vOXniNdhHQnqdfOdiNiTbIw1cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOY8g0AugkiN31bF4CrcA63wD05q0Fu7FP41%2ByXGY27Ei34Od3Fimn%2FBgtzveWcFHfSls3yYWKKbLwJi7W9yMZfRw6DjTmEZm2rMR5LP8DOihmVV%2FSoBrmtFJFh0YIDC0R4jApn%2FSquEs%2F%2Bjki4Qyt%2BlSG6xUu75HU4HGRAKhB2B7IaGIdclNRP3RCiRTsC9UJrWdg2vID2OOaxdO7%2F5Z%2FRRm6nUi4V2Lr1%2FrHraoaKd0KjG6cD8V%2Fc4w83LH0wITAHNIHgkWQqV0Fz7Jp59ZTOTP9G1w6%2F%2Boethldc9wuKW3iQsa%2BQ9SMmt6shYeUfICDkZh5Zu2LKcu85NAlzcFH5h7YfU8bqfn7HUqk%2FtV3NJJq0aXKa0amnz1mvwkTpb%2FFh779rQ22GlL3GzRrqwRZtnIqG06%2FO%2BDeKqDj54ppm5ugBgJWCULE3k9IcTdZIvBn2cNkmBBYgOHzYs9ltKs%2FAuo0%2Fd1PS0NfTIPgAni7wo2aVL2XmLcnB%2BEK1hC3i4FCgLvsBObQUk%2FP55f8i1b4siJwvFgSAetQ6FKHJmLdwUY50dull%2B22Bp2QV6RUSKjRZUOK4PsSWNjCCXEx8r5PyI8Knw%2B%2F3p3KRbh%2BDmVPQsBcKpRbHXXL%2FyjdOHkIEi6A416QIpyTpq3GmzMN%2Fjw78GOqUBCTFo2xu%2FxvS80vJc%2FNFuHV%2FJ3cTMxWHBorj9FmFXp6shaEX7rXu9BYyqNFbNCMDoMSNtE8L%2BPT%2F%2B287pHmjrBvm%2BkzuBxwK1vD4ZEca%2FaNl762wKmPcYOrpXjgsuMK9PktdwxUWPp70wjB%2Fk2J%2FPyaVwjQTGOcK5NgPiF%2B9VRhNVrYmCV%2Fuu7ENtO%2BDuzHP0dpwxlap0wgGQpdEFr2TEG8d9J32X&X-Amz-Signature=443da32c104c40a4089f550cc0fd0e96d27f793768029859e4226f7127ba1fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MM267MW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8iSvz5rMGS97UeWXi817%2Fr5pijxgEM0z%2Bf0u5%2B9r5AiEAv2hEKySw9DU6ypA4R2vOXniNdhHQnqdfOdiNiTbIw1cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOY8g0AugkiN31bF4CrcA63wD05q0Fu7FP41%2ByXGY27Ei34Od3Fimn%2FBgtzveWcFHfSls3yYWKKbLwJi7W9yMZfRw6DjTmEZm2rMR5LP8DOihmVV%2FSoBrmtFJFh0YIDC0R4jApn%2FSquEs%2F%2Bjki4Qyt%2BlSG6xUu75HU4HGRAKhB2B7IaGIdclNRP3RCiRTsC9UJrWdg2vID2OOaxdO7%2F5Z%2FRRm6nUi4V2Lr1%2FrHraoaKd0KjG6cD8V%2Fc4w83LH0wITAHNIHgkWQqV0Fz7Jp59ZTOTP9G1w6%2F%2Boethldc9wuKW3iQsa%2BQ9SMmt6shYeUfICDkZh5Zu2LKcu85NAlzcFH5h7YfU8bqfn7HUqk%2FtV3NJJq0aXKa0amnz1mvwkTpb%2FFh779rQ22GlL3GzRrqwRZtnIqG06%2FO%2BDeKqDj54ppm5ugBgJWCULE3k9IcTdZIvBn2cNkmBBYgOHzYs9ltKs%2FAuo0%2Fd1PS0NfTIPgAni7wo2aVL2XmLcnB%2BEK1hC3i4FCgLvsBObQUk%2FP55f8i1b4siJwvFgSAetQ6FKHJmLdwUY50dull%2B22Bp2QV6RUSKjRZUOK4PsSWNjCCXEx8r5PyI8Knw%2B%2F3p3KRbh%2BDmVPQsBcKpRbHXXL%2FyjdOHkIEi6A416QIpyTpq3GmzMN%2Fjw78GOqUBCTFo2xu%2FxvS80vJc%2FNFuHV%2FJ3cTMxWHBorj9FmFXp6shaEX7rXu9BYyqNFbNCMDoMSNtE8L%2BPT%2F%2B287pHmjrBvm%2BkzuBxwK1vD4ZEca%2FaNl762wKmPcYOrpXjgsuMK9PktdwxUWPp70wjB%2Fk2J%2FPyaVwjQTGOcK5NgPiF%2B9VRhNVrYmCV%2Fuu7ENtO%2BDuzHP0dpwxlap0wgGQpdEFr2TEG8d9J32X&X-Amz-Signature=ec877a3d67780fa4756d953cb1356937bb4a8d93cba50f5e58c4211e95e32c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MM267MW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN8iSvz5rMGS97UeWXi817%2Fr5pijxgEM0z%2Bf0u5%2B9r5AiEAv2hEKySw9DU6ypA4R2vOXniNdhHQnqdfOdiNiTbIw1cq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOY8g0AugkiN31bF4CrcA63wD05q0Fu7FP41%2ByXGY27Ei34Od3Fimn%2FBgtzveWcFHfSls3yYWKKbLwJi7W9yMZfRw6DjTmEZm2rMR5LP8DOihmVV%2FSoBrmtFJFh0YIDC0R4jApn%2FSquEs%2F%2Bjki4Qyt%2BlSG6xUu75HU4HGRAKhB2B7IaGIdclNRP3RCiRTsC9UJrWdg2vID2OOaxdO7%2F5Z%2FRRm6nUi4V2Lr1%2FrHraoaKd0KjG6cD8V%2Fc4w83LH0wITAHNIHgkWQqV0Fz7Jp59ZTOTP9G1w6%2F%2Boethldc9wuKW3iQsa%2BQ9SMmt6shYeUfICDkZh5Zu2LKcu85NAlzcFH5h7YfU8bqfn7HUqk%2FtV3NJJq0aXKa0amnz1mvwkTpb%2FFh779rQ22GlL3GzRrqwRZtnIqG06%2FO%2BDeKqDj54ppm5ugBgJWCULE3k9IcTdZIvBn2cNkmBBYgOHzYs9ltKs%2FAuo0%2Fd1PS0NfTIPgAni7wo2aVL2XmLcnB%2BEK1hC3i4FCgLvsBObQUk%2FP55f8i1b4siJwvFgSAetQ6FKHJmLdwUY50dull%2B22Bp2QV6RUSKjRZUOK4PsSWNjCCXEx8r5PyI8Knw%2B%2F3p3KRbh%2BDmVPQsBcKpRbHXXL%2FyjdOHkIEi6A416QIpyTpq3GmzMN%2Fjw78GOqUBCTFo2xu%2FxvS80vJc%2FNFuHV%2FJ3cTMxWHBorj9FmFXp6shaEX7rXu9BYyqNFbNCMDoMSNtE8L%2BPT%2F%2B287pHmjrBvm%2BkzuBxwK1vD4ZEca%2FaNl762wKmPcYOrpXjgsuMK9PktdwxUWPp70wjB%2Fk2J%2FPyaVwjQTGOcK5NgPiF%2B9VRhNVrYmCV%2Fuu7ENtO%2BDuzHP0dpwxlap0wgGQpdEFr2TEG8d9J32X&X-Amz-Signature=1f2a1d97bd93124bcafe0f64751b0645cbc4fea2faf0d4666bd2abbb0dc71b52&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
