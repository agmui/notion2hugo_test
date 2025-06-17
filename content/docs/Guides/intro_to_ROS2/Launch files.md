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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SOOCAS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzq%2FgvJvrlYYj767OUzXGSZF5OAq%2BJbsADAtCSoXIG5AiBb%2FDI%2Fpdv2VerXtXYAOW4QHFma1NICNhPKVuTFGRBOlCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMxm8O5%2FCZAWcm7fNZKtwDZby2JKni7qcn21zJxIvtVOa4gZ%2B3mttvgV5Luw4jRt%2BTPvCurQf35As%2FBpOWZdVNPHBlvWGqSfrf13%2FHlwbdRhAL86TAsf7F3AOvZnzbLtmFCP4eb0Bx7B1qUfkwg78%2F6gV5BFriRzjKYaxmb297WmAec0YEou2m1Jr70t1%2FY3CRedV4JkQutX%2FStwvnxTy4Nw3tke4fafWu3%2FNsRho376LNYR19B6QThUXB01XVcIHM3vMPj3CzQH4W42Bepr4P3ScPVLWK0qIiemMpZ%2FM7hR9MMstjSs5x1bPYxvAVh5kS%2BCIVKvDqZ3aiYJpnjATfO%2BuPny3HvXkgvhfbRFUjcRg4iX2tD0ZCE41fHmBEQwyyL9B24hcmkGnlX8vGrCvFWoy89Y7LyVzlIZydC%2BH39lJ0ef4G2zGhuinWoXTvBIY31L%2Fw9O0HtL7f5MisjedvvL%2FwlSW4NyKeEN17JRYUaeckd3nFh2FZYq2h6uztN%2FM1jBvOjXfhlmHHJY%2F8%2FoGGs6JsETn2Ai1dWqke74BPE9YIn33GD0O13K7EsuJ%2BMUTjwvWV9QXsB4HGFjgo%2Fzu8MhIld2TJIH913yXInNhIh%2B9NP%2BJuFniVRTavIuNRahyUEirHidASZPuxz5wwhbXGwgY6pgGuK5IFFYvYKlKcTNzU%2FnjusuAsAQXqoWho0BiUv5erAuaaLzOYPb9VoaaHzfP3aNsecOXGnRKa28NaHYqsIn4ZIS4rAxzaA08B%2FucBwE2rNgU7iatmUhgBAcoxn9SCgJpsmzM%2BMNFpgJq6BccIZAL9GDR%2F5%2BgqXUm5GpDV1h6ReZL1B9ywn65amf6AaDIywUZiXbYIbpqiYHlCrIN6UBnaefdl%2BGeN&X-Amz-Signature=29f9a0849487e4a3e59fba6a69495f51e25ebb6d7a48397aabe2d39e52f3cde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SOOCAS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzq%2FgvJvrlYYj767OUzXGSZF5OAq%2BJbsADAtCSoXIG5AiBb%2FDI%2Fpdv2VerXtXYAOW4QHFma1NICNhPKVuTFGRBOlCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMxm8O5%2FCZAWcm7fNZKtwDZby2JKni7qcn21zJxIvtVOa4gZ%2B3mttvgV5Luw4jRt%2BTPvCurQf35As%2FBpOWZdVNPHBlvWGqSfrf13%2FHlwbdRhAL86TAsf7F3AOvZnzbLtmFCP4eb0Bx7B1qUfkwg78%2F6gV5BFriRzjKYaxmb297WmAec0YEou2m1Jr70t1%2FY3CRedV4JkQutX%2FStwvnxTy4Nw3tke4fafWu3%2FNsRho376LNYR19B6QThUXB01XVcIHM3vMPj3CzQH4W42Bepr4P3ScPVLWK0qIiemMpZ%2FM7hR9MMstjSs5x1bPYxvAVh5kS%2BCIVKvDqZ3aiYJpnjATfO%2BuPny3HvXkgvhfbRFUjcRg4iX2tD0ZCE41fHmBEQwyyL9B24hcmkGnlX8vGrCvFWoy89Y7LyVzlIZydC%2BH39lJ0ef4G2zGhuinWoXTvBIY31L%2Fw9O0HtL7f5MisjedvvL%2FwlSW4NyKeEN17JRYUaeckd3nFh2FZYq2h6uztN%2FM1jBvOjXfhlmHHJY%2F8%2FoGGs6JsETn2Ai1dWqke74BPE9YIn33GD0O13K7EsuJ%2BMUTjwvWV9QXsB4HGFjgo%2Fzu8MhIld2TJIH913yXInNhIh%2B9NP%2BJuFniVRTavIuNRahyUEirHidASZPuxz5wwhbXGwgY6pgGuK5IFFYvYKlKcTNzU%2FnjusuAsAQXqoWho0BiUv5erAuaaLzOYPb9VoaaHzfP3aNsecOXGnRKa28NaHYqsIn4ZIS4rAxzaA08B%2FucBwE2rNgU7iatmUhgBAcoxn9SCgJpsmzM%2BMNFpgJq6BccIZAL9GDR%2F5%2BgqXUm5GpDV1h6ReZL1B9ywn65amf6AaDIywUZiXbYIbpqiYHlCrIN6UBnaefdl%2BGeN&X-Amz-Signature=433306f69d5ff16603fe0697a69749ddced0a59692e6f5e2745cf19fba85fb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2SOOCAS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzq%2FgvJvrlYYj767OUzXGSZF5OAq%2BJbsADAtCSoXIG5AiBb%2FDI%2Fpdv2VerXtXYAOW4QHFma1NICNhPKVuTFGRBOlCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMxm8O5%2FCZAWcm7fNZKtwDZby2JKni7qcn21zJxIvtVOa4gZ%2B3mttvgV5Luw4jRt%2BTPvCurQf35As%2FBpOWZdVNPHBlvWGqSfrf13%2FHlwbdRhAL86TAsf7F3AOvZnzbLtmFCP4eb0Bx7B1qUfkwg78%2F6gV5BFriRzjKYaxmb297WmAec0YEou2m1Jr70t1%2FY3CRedV4JkQutX%2FStwvnxTy4Nw3tke4fafWu3%2FNsRho376LNYR19B6QThUXB01XVcIHM3vMPj3CzQH4W42Bepr4P3ScPVLWK0qIiemMpZ%2FM7hR9MMstjSs5x1bPYxvAVh5kS%2BCIVKvDqZ3aiYJpnjATfO%2BuPny3HvXkgvhfbRFUjcRg4iX2tD0ZCE41fHmBEQwyyL9B24hcmkGnlX8vGrCvFWoy89Y7LyVzlIZydC%2BH39lJ0ef4G2zGhuinWoXTvBIY31L%2Fw9O0HtL7f5MisjedvvL%2FwlSW4NyKeEN17JRYUaeckd3nFh2FZYq2h6uztN%2FM1jBvOjXfhlmHHJY%2F8%2FoGGs6JsETn2Ai1dWqke74BPE9YIn33GD0O13K7EsuJ%2BMUTjwvWV9QXsB4HGFjgo%2Fzu8MhIld2TJIH913yXInNhIh%2B9NP%2BJuFniVRTavIuNRahyUEirHidASZPuxz5wwhbXGwgY6pgGuK5IFFYvYKlKcTNzU%2FnjusuAsAQXqoWho0BiUv5erAuaaLzOYPb9VoaaHzfP3aNsecOXGnRKa28NaHYqsIn4ZIS4rAxzaA08B%2FucBwE2rNgU7iatmUhgBAcoxn9SCgJpsmzM%2BMNFpgJq6BccIZAL9GDR%2F5%2BgqXUm5GpDV1h6ReZL1B9ywn65amf6AaDIywUZiXbYIbpqiYHlCrIN6UBnaefdl%2BGeN&X-Amz-Signature=133abb19fb55b729513d93ebd1e85cbf29401cdb3c443c9fbf92ede3515cd0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
