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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFHVL5X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIdrC9LQHRe2ICyYznCyBdI8rsIR1y6DnuALWNHFf7BAIhANF3cl3ToeFRfz2p1fpm1ovJX47FPJdOswj7NW364lexKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaLxxmhX4SJSwgfOkq3AOCsjcWxjaS%2F9HIepov0VPtyeMLINJ11T6pP2JHLIXO4sTFWRjfqX%2Fpg27OEOQVkMAgBSyJMlpUO9iK3sTCNaN%2BqYgLkvZkUjH2e8104FwYNEYMEI1kgGEuyqT%2BmHHDVtmnQMh5GJ9Sp3u80woGoozGJseAm926MLv%2BDYcHyTU78bYHYhabvHtTvlM%2BEO2%2F0olOKsoXbKATFPjCdfGQC%2B8VIChFDt%2B2HSdLVL0c5BhQdviU63rb%2BImeuT6kbCQqCiPi12dFGX6jmJed967VY7ebTLkhoPKPbi%2FMSZIV%2Bq8uJQZ3ITCsCTHdkHoi3r2YWJys7CuxqTS7FK756%2FkcZJkGZtABCLpf%2FX4wlsZFH7Vs%2B6QCYXpxoa%2BqBqnJ2zZCbXrtr9IuQaeE8C3bKH2WNGxNqGY0wIHZkLMe0eaNPP95qymcYhqbrldPnp%2BTYRkpAUO9TnMEi16n8%2Fi42tua1r9QJXe8k3nZg9HBGh7hCqq%2B%2B9r5m6SQt%2BqHub7AYifrfIsGin4PgmglojCHoSK3zLiq1oAhY86eS1%2F%2FVoV8YadM3W7z27SUXJsUU3qxpoZHDLf7ddsF5PDsKLtNj6Sb28Vm1lORs4PmWIy%2FbvEq4uvhxjBwhVBGNx6ZKt9UQTCk6ru%2FBjqkAZkoZuKryiUUzV1JExHz5wn9F%2F1i709fkVkgWT%2BTNleUBdinP5e1NPmAfJOFkBoqxlipVbi7BlL0jcLBM%2BDNfiGUjXRsTdxgxEEKYnnxvgbZrBRuo%2BXtV3NBOwgK%2BZ6wn3KpcaL0ooXT7TKqdwERzVlkFgGIlNBori9FzRRpgU1ib%2BnZhq0yrimMUUyjK7bg4Hvi%2F90rkQ1sQ8sNCa7Ksg63z%2BbZ&X-Amz-Signature=a7a4cea47cefd47b874289c80f731d8a9d5c5b6ddfb640b611e5a683d875077e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFHVL5X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIdrC9LQHRe2ICyYznCyBdI8rsIR1y6DnuALWNHFf7BAIhANF3cl3ToeFRfz2p1fpm1ovJX47FPJdOswj7NW364lexKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaLxxmhX4SJSwgfOkq3AOCsjcWxjaS%2F9HIepov0VPtyeMLINJ11T6pP2JHLIXO4sTFWRjfqX%2Fpg27OEOQVkMAgBSyJMlpUO9iK3sTCNaN%2BqYgLkvZkUjH2e8104FwYNEYMEI1kgGEuyqT%2BmHHDVtmnQMh5GJ9Sp3u80woGoozGJseAm926MLv%2BDYcHyTU78bYHYhabvHtTvlM%2BEO2%2F0olOKsoXbKATFPjCdfGQC%2B8VIChFDt%2B2HSdLVL0c5BhQdviU63rb%2BImeuT6kbCQqCiPi12dFGX6jmJed967VY7ebTLkhoPKPbi%2FMSZIV%2Bq8uJQZ3ITCsCTHdkHoi3r2YWJys7CuxqTS7FK756%2FkcZJkGZtABCLpf%2FX4wlsZFH7Vs%2B6QCYXpxoa%2BqBqnJ2zZCbXrtr9IuQaeE8C3bKH2WNGxNqGY0wIHZkLMe0eaNPP95qymcYhqbrldPnp%2BTYRkpAUO9TnMEi16n8%2Fi42tua1r9QJXe8k3nZg9HBGh7hCqq%2B%2B9r5m6SQt%2BqHub7AYifrfIsGin4PgmglojCHoSK3zLiq1oAhY86eS1%2F%2FVoV8YadM3W7z27SUXJsUU3qxpoZHDLf7ddsF5PDsKLtNj6Sb28Vm1lORs4PmWIy%2FbvEq4uvhxjBwhVBGNx6ZKt9UQTCk6ru%2FBjqkAZkoZuKryiUUzV1JExHz5wn9F%2F1i709fkVkgWT%2BTNleUBdinP5e1NPmAfJOFkBoqxlipVbi7BlL0jcLBM%2BDNfiGUjXRsTdxgxEEKYnnxvgbZrBRuo%2BXtV3NBOwgK%2BZ6wn3KpcaL0ooXT7TKqdwERzVlkFgGIlNBori9FzRRpgU1ib%2BnZhq0yrimMUUyjK7bg4Hvi%2F90rkQ1sQ8sNCa7Ksg63z%2BbZ&X-Amz-Signature=0519f19ceff19c243e2e79847a0b94b5628fa2876ecfe1d19af519055226355a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFHVL5X%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIdrC9LQHRe2ICyYznCyBdI8rsIR1y6DnuALWNHFf7BAIhANF3cl3ToeFRfz2p1fpm1ovJX47FPJdOswj7NW364lexKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaLxxmhX4SJSwgfOkq3AOCsjcWxjaS%2F9HIepov0VPtyeMLINJ11T6pP2JHLIXO4sTFWRjfqX%2Fpg27OEOQVkMAgBSyJMlpUO9iK3sTCNaN%2BqYgLkvZkUjH2e8104FwYNEYMEI1kgGEuyqT%2BmHHDVtmnQMh5GJ9Sp3u80woGoozGJseAm926MLv%2BDYcHyTU78bYHYhabvHtTvlM%2BEO2%2F0olOKsoXbKATFPjCdfGQC%2B8VIChFDt%2B2HSdLVL0c5BhQdviU63rb%2BImeuT6kbCQqCiPi12dFGX6jmJed967VY7ebTLkhoPKPbi%2FMSZIV%2Bq8uJQZ3ITCsCTHdkHoi3r2YWJys7CuxqTS7FK756%2FkcZJkGZtABCLpf%2FX4wlsZFH7Vs%2B6QCYXpxoa%2BqBqnJ2zZCbXrtr9IuQaeE8C3bKH2WNGxNqGY0wIHZkLMe0eaNPP95qymcYhqbrldPnp%2BTYRkpAUO9TnMEi16n8%2Fi42tua1r9QJXe8k3nZg9HBGh7hCqq%2B%2B9r5m6SQt%2BqHub7AYifrfIsGin4PgmglojCHoSK3zLiq1oAhY86eS1%2F%2FVoV8YadM3W7z27SUXJsUU3qxpoZHDLf7ddsF5PDsKLtNj6Sb28Vm1lORs4PmWIy%2FbvEq4uvhxjBwhVBGNx6ZKt9UQTCk6ru%2FBjqkAZkoZuKryiUUzV1JExHz5wn9F%2F1i709fkVkgWT%2BTNleUBdinP5e1NPmAfJOFkBoqxlipVbi7BlL0jcLBM%2BDNfiGUjXRsTdxgxEEKYnnxvgbZrBRuo%2BXtV3NBOwgK%2BZ6wn3KpcaL0ooXT7TKqdwERzVlkFgGIlNBori9FzRRpgU1ib%2BnZhq0yrimMUUyjK7bg4Hvi%2F90rkQ1sQ8sNCa7Ksg63z%2BbZ&X-Amz-Signature=9d6644b4a9568b58e1fbfcb10b34ef508dc33ce3b03bc17fc3bb5df27cba82d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
