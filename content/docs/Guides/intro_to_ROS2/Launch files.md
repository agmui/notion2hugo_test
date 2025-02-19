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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27QGDMX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIED458FQ0%2BdoYVZ%2FKbSqkinV5czyMbggvV2Z9LZT1Ea0AiEA%2FBC8lAxeHTBEzOvrenA9obHwhEYF505TGIP%2F1HPjeXoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUx8wd%2BGOYyhpDwRircA2UVT60Uhl3fCEA1Qf96DiPlEkxE2oyb%2BJTobKgYJodp1orLypFbIVRqSyPC7eEgLSdp2zeeVgaTTYfYyVlAHXU78Qwn3%2FZIDKgLwZLkRAAVpEIxoZWl9sl4Wh%2Bo3%2FAaCZNlF3lcbbznbPaoDsWOLB%2FTWe2hvV2pkGrKtP4UZBGILHGdduN60YpMZwPayzjg3En1XF54I%2BesCaF6GaDZ90J3I3i8%2BitJWKgbE%2BJOFnnA00KgaRKmIE9btG0%2FAMOlAYbeO4ST36fcuzv%2FR6AvR41e2y%2B1HxjDPsyEGj1miP6OHxbFlia8EmnsHbpgYl11g7v0yHjw8WRQiFb%2Bd5hFJceraJ%2FwLgM4uihjbibkuDiKL3MZrqHgp1JbHZj%2Fujm%2B9I67EXIdOTJfvD4g8b1XMAE8v9PlT2ufc1vl230GfJtScQt4oNz5PGR3UOUttbvyBpkd07yq9%2B7aGQQI5tN7KpRT22EZldDVrEimAJboHSgv2zfkIxeo6KU5k0495pOZ1B1RU3bMHBzGj3sJTsZTV%2FmFMhg6Uz75QOABiOr8ZDMf8LMwWYoSc8ius91BuibWxecErP7vU%2BipV9jqWP4PKwMWTDhqiqPa6tJ6dVbIh%2Fw5fFKsACaKPQ8RQ%2BryMKr71r0GOqUBkNQCjHeJ%2Fq69zeM4dFEi%2BqKiJHVmMQoL7hFO46xzg4AJR0sVGs9RW7oa4gTgC5pJHbytGlvTVMnrqRClvt4IGW%2FEmASszQzLwbQ9oglXYhP7YfhY1CCeueaSFhj9%2BbrqkN2Agk2cXQCViFRKVO2iFHprWygp6d2Ni49SZIfrvV0mhP1OsEsW9ZuLk44YI2W8%2B%2FHa%2Bq6YaeK2lxQsBC4l9rtmDrgd&X-Amz-Signature=f1b61aa6a216c1bf62c25fb61b49ffb11cdca2a55278944ecb18c334434a8776&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27QGDMX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIED458FQ0%2BdoYVZ%2FKbSqkinV5czyMbggvV2Z9LZT1Ea0AiEA%2FBC8lAxeHTBEzOvrenA9obHwhEYF505TGIP%2F1HPjeXoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUx8wd%2BGOYyhpDwRircA2UVT60Uhl3fCEA1Qf96DiPlEkxE2oyb%2BJTobKgYJodp1orLypFbIVRqSyPC7eEgLSdp2zeeVgaTTYfYyVlAHXU78Qwn3%2FZIDKgLwZLkRAAVpEIxoZWl9sl4Wh%2Bo3%2FAaCZNlF3lcbbznbPaoDsWOLB%2FTWe2hvV2pkGrKtP4UZBGILHGdduN60YpMZwPayzjg3En1XF54I%2BesCaF6GaDZ90J3I3i8%2BitJWKgbE%2BJOFnnA00KgaRKmIE9btG0%2FAMOlAYbeO4ST36fcuzv%2FR6AvR41e2y%2B1HxjDPsyEGj1miP6OHxbFlia8EmnsHbpgYl11g7v0yHjw8WRQiFb%2Bd5hFJceraJ%2FwLgM4uihjbibkuDiKL3MZrqHgp1JbHZj%2Fujm%2B9I67EXIdOTJfvD4g8b1XMAE8v9PlT2ufc1vl230GfJtScQt4oNz5PGR3UOUttbvyBpkd07yq9%2B7aGQQI5tN7KpRT22EZldDVrEimAJboHSgv2zfkIxeo6KU5k0495pOZ1B1RU3bMHBzGj3sJTsZTV%2FmFMhg6Uz75QOABiOr8ZDMf8LMwWYoSc8ius91BuibWxecErP7vU%2BipV9jqWP4PKwMWTDhqiqPa6tJ6dVbIh%2Fw5fFKsACaKPQ8RQ%2BryMKr71r0GOqUBkNQCjHeJ%2Fq69zeM4dFEi%2BqKiJHVmMQoL7hFO46xzg4AJR0sVGs9RW7oa4gTgC5pJHbytGlvTVMnrqRClvt4IGW%2FEmASszQzLwbQ9oglXYhP7YfhY1CCeueaSFhj9%2BbrqkN2Agk2cXQCViFRKVO2iFHprWygp6d2Ni49SZIfrvV0mhP1OsEsW9ZuLk44YI2W8%2B%2FHa%2Bq6YaeK2lxQsBC4l9rtmDrgd&X-Amz-Signature=bb5a24e90d81b26dd88dc2ea2fe6204aa5f6b06a3d788edd27d50396a544260b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27QGDMX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIED458FQ0%2BdoYVZ%2FKbSqkinV5czyMbggvV2Z9LZT1Ea0AiEA%2FBC8lAxeHTBEzOvrenA9obHwhEYF505TGIP%2F1HPjeXoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUx8wd%2BGOYyhpDwRircA2UVT60Uhl3fCEA1Qf96DiPlEkxE2oyb%2BJTobKgYJodp1orLypFbIVRqSyPC7eEgLSdp2zeeVgaTTYfYyVlAHXU78Qwn3%2FZIDKgLwZLkRAAVpEIxoZWl9sl4Wh%2Bo3%2FAaCZNlF3lcbbznbPaoDsWOLB%2FTWe2hvV2pkGrKtP4UZBGILHGdduN60YpMZwPayzjg3En1XF54I%2BesCaF6GaDZ90J3I3i8%2BitJWKgbE%2BJOFnnA00KgaRKmIE9btG0%2FAMOlAYbeO4ST36fcuzv%2FR6AvR41e2y%2B1HxjDPsyEGj1miP6OHxbFlia8EmnsHbpgYl11g7v0yHjw8WRQiFb%2Bd5hFJceraJ%2FwLgM4uihjbibkuDiKL3MZrqHgp1JbHZj%2Fujm%2B9I67EXIdOTJfvD4g8b1XMAE8v9PlT2ufc1vl230GfJtScQt4oNz5PGR3UOUttbvyBpkd07yq9%2B7aGQQI5tN7KpRT22EZldDVrEimAJboHSgv2zfkIxeo6KU5k0495pOZ1B1RU3bMHBzGj3sJTsZTV%2FmFMhg6Uz75QOABiOr8ZDMf8LMwWYoSc8ius91BuibWxecErP7vU%2BipV9jqWP4PKwMWTDhqiqPa6tJ6dVbIh%2Fw5fFKsACaKPQ8RQ%2BryMKr71r0GOqUBkNQCjHeJ%2Fq69zeM4dFEi%2BqKiJHVmMQoL7hFO46xzg4AJR0sVGs9RW7oa4gTgC5pJHbytGlvTVMnrqRClvt4IGW%2FEmASszQzLwbQ9oglXYhP7YfhY1CCeueaSFhj9%2BbrqkN2Agk2cXQCViFRKVO2iFHprWygp6d2Ni49SZIfrvV0mhP1OsEsW9ZuLk44YI2W8%2B%2FHa%2Bq6YaeK2lxQsBC4l9rtmDrgd&X-Amz-Signature=a422584ab8adca9aa4616e0bd49864ad6b479f363aa0a7392b36b7ace457a801&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
