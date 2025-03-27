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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKRV6INT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJRpVSczO2uFA4l9XGvyIB1ys4EEUcZxMwCkVb%2FA3DZAiEA57wWJnVCXe%2BQtl%2BLMzF175WbL72OosQnV89tRi4Oxlkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNzlR4FYDLv9UDtVHyrcA1vLdC3E%2BpCxy80BzpTNis2LupZ%2FnZxJeqQ1yQ%2FXZxrdX7n2pn12UnoRRdD6RrQODxM7Ukr5raI2WSE1GeQk6XLUorX7hHhA56DtDG9PamDUbMETVZtzaBJvOxp12D%2BVDMt%2F4V4TukDhtJnOL2qlrcsc8vHNKfD6C0%2BraxL13%2BM8LJew31fu2x7dyRPIAYzesY7hi1VzUpN1zINKwPBAEBisaks7d%2Bt33SUMh%2BohaE44QtL%2FDJ9spUJO%2B5WZPCMNO0191g%2BIg%2FguyU6M9071Bd4eh7VcVe1aAQ1z5rVtJzA7h3Nv1%2FWWBp2aPyCM7j1BFQiDlp4p204kVHcRs9iCrXwBLYxmBBi%2BMeBXEZGT%2FkUSyEQVsfdAeAtowOs79HRNs8LJuS2e02h%2BjGZg%2FQ8KSaLYtIAIOS348INQc68SbnwwpzEdEhH8x8l1VZJc19Jp2fOZ1dTk5ZfTQBprr3E936OFizsZUfJ%2B4ZMXds2v1Q9QeeilzaYaGPvodjp1ExFRHEeobk%2FKO8CwhVUHZCjsUtgfbsTyOsiW0NFtd%2BTYQl2TejP3WgfxKT1YMj%2B56RyW8O1Z8TURVDq9Vcy9%2FvK7OUWUdFgHNtcWPFSezLbgIMqtH2t0irTKmiGLttevMMiGlL8GOqUBKNTlefyDCkwuMxJj71kE25F7nngCa87rWXQSZQ4Kw4%2BZG7QyDBL79iwrRhY0n921LbkPq7T3fJICVrABR8XhEDEBEAT7Ie1oqZOhNtUVX5XFpVpLtY%2BBxuEcic7aN8rnSzxp2B6C2x1f1F8W2LxDG6MQV1tY4hLCw84VwCH%2F3rdvLwiRb%2BDK41NbC0q0v7cWaUT4XfiFT%2F14EPmblXBftbpZnkss&X-Amz-Signature=8580c57337b9951ad2d3f5d15371f2ed9333c5dda722c4b6e1204d68c51a3fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKRV6INT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJRpVSczO2uFA4l9XGvyIB1ys4EEUcZxMwCkVb%2FA3DZAiEA57wWJnVCXe%2BQtl%2BLMzF175WbL72OosQnV89tRi4Oxlkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNzlR4FYDLv9UDtVHyrcA1vLdC3E%2BpCxy80BzpTNis2LupZ%2FnZxJeqQ1yQ%2FXZxrdX7n2pn12UnoRRdD6RrQODxM7Ukr5raI2WSE1GeQk6XLUorX7hHhA56DtDG9PamDUbMETVZtzaBJvOxp12D%2BVDMt%2F4V4TukDhtJnOL2qlrcsc8vHNKfD6C0%2BraxL13%2BM8LJew31fu2x7dyRPIAYzesY7hi1VzUpN1zINKwPBAEBisaks7d%2Bt33SUMh%2BohaE44QtL%2FDJ9spUJO%2B5WZPCMNO0191g%2BIg%2FguyU6M9071Bd4eh7VcVe1aAQ1z5rVtJzA7h3Nv1%2FWWBp2aPyCM7j1BFQiDlp4p204kVHcRs9iCrXwBLYxmBBi%2BMeBXEZGT%2FkUSyEQVsfdAeAtowOs79HRNs8LJuS2e02h%2BjGZg%2FQ8KSaLYtIAIOS348INQc68SbnwwpzEdEhH8x8l1VZJc19Jp2fOZ1dTk5ZfTQBprr3E936OFizsZUfJ%2B4ZMXds2v1Q9QeeilzaYaGPvodjp1ExFRHEeobk%2FKO8CwhVUHZCjsUtgfbsTyOsiW0NFtd%2BTYQl2TejP3WgfxKT1YMj%2B56RyW8O1Z8TURVDq9Vcy9%2FvK7OUWUdFgHNtcWPFSezLbgIMqtH2t0irTKmiGLttevMMiGlL8GOqUBKNTlefyDCkwuMxJj71kE25F7nngCa87rWXQSZQ4Kw4%2BZG7QyDBL79iwrRhY0n921LbkPq7T3fJICVrABR8XhEDEBEAT7Ie1oqZOhNtUVX5XFpVpLtY%2BBxuEcic7aN8rnSzxp2B6C2x1f1F8W2LxDG6MQV1tY4hLCw84VwCH%2F3rdvLwiRb%2BDK41NbC0q0v7cWaUT4XfiFT%2F14EPmblXBftbpZnkss&X-Amz-Signature=d74df54783ede2021cd98a9c91bd01920431c39efd81e5a9b961a9611d505eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKRV6INT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJRpVSczO2uFA4l9XGvyIB1ys4EEUcZxMwCkVb%2FA3DZAiEA57wWJnVCXe%2BQtl%2BLMzF175WbL72OosQnV89tRi4Oxlkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNzlR4FYDLv9UDtVHyrcA1vLdC3E%2BpCxy80BzpTNis2LupZ%2FnZxJeqQ1yQ%2FXZxrdX7n2pn12UnoRRdD6RrQODxM7Ukr5raI2WSE1GeQk6XLUorX7hHhA56DtDG9PamDUbMETVZtzaBJvOxp12D%2BVDMt%2F4V4TukDhtJnOL2qlrcsc8vHNKfD6C0%2BraxL13%2BM8LJew31fu2x7dyRPIAYzesY7hi1VzUpN1zINKwPBAEBisaks7d%2Bt33SUMh%2BohaE44QtL%2FDJ9spUJO%2B5WZPCMNO0191g%2BIg%2FguyU6M9071Bd4eh7VcVe1aAQ1z5rVtJzA7h3Nv1%2FWWBp2aPyCM7j1BFQiDlp4p204kVHcRs9iCrXwBLYxmBBi%2BMeBXEZGT%2FkUSyEQVsfdAeAtowOs79HRNs8LJuS2e02h%2BjGZg%2FQ8KSaLYtIAIOS348INQc68SbnwwpzEdEhH8x8l1VZJc19Jp2fOZ1dTk5ZfTQBprr3E936OFizsZUfJ%2B4ZMXds2v1Q9QeeilzaYaGPvodjp1ExFRHEeobk%2FKO8CwhVUHZCjsUtgfbsTyOsiW0NFtd%2BTYQl2TejP3WgfxKT1YMj%2B56RyW8O1Z8TURVDq9Vcy9%2FvK7OUWUdFgHNtcWPFSezLbgIMqtH2t0irTKmiGLttevMMiGlL8GOqUBKNTlefyDCkwuMxJj71kE25F7nngCa87rWXQSZQ4Kw4%2BZG7QyDBL79iwrRhY0n921LbkPq7T3fJICVrABR8XhEDEBEAT7Ie1oqZOhNtUVX5XFpVpLtY%2BBxuEcic7aN8rnSzxp2B6C2x1f1F8W2LxDG6MQV1tY4hLCw84VwCH%2F3rdvLwiRb%2BDK41NbC0q0v7cWaUT4XfiFT%2F14EPmblXBftbpZnkss&X-Amz-Signature=ec063d48ca164f45c4361595319d85db9a75aab6da3a0546aad9bebeb8ead3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
