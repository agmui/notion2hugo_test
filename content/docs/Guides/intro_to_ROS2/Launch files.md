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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WA6DLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCXGZ3MfMh840oEbjyWT2p1QJmBlmNf9COoaMV2D89mwgIhANJlpMVg4MB86wiFhmcfRq99Pb3SA5O3sJUv%2FSKW7uFuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6pI7Zjlpttd%2B7w0q3AODnFiwbcil3H8a70%2FDRAATzJYHtB4I%2BOJyPgr%2FU6PblSb1siONyCl1zZd3AN5PPtn76hIASiGJUi4nc7H5vskoSS7XKRJBKAa1aqWDHAP2EkG2uk4uE5P2e5zOiwGqjEFODsS53vZkExMfuqLPK6Z%2B5E2qmq3H6GwlEeoIElN1qqmd28nVIch1%2BrpnlDtnokpVSqWJka5iwMvrGtSjoiGZDsl4vAMz7DydAlPZKsOKP%2BDVWo21clRJPQt9NWWuX7zQ4SbSP4jxin8LqalD%2FHbOl5UL%2BH4doTU822rTZTKEPJX0PqCrQdYMCoQwqdECOd8kaW1dkIcAx7Jlz0WQRxfW2%2BDmHIxUit8wkyopmd%2FbpEqfeZlM0RLnIBGhQzF6%2FDAWyxTf12z%2BaoWsfbFpuDlE2hz6McdqgTxLdYMhJZIGOO5XFEQtV%2B%2F9jN5bI3qoWXmdBB3JC6nuBsWP3n7qv5hnXK8IlDFftBqpWQltd3aQPK3K9h0REZihdYiJg85uUlWwGDDQgaX9z0TIOVvaUKkcpTOuci5OjnGzlnUjt8bgKGsCXh9rERLEnunvz%2Fw2sluZFa9%2BkmmiVoGsBkL4ceQCPvz0vZE1eMgl3rxZExbKKH%2Bpy6M46g7YpKJErzDK0v%2FABjqkAcEz8mUQ18huVBkFICrHUIPHzgwMnBqy%2By2jOu90Sjxo4eVLDOdmdpfzKazZgBAh8uRDwDt6dP3SDy44QPgsRfdwFwEeJdDnOOtqix5gb6txWwr4LnwRHsCaKO2PIXE1Wb9yojFracAWUZpuIkEzKo9KW8gGj1G%2BF%2FNCHnicbnz8CNrVyFKXdGXxq5E9Thmv5OzLgZCrizUQEHEtPfgIID3QBdiv&X-Amz-Signature=92b8025312668d3f65fb796f7fd68544248e1c82630fb58fd17e03d7cfb73f05&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WA6DLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCXGZ3MfMh840oEbjyWT2p1QJmBlmNf9COoaMV2D89mwgIhANJlpMVg4MB86wiFhmcfRq99Pb3SA5O3sJUv%2FSKW7uFuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6pI7Zjlpttd%2B7w0q3AODnFiwbcil3H8a70%2FDRAATzJYHtB4I%2BOJyPgr%2FU6PblSb1siONyCl1zZd3AN5PPtn76hIASiGJUi4nc7H5vskoSS7XKRJBKAa1aqWDHAP2EkG2uk4uE5P2e5zOiwGqjEFODsS53vZkExMfuqLPK6Z%2B5E2qmq3H6GwlEeoIElN1qqmd28nVIch1%2BrpnlDtnokpVSqWJka5iwMvrGtSjoiGZDsl4vAMz7DydAlPZKsOKP%2BDVWo21clRJPQt9NWWuX7zQ4SbSP4jxin8LqalD%2FHbOl5UL%2BH4doTU822rTZTKEPJX0PqCrQdYMCoQwqdECOd8kaW1dkIcAx7Jlz0WQRxfW2%2BDmHIxUit8wkyopmd%2FbpEqfeZlM0RLnIBGhQzF6%2FDAWyxTf12z%2BaoWsfbFpuDlE2hz6McdqgTxLdYMhJZIGOO5XFEQtV%2B%2F9jN5bI3qoWXmdBB3JC6nuBsWP3n7qv5hnXK8IlDFftBqpWQltd3aQPK3K9h0REZihdYiJg85uUlWwGDDQgaX9z0TIOVvaUKkcpTOuci5OjnGzlnUjt8bgKGsCXh9rERLEnunvz%2Fw2sluZFa9%2BkmmiVoGsBkL4ceQCPvz0vZE1eMgl3rxZExbKKH%2Bpy6M46g7YpKJErzDK0v%2FABjqkAcEz8mUQ18huVBkFICrHUIPHzgwMnBqy%2By2jOu90Sjxo4eVLDOdmdpfzKazZgBAh8uRDwDt6dP3SDy44QPgsRfdwFwEeJdDnOOtqix5gb6txWwr4LnwRHsCaKO2PIXE1Wb9yojFracAWUZpuIkEzKo9KW8gGj1G%2BF%2FNCHnicbnz8CNrVyFKXdGXxq5E9Thmv5OzLgZCrizUQEHEtPfgIID3QBdiv&X-Amz-Signature=138eac24ffc5a6df2a3956df8c3398c2794af30ff07d147c3af360301cac0ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WA6DLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCXGZ3MfMh840oEbjyWT2p1QJmBlmNf9COoaMV2D89mwgIhANJlpMVg4MB86wiFhmcfRq99Pb3SA5O3sJUv%2FSKW7uFuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo6pI7Zjlpttd%2B7w0q3AODnFiwbcil3H8a70%2FDRAATzJYHtB4I%2BOJyPgr%2FU6PblSb1siONyCl1zZd3AN5PPtn76hIASiGJUi4nc7H5vskoSS7XKRJBKAa1aqWDHAP2EkG2uk4uE5P2e5zOiwGqjEFODsS53vZkExMfuqLPK6Z%2B5E2qmq3H6GwlEeoIElN1qqmd28nVIch1%2BrpnlDtnokpVSqWJka5iwMvrGtSjoiGZDsl4vAMz7DydAlPZKsOKP%2BDVWo21clRJPQt9NWWuX7zQ4SbSP4jxin8LqalD%2FHbOl5UL%2BH4doTU822rTZTKEPJX0PqCrQdYMCoQwqdECOd8kaW1dkIcAx7Jlz0WQRxfW2%2BDmHIxUit8wkyopmd%2FbpEqfeZlM0RLnIBGhQzF6%2FDAWyxTf12z%2BaoWsfbFpuDlE2hz6McdqgTxLdYMhJZIGOO5XFEQtV%2B%2F9jN5bI3qoWXmdBB3JC6nuBsWP3n7qv5hnXK8IlDFftBqpWQltd3aQPK3K9h0REZihdYiJg85uUlWwGDDQgaX9z0TIOVvaUKkcpTOuci5OjnGzlnUjt8bgKGsCXh9rERLEnunvz%2Fw2sluZFa9%2BkmmiVoGsBkL4ceQCPvz0vZE1eMgl3rxZExbKKH%2Bpy6M46g7YpKJErzDK0v%2FABjqkAcEz8mUQ18huVBkFICrHUIPHzgwMnBqy%2By2jOu90Sjxo4eVLDOdmdpfzKazZgBAh8uRDwDt6dP3SDy44QPgsRfdwFwEeJdDnOOtqix5gb6txWwr4LnwRHsCaKO2PIXE1Wb9yojFracAWUZpuIkEzKo9KW8gGj1G%2BF%2FNCHnicbnz8CNrVyFKXdGXxq5E9Thmv5OzLgZCrizUQEHEtPfgIID3QBdiv&X-Amz-Signature=bb54f3c3ad3efe18cb31b387b9c7c18cbeb2083f0ed5eb372083b5861b05f0ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
