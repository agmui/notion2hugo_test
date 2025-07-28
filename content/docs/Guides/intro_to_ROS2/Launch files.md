---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKBRF6M%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC00BETWqsuASAQ62yV2hODWGIGS4OowaRq7KDNe%2Foi4QIhANX%2Behnli%2Bh%2FHMNxVgDMhqhh445kg3cmVmvW2WVAqyBqKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx25fCiLgx68WC9r2Aq3AM0B5LmGUPuWdquopmhXYv784I1e5waTLUVcu3X%2BPeq5dDsD1pehVlS6t1ReuJEd1x5nzctvDY26k3Q2hNTmXww5tvYlUF8ZiEeNEmPMjRc2S41%2FOt85cmdTAzn4Tk7xMdMqx8nrLX49S%2Bd%2FjoVy%2FSMVmNgdrD%2BF7MbWwW%2F1seT6XvqUijv5Psz1DXgUyuCbGrzVv%2BnUvCvNqt8oM1ADxfUprF0c2nQ9lsIKVjscwow4%2Fz0oVL%2FuDG27jzy5UYDGYEjUsWRjryhJ39HKaR0LnHblN0VcUJeqc6BWaWUMuJUaIy7NSiC5Qai6Y4GXc7wBhz3z3r82Ds%2ByYQ9zglED6Q9LIFq%2B0fvfNfpmRV%2BMTDjhWWVV6yu5ri1rNxoeQ%2FE4MlpI73ZqBm0wHBQtSjalCn1sk%2BWZvlxV4lohHmonjAUQjFWRKa4bePpmNzfyo9qeo691pSrrd%2BeBuvjCR%2BMO4fa8hg2x5UEF6AJFuPUvcforpX2nJJyM8PUATJHg2OfwYNYhkXKLZYoz2qnm6kdYJPzkJYmDpMB8DzFG9SwJgXR4o%2BNSWG927lwQf%2BEHpRGNbes30dzT%2BaQLiZB4igyfkMrFK3c93p8skH59aTyQTuhOJxVID7UeShwwpBVOTCeuZ%2FEBjqkAftt3kBJySfGChiKn1mkgpPnTmqUKALM5HwU0ZQyrvkKoUwaj7ULcla5S27ROwy5ZlH2%2F%2FFq9sAymWjkQUa9dvwwcwgMeRtIpMYD7PnNVmC3mJP84tYJhwOOvKqyC7ZRIARd8psP8uZV3GIsU1V0NQFYz7KEZPJV2qK%2FzvGW95mE4sn3txtFrjfMkm7SEFas72aUiZEueUmVjtQKI9iFRgN6W7YC&X-Amz-Signature=873682b7b611a4937e5a112e087e4fdbf3983f45f3ae9a74a7f01ffcd5bc4cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKBRF6M%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC00BETWqsuASAQ62yV2hODWGIGS4OowaRq7KDNe%2Foi4QIhANX%2Behnli%2Bh%2FHMNxVgDMhqhh445kg3cmVmvW2WVAqyBqKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx25fCiLgx68WC9r2Aq3AM0B5LmGUPuWdquopmhXYv784I1e5waTLUVcu3X%2BPeq5dDsD1pehVlS6t1ReuJEd1x5nzctvDY26k3Q2hNTmXww5tvYlUF8ZiEeNEmPMjRc2S41%2FOt85cmdTAzn4Tk7xMdMqx8nrLX49S%2Bd%2FjoVy%2FSMVmNgdrD%2BF7MbWwW%2F1seT6XvqUijv5Psz1DXgUyuCbGrzVv%2BnUvCvNqt8oM1ADxfUprF0c2nQ9lsIKVjscwow4%2Fz0oVL%2FuDG27jzy5UYDGYEjUsWRjryhJ39HKaR0LnHblN0VcUJeqc6BWaWUMuJUaIy7NSiC5Qai6Y4GXc7wBhz3z3r82Ds%2ByYQ9zglED6Q9LIFq%2B0fvfNfpmRV%2BMTDjhWWVV6yu5ri1rNxoeQ%2FE4MlpI73ZqBm0wHBQtSjalCn1sk%2BWZvlxV4lohHmonjAUQjFWRKa4bePpmNzfyo9qeo691pSrrd%2BeBuvjCR%2BMO4fa8hg2x5UEF6AJFuPUvcforpX2nJJyM8PUATJHg2OfwYNYhkXKLZYoz2qnm6kdYJPzkJYmDpMB8DzFG9SwJgXR4o%2BNSWG927lwQf%2BEHpRGNbes30dzT%2BaQLiZB4igyfkMrFK3c93p8skH59aTyQTuhOJxVID7UeShwwpBVOTCeuZ%2FEBjqkAftt3kBJySfGChiKn1mkgpPnTmqUKALM5HwU0ZQyrvkKoUwaj7ULcla5S27ROwy5ZlH2%2F%2FFq9sAymWjkQUa9dvwwcwgMeRtIpMYD7PnNVmC3mJP84tYJhwOOvKqyC7ZRIARd8psP8uZV3GIsU1V0NQFYz7KEZPJV2qK%2FzvGW95mE4sn3txtFrjfMkm7SEFas72aUiZEueUmVjtQKI9iFRgN6W7YC&X-Amz-Signature=100c8df14406ca7fbb694c4a987a788d227b2a1d18938846f6302553ca396519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKBRF6M%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC00BETWqsuASAQ62yV2hODWGIGS4OowaRq7KDNe%2Foi4QIhANX%2Behnli%2Bh%2FHMNxVgDMhqhh445kg3cmVmvW2WVAqyBqKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx25fCiLgx68WC9r2Aq3AM0B5LmGUPuWdquopmhXYv784I1e5waTLUVcu3X%2BPeq5dDsD1pehVlS6t1ReuJEd1x5nzctvDY26k3Q2hNTmXww5tvYlUF8ZiEeNEmPMjRc2S41%2FOt85cmdTAzn4Tk7xMdMqx8nrLX49S%2Bd%2FjoVy%2FSMVmNgdrD%2BF7MbWwW%2F1seT6XvqUijv5Psz1DXgUyuCbGrzVv%2BnUvCvNqt8oM1ADxfUprF0c2nQ9lsIKVjscwow4%2Fz0oVL%2FuDG27jzy5UYDGYEjUsWRjryhJ39HKaR0LnHblN0VcUJeqc6BWaWUMuJUaIy7NSiC5Qai6Y4GXc7wBhz3z3r82Ds%2ByYQ9zglED6Q9LIFq%2B0fvfNfpmRV%2BMTDjhWWVV6yu5ri1rNxoeQ%2FE4MlpI73ZqBm0wHBQtSjalCn1sk%2BWZvlxV4lohHmonjAUQjFWRKa4bePpmNzfyo9qeo691pSrrd%2BeBuvjCR%2BMO4fa8hg2x5UEF6AJFuPUvcforpX2nJJyM8PUATJHg2OfwYNYhkXKLZYoz2qnm6kdYJPzkJYmDpMB8DzFG9SwJgXR4o%2BNSWG927lwQf%2BEHpRGNbes30dzT%2BaQLiZB4igyfkMrFK3c93p8skH59aTyQTuhOJxVID7UeShwwpBVOTCeuZ%2FEBjqkAftt3kBJySfGChiKn1mkgpPnTmqUKALM5HwU0ZQyrvkKoUwaj7ULcla5S27ROwy5ZlH2%2F%2FFq9sAymWjkQUa9dvwwcwgMeRtIpMYD7PnNVmC3mJP84tYJhwOOvKqyC7ZRIARd8psP8uZV3GIsU1V0NQFYz7KEZPJV2qK%2FzvGW95mE4sn3txtFrjfMkm7SEFas72aUiZEueUmVjtQKI9iFRgN6W7YC&X-Amz-Signature=c71af5264c17c66e51a8ac7c8f41cd2510ae19494861f0dae64cfbd6151556b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
