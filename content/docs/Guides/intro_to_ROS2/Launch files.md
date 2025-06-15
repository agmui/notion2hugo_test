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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OZBOA5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0S8Q33Utmni9qlCVY3b3Bcyp%2FFMpGlsSajWXZp2F9jQIgPQWTKQkxk9itMYFLLagPtAXyFcIwCse%2BGkfxHHP20XAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJQi3xsecf5spXAkiircA%2FfZIHZKoJguH8INBFuxaadSXxUP6SqN5dNEFKZUdepU9TAwsPA%2BC8gaLQw46ZsfKzapSvGPd%2F773Dy0XxF8ExSbNMFYi5k3%2FjnihEeacEqGLYCJMB2ogw6pEdST%2BXA1SLLAoU53ptbpsd%2BgrPSURygZjnJdJMjCmZiwrC%2FRRYDbDMD5ScE0io6NtLwy5DsqjnNP%2FvfJAI%2FgFFSvcGux3tRsrVyAllWJvyo5ZOAH5SuWKywYKkLIpq5juj1QaeO%2Bf5Z9LvTrBGIjvGnsIrj5nbDbmS5l5K3e%2BzawxKoog0nsRYaPJ1IgLdu6JF9q8JeXIKZ8ASYaA%2FkhVkEzO3XVrGNZE98hjYz9fettBl1rggoA4ekCN3bBlH4Ex%2FADGiStwzfMRhP1%2F2kkkIyXMORY1D9mqGHOoyyMyAfjEfxTe9CGozWvGM%2BRvHA73fFwsHhGWFonXVOHEQrx6Ce2DzICcid0orclTCtLTRhiDhXOaBzetn0kaigdQcQ7dSzJ0iHIMgbXCPJOmoWSmJ3ZeHUOC09mP9WL3DdvxgIl2YIqGXqyJIjhEwtXM6m6cEic59otaZi2jBs8eDjeVC%2BEr5MMELrFVpWYybK0yidhVdWhKNnvup3C6eH%2FmD%2BOWaxvMLDOvMIGOqUB63JQtH%2F9pVRWuFraIW8qCF%2Ft5mlkbudhIz46IauQNu9V0HciLNfBT%2Fube46SGPKxXmhfjdkXD8K6mJr%2BGjq4KlNBWKNYPLah66h%2BfKM6ifwNj%2FnXsRZnakE8AbScRj3g6%2BYqVaYPsPSOARPkQ%2BO18iQncvkV%2FuPZhzDSTV7uYzc5QjfGdcTrWh4ETxJ5C7fDncKG11fOlq1SBHC2lKLKL%2BrOYJF1&X-Amz-Signature=c405954da8736af656f8b3901aec4c27ac24e72b09eb6c5a0bf20b822adadd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OZBOA5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0S8Q33Utmni9qlCVY3b3Bcyp%2FFMpGlsSajWXZp2F9jQIgPQWTKQkxk9itMYFLLagPtAXyFcIwCse%2BGkfxHHP20XAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJQi3xsecf5spXAkiircA%2FfZIHZKoJguH8INBFuxaadSXxUP6SqN5dNEFKZUdepU9TAwsPA%2BC8gaLQw46ZsfKzapSvGPd%2F773Dy0XxF8ExSbNMFYi5k3%2FjnihEeacEqGLYCJMB2ogw6pEdST%2BXA1SLLAoU53ptbpsd%2BgrPSURygZjnJdJMjCmZiwrC%2FRRYDbDMD5ScE0io6NtLwy5DsqjnNP%2FvfJAI%2FgFFSvcGux3tRsrVyAllWJvyo5ZOAH5SuWKywYKkLIpq5juj1QaeO%2Bf5Z9LvTrBGIjvGnsIrj5nbDbmS5l5K3e%2BzawxKoog0nsRYaPJ1IgLdu6JF9q8JeXIKZ8ASYaA%2FkhVkEzO3XVrGNZE98hjYz9fettBl1rggoA4ekCN3bBlH4Ex%2FADGiStwzfMRhP1%2F2kkkIyXMORY1D9mqGHOoyyMyAfjEfxTe9CGozWvGM%2BRvHA73fFwsHhGWFonXVOHEQrx6Ce2DzICcid0orclTCtLTRhiDhXOaBzetn0kaigdQcQ7dSzJ0iHIMgbXCPJOmoWSmJ3ZeHUOC09mP9WL3DdvxgIl2YIqGXqyJIjhEwtXM6m6cEic59otaZi2jBs8eDjeVC%2BEr5MMELrFVpWYybK0yidhVdWhKNnvup3C6eH%2FmD%2BOWaxvMLDOvMIGOqUB63JQtH%2F9pVRWuFraIW8qCF%2Ft5mlkbudhIz46IauQNu9V0HciLNfBT%2Fube46SGPKxXmhfjdkXD8K6mJr%2BGjq4KlNBWKNYPLah66h%2BfKM6ifwNj%2FnXsRZnakE8AbScRj3g6%2BYqVaYPsPSOARPkQ%2BO18iQncvkV%2FuPZhzDSTV7uYzc5QjfGdcTrWh4ETxJ5C7fDncKG11fOlq1SBHC2lKLKL%2BrOYJF1&X-Amz-Signature=7199276208b745216f94dad5876f908395cff62935f66112f8df43cb8bc07b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OZBOA5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD0S8Q33Utmni9qlCVY3b3Bcyp%2FFMpGlsSajWXZp2F9jQIgPQWTKQkxk9itMYFLLagPtAXyFcIwCse%2BGkfxHHP20XAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJQi3xsecf5spXAkiircA%2FfZIHZKoJguH8INBFuxaadSXxUP6SqN5dNEFKZUdepU9TAwsPA%2BC8gaLQw46ZsfKzapSvGPd%2F773Dy0XxF8ExSbNMFYi5k3%2FjnihEeacEqGLYCJMB2ogw6pEdST%2BXA1SLLAoU53ptbpsd%2BgrPSURygZjnJdJMjCmZiwrC%2FRRYDbDMD5ScE0io6NtLwy5DsqjnNP%2FvfJAI%2FgFFSvcGux3tRsrVyAllWJvyo5ZOAH5SuWKywYKkLIpq5juj1QaeO%2Bf5Z9LvTrBGIjvGnsIrj5nbDbmS5l5K3e%2BzawxKoog0nsRYaPJ1IgLdu6JF9q8JeXIKZ8ASYaA%2FkhVkEzO3XVrGNZE98hjYz9fettBl1rggoA4ekCN3bBlH4Ex%2FADGiStwzfMRhP1%2F2kkkIyXMORY1D9mqGHOoyyMyAfjEfxTe9CGozWvGM%2BRvHA73fFwsHhGWFonXVOHEQrx6Ce2DzICcid0orclTCtLTRhiDhXOaBzetn0kaigdQcQ7dSzJ0iHIMgbXCPJOmoWSmJ3ZeHUOC09mP9WL3DdvxgIl2YIqGXqyJIjhEwtXM6m6cEic59otaZi2jBs8eDjeVC%2BEr5MMELrFVpWYybK0yidhVdWhKNnvup3C6eH%2FmD%2BOWaxvMLDOvMIGOqUB63JQtH%2F9pVRWuFraIW8qCF%2Ft5mlkbudhIz46IauQNu9V0HciLNfBT%2Fube46SGPKxXmhfjdkXD8K6mJr%2BGjq4KlNBWKNYPLah66h%2BfKM6ifwNj%2FnXsRZnakE8AbScRj3g6%2BYqVaYPsPSOARPkQ%2BO18iQncvkV%2FuPZhzDSTV7uYzc5QjfGdcTrWh4ETxJ5C7fDncKG11fOlq1SBHC2lKLKL%2BrOYJF1&X-Amz-Signature=d35614c9544179f6d2cd108e8274fcd900e359a7e8d96997d013a4f48befd0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
