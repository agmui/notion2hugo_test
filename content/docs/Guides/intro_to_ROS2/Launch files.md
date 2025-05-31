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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZD4OI5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQd3ath7J6S21a58Hy%2BpLoIzryoDrK0miFVmFsPYr49AiEA2mcOeJwIixQa13ocF5iaxQvgQf93rkQc6%2FLGmfcMyRAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh%2FKal5L2SG%2BcGDISrcAwUtaf4FdebePxfyMTVWafJRiXksYiPmwHFlMQc49qMBfKKr4GWEfFSgM18nQcv%2BatMqFtMa06P4qKfTD0nlN1UbaBL9vb7AcVbIqIAE5S7BXihTqCVgyP0mtZUg5zzt1I7cVU1J1e7SazQdc4vL7KPunFRD3MdQ3ucPEmP8Vp64GKdPxRf7zm4sxAGUtV7DxfnZwdinjNkF1vVGXsdfAVKrrcmdOdOD7fmWyxIC5INC%2BwepVRBSoZJLu3jOC1KA%2F7aGX5ibawxtgUcyjDCQGaPfnGbTVkK3Jmd%2FxzAz4b7BqLs0%2BewG2utH6q5BhqWr9szAejs%2FoFEbm0DMeIDT1fZAfFZgMsHteZ8Zrd2UF64TuftegZc%2Bws3LH8i4uQM02rdlTP7vCyQ9l%2F96iefVm%2FPE1VBy5ebQEHwml96Ft2yGYJZRRJS05i3FNJytBfIjcsfqBXcZtCsXdXTeK%2F1dCYt0Uh2JoupU%2BnYazQFuwApcWe4IWmMCoo4TmnlYdplAFBJSiNu1YBrG2rf85IbbzD2jLmys5oSqymNLWZi878ue0UDckTbLG21jaof9uAJCaAebibmD6ZZDHwFH1S4nNTTfonkspp%2BdD2127NFRsXKRqx71GzmOuoxUJxNoMOnk6cEGOqUB5ghwCS%2B3Z28S2cE7tyxZXX%2BoSaomeon5Hub9PyXOHohTrAoXeYcdswlWvc49pHNvuOaP9jyNsUPiJsy2zD037p89aARMXTr9ArLfQl8PjBagcP4WBo9WmqHAkyq%2FzrD7jnMpfSNYzAFgqR1VpVx2YQ9L2aEWy9GimxBSJvXhRly1fWdUUdii%2FzPTXCt7VAdmh8i0q74esDOUVjj7l7%2BVKuYwKh4A&X-Amz-Signature=bedfb24c2f2ade0b4889a7f3eb3102f211ae522150ee3cbcc60b03f636320c78&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZD4OI5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQd3ath7J6S21a58Hy%2BpLoIzryoDrK0miFVmFsPYr49AiEA2mcOeJwIixQa13ocF5iaxQvgQf93rkQc6%2FLGmfcMyRAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh%2FKal5L2SG%2BcGDISrcAwUtaf4FdebePxfyMTVWafJRiXksYiPmwHFlMQc49qMBfKKr4GWEfFSgM18nQcv%2BatMqFtMa06P4qKfTD0nlN1UbaBL9vb7AcVbIqIAE5S7BXihTqCVgyP0mtZUg5zzt1I7cVU1J1e7SazQdc4vL7KPunFRD3MdQ3ucPEmP8Vp64GKdPxRf7zm4sxAGUtV7DxfnZwdinjNkF1vVGXsdfAVKrrcmdOdOD7fmWyxIC5INC%2BwepVRBSoZJLu3jOC1KA%2F7aGX5ibawxtgUcyjDCQGaPfnGbTVkK3Jmd%2FxzAz4b7BqLs0%2BewG2utH6q5BhqWr9szAejs%2FoFEbm0DMeIDT1fZAfFZgMsHteZ8Zrd2UF64TuftegZc%2Bws3LH8i4uQM02rdlTP7vCyQ9l%2F96iefVm%2FPE1VBy5ebQEHwml96Ft2yGYJZRRJS05i3FNJytBfIjcsfqBXcZtCsXdXTeK%2F1dCYt0Uh2JoupU%2BnYazQFuwApcWe4IWmMCoo4TmnlYdplAFBJSiNu1YBrG2rf85IbbzD2jLmys5oSqymNLWZi878ue0UDckTbLG21jaof9uAJCaAebibmD6ZZDHwFH1S4nNTTfonkspp%2BdD2127NFRsXKRqx71GzmOuoxUJxNoMOnk6cEGOqUB5ghwCS%2B3Z28S2cE7tyxZXX%2BoSaomeon5Hub9PyXOHohTrAoXeYcdswlWvc49pHNvuOaP9jyNsUPiJsy2zD037p89aARMXTr9ArLfQl8PjBagcP4WBo9WmqHAkyq%2FzrD7jnMpfSNYzAFgqR1VpVx2YQ9L2aEWy9GimxBSJvXhRly1fWdUUdii%2FzPTXCt7VAdmh8i0q74esDOUVjj7l7%2BVKuYwKh4A&X-Amz-Signature=55fbea3e257c9d664dab314053ca84a53245a63d334d608bbfdd2f150370dc9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZD4OI5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQd3ath7J6S21a58Hy%2BpLoIzryoDrK0miFVmFsPYr49AiEA2mcOeJwIixQa13ocF5iaxQvgQf93rkQc6%2FLGmfcMyRAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh%2FKal5L2SG%2BcGDISrcAwUtaf4FdebePxfyMTVWafJRiXksYiPmwHFlMQc49qMBfKKr4GWEfFSgM18nQcv%2BatMqFtMa06P4qKfTD0nlN1UbaBL9vb7AcVbIqIAE5S7BXihTqCVgyP0mtZUg5zzt1I7cVU1J1e7SazQdc4vL7KPunFRD3MdQ3ucPEmP8Vp64GKdPxRf7zm4sxAGUtV7DxfnZwdinjNkF1vVGXsdfAVKrrcmdOdOD7fmWyxIC5INC%2BwepVRBSoZJLu3jOC1KA%2F7aGX5ibawxtgUcyjDCQGaPfnGbTVkK3Jmd%2FxzAz4b7BqLs0%2BewG2utH6q5BhqWr9szAejs%2FoFEbm0DMeIDT1fZAfFZgMsHteZ8Zrd2UF64TuftegZc%2Bws3LH8i4uQM02rdlTP7vCyQ9l%2F96iefVm%2FPE1VBy5ebQEHwml96Ft2yGYJZRRJS05i3FNJytBfIjcsfqBXcZtCsXdXTeK%2F1dCYt0Uh2JoupU%2BnYazQFuwApcWe4IWmMCoo4TmnlYdplAFBJSiNu1YBrG2rf85IbbzD2jLmys5oSqymNLWZi878ue0UDckTbLG21jaof9uAJCaAebibmD6ZZDHwFH1S4nNTTfonkspp%2BdD2127NFRsXKRqx71GzmOuoxUJxNoMOnk6cEGOqUB5ghwCS%2B3Z28S2cE7tyxZXX%2BoSaomeon5Hub9PyXOHohTrAoXeYcdswlWvc49pHNvuOaP9jyNsUPiJsy2zD037p89aARMXTr9ArLfQl8PjBagcP4WBo9WmqHAkyq%2FzrD7jnMpfSNYzAFgqR1VpVx2YQ9L2aEWy9GimxBSJvXhRly1fWdUUdii%2FzPTXCt7VAdmh8i0q74esDOUVjj7l7%2BVKuYwKh4A&X-Amz-Signature=a4d98a613260c8ff302f8a8195bba41cc453136732c4174226eb6675577ed4bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
