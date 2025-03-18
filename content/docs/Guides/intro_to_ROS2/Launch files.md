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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIMIEIH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIE%2F90quPFbe8kmIx%2FOwylzvlGxss4WWrWZaZHcg9EgzlAiATAhrqbpYVzufs7oAHPyFCSG0speIYcSk6ObLR7AP0GCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWrPpwv%2F%2B5SCFEBTgKtwD9gRLG03fcLTSxO38I3MyNbo7cptI5Eh7oE4JNNzMGt7oGU%2B63Q%2FnJY7PFwj2KnExi8u%2F0I9Fjtr6%2BQpzOoeysq0EX6WCJ94dBYtEWP%2BiVaKtUbk3nWFSWe3zqEZDus%2BxMAQwgQNxFF7vsDxf8pimPfpppRAtUpvZXJaKhRPy6ni%2BQfi69sxXvfqyAQ0MWzhjS4SroPaTnRozeOtxMaIcUbB3JUTiaPX1FRe3r58Lmp8JWmPSjnoBNS5P8LLwrRufrqhzP8J2qUnjJprbh%2Bd6%2BKNrG6PXbdjzhxjn5qona6bOiF1BM%2BQnP7aMtbqs7q3qYdEQeeB2P06IZhvPr16vdOBqSoNo3SYxQixybF902ooFXrMWytqrxQsx5Bc0axcg3it9B3iUnf%2BbJxVNY3N%2Bjl6ZzRh3K1OvYNAT%2BVtTTmAP1WbzZvRr2Qo36T4L6XCh%2FRsvjuV4yu8esE8wlhoajzGUdjOQxuzKMv7%2B4cBnu4yG6eqoD1fmNfcpU4Hfv0JfcbMD3wqJQIUGvdo6T8oxje63%2FQweRbY07WBXeWZVhnLiWdByOYunJ%2FZjZtTTAHn6XqRjLV7JpAABFzlwwrstqnOHxtAR%2Flw98hwEMpKdKklyGfoeW%2Fk7Ova1yEowt9TmvgY6pgH3jJtp80y%2Fb9iqydLKuBhlI6vdaDIgtPvqfyE9x5GBnRAooR2t2qsTK2vn5J%2FM66TCu8qDHY8JTueTERcrLwR7nbjVnpJtZL8PQo67UPXZbIY2pI%2FhB9OWHiAidiOhR2QszCxV42u7mYrdo%2B9EAoqXq3lRB%2FNDDsg2204Y4K835CrF3Gv4bLmbgiKyr%2BTYWf2w2Koe4wJMXcs16mMWZXaV1OaukzpB&X-Amz-Signature=1616cab218b3d31f8a6572aec7e8d365de058124906116b8004e532834bbd4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIMIEIH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIE%2F90quPFbe8kmIx%2FOwylzvlGxss4WWrWZaZHcg9EgzlAiATAhrqbpYVzufs7oAHPyFCSG0speIYcSk6ObLR7AP0GCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWrPpwv%2F%2B5SCFEBTgKtwD9gRLG03fcLTSxO38I3MyNbo7cptI5Eh7oE4JNNzMGt7oGU%2B63Q%2FnJY7PFwj2KnExi8u%2F0I9Fjtr6%2BQpzOoeysq0EX6WCJ94dBYtEWP%2BiVaKtUbk3nWFSWe3zqEZDus%2BxMAQwgQNxFF7vsDxf8pimPfpppRAtUpvZXJaKhRPy6ni%2BQfi69sxXvfqyAQ0MWzhjS4SroPaTnRozeOtxMaIcUbB3JUTiaPX1FRe3r58Lmp8JWmPSjnoBNS5P8LLwrRufrqhzP8J2qUnjJprbh%2Bd6%2BKNrG6PXbdjzhxjn5qona6bOiF1BM%2BQnP7aMtbqs7q3qYdEQeeB2P06IZhvPr16vdOBqSoNo3SYxQixybF902ooFXrMWytqrxQsx5Bc0axcg3it9B3iUnf%2BbJxVNY3N%2Bjl6ZzRh3K1OvYNAT%2BVtTTmAP1WbzZvRr2Qo36T4L6XCh%2FRsvjuV4yu8esE8wlhoajzGUdjOQxuzKMv7%2B4cBnu4yG6eqoD1fmNfcpU4Hfv0JfcbMD3wqJQIUGvdo6T8oxje63%2FQweRbY07WBXeWZVhnLiWdByOYunJ%2FZjZtTTAHn6XqRjLV7JpAABFzlwwrstqnOHxtAR%2Flw98hwEMpKdKklyGfoeW%2Fk7Ova1yEowt9TmvgY6pgH3jJtp80y%2Fb9iqydLKuBhlI6vdaDIgtPvqfyE9x5GBnRAooR2t2qsTK2vn5J%2FM66TCu8qDHY8JTueTERcrLwR7nbjVnpJtZL8PQo67UPXZbIY2pI%2FhB9OWHiAidiOhR2QszCxV42u7mYrdo%2B9EAoqXq3lRB%2FNDDsg2204Y4K835CrF3Gv4bLmbgiKyr%2BTYWf2w2Koe4wJMXcs16mMWZXaV1OaukzpB&X-Amz-Signature=e85e19fcd54952c5ab2ea28aed64d1da12ff585520ef3901c26c9fbf251b043d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNIMIEIH%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIE%2F90quPFbe8kmIx%2FOwylzvlGxss4WWrWZaZHcg9EgzlAiATAhrqbpYVzufs7oAHPyFCSG0speIYcSk6ObLR7AP0GCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMWrPpwv%2F%2B5SCFEBTgKtwD9gRLG03fcLTSxO38I3MyNbo7cptI5Eh7oE4JNNzMGt7oGU%2B63Q%2FnJY7PFwj2KnExi8u%2F0I9Fjtr6%2BQpzOoeysq0EX6WCJ94dBYtEWP%2BiVaKtUbk3nWFSWe3zqEZDus%2BxMAQwgQNxFF7vsDxf8pimPfpppRAtUpvZXJaKhRPy6ni%2BQfi69sxXvfqyAQ0MWzhjS4SroPaTnRozeOtxMaIcUbB3JUTiaPX1FRe3r58Lmp8JWmPSjnoBNS5P8LLwrRufrqhzP8J2qUnjJprbh%2Bd6%2BKNrG6PXbdjzhxjn5qona6bOiF1BM%2BQnP7aMtbqs7q3qYdEQeeB2P06IZhvPr16vdOBqSoNo3SYxQixybF902ooFXrMWytqrxQsx5Bc0axcg3it9B3iUnf%2BbJxVNY3N%2Bjl6ZzRh3K1OvYNAT%2BVtTTmAP1WbzZvRr2Qo36T4L6XCh%2FRsvjuV4yu8esE8wlhoajzGUdjOQxuzKMv7%2B4cBnu4yG6eqoD1fmNfcpU4Hfv0JfcbMD3wqJQIUGvdo6T8oxje63%2FQweRbY07WBXeWZVhnLiWdByOYunJ%2FZjZtTTAHn6XqRjLV7JpAABFzlwwrstqnOHxtAR%2Flw98hwEMpKdKklyGfoeW%2Fk7Ova1yEowt9TmvgY6pgH3jJtp80y%2Fb9iqydLKuBhlI6vdaDIgtPvqfyE9x5GBnRAooR2t2qsTK2vn5J%2FM66TCu8qDHY8JTueTERcrLwR7nbjVnpJtZL8PQo67UPXZbIY2pI%2FhB9OWHiAidiOhR2QszCxV42u7mYrdo%2B9EAoqXq3lRB%2FNDDsg2204Y4K835CrF3Gv4bLmbgiKyr%2BTYWf2w2Koe4wJMXcs16mMWZXaV1OaukzpB&X-Amz-Signature=74a6065b2a11ea4d79a95d3a6392521eeb8a3c97f6f410896011edffb2aab913&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
