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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEFF5T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIF%2Fw8QaBwPD%2Bu5pc7jzfynszw%2BqYFUj35i%2B5lZ5dQnjuAiAUHxPVmCtCkP4EA7E%2FxLDEanGLq%2Fj1lKI%2BRb%2B26AC%2FTCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlQ2JkASEp6znaWfRKtwDkCM1oFyucs3NelcBd00PQKYpGw5qXfAtdBruys1iXCOnzqDR%2FDJcpfbb6bZWfJ4hGnRhurw17vn%2FhcIX2kfJcfmbLMgG%2F64rWuhwqx%2BXp1%2BLAR4CGKKQN7X0Bac8yJUGbV3kLbtlkb0J8QM79VCVmxiMnEAqgtMXWxUCYxnpFrKrr4zEByXuEOVzbVRN2OzOuk37kep1D7i9yRmOq%2FPHPXr1j2vmrhcos46kB2dh3qqqRJNrlMC5GGSOMl0A49l3sVEORVhEcX06R%2FOoyTVjaazN9TEBUKtdJKaQl0E4RWigLipd3nh9rT%2FFkKPt5eXiGCY3LUpDgzGjFMmq75rl0NfKBINuxwd8FA31QsQMV%2FtbyuDkbEJTo0%2F5bwCQ%2Bf8CS9o2Sw9l7lfE8vZfCKR%2FoGEC07YDXY7DjBYydKWaMA%2BFtVejRzAPB048Kpji2twAuCqXHgVJiGfObxy2ga5xY4OsA00DWfLMj3F6NTpIQRwgr3OQBodzcp2Uk8Nc735IQt0slBBQvFKg84f3ZGIlHndR%2FbWtL%2FYc0c2I0Q7xQOLcJpQ%2BXeYdQSYqKjWihyfMMJCJVsED3y4TdCpnuyj1sGJEnTLhe6sBpxcJugAX347lj2KPeoMOHifwuIcw%2BK7KwAY6pgHOIe6y31QFKoFJcN7SjAuEAc2zsr56rtWBXMjAnHypyQB8AC5ifNVaeMLgprlGaTdN6CW8JOdTuuOlBwfEjsF0UfW3ZzH8xxekEPKSAjyne9rVxYoTDhYcrlLWAJUVB2mvD6Qw3DF1eHsEIOwIAQg%2Fl%2BoRKmRn9QBjQzbgDyV0rCe%2BAPa0dRQY%2BZirPA7fiL4XP02CP0j7cgC%2F7shYwl%2FHPwr6ZuGI&X-Amz-Signature=1e35ea3fc95fa823728044f5ca758257402fe8557fdf7255425217fc1790da95&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEFF5T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIF%2Fw8QaBwPD%2Bu5pc7jzfynszw%2BqYFUj35i%2B5lZ5dQnjuAiAUHxPVmCtCkP4EA7E%2FxLDEanGLq%2Fj1lKI%2BRb%2B26AC%2FTCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlQ2JkASEp6znaWfRKtwDkCM1oFyucs3NelcBd00PQKYpGw5qXfAtdBruys1iXCOnzqDR%2FDJcpfbb6bZWfJ4hGnRhurw17vn%2FhcIX2kfJcfmbLMgG%2F64rWuhwqx%2BXp1%2BLAR4CGKKQN7X0Bac8yJUGbV3kLbtlkb0J8QM79VCVmxiMnEAqgtMXWxUCYxnpFrKrr4zEByXuEOVzbVRN2OzOuk37kep1D7i9yRmOq%2FPHPXr1j2vmrhcos46kB2dh3qqqRJNrlMC5GGSOMl0A49l3sVEORVhEcX06R%2FOoyTVjaazN9TEBUKtdJKaQl0E4RWigLipd3nh9rT%2FFkKPt5eXiGCY3LUpDgzGjFMmq75rl0NfKBINuxwd8FA31QsQMV%2FtbyuDkbEJTo0%2F5bwCQ%2Bf8CS9o2Sw9l7lfE8vZfCKR%2FoGEC07YDXY7DjBYydKWaMA%2BFtVejRzAPB048Kpji2twAuCqXHgVJiGfObxy2ga5xY4OsA00DWfLMj3F6NTpIQRwgr3OQBodzcp2Uk8Nc735IQt0slBBQvFKg84f3ZGIlHndR%2FbWtL%2FYc0c2I0Q7xQOLcJpQ%2BXeYdQSYqKjWihyfMMJCJVsED3y4TdCpnuyj1sGJEnTLhe6sBpxcJugAX347lj2KPeoMOHifwuIcw%2BK7KwAY6pgHOIe6y31QFKoFJcN7SjAuEAc2zsr56rtWBXMjAnHypyQB8AC5ifNVaeMLgprlGaTdN6CW8JOdTuuOlBwfEjsF0UfW3ZzH8xxekEPKSAjyne9rVxYoTDhYcrlLWAJUVB2mvD6Qw3DF1eHsEIOwIAQg%2Fl%2BoRKmRn9QBjQzbgDyV0rCe%2BAPa0dRQY%2BZirPA7fiL4XP02CP0j7cgC%2F7shYwl%2FHPwr6ZuGI&X-Amz-Signature=449e52d0ff707955c0cea4b252cb708efdcb21ade8f7fccb534714c8c70f085f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MLEFF5T%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIF%2Fw8QaBwPD%2Bu5pc7jzfynszw%2BqYFUj35i%2B5lZ5dQnjuAiAUHxPVmCtCkP4EA7E%2FxLDEanGLq%2Fj1lKI%2BRb%2B26AC%2FTCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlQ2JkASEp6znaWfRKtwDkCM1oFyucs3NelcBd00PQKYpGw5qXfAtdBruys1iXCOnzqDR%2FDJcpfbb6bZWfJ4hGnRhurw17vn%2FhcIX2kfJcfmbLMgG%2F64rWuhwqx%2BXp1%2BLAR4CGKKQN7X0Bac8yJUGbV3kLbtlkb0J8QM79VCVmxiMnEAqgtMXWxUCYxnpFrKrr4zEByXuEOVzbVRN2OzOuk37kep1D7i9yRmOq%2FPHPXr1j2vmrhcos46kB2dh3qqqRJNrlMC5GGSOMl0A49l3sVEORVhEcX06R%2FOoyTVjaazN9TEBUKtdJKaQl0E4RWigLipd3nh9rT%2FFkKPt5eXiGCY3LUpDgzGjFMmq75rl0NfKBINuxwd8FA31QsQMV%2FtbyuDkbEJTo0%2F5bwCQ%2Bf8CS9o2Sw9l7lfE8vZfCKR%2FoGEC07YDXY7DjBYydKWaMA%2BFtVejRzAPB048Kpji2twAuCqXHgVJiGfObxy2ga5xY4OsA00DWfLMj3F6NTpIQRwgr3OQBodzcp2Uk8Nc735IQt0slBBQvFKg84f3ZGIlHndR%2FbWtL%2FYc0c2I0Q7xQOLcJpQ%2BXeYdQSYqKjWihyfMMJCJVsED3y4TdCpnuyj1sGJEnTLhe6sBpxcJugAX347lj2KPeoMOHifwuIcw%2BK7KwAY6pgHOIe6y31QFKoFJcN7SjAuEAc2zsr56rtWBXMjAnHypyQB8AC5ifNVaeMLgprlGaTdN6CW8JOdTuuOlBwfEjsF0UfW3ZzH8xxekEPKSAjyne9rVxYoTDhYcrlLWAJUVB2mvD6Qw3DF1eHsEIOwIAQg%2Fl%2BoRKmRn9QBjQzbgDyV0rCe%2BAPa0dRQY%2BZirPA7fiL4XP02CP0j7cgC%2F7shYwl%2FHPwr6ZuGI&X-Amz-Signature=cce2a35e45fd3d40e23d7782a8df0255124f8588a80bf9d536e09dc9bce1f228&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
