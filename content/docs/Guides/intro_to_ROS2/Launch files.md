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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423V4LLC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FWXl5ZVxEBUfne1y6vN%2FUB%2BgdAL3rY6fWzbc4aBg0wIhANXp6QPe4d16lXYv7fhD7BqlXKXH6PErszZplmOQ4XBmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOJBxgMVkQ%2FxcB3vwq3APduYUOTcgdBD2JNuB0e2ry7OuhCvl5%2BDbZLisbpywluzntAWGmqQEXbG9S8Haa%2BjYtmaDM75zshzR%2BkNarrNXpbBlnzcxqWPH5YnRNrn9VJlUDOREp5t6cYcKlnLYLKyN1b0jM0caoFKQZDMgXZ2lWH7%2B9uGQH%2FShCAf6JUckoz0AT32KbRDmP5M97SRzTzHCnlpnsz1oELnYLhFs%2FImTlZawyC69Cqrq%2Bl4yCYghZPjRAKh4Lw1Ehk7e2d4RvY0peJoMa9S2GRmkhqsTFkS3zt1UXc1EufK5WKghb%2FmM7h28KaXdNyYQ1RDjv36FktVCH9zVIuMjcfsit%2FvMNG7BlLg29ysJOqJsduVjBZNze5e7NEC3dil14m4YI7msUR1duqAmBaR97eZFOD5LD12R1hcdj90Kv7HO0SZHAPQdx4E2%2FgiIF5%2Fwze4P8x7M%2Fb6%2FeTsNkBs3YVQhyCDZfVu6GIjs8VHelMVlY2V%2FyHkK%2Bil90xj3vLi%2F8r9bqajrszmqfuWovykTaMRX%2B51W2wDWyLQ6lKbg4LQ991JsISCXtfiLcniU0LIQDF3KS7dwLuf4YSU3lYHfiLhqxEhGoSqBIvmCZCe%2Fpz05bfZqsPiA6NTi8cFi2aP31dIvmmTDP77rDBjqkAfjQvMf1zfpwVBTlaiACilsW0cicdrmMxzxM7WjbT81h4AQNljOLXg%2BdDACBRNcxrwnZXAKynrUugZKMthDBVPgM9ZYZPv6FBjZYHUc%2BfwWeHmf4wD7R941aQDuRVdo%2F7lzIx3QWXqsxiB%2FVE8AEZldKMht4DlLuEvseNjPWXJ15pm%2BQXnB5Qe9uaGiOHzM1UduzqFd4ZYA%2BUEnb59xWvTyoJh1K&X-Amz-Signature=776badf394ab12617501b770f1910e1fc1282c00cb61900c2ab0e26b151b3e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423V4LLC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FWXl5ZVxEBUfne1y6vN%2FUB%2BgdAL3rY6fWzbc4aBg0wIhANXp6QPe4d16lXYv7fhD7BqlXKXH6PErszZplmOQ4XBmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOJBxgMVkQ%2FxcB3vwq3APduYUOTcgdBD2JNuB0e2ry7OuhCvl5%2BDbZLisbpywluzntAWGmqQEXbG9S8Haa%2BjYtmaDM75zshzR%2BkNarrNXpbBlnzcxqWPH5YnRNrn9VJlUDOREp5t6cYcKlnLYLKyN1b0jM0caoFKQZDMgXZ2lWH7%2B9uGQH%2FShCAf6JUckoz0AT32KbRDmP5M97SRzTzHCnlpnsz1oELnYLhFs%2FImTlZawyC69Cqrq%2Bl4yCYghZPjRAKh4Lw1Ehk7e2d4RvY0peJoMa9S2GRmkhqsTFkS3zt1UXc1EufK5WKghb%2FmM7h28KaXdNyYQ1RDjv36FktVCH9zVIuMjcfsit%2FvMNG7BlLg29ysJOqJsduVjBZNze5e7NEC3dil14m4YI7msUR1duqAmBaR97eZFOD5LD12R1hcdj90Kv7HO0SZHAPQdx4E2%2FgiIF5%2Fwze4P8x7M%2Fb6%2FeTsNkBs3YVQhyCDZfVu6GIjs8VHelMVlY2V%2FyHkK%2Bil90xj3vLi%2F8r9bqajrszmqfuWovykTaMRX%2B51W2wDWyLQ6lKbg4LQ991JsISCXtfiLcniU0LIQDF3KS7dwLuf4YSU3lYHfiLhqxEhGoSqBIvmCZCe%2Fpz05bfZqsPiA6NTi8cFi2aP31dIvmmTDP77rDBjqkAfjQvMf1zfpwVBTlaiACilsW0cicdrmMxzxM7WjbT81h4AQNljOLXg%2BdDACBRNcxrwnZXAKynrUugZKMthDBVPgM9ZYZPv6FBjZYHUc%2BfwWeHmf4wD7R941aQDuRVdo%2F7lzIx3QWXqsxiB%2FVE8AEZldKMht4DlLuEvseNjPWXJ15pm%2BQXnB5Qe9uaGiOHzM1UduzqFd4ZYA%2BUEnb59xWvTyoJh1K&X-Amz-Signature=279d233b4d690fb0952ca6f1a4c482916ef23f567018069e0bba5c99ee7f2e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423V4LLC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FWXl5ZVxEBUfne1y6vN%2FUB%2BgdAL3rY6fWzbc4aBg0wIhANXp6QPe4d16lXYv7fhD7BqlXKXH6PErszZplmOQ4XBmKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOJBxgMVkQ%2FxcB3vwq3APduYUOTcgdBD2JNuB0e2ry7OuhCvl5%2BDbZLisbpywluzntAWGmqQEXbG9S8Haa%2BjYtmaDM75zshzR%2BkNarrNXpbBlnzcxqWPH5YnRNrn9VJlUDOREp5t6cYcKlnLYLKyN1b0jM0caoFKQZDMgXZ2lWH7%2B9uGQH%2FShCAf6JUckoz0AT32KbRDmP5M97SRzTzHCnlpnsz1oELnYLhFs%2FImTlZawyC69Cqrq%2Bl4yCYghZPjRAKh4Lw1Ehk7e2d4RvY0peJoMa9S2GRmkhqsTFkS3zt1UXc1EufK5WKghb%2FmM7h28KaXdNyYQ1RDjv36FktVCH9zVIuMjcfsit%2FvMNG7BlLg29ysJOqJsduVjBZNze5e7NEC3dil14m4YI7msUR1duqAmBaR97eZFOD5LD12R1hcdj90Kv7HO0SZHAPQdx4E2%2FgiIF5%2Fwze4P8x7M%2Fb6%2FeTsNkBs3YVQhyCDZfVu6GIjs8VHelMVlY2V%2FyHkK%2Bil90xj3vLi%2F8r9bqajrszmqfuWovykTaMRX%2B51W2wDWyLQ6lKbg4LQ991JsISCXtfiLcniU0LIQDF3KS7dwLuf4YSU3lYHfiLhqxEhGoSqBIvmCZCe%2Fpz05bfZqsPiA6NTi8cFi2aP31dIvmmTDP77rDBjqkAfjQvMf1zfpwVBTlaiACilsW0cicdrmMxzxM7WjbT81h4AQNljOLXg%2BdDACBRNcxrwnZXAKynrUugZKMthDBVPgM9ZYZPv6FBjZYHUc%2BfwWeHmf4wD7R941aQDuRVdo%2F7lzIx3QWXqsxiB%2FVE8AEZldKMht4DlLuEvseNjPWXJ15pm%2BQXnB5Qe9uaGiOHzM1UduzqFd4ZYA%2BUEnb59xWvTyoJh1K&X-Amz-Signature=f924eacca88a46ad21c3e611058e9400c3ca83beda951dad1b9771b315219d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
