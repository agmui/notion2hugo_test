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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANAX427%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ap%2FgG2k%2BT1r2MHaQgzmhr6It9%2FlE2dKZb%2FbGM64RvwIhAMRhEhGX7BSxR91x%2B%2BmhixO3KG3fllkDcq%2F5fQDOugYNKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpnlQ0c4IMONgIjdsq3APj7QjwPAQ99BwoWqQ23cofavXd1k0MV2JwBTOBrk6Rs17xBMv%2Bb8k90Tm93xthA78H1GqUfUumhU6ze%2FL2dbN6z0Bfg4dxBKKaxCHdISQJlg0Kf%2FjvhaGU0AfjDVJUjbAnwIcUwKbMYBZs5KDUUg1K3TTrsaRBVvUj4Zc1QABjADhX3SEJt8Qa5Qta%2FEC9BiOmvm9OWCbpaPzhY9zDdb7hl8ZnOUOKUQ4guEIYvVvf03gaJI%2BrR3Tfjye5UITguF82YsMqDA6N0F80gfdDJ8XWFij4RUpr%2B74BoxreWi86vxS26gltFrablCZ1gBIuOLR%2BN0wyGYYkyR%2FsDrcu8oGS5uD4RYyaCzI1ASrPIIZuzKd8OvtP%2FbggFFVPHoRRTjLucnDvRXKf48PLH1ZX7yUrcT5SpsjpMEOC6lMiBVby4u6SNTHT2cfTHHg%2BQ1SOAQ3mGm%2B%2Be7ZT%2FcUBG%2FE0C7ir5DU2eqauNHw33EcaMf%2FO8DMzSD5VmJ5zUpE%2BzFV9gkPnVEuMHU%2FxIqmA3JBOtp3NlnLs3Mr1RHuJv0D4ga8N42%2B57ICx74bXq5SVhhghfjp3uqH0fzcBm65qs7gUep1tpNJDVZp4hi4nOGLJIcAA7%2F0RgJng88BVlA9FgzCXmp3CBjqkAXwEwVyEf6fePEEj6J247e4sfsOfwYFa6ANKELzeB3QnLZ9IuNZrTEb54riudmEwxf2I6EQVz0IekpxlppIAVStSsNCLG4PZ4gv2sn2oURJjQ6WyfgmEG2iBtpc08iPVKZh9%2Bq6NMl%2FIqN4t40Dvt6Ri7rAGZvXr6be8inPHlkpoz%2F8IqO9A58a%2B%2FkZXMxEu%2BnfcUjDm4e8DaxQ9P%2BYjwOyqy%2Bwe&X-Amz-Signature=ec6b29ed55c7ef5319952aceddee5b52c6738a0295aaee5c2fcad465abf91c69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANAX427%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ap%2FgG2k%2BT1r2MHaQgzmhr6It9%2FlE2dKZb%2FbGM64RvwIhAMRhEhGX7BSxR91x%2B%2BmhixO3KG3fllkDcq%2F5fQDOugYNKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpnlQ0c4IMONgIjdsq3APj7QjwPAQ99BwoWqQ23cofavXd1k0MV2JwBTOBrk6Rs17xBMv%2Bb8k90Tm93xthA78H1GqUfUumhU6ze%2FL2dbN6z0Bfg4dxBKKaxCHdISQJlg0Kf%2FjvhaGU0AfjDVJUjbAnwIcUwKbMYBZs5KDUUg1K3TTrsaRBVvUj4Zc1QABjADhX3SEJt8Qa5Qta%2FEC9BiOmvm9OWCbpaPzhY9zDdb7hl8ZnOUOKUQ4guEIYvVvf03gaJI%2BrR3Tfjye5UITguF82YsMqDA6N0F80gfdDJ8XWFij4RUpr%2B74BoxreWi86vxS26gltFrablCZ1gBIuOLR%2BN0wyGYYkyR%2FsDrcu8oGS5uD4RYyaCzI1ASrPIIZuzKd8OvtP%2FbggFFVPHoRRTjLucnDvRXKf48PLH1ZX7yUrcT5SpsjpMEOC6lMiBVby4u6SNTHT2cfTHHg%2BQ1SOAQ3mGm%2B%2Be7ZT%2FcUBG%2FE0C7ir5DU2eqauNHw33EcaMf%2FO8DMzSD5VmJ5zUpE%2BzFV9gkPnVEuMHU%2FxIqmA3JBOtp3NlnLs3Mr1RHuJv0D4ga8N42%2B57ICx74bXq5SVhhghfjp3uqH0fzcBm65qs7gUep1tpNJDVZp4hi4nOGLJIcAA7%2F0RgJng88BVlA9FgzCXmp3CBjqkAXwEwVyEf6fePEEj6J247e4sfsOfwYFa6ANKELzeB3QnLZ9IuNZrTEb54riudmEwxf2I6EQVz0IekpxlppIAVStSsNCLG4PZ4gv2sn2oURJjQ6WyfgmEG2iBtpc08iPVKZh9%2Bq6NMl%2FIqN4t40Dvt6Ri7rAGZvXr6be8inPHlkpoz%2F8IqO9A58a%2B%2FkZXMxEu%2BnfcUjDm4e8DaxQ9P%2BYjwOyqy%2Bwe&X-Amz-Signature=0933565e8d38d0fcf0f9a644b0554adb58fcc56146b2aefc37a45a72be6795a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANAX427%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ap%2FgG2k%2BT1r2MHaQgzmhr6It9%2FlE2dKZb%2FbGM64RvwIhAMRhEhGX7BSxR91x%2B%2BmhixO3KG3fllkDcq%2F5fQDOugYNKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpnlQ0c4IMONgIjdsq3APj7QjwPAQ99BwoWqQ23cofavXd1k0MV2JwBTOBrk6Rs17xBMv%2Bb8k90Tm93xthA78H1GqUfUumhU6ze%2FL2dbN6z0Bfg4dxBKKaxCHdISQJlg0Kf%2FjvhaGU0AfjDVJUjbAnwIcUwKbMYBZs5KDUUg1K3TTrsaRBVvUj4Zc1QABjADhX3SEJt8Qa5Qta%2FEC9BiOmvm9OWCbpaPzhY9zDdb7hl8ZnOUOKUQ4guEIYvVvf03gaJI%2BrR3Tfjye5UITguF82YsMqDA6N0F80gfdDJ8XWFij4RUpr%2B74BoxreWi86vxS26gltFrablCZ1gBIuOLR%2BN0wyGYYkyR%2FsDrcu8oGS5uD4RYyaCzI1ASrPIIZuzKd8OvtP%2FbggFFVPHoRRTjLucnDvRXKf48PLH1ZX7yUrcT5SpsjpMEOC6lMiBVby4u6SNTHT2cfTHHg%2BQ1SOAQ3mGm%2B%2Be7ZT%2FcUBG%2FE0C7ir5DU2eqauNHw33EcaMf%2FO8DMzSD5VmJ5zUpE%2BzFV9gkPnVEuMHU%2FxIqmA3JBOtp3NlnLs3Mr1RHuJv0D4ga8N42%2B57ICx74bXq5SVhhghfjp3uqH0fzcBm65qs7gUep1tpNJDVZp4hi4nOGLJIcAA7%2F0RgJng88BVlA9FgzCXmp3CBjqkAXwEwVyEf6fePEEj6J247e4sfsOfwYFa6ANKELzeB3QnLZ9IuNZrTEb54riudmEwxf2I6EQVz0IekpxlppIAVStSsNCLG4PZ4gv2sn2oURJjQ6WyfgmEG2iBtpc08iPVKZh9%2Bq6NMl%2FIqN4t40Dvt6Ri7rAGZvXr6be8inPHlkpoz%2F8IqO9A58a%2B%2FkZXMxEu%2BnfcUjDm4e8DaxQ9P%2BYjwOyqy%2Bwe&X-Amz-Signature=67d697964effe6854f7488b49edbcc3cf06d4005549e609f57eb210f15635f72&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
