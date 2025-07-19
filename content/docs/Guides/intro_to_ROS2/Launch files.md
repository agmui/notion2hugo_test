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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBFUDMK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe96jB3eKA9jnt7jzuGKyMyk8hy%2FEClhMX7Zev%2Fql33AiAlWRYDx8GxBPVbA2yN0X3rGvoeLce0PaSE1NfZHumUaCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlt40PpxsYrp%2FcUeKKtwDkkA4Qu7ILR9j1n%2Ff6%2BapwkIn3U%2Bdib1h2FWv7sYh%2Bn4T7xHnII2HPLBNQlDKQ697dux%2F9h4pm0cUcNcvtzTQ9GkumRb2BhyNjFgwd5%2BgjlZFu%2F8YW9lKZ846VpwB%2FhCNSw6O87dmUerXc6xoiM6jHnj75CDShtR6soFj%2F5E3RCUeg5CLFA0JVvB9q82ee9TkcSob%2BNtlawAfWVO1gdf9Zj9lQfSVlDDpXO8e3TnsKVVRlGDxF%2FFji4OXWdUM%2F%2BzY2aPRzvfLDiRAQlGSoe2nsF9p9i%2BsXjIdim0SyKTmXuRGKgXMo2pEMdfFJ%2FJwtj5wp%2BXhMA1ke6Nuuxvu1Gr82wfxflHLTgUzpsPN%2BTjPKKUfR7xzS2%2BLslRvjlR7Kxo0EMG5P2UJUJVa%2FW%2FR%2Bd8eOlqh%2BTVrW1I1I%2BHZEaj00eAdyPBHxq5En68J9q3cL7cS7JfjKCv0zd%2Bu6GO4eP0zhCkY5k2hem4BoeybTYJHS1iIVoOiLP2Q%2Bd4Wa5weSOIweXpZQAn1Lkx81CzQ2ENEot1R4bdzpnmvmpTkgEHA1SWUN7SwGpNp8gs4F1Nd3pj4WqwSP1prX0fLsXxqKtr0%2FltFjwGsjR0Sgj1v3rMugMN%2F5e1NoDm2ugj87hQwjLjuwwY6pgHFqRuVyeCvpgYzLwbsvqrqO4z%2BBMX2Y2gzFNSQnaq0VYS%2FDxrpeBR7%2FD%2BKSWw9U5Qe7uBfGdiW%2B7XbHoBjgaHio6Vl5ig23KHb6O9KSKdGxtXPThdY1UNZJVZ%2BSvET5CnI2lmft7jGwdLQAXGIw7C1PD52Ptw8La8ayCv2CoTaSo%2FaqpwdxeWwsVb9nK5gkDs7noaVO%2B6twLZQ9y7EnFsxNHfPtNjq&X-Amz-Signature=9e0f0fd2d2e4726b447317350491e730617736eed21e9edbd5e474af1264344d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBFUDMK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe96jB3eKA9jnt7jzuGKyMyk8hy%2FEClhMX7Zev%2Fql33AiAlWRYDx8GxBPVbA2yN0X3rGvoeLce0PaSE1NfZHumUaCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlt40PpxsYrp%2FcUeKKtwDkkA4Qu7ILR9j1n%2Ff6%2BapwkIn3U%2Bdib1h2FWv7sYh%2Bn4T7xHnII2HPLBNQlDKQ697dux%2F9h4pm0cUcNcvtzTQ9GkumRb2BhyNjFgwd5%2BgjlZFu%2F8YW9lKZ846VpwB%2FhCNSw6O87dmUerXc6xoiM6jHnj75CDShtR6soFj%2F5E3RCUeg5CLFA0JVvB9q82ee9TkcSob%2BNtlawAfWVO1gdf9Zj9lQfSVlDDpXO8e3TnsKVVRlGDxF%2FFji4OXWdUM%2F%2BzY2aPRzvfLDiRAQlGSoe2nsF9p9i%2BsXjIdim0SyKTmXuRGKgXMo2pEMdfFJ%2FJwtj5wp%2BXhMA1ke6Nuuxvu1Gr82wfxflHLTgUzpsPN%2BTjPKKUfR7xzS2%2BLslRvjlR7Kxo0EMG5P2UJUJVa%2FW%2FR%2Bd8eOlqh%2BTVrW1I1I%2BHZEaj00eAdyPBHxq5En68J9q3cL7cS7JfjKCv0zd%2Bu6GO4eP0zhCkY5k2hem4BoeybTYJHS1iIVoOiLP2Q%2Bd4Wa5weSOIweXpZQAn1Lkx81CzQ2ENEot1R4bdzpnmvmpTkgEHA1SWUN7SwGpNp8gs4F1Nd3pj4WqwSP1prX0fLsXxqKtr0%2FltFjwGsjR0Sgj1v3rMugMN%2F5e1NoDm2ugj87hQwjLjuwwY6pgHFqRuVyeCvpgYzLwbsvqrqO4z%2BBMX2Y2gzFNSQnaq0VYS%2FDxrpeBR7%2FD%2BKSWw9U5Qe7uBfGdiW%2B7XbHoBjgaHio6Vl5ig23KHb6O9KSKdGxtXPThdY1UNZJVZ%2BSvET5CnI2lmft7jGwdLQAXGIw7C1PD52Ptw8La8ayCv2CoTaSo%2FaqpwdxeWwsVb9nK5gkDs7noaVO%2B6twLZQ9y7EnFsxNHfPtNjq&X-Amz-Signature=e14ba7a447ddfbee1d00015f8c4c170cfbdc1cd47fe193c1ee9f3a53d9db34ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBFUDMK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe96jB3eKA9jnt7jzuGKyMyk8hy%2FEClhMX7Zev%2Fql33AiAlWRYDx8GxBPVbA2yN0X3rGvoeLce0PaSE1NfZHumUaCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlt40PpxsYrp%2FcUeKKtwDkkA4Qu7ILR9j1n%2Ff6%2BapwkIn3U%2Bdib1h2FWv7sYh%2Bn4T7xHnII2HPLBNQlDKQ697dux%2F9h4pm0cUcNcvtzTQ9GkumRb2BhyNjFgwd5%2BgjlZFu%2F8YW9lKZ846VpwB%2FhCNSw6O87dmUerXc6xoiM6jHnj75CDShtR6soFj%2F5E3RCUeg5CLFA0JVvB9q82ee9TkcSob%2BNtlawAfWVO1gdf9Zj9lQfSVlDDpXO8e3TnsKVVRlGDxF%2FFji4OXWdUM%2F%2BzY2aPRzvfLDiRAQlGSoe2nsF9p9i%2BsXjIdim0SyKTmXuRGKgXMo2pEMdfFJ%2FJwtj5wp%2BXhMA1ke6Nuuxvu1Gr82wfxflHLTgUzpsPN%2BTjPKKUfR7xzS2%2BLslRvjlR7Kxo0EMG5P2UJUJVa%2FW%2FR%2Bd8eOlqh%2BTVrW1I1I%2BHZEaj00eAdyPBHxq5En68J9q3cL7cS7JfjKCv0zd%2Bu6GO4eP0zhCkY5k2hem4BoeybTYJHS1iIVoOiLP2Q%2Bd4Wa5weSOIweXpZQAn1Lkx81CzQ2ENEot1R4bdzpnmvmpTkgEHA1SWUN7SwGpNp8gs4F1Nd3pj4WqwSP1prX0fLsXxqKtr0%2FltFjwGsjR0Sgj1v3rMugMN%2F5e1NoDm2ugj87hQwjLjuwwY6pgHFqRuVyeCvpgYzLwbsvqrqO4z%2BBMX2Y2gzFNSQnaq0VYS%2FDxrpeBR7%2FD%2BKSWw9U5Qe7uBfGdiW%2B7XbHoBjgaHio6Vl5ig23KHb6O9KSKdGxtXPThdY1UNZJVZ%2BSvET5CnI2lmft7jGwdLQAXGIw7C1PD52Ptw8La8ayCv2CoTaSo%2FaqpwdxeWwsVb9nK5gkDs7noaVO%2B6twLZQ9y7EnFsxNHfPtNjq&X-Amz-Signature=4b725c682ce8c360c747f7749bb92d440e3bebc618b88576842e9df62fdce033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
