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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZIU5CC3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCPOW5t%2BdCxWxWXEeqUgsNLlKLs8oy6xNqIjeiF6eeGeAIgWX7BGbrEPVRgl9e5NJLBl11QnwoNt4q%2Fflz5ClQJ1GYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVNZVgDcVPrEug3rSrcAyms%2B%2FskKTzwJrzadPtj2J9IVqElRjiNae9GgucIq80nJ9mtycHMcJeJ7ZU0Gk7zNuKW5DzyRt4VAhsVDfWeC6BDcX8FOTr3R4ESKbammo7tFyldCGcYZuqK%2BUQtm3xqFIlGaHigqAV8AOaT5UM2jpoR5%2B%2BDqnKKLQ7RypHjREu5fhg%2F%2B2k2XdAxSIHydF%2BjJsYrCvKoTVramjfW4o7Y43Ioi77PywxSIBIL8yDuyomWyZWzjBSfSU38i%2BhtF8T01H5JdOpTTVZt8hV1ufHZ4afo0LacOutQj1zf3%2BgnutTTw2YmOMp%2BxqGH%2BsRi3pWxd%2BVk7oCSawZjRebXCGZSZ8utVEzYJjUJhUrouqe6jg3Tv6yuEAXVRsDKabNWjv%2Bq%2FjgT4NfPR8fFMWgPRcISFo4%2F4ttroexbfZPqW0gv0s3m%2Fm2Z8q7KZxQLMX8Qf6rhY3k%2BE9nV34u6a4H6sLUurWV5kKwDbH9fPIucHgAjwDVBIiRUDdaXBPFR0TQUgsNTOKbCgE603Ukw3Qa4Jgr6m%2FEVVJ%2BYNO%2FT6iu3tJs5zbu861qIvp8cdpfOh29BktYh3ky8vUf9PUk41Yd90d0FB8o9kZ%2BhZ4%2FQ0EX75TdlRBW38NGGYlZjmJE8Tx8AMJHl08AGOqUBG9NmIyMNqJd7NEMygh8Ve8fPzvAsyR%2Fha5f0BJGhUAQVPm6%2F8p6Z3GM%2BXRtgSPu6%2FEZqriUo7sTVA4n%2B%2FsRfIr5aZfAfgGdoBmmnKRDMtM%2BKarN75azLU4dRRw%2FtdyPQ1UIFuyvWwQUZo9viM4vdllRXfeK0QLx4OToaKL5uG5De%2FZbXZpxc3wUCwz%2Fm80recpIWK58OHP5hQpX4WXMNI3FwANde&X-Amz-Signature=811910bba04adc96577d1447ca8b8a6491e036cd5166412fbd10bf0b5166049f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZIU5CC3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCPOW5t%2BdCxWxWXEeqUgsNLlKLs8oy6xNqIjeiF6eeGeAIgWX7BGbrEPVRgl9e5NJLBl11QnwoNt4q%2Fflz5ClQJ1GYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVNZVgDcVPrEug3rSrcAyms%2B%2FskKTzwJrzadPtj2J9IVqElRjiNae9GgucIq80nJ9mtycHMcJeJ7ZU0Gk7zNuKW5DzyRt4VAhsVDfWeC6BDcX8FOTr3R4ESKbammo7tFyldCGcYZuqK%2BUQtm3xqFIlGaHigqAV8AOaT5UM2jpoR5%2B%2BDqnKKLQ7RypHjREu5fhg%2F%2B2k2XdAxSIHydF%2BjJsYrCvKoTVramjfW4o7Y43Ioi77PywxSIBIL8yDuyomWyZWzjBSfSU38i%2BhtF8T01H5JdOpTTVZt8hV1ufHZ4afo0LacOutQj1zf3%2BgnutTTw2YmOMp%2BxqGH%2BsRi3pWxd%2BVk7oCSawZjRebXCGZSZ8utVEzYJjUJhUrouqe6jg3Tv6yuEAXVRsDKabNWjv%2Bq%2FjgT4NfPR8fFMWgPRcISFo4%2F4ttroexbfZPqW0gv0s3m%2Fm2Z8q7KZxQLMX8Qf6rhY3k%2BE9nV34u6a4H6sLUurWV5kKwDbH9fPIucHgAjwDVBIiRUDdaXBPFR0TQUgsNTOKbCgE603Ukw3Qa4Jgr6m%2FEVVJ%2BYNO%2FT6iu3tJs5zbu861qIvp8cdpfOh29BktYh3ky8vUf9PUk41Yd90d0FB8o9kZ%2BhZ4%2FQ0EX75TdlRBW38NGGYlZjmJE8Tx8AMJHl08AGOqUBG9NmIyMNqJd7NEMygh8Ve8fPzvAsyR%2Fha5f0BJGhUAQVPm6%2F8p6Z3GM%2BXRtgSPu6%2FEZqriUo7sTVA4n%2B%2FsRfIr5aZfAfgGdoBmmnKRDMtM%2BKarN75azLU4dRRw%2FtdyPQ1UIFuyvWwQUZo9viM4vdllRXfeK0QLx4OToaKL5uG5De%2FZbXZpxc3wUCwz%2Fm80recpIWK58OHP5hQpX4WXMNI3FwANde&X-Amz-Signature=9adc26ff06116f77764ee4b3a3b8339702d1fd8c9ae543e748138a0b8798229a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZIU5CC3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCPOW5t%2BdCxWxWXEeqUgsNLlKLs8oy6xNqIjeiF6eeGeAIgWX7BGbrEPVRgl9e5NJLBl11QnwoNt4q%2Fflz5ClQJ1GYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVNZVgDcVPrEug3rSrcAyms%2B%2FskKTzwJrzadPtj2J9IVqElRjiNae9GgucIq80nJ9mtycHMcJeJ7ZU0Gk7zNuKW5DzyRt4VAhsVDfWeC6BDcX8FOTr3R4ESKbammo7tFyldCGcYZuqK%2BUQtm3xqFIlGaHigqAV8AOaT5UM2jpoR5%2B%2BDqnKKLQ7RypHjREu5fhg%2F%2B2k2XdAxSIHydF%2BjJsYrCvKoTVramjfW4o7Y43Ioi77PywxSIBIL8yDuyomWyZWzjBSfSU38i%2BhtF8T01H5JdOpTTVZt8hV1ufHZ4afo0LacOutQj1zf3%2BgnutTTw2YmOMp%2BxqGH%2BsRi3pWxd%2BVk7oCSawZjRebXCGZSZ8utVEzYJjUJhUrouqe6jg3Tv6yuEAXVRsDKabNWjv%2Bq%2FjgT4NfPR8fFMWgPRcISFo4%2F4ttroexbfZPqW0gv0s3m%2Fm2Z8q7KZxQLMX8Qf6rhY3k%2BE9nV34u6a4H6sLUurWV5kKwDbH9fPIucHgAjwDVBIiRUDdaXBPFR0TQUgsNTOKbCgE603Ukw3Qa4Jgr6m%2FEVVJ%2BYNO%2FT6iu3tJs5zbu861qIvp8cdpfOh29BktYh3ky8vUf9PUk41Yd90d0FB8o9kZ%2BhZ4%2FQ0EX75TdlRBW38NGGYlZjmJE8Tx8AMJHl08AGOqUBG9NmIyMNqJd7NEMygh8Ve8fPzvAsyR%2Fha5f0BJGhUAQVPm6%2F8p6Z3GM%2BXRtgSPu6%2FEZqriUo7sTVA4n%2B%2FsRfIr5aZfAfgGdoBmmnKRDMtM%2BKarN75azLU4dRRw%2FtdyPQ1UIFuyvWwQUZo9viM4vdllRXfeK0QLx4OToaKL5uG5De%2FZbXZpxc3wUCwz%2Fm80recpIWK58OHP5hQpX4WXMNI3FwANde&X-Amz-Signature=c8b1234e6e34d80362f943a74ff87aca31460232dd9eaa7051645d4eba0e1f59&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
